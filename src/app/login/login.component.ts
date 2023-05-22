import { Component, OnInit, ViewChild } from '@angular/core';
// import firebase from 'firebase/compat/app';
// import * as firebaseui from 'firebaseui';
// import 'firebaseui/dist/firebaseui.css'
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  createUserForm!: FormGroup;
  @ViewChild('createForm') createForm: FormGroupDirective | undefined;

  constructor(private modalController: ModalController) { }

  ngOnInit(): void {
    this.createUserForm = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'email': new FormControl(''),
      'phone': new FormControl('', Validators.required)
    });
  }

  createUser(values: any) {
    console.log('CreateContact output:', ...values);
    // copy all the form values into the new contact
    // let newContact: Contact = { ...values };
    // this.dataService.createContact(newContact);
    // this.dismissModal();
  }

  cancel() {
    return this.modalController.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalController.dismiss(null, 'confirm');
  }
}
