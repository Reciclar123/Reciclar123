import { Injectable } from '@angular/core';
import { UserModel } from '../../models/register-data.model';


@Injectable()
export class UserProvider {

  constructor() {}

	private _user: UserModel;

	get user(): UserModel {
		if (this._user) {
			return this._user;
		} else {
			const tempUsr = JSON.parse(localStorage.getItem('user'));
			this._user = tempUsr;
			return tempUsr;
		}
	}

	set user(us: UserModel) {
		if(us.addressPerson) {
			us.address = us.addressPerson;
		}
		localStorage.setItem('user', JSON.stringify(us));
		const tempUsr = JSON.parse(localStorage.getItem('user'));
		this._user = tempUsr;
	}

	isLogin() {
		return localStorage.getItem('user') !== null;
	}

}
