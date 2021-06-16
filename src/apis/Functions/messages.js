import {GetData} from '../helpers';

import url from '../url';

export const getListMessages = async (body) =>
  GetData(url.urlListMessage, body)
    .then((res) => res)
    .catch((err) => err);
