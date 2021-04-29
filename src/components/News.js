import React from 'react'
import { Link } from 'react-router-dom'
function News({title, description, img, alt, link, idx}) {
    return (
      <Link to = {link} className='news__container-card' key={idx}>
        <div className='news__container-cardInfo'>
          <div className='news__img-wrapper'>
            <img src={img} alt={alt} className='news__img' />
          </div>
          <div className='news__text-wrapper'>
            <div className='news__title'>
              {title}
            </div>
            <div className='news__description'>
              {description}
            </div>
          </div>
        </div>
      </Link>
    )
}
News.defaultProps={
  img :'images/svg-1.svg',
  title :'Praktikum',
  description :'bla bla bla blablalalalalalallalalalal lalalalalal lalalalalalla',
  alt : 'News',
  link: '#',
  idx: 0
}
export default News
