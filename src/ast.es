module ast {
  module log from 'log';
  export class Position {
    constructor(line, column) {
      private line, column;
      @line = line;
      @column = column;     
    }
  };
  export class SourceLocation {
    constructor(properties={source:null,start:0,end:0}) {
      private source, start, end;
      @source = properties.source;
      @start = properties.start;
      @end = properties.end;
    }
  };
  export class Node {
    constructor(properties={type:'Node',loc:-1}) {
      private type, loc;
      @type = properties.type;
      @loc = properties.loc;
    }
    public get attributes() {
      return {};
    }
    public get children() {
      return [];
    }
    public toSource() {
      return @loc.source.substring(@loc.start.line,@loc.end.line);
    }
    toString() {
      return @type;
    }
  };
  export class Expression extends Node {
    constructor(properties={}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class Literal extends Expression {
    constructor(properties={value:null}) {
      private value;
      try {
        Expression.call(this, properties);
        @value = properties.value;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class ProtoLiteral extends Literal {
    constructor(properties={}) {
      try {
        Literal.call(this,properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class Program extends Node {
    constructor(properties={elements:[]}) {
      private elements;
      try {
        Node.call(this, properties);
        @elements = properties.elements;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    public get children() {
      return @elements;
    }
  };
  export class Function extends Node {
    constructor(properties={body:null,id:null,params:null}) {
      private body, id, params;
      try {
        Node.call(this, properties);
        @body = properties.body;
        @id = properties.id;
        @params = properties.params || [];
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class Statement extends Node {
    constructor(properties={}) {
      try {
        Node.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class EmptyStatement extends Statement {
    constructor(properties={}) {
      try {
        Statement.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class Block extends Statement {
    constructor(properties={statements:[]}) {
      private statements;
      try {
        Statement.call(this,properties);
        @statements = properties.statements;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    public get children() {
      return @statements;
    }
  };
  export class Catch extends Statement {
    constructor(properties={block:null,identifier:null}) {
      private block, identifier;
      Statement.call(this,properties);
      @block = properties.block;
      @identifier = properties.identifier;
    }
    public get children() {
      return [@block];
    }
  };
  export class Constructor extends Node {
    constructor(properties={elements:null,params:null}) {
      private elements, params;
      try {
        Node.call(this,properties);
        @elements = properties.elements;
        @params = properties.params;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return [@elements];
    }
  };
  export class ExpressionStatement extends Statement {
    constructor(properties={expression:null}) {
      private expression;
      try {
        Statement.call(this, properties);
        @expression = properties.expression;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class ParenthesizedExpression extends Expression {
    constructor(properties={expression:null}) {
      private expression;
      try {
        Expression.call(this, properties);
        @expression = properties.expression;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class Finally extends Statement {
    constructor(properties={block:null}) {
      private block;
      try {
        @block = properties.block;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return [@block];
    }
  };
  export class FunctionCallArguments extends Node {
    constructor(properties={args:null}) {
      private args;
      try {
        Node.call(this, properties);
        @args = properties.args;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class IfStatement extends Statement {
    constructor(properties={args:null}) {
      private condition, ifStatement, elseStatement;
      try {
        Statement.call(this, properties);
        @condition = properties.condition;
        @ifStatement = properties.ifStatement;
        @elseStatement = properties.elseStatement;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get attributes() {
      return @condition;
    }
    get children() {
      return [@ifStatement,@elseStatement];
    }
  };
  export class ImportStatement extends Statement {
    constructor(properties={declarations:null}) {
      private declarations;
      try {
        Statement.call(this, properties);
        @declarations = properties.declarations;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return [@declarations];
    }
  };
  export class LabeledStatement extends Statement {
    constructor(properties={body:null,label:null}) {
      private body, label;
      try {
        Statement.call(this, properties);
        @body = properties.body;
        @label = properties.label;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class BreakStatement extends Statement {
    constructor(properties={label:null}) {
      private label;
      try {
        Statement.call(this, properties);
        @label = properties.label;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class ContinueStatement extends Statement {
    constructor(properties={label:null}) {
      private label;
      try {
        Statement.call(this, properties);
        @label = properties.label;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class WithStatement extends Statement {
    constructor(properties={body:null,object:null}) {
      private body, object;
      try {
        Statement.call(this, properties);
        @body = properties.body;
        @object = properties.object;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class SwitchStatement extends Statement {
    constructor(properties={clauses:null,expression:null}) {
      private clauses, expression;
      try {
        Statement.call(this, properties);
        @clauses = properties.clauses || [];
        @expression = properties.expression;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return [@expression].concat(@clauses);
    }
  };
  export class ReturnStatement extends Statement {
    constructor(properties={value:null}) {
      private value;
      try {
        Statement.call(this, properties);
        @value = properties.value;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return [@value];
    }
  };
  export class ThrowStatement extends Statement {
    constructor(properties={exception:null}) {
      private exception;
      try {
        Statement.call(this, properties);
        @exception = properties.exception;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return [@exception];
    }
  };
  export class TryStatement extends Statement {
    constructor(properties={block:null,finalizer:null,handler:null}) {
      private block, finalizer, handler;
      try {
        Statement.call(this, properties);
        @block = properties.block;
        @finalizer = properties.finalizer;
        @handler = properties.handler;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class Variable extends Expression {
    constructor(properties={name:null}) {
      private name;
      try {
        Expression.call(this, properties);
        @name = properties.name;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class PrivateVariable extends Variable {
    constructor(properties={}) {
      try {
        Variable.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class VariableExpression extends Expression {
    constructor(properties={declarations:[]}) {
      private declarations;
      try {
        Expression.call(this, properties);
        @declarations = properties.declarations;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return @declarations;
    }
  };
  export class VariableStatement extends Statement {
    constructor(properties={declarations:[]}) {
      private declarations;
      try {
        Statement.call(this, properties);
        @declarations = properties.declarations;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return @declarations;
    }
  };
  export class WhileStatement extends Statement {
    constructor(properties={condition:null,statement:null}) {
      private condition, statement;
      try {
        Statement.call(this, properties);
        @condition = properties.condition;
        @statement = properties.statement;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return [@statement];
    }
  };
  export class DoWhileStatement extends Statement {
    constructor(properties={condition:null,statement:null}) {
      private condition, statement;
      try {
        Statement.call(this, properties);
        @condition = properties.condition;
        @statement = properties.statement;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return [@statement];
    }
  };
  export class ForStatement extends Statement {
    constructor(properties={initializer:null,counter:null,statement:null,test:null}) {
      private initializer, counter, statement, test;
      try {
        Statement.call(this, properties);
        @initializer = properties.initializer;
        @counter = properties.counter;
        @statement = properties.statement;
        @test = properties.test;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return [@statement];
    }
  };
  export class ForInStatement extends Statement {
    constructor(properties={collection:null,iterator:null,statement:null}) {
      private collection, iterator, statement;
      try {
        Statement.call(this, properties);
        @collection = properties.collection;
        @iterator = properties.iterator;
        @statement = properties.statement;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return [@statement];
    }
  };
  export class LetDeclaration extends Statement {
    constructor(properties={body:null,head:null}) {
      private body, head;
      try {
        Statement.call(this, properties);
        @body = properties.body;
        @head = properties.head;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class Declaration extends Statement {
    constructor(properties={}) {
      try {
        Statement.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class ClassDeclaration extends Declaration {
    constructor(properties={elements:null,heritage:null,name:null}) {
      private elements, heritage, name;
      try {
        Declaration.call(this, properties);
        @elements = properties.elements;
        @heritage = properties.heritage;
        @name = properties.name;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get attributes() {
      return {name:@name};
    }
    get children() {
      return @elements;
    }
  };
  export class Inheritance extends Node {
    constructor(properties={name:null,inheritance:null}) {
      private name, inheritance;
      try {
        Node.call(this, properties);
        @name = properties.name;
        @inheritance = properties.inheritance;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class ConstDeclaration extends Statement {
    constructor(properties={declarations:null}) {
      private declarations;
      try {
        Declaration.call(this, properties);
        @declarations = properties.declarations;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return @declarations;
    }
  };
  export class ExportStatement extends Statement {
    constructor(properties={declarations:null}) {
      private declarations;
      try {
        Statement.call(this, properties);
        @declarations = properties.declarations;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return @declarations;
    }
  };
  export class Exports extends Node {
    constructor(properties={exports:null}) {
      private exports;
      try {
        Node.call(this, properties);
        @exports = properties.exports;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return @exports;
    }
  };
  export class ExportMapping extends Declaration {
    constructor(properties={name:null,value:null}) {
      private name, value;
      try {
        Declaration.call(this, properties);
        @name = properties.name;
        @value = properties.value;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get attributes() {
      return {name:@name};
    }
    get children() {
      return [@value];
    }
  };
  export class ExportSpecifier extends Node {
    constructor(properties={alias:null,name:null}) {
      private alias, name;
      try {
        Node.call(this, properties);
        @alias = properties.alias;
        @name = properties.name;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class FormalParameter extends Declaration {
    constructor(properties={name:null,value:null}) {
      private name, value;
      try {
        Declaration.call(this, properties);
        @name = properties.name;
        @value = properties.value;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get attributes() {
      return {name:@name};
    }
    get children() {
      return [@value];
    }
  };
  export class FunctionDeclaration extends Declaration {
    constructor(properties={elements:null,name:null,params:null}) {
      private name, params;
      try {
        Declaration.call(this, properties);
        @elements = properties.elements;
        @name = properties.name;
        @params = properties.params;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get attributes() {
      return {name:@name};
    }
    get children() {
      return @elements;
    }
  };
  export class LetDeclaration extends Declaration {
    constructor(properties={declarations:null}) {
      private declarations;
      try {
        Declaration.call(this, properties);
        @declarations = properties.declarations;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return @declarations;
    }
  };
  export class ModuleDeclaration extends Declaration {
    constructor(properties={name:null,value:null}) {
      private name, expression;
      try {
        Declaration.call(this, properties);
        @name = properties.name;
        @expression = properties.expression;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get attributes() {
      return {name:@name};
    }
    get children() {
      return [@expression];
    }
  };
  export class ModuleExpression extends Expression {
    constructor(properties={nameparts:[]}) {
      private nameparts;
      try {
        Expression.call(this, properties);
        @nameparts = properties.nameparts;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return @nameparts;
    }
  };
  export class ImportDeclaration extends Declaration {
    constructor(properties={name:null,value:null}) {
      private name, value;
      try {
        Declaration.call(this, properties);
        @name = properties.name;
        @value = properties.value;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get attributes() {
      return {name:@name};
    }
    get children() {
      return [@value];
    }
  };
  export class Imports extends Node {
    constructor(properties={imports:null}) {
      private imports;
      try {
        Node.call(this, properties);
        @imports = properties.imports;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return @imports;
    }
  };
  export class ImportSpecifier extends Node {
    constructor(properties={alias:null,name:null}) {
      private alias, name;
      try {
        Node.call(this, properties);
        @alias = properties.alias;
        @name = properties.name;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class ModuleDefinition extends Declaration {
    constructor(properties={elements:null,name:null}) {
      private elements, name;
      try {
        Declaration.call(this, properties);
        @elements = properties.elements;
        @name = properties.name;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get attributes() {
      return {name:@name};
    }
    get children() {
      return @elements;
    }
  };
  export class ModuleStatement extends Statement {
    constructor(properties={declarations:null}) {
      private declarations;
      try {
        Statement.call(this, properties);
        @declarations = properties.declarations;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return @declarations;
    }
  };
  export class VariableDeclaration extends Declaration {
    constructor(properties={name:null,value:null}) {
      private name, value;
      try {
        Declaration.call(this, properties);
        @name = properties.name;
        @value = properties.value;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class ThisExpression extends Expression {
    constructor(properties={}) {
      try {
        Expression.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class ArrayExpression extends Expression {
    constructor(properties={elements:null}) {
      private elements;
      try {
        Expression.call(this, properties);
        @elements = properties.elements;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class ObjectExpression extends Expression {
    constructor(properties={}) {
      try {
        Expression.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class PostfixExpression extends Expression {
    constructor(properties={expression:null,operator:null}) {
      private expression, operator;
      try {
        Expression.call(this, properties);
        @expression = properties.expression;
        @operator = properties.operator;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return [@expression];
    }
  };
  export class FunctionExpression extends Expression {
    constructor(properties={name:null,params:null,elements:null}) {
      private name, params, elements;
      try {
        Expression.call(this, properties);
        @name = properties.name;
        @params = properties.params;
        @elements = properties.elements;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return @elements;
    }
  };
  export class SequenceExpression extends Expression {
    constructor(properties={}) {
      try {
        Expression.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class UnaryExpression extends Expression {
    constructor(properties={condition:null,statement:null}) {
      private expression, operator;
      try {
        Expression.call(this, properties);
        @expression = properties.expression;
        @operator = properties.operator;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return [@expression];
    }
  };
  export class BinaryExpression extends Expression {
    constructor(properties={left:null,operator:null,right:null}) {
      private left, operator, right;
      try {
        Expression.call(this, properties);
        @left = properties.left;
        @operator = properties.operator;
        @right = properties.right;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get attributes() {
        return {name:'operator',value:@operator};
    }
    get children() {
      return [@left,@right];
    }
  };
  export class AssignmentExpression extends Expression {
    constructor(properties={left:null,operator:null,right:null}) {
      private left, operator, right;
      try {
        Expression.call(this, properties);
        @left = properties.left;
        @operator = properties.operator;
        @right = properties.right;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get attributes() {
      return {name:'operator',value:@operator};
    }
    get children() {
      return [@left,@right];
    }
  };
  export class ConditionalExpression extends Expression {
    constructor(properties={condition:null,falseExpression:null,trueExpression:null}) {
      private condition, falseExpression, trueExpression;
      try {
        Expression.call(this, properties);
        @condition = properties.condition;
        @trueExpression = properties.trueExpression;
        @falseExpression = properties.falseExpression;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return [@condition];
    }
  };
  export class NewOperator extends Expression {
    constructor(properties={args:null,cons:null}) {
      private args, cons;
      try {
        Expression.call(this, properties);
        @args = properties.args;
        @cons = properties.cons;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return [@cons];
    }
  };
  export class CallExpression extends Expression {
    constructor(properties={args:null,name:null}) {
      private args, name;
      try {
        Expression.call(this, properties);
        @args = properties.args;
        @name = properties.name;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get attributes() {
      return {args:@args};
    }
    get children() {
      return [@name].concat(@args);
    }
  };
  export class DefaultClause extends Node {
    constructor(properties={statements:[]}) {
      private statements;
      try {
        Node.call(this, properties);
        @statements = properties.statements;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return @statements;
    }
  };
  export class CaseClause extends Node {
    constructor(properties={selector:null,statements:[]}) {
      private selector, statements;
      try {
        Node.call(this, properties);
        @selector = properties.selector;
        @statements = properties.statements;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return [@selector].concat(@statements);
    }
  };
  export class CatchClause extends Node {
    constructor(properties={body:null,guard:null,param:null}) {
      private body, guard, param;
      try {
        Node.call(this, properties);
        @body = properties.body;
        @guard = properties.guard;
        @param = properties.param;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class Identifier extends Expression {
    constructor(properties={name:null}) {
      private name;
      try {
        Expression.call(this, properties);
        @name = properties.name;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class PrivateIdentifier extends Identifier {
    constructor(properties={}) {
      try {
        Identifier.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class ImportIdentifier extends Identifier {
    constructor(properties={}) {
      try {
        Identifier.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class DataDefinition extends Expression {
    constructor(properties={declarations:null}) {
      private declarations;
      try {
        Expression.call(this, properties);
        @declarations = properties.declarations;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return [@declarations];
    }
  };
  export class MethodDefinition extends Declaration {
    constructor(properties={elements:null,name:null,params:null}) {
      private elements, name, params;
      try {
        Declaration.call(this, properties);
        @elements = properties.elements;
        @name = properties.name;
        @params = properties.params;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get attributes() {
      return {name:@name};
    }
    get children() {
      return @elements;
    }
  };
  export class PrivatePropertyDefinition extends Declaration {
    constructor(properties={property:null}) {
      private property;
      try {
        Declaration.call(this, properties);
        @property = properties.property;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return @property;
    }
  };
  export class PublicPropertyDefinition extends Declaration {
    constructor(properties={property:null}) {
      private property;
      try {
        Declaration.call(this, properties);
        @property = properties.property;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return @property;
    }
  };
  export class PropertyAccess extends Identifier {
    constructor(properties={base:null}) {
      private base;
      try {
        Identifier.call(this, properties);
        @base = properties.base;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class PropertyAccessProperty extends Identifier {
    constructor(properties={}) {
      try {
        Identifier.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class PropertyAssignment extends Expression {
    constructor(properties={name:null,value:null}) {
      private name, value;
      try {
        Expression.call(this, properties);
        @name = properties.name;
        @value = properties.value;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return [@value];
    }
  };
  export class GetterDefinition extends FunctionDeclaration {
    constructor(properties={body:null}) {
      private body;
      try {
        FunctionDeclaration.call(this, properties);
        @body = properties.body;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class SetterDefinition extends FunctionDeclaration {
    constructor(properties={body:null,param:null}) {
      private body, param;
      try {
        FunctionDeclaration.call(this, properties);
        @body = properties.body;
        @param = properties.param;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class StaticPropertyDefinition extends Declaration {
    constructor(properties={property:null}) {
      private property;
      try {
        Declaration.call(this, properties);
        @property = properties.property;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return @property;
    }
  };
  export class ArrayLiteral extends Literal {
    constructor(properties={elements:[]}) {
      private elements;
      try {
        Literal.call(this, properties);
        elements = properties.elements || [];
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return @elements;
    }
  };
  export class BooleanLiteral extends Literal {
    constructor(properties={}) {
      try {
        Literal.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class NullLiteral extends Literal {
    constructor(properties={}) {
      try {
        Literal.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class NumericLiteral extends Literal {
    constructor(properties={}) {
      try {
        Literal.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class ObjectLiteral extends Literal {
    constructor(properties={properties:[]}) {
      private properties;
      try {
        Literal.call(this, properties);
        @properties = properties.properties;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
    get children() {
      return @properties;
    }
  };
  export class RegularExpressionLiteral extends Literal {
    constructor(properties={body:null,flags:null}) {
      private body, flags;
      try {
        Literal.call(this, properties);
        @body = properties.body;
        @flags = properties.flags;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class StringLiteral extends Literal {
    constructor(properties={}) {
      private quote;
      try {
        Literal.call(this, properties);
        @quote = properties.quote;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class TokenOperator extends Node {
    constructor(properties={token:null}) {
      private token;
      try {
        Node.call(this, properties);
        @token = properties.token;
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class UnaryOperator extends TokenOperator {
    constructor(properties={}) {
      try {
        TokenOperator.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class BinaryOperator extends TokenOperator {
    constructor(properties={}) {
      try {
        TokenOperator.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class LogicalOperator extends TokenOperator {
    constructor(properties={}) {
      try {
        TokenOperator.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class AssignmentOperator extends TokenOperator {
    constructor(properties={}) {
      try {
        TokenOperator.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
  export class UpdateOperator extends TokenOperator {
    constructor(properties={}) {
      try {
        TokenOperator.call(this, properties);
      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  };
}
