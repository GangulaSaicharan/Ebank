import './index.css'

const NotFound = () => (
  <>
    <div className="not-found-card">
      <img
        className="not-found-image"
        src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
        alt="not found"
      />
      <h1 className="not-found-heading">Page Not found</h1>
      <p className="not-found-info">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </>
)

export default NotFound
