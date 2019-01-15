import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterContentComponent } from './after-content.component';

describe('AfterContentComponent', () => {
  let component: AfterContentComponent;
  let fixture: ComponentFixture<AfterContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
