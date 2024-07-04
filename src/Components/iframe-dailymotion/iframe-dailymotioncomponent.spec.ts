import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeDailymotionComponent } from './iframe-dailymotion.component';

describe('IframeDailymotionComponent', () => {
  let component: IframeDailymotionComponent;
  let fixture: ComponentFixture<IframeDailymotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IframeDailymotionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IframeDailymotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
