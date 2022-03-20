const container = document.querySelector('.container'),
   privacy = container.querySelector('.privacy'),
   arrowBack = container.querySelector('.arrow-back');

privacy.addEventListener('click', () => {
   container.classList.add('active')
})
arrowBack.addEventListener('click', () => {
   container.classList.remove('active')
})

const audienceLi = document.querySelectorAll('.audience .list li');

audienceLi.forEach(elem => {
   elem.addEventListener('click', () => {
      if (elem.classList.contains('active')) {
         elem.classList.remove('active')
      } else {
         elem.classList.add('active')
      }
   })
})