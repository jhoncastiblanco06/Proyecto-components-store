import { Routes } from '@angular/router';

// Se importan todos los componentes de tus páginas
import { Home } from './pages/home/home';
// AQUÍ ESTÁ EL CAMBIO: Se importa 'Productos' en lugar de 'Products'
import { Productos } from './pages/products/products'; 
import { Contact } from './pages/contact/contact';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { About } from './pages/about/about';

export const routes: Routes = [
    {path: '', component: Home},
    // Y AQUÍ TAMBIÉN: La ruta 'products' ahora usa el componente 'Productos'
    {path: 'products', component: Productos},
    {path: 'contact', component: Contact},
    {path: 'about' , component: About},
    {path: 'login' , component: Login},
    {path: 'register' , component: Register},
];