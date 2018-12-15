import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule,MatGridListModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from "@angular/material/dialog"
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select'
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import "hammerjs";
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import {DishService} from './services/dish.service';
import {PromotionService} from './services/promotion.service';
import {LeaderService} from './services/leader.service'

import {AppRoutingModule} from '../app/app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatDialogModule, 
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule, 
    MatSlideToggleModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [DishService,PromotionService,LeaderService],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
