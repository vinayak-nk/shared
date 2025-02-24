import { Subjects } from "./subjects"
import { OrderStatus } from "./types/order-status";


export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled
  data: {
    id: string; // orderId
    ticket: {
      id: string;
    }
  }
}
