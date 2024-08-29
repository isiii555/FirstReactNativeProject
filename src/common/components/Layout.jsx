import React from 'react';
import {StyledView} from '@common/StyledComponents';
import CustomHeader from '@common/components/CustomHeader';
import { StyledScrollView } from '../StyledComponents';

const Layout = ({children, title}) => {
  return (
    <>
      <CustomHeader title={title} />
      <StyledScrollView className="flex-1 px-3">{children}</StyledScrollView>
    </>
  );
};

export default Layout;
