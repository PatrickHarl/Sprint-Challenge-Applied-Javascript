/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel(){

  const carouselContainer = document.createElement('div')
  const leftButton = document.createElement('div')
  const imageOne = document.createElement('img')
  const imageTwo = document.createElement('img')
  const imageThree = document.createElement('img')
  const imageFour = document.createElement('img')
  const rightButton = document.createElement('div')

  carouselContainer.appendChild(leftButton)
  carouselContainer.appendChild(imageOne)
  carouselContainer.appendChild(imageTwo)
  carouselContainer.appendChild(imageThree)
  carouselContainer.appendChild(imageFour)
  carouselContainer.appendChild(rightButton)

  carouselContainer.classList.add('carousel')
  leftButton.classList.add('left-button')
  imageOne.src = './assets/carousel/mountains.jpeg'
  imageTwo.src = './assets/carousel/computer.jpeg'
  imageThree.src = './assets/carousel/trees.jpeg'
  imageFour.src = './assets/carousel/turntable.jpeg'
  rightButton.classList.add('right-button')

  imageOne.id = 'current'

  //const imagesArray = ['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg' ]

  leftButton.addEventListener('click', (event)=> {

      if(imageOne.id === 'current')
      {

        imageFour.id = 'current'
        imageOne.removeAttribute('id')
        imageFour.style.display = 'inline-block'
        imageOne.style.display = 'none'

      }
      else if(imageTwo.id === 'current')
      {

        imageOne.id = 'current'
        imageTwo.removeAttribute('id')
        imageOne.style.display = 'inline-block'
        imageTwo.style.display = 'none'

      }
      else if(imageThree.id === 'current')
      {

        imageTwo.id = 'current'
        imageThree.removeAttribute('id')
        imageTwo.style.display = 'inline-block'
        imageThree.style.display = 'none'

      }
      else if(imageFour.id === 'current')
      {

        imageThree.id = 'current'
        imageFour.removeAttribute('id')
        imageThree.style.display = 'inline-block'
        imageFour.style.display = 'none'

      }

  })

  rightButton.addEventListener('click', (event) => {


    if(imageOne.id === 'current')
      {

        imageTwo.id = 'current'
        imageOne.removeAttribute('id')
        imageTwo.style.display = 'inline-block'
        imageOne.style.display = 'none'

      }
      else if(imageTwo.id === 'current')
      {

        imageThree.id = 'current'
        imageTwo.removeAttribute('id')
        imageThree.style.display = 'inline-block'
        imageTwo.style.display = 'none'

      }
      else if(imageThree.id === 'current')
      {

        imageFour.id = 'current'
        imageThree.removeAttribute('id')
        imageFour.style.display = 'inline-block'
        imageThree.style.display = 'none'

      }
      else if(imageFour.id === 'current')
      {

        imageOne.id = 'current'
        imageFour.removeAttribute('id')
        imageOne.style.display = 'inline-block'
        imageFour.style.display = 'none'

      }


  })

  return carouselContainer

}

const newCarousel = createCarousel()
const carouselParent = document.querySelector('div.carousel-container')
carouselParent.appendChild(newCarousel)

const currImage = document.querySelector('#current')

currImage.style.display = 'inline-block'