import dotenv from 'dotenv';
import { Router } from 'express';
import fs from 'fs';

const router = Router();
dotenv.config();

router.get('/', (req, res) => {
  var filePath = process.env.FILEPATH;
  // var filePath = 'D:\\DataTest\\data.json';

  var file = fs.readFile(filePath, 'utf8', (err, data) => {
    return res.send(data);
    // return res.send(JSON.stringify(data));
  });
  // return res.send('Api Running');
});

export default router;
