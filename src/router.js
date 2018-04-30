import { Router } from 'express';

const router = Router();
import classRouter from './entities/class/router';

router.use(classRouter);
export default router;
