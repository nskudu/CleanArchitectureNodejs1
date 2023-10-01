import { inject, injectable } from "inversify";
import { Order as IOrder } from "../data/attributes/order";
import { Types } from "../DiTypes";
import { IOrderRepository } from "../infrastructure/repositories/orderRepository";

export interface IOrderService {
  createNewOrder: (order: IOrder) => Promise<any>;
  getOrderById: (Id: number) => Promise<IOrder>;
  getAllOrders: () => Promise<Array<IOrder>>;
  updateOrder: (
    Id: number,
    order: IOrder
  ) => Promise<number>;
  deleteOrder: (Id: number) => Promise<boolean>;
}

@injectable()
export class OrderService implements IOrderService {
  @inject(Types.ORDER_REPOSITORY)
  private orderRepository: IOrderRepository;

  createNewOrder = async (
    order: IOrder
  ): Promise<any> => {
    try {
      return this.orderRepository.create(order);
    } catch (e) {
      throw new Error("Unable to create new todo");
    }
  };

  getAllOrders = async (): Promise<Array<IOrder>> => {
    try {
      return this.orderRepository.getAll();
    } catch {
      throw new Error("Unable to get user todo");
    }
  };

  getOrderById = async (Id: number): Promise<IOrder> => {
    try {
      return this.orderRepository.getById(Id);
    } catch {
      throw new Error("Unable to get user todo");
    }
  };

  updateOrder = async (
    Id: number,
    order: IOrder
  ): Promise<number> => {
    try {
      return this.orderRepository.update(Id, order);
    } catch {
      throw new Error("Unable to updated todo");
    }
  };

  deleteOrder = async (
    Id: number,
  ): Promise<boolean> => {
    try {
      return this.orderRepository.delete(Id);
    } catch {
      throw new Error("Unable to delete todo");
    }
  };
}

//export default OrderService;
