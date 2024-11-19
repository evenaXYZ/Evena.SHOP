function Ns(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
  for (let i = 0; i < r.length; i++)
    n[r[i]] = !0;
  return t ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
const Ve = {}, dr = [], Pt = () => {
}, xm = () => !1, km = /^on[^a-z]/, Bo = (e) => km.test(e), Is = (e) => e.startsWith("onUpdate:"), Qe = Object.assign, Ds = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Em = Object.prototype.hasOwnProperty, ke = (e, t) => Em.call(e, t), de = Array.isArray, ur = (e) => Ei(e) === "[object Map]", Go = (e) => Ei(e) === "[object Set]", Il = (e) => Ei(e) === "[object Date]", me = (e) => typeof e == "function", qe = (e) => typeof e == "string", ai = (e) => typeof e == "symbol", $e = (e) => e !== null && typeof e == "object", gu = (e) => $e(e) && me(e.then) && me(e.catch), yu = Object.prototype.toString, Ei = (e) => yu.call(e), Sm = (e) => Ei(e).slice(8, -1), _u = (e) => Ei(e) === "[object Object]", Ps = (e) => qe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, oo = /* @__PURE__ */ Ns(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Wo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Om = /-(\w)/g, Ht = Wo((e) => e.replace(Om, (t, n) => n ? n.toUpperCase() : "")), Tm = /\B([A-Z])/g, kr = Wo(
  (e) => e.replace(Tm, "-$1").toLowerCase()
), Yo = Wo(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
), ka = Wo(
  (e) => e ? `on${Yo(e)}` : ""
), si = (e, t) => !Object.is(e, t), ao = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, ko = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Cm = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Am = (e) => {
  const t = qe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Dl;
const Ua = () => Dl || (Dl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Si(e) {
  if (de(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = qe(r) ? Dm(r) : Si(r);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else {
    if (qe(e))
      return e;
    if ($e(e))
      return e;
  }
}
const Mm = /;(?![^(]*\))/g, Nm = /:([^]+)/, Im = /\/\*[^]*?\*\//g;
function Dm(e) {
  const t = {};
  return e.replace(Im, "").split(Mm).forEach((n) => {
    if (n) {
      const r = n.split(Nm);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ye(e) {
  let t = "";
  if (qe(e))
    t = e;
  else if (de(e))
    for (let n = 0; n < e.length; n++) {
      const r = ye(e[n]);
      r && (t += r + " ");
    }
  else if ($e(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Pm = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Rm = /* @__PURE__ */ Ns(Pm);
function wu(e) {
  return !!e || e === "";
}
function Lm(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = qo(e[r], t[r]);
  return n;
}
function qo(e, t) {
  if (e === t)
    return !0;
  let n = Il(e), r = Il(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = ai(e), r = ai(t), n || r)
    return e === t;
  if (n = de(e), r = de(t), n || r)
    return n && r ? Lm(e, t) : !1;
  if (n = $e(e), r = $e(t), n || r) {
    if (!n || !r)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const a in e) {
      const s = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (s && !l || !s && l || !qo(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function xu(e, t) {
  return e.findIndex((n) => qo(n, t));
}
const T = (e) => qe(e) ? e : e == null ? "" : de(e) || $e(e) && (e.toString === yu || !me(e.toString)) ? JSON.stringify(e, ku, 2) : String(e), ku = (e, t) => t && t.__v_isRef ? ku(e, t.value) : ur(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, i]) => (n[`${r} =>`] = i, n), {})
} : Go(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : $e(t) && !de(t) && !_u(t) ? String(t) : t;
let At;
class $m {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = At, !t && At && (this.index = (At.scopes || (At.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = At;
      try {
        return At = this, t();
      } finally {
        At = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    At = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    At = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Fm(e, t = At) {
  t && t.active && t.effects.push(e);
}
function zm() {
  return At;
}
const Rs = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Eu = (e) => (e.w & _n) > 0, Su = (e) => (e.n & _n) > 0, Vm = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= _n;
}, jm = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      const i = t[r];
      Eu(i) && !Su(i) ? i.delete(e) : t[n++] = i, i.w &= ~_n, i.n &= ~_n;
    }
    t.length = n;
  }
}, Ha = /* @__PURE__ */ new WeakMap();
let Fr = 0, _n = 1;
const Ba = 30;
let Nt;
const Wn = Symbol(""), Ga = Symbol("");
class Ls {
  constructor(t, n = null, r) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Fm(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Nt, n = vn;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Nt, Nt = this, vn = !0, _n = 1 << ++Fr, Fr <= Ba ? Vm(this) : Pl(this), this.fn();
    } finally {
      Fr <= Ba && jm(this), _n = 1 << --Fr, Nt = this.parent, vn = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Nt === this ? this.deferStop = !0 : this.active && (Pl(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Pl(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let vn = !0;
const Ou = [];
function Er() {
  Ou.push(vn), vn = !1;
}
function Sr() {
  const e = Ou.pop();
  vn = e === void 0 ? !0 : e;
}
function yt(e, t, n) {
  if (vn && Nt) {
    let r = Ha.get(e);
    r || Ha.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || r.set(n, i = Rs()), Tu(i);
  }
}
function Tu(e, t) {
  let n = !1;
  Fr <= Ba ? Su(e) || (e.n |= _n, n = !Eu(e)) : n = !e.has(Nt), n && (e.add(Nt), Nt.deps.push(e));
}
function Jt(e, t, n, r, i, o) {
  const a = Ha.get(e);
  if (!a)
    return;
  let s = [];
  if (t === "clear")
    s = [...a.values()];
  else if (n === "length" && de(e)) {
    const l = Number(r);
    a.forEach((d, u) => {
      (u === "length" || u >= l) && s.push(d);
    });
  } else
    switch (n !== void 0 && s.push(a.get(n)), t) {
      case "add":
        de(e) ? Ps(n) && s.push(a.get("length")) : (s.push(a.get(Wn)), ur(e) && s.push(a.get(Ga)));
        break;
      case "delete":
        de(e) || (s.push(a.get(Wn)), ur(e) && s.push(a.get(Ga)));
        break;
      case "set":
        ur(e) && s.push(a.get(Wn));
        break;
    }
  if (s.length === 1)
    s[0] && Wa(s[0]);
  else {
    const l = [];
    for (const d of s)
      d && l.push(...d);
    Wa(Rs(l));
  }
}
function Wa(e, t) {
  const n = de(e) ? e : [...e];
  for (const r of n)
    r.computed && Rl(r);
  for (const r of n)
    r.computed || Rl(r);
}
function Rl(e, t) {
  (e !== Nt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Um = /* @__PURE__ */ Ns("__proto__,__v_isRef,__isVue"), Cu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ai)
), Hm = /* @__PURE__ */ $s(), Bm = /* @__PURE__ */ $s(!1, !0), Gm = /* @__PURE__ */ $s(!0), Ll = /* @__PURE__ */ Wm();
function Wm() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = ue(this);
      for (let o = 0, a = this.length; o < a; o++)
        yt(r, "get", o + "");
      const i = r[t](...n);
      return i === -1 || i === !1 ? r[t](...n.map(ue)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Er();
      const r = ue(this)[t].apply(this, n);
      return Sr(), r;
    };
  }), e;
}
function Ym(e) {
  const t = ue(this);
  return yt(t, "has", e), t.hasOwnProperty(e);
}
function $s(e = !1, t = !1) {
  return function(r, i, o) {
    if (i === "__v_isReactive")
      return !e;
    if (i === "__v_isReadonly")
      return e;
    if (i === "__v_isShallow")
      return t;
    if (i === "__v_raw" && o === (e ? t ? dp : Du : t ? Iu : Nu).get(r))
      return r;
    const a = de(r);
    if (!e) {
      if (a && ke(Ll, i))
        return Reflect.get(Ll, i, o);
      if (i === "hasOwnProperty")
        return Ym;
    }
    const s = Reflect.get(r, i, o);
    return (ai(i) ? Cu.has(i) : Um(i)) || (e || yt(r, "get", i), t) ? s : st(s) ? a && Ps(i) ? s : s.value : $e(s) ? e ? Pu(s) : Or(s) : s;
  };
}
const qm = /* @__PURE__ */ Au(), Km = /* @__PURE__ */ Au(!0);
function Au(e = !1) {
  return function(n, r, i, o) {
    let a = n[r];
    if (vr(a) && st(a) && !st(i))
      return !1;
    if (!e && (!Eo(i) && !vr(i) && (a = ue(a), i = ue(i)), !de(n) && st(a) && !st(i)))
      return a.value = i, !0;
    const s = de(n) && Ps(r) ? Number(r) < n.length : ke(n, r), l = Reflect.set(n, r, i, o);
    return n === ue(o) && (s ? si(i, a) && Jt(n, "set", r, i) : Jt(n, "add", r, i)), l;
  };
}
function Xm(e, t) {
  const n = ke(e, t);
  e[t];
  const r = Reflect.deleteProperty(e, t);
  return r && n && Jt(e, "delete", t, void 0), r;
}
function Jm(e, t) {
  const n = Reflect.has(e, t);
  return (!ai(t) || !Cu.has(t)) && yt(e, "has", t), n;
}
function Zm(e) {
  return yt(e, "iterate", de(e) ? "length" : Wn), Reflect.ownKeys(e);
}
const Mu = {
  get: Hm,
  set: qm,
  deleteProperty: Xm,
  has: Jm,
  ownKeys: Zm
}, Qm = {
  get: Gm,
  set(e, t) {
    return !0;
  },
  deleteProperty(e, t) {
    return !0;
  }
}, ep = /* @__PURE__ */ Qe(
  {},
  Mu,
  {
    get: Bm,
    set: Km
  }
), Fs = (e) => e, Ko = (e) => Reflect.getPrototypeOf(e);
function Ri(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const i = ue(e), o = ue(t);
  n || (t !== o && yt(i, "get", t), yt(i, "get", o));
  const { has: a } = Ko(i), s = r ? Fs : n ? js : li;
  if (a.call(i, t))
    return s(e.get(t));
  if (a.call(i, o))
    return s(e.get(o));
  e !== i && e.get(t);
}
function Li(e, t = !1) {
  const n = this.__v_raw, r = ue(n), i = ue(e);
  return t || (e !== i && yt(r, "has", e), yt(r, "has", i)), e === i ? n.has(e) : n.has(e) || n.has(i);
}
function $i(e, t = !1) {
  return e = e.__v_raw, !t && yt(ue(e), "iterate", Wn), Reflect.get(e, "size", e);
}
function $l(e) {
  e = ue(e);
  const t = ue(this);
  return Ko(t).has.call(t, e) || (t.add(e), Jt(t, "add", e, e)), this;
}
function Fl(e, t) {
  t = ue(t);
  const n = ue(this), { has: r, get: i } = Ko(n);
  let o = r.call(n, e);
  o || (e = ue(e), o = r.call(n, e));
  const a = i.call(n, e);
  return n.set(e, t), o ? si(t, a) && Jt(n, "set", e, t) : Jt(n, "add", e, t), this;
}
function zl(e) {
  const t = ue(this), { has: n, get: r } = Ko(t);
  let i = n.call(t, e);
  i || (e = ue(e), i = n.call(t, e)), r && r.call(t, e);
  const o = t.delete(e);
  return i && Jt(t, "delete", e, void 0), o;
}
function Vl() {
  const e = ue(this), t = e.size !== 0, n = e.clear();
  return t && Jt(e, "clear", void 0, void 0), n;
}
function Fi(e, t) {
  return function(r, i) {
    const o = this, a = o.__v_raw, s = ue(a), l = t ? Fs : e ? js : li;
    return !e && yt(s, "iterate", Wn), a.forEach((d, u) => r.call(i, l(d), l(u), o));
  };
}
function zi(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, o = ue(i), a = ur(o), s = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, d = i[e](...r), u = n ? Fs : t ? js : li;
    return !t && yt(
      o,
      "iterate",
      l ? Ga : Wn
    ), {
      // iterator protocol
      next() {
        const { value: f, done: c } = d.next();
        return c ? { value: f, done: c } : {
          value: s ? [u(f[0]), u(f[1])] : u(f),
          done: c
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function on(e) {
  return function(...t) {
    return e === "delete" ? !1 : this;
  };
}
function tp() {
  const e = {
    get(o) {
      return Ri(this, o);
    },
    get size() {
      return $i(this);
    },
    has: Li,
    add: $l,
    set: Fl,
    delete: zl,
    clear: Vl,
    forEach: Fi(!1, !1)
  }, t = {
    get(o) {
      return Ri(this, o, !1, !0);
    },
    get size() {
      return $i(this);
    },
    has: Li,
    add: $l,
    set: Fl,
    delete: zl,
    clear: Vl,
    forEach: Fi(!1, !0)
  }, n = {
    get(o) {
      return Ri(this, o, !0);
    },
    get size() {
      return $i(this, !0);
    },
    has(o) {
      return Li.call(this, o, !0);
    },
    add: on("add"),
    set: on("set"),
    delete: on("delete"),
    clear: on("clear"),
    forEach: Fi(!0, !1)
  }, r = {
    get(o) {
      return Ri(this, o, !0, !0);
    },
    get size() {
      return $i(this, !0);
    },
    has(o) {
      return Li.call(this, o, !0);
    },
    add: on("add"),
    set: on("set"),
    delete: on("delete"),
    clear: on("clear"),
    forEach: Fi(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = zi(
      o,
      !1,
      !1
    ), n[o] = zi(
      o,
      !0,
      !1
    ), t[o] = zi(
      o,
      !1,
      !0
    ), r[o] = zi(
      o,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    r
  ];
}
const [
  np,
  rp,
  ip,
  op
] = /* @__PURE__ */ tp();
function zs(e, t) {
  const n = t ? e ? op : ip : e ? rp : np;
  return (r, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    ke(n, i) && i in r ? n : r,
    i,
    o
  );
}
const ap = {
  get: /* @__PURE__ */ zs(!1, !1)
}, sp = {
  get: /* @__PURE__ */ zs(!1, !0)
}, lp = {
  get: /* @__PURE__ */ zs(!0, !1)
}, Nu = /* @__PURE__ */ new WeakMap(), Iu = /* @__PURE__ */ new WeakMap(), Du = /* @__PURE__ */ new WeakMap(), dp = /* @__PURE__ */ new WeakMap();
function up(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function cp(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : up(Sm(e));
}
function Or(e) {
  return vr(e) ? e : Vs(
    e,
    !1,
    Mu,
    ap,
    Nu
  );
}
function fp(e) {
  return Vs(
    e,
    !1,
    ep,
    sp,
    Iu
  );
}
function Pu(e) {
  return Vs(
    e,
    !0,
    Qm,
    lp,
    Du
  );
}
function Vs(e, t, n, r, i) {
  if (!$e(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const a = cp(e);
  if (a === 0)
    return e;
  const s = new Proxy(
    e,
    a === 2 ? r : n
  );
  return i.set(e, s), s;
}
function cr(e) {
  return vr(e) ? cr(e.__v_raw) : !!(e && e.__v_isReactive);
}
function vr(e) {
  return !!(e && e.__v_isReadonly);
}
function Eo(e) {
  return !!(e && e.__v_isShallow);
}
function Ru(e) {
  return cr(e) || vr(e);
}
function ue(e) {
  const t = e && e.__v_raw;
  return t ? ue(t) : e;
}
function Lu(e) {
  return ko(e, "__v_skip", !0), e;
}
const li = (e) => $e(e) ? Or(e) : e, js = (e) => $e(e) ? Pu(e) : e;
function $u(e) {
  vn && Nt && (e = ue(e), Tu(e.dep || (e.dep = Rs())));
}
function Fu(e, t) {
  e = ue(e);
  const n = e.dep;
  n && Wa(n);
}
function st(e) {
  return !!(e && e.__v_isRef === !0);
}
function W(e) {
  return zu(e, !1);
}
function Ya(e) {
  return zu(e, !0);
}
function zu(e, t) {
  return st(e) ? e : new mp(e, t);
}
class mp {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : ue(t), this._value = n ? t : li(t);
  }
  get value() {
    return $u(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Eo(t) || vr(t);
    t = n ? t : ue(t), si(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : li(t), Fu(this));
  }
}
function di(e) {
  return st(e) ? e.value : e;
}
const pp = {
  get: (e, t, n) => di(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return st(i) && !st(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Vu(e) {
  return cr(e) ? e : new Proxy(e, pp);
}
class bp {
  constructor(t, n, r, i) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new Ls(t, () => {
      this._dirty || (this._dirty = !0, Fu(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r;
  }
  get value() {
    const t = ue(this);
    return $u(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function hp(e, t, n = !1) {
  let r, i;
  const o = me(e);
  return o ? (r = e, i = Pt) : (r = e.get, i = e.set), new bp(r, i, o || !i, n);
}
function gn(e, t, n, r) {
  let i;
  try {
    i = r ? e(...r) : e();
  } catch (o) {
    Xo(o, t, n);
  }
  return i;
}
function St(e, t, n, r) {
  if (me(e)) {
    const o = gn(e, t, n, r);
    return o && gu(o) && o.catch((a) => {
      Xo(a, t, n);
    }), o;
  }
  const i = [];
  for (let o = 0; o < e.length; o++)
    i.push(St(e[o], t, n, r));
  return i;
}
function Xo(e, t, n, r = !0) {
  const i = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const a = t.proxy, s = n;
    for (; o; ) {
      const d = o.ec;
      if (d) {
        for (let u = 0; u < d.length; u++)
          if (d[u](e, a, s) === !1)
            return;
      }
      o = o.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      gn(
        l,
        null,
        10,
        [e, a, s]
      );
      return;
    }
  }
  vp(e, n, i, r);
}
function vp(e, t, n, r = !0) {
  console.error(e);
}
let ui = !1, qa = !1;
const dt = [];
let Vt = 0;
const fr = [];
let Bt = null, Fn = 0;
const ju = /* @__PURE__ */ Promise.resolve();
let Us = null;
function Kt(e) {
  const t = Us || ju;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function gp(e) {
  let t = Vt + 1, n = dt.length;
  for (; t < n; ) {
    const r = t + n >>> 1;
    ci(dt[r]) < e ? t = r + 1 : n = r;
  }
  return t;
}
function Hs(e) {
  (!dt.length || !dt.includes(
    e,
    ui && e.allowRecurse ? Vt + 1 : Vt
  )) && (e.id == null ? dt.push(e) : dt.splice(gp(e.id), 0, e), Uu());
}
function Uu() {
  !ui && !qa && (qa = !0, Us = ju.then(Bu));
}
function yp(e) {
  const t = dt.indexOf(e);
  t > Vt && dt.splice(t, 1);
}
function _p(e) {
  de(e) ? fr.push(...e) : (!Bt || !Bt.includes(
    e,
    e.allowRecurse ? Fn + 1 : Fn
  )) && fr.push(e), Uu();
}
function jl(e, t = ui ? Vt + 1 : 0) {
  for (; t < dt.length; t++) {
    const n = dt[t];
    n && n.pre && (dt.splice(t, 1), t--, n());
  }
}
function Hu(e) {
  if (fr.length) {
    const t = [...new Set(fr)];
    if (fr.length = 0, Bt) {
      Bt.push(...t);
      return;
    }
    for (Bt = t, Bt.sort((n, r) => ci(n) - ci(r)), Fn = 0; Fn < Bt.length; Fn++)
      Bt[Fn]();
    Bt = null, Fn = 0;
  }
}
const ci = (e) => e.id == null ? 1 / 0 : e.id, wp = (e, t) => {
  const n = ci(e) - ci(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Bu(e) {
  qa = !1, ui = !0, dt.sort(wp);
  const t = Pt;
  try {
    for (Vt = 0; Vt < dt.length; Vt++) {
      const n = dt[Vt];
      n && n.active !== !1 && gn(n, null, 14);
    }
  } finally {
    Vt = 0, dt.length = 0, Hu(), ui = !1, Us = null, (dt.length || fr.length) && Bu();
  }
}
function xp(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || Ve;
  let i = n;
  const o = t.startsWith("update:"), a = o && t.slice(7);
  if (a && a in r) {
    const u = `${a === "modelValue" ? "model" : a}Modifiers`, { number: f, trim: c } = r[u] || Ve;
    c && (i = n.map((m) => qe(m) ? m.trim() : m)), f && (i = n.map(Cm));
  }
  let s, l = r[s = ka(t)] || // also try camelCase event handler (#2249)
  r[s = ka(Ht(t))];
  !l && o && (l = r[s = ka(kr(t))]), l && St(
    l,
    e,
    6,
    i
  );
  const d = r[s + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[s])
      return;
    e.emitted[s] = !0, St(
      d,
      e,
      6,
      i
    );
  }
}
function Gu(e, t, n = !1) {
  const r = t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let a = {}, s = !1;
  if (!me(e)) {
    const l = (d) => {
      const u = Gu(d, t, !0);
      u && (s = !0, Qe(a, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !s ? ($e(e) && r.set(e, null), null) : (de(o) ? o.forEach((l) => a[l] = null) : Qe(a, o), $e(e) && r.set(e, a), a);
}
function Jo(e, t) {
  return !e || !Bo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ke(e, t[0].toLowerCase() + t.slice(1)) || ke(e, kr(t)) || ke(e, t));
}
let lt = null, Wu = null;
function So(e) {
  const t = lt;
  return lt = e, Wu = e && e.type.__scopeId || null, t;
}
function ie(e, t = lt, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && ed(-1);
    const o = So(t);
    let a;
    try {
      a = e(...i);
    } finally {
      So(o), r._d && ed(1);
    }
    return a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Ea(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: i,
    props: o,
    propsOptions: [a],
    slots: s,
    attrs: l,
    emit: d,
    render: u,
    renderCache: f,
    data: c,
    setupState: m,
    ctx: p,
    inheritAttrs: h
  } = e;
  let x, g;
  const v = So(e);
  try {
    if (n.shapeFlag & 4) {
      const k = i || r;
      x = zt(
        u.call(
          k,
          k,
          f,
          o,
          m,
          c,
          p
        )
      ), g = l;
    } else {
      const k = t;
      x = zt(
        k.length > 1 ? k(
          o,
          { attrs: l, slots: s, emit: d }
        ) : k(
          o,
          null
          /* we know it doesn't need it */
        )
      ), g = t.props ? l : kp(l);
    }
  } catch (k) {
    ti.length = 0, Xo(k, e, 1), x = G(Ot);
  }
  let w = x;
  if (g && h !== !1) {
    const k = Object.keys(g), { shapeFlag: A } = w;
    k.length && A & 7 && (a && k.some(Is) && (g = Ep(
      g,
      a
    )), w = Zt(w, g));
  }
  return n.dirs && (w = Zt(w), w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs), n.transition && (w.transition = n.transition), x = w, So(v), x;
}
const kp = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Bo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ep = (e, t) => {
  const n = {};
  for (const r in e)
    (!Is(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Sp(e, t, n) {
  const { props: r, children: i, component: o } = e, { props: a, children: s, patchFlag: l } = t, d = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Ul(r, a, d) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const c = u[f];
        if (a[c] !== r[c] && !Jo(d, c))
          return !0;
      }
    }
  } else
    return (i || s) && (!s || !s.$stable) ? !0 : r === a ? !1 : r ? a ? Ul(r, a, d) : !0 : !!a;
  return !1;
}
function Ul(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const o = r[i];
    if (t[o] !== e[o] && !Jo(n, o))
      return !0;
  }
  return !1;
}
function Op({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Tp = (e) => e.__isSuspense;
function Cp(e, t) {
  t && t.pendingBranch ? de(e) ? t.effects.push(...e) : t.effects.push(e) : _p(e);
}
function bt(e, t) {
  return Bs(e, null, t);
}
const Vi = {};
function pt(e, t, n) {
  return Bs(e, t, n);
}
function Bs(e, t, { immediate: n, deep: r, flush: i, onTrack: o, onTrigger: a } = Ve) {
  var s;
  const l = zm() === ((s = it) == null ? void 0 : s.scope) ? it : null;
  let d, u = !1, f = !1;
  if (st(e) ? (d = () => e.value, u = Eo(e)) : cr(e) ? (d = () => e, r = !0) : de(e) ? (f = !0, u = e.some((k) => cr(k) || Eo(k)), d = () => e.map((k) => {
    if (st(k))
      return k.value;
    if (cr(k))
      return Un(k);
    if (me(k))
      return gn(k, l, 2);
  })) : me(e) ? t ? d = () => gn(e, l, 2) : d = () => {
    if (!(l && l.isUnmounted))
      return c && c(), St(
        e,
        l,
        3,
        [m]
      );
  } : d = Pt, t && r) {
    const k = d;
    d = () => Un(k());
  }
  let c, m = (k) => {
    c = v.onStop = () => {
      gn(k, l, 4);
    };
  }, p;
  if (pi)
    if (m = Pt, t ? n && St(t, l, 3, [
      d(),
      f ? [] : void 0,
      m
    ]) : d(), i === "sync") {
      const k = S1();
      p = k.__watcherHandles || (k.__watcherHandles = []);
    } else
      return Pt;
  let h = f ? new Array(e.length).fill(Vi) : Vi;
  const x = () => {
    if (v.active)
      if (t) {
        const k = v.run();
        (r || u || (f ? k.some(
          (A, F) => si(A, h[F])
        ) : si(k, h))) && (c && c(), St(t, l, 3, [
          k,
          // pass undefined as the old value when it's changed for the first time
          h === Vi ? void 0 : f && h[0] === Vi ? [] : h,
          m
        ]), h = k);
      } else
        v.run();
  };
  x.allowRecurse = !!t;
  let g;
  i === "sync" ? g = x : i === "post" ? g = () => gt(x, l && l.suspense) : (x.pre = !0, l && (x.id = l.uid), g = () => Hs(x));
  const v = new Ls(d, g);
  t ? n ? x() : h = v.run() : i === "post" ? gt(
    v.run.bind(v),
    l && l.suspense
  ) : v.run();
  const w = () => {
    v.stop(), l && l.scope && Ds(l.scope.effects, v);
  };
  return p && p.push(w), w;
}
function Ap(e, t, n) {
  const r = this.proxy, i = qe(e) ? e.includes(".") ? Yu(r, e) : () => r[e] : e.bind(r, r);
  let o;
  me(t) ? o = t : (o = t.handler, n = t);
  const a = it;
  gr(this);
  const s = Bs(i, o.bind(r), n);
  return a ? gr(a) : Yn(), s;
}
function Yu(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
function Un(e, t) {
  if (!$e(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), st(e))
    Un(e.value, t);
  else if (de(e))
    for (let n = 0; n < e.length; n++)
      Un(e[n], t);
  else if (Go(e) || ur(e))
    e.forEach((n) => {
      Un(n, t);
    });
  else if (_u(e))
    for (const n in e)
      Un(e[n], t);
  return e;
}
function Mp(e, t) {
  const n = lt;
  if (n === null)
    return e;
  const r = na(n) || n.proxy, i = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, s, l, d = Ve] = t[o];
    a && (me(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && Un(s), i.push({
      dir: a,
      instance: r,
      value: s,
      oldValue: void 0,
      arg: l,
      modifiers: d
    }));
  }
  return e;
}
function Tn(e, t, n, r) {
  const i = e.dirs, o = t && t.dirs;
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    o && (s.oldValue = o[a].value);
    let l = s.dir[r];
    l && (Er(), St(l, n, 8, [
      e.el,
      s,
      e,
      t
    ]), Sr());
  }
}
function Np() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Be(() => {
    e.isMounted = !0;
  }), Zu(() => {
    e.isUnmounting = !0;
  }), e;
}
const kt = [Function, Array], qu = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: kt,
  onEnter: kt,
  onAfterEnter: kt,
  onEnterCancelled: kt,
  // leave
  onBeforeLeave: kt,
  onLeave: kt,
  onAfterLeave: kt,
  onLeaveCancelled: kt,
  // appear
  onBeforeAppear: kt,
  onAppear: kt,
  onAfterAppear: kt,
  onAppearCancelled: kt
}, Ip = {
  name: "BaseTransition",
  props: qu,
  setup(e, { slots: t }) {
    const n = v1(), r = Np();
    let i;
    return () => {
      const o = t.default && Xu(t.default(), !0);
      if (!o || !o.length)
        return;
      let a = o[0];
      if (o.length > 1) {
        for (const h of o)
          if (h.type !== Ot) {
            a = h;
            break;
          }
      }
      const s = ue(e), { mode: l } = s;
      if (r.isLeaving)
        return Sa(a);
      const d = Hl(a);
      if (!d)
        return Sa(a);
      const u = Ka(
        d,
        s,
        r,
        n
      );
      Xa(d, u);
      const f = n.subTree, c = f && Hl(f);
      let m = !1;
      const { getTransitionKey: p } = d.type;
      if (p) {
        const h = p();
        i === void 0 ? i = h : h !== i && (i = h, m = !0);
      }
      if (c && c.type !== Ot && (!zn(d, c) || m)) {
        const h = Ka(
          c,
          s,
          r,
          n
        );
        if (Xa(c, h), l === "out-in")
          return r.isLeaving = !0, h.afterLeave = () => {
            r.isLeaving = !1, n.update.active !== !1 && n.update();
          }, Sa(a);
        l === "in-out" && d.type !== Ot && (h.delayLeave = (x, g, v) => {
          const w = Ku(
            r,
            c
          );
          w[String(c.key)] = c, x._leaveCb = () => {
            g(), x._leaveCb = void 0, delete u.delayedLeave;
          }, u.delayedLeave = v;
        });
      }
      return a;
    };
  }
}, Dp = Ip;
function Ku(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Ka(e, t, n, r) {
  const {
    appear: i,
    mode: o,
    persisted: a = !1,
    onBeforeEnter: s,
    onEnter: l,
    onAfterEnter: d,
    onEnterCancelled: u,
    onBeforeLeave: f,
    onLeave: c,
    onAfterLeave: m,
    onLeaveCancelled: p,
    onBeforeAppear: h,
    onAppear: x,
    onAfterAppear: g,
    onAppearCancelled: v
  } = t, w = String(e.key), k = Ku(n, e), A = (R, z) => {
    R && St(
      R,
      r,
      9,
      z
    );
  }, F = (R, z) => {
    const J = z[1];
    A(R, z), de(R) ? R.every((Y) => Y.length <= 1) && J() : R.length <= 1 && J();
  }, j = {
    mode: o,
    persisted: a,
    beforeEnter(R) {
      let z = s;
      if (!n.isMounted)
        if (i)
          z = h || s;
        else
          return;
      R._leaveCb && R._leaveCb(
        !0
        /* cancelled */
      );
      const J = k[w];
      J && zn(e, J) && J.el._leaveCb && J.el._leaveCb(), A(z, [R]);
    },
    enter(R) {
      let z = l, J = d, Y = u;
      if (!n.isMounted)
        if (i)
          z = x || l, J = g || d, Y = v || u;
        else
          return;
      let D = !1;
      const Z = R._enterCb = (be) => {
        D || (D = !0, be ? A(Y, [R]) : A(J, [R]), j.delayedLeave && j.delayedLeave(), R._enterCb = void 0);
      };
      z ? F(z, [R, Z]) : Z();
    },
    leave(R, z) {
      const J = String(e.key);
      if (R._enterCb && R._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return z();
      A(f, [R]);
      let Y = !1;
      const D = R._leaveCb = (Z) => {
        Y || (Y = !0, z(), Z ? A(p, [R]) : A(m, [R]), R._leaveCb = void 0, k[J] === e && delete k[J]);
      };
      k[J] = e, c ? F(c, [R, D]) : D();
    },
    clone(R) {
      return Ka(R, t, n, r);
    }
  };
  return j;
}
function Sa(e) {
  if (Zo(e))
    return e = Zt(e), e.children = null, e;
}
function Hl(e) {
  return Zo(e) ? e.children ? e.children[0] : void 0 : e;
}
function Xa(e, t) {
  e.shapeFlag & 6 && e.component ? Xa(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Xu(e, t = !1, n) {
  let r = [], i = 0;
  for (let o = 0; o < e.length; o++) {
    let a = e[o];
    const s = n == null ? a.key : String(n) + String(a.key != null ? a.key : o);
    a.type === H ? (a.patchFlag & 128 && i++, r = r.concat(
      Xu(a.children, t, s)
    )) : (t || a.type !== Ot) && r.push(s != null ? Zt(a, { key: s }) : a);
  }
  if (i > 1)
    for (let o = 0; o < r.length; o++)
      r[o].patchFlag = -2;
  return r;
}
function pe(e, t) {
  return me(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => Qe({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const Zr = (e) => !!e.type.__asyncLoader, Zo = (e) => e.type.__isKeepAlive;
function Pp(e, t) {
  Ju(e, "a", t);
}
function Rp(e, t) {
  Ju(e, "da", t);
}
function Ju(e, t, n = it) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Qo(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Zo(i.parent.vnode) && Lp(r, t, n, i), i = i.parent;
  }
}
function Lp(e, t, n, r) {
  const i = Qo(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  ot(() => {
    Ds(r[t], i);
  }, n);
}
function Qo(e, t, n = it, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...a) => {
      if (n.isUnmounted)
        return;
      Er(), gr(n);
      const s = St(t, n, e, a);
      return Yn(), Sr(), s;
    });
    return r ? i.unshift(o) : i.push(o), o;
  }
}
const nn = (e) => (t, n = it) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!pi || e === "sp") && Qo(e, (...r) => t(...r), n)
), $p = nn("bm"), Be = nn("m"), Fp = nn("bu"), zp = nn("u"), Zu = nn("bum"), ot = nn("um"), Vp = nn("sp"), jp = nn(
  "rtg"
), Up = nn(
  "rtc"
);
function Hp(e, t = it) {
  Qo("ec", e, t);
}
const Gs = "components";
function ae(e, t) {
  return ec(Gs, e, !0, t) || e;
}
const Qu = Symbol.for("v-ndc");
function Bp(e) {
  return qe(e) ? ec(Gs, e, !1) || e : e || Qu;
}
function ec(e, t, n = !0, r = !1) {
  const i = lt || it;
  if (i) {
    const o = i.type;
    if (e === Gs) {
      const s = x1(
        o,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (s && (s === t || s === Ht(t) || s === Yo(Ht(t))))
        return o;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      Bl(i[e] || o[e], t) || // global registration
      Bl(i.appContext[e], t)
    );
    return !a && r ? o : a;
  }
}
function Bl(e, t) {
  return e && (e[t] || e[Ht(t)] || e[Yo(Ht(t))]);
}
function pn(e, t, n, r) {
  let i;
  const o = n && n[r];
  if (de(e) || qe(e)) {
    i = new Array(e.length);
    for (let a = 0, s = e.length; a < s; a++)
      i[a] = t(e[a], a, void 0, o && o[a]);
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++)
      i[a] = t(a + 1, a, void 0, o && o[a]);
  } else if ($e(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (a, s) => t(a, s, void 0, o && o[s])
      );
    else {
      const a = Object.keys(e);
      i = new Array(a.length);
      for (let s = 0, l = a.length; s < l; s++) {
        const d = a[s];
        i[s] = t(e[d], d, s, o && o[s]);
      }
    }
  else
    i = [];
  return n && (n[r] = i), i;
}
function fi(e, t, n = {}, r, i) {
  if (lt.isCE || lt.parent && Zr(lt.parent) && lt.parent.isCE)
    return t !== "default" && (n.name = t), G("slot", n, r && r());
  let o = e[t];
  o && o._c && (o._d = !1), E();
  const a = o && tc(o(n)), s = xe(
    H,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      a && a.key || `_${t}`
    },
    a || (r ? r() : []),
    a && e._ === 1 ? 64 : -2
  );
  return !i && s.scopeId && (s.slotScopeIds = [s.scopeId + "-s"]), o && o._c && (o._d = !0), s;
}
function tc(e) {
  return e.some((t) => Co(t) ? !(t.type === Ot || t.type === H && !tc(t.children)) : !0) ? e : null;
}
const Ja = (e) => e ? fc(e) ? na(e) || e.proxy : Ja(e.parent) : null, Qr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Qe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ja(e.parent),
    $root: (e) => Ja(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ws(e),
    $forceUpdate: (e) => e.f || (e.f = () => Hs(e.update)),
    $nextTick: (e) => e.n || (e.n = Kt.bind(e.proxy)),
    $watch: (e) => Ap.bind(e)
  })
), Oa = (e, t) => e !== Ve && !e.__isScriptSetup && ke(e, t), Gp = {
  get({ _: e }, t) {
    const { ctx: n, setupState: r, data: i, props: o, accessCache: a, type: s, appContext: l } = e;
    let d;
    if (t[0] !== "$") {
      const m = a[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return r[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Oa(r, t))
          return a[t] = 1, r[t];
        if (i !== Ve && ke(i, t))
          return a[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && ke(d, t)
        )
          return a[t] = 3, o[t];
        if (n !== Ve && ke(n, t))
          return a[t] = 4, n[t];
        Za && (a[t] = 0);
      }
    }
    const u = Qr[t];
    let f, c;
    if (u)
      return t === "$attrs" && yt(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (f = s.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== Ve && ke(n, t))
      return a[t] = 4, n[t];
    if (
      // global properties
      c = l.config.globalProperties, ke(c, t)
    )
      return c[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: o } = e;
    return Oa(i, t) ? (i[t] = n, !0) : r !== Ve && ke(r, t) ? (r[t] = n, !0) : ke(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, propsOptions: o }
  }, a) {
    let s;
    return !!n[a] || e !== Ve && ke(e, a) || Oa(t, a) || (s = o[0]) && ke(s, a) || ke(r, a) || ke(Qr, a) || ke(i.config.globalProperties, a);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ke(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Gl(e) {
  return de(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Za = !0;
function Wp(e) {
  const t = Ws(e), n = e.proxy, r = e.ctx;
  Za = !1, t.beforeCreate && Wl(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: a,
    watch: s,
    provide: l,
    inject: d,
    // lifecycle
    created: u,
    beforeMount: f,
    mounted: c,
    beforeUpdate: m,
    updated: p,
    activated: h,
    deactivated: x,
    beforeDestroy: g,
    beforeUnmount: v,
    destroyed: w,
    unmounted: k,
    render: A,
    renderTracked: F,
    renderTriggered: j,
    errorCaptured: R,
    serverPrefetch: z,
    // public API
    expose: J,
    inheritAttrs: Y,
    // assets
    components: D,
    directives: Z,
    filters: be
  } = t;
  if (d && Yp(d, r, null), a)
    for (const L in a) {
      const X = a[L];
      me(X) && (r[L] = X.bind(n));
    }
  if (i) {
    const L = i.call(n, n);
    $e(L) && (e.data = Or(L));
  }
  if (Za = !0, o)
    for (const L in o) {
      const X = o[L], ge = me(X) ? X.bind(n, n) : me(X.get) ? X.get.bind(n, n) : Pt, De = !me(X) && me(X.set) ? X.set.bind(n) : Pt, Ee = I({
        get: ge,
        set: De
      });
      Object.defineProperty(r, L, {
        enumerable: !0,
        configurable: !0,
        get: () => Ee.value,
        set: (Te) => Ee.value = Te
      });
    }
  if (s)
    for (const L in s)
      nc(s[L], r, n, L);
  if (l) {
    const L = me(l) ? l.call(n) : l;
    Reflect.ownKeys(L).forEach((X) => {
      ut(X, L[X]);
    });
  }
  u && Wl(u, e, "c");
  function he(L, X) {
    de(X) ? X.forEach((ge) => L(ge.bind(n))) : X && L(X.bind(n));
  }
  if (he($p, f), he(Be, c), he(Fp, m), he(zp, p), he(Pp, h), he(Rp, x), he(Hp, R), he(Up, F), he(jp, j), he(Zu, v), he(ot, k), he(Vp, z), de(J))
    if (J.length) {
      const L = e.exposed || (e.exposed = {});
      J.forEach((X) => {
        Object.defineProperty(L, X, {
          get: () => n[X],
          set: (ge) => n[X] = ge
        });
      });
    } else
      e.exposed || (e.exposed = {});
  A && e.render === Pt && (e.render = A), Y != null && (e.inheritAttrs = Y), D && (e.components = D), Z && (e.directives = Z);
}
function Yp(e, t, n = Pt) {
  de(e) && (e = Qa(e));
  for (const r in e) {
    const i = e[r];
    let o;
    $e(i) ? "default" in i ? o = Ye(
      i.from || r,
      i.default,
      !0
      /* treat default function as factory */
    ) : o = Ye(i.from || r) : o = Ye(i), st(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (a) => o.value = a
    }) : t[r] = o;
  }
}
function Wl(e, t, n) {
  St(
    de(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function nc(e, t, n, r) {
  const i = r.includes(".") ? Yu(n, r) : () => n[r];
  if (qe(e)) {
    const o = t[e];
    me(o) && pt(i, o);
  } else if (me(e))
    pt(i, e.bind(n));
  else if ($e(e))
    if (de(e))
      e.forEach((o) => nc(o, t, n, r));
    else {
      const o = me(e.handler) ? e.handler.bind(n) : t[e.handler];
      me(o) && pt(i, o, e);
    }
}
function Ws(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: a }
  } = e.appContext, s = o.get(t);
  let l;
  return s ? l = s : !i.length && !n && !r ? l = t : (l = {}, i.length && i.forEach(
    (d) => Oo(l, d, a, !0)
  ), Oo(l, t, a)), $e(t) && o.set(t, l), l;
}
function Oo(e, t, n, r = !1) {
  const { mixins: i, extends: o } = t;
  o && Oo(e, o, n, !0), i && i.forEach(
    (a) => Oo(e, a, n, !0)
  );
  for (const a in t)
    if (!(r && a === "expose")) {
      const s = qp[a] || n && n[a];
      e[a] = s ? s(e[a], t[a]) : t[a];
    }
  return e;
}
const qp = {
  data: Yl,
  props: ql,
  emits: ql,
  // objects
  methods: zr,
  computed: zr,
  // lifecycle
  beforeCreate: ft,
  created: ft,
  beforeMount: ft,
  mounted: ft,
  beforeUpdate: ft,
  updated: ft,
  beforeDestroy: ft,
  beforeUnmount: ft,
  destroyed: ft,
  unmounted: ft,
  activated: ft,
  deactivated: ft,
  errorCaptured: ft,
  serverPrefetch: ft,
  // assets
  components: zr,
  directives: zr,
  // watch
  watch: Xp,
  // provide / inject
  provide: Yl,
  inject: Kp
};
function Yl(e, t) {
  return t ? e ? function() {
    return Qe(
      me(e) ? e.call(this, this) : e,
      me(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Kp(e, t) {
  return zr(Qa(e), Qa(t));
}
function Qa(e) {
  if (de(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ft(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function zr(e, t) {
  return e ? Qe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ql(e, t) {
  return e ? de(e) && de(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Qe(
    /* @__PURE__ */ Object.create(null),
    Gl(e),
    Gl(t ?? {})
  ) : t;
}
function Xp(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Qe(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = ft(e[r], t[r]);
  return n;
}
function rc() {
  return {
    app: null,
    config: {
      isNativeTag: xm,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Jp = 0;
function Zp(e, t) {
  return function(r, i = null) {
    me(r) || (r = Qe({}, r)), i != null && !$e(i) && (i = null);
    const o = rc(), a = /* @__PURE__ */ new Set();
    let s = !1;
    const l = o.app = {
      _uid: Jp++,
      _component: r,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: O1,
      get config() {
        return o.config;
      },
      set config(d) {
      },
      use(d, ...u) {
        return a.has(d) || (d && me(d.install) ? (a.add(d), d.install(l, ...u)) : me(d) && (a.add(d), d(l, ...u))), l;
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), l;
      },
      component(d, u) {
        return u ? (o.components[d] = u, l) : o.components[d];
      },
      directive(d, u) {
        return u ? (o.directives[d] = u, l) : o.directives[d];
      },
      mount(d, u, f) {
        if (!s) {
          const c = G(
            r,
            i
          );
          return c.appContext = o, u && t ? t(c, d) : e(c, d, f), s = !0, l._container = d, d.__vue_app__ = l, na(c.component) || c.component.proxy;
        }
      },
      unmount() {
        s && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(d, u) {
        return o.provides[d] = u, l;
      },
      runWithContext(d) {
        To = l;
        try {
          return d();
        } finally {
          To = null;
        }
      }
    };
    return l;
  };
}
let To = null;
function ut(e, t) {
  if (it) {
    let n = it.provides;
    const r = it.parent && it.parent.provides;
    r === n && (n = it.provides = Object.create(r)), n[e] = t;
  }
}
function Ye(e, t, n = !1) {
  const r = it || lt;
  if (r || To) {
    const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : To._context.provides;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && me(t) ? t.call(r && r.proxy) : t;
  }
}
function Qp(e, t, n, r = !1) {
  const i = {}, o = {};
  ko(o, ta, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), ic(e, t, i, o);
  for (const a in e.propsOptions[0])
    a in i || (i[a] = void 0);
  n ? e.props = r ? i : fp(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function e1(e, t, n, r) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: a }
  } = e, s = ue(i), [l] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let c = u[f];
        if (Jo(e.emitsOptions, c))
          continue;
        const m = t[c];
        if (l)
          if (ke(o, c))
            m !== o[c] && (o[c] = m, d = !0);
          else {
            const p = Ht(c);
            i[p] = es(
              l,
              s,
              p,
              m,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          m !== o[c] && (o[c] = m, d = !0);
      }
    }
  } else {
    ic(e, t, i, o) && (d = !0);
    let u;
    for (const f in s)
      (!t || // for camelCase
      !ke(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = kr(f)) === f || !ke(t, u))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (i[f] = es(
        l,
        s,
        f,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete i[f]);
    if (o !== s)
      for (const f in o)
        (!t || !ke(t, f)) && (delete o[f], d = !0);
  }
  d && Jt(e, "set", "$attrs");
}
function ic(e, t, n, r) {
  const [i, o] = e.propsOptions;
  let a = !1, s;
  if (t)
    for (let l in t) {
      if (oo(l))
        continue;
      const d = t[l];
      let u;
      i && ke(i, u = Ht(l)) ? !o || !o.includes(u) ? n[u] = d : (s || (s = {}))[u] = d : Jo(e.emitsOptions, l) || (!(l in r) || d !== r[l]) && (r[l] = d, a = !0);
    }
  if (o) {
    const l = ue(n), d = s || Ve;
    for (let u = 0; u < o.length; u++) {
      const f = o[u];
      n[f] = es(
        i,
        l,
        f,
        d[f],
        e,
        !ke(d, f)
      );
    }
  }
  return a;
}
function es(e, t, n, r, i, o) {
  const a = e[n];
  if (a != null) {
    const s = ke(a, "default");
    if (s && r === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && me(l)) {
        const { propsDefaults: d } = i;
        n in d ? r = d[n] : (gr(i), r = d[n] = l.call(
          null,
          t
        ), Yn());
      } else
        r = l;
    }
    a[
      0
      /* shouldCast */
    ] && (o && !s ? r = !1 : a[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === kr(n)) && (r = !0));
  }
  return r;
}
function oc(e, t, n = !1) {
  const r = t.propsCache, i = r.get(e);
  if (i)
    return i;
  const o = e.props, a = {}, s = [];
  let l = !1;
  if (!me(e)) {
    const u = (f) => {
      l = !0;
      const [c, m] = oc(f, t, !0);
      Qe(a, c), m && s.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !l)
    return $e(e) && r.set(e, dr), dr;
  if (de(o))
    for (let u = 0; u < o.length; u++) {
      const f = Ht(o[u]);
      Kl(f) && (a[f] = Ve);
    }
  else if (o)
    for (const u in o) {
      const f = Ht(u);
      if (Kl(f)) {
        const c = o[u], m = a[f] = de(c) || me(c) ? { type: c } : Qe({}, c);
        if (m) {
          const p = Zl(Boolean, m.type), h = Zl(String, m.type);
          m[
            0
            /* shouldCast */
          ] = p > -1, m[
            1
            /* shouldCastTrue */
          ] = h < 0 || p < h, (p > -1 || ke(m, "default")) && s.push(f);
        }
      }
    }
  const d = [a, s];
  return $e(e) && r.set(e, d), d;
}
function Kl(e) {
  return e[0] !== "$";
}
function Xl(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Jl(e, t) {
  return Xl(e) === Xl(t);
}
function Zl(e, t) {
  return de(t) ? t.findIndex((n) => Jl(n, e)) : me(t) && Jl(t, e) ? 0 : -1;
}
const ac = (e) => e[0] === "_" || e === "$stable", Ys = (e) => de(e) ? e.map(zt) : [zt(e)], t1 = (e, t, n) => {
  if (t._n)
    return t;
  const r = ie((...i) => Ys(t(...i)), n);
  return r._c = !1, r;
}, sc = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (ac(i))
      continue;
    const o = e[i];
    if (me(o))
      t[i] = t1(i, o, r);
    else if (o != null) {
      const a = Ys(o);
      t[i] = () => a;
    }
  }
}, lc = (e, t) => {
  const n = Ys(t);
  e.slots.default = () => n;
}, n1 = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = ue(t), ko(t, "_", n)) : sc(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && lc(e, t);
  ko(e.slots, ta, 1);
}, r1 = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let o = !0, a = Ve;
  if (r.shapeFlag & 32) {
    const s = t._;
    s ? n && s === 1 ? o = !1 : (Qe(i, t), !n && s === 1 && delete i._) : (o = !t.$stable, sc(t, i)), a = t;
  } else
    t && (lc(e, t), a = { default: 1 });
  if (o)
    for (const s in i)
      !ac(s) && !(s in a) && delete i[s];
};
function ts(e, t, n, r, i = !1) {
  if (de(e)) {
    e.forEach(
      (c, m) => ts(
        c,
        t && (de(t) ? t[m] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if (Zr(r) && !i)
    return;
  const o = r.shapeFlag & 4 ? na(r.component) || r.component.proxy : r.el, a = i ? null : o, { i: s, r: l } = e, d = t && t.r, u = s.refs === Ve ? s.refs = {} : s.refs, f = s.setupState;
  if (d != null && d !== l && (qe(d) ? (u[d] = null, ke(f, d) && (f[d] = null)) : st(d) && (d.value = null)), me(l))
    gn(l, s, 12, [a, u]);
  else {
    const c = qe(l), m = st(l);
    if (c || m) {
      const p = () => {
        if (e.f) {
          const h = c ? ke(f, l) ? f[l] : u[l] : l.value;
          i ? de(h) && Ds(h, o) : de(h) ? h.includes(o) || h.push(o) : c ? (u[l] = [o], ke(f, l) && (f[l] = u[l])) : (l.value = [o], e.k && (u[e.k] = l.value));
        } else
          c ? (u[l] = a, ke(f, l) && (f[l] = a)) : m && (l.value = a, e.k && (u[e.k] = a));
      };
      a ? (p.id = -1, gt(p, n)) : p();
    }
  }
}
const gt = Cp;
function i1(e) {
  return o1(e);
}
function o1(e, t) {
  const n = Ua();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: o,
    createElement: a,
    createText: s,
    createComment: l,
    setText: d,
    setElementText: u,
    parentNode: f,
    nextSibling: c,
    setScopeId: m = Pt,
    insertStaticContent: p
  } = e, h = (b, y, O, N = null, M = null, U = null, q = !1, V = null, B = !!y.dynamicChildren) => {
    if (b === y)
      return;
    b && !zn(b, y) && (N = On(b), Te(b, M, U, !0), b = null), y.patchFlag === -2 && (B = !1, y.dynamicChildren = null);
    const { type: P, ref: se, shapeFlag: Q } = y;
    switch (P) {
      case ea:
        x(b, y, O, N);
        break;
      case Ot:
        g(b, y, O, N);
        break;
      case Ta:
        b == null && v(y, O, N, q);
        break;
      case H:
        D(
          b,
          y,
          O,
          N,
          M,
          U,
          q,
          V,
          B
        );
        break;
      default:
        Q & 1 ? A(
          b,
          y,
          O,
          N,
          M,
          U,
          q,
          V,
          B
        ) : Q & 6 ? Z(
          b,
          y,
          O,
          N,
          M,
          U,
          q,
          V,
          B
        ) : (Q & 64 || Q & 128) && P.process(
          b,
          y,
          O,
          N,
          M,
          U,
          q,
          V,
          B,
          Ie
        );
    }
    se != null && M && ts(se, b && b.ref, U, y || b, !y);
  }, x = (b, y, O, N) => {
    if (b == null)
      r(
        y.el = s(y.children),
        O,
        N
      );
    else {
      const M = y.el = b.el;
      y.children !== b.children && d(M, y.children);
    }
  }, g = (b, y, O, N) => {
    b == null ? r(
      y.el = l(y.children || ""),
      O,
      N
    ) : y.el = b.el;
  }, v = (b, y, O, N) => {
    [b.el, b.anchor] = p(
      b.children,
      y,
      O,
      N,
      b.el,
      b.anchor
    );
  }, w = ({ el: b, anchor: y }, O, N) => {
    let M;
    for (; b && b !== y; )
      M = c(b), r(b, O, N), b = M;
    r(y, O, N);
  }, k = ({ el: b, anchor: y }) => {
    let O;
    for (; b && b !== y; )
      O = c(b), i(b), b = O;
    i(y);
  }, A = (b, y, O, N, M, U, q, V, B) => {
    q = q || y.type === "svg", b == null ? F(
      y,
      O,
      N,
      M,
      U,
      q,
      V,
      B
    ) : z(
      b,
      y,
      M,
      U,
      q,
      V,
      B
    );
  }, F = (b, y, O, N, M, U, q, V) => {
    let B, P;
    const { type: se, props: Q, shapeFlag: le, transition: fe, dirs: ve } = b;
    if (B = b.el = a(
      b.type,
      U,
      Q && Q.is,
      Q
    ), le & 8 ? u(B, b.children) : le & 16 && R(
      b.children,
      B,
      null,
      N,
      M,
      U && se !== "foreignObject",
      q,
      V
    ), ve && Tn(b, null, N, "created"), j(B, b, b.scopeId, q, N), Q) {
      for (const Pe in Q)
        Pe !== "value" && !oo(Pe) && o(
          B,
          Pe,
          null,
          Q[Pe],
          U,
          b.children,
          N,
          M,
          ct
        );
      "value" in Q && o(B, "value", null, Q.value), (P = Q.onVnodeBeforeMount) && $t(P, N, b);
    }
    ve && Tn(b, null, N, "beforeMount");
    const Fe = (!M || M && !M.pendingBranch) && fe && !fe.persisted;
    Fe && fe.beforeEnter(B), r(B, y, O), ((P = Q && Q.onVnodeMounted) || Fe || ve) && gt(() => {
      P && $t(P, N, b), Fe && fe.enter(B), ve && Tn(b, null, N, "mounted");
    }, M);
  }, j = (b, y, O, N, M) => {
    if (O && m(b, O), N)
      for (let U = 0; U < N.length; U++)
        m(b, N[U]);
    if (M) {
      let U = M.subTree;
      if (y === U) {
        const q = M.vnode;
        j(
          b,
          q,
          q.scopeId,
          q.slotScopeIds,
          M.parent
        );
      }
    }
  }, R = (b, y, O, N, M, U, q, V, B = 0) => {
    for (let P = B; P < b.length; P++) {
      const se = b[P] = V ? fn(b[P]) : zt(b[P]);
      h(
        null,
        se,
        y,
        O,
        N,
        M,
        U,
        q,
        V
      );
    }
  }, z = (b, y, O, N, M, U, q) => {
    const V = y.el = b.el;
    let { patchFlag: B, dynamicChildren: P, dirs: se } = y;
    B |= b.patchFlag & 16;
    const Q = b.props || Ve, le = y.props || Ve;
    let fe;
    O && Cn(O, !1), (fe = le.onVnodeBeforeUpdate) && $t(fe, O, y, b), se && Tn(y, b, O, "beforeUpdate"), O && Cn(O, !0);
    const ve = M && y.type !== "foreignObject";
    if (P ? J(
      b.dynamicChildren,
      P,
      V,
      O,
      N,
      ve,
      U
    ) : q || X(
      b,
      y,
      V,
      null,
      O,
      N,
      ve,
      U,
      !1
    ), B > 0) {
      if (B & 16)
        Y(
          V,
          y,
          Q,
          le,
          O,
          N,
          M
        );
      else if (B & 2 && Q.class !== le.class && o(V, "class", null, le.class, M), B & 4 && o(V, "style", Q.style, le.style, M), B & 8) {
        const Fe = y.dynamicProps;
        for (let Pe = 0; Pe < Fe.length; Pe++) {
          const Je = Fe[Pe], Ct = Q[Je], Zn = le[Je];
          (Zn !== Ct || Je === "value") && o(
            V,
            Je,
            Ct,
            Zn,
            M,
            b.children,
            O,
            N,
            ct
          );
        }
      }
      B & 1 && b.children !== y.children && u(V, y.children);
    } else
      !q && P == null && Y(
        V,
        y,
        Q,
        le,
        O,
        N,
        M
      );
    ((fe = le.onVnodeUpdated) || se) && gt(() => {
      fe && $t(fe, O, y, b), se && Tn(y, b, O, "updated");
    }, N);
  }, J = (b, y, O, N, M, U, q) => {
    for (let V = 0; V < y.length; V++) {
      const B = b[V], P = y[V], se = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        B.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (B.type === H || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !zn(B, P) || // - In the case of a component, it could contain anything.
        B.shapeFlag & 70) ? f(B.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          O
        )
      );
      h(
        B,
        P,
        se,
        null,
        N,
        M,
        U,
        q,
        !0
      );
    }
  }, Y = (b, y, O, N, M, U, q) => {
    if (O !== N) {
      if (O !== Ve)
        for (const V in O)
          !oo(V) && !(V in N) && o(
            b,
            V,
            O[V],
            null,
            q,
            y.children,
            M,
            U,
            ct
          );
      for (const V in N) {
        if (oo(V))
          continue;
        const B = N[V], P = O[V];
        B !== P && V !== "value" && o(
          b,
          V,
          P,
          B,
          q,
          y.children,
          M,
          U,
          ct
        );
      }
      "value" in N && o(b, "value", O.value, N.value);
    }
  }, D = (b, y, O, N, M, U, q, V, B) => {
    const P = y.el = b ? b.el : s(""), se = y.anchor = b ? b.anchor : s("");
    let { patchFlag: Q, dynamicChildren: le, slotScopeIds: fe } = y;
    fe && (V = V ? V.concat(fe) : fe), b == null ? (r(P, O, N), r(se, O, N), R(
      y.children,
      O,
      se,
      M,
      U,
      q,
      V,
      B
    )) : Q > 0 && Q & 64 && le && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    b.dynamicChildren ? (J(
      b.dynamicChildren,
      le,
      O,
      M,
      U,
      q,
      V
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (y.key != null || M && y === M.subTree) && qs(
      b,
      y,
      !0
      /* shallow */
    )) : X(
      b,
      y,
      O,
      se,
      M,
      U,
      q,
      V,
      B
    );
  }, Z = (b, y, O, N, M, U, q, V, B) => {
    y.slotScopeIds = V, b == null ? y.shapeFlag & 512 ? M.ctx.activate(
      y,
      O,
      N,
      q,
      B
    ) : be(
      y,
      O,
      N,
      M,
      U,
      q,
      B
    ) : Le(b, y, B);
  }, be = (b, y, O, N, M, U, q) => {
    const V = b.component = h1(
      b,
      N,
      M
    );
    if (Zo(b) && (V.ctx.renderer = Ie), g1(V), V.asyncDep) {
      if (M && M.registerDep(V, he), !b.el) {
        const B = V.subTree = G(Ot);
        g(null, B, y, O);
      }
      return;
    }
    he(
      V,
      b,
      y,
      O,
      M,
      U,
      q
    );
  }, Le = (b, y, O) => {
    const N = y.component = b.component;
    if (Sp(b, y, O))
      if (N.asyncDep && !N.asyncResolved) {
        L(N, y, O);
        return;
      } else
        N.next = y, yp(N.update), N.update();
    else
      y.el = b.el, N.vnode = y;
  }, he = (b, y, O, N, M, U, q) => {
    const V = () => {
      if (b.isMounted) {
        let { next: se, bu: Q, u: le, parent: fe, vnode: ve } = b, Fe = se, Pe;
        Cn(b, !1), se ? (se.el = ve.el, L(b, se, q)) : se = ve, Q && ao(Q), (Pe = se.props && se.props.onVnodeBeforeUpdate) && $t(Pe, fe, se, ve), Cn(b, !0);
        const Je = Ea(b), Ct = b.subTree;
        b.subTree = Je, h(
          Ct,
          Je,
          // parent may have changed if it's in a teleport
          f(Ct.el),
          // anchor may have changed if it's in a fragment
          On(Ct),
          b,
          M,
          U
        ), se.el = Je.el, Fe === null && Op(b, Je.el), le && gt(le, M), (Pe = se.props && se.props.onVnodeUpdated) && gt(
          () => $t(Pe, fe, se, ve),
          M
        );
      } else {
        let se;
        const { el: Q, props: le } = y, { bm: fe, m: ve, parent: Fe } = b, Pe = Zr(y);
        if (Cn(b, !1), fe && ao(fe), !Pe && (se = le && le.onVnodeBeforeMount) && $t(se, Fe, y), Cn(b, !0), Q && nt) {
          const Je = () => {
            b.subTree = Ea(b), nt(
              Q,
              b.subTree,
              b,
              M,
              null
            );
          };
          Pe ? y.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !b.isUnmounted && Je()
          ) : Je();
        } else {
          const Je = b.subTree = Ea(b);
          h(
            null,
            Je,
            O,
            N,
            b,
            M,
            U
          ), y.el = Je.el;
        }
        if (ve && gt(ve, M), !Pe && (se = le && le.onVnodeMounted)) {
          const Je = y;
          gt(
            () => $t(se, Fe, Je),
            M
          );
        }
        (y.shapeFlag & 256 || Fe && Zr(Fe.vnode) && Fe.vnode.shapeFlag & 256) && b.a && gt(b.a, M), b.isMounted = !0, y = O = N = null;
      }
    }, B = b.effect = new Ls(
      V,
      () => Hs(P),
      b.scope
      // track it in component's effect scope
    ), P = b.update = () => B.run();
    P.id = b.uid, Cn(b, !0), P();
  }, L = (b, y, O) => {
    y.component = b;
    const N = b.vnode.props;
    b.vnode = y, b.next = null, e1(b, y.props, N, O), r1(b, y.children, O), Er(), jl(), Sr();
  }, X = (b, y, O, N, M, U, q, V, B = !1) => {
    const P = b && b.children, se = b ? b.shapeFlag : 0, Q = y.children, { patchFlag: le, shapeFlag: fe } = y;
    if (le > 0) {
      if (le & 128) {
        De(
          P,
          Q,
          O,
          N,
          M,
          U,
          q,
          V,
          B
        );
        return;
      } else if (le & 256) {
        ge(
          P,
          Q,
          O,
          N,
          M,
          U,
          q,
          V,
          B
        );
        return;
      }
    }
    fe & 8 ? (se & 16 && ct(P, M, U), Q !== P && u(O, Q)) : se & 16 ? fe & 16 ? De(
      P,
      Q,
      O,
      N,
      M,
      U,
      q,
      V,
      B
    ) : ct(P, M, U, !0) : (se & 8 && u(O, ""), fe & 16 && R(
      Q,
      O,
      N,
      M,
      U,
      q,
      V,
      B
    ));
  }, ge = (b, y, O, N, M, U, q, V, B) => {
    b = b || dr, y = y || dr;
    const P = b.length, se = y.length, Q = Math.min(P, se);
    let le;
    for (le = 0; le < Q; le++) {
      const fe = y[le] = B ? fn(y[le]) : zt(y[le]);
      h(
        b[le],
        fe,
        O,
        null,
        M,
        U,
        q,
        V,
        B
      );
    }
    P > se ? ct(
      b,
      M,
      U,
      !0,
      !1,
      Q
    ) : R(
      y,
      O,
      N,
      M,
      U,
      q,
      V,
      B,
      Q
    );
  }, De = (b, y, O, N, M, U, q, V, B) => {
    let P = 0;
    const se = y.length;
    let Q = b.length - 1, le = se - 1;
    for (; P <= Q && P <= le; ) {
      const fe = b[P], ve = y[P] = B ? fn(y[P]) : zt(y[P]);
      if (zn(fe, ve))
        h(
          fe,
          ve,
          O,
          null,
          M,
          U,
          q,
          V,
          B
        );
      else
        break;
      P++;
    }
    for (; P <= Q && P <= le; ) {
      const fe = b[Q], ve = y[le] = B ? fn(y[le]) : zt(y[le]);
      if (zn(fe, ve))
        h(
          fe,
          ve,
          O,
          null,
          M,
          U,
          q,
          V,
          B
        );
      else
        break;
      Q--, le--;
    }
    if (P > Q) {
      if (P <= le) {
        const fe = le + 1, ve = fe < se ? y[fe].el : N;
        for (; P <= le; )
          h(
            null,
            y[P] = B ? fn(y[P]) : zt(y[P]),
            O,
            ve,
            M,
            U,
            q,
            V,
            B
          ), P++;
      }
    } else if (P > le)
      for (; P <= Q; )
        Te(b[P], M, U, !0), P++;
    else {
      const fe = P, ve = P, Fe = /* @__PURE__ */ new Map();
      for (P = ve; P <= le; P++) {
        const wt = y[P] = B ? fn(y[P]) : zt(y[P]);
        wt.key != null && Fe.set(wt.key, P);
      }
      let Pe, Je = 0;
      const Ct = le - ve + 1;
      let Zn = !1, Al = 0;
      const Ir = new Array(Ct);
      for (P = 0; P < Ct; P++)
        Ir[P] = 0;
      for (P = fe; P <= Q; P++) {
        const wt = b[P];
        if (Je >= Ct) {
          Te(wt, M, U, !0);
          continue;
        }
        let Lt;
        if (wt.key != null)
          Lt = Fe.get(wt.key);
        else
          for (Pe = ve; Pe <= le; Pe++)
            if (Ir[Pe - ve] === 0 && zn(wt, y[Pe])) {
              Lt = Pe;
              break;
            }
        Lt === void 0 ? Te(wt, M, U, !0) : (Ir[Lt - ve] = P + 1, Lt >= Al ? Al = Lt : Zn = !0, h(
          wt,
          y[Lt],
          O,
          null,
          M,
          U,
          q,
          V,
          B
        ), Je++);
      }
      const Ml = Zn ? a1(Ir) : dr;
      for (Pe = Ml.length - 1, P = Ct - 1; P >= 0; P--) {
        const wt = ve + P, Lt = y[wt], Nl = wt + 1 < se ? y[wt + 1].el : N;
        Ir[P] === 0 ? h(
          null,
          Lt,
          O,
          Nl,
          M,
          U,
          q,
          V,
          B
        ) : Zn && (Pe < 0 || P !== Ml[Pe] ? Ee(Lt, O, Nl, 2) : Pe--);
      }
    }
  }, Ee = (b, y, O, N, M = null) => {
    const { el: U, type: q, transition: V, children: B, shapeFlag: P } = b;
    if (P & 6) {
      Ee(b.component.subTree, y, O, N);
      return;
    }
    if (P & 128) {
      b.suspense.move(y, O, N);
      return;
    }
    if (P & 64) {
      q.move(b, y, O, Ie);
      return;
    }
    if (q === H) {
      r(U, y, O);
      for (let Q = 0; Q < B.length; Q++)
        Ee(B[Q], y, O, N);
      r(b.anchor, y, O);
      return;
    }
    if (q === Ta) {
      w(b, y, O);
      return;
    }
    if (N !== 2 && P & 1 && V)
      if (N === 0)
        V.beforeEnter(U), r(U, y, O), gt(() => V.enter(U), M);
      else {
        const { leave: Q, delayLeave: le, afterLeave: fe } = V, ve = () => r(U, y, O), Fe = () => {
          Q(U, () => {
            ve(), fe && fe();
          });
        };
        le ? le(U, ve, Fe) : Fe();
      }
    else
      r(U, y, O);
  }, Te = (b, y, O, N = !1, M = !1) => {
    const {
      type: U,
      props: q,
      ref: V,
      children: B,
      dynamicChildren: P,
      shapeFlag: se,
      patchFlag: Q,
      dirs: le
    } = b;
    if (V != null && ts(V, null, O, b, !0), se & 256) {
      y.ctx.deactivate(b);
      return;
    }
    const fe = se & 1 && le, ve = !Zr(b);
    let Fe;
    if (ve && (Fe = q && q.onVnodeBeforeUnmount) && $t(Fe, y, b), se & 6)
      we(b.component, O, N);
    else {
      if (se & 128) {
        b.suspense.unmount(O, N);
        return;
      }
      fe && Tn(b, null, y, "beforeUnmount"), se & 64 ? b.type.remove(
        b,
        y,
        O,
        M,
        Ie,
        N
      ) : P && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (U !== H || Q > 0 && Q & 64) ? ct(
        P,
        y,
        O,
        !1,
        !0
      ) : (U === H && Q & 384 || !M && se & 16) && ct(B, y, O), N && Tt(b);
    }
    (ve && (Fe = q && q.onVnodeUnmounted) || fe) && gt(() => {
      Fe && $t(Fe, y, b), fe && Tn(b, null, y, "unmounted");
    }, O);
  }, Tt = (b) => {
    const { type: y, el: O, anchor: N, transition: M } = b;
    if (y === H) {
      re(O, N);
      return;
    }
    if (y === Ta) {
      k(b);
      return;
    }
    const U = () => {
      i(O), M && !M.persisted && M.afterLeave && M.afterLeave();
    };
    if (b.shapeFlag & 1 && M && !M.persisted) {
      const { leave: q, delayLeave: V } = M, B = () => q(O, U);
      V ? V(b.el, U, B) : B();
    } else
      U();
  }, re = (b, y) => {
    let O;
    for (; b !== y; )
      O = c(b), i(b), b = O;
    i(y);
  }, we = (b, y, O) => {
    const { bum: N, scope: M, update: U, subTree: q, um: V } = b;
    N && ao(N), M.stop(), U && (U.active = !1, Te(q, b, y, O)), V && gt(V, y), gt(() => {
      b.isUnmounted = !0;
    }, y), y && y.pendingBranch && !y.isUnmounted && b.asyncDep && !b.asyncResolved && b.suspenseId === y.pendingId && (y.deps--, y.deps === 0 && y.resolve());
  }, ct = (b, y, O, N = !1, M = !1, U = 0) => {
    for (let q = U; q < b.length; q++)
      Te(b[q], y, O, N, M);
  }, On = (b) => b.shapeFlag & 6 ? On(b.component.subTree) : b.shapeFlag & 128 ? b.suspense.next() : c(b.anchor || b.el), S = (b, y, O) => {
    b == null ? y._vnode && Te(y._vnode, null, null, !0) : h(y._vnode || null, b, y, null, null, null, O), jl(), Hu(), y._vnode = b;
  }, Ie = {
    p: h,
    um: Te,
    m: Ee,
    r: Tt,
    mt: be,
    mc: R,
    pc: X,
    pbc: J,
    n: On,
    o: e
  };
  let et, nt;
  return t && ([et, nt] = t(
    Ie
  )), {
    render: S,
    hydrate: et,
    createApp: Zp(S, et)
  };
}
function Cn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function qs(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (de(r) && de(i))
    for (let o = 0; o < r.length; o++) {
      const a = r[o];
      let s = i[o];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = i[o] = fn(i[o]), s.el = a.el), n || qs(a, s)), s.type === ea && (s.el = a.el);
    }
}
function a1(e) {
  const t = e.slice(), n = [0];
  let r, i, o, a, s;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const d = e[r];
    if (d !== 0) {
      if (i = n[n.length - 1], e[i] < d) {
        t[r] = i, n.push(r);
        continue;
      }
      for (o = 0, a = n.length - 1; o < a; )
        s = o + a >> 1, e[n[s]] < d ? o = s + 1 : a = s;
      d < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, a = n[o - 1]; o-- > 0; )
    n[o] = a, a = t[a];
  return n;
}
const s1 = (e) => e.__isTeleport, ei = (e) => e && (e.disabled || e.disabled === ""), Ql = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ns = (e, t) => {
  const n = e && e.to;
  return qe(n) ? t ? t(n) : null : n;
}, l1 = {
  __isTeleport: !0,
  process(e, t, n, r, i, o, a, s, l, d) {
    const {
      mc: u,
      pc: f,
      pbc: c,
      o: { insert: m, querySelector: p, createText: h, createComment: x }
    } = d, g = ei(t.props);
    let { shapeFlag: v, children: w, dynamicChildren: k } = t;
    if (e == null) {
      const A = t.el = h(""), F = t.anchor = h("");
      m(A, n, r), m(F, n, r);
      const j = t.target = ns(t.props, p), R = t.targetAnchor = h("");
      j && (m(R, j), a = a || Ql(j));
      const z = (J, Y) => {
        v & 16 && u(
          w,
          J,
          Y,
          i,
          o,
          a,
          s,
          l
        );
      };
      g ? z(n, F) : j && z(j, R);
    } else {
      t.el = e.el;
      const A = t.anchor = e.anchor, F = t.target = e.target, j = t.targetAnchor = e.targetAnchor, R = ei(e.props), z = R ? n : F, J = R ? A : j;
      if (a = a || Ql(F), k ? (c(
        e.dynamicChildren,
        k,
        z,
        i,
        o,
        a,
        s
      ), qs(e, t, !0)) : l || f(
        e,
        t,
        z,
        J,
        i,
        o,
        a,
        s,
        !1
      ), g)
        R || ji(
          t,
          n,
          A,
          d,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const Y = t.target = ns(
          t.props,
          p
        );
        Y && ji(
          t,
          Y,
          null,
          d,
          0
        );
      } else
        R && ji(
          t,
          F,
          j,
          d,
          1
        );
    }
    dc(t);
  },
  remove(e, t, n, r, { um: i, o: { remove: o } }, a) {
    const { shapeFlag: s, children: l, anchor: d, targetAnchor: u, target: f, props: c } = e;
    if (f && o(u), (a || !ei(c)) && (o(d), s & 16))
      for (let m = 0; m < l.length; m++) {
        const p = l[m];
        i(
          p,
          t,
          n,
          !0,
          !!p.dynamicChildren
        );
      }
  },
  move: ji,
  hydrate: d1
};
function ji(e, t, n, { o: { insert: r }, m: i }, o = 2) {
  o === 0 && r(e.targetAnchor, t, n);
  const { el: a, anchor: s, shapeFlag: l, children: d, props: u } = e, f = o === 2;
  if (f && r(a, t, n), (!f || ei(u)) && l & 16)
    for (let c = 0; c < d.length; c++)
      i(
        d[c],
        t,
        n,
        2
      );
  f && r(s, t, n);
}
function d1(e, t, n, r, i, o, {
  o: { nextSibling: a, parentNode: s, querySelector: l }
}, d) {
  const u = t.target = ns(
    t.props,
    l
  );
  if (u) {
    const f = u._lpa || u.firstChild;
    if (t.shapeFlag & 16)
      if (ei(t.props))
        t.anchor = d(
          a(e),
          t,
          s(e),
          n,
          r,
          i,
          o
        ), t.targetAnchor = f;
      else {
        t.anchor = a(e);
        let c = f;
        for (; c; )
          if (c = a(c), c && c.nodeType === 8 && c.data === "teleport anchor") {
            t.targetAnchor = c, u._lpa = t.targetAnchor && a(t.targetAnchor);
            break;
          }
        d(
          f,
          t,
          u,
          n,
          r,
          i,
          o
        );
      }
    dc(t);
  }
  return t.anchor && a(t.anchor);
}
const u1 = l1;
function dc(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const H = Symbol.for("v-fgt"), ea = Symbol.for("v-txt"), Ot = Symbol.for("v-cmt"), Ta = Symbol.for("v-stc"), ti = [];
let It = null;
function E(e = !1) {
  ti.push(It = e ? null : []);
}
function c1() {
  ti.pop(), It = ti[ti.length - 1] || null;
}
let mi = 1;
function ed(e) {
  mi += e;
}
function uc(e) {
  return e.dynamicChildren = mi > 0 ? It || dr : null, c1(), mi > 0 && It && It.push(e), e;
}
function C(e, t, n, r, i, o) {
  return uc(
    _(
      e,
      t,
      n,
      r,
      i,
      o,
      !0
      /* isBlock */
    )
  );
}
function xe(e, t, n, r, i) {
  return uc(
    G(
      e,
      t,
      n,
      r,
      i,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function Co(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function zn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ta = "__vInternal", cc = ({ key: e }) => e ?? null, so = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? qe(e) || st(e) || me(e) ? { i: lt, r: e, k: t, f: !!n } : e : null);
function _(e, t = null, n = null, r = 0, i = null, o = e === H ? 0 : 1, a = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && cc(t),
    ref: t && so(t),
    scopeId: Wu,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: lt
  };
  return s ? (Ks(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= qe(n) ? 8 : 16), mi > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  It && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && It.push(l), l;
}
const G = f1;
function f1(e, t = null, n = null, r = 0, i = null, o = !1) {
  if ((!e || e === Qu) && (e = Ot), Co(e)) {
    const s = Zt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ks(s, n), mi > 0 && !o && It && (s.shapeFlag & 6 ? It[It.indexOf(e)] = s : It.push(s)), s.patchFlag |= -2, s;
  }
  if (k1(e) && (e = e.__vccOpts), t) {
    t = m1(t);
    let { class: s, style: l } = t;
    s && !qe(s) && (t.class = ye(s)), $e(l) && (Ru(l) && !de(l) && (l = Qe({}, l)), t.style = Si(l));
  }
  const a = qe(e) ? 1 : Tp(e) ? 128 : s1(e) ? 64 : $e(e) ? 4 : me(e) ? 2 : 0;
  return _(
    e,
    t,
    n,
    r,
    i,
    a,
    o,
    !0
  );
}
function m1(e) {
  return e ? Ru(e) || ta in e ? Qe({}, e) : e : null;
}
function Zt(e, t, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: a } = e, s = t ? mr(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: s,
    key: s && cc(s),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? de(i) ? i.concat(so(t)) : [i, so(t)] : so(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== H ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Zt(e.ssContent),
    ssFallback: e.ssFallback && Zt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function ne(e = " ", t = 0) {
  return G(ea, null, e, t);
}
function oe(e = "", t = !1) {
  return t ? (E(), xe(Ot, null, e)) : G(Ot, null, e);
}
function zt(e) {
  return e == null || typeof e == "boolean" ? G(Ot) : de(e) ? G(
    H,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? fn(e) : G(ea, null, String(e));
}
function fn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Zt(e);
}
function Ks(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (de(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Ks(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !(ta in t) ? t._ctx = lt : i === 3 && lt && (lt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    me(t) ? (t = { default: t, _ctx: lt }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ne(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function mr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = ye([t.class, r.class]));
      else if (i === "style")
        t.style = Si([t.style, r.style]);
      else if (Bo(i)) {
        const o = t[i], a = r[i];
        a && o !== a && !(de(o) && o.includes(a)) && (t[i] = o ? [].concat(o, a) : a);
      } else
        i !== "" && (t[i] = r[i]);
  }
  return t;
}
function $t(e, t, n, r = null) {
  St(e, t, 7, [
    n,
    r
  ]);
}
const p1 = rc();
let b1 = 0;
function h1(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || p1, o = {
    uid: b1++,
    vnode: e,
    type: r,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new $m(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: oc(r, i),
    emitsOptions: Gu(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ve,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Ve,
    data: Ve,
    props: Ve,
    attrs: Ve,
    slots: Ve,
    refs: Ve,
    setupState: Ve,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = xp.bind(null, o), e.ce && e.ce(o), o;
}
let it = null;
const v1 = () => it || lt;
let Xs, Qn, td = "__VUE_INSTANCE_SETTERS__";
(Qn = Ua()[td]) || (Qn = Ua()[td] = []), Qn.push((e) => it = e), Xs = (e) => {
  Qn.length > 1 ? Qn.forEach((t) => t(e)) : Qn[0](e);
};
const gr = (e) => {
  Xs(e), e.scope.on();
}, Yn = () => {
  it && it.scope.off(), Xs(null);
};
function fc(e) {
  return e.vnode.shapeFlag & 4;
}
let pi = !1;
function g1(e, t = !1) {
  pi = t;
  const { props: n, children: r } = e.vnode, i = fc(e);
  Qp(e, n, i, t), n1(e, r);
  const o = i ? y1(e, t) : void 0;
  return pi = !1, o;
}
function y1(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Lu(new Proxy(e.ctx, Gp));
  const { setup: r } = n;
  if (r) {
    const i = e.setupContext = r.length > 1 ? w1(e) : null;
    gr(e), Er();
    const o = gn(
      r,
      e,
      0,
      [e.props, i]
    );
    if (Sr(), Yn(), gu(o)) {
      if (o.then(Yn, Yn), t)
        return o.then((a) => {
          nd(e, a, t);
        }).catch((a) => {
          Xo(a, e, 0);
        });
      e.asyncDep = o;
    } else
      nd(e, o, t);
  } else
    mc(e, t);
}
function nd(e, t, n) {
  me(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : $e(t) && (e.setupState = Vu(t)), mc(e, n);
}
let rd;
function mc(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && rd && !r.render) {
      const i = r.template || Ws(e).template;
      if (i) {
        const { isCustomElement: o, compilerOptions: a } = e.appContext.config, { delimiters: s, compilerOptions: l } = r, d = Qe(
          Qe(
            {
              isCustomElement: o,
              delimiters: s
            },
            a
          ),
          l
        );
        r.render = rd(i, d);
      }
    }
    e.render = r.render || Pt;
  }
  gr(e), Er(), Wp(e), Sr(), Yn();
}
function _1(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(t, n) {
        return yt(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function w1(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return _1(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function na(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Vu(Lu(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Qr)
          return Qr[n](e);
      },
      has(t, n) {
        return n in t || n in Qr;
      }
    }));
}
function x1(e, t = !0) {
  return me(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function k1(e) {
  return me(e) && "__vccOpts" in e;
}
const I = (e, t) => hp(e, t, pi);
function je(e, t, n) {
  const r = arguments.length;
  return r === 2 ? $e(t) && !de(t) ? Co(t) ? G(e, null, [t]) : G(e, t) : G(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Co(n) && (n = [n]), G(e, t, n));
}
const E1 = Symbol.for("v-scx"), S1 = () => Ye(E1), O1 = "3.3.4", T1 = "http://www.w3.org/2000/svg", Vn = typeof document < "u" ? document : null, id = Vn && /* @__PURE__ */ Vn.createElement("template"), C1 = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t ? Vn.createElementNS(T1, e) : Vn.createElement(e, n ? { is: n } : void 0);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (e) => Vn.createTextNode(e),
  createComment: (e) => Vn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Vn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, i, o) {
    const a = n ? n.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      id.innerHTML = r ? `<svg>${e}</svg>` : e;
      const s = id.content;
      if (r) {
        const l = s.firstChild;
        for (; l.firstChild; )
          s.appendChild(l.firstChild);
        s.removeChild(l);
      }
      t.insertBefore(s, n);
    }
    return [
      // first
      a ? a.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function A1(e, t, n) {
  const r = e._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function M1(e, t, n) {
  const r = e.style, i = qe(n);
  if (n && !i) {
    if (t && !qe(t))
      for (const o in t)
        n[o] == null && rs(r, o, "");
    for (const o in n)
      rs(r, o, n[o]);
  } else {
    const o = r.display;
    i ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (r.display = o);
  }
}
const od = /\s*!important$/;
function rs(e, t, n) {
  if (de(n))
    n.forEach((r) => rs(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = N1(e, t);
    od.test(n) ? e.setProperty(
      kr(r),
      n.replace(od, ""),
      "important"
    ) : e[r] = n;
  }
}
const ad = ["Webkit", "Moz", "ms"], Ca = {};
function N1(e, t) {
  const n = Ca[t];
  if (n)
    return n;
  let r = Ht(t);
  if (r !== "filter" && r in e)
    return Ca[t] = r;
  r = Yo(r);
  for (let i = 0; i < ad.length; i++) {
    const o = ad[i] + r;
    if (o in e)
      return Ca[t] = o;
  }
  return t;
}
const sd = "http://www.w3.org/1999/xlink";
function I1(e, t, n, r, i) {
  if (r && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(sd, t.slice(6, t.length)) : e.setAttributeNS(sd, t, n);
  else {
    const o = Rm(t);
    n == null || o && !wu(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function D1(e, t, n, r, i, o, a) {
  if (t === "innerHTML" || t === "textContent") {
    r && a(r, i, o), e[t] = n ?? "";
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    e._value = n;
    const d = s === "OPTION" ? e.getAttribute("value") : e.value, u = n ?? "";
    d !== u && (e.value = u), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean" ? n = wu(n) : n == null && d === "string" ? (n = "", l = !0) : d === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(t);
}
function pc(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function P1(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function R1(e, t, n, r, i = null) {
  const o = e._vei || (e._vei = {}), a = o[t];
  if (r && a)
    a.value = r;
  else {
    const [s, l] = L1(t);
    if (r) {
      const d = o[t] = z1(r, i);
      pc(e, s, d, l);
    } else
      a && (P1(e, s, a, l), o[t] = void 0);
  }
}
const ld = /(?:Once|Passive|Capture)$/;
function L1(e) {
  let t;
  if (ld.test(e)) {
    t = {};
    let r;
    for (; r = e.match(ld); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : kr(e.slice(2)), t];
}
let Aa = 0;
const $1 = /* @__PURE__ */ Promise.resolve(), F1 = () => Aa || ($1.then(() => Aa = 0), Aa = Date.now());
function z1(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    St(
      V1(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = F1(), n;
}
function V1(e, t) {
  if (de(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((r) => (i) => !i._stopped && r && r(i));
  } else
    return t;
}
const dd = /^on[a-z]/, j1 = (e, t, n, r, i = !1, o, a, s, l) => {
  t === "class" ? A1(e, r, i) : t === "style" ? M1(e, n, r) : Bo(t) ? Is(t) || R1(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : U1(e, t, r, i)) ? D1(
    e,
    t,
    r,
    o,
    a,
    s,
    l
  ) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), I1(e, t, r, i));
};
function U1(e, t, n, r) {
  return r ? !!(t === "innerHTML" || t === "textContent" || t in e && dd.test(t) && me(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || dd.test(t) && qe(n) ? !1 : t in e;
}
const an = "transition", Dr = "animation", yn = (e, { slots: t }) => je(Dp, H1(e), t);
yn.displayName = "Transition";
const bc = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
yn.props = /* @__PURE__ */ Qe(
  {},
  qu,
  bc
);
const An = (e, t = []) => {
  de(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ud = (e) => e ? de(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function H1(e) {
  const t = {};
  for (const D in e)
    D in bc || (t[D] = e[D]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: i,
    enterFromClass: o = `${n}-enter-from`,
    enterActiveClass: a = `${n}-enter-active`,
    enterToClass: s = `${n}-enter-to`,
    appearFromClass: l = o,
    appearActiveClass: d = a,
    appearToClass: u = s,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: c = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, p = B1(i), h = p && p[0], x = p && p[1], {
    onBeforeEnter: g,
    onEnter: v,
    onEnterCancelled: w,
    onLeave: k,
    onLeaveCancelled: A,
    onBeforeAppear: F = g,
    onAppear: j = v,
    onAppearCancelled: R = w
  } = t, z = (D, Z, be) => {
    Mn(D, Z ? u : s), Mn(D, Z ? d : a), be && be();
  }, J = (D, Z) => {
    D._isLeaving = !1, Mn(D, f), Mn(D, m), Mn(D, c), Z && Z();
  }, Y = (D) => (Z, be) => {
    const Le = D ? j : v, he = () => z(Z, D, be);
    An(Le, [Z, he]), cd(() => {
      Mn(Z, D ? l : o), sn(Z, D ? u : s), ud(Le) || fd(Z, r, h, he);
    });
  };
  return Qe(t, {
    onBeforeEnter(D) {
      An(g, [D]), sn(D, o), sn(D, a);
    },
    onBeforeAppear(D) {
      An(F, [D]), sn(D, l), sn(D, d);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(D, Z) {
      D._isLeaving = !0;
      const be = () => J(D, Z);
      sn(D, f), Y1(), sn(D, c), cd(() => {
        D._isLeaving && (Mn(D, f), sn(D, m), ud(k) || fd(D, r, x, be));
      }), An(k, [D, be]);
    },
    onEnterCancelled(D) {
      z(D, !1), An(w, [D]);
    },
    onAppearCancelled(D) {
      z(D, !0), An(R, [D]);
    },
    onLeaveCancelled(D) {
      J(D), An(A, [D]);
    }
  });
}
function B1(e) {
  if (e == null)
    return null;
  if ($e(e))
    return [Ma(e.enter), Ma(e.leave)];
  {
    const t = Ma(e);
    return [t, t];
  }
}
function Ma(e) {
  return Am(e);
}
function sn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e._vtc || (e._vtc = /* @__PURE__ */ new Set())).add(t);
}
function Mn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function cd(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let G1 = 0;
function fd(e, t, n, r) {
  const i = e._endId = ++G1, o = () => {
    i === e._endId && r();
  };
  if (n)
    return setTimeout(o, n);
  const { type: a, timeout: s, propCount: l } = W1(e, t);
  if (!a)
    return r();
  const d = a + "end";
  let u = 0;
  const f = () => {
    e.removeEventListener(d, c), o();
  }, c = (m) => {
    m.target === e && ++u >= l && f();
  };
  setTimeout(() => {
    u < l && f();
  }, s + 1), e.addEventListener(d, c);
}
function W1(e, t) {
  const n = window.getComputedStyle(e), r = (p) => (n[p] || "").split(", "), i = r(`${an}Delay`), o = r(`${an}Duration`), a = md(i, o), s = r(`${Dr}Delay`), l = r(`${Dr}Duration`), d = md(s, l);
  let u = null, f = 0, c = 0;
  t === an ? a > 0 && (u = an, f = a, c = o.length) : t === Dr ? d > 0 && (u = Dr, f = d, c = l.length) : (f = Math.max(a, d), u = f > 0 ? a > d ? an : Dr : null, c = u ? u === an ? o.length : l.length : 0);
  const m = u === an && /\b(transform|all)(,|$)/.test(
    r(`${an}Property`).toString()
  );
  return {
    type: u,
    timeout: f,
    propCount: c,
    hasTransform: m
  };
}
function md(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => pd(n) + pd(e[r])));
}
function pd(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Y1() {
  return document.body.offsetHeight;
}
const bd = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return de(t) ? (n) => ao(t, n) : t;
}, q1 = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e._assign = bd(n), pc(e, "change", () => {
      const r = e._modelValue, i = K1(e), o = e.checked, a = e._assign;
      if (de(r)) {
        const s = xu(r, i), l = s !== -1;
        if (o && !l)
          a(r.concat(i));
        else if (!o && l) {
          const d = [...r];
          d.splice(s, 1), a(d);
        }
      } else if (Go(r)) {
        const s = new Set(r);
        o ? s.add(i) : s.delete(i), a(s);
      } else
        a(hc(e, o));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: hd,
  beforeUpdate(e, t, n) {
    e._assign = bd(n), hd(e, t, n);
  }
};
function hd(e, { value: t, oldValue: n }, r) {
  e._modelValue = t, de(t) ? e.checked = xu(t, r.props.value) > -1 : Go(t) ? e.checked = t.has(r.props.value) : t !== n && (e.checked = qo(t, hc(e, !0)));
}
function K1(e) {
  return "_value" in e ? e._value : e.value;
}
function hc(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const X1 = /* @__PURE__ */ Qe({ patchProp: j1 }, C1);
let vd;
function J1() {
  return vd || (vd = i1(X1));
}
const Z1 = (...e) => {
  const t = J1().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const i = Q1(r);
    if (!i)
      return;
    const o = t._component;
    !me(o) && !o.render && !o.template && (o.template = i.innerHTML), i.innerHTML = "";
    const a = n(i, !1, i instanceof SVGElement);
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, t;
};
function Q1(e) {
  return qe(e) ? document.querySelector(e) : e;
}
function Ze(e, t, ...n) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...n) : i;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, Ze), r;
}
var wn = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(wn || {}), bn = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(bn || {});
function Ke({ visible: e = !0, features: t = 0, ourProps: n, theirProps: r, ...i }) {
  var o;
  let a = gc(r, n), s = Object.assign(i, { props: a });
  if (e || t & 2 && a.static)
    return Na(s);
  if (t & 1) {
    let l = (o = a.unmount) == null || o ? 0 : 1;
    return Ze(l, { 0() {
      return null;
    }, 1() {
      return Na({ ...i, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Na(s);
}
function Na({ props: e, attrs: t, slots: n, slot: r, name: i }) {
  var o, a;
  let { as: s, ...l } = ra(e, ["unmount", "static"]), d = (o = n.default) == null ? void 0 : o.call(n, r), u = {};
  if (r) {
    let f = !1, c = [];
    for (let [m, p] of Object.entries(r))
      typeof p == "boolean" && (f = !0), p === !0 && c.push(m);
    f && (u["data-headlessui-state"] = c.join(" "));
  }
  if (s === "template") {
    if (d = vc(d ?? []), Object.keys(l).length > 0 || Object.keys(t).length > 0) {
      let [f, ...c] = d ?? [];
      if (!eb(f) || c.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).map((h) => h.trim()).filter((h, x, g) => g.indexOf(h) === x).sort((h, x) => h.localeCompare(x)).map((h) => `  - ${h}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((h) => `  - ${h}`).join(`
`)].join(`
`));
      let m = gc((a = f.props) != null ? a : {}, l), p = Zt(f, m);
      for (let h in m)
        h.startsWith("on") && (p.props || (p.props = {}), p.props[h] = m[h]);
      return p;
    }
    return Array.isArray(d) && d.length === 1 ? d[0] : d;
  }
  return je(s, Object.assign({}, l, u), { default: () => d });
}
function vc(e) {
  return e.flatMap((t) => t.type === H ? vc(t.children) : [t]);
}
function gc(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, n = {};
  for (let r of e)
    for (let i in r)
      i.startsWith("on") && typeof r[i] == "function" ? (n[i] != null || (n[i] = []), n[i].push(r[i])) : t[i] = r[i];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(n).map((r) => [r, void 0])));
  for (let r in n)
    Object.assign(t, { [r](i, ...o) {
      let a = n[r];
      for (let s of a) {
        if (i instanceof Event && i.defaultPrevented)
          return;
        s(i, ...o);
      }
    } });
  return t;
}
function yc(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function ra(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t)
    r in n && delete n[r];
  return n;
}
function eb(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let tb = 0;
function nb() {
  return ++tb;
}
function _t() {
  return nb();
}
var Ce = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Ce || {});
function rb(e) {
  throw new Error("Unexpected object: " + e);
}
var mt = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(mt || {});
function ib(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0)
    return null;
  let r = t.resolveActiveIndex(), i = r ?? -1, o = (() => {
    switch (e.focus) {
      case 0:
        return n.findIndex((a) => !t.resolveDisabled(a));
      case 1: {
        let a = n.slice().reverse().findIndex((s, l, d) => i !== -1 && d.length - l - 1 >= i ? !1 : !t.resolveDisabled(s));
        return a === -1 ? a : n.length - 1 - a;
      }
      case 2:
        return n.findIndex((a, s) => s <= i ? !1 : !t.resolveDisabled(a));
      case 3: {
        let a = n.slice().reverse().findIndex((s) => !t.resolveDisabled(s));
        return a === -1 ? a : n.length - 1 - a;
      }
      case 4:
        return n.findIndex((a) => t.resolveId(a) === e.id);
      case 5:
        return null;
      default:
        rb(e);
    }
  })();
  return o === -1 ? r : o;
}
function ce(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let _c = Symbol("Context");
var Xe = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Xe || {});
function ob() {
  return Oi() !== null;
}
function Oi() {
  return Ye(_c, null);
}
function Js(e) {
  ut(_c, e);
}
function gd(e, t) {
  if (e)
    return e;
  let n = t ?? "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function wc(e, t) {
  let n = W(gd(e.value.type, e.value.as));
  return Be(() => {
    n.value = gd(e.value.type, e.value.as);
  }), bt(() => {
    var r;
    n.value || ce(t) && ce(t) instanceof HTMLButtonElement && !((r = ce(t)) != null && r.hasAttribute("type")) && (n.value = "button");
  }), n;
}
var ab = Object.defineProperty, sb = (e, t, n) => t in e ? ab(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, yd = (e, t, n) => (sb(e, typeof t != "symbol" ? t + "" : t, n), n);
let lb = class {
  constructor() {
    yd(this, "current", this.detect()), yd(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}, Ti = new lb();
function Ut(e) {
  if (Ti.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = ce(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
function db({ container: e, accept: t, walk: n, enabled: r }) {
  bt(() => {
    let i = e.value;
    if (!i || r !== void 0 && !r.value)
      return;
    let o = Ut(e);
    if (!o)
      return;
    let a = Object.assign((l) => t(l), { acceptNode: t }), s = o.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, a, !1);
    for (; s.nextNode(); )
      n(s.currentNode);
  });
}
let is = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Et = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Et || {}), Ao = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ao || {}), ub = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(ub || {});
function cb(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(is)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Zs = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Zs || {});
function xc(e, t = 0) {
  var n;
  return e === ((n = Ut(e)) == null ? void 0 : n.body) ? !1 : Ze(t, { 0() {
    return e.matches(is);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(is))
        return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var fb = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(fb || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function qn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let mb = ["textarea", "input"].join(",");
function pb(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, mb)) != null ? n : !1;
}
function Qs(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let i = t(n), o = t(r);
    if (i === null || o === null)
      return 0;
    let a = i.compareDocumentPosition(o);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function pr(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: i = [] } = {}) {
  var o;
  let a = (o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? o : document, s = Array.isArray(e) ? n ? Qs(e) : e : cb(e);
  i.length > 0 && s.length > 1 && (s = s.filter((p) => !i.includes(p))), r = r ?? a.activeElement;
  let l = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, s.indexOf(r)) - 1;
    if (t & 4)
      return Math.max(0, s.indexOf(r)) + 1;
    if (t & 8)
      return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, f = 0, c = s.length, m;
  do {
    if (f >= c || f + c <= 0)
      return 0;
    let p = d + f;
    if (t & 16)
      p = (p + c) % c;
    else {
      if (p < 0)
        return 3;
      if (p >= c)
        return 1;
    }
    m = s[p], m == null || m.focus(u), f += l;
  } while (m !== a.activeElement);
  return t & 6 && pb(m) && m.select(), 2;
}
function _d(e, t, n) {
  Ti.isServer || bt((r) => {
    document.addEventListener(e, t, n), r(() => document.removeEventListener(e, t, n));
  });
}
function kc(e, t, n) {
  Ti.isServer || bt((r) => {
    window.addEventListener(e, t, n), r(() => window.removeEventListener(e, t, n));
  });
}
function Ec(e, t, n = I(() => !0)) {
  function r(o, a) {
    if (!n.value || o.defaultPrevented)
      return;
    let s = a(o);
    if (s === null || !s.getRootNode().contains(s))
      return;
    let l = function d(u) {
      return typeof u == "function" ? d(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    }(e);
    for (let d of l) {
      if (d === null)
        continue;
      let u = d instanceof HTMLElement ? d : ce(d);
      if (u != null && u.contains(s) || o.composed && o.composedPath().includes(u))
        return;
    }
    return !xc(s, Zs.Loose) && s.tabIndex !== -1 && o.preventDefault(), t(o, s);
  }
  let i = W(null);
  _d("mousedown", (o) => {
    var a, s;
    n.value && (i.value = ((s = (a = o.composedPath) == null ? void 0 : a.call(o)) == null ? void 0 : s[0]) || o.target);
  }, !0), _d("click", (o) => {
    i.value && (r(o, () => i.value), i.value = null);
  }, !0), kc("blur", (o) => r(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var yr = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(yr || {});
let bi = pe({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    let { features: r, ...i } = e, o = { "aria-hidden": (r & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
    return Ke({ ourProps: o, theirProps: i, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} });
function el(e = {}, t = null, n = []) {
  for (let [r, i] of Object.entries(e))
    Oc(n, Sc(t, r), i);
  return n;
}
function Sc(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Oc(e, t, n) {
  if (Array.isArray(n))
    for (let [r, i] of n.entries())
      Oc(e, Sc(t, r.toString()), i);
  else
    n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : el(n, t, e);
}
function bb(e) {
  var t;
  let n = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (n) {
    for (let r of n.elements)
      if (r.tagName === "INPUT" && r.type === "submit" || r.tagName === "BUTTON" && r.type === "submit" || r.nodeName === "INPUT" && r.type === "image") {
        r.click();
        return;
      }
  }
}
function Tc(e, t, n) {
  let r = W(n == null ? void 0 : n.value), i = I(() => e.value !== void 0);
  return [I(() => i.value ? e.value : r.value), function(o) {
    return i.value || (r.value = o), t == null ? void 0 : t(o);
  }];
}
function wd(e) {
  return [e.screenX, e.screenY];
}
function hb() {
  let e = W([-1, -1]);
  return { wasMoved(t) {
    let n = wd(t);
    return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
  }, update(t) {
    e.value = wd(t);
  } };
}
function vb() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function ia() {
  let e = [], t = { addEventListener(n, r, i, o) {
    return n.addEventListener(r, i, o), t.add(() => n.removeEventListener(r, i, o));
  }, requestAnimationFrame(...n) {
    let r = requestAnimationFrame(...n);
    t.add(() => cancelAnimationFrame(r));
  }, nextFrame(...n) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...n);
    });
  }, setTimeout(...n) {
    let r = setTimeout(...n);
    t.add(() => clearTimeout(r));
  }, style(n, r, i) {
    let o = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: i }), this.add(() => {
      Object.assign(n.style, { [r]: o });
    });
  }, group(n) {
    let r = ia();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0)
        for (let i of e.splice(r, 1))
          i();
    };
  }, dispose() {
    for (let n of e.splice(0))
      n();
  } };
  return t;
}
var Vr = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Vr || {});
function gb() {
  let e = W(0);
  return kc("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Cc(e, t, n, r) {
  Ti.isServer || bt((i) => {
    e = e ?? window, e.addEventListener(t, n, r), i(() => e.removeEventListener(t, n, r));
  });
}
function Ac(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function yb(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
function Mc(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.value) {
    let r = ce(n);
    r instanceof HTMLElement && t.add(r);
  }
  return t;
}
var Nc = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Nc || {});
let Pr = Object.assign(pe({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: W(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: r }) {
  let i = W(null);
  r({ el: i, $el: i });
  let o = I(() => Ut(i)), a = W(!1);
  Be(() => a.value = !0), ot(() => a.value = !1), wb({ ownerDocument: o }, I(() => a.value && !!(e.features & 16)));
  let s = xb({ ownerDocument: o, container: i, initialFocus: I(() => e.initialFocus) }, I(() => a.value && !!(e.features & 2)));
  kb({ ownerDocument: o, container: i, containers: e.containers, previousActiveElement: s }, I(() => a.value && !!(e.features & 8)));
  let l = gb();
  function d(m) {
    let p = ce(i);
    p && ((h) => h())(() => {
      Ze(l.value, { [Vr.Forwards]: () => {
        pr(p, Et.First, { skipElements: [m.relatedTarget] });
      }, [Vr.Backwards]: () => {
        pr(p, Et.Last, { skipElements: [m.relatedTarget] });
      } });
    });
  }
  let u = W(!1);
  function f(m) {
    m.key === "Tab" && (u.value = !0, requestAnimationFrame(() => {
      u.value = !1;
    }));
  }
  function c(m) {
    if (!a.value)
      return;
    let p = Mc(e.containers);
    ce(i) instanceof HTMLElement && p.add(ce(i));
    let h = m.relatedTarget;
    h instanceof HTMLElement && h.dataset.headlessuiFocusGuard !== "true" && (Ic(p, h) || (u.value ? pr(ce(i), Ze(l.value, { [Vr.Forwards]: () => Et.Next, [Vr.Backwards]: () => Et.Previous }) | Et.WrapAround, { relativeTo: m.target }) : m.target instanceof HTMLElement && qn(m.target)));
  }
  return () => {
    let m = {}, p = { ref: i, onKeydown: f, onFocusout: c }, { features: h, initialFocus: x, containers: g, ...v } = e;
    return je(H, [!!(h & 4) && je(bi, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: yr.Focusable }), Ke({ ourProps: p, theirProps: { ...t, ...v }, slot: m, attrs: t, slots: n, name: "FocusTrap" }), !!(h & 4) && je(bi, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: yr.Focusable })]);
  };
} }), { features: Nc }), jn = [];
yb(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && jn[0] !== t.target && (jn.unshift(t.target), jn = jn.filter((n) => n != null && n.isConnected), jn.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function _b(e) {
  let t = W(jn.slice());
  return pt([e], ([n], [r]) => {
    r === !0 && n === !1 ? Ac(() => {
      t.value.splice(0);
    }) : r === !1 && n === !0 && (t.value = jn.slice());
  }, { flush: "post" }), () => {
    var n;
    return (n = t.value.find((r) => r != null && r.isConnected)) != null ? n : null;
  };
}
function wb({ ownerDocument: e }, t) {
  let n = _b(t);
  Be(() => {
    bt(() => {
      var r, i;
      t.value || ((r = e.value) == null ? void 0 : r.activeElement) === ((i = e.value) == null ? void 0 : i.body) && qn(n());
    }, { flush: "post" });
  }), ot(() => {
    t.value && qn(n());
  });
}
function xb({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let i = W(null), o = W(!1);
  return Be(() => o.value = !0), ot(() => o.value = !1), Be(() => {
    pt([t, n, r], (a, s) => {
      if (a.every((d, u) => (s == null ? void 0 : s[u]) === d) || !r.value)
        return;
      let l = ce(t);
      l && Ac(() => {
        var d, u;
        if (!o.value)
          return;
        let f = ce(n), c = (d = e.value) == null ? void 0 : d.activeElement;
        if (f) {
          if (f === c) {
            i.value = c;
            return;
          }
        } else if (l.contains(c)) {
          i.value = c;
          return;
        }
        f ? qn(f) : pr(l, Et.First | Et.NoScroll) === Ao.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (u = e.value) == null ? void 0 : u.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function kb({ ownerDocument: e, container: t, containers: n, previousActiveElement: r }, i) {
  var o;
  Cc((o = e.value) == null ? void 0 : o.defaultView, "focus", (a) => {
    if (!i.value)
      return;
    let s = Mc(n);
    ce(t) instanceof HTMLElement && s.add(ce(t));
    let l = r.value;
    if (!l)
      return;
    let d = a.target;
    d && d instanceof HTMLElement ? Ic(s, d) ? (r.value = d, qn(d)) : (a.preventDefault(), a.stopPropagation(), qn(l)) : qn(r.value);
  }, !0);
}
function Ic(e, t) {
  for (let n of e)
    if (n.contains(t))
      return !0;
  return !1;
}
let Ia = /* @__PURE__ */ new Map(), Rr = /* @__PURE__ */ new Map();
function xd(e, t = W(!0)) {
  bt((n) => {
    var r;
    if (!t.value)
      return;
    let i = ce(e);
    if (!i)
      return;
    n(function() {
      var a;
      if (!i)
        return;
      let s = (a = Rr.get(i)) != null ? a : 1;
      if (s === 1 ? Rr.delete(i) : Rr.set(i, s - 1), s !== 1)
        return;
      let l = Ia.get(i);
      l && (l["aria-hidden"] === null ? i.removeAttribute("aria-hidden") : i.setAttribute("aria-hidden", l["aria-hidden"]), i.inert = l.inert, Ia.delete(i));
    });
    let o = (r = Rr.get(i)) != null ? r : 0;
    Rr.set(i, o + 1), o === 0 && (Ia.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), i.setAttribute("aria-hidden", "true"), i.inert = !0);
  });
}
let Dc = Symbol("ForcePortalRootContext");
function Eb() {
  return Ye(Dc, !1);
}
let kd = pe({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n }) {
  return ut(Dc, e.force), () => {
    let { force: r, ...i } = e;
    return Ke({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: n, name: "ForcePortalRoot" });
  };
} });
function Sb(e) {
  let t = Ut(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let n = t.getElementById("headlessui-portal-root");
  if (n)
    return n;
  let r = t.createElement("div");
  return r.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(r);
}
let Ob = pe({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n }) {
  let r = W(null), i = I(() => Ut(r)), o = Eb(), a = Ye(Pc, null), s = W(o === !0 || a == null ? Sb(r.value) : a.resolveTarget());
  bt(() => {
    o || a != null && (s.value = a.resolveTarget());
  });
  let l = Ye(os, null);
  return Be(() => {
    let d = ce(r);
    d && l && ot(l.register(d));
  }), ot(() => {
    var d, u;
    let f = (d = i.value) == null ? void 0 : d.getElementById("headlessui-portal-root");
    f && s.value === f && s.value.children.length <= 0 && ((u = s.value.parentElement) == null || u.removeChild(s.value));
  }), () => {
    if (s.value === null)
      return null;
    let d = { ref: r, "data-headlessui-portal": "" };
    return je(u1, { to: s.value }, Ke({ ourProps: d, theirProps: e, slot: {}, attrs: n, slots: t, name: "Portal" }));
  };
} }), os = Symbol("PortalParentContext");
function Tb() {
  let e = Ye(os, null), t = W([]);
  function n(o) {
    return t.value.push(o), e && e.register(o), () => r(o);
  }
  function r(o) {
    let a = t.value.indexOf(o);
    a !== -1 && t.value.splice(a, 1), e && e.unregister(o);
  }
  let i = { register: n, unregister: r, portals: t };
  return [t, pe({ name: "PortalWrapper", setup(o, { slots: a }) {
    return ut(os, i), () => {
      var s;
      return (s = a.default) == null ? void 0 : s.call(a);
    };
  } })];
}
let Pc = Symbol("PortalGroupContext"), Cb = pe({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: n }) {
  let r = Or({ resolveTarget() {
    return e.target;
  } });
  return ut(Pc, r), () => {
    let { target: i, ...o } = e;
    return Ke({ theirProps: o, ourProps: {}, slot: {}, attrs: t, slots: n, name: "PortalGroup" });
  };
} }), Rc = Symbol("StackContext");
var as = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(as || {});
function Ab() {
  return Ye(Rc, () => {
  });
}
function Mb({ type: e, enabled: t, element: n, onUpdate: r }) {
  let i = Ab();
  function o(...a) {
    r == null || r(...a), i(...a);
  }
  Be(() => {
    pt(t, (a, s) => {
      a ? o(0, e, n) : s === !0 && o(1, e, n);
    }, { immediate: !0, flush: "sync" });
  }), ot(() => {
    t.value && o(1, e, n);
  }), ut(Rc, o);
}
let Lc = Symbol("DescriptionContext");
function Nb() {
  let e = Ye(Lc, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function tl({ slot: e = W({}), name: t = "Description", props: n = {} } = {}) {
  let r = W([]);
  function i(o) {
    return r.value.push(o), () => {
      let a = r.value.indexOf(o);
      a !== -1 && r.value.splice(a, 1);
    };
  }
  return ut(Lc, { register: i, slot: e, name: t, props: n }), I(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
let $c = pe({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${_t()}` } }, setup(e, { attrs: t, slots: n }) {
  let r = Nb();
  return Be(() => ot(r.register(e.id))), () => {
    let { name: i = "Description", slot: o = W({}), props: a = {} } = r, { id: s, ...l } = e, d = { ...Object.entries(a).reduce((u, [f, c]) => Object.assign(u, { [f]: di(c) }), {}), id: s };
    return Ke({ ourProps: d, theirProps: l, slot: o.value, attrs: t, slots: n, name: i });
  };
} });
function Ib(e) {
  let t = Ya(e.getSnapshot());
  return ot(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function Db(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(i) {
    return r.add(i), () => r.delete(i);
  }, dispatch(i, ...o) {
    let a = t[i].call(n, ...o);
    a && (n = a, r.forEach((s) => s()));
  } };
}
function Pb() {
  let e;
  return { before({ doc: t }) {
    var n;
    let r = t.documentElement;
    e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth;
  }, after({ doc: t, d: n }) {
    let r = t.documentElement, i = r.clientWidth - r.offsetWidth, o = e - i;
    n.style(r, "paddingRight", `${o}px`);
  } };
}
function Rb() {
  if (!vb())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: n, meta: r }) {
    function i(a) {
      return r.containers.flatMap((s) => s()).some((s) => s.contains(a));
    }
    n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let o = null;
    n.addEventListener(t, "click", (a) => {
      if (a.target instanceof HTMLElement)
        try {
          let s = a.target.closest("a");
          if (!s)
            return;
          let { hash: l } = new URL(s.href), d = t.querySelector(l);
          d && !i(d) && (o = d);
        } catch {
        }
    }, !0), n.addEventListener(t, "touchmove", (a) => {
      a.target instanceof HTMLElement && !i(a.target) && a.preventDefault();
    }, { passive: !1 }), n.add(() => {
      window.scrollTo(0, window.pageYOffset + e), o && o.isConnected && (o.scrollIntoView({ block: "nearest" }), o = null);
    });
  } };
}
function Lb() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function $b(e) {
  let t = {};
  for (let n of e)
    Object.assign(t, n(t));
  return t;
}
let Hn = Db(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: ia(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: $b(n) }, i = [Rb(), Pb(), Lb()];
  i.forEach(({ before: o }) => o == null ? void 0 : o(r)), i.forEach(({ after: o }) => o == null ? void 0 : o(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Hn.subscribe(() => {
  let e = Hn.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e)
    t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", i = n.count !== 0;
    (i && !r || !i && r) && Hn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && Hn.dispatch("TEARDOWN", n);
  }
});
function Fb(e, t, n) {
  let r = Ib(Hn), i = I(() => {
    let o = e.value ? r.value.get(e.value) : void 0;
    return o ? o.count > 0 : !1;
  });
  return pt([e, t], ([o, a], [s], l) => {
    if (!o || !a)
      return;
    Hn.dispatch("PUSH", o, n);
    let d = !1;
    l(() => {
      d || (Hn.dispatch("POP", s ?? o, n), d = !0);
    });
  }, { immediate: !0 }), i;
}
function zb({ defaultContainers: e = [], portals: t } = {}) {
  let n = W(null), r = Ut(n);
  function i() {
    var o;
    let a = [];
    for (let s of e)
      s !== null && (s instanceof HTMLElement ? a.push(s) : "value" in s && s.value instanceof HTMLElement && a.push(s.value));
    if (t != null && t.value)
      for (let s of t.value)
        a.push(s);
    for (let s of (o = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? o : [])
      s !== document.body && s !== document.head && s instanceof HTMLElement && s.id !== "headlessui-portal-root" && (s.contains(ce(n)) || a.some((l) => s.contains(l)) || a.push(s));
    return a;
  }
  return { resolveContainers: i, contains(o) {
    return i().some((a) => a.contains(o));
  }, mainTreeNodeRef: n, MainTreeNode() {
    return je(bi, { features: yr.Hidden, ref: n });
  } };
}
var Vb = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Vb || {});
let ss = Symbol("DialogContext");
function oa(e) {
  let t = Ye(ss, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, oa), n;
  }
  return t;
}
let Ui = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", jb = pe({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ui }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${_t()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: i }) {
  var o;
  let a = W(!1);
  Be(() => {
    a.value = !0;
  });
  let s = W(0), l = Oi(), d = I(() => e.open === Ui && l !== null ? (l.value & Xe.Open) === Xe.Open : e.open), u = W(null), f = I(() => Ut(u));
  if (i({ el: u, $el: u }), !(e.open !== Ui || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof d.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${d.value === Ui ? void 0 : e.open}`);
  let c = I(() => a.value && d.value ? 0 : 1), m = I(() => c.value === 0), p = I(() => s.value > 1), h = Ye(ss, null) !== null, [x, g] = Tb(), { resolveContainers: v, mainTreeNodeRef: w, MainTreeNode: k } = zb({ portals: x, defaultContainers: [I(() => {
    var L;
    return (L = Z.panelRef.value) != null ? L : u.value;
  })] }), A = I(() => p.value ? "parent" : "leaf"), F = I(() => l !== null ? (l.value & Xe.Closing) === Xe.Closing : !1), j = I(() => h || F.value ? !1 : m.value), R = I(() => {
    var L, X, ge;
    return (ge = Array.from((X = (L = f.value) == null ? void 0 : L.querySelectorAll("body > *")) != null ? X : []).find((De) => De.id === "headlessui-portal-root" ? !1 : De.contains(ce(w)) && De instanceof HTMLElement)) != null ? ge : null;
  });
  xd(R, j);
  let z = I(() => p.value ? !0 : m.value), J = I(() => {
    var L, X, ge;
    return (ge = Array.from((X = (L = f.value) == null ? void 0 : L.querySelectorAll("[data-headlessui-portal]")) != null ? X : []).find((De) => De.contains(ce(w)) && De instanceof HTMLElement)) != null ? ge : null;
  });
  xd(J, z), Mb({ type: "Dialog", enabled: I(() => c.value === 0), element: u, onUpdate: (L, X) => {
    if (X === "Dialog")
      return Ze(L, { [as.Add]: () => s.value += 1, [as.Remove]: () => s.value -= 1 });
  } });
  let Y = tl({ name: "DialogDescription", slot: I(() => ({ open: d.value })) }), D = W(null), Z = { titleId: D, panelRef: W(null), dialogState: c, setTitleId(L) {
    D.value !== L && (D.value = L);
  }, close() {
    t("close", !1);
  } };
  ut(ss, Z);
  let be = I(() => !(!m.value || p.value));
  Ec(v, (L, X) => {
    Z.close(), Kt(() => X == null ? void 0 : X.focus());
  }, be);
  let Le = I(() => !(p.value || c.value !== 0));
  Cc((o = f.value) == null ? void 0 : o.defaultView, "keydown", (L) => {
    Le.value && (L.defaultPrevented || L.key === Ce.Escape && (L.preventDefault(), L.stopPropagation(), Z.close()));
  });
  let he = I(() => !(F.value || c.value !== 0 || h));
  return Fb(f, he, (L) => {
    var X;
    return { containers: [...(X = L.containers) != null ? X : [], v] };
  }), bt((L) => {
    if (c.value !== 0)
      return;
    let X = ce(u);
    if (!X)
      return;
    let ge = new ResizeObserver((De) => {
      for (let Ee of De) {
        let Te = Ee.target.getBoundingClientRect();
        Te.x === 0 && Te.y === 0 && Te.width === 0 && Te.height === 0 && Z.close();
      }
    });
    ge.observe(X), L(() => ge.disconnect());
  }), () => {
    let { id: L, open: X, initialFocus: ge, ...De } = e, Ee = { ...n, ref: u, id: L, role: "dialog", "aria-modal": c.value === 0 ? !0 : void 0, "aria-labelledby": D.value, "aria-describedby": Y.value }, Te = { open: c.value === 0 };
    return je(kd, { force: !0 }, () => [je(Ob, () => je(Cb, { target: u.value }, () => je(kd, { force: !1 }, () => je(Pr, { initialFocus: ge, containers: v, features: m.value ? Ze(A.value, { parent: Pr.features.RestoreFocus, leaf: Pr.features.All & ~Pr.features.FocusLock }) : Pr.features.None }, () => je(g, {}, () => Ke({ ourProps: Ee, theirProps: { ...De, ...n }, slot: Te, attrs: n, slots: r, visible: c.value === 0, features: wn.RenderStrategy | wn.Static, name: "Dialog" })))))), je(k)]);
  };
} }), Ub = pe({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${_t()}` } }, setup(e, { attrs: t, slots: n }) {
  let r = oa("DialogOverlay");
  function i(o) {
    o.target === o.currentTarget && (o.preventDefault(), o.stopPropagation(), r.close());
  }
  return () => {
    let { id: o, ...a } = e;
    return Ke({ ourProps: { id: o, "aria-hidden": !0, onClick: i }, theirProps: a, slot: { open: r.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogOverlay" });
  };
} }), Hb = pe({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${_t()}` } }, setup(e, { attrs: t, slots: n, expose: r }) {
  let i = oa("DialogPanel");
  r({ el: i.panelRef, $el: i.panelRef });
  function o(a) {
    a.stopPropagation();
  }
  return () => {
    let { id: a, ...s } = e, l = { id: a, ref: i.panelRef, onClick: o };
    return Ke({ ourProps: l, theirProps: s, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogPanel" });
  };
} }), Tr = pe({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${_t()}` } }, setup(e, { attrs: t, slots: n }) {
  let r = oa("DialogTitle");
  return Be(() => {
    r.setTitleId(e.id), ot(() => r.setTitleId(null));
  }), () => {
    let { id: i, ...o } = e;
    return Ke({ ourProps: { id: i }, theirProps: o, slot: { open: r.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogTitle" });
  };
} }), Fc = $c;
var Bb = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Bb || {});
let zc = Symbol("DisclosureContext");
function nl(e) {
  let t = Ye(zc, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, nl), n;
  }
  return t;
}
let Vc = Symbol("DisclosurePanelContext");
function Gb() {
  return Ye(Vc, null);
}
let Wb = pe({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: n }) {
  let r = W(e.defaultOpen ? 0 : 1), i = W(null), o = W(null), a = { buttonId: W(null), panelId: W(null), disclosureState: r, panel: i, button: o, toggleDisclosure() {
    r.value = Ze(r.value, { 0: 1, 1: 0 });
  }, closeDisclosure() {
    r.value !== 1 && (r.value = 1);
  }, close(s) {
    a.closeDisclosure();
    let l = (() => s ? s instanceof HTMLElement ? s : s.value instanceof HTMLElement ? ce(s) : ce(a.button) : ce(a.button))();
    l == null || l.focus();
  } };
  return ut(zc, a), Js(I(() => Ze(r.value, { 0: Xe.Open, 1: Xe.Closed }))), () => {
    let { defaultOpen: s, ...l } = e, d = { open: r.value === 0, close: a.close };
    return Ke({ theirProps: l, ourProps: {}, slot: d, slots: t, attrs: n, name: "Disclosure" });
  };
} }), Yb = pe({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-disclosure-button-${_t()}` } }, setup(e, { attrs: t, slots: n, expose: r }) {
  let i = nl("DisclosureButton");
  Be(() => {
    i.buttonId.value = e.id;
  }), ot(() => {
    i.buttonId.value = null;
  });
  let o = Gb(), a = I(() => o === null ? !1 : o.value === i.panelId.value), s = W(null);
  r({ el: s, $el: s }), a.value || bt(() => {
    i.button.value = s.value;
  });
  let l = wc(I(() => ({ as: e.as, type: t.type })), s);
  function d() {
    var c;
    e.disabled || (a.value ? (i.toggleDisclosure(), (c = ce(i.button)) == null || c.focus()) : i.toggleDisclosure());
  }
  function u(c) {
    var m;
    if (!e.disabled)
      if (a.value)
        switch (c.key) {
          case Ce.Space:
          case Ce.Enter:
            c.preventDefault(), c.stopPropagation(), i.toggleDisclosure(), (m = ce(i.button)) == null || m.focus();
            break;
        }
      else
        switch (c.key) {
          case Ce.Space:
          case Ce.Enter:
            c.preventDefault(), c.stopPropagation(), i.toggleDisclosure();
            break;
        }
  }
  function f(c) {
    switch (c.key) {
      case Ce.Space:
        c.preventDefault();
        break;
    }
  }
  return () => {
    let c = { open: i.disclosureState.value === 0 }, { id: m, ...p } = e, h = a.value ? { ref: s, type: l.value, onClick: d, onKeydown: u } : { id: m, ref: s, type: l.value, "aria-expanded": e.disabled ? void 0 : i.disclosureState.value === 0, "aria-controls": ce(i.panel) ? i.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: d, onKeydown: u, onKeyup: f };
    return Ke({ ourProps: h, theirProps: p, slot: c, attrs: t, slots: n, name: "DisclosureButton" });
  };
} }), qb = pe({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-disclosure-panel-${_t()}` } }, setup(e, { attrs: t, slots: n, expose: r }) {
  let i = nl("DisclosurePanel");
  Be(() => {
    i.panelId.value = e.id;
  }), ot(() => {
    i.panelId.value = null;
  }), r({ el: i.panel, $el: i.panel }), ut(Vc, i.panelId);
  let o = Oi(), a = I(() => o !== null ? (o.value & Xe.Open) === Xe.Open : i.disclosureState.value === 0);
  return () => {
    let s = { open: i.disclosureState.value === 0, close: i.close }, { id: l, ...d } = e, u = { id: l, ref: i.panel };
    return Ke({ ourProps: u, theirProps: d, slot: s, attrs: t, slots: n, features: wn.RenderStrategy | wn.Static, visible: a.value, name: "DisclosurePanel" });
  };
} }), Ed = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Sd(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : "", i = e.cloneNode(!0);
  if (!(i instanceof HTMLElement))
    return r;
  let o = !1;
  for (let s of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    s.remove(), o = !0;
  let a = o ? (n = i.innerText) != null ? n : "" : r;
  return Ed.test(a) && (a = a.replace(Ed, "")), a;
}
function Kb(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string")
    return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let r = n.split(" ").map((i) => {
      let o = document.getElementById(i);
      if (o) {
        let a = o.getAttribute("aria-label");
        return typeof a == "string" ? a.trim() : Sd(o).trim();
      }
      return null;
    }).filter(Boolean);
    if (r.length > 0)
      return r.join(", ");
  }
  return Sd(e).trim();
}
function Xb(e) {
  let t = W(""), n = W("");
  return () => {
    let r = ce(e);
    if (!r)
      return "";
    let i = r.innerText;
    if (t.value === i)
      return n.value;
    let o = Kb(r).trim().toLowerCase();
    return t.value = i, n.value = o, o;
  };
}
function Jb(e, t) {
  return e === t;
}
var Zb = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Zb || {}), Qb = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Qb || {}), e0 = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(e0 || {});
function t0(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let jc = Symbol("ListboxContext");
function aa(e) {
  let t = Ye(jc, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, aa), n;
  }
  return t;
}
let Uc = pe({ name: "Listbox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Jb }, horizontal: { type: [Boolean], default: !1 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: n, emit: r }) {
  let i = W(1), o = W(null), a = W(null), s = W(null), l = W([]), d = W(""), u = W(null), f = W(1);
  function c(v = (w) => w) {
    let w = u.value !== null ? l.value[u.value] : null, k = Qs(v(l.value.slice()), (F) => ce(F.dataRef.domRef)), A = w ? k.indexOf(w) : null;
    return A === -1 && (A = null), { options: k, activeOptionIndex: A };
  }
  let m = I(() => e.multiple ? 1 : 0), [p, h] = Tc(I(() => e.modelValue === void 0 ? Ze(m.value, { 1: [], 0: void 0 }) : e.modelValue), (v) => r("update:modelValue", v), I(() => e.defaultValue)), x = { listboxState: i, value: p, mode: m, compare(v, w) {
    if (typeof e.by == "string") {
      let k = e.by;
      return (v == null ? void 0 : v[k]) === (w == null ? void 0 : w[k]);
    }
    return e.by(v, w);
  }, orientation: I(() => e.horizontal ? "horizontal" : "vertical"), labelRef: o, buttonRef: a, optionsRef: s, disabled: I(() => e.disabled), options: l, searchQuery: d, activeOptionIndex: u, activationTrigger: f, closeListbox() {
    e.disabled || i.value !== 1 && (i.value = 1, u.value = null);
  }, openListbox() {
    e.disabled || i.value !== 0 && (i.value = 0);
  }, goToOption(v, w, k) {
    if (e.disabled || i.value === 1)
      return;
    let A = c(), F = ib(v === mt.Specific ? { focus: mt.Specific, id: w } : { focus: v }, { resolveItems: () => A.options, resolveActiveIndex: () => A.activeOptionIndex, resolveId: (j) => j.id, resolveDisabled: (j) => j.dataRef.disabled });
    d.value = "", u.value = F, f.value = k ?? 1, l.value = A.options;
  }, search(v) {
    if (e.disabled || i.value === 1)
      return;
    let w = d.value !== "" ? 0 : 1;
    d.value += v.toLowerCase();
    let k = (u.value !== null ? l.value.slice(u.value + w).concat(l.value.slice(0, u.value + w)) : l.value).find((F) => F.dataRef.textValue.startsWith(d.value) && !F.dataRef.disabled), A = k ? l.value.indexOf(k) : -1;
    A === -1 || A === u.value || (u.value = A, f.value = 1);
  }, clearSearch() {
    e.disabled || i.value !== 1 && d.value !== "" && (d.value = "");
  }, registerOption(v, w) {
    let k = c((A) => [...A, { id: v, dataRef: w }]);
    l.value = k.options, u.value = k.activeOptionIndex;
  }, unregisterOption(v) {
    let w = c((k) => {
      let A = k.findIndex((F) => F.id === v);
      return A !== -1 && k.splice(A, 1), k;
    });
    l.value = w.options, u.value = w.activeOptionIndex, f.value = 1;
  }, select(v) {
    e.disabled || h(Ze(m.value, { 0: () => v, 1: () => {
      let w = ue(x.value.value).slice(), k = ue(v), A = w.findIndex((F) => x.compare(k, ue(F)));
      return A === -1 ? w.push(k) : w.splice(A, 1), w;
    } }));
  } };
  Ec([a, s], (v, w) => {
    var k;
    x.closeListbox(), xc(w, Zs.Loose) || (v.preventDefault(), (k = ce(a)) == null || k.focus());
  }, I(() => i.value === 0)), ut(jc, x), Js(I(() => Ze(i.value, { 0: Xe.Open, 1: Xe.Closed })));
  let g = I(() => {
    var v;
    return (v = ce(a)) == null ? void 0 : v.closest("form");
  });
  return Be(() => {
    pt([g], () => {
      if (!g.value || e.defaultValue === void 0)
        return;
      function v() {
        x.select(e.defaultValue);
      }
      return g.value.addEventListener("reset", v), () => {
        var w;
        (w = g.value) == null || w.removeEventListener("reset", v);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: v, modelValue: w, disabled: k, form: A, ...F } = e, j = { open: i.value === 0, disabled: k, value: p.value };
    return je(H, [...v != null && p.value != null ? el({ [v]: p.value }).map(([R, z]) => je(bi, yc({ features: yr.Hidden, key: R, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: A, name: R, value: z }))) : [], Ke({ ourProps: {}, theirProps: { ...n, ...ra(F, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: j, slots: t, attrs: n, name: "Listbox" })]);
  };
} }), Hc = pe({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${_t()}` } }, setup(e, { attrs: t, slots: n, expose: r }) {
  let i = aa("ListboxButton");
  r({ el: i.buttonRef, $el: i.buttonRef });
  function o(d) {
    switch (d.key) {
      case Ce.Space:
      case Ce.Enter:
      case Ce.ArrowDown:
        d.preventDefault(), i.openListbox(), Kt(() => {
          var u;
          (u = ce(i.optionsRef)) == null || u.focus({ preventScroll: !0 }), i.value.value || i.goToOption(mt.First);
        });
        break;
      case Ce.ArrowUp:
        d.preventDefault(), i.openListbox(), Kt(() => {
          var u;
          (u = ce(i.optionsRef)) == null || u.focus({ preventScroll: !0 }), i.value.value || i.goToOption(mt.Last);
        });
        break;
    }
  }
  function a(d) {
    switch (d.key) {
      case Ce.Space:
        d.preventDefault();
        break;
    }
  }
  function s(d) {
    i.disabled.value || (i.listboxState.value === 0 ? (i.closeListbox(), Kt(() => {
      var u;
      return (u = ce(i.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })) : (d.preventDefault(), i.openListbox(), t0(() => {
      var u;
      return (u = ce(i.optionsRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })));
  }
  let l = wc(I(() => ({ as: e.as, type: t.type })), i.buttonRef);
  return () => {
    var d, u;
    let f = { open: i.listboxState.value === 0, disabled: i.disabled.value, value: i.value.value }, { id: c, ...m } = e, p = { ref: i.buttonRef, id: c, type: l.value, "aria-haspopup": "listbox", "aria-controls": (d = ce(i.optionsRef)) == null ? void 0 : d.id, "aria-expanded": i.disabled.value ? void 0 : i.listboxState.value === 0, "aria-labelledby": i.labelRef.value ? [(u = ce(i.labelRef)) == null ? void 0 : u.id, c].join(" ") : void 0, disabled: i.disabled.value === !0 ? !0 : void 0, onKeydown: o, onKeyup: a, onClick: s };
    return Ke({ ourProps: p, theirProps: m, slot: f, attrs: t, slots: n, name: "ListboxButton" });
  };
} }), Bc = pe({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-listbox-options-${_t()}` } }, setup(e, { attrs: t, slots: n, expose: r }) {
  let i = aa("ListboxOptions"), o = W(null);
  r({ el: i.optionsRef, $el: i.optionsRef });
  function a(d) {
    switch (o.value && clearTimeout(o.value), d.key) {
      case Ce.Space:
        if (i.searchQuery.value !== "")
          return d.preventDefault(), d.stopPropagation(), i.search(d.key);
      case Ce.Enter:
        if (d.preventDefault(), d.stopPropagation(), i.activeOptionIndex.value !== null) {
          let u = i.options.value[i.activeOptionIndex.value];
          i.select(u.dataRef.value);
        }
        i.mode.value === 0 && (i.closeListbox(), Kt(() => {
          var u;
          return (u = ce(i.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
        }));
        break;
      case Ze(i.orientation.value, { vertical: Ce.ArrowDown, horizontal: Ce.ArrowRight }):
        return d.preventDefault(), d.stopPropagation(), i.goToOption(mt.Next);
      case Ze(i.orientation.value, { vertical: Ce.ArrowUp, horizontal: Ce.ArrowLeft }):
        return d.preventDefault(), d.stopPropagation(), i.goToOption(mt.Previous);
      case Ce.Home:
      case Ce.PageUp:
        return d.preventDefault(), d.stopPropagation(), i.goToOption(mt.First);
      case Ce.End:
      case Ce.PageDown:
        return d.preventDefault(), d.stopPropagation(), i.goToOption(mt.Last);
      case Ce.Escape:
        d.preventDefault(), d.stopPropagation(), i.closeListbox(), Kt(() => {
          var u;
          return (u = ce(i.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
        });
        break;
      case Ce.Tab:
        d.preventDefault(), d.stopPropagation();
        break;
      default:
        d.key.length === 1 && (i.search(d.key), o.value = setTimeout(() => i.clearSearch(), 350));
        break;
    }
  }
  let s = Oi(), l = I(() => s !== null ? (s.value & Xe.Open) === Xe.Open : i.listboxState.value === 0);
  return () => {
    var d, u, f, c;
    let m = { open: i.listboxState.value === 0 }, { id: p, ...h } = e, x = { "aria-activedescendant": i.activeOptionIndex.value === null || (d = i.options.value[i.activeOptionIndex.value]) == null ? void 0 : d.id, "aria-multiselectable": i.mode.value === 1 ? !0 : void 0, "aria-labelledby": (c = (u = ce(i.labelRef)) == null ? void 0 : u.id) != null ? c : (f = ce(i.buttonRef)) == null ? void 0 : f.id, "aria-orientation": i.orientation.value, id: p, onKeydown: a, role: "listbox", tabIndex: 0, ref: i.optionsRef };
    return Ke({ ourProps: x, theirProps: h, slot: m, attrs: t, slots: n, features: wn.RenderStrategy | wn.Static, visible: l.value, name: "ListboxOptions" });
  };
} }), Gc = pe({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-listbox.option-${_t()}` } }, setup(e, { slots: t, attrs: n, expose: r }) {
  let i = aa("ListboxOption"), o = W(null);
  r({ el: o, $el: o });
  let a = I(() => i.activeOptionIndex.value !== null ? i.options.value[i.activeOptionIndex.value].id === e.id : !1), s = I(() => Ze(i.mode.value, { 0: () => i.compare(ue(i.value.value), ue(e.value)), 1: () => ue(i.value.value).some((g) => i.compare(ue(g), ue(e.value))) })), l = I(() => Ze(i.mode.value, { 1: () => {
    var g;
    let v = ue(i.value.value);
    return ((g = i.options.value.find((w) => v.some((k) => i.compare(ue(k), ue(w.dataRef.value))))) == null ? void 0 : g.id) === e.id;
  }, 0: () => s.value })), d = Xb(o), u = I(() => ({ disabled: e.disabled, value: e.value, get textValue() {
    return d();
  }, domRef: o }));
  Be(() => i.registerOption(e.id, u)), ot(() => i.unregisterOption(e.id)), Be(() => {
    pt([i.listboxState, s], () => {
      i.listboxState.value === 0 && s.value && Ze(i.mode.value, { 1: () => {
        l.value && i.goToOption(mt.Specific, e.id);
      }, 0: () => {
        i.goToOption(mt.Specific, e.id);
      } });
    }, { immediate: !0 });
  }), bt(() => {
    i.listboxState.value === 0 && a.value && i.activationTrigger.value !== 0 && Kt(() => {
      var g, v;
      return (v = (g = ce(o)) == null ? void 0 : g.scrollIntoView) == null ? void 0 : v.call(g, { block: "nearest" });
    });
  });
  function f(g) {
    if (e.disabled)
      return g.preventDefault();
    i.select(e.value), i.mode.value === 0 && (i.closeListbox(), Kt(() => {
      var v;
      return (v = ce(i.buttonRef)) == null ? void 0 : v.focus({ preventScroll: !0 });
    }));
  }
  function c() {
    if (e.disabled)
      return i.goToOption(mt.Nothing);
    i.goToOption(mt.Specific, e.id);
  }
  let m = hb();
  function p(g) {
    m.update(g);
  }
  function h(g) {
    m.wasMoved(g) && (e.disabled || a.value || i.goToOption(mt.Specific, e.id, 0));
  }
  function x(g) {
    m.wasMoved(g) && (e.disabled || a.value && i.goToOption(mt.Nothing));
  }
  return () => {
    let { disabled: g } = e, v = { active: a.value, selected: s.value, disabled: g }, { id: w, value: k, disabled: A, ...F } = e, j = { id: w, ref: o, role: "option", tabIndex: g === !0 ? void 0 : -1, "aria-disabled": g === !0 ? !0 : void 0, "aria-selected": s.value, disabled: void 0, onClick: f, onFocus: c, onPointerenter: p, onMouseenter: p, onPointermove: h, onMousemove: h, onPointerleave: x, onMouseleave: x };
    return Ke({ ourProps: j, theirProps: F, slot: v, attrs: n, slots: t, name: "ListboxOption" });
  };
} }), Wc = Symbol("LabelContext");
function Yc() {
  let e = Ye(Wc, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Yc), t;
  }
  return e;
}
function qc({ slot: e = {}, name: t = "Label", props: n = {} } = {}) {
  let r = W([]);
  function i(o) {
    return r.value.push(o), () => {
      let a = r.value.indexOf(o);
      a !== -1 && r.value.splice(a, 1);
    };
  }
  return ut(Wc, { register: i, slot: e, name: t, props: n }), I(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
let n0 = pe({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${_t()}` } }, setup(e, { slots: t, attrs: n }) {
  let r = Yc();
  return Be(() => ot(r.register(e.id))), () => {
    let { name: i = "Label", slot: o = {}, props: a = {} } = r, { id: s, passive: l, ...d } = e, u = { ...Object.entries(a).reduce((f, [c, m]) => Object.assign(f, { [c]: di(m) }), {}), id: s };
    return l && (delete u.onClick, delete u.htmlFor, delete d.onClick), Ke({ ourProps: u, theirProps: d, slot: o, attrs: n, slots: t, name: i });
  };
} });
function r0(e, t) {
  return e === t;
}
let Kc = Symbol("RadioGroupContext");
function Xc(e) {
  let t = Ye(Kc, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Xc), n;
  }
  return t;
}
let Jc = pe({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => r0 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${_t()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: n, slots: r, expose: i }) {
  let o = W(null), a = W([]), s = qc({ name: "RadioGroupLabel" }), l = tl({ name: "RadioGroupDescription" });
  i({ el: o, $el: o });
  let [d, u] = Tc(I(() => e.modelValue), (p) => t("update:modelValue", p), I(() => e.defaultValue)), f = { options: a, value: d, disabled: I(() => e.disabled), firstOption: I(() => a.value.find((p) => !p.propsRef.disabled)), containsCheckedOption: I(() => a.value.some((p) => f.compare(ue(p.propsRef.value), ue(e.modelValue)))), compare(p, h) {
    if (typeof e.by == "string") {
      let x = e.by;
      return (p == null ? void 0 : p[x]) === (h == null ? void 0 : h[x]);
    }
    return e.by(p, h);
  }, change(p) {
    var h;
    if (e.disabled || f.compare(ue(d.value), ue(p)))
      return !1;
    let x = (h = a.value.find((g) => f.compare(ue(g.propsRef.value), ue(p)))) == null ? void 0 : h.propsRef;
    return x != null && x.disabled ? !1 : (u(p), !0);
  }, registerOption(p) {
    a.value.push(p), a.value = Qs(a.value, (h) => h.element);
  }, unregisterOption(p) {
    let h = a.value.findIndex((x) => x.id === p);
    h !== -1 && a.value.splice(h, 1);
  } };
  ut(Kc, f), db({ container: I(() => ce(o)), accept(p) {
    return p.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : p.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(p) {
    p.setAttribute("role", "none");
  } });
  function c(p) {
    if (!o.value || !o.value.contains(p.target))
      return;
    let h = a.value.filter((x) => x.propsRef.disabled === !1).map((x) => x.element);
    switch (p.key) {
      case Ce.Enter:
        bb(p.currentTarget);
        break;
      case Ce.ArrowLeft:
      case Ce.ArrowUp:
        if (p.preventDefault(), p.stopPropagation(), pr(h, Et.Previous | Et.WrapAround) === Ao.Success) {
          let x = a.value.find((g) => {
            var v;
            return g.element === ((v = Ut(o)) == null ? void 0 : v.activeElement);
          });
          x && f.change(x.propsRef.value);
        }
        break;
      case Ce.ArrowRight:
      case Ce.ArrowDown:
        if (p.preventDefault(), p.stopPropagation(), pr(h, Et.Next | Et.WrapAround) === Ao.Success) {
          let x = a.value.find((g) => {
            var v;
            return g.element === ((v = Ut(g.element)) == null ? void 0 : v.activeElement);
          });
          x && f.change(x.propsRef.value);
        }
        break;
      case Ce.Space:
        {
          p.preventDefault(), p.stopPropagation();
          let x = a.value.find((g) => {
            var v;
            return g.element === ((v = Ut(g.element)) == null ? void 0 : v.activeElement);
          });
          x && f.change(x.propsRef.value);
        }
        break;
    }
  }
  let m = I(() => {
    var p;
    return (p = ce(o)) == null ? void 0 : p.closest("form");
  });
  return Be(() => {
    pt([m], () => {
      if (!m.value || e.defaultValue === void 0)
        return;
      function p() {
        f.change(e.defaultValue);
      }
      return m.value.addEventListener("reset", p), () => {
        var h;
        (h = m.value) == null || h.removeEventListener("reset", p);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: p, name: h, id: x, form: g, ...v } = e, w = { ref: o, id: x, role: "radiogroup", "aria-labelledby": s.value, "aria-describedby": l.value, onKeydown: c };
    return je(H, [...h != null && d.value != null ? el({ [h]: d.value }).map(([k, A]) => je(bi, yc({ features: yr.Hidden, key: k, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: g, name: k, value: A }))) : [], Ke({ ourProps: w, theirProps: { ...n, ...ra(v, ["modelValue", "defaultValue", "by"]) }, slot: {}, attrs: n, slots: r, name: "RadioGroup" })]);
  };
} });
var i0 = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(i0 || {});
let Zc = pe({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${_t()}` } }, setup(e, { attrs: t, slots: n, expose: r }) {
  let i = Xc("RadioGroupOption"), o = qc({ name: "RadioGroupLabel" }), a = tl({ name: "RadioGroupDescription" }), s = W(null), l = I(() => ({ value: e.value, disabled: e.disabled })), d = W(1);
  r({ el: s, $el: s });
  let u = I(() => ce(s));
  Be(() => i.registerOption({ id: e.id, element: u, propsRef: l })), ot(() => i.unregisterOption(e.id));
  let f = I(() => {
    var v;
    return ((v = i.firstOption.value) == null ? void 0 : v.id) === e.id;
  }), c = I(() => i.disabled.value || e.disabled), m = I(() => i.compare(ue(i.value.value), ue(e.value))), p = I(() => c.value ? -1 : m.value || !i.containsCheckedOption.value && f.value ? 0 : -1);
  function h() {
    var v;
    i.change(e.value) && (d.value |= 2, (v = ce(s)) == null || v.focus());
  }
  function x() {
    d.value |= 2;
  }
  function g() {
    d.value &= -3;
  }
  return () => {
    let { id: v, value: w, disabled: k, ...A } = e, F = { checked: m.value, disabled: c.value, active: !!(d.value & 2) }, j = { id: v, ref: s, role: "radio", "aria-checked": m.value ? "true" : "false", "aria-labelledby": o.value, "aria-describedby": a.value, "aria-disabled": c.value ? !0 : void 0, tabIndex: p.value, onClick: c.value ? void 0 : h, onFocus: c.value ? void 0 : x, onBlur: c.value ? void 0 : g };
    return Ke({ ourProps: j, theirProps: A, slot: F, attrs: t, slots: n, name: "RadioGroupOption" });
  };
} }), Qc = n0, ef = $c;
function o0(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called)
      return t.called = !0, e(...n);
  };
}
function Da(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Hi(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var ls = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(ls || {});
function a0(e, t) {
  let n = ia();
  if (!e)
    return n.dispose;
  let { transitionDuration: r, transitionDelay: i } = getComputedStyle(e), [o, a] = [r, i].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((d) => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, u) => u - d);
    return l;
  });
  return o !== 0 ? n.setTimeout(() => t("finished"), o + a) : t("finished"), n.add(() => t("cancelled")), n.dispose;
}
function Od(e, t, n, r, i, o) {
  let a = ia(), s = o !== void 0 ? o0(o) : () => {
  };
  return Hi(e, ...i), Da(e, ...t, ...n), a.nextFrame(() => {
    Hi(e, ...n), Da(e, ...r), a.add(a0(e, (l) => (Hi(e, ...r, ...t), Da(e, ...i), s(l))));
  }), a.add(() => Hi(e, ...t, ...n, ...r, ...i)), a.add(() => s("cancelled")), a.dispose;
}
function Nn(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let rl = Symbol("TransitionContext");
var s0 = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(s0 || {});
function l0() {
  return Ye(rl, null) !== null;
}
function d0() {
  let e = Ye(rl, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function u0() {
  let e = Ye(il, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let il = Symbol("NestingContext");
function sa(e) {
  return "children" in e ? sa(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function tf(e) {
  let t = W([]), n = W(!1);
  Be(() => n.value = !0), ot(() => n.value = !1);
  function r(o, a = bn.Hidden) {
    let s = t.value.findIndex(({ id: l }) => l === o);
    s !== -1 && (Ze(a, { [bn.Unmount]() {
      t.value.splice(s, 1);
    }, [bn.Hidden]() {
      t.value[s].state = "hidden";
    } }), !sa(t) && n.value && (e == null || e()));
  }
  function i(o) {
    let a = t.value.find(({ id: s }) => s === o);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: o, state: "visible" }), () => r(o, bn.Unmount);
  }
  return { children: t, register: i, unregister: r };
}
let nf = wn.RenderStrategy, rf = pe({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: i }) {
  let o = W(0);
  function a() {
    o.value |= Xe.Opening, t("beforeEnter");
  }
  function s() {
    o.value &= ~Xe.Opening, t("afterEnter");
  }
  function l() {
    o.value |= Xe.Closing, t("beforeLeave");
  }
  function d() {
    o.value &= ~Xe.Closing, t("afterLeave");
  }
  if (!l0() && ob())
    return () => je(of, { ...e, onBeforeEnter: a, onAfterEnter: s, onBeforeLeave: l, onAfterLeave: d }, r);
  let u = W(null), f = I(() => e.unmount ? bn.Unmount : bn.Hidden);
  i({ el: u, $el: u });
  let { show: c, appear: m } = d0(), { register: p, unregister: h } = u0(), x = W(c.value ? "visible" : "hidden"), g = { value: !0 }, v = _t(), w = { value: !1 }, k = tf(() => {
    !w.value && x.value !== "hidden" && (x.value = "hidden", h(v), d());
  });
  Be(() => {
    let Z = p(v);
    ot(Z);
  }), bt(() => {
    if (f.value === bn.Hidden && v) {
      if (c.value && x.value !== "visible") {
        x.value = "visible";
        return;
      }
      Ze(x.value, { hidden: () => h(v), visible: () => p(v) });
    }
  });
  let A = Nn(e.enter), F = Nn(e.enterFrom), j = Nn(e.enterTo), R = Nn(e.entered), z = Nn(e.leave), J = Nn(e.leaveFrom), Y = Nn(e.leaveTo);
  Be(() => {
    bt(() => {
      if (x.value === "visible") {
        let Z = ce(u);
        if (Z instanceof Comment && Z.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function D(Z) {
    let be = g.value && !m.value, Le = ce(u);
    !Le || !(Le instanceof HTMLElement) || be || (w.value = !0, c.value && a(), c.value || l(), Z(c.value ? Od(Le, A, F, j, R, (he) => {
      w.value = !1, he === ls.Finished && s();
    }) : Od(Le, z, J, Y, R, (he) => {
      w.value = !1, he === ls.Finished && (sa(k) || (x.value = "hidden", h(v), d()));
    })));
  }
  return Be(() => {
    pt([c], (Z, be, Le) => {
      D(Le), g.value = !1;
    }, { immediate: !0 });
  }), ut(il, k), Js(I(() => Ze(x.value, { visible: Xe.Open, hidden: Xe.Closed }) | o.value)), () => {
    let { appear: Z, show: be, enter: Le, enterFrom: he, enterTo: L, entered: X, leave: ge, leaveFrom: De, leaveTo: Ee, ...Te } = e, Tt = { ref: u }, re = { ...Te, ...m.value && c.value && Ti.isServer ? { class: ye([n.class, Te.class, ...A, ...F]) } : {} };
    return Ke({ theirProps: re, ourProps: Tt, slot: {}, slots: r, attrs: n, features: nf, visible: x.value === "visible", name: "TransitionChild" });
  };
} }), c0 = rf, of = pe({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r }) {
  let i = Oi(), o = I(() => e.show === null && i !== null ? (i.value & Xe.Open) === Xe.Open : e.show);
  bt(() => {
    if (![!0, !1].includes(o.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = W(o.value ? "visible" : "hidden"), s = tf(() => {
    a.value = "hidden";
  }), l = W(!0), d = { show: o, appear: I(() => e.appear || !l.value) };
  return Be(() => {
    bt(() => {
      l.value = !1, o.value ? a.value = "visible" : sa(s) || (a.value = "hidden");
    });
  }), ut(il, s), ut(rl, d), () => {
    let u = ra(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return Ke({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...r, default: () => [je(c0, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...n, ...f, ...u }, r.default)] }, attrs: {}, features: nf, visible: a.value === "visible", name: "Transition" });
  };
} });
function Td() {
  const { state: e, send: t } = Rt();
  function n() {
    const i = new URLSearchParams(window.location.search), o = {};
    i.forEach((s, l) => {
      o[l] = s;
    });
    const a = o.affiliate || o.aff;
    return a && (o.affiliate = a), o;
  }
  const r = n();
  document.querySelectorAll("button[data-sell-store][data-sell-product]").forEach((i) => {
    r.affiliate && !i.hasAttribute("data-sell-affiliate") && i.setAttribute("data-sell-affiliate", r.affiliate), i.addEventListener("click", () => {
      var h, x, g, v, w, k, A, F;
      if (!e.value.matches("closed"))
        return;
      const o = i.attributes["data-sell-store"].value, a = i.attributes["data-sell-product"].value, s = (h = i.attributes["data-sell-variant"]) == null ? void 0 : h.value, l = (x = i.attributes["data-sell-coupon"]) == null ? void 0 : x.value, d = (g = i.attributes["data-sell-extra"]) == null ? void 0 : g.value, u = (v = i.attributes["data-sell-quantity"]) == null ? void 0 : v.value, f = (w = i.attributes["data-sell-email"]) == null ? void 0 : w.value, c = ((k = i.attributes["data-sell-darkmode"]) == null ? void 0 : k.value) === "true", m = (A = i.attributes["data-sell-theme"]) == null ? void 0 : A.value, p = (F = i.attributes["data-sell-affiliate"]) == null ? void 0 : F.value;
      t({
        type: "OPEN",
        store_id: o,
        product_id: a,
        variant_id: s,
        coupon: l,
        extra: d,
        quantity: u,
        email: f,
        affiliate: p,
        customization: {
          darkMode: c,
          theme: m
        }
      });
    });
  });
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var $ = function() {
  return $ = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, $.apply(this, arguments);
};
function ol(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function _e(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n)
    return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Se(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}
function ze(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, o; r < i; r++)
      (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var Ne;
(function(e) {
  e.Start = "xstate.start", e.Stop = "xstate.stop", e.Raise = "xstate.raise", e.Send = "xstate.send", e.Cancel = "xstate.cancel", e.NullEvent = "", e.Assign = "xstate.assign", e.After = "xstate.after", e.DoneState = "done.state", e.DoneInvoke = "done.invoke", e.Log = "xstate.log", e.Init = "xstate.init", e.Invoke = "xstate.invoke", e.ErrorExecution = "error.execution", e.ErrorCommunication = "error.communication", e.ErrorPlatform = "error.platform", e.ErrorCustom = "xstate.error", e.Update = "xstate.update", e.Pure = "xstate.pure", e.Choose = "xstate.choose";
})(Ne || (Ne = {}));
var xn;
(function(e) {
  e.Parent = "#_parent", e.Internal = "#_internal";
})(xn || (xn = {}));
var Mo = Ne.Start, la = Ne.Stop, Cr = Ne.Raise, Ci = Ne.Send, al = Ne.Cancel, af = Ne.NullEvent, da = Ne.Assign, f0 = Ne.After, m0 = Ne.DoneState, ua = Ne.Log, sf = Ne.Init, No = Ne.Invoke, p0 = Ne.ErrorExecution, ds = Ne.ErrorPlatform, sl = Ne.ErrorCustom, ca = Ne.Update, lf = Ne.Choose, df = Ne.Pure;
const b0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  after: f0,
  assign: da,
  cancel: al,
  choose: lf,
  doneState: m0,
  error: sl,
  errorExecution: p0,
  errorPlatform: ds,
  init: sf,
  invoke: No,
  log: ua,
  nullEvent: af,
  pure: df,
  raise: Cr,
  send: Ci,
  start: Mo,
  stop: la,
  update: ca
}, Symbol.toStringTag, { value: "Module" }));
var uf = ".", Cd = {}, us = "xstate.guard", h0 = "", Bi;
function ll(e, t, n) {
  n === void 0 && (n = uf);
  var r = ni(e, n), i = ni(t, n);
  return Ae(i) ? Ae(r) ? i === r : !1 : Ae(r) ? r in i : Object.keys(r).every(function(o) {
    return o in i ? ll(r[o], i[o]) : !1;
  });
}
function cf(e) {
  try {
    return Ae(e) || typeof e == "number" ? "".concat(e) : e.type;
  } catch {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
function cs(e, t) {
  try {
    return Ar(e) ? e : e.toString().split(t);
  } catch {
    throw new Error("'".concat(e, "' is not a valid state path."));
  }
}
function v0(e) {
  return typeof e == "object" && "value" in e && "context" in e && "event" in e && "_event" in e;
}
function ni(e, t) {
  if (v0(e))
    return e.value;
  if (Ar(e))
    return Io(e);
  if (typeof e != "string")
    return e;
  var n = cs(e, t);
  return Io(n);
}
function Io(e) {
  if (e.length === 1)
    return e[0];
  for (var t = {}, n = t, r = 0; r < e.length - 1; r++)
    r === e.length - 2 ? n[e[r]] = e[r + 1] : (n[e[r]] = {}, n = n[e[r]]);
  return t;
}
function jr(e, t) {
  for (var n = {}, r = Object.keys(e), i = 0; i < r.length; i++) {
    var o = r[i];
    n[o] = t(e[o], o, e, i);
  }
  return n;
}
function Ad(e, t, n) {
  var r, i, o = {};
  try {
    for (var a = _e(Object.keys(e)), s = a.next(); !s.done; s = a.next()) {
      var l = s.value, d = e[l];
      n(d) && (o[l] = t(d, l, e));
    }
  } catch (u) {
    r = {
      error: u
    };
  } finally {
    try {
      s && !s.done && (i = a.return) && i.call(a);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return o;
}
var g0 = function(e) {
  return function(t) {
    var n, r, i = t;
    try {
      for (var o = _e(e), a = o.next(); !a.done; a = o.next()) {
        var s = a.value;
        i = i[s];
      }
    } catch (l) {
      n = {
        error: l
      };
    } finally {
      try {
        a && !a.done && (r = o.return) && r.call(o);
      } finally {
        if (n)
          throw n.error;
      }
    }
    return i;
  };
};
function y0(e, t) {
  return function(n) {
    var r, i, o = n;
    try {
      for (var a = _e(e), s = a.next(); !s.done; s = a.next()) {
        var l = s.value;
        o = o[t][l];
      }
    } catch (d) {
      r = {
        error: d
      };
    } finally {
      try {
        s && !s.done && (i = a.return) && i.call(a);
      } finally {
        if (r)
          throw r.error;
      }
    }
    return o;
  };
}
function lo(e) {
  if (!e)
    return [[]];
  if (Ae(e))
    return [[e]];
  var t = Ge(Object.keys(e).map(function(n) {
    var r = e[n];
    return typeof r != "string" && (!r || !Object.keys(r).length) ? [[n]] : lo(e[n]).map(function(i) {
      return [n].concat(i);
    });
  }));
  return t;
}
function Ge(e) {
  var t;
  return (t = []).concat.apply(t, ze([], Se(e), !1));
}
function ff(e) {
  return Ar(e) ? e : [e];
}
function Mt(e) {
  return e === void 0 ? [] : ff(e);
}
function Do(e, t, n) {
  var r, i;
  if (Oe(e))
    return e(t, n.data);
  var o = {};
  try {
    for (var a = _e(Object.keys(e)), s = a.next(); !s.done; s = a.next()) {
      var l = s.value, d = e[l];
      Oe(d) ? o[l] = d(t, n.data) : o[l] = d;
    }
  } catch (u) {
    r = {
      error: u
    };
  } finally {
    try {
      s && !s.done && (i = a.return) && i.call(a);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return o;
}
function _0(e) {
  return /^(done|error)\./.test(e);
}
function Md(e) {
  return !!(e instanceof Promise || e !== null && (Oe(e) || typeof e == "object") && Oe(e.then));
}
function w0(e) {
  return e !== null && typeof e == "object" && "transition" in e && typeof e.transition == "function";
}
function x0(e, t) {
  var n, r, i = Se([[], []], 2), o = i[0], a = i[1];
  try {
    for (var s = _e(e), l = s.next(); !l.done; l = s.next()) {
      var d = l.value;
      t(d) ? o.push(d) : a.push(d);
    }
  } catch (u) {
    n = {
      error: u
    };
  } finally {
    try {
      l && !l.done && (r = s.return) && r.call(s);
    } finally {
      if (n)
        throw n.error;
    }
  }
  return [o, a];
}
function mf(e, t) {
  return jr(e.states, function(n, r) {
    if (n) {
      var i = (Ae(t) ? void 0 : t[r]) || (n ? n.current : void 0);
      if (i)
        return {
          current: i,
          states: mf(n, i)
        };
    }
  });
}
function k0(e, t) {
  return {
    current: t,
    states: mf(e, t)
  };
}
function Nd(e, t, n, r) {
  var i = e && n.reduce(function(o, a) {
    var s, l, d = a.assignment, u = {
      state: r,
      action: a,
      _event: t
    }, f = {};
    if (Oe(d))
      f = d(o, t.data, u);
    else
      try {
        for (var c = _e(Object.keys(d)), m = c.next(); !m.done; m = c.next()) {
          var p = m.value, h = d[p];
          f[p] = Oe(h) ? h(o, t.data, u) : h;
        }
      } catch (x) {
        s = {
          error: x
        };
      } finally {
        try {
          m && !m.done && (l = c.return) && l.call(c);
        } finally {
          if (s)
            throw s.error;
        }
      }
    return Object.assign({}, o, f);
  }, e);
  return i;
}
var E0 = function() {
};
function Ar(e) {
  return Array.isArray(e);
}
function Oe(e) {
  return typeof e == "function";
}
function Ae(e) {
  return typeof e == "string";
}
function pf(e, t) {
  if (e)
    return Ae(e) ? {
      type: us,
      name: e,
      predicate: t ? t[e] : void 0
    } : Oe(e) ? {
      type: us,
      name: e.name,
      predicate: e
    } : e;
}
function S0(e) {
  try {
    return "subscribe" in e && Oe(e.subscribe);
  } catch {
    return !1;
  }
}
var mn = /* @__PURE__ */ function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
Bi = {}, Bi[mn] = function() {
  return this;
}, Bi[Symbol.observable] = function() {
  return this;
};
function _r(e) {
  return !!e && "__xstatenode" in e;
}
function O0(e) {
  return !!e && typeof e.send == "function";
}
function fa(e, t) {
  return Ae(e) || typeof e == "number" ? $({
    type: e
  }, t) : e;
}
function at(e, t) {
  if (!Ae(e) && "$$type" in e && e.$$type === "scxml")
    return e;
  var n = fa(e);
  return $({
    name: n.type,
    data: n,
    $$type: "scxml",
    type: "external"
  }, t);
}
function er(e, t) {
  var n = ff(t).map(function(r) {
    return typeof r > "u" || typeof r == "string" || _r(r) ? {
      target: r,
      event: e
    } : $($({}, r), {
      event: e
    });
  });
  return n;
}
function T0(e) {
  if (!(e === void 0 || e === h0))
    return Mt(e);
}
function bf(e, t, n, r, i) {
  var o = e.options.guards, a = {
    state: i,
    cond: t,
    _event: r
  };
  if (t.type === us)
    return ((o == null ? void 0 : o[t.name]) || t.predicate)(n, r.data, a);
  var s = o == null ? void 0 : o[t.type];
  if (!s)
    throw new Error("Guard '".concat(t.type, "' is not implemented on machine '").concat(e.id, "'."));
  return s(n, r.data, a);
}
function hf(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function uo(e, t, n) {
  var r = function() {
  }, i = typeof e == "object", o = i ? e : null;
  return {
    next: ((i ? e.next : e) || r).bind(o),
    error: ((i ? e.error : t) || r).bind(o),
    complete: ((i ? e.complete : n) || r).bind(o)
  };
}
function Gi(e, t) {
  return "".concat(e, ":invocation[").concat(t, "]");
}
function fs(e) {
  return (e.type === Cr || e.type === Ci && e.to === xn.Internal) && typeof e.delay != "number";
}
var Kn = /* @__PURE__ */ at({
  type: sf
});
function Po(e, t) {
  return t && t[e] || void 0;
}
function wr(e, t) {
  var n;
  if (Ae(e) || typeof e == "number") {
    var r = Po(e, t);
    Oe(r) ? n = {
      type: e,
      exec: r
    } : r ? n = r : n = {
      type: e,
      exec: void 0
    };
  } else if (Oe(e))
    n = {
      // Convert action to string if unnamed
      type: e.name || e.toString(),
      exec: e
    };
  else {
    var r = Po(e.type, t);
    if (Oe(r))
      n = $($({}, e), {
        exec: r
      });
    else if (r) {
      var i = r.type || e.type;
      n = $($($({}, r), e), {
        type: i
      });
    } else
      n = e;
  }
  return n;
}
var Yt = function(e, t) {
  if (!e)
    return [];
  var n = Ar(e) ? e : [e];
  return n.map(function(r) {
    return wr(r, t);
  });
};
function ma(e) {
  var t = wr(e);
  return $($({
    id: Ae(e) ? e : t.id
  }, t), {
    type: t.type
  });
}
function vf(e, t) {
  return {
    type: Cr,
    event: typeof e == "function" ? e : fa(e),
    delay: t ? t.delay : void 0,
    id: t == null ? void 0 : t.id
  };
}
function gf(e, t, n, r) {
  var i = {
    _event: n
  }, o = at(Oe(e.event) ? e.event(t, n.data, i) : e.event), a;
  if (Ae(e.delay)) {
    var s = r && r[e.delay];
    a = Oe(s) ? s(t, n.data, i) : s;
  } else
    a = Oe(e.delay) ? e.delay(t, n.data, i) : e.delay;
  return $($({}, e), {
    type: Cr,
    _event: o,
    delay: a
  });
}
function Mr(e, t) {
  return {
    to: t ? t.to : void 0,
    type: Ci,
    event: Oe(e) ? e : fa(e),
    delay: t ? t.delay : void 0,
    // TODO: don't auto-generate IDs here like that
    // there is too big chance of the ID collision
    id: t && t.id !== void 0 ? t.id : Oe(e) ? e.name : cf(e)
  };
}
function yf(e, t, n, r) {
  var i = {
    _event: n
  }, o = at(Oe(e.event) ? e.event(t, n.data, i) : e.event), a;
  if (Ae(e.delay)) {
    var s = r && r[e.delay];
    a = Oe(s) ? s(t, n.data, i) : s;
  } else
    a = Oe(e.delay) ? e.delay(t, n.data, i) : e.delay;
  var l = Oe(e.to) ? e.to(t, n.data, i) : e.to;
  return $($({}, e), {
    to: l,
    _event: o,
    event: o.data,
    delay: a
  });
}
function dl(e, t) {
  return Mr(e, $($({}, t), {
    to: xn.Parent
  }));
}
function C0(e, t, n) {
  return Mr(t, $($({}, n), {
    to: e
  }));
}
function A0() {
  return dl(ca);
}
function M0(e, t) {
  return Mr(e, $($({}, t), {
    to: function(n, r, i) {
      var o = i._event;
      return o.origin;
    }
  }));
}
var N0 = function(e, t) {
  return {
    context: e,
    event: t
  };
};
function I0(e, t) {
  return e === void 0 && (e = N0), {
    type: ua,
    label: t,
    expr: e
  };
}
var _f = function(e, t, n) {
  return $($({}, e), {
    value: Ae(e.expr) ? e.expr : e.expr(t, n.data, {
      _event: n
    })
  });
}, wf = function(e) {
  return {
    type: al,
    sendId: e
  };
};
function xf(e) {
  var t = ma(e);
  return {
    type: Ne.Start,
    activity: t,
    exec: void 0
  };
}
function kf(e) {
  var t = Oe(e) ? e : ma(e);
  return {
    type: Ne.Stop,
    activity: t,
    exec: void 0
  };
}
function Ef(e, t, n) {
  var r = Oe(e.activity) ? e.activity(t, n.data) : e.activity, i = typeof r == "string" ? {
    id: r
  } : r, o = {
    type: Ne.Stop,
    activity: i
  };
  return o;
}
var Sf = function(e) {
  return {
    type: da,
    assignment: e
  };
};
function D0(e) {
  return typeof e == "object" && "type" in e;
}
function Of(e, t) {
  var n = t ? "#".concat(t) : "";
  return "".concat(Ne.After, "(").concat(e, ")").concat(n);
}
function Ur(e, t) {
  var n = "".concat(Ne.DoneState, ".").concat(e), r = {
    type: n,
    data: t
  };
  return r.toString = function() {
    return n;
  }, r;
}
function ri(e, t) {
  var n = "".concat(Ne.DoneInvoke, ".").concat(e), r = {
    type: n,
    data: t
  };
  return r.toString = function() {
    return n;
  }, r;
}
function ar(e, t) {
  var n = "".concat(Ne.ErrorPlatform, ".").concat(e), r = {
    type: n,
    data: t
  };
  return r.toString = function() {
    return n;
  }, r;
}
function P0(e) {
  return {
    type: Ne.Pure,
    get: e
  };
}
function R0(e, t) {
  return Mr(function(n, r) {
    return r;
  }, $($({}, t), {
    to: e
  }));
}
function L0(e, t) {
  return dl(function(n, r, i) {
    return {
      type: sl,
      data: Oe(e) ? e(n, r, i) : e
    };
  }, $($({}, t), {
    to: xn.Parent
  }));
}
function $0(e) {
  return {
    type: Ne.Choose,
    conds: e
  };
}
var F0 = function(e) {
  var t, n, r = [];
  try {
    for (var i = _e(e), o = i.next(); !o.done; o = i.next())
      for (var a = o.value, s = 0; s < a.actions.length; ) {
        if (a.actions[s].type === da) {
          r.push(a.actions[s]), a.actions.splice(s, 1);
          continue;
        }
        s++;
      }
  } catch (l) {
    t = {
      error: l
    };
  } finally {
    try {
      o && !o.done && (n = i.return) && n.call(i);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return r;
};
function hi(e, t, n, r, i, o, a) {
  a === void 0 && (a = !1);
  var s = a ? [] : F0(i), l = s.length ? Nd(n, r, s, t) : n, d = a ? [n] : void 0, u = [];
  function f(p, h) {
    var x;
    switch (h.type) {
      case Cr: {
        var g = gf(h, l, r, e.options.delays);
        return o && typeof g.delay == "number" && o(g, l, r), g;
      }
      case Ci:
        var v = yf(h, l, r, e.options.delays);
        return o && v.to !== xn.Internal && (p === "entry" ? u.push(v) : o(v, l, r)), v;
      case ua: {
        var w = _f(h, l, r);
        return o == null || o(w, l, r), w;
      }
      case lf: {
        var k = h, A = (x = k.conds.find(function(he) {
          var L = pf(he.cond, e.options.guards);
          return !L || bf(e, L, l, r, o ? void 0 : t);
        })) === null || x === void 0 ? void 0 : x.actions;
        if (!A)
          return [];
        var F = Se(hi(e, t, l, r, [{
          type: p,
          actions: Yt(Mt(A), e.options.actions)
        }], o, a), 2), j = F[0], R = F[1];
        return l = R, d == null || d.push(l), j;
      }
      case df: {
        var A = h.get(l, r.data);
        if (!A)
          return [];
        var z = Se(hi(e, t, l, r, [{
          type: p,
          actions: Yt(Mt(A), e.options.actions)
        }], o, a), 2), J = z[0], Y = z[1];
        return l = Y, d == null || d.push(l), J;
      }
      case la: {
        var w = Ef(h, l, r);
        return o == null || o(w, n, r), w;
      }
      case da: {
        l = Nd(l, r, [h], o ? void 0 : t), d == null || d.push(l);
        break;
      }
      default:
        var D = wr(h, e.options.actions), Z = D.exec;
        if (o)
          o(D, l, r);
        else if (Z && d) {
          var be = d.length - 1, Le = $($({}, D), {
            exec: function(he) {
              for (var L = [], X = 1; X < arguments.length; X++)
                L[X - 1] = arguments[X];
              Z.apply(void 0, ze([d[be]], Se(L), !1));
            }
          });
          D = Le;
        }
        return D;
    }
  }
  function c(p) {
    var h, x, g = [];
    try {
      for (var v = _e(p.actions), w = v.next(); !w.done; w = v.next()) {
        var k = w.value, A = f(p.type, k);
        A && (g = g.concat(A));
      }
    } catch (F) {
      h = {
        error: F
      };
    } finally {
      try {
        w && !w.done && (x = v.return) && x.call(v);
      } finally {
        if (h)
          throw h.error;
      }
    }
    return u.forEach(function(F) {
      o(F, l, r);
    }), u.length = 0, g;
  }
  var m = Ge(i.map(c));
  return [m, l];
}
const pa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  actionTypes: b0,
  after: Of,
  assign: Sf,
  cancel: wf,
  choose: $0,
  done: Ur,
  doneInvoke: ri,
  error: ar,
  escalate: L0,
  forwardTo: R0,
  getActionFunction: Po,
  initEvent: Kn,
  isActionObject: D0,
  log: I0,
  pure: P0,
  raise: vf,
  resolveActions: hi,
  resolveLog: _f,
  resolveRaise: gf,
  resolveSend: yf,
  resolveStop: Ef,
  respond: M0,
  send: Mr,
  sendParent: dl,
  sendTo: C0,
  sendUpdate: A0,
  start: xf,
  stop: kf,
  toActionObject: wr,
  toActionObjects: Yt,
  toActivityDefinition: ma
}, Symbol.toStringTag, { value: "Module" }));
var Id = [], rr = function(e, t) {
  Id.push(e);
  var n = t(e);
  return Id.pop(), n;
};
function Tf(e) {
  var t;
  return t = {
    id: e,
    send: function() {
    },
    subscribe: function() {
      return {
        unsubscribe: function() {
        }
      };
    },
    getSnapshot: function() {
    },
    toJSON: function() {
      return {
        id: e
      };
    }
  }, t[mn] = function() {
    return this;
  }, t;
}
function z0(e, t, n, r) {
  var i, o = hf(e.src), a = (i = t == null ? void 0 : t.options.services) === null || i === void 0 ? void 0 : i[o.type], s = e.data ? Do(e.data, n, r) : void 0, l = a ? Cf(a, e.id, s) : Tf(e.id);
  return l.meta = e, l;
}
function Cf(e, t, n) {
  var r = Tf(t);
  if (r.deferred = !0, _r(e)) {
    var i = r.state = rr(void 0, function() {
      return (n ? e.withContext(n) : e).initialState;
    });
    r.getSnapshot = function() {
      return i;
    };
  }
  return r;
}
function V0(e) {
  try {
    return typeof e.send == "function";
  } catch {
    return !1;
  }
}
function j0(e) {
  return V0(e) && "id" in e;
}
function U0(e) {
  var t;
  return $((t = {
    subscribe: function() {
      return {
        unsubscribe: function() {
        }
      };
    },
    id: "anonymous",
    getSnapshot: function() {
    }
  }, t[mn] = function() {
    return this;
  }, t), e);
}
var Ro = function(e) {
  return e.type === "atomic" || e.type === "final";
};
function Af(e) {
  return Object.keys(e.states).map(function(t) {
    return e.states[t];
  });
}
function vi(e) {
  return Af(e).filter(function(t) {
    return t.type !== "history";
  });
}
function Mf(e) {
  var t = [e];
  return Ro(e) ? t : t.concat(Ge(vi(e).map(Mf)));
}
function Hr(e, t) {
  var n, r, i, o, a, s, l, d, u = new Set(e), f = ms(u), c = new Set(t);
  try {
    for (var m = _e(c), p = m.next(); !p.done; p = m.next())
      for (var h = p.value, x = h.parent; x && !c.has(x); )
        c.add(x), x = x.parent;
  } catch (z) {
    n = {
      error: z
    };
  } finally {
    try {
      p && !p.done && (r = m.return) && r.call(m);
    } finally {
      if (n)
        throw n.error;
    }
  }
  var g = ms(c);
  try {
    for (var v = _e(c), w = v.next(); !w.done; w = v.next()) {
      var h = w.value;
      if (h.type === "compound" && (!g.get(h) || !g.get(h).length))
        f.get(h) ? f.get(h).forEach(function(J) {
          return c.add(J);
        }) : h.initialStateNodes.forEach(function(J) {
          return c.add(J);
        });
      else if (h.type === "parallel")
        try {
          for (var k = (a = void 0, _e(vi(h))), A = k.next(); !A.done; A = k.next()) {
            var F = A.value;
            c.has(F) || (c.add(F), f.get(F) ? f.get(F).forEach(function(J) {
              return c.add(J);
            }) : F.initialStateNodes.forEach(function(J) {
              return c.add(J);
            }));
          }
        } catch (J) {
          a = {
            error: J
          };
        } finally {
          try {
            A && !A.done && (s = k.return) && s.call(k);
          } finally {
            if (a)
              throw a.error;
          }
        }
    }
  } catch (z) {
    i = {
      error: z
    };
  } finally {
    try {
      w && !w.done && (o = v.return) && o.call(v);
    } finally {
      if (i)
        throw i.error;
    }
  }
  try {
    for (var j = _e(c), R = j.next(); !R.done; R = j.next())
      for (var h = R.value, x = h.parent; x && !c.has(x); )
        c.add(x), x = x.parent;
  } catch (z) {
    l = {
      error: z
    };
  } finally {
    try {
      R && !R.done && (d = j.return) && d.call(j);
    } finally {
      if (l)
        throw l.error;
    }
  }
  return c;
}
function Nf(e, t) {
  var n = t.get(e);
  if (!n)
    return {};
  if (e.type === "compound") {
    var r = n[0];
    if (r) {
      if (Ro(r))
        return r.key;
    } else
      return {};
  }
  var i = {};
  return n.forEach(function(o) {
    i[o.key] = Nf(o, t);
  }), i;
}
function ms(e) {
  var t, n, r = /* @__PURE__ */ new Map();
  try {
    for (var i = _e(e), o = i.next(); !o.done; o = i.next()) {
      var a = o.value;
      r.has(a) || r.set(a, []), a.parent && (r.has(a.parent) || r.set(a.parent, []), r.get(a.parent).push(a));
    }
  } catch (s) {
    t = {
      error: s
    };
  } finally {
    try {
      o && !o.done && (n = i.return) && n.call(i);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return r;
}
function H0(e, t) {
  var n = Hr([e], t);
  return Nf(e, ms(n));
}
function Br(e, t) {
  return Array.isArray(e) ? e.some(function(n) {
    return n === t;
  }) : e instanceof Set ? e.has(t) : !1;
}
function B0(e) {
  return ze([], Se(new Set(Ge(ze([], Se(e.map(function(t) {
    return t.ownEvents;
  })), !1)))), !1);
}
function co(e, t) {
  return t.type === "compound" ? vi(t).some(function(n) {
    return n.type === "final" && Br(e, n);
  }) : t.type === "parallel" ? vi(t).every(function(n) {
    return co(e, n);
  }) : !1;
}
function G0(e) {
  return e === void 0 && (e = []), e.reduce(function(t, n) {
    return n.meta !== void 0 && (t[n.id] = n.meta), t;
  }, {});
}
function Dd(e) {
  return new Set(Ge(e.map(function(t) {
    return t.tags;
  })));
}
function If(e, t) {
  if (e === t)
    return !0;
  if (e === void 0 || t === void 0)
    return !1;
  if (Ae(e) || Ae(t))
    return e === t;
  var n = Object.keys(e), r = Object.keys(t);
  return n.length === r.length && n.every(function(i) {
    return If(e[i], t[i]);
  });
}
function W0(e) {
  return typeof e != "object" || e === null ? !1 : "value" in e && "_event" in e;
}
function Y0(e, t) {
  var n = e.exec, r = $($({}, e), {
    exec: n !== void 0 ? function() {
      return n(t.context, t.event, {
        action: e,
        state: t,
        _event: t._event
      });
    } : void 0
  });
  return r;
}
var Ft = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      var n = this, r;
      this.actions = [], this.activities = Cd, this.meta = {}, this.events = [], this.value = t.value, this.context = t.context, this._event = t._event, this._sessionid = t._sessionid, this.event = this._event.data, this.historyValue = t.historyValue, this.history = t.history, this.actions = t.actions || [], this.activities = t.activities || Cd, this.meta = G0(t.configuration), this.events = t.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = t.configuration, this.transitions = t.transitions, this.children = t.children, this.done = !!t.done, this.tags = (r = Array.isArray(t.tags) ? new Set(t.tags) : t.tags) !== null && r !== void 0 ? r : /* @__PURE__ */ new Set(), this.machine = t.machine, Object.defineProperty(this, "nextEvents", {
        get: function() {
          return B0(n.configuration);
        }
      });
    }
    return e.from = function(t, n) {
      if (t instanceof e)
        return t.context !== n ? new e({
          value: t.value,
          context: n,
          _event: t._event,
          _sessionid: null,
          historyValue: t.historyValue,
          history: t.history,
          actions: [],
          activities: t.activities,
          meta: {},
          events: [],
          configuration: [],
          transitions: [],
          children: {}
        }) : t;
      var r = Kn;
      return new e({
        value: t,
        context: n,
        _event: r,
        _sessionid: null,
        historyValue: void 0,
        history: void 0,
        actions: [],
        activities: void 0,
        meta: void 0,
        events: [],
        configuration: [],
        transitions: [],
        children: {}
      });
    }, e.create = function(t) {
      return new e(t);
    }, e.inert = function(t, n) {
      if (t instanceof e) {
        if (!t.actions.length)
          return t;
        var r = Kn;
        return new e({
          value: t.value,
          context: n,
          _event: r,
          _sessionid: null,
          historyValue: t.historyValue,
          history: t.history,
          activities: t.activities,
          configuration: t.configuration,
          transitions: [],
          children: {}
        });
      }
      return e.from(t, n);
    }, e.prototype.toStrings = function(t, n) {
      var r = this;
      if (t === void 0 && (t = this.value), n === void 0 && (n = "."), Ae(t))
        return [t];
      var i = Object.keys(t);
      return i.concat.apply(i, ze([], Se(i.map(function(o) {
        return r.toStrings(t[o], n).map(function(a) {
          return o + n + a;
        });
      })), !1));
    }, e.prototype.toJSON = function() {
      var t = this;
      t.configuration, t.transitions;
      var n = t.tags;
      t.machine;
      var r = ol(t, ["configuration", "transitions", "tags", "machine"]);
      return $($({}, r), {
        tags: Array.from(n)
      });
    }, e.prototype.matches = function(t) {
      return ll(t, this.value);
    }, e.prototype.hasTag = function(t) {
      return this.tags.has(t);
    }, e.prototype.can = function(t) {
      var n;
      E0(!!this.machine);
      var r = (n = this.machine) === null || n === void 0 ? void 0 : n.getTransitionData(this, t);
      return !!(r != null && r.transitions.length) && // Check that at least one transition is not forbidden
      r.transitions.some(function(i) {
        return i.target !== void 0 || i.actions.length;
      });
    }, e;
  }()
), q0 = {
  deferEvents: !1
}, Pd = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      this.processingEvent = !1, this.queue = [], this.initialized = !1, this.options = $($({}, q0), t);
    }
    return e.prototype.initialize = function(t) {
      if (this.initialized = !0, t) {
        if (!this.options.deferEvents) {
          this.schedule(t);
          return;
        }
        this.process(t);
      }
      this.flushEvents();
    }, e.prototype.schedule = function(t) {
      if (!this.initialized || this.processingEvent) {
        this.queue.push(t);
        return;
      }
      if (this.queue.length !== 0)
        throw new Error("Event queue should be empty when it is not processing events");
      this.process(t), this.flushEvents();
    }, e.prototype.clear = function() {
      this.queue = [];
    }, e.prototype.flushEvents = function() {
      for (var t = this.queue.shift(); t; )
        this.process(t), t = this.queue.shift();
    }, e.prototype.process = function(t) {
      this.processingEvent = !0;
      try {
        t();
      } catch (n) {
        throw this.clear(), n;
      } finally {
        this.processingEvent = !1;
      }
    }, e;
  }()
), Pa = /* @__PURE__ */ new Map(), K0 = 0, Lr = {
  bookId: function() {
    return "x:".concat(K0++);
  },
  register: function(e, t) {
    return Pa.set(e, t), e;
  },
  get: function(e) {
    return Pa.get(e);
  },
  free: function(e) {
    Pa.delete(e);
  }
};
function ul() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
}
function X0() {
  var e = ul();
  if (e && "__xstate__" in e)
    return e.__xstate__;
}
function J0(e) {
  if (ul()) {
    var t = X0();
    t && t.register(e);
  }
}
function Z0(e, t) {
  t === void 0 && (t = {});
  var n = e.initialState, r = /* @__PURE__ */ new Set(), i = [], o = !1, a = function() {
    if (!o) {
      for (o = !0; i.length > 0; ) {
        var d = i.shift();
        n = e.transition(n, d, l), r.forEach(function(u) {
          return u.next(n);
        });
      }
      o = !1;
    }
  }, s = U0({
    id: t.id,
    send: function(d) {
      i.push(d), a();
    },
    getSnapshot: function() {
      return n;
    },
    subscribe: function(d, u, f) {
      var c = uo(d, u, f);
      return r.add(c), c.next(n), {
        unsubscribe: function() {
          r.delete(c);
        }
      };
    }
  }), l = {
    parent: t.parent,
    self: s,
    id: t.id || "anonymous",
    observers: r
  };
  return n = e.start ? e.start(l) : n, s;
}
var Q0 = {
  sync: !1,
  autoForward: !1
}, rt;
(function(e) {
  e[e.NotStarted = 0] = "NotStarted", e[e.Running = 1] = "Running", e[e.Stopped = 2] = "Stopped";
})(rt || (rt = {}));
var eh = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      n === void 0 && (n = e.defaultOptions);
      var r = this;
      this.machine = t, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = !1, this.status = rt.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this._outgoingQueue = [], this.init = this.start, this.send = function(u, f) {
        if (Ar(u))
          return r.batch(u), r.state;
        var c = at(fa(u, f));
        if (r.status === rt.Stopped)
          return r.state;
        if (r.status !== rt.Running && !r.options.deferEvents)
          throw new Error('Event "'.concat(c.name, '" was sent to uninitialized service "').concat(
            r.machine.id,
            `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `
          ).concat(JSON.stringify(c.data)));
        return r.scheduler.schedule(function() {
          r.forward(c);
          var m = r._nextState(c);
          r.update(m, c);
        }), r._state;
      }, this.sendTo = function(u, f, c) {
        var m = r.parent && (f === xn.Parent || r.parent.id === f), p = m ? r.parent : Ae(f) ? f === xn.Internal ? r : r.children.get(f) || Lr.get(f) : O0(f) ? f : void 0;
        if (!p) {
          if (!m)
            throw new Error("Unable to send event to child '".concat(f, "' from service '").concat(r.id, "'."));
          return;
        }
        if ("machine" in p) {
          if (r.status !== rt.Stopped || r.parent !== p || // we need to send events to the parent from exit handlers of a machine that reached its final state
          r.state.done) {
            var h = $($({}, u), {
              name: u.name === sl ? "".concat(ar(r.id)) : u.name,
              origin: r.sessionId
            });
            !c && r.machine.config.predictableActionArguments ? r._outgoingQueue.push([p, h]) : p.send(h);
          }
        } else
          !c && r.machine.config.predictableActionArguments ? r._outgoingQueue.push([p, u.data]) : p.send(u.data);
      }, this._exec = function(u, f, c, m) {
        m === void 0 && (m = r.machine.options.actions);
        var p = u.exec || Po(u.type, m), h = Oe(p) ? p : p ? p.exec : u.exec;
        if (h)
          try {
            return h(f, c.data, r.machine.config.predictableActionArguments ? {
              action: u,
              _event: c
            } : {
              action: u,
              state: r.state,
              _event: c
            });
          } catch (be) {
            throw r.parent && r.parent.send({
              type: "xstate.error",
              data: be
            }), be;
          }
        switch (u.type) {
          case Cr: {
            var x = u;
            r.defer(x);
            break;
          }
          case Ci:
            var g = u;
            if (typeof g.delay == "number") {
              r.defer(g);
              return;
            } else
              g.to ? r.sendTo(g._event, g.to, c === Kn) : r.send(g._event);
            break;
          case al:
            r.cancel(u.sendId);
            break;
          case Mo: {
            if (r.status !== rt.Running)
              return;
            var v = u.activity;
            if (
              // in v4 with `predictableActionArguments` invokes are called eagerly when the `this.state` still points to the previous state
              !r.machine.config.predictableActionArguments && !r.state.activities[v.id || v.type]
            )
              break;
            if (v.type === Ne.Invoke) {
              var w = hf(v.src), k = r.machine.options.services ? r.machine.options.services[w.type] : void 0, A = v.id, F = v.data, j = "autoForward" in v ? v.autoForward : !!v.forward;
              if (!k)
                return;
              var R = F ? Do(F, f, c) : void 0;
              if (typeof k == "string")
                return;
              var z = Oe(k) ? k(f, c.data, {
                data: R,
                src: w,
                meta: v.meta
              }) : k;
              if (!z)
                return;
              var J = void 0;
              _r(z) && (z = R ? z.withContext(R) : z, J = {
                autoForward: j
              }), r.spawn(z, A, J);
            } else
              r.spawnActivity(v);
            break;
          }
          case la: {
            r.stopChild(u.activity.id);
            break;
          }
          case ua:
            var Y = u, D = Y.label, Z = Y.value;
            D ? r.logger(D, Z) : r.logger(Z);
            break;
        }
      };
      var i = $($({}, e.defaultOptions), n), o = i.clock, a = i.logger, s = i.parent, l = i.id, d = l !== void 0 ? l : t.id;
      this.id = d, this.logger = a, this.clock = o, this.parent = s, this.options = i, this.scheduler = new Pd({
        deferEvents: this.options.deferEvents
      }), this.sessionId = Lr.bookId();
    }
    return Object.defineProperty(e.prototype, "initialState", {
      get: function() {
        var t = this;
        return this._initialState ? this._initialState : rr(this, function() {
          return t._initialState = t.machine.initialState, t._initialState;
        });
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "state", {
      /**
       * @deprecated Use `.getSnapshot()` instead.
       */
      get: function() {
        return this._state;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.execute = function(t, n) {
      var r, i;
      try {
        for (var o = _e(t.actions), a = o.next(); !a.done; a = o.next()) {
          var s = a.value;
          this.exec(s, t, n);
        }
      } catch (l) {
        r = {
          error: l
        };
      } finally {
        try {
          a && !a.done && (i = o.return) && i.call(o);
        } finally {
          if (r)
            throw r.error;
        }
      }
    }, e.prototype.update = function(t, n) {
      var r, i, o, a, s, l, d, u, f = this;
      if (t._sessionid = this.sessionId, this._state = t, (!this.machine.config.predictableActionArguments || // this is currently required to execute initial actions as the `initialState` gets cached
      // we can't just recompute it (and execute actions while doing so) because we try to preserve identity of actors created within initial assigns
      n === Kn) && this.options.execute)
        this.execute(this.state);
      else
        for (var c = void 0; c = this._outgoingQueue.shift(); )
          c[0].send(c[1]);
      if (this.children.forEach(function(z) {
        f.state.children[z.id] = z;
      }), this.devTools && this.devTools.send(n.data, t), t.event)
        try {
          for (var m = _e(this.eventListeners), p = m.next(); !p.done; p = m.next()) {
            var h = p.value;
            h(t.event);
          }
        } catch (z) {
          r = {
            error: z
          };
        } finally {
          try {
            p && !p.done && (i = m.return) && i.call(m);
          } finally {
            if (r)
              throw r.error;
          }
        }
      try {
        for (var x = _e(this.listeners), g = x.next(); !g.done; g = x.next()) {
          var h = g.value;
          h(t, t.event);
        }
      } catch (z) {
        o = {
          error: z
        };
      } finally {
        try {
          g && !g.done && (a = x.return) && a.call(x);
        } finally {
          if (o)
            throw o.error;
        }
      }
      try {
        for (var v = _e(this.contextListeners), w = v.next(); !w.done; w = v.next()) {
          var k = w.value;
          k(this.state.context, this.state.history ? this.state.history.context : void 0);
        }
      } catch (z) {
        s = {
          error: z
        };
      } finally {
        try {
          w && !w.done && (l = v.return) && l.call(v);
        } finally {
          if (s)
            throw s.error;
        }
      }
      if (this.state.done) {
        var A = t.configuration.find(function(z) {
          return z.type === "final" && z.parent === f.machine;
        }), F = A && A.doneData ? Do(A.doneData, t.context, n) : void 0;
        this._doneEvent = ri(this.id, F);
        try {
          for (var j = _e(this.doneListeners), R = j.next(); !R.done; R = j.next()) {
            var h = R.value;
            h(this._doneEvent);
          }
        } catch (z) {
          d = {
            error: z
          };
        } finally {
          try {
            R && !R.done && (u = j.return) && u.call(j);
          } finally {
            if (d)
              throw d.error;
          }
        }
        this._stop(), this._stopChildren(), Lr.free(this.sessionId);
      }
    }, e.prototype.onTransition = function(t) {
      return this.listeners.add(t), this.status === rt.Running && t(this.state, this.state.event), this;
    }, e.prototype.subscribe = function(t, n, r) {
      var i = this, o = uo(t, n, r);
      this.listeners.add(o.next), this.status !== rt.NotStarted && o.next(this.state);
      var a = function() {
        i.doneListeners.delete(a), i.stopListeners.delete(a), o.complete();
      };
      return this.status === rt.Stopped ? o.complete() : (this.onDone(a), this.onStop(a)), {
        unsubscribe: function() {
          i.listeners.delete(o.next), i.doneListeners.delete(a), i.stopListeners.delete(a);
        }
      };
    }, e.prototype.onEvent = function(t) {
      return this.eventListeners.add(t), this;
    }, e.prototype.onSend = function(t) {
      return this.sendListeners.add(t), this;
    }, e.prototype.onChange = function(t) {
      return this.contextListeners.add(t), this;
    }, e.prototype.onStop = function(t) {
      return this.stopListeners.add(t), this;
    }, e.prototype.onDone = function(t) {
      return this.status === rt.Stopped && this._doneEvent ? t(this._doneEvent) : this.doneListeners.add(t), this;
    }, e.prototype.off = function(t) {
      return this.listeners.delete(t), this.eventListeners.delete(t), this.sendListeners.delete(t), this.stopListeners.delete(t), this.doneListeners.delete(t), this.contextListeners.delete(t), this;
    }, e.prototype.start = function(t) {
      var n = this;
      if (this.status === rt.Running)
        return this;
      this.machine._init(), Lr.register(this.sessionId, this), this.initialized = !0, this.status = rt.Running;
      var r = t === void 0 ? this.initialState : rr(this, function() {
        return W0(t) ? n.machine.resolveState(t) : n.machine.resolveState(Ft.from(t, n.machine.context));
      });
      return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
        n.update(r, Kn);
      }), this;
    }, e.prototype._stopChildren = function() {
      this.children.forEach(function(t) {
        Oe(t.stop) && t.stop();
      }), this.children.clear();
    }, e.prototype._stop = function() {
      var t, n, r, i, o, a, s, l, d, u;
      try {
        for (var f = _e(this.listeners), c = f.next(); !c.done; c = f.next()) {
          var m = c.value;
          this.listeners.delete(m);
        }
      } catch (j) {
        t = {
          error: j
        };
      } finally {
        try {
          c && !c.done && (n = f.return) && n.call(f);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var p = _e(this.stopListeners), h = p.next(); !h.done; h = p.next()) {
          var m = h.value;
          m(), this.stopListeners.delete(m);
        }
      } catch (j) {
        r = {
          error: j
        };
      } finally {
        try {
          h && !h.done && (i = p.return) && i.call(p);
        } finally {
          if (r)
            throw r.error;
        }
      }
      try {
        for (var x = _e(this.contextListeners), g = x.next(); !g.done; g = x.next()) {
          var m = g.value;
          this.contextListeners.delete(m);
        }
      } catch (j) {
        o = {
          error: j
        };
      } finally {
        try {
          g && !g.done && (a = x.return) && a.call(x);
        } finally {
          if (o)
            throw o.error;
        }
      }
      try {
        for (var v = _e(this.doneListeners), w = v.next(); !w.done; w = v.next()) {
          var m = w.value;
          this.doneListeners.delete(m);
        }
      } catch (j) {
        s = {
          error: j
        };
      } finally {
        try {
          w && !w.done && (l = v.return) && l.call(v);
        } finally {
          if (s)
            throw s.error;
        }
      }
      if (!this.initialized)
        return this;
      this.initialized = !1, this.status = rt.Stopped, this._initialState = void 0;
      try {
        for (var k = _e(Object.keys(this.delayedEventsMap)), A = k.next(); !A.done; A = k.next()) {
          var F = A.value;
          this.clock.clearTimeout(this.delayedEventsMap[F]);
        }
      } catch (j) {
        d = {
          error: j
        };
      } finally {
        try {
          A && !A.done && (u = k.return) && u.call(k);
        } finally {
          if (d)
            throw d.error;
        }
      }
      this.scheduler.clear(), this.scheduler = new Pd({
        deferEvents: this.options.deferEvents
      });
    }, e.prototype.stop = function() {
      var t = this, n = this.scheduler;
      return this._stop(), n.schedule(function() {
        var r = at({
          type: "xstate.stop"
        }), i = rr(t, function() {
          var o = Ge(ze([], Se(t.state.configuration), !1).sort(function(u, f) {
            return f.order - u.order;
          }).map(function(u) {
            return Yt(u.onExit, t.machine.options.actions);
          })), a = Se(hi(t.machine, t.state, t.state.context, r, [{
            type: "exit",
            actions: o
          }], t.machine.config.predictableActionArguments ? t._exec : void 0, t.machine.config.predictableActionArguments || t.machine.config.preserveActionOrder), 2), s = a[0], l = a[1], d = new Ft({
            value: t.state.value,
            context: l,
            _event: r,
            _sessionid: t.sessionId,
            historyValue: void 0,
            history: t.state,
            actions: s.filter(function(u) {
              return !fs(u);
            }),
            activities: {},
            events: [],
            configuration: [],
            transitions: [],
            children: {},
            done: t.state.done,
            tags: t.state.tags,
            machine: t.machine
          });
          return d.changed = !0, d;
        });
        t.update(i, r), t._stopChildren(), Lr.free(t.sessionId);
      }), this;
    }, e.prototype.batch = function(t) {
      var n = this;
      if (!(this.status === rt.NotStarted && this.options.deferEvents)) {
        if (this.status !== rt.Running)
          throw new Error(
            // tslint:disable-next-line:max-line-length
            "".concat(t.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.')
          );
      }
      if (t.length) {
        var r = !!this.machine.config.predictableActionArguments && this._exec;
        this.scheduler.schedule(function() {
          var i, o, a = n.state, s = !1, l = [], d = function(m) {
            var p = at(m);
            n.forward(p), a = rr(n, function() {
              return n.machine.transition(a, p, void 0, r || void 0);
            }), l.push.apply(l, ze([], Se(n.machine.config.predictableActionArguments ? a.actions : a.actions.map(function(h) {
              return Y0(h, a);
            })), !1)), s = s || !!a.changed;
          };
          try {
            for (var u = _e(t), f = u.next(); !f.done; f = u.next()) {
              var c = f.value;
              d(c);
            }
          } catch (m) {
            i = {
              error: m
            };
          } finally {
            try {
              f && !f.done && (o = u.return) && o.call(u);
            } finally {
              if (i)
                throw i.error;
            }
          }
          a.changed = s, a.actions = l, n.update(a, at(t[t.length - 1]));
        });
      }
    }, e.prototype.sender = function(t) {
      return this.send.bind(this, t);
    }, e.prototype._nextState = function(t, n) {
      var r = this;
      n === void 0 && (n = !!this.machine.config.predictableActionArguments && this._exec);
      var i = at(t);
      if (i.name.indexOf(ds) === 0 && !this.state.nextEvents.some(function(a) {
        return a.indexOf(ds) === 0;
      }))
        throw i.data.data;
      var o = rr(this, function() {
        return r.machine.transition(r.state, i, void 0, n || void 0);
      });
      return o;
    }, e.prototype.nextState = function(t) {
      return this._nextState(t, !1);
    }, e.prototype.forward = function(t) {
      var n, r;
      try {
        for (var i = _e(this.forwardTo), o = i.next(); !o.done; o = i.next()) {
          var a = o.value, s = this.children.get(a);
          if (!s)
            throw new Error("Unable to forward event '".concat(t, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(a, "'."));
          s.send(t);
        }
      } catch (l) {
        n = {
          error: l
        };
      } finally {
        try {
          o && !o.done && (r = i.return) && r.call(i);
        } finally {
          if (n)
            throw n.error;
        }
      }
    }, e.prototype.defer = function(t) {
      var n = this, r = this.clock.setTimeout(function() {
        "to" in t && t.to ? n.sendTo(t._event, t.to, !0) : n.send(t._event);
      }, t.delay);
      t.id && (this.delayedEventsMap[t.id] = r);
    }, e.prototype.cancel = function(t) {
      this.clock.clearTimeout(this.delayedEventsMap[t]), delete this.delayedEventsMap[t];
    }, e.prototype.exec = function(t, n, r) {
      r === void 0 && (r = this.machine.options.actions), this._exec(t, n.context, n._event, r);
    }, e.prototype.removeChild = function(t) {
      var n;
      this.children.delete(t), this.forwardTo.delete(t), (n = this.state) === null || n === void 0 || delete n.children[t];
    }, e.prototype.stopChild = function(t) {
      var n = this.children.get(t);
      n && (this.removeChild(t), Oe(n.stop) && n.stop());
    }, e.prototype.spawn = function(t, n, r) {
      if (this.status !== rt.Running)
        return Cf(t, n);
      if (Md(t))
        return this.spawnPromise(Promise.resolve(t), n);
      if (Oe(t))
        return this.spawnCallback(t, n);
      if (j0(t))
        return this.spawnActor(t, n);
      if (S0(t))
        return this.spawnObservable(t, n);
      if (_r(t))
        return this.spawnMachine(t, $($({}, r), {
          id: n
        }));
      if (w0(t))
        return this.spawnBehavior(t, n);
      throw new Error('Unable to spawn entity "'.concat(n, '" of type "').concat(typeof t, '".'));
    }, e.prototype.spawnMachine = function(t, n) {
      var r = this;
      n === void 0 && (n = {});
      var i = new e(t, $($({}, this.options), {
        parent: this,
        id: n.id || t.id
      })), o = $($({}, Q0), n);
      o.sync && i.onTransition(function(s) {
        r.send(ca, {
          state: s,
          id: i.id
        });
      });
      var a = i;
      return this.children.set(i.id, a), o.autoForward && this.forwardTo.add(i.id), i.onDone(function(s) {
        r.removeChild(i.id), r.send(at(s, {
          origin: i.id
        }));
      }).start(), a;
    }, e.prototype.spawnBehavior = function(t, n) {
      var r = Z0(t, {
        id: n,
        parent: this
      });
      return this.children.set(n, r), r;
    }, e.prototype.spawnPromise = function(t, n) {
      var r, i = this, o = !1, a;
      t.then(function(l) {
        o || (a = l, i.removeChild(n), i.send(at(ri(n, l), {
          origin: n
        })));
      }, function(l) {
        if (!o) {
          i.removeChild(n);
          var d = ar(n, l);
          try {
            i.send(at(d, {
              origin: n
            }));
          } catch {
            i.devTools && i.devTools.send(d, i.state), i.machine.strict && i.stop();
          }
        }
      });
      var s = (r = {
        id: n,
        send: function() {
        },
        subscribe: function(l, d, u) {
          var f = uo(l, d, u), c = !1;
          return t.then(function(m) {
            c || (f.next(m), !c && f.complete());
          }, function(m) {
            c || f.error(m);
          }), {
            unsubscribe: function() {
              return c = !0;
            }
          };
        },
        stop: function() {
          o = !0;
        },
        toJSON: function() {
          return {
            id: n
          };
        },
        getSnapshot: function() {
          return a;
        }
      }, r[mn] = function() {
        return this;
      }, r);
      return this.children.set(n, s), s;
    }, e.prototype.spawnCallback = function(t, n) {
      var r, i = this, o = !1, a = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), l, d = function(c) {
        l = c, s.forEach(function(m) {
          return m(c);
        }), !o && i.send(at(c, {
          origin: n
        }));
      }, u;
      try {
        u = t(d, function(c) {
          a.add(c);
        });
      } catch (c) {
        this.send(ar(n, c));
      }
      if (Md(u))
        return this.spawnPromise(u, n);
      var f = (r = {
        id: n,
        send: function(c) {
          return a.forEach(function(m) {
            return m(c);
          });
        },
        subscribe: function(c) {
          var m = uo(c);
          return s.add(m.next), {
            unsubscribe: function() {
              s.delete(m.next);
            }
          };
        },
        stop: function() {
          o = !0, Oe(u) && u();
        },
        toJSON: function() {
          return {
            id: n
          };
        },
        getSnapshot: function() {
          return l;
        }
      }, r[mn] = function() {
        return this;
      }, r);
      return this.children.set(n, f), f;
    }, e.prototype.spawnObservable = function(t, n) {
      var r, i = this, o, a = t.subscribe(function(l) {
        o = l, i.send(at(l, {
          origin: n
        }));
      }, function(l) {
        i.removeChild(n), i.send(at(ar(n, l), {
          origin: n
        }));
      }, function() {
        i.removeChild(n), i.send(at(ri(n), {
          origin: n
        }));
      }), s = (r = {
        id: n,
        send: function() {
        },
        subscribe: function(l, d, u) {
          return t.subscribe(l, d, u);
        },
        stop: function() {
          return a.unsubscribe();
        },
        getSnapshot: function() {
          return o;
        },
        toJSON: function() {
          return {
            id: n
          };
        }
      }, r[mn] = function() {
        return this;
      }, r);
      return this.children.set(n, s), s;
    }, e.prototype.spawnActor = function(t, n) {
      return this.children.set(n, t), t;
    }, e.prototype.spawnActivity = function(t) {
      var n = this.machine.options && this.machine.options.activities ? this.machine.options.activities[t.type] : void 0;
      if (n) {
        var r = n(this.state.context, t);
        this.spawnEffect(t.id, r);
      }
    }, e.prototype.spawnEffect = function(t, n) {
      var r;
      this.children.set(t, (r = {
        id: t,
        send: function() {
        },
        subscribe: function() {
          return {
            unsubscribe: function() {
            }
          };
        },
        stop: n || void 0,
        getSnapshot: function() {
        },
        toJSON: function() {
          return {
            id: t
          };
        }
      }, r[mn] = function() {
        return this;
      }, r));
    }, e.prototype.attachDev = function() {
      var t = ul();
      if (this.options.devTools && t) {
        if (t.__REDUX_DEVTOOLS_EXTENSION__) {
          var n = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
          this.devTools = t.__REDUX_DEVTOOLS_EXTENSION__.connect($($({
            name: this.id,
            autoPause: !0,
            stateSanitizer: function(r) {
              return {
                value: r.value,
                context: r.context,
                actions: r.actions
              };
            }
          }, n), {
            features: $({
              jump: !1,
              skip: !1
            }, n ? n.features : void 0)
          }), this.machine), this.devTools.init(this.state);
        }
        J0(this);
      }
    }, e.prototype.toJSON = function() {
      return {
        id: this.id
      };
    }, e.prototype[mn] = function() {
      return this;
    }, e.prototype.getSnapshot = function() {
      return this.status === rt.NotStarted ? this.initialState : this._state;
    }, e.defaultOptions = {
      execute: !0,
      deferEvents: !0,
      clock: {
        setTimeout: function(t, n) {
          return setTimeout(t, n);
        },
        clearTimeout: function(t) {
          return clearTimeout(t);
        }
      },
      logger: /* @__PURE__ */ console.log.bind(console),
      devTools: !1
    }, e.interpret = Df, e;
  }()
);
function Df(e, t) {
  var n = new eh(e, t);
  return n;
}
function th(e) {
  if (typeof e == "string") {
    var t = {
      type: e
    };
    return t.toString = function() {
      return e;
    }, t;
  }
  return e;
}
function Wi(e) {
  return $($({
    type: No
  }, e), {
    toJSON: function() {
      e.onDone, e.onError;
      var t = ol(e, ["onDone", "onError"]);
      return $($({}, t), {
        type: No,
        src: th(e.src)
      });
    }
  });
}
var Yi = "", ps = "#", Ra = "*", tr = {}, nr = function(e) {
  return e[0] === ps;
}, nh = function() {
  return {
    actions: {},
    guards: {},
    services: {},
    activities: {},
    delays: {}
  };
}, rh = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n, r, i) {
      r === void 0 && (r = "context" in t ? t.context : void 0);
      var o = this, a;
      this.config = t, this._context = r, this.order = -1, this.__xstatenode = !0, this.__cache = {
        events: void 0,
        relativeValue: /* @__PURE__ */ new Map(),
        initialStateValue: void 0,
        initialState: void 0,
        on: void 0,
        transitions: void 0,
        candidates: {},
        delayedTransitions: void 0
      }, this.idMap = {}, this.tags = [], this.options = Object.assign(nh(), n), this.parent = i == null ? void 0 : i.parent, this.key = this.config.key || (i == null ? void 0 : i.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : uf), this.id = this.config.id || ze([this.machine.key], Se(this.path), !1).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (a = this.config.schema) !== null && a !== void 0 ? a : {}, this.description = this.config.description, this.initial = this.config.initial, this.states = this.config.states ? jr(this.config.states, function(d, u) {
        var f, c = new e(d, {}, void 0, {
          parent: o,
          key: u
        });
        return Object.assign(o.idMap, $((f = {}, f[c.id] = c, f), c.idMap)), c;
      }) : tr;
      var s = 0;
      function l(d) {
        var u, f;
        d.order = s++;
        try {
          for (var c = _e(Af(d)), m = c.next(); !m.done; m = c.next()) {
            var p = m.value;
            l(p);
          }
        } catch (h) {
          u = {
            error: h
          };
        } finally {
          try {
            m && !m.done && (f = c.return) && f.call(c);
          } finally {
            if (u)
              throw u.error;
          }
        }
      }
      l(this), this.history = this.config.history === !0 ? "shallow" : this.config.history || !1, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(d) {
        var u = d.event;
        return u === Yi;
      }) : Yi in this.config.on : !1), this.strict = !!this.config.strict, this.onEntry = Mt(this.config.entry || this.config.onEntry).map(function(d) {
        return wr(d);
      }), this.onExit = Mt(this.config.exit || this.config.onExit).map(function(d) {
        return wr(d);
      }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = Mt(this.config.invoke).map(function(d, u) {
        var f, c;
        if (_r(d)) {
          var m = Gi(o.id, u);
          return o.machine.options.services = $((f = {}, f[m] = d, f), o.machine.options.services), Wi({
            src: m,
            id: m
          });
        } else if (Ae(d.src)) {
          var m = d.id || Gi(o.id, u);
          return Wi($($({}, d), {
            id: m,
            src: d.src
          }));
        } else if (_r(d.src) || Oe(d.src)) {
          var m = d.id || Gi(o.id, u);
          return o.machine.options.services = $((c = {}, c[m] = d.src, c), o.machine.options.services), Wi($($({
            id: m
          }, d), {
            src: m
          }));
        } else {
          var p = d.src;
          return Wi($($({
            id: Gi(o.id, u)
          }, d), {
            src: p
          }));
        }
      }), this.activities = Mt(this.config.activities).concat(this.invoke).map(function(d) {
        return ma(d);
      }), this.transition = this.transition.bind(this), this.tags = Mt(this.config.tags);
    }
    return e.prototype._init = function() {
      this.__cache.transitions || Mf(this).forEach(function(t) {
        return t.on;
      });
    }, e.prototype.withConfig = function(t, n) {
      var r = this.options, i = r.actions, o = r.activities, a = r.guards, s = r.services, l = r.delays;
      return new e(this.config, {
        actions: $($({}, i), t.actions),
        activities: $($({}, o), t.activities),
        guards: $($({}, a), t.guards),
        services: $($({}, s), t.services),
        delays: $($({}, l), t.delays)
      }, n ?? this.context);
    }, e.prototype.withContext = function(t) {
      return new e(this.config, this.options, t);
    }, Object.defineProperty(e.prototype, "context", {
      get: function() {
        return Oe(this._context) ? this._context() : this._context;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "definition", {
      /**
       * The well-structured state node definition.
       */
      get: function() {
        return {
          id: this.id,
          key: this.key,
          version: this.version,
          context: this.context,
          type: this.type,
          initial: this.initial,
          history: this.history,
          states: jr(this.states, function(t) {
            return t.definition;
          }),
          on: this.on,
          transitions: this.transitions,
          entry: this.onEntry,
          exit: this.onExit,
          activities: this.activities || [],
          meta: this.meta,
          order: this.order || -1,
          data: this.doneData,
          invoke: this.invoke,
          description: this.description,
          tags: this.tags
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.toJSON = function() {
      return this.definition;
    }, Object.defineProperty(e.prototype, "on", {
      /**
       * The mapping of events to transitions.
       */
      get: function() {
        if (this.__cache.on)
          return this.__cache.on;
        var t = this.transitions;
        return this.__cache.on = t.reduce(function(n, r) {
          return n[r.eventType] = n[r.eventType] || [], n[r.eventType].push(r), n;
        }, {});
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "after", {
      get: function() {
        return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "transitions", {
      /**
       * All the transitions that can be taken from this state node.
       */
      get: function() {
        return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getCandidates = function(t) {
      if (this.__cache.candidates[t])
        return this.__cache.candidates[t];
      var n = t === Yi, r = this.transitions.filter(function(i) {
        var o = i.eventType === t;
        return n ? o : o || i.eventType === Ra;
      });
      return this.__cache.candidates[t] = r, r;
    }, e.prototype.getDelayedTransitions = function() {
      var t = this, n = this.config.after;
      if (!n)
        return [];
      var r = function(o, a) {
        var s = Oe(o) ? "".concat(t.id, ":delay[").concat(a, "]") : o, l = Of(s, t.id);
        return t.onEntry.push(Mr(l, {
          delay: o
        })), t.onExit.push(wf(l)), l;
      }, i = Ar(n) ? n.map(function(o, a) {
        var s = r(o.delay, a);
        return $($({}, o), {
          event: s
        });
      }) : Ge(Object.keys(n).map(function(o, a) {
        var s = n[o], l = Ae(s) ? {
          target: s
        } : s, d = isNaN(+o) ? o : +o, u = r(d, a);
        return Mt(l).map(function(f) {
          return $($({}, f), {
            event: u,
            delay: d
          });
        });
      }));
      return i.map(function(o) {
        var a = o.delay;
        return $($({}, t.formatTransition(o)), {
          delay: a
        });
      });
    }, e.prototype.getStateNodes = function(t) {
      var n, r = this;
      if (!t)
        return [];
      var i = t instanceof Ft ? t.value : ni(t, this.delimiter);
      if (Ae(i)) {
        var o = this.getStateNode(i).initial;
        return o !== void 0 ? this.getStateNodes((n = {}, n[i] = o, n)) : [this, this.states[i]];
      }
      var a = Object.keys(i), s = [this];
      return s.push.apply(s, ze([], Se(Ge(a.map(function(l) {
        return r.getStateNode(l).getStateNodes(i[l]);
      }))), !1)), s;
    }, e.prototype.handles = function(t) {
      var n = cf(t);
      return this.events.includes(n);
    }, e.prototype.resolveState = function(t) {
      var n = t instanceof Ft ? t : Ft.create(t), r = Array.from(Hr([], this.getStateNodes(n.value)));
      return new Ft($($({}, n), {
        value: this.resolve(n.value),
        configuration: r,
        done: co(r, this),
        tags: Dd(r),
        machine: this.machine
      }));
    }, e.prototype.transitionLeafNode = function(t, n, r) {
      var i = this.getStateNode(t), o = i.next(n, r);
      return !o || !o.transitions.length ? this.next(n, r) : o;
    }, e.prototype.transitionCompoundNode = function(t, n, r) {
      var i = Object.keys(t), o = this.getStateNode(i[0]), a = o._transition(t[i[0]], n, r);
      return !a || !a.transitions.length ? this.next(n, r) : a;
    }, e.prototype.transitionParallelNode = function(t, n, r) {
      var i, o, a = {};
      try {
        for (var s = _e(Object.keys(t)), l = s.next(); !l.done; l = s.next()) {
          var d = l.value, u = t[d];
          if (u) {
            var f = this.getStateNode(d), c = f._transition(u, n, r);
            c && (a[d] = c);
          }
        }
      } catch (g) {
        i = {
          error: g
        };
      } finally {
        try {
          l && !l.done && (o = s.return) && o.call(s);
        } finally {
          if (i)
            throw i.error;
        }
      }
      var m = Object.keys(a).map(function(g) {
        return a[g];
      }), p = Ge(m.map(function(g) {
        return g.transitions;
      })), h = m.some(function(g) {
        return g.transitions.length > 0;
      });
      if (!h)
        return this.next(n, r);
      var x = Ge(Object.keys(a).map(function(g) {
        return a[g].configuration;
      }));
      return {
        transitions: p,
        exitSet: Ge(m.map(function(g) {
          return g.exitSet;
        })),
        configuration: x,
        source: n,
        actions: Ge(Object.keys(a).map(function(g) {
          return a[g].actions;
        }))
      };
    }, e.prototype._transition = function(t, n, r) {
      return Ae(t) ? this.transitionLeafNode(t, n, r) : Object.keys(t).length === 1 ? this.transitionCompoundNode(t, n, r) : this.transitionParallelNode(t, n, r);
    }, e.prototype.getTransitionData = function(t, n) {
      return this._transition(t.value, t, at(n));
    }, e.prototype.next = function(t, n) {
      var r, i, o = this, a = n.name, s = [], l = [], d;
      try {
        for (var u = _e(this.getCandidates(a)), f = u.next(); !f.done; f = u.next()) {
          var c = f.value, m = c.cond, p = c.in, h = t.context, x = p ? Ae(p) && nr(p) ? (
            // Check if in state by ID
            t.matches(ni(this.getStateNodeById(p).path, this.delimiter))
          ) : (
            // Check if in state by relative grandparent
            ll(ni(p, this.delimiter), g0(this.path.slice(0, -2))(t.value))
          ) : !0, g = !1;
          try {
            g = !m || bf(this.machine, m, h, n, t);
          } catch (k) {
            throw new Error("Unable to evaluate guard '".concat(m.name || m.type, "' in transition for event '").concat(a, "' in state node '").concat(this.id, `':
`).concat(k.message));
          }
          if (g && x) {
            c.target !== void 0 && (l = c.target), s.push.apply(s, ze([], Se(c.actions), !1)), d = c;
            break;
          }
        }
      } catch (k) {
        r = {
          error: k
        };
      } finally {
        try {
          f && !f.done && (i = u.return) && i.call(u);
        } finally {
          if (r)
            throw r.error;
        }
      }
      if (d) {
        if (!l.length)
          return {
            transitions: [d],
            exitSet: [],
            configuration: t.value ? [this] : [],
            source: t,
            actions: s
          };
        var v = Ge(l.map(function(k) {
          return o.getRelativeStateNodes(k, t.historyValue);
        })), w = !!d.internal;
        return {
          transitions: [d],
          exitSet: w ? [] : Ge(l.map(function(k) {
            return o.getPotentiallyReenteringNodes(k);
          })),
          configuration: v,
          source: t,
          actions: s
        };
      }
    }, e.prototype.getPotentiallyReenteringNodes = function(t) {
      if (this.order < t.order)
        return [this];
      for (var n = [], r = this, i = t; r && r !== i; )
        n.push(r), r = r.parent;
      return r !== i ? [] : (n.push(i), n);
    }, e.prototype.getActions = function(t, n, r, i, o, a, s) {
      var l, d, u, f, c = this, m = a ? Hr([], this.getStateNodes(a.value)) : [], p = /* @__PURE__ */ new Set();
      try {
        for (var h = _e(Array.from(t).sort(function(Y, D) {
          return Y.order - D.order;
        })), x = h.next(); !x.done; x = h.next()) {
          var g = x.value;
          (!Br(m, g) || Br(r.exitSet, g) || g.parent && p.has(g.parent)) && p.add(g);
        }
      } catch (Y) {
        l = {
          error: Y
        };
      } finally {
        try {
          x && !x.done && (d = h.return) && d.call(h);
        } finally {
          if (l)
            throw l.error;
        }
      }
      try {
        for (var v = _e(m), w = v.next(); !w.done; w = v.next()) {
          var g = w.value;
          (!Br(t, g) || Br(r.exitSet, g.parent)) && r.exitSet.push(g);
        }
      } catch (Y) {
        u = {
          error: Y
        };
      } finally {
        try {
          w && !w.done && (f = v.return) && f.call(v);
        } finally {
          if (u)
            throw u.error;
        }
      }
      r.exitSet.sort(function(Y, D) {
        return D.order - Y.order;
      });
      var k = Array.from(p).sort(function(Y, D) {
        return Y.order - D.order;
      }), A = new Set(r.exitSet), F = Ge(k.map(function(Y) {
        var D = [];
        if (Y.type !== "final")
          return D;
        var Z = Y.parent;
        if (!Z.parent)
          return D;
        D.push(
          Ur(Y.id, Y.doneData),
          // TODO: deprecate - final states should not emit done events for their own state.
          Ur(Z.id, Y.doneData ? Do(Y.doneData, i, o) : void 0)
        );
        var be = Z.parent;
        return be.type === "parallel" && vi(be).every(function(Le) {
          return co(r.configuration, Le);
        }) && D.push(Ur(be.id)), D;
      })), j = k.map(function(Y) {
        var D = Y.onEntry, Z = Y.activities.map(function(be) {
          return xf(be);
        });
        return {
          type: "entry",
          actions: Yt(s ? ze(ze([], Se(D), !1), Se(Z), !1) : ze(ze([], Se(Z), !1), Se(D), !1), c.machine.options.actions)
        };
      }).concat({
        type: "state_done",
        actions: F.map(function(Y) {
          return vf(Y);
        })
      }), R = Array.from(A).map(function(Y) {
        return {
          type: "exit",
          actions: Yt(ze(ze([], Se(Y.onExit), !1), Se(Y.activities.map(function(D) {
            return kf(D);
          })), !1), c.machine.options.actions)
        };
      }), z = R.concat({
        type: "transition",
        actions: Yt(r.actions, this.machine.options.actions)
      }).concat(j);
      if (n) {
        var J = Yt(Ge(ze([], Se(t), !1).sort(function(Y, D) {
          return D.order - Y.order;
        }).map(function(Y) {
          return Y.onExit;
        })), this.machine.options.actions).filter(function(Y) {
          return !fs(Y);
        });
        return z.concat({
          type: "stop",
          actions: J
        });
      }
      return z;
    }, e.prototype.transition = function(t, n, r, i) {
      t === void 0 && (t = this.initialState);
      var o = at(n), a;
      if (t instanceof Ft)
        a = r === void 0 ? t : this.resolveState(Ft.from(t, r));
      else {
        var s = Ae(t) ? this.resolve(Io(this.getResolvedPath(t))) : this.resolve(t), l = r ?? this.machine.context;
        a = this.resolveState(Ft.from(s, l));
      }
      if (this.strict && !this.events.includes(o.name) && !_0(o.name))
        throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(o.name, "'"));
      var d = this._transition(a.value, a, o) || {
        transitions: [],
        configuration: [],
        exitSet: [],
        source: a,
        actions: []
      }, u = Hr([], this.getStateNodes(a.value)), f = d.configuration.length ? Hr(u, d.configuration) : u;
      return d.configuration = ze([], Se(f), !1), this.resolveTransition(d, a, a.context, i, o);
    }, e.prototype.resolveRaisedTransition = function(t, n, r, i) {
      var o, a = t.actions;
      return t = this.transition(t, n, void 0, i), t._event = r, t.event = r.data, (o = t.actions).unshift.apply(o, ze([], Se(a), !1)), t;
    }, e.prototype.resolveTransition = function(t, n, r, i, o) {
      var a, s, l, d, u = this;
      o === void 0 && (o = Kn);
      var f = t.configuration, c = !n || t.transitions.length > 0, m = c ? t.configuration : n ? n.configuration : [], p = co(m, this), h = c ? H0(this.machine, f) : void 0, x = n ? n.historyValue ? n.historyValue : t.source ? this.machine.historyValue(n.value) : void 0 : void 0, g = this.getActions(new Set(m), p, t, r, o, n, i), v = n ? $({}, n.activities) : {};
      try {
        for (var w = _e(g), k = w.next(); !k.done; k = w.next()) {
          var A = k.value;
          try {
            for (var F = (l = void 0, _e(A.actions)), j = F.next(); !j.done; j = F.next()) {
              var R = j.value;
              R.type === Mo ? v[R.activity.id || R.activity.type] = R : R.type === la && (v[R.activity.id || R.activity.type] = !1);
            }
          } catch (re) {
            l = {
              error: re
            };
          } finally {
            try {
              j && !j.done && (d = F.return) && d.call(F);
            } finally {
              if (l)
                throw l.error;
            }
          }
        }
      } catch (re) {
        a = {
          error: re
        };
      } finally {
        try {
          k && !k.done && (s = w.return) && s.call(w);
        } finally {
          if (a)
            throw a.error;
        }
      }
      var z = Se(hi(this, n, r, o, g, i, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2), J = z[0], Y = z[1], D = Se(x0(J, fs), 2), Z = D[0], be = D[1], Le = J.filter(function(re) {
        var we;
        return re.type === Mo && ((we = re.activity) === null || we === void 0 ? void 0 : we.type) === No;
      }), he = Le.reduce(function(re, we) {
        return re[we.activity.id] = z0(we.activity, u.machine, Y, o), re;
      }, n ? $({}, n.children) : {}), L = new Ft({
        value: h || n.value,
        context: Y,
        _event: o,
        // Persist _sessionid between states
        _sessionid: n ? n._sessionid : null,
        historyValue: h ? x ? k0(x, h) : void 0 : n ? n.historyValue : void 0,
        history: !h || t.source ? n : void 0,
        actions: h ? be : [],
        activities: h ? v : n ? n.activities : {},
        events: [],
        configuration: m,
        transitions: t.transitions,
        children: he,
        done: p,
        tags: Dd(m),
        machine: this
      }), X = r !== Y;
      L.changed = o.name === ca || X;
      var ge = L.history;
      ge && delete ge.history;
      var De = !p && (this._transient || f.some(function(re) {
        return re._transient;
      }));
      if (!c && (!De || o.name === Yi))
        return L;
      var Ee = L;
      if (!p)
        for (De && (Ee = this.resolveRaisedTransition(Ee, {
          type: af
        }, o, i)); Z.length; ) {
          var Te = Z.shift();
          Ee = this.resolveRaisedTransition(Ee, Te._event, o, i);
        }
      var Tt = Ee.changed || (ge ? !!Ee.actions.length || X || typeof ge.value != typeof Ee.value || !If(Ee.value, ge.value) : void 0);
      return Ee.changed = Tt, Ee.history = ge, Ee;
    }, e.prototype.getStateNode = function(t) {
      if (nr(t))
        return this.machine.getStateNodeById(t);
      if (!this.states)
        throw new Error("Unable to retrieve child state '".concat(t, "' from '").concat(this.id, "'; no child states exist."));
      var n = this.states[t];
      if (!n)
        throw new Error("Child state '".concat(t, "' does not exist on '").concat(this.id, "'"));
      return n;
    }, e.prototype.getStateNodeById = function(t) {
      var n = nr(t) ? t.slice(ps.length) : t;
      if (n === this.id)
        return this;
      var r = this.machine.idMap[n];
      if (!r)
        throw new Error("Child state node '#".concat(n, "' does not exist on machine '").concat(this.id, "'"));
      return r;
    }, e.prototype.getStateNodeByPath = function(t) {
      if (typeof t == "string" && nr(t))
        try {
          return this.getStateNodeById(t.slice(1));
        } catch {
        }
      for (var n = cs(t, this.delimiter).slice(), r = this; n.length; ) {
        var i = n.shift();
        if (!i.length)
          break;
        r = r.getStateNode(i);
      }
      return r;
    }, e.prototype.resolve = function(t) {
      var n, r = this;
      if (!t)
        return this.initialStateValue || tr;
      switch (this.type) {
        case "parallel":
          return jr(this.initialStateValue, function(o, a) {
            return o ? r.getStateNode(a).resolve(t[a] || o) : tr;
          });
        case "compound":
          if (Ae(t)) {
            var i = this.getStateNode(t);
            return i.type === "parallel" || i.type === "compound" ? (n = {}, n[t] = i.initialStateValue, n) : t;
          }
          return Object.keys(t).length ? jr(t, function(o, a) {
            return o ? r.getStateNode(a).resolve(o) : tr;
          }) : this.initialStateValue || {};
        default:
          return t || tr;
      }
    }, e.prototype.getResolvedPath = function(t) {
      if (nr(t)) {
        var n = this.machine.idMap[t.slice(ps.length)];
        if (!n)
          throw new Error("Unable to find state node '".concat(t, "'"));
        return n.path;
      }
      return cs(t, this.delimiter);
    }, Object.defineProperty(e.prototype, "initialStateValue", {
      get: function() {
        var t;
        if (this.__cache.initialStateValue)
          return this.__cache.initialStateValue;
        var n;
        if (this.type === "parallel")
          n = Ad(this.states, function(r) {
            return r.initialStateValue || tr;
          }, function(r) {
            return r.type !== "history";
          });
        else if (this.initial !== void 0) {
          if (!this.states[this.initial])
            throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
          n = Ro(this.states[this.initial]) ? this.initial : (t = {}, t[this.initial] = this.states[this.initial].initialStateValue, t);
        } else
          n = {};
        return this.__cache.initialStateValue = n, this.__cache.initialStateValue;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getInitialState = function(t, n) {
      this._init();
      var r = this.getStateNodes(t);
      return this.resolveTransition({
        configuration: r,
        exitSet: [],
        transitions: [],
        source: void 0,
        actions: []
      }, void 0, n ?? this.machine.context, void 0);
    }, Object.defineProperty(e.prototype, "initialState", {
      /**
       * The initial State instance, which includes all actions to be executed from
       * entering the initial state.
       */
      get: function() {
        var t = this.initialStateValue;
        if (!t)
          throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
        return this.getInitialState(t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "target", {
      /**
       * The target state value of the history state node, if it exists. This represents the
       * default state value to transition to if no history value exists yet.
       */
      get: function() {
        var t;
        if (this.type === "history") {
          var n = this.config;
          Ae(n.target) ? t = nr(n.target) ? Io(this.machine.getStateNodeById(n.target).path.slice(this.path.length - 1)) : n.target : t = n.target;
        }
        return t;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getRelativeStateNodes = function(t, n, r) {
      return r === void 0 && (r = !0), r ? t.type === "history" ? t.resolveHistory(n) : t.initialStateNodes : [t];
    }, Object.defineProperty(e.prototype, "initialStateNodes", {
      get: function() {
        var t = this;
        if (Ro(this))
          return [this];
        if (this.type === "compound" && !this.initial)
          return [this];
        var n = lo(this.initialStateValue);
        return Ge(n.map(function(r) {
          return t.getFromRelativePath(r);
        }));
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getFromRelativePath = function(t) {
      if (!t.length)
        return [this];
      var n = Se(t), r = n[0], i = n.slice(1);
      if (!this.states)
        throw new Error("Cannot retrieve subPath '".concat(r, "' from node with no states"));
      var o = this.getStateNode(r);
      if (o.type === "history")
        return o.resolveHistory();
      if (!this.states[r])
        throw new Error("Child state '".concat(r, "' does not exist on '").concat(this.id, "'"));
      return this.states[r].getFromRelativePath(i);
    }, e.prototype.historyValue = function(t) {
      if (Object.keys(this.states).length)
        return {
          current: t || this.initialStateValue,
          states: Ad(this.states, function(n, r) {
            if (!t)
              return n.historyValue();
            var i = Ae(t) ? void 0 : t[r];
            return n.historyValue(i || n.initialStateValue);
          }, function(n) {
            return !n.history;
          })
        };
    }, e.prototype.resolveHistory = function(t) {
      var n = this;
      if (this.type !== "history")
        return [this];
      var r = this.parent;
      if (!t) {
        var i = this.target;
        return i ? Ge(lo(i).map(function(a) {
          return r.getFromRelativePath(a);
        })) : r.initialStateNodes;
      }
      var o = y0(r.path, "states")(t).current;
      return Ae(o) ? [r.getStateNode(o)] : Ge(lo(o).map(function(a) {
        return n.history === "deep" ? r.getFromRelativePath(a) : [r.states[a[0]]];
      }));
    }, Object.defineProperty(e.prototype, "stateIds", {
      /**
       * All the state node IDs of this state node and its descendant state nodes.
       */
      get: function() {
        var t = this, n = Ge(Object.keys(this.states).map(function(r) {
          return t.states[r].stateIds;
        }));
        return [this.id].concat(n);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "events", {
      /**
       * All the event types accepted by this state node and its descendants.
       */
      get: function() {
        var t, n, r, i;
        if (this.__cache.events)
          return this.__cache.events;
        var o = this.states, a = new Set(this.ownEvents);
        if (o)
          try {
            for (var s = _e(Object.keys(o)), l = s.next(); !l.done; l = s.next()) {
              var d = l.value, u = o[d];
              if (u.states)
                try {
                  for (var f = (r = void 0, _e(u.events)), c = f.next(); !c.done; c = f.next()) {
                    var m = c.value;
                    a.add("".concat(m));
                  }
                } catch (p) {
                  r = {
                    error: p
                  };
                } finally {
                  try {
                    c && !c.done && (i = f.return) && i.call(f);
                  } finally {
                    if (r)
                      throw r.error;
                  }
                }
            }
          } catch (p) {
            t = {
              error: p
            };
          } finally {
            try {
              l && !l.done && (n = s.return) && n.call(s);
            } finally {
              if (t)
                throw t.error;
            }
          }
        return this.__cache.events = Array.from(a);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "ownEvents", {
      /**
       * All the events that have transitions directly from this state node.
       *
       * Excludes any inert events.
       */
      get: function() {
        var t = new Set(this.transitions.filter(function(n) {
          return !(!n.target && !n.actions.length && n.internal);
        }).map(function(n) {
          return n.eventType;
        }));
        return Array.from(t);
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.resolveTarget = function(t) {
      var n = this;
      if (t !== void 0)
        return t.map(function(r) {
          if (!Ae(r))
            return r;
          var i = r[0] === n.delimiter;
          if (i && !n.parent)
            return n.getStateNodeByPath(r.slice(1));
          var o = i ? n.key + r : r;
          if (n.parent)
            try {
              var a = n.parent.getStateNodeByPath(o);
              return a;
            } catch (s) {
              throw new Error("Invalid transition definition for state node '".concat(n.id, `':
`).concat(s.message));
            }
          else
            return n.getStateNodeByPath(o);
        });
    }, e.prototype.formatTransition = function(t) {
      var n = this, r = T0(t.target), i = "internal" in t ? t.internal : r ? r.some(function(l) {
        return Ae(l) && l[0] === n.delimiter;
      }) : !0, o = this.machine.options.guards, a = this.resolveTarget(r), s = $($({}, t), {
        actions: Yt(Mt(t.actions)),
        cond: pf(t.cond, o),
        target: a,
        source: this,
        internal: i,
        eventType: t.event,
        toJSON: function() {
          return $($({}, s), {
            target: s.target ? s.target.map(function(l) {
              return "#".concat(l.id);
            }) : void 0,
            source: "#".concat(n.id)
          });
        }
      });
      return s;
    }, e.prototype.formatTransitions = function() {
      var t, n, r = this, i;
      if (!this.config.on)
        i = [];
      else if (Array.isArray(this.config.on))
        i = this.config.on;
      else {
        var o = this.config.on, a = Ra, s = o[a], l = s === void 0 ? [] : s, d = ol(o, [typeof a == "symbol" ? a : a + ""]);
        i = Ge(Object.keys(d).map(function(v) {
          var w = er(v, d[v]);
          return w;
        }).concat(er(Ra, l)));
      }
      var u = this.config.always ? er("", this.config.always) : [], f = this.config.onDone ? er(String(Ur(this.id)), this.config.onDone) : [], c = Ge(this.invoke.map(function(v) {
        var w = [];
        return v.onDone && w.push.apply(w, ze([], Se(er(String(ri(v.id)), v.onDone)), !1)), v.onError && w.push.apply(w, ze([], Se(er(String(ar(v.id)), v.onError)), !1)), w;
      })), m = this.after, p = Ge(ze(ze(ze(ze([], Se(f), !1), Se(c), !1), Se(i), !1), Se(u), !1).map(function(v) {
        return Mt(v).map(function(w) {
          return r.formatTransition(w);
        });
      }));
      try {
        for (var h = _e(m), x = h.next(); !x.done; x = h.next()) {
          var g = x.value;
          p.push(g);
        }
      } catch (v) {
        t = {
          error: v
        };
      } finally {
        try {
          x && !x.done && (n = h.return) && n.call(h);
        } finally {
          if (t)
            throw t.error;
        }
      }
      return p;
    }, e;
  }()
);
function ih(e, t) {
  return new rh(e, t);
}
var Lo = Sf;
function oh(e) {
  return "state" in e;
}
var Rd = function() {
};
function ah(e) {
  return "getSnapshot" in e ? e.getSnapshot() : oh(e) ? e.state : void 0;
}
function sh(e, t) {
  t === void 0 && (t = ah);
  var n = st(e) ? e : Ya(e), r = Ya(t(n.value)), i = function(o) {
    n.value.send(o);
  };
  return pt(n, function(o, a, s) {
    r.value = t(o);
    var l = o.subscribe({
      next: function(d) {
        return r.value = d;
      },
      error: Rd,
      complete: Rd
    }).unsubscribe;
    s(function() {
      return l();
    });
  }, {
    immediate: !0
  }), { state: r, send: i };
}
const lh = {
  CLOSE: "closed",
  ERROR: "error",
  UPDATE_CONTEXT: {
    actions: Lo((e, t) => {
      const { ...n } = t;
      return n;
    })
  }
}, Pf = {
  store_id: null,
  product_id: null,
  variant_id: null,
  coupon: null,
  extra: null,
  quantity: null,
  product: null,
  variant: null,
  error: null,
  discord_data: null
}, dh = {
  entry: Lo(Pf),
  on: {
    OPEN: {
      target: "checkout",
      actions: Lo((e, t) => ({
        store_id: t.store_id,
        product_id: t.product_id,
        variant_id: t.variant_id,
        coupon: t.coupon,
        extra: t.extra,
        quantity: t.quantity,
        email: t.email,
        customization: t.customization,
        affiliate: t.affiliate
      }))
    }
  }
}, uh = {
  on: {
    FETCH: "checkout"
  }
}, ch = {
  on: {
    VARIANT_SELECTION: "variant_selection",
    VARIANT_OVERVIEW: "overview"
  },
  invoke: {
    id: "openingCheckout",
    src: (e) => (t) => {
      if (!e.store_id || !e.product_id)
        throw {
          message: "This checkout button is not properly configured.",
          errors: {
            ...e.store_id ? { product_id: [] } : { store_id: [] }
          }
        };
      t(e.variant_id ? "VARIANT_OVERVIEW" : "VARIANT_SELECTION");
    }
  }
}, Ai = "https://sell.app/api/v2/fast-checkout";
function ba(e, t) {
  for (const [n, r] of Object.entries(t))
    e = e.replace(`{${n}}`, r);
  return e;
}
function br(e) {
  return e === null ? !0 : typeof e == "string" ? e.trim() === "" : typeof e == "number" || typeof e == "boolean" ? !1 : Array.isArray(e) ? e.length === 0 : typeof e == "object" ? Object.entries(e).length === 0 : !e;
}
function Ld(e) {
  return !br(e);
}
function $d(e, t) {
  return Object.fromEntries(
    Object.entries(e).filter((n) => {
      const [r, i] = n;
      return t(i, r);
    })
  );
}
const ha = {
  async get(e, t) {
    const n = new URL(e);
    return t && (n.search = new URLSearchParams($d(t, Ld)).toString()), await Fd(n.toString(), {
      headers: {
        Accept: "application/json"
      }
    });
  },
  async post(e, t) {
    return await Fd(e, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify($d(t, Ld))
    });
  }
}, fh = 422, mh = 403;
async function Fd(e, t) {
  const n = await fetch(e, t);
  if (!n.ok && n.status !== fh && n.status !== mh)
    throw new Error("Oops... Something went wrong while processing your request.");
  const r = await n.json();
  if (!n.ok)
    throw { code: n.status, message: r.message ?? "", errors: r.errors ?? {} };
  return r;
}
const ph = `${Ai}/{store_id}/{product_id}/{variant_id}`;
async function bh(e, t, n, r) {
  const i = ba(ph, { store_id: e, product_id: t, variant_id: n });
  return await ha.post(i, r);
}
const hh = `${Ai}/{store_id}/{product_id}`;
async function Rf(e, t, n = {}) {
  const r = ba(hh, { store_id: e, product_id: t });
  return await ha.get(r, n);
}
const vh = `${Ai}/{store_id}/{product_id}/{variant_id}`;
async function gh(e, t, n, r = {}) {
  const i = ba(vh, { store_id: e, product_id: t, variant_id: n });
  return await ha.get(i, r);
}
const { assign: yh, pure: _h, send: wh } = pa, gi = _h((e, t) => {
  const n = typeof t.data == "object" && "errors" in t.data;
  let r = !n;
  const i = n ? t.data : { message: t.data, errors: {} };
  if (!n || "store_id" in i.errors || "product_id" in i.errors || "variant_id" in i.errors || i.code === 403) {
    const a = " Please contact the seller to let them know.";
    i.code !== 403 ? "store_id" in i.errors ? i.message = "This store could not be found." + a : "product_id" in i.errors ? i.message = "This product could not  be found." + a : "variant_id" in i.errors ? i.message = "This variant could not be found." + a : i.message = "It looks like something went wrong." : i.message === "You have been blacklisted" ? i.message = "You have either been blacklisted by the store owner, or you are using a VPN/Proxy. If you are using a proxy, please disable it." : i.message === "Action not allowed. This store is on hold." ? i.message = "This store is on hold: Creator has not paid their invoice yet" + a : i.message = "It looks like something went wrong." + a, i.errors = {}, r = !0;
  }
  const o = [
    yh(
      () => ({
        error: i
      })
    )
  ];
  return r && o.push(wh("ERROR")), o;
}), { assign: zd, send: xh } = pa, kh = {
  on: {
    NEXT: {
      target: "overview",
      actions: zd((e, t) => ({
        variant_id: t.variant_id
      }))
    }
  },
  meta: {
    component: "VariantSelection"
  },
  initial: "fetchProductVariantList",
  states: {
    fetchProductVariantList: {
      tags: ["loading"],
      on: {
        FINISH_FETCH: "selectProductVariant"
      },
      invoke: {
        id: "fetchVariantList",
        src: async (e) => {
          var t;
          return ((t = e.product) == null ? void 0 : t.id.toString()) === e.product_id ? e.product : await Rf(e.store_id, e.product_id);
        },
        onDone: {
          actions: [
            zd(
              (e, t) => ({
                product: t.data,
                error: null
              })
            ),
            xh((e, t) => t.data.variants.length === 1 ? { type: "NEXT", variant_id: t.data.variants[0].id.toString() } : { type: "FINISH_FETCH" })
          ]
        },
        onError: {
          target: "#embed.error",
          actions: gi
        }
      }
    },
    selectProductVariant: {}
  }
}, { assign: Eh, send: La } = pa, Sh = {
  on: {
    PREVIOUS: "variant_selection",
    CONNECT_DISCORD: "connect_discord",
    FINAL_STEP: "final_step",
    FETCH: {
      internal: !0,
      target: [".fetchStates.fetching"]
    },
    FINISH_FETCH: {
      internal: !0,
      target: [".fetchStates.idle", ".overviewStates.idle"]
    }
  },
  meta: {
    component: "Overview"
  },
  type: "parallel",
  states: {
    fetchStates: {
      initial: "fetching",
      states: {
        fetching: {
          tags: ["fetching"],
          invoke: {
            id: "fetchProductVariant",
            src: async (e) => {
              var t;
              return {
                product: ((t = e.product) == null ? void 0 : t.id.toString()) === e.product_id ? e.product : await Rf(e.store_id, e.product_id, { withoutVariants: !0 }),
                variant: await gh(e.store_id, e.product_id, e.variant_id, {
                  coupon: e.coupon,
                  quantity: e.quantity,
                  extra: e.extra
                })
              };
            },
            onDone: {
              actions: [
                Eh(
                  (e, t) => ({
                    product: t.data.product,
                    variant: t.data.variant,
                    quantity: e.quantity ?? t.data.variant.minimum_purchase_quantity,
                    error: null
                  })
                ),
                La("FINISH_FETCH")
              ]
            },
            onError: [
              {
                target: "#embed.error",
                cond: (e, t) => {
                  var n, r, i;
                  return (i = (r = (n = t.data) == null ? void 0 : n.errors) == null ? void 0 : r.quantity) == null ? void 0 : i.includes(
                    "This product has insufficient stock to fulfill the purchase."
                  );
                },
                actions: [gi, La("FINISH_FETCH")]
              },
              {
                actions: [gi, La("FINISH_FETCH")]
              }
            ]
          }
        },
        idle: {}
      }
    },
    overviewStates: {
      initial: "loading",
      states: {
        loading: {
          tags: ["loading"]
        },
        idle: {}
      }
    }
  }
}, Oh = `${Ai}/{store_id}/connect-discord`;
async function Th(e, t) {
  const n = ba(Oh, { store_id: e });
  return await ha.get(n, t);
}
const { assign: Ch, send: Vd } = pa, Ah = {
  on: {
    PREVIOUS: "overview",
    NEXT: "final_step",
    FETCH: {
      internal: !0,
      target: [".fetchStates.fetching"]
    },
    FINISH_FETCH: {
      internal: !0,
      target: [".fetchStates.idle", ".overviewStates.idle"]
    }
  },
  meta: {
    component: "ConnectDiscord"
  },
  type: "parallel",
  states: {
    fetchStates: {
      initial: "fetching",
      states: {
        fetching: {
          tags: ["fetching"],
          invoke: {
            id: "fetchingDiscordData",
            src: async (e) => {
              var t;
              return await Th(e.store_id, {
                discord_token: ((t = e.discord_data) == null ? void 0 : t.discord_token) ?? sessionStorage.getItem("discord_token"),
                origin: window.location.href
              });
            },
            onDone: {
              actions: [
                Ch((e, t) => ({
                  discord_data: t.data,
                  error: null
                })),
                Vd("FINISH_FETCH")
              ]
            },
            onError: {
              actions: [gi, Vd("FINISH_FETCH")]
            }
          }
        },
        idle: {}
      }
    },
    overviewStates: {
      initial: "loading",
      states: {
        loading: {
          tags: ["loading"]
        },
        idle: {}
      }
    }
  }
}, Mh = {
  on: {
    PREVIOUS: "overview",
    CONNECT_DISCORD: "connect_discord"
  },
  meta: {
    component: "FinalStep"
  },
  initial: "checkFinalStep",
  states: {
    checkFinalStep: {
      on: {
        CHECKOUT: "checkout_product"
      }
    },
    checkout_product: {
      invoke: {
        id: "checkout_product",
        src: async (e) => await bh(e.store_id, e.product_id, e.variant_id, {
          coupon: e.coupon,
          quantity: e.quantity,
          extra: e.extra,
          customer_email: Me.customer_email,
          payment_method: Me.payment_method,
          additional_information: Me.additional_information,
          vat_id: Me.vat_id,
          country: Me.country,
          discord_token: Me.discord_token,
          affiliate: e.affiliate
        }),
        onDone: {
          target: "#embed.invoice_processed",
          actions: [
            Lo(
              (e, t) => ({
                order: t.data.payment_url,
                error: null
              })
            ),
            (e, t) => {
              window.open(t.data.payment_url, "_blank");
            }
          ]
        },
        onError: {
          target: "#embed.checkout.overview",
          actions: gi
        }
      }
    }
  }
}, Nh = {
  initial: "entry",
  states: {
    entry: ch,
    variant_selection: kh,
    overview: Sh,
    connect_discord: Ah,
    final_step: Mh
  }
}, Ih = {}, Dh = {
  closed: dh,
  error: uh,
  checkout: Nh,
  invoice_processed: Ih
}, Ph = {
  id: "embed",
  initial: "closed",
  context: Pf,
  predictableActionArguments: !0,
  on: lh,
  states: Dh
}, Rh = ih(Ph), Lh = Df(Rh).start();
function Rt() {
  const { state: e, send: t } = sh(Lh);
  return {
    context: I(() => e.value.context),
    send: t,
    state: e
  };
}
const Me = Or({
  customer_email: "",
  payment_method: null,
  additional_information: {},
  vat_id: "",
  country: "",
  discord_token: ""
});
function Lf(e, t) {
  return E(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    _("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function $h(e, t) {
  return E(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    _("path", {
      "fill-rule": "evenodd",
      d: "M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Fh(e, t) {
  return E(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    _("path", {
      "fill-rule": "evenodd",
      d: "M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z",
      "clip-rule": "evenodd"
    })
  ]);
}
function $f(e, t) {
  return E(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    _("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]);
}
function zh(e, t) {
  return E(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    _("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    })
  ]);
}
const Vh = pe({
  name: "MyButton",
  props: {
    loading: {
      type: Boolean,
      required: !1,
      default: !1
    },
    disabled: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    const t = W(!1), n = W(!1);
    let r = null;
    return pt(() => e.loading, (i) => {
      i ? (r && clearTimeout(r), r = setTimeout(() => {
        t.value = !0, n.value = !0;
      }, 2e3)) : (r && clearTimeout(r), t.value = !1, n.value = !1);
    }), {
      showLoading: t,
      showDisabled: n
    };
  }
}), ht = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t)
    n[r] = i;
  return n;
}, jh = ["disabled"];
function Uh(e, t, n, r, i, o) {
  return E(), C("button", {
    class: ye(["embed-inline-flex embed-items-center embed-justify-center sm:embed-text-sm embed-px-4 embed-py-2 focus:embed-ring-0 focus:embed-outline-none disabled:embed-opacity-75 disabled:embed-cursor-not-allowed embed-transition embed-duration-200 embed-ease-in-out", {
      "embed-font-bold embed-rounded-lg embed-shadow-inner hover:embed-shadow-emerald-500 focus:embed-shadow-emerald-200 [background:linear-gradient(theme(colors.emerald.400),_theme(colors.emerald.400))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.200)_25%,_theme(colors.green.200)_75%,_theme(colors.emerald.500)_100%)_border-box] dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed-text-white dark:embed-text-white dark:embed-shadow-emerald-950 dark:hover:embed-shadow-emerald-900 dark:focus:embed-shadow-emerald-900 embed-border-2 embed-border-transparent hover:embed-border-emerald-500 dark:hover:embed-border-emerald-300": typeof e.$attrs.primary < "u",
      "embed-rounded-full embed-bg-zinc-100 dark:embed-bg-zinc-950 embed-text-zinc-800 embed-shadow embed-shadow-emerald-100 hover:embed-shadow-emerald-200 focus:embed-shadow-emerald-200 dark:embed-text-zinc-300 dark:embed-shadow-emerald-950 dark:hover:embed-shadow-emerald-900 dark:focus:embed-shadow-emerald-900 embed-font-medium": typeof e.$attrs.outline < "u",
      "embed-bg-red-600 hover:embed-bg-red-700 embed-text-white focus:embed-ring-offset-2 embed-ring-offset-transparent focus:embed-ring-red-500": typeof e.$attrs.danger < "u"
    }]),
    disabled: e.disabled || e.showDisabled
  }, [
    _("span", {
      class: ye({ "embed-animate-pulse embed-opacity-50": e.showLoading })
    }, [
      fi(e.$slots, "default")
    ], 2)
  ], 10, jh);
}
const va = /* @__PURE__ */ ht(Vh, [["render", Uh]]), Hh = pe({
  name: "VariantSelection",
  components: {
    RadioGroup: Jc,
    RadioGroupDescription: ef,
    RadioGroupLabel: Qc,
    RadioGroupOption: Zc,
    DialogTitle: Tr,
    MyButton: va
  },
  setup() {
    const { context: e, send: t, state: n } = Rt(), r = I(() => e.value.product), i = W(null);
    function o(a) {
      a && (i.value = a), !br(i.value) && t({
        type: "NEXT",
        variant_id: i.value
      });
    }
    return {
      state: n,
      product: r,
      selected_variant: i,
      selectVariant: o,
      context: e
    };
  }
}), Bh = { class: "embed-flex embed-flex-col embed-px-4 embed-pt-5 embed-pb-4 sm:embed-p-6" }, Gh = /* @__PURE__ */ _("p", { class: "embed-mb-4 embed-font-normal embed-text-center embed-text-zinc-800 dark:embed-text-zinc-400 embed-text-xs" }, "Select the product you'd like to purchase", -1), Wh = { class: "embed-space-y-4" }, Yh = ["onClick"], qh = { class: "embed-flex embed-items-center embed-flex-grow-0" }, Kh = { class: "embed-text-sm" }, Xh = { class: "embed-flex embed-flex-col sm:embed-flex-row sm:embed-justify-between embed-text-left embed-mt-2" }, Jh = { class: "embed-flex embed-text-sm sm:embed-mt-0 sm:embed-block sm:embed-mr-4 sm:embed-text-right embed-w-auto embed-flex-shrink-0" }, Zh = /* @__PURE__ */ _("div", {
  class: "embed-absolute embed--inset-px embed-rounded-lg embed-pointer-events-none",
  "aria-hidden": "true"
}, null, -1);
function Qh(e, t, n, r, i, o) {
  const a = ae("DialogTitle"), s = ae("RadioGroupLabel"), l = ae("RadioGroupDescription"), d = ae("RadioGroupOption"), u = ae("RadioGroup");
  return E(), C("div", null, [
    _("div", Bh, [
      G(a, {
        as: "h2",
        class: "embed-mb-1 embed-font-bold embed-text-center embed-text-black dark:embed-text-white embed-text-xl"
      }, {
        default: ie(() => [
          ne(T(e.product.title), 1)
        ]),
        _: 1
      }),
      Gh,
      G(u, {
        modelValue: e.selected_variant,
        "onUpdate:modelValue": t[0] || (t[0] = (f) => e.selected_variant = f)
      }, {
        default: ie(() => [
          G(s, { class: "embed-sr-only" }, {
            default: ie(() => [
              ne("Select the product variant")
            ]),
            _: 1
          }),
          _("div", Wh, [
            (E(!0), C(H, null, pn(e.product.variants, (f) => (E(), xe(d, {
              key: f.id,
              as: "template",
              value: f.id,
              disabled: f.stock === 0
            }, {
              default: ie(({ checked: c }) => [
                _("div", {
                  class: ye(["embed-flex embed-flex-col embed-border-2 embed-border-transparent embed-shadow-inner", [
                    f.stock === 0 ? "embed-opacity-50 embed-cursor-not-allowed" : "embed-cursor-pointer",
                    c ? "[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.300)_25%,_theme(colors.green.300)_75%,_theme(colors.emerald.500)_100%)_border-box] dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed-shadow-emerald-200 dark:embed-shadow-emerald-900" : "hover:embed-border-emerald-200 dark:hover:embed-border-emerald-950 embed-shadow-emerald-100 hover:embed-shadow-emerald-200 focus:embed-shadow-emerald-200 dark:embed-shadow-emerald-950 dark:hover:embed-shadow-emerald-900 dark:focus:embed-shadow-emerald-900 embed-bg-white dark:embed-bg-zinc-950",
                    "embed-transition embed-duration-300 embed-ease-in-out embed-relative embed-rounded-lg embed-px-3 embed-py-2 sm:embed-flex sm:embed-justify-between focus:embed-outline-none"
                  ]]),
                  onClick: (m) => (Number(f.stock) > 0 || f.stock === "∞") && e.selectVariant(f.id.toString())
                }, [
                  _("div", qh, [
                    _("div", Kh, [
                      G(s, {
                        as: "p",
                        class: "embed-font-bold embed-text-black dark:embed-text-white",
                        style: { "text-transform": "embed-capitalize" }
                      }, {
                        default: ie(() => [
                          ne(T(f.title), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ]),
                  G(l, {
                    as: "div",
                    class: "embed-flex embed-text-xs embed-text-left"
                  }, {
                    default: ie(() => [
                      _("div", {
                        class: ye(["embed-flex embed-text-xs embed-text-left", [c ? "embed-text-black dark:embed-text-zinc-200" : "embed-text-zinc-500 dark:embed-text-zinc-400"]])
                      }, T(f.description), 3)
                    ]),
                    _: 2
                  }, 1024),
                  _("div", Xh, [
                    _("div", Jh, [
                      _("div", {
                        class: ye([c ? "embed-text-black dark:embed-text-zinc-200 embed-font-bold" : "embed-text-zinc-500 dark:embed-text-zinc-400 embed-font-medium"])
                      }, T(f.price), 3)
                    ]),
                    G(l, {
                      as: "div",
                      class: "embed-flex embed-text-xs embed-text-left"
                    }, {
                      default: ie(() => [
                        _("div", {
                          class: ye(["embed-flex embed-text-xs embed-text-left", [c ? "embed-text-black dark:embed-text-zinc-200" : "embed-text-zinc-500 dark:embed-text-zinc-400"]])
                        }, T(f.stock) + " in stock", 3)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  Zh
                ], 10, Yh)
              ]),
              _: 2
            }, 1032, ["value", "disabled"]))), 128))
          ])
        ]),
        _: 1
      }, 8, ["modelValue"])
    ])
  ]);
}
const ev = /* @__PURE__ */ ht(Hh, [["render", Qh]]);
function ee(e, t, n, r) {
  if (n === "a" && !r)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function Re(e, t, n, r, i) {
  if (r === "m")
    throw new TypeError("Private method is not writable");
  if (r === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
}
const Mi = typeof window < "u", Xt = (e, t, n) => {
  const r = document.createElement(e), [i, o] = Array.isArray(t) ? [void 0, t] : [t, n];
  return i && Object.assign(r, i), o == null || o.forEach((a) => r.appendChild(a)), r;
}, tv = (e, t) => {
  var n;
  return t === "left" ? e.offsetLeft : (((n = e.offsetParent instanceof HTMLElement ? e.offsetParent : null) == null ? void 0 : n.offsetWidth) ?? 0) - e.offsetWidth - e.offsetLeft;
}, nv = (e) => e.offsetWidth > 0 && e.offsetHeight > 0, rv = (e, t) => {
  if (!(!Mi || customElements.get(e) === t))
    return customElements.define(e, t);
};
function iv(e, t, { reverse: n = !1 } = {}) {
  const r = e.length;
  for (let i = n ? r - 1 : 0; n ? i >= 0 : i < r; n ? i-- : i++)
    t(e[i], i);
}
function ov(e, t) {
  const n = t.formatToParts(e), r = [], i = [], o = [], a = [], s = {}, l = (m) => {
    const p = s[m] == null ? s[m] = 0 : ++s[m];
    return `${m}:${p}`;
  };
  let d = "", u = !1, f = !1;
  for (const m of n) {
    d += m.value;
    const p = m.type === "minusSign" || m.type === "plusSign" ? "sign" : m.type;
    p === "integer" ? (u = !0, i.push(...m.value.split("").map((h) => ({ type: p, value: parseInt(h) })))) : p === "group" ? i.push({ type: p, value: m.value }) : p === "decimal" ? (f = !0, o.push({ type: p, value: m.value, key: l(p) })) : p === "fraction" ? o.push(...m.value.split("").map((h) => ({
      type: p,
      value: parseInt(h),
      key: l(p),
      place: -1 - s[p]
    }))) : (u || f ? a : r).push({
      type: p,
      value: m.value,
      key: l(p)
    });
  }
  const c = [];
  for (let m = i.length - 1; m >= 0; m--) {
    const p = i[m];
    c.unshift(p.type === "integer" ? {
      ...p,
      key: l(p.type),
      place: s[p.type]
    } : {
      ...p,
      key: l(p.type)
    });
  }
  return {
    pre: r,
    integer: c,
    fraction: o,
    post: a,
    formatted: d,
    value: typeof e == "string" ? parseFloat(e) : e
  };
}
const av = String.raw, sv = Mi && typeof CSS < "u" && CSS.supports && CSS.supports("animation-timing-function", "linear(1,2)"), lv = Mi && typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)"), jd = Mi && matchMedia ? matchMedia("(prefers-reduced-motion: reduce)") : null, $o = "--_number-flow-d-opacity", cl = "--_number-flow-d-width", Fo = "--_number-flow-dx", fl = "--_number-flow-d", dv = (() => {
  try {
    return CSS.registerProperty({
      name: $o,
      syntax: "<number>",
      inherits: !1,
      initialValue: "0"
    }), CSS.registerProperty({
      name: Fo,
      syntax: "<length>",
      inherits: !0,
      initialValue: "0px"
    }), CSS.registerProperty({
      name: cl,
      syntax: "<number>",
      inherits: !1,
      initialValue: "0"
    }), CSS.registerProperty({
      name: fl,
      syntax: "<number>",
      inherits: !0,
      initialValue: "0"
    }), !0;
  } catch {
    return !1;
  }
})(), Ff = "var(--number-flow-char-height, 1em)", Gt = "var(--number-flow-mask-height, 0.25em)", $r = `calc(${Gt} / 2)`, bs = "var(--number-flow-mask-width, 0.5em)", In = `calc(${bs} / var(--scale-x))`, qi = "#000 0, transparent 71%", hs = "span", Ud = av`:host{display:inline-flex;align-items:baseline;direction:ltr;white-space:nowrap;position:relative;line-height:${Ff} !important;isolation:isolate;}::slotted(${hs}){position:absolute;left:0;top:0;color:transparent !important;will-change:unset !important;z-index:-5;}:host > .number,:host > .section{pointer-events:none;user-select:none;}.number,.number__inner{display:inline-flex;align-items:baseline;transform-origin:left top;}:host([data-will-change]) .number,:host([data-will-change]) .number__inner{will-change:transform;}.number{--scale-x:calc(1 + var(${cl}) / var(--width));transform:translateX(var(${Fo})) scaleX(var(--scale-x));margin:0 calc(-1 * ${bs});position:relative;z-index:-1;overflow:clip;-webkit-mask-image:linear-gradient( to right,transparent 0,#000 ${In},#000 calc(100% - ${In}),transparent ),linear-gradient( to bottom,transparent 0,#000 ${Gt},#000 calc(100% - ${Gt}),transparent 100% ),radial-gradient(at bottom right,${qi}),radial-gradient(at bottom left,${qi}),radial-gradient(at top left,${qi}),radial-gradient(at top right,${qi});-webkit-mask-size:100% calc(100% - ${Gt} * 2),calc(100% - ${In} * 2) 100%,${In} ${Gt},${In} ${Gt},${In} ${Gt},${In} ${Gt};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat;}.number__inner{padding:0 ${bs};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${Fo})));}.section{display:inline-flex;align-items:baseline;padding-bottom:${$r};padding-top:${$r};position:relative;isolation:isolate;}.section::after{content:'\200b';display:block;padding:${$r} 0;}:host([data-will-change]) .section{will-change:transform;}.section--justify-left{transform-origin:center left;}.section--justify-right{transform-origin:center right;}.section__exiting{position:absolute !important;z-index:-1;}.digit{display:block;position:relative;--c:var(--current) + var(${fl});}:host([data-will-change]) .digit,:host([data-will-change]) .digit__num{will-change:transform;}.digit__num{display:block;padding:${$r} 0;--offset-raw:mod(10 + var(--n) - mod(var(--c),10),10);--offset:calc(var(--offset-raw) - 10 * round(down,var(--offset-raw) / 5,1));--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y));}.digit__num:not(.is-current){position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y));}.digit:not(.is-spinning) .digit__num:not(.is-current){display:none;}.symbol{display:inline-flex;align-items:baseline;position:relative;isolation:isolate;padding:${$r} 0;}:host([data-will-change]) .symbol{will-change:transform;}.symbol__value{display:block;white-space:pre;}.symbol__exiting{position:absolute;z-index:-1;}.section--justify-left .symbol__exiting{left:0;}.section--justify-right .symbol__exiting{right:0;}.animate-presence{opacity:calc(1 + var(${$o}));}`, uv = Mi ? HTMLElement : class {
}, cv = ({ formatted: e, willChange: t }) => `<${hs} style="font-kerning: none; display: inline-block; line-height: ${Ff}; padding: ${Gt} 0;${t ? "will-change: transform" : ""}">${e}</${hs}>`, fv = (e, t) => e != null && t == null ? e : e == null && t != null ? t : e != null && t != null ? Math.max(e, t) : null;
var ir, fo, Dn, Pn, Rn, dn, Gr, Wr, Yr, or, mo, Ln, $n, po, bo, ho, qr, vo, Kr, Xr, un, go, vs, cn, yo, _o;
const mv = lv && sv && dv;
var hn;
(function(e) {
  e[e.UP = 1] = "UP", e[e.DOWN = -1] = "DOWN", e[e.NONE = 0] = "NONE";
})(hn || (hn = {}));
let Ki;
class Wt extends uv {
  constructor() {
    super(...arguments), this.transformTiming = this.constructor.defaultProps.transformTiming, this.spinTiming = this.constructor.defaultProps.spinTiming, this.opacityTiming = this.constructor.defaultProps.opacityTiming, this.respectMotionPreference = this.constructor.defaultProps.respectMotionPreference, this.trend = this.constructor.defaultProps.trend, this.continuous = this.constructor.defaultProps.continuous, ir.set(this, this.constructor.defaultProps.animated), fo.set(this, !1), Dn.set(this, void 0), Pn.set(this, void 0), Rn.set(this, void 0), dn.set(this, void 0), Gr.set(this, void 0), Wr.set(this, ee(this, ir, "f")), Yr.set(this, void 0), this.manual = !1, or.set(this, void 0);
  }
  get animated() {
    return ee(this, ir, "f");
  }
  set animated(t) {
    var n;
    this.animated !== t && (Re(this, ir, t, "f"), (n = this.shadowRoot) == null || n.getAnimations().forEach((r) => r.finish()));
  }
  get computedTrend() {
    return ee(this, dn, "f");
  }
  get startingPlace() {
    return ee(this, Gr, "f");
  }
  get computedAnimated() {
    return ee(this, Wr, "f");
  }
  set parts(t) {
    if (t == null)
      return;
    const { pre: n, integer: r, fraction: i, post: o, value: a } = t;
    if (ee(this, fo, "f")) {
      const s = ee(this, Yr, "f");
      if (Re(this, Yr, t, "f"), this.trend === !0 ? Re(this, dn, Math.sign(a - s.value), "f") : this.trend === "increasing" ? Re(this, dn, hn.UP, "f") : this.trend === "decreasing" ? Re(this, dn, hn.DOWN, "f") : Re(this, dn, hn.NONE, "f"), Re(this, Gr, void 0, "f"), ee(this, dn, "f") !== hn.NONE && this.continuous) {
        const l = s.integer.concat(s.fraction).filter((c) => c.type === "integer" || c.type === "fraction"), d = t.integer.concat(t.fraction).filter((c) => c.type === "integer" || c.type === "fraction"), u = l.find((c) => !d.find((m) => m.place === c.place && m.value === c.value)), f = d.find((c) => !l.find((m) => c.place === m.place && c.value === m.value));
        Re(this, Gr, fv(u == null ? void 0 : u.place, f == null ? void 0 : f.place), "f");
      }
      Re(this, Wr, mv && ee(this, ir, "f") && (!this.respectMotionPreference || !(jd != null && jd.matches)) && // https://github.com/barvian/number-flow/issues/9
      nv(this), "f"), this.manual || this.willUpdate(), ee(this, Dn, "f").update(n), ee(this, Pn, "f").update({ integer: r, fraction: i }), ee(this, Rn, "f").update(o), this.manual || this.didUpdate();
    } else {
      if (Re(this, Yr, t, "f"), this.attachShadow({ mode: "open" }), typeof CSSStyleSheet < "u" && this.shadowRoot.adoptedStyleSheets)
        Ki || (Ki = new CSSStyleSheet(), Ki.replaceSync(Ud)), this.shadowRoot.adoptedStyleSheets = [Ki];
      else {
        const s = document.createElement("style");
        s.textContent = Ud, this.shadowRoot.appendChild(s);
      }
      this.shadowRoot.appendChild(Xt("slot")), Re(this, Dn, new Bd(this, n, {
        inert: !0,
        ariaHidden: "true",
        justify: "right"
      }), "f"), this.shadowRoot.appendChild(ee(this, Dn, "f").el), Re(this, Pn, new pv(this, r, i, {
        inert: !0,
        ariaHidden: "true"
      }), "f"), this.shadowRoot.appendChild(ee(this, Pn, "f").el), Re(this, Rn, new Bd(this, o, {
        inert: !0,
        ariaHidden: "true",
        justify: "left"
      }), "f"), this.shadowRoot.appendChild(ee(this, Rn, "f").el);
    }
    Re(this, fo, !0, "f");
  }
  willUpdate() {
    ee(this, Dn, "f").willUpdate(), ee(this, Pn, "f").willUpdate(), ee(this, Rn, "f").willUpdate();
  }
  didUpdate() {
    if (!ee(this, Wr, "f"))
      return;
    ee(this, or, "f") ? ee(this, or, "f").abort() : this.dispatchEvent(new Event("animationsstart")), ee(this, Dn, "f").didUpdate(), ee(this, Pn, "f").didUpdate(), ee(this, Rn, "f").didUpdate();
    const t = new AbortController();
    Promise.all(this.shadowRoot.getAnimations().map((n) => n.finished)).then(() => {
      t.signal.aborted || (this.dispatchEvent(new Event("animationsfinish")), Re(this, or, void 0, "f"));
    }), Re(this, or, t, "f");
  }
}
ir = /* @__PURE__ */ new WeakMap(), fo = /* @__PURE__ */ new WeakMap(), Dn = /* @__PURE__ */ new WeakMap(), Pn = /* @__PURE__ */ new WeakMap(), Rn = /* @__PURE__ */ new WeakMap(), dn = /* @__PURE__ */ new WeakMap(), Gr = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap();
Wt.defaultProps = {
  transformTiming: {
    duration: 900,
    // Make sure to keep this minified:
    easing: "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)"
  },
  spinTiming: void 0,
  opacityTiming: { duration: 450, easing: "ease-out" },
  animated: !0,
  trend: !0,
  continuous: !1,
  respectMotionPreference: !0
};
class pv {
  constructor(t, n, r, { className: i, ...o } = {}) {
    this.flow = t, mo.set(this, void 0), Ln.set(this, void 0), $n.set(this, void 0), po.set(this, void 0), bo.set(this, void 0), Re(this, Ln, new Hd(t, n, {
      justify: "right"
    }), "f"), Re(this, $n, new Hd(t, r, {
      justify: "left"
    }), "f"), Re(this, mo, Xt("span", {
      className: "number__inner"
    }, [ee(this, Ln, "f").el, ee(this, $n, "f").el]), "f"), this.el = Xt("span", {
      ...o,
      className: `number ${i ?? ""}`
    }, [ee(this, mo, "f")]);
  }
  willUpdate() {
    Re(this, po, this.el.offsetWidth, "f"), Re(this, bo, this.el.getBoundingClientRect().left, "f"), ee(this, Ln, "f").willUpdate(), ee(this, $n, "f").willUpdate();
  }
  update({ integer: t, fraction: n }) {
    ee(this, Ln, "f").update(t), ee(this, $n, "f").update(n);
  }
  didUpdate() {
    const t = this.el.getBoundingClientRect();
    ee(this, Ln, "f").didUpdate(), ee(this, $n, "f").didUpdate();
    const n = ee(this, bo, "f") - t.left, r = this.el.offsetWidth, i = ee(this, po, "f") - r;
    this.el.style.setProperty("--width", String(r)), this.el.animate({
      [Fo]: [`${n}px`, "0px"],
      [cl]: [i, 0]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
  }
}
mo = /* @__PURE__ */ new WeakMap(), Ln = /* @__PURE__ */ new WeakMap(), $n = /* @__PURE__ */ new WeakMap(), po = /* @__PURE__ */ new WeakMap(), bo = /* @__PURE__ */ new WeakMap();
class zf {
  constructor(t, n, { justify: r, className: i, ...o }, a) {
    this.flow = t, this.children = /* @__PURE__ */ new Map(), this.onCharRemove = (l) => () => {
      this.children.delete(l);
    }, ho.set(this, void 0), this.justify = r;
    const s = n.map((l) => this.addChar(l).el);
    this.el = Xt("span", {
      ...o,
      className: `section section--justify-${r} ${i ?? ""}`
    }, a ? a(s) : s);
  }
  addChar(t, { startDigitsAtZero: n = !1, ...r } = {}) {
    const i = t.type === "integer" || t.type === "fraction" ? new jf(this, t.type, n ? 0 : t.value, t.place, {
      ...r,
      onRemove: this.onCharRemove(t.key)
    }) : new bv(this, t.type, t.value, {
      ...r,
      onRemove: this.onCharRemove(t.key)
    });
    return this.children.set(t.key, i), i;
  }
  unpop(t) {
    t.el.classList.remove("section__exiting"), t.el.style[this.justify] = "";
  }
  pop(t) {
    t.forEach((n) => {
      n.el.style[this.justify] = `${tv(n.el, this.justify)}px`;
    }), t.forEach((n) => {
      n.el.classList.add("section__exiting"), n.present = !1;
    });
  }
  addNewAndUpdateExisting(t) {
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = this.justify === "left", o = i ? "prepend" : "append";
    if (iv(t, (a) => {
      let s;
      this.children.has(a.key) ? (s = this.children.get(a.key), r.set(a, s), this.unpop(s), s.present = !0) : (s = this.addChar(a, { startDigitsAtZero: !0, animateIn: !0 }), n.set(a, s)), this.el[o](s.el);
    }, { reverse: i }), this.flow.computedAnimated) {
      const a = this.el.getBoundingClientRect();
      n.forEach((s) => {
        s.willUpdate(a);
      });
    }
    n.forEach((a, s) => {
      a.update(s.value);
    }), r.forEach((a, s) => {
      a.update(s.value);
    });
  }
  willUpdate() {
    const t = this.el.getBoundingClientRect();
    Re(this, ho, t[this.justify], "f"), this.children.forEach((n) => n.willUpdate(t));
  }
  didUpdate() {
    const t = this.el.getBoundingClientRect();
    this.children.forEach((i) => i.didUpdate(t));
    const n = t[this.justify], r = ee(this, ho, "f") - n;
    this.el.animate({
      transform: [`translateX(${r}px)`, "none"]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
  }
}
ho = /* @__PURE__ */ new WeakMap();
class Hd extends zf {
  update(t) {
    const n = /* @__PURE__ */ new Map();
    this.children.forEach((r, i) => {
      t.find((o) => o.key === i) || n.set(i, r), this.unpop(r);
    }), this.addNewAndUpdateExisting(t), n.forEach((r) => {
      r instanceof jf && r.update(0);
    }), this.pop(n);
  }
}
class Bd extends zf {
  update(t) {
    const n = /* @__PURE__ */ new Map();
    this.children.forEach((r, i) => {
      t.find((o) => o.key === i) || n.set(i, r);
    }), this.pop(n), this.addNewAndUpdateExisting(t);
  }
}
class gs {
  constructor(t, n, { onRemove: r, animateIn: i = !1 } = {}) {
    this.flow = t, this.el = n, qr.set(this, !0), vo.set(this, void 0), Kr.set(this, () => {
      var o;
      this.el.remove(), (o = ee(this, vo, "f")) == null || o.call(this);
    }), this.el.classList.add("animate-presence"), this.flow.computedAnimated && i && this.el.animate({
      [$o]: [-0.9999, 0]
    }, {
      ...this.flow.opacityTiming,
      composite: "accumulate"
    }), Re(this, vo, r, "f");
  }
  get present() {
    return ee(this, qr, "f");
  }
  set present(t) {
    if (ee(this, qr, "f") !== t) {
      if (Re(this, qr, t, "f"), !this.flow.computedAnimated) {
        t || ee(this, Kr, "f").call(this);
        return;
      }
      this.el.style.setProperty("--_number-flow-d-opacity", t ? "0" : "-.999"), this.el.animate({
        [$o]: t ? [-0.9999, 0] : [0.999, 0]
      }, {
        ...this.flow.opacityTiming,
        composite: "accumulate"
      }), t ? this.flow.removeEventListener("animationsfinish", ee(this, Kr, "f")) : this.flow.addEventListener("animationsfinish", ee(this, Kr, "f"), {
        once: !0
      });
    }
  }
}
qr = /* @__PURE__ */ new WeakMap(), vo = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap();
class Vf extends gs {
  constructor(t, n, r, i) {
    super(t.flow, r, i), this.section = t, this.value = n, this.el = r;
  }
}
class jf extends Vf {
  constructor(t, n, r, i, o) {
    const a = Array.from({ length: 10 }).map((l, d) => {
      const u = Xt("span", { className: `digit__num${d === r ? " is-current" : ""}` }, [document.createTextNode(String(d))]);
      return u.style.setProperty("--n", String(d)), u;
    }), s = Xt("span", {
      className: "digit"
    }, a);
    s.style.setProperty("--current", String(r)), super(t, r, s, o), this.place = i, Xr.set(this, void 0), un.set(this, void 0), go.set(this, void 0), vs.set(this, () => {
      this.el.classList.remove("is-spinning");
    }), Re(this, Xr, a, "f");
  }
  willUpdate(t) {
    const n = this.el.getBoundingClientRect();
    Re(this, un, this.value, "f");
    const r = n[this.section.justify] - t[this.section.justify], i = n.width / 2;
    Re(this, go, this.section.justify === "left" ? r + i : r - i, "f");
  }
  update(t) {
    var n, r;
    (n = ee(this, Xr, "f")[this.value]) == null || n.classList.remove("is-current"), this.el.style.setProperty("--current", String(t)), (r = ee(this, Xr, "f")[t]) == null || r.classList.add("is-current"), this.value = t;
  }
  didUpdate(t) {
    const n = this.el.getBoundingClientRect(), r = n[this.section.justify] - t[this.section.justify], i = n.width / 2, o = this.section.justify === "left" ? r + i : r - i;
    this.el.animate({
      transform: [`translateX(${ee(this, go, "f") - o}px)`, "none"]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
    const a = this.diff;
    a && (this.el.classList.add("is-spinning"), this.el.animate({
      [fl]: [-a, 0]
    }, {
      ...this.flow.spinTiming ?? this.flow.transformTiming,
      composite: "accumulate"
    }), this.flow.addEventListener("animationsfinish", ee(this, vs, "f"), { once: !0 }));
  }
  get diff() {
    let t = this.flow.computedTrend;
    const n = this.value - ee(this, un, "f");
    return !n && this.flow.startingPlace != null && this.flow.startingPlace >= this.place ? 10 * t : (t || (t = Math.sign(n)), t === hn.DOWN && this.value > ee(this, un, "f") ? this.value - 10 - ee(this, un, "f") : t === hn.UP && this.value < ee(this, un, "f") ? 10 - ee(this, un, "f") + this.value : n);
  }
}
Xr = /* @__PURE__ */ new WeakMap(), un = /* @__PURE__ */ new WeakMap(), go = /* @__PURE__ */ new WeakMap(), vs = /* @__PURE__ */ new WeakMap();
class bv extends Vf {
  constructor(t, n, r, i) {
    const o = Xt("span", {
      className: "symbol__value",
      textContent: r
    });
    super(t, r, Xt("span", {
      className: "symbol"
    }, [o]), i), this.type = n, cn.set(this, /* @__PURE__ */ new Map()), yo.set(this, void 0), _o.set(this, (a) => () => {
      ee(this, cn, "f").delete(a);
    }), ee(this, cn, "f").set(r, new gs(this.flow, o, {
      onRemove: ee(this, _o, "f").call(this, r)
    }));
  }
  willUpdate(t) {
    if (this.type === "decimal")
      return;
    const n = this.el.getBoundingClientRect();
    Re(this, yo, n[this.section.justify] - t[this.section.justify], "f");
  }
  update(t) {
    if (this.value !== t) {
      const n = ee(this, cn, "f").get(this.value);
      if (n.present = !1, n.el.classList.add("symbol__exiting"), ee(this, cn, "f").has(t)) {
        const r = ee(this, cn, "f").get(t);
        r.present = !0, r.el.classList.remove("symbol__exiting");
      } else {
        const r = Xt("span", {
          className: "symbol__value",
          textContent: t
        });
        this.el.appendChild(r), ee(this, cn, "f").set(t, new gs(this.flow, r, {
          animateIn: !0,
          onRemove: ee(this, _o, "f").call(this, t)
        }));
      }
    }
    this.value = t;
  }
  didUpdate(t) {
    if (this.type === "decimal")
      return;
    const n = this.el.getBoundingClientRect()[this.section.justify] - t[this.section.justify];
    this.el.animate({
      transform: [`translateX(${ee(this, yo, "f") - n}px)`, "none"]
    }, { ...this.flow.transformTiming, composite: "accumulate" });
  }
}
cn = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap(), _o = /* @__PURE__ */ new WeakMap();
const hv = Symbol(), vv = ["manual", "trend", "continuous", "animated", "transformTiming", "spinTiming", "opacityTiming", "respectMotionPreference", "data-will-change", "innerHTML", "parts"], Uf = /* @__PURE__ */ pe({
  inheritAttrs: !1,
  __name: "index",
  props: {
    transformTiming: { default: () => Wt.defaultProps.transformTiming },
    spinTiming: { default: () => Wt.defaultProps.spinTiming },
    opacityTiming: { default: () => Wt.defaultProps.opacityTiming },
    animated: { type: Boolean, default: () => Wt.defaultProps.animated },
    respectMotionPreference: { type: Boolean, default: () => Wt.defaultProps.respectMotionPreference },
    trend: { type: [Boolean, String], default: () => Wt.defaultProps.trend },
    continuous: { type: Boolean, default: () => Wt.defaultProps.continuous },
    locales: {},
    format: {},
    value: {},
    willChange: { type: Boolean, default: !1 }
  },
  emits: ["animationsstart", "animationsfinish"],
  setup(e, { expose: t, emit: n }) {
    const r = W();
    t({ el: r });
    const i = n, o = I(() => new Intl.NumberFormat(e.locales, e.format)), a = I(() => ov(e.value, o.value)), s = Ye(hv, void 0);
    return s == null || s(r, a), (l, d) => (E(), C("number-flow-vue", mr({
      ref_key: "el",
      ref: r
    }, l.$attrs, {
      manual: !!di(s),
      trend: l.trend,
      continuous: l.continuous,
      animated: l.animated,
      transformTiming: l.transformTiming,
      spinTiming: l.spinTiming,
      opacityTiming: l.opacityTiming,
      respectMotionPreference: l.respectMotionPreference,
      "data-will-change": l.willChange ? "" : void 0,
      innerHTML: di(cv)({ formatted: a.value.formatted, willChange: l.willChange }),
      onAnimationsstart: d[0] || (d[0] = (u) => i("animationsstart")),
      onAnimationsfinish: d[1] || (d[1] = (u) => i("animationsfinish")),
      parts: a.value
    }), null, 16, vv));
  }
});
rv("number-flow-vue", Wt);
const gv = pe({
  name: "NumberInput",
  components: {
    MinusIcon: $h,
    PlusIcon: Fh,
    NumberFlow: Uf
  },
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: Number,
      default: null
    },
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { context: n } = Rt(), r = n.value.variant.quantity_increments ?? 1, i = W(!0), o = W(!0), a = W(null);
    function s(m) {
      if (m = parseInt(m.toString()), i.value = !0, isNaN(m) && (m = 0), r > 1) {
        const p = (m - (e.min ?? 1)) % r;
        p !== 0 && (m = m - p);
      }
      m < (e.min ?? 1) ? m = e.min : e.max !== null && m > e.max && (m = e.max), t("update:modelValue", m);
    }
    const l = I(
      () => e.min !== e.max && r > 0
    ), d = I(
      () => l.value && (e.max ? e.modelValue + r <= e.max : !0)
    );
    function u() {
      d.value && (i.value = !0, s(e.modelValue + r));
    }
    const f = I(
      () => l.value && e.modelValue - r >= (e.min ?? 1)
    );
    function c() {
      f.value && (i.value = !0, s(e.modelValue - r));
    }
    return {
      emitUpdate: s,
      canModify: l,
      canIncrement: d,
      increment: u,
      canDecrement: f,
      decrement: c,
      isAnimated: i,
      showCaret: o,
      input: a
    };
  }
}), yv = { class: "embed-group embed-flex embed-items-stretch embed-rounded-md embed-font-semibold embed-border embed-border-emerald-400 dark:embed-border-emerald-700 embed-ring-1 dark:embed-ring-1 embed-ring-emerald-300 dark:embed-ring-emerald-800 dark:embed-bg-zinc-950 embed-transition-[box-shadow] focus-within:embed-ring-2 dark:focus-within:embed-ring-2" }, _v = ["disabled"], wv = { class: "embed-relative embed-grid embed-items-center embed-justify-items-center embed-text-center embed-text-lg [grid-template-areas:'overlap'] [&>*]:[grid-area:overlap]" }, xv = ["min", "max", "value", "disabled"], kv = ["disabled"];
function Ev(e, t, n, r, i, o) {
  const a = ae("MinusIcon"), s = ae("NumberFlow"), l = ae("PlusIcon");
  return E(), C("div", yv, [
    _("button", {
      "aria-hidden": "",
      tabindex: "-1",
      class: "embed-flex embed-items-center embed-pl-[.5em] embed-pr-[.325em]",
      disabled: !e.canDecrement,
      onClick: t[0] || (t[0] = (...d) => e.decrement && e.decrement(...d))
    }, [
      G(a, {
        class: "embed-w-4 embed-h-4 dark:embed-text-white",
        absoluteStrokeWidth: "",
        strokeWidth: "3.5"
      })
    ], 8, _v),
    _("div", wv, [
      G(s, {
        value: e.modelValue,
        format: { useGrouping: !1 },
        "aria-hidden": "",
        animated: e.isAnimated,
        onAnimationsstart: t[1] || (t[1] = (d) => e.showCaret = !1),
        onAnimationsfinish: t[2] || (t[2] = (d) => e.showCaret = !0),
        class: "dark:embed-text-white",
        disabled: !e.canModify,
        willChange: ""
      }, null, 8, ["value", "animated", "disabled"]),
      _("input", mr(e.$attrs, {
        ref: "input",
        class: [
          e.showCaret ? "embed-caret-primary" : "embed-caret-transparent",
          "embed-spin-hide embed-w-[2rem] embed-bg-transparent embed-py-2 embed-text-center embed-text-lg embed-font-[inherit] embed-text-transparent embed-outline-none focus:embed-outline-none focus:embed-ring-0 embed-border-none embed-z-10",
          e.canModify ? "" : "embed-pointer-events-none"
        ],
        style: { fontKerning: "none" },
        type: "text",
        min: e.min,
        step: "1",
        autocomplete: "off",
        inputmode: "numeric",
        max: e.max,
        value: e.modelValue,
        disabled: !e.canModify,
        onInput: t[3] || (t[3] = (d) => e.canModify ? e.emitUpdate(d.target.value) : null)
      }), null, 16, xv)
    ]),
    _("button", {
      "aria-hidden": "",
      tabindex: "-1",
      class: "embed-flex embed-items-center embed-pl-[.325em] embed-pr-[.5em]",
      disabled: !e.canIncrement,
      onClick: t[4] || (t[4] = (...d) => e.increment && e.increment(...d))
    }, [
      G(l, {
        class: "embed-w-4 embed-h-4 dark:embed-text-white",
        absoluteStrokeWidth: "",
        strokeWidth: "3.5"
      })
    ], 8, kv)
  ]);
}
const Sv = /* @__PURE__ */ ht(gv, [["render", Ev]]), Ov = pe({
  name: "MyNavigator",
  components: {
    MyButton: va
  },
  props: {
    back: {
      type: Object,
      required: !1,
      default: () => ({
        type: "PREVIOUS"
      })
    },
    next: {
      type: Object,
      required: !1,
      default: () => ({
        type: "NEXT"
      })
    },
    text: {
      type: String,
      required: !1,
      default: () => "Continue"
    }
  },
  setup() {
    const { state: e, send: t } = Rt();
    return {
      send: t,
      state: e
    };
  }
}), Tv = { class: "embed-mt-6 embed-w-full embed-justify-between embed-flex embed-items-center embed-col-span-2 embed-space-x-2" };
function Cv(e, t, n, r, i, o) {
  const a = ae("MyButton");
  return E(), C("div", Tv, [
    G(a, {
      outline: "",
      class: "embed-w-1/2",
      disabled: e.state.hasTag("loading"),
      onClick: t[0] || (t[0] = (s) => e.send(e.back))
    }, {
      default: ie(() => [
        ne("Back")
      ]),
      _: 1
    }, 8, ["disabled"]),
    G(a, {
      loading: e.state.hasTag("loading"),
      class: "embed-w-1/2",
      style: Si({ "background-color": e.state.context.customization.theme }),
      primary: "",
      onClick: t[1] || (t[1] = (s) => e.send(e.next))
    }, {
      default: ie(() => [
        ne(T(e.text), 1)
      ]),
      _: 1
    }, 8, ["loading", "style"])
  ]);
}
const ga = /* @__PURE__ */ ht(Ov, [["render", Cv]]);
function Gd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gd(Object(n), !0).forEach(function(r) {
      tt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gd(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function zo(e) {
  "@babel/helpers - typeof";
  return zo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zo(e);
}
function Av(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wd(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Mv(e, t, n) {
  return t && Wd(e.prototype, t), n && Wd(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function tt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ml(e, t) {
  return Iv(e) || Pv(e, t) || Hf(e, t) || Lv();
}
function Ni(e) {
  return Nv(e) || Dv(e) || Hf(e) || Rv();
}
function Nv(e) {
  if (Array.isArray(e))
    return ys(e);
}
function Iv(e) {
  if (Array.isArray(e))
    return e;
}
function Dv(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Pv(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], i = !0, o = !1, a, s;
    try {
      for (n = n.call(e); !(i = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t)); i = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return r;
  }
}
function Hf(e, t) {
  if (e) {
    if (typeof e == "string")
      return ys(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ys(e, t);
  }
}
function ys(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Rv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Yd = function() {
}, pl = {}, Bf = {}, Gf = null, Wf = {
  mark: Yd,
  measure: Yd
};
try {
  typeof window < "u" && (pl = window), typeof document < "u" && (Bf = document), typeof MutationObserver < "u" && (Gf = MutationObserver), typeof performance < "u" && (Wf = performance);
} catch {
}
var $v = pl.navigator || {}, qd = $v.userAgent, Kd = qd === void 0 ? "" : qd, kn = pl, He = Bf, Xd = Gf, Xi = Wf;
kn.document;
var rn = !!He.documentElement && !!He.head && typeof He.addEventListener == "function" && typeof He.createElement == "function", Yf = ~Kd.indexOf("MSIE") || ~Kd.indexOf("Trident/"), Ji, Zi, Qi, eo, to, Qt = "___FONT_AWESOME___", _s = 16, qf = "fa", Kf = "svg-inline--fa", Xn = "data-fa-i2svg", ws = "data-fa-pseudo-element", Fv = "data-fa-pseudo-element-pending", bl = "data-prefix", hl = "data-icon", Jd = "fontawesome-i2svg", zv = "async", Vv = ["HTML", "HEAD", "STYLE", "SCRIPT"], Xf = function() {
  try {
    return !0;
  } catch {
    return !1;
  }
}(), Ue = "classic", We = "sharp", vl = [Ue, We];
function Ii(e) {
  return new Proxy(e, {
    get: function(n, r) {
      return r in n ? n[r] : n[Ue];
    }
  });
}
var yi = Ii((Ji = {}, tt(Ji, Ue, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  "fa-kit": "kit"
}), tt(Ji, We, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light"
}), Ji)), _i = Ii((Zi = {}, tt(Zi, Ue, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), tt(Zi, We, {
  solid: "fass",
  regular: "fasr",
  light: "fasl"
}), Zi)), wi = Ii((Qi = {}, tt(Qi, Ue, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), tt(Qi, We, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light"
}), Qi)), jv = Ii((eo = {}, tt(eo, Ue, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), tt(eo, We, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl"
}), eo)), Uv = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/, Jf = "fa-layers-text", Hv = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, Bv = Ii((to = {}, tt(to, Ue, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), tt(to, We, {
  900: "fass",
  400: "fasr",
  300: "fasl"
}), to)), Zf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Gv = Zf.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Wv = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Bn = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, xi = /* @__PURE__ */ new Set();
Object.keys(_i[Ue]).map(xi.add.bind(xi));
Object.keys(_i[We]).map(xi.add.bind(xi));
var Yv = [].concat(vl, Ni(xi), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Bn.GROUP, Bn.SWAP_OPACITY, Bn.PRIMARY, Bn.SECONDARY]).concat(Zf.map(function(e) {
  return "".concat(e, "x");
})).concat(Gv.map(function(e) {
  return "w-".concat(e);
})), ii = kn.FontAwesomeConfig || {};
function qv(e) {
  var t = He.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Kv(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (He && typeof He.querySelector == "function") {
  var Xv = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  Xv.forEach(function(e) {
    var t = ml(e, 2), n = t[0], r = t[1], i = Kv(qv(n));
    i != null && (ii[r] = i);
  });
}
var Qf = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: qf,
  replacementClass: Kf,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
ii.familyPrefix && (ii.cssPrefix = ii.familyPrefix);
var xr = K(K({}, Qf), ii);
xr.autoReplaceSvg || (xr.observeMutations = !1);
var te = {};
Object.keys(Qf).forEach(function(e) {
  Object.defineProperty(te, e, {
    enumerable: !0,
    set: function(n) {
      xr[e] = n, oi.forEach(function(r) {
        return r(te);
      });
    },
    get: function() {
      return xr[e];
    }
  });
});
Object.defineProperty(te, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    xr.cssPrefix = t, oi.forEach(function(n) {
      return n(te);
    });
  },
  get: function() {
    return xr.cssPrefix;
  }
});
kn.FontAwesomeConfig = te;
var oi = [];
function Jv(e) {
  return oi.push(e), function() {
    oi.splice(oi.indexOf(e), 1);
  };
}
var ln = _s, jt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Zv(e) {
  if (!(!e || !rn)) {
    var t = He.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var n = He.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
      var o = n[i], a = (o.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(a) > -1 && (r = o);
    }
    return He.head.insertBefore(t, r), e;
  }
}
var Qv = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ki() {
  for (var e = 12, t = ""; e-- > 0; )
    t += Qv[Math.random() * 62 | 0];
  return t;
}
function Nr(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function gl(e) {
  return e.classList ? Nr(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function em(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function e2(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, '="').concat(em(e[n]), '" ');
  }, "").trim();
}
function ya(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function yl(e) {
  return e.size !== jt.size || e.x !== jt.x || e.y !== jt.y || e.rotate !== jt.rotate || e.flipX || e.flipY;
}
function t2(e) {
  var t = e.transform, n = e.containerWidth, r = e.iconWidth, i = {
    transform: "translate(".concat(n / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), a = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(o, " ").concat(a, " ").concat(s)
  }, d = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: l,
    path: d
  };
}
function n2(e) {
  var t = e.transform, n = e.width, r = n === void 0 ? _s : n, i = e.height, o = i === void 0 ? _s : i, a = e.startCentered, s = a === void 0 ? !1 : a, l = "";
  return s && Yf ? l += "translate(".concat(t.x / ln - r / 2, "em, ").concat(t.y / ln - o / 2, "em) ") : s ? l += "translate(calc(-50% + ".concat(t.x / ln, "em), calc(-50% + ").concat(t.y / ln, "em)) ") : l += "translate(".concat(t.x / ln, "em, ").concat(t.y / ln, "em) "), l += "scale(".concat(t.size / ln * (t.flipX ? -1 : 1), ", ").concat(t.size / ln * (t.flipY ? -1 : 1), ") "), l += "rotate(".concat(t.rotate, "deg) "), l;
}
var r2 = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function tm() {
  var e = qf, t = Kf, n = te.cssPrefix, r = te.replacementClass, i = r2;
  if (n !== e || r !== t) {
    var o = new RegExp("\\.".concat(e, "\\-"), "g"), a = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    i = i.replace(o, ".".concat(n, "-")).replace(a, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return i;
}
var Zd = !1;
function $a() {
  te.autoAddCss && !Zd && (Zv(tm()), Zd = !0);
}
var i2 = {
  mixout: function() {
    return {
      dom: {
        css: tm,
        insertCss: $a
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        $a();
      },
      beforeI2svg: function() {
        $a();
      }
    };
  }
}, en = kn || {};
en[Qt] || (en[Qt] = {});
en[Qt].styles || (en[Qt].styles = {});
en[Qt].hooks || (en[Qt].hooks = {});
en[Qt].shims || (en[Qt].shims = []);
var Dt = en[Qt], nm = [], o2 = function e() {
  He.removeEventListener("DOMContentLoaded", e), Vo = 1, nm.map(function(t) {
    return t();
  });
}, Vo = !1;
rn && (Vo = (He.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(He.readyState), Vo || He.addEventListener("DOMContentLoaded", o2));
function a2(e) {
  rn && (Vo ? setTimeout(e, 0) : nm.push(e));
}
function Di(e) {
  var t = e.tag, n = e.attributes, r = n === void 0 ? {} : n, i = e.children, o = i === void 0 ? [] : i;
  return typeof e == "string" ? em(e) : "<".concat(t, " ").concat(e2(r), ">").concat(o.map(Di).join(""), "</").concat(t, ">");
}
function Qd(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var s2 = function(t, n) {
  return function(r, i, o, a) {
    return t.call(n, r, i, o, a);
  };
}, Fa = function(t, n, r, i) {
  var o = Object.keys(t), a = o.length, s = i !== void 0 ? s2(n, i) : n, l, d, u;
  for (r === void 0 ? (l = 1, u = t[o[0]]) : (l = 0, u = r); l < a; l++)
    d = o[l], u = s(u, t[d], d, t);
  return u;
};
function l2(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      var o = e.charCodeAt(n++);
      (o & 64512) == 56320 ? t.push(((i & 1023) << 10) + (o & 1023) + 65536) : (t.push(i), n--);
    } else
      t.push(i);
  }
  return t;
}
function xs(e) {
  var t = l2(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function d2(e, t) {
  var n = e.length, r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
function eu(e) {
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n], i = !!r.icon;
    return i ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function ks(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.skipHooks, i = r === void 0 ? !1 : r, o = eu(t);
  typeof Dt.hooks.addPack == "function" && !i ? Dt.hooks.addPack(e, eu(t)) : Dt.styles[e] = K(K({}, Dt.styles[e] || {}), o), e === "fas" && ks("fa", t);
}
var no, ro, io, sr = Dt.styles, u2 = Dt.shims, c2 = (no = {}, tt(no, Ue, Object.values(wi[Ue])), tt(no, We, Object.values(wi[We])), no), _l = null, rm = {}, im = {}, om = {}, am = {}, sm = {}, f2 = (ro = {}, tt(ro, Ue, Object.keys(yi[Ue])), tt(ro, We, Object.keys(yi[We])), ro);
function m2(e) {
  return ~Yv.indexOf(e);
}
function p2(e, t) {
  var n = t.split("-"), r = n[0], i = n.slice(1).join("-");
  return r === e && i !== "" && !m2(i) ? i : null;
}
var lm = function() {
  var t = function(o) {
    return Fa(sr, function(a, s, l) {
      return a[l] = Fa(s, o, {}), a;
    }, {});
  };
  rm = t(function(i, o, a) {
    if (o[3] && (i[o[3]] = a), o[2]) {
      var s = o[2].filter(function(l) {
        return typeof l == "number";
      });
      s.forEach(function(l) {
        i[l.toString(16)] = a;
      });
    }
    return i;
  }), im = t(function(i, o, a) {
    if (i[a] = a, o[2]) {
      var s = o[2].filter(function(l) {
        return typeof l == "string";
      });
      s.forEach(function(l) {
        i[l] = a;
      });
    }
    return i;
  }), sm = t(function(i, o, a) {
    var s = o[2];
    return i[a] = a, s.forEach(function(l) {
      i[l] = a;
    }), i;
  });
  var n = "far" in sr || te.autoFetchSvg, r = Fa(u2, function(i, o) {
    var a = o[0], s = o[1], l = o[2];
    return s === "far" && !n && (s = "fas"), typeof a == "string" && (i.names[a] = {
      prefix: s,
      iconName: l
    }), typeof a == "number" && (i.unicodes[a.toString(16)] = {
      prefix: s,
      iconName: l
    }), i;
  }, {
    names: {},
    unicodes: {}
  });
  om = r.names, am = r.unicodes, _l = _a(te.styleDefault, {
    family: te.familyDefault
  });
};
Jv(function(e) {
  _l = _a(e.styleDefault, {
    family: te.familyDefault
  });
});
lm();
function wl(e, t) {
  return (rm[e] || {})[t];
}
function b2(e, t) {
  return (im[e] || {})[t];
}
function Gn(e, t) {
  return (sm[e] || {})[t];
}
function dm(e) {
  return om[e] || {
    prefix: null,
    iconName: null
  };
}
function h2(e) {
  var t = am[e], n = wl("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function En() {
  return _l;
}
var xl = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function _a(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.family, r = n === void 0 ? Ue : n, i = yi[r][e], o = _i[r][e] || _i[r][i], a = e in Dt.styles ? e : null;
  return o || a || null;
}
var tu = (io = {}, tt(io, Ue, Object.keys(wi[Ue])), tt(io, We, Object.keys(wi[We])), io);
function wa(e) {
  var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.skipLookups, i = r === void 0 ? !1 : r, o = (t = {}, tt(t, Ue, "".concat(te.cssPrefix, "-").concat(Ue)), tt(t, We, "".concat(te.cssPrefix, "-").concat(We)), t), a = null, s = Ue;
  (e.includes(o[Ue]) || e.some(function(d) {
    return tu[Ue].includes(d);
  })) && (s = Ue), (e.includes(o[We]) || e.some(function(d) {
    return tu[We].includes(d);
  })) && (s = We);
  var l = e.reduce(function(d, u) {
    var f = p2(te.cssPrefix, u);
    if (sr[u] ? (u = c2[s].includes(u) ? jv[s][u] : u, a = u, d.prefix = u) : f2[s].indexOf(u) > -1 ? (a = u, d.prefix = _a(u, {
      family: s
    })) : f ? d.iconName = f : u !== te.replacementClass && u !== o[Ue] && u !== o[We] && d.rest.push(u), !i && d.prefix && d.iconName) {
      var c = a === "fa" ? dm(d.iconName) : {}, m = Gn(d.prefix, d.iconName);
      c.prefix && (a = null), d.iconName = c.iconName || m || d.iconName, d.prefix = c.prefix || d.prefix, d.prefix === "far" && !sr.far && sr.fas && !te.autoFetchSvg && (d.prefix = "fas");
    }
    return d;
  }, xl());
  return (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"), !l.prefix && s === We && (sr.fass || te.autoFetchSvg) && (l.prefix = "fass", l.iconName = Gn(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || a === "fa") && (l.prefix = En() || "fas"), l;
}
var v2 = /* @__PURE__ */ function() {
  function e() {
    Av(this, e), this.definitions = {};
  }
  return Mv(e, [{
    key: "add",
    value: function() {
      for (var n = this, r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      var a = i.reduce(this._pullDefinitions, {});
      Object.keys(a).forEach(function(s) {
        n.definitions[s] = K(K({}, n.definitions[s] || {}), a[s]), ks(s, a[s]);
        var l = wi[Ue][s];
        l && ks(l, a[s]), lm();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(n, r) {
      var i = r.prefix && r.iconName && r.icon ? {
        0: r
      } : r;
      return Object.keys(i).map(function(o) {
        var a = i[o], s = a.prefix, l = a.iconName, d = a.icon, u = d[2];
        n[s] || (n[s] = {}), u.length > 0 && u.forEach(function(f) {
          typeof f == "string" && (n[s][f] = d);
        }), n[s][l] = d;
      }), n;
    }
  }]), e;
}(), nu = [], lr = {}, hr = {}, g2 = Object.keys(hr);
function y2(e, t) {
  var n = t.mixoutsTo;
  return nu = e, lr = {}, Object.keys(hr).forEach(function(r) {
    g2.indexOf(r) === -1 && delete hr[r];
  }), nu.forEach(function(r) {
    var i = r.mixout ? r.mixout() : {};
    if (Object.keys(i).forEach(function(a) {
      typeof i[a] == "function" && (n[a] = i[a]), zo(i[a]) === "object" && Object.keys(i[a]).forEach(function(s) {
        n[a] || (n[a] = {}), n[a][s] = i[a][s];
      });
    }), r.hooks) {
      var o = r.hooks();
      Object.keys(o).forEach(function(a) {
        lr[a] || (lr[a] = []), lr[a].push(o[a]);
      });
    }
    r.provides && r.provides(hr);
  }), n;
}
function Es(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  var o = lr[e] || [];
  return o.forEach(function(a) {
    t = a.apply(null, [t].concat(r));
  }), t;
}
function Jn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var i = lr[e] || [];
  i.forEach(function(o) {
    o.apply(null, n);
  });
}
function tn() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return hr[e] ? hr[e].apply(null, t) : void 0;
}
function Ss(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, n = e.prefix || En();
  if (t)
    return t = Gn(n, t) || t, Qd(um.definitions, n, t) || Qd(Dt.styles, n, t);
}
var um = new v2(), _2 = function() {
  te.autoReplaceSvg = !1, te.observeMutations = !1, Jn("noAuto");
}, w2 = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return rn ? (Jn("beforeI2svg", t), tn("pseudoElements2svg", t), tn("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot;
    te.autoReplaceSvg === !1 && (te.autoReplaceSvg = !0), te.observeMutations = !0, a2(function() {
      k2({
        autoReplaceSvgRoot: n
      }), Jn("watch", t);
    });
  }
}, x2 = {
  icon: function(t) {
    if (t === null)
      return null;
    if (zo(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: Gn(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], r = _a(t[0]);
      return {
        prefix: r,
        iconName: Gn(r, n) || n
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(te.cssPrefix, "-")) > -1 || t.match(Uv))) {
      var i = wa(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: i.prefix || En(),
        iconName: Gn(i.prefix, i.iconName) || i.iconName
      };
    }
    if (typeof t == "string") {
      var o = En();
      return {
        prefix: o,
        iconName: Gn(o, t) || t
      };
    }
  }
}, xt = {
  noAuto: _2,
  config: te,
  dom: w2,
  parse: x2,
  library: um,
  findIconDefinition: Ss,
  toHtml: Di
}, k2 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot, r = n === void 0 ? He : n;
  (Object.keys(Dt.styles).length > 0 || te.autoFetchSvg) && rn && te.autoReplaceSvg && xt.dom.i2svg({
    node: r
  });
};
function xa(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(r) {
        return Di(r);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (rn) {
        var r = He.createElement("div");
        return r.innerHTML = e.html, r.children;
      }
    }
  }), e;
}
function E2(e) {
  var t = e.children, n = e.main, r = e.mask, i = e.attributes, o = e.styles, a = e.transform;
  if (yl(a) && n.found && !r.found) {
    var s = n.width, l = n.height, d = {
      x: s / l / 2,
      y: 0.5
    };
    i.style = ya(K(K({}, o), {}, {
      "transform-origin": "".concat(d.x + a.x / 16, "em ").concat(d.y + a.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: t
  }];
}
function S2(e) {
  var t = e.prefix, n = e.iconName, r = e.children, i = e.attributes, o = e.symbol, a = o === !0 ? "".concat(t, "-").concat(te.cssPrefix, "-").concat(n) : o;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: K(K({}, i), {}, {
        id: a
      }),
      children: r
    }]
  }];
}
function kl(e) {
  var t = e.icons, n = t.main, r = t.mask, i = e.prefix, o = e.iconName, a = e.transform, s = e.symbol, l = e.title, d = e.maskId, u = e.titleId, f = e.extra, c = e.watchable, m = c === void 0 ? !1 : c, p = r.found ? r : n, h = p.width, x = p.height, g = i === "fak", v = [te.replacementClass, o ? "".concat(te.cssPrefix, "-").concat(o) : ""].filter(function(z) {
    return f.classes.indexOf(z) === -1;
  }).filter(function(z) {
    return z !== "" || !!z;
  }).concat(f.classes).join(" "), w = {
    children: [],
    attributes: K(K({}, f.attributes), {}, {
      "data-prefix": i,
      "data-icon": o,
      class: v,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(h, " ").concat(x)
    })
  }, k = g && !~f.classes.indexOf("fa-fw") ? {
    width: "".concat(h / x * 16 * 0.0625, "em")
  } : {};
  m && (w.attributes[Xn] = ""), l && (w.children.push({
    tag: "title",
    attributes: {
      id: w.attributes["aria-labelledby"] || "title-".concat(u || ki())
    },
    children: [l]
  }), delete w.attributes.title);
  var A = K(K({}, w), {}, {
    prefix: i,
    iconName: o,
    main: n,
    mask: r,
    maskId: d,
    transform: a,
    symbol: s,
    styles: K(K({}, k), f.styles)
  }), F = r.found && n.found ? tn("generateAbstractMask", A) || {
    children: [],
    attributes: {}
  } : tn("generateAbstractIcon", A) || {
    children: [],
    attributes: {}
  }, j = F.children, R = F.attributes;
  return A.children = j, A.attributes = R, s ? S2(A) : E2(A);
}
function ru(e) {
  var t = e.content, n = e.width, r = e.height, i = e.transform, o = e.title, a = e.extra, s = e.watchable, l = s === void 0 ? !1 : s, d = K(K(K({}, a.attributes), o ? {
    title: o
  } : {}), {}, {
    class: a.classes.join(" ")
  });
  l && (d[Xn] = "");
  var u = K({}, a.styles);
  yl(i) && (u.transform = n2({
    transform: i,
    startCentered: !0,
    width: n,
    height: r
  }), u["-webkit-transform"] = u.transform);
  var f = ya(u);
  f.length > 0 && (d.style = f);
  var c = [];
  return c.push({
    tag: "span",
    attributes: d,
    children: [t]
  }), o && c.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), c;
}
function O2(e) {
  var t = e.content, n = e.title, r = e.extra, i = K(K(K({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), o = ya(r.styles);
  o.length > 0 && (i.style = o);
  var a = [];
  return a.push({
    tag: "span",
    attributes: i,
    children: [t]
  }), n && a.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), a;
}
var za = Dt.styles;
function Os(e) {
  var t = e[0], n = e[1], r = e.slice(4), i = ml(r, 1), o = i[0], a = null;
  return Array.isArray(o) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(te.cssPrefix, "-").concat(Bn.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(te.cssPrefix, "-").concat(Bn.SECONDARY),
        fill: "currentColor",
        d: o[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(te.cssPrefix, "-").concat(Bn.PRIMARY),
        fill: "currentColor",
        d: o[1]
      }
    }]
  } : a = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: o
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: a
  };
}
var T2 = {
  found: !1,
  width: 512,
  height: 512
};
function C2(e, t) {
  !Xf && !te.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Ts(e, t) {
  var n = t;
  return t === "fa" && te.styleDefault !== null && (t = En()), new Promise(function(r, i) {
    if (tn("missingIconAbstract"), n === "fa") {
      var o = dm(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && za[t] && za[t][e]) {
      var a = za[t][e];
      return r(Os(a));
    }
    C2(e, t), r(K(K({}, T2), {}, {
      icon: te.showMissingIcons && e ? tn("missingIconAbstract") || {} : {}
    }));
  });
}
var iu = function() {
}, Cs = te.measurePerformance && Xi && Xi.mark && Xi.measure ? Xi : {
  mark: iu,
  measure: iu
}, Jr = 'FA "6.4.0"', A2 = function(t) {
  return Cs.mark("".concat(Jr, " ").concat(t, " begins")), function() {
    return cm(t);
  };
}, cm = function(t) {
  Cs.mark("".concat(Jr, " ").concat(t, " ends")), Cs.measure("".concat(Jr, " ").concat(t), "".concat(Jr, " ").concat(t, " begins"), "".concat(Jr, " ").concat(t, " ends"));
}, El = {
  begin: A2,
  end: cm
}, wo = function() {
};
function ou(e) {
  var t = e.getAttribute ? e.getAttribute(Xn) : null;
  return typeof t == "string";
}
function M2(e) {
  var t = e.getAttribute ? e.getAttribute(bl) : null, n = e.getAttribute ? e.getAttribute(hl) : null;
  return t && n;
}
function N2(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(te.replacementClass);
}
function I2() {
  if (te.autoReplaceSvg === !0)
    return xo.replace;
  var e = xo[te.autoReplaceSvg];
  return e || xo.replace;
}
function D2(e) {
  return He.createElementNS("http://www.w3.org/2000/svg", e);
}
function P2(e) {
  return He.createElement(e);
}
function fm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.ceFn, r = n === void 0 ? e.tag === "svg" ? D2 : P2 : n;
  if (typeof e == "string")
    return He.createTextNode(e);
  var i = r(e.tag);
  Object.keys(e.attributes || []).forEach(function(a) {
    i.setAttribute(a, e.attributes[a]);
  });
  var o = e.children || [];
  return o.forEach(function(a) {
    i.appendChild(fm(a, {
      ceFn: r
    }));
  }), i;
}
function R2(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var xo = {
  replace: function(t) {
    var n = t[0];
    if (n.parentNode)
      if (t[1].forEach(function(i) {
        n.parentNode.insertBefore(fm(i), n);
      }), n.getAttribute(Xn) === null && te.keepOriginalSource) {
        var r = He.createComment(R2(n));
        n.parentNode.replaceChild(r, n);
      } else
        n.remove();
  },
  nest: function(t) {
    var n = t[0], r = t[1];
    if (~gl(n).indexOf(te.replacementClass))
      return xo.replace(t);
    var i = new RegExp("".concat(te.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var o = r[0].attributes.class.split(" ").reduce(function(s, l) {
        return l === te.replacementClass || l.match(i) ? s.toSvg.push(l) : s.toNode.push(l), s;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", o.toNode.join(" "));
    }
    var a = r.map(function(s) {
      return Di(s);
    }).join(`
`);
    n.setAttribute(Xn, ""), n.innerHTML = a;
  }
};
function au(e) {
  e();
}
function mm(e, t) {
  var n = typeof t == "function" ? t : wo;
  if (e.length === 0)
    n();
  else {
    var r = au;
    te.mutateApproach === zv && (r = kn.requestAnimationFrame || au), r(function() {
      var i = I2(), o = El.begin("mutate");
      e.map(i), o(), n();
    });
  }
}
var Sl = !1;
function pm() {
  Sl = !0;
}
function As() {
  Sl = !1;
}
var jo = null;
function su(e) {
  if (Xd && te.observeMutations) {
    var t = e.treeCallback, n = t === void 0 ? wo : t, r = e.nodeCallback, i = r === void 0 ? wo : r, o = e.pseudoElementsCallback, a = o === void 0 ? wo : o, s = e.observeMutationsRoot, l = s === void 0 ? He : s;
    jo = new Xd(function(d) {
      if (!Sl) {
        var u = En();
        Nr(d).forEach(function(f) {
          if (f.type === "childList" && f.addedNodes.length > 0 && !ou(f.addedNodes[0]) && (te.searchPseudoElements && a(f.target), n(f.target)), f.type === "attributes" && f.target.parentNode && te.searchPseudoElements && a(f.target.parentNode), f.type === "attributes" && ou(f.target) && ~Wv.indexOf(f.attributeName))
            if (f.attributeName === "class" && M2(f.target)) {
              var c = wa(gl(f.target)), m = c.prefix, p = c.iconName;
              f.target.setAttribute(bl, m || u), p && f.target.setAttribute(hl, p);
            } else
              N2(f.target) && i(f.target);
        });
      }
    }), rn && jo.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function L2() {
  jo && jo.disconnect();
}
function $2(e) {
  var t = e.getAttribute("style"), n = [];
  return t && (n = t.split(";").reduce(function(r, i) {
    var o = i.split(":"), a = o[0], s = o.slice(1);
    return a && s.length > 0 && (r[a] = s.join(":").trim()), r;
  }, {})), n;
}
function F2(e) {
  var t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "", i = wa(gl(e));
  return i.prefix || (i.prefix = En()), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = b2(i.prefix, e.innerText) || wl(i.prefix, xs(e.innerText))), !i.iconName && te.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function z2(e) {
  var t = Nr(e.attributes).reduce(function(i, o) {
    return i.name !== "class" && i.name !== "style" && (i[o.name] = o.value), i;
  }, {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return te.autoA11y && (n ? t["aria-labelledby"] = "".concat(te.replacementClass, "-title-").concat(r || ki()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function V2() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: jt,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function lu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, n = F2(e), r = n.iconName, i = n.prefix, o = n.rest, a = z2(e), s = Es("parseNodeAttributes", {}, e), l = t.styleParser ? $2(e) : [];
  return K({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: i,
    transform: jt,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: o,
      styles: l,
      attributes: a
    }
  }, s);
}
var j2 = Dt.styles;
function bm(e) {
  var t = te.autoReplaceSvg === "nest" ? lu(e, {
    styleParser: !1
  }) : lu(e);
  return ~t.extra.classes.indexOf(Jf) ? tn("generateLayersText", e, t) : tn("generateSvgReplacementMutation", e, t);
}
var Sn = /* @__PURE__ */ new Set();
vl.map(function(e) {
  Sn.add("fa-".concat(e));
});
Object.keys(yi[Ue]).map(Sn.add.bind(Sn));
Object.keys(yi[We]).map(Sn.add.bind(Sn));
Sn = Ni(Sn);
function du(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!rn)
    return Promise.resolve();
  var n = He.documentElement.classList, r = function(f) {
    return n.add("".concat(Jd, "-").concat(f));
  }, i = function(f) {
    return n.remove("".concat(Jd, "-").concat(f));
  }, o = te.autoFetchSvg ? Sn : vl.map(function(u) {
    return "fa-".concat(u);
  }).concat(Object.keys(j2));
  o.includes("fa") || o.push("fa");
  var a = [".".concat(Jf, ":not([").concat(Xn, "])")].concat(o.map(function(u) {
    return ".".concat(u, ":not([").concat(Xn, "])");
  })).join(", ");
  if (a.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = Nr(e.querySelectorAll(a));
  } catch {
  }
  if (s.length > 0)
    r("pending"), i("complete");
  else
    return Promise.resolve();
  var l = El.begin("onTree"), d = s.reduce(function(u, f) {
    try {
      var c = bm(f);
      c && u.push(c);
    } catch (m) {
      Xf || m.name === "MissingIcon" && console.error(m);
    }
    return u;
  }, []);
  return new Promise(function(u, f) {
    Promise.all(d).then(function(c) {
      mm(c, function() {
        r("active"), r("complete"), i("pending"), typeof t == "function" && t(), l(), u();
      });
    }).catch(function(c) {
      l(), f(c);
    });
  });
}
function U2(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  bm(e).then(function(n) {
    n && mm([n], t);
  });
}
function H2(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || {}).icon ? t : Ss(t || {}), i = n.mask;
    return i && (i = (i || {}).icon ? i : Ss(i || {})), e(r, K(K({}, n), {}, {
      mask: i
    }));
  };
}
var B2 = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, i = r === void 0 ? jt : r, o = n.symbol, a = o === void 0 ? !1 : o, s = n.mask, l = s === void 0 ? null : s, d = n.maskId, u = d === void 0 ? null : d, f = n.title, c = f === void 0 ? null : f, m = n.titleId, p = m === void 0 ? null : m, h = n.classes, x = h === void 0 ? [] : h, g = n.attributes, v = g === void 0 ? {} : g, w = n.styles, k = w === void 0 ? {} : w;
  if (t) {
    var A = t.prefix, F = t.iconName, j = t.icon;
    return xa(K({
      type: "icon"
    }, t), function() {
      return Jn("beforeDOMElementCreation", {
        iconDefinition: t,
        params: n
      }), te.autoA11y && (c ? v["aria-labelledby"] = "".concat(te.replacementClass, "-title-").concat(p || ki()) : (v["aria-hidden"] = "true", v.focusable = "false")), kl({
        icons: {
          main: Os(j),
          mask: l ? Os(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: A,
        iconName: F,
        transform: K(K({}, jt), i),
        symbol: a,
        title: c,
        maskId: u,
        titleId: p,
        extra: {
          attributes: v,
          styles: k,
          classes: x
        }
      });
    });
  }
}, G2 = {
  mixout: function() {
    return {
      icon: H2(B2)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = du, n.nodeCallback = U2, n;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(n) {
      var r = n.node, i = r === void 0 ? He : r, o = n.callback, a = o === void 0 ? function() {
      } : o;
      return du(i, a);
    }, t.generateSvgReplacementMutation = function(n, r) {
      var i = r.iconName, o = r.title, a = r.titleId, s = r.prefix, l = r.transform, d = r.symbol, u = r.mask, f = r.maskId, c = r.extra;
      return new Promise(function(m, p) {
        Promise.all([Ts(i, s), u.iconName ? Ts(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(h) {
          var x = ml(h, 2), g = x[0], v = x[1];
          m([n, kl({
            icons: {
              main: g,
              mask: v
            },
            prefix: s,
            iconName: i,
            transform: l,
            symbol: d,
            maskId: f,
            title: o,
            titleId: a,
            extra: c,
            watchable: !0
          })]);
        }).catch(p);
      });
    }, t.generateAbstractIcon = function(n) {
      var r = n.children, i = n.attributes, o = n.main, a = n.transform, s = n.styles, l = ya(s);
      l.length > 0 && (i.style = l);
      var d;
      return yl(a) && (d = tn("generateAbstractTransformGrouping", {
        main: o,
        transform: a,
        containerWidth: o.width,
        iconWidth: o.width
      })), r.push(d || o.icon), {
        children: r,
        attributes: i
      };
    };
  }
}, W2 = {
  mixout: function() {
    return {
      layer: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.classes, o = i === void 0 ? [] : i;
        return xa({
          type: "layer"
        }, function() {
          Jn("beforeDOMElementCreation", {
            assembler: n,
            params: r
          });
          var a = [];
          return n(function(s) {
            Array.isArray(s) ? s.map(function(l) {
              a = a.concat(l.abstract);
            }) : a = a.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(te.cssPrefix, "-layers")].concat(Ni(o)).join(" ")
            },
            children: a
          }];
        });
      }
    };
  }
}, Y2 = {
  mixout: function() {
    return {
      counter: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.title, o = i === void 0 ? null : i, a = r.classes, s = a === void 0 ? [] : a, l = r.attributes, d = l === void 0 ? {} : l, u = r.styles, f = u === void 0 ? {} : u;
        return xa({
          type: "counter",
          content: n
        }, function() {
          return Jn("beforeDOMElementCreation", {
            content: n,
            params: r
          }), O2({
            content: n.toString(),
            title: o,
            extra: {
              attributes: d,
              styles: f,
              classes: ["".concat(te.cssPrefix, "-layers-counter")].concat(Ni(s))
            }
          });
        });
      }
    };
  }
}, q2 = {
  mixout: function() {
    return {
      text: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.transform, o = i === void 0 ? jt : i, a = r.title, s = a === void 0 ? null : a, l = r.classes, d = l === void 0 ? [] : l, u = r.attributes, f = u === void 0 ? {} : u, c = r.styles, m = c === void 0 ? {} : c;
        return xa({
          type: "text",
          content: n
        }, function() {
          return Jn("beforeDOMElementCreation", {
            content: n,
            params: r
          }), ru({
            content: n,
            transform: K(K({}, jt), o),
            title: s,
            extra: {
              attributes: f,
              styles: m,
              classes: ["".concat(te.cssPrefix, "-layers-text")].concat(Ni(d))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(n, r) {
      var i = r.title, o = r.transform, a = r.extra, s = null, l = null;
      if (Yf) {
        var d = parseInt(getComputedStyle(n).fontSize, 10), u = n.getBoundingClientRect();
        s = u.width / d, l = u.height / d;
      }
      return te.autoA11y && !i && (a.attributes["aria-hidden"] = "true"), Promise.resolve([n, ru({
        content: n.innerHTML,
        width: s,
        height: l,
        transform: o,
        title: i,
        extra: a,
        watchable: !0
      })]);
    };
  }
}, K2 = new RegExp('"', "ug"), uu = [1105920, 1112319];
function X2(e) {
  var t = e.replace(K2, ""), n = d2(t, 0), r = n >= uu[0] && n <= uu[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: xs(i ? t[0] : t),
    isSecondary: r || i
  };
}
function cu(e, t) {
  var n = "".concat(Fv).concat(t.replace(":", "-"));
  return new Promise(function(r, i) {
    if (e.getAttribute(n) !== null)
      return r();
    var o = Nr(e.children), a = o.filter(function(j) {
      return j.getAttribute(ws) === t;
    })[0], s = kn.getComputedStyle(e, t), l = s.getPropertyValue("font-family").match(Hv), d = s.getPropertyValue("font-weight"), u = s.getPropertyValue("content");
    if (a && !l)
      return e.removeChild(a), r();
    if (l && u !== "none" && u !== "") {
      var f = s.getPropertyValue("content"), c = ~["Sharp"].indexOf(l[2]) ? We : Ue, m = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? _i[c][l[2].toLowerCase()] : Bv[c][d], p = X2(f), h = p.value, x = p.isSecondary, g = l[0].startsWith("FontAwesome"), v = wl(m, h), w = v;
      if (g) {
        var k = h2(h);
        k.iconName && k.prefix && (v = k.iconName, m = k.prefix);
      }
      if (v && !x && (!a || a.getAttribute(bl) !== m || a.getAttribute(hl) !== w)) {
        e.setAttribute(n, w), a && e.removeChild(a);
        var A = V2(), F = A.extra;
        F.attributes[ws] = t, Ts(v, m).then(function(j) {
          var R = kl(K(K({}, A), {}, {
            icons: {
              main: j,
              mask: xl()
            },
            prefix: m,
            iconName: w,
            extra: F,
            watchable: !0
          })), z = He.createElement("svg");
          t === "::before" ? e.insertBefore(z, e.firstChild) : e.appendChild(z), z.outerHTML = R.map(function(J) {
            return Di(J);
          }).join(`
`), e.removeAttribute(n), r();
        }).catch(i);
      } else
        r();
    } else
      r();
  });
}
function J2(e) {
  return Promise.all([cu(e, "::before"), cu(e, "::after")]);
}
function Z2(e) {
  return e.parentNode !== document.head && !~Vv.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(ws) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function fu(e) {
  if (rn)
    return new Promise(function(t, n) {
      var r = Nr(e.querySelectorAll("*")).filter(Z2).map(J2), i = El.begin("searchPseudoElements");
      pm(), Promise.all(r).then(function() {
        i(), As(), t();
      }).catch(function() {
        i(), As(), n();
      });
    });
}
var Q2 = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.pseudoElementsCallback = fu, n;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(n) {
      var r = n.node, i = r === void 0 ? He : r;
      te.searchPseudoElements && fu(i);
    };
  }
}, mu = !1, eg = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          pm(), mu = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        su(Es("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        L2();
      },
      watch: function(n) {
        var r = n.observeMutationsRoot;
        mu ? As() : su(Es("mutationObserverCallbacks", {
          observeMutationsRoot: r
        }));
      }
    };
  }
}, pu = function(t) {
  var n = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(r, i) {
    var o = i.toLowerCase().split("-"), a = o[0], s = o.slice(1).join("-");
    if (a && s === "h")
      return r.flipX = !0, r;
    if (a && s === "v")
      return r.flipY = !0, r;
    if (s = parseFloat(s), isNaN(s))
      return r;
    switch (a) {
      case "grow":
        r.size = r.size + s;
        break;
      case "shrink":
        r.size = r.size - s;
        break;
      case "left":
        r.x = r.x - s;
        break;
      case "right":
        r.x = r.x + s;
        break;
      case "up":
        r.y = r.y - s;
        break;
      case "down":
        r.y = r.y + s;
        break;
      case "rotate":
        r.rotate = r.rotate + s;
        break;
    }
    return r;
  }, n);
}, tg = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return pu(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var i = r.getAttribute("data-fa-transform");
        return i && (n.transform = pu(i)), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(n) {
      var r = n.main, i = n.transform, o = n.containerWidth, a = n.iconWidth, s = {
        transform: "translate(".concat(o / 2, " 256)")
      }, l = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "), d = "scale(".concat(i.size / 16 * (i.flipX ? -1 : 1), ", ").concat(i.size / 16 * (i.flipY ? -1 : 1), ") "), u = "rotate(".concat(i.rotate, " 0 0)"), f = {
        transform: "".concat(l, " ").concat(d, " ").concat(u)
      }, c = {
        transform: "translate(".concat(a / 2 * -1, " -256)")
      }, m = {
        outer: s,
        inner: f,
        path: c
      };
      return {
        tag: "g",
        attributes: K({}, m.outer),
        children: [{
          tag: "g",
          attributes: K({}, m.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: K(K({}, r.icon.attributes), m.path)
          }]
        }]
      };
    };
  }
}, Va = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function bu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function ng(e) {
  return e.tag === "g" ? e.children : [e];
}
var rg = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var i = r.getAttribute("data-fa-mask"), o = i ? wa(i.split(" ").map(function(a) {
          return a.trim();
        })) : xl();
        return o.prefix || (o.prefix = En()), n.mask = o, n.maskId = r.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(n) {
      var r = n.children, i = n.attributes, o = n.main, a = n.mask, s = n.maskId, l = n.transform, d = o.width, u = o.icon, f = a.width, c = a.icon, m = t2({
        transform: l,
        containerWidth: f,
        iconWidth: d
      }), p = {
        tag: "rect",
        attributes: K(K({}, Va), {}, {
          fill: "white"
        })
      }, h = u.children ? {
        children: u.children.map(bu)
      } : {}, x = {
        tag: "g",
        attributes: K({}, m.inner),
        children: [bu(K({
          tag: u.tag,
          attributes: K(K({}, u.attributes), m.path)
        }, h))]
      }, g = {
        tag: "g",
        attributes: K({}, m.outer),
        children: [x]
      }, v = "mask-".concat(s || ki()), w = "clip-".concat(s || ki()), k = {
        tag: "mask",
        attributes: K(K({}, Va), {}, {
          id: v,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [p, g]
      }, A = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: w
          },
          children: ng(c)
        }, k]
      };
      return r.push(A, {
        tag: "rect",
        attributes: K({
          fill: "currentColor",
          "clip-path": "url(#".concat(w, ")"),
          mask: "url(#".concat(v, ")")
        }, Va)
      }), {
        children: r,
        attributes: i
      };
    };
  }
}, ig = {
  provides: function(t) {
    var n = !1;
    kn.matchMedia && (n = kn.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var r = [], i = {
        fill: "currentColor"
      }, o = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: K(K({}, i), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var a = K(K({}, o), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: K(K({}, i), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return n || s.children.push({
        tag: "animate",
        attributes: K(K({}, o), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: K(K({}, a), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(s), r.push({
        tag: "path",
        attributes: K(K({}, i), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: K(K({}, a), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), n || r.push({
        tag: "path",
        attributes: K(K({}, i), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: K(K({}, a), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: r
      };
    };
  }
}, og = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var i = r.getAttribute("data-fa-symbol"), o = i === null ? !1 : i === "" ? !0 : i;
        return n.symbol = o, n;
      }
    };
  }
}, ag = [i2, G2, W2, Y2, q2, Q2, eg, tg, rg, ig, og];
y2(ag, {
  mixoutsTo: xt
});
xt.noAuto;
xt.config;
var hm = xt.library;
xt.dom;
var Ms = xt.parse;
xt.findIconDefinition;
xt.toHtml;
var sg = xt.icon;
xt.layer;
xt.text;
xt.counter;
function hu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hu(Object(n), !0).forEach(function(r) {
      vt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hu(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Uo(e) {
  "@babel/helpers - typeof";
  return Uo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Uo(e);
}
function vt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function lg(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function dg(e, t) {
  if (e == null)
    return {};
  var n = lg(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var ug = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, vm = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(g, v, w) {
      if (!d(v) || f(v) || c(v) || m(v) || l(v))
        return v;
      var k, A = 0, F = 0;
      if (u(v))
        for (k = [], F = v.length; A < F; A++)
          k.push(n(g, v[A], w));
      else {
        k = {};
        for (var j in v)
          Object.prototype.hasOwnProperty.call(v, j) && (k[g(j, w)] = n(g, v[j], w));
      }
      return k;
    }, r = function(g, v) {
      v = v || {};
      var w = v.separator || "_", k = v.split || /(?=[A-Z])/;
      return g.split(k).join(w);
    }, i = function(g) {
      return p(g) ? g : (g = g.replace(/[\-_\s]+(.)?/g, function(v, w) {
        return w ? w.toUpperCase() : "";
      }), g.substr(0, 1).toLowerCase() + g.substr(1));
    }, o = function(g) {
      var v = i(g);
      return v.substr(0, 1).toUpperCase() + v.substr(1);
    }, a = function(g, v) {
      return r(g, v).toLowerCase();
    }, s = Object.prototype.toString, l = function(g) {
      return typeof g == "function";
    }, d = function(g) {
      return g === Object(g);
    }, u = function(g) {
      return s.call(g) == "[object Array]";
    }, f = function(g) {
      return s.call(g) == "[object Date]";
    }, c = function(g) {
      return s.call(g) == "[object RegExp]";
    }, m = function(g) {
      return s.call(g) == "[object Boolean]";
    }, p = function(g) {
      return g = g - 0, g === g;
    }, h = function(g, v) {
      var w = v && "process" in v ? v.process : v;
      return typeof w != "function" ? g : function(k, A) {
        return w(k, g, A);
      };
    }, x = {
      camelize: i,
      decamelize: a,
      pascalize: o,
      depascalize: a,
      camelizeKeys: function(g, v) {
        return n(h(i, v), g);
      },
      decamelizeKeys: function(g, v) {
        return n(h(a, v), g, v);
      },
      pascalizeKeys: function(g, v) {
        return n(h(o, v), g);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = x : t.humps = x;
  })(ug);
})(vm);
var cg = vm.exports, fg = ["class", "style"];
function mg(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), i = cg.camelize(n.slice(0, r)), o = n.slice(r + 1).trim();
    return t[i] = o, t;
  }, {});
}
function pg(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function gm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(l) {
    return gm(l);
  }), i = Object.keys(e.attributes || {}).reduce(function(l, d) {
    var u = e.attributes[d];
    switch (d) {
      case "class":
        l.class = pg(u);
        break;
      case "style":
        l.style = mg(u);
        break;
      default:
        l.attrs[d] = u;
    }
    return l;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var o = n.style, a = o === void 0 ? {} : o, s = dg(n, fg);
  return je(e.tag, qt(qt(qt({}, t), {}, {
    class: i.class,
    style: qt(qt({}, i.style), a)
  }, i.attrs), s), r);
}
var ym = !1;
try {
  ym = !0;
} catch {
}
function bg() {
  if (!ym && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function ja(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? vt({}, e, t) : {};
}
function hg(e) {
  var t, n = (t = {
    "fa-spin": e.spin,
    "fa-pulse": e.pulse,
    "fa-fw": e.fixedWidth,
    "fa-border": e.border,
    "fa-li": e.listItem,
    "fa-inverse": e.inverse,
    "fa-flip": e.flip === !0,
    "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
    "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
  }, vt(t, "fa-".concat(e.size), e.size !== null), vt(t, "fa-rotate-".concat(e.rotation), e.rotation !== null), vt(t, "fa-pull-".concat(e.pull), e.pull !== null), vt(t, "fa-swap-opacity", e.swapOpacity), vt(t, "fa-bounce", e.bounce), vt(t, "fa-shake", e.shake), vt(t, "fa-beat", e.beat), vt(t, "fa-fade", e.fade), vt(t, "fa-beat-fade", e.beatFade), vt(t, "fa-flash", e.flash), vt(t, "fa-spin-pulse", e.spinPulse), vt(t, "fa-spin-reverse", e.spinReverse), t);
  return Object.keys(n).map(function(r) {
    return n[r] ? r : null;
  }).filter(function(r) {
    return r;
  });
}
function vu(e) {
  if (e && Uo(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Ms.icon)
    return Ms.icon(e);
  if (e === null)
    return null;
  if (Uo(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
var Ho = pe({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: !1
    },
    fixedWidth: {
      type: Boolean,
      default: !1
    },
    flip: {
      type: [Boolean, String],
      default: !1,
      validator: function(t) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(t) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: !0
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    listItem: {
      type: Boolean,
      default: !1
    },
    pull: {
      type: String,
      default: null,
      validator: function(t) {
        return ["right", "left"].indexOf(t) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(t) {
        return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(t) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(t) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: !1
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: !1
    },
    bounce: {
      type: Boolean,
      default: !1
    },
    shake: {
      type: Boolean,
      default: !1
    },
    beat: {
      type: Boolean,
      default: !1
    },
    fade: {
      type: Boolean,
      default: !1
    },
    beatFade: {
      type: Boolean,
      default: !1
    },
    flash: {
      type: Boolean,
      default: !1
    },
    spinPulse: {
      type: Boolean,
      default: !1
    },
    spinReverse: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var r = n.attrs, i = I(function() {
      return vu(t.icon);
    }), o = I(function() {
      return ja("classes", hg(t));
    }), a = I(function() {
      return ja("transform", typeof t.transform == "string" ? Ms.transform(t.transform) : t.transform);
    }), s = I(function() {
      return ja("mask", vu(t.mask));
    }), l = I(function() {
      return sg(i.value, qt(qt(qt(qt({}, o.value), a.value), s.value), {}, {
        symbol: t.symbol,
        title: t.title
      }));
    });
    pt(l, function(u) {
      if (!u)
        return bg("Could not find one or more icon(s)", i.value, s.value);
    }, {
      immediate: !0
    });
    var d = I(function() {
      return l.value ? gm(l.value.abstract[0], {}, r) : null;
    });
    return function() {
      return d.value;
    };
  }
}), vg = {
  prefix: "fab",
  iconName: "monero",
  icon: [496, 512, [], "f3d0", "M352 384h108.4C417 455.9 338.1 504 248 504S79 455.9 35.6 384H144V256.2L248 361l104-105v128zM88 336V128l159.4 159.4L408 128v208h74.8c8.5-25.1 13.2-52 13.2-80C496 119 385 8 248 8S0 119 0 256c0 28 4.6 54.9 13.2 80H88z"]
}, gg = {
  prefix: "fab",
  iconName: "cc-stripe",
  icon: [576, 512, [], "f1f5", "M492.4 220.8c-8.9 0-18.7 6.7-18.7 22.7h36.7c0-16-9.3-22.7-18-22.7zM375 223.4c-8.2 0-13.3 2.9-17 7l.2 52.8c3.5 3.7 8.5 6.7 16.8 6.7 13.1 0 21.9-14.3 21.9-33.4 0-18.6-9-33.2-21.9-33.1zM528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM122.2 281.1c0 25.6-20.3 40.1-49.9 40.3-12.2 0-25.6-2.4-38.8-8.1v-33.9c12 6.4 27.1 11.3 38.9 11.3 7.9 0 13.6-2.1 13.6-8.7 0-17-54-10.6-54-49.9 0-25.2 19.2-40.2 48-40.2 11.8 0 23.5 1.8 35.3 6.5v33.4c-10.8-5.8-24.5-9.1-35.3-9.1-7.5 0-12.1 2.2-12.1 7.7 0 16 54.3 8.4 54.3 50.7zm68.8-56.6h-27V275c0 20.9 22.5 14.4 27 12.6v28.9c-4.7 2.6-13.3 4.7-24.9 4.7-21.1 0-36.9-15.5-36.9-36.5l.2-113.9 34.7-7.4v30.8H191zm74 2.4c-4.5-1.5-18.7-3.6-27.1 7.4v84.4h-35.5V194.2h30.7l2.2 10.5c8.3-15.3 24.9-12.2 29.6-10.5h.1zm44.1 91.8h-35.7V194.2h35.7zm0-142.9l-35.7 7.6v-28.9l35.7-7.6zm74.1 145.5c-12.4 0-20-5.3-25.1-9l-.1 40.2-35.5 7.5V194.2h31.3l1.8 8.8c4.9-4.5 13.9-11.1 27.8-11.1 24.9 0 48.4 22.5 48.4 63.8 0 45.1-23.2 65.5-48.6 65.6zm160.4-51.5h-69.5c1.6 16.6 13.8 21.5 27.6 21.5 14.1 0 25.2-3 34.9-7.9V312c-9.7 5.3-22.4 9.2-39.4 9.2-34.6 0-58.8-21.7-58.8-64.5 0-36.2 20.5-64.9 54.3-64.9 33.7 0 51.3 28.7 51.3 65.1 0 3.5-.3 10.9-.4 12.9z"]
}, yg = {
  prefix: "fab",
  iconName: "bitcoin",
  icon: [512, 512, [], "f379", "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"]
}, _g = {
  prefix: "fab",
  iconName: "paypal",
  icon: [384, 512, [], "f1ed", "M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"]
}, wg = {
  prefix: "fab",
  iconName: "ethereum",
  icon: [320, 512, [], "f42e", "M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"]
}, xg = {
  prefix: "fas",
  iconName: "v",
  icon: [384, 512, [118], "56", "M19.7 34.5c16.3-6.8 35 .9 41.8 17.2L192 364.8 322.5 51.7c6.8-16.3 25.5-24 41.8-17.2s24 25.5 17.2 41.8l-160 384c-5 11.9-16.6 19.7-29.5 19.7s-24.6-7.8-29.5-19.7L2.5 76.3c-6.8-16.3 .9-35 17.2-41.8z"]
}, kg = {
  prefix: "fas",
  iconName: "money-bill-wave",
  icon: [576, 512, [], "f53a", "M0 112.5V422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM64 352c35.3 0 64 28.7 64 64H64V352zm64-208c0 35.3-28.7 64-64 64V144h64zM512 304v64H448c0-35.3 28.7-64 64-64zM448 96h64v64c-35.3 0-64-28.7-64-64z"]
}, Eg = {
  prefix: "fas",
  iconName: "bitcoin-sign",
  icon: [320, 512, [], "e0b4", "M48 32C48 14.3 62.3 0 80 0s32 14.3 32 32V64h32V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64c0 1.5-.1 3.1-.3 4.5C254.1 82.2 288 125.1 288 176c0 24.2-7.7 46.6-20.7 64.9c31.7 19.8 52.7 55 52.7 95.1c0 61.9-50.1 112-112 112v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H112v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H41.7C18.7 448 0 429.3 0 406.3V288 265.7 224 101.6C0 80.8 16.8 64 37.6 64H48V32zM64 224H176c26.5 0 48-21.5 48-48s-21.5-48-48-48H64v96zm112 64H64v96H208c26.5 0 48-21.5 48-48s-21.5-48-48-48H176z"]
}, Sg = {
  prefix: "fas",
  iconName: "wallet",
  icon: [512, 512, [], "f555", "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, Og = {
  prefix: "fas",
  iconName: "litecoin-sign",
  icon: [384, 512, [], "e1d3", "M128 64c0-17.7-14.3-32-32-32S64 46.3 64 64V213.6L23.2 225.2c-17 4.9-26.8 22.6-22 39.6s22.6 26.8 39.6 22L64 280.1V448c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H128V261.9l136.8-39.1c17-4.9 26.8-22.6 22-39.6s-22.6-26.8-39.6-22L128 195.3V64z"]
}, Tg = {
  prefix: "fas",
  iconName: "coins",
  icon: [512, 512, [], "f51e", "M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"]
}, Cg = {
  prefix: "fas",
  iconName: "credit-card",
  icon: [576, 512, [128179, 62083, "credit-card-alt"], "f09d", "M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"]
}, _m = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, Ag = {
  prefix: "fas",
  iconName: "dollar-sign",
  icon: [320, 512, [128178, 61781, "dollar", "usd"], "24", "M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"]
};
const Mg = {
  name: "Cryptoicon",
  props: {
    symbol: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    },
    size: {
      type: [String, Number],
      default: "24"
    },
    generic: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      lookupSymbol: /* @__PURE__ */ new Map([["BCHSV", "BSV"], ["BCHABC", "BAB"]])
    };
  },
  computed: {
    lSymbol() {
      return this.symbol && this.symbol.toLowerCase();
    },
    uSymbol() {
      return this.symbol && this.symbol.toUpperCase();
    },
    icon() {
      const e = this.lookupSymbol.has(this.uSymbol) ? this.lookupSymbol.get(this.uSymbol) : this.symbol;
      let t = this.$options.lib.find((n) => n.symbol === e.toLowerCase());
      if (t)
        return this.color ? t.plainIcon(this.color) : t.colorIcon();
      if (this.generic) {
        let n = this.$options.lib.find((r) => r.symbol == "generic");
        if (n)
          return this.color ? n.plainIcon(this.color) : n.colorIcon();
      } else {
        console.error(`Symbol of the icon is not correct: ${this.symbol}`);
        return;
      }
    }
  },
  lib: [],
  add(e) {
    Array.isArray(e) ? this.lib = e : this.lib.push(e);
  }
}, Ng = ["width", "height", "innerHTML"];
function Ig(e, t, n, r, i, o) {
  return E(), C("svg", {
    width: n.size,
    height: n.size,
    class: ye(`cryptoicon--${n.symbol}`),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    onClick: t[0] || (t[0] = (a) => e.$emit("click")),
    innerHTML: o.icon
  }, null, 10, Ng);
}
const Ol = /* @__PURE__ */ ht(Mg, [["render", Ig]]), Dg = {
  symbol: "bnb",
  color: "#000",
  colorIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><circle cx="16" cy="16" r="16" fill="#F3BA2F"/><path fill="#FFF" d="M12.116 14.404L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26-2.26L10.52 16l-2.26 2.26L6 16zm6.116 1.596L16 21.48l3.886-3.886 2.26 2.259L16 26l-6.144-6.144-.003-.003 2.263-2.257zM21.48 16l2.26-2.26L26 16l-2.26 2.26L21.48 16zm-3.188-.002h.002V16L16 18.294l-2.291-2.29-.004-.004.004-.003.401-.402.195-.195L16 13.706l2.293 2.293z"/></g>';
  },
  plainIcon: (e) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${e || globalThis.color}" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.884-17.596L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26 2.26L10.52 16l-2.26-2.26L6 16zm6.116 1.596l-2.263 2.257.003.003L16 26l6.146-6.146v-.001l-2.26-2.26L16 21.48l-3.884-3.884zM21.48 16l2.26 2.26L26 16l-2.26-2.26L21.48 16zm-3.188-.002h.001L16 13.706 14.305 15.4l-.195.195-.401.402-.004.003.004.003 2.29 2.291 2.294-2.293.001-.001-.002-.001z"/>`
}, Pg = {
  symbol: "btc",
  color: "#000",
  colorIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#F7931A"/><path fill="#FFF" fill-rule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/></g>';
  },
  plainIcon: (e) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${e || globalThis.color}" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.189-17.98c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/>`
}, Rg = {
  symbol: "dai",
  color: "#000",
  colorIcon() {
    return '<g fill="none" fill-rule="evenodd"><circle fill="#F4B731" fill-rule="nonzero" cx="16" cy="16" r="16"/><path d="M9.277 8h6.552c3.985 0 7.006 2.116 8.13 5.194H26v1.861h-1.611c.031.294.047.594.047.898v.046c0 .342-.02.68-.06 1.01H26v1.86h-2.08C22.767 21.905 19.77 24 15.83 24H9.277v-5.131H7v-1.86h2.277v-1.954H7v-1.86h2.277V8zm1.831 10.869v3.462h4.72c2.914 0 5.078-1.387 6.085-3.462H11.108zm11.366-1.86H11.108v-1.954h11.37c.041.307.063.622.063.944v.045c0 .329-.023.65-.067.964zM15.83 9.665c2.926 0 5.097 1.424 6.098 3.528h-10.82V9.666h4.72z" fill="#FFF"/></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || globalThis.color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-.171 8H9.277v5.194H7v1.861h2.277v1.953H7v1.86h2.277V24h6.552c3.94 0 6.938-2.095 8.091-5.131H26v-1.86h-1.624c.04-.33.06-.668.06-1.01v-.046c0-.304-.016-.604-.047-.898H26v-1.86h-2.041C22.835 10.114 19.814 8 15.829 8zm6.084 10.869c-1.007 2.075-3.171 3.462-6.084 3.462h-4.72v-3.462zm.564-3.814c.042.307.064.622.064.944v.045c0 .329-.023.65-.067.964H11.108v-1.953h11.37zM15.83 9.666c2.926 0 5.097 1.424 6.098 3.528h-10.82V9.666h4.72z"/>`
}, Lg = {
  symbol: "eth",
  color: "#000",
  colorIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#627EEA"/><g fill="#FFF" fill-rule="nonzero"><path fill-opacity=".602" d="M16.498 4v8.87l7.497 3.35z"/><path d="M16.498 4L9 16.22l7.498-3.35z"/><path fill-opacity=".602" d="M16.498 21.968v6.027L24 17.616z"/><path d="M16.498 27.995v-6.028L9 17.616z"/><path fill-opacity=".2" d="M16.498 20.573l7.497-4.353-7.497-3.348z"/><path fill-opacity=".602" d="M9 16.22l7.498 4.353v-7.701z"/></g></g>';
  },
  plainIcon: (e) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill-rule="evenodd"><path fill-rule="evenodd" fill="${e || globalThis.color}" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z"/><g fill-rule="nonzero"><path fill-opacity=".298" d="M16.498 4v8.87l7.497 3.35zm0 17.968v6.027L24 17.616z"/><path fill-opacity=".801" d="M16.498 20.573l7.497-4.353-7.497-3.348z"/><path fill-opacity=".298" d="M9 16.22l7.498 4.353v-7.701z"/></g></g>`
}, $g = {
  symbol: "ltc",
  color: "#000",
  colorIcon() {
    return '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#BFBBBB"/><path fill="#FFF" d="M10.427 19.214L9 19.768l.688-2.759 1.444-.58L13.213 8h5.129l-1.519 6.196 1.41-.571-.68 2.75-1.427.571-.848 3.483H23L22.127 24H9.252z"/></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || globalThis.color}" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.573-12.786L9.252 24h12.875L23 20.429h-7.722l.848-3.483 1.427-.571.68-2.75-1.41.571L18.342 8h-5.129l-2.081 8.429-1.444.58L9 19.768l1.427-.554z"/>`
}, Fg = {
  symbol: "matic",
  color: "#000",
  colorIcon() {
    return '<g fill="none"><circle fill="#6F41D8" cx="16" cy="16" r="16"/><path d="M21.092 12.693c-.369-.215-.848-.215-1.254 0l-2.879 1.654-1.955 1.078-2.879 1.653c-.369.216-.848.216-1.254 0l-2.288-1.294c-.369-.215-.627-.61-.627-1.042V12.19c0-.431.221-.826.627-1.042l2.25-1.258c.37-.216.85-.216 1.256 0l2.25 1.258c.37.216.628.611.628 1.042v1.654l1.955-1.115v-1.653a1.16 1.16 0 00-.627-1.042l-4.17-2.372c-.369-.216-.848-.216-1.254 0l-4.244 2.372A1.16 1.16 0 006 11.076v4.78c0 .432.221.827.627 1.043l4.244 2.372c.369.215.849.215 1.254 0l2.879-1.618 1.955-1.114 2.879-1.617c.369-.216.848-.216 1.254 0l2.251 1.258c.37.215.627.61.627 1.042v2.552c0 .431-.22.826-.627 1.042l-2.25 1.294c-.37.216-.85.216-1.255 0l-2.251-1.258c-.37-.216-.628-.611-.628-1.042v-1.654l-1.955 1.115v1.653c0 .431.221.827.627 1.042l4.244 2.372c.369.216.848.216 1.254 0l4.244-2.372c.369-.215.627-.61.627-1.042v-4.78a1.16 1.16 0 00-.627-1.042l-4.28-2.409z" fill="#FFF"/></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || globalThis.color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-5.13 7.662l-4.243 2.372A1.16 1.16 0 006 11.076v4.78c0 .432.221.827.627 1.043l4.244 2.372c.369.215.849.215 1.254 0l2.879-1.618 1.955-1.114 2.879-1.617c.369-.216.848-.216 1.254 0l2.251 1.258c.37.215.627.61.627 1.042v2.552c0 .431-.22.826-.627 1.042l-2.25 1.294c-.37.216-.85.216-1.255 0l-2.251-1.258c-.37-.216-.628-.611-.628-1.042v-1.654l-1.955 1.115v1.653c0 .431.221.827.627 1.042l4.244 2.372c.369.216.848.216 1.254 0l4.244-2.372c.369-.215.627-.61.627-1.042v-4.78a1.16 1.16 0 00-.627-1.042l-4.28-2.409c-.37-.215-.85-.215-1.255 0l-2.879 1.654-1.955 1.078-2.879 1.653c-.369.216-.848.216-1.254 0l-2.288-1.294c-.369-.215-.627-.61-.627-1.042V12.19c0-.431.221-.826.627-1.042l2.25-1.258c.37-.216.85-.216 1.256 0l2.25 1.258c.37.216.628.611.628 1.042v1.654l1.955-1.115v-1.653a1.16 1.16 0 00-.627-1.042l-4.17-2.372c-.369-.216-.848-.216-1.254 0z"/>`
}, zg = {
  symbol: "trx",
  color: "#000",
  colorIcon() {
    return '<g fill="none"><circle fill="#EF0027" cx="16" cy="16" r="16"/><path d="M21.932 9.913L7.5 7.257l7.595 19.112 10.583-12.894-3.746-3.562zm-.232 1.17l2.208 2.099-6.038 1.093 3.83-3.192zm-5.142 2.973l-6.364-5.278 10.402 1.914-4.038 3.364zm-.453.934l-1.038 8.58L9.472 9.487l6.633 5.502zm.96.455l6.687-1.21-7.67 9.343.983-8.133z" fill="#FFF"/></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || globalThis.color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zM7.5 7.257l7.595 19.112 10.583-12.894-3.746-3.562L7.5 7.257zm16.252 6.977l-7.67 9.344.983-8.133 6.687-1.21zM9.472 9.488l6.633 5.502-1.038 8.58L9.472 9.487zM21.7 11.083l2.208 2.099-6.038 1.093 3.83-3.192zM10.194 8.778l10.402 1.914-4.038 3.364-6.364-5.278z"/>`
}, Vg = {
  symbol: "uni",
  color: "#000",
  colorIcon() {
    return '<g fill="none" fill-rule="evenodd"><circle fill="#FF007A" fill-rule="nonzero" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M12.261 5.767c-.285-.044-.297-.05-.163-.07.257-.04.865.015 1.284.114.977.233 1.866.828 2.816 1.885l.252.28.36-.057c1.52-.245 3.067-.05 4.36.547.356.164.917.491.987.576.023.026.064.199.091.383.096.637.048 1.125-.146 1.49-.106.198-.112.26-.041.43a.416.416 0 00.372.236c.322 0 .668-.52.828-1.243l.064-.287.126.143c.692.784 1.235 1.853 1.328 2.613l.025.199-.117-.18c-.2-.31-.4-.522-.658-.693-.464-.307-.955-.411-2.255-.48-1.174-.062-1.839-.162-2.497-.377-1.121-.365-1.686-.852-3.018-2.599-.591-.776-.957-1.205-1.32-1.55-.827-.786-1.639-1.198-2.678-1.36z" fill-rule="nonzero"/><path d="M22.422 7.5c.03-.52.1-.863.242-1.176.056-.124.109-.226.117-.226a.773.773 0 01-.055.204c-.103.304-.12.72-.049 1.203.09.614.142.702.79 1.365.305.311.659.703.787.872l.233.306-.233-.219c-.285-.267-.941-.79-1.086-.864-.097-.05-.112-.049-.172.01-.055.056-.067.138-.074.529-.012.608-.095 1-.296 1.39-.108.21-.125.166-.027-.073.073-.178.08-.256.08-.845 0-1.184-.141-1.468-.966-1.956a9.046 9.046 0 00-.764-.396 2.916 2.916 0 01-.374-.182c.023-.023.827.211 1.15.336.482.185.561.209.62.186.039-.015.058-.129.077-.464zm-9.607 2.025c-.579-.797-.937-2.02-.86-2.934l.024-.283.132.024c.248.045.675.204.875.326.548.333.786.772 1.027 1.898.071.33.164.703.207.83.068.203.328.678.54.987.152.222.05.327-.286.297-.514-.047-1.21-.527-1.659-1.145zm8.905 5.935c-2.707-1.09-3.66-2.036-3.66-3.632 0-.235.008-.427.017-.427.01 0 .115.077.233.172.549.44 1.164.628 2.865.876 1.001.147 1.565.265 2.085.437 1.652.548 2.674 1.66 2.918 3.174.07.44.029 1.265-.086 1.7-.09.344-.367.963-.44.987-.02.006-.04-.071-.046-.178-.028-.568-.315-1.122-.798-1.537-.549-.471-1.286-.847-3.089-1.572zm-1.9.452a4.808 4.808 0 00-.131-.572l-.07-.206.129.144c.177.2.318.454.436.794.091.259.101.336.1.757 0 .414-.011.5-.095.734a2.32 2.32 0 01-.571.908c-.495.504-1.13.782-2.048.898-.16.02-.624.054-1.033.075-1.03.054-1.707.164-2.316.378a.488.488 0 01-.174.042c-.024-.025.39-.272.733-.437.483-.233.963-.36 2.04-.539.532-.089 1.082-.196 1.221-.239 1.318-.404 1.995-1.446 1.778-2.737z" fill-rule="nonzero"/><path d="M21.06 18.116c-.36-.773-.442-1.52-.245-2.216.021-.074.055-.135.075-.135a.73.73 0 01.189.102c.166.112.498.3 1.383.782 1.105.603 1.735 1.07 2.164 1.602.375.467.607.999.719 1.647.063.367.026 1.25-.068 1.62-.297 1.166-.988 2.082-1.972 2.616a2.53 2.53 0 01-.288.143c-.014 0 .038-.133.117-.297.33-.692.369-1.366.118-2.116-.153-.459-.466-1.02-1.097-1.966-.734-1.1-.914-1.394-1.095-1.782zm-10.167 4.171c1.005-.848 2.254-1.45 3.393-1.635.49-.08 1.308-.048 1.762.068.728.186 1.38.604 1.719 1.101.33.486.473.91.62 1.852.06.372.123.745.142.83.11.488.327.879.595 1.075.425.311 1.158.33 1.878.05a.981.981 0 01.236-.074c.026.026-.336.269-.592.397a2.014 2.014 0 01-.983.238c-.66 0-1.208-.335-1.665-1.02-.09-.135-.292-.538-.45-.897-.482-1.1-.72-1.436-1.28-1.803-.489-.32-1.118-.377-1.591-.145-.622.305-.795 1.1-.35 1.603.177.2.507.373.777.406a.83.83 0 00.939-.83c0-.332-.128-.52-.448-.665-.437-.197-.907.033-.905.444.001.175.077.285.253.365.113.05.115.055.023.036-.401-.084-.495-.567-.172-.888.387-.386 1.188-.216 1.463.31.116.221.129.662.028.928-.225.595-.883.907-1.55.737-.454-.116-.639-.241-1.186-.805-.951-.98-1.32-1.17-2.692-1.384l-.263-.041.3-.253z" fill-rule="nonzero"/><path d="M6.196 3.35l.096.117c3.708 4.54 5.624 6.896 5.746 7.064.2.278.125.527-.219.723-.191.109-.585.219-.781.219-.223 0-.474-.107-.657-.28-.129-.123-.65-.901-1.853-2.768a188.53 188.53 0 00-1.712-2.633c-.049-.046-.048-.045 1.618 2.936 1.046 1.872 1.4 2.533 1.4 2.622 0 .18-.05.274-.272.522-.37.413-.535.877-.655 1.837-.134 1.077-.51 1.837-1.554 3.138-.61.762-.71.902-.865 1.209-.194.386-.247.603-.269 1.091-.023.516.022.85.18 1.343.138.432.282.718.65 1.288.318.493.501.859.501 1.002 0 .114.022.114.515.003 1.179-.266 2.136-.735 2.675-1.309.333-.355.411-.551.414-1.038.001-.318-.01-.385-.096-.568-.14-.298-.395-.546-.957-.93-.737-.504-1.051-.91-1.138-1.467-.072-.457.011-.78.419-1.634.421-.884.526-1.26.597-2.151.045-.576.108-.803.274-.985.172-.19.328-.255.755-.313.696-.095 1.139-.275 1.503-.61.316-.292.448-.573.468-.995l.016-.32-.177-.206c-.254-.296-2.355-2.614-6.304-6.956l-.106-.115-.212.165zM7.91 19.732a.566.566 0 00-.174-.746c-.228-.152-.583-.08-.583.118 0 .06.033.104.108.143.127.065.136.139.037.288-.101.152-.093.286.023.377.186.146.45.065.59-.18zm5.524-7.176c-.327.1-.644.447-.743.81-.06.221-.026.61.064.73.145.194.286.245.666.242.744-.005 1.39-.324 1.466-.723.062-.327-.223-.78-.614-.98-.202-.102-.631-.143-.839-.079zm.87.68c.115-.163.064-.34-.13-.458-.372-.227-.934-.04-.934.312 0 .174.293.365.561.365.18 0 .424-.107.503-.219z"/></g></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || globalThis.color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16A15.97 15.97 0 016.199 3.353l.093.114.25.306c3.544 4.34 5.376 6.593 5.496 6.758.2.278.125.527-.219.723-.191.109-.585.219-.781.219-.223 0-.474-.107-.657-.28a1.453 1.453 0 01-.134-.167l-.086-.119c-.27-.384-.78-1.16-1.633-2.482a188.53 188.53 0 00-1.712-2.633l-.012-.01c-.002 0-.001.004.004.016l.032.064c.103.198.469.852 1.594 2.866 1.046 1.872 1.4 2.533 1.4 2.622 0 .18-.05.274-.272.522-.37.413-.535.877-.655 1.837-.134 1.077-.51 1.837-1.554 3.138-.61.762-.71.902-.865 1.209-.194.386-.247.603-.269 1.091-.023.516.022.85.18 1.343.138.432.282.718.65 1.288.318.493.501.859.501 1.002 0 .114.022.114.515.003 1.179-.266 2.136-.735 2.675-1.309.333-.355.411-.551.414-1.038.001-.318-.01-.385-.096-.568-.14-.298-.395-.546-.957-.93-.737-.504-1.051-.91-1.138-1.467-.072-.457.011-.78.419-1.634.421-.884.526-1.26.597-2.151.045-.576.108-.803.274-.985.172-.19.328-.255.755-.313.696-.095 1.139-.275 1.503-.61.316-.292.448-.573.468-.995l.016-.32-.177-.206-.02-.024c-.332-.38-2.427-2.691-6.284-6.932l-.102-.111A15.93 15.93 0 0116 0zm.048 20.72c-.454-.116-1.271-.148-1.762-.068-1.139.185-2.388.787-3.393 1.635l-.299.253.263.04c1.371.215 1.74.405 2.692 1.385.547.564.732.69 1.186.805.667.17 1.325-.142 1.55-.737.101-.266.088-.707-.028-.928-.275-.526-1.076-.696-1.463-.31-.323.32-.229.804.172.888.092.019.09.015-.023-.036-.176-.08-.252-.19-.253-.365-.002-.41.468-.641.905-.444.32.144.448.333.448.664a.83.83 0 01-.939.831 1.38 1.38 0 01-.777-.406c-.445-.504-.272-1.298.35-1.603.473-.232 1.102-.175 1.59.145.56.367.799.702 1.282 1.803.157.359.36.762.45.897.456.685 1.004 1.02 1.664 1.02.364 0 .638-.066.983-.238.256-.128.618-.37.592-.397a1.005 1.005 0 00-.236.073c-.72.281-1.453.262-1.878-.05-.268-.195-.484-.586-.595-1.074a23.05 23.05 0 01-.141-.83c-.148-.942-.29-1.366-.621-1.852-.34-.497-.99-.915-1.719-1.101zm4.842-4.955c-.02 0-.054.061-.075.135-.197.697-.115 1.443.245 2.216l.065.135c.166.333.382.676 1.03 1.647.631.947.944 1.507 1.097 1.966.25.75.213 1.424-.118 2.116-.079.164-.131.297-.117.297.014 0 .143-.064.288-.143.984-.534 1.675-1.45 1.972-2.616.094-.37.131-1.253.068-1.62-.112-.648-.344-1.18-.72-1.647-.428-.533-1.058-1-2.163-1.602-.885-.482-1.217-.67-1.383-.782a.73.73 0 00-.189-.102zM7.152 19.103c0-.198.355-.27.583-.118.242.16.319.49.174.746-.138.245-.403.326-.59.18-.115-.091-.123-.225-.022-.377.1-.15.09-.223-.037-.288-.075-.039-.108-.083-.108-.143zm12.468-3.97l.069.207a4.8 4.8 0 01.13.572c.217 1.29-.46 2.333-1.778 2.737-.14.043-.689.15-1.22.239-1.078.18-1.558.306-2.041.539-.343.165-.757.412-.733.437a.488.488 0 00.174-.042c.609-.214 1.287-.324 2.316-.378.409-.021.874-.055 1.033-.075.918-.116 1.553-.394 2.048-.898.275-.28.439-.54.57-.908.085-.234.096-.32.097-.734 0-.421-.01-.498-.1-.757-.12-.34-.26-.595-.437-.794l-.128-.144zm-1.543-3.732c-.01 0-.018.192-.018.427 0 1.596.954 2.542 3.66 3.632 1.803.725 2.54 1.1 3.09 1.572.482.415.77.969.797 1.537.005.107.025.184.045.178.074-.024.35-.643.441-.987.115-.435.156-1.26.086-1.7-.244-1.514-1.266-2.626-2.918-3.174-.52-.172-1.084-.29-2.085-.437-1.701-.248-2.316-.436-2.865-.876a2.057 2.057 0 00-.233-.172zm-3.804 1.235c-.202-.103-.631-.144-.839-.08-.327.1-.644.447-.743.81-.06.221-.026.61.064.73.145.194.286.245.666.242.744-.005 1.39-.324 1.466-.723.062-.327-.223-.78-.614-.98zm-1.033.454c0-.351.562-.54.933-.312.195.119.246.295.13.458-.078.112-.323.22-.502.22-.268 0-.561-.192-.561-.366zm.142-7.279c-.419-.1-1.027-.153-1.284-.114-.134.02-.122.026.163.07 1.04.162 1.851.574 2.678 1.36.363.345.729.774 1.32 1.55 1.332 1.747 1.897 2.234 3.018 2.6.658.214 1.323.314 2.497.376 1.3.069 1.79.173 2.255.48.257.17.458.382.658.692l.117.18-.025-.198c-.093-.76-.636-1.83-1.328-2.613l-.126-.143-.064.287c-.16.723-.506 1.242-.828 1.243a.416.416 0 01-.372-.236c-.071-.17-.065-.232.04-.43.195-.365.243-.853.147-1.49-.027-.184-.068-.357-.09-.383-.07-.085-.632-.412-.988-.576-1.293-.598-2.84-.792-4.36-.547l-.36.058-.252-.281c-.95-1.057-1.839-1.652-2.816-1.885zm9.399.287c-.008 0-.061.102-.117.226-.142.313-.212.656-.242 1.176-.019.335-.038.45-.077.464-.059.023-.138-.001-.62-.186-.323-.125-1.127-.36-1.15-.336-.006.006.162.088.374.182s.556.272.764.396c.825.488.965.772.966 1.956 0 .59-.007.667-.08.845-.098.239-.08.284.027.073.2-.39.284-.782.296-1.39.007-.39.019-.473.074-.528.06-.06.075-.06.172-.01.145.074.8.596 1.086.863l.233.219-.233-.306c-.128-.169-.482-.56-.787-.872-.648-.663-.7-.751-.79-1.365-.07-.484-.054-.9.05-1.203a.773.773 0 00.054-.204zm-10.802.21l-.024.283c-.077.914.281 2.137.86 2.934.45.618 1.145 1.098 1.66 1.145.336.03.437-.075.285-.297-.212-.309-.472-.784-.54-.988a10.64 10.64 0 01-.207-.83c-.241-1.125-.479-1.564-1.027-1.897a3.31 3.31 0 00-.875-.326l-.132-.024z"/>`
}, jg = {
  symbol: "usdc",
  color: "#000",
  colorIcon() {
    return '<g fill="none"><circle fill="#3E73C4" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M20.022 18.124c0-2.124-1.28-2.852-3.84-3.156-1.828-.243-2.193-.728-2.193-1.578 0-.85.61-1.396 1.828-1.396 1.097 0 1.707.364 2.011 1.275a.458.458 0 00.427.303h.975a.416.416 0 00.427-.425v-.06a3.04 3.04 0 00-2.743-2.489V9.142c0-.243-.183-.425-.487-.486h-.915c-.243 0-.426.182-.487.486v1.396c-1.829.242-2.986 1.456-2.986 2.974 0 2.002 1.218 2.791 3.778 3.095 1.707.303 2.255.668 2.255 1.639 0 .97-.853 1.638-2.011 1.638-1.585 0-2.133-.667-2.316-1.578-.06-.242-.244-.364-.427-.364h-1.036a.416.416 0 00-.426.425v.06c.243 1.518 1.219 2.61 3.23 2.914v1.457c0 .242.183.425.487.485h.915c.243 0 .426-.182.487-.485V21.34c1.829-.303 3.047-1.578 3.047-3.217z"/><path d="M12.892 24.497c-4.754-1.7-7.192-6.98-5.424-11.653.914-2.55 2.925-4.491 5.424-5.402.244-.121.365-.303.365-.607v-.85c0-.242-.121-.424-.365-.485-.061 0-.183 0-.244.06a10.895 10.895 0 00-7.13 13.717c1.096 3.4 3.717 6.01 7.13 7.102.244.121.488 0 .548-.243.061-.06.061-.122.061-.243v-.85c0-.182-.182-.424-.365-.546zm6.46-18.936c-.244-.122-.488 0-.548.242-.061.061-.061.122-.061.243v.85c0 .243.182.485.365.607 4.754 1.7 7.192 6.98 5.424 11.653-.914 2.55-2.925 4.491-5.424 5.402-.244.121-.365.303-.365.607v.85c0 .242.121.424.365.485.061 0 .183 0 .244-.06a10.895 10.895 0 007.13-13.717c-1.096-3.46-3.778-6.07-7.13-7.162z"/></g></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || globalThis.color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm3.352 5.56c-.244-.12-.488 0-.548.243-.061.061-.061.122-.061.243v.85l.01.104a.86.86 0 00.355.503c4.754 1.7 7.192 6.98 5.424 11.653-.914 2.55-2.925 4.491-5.424 5.402-.244.121-.365.303-.365.607v.85l.005.088a.45.45 0 00.36.397c.061 0 .183 0 .244-.06a10.895 10.895 0 007.13-13.717c-1.096-3.46-3.778-6.07-7.13-7.162zm-6.46-.06c-.061 0-.183 0-.244.06a10.895 10.895 0 00-7.13 13.717c1.096 3.4 3.717 6.01 7.13 7.102.244.121.488 0 .548-.243.061-.06.061-.122.061-.243v-.85l-.01-.08c-.042-.169-.199-.362-.355-.466-4.754-1.7-7.192-6.98-5.424-11.653.914-2.55 2.925-4.491 5.424-5.402.244-.121.365-.303.365-.607v-.85l-.005-.088a.45.45 0 00-.36-.397zm3.535 3.156h-.915l-.088.008c-.2.04-.346.212-.4.478v1.396l-.207.032c-1.708.304-2.778 1.483-2.778 2.942 0 2.002 1.218 2.791 3.778 3.095 1.707.303 2.255.668 2.255 1.639 0 .97-.853 1.638-2.011 1.638-1.585 0-2.133-.667-2.316-1.578-.06-.242-.244-.364-.427-.364h-1.036l-.079.007a.413.413 0 00-.347.418v.06l.033.18c.29 1.424 1.266 2.443 3.197 2.734v1.457l.008.088c.04.198.213.344.48.397h.914l.088-.008c.2-.04.346-.212.4-.477V21.34l.207-.04c1.713-.362 2.84-1.601 2.84-3.177 0-2.124-1.28-2.852-3.84-3.156-1.829-.243-2.194-.728-2.194-1.578 0-.85.61-1.396 1.828-1.396 1.097 0 1.707.364 2.011 1.275a.458.458 0 00.427.303h.975l.079-.006a.413.413 0 00.348-.419v-.06l-.037-.173a3.04 3.04 0 00-2.706-2.316V9.142l-.008-.088c-.04-.199-.213-.345-.48-.398z"/>`
}, Ug = {
  symbol: "usdt",
  color: "#000",
  colorIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#26A17B"/><path fill="#FFF" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117"/></g>';
  },
  plainIcon: (e) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${e || globalThis.color}" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.922-18.207v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117zm0 3.59v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657z"/>`
}, Hg = {
  symbol: "xmr",
  color: "#000",
  colorIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#F60"/><path fill="#FFF" fill-rule="nonzero" d="M15.97 5.235c5.985 0 10.825 4.84 10.825 10.824a11.07 11.07 0 01-.558 3.432h-3.226v-9.094l-7.04 7.04-7.04-7.04v9.094H5.704a11.07 11.07 0 01-.557-3.432c0-5.984 4.84-10.824 10.824-10.824zM14.358 19.02L16 20.635l1.613-1.614 3.051-3.08v5.72h4.547a10.806 10.806 0 01-9.24 5.192c-3.902 0-7.334-2.082-9.24-5.192h4.546v-5.72l3.08 3.08z"/></g>';
  },
  plainIcon: (e) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${e || globalThis.color}" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.03-26.765A10.816 10.816 0 005.148 16.059c0 1.202.205 2.346.557 3.432h3.227v-9.094l7.04 7.04 7.04-7.04v9.094h3.226a11.07 11.07 0 00.558-3.432c0-5.984-4.84-10.824-10.824-10.824zM14.358 19.02l-3.08-3.08v5.72H6.731c1.906 3.11 5.338 5.192 9.24 5.192 3.901 0 7.362-2.082 9.24-5.192h-4.547v-5.72l-3.05 3.08L16 20.635l-1.643-1.614z"/>`
};
hm.add(_m);
const Bg = pe({
  name: "InputGroup",
  components: {
    ExclamationCircleIcon: Lf,
    FontAwesomeIcon: Ho,
    Listbox: Uc,
    ListboxButton: Hc,
    ListboxOptions: Bc,
    ListboxOption: Gc
  },
  inheritAttrs: !1,
  props: {
    type: {
      type: String,
      required: !0
    },
    errorKey: {
      type: String,
      required: !1,
      default: null
    },
    modelValue: {
      type: null,
      required: !1,
      default: null
    },
    label: {
      type: String,
      required: !1,
      default: null
    },
    fieldKey: {
      type: String,
      required: !1,
      default: null
    },
    options: {
      type: Array,
      required: !1,
      default: () => []
    },
    required: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { slots: t, emit: n }) {
    const { context: r } = Rt();
    function i(l) {
      n("update:modelValue", l);
    }
    const o = I(() => {
      var d;
      const l = (d = e.options) == null ? void 0 : d.find((u) => (u.value || u) === e.modelValue);
      return l ? l.label || l : "Select an option";
    }), a = (l) => !!t[l], s = I(() => {
      var l, d, u;
      return (u = (d = (l = r.value.error) == null ? void 0 : l.errors) == null ? void 0 : d[e.errorKey]) == null ? void 0 : u[0];
    });
    return {
      hasSlot: a,
      emitUpdate: i,
      error: s,
      selectedLabel: o
    };
  }
}), Gg = ["for"], Wg = {
  key: 0,
  class: "embed-text-red-500"
}, Yg = {
  key: 0,
  class: "embed-absolute embed-inset-y-0 embed-left-0 embed-pl-3 embed-pt-1 embed-flex embed-items-center embed-pointer-events-none"
}, qg = ["type", "value"], Kg = ["id", "checked", "type", "value"], Xg = { class: "embed-relative" }, Jg = { class: "embed-block embed-truncate dark:embed-text-white" }, Zg = { class: "embed-pointer-events-none embed-absolute embed-inset-y-0 embed-right-0 embed-flex embed-items-center embed-pr-2" }, Qg = ["value"], ey = ["textContent"];
function ty(e, t, n, r, i, o) {
  const a = ae("font-awesome-icon"), s = ae("ListboxButton"), l = ae("ListboxOption"), d = ae("ListboxOptions"), u = ae("Listbox"), f = ae("ExclamationCircleIcon");
  return E(), C(H, null, [
    _("div", {
      class: ye({
        "embed-justify-between embed-flex embed-items-center embed-h-5": e.type === "checkbox"
      })
    }, [
      e.label ? (E(), C("label", {
        key: 0,
        for: e.fieldKey,
        class: "embed-block embed-text-sm embed-font-medium embed-text-black dark:embed-text-white"
      }, [
        ne(T(e.label) + " ", 1),
        e.required ? (E(), C("span", Wg, "*")) : oe("", !0)
      ], 8, Gg)) : oe("", !0),
      _("div", {
        class: ye(["embed-relative embed-rounded-md", { "embed-mt-1": e.type !== "checkbox" && !!e.label }])
      }, [
        e.type !== "checkbox" && e.type !== "textarea" ? (E(), C("div", Yg, [
          fi(e.$slots, "icon")
        ])) : oe("", !0),
        e.type !== "textarea" && e.type !== "checkbox" && e.type !== "select" ? (E(), C("input", mr({
          key: 1,
          type: e.type,
          class: {
            "embed-w-full embed-rounded-md embed-bg-white embed-text-black dark:embed-text-white embed-placeholder-neutral-500 focus:embed-placeholder-neutral-800 dark:embed-placeholder-neutral-500 dark:focus:embed-placeholder-neutral-400 focus:embed-ring-2 embed-ring-emerald-200 dark:embed-ring-green-800 embed-shadow-sm embed-shadow-zinc-300 hover:embed-shadow-zinc-400 focus:embed-shadow-emerald-200 dark:embed-shadow-zinc-950 dark:hover:embed-shadow-black dark:focus:embed-shadow-black embed-border-2 embed-border-zinc-100 focus:embed-border-emerald-400 dark:embed-border-zinc-900 dark:focus:embed-border-emerald-900 embed-transition embed-duration-200 embed-ease-in-out disabled:embed-bg-zinc-100 dark:disabled:embed-bg-zinc-900 disabled:embed-opacity-70": e.type !== "checkbox",
            "embed-pl-10": e.hasSlot("icon"),
            "embed-placeholder-red-300 dark:embed-placeholder-red-600 embed-text-red-900 embed-border-red-300 focus:embed-ring-red-500 focus:embed-border-red-500": !!e.error,
            "embed-pr-10": !!e.error && e.type !== "number"
          },
          value: e.modelValue
        }, e.$attrs, {
          onInput: t[0] || (t[0] = (c) => e.emitUpdate(c.target.value))
        }), null, 16, qg)) : e.type === "checkbox" ? (E(), C("input", mr({
          key: 2,
          id: e.fieldKey,
          checked: e.modelValue,
          type: e.type,
          class: "embed-appearance-none embed-rounded focus:embed-ring-2 embed-ring-emerald-200 dark:embed-ring-green-800 focus:embed-ring-offset-0 dark:focus:embed-text-black embed-bg-white embed-text-black dark:embed-text-white embed-placeholder-neutral-500 focus:embed-placeholder-neutral-800 dark:embed-placeholder-neutral-500 dark:focus:embed-placeholder-neutral-400 embed-shadow-sm embed-shadow-zinc-300 hover:embed-shadow-zinc-400 focus:embed-shadow-emerald-200 dark:embed-shadow-zinc-950 dark:hover:embed-shadow-black dark:focus:embed-shadow-black embed-border-2 embed-border-zinc-100 focus:embed-border-emerald-400 dark:embed-border-zinc-900 dark:focus:embed-border-emerald-900 embed-transition embed-duration-200 embed-ease-in-out disabled:embed-bg-zinc-100 dark:disabled:embed-bg-zinc-900 disabled:embed-opacity-70 embed-border embed-border-transparent checked:embed-bg-zinc-950",
          value: e.modelValue
        }, e.$attrs, {
          onInput: t[1] || (t[1] = (c) => e.emitUpdate(c.target.checked))
        }), null, 16, Kg)) : e.type === "select" ? (E(), xe(u, {
          key: 3,
          "model-value": e.modelValue,
          "onUpdate:modelValue": e.emitUpdate,
          as: "div",
          class: "embed-relative"
        }, {
          default: ie(() => [
            _("div", Xg, [
              G(s, { class: "embed-relative embed-w-full embed-cursor-default embed-rounded-md embed-bg-white dark:embed-bg-zinc-950 embed-py-2 embed-pl-3 embed-pr-10 embed-text-left embed-shadow-sm embed-shadow-zinc-300 hover:embed-shadow-zinc-400 focus:embed-shadow-emerald-200 dark:embed-shadow-zinc-950 dark:hover:embed-shadow-black dark:focus:embed-shadow-black embed-border-2 embed-border-zinc-100 focus:embed-border-emerald-400 dark:embed-border-zinc-900 dark:focus:embed-border-emerald-900 embed-transition embed-duration-200 embed-ease-in-out" }, {
                default: ie(() => [
                  _("span", Jg, T(e.selectedLabel), 1),
                  _("span", Zg, [
                    G(a, {
                      icon: "chevron-down",
                      class: "embed-w-4 embed-h-4 embed-text-zinc-600 dark:embed-text-zinc-300"
                    })
                  ])
                ]),
                _: 1
              }),
              G(yn, {
                "leave-active-class": "embed-transition embed-duration-100 embed-ease-in",
                "leave-from-class": "embed-opacity-100",
                "leave-to-class": "embed-opacity-0"
              }, {
                default: ie(() => [
                  G(d, { class: "embed-fixed embed-z-[51] embed-max-w-[31rem] embed-mt-1 embed-max-h-60 embed-w-[calc(100%-2rem)] embed-overflow-auto embed-rounded-md embed-bg-white dark:embed-bg-zinc-900 embed-py-1 embed-text-base embed-shadow-zinc-400 dark:embed-shadow-black embed-border embed-border-zinc-300 dark:embed-border-zinc-950 embed-shadow-lg embed-ring-1 embed-ring-black embed-ring-opacity-5 focus:embed-outline-none sm:embed-text-sm" }, {
                    default: ie(() => [
                      (E(!0), C(H, null, pn(e.options, (c) => (E(), xe(l, {
                        key: c.value || c,
                        value: c.value || c,
                        as: "template"
                      }, {
                        default: ie(({ active: m, selected: p }) => [
                          _("li", {
                            class: ye([
                              m ? "embed-bg-zinc-100 embed-text-black dark:embed-bg-zinc-950 dark:embed-text-white" : "embed-text-zinc-800 dark:embed-text-white",
                              "embed-relative embed-cursor-default embed-select-none embed-py-2 embed-pl-3 embed-pr-9"
                            ])
                          }, [
                            _("span", {
                              class: ye([p ? "embed-font-semibold" : "embed-font-normal", "embed-block embed-truncate"])
                            }, T(c.label || c), 3)
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["value"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["model-value", "onUpdate:modelValue"])) : (E(), C("textarea", mr({
          key: 4,
          class: ["embed-w-full embed-bg-white focus:embed-bg-zinc-50 embed-text-black dark:embed-text-zinc-100 embed-border embed-border-transparent embed-rounded-md embed-placeholder-neutral-500 focus:embed-placeholder-neutral-800 dark:embed-placeholder-neutral-500 dark:focus:embed-placeholder-neutral-400 focus:embed-outline-none embed-shadow-sm embed-shadow-zinc-300 hover:embed-shadow-zinc-400 focus:embed-shadow-emerald-200 dark:embed-shadow-zinc-950 dark:hover:embed-shadow-black dark:focus:embed-shadow-black embed-border-2 embed-border-zinc-100 focus:embed-border-emerald-400 dark:embed-border-zinc-900 dark:focus:embed-border-emerald-900 focus:embed-ring-2 embed-ring-emerald-200 dark:embed-ring-green-800 focus:embed-border-transparent embed-transition embed-duration-200 embed-ease-in-out", {
            "embed-placeholder-red-300 embed-text-red-900 embed-border-red-300 focus:embed-ring-red-500 focus:embed-border-red-500": !!e.error
          }],
          value: e.modelValue
        }, e.$attrs, {
          onInput: t[2] || (t[2] = (c) => e.emitUpdate(c.target.value))
        }), null, 16, Qg)),
        e.error && (e.type === "text" || e.type === "email") ? (E(), C("div", {
          key: 5,
          class: ye(["embed-absolute embed-inset-y-0 embed-right-0 embed-pr-3 embed-flex embed-items-center embed-pointer-events-none", { "embed-mr-6": e.type === "number" }])
        }, [
          G(f, {
            class: "embed-h-5 embed-w-5 embed-text-red-500 dark:embed-text-red-900",
            "aria-hidden": "true"
          })
        ], 2)) : oe("", !0)
      ], 2)
    ], 2),
    e.error ? (E(), C("p", {
      key: 0,
      class: "embed-mt-1 embed-text-xs embed-text-red-600 dark:embed-text-red embed-w-full embed-flex-grow",
      textContent: T(e.error)
    }, null, 8, ey)) : oe("", !0)
  ], 64);
}
const Tl = /* @__PURE__ */ ht(Bg, [["render", ty]]), ny = pe({
  name: "AdditionalInformation",
  components: {
    InputGroup: Tl
  },
  setup() {
    const { context: e } = Rt(), t = I(() => e.value.variant.additional_information);
    return e.value.variant.additional_information.length > 0 && (Me.additional_information ?? (Me.additional_information = {}), t.value.forEach((n) => {
      var r, i;
      if ((Me.additional_information[n.key] ?? null) === null) {
        let o;
        n.type === "CHECKBOX" ? o = !1 : n.type === "NUMBER" ? o = 0 : o = "", (r = Me.additional_information)[i = n.key] ?? (r[i] = o);
      }
    })), {
      checkout_information: Me,
      context: e,
      required_fields: t
    };
  }
});
function ry(e, t, n, r, i, o) {
  const a = ae("InputGroup");
  return E(!0), C(H, null, pn(e.required_fields, (s) => (E(), C(H, { key: s }, [
    s.type === "TEXTAREA" ? (E(), xe(a, {
      key: 0,
      modelValue: e.checkout_information.additional_information[s.key],
      "onUpdate:modelValue": (l) => e.checkout_information.additional_information[s.key] = l,
      type: s.type.toLowerCase(),
      "error-key": `additional_information.${s.key}`,
      placeholder: s.label,
      required: s.required,
      rows: "3",
      label: s.label,
      class: "dark:embed-bg-zinc-950"
    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "error-key", "placeholder", "required", "label"])) : s.type === "NUMBER" ? (E(), xe(a, {
      key: 1,
      modelValue: e.checkout_information.additional_information[s.key],
      "onUpdate:modelValue": (l) => e.checkout_information.additional_information[s.key] = l,
      type: s.type.toLowerCase(),
      "error-key": `additional_information.${s.key}`,
      placeholder: s.label,
      required: s.required,
      label: s.label,
      min: "1",
      class: "embed-w-full dark:embed-bg-zinc-950"
    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "error-key", "placeholder", "required", "label"])) : s.type === "TEXT" ? (E(), xe(a, {
      key: 2,
      modelValue: e.checkout_information.additional_information[s.key],
      "onUpdate:modelValue": (l) => e.checkout_information.additional_information[s.key] = l,
      type: s.type.toLowerCase(),
      "error-key": `additional_information.${s.key}`,
      placeholder: s.label,
      required: s.required,
      label: s.label,
      class: "dark:embed-bg-zinc-950"
    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "error-key", "placeholder", "required", "label"])) : s.type === "SELECT" ? (E(), xe(a, {
      key: 3,
      modelValue: e.checkout_information.additional_information[s.key],
      "onUpdate:modelValue": (l) => e.checkout_information.additional_information[s.key] = l,
      type: s.type.toLowerCase(),
      "error-key": `additional_information.${s.key}`,
      placeholder: s.label,
      required: s.required,
      label: s.label,
      options: s.options,
      class: "dark:embed-bg-zinc-950"
    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "error-key", "placeholder", "required", "label", "options"])) : (E(), xe(a, {
      key: 4,
      modelValue: e.checkout_information.additional_information[s.key],
      "onUpdate:modelValue": (l) => e.checkout_information.additional_information[s.key] = l,
      "field-key": `additional_information.${s.key}`,
      type: s.type.toLowerCase(),
      "error-key": `additional_information.${s.key}`,
      placeholder: s.label,
      required: s.required,
      label: s.label,
      class: "dark:embed-bg-zinc-950"
    }, null, 8, ["modelValue", "onUpdate:modelValue", "field-key", "type", "error-key", "placeholder", "required", "label"]))
  ], 64))), 128);
}
const iy = /* @__PURE__ */ ht(ny, [["render", ry]]), oy = pe({
  name: "Drawer",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    title: {
      type: String,
      required: !0
    },
    description: {
      type: String,
      required: !1
    }
  },
  emits: ["update:modelValue"]
}), ay = {
  key: 0,
  class: "embed-absolute embed-bottom-0 embed-inset-x-0 embed-bg-zinc-50 dark:embed-bg-zinc-950 embed-rounded-t-2xl embed-z-20 embed-min-h-[20vh] embed-max-h-[50vh] embed-shadow-xl"
}, sy = { class: "embed-flex embed-flex-col embed-justify-between embed-items-center embed-mb-4 embed-p-4" }, ly = { class: "embed-text-lg embed-font-semibold dark:embed-text-white embed-text-center embed-w-full" }, dy = { class: "embed-text-xs embed-text-zinc-400 dark:embed-text-zinc-800 embed-text-center embed-w-full" }, uy = /* @__PURE__ */ _("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "embed-h-6 embed-w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ _("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), cy = [
  uy
], fy = { class: "embed-relative embed-pb-4" }, my = { class: "embed-px-4 embed-text-sm embed-text-zinc-800 dark:embed-text-zinc-200 embed-overflow-x-auto embed-overscroll-contain embed-min-h-[8rem] embed-max-h-[calc(50vh-8rem)] embed-break-words embed-whitespace-pre-wrap embed-prose dark:embed-prose-invert embed-prose-sm embed-max-w-none [&>p]:embed-mb-4 [scrollbar-width:thin] [&::-webkit-scrollbar]:embed-w-2 [&::-webkit-scrollbar-track]:embed-bg-transparent [&::-webkit-scrollbar-thumb]:embed-bg-zinc-300 dark:[&::-webkit-scrollbar-thumb]:embed-bg-zinc-700 [&::-webkit-scrollbar-thumb]:embed-rounded-full [&_code]:embed-whitespace-pre-wrap [&_code]:embed-break-words" };
function py(e, t, n, r, i, o) {
  return E(), xe(yn, {
    "enter-active-class": "embed-transition-all embed-duration-300 embed-ease-in-out",
    "enter-from-class": "embed-translate-y-full",
    "enter-to-class": "embed-translate-y-0",
    "leave-active-class": "embed-transition-all embed-duration-300 embed-ease-in-out",
    "leave-from-class": "embed-translate-y-0",
    "leave-to-class": "embed-translate-y-full"
  }, {
    default: ie(() => [
      e.modelValue ? (E(), C("div", ay, [
        _("div", sy, [
          _("h3", ly, T(e.title), 1),
          _("h3", dy, T(e.description), 1),
          _("button", {
            onClick: t[0] || (t[0] = (a) => e.$emit("update:modelValue", !1)),
            class: "embed-absolute embed-right-2 embed-text-zinc-500 hover:embed-text-zinc-700 dark:hover:embed-text-zinc-300"
          }, cy)
        ]),
        _("div", fy, [
          _("div", my, [
            fi(e.$slots, "default")
          ])
        ])
      ])) : oe("", !0)
    ]),
    _: 3
  });
}
const by = /* @__PURE__ */ ht(oy, [["render", py]]);
Ol.add([Pg, $g, Hg, Lg, Dg, zg, Fg, Ug, jg, Vg, Rg]);
hm.add(_g, Eg, yg, gg, kg, Cg, _m, xg, vg, wg, Og, Sg, Tg, Ag);
const hy = pe({
  props: {
    config: {
      type: [Object, String],
      required: !0
    },
    extraClasses: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    return () => {
      try {
        if (typeof e.config == "string")
          return e.config.includes("fa-") ? je(Ho, {
            icon: e.config,
            class: e.extraClasses.join(" ")
            // Convert array to string
          }) : je(Ol, {
            symbol: e.config,
            class: e.extraClasses.join(" ")
            // Convert array to string
          });
        if (e.config.type === "fa")
          return je(Ho, {
            icon: e.config.value,
            class: [...e.config.classes || [], ...e.extraClasses].join(" ")
            // Convert array to string
          });
        if (e.config.type === "svg")
          return je("div", {
            innerHTML: e.config.value,
            class: [...e.config.classes || [], ...e.extraClasses].join(" ")
            // Convert array to string
          });
      } catch (t) {
        return console.error("Error rendering icon:", t), null;
      }
    };
  }
}), vy = pe({
  name: "ProductOverview",
  components: {
    MyButton: va,
    DialogTitle: Tr,
    DialogDescription: Fc,
    NumberInput: Sv,
    CryptoIcon: Ol,
    Navigator: ga,
    RadioGroup: Jc,
    RadioGroupDescription: ef,
    RadioGroupLabel: Qc,
    RadioGroupOption: Zc,
    FontAwesomeIcon: Ho,
    Disclosure: Wb,
    DisclosureButton: Yb,
    DisclosurePanel: qb,
    RenderIcon: hy,
    NumberFlow: Uf,
    InputGroup: Tl,
    AdditionalInformation: iy,
    EnvelopeIcon: zh,
    Drawer: by
  },
  setup() {
    const { context: e, state: t, send: n } = Rt(), r = W(null), i = W(null), o = W(!1), a = {
      PAYPAL: {
        description: "Checkout with your PayPal account",
        name: "PayPal",
        icon: {
          type: "fa",
          value: "fa-brands fa-paypal",
          classes: ["embed-text-[#003087] embed-h-8 embed-w-6"]
        }
      },
      PAYSTACK: {
        description: "Pay with credit and debit card",
        name: "PayStack",
        icon: {
          type: "fa",
          value: "fa-solid fa-money-bill-wave",
          classes: ["embed-text-[#00457C]"]
        }
      },
      STRIPE: {
        description: "Debit and credit card, Apple/Google Pay, and more",
        name: "Stripe",
        icon: {
          type: "fa",
          value: "fa-brands fa-cc-stripe",
          classes: ["embed-text-[#5433FF] embed-h-8 embed-w-6"]
        }
      },
      CASHAPP: {
        description: "Checkout with your Cash App account",
        name: "Cash App",
        icon: {
          type: "svg",
          value: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g fill-rule="nonzero" fill="#FFF"><path d="M41.7 0c6.4 0 9.6 0 13.1 1.1a13.6 13.6 0 0 1 8.1 8.1C64 12.7 64 15.9 64 22.31v19.37c0 6.42 0 9.64-1.1 13.1a13.6 13.6 0 0 1-8.1 8.1C51.3 64 48.1 64 41.7 64H22.3c-6.42 0-9.64 0-13.1-1.1a13.6 13.6 0 0 1-8.1-8.1C0 51.3 0 48.1 0 41.69V22.3c0-6.42 0-9.64 1.1-13.1a13.6 13.6 0 0 1 8.1-8.1C12.7 0 15.9 0 22.3 0h19.4z" fill="#00D632"/><path d="M42.47 23.8c.5.5 1.33.5 1.8-.0l2.5-2.6c.53-.5.5-1.4-.06-1.94a19.73 19.73 0 0 0-6.72-3.84l.79-3.8c.17-.83-.45-1.61-1.28-1.61h-4.84a1.32 1.32 0 0 0-1.28 1.06l-.7 3.38c-6.44.33-11.9 3.6-11.9 10.3 0 5.8 4.51 8.29 9.28 10 4.51 1.72 6.9 2.36 6.9 4.78 0 2.49-2.38 3.95-5.9 3.95-3.2 0-6.56-1.07-9.16-3.68a1.3 1.3 0 0 0-1.84-.0l-2.7 2.7a1.36 1.36 0 0 0 .0 1.92c2.1 2.07 4.76 3.57 7.792 4.4l-.74 3.57c-.17.83.44 1.6 1.27 1.61l4.85.04a1.32 1.32 0 0 0 1.3-1.06l.7-3.39C40.28 49.07 45 44.8 45 38.57c0-5.74-4.7-8.16-10.4-10.13-3.26-1.21-6.08-2.04-6.08-4.53 0-2.42 2.63-3.38 5.27-3.38 3.36 0 6.59 1.39 8.7 3.29z" fill="#FFF"/></g></svg>',
          classes: ["embed-fill-current embed-h-8 embed-w-6"]
        }
      },
      SQUARE: {
        description: "Debit and credit card, Apple/Google Pay, and more",
        name: "Square",
        icon: {
          type: "svg",
          value: '<svg enable-background="new 0 0 40 40" version="1.1" viewBox="0 0 40 40" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g id="Square_Payment_1_"><path d="M33,10c0-1.7-1.3-3-3-3H11c-1.7,0-3,1.3-3,3v19c0,1.7,1.3,3,3,3h19c1.7,0,3-1.3,3-3V10z" fill="currentColor"/><path d="M29,13c0-1.1-0.9-2-2-2H14c-1.1,0-2,0.9-2,2v13c0,1.1,0.9,2,2,2h13c1.1,0,2-0.9,2-2V13z" fill="#ECF0F1"/><path d="M25,16c0-0.6-0.4-1-1-1h-7c-0.6,0-1,0.4-1,1v7c0,0.6,0.4,1,1,1h7c0.6,0,1-0.4,1-1V16z" fill="currentColor"/></g></svg>',
          classes: ["embed-text-[#2C3E50] embed-h-8 embed-w-6"]
        }
      },
      VENMO: {
        description: "Pay directly with your Venmo account",
        name: "Venmo",
        icon: {
          type: "svg",
          value: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 611.9 117.8"><path d="M100.8 1.5c4.2 7 5.7 14 5.7 22.4 0 28-23.8 65.9-43.4 91.1H18.2L0 7.2l40.6-2.8 9.8 77.1c8.4-14 19.7-37.9 19.7-53.2 0-8.4-1.4-14-4.2-19.7zm51.8 47.7c7 0 25.2-2.8 25.2-14 0-5.7-2.8-7-7-7-8.3 0-18.2 8.4-18.2 21zm-1.3 21c0 12.7 7 18.2 16.8 18.2s19.7-2.8 32.2-8.4l-5.7 30.8c-8.4 4.2-22.4 7-36.4 7-33.5 0-46.2-21-46.2-46.2 0-33.5 19.7-68.6 60.2-68.6 22.4 0 35 12.7 35 30.8 1.5 26.6-35 36.4-55.9 36.4zM322.1 26.7c0 4.2 0 9.8-1.4 14l-11.2 74.2h-37.8l11.2-68.6c0-1.4 1.4-5.7 1.4-7 0-5.7-2.8-5.7-7-5.7-5.7 0-9.8 2.8-12.7 4.2l-14 77.1h-37.9l16.8-112.1h33.5v8.4c8.4-5.7 18.2-11.2 32.2-11.2 19.9 3 26.9 12.7 26.9 26.7zm113.4-12.5c11.2-8.4 21-12.7 35-12.7 19.7 0 26.7 9.8 26.7 25.2 0 4.2 0 9.8-1.4 14L484.7 115h-37.9l11.2-70v-5.7c0-5.7-2.8-7-7-7s-9.8 1.4-12.7 4.2L425.7 114.9h-37.9l11.2-70v-5.7c0-5.7-2.8-7-7-7-5.7 0-9.8 2.8-12.7 4.2L366.7 114.7h-37.9l16.9-112h32.2l1.4 9.8c7-5.7 18.2-11.2 32.2-11.2 11.4 1.7 19.7 5.9 24 12.9zM572.7 47.8c0-9.8-2.8-15.4-9.8-15.4-15.4 0-18.2 26.7-18.2 40.6 0 9.8 2.8 16.8 9.8 16.8 15.5-1.4 18.2-29.4 18.2-42zm-65.8 22.4c0-35 18.2-68.6 61.6-68.6 32.2 0 43.4 19.7 43.4 44.9 0 35-18.2 70-61.6 70-32.2 1.3-43.4-19.7-43.4-46.3z" fill="currentColor"/></svg>',
          classes: ["embed-text-[#3d95ce] embed-h-8 embed-w-12"]
        }
      },
      PADDLE: {
        description: "Debit and credit card, Apple/Google Pay, and more",
        name: "Paddle",
        icon: {
          type: "svg",
          value: '<svg viewBox="0 0 110 30" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M49.9213 7.48787C52.468 7.48787 54.724 8.7676 56.1418 10.7844V0H59.0423V24.0002H56.1418V21.2156C54.724 23.2363 52.468 24.5121 49.9213 24.5121C45.1514 24.5121 41.123 20.7682 41.123 16.0005C41.123 11.2328 45.1514 7.48787 49.9213 7.48787ZM49.9213 21.9517C53.692 21.9517 56.1418 19.424 56.1418 16.0005C56.1418 12.577 53.692 10.0483 49.9213 10.0483C46.5702 10.0483 44.0234 12.448 44.0234 16.0005C44.0234 19.5529 46.5702 21.9517 49.9213 21.9517ZM36.2891 10.7843C34.8713 8.76752 32.6153 7.48779 30.0695 7.48779C25.2987 7.48779 21.2703 11.2327 21.2703 16.0004C21.2703 20.7681 25.2987 24.5121 30.0695 24.5121C32.5833 24.5121 34.8355 23.2362 36.2891 21.2156V24.0002H39.1896V7.99969H36.2891V10.7843ZM36.2891 16.0004C36.2891 19.3922 33.8073 21.9516 30.0695 21.9516C26.7175 21.9516 24.1707 19.5529 24.1707 16.0004C24.1707 12.448 26.7175 10.0482 30.0695 10.0482C33.8402 10.0482 36.2891 12.5759 36.2891 16.0004ZM0 15.5818V16.4478C0.529481 16.4479 1.05375 16.5517 1.54282 16.7531C2.0319 16.9545 2.47621 17.2497 2.85034 17.6217C3.22446 17.9937 3.52108 18.4353 3.72324 18.9212C3.92539 19.4071 4.02911 19.9277 4.02848 20.4535H4.83475C4.83501 19.3927 5.25952 18.3755 6.01495 17.6254C6.77038 16.8753 7.79489 16.4538 8.86323 16.4536V15.5876C8.33375 15.5875 7.80948 15.4837 7.3204 15.2823C6.83133 15.0809 6.38702 14.7858 6.01289 14.4137C5.63876 14.0417 5.34214 13.6002 5.13999 13.1143C4.93784 12.6284 4.83412 12.1077 4.83475 11.582H4.02848C4.02822 12.6427 3.60371 13.6599 2.84828 14.41C2.09285 15.1601 1.06834 15.5816 0 15.5818ZM10.9574 10.08H4.02848V7.51953H10.9574C15.8241 7.51953 19.6598 11.3289 19.6598 16.0004C19.6598 20.6719 15.8241 24.4803 10.9574 24.4803H6.92894V31.9999H4.02848V21.9199H10.9574C14.3424 21.9199 16.7593 19.5211 16.7593 16.0004C16.7593 12.4797 14.3415 10.08 10.9574 10.08ZM76.3185 10.7844C74.8998 8.7676 72.6437 7.48787 70.098 7.48787C65.3281 7.48787 61.2997 11.2328 61.2997 16.0005C61.2997 20.7682 65.3281 24.5121 70.098 24.5121C72.6437 24.5121 74.8998 23.2363 76.3185 21.2156V24.0002H79.219V0H76.3185V10.7844ZM76.3185 16.0005C76.3185 19.424 73.8687 21.9517 70.098 21.9517C66.7459 21.9517 64.2001 19.5529 64.2001 16.0005C64.2001 12.448 66.7459 10.0483 70.098 10.0483C73.8687 10.0483 76.3185 12.577 76.3185 16.0005ZM82.116 24.0002V0H85.0175V24.0002H82.116ZM104.001 17.1214C104.001 11.8408 101.326 7.52051 95.7513 7.52051C90.8846 7.52051 87.1139 11.3943 87.1139 16.0014C87.1139 20.6084 90.8846 24.4813 95.7513 24.4813C99.6189 24.4813 102.486 22.0488 103.582 19.5846H100.456C99.2962 21.3445 97.7496 22.2413 95.7513 22.2413C92.8508 22.2413 90.5299 20.2245 90.0793 17.1214H104.001ZM95.7513 9.76052C98.8446 9.76052 101.101 12.2565 101.101 14.8814H90.0793C90.5299 11.7811 92.8508 9.76052 95.7513 9.76052Z" fill="currentColor"/></svg>',
          classes: ["embed-fill-current embed-w-8 embed-h-8 embed-items-center"]
        }
      },
      BTC: {
        description: "Pay with Bitcoin",
        name: "Bitcoin",
        icon: "Btc"
      },
      LTC: {
        description: "Pay with Litecoin",
        name: "Litecoin",
        icon: "Ltc"
      },
      ETH: {
        description: "Pay with Ethereum",
        name: "Ethereum",
        icon: "Eth"
      },
      XMR: {
        description: "Pay with Monero",
        name: "Monero",
        icon: "Xmr"
      },
      BNB: {
        description: "Pay with BNB",
        name: "BNB",
        icon: "Bnb"
      },
      TRX: {
        description: "Pay with Tron",
        name: "Tron",
        icon: "Trx"
      },
      MATIC: {
        description: "Pay with Polygon",
        name: "Polygon",
        icon: "Matic"
      },
      ETH_USDT: {
        description: "Pay with USDT",
        name: "USDT",
        icon: "Usdt"
      },
      ETH_USDC: {
        description: "Pay with USDC",
        name: "USDC",
        icon: "Usdc"
      },
      ETH_UNI: {
        description: "Pay with UNI",
        name: "Uniswap",
        icon: "Uni"
      },
      ETH_SHIB: {
        description: "Pay with SHIB",
        name: "Shiba Inu",
        icon: "Eth"
      },
      ETH_DAI: {
        description: "Pay with DAI",
        name: "Dai",
        icon: "Dai"
      }
    }, s = e.value.variant.additional_information.map((re) => re.key);
    Me.additional_information = s.filter((re) => re in Me.additional_information).reduce((re, we) => (re[we] = Me.additional_information[we], re), {}), br(Me.country) && (Me.country = e.value.variant.current_country), br(e.value.email) || (Me.customer_email = e.value.email);
    const l = (re) => {
      var we, ct;
      return re = re.toLowerCase(), ((ct = (we = e.value.variant) == null ? void 0 : we.payment_discounts) == null ? void 0 : ct[re]) || null;
    }, d = (re) => {
      const we = l(re);
      return we ? we.percentage > 0 || we.fixed > 0 : !1;
    }, u = {
      type: e.value.variant.discord_request ? "CONNECT_DISCORD" : "FINAL_STEP"
    }, f = I(() => !br(e.value.variant.crypto_options)), c = Or({
      coupon: e.value.coupon ?? "",
      quantity: e.value.quantity ?? 0,
      extra: e.value.extra ?? "0.00"
    }), m = W(e.value.extra !== void 0 && e.value.extra !== "0.00"), p = W(e.value.coupon == "");
    function h(re, we) {
      n([
        {
          type: "UPDATE_CONTEXT",
          [re]: we ?? c[re]
        },
        "FETCH"
      ]);
    }
    const x = W(!1);
    let g = null;
    const v = (re, we) => {
      x.value = !0, g && clearTimeout(g), g = setTimeout(() => {
        n([
          {
            type: "UPDATE_CONTEXT",
            [re]: we ?? c[re]
          },
          "FETCH"
        ]), x.value = !1, g = null;
      }, 500);
    };
    pt(
      () => c.quantity,
      (re) => {
        g && clearTimeout(g), g = setTimeout(() => {
          h("quantity", re);
        }, 500);
      }
    );
    const w = I(() => e.value.product), k = I(() => e.value.variant), A = I(() => parseFloat(k.value.price.replace(/[^\d.]/g, ""))), F = I(() => parseFloat(k.value.total.replace(/[^\d.]/g, ""))), j = I(() => {
      const re = k.value.total.replace(/[\d,.\s]/g, "");
      switch (re) {
        case "¥":
          return "JPY";
        case "€":
          return "EUR";
        case "£":
          return "GBP";
        case "₹":
          return "INR";
        case "₪":
          return "ILS";
        case "₽":
          return "RUB";
        case "₱":
          return "PHP";
        case "฿":
          return "THB";
      }
      return {
        $: "USD",
        A$: "AUD",
        C$: "CAD",
        HK$: "HKD",
        MX$: "MXN",
        NT$: "TWD",
        NZ$: "NZD",
        S$: "SGD",
        "¥": "JPY",
        円: "JPY",
        元: "CNY",
        "€": "EUR",
        "£": "GBP",
        DKK: "DKK",
        NOK: "NOK",
        SEK: "SEK",
        "₹": "INR",
        "₪": "ILS",
        "₽": "RUB",
        "₱": "PHP",
        "฿": "THB",
        "₫": "VND",
        R$: "BRL",
        Kč: "CZK",
        "₵": "GHS",
        Ft: "HUF",
        RM: "MYR",
        "₦": "NGN",
        zł: "PLN",
        Fr: "CHF",
        R: "ZAR"
      }[re] || "USD";
    }), R = I(() => k.value.stock === !1), z = I(() => t.value.hasTag("fetching")), J = W("fiat"), Y = [
      "BTC",
      "ETH",
      "LTC",
      "XMR",
      "BNB",
      "TRX",
      "MATIC",
      "ETH_USDT",
      "ETH_USDC",
      "ETH_UNI",
      "ETH_SHIB",
      "ETH_DAI"
    ], D = [
      "PAYPAL",
      "STRIPE",
      "CASHAPP",
      "VENMO",
      "SQUARE",
      "PADDLE",
      "PAYSTACK"
    ], Z = (re) => Y.filter((we) => re.includes(we)), be = (re) => D.filter((we) => re.includes(we)), Le = (re) => Z(re).slice(0, 2), he = (re) => be(re).slice(0, 2), L = (re) => ge(re)[0], X = (re) => De(re)[0], ge = (re) => Z(re).slice(2), De = (re) => be(re).slice(2), Ee = I(() => Me.customer_email && Me.payment_method && Me.customer_email.includes("@")), Te = I(() => Le(e.value.variant.crypto_options)), Tt = I(() => he(e.value.variant.payment_processors));
    return {
      product: w,
      variant: k,
      send: n,
      data: c,
      context: e,
      orMore: m,
      applyCoupon: p,
      apply: h,
      debouncedApply: v,
      isApplying: x,
      isSoldOut: R,
      isLoading: z,
      checkout_information: Me,
      paymentMethods: a,
      getDiscount: l,
      isPositiveDiscount: d,
      next: u,
      showCrypto: f,
      paymentType: J,
      selectedDropdownMethod: r,
      selectedFiatMethod: i,
      defaultCryptoOptions: Te,
      getFirstTwoOptions: Le,
      getThirdOption: L,
      getRemainingOptions: ge,
      defaultFiatOptions: Tt,
      getFirstTwoFiatOptions: he,
      getThirdFiatOption: X,
      getRemainingFiatOptions: De,
      formattedPrice: A,
      formattedTotal: F,
      currencyCode: j,
      isDescriptionOpen: o,
      isValidInput: Ee
    };
  }
}), gy = { class: "embed-relative" }, yy = { class: "embed-flex embed-flex-col embed-px-4 embed-pt-5 embed-pb-4 sm:embed-p-6 embed-space-y-3" }, _y = { class: "embed-space-y-3" }, wy = {
  key: 0,
  class: "embed-flex embed-flex-row embed-gap-2 embed-bg-zinc-50 dark:embed-bg-zinc-950 embed-p-1 embed-rounded-md"
}, xy = { class: "embed-flex embed-items-stretch embed-min-h-24" }, ky = {
  key: 0,
  class: "embed-h-24 embed-w-28 embed-min-h-[6rem] embed-flex-shrink-0 embed-rounded-lg embed-overflow-hidden embed-bg-inherit embed-mr-4"
}, Ey = ["src", "alt"], Sy = { class: "embed-flex embed-flex-col embed-text-left embed-w-full embed-justify-between" }, Oy = { class: "embed-space-y-px" }, Ty = ["innerHTML"], Cy = { class: "embed-flex embed-flex-row embed-gap-2 embed-items-center" }, Ay = {
  key: 0,
  class: "embed-text-md embed-font-normal embed-text-black dark:embed-text-white embed-line-through"
}, My = { class: "embed-text-md embed-text-black dark:embed-text-white embed-font-bold" }, Ny = {
  key: 0,
  class: "embed-flex embed-flex-row embed-items-center embed-justify-between embed-mt-2"
}, Iy = { class: "embed-flex embed-space-x-2" }, Dy = ["textContent"], Py = { class: "embed-inline-block embed-text-left embed-text-xs embed-text-black dark:embed-text-white embed-space-x-1" }, Ry = {
  key: 0,
  class: "embed-text-lg"
}, Ly = { key: 1 }, $y = /* @__PURE__ */ _("span", null, "available ", -1), Fy = ["textContent"], zy = { class: "embed-text-left" }, Vy = { class: "embed-flex embed-flex-row embed-justify-center embed-gap-4" }, jy = { class: "embed-flex embed-items-center" }, Uy = { class: "embed-text-sm embed-w-full" }, Hy = { class: "embed-flex embed-justify-center embed-flex-row embed-gap-2 embed-items-center embed-w-full" }, By = {
  key: 0,
  class: "embed-text-[0.65rem] embed-text-zinc-500 dark:embed-text-zinc-400 embed-font-normal"
}, Gy = /* @__PURE__ */ _("div", {
  class: "embed-absolute -embed-inset-px embed-rounded-lg embed-pointer-events-none",
  "aria-hidden": "true"
}, null, -1), Wy = { class: "embed-flex embed-items-center" }, Yy = { class: "embed-text-sm embed-w-full" }, qy = { class: "embed-flex embed-justify-center embed-flex-row embed-gap-2 embed-items-center embed-w-full" }, Ky = {
  key: 0,
  class: "embed-text-[0.65rem] embed-text-zinc-500 dark:embed-text-zinc-400 embed-font-normal"
}, Xy = /* @__PURE__ */ _("div", {
  class: "embed-absolute -embed-inset-px embed-rounded-lg embed-pointer-events-none",
  "aria-hidden": "true"
}, null, -1), Jy = { class: "embed-flex embed-flex-col embed-items-center embed-justify-center embed-h-full embed-w-8" }, Zy = { class: "embed-flex embed-flex-col" }, Qy = { class: "embed-flex embed-items-center" }, e4 = { class: "embed-block embed-truncate embed-text-sm" }, t4 = {
  key: 0,
  class: "embed-text-xs embed-text-zinc-500 dark:embed-text-zinc-400 embed-text-left"
}, n4 = { class: "embed-flex embed-items-center" }, r4 = { class: "embed-text-sm embed-w-full" }, i4 = { class: "embed-flex embed-justify-center embed-flex-row embed-gap-2 embed-items-center embed-w-full" }, o4 = {
  key: 0,
  class: "embed-text-[0.65rem] embed-text-zinc-500 dark:embed-text-zinc-400 embed-font-normal"
}, a4 = /* @__PURE__ */ _("div", {
  class: "embed-absolute -embed-inset-px embed-rounded-lg embed-pointer-events-none",
  "aria-hidden": "true"
}, null, -1), s4 = { class: "embed-flex embed-items-center" }, l4 = { class: "embed-text-sm embed-w-full" }, d4 = { class: "embed-flex embed-justify-center embed-flex-row embed-gap-2 embed-items-center embed-w-full" }, u4 = {
  key: 0,
  class: "embed-text-[0.65rem] embed-text-zinc-500 dark:embed-text-zinc-400 embed-font-normal"
}, c4 = /* @__PURE__ */ _("div", {
  class: "embed-absolute -embed-inset-px embed-rounded-lg embed-pointer-events-none",
  "aria-hidden": "true"
}, null, -1), f4 = { class: "embed-flex embed-flex-col embed-items-center embed-justify-center embed-h-full embed-w-8" }, m4 = { class: "embed-flex embed-items-center" }, p4 = { class: "embed-block embed-truncate embed-text-sm" }, b4 = {
  key: 0,
  class: "embed-text-xs embed-text-zinc-500 dark:embed-text-zinc-400 embed-text-left"
}, h4 = {
  key: 0,
  class: "embed-text-left embed-space-y-2"
}, v4 = {
  key: 1,
  class: "embed-pt-3 embed-text-left embed-flex embed-flex-col embed-gap-3"
}, g4 = { key: 0 }, y4 = { class: "embed-flex embed-flex-row embed-items-center embed-justify-center embed-gap-2" }, _4 = { class: "embed-flex embed-flex-col embed-gap-1 embed-rounded-md embed-shadow-sm embed-flex-shrink-0 embed-pt-4" }, w4 = { class: "embed-relative" }, x4 = { class: "embed-flex embed-rounded-md" }, k4 = { class: "embed-relative embed-flex embed-items-stretch embed-flex-grow focus-within:embed-z-10" }, E4 = ["textContent"], S4 = {
  key: 3,
  class: "embed-mt-3 embed-w-full embed-mx-auto embed-text-center embed-p-2 embed-bg-emerald-600 dark:embed-bg-emerald-900 embed-text-white embed-text-xs embed-rounded-full"
}, O4 = {
  key: 2,
  class: "embed-flex embed-flex-col embed-gap-1"
}, T4 = { class: "embed-flex embed-space-x-2" }, C4 = ["innerHTML"], A4 = { class: "embed-flex embed-flex-col embed-gap-1 embed-rounded-md embed-pt-4" }, M4 = { class: "embed-relative embed-mx-auto embed-items-center embed-w-1/2" }, N4 = { class: "embed-flex embed-rounded-md embed-w-full" }, I4 = { class: "embed-relative embed-flex embed-items-stretch embed-flex-grow focus-within:embed-z-10" }, D4 = /* @__PURE__ */ _("span", null, "Add", -1), P4 = ["textContent"], R4 = { class: "dark:embed-bg-zinc-950 embed-bg-zinc-50 embed-rounded-t-2xl embed-py-4 embed-flex embed-flex-row embed-justify-center embed-items-center embed-gap-2" }, L4 = { key: 1 };
function $4(e, t, n, r, i, o) {
  var R, z, J, Y, D, Z, be, Le, he;
  const a = ae("DialogTitle"), s = ae("NumberFlow"), l = ae("NumberInput"), d = ae("EnvelopeIcon"), u = ae("InputGroup"), f = ae("CryptoIcon"), c = ae("RadioGroupLabel"), m = ae("RadioGroupOption"), p = ae("font-awesome-icon"), h = ae("ListboxButton"), x = ae("RenderIcon"), g = ae("ListboxOption"), v = ae("ListboxOptions"), w = ae("Listbox"), k = ae("RadioGroup"), A = ae("AdditionalInformation"), F = ae("MyButton"), j = ae("Drawer");
  return E(), C("div", gy, [
    _("div", yy, [
      G(k, {
        modelValue: e.checkout_information.payment_method,
        "onUpdate:modelValue": t[8] || (t[8] = (L) => e.checkout_information.payment_method = L)
      }, {
        default: ie(() => {
          var L, X, ge, De, Ee, Te, Tt, re, we, ct, On;
          return [
            _("div", _y, [
              e.showCrypto && e.context.variant.payment_processors.length > 0 ? (E(), C("div", wy, [
                _("button", {
                  onClick: t[0] || (t[0] = (S) => e.paymentType = "fiat"),
                  class: ye([{ "dark:embed-bg-transparent embed-shadow-sm embed-shadow-emerald-200 dark:embed-shadow-emerald-900 [background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.200)_25%,_theme(colors.green.200)_75%,_theme(colors.emerald.500)_100%)_border-box] dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed-text-black dark:embed-text-white": e.paymentType === "fiat", "embed-text-zinc-500 hover:embed-text-zinc-900 dark:hover:embed-text-zinc-100": e.paymentType !== "fiat" }, "embed-py-2 embed-px-4 focus:embed-outline-none embed-p-2 embed-rounded-lg embed-w-full embed-transition embed-duration-200 embed-ease-in-out embed-border embed-border-transparent embed-font-medium embed-text-sm"])
                }, " Pay with Fiat ", 2),
                _("button", {
                  onClick: t[1] || (t[1] = (S) => e.paymentType = "crypto"),
                  class: ye([{ "dark:embed-bg-transparent embed-shadow-sm embed-shadow-emerald-200 dark:embed-shadow-emerald-900 [background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.200)_25%,_theme(colors.green.200)_75%,_theme(colors.emerald.500)_100%)_border-box] dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed-text-black dark:embed-text-white": e.paymentType === "crypto", "embed-text-zinc-500 hover:embed-text-zinc-900 dark:hover:embed-text-zinc-100": e.paymentType !== "crypto" }, "embed-py-2 embed-px-4 focus:embed-outline-none embed-p-2 embed-rounded-lg embed-w-full embed-transition embed-duration-200 embed-ease-in-out embed-border embed-border-transparent embed-font-medium embed-text-sm"])
                }, " Pay with Crypto ", 2)
              ])) : oe("", !0),
              _("div", xy, [
                ((L = e.variant.images) == null ? void 0 : L.length) > 0 ? (E(), C("div", ky, [
                  _("img", {
                    class: "embed-object-contain embed-h-full embed-w-full",
                    src: e.variant.images[0],
                    alt: e.variant.title
                  }, null, 8, Ey)
                ])) : oe("", !0),
                _("div", Sy, [
                  _("div", Oy, [
                    G(a, {
                      as: "h1",
                      class: "embed-font-bold embed-text-black dark:embed-text-white embed-text-xl"
                    }, {
                      default: ie(() => [
                        ne(T(e.product.title), 1)
                      ]),
                      _: 1
                    }),
                    e.variant.description !== "Default Variant" && e.variant.description !== "default variant" ? (E(), C("p", {
                      key: 0,
                      class: "dark:embed-text-zinc-400 embed-text-xs",
                      innerHTML: e.variant.description
                    }, null, 8, Ty)) : oe("", !0),
                    _("div", Cy, [
                      e.variant.price !== e.variant.total ? (E(), C("div", Ay, [
                        G(s, {
                          value: e.formattedPrice,
                          format: {
                            style: "currency",
                            currency: e.currencyCode,
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          },
                          class: "embed-pointer-events-none embed-line-through",
                          animated: !0
                        }, null, 8, ["value", "format"])
                      ])) : oe("", !0),
                      _("div", My, [
                        G(s, {
                          value: e.formattedTotal,
                          format: {
                            style: "currency",
                            currency: e.currencyCode,
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          },
                          class: "embed-pointer-events-none",
                          animated: !0
                        }, null, 8, ["value", "format"])
                      ])
                    ])
                  ]),
                  e.variant.visibility == "PUBLIC" || e.variant.visibility == "HIDDEN" ? (E(), C("div", Ny, [
                    _("div", Iy, [
                      G(l, {
                        modelValue: e.data.quantity,
                        "onUpdate:modelValue": t[2] || (t[2] = (S) => e.data.quantity = S),
                        min: e.variant.minimum_purchase_quantity,
                        max: e.variant.maximum_purchase_quantity,
                        class: "embed-text-xs"
                      }, null, 8, ["modelValue", "min", "max"]),
                      (De = (ge = (X = e.context.error) == null ? void 0 : X.errors) == null ? void 0 : ge.quantity) != null && De[0] ? (E(), C("p", {
                        key: 0,
                        class: "embed-text-sm embed-text-red-600 dark:embed-text-red embed-w-full",
                        textContent: T((Te = (Ee = e.context.error) == null ? void 0 : Ee.errors) == null ? void 0 : Te.quantity[0])
                      }, null, 8, Dy)) : oe("", !0)
                    ]),
                    _("p", Py, [
                      e.variant.stock ? (E(), C("span", Ly, T(e.variant.stock), 1)) : (E(), C("span", Ry, "0")),
                      $y
                    ]),
                    (we = (re = (Tt = e.context.error) == null ? void 0 : Tt.errors) == null ? void 0 : re.quantity) != null && we[0] ? (E(), C("p", {
                      key: 0,
                      class: "embed-ml-1.5 embed-text-left embed-text-sm embed-text-red-600 dark:embed-text-red embed-w-full",
                      textContent: T((On = (ct = e.context.error) == null ? void 0 : ct.errors) == null ? void 0 : On.quantity[0])
                    }, null, 8, Fy)) : oe("", !0)
                  ])) : oe("", !0)
                ])
              ]),
              _("div", zy, [
                G(u, {
                  modelValue: e.checkout_information.customer_email,
                  "onUpdate:modelValue": t[3] || (t[3] = (S) => e.checkout_information.customer_email = S),
                  "error-key": "customer_email",
                  type: "email",
                  label: "Email",
                  placeholder: "example@example.com",
                  class: "dark:embed-bg-zinc-950"
                }, {
                  icon: ie(() => [
                    G(d, {
                      class: "embed-h-5 embed-w-5 embed-text-zinc-500",
                      "aria-hidden": "true"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _("div", Vy, [
                e.showCrypto && e.context.variant.payment_processors.length === 0 || e.paymentType === "crypto" ? (E(), C(H, { key: 0 }, [
                  (E(!0), C(H, null, pn(e.getFirstTwoOptions(e.context.variant.crypto_options), (S) => (E(), xe(m, {
                    key: S,
                    as: "template",
                    value: S
                  }, {
                    default: ie(({ checked: Ie }) => [
                      _("div", {
                        class: ye(["embed-flex embed-flex-col embed-border-2 embed-border-transparent embed-shadow-inner embed-w-28 embed-min-h-[6rem]", [Ie ? "[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.300)_25%,_theme(colors.green.300)_75%,_theme(colors.emerald.500)_100%)_border-box] dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed-shadow-emerald-200 dark:embed-shadow-emerald-900" : "hover:embed-border-emerald-200 dark:hover:embed-border-emerald-950 embed-shadow-emerald-100 hover:embed-shadow-emerald-200 focus:embed-shadow-emerald-200 dark:embed-shadow-emerald-950 dark:hover:embed-shadow-emerald-900 dark:focus:embed-shadow-emerald-900 embed-bg-white dark:embed-bg-zinc-950", "embed-transition embed-duration-300 embed-ease-in-out embed-relative embed-rounded-lg embed-px-3 embed-py-2 embed-cursor-pointer sm:embed-flex sm:embed-justify-between focus:embed-outline-none"]])
                      }, [
                        _("div", jy, [
                          _("div", Uy, [
                            G(c, {
                              as: "p",
                              class: "embed-flex embed-flex-col embed-items-center embed-font-medium embed-text-black dark:embed-text-white embed-gap-1 embed-py-0.5"
                            }, {
                              default: ie(() => {
                                var et, nt;
                                return [
                                  _("span", Hy, [
                                    G(f, {
                                      symbol: (et = e.paymentMethods) == null ? void 0 : et[S].icon,
                                      size: "24",
                                      class: ye(["embed-w-8 embed-h-8", [Ie ? "embed-text-black dark:embed-text-white" : "embed-text-zinc-600 dark:embed-text-zinc-300"]])
                                    }, null, 8, ["symbol", "class"])
                                  ]),
                                  _("span", {
                                    class: ye(["embed-capitalize embed-text-xs", [Ie ? "embed-text-black dark:embed-text-white embed-font-bold" : "embed-text-zinc-700 dark:embed-text-zinc-300"]])
                                  }, [
                                    ne(T((nt = e.paymentMethods) == null ? void 0 : nt[S].name) + " ", 1),
                                    e.getDiscount(S) ? (E(), C("div", By, [
                                      e.isPositiveDiscount(S) ? (E(), C(H, { key: 0 }, [
                                        e.getDiscount(S).percentage && e.getDiscount(S).fixed ? (E(), C(H, { key: 0 }, [
                                          ne(T(Math.abs(e.getDiscount(S).percentage)) + "% + " + T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(S).fixed)) + " off ", 1)
                                        ], 64)) : e.getDiscount(S).percentage ? (E(), C(H, { key: 1 }, [
                                          ne(T(Math.abs(e.getDiscount(S).percentage)) + "% off ", 1)
                                        ], 64)) : e.getDiscount(S).fixed ? (E(), C(H, { key: 2 }, [
                                          ne(T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(S).fixed)) + " off ", 1)
                                        ], 64)) : oe("", !0)
                                      ], 64)) : (E(), C(H, { key: 1 }, [
                                        e.getDiscount(S).percentage && e.getDiscount(S).fixed ? (E(), C(H, { key: 0 }, [
                                          ne(T(Math.abs(e.getDiscount(S).percentage)) + "% + " + T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(S).fixed)) + " fee ", 1)
                                        ], 64)) : e.getDiscount(S).percentage ? (E(), C(H, { key: 1 }, [
                                          ne(T(Math.abs(e.getDiscount(S).percentage)) + "% fee ", 1)
                                        ], 64)) : e.getDiscount(S).fixed ? (E(), C(H, { key: 2 }, [
                                          ne(T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(S).fixed)) + " fee ", 1)
                                        ], 64)) : oe("", !0)
                                      ], 64))
                                    ])) : oe("", !0)
                                  ], 2)
                                ];
                              }),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        Gy
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["value"]))), 128)),
                  e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options) ? (E(), xe(m, {
                    key: e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options),
                    value: e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)
                  }, {
                    default: ie(({ checked: S }) => [
                      _("div", {
                        class: ye(["embed-flex embed-flex-col embed-border-2 embed-border-transparent embed-shadow-inner embed-w-28 embed-min-h-[6rem]", [S ? "[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.300)_25%,_theme(colors.green.300)_75%,_theme(colors.emerald.500)_100%)_border-box] dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed-shadow-emerald-200 dark:embed-shadow-emerald-900" : "hover:embed-border-emerald-200 dark:hover:embed-border-emerald-950 embed-shadow-emerald-100 hover:embed-shadow-emerald-200 focus:embed-shadow-emerald-200 dark:embed-shadow-emerald-950 dark:hover:embed-shadow-emerald-900 dark:focus:embed-shadow-emerald-900 embed-bg-white dark:embed-bg-zinc-950", "embed-transition embed-duration-300 embed-ease-in-out embed-relative embed-rounded-lg embed-px-3 embed-py-2 embed-cursor-pointer sm:embed-flex sm:embed-justify-between focus:embed-outline-none"]])
                      }, [
                        _("div", Wy, [
                          _("div", Yy, [
                            G(c, {
                              as: "p",
                              class: "embed-flex embed-flex-col embed-items-center embed-font-medium embed-text-black dark:embed-text-white embed-gap-1 embed-py-0.5"
                            }, {
                              default: ie(() => {
                                var Ie, et;
                                return [
                                  _("span", qy, [
                                    G(f, {
                                      symbol: (Ie = e.paymentMethods) == null ? void 0 : Ie[e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)].icon,
                                      size: "24",
                                      class: "embed-w-8 embed-h-8"
                                    }, null, 8, ["symbol"])
                                  ]),
                                  _("span", {
                                    class: ye(["embed-capitalize embed-text-xs", [S ? "embed-text-black dark:embed-text-white embed-font-bold" : "embed-text-zinc-700 dark:embed-text-zinc-300"]])
                                  }, [
                                    ne(T((et = e.paymentMethods) == null ? void 0 : et[e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)].name) + " ", 1),
                                    e.getThirdOption(e.context.variant.crypto_options) && e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)) ? (E(), C("div", Ky, [
                                      e.isPositiveDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)) ? (E(), C(H, { key: 0 }, [
                                        e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage && e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed ? (E(), C(H, { key: 0 }, [
                                          ne(T(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage)) + "% + " + T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed)) + " off ", 1)
                                        ], 64)) : e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage ? (E(), C(H, { key: 1 }, [
                                          ne(T(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage)) + "% off ", 1)
                                        ], 64)) : e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed ? (E(), C(H, { key: 2 }, [
                                          ne(T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed)) + " off ", 1)
                                        ], 64)) : oe("", !0)
                                      ], 64)) : (E(), C(H, { key: 1 }, [
                                        e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage && e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed ? (E(), C(H, { key: 0 }, [
                                          ne(T(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage)) + "% + " + T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed)) + " fee ", 1)
                                        ], 64)) : e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage ? (E(), C(H, { key: 1 }, [
                                          ne(T(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage)) + "% fee ", 1)
                                        ], 64)) : e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed ? (E(), C(H, { key: 2 }, [
                                          ne(T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed)) + " fee ", 1)
                                        ], 64)) : oe("", !0)
                                      ], 64))
                                    ])) : oe("", !0)
                                  ], 2)
                                ];
                              }),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        Xy
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["value"])) : oe("", !0),
                  e.getRemainingOptions(e.context.variant.crypto_options).length > 1 ? (E(), xe(w, {
                    key: 1,
                    modelValue: e.selectedDropdownMethod,
                    "onUpdate:modelValue": [
                      t[4] || (t[4] = (S) => e.selectedDropdownMethod = S),
                      t[5] || (t[5] = (S) => e.checkout_information.payment_method = S)
                    ],
                    as: "div",
                    class: "embed-relative"
                  }, {
                    default: ie(() => [
                      G(h, { class: "embed-h-full embed-flex embed-flex-col dark:embed-border dark:embed-border-transparent embed-shadow-inner embed-bg-white dark:embed-bg-zinc-950 embed-transition embed-duration-300 embed-ease-in-out embed-relative embed-rounded-lg embed-px-3 embed-py-2 embed-cursor-pointer focus:embed-outline-none embed-ml-auto" }, {
                        default: ie(() => {
                          var S, Ie;
                          return [
                            _("span", Jy, [
                              e.getRemainingOptions(e.context.variant.crypto_options).length > 1 && ((Ie = (S = e.paymentMethods) == null ? void 0 : S[e.selectedDropdownMethod || (e.selectedDropdownMethod === e.getThirdOption(e.context.variant.crypto_options) ? e.getRemainingOptions(e.context.variant.crypto_options)[1] : e.getRemainingOptions(e.context.variant.crypto_options)[0])]) != null && Ie.icon) ? (E(), xe(f, {
                                key: 0,
                                symbol: e.paymentMethods[e.selectedDropdownMethod === e.getThirdOption(e.context.variant.crypto_options) ? e.getRemainingOptions(e.context.variant.crypto_options)[1] : e.selectedDropdownMethod ? e.getRemainingOptions(e.context.variant.crypto_options)[0] : e.getRemainingOptions(e.context.variant.crypto_options)[1]].icon,
                                size: "24",
                                class: "embed-w-5 embed-h-5"
                              }, null, 8, ["symbol"])) : oe("", !0),
                              G(p, {
                                icon: "chevron-down",
                                class: "embed-w-4 embed-h-4 embed-text-zinc-600 dark:embed-text-zinc-300"
                              })
                            ])
                          ];
                        }),
                        _: 1
                      }),
                      G(yn, {
                        "leave-active-class": "embed-transition embed-duration-100 embed-ease-in",
                        "leave-from-class": "embed-opacity-100",
                        "leave-to-class": "embed-opacity-0"
                      }, {
                        default: ie(() => [
                          G(v, { class: "embed-absolute embed-z-10 embed-mt-1 embed-w-48 embed-bg-white dark:embed-bg-zinc-900 embed-rounded-md embed-shadow-zinc-400 dark:embed-shadow-black embed-border embed-border-zinc-300 dark:embed-border-zinc-950 embed-shadow-lg embed-max-h-60 embed-overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:embed-hidden embed-py-1 embed-right-1 embed-mr-2" }, {
                            default: ie(() => [
                              (E(!0), C(H, null, pn(e.getRemainingOptions(e.context.variant.crypto_options), (S) => (E(), xe(g, {
                                key: S,
                                value: S,
                                as: "template"
                              }, {
                                default: ie(({ active: Ie, selected: et }) => {
                                  var nt, b, y;
                                  return [
                                    _("li", {
                                      class: ye(["embed-cursor-pointer embed-select-none embed-relative embed-py-2 embed-px-4", [
                                        Ie ? "embed-bg-zinc-100 dark:embed-bg-zinc-800" : "",
                                        et ? "embed-text-black dark:embed-text-white" : "embed-text-zinc-700 dark:embed-text-zinc-300"
                                      ]])
                                    }, [
                                      _("div", Zy, [
                                        _("div", Qy, [
                                          (b = (nt = e.paymentMethods) == null ? void 0 : nt[S]) != null && b.icon ? (E(), xe(x, {
                                            key: 0,
                                            config: e.paymentMethods[S].icon,
                                            "extra-classes": ["embed-w-6 embed-h-6 embed-mr-3 embed-flex embed-items-center"]
                                          }, null, 8, ["config"])) : oe("", !0),
                                          _("span", e4, [
                                            ne(T((y = e.paymentMethods) == null ? void 0 : y[S].name) + " ", 1),
                                            e.getDiscount(S) ? (E(), C("div", t4, [
                                              e.isPositiveDiscount(S) ? (E(), C(H, { key: 0 }, [
                                                e.getDiscount(S).percentage && e.getDiscount(S).fixed ? (E(), C(H, { key: 0 }, [
                                                  ne(T(Math.abs(e.getDiscount(S).percentage)) + "% + " + T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(S).fixed)) + " off ", 1)
                                                ], 64)) : e.getDiscount(S).percentage ? (E(), C(H, { key: 1 }, [
                                                  ne(T(Math.abs(e.getDiscount(S).percentage)) + "% off ", 1)
                                                ], 64)) : e.getDiscount(S).fixed ? (E(), C(H, { key: 2 }, [
                                                  ne(T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(S).fixed)) + " off ", 1)
                                                ], 64)) : oe("", !0)
                                              ], 64)) : (E(), C(H, { key: 1 }, [
                                                e.getDiscount(S).percentage && e.getDiscount(S).fixed ? (E(), C(H, { key: 0 }, [
                                                  ne(T(Math.abs(e.getDiscount(S).percentage)) + "% + " + T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(S).fixed)) + " fee ", 1)
                                                ], 64)) : e.getDiscount(S).percentage ? (E(), C(H, { key: 1 }, [
                                                  ne(T(Math.abs(e.getDiscount(S).percentage)) + "% fee ", 1)
                                                ], 64)) : e.getDiscount(S).fixed ? (E(), C(H, { key: 2 }, [
                                                  ne(T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(S).fixed)) + " fee ", 1)
                                                ], 64)) : oe("", !0)
                                              ], 64))
                                            ])) : oe("", !0)
                                          ])
                                        ])
                                      ])
                                    ], 2)
                                  ];
                                }),
                                _: 2
                              }, 1032, ["value"]))), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])) : oe("", !0)
                ], 64)) : (E(), C(H, { key: 1 }, [
                  (E(!0), C(H, null, pn(e.getFirstTwoFiatOptions(e.context.variant.payment_processors), (S) => (E(), xe(m, {
                    key: S,
                    as: "template",
                    value: S
                  }, {
                    default: ie(({ checked: Ie }) => [
                      _("div", {
                        class: ye(["embed-flex embed-flex-col embed-border-2 embed-border-transparent embed-shadow-inner embed-w-28 embed-min-h-[6rem]", [Ie ? "[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.300)_25%,_theme(colors.green.300)_75%,_theme(colors.emerald.500)_100%)_border-box] dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed-shadow-emerald-200 dark:embed-shadow-emerald-900" : "hover:embed-border-emerald-200 dark:hover:embed-border-emerald-950 embed-shadow-emerald-100 hover:embed-shadow-emerald-200 focus:embed-shadow-emerald-200 dark:embed-shadow-emerald-950 dark:hover:embed-shadow-emerald-900 dark:focus:embed-shadow-emerald-900 embed-bg-white dark:embed-bg-zinc-950", "embed-transition embed-duration-300 embed-ease-in-out embed-relative embed-rounded-lg embed-px-3 embed-py-2 embed-cursor-pointer sm:embed-flex sm:embed-justify-between focus:embed-outline-none"]])
                      }, [
                        _("div", n4, [
                          _("div", r4, [
                            G(c, {
                              as: "p",
                              class: "embed-flex embed-flex-col embed-items-center embed-font-medium embed-text-black dark:embed-text-white embed-gap-1 embed-py-0.5"
                            }, {
                              default: ie(() => {
                                var et, nt, b;
                                return [
                                  _("span", i4, [
                                    (nt = (et = e.paymentMethods) == null ? void 0 : et[S]) != null && nt.icon ? (E(), xe(x, {
                                      key: 0,
                                      config: e.paymentMethods[S].icon,
                                      "extra-classes": ["embed-flex embed-items-center"]
                                    }, null, 8, ["config"])) : oe("", !0)
                                  ]),
                                  _("span", {
                                    class: ye(["embed-capitalize embed-text-xs", [Ie ? "embed-text-black dark:embed-text-white embed-font-bold" : "embed-text-zinc-700 dark:embed-text-zinc-300"]])
                                  }, [
                                    ne(T((b = e.paymentMethods) == null ? void 0 : b[S].name) + " ", 1),
                                    e.getDiscount(S) ? (E(), C("div", o4, [
                                      e.isPositiveDiscount(S) ? (E(), C(H, { key: 0 }, [
                                        e.getDiscount(S).percentage && e.getDiscount(S).fixed ? (E(), C(H, { key: 0 }, [
                                          ne(T(Math.abs(e.getDiscount(S).percentage)) + "% + " + T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(S).fixed)) + " off ", 1)
                                        ], 64)) : e.getDiscount(S).percentage ? (E(), C(H, { key: 1 }, [
                                          ne(T(Math.abs(e.getDiscount(S).percentage)) + "% off ", 1)
                                        ], 64)) : e.getDiscount(S).fixed ? (E(), C(H, { key: 2 }, [
                                          ne(T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(S).fixed)) + " off ", 1)
                                        ], 64)) : oe("", !0)
                                      ], 64)) : (E(), C(H, { key: 1 }, [
                                        e.getDiscount(S).percentage && e.getDiscount(S).fixed ? (E(), C(H, { key: 0 }, [
                                          ne(T(Math.abs(e.getDiscount(S).percentage)) + "% + " + T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(S).fixed)) + " fee ", 1)
                                        ], 64)) : e.getDiscount(S).percentage ? (E(), C(H, { key: 1 }, [
                                          ne(T(Math.abs(e.getDiscount(S).percentage)) + "% fee ", 1)
                                        ], 64)) : e.getDiscount(S).fixed ? (E(), C(H, { key: 2 }, [
                                          ne(T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(S).fixed)) + " fee ", 1)
                                        ], 64)) : oe("", !0)
                                      ], 64))
                                    ])) : oe("", !0)
                                  ], 2)
                                ];
                              }),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        a4
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["value"]))), 128)),
                  e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors) ? (E(), xe(m, {
                    key: e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors),
                    value: e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)
                  }, {
                    default: ie(({ checked: S }) => [
                      _("div", {
                        class: ye(["embed-flex embed-flex-col embed-border-2 embed-border-transparent embed-shadow-inner embed-w-28 embed-min-h-[6rem]", [S ? "[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.300)_25%,_theme(colors.green.300)_75%,_theme(colors.emerald.500)_100%)_border-box] dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed-shadow-emerald-200 dark:embed-shadow-emerald-900" : "hover:embed-border-emerald-200 dark:hover:embed-border-emerald-950 embed-shadow-emerald-100 hover:embed-shadow-emerald-200 focus:embed-shadow-emerald-200 dark:embed-shadow-emerald-950 dark:hover:embed-shadow-emerald-900 dark:focus:embed-shadow-emerald-900 embed-bg-white dark:embed-bg-zinc-950", "embed-transition embed-duration-300 embed-ease-in-out embed-relative embed-rounded-lg embed-px-3 embed-py-2 embed-cursor-pointer sm:embed-flex sm:embed-justify-between focus:embed-outline-none"]])
                      }, [
                        _("div", s4, [
                          _("div", l4, [
                            G(c, {
                              as: "p",
                              class: "embed-flex embed-flex-col embed-items-center embed-font-medium embed-text-black dark:embed-text-white embed-gap-1 embed-py-0.5"
                            }, {
                              default: ie(() => {
                                var Ie, et, nt;
                                return [
                                  _("span", d4, [
                                    (et = (Ie = e.paymentMethods) == null ? void 0 : Ie[e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)]) != null && et.icon ? (E(), xe(x, {
                                      key: 0,
                                      config: e.paymentMethods[e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)].icon,
                                      "extra-classes": ["embed-flex embed-items-center"]
                                    }, null, 8, ["config"])) : oe("", !0)
                                  ]),
                                  _("span", {
                                    class: ye(["embed-capitalize embed-text-xs", [S ? "embed-text-black dark:embed-text-white embed-font-bold" : "embed-text-zinc-700 dark:embed-text-zinc-300"]])
                                  }, [
                                    ne(T((nt = e.paymentMethods) == null ? void 0 : nt[e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)].name) + " ", 1),
                                    e.getThirdFiatOption(e.context.variant.payment_processors) && e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)) ? (E(), C("div", u4, [
                                      e.isPositiveDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)) ? (E(), C(H, { key: 0 }, [
                                        e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage && e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed ? (E(), C(H, { key: 0 }, [
                                          ne(T(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage)) + "% + " + T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed)) + " off ", 1)
                                        ], 64)) : e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage ? (E(), C(H, { key: 1 }, [
                                          ne(T(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage)) + "% off ", 1)
                                        ], 64)) : e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed ? (E(), C(H, { key: 2 }, [
                                          ne(T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed)) + " off ", 1)
                                        ], 64)) : oe("", !0)
                                      ], 64)) : (E(), C(H, { key: 1 }, [
                                        e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage && e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed ? (E(), C(H, { key: 0 }, [
                                          ne(T(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage)) + "% + " + T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed)) + " fee ", 1)
                                        ], 64)) : e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage ? (E(), C(H, { key: 1 }, [
                                          ne(T(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage)) + "% fee ", 1)
                                        ], 64)) : e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed ? (E(), C(H, { key: 2 }, [
                                          ne(T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed)) + " fee ", 1)
                                        ], 64)) : oe("", !0)
                                      ], 64))
                                    ])) : oe("", !0)
                                  ], 2)
                                ];
                              }),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        c4
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["value"])) : oe("", !0),
                  e.getRemainingFiatOptions(e.context.variant.payment_processors).length > 1 ? (E(), xe(w, {
                    key: 1,
                    modelValue: e.selectedFiatMethod,
                    "onUpdate:modelValue": [
                      t[6] || (t[6] = (S) => e.selectedFiatMethod = S),
                      t[7] || (t[7] = (S) => e.checkout_information.payment_method = S)
                    ],
                    as: "div",
                    class: "embed-relative"
                  }, {
                    default: ie(() => [
                      G(h, { class: "embed-h-full embed-flex embed-flex-col dark:embed-border dark:embed-border-transparent embed-shadow-inner embed-bg-white dark:embed-bg-zinc-950 embed-transition embed-duration-300 embed-ease-in-out embed-relative embed-rounded-lg embed-px-3 embed-py-2 embed-cursor-pointer focus:embed-outline-none embed-ml-auto" }, {
                        default: ie(() => {
                          var S, Ie;
                          return [
                            _("span", f4, [
                              e.getRemainingFiatOptions(e.context.variant.payment_processors).length > 1 && ((Ie = (S = e.paymentMethods) == null ? void 0 : S[e.selectedFiatMethod || (e.selectedFiatMethod === e.getThirdFiatOption(e.context.variant.payment_processors) ? e.getRemainingFiatOptions(e.context.variant.payment_processors)[1] : e.getRemainingFiatOptions(e.context.variant.payment_processors)[0])]) != null && Ie.icon) ? (E(), xe(x, {
                                key: 0,
                                config: e.paymentMethods[e.selectedFiatMethod === e.getThirdFiatOption(e.context.variant.payment_processors) ? e.getRemainingFiatOptions(e.context.variant.payment_processors)[1] : e.selectedFiatMethod ? e.getRemainingFiatOptions(e.context.variant.payment_processors)[0] : e.getRemainingFiatOptions(e.context.variant.payment_processors)[1]].icon,
                                "extra-classes": ["embed-flex embed-items-center"]
                              }, null, 8, ["config"])) : oe("", !0),
                              G(p, {
                                icon: "chevron-down",
                                class: "embed-w-4 embed-h-4 embed-text-zinc-600 dark:embed-text-zinc-300"
                              })
                            ])
                          ];
                        }),
                        _: 1
                      }),
                      G(yn, {
                        "leave-active-class": "embed-transition embed-duration-100 embed-ease-in",
                        "leave-from-class": "embed-opacity-100",
                        "leave-to-class": "embed-opacity-0"
                      }, {
                        default: ie(() => [
                          G(v, { class: "embed-absolute embed-z-10 embed-mt-1 embed-w-48 embed-bg-white dark:embed-bg-zinc-900 embed-rounded-md embed-shadow-zinc-400 dark:embed-shadow-black embed-border embed-border-zinc-300 dark:embed-border-zinc-950 embed-shadow-lg embed-max-h-60 embed-overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:embed-hidden embed-py-1 embed-right-1 embed-mr-2" }, {
                            default: ie(() => [
                              (E(!0), C(H, null, pn(e.getRemainingFiatOptions(e.context.variant.payment_processors), (S) => (E(), xe(g, {
                                key: S,
                                value: S,
                                as: "template"
                              }, {
                                default: ie(({ active: Ie, selected: et }) => {
                                  var nt, b, y;
                                  return [
                                    _("li", {
                                      class: ye(["embed-cursor-pointer embed-select-none embed-relative embed-py-2 embed-px-4", [
                                        Ie ? "embed-bg-zinc-100 dark:embed-bg-zinc-800" : "",
                                        et ? "embed-text-black dark:embed-text-white" : "embed-text-zinc-700 dark:embed-text-zinc-300"
                                      ]])
                                    }, [
                                      _("div", m4, [
                                        (b = (nt = e.paymentMethods) == null ? void 0 : nt[S]) != null && b.icon ? (E(), xe(x, {
                                          key: 0,
                                          config: e.paymentMethods[S].icon,
                                          "extra-classes": ["embed-mr-3 embed-flex embed-items-center"]
                                        }, null, 8, ["config"])) : oe("", !0),
                                        _("span", p4, [
                                          ne(T((y = e.paymentMethods) == null ? void 0 : y[S].name) + " ", 1),
                                          e.getDiscount(S) ? (E(), C("div", b4, [
                                            e.isPositiveDiscount(S) ? (E(), C(H, { key: 0 }, [
                                              e.getDiscount(S).percentage && e.getDiscount(S).fixed ? (E(), C(H, { key: 0 }, [
                                                ne(T(Math.abs(e.getDiscount(S).percentage)) + "% + " + T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(S).fixed)) + " off ", 1)
                                              ], 64)) : e.getDiscount(S).percentage ? (E(), C(H, { key: 1 }, [
                                                ne(T(Math.abs(e.getDiscount(S).percentage)) + "% off ", 1)
                                              ], 64)) : e.getDiscount(S).fixed ? (E(), C(H, { key: 2 }, [
                                                ne(T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(S).fixed)) + " off ", 1)
                                              ], 64)) : oe("", !0)
                                            ], 64)) : (E(), C(H, { key: 1 }, [
                                              e.getDiscount(S).percentage && e.getDiscount(S).fixed ? (E(), C(H, { key: 0 }, [
                                                ne(T(Math.abs(e.getDiscount(S).percentage)) + "% + " + T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(S).fixed)) + " fee ", 1)
                                              ], 64)) : e.getDiscount(S).percentage ? (E(), C(H, { key: 1 }, [
                                                ne(T(Math.abs(e.getDiscount(S).percentage)) + "% fee ", 1)
                                              ], 64)) : e.getDiscount(S).fixed ? (E(), C(H, { key: 2 }, [
                                                ne(T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.getDiscount(S).fixed)) + " fee ", 1)
                                              ], 64)) : oe("", !0)
                                            ], 64))
                                          ])) : oe("", !0)
                                        ])
                                      ])
                                    ], 2)
                                  ];
                                }),
                                _: 2
                              }, 1032, ["value"]))), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])) : oe("", !0)
                ], 64))
              ])
            ])
          ];
        }),
        _: 1
      }, 8, ["modelValue"]),
      e.context.variant.additional_information.length > 0 ? (E(), C("div", h4, [
        G(A)
      ])) : oe("", !0),
      e.context.variant.vat_enabled ? (E(), C("div", v4, [
        G(u, {
          modelValue: e.checkout_information.country,
          "onUpdate:modelValue": t[9] || (t[9] = (L) => e.checkout_information.country = L),
          type: "select",
          label: "Country",
          name: "country",
          options: Object.entries(e.context.variant.available_vat_countries).map(([L, X]) => ({
            value: L,
            label: X.name
          })),
          class: "dark:embed-bg-zinc-950"
        }, null, 8, ["modelValue", "options"]),
        e.context.variant.vat_enabled && ((R = e.context.variant.available_vat_countries[e.checkout_information.country]) == null ? void 0 : R.vat) > 0 ? (E(), C("div", g4, [
          G(u, {
            id: "vat_id",
            modelValue: e.checkout_information.vat_id,
            "onUpdate:modelValue": t[10] || (t[10] = (L) => e.checkout_information.vat_id = L),
            "error-key": "vat_id",
            type: "text",
            label: "VAT ID",
            placeholder: "DE123456789",
            name: "vat_id",
            class: "dark:embed-bg-zinc-950"
          }, null, 8, ["modelValue"])
        ])) : oe("", !0)
      ])) : oe("", !0),
      _("div", y4, [
        _("div", null, [
          e.applyCoupon ? (E(), xe(yn, {
            key: 0,
            appear: "",
            "enter-from-class": "embed-opacity-0 embed-scale-0",
            "enter-to-class": "opacity-1 embed-scale-100",
            "enter-active-class": "embed-transition embed-transform origin",
            "leave-from-class": "opacity-1 embed-scale-100",
            "leave-to-class": "embed-opacity-0 embed-scale-0",
            "leave-active-class": "embed-transition embed-transform"
          }, {
            default: ie(() => [
              _("div", _4, [
                _("div", w4, [
                  _("button", {
                    class: "embed-absolute embed-right-1 embed--top-5 embed-text-zinc-500 hover:embed-text-zinc-800 dark:hover:embed-text-zinc-200 embed-text-xs embed-transition embed-duration-100 embed-ease-in-out",
                    onClick: t[11] || (t[11] = (L) => e.applyCoupon = !1)
                  }, " Cancel "),
                  _("div", x4, [
                    _("div", k4, [
                      G(u, {
                        modelValue: e.data.coupon,
                        "onUpdate:modelValue": t[12] || (t[12] = (L) => e.data.coupon = L),
                        type: "text",
                        name: "coupon-code",
                        placeholder: "Enter coupon code",
                        class: "dark:embed-bg-zinc-950 embed-rounded-r-none"
                      }, null, 8, ["modelValue"])
                    ]),
                    G(F, {
                      primary: "",
                      loading: e.isApplying || e.isLoading,
                      disabled: e.isApplying || e.isLoading,
                      type: "button",
                      class: "embed-relative embed-inline-flex embed-items-center embed-space-x-2 embed-rounded-l-none",
                      onClick: t[13] || (t[13] = (L) => e.debouncedApply("coupon"))
                    }, {
                      default: ie(() => [
                        _("span", null, T(e.isApplying || e.isLoading ? "Applying..." : "Apply"), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled"])
                  ])
                ])
              ])
            ]),
            _: 1
          })) : (E(), C("button", {
            key: 1,
            class: "embed-py-2 embed-text-zinc-500 hover:embed-text-zinc-800 dark:hover:embed-text-zinc-200 embed-text-sm embed-mx-auto embed-transition embed-duration-100 embed-ease-in-out",
            onClick: t[14] || (t[14] = (L) => e.applyCoupon = !0)
          }, " Add coupon ")),
          (Y = (J = (z = e.context.error) == null ? void 0 : z.errors) == null ? void 0 : J.coupon) != null && Y[0] ? (E(), C("p", {
            key: 2,
            class: "embed-mt-1 embed-ml-1.5 embed-text-left embed-text-xs embed-text-red-600 dark:embed-text-red embed-w-full",
            textContent: T((Z = (D = e.context.error) == null ? void 0 : D.errors) == null ? void 0 : Z.coupon[0])
          }, null, 8, E4)) : oe("", !0),
          e.variant.coupon && ((he = (Le = (be = e.context.error) == null ? void 0 : be.errors) == null ? void 0 : Le.coupon) == null ? void 0 : he[0]) === void 0 ? (E(), C("p", S4, " A " + T(e.variant.coupon) + " coupon has successfully been applied!", 1)) : oe("", !0)
        ])
      ]),
      e.variant.visibility == "PUBLIC" || e.variant.visibility == "HIDDEN" ? (E(), C("div", O4, [
        _("div", T4, [
          G(F, {
            loading: e.isLoading,
            disabled: e.isSoldOut || !e.isValidInput,
            style: Si({ "background-color": e.context.customization.theme }),
            class: "embed-w-full disabled:embed-bg-red-600 disabled:focus:embed-ring-zinc-500",
            primary: "",
            onClick: t[15] || (t[15] = (L) => e.send({
              type: e.context.variant.discord_request ? "CONNECT_DISCORD" : "FINAL_STEP"
            }))
          }, {
            default: ie(() => [
              ne(T(e.isSoldOut ? "Sold out" : "Buy now"), 1)
            ]),
            _: 1
          }, 8, ["loading", "disabled", "style"])
        ])
      ])) : oe("", !0)
    ]),
    G(j, {
      modelValue: e.isDescriptionOpen,
      "onUpdate:modelValue": t[16] || (t[16] = (L) => e.isDescriptionOpen = L),
      title: "Product Description"
    }, {
      default: ie(() => [
        _("div", {
          innerHTML: e.product.description
        }, null, 8, C4)
      ]),
      _: 1
    }, 8, ["modelValue"]),
    G(j, {
      modelValue: e.orMore,
      "onUpdate:modelValue": t[19] || (t[19] = (L) => e.orMore = L),
      title: "Add Extra Amount",
      description: "Optionally add an extra amount to this purchase"
    }, {
      default: ie(() => {
        var L, X, ge, De, Ee;
        return [
          _("div", A4, [
            _("div", M4, [
              _("div", N4, [
                _("div", I4, [
                  G(u, {
                    modelValue: e.data.extra,
                    "onUpdate:modelValue": t[17] || (t[17] = (Te) => e.data.extra = Te),
                    type: "number",
                    name: "extra",
                    id: "extra",
                    placeholder: "0.00",
                    class: "dark:embed-bg-zinc-950 embed-rounded-r-none embed-w-full"
                  }, null, 8, ["modelValue"])
                ]),
                G(F, {
                  primary: "",
                  class: "embed-rounded-l-none",
                  onClick: t[18] || (t[18] = (Te) => e.apply("extra"))
                }, {
                  default: ie(() => [
                    D4
                  ]),
                  _: 1
                })
              ]),
              (ge = (X = (L = e.context.error) == null ? void 0 : L.errors) == null ? void 0 : X.extra) != null && ge[0] ? (E(), C("p", {
                key: 0,
                class: "embed-ml-1.5 embed-text-left embed-text-sm embed-text-red-600 dark:embed-text-red embed-w-full",
                textContent: T((Ee = (De = e.context.error) == null ? void 0 : De.errors) == null ? void 0 : Ee.extra[0])
              }, null, 8, P4)) : oe("", !0)
            ])
          ])
        ];
      }),
      _: 1
    }, 8, ["modelValue"]),
    _("div", R4, [
      _("button", {
        onClick: t[20] || (t[20] = (L) => e.isDescriptionOpen = !0),
        class: "embed-flex embed-items-center embed-text-zinc-600 dark:embed-text-white embed-bg-zinc-200/60 dark:embed-bg-black embed-px-2 embed-py-1 embed-rounded-lg embed-text-sm embed-font-medium hover:embed-text-black dark:hover:embed-text-zinc-300 embed-transition-colors"
      }, " Description "),
      e.product.variants.length > 1 ? (E(), C("button", {
        key: 0,
        onClick: t[21] || (t[21] = (L) => e.send({ type: "PREVIOUS" })),
        class: "embed-flex embed-items-center embed-text-zinc-600 dark:embed-text-white embed-bg-zinc-200/60 dark:embed-bg-black embed-px-2 embed-py-1 embed-rounded-lg embed-text-sm embed-font-medium hover:embed-text-black dark:hover:embed-text-zinc-300 embed-transition-colors"
      }, " Variants ")) : oe("", !0),
      e.variant.humble ? (E(), C("div", L4, [
        _("button", {
          class: "embed-flex embed-items-center embed-text-zinc-600 dark:embed-text-white embed-bg-zinc-200/60 dark:embed-bg-black embed-px-2 embed-py-1 embed-rounded-lg embed-text-sm embed-font-medium hover:embed-text-black dark:hover:embed-text-zinc-300 embed-transition-colors",
          onClick: t[22] || (t[22] = (L) => e.orMore = !0)
        }, "Add more")
      ])) : oe("", !0)
    ])
  ]);
}
const F4 = /* @__PURE__ */ ht(vy, [["render", $4]]), z4 = pe({
  name: "ConnectDiscord",
  components: {
    Navigator: ga,
    DialogTitle: Tr,
    InputGroup: Tl,
    MyButton: va
  },
  setup() {
    const { context: e } = Rt();
    let t = W(e.value.discord_data.discord_username);
    Me.discord_token = e.value.discord_data.discord_token;
    const n = W(!0), r = () => {
      const o = window.open(e.value.discord_data.connect_url, "_blank", "width=400, height=600");
      (!o || o.closed || typeof o.closed > "u") && (n.value = !1);
    }, i = (o) => {
      var u;
      const a = o.data, s = /^((http[s]?|ftp):\/)?\/?([^:/\s]+)((\/\w+)*\/)([\w\-.]+[^#?\s]+)(.*)?(#[\w-]+)?$/, l = Ai.match(s), d = l[2] + "://" + l[3];
      o.origin === d && !br(a) && (u = e.value.discord_data) != null && u.connect_url && (sessionStorage.setItem("discord_token", a.discord_token), e.value.discord_data = {
        discord_id: a.discord_id,
        discord_token: a.discord_token,
        discord_username: a.discord_username,
        connect_url: e.value.discord_data.connect_url
      }, Me.discord_token = a.discord_token, t.value = e.value.discord_data.discord_username);
    };
    return window.addEventListener("message", i), {
      checkout_information: Me,
      context: e,
      linkDiscord: r,
      receiveData: i,
      popUpsEnabled: n,
      discordUsername: t
    };
  }
}), V4 = { class: "embed-flex embed-flex-col embed-px-4 embed-pt-5 embed-pb-4 sm:embed-p-6" }, j4 = ["textContent"], U4 = { class: "embed-mt-4" }, H4 = {
  key: 0,
  class: "embed-text-center embed-mt-2 embed-bg-white dark:embed-bg-black embed-rounded-2xl embed-px-4 embed-py-2"
}, B4 = /* @__PURE__ */ _("span", { class: "embed-font-medium embed-text-black dark:embed-text-white" }, "To continue your purchase, you'll want to connect your Discord account.", -1), G4 = [
  B4
], W4 = {
  key: 1,
  class: "embed-text-center embed-mt-2 embed-bg-white dark:embed-bg-black embed-rounded-2xl embed-px-4 embed-py-2"
}, Y4 = /* @__PURE__ */ _("span", { class: "embed-font-medium embed-text-black dark:embed-text-white" }, "Optionally connect your Discord to get exclusive accesss with your purchase.", -1), q4 = [
  Y4
], K4 = {
  key: 1,
  class: "embed-mt-5 embed-text-red-500"
}, X4 = /* @__PURE__ */ _("p", null, "Please, enable pop ups to proceed.", -1), J4 = [
  X4
], Z4 = { key: 2 };
function Q4(e, t, n, r, i, o) {
  const a = ae("DialogTitle"), s = ae("InputGroup"), l = ae("MyButton"), d = ae("Navigator");
  return E(), C("div", V4, [
    G(a, {
      as: "h1",
      class: "embed-font-bold embed-text-center embed-text-xl embed-text-black dark:embed-text-white"
    }, {
      default: ie(() => [
        ne("Connect discord")
      ]),
      _: 1
    }),
    e.discordUsername ? (E(), xe(s, {
      key: 0,
      class: "embed-text-center",
      type: "text",
      label: "",
      value: e.discordUsername,
      disabled: ""
    }, null, 8, ["value"])) : oe("", !0),
    G(l, {
      class: "embed-w-full embed-bg-[#5865F2] embed-text-white embed-mt-4",
      onClick: e.linkDiscord
    }, {
      default: ie(() => [
        _("span", {
          textContent: T(e.checkout_information.discord_id ? "Change discord account" : "Connect discord")
        }, null, 8, j4)
      ]),
      _: 1
    }, 8, ["onClick"]),
    _("div", U4, [
      e.context.variant.discord_required ? (E(), C("div", H4, G4)) : e.context.variant.discord_request ? (E(), C("div", W4, q4)) : oe("", !0)
    ]),
    e.popUpsEnabled ? oe("", !0) : (E(), C("div", K4, J4)),
    e.context.variant.discord_required && e.checkout_information.discord_token || !e.context.variant.discord_required ? (E(), C("div", Z4, [
      G(d)
    ])) : oe("", !0)
  ]);
}
const e3 = /* @__PURE__ */ ht(z4, [["render", Q4]]), t3 = pe({
  name: "FinalStep",
  components: {
    Navigator: ga,
    DialogTitle: Tr,
    DialogDescription: Fc
  },
  setup() {
    var s;
    const { context: e } = Rt(), t = W(!1), n = I(() => e.value.variant), r = I(() => e.value.product), i = I(() => !e.value.variant.payment_discounts || !Me.payment_method ? null : e.value.variant.payment_discounts[Me.payment_method.toLowerCase()]), o = I(() => i.value ? i.value.percentage < 0 || i.value.fixed < 0 : !1);
    let a = parseFloat(e.value.variant.total.replace(/[^\d.-]/g, "")) || 0;
    if (i.value) {
      if (i.value.percentage) {
        const l = parseFloat(i.value.percentage) / 100 * a;
        a -= l;
      }
      i.value.fixed && (a -= parseFloat(i.value.fixed));
    }
    if (e.value.variant.available_vat_countries && Me.country) {
      const l = (s = e.value.variant.available_vat_countries[Me.country]) == null ? void 0 : s.vat;
      if (l !== null && !isNaN(l)) {
        const d = parseFloat(l) / 100;
        a += a * d;
      }
    }
    return {
      checkout_information: Me,
      context: e,
      variant: n,
      product: r,
      terms_of_service: t,
      paymentDetails: i,
      hasNegativePayment: o,
      price: a
    };
  },
  methods: {
    capitalized(e) {
      const t = e[0].toUpperCase(), n = e.slice(1);
      return t + n;
    }
  }
}), n3 = { class: "embed-flex embed-flex-col embed-px-4 embed-pt-5 embed-pb-4 sm:embed-p-6" }, r3 = { class: "embed-p-3 embed-text-left embed-flex embed-flex-row embed-justify-between" }, i3 = { class: "embed-block embed-text-sm embed-font-medium embed-text-black dark:embed-text-white" }, o3 = ["textContent"], a3 = { class: "embed-space-y-2 embed-mx-2 embed-bg-zinc-50 dark:embed-bg-zinc-950 embed-py-3 embed-px-3 embed-rounded-2xl embed-shadow-inner dark:embed-shadow-black embed-text-sm embed-font-medium embed-text-black dark:embed-text-white" }, s3 = { class: "embed-text-left embed-flex embed-flex-row embed-justify-between" }, l3 = /* @__PURE__ */ _("p", { class: "embed-block embed-text-sm embed-font-normal embed-text-black dark:embed-text-white" }, "Subtotal", -1), d3 = ["textContent"], u3 = /* @__PURE__ */ _("p", { class: "embed-block embed-text-sm embed-font-normal embed-text-black dark:embed-text-white" }, "Bulk discount", -1), c3 = { class: "embed-block embed-text-sm embed-font-normal embed-text-black dark:embed-text-white" }, f3 = { class: "embed-inline-flex embed-items-center embed-space-x-2 embed-text-sm embed-font-normal embed-text-black dark:embed-text-white" }, m3 = /* @__PURE__ */ _("span", null, "Coupon", -1), p3 = { class: "embed-flex embed-rounded-lg embed-bg-zinc-100 embed-px-2 embed-text-sm embed-font-medium dark:embed-bg-black" }, b3 = { class: "embed-block embed-text-sm embed-font-normal embed-text-black dark:embed-text-white" }, h3 = { class: "embed-block embed-text-sm embed-font-normal embed-text-black dark:embed-text-white" }, v3 = { class: "embed-block embed-text-sm embed-font-normal embed-text-black dark:embed-text-white" }, g3 = { class: "embed-block embed-text-sm embed-font-normal embed-text-black dark:embed-text-white" }, y3 = { class: "embed-block embed-text-sm embed-font-normal embed-text-black dark:embed-text-white" }, _3 = { class: "embed-p-3 embed-flex embed-flex-row embed-justify-between" }, w3 = /* @__PURE__ */ _("p", { class: "embed-block embed-text-sm embed-font-medium embed-text-black dark:embed-text-white" }, "Total", -1), x3 = { class: "embed-block embed-text-sm embed-font-medium embed-text-black dark:embed-text-white embed-pr-2" }, k3 = { class: "embed-px-3 embed-mt-4 embed-relative embed-flex embed-items-center" }, E3 = /* @__PURE__ */ _("div", { class: "embed-min-w-0 embed-flex-1 embed-text-left embed-text-sm" }, [
  /* @__PURE__ */ _("label", {
    for: "terms_of_service",
    class: "embed-select-none embed-mb-0 embed-font-semibold embed-text-sm embed-text-zinc-800 dark:embed-text-neutral-300"
  }, "By making this purchase, you agree to the terms of service")
], -1), S3 = { class: "embed-ml-3 embed-flex embed-items-center embed-h-5" }, O3 = ["checked"];
function T3(e, t, n, r, i, o) {
  var d, u, f, c;
  const a = ae("DialogTitle"), s = ae("DialogDescription"), l = ae("Navigator");
  return E(), C("div", n3, [
    G(a, {
      as: "h1",
      class: "embed-font-bold embed-text-center embed-text-xl embed-text-black dark:embed-text-white"
    }, {
      default: ie(() => [
        ne("Order Overview")
      ]),
      _: 1
    }),
    G(s, {
      as: "p",
      class: "embed-mb-4 embed-font-normal embed-text-center embed-text-zinc-800 dark:embed-text-zinc-400 embed-text-xs"
    }, {
      default: ie(() => [
        ne("Finally, review your order details before checking out")
      ]),
      _: 1
    }),
    _("div", r3, [
      _("p", i3, T(e.context.quantity) + "x " + T(e.product.title), 1),
      _("p", {
        class: "embed-block embed-text-sm embed-font-medium embed-text-black dark:embed-text-white embed-pr-2",
        textContent: T(e.variant.price)
      }, null, 8, o3)
    ]),
    _("div", a3, [
      _("div", s3, [
        l3,
        _("p", {
          class: "embed-block embed-text-sm embed-font-normal embed-text-black dark:embed-text-white",
          textContent: T(e.variant.price)
        }, null, 8, d3)
      ]),
      _("div", {
        class: ye(["embed-text-left embed-flex embed-flex-row embed-justify-between", e.context.variant.bulk_discount == null ? "embed-hidden" : ""])
      }, [
        u3,
        _("p", c3, "-" + T(e.context.variant.bulk_discount), 1)
      ], 2),
      _("div", {
        class: ye(["embed-text-left embed-flex embed-flex-row embed-justify-between", e.context.coupon == null ? "embed-hidden" : ""])
      }, [
        _("p", f3, [
          m3,
          _("span", p3, T(e.context.coupon), 1)
        ]),
        _("p", b3, "-" + T(e.context.variant.coupon), 1)
      ], 2),
      _("div", {
        class: ye(["embed-text-left embed-flex embed-flex-row embed-justify-between", !e.context.variant.payment_discounts || e.context.variant.payment_discounts[e.checkout_information.payment_method.toLowerCase()] == null ? "embed-hidden" : ""])
      }, [
        _("p", h3, "Payment " + T(e.hasNegativePayment ? "fee" : "discount"), 1),
        _("p", v3, [
          (d = e.paymentDetails) != null && d.percentage && ((u = e.paymentDetails) != null && u.fixed) ? (E(), C(H, { key: 0 }, [
            ne(T(Math.abs(e.paymentDetails.percentage)) + "% + " + T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.paymentDetails.fixed)), 1)
          ], 64)) : (f = e.paymentDetails) != null && f.percentage ? (E(), C(H, { key: 1 }, [
            ne(T(Math.abs(e.paymentDetails.percentage)) + "% ", 1)
          ], 64)) : (c = e.paymentDetails) != null && c.fixed ? (E(), C(H, { key: 2 }, [
            ne(T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(Math.abs(e.paymentDetails.fixed)), 1)
          ], 64)) : oe("", !0)
        ])
      ], 2),
      _("div", {
        class: ye(["embed-text-left embed-flex embed-flex-row embed-justify-between", !e.checkout_information.country || e.context.variant.available_vat_countries[e.checkout_information.country].vat == 0 ? "embed-hidden" : ""])
      }, [
        _("p", g3, "VAT (" + T(e.checkout_information.country && e.context.variant.available_vat_countries[e.checkout_information.country].name) + ")", 1),
        _("p", y3, "+" + T(e.checkout_information.country && e.context.variant.available_vat_countries[e.checkout_information.country].vat) + "%", 1)
      ], 2)
    ]),
    _("div", _3, [
      w3,
      _("p", x3, T(e.context.variant.total.replace(/[^\D]+.*/, "")) + T(!isNaN(e.price) && isFinite(e.price) ? e.price.toFixed(2) : e.context.variant.total.replace(/[^\d]+.*/, "")), 1)
    ]),
    _("div", k3, [
      E3,
      _("div", S3, [
        Mp(_("input", {
          id: "terms_of_service",
          "onUpdate:modelValue": t[0] || (t[0] = (m) => e.terms_of_service = m),
          checked: e.terms_of_service == !0,
          required: "",
          name: "terms_of_service",
          type: "checkbox",
          class: "embed-p-2 embed-appearance-none embed-rounded focus:embed-ring-offset-0 embed-bg-white checked:embed-bg-black dark:embed-bg-zinc-800 dark:focus:embed-bg-zinc-950 embed-text-black dark:embed-text-white embed-placeholder-neutral-500 focus:embed-placeholder-neutral-800 dark:embed-placeholder-neutral-500 dark:focus:embed-placeholder-neutral-400 embed-border embed-border-zinc-100 hover:embed-border-zinc-200 focus:embed-border-zinc-400 dark:embed-border-zinc-800 dark:hover:embed-border-zinc-950 dark:focus:embed-border-zinc-800 focus:embed-ring-0 embed-shadow-inner embed-shadow-zinc-400 hover:embed-shadow-zinc-500 focus:embed-shadow-zinc-200 dark:embed-shadow-neutral-800 dark:hover:embed-shadow-neutral-900 dark:focus:embed-shadow-neutral-800 embed-transition embed-duration-200 embed-ease-in-out"
        }, null, 8, O3), [
          [q1, e.terms_of_service]
        ])
      ])
    ]),
    G(l, {
      next: { type: "CHECKOUT" },
      text: "Pay Now",
      "loading-state": "checkout.step.final_step.checkout_product",
      class: ye(e.terms_of_service == !1 ? "embed-hidden" : "")
    }, null, 8, ["class"])
  ]);
}
const C3 = /* @__PURE__ */ ht(t3, [["render", T3]]), A3 = pe({
  name: "DialogMessage",
  components: {
    DialogTitle: Tr
  },
  props: {
    title: {
      type: String,
      required: !1,
      default: null
    },
    message: {
      type: String,
      required: !1,
      default: null
    }
  }
}), M3 = { class: "embed-flex embed-flex-col embed-items-center embed-justify-evenly embed-h-4/6 embed-w-full embed-p-6" }, N3 = { class: "embed-flex embed-flex-col embed-items-center" }, I3 = { class: "embed-bg-zinc-100 embed-p-4 embed-rounded-lg embed-w-11/12 embed-mt-4 dark:embed-bg-zinc-800 embed-text-black dark:embed-text-white embed-shadow-inner dark:embed-shadow-black" };
function D3(e, t, n, r, i, o) {
  const a = ae("DialogTitle");
  return E(), C("div", M3, [
    _("div", N3, [
      fi(e.$slots, "default"),
      G(a, {
        as: "h2",
        class: "embed-mb-0 embed-mt-3 embed-font-bold embed-text-2xl embed-text-black dark:embed-text-white"
      }, {
        default: ie(() => [
          ne(T(e.title), 1)
        ]),
        _: 1
      })
    ]),
    _("div", I3, [
      fi(e.$slots, "action", {}, () => [
        _("p", null, T(e.message), 1)
      ])
    ])
  ]);
}
const Cl = /* @__PURE__ */ ht(A3, [["render", D3]]), P3 = pe({
  name: "SuccessDialog",
  components: {
    DialogMessage: Cl,
    CheckCircleIcon: $f
  },
  setup: function() {
    const { context: e } = Rt();
    return {
      context: e
    };
  }
}), R3 = ["href"];
function L3(e, t, n, r, i, o) {
  const a = ae("CheckCircleIcon"), s = ae("DialogMessage");
  return E(), xe(s, {
    class: "embed-bg-white embed-text-center dark:embed-bg-zinc-900 embed-rounded-2xl embed-shadow-xl",
    title: "Order Created"
  }, {
    action: ie(() => [
      _("p", null, [
        ne(" Your order has been created! If the payment gateway did not open by itself, "),
        _("a", {
          href: e.context.order,
          class: "embed-font-bold embed-underline embed-decoration-zinc-800 dark:embed-decoration-zinc-50 hover:embed-decoration-wavy",
          target: "_blank"
        }, "click here to open it.", 8, R3)
      ])
    ]),
    default: ie(() => [
      G(a, { class: "embed-h-24 embed-w-24 embed-text-green-600" })
    ]),
    _: 1
  });
}
const $3 = /* @__PURE__ */ ht(P3, [["render", L3]]), F3 = pe({
  name: "HeadsUpDialog",
  components: {
    DialogMessage: Cl
  }
}), z3 = /* @__PURE__ */ _("p", { class: "embed-mb-4" }, "Once paid, the order will instantly be sent to your entered email. That's it!", -1), V3 = /* @__PURE__ */ _("p", { class: "embed-text-xs" }, "Note: If you paid with PayPal, we will send the product to your PayPal email for security reasons.", -1);
function j3(e, t, n, r, i, o) {
  const a = ae("DialogMessage");
  return E(), xe(a, {
    class: "embed-bg-white embed-text-center dark:embed-bg-zinc-900 embed-rounded-2xl embed-shadow-xl",
    title: "What's Next?"
  }, {
    action: ie(() => [
      z3,
      V3
    ]),
    _: 1
  });
}
const U3 = /* @__PURE__ */ ht(F3, [["render", j3]]);
function H3(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return Object.assign(t, r), t;
  }, {});
}
const B3 = pe({
  name: "EmbedCheckout",
  components: {
    MyDialog: jb,
    DialogPanel: Hb,
    DialogOverlay: Ub,
    DialogTitle: Tr,
    TransitionChild: rf,
    TransitionRoot: of,
    ExclamationCircleIcon: Lf,
    VariantSelection: ev,
    Overview: F4,
    ConnectDiscord: e3,
    FinalStep: C3,
    Navigator: ga,
    DialogMessage: Cl,
    CheckCircleIcon: $f,
    SuccessDialog: $3,
    HeadsUpDialog: U3
  },
  setup: function() {
    const { context: e, state: t, send: n } = Rt(), r = I(() => {
      var a, s, l, d;
      return (d = (l = (s = (a = t.value.context) == null ? void 0 : a.error) == null ? void 0 : s.errors) == null ? void 0 : l.quantity) == null ? void 0 : d.some(
        (u) => u === "This product has insufficient stock to fulfill the purchase."
      );
    }), i = I(() => {
      var a, s;
      return r.value ? "This product is currently out of stock." : ((s = (a = t.value.context) == null ? void 0 : a.error) == null ? void 0 : s.message) || "An unexpected error occurred";
    });
    return Td(), window.setupCheckoutButtons = Td, {
      stepComponent: I(() => t.value.matches("checkout") ? H3(t.value.meta).component : null),
      context: e,
      state: t,
      send: n,
      isOutOfStock: r,
      errorMessage: i
    };
  }
}), G3 = {
  id: "embed-modal",
  class: "embed-fixed embed-z-10 embed-inset-0 embed-overflow-auto"
}, W3 = /* @__PURE__ */ _("span", {
  class: "embed-hidden sm:embed-inline-block sm:embed-align-middle sm:embed-h-screen",
  "aria-hidden": "true"
}, "​", -1), Y3 = { class: "embed-relative embed-z-50 embed-max-w-xl embed-w-full embed-inline-block embed-align-middle embed-px-4" }, q3 = {
  key: 0,
  class: "embed-bg-white dark:embed-bg-zinc-900 embed-rounded-lg embed-shadow-zinc-400 embed-shadow-md dark:embed-shadow-black embed-overflow-hidden embed-border-zinc-300 dark:embed-border-black embed-border embed-p-6"
}, K3 = { class: "embed-space-y-12" }, X3 = /* @__PURE__ */ _("div", { class: "embed-h-10 embed-w-3/4 embed-mx-auto embed-bg-zinc-200 dark:embed-bg-zinc-800 embed-rounded-md embed-animate-pulse embed-mb-8" }, null, -1), J3 = { class: "embed-space-y-8" }, Z3 = /* @__PURE__ */ _("div", { class: "embed-flex embed-items-stretch embed-min-h-24" }, [
  /* @__PURE__ */ _("div", { class: "embed-h-24 embed-w-28 embed-min-h-[6rem] embed-flex-shrink-0 embed-rounded-lg embed-bg-zinc-200 dark:embed-bg-zinc-800 embed-animate-pulse embed-mr-4" }),
  /* @__PURE__ */ _("div", { class: "embed-flex embed-flex-col embed-text-left embed-w-full embed-justify-between" }, [
    /* @__PURE__ */ _("div", { class: "embed-space-y-2" }, [
      /* @__PURE__ */ _("div", { class: "embed-h-6 embed-w-3/4 embed-bg-zinc-200 dark:embed-bg-zinc-800 embed-rounded embed-animate-pulse" }),
      /* @__PURE__ */ _("div", { class: "embed-h-4 embed-w-full embed-bg-zinc-200 dark:embed-bg-zinc-800 embed-rounded embed-animate-pulse" }),
      /* @__PURE__ */ _("div", { class: "embed-h-5 embed-w-24 embed-bg-zinc-200 dark:embed-bg-zinc-800 embed-rounded embed-animate-pulse" })
    ]),
    /* @__PURE__ */ _("div", { class: "embed-flex embed-flex-row embed-items-center embed-justify-between embed-mt-2" }, [
      /* @__PURE__ */ _("div", { class: "embed-h-8 embed-w-20 embed-bg-zinc-200 dark:embed-bg-zinc-800 embed-rounded embed-animate-pulse" }),
      /* @__PURE__ */ _("div", { class: "embed-h-4 embed-w-24 embed-bg-zinc-200 dark:embed-bg-zinc-800 embed-rounded embed-animate-pulse" })
    ])
  ])
], -1), Q3 = /* @__PURE__ */ _("div", { class: "embed-space-y-2" }, [
  /* @__PURE__ */ _("div", { class: "embed-h-6 embed-w-1/4 embed-bg-zinc-200 dark:embed-bg-zinc-800 embed-rounded embed-animate-pulse" }),
  /* @__PURE__ */ _("div", { class: "embed-h-8 embed-w-full embed-bg-zinc-200 dark:embed-bg-zinc-800 embed-rounded embed-animate-pulse" })
], -1), e6 = { class: "embed-space-y-2" }, t6 = /* @__PURE__ */ _("div", { class: "embed-h-6 embed-w-1/4 embed-bg-zinc-200 dark:embed-bg-zinc-800 embed-rounded embed-animate-pulse" }, null, -1), n6 = { class: "embed-flex embed-flex-wrap embed-gap-3 embed-justify-center" }, r6 = /* @__PURE__ */ _("div", { class: "embed-flex embed-flex-col embed-items-center embed-gap-2" }, [
  /* @__PURE__ */ _("div", { class: "embed-h-8 embed-w-8 embed-bg-zinc-200 dark:embed-bg-zinc-800 embed-rounded-full" }),
  /* @__PURE__ */ _("div", { class: "embed-h-4 embed-w-16 embed-bg-zinc-200 dark:embed-bg-zinc-800 embed-rounded" }),
  /* @__PURE__ */ _("div", { class: "embed-h-3 embed-w-20 embed-bg-zinc-200 dark:embed-bg-zinc-800 embed-rounded" })
], -1), i6 = [
  r6
], o6 = /* @__PURE__ */ _("div", { class: "embed-h-4 embed-w-2/6 embed-mx-auto embed-bg-zinc-200 dark:embed-bg-zinc-800 embed-rounded embed-animate-pulse" }, null, -1), a6 = /* @__PURE__ */ _("div", { class: "embed-h-10 embed-w-full embed-bg-zinc-200 dark:embed-bg-zinc-800 embed-rounded-md embed-animate-pulse embed-mt-6" }, null, -1), s6 = {
  key: 1,
  class: "embed-space-y-4"
}, l6 = {
  key: 1,
  class: "embed-space-y-6"
};
function d6(e, t, n, r, i, o) {
  const a = ae("DialogOverlay"), s = ae("TransitionChild"), l = ae("SuccessDialog"), d = ae("HeadsUpDialog"), u = ae("ExclamationCircleIcon"), f = ae("DialogMessage"), c = ae("DialogPanel"), m = ae("MyDialog"), p = ae("TransitionRoot");
  return E(), xe(p, {
    as: "template",
    show: !e.state.matches("closed")
  }, {
    default: ie(() => [
      G(m, {
        as: "div",
        onClose: t[0] || (t[0] = (h) => e.send("CLOSE"))
      }, {
        default: ie(() => [
          G(c, {
            class: "embed-outline-none",
            tabindex: "0"
          }, {
            default: ie(() => [
              _("div", G3, [
                _("div", {
                  class: ye(["embed-flex embed-items-center embed-justify-center embed-min-h-screen embed-text-center", { "embed-dark": e.context.customization.darkMode }])
                }, [
                  G(s, {
                    as: "template",
                    enter: "embed-ease-out embed-duration-300",
                    "enter-from": "embed-opacity-0",
                    "enter-to": "embed-opacity-100",
                    leave: "embed-ease-in embed-duration-200",
                    "leave-from": "embed-opacity-100",
                    "leave-to": "embed-opacity-0"
                  }, {
                    default: ie(() => [
                      G(a, { class: "embed-fixed embed-inset-0 embed-bg-white dark:embed-bg-black embed-bg-opacity-90 dark:embed-bg-opacity-50 embed-transition-opacity" })
                    ]),
                    _: 1
                  }),
                  W3,
                  G(s, {
                    as: "template",
                    enter: "embed-ease-out embed-duration-300",
                    "enter-from": "embed-opacity-0 embed-translate-y-4 sm:embed-translate-y-0 sm:embed-scale-95",
                    "enter-to": "embed-opacity-100 embed-translate-y-0 sm:embed-scale-100",
                    leave: "embed-ease-in embed-duration-200",
                    "leave-from": "embed-opacity-100 embed-translate-y-0 sm:embed-scale-100",
                    "leave-to": "embed-opacity-0 embed-translate-y-4 sm:embed-translate-y-0 sm:embed-scale-95"
                  }, {
                    default: ie(() => [
                      _("div", Y3, [
                        e.state.hasTag("loading") ? (E(), C("div", q3, [
                          _("div", K3, [
                            X3,
                            _("div", J3, [
                              Z3,
                              Q3,
                              _("div", e6, [
                                t6,
                                _("div", n6, [
                                  (E(), C(H, null, pn(3, (h) => _("div", {
                                    key: h,
                                    class: "embed-flex embed-flex-col embed-border-2 embed-border-zinc-200 dark:embed-border-zinc-800 embed-w-28 embed-min-h-[6rem] embed-rounded-lg embed-px-3 embed-py-2 embed-animate-pulse"
                                  }, i6)), 64))
                                ])
                              ]),
                              o6
                            ]),
                            a6
                          ])
                        ])) : (E(), C("div", s6, [
                          e.stepComponent ? (E(), xe(yn, {
                            key: 0,
                            "enter-active-class": "embed-duration-500 embed-ease-out",
                            "enter-from-class": "embed-opacity-0 embed--translate-x-full md:embed-translate-x-full",
                            "enter-to-class": "embed-opacity-100 embed-translate-x-0",
                            "leave-active-class": "embed-duration-500 embed-ease-out",
                            "leave-from-class": "embed-opacity-100 embed-translate-x-0",
                            "leave-to-class": "embed-opacity-0 embed--translate-x-full",
                            mode: "out-in"
                          }, {
                            default: ie(() => [
                              (E(), xe(Bp(e.stepComponent), { class: "embed-bg-white embed-text-center dark:embed-bg-zinc-900 embed-rounded-lg embed-shadow-zinc-400 embed-shadow-md dark:embed-shadow-black embed-overflow-hidden embed-border-zinc-300 dark:embed-border-black embed-border" }))
                            ]),
                            _: 1
                          })) : e.state.matches("invoice_processed") ? (E(), C("div", l6, [
                            G(l),
                            G(d)
                          ])) : e.state.matches("error") ? (E(), xe(f, {
                            key: 2,
                            class: "embed-bg-white embed-text-center dark:embed-bg-zinc-900 embed-rounded-lg embed-shadow-zinc-400 embed-shadow-md dark:embed-shadow-black embed-overflow-hidden embed-border-zinc-300 dark:embed-border-black embed-border",
                            title: e.isOutOfStock ? "Out of Stock" : "Whoops",
                            message: e.errorMessage
                          }, {
                            default: ie(() => [
                              G(u, { class: "embed-h-24 embed-w-24 embed-text-zinc-600" })
                            ]),
                            _: 1
                          }, 8, ["title", "message"])) : oe("", !0)
                        ]))
                      ])
                    ]),
                    _: 1
                  })
                ], 2)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["show"]);
}
const u6 = /* @__PURE__ */ ht(B3, [["render", d6]]);
const Pi = Z1(u6);
Pi.component("Listbox", Uc);
Pi.component("ListboxButton", Hc);
Pi.component("ListboxOptions", Bc);
Pi.component("ListboxOption", Gc);
const wm = document.createElement("div");
document.body.append(wm);
Pi.mount(wm);
