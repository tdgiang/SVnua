import {GetData} from '../helpers';

import url from '../url';

export const getListNews = async (body) =>
  GetData(url.urlListNews, body)
    .then((res) => res)
    .catch((err) => err);
