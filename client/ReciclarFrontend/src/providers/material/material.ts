import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MaterialModel, MaterialTypeModel } from '../../models/donations.model';
import { MATERIAL_STATES, UNITIES } from "../../models/static-data/static-data";
import { RequestProvider } from '../request/request';


@Injectable()
export class MaterialProvider {

  private MATERIAL_TYPE: Array<MaterialTypeModel> = [];

  constructor(public http: HttpClient,
    public request: RequestProvider) {
    console.log('Hello MaterialProvider Provider');
    this.request.getMaterialTypes().subscribe((data) => {
      this.MATERIAL_TYPE = data;
    });
  }

  getMyMaterials() {
    return this.request.getMyMaterials();
  }

  saveMaterial(material: MaterialModel) {
    this.request.saveMaterial(material).subscribe((data) => {
      console.log('saveMaterial', data);
      //this.setMaterialInLocal(data);
    });
  }

  updateMaterial(material: MaterialModel) {
    this.request.updateMaterial(material).subscribe((data) => {
      console.log('updateMaterial', data);
      //this.setMaterialInLocal(data);
    });
  }

  getMaterialValuebyId(id: string) {
    let material = '';
    this.MATERIAL_TYPE.map(mat => {
      if (mat.id === id) material = mat.descripcion;
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

  getUnitiesValuebyId(idMat: string, idUnity: string) {
    let unityName = '';
    this.MATERIAL_TYPE.map(mat => {
      if (mat.id === idMat) {
        mat.unidades.map(unity => {
          if (unity.id == idUnity) {
            unityName = unity.descripcion;
          }
        });
      }
    });
    return unityName;
  }

}
