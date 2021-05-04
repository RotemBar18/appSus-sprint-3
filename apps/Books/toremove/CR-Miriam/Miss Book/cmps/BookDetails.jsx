import { getCurrencyIcon } from "../common/common.js";
import { LongTxt } from "./LongTxt.jsx";

export function BookDetails({ book, goBack }) {

    function getReading(pageCount) {
        if (pageCount > 500) return '(Long Reading)';
        if (pageCount > 200) return '(Decent Reading)';
        if (pageCount < 100) return '(Light Reading)';
        return '';
    }
    
    function getPriceColor(price) {
        if (price > 150) {
            return 'red';
        } else if (price > 20) {
            return 'green';
        }
    }
    
    function getBookAgeDesc(year) {
        let currYear = new Date().getFullYear()
        if (currYear - year > 10) {
            return '(Veteran Book)'
        } else if (currYear - year < 1) {
            return '(New)'
        }
    }

    return (
        <div className="book-details">
            <img src={book.thumbnail} alt="" />
            <p>Title - {book.title}</p>
            <p>Subtitle - {book.subtitle}</p>
            <p>Author - {book.authors.join(',')}</p>
            <p>Publish date - {book.publishedDate} {getBookAgeDesc(book.publishedDate)}</p>
            <LongTxt description={book.description} />
            <p>Page count - {book.pageCount} {getReading(book.pageCount)}</p>
            <p>Cathegories - {book.categories.join(',')}</p>
            <p>Language - {book.language}</p>
            <p>Price - <span className={getPriceColor(book.listPrice.amount)}>{book.listPrice.amount}{getCurrencyIcon(book.listPrice.currencyCode)}</span></p>
            { book.listPrice.isOnSale && 
            <React.Fragment>
                <p className="on-sale">The book is on sale!</p>
            </React.Fragment> }
            <button onClick={goBack}>Go back</button>
        </div>
    )
}

