var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');

var ClaimActions = {

  claim: function(objectId) {
    
    AppDispatcher.handleViewAction({
      actionType: 'CLAIM',
      objectId: objectId
    });
  },
};

module.exports = ClaimActions;
