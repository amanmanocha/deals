interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '8tMXFImTa8n9Clm8tcimsIiL2QjD4FqD',
  domain: 'profferz.auth0.com',
  callbackURL: 'https://www.profferz.com/callback',
  apiUrl: 'https://profferz.auth0.com/api/v2/'
};
