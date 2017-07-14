import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
  foto: FotoComponent = new FotoComponent();
  service: FotoService;
  meuForm: FormGroup;
  route: ActivatedRoute;
  mensagem: string = '';
  router: Router;

  constructor(service: FotoService, fb: FormBuilder, route: ActivatedRoute, router: Router) {
    this.route = route;
    this.router = router;
    this.service = service;
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.service.buscaPorId(id)
          .subscribe(
          foto => this.foto = foto,
          erro => console.log(erro));
      }
    });

    this.meuForm = fb.group({
      titulo: ['', Validators.compose(
        [Validators.required, Validators.minLength(4)]
      )],
      url: ['', Validators.required],
      descricao: [''],
    });
  }

  cadastrar() {

    this.service.cadastra(this.foto)
      .subscribe(res => {
        this.mensagem = res.mensagem;
        this.foto = new FotoComponent();
        if(!res.inclusao) this.router.navigate(['']); // Método navigate aqui!!!
      }, erro => {
        console.log(erro);
        this.mensagem = 'Não foi possivel salvar a foto'
      });
  }
}
