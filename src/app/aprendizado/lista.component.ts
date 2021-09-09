import { ListaService } from './lista.service';
import { Component, OnInit } from '@angular/core';
import { Lista } from './lista';

@Component({
  templateUrl: './lista.component.html'
})

export class ListaComponent implements OnInit{

  filteredListas: Lista[] = [];

  _listas: Lista[] = [];

  _filterBy!: string;

  constructor (private ListaService: ListaService){}

  ngOnInit(): void {
      this._listas = this.ListaService.retrieveAll();
      this.filteredListas = this._listas;
  }

  set filter (value: string){
      this._filterBy = value;

      this.filteredListas = this._listas.filter((lista: Lista) => lista.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase())> -1);
  }
  get filter(){
      return this._filterBy;
  }
}
