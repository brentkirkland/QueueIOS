var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');

var LoginActions = {

  selectBank: function(bank) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SELECT_BANK,
      bank: bank
    });
  },
  cancelBank: function() {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.CANCEL_BANK,
    });
  },
};

module.exports = LoginActions;  
