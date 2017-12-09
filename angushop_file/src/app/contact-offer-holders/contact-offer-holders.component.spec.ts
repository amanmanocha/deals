import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactOfferHoldersComponent } from './contact-offer-holders.component';

describe('ContactOfferHoldersComponent', () => {
  let component: ContactOfferHoldersComponent;
  let fixture: ComponentFixture<ContactOfferHoldersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactOfferHoldersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactOfferHoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
