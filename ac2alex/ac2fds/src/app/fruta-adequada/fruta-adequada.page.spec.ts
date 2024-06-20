import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrutaAdequadaPage } from './fruta-adequada.page';

describe('FrutaAdequadaPage', () => {
  let component: FrutaAdequadaPage;
  let fixture: ComponentFixture<FrutaAdequadaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutaAdequadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
