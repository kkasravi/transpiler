    var log = require('log');
    var emitter = require('generator');
    var parser = require('parser');
    var transpiler = require('transpiler');
    var AppType = (function() {
      function AppType() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function () {
          try {
            var grammar=location.search?location.search.substr(1):'strict';
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      AppType.prototype['run'] = function(source) {
        try {
          var elapsed=(function () {
            var time=new Date().getTime();
            return function () {
              return new Date().getTime() - time;
            };
          }());
          var code=transpiler.Transpiler({
            parser:parser.Parser({
              source:source
            }),
            emitter:emitter
          }).stack.top();
          elapsed=elapsed();
          log.Logger.debug(code.code).debug('elapsed=' + elapsed + 'ms');
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = AppType;
        return new AppType(args && args.length && args[0]);
      };
    })();
    const App=AppType();
    exports.App = App;
