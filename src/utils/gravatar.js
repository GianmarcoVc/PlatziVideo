import md5 from 'md5';

const hashImage = (email) => {
  const base = 'https://gravatar.com/avatar/';
  const formattedEmail = email.trim().toLowerCase();
  const hash = md5(formattedEmail);
  const parameters = '?d=retro';
  return `${base}${hash}${parameters}`;
};

export default hashImage;
