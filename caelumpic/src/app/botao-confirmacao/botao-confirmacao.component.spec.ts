import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoConfirmacaoComponent } from './botao-confirmacao.component';

describe('BotaoConfirmacaoComponent', () => {
  let component: BotaoConfirmacaoComponent;
  let fixture: ComponentFixture<BotaoConfirmacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoConfirmacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoConfirmacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
