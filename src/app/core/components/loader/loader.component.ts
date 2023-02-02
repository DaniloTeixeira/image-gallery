import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  /**
   * Representa a mensagem a ser exibida no mat-spinner,
   * valor recebido do componente pai
   */
  @Input() loaderMessage?: string;
}
