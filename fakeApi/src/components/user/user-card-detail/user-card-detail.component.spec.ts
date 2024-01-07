import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardDetailComponent } from './user-card-detail.component';

describe('UserCardDetailComponent', () => {
  let component: UserCardDetailComponent;
  let fixture: ComponentFixture<UserCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCardDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
