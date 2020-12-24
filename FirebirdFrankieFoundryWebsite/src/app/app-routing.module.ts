import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignComponent } from './design/design.component'
import { ContactComponent } from './contact/contact.component'
import { GalleryComponent } from './gallery/gallery.component'

const routes: Routes = [
  { path: '', redirectTo: "/design", pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'design', component: DesignComponent },
  { path: 'gallery', component: GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
