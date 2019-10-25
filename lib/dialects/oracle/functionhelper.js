const FunctionHelper = require('../../functionhelper');

FunctionHelper.prototype.date_add = function(date, addSub, dateType) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else {
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

module.exports = FunctionHelper;