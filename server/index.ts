import  express, { Request, Response } from 'express';
import { env } from './config';

const app = express();
const PORT = env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});