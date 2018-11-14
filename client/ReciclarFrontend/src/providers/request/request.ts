import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENV } from "../../config/environments";
import { Credentials } from '../../models/credentials.model';
import { RegisterData, UserModel, RegisterResponseModel, addressModel } from '../../models/register-data.model';
import { Subject } from 'rxjs/Subject';
import { MaterialTypeModel, MaterialModel, DeliveryMaterials, DeliveryMaterialsRp, AllMaterialList } from '../../models/donations.model';
import { UserProvider } from '../user/user';


@Injectable()
export class RequestProvider {

	// Se crea un subject para instanciar un observable
	private subjUser = new Subject<UserModel>();
	public $obsUser = this.subjUser.asObservable();
	private _user: UserModel;
	private ACCESS_TOKEN;

	constructor(public http: HttpClient,
		public userProv: UserProvider) {
		this._user = this.userProv.user;
		console.log('this._user', this._user);
		this.ACCESS_TOKEN = '?access_token=' + localStorage.getItem('tokenId');
	}

	// metodo para disparar el observable de config
	public generateUserData(data: UserModel) {
		this.subjUser.next(data);
	}

	public checklogin(credentials: Credentials) {
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		return this.http
			.post<RegisterResponseModel>(ENV.API_ENDPOINT + ENV.loginMethod, credentials, {
				headers
			});
	}

	public registerUser(userData: RegisterData) {
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		return this.http
			.post<RegisterResponseModel>(ENV.API_ENDPOINT + ENV.registerMethod, userData, {
				headers
			});
	}

	public getMaterialTypes() {
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		return this.http
			.get<[MaterialTypeModel]>(ENV.API_ENDPOINT + ENV.materialTypeMethod, {
				headers
			});
	}

	public getMyMaterials() {
		console.log(this._user);
		const userId = this._user.personId;
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		return this.http
			.get<[MaterialModel]>(ENV.API_ENDPOINT + '/Persons/' + userId + '/materiales' + this.ACCESS_TOKEN, {
				headers
			});
	}

	public saveMaterial(material: MaterialModel) {
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		return this.http
			.post<MaterialModel>(ENV.API_ENDPOINT + ENV.materialMethod + this.ACCESS_TOKEN, material, {
				headers
			});
	}

	public updateMaterial(material: MaterialModel) {
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		return this.http
			.put<MaterialModel>(ENV.API_ENDPOINT + ENV.materialMethod + this.ACCESS_TOKEN, material, {
				headers
			});
	}

	public deleteMaterial(materialId: string) {
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		return this.http
			.delete(ENV.API_ENDPOINT + ENV.materialMethod + '/' + materialId + this.ACCESS_TOKEN, {
				headers
			});
	}

	public deliveryMaterials(delMaterials: DeliveryMaterials) {
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		return this.http
			.post<DeliveryMaterialsRp>(ENV.API_ENDPOINT + ENV.recyclingsMethod + this.ACCESS_TOKEN, delMaterials, {
				headers
			});
	}

	public getAllMaterials() {
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		return this.http
			.get<Array<AllMaterialList>>(ENV.API_ENDPOINT + ENV.materialMethod + '?filter[where][status]=publicado', {
				headers
			});
	}

	public getAddressByPersonId(personId: string) {
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		return this.http
			.get<Array<addressModel>>(ENV.API_ENDPOINT + ENV.registerMethod + '/' +personId + '/address', {
				headers
			});
	}

}
