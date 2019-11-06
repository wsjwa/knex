const FunctionHelper = require('../../functionhelper');

FunctionHelper.prototype.date_add = function(date, addSub, dateType) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else {
    date = "'"+date+"'";
  }
  return this.client.raw("DATE_ADD("+date+",INTERVAL "+addSub+" "+dateType+")");
};

FunctionHelper.prototype.day = function(date) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else {
    date = "'"+date+"'";
  }
  return this.client.raw("DAY("+date+")");
}

FunctionHelper.prototype.month = function(date) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else {
    date = "'"+date+"'";
  }
  return this.client.raw("MONTH("+date+")");
}

FunctionHelper.prototype.year = function(date) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else {
    date = "'"+date+"'";
  }
  return this.client.raw("YEAR("+date+")");
}

module.exports = FunctionHelper;