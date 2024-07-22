'use client';

import { useEffect, useState } from 'react';

enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

export const useTheme = () => {
  const [theme, setTheme] = useState(THEME.DARK);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === THEME.DARK) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggle = () => {
    setTheme((prevTheme) =>
      prevTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK
    );
  };

  return { theme, toggle };
};
