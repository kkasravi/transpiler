module transpiler {
  module log from 'log';
  export class GeneratorObj {
    constructor(properties={append:true,code:null,indentValue:'',prepend:false}) {
      private append,code,indentValue,prepend;
      try {
        @append = properties.append;
        @code = properties.code;
        @indentValue = properties.indentValue;
        @prepend = properties.prepend;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }    
    add(codeObj) {
      var type = typeof codeObj;
      if(type === "string") {
        @code += codeObj;  
      } else if(type instanceof Array) {
        for(var i = 0; i < codeObj.length; ++i){
          var co = codeObj[i];
          this.add(co);
        }
      } else if(codeObj) {
        if(codeObj.prepend) {
          @code = codeObj.code + @code;
          this.setPrepend();
        } else {
          @code += codeObj.code;
          this.setAppend();     
        }
      }
      return this;
    }
    insert(mark, codeObj) {
      @code = @code.substr(0,mark) + codeObj + @code.substr(mark+1);  
      return this;
    }
    mark() {
      return @code.length;
    }      
    newLine(count) {
      var number = count || 1;
      for (var i = 0; i < number; ++i) {
        this.add('\n');
      }
      return this;
    }
    popTab(n) {
      var number = n || 1;
      for(var i = 0; i < number; ++i) { 
        @indentValue = @indentValue.replace('  ','');
      }
      return this;
    }  
    pushTab(n) {
      var number = n || 1;
      for(var i = 0; i < number; ++i) { 
        @indentValue += '  ';
      }
      return this;
    }  
    setPrepend() {
      @prepend = true;
      @append = false;
      return this;
    }
    setAppend() {
      @prepend = false;
      @append = true;
      return this;
    }
    tab() {
      this.add(@indentValue);
      return this;
    }
    toString() {
      return @code;
    }           
  };
  export class Stack {
    constructor(obj) {
      private queue, count;
      try {
        this.clear();
        if (obj) {
          this.push(obj);
        }
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    clear() {
      @queue = [];
      @count = @queue.length;
      return this;
    }
    contains(obj) {
      for (var i = 0; i < @queue.length; i++) {
        if (@queue[i] == obj) {
          return true;
        }
      }
      return false;
    }
    copyTo(arr, i) {
      arr.splice(i, 0, @queue);
    }
    forEach(fn, scope) {
      var s = scope;
      if (Array.forEach) {
        Array.forEach(@queue, fn, s);
      } else {
        for (var i = 0; i < @queue.length; i++) {
          fn.call(s, @queue[i], i, @queue);
        }
      }
    }
    peek(index) {
      return @queue[index];
    }
    depth() {
      return @count;
    }
    pop() {
      var r = @queue.pop();
      @count = @queue.length;
      return r;
    }
    isEmpty() {
      return @count === 0;
    }
    push(o) {
      @queue.push(o);
      @count = @queue.length;
      return this;
    }
    top() {
      return @queue[(@queue.length - 1)];
    }
    bottom() {
      return @queue[0];
    }
    toArray() {
      return [].concat(@queue);
    }
  };
  export class Transpiler {
    constructor(properties={emitter:null,parser:null}) {
      private emitter,parser,stack;
      try {
        @stack = Stack().push(GeneratorObj());
        @emitter = properties.emitter;
        @parser = properties.parser;
        @parser && this.transpile(@parser.tree,"");
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get(ast) {
      try {
        var emit = @emitter[ast.constructor.name];
        if(!emit) {
          log.Logger.error(this,"no emitter for "+ast.constructor.name+": "+ast.toSource());
        }
        return emit({transpiler:this,ast:ast});
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    transpile(node, indent) {
      if(!node) {
        throw new TypeError("node is null!!!!");
      }
      if(@emitter[node.constructor.name]) {
        @emitter[node.constructor.name]({transpiler:this,ast:node}).emit(@stack);
      }
    }
  };
}
