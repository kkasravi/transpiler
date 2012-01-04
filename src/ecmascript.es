//require('ecmascript').App.run(require('controller').Controller.javascripts['test'])
module ecmascript {
  module log from 'log';
  module emitter from 'generator';
  module parser from 'parser';
  module transpiler from 'transpiler';
  class AppType {
    constructor() {
      try {
        var grammar = location.search ? location.search.substr(1) : 'strict';
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    run(source) {
      try {
        var elapsed = (function() {
          var time = new Date().getTime();
          return function() {return new Date().getTime() - time};
        }());
        var code = transpiler.Transpiler({parser:parser.Parser({source:source}),emitter:emitter}).stack.top();
        elapsed = elapsed();
        log.Logger.debug(code.code).debug('elapsed='+elapsed+'ms');
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  }
  export const App = AppType();
}

