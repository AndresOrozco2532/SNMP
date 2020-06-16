import { Router } from 'express';
import fs from 'fs';

const router = Router();

router.get('/', (req, res) => {
  var filePath = 'D:\\SNMP\\DataTest\\data.json';

  var file = fs.readFile(filePath, 'utf8', (err, data) => {
    return res.send(data);
    // return res.send(JSON.stringify(data));
  });
  // return res.send('Api Running');
});

export default router;
