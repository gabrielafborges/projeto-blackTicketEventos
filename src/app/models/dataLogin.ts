export interface RequestLogin {
    email: string,
    senha: string,
}

export interface Claim {
  value: "string",
  type: "string"
}

export interface UserToken {
  id: string,
  email: string,
  claims: Claim[]
}

export interface LoginResponse {
  accessToken: string,
  expiresIn:string,
  refreshToken: string,
  usuarioToken: UserToken
}