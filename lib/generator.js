    var log = require('log');
    var Node = (function() {
      function Node() {
        function privateData() {
          this.ast = null;
          this.transpiler = null;
        }
        var p_vars = new privateData();
        var ast = p_vars.ast;
        Object.getOwnPropertyDescriptor(this,'ast') || Object.defineProperty(this,'ast', {get: function(){return ast;},set: function(e){ast=e;}});
        var transpiler = p_vars.transpiler;
        Object.getOwnPropertyDescriptor(this,'transpiler') || Object.defineProperty(this,'transpiler', {get: function(){return transpiler;},set: function(e){transpiler=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            this.ast=properties.ast;
            this.transpiler=properties.transpiler;
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Node.prototype['emit'] = function(stack) {
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Node;
        return new Node(args && args.length && args[0]);
      };
    })();
    exports.Node = Node;
    var ArrayLiteral = (function() {
      ArrayLiteral.prototype = exports.Node();
      ArrayLiteral.prototype.constructor = ArrayLiteral;
      var Node = exports.Node.constructor;
      function ArrayLiteral() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ArrayLiteral.prototype['emit'] = function(stack) {
        try {
          stack.top().add('[');
          var elements=this.ast.elements;
          elements.forEach(function (element,i) {
            this.transpiler.get(element).emit(stack);
            if(i < elements.length - 1) {
              stack.top().add(',');
            }
          },this);
          stack.top().add(']');
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ArrayLiteral;
        return new ArrayLiteral(args && args.length && args[0]);
      };
    })();
    exports.ArrayLiteral = ArrayLiteral;
    var AssignmentExpression = (function() {
      AssignmentExpression.prototype = exports.Node();
      AssignmentExpression.prototype.constructor = AssignmentExpression;
      var Node = exports.Node.constructor;
      function AssignmentExpression() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      AssignmentExpression.prototype['emit'] = function(stack) {
        try {
          var left=this.ast.left;
          this.transpiler.get(left).emit(stack);
          var operator=this.ast.operator;
          stack.top().add(operator);
          var right=this.ast.right;
          this.transpiler.get(right).emit(stack);
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = AssignmentExpression;
        return new AssignmentExpression(args && args.length && args[0]);
      };
    })();
    exports.AssignmentExpression = AssignmentExpression;
    var Block = (function() {
      Block.prototype = exports.Node();
      Block.prototype.constructor = Block;
      var Node = exports.Node.constructor;
      function Block() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Block.prototype['emit'] = function(stack) {
        try {
          var statements=this.ast.statements;
          statements.forEach(function (statement) {
            this.transpiler.get(statement).emit(stack);
          },this);
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Block;
        return new Block(args && args.length && args[0]);
      };
    })();
    exports.Block = Block;
    var BinaryExpression = (function() {
      BinaryExpression.prototype = exports.Node();
      BinaryExpression.prototype.constructor = BinaryExpression;
      var Node = exports.Node.constructor;
      function BinaryExpression() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      BinaryExpression.prototype['emit'] = function(stack) {
        try {
          var left=this.ast.left;
          this.transpiler.get(left).emit(stack);
          var operator=this.ast.operator;
          stack.top().add(' ' + operator + ' ');
          var right=this.ast.right;
          this.transpiler.get(right).emit(stack);
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = BinaryExpression;
        return new BinaryExpression(args && args.length && args[0]);
      };
    })();
    exports.BinaryExpression = BinaryExpression;
    var BooleanLiteral = (function() {
      BooleanLiteral.prototype = exports.Node();
      BooleanLiteral.prototype.constructor = BooleanLiteral;
      var Node = exports.Node.constructor;
      function BooleanLiteral() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      BooleanLiteral.prototype['emit'] = function(stack) {
        try {
          var value=this.ast.value;
          stack.top().add(value.toString());
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = BooleanLiteral;
        return new BooleanLiteral(args && args.length && args[0]);
      };
    })();
    exports.BooleanLiteral = BooleanLiteral;
    var BreakStatement = (function() {
      BreakStatement.prototype = exports.Node();
      BreakStatement.prototype.constructor = BreakStatement;
      var Node = exports.Node.constructor;
      function BreakStatement() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      BreakStatement.prototype['emit'] = function(stack) {
        try {
          var label=this.ast.label;
          stack.top().tab().add('break;').newLine();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = BreakStatement;
        return new BreakStatement(args && args.length && args[0]);
      };
    })();
    exports.BreakStatement = BreakStatement;
    var CallExpression = (function() {
      CallExpression.prototype = exports.Node();
      CallExpression.prototype.constructor = CallExpression;
      var Node = exports.Node.constructor;
      function CallExpression() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      CallExpression.prototype['emit'] = function(stack) {
        try {
          var variable=this.ast.name;
          this.transpiler.get(variable).emit(stack);
          stack.top().add('(');
          var args=this.ast.args;
          args.forEach(function (arg,i) {
            this.transpiler.get(arg).emit(stack);
            if(i < args.length - 1) {
              stack.top().add(',');
            }
          },this);
          stack.top().add(')');
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = CallExpression;
        return new CallExpression(args && args.length && args[0]);
      };
    })();
    exports.CallExpression = CallExpression;
    var CaseClause = (function() {
      CaseClause.prototype = exports.Node();
      CaseClause.prototype.constructor = CaseClause;
      var Node = exports.Node.constructor;
      function CaseClause() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      CaseClause.prototype['emit'] = function(stack) {
        try {
          var selector=this.ast.selector;
          var statements=this.ast.statements;
          stack.top().tab().add('case ');
          this.transpiler.get(selector).emit(stack);
          stack.top().add(':').newLine().pushTab();
          statements.forEach(function (statement) {
            this.transpiler.get(statement).emit(stack);
          },this);
          stack.top().popTab();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = CaseClause;
        return new CaseClause(args && args.length && args[0]);
      };
    })();
    exports.CaseClause = CaseClause;
    var Catch = (function() {
      Catch.prototype = exports.Node();
      Catch.prototype.constructor = Catch;
      var Node = exports.Node.constructor;
      function Catch() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Catch.prototype['emit'] = function(stack) {
        try {
          var identifier=this.ast.identifier;
          var block=this.ast.block;
          stack.top().add("catch(");
          this.transpiler.get(identifier).emit(stack);
          stack.top().add(") {").newLine().pushTab();
          this.transpiler.get(block).emit(stack);
          stack.top().popTab().tab().add("}").newLine();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Catch;
        return new Catch(args && args.length && args[0]);
      };
    })();
    exports.Catch = Catch;
    var ClassDeclaration = (function() {
      ClassDeclaration.prototype = exports.Node();
      ClassDeclaration.prototype.constructor = ClassDeclaration;
      var Node = exports.Node.constructor;
      function ClassDeclaration() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ClassDeclaration.prototype['emit'] = function(stack) {
        try {
          var name=this.ast.name;
          var heritage=this.ast.heritage;
          var elements=this.ast.elements,params,statements;
          var constructorDef,constructorStatements=[];
          var constDecls=[],dataDecls=[],getDecls=[],setDecls=[];
          var defaultParams=[];
          var publicDefs=[],publicDecls;
          var privateDefs=[],privateDecls;
          var staticDefs=[],staticRefs=[];
          if(elements.length) {
            elements.forEach(function (element) {
              switch(element.type) {
                case 'PublicPropertyDefinition':
                  publicDefs.push(element.property);
                  break;
                case 'DataDefinition':
                case 'GetterDefinition':
                case 'SetterDefinition':
                case 'MethodDefinition':
                  publicDefs.push(element);
                  break;
                case 'Constructor':
                  constructorDef=element;
                  statements=constructorDef.elements;
                  if(statements.length) {
                    statements.forEach(function (statement) {
                      if(statement.type === 'PrivatePropertyDefinition') {
                        privateDefs.push(statement);
                      } else {
                        constructorStatements.push(statement);
                      }
                    },this);
                  }
                  break;
                case 'StaticPropertyDefinition':
                  staticDefs.push(element);
                  break;
                default:
                  log.Logger.error(this,'unhandled type:' + element.type);
                  break;
              }
            },this);
          }
          stack.top().tab().add("var ");
          this.transpiler.get(name).emit(stack);
          stack.top().add(" = (function() {").newLine().pushTab();
          if(heritage) {
            stack.top().tab().add("");
            this.transpiler.get(name).emit(stack);
            if(heritage.name.base) {
              stack.top().add(".prototype = ");
              this.transpiler.get(heritage.name).emit(stack);
            } else {
              stack.top().add(".prototype = exports.");
              this.transpiler.get(heritage.name).emit(stack);
            }
            stack.top().add("();").newLine();
            stack.top().tab().add("");
            this.transpiler.get(name).emit(stack);
            stack.top().add(".prototype.constructor = ");
            this.transpiler.get(name).emit(stack);
            stack.top().add(";").newLine();
            stack.top().tab().add("var ");
            if(heritage.name.base) {
              stack.top().add(heritage.name.name).add(" = ");
            } else {
              this.transpiler.get(heritage.name).emit(stack);
              stack.top().add(" = exports.");
            }
            this.transpiler.get(heritage.name).emit(stack);
            stack.top().add(".constructor;").newLine();
          }
          stack.top().tab().add("function ");
          this.transpiler.get(name).emit(stack);
          stack.top().add("() {").newLine().pushTab();
          if(privateDefs.length) {
            stack.top().tab().add("function privateData() {").newLine().pushTab();
            privateDefs.forEach(function (privateDef) {
              privateDecls=privateDef.property.declarations;
              privateDecls.forEach(function (privateDecl) {
                stack.top().tab().add("this.").add(privateDecl.name.name);
                var value=privateDecl.value;
                if(value) {
                  stack.top().add(" = ");
                  this.transpiler.get(value).emit(stack);
                  stack.top().add(";").newLine();
                } else {
                  stack.top().add(" = null;").newLine();
                }
              },this);
            },this);
            stack.top().popTab().tab().add("}").newLine();
            stack.top().tab().add("var p_vars = new privateData();").newLine();
            privateDefs.forEach(function (privateDef) {
              privateDecls=privateDef.property.declarations;
              privateDecls.forEach(function (privateDecl) {
                stack.top().tab().add("var ").add(privateDecl.name.name);
                stack.top().add(" = p_vars.").add(privateDecl.name.name).add(";").newLine();
                stack.top().tab().add("Object.getOwnPropertyDescriptor(this,").add("'").add(privateDecl.name.name).add("') || ").add("Object.defineProperty(this,").add("'").add(privateDecl.name.name).add("', {get: function(){return ").add(privateDecl.name.name).add(";},").add('set: function(e){').add(privateDecl.name.name).add('=e;').add("}});").newLine();
              },this);
            },this);
          }
          stack.top().tab().add("var args = Array.prototype.slice.call(arguments);").newLine();
          stack.top().tab().add("var ctor = function (");
          if(constructorDef) {
            params=constructorDef.params;
            if(params && params.length) {
              params.forEach(function (param,i) {
                if(param.value) {
                  defaultParams.push(param);
                  stack.top().add('_');
                  this.transpiler.get(param.name).emit(stack);
                } else {
                  this.transpiler.get(param).emit(stack);
                }
                if(i < params.length - 1) {
                  stack.top().add(',');
                }
              },this);
            }
          }
          stack.top().add(") {").newLine().pushTab();
          defaultParams.forEach(function (param) {
            stack.top().tab().add('var ');
            this.transpiler.get(param.name).emit(stack);
            stack.top().add(' = _');
            this.transpiler.get(param.name).emit(stack);
            stack.top().add(' || ');
            this.transpiler.get(param.value).emit(stack);
            stack.top().add(';').newLine();
          },this);
          if(constructorStatements.length) {
            constructorStatements.forEach(function (statement) {
              this.transpiler.get(statement).emit(stack);
            },this);
          }
          stack.top().popTab().tab().add("}").newLine();
          stack.top().tab().add("return ctor.apply(this,args) || this;").newLine();
          stack.top().popTab().tab().add("}").newLine();
          if(publicDefs.length) {
            defaultParams=[];
            publicDefs.forEach(function (publicDef,i) {
              var type=publicDef.type,value;
              switch(type) {
                case "GetterDefinition":
                  getDecls.push(publicDef);
                  break;
                case "SetterDefinition":
                  setDecls.push(publicDef);
                  break;
                case "MethodDefinition":
                  stack.top().tab().add("");
                  this.transpiler.get(name).emit(stack);
                  stack.top().add(".prototype['").add(publicDef.name.name).add("'] = function(");
                  var params=publicDef.params;
                  if(params && params.length) {
                    params.forEach(function (param,i) {
                      if(param.value) {
                        defaultParams.push(param);
                        stack.top().add('_');
                        this.transpiler.get(param.name).emit(stack);
                      } else {
                        this.transpiler.get(param).emit(stack);
                      }
                      if(i < params.length - 1) {
                        stack.top().add(',');
                      }
                    },this);
                  }
                  stack.top().add(") {").newLine().pushTab();
                  statements=publicDef.elements;
                  if(statements.length) {
                    statements.forEach(function (statement) {
                      this.transpiler.get(statement).emit(stack);
                    },this);
                  }
                  stack.top().popTab().tab().add("};").newLine();
                  break;
                case "ConstDeclaration":
                  publicDecls=publicDef.declarations;
                  publicDecls.forEach(function (publicDecl) {
                    constDecls.push(publicDecl);
                  },this);
                  break;
                case "DataDefinition":
                  publicDecls=publicDef.declarations;
                  publicDecls.forEach(function (publicDecl) {
                    dataDecls.push(publicDecl);
                  },this);
                  break;
                default:
                  log.Logger.error(this,'unhandled public type:' + publicDef.type);
                  break;
              }
            },this);
          }
          getDecls.forEach(function (getDecl) {
            stack.top().tab().add("Object.defineProperty(");
            this.transpiler.get(name).emit(stack);
            stack.top().add(".prototype,").add("'").add(getDecl.name);
            stack.top().add("', {get: function(){");
            statements=getDecl.body;
            if(statements.length) {
              statements.forEach(function (statement) {
                this.transpiler.get(statement).emit(stack);
              },this);
            }
            stack.top().tab().add("}});").newLine();
          },this);
          setDecls.forEach(function (setDecl) {
            stack.top().tab().add("Object.defineProperty(");
            this.transpiler.get(name).emit(stack);
            stack.top().add(".prototype,").add("'").add(setDecl.name);
            stack.top().add("', {set: function(e){");
            statements=setDecl.body;
            if(statements.length) {
              statements.forEach(function (statement) {
                this.transpiler.get(statement).emit(stack);
              },this);
            }
            stack.top().tab().add("}});").newLine();
          },this);
          constDecls.forEach(function (constDecl) {
            stack.top().tab().add("Object.defineProperty(");
            this.transpiler.get(name).emit(stack);
            stack.top().add(".prototype,").add("'").add(constDecl.name.name);
            stack.top().add("', {get: function(){return ");
            this.transpiler.get(constDecl.value).emit(stack);
            stack.top().tab().add("}});").newLine();
          },this);
          dataDecls.forEach(function (dataDecl) {
            stack.top().tab().add("Object.defineProperty(");
            this.transpiler.get(name).emit(stack);
            stack.top().add(".prototype,").add("'").add(dataDecl.name.name).add("', {value:");
            this.transpiler.get(dataDecl.value).emit(stack);
            stack.top().add(", writable: true, enumerable: true, configurable: true});").newLine();
          },this);
          staticDefs.forEach(function (staticDef) {
            switch(staticDef.property.type) {
              case "MethodDefinition":
                stack.top().tab().add("");
                this.transpiler.get(name).emit(stack);
                stack.top().add(".");
                var methodDef=staticDef.property;
                stack.top().add(methodDef.name.name).add(" = function(");
                staticRefs.push(methodDef.name.name);
                var params=methodDef.params;
                if(params && params.length) {
                  params.forEach(function (param,i) {
                    this.transpiler.get(param).emit(stack);
                    if(i < params.length - 1) {
                      stack.top().add(',');
                    }
                  },this);
                }
                stack.top().add(") {").newLine().pushTab();
                statements=methodDef.elements;
                if(statements.length) {
                  statements.forEach(function (statement) {
                    this.transpiler.get(statement).emit(stack);
                  },this);
                }
                stack.top().popTab().tab().add("}").newLine();
                break;
              case "DataDefinition":
                staticDef.property.declarations.forEach(function (staticDecl) {
                  stack.top().tab().add("");
                  this.transpiler.get(name).emit(stack);
                  stack.top().add(".");
                  this.transpiler.get(staticDecl.name).emit(stack);
                  staticRefs.push(staticDecl.name.name);
                  stack.top().add(" = ");
                  this.transpiler.get(staticDecl.value).emit(stack);
                  stack.top().add(";").newLine();
                },this);
                break;
              default:
                log.Logger.error(this,'unhandled static type:' + staticDecl.type);
                break;
            }
          },this);
          stack.top().tab().add("return function __() {").newLine().pushTab();
          stack.top().tab().add("var args = Array.prototype.slice.call(arguments);").newLine();
          staticRefs.forEach(function (staticRef) {
            stack.top().tab().add('__.').add(staticRef).add(' = ');
            this.transpiler.get(name).emit(stack);
            stack.top().add('.').add(staticRef).add(';').newLine();
          },this);
          stack.top().tab().add("__.constructor = ");
          this.transpiler.get(name).emit(stack);
          stack.top().add(";").newLine();
          stack.top().tab().add("return new ");
          this.transpiler.get(name).emit(stack);
          stack.top().add("(args && args.length && args[0]);").newLine().popTab();
          stack.top().tab().add("};").newLine().popTab();
          stack.top().tab().add("})();").newLine();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ClassDeclaration;
        return new ClassDeclaration(args && args.length && args[0]);
      };
    })();
    exports.ClassDeclaration = ClassDeclaration;
    var ConditionalExpression = (function() {
      ConditionalExpression.prototype = exports.Node();
      ConditionalExpression.prototype.constructor = ConditionalExpression;
      var Node = exports.Node.constructor;
      function ConditionalExpression() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ConditionalExpression.prototype['emit'] = function(stack) {
        try {
          var condition=this.ast.condition;
          var trueExpression=this.ast.trueExpression;
          var falseExpression=this.ast.falseExpression;
          this.transpiler.get(condition).emit(stack);
          stack.top().add('?');
          this.transpiler.get(trueExpression).emit(stack);
          stack.top().add(':');
          this.transpiler.get(falseExpression).emit(stack);
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ConditionalExpression;
        return new ConditionalExpression(args && args.length && args[0]);
      };
    })();
    exports.ConditionalExpression = ConditionalExpression;
    var Constructor = (function() {
      Constructor.prototype = exports.Node();
      Constructor.prototype.constructor = Constructor;
      var Node = exports.Node.constructor;
      function Constructor() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Constructor.prototype['emit'] = function(stack) {
        try {
          var params=this.ast.params;
          var elements=this.ast.elements;
          stack.top().tab().add("constructor(");
          params.forEach(function (param,i) {
            this.transpiler.get(param).emit(stack);
            if(i < params.length - 1) {
              stack.top().add(',');
            }
          },this);
          stack.top().add(') {').newLine().pushTab();
          elements.forEach(function (element) {
            this.transpiler.get(element).emit(stack);
          },this);
          stack.top().popTab().tab().add("}").newLine();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Constructor;
        return new Constructor(args && args.length && args[0]);
      };
    })();
    exports.Constructor = Constructor;
    var ConstDeclaration = (function() {
      ConstDeclaration.prototype = exports.Node();
      ConstDeclaration.prototype.constructor = ConstDeclaration;
      var Node = exports.Node.constructor;
      function ConstDeclaration() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ConstDeclaration.prototype['emit'] = function(stack) {
        try {
          stack.top().tab().add("const ");
          var declarations=this.ast.declarations;
          declarations.forEach(function (declaration,i) {
            this.transpiler.get(declaration).emit(stack);
            if(i < declarations.length - 1) {
              stack.top().add(',');
            }
          },this);
          stack.top().add(';').newLine();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ConstDeclaration;
        return new ConstDeclaration(args && args.length && args[0]);
      };
    })();
    exports.ConstDeclaration = ConstDeclaration;
    var ContinueStatement = (function() {
      ContinueStatement.prototype = exports.Node();
      ContinueStatement.prototype.constructor = ContinueStatement;
      var Node = exports.Node.constructor;
      function ContinueStatement() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ContinueStatement.prototype['emit'] = function(stack) {
        try {
          var label=this.ast.label;
          if(label) {
            stack.top().tab().add('continue').add(label).add(';').newLine();
          } else {
            stack.top().tab().add('continue;').newLine();
          }
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ContinueStatement;
        return new ContinueStatement(args && args.length && args[0]);
      };
    })();
    exports.ContinueStatement = ContinueStatement;
    var DataDefinition = (function() {
      DataDefinition.prototype = exports.Node();
      DataDefinition.prototype.constructor = DataDefinition;
      var Node = exports.Node.constructor;
      function DataDefinition() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      DataDefinition.prototype['emit'] = function(stack) {
        try {
          var declarations=this.ast.declarations;
          declarations.forEach(function (declaration,i) {
            this.transpiler.get(declaration).emit(stack);
            if(i < declarations.length - 1) {
              stack.top().add(',');
            }
          },this);
          stack.top().add(';').newLine();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = DataDefinition;
        return new DataDefinition(args && args.length && args[0]);
      };
    })();
    exports.DataDefinition = DataDefinition;
    var DebuggerStatement = (function() {
      DebuggerStatement.prototype = exports.Node();
      DebuggerStatement.prototype.constructor = DebuggerStatement;
      var Node = exports.Node.constructor;
      function DebuggerStatement() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      DebuggerStatement.prototype['emit'] = function(stack) {
        try {
          stack.top().add('debugger;').newLine();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = DebuggerStatement;
        return new DebuggerStatement(args && args.length && args[0]);
      };
    })();
    exports.DebuggerStatement = DebuggerStatement;
    var DefaultClause = (function() {
      DefaultClause.prototype = exports.Node();
      DefaultClause.prototype.constructor = DefaultClause;
      var Node = exports.Node.constructor;
      function DefaultClause() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      DefaultClause.prototype['emit'] = function(stack) {
        try {
          var statements=this.ast.statements;
          stack.top().tab().add('default:').newLine().pushTab();
          statements.forEach(function (statement) {
            this.transpiler.get(statement).emit(stack);
          },this);
          stack.top().popTab();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = DefaultClause;
        return new DefaultClause(args && args.length && args[0]);
      };
    })();
    exports.DefaultClause = DefaultClause;
    var DoWhileStatement = (function() {
      DoWhileStatement.prototype = exports.Node();
      DoWhileStatement.prototype.constructor = DoWhileStatement;
      var Node = exports.Node.constructor;
      function DoWhileStatement() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      DoWhileStatement.prototype['emit'] = function(stack) {
        try {
          var statement=this.ast.statement;
          var condition=this.ast.condition;
          stack.top().tab().add("do {").pushTab().newLine();
          this.transpiler.get(statement).emit(stack);
          stack.top().popTab().tab().add("} while(");
          this.transpiler.get(condition).emit(stack);
          stack.top().add(');').newLine();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = DoWhileStatement;
        return new DoWhileStatement(args && args.length && args[0]);
      };
    })();
    exports.DoWhileStatement = DoWhileStatement;
    var EmptyStatement = (function() {
      EmptyStatement.prototype = exports.Node();
      EmptyStatement.prototype.constructor = EmptyStatement;
      var Node = exports.Node.constructor;
      function EmptyStatement() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      EmptyStatement.prototype['emit'] = function(stack) {
        try {
          stack.top().tab().add(';//empty').newLine();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = EmptyStatement;
        return new EmptyStatement(args && args.length && args[0]);
      };
    })();
    exports.EmptyStatement = EmptyStatement;
    var Exports = (function() {
      Exports.prototype = exports.Node();
      Exports.prototype.constructor = Exports;
      var Node = exports.Node.constructor;
      function Exports() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Exports.prototype['emit'] = function(stack) {
        try {
          var lexports=this.ast.exports;
          stack.top().add('{');
          lexports.forEach(function (lexport,i) {
            this.transpiler.get(lexport).emit(stack);
            if(i < lexports.length - 1) {
              stack.top().add(',');
            }
          },this);
          stack.top().add('}');
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Exports;
        return new Exports(args && args.length && args[0]);
      };
    })();
    exports.Exports = Exports;
    var ExportMapping = (function() {
      ExportMapping.prototype = exports.Node();
      ExportMapping.prototype.constructor = ExportMapping;
      var Node = exports.Node.constructor;
      function ExportMapping() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ExportMapping.prototype['emit'] = function(stack) {
        try {
          var name=this.ast.name;
          var value=this.ast.value;
          this.transpiler.get(name).emit(stack);
          if(value) {
            stack.top().add(" from ");
            this.transpiler.get(value).emit(stack);
          }
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
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
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ExportSpecifier.prototype['emit'] = function(stack) {
        try {
          var alias=this.ast.alias;
          var name=this.ast.name;
          this.transpiler.get(name).emit(stack);
          if(alias) {
            stack.top().add(':');
            this.transpiler.get(alias).emit(stack);
          }
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ExportSpecifier;
        return new ExportSpecifier(args && args.length && args[0]);
      };
    })();
    exports.ExportSpecifier = ExportSpecifier;
    var ExportStatement = (function() {
      ExportStatement.prototype = exports.Node();
      ExportStatement.prototype.constructor = ExportStatement;
      var Node = exports.Node.constructor;
      function ExportStatement() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ExportStatement.prototype['emit'] = function(stack) {
        try {
          var declarations=this.ast.declarations;
          declarations.forEach(function (declaration) {
            this.transpiler.get(declaration).emit(stack);
            var declName=declaration.name?declaration.name.name:declaration.declarations[0].name.name;
            stack.top().tab().add("exports.").add(declName).add(" = ").add(declName).add(";").newLine();
          },this);
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ExportStatement;
        return new ExportStatement(args && args.length && args[0]);
      };
    })();
    exports.ExportStatement = ExportStatement;
    var ExpressionStatement = (function() {
      ExpressionStatement.prototype = exports.Node();
      ExpressionStatement.prototype.constructor = ExpressionStatement;
      var Node = exports.Node.constructor;
      function ExpressionStatement() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ExpressionStatement.prototype['emit'] = function(stack) {
        try {
          var expression=this.ast.expression;
          stack.top().tab();
          this.transpiler.get(expression).emit(stack);
          stack.top().add(';').newLine();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ExpressionStatement;
        return new ExpressionStatement(args && args.length && args[0]);
      };
    })();
    exports.ExpressionStatement = ExpressionStatement;
    var Finally = (function() {
      Finally.prototype = exports.Node();
      Finally.prototype.constructor = Finally;
      var Node = exports.Node.constructor;
      function Finally() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Finally.prototype['emit'] = function(stack) {
        try {
          var block=this.ast.block;
          stack.top().add("finally {");
          this.ast.get(block).emit(stack);
          stack.top().popTab().tab().add("}").newLine();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Finally;
        return new Finally(args && args.length && args[0]);
      };
    })();
    exports.Finally = Finally;
    var ForInStatement = (function() {
      ForInStatement.prototype = exports.Node();
      ForInStatement.prototype.constructor = ForInStatement;
      var Node = exports.Node.constructor;
      function ForInStatement() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ForInStatement.prototype['emit'] = function(stack) {
        try {
          var iterator=this.ast.iterator;
          var collection=this.ast.collection;
          var statement=this.ast.statement;
          stack.top().tab().add('for(');
          this.transpiler.get(iterator).emit(stack);
          stack.top().add(' in ');
          this.transpiler.get(collection).emit(stack);
          stack.top().add(') {').newLine().pushTab();
          this.transpiler.get(statement).emit(stack);
          stack.top().popTab().tab().add('}').newLine();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ForInStatement;
        return new ForInStatement(args && args.length && args[0]);
      };
    })();
    exports.ForInStatement = ForInStatement;
    var FormalParameter = (function() {
      FormalParameter.prototype = exports.Node();
      FormalParameter.prototype.constructor = FormalParameter;
      var Node = exports.Node.constructor;
      function FormalParameter() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      FormalParameter.prototype['emit'] = function(stack) {
        try {
          var name=this.ast.name;
          var value=this.ast.value;
          this.transpiler.get(name).emit(stack);
          if(value) {
            stack.top().add("=");
            this.transpiler.get(value).emit(stack);
          }
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = FormalParameter;
        return new FormalParameter(args && args.length && args[0]);
      };
    })();
    exports.FormalParameter = FormalParameter;
    var ForStatement = (function() {
      ForStatement.prototype = exports.Node();
      ForStatement.prototype.constructor = ForStatement;
      var Node = exports.Node.constructor;
      function ForStatement() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ForStatement.prototype['emit'] = function(stack) {
        try {
          var initializer=this.ast.initializer;
          var test=this.ast.test;
          var counter=this.ast.counter;
          var statement=this.ast.statement;
          stack.top().tab().add("for(");
          initializer && this.transpiler.get(initializer).emit(stack);
          stack.top().add(";");
          test && this.transpiler.get(test).emit(stack);
          stack.top().add(";");
          counter && this.transpiler.get(counter).emit(stack);
          stack.top().add(") {").pushTab().newLine();
          this.transpiler.get(statement).emit(stack);
          stack.top().popTab().tab().add("}").newLine();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ForStatement;
        return new ForStatement(args && args.length && args[0]);
      };
    })();
    exports.ForStatement = ForStatement;
    var FunctionCallArguments = (function() {
      FunctionCallArguments.prototype = exports.Node();
      FunctionCallArguments.prototype.constructor = FunctionCallArguments;
      var Node = exports.Node.constructor;
      function FunctionCallArguments() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      FunctionCallArguments.prototype['emit'] = function(stack) {
        try {
          var args=this.ast.args;
          var argarray=[];
          args.forEach(function (arg) {
            argarray.push(arg);
          },this);
          stack.top().add(argarray.join(','));
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = FunctionCallArguments;
        return new FunctionCallArguments(args && args.length && args[0]);
      };
    })();
    exports.FunctionCallArguments = FunctionCallArguments;
    var FunctionDeclaration = (function() {
      FunctionDeclaration.prototype = exports.Node();
      FunctionDeclaration.prototype.constructor = FunctionDeclaration;
      var Node = exports.Node.constructor;
      function FunctionDeclaration() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      FunctionDeclaration.prototype['emit'] = function(stack) {
        try {
          var name=this.ast.name;
          var params=this.ast.params;
          var elements=this.ast.elements;
          stack.top().tab().add("function ");
          this.transpiler.get(name).emit(stack);
          stack.top().add("(");
          params.forEach(function (param,i) {
            this.transpiler.get(param).emit(stack);
            if(i < params.length - 1) {
              stack.top().add(',');
            }
          },this);
          if(elements.length) {
            stack.top().add(') {').newLine().pushTab();
            elements.forEach(function (element) {
              this.transpiler.get(element).emit(stack);
            },this);
            stack.top().popTab().tab().add('}').newLine();
          } else {
            stack.top().add(') {}').newLine();
          }
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = FunctionDeclaration;
        return new FunctionDeclaration(args && args.length && args[0]);
      };
    })();
    exports.FunctionDeclaration = FunctionDeclaration;
    var FunctionExpression = (function() {
      FunctionExpression.prototype = exports.Node();
      FunctionExpression.prototype.constructor = FunctionExpression;
      var Node = exports.Node.constructor;
      function FunctionExpression() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      FunctionExpression.prototype['emit'] = function(stack) {
        try {
          stack.top().add("function ");
          var name=this.ast.name;
          name && this.transpiler.get(name).emit(stack);
          stack.top().add("(");
          var params=this.ast.params;
          params.forEach(function (param,i) {
            this.transpiler.get(param).emit(stack);
            if(i < params.length - 1) {
              stack.top().add(',');
            }
          },this);
          var elements=this.ast.elements;
          if(elements.length) {
            stack.top().add(') {').newLine().pushTab();
            elements.forEach(function (element,i) {
              this.transpiler.get(element).emit(stack);
            },this);
            stack.top().popTab().tab().add('}');
          } else {
            stack.top().add(') {}');
          }
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = FunctionExpression;
        return new FunctionExpression(args && args.length && args[0]);
      };
    })();
    exports.FunctionExpression = FunctionExpression;
    var Identifier = (function() {
      Identifier.prototype = exports.Node();
      Identifier.prototype.constructor = Identifier;
      var Node = exports.Node.constructor;
      function Identifier() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Identifier.prototype['emit'] = function(stack) {
        try {
          var n=this.ast.name;
          if(typeof((n)) === 'string') {
            stack.top().add(n);
          } else if(n.name) {
            stack.top().add(n.name);
          }
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Identifier;
        return new Identifier(args && args.length && args[0]);
      };
    })();
    exports.Identifier = Identifier;
    var IfStatement = (function() {
      IfStatement.prototype = exports.Node();
      IfStatement.prototype.constructor = IfStatement;
      var Node = exports.Node.constructor;
      function IfStatement() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      IfStatement.prototype['emit'] = function(stack,notab) {
        try {
          notab?stack.top().add("if("):stack.top().tab().add("if(");
          var condition=this.ast.condition;
          this.transpiler.get(condition).emit(stack);
          stack.top().add(") {").newLine().pushTab();
          var ifStatement=this.ast.ifStatement;
          this.transpiler.get(ifStatement).emit(stack);
          var elseStatement=this.ast.elseStatement;
          if(elseStatement) {
            switch(elseStatement.type) {
              case 'IfStatement':
                stack.top().popTab().tab().add("} else ");
                this.transpiler.get(elseStatement).emit(stack,true);
                break;
              default:
                stack.top().popTab().tab().add("} else {").newLine().pushTab();
                this.transpiler.get(elseStatement).emit(stack);
                stack.top().popTab().tab().add("}").newLine();
                break;
            }
          } else {
            stack.top().popTab().tab().add("}").newLine();
          }
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = IfStatement;
        return new IfStatement(args && args.length && args[0]);
      };
    })();
    exports.IfStatement = IfStatement;
    var ImportIdentifier = (function() {
      ImportIdentifier.prototype = exports.Node();
      ImportIdentifier.prototype.constructor = ImportIdentifier;
      var Node = exports.Node.constructor;
      function ImportIdentifier() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ImportIdentifier.prototype['emit'] = function(stack) {
        try {
          var n=this.ast.name;
          if(Array.isArray(n)) {
            stack.top().add(n[0]);
          }
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ImportIdentifier;
        return new ImportIdentifier(args && args.length && args[0]);
      };
    })();
    exports.ImportIdentifier = ImportIdentifier;
    var Inheritance = (function() {
      Inheritance.prototype = exports.Node();
      Inheritance.prototype.constructor = Inheritance;
      var Node = exports.Node.constructor;
      function Inheritance() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Inheritance.prototype['emit'] = function(stack) {
        try {
          var name=this.ast.name;
          var inheritance=this.ast.inheritance;
          stack.top().tab().add(' ' + inheritance + ' ');
          this.transpiler.get(name).emit(stack);
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Inheritance;
        return new Inheritance(args && args.length && args[0]);
      };
    })();
    exports.Inheritance = Inheritance;
    var GetterDefinition = (function() {
      GetterDefinition.prototype = exports.Node();
      GetterDefinition.prototype.constructor = GetterDefinition;
      var Node = exports.Node.constructor;
      function GetterDefinition() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      GetterDefinition.prototype['emit'] = function(stack) {
        try {
          var name=this.ast.name;
          var body=this.ast.body;
          if(body.length) {
            stack.top().tab().add("get ").add(name).add("(").add(') {').newLine().pushTab();
            body.forEach(function (element) {
              this.transpiler.get(element).emit(stack);
            },this);
          } else {
            stack.top().add(') {}').newLine();
          }
          stack.top().popTab().tab().add('}').newLine();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = GetterDefinition;
        return new GetterDefinition(args && args.length && args[0]);
      };
    })();
    exports.GetterDefinition = GetterDefinition;
    var Imports = (function() {
      Imports.prototype = exports.Node();
      Imports.prototype.constructor = Imports;
      var Node = exports.Node.constructor;
      function Imports() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Imports.prototype['emit'] = function(stack) {
        try {
          var imports=this.ast.imports;
          stack.top().add('{');
          imports.forEach(function (limport,i) {
            this.transpiler.get(limport).emit(stack);
            if(i < imports.length - 1) {
              stack.top().add(',');
            }
          },this);
          stack.top().add('}');
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
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
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ImportSpecifier.prototype['emit'] = function(stack) {
        try {
          var alias=this.ast.alias;
          var name=this.ast.name;
          this.transpiler.get(name).emit(stack);
          if(alias) {
            stack.top().add(':');
            this.transpiler.get(alias).emit(stack);
          }
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ImportSpecifier;
        return new ImportSpecifier(args && args.length && args[0]);
      };
    })();
    exports.ImportSpecifier = ImportSpecifier;
    var ImportDeclaration = (function() {
      ImportDeclaration.prototype = exports.Node();
      ImportDeclaration.prototype.constructor = ImportDeclaration;
      var Node = exports.Node.constructor;
      function ImportDeclaration() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ImportDeclaration.prototype['emit'] = function(stack) {
        try {
          var name=this.ast.name;
          var value=this.ast.value;
          this.transpiler.get(name).emit(stack);
          if(value) {
            stack.top().add(" from ");
            this.transpiler.get(value).emit(stack);
          }
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ImportDeclaration;
        return new ImportDeclaration(args && args.length && args[0]);
      };
    })();
    exports.ImportDeclaration = ImportDeclaration;
    var ImportStatement = (function() {
      ImportStatement.prototype = exports.Node();
      ImportStatement.prototype.constructor = ImportStatement;
      var Node = exports.Node.constructor;
      function ImportStatement() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ImportStatement.prototype['emit'] = function(stack) {
        try {
          var declarations=this.ast.declarations;
          declarations.forEach(function (declaration,i) {
            stack.top().tab().add("var ");
            if(declaration.name.name && declaration.name.name[0] === '*') {
              this.transpiler.get(declaration.value).emit(stack);
              stack.top().add(" = require('");
              this.transpiler.get(declaration.value).emit(stack);
              stack.top().add("');").newLine();
            } else {
              this.transpiler.get(declaration.name).emit(stack);
              stack.top().add(" = require('");
              this.transpiler.get(declaration.value).emit(stack);
              stack.top().add("').");
              this.transpiler.get(declaration.name).emit(stack);
              stack.top().add(';').newLine();
            }
          },this);
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ImportStatement;
        return new ImportStatement(args && args.length && args[0]);
      };
    })();
    exports.ImportStatement = ImportStatement;
    var LetDeclaration = (function() {
      LetDeclaration.prototype = exports.Node();
      LetDeclaration.prototype.constructor = LetDeclaration;
      var Node = exports.Node.constructor;
      function LetDeclaration() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      LetDeclaration.prototype['emit'] = function(stack) {
        try {
          stack.top().tab().add("let ");
          var declarations=this.ast.declarations;
          declarations.forEach(function (declaration,i) {
            this.transpiler.get(declaration).emit(stack);
            if(i < declarations.length - 1) {
              stack.top().add(',');
            }
          },this);
          stack.top().add(';').newLine();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = LetDeclaration;
        return new LetDeclaration(args && args.length && args[0]);
      };
    })();
    exports.LetDeclaration = LetDeclaration;
    var Literal = (function() {
      Literal.prototype = exports.Node();
      Literal.prototype.constructor = Literal;
      var Node = exports.Node.constructor;
      function Literal() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Literal.prototype['emit'] = function(stack) {
        try {
          var value=this.ast.value;
          this.transpiler.get(value).emit(stack);
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Literal;
        return new Literal(args && args.length && args[0]);
      };
    })();
    exports.Literal = Literal;
    var MethodDefinition = (function() {
      MethodDefinition.prototype = exports.Node();
      MethodDefinition.prototype.constructor = MethodDefinition;
      var Node = exports.Node.constructor;
      function MethodDefinition() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      MethodDefinition.prototype['emit'] = function(stack) {
        try {
          var name=this.ast.name;
          var params=this.ast.params;
          var elements=this.ast.elements;
          this.transpiler.get(name).emit(stack);
          stack.top().add("(");
          params.forEach(function (param,i) {
            this.transpiler.get(param).emit(stack);
            if(i < params.length - 1) {
              stack.top().add(',');
            }
          },this);
          if(elements.length) {
            stack.top().add(') {').newLine().pushTab();
            elements.forEach(function (element) {
              this.transpiler.get(element).emit(stack);
            },this);
            stack.top().popTab().tab().add('}').newLine();
          } else {
            stack.top().add(') {}').newLine();
          }
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = MethodDefinition;
        return new MethodDefinition(args && args.length && args[0]);
      };
    })();
    exports.MethodDefinition = MethodDefinition;
    var ModuleDeclaration = (function() {
      ModuleDeclaration.prototype = exports.Node();
      ModuleDeclaration.prototype.constructor = ModuleDeclaration;
      var Node = exports.Node.constructor;
      function ModuleDeclaration() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ModuleDeclaration.prototype['emit'] = function(stack) {
        try {
          var name=this.ast.name;
          var expression=this.ast.expression;
          this.transpiler.get(name).emit(stack);
          if(expression) {
            stack.top().add(" = require(");
            this.transpiler.get(expression).emit(stack);
            stack.top().add(")");
          }
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ModuleDeclaration;
        return new ModuleDeclaration(args && args.length && args[0]);
      };
    })();
    exports.ModuleDeclaration = ModuleDeclaration;
    var ModuleExpression = (function() {
      ModuleExpression.prototype = exports.Node();
      ModuleExpression.prototype.constructor = ModuleExpression;
      var Node = exports.Node.constructor;
      function ModuleExpression() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ModuleExpression.prototype['emit'] = function(stack) {
        try {
          var nameparts=this.ast.nameparts;
          if(nameparts && nameparts.length) {
            nameparts.forEach(function (name,i) {
              if(typeof((name)) === 'string') {
                stack.top().add(name);
              } else {
                this.transpiler.get(name).emit(stack);
              }
              if(i > 0 && i < nameparts.length) {
                stack.top().add(".");
              }
            },this);
          }
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ModuleExpression;
        return new ModuleExpression(args && args.length && args[0]);
      };
    })();
    exports.ModuleExpression = ModuleExpression;
    var ModuleDefinition = (function() {
      ModuleDefinition.prototype = exports.Node();
      ModuleDefinition.prototype.constructor = ModuleDefinition;
      var Node = exports.Node.constructor;
      function ModuleDefinition() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ModuleDefinition.prototype['emit'] = function(stack) {
        try {
          var name=this.ast.name;
          var elements=this.ast.elements;
          stack.top().tab().add("(function() {").newLine().pushTab();
          stack.top().tab().add("var nm = module.Module('");
          this.transpiler.get(name).emit(stack);
          stack.top().add("');").newLine();
          stack.top().tab().add("(function(require, exports, moduleId) {").newLine().pushTab();
          if(elements.length) {
            elements.forEach(function (element) {
              this.transpiler.get(element).emit(stack);
            },this);
          }
          stack.top().popTab().tab().add("})(require, nm.getExports(), nm.getId());").newLine();
          stack.top().popTab().tab().add('})();').newLine();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ModuleDefinition;
        return new ModuleDefinition(args && args.length && args[0]);
      };
    })();
    exports.ModuleDefinition = ModuleDefinition;
    var ModuleStatement = (function() {
      ModuleStatement.prototype = exports.Node();
      ModuleStatement.prototype.constructor = ModuleStatement;
      var Node = exports.Node.constructor;
      function ModuleStatement() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ModuleStatement.prototype['emit'] = function(stack) {
        try {
          stack.top().tab().add("var ");
          var declarations=this.ast.declarations;
          declarations.forEach(function (declaration,i) {
            this.transpiler.get(declaration).emit(stack);
            if(i < declarations.length - 1) {
              stack.top().add(',');
            }
          },this);
          stack.top().add(';').newLine();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ModuleStatement;
        return new ModuleStatement(args && args.length && args[0]);
      };
    })();
    exports.ModuleStatement = ModuleStatement;
    var MultiLineComment = (function() {
      MultiLineComment.prototype = exports.Node();
      MultiLineComment.prototype.constructor = MultiLineComment;
      var Node = exports.Node.constructor;
      function MultiLineComment() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      MultiLineComment.prototype['emit'] = function(stack) {
        try {
          var comments=this.ast.comments;
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = MultiLineComment;
        return new MultiLineComment(args && args.length && args[0]);
      };
    })();
    exports.MultiLineComment = MultiLineComment;
    var NewOperator = (function() {
      NewOperator.prototype = exports.Node();
      NewOperator.prototype.constructor = NewOperator;
      var Node = exports.Node.constructor;
      function NewOperator() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      NewOperator.prototype['emit'] = function(stack) {
        try {
          var args=this.ast.args;
          var cons=this.ast.cons;
          stack.top().add('new ');
          this.transpiler.get(cons).emit(stack);
          stack.top().add('(');
          args.forEach(function (arg,i) {
            this.transpiler.get(arg).emit(stack);
            if(i < args.length - 1) {
              stack.top().add(',');
            }
          },this);
          stack.top().add(')');
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = NewOperator;
        return new NewOperator(args && args.length && args[0]);
      };
    })();
    exports.NewOperator = NewOperator;
    var NullLiteral = (function() {
      NullLiteral.prototype = exports.Node();
      NullLiteral.prototype.constructor = NullLiteral;
      var Node = exports.Node.constructor;
      function NullLiteral() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      NullLiteral.prototype['emit'] = function(stack) {
        try {
          stack.top().add("null");
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = NullLiteral;
        return new NullLiteral(args && args.length && args[0]);
      };
    })();
    exports.NullLiteral = NullLiteral;
    var NumericLiteral = (function() {
      NumericLiteral.prototype = exports.Node();
      NumericLiteral.prototype.constructor = NumericLiteral;
      var Node = exports.Node.constructor;
      function NumericLiteral() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      NumericLiteral.prototype['emit'] = function(stack) {
        try {
          var value=this.ast.value;
          stack.top().add(value.toString());
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = NumericLiteral;
        return new NumericLiteral(args && args.length && args[0]);
      };
    })();
    exports.NumericLiteral = NumericLiteral;
    var ParenthesizedExpression = (function() {
      ParenthesizedExpression.prototype = exports.Node();
      ParenthesizedExpression.prototype.constructor = ParenthesizedExpression;
      var Node = exports.Node.constructor;
      function ParenthesizedExpression() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ParenthesizedExpression.prototype['emit'] = function(stack) {
        try {
          stack.top().add("(");
          this.transpiler.get(this.ast.expression).emit(stack);
          stack.top().add(")");
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ParenthesizedExpression;
        return new ParenthesizedExpression(args && args.length && args[0]);
      };
    })();
    exports.ParenthesizedExpression = ParenthesizedExpression;
    var PostfixExpression = (function() {
      PostfixExpression.prototype = exports.Node();
      PostfixExpression.prototype.constructor = PostfixExpression;
      var Node = exports.Node.constructor;
      function PostfixExpression() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      PostfixExpression.prototype['emit'] = function(stack) {
        try {
          var operator=this.ast.operator;
          var expression=this.ast.expression;
          stack.top().add(operator);
          this.transpiler.get(expression).emit(stack);
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = PostfixExpression;
        return new PostfixExpression(args && args.length && args[0]);
      };
    })();
    exports.PostfixExpression = PostfixExpression;
    var ProtoLiteral = (function() {
      ProtoLiteral.prototype = exports.Node();
      ProtoLiteral.prototype.constructor = ProtoLiteral;
      var Node = exports.Node.constructor;
      function ProtoLiteral() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ProtoLiteral.prototype['emit'] = function(stack) {
        try {
          var value=this.ast.value;
          this.transpiler.get(value).emit(stack);
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ProtoLiteral;
        return new ProtoLiteral(args && args.length && args[0]);
      };
    })();
    exports.ProtoLiteral = ProtoLiteral;
    var ObjectLiteral = (function() {
      ObjectLiteral.prototype = exports.Node();
      ObjectLiteral.prototype.constructor = ObjectLiteral;
      var Node = exports.Node.constructor;
      function ObjectLiteral() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ObjectLiteral.prototype['emit'] = function(stack) {
        try {
          var properties=this.ast.properties;
          if(properties.length) {
            stack.top().add("{").newLine().pushTab();
            properties.forEach(function (property,i) {
              this.transpiler.get(property).emit(stack);
              if(i < properties.length - 1) {
                stack.top().add(",").newLine();
              }
            },this);
            stack.top().popTab().newLine().tab().add("}");
          } else {
            stack.top().add("{}");
          }
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ObjectLiteral;
        return new ObjectLiteral(args && args.length && args[0]);
      };
    })();
    exports.ObjectLiteral = ObjectLiteral;
    var Program = (function() {
      Program.prototype = exports.Node();
      Program.prototype.constructor = Program;
      var Node = exports.Node.constructor;
      function Program() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Program.prototype['emit'] = function(stack) {
        try {
          this.ast.children.forEach(function (node) {
            this.transpiler.get(node).emit(stack);
          },this);
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Program;
        return new Program(args && args.length && args[0]);
      };
    })();
    exports.Program = Program;
    var PropertyAccess = (function() {
      PropertyAccess.prototype = exports.Node();
      PropertyAccess.prototype.constructor = PropertyAccess;
      var Node = exports.Node.constructor;
      function PropertyAccess() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      PropertyAccess.prototype['emit'] = function(stack) {
        try {
          var base=this.ast.base;
          var name=this.ast.name;
          if(base) {
            this.transpiler.get(base).emit(stack);
          }
          if(name) {
            if(typeof((name)) === 'string') {
              stack.top().add(".").add(name);
            } else {
              switch(name.type) {
                case 'ProtoLiteral':
                  stack.top().add(' <| ');
                  this.transpiler.get(name).emit(stack);
                  break;
                default:
                  stack.top().add('[');
                  this.transpiler.get(name).emit(stack);
                  stack.top().add(']');
                  break;
              }
            }
          }
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = PropertyAccess;
        return new PropertyAccess(args && args.length && args[0]);
      };
    })();
    exports.PropertyAccess = PropertyAccess;
    var PropertyAccessProperty = (function() {
      PropertyAccessProperty.prototype = exports.Node();
      PropertyAccessProperty.prototype.constructor = PropertyAccessProperty;
      var Node = exports.Node.constructor;
      function PropertyAccessProperty() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      PropertyAccessProperty.prototype['emit'] = function(stack) {
        try {
          var name=this.ast.name;
          if(typeof((name)) === 'string') {
            stack.top().add("." + name);
          } else {
            stack.top().add('[');
            this.transpiler.get(name).emit(stack);
            stack.top().add(']');
          }
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = PropertyAccessProperty;
        return new PropertyAccessProperty(args && args.length && args[0]);
      };
    })();
    exports.PropertyAccessProperty = PropertyAccessProperty;
    var PropertyAssignment = (function() {
      PropertyAssignment.prototype = exports.Node();
      PropertyAssignment.prototype.constructor = PropertyAssignment;
      var Node = exports.Node.constructor;
      function PropertyAssignment() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      PropertyAssignment.prototype['emit'] = function(stack) {
        try {
          var name=this.ast.name;
          var value=this.ast.value;
          if(typeof((name)) === 'string') {
            stack.top().tab().add(name).add(":");
          } else {
            stack.top().tab().add("");
            this.transpiler.get(name).emit(stack);
            stack.top().add(":");
          }
          this.transpiler.get(value).emit(stack);
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = PropertyAssignment;
        return new PropertyAssignment(args && args.length && args[0]);
      };
    })();
    exports.PropertyAssignment = PropertyAssignment;
    var PrivatePropertyDefinition = (function() {
      PrivatePropertyDefinition.prototype = exports.Node();
      PrivatePropertyDefinition.prototype.constructor = PrivatePropertyDefinition;
      var Node = exports.Node.constructor;
      function PrivatePropertyDefinition() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      PrivatePropertyDefinition.prototype['emit'] = function(stack) {
        try {
          var property=this.ast.property;
          this.transpiler.get(property).emit(stack);
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = PrivatePropertyDefinition;
        return new PrivatePropertyDefinition(args && args.length && args[0]);
      };
    })();
    exports.PrivatePropertyDefinition = PrivatePropertyDefinition;
    var PrivateVariable = (function() {
      PrivateVariable.prototype = exports.Node();
      PrivateVariable.prototype.constructor = PrivateVariable;
      var Node = exports.Node.constructor;
      function PrivateVariable() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      PrivateVariable.prototype['emit'] = function(stack) {
        try {
          var name=this.ast.name;
          stack.top().add('this.').add(name.name.substr(1));
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = PrivateVariable;
        return new PrivateVariable(args && args.length && args[0]);
      };
    })();
    exports.PrivateVariable = PrivateVariable;
    var PublicPropertyDefinition = (function() {
      PublicPropertyDefinition.prototype = exports.Node();
      PublicPropertyDefinition.prototype.constructor = PublicPropertyDefinition;
      var Node = exports.Node.constructor;
      function PublicPropertyDefinition() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      PublicPropertyDefinition.prototype['emit'] = function(stack) {
        try {
          var property=this.ast.property;
          stack.top().tab().add("public ");
          this.transpiler.get(property).emit(stack);
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = PublicPropertyDefinition;
        return new PublicPropertyDefinition(args && args.length && args[0]);
      };
    })();
    exports.PublicPropertyDefinition = PublicPropertyDefinition;
    var RegularExpressionLiteral = (function() {
      RegularExpressionLiteral.prototype = exports.Node();
      RegularExpressionLiteral.prototype.constructor = RegularExpressionLiteral;
      var Node = exports.Node.constructor;
      function RegularExpressionLiteral() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      RegularExpressionLiteral.prototype['emit'] = function(stack) {
        try {
          var body=this.ast.body;
          var flags=this.ast.flags;
          stack.top().add('/').add(body).add('/').add(flags);
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = RegularExpressionLiteral;
        return new RegularExpressionLiteral(args && args.length && args[0]);
      };
    })();
    exports.RegularExpressionLiteral = RegularExpressionLiteral;
    var ReturnStatement = (function() {
      ReturnStatement.prototype = exports.Node();
      ReturnStatement.prototype.constructor = ReturnStatement;
      var Node = exports.Node.constructor;
      function ReturnStatement() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ReturnStatement.prototype['emit'] = function(stack) {
        try {
          var value=this.ast.value;
          if(value) {
            stack.top().tab().add("return ");
            this.transpiler.get(value).emit(stack);
            stack.top().add(";").newLine();
          } else {
            stack.top().tab().add("return;").newLine();
          }
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ReturnStatement;
        return new ReturnStatement(args && args.length && args[0]);
      };
    })();
    exports.ReturnStatement = ReturnStatement;
    var SetterDefinition = (function() {
      SetterDefinition.prototype = exports.Node();
      SetterDefinition.prototype.constructor = SetterDefinition;
      var Node = exports.Node.constructor;
      function SetterDefinition() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      SetterDefinition.prototype['emit'] = function(stack) {
        try {
          var name=this.ast.name;
          var param=this.ast.param;
          var body=this.ast.body;
          if(param) {
            stack.top().tab().add("set ").add(name).add("(");
            this.transpiler.get(param).emit(stack);
            stack.top().add(') {').newLine().pushTab();
          } else {
            stack.top().tab().add("set ").add(name).add("(").add(') {').newLine().pushTab();
          }
          if(body.length) {
            body.forEach(function (element) {
              this.transpiler.get(element).emit(stack);
            },this);
          } else {
            stack.top().add(') {}').newLine();
          }
          stack.top().popTab().tab().add('}').newLine();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = SetterDefinition;
        return new SetterDefinition(args && args.length && args[0]);
      };
    })();
    exports.SetterDefinition = SetterDefinition;
    var SingleLineComment = (function() {
      SingleLineComment.prototype = exports.Node();
      SingleLineComment.prototype.constructor = SingleLineComment;
      var Node = exports.Node.constructor;
      function SingleLineComment() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      SingleLineComment.prototype['emit'] = function(stack) {
        try {
          var comment=this.ast.comment;
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = SingleLineComment;
        return new SingleLineComment(args && args.length && args[0]);
      };
    })();
    exports.SingleLineComment = SingleLineComment;
    var StaticPropertyDefinition = (function() {
      StaticPropertyDefinition.prototype = exports.Node();
      StaticPropertyDefinition.prototype.constructor = StaticPropertyDefinition;
      var Node = exports.Node.constructor;
      function StaticPropertyDefinition() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      StaticPropertyDefinition.prototype['emit'] = function(stack) {
        try {
          var property=this.ast.property;
          stack.top().tab().add("static ");
          this.transpiler.get(property).emit(stack);
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = StaticPropertyDefinition;
        return new StaticPropertyDefinition(args && args.length && args[0]);
      };
    })();
    exports.StaticPropertyDefinition = StaticPropertyDefinition;
    var StringLiteral = (function() {
      StringLiteral.prototype = exports.Node();
      StringLiteral.prototype.constructor = StringLiteral;
      var Node = exports.Node.constructor;
      function StringLiteral() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      StringLiteral.prototype['emit'] = function(stack) {
        try {
          var value=this.ast.value;
          var quote=this.ast.quote;
          if(value === '\n') {
            value='\\n';
          }
          stack.top().add(quote + value + quote);
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = StringLiteral;
        return new StringLiteral(args && args.length && args[0]);
      };
    })();
    exports.StringLiteral = StringLiteral;
    var SwitchStatement = (function() {
      SwitchStatement.prototype = exports.Node();
      SwitchStatement.prototype.constructor = SwitchStatement;
      var Node = exports.Node.constructor;
      function SwitchStatement() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      SwitchStatement.prototype['emit'] = function(stack) {
        try {
          var expression=this.ast.expression;
          var clauses=this.ast.clauses;
          stack.top().tab().add("switch(");
          this.transpiler.get(expression).emit(stack);
          stack.top().add(") {").pushTab().newLine();
          clauses.forEach(function (clause) {
            this.transpiler.get(clause).emit(stack);
          },this);
          stack.top().popTab().tab().add("}").newLine();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = SwitchStatement;
        return new SwitchStatement(args && args.length && args[0]);
      };
    })();
    exports.SwitchStatement = SwitchStatement;
    var ThisExpression = (function() {
      ThisExpression.prototype = exports.Node();
      ThisExpression.prototype.constructor = ThisExpression;
      var Node = exports.Node.constructor;
      function ThisExpression() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ThisExpression.prototype['emit'] = function(stack) {
        try {
          stack.top().add('this');
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ThisExpression;
        return new ThisExpression(args && args.length && args[0]);
      };
    })();
    exports.ThisExpression = ThisExpression;
    var ThrowStatement = (function() {
      ThrowStatement.prototype = exports.Node();
      ThrowStatement.prototype.constructor = ThrowStatement;
      var Node = exports.Node.constructor;
      function ThrowStatement() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      ThrowStatement.prototype['emit'] = function(stack) {
        try {
          var exception=this.ast.exception;
          stack.top().tab().add('throw ');
          this.transpiler.get(exception).emit(stack);
          stack.top().add(';').newLine();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = ThrowStatement;
        return new ThrowStatement(args && args.length && args[0]);
      };
    })();
    exports.ThrowStatement = ThrowStatement;
    var TryStatement = (function() {
      TryStatement.prototype = exports.Node();
      TryStatement.prototype.constructor = TryStatement;
      var Node = exports.Node.constructor;
      function TryStatement() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      TryStatement.prototype['emit'] = function(stack) {
        try {
          var block=this.ast.block;
          var handler=this.ast.handler;
          var finalizer=this.ast.finalizer;
          stack.top().tab().add("try {").newLine().pushTab();
          this.transpiler.get(block).emit(stack);
          stack.top().popTab().tab().add("} ");
          handler && this.transpiler.get(handler).emit(stack);
          finalizer && this.transpiler.get(finalizer).emit(stack);
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = TryStatement;
        return new TryStatement(args && args.length && args[0]);
      };
    })();
    exports.TryStatement = TryStatement;
    var UnaryExpression = (function() {
      UnaryExpression.prototype = exports.Node();
      UnaryExpression.prototype.constructor = UnaryExpression;
      var Node = exports.Node.constructor;
      function UnaryExpression() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      UnaryExpression.prototype['emit'] = function(stack) {
        try {
          var operator=this.ast.operator;
          var expression=this.ast.expression;
          switch(operator) {
            case 'typeof':
              stack.top().add(operator).add('(');
              this.transpiler.get(expression).emit(stack);
              stack.top().add(')');
              break;
            default:
              stack.top().add(operator);
              this.transpiler.get(expression).emit(stack);
              break;
          }
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = UnaryExpression;
        return new UnaryExpression(args && args.length && args[0]);
      };
    })();
    exports.UnaryExpression = UnaryExpression;
    var Variable = (function() {
      Variable.prototype = exports.Node();
      Variable.prototype.constructor = Variable;
      var Node = exports.Node.constructor;
      function Variable() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      Variable.prototype['emit'] = function(stack) {
        try {
          var name=this.ast.name;
          stack.top().add(name.name);
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Variable;
        return new Variable(args && args.length && args[0]);
      };
    })();
    exports.Variable = Variable;
    var VariableDeclaration = (function() {
      VariableDeclaration.prototype = exports.Node();
      VariableDeclaration.prototype.constructor = VariableDeclaration;
      var Node = exports.Node.constructor;
      function VariableDeclaration() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      VariableDeclaration.prototype['emit'] = function(stack) {
        try {
          var name=this.ast.name;
          var value=this.ast.value;
          this.transpiler.get(name).emit(stack);
          if(value) {
            stack.top().add("=");
            this.transpiler.get(value).emit(stack);
          }
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = VariableDeclaration;
        return new VariableDeclaration(args && args.length && args[0]);
      };
    })();
    exports.VariableDeclaration = VariableDeclaration;
    var VariableExpression = (function() {
      VariableExpression.prototype = exports.Node();
      VariableExpression.prototype.constructor = VariableExpression;
      var Node = exports.Node.constructor;
      function VariableExpression() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      VariableExpression.prototype['emit'] = function(stack) {
        try {
          stack.top().add("var ");
          var declarations=this.ast.declarations;
          declarations.forEach(function (declaration,i) {
            this.transpiler.get(declaration).emit(stack);
            if(i < declarations.length - 1) {
              stack.top().add(',');
            }
          },this);
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = VariableExpression;
        return new VariableExpression(args && args.length && args[0]);
      };
    })();
    exports.VariableExpression = VariableExpression;
    var VariableStatement = (function() {
      VariableStatement.prototype = exports.Node();
      VariableStatement.prototype.constructor = VariableStatement;
      var Node = exports.Node.constructor;
      function VariableStatement() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      VariableStatement.prototype['emit'] = function(stack) {
        try {
          stack.top().tab().add("var ");
          var declarations=this.ast.declarations;
          declarations.forEach(function (declaration,i) {
            this.transpiler.get(declaration).emit(stack);
            if(i < declarations.length - 1) {
              stack.top().add(',');
            }
          },this);
          stack.top().add(';').newLine();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = VariableStatement;
        return new VariableStatement(args && args.length && args[0]);
      };
    })();
    exports.VariableStatement = VariableStatement;
    var WhileStatement = (function() {
      WhileStatement.prototype = exports.Node();
      WhileStatement.prototype.constructor = WhileStatement;
      var Node = exports.Node.constructor;
      function WhileStatement() {
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            ast:null,
            transpiler:null
          };
          try {
            Node.call(this,properties);
          } catch(e) {
            log.Logger.error(this,e);
          }
        }
        return ctor.apply(this,args) || this;
      }
      WhileStatement.prototype['emit'] = function(stack) {
        try {
          var condition=this.ast.condition;
          var statement=this.ast.statement;
          stack.top().tab().add('while(');
          this.transpiler.get(condition).emit(stack);
          stack.top().add(') {').newLine().pushTab();
          this.transpiler.get(statement).emit(stack);
          stack.top().popTab().tab().add('}').newLine();
        } catch(e) {
          log.Logger.error(this,e);
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = WhileStatement;
        return new WhileStatement(args && args.length && args[0]);
      };
    })();
    exports.WhileStatement = WhileStatement;
