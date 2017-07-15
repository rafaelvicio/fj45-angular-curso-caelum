import { Component, Input, OnInit,ElementRef } from '@angular/core';

@Component({
  selector: 'painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})

export class PainelComponent implements OnInit {
  @Input() titulo: string;
  ngOnInit() {
    this.titulo = this.titulo.length > 7
      ? `${this.titulo.substr(0, 7)}...`
      : this.titulo;
  }

  constructor(private element: ElementRef){
  }

  fadeOut(cb){
    $(this.element.nativeElement).fadeOut(cb);
  }
}
