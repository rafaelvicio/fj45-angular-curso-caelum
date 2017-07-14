import 'rxjs/add/operator/map';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RouterModule, Routes } from '@angular/router';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Novidade aqui
import {HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import {interceptedHttpFactory} from './intercepted-http/intercepted-http-factory';
import { HighlightDirective } from './highlight.directive'

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    PainelModule,
    FotoModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AppComponent, ListagemComponent, CadastroComponent, HighlightDirective],
  bootstrap: [AppComponent],

  // Novidade aqui
  providers: [
    {
      provide: Http,
      useFactory: interceptedHttpFactory,
      deps: [XHRBackend, RequestOptions]
    }
  ]
})
export class AppModule { }