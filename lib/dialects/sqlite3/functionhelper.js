const FunctionHelper = require('../../functionhelper');

FunctionHelper.prototype.date_add = function(date, addSub, dateType) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else {
    date = "'"+date+"'";
  }
  dateType = dateType.toLowerCase()+'s';
  return this.client.raw("date("+date+",'"+addSub+" "+dateType+"')");
};

module.exports = FunctionHelper;