import SequelizeConnection from "../../data/SequelizeConnection";
import Customer from "./customer";
import Order from "./order";
import OrderDetail from "./orderdetail";



const sequelize = SequelizeConnection.getInstance();

// init models
Customer.initModel(sequelize);
Order.initModel(sequelize);
OrderDetail.initModel(sequelize);


// associate models
//Customer.associateModel();
//Order.associateModel();
//OrderDetail.associateModel();


export const db = {
  sequelize,
  Customer,
  Order,
  OrderDetail,
};

export {
  Customer,
  Order,
  OrderDetail,
}

