import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {
    path: 'tools/scale',
    loadChildren: () => import('./tools/scale/scale.module').then(mod => mod.ScaleModule),
  },
  {
    path: 'tools/qr-code',
    loadChildren: () => import('./tools/qr-code/qr-code.module').then(mod => mod.QrCodeModule),
  },
  {
    path: 'tools/code-runner',
    loadChildren: () => import('./tools/code-runner/code-runner.module').then(mod => mod.CodeRunnerModule),
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
