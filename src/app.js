import express from 'express';
import { routes } from './routes/router.js';

const app = express();

app.use(express.json());
app.use('/', routes);
app.listen(3000, () => {
    console.log('listening on port 3000');
});