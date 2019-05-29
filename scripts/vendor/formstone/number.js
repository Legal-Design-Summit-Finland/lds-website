/*! formstone v1.4.0 [number.js] 2017-09-17 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core"],t):t(jQuery,Formstone)}(function(t,e){"use strict";function a(t){t.data.$container.addClass(m.focus)}function n(t){o(t.data,0),t.data.$container.removeClass(m.focus)}function i(t){var e=t.data;38!==t.keyCode&&40!==t.keyCode||(t.preventDefault(),o(e,38===t.keyCode?e.step:-e.step))}function s(e){p.killEvent(e),r(e);var a=e.data;if(!a.disabled&&e.which<=1){var n=t(e.target).hasClass(m.up)?a.step:-a.step;a.timer=p.startTimer(a.timer,300,function(){a.timer=p.startTimer(a.timer,125,function(){o(a,n)},!0)}),o(a,n),b.on([f.touchEnd,f.mouseUp].join(" "),a,r)}}function r(t){p.killEvent(t);var e=t.data;p.clearTimer(e.timer,!0),b.off(f.namespace)}function o(e,a){var n=parseFloat(e.$el.val()),i=a;"undefined"===t.type(n)||isNaN(n)?i=!1!==e.min?e.min:0:!1!==e.min&&n<e.min?i=e.min:i+=n;var s=(i-e.min)%e.step;0!==s&&(i-=s),!1!==e.min&&i<e.min&&(i=e.min),!1!==e.max&&i>e.max&&(i=e.max),i!==n&&(i=l(i,e.digits),e.$el.val(i).trigger(f.raw.change,[!0]))}function d(t){var e=String(t);return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}function l(t,e){var a=Math.pow(10,e);return Math.round(t*a)/a}var u=e.Plugin("number",{widget:!0,defaults:{customClass:"",labels:{up:"Up",down:"Down"},theme:"fs-light"},classes:["arrow","up","down","disabled","focus"],methods:{_construct:function(t){var e=parseFloat(this.attr("min")),r=parseFloat(this.attr("max"));t.min=!(!e&&0!==e)&&e,t.max=!(!r&&0!==r)&&r,t.step=parseFloat(this.attr("step"))||1,t.timer=null,t.digits=d(t.step),t.disabled=this.is(":disabled")||this.is("[readonly]");var l="";l+='<button type="button" class="'+[m.arrow,m.up].join(" ")+'" aria-hidden="true" tabindex="-1">'+t.labels.up+"</button>",l+='<button type="button" class="'+[m.arrow,m.down].join(" ")+'" aria-hidden="true" tabindex="-1">'+t.labels.down+"</button>",this.wrap('<div class="'+[m.base,t.theme,t.customClass,t.disabled?m.disabled:""].join(" ")+'"></div>').after(l),t.$container=this.parent(c.base),t.$arrows=t.$container.find(c.arrow),this.on(f.focus,t,a).on(f.blur,t,n).on(f.keyPress,t,i),t.$container.on([f.touchStart,f.mouseDown].join(" "),c.arrow,t,s),o(t,0)},_destruct:function(t){t.$arrows.remove(),this.unwrap().off(f.namespace)},enable:function(t){t.disabled&&(this.prop("disabled",!1),t.$container.removeClass(m.disabled),t.disabled=!1)},disable:function(t){t.disabled||(this.prop("disabled",!0),t.$container.addClass(m.disabled),t.disabled=!0)},update:function(t){var e=parseFloat(t.$el.attr("min")),a=parseFloat(t.$el.attr("max"));t.min=!(!e&&0!==e)&&e,t.max=!(!a&&0!==a)&&a,t.step=parseFloat(t.$el.attr("step"))||1,t.timer=null,t.digits=d(t.step),t.disabled=t.$el.is(":disabled")||t.$el.is("[readonly]"),o(t,0)}}}),c=u.classes,m=c.raw,f=u.events,p=u.functions,b=null;e.Ready(function(){b=e.$body})});