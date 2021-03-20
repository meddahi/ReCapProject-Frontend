import { Rental } from "./rental";
import { ResponseModel } from "../responseModel";

export interface ResponseRentalModel extends ResponseModel{
    data:Rental[];
}