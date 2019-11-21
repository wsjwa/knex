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
    case 'day':
      dateType = '%d';
    break;
    case 'month':
      dateType = '%m';
    break;
    case 'year':
      dateType = '%Y';
    break;
    case 'hour':
      dateType = '%H';
    break;
    case 'minute':
      dateType = '%M';
    break;
    case 'second':
      dateType = '%S';
    break;
  }
  
  return this.client.raw("(strftime('"+dateType+"', "+FunctionHelper.prototype.getDateForQFn(date, noQuotes)+") - strftime('"+dateType+"', "+FunctionHelper.prototype.getDateForQFn(compareDate, noQuotesCompare)+"))"+FunctionHelper.prototype.addAliasToQFn(alias));
}

module.exports = FunctionHelper;