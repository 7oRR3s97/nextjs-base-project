import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import Drawer from '@mui/material/Drawer';

import Logo from 'components/Logo';

import {
  Container,
  GridContainer,
  GridLogo,
  GridItem,
  MenuButtonGrid,
  MenuButton,
} from './styles';

const Menu = dynamic(() => import('./components/Menu'));

const NavBar: React.FC = () => {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const navBarOptions = React.useMemo(() => {
    if (router.pathname === '/') return <></>;
    return <Menu closeDrawer={() => setDrawerOpen(false)} />;
  }, [router]);

  return (
    <Container>
      <GridContainer container spacing={2}>
        <GridLogo item onClick={() => router.push('/')}>
          <Logo />
        </GridLogo>
        <GridItem item>{navBarOptions}</GridItem>
        <MenuButtonGrid item onClick={() => setDrawerOpen(true)}>
          <MenuButton />
        </MenuButtonGrid>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          {navBarOptions}
        </Drawer>
      </GridContainer>
    </Container>
  );
};

export default NavBar;
