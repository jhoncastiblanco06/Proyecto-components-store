import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HeaderComponent ] // Para componentes standalone, se usan en imports
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have isMenuOpen set to false initially', () => {
    expect(component.isMenuOpen).toBeFalse();
  });

  it('should toggle isMenuOpen from false to true when toggleMenu is called', () => {
    component.toggleMenu();
    expect(component.isMenuOpen).toBeTrue();
  });

  it('should toggle isMenuOpen from true to false when toggleMenu is called twice', () => {
    component.toggleMenu(); // a true
    component.toggleMenu(); // a false
    expect(component.isMenuOpen).toBeFalse();
  });
});