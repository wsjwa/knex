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
  let dateType = '%d';
  
  switch(diffType) {
    case 'DAY':
      dateType = '%d';
    break;
    case 'MONTH':
      dateType = '%m';
    break;
    case 'YEAR':
      dateType = '%Y';
    break;
    case 'HOUR':
      dateType = '%H';
    break;
    case 'MINUTE':
      dateType = '%M';
    break;
    case 'SECOND':
      dateType = '%S';
    break;
  }
  
  return this.client.raw("(strftime('"+dateType+"', "+FunctionHelper.prototype.getDateForQFn(date, noQuotes)+") - strftime('"+dateType+"', "+FunctionHelper.prototype.getDateForQFn(compareDate, noQuotesCompare)+"))"+FunctionHelper.prototype.addAliasToQFn(alias));
}

module.exports = FunctionHelper;