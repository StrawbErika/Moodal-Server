import { Router } from 'express';

const router = Router();
import classRouter from './entities/class/router';
import commentRouter from './entities/comment/router';
import messageRouter from './entities/message/router';
import postRouter from './entities/post/router';
import userRouter from './entities/user/router';

router.use(classRouter);
router.use(commentRouter);
router.use(messageRouter);
router.use(postRouter);
router.use(userRouter);

export default router;
