const $preload = document.querySelector('.preload-wrap');
const $wrapper = document.getElementById('wrapper');
const $footer = document.querySelector('.tele');

document.addEventListener('DOMContentLoaded', e => {
  setTimeout(() => {
    $preload.classList.add('_hide');
    $preload.addEventListener('transitionend', e => {
      $preload.style.display = 'none';
      $preload.remove();

      document.body.classList.add('_preload-end');
      $wrapper.classList.add('_show');
      $footer.classList.add('_show');
    })
  }, 2000);
})