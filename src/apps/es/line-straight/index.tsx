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
    elem: 'rect',
    attrs: {
      x: '-3.38',
      y: '15',
      width: '38.77',
      height: '2',
      transform: 'translate(-6.63 16) rotate(-45)',
    },
  },
];

export default createSvgIcon('line-straight', 24, content, attrs);
