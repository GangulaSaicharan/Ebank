import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <div className="home-bg-container">
      <Header />
      <div className="home-card-container">
        <h1 className="home-card-heading">Your Flexibility, Our Excellence</h1>
        <img
          className="home-card-image"
          alt="digital card"
          src="
        https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        />
      </div>
    </div>
  </>
)

export default Home
