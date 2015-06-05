'use strict';
var debug = require('debug')('tracker:models:talk');

module.exports = function(Talk) {
    
    Talk.beforeRemote('create', function addSpeaker(ctx, instance, next) {
        var userId = ctx.req.accessToken && ctx.req.accessToken.userId;
        
        if (!userId) {
            if (process.env.NODE_ENV === 'development') {
                userId = ctx.req.body.speakerId || 1;
            } else {
                return next(new Error('No user data present on Talk creation'));
            }
        }
        
        debug('Attempting to create new Talk by Speaker ' + userId + ': ' + ctx.req.body.title);
        ctx.req.body.speakerId = userId;
        
        next();
    });
    
};
