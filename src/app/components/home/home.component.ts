import { Component, OnInit } from '@angular/core';
import { Servico } from '../../models/servico.model';
import { ConsultaServicosService } from '../../service/consulta-servicos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaServicos: Servico[];

  constructor(private service: ConsultaServicosService) { }

  ngOnInit() {
    this.updateLista();
  }

  public updateLista(){
    this.listaServicos = [];
    this.service.Listar().subscribe((lista) => {
      lista.item.forEach((item) => {
        if (item.ativa)
          this.listaServicos.push(item);
      });
    });
  }
}
