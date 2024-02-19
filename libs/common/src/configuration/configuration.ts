import * as Joi from 'joi';
import * as process from 'process';

import { AppConfig } from './types';

export default (): AppConfig => {
  const schema = Joi.object({
    accessTokenSecret: Joi.string().required(),
    refreshTokenSecret: Joi.string().required(),
    accessTokenExpiresIn: Joi.string().required(),
    refreshTokenExpiresIn: Joi.string().required(),
    port: Joi.number().positive().required(),
  });

  const { error, value } = schema.validate({
    accessTokenSecret: process.env.ATSECRET,
    refreshTokenSecret: process.env.RTSECRET,
    accessTokenExpiresIn: process.env.ATEXPIREIN,
    refreshTokenExpiresIn: process.env.RTEXPIREIN,
    port: parseInt(process.env.PORT, 10),
  });

  if (error) {
    throw new Error(`Invalid app configuration: ${error.message}`);
  }

  return value as AppConfig;
};
