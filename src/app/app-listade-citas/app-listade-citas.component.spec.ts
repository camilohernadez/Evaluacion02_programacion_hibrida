import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppListadeCitasComponent } from './app-listade-citas.component';

describe('AppListadeCitasComponent', () => {
  let component: AppListadeCitasComponent;
  let fixture: ComponentFixture<AppListadeCitasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppListadeCitasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppListadeCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
