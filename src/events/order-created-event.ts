import { Subjects } from "./subjects"
import { OrderStatus } from "./types/order-status";


export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated
  data: {
    status: OrderStatus;
    id: string; // OrderId
    version: number;
    userId: string;
    expiresdAt: string;
    ticket: {
      id: string;
      price: number;
    }
  }
}
