import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeMultipleComponent } from './iframe-multiple.component';

describe('IframeMultipleComponent', () => {
  let component: IframeMultipleComponent;
  let fixture: ComponentFixture<IframeMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IframeMultipleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IframeMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
