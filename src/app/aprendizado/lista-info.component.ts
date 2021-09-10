import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './lista-info.component.html'
})
export class ListaInfoComponent implements OnInit{

  listaId!: number;

  constructor(private activatedRoute: ActivatedRoute){  }

  ngOnInit(): void{
      if((this.activatedRoute.snapshot.paramMap.get('id'))){
        this.listaId = + !this.activatedRoute.snapshot.paramMap.get('id');
      }
  }

}
