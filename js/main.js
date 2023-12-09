function handleNav() {
  const mainPage = document.querySelector('.nav-item:nth-of-type(1)');
  mainPage.classList.add('active');
  const iframe = document.querySelector('iframe');
  iframe.height = '884px';
  const lis = document.querySelectorAll('.nav-item:not(.mid_logo)');
  lis.forEach((element) => {
    element.addEventListener('click',(e) => {
      const choice = e.target.innerText;
      switch (choice) {
        case '首页':
          iframe.height ='884px';
          iframe.style.backgroundColor = '#f7f6f4'
          iframe.src = 'html/homePage.html';
        break;
        case '品牌和产品':
          iframe.height ='1070px';
          iframe.style.backgroundColor = '#f7f6f4'
          iframe.src = 'html/brandOfProduct.html';
        break;
        case '联合营作':
          iframe.height ='565px';
          iframe.style.backgroundColor = '#f7f6f4'
          iframe.src = 'html/jointVentureCooperation.html';
        break;
        case '配套服务':
          iframe.height ='1200px';
          iframe.style.backgroundColor = '#fff'
          iframe.src = 'html/supportingServices.html';
        break;
        case '门店信息':
          iframe.height ='1415px';
          iframe.style.backgroundColor = '#fff'
          iframe.src = 'html/storeInformation.html';
        break;
        default:
          iframe.height ='560px';
          iframe.style.backgroundColor = '#f7f6f4'
          iframe.src = 'html/aboutUs.html';
        break;
      }
      e.stopPropagation();
      lis.forEach((element) => {
        element.classList.remove('active');
      })
      element.classList.add('active');
    })
  })
}

function play() {
  let currentIndex = 1;
  const img = document.querySelector('.banner-pic');
  const maxIndex = 3;
  const leftArrow = document.querySelector('.left');
  const rightArrow = document.querySelector('.right');
  let intervalId;
  function autoPlay() {
    intervalId = setInterval(() => {
      currentIndex = (currentIndex % maxIndex) + 1;
      if (currentIndex === 1) {
        img.src = `imgs/banner${currentIndex}.png`;
      } else {
        img.src = `imgs/banner${currentIndex}.jpg`;
      }
    },1500)
  }
  autoPlay();
  leftArrow.addEventListener('click',(e) => {
    clearInterval(intervalId);
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + maxIndex) % maxIndex || maxIndex;
    if (currentIndex === 1) {
      img.src = `imgs/banner${currentIndex}.png`;
    } else {
      img.src = `imgs/banner${currentIndex}.jpg`;
    }
    autoPlay();
  })
  rightArrow.addEventListener('click',(e) => {
    clearInterval(intervalId);
    e.stopPropagation();
    currentIndex = (currentIndex % maxIndex) + 1;
    if (currentIndex === 1) {
      img.src = `imgs/banner${currentIndex}.png`;
    } else {
      img.src = `imgs/banner${currentIndex}.jpg`;
    }
    autoPlay();
  })

}
window.onload = () =>{
  handleNav();
  play();
}