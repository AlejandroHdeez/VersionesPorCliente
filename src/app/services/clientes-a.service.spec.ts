import { TestBed } from '@angular/core/testing';

import { ClientesAService } from './clientes-a.service';

describe('ClientesAService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientesAService = TestBed.get(ClientesAService);
    expect(service).toBeTruthy();
  });
});
