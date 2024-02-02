import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Language } from '../../core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'ATECH-ticket-header',
  standalone: true,
  imports: [ButtonModule, TranslateModule],
  templateUrl: './ticket-header.component.html',
  styleUrl: './ticket-header.component.scss',
})
export class TicketHeaderComponent {
  constructor(private __translate: TranslateService) {}
  langSwitch() {
    this.__translate.currentLang === Language.Arabic
      ? localStorage.setItem('lang', Language.English)
      : localStorage.setItem('lang', Language.Arabic);
    window.location.reload();
  }
}
