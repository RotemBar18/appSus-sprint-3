const { Link, Route } = ReactRouterDOM
import { bookService } from '../services/book-service.js'
import { LongTxt } from '../cmps/LongTxt.jsx'
import { ReviewAdd } from '../cmps/ReviewAdd.jsx'
import { ReviewsList } from '../cmps/ReviewsList.jsx'

export class BookDetails extends React.Component {

    state = {
        book: null
    }
    componentDidMount() {
        this.loadBook()
    }

    loadBook() {
        const id = this.props.match.params.bookId
        bookService.getBookById(id).then(book => {
            if (!book) return this.props.history.push('/')
            this.setState({ book })
        })
    }

    get priceClass() {
        const { amount } = this.state.book.listPrice
        if (amount > 150) return 'expensive'
        if (amount < 20) return 'cheap'
    }

    get pagesMessage() {
        const { book } = this.state
        if (book.pageCount < 500 && book.pageCount > 200) return 'Decent Reading'
        if (book.pageCount < 100) return 'Light Reading'
        if (book.pageCount > 500) return 'Long Reading'
    }

    get publishedMsg() {
        const { book } = this.state
        if (new Date().getFullYear() - book.publishedDate > 10) return 'Veteran Book'
        else if (new Date().getFullYear() - book.publishedDate > 10) return 'New!'
    }

    onRemoveReview = (reviewId) => {
        bookService.removeReviewById(this.state.book, reviewId).then(() => this.loadBook())
    }
    render() {
        const { book } = this.state
        if (!book) return <div className="loader">Loading</div>
        return <section className="book-details flex center-margin">
            <div className="main-details-container">
                <img src={book.thumbnail} alt="" />
                <div className="book-features flex">
                    <h2>{book.title}</h2>
                    <div className={`book-details-price ${this.priceClass}`}>
                        {book.listPrice.amount}{book.listPrice.currencySymbol}
                        {book.listPrice.isOnSale && <div className="sale-price">On Sale!</div>}
                    </div>
                    <h4>book Features:</h4>
                    <ul className="book-bullet-points">
                        {this.pagesMessage && <li>Difficulty:{this.pagesMessage}</li>}
                        <li>Length{book.pageCount}</li>
                        {this.publishedMsg && <li>{this.publishedMsg}</li>}
                    </ul>
                    <button className="btn" onClick={() => this.props.history.push('/book')}>Close</button>
                </div>
            </div>
            <div className='book-desc'>
                <h4>Book Description</h4>
                <LongTxt text={book.description} />
            </div>
            <Route component={ReviewAdd} path="/book/:bookId/add-review" />
            <div className="reviews-section flex">
                <h2>Reviews </h2>
                <Link className="btn-add-review" to={`/book/${book.id}/add-review`}>Add Review</Link>
            </div>
            <ReviewsList reviews={book.reviews} removeReview={this.onRemoveReview} />

        </section>

    }

}