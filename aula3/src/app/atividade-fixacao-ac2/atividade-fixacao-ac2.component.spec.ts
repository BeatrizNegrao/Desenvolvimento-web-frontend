import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeFixacaoAc2Component } from './atividade-fixacao-ac2.component';

describe('AtividadeFixacaoAc2Component', () => {
  let component: AtividadeFixacaoAc2Component;
  let fixture: ComponentFixture<AtividadeFixacaoAc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtividadeFixacaoAc2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtividadeFixacaoAc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
