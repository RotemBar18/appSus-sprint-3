const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { AppHeader } from './cmps/AppHeader.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { mailDeatails } from './apps/Emails/pages/mailDeatails.jsx'
import { AppEmail } from './apps/Emails/MailsApp.jsx'
import { KeepApp } from './apps/Keeps/KeepApp.jsx'
import { BookApp } from './apps/Books/BookApp.jsx'
import { Home } from './cmps/Home.jsx'



export function App() {
    return (
        <Router>
            <header>
                <AppHeader />
            </header>
            <main>
                <Switch>
                <Route component={mailDeatails} path="/misterEmail/:mailId"/>
                    <Route component={AppEmail} path="/misterEmail" />
                    <Route component={KeepApp} path="/missKeep" />
                    {/* <Route component={AppBook} path="/missBook" /> */}
                    <Route component={AboutUs} path="/about" />
                    <Route component={Home} path="/" />
                </Switch>
            </main>

        </Router>
    )
}


