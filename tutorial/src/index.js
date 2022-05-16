import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

const books = [
  {
    id: 1,
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1427068429l/23346740.jpg',
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari'
  },

  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg',
    title: '1984',
    author: 'George Orwell'
  },
  {
    id: 3,
    img: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501146305/much-ado-about-nothing-9781501146305_hr.jpg',
    title: 'Much Ado About Nothing',
    author: 'William Shakespeare'
  }
];


function BookList(){
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return (
         <Book key={book.id} {...book}></Book>
        )
      })}
      </section>
  ); 
}

const Book = ({img, title, author}) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('Hello');
  }
  const complexExample = (author) => {
    console.log(author);
  }
  return (
    <article className='book' onMouseOver={() => {
      console.log(author);
    }}>
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <button type='button' onClick={clickHandler}>
        reference example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        more complex example 
      </button>
    </article>
  );
};

ReactDOM.render(<BookList/>, document.getElementById('root'));
