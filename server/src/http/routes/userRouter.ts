import { Router } from 'express';
import { attachSession, validateUser } from '../middleware/authValidation';
import {
  handleAddFriendRequest,
  handleGetFriendRequests,
  handleRemoveFriend,
  handleRemoveFriendRequest,
} from '../services/friendServices';
import { handleGetBasicUserInformation } from '../services/userServices';

const userRouter = Router({ mergeParams: true });

userRouter.get('/', handleGetBasicUserInformation);

userRouter.post('/friend-requests', validateUser, handleAddFriendRequest);
userRouter.delete('/friend-requests', validateUser, handleRemoveFriendRequest);
userRouter.delete('/friends', validateUser, handleRemoveFriend);
userRouter.use(attachSession, validateUser);
userRouter.get('/friend-requests', handleGetFriendRequests);
userRouter.post('/friend-requests', handleAddFriendRequest);
userRouter.delete('/friend-requests', handleRemoveFriendRequest);
userRouter.delete('/friends', handleRemoveFriend);

export default userRouter;
