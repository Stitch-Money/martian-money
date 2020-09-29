import React from 'react';
import { siteName } from '../layout';

export default function Footer() {
    return (
        <footer className={'footer'}>
            <div className="content has-text-centered">
                <p>
                    <strong>{siteName} Demo</strong> by <a href="https://stitch.money/">Stitch</a>.
                    The source code is <a href="http://opensource.org/licenses/mit-license.php">MIT</a> licensed.
                </p>
            </div>
        </footer>
    );
}
