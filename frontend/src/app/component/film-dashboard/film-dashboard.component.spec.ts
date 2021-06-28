import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDashboardComponent } from './film-dashboard.component';

describe('FilmDashboardComponent', () => {
  let component: FilmDashboardComponent;
  let fixture: ComponentFixture<FilmDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
