(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  Array(33).concat([
    function (t, e, n) {
      "use strict";
      var o = n(9),
        r = n(49),
        l = n(193),
        c = n(32);
      function d(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      var m = {
          components: { Arrow: r.a, Error404: l.a },
          transition: { name: "fade" },
          head: function () {
            return (function (t) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2
                  ? d(Object(source), !0).forEach(function (e) {
                      Object(o.a)(t, e, source[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(source)
                    )
                  : d(Object(source)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(source, e)
                      );
                    });
              }
              return t;
            })(
              {},
              Object(c.a)({ title: "Error", description: "User not found." })
            );
          }
        },
        f = (n(236), n(0)),
        component = Object(f.a)(
          m,
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e(
              "div",
              { staticClass: "flex items-center error full-screen" },
              [
                e(
                  "section",
                  {
                    staticClass:
                      "w-full h-full mx-auto max-w-desktop landscape-fix"
                  },
                  [
                    e("Error404", { staticClass: "w-full h-auto mx-auto" }),
                    this._v(" "),
                    e(
                      "section",
                      {
                        staticClass: "mb-6 md:mb-10 landscape:mb-6 text-light"
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass:
                              "w-full mt-0 text-center md:mt-4 landscape:mt-0"
                          },
                          [
                            this._m(0),
                            this._v(" "),
                            e(
                              "p",
                              {
                                staticClass:
                                  "mt-2 text-small md:text-base md:mt-6 landscape:text-base"
                              },
                              [
                                this._v(
                                  "\n          What a curious contribution...\n        "
                                )
                              ]
                            ),
                            this._v(" "),
                            e(
                              "CommonButton",
                              {
                                staticClass: "mt-4 md:mt-10 landscape:mt-4",
                                attrs: { to: "/" }
                              },
                              [
                                e("template", { slot: "text" }, [
                                  this._v("Go to the Homepage")
                                ]),
                                this._v(" "),
                                e(
                                  "template",
                                  { slot: "icon" },
                                  [e("Arrow", { staticClass: "mt-1" })],
                                  1
                                )
                              ],
                              2
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ],
                  1
                )
              ]
            );
          },
          [
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("h2", [
                e(
                  "span",
                  {
                    staticClass:
                      "text-gradient bg-gradient-to-r from-brilliant-rose-500 to-danube-500"
                  },
                  [this._v("\n            Oops!\n          ")]
                )
              ]);
            }
          ],
          !1,
          null,
          "6a65ec5d",
          null
        );
      e.a = component.exports;
      installComponents(component, { CommonButton: n(58).default });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {
          name: "CustomButton",
          props: {
            href: { type: String, default: null },
            to: { type: String, default: null },
            disabled: { type: Boolean, default: !1 },
            submit: { type: Boolean, default: !1 },
            loading: { type: Boolean, default: !1 },
            primary: { type: Boolean, default: !0 },
            small: { type: Boolean, default: !1 }
          },
          computed: {
            componentType: function () {
              return this.href ? "a" : this.to ? "nuxt-link" : "button";
            }
          }
        },
        r = (n(237), n(0)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              t.componentType,
              {
                tag: "Component",
                staticClass:
                  "relative inline-block transition-all focus:outline-none button bg-100 whitespace-nowrap text-light",
                class: {
                  "bg-gradient-to-r from-brilliant-rose-500 to-danube-500":
                    t.primary && !t.loading,
                  "text-light bg-ebony-500 bg-opacity-50 hover:bg-opacity-100 hover:bg-light hover:text-dark":
                    !t.primary,
                  "pointer-events-none cursor-not-allowed button-disabled":
                    t.disabled,
                  "from-transparent to-transparent pointer-events-none loading":
                    t.loading,
                  "rounded-xl": !t.small,
                  "rounded-lg": t.small
                },
                attrs: {
                  "aria-disabled": t.disabled,
                  href: t.href,
                  target: t.href ? "_blank" : null,
                  to: t.to ? t.to : null,
                  type: t.submit ? "submit" : null,
                  disabled: t.disabled
                },
                on: {
                  click: function (e) {
                    return t.$emit("click", e);
                  }
                }
              },
              [
                n(
                  "div",
                  {
                    staticClass: "relative",
                    class: {
                      "border border-light border-solid rounded-xl":
                        !t.primary && !t.small,
                      "border border-light border-solid rounded-lg":
                        !t.primary && t.small
                    }
                  },
                  [
                    t.loading
                      ? n(
                          "span",
                          {
                            staticClass:
                              "absolute top-0 left-0 flex items-center justify-center w-full h-full"
                          },
                          [
                            n("span", {
                              staticClass: "w-4 h-4 mr-px bg-loading-300 square"
                            }),
                            t._v(" "),
                            n("span", {
                              staticClass: "w-4 h-4 mr-px bg-loading-400 square"
                            }),
                            t._v(" "),
                            n("span", {
                              staticClass: "w-4 h-4 mr-px bg-loading-500 square"
                            }),
                            t._v(" "),
                            n("span", {
                              staticClass: "w-4 h-4 mr-px bg-loading-600 square"
                            }),
                            t._v(" "),
                            n("span", {
                              staticClass: "w-4 h-4 bg-loading-700 square"
                            })
                          ]
                        )
                      : t._e(),
                    t._v(" "),
                    n(
                      "div",
                      {
                        staticClass: "inline-flex items-center",
                        class: {
                          invisible: t.loading,
                          "px-6 pt-2 pb-3 md:pt-4 md:pb-4": !t.small,
                          "px-6 pt-1.5 pb-2": t.small
                        }
                      },
                      [
                        n(
                          "span",
                          {
                            staticClass:
                              "p-0 m-0 text-sm font-semibold tracking-wide",
                            class: {
                              "md:text-base lg:text-lg leading-none tracking-normal":
                                !t.small,
                              "leading-normal": t.small
                            }
                          },
                          [t._t("text")],
                          2
                        ),
                        t._v(" "),
                        t.$slots.icon
                          ? n(
                              "div",
                              { staticClass: "pl-2 landscape:pl-2 lg:pl-4" },
                              [t._t("icon")],
                              2
                            )
                          : t._e()
                      ]
                    )
                  ]
                )
              ]
            );
          },
          [],
          !1,
          null,
          "068c2ca8",
          null
        );
      e.default = component.exports;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      (function (t) {
        var o = n(9),
          r = n(118),
          l = n(291),
          c = n(16);
        function d(object, t) {
          var e = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(object);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(object, t).enumerable;
              })),
              e.push.apply(e, n);
          }
          return e;
        }
        e.a = {
          expose: ["openWindow"],
          components: { Close: r.a, Trash: l.a },
          props: { year: { type: String, required: !0 } },
          data: function () {
            return {
              annotation: null,
              annotationCloseController: new AbortController(),
              isConfirmRemovalModalOpen: !1
            };
          },
          computed: {
            displayDate: function () {
              if (this.annotation) {
                var t = Object(c.dayOfYearToDate)(
                    this.annotation.from,
                    this.year
                  ),
                  e = Object(c.dayOfYearToDate)(this.annotation.to, this.year);
                return Object(c.formatDateRangeForDisplay)(t, e);
              }
            }
          },
          beforeDestroy: function () {
            window.removeEventListener(
              "click",
              this.handleClickOutsideAnnotation
            );
          },
          methods: {
            openConfirmRemovalModal: function () {
              this.isConfirmRemovalModalOpen = !0;
            },
            closeConfirmRemovalModal: function () {
              this.isConfirmRemovalModalOpen = !1;
            },
            handleRemoveAnnotationClick: function () {
              var t = (function (t) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? d(Object(source), !0).forEach(function (e) {
                        Object(o.a)(t, e, source[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : d(Object(source)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(source, e)
                        );
                      });
                }
                return t;
              })({}, this.annotation);
              this.closeConfirmRemovalModal(),
                this.closeWindow(),
                this.$emit("remove-annotation", t);
            },
            positionAnnotationWindow: function (t) {
              var e = t.x,
                n = t.y,
                o = this.$refs.annotation;
              o.style.display = "block";
              var r = Math.floor(n) - o.offsetHeight - 40,
                l = Math.floor(e) - o.offsetWidth / 2;
              (o.style.top = "".concat(r, "px")),
                (o.style.left = "".concat(l, "px"));
            },
            openWindow: function (e, n) {
              var o = this;
              this.annotationCloseController.abort();
              var r = this.annotation;
              this.annotation = n;
              var l =
                (null == r ? void 0 : r.from) !== this.annotation.from ||
                (null == r ? void 0 : r.to) !== this.annotation.to ||
                (null == r ? void 0 : r.comment) !== this.annotation.comment;
              r && l && this.unselectAnnotation(r),
                l && this.positionAnnotationWindow(e),
                t.nextTick(function () {
                  (o.annotationCloseController = new AbortController()),
                    window.addEventListener(
                      "click",
                      o.handleClickOutsideAnnotation,
                      { signal: o.annotationCloseController.signal }
                    );
                });
            },
            handleClickOutsideAnnotation: function (t) {
              var e = this.$refs.annotation;
              e === t.target || e.contains(t.target) || this.closeWindow();
            },
            unselectAnnotation: function (t) {
              this.$emit("unselect-annotation", t);
            },
            closeWindow: function () {
              var t = this.$refs.annotation;
              (t.style.display = "none"),
                (t.style.top = "0px"),
                (t.style.left = "0px"),
                window.removeEventListener(
                  "click",
                  this.handleClickOutsideAnnotation
                ),
                this.unselectAnnotation(this.annotation),
                (this.annotation = null),
                this.$emit("window-closed");
            }
          }
        };
      }.call(this, n(154)));
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    ,
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      var o = {
          transition: { name: "fade" },
          mounted: function () {
            this.resetVh(), window.addEventListener("resize", this.resetVh);
          },
          beforeDestroy: function () {
            window.removeEventListener("resize", this.resetVh);
          },
          methods: {
            resetVh: function () {
              var t = 0.01 * window.innerHeight;
              document.documentElement.style.setProperty(
                "--vh",
                "".concat(t, "px")
              );
            }
          }
        },
        r = (n(241), n(0)),
        component = Object(r.a)(
          o,
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e(
              "div",
              {
                staticClass:
                  "relative w-full h-full overflow-hidden app bg-gradient"
              },
              [
                e("HeadBar"),
                this._v(" "),
                e(
                  "main",
                  { staticClass: "relative full-screen portrait:hidden" },
                  [e("Nuxt", { staticClass: "z-10" })],
                  1
                ),
                this._v(" "),
                e(
                  "main",
                  { staticClass: "hidden full-screen portrait:block" },
                  [e("PleaseRotate", { staticClass: "z-10" })],
                  1
                ),
                this._v(" "),
                e("img", {
                  staticClass: "z-0 pointer-events-none glow",
                  attrs: {
                    "aria-hidden": "true",
                    src: n(240),
                    alt: "",
                    role: "presentation"
                  }
                }),
                this._v(" "),
                e("FootBar", { staticClass: "relative" })
              ],
              1
            );
          },
          [],
          !1,
          null,
          "40b60d66",
          null
        );
      e.a = component.exports;
      installComponents(component, {
        HeadBar: n(286).default,
        PleaseRotate: n(270).default,
        FootBar: n(271).default
      });
    },
    function (t, e, n) {
      "use strict";
      n(30);
      var o = {
          name: "NuxtLoading",
          data: function () {
            return {
              percent: 0,
              show: !1,
              canSucceed: !0,
              reversed: !1,
              skipTimerCount: 0,
              rtl: !1,
              throttle: 200,
              duration: 5e3,
              continuous: !1
            };
          },
          computed: {
            left: function () {
              return (
                !(!this.continuous && !this.rtl) &&
                (this.rtl
                  ? this.reversed
                    ? "0px"
                    : "auto"
                  : this.reversed
                  ? "auto"
                  : "0px")
              );
            }
          },
          beforeDestroy: function () {
            this.clear();
          },
          methods: {
            clear: function () {
              clearInterval(this._timer),
                clearTimeout(this._throttle),
                (this._timer = null);
            },
            start: function () {
              var t = this;
              return (
                this.clear(),
                (this.percent = 0),
                (this.reversed = !1),
                (this.skipTimerCount = 0),
                (this.canSucceed = !0),
                this.throttle
                  ? (this._throttle = setTimeout(function () {
                      return t.startTimer();
                    }, this.throttle))
                  : this.startTimer(),
                this
              );
            },
            set: function (t) {
              return (
                (this.show = !0),
                (this.canSucceed = !0),
                (this.percent = Math.min(100, Math.max(0, Math.floor(t)))),
                this
              );
            },
            get: function () {
              return this.percent;
            },
            increase: function (t) {
              return (
                (this.percent = Math.min(100, Math.floor(this.percent + t))),
                this
              );
            },
            decrease: function (t) {
              return (
                (this.percent = Math.max(0, Math.floor(this.percent - t))), this
              );
            },
            pause: function () {
              return clearInterval(this._timer), this;
            },
            resume: function () {
              return this.startTimer(), this;
            },
            finish: function () {
              return (
                (this.percent = this.reversed ? 0 : 100), this.hide(), this
              );
            },
            hide: function () {
              var t = this;
              return (
                this.clear(),
                setTimeout(function () {
                  (t.show = !1),
                    t.$nextTick(function () {
                      (t.percent = 0), (t.reversed = !1);
                    });
                }, 500),
                this
              );
            },
            fail: function (t) {
              return (this.canSucceed = !1), this;
            },
            startTimer: function () {
              var t = this;
              this.show || (this.show = !0),
                void 0 === this._cut &&
                  (this._cut = 1e4 / Math.floor(this.duration)),
                (this._timer = setInterval(function () {
                  t.skipTimerCount > 0
                    ? t.skipTimerCount--
                    : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut),
                      t.continuous &&
                        (t.percent >= 100 || t.percent <= 0) &&
                        ((t.skipTimerCount = 1), (t.reversed = !t.reversed)));
                }, 100));
            }
          },
          render: function (t) {
            var e = t(!1);
            return (
              this.show &&
                (e = t("div", {
                  staticClass: "nuxt-progress",
                  class: {
                    "nuxt-progress-notransition": this.skipTimerCount > 0,
                    "nuxt-progress-failed": !this.canSucceed
                  },
                  style: { width: this.percent + "%", left: this.left }
                })),
              e
            );
          }
        },
        r = (n(238), n(0)),
        component = Object(r.a)(o, void 0, void 0, !1, null, null, null);
      e.a = component.exports;
    },
    function (t, e, n) {
      "use strict";
      var o = n(0),
        component = Object(o.a)(
          {},
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e(
              "div",
              { staticClass: "w-screen h-screen bg-gradient" },
              [e("Nuxt")],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = component.exports;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      n(160);
    },
    function (t, e, n) {
      "use strict";
      n(161);
    },
    function (t, e, n) {
      "use strict";
      n(162);
    },
    function (t, e, n) {},
    ,
    function (t, e, n) {
      "use strict";
      n(163);
    },
    function (t, e, n) {
      "use strict";
      n(164);
    },
    function (t, e, n) {
      "use strict";
      n(165);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      n(167);
    },
    function (t, e, n) {
      "use strict";
      n(168);
    },
    function (t, e, n) {
      "use strict";
      n(169);
    },
    function (t, e, n) {
      "use strict";
      n(170);
    },
    function (t, e, n) {
      "use strict";
      n(171);
    },
    function (t, e, n) {
      "use strict";
      n(172);
    },
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      n(173);
    },
    function (t, e, n) {
      "use strict";
      n(174);
    },
    function (t, e, n) {
      "use strict";
      n(175);
    },
    function (t, e, n) {
      "use strict";
      n(176);
    },
    function (t, e, n) {
      "use strict";
      n(177);
    },
    function (t, e, n) {
      "use strict";
      n(178);
    },
    function (t, e, n) {
      "use strict";
      n(179);
    },
    function (t, e, n) {
      "use strict";
      n(180);
    },
    function (t, e, n) {
      "use strict";
      n(181);
    },
    function (t, e, n) {
      "use strict";
      n(182);
    },
    function (t, e, n) {
      "use strict";
      n(183);
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      var o = { components: { Landscape: n(194).a } },
        r = (n(242), n(0)),
        component = Object(r.a)(
          o,
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e(
              "section",
              {
                staticClass:
                  "flex items-center justify-center mx-auto text-center rotate"
              },
              [
                e(
                  "div",
                  {
                    staticClass:
                      "relative z-10 h-full pt-24 pb-8 mx-auto text-center max-w-portrait-content"
                  },
                  [
                    e("div", [e("Landscape", { staticClass: "mx-auto" })], 1),
                    this._v(" "),
                    this._m(0),
                    this._v(" "),
                    this._m(1)
                  ]
                )
              ]
            );
          },
          [
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "mx-auto mt-8" }, [
                e("h1", [
                  e(
                    "span",
                    {
                      staticClass:
                        "text-gradient bg-gradient-to-r from-brilliant-rose-500 to-danube-500"
                    },
                    [this._v("\n          Please rotate your device\n        ")]
                  )
                ])
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "mx-auto mt-6" }, [
                e("p", { staticClass: "text-base text-light" }, [
                  this._v(
                    "\n        Visit in desktop for the best experience.\n      "
                  )
                ])
              ]);
            }
          ],
          !1,
          null,
          "35af328c",
          null
        );
      e.default = component.exports;
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {
          data: function () {
            return {
              footerLinks: [
                {
                  name: "Terms",
                  href: "https://docs.github.com/en/github/site-policy/github-terms-of-service",
                  onlyLandscape: !1
                },
                {
                  name: "Privacy",
                  href: "https://docs.github.com/en/github/site-policy/github-privacy-statement",
                  onlyLandscape: !1
                },
                { name: "FAQ", to: "/pages/faq", onlyLandscape: !0 }
              ]
            };
          }
        },
        r = n(0),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "section",
              {
                staticClass:
                  "w-full h-10 px-4 md:px-14 md:h-12 landscape:h-10 landscape:px-6 portrait:h-32"
              },
              [
                n(
                  "footer",
                  {
                    staticClass:
                      "flex flex-row items-start justify-between h-full m-auto text-left portrait:flex-col-reverse portrait:text-center portrait:justify-evenly"
                  },
                  [
                    t._m(0),
                    t._v(" "),
                    n(
                      "div",
                      { staticClass: "flex items-center portrait:mx-auto" },
                      t._l(t.footerLinks, function (link) {
                        return n(
                          "CommonLink",
                          {
                            key: link.name,
                            staticClass: "ml-6 first:ml-0",
                            class: { "portrait:hidden": link.onlyLandscape },
                            attrs: {
                              to: link.to ? link.to : null,
                              href: link.href ? link.href : null
                            }
                          },
                          [t._v(t._s(link.name))]
                        );
                      }),
                      1
                    )
                  ]
                )
              ]
            );
          },
          [
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "p",
                {
                  staticClass:
                    "text-sm text-light md:text-base landscape:text-sm portrait:mx-auto"
                },
                [
                  this._v("\n      Made with ♥ by GitHub\n      "),
                  e(
                    "span",
                    {
                      staticClass:
                        "inline-flex items-center pl-4 text-sm text-white cursor-default link__content md:text-base landscape:text-sm opacity-70"
                    },
                    [e("span", [this._v("VR Ready")])]
                  )
                ]
              );
            }
          ],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, { CommonLink: n(278).default });
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {
          props: {
            index: { type: String, required: !0 },
            answer: { type: String, required: !0 }
          },
          data: function () {
            return { expanded: !1 };
          },
          mounted: function () {
            this.expanded = this.open;
          },
          methods: {
            toggle: function (t) {
              ("click" !== t.type &&
                ("keydown" !== t.type ||
                  (13 !== t.keyCode && 32 !== t.keyCode))) ||
                (t.preventDefault(), (this.expanded = !this.expanded));
            }
          }
        },
        r = (n(251), n(0)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "section",
              {
                staticClass: "w-full transition duration-500 faq ease",
                class: [{ "h-auto faq--expanded": t.expanded }]
              },
              [
                n(
                  "div",
                  {
                    staticClass:
                      "px-6 pt-5 pb-6 cursor-pointer rounded-2xl faq__background"
                  },
                  [
                    n(
                      "div",
                      {
                        staticClass:
                          "flex items-center justify-between outline-none flex-nowrap",
                        attrs: {
                          role: "button",
                          tabindex: "0",
                          "aria-pressed": t.expanded,
                          "aria-expanded": t.expanded,
                          "aria-controls": "answer" + t.index
                        },
                        on: {
                          click: t.toggle,
                          keydown: [
                            function (e) {
                              return !e.type.indexOf("key") &&
                                t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                ? null
                                : t.toggle(e);
                            },
                            function (e) {
                              return !e.type.indexOf("key") &&
                                t._k(e.keyCode, "space", 32, e.key, [
                                  " ",
                                  "Spacebar"
                                ])
                                ? null
                                : t.toggle(e);
                            }
                          ]
                        }
                      },
                      [
                        n(
                          "h5",
                          {
                            staticClass:
                              "justify-start max-w-lg text-lg font-semibold leading-5 text-light"
                          },
                          [
                            n(
                              "span",
                              {
                                staticClass:
                                  "font-extrabold transition duration-500 faq__title text-gradient ease bg-gradient-to-r from-danube-500 to-light"
                              },
                              [t._t("title")],
                              2
                            )
                          ]
                        ),
                        t._v(" "),
                        n(
                          "div",
                          {
                            staticClass:
                              "relative flex items-center w-6 h-4 icon",
                            attrs: { "aria-hidden": "true" }
                          },
                          [
                            n("div", {
                              staticClass:
                                "absolute w-4 h-0.5 bg-light transition duration-500"
                            }),
                            t._v(" "),
                            n("div", {
                              staticClass:
                                "absolute w-4 h-0.5 bg-light transition duration-500 transform rotate-90",
                              class: [{ "rotate-180": t.expanded }]
                            })
                          ]
                        )
                      ]
                    ),
                    t._v(" "),
                    n(
                      "div",
                      {
                        staticClass:
                          "h-0 p-0 overflow-hidden transition duration-500 origin-top opacity-0 scaleY-0",
                        class: [
                          {
                            "h-auto pb-2 pt-4 transform opacity-100 scaleY-1":
                              t.expanded
                          }
                        ],
                        attrs: {
                          id: "answer" + t.index,
                          role: "region",
                          "aria-hidden": !t.expanded
                        }
                      },
                      [
                        n("p", {
                          staticClass:
                            "relative z-10 m-0 text-light faq__answer",
                          domProps: { innerHTML: t._s(t.answer) }
                        })
                      ]
                    )
                  ]
                )
              ]
            );
          },
          [],
          !1,
          null,
          "38fdd1df",
          null
        );
      e.default = component.exports;
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      n(36), n(70), n(15);
      var o = n(3),
        r = n(49),
        l = n(16),
        c = {
          components: { Arrow: r.a },
          data: function () {
            return {
              error: null,
              user404: null,
              loading: !1,
              animation: !1,
              year: Object(l.getLastYear)()
            };
          },
          computed: {
            isInputEmpty: function () {
              return "" === this.username;
            },
            years: function () {
              for (var t = [], e = Object(l.getLastYear)(); e >= 2008; e--)
                t.push(e);
              return t;
            }
          },
          mounted: function () {
            this.animation = !0;
          },
          methods: {
            setUsername: function (t) {
              var e = t.toLowerCase().replace(/[^A-z0-9-]/g, "");
              t !== e && (this.$refs.userSearch.value = e),
                (this.loading = !1),
                (this.error = null);
            },
            handleSubmit: function (t) {
              var e = this;
              return Object(o.a)(
                regeneratorRuntime.mark(function n() {
                  var o, r;
                  return regeneratorRuntime.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (o = t.target.elements.githubHandle.value),
                              (e.loading = !0),
                              (n.prev = 2),
                              (r = e.year),
                              (n.next = 6),
                              e.$store.dispatch("getContributions", {
                                username: o,
                                year: r,
                                options: { skipCache: !0 }
                              })
                            );
                          case 6:
                            e.$fathom.trackGoal("MJYPKUBS"),
                              e.$router.push({
                                name: "username-year",
                                params: { username: o, year: r }
                              }),
                              (n.next = 15);
                            break;
                          case 10:
                            (n.prev = 10),
                              (n.t0 = n.catch(2)),
                              (e.loading = !1),
                              (e.error = n.t0.message),
                              (e.user404 = o);
                          case 15:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[2, 10]]
                  );
                })
              )();
            }
          }
        },
        d = (n(253), n(0)),
        component = Object(d.a)(
          c,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "section",
              {
                staticClass:
                  "relative z-10 w-3/4 h-full pt-10 mx-auto text-center"
              },
              [
                n("div", { staticClass: "w-full mx-auto" }, [
                  n(
                    "h1",
                    {
                      staticClass: "title",
                      class: { "title-animate": t.animation }
                    },
                    [
                      n(
                        "span",
                        {
                          staticClass:
                            "text-gradient bg-gradient-to-r from-brilliant-rose-500 via-danube-500 to-brilliant-rose-500 gradient",
                          class: { "gradient-animate": t.animation }
                        },
                        [t._v("\n        Your GitHub story in 3D\n      ")]
                      )
                    ]
                  )
                ]),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass:
                      "w-full max-w-md mx-auto mt-8 md:mt-10 md:max-w-hero-text xl:mt-14 full:mt-16 landscape:mt-8 callout",
                    class: { "callout-animate": t.animation }
                  },
                  [t._m(0)]
                ),
                t._v(" "),
                n(
                  "form",
                  {
                    staticClass:
                      "w-full mx-auto mt-6 transition-colors max-w-hero-input md:mt-10 xl:mt-16 full:mt-20 landscape:mt-6",
                    on: {
                      submit: function (e) {
                        return e.preventDefault(), t.handleSubmit(e);
                      }
                    }
                  },
                  [
                    n(
                      "TextInput",
                      {
                        ref: "userSearch",
                        staticClass: "input",
                        class: { "input-animate": t.animation },
                        attrs: {
                          id: "searchUser",
                          name: "githubHandle",
                          placeholder: "github_username",
                          label: "Type any github usern handler",
                          error: t.error
                        },
                        on: {
                          input: t.setUsername,
                          blur: function (e) {
                            t.error = null;
                          }
                        }
                      },
                      [
                        n("template", { slot: "prefix" }, [t._v("@")]),
                        t._v(" "),
                        n(
                          "template",
                          { slot: "selectors" },
                          [
                            n("SelectorInput", {
                              attrs: {
                                id: "year",
                                name: "year",
                                label:
                                  "Select the year you want to see the contributions trophy",
                                options: t.years,
                                "selected-option": t.year
                              },
                              on: {
                                select: function (e) {
                                  t.year = e;
                                }
                              }
                            })
                          ],
                          1
                        ),
                        t._v(" "),
                        n(
                          "template",
                          { slot: "button" },
                          [
                            n(
                              "CommonButton",
                              {
                                attrs: {
                                  submit: "",
                                  loading: t.loading,
                                  disabled: t.isInputEmpty,
                                  "aria-controls": "feedback"
                                }
                              },
                              [
                                n("template", { slot: "text" }, [
                                  t._v("Create a Skyline")
                                ]),
                                t._v(" "),
                                n(
                                  "template",
                                  { slot: "icon" },
                                  [n("Arrow", { staticClass: "mt-1" })],
                                  1
                                )
                              ],
                              2
                            )
                          ],
                          1
                        )
                      ],
                      2
                    ),
                    t._v(" "),
                    n(
                      "div",
                      {
                        staticClass:
                          "h-6 max-w-2xl mt-4 text-center md:h-8 md:mt-6 landscape:mt-4"
                      },
                      [
                        n("transition", { attrs: { name: "fade" } }, [
                          t.error
                            ? n(
                                "p",
                                {
                                  staticClass:
                                    "text-base font-bold text-error md:text-lg landscape:text-base custom-shadow",
                                  attrs: {
                                    id: "feedback",
                                    "aria-live": "polite"
                                  }
                                },
                                [
                                  t._v(
                                    "\n          We did not find any @" +
                                      t._s(t.user404) +
                                      " on GitHub, try it again.\n        "
                                  )
                                ]
                              )
                            : t._e()
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            );
          },
          [
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "p",
                {
                  staticClass:
                    "text-base font-medium text-light md:text-lg xl:text-2xl landscape:mt-8"
                },
                [
                  this._v(
                    "\n      View a 3D model of your GitHub contribution graph.\n      "
                  ),
                  e("br"),
                  this._v("\n      Share it, print it, and more!\n    ")
                ]
              );
            }
          ],
          !1,
          null,
          "f59e9036",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        SelectorInput: n(279).default,
        CommonButton: n(58).default,
        TextInput: n(280).default
      });
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      n(157), n(159), n(25), n(14), n(30), n(15);
      var o = n(3),
        r = n(288),
        l = n(289),
        c = n(290),
        d = n(48),
        m = {
          components: { Download: r.a, Twitter: l.a, Chat: c.a },
          props: {
            username: { type: String, required: !0 },
            year: { type: String, required: !0 },
            display: { type: Boolean, required: !0 },
            displayHeading: { type: Boolean, required: !0 },
            displayVr: { type: Boolean, required: !0 },
            disabled: { type: Boolean, required: !0 },
            vrEnabled: { type: Boolean, default: !1 }
          },
          data: function () {
            return {
              shapewaysLabel: null,
              shapewaysActive: !1,
              uploading: !1,
              skylineURL: "",
              description: "Check out my GitHub Skyline! "
            };
          },
          computed: {
            nameWithPronoun: function () {
              return Object(d.a)(this.username);
            },
            twitterIntentURL: function () {
              return encodeURI(
                "https://twitter.com/intent/tweet?text="
                  .concat(this.description, "&url=")
                  .concat(this.skylineURL)
              );
            }
          },
          mounted: function () {
            (this.supportsNativeShareAPI = !!navigator.share),
              window.addEventListener("onpushstate", this.updateSkylineURL);
          },
          beforeDestroy: function () {
            window.removeEventListener("onpushstate", this.updateSkylineURL);
          },
          methods: {
            uploadToShapeways: function () {
              var t = this;
              return Object(o.a)(
                regeneratorRuntime.mark(function e() {
                  var n, o, r, l, c, d, m, f, h;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (n = t.username),
                              (o = t.year),
                              t.$fathom.trackGoal("RWJ57PUS"),
                              (t.uploading = !0),
                              (t.shapewaysActive = !0),
                              (t.shapewaysLabel = "Uploading..."),
                              (e.next = 8),
                              fetch(
                                "/shapeways?username="
                                  .concat(n, "&year=")
                                  .concat(o),
                                { method: "POST" }
                              )
                            );
                          case 8:
                            if ((r = e.sent).ok) {
                              e.next = 11;
                              break;
                            }
                            throw new Error("Error uploading model");
                          case 11:
                            return (e.next = 13), r.json();
                          case 13:
                            (l = e.sent),
                              (c = l.id),
                              (d = !1),
                              (t.shapewaysLabel = "Preparing your model..."),
                              (m = 0),
                              (f = {});
                          case 19:
                            if (!1 !== d) {
                              e.next = 36;
                              break;
                            }
                            return (
                              (e.next = 22),
                              fetch("/shapeways?id=".concat(c), {
                                method: "POST"
                              })
                            );
                          case 22:
                            if ((h = e.sent).ok) {
                              e.next = 25;
                              break;
                            }
                            throw new Error("Error getting model status");
                          case 25:
                            return (e.next = 27), h.json();
                          case 27:
                            return (
                              (f = e.sent),
                              (d = f.printable),
                              ++m >= 2 &&
                                (t.shapewaysLabel = "Hang in there..."),
                              m >= 4 && (t.shapewaysLabel = "Almost ready..."),
                              (e.next = 34),
                              new Promise(function (t) {
                                return setTimeout(t, 1e3);
                              })
                            );
                          case 34:
                            e.next = 19;
                            break;
                          case 36:
                            (t.shapewaysLabel = "Redirecting..."),
                              (window.location.href = f.url),
                              (e.next = 44);
                            break;
                          case 40:
                            (e.prev = 40),
                              (e.t0 = e.catch(0)),
                              (t.shapewaysLabel =
                                "Error uploading to Shapeways"),
                              (t.shapewaysActive = !1);
                          case 44:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 40]]
                  );
                })
              )();
            },
            updateSkylineURL: function (t) {
              this.skylineURL = t.detail.url;
            },
            handleShareSkyline: function () {
              this.supportsNativeShareAPI &&
                navigator.share({
                  title: this.description,
                  url: this.skylineURL
                }),
                this.$fathom.trackGoal("F93JBXML");
            }
          }
        },
        f = (n(260), n(0)),
        component = Object(f.a)(
          m,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "section",
              [
                n("transition", { attrs: { name: "fade-in" } }, [
                  t.display && t.displayHeading
                    ? n(
                        "h3",
                        {
                          staticClass:
                            "absolute z-10 flex items-center justify-center top-5 right-6 md:top-1/8 md:right-0 md:left-0 md:mx-auto landscape:right-6 landscape:top-5 landscape:left-auto text-light"
                        },
                        [
                          t._v(
                            "\n      @" + t._s(t.nameWithPronoun) + " \n      "
                          ),
                          n(
                            "span",
                            {
                              staticClass:
                                "block mr-1 text-gradient bg-gradient-to-r from-brilliant-rose-500 to-danube-500"
                            },
                            [
                              t._v(
                                "\n        " + t._s(t.year) + " GitHub Skyline"
                              )
                            ]
                          )
                        ]
                      )
                    : t._e()
                ]),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass:
                      "absolute z-10 flex items-center bottom-5 right-6 md:bottom-12 md:right-14 landscape:right-6 landscape:bottom-5"
                  },
                  [
                    n("ViewButton", {
                      staticClass: "ml-4",
                      class: {
                        "cursor-not-allowed pointer-events-none": t.disabled
                      },
                      attrs: { display: t.display, disabled: t.disabled },
                      on: {
                        click: function (e) {
                          !t.disabled && t.$emit("toggle");
                        }
                      }
                    }),
                    t._v(" "),
                    n("SoundButton", { staticClass: "ml-4" })
                  ],
                  1
                ),
                t._v(" "),
                n("transition", { attrs: { name: "fade-in" } }, [
                  t.display
                    ? n(
                        "div",
                        {
                          staticClass:
                            "absolute bottom-0 flex flex-col items-center justify-center w-full h-20 pointer-events-none md:h-44 sm:bottom-4 landscape:h-20"
                        },
                        [
                          n(
                            "div",
                            {
                              staticClass:
                                "flex w-full mb-32 space-x-8 md:mb-14"
                            },
                            [
                              n(
                                "div",
                                {
                                  staticClass:
                                    "flex-1 text-right add-annotation"
                                },
                                [
                                  n(
                                    "CommonButton",
                                    {
                                      staticClass: "pointer-events-auto",
                                      attrs: { primary: !1 },
                                      on: {
                                        click: function (e) {
                                          return t.$emit(
                                            "start-anotation-mode"
                                          );
                                        }
                                      }
                                    },
                                    [
                                      n("template", { slot: "text" }, [
                                        t._v("Add annotation")
                                      ]),
                                      t._v(" "),
                                      n(
                                        "template",
                                        { slot: "icon" },
                                        [n("Chat", { staticClass: "w-6 h-6" })],
                                        1
                                      )
                                    ],
                                    2
                                  )
                                ],
                                1
                              ),
                              t._v(" "),
                              n(
                                "div",
                                { staticClass: "flex-1 download" },
                                [
                                  n(
                                    "CommonButton",
                                    {
                                      staticClass: "pointer-events-auto",
                                      attrs: {
                                        href: t.supportsNativeShareAPI
                                          ? null
                                          : t.twitterIntentURL
                                      },
                                      on: { click: t.handleShareSkyline }
                                    },
                                    [
                                      n("template", { slot: "text" }, [
                                        t._v("Share on Twitter")
                                      ]),
                                      t._v(" "),
                                      n(
                                        "template",
                                        { slot: "icon" },
                                        [n("Twitter", { staticClass: "mt-1" })],
                                        1
                                      )
                                    ],
                                    2
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ]
                      )
                    : t._e()
                ]),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass:
                      "absolute z-10 flex items-center justify-center bottom-5 left-6 md:bottom-12 md:left-14 landscape:left-6 landscape:bottom-5"
                  },
                  [
                    n(
                      "button",
                      {
                        staticClass:
                          "flex items-center justify-center w-10 h-10 p-2 bg-white border-none outline-none focus:outline-none button rounded-2xl whitespace-nowrap bg-opacity-10 text-light lg:w-12 lg:h-12 lg:p-3 landscape:p-2",
                        class: [
                          {
                            "text-disabled bg-transparent opacity-50":
                              t.disabled
                          }
                        ],
                        attrs: {
                          "aria-disabled": t.disabled,
                          "aria-label": "Download skyline stl model"
                        },
                        on: {
                          click: function (e) {
                            return t.$emit("download");
                          }
                        }
                      },
                      [
                        n("Download", {
                          staticClass: "fill-current",
                          attrs: { "aria-hidden": "true" }
                        })
                      ],
                      1
                    )
                  ]
                ),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass:
                      "absolute left-0 z-10 flex items-center justify-center w-full pointer-events-none -bottom-6 portrait:bottom-0"
                  },
                  [
                    n("transition", { attrs: { name: "fade-in" } }, [
                      t.vrEnabled && t.displayVr
                        ? n(
                            "div",
                            { staticClass: "relative" },
                            [
                              n("VRButton", {
                                on: {
                                  start: function (e) {
                                    return t.$emit("start-vr");
                                  }
                                }
                              })
                            ],
                            1
                          )
                        : t._e()
                    ])
                  ],
                  1
                )
              ],
              1
            );
          },
          [],
          !1,
          null,
          "017f7eae",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        ViewButton: n(281).default,
        SoundButton: n(282).default,
        CommonButton: n(58).default,
        VRButton: n(283).default
      });
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      var o = { components: { Close: n(118).a } },
        r = (n(263), n(0)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("section", { staticClass: "instructions" }, [
              t._m(0),
              t._v(" "),
              n(
                "button",
                {
                  staticClass: "instructions-close",
                  on: {
                    click: function (e) {
                      return t.$emit("close");
                    }
                  }
                },
                [n("Close")],
                1
              )
            ]);
          },
          [
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", [
                e("h3", { staticClass: "instructions-title" }, [
                  this._v("Click on a tower to add an annotation")
                ]),
                this._v(" "),
                e("p", { staticClass: "instructions-text" }, [
                  this._v(
                    "\n      Tip: each tower is a date where you have made contributions.\n    "
                  )
                ])
              ]);
            }
          ],
          !1,
          null,
          "79b17778",
          null
        );
      e.default = component.exports;
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      n(30);
      var o = n(292),
        r = n(293),
        l = {
          components: { PlusSmall: o.a, Confetti: r.a },
          data: function () {
            return { closeDelayTimeoutId: null };
          },
          mounted: function () {
            var t = this;
            this.closeDelayTimeoutId = setTimeout(function () {
              t.$emit("close");
            }, 4e3);
          },
          beforeDestroy: function () {
            this.closeDelayTimeoutId && clearTimeout(this.closeDelayTimeoutId);
          }
        },
        c = (n(266), n(0)),
        component = Object(c.a)(
          l,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "section",
              { staticClass: "congratulations" },
              [
                n("Confetti", { staticClass: "congratulations-icon" }),
                t._v(" "),
                n("div", { staticClass: "congratulations-content" }, [
                  n("p", { staticClass: "congratulations-title" }, [
                    t._v("Congratulations!")
                  ]),
                  t._v(" "),
                  n("div", { staticClass: "congratulations-text" }, [
                    t._v(
                      "\n      The annotation has been added successfully.\n    "
                    )
                  ]),
                  t._v(" "),
                  n(
                    "button",
                    {
                      staticClass: "congratulations-button",
                      on: {
                        click: function (e) {
                          return t.$emit("add-another-annotation");
                        }
                      }
                    },
                    [
                      n("PlusSmall", {
                        staticClass: "congratulations-button-icon"
                      }),
                      t._v("Add another annotation\n    ")
                    ],
                    1
                  )
                ])
              ],
              1
            );
          },
          [],
          !1,
          null,
          "4b042e63",
          null
        );
      e.default = component.exports;
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(294),
        r = n(40),
        l = n(16),
        c = [
          "Tried GitHub Actions for the first time.",
          "Kicked off my weekend project.",
          "Started using GitHub Codespaces.",
          "Joined my first hackathon!",
          "Had some help from GitHub Copilot.",
          "Made my first open source contribution!",
          "Started a new job today!"
        ];
      var d = {
          components: { Reset: o.a },
          props: {
            annotationCreator: { type: r.AnnotationCreator, required: !0 },
            year: { type: String, required: !0 }
          },
          data: function () {
            return {
              commentMessage: "",
              maxCount: 140,
              annotationMessagePlaceholder:
                ((t = c), t[Math.floor(Math.random() * t.length)])
            };
            var t;
          },
          computed: {
            formattedFromDate: function () {
              var t = Object(l.dayOfYearToDate)(
                this.annotationCreator.from,
                this.year
              );
              return this.annotationCreator.from
                ? Object(l.intlDateFormat)(t)
                : null;
            },
            formattedToDate: function () {
              var t = Object(l.dayOfYearToDate)(
                this.annotationCreator.to,
                this.year
              );
              return this.annotationCreator.to
                ? Object(l.intlDateFormat)(t)
                : null;
            },
            hasError: function () {
              return this.maxCount - this.commentMessage.length < 0;
            },
            isAnnotationReadyToSave: function () {
              return (
                this.annotationCreator.status ===
                r.AnnotationCreatorStatus.READY_ANNOTATION
              );
            }
          },
          watch: {
            commentMessage: function (t) {
              this.hasError
                ? this.annotationCreator.addComment("")
                : this.annotationCreator.addComment(t);
            }
          }
        },
        m = (n(267), n(0)),
        component = Object(m.a)(
          d,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("section", { staticClass: "panel" }, [
              n("div", { staticClass: "flex items-end gap-3 mb-4" }, [
                n("div", [
                  n("label", { staticClass: "panel-label" }, [
                    t._v(
                      t._s(t.annotationCreator.isRange ? "Start date" : "Date")
                    )
                  ]),
                  t._v(" "),
                  n("span", { staticClass: "panel-input" }, [
                    t._v(t._s(t.formattedFromDate || "Select tower"))
                  ])
                ]),
                t._v(" "),
                t.annotationCreator.isRange
                  ? n("div", [
                      n("label", { staticClass: "panel-label" }, [
                        t._v("End date")
                      ]),
                      t._v(" "),
                      n("span", { staticClass: "panel-input" }, [
                        t._v(t._s(t.formattedToDate || "Select tower"))
                      ])
                    ])
                  : t._e(),
                t._v(" "),
                n(
                  "button",
                  {
                    staticClass: "panel-reset text-brilliant-rose-500",
                    class: { disabled: !t.formattedFromDate },
                    attrs: {
                      "aria-disabled": !t.formattedFromDate,
                      disabled: !t.formattedFromDate
                    },
                    on: {
                      click: function (e) {
                        return t.$emit("reset-range", e);
                      }
                    }
                  },
                  [
                    t._v("\n      Reset\n      "),
                    n("Reset", {
                      staticClass: "panel-reset-icon",
                      attrs: { "aria-controls": "aria-feedback" }
                    })
                  ],
                  1
                )
              ]),
              t._v(" "),
              n("div", { staticClass: "mb-5" }, [
                n(
                  "label",
                  { staticClass: "panel-toggle", attrs: { for: "isRange" } },
                  [
                    n("input", {
                      staticClass: "panel-toggle-checkbox",
                      attrs: { id: "isRange", type: "checkbox" },
                      domProps: { checked: t.annotationCreator.isRange },
                      on: {
                        change: function (e) {
                          return t.$emit("toggle-is-range", e);
                        }
                      }
                    }),
                    t._v(" "),
                    n("div", { staticClass: "panel-toggle-switch" }),
                    t._v(" "),
                    n("span", { staticClass: "panel-toggle-label" }, [
                      t._v("I’d like to annotate a date range")
                    ])
                  ]
                )
              ]),
              t._v(" "),
              n("div", { staticClass: "mt-2 mb-5" }, [
                n(
                  "label",
                  {
                    staticClass: "panel-label",
                    attrs: { for: "commentMessage" }
                  },
                  [t._v("Annotation")]
                ),
                t._v(" "),
                n("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.commentMessage,
                      expression: "commentMessage"
                    }
                  ],
                  staticClass: "panel-textarea",
                  class: { shake: t.hasError },
                  attrs: {
                    id: "commentMessage",
                    placeholder: t.annotationMessagePlaceholder,
                    name: "",
                    cols: "30",
                    rows: "3"
                  },
                  domProps: { value: t.commentMessage },
                  on: {
                    input: function (e) {
                      e.target.composing || (t.commentMessage = e.target.value);
                    }
                  }
                }),
                t._v(" "),
                n(
                  "p",
                  {
                    staticClass: "panel-textarea-counter",
                    class: { error: t.hasError }
                  },
                  [
                    t._v(
                      "\n      " +
                        t._s(t.commentMessage.length) +
                        " / " +
                        t._s(t.maxCount) +
                        "\n    "
                    )
                  ]
                )
              ]),
              t._v(" "),
              n(
                "div",
                {
                  staticClass:
                    "flex justify-between w-full panel-buttons align-center"
                },
                [
                  n(
                    "CommonButton",
                    {
                      staticClass: "panel-secondary-button",
                      attrs: { primary: !1, small: "" },
                      on: {
                        click: function (e) {
                          return t.$emit("exit-annotation-mode", e);
                        }
                      }
                    },
                    [n("template", { slot: "text" }, [t._v("Cancel")])],
                    2
                  ),
                  t._v(" "),
                  n(
                    "CommonButton",
                    {
                      attrs: {
                        small: "",
                        disabled: !t.isAnnotationReadyToSave
                      },
                      on: {
                        click: function (e) {
                          return t.$emit("save-annotation", e);
                        }
                      }
                    },
                    [n("template", { slot: "text" }, [t._v("Add annotation")])],
                    2
                  )
                ],
                1
              )
            ]);
          },
          [],
          !1,
          null,
          "11cd0506",
          null
        );
      e.default = component.exports;
      installComponents(component, { CommonButton: n(58).default });
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {
          name: "CommonLink",
          props: {
            href: { type: String, default: null },
            to: { type: String, default: null },
            disabled: { type: Boolean, default: !1 },
            onHover: { type: Boolean, default: !0 },
            large: { type: Boolean, default: !1 }
          },
          computed: {
            componentType: function () {
              return this.to ? "nuxt-link" : this.href ? "a" : "button";
            }
          }
        },
        r = (n(243), n(0)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              t.componentType,
              {
                tag: "Component",
                staticClass: "cursor-pointer pointer-events-auto link",
                class: { "link--animated-hover": t.onHover && !t.disabled },
                attrs: {
                  "aria-disabled": t.disabled,
                  target: t.href ? "_blank" : null,
                  to: t.to,
                  href: t.href ? t.href : t.to
                }
              },
              [
                n(
                  "span",
                  {
                    staticClass:
                      "inline-block text-sm link__content text-light md:text-base landscape:text-sm",
                    class: {
                      "text-disabled cursor-not-allowed": t.disabled,
                      "text-lg font-semibold link__content--large": t.large
                    }
                  },
                  [t._t("default")],
                  2
                )
              ]
            );
          },
          [],
          !1,
          null,
          "6ac2237a",
          null
        );
      e.default = component.exports;
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      n(301);
      var o = {
          props: {
            id: { type: String, required: !0 },
            name: { type: String, required: !0 },
            label: { type: String, required: !0 },
            options: { type: Array, required: !0 },
            selectedOption: { type: [String, Number], required: !0 }
          },
          data: function () {
            return { selected: this.selectedOption, open: this.isOpen };
          },
          computed: {
            isImage: function () {
              return "material" === this.id;
            }
          },
          mounted: function () {
            document.addEventListener("click", this.handleOutsideClick);
          },
          destroyed: function () {
            document.removeEventListener("click", this.handleOutsideClick);
          },
          methods: {
            toggle: function () {
              this.open = !this.open;
            },
            handleOutsideClick: function () {
              this.open = !1;
            },
            select: function (option) {
              (this.open = !1),
                (this.selected = option),
                this.$emit("select", option);
            }
          }
        },
        r = (n(254), n(0)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "div",
              {
                staticClass:
                  "relative flex flex-col items-center justify-center w-20 mr-4 text-white",
                attrs: {
                  id: t.id,
                  name: t.name,
                  "aria-label": t.label,
                  role: "listbox"
                },
                on: {
                  click: function (t) {
                    t.stopPropagation();
                  }
                }
              },
              [
                o(
                  "div",
                  { staticClass: "relative mr-8" },
                  [
                    o(
                      "div",
                      {
                        staticClass:
                          "relative inline-block outline-none cursor-pointer pointer-events-auto selected-option",
                        class: t.open
                          ? "open selected-option--open"
                          : "selected-option--closed",
                        attrs: { tabindex: "0" },
                        on: {
                          click: t.toggle,
                          keydown: [
                            function (e) {
                              return !e.type.indexOf("key") &&
                                t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                ? null
                                : t.toggle(e);
                            },
                            function (e) {
                              return !e.type.indexOf("key") &&
                                t._k(e.keyCode, "space", 32, e.key, [
                                  " ",
                                  "Spacebar"
                                ])
                                ? null
                                : t.toggle(e);
                            }
                          ]
                        }
                      },
                      [
                        t.isImage
                          ? o("img", {
                              staticClass: "w-5 h-5",
                              attrs: {
                                src: n(303)("./" + t.selected + ".png"),
                                alt: t.selected
                              }
                            })
                          : o("span", [
                              t._v("\n        " + t._s(t.selected) + "\n      ")
                            ])
                      ]
                    ),
                    t._v(" "),
                    o("transition", { attrs: { name: "fade" } }, [
                      t.open
                        ? o(
                            "div",
                            {
                              staticClass:
                                "absolute flex flex-col w-24 px-4 py-4 mt-2 space-y-3 overflow-y-auto transition-opacity transform -translate-x-1/2 bg-white landscape:max-h-24 max-h-40 top-full left-1/2 rounded-2xl text-dark items"
                            },
                            t._l(t.options, function (option) {
                              return o(
                                "span",
                                {
                                  key: option,
                                  staticClass:
                                    "flex outline-none cursor-pointer pointer-events-auto",
                                  class: { "justify-center": !t.isImage },
                                  attrs: {
                                    tabindex: "0",
                                    "aria-hidden": !t.open
                                  },
                                  on: {
                                    click: function (e) {
                                      return t.select(option);
                                    },
                                    keydown: [
                                      function (e) {
                                        return !e.type.indexOf("key") &&
                                          t._k(
                                            e.keyCode,
                                            "enter",
                                            13,
                                            e.key,
                                            "Enter"
                                          )
                                          ? null
                                          : t.select(option);
                                      },
                                      function (e) {
                                        return !e.type.indexOf("key") &&
                                          t._k(e.keyCode, "space", 32, e.key, [
                                            " ",
                                            "Spacebar"
                                          ])
                                          ? null
                                          : t.select(option);
                                      }
                                    ]
                                  }
                                },
                                [
                                  t._v(
                                    "\n          " + t._s(option) + "\n        "
                                  )
                                ]
                              );
                            }),
                            0
                          )
                        : t._e()
                    ])
                  ],
                  1
                )
              ]
            );
          },
          [],
          !1,
          null,
          "50dc87f8",
          null
        );
      e.default = component.exports;
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {
          props: {
            id: { type: String, required: !0 },
            name: { type: String, required: !0 },
            label: { type: String, default: null },
            placeholder: { type: String, required: !0 },
            error: { type: String, default: null }
          },
          data: function () {
            return { value: "" };
          }
        },
        r = (n(255), n(0)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", { staticClass: "relative w-full" }, [
              n(
                "div",
                {
                  staticClass:
                    "flex items-center justify-center border-2 bg-ebony-400 rounded-2xl transparent-border",
                  class: { "transparent-border--error": !!t.error }
                },
                [
                  n(
                    "label",
                    {
                      staticClass: "sr-only",
                      attrs: {
                        id: "label-" + t.id,
                        for: t.id,
                        "aria-hidden": "true"
                      }
                    },
                    [t._v("\n      " + t._s(t.label) + "\n    ")]
                  ),
                  t._v(" "),
                  t.$slots.prefix
                    ? n(
                        "span",
                        {
                          staticClass:
                            "pl-4 text-base leading-none outline-none md:text-largefont-medium md:text-xl md:pl-8 md:pt-3 md:pb-5 landscape:pt-2 landscape:pb-3 landscape:text-base",
                          class: {
                            "text-light": "" !== t.value,
                            "text-dimmed": "" === t.value
                          }
                        },
                        [t._t("prefix")],
                        2
                      )
                    : t._e(),
                  t._v(" "),
                  n("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: t.value,
                        expression: "value"
                      }
                    ],
                    ref: "input",
                    staticClass:
                      "w-full text-base font-medium leading-none bg-opacity-0 outline-none md:text-xl landscape:text-base landscape:pt-2 landscape:pb-3 bg-ebony-400 text-light rounded-2xl placeholder-dimmed md:pt-3 md:pb-5 input",
                    class: { "pl-4 md:pl-8 ": !t.$slots.prefix },
                    attrs: {
                      id: t.id,
                      type: "text",
                      name: t.name,
                      placeholder: t.placeholder,
                      autocomplete: "off",
                      required: "",
                      "aria-labelledby": "label-" + t.id
                    },
                    domProps: { value: t.value },
                    on: {
                      blur: function (e) {
                        return t.$emit("blur");
                      },
                      input: [
                        function (e) {
                          e.target.composing || (t.value = e.target.value);
                        },
                        function (e) {
                          return t.$emit("input", t.value);
                        }
                      ]
                    }
                  }),
                  t._v(" "),
                  t.$slots.selectors
                    ? [
                        n("div", {
                          staticClass:
                            "h-6 mr-10 border-l opacity-20 border-brilliant-rose-500"
                        }),
                        t._v(" "),
                        t._t("selectors")
                      ]
                    : t._e(),
                  t._v(" "),
                  t.$slots.button ? [t._t("button")] : t._e()
                ],
                2
              )
            ]);
          },
          [],
          !1,
          null,
          "1c2024c1",
          null
        );
      e.default = component.exports;
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      var view = n(295),
        o = n(296),
        r = {
          components: { Eye: view.a, ClosedEye: o.a },
          props: {
            display: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 }
          },
          computed: {
            ariaLabel: function () {
              return this.display
                ? "Hide user controls"
                : this.disabled
                ? "Button disabled until model is loaded"
                : "Show user controls";
            }
          }
        },
        l = (n(261), n(0)),
        component = Object(l.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "button",
              {
                staticClass:
                  "flex items-center p-2 bg-white border-none outline-none focus:outline-none button rounded-2xl whitespace-nowrap text-light bg-opacity-10 lg:p-3 landscape:p-2",
                class: [
                  { "text-disabled bg-transparent opacity-50": t.disabled }
                ],
                attrs: {
                  "aria-disabled": t.disabled,
                  "aria-label": t.ariaLabel
                },
                on: {
                  click: function (e) {
                    return t.$emit("click");
                  }
                }
              },
              [
                t.disabled || !t.display
                  ? [
                      n("Eye", {
                        staticClass: "fill-current",
                        attrs: { "aria-hidden": "true" }
                      })
                    ]
                  : [n("ClosedEye", { attrs: { "aria-hidden": "true" } })]
              ],
              2
            );
          },
          [],
          !1,
          null,
          "5b26745d",
          null
        );
      e.default = component.exports;
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(297),
        r = n(298),
        l = {
          components: { Mute: o.a, Sound: r.a },
          props: { disabled: { type: Boolean, default: !1 } },
          computed: {
            ariaLabel: function () {
              return this.muted
                ? "Play background music"
                : this.disabled
                ? "Button disabled"
                : "Mute background music";
            },
            muted: function () {
              return this.$music.state.muted;
            },
            playing: function () {
              return this.$music.state.playing;
            }
          },
          methods: {
            toggleSound: function () {
              this.playing && !1 === this.muted ? this.mute() : this.unmute();
            },
            unmute: function () {
              this.playing ? this.$music.unmute() : this.$music.play(),
                this.$fathom.trackGoal("CFM6EC2B");
            },
            mute: function () {
              this.$music.mute(), this.$fathom.trackGoal("79XQM4XC");
            }
          }
        },
        c = (n(262), n(0)),
        component = Object(c.a)(
          l,
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e(
              "button",
              {
                staticClass:
                  "flex items-center p-2 bg-white border-none outline-none focus:outline-none button rounded-2xl whitespace-nowrap bg-opacity-10 text-light lg:p-3 landscape:p-2",
                class: [
                  { "text-disabled bg-transparent opacity-50": this.disabled }
                ],
                attrs: {
                  "aria-disabled": this.disabled,
                  "aria-label": this.ariaLabel
                },
                on: { click: this.toggleSound }
              },
              [
                !1 === this.muted && this.playing
                  ? [e("Sound", { attrs: { "aria-hidden": "true" } })]
                  : [
                      e("Mute", {
                        staticClass: "fill-current",
                        attrs: { "aria-hidden": "true" }
                      })
                    ]
              ],
              2
            );
          },
          [],
          !1,
          null,
          "d16c0f92",
          null
        );
      e.default = component.exports;
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      var o = { components: { Icon: n(299).a } },
        r = n(0),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "button",
              {
                staticClass:
                  "relative px-4 py-2 text-sm font-bold text-white transition-colors outline-none pointer-events-auto lg:text-base lg:px-8 lg:py-4 focus:outline-none rounded-xl bg-darkgray hover:bg-disabled",
                on: {
                  click: function (e) {
                    return t.$emit("start");
                  }
                }
              },
              [
                n("Icon", {
                  staticClass:
                    "absolute top-0 w-12 transform -translate-x-1/2 lg:w-20 -translate-y-2/3 left-1/2"
                }),
                t._v("\n  Enter VR\n")
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {
          components: { Trash: n(300).a },
          props: { annotationDisplayDate: { type: String, required: !0 } },
          mounted: function () {
            this.$refs.modalBackdrop.addEventListener(
              "click",
              this.closeItself,
              { once: !0 }
            );
          },
          beforeDestroy: function () {
            this.$refs.modalBackdrop.removeEventListener(
              "click",
              this.closeItself
            );
          },
          methods: {
            closeItself: function (t) {
              null == t || t.stopImmediatePropagation(), this.$emit("cancel");
            }
          }
        },
        r = (n(265), n(0)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "section",
              { ref: "modalBackdrop", staticClass: "modal-container" },
              [
                n(
                  "div",
                  {
                    staticClass: "modal",
                    on: {
                      click: function (t) {
                        t.stopPropagation();
                      }
                    }
                  },
                  [
                    n("Trash", { staticClass: "modal-icon" }),
                    t._v(" "),
                    n("p", { staticClass: "modal-date" }, [
                      t._v(t._s(t.annotationDisplayDate))
                    ]),
                    t._v(" "),
                    n("p", { staticClass: "modal-title" }, [
                      t._v("Delete annotation")
                    ]),
                    t._v(" "),
                    n("p", { staticClass: "modal-text" }, [
                      t._v(
                        "\n      If the annotation is deleted, it will not be longer visible for anyone.\n    "
                      )
                    ]),
                    t._v(" "),
                    n(
                      "div",
                      { staticClass: "modal-buttons" },
                      [
                        n(
                          "CommonButton",
                          {
                            attrs: { primary: !1, small: "" },
                            on: { click: t.closeItself }
                          },
                          [n("template", { slot: "text" }, [t._v("Cancel")])],
                          2
                        ),
                        t._v(" "),
                        n(
                          "CommonButton",
                          {
                            attrs: { small: "" },
                            on: {
                              click: function (e) {
                                return t.$emit("confirm");
                              }
                            }
                          },
                          [n("template", { slot: "text" }, [t._v("Delete")])],
                          2
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            );
          },
          [],
          !1,
          null,
          "4c6e6bd6",
          null
        );
      e.default = component.exports;
      installComponents(component, { CommonButton: n(58).default });
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(85).a,
        r = (n(264), n(0)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              [
                n("section", { ref: "annotation", staticClass: "annotation" }, [
                  n("div", { staticClass: "annotation-header" }, [
                    n("p", { staticClass: "annotation-date" }, [
                      t._v(t._s(t.displayDate))
                    ]),
                    t._v(" "),
                    n("div", { staticClass: "annotation-actions" }, [
                      n(
                        "button",
                        {
                          staticClass: "annotation-action",
                          on: { click: t.openConfirmRemovalModal }
                        },
                        [n("Trash")],
                        1
                      ),
                      t._v(" "),
                      n(
                        "button",
                        {
                          staticClass: "annotation-action",
                          on: { click: t.closeWindow }
                        },
                        [n("Close")],
                        1
                      )
                    ])
                  ]),
                  t._v(" "),
                  n("div", { staticClass: "annotation-text" }, [
                    t._v(
                      "\n      " +
                        t._s(t.annotation ? t.annotation.comment : "") +
                        "\n    "
                    )
                  ])
                ]),
                t._v(" "),
                n(
                  "transition",
                  { attrs: { name: "fade" } },
                  [
                    t.isConfirmRemovalModalOpen
                      ? n("DeleteAnnotation", {
                          attrs: { "annotation-display-date": t.displayDate },
                          on: {
                            cancel: t.closeConfirmRemovalModal,
                            confirm: t.handleRemoveAnnotationClick
                          }
                        })
                      : t._e()
                  ],
                  1
                )
              ],
              1
            );
          },
          [],
          !1,
          null,
          "5892bcc1",
          null
        );
      e.default = component.exports;
      installComponents(component, { DeleteAnnotation: n(284).default });
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(0),
        component = Object(o.a)(
          {},
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e(
              "nuxt-link",
              {
                staticClass:
                  "absolute z-10 top-5 left-6 md:top-12 md:left-14 landscape:left-6 landscape:top-5 portrait:top-10 portrait:left-0 portrait:right-0 portrait:mx-auto portrait:w-24",
                attrs: {
                  role: "navigation",
                  to: "/",
                  "aria-label": "Github Skyline Homepage"
                }
              },
              [e("Brand", { staticClass: "w-24 md:w-auto landscape:w-24" })],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, { Brand: n(287).default });
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(0),
        component = Object(o.a)(
          {},
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e(
              "svg",
              {
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "134",
                  height: "32",
                  viewBox: "0 0 134 32"
                }
              },
              [
                e("path", {
                  attrs: {
                    fill: "#F0F6FC",
                    "fill-rule": "evenodd",
                    d: "M49.072 27.27C53.77 27.27 56.902 25.056 56.902 21.141 56.902 17.739 54.472 16.146 51.61 15.579L48.235 14.904C47.128 14.661 45.157 14.283 45.157 12.393 45.157 10.854 46.372 9.855 48.64 9.855 50.881 9.855 52.42 10.827 52.555 12.852L56.2 12.852C56.119 9.369 53.392 7.047 48.802 7.047 44.374 7.047 41.431 9.369 41.431 12.879 41.431 17.037 45.319 17.847 47.074 18.225L50.395 18.927C51.259 19.116 53.122 19.521 53.122 21.519 53.122 23.247 51.691 24.435 49.126 24.435 46.291 24.435 44.779 23.166 44.671 20.871L41.026 20.871C41.053 24.624 43.915 27.27 49.072 27.27zM63.517 27L63.517 22.788 65.623 20.628 69.808 27 73.642 27 67.945 18.252 73.372 12.69 69.187 12.69 63.517 18.63 63.517 7.047 60.142 7.047 60.142 27 63.517 27zM76.288 31.779C79.717 31.779 81.499 29.862 82.39 27.243L87.493 12.69 83.983 12.69 82.093 18.792 80.851 23.004 80.662 23.004 79.393 18.792 77.368 12.69 73.75 12.69 79.096 26.325 78.853 27.027C78.61 27.81 77.935 28.971 75.991 28.971 75.748 28.971 75.289 28.971 74.695 28.863L74.695 31.644C75.181 31.725 75.829 31.779 76.288 31.779zM92.704 27L92.704 7.047 89.383 7.047 89.383 27 92.704 27zM99.967 10.827L99.967 7.209 96.646 7.209 96.646 10.827 99.967 10.827zM99.967 27L99.967 12.69 96.646 12.69 96.646 27 99.967 27zM107.257 27L107.257 19.467C107.257 16.983 108.634 15.255 110.848 15.255 112.738 15.255 113.791 16.335 113.791 18.684L113.791 27 117.166 27 117.166 18.333C117.166 14.796 115.492 12.42 112.225 12.42 110.092 12.42 108.364 13.473 107.473 15.336L107.257 15.336 106.852 12.69 103.909 12.69 103.909 27 107.257 27zM126.886 27.27C130.369 27.27 132.988 25.38 133.474 22.572L130.153 22.572C129.829 23.787 128.587 24.651 126.859 24.651 124.645 24.651 123.214 23.22 123.268 20.601L133.258 20.601C133.339 20.142 133.393 19.44 133.393 18.9 133.393 15.012 130.909 12.42 126.832 12.42 122.701 12.42 119.92 15.336 119.92 19.872 119.92 24.354 122.728 27.27 126.886 27.27zM130.045 18.306L123.295 18.306C123.376 16.335 124.726 15.012 126.751 15.012 128.803 15.012 130.018 16.227 130.045 18.306zM15.9985267-1.77635684e-14C7.16436969-1.77635684e-14 0 7.3446728 0 16.4054189 0 23.6534115 4.58405721 29.801667 10.9420179 31.9709287 11.7425335 32.1219915 12.0342552 31.6154276 12.0342552 31.1803667 12.0342552 30.7916318 12.020504 29.7593694 12.0126462 28.3907406 7.56217195 29.3817125 6.62316216 26.1912664 6.62316216 26.1912664 5.89533135 24.2959319 4.84631204 23.7913822 4.84631204 23.7913822 3.3935971 22.7742261 4.95632156 22.7943678 4.95632156 22.7943678 6.56226404 22.9101826 7.40697996 24.4852639 7.40697996 24.4852639 8.83415697 26.9918991 11.1522146 26.2678048 12.063722 25.8478503 12.2090917 24.7883966 12.6226097 24.0653094 13.0793456 23.6554257 9.52662758 23.2415136 5.7912152 21.8336084 5.7912152 15.5473822 5.7912152 13.7567847 6.41492986 12.2914756 7.43841125 11.1454126 7.27339697 10.7304934 6.72433162 9.06175317 7.5955677 6.80386802 7.5955677 6.80386802 8.93827312 6.36276467 11.9949661 8.4857004 13.27088 8.12113554 14.6401056 7.93986019 16.0004911 7.93281059 17.3598944 7.93986019 18.7281378 8.12113554 20.0060161 8.4857004 23.0607447 6.36276467 24.4014856 6.80386802 24.4014856 6.80386802 25.2746861 9.06175317 24.7256208 10.7304934 24.5615888 11.1454126 25.5870346 12.2914756 26.2058381 13.7567847 26.2058381 15.5473822 26.2058381 21.8497218 22.4645324 23.2364782 18.9010099 23.6423336 19.4746309 24.1488974 19.9863716 25.1499402 19.9863716 26.6807098 19.9863716 28.8731344 19.966727 30.6425832 19.966727 31.1803667 19.966727 31.6194559 20.255502 32.1300481 21.0668222 31.9699216 27.4198717 29.7956245 32 23.6513973 32 16.4054189 32 7.3446728 24.8356303-1.77635684e-14 15.9985267-1.77635684e-14"
                  }
                })
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      n.r(e);
      n(65);
      var o = n(9),
        r = n(32);
      function l(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      var c = {
          components: { Arrow: n(49).a },
          beforeRouteEnter: function (t, e, n) {
            n(function (t) {
              t.fromRoute = e;
            });
          },
          transition: { name: "fade" },
          data: function () {
            return {
              fromRoute: null,
              faqs: [
                {
                  question: "What is an STL file?",
                  answer:
                    "STL files store information about three-dimensional objects. Specifically, the surface geometry of an object with no representation of color, texture, etc."
                },
                {
                  question: "How can I print this STL file?",
                  answer:
                    'You can purchase a 3D printer and print it yourself, or use a service like <a href="https://www.shapeways.com/">Shapeways</a>. There you can upload your model and pay to have it printed in various materials like plastic, or even metal.'
                },
                {
                  question:
                    "Only my public contributions are showing. How can I see private contribution counts too?",
                  answer:
                    'Please see this article on the <a target="_blank" href="https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/publicizing-or-hiding-your-private-contributions-on-your-profile">GitHub Docs</a> site.'
                },
                {
                  question: "Sweet tunes! Who is the artist?",
                  answer:
                    'Music is provided by our good friend <a target="_blank" href="https://soundcloud.com/detmusic">DET</a>.'
                }
              ]
            };
          },
          head: function () {
            return (function (t) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2
                  ? l(Object(source), !0).forEach(function (e) {
                      Object(o.a)(t, e, source[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(source)
                    )
                  : l(Object(source)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(source, e)
                      );
                    });
              }
              return t;
            })(
              {},
              Object(r.a)({ title: "FAQ", description: "Solve your doubts!" })
            );
          },
          methods: {
            handleNavigation: function () {
              null === this.fromRoute.name
                ? this.$router.push({ path: "/" })
                : this.$router.go(-1);
            }
          }
        },
        d = (n(250), n(0)),
        component = Object(d.a)(
          c,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "section",
              {
                staticClass:
                  "flex items-start justify-center pt-20 pb-8 mx-6 faqs md:pt-30 md:pb-14 xl:pt-40 xl:pb-16 landscape:pt-20 landscape:pb-8 lg:mx-auto full-screen"
              },
              [
                n(
                  "Button",
                  {
                    staticClass:
                      "absolute z-10 cursor-pointer pointer-events-auto top-5 right-6 md:top-12 md:right-14 landscape:right-6 landscape:top-5 portrait:top-10 portrait:right-0 portrait:mx-auto portrait:w-24",
                    attrs: { role: "navigation" },
                    on: {
                      click: function (e) {
                        return e.stopPropagation(), t.handleNavigation(e);
                      }
                    }
                  },
                  [
                    n(
                      "span",
                      {
                        staticClass:
                          "flex items-center font-semibold w-fulltext-base link__content text-light landscape:text-base md:text-lg"
                      },
                      [
                        n("Arrow", {
                          staticClass: "mr-4 transform rotate-180",
                          attrs: { "aria-hidden": "true" }
                        }),
                        t._v(" "),
                        n("span", {}, [t._v("Back")])
                      ],
                      1
                    )
                  ]
                ),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass:
                      "relative z-10 w-full h-full mx-auto max-w-faqs"
                  },
                  [
                    n("h3", { staticClass: "font-semibold text-light" }, [
                      t._v("FAQ")
                    ]),
                    t._v(" "),
                    t._m(0),
                    t._v(" "),
                    n(
                      "div",
                      { staticClass: "mt-8 md:mt-10 xl:mt-14 landscape:mt-8" },
                      t._l(t.faqs, function (e, o) {
                        return n(
                          "Accordion",
                          {
                            key: e.question,
                            staticClass: "z-10 mx-auto mb-3 last:mb-0",
                            attrs: { index: o, answer: e.answer }
                          },
                          [
                            n("template", { slot: "title" }, [
                              t._v(t._s(e.question))
                            ])
                          ],
                          2
                        );
                      }),
                      1
                    )
                  ]
                )
              ],
              1
            );
          },
          [
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "h2",
                { staticClass: "w-full mt-0 md:mt-4 landscape:mt-0" },
                [
                  e(
                    "span",
                    {
                      staticClass:
                        "font-extrabold text-gradient bg-gradient-to-r from-brilliant-rose-500 to-danube-500"
                    },
                    [this._v("\n        Questions you may have\n      ")]
                  )
                ]
              );
            }
          ],
          !1,
          null,
          "0fdb6e40",
          null
        );
      e.default = component.exports;
      installComponents(component, { Accordion: n(272).default });
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(9),
        r = n(32);
      function l(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      var c = {
          transition: { name: "fade" },
          head: function () {
            return (function (t) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2
                  ? l(Object(source), !0).forEach(function (e) {
                      Object(o.a)(t, e, source[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(source)
                    )
                  : l(Object(source)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(source, e)
                      );
                    });
              }
              return t;
            })(
              {},
              Object(r.a)({
                title: "Your GitHub story in 3D",
                description:
                  "View a 3D model of your GitHub contribution graph. Share it, print it, and more!"
              })
            );
          },
          computed: {
            asciiArt: function () {
              return "\n▁▁▁▁▁▁▁▁▁▁▁▄▅▂█▂▁▁▁▅▁▆▁▁▁█▁▁▅▁▇▁▁▅▁▁▁▁▁▂▂▁▃▃▁▂█▆▇█▁▁▂▂▅▂▃▂▃▃▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n█─▄▄▄▄█▄─▄█─▄─▄─█─█─█▄─██─▄█▄─▄─▀███─▄▄▄▄█▄─█─▄█▄─█─▄█▄─▄███▄─▄█▄─▀█▄─▄█▄─▄▄─█\n█─██▄─██─████─███─▄─██─██─███─▄─▀███▄▄▄▄─██─▄▀███▄─▄███─██▀██─███─█▄▀─███─▄█▀█\n▀▄▄▄▄▄▀▄▄▄▀▀▄▄▄▀▀▄▀▄▀▀▄▄▄▄▀▀▄▄▄▄▀▀▀▀▄▄▄▄▄▀▄▄▀▄▄▀▀▄▄▄▀▀▄▄▄▄▄▀▄▄▄▀▄▄▄▀▀▄▄▀▄▄▄▄▄▀\n      ";
            }
          },
          mounted: function () {
            console.log("%c".concat(this.asciiArt), "font-family: monospace");
          }
        },
        d = (n(252), n(0)),
        component = Object(d.a)(
          c,
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e("div", [
              e("span", {
                staticClass: "hidden",
                domProps: {
                  innerHTML: this._s(
                    "\n\x3c!--\n\n" + this.asciiArt + "\n\n--\x3e\n    "
                  )
                }
              }),
              this._v(" "),
              e("img", {
                staticClass: "pointer-events-none illustration",
                attrs: {
                  "aria-hidden": "true",
                  src: n(302),
                  alt: "",
                  role: "presentation"
                }
              }),
              this._v(" "),
              e(
                "section",
                {
                  staticClass:
                    "relative z-10 flex items-center justify-center mx-6 full-screen md:mx-auto"
                },
                [e("Hero")],
                1
              )
            ]);
          },
          [],
          !1,
          null,
          "2efe89c3",
          null
        );
      e.default = component.exports;
      installComponents(component, { Hero: n(273).default });
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      n(25), n(14), n(72);
      var o = n(9),
        r = (n(15), n(3)),
        l = n(117),
        c = n(116),
        d = n(32),
        m = n(48),
        f = n(256),
        h = n(257),
        v = n(40),
        y = n(41),
        C = n(258);
      function x(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      var w = {
          components: { Spinner: l.a },
          mixins: [C.a],
          validate: function (t) {
            var e = t.params,
              n = e.username,
              o = e.year;
            return (
              !(o && !/^[0-9]*$/.test(o)) &&
              !!n &&
              !(
                parseInt(o, 10) < 2008 ||
                parseInt(o, 10) > new Date().getFullYear()
              )
            );
          },
          transition: { name: "fade" },
          asyncData: function (t) {
            return Object(r.a)(
              regeneratorRuntime.mark(function e() {
                var n, o, r, l, c, d, h, v, y, C;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.params),
                            (o = n.username),
                            (r = n.year),
                            (l = t.store),
                            (c = t.error),
                            (d = t.route),
                            (r = r.toString()),
                            (e.prev = 2),
                            (e.next = 5),
                            l.dispatch("getContributions", {
                              username: o,
                              year: r
                            })
                          );
                        case 5:
                          return (
                            (h = e.sent),
                            (v = h.username),
                            (y = h.weeks),
                            (C = Object(f.a)(
                              "@"
                                .concat(Object(m.a)(o), " ")
                                .concat(r, " GitHub Skyline"),
                              ""
                                .concat("https://skyline.github.com")
                                .concat(d.path),
                              y
                            )),
                            e.abrupt("return", {
                              weeks: y,
                              username: v,
                              year: r,
                              asciiArt: C
                            })
                          );
                        case 12:
                          return (
                            (e.prev = 12),
                            (e.t0 = e.catch(2)),
                            e.abrupt(
                              "return",
                              c({ statusCode: 404, message: e.t0.message })
                            )
                          );
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 12]]
                );
              })
            )();
          },
          data: function () {
            return {
              annotationCreator: new v.AnnotationCreator(),
              showAnnotationSuccessMessage: !1,
              displayVr: !0,
              isUIDisabled: !0,
              isUIdisplayed: !1,
              ariaLiveText: "",
              konamiPos: 0,
              vrEnabled: !1
            };
          },
          head: function () {
            var t = this.username,
              e = this.year;
            return (function (t) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2
                  ? x(Object(source), !0).forEach(function (e) {
                      Object(o.a)(t, e, source[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(source)
                    )
                  : x(Object(source)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(source, e)
                      );
                    });
              }
              return t;
            })(
              {},
              Object(d.a)({
                rawTitle: this.title,
                description: "3D model of the GitHub contributions made by @"
                  .concat(t, " in ")
                  .concat(e, "."),
                image: this.ogImage
              })
            );
          },
          computed: {
            user: function () {
              return this.$route.params.username;
            },
            ogImage: function () {
              return ""
                .concat("https://skyline.github.com", "/")
                .concat(this.username, "/")
                .concat(this.year, ".png");
            },
            title: function () {
              return "@"
                .concat(Object(m.a)(this.username), " ")
                .concat(this.year, " GitHub Skyline");
            },
            showInstructions: function () {
              return (
                this.annotationCreator.status ===
                  v.AnnotationCreatorStatus.LISTENING_FROM_POSITION &&
                !this.annotationCreator.wasResetted
              );
            },
            showAnnotationCreatorPanel: function () {
              return (
                this.annotationCreator.status !==
                  v.AnnotationCreatorStatus.IDLE && !this.showInstructions
              );
            }
          },
          watch: {
            areAnnotationsSupported: function (t, e) {
              null !== e &&
                e !== t &&
                (t
                  ? this.skyline.divideSkylineInDays()
                  : (this.exitAnnotationMode(),
                    this.skyline.mergeSkylineSubmeshes()));
            }
          },
          mounted: function () {
            var t = this;
            this.$nextTick(function () {
              t.scrollBottom(),
                window.addEventListener("resize", t.scrollBottom);
            }),
              (this.skyline = new c.Skyline(
                this.$refs.canvas3d,
                this.openAnnotationViewer.bind(this),
                this.annotationCreator
              )),
              document.addEventListener("keydown", this.konami),
              (this.$refs.canvas3d.style.opacity = 0),
              (this.$refs.canvasloader.style.opacity = 1),
              (this.ariaLiveText =
                "A 3d model is being generated from your GitHub contributions from ".concat(
                  this.year,
                  "."
                ));
            var data = { weeks: this.weeks };
            this.skyline
              .initialize3D(data, this.username, this.year)
              .then(function () {
                return t.$music.play();
              })
              .then(
                Object(r.a)(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), t.skyline.vrSupported();
                          case 2:
                            if (!e.sent) {
                              e.next = 4;
                              break;
                            }
                            t.vrEnabled = !0;
                          case 4:
                            return (
                              (t.$refs.canvas3d.style.opacity = 1),
                              (t.$refs.canvasloader.style.opacity = 0),
                              e.abrupt(
                                "return",
                                t.skyline.startAnimation(null, function () {
                                  t.areAnnotationsSupported &&
                                    t.skyline.divideSkylineInDays(),
                                    (t.isUIdisplayed = !0),
                                    (t.isUIDisabled = !1),
                                    (t.ariaLiveText = "The skyline for "
                                      .concat(t.username, " from ")
                                      .concat(
                                        t.year,
                                        " has been correctly built. Please feel free to explore the site to download and print your own model!"
                                      ));
                                })
                              )
                            );
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )
              ),
              console.log(
                "%c\n".concat(this.asciiArt, "\n\n"),
                "font-family: monospace"
              ),
              this.warmUpOgImage();
          },
          beforeDestroy: function () {
            document.removeEventListener("keydown", this.konami),
              window.removeEventListener("resize", this.scrollBottom),
              this.skyline.dispose(),
              this.$music.stop();
          },
          methods: {
            stlExport: function () {
              var t = "".concat(this.username, "-").concat(this.year, ".stl"),
                e = this.skyline.export();
              Object(h.a)(t, e), this.$fathom.trackGoal("VHCRSMVV", 0);
            },
            startVR: function () {
              this.$fathom.trackGoal("XMIGEBN6"), this.skyline.startVR();
            },
            scrollBottom: function () {
              window.scrollTo(0, document.body.scrollHeight);
            },
            warmUpOgImage: function () {
              fetch(this.ogImage, { method: "GET" });
            },
            toggleUI: function () {
              this.isUIdisplayed
                ? ((this.isUIdisplayed = !1),
                  (this.displayVr = !1),
                  this.$fathom.trackGoal("NDC3DWFG"))
                : ((this.isUIdisplayed = !0),
                  (this.displayVr = !0),
                  this.$fathom.trackGoal("GUE0R4N9"));
            },
            konami: function (t) {
              var e = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
                n = this.konamiPos;
              t.keyCode === e[n]
                ? (this.konamiPos++,
                  e.length - 1 === n &&
                    (this.skyline.konami(),
                    this.$music.bitcrush(),
                    this.$fathom.trackGoal("TE9PAMHU"),
                    (this.konamiPos = 0)))
                : (this.konamiPos = 0);
            },
            startAnnotationMode: function () {
              (this.isUIdisplayed = !1),
                this.skyline.cameraManager.stopCameraRotation(),
                this.annotationCreator.startListeningFromPosition();
            },
            toggleIsRangeAnnotation: function () {
              var t = this.annotationCreator.getAnnotation();
              if (
                (this.annotationCreator.toggleIsRange(),
                !this.annotationCreator.isRange &&
                  null === this.annotationCreator.to)
              )
                return (
                  this.skyline.resetSkylineWithAnnotations(),
                  void this.skyline.changeMaterialForBarRange({
                    start: this.annotationCreator.from,
                    end: this.annotationCreator.from,
                    materialIndex: y.ALUMINUM_VARIANTS.BASE_CLICKED,
                    shouldChangeAnnotations: !1
                  })
                );
              if (
                !this.annotationCreator.isRange &&
                null !== this.annotationCreator.to
              )
                return (
                  this.skyline.changeMaterialForBarRange({
                    start: t.from,
                    end: t.to,
                    materialIndex: y.ALUMINUM_VARIANTS.BASE,
                    shouldChangeAnnotations: !0
                  }),
                  void this.skyline.changeMaterialForBarRange({
                    start: this.annotationCreator.from,
                    end: this.annotationCreator.from,
                    materialIndex: y.ALUMINUM_VARIANTS.BASE_CLICKED,
                    shouldChangeAnnotations: !1
                  })
                );
              if (
                this.annotationCreator.isRange &&
                null !== this.annotationCreator.to
              ) {
                var e = this.annotationCreator.getAnnotation();
                this.skyline.changeMaterialForBarRange({
                  start: e.from,
                  end: e.to,
                  materialIndex: y.ALUMINUM_VARIANTS.BASE_CLICKED,
                  shouldChangeAnnotations: !1
                });
              }
            },
            resetAnnotationRange: function () {
              this.annotationCreator.status !==
                v.AnnotationCreatorStatus.LISTENING_FROM_POSITION &&
                (this.skyline.resetSkylineWithAnnotations(),
                this.annotationCreator.resetRange());
            },
            exitAnnotationMode: function () {
              this.skyline.resetSkylineWithAnnotations(),
                this.annotationCreator.resetAnnotationState(),
                this.skyline.cameraManager.autoRotate(),
                (this.isUIdisplayed = !0);
            },
            saveAnnotation: function () {
              var t = this.annotationCreator.getAnnotation();
              this.skyline.annotationManager.saveAnnotation(t),
                (this.showAnnotationSuccessMessage = !0),
                this.exitAnnotationMode();
            },
            closeAnnotationSuccessMessage: function () {
              this.showAnnotationSuccessMessage = !1;
            },
            addAnotherAnnotation: function () {
              this.closeAnnotationSuccessMessage(), this.startAnnotationMode();
            },
            removeAnnotation: function (t) {
              this.skyline.annotationManager.removeAnnotation(t),
                this.skyline.changeMaterialForBarRange({
                  start: t.from,
                  end: t.to,
                  materialIndex: y.ALUMINUM_VARIANTS.BASE,
                  shouldChangeAnnotations: !0
                });
            },
            openAnnotationViewer: function (t, e) {
              this.skyline.changeMaterialForBarRange({
                start: e.from,
                end: e.to,
                materialIndex: y.ALUMINUM_VARIANTS.ANNOTATED_CLICKED,
                shouldChangeAnnotations: !0
              }),
                this.skyline.cameraManager.stopCameraRotation(),
                this.skyline.cameraManager.detachCameraControl(),
                this.$refs.annotationViewer.openWindow(t, e);
            },
            unselectClickedAnnotation: function (t) {
              this.skyline.changeMaterialForBarRange({
                start: t.from,
                end: t.to,
                materialIndex: y.ALUMINUM_VARIANTS.ANNOTATED,
                shouldChangeAnnotations: !0
              });
            },
            activateSkylineControls: function () {
              this.skyline.cameraManager.autoRotate(),
                this.skyline.cameraManager.attachCameraControl();
            }
          }
        },
        _ = (n(259), n(0)),
        component = Object(_.a)(
          w,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "section",
              { staticClass: "model full-screen" },
              [
                t.asciiArt
                  ? n("span", {
                      staticClass: "hidden",
                      domProps: {
                        innerHTML: t._s(
                          "\n\x3c!--\n" + t.asciiArt + "\n--\x3e\n\n    "
                        )
                      }
                    })
                  : t._e(),
                t._v(" "),
                n("canvas", {
                  ref: "canvas3d",
                  staticClass:
                    "fixed z-0 w-full h-full outline-none cursor-move t-0 l-0",
                  attrs: { id: "canvas3d" }
                }),
                t._v(" "),
                n(
                  "transition",
                  { attrs: { name: "fade" } },
                  [
                    n("UserInterface", {
                      attrs: {
                        display:
                          t.isUIdisplayed && !t.showAnnotationSuccessMessage,
                        "display-heading":
                          !t.showInstructions &&
                          !t.showAnnotationCreatorPanel &&
                          !t.showAnnotationSuccessMessage,
                        username: t.user,
                        year: t.year,
                        disabled: t.isUIDisabled,
                        "vr-enabled": t.vrEnabled,
                        "display-vr": t.displayVr
                      },
                      on: {
                        toggle: t.toggleUI,
                        download: t.stlExport,
                        "start-vr": t.startVR,
                        "start-anotation-mode": t.startAnnotationMode
                      }
                    })
                  ],
                  1
                ),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass: "sr-only",
                    attrs: {
                      id: "aria-feedback",
                      "aria-live": "polite",
                      role: "region"
                    }
                  },
                  [t._v("\n      " + t._s(t.ariaLiveText) + "\n    ")]
                ),
                t._v(" "),
                n(
                  "div",
                  { ref: "canvasloader", attrs: { id: "canvas-loader" } },
                  [
                    n("Spinner", {
                      attrs: { "aria-controls": "aria-feedback" }
                    })
                  ],
                  1
                ),
                t._v(" "),
                n(
                  "transition",
                  { attrs: { name: "fade-in" } },
                  [
                    t.showInstructions
                      ? n("Instructions", {
                          on: { close: t.exitAnnotationMode }
                        })
                      : t._e()
                  ],
                  1
                ),
                t._v(" "),
                n(
                  "transition",
                  { attrs: { name: "fade-in" } },
                  [
                    t.areAnnotationsSupported
                      ? n("Annotation", {
                          ref: "annotationViewer",
                          attrs: { year: t.year },
                          on: {
                            "remove-annotation": t.removeAnnotation,
                            "unselect-annotation": t.unselectClickedAnnotation,
                            "window-closed": t.activateSkylineControls
                          }
                        })
                      : t._e()
                  ],
                  1
                ),
                t._v(" "),
                n(
                  "transition",
                  { attrs: { name: "fade-in" } },
                  [
                    !t.showAnnotationSuccessMessage ||
                    t.showInstructions ||
                    t.showAnnotationCreatorPanel
                      ? t._e()
                      : n("Congratulations", {
                          on: {
                            "add-another-annotation": t.addAnotherAnnotation,
                            close: t.closeAnnotationSuccessMessage
                          }
                        })
                  ],
                  1
                ),
                t._v(" "),
                n(
                  "transition",
                  { attrs: { name: "fade-in" } },
                  [
                    t.showAnnotationCreatorPanel
                      ? n("AnnotationCreatorPanel", {
                          attrs: {
                            "annotation-creator": t.annotationCreator,
                            year: t.year
                          },
                          on: {
                            "reset-range": t.resetAnnotationRange,
                            "toggle-is-range": t.toggleIsRangeAnnotation,
                            "exit-annotation-mode": t.exitAnnotationMode,
                            "save-annotation": t.saveAnnotation
                          }
                        })
                      : t._e()
                  ],
                  1
                )
              ],
              1
            );
          },
          [],
          !1,
          null,
          "86952c76",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        UserInterface: n(274).default,
        Instructions: n(275).default,
        Annotation: n(285).default,
        Congratulations: n(276).default,
        AnnotationCreatorPanel: n(277).default
      });
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      n(15);
      var o = n(3),
        r = n(117),
        l = n(116),
        c = {
          components: { Spinner: r.a },
          layout: "embed",
          validate: function (t) {
            var e = t.params,
              n = e.username,
              o = e.year;
            return !(o && !/^[0-9]*$/.test(o)) && !!n;
          },
          transition: { name: "fade" },
          asyncData: function (t) {
            return Object(o.a)(
              regeneratorRuntime.mark(function e() {
                var n, o, r, l, c, d, m;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.params),
                            (o = n.username),
                            (r = n.year),
                            (l = t.store),
                            (c = t.error),
                            (e.prev = 1),
                            (e.next = 4),
                            l.dispatch("getContributions", {
                              username: o,
                              year: r
                            })
                          );
                        case 4:
                          return (
                            (d = e.sent),
                            (m = d.weeks),
                            e.abrupt("return", {
                              weeks: m,
                              username: o,
                              year: r
                            })
                          );
                        case 9:
                          return (
                            (e.prev = 9),
                            (e.t0 = e.catch(1)),
                            e.abrupt(
                              "return",
                              c({ statusCode: 404, message: e.t0.message })
                            )
                          );
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 9]]
                );
              })
            )();
          },
          computed: {
            user: function () {
              return this.$route.params.username;
            }
          },
          mounted: function () {
            var t = this;
            (this.skyline = new l.Skyline(this.$refs.canvas3d)),
              (this.$refs.canvas3d.style.opacity = 0),
              (this.$refs.canvasloader.style.opacity = 1);
            var data = { weeks: this.weeks };
            this.skyline
              .initialize3D(data, this.username, this.year)
              .then(function () {
                return (
                  (t.$refs.canvas3d.style.opacity = 1),
                  (t.$refs.canvasloader.style.opacity = 0),
                  t.skyline.startAnimation()
                );
              });
          },
          destroyed: function () {
            this.skyline.dispose();
          },
          methods: {
            sceneReady: function () {
              window.sceneReady && window.sceneReady();
            }
          }
        },
        d = (n(268), n(0)),
        component = Object(d.a)(
          c,
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e("section", { staticClass: "model full-screen" }, [
              e("canvas", {
                ref: "canvas3d",
                staticClass: "fixed z-0 w-screen h-screen outline-none",
                attrs: { id: "canvas3d" }
              }),
              this._v(" "),
              e(
                "div",
                { ref: "canvasloader", attrs: { id: "canvas-loader" } },
                [e("Spinner")],
                1
              )
            ]);
          },
          [],
          !1,
          null,
          "62566bfc",
          null
        );
      e.default = component.exports;
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      n(36), n(91), n(15);
      var o = n(3),
        r = n(48),
        l = {
          layout: "embed",
          validate: function (t) {
            var e = t.params,
              n = e.username,
              o = e.year;
            return !(o && !/^[0-9]*$/.test(o)) && !!n;
          },
          transition: { name: "fade" },
          asyncData: function (t) {
            return Object(o.a)(
              regeneratorRuntime.mark(function e() {
                var n, o, r, l, c, d, m;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.params),
                            (o = n.username),
                            (r = n.year),
                            (l = t.store),
                            (c = t.error),
                            (e.prev = 1),
                            (e.next = 4),
                            l.dispatch("getContributions", {
                              username: o,
                              year: r
                            })
                          );
                        case 4:
                          return (
                            (d = e.sent),
                            (m = d.weeks),
                            e.abrupt("return", {
                              weeks: m,
                              username: o,
                              year: r
                            })
                          );
                        case 9:
                          return (
                            (e.prev = 9),
                            (e.t0 = e.catch(1)),
                            e.abrupt(
                              "return",
                              c({ statusCode: 404, message: e.t0.message })
                            )
                          );
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 9]]
                );
              })
            )();
          },
          computed: {
            user: function () {
              return this.$route.params.username;
            },
            nameWithPronoun: function () {
              return Object(r.a)(this.username);
            },
            pronoun: function () {
              return this.nameWithPronoun.split("'")[1];
            }
          },
          methods: {
            sceneReady: function () {
              window.sceneReady && window.sceneReady();
            }
          }
        },
        c = (n(269), n(0)),
        component = Object(c.a)(
          l,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o("section", { staticClass: "relative screenshot" }, [
              o(
                "div",
                {
                  staticClass:
                    "absolute bottom-0 left-0 flex items-center justify-center w-full h-2/5"
                },
                [
                  o(
                    "h3",
                    {
                      staticClass:
                        "relative z-10 text-6xl font-bold text-center px-30 text-light"
                    },
                    [
                      t._v("\n      @" + t._s(t.username)),
                      o(
                        "span",
                        {
                          staticClass:
                            "mr-1 text-gradient bg-gradient-to-r from-brilliant-rose-500 to-danube-500"
                        },
                        [
                          t._v("'" + t._s(t.pronoun) + "\n        "),
                          o("span", { staticClass: "inline-block" }, [
                            t._v(t._s(t.year) + " Skyline")
                          ])
                        ]
                      )
                    ]
                  )
                ]
              ),
              t._v(" "),
              o("img", {
                staticClass: "absolute top-0 left-0 w-full h-full",
                attrs: { src: n(304) }
              })
            ]);
          },
          [],
          !1,
          null,
          "0756881c",
          null
        );
      e.default = component.exports;
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(16),
        r = {
          asyncData: function (t) {
            var e = t.params.username;
            return (0, t.redirect)({
              name: "username-year",
              params: { year: Object(o.getLastYear)(), username: e }
            });
          }
        },
        l = n(0),
        component = Object(l.a)(r, void 0, void 0, !1, null, null, null);
      e.default = component.exports;
    }
  ])
]);
