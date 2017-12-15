interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'lbl0g3Q4My2EG53K4rZnUGKygA5PLKHr',
  domain: 'profferz.auth0.com',
  callbackURL: 'https://www.profferz.com/callback',
  apiUrl: 'profferz.com'
};
