/* ========================================================================== *
 * Copyright (C) 2024 HCL America Inc.                                        *
 * Apache-2.0 license   https://www.apache.org/licenses/LICENSE-2.0           *
 * ========================================================================== */

import * as React from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';

const SvgPortal = (props: SvgIconProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      // eslint-why Syntax is necessary for implementation
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <defs>
        <linearGradient
          x1="3.941%"
          y1="50.001%"
          x2="99.998%"
          y2="50.001%"
          id="portal_svg__b"
        >
          <stop stopColor="#6600AE" offset="0%" />
          <stop stopColor="#EB1746" offset="100%" />
        </linearGradient>
        <path
          id="portal_svg__a"
          d="M6.061.516l3.062 6.736L0 13.999h4.194l9.149-6.747L10.307.516z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 5.484)">
          <mask id="portal_svg__c" fill="#fff">
            <use xlinkHref="#portal_svg__a" />
          </mask>
          <path
            fill="url(#portal_svg__b)"
            mask="url(#portal_svg__c)"
            d="M6.061.516l3.062 6.736L0 13.999h4.194l9.149-6.747L10.307.516z"
          />
        </g>
        <path
          fill="#8D8D8D"
          d="M14.703 6l2.14 4.804L23.369 6zM9.546 19.484h7.833l-1.941-4.322z"
        />
      </g>
    </svg>
  );
};

export default SvgPortal;
