import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
// we can now access environment.apiUrl
const API_URL = environment.apiUrl;
@Injectable()
export class ApiService {

  constructor() { }

}
