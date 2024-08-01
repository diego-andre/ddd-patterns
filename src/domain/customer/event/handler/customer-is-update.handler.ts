import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerUpdateEvent from "../customer-update.event";

export default class CustomerIsUpdateHandler
  implements EventHandlerInterface<CustomerUpdateEvent>
{
  handle(event: CustomerUpdateEvent): void {
    console.log(`Esse é o segundo .....`); 
  }
}
