import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  // Datos para las categorías de productos
  categories = [
    { name: 'Procesadores', imageUrl: 'https://placehold.co/400x300/17162a/61d4b3?text=CPU' },
    { name: 'Tarjetas Gráficas', imageUrl: 'https://placehold.co/400x300/17162a/61d4b3?text=GPU' },
    { name: 'Motherboards', imageUrl: 'https://placehold.co/400x300/17162a/61d4b3?text=MOBO' },
    { name: 'Memoria RAM', imageUrl: 'https://placehold.co/400x300/17162a/61d4b3?text=RAM' },
    { name: 'Almacenamiento', imageUrl: 'https://placehold.co/400x300/17162a/61d4b3?text=SSD' },
    { name: 'Periféricos', imageUrl: 'https://placehold.co/400x300/17162a/61d4b3?text=Teclados' }
  ];

  // Datos para productos destacados
  featuredProducts = [
    {
      name: 'PC Gamer "Cyber-X"',
      price: '$1,899.99',
      imageUrl: 'https://placehold.co/600x400/17162a/f038ff?text=PC+Cyber-X',
      tag: 'Más Vendido'
    },
    {
      name: 'GPU "Nova RTX 9090"',
      price: '$1,200.00',
      imageUrl: 'https://placehold.co/600x400/17162a/f038ff?text=RTX+9090',
      tag: 'Nuevo'
    },
    {
      name: 'Teclado Mecánico "Quantum"',
      price: '$159.99',
      imageUrl: 'https://placehold.co/600x400/17162a/f038ff?text=Quantum+Keys',
      tag: 'Oferta'
    }
  ];
}