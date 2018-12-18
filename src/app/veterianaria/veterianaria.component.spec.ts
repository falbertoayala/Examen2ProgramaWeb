import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterianariaComponent } from './veterianaria.component';

describe('VeterianariaComponent', () => {
  let component: VeterianariaComponent;
  let fixture: ComponentFixture<VeterianariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterianariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterianariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
