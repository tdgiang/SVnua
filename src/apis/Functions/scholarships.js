import {GetData} from '../helpers';

import url from '../url';

export const getListScholarships = async (body) =>
  GetData(url.urlListScholarships, body)
    .then((res) => res)
    .catch((err) => err);
