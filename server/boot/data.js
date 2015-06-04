var debug = require('debug')('tracker:dev:models');

module.exports = function prefillData(app) {
    
    if (process.env.NODE_ENV !== 'development') {
        // We only want to pre-fill data in dev
        return;
    }
    
    
    var data = require('../../test/dev-data.js');
    
    for (var model in data) {
        if (app.models[model]) {
            debug('Creating ' + model + ' records...');
            app.models[model].create(data[model], (function(err, records) {
                if (err) {
                    debug('Unable to create dev data:', err);
                    return process.exit(1);
                }
                
                debug('... created ' + records.length + ' ' + this.model + ' records.');
                if (records.length !== data[this.model].length) {
                    debug('WARNING: Incongruent number of ' + this.model + ' records created', records.length, data[this.model].length);
                }
            }).bind({ model: model }));
        }
    }
    
};