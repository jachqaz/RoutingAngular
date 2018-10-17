import {Component, OnInit} from '@angular/core';
import {ServiceService} from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  items;

  constructor(private servicio: ServiceService) {
  }

  ngOnInit(): void {
    this.items = this.servicio.items;
  }

  updateItem(key: string, newText: string) {
    this.servicio.updateItem(key, newText);
  }

  addItem(newName: string) {
    this.servicio.addItem(newName);
  }

  deleteItem(key: string) {
    this.servicio.deleteItem(key);
  }

  deleteEverything() {
    this.servicio.deleteEverything();
  }
}
