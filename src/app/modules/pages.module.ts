
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
// Pipe Module
import { PipesModule } from '../pipes/pipes.module';
// guards
import * as guards from '../core/guards'
 
import { ChartsModule } from 'ng2-charts';

// import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';

@NgModule({
    declarations: [
        PagesComponent
        // AccoutSettingsComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule

    ],
    providers: [
        guards.AdminGuard
    ]
    
})
export class PagesModule { }
