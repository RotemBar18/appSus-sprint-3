const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM
import { CarApp } from './pages/CarApp.jsx'
import { CarDetails } from './pages/CarDetails.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { CarEdit } from './pages/CarEdit.jsx'

function Home() {
    return <section>
        <h1>Home</h1>
        <p>Check out our awesome <Link to="/car">cars</Link> </p>
    </section>
}

export function App() {
    return (
        <Router>
            <header>
                <AppHeader />
            </header>
            <main>
                <Switch>
                    <Route component={CarEdit} path="/car/edit/:carId?" />
                    <Route component={CarDetails} path="/car/:carId" />
                    <Route component={CarApp} path="/car" />
                    <Route component={AboutUs} path="/about" />
                    {/* If we want to send props to a route: */}
                    {/* <Route render={(props)=> <AboutUs {...props} name="popo"/>} path="/about" /> */}
                    <Route component={Home} path="/" />
                </Switch>
            </main>
            <footer>
                coffeerights &copy;
            </footer>
        </Router>
    )
}


