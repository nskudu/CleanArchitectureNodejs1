import express, {Express, Request, Response,Application} from 'express';
import dbInit from './data/db-init'
import orderRoutes from "./application/routes/orderRoutes";
import "reflect-metadata";


dbInit()

const app: Express = express();
const port = 3000;

//const routes = new Routes(app);


app.get('/', (req: Request, res: Response)=>{
    res.send('Hello, this is Express + TypeScript');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/orders", orderRoutes);

app.listen(port, ()=> {
console.log(`[Server]: I am running at https://localhost:${port}`);
});