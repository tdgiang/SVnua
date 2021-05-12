import {PostLogin, GetData, PostData} from '../helpers';

import url from '../url';

export const getListNew = async (body) =>
  GetData(url.urlGetListNew, body)
    .then((res) => res)
    .catch((err) => err);

export const getListCategoryNew = async (body) =>
  GetData(url.urlGetCategoryNew, body)
    .then((res) => res)
    .catch((err) => err);

export const getListMedia = async (body) =>
  GetData(url.urlGetListMedia, body)
    .then((res) => res)
    .catch((err) => err);

export const getDetailMedia = async (id) =>
  GetData(url.urlMediaDetail + '/' + id)
    .then((res) => res)
    .catch((err) => err);

export const getListCalendar = async (body) =>
  GetData(url.urlGetListCalendar, body)
    .then((res) => res)
    .catch((err) => err);
