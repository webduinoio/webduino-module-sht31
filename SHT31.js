+(function(factory) {
    if (typeof exports === 'undefined') {
        factory(webduino || {});
    } else {
        module.exports = factory;
    }
}(function(scope) {
    'use strict';

    var Module = scope.Module,
        BoardEvent = scope.BoardEvent,
        proto;

    var SHT31_MESSAGE = [0x04, 0x41];

    var SHT31Event = {
        MESSAGE: 'message'
    };

    function SHT31(board, sda, scl) {
        Module.call(this);
        this.board = board;
        this.init = false;
        this.temperature = 0;
        this.humidity = 0;
        this._sda = sda;
        this._scl = scl;
        this.callback = function() {};
        this.messageHandler = onMessage.bind(this);
        this.board.send([0xf0, 0x04, 0x41, 0x00, this._sda, this._scl, 0xf7]);
    }

    function onMessage(event) {
        var msg = event.message;
        if (msg[0] == SHT31_MESSAGE[0] && msg[1] == SHT31_MESSAGE[1]) {
            this.emit(SHT31Event.MESSAGE, msg.slice(2));
        }
    }

    SHT31.prototype = proto = Object.create(Module.prototype, {
        // constructor: {
        //     value: SHT31
        // },
        // state: {
        //     get: function() {
        //         return this.state;
        //     },
        //     set: function(val) {
        //         this.state = val;
        //     }
        // }
    });

    proto.on = function(callback) {
        this.board.send([0xf0, 0x04, 0x41, 0x01, 0xf7]);
        if (typeof callback !== 'function') {
            callback = function() {};
        }
        this.callback = function(rawData) {
            var val = '';
            for (var i = 0; i < rawData.length; i++) {
                val += String.fromCharCode(rawData[i]);
            }
            var StrAra = '[' + val + ']';
            var info = eval(StrAra);
            this.temperature = info[0];
            this.humidity = info[1];
            callback(this.temperature, this.humidity);
        };
        this.state = 'on';
        this.board.on(BoardEvent.SYSEX_MESSAGE, this.messageHandler);
        this.addListener(SHT31Event.MESSAGE, this.callback);
    };

    proto.off = function() {
        this.state = 'off';
        this.board.send([0xf0, 0x04, 0x41, 0x02, 0xf7]);
        this.board.removeListener(BoardEvent.SYSEX_MESSAGE, this.messageHandler);
        this.removeListener(SHT31Event.MESSAGE, this.callback);
        this.callback = null;
    };

    scope.module.SHT31 = SHT31;
}));