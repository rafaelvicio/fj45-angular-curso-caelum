import 'rxjs/add/operator/map';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BotaoConfirmacaoComponent } from './botao-confirmacao/botao-confirmacao.component';
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
  declarations: [AppComponent, ListagemComponent, CadastroComponent, BotaoConfirmacaoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
