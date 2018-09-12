+(function (window, webduino) {

  'use strict';

  window.getSHT31 = function (board, sda, scl) {
    return new webduino.module.SHT31(board, sda, scl);
  };

}(window, window.webduino));
