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

module.exports = FunctionHelper;