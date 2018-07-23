# ams-parse [![Build Status](https://travis-ci.org/MarkNjunge/ams-parse.svg?branch=master)](https://travis-ci.org/MarkNjunge/ams-parse)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMarkNjunge%2Fams-parse.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FMarkNjunge%2Fams-parse?ref=badge_shield)

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
2.  Create a .env file similar to [.env.sample](./.env.sample)

- The .env file is not required if arguments are passed via the run command. See usage.
- In development environment, alternative endpoints will need to be provided. See [src/config/index.js](./src/config/index.js)

## Usage

Run using `npm start`.

Alternatively, `yarn start --number=<your_number> --password=<your_password>`

The data will be written to the `output` folder.

## Testing
```
yarn install

yarn test
```

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMarkNjunge%2Fams-parse.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FMarkNjunge%2Fams-parse?ref=badge_large)