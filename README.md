![Mars Financial](https://martian.money/images/mars-logo.svg)

https://martian.money

**Providing the financial services you'll need for your new Martian life!**

Well, not really.  This is a showcase of what the Stitch platform can provide.

## Running the sample

* Clone the repository
* Run `npm install` followed by`npm run dev` to run the project

### Environment Variables

To make configuration easy, this project uses environment variables.  Before you'll be able to run the code locally, these 
variables need to be updated.  Simply rename the file `.env.local.example` as `.env.local`, then replace the values within 
there with your test client ID and test secret.

| Environment Variable Name      | Usage                                                     |
|--------------------------------|-----------------------------------------------------------|
| NEXT_PUBLIC_CLIENT_ID          | Your Stitch production client ID.                         |
| NEXT_PUBLIC_CLIENT_SECRET      | Your Stitch production client's secret.                   |
| NEXT_PUBLIC_TEST_CLIENT_ID     | Your Stitch test client's ID (always starts with `test-`. |
| NEXT_PUBLIC_TEST_CLIENT_SECRET | Your Stitch production client's secret.                   |


Note: 
Only the demo login will work on your machine. If you would like to use real bank logins, you need to first create a client by contacting us.

## Get your own Stitch client
Reach out to us at ✉️ info@stitch.money. We'd love to hear from you!

## Read the Stitch docs
Our API and integration documentation can be found at https://stitch.money/docs

## Play around
Skip the reading and jump right into making some API calls by playing around in our IDE at https://stitch.money/ide. Click `Add Credential` in the top banner to connect a test user.

