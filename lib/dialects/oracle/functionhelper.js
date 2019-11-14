const FunctionHelper = require('../../functionhelper');

FunctionHelper.prototype.date_add = function(date, addSub, dateType, noQuotes) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else if(noQuotes === undefined || !noQuotes) {
    date = "'"+date+"'";
  }
  dateType = dateType.toLowerCase();
  switch(dateType) {
    case 'day':
      dateType = 'dd';
    break;
    case 'month':
        dateType = 'mm';
    break;
    case 'year':
        dateType = 'yy';
    break;
    case 'hour':
        dateType = 'hh';
    break;
    case 'minute':
        dateType = 'mi';
    break;
    case 'second':
        dateType = 'ss';
    break;
  }
  return this.client.raw("dateadd("+dateType+","+addSub+","+date+")");
};

FunctionHelper.prototype.day = function(date, noQuotes) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else if(noQuotes === undefined || !noQuotes) {
    date = "'"+date+"'";
  }
  return this.client.raw("EXTRACT(DAY FROM "+date+")");
}

FunctionHelper.prototype.month = function(date, noQuotes) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else if(noQuotes === undefined || !noQuotes) {
    date = "'"+date+"'";
  }
  return this.client.raw("EXTRACT(MONTH FROM "+date+")");
}

FunctionHelper.prototype.year = function(date, noQuotes) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else if(noQuotes === undefined || !noQuotes) {
    date = "'"+date+"'";
  }
  return this.client.raw("EXTRACT(YEAR FROM "+date+")");
}

module.exports = FunctionHelper;