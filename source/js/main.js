'use strict';

(function () {
  var header = document.querySelector('.js-header');
  var btnMenuOpen = document.querySelector('.js-menu-open');

  var headerClass = {
    OPEN: 'header--open',
    NOJS: 'header--nojs'
  };
  header.classList.remove(headerClass.NOJS);

  var menuHandler = function (evt) {
    if (evt.target === btnMenuOpen) {
      header.classList.add(headerClass.OPEN);
    } else {
      header.classList.remove(headerClass.OPEN);
    }
  };

  document.addEventListener('click', menuHandler);
})();

(function () {
  var form = document.querySelector('.form');

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });
})();
