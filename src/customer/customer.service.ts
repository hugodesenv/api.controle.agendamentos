import { Injectable } from '@nestjs/common';
import { Customer } from './interface/customer.interface';

@Injectable()
export class CustomerService {
  findAll(): Customer[] {
    return [
      {
        name: 'Hugo Souza',
        cellphone: '(19) 9 8961-5184',
      },
      {
        name: 'Gabriella',
        cellphone: '(19) 9 8961-4422',
      },
    ];
  }
}
