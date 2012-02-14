module.exports =
    function(argv) {
    var request = require('request');
    var optimist = require('optimist')
        .usage('Rest Client for JSON.\nUsage: $0')
        .options('uri', {
            alias : 'u',
            short :'u',
            demand:true,
            default :process.env['JSON_REST_URI'],
            description:'The URL to make request to'
        })
        .options('help',{
            short :'h',
            description:'This helpful message.'
        })
        .options('verbose', {
            short :'v',
            alias :'v',
            boolean:true,
            description:'How verbose to be use multiple times to increase verbosity',
            duplicates:true,
            default:process.env['JSON_REST_VERBOSE']
        })
        .options('data', {
            description:'data to send with request in dot notation --data.stuff.cool=true --data.stuff.other=1',
            default:process.env["JSON_REST_DATA"]
        })
        .options('method',{
            short:'m',
            description:'GET/POST/PUT/DELETE/HEAD',
            default:process.env["JSON_REST_TYPE"] || 'GET'
        })
    ;
    var argv = optimist.argv;
    if (argv.h)
        optimist.showHelp();

    console.log('args',argv);
    request({
        method:argv.method,
        uri:argv.uri,
        json:argv.data
    }, function(err, response, body){
       if (err)
        return console.error(err);

       console.log(body);
    });
//
//    request[argv.type]({
//
//    })

}