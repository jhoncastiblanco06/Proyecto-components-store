import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  
  // Propiedad para controlar la visibilidad del menú móvil.
  public isMenuOpen = false;

  // Método para cambiar el estado del menú.
  // Se llama desde el botón de hamburguesa en el HTML.
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}