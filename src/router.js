import { Router } from 'express';

const router = Router();
import classRouter from './entities/class/router';
import userRouter from './entities/user/router';

router.use(userRouter);
router.use(classRouter);
export default router;
