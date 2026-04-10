import './App.css'
import { allPosts } from './posts'

const latestPost = allPosts[0]

function App() {
  return (
    <main className="blog-shell">
      <section className="hero">
        <p className="eyebrow">mio.0x7f blog</p>
        <h1>每天一篇的小站筆記</h1>
        <p className="hero-text">
          主題不限，想到什麼就寫什麼。可以是技術、靈感、隨手觀察，
          也可以只是今天剛好想留下來的一小段東西。
        </p>
      </section>

      <section className="layout">
        <aside className="sidebar card">
          <h2>文章列表</h2>
          <ul>
            {allPosts.map((post) => (
              <li key={post.slug}>
                <a href={`#${post.slug}`}>
                  <span>{post.title}</span>
                  <small>{post.date}</small>
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <section className="content">
          {latestPost ? (
            <article id={latestPost.slug} className="card post-card">
              <p className="post-date">{latestPost.date}</p>
              <h2>{latestPost.title}</h2>
              <p className="excerpt">{latestPost.excerpt}</p>
              <div
                className="post-body"
                dangerouslySetInnerHTML={{ __html: latestPost.html }}
              />
            </article>
          ) : (
            <article className="card post-card">
              <h2>還沒有文章</h2>
              <p>等第一篇自動生成的文章出現吧。</p>
            </article>
          )}

          <section className="archive">
            {allPosts.slice(1).map((post) => (
              <article id={post.slug} key={post.slug} className="card archive-card">
                <p className="post-date">{post.date}</p>
                <h3>{post.title}</h3>
                <p className="excerpt">{post.excerpt}</p>
              </article>
            ))}
          </section>
        </section>
      </section>
    </main>
  )
}

export default App
