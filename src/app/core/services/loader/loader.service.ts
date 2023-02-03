import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  /**
   * Representa mensagem que será exibida no loader
   */
  loaderText$ = new BehaviorSubject<string>('');

  /**
   * Define se loader deve ser mostrado na tela
   */
  showLoader$!: Observable<boolean>;

  /**
   * Representa o loader aberto
   */
  private openedLoader$ = new BehaviorSubject<string[]>([]);

  constructor() {
    /**
     * Define que loader só será exibido se existir algum loader aberto
     */
    this.showLoader$ = this.openedLoader$.pipe(map((n) => n.length > 0));
  }

  /**
   * Mostra o loader na tela
   *
   * @param loaderText texto que será exibido no loader
   */
  show(loaderText: string): void {
    this.loaderText$.next(loaderText);
    this.openedLoader$.next([...this.openedLoader$.getValue(), loaderText]);
  }

  /**
   * Esconde o loader na tela
   */
  hide(): void {
    const [, ...loaders] = this.openedLoader$.getValue();
    this.openedLoader$.next(loaders);
  }
}
