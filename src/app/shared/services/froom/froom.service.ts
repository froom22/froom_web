import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class FroomService {

  constructor(private http: HttpClient) { }

  url = 'http://192.168.0.103:8080'

  public getFroomLocations(zipID: any) {
    const restURL = this.url + '/froom/zipID?zipID=30001'
    return this.http.get(restURL);
  }

  public getFroomForUUID(uuid: any) {
    const restURL = this.url + '/froom/uuID?uuID='+uuid;
    return this.http.get(restURL);
  }
}
