import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCompanyDetailsByCodeComponent } from './get-company-details-by-code.component';

describe('GetCompanyDetailsByCodeComponent', () => {
  let component: GetCompanyDetailsByCodeComponent;
  let fixture: ComponentFixture<GetCompanyDetailsByCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCompanyDetailsByCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCompanyDetailsByCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
