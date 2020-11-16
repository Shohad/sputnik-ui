import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { BusinessRecord } from '../shared/models/business.model';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  public static get url() { return '/endpoint_url/business'; }

  constructor(private http: HttpClient) { }

  // this is for getting dummy data to the page
  public getBusinessDummyData(): BusinessRecord[] {
    return ELEMENT_DATA;
  }


  // saveOrUpdateBusiness(businessData: BusinessRecord): Observable<{}> {
  //   return this.http.post<BusinessRecord>(`${BusinessService.url}/business`, businessData, {
  //     headers: ContentTypeHttpHeader
  //   }).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // deleteBusiness(businessNameOrId: string): Observable<{}> {
  //   return this.http.delete(`${BusinessService.url}/business/${businessNameOrId}`)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // getBusiness(): Observable<BusinessRecord[]> {
  //   return this.http.get<BusinessRecord[]>(`${BusinessService.url}/business`, {
  //     headers: ContentTypeHttpHeader
  //   }).pipe(
  //     catchError(this.handleError)
  //   );

  // }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

}


const ELEMENT_DATA: BusinessRecord[] = [
  { name: 'Shawarma Palace', email: 'canada@gmail.com', password: 'sdfsetrfs345rtfg', phone: '(123) 456 7890', city: 'Tronto', streetName: 'Ford st.', streetNumber: '123', state: 'ON', country: 'Canada' },
  { name: 'ocanada', email: 'canada@gmail.com', password: 'sdfsetrfs345rtfg', phone: '(123) 456 7890', city: 'tronto', streetName: 'Ford st.', streetNumber: '123', state: 'ON', country: 'Canada' },
  { name: 'ocanada', email: 'canada@gmail.com', password: 'sdfsetrfs345rtfg', phone: '(123) 456 7890', city: 'tronto', streetName: 'Ford st.', streetNumber: '123', state: 'ON', country: 'Canada' },
  { name: 'ocanada', email: 'canada@gmail.com', password: 'sdfsetrfs345rtfg', phone: '(123) 456 7890', city: 'tronto', streetName: 'Ford st.', streetNumber: '123', state: 'ON', country: 'Canada' },
  { name: 'ocanada', email: 'canada@gmail.com', password: 'sdfsetrfs345rtfg', phone: '(123) 456 7890', city: 'tronto', streetName: 'Ford st.', streetNumber: '123', state: 'ON', country: 'Canada' },
];