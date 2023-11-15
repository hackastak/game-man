import './menu-styles.css'

const Menu = () => {

  return (
    <>
      <div className="menu-page">
        <div className="menu-container">
          <h1>Dog Feeder</h1>
          <div className="menu-links">
            <a href="/game">New Game</a>
            <a href="/options">Options</a>
            <a href="/about">About</a>
          </div>
        </div>
      </div>
    </>

  )
}

export default Menu
