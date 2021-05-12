import {PostLogin, PostData, GetData, PostFormData} from '../helpers';

import url from '../url';

export const loginApi = async (body) =>
  PostLogin(url.urllogin, body)
    .then((res) => res)
    .catch((err) => err);

export const registorApi = async (body) =>
  PostLogin(url.urlRegistor, body)
    .then((res) => res)
    .catch((err) => err);

export const logoutApi = async (body) =>
  PostData('http://api.dcvinvest.com/api/auth/logout', body)
    .then((res) => res)
    .catch((err) => err);

export const getOTPApi = async (body) =>
  PostLogin(url.urlGetOTP, body)
    .then((res) => res)
    .catch((err) => err);

export const verifyOTPApi = async (body) =>
  PostLogin(url.urlVerifyOTP, body)
    .then((res) => res)
    .catch((err) => err);

export const forgotPasswordApi = async (body) =>
  PostLogin(url.urlForgotPassword, body)
    .then((res) => res)
    .catch((err) => err);

export const verifyAccountApi = async (body) =>
  PostFormData(url.urlVerifyAccount, body)
    .then((res) => res)
    .catch((err) => err);

export const getTransaction = async (body) =>
  GetData(url.urlGetTransaction, body)
    .then((res) => res)
    .catch((err) => err);

export const getListNotification = async (body) =>
  GetData(url.urlGetListNotification, body)
    .then((res) => res)
    .catch((err) => err);

export const updateInforUser = async (body) =>
  PostData(url.urlUpdateInforUser, body)
    .then((res) => res)
    .catch((err) => err);

export const updateLangugeApi = async (body) =>
  PostData(url.urlUpdateLanguage, body)
    .then((res) => res)
    .catch((err) => err);
