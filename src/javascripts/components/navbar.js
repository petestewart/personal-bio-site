import utils from '../helpers/utils';
import mailto from './mailto';

const revealMenu = () => {
  const closeMenu = () => {
    $('#console').removeClass('go-dark');
    $('#nav-menu').addClass('hide');
    // $('#menu-btn').addClass('open-menu');
  };
  $('#console').addClass('go-dark');
  $('#nav-menu').removeClass('hide');
  $('#menu-btn').removeClass('open-menu');
  $(document).mouseup(() => {
    closeMenu();
  });
};

const createNavbar = () => {
  const navbar = `<div class="row justify-content-end"><i class="fas fa-bars fa-2x open-menu" id="menu-btn"></i></div>
  <div class="row">
    <ul class="hide" id="nav-menu">
      <li><a href="#top">Home</li>
      <li><a href="#bio-top">About Me</a></li>
      <li><a href="#portfolio-top">Portfolio</li>
      <li id="menu-mail-link"></li>
    </ul>
  </div>`;
  utils.printToDom('#main-menu', navbar);
  mailto.mailLink('#menu-mail-link', 'Contact Me');
  $('.open-menu').click(revealMenu);
};

export default { createNavbar };
