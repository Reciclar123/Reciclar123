import { Injectable } from '@angular/core';


@Injectable()
export class UserProvider {

  constructor() {}

	isLogin() {
    return localStorage.getItem('id') !== null && 
           localStorage.getItem('ttl') !== null && 
           localStorage.getItem('userId') !== null;
	}

}
