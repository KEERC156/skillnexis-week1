import { useMemo, useState } from 'react'
import posts from './data/posts.json'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('All categories')
  const categories = useMemo(
    () => ['All categories', ...new Set(posts.map((post) => post.category))],
    [],
  )
  const normalizedSearch = searchTerm.trim().toLocaleLowerCase()
  const matchingPosts = posts.filter((post) => {
    const matchesCategory = category === 'All categories' || post.category === category
    const searchableText = `${post.title} ${post.category} ${post.author} ${post.description}`.toLocaleLowerCase()
    return matchesCategory && searchableText.includes(normalizedSearch)
  })

  return (
    <div className="blog-app">
      <header className="site-header">
        <a className="wordmark" href="#top">fieldnotes<span>.</span></a>
        <a className="header-link" href="#articles">Explore articles <span aria-hidden="true">↘</span></a>
      </header>
      <main id="top">
        <section className="hero" aria-labelledby="page-title">
          <p className="eyebrow">THE FIELDNOTES JOURNAL</p>
          <h1 id="page-title">Ideas for a<br /><span>curious everyday.</span></h1>
          <p>A sample blog collection about design, technology, and everyday life.</p>
        </section>

        <section id="articles" className="articles-section" aria-labelledby="articles-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">BROWSE THE JOURNAL</p>
              <h2 id="articles-heading">Latest stories</h2>
            </div>
            <p className="results-count" role="status" aria-live="polite">
              {matchingPosts.length} {matchingPosts.length === 1 ? 'article' : 'articles'} found
            </p>
          </div>
          <form className="filters" role="search" onSubmit={(event) => event.preventDefault()}>
            <div className="search-field">
              <label htmlFor="post-search">Search articles</label>
              <input
                id="post-search"
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search title, author, category..."
              />
            </div>
            <div className="category-field">
              <label htmlFor="category-filter">Category</label>
              <select
                id="category-filter"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                {categories.map((option) => <option key={option}>{option}</option>)}
              </select>
            </div>
          </form>

          {matchingPosts.length > 0 ? (
            <div className="post-grid">
              {matchingPosts.map((post) => (
                <article className="post-card" key={post.id}>
                  <span className="post-category">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p className="post-description">{post.description}</p>
                  <p className="post-author">By {post.author}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span aria-hidden="true">⌕</span>
              <h3>No matching articles</h3>
              <p>Try another search term or choose a different category.</p>
            </div>
          )}
        </section>
      </main>
      <footer className="site-footer"><p>Fieldnotes · Sample blog UI exercise</p></footer>
    </div>
  )
}

export default App
