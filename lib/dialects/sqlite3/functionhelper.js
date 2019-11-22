const FunctionHelper = require('../../functionhelper');

FunctionHelper.prototype.date_add = function(date, addSub, dateType, noQuotes, alias) {
  dateType = dateType.toLowerCase()+'s';
  return this.client.raw("date("+FunctionHelper.prototype.getDateForQFn(date, noQuotes)+",'"+addSub+" "+dateType+"')"+FunctionHelper.prototype.addAliasToQFn(alias));
};

FunctionHelper.prototype.day = function(date, noQuotes, alias) {
  return this.client.raw("strftime('%d', "+FunctionHelper.prototype.getDateForQFn(date, noQuotes)+")"+FunctionHelper.prototype.addAliasToQFn(alias));
}

FunctionHelper.prototype.month = function(date, noQuotes, alias) {
  return this.client.raw("strftime('%m', "+FunctionHelper.prototype.getDateForQFn(date, noQuotes)+")"+FunctionHelper.prototype.addAliasToQFn(alias));
}

FunctionHelper.prototype.year = function(date, noQuotes, alias) {
  return this.client.raw("strftime('%Y', "+FunctionHelper.prototype.getDateForQFn(date, noQuotes)+")"+FunctionHelper.prototype.addAliasToQFn(alias));
}

FunctionHelper.prototype.date_diff = function(date, compareDate, diffType, noQuotes, noQuotesCompare, alias) {
  date = FunctionHelper.prototype.getDateForQFn(date, noQuotes);
  compareDate = FunctionHelper.prototype.getDateForQFn(compareDate, noQuotesCompare);
  var dateQuery = '';
  switch(diffType) {
    case 'DAY':
      dateQuery = "julianday("+date+")-julianday("+compareDate+")";
    break;
    case 'MONTH':
      dateQuery = "(strftime('%m', "+date+") - strftime('%m', "+compareDate+")) + ((strftime('%Y', "+date+") - strftime('%Y', "+compareDate+"))*12)";
    break;
    case 'YEAR':
      dateQuery = "strftime('%Y', "+date+") - strftime('%Y', "+compareDate+")";
    break;
    case 'HOUR':
      dateQuery = "(strftime('%H', "+date+") - strftime('%H', "+compareDate+")) + ((julianday("+date+")-julianday("+compareDate+"))*24)";
    break;
    case 'MINUTE':
      dateQuery = "(strftime('%M', "+date+") - strftime('%M', "+compareDate+")) + ((julianday("+date+")-julianday("+compareDate+"))*24*60)";
    break;
    case 'SECOND':
      dateQuery = "(strftime('%S', "+date+") - strftime('%S', "+compareDate+")) + ((julianday("+date+")-julianday("+compareDate+"))*24*60*60)";
    break;
  }
  
  return this.client.raw("("+dateQuery+")"+FunctionHelper.prototype.addAliasToQFn(alias));
}

module.exports = FunctionHelper;