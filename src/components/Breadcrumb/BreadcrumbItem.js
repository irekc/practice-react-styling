import React from 'react';

import StyledBreadcrumbItem from './BreadcrumbItem.styled';

const BreadcrumbItem = ({active, href, children}) => {
    return (
        <StyledBreadcrumbItem active={active}>
          {href ? <a href={href}>{children}</a> : children}
        </StyledBreadcrumbItem>
    );
}

export default BreadcrumbItem

