enum Environments {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development'
}

const APPLICATION_ENVIRONMENT = process.env.NODE_ENV;

export function isProductionEnvironment(): boolean {
  return Environments.PRODUCTION === APPLICATION_ENVIRONMENT;
}

export function isDevelopmentEnvironment(): boolean {
  return Environments.PRODUCTION === APPLICATION_ENVIRONMENT;
}
