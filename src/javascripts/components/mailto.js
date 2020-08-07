import utils from '../helpers/utils';

const mailLink = (target, text) => {
  const coded = 'IXfXufXg@MoJtR.Zqo';
  const key = 'oUXDw2NbshrTcCKW3lqiE0g7LPuQHxZjdB6RntpaM8GAm5eFS9vy1zVfIJ4kYO';
  const shift = coded.length;
  let link = '';
  for (let i = 0; i < coded.length; i += 1) {
    if (key.indexOf(coded.charAt(i)) === -1) {
      const ltr = coded.charAt(i);
      link += (ltr);
    } else {
      const ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length;
      link += (key.charAt(ltr));
    }
  }
  utils.printToDom(target, `<a href='mailto:${link}'>${text}</a>`);
};

export default { mailLink };
