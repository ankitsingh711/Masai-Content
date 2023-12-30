export default function BookCard({book}) {
  return (
    <div data-testid='book-card'>
        <img src={book.image} alt={book.title } />
        <b><div data-testid='book-card-title'>{}<span>({book.title})</span></div></b>
        <div data-testid='book-card-author'>{book.author}</div>
        <div data-testid='book-card-price'>{book.price}</div>
    </div>
  )
}

