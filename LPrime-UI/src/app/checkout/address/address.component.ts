import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

export interface DialogData {
  name: string;
  mobileNo: number;
}

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openAddAddressDialog(): void {
    console.log("inside open Add");
    const dialogRef = this.dialog.open(AddEditAddressDialog, {
      width: '450px', height:'450px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

@Component({
  selector: 'add-edit-address-dialog',
  templateUrl: 'add-edit-address-dialog.html',
  styleUrls: ['./address.component.css']
})
export class AddEditAddressDialog implements OnInit {
  addressForm: FormGroup;
  submitted = false;

  constructor( public dialogRef: MatDialogRef<AddEditAddressDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}


  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.addressForm = new FormGroup({
      name: new FormControl('', Validators.required),
      mobileNo: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      pinCode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      societyName: new FormControl('', Validators.required),
      locality: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required)
    });
  }

  submitAddress(): void {
    console.warn(this.addressForm.value);
    this.closeDialog();
  }
}
