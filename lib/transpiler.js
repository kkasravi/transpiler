    var log = require('log');
    var GeneratorObj = (function() {
      function GeneratorObj() {
        function privateData() {
          this.append = null;
          this.code = null;
          this.indentValue = null;
          this.prepend = null;
        }
        var p_vars = new privateData();
        var append = p_vars.append;
        Object.getOwnPropertyDescriptor(this,'append') || Object.defineProperty(this,'append', {get: function(){return append;},set: function(e){append=e;}});
        var code = p_vars.code;
        Object.getOwnPropertyDescriptor(this,'code') || Object.defineProperty(this,'code', {get: function(){return code;},set: function(e){code=e;}});
        var indentValue = p_vars.indentValue;
        Object.getOwnPropertyDescriptor(this,'indentValue') || Object.defineProperty(this,'indentValue', {get: function(){return indentValue;},set: function(e){indentValue=e;}});
        var prepend = p_vars.prepend;
        Object.getOwnPropertyDescriptor(this,'prepend') || Object.defineProperty(this,'prepend', {get: function(){return prepend;},set: function(e){prepend=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            append:true,
            code:null,
            indentValue:'',
            prepend:false
          };
          try {
            this.append=properties.append;
            this.code=properties.code;
            this.indentValue=properties.indentValue;
            this.prepend=properties.prepend;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      GeneratorObj.prototype['add'] = function(codeObj) {
        var type=typeof(codeObj);
        if(type === "string") {
          this.code+=codeObj;
        } else {
          if(type instanceof Array) {
            for(var i=0;i < codeObj.length;++i) {
              var co=codeObj[i];
              this.add(co);
            }
          } else {
            if(codeObj) {
              if(codeObj.prepend) {
                this.code=codeObj.code + this.code;
                this.setPrepend();
              } else {
                this.code+=codeObj.code;
                this.setAppend();
              }
            }
          }
        }
        return this;
      };
      GeneratorObj.prototype['insert'] = function(mark,codeObj) {
        this.code=this.code.substr(0,mark) + codeObj + this.code.substr(mark + 1);
        return this;
      };
      GeneratorObj.prototype['mark'] = function() {
        return this.code.length;
      };
      GeneratorObj.prototype['newLine'] = function(count) {
        var number=count || 1;
        for(var i=0;i < number;++i) {
          this.add('\n');
        }
        return this;
      };
      GeneratorObj.prototype['popTab'] = function(n) {
        var number=n || 1;
        for(var i=0;i < number;++i) {
          this.indentValue=this.indentValue.replace('  ','');
        }
        return this;
      };
      GeneratorObj.prototype['pushTab'] = function(n) {
        var number=n || 1;
        for(var i=0;i < number;++i) {
          this.indentValue+='  ';
        }
        return this;
      };
      GeneratorObj.prototype['setPrepend'] = function() {
        this.prepend=true;
        this.append=false;
        return this;
      };
      GeneratorObj.prototype['setAppend'] = function() {
        this.prepend=false;
        this.append=true;
        return this;
      };
      GeneratorObj.prototype['tab'] = function() {
        this.add(this.indentValue);
        return this;
      };
      GeneratorObj.prototype['toString'] = function() {
        return this.code;
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = GeneratorObj;
        return new GeneratorObj(args && args.length && args[0]);
      };
    })();
    exports.GeneratorObj = GeneratorObj;
    var Stack = (function() {
      function Stack() {
        function privateData() {
          this.queue = null;
          this.count = null;
        }
        var p_vars = new privateData();
        var queue = p_vars.queue;
        Object.getOwnPropertyDescriptor(this,'queue') || Object.defineProperty(this,'queue', {get: function(){return queue;},set: function(e){queue=e;}});
        var count = p_vars.count;
        Object.getOwnPropertyDescriptor(this,'count') || Object.defineProperty(this,'count', {get: function(){return count;},set: function(e){count=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (obj) {
          try {
            this.clear();
            if(obj) {
              this.push(obj);
            }
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Stack.prototype['clear'] = function() {
        this.queue=[];
        this.count=this.queue.length;
        return this;
      };
      Stack.prototype['contains'] = function(obj) {
        for(var i=0;i < this.queue.length;++i) {
          if(this.queue[i] == obj) {
            return true;
          }
        }
        return false;
      };
      Stack.prototype['copyTo'] = function(arr,i) {
        arr.splice(i,0,this.queue);
      };
      Stack.prototype['forEach'] = function(fn,scope) {
        var s=scope;
        if(Array.forEach) {
          Array.forEach(this.queue,fn,s);
        } else {
          for(var i=0;i < this.queue.length;++i) {
            fn.call(s,this.queue[i],i,this.queue);
          }
        }
      };
      Stack.prototype['peek'] = function(index) {
        return this.queue[index];
      };
      Stack.prototype['depth'] = function() {
        return this.count;
      };
      Stack.prototype['pop'] = function() {
        var r=this.queue.pop();
        this.count=this.queue.length;
        return r;
      };
      Stack.prototype['isEmpty'] = function() {
        return this.count === 0;
      };
      Stack.prototype['push'] = function(o) {
        this.queue.push(o);
        this.count=this.queue.length;
        return this;
      };
      Stack.prototype['top'] = function() {
        return this.queue[(this.queue.length - 1)];
      };
      Stack.prototype['bottom'] = function() {
        return this.queue[0];
      };
      Stack.prototype['toArray'] = function() {
        return [].concat(this.queue);
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Stack;
        return new Stack(args && args.length && args[0]);
      };
    })();
    exports.Stack = Stack;
    var Transpiler = (function() {
      function Transpiler() {
        function privateData() {
          this.emitter = null;
          this.parser = null;
          this.stack = null;
        }
        var p_vars = new privateData();
        var emitter = p_vars.emitter;
        Object.getOwnPropertyDescriptor(this,'emitter') || Object.defineProperty(this,'emitter', {get: function(){return emitter;},set: function(e){emitter=e;}});
        var parser = p_vars.parser;
        Object.getOwnPropertyDescriptor(this,'parser') || Object.defineProperty(this,'parser', {get: function(){return parser;},set: function(e){parser=e;}});
        var stack = p_vars.stack;
        Object.getOwnPropertyDescriptor(this,'stack') || Object.defineProperty(this,'stack', {get: function(){return stack;},set: function(e){stack=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            emitter:null,
            parser:null
          };
          try {
            this.stack=Stack().push(GeneratorObj());
            this.emitter=properties.emitter;
            this.parser=properties.parser;
            this.parser && this.transpile(this.parser.tree,"");
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Transpiler.prototype['get'] = function(ast) {
        try {
          var emit=this.emitter[ast.constructor.name];
          if(!emit) {
            log.Logger.error(this,"no emitter for " + ast.constructor.name + ": " + ast.toSource());
          }
          return emit({
            transpiler:this,
            ast:ast
          });
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      Transpiler.prototype['transpile'] = function(node,indent) {
        if(!node) {
          throw new TypeError("node is null!!!!");
        }
        if(this.emitter[node.constructor.name]) {
          this.emitter[node.constructor.name]({
            transpiler:this,
            ast:node
          }).emit(this.stack);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Transpiler;
        return new Transpiler(args && args.length && args[0]);
      };
    })();
    exports.Transpiler = Transpiler;
