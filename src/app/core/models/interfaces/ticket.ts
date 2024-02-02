import { TicketInfo } from './ticketInfo';
import { User } from './user';

export interface Ticket {
  id: number;
  user: User;
  ticketNo: string;
  ticketPrice: string;
  cinema: string;
  peopleNo: number;
  purchaseNo: string;
  ticket: TicketInfo;
}
