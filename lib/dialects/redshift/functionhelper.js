const FunctionHelper = require('../../functionhelper');

FunctionHelper.prototype.date_add = function(date, addSub, dateType, noQuotes) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else if(noQuotes === undefined || !noQuotes) {
    date = "'"+date+"'";
  }
  dateType = dateType.toLowerCase();
  return this.client.raw("dateadd("+dateType+","+addSub+","+date+")");
};

FunctionHelper.prototype.day = function(date, noQuotes) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else if(noQuotes === undefined || !noQuotes) {
    date = "'"+date+"'";
  }
  return this.client.raw("extract(day from timestamp "+date+")");
}

FunctionHelper.prototype.month = function(date, noQuotes) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else if(noQuotes === undefined || !noQuotes) {
    date = "'"+date+"'";
  }
  return this.client.raw("extract(month from timestamp "+date+")");
}

FunctionHelper.prototype.year = function(date, noQuotes) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else if(noQuotes === undefined || !noQuotes) {
    date = "'"+date+"'";
  }
  return this.client.raw("extract(year from timestamp "+date+")");
}

module.exports = FunctionHelper;