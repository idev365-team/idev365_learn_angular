import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterViewComponent } from './after-view.component';

describe('AfterViewComponent', () => {
  let component: AfterViewComponent;
  let fixture: ComponentFixture<AfterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
