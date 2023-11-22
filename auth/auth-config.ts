import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "b60c9f04-029f-457e-ba3b-4dd8c55ec470",
    authority:
      "https://sthotelservice.b2clogin.com/sthotelservice.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_ST_Hotel_Service",
    redirectUri: "https://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage",
    temporaryCacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
    secureCookies: false,
    claimsBasedCachingEnabled: true,
  },
  system: {
    loggerOptions: {
      loggerCallback: (
        level: LogLevel,
        message: string,
        containsPii: boolean,
      ): void => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
      piiLoggingEnabled: false,
    },
    windowHashTimeout: 60000,
    iframeHashTimeout: 6000,
    loadFrameTimeout: 0,
    asyncPopups: false,
  },
  telemetry: {
    application: {
      appName: "My Application",
      appVersion: "1.0.0",
    },
  },
};

export const loginRequest = {
  scopes: [
    "openid",
    ...[
      "https://sthotelservice.onmicrosoft.com/6649171b-4fa2-4639-9f8a-c678bf866517/signIn.public",
    ],
  ],
};

export const tokenRequest = {
  scopes: [
    ...[
      "https://sthotelservice.onmicrosoft.com/6649171b-4fa2-4639-9f8a-c678bf866517/signIn.public",
    ],
  ], // e.g. ["https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read"]
  forceRefresh: false, // Set this to "true" to skip a cached token and go to the server to get a new token
};
