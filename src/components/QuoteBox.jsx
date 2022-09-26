import React from 'react'

const QuoteBox = ({randomQuote, randomColor, getRandomAll}) => {

  console.log(getRandomAll)

  const colorObj = {
    color: randomColor
  }
  const backgroundObj = {
    backgroundColor: randomColor
  }

  return (
    <article style={colorObj} className='card'>

      {/* otro componente */}
      <p className='card__quote'>{randomQuote.quote}</p>
      {/* otro componente */}
      <h1 className='card__author'>{randomQuote.author}</h1>
      <button className='card__btn' 
      style={backgroundObj}
      onClick={getRandomAll}
       >&#62;</button>
    </article>
  )
}

export default QuoteBox
