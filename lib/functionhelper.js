// FunctionHelper
// -------
function FunctionHelper(client) {
  this.client = client;
}

FunctionHelper.prototype.now = function(precision) {
  if (typeof precision === 'number') {
    return this.client.raw(`CURRENT_TIMESTAMP(${precision})`);
  }
  return this.client.raw('CURRENT_TIMESTAMP');
};

FunctionHelper.prototype.addAliasToQFn = function(alias) {
  if(typeof alias === 'string' && alias !== '') {
    return ' as '+alias;
  }
  return '';
}

FunctionHelper.prototype.getDateForQFn = function(date, noQuotes) {
  if(typeof date == 'object') {
    date = date.toSQL().sql;
  }
  else if(noQuotes === undefined || !noQuotes) {
    date = "'"+date+"'";
  }
  return date;
}

module.exports = FunctionHelper;