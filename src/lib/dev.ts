const forceDisable = false;
export const isDevEnv = !forceDisable && (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');