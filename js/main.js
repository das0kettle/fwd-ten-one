//lazyload iamges

const observer = lozad();
observer.observe();

//jquery menu

$('.menu-button').on('click', () => {
    $('.mobnav').toggle();
  });