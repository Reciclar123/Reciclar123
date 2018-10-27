import { Injectable } from '@angular/core';

@Injectable()
export class ValidationsProvider {

  constructor() {}

  EMAIL_REGEXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  NUMBER_REGEXP = /^\d+$/;

}
