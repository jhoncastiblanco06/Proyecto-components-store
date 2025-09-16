import { ComponentFixture, TestBed } from '@angular/core/testing';

// SE CAMBIA 'Products' POR 'Productos'
import { Productos } from './products';

describe('Productos', () => { // Se cambia aquí
  let component: Productos;      // Se cambia aquí
  let fixture: ComponentFixture<Productos>; // Se cambia aquí

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productos] // Se cambia aquí
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productos); // Se cambia aquí
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});