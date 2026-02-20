import { Routes } from '@angular/router';
import { InicioComponent } from './vistaPrincipal/inicio/inicio.component';
import { InformacionEmpresaComponent } from './vistaPrincipal/informacion/informacion-empresa.component';
import { FormContactoComponent } from './vistaPrincipal/contacto/form-contacto.component';
export const routes: Routes = [
    {path: '', redirectTo: '/vistaPrincipal/inicio', pathMatch: 'full'},
    {path: 'vistaPrincipal/inicio', component:InicioComponent},
    {path: 'vistaPrincipal/nosotros', component:InformacionEmpresaComponent},
    {path: 'vistaPrincipal/contacto', component:FormContactoComponent}

];
