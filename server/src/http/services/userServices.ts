import { Service } from '../types';
import { deleteUser, getBasicUserInfoById, getBasicUserInfoByName } from '../../db';
import { handleHttpError } from '../../util/error';

const handleGetBasicUserInformation: Service = async (req, res) => {
  const userId = req.params.user_id?.toString() ?? '';
  const byName = req.query.byName ?? false;

  try {
    let userInformation;
    if(byName) {
      userInformation = await getBasicUserInfoByName(userId);
    } else {
      userInformation = await getBasicUserInfoById(userId);
    }

    res.status(200).send({
      success: true,
      message: 'User successfully found',
      data: userInformation,
    });
  } catch (error) {
    handleHttpError(error, res);
  }
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
