import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private matSnackBar: MatSnackBar) {}

  /**
   * Exibe a notificação de erro na tela
   *
   * @param msg mensagem de erro a ser exibido na notificação
   */
  showSnackBarError(msg: string): void {
    this.matSnackBar.open(`${msg}`, 'FECHAR', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'snack-error',
    });
  }

  /**
   * Exibe a notificação de sucesso na tela
   *
   * @param msg de sucesso a ser exibido na notificação
   */
  showSnackBarSuccess(msg: string): void {
    this.matSnackBar.open(`${msg}`, 'FECHAR', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'snack-success',
    });
  }
}
