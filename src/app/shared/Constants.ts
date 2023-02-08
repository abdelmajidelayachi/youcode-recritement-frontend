import { environment } from 'src/environments/environment';

export const Constants = {
  apiEndPoint: {
    auth: {
      login: environment.baseUrl + 'authentication/auth',
      register: environment.baseUrl + 'authentication/register',
      logout: environment.baseUrl + 'authentication/logout',
    },
    hr: {
      profile: environment.baseUrl + 'hr/profile',
      getHrs: environment.baseUrl + 'hrs',
      getHr: environment.baseUrl + 'hr/:id',
      addHr: environment.baseUrl + 'hr',
      updateHr: environment.baseUrl + 'hr/:id',
      deleteHr: environment.baseUrl + 'hr/:id',
    },
    candidate: {
      profile: environment.baseUrl + 'candidate/profile',
      getCandidates: environment.baseUrl + 'candidates',
      getCandidate: environment.baseUrl + 'candidate/:id',
      updateCandidate: environment.baseUrl + 'candidate/:id',
      updateImage: environment.baseUrl + 'candidateImage',
      uploadDocument: environment.baseUrl + 'document',
      getOneDocument: environment.baseUrl + 'documents/:id',
    },
    admin: {
      profile: environment.baseUrl + 'admin/profile',
    },
    comment: {
      addComment: environment.baseUrl + 'comment/:id',
      getAllComments: environment.baseUrl + 'comments/:id',
    },
    skills: {
      getAllSkills: environment.baseUrl + 'skills',
      addSkills: environment.baseUrl + 'skills',
      deleteSkill: environment.baseUrl + 'skills/update-skills',
    },
    // other api endpoints go here
  },
};
