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

FunctionHelper.prototype.day = function(date) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else {
    date = "'"+date+"'";
  }
  return this.client.raw("strftime('%d', "+date+")");
}

FunctionHelper.prototype.month = function(date) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else {
    date = "'"+date+"'";
  }
  return this.client.raw("strftime('%m', "+date+")");
}

FunctionHelper.prototype.year = function(date) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else {
    date = "'"+date+"'";
  }
  return this.client.raw("strftime('%Y', "+date+")");
}

module.exports = FunctionHelper;