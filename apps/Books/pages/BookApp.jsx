import { bookService } from '../services/book-service.js'
import { BooksList } from '../cmps/BooksList.jsx'
import { BookDeatails } from './BookDeatails.jsx'
import { BooksFilter } from '../cmps/BooksFilter.jsx'

export class BookApp extends React.Component {
    state = {
        books: null,
        filterBy: null,
        selectedBook: null
    }
    componentDidMount() {
        this.loadBooks()
    }

    loadBooks() {
        bookService.query(this.state.filterBy)
            .then((books) => {
                this.setState({ books })
            })
    }

    setSelectedBook = (book) => {
        this.setState({ selectedBook: book })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadBooks)
    }
    render() {
        const { books, selectedBook } = this.state
        if (!books) return <div>Loading...</div>
        return (
            <section className="book-app">
                <h2>My Books Shop</h2>
                {!selectedBook && <React.Fragment>
                    <BooksFilter onSetFilter={this.onSetFilter} />
                    <BooksList books={books} setSelectedBook={this.setSelectedBook} />
                </React.Fragment>}
                {selectedBook &&
                    <BookDeatails book={selectedBook} goBack={() => this.setSelectedBook(null)} />}
            </section>
        )
    }
}