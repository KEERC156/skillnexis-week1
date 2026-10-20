function Header({ title, subtitle, links = [] }) {
  return (
    <header className="site-header" id="top">
      <a className="site-title" href="#top">
        {title}
        <span>{subtitle}</span>
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>
    </header>
  )
}

export default Header