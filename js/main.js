function handleNav() {
  const mainPage = document.querySelector('.nav-item:nth-of-type(1)');
  mainPage.classList.add('active');
  const iframe = document.querySelector('iframe');
  iframe.height = '884px';
  const lis = document.querySelectorAll('.nav-item:not(.mid_logo)');
  const main = document.querySelector('main')
  function addIframe(height,src,backgroundColor,iframe,container) {
    iframe.height =height;
    iframe.src = src;
    iframe.style.backgroundColor = backgroundColor
    container.append(iframe);
  }
  lis.forEach((element) => {
    element.addEventListener('click',(e) => {
      const choice = e.target.innerText;
      const htmliFrameElementBefore = document.querySelector('iframe');
      htmliFrameElementBefore.remove();
      const iframe = document.createElement('iframe');
      switch (choice) {
        case '首页':
            addIframe('884px','html/homePage.html','#f7f6f4',iframe,main);
        break;
        case '品牌和产品':
          addIframe('1070','html/brandOfProduct.html','#f7f6f4',iframe,main);
        break;
        case '联合营作':
          addIframe('565px','html/jointVentureCooperation.html','#f7f6f4',iframe,main);
        break;
        case '配套服务':
          addIframe('1200px','html/supportingServices.html','#fff',iframe,main);
        break;
        case '门店信息':
          addIframe('1415px','html/storeInformation.html','#fff',iframe,main);
        break;
        default:
          addIframe('560px','html/aboutUs.html','#f7f6f4',iframe,main);
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
  leftArrow.addEventListener('click',() => {
    clearInterval(intervalId);
    currentIndex = (currentIndex - 1 + maxIndex) % maxIndex || maxIndex;
    if (currentIndex === 1) {
      img.src = `imgs/banner${currentIndex}.png`;
    } else {
      img.src = `imgs/banner${currentIndex}.jpg`;
    }
    autoPlay();
  })
  rightArrow.addEventListener('click',() => {
    clearInterval(intervalId);
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