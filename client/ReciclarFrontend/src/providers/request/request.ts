import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENV } from "../../config/environments";
import { Credentials, ResponseUser } from '../../models/credentials.model';
import { RegisterData, UserModel } from '../../models/register-data.model';


@Injectable()
export class RequestProvider {


  constructor(public http: HttpClient) {
    console.log('Hello RequestProvider Provider');
  }

	public checklogin( credentials: Credentials ) {
		const headers = new HttpHeaders({"Content-Type": "application/json"});
		return this.http
			.post<UserModel>(ENV.API_ENDPOINT + ENV.loginMethod, credentials, {
				headers
			});
  }
  
  public registerUser( userData: RegisterData) {
		const headers = new HttpHeaders({"Content-Type": "application/json"});
		return this.http
			.post<UserModel>(ENV.API_ENDPOINT + ENV.registerMethod, userData, {
				headers
			});
  }

}
