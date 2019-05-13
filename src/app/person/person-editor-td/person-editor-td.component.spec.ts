import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonEditorTdComponent } from './person-editor-td.component';

describe('PersonEditorTdComponent', () => {
  let component: PersonEditorTdComponent;
  let fixture: ComponentFixture<PersonEditorTdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonEditorTdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonEditorTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
