import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css']
})
export class AddGuestComponent implements OnInit {

  //public breakpoint: number; // Breakpoint observer code
  public addGuestFormGroup: FormGroup;
  wasFormChanged = false;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { }

  public ngOnInit(): void {
    this.createFromGroup();
  }

  public onAddCus(): void {
    this.markAsDirty(this.addGuestFormGroup);
  }

  public createFromGroup(): void {
    this.addGuestFormGroup = this.fb.group({
      guestFirstName: '',
      guestLastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      guestPhone: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      guestEmail: ['', [Validators.required, Validators.email]],
    });
  }

  openDialog(): void {
    console.log(this.wasFormChanged);
    if (this.addGuestFormGroup.dirty) {

    } else {
      this.dialog.closeAll();
    }
  }

  // // tslint:disable-next-line:no-any
  // public onResize(event: any): void {
  //   this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  // }



  private markAsDirty(group: FormGroup): void {
    group.markAsDirty();
    // tslint:disable-next-line:forin
    for (const i in group.controls) {
      group.controls[i].markAsDirty();
    }
  }

  formChanged() {
    this.wasFormChanged = true;
  }

}
