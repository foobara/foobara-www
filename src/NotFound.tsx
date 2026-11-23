import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './Contact.css'

function NotFound() {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Page Not Found - Foobara</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1 className="contact-header">Page Not Found</h1>

      <div className="contact-card">
        <div className="contact-info">
          <h3>There&apos;s nothing at this address.</h3>
          <div className="contact-links">
            <Link to="/">Go to the Foobara homepage</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
