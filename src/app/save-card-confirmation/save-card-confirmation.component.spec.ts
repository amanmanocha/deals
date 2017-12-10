import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCardConfirmationComponent } from './save-card-confirmation.component';

describe('SaveCardConirmationComponent', () => {
  let component: SaveCardConfirmationComponent;
  let fixture: ComponentFixture<SaveCardConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveCardConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveCardConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
