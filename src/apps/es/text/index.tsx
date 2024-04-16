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
      d:
        'M22,29H10V23h3V8H9v3H3V2H29v9H23V8H19V23h3ZM12,27h8V25H17V6h8V9h2V4H5V9H7V6h8V25H12Z',
    },
  },
];

export default createSvgIcon('text', 24, content, attrs);
