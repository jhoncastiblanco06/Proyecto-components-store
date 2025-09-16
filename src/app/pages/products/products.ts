import { Component } from '@angular/core';
// 1. ASEGÚRATE DE TENER ESTA LÍNEA DE IMPORTACIÓN
import { CommonModule } from '@angular/common';

import { Products, Produt } from '../../services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  // 2. ASEGÚRATE DE QUE CommonModule ESTÉ EN EL ARRAY 'imports'
  imports: [CommonModule], 
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Productos {
  public productos: Produt[] = [];

  constructor(private productService: Products) {
    this.productos = this.productService.getProducts();
  }
}