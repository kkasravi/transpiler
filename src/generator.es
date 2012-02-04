module generator {
  module log from 'log';
//  module controller from 'controller';
//  module events from 'events';
  export class Node {
    constructor(properties={ast:null,transpiler:null}) {
      private ast, transpiler;
      try {
        @ast = properties.ast;
        @transpiler = properties.transpiler;
//        @ast && controller.Controller.publish(events.CustomEvent({type:@ast.type,detail:@ast}));
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    emit(stack) {
    }
  };
  export class ArrayLiteral extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    emit(stack) {
      try {
        stack.top().add('[');
        var elements = @ast.elements;
        elements.forEach(function(element,i) {
          @transpiler.get(element).emit(stack);
          if(i<elements.length-1) {
            stack.top().add(',');
          }
        }, this);
        stack.top().add(']');
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class AssignmentExpression extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    emit(stack) {
      try {
        var left = @ast.left;
        @transpiler.get(left).emit(stack);
        var operator = @ast.operator;
        stack.top().add(operator);
        var right = @ast.right;
        @transpiler.get(right).emit(stack);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class Block extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    emit(stack) {
      try {
        var statements = @ast.statements;
        statements.forEach(function(statement) {
          @transpiler.get(statement).emit(stack);
        }, this);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class BinaryExpression extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    emit(stack) {
      try {
        var left = @ast.left;
        @transpiler.get(left).emit(stack);
        var operator = @ast.operator;
        stack.top().add(' '+operator+' ');
        var right = @ast.right;
        @transpiler.get(right).emit(stack);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class BooleanLiteral extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    emit(stack) {
      try {
        var value = @ast.value;
        stack.top().add(value.toString());
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class BreakStatement extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    emit(stack) {
      try {
        var label = @ast.label;
        stack.top().tab().add('break;').newLine();
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class CallExpression extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    emit(stack) {
      try {
        var variable = @ast.name;
        @transpiler.get(variable).emit(stack);
        stack.top().add('(');
        var args = @ast.args;
        args.forEach(function(arg,i) {
          @transpiler.get(arg).emit(stack);
          if(i<args.length-1) {
            stack.top().add(',');
          }
        }, this);
        stack.top().add(')');
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  }
  export class CaseClause extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    emit(stack) {
      try {
        var selector = @ast.selector;
        var statements = @ast.statements;
        stack.top().tab().add('case ');
        @transpiler.get(selector).emit(stack);
        stack.top().add(':').newLine().pushTab();
        statements.forEach(function(statement) {
          @transpiler.get(statement).emit(stack);
        },this);
        stack.top().popTab();
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  }
  export class Catch extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    emit(stack) {
      try {
        var identifier = @ast.identifier;
        var block = @ast.block;
        stack.top().add("catch(");
        @transpiler.get(identifier).emit(stack);
        stack.top().add(") {").newLine().pushTab();
        @transpiler.get(block).emit(stack);
        stack.top().popTab().tab().add("}").newLine();
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  }
  export class ClassDeclaration extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var name = @ast.name;
        var heritage = @ast.heritage;
        var elements = @ast.elements, params, statements;
        var constructorDef, constructorStatements = [];
        var constDecls = [], dataDecls = [], getDecls = [], setDecls = [];
        var defaultParams = [];
        var publicDefs = [], publicDecls;
        var privateDefs = [], privateDecls;
        var staticDefs = [], staticRefs = [];
        if(elements.length) {
          elements.forEach(function(element) {
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
                constructorDef = element;
                statements = constructorDef.elements;
                if(statements.length) {
                  statements.forEach(function(statement) {
                    if(statement.type === 'PrivatePropertyDefinition') {
                      privateDefs.push(statement);
                    } else {
                      constructorStatements.push(statement);
                    }
                  }, this);
                }
                break;
              case 'StaticPropertyDefinition':
                staticDefs.push(element);
                break;
              default:
                log.Logger.error(this,'unhandled type:'+element.type);
                break;
            }
          }, this);
        }
        stack.top().tab().add("var ");
        @transpiler.get(name).emit(stack);
        stack.top().add(" = (function() {").newLine().pushTab();
        //heritage
        if(heritage) {
          stack.top().tab().add("");
          @transpiler.get(name).emit(stack);
          if(heritage.name.base) {
            stack.top().add(".prototype = ");
            @transpiler.get(heritage.name).emit(stack);
          } else {
            stack.top().add(".prototype = exports.");
            @transpiler.get(heritage.name).emit(stack);
          }
          stack.top().add("();").newLine();
          stack.top().tab().add("");
          @transpiler.get(name).emit(stack);
          stack.top().add(".prototype.constructor = ");
          @transpiler.get(name).emit(stack);
          stack.top().add(";").newLine();
          stack.top().tab().add("var ");
          if(heritage.name.base) {
            stack.top().add(heritage.name.name).add(" = ");
          } else {
            @transpiler.get(heritage.name).emit(stack);
            stack.top().add(" = exports.");
          }
          @transpiler.get(heritage.name).emit(stack);
          stack.top().add(".constructor;").newLine();
        }
        stack.top().tab().add("function ");
        @transpiler.get(name).emit(stack);
        stack.top().add("() {").newLine().pushTab();
        //privateDefs
        if(privateDefs.length) {
          stack.top().tab().add("function privateData() {").newLine().pushTab();
          privateDefs.forEach(function(privateDef) {
            privateDecls = privateDef.property.declarations
            privateDecls.forEach(function(privateDecl) {
              stack.top().tab().add("this.").add(privateDecl.name.name);
              var value = privateDecl.value;
              if(value) {
                stack.top().add(" = ");
                @transpiler.get(value).emit(stack);
                stack.top().add(";").newLine();
              } else { 
                stack.top().add(" = null;").newLine();
              }
            }, this);
          }, this);
          stack.top().popTab().tab().add("}").newLine();
          stack.top().tab().add("var p_vars = new privateData();").newLine();
          privateDefs.forEach(function(privateDef) {
            privateDecls = privateDef.property.declarations;
            privateDecls.forEach(function(privateDecl) {
              stack.top().tab().add("var ").add(privateDecl.name.name);
              stack.top().add(" = p_vars.").add(privateDecl.name.name).add(";").newLine();
              stack.top().tab().add("Object.getOwnPropertyDescriptor(this,").add("'").add(privateDecl.name.name).add("') || ").add("Object.defineProperty(this,").add("'").add(privateDecl.name.name).add("', {get: function(){return ").add(privateDecl.name.name).add(";},").add('set: function(e){').add(privateDecl.name.name).add('=e;').add("}});").newLine();
            }, this);
          }, this);
        }
        //constructor
        stack.top().tab().add("var args = Array.prototype.slice.call(arguments);").newLine();
        stack.top().tab().add("var ctor = function (");
        if(constructorDef) {
          //parms
          params = constructorDef.params;
          if(params && params.length) {
            params.forEach(function(param,i) {
              //may have default
              if(param.value)  {
                defaultParams.push(param);
                stack.top().add('_');
                @transpiler.get(param.name).emit(stack);
              } else {
                @transpiler.get(param).emit(stack);
              }
              if(i<params.length-1) {
                stack.top().add(',');
              }
            }, this);
          }
        }
        stack.top().add(") {").newLine().pushTab();
        defaultParams.forEach(function(param) {
          stack.top().tab().add('var ');
          @transpiler.get(param.name).emit(stack);
          stack.top().add(' = _');
          @transpiler.get(param.name).emit(stack);
          stack.top().add(' || ');
          @transpiler.get(param.value).emit(stack);
          stack.top().add(';').newLine();
        }, this);
        if(constructorStatements.length) {
          constructorStatements.forEach(function(statement) {
            @transpiler.get(statement).emit(stack);
          }, this);
        }
        stack.top().popTab().tab().add("}").newLine();
        stack.top().tab().add("return ctor.apply(this,args) || this;").newLine();
        stack.top().popTab().tab().add("}").newLine();
        //publicDefs
        if(publicDefs.length) {
          defaultParams = [];
          publicDefs.forEach(function(publicDef,i) {
            var type = publicDef.type, value;
            switch(type) {
              case "GetterDefinition":
                getDecls.push(publicDef);
                break;
              case "SetterDefinition":
                setDecls.push(publicDef);
                break;
              case "MethodDefinition":
                stack.top().tab().add("");
                @transpiler.get(name).emit(stack);
                stack.top().add(".prototype['").add(publicDef.name.name).add("'] = function(");
                //parms
                var params = publicDef.params;
                if(params && params.length) {
                    params.forEach(function(param,i) {
                      if(param.value)  {
                        defaultParams.push(param);
                        stack.top().add('_');
                        @transpiler.get(param.name).emit(stack);
                      } else {
                        @transpiler.get(param).emit(stack);
                      }
                      if(i<params.length-1) {
                        stack.top().add(',');
                      }
                    }, this);
                }
                stack.top().add(") {").newLine().pushTab();
                statements = publicDef.elements;
                if(statements.length) {
                  statements.forEach(function(statement) {
                    @transpiler.get(statement).emit(stack);
                  }, this);
                }
                stack.top().popTab().tab().add("};").newLine();
                break;
              case "ConstDeclaration":
                publicDecls = publicDef.declarations;
                publicDecls.forEach(function(publicDecl) {
                  constDecls.push(publicDecl);
                }, this);
                break;
              case "DataDefinition":
                publicDecls = publicDef.declarations;
                publicDecls.forEach(function(publicDecl) {
                  dataDecls.push(publicDecl);
                }, this);
                break;
              default:
                log.Logger.error(this,'unhandled public type:'+publicDef.type);
                break;
            }
          }, this);
        }
        getDecls.forEach(function(getDecl) {
          stack.top().tab().add("Object.defineProperty(");
          @transpiler.get(name).emit(stack);
          stack.top().add(".prototype,").add("'").add(getDecl.name);
          stack.top().add("', {get: function(){");
          statements = getDecl.body;
          if(statements.length) {
            statements.forEach(function(statement) {
              @transpiler.get(statement).emit(stack);
            }, this);
          }
          stack.top().tab().add("}});").newLine();
        }, this);
        setDecls.forEach(function(setDecl) {
          stack.top().tab().add("Object.defineProperty(");
          @transpiler.get(name).emit(stack);
          stack.top().add(".prototype,").add("'").add(setDecl.name);
          stack.top().add("', {set: function(e){");
          statements = setDecl.body;
          if(statements.length) {
            statements.forEach(function(statement) {
              @transpiler.get(statement).emit(stack);
            }, this);
          }
          stack.top().tab().add("}});").newLine();
        }, this);
        constDecls.forEach(function(constDecl) {
          stack.top().tab().add("Object.defineProperty(");
          @transpiler.get(name).emit(stack);
          stack.top().add(".prototype,").add("'").add(constDecl.name.name);
          stack.top().add("', {get: function(){return ");
          @transpiler.get(constDecl.value).emit(stack);
          stack.top().tab().add("}});").newLine();
        }, this);
        dataDecls.forEach(function(dataDecl) {
          stack.top().tab().add("Object.defineProperty(");
          @transpiler.get(name).emit(stack);
          stack.top().add(".prototype,").add("'").add(dataDecl.name.name).add("', {value:"); 
          @transpiler.get(dataDecl.value).emit(stack);
          stack.top().add(", writable: true, enumerable: true, configurable: true});").newLine();
        }, this);
        staticDefs.forEach(function(staticDef) {
          switch(staticDef.property.type) {
            case "MethodDefinition":
              stack.top().tab().add("");
              @transpiler.get(name).emit(stack);
              stack.top().add(".");
              var methodDef = staticDef.property;
              stack.top().add(methodDef.name.name).add(" = function(");
              staticRefs.push(methodDef.name.name);
              //parms
              var params = methodDef.params;
              if(params && params.length) {
                params.forEach(function(param,i) {
                  @transpiler.get(param).emit(stack);
                  if(i<params.length-1) {
                    stack.top().add(',');
                  }
                }, this);
              }
              stack.top().add(") {").newLine().pushTab();
              statements = methodDef.elements;
              if(statements.length) {
                statements.forEach(function(statement) {
                  @transpiler.get(statement).emit(stack);
                }, this);
              }
              stack.top().popTab().tab().add("}").newLine();
              break;
            case "DataDefinition":
              staticDef.property.declarations.forEach(function(staticDecl) {
                stack.top().tab().add("");
                @transpiler.get(name).emit(stack);
                stack.top().add(".");
                @transpiler.get(staticDecl.name).emit(stack);
                staticRefs.push(staticDecl.name.name);
                stack.top().add(" = ");
                @transpiler.get(staticDecl.value).emit(stack);
                stack.top().add(";").newLine();
              }, this);
              break;
           default: 
              log.Logger.error(this,'unhandled static type:'+staticDecl.type);
              break;
          }
        }, this);
        stack.top().tab().add("return function __() {").newLine().pushTab();
        stack.top().tab().add("var args = Array.prototype.slice.call(arguments);").newLine();
        staticRefs.forEach(function(staticRef) {
          stack.top().tab().add('__.').add(staticRef).add(' = ');
          @transpiler.get(name).emit(stack);
          stack.top().add('.').add(staticRef).add(';').newLine();
        }, this);
        stack.top().tab().add("__.constructor = ");
        @transpiler.get(name).emit(stack);
        stack.top().add(";").newLine();
        stack.top().tab().add("return new ");
        @transpiler.get(name).emit(stack);
        stack.top().add("(args && args.length && args[0]);").newLine().popTab();
        stack.top().tab().add("};").newLine().popTab();
        stack.top().tab().add("})();").newLine();
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class ConditionalExpression extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var condition = @ast.condition;
        var trueExpression = @ast.trueExpression;
        var falseExpression = @ast.falseExpression;
        @transpiler.get(condition).emit(stack);
        stack.top().add('?');
        @transpiler.get(trueExpression).emit(stack);
        stack.top().add(':');
        @transpiler.get(falseExpression).emit(stack);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class Constructor extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var params = @ast.params;
        var elements = @ast.elements;
        stack.top().tab().add("constructor(");
        params.forEach(function(param,i) {
          @transpiler.get(param).emit(stack);
          if(i<params.length-1) {
            stack.top().add(',');
          }
        }, this);
        stack.top().add(') {').newLine().pushTab();
        elements.forEach(function(element) {
          @transpiler.get(element).emit(stack);
        }, this);
        stack.top().popTab().tab().add("}").newLine();
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class ConstDeclaration extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        stack.top().tab().add("const ");
        var declarations = @ast.declarations;
        declarations.forEach(function(declaration,i) {
          @transpiler.get(declaration).emit(stack);
          if(i<declarations.length-1) {
            stack.top().add(',');
          }
        }, this);
        stack.top().add(';').newLine();
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class ContinueStatement extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
        try {
          var label = @ast.label;
          if(label) {
            stack.top().tab().add('continue').add(label).add(';').newLine();
          } else {
            stack.top().tab().add('continue;').newLine();
          }
        } catch(e) {
          log.Logger.error(this,e);
        }  
    }
  };
  export class DataDefinition extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var declarations = @ast.declarations;
        declarations.forEach(function(declaration,i) {
          @transpiler.get(declaration).emit(stack);
          if(i<declarations.length-1) {
            stack.top().add(',');
          }
        }, this);
        stack.top().add(';').newLine();
      } catch(e) {
        log.Logger.error(this,e);
      } 
    }
  };
  export class DebuggerStatement extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        stack.top().add('debugger;').newLine();
      } catch(e) {
        log.Logger.error(this,e);
      } 
    }
  };
  export class DefaultClause extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var statements = @ast.statements;
        stack.top().tab().add('default:').newLine().pushTab();
        statements.forEach(function(statement) {
          @transpiler.get(statement).emit(stack);
        },this);
        stack.top().popTab();
      } catch(e) {
        log.Logger.error(this,e);
      } 
    }
  };
  export class DoWhileStatement extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var statement = @ast.statement;
        var condition = @ast.condition;
        stack.top().tab().add("do {").pushTab().newLine();
        @transpiler.get(statement).emit(stack);
        stack.top().popTab().tab().add("} while(");
        @transpiler.get(condition).emit(stack);
        stack.top().add(');').newLine();
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class EmptyStatement extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        stack.top().tab().add(';//empty').newLine();
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class Exports extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var lexports = @ast.exports;
        stack.top().add('{');
        lexports.forEach(function(lexport,i) {
          @transpiler.get(lexport).emit(stack);
          if(i<lexports.length-1) {
            stack.top().add(',');
          }
        }, this);
        stack.top().add('}');
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class ExportMapping extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var name = @ast.name;
        var value = @ast.value;
        @transpiler.get(name).emit(stack);
        if(value) {
          stack.top().add(" from ");
          @transpiler.get(value).emit(stack);
        }
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class ExportSpecifier extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var alias = @ast.alias;
        var name = @ast.name;
        @transpiler.get(name).emit(stack);
        if(alias) {
          stack.top().add(':');
          @transpiler.get(alias).emit(stack);
        }
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class ExportStatement extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var declarations = @ast.declarations;
        declarations.forEach(function(declaration) {
          @transpiler.get(declaration).emit(stack);
          var declName = declaration.name ? declaration.name.name : declaration.declarations[0].name.name;
          stack.top().tab().add("exports.").add(declName).add(" = ").add(declName).add(";").newLine();
        },this);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class ExpressionStatement extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var expression = @ast.expression;
        stack.top().tab();
        @transpiler.get(expression).emit(stack);
        stack.top().add(';').newLine();
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class Finally extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var block = @ast.block;
        stack.top().add("finally {");
        @ast.get(block).emit(stack);
        stack.top().popTab().tab().add("}").newLine();
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class ForInStatement extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var iterator = @ast.iterator;
        var collection = @ast.collection;
        var statement = @ast.statement;
        stack.top().tab().add('for(');
        @transpiler.get(iterator).emit(stack);
        stack.top().add(' in ');
        @transpiler.get(collection).emit(stack);
        stack.top().add(') {').newLine().pushTab();
        @transpiler.get(statement).emit(stack);
        stack.top().popTab().tab().add('}').newLine();
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class FormalParameter extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var name = @ast.name;
        var value = @ast.value;
        @transpiler.get(name).emit(stack);
        if(value) {
          stack.top().add("=");
          @transpiler.get(value).emit(stack);
        }
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class ForStatement extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var initializer = @ast.initializer;
        var test = @ast.test;
        var counter = @ast.counter;
        var statement = @ast.statement;
        stack.top().tab().add("for(");
        initializer && @transpiler.get(initializer).emit(stack);
        stack.top().add(";");
        test && @transpiler.get(test).emit(stack);
        stack.top().add(";");
        counter && @transpiler.get(counter).emit(stack);
        stack.top().add(") {").pushTab().newLine();
        @transpiler.get(statement).emit(stack);
        stack.top().popTab().tab().add("}").newLine();
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class FunctionCallArguments extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var args = @ast.args;
        var argarray = [];
        args.forEach(function(arg) {
          argarray.push(arg);
        }, this);
        stack.top().add(argarray.join(','));
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class FunctionDeclaration extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var name = @ast.name;
        var params = @ast.params;
        var elements = @ast.elements;
        stack.top().tab().add("function ");
        @transpiler.get(name).emit(stack);
        stack.top().add("(");
        params.forEach(function(param,i) {
          @transpiler.get(param).emit(stack);
          if(i<params.length-1) {
            stack.top().add(',');
          }
        }, this);
        if(elements.length) {
          stack.top().add(') {').newLine().pushTab();
          elements.forEach(function(element) {
            @transpiler.get(element).emit(stack);
          }, this);
          stack.top().popTab().tab().add('}').newLine();
        } else {
          stack.top().add(') {}').newLine();
        }
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class FunctionExpression extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        stack.top().add("function ");
        var name = @ast.name;
        name && @transpiler.get(name).emit(stack);
        stack.top().add("(");
        var params = @ast.params;
        params.forEach(function(param,i) {
          @transpiler.get(param).emit(stack);
          if(i<params.length-1) {
            stack.top().add(',');
          }
        }, this);
        var elements = @ast.elements;
        if(elements.length) {
          stack.top().add(') {').newLine().pushTab();
          elements.forEach(function(element,i) {
            @transpiler.get(element).emit(stack);
          }, this);
          stack.top().popTab().tab().add('}');
        } else {
          stack.top().add(') {}');
        }
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class Identifier extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var n = @ast.name;
        if(typeof(n) === 'string') {
          stack.top().add(n);
        } else if(n.name) {
          stack.top().add(n.name);
        }
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class IfStatement extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        stack.top().tab().add("if(");
        var condition = @ast.condition;
        @transpiler.get(condition).emit(stack);
        stack.top().add(") {").newLine().pushTab();
        var ifStatement = @ast.ifStatement;
        @transpiler.get(ifStatement).emit(stack);
        var elseStatement = @ast.elseStatement;
        if(elseStatement) {
          stack.top().popTab().tab().add("} else {").newLine().pushTab();
          @transpiler.get(elseStatement).emit(stack);
          stack.top().popTab().tab().add("}").newLine();
        } else {
          stack.top().popTab().tab().add("}").newLine();
        }
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class ImportIdentifier extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var n = @ast.name;
        if(Array.isArray(n)) {
          stack.top().add(n[0]);
        }
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class Inheritance extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var name = @ast.name;
        var inheritance = @ast.inheritance;
        stack.top().tab().add(' '+inheritance+' ');
        @transpiler.get(name).emit(stack);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class GetterDefinition extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var name = @ast.name;
        var body = @ast.body;
        if(body.length) {
          stack.top().tab().add("get ").add(name).add("(").add(') {').newLine().pushTab();
          body.forEach(function(element) {
            @transpiler.get(element).emit(stack);
          }, this);
        } else {
          stack.top().add(') {}').newLine();
        }
        stack.top().popTab().tab().add('}').newLine();
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class Imports extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var imports = @ast.imports;
        stack.top().add('{');
        imports.forEach(function(limport,i) {
          @transpiler.get(limport).emit(stack);
          if(i<imports.length-1) {
            stack.top().add(',');
          }
        }, this);
        stack.top().add('}');
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class ImportSpecifier extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var alias = @ast.alias;
        var name = @ast.name;
        @transpiler.get(name).emit(stack);
        if(alias) {
          stack.top().add(':');
          @transpiler.get(alias).emit(stack);
        }
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class ImportDeclaration extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var name = @ast.name;
        var value = @ast.value;
        @transpiler.get(name).emit(stack);
        if(value) {
          stack.top().add(" from ");
          @transpiler.get(value).emit(stack);
        }
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class ImportStatement extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var declarations = @ast.declarations;
        declarations.forEach(function(declaration,i) {
          stack.top().tab().add("var ");
          if(declaration.name.name && declaration.name.name[0] === '*') {
            @transpiler.get(declaration.value).emit(stack);
            stack.top().add(" = require('");
            @transpiler.get(declaration.value).emit(stack);
            stack.top().add("');").newLine();
          } else {
            @transpiler.get(declaration.name).emit(stack);
            stack.top().add(" = require('");
            @transpiler.get(declaration.value).emit(stack);
            stack.top().add("').");
            @transpiler.get(declaration.name).emit(stack);
            stack.top().add(';').newLine();
          }
        }, this);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class LetDeclaration extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        stack.top().tab().add("let ");
        var declarations = @ast.declarations;
        declarations.forEach(function(declaration,i) {
          @transpiler.get(declaration).emit(stack);
          if(i<declarations.length-1) {
            stack.top().add(',');
          }
        }, this);
        stack.top().add(';').newLine();
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class Literal extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var value = @ast.value;
        @transpiler.get(value).emit(stack);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class MethodDefinition extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var name = @ast.name;
        var params = @ast.params;
        var elements = @ast.elements;
        @transpiler.get(name).emit(stack);
        stack.top().add("(");
        params.forEach(function(param,i) {
          @transpiler.get(param).emit(stack);
          if(i<params.length-1) {
            stack.top().add(',');
          }
        }, this);
        if(elements.length) {
          stack.top().add(') {').newLine().pushTab();
          elements.forEach(function(element) {
            @transpiler.get(element).emit(stack);
          }, this);
          stack.top().popTab().tab().add('}').newLine();
        } else {
          stack.top().add(') {}').newLine();
        }
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class ModuleDeclaration extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var name = @ast.name;
        var expression = @ast.expression;
        @transpiler.get(name).emit(stack);
        if(expression) {
          stack.top().add(" = require(");
          @transpiler.get(expression).emit(stack);
          stack.top().add(")");
        }
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class ModuleExpression extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var nameparts = @ast.nameparts;
        if(nameparts && nameparts.length) {
          nameparts.forEach(function(name,i) {
            if(typeof(name) === 'string') {
              stack.top().add(name);
            } else {
              @transpiler.get(name).emit(stack);
            }
            if(i > 0 && i < nameparts.length) {
              stack.top().add(".");
            }
          }, this);
        }
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class ModuleDefinition extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var name = @ast.name;
        var elements = @ast.elements;
        stack.top().tab().add("(function() {").newLine().pushTab();
        stack.top().tab().add("var nm = module.Module('");
        @transpiler.get(name).emit(stack);
        stack.top().add("');").newLine();
        stack.top().tab().add("(function(require, exports, moduleId) {").newLine().pushTab();
        if(elements.length) {
          elements.forEach(function(element) {
            @transpiler.get(element).emit(stack);
          }, this);
        } 
        stack.top().popTab().tab().add("})(require, nm.getExports(), nm.getId());").newLine();
        stack.top().popTab().tab().add('})();').newLine();
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class ModuleStatement extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        stack.top().tab().add("var ");
        var declarations = @ast.declarations;
        declarations.forEach(function(declaration,i) {
          @transpiler.get(declaration).emit(stack);
          if(i<declarations.length-1) {
            stack.top().add(',');
          }
        }, this);
        stack.top().add(';').newLine();
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class NewOperator extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var args = @ast.args;
        var cons = @ast.cons;
        stack.top().add('new ');
        @transpiler.get(cons).emit(stack);
        stack.top().add('(');
        args.forEach(function(arg,i) {
          @transpiler.get(arg).emit(stack);
          if(i<args.length-1) {
            stack.top().add(',');
          }
        }, this);
        stack.top().add(')');
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class NullLiteral extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        stack.top().add("null");
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class NumericLiteral extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var value = @ast.value;
        stack.top().add(value.toString());
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class ParenthesizedExpression extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
      Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        stack.top().add("(");
        @transpiler.get(@ast.expression).emit(stack);
        stack.top().add(")");
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  }
  export class PostfixExpression extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var operator = @ast.operator;
        var expression = @ast.expression;
        stack.top().add(operator);
        @transpiler.get(expression).emit(stack);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class ProtoLiteral extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var value = @ast.value;
        @transpiler.get(value).emit(stack);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class ObjectLiteral extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var properties = @ast.properties;
        if(properties.length) {
          stack.top().add("{").newLine().pushTab();
          properties.forEach(function(property,i) {
            @transpiler.get(property).emit(stack);
            if(i<properties.length-1){
              stack.top().add(",").newLine();
            }
          }, this);
          stack.top().popTab().newLine().tab().add("}");
        } else {
          stack.top().add("{}");
        }
      } catch(e) {
        log.Logger.error(this,e);
      } 
    }
  };
  export class Program extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        @ast.children.forEach(function(node) {
          @transpiler.get(node).emit(stack);
        },this);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class PropertyAccess extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var base = @ast.base;
        var name = @ast.name;
        if(base) {
          @transpiler.get(base).emit(stack);
        }
        if(name) {
          if(typeof(name) === 'string') {
            stack.top().add(".").add(name);
          } else {
            switch(name.type) {
              case 'ProtoLiteral':
                stack.top().add(' <| ');
                @transpiler.get(name).emit(stack);
                break;
              default:
                stack.top().add('[');
                @transpiler.get(name).emit(stack);
                stack.top().add(']');
                break;
            }
          }
        }
      } catch(e) {
        log.Logger.error(this,e);
      } 
    }
  };
  export class PropertyAccessProperty extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var name = @ast.name;
        if(typeof(name) === 'string') {
          stack.top().add("."+name);
        } else {
          stack.top().add('[');
          @transpiler.get(name).emit(stack);
          stack.top().add(']');
        }
      } catch(e) {
        log.Logger.error(this,e);
      } 
    }
  };
  export class PropertyAssignment extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var name = @ast.name;
        var value = @ast.value;
        if(typeof(name) === 'string') {
          stack.top().tab().add(name).add(":");
        } else {
          stack.top().tab().add("");
          @transpiler.get(name).emit(stack);
          stack.top().add(":");
        }
        @transpiler.get(value).emit(stack);
      } catch(e) {
        log.Logger.error(this,e);
      } 
    }
  };
  export class PrivatePropertyDefinition extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var property = @ast.property;
        @transpiler.get(property).emit(stack);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class PrivateVariable extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var name = @ast.name;
        stack.top().add('this.').add(name.name.substr(1));
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class PublicPropertyDefinition extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var property = @ast.property;
        stack.top().tab().add("public ");
        @transpiler.get(property).emit(stack);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class RegularExpressionLiteral extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var body = @ast.body;
        var flags = @ast.flags;
        stack.top().add('/').add(body).add('/').add(flags);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class ReturnStatement extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var value = @ast.value;
        if(value) {
          stack.top().tab().add("return ");
          @transpiler.get(value).emit(stack);
          stack.top().add(";").newLine();
        } else {
          stack.top().tab().add("return;").newLine();
        }
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class SetterDefinition extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var name = @ast.name;
        var param = @ast.param;
        var body = @ast.body;
        if(param) {
          stack.top().tab().add("set ").add(name).add("(");
          @transpiler.get(param).emit(stack);
          stack.top().add(') {').newLine().pushTab();
        } else {
          stack.top().tab().add("set ").add(name).add("(").add(') {').newLine().pushTab();
        }
        if(body.length) {
          body.forEach(function(element) {
            @transpiler.get(element).emit(stack);
          }, this);
        } else {
          stack.top().add(') {}').newLine();
        }
        stack.top().popTab().tab().add('}').newLine();
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class StaticPropertyDefinition extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var property = @ast.property;
        stack.top().tab().add("static ");
        @transpiler.get(property).emit(stack);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class StringLiteral extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var value = @ast.value;
        var quote = @ast.quote;
        if(value==='\n'){
          value='\\n';
        }
        stack.top().add(quote+value+quote);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class SwitchStatement extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var expression = @ast.expression;
        var clauses = @ast.clauses;
        stack.top().tab().add("switch(");
        @transpiler.get(expression).emit(stack);
        stack.top().add(") {").pushTab().newLine();
        clauses.forEach(function(clause) {
          @transpiler.get(clause).emit(stack);
        }, this);
        stack.top().popTab().tab().add("}").newLine();
      } catch(e) {
        log.Logger.error(this,e);
      } 
    }
  };
  export class ThisExpression extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        stack.top().add('this');
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class ThrowStatement extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var exception = @ast.exception;
        stack.top().tab().add('throw ');
        @transpiler.get(exception).emit(stack);
        stack.top().add(';').newLine();
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class TryStatement extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var block = @ast.block;
        var handler = @ast.handler;
        var finalizer = @ast.finalizer;
        stack.top().tab().add("try {").newLine().pushTab();
        @transpiler.get(block).emit(stack);
        stack.top().popTab().tab().add("} ");
        handler && @transpiler.get(handler).emit(stack);
        finalizer && @transpiler.get(finalizer).emit(stack);
      } catch(e) {
        log.Logger.error(this,e);
      } 
    }
  };
  export class UnaryExpression extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var operator = @ast.operator;
        var expression = @ast.expression;
        switch(operator) {
          case 'typeof':
            stack.top().add(operator).add('(');
            @transpiler.get(expression).emit(stack);
            stack.top().add(')');
            break;
          default:
            stack.top().add(operator);
            @transpiler.get(expression).emit(stack);
            break;
        }
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class Variable extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var name = @ast.name;
        stack.top().add(name.name);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class VariableDeclaration extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var name = @ast.name;
        var value = @ast.value;
        @transpiler.get(name).emit(stack);
        if(value) {
          stack.top().add("=");
          @transpiler.get(value).emit(stack);
        }
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class VariableExpression extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        stack.top().add("var ");
        var declarations = @ast.declarations;
        declarations.forEach(function(declaration,i) {
          @transpiler.get(declaration).emit(stack);
          if(i<declarations.length-1) {
            stack.top().add(',');
          }
        }, this);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class VariableStatement extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        stack.top().tab().add("var ");
        var declarations = @ast.declarations;
        declarations.forEach(function(declaration,i) {
          @transpiler.get(declaration).emit(stack);
          if(i<declarations.length-1) {
            stack.top().add(',');
          }
        }, this);
        stack.top().add(';').newLine();
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
  export class WhileStatement extends Node {
    constructor(properties={ast:null,transpiler:null}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
    emit(stack) {
      try {
        var condition = @ast.condition;
        var statement = @ast.statement;
        stack.top().tab().add('while(');
        @transpiler.get(condition).emit(stack);
        stack.top().add(') {').newLine().pushTab();
        @transpiler.get(statement).emit(stack);
        stack.top().popTab().tab().add('}').newLine();
      } catch(e) {
        log.Logger.error(this,e);
      }  
    }
  };
}
