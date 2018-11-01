import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MaterialModel } from '../../models/donations.model';
import { MATERIALS, MATERIAL_STATES, UNITIES } from "../../models/static-data";


@Injectable()
export class MaterialProvider {

  private _materials: Array<MaterialModel>;

  constructor(public http: HttpClient) {
    console.log('Hello MaterialProvider Provider');
  }

  getMaterialsInLocal(): Array<MaterialModel> {
    const mat = JSON.parse(localStorage.getItem('materials'));
    console.log('materials', mat)
    this._materials = mat;
    if (this._materials === undefined || this._materials === null) {
      this._materials = [];
    }
    return this._materials;
  }

  setMaterialInLocal(mat: MaterialModel) {
    this._materials = this.getMaterialsInLocal();
    this._materials.push(mat);
    localStorage.setItem('materials', JSON.stringify(this._materials));
  }

  setMaterialsInLocal(materials: Array<MaterialModel>) {
    this._materials = materials;
    localStorage.setItem('materials', JSON.stringify(materials));
  }

  getMaterialValuebyId(id: string) {
    let material = '';
    MATERIALS.map( mat => {
      if(mat.id === id) material = mat.name;
    });
    return material;
  }

  getMaterialStatesValuebyId(id: string) {
    let stateName = '';
    MATERIAL_STATES.map(state => {
      if (state.id === id) stateName = state.name;
    });
    return stateName;
  }

  getUnitiesValuebyId(id: string) {
    let unityName = '';
    UNITIES.map(unity => {
      if(unity.id === id) unityName = unity.name;
    });
    return unityName;
  }

}
