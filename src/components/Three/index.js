import React from 'react'

const Three = ({ posts, deletePost }) => {
    return (
        <section id="three">
            <div className="grid grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <article key={index}>
                        <div className="content">
                            <span className="icon fa-laptop" />
                            <header>
                                <h3>{post.title}</h3>
                            </header>
                            <p>{post.desc}</p>
                            <ul className="actions">
                                <li><button onClick={() => deletePost(post.id)}
                                    className="button alt">Delete</button></li>
                            </ul>
                        </div>
                    </article>
                ))}

            </div>
        </section>
    )
}

export default Three
