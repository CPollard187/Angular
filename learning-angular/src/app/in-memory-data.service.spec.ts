import { TestBed } from '@angular/core/testing';
import { Content} from './content-card/content-card-helper';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryDataService = TestBed.get(InMemoryDataService);
    expect(service).toBeTruthy();
  });
});
