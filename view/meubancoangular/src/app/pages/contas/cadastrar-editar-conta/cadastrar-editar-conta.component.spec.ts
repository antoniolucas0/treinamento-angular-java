import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEditarContaComponent } from './cadastrar-editar-conta.component';

describe('CadastrarEditarContaComponent', () => {
  let component: CadastrarEditarContaComponent;
  let fixture: ComponentFixture<CadastrarEditarContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarEditarContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEditarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
