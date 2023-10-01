import { Container } from "inversify";
import { Types } from "./DiTypes";
import {
    IOrderRepository,
    OrderRepository,
} from "./infrastructure/repositories/orderRepository";
import { IOrderService, OrderService } from "./domain.services/orderService";
import {
    OrderController,
    IOrderController,
} from "./application/controllers/orderController";
const dIContainer = new Container();

dIContainer.bind<IOrderRepository>(Types.ORDER_REPOSITORY).to(OrderRepository);
dIContainer.bind<IOrderService>(Types.ORDER_SERVICE).to(OrderService);
dIContainer.bind<IOrderController>(Types.ORDER_CONTROLLER).to(OrderController);

export { dIContainer };