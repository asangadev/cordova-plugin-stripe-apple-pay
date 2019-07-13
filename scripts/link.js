var exec = require('child_process').exec
var path = require('path')
function puts(error, stdout, stderr) { console.log(stdout) }
exec('ln -s Versions/Current/Headers ./src/ios/libs/Stripe.framework/Headers', puts)
exec('ln -s Versions/Current/Modules ./src/ios/libs/Stripe.framework/Modules', puts)
exec('ln -s Versions/Current/Stripe ./src/ios/libs/Stripe.framework/Stripe', puts)
exec('ln -s A ./src/ios/libs/Stripe.framework/Versions/Current', puts)
