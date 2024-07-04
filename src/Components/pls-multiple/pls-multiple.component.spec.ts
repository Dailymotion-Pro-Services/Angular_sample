import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlsMultipleComponent } from './pls-multiple.component';

describe('PlsMultipleComponent', () => {
  let component: PlsMultipleComponent;
  let fixture: ComponentFixture<PlsMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlsMultipleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlsMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
