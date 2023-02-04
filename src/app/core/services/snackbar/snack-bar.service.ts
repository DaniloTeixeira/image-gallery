import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private matSnackBar: MatSnackBar) {}

  showSnackBarError(msg: string): void {
    this.matSnackBar.open(`${msg}`, 'FECHAR', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'snack-error',
    });
  }

  showSnackBarSuccess(msg: string): void {
    this.matSnackBar.open(`${msg}`, 'FECHAR', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'snack-success',
    });
  }
}
