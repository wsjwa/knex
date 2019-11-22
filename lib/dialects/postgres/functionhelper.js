const FunctionHelper = require('../../functionhelper');

FunctionHelper.prototype.date_add = function(date, addSub, dateType, noQuotes, alias) {
  dateType = dateType.toLowerCase();
  return this.client.raw("("+FunctionHelper.prototype.getDateForQFn(date, noQuotes)+" + INTERVAL '"+addSub+" "+dateType+"')"+FunctionHelper.prototype.addAliasToQFn(alias));
};

FunctionHelper.prototype.day = function(date, noQuotes, alias) {
  return this.client.raw("extract(day from timestamp "+FunctionHelper.prototype.getDateForQFn(date, noQuotes)+")"+FunctionHelper.prototype.addAliasToQFn(alias));
}

FunctionHelper.prototype.month = function(date, noQuotes, alias) {
  return this.client.raw("extract(month from timestamp "+FunctionHelper.prototype.getDateForQFn(date, noQuotes)+")"+FunctionHelper.prototype.addAliasToQFn(alias));
}

FunctionHelper.prototype.year = function(date, noQuotes, alias) {
  return this.client.raw("extract(year from timestamp "+FunctionHelper.prototype.getDateForQFn(date, noQuotes)+")"+FunctionHelper.prototype.addAliasToQFn(alias));
}

FunctionHelper.prototype.date_diff = function(date, compareDate, diffType, noQuotes, noQuotesCompare, alias) {
  date = FunctionHelper.prototype.getDateForQFn(date, noQuotes);
  compareDate = FunctionHelper.prototype.getDateForQFn(compareDate, noQuotesCompare);
  var dateQuery = '';
  switch(diffType) {
    case 'DAY':
      dateQuery = "DATE_PART('day', "+date+"::timestamp - "+compareDate+"::timestamp)";
    break;
    case 'MONTH':
      dateQuery = "(DATE_PART('year', "+date+"::date) - DATE_PART('year', "+compareDate+"::date)) * 12 + (DATE_PART('month', "+date+"::date) - DATE_PART('month', "+compareDate+"::date))";
    break;
    case 'YEAR':
      dateQuery = "DATE_PART('year', "+date+"::date) - DATE_PART('year', "+compareDate+"::date)";
    break;
    case 'HOUR':
      dateQuery = "DATE_PART('day', "+date+"::timestamp - "+compareDate+"::timestamp) * 24 + DATE_PART('hour', "+date+"::timestamp - "+compareDate+"::timestamp)";
    break;
    case 'MINUTE':
      dateQuery = "(DATE_PART('day', "+date+"::timestamp - "+compareDate+"::timestamp) * 24 + DATE_PART('hour', "+date+"::timestamp - "+compareDate+"::timestamp)) * 60 + DATE_PART('minute', "+date+"::timestamp - "+compareDate+"::timestamp)";
    break;
    case 'SECOND':
      dateQuery = "((DATE_PART('day', "+date+"::timestamp - "+compareDate+"::timestamp) * 24 + DATE_PART('hour', "+date+"::timestamp - "+compareDate+"::timestamp)) * 60 + DATE_PART('minute', "+date+"::timestamp - "+compareDate+"::timestamp)) * 60 + DATE_PART('second', "+date+"::timestamp - "+compareDate+"::timestamp)";
    break;
  }
  
  return this.client.raw("("+dateQuery+")"+FunctionHelper.prototype.addAliasToQFn(alias));
}

module.exports = FunctionHelper;