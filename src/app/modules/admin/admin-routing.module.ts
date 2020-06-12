import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalesComponent } from './pages/hospitales/hospitales.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { MedicoComponent } from './pages/medicos/medico.component';

const routes: Routes = [
  { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de Hospitales' } },
  { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de Médicos' } },
  { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizar Médico' } },
  { path: '', redirectTo: 'hospitales', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

// const pagesRoutes: Routes = [
 
//     { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de Hospitales' } },
//     { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de Médicos' } },
//     { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizar Médico' } },
//     { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
// ];


// export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
