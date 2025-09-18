import { ComponentFixture, TestBed } from '@angular/core/testing';

// 1. Importamos el nombre correcto desde el archivo correcto
import { FooterComponent } from './footer';

// 2. Actualizamos el nombre en la descripción de las pruebas
describe('FooterComponent', () => {
  // 3. Usamos el tipo correcto para las variables
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // 4. Los componentes se 'declaran', no se 'importan' en esta sección
      declarations: [ FooterComponent ]
    })
    .compileComponents();

    // 5. Creamos una instancia del componente correcto
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Prueba adicional para verificar que el año se calcula correctamente
  it('should have the current year set', () => {
    const currentYear = new Date().getFullYear();
    expect(component.currentYear).toEqual(currentYear);
  });
});