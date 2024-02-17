import "./App.css";
import { BsBellFill } from "react-icons/bs";

function App() {

  return (
    <div className="settings-container">
      <div className="sidebar-container">
        <ul>
          <li>
            <p className="logo">Logo</p>
          </li>
          <li>
            <a href="#settings">Dashboard</a>
          </li>
          <li>
            <a href="#settings">Wallet</a>
          </li>
          <li>
            <a href="#settings">Profile</a>
          </li>
          <li>
            <a href="#settings">Market</a>
          </li>
          <li>
            <a href="#settings">Settings</a>
          </li>
        </ul>
      </div>
      <div className="main-container">

        <div className="user-container">
          <div className="avatar-container">
            <img src="https://www.profilebakery.com/wp-content/uploads/2023/03/AI-Profile-Picture.jpg" alt="user-image" className="avatar-image" />
            <div className="avatar-container-details">
              <p className="avatar-username">Jim Leston</p>
              <small>UserId: 95884</small>
              <p>Take a look at your dashboard</p>
            </div>
          </div>

          <div className="user-container-actions">
            <p className="notification-icon"><BsBellFill /></p>
          </div>

        </div>

        <div className="balance-container">
          <h3>Balance</h3>
          <p>$12,450</p>
        </div>

        <div className="coin-prices-container">

          <div className="coin-price-container">
            <div className="coin-price-container-avatar">
              <img src="https://s3.coinmarketcap.com/static/img/portraits/630c5fcaf8184351dc5c6ee5.png" alt="coin-image" className="coin-price-container-avatar-img" />
              <div className="coin-price-container-avatar-details">
                <p className="coin-price-container-avatar-name">Litecoin</p>
                <p className="coin-price-container-avatar-abr">BTC</p>
              </div>
            </div>
            <div className="coin-price-container-details">

              <p className="coin-price-container-details-price">$69.33</p>
            </div>
          </div>

          <div className="coin-price-container">
            <div className="coin-price-container-avatar">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" alt="coin-image" className="coin-price-container-avatar-img" />
              <div className="coin-price-container-avatar-details">
                <p className="coin-price-container-avatar-name">Bitcoin</p>
                <p className="coin-price-container-avatar-abr">BTC</p>
              </div>
            </div>
            <div className="coin-price-container-details">

              <p className="coin-price-container-details-price">$52,450</p>
            </div>
          </div>

          <div className="coin-price-container">
            <div className="coin-price-container-avatar">
              <img src="https://cdn.decrypt.co/wp-content/uploads/2019/03/ethereum.png" alt="coin-image" className="coin-price-container-avatar-img" />
              <div className="coin-price-container-avatar-details">
                <p className="coin-price-container-avatar-name">Etheruem</p>
                <p className="coin-price-container-avatar-abr">BTC</p>
              </div>
            </div>
            <div className="coin-price-container-details">

              <p className="coin-price-container-details-price">$2,749.98</p>
            </div>
          </div>
        </div>
        <div className="market-container">
          <div className="market-container-title">
            <h3>Market history</h3>
            <div className="market-container-title-time">
              <p>1H</p>
              <p>1D</p>
              <p>1W</p>
              <p>1Y</p>
            </div>
          </div>
        </div>
      </div>

      <div className="right-side-nav">
        <ul>
          <li>
            <a href="#settings">Dashboard</a>
          </li>
          <li>
            <a href="#settings">Wallet</a>
          </li>
          <li>
            <a href="#settings">Profile</a>
          </li>
          <li>
            <a href="#settings">Market</a>
          </li>
          <li>
            <a href="#settings">Settings</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
