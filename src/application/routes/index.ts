import { Application } from "express";
import orderRoutes from "../routes/orderRoutes";


export default class Routes {
  constructor(app: Application) {
    //app.use("/api", homeRoutes);
    app.use("/api/orders", orderRoutes);
  }
}
