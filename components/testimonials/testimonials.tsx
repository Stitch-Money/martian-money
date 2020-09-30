import React from 'react';

export default function Testimonials() {
    return (
        <section className="section">
            <div className="container">
                <h2 className="title is-3">Testimonials</h2>

                <article className="media">
                    <figure className="media-left">
                        <p className="image is-64x64">
                            <img src="/images/aria.svg" alt=""/>
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>Aria Mcfarland</strong> <small>@aria_on_mars</small> <small> - 3 days</small>
                                <br/>
                                Applying for a dome loan painless and easy! I was really worried that my immigration was
                                going to be a long process, but with MM all I had to do was link my account and boom! I
                                was pre-approved for a loan on the spot!
                            </p>
                        </div>
                        <nav className="level is-mobile">
                            <div className="level-left">
                                <a className="level-item">
                                    <span className="icon is-small"><i className="fas fa-reply"/></span>
                                </a>
                                <a className="level-item">
                                    <span className="icon is-small"><i className="fas fa-retweet"/></span>
                                </a>
                                <a className="level-item">
                                    <span className="icon is-small"><i className="fas fa-heart"/></span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </article>
            </div>
        </section>
    );
}
