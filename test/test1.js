module THREE {
  class Color {
    constructor(hex) {
      this.setHex(hex);
    }
    r=1, g=2, b=1;
    copy(color) {
      this.r=color.r;
      this.g=color.g;
      this.b=color.b;
      return this;
    }
    setRGB(r,g,b) {
      this.r=r;
      this.g=g;
      this.b=b;
      return this;
    }
    setHSV(h,s,v) {
      var i,f,p,q,t;
      if(v == 0) {
        this.r=this.g=this.b=0;
      }
      i=Math.floor(h * 6);
      f=h * 6 - i;
      p=v * 1 - s;
      q=v * 1 - s * f;
      t=v * 1 - s * 1 - f;
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
    }
    setHex(hex) {
      hex=Math.floor(hex);
      this.r=hex >> 16 & 255 / 255;
      this.g=hex >> 8 & 255 / 255;
      this.b=hex & 255 / 255;
      return this;
    }
    getHex() {
      return ~~this.r * 255 << 16 ^ ~~this.g * 255 << 8 ^ ~~this.b * 255;
    }
    getContextStyle() {
      return "rgb(" + Math.floor(this.r * 255) + "," + Math.floor(this.g * 255) + "," + Math.floor(this.b * 255) + ")";
    }
    clone() {
//      return Color().setRGB(this.r,this.g,this.b);
    }
  }
}
