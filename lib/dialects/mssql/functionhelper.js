const FunctionHelper = require('../../functionhelper');

FunctionHelper.prototype.date_add = function(date, addSub, dateType, noQuotes, alias) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else if(noQuotes === undefined || !noQuotes) {
    date = "'"+date+"'";
  }
  dateType = dateType.toLowerCase();
  return this.client.raw("DATEADD("+dateType+","+addSub+","+date+")"+FunctionHelper.prototype.addAlias(alias));
};

FunctionHelper.prototype.day = function(date, noQuotes, alias) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else if(noQuotes === undefined || !noQuotes) {
    date = "'"+date+"'";
  }
  return this.client.raw("DAY("+date+")"+FunctionHelper.prototype.addAlias(alias));
}

FunctionHelper.prototype.month = function(date, noQuotes, alias) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else if(noQuotes === undefined || !noQuotes) {
    date = "'"+date+"'";
  }
  return this.client.raw("MONTH("+date+")"+FunctionHelper.prototype.addAlias(alias));
}

FunctionHelper.prototype.year = function(date, noQuotes, alias) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else if(noQuotes === undefined || !noQuotes) {
    date = "'"+date+"'";
  }
  return this.client.raw("YEAR("+date+")"+FunctionHelper.prototype.addAlias(alias));
}

module.exports = FunctionHelper;