import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'Contactos';
  contactos;
  contacto = null;
  contactoEditar = null;

  constructor(private servicio: ServiceService) {
  }

  ngOnInit() {
    this.servicio.getContactos()
      .subscribe(contactos => this.contactos = contactos);
  }

  onClick(contacto) {
    this.contacto = contacto;
  }

  cerrarDetalles() {
    this.contacto = null;
  }

  onEditar(contacto) {
    this.contactoEditar = contacto;
  }

  onEliminar(contacto) {
    this.servicio.deleteContacto(contacto.key);
  }

  cerrarEdicion() {
    this.contactoEditar = null;
  }
}
