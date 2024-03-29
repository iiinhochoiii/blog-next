export const isDevelopmentEnv = (): boolean => {
  let isDevelopmentEnv = false;

  try {
    if (process.env.NEXT_PUBLIC_ENV === 'development') {
      isDevelopmentEnv = true;
    }
  } catch (err) {
    console.log(err);
  }

  return isDevelopmentEnv;
};

export const isProductionEnv = (): boolean => {
  let isProductionEnv = false;

  try {
    if (process.env.NEXT_PUBLIC_ENV === 'production') {
      isProductionEnv = true;
    }
  } catch (err) {
    console.log(err);
  }

  return isProductionEnv;
};

export const getProtocolHost = (): string => {
  let protocolHost = 'http://localhost:5001';

  switch (process.env.NEXT_PUBLIC_ENV) {
    case 'development':
      protocolHost = 'http://localhost:5001';
      break;
    case 'production':
      protocolHost = 'https://c-tech-iiinhochoiii.koyeb.app';
      break;
  }

  return protocolHost;
};
