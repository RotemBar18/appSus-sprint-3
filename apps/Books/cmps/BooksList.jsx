import { BookPreview } from './BookPreview.jsx'
export function BooksList({ books }) {
    return (
        <div className="books-list">
            {books.map(book => <BookPreview book={book} key={book.id} />)}
        </div>
    )
}