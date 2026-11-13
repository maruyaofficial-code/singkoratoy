import{d as e,h as t,l as n,n as r,s as i,t as a,u as o}from"./delegate-2F0NYMx2.js";var s=a(o),c=class extends s{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){let{ariaLabel:n}=this;return t`
      <div
        class="progress ${r(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${n||e}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?e:this.value}
        >${this.renderIndicator()}</div
      >
    `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}};n([i({type:Number})],c.prototype,`value`,void 0),n([i({type:Number})],c.prototype,`max`,void 0),n([i({type:Boolean})],c.prototype,`indeterminate`,void 0),n([i({type:Boolean,attribute:`four-color`})],c.prototype,`fourColor`,void 0);export{c as t};