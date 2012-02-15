#Node JSON Rest Command Line Client
This is just a little wrapper thing for making json rest calls.   It is meant to be a little  more convienent than
plain curl, while sacrificing all power.  Just a little helper to help me through the day.

##Status
  Works for me.   Let me know if you find anything.   There really isn't much to it, thanks to the excellent optimist and 
  request libraries.   

##install
 You know the drill.
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
  --method, -m       GET/POST/PUT/DELETE/HEAD                                                               [default: "GET"]

```

It can read enviromental defaults for uri,verbose,data,method
```
export JSON_REST_URI=http://someuri:3000/
export JSON_REST_VERBOSE=1
export JSON_REST_DATA="data.something=1"
```

