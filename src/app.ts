import express from 'express';
import errorMiddleware from './middlewares/error.middleware';
import productsRoute from './routes/products.route';
import usersRoute from './routes/users.route';
import ordersRoute from './routes/orders.route';
import loginRoute from './routes/login.route';

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/orders', ordersRoute);
app.use('/products', productsRoute);
app.use('/users', usersRoute);

app.use(errorMiddleware);

export default app;
