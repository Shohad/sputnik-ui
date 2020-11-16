import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BusinessService } from 'src/app/services/business-service.service';
import { BusinessRecord } from 'src/app/shared/models/business.model';
import { AddGuestComponent } from '../add-guest/add-guest.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedInBusiness: BusinessRecord;


  ngOnInit(): void {
    this.loggedInBusiness = this.businessService.getBusinessDummyData()[0];
    console.log('Business', this.businessService.getBusinessDummyData());

  }

  constructor(public dialog: MatDialog, private businessService: BusinessService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddGuestComponent, {
      width: '640px', disableClose: true
    });
  }

}
