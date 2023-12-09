
window.onload = () => {
  const img = document.querySelector('.img1');
  const desc = document.querySelector('.desc_doughnut');
  const doughnut = document.querySelector('.doughnut');
  img.addEventListener('mouseover',() => {
    desc.style.display = 'block';
    doughnut.style.color = '#cb976c';
  });
  img.addEventListener('mouseleave',() => {
    desc.style.display = 'none';
    doughnut.style.color = '';
  })
  doughnut.addEventListener('mouseover',() => {
    desc.style.display = 'block';
    doughnut.style.color = '#cb976c';
  });
  doughnut.addEventListener('mouseleave',() => {
    desc.style.display = 'none';
    doughnut.style.color = '';
  })
}
