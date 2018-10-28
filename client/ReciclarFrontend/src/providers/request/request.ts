import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENV } from "../../config/environments";
import { Credentials } from '../../models/credentials.model';


@Injectable()
export class RequestProvider {


  constructor(public http: HttpClient) {
    console.log('Hello RequestProvider Provider');
  }

	public checklogin( credentials: Credentials ) {
		const headers = new HttpHeaders({"Content-Type": "application/json"});
		return this.http
			.post<ResponseUser>(ENV.API_ENDPOINT + ENV.loginMethod, credentials, {
				headers
			});
	}

}

export interface ResponseUser {
  id: string;
  ttl: number;
  created: string;
  userId: string;
}