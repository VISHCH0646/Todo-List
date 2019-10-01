import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './todo/header/header.component';
import { InputComponent } from './todo/input/input.component';
import { ListComponent } from './todo/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {FormsModule} from '@angular/forms';
import { TodoList} from './todo/todo.list';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { FooterComponent } from './todo/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HeaderComponent,
    InputComponent,
    ListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    MatDividerModule,
    MatExpansionModule,
    MatSnackBarModule
  ],
  providers: [TodoList,InputComponent],
  bootstrap: [AppComponent,InputComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
