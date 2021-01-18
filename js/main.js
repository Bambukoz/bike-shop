'use strict';

(function () {
  var header = document.querySelector('.js-header');
  var btnMenuOpen = document.querySelector('.js-menu-open');
  var body = document.querySelector('.js-page');

  var pageClass = {
    OPEN: 'header--open',
    NOJS: 'header--nojs',
    BODY_LOCKED: 'page--locked'
  };
  header.classList.remove(pageClass.NOJS);

  var menuHandler = function (evt) {
    if (evt.target === btnMenuOpen) {
      header.classList.add(pageClass.OPEN);
      body.classList.add(pageClass.BODY_LOCKED);
    } else {
      header.classList.remove(pageClass.OPEN);
      body.classList.remove(pageClass.BODY_LOCKED);
    }
  };

  document.addEventListener('click', menuHandler);
})();
