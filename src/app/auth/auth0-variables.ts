interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'Au5Iz76MfyPlSTJPzlnc34Dl3zCejv0T',
  domain: 'sharecard.auth0.com',
  callbackURL: 'http://dealpelo.burrow.io/callback',
  apiUrl: 'dealpelo.com'
};
