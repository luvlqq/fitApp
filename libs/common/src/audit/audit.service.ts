import { PrismaService } from '@app/db';
import { Injectable } from '@nestjs/common';
import { Audit } from '@prisma/client';

@Injectable()
export class AuditService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Audit method. Add params to DB for save error logs
   * @param {string} scope? - error scope
   * @param {string} name? - error name
   * @param {string} text? - error text
   * @returns {Promise<Audit>} Promise<Audit>
   */
  public async createAuditLog(
    scope?: string,
    name?: string,
    text?: string,
  ): Promise<Audit> {
    return this.prisma.audit.create({
      data: { scope: scope, name: name, text: text },
    });
  }
}
