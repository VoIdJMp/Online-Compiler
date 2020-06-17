import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompierComponent } from './compier.component';

describe('CompierComponent', () => {
  let component: CompierComponent;
  let fixture: ComponentFixture<CompierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
