(function() {
  var nm = module.Module('THREE');
  (function(require, exports, moduleId) {
    var Color = (function() {
      function Color() {
        function privateData() {
          this.r = null;
          this.g = null;
          this.b = null;
        }
        var p_vars = new privateData();
        var r = p_vars.r;
        Object.getOwnPropertyDescriptor(this,'r') || Object.defineProperty(this,'r', {get: function(){return r;},set: function(e){r=e;}});
        var g = p_vars.g;
        Object.getOwnPropertyDescriptor(this,'g') || Object.defineProperty(this,'g', {get: function(){return g;},set: function(e){g=e;}});
        var b = p_vars.b;
        Object.getOwnPropertyDescriptor(this,'b') || Object.defineProperty(this,'b', {get: function(){return b;},set: function(e){b=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (hex) {
          this.r=1;
          this.g=2;
          this.b=1;
          this.setHex(hex);
        }
        return ctor.apply(this,args) || this;
      }
      Color.prototype['copy'] = function(color) {
        this.r=color.r;
        this.g=color.g;
        this.b=color.b;
        return this;
      };
      Color.prototype['setRGB'] = function(r,g,b) {
        this.r=r;
        this.g=g;
        this.b=b;
        return this;
      };
      Color.prototype['setHSV'] = function(h,s,v) {
        var i,f,p,q,t;
        if(v == 0) {
          this.r=this.g=this.b=0;
        }
        i=Math.floor(h * 6);
        f=h * 6 - i;
        p=v * 1 - s;
        q=v * 1 - s * f;
        t=v * 1 - s * 1 - f;
        if(i === 1) {
          this.r=q;
          this.g=v;
          this.b=p;
        } else if(i === 2) {
          this.r=p;
          this.g=v;
          this.b=t;
        } else if(i === 3) {
          this.r=p;
          this.g=q;
          this.b=v;
        } else if(i === 4) {
          this.r=t;
          this.g=p;
          this.b=v;
        } else if(i === 5) {
          this.r=v;
          this.g=p;
          this.b=q;
        } else {
          this.r=v;
          this.g=t;
          this.b=p;
        }
        switch(i) {
          case 1:
            this.r=q;
            this.g=v;
            this.b=p;
            break;
          case 2:
            this.r=p;
            this.g=v;
            this.b=t;
            break;
          case 3:
            this.r=p;
            this.g=q;
            this.b=v;
            break;
          case 4:
            this.r=t;
            this.g=p;
            this.b=v;
            break;
          case 5:
            this.r=v;
            this.g=p;
            this.b=q;
            break;
          case 6:
          case 0:
            this.r=v;
            this.g=t;
            this.b=p;
            break;
        }
        return this;
      };
      Color.prototype['setHex'] = function(hex) {
        hex=Math.floor(hex);
        this.r=hex >> 16 & 255 / 255;
        this.g=hex >> 8 & 255 / 255;
        this.b=hex & 255 / 255;
        return this;
      };
      Color.prototype['getHex'] = function() {
        return ~~this.r * 255 << 16 ^ ~~this.g * 255 << 8 ^ ~~this.b * 255;
      };
      Color.prototype['getContextStyle'] = function() {
        return "rgb(" + Math.floor(this.r * 255) + "," + Math.floor(this.g * 255) + "," + Math.floor(this.b * 255) + ")";
      };
      Color.prototype['clone'] = function() {
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Color;
        return new Color(args && args.length && args[0]);
      };
    })();
    exports.Color = Color;
  })(require, nm.getExports(), nm.getId());
})();

