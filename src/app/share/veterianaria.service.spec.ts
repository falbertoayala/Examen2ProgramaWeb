import { TestBed } from '@angular/core/testing';

import { VeterianariaService } from './veterianaria.service';

describe('VeterianariaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VeterianariaService = TestBed.get(VeterianariaService);
    expect(service).toBeTruthy();
  });
});
