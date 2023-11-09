import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InsuranceForm } from '../models/eosgouz/osgovts/insuranceForm';
import { Telegram } from '@twa-dev/types';
import { ResponseResult } from '../models/responseResult';

declare global {
  interface Window {
    Telegram: Telegram;
  }
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  http = inject(HttpClient);
  private url = 'api/agent';
  
  public getPolicyBySeriaAndNumberAndVehicleNumber(seria: string, number: string, govNumber: string): Observable<ResponseResult<InsuranceForm>> {
    const hash = "query_id=AAH0al9MAgAAAPRqX0xx9eji&user=%7B%22id%22%3A5576289012%2C%22first_name%22%3A%22Neptune%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22nep2ne%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1699359331&hash=beb97994d06294d0fcfdd3f777f7c190ff9f123c29bf2e09cec58ea6bfec3320"; 
    //window?.Telegram?.WebApp?.initData;

    const headers = new HttpHeaders().set('tg-hash', hash);

    const url = `${environment.agentApiUrl}/${this.url}/GetPolicyBySeriaAndNumberAndVehicleNumber/?seria=${seria}&number=${number}&vehicleNumber=${govNumber}`;
   
    return this.http.get<ResponseResult<InsuranceForm>>(url, { headers });
    // const hash = window?.Telegram?.WebApp?.initData;
    // return this.http.get<InsuranceForm>(`${environment.apiUrl}/${this.url}/GetPolicyBySeriaAndNumberAndVehicleNumber/?seria=${seria}&number=${number}&vehicleNumber=${govNumber}`);
  }


  // public updateHero(hero: SuperHero): Observable<SuperHero[]> {
  //   return this.http.put<SuperHero[]>(
  //     `${environment.apiUrl}/${this.url}`,
  //     hero
  //   );
  // }

  // public createHero(hero: SuperHero): Observable<SuperHero[]> {
  //   return this.http.post<SuperHero[]>(
  //     `${environment.apiUrl}/${this.url}`,
  //     hero
  //   );
  // }

  // public deleteHero(hero: SuperHero): Observable<SuperHero[]> {
  //   return this.http.delete<SuperHero[]>(
  //     `${environment.apiUrl}/${this.url}/${hero.id}`
  //   );
  // }
}
