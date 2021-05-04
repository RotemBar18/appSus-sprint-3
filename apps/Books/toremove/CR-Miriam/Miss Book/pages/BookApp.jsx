import { bookService } from '../services/book.service.js'
import { BookList } from "../cmps/BookList.jsx";
import { BookFilter } from "../cmps/BookFilter.jsx";
import { BookDetails } from "../cmps/BookDetails.jsx";

export class BookApp extends React.Component {
  state = {
    filter: null,
    books: null,
    selectedBook: null
  }

  componentDidMount() {
    this.loadBooks()
  }

  loadBooks = () => {
    bookService.query(this.state.filter)
            .then((books) => {
                this.setState({ books })
            })
  }

  onSetFilter = (filter) => {
      this.setState({ filter }, this.loadBooks)
    } 

  setSelectedBook = (book) => {
      this.setState({ selectedBook: book })
  }

  goBack = () => {
    this.setState({ selectedBook: null })
  }

  render() {
    const { books, selectedBook } = this.state

    if (!books) return <div>Loading...</div>
    const filter = this.state.filter;

    return (
      <div className='app'>
        <BookFilter filter={filter} onSetFilter={this.onSetFilter}/> 
        <BookList setSelectedBook={this.setSelectedBook} books={books} /> 
        {selectedBook &&
          <BookDetails book={selectedBook} goBack={this.goBack}/>}
      </div>
    )
  }
}