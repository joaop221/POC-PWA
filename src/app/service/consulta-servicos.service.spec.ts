import { TestBed, inject } from '@angular/core/testing';

import { ConsultaServicosService } from './consulta-servicos.service';

describe('ConsultaServicosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultaServicosService]
    });
  });

  it('should be created', inject([ConsultaServicosService], (service: ConsultaServicosService) => {
    expect(service).toBeTruthy();
  }));
});
