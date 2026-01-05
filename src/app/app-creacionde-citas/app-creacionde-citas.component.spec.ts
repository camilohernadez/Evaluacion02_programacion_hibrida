import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppCreaciondeCitasComponent } from './app-creacionde-citas.component';

describe('AppCreaciondeCitasComponent', () => {
  let component: AppCreaciondeCitasComponent;
  let fixture: ComponentFixture<AppCreaciondeCitasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppCreaciondeCitasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppCreaciondeCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
