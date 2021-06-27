import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmRegisterComponent } from './film-register.component';

describe('FilmRegisterComponent', () => {
  let component: FilmRegisterComponent;
  let fixture: ComponentFixture<FilmRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
