import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/observable";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private URL: string = "http://localhost:3000/data";

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.URL);
  }
}
