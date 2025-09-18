import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {

  // Esta propiedad obtiene el año actual dinámicamente.
  // Así, el copyright se actualiza solo cada año.
  public currentYear: number = new Date().getFullYear();

  constructor() { }

}