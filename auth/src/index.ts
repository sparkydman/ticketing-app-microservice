import express, { Request, Response } from 'express';
import 'express-async-errors';
import { signupRouter } from './routes/signup-route';
import { signinRouter } from './routes/signin-route';
import { signoutRouter } from './routes/signout-route';
import { currentuserRouter } from './routes/current-user-route';
import { errorMiddleware } from './middlewares/error-middleware';
import mongoose from 'mongoose';
import { DBError } from './errors/db-error';
import { NotFoundError } from './errors/route-not-found';

const app = express();

app.use(express.json());

app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(currentuserRouter);

app.all('*', async (req: Request, res: Response) => {
  throw new NotFoundError();
});

const connectToDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/ticketing');
    console.log('db connection established');
  } catch (error: any) {
    console.error(error);
    throw new DBError(error.message);
  }
};

app.use(errorMiddleware);

app.listen(3000, () => {
  console.log('listening on port 3000');
});

connectToDB();
