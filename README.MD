# ams-parse

Extracts data from Strathmore's AMS student's module using [Puppeteer](https://github.com/GoogleChrome/puppeteer) and [Cheerio](https://github.com/cheeriojs/cheerio).

Currently supports:

- Attendance
- Dashboard
- My details
- Fees Statement
- Progress report

**NB**: Requires you to have access to the student's portal via a browser.

## Installation

1.  Clone the repository and install the dependencies using yarn (or npm)
2.  Create a .env file similar matching .env.sample

- In development environment, alternative endpoints will need to be provided. See [src/config/index.js](./src/config/index.js)

## Usage

Run using `npm start`.

The data will be written to `output.json`.