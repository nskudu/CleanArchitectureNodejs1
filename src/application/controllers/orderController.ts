import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { StatusCode } from "../../infrastructure/utility/statusCodes";

import { Types } from "../../DiTypes";
import { IOrderService } from "../../domain.services/orderService";


export interface IOrderController {
  getAllOrders: (req: Request, res: Response) => Promise<Response>;
  getOrderById: (req: Request, res: Response) => Promise<Response>;
  createNewOrder: (
    req: Request,
    res: Response
  ) => Promise<any>;
  updateOrder: (req: Request, res: Response) => Promise<Response>;
  deleteOrder: (req: Request, res: Response) => Promise<Response>;
}

@injectable()
export class OrderController implements IOrderController {
  @inject(Types.ORDER_SERVICE)
  private orderService: IOrderService;

  public createNewOrder = async (req: Request, res: any) => {
    /*const validationRes = validateCreateNewTodoRequest(req.body);
    if (!validationRes.valid) {
      return res.status(StatusCode.BAD_REQUEST).json({
        title: validationRes.errors[0].message,
        description: "Invalid request body",
      });
    }*/

    try {
      const { content } = req.body;
      const order = await this.orderService.createNewOrder(content);
      res.status(StatusCode.SUCCESS).send();
    } catch (ex) {
      res.status(StatusCode.SERVER_ERROR).send({
        message: (ex as Error).message
      });

    }
  };

  public getAllOrders = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
   /* try {
      const allUserTodo = await this.orderService.getAllOrders();
      return res.status(StatusCode.SUCCESS).json({ parameters: allUserTodo }); 

    } catch (ex) {
        res.status(StatusCode.SERVER_ERROR).send({
            message: (ex as Error).message
          });
    }*/
    const allUserTodo = await this.orderService.getAllOrders();
    return res.status(StatusCode.SUCCESS).send(allUserTodo); 

  };

  public getOrderById = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    /*try {
        const id = Number(req.params.id)
      const allUserTodo = await this.orderService.getOrderById(id);
      return res.status(StatusCode.SUCCESS).send(allUserTodo);  
    } catch (ex) {
        res.status(StatusCode.SERVER_ERROR).send({
            message: (ex as Error).message
          });
    }*/
    const id = Number(req.params.id)
      const allUserTodo = await this.orderService.getOrderById(id);
      return res.status(StatusCode.SUCCESS).send(allUserTodo);  
  };

  public updateOrder = async (req: Request, res: Response) => {
    const { body } = req;
    /*const validatorRes = validateUpdateToDoRequest(body);
    if (!validatorRes.valid) {
      return res.status(StatusCode.BAD_REQUEST).send("Invalid request body");
    }*/

    try {
      const { todoId, content } = body;
      const updatedTodo = await this.orderService.updateOrder(
        todoId,
        content
      );
      return res.status(StatusCode.SUCCESS).json({
        title: "success",
      });
    } catch (ex) {
      return res.status(StatusCode.SERVER_ERROR).json({
        message: (ex as Error).message
      });
    }
  };
  public deleteOrder = async (req: Request, res: Response) => {
    const { body } = req;
   /* const validatorRes = validateDeleteToDoRequest(body);
    if (!validatorRes.valid) {
      return res.status(StatusCode.BAD_REQUEST).json({
        title: "Invalid request body",
      });
    }*/
    /*try {
      const { todoId } = body;
      await this.orderService.deleteOrder(todoId);
      return res.status(StatusCode.SUCCESS).json({
        title: "success",
      });
    } catch (ex) {
      return res.status(StatusCode.SERVER_ERROR).json({
        message: (ex as Error).message
      });
    }*/

    const { todoId } = body;
    const allUserTodo = await this.orderService.deleteOrder(todoId);
    return res.status(StatusCode.SUCCESS).send(allUserTodo);
  };
}
