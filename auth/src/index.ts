import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/auth/user/currentuser', (req, res) => {
    res.send('Hello there!')
})

app.listen(3000, () => {
  console.log('listening on port 3000');
});
