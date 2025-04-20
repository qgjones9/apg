import { Routes } from '@angular/router';
import { ArtDetailsComponent } from './components/art-details/art-details.component';
import { GalleryComponent } from './components/gallery/gallery.component';

export const routes: Routes = [
    {path: 'art-details', component: ArtDetailsComponent},    
    {path:'gallery', component: GalleryComponent},
    {path: '', redirectTo: '/gallery', pathMatch: 'full'}, // if no path is provided, redirect to /products
    {path: '**', redirectTo: '/gallery', pathMatch: 'full'}, // if no matching path is found, redirect to /products    
];

// going to start typing something here!