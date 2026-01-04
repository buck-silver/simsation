import { logger } from './logger';

interface RequiredEnvVars {
  [key: string]: {
    required: boolean;
    description: string;
  };
}

const envVarSchema: RequiredEnvVars = {
  NODE_ENV: {
    required: false,
    description: 'Environment (development, production, test)',
  },
  PORT: {
    required: false,
    description: 'Server port (defaults to 4000)',
  },
  SUPABASE_URL: {
    required: true,
    description: 'Supabase project URL',
  },
  SUPABASE_KEY: {
    required: true,
    description: 'Supabase service role key (server-side only)',
  },
  ALLOWED_ORIGINS: {
    required: false,
    description: 'Comma-separated list of allowed CORS origins',
  },
  LOG_LEVEL: {
    required: false,
    description: 'Logging level (debug, info, warn, error)',
  },
};

/**
 * Validates that all required environment variables are set
 * Throws an error if validation fails
 */
export function validateEnvironment(): void {
  const missingVars: string[] = [];
  const warnings: string[] = [];

  for (const [key, config] of Object.entries(envVarSchema)) {
    const value = process.env[key];

    if (config.required && !value) {
      missingVars.push(`${key} - ${config.description}`);
    } else if (!config.required && !value) {
      warnings.push(`${key} - ${config.description} (using default)`);
    }
  }

  if (missingVars.length > 0) {
    logger.error('Missing required environment variables:');
    missingVars.forEach((msg) => logger.error(`  - ${msg}`));
    throw new Error('Environment validation failed. Check .env.example for required variables.');
  }

  if (warnings.length > 0 && process.env['NODE_ENV'] !== 'test') {
    logger.warn('Optional environment variables not set:');
    warnings.forEach((msg) => logger.warn(`  - ${msg}`));
  }

  // Validate NODE_ENV
  const nodeEnv = process.env['NODE_ENV'];
  if (nodeEnv && !['development', 'production', 'test'].includes(nodeEnv)) {
    logger.warn(`Invalid NODE_ENV: ${nodeEnv}. Should be one of: development, production, test`);
  }

  // Security warnings
  if (process.env['NODE_ENV'] === 'production') {
    if (!process.env['ALLOWED_ORIGINS']) {
      logger.warn('ALLOWED_ORIGINS not set in production. Using default localhost origins.');
    }
    
    const supabaseKey = process.env['SUPABASE_KEY'] || '';
    if (supabaseKey.includes('anon') || supabaseKey.includes('public')) {
      logger.error('⚠️  WARNING: Using anon/public Supabase key on server-side. Use service_role key!');
    }
  }

  logger.info('Environment validation passed');
}
