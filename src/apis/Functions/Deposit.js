import {PostLogin, GetData, PostData} from '../helpers';

import url from '../url';

export const getListMethod = async (body) =>
  GetData(url.urlGetListMethod, body)
    .then((res) => res)
    .catch((err) => err);

export const walletDeposit = async (body) =>
  PostData(url.urlWalletDeposit, body)
    .then((res) => res)
    .catch((err) => err);
