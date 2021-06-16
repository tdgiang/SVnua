import {PostLogin, PostData, GetData, PostFormData} from '../helpers';

import url from '../url';

export const loginApi = async (body) =>
  PostLogin(url.urllogin, body)
    .then((res) => res)
    .catch((err) => err);

export const getListNews = async (body) =>
  GetData(url.urlListUsers, body)
    .then((res) => res)
    .catch((err) => err);
