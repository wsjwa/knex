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

FunctionHelper.prototype.addAlias = function(alias) {
  if(typeof alias === 'string' && alias !== '') {
    return ' as '+alias;
  }
  return '';
}

module.exports = FunctionHelper;