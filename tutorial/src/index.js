import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// setup vars
const firstBook = {
  img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1427068429l/23346740.jpg',
  title: 'Sapiens: A Brief History of Humankind',
  author: 'Yuval Noah Harari'
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg',
  title: '1984',
  author: 'George Orwell'
}

function BookList(){
  return (
    <section className='booklist'>
      <Book img={firstBook.img} 
        title={firstBook.title}  
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Laudantium sed voluptas delectus doloremque 
          saepe rem aut quo harum, deserunt consequatur.
        </p>
      </Book>
      <Book img={secondBook.img} 
        title={secondBook.title}  
        author={secondBook.author}
        />    
      </section>
  ); 
}

const Book = ({img, title, author, children}) => {
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  );
};

ReactDOM.render(<BookList/>, document.getElementById('root'));
