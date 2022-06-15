const getUserLetters = (displayName: string): string => {
  if (!displayName) return 'U';

  const names = displayName.replace(/\s+/g, ' ').trim().split(' ');
  const newUserLetters = `${names[0].charAt(0).toUpperCase()}${
    (names[1] && names[1].charAt(0).toUpperCase()) || ''
  }`;
  return newUserLetters;
};

export default getUserLetters;
