/* ========================================================================== *
 * Copyright (C) 2024 HCL America Inc.                                        *
 * Apache-2.0 license   https://www.apache.org/licenses/LICENSE-2.0           *
 * ========================================================================== */

import { createSvgIcon, IIconAttrs, IIconContent } from '../../../../../utils';

const attrs: IIconAttrs = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  width: 24,
  height: 24,
};

const content: IIconContent[] = [
  {
    elem: 'path',
    attrs: {
      d:
        `M20.25,2.25 C21.0784271,2.25 21.75,2.92157288 21.75,3.75 L21.75,20.25 C21.75,21.0784271 21.0784271,21.75 20.25,21.75 L3.75,21.75 C2.92157288,21.75 2.25,21.0784271 
          2.25,20.25 L2.25,3.75 C2.25,2.92157288 2.92157288,2.25 3.75,2.25 L20.25,2.25 Z M20.25,18.75 L3.75,18.75 L3.75,20.25 L20.25,20.25 L20.25,18.75 Z M20.25,6.75 L3.75,6.75 
            L3.75,17.25 L20.25,17.25 L20.25,6.75 Z M20.25,3.75 L3.75,3.75 L3.75,5.25 L20.25,5.25 L20.25,3.75 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('body', 24, content, attrs);
