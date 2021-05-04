const { Link, Route } = ReactRouterDOM
import { bookService } from '../services/book-service.js'
import { ReadMoreReadLess } from '../cmps/ReadMoreReadLess.jsx'
import { ReviewAdd } from '../cmps/ReviewAdd.jsx'
import { ReviewsList } from '../cmps/ReviewsList.jsx'

export class BookDeatails extends React.Component {
    state = {
        book: null,
        reviews: []
    }

    componentDidMount() {
        this.loadBook()
    }

    loadBook() {
        const id = this.props.match.params.bookId;
        bookService.getBookById(id).then(book => {
            if (!book) return this.state.history.push('/')
            this.setState({ book })
        })
    }

    onAddReview = (review) => {
        const reviews = bookService.addReview(this.state.book.id, review.rate, review.txt)
        this.setState({ reviews: reviews }, this.loadReview)
    }

    getBookReadingLevel() {
        const { pageCount } = this.state;
        if (pageCount > 500) return 'long reading'
        if (pageCount > 200) return 'decent reading'
        else return 'light reading';
    }

    getBookVeteran() {
        const { publishedDate } = this.state.book;
        const currDate = new Date;
        const currYear = currDate.getFullYear();
        if (currYear - publishedDate > 10) return 'veteran book';
        else if (currYear - publishedDate > 10) return 'new!';
        else return '';
    }

    setClassNameBasedPrice() {
        const { amount } = this.state.book.listPrice;
        if (amount > 150) return 'red';
        if (amount < 20) return 'green';
        else return '';
    }

    isOnSale() {
        const { isOnSale } = this.state.book.listPrice;
        if (isOnSale) return <span className="on-sale"> on sale!</span>
    }

    currencySymbol(currency) {
        const currencies = {
            EUR: '€',
            ILS: '₪',
            USD: '$'
        }
        return currencies[currency]
    }

    onRemoveReview = (reviewId) => {
        bookService.removeReviewById(this.state.book, reviewId).then(() => this.loadBook())
    }

    render() {
        const { book, reviews } = this.state
        if (!book) return <div>Loading...</div>
        const { title, authors, description, language, pageCount, publishedDate, subtitle, thumbnail } = book
        const { amount, currencyCode } = book.listPrice;

        return (
            <section >
                <div className="book-details">
                    <img src={thumbnail} />
                    <div className="main-details-container">
                        <h2>{title}</h2>
                        <h4>by {authors}</h4>
                        <div className="book-desc">
                            <p>{publishedDate} {this.getBookVeteran()}</p>
                            <p>{subtitle}</p>
                            <ReadMoreReadLess text={book.description} />
                            <p>language: {language}</p>
                            <p>{pageCount} pages, {this.getBookReadingLevel()}</p>
                            <p>price: {this.currencySymbol(currencyCode)}{amount}{this.isOnSale()}</p>
                            <div className="book-review">
                                {reviews ? reviews.map(review => <p key={review.id}>{review.txt} Rate: {review.rate}</p>) : ''}
                            </div>

                            <button className="go-back" onClick={() => this.props.history.push('/book')} >Go back</button>
                        </div>
                    </div>
                </div>
                <Route component={ReviewAdd} path="/book/:bookId/add-review" />
                <Link className="btn-add-review" to={`/book/${book.id}/add-review`}>Add Review</Link>
                <ReviewsList reviews={book.reviews} removeReview={this.onRemoveReview} />
            </section>
        )
    }
}