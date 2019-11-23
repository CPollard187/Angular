import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContentComponentComponent } from './create-content-component.component';

describe('CreateContentComponentComponent', () => {
  let component: CreateContentComponentComponent;
  let fixture: ComponentFixture<CreateContentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateContentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
