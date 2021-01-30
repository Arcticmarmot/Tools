import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tools/scale',
    loadChildren: () => import('./tools/scale/scale.module').then(mod => mod.ScaleModule),
  },
  {
    path: 'tools/qr-code',
    loadChildren: () => import('./tools/qr-code/qr-code.module').then(mod => mod.QrCodeModule),
  },
  {
    path: 'tools/timestamp',
    loadChildren: () => import('./tools/timestamp/timestamp.module').then(mod => mod.TimestampModule),
  },
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
