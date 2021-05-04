
export function GoogleBookPreview({ book, addBook }) {
    return (
        <li className="google-book-preview">
            <p className="book-title">{book.volumeInfo.title}
            <button className="btn-add" onClick={() => addBook(book.id)}>+</button></p>
        </li>
    )
}
