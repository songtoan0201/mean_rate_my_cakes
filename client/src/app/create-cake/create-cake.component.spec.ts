import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCakeComponent } from './create-cake.component';

describe('CreateCakeComponent', () => {
  let component: CreateCakeComponent;
  let fixture: ComponentFixture<CreateCakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
