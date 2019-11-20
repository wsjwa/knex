const FunctionHelper = require('../../functionhelper');

FunctionHelper.prototype.date_add = function(date, addSub, dateType, noQuotes, alias) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else if(noQuotes === undefined || !noQuotes) {
    date = "'"+date+"'";
  }
  dateType = dateType.toLowerCase()+'s';
  return this.client.raw("date("+date+",'"+addSub+" "+dateType+"')"+FunctionHelper.prototype.addAlias(alias));
};

FunctionHelper.prototype.day = function(date, noQuotes, alias) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else if(noQuotes === undefined || !noQuotes) {
    date = "'"+date+"'";
  }
  return this.client.raw("strftime('%d', "+date+")"+FunctionHelper.prototype.addAlias(alias));
}

FunctionHelper.prototype.month = function(date, noQuotes, alias) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else if(noQuotes === undefined || !noQuotes) {
    date = "'"+date+"'";
  }
  return this.client.raw("strftime('%m', "+date+")"+FunctionHelper.prototype.addAlias(alias));
}

FunctionHelper.prototype.year = function(date, noQuotes, alias) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else if(noQuotes === undefined || !noQuotes) {
    date = "'"+date+"'";
  }
  return this.client.raw("strftime('%Y', "+date+")"+FunctionHelper.prototype.addAlias(alias));
}

module.exports = FunctionHelper;