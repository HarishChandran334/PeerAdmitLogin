import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>LOREM IPSUM</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>  
            <CardItem
              src='images/img-5.jpg'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. In minus nesciunt cumque. Illo eligendi, eius asperiores molestiae dolore beatae nemo, error ipsa molestias delectus quam! Totam voluptatibus optio et perferendis.'
              label='X'
              path='/X'
            />
            <CardItem
              src='images/img-6.jpg'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore adipisci reiciendis eius. Ipsum vitae ipsam ad, consequuntur enim aliquid deleniti perspiciatis, accusamus, dolores illum similique blanditiis modi. Alias, enim laborum.'
              label='Y'
              path='/Y'
            />
            <CardItem
              src='images/img-7.jpg'
              text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae accusamus, beatae animi debitis deserunt iste cumque veritatis hic dolores, totam quaerat nisi officia commodi ut nobis fugit? Odio, fugiat itaque.'
              label='Z'
              path='/Z'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-home.jpg'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sint iure iusto itaque, vitae eum voluptas rem ex? Voluptas amet natus expedita aut ratione vitae assumenda laboriosam ad distinctio nam.'
              label='Watch Trailer'
              path=''
            />
            <CardItem
              src='images/img-9.jpg'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sint iure iusto itaque, vitae eum voluptas rem ex? Voluptas amet natus expedita aut ratione vitae assumenda laboriosam ad distinctio nam.'
              label='Get Started'
              path=''
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;