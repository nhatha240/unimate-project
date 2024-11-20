import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoningSoonComponent } from './comoning-soon.component';

describe('ComoningSoonComponent', () => {
  let component: ComoningSoonComponent;
  let fixture: ComponentFixture<ComoningSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComoningSoonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComoningSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
