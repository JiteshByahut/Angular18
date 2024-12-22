import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EmployeeModel } from "../models/Employee";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class HttpService {
    constructor(private httpClient: HttpClient) {
    }

    getAll(): Observable<EmployeeModel[]> {
        return this.httpClient.get<EmployeeModel[]>('https://localhost:7209/api/Employees');
    }

    getById(id:string): Observable<any> {
        return this.httpClient.get<EmployeeModel>('https://localhost:7209/api/Employees/'+ id);
    }

    post(employee: EmployeeModel){
        return this.httpClient.post('https://localhost:7209/api/Employees/', employee);
    }

    put(employee: EmployeeModel){
        return this.httpClient.put('https://localhost:7209/api/Employees/', employee);
    }

    delete(id: string){
        return this.httpClient.delete('https://localhost:7209/api/Employees/'+ id);
    }
}