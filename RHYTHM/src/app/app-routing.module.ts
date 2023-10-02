import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { MainComponent } from './pages/main/main.component';
import { PoliticaPrivacidadComponent } from './pages/avisoLegal/politica-privacidad/politica-privacidad.component';
import { AvisoLegalComponent } from './pages/avisoLegal/aviso-legal/aviso-legal.component';
import { PoliticaCookiesComponent } from './pages/avisoLegal/politica-cookies/politica-cookies.component';
import { CantantesComponent } from './pages/cantantes/cantantes.component';

const routes: Routes = [{
  path: '',
  component:SkeletonComponent,
  pathMatch:'prefix',
  children:[
    {path: '', component: MainComponent}
  ]
},{
  path:'informacionLegal',
  component:SkeletonComponent,
  pathMatch:'prefix',
  children:[
    {path:'PoliticadePrivacidad',component:PoliticaPrivacidadComponent},
    {path:'AvisoLegal',component:AvisoLegalComponent},
    {path:'PolíticadeCookies',component:PoliticaCookiesComponent}
  ]
},
{
  path:'cantantes',
  component:SkeletonComponent,
  pathMatch:'prefix',
  children:[
    {path:'',component:CantantesComponent},
  ]
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
