import { Routes } from '@angular/router';
import { Eletronics } from './features/lab/pages/eletronics/eletronics';
import { HomeComponent } from './features/home/home-component/home-component';

export const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: HomeComponent
            },
            {
                path: "portifolio",
                component: HomeComponent
            },
            {
                path: "eletronics",
                component: Eletronics
            }
        ]
    }
];
