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
    elem: 'path',
    attrs: {
      d:
        'M25.4 8.00156L24 6.60156L16 14.6008L8.00076 6.60156L6.60076 8.00156L14.6 16.0008L6.59998 23.9992L7.99998 25.3992L16 17.4008L23.9984 25.3992L25.3984 23.9992L17.4 16.0008L25.4 8.00156Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('close--alt', 32, content, attrs);
