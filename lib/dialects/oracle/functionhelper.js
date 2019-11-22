const FunctionHelper = require('../../functionhelper');

FunctionHelper.prototype.date_add = function(date, addSub, dateType, noQuotes, alias) {
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
  return this.client.raw("dateadd("+dateType+","+addSub+","+FunctionHelper.prototype.getDateForQFn(date, noQuotes)+")"+FunctionHelper.prototype.addAliasToQFn(alias));
};

FunctionHelper.prototype.day = function(date, noQuotes, alias) {
  return this.client.raw("EXTRACT(DAY FROM "+FunctionHelper.prototype.getDateForQFn(date, noQuotes)+")"+FunctionHelper.prototype.addAliasToQFn(alias));
}

FunctionHelper.prototype.month = function(date, noQuotes, alias) {
  return this.client.raw("EXTRACT(MONTH FROM "+FunctionHelper.prototype.getDateForQFn(date, noQuotes)+")"+FunctionHelper.prototype.addAliasToQFn(alias));
}

FunctionHelper.prototype.year = function(date, noQuotes, alias) {
  return this.client.raw("EXTRACT(YEAR FROM "+FunctionHelper.prototype.getDateForQFn(date, noQuotes)+")"+FunctionHelper.prototype.addAliasToQFn(alias));
}

FunctionHelper.prototype.date_diff = function(date, compareDate, diffType, noQuotes, noQuotesCompare, alias) {
  date = FunctionHelper.prototype.getDateForQFn(date, noQuotes);
  compareDate = FunctionHelper.prototype.getDateForQFn(compareDate, noQuotesCompare);
  var dateQuery = '';
  switch(diffType) {
    case 'DAY':
      dateQuery = "round(round(TO_DATE("+date+", 'YYYY-MM-DD HH24:MI:SS') - TO_DATE("+compareDate+", 'YYYY-MM-DD HH24:MI:SS'),2),0)";
    break;
    case 'MONTH':
      dateQuery = "round(MONTHS_BETWEEN( TO_DATE("+date+", 'YYYY-MM-DD HH24:MI:SS'), TO_DATE("+compareDate+", 'YYYY-MM-DD HH24:MI:SS') ), 0)";
    break;
    case 'YEAR':
      dateQuery = "(round(MONTHS_BETWEEN( TO_DATE("+date+", 'YYYY-MM-DD HH24:MI:SS'), TO_DATE("+compareDate+", 'YYYY-MM-DD HH24:MI:SS') ), 0) / 12)";
    break;
    case 'HOUR':
      dateQuery = "round(round(TO_DATE("+date+", 'YYYY-MM-DD HH24:MI:SS') - TO_DATE("+compareDate+", 'YYYY-MM-DD HH24:MI:SS'),2)*24, 0)";
    break;
    case 'MINUTE':
      dateQuery = "round(round(TO_DATE("+date+", 'YYYY-MM-DD HH24:MI:SS') - TO_DATE("+compareDate+", 'YYYY-MM-DD HH24:MI:SS'),2)*(24*60),0)";
    break;
    case 'SECOND':
      dateQuery = "round(round(TO_DATE("+date+", 'YYYY-MM-DD HH24:MI:SS') - TO_DATE("+compareDate+", 'YYYY-MM-DD HH24:MI:SS'),2)*(24*60*60),0)";
    break;
  }
  
  return this.client.raw(dateQuery+FunctionHelper.prototype.addAliasToQFn(alias));
}

module.exports = FunctionHelper;