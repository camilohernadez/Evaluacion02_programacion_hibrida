import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestiondeCitasPage } from './gestionde-citas.page';

describe('GestiondeCitasPage', () => {
  let component: GestiondeCitasPage;
  let fixture: ComponentFixture<GestiondeCitasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestiondeCitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
