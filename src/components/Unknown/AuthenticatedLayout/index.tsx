import React from 'react';
import MainMenu from '../Main-menu';

interface AuthenticatedLayoutProps {
  children: React.ReactElement;
}

const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({
  children,
}: AuthenticatedLayoutProps) => {
  return <MainMenu>{children}</MainMenu>;
};

export default AuthenticatedLayout;
