Blockly.Blocks['sht31_new'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBDUINO_SHT31, "SHT31，SDA")
        .appendField(new Blockly.FieldDropdown([
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"],
          ["6", "6"],
          ["7", "7"],
          ["8", "8"],
          ["9", "9"],
          ["10", "10"],
          ["11", "11"],
          ["12", "12"],
          ["13", "13"],
          ["14", "14"],
          ["15", "15"],
          ["16", "16"],
          ["17", "17"],
          ["18", "18"],
          ["19", "19"]
        ]), "sda")
        .appendField(Blockly.Msg.WEBDUINO_SHT31_SCL, " SCL")
        .appendField(new Blockly.FieldDropdown([
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"],
          ["6", "6"],
          ["7", "7"],
          ["8", "8"],
          ["9", "9"],
          ["10", "10"],
          ["11", "11"],
          ["12", "12"],
          ["13", "13"],
          ["14", "14"],
          ["15", "15"],
          ["16", "16"],
          ["17", "17"],
          ["18", "18"],
          ["19", "19"]
        ]), "scl");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['sht31_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("sht31"), "var")
        .appendField(Blockly.Msg.WEBDUINO_SHT31_START, "開始偵測");
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField(Blockly.Msg.WEBDUINO_SHT31_DO, "執行");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['sht31_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("sht31"), "var")
        .appendField(Blockly.Msg.WEBDUINO_SHT31_STOP, "停止偵測");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['sht31_val'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("sht31"), "var")
        .appendField(Blockly.Msg.WEBDUINO_SHT31_IS, "的")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.WEBDUINO_SHT31_TEMP, "_temperature"], [Blockly.Msg.WEBDUINO_SHT31_HUM, "_humidity"]]), "info")
        .appendField(Blockly.Msg.WEBDUINO_SHT31_VAL, "數值");
    this.setOutput(true, null);
    this.setColour(35);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};