import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesMultipleComponent } from './pes-multiple.component';

describe('PesMultipleComponent', () => {
  let component: PesMultipleComponent;
  let fixture: ComponentFixture<PesMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesMultipleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
