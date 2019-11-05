import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsDeltailComponent } from './contracts-deltail.component';

describe('ContractsDeltailComponent', () => {
  let component: ContractsDeltailComponent;
  let fixture: ComponentFixture<ContractsDeltailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractsDeltailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsDeltailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
