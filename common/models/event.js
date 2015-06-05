'use strict';
var debug = require('debug')('tracker:models:event');

module.exports = function(Event) {
    
    Event.beforeRemote('create', function addSpeaker(ctx, instance, next) {
        var userId = ctx.req.accessToken && ctx.req.accessToken.userId;
        
        if (!userId) {
            if (process.env.NODE_ENV === 'development') {
                userId = ctx.req.body.speakerId || 1;
            } else {
                return next(new Error('No user data present on Event creation'));
            }
        }
        
        debug('Attempting to create new Event by Speaker ' + userId + ': ' + ctx.req.body.name);
        ctx.req.body.speakerId = userId;
        
        next();
    });
    
};
