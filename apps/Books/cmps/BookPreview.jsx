const { Link } = ReactRouterDOM

export function BookPreview({ book }) {

    function currencySymbol(currency) {
        const currencies = {
            EUR: '€',
            ILS: '₪',
            USD: '$'
        }
        return currencies[currency]
    }

    return (
        <Link to={`/book/${book.id}`}>
            <article className="book-preview">
                <img src={book.thumbnail} alt="" />
                <p className="book-title">{book.title}</p>
                <p className="book-price">{currencySymbol(book.listPrice.currencyCode)}  {' ' + book.listPrice.amount}</p>                   
            </article>
        </Link>
    )
}