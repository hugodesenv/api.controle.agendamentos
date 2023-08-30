import { BadRequestException, CallHandler, ConflictException, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable, catchError, throwError } from 'rxjs';

export class GlobalDatabaseErrosInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      catchError((error) => {
        const friendlyMessage = {
          '23503': 'Não é possível continuar, porque o registro possui dependências em outras tabelas',
          '23505': 'Já existe um registro com essa mesma chave!',
        };

        const outputData = {
          code: error?.response?.code,
          table: error?.response?.table,
          detail: error?.response?.detail,
          friendlyMessage: friendlyMessage[error?.response?.code],
        };

        if (outputData.code) {
          return throwError(new ConflictException({ ...outputData }));
        }

        return throwError(new BadRequestException(error));
      }),
    );
  }
}
