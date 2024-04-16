/* ========================================================================== *
 * Copyright (C) 2024 HCL America Inc.                                        *
 * Apache-2.0 license   https://www.apache.org/licenses/LICENSE-2.0           *
 * ========================================================================== */

import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export interface IIconContent {
  elem: string;
  // eslint-why - because attrs is a unknown type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attrs: any;
}

export interface IIconAttrs {
  xmlns: string;
  viewBox: string;
  width: number;
  height: number;
}

const createElements = (id: string, content: IIconContent[]): JSX.Element => {
  const elements: JSX.Element[] = content.map((item: IIconContent, index: number) => {
    const props = { ...item.attrs, key: `${id}-${index}` };
    // the attribute 'fill-rule' are nor supported, remove this attribute form the properties
    Object.keys(props).forEach((key: string) => {
      if (key === 'fill-rule') {
        delete props['fill-rule']; // eslint-disable-line
      }
    });
    return React.createElement(item.elem, props);
  });
  return (
    <React.Fragment key={id}>
      {elements}
    </React.Fragment>
  );
};

const createSvgIcon = (displayName: string, size: number, content: IIconContent[], attrs: IIconAttrs) => {
  const Component = React.memo(
    // eslint-why - because ref is a unknown type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    React.forwardRef<SvgIconProps>((props: SvgIconProps, ref: any) => {
      return (
        // eslint-why Syntax is necessary for implementation
        // eslint-disable-next-line react/jsx-props-no-spreading
        <SvgIcon {...props} data-mui-test={`${displayName}Icon`} ref={ref} viewBox={attrs.viewBox}>
          {createElements(`${displayName}Icon${size}`, content)}
        </SvgIcon>
      );
    }),
  );
  return Component as React.ComponentType<SvgIconProps>;
};

export {
  createSvgIcon,
};
