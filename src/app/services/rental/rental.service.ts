import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from 'src/app/models/customer/customerResponseModel';
import { RentalResponseModel } from 'src/app/models/rental/rentalResponseModel';
import { CustomerService } from '../customer/customer.service';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = 'https://localhost:44354/api/rentals/get-rentals-detail';

  constructor(private httpClient:HttpClient) { }

  getrentals():Observable<RentalResponseModel>{
    return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }

}
