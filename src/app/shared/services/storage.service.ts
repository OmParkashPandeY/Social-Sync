import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
     providedIn: 'root'
})
export class StorageService {
     private seckey: string = 'Social-Sync-!@9257294294292AMSTS';

     // prettier-ignore
     constructor(
          ) {}

     public isUserLoggedIn() {
          if (this.get('isUserLoggedIn')) {
               let status = JSON.parse(this.get('isUserLoggedIn'));
               return status;
          } else {
               return false;
          }
     }

     public setUserLoggedIn(data: any) {
          this.set('isUserLoggedIn', JSON.stringify(data));
     }

     public setPictureCategories(data: any) {
          this.set('pics-categories', JSON.stringify(data));
     }

     public getPictureCategories() {
          if (this.get('pics-categories')) {
               let filters = JSON.parse(this.get('pics-categories'));
               return filters;
          } else {
               return null;
          }
     }

     private set(key: string, value: any, storage = null): boolean {
          if (storage) {
               if (sessionStorage.getItem(key)) {
                    sessionStorage.removeItem(key);
                    sessionStorage.setItem(key, this.encrypt(value));
               } else {
                    sessionStorage.setItem(key, this.encrypt(value));
               }
               return true;
          } else {
               if (localStorage.getItem(key)) {
                    localStorage.removeItem(key);
                    localStorage.setItem(key, this.encrypt(value));
               } else {
                    localStorage.setItem(key, this.encrypt(value));
               }
               return true;
          }
     }

     private get(key: string, storage = null): string {
          if (storage) {
               if (sessionStorage.getItem(key)) {
                    return this.decrypt(sessionStorage.getItem(key));
               } else {
                    return '';
               }
          } else {
               if (localStorage.getItem(key)) {
                    return this.decrypt(localStorage.getItem(key));
               } else {
                    return '';
               }
          }
     }

     private encrypt(value: string): string {
          return CryptoJS.AES.encrypt(value, this.seckey.trim()).toString();
     }

     private decrypt(text: string) {
          return CryptoJS.AES.decrypt(text, this.seckey.trim()).toString(CryptoJS.enc.Utf8);
     }

     public encryptId(value: string): string {
          return CryptoJS.AES.encrypt(value, this.seckey.trim()).toString();
     }

     public decryptId(text: string) {
          return CryptoJS.AES.decrypt(text, this.seckey.trim()).toString(CryptoJS.enc.Utf8);
     }

     public clearAll() {
          localStorage.clear();
          sessionStorage.clear();
     }
}
