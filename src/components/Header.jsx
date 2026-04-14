export default function Header({ onToggleSidebar }) {
  return (
    <header className="header">
      <button className="hamburger" onClick={onToggleSidebar} aria-label="Menu">
        <span /><span /><span />
      </button>
      <div className="header-logo">
        🏪 <span>Restaurant-cum-Cafe</span>
      </div>
      <div className="header-tagline">Business Plan — East Delhi / NCR</div>
    </header>
  )
}
