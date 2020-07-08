/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms-csstransforms3d-csstransitions-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;
window.Modernizr = function(a, b, c) {
		function z(a) {
			j.cssText = a
		}

		function A(a, b) {
			return z(m.join(a + ";") + (b || ""))
		}

		function B(a, b) {
			return typeof a === b
		}

		function C(a, b) {
			return !!~("" + a).indexOf(b)
		}

		function D(a, b) {
			for(var d in a) {
				var e = a[d];
				if(!C(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
			}
			return !1
		}

		function E(a, b, d) {
			for(var e in a) {
				var f = b[a[e]];
				if(f !== c) return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
			}
			return !1
		}

		function F(a, b, c) {
			var d = a.charAt(0).toUpperCase() + a.slice(1),
				e = (a + " " + o.join(d + " ") + d).split(" ");
			return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c))
		}
		var d = "2.6.2",
			e = {},
			f = !0,
			g = b.documentElement,
			h = "modernizr",
			i = b.createElement(h),
			j = i.style,
			k, l = {}.toString,
			m = " -webkit- -moz- -o- -ms- ".split(" "),
			n = "Webkit Moz O ms",
			o = n.split(" "),
			p = n.toLowerCase().split(" "),
			q = {},
			r = {},
			s = {},
			t = [],
			u = t.slice,
			v, w = function(a, c, d, e) {
				var f, i, j, k, l = b.createElement("div"),
					m = b.body,
					n = m || b.createElement("body");
				if(parseInt(d, 10))
					while(d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
				return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
			},
			x = {}.hasOwnProperty,
			y;
		!B(x, "undefined") && !B(x.call, "undefined") ? y = function(a, b) {
			return x.call(a, b)
		} : y = function(a, b) {
			return b in a && B(a.constructor.prototype[b], "undefined")
		}, Function.prototype.bind || (Function.prototype.bind = function(b) {
			var c = this;
			if(typeof c != "function") throw new TypeError;
			var d = u.call(arguments, 1),
				e = function() {
					if(this instanceof e) {
						var a = function() {};
						a.prototype = c.prototype;
						var f = new a,
							g = c.apply(f, d.concat(u.call(arguments)));
						return Object(g) === g ? g : f
					}
					return c.apply(b, d.concat(u.call(arguments)))
				};
			return e
		}), q.csstransforms = function() {
			return !!F("transform")
		}, q.csstransforms3d = function() {
			var a = !!F("perspective");
			return a && "webkitPerspective" in g.style && w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
				a = b.offsetLeft === 9 && b.offsetHeight === 3
			}), a
		}, q.csstransitions = function() {
			return F("transition")
		};
		for(var G in q) y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v] ? "" : "no-") + v));
		return e.addTest = function(a, b) {
				if(typeof a == "object")
					for(var d in a) y(a, d) && e.addTest(d, a[d]);
				else {
					a = a.toLowerCase();
					if(e[a] !== c) return e;
					b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
				}
				return e
			}, z(""), i = k = null,
			function(a, b) {
				function k(a, b) {
					var c = a.createElement("p"),
						d = a.getElementsByTagName("head")[0] || a.documentElement;
					return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
				}

				function l() {
					var a = r.elements;
					return typeof a == "string" ? a.split(" ") : a
				}

				function m(a) {
					var b = i[a[g]];
					return b || (b = {}, h++, a[g] = h, i[h] = b), b
				}

				function n(a, c, f) {
					c || (c = b);
					if(j) return c.createElement(a);
					f || (f = m(c));
					var g;
					return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
				}

				function o(a, c) {
					a || (a = b);
					if(j) return a.createDocumentFragment();
					c = c || m(a);
					var d = c.frag.cloneNode(),
						e = 0,
						f = l(),
						g = f.length;
					for(; e < g; e++) d.createElement(f[e]);
					return d
				}

				function p(a, b) {
					b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
						return r.shivMethods ? n(c, a, b) : b.createElem(c)
					}, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
						return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
					}) + ");return n}")(r, b.frag)
				}

				function q(a) {
					a || (a = b);
					var c = m(a);
					return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
				}
				var c = a.html5 || {},
					d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
					e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
					f, g = "_html5shiv",
					h = 0,
					i = {},
					j;
				(function() {
					try {
						var a = b.createElement("a");
						a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
							b.createElement("a");
							var a = b.createDocumentFragment();
							return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
						}()
					} catch(c) {
						f = !0, j = !0
					}
				})();
				var r = {
					elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
					shivCSS: c.shivCSS !== !1,
					supportsUnknownElements: j,
					shivMethods: c.shivMethods !== !1,
					type: "default",
					shivDocument: q,
					createElement: n,
					createDocumentFragment: o
				};
				a.html5 = r, q(b)
			}(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function(a) {
				return D([a])
			}, e.testAllProps = F, e.testStyles = w, e.prefixed = function(a, b, c) {
				return b ? F(a, b, c) : F(a, "pfx")
			}, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
	}(this, this.document),
	function(a, b, c) {
		function d(a) {
			return "[object Function]" == o.call(a)
		}

		function e(a) {
			return "string" == typeof a
		}

		function f() {}

		function g(a) {
			return !a || "loaded" == a || "complete" == a || "uninitialized" == a
		}

		function h() {
			var a = p.shift();
			q = 1, a ? a.t ? m(function() {
				("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
			}, 0) : (a(), h()) : q = 0
		}

		function i(a, c, d, e, f, i, j) {
			function k(b) {
				if(!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
					"img" != a && m(function() {
						t.removeChild(l)
					}, 50);
					for(var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
				}
			}
			var j = j || B.errorTimeout,
				l = b.createElement(a),
				o = 0,
				r = 0,
				u = {
					t: d,
					s: c,
					e: f,
					a: i,
					x: j
				};
			1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
				k.call(this, r)
			}, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
		}

		function j(a, b, c, d, f) {
			return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
		}

		function k() {
			var a = B;
			return a.loader = {
				load: j,
				i: 0
			}, a
		}
		var l = b.documentElement,
			m = a.setTimeout,
			n = b.getElementsByTagName("script")[0],
			o = {}.toString,
			p = [],
			q = 0,
			r = "MozAppearance" in l.style,
			s = r && !!b.createRange().compareNode,
			t = s ? l : n.parentNode,
			l = a.opera && "[object Opera]" == o.call(a.opera),
			l = !!b.attachEvent && !l,
			u = r ? "object" : l ? "script" : "img",
			v = l ? "script" : u,
			w = Array.isArray || function(a) {
				return "[object Array]" == o.call(a)
			},
			x = [],
			y = {},
			z = {
				timeout: function(a, b) {
					return b.length && (a.timeout = b[0]), a
				}
			},
			A, B;
		B = function(a) {
			function b(a) {
				var a = a.split("!"),
					b = x.length,
					c = a.pop(),
					d = a.length,
					c = {
						url: c,
						origUrl: c,
						prefixes: a
					},
					e, f, g;
				for(f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
				for(f = 0; f < b; f++) c = x[f](c);
				return c
			}

			function g(a, e, f, g, h) {
				var i = b(a),
					j = i.autoCallback;
				i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
					k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
				})))
			}

			function h(a, b) {
				function c(a, c) {
					if(a) {
						if(e(a)) c || (j = function() {
							var a = [].slice.call(arguments);
							k.apply(this, a), l()
						}), g(a, j, b, 0, h);
						else if(Object(a) === a)
							for(n in m = function() {
									var b = 0,
										c;
									for(c in a) a.hasOwnProperty(c) && b++;
									return b
								}(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
								var a = [].slice.call(arguments);
								k.apply(this, a), l()
							} : j[n] = function(a) {
								return function() {
									var b = [].slice.call(arguments);
									a && a.apply(this, b), l()
								}
							}(k[n])), g(a[n], j, b, n, h))
					} else !c && l()
				}
				var h = !!a.test,
					i = a.load || a.both,
					j = a.callback || f,
					k = j,
					l = a.complete || f,
					m, n;
				c(h ? a.yep : a.nope, !!i), i && c(i)
			}
			var i, j, l = this.yepnope.loader;
			if(e(a)) g(a, 0, l, 0);
			else if(w(a))
				for(i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
			else Object(a) === a && h(a, l)
		}, B.addPrefix = function(a, b) {
			z[a] = b
		}, B.addFilter = function(a) {
			x.push(a)
		}, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
			b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
		}, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
			var k = b.createElement("script"),
				l, o, e = e || B.errorTimeout;
			k.src = a;
			for(o in d) k.setAttribute(o, d[o]);
			c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
				!l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
			}, m(function() {
				l || (l = 1, c(1))
			}, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
		}, a.yepnope.injectCss = function(a, c, d, e, g, i) {
			var e = b.createElement("link"),
				j, c = i ? h : c || f;
			e.href = a, e.rel = "stylesheet", e.type = "text/css";
			for(j in d) e.setAttribute(j, d[j]);
			g || (n.parentNode.insertBefore(e, n), m(c, 0))
		}
	}(this, document), Modernizr.load = function() {
		yepnope.apply(window, [].slice.call(arguments, 0))
	};

/**
 * jquery.windy.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */

;( function( $, window, undefined ) {
	
	'use strict';

	// global
	var Modernizr = window.Modernizr;

	$.Windy = function( options, element ) {
		
		this.$el = $( element );
		this._init( options );
		
	};

	// the options
	$.Windy.defaults = {
		// if we want to specify a selector that triggers the next() function. example: '#wi-nav-next'.
		nextEl : '',
		// if we want to specify a selector that triggers the prev() function.
		prevEl : '',
		// rotation and translation boundaries for the items transitions
		boundaries : {
			rotateX : { min : 40 , max : 90 },
			rotateY : { min : -15 , max : 15 },
			rotateZ : { min : -10 , max : 10 },
			translateX : { min : -200 , max : 200 },
			translateY : { min : -400 , max : -200 },
			translateZ : { min : 250 , max : 550 }
		}
	};

	$.Windy.prototype = {

		_init : function( options ) {
			
			// options
			this.options = $.extend( true, {}, $.Windy.defaults, options );

			// https://github.com/twitter/bootstrap/issues/2870
			this.transEndEventNames = {
				'WebkitTransition' : 'webkitTransitionEnd',
				'MozTransition' : 'transitionend',
				'OTransition' : 'oTransitionEnd',
				'msTransition' : 'MSTransitionEnd',
				'transition' : 'transitionend'
			};
			this.transEndEventName = this.transEndEventNames[ Modernizr.prefixed( 'transition' ) ];

			this.$items = this.$el.children( 'li' );
			this.itemsCount = this.$items.length;

			this.resetTransformStr = 'translateX( 0px ) translateY( 0px ) translateZ( 0px ) rotateX( 0deg ) rotateY( 0deg ) rotateZ( 0deg )';

			this.supportTransitions = Modernizr.csstransitions;
			this.support3d = Modernizr.csstransforms3d;

			// show first item
			this.current = 0;
			this.$items.eq( this.current ).show();
			
			this._initEvents();

		},
		_getRandTransform : function() {

			return {
				rx : Math.floor( Math.random() * ( this.options.boundaries.rotateX.max - this.options.boundaries.rotateX.min + 1 ) + this.options.boundaries.rotateX.min ),
				ry : Math.floor( Math.random() * ( this.options.boundaries.rotateY.max - this.options.boundaries.rotateY.min + 1 ) + this.options.boundaries.rotateY.min ),
				rz : Math.floor( Math.random() * ( this.options.boundaries.rotateZ.max - this.options.boundaries.rotateZ.min + 1 ) + this.options.boundaries.rotateZ.min ),
				tx : Math.floor( Math.random() * ( this.options.boundaries.translateX.max - this.options.boundaries.translateX.min + 1 ) + this.options.boundaries.translateX.min ),
				ty : Math.floor( Math.random() * ( this.options.boundaries.translateY.max - this.options.boundaries.translateY.min + 1 ) + this.options.boundaries.translateY.min ),
				tz : Math.floor( Math.random() * ( this.options.boundaries.translateZ.max - this.options.boundaries.translateZ.min + 1 ) + this.options.boundaries.translateZ.min )
			};

		},
		_initEvents : function() {

			var self = this;

			this.$items.on( this.transEndEventName, function( event ) {

				self._onTransEnd( $( this ) );

			} );

			if( this.options.nextEl !== '' ) {

				$( this.options.nextEl ).on( 'click.windy', function() {

					self.next();
					return false;

				} );

			}

			if( this.options.prevEl !== '' ) {

				$( this.options.prevEl ).on( 'click.windy', function() {

					self.prev();
					return false;

				} );

			}

		},
		_onTransEnd : function( el ) {

			el.removeClass( 'wi-move' );

			if( el.data( 'dir' ) === 'right' ) {

				var styleStart = {
					zIndex : 1,
					opacity : 1
				};

				if( this.support3d ) {

					styleStart.transform = this.resetTransformStr;

				}
				else if( this.supportTransitions ) {

					styleStart.left = 0;
					styleStart.top = 0;

				}

				el.hide().css( styleStart );

			}

		},
		// public method: shows item with index idx
		navigate : function( idx ) {

			var self = this,
				// current item
				$current = this.$items.eq( this.current ),
				// next item to be shown
				$next = this.$items.eq( idx ),
				// random transformation configuration
				randTranform = this._getRandTransform(),
				// the z-index is higher for the first items so that the ordering is correct if more items are moving at the same time
				styleEnd = {
					zIndex : this.itemsCount + 1 - idx,
					opacity : 0
				},
				styleStart = {
					opacity : 1
				};

			if( this.support3d ) {

				styleStart.transform = self.resetTransformStr;
				styleEnd.transform = 'translateX(' + randTranform.tx + 'px) translateY(' + randTranform.ty + 'px) translateZ(' + randTranform.tz + 'px) rotateX(' + randTranform.rx + 'deg) rotateY(' + randTranform.ry + 'deg) rotateZ(' + randTranform.rz + 'deg)';

			}
			else if( this.supportTransitions ) {

				styleStart.left = 0;
				styleStart.top = 0;
				styleEnd.left = randTranform.tx;
				styleEnd.top = randTranform.ty;

			}

			// if navigating to the right..
			if( idx > this.current ) {

				// if last step was to go to the left..
				if( this.dir === 'left') {

					// reset all z-indexes and hide items except the current
					this.$items.not( $current ).css( 'z-index', 1 ).hide();
				
				}
				
				this.dir = 'right';

				$current.addClass( 'wi-move' )
						.data( 'dir', 'right' )
						.css( styleEnd );

				if( $next.hasClass( 'wi-move' ) ) {

					$next.removeClass( 'wi-move' );	
				
				}
				
				// apply styleStart just to make sure..
				$next.css( styleStart ).show();

				if( !this.supportTransitions ) {
			
					this._onTransEnd( $current );

				}
			
			}
			else if( idx < this.current ) {

				this.dir = 'left';

				$next.data( 'dir', 'left' ).css( styleEnd ).show();

				setTimeout( function() {

					$next.addClass( 'wi-move' )
						 .data( 'dir', 'left' )
						 .css( styleStart );

					if( !self.supportTransitions ) {
			
						self._onTransEnd( $next );
			
					}

				}, 20 );

			}

			this.current = idx;

		},
		// public method: returns total number of items
		getItemsCount : function() {

			return this.itemsCount;

		},
		// public method: shows next item
//		点击了下个按钮
		next : function() {

			if( this.current < this.itemsCount - 1 ) {
				
				var idx = this.current + 1;
				this.navigate( idx );

			}

		},
		// public method: shows previous item
		prev : function() {

			if( this.current > 0 ) {
				
				var idx = this.current - 1;
				this.navigate( idx );

			}

		}

	};
	
	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );
		
		}

	};
	
	$.fn.windy = function( options ) {

		var instance = $.data( this, 'windy' );
		
		if ( typeof options === 'string' ) {
			
			var args = Array.prototype.slice.call( arguments, 1 );
			
			this.each(function() {
			
				if ( !instance ) {

					logError( "cannot call methods on windy prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				
				}
				
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for windy instance" );
					return;
				
				}
				
				instance[ options ].apply( instance, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
				
				if ( instance ) {

					instance._init();
				
				}
				else {

					instance = $.data( this, 'windy', new $.Windy( options, this ) );
				
				}

			});
		
		}
		
		return instance;
		
	};
	
} )( jQuery, window );

/**
 * demo.js
 */

var canvas = document.querySelector("#canvas"),
    ctx = canvas.getContext("2d"),
    link = document.createElement('link');
    particles = [],
    amount = 0,
    //鼠标辐射范围
    mouse = { x: -2999, y: -2999 },
    radius = 1,
    colors = [
      "rgba(55,222,255,0.85)", 
      "rgba(12,253,74,0.75)", 
      "rgba(0,253,244,0.85)", 
      "rgba(238,99,99,0.85)", 
      "rgba(250,0,250,0.75)"
    ],
    color2 =colors[random(0, 5)],
    headline = document.querySelector("#headline"),
    ww = window.innerWidth,
    wh = window.innerHeight;

function Particle(x, y) {

  this.x = Math.random() * ww;
  this.y = Math.random() * wh;
  this.dest = { x: x, y: y };
  //球大小
  this.r = Math.random()  * Math.PI;
  this.vx = (Math.random() - 0.5) * 25;
  this.vy = (Math.random() - 0.5) * 25;
  this.accX = 0;
  this.accY = 0;
  //范围大小
  this.friction = Math.random() * 0.0025 + 0.95;
  //颜色范围
  
  this.color =color2;
}
function random(min, max) {
 
  return Math.floor(Math.random() * (max - min)) + min;
 
}
Particle.prototype.render = function() {

  this.accX = (this.dest.x - this.x) / 100;
  this.accY = (this.dest.y - this.y) / 100;
  this.vx += this.accX;
  this.vy += this.accY;
  this.vx *= this.friction;
  this.vy *= this.friction;
  this.x += this.vx;
  this.y += this.vy;

  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
  ctx.fill();

  var a = this.x - mouse.x;
  var b = this.y - mouse.y;

  var distance = Math.sqrt(a * a + b * b);
  if (distance < (radius * 75)) {

    this.accX = (this.x - mouse.x) / 100;
    this.accY = (this.y - mouse.y) / 100;
    this.vx += this.accX;
    this.vy += this.accY;
  }
}

function onMouseMove(e) {

  mouse.x = e.clientX;
  mouse.y = e.clientY;
  }

  function onTouchMove(e) {

  if (e.touches.length > 0) {

    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
  }
}

function onTouchEnd(e) {

  mouse.x = -9999;
  mouse.y = -9999;
}

function initScene() {

  ww = canvas.width = window.innerWidth;
  wh = canvas.height = window.innerHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'https://fonts.googleapis.com/css?family=Abril+Fatface';
  document.getElementsByTagName('head')[0].appendChild(link);

//字体大小
  ctx.font = 'bold 8vw "Abril Fatface"';
  ctx.textAlign = "center";
  ctx.fillText(headline.innerHTML, ww / 2, wh / 1.6);

  var data = ctx.getImageData(0, 0, ww, wh).data;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "screen";

  particles = [];
  //球数量
  for (var i = 0; i < ww; i += Math.round(ww / 500)) {
    for (var j = 0; j < wh; j += Math.round(ww / 500)) {
      if (data[((i + j * ww) * 4) + 3] > 200) {
      
        particles.push(new Particle(i, j));
      }
    }
  }
  amount = particles.length;
}

function render(a) {

  requestAnimationFrame(render);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < amount; i++) {

    particles[i].render();
  }
}

headline.addEventListener("keyup", initScene);
window.addEventListener("resize", initScene);
window.addEventListener("mousemove", onMouseMove);
window.addEventListener("touchmove", onTouchMove);
window.addEventListener("touchend", onTouchEnd);
initScene();
requestAnimationFrame(render);

<!--处理诗歌-->

			var $el = $('#wi-el');
			
			var $poetry = $('#poetry').text().trim();
	
			var words = $poetry.split(" ");
			var listword = new Array();
			for(var i = 0; i < words.length; i++) {
				var words2 = words[i].split("");
				for(var j = 0; j < words2.length; j++) {
					listword[j] += words2[j] + " &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ";
				}
			}
			for(var i = 0; i < listword.length; i++) {		
						
				$el.append('<li> <div class="wrapper"> <div class="content">'+listword[i].replace("undefined", "") +
				'</div> </div> </li> <br/>');
			}
			var box=document.getElementById("poetry");
			box.remove();
			
			$el.append('<li></li>');

	

			$(function() {

				var $el = $('#wi-el');
				//得到要移除的动画列表
				var windy = $el.windy(),
					booleanOnclik=true,
					showTimeInterval,
					showTimeInterval2;


				$('#mypoetry').on('click', function(event) {
					console.log(booleanOnclik);
					    clearTimeout(showTimeInterval);
					        clearTimeout(showTimeInterval2);
					if ( booleanOnclik== true) {
						booleanOnclik= false;
							navnext();					
					} else{		
						booleanOnclik= true;
						navprev();
					}	
				});

				function navnext() {
						windy.next();
						showTimeInterval=setTimeout(function() {
							navnext();
						}, 150);
				}

				function navprev() {
						windy.prev();
						showTimeInterval2=setTimeout(function() {
							navprev();
						}, 150);
				}

			});


	'use strict';
	var mycontainer = document.querySelector('.mycontainer');
	var content = mycontainer.innerText;

	function formatContent(content, mycontainer) {
	  var contentArray = content.split(' ');
	  var formattedContent = document.createElement('div');
	  contentArray.map(function (word) {
		formattedContent.appendChild(createWord(word));
	  });

//	  container.replaceChild(formattedContent, container.firstChild);
	};

	function createWord(characters) {
	  var word = document.createElement('div');
	  var wordArray = characters.split('');
	  wordArray.map(function (char) {
		word.appendChild(formatCharacter(char));
	  });
	  word.appendChild(formatCharacter('&nbsp;'));
	  return word;
	}

	function formatCharacter(text) {
	  var text = text === ' ' ? '&nbsp;' : text;
	  var character = document.createElement('span');
	  character.innerHTML = text;
	  return character;
	}

	formatContent(content, mycontainer);
