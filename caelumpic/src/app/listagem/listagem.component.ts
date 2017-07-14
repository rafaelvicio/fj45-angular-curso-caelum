import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html'
})

export class ListagemComponent {

  fotos: FotoComponent[] = [];
  service: FotoService;
  mensagem = '';

  constructor(service: FotoService) {

    this.service = service;

    this.service.lista()
      .subscribe(
      fotos => this.fotos = fotos,
      erro => console.log(erro)
      );

  }

  remove(foto) {

    this.service
      .remove(foto)
      .subscribe(
        () => {
          let novasFotos = this.fotos.slice(0);
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(indice, 1);
          this.fotos = novasFotos;
          this.mensagem = 'Foto removida com sucesso!';
        },
        erro => {
          console.log(erro)
          this.mensagem = 'Erro ao remover foto';
        }
      )

  }

}
