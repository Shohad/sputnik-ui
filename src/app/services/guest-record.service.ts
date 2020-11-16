import { Injectable } from '@angular/core';
import { GuestRecord } from '../shared/models/guest.model';

@Injectable({
  providedIn: 'root'
})
export class GuestRecordService {

  constructor() { }

  public getGuestDummyData(): GuestRecord[] {
    return ELEMENT_DATA;
  }
}


const ELEMENT_DATA: GuestRecord[] = [
  { fName: 'ocanada', lName: 'john', phone: '(123) 456 7890', email: 'canada@gmail.com', time: 'Jan 12 at 20:02' },
  { fName: 'John Dow', lName: 'john', phone: '(123) 456 7890', email: 'ocanada@gmail.com', time: 'Jan 12 at 20:02' },
  { fName: 'Michel Trump', lName: 'john', phone: '(123) 456 7890', email: 'canada@gmail.com', time: 'Jan 12 at 20:02' },
  { fName: 'Mark Trump', lName: 'john', phone: '(123) 456 7890', email: 'canada@gmail.com', time: 'Jan 12 at 20:02' },
  { fName: 'Hydrogen Biden', lName: 'john', phone: '(123) 456 7890', email: 'canada@gmail.com', time: 'Jan 12 at 20:02' },
  { fName: 'Hydrogen Obama', lName: 'john', phone: '(123) 456 7890', email: 'canada@gmail.com', time: 'Jan 12 at 20:02' },
];