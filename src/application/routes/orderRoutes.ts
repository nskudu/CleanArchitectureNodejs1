import express from "express";
import { Types } from "../../DiTypes";
import { dIContainer } from "../../inversify.config";
import { IOrderController } from "../controllers/orderController";

class OrderRoutes {
  router = express.Router();
  orderController = dIContainer.get<IOrderController>(
    Types.ORDER_CONTROLLER
  );
  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Create a new Tutorial
    this.router.post("/", this.orderController.createNewOrder);

    // Retrieve all Tutorials
    this.router.get("/", this.orderController.getAllOrders);


    // Retrieve a single Tutorial with id
    this.router.get("/:id", this.orderController.getOrderById);

    // Update a Tutorial with id
    this.router.put("/:id", this.orderController.updateOrder);

    // Delete a Tutorial with id
    this.router.delete("/:id", this.orderController.deleteOrder);

  }
}

export default new OrderRoutes().router;
