import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEditarClienteComponent } from './cadastrar-editar-cliente.component';

describe('CadastrarEditarClienteComponent', () => {
  let component: CadastrarEditarClienteComponent;
  let fixture: ComponentFixture<CadastrarEditarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarEditarClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEditarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
