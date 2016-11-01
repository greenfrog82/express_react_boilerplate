import express from 'express';
import {localAuth} from './../auth/authenticator';

const router = express.Router();

export const login = router.post(
  '/login',
  localAuth('./login/success', './login/fail')
);

export const loginSuccess = router.get(
  '/login/success',
  (req, res) => {
    res.json({ msg: 'Success to log-in' });
  }
);

export const loginFail = router.get(
  '/login/fail',
  (req, res) => {
    console.log('test');
    res.status(500).json({msg:'Fail to log-in.'});
  }
);

export const logout = router.post(
  '/logout',
  (req, res) => {
    req.logout();
    res.json({msg:'log-out'});
  }
);
