import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {
  URL = 'http://localhost:3000/informatica';

  constructor(private httpClient: HttpClient) {

  }

  //Listagem
  list() {
    return this.httpClient.get(`${this.URL}`);
  }

  // Salvar cadastro
  create(data: any): Observable<any> {
    let API_URL = `${this.URL}`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Erro!!', error.error.message);
    } else {
      console.error(`Codigo:  ${error.status},`  +
      `body: ${error.error}`);
    }
    return throwError(
      'Ocorreu um erro, favor verificar novamente!');
  };
}
