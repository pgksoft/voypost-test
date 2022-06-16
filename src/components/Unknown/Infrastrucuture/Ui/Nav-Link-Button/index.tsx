import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { TLink } from '../../../../../../types';

type TNavLinkButtonProps = {
  link: TLink;
};

const NavLinkButton: FC<TNavLinkButtonProps> = ({ link }) => {
  return (
    <Button variant="text" component={Link} to={link.url}>
      {link.title}
    </Button>
  );
};

export default NavLinkButton;
