import { getCurrencyIcon } from "../common/common.js";

export function BookPreview({ book, setSelectedBook }) {
  return (
    <article className="book-preview" onClick={() => setSelectedBook(book)}>
      <img src={book.thumbnail} alt="" />
      <p>Title - {book.title}</p>
      <p>Price - {book.listPrice.amount}{getCurrencyIcon(book.listPrice.currencyCode)}</p>
    </article>
  )
}

