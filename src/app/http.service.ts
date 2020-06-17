import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

   getDataResult(x, y) {
     return this.http.post('http://localhost:81/postCppData.php', {
       result: x,
       testValue: y
     });
   }
}
