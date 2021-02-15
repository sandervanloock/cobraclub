import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutenpageComponent } from './statutenpage.component';

describe('StatutenpageComponent', () => {
  let component: StatutenpageComponent;
  let fixture: ComponentFixture<StatutenpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatutenpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatutenpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
