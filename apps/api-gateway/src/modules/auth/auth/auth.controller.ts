import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  Get,
  Res,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthGatewayService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Response, Request } from 'express';
import { Public } from './decorators/public.decorator';
import { GetCurrentUserId } from './decorators/get.current.userId.decorator';
import { RtGuard } from './guards';
import { GetCurrentUser } from './decorators/get.current.user.decorator';
import { JwtTokensService } from 'apps/auth/src/modules/auth/jwt.tokens.service';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { DtoBadRequest, DtoUnauthorized } from '@app/common/swagger/responses';
import { Throttle } from '@nestjs/throttler';

@ApiTags('Auth')
@Controller('auth')
export class AuthGatewayController {
  constructor(
    @Inject('AUTH_SERVICE') private authService: AuthGatewayService,
    private readonly jwtTokenService: JwtTokensService,
  ) {}

  @Public()
  @Throttle({ default: { limit: 3, ttl: 1000 } })
  @Post('login')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Log in as a user to your account' })
  @ApiResponse({ status: 204, description: 'Success' })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad request',
    schema: {
      $ref: getSchemaPath(DtoBadRequest),
    },
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized',
    type: DtoUnauthorized,
    schema: {
      $ref: getSchemaPath(DtoUnauthorized),
    },
  })
  public async login(
    @Body() dto: AuthDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<void> {
    const tokens = await this.authService.login(dto);
    res.cookie('accessToken', tokens.accessToken, {
      httpOnly: true,
      secure: true,
    });
    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: true,
    });
    return tokens;
  }

  @Public()
  @Throttle({ default: { limit: 3, ttl: 1000 } })
  @Post('register')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Register user account' })
  @ApiResponse({ status: 204, description: 'Success' })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad request',
    type: DtoBadRequest,
    schema: {
      $ref: getSchemaPath(DtoBadRequest),
    },
  })
  public async register(
    @Body() dto: AuthDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<void> {
    const tokens = await this.authService.register(dto);
    res.cookie('accessToken', tokens.accessToken, { httpOnly: true });
    res.cookie('refreshToken', tokens.refreshToken, { httpOnly: true });
    return tokens;
  }

  @Post('signOut')
  @HttpCode(HttpStatus.OK)
  public async signOut(
    @GetCurrentUserId() userId: number,
    @Res({ passthrough: true }) res: Response,
  ): Promise<void> {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    return this.authService.signOut(userId);
  }

  @Public()
  @Throttle({ default: { limit: 3, ttl: 1000 } })
  @UseGuards(RtGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.CREATED)
  public async refreshTokens(
    @GetCurrentUserId() userId: number,
    @GetCurrentUser('refreshToken') refreshToken: string,
  ): Promise<void> {
    await this.jwtTokenService.refreshTokens(userId, refreshToken);
  }

  @Public()
  @Get('check')
  public async checkCookie(@Req() req: Request, @Res() res: Response) {
    if (req.cookies.accessToken) {
      res.json({ isAuthenticated: true });
    } else {
      res.json({ isAuthenticated: false });
    }
  }
}
