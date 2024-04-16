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
      d: 'M14 21.5l-5-5 1.6-1.5 3.4 3.4 7.4-7.4 1.6 1.6-9 8.9z',
      stroke: '#FFF',
      strokeWidth: '3',
    },
  },
];

export default createSvgIcon('user-status--active', 32, content, attrs);
