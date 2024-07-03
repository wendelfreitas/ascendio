import { Fragment } from 'react';
import '../../styles/index.css';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <Fragment>{children}</Fragment>
);
