const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { AppHeader } from './cmps/AppHeader.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { mailDetails } from './apps/Emails/pages/mailDetails.jsx'
import { EmailApp } from './apps/Emails/MailsApp.jsx'
import { KeepApp } from './apps/Keeps/KeepApp.jsx'
import { BookApp } from './apps/Books/BookApp.jsx'
import { BookDeatails } from './apps/Books/pages/BookDeatails.jsx'
import { Home } from './cmps/Home.jsx'



export function App() {
    return (
        <Router>
            <header>
                <AppHeader />
            </header>
            <main>
                <Switch>
                    <Route component={mailDetails} path="/misterEmail/:mailId" />
                    <Route component={BookDeatails} path="/book/:bookId" />
                    <Route component={EmailApp} path="/misterEmail" />
                    <Route component={KeepApp} path="/missKeep" />
                    <Route component={BookApp} path="/missBook" />
                    <Route component={AboutUs} path="/about" />
                    <Route component={Home} path="/" />
                </Switch>
            </main>

        </Router>
    )
}


