import React from 'react';
import ApplyButton from 'components/apply-button/apply-button';

export default function Landing() {
    return (
        <section className="hero">
            <div className="dome">
                <div className="hero-body">
                    <div className="column">
                        <div className="level-item is-center">
                            <ApplyButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
