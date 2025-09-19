import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- 1. IMPORTA RouterModule
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule], // <-- 2. AÑÁDELO A LOS IMPORTS
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  // Datos para las categorías de productos
  categories = [
    { name: 'Procesadores', imageUrl: 'home-imgs/nuestras-categorias/CPU.png' },
    { name: 'Tarjetas Gráficas', imageUrl: 'home-imgs/nuestras-categorias/GPU.png' },
    { name: 'Motherboards', imageUrl: 'home-imgs/nuestras-categorias/MOTHERBOARD.png' },
    { name: 'Memoria RAM', imageUrl: 'home-imgs/nuestras-categorias/RAM.png' },
    { name: 'Almacenamiento', imageUrl: 'home-imgs/nuestras-categorias/ALMACENAMIENTO.png' },
    { name: 'Chasis', imageUrl: 'home-imgs/nuestras-categorias/CHASIS.png' },
    { name: 'Disipador', imageUrl: 'home-imgs/nuestras-categorias/DISIPADOR.png' },
    { name: 'Ensambles', imageUrl: 'home-imgs/nuestras-categorias/ENSAMBLES.png' },
    { name: 'Perifericos', imageUrl: 'home-imgs/nuestras-categorias/PERIFERICOS.png' },
    { name: 'Software', imageUrl: 'home-imgs/nuestras-categorias/SOFTWARE.png' },
    { name: 'Mantenimiento', imageUrl: 'home-imgs/nuestras-categorias/MANTENIMIENTO.png' }

  ];

  // Datos para productos destacados
  featuredProducts = [
    {
      name: 'Mause Razer "Viper V4 Pro"',
      price: '$662.621,02',
      imageUrl: 'home-imgs/productos-destacados/razer-viperv4.jpg',
      tag: 'Más Vendido'
    },
    {
      name: 'GPU Gigabyte "AMD Radeon RX 9060Xt"',
      price: '$1.861.643,09',
      imageUrl: 'home-imgs/productos-destacados/RX9060xt.jpg',
      tag: 'Nuevo'
    },
    {
      name: 'Teclado Mecánico Redragon "DEIMOS K599"',
      price: '$287.000',
      imageUrl: 'home-imgs/productos-destacados/redragon-deimos.jpg',
      tag: 'Oferta'
    }
  ];
}