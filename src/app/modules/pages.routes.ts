import { RouterModule, Routes } from '@angular/router';

// Guards
import { AdminGuard } from '../services/service.index';
import { PagesComponent } from './pages.component';
// import { VerificaTokenGuard } from '../services/guards/verifica-token.guard';

const pagesRoutes: Routes = [

    // {
    //     path: '',
    //     component: OneComponent,
    //     children: [
    //       { path: '', redirectTo: 'three' },
    //       { path: 'three', loadChildren: './three/three.module#ThreeModule' },
    //       { path: 'four', loadChildren: './four/four.module#FourModule' }
    //     ]
    //   }
 
    {
        path: '',
        component: PagesComponent,
        canActivate: [ AdminGuard ],
        children: [
            { path: '', loadChildren: './admin/admin.module#AdminModule' },
            { path: '/dashboard', loadChildren: './admin/admin.module#AdminModule' },
            // { path: '', loadChildren: './admin/admin.module#AdminModule' }
        ],
        
    },
   
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
