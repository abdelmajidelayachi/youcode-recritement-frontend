import { environment } from 'src/environments/environment';

export const Constants = {
  apiEndPoint: {
    auth: {
      login: environment.baseUrl + 'authentication/auth',
      register: environment.baseUrl + 'authentication/register',
      logout: environment.baseUrl + 'authentication/logout',
    },
    hr: {
      getHrs: environment.baseUrl + 'hrs',
      getHr: environment.baseUrl + 'hr/:id',
      addHr: environment.baseUrl + 'hr',
      updateHr: environment.baseUrl + 'hr/:id',
      deleteHr: environment.baseUrl + 'hr/:id',
    },
    candidate: {
      getCandidates: environment.baseUrl + 'candidates',
      getCandidate: environment.baseUrl + 'candidate/:id',
      updateCandidate: environment.baseUrl + 'candidate/:id',
      updateImage: environment.baseUrl + 'candidateImage/:id',
    },
    // other api endpoints go here
  },
};
