import React from 'react';
import type { CollapseProps } from '@mui/material/Collapse';
import CollapseComponent from '@mui/material/Collapse';

const Collapse: React.ElementType<CollapseProps> = React.forwardRef(
  (props, ref) => {
    return (
      <CollapseComponent ref={ref} {...props}>
        {props.children}
      </CollapseComponent>
    );
  }
);

Collapse.displayName = 'Collapse';

export default Collapse;
