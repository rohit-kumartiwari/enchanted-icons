/* ========================================================================== *
 * Copyright (C) 2024 HCL America Inc.                                        *
 * Apache-2.0 license   https://www.apache.org/licenses/LICENSE-2.0           *
 * ========================================================================== */

import { createSvgIcon, IIconAttrs, IIconContent } from '../../../utils';

const attrs: IIconAttrs = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 32 32',
  width: 24,
  height: 24,
};

const content: IIconContent[] = [
  {
    elem: 'path',
    attrs: {
      // eslint-why - because the svg path is to long
      // eslint-disable-next-line max-len
      d: 'M5,20H3V18H5Zm0,2v3H8v2H5a2,2,0,0,1-2-2V22ZM21,5H19V3h2Zm2,0V3h2a2,2,0,0,1,2,2V7H25V5ZM5,16H3V13H5ZM17,5H14V3h3Zm8,6V9h2v2Zm0,2h2v2H25V13ZM5,11H3V9H5Zm7,14v2H10V25Zm2,0h2v2H14ZM12,5H10V3h2ZM5,7H3V5A2,2,0,0,1,5,3H8V5H5ZM25,25v4H23V25H19V23h4V19h2v4h4v2Z',
    },
  },
];

export default createSvgIcon('screenshot', 24, content, attrs);
