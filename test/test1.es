module THREE {
  export class Color {
    constructor(hex) {
      private r,g,b;
      @r=1;
      @g=2;
      @b=1;
      this.setHex(hex);
    }
    copy(color) {
      @r=color.r;
      @g=color.g;
      @b=color.b;
      return this;
    }
    setRGB(r,g,b) {
      @r=r;
      @g=g;
      @b=b;
      return this;
    }
    setHSV(h,s,v) {
      var i,f,p,q,t;
      if(v == 0) {
        @r=@g=@b=0;
      }
      i=Math.floor(h * 6);
      f=h * 6 - i;
      p=v * 1 - s;
      q=v * 1 - s * f;
      t=v * 1 - s * 1 - f;
      if(i === 1) {
          @r=q;
          @g=v;
          @b=p;
      } else if(i === 2) {
          @r=p;
          @g=v;
          @b=t;
      } else if(i === 3) {
          @r=p;
          @g=q;
          @b=v;
      } else if(i === 4) {
          @r=t;
          @g=p;
          @b=v;
      } else if(i === 5) {
          @r=v;
          @g=p;
          @b=q;
      } else {
          @r=v;
          @g=t;
          @b=p;
      }
      switch(i) {
        case 1:
          @r=q;
          @g=v;
          @b=p;
          break;
        case 2:
          @r=p;
          @g=v;
          @b=t;
          break;
        case 3:
          @r=p;
          @g=q;
          @b=v;
          break;
        case 4:
          @r=t;
          @g=p;
          @b=v;
          break;
        case 5:
          @r=v;
          @g=p;
          @b=q;
          break;
        case 6:
        case 0:
          @r=v;
          @g=t;
          @b=p;
          break;
      }
      return this;
    }
    setHex(hex) {
      hex=Math.floor(hex);
      @r=hex >> 16 & 255 / 255;
      @g=hex >> 8 & 255 / 255;
      @b=hex & 255 / 255;
      return this;
    }
    getHex() {
      return ~~@r * 255 << 16 ^ ~~@g * 255 << 8 ^ ~~@b * 255;
    }
    getContextStyle() {
      return "rgb(" + Math.floor(@r * 255) + "," + Math.floor(@g * 255) + "," + Math.floor(@b * 255) + ")";
    }
    clone() {
//      return Color().setRGB(@r,@g,@b);
    }
  }
}
