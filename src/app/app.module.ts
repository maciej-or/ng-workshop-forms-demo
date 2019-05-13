import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonEditorMdComponent } from './person/person-editor-md/person-editor-md.component';
import { PersonEditorTdComponent } from './person/person-editor-td/person-editor-td.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PersonEditorMdComponent,
    PersonEditorTdComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
