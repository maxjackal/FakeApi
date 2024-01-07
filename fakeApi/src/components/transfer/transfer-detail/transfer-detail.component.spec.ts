import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferDetailComponent } from './transfer-detail.component';

describe('TransferDetailComponent', () => {
  let component: TransferDetailComponent;
  let fixture: ComponentFixture<TransferDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
