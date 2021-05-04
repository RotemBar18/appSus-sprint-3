const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { AppHeader } from './cmps/AppHeader.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { AppKeep } from './apps/Keeps/App.jsx'
import { AppBook } from './apps/Books/pages/BookApp.jsx'
import { AppEmail } from './apps/Emails/App.jsx'

function Home() {
    return <section>
        <h1>Home appSus</h1>
       
    </section>
}

export function App() {
    return (
        <Router>
            <header>
                <AppHeader/>
            </header>
            <main>
                <Switch>
                
                    {/* <Route component={AppKeep} path="/missKeep" /> */}
                    {/* <Route component={MisterEmail} path="/misterEmail" /> */}
                    <Route component={AppBook} path="/missBook" />
                    {/* <Route component={AboutUs} path="/about" /> */}
                    <Route component={Home} path="/" />
                </Switch>
            </main>

        </Router>
    )
}


