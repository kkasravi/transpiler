    var log = require('log');
    var Position = (function() {
      function Position() {
        function privateData() {
          this.line = null;
          this.column = null;
        }
        var p_vars = new privateData();
        var line = p_vars.line;
        Object.getOwnPropertyDescriptor(this,'line') || Object.defineProperty(this,'line', {get: function(){return line;},set: function(e){line=e;}});
        var column = p_vars.column;
        Object.getOwnPropertyDescriptor(this,'column') || Object.defineProperty(this,'column', {get: function(){return column;},set: function(e){column=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (line,column) {
          this.line=line;
          this.column=column;
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Position;
        return new Position(args && args.length && args[0]);
      };
    })();
    exports.Position = Position;
    var SourceLocation = (function() {
      function SourceLocation() {
        function privateData() {
          this.source = null;
          this.start = null;
          this.end = null;
        }
        var p_vars = new privateData();
        var source = p_vars.source;
        Object.getOwnPropertyDescriptor(this,'source') || Object.defineProperty(this,'source', {get: function(){return source;},set: function(e){source=e;}});
        var start = p_vars.start;
        Object.getOwnPropertyDescriptor(this,'start') || Object.defineProperty(this,'start', {get: function(){return start;},set: function(e){start=e;}});
        var end = p_vars.end;
        Object.getOwnPropertyDescriptor(this,'end') || Object.defineProperty(this,'end', {get: function(){return end;},set: function(e){end=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            source:null,
            start:0,
            end:0
          };
          this.source=properties.source;
          this.start=properties.start;
          this.end=properties.end;
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = SourceLocation;
        return new SourceLocation(args && args.length && args[0]);
      };
    })();
    exports.SourceLocation = SourceLocation;
    var Node = (function() {
      function Node() {
        function privateData() {
          this.type = null;
          this.loc = null;
        }
        var p_vars = new privateData();
        var type = p_vars.type;
        Object.getOwnPropertyDescriptor(this,'type') || Object.defineProperty(this,'type', {get: function(){return type;},set: function(e){type=e;}});
        var loc = p_vars.loc;
        Object.getOwnPropertyDescriptor(this,'loc') || Object.defineProperty(this,'loc', {get: function(){return loc;},set: function(e){loc=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            type:'Node',
            loc:-1
          };
          this.type=properties.type;
          this.loc=properties.loc;
        }
        return ctor.apply(this,args) || this;
      }
      Node.prototype['toSource'] = function() {
        return this.loc.source.substring(this.loc.start.line,this.loc.end.line);
      };
      Node.prototype['toString'] = function() {
        return this.type;
      };
      Object.defineProperty(Node.prototype,'attributes', {get: function(){      return {};
      }});
      Object.defineProperty(Node.prototype,'children', {get: function(){      return [];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Node;
        return new Node(args && args.length && args[0]);
      };
    })();
    exports.Node = Node;
    var MultiLineComment = (function() {
      MultiLineComment.prototype = exports.Node();
      MultiLineComment.prototype.constructor = MultiLineComment;
      var Node = exports.Node.constructor;
      function MultiLineComment() {
        function privateData() {
          this.comments = null;
        }
        var p_vars = new privateData();
        var comments = p_vars.comments;
        Object.getOwnPropertyDescriptor(this,'comments') || Object.defineProperty(this,'comments', {get: function(){return comments;},set: function(e){comments=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            Node.call(this,properties);
            this.comments=properties.comments;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = MultiLineComment;
        return new MultiLineComment(args && args.length && args[0]);
      };
    })();
    exports.MultiLineComment = MultiLineComment;
    var SingleLineComment = (function() {
      SingleLineComment.prototype = exports.Node();
      SingleLineComment.prototype.constructor = SingleLineComment;
      var Node = exports.Node.constructor;
      function SingleLineComment() {
        function privateData() {
          this.comment = null;
        }
        var p_vars = new privateData();
        var comment = p_vars.comment;
        Object.getOwnPropertyDescriptor(this,'comment') || Object.defineProperty(this,'comment', {get: function(){return comment;},set: function(e){comment=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            Node.call(this,properties);
            this.comment=properties.comment;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = SingleLineComment;
        return new SingleLineComment(args && args.length && args[0]);
      };
    })();
    exports.SingleLineComment = SingleLineComment;
    var Expression = (function() {
      Expression.prototype = exports.Node();
      Expression.prototype.constructor = Expression;
      var Node = exports.Node.constructor;
      function Expression() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Expression;
        return new Expression(args && args.length && args[0]);
      };
    })();
    exports.Expression = Expression;
    var Literal = (function() {
      Literal.prototype = exports.Expression();
      Literal.prototype.constructor = Literal;
      var Expression = exports.Expression.constructor;
      function Literal() {
        function privateData() {
          this.value = null;
        }
        var p_vars = new privateData();
        var value = p_vars.value;
        Object.getOwnPropertyDescriptor(this,'value') || Object.defineProperty(this,'value', {get: function(){return value;},set: function(e){value=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            value:null
          };
          try {
            Expression.call(this,properties);
            this.value=properties.value;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Literal;
        return new Literal(args && args.length && args[0]);
      };
    })();
    exports.Literal = Literal;
    var ProtoLiteral = (function() {
      ProtoLiteral.prototype = exports.Literal();
      ProtoLiteral.prototype.constructor = ProtoLiteral;
      var Literal = exports.Literal.constructor;
      function ProtoLiteral() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            Literal.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ProtoLiteral;
        return new ProtoLiteral(args && args.length && args[0]);
      };
    })();
    exports.ProtoLiteral = ProtoLiteral;
    var Program = (function() {
      Program.prototype = exports.Node();
      Program.prototype.constructor = Program;
      var Node = exports.Node.constructor;
      function Program() {
        function privateData() {
          this.elements = null;
        }
        var p_vars = new privateData();
        var elements = p_vars.elements;
        Object.getOwnPropertyDescriptor(this,'elements') || Object.defineProperty(this,'elements', {get: function(){return elements;},set: function(e){elements=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            elements:[]
          };
          try {
            Node.call(this,properties);
            this.elements=properties.elements;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(Program.prototype,'children', {get: function(){      return this.elements;
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Program;
        return new Program(args && args.length && args[0]);
      };
    })();
    exports.Program = Program;
    var Function = (function() {
      Function.prototype = exports.Node();
      Function.prototype.constructor = Function;
      var Node = exports.Node.constructor;
      function Function() {
        function privateData() {
          this.body = null;
          this.id = null;
          this.params = null;
        }
        var p_vars = new privateData();
        var body = p_vars.body;
        Object.getOwnPropertyDescriptor(this,'body') || Object.defineProperty(this,'body', {get: function(){return body;},set: function(e){body=e;}});
        var id = p_vars.id;
        Object.getOwnPropertyDescriptor(this,'id') || Object.defineProperty(this,'id', {get: function(){return id;},set: function(e){id=e;}});
        var params = p_vars.params;
        Object.getOwnPropertyDescriptor(this,'params') || Object.defineProperty(this,'params', {get: function(){return params;},set: function(e){params=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            body:null,
            id:null,
            params:null
          };
          try {
            Node.call(this,properties);
            this.body=properties.body;
            this.id=properties.id;
            this.params=properties.params || [];
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Function;
        return new Function(args && args.length && args[0]);
      };
    })();
    exports.Function = Function;
    var Statement = (function() {
      Statement.prototype = exports.Node();
      Statement.prototype.constructor = Statement;
      var Node = exports.Node.constructor;
      function Statement() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Statement;
        return new Statement(args && args.length && args[0]);
      };
    })();
    exports.Statement = Statement;
    var EmptyStatement = (function() {
      EmptyStatement.prototype = exports.Statement();
      EmptyStatement.prototype.constructor = EmptyStatement;
      var Statement = exports.Statement.constructor;
      function EmptyStatement() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            Statement.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = EmptyStatement;
        return new EmptyStatement(args && args.length && args[0]);
      };
    })();
    exports.EmptyStatement = EmptyStatement;
    var Block = (function() {
      Block.prototype = exports.Statement();
      Block.prototype.constructor = Block;
      var Statement = exports.Statement.constructor;
      function Block() {
        function privateData() {
          this.statements = null;
        }
        var p_vars = new privateData();
        var statements = p_vars.statements;
        Object.getOwnPropertyDescriptor(this,'statements') || Object.defineProperty(this,'statements', {get: function(){return statements;},set: function(e){statements=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            statements:[]
          };
          try {
            Statement.call(this,properties);
            this.statements=properties.statements;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(Block.prototype,'children', {get: function(){      return this.statements;
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Block;
        return new Block(args && args.length && args[0]);
      };
    })();
    exports.Block = Block;
    var Catch = (function() {
      Catch.prototype = exports.Statement();
      Catch.prototype.constructor = Catch;
      var Statement = exports.Statement.constructor;
      function Catch() {
        function privateData() {
          this.block = null;
          this.identifier = null;
        }
        var p_vars = new privateData();
        var block = p_vars.block;
        Object.getOwnPropertyDescriptor(this,'block') || Object.defineProperty(this,'block', {get: function(){return block;},set: function(e){block=e;}});
        var identifier = p_vars.identifier;
        Object.getOwnPropertyDescriptor(this,'identifier') || Object.defineProperty(this,'identifier', {get: function(){return identifier;},set: function(e){identifier=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            block:null,
            identifier:null
          };
          Statement.call(this,properties);
          this.block=properties.block;
          this.identifier=properties.identifier;
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(Catch.prototype,'children', {get: function(){      return [this.block];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Catch;
        return new Catch(args && args.length && args[0]);
      };
    })();
    exports.Catch = Catch;
    var Constructor = (function() {
      Constructor.prototype = exports.Node();
      Constructor.prototype.constructor = Constructor;
      var Node = exports.Node.constructor;
      function Constructor() {
        function privateData() {
          this.elements = null;
          this.params = null;
        }
        var p_vars = new privateData();
        var elements = p_vars.elements;
        Object.getOwnPropertyDescriptor(this,'elements') || Object.defineProperty(this,'elements', {get: function(){return elements;},set: function(e){elements=e;}});
        var params = p_vars.params;
        Object.getOwnPropertyDescriptor(this,'params') || Object.defineProperty(this,'params', {get: function(){return params;},set: function(e){params=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            elements:null,
            params:null
          };
          try {
            Node.call(this,properties);
            this.elements=properties.elements;
            this.params=properties.params;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(Constructor.prototype,'children', {get: function(){      return [this.elements];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Constructor;
        return new Constructor(args && args.length && args[0]);
      };
    })();
    exports.Constructor = Constructor;
    var ExpressionStatement = (function() {
      ExpressionStatement.prototype = exports.Statement();
      ExpressionStatement.prototype.constructor = ExpressionStatement;
      var Statement = exports.Statement.constructor;
      function ExpressionStatement() {
        function privateData() {
          this.expression = null;
        }
        var p_vars = new privateData();
        var expression = p_vars.expression;
        Object.getOwnPropertyDescriptor(this,'expression') || Object.defineProperty(this,'expression', {get: function(){return expression;},set: function(e){expression=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            expression:null
          };
          try {
            Statement.call(this,properties);
            this.expression=properties.expression;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ExpressionStatement;
        return new ExpressionStatement(args && args.length && args[0]);
      };
    })();
    exports.ExpressionStatement = ExpressionStatement;
    var ParenthesizedExpression = (function() {
      ParenthesizedExpression.prototype = exports.Expression();
      ParenthesizedExpression.prototype.constructor = ParenthesizedExpression;
      var Expression = exports.Expression.constructor;
      function ParenthesizedExpression() {
        function privateData() {
          this.expression = null;
        }
        var p_vars = new privateData();
        var expression = p_vars.expression;
        Object.getOwnPropertyDescriptor(this,'expression') || Object.defineProperty(this,'expression', {get: function(){return expression;},set: function(e){expression=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            expression:null
          };
          try {
            Expression.call(this,properties);
            this.expression=properties.expression;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ParenthesizedExpression;
        return new ParenthesizedExpression(args && args.length && args[0]);
      };
    })();
    exports.ParenthesizedExpression = ParenthesizedExpression;
    var Finally = (function() {
      Finally.prototype = exports.Statement();
      Finally.prototype.constructor = Finally;
      var Statement = exports.Statement.constructor;
      function Finally() {
        function privateData() {
          this.block = null;
        }
        var p_vars = new privateData();
        var block = p_vars.block;
        Object.getOwnPropertyDescriptor(this,'block') || Object.defineProperty(this,'block', {get: function(){return block;},set: function(e){block=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            block:null
          };
          try {
            this.block=properties.block;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(Finally.prototype,'children', {get: function(){      return [this.block];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Finally;
        return new Finally(args && args.length && args[0]);
      };
    })();
    exports.Finally = Finally;
    var FunctionCallArguments = (function() {
      FunctionCallArguments.prototype = exports.Node();
      FunctionCallArguments.prototype.constructor = FunctionCallArguments;
      var Node = exports.Node.constructor;
      function FunctionCallArguments() {
        function privateData() {
          this.args = null;
        }
        var p_vars = new privateData();
        var args = p_vars.args;
        Object.getOwnPropertyDescriptor(this,'args') || Object.defineProperty(this,'args', {get: function(){return args;},set: function(e){args=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            args:null
          };
          try {
            Node.call(this,properties);
            this.args=properties.args;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = FunctionCallArguments;
        return new FunctionCallArguments(args && args.length && args[0]);
      };
    })();
    exports.FunctionCallArguments = FunctionCallArguments;
    var IfStatement = (function() {
      IfStatement.prototype = exports.Statement();
      IfStatement.prototype.constructor = IfStatement;
      var Statement = exports.Statement.constructor;
      function IfStatement() {
        function privateData() {
          this.condition = null;
          this.ifStatement = null;
          this.elseStatement = null;
        }
        var p_vars = new privateData();
        var condition = p_vars.condition;
        Object.getOwnPropertyDescriptor(this,'condition') || Object.defineProperty(this,'condition', {get: function(){return condition;},set: function(e){condition=e;}});
        var ifStatement = p_vars.ifStatement;
        Object.getOwnPropertyDescriptor(this,'ifStatement') || Object.defineProperty(this,'ifStatement', {get: function(){return ifStatement;},set: function(e){ifStatement=e;}});
        var elseStatement = p_vars.elseStatement;
        Object.getOwnPropertyDescriptor(this,'elseStatement') || Object.defineProperty(this,'elseStatement', {get: function(){return elseStatement;},set: function(e){elseStatement=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            args:null
          };
          try {
            Statement.call(this,properties);
            this.condition=properties.condition;
            this.ifStatement=properties.ifStatement;
            this.elseStatement=properties.elseStatement;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(IfStatement.prototype,'attributes', {get: function(){      return this.condition;
      }});
      Object.defineProperty(IfStatement.prototype,'children', {get: function(){      return [this.ifStatement,this.elseStatement];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = IfStatement;
        return new IfStatement(args && args.length && args[0]);
      };
    })();
    exports.IfStatement = IfStatement;
    var ImportStatement = (function() {
      ImportStatement.prototype = exports.Statement();
      ImportStatement.prototype.constructor = ImportStatement;
      var Statement = exports.Statement.constructor;
      function ImportStatement() {
        function privateData() {
          this.declarations = null;
        }
        var p_vars = new privateData();
        var declarations = p_vars.declarations;
        Object.getOwnPropertyDescriptor(this,'declarations') || Object.defineProperty(this,'declarations', {get: function(){return declarations;},set: function(e){declarations=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            declarations:null
          };
          try {
            Statement.call(this,properties);
            this.declarations=properties.declarations;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(ImportStatement.prototype,'children', {get: function(){      return [this.declarations];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ImportStatement;
        return new ImportStatement(args && args.length && args[0]);
      };
    })();
    exports.ImportStatement = ImportStatement;
    var LabeledStatement = (function() {
      LabeledStatement.prototype = exports.Statement();
      LabeledStatement.prototype.constructor = LabeledStatement;
      var Statement = exports.Statement.constructor;
      function LabeledStatement() {
        function privateData() {
          this.body = null;
          this.label = null;
        }
        var p_vars = new privateData();
        var body = p_vars.body;
        Object.getOwnPropertyDescriptor(this,'body') || Object.defineProperty(this,'body', {get: function(){return body;},set: function(e){body=e;}});
        var label = p_vars.label;
        Object.getOwnPropertyDescriptor(this,'label') || Object.defineProperty(this,'label', {get: function(){return label;},set: function(e){label=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            body:null,
            label:null
          };
          try {
            Statement.call(this,properties);
            this.body=properties.body;
            this.label=properties.label;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = LabeledStatement;
        return new LabeledStatement(args && args.length && args[0]);
      };
    })();
    exports.LabeledStatement = LabeledStatement;
    var BreakStatement = (function() {
      BreakStatement.prototype = exports.Statement();
      BreakStatement.prototype.constructor = BreakStatement;
      var Statement = exports.Statement.constructor;
      function BreakStatement() {
        function privateData() {
          this.label = null;
        }
        var p_vars = new privateData();
        var label = p_vars.label;
        Object.getOwnPropertyDescriptor(this,'label') || Object.defineProperty(this,'label', {get: function(){return label;},set: function(e){label=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            label:null
          };
          try {
            Statement.call(this,properties);
            this.label=properties.label;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = BreakStatement;
        return new BreakStatement(args && args.length && args[0]);
      };
    })();
    exports.BreakStatement = BreakStatement;
    var ContinueStatement = (function() {
      ContinueStatement.prototype = exports.Statement();
      ContinueStatement.prototype.constructor = ContinueStatement;
      var Statement = exports.Statement.constructor;
      function ContinueStatement() {
        function privateData() {
          this.label = null;
        }
        var p_vars = new privateData();
        var label = p_vars.label;
        Object.getOwnPropertyDescriptor(this,'label') || Object.defineProperty(this,'label', {get: function(){return label;},set: function(e){label=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            label:null
          };
          try {
            Statement.call(this,properties);
            this.label=properties.label;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ContinueStatement;
        return new ContinueStatement(args && args.length && args[0]);
      };
    })();
    exports.ContinueStatement = ContinueStatement;
    var WithStatement = (function() {
      WithStatement.prototype = exports.Statement();
      WithStatement.prototype.constructor = WithStatement;
      var Statement = exports.Statement.constructor;
      function WithStatement() {
        function privateData() {
          this.body = null;
          this.object = null;
        }
        var p_vars = new privateData();
        var body = p_vars.body;
        Object.getOwnPropertyDescriptor(this,'body') || Object.defineProperty(this,'body', {get: function(){return body;},set: function(e){body=e;}});
        var object = p_vars.object;
        Object.getOwnPropertyDescriptor(this,'object') || Object.defineProperty(this,'object', {get: function(){return object;},set: function(e){object=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            body:null,
            object:null
          };
          try {
            Statement.call(this,properties);
            this.body=properties.body;
            this.object=properties.object;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = WithStatement;
        return new WithStatement(args && args.length && args[0]);
      };
    })();
    exports.WithStatement = WithStatement;
    var SwitchStatement = (function() {
      SwitchStatement.prototype = exports.Statement();
      SwitchStatement.prototype.constructor = SwitchStatement;
      var Statement = exports.Statement.constructor;
      function SwitchStatement() {
        function privateData() {
          this.clauses = null;
          this.expression = null;
        }
        var p_vars = new privateData();
        var clauses = p_vars.clauses;
        Object.getOwnPropertyDescriptor(this,'clauses') || Object.defineProperty(this,'clauses', {get: function(){return clauses;},set: function(e){clauses=e;}});
        var expression = p_vars.expression;
        Object.getOwnPropertyDescriptor(this,'expression') || Object.defineProperty(this,'expression', {get: function(){return expression;},set: function(e){expression=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            clauses:null,
            expression:null
          };
          try {
            Statement.call(this,properties);
            this.clauses=properties.clauses || [];
            this.expression=properties.expression;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(SwitchStatement.prototype,'children', {get: function(){      return [this.expression].concat(this.clauses);
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = SwitchStatement;
        return new SwitchStatement(args && args.length && args[0]);
      };
    })();
    exports.SwitchStatement = SwitchStatement;
    var ReturnStatement = (function() {
      ReturnStatement.prototype = exports.Statement();
      ReturnStatement.prototype.constructor = ReturnStatement;
      var Statement = exports.Statement.constructor;
      function ReturnStatement() {
        function privateData() {
          this.value = null;
        }
        var p_vars = new privateData();
        var value = p_vars.value;
        Object.getOwnPropertyDescriptor(this,'value') || Object.defineProperty(this,'value', {get: function(){return value;},set: function(e){value=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            value:null
          };
          try {
            Statement.call(this,properties);
            this.value=properties.value;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(ReturnStatement.prototype,'children', {get: function(){      return [this.value];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ReturnStatement;
        return new ReturnStatement(args && args.length && args[0]);
      };
    })();
    exports.ReturnStatement = ReturnStatement;
    var ThrowStatement = (function() {
      ThrowStatement.prototype = exports.Statement();
      ThrowStatement.prototype.constructor = ThrowStatement;
      var Statement = exports.Statement.constructor;
      function ThrowStatement() {
        function privateData() {
          this.exception = null;
        }
        var p_vars = new privateData();
        var exception = p_vars.exception;
        Object.getOwnPropertyDescriptor(this,'exception') || Object.defineProperty(this,'exception', {get: function(){return exception;},set: function(e){exception=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            exception:null
          };
          try {
            Statement.call(this,properties);
            this.exception=properties.exception;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(ThrowStatement.prototype,'children', {get: function(){      return [this.exception];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ThrowStatement;
        return new ThrowStatement(args && args.length && args[0]);
      };
    })();
    exports.ThrowStatement = ThrowStatement;
    var TryStatement = (function() {
      TryStatement.prototype = exports.Statement();
      TryStatement.prototype.constructor = TryStatement;
      var Statement = exports.Statement.constructor;
      function TryStatement() {
        function privateData() {
          this.block = null;
          this.finalizer = null;
          this.handler = null;
        }
        var p_vars = new privateData();
        var block = p_vars.block;
        Object.getOwnPropertyDescriptor(this,'block') || Object.defineProperty(this,'block', {get: function(){return block;},set: function(e){block=e;}});
        var finalizer = p_vars.finalizer;
        Object.getOwnPropertyDescriptor(this,'finalizer') || Object.defineProperty(this,'finalizer', {get: function(){return finalizer;},set: function(e){finalizer=e;}});
        var handler = p_vars.handler;
        Object.getOwnPropertyDescriptor(this,'handler') || Object.defineProperty(this,'handler', {get: function(){return handler;},set: function(e){handler=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            block:null,
            finalizer:null,
            handler:null
          };
          try {
            Statement.call(this,properties);
            this.block=properties.block;
            this.finalizer=properties.finalizer;
            this.handler=properties.handler;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = TryStatement;
        return new TryStatement(args && args.length && args[0]);
      };
    })();
    exports.TryStatement = TryStatement;
    var Variable = (function() {
      Variable.prototype = exports.Expression();
      Variable.prototype.constructor = Variable;
      var Expression = exports.Expression.constructor;
      function Variable() {
        function privateData() {
          this.name = null;
        }
        var p_vars = new privateData();
        var name = p_vars.name;
        Object.getOwnPropertyDescriptor(this,'name') || Object.defineProperty(this,'name', {get: function(){return name;},set: function(e){name=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            name:null
          };
          try {
            Expression.call(this,properties);
            this.name=properties.name;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Variable;
        return new Variable(args && args.length && args[0]);
      };
    })();
    exports.Variable = Variable;
    var PrivateVariable = (function() {
      PrivateVariable.prototype = exports.Variable();
      PrivateVariable.prototype.constructor = PrivateVariable;
      var Variable = exports.Variable.constructor;
      function PrivateVariable() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            Variable.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = PrivateVariable;
        return new PrivateVariable(args && args.length && args[0]);
      };
    })();
    exports.PrivateVariable = PrivateVariable;
    var VariableExpression = (function() {
      VariableExpression.prototype = exports.Expression();
      VariableExpression.prototype.constructor = VariableExpression;
      var Expression = exports.Expression.constructor;
      function VariableExpression() {
        function privateData() {
          this.declarations = null;
        }
        var p_vars = new privateData();
        var declarations = p_vars.declarations;
        Object.getOwnPropertyDescriptor(this,'declarations') || Object.defineProperty(this,'declarations', {get: function(){return declarations;},set: function(e){declarations=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            declarations:[]
          };
          try {
            Expression.call(this,properties);
            this.declarations=properties.declarations;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(VariableExpression.prototype,'children', {get: function(){      return this.declarations;
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = VariableExpression;
        return new VariableExpression(args && args.length && args[0]);
      };
    })();
    exports.VariableExpression = VariableExpression;
    var VariableStatement = (function() {
      VariableStatement.prototype = exports.Statement();
      VariableStatement.prototype.constructor = VariableStatement;
      var Statement = exports.Statement.constructor;
      function VariableStatement() {
        function privateData() {
          this.declarations = null;
        }
        var p_vars = new privateData();
        var declarations = p_vars.declarations;
        Object.getOwnPropertyDescriptor(this,'declarations') || Object.defineProperty(this,'declarations', {get: function(){return declarations;},set: function(e){declarations=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            declarations:[]
          };
          try {
            Statement.call(this,properties);
            this.declarations=properties.declarations;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(VariableStatement.prototype,'children', {get: function(){      return this.declarations;
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = VariableStatement;
        return new VariableStatement(args && args.length && args[0]);
      };
    })();
    exports.VariableStatement = VariableStatement;
    var WhileStatement = (function() {
      WhileStatement.prototype = exports.Statement();
      WhileStatement.prototype.constructor = WhileStatement;
      var Statement = exports.Statement.constructor;
      function WhileStatement() {
        function privateData() {
          this.condition = null;
          this.statement = null;
        }
        var p_vars = new privateData();
        var condition = p_vars.condition;
        Object.getOwnPropertyDescriptor(this,'condition') || Object.defineProperty(this,'condition', {get: function(){return condition;},set: function(e){condition=e;}});
        var statement = p_vars.statement;
        Object.getOwnPropertyDescriptor(this,'statement') || Object.defineProperty(this,'statement', {get: function(){return statement;},set: function(e){statement=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            condition:null,
            statement:null
          };
          try {
            Statement.call(this,properties);
            this.condition=properties.condition;
            this.statement=properties.statement;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(WhileStatement.prototype,'children', {get: function(){      return [this.statement];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = WhileStatement;
        return new WhileStatement(args && args.length && args[0]);
      };
    })();
    exports.WhileStatement = WhileStatement;
    var DoWhileStatement = (function() {
      DoWhileStatement.prototype = exports.Statement();
      DoWhileStatement.prototype.constructor = DoWhileStatement;
      var Statement = exports.Statement.constructor;
      function DoWhileStatement() {
        function privateData() {
          this.condition = null;
          this.statement = null;
        }
        var p_vars = new privateData();
        var condition = p_vars.condition;
        Object.getOwnPropertyDescriptor(this,'condition') || Object.defineProperty(this,'condition', {get: function(){return condition;},set: function(e){condition=e;}});
        var statement = p_vars.statement;
        Object.getOwnPropertyDescriptor(this,'statement') || Object.defineProperty(this,'statement', {get: function(){return statement;},set: function(e){statement=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            condition:null,
            statement:null
          };
          try {
            Statement.call(this,properties);
            this.condition=properties.condition;
            this.statement=properties.statement;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(DoWhileStatement.prototype,'children', {get: function(){      return [this.statement];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = DoWhileStatement;
        return new DoWhileStatement(args && args.length && args[0]);
      };
    })();
    exports.DoWhileStatement = DoWhileStatement;
    var ForStatement = (function() {
      ForStatement.prototype = exports.Statement();
      ForStatement.prototype.constructor = ForStatement;
      var Statement = exports.Statement.constructor;
      function ForStatement() {
        function privateData() {
          this.initializer = null;
          this.counter = null;
          this.statement = null;
          this.test = null;
        }
        var p_vars = new privateData();
        var initializer = p_vars.initializer;
        Object.getOwnPropertyDescriptor(this,'initializer') || Object.defineProperty(this,'initializer', {get: function(){return initializer;},set: function(e){initializer=e;}});
        var counter = p_vars.counter;
        Object.getOwnPropertyDescriptor(this,'counter') || Object.defineProperty(this,'counter', {get: function(){return counter;},set: function(e){counter=e;}});
        var statement = p_vars.statement;
        Object.getOwnPropertyDescriptor(this,'statement') || Object.defineProperty(this,'statement', {get: function(){return statement;},set: function(e){statement=e;}});
        var test = p_vars.test;
        Object.getOwnPropertyDescriptor(this,'test') || Object.defineProperty(this,'test', {get: function(){return test;},set: function(e){test=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            initializer:null,
            counter:null,
            statement:null,
            test:null
          };
          try {
            Statement.call(this,properties);
            this.initializer=properties.initializer;
            this.counter=properties.counter;
            this.statement=properties.statement;
            this.test=properties.test;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(ForStatement.prototype,'children', {get: function(){      return [this.statement];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ForStatement;
        return new ForStatement(args && args.length && args[0]);
      };
    })();
    exports.ForStatement = ForStatement;
    var ForInStatement = (function() {
      ForInStatement.prototype = exports.Statement();
      ForInStatement.prototype.constructor = ForInStatement;
      var Statement = exports.Statement.constructor;
      function ForInStatement() {
        function privateData() {
          this.collection = null;
          this.iterator = null;
          this.statement = null;
        }
        var p_vars = new privateData();
        var collection = p_vars.collection;
        Object.getOwnPropertyDescriptor(this,'collection') || Object.defineProperty(this,'collection', {get: function(){return collection;},set: function(e){collection=e;}});
        var iterator = p_vars.iterator;
        Object.getOwnPropertyDescriptor(this,'iterator') || Object.defineProperty(this,'iterator', {get: function(){return iterator;},set: function(e){iterator=e;}});
        var statement = p_vars.statement;
        Object.getOwnPropertyDescriptor(this,'statement') || Object.defineProperty(this,'statement', {get: function(){return statement;},set: function(e){statement=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            collection:null,
            iterator:null,
            statement:null
          };
          try {
            Statement.call(this,properties);
            this.collection=properties.collection;
            this.iterator=properties.iterator;
            this.statement=properties.statement;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(ForInStatement.prototype,'children', {get: function(){      return [this.statement];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ForInStatement;
        return new ForInStatement(args && args.length && args[0]);
      };
    })();
    exports.ForInStatement = ForInStatement;
    var LetDeclaration = (function() {
      LetDeclaration.prototype = exports.Statement();
      LetDeclaration.prototype.constructor = LetDeclaration;
      var Statement = exports.Statement.constructor;
      function LetDeclaration() {
        function privateData() {
          this.body = null;
          this.head = null;
        }
        var p_vars = new privateData();
        var body = p_vars.body;
        Object.getOwnPropertyDescriptor(this,'body') || Object.defineProperty(this,'body', {get: function(){return body;},set: function(e){body=e;}});
        var head = p_vars.head;
        Object.getOwnPropertyDescriptor(this,'head') || Object.defineProperty(this,'head', {get: function(){return head;},set: function(e){head=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            body:null,
            head:null
          };
          try {
            Statement.call(this,properties);
            this.body=properties.body;
            this.head=properties.head;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = LetDeclaration;
        return new LetDeclaration(args && args.length && args[0]);
      };
    })();
    exports.LetDeclaration = LetDeclaration;
    var DebuggerStatement = (function() {
      DebuggerStatement.prototype = exports.Statement();
      DebuggerStatement.prototype.constructor = DebuggerStatement;
      var Statement = exports.Statement.constructor;
      function DebuggerStatement() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            Statement.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = DebuggerStatement;
        return new DebuggerStatement(args && args.length && args[0]);
      };
    })();
    exports.DebuggerStatement = DebuggerStatement;
    var Declaration = (function() {
      Declaration.prototype = exports.Statement();
      Declaration.prototype.constructor = Declaration;
      var Statement = exports.Statement.constructor;
      function Declaration() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            Statement.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Declaration;
        return new Declaration(args && args.length && args[0]);
      };
    })();
    exports.Declaration = Declaration;
    var ClassDeclaration = (function() {
      ClassDeclaration.prototype = exports.Declaration();
      ClassDeclaration.prototype.constructor = ClassDeclaration;
      var Declaration = exports.Declaration.constructor;
      function ClassDeclaration() {
        function privateData() {
          this.elements = null;
          this.heritage = null;
          this.name = null;
        }
        var p_vars = new privateData();
        var elements = p_vars.elements;
        Object.getOwnPropertyDescriptor(this,'elements') || Object.defineProperty(this,'elements', {get: function(){return elements;},set: function(e){elements=e;}});
        var heritage = p_vars.heritage;
        Object.getOwnPropertyDescriptor(this,'heritage') || Object.defineProperty(this,'heritage', {get: function(){return heritage;},set: function(e){heritage=e;}});
        var name = p_vars.name;
        Object.getOwnPropertyDescriptor(this,'name') || Object.defineProperty(this,'name', {get: function(){return name;},set: function(e){name=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            elements:null,
            heritage:null,
            name:null
          };
          try {
            Declaration.call(this,properties);
            this.elements=properties.elements;
            this.heritage=properties.heritage;
            this.name=properties.name;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(ClassDeclaration.prototype,'attributes', {get: function(){      return {
        name:this.name
      };
      }});
      Object.defineProperty(ClassDeclaration.prototype,'children', {get: function(){      return this.elements;
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ClassDeclaration;
        return new ClassDeclaration(args && args.length && args[0]);
      };
    })();
    exports.ClassDeclaration = ClassDeclaration;
    var Inheritance = (function() {
      Inheritance.prototype = exports.Node();
      Inheritance.prototype.constructor = Inheritance;
      var Node = exports.Node.constructor;
      function Inheritance() {
        function privateData() {
          this.name = null;
          this.inheritance = null;
        }
        var p_vars = new privateData();
        var name = p_vars.name;
        Object.getOwnPropertyDescriptor(this,'name') || Object.defineProperty(this,'name', {get: function(){return name;},set: function(e){name=e;}});
        var inheritance = p_vars.inheritance;
        Object.getOwnPropertyDescriptor(this,'inheritance') || Object.defineProperty(this,'inheritance', {get: function(){return inheritance;},set: function(e){inheritance=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            name:null,
            inheritance:null
          };
          try {
            Node.call(this,properties);
            this.name=properties.name;
            this.inheritance=properties.inheritance;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Inheritance;
        return new Inheritance(args && args.length && args[0]);
      };
    })();
    exports.Inheritance = Inheritance;
    var ConstDeclaration = (function() {
      ConstDeclaration.prototype = exports.Statement();
      ConstDeclaration.prototype.constructor = ConstDeclaration;
      var Statement = exports.Statement.constructor;
      function ConstDeclaration() {
        function privateData() {
          this.declarations = null;
        }
        var p_vars = new privateData();
        var declarations = p_vars.declarations;
        Object.getOwnPropertyDescriptor(this,'declarations') || Object.defineProperty(this,'declarations', {get: function(){return declarations;},set: function(e){declarations=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            declarations:null
          };
          try {
            Declaration.call(this,properties);
            this.declarations=properties.declarations;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(ConstDeclaration.prototype,'children', {get: function(){      return this.declarations;
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ConstDeclaration;
        return new ConstDeclaration(args && args.length && args[0]);
      };
    })();
    exports.ConstDeclaration = ConstDeclaration;
    var ExportStatement = (function() {
      ExportStatement.prototype = exports.Statement();
      ExportStatement.prototype.constructor = ExportStatement;
      var Statement = exports.Statement.constructor;
      function ExportStatement() {
        function privateData() {
          this.declarations = null;
        }
        var p_vars = new privateData();
        var declarations = p_vars.declarations;
        Object.getOwnPropertyDescriptor(this,'declarations') || Object.defineProperty(this,'declarations', {get: function(){return declarations;},set: function(e){declarations=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            declarations:null
          };
          try {
            Statement.call(this,properties);
            this.declarations=properties.declarations;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(ExportStatement.prototype,'children', {get: function(){      return this.declarations;
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ExportStatement;
        return new ExportStatement(args && args.length && args[0]);
      };
    })();
    exports.ExportStatement = ExportStatement;
    var Exports = (function() {
      Exports.prototype = exports.Node();
      Exports.prototype.constructor = Exports;
      var Node = exports.Node.constructor;
      function Exports() {
        function privateData() {
          this.exports = null;
        }
        var p_vars = new privateData();
        var exports = p_vars.exports;
        Object.getOwnPropertyDescriptor(this,'exports') || Object.defineProperty(this,'exports', {get: function(){return exports;},set: function(e){exports=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            exports:null
          };
          try {
            Node.call(this,properties);
            this.exports=properties.exports;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(Exports.prototype,'children', {get: function(){      return this.exports;
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Exports;
        return new Exports(args && args.length && args[0]);
      };
    })();
    exports.Exports = Exports;
    var ExportMapping = (function() {
      ExportMapping.prototype = exports.Declaration();
      ExportMapping.prototype.constructor = ExportMapping;
      var Declaration = exports.Declaration.constructor;
      function ExportMapping() {
        function privateData() {
          this.name = null;
          this.value = null;
        }
        var p_vars = new privateData();
        var name = p_vars.name;
        Object.getOwnPropertyDescriptor(this,'name') || Object.defineProperty(this,'name', {get: function(){return name;},set: function(e){name=e;}});
        var value = p_vars.value;
        Object.getOwnPropertyDescriptor(this,'value') || Object.defineProperty(this,'value', {get: function(){return value;},set: function(e){value=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            name:null,
            value:null
          };
          try {
            Declaration.call(this,properties);
            this.name=properties.name;
            this.value=properties.value;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(ExportMapping.prototype,'attributes', {get: function(){      return {
        name:this.name
      };
      }});
      Object.defineProperty(ExportMapping.prototype,'children', {get: function(){      return [this.value];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ExportMapping;
        return new ExportMapping(args && args.length && args[0]);
      };
    })();
    exports.ExportMapping = ExportMapping;
    var ExportSpecifier = (function() {
      ExportSpecifier.prototype = exports.Node();
      ExportSpecifier.prototype.constructor = ExportSpecifier;
      var Node = exports.Node.constructor;
      function ExportSpecifier() {
        function privateData() {
          this.alias = null;
          this.name = null;
        }
        var p_vars = new privateData();
        var alias = p_vars.alias;
        Object.getOwnPropertyDescriptor(this,'alias') || Object.defineProperty(this,'alias', {get: function(){return alias;},set: function(e){alias=e;}});
        var name = p_vars.name;
        Object.getOwnPropertyDescriptor(this,'name') || Object.defineProperty(this,'name', {get: function(){return name;},set: function(e){name=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            alias:null,
            name:null
          };
          try {
            Node.call(this,properties);
            this.alias=properties.alias;
            this.name=properties.name;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ExportSpecifier;
        return new ExportSpecifier(args && args.length && args[0]);
      };
    })();
    exports.ExportSpecifier = ExportSpecifier;
    var FormalParameter = (function() {
      FormalParameter.prototype = exports.Declaration();
      FormalParameter.prototype.constructor = FormalParameter;
      var Declaration = exports.Declaration.constructor;
      function FormalParameter() {
        function privateData() {
          this.name = null;
          this.value = null;
        }
        var p_vars = new privateData();
        var name = p_vars.name;
        Object.getOwnPropertyDescriptor(this,'name') || Object.defineProperty(this,'name', {get: function(){return name;},set: function(e){name=e;}});
        var value = p_vars.value;
        Object.getOwnPropertyDescriptor(this,'value') || Object.defineProperty(this,'value', {get: function(){return value;},set: function(e){value=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            name:null,
            value:null
          };
          try {
            Declaration.call(this,properties);
            this.name=properties.name;
            this.value=properties.value;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(FormalParameter.prototype,'attributes', {get: function(){      return {
        name:this.name
      };
      }});
      Object.defineProperty(FormalParameter.prototype,'children', {get: function(){      return [this.value];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = FormalParameter;
        return new FormalParameter(args && args.length && args[0]);
      };
    })();
    exports.FormalParameter = FormalParameter;
    var FunctionDeclaration = (function() {
      FunctionDeclaration.prototype = exports.Declaration();
      FunctionDeclaration.prototype.constructor = FunctionDeclaration;
      var Declaration = exports.Declaration.constructor;
      function FunctionDeclaration() {
        function privateData() {
          this.name = null;
          this.params = null;
        }
        var p_vars = new privateData();
        var name = p_vars.name;
        Object.getOwnPropertyDescriptor(this,'name') || Object.defineProperty(this,'name', {get: function(){return name;},set: function(e){name=e;}});
        var params = p_vars.params;
        Object.getOwnPropertyDescriptor(this,'params') || Object.defineProperty(this,'params', {get: function(){return params;},set: function(e){params=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            elements:null,
            name:null,
            params:null
          };
          try {
            Declaration.call(this,properties);
            this.elements=properties.elements;
            this.name=properties.name;
            this.params=properties.params;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(FunctionDeclaration.prototype,'attributes', {get: function(){      return {
        name:this.name
      };
      }});
      Object.defineProperty(FunctionDeclaration.prototype,'children', {get: function(){      return this.elements;
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = FunctionDeclaration;
        return new FunctionDeclaration(args && args.length && args[0]);
      };
    })();
    exports.FunctionDeclaration = FunctionDeclaration;
    var LetDeclaration = (function() {
      LetDeclaration.prototype = exports.Declaration();
      LetDeclaration.prototype.constructor = LetDeclaration;
      var Declaration = exports.Declaration.constructor;
      function LetDeclaration() {
        function privateData() {
          this.declarations = null;
        }
        var p_vars = new privateData();
        var declarations = p_vars.declarations;
        Object.getOwnPropertyDescriptor(this,'declarations') || Object.defineProperty(this,'declarations', {get: function(){return declarations;},set: function(e){declarations=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            declarations:null
          };
          try {
            Declaration.call(this,properties);
            this.declarations=properties.declarations;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(LetDeclaration.prototype,'children', {get: function(){      return this.declarations;
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = LetDeclaration;
        return new LetDeclaration(args && args.length && args[0]);
      };
    })();
    exports.LetDeclaration = LetDeclaration;
    var ModuleDeclaration = (function() {
      ModuleDeclaration.prototype = exports.Declaration();
      ModuleDeclaration.prototype.constructor = ModuleDeclaration;
      var Declaration = exports.Declaration.constructor;
      function ModuleDeclaration() {
        function privateData() {
          this.name = null;
          this.expression = null;
        }
        var p_vars = new privateData();
        var name = p_vars.name;
        Object.getOwnPropertyDescriptor(this,'name') || Object.defineProperty(this,'name', {get: function(){return name;},set: function(e){name=e;}});
        var expression = p_vars.expression;
        Object.getOwnPropertyDescriptor(this,'expression') || Object.defineProperty(this,'expression', {get: function(){return expression;},set: function(e){expression=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            name:null,
            value:null
          };
          try {
            Declaration.call(this,properties);
            this.name=properties.name;
            this.expression=properties.expression;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(ModuleDeclaration.prototype,'attributes', {get: function(){      return {
        name:this.name
      };
      }});
      Object.defineProperty(ModuleDeclaration.prototype,'children', {get: function(){      return [this.expression];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ModuleDeclaration;
        return new ModuleDeclaration(args && args.length && args[0]);
      };
    })();
    exports.ModuleDeclaration = ModuleDeclaration;
    var ModuleExpression = (function() {
      ModuleExpression.prototype = exports.Expression();
      ModuleExpression.prototype.constructor = ModuleExpression;
      var Expression = exports.Expression.constructor;
      function ModuleExpression() {
        function privateData() {
          this.nameparts = null;
        }
        var p_vars = new privateData();
        var nameparts = p_vars.nameparts;
        Object.getOwnPropertyDescriptor(this,'nameparts') || Object.defineProperty(this,'nameparts', {get: function(){return nameparts;},set: function(e){nameparts=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            nameparts:[]
          };
          try {
            Expression.call(this,properties);
            this.nameparts=properties.nameparts;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(ModuleExpression.prototype,'children', {get: function(){      return this.nameparts;
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ModuleExpression;
        return new ModuleExpression(args && args.length && args[0]);
      };
    })();
    exports.ModuleExpression = ModuleExpression;
    var ImportDeclaration = (function() {
      ImportDeclaration.prototype = exports.Declaration();
      ImportDeclaration.prototype.constructor = ImportDeclaration;
      var Declaration = exports.Declaration.constructor;
      function ImportDeclaration() {
        function privateData() {
          this.name = null;
          this.value = null;
        }
        var p_vars = new privateData();
        var name = p_vars.name;
        Object.getOwnPropertyDescriptor(this,'name') || Object.defineProperty(this,'name', {get: function(){return name;},set: function(e){name=e;}});
        var value = p_vars.value;
        Object.getOwnPropertyDescriptor(this,'value') || Object.defineProperty(this,'value', {get: function(){return value;},set: function(e){value=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            name:null,
            value:null
          };
          try {
            Declaration.call(this,properties);
            this.name=properties.name;
            this.value=properties.value;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(ImportDeclaration.prototype,'attributes', {get: function(){      return {
        name:this.name
      };
      }});
      Object.defineProperty(ImportDeclaration.prototype,'children', {get: function(){      return [this.value];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ImportDeclaration;
        return new ImportDeclaration(args && args.length && args[0]);
      };
    })();
    exports.ImportDeclaration = ImportDeclaration;
    var Imports = (function() {
      Imports.prototype = exports.Node();
      Imports.prototype.constructor = Imports;
      var Node = exports.Node.constructor;
      function Imports() {
        function privateData() {
          this.imports = null;
        }
        var p_vars = new privateData();
        var imports = p_vars.imports;
        Object.getOwnPropertyDescriptor(this,'imports') || Object.defineProperty(this,'imports', {get: function(){return imports;},set: function(e){imports=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            imports:null
          };
          try {
            Node.call(this,properties);
            this.imports=properties.imports;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(Imports.prototype,'children', {get: function(){      return this.imports;
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Imports;
        return new Imports(args && args.length && args[0]);
      };
    })();
    exports.Imports = Imports;
    var ImportSpecifier = (function() {
      ImportSpecifier.prototype = exports.Node();
      ImportSpecifier.prototype.constructor = ImportSpecifier;
      var Node = exports.Node.constructor;
      function ImportSpecifier() {
        function privateData() {
          this.alias = null;
          this.name = null;
        }
        var p_vars = new privateData();
        var alias = p_vars.alias;
        Object.getOwnPropertyDescriptor(this,'alias') || Object.defineProperty(this,'alias', {get: function(){return alias;},set: function(e){alias=e;}});
        var name = p_vars.name;
        Object.getOwnPropertyDescriptor(this,'name') || Object.defineProperty(this,'name', {get: function(){return name;},set: function(e){name=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            alias:null,
            name:null
          };
          try {
            Node.call(this,properties);
            this.alias=properties.alias;
            this.name=properties.name;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ImportSpecifier;
        return new ImportSpecifier(args && args.length && args[0]);
      };
    })();
    exports.ImportSpecifier = ImportSpecifier;
    var ModuleDefinition = (function() {
      ModuleDefinition.prototype = exports.Declaration();
      ModuleDefinition.prototype.constructor = ModuleDefinition;
      var Declaration = exports.Declaration.constructor;
      function ModuleDefinition() {
        function privateData() {
          this.elements = null;
          this.name = null;
        }
        var p_vars = new privateData();
        var elements = p_vars.elements;
        Object.getOwnPropertyDescriptor(this,'elements') || Object.defineProperty(this,'elements', {get: function(){return elements;},set: function(e){elements=e;}});
        var name = p_vars.name;
        Object.getOwnPropertyDescriptor(this,'name') || Object.defineProperty(this,'name', {get: function(){return name;},set: function(e){name=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            elements:null,
            name:null
          };
          try {
            Declaration.call(this,properties);
            this.elements=properties.elements;
            this.name=properties.name;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(ModuleDefinition.prototype,'attributes', {get: function(){      return {
        name:this.name
      };
      }});
      Object.defineProperty(ModuleDefinition.prototype,'children', {get: function(){      return this.elements;
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ModuleDefinition;
        return new ModuleDefinition(args && args.length && args[0]);
      };
    })();
    exports.ModuleDefinition = ModuleDefinition;
    var ModuleStatement = (function() {
      ModuleStatement.prototype = exports.Statement();
      ModuleStatement.prototype.constructor = ModuleStatement;
      var Statement = exports.Statement.constructor;
      function ModuleStatement() {
        function privateData() {
          this.declarations = null;
        }
        var p_vars = new privateData();
        var declarations = p_vars.declarations;
        Object.getOwnPropertyDescriptor(this,'declarations') || Object.defineProperty(this,'declarations', {get: function(){return declarations;},set: function(e){declarations=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            declarations:null
          };
          try {
            Statement.call(this,properties);
            this.declarations=properties.declarations;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(ModuleStatement.prototype,'children', {get: function(){      return this.declarations;
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ModuleStatement;
        return new ModuleStatement(args && args.length && args[0]);
      };
    })();
    exports.ModuleStatement = ModuleStatement;
    var VariableDeclaration = (function() {
      VariableDeclaration.prototype = exports.Declaration();
      VariableDeclaration.prototype.constructor = VariableDeclaration;
      var Declaration = exports.Declaration.constructor;
      function VariableDeclaration() {
        function privateData() {
          this.name = null;
          this.value = null;
        }
        var p_vars = new privateData();
        var name = p_vars.name;
        Object.getOwnPropertyDescriptor(this,'name') || Object.defineProperty(this,'name', {get: function(){return name;},set: function(e){name=e;}});
        var value = p_vars.value;
        Object.getOwnPropertyDescriptor(this,'value') || Object.defineProperty(this,'value', {get: function(){return value;},set: function(e){value=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            name:null,
            value:null
          };
          try {
            Declaration.call(this,properties);
            this.name=properties.name;
            this.value=properties.value;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = VariableDeclaration;
        return new VariableDeclaration(args && args.length && args[0]);
      };
    })();
    exports.VariableDeclaration = VariableDeclaration;
    var ThisExpression = (function() {
      ThisExpression.prototype = exports.Expression();
      ThisExpression.prototype.constructor = ThisExpression;
      var Expression = exports.Expression.constructor;
      function ThisExpression() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            Expression.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ThisExpression;
        return new ThisExpression(args && args.length && args[0]);
      };
    })();
    exports.ThisExpression = ThisExpression;
    var ArrayExpression = (function() {
      ArrayExpression.prototype = exports.Expression();
      ArrayExpression.prototype.constructor = ArrayExpression;
      var Expression = exports.Expression.constructor;
      function ArrayExpression() {
        function privateData() {
          this.elements = null;
        }
        var p_vars = new privateData();
        var elements = p_vars.elements;
        Object.getOwnPropertyDescriptor(this,'elements') || Object.defineProperty(this,'elements', {get: function(){return elements;},set: function(e){elements=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            elements:null
          };
          try {
            Expression.call(this,properties);
            this.elements=properties.elements;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ArrayExpression;
        return new ArrayExpression(args && args.length && args[0]);
      };
    })();
    exports.ArrayExpression = ArrayExpression;
    var ObjectExpression = (function() {
      ObjectExpression.prototype = exports.Expression();
      ObjectExpression.prototype.constructor = ObjectExpression;
      var Expression = exports.Expression.constructor;
      function ObjectExpression() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            Expression.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ObjectExpression;
        return new ObjectExpression(args && args.length && args[0]);
      };
    })();
    exports.ObjectExpression = ObjectExpression;
    var PostfixExpression = (function() {
      PostfixExpression.prototype = exports.Expression();
      PostfixExpression.prototype.constructor = PostfixExpression;
      var Expression = exports.Expression.constructor;
      function PostfixExpression() {
        function privateData() {
          this.expression = null;
          this.operator = null;
        }
        var p_vars = new privateData();
        var expression = p_vars.expression;
        Object.getOwnPropertyDescriptor(this,'expression') || Object.defineProperty(this,'expression', {get: function(){return expression;},set: function(e){expression=e;}});
        var operator = p_vars.operator;
        Object.getOwnPropertyDescriptor(this,'operator') || Object.defineProperty(this,'operator', {get: function(){return operator;},set: function(e){operator=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            expression:null,
            operator:null
          };
          try {
            Expression.call(this,properties);
            this.expression=properties.expression;
            this.operator=properties.operator;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(PostfixExpression.prototype,'children', {get: function(){      return [this.expression];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = PostfixExpression;
        return new PostfixExpression(args && args.length && args[0]);
      };
    })();
    exports.PostfixExpression = PostfixExpression;
    var FunctionExpression = (function() {
      FunctionExpression.prototype = exports.Expression();
      FunctionExpression.prototype.constructor = FunctionExpression;
      var Expression = exports.Expression.constructor;
      function FunctionExpression() {
        function privateData() {
          this.name = null;
          this.params = null;
          this.elements = null;
        }
        var p_vars = new privateData();
        var name = p_vars.name;
        Object.getOwnPropertyDescriptor(this,'name') || Object.defineProperty(this,'name', {get: function(){return name;},set: function(e){name=e;}});
        var params = p_vars.params;
        Object.getOwnPropertyDescriptor(this,'params') || Object.defineProperty(this,'params', {get: function(){return params;},set: function(e){params=e;}});
        var elements = p_vars.elements;
        Object.getOwnPropertyDescriptor(this,'elements') || Object.defineProperty(this,'elements', {get: function(){return elements;},set: function(e){elements=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            name:null,
            params:null,
            elements:null
          };
          try {
            Expression.call(this,properties);
            this.name=properties.name;
            this.params=properties.params;
            this.elements=properties.elements;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(FunctionExpression.prototype,'children', {get: function(){      return this.elements;
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = FunctionExpression;
        return new FunctionExpression(args && args.length && args[0]);
      };
    })();
    exports.FunctionExpression = FunctionExpression;
    var SequenceExpression = (function() {
      SequenceExpression.prototype = exports.Expression();
      SequenceExpression.prototype.constructor = SequenceExpression;
      var Expression = exports.Expression.constructor;
      function SequenceExpression() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            Expression.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = SequenceExpression;
        return new SequenceExpression(args && args.length && args[0]);
      };
    })();
    exports.SequenceExpression = SequenceExpression;
    var UnaryExpression = (function() {
      UnaryExpression.prototype = exports.Expression();
      UnaryExpression.prototype.constructor = UnaryExpression;
      var Expression = exports.Expression.constructor;
      function UnaryExpression() {
        function privateData() {
          this.expression = null;
          this.operator = null;
        }
        var p_vars = new privateData();
        var expression = p_vars.expression;
        Object.getOwnPropertyDescriptor(this,'expression') || Object.defineProperty(this,'expression', {get: function(){return expression;},set: function(e){expression=e;}});
        var operator = p_vars.operator;
        Object.getOwnPropertyDescriptor(this,'operator') || Object.defineProperty(this,'operator', {get: function(){return operator;},set: function(e){operator=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            condition:null,
            statement:null
          };
          try {
            Expression.call(this,properties);
            this.expression=properties.expression;
            this.operator=properties.operator;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(UnaryExpression.prototype,'children', {get: function(){      return [this.expression];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = UnaryExpression;
        return new UnaryExpression(args && args.length && args[0]);
      };
    })();
    exports.UnaryExpression = UnaryExpression;
    var BinaryExpression = (function() {
      BinaryExpression.prototype = exports.Expression();
      BinaryExpression.prototype.constructor = BinaryExpression;
      var Expression = exports.Expression.constructor;
      function BinaryExpression() {
        function privateData() {
          this.left = null;
          this.operator = null;
          this.right = null;
        }
        var p_vars = new privateData();
        var left = p_vars.left;
        Object.getOwnPropertyDescriptor(this,'left') || Object.defineProperty(this,'left', {get: function(){return left;},set: function(e){left=e;}});
        var operator = p_vars.operator;
        Object.getOwnPropertyDescriptor(this,'operator') || Object.defineProperty(this,'operator', {get: function(){return operator;},set: function(e){operator=e;}});
        var right = p_vars.right;
        Object.getOwnPropertyDescriptor(this,'right') || Object.defineProperty(this,'right', {get: function(){return right;},set: function(e){right=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            left:null,
            operator:null,
            right:null
          };
          try {
            Expression.call(this,properties);
            this.left=properties.left;
            this.operator=properties.operator;
            this.right=properties.right;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(BinaryExpression.prototype,'attributes', {get: function(){      return {
        name:'operator',
        value:this.operator
      };
      }});
      Object.defineProperty(BinaryExpression.prototype,'children', {get: function(){      return [this.left,this.right];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = BinaryExpression;
        return new BinaryExpression(args && args.length && args[0]);
      };
    })();
    exports.BinaryExpression = BinaryExpression;
    var AssignmentExpression = (function() {
      AssignmentExpression.prototype = exports.Expression();
      AssignmentExpression.prototype.constructor = AssignmentExpression;
      var Expression = exports.Expression.constructor;
      function AssignmentExpression() {
        function privateData() {
          this.left = null;
          this.operator = null;
          this.right = null;
        }
        var p_vars = new privateData();
        var left = p_vars.left;
        Object.getOwnPropertyDescriptor(this,'left') || Object.defineProperty(this,'left', {get: function(){return left;},set: function(e){left=e;}});
        var operator = p_vars.operator;
        Object.getOwnPropertyDescriptor(this,'operator') || Object.defineProperty(this,'operator', {get: function(){return operator;},set: function(e){operator=e;}});
        var right = p_vars.right;
        Object.getOwnPropertyDescriptor(this,'right') || Object.defineProperty(this,'right', {get: function(){return right;},set: function(e){right=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            left:null,
            operator:null,
            right:null
          };
          try {
            Expression.call(this,properties);
            this.left=properties.left;
            this.operator=properties.operator;
            this.right=properties.right;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(AssignmentExpression.prototype,'attributes', {get: function(){      return {
        name:'operator',
        value:this.operator
      };
      }});
      Object.defineProperty(AssignmentExpression.prototype,'children', {get: function(){      return [this.left,this.right];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = AssignmentExpression;
        return new AssignmentExpression(args && args.length && args[0]);
      };
    })();
    exports.AssignmentExpression = AssignmentExpression;
    var ConditionalExpression = (function() {
      ConditionalExpression.prototype = exports.Expression();
      ConditionalExpression.prototype.constructor = ConditionalExpression;
      var Expression = exports.Expression.constructor;
      function ConditionalExpression() {
        function privateData() {
          this.condition = null;
          this.falseExpression = null;
          this.trueExpression = null;
        }
        var p_vars = new privateData();
        var condition = p_vars.condition;
        Object.getOwnPropertyDescriptor(this,'condition') || Object.defineProperty(this,'condition', {get: function(){return condition;},set: function(e){condition=e;}});
        var falseExpression = p_vars.falseExpression;
        Object.getOwnPropertyDescriptor(this,'falseExpression') || Object.defineProperty(this,'falseExpression', {get: function(){return falseExpression;},set: function(e){falseExpression=e;}});
        var trueExpression = p_vars.trueExpression;
        Object.getOwnPropertyDescriptor(this,'trueExpression') || Object.defineProperty(this,'trueExpression', {get: function(){return trueExpression;},set: function(e){trueExpression=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            condition:null,
            falseExpression:null,
            trueExpression:null
          };
          try {
            Expression.call(this,properties);
            this.condition=properties.condition;
            this.trueExpression=properties.trueExpression;
            this.falseExpression=properties.falseExpression;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(ConditionalExpression.prototype,'children', {get: function(){      return [this.condition];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ConditionalExpression;
        return new ConditionalExpression(args && args.length && args[0]);
      };
    })();
    exports.ConditionalExpression = ConditionalExpression;
    var NewOperator = (function() {
      NewOperator.prototype = exports.Expression();
      NewOperator.prototype.constructor = NewOperator;
      var Expression = exports.Expression.constructor;
      function NewOperator() {
        function privateData() {
          this.args = null;
          this.cons = null;
        }
        var p_vars = new privateData();
        var args = p_vars.args;
        Object.getOwnPropertyDescriptor(this,'args') || Object.defineProperty(this,'args', {get: function(){return args;},set: function(e){args=e;}});
        var cons = p_vars.cons;
        Object.getOwnPropertyDescriptor(this,'cons') || Object.defineProperty(this,'cons', {get: function(){return cons;},set: function(e){cons=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            args:null,
            cons:null
          };
          try {
            Expression.call(this,properties);
            this.args=properties.args;
            this.cons=properties.cons;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(NewOperator.prototype,'children', {get: function(){      return [this.cons];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = NewOperator;
        return new NewOperator(args && args.length && args[0]);
      };
    })();
    exports.NewOperator = NewOperator;
    var CallExpression = (function() {
      CallExpression.prototype = exports.Expression();
      CallExpression.prototype.constructor = CallExpression;
      var Expression = exports.Expression.constructor;
      function CallExpression() {
        function privateData() {
          this.args = null;
          this.name = null;
        }
        var p_vars = new privateData();
        var args = p_vars.args;
        Object.getOwnPropertyDescriptor(this,'args') || Object.defineProperty(this,'args', {get: function(){return args;},set: function(e){args=e;}});
        var name = p_vars.name;
        Object.getOwnPropertyDescriptor(this,'name') || Object.defineProperty(this,'name', {get: function(){return name;},set: function(e){name=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            args:null,
            name:null
          };
          try {
            Expression.call(this,properties);
            this.args=properties.args;
            this.name=properties.name;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(CallExpression.prototype,'attributes', {get: function(){      return {
        args:this.args
      };
      }});
      Object.defineProperty(CallExpression.prototype,'children', {get: function(){      return [this.name].concat(this.args);
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = CallExpression;
        return new CallExpression(args && args.length && args[0]);
      };
    })();
    exports.CallExpression = CallExpression;
    var DefaultClause = (function() {
      DefaultClause.prototype = exports.Node();
      DefaultClause.prototype.constructor = DefaultClause;
      var Node = exports.Node.constructor;
      function DefaultClause() {
        function privateData() {
          this.statements = null;
        }
        var p_vars = new privateData();
        var statements = p_vars.statements;
        Object.getOwnPropertyDescriptor(this,'statements') || Object.defineProperty(this,'statements', {get: function(){return statements;},set: function(e){statements=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            statements:[]
          };
          try {
            Node.call(this,properties);
            this.statements=properties.statements;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(DefaultClause.prototype,'children', {get: function(){      return this.statements;
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = DefaultClause;
        return new DefaultClause(args && args.length && args[0]);
      };
    })();
    exports.DefaultClause = DefaultClause;
    var CaseClause = (function() {
      CaseClause.prototype = exports.Node();
      CaseClause.prototype.constructor = CaseClause;
      var Node = exports.Node.constructor;
      function CaseClause() {
        function privateData() {
          this.selector = null;
          this.statements = null;
        }
        var p_vars = new privateData();
        var selector = p_vars.selector;
        Object.getOwnPropertyDescriptor(this,'selector') || Object.defineProperty(this,'selector', {get: function(){return selector;},set: function(e){selector=e;}});
        var statements = p_vars.statements;
        Object.getOwnPropertyDescriptor(this,'statements') || Object.defineProperty(this,'statements', {get: function(){return statements;},set: function(e){statements=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            selector:null,
            statements:[]
          };
          try {
            Node.call(this,properties);
            this.selector=properties.selector;
            this.statements=properties.statements;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(CaseClause.prototype,'children', {get: function(){      return [this.selector].concat(this.statements);
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = CaseClause;
        return new CaseClause(args && args.length && args[0]);
      };
    })();
    exports.CaseClause = CaseClause;
    var CatchClause = (function() {
      CatchClause.prototype = exports.Node();
      CatchClause.prototype.constructor = CatchClause;
      var Node = exports.Node.constructor;
      function CatchClause() {
        function privateData() {
          this.body = null;
          this.guard = null;
          this.param = null;
        }
        var p_vars = new privateData();
        var body = p_vars.body;
        Object.getOwnPropertyDescriptor(this,'body') || Object.defineProperty(this,'body', {get: function(){return body;},set: function(e){body=e;}});
        var guard = p_vars.guard;
        Object.getOwnPropertyDescriptor(this,'guard') || Object.defineProperty(this,'guard', {get: function(){return guard;},set: function(e){guard=e;}});
        var param = p_vars.param;
        Object.getOwnPropertyDescriptor(this,'param') || Object.defineProperty(this,'param', {get: function(){return param;},set: function(e){param=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            body:null,
            guard:null,
            param:null
          };
          try {
            Node.call(this,properties);
            this.body=properties.body;
            this.guard=properties.guard;
            this.param=properties.param;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = CatchClause;
        return new CatchClause(args && args.length && args[0]);
      };
    })();
    exports.CatchClause = CatchClause;
    var Identifier = (function() {
      Identifier.prototype = exports.Expression();
      Identifier.prototype.constructor = Identifier;
      var Expression = exports.Expression.constructor;
      function Identifier() {
        function privateData() {
          this.name = null;
        }
        var p_vars = new privateData();
        var name = p_vars.name;
        Object.getOwnPropertyDescriptor(this,'name') || Object.defineProperty(this,'name', {get: function(){return name;},set: function(e){name=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            name:null
          };
          try {
            Expression.call(this,properties);
            this.name=properties.name;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Identifier;
        return new Identifier(args && args.length && args[0]);
      };
    })();
    exports.Identifier = Identifier;
    var PrivateIdentifier = (function() {
      PrivateIdentifier.prototype = exports.Identifier();
      PrivateIdentifier.prototype.constructor = PrivateIdentifier;
      var Identifier = exports.Identifier.constructor;
      function PrivateIdentifier() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            Identifier.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = PrivateIdentifier;
        return new PrivateIdentifier(args && args.length && args[0]);
      };
    })();
    exports.PrivateIdentifier = PrivateIdentifier;
    var ImportIdentifier = (function() {
      ImportIdentifier.prototype = exports.Identifier();
      ImportIdentifier.prototype.constructor = ImportIdentifier;
      var Identifier = exports.Identifier.constructor;
      function ImportIdentifier() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            Identifier.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ImportIdentifier;
        return new ImportIdentifier(args && args.length && args[0]);
      };
    })();
    exports.ImportIdentifier = ImportIdentifier;
    var DataDefinition = (function() {
      DataDefinition.prototype = exports.Expression();
      DataDefinition.prototype.constructor = DataDefinition;
      var Expression = exports.Expression.constructor;
      function DataDefinition() {
        function privateData() {
          this.declarations = null;
        }
        var p_vars = new privateData();
        var declarations = p_vars.declarations;
        Object.getOwnPropertyDescriptor(this,'declarations') || Object.defineProperty(this,'declarations', {get: function(){return declarations;},set: function(e){declarations=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            declarations:null
          };
          try {
            Expression.call(this,properties);
            this.declarations=properties.declarations;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(DataDefinition.prototype,'children', {get: function(){      return [this.declarations];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = DataDefinition;
        return new DataDefinition(args && args.length && args[0]);
      };
    })();
    exports.DataDefinition = DataDefinition;
    var MethodDefinition = (function() {
      MethodDefinition.prototype = exports.Declaration();
      MethodDefinition.prototype.constructor = MethodDefinition;
      var Declaration = exports.Declaration.constructor;
      function MethodDefinition() {
        function privateData() {
          this.elements = null;
          this.name = null;
          this.params = null;
        }
        var p_vars = new privateData();
        var elements = p_vars.elements;
        Object.getOwnPropertyDescriptor(this,'elements') || Object.defineProperty(this,'elements', {get: function(){return elements;},set: function(e){elements=e;}});
        var name = p_vars.name;
        Object.getOwnPropertyDescriptor(this,'name') || Object.defineProperty(this,'name', {get: function(){return name;},set: function(e){name=e;}});
        var params = p_vars.params;
        Object.getOwnPropertyDescriptor(this,'params') || Object.defineProperty(this,'params', {get: function(){return params;},set: function(e){params=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            elements:null,
            name:null,
            params:null
          };
          try {
            Declaration.call(this,properties);
            this.elements=properties.elements;
            this.name=properties.name;
            this.params=properties.params;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(MethodDefinition.prototype,'attributes', {get: function(){      return {
        name:this.name
      };
      }});
      Object.defineProperty(MethodDefinition.prototype,'children', {get: function(){      return this.elements;
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = MethodDefinition;
        return new MethodDefinition(args && args.length && args[0]);
      };
    })();
    exports.MethodDefinition = MethodDefinition;
    var PrivatePropertyDefinition = (function() {
      PrivatePropertyDefinition.prototype = exports.Declaration();
      PrivatePropertyDefinition.prototype.constructor = PrivatePropertyDefinition;
      var Declaration = exports.Declaration.constructor;
      function PrivatePropertyDefinition() {
        function privateData() {
          this.property = null;
        }
        var p_vars = new privateData();
        var property = p_vars.property;
        Object.getOwnPropertyDescriptor(this,'property') || Object.defineProperty(this,'property', {get: function(){return property;},set: function(e){property=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            property:null
          };
          try {
            Declaration.call(this,properties);
            this.property=properties.property;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(PrivatePropertyDefinition.prototype,'children', {get: function(){      return this.property;
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = PrivatePropertyDefinition;
        return new PrivatePropertyDefinition(args && args.length && args[0]);
      };
    })();
    exports.PrivatePropertyDefinition = PrivatePropertyDefinition;
    var PublicPropertyDefinition = (function() {
      PublicPropertyDefinition.prototype = exports.Declaration();
      PublicPropertyDefinition.prototype.constructor = PublicPropertyDefinition;
      var Declaration = exports.Declaration.constructor;
      function PublicPropertyDefinition() {
        function privateData() {
          this.property = null;
        }
        var p_vars = new privateData();
        var property = p_vars.property;
        Object.getOwnPropertyDescriptor(this,'property') || Object.defineProperty(this,'property', {get: function(){return property;},set: function(e){property=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            property:null
          };
          try {
            Declaration.call(this,properties);
            this.property=properties.property;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(PublicPropertyDefinition.prototype,'children', {get: function(){      return this.property;
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = PublicPropertyDefinition;
        return new PublicPropertyDefinition(args && args.length && args[0]);
      };
    })();
    exports.PublicPropertyDefinition = PublicPropertyDefinition;
    var PropertyAccess = (function() {
      PropertyAccess.prototype = exports.Identifier();
      PropertyAccess.prototype.constructor = PropertyAccess;
      var Identifier = exports.Identifier.constructor;
      function PropertyAccess() {
        function privateData() {
          this.base = null;
        }
        var p_vars = new privateData();
        var base = p_vars.base;
        Object.getOwnPropertyDescriptor(this,'base') || Object.defineProperty(this,'base', {get: function(){return base;},set: function(e){base=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            base:null
          };
          try {
            Identifier.call(this,properties);
            this.base=properties.base;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = PropertyAccess;
        return new PropertyAccess(args && args.length && args[0]);
      };
    })();
    exports.PropertyAccess = PropertyAccess;
    var PropertyAccessProperty = (function() {
      PropertyAccessProperty.prototype = exports.Identifier();
      PropertyAccessProperty.prototype.constructor = PropertyAccessProperty;
      var Identifier = exports.Identifier.constructor;
      function PropertyAccessProperty() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            Identifier.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = PropertyAccessProperty;
        return new PropertyAccessProperty(args && args.length && args[0]);
      };
    })();
    exports.PropertyAccessProperty = PropertyAccessProperty;
    var PropertyAssignment = (function() {
      PropertyAssignment.prototype = exports.Expression();
      PropertyAssignment.prototype.constructor = PropertyAssignment;
      var Expression = exports.Expression.constructor;
      function PropertyAssignment() {
        function privateData() {
          this.name = null;
          this.value = null;
        }
        var p_vars = new privateData();
        var name = p_vars.name;
        Object.getOwnPropertyDescriptor(this,'name') || Object.defineProperty(this,'name', {get: function(){return name;},set: function(e){name=e;}});
        var value = p_vars.value;
        Object.getOwnPropertyDescriptor(this,'value') || Object.defineProperty(this,'value', {get: function(){return value;},set: function(e){value=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            name:null,
            value:null
          };
          try {
            Expression.call(this,properties);
            this.name=properties.name;
            this.value=properties.value;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(PropertyAssignment.prototype,'children', {get: function(){      return [this.value];
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = PropertyAssignment;
        return new PropertyAssignment(args && args.length && args[0]);
      };
    })();
    exports.PropertyAssignment = PropertyAssignment;
    var GetterDefinition = (function() {
      GetterDefinition.prototype = exports.FunctionDeclaration();
      GetterDefinition.prototype.constructor = GetterDefinition;
      var FunctionDeclaration = exports.FunctionDeclaration.constructor;
      function GetterDefinition() {
        function privateData() {
          this.body = null;
        }
        var p_vars = new privateData();
        var body = p_vars.body;
        Object.getOwnPropertyDescriptor(this,'body') || Object.defineProperty(this,'body', {get: function(){return body;},set: function(e){body=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            body:null
          };
          try {
            FunctionDeclaration.call(this,properties);
            this.body=properties.body;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = GetterDefinition;
        return new GetterDefinition(args && args.length && args[0]);
      };
    })();
    exports.GetterDefinition = GetterDefinition;
    var SetterDefinition = (function() {
      SetterDefinition.prototype = exports.FunctionDeclaration();
      SetterDefinition.prototype.constructor = SetterDefinition;
      var FunctionDeclaration = exports.FunctionDeclaration.constructor;
      function SetterDefinition() {
        function privateData() {
          this.body = null;
          this.param = null;
        }
        var p_vars = new privateData();
        var body = p_vars.body;
        Object.getOwnPropertyDescriptor(this,'body') || Object.defineProperty(this,'body', {get: function(){return body;},set: function(e){body=e;}});
        var param = p_vars.param;
        Object.getOwnPropertyDescriptor(this,'param') || Object.defineProperty(this,'param', {get: function(){return param;},set: function(e){param=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            body:null,
            param:null
          };
          try {
            FunctionDeclaration.call(this,properties);
            this.body=properties.body;
            this.param=properties.param;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = SetterDefinition;
        return new SetterDefinition(args && args.length && args[0]);
      };
    })();
    exports.SetterDefinition = SetterDefinition;
    var StaticPropertyDefinition = (function() {
      StaticPropertyDefinition.prototype = exports.Declaration();
      StaticPropertyDefinition.prototype.constructor = StaticPropertyDefinition;
      var Declaration = exports.Declaration.constructor;
      function StaticPropertyDefinition() {
        function privateData() {
          this.property = null;
        }
        var p_vars = new privateData();
        var property = p_vars.property;
        Object.getOwnPropertyDescriptor(this,'property') || Object.defineProperty(this,'property', {get: function(){return property;},set: function(e){property=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            property:null
          };
          try {
            Declaration.call(this,properties);
            this.property=properties.property;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(StaticPropertyDefinition.prototype,'children', {get: function(){      return this.property;
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = StaticPropertyDefinition;
        return new StaticPropertyDefinition(args && args.length && args[0]);
      };
    })();
    exports.StaticPropertyDefinition = StaticPropertyDefinition;
    var ArrayLiteral = (function() {
      ArrayLiteral.prototype = exports.Literal();
      ArrayLiteral.prototype.constructor = ArrayLiteral;
      var Literal = exports.Literal.constructor;
      function ArrayLiteral() {
        function privateData() {
          this.elements = null;
        }
        var p_vars = new privateData();
        var elements = p_vars.elements;
        Object.getOwnPropertyDescriptor(this,'elements') || Object.defineProperty(this,'elements', {get: function(){return elements;},set: function(e){elements=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            elements:[]
          };
          try {
            Literal.call(this,properties);
            elements=properties.elements || [];
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(ArrayLiteral.prototype,'children', {get: function(){      return this.elements;
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ArrayLiteral;
        return new ArrayLiteral(args && args.length && args[0]);
      };
    })();
    exports.ArrayLiteral = ArrayLiteral;
    var BooleanLiteral = (function() {
      BooleanLiteral.prototype = exports.Literal();
      BooleanLiteral.prototype.constructor = BooleanLiteral;
      var Literal = exports.Literal.constructor;
      function BooleanLiteral() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            Literal.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = BooleanLiteral;
        return new BooleanLiteral(args && args.length && args[0]);
      };
    })();
    exports.BooleanLiteral = BooleanLiteral;
    var NullLiteral = (function() {
      NullLiteral.prototype = exports.Literal();
      NullLiteral.prototype.constructor = NullLiteral;
      var Literal = exports.Literal.constructor;
      function NullLiteral() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            Literal.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = NullLiteral;
        return new NullLiteral(args && args.length && args[0]);
      };
    })();
    exports.NullLiteral = NullLiteral;
    var NumericLiteral = (function() {
      NumericLiteral.prototype = exports.Literal();
      NumericLiteral.prototype.constructor = NumericLiteral;
      var Literal = exports.Literal.constructor;
      function NumericLiteral() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            Literal.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = NumericLiteral;
        return new NumericLiteral(args && args.length && args[0]);
      };
    })();
    exports.NumericLiteral = NumericLiteral;
    var ObjectLiteral = (function() {
      ObjectLiteral.prototype = exports.Literal();
      ObjectLiteral.prototype.constructor = ObjectLiteral;
      var Literal = exports.Literal.constructor;
      function ObjectLiteral() {
        function privateData() {
          this.properties = null;
        }
        var p_vars = new privateData();
        var properties = p_vars.properties;
        Object.getOwnPropertyDescriptor(this,'properties') || Object.defineProperty(this,'properties', {get: function(){return properties;},set: function(e){properties=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            properties:[]
          };
          try {
            Literal.call(this,properties);
            this.properties=properties.properties;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Object.defineProperty(ObjectLiteral.prototype,'children', {get: function(){      return this.properties;
      }});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ObjectLiteral;
        return new ObjectLiteral(args && args.length && args[0]);
      };
    })();
    exports.ObjectLiteral = ObjectLiteral;
    var RegularExpressionLiteral = (function() {
      RegularExpressionLiteral.prototype = exports.Literal();
      RegularExpressionLiteral.prototype.constructor = RegularExpressionLiteral;
      var Literal = exports.Literal.constructor;
      function RegularExpressionLiteral() {
        function privateData() {
          this.body = null;
          this.flags = null;
        }
        var p_vars = new privateData();
        var body = p_vars.body;
        Object.getOwnPropertyDescriptor(this,'body') || Object.defineProperty(this,'body', {get: function(){return body;},set: function(e){body=e;}});
        var flags = p_vars.flags;
        Object.getOwnPropertyDescriptor(this,'flags') || Object.defineProperty(this,'flags', {get: function(){return flags;},set: function(e){flags=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            body:null,
            flags:null
          };
          try {
            Literal.call(this,properties);
            this.body=properties.body;
            this.flags=properties.flags;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = RegularExpressionLiteral;
        return new RegularExpressionLiteral(args && args.length && args[0]);
      };
    })();
    exports.RegularExpressionLiteral = RegularExpressionLiteral;
    var StringLiteral = (function() {
      StringLiteral.prototype = exports.Literal();
      StringLiteral.prototype.constructor = StringLiteral;
      var Literal = exports.Literal.constructor;
      function StringLiteral() {
        function privateData() {
          this.quote = null;
        }
        var p_vars = new privateData();
        var quote = p_vars.quote;
        Object.getOwnPropertyDescriptor(this,'quote') || Object.defineProperty(this,'quote', {get: function(){return quote;},set: function(e){quote=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            Literal.call(this,properties);
            this.quote=properties.quote;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = StringLiteral;
        return new StringLiteral(args && args.length && args[0]);
      };
    })();
    exports.StringLiteral = StringLiteral;
    var TokenOperator = (function() {
      TokenOperator.prototype = exports.Node();
      TokenOperator.prototype.constructor = TokenOperator;
      var Node = exports.Node.constructor;
      function TokenOperator() {
        function privateData() {
          this.token = null;
        }
        var p_vars = new privateData();
        var token = p_vars.token;
        Object.getOwnPropertyDescriptor(this,'token') || Object.defineProperty(this,'token', {get: function(){return token;},set: function(e){token=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            token:null
          };
          try {
            Node.call(this,properties);
            this.token=properties.token;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = TokenOperator;
        return new TokenOperator(args && args.length && args[0]);
      };
    })();
    exports.TokenOperator = TokenOperator;
    var UnaryOperator = (function() {
      UnaryOperator.prototype = exports.TokenOperator();
      UnaryOperator.prototype.constructor = UnaryOperator;
      var TokenOperator = exports.TokenOperator.constructor;
      function UnaryOperator() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            TokenOperator.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = UnaryOperator;
        return new UnaryOperator(args && args.length && args[0]);
      };
    })();
    exports.UnaryOperator = UnaryOperator;
    var BinaryOperator = (function() {
      BinaryOperator.prototype = exports.TokenOperator();
      BinaryOperator.prototype.constructor = BinaryOperator;
      var TokenOperator = exports.TokenOperator.constructor;
      function BinaryOperator() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            TokenOperator.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = BinaryOperator;
        return new BinaryOperator(args && args.length && args[0]);
      };
    })();
    exports.BinaryOperator = BinaryOperator;
    var LogicalOperator = (function() {
      LogicalOperator.prototype = exports.TokenOperator();
      LogicalOperator.prototype.constructor = LogicalOperator;
      var TokenOperator = exports.TokenOperator.constructor;
      function LogicalOperator() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            TokenOperator.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = LogicalOperator;
        return new LogicalOperator(args && args.length && args[0]);
      };
    })();
    exports.LogicalOperator = LogicalOperator;
    var AssignmentOperator = (function() {
      AssignmentOperator.prototype = exports.TokenOperator();
      AssignmentOperator.prototype.constructor = AssignmentOperator;
      var TokenOperator = exports.TokenOperator.constructor;
      function AssignmentOperator() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            TokenOperator.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = AssignmentOperator;
        return new AssignmentOperator(args && args.length && args[0]);
      };
    })();
    exports.AssignmentOperator = AssignmentOperator;
    var UpdateOperator = (function() {
      UpdateOperator.prototype = exports.TokenOperator();
      UpdateOperator.prototype.constructor = UpdateOperator;
      var TokenOperator = exports.TokenOperator.constructor;
      function UpdateOperator() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          try {
            TokenOperator.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = UpdateOperator;
        return new UpdateOperator(args && args.length && args[0]);
      };
    })();
    exports.UpdateOperator = UpdateOperator;
