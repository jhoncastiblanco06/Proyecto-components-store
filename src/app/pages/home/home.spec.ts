import { Component, OnInit } from '@angular/core';

// Interfaces para definir la estructura de nuestros datos
interface Category {
  name: string;
  imageUrl: string;
}

interface Product {
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  isNew: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

  // Datos de ejemplo que normalmente vendrían de una API
  featuredCategories: Category[] = [];
  hotDeals: Product[] = [];
  newArrivals: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    // Llenamos los arrays con nuestros datos de ejemplo
    this.featuredCategories = [
      { name: 'Tarjetas Gráficas', imageUrl: 'assets/images/category-gpu.jpg' },
      { name: 'Procesadores', imageUrl: 'assets/images/category-cpu.jpg' },
      { name: 'Monitores', imageUrl: 'assets/images/category-monitor.jpg' },
      { name: 'Periféricos', imageUrl: 'assets/images/category-peripherals.jpg' }
    ];

    this.hotDeals = [
      { name: 'GPU RTX 5080 Super', category: 'Tarjetas Gráficas', price: 1499.99, imageUrl: 'assets/images/product-gpu-1.jpg', isNew: false },
      { name: 'Monitor Gamer 27" 240Hz', category: 'Monitores', price: 449.50, imageUrl: 'assets/images/product-monitor-1.jpg', isNew: false },
      { name: 'Teclado Mecánico RGB', category: 'Periféricos', price: 129.99, imageUrl: 'assets/images/product-keyboard-1.jpg', isNew: false }
    ];
    
    this.newArrivals = [
      { name: 'CPU AMD Ryzen 9 9950X', category: 'Procesadores', price: 899.00, imageUrl: 'assets/images/product-cpu-1.jpg', isNew: true },
      { name: 'Mouse Inalámbrico Ultra-ligero', category: 'Periféricos', price: 99.99, imageUrl: 'assets/images/product-mouse-1.jpg', isNew: true },
      { name: 'SSD NVMe Gen5 4TB', category: 'Almacenamiento', price: 599.99, imageUrl: 'assets/images/product-ssd-1.jpg', isNew: true }
    ];
  }
}