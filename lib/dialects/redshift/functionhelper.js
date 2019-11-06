const FunctionHelper = require('../../functionhelper');

FunctionHelper.prototype.date_add = function(date, addSub, dateType) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else {
    date = "'"+date+"'";
  }
  dateType = dateType.toLowerCase();
  return this.client.raw("dateadd("+dateType+","+addSub+","+date+")");
};

FunctionHelper.prototype.day = function(date) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else {
    date = "'"+date+"'";
  }
  return this.client.raw("extract(day from timestamp "+date+")");
}

FunctionHelper.prototype.month = function(date) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else {
    date = "'"+date+"'";
  }
  return this.client.raw("extract(month from timestamp "+date+")");
}

FunctionHelper.prototype.year = function(date) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else {
    date = "'"+date+"'";
  }
  return this.client.raw("extract(year from timestamp "+date+")");
}

module.exports = FunctionHelper;