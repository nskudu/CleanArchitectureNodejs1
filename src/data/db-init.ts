import { Customer,Order,OrderDetail } from './models'
const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV !== 'test'

const dbInit = () => {
    Customer.sync({ alter: isDev }),
    Order.sync({ alter: isDev || isTest }),
    OrderDetail.sync({ alter: isDev || isTest })
}
export default dbInit 