import React, {useState} from 'react'
import {NewsData} from './Data/News'
import './NewsSection.css'
import News from './News'
function NewsSection() {
  const [category, setCategory] = useState('A');
  return (
    <div className='news__section'>
      <div className='news__wrapper'>
        <h1 className='section__heading dark'>Berita</h1>
        
        <div className='news__container'>
          {NewsData.map((data,index)=>
            ((data.category===category)?<News title={data.title} 
            description={data.description} img={data.img} link={data.link} idx={index}/>
              :console.log(data.category))
          )}
        </div>
      </div>
    </div>
  )
}

export default NewsSection
