import React from 'react';

export default function Footer() {
    return (
        <footer className={'footer stitch-footer'}>
            <div className="content has-text-centered">
                <div className='columns'>
                    <div className='column is-2 is-offset-4 stitch-footer-text-subtle has-text-right'>
                        A <strong className='stitch-footer-text-subtle'>demo</strong> by Stitch
                    </div>
                    <div className='column is-2 has-text-left'>
                        <a href="">Learn more</a> | <a href="">Github</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
