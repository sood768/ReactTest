import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Paginations = (props) => {
  
  return (
    <Pagination aria-label="Page navigation example" style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <PaginationItem>
        <PaginationLink first onClick={props.onPaginationPrevious} />
      </PaginationItem>

      <PaginationItem>
        <PaginationLink last onClick={props.onPaginationNext} />
      </PaginationItem>
    </Pagination>
  );
}

export default Paginations;