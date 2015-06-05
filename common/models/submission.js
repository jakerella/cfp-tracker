'use strict';
var debug = require('debug')('tracker:models:submission');

module.exports = function(Submission) {
    
    Submission.validatesPresenceOf('talkId');
    
    Submission.beforeRemote('create', function addSpeaker(ctx, instance, next) {
        var userId = ctx.req.accessToken && ctx.req.accessToken.userId;
        
        if (!userId) {
            if (process.env.NODE_ENV === 'development') {
                userId = ctx.req.body.speakerId || 1;
            } else {
                return next(new Error('No user data present on Submission creation'));
            }
        }
        
        debug('Attempting to create new Submission by Speaker ' + userId + ' for talk ' + ctx.req.body.talkId);
        ctx.req.body.speakerId = userId;
        
        next();
    });
    
};
