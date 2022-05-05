import { TestBed } from '@angular/core/testing';

import { PortfoliosLinesService } from './portfolios-lines.service';

describe('PortfoliosLinesService', () => {
  let service: PortfoliosLinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfoliosLinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
