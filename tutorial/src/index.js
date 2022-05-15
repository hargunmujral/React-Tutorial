import React from 'react';
import ReactDOM from 'react-dom';

// stateless functional component
// always return JSX

function BookList(){
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title />
      <Author />
    </article>
  )
};
const Image = () => 
  <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1427068429l/23346740.jpg" alt="Sapiens" />

const Title = () => <h1>Sapiens: A Brief History of Humankind </h1>
const Author = () => <h2>Yuval Noah Harari</h2>

ReactDOM.render(<BookList/>, document.getElementById('root'));
