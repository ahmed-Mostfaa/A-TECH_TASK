import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TableModule } from 'primeng/table';
import { ticketList } from './data';
import { Ticket } from '../../core';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
@Component({
  selector: 'ATECH-tickets-table',
  standalone: true,
  imports: [
    TableModule,
    TranslateModule,
    CurrencyPipe,
    DecimalPipe,
    InputTextModule,
    InputSwitchModule,
    FormsModule,
    ButtonModule,
    TooltipModule,
  ],
  templateUrl: './tickets-table.component.html',
  styleUrl: './tickets-table.component.scss',
})
export class TicketsTableComponent implements OnInit {
  rowsNumber: number = 4;
  selectedTickets!: Ticket;
  metaKeySelection: boolean = true;
  ngOnInit(): void {}
  get ticketList(): Array<Ticket> {
    return ticketList;
  }
  paginate(event: any) {
    this.rowsNumber = event.rows;
  }
}
