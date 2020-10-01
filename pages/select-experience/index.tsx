import React from 'react';
// import { getStitchAuthorizationCodeUrl } from '../../integrations/stitch/authorize-user';
// import useSWR from 'swr/esm/use-swr';
export default function SelectExperiencePage(): JSX.Element {
    // const clientData = useSWR('stitchUrl', getStitchAuthorizationCodeUrl);
    // const testClientData = useSWR('stitchUrl', getStitchAuthorizationCodeUrl);

    return (
        <section className="section">
            <div className="container">
                <div className="content">
                    <a href="/" className="delete is-pulled-right" /><br/>

                    <h3 className="title is-4 has-text-centered">Select your preferred method to apply for you fake dome-loan.</h3>

                </div>

                <div className="buttons is-centered">
                    <button className="button is-primary is-half">Apply with demo info</button>
                    <button className="button is-info is-half">Apply with my info</button>
                </div>
            </div>
            <div className="container">
                <div className="content">
                    <p>100% safe and you will not debit any real money when you apply for your fake dome-loan on Mars.</p>
                </div>
                <div className="content is-small">
                    <p>Once you select your preferred experience you will go through a demo experience to apply for a FAKE “Dome-Loan” for a Dome Home on Mars.
                        Once complete you will see a results page of whether you were FAKE successful/unsuccessful and how Stitch was able to determine this.</p>
                </div>
            </div>
        </section>
    );
}
