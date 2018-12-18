import { addLocaleData } from 'react-intl';

import csLocales from 'react-intl/locale-data/cs';

import csAntd from 'antd/lib/locale-provider/cs_CZ';

import csIntl from './translations/cs.yml';

addLocaleData([...csLocales]);

export const languages = ['cs'];

export const intlData = {
    cs: csIntl,
};

export const antdData = {
    cs: csAntd,
};
