Blockly.Blocks["yolobit_ir_recv"] = {
  init: function () {
    this.jsonInit({
      colour: "#CC6600",
      tooltip: "",
      message0: "%2 nút %1 trên remote được nhấn",
      args0: [
        {
          "type": "field_dropdown",
          "name": "pin",
          "options": [
            [
              "P1",
              "pin1"
            ],
            [
              "P0",
              "pin0"
            ],
            [
              "P2",
              "pin2"
            ],
            [
              "P3",
              "pin3"
            ],
            [
              "P4",
              "pin4"
            ],
            [
              "P5",
              "pin5"
            ],
            [
              "P6",
              "pin6"
            ],
            [
              "P7",
              "pin7"
            ],
            [
              "P8",
              "pin8"
            ],
            [
              "P9",
              "pin9"
            ],
            [
              "P10",
              "pin10"
            ],
            [
              "P11",
              "pin11"
            ],
            [
              "P12",
              "pin12"
            ],
            [
              "P13",
              "pin13"
            ],
            [
              "P14",
              "pin14"
            ],
            [
              "P15",
              "pin15"
            ],
            [
              "P16",
              "pin16"
            ],
            [
              "P19",
              "pin19"
            ],
            [
              "P20",
              "pin20"
            ]
          ]
        },
        {
          type: "field_dropdown",
          name: "remote",
          options: [
            ["A", "A"],
            ["B", "B"],
            ["C", "C"],
            ["D", "D"],
            ["E", "E"],
            ["F", "F"],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/forward.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "UP"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/backward.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "DOWN"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/turn_left.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "LEFT"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/turn_right.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "RIGHT"
            ],
            ["Setup", "SETUP"],
            ["0", "0"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
          ],
        },
      ],
      output: "Boolean",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["yolobit_ir_code"] = {
  init: function () {
    this.jsonInit({
      colour: "#CC6600",
      tooltip: "",
      message0: "%1 đọc tín hiệu số thu được",
      args0: [
        {
          "type": "field_image",
          "src": "https://i.ibb.co/dtYR9mJ/remote.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: null,
      helpUrl: "",
    });
  },
};

Blockly.Blocks["yolobit_ir_raw_code"] = {
  init: function () {
    this.jsonInit({
      colour: "#CC6600",
      tooltip: "",
      message0: "%1 đọc tín hiệu thu từ remote",
      args0: [
        {
          "type": "field_image",
          "src": "https://i.ibb.co/dtYR9mJ/remote.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: null,
      helpUrl: "",
    });
  },
};

Blockly.Blocks["yolobit_ir_clear"] = {
  init: function () {
    this.jsonInit({
      colour: "#CC6600",
      tooltip: "",
      message0: "%1 xóa tín hiệu đã thu được",
      args0: [
        {
          "type": "field_image",
          "src": "https://i.ibb.co/dtYR9mJ/remote.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
};

Blockly.Blocks["yolobit_ir_on_receive"] = {
  init: function () {
    this.jsonInit({
      colour: "#CC6600",
      message0: "nếu cảm biến IR %1 nhận được %2 %3 %4 từ remote",
      args0: [
        {
          "type": "field_dropdown",
          "name": "pin",
          "options": [
            [
              "P1",
              "pin1"
            ],
            [
              "P0",
              "pin0"
            ],
            [
              "P2",
              "pin2"
            ],
            [
              "P3",
              "pin3"
            ],
            [
              "P4",
              "pin4"
            ],
            [
              "P5",
              "pin5"
            ],
            [
              "P6",
              "pin6"
            ],
            [
              "P7",
              "pin7"
            ],
            [
              "P8",
              "pin8"
            ],
            [
              "P9",
              "pin9"
            ],
            [
              "P10",
              "pin10"
            ],
            [
              "P11",
              "pin11"
            ],
            [
              "P12",
              "pin12"
            ],
            [
              "P13",
              "pin13"
            ],
            [
              "P14",
              "pin14"
            ],
            [
              "P15",
              "pin15"
            ],
            [
              "P16",
              "pin16"
            ],
            [
              "P19",
              "pin19"
            ],
            [
              "P20",
              "pin20"
            ]
          ]
        },
        {
          variable: "tín hiệu",
          type: "field_variable",
          name: "message",
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_statement",
          name: "ACTION",
        },
      ],
      helpUrl: "",
    });
  },
};

Blockly.Blocks["yolobit_ir_remote_btn"] = {
  init: function () {
    this.jsonInit({
      colour: "#CC6600",
      tooltip: "",
      message0: "nút %1",
      args0: [
        {
          type: "field_dropdown",
          name: "remote",
          options: [
            ["A", "A"],
            ["B", "B"],
            ["C", "C"],
            ["D", "D"],
            ["E", "E"],
            ["F", "F"],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/forward.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "UP"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/backward.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "DOWN"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/turn_left.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "LEFT"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/turn_right.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "RIGHT"
            ],
            ["Setup", "SETUP"],
            ["0", "0"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
          ],
        },
      ],
      output: "Boolean",
      helpUrl: "",
    });
  },
  getDeveloperVars: function() {
    return ['ir_rx'];
  }
};


// PYTHON
Blockly.Python["yolobit_ir_recv"] = function (block) {
  var remote = block.getFieldValue("remote");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_ir_receiver'] = 'from ir_receiver import *; ir_rx.start();';
  var code = 'ir_rx.get_code() == IR_REMOTE_' + remote;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["yolobit_ir_code"] = function (block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_ir_receiver'] = 'from ir_receiver import *; ir_rx.start();';
  var code = 'ir_rx.get_code()' ;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["yolobit_ir_raw_code"] = function (block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_ir_receiver'] = 'from ir_receiver import *; ir_rx.start();';
  var code = 'ir_rx.get_raw_code()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["yolobit_ir_clear"] = function (block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_ir_receiver'] = 'from ir_receiver import *; ir_rx.start();';
  var code = 'ir_rx.clear_code()\n';
  return code;
};

Blockly.Python["yolobit_ir_remote_btn"] = function (block) {
  var remote = block.getFieldValue("remote");
  // TODO: Assemble Python into code variable.
  var code = 'IR_REMOTE_' + remote;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['yolobit_ir_on_receive'] = function(block) {
  var pin = block.getFieldValue("pin");
  Blockly.Python.definitions_['import_ir_receiver'] = 'from homebit3_ir_receiver import *';
  Blockly.Python.definitions_['import_ir_receiver_init'] = 'ir_rx = IR_RX(Pin(' + pin + '.pin, Pin.IN)); ir_rx.start();';
  var variable_message = Blockly.Python.variableDB_.getName(block.getFieldValue('message'), Blockly.Variables.NAME_TYPE);
  var statements_action = Blockly.Python.statementToCode(block, 'ACTION');

  var globals = [];
  var varName;
  var workspace = block.workspace;
  var variables = workspace.getAllVariables() || [];
  for (var i = 0, variable; variable = variables[i]; i++) {
    varName = variable.name;
    if (variable_message != Blockly.Python.variableDB_.getName(varName, Blockly.Variables.NAME_TYPE))
      globals.push(Blockly.Python.variableDB_.getName(varName,
        Blockly.Variables.NAME_TYPE));
  }
  globals = globals.length ? Blockly.Python.INDENT + 'global ' + globals.join(', ') : '';

  var cbFunctionName = Blockly.Python.provideFunction_(
    'on_ir_receive_callback_',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(' + variable_message + ', addr, ext):',
      globals,
      statements_action || Blockly.Python.PASS
    ]);
  
  var code = 'ir_rx.on_received(' + cbFunctionName + ')\n';
  Blockly.Python.definitions_['on_ir_receive_callback_' + '_statement'] = code;
  return '';
};