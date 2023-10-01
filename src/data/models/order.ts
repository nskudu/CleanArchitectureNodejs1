import { Model, Sequelize, DataTypes, Optional } from "sequelize";
import { Order as OrderAttributes } from "../attributes";

export interface OrderRequest extends Optional<OrderAttributes, 'ID'> {}

export interface OrderResponse extends Required<OrderAttributes> {}

class Order extends Model implements OrderAttributes {
    public ID!: number
    public CustomerId!: number
    public TotalAmount!: number
    public Status!: number


    // timestamps!
    public PurchasedDate!: Date;
    public readonly UpdatedDate!: Date;
    public readonly CreatedDate!: Date;

    static initModel(sequelize: Sequelize): void {
        Order.init(
            {
                ID: {
                    type: DataTypes.INTEGER.UNSIGNED,
                    autoIncrement: true,
                    primaryKey: true,
                },
                CustomerId: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                TotalAmount: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                Status: {
                    type: DataTypes.INTEGER
                },
            },
            {
                sequelize,
                timestamps: true,
                tableName: "Orders"
            }
        );
    }
}

export default Order