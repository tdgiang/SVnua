import {PostLogin, GetData, PostData} from '../helpers';

import url from '../url';

export const getListWidthDraw = async (body) =>
  GetData(url.urlGetListWithDraw, body)
    .then((res) => res)
    .catch((err) => err);

export const widthDraw = async (body) =>
  PostData(url.urlWithdraw, body)
    .then((res) => res)
    .catch((err) => err);

export const getListBank = async (body) =>
  GetData(url.urlListBank, body)
    .then((res) => res)
    .catch((err) => err);
export const addMethodBank = async (body) =>
  PostData(url.urlAddMethodBank, body)
    .then((res) => res)
    .catch((err) => err);
export const deleteMethodBank = async (body) =>
  PostData(url.urlDeleteMethodBank, body)
    .then((res) => res)
    .catch((err) => err);

export const updateMethodBank = async (body) =>
  PostData(url.urlUpdateMethodBank, body)
    .then((res) => res)
    .catch((err) => err);

export const getListTransaction = async (body) =>
  GetData(url.urlGetListHistory, body)
    .then((res) => res)
    .catch((err) => err);
