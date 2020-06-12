import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import { AdminServiceModule } from './services/admin-services-module';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';

import { HospitalesComponent } from './pages/hospitales/hospitales.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { MedicoComponent } from './pages/medicos/medico.component';

// import * as services from './services'
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    // AdminServiceModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    HospitalesComponent,
    MedicosComponent,
    MedicoComponent
   ],
  //  providers: [
  //   services.HospitalService,
  //   services.MedicoService,
  //   services.UsuarioService,
  //   services.ModalUploadService,
  //   services.SubirArchivoService
  //  ]
})
export class AdminModule { }
