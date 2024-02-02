import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { QRCodeModule } from 'angularx-qrcode';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'ATECH-ticket-card',
  standalone: true,
  imports: [
    TranslateModule,
    ButtonModule,
    QRCodeModule,
    ToastModule,
    TooltipModule,
  ],
  providers: [MessageService],
  templateUrl: './ticket-card.component.html',
  styleUrl: './ticket-card.component.scss',
})
export class TicketCardComponent {
  constructor(
    private messageService: MessageService,
    private __translate: TranslateService
  ) {}
  copy(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.messageService.add({
      severity: 'info',
      detail: this.__translate.instant('card.clipboard'),
    });
  }
}
