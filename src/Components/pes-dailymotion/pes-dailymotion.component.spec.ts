import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesDailymotionComponent } from './pes-dailymotion.component';

describe('PesDailymotionComponent', () => {
  let component: PesDailymotionComponent;
  let fixture: ComponentFixture<PesDailymotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesDailymotionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesDailymotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
