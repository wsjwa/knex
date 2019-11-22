const FunctionHelper = require('../../functionhelper');

FunctionHelper.prototype.date_add = function(date, addSub, dateType, noQuotes, alias) {
  return this.client.raw("DATE_ADD("+FunctionHelper.prototype.getDateForQFn(date, noQuotes)+",INTERVAL "+addSub+" "+dateType+")"+FunctionHelper.prototype.addAliasToQFn(alias));
};

FunctionHelper.prototype.day = function(date, noQuotes, alias) {
  return this.client.raw("DAY("+FunctionHelper.prototype.getDateForQFn(date, noQuotes)+")"+FunctionHelper.prototype.addAliasToQFn(alias));
}

FunctionHelper.prototype.month = function(date, noQuotes, alias) {
  return this.client.raw("MONTH("+FunctionHelper.prototype.getDateForQFn(date, noQuotes)+")"+FunctionHelper.prototype.addAliasToQFn(alias));
}

FunctionHelper.prototype.year = function(date, noQuotes, alias) {
  return this.client.raw("YEAR("+FunctionHelper.prototype.getDateForQFn(date, noQuotes)+")"+FunctionHelper.prototype.addAliasToQFn(alias));
}

FunctionHelper.prototype.date_diff = function(date, compareDate, diffType, noQuotes, noQuotesCompare, alias) {
  return this.client.raw("(TIMESTAMPDIFF("+diffType+", "+FunctionHelper.prototype.getDateForQFn(compareDate, noQuotesCompare)+", "+FunctionHelper.prototype.getDateForQFn(date, noQuotes)+"))"+FunctionHelper.prototype.addAliasToQFn(alias));
}

module.exports = FunctionHelper;