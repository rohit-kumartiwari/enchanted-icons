/* ========================================================================== *
 * Copyright (C) 2024 HCL America Inc.                                        *
 * Apache-2.0 license   https://www.apache.org/licenses/LICENSE-2.0           *
 * ========================================================================== */

import { createSvgIcon, IIconAttrs, IIconContent } from '../../../../../utils';

const attrs: IIconAttrs = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 32 32',
  width: 32,
  height: 32,
};

const content: IIconContent[] = [
  {
    elem: 'path',
    attrs: {
      d:
        'M18,24 L18,26 L3,26 L3,24 L18,24 Z M29,18 L29,20 L3,20 L3,18 L29,18 Z M28,12 L28,14 L12,14 L12,12 L28,12 Z M9,6 L9,8 L7,8 L7,14 L5,14 L5,8 L3,8 L3,6 L9,6 Z M28,6 L28,8 L12,8 L12,6 L28,6 Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('text', 32, content, attrs);
