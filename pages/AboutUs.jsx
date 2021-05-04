const { NavLink, Route, Switch } = ReactRouterDOM
function AboutTeam() {
  return (
    <div>
      <h4>The Team</h4>
      <img src="" />
      <ol>
        <li>Rotem Bar</li>
        <li>Esco Bar</li>
      </ol>
    </div>
  )
}
function AboutVision() {
  return (
    <div>
      <h4>Our Vision</h4>
      <ul>
        <li>Sell books</li>
        <li>Eat snacks</li>
        <li>Reading our books while eating snacks</li>
      </ul>
    </div>
  )
}

export function AboutUs(props) {
  return <section>
    <h2>About Us</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est laudantium earum veniam in aspernatur nam fuga tempore! Doloribus, possimus nesciunt.</p>

    <nav>
      <NavLink to="/about/team">Team</NavLink>
      <NavLink to="/about/vision">Vision</NavLink>
    </nav>

    <Switch>
      <Route component={AboutTeam} path="/about/team" />
      <Route component={AboutVision} path="/about/vision" />
    </Switch>
  </section>
}