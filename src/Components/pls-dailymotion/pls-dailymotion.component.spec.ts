import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlsDailymotionComponent } from './pls-dailymotion.component';

describe('PlsDailymotionComponent', () => {
  let component: PlsDailymotionComponent;
  let fixture: ComponentFixture<PlsDailymotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlsDailymotionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlsDailymotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
