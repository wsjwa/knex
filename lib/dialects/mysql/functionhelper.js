const FunctionHelper = require('../../functionhelper');

FunctionHelper.prototype.date_add = function(date, addSub, dateType) {
  if(date == 'NOW()') {
    date = this.client.fn.now();
  }
  else if(typeof date == 'string') {
    date = "'"+date+"'";
  }
  return this.client.raw("DATE_ADD("+date+",INTERVAL "+addSub+" "+dateType+")");
};

module.exports = FunctionHelper;
