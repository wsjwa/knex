const FunctionHelper = require('../../functionhelper');

FunctionHelper.prototype.date_add = function(date, addSub, dateType) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else {
    date = "'"+date+"'";
  }
  dateType = dateType.toLowerCase();
  return this.client.raw("("+date+" + INTERVAL '"+addSub+" "+dateType+"')");
};

module.exports = FunctionHelper;