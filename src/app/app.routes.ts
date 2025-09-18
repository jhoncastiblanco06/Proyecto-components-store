import { Routes } from '@angular/router';

// Se importan todos los componentes de tus páginas
import { HomeComponent } from './pages/home/home'; // AQUÍ ESTÁ EL CAMBIO: Se importa 'HomeComponent' en lugar de 'Home' y se ajusta la ruta.
// import { Productos } from './pages/products/products';
import { Contact } from './pages/contact/contact';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { About } from './pages/about/about';

export const routes: Routes = [
  {path: '', component: HomeComponent}, // Y AQUÍ TAMBIÉN: La ruta '' ahora usa el componente correcto 'HomeComponent'
  // {path: 'products', component: Productos},
  {path: 'contact', component: Contact},
  {path: 'about', component: About},
  {path: 'login', component: Login},
  {path: 'register', component: Register},
];
