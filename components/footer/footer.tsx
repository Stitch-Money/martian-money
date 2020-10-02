import React from 'react';

export default function Footer(props: { onReadMoreClick: () => void }): JSX.Element {
    return (
        <footer className={'footer stitch-footer'}>
            <div className="content has-text-centered">
                <div className='columns is-mobile'>
                    <div className='column is-2-desktop is-offset-4-desktop has-text-right has-text-grey'>
                        A <strong className="has-text-grey">demo</strong> by Stitch
                    </div>
                    <div className='column is-2-desktop has-text-left stitch-footer-text-subtle'>
                        <a className='stitch-footer-text-orange' href="#" onClick={props.onReadMoreClick}>
                            Learn more
                        </a> | <a className='stitch-footer-text-orange' href="https://github.com/Stitch-Money/Mars-Capital">
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
