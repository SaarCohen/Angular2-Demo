import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';

const appRoutes: Routes = [
    //{ path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: AppComponent, data: { title: 'Home' } },
    { path: 'persons', component: PersonComponent, data: { title: 'Persons' } }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [AppComponent, PersonComponent];