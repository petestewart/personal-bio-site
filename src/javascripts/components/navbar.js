import utils from '../helpers/utils';
import mailto from './mailto';

const closeMenu = () => {
  $('#console').removeClass('go-dark');
  $('#nav-menu').addClass('hide');
  const printOpenBtn = () => {
    const openBtn = '<i class="fas fa-bars fa-2x open-menu"></i>';
    utils.printToDom('#menu-btn', openBtn);
  };
  // setTimeout(printOpenBtn(), 1000);
  // setTimeout(() => { printOpenBtn(); }, 1000);
  printOpenBtn();
  $(document).off('mouseup', closeMenu);
};

const revealMenu = () => {
  $('#console').addClass('go-dark');
  $('#nav-menu').removeClass('hide');
  // $('#menu-btn').removeClass('open-menu');
  const closeBtn = '<i class="fas fa-times fa-2x close-menu"></i>';
  utils.printToDom('#menu-btn', closeBtn);
  // $(document).mouseup(() => {
  //   closeMenu();
  // });
  $(document).on('mouseup', closeMenu);
};

const createNavbar = () => {
  const navbar = `
  <div class="row justify-content-end"><span id="menu-btn"><i class="fas fa-bars fa-2x open-menu"></i></span></div>
    <div class="row">
      <ul class="hide" id="nav-menu">
        <li><a href="#top">Home</li>
        <li><a href="#bio-top">About Me</a></li>
        <li><a href="#portfolio-top">Portfolio</li>
        <li><a href="https://petestewart.codes" target="_blank">Blog</li>
        <li id="menu-mail-link"></li>
      </ul>
  </div>`;
  utils.printToDom('#main-menu', navbar);
  mailto.mailLink('#menu-mail-link', 'Contact Me');
  $('body').on('click', '.open-menu', revealMenu);
  $('body').on('click', '.close-menu', closeMenu);
  // $(document).mouseup(() => {
  //   closeMenu();
  // });
};

export default { createNavbar };
