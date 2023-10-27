import React from 'react';

import Container from '@/components/atom/Container';
import MenuList from '@/components/feature/My/MenuList';

import useSystemMenu from '@/hooks/feature/My/useSystemMenu';

const My = () => {
  const {systemMenus} = useSystemMenu();

  return (
    <Container>
      <MenuList systemMenus={systemMenus} />
    </Container>
  );
};

export default My;
