import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllCakesComponent } from './show-all-cakes.component';

describe('ShowAllCakesComponent', () => {
  let component: ShowAllCakesComponent;
  let fixture: ComponentFixture<ShowAllCakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllCakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
