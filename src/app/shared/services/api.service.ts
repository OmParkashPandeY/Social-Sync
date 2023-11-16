import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { map, catchError, timeout } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({
     providedIn: 'root'
})
export class ApiService extends BaseService {
     public headers: HttpHeaders;

     constructor(protected _http: HttpClient) {
          super();
     }

     public getUnplashImages(payload: any) {
          // let payload: any = {
          //         count: 10,
          //         orientation: 'landscape',
          //         query: 'beautiful girl',
          //         perPage: 20,
          //         language: 'en'
          //    };
          let url = `https://api.unsplash.com/search/photos/?count=${payload.count}&orientation=${payload.orientation}&query=${payload.query}&per_page=${payload.perPage}&lang=${payload.language}&client_id=LUsE3cSsB_p3JctGSODk_KcZpL6uY3NflLsNM4BoZDE`;
          return this._http.get(url).pipe(map(this.handleMap), catchError(this.handleError));
     }

     //    ----------------------------------------------
}
