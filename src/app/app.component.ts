import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Language } from './core/models/enum/language';
import { DirectionService } from './core/services/translate.service';
import { TicketsTableComponent, ChartViewComponent } from './feature';
import { TicketHeaderComponent } from './feature/ticket-header/ticket-header.component';
import { TicketCardComponent } from './feature/ticket-card/ticket-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ChartViewComponent,
    TranslateModule,
    TicketsTableComponent,
    TicketHeaderComponent,
    TicketCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  currentLang: string;
  get Language() {
    return Language;
  }
  constructor(
    private __setDirection: DirectionService,
    private __translate: TranslateService
  ) {
    this.currentLang = localStorage.getItem('lang') || Language.Arabic;
    this.__translate.use(this.currentLang);
    this.__setDirection.changeDocumentDirection(this.currentLang);
  }
}
