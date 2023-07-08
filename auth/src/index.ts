import express from 'express';
import { signupRouter } from './routes/signup-route';
import { signinRouter } from './routes/signin-route';
import { signoutRouter } from './routes/signout-route';
import { currentuserRouter } from './routes/current-user-route';
import { errorMiddleware } from './middlewares/error-middleware';

const app = express();

app.use(express.json());

app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(currentuserRouter);

app.all('*', errorMiddleware);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
