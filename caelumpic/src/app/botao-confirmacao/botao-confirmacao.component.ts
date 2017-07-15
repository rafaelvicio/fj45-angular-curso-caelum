import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'botao',
  templateUrl: './botao-confirmacao.component.html',
  styleUrls: ['./botao-confirmacao.component.css']
})
export class BotaoConfirmacaoComponent implements OnInit {

  @Input() nome: string = 'Ok';
  @Input() estilo: string = 'btn-default';
  @Input() tipo: string = 'button';
  @Input() desabilitado: boolean = false;
  @Output() acao = new EventEmitter();
  @Input() confirmacao: boolean = false;

  executaAcao() {
    if (this.confirmacao) {
      if (confirm('Tem certeza?')) {
        this.acao.emit();
      }
      return;
    }
    this.acao.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
