import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaInscricaoComponent } from './sistema-inscricao.component';

describe('SistemaInscricaoComponent', () => {
  let component: SistemaInscricaoComponent;
  let fixture: ComponentFixture<SistemaInscricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemaInscricaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemaInscricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
