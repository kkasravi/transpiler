module parser {
  module log from 'log';
  module ast from 'ast';
  export class Parser {
    constructor(properties={source:null,tree:null}) {
      private source, tree;
      try {
        @source = properties.source;
        @tree = (function(){
        })().parse(@source);

      } catch(e) {
        log.Logger.error(this,e);
      }
    }
  }
}
