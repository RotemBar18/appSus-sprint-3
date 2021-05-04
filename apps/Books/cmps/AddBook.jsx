import { bookService } from '../services/book-service.js'
import { GoogleBookPreview } from './GoogleBookPreview.jsx'
export class AddBook extends React.Component {

    state = {
        books: [],
        filterBy: ''
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks() {
        bookService.queryGoogle(this.state.filterBy)
            .then((books) => {
                books = books.slice(0,5);
                this.setState({ books })
            })
    }

    handleChange = (ev) => {
        const value = ev.target.value.toLowerCase()
        const field = ev.target.name
        this.setState({ ...this.state, [field]: value }, this.loadBooks)
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.setState({ filterBy }, this.loadBooks)
    }

    addBook = (bookId) => {
        bookService.addBookfromGoogle(bookId).then(
            Swal.fire(
                'Your book has been saved',
              )
        )
    }

    checkIfBookFound() {
        const { books} = this.state
        if (!books) return <p>The book was not found...</p>
        return books.map(book => <GoogleBookPreview book={book} key={book.id} addBook={this.addBook} />) 
    }

    render() {
        const { books, filterBy } = this.state
        return (
            <section>
                <form className="book-filter" onSubmit={this.onFilter}>
                    <label htmlFor="byName"></label>
                    <input type="text" id="byName`" name="filterBy" value={filterBy} placeholder="Search book name..." onChange={this.handleChange} />
                    <button>Filter</button>
                </form>
                <ul className="google-books-list clean-list">
                    {this.checkIfBookFound()}
                </ul>
            </section>
        )
    }
}