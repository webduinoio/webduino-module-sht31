Blockly.JavaScript['sht31_new'] = function(block) {
  var dropdown_sda = block.getFieldValue('sda');
  var dropdown_scl = block.getFieldValue('scl');
  var code = 'getSHT31(board,'+ dropdown_sda + ',' + dropdown_scl + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['sht31_on'] = function(block) {
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var code = variable_var + '.on(async function(_temperature, _humidity){\n'+
  '  ' + variable_var + '._temperature =  _temperature;\n' +
  '  '+ variable_var + '._humidity = _humidity;\n' +
  statements_do + '});\n';
  return code;
};

Blockly.JavaScript['sht31_off'] = function(block) {
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
  var code = variable_var + '.off();\n';
  return code;
};

Blockly.JavaScript['sht31_val'] = function(block) {
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
  var dropdown_info = block.getFieldValue('info');
  var code = variable_var + '.' + dropdown_info;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};