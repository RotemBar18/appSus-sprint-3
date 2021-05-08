
const { Link } = ReactRouterDOM

export class Home extends React.Component {

  render() {

    return (
      <section className="home-page">
          <Link className="email-app-link" to='/misterEmail'>
            Click here to join our 10,000+ users and start your First organised E-mail.
            <img className='email-bg-image' src="./assets/img/email-homepage.png" alt="" />
          </Link>
          <hr/>
          <Link className="keep-app-link" to='/missKeep'>
            Try now our notes feature, It's waiting for you only One click away! 
          <img className='keep-bg-image' src="./assets/img/notes-homepage.jpg" alt="" />
          </Link>
      </section>
    )
  }
}


