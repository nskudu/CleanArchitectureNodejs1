import { Model, Sequelize, DataTypes } from "sequelize";
import { OrderDetail as OrderDetailAttributes } from "../attributes";

class OrderDetail extends Model implements OrderDetailAttributes {
    public ID!: number
    public OrderId!: number
    public ProductId!: number
    public Count!: number

    // timestamps!
    public readonly UpdatedDate!: Date;
    public readonly CreatedDate!: Date;

    static initModel(sequelize: Sequelize): void {
        OrderDetail.init(
            {
                ID: {
                    type: DataTypes.INTEGER.UNSIGNED,
                    autoIncrement: true,
                    primaryKey: true,
                },
                OrderId: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                ProductId: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                Count: {
                    type: DataTypes.INTEGER
                }
            },
            {
                sequelize,
                timestamps: true,
                tableName: "OrderDetails"
            }
        );
    }
}

export default OrderDetail