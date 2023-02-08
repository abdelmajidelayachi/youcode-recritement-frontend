export interface CredentialModel {
  sub: string;
  exp : number;
  iat : number;
  id : number;
  authorities: string[];
}