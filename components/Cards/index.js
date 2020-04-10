// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function createArticleCard(headline, imgSrc, author){

    const cardContainer = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const cardAuthor = document.createElement('div')
    const cardImageContainer = document.createElement('div')
    const cardImage = document.createElement('img')
    const cardAuthorName = document.createElement('span')

    cardContainer.appendChild(cardHeadline)
    cardContainer.appendChild(cardAuthor)

    cardAuthor.appendChild(cardImageContainer)
    cardImageContainer.appendChild(cardImage)
    cardAuthor.appendChild(cardAuthorName)

    cardContainer.classList.add('card')
    cardHeadline.classList.add('headline')
    cardAuthor.classList.add('author')
    cardImageContainer.classList.add('img-container')
    
    cardHeadline.textContent = headline
    cardImage.src = imgSrc
    cardAuthorName.textContent = `By ${author}`

    return cardContainer

}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {

        const jsArray = response.data.articles.javascript
        const bsArray = response.data.articles.bootstrap
        const techArray = response.data.articles.technology
        const jqueryArray = response.data.articles.jquery
        const nodeArray = response.data.articles.node

        jsArray.forEach(article => {

            const newArticleCard = createArticleCard(article.headline, article.authorPhoto, article.authorName)
            const articleParent = document.querySelector('div.cards-container')
            articleParent.appendChild(newArticleCard)

        })

        bsArray.forEach(article => {

            const newArticleCard = createArticleCard(article.headline, article.authorPhoto, article.authorName)
            const articleParent = document.querySelector('div.cards-container')
            articleParent.appendChild(newArticleCard)
            
        })

        techArray.forEach(article => {

            const newArticleCard = createArticleCard(article.headline, article.authorPhoto, article.authorName)
            const articleParent = document.querySelector('div.cards-container')
            articleParent.appendChild(newArticleCard)
            
        })

        jqueryArray.forEach(article => {

            const newArticleCard = createArticleCard(article.headline, article.authorPhoto, article.authorName)
            const articleParent = document.querySelector('div.cards-container')
            articleParent.appendChild(newArticleCard)
            
        })

        nodeArray.forEach(article => {

            const newArticleCard = createArticleCard(article.headline, article.authorPhoto, article.authorName)
            const articleParent = document.querySelector('div.cards-container')
            articleParent.appendChild(newArticleCard)
            
        })

    })
    .catch(err => {

        console.log(err)


    })