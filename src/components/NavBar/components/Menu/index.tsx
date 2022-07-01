import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import PersonIcon from '@mui/icons-material/Person';

// import { useAuthentication } from 'hooks/useAuthentication';
import { useMenu } from 'redux/menu';

import Button, { Layout } from 'components/common-ui/Button';

import { Container } from './styles';

const EditData = dynamic(() => import('components/EditData'));

interface ButtonData {
  title: string;
  variant: Layout;
  showDesktop: boolean;
  showMobile: boolean;
  onClick?: () => void;
  href?: string;
  icon?: JSX.Element;
  isLoading?: boolean;
  disabled?: boolean;
}

interface Props {
  closeDrawer(): void;
}

const Menu: React.FC<Props> = ({ closeDrawer }) => {
  const { t } = useTranslation('menu');
  // const { handleLogOut, isUserDataCompleted } = useAuthentication();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const { editData, setOpenEditData } = useMenu();

  const menuOptions = React.useMemo<ButtonData[]>(() => {
    return [
      {
        title: t('edit-data-button'),
        onClick: () => {
          closeDrawer();
          setDrawerOpen(false);
          setOpenEditData(true);
        },
        variant: 'link',
        showDesktop: false,
        showMobile: true,
      },
      {
        title: t('logout-button'),
        variant: 'link',
        showDesktop: false,
        showMobile: true,
      },
    ];
  }, [closeDrawer, setOpenEditData, t]);

  const buttonsOptions = React.useMemo<ButtonData[]>(() => {
    return [
      {
        title: t('home-button'),
        href: '/',
        variant: 'link',
        showDesktop: true,
        showMobile: true,
      },
      {
        title: t('my-profile-button'),
        onClick: () => setDrawerOpen(true),
        variant: 'outlinedBlack',
        icon: <PersonIcon />,
        showDesktop: true,
        showMobile: false,
      },
      ...menuOptions,
    ];
  }, [t, menuOptions]);

  const buttons = React.useMemo(() => {
    return buttonsOptions.map((button) => {
      return (
        <Box
          key={button.title}
          sx={(theme) => ({
            padding: theme.spacing(4, 2),
            width: 'fit-content',
            display: button.showMobile ? 'flex' : 'none',
            [theme.breakpoints.up('md')]: {
              display: button.showDesktop ? 'flex' : 'none',
            },
          })}
        >
          <Button
            variant={button.variant}
            isLoading={button.isLoading}
            disabled={button.disabled}
            onClick={button.onClick}
            icon={button.icon}
            href={button.href}
            fullWidth
          >
            {button.title}
          </Button>
        </Box>
      );
    });
  }, [buttonsOptions]);

  const menu = React.useMemo(() => {
    return menuOptions.map((button) => {
      return (
        <Box
          key={button.title}
          sx={(theme) => ({
            padding: theme.spacing(4, 4, 0),
            width: 'fit-content',
          })}
        >
          <Button
            variant={button.variant}
            isLoading={button.isLoading}
            disabled={button.disabled}
            onClick={button.onClick}
            icon={button.icon}
            fullWidth
          >
            {button.title}
          </Button>
        </Box>
      );
    });
  }, [menuOptions]);

  return (
    <Container>
      {[buttons]}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {menu}
      </Drawer>
      {editData ? <EditData /> : null}
    </Container>
  );
};

export default Menu;
