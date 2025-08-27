import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpForm } from './ip-form';

describe('IpForm', () => {
  let component: IpForm;
  let fixture: ComponentFixture<IpForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
