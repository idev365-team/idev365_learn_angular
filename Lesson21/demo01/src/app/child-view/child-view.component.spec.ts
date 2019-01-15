import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildViewComponent } from './child-view.component';

describe('ChildViewComponent', () => {
  let component: ChildViewComponent;
  let fixture: ComponentFixture<ChildViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
