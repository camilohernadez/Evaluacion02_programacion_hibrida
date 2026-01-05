import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppGestiondeCitasComponent } from './app-gestionde-citas.component';

describe('AppGestiondeCitasComponent', () => {
  let component: AppGestiondeCitasComponent;
  let fixture: ComponentFixture<AppGestiondeCitasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppGestiondeCitasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppGestiondeCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
