import utils from '../helpers/utils';

const revealMenu = () => {
  $('#console').addClass('go-dark');
  $('#nav-menu').removeClass('hide');
  $(document).mouseup(() => {
    $('#console').removeClass('go-dark');
    $('#nav-menu').addClass('hide');
  });
};

const createNavbar = () => {
  const navbar = `<div class="row justify-content-end"><i class="fas fa-bars fa-2x" id="menu-btn"></i></div>
  <div class="row">
    <ul class="hide" id="nav-menu">
      <li><a href="#welcome-top">Home</li>
      <li><a href="#bio-top">About Me</a></li>
      <li><a href="#portfolio-top">Portfolio</li>
      <li><a href="#">Contact Me</li>
    </ul>
  </div>`;
  utils.printToDom('#main-menu', navbar);
  $('#menu-btn').click(revealMenu);
};

export default { createNavbar };
