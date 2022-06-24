const newman = require('newman');

newman.run({
   collection: require('./DmoneyCollection.json'), //
   //environment: require('./collection/customer_api_env.json'), // pointing
   iterationCount: 1,
   reporters: 'htmlextra',
   reporter: {
       htmlextra: {
         export: './Reports/report.html', // If not specified, the file
        }
    }
}, function (err) {
if (err) { throw err; }
console.log('collection run complete!');
});