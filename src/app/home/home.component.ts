import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../service/service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup;

  constructor(
    private service: ServiceService, private router: Router,
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      ciudad: new FormControl('', Validators.required),
      email: new FormControl('',
        [
          Validators.required,
          Validators.email])
    });
  }

  onCrear() {
    this.service.addContacto(this.form.value);
    this.router.navigate(['/main']);
    // this.initForm();

  }


}
