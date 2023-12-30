import React, { useState } from "react";
import Fiction from './components/Fiction';
import NonFiction from './components/NonFiction';
import BookCard from './components/BookCard';
import fictionBooks from './fiction.json';
import nonFictionBooks from './nonfiction.json';
import styles from './App.module.css';

function App() {
  const [section, setSection] = useState('fiction');
  const toggleSection = () => {
    setSection(section === 'fiction' ? 'non-fiction' : 'fiction');
  };
  const bookCards = section === 'fiction' ?
    fictionBooks.map((book, index) => <BookCard key={index} book={book} />) :
    nonFictionBooks.map((book, index) => <BookCard key={index} book={book} />);
  return (
    <div className={styles.app}>
      <h1 data-testid="books-container-title">{section === 'fiction' ? 'Fictional Books' : 'Non-Fiction Books'}</h1>
      <button data-testid="toggle-btn" onClick={toggleSection}>
        {section === 'fiction' ? 'Show Non-Fiction Books' : 'Show Fictional Books'}
      </button>
      <div className={styles.bookCardsContainer}>
        {section === 'fiction' ? <Fiction /> : <NonFiction />}
        {bookCards}
      </div>
    </div>
  );
}

export default App;
