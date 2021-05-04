
const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM
import { BookApp } from './pages/BookApp.jsx'
import { BookDeatails } from './pages/BookDeatails.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { AddBook } from './cmps/AddBook.jsx'


function Home(){
    return <section className="home">
        <h1>Home</h1>
        <p>Check out our awesome <Link to="/book">books</Link> </p>
    </section>
}

export function App(){
    return(
        <Router>
            <header>
                <AppHeader />
            </header>
            <main>
                <Switch>
                    <Route component={AddBook} path="/book/addBook" />
                    <Route component={BookDeatails} path="/book/:bookId" />
                    <Route component={BookApp} path="/book" />
                    <Route component={AboutUs} path="/about" />
                    <Route component={Home} path="/" />
                </Switch>
            </main>
            <footer>
                coffeerights &copy;
            </footer>
        </Router>
    )
}


