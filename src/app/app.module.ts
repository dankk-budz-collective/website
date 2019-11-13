import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriosComponent } from './prios/prios.component';
import { LayoutComponent } from './layout/layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LandingComponent } from './landing/landing.component';
import { NewStuffComponent } from './new-stuff/new-stuff.component';
import { TopComponent } from './top/top.component';
import { EuComponent } from './eu/eu.component';
import { NaComponent } from './na/na.component';
import { MokesComponent } from './mokes/mokes.component';
import { DkpComponent } from './dkp/dkp.component';


@NgModule({
	declarations: [
		AppComponent,
		PriosComponent,
		LayoutComponent,
		NavigationComponent,
		LandingComponent,
		NewStuffComponent,
		TopComponent,
		EuComponent,
		NaComponent,
		MokesComponent,
		DkpComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
