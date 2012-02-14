#Node JSON Rest Client

##Status
  Don't use it yet... soon very soon.

##install
  ```npm install```

##Usage
```
  Rest Client for JSON.
Usage: node ./client.js

Options:
  --uri, -u      The URL to make request to                                                             [required]
  --help         This helpful message.                                                                
  --verbose, -v  How verbose to be use multiple times to increase verbosity                             [boolean]
  --data         data to send with request in dot notation --data.stuff.cool=true --data.stuff.other=1
  --method       GET/POST/PUT/DELETE/HEAD                                                               [default: "GET"]

Missing required arguments: uri
```

It can read enviromental defaults for uri,verbose,data,method
```
export JSON_REST_URI=http://someuri:3000/
export JSON_REST_VERBOSE=1
export JSON_REST_DATA="data.something=1"
```

