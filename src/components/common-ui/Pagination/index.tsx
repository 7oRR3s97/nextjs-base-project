import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { PaginationProps } from '@mui/material/Pagination';

import { Container, PaginationComponent, Item } from './styles';

interface Props extends Omit<PaginationProps, 'page' | 'count'> {
  numberOfPages: number;
  currentPage: number;
  isLoading?: boolean;
}

const Pagination: React.FC<Props> = ({
  numberOfPages,
  currentPage,
  isLoading,
  ...props
}) => {
  const { shape = 'rounded' } = props;
  return (
    <Container>
      <PaginationComponent
        {...props}
        count={numberOfPages}
        page={currentPage}
        shape={shape}
        renderItem={(item) => (
          <Item
            {...item}
            disabled={item.disabled || currentPage === item.page}
            page={
              isLoading && currentPage === item.page ? (
                <CircularProgress color="inherit" size="0.875rem" />
              ) : (
                item.page
              )
            }
          />
        )}
      />
    </Container>
  );
};

export default Pagination;
