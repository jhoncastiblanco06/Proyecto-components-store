import { Injectable } from '@angular/core';

// 1. La interfaz se llama 'Produt' (como en tu PDF)
export interface Produt {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
// 2. La clase se llama 'Products' (como en tu PDF)
export class Products {

  private products: Produt[] = [
    {
      id: 1,
      nombre: 'Honda Transa LP',
      descripcion: 'Ideal para ciudad',
      precio: 6500,
      imagen: '/img/honda-transalp.jpg'
    },
    {
      id: 2,
      nombre: 'Kawasaky 600',
      descripcion: 'Potente y elegante',
      precio: 9200,
      imagen: '/img/kawasaky 600.jpg'
    },
    {
      id: 3,
      nombre: 'Kawasaky KX 250',
      descripcion: 'Moderna y económica',
      precio: 3900,
      imagen: '/img/kawasaky-kx250.jpg'
    },
    {
      id: 4,
      nombre: 'Suzuki 1200',
      descripcion: 'Moderna y económica',
      precio: 13900,
      imagen: '/img/suzuki-1200.jpg'
    }
  ];

  constructor() { }

  // El método que devuelve el array de tipo 'Produt[]'
  getProducts(): Produt[] {
    return this.products;
  }
}