import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriosComponent } from './prios/prios.component';
import { LandingComponent } from './landing/landing.component';
import { NewStuffComponent } from './new-stuff/new-stuff.component';
import { TopComponent } from './top/top.component';
import { MokesComponent } from './mokes/mokes.component';

const routes: Routes = [
	{ path: '', component: LandingComponent },
	{ path: 'prios', component: PriosComponent },
	{ path: 'new-stuff', component: NewStuffComponent },
	{ path: 'top', component: TopComponent },
	{ path: 'mokes', component: MokesComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
