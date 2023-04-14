// autenticacion-api.ts
import axios, { AxiosError } from "axios";

export interface AutenticacionAPI {
  login(email: string, password: string): Promise<string>;
}

export class AutenticacionAPIAxios implements AutenticacionAPI {
  private baseUrl:string;
  constructor(baseUrl: string) {
    const myVariable =process.env.AUTH_API_BASE_URL;
    console.log('login post base1',baseUrl, myVariable)
    this.baseUrl= baseUrl;
  }

  async login(user_name: string, user_password: string): Promise<string> {
    console.log('login post base2',this.baseUrl)
    return new Promise(async (resolve, reject) => {
    try{
      const response = await axios.post(`${this.baseUrl}/market/users/login`, { user_name, user_password });
      return resolve(response.data);
    }catch(error: any){
      if (error.response.status === 404) {
        console.log('No se encontró el recurso solicitado');
        return reject(error.response);
      } else {
        console.error('Ocurrió un error al realizar la solicitud', error);
        return reject(error.response);
      }
    }
  });
  }
  
}