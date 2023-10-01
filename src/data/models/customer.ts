import { Model, Sequelize, DataTypes } from "sequelize";
import { Customer as CustomerAttributes } from "../attributes";

class Customer extends Model implements CustomerAttributes {
    public ID!: number
    public Name!: string
    public Surname!: string
    public Email!: string
    public Password!: string
    public Status!: number

    // timestamps!
    public readonly UpdatedDate!: Date;
    public readonly CreatedDate!: Date;

    static initModel(sequelize: Sequelize): void {
        Customer.init(
            {
                ID: {
                    type: DataTypes.INTEGER.UNSIGNED,
                    autoIncrement: true,
                    primaryKey: true,
                },
                Name: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                Surname: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true
                },
                Email: {
                    type: DataTypes.STRING
                },
                Password: {
                    type: DataTypes.STRING
                },
                Status: {
                    type: DataTypes.INTEGER
                },
            },
            {
                sequelize,
                timestamps: true,
                tableName: "Customers"
            }
        );
    }
}

export default Customer