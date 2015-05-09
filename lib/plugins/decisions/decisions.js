'use strict';

var Decision = require('../../models/decision');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/decisions/{_id}',
    config: {
      description: 'Add new Decision',
      handler: function(request, reply){
        if(Decision.findOne({userId: request.auth.credentials._id})){
          Decision.findOne({userId: request.auth.credentials._id}, function(decision){
            console.log('found decision, updating..');
            decision.$push(request.payload, function(decision){
              return reply(decision);
            });
          });
        } else {
          var decision = new Decision(request.payload);
          console.log(decision);
          decision.save(function(decision){
            return reply(decision);
          });
        }
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'decisions.create'
};
