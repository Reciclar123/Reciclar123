import { Injectable } from '@angular/core';
import { UserModel } from '../../models/register-data.model';


@Injectable()
export class UserProvider {

  constructor() {}

	private _user: UserModel;

	get user(): UserModel {
		if (this._user) return this._user;
		else {
			const tempo = JSON.parse(localStorage.getItem('user'));
			this._user = tempo;
			return tempo;
		}
	}

	set user(us: UserModel) {
		localStorage.setItem('user', JSON.stringify(us));
		this._user = us;
	}

	isLogin() {
		return localStorage.getItem('user') !== null;
	}

}
