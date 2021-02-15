import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedenpageComponent } from './ledenpage.component';

describe('LedenpageComponent', () => {
  let component: LedenpageComponent;
  let fixture: ComponentFixture<LedenpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedenpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LedenpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
