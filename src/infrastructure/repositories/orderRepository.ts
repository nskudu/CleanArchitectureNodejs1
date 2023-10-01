import {Op} from 'sequelize'
import { inject, injectable } from "inversify";
import "reflect-metadata";
import {Order as OrderAttributes} from '../../data/attributes/order'
import {Order} from '../../data/models'
import {OrderRequest, OrderResponse} from '../../data/models/order'

export interface IOrderRepository {
    getAll: () => Promise<Array<OrderResponse>>;
    getById: (id: number) => Promise<OrderResponse>;
    create: (order: OrderRequest) => Promise<any>;
    update: (id: number, order: Partial<OrderRequest>) => Promise<number>;
    delete: (id: any) => Promise<boolean>;

  }
  
  
@injectable()
    export class OrderRepository implements IOrderRepository {
        //constructor(@inject(Logger) private readonly logger: Logger) {}


        getAll = async (): Promise<Array<OrderResponse>> => {
            return Order.findAll()
        }

        getById = async (id: number): Promise<OrderResponse> => {
            const ingredient = await Order.findByPk(id)
        
            if (!ingredient) {
                // @todo throw custom error
                throw new Error('not found')
            }
        
            return ingredient
        }

        create = async (payload: OrderRequest): Promise<any> => {
            const ingredient = await Order.create(payload,{
                returning: false           
            });   
            return ingredient
        }
        
        
        update = async (id: number, payload: Partial<OrderRequest>): Promise<number> => {
            const ingredient = await Order.findByPk(id)
        
            if (!ingredient) {
                // @todo throw custom error
                throw new Error('not found')
            }
        
            const updatedIngredient = await Order.update(payload,{
                where: {id},
                returning: false
                
            }).then(([affectedCount]) => ({ affectedCount }));

            return updatedIngredient.affectedCount
        }
    

    
    delete = async (id: number): Promise<boolean> => {
        const deletedIngredientCount = await Order.destroy({
            where: {id}
        })
    
        return !!deletedIngredientCount
    }
    
}

//export default OrderRepository;
