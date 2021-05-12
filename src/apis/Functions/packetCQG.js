import {PostLogin, GetData, PostData} from '../helpers';

import url from '../url';

export const getListPacketCQG = async (body) =>
  GetData(url.urlGetListPacketCQG, body)
    .then((res) => res)
    .catch((err) => err);

export const openCQG = async (body) =>
  PostData(url.urlOpenCQG, body)
    .then((res) => res)
    .catch((err) => err);
