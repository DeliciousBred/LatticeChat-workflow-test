import { Service } from '../types';
import { deleteUser, isEmailVerified, User } from '../../db';
import { handleHttpError } from '../../util/error';

const handleGetBasicUserInformation: Service = async (req, res) => {
  const userId = req.params.user_id;
  const user = await User.findById(userId);

  if (user == null) {
    res.status(404).send({ success: false, message: 'User not found' });
    return;
  }

  // TODO: create type in shared directory
  const userInformation = {
    displayUsername: user.displayUsername,
    biography: user.biography,
    createdAt: user.createdAt,
  };

  res.status(200).send({
    success: true,
    message: 'User successfully found',
    data: userInformation,
  });
};

const handleDeleteUser: Service = async (req, res) => {
  const userId = req.params.user_id?.toString() ?? '';

  try {
    await deleteUser(userId);
    res.status(200).send({
      success: true,
      message: 'User successfully deleted',
    });
  } catch (error) {
    handleHttpError(error, res);
  }
};

export { handleGetBasicUserInformation, handleDeleteUser };
