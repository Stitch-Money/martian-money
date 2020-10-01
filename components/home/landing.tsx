import React from 'react';
import ApplyButton from 'components/apply-button/apply-button';

export default function Landing() {
    return (
        <section className="hero">
            <div>
                <img className='dome' src='images/dome.svg' alt=''/>
            </div>
            <div className="hero-body">
                <div className="column">
                    <div className="level-item is-center">
                        <ApplyButton />
                    </div>
                </div>
            </div>
        </section>
    );
}
