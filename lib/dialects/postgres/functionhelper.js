const FunctionHelper = require('../../functionhelper');

FunctionHelper.prototype.date_add = function(date, addSub, dateType, noQuotes, alias) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else if(noQuotes === undefined || !noQuotes) {
    date = "'"+date+"'";
  }
  dateType = dateType.toLowerCase();
  return this.client.raw("("+date+" + INTERVAL '"+addSub+" "+dateType+"')"+FunctionHelper.prototype.addAlias(alias));
};

FunctionHelper.prototype.day = function(date, noQuotes, alias) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else if(noQuotes === undefined || !noQuotes) {
    date = "'"+date+"'";
  }
  return this.client.raw("extract(day from timestamp "+date+")"+FunctionHelper.prototype.addAlias(alias));
}

FunctionHelper.prototype.month = function(date, noQuotes, alias) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else if(noQuotes === undefined || !noQuotes) {
    date = "'"+date+"'";
  }
  return this.client.raw("extract(month from timestamp "+date+")"+FunctionHelper.prototype.addAlias(alias));
}

FunctionHelper.prototype.year = function(date, noQuotes, alias) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else if(noQuotes === undefined || !noQuotes) {
    date = "'"+date+"'";
  }
  return this.client.raw("extract(year from timestamp "+date+")"+FunctionHelper.prototype.addAlias(alias));
}

module.exports = FunctionHelper;