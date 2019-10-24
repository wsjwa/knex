const FunctionHelper = require('../../functionhelper');

FunctionHelper.prototype.date_add = function(date, addSub, dateType) {
  date = "'"+date+"'";
  return this.client.raw("DATE_ADD("+date+",INTERVAL "+addSub+" "+dateType+")");
};

module.exports = FunctionHelper;
