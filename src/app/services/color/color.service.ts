import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from 'src/app/models/color/colorResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = 'https://localhost:44354/api/colors/get-colors-detail';

  constructor(private httpClient:HttpClient) { }

  getcolors():Observable<ColorResponseModel>{
    return this.httpClient.get<ColorResponseModel>(this.apiUrl);
  }
}
