import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  dates: number[] = [];
  months: string[] = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  years: number[] = [];

  firstName: string = "";
  lastName: string = "";
  gender: boolean = true;
  whatsapp: number = null;
  domicilie: string = "";
  date: number = 1;
  month: number = 1;
  year: number = (new Date).getFullYear() - 20;
  job: string = "";

  firstNameError: string = "";
  lastNameError: string = "";
  whatsappError: string = "";
  domicilieError: string = "";
  jobError: string = "";

  errorCount: number = 0;
  completeCount: number = 0;
  filledForm: boolean = false;

  registrationSuccess: boolean = false;

  ngOnInit() {
    this.getDatesList();
  }

  getDatesList() {
    for (let d = 1; d <= 31; d++)
      this.dates.push(d);

    const date = new Date;

    for (let y = date.getFullYear() - 10; y >= 1960; y--)
      this.years.push(y);
    
  }

  validateFirstName(event) {
    this.filledForm = true;
    if (event.target.value === "") {
      this.firstNameError = "Tidak boleh kosong";
      this.errorCount++;
    } else if (! event.target.value.match(/^[a-zA-Z ]+$/)) {
      this.firstNameError = "Nama tidak valid";
      this.errorCount++;
    } else {
      this.firstNameError = "";
      this.completeCount++;
    }
  }

  validateLastName(event) {
    if (event.target.value === "") {
      this.lastNameError = "";
    } else if (! event.target.value.match(/^[a-zA-Z ]+$/)) {
      this.lastNameError = "Nama tidak valid";
      this.errorCount++;
    } else {
      this.lastNameError = "";
      this.errorCount++;
    }
  }

  validateWhatsapp(event) {
    if (event.target.value === "") {
      this.whatsappError = "Nomor tidak boleh kosong";
      this.errorCount++;
    } else if (! event.target.value.match(/^[0-9 \-\+]+$/) || event.target.value.length < 10 || event.target.value.length > 13) {
      this.whatsappError = "Nomor tidak valid";
      this.errorCount++;
    } else {
      this.whatsappError = "";
      this.completeCount++;
    }
  }

  validateDomicilie(event) {
    if (event.target.value === "") {
      this.domicilieError = "Domisili tidak boleh kosong";
      this.errorCount++;
    } else {
      this.domicilieError = "";
      this.completeCount++;
    }
  }

  register() {
    this.registrationSuccess = true;
  }
}
