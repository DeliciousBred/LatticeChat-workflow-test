import { Service } from '../types';
import { User } from '../../db/models';
import { isEmailTaken, isUsernameTaken } from '../../db';
import { handleHttpError } from '../../util/error';

const handleEmailTaken: Service = async (req, res) => {
  const email = req.body?.email ?? '';
  
  try {
    const isTaken = await isEmailTaken(email);
    res.status(200).send({
      isTaken: isTaken,
    });
  } catch (error) {
    handleHttpError(error, res);
  }
};

const handleUsernameTaken: Service = async (req, res) => {
  const username = req.body?.username ?? '';

  try {
    const isTaken = await isUsernameTaken(username);
    res.status(200).send({
      isTaken: isTaken,
    });
  } catch (error) {
    handleHttpError(error, res);
  }
};

export { handleEmailTaken, handleUsernameTaken };
