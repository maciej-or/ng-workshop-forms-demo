import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonEditorMdComponent } from './person/person-editor-md/person-editor-md.component';
import { PersonEditorTdComponent } from './person/person-editor-td/person-editor-td.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from './shared/shared.module';
import { PersonCardComponent } from './person/person-card/person-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonEditorMdComponent,
    PersonEditorTdComponent,
    PersonCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
