import { environment } from 'src/environments/environment';

export const Constants = {
  apiEndPoint: {
    auth: {
      login: environment.baseUrl + 'authentication/auth',
      register: environment.baseUrl + 'authentication/register',
      logout: environment.baseUrl + 'authentication/logout',
    },
    // other api endpoints go here
  },
};
