# Node API Proxy Server

## Purpose
To aid in the educational use of APIs by frontend-only applications. This helps accomplish this by serving as a proxy server to those frontends in order to comply with CORS policies of Third Party APIs.

## Deployment
Currently deployed on a Linode nanode instance. OS is Ubuntu 22 LTS. Updated packages with `sudo apt update` and installed node and npm with `sudo apt install nodejs npm`.

## Usage
Clone the repository, `npm install` dependencies. Set environment variables in `.env` file. `npm start` to run the server. Make fetch requests to server endpoint with query params  (api key doesn't need to be provided by client because the proxy should provide it).

## Resources
This is largely based on Traversy Media's proxy server project detailed in this [YouTube tutorial](https://www.youtube.com/watch?v=ZGymN8aFsv4)

