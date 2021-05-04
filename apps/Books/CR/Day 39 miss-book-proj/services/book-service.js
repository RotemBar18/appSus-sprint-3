import { gBooksData } from '../data/books.js'
export const bookService = {
    query,
    getBookById,
    addReview,
    removeReviewById
}

function query(filterBy) {
    //axious.get('....').then(gBoobksData=>{}).....
    _updateCurrSymbol(gBooksData)
    if (filterBy) {
        var { title, maxPrice, minPrice } = filterBy
        maxPrice = maxPrice ? maxPrice : Infinity
        minPrice = minPrice ? minPrice : 0
        const filteredBooks = gBooksData.filter(book => {
            return (
                book.title.includes(title) &&
                book.listPrice.amount > minPrice &&
                book.listPrice.amount < maxPrice
            )
        })
        return Promise.resolve(filteredBooks)
    }
    return Promise.resolve(gBooksData)
}

function getBookById(bookId) {
    return Promise.resolve(gBooksData.find(book => book.id === bookId))
}
function removeReviewById(book, reviewId) {
    const reviewIdx = book.reviews.findIndex(review => reviewId === review.id)
    book.reviews.splice(reviewIdx, 1)
    return Promise.resolve()

}
function addReview(bookId, review) {
    const book = gBooksData.find(book => book.id === bookId)
    if (!book) return Promise.reject('No Book Id Found in add Review Func')
    if (!book.reviews) book.reviews = []
    book.reviews.push(review)
    return Promise.resolve()
}

function _updateCurrSymbol(books) {
    books.forEach(book => {
        switch (book.listPrice.currencyCode) {
            case 'ILS': book.listPrice.currencySymbol = '₪'
                break;
            case 'USD': book.listPrice.currencySymbol = '$'
                break;
            default: book.listPrice.currencySymbol = '€'
        }
    });
}