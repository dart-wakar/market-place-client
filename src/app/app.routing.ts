import {Routes,RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {TestComponent} from './components/test/test.component';

const routes: Routes = [
    {path: '',redirectTo: 'test',pathMatch: 'full'},
    {path: 'login',component: LoginComponent},
    {path: 'home',component: HomeComponent},
    {path: 'test',component: TestComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}