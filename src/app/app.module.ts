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


@NgModule({
	declarations: [
		AppComponent,
		PriosComponent,
		LayoutComponent,
		NavigationComponent,
		LandingComponent,
		NewStuffComponent,
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
