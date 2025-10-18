 window.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const images = slider.querySelectorAll('img');
    let index = 0;

    setInterval(() => {
      index++;
      if (index >= images.length) index = 0;

      slider.scrollTo({
        left: slider.clientWidth * index,
        behavior: 'smooth'
      });
    }, 3000); // muda a cada 3 segundos
  });
