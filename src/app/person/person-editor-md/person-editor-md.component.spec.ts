import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonEditorMdComponent } from './person-editor-md.component';

describe('PersonEditorMdComponent', () => {
  let component: PersonEditorMdComponent;
  let fixture: ComponentFixture<PersonEditorMdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonEditorMdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonEditorMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
