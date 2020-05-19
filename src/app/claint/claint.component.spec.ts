import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaintComponent } from './claint.component';

describe('ClaintComponent', () => {
  let component: ClaintComponent;
  let fixture: ComponentFixture<ClaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
