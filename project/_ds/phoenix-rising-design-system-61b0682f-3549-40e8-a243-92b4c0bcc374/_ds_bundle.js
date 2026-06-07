/* @ds-bundle: {"format":3,"namespace":"PhoenixRisingDesignSystem_61b068","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"PricingTier","sourcePath":"components/marketing/PricingTier.jsx"},{"name":"TrustBadge","sourcePath":"components/marketing/TrustBadge.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"0de166155c3c","components/core/Button.jsx":"43608c76b0d7","components/core/Card.jsx":"6c259e57b1e0","components/core/Eyebrow.jsx":"4b6abd336256","components/forms/Input.jsx":"fab5fb053bae","components/forms/Select.jsx":"d1b3b9acae7f","components/marketing/PricingTier.jsx":"4b94c68ab4c1","components/marketing/TrustBadge.jsx":"d533a149b49d","ui_kits/marketing-site/QuoteFlow.jsx":"b3771b5bfb26","ui_kits/marketing-site/icons.jsx":"c5609054063c","ui_kits/marketing-site/sections.jsx":"87314528efbd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PhoenixRisingDesignSystem_61b068 = window.PhoenixRisingDesignSystem_61b068 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useBadgeStyles() {
  React.useEffect(() => {
    if (document.getElementById("pr-badge-styles")) return;
    const el = document.createElement("style");
    el.id = "pr-badge-styles";
    el.textContent = `
      .pr-badge {
        display: inline-flex; align-items: center; gap: 6px;
        font-family: var(--font-display); font-weight: 600;
        font-size: 12px; letter-spacing: .1em; text-transform: uppercase;
        padding: 5px 11px; border-radius: var(--r-sm);
        border: 1px solid transparent; line-height: 1; white-space: nowrap;
      }
      .pr-badge svg { width: 13px; height: 13px; display: block; }
      .pr-badge--neutral { background: var(--chrome-100); color: var(--slate-ink); border-color: var(--chrome-300); }
      .pr-badge--primary { background: rgba(20,87,166,.10); color: var(--phoenix-blue-deep); border-color: rgba(20,87,166,.22); }
      .pr-badge--success { background: rgba(30,142,90,.12); color: var(--success); border-color: rgba(30,142,90,.28); }
      .pr-badge--warning { background: rgba(196,90,30,.12); color: var(--ember); border-color: rgba(196,90,30,.28); }
      .pr-badge--error   { background: rgba(192,57,43,.12); color: var(--error); border-color: rgba(192,57,43,.28); }
      /* "Most Popular" style — slate text with a thin ember rule cue */
      .pr-badge--ember { background: var(--white); color: var(--slate-ink); border-color: var(--ember); }
    `;
    document.head.appendChild(el);
  }, []);
}
function Badge({
  tone = "neutral",
  icon = null,
  className = "",
  children,
  ...rest
}) {
  useBadgeStyles();
  const cls = ["pr-badge", `pr-badge--${tone}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject the component's stylesheet once per document. */
function useButtonStyles() {
  React.useEffect(() => {
    if (document.getElementById("pr-button-styles")) return;
    const el = document.createElement("style");
    el.id = "pr-button-styles";
    el.textContent = `
      .pr-btn {
        --_pad-y: 12px; --_pad-x: 22px; --_fs: 15px;
        display: inline-flex; align-items: center; justify-content: center; gap: 9px;
        font-family: var(--font-display); font-weight: 600;
        font-size: var(--_fs); letter-spacing: .04em; text-transform: uppercase;
        padding: var(--_pad-y) var(--_pad-x);
        border-radius: var(--r-md); border: 1px solid transparent;
        cursor: pointer; text-decoration: none; line-height: 1;
        transition: background-color .18s ease, border-color .18s ease, color .18s ease,
                    box-shadow .18s ease, transform .18s ease;
        white-space: nowrap; user-select: none;
      }
      .pr-btn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
      .pr-btn[disabled], .pr-btn[aria-disabled="true"] { opacity: .5; cursor: not-allowed; pointer-events: none; }
      .pr-btn--sm { --_pad-y: 8px; --_pad-x: 16px; --_fs: 13px; }
      .pr-btn--lg { --_pad-y: 16px; --_pad-x: 30px; --_fs: 17px; }

      /* Primary: solid phoenix-blue, white text, chrome top-highlight */
      .pr-btn--primary {
        background: var(--phoenix-blue); color: var(--white);
        box-shadow: var(--edge-highlight), var(--shadow-sm);
      }
      .pr-btn--primary:hover { background: var(--phoenix-blue-deep); transform: translateY(-1px); }
      .pr-btn--primary:active { transform: translateY(0); background: var(--phoenix-blue-deep); }

      /* Secondary: chrome outline, slate-ink text */
      .pr-btn--secondary {
        background: var(--white); color: var(--slate-ink); border-color: var(--chrome-300);
        box-shadow: var(--edge-highlight);
      }
      .pr-btn--secondary:hover { border-color: var(--chrome-500); transform: translateY(-1px); }
      .pr-btn--secondary:active { transform: translateY(0); }

      /* Tertiary: text link, phoenix-blue, ember underline on hover */
      .pr-btn--tertiary {
        background: transparent; color: var(--phoenix-blue);
        padding-left: 6px; padding-right: 6px; text-transform: none; letter-spacing: 0;
        font-family: var(--font-body); border-radius: var(--r-sm);
      }
      .pr-btn--tertiary .pr-btn__label { box-shadow: inset 0 -1px 0 transparent; transition: box-shadow .18s ease; }
      .pr-btn--tertiary:hover { color: var(--phoenix-blue-deep); }
      .pr-btn--tertiary:hover .pr-btn__label { box-shadow: inset 0 -2px 0 var(--ember); }

      .pr-btn--block { width: 100%; }
      .pr-btn__icon { display: inline-flex; }
      .pr-btn__icon svg { width: 1.05em; height: 1.05em; display: block; }
    `;
    document.head.appendChild(el);
  }, []);
}
function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  leftIcon = null,
  rightIcon = null,
  href,
  className = "",
  children,
  ...rest
}) {
  useButtonStyles();
  const cls = ["pr-btn", `pr-btn--${variant}`, size !== "md" ? `pr-btn--${size}` : "", fullWidth ? "pr-btn--block" : "", className].filter(Boolean).join(" ");
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, leftIcon ? /*#__PURE__*/React.createElement("span", {
    className: "pr-btn__icon"
  }, leftIcon) : null, /*#__PURE__*/React.createElement("span", {
    className: "pr-btn__label"
  }, children), rightIcon ? /*#__PURE__*/React.createElement("span", {
    className: "pr-btn__icon"
  }, rightIcon) : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useCardStyles() {
  React.useEffect(() => {
    if (document.getElementById("pr-card-styles")) return;
    const el = document.createElement("style");
    el.id = "pr-card-styles";
    el.textContent = `
      .pr-card {
        position: relative; border-radius: var(--r-lg);
        background: var(--white); border: 1px solid var(--chrome-300);
        box-shadow: var(--shadow-md), var(--edge-highlight);
        padding: var(--space-6);
        transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
      }
      .pr-card--glass { background: var(--sky-glass); background-image: var(--glass-gradient); }
      .pr-card--flat { box-shadow: none; }
      .pr-card--interactive { cursor: pointer; }
      .pr-card--interactive:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg), var(--edge-highlight); border-color: var(--chrome-500); }
      /* Featured: single thin ember rule across the top */
      .pr-card--featured { overflow: hidden; }
      .pr-card--featured::before {
        content: ""; position: absolute; top: 0; left: 0; right: 0; height: 2px;
        background: var(--ember);
      }
    `;
    document.head.appendChild(el);
  }, []);
}
function Card({
  surface = "white",
  featured = false,
  interactive = false,
  flat = false,
  className = "",
  style,
  children,
  ...rest
}) {
  useCardStyles();
  const cls = ["pr-card", surface === "glass" ? "pr-card--glass" : "", featured ? "pr-card--featured" : "", interactive ? "pr-card--interactive" : "", flat ? "pr-card--flat" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useEyebrowStyles() {
  React.useEffect(() => {
    if (document.getElementById("pr-eyebrow-styles")) return;
    const el = document.createElement("style");
    el.id = "pr-eyebrow-styles";
    el.textContent = `
      .pr-eyebrow {
        display: inline-flex; align-items: center; gap: 12px;
        font-family: var(--font-body); font-weight: 600;
        font-size: 13px; letter-spacing: .18em; text-transform: uppercase;
        color: var(--cool-gray);
      }
      .pr-eyebrow__rule { display: block; height: 1px; width: 32px; background: var(--chrome-300); }
      .pr-eyebrow--ember .pr-eyebrow__rule { background: var(--ember); }
      .pr-eyebrow--center { justify-content: center; }
    `;
    document.head.appendChild(el);
  }, []);
}
function Eyebrow({
  rule = "chrome",
  align = "left",
  className = "",
  children,
  ...rest
}) {
  useEyebrowStyles();
  const cls = ["pr-eyebrow", rule === "ember" ? "pr-eyebrow--ember" : "", align === "center" ? "pr-eyebrow--center" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), rule !== "none" ? /*#__PURE__*/React.createElement("span", {
    className: "pr-eyebrow__rule"
  }) : null, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useInputStyles() {
  React.useEffect(() => {
    if (document.getElementById("pr-input-styles")) return;
    const el = document.createElement("style");
    el.id = "pr-input-styles";
    el.textContent = `
      .pr-field { display: flex; flex-direction: column; gap: 7px; }
      .pr-field__label {
        font-family: var(--font-display); font-weight: 600; font-size: 12px;
        letter-spacing: .12em; text-transform: uppercase; color: var(--slate-ink);
      }
      .pr-field__req { color: var(--ember); margin-left: 3px; }
      .pr-input {
        font-family: var(--font-body); font-size: 16px; color: var(--slate-ink);
        background: var(--white); border: 1px solid var(--chrome-300);
        border-radius: var(--r-md); padding: 13px 15px; width: 100%;
        transition: border-color .16s ease, box-shadow .16s ease; line-height: 1.3;
      }
      .pr-input::placeholder { color: var(--cool-gray); }
      .pr-input:hover { border-color: var(--chrome-500); }
      .pr-input:focus { outline: none; border-color: var(--phoenix-blue); box-shadow: var(--focus-ring); }
      .pr-input--invalid { border-color: var(--error); }
      .pr-input--invalid:focus { box-shadow: 0 0 0 3px rgba(192,57,43,.25); }
      .pr-field__msg { font-size: 13px; color: var(--cool-gray); }
      .pr-field__msg--error { color: var(--error); }
      .pr-input[disabled] { background: var(--chrome-100); color: var(--cool-gray); cursor: not-allowed; }
    `;
    document.head.appendChild(el);
  }, []);
}
function Input({
  label,
  required = false,
  error,
  hint,
  id,
  className = "",
  ...rest
}) {
  useInputStyles();
  const inputId = id || React.useId();
  const invalid = Boolean(error);
  return /*#__PURE__*/React.createElement("div", {
    className: "pr-field"
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "pr-field__label",
    htmlFor: inputId
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "pr-field__req"
  }, "*") : null) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: ["pr-input", invalid ? "pr-input--invalid" : "", className].filter(Boolean).join(" "),
    "aria-invalid": invalid || undefined
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "pr-field__msg pr-field__msg--error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "pr-field__msg"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useSelectStyles() {
  React.useEffect(() => {
    if (document.getElementById("pr-select-styles")) return;
    const el = document.createElement("style");
    el.id = "pr-select-styles";
    el.textContent = `
      .pr-field { display: flex; flex-direction: column; gap: 7px; }
      .pr-field__label { font-family: var(--font-display); font-weight: 600; font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: var(--slate-ink); }
      .pr-field__req { color: var(--ember); margin-left: 3px; }
      .pr-field__msg { font-size: 13px; color: var(--cool-gray); }
      .pr-field__msg--error { color: var(--error); }
      .pr-select-wrap { position: relative; display: block; }
      .pr-select {
        appearance: none; -webkit-appearance: none;
        font-family: var(--font-body); font-size: 16px; color: var(--slate-ink);
        background: var(--white); border: 1px solid var(--chrome-300);
        border-radius: var(--r-md); padding: 13px 42px 13px 15px; width: 100%;
        transition: border-color .16s ease, box-shadow .16s ease; line-height: 1.3; cursor: pointer;
      }
      .pr-select:hover { border-color: var(--chrome-500); }
      .pr-select:focus { outline: none; border-color: var(--phoenix-blue); box-shadow: var(--focus-ring); }
      .pr-select[disabled] { background: var(--chrome-100); color: var(--cool-gray); cursor: not-allowed; }
      .pr-select-wrap__chev {
        position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
        width: 16px; height: 16px; pointer-events: none; color: var(--cool-gray);
      }
    `;
    document.head.appendChild(el);
  }, []);
}
function Select({
  label,
  required = false,
  error,
  hint,
  id,
  options = [],
  placeholder,
  className = "",
  children,
  ...rest
}) {
  useSelectStyles();
  const selectId = id || React.useId();
  const invalid = Boolean(error);
  return /*#__PURE__*/React.createElement("div", {
    className: "pr-field"
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "pr-field__label",
    htmlFor: selectId
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "pr-field__req"
  }, "*") : null) : null, /*#__PURE__*/React.createElement("span", {
    className: "pr-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    className: ["pr-select", className].filter(Boolean).join(" "),
    "aria-invalid": invalid || undefined
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, children || options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const labelText = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, labelText);
  })), /*#__PURE__*/React.createElement("svg", {
    className: "pr-select-wrap__chev",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), error ? /*#__PURE__*/React.createElement("span", {
    className: "pr-field__msg pr-field__msg--error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "pr-field__msg"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PricingTier.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function usePricingStyles() {
  React.useEffect(() => {
    if (document.getElementById("pr-pricing-styles")) return;
    const el = document.createElement("style");
    el.id = "pr-pricing-styles";
    el.textContent = `
      .pr-tier {
        position: relative; display: flex; flex-direction: column;
        background: var(--white); border: 1px solid var(--chrome-300);
        border-radius: var(--r-lg); padding: var(--space-6);
        box-shadow: var(--shadow-md), var(--edge-highlight);
        transition: transform .2s ease, box-shadow .2s ease;
      }
      .pr-tier--featured { overflow: hidden; }
      .pr-tier--featured::before { content:""; position:absolute; top:0; left:0; right:0; height:2px; background: var(--ember); }
      .pr-tier__flag { position: absolute; top: 16px; right: 16px; }
      .pr-tier__name { font-family: var(--font-display); font-weight: 700; font-size: 14px; letter-spacing: .14em; text-transform: uppercase; color: var(--cool-gray); margin: 0 0 14px; }
      .pr-tier__price { display: flex; align-items: baseline; gap: 6px; }
      .pr-tier__amount { font-family: var(--font-display); font-weight: 800; font-size: 44px; line-height: 1; color: var(--slate-ink); }
      .pr-tier__period { font-family: var(--font-body); font-size: 14px; color: var(--cool-gray); }
      .pr-tier__desc { font-family: var(--font-body); font-size: 15px; line-height: 1.55; color: var(--cool-gray); margin: 12px 0 0; }
      .pr-tier__rule { border: 0; height: 1px; background: var(--chrome-300); margin: 22px 0; }
      .pr-tier__features { list-style: none; padding: 0; margin: 0 0 26px; display: flex; flex-direction: column; gap: 12px; flex: 1; }
      .pr-tier__feat { display: flex; align-items: flex-start; gap: 10px; font-family: var(--font-body); font-size: 15px; color: var(--slate-ink); line-height: 1.45; }
      .pr-tier__check { flex: none; width: 18px; height: 18px; margin-top: 1px; color: var(--phoenix-blue); }
      .pr-tier__check svg { width: 18px; height: 18px; display: block; }
    `;
    document.head.appendChild(el);
  }, []);
}
function CheckGlyph() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }));
}
function PricingTier({
  name,
  price,
  period = "/ visit",
  description,
  features = [],
  ctaLabel = "Get a Quote",
  ctaHref,
  onCtaClick,
  featured = false,
  flag = "Most Popular",
  className = "",
  ...rest
}) {
  usePricingStyles();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["pr-tier", featured ? "pr-tier--featured" : "", className].filter(Boolean).join(" ")
  }, rest), featured ? /*#__PURE__*/React.createElement("span", {
    className: "pr-tier__flag"
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "ember"
  }, flag)) : null, /*#__PURE__*/React.createElement("p", {
    className: "pr-tier__name"
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "pr-tier__price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pr-tier__amount"
  }, price), period ? /*#__PURE__*/React.createElement("span", {
    className: "pr-tier__period"
  }, period) : null), description ? /*#__PURE__*/React.createElement("p", {
    className: "pr-tier__desc"
  }, description) : null, /*#__PURE__*/React.createElement("hr", {
    className: "pr-tier__rule"
  }), /*#__PURE__*/React.createElement("ul", {
    className: "pr-tier__features"
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    className: "pr-tier__feat",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "pr-tier__check"
  }, /*#__PURE__*/React.createElement(CheckGlyph, null)), /*#__PURE__*/React.createElement("span", null, f)))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: featured ? "primary" : "secondary",
    fullWidth: true,
    href: ctaHref,
    onClick: onCtaClick
  }, ctaLabel));
}
Object.assign(__ds_scope, { PricingTier });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PricingTier.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TrustBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Signature sparkle/glint glyph echoing the logo (Lucide "sparkles" path). */
function SparkleGlyph() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
  }));
}
function useTrustBadgeStyles() {
  React.useEffect(() => {
    if (document.getElementById("pr-trustbadge-styles")) return;
    const el = document.createElement("style");
    el.id = "pr-trustbadge-styles";
    el.textContent = `
      .pr-trust {
        display: inline-flex; align-items: center; gap: 11px;
        background: var(--white); border: 1px solid var(--chrome-300);
        border-radius: var(--r-md); padding: 11px 16px 11px 13px;
        box-shadow: var(--edge-highlight);
      }
      .pr-trust__icon {
        display: inline-flex; align-items: center; justify-content: center;
        width: 30px; height: 30px; flex: none; border-radius: var(--r-sm);
        background: var(--chrome-100); color: var(--phoenix-blue);
      }
      .pr-trust__icon svg { width: 17px; height: 17px; display: block; }
      .pr-trust__text { display: flex; flex-direction: column; line-height: 1.2; }
      .pr-trust__title {
        font-family: var(--font-display); font-weight: 700; font-size: 13px;
        letter-spacing: .06em; text-transform: uppercase; color: var(--slate-ink); white-space: nowrap;
      }
      .pr-trust__sub { font-family: var(--font-body); font-size: 12px; color: var(--cool-gray); white-space: nowrap; }
    `;
    document.head.appendChild(el);
  }, []);
}
function TrustBadge({
  title,
  subtitle,
  icon,
  className = "",
  ...rest
}) {
  useTrustBadgeStyles();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["pr-trust", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "pr-trust__icon"
  }, icon || /*#__PURE__*/React.createElement(SparkleGlyph, null)), /*#__PURE__*/React.createElement("span", {
    className: "pr-trust__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pr-trust__title"
  }, title), subtitle ? /*#__PURE__*/React.createElement("span", {
    className: "pr-trust__sub"
  }, subtitle) : null));
}
Object.assign(__ds_scope, { TrustBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TrustBadge.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/QuoteFlow.jsx
try { (() => {
const {
  Button,
  Input,
  Select
} = window.PhoenixRisingDesignSystem_61b068;
const {
  Icon
} = window;
function QuoteFlow({
  onClose
}) {
  const [step, setStep] = React.useState(0); // 0,1,2 = steps; 3 = success
  const [data, setData] = React.useState({
    service: "",
    property: "",
    panes: "",
    name: "",
    email: "",
    phone: "",
    zip: "",
    notes: ""
  });
  const set = k => e => setData(d => ({
    ...d,
    [k]: e.target.value
  }));
  const titles = ["What can we clean?", "About your property", "Where do we send it?"];
  const totalSteps = 3;
  function next() {
    setStep(s => Math.min(s + 1, totalSteps));
  }
  function back() {
    setStep(s => Math.max(s - 1, 0));
  }
  const canContinue = step === 0 ? data.service : step === 1 ? data.property && data.panes : data.name && data.email;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-c",
    style: {
      fontSize: 12
    }
  }, "Free Quote"), /*#__PURE__*/React.createElement("h3", {
    className: "modal__title"
  }, step < totalSteps ? titles[step] : "Quote on the way")), /*#__PURE__*/React.createElement("button", {
    className: "modal__close",
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 22
  }))), step < totalSteps && /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "steps__dot" + (i <= step ? " steps__dot--on" : "")
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal__body"
  }, step === 0 && /*#__PURE__*/React.createElement("div", {
    className: "modal__field-stack"
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Service type",
    placeholder: "Choose a service",
    value: data.service,
    onChange: set("service"),
    options: ["Residential — whole home", "Commercial / storefront", "Hard-water removal", "Recurring plan"]
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Anything specific?",
    hint: "Optional \u2014 e.g. solar panels, skylights, screens",
    placeholder: "Tell us a little",
    value: data.notes,
    onChange: set("notes")
  })), step === 1 && /*#__PURE__*/React.createElement("div", {
    className: "modal__field-stack"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__row"
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Property type",
    placeholder: "Select",
    value: data.property,
    onChange: set("property"),
    options: ["Single-story home", "Two-story home", "3+ stories", "Office / retail"]
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Approx. panes",
    placeholder: "Select",
    value: data.panes,
    onChange: set("panes"),
    options: ["Under 15", "15–25", "25–40", "40+"]
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Service ZIP",
    placeholder: "85016",
    value: data.zip,
    onChange: set("zip"),
    hint: "Phoenix metro service area"
  })), step === 2 && /*#__PURE__*/React.createElement("div", {
    className: "modal__field-stack"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Jane Doe",
    required: true,
    value: data.name,
    onChange: set("name")
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    type: "tel",
    placeholder: "(602) 555-0147",
    value: data.phone,
    onChange: set("phone")
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    required: true,
    placeholder: "jane@email.com",
    value: data.email,
    onChange: set("email")
  })), step === totalSteps && /*#__PURE__*/React.createElement("div", {
    className: "success-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "success-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 32,
    strokeWidth: 2
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 20,
      margin: "0 0 8px",
      color: "var(--slate-ink)"
    }
  }, "Thanks, ", data.name ? data.name.split(" ")[0] : "neighbor", "!"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--cool-gray)",
      fontSize: 15,
      lineHeight: 1.6,
      margin: "0 auto",
      maxWidth: "34ch"
    }
  }, "Your quote request is in. A Phoenix Rising estimator will reach out \u2014 usually the same day \u2014 with a clear, flat price."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onClose
  }, "Done"))), step < totalSteps && /*#__PURE__*/React.createElement("div", {
    className: "modal__actions"
  }, step > 0 ? /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    onClick: back
  }, "Back") : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--cool-gray)"
    }
  }, "Takes ~30 seconds"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    disabled: !canContinue,
    onClick: next,
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, step === totalSteps - 1 ? "Get my quote" : "Continue")))));
}
Object.assign(window, {
  QuoteFlow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/QuoteFlow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/icons.jsx
try { (() => {
// Lucide icon paths (https://lucide.dev) rendered inline so they inherit currentColor.
const PR_ICON_PATHS = {
  "shield-check": '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  "clock": '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  "check": '<path d="M20 6 9 17l-5-5"/>',
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  "phone": '<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384z"/>',
  "star": '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.123 2.123 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.123 2.123 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.123 2.123 0 0 0 1.597-1.16z"/>',
  "map-pin": '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  "sparkles": '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
  "droplets": '<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 4.8 7 3.5c-.29 1.3-1.15 2.66-2.29 3.56S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>',
  "sun": '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  "building-2": '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
  "home": '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  "menu": '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>',
  "check-circle": '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>',
  "x": '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>'
};
function Icon({
  name,
  size = 20,
  strokeWidth = 1.9,
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: "block",
      flex: "none",
      ...style
    },
    "aria-hidden": "true",
    dangerouslySetInnerHTML: {
      __html: PR_ICON_PATHS[name] || ""
    }
  });
}
Object.assign(window, {
  Icon,
  PR_ICON_PATHS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/sections.jsx
try { (() => {
const {
  Button,
  Badge,
  TrustBadge,
  PricingTier
} = window.PhoenixRisingDesignSystem_61b068;
const {
  Icon
} = window;
function Wordmark({
  light = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "wm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wm__glyph"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "droplets",
    size: 20,
    strokeWidth: 2
  })), /*#__PURE__*/React.createElement("span", {
    className: "wm__txt"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wm__name"
  }, "PHOENIX ", /*#__PURE__*/React.createElement("span", {
    className: "rise"
  }, "RISING")), /*#__PURE__*/React.createElement("span", {
    className: "wm__sub"
  }, "Window Cleaning")));
}
function SiteHeader({
  onBook
}) {
  const links = ["Services", "Pricing", "Why Us", "Service Area"];
  return /*#__PURE__*/React.createElement("header", {
    className: "hdr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container hdr__inner"
  }, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("nav", {
    className: "hdr__nav"
  }, links.map(l => /*#__PURE__*/React.createElement("span", {
    className: "hdr__link",
    key: l
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "hdr__right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hdr__phone"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), " (602) 555-0147"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onBook,
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 15,
      style: {
        color: "var(--ember)"
      }
    })
  }, "Book Now"))));
}
function Hero({
  onBook,
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container hero__inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-c hero__eyebrow"
  }, "The Valley's Trusted Glass"), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "Crystal-clear views,", /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "Phoenix strong.")), /*#__PURE__*/React.createElement("hr", {
    className: "headline-rule"
  }), /*#__PURE__*/React.createElement("p", {
    className: "hero__sub"
  }, "Premium residential & commercial window cleaning across the Phoenix metro. Insured, certified, and obsessive about a streak-free finish."), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onQuote,
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 18,
      style: {
        color: "var(--ember)"
      }
    })
  }, "Get a Free Quote"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: onBook
  }, "See Pricing")), /*#__PURE__*/React.createElement("div", {
    className: "hero__trust"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero__trust-item"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 18
  }), " Fully insured"), /*#__PURE__*/React.createElement("span", {
    className: "hero__trust-item"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 18
  }), " 4.9 \xB7 600+ reviews"), /*#__PURE__*/React.createElement("span", {
    className: "hero__trust-item"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 18
  }), " Same-week service"))), /*#__PURE__*/React.createElement("div", {
    className: "hero__panel"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero__badge"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "primary"
  }, "Before / After")), /*#__PURE__*/React.createElement("span", {
    className: "hero__panel-streak"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hero__panel-glint"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 34,
    strokeWidth: 1.4
  })), /*#__PURE__*/React.createElement("span", {
    className: "hero__panel-note"
  }, "[ Hero photo: sparkling glass in Arizona daylight ]"))));
}
function TrustBar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "trustbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container trustbar__inner"
  }, /*#__PURE__*/React.createElement(TrustBadge, {
    title: "Fully Insured",
    subtitle: "$2M liability coverage",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 17
    })
  }), /*#__PURE__*/React.createElement(TrustBadge, {
    title: "Certified Crew",
    subtitle: "Trained & background-checked",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "check-circle",
      size: 17
    })
  }), /*#__PURE__*/React.createElement(TrustBadge, {
    title: "100% Guarantee",
    subtitle: "Streak-free, or it's free",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles",
      size: 17
    })
  }), /*#__PURE__*/React.createElement(TrustBadge, {
    title: "Fast Response",
    subtitle: "Same-week scheduling",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 17
    })
  })));
}
const SERVICES = [{
  icon: "home",
  title: "Residential",
  body: "Whole-home interior & exterior glass, screens, sills, and tracks.",
  list: ["Up to 3 stories", "Screen wipe-down", "Track & sill detail"]
}, {
  icon: "building-2",
  title: "Commercial",
  body: "Storefronts and offices on a schedule your tenants will notice.",
  list: ["Recurring plans", "After-hours crews", "COI provided"]
}, {
  icon: "sun",
  title: "Hard-Water Removal",
  body: "Mineral-stain restoration that brings desert-weathered glass back.",
  list: ["Spot & sprinkler stains", "Glass restoration", "Protective sealant"]
}];
function Services() {
  const {
    Card
  } = window.PhoenixRisingDesignSystem_61b068;
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-c"
  }, "What We Do"), /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, "Spotless, every pane"), /*#__PURE__*/React.createElement("hr", {
    className: "headline-rule"
  }), /*#__PURE__*/React.createElement("p", {
    className: "section__lead"
  }, "From a single sunroom to a 40-story tower, we bring the same architectural care and the same streak-free standard.")), /*#__PURE__*/React.createElement("div", {
    className: "svc-grid"
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(Card, {
    className: "svc",
    key: s.title,
    interactive: true
  }, /*#__PURE__*/React.createElement("span", {
    className: "svc__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    className: "svc__title"
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "svc__body"
  }, s.body), /*#__PURE__*/React.createElement("ul", {
    className: "svc__list"
  }, s.list.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    strokeWidth: 2.4
  }), " ", i))))))));
}
function PricingSection({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section pricing",
    id: "pricing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head section__head--center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-c"
  }, "Straightforward Pricing"), /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, "No surprises, ever"), /*#__PURE__*/React.createElement("hr", {
    className: "headline-rule"
  }), /*#__PURE__*/React.createElement("p", {
    className: "section__lead"
  }, "Flat per-visit pricing for most homes. Bigger property? We'll quote it on-site, free.")), /*#__PURE__*/React.createElement("div", {
    className: "tiers"
  }, /*#__PURE__*/React.createElement(PricingTier, {
    name: "Standard",
    price: "$189",
    period: "/ visit",
    description: "Up to 20 panes, interior & exterior.",
    features: ["Streak-free finish", "Screen wipe-down", "Sill detailing", "Satisfaction guarantee"],
    onCtaClick: onQuote
  }), /*#__PURE__*/React.createElement(PricingTier, {
    featured: true,
    name: "Premium",
    price: "$289",
    period: "/ visit",
    description: "Our most-requested package for valley homes.",
    features: ["Everything in Standard", "Hard-water spot removal", "Track & frame deep clean", "Priority scheduling"],
    ctaLabel: "Book Premium",
    onCtaClick: onQuote
  }), /*#__PURE__*/React.createElement(PricingTier, {
    name: "Estate",
    price: "Custom",
    period: "",
    description: "Large homes & commercial accounts.",
    features: ["On-site assessment", "Recurring service plans", "Dedicated account lead", "COI on request"],
    ctaLabel: "Talk to Us",
    onCtaClick: onQuote
  }))));
}
function QuoteBand({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quoteband"
  }, /*#__PURE__*/React.createElement("span", {
    className: "quoteband__streak"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "The valley's trusted glass, since day one."), /*#__PURE__*/React.createElement("p", null, "Tell us about your property and we'll send a free, no-pressure quote \u2014 usually the same day.")), /*#__PURE__*/React.createElement("div", {
    className: "quoteband__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onQuote,
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 18,
      style: {
        color: "var(--ember)"
      }
    })
  }, "Get a Free Quote")))));
}
function SiteFooter() {
  const cols = [{
    h: "Services",
    links: ["Residential", "Commercial", "Hard-water removal", "Solar panel cleaning"]
  }, {
    h: "Company",
    links: ["Why Phoenix Rising", "Reviews", "Service area", "Careers"]
  }, {
    h: "Contact",
    links: ["(602) 555-0147", "hello@phoenixrising.co", "Mon–Sat · 7a–6p"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "ftr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container ftr__inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ftr__name"
  }, "PHOENIX ", /*#__PURE__*/React.createElement("span", {
    className: "rise"
  }, "RISING")), /*#__PURE__*/React.createElement("p", {
    className: "ftr__blurb"
  }, "Premium window cleaning for the Phoenix metro. Insured, certified, and Phoenix-strong.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    className: "ftr__col",
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", null, c.h), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l
  }, l))))), /*#__PURE__*/React.createElement("div", {
    className: "container ftr__bar"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Phoenix Rising Window Cleaning \xB7 ROC #000000"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "ember"
  }, "\u2726"), " Serving Phoenix, Scottsdale, Tempe, Mesa & Chandler")));
}
Object.assign(window, {
  SiteHeader,
  Hero,
  TrustBar,
  Services,
  PricingSection,
  QuoteBand,
  SiteFooter,
  Wordmark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.PricingTier = __ds_scope.PricingTier;

__ds_ns.TrustBadge = __ds_scope.TrustBadge;

})();
