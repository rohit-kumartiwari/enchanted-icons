/* ========================================================================== *
 * Copyright (C) 2024 HCL America Inc.                                        *
 * Apache-2.0 license   https://www.apache.org/licenses/LICENSE-2.0           *
 * ========================================================================== */

import { createSvgIcon, IIconAttrs, IIconContent } from '../../../utils';

const attrs: IIconAttrs = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 32 32',
  width: 32,
  height: 32,
};

const content: IIconContent[] = [
  {
    elem: 'circle',
    attrs: {
      cx: '16',
      cy: '16',
      fill: 'currentColor',
      r: '14',
    },
  },
  {
    elem: 'path',
    attrs: {
      d: 'M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z',
      stroke: '#FFF',
      strokeWidth: '3',
    },
  },
];

export default createSvgIcon('user-status--away', 32, content, attrs);
