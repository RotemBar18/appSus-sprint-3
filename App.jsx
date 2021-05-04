const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { AppHeader } from './cmps/AppHeader.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { KeepApp } from './apps/Keeps/KeepApp.jsx'
import { BookApp } from './apps/Books/BookApp.jsx'
// import { AppEmail } from './apps/Emails/cmps/EmailsApp.jsx'

function Home() {
    return <section>
        <h1>Home appSus</h1>

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
                    <Route component={KeepApp} path="/missKeep" />
                    {/* <Route component={AppEmail} path="/misterEmail" /> */}
                    {/* <Route component={AppBook} path="/missBook" /> */}
                    {/* <Route component={AboutUs} path="/about" /> */}
                    <Route component={Home} path="/" />
                </Switch>
            </main>

        </Router>
    )
}


