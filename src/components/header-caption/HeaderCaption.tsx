import React, { useCallback, useEffect, useState } from 'react';
import {
  withLocationHoc,
  WithRouterProps,
} from '../../common/hoc/withLocationHoc';

const HeaderCaption = (props: WithRouterProps) => {
  const [currentPage, setCurrentPage] = useState('');

  const handlePage = useCallback(() => {
    const { pathname } = props.location;
    setCurrentPage(pathname.slice(1) || 'main');
  }, [props.location]);

  useEffect(() => {
    handlePage();
  }, [handlePage]);

  return <h2 className="header__caption">Current page: {currentPage}</h2>;
};
export default withLocationHoc(HeaderCaption);
