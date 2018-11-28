import { Injectable } from '@angular/core';

import { IBranch } from './ibranch';


@Injectable()
export class BranchService {

  provinces: IBranch [] = [
    {
      branch: 'Banteay Meanchey',
      code: 'BM'
    },
    {
      branch: 'Battambang',
      code: 'BB'
    },
    {
      branch:'Kampong Cham',
      code: 'KC'
    },
    {
      branch:'Kampong Chhnang',
      code: 'KH'
    },
    {
      branch:'Kampong Speu',
      code: 'KS'
    },
    {
      branch:'Kampong Thom',
      code: 'KT'
    },
    {
      branch:'Kampot',
      code: 'KP'
    },
    {
      branch:'Kandal',
      code: 'KD'
    },
    {
      branch:'Kep',
      code: 'KE'
    },
    {
      branch:'Koh Kong',
      code: 'KK'
    },
    {
      branch:'Kratie',
      code: 'KR'
    },
    {
      branch:'Mondulkiri',
      code: 'MK'
    },
    {
      branch:'Oddar Meanchey',
      code: 'OM'
    },
    {
      branch:'Pailin',
      code: 'PL'
    },
    {
      branch:'Phnom Penh',
      code: 'PP'
    },
    {
      branch:'Preah Sihanouk',
      code: 'PS'
    },
    {
      branch:'Preah Vihear',
      code: 'PH'
    },
    {
      branch:'Prey Veng',
      code: 'PV'
    },
    {
      branch:'Pursat',
      code: 'PS'
    },
    {
      branch:'Ratanakiri',
      code: 'RK'
    },
    {
      branch:'Siem Reap',
      code: 'SR'
    },
    {
      branch:'Stung Treng',
      code: 'ST'
    },
    {
      branch:'Svay Rieng',
      code: 'SI'
    },
    {
      branch:'Takeo',
      code: 'TK'
    },
    {
      branch:'Tbong Khmum',
      code: 'TH'
    }
]
  constructor() { }
}
