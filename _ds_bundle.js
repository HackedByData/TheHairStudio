/* @ds-bundle: {"format":4,"namespace":"TheHairStudioDesignSystem_03d078","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"ICONS","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"HaircutScene","sourcePath":"components/display/HaircutScene.jsx"},{"name":"PhotoFrame","sourcePath":"components/display/PhotoFrame.jsx"},{"name":"Rating","sourcePath":"components/display/Rating.jsx"},{"name":"ServiceRow","sourcePath":"components/display/ServiceRow.jsx"},{"name":"StylistCard","sourcePath":"components/display/StylistCard.jsx"},{"name":"Testimonial","sourcePath":"components/display/Testimonial.jsx"},{"name":"WorkTile","sourcePath":"components/display/WorkTile.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"73c3efba7c5d","components/core/Button.jsx":"86bccee65fd1","components/core/Divider.jsx":"dab554ef70f6","components/core/Icon.jsx":"682e34733bb3","components/core/IconButton.jsx":"b7af9f973776","components/core/Logo.jsx":"6151e4315740","components/core/SectionHeading.jsx":"3b47aea23d21","components/core/Tag.jsx":"ae4c7e798c2d","components/display/Card.jsx":"7a49f48b2b0a","components/display/HaircutScene.jsx":"4ec1d74d40f6","components/display/PhotoFrame.jsx":"dcd812e57362","components/display/Rating.jsx":"286c13a7ba03","components/display/ServiceRow.jsx":"9d33ac2bd29f","components/display/StylistCard.jsx":"e02e2d89d551","components/display/Testimonial.jsx":"d190dcc1a45d","components/display/WorkTile.jsx":"0cf9538ece54","components/feedback/Dialog.jsx":"246513e612f8","components/feedback/EmptyState.jsx":"228cd9922ac5","components/feedback/Toast.jsx":"c568909b5c6a","components/forms/Checkbox.jsx":"20296a039259","components/forms/Input.jsx":"d629d2659a33","components/forms/RadioGroup.jsx":"02709459d518","components/forms/Select.jsx":"5617241b162f","components/forms/Switch.jsx":"b09aeddc45e0","components/forms/Textarea.jsx":"3690d5bd1b4e","components/navigation/Footer.jsx":"6cdae1068ee9","components/navigation/NavBar.jsx":"12eef6a0dd75","components/navigation/Tabs.jsx":"7b0f40dcde74","ui_kits/booking/Booking.jsx":"2c06b5b11189","ui_kits/social/Posts.jsx":"7f4477f748cf","ui_kits/website/App.jsx":"4a8793976dec","ui_kits/website/Sections.jsx":"55c4b94fb3bb","ui_kits/website/data.js":"bc106926f16c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TheHairStudioDesignSystem_03d078 = window.TheHairStudioDesignSystem_03d078 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    background: 'var(--veil-8)',
    color: 'var(--text-secondary)',
    border: 'var(--line-hairline)'
  },
  accent: {
    background: 'rgba(140,28,43,.16)',
    color: 'var(--accent-300)',
    border: 'var(--line-accent)'
  },
  confirmed: {
    background: 'var(--green-900)',
    color: 'var(--green-500)',
    border: 'rgba(127,163,122,.4)'
  },
  pending: {
    background: 'var(--amber-900)',
    color: 'var(--amber-500)',
    border: 'rgba(217,164,65,.4)'
  },
  cancelled: {
    background: 'var(--red-900)',
    color: 'var(--red-500)',
    border: 'rgba(193,95,82,.4)'
  },
  solid: {
    background: 'var(--bone-50)',
    color: 'var(--text-on-light)',
    border: 'var(--bone-50)'
  }
};
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 10px 4px',
      background: t.background,
      color: t.color,
      border: `1px solid ${t.border}`,
      borderRadius: 'var(--radius-xs)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--label-size)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--label-track)',
      textTransform: 'uppercase',
      lineHeight: 1.2,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hairline rule. `ornament` drops a small oxblood diamond in the middle — the salon's one flourish. */
function Divider({
  ornament = false,
  tone = 'default',
  spacing = 32,
  style,
  ...rest
}) {
  const color = tone === 'strong' ? 'var(--border-strong)' : tone === 'accent' ? 'var(--line-accent)' : 'var(--border-default)';
  if (!ornament) return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      borderTop: `1px solid ${color}`,
      margin: `${spacing}px 0`,
      ...style
    }
  }, rest));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      margin: `${spacing}px 0`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      background: 'var(--accent-500)',
      transform: 'rotate(45deg)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: color
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Icon paths copied verbatim from Lucide (lucide-icons/lucide @ a7c781bd43db, ISC).
// Source SVGs also live in /assets/icons/ — see readme.md § Iconography.
const ICONS = {
  "arrow-left": "<path d=\"m12 19-7-7 7-7\"></path> <path d=\"M19 12H5\"></path>",
  "arrow-right": "<path d=\"M5 12h14\"></path> <path d=\"m12 5 7 7-7 7\"></path>",
  "calendar": "<path d=\"M8 2v3\"></path> <path d=\"M16 2v3\"></path> <rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"></rect> <path d=\"M3 9h18\"></path>",
  "check": "<path d=\"M20 6 9 17l-5-5\"></path>",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\"></path>",
  "chevron-right": "<path d=\"m9 18 6-6-6-6\"></path>",
  "circle-check": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle> <path d=\"m9 12 2 2 4-4\"></path>",
  "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle> <path d=\"M12 6v6l4 2\"></path>",
  "droplet": "<path d=\"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z\"></path>",
  "external-link": "<path d=\"M15 3h6v6\"></path> <path d=\"M10 14 21 3\"></path> <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path>",
  "heart": "<path d=\"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5\"></path>",
  "mail": "<path d=\"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7\"></path> <rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"></rect>",
  "map-pin": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"></path> <circle cx=\"12\" cy=\"10\" r=\"3\"></circle>",
  "menu": "<path d=\"M4 5h16\"></path> <path d=\"M4 12h16\"></path> <path d=\"M4 19h16\"></path>",
  "minus": "<path d=\"M5 12h14\"></path>",
  "palette": "<path d=\"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z\"></path> <circle cx=\"13.5\" cy=\"6.5\" r=\".5\" fill=\"currentColor\"></circle> <circle cx=\"17.5\" cy=\"10.5\" r=\".5\" fill=\"currentColor\"></circle> <circle cx=\"6.5\" cy=\"12.5\" r=\".5\" fill=\"currentColor\"></circle> <circle cx=\"8.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"></circle>",
  "phone": "<path d=\"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384\"></path>",
  "plus": "<path d=\"M5 12h14\"></path> <path d=\"M12 5v14\"></path>",
  "scissors": "<circle cx=\"6\" cy=\"6\" r=\"3\"></circle> <path d=\"M8.12 8.12 12 12\"></path> <path d=\"M20 4 8.12 15.88\"></path> <circle cx=\"6\" cy=\"18\" r=\"3\"></circle> <path d=\"M14.8 14.8 20 20\"></path>",
  "search": "<path d=\"m21 21-4.34-4.34\"></path> <circle cx=\"11\" cy=\"11\" r=\"8\"></circle>",
  "sparkles": "<path d=\"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z\"></path> <path d=\"M20 2v4\"></path> <path d=\"M22 4h-4\"></path> <circle cx=\"4\" cy=\"20\" r=\"2\"></circle>",
  "star": "<path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\"></path>",
  "user": "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\"></path> <circle cx=\"12\" cy=\"7\" r=\"4\"></circle>",
  "x": "<path d=\"M18 6 6 18\"></path> <path d=\"m6 6 12 12\"></path>"
};
function Icon({
  name = 'sparkles',
  size = 20,
  strokeWidth = 1.5,
  color = 'currentColor',
  label,
  style,
  ...rest
}) {
  const d = ICONS[name];
  if (!d) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: label ? 'img' : 'presentation',
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      flex: '0 0 auto',
      display: 'block',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: d
    }
  }, rest));
}
Object.assign(__ds_scope, { ICONS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '9px 18px',
    fontSize: 11,
    tracking: '0.18em',
    icon: 14,
    gap: 8
  },
  md: {
    padding: '14px 28px',
    fontSize: 12,
    tracking: '0.20em',
    icon: 16,
    gap: 10
  },
  lg: {
    padding: '19px 40px',
    fontSize: 13,
    tracking: '0.22em',
    icon: 18,
    gap: 12
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--accent-500)',
    color: 'var(--text-on-accent)',
    border: '1px solid var(--accent-500)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-secondary)',
    border: '1px solid transparent'
  },
  light: {
    background: 'var(--bone-50)',
    color: 'var(--text-on-light)',
    border: '1px solid var(--bone-50)'
  },
  danger: {
    background: 'transparent',
    color: 'var(--red-500)',
    border: '1px solid rgba(193,95,82,.5)'
  }
};
const HOVER = {
  primary: {
    background: 'var(--accent-400)',
    borderColor: 'var(--accent-400)'
  },
  secondary: {
    background: 'var(--veil-8)',
    borderColor: 'var(--accent-400)',
    color: 'var(--accent-200)'
  },
  ghost: {
    color: 'var(--text-primary)',
    background: 'var(--veil-4)'
  },
  light: {
    background: 'var(--bone-200)',
    borderColor: 'var(--bone-200)'
  },
  danger: {
    background: 'rgba(193,95,82,.10)',
    borderColor: 'var(--red-500)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  disabled = false,
  as = 'button',
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const Tag = href ? 'a' : as;
  const composed = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    padding: s.padding,
    fontFamily: 'var(--font-sans)',
    fontSize: s.fontSize,
    fontWeight: 'var(--weight-semibold)',
    letterSpacing: s.tracking,
    textTransform: 'uppercase',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    borderRadius: 'var(--radius-button)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'var(--transition-color), transform var(--dur-fast) var(--ease-standard), opacity var(--dur-fast) linear',
    opacity: disabled ? 0.38 : 1,
    transform: press && !disabled ? 'translateY(1px)' : 'none',
    ...v,
    ...(hover && !disabled ? HOVER[variant] : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: composed
  }, rest), icon && iconPosition === 'left' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon,
    strokeWidth: 1.6
  }), /*#__PURE__*/React.createElement("span", null, children), icon && iconPosition === 'right' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon,
    strokeWidth: 1.6
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  round = false,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = SIZES[size] || SIZES.md;
  const base = {
    outline: {
      background: 'transparent',
      border: '1px solid var(--border-default)',
      color: 'var(--text-secondary)'
    },
    ghost: {
      background: 'transparent',
      border: '1px solid transparent',
      color: 'var(--text-secondary)'
    },
    solid: {
      background: 'var(--accent-500)',
      border: '1px solid var(--accent-500)',
      color: 'var(--text-on-accent)'
    },
    light: {
      background: 'var(--bone-50)',
      border: '1px solid var(--bone-50)',
      color: 'var(--text-on-light)'
    }
  }[variant];
  const hoverStyle = {
    outline: {
      borderColor: 'var(--accent-400)',
      color: 'var(--accent-200)'
    },
    ghost: {
      background: 'var(--veil-8)',
      color: 'var(--text-primary)'
    },
    solid: {
      background: 'var(--accent-400)',
      borderColor: 'var(--accent-400)'
    },
    light: {
      background: 'var(--bone-200)',
      borderColor: 'var(--bone-200)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: round ? 'var(--radius-circle)' : 'var(--radius-xs)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.38 : 1,
      transition: 'var(--transition-color)',
      padding: 0,
      ...base,
      ...(hover && !disabled ? hoverStyle : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 15 : size === 'lg' ? 20 : 17,
    strokeWidth: 1.5
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The wordmark. `variant="mark"` uses the supplied raster mark (white on transparent);
 * `variant="type"` sets the name in Bodoni Moda for places the raster is too heavy.
 */
function Logo({
  variant = 'type',
  size = 'md',
  color = 'var(--text-primary)',
  src = '/assets/logo-mark-white.png',
  style,
  ...rest
}) {
  const scale = {
    sm: 0.72,
    md: 1,
    lg: 1.55,
    xl: 2.4
  }[size] || 1;
  if (variant === 'mark') {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: "The Hair Studio",
      style: {
        width: 44 * scale,
        height: 44 * scale,
        ...style
      }
    }, rest));
  }
  if (variant === 'stacked') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-block',
        textAlign: 'center',
        color,
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-light)',
        lineHeight: 1.12,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 13 * scale,
        letterSpacing: `${0.42 * scale}em`,
        textIndent: `${0.42 * scale}em`,
        textTransform: 'uppercase'
      }
    }, "The Hair"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 22 * scale,
        letterSpacing: `${0.24 * scale}em`,
        textIndent: `${0.24 * scale}em`,
        textTransform: 'uppercase'
      }
    }, "Studio"));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      color,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-light)',
      fontSize: 18 * scale,
      letterSpacing: `${0.30 * scale}em`,
      textIndent: `${0.30 * scale}em`,
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), "The Hair Studio");
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Overline + display heading + optional lede. The standard opener for every section on every surface. */
function SectionHeading({
  overline,
  title,
  lede,
  align = 'left',
  level = 2,
  onLight = false,
  style,
  ...rest
}) {
  const Tag = `h${level}`;
  const sizes = {
    1: 'var(--display-3-size)',
    2: 'var(--h1-size)',
    3: 'var(--h2-size)',
    4: 'var(--h3-size)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      maxWidth: align === 'center' ? 680 : undefined,
      marginInline: align === 'center' ? 'auto' : undefined,
      ...style
    }
  }, rest), overline && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--overline-size)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--overline-track)',
      textTransform: 'uppercase',
      color: onLight ? 'var(--accent-600)' : 'var(--accent-400)',
      marginBottom: 18
    }
  }, overline), /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-light)',
      fontSize: sizes[level] || sizes[2],
      lineHeight: 1.12,
      letterSpacing: '0.09em',
      textTransform: 'uppercase',
      color: onLight ? 'var(--text-on-light)' : 'var(--text-primary)'
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      maxWidth: 560,
      marginInline: align === 'center' ? 'auto' : undefined,
      fontSize: 'var(--body-lg-size)',
      lineHeight: 'var(--body-lg-line)',
      fontWeight: 'var(--weight-light)',
      color: onLight ? 'var(--text-on-light-muted)' : 'var(--text-secondary)',
      textWrap: 'pretty'
    }
  }, lede));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  selected = false,
  onClick,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = Boolean(onClick);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${selected ? 'var(--accent-400)' : hover && interactive ? 'var(--border-strong)' : 'var(--border-default)'}`,
      background: selected ? 'rgba(140,28,43,.14)' : hover && interactive ? 'var(--veil-4)' : 'transparent',
      color: selected ? 'var(--accent-200)' : 'var(--text-secondary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-sm-size)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '0.02em',
      whiteSpace: 'nowrap',
      cursor: disabled ? 'not-allowed' : interactive ? 'pointer' : 'default',
      opacity: disabled ? 0.4 : 1,
      transition: 'var(--transition-color)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface container. Square corners by default; `soft` opts into the print-flier radius. */
function Card({
  children,
  tone = 'dark',
  soft = false,
  interactive = false,
  padding = 32,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    dark: {
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-sm)'
    },
    void: {
      background: 'var(--black-void)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      boxShadow: 'none'
    },
    light: {
      background: 'var(--surface-light)',
      color: 'var(--text-on-light)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-light-md)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      boxShadow: 'none'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      padding,
      borderRadius: soft ? 'var(--radius-card-soft)' : 'var(--radius-card)',
      transition: 'var(--transition-color), transform var(--dur-base) var(--ease-out-soft), box-shadow var(--dur-base) var(--ease-standard)',
      cursor: interactive || onClick ? 'pointer' : 'default',
      ...tones,
      ...(hover && (interactive || onClick) ? {
        borderColor: tone === 'light' ? 'transparent' : 'var(--border-accent)',
        background: tone === 'light' ? 'var(--surface-light)' : 'var(--surface-card-hover)',
        transform: 'translateY(-2px)',
        boxShadow: tone === 'light' ? 'var(--shadow-light-lg)' : 'var(--shadow-md)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/HaircutScene.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The home hero background: a real-time 3D scene — the back of a woman's head,
 * her freshly gloss-treated hair gathered, then cut with a single snip as the
 * page scrolls. The camera pushes in from the wide figure to a close-up of the
 * lock; the cut fall drops away and the fresh edge springs back. Pure with
 * respect to scroll: drive it with `progress` 0→1 — any frame is reproducible
 * from `progress` alone, and nothing animates while the page is idle.
 *
 * three.js is read from `window.THREE`, which the host page loads through the
 * pinned import map (see ui_kits/website/index.html). Until it resolves the
 * component renders flat black, so a module failure never takes the page down.
 */
function HaircutScene({
  progress = 0,
  strands = 2800,
  seed = 7,
  vignette = 0.62,
  style,
  ...rest
}) {
  const hostRef = React.useRef(null);
  const apiRef = React.useRef(null);
  const progressRef = React.useRef(progress);
  const [ready, setReady] = React.useState(false);
  progressRef.current = progress;
  React.useEffect(() => {
    let cancelled = false;
    let timer = 0;
    const tick = () => {
      if (cancelled) return;
      if (window.THREE && hostRef.current) {
        try {
          apiRef.current = buildScene(window.THREE, hostRef.current, {
            strands,
            seed
          });
          apiRef.current.setProgress(progressRef.current);
          setReady(true);
        } catch (e) {
          apiRef.current = null; // context creation failed — stay flat black, never take the page down
        }
      } else {
        timer = window.setTimeout(tick, 60);
      }
    };
    tick();
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      if (apiRef.current) apiRef.current.dispose();
      apiRef.current = null;
    };
  }, [strands, seed]);
  React.useEffect(() => {
    if (apiRef.current) apiRef.current.setProgress(progress);
  }, [progress, ready]);
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      background: 'var(--black-void)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    ref: hostRef,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: ready ? 1 : 0,
      transition: 'opacity var(--dur-slow) var(--ease-out-soft)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `radial-gradient(96% 84% at 50% 46%, rgba(0,0,0,${vignette * 0.52}) 0%, rgba(0,0,0,${vignette * 0.40}) 44%, rgba(0,0,0,${vignette * 0.30}) 72%, rgba(0,0,0,${vignette * 0.92}) 100%)`
    }
  }));
}

/* ── scene ─────────────────────────────────────────────────────────────── */

const CUT_Y = 0.02; // world height of the cut line
const SNIP_P = 0.75; // scroll progress at which the blades close
const LOCK_Z = 0.40; // z-plane the gathered lock hangs in
const HEAD_C = [0, 1.34, 0];
const HEAD_R = 0.50;
function buildScene(THREE, host, {
  strands,
  seed
}) {
  /* Park–Miller: the multiply stays under 2^53, so the sequence is exact in doubles */
  let s = (seed % 2147483646 + 2147483646) % 2147483646 + 1;
  const rnd = () => {
    s = s * 16807 % 2147483647;
    return s / 2147483647;
  };
  const gauss = () => (rnd() + rnd() + rnd() - 1.5) * 0.82;
  const clamp01 = v => Math.max(0, Math.min(1, v));
  const mix = (a, b, t) => a + (b - a) * t;
  const sstep = (a, b, x) => {
    const t = clamp01((x - a) / (b - a));
    return t * t * (3 - 2 * t);
  };
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    preserveDrawingBuffer: true,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.02;
  host.appendChild(renderer.domElement);
  Object.assign(renderer.domElement.style, {
    position: 'absolute',
    inset: '0',
    width: '100%',
    height: '100%',
    display: 'block'
  });
  const scene = new THREE.Scene();
  const envTex = studioEnvironment(THREE);
  scene.environment = envTex;
  scene.environmentIntensity = 0.55;
  const camera = new THREE.PerspectiveCamera(32, 1, 0.05, 100);
  scene.add(new THREE.AmbientLight(0xfff6ea, 0.14));
  const key = new THREE.DirectionalLight(0xfff3e2, 1.5);
  key.position.set(2.4, 3.2, 2.6);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xf0d5c2, 2.3);
  rim.position.set(-2.8, 1.8, -2.2);
  scene.add(rim);
  const rimWarm = new THREE.DirectionalLight(0xd4949b, 1.1);
  rimWarm.position.set(3.0, 0.4, -2.0);
  scene.add(rimWarm);
  const front = new THREE.DirectionalLight(0xfff0dd, 0.38);
  front.position.set(-0.6, 0.9, 4.2);
  scene.add(front);

  /* ── the figure, seen from behind ── */
  const skin = new THREE.MeshStandardMaterial({
    name: 'figure',
    color: 0x0f0e0d,
    roughness: 0.78,
    metalness: 0.04,
    envMapIntensity: 0.18
  });
  const cloth = new THREE.MeshStandardMaterial({
    name: 'cape',
    color: 0x030303,
    roughness: 1.0,
    metalness: 0.0,
    envMapIntensity: 0.05
  });
  const figure = new THREE.Group();
  figure.name = 'figure';
  const head = new THREE.Mesh(new THREE.SphereGeometry(HEAD_R, 48, 36), skin);
  head.name = 'head';
  head.scale.set(1, 1.13, 1.04);
  head.position.set(...HEAD_C);
  figure.add(head);
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.155, 0.20, 0.36, 28), skin);
  neck.name = 'neck';
  neck.position.set(0, 0.90, -0.02);
  figure.add(neck);
  const shoulders = new THREE.Mesh(new THREE.CapsuleGeometry(0.26, 0.52, 10, 28), cloth);
  shoulders.name = 'shoulders';
  shoulders.rotation.z = Math.PI / 2;
  shoulders.position.set(0, 0.56, -0.04);
  figure.add(shoulders);
  const back = new THREE.Mesh(new THREE.CylinderGeometry(0.40, 0.72, 2.6, 36), cloth);
  back.name = 'cape';
  back.position.set(0, -0.78, -0.12);
  back.scale.z = 0.6;
  figure.add(back);
  scene.add(figure);

  /* ── hair: clump-groomed ribbons ─────────────────────────────────────── */

  const CLUMP_N = 120;
  const clumps = [];
  for (let i = 0; i < CLUMP_N; i++) {
    clumps.push({
      az: (rnd() * 2 - 1) * 1.5,
      waveFreq: 2.0 + rnd() * 3.0,
      wavePhase: rnd() * 6.2831,
      waveAmp: 0.006 + rnd() * 0.011,
      flick: (rnd() - 0.5) * 0.12,
      lenVar: rnd() - 0.5,
      highlight: rnd() < 0.075,
      cr: rnd()
    });
  }
  const espresso = new THREE.Color(0x3a2318);
  const nearBlack = new THREE.Color(0x140e0b);
  const caramel = new THREE.Color(0x7a4c26);
  const flyTone = new THREE.Color(0x6b4c33);

  // growable per-vertex streams; converted to typed arrays once at the end
  const A = {
    pos: [],
    tan: [],
    side: [],
    u: [],
    w: [],
    col: [],
    rand: [],
    idx: [],
    vc: 0
  };
  const C = {
    pos: [],
    tan: [],
    side: [],
    u: [],
    w: [],
    col: [],
    rand: [],
    idx: [],
    vc: 0,
    piv: [],
    delay: [],
    spin: []
  };
  const pushRibbon = (B, pts, opts) => {
    const n = pts.length;
    const base = B.vc;
    for (let i = 0; i < n; i++) {
      const p = pts[i];
      const t0 = pts[Math.max(0, i - 1)];
      const t1 = pts[Math.min(n - 1, i + 1)];
      const tx = t1.x - t0.x,
        ty = t1.y - t0.y,
        tz = t1.z - t0.z;
      const tl = Math.sqrt(tx * tx + ty * ty + tz * tz) || 1;
      const v = i / (n - 1);
      const u = mix(opts.u0, opts.u1, v);
      const w = opts.halfW * (0.70 + 0.30 * sstep(0.0, 0.12, u)) * mix(1, opts.tipTaper, sstep(0.70, 1.0, v));
      for (const side of [-1, 1]) {
        B.pos.push(p.x, p.y, p.z);
        B.tan.push(tx / tl, ty / tl, tz / tl);
        B.side.push(side);
        B.u.push(u);
        B.w.push(w);
        B.col.push(opts.color.r, opts.color.g, opts.color.b);
        B.rand.push(opts.rand[0], opts.rand[1]);
        if (opts.cut) {
          B.piv.push(opts.cut.pivot.x, opts.cut.pivot.y, opts.cut.pivot.z);
          B.delay.push(opts.cut.delay);
          B.spin.push(opts.cut.spin[0], opts.cut.spin[1]);
        }
      }
    }
    for (let i = 0; i < n - 1; i++) {
      const a = base + i * 2;
      B.idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
    B.vc += n * 2;
  };
  const resample = (pts, n) => {
    const d = [0];
    for (let i = 1; i < pts.length; i++) d.push(d[i - 1] + pts[i].distanceTo(pts[i - 1]));
    const total = d[d.length - 1] || 1;
    const out = [];
    let j = 0;
    for (let k = 0; k < n; k++) {
      const target = total * (k / (n - 1));
      while (j < pts.length - 2 && d[j + 1] < target) j++;
      const span = d[j + 1] - d[j] || 1;
      out.push(pts[j].clone().lerp(pts[j + 1], clamp01((target - d[j]) / span)));
    }
    return out;
  };
  for (let i = 0; i < strands; i++) {
    const c = clumps[rnd() * CLUMP_N | 0];
    const isFly = rnd() < 0.045;
    const az0 = Math.max(-1.55, Math.min(1.55, c.az + gauss() * 0.11));
    const phi0 = 0.16 + Math.pow(rnd(), 0.75) * 1.34;
    const shell = HEAD_R + 0.013 + rnd() * 0.045 + (isFly ? 0.03 + rnd() * 0.05 : 0);
    const halfW = isFly ? 0.0006 + rnd() * 0.0006 : 0.0011 + rnd() * rnd() * 0.0018;
    const tone = new THREE.Color().lerpColors(espresso, nearBlack, Math.pow(rnd(), 0.55));
    if (c.highlight) tone.lerp(caramel, 0.16 + rnd() * 0.20);
    if (isFly) tone.lerp(flyTone, 0.22);
    tone.multiplyScalar(0.92 + rnd() * 0.16);
    const tipY = isFly ? CUT_Y + 0.15 - rnd() * 0.9 : CUT_Y - (0.50 + c.lenVar * 0.13 + (rnd() - 0.5) * 0.06);
    const exitPhi = 1.62 + 0.38 * Math.cos(az0 * 0.85) + rnd() * 0.05;

    /* section A — hug the scalp shell from root to nape exit */
    const raw = [];
    const KA = 8;
    for (let k = 0; k < KA; k++) {
      const u = k / (KA - 1);
      const phi = phi0 + (exitPhi - phi0) * u;
      const a = az0 * (1 - 0.15 * u * u);
      const r = shell + 0.018 * Math.sin(u * Math.PI);
      raw.push(new THREE.Vector3(HEAD_C[0] + r * Math.sin(phi) * Math.sin(a), HEAD_C[1] + r * Math.cos(phi) * 1.15, HEAD_C[2] + r * Math.sin(phi) * Math.cos(a) * 1.05));
    }

    /* section B — the fall: clump wave, converge mid-length, flick at tip */
    const E = raw[raw.length - 1];
    const jx = gauss() * 0.02,
      jz = gauss() * 0.02;
    const dirOut = Math.abs(az0) < 0.18 ? rnd() < 0.5 ? -0.4 : 0.4 : Math.sign(az0);
    const flickAmt = (0.02 + Math.abs(c.flick)) * 0.55 * (0.4 + 0.6 * sstep(0.1, 0.8, Math.abs(az0)));
    const zTarget = 0.34 + 0.10 * Math.cos(az0 * 1.2);
    const KB = 16;
    for (let k = 1; k <= KB; k++) {
      const v = k / KB;
      const tight = 1 - 0.7 * sstep(0.06, 0.4, v) + 0.55 * sstep(0.78, 1, v);
      const wobX = c.waveAmp * Math.sin(v * c.waveFreq * 3.0 + c.wavePhase) * (0.4 + 0.6 * v);
      const wobZ = c.waveAmp * 0.6 * Math.cos(v * c.waveFreq * 2.4 + c.wavePhase * 1.3) * v;
      raw.push(new THREE.Vector3(E.x * (1 - 0.32 * v) + wobX + jx * tight + dirOut * flickAmt * Math.pow(v, 3.2), E.y + (tipY - E.y) * v, mix(E.z, zTarget, Math.pow(v, 1.05)) + wobZ + jz * tight + flickAmt * 0.4 * Math.pow(v, 3.0)));
    }

    /* split at the cut line */
    let crossIdx = -1,
      crossPt = null;
    for (let k = 1; k < raw.length; k++) {
      if (raw[k - 1].y >= CUT_Y && raw[k].y < CUT_Y) {
        const f = (raw[k - 1].y - CUT_Y) / (raw[k - 1].y - raw[k].y);
        crossPt = raw[k - 1].clone().lerp(raw[k], f);
        crossIdx = k;
        break;
      }
    }
    const arc = [0];
    for (let k = 1; k < raw.length; k++) arc.push(arc[k - 1] + raw[k].distanceTo(raw[k - 1]));
    const totalArc = arc[arc.length - 1];
    const rand2 = [c.cr, rnd()];
    if (crossPt) {
      const upArc = arc[crossIdx - 1] + raw[crossIdx - 1].distanceTo(crossPt);
      const uCut = upArc / totalArc;
      const upRaw = raw.slice(0, crossIdx).concat([crossPt]);
      const downRaw = [crossPt].concat(raw.slice(crossIdx));
      pushRibbon(A, resample(upRaw, 21), {
        u0: 0,
        u1: uCut,
        halfW,
        tipTaper: 1.0,
        color: tone,
        rand: rand2
      });
      pushRibbon(C, resample(downRaw, 10), {
        u0: uCut,
        u1: 1,
        halfW,
        tipTaper: 0.4,
        color: tone,
        rand: rand2,
        cut: {
          pivot: crossPt,
          delay: Math.min(0.6, Math.abs(crossPt.x * 0.48) * 1.2 + rnd() * 0.12),
          spin: [(rnd() - 0.5) * 2.6, (rnd() - 0.5) * 1.2]
        }
      });
    } else {
      pushRibbon(A, resample(raw, 21), {
        u0: 0,
        u1: 1,
        halfW,
        tipTaper: 0.15,
        color: tone,
        rand: rand2
      });
    }
  }
  const buildGeo = (B, withCut) => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(Float32Array.from(B.pos), 3));
    g.setAttribute('aTangent', new THREE.BufferAttribute(Float32Array.from(B.tan), 3));
    g.setAttribute('aSide', new THREE.BufferAttribute(Float32Array.from(B.side), 1));
    g.setAttribute('aU', new THREE.BufferAttribute(Float32Array.from(B.u), 1));
    g.setAttribute('aWidth', new THREE.BufferAttribute(Float32Array.from(B.w), 1));
    g.setAttribute('aColor', new THREE.BufferAttribute(Float32Array.from(B.col), 3));
    g.setAttribute('aRand', new THREE.BufferAttribute(Float32Array.from(B.rand), 2));
    if (withCut) {
      g.setAttribute('aPivot', new THREE.BufferAttribute(Float32Array.from(B.piv), 3));
      g.setAttribute('aDelay', new THREE.BufferAttribute(Float32Array.from(B.delay), 1));
      g.setAttribute('aSpin', new THREE.BufferAttribute(Float32Array.from(B.spin), 2));
    }
    g.setIndex(new THREE.BufferAttribute(Uint32Array.from(B.idx), 1));
    return g;
  };
  const hairUniformsFor = () => ({
    uGather: {
      value: 0
    },
    uSwayAmp: {
      value: 0
    },
    uSwayPhase: {
      value: 0
    },
    uLift: {
      value: 0
    },
    uCutT: {
      value: 0
    }
  });
  const uAtt = hairUniformsFor();
  const uCut = hairUniformsFor();
  const hairMaterial = (uniforms, cut) => new THREE.ShaderMaterial({
    name: cut ? 'hair-cut' : 'hair',
    uniforms,
    defines: cut ? {
      CUT: ''
    } : {},
    vertexShader: HAIR_VERT,
    fragmentShader: HAIR_FRAG,
    side: THREE.DoubleSide,
    transparent: false,
    alphaToCoverage: true
  });
  const attachedMesh = new THREE.Mesh(buildGeo(A, false), hairMaterial(uAtt, false));
  attachedMesh.name = 'hair-attached';
  attachedMesh.frustumCulled = false;
  scene.add(attachedMesh);
  const cutMesh = new THREE.Mesh(buildGeo(C, true), hairMaterial(uCut, true));
  cutMesh.name = 'hair-cut';
  cutMesh.frustumCulled = false;
  scene.add(cutMesh);

  /* ── shears ── */
  const steel = new THREE.MeshStandardMaterial({
    name: 'steel',
    color: 0xc9d0d6,
    metalness: 0.95,
    roughness: 0.22
  });
  const steelDark = new THREE.MeshStandardMaterial({
    name: 'steel-dark',
    color: 0x8f979f,
    metalness: 0.95,
    roughness: 0.30
  });
  const handleMat = new THREE.MeshStandardMaterial({
    name: 'handle',
    color: 0x1d1d1f,
    metalness: 0.35,
    roughness: 0.44
  });
  const pivotMat = new THREE.MeshStandardMaterial({
    name: 'pivot',
    color: 0x8c1c2b,
    metalness: 0.9,
    roughness: 0.3
  });
  const scissors = new THREE.Group();
  scissors.name = 'scissors';
  const bladeShape = new THREE.Shape();
  bladeShape.moveTo(0, -0.030);
  bladeShape.lineTo(0.68, -0.0025);
  bladeShape.quadraticCurveTo(0.705, 0.0, 0.68, 0.0035);
  bladeShape.lineTo(0.05, 0.046);
  bladeShape.quadraticCurveTo(0, 0.050, 0, 0.030);
  bladeShape.closePath();
  const bladeGeo = new THREE.ExtrudeGeometry(bladeShape, {
    depth: 0.012,
    bevelEnabled: true,
    bevelSize: 0.003,
    bevelThickness: 0.002,
    bevelSegments: 2,
    curveSegments: 12
  });
  bladeGeo.translate(0, 0, -0.006);
  const shankShape = new THREE.Shape();
  shankShape.moveTo(0, -0.028);
  shankShape.lineTo(-0.26, -0.022);
  shankShape.lineTo(-0.26, 0.022);
  shankShape.lineTo(0, 0.034);
  shankShape.closePath();
  const shankGeo = new THREE.ExtrudeGeometry(shankShape, {
    depth: 0.011,
    bevelEnabled: true,
    bevelSize: 0.0022,
    bevelThickness: 0.0022,
    bevelSegments: 2
  });
  shankGeo.translate(0, 0, -0.0055);
  const ringGeo = new THREE.TorusGeometry(0.085, 0.010, 16, 40);
  const arms = [];
  for (const dir of [1, -1]) {
    const arm = new THREE.Group();
    arm.name = dir > 0 ? 'blade-upper' : 'blade-lower';
    const blade = new THREE.Mesh(bladeGeo, dir > 0 ? steel : steelDark);
    blade.name = dir > 0 ? 'blade-face-upper' : 'blade-face-lower';
    blade.scale.y = dir;
    blade.position.z = dir * 0.009;
    arm.add(blade);
    const shank = new THREE.Mesh(shankGeo, dir > 0 ? steel : steelDark);
    shank.name = dir > 0 ? 'shank-upper' : 'shank-lower';
    shank.scale.y = dir;
    shank.position.z = dir * 0.009;
    arm.add(shank);
    const ring = new THREE.Mesh(ringGeo, handleMat);
    ring.name = dir > 0 ? 'ring-upper' : 'ring-lower';
    ring.position.set(-0.345, dir * 0.095, dir * 0.009);
    ring.rotation.y = Math.PI / 2;
    ring.rotation.x = dir * 0.04;
    ring.scale.set(1, 1.10, 1);
    arm.add(ring);
    scissors.add(arm);
    arms.push(arm);
  }
  const pivotScrew = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.036, 24), pivotMat);
  pivotScrew.name = 'pivot-screw';
  pivotScrew.rotation.x = Math.PI / 2;
  scissors.add(pivotScrew);
  scissors.scale.setScalar(0.74);
  scene.add(scissors);
  const spark = new THREE.PointLight(0xfff4e4, 0, 3.6, 2);
  spark.name = 'blade-light';
  scene.add(spark);

  /* ── drive: every value below is a pure function of progress ── */
  let progress = 0;
  let aspect = 1;
  const apply = () => {
    const p = clamp01(progress);

    /* hair uniforms */
    const gBase = sstep(0.30, 0.66, p);
    uAtt.uGather.value = gBase * (1 - 0.55 * sstep(0.82, 1, p));
    uCut.uGather.value = sstep(0.30, 0.66, Math.min(p, SNIP_P));
    const swayAmp = 0.030 * sstep(0.04, 0.28, p) * (1 - sstep(0.52, 0.72, p));
    uAtt.uSwayAmp.value = swayAmp;
    uCut.uSwayAmp.value = swayAmp;
    uAtt.uSwayPhase.value = uCut.uSwayPhase.value = 4.5 * p;
    uCut.uCutT.value = clamp01((p - SNIP_P) / 0.24);
    uAtt.uLift.value = 0.055 * sstep(SNIP_P, 0.84, p) - 0.032 * sstep(0.84, 1, p);

    /* camera: wide figure → close-up on the lock */
    const t1 = sstep(0, 0.62, p);
    const creep = sstep(0.62, 1, p);
    const wideZ = aspect < 1 ? 7.2 : aspect < 1.7 ? 6.4 : 5.9;
    const closeZ = aspect < 1 ? 3.0 : aspect < 1.7 ? 2.25 : 2.05;
    camera.position.set(0.16 * t1, mix(0.56, CUT_Y + 0.10, t1) - 0.04 * creep, mix(wideZ, closeZ, t1) - 0.12 * creep);
    camera.fov = (aspect < 1 ? 48 : aspect < 1.7 ? 36 : 33) - 3 * t1;
    camera.updateProjectionMatrix();
    /* the target sits below the cut line so the snip plays in the upper
       quarter of the frame — the part still uncovered late in the scroll;
       the late creep keeps the fresh edge above the next section's cover line */
    camera.lookAt(0.02 * t1, mix(0.46, CUT_Y - 0.22, t1) - 0.08 * creep, 0.20 * t1);

    /* shears: glide in from the right, one snip, withdraw */
    const enter = sstep(0.56, 0.72, p);
    const closeT = sstep(0.725, 0.755, p);
    const wd = sstep(0.80, 0.97, p);
    scissors.visible = enter > 0.001 && wd < 0.999;
    scissors.position.set(mix(2.1, 0.22, enter) + 1.7 * wd * wd, CUT_Y + 0.012 + 0.06 * (1 - enter) - 0.05 * wd, 0.47);
    scissors.rotation.set(-0.16, Math.PI, -0.06 - 0.12 * wd);
    const open = 0.20 * (1 - closeT) + 0.08 * sstep(0.80, 0.92, p);
    arms[0].rotation.z = open;
    arms[1].rotation.z = -open;
    spark.position.set(scissors.position.x - 0.30, CUT_Y + 0.10, 0.72);
    spark.intensity = 1.2 * enter * (1 - wd) + 5 * Math.exp(-Math.pow((p - 0.745) / 0.018, 2));
    renderer.render(scene, camera);
  };
  const resize = () => {
    const w = host.clientWidth || 1;
    const h = host.clientHeight || 1;
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.setSize(w, h, false);
    aspect = w / h;
    camera.aspect = aspect;
    apply();
  };
  const ro = new ResizeObserver(resize);
  ro.observe(host);
  resize();
  return {
    setProgress: v => {
      progress = v;
      apply();
    },
    dispose: () => {
      ro.disconnect();
      scene.traverse(o => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => m.dispose());
      });
      envTex.dispose();
      scene.environment = null;
      renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    }
  };
}

/* ── hair shaders: camera-facing ribbons, Kajiya–Kay dual highlight ────── */

const HAIR_VERT = /* glsl */`
attribute vec3 aTangent;
attribute float aSide;
attribute float aU;
attribute float aWidth;
attribute vec3 aColor;
attribute vec2 aRand;
#ifdef CUT
attribute vec3 aPivot;
attribute float aDelay;
attribute vec2 aSpin;
#endif
uniform float uGather;
uniform float uSwayAmp;
uniform float uSwayPhase;
uniform float uLift;
uniform float uCutT;
varying vec3 vColor;
varying vec3 vT;
varying vec3 vN;
varying vec3 vWorld;
varying float vU;
varying float vSide;
varying vec2 vRand;

mat3 rotZ(float a){ float c = cos(a), s = sin(a); return mat3(c, -s, 0., s, c, 0., 0., 0., 1.); }
mat3 rotX(float a){ float c = cos(a), s = sin(a); return mat3(1., 0., 0., 0., c, -s, 0., s, c); }

vec3 gatherP(vec3 p, float g){
  float wy = 1.0 - smoothstep(-0.02, 0.42, p.y);
  float k = g * wy;
  p.x = mix(p.x, p.x * 0.48, k);
  p.z = mix(p.z, 0.40 + (p.z - 0.40) * 0.55, k);
  return p;
}

void main(){
  vec3 p = position;
  vec3 T = aTangent;

  float swPh = aRand.x * 6.2831 + uSwayPhase;
  float sw = uSwayAmp * aU * aU;
  p.x += sw * sin(swPh);
  p.z += sw * 0.5 * cos(swPh * 0.8);
  p = gatherP(p, uGather);

#ifdef CUT
  vec3 piv = gatherP(aPivot, uGather);
  float t = clamp((uCutT - aDelay) / max(0.15, 1.0 - aDelay), 0.0, 1.0);
  float e = t * t;
  float wob = sin(t * 8.0 + aRand.y * 12.0);
  mat3 R = rotZ(aSpin.x * (0.25 * t + 0.65 * e) + wob * 0.05 * t) * rotX(aSpin.y * (0.15 * t + 0.65 * e));
  p = piv + R * (p - piv);
  p.y -= 2.9 * e + 0.35 * t;
  p.x += aSpin.y * 0.30 * e + wob * 0.02 * t;
  p.z += aSpin.x * 0.08 * e;
  T = R * T;
#else
  p.y += uLift * smoothstep(0.45, 1.0, aU);
#endif

  T = normalize(T);
  vec3 toCam = normalize(cameraPosition - p);
  vec3 S = normalize(cross(T, toCam));
  vec3 world = p + S * (aWidth * aSide);
  vN = normalize(cross(S, T));
  vT = T;
  vU = aU;
  vColor = aColor;
  vRand = aRand;
  vWorld = world;
  vSide = aSide;
  gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
}
`;
const HAIR_FRAG = /* glsl */`
varying vec3 vColor;
varying vec3 vT;
varying vec3 vN;
varying vec3 vWorld;
varying float vU;
varying float vSide;
varying vec2 vRand;

float strandSpec(vec3 T, vec3 V, vec3 L, float ex){
  vec3 H = normalize(L + V);
  float TdH = dot(T, H);
  float s = sqrt(max(0.0, 1.0 - TdH * TdH));
  return pow(s, ex);
}

void main(){
  vec3 V = normalize(cameraPosition - vWorld);
  vec3 T = normalize(vT);
  vec3 N = normalize(vN);
  if (!gl_FrontFacing) N = -N;

  vec3 base = vColor;
  base *= 0.30 + 0.70 * smoothstep(0.0, 0.30, vU);
  base = mix(base, base * vec3(1.18, 1.06, 0.94), 0.28 * smoothstep(0.55, 1.0, vU));

  vec3 L1 = normalize(vec3(0.55, 0.75, 0.55));  vec3 C1 = vec3(1.0, 0.94, 0.84) * 1.25;
  vec3 L2 = normalize(vec3(-0.70, 0.35, -0.55)); vec3 C2 = vec3(1.0, 0.70, 0.58) * 1.05;
  vec3 L3 = normalize(vec3(-0.08, 0.18, 0.98));  vec3 C3 = vec3(0.92, 0.87, 0.82) * 0.30;

  vec3 col = vec3(0.0);
  #define HAIR_DIFF(Ld) (pow(sqrt(max(0.0, 1.0 - dot(T, Ld) * dot(T, Ld))), 1.3) * (0.32 + 0.68 * clamp(dot(N, Ld) * 0.5 + 0.5, 0.0, 1.0)))
  col += base * C1 * HAIR_DIFF(L1);
  col += base * C2 * HAIR_DIFF(L2);
  col += base * C3 * HAIR_DIFF(L3);
  col += base * mix(vec3(0.055, 0.05, 0.055), vec3(0.17, 0.16, 0.165), N.y * 0.5 + 0.5);

  float jitter = vRand.y - 0.5;
  vec3 T1 = normalize(T + N * (-0.10 + jitter * 0.08));
  vec3 T2 = normalize(T + N * ( 0.10 + jitter * 0.10));
  float sparkle = 0.65 + 0.55 * fract(vRand.y * 37.13);
  col += vec3(1.0, 0.93, 0.80) * strandSpec(T1, V, L1, 240.0) * 0.70 * sparkle;
  col += (base * 1.6 + vec3(0.02)) * strandSpec(T2, V, L1, 60.0);
  col += vec3(1.0, 0.80, 0.66) * strandSpec(T1, V, L2, 180.0) * 0.55 * sparkle;

  // inner layers of the fall sit deeper in z — darken them for volume
  float occ = mix(1.0, 0.55 + 0.45 * smoothstep(0.05, 0.42, vWorld.z), 1.0 - smoothstep(0.30, 0.80, vWorld.y));
  col *= occ;

  col *= 1.05;
  col = (col * (2.51 * col + 0.03)) / (col * (2.43 * col + 0.59) + 0.14);
  col = clamp(col, 0.0, 1.0);
  col = pow(col, vec3(0.4545));

  float alpha = 1.0 - smoothstep(0.55, 1.0, abs(vSide)) * 0.6;
  gl_FragColor = vec4(col, alpha);
}
`;

/** A gradient equirect map so the steel reads as metal without an HDR file. */
function studioEnvironment(THREE) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 256;
  const g = c.getContext('2d');
  const grad = g.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, '#0d0d0d');
  grad.addColorStop(0.42, '#3a3a3c');
  grad.addColorStop(0.5, '#f2ede6');
  grad.addColorStop(0.58, '#2a2a2c');
  grad.addColorStop(1, '#050505');
  g.fillStyle = grad;
  g.fillRect(0, 0, 512, 256);
  g.fillStyle = 'rgba(255,250,242,1)';
  g.fillRect(276, 88, 170, 34);
  g.fillStyle = 'rgba(255,255,255,.7)';
  g.fillRect(60, 104, 120, 14);
  g.fillStyle = 'rgba(140,28,43,.55)';
  g.fillRect(40, 150, 90, 16);
  const tex = new THREE.CanvasTexture(c);
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
Object.assign(__ds_scope, { HaircutScene });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/HaircutScene.jsx", error: String((e && e.message) || e) }); }

// components/display/PhotoFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Every image on every surface goes through this. With no `src` it renders an honest,
 * labelled placeholder instead of a decorative fake — the salon's photography comes
 * from Instagram and must be supplied, never invented.
 */
function PhotoFrame({
  src,
  alt = '',
  ratio = '4 / 5',
  label = 'Photograph',
  caption,
  overlay = false,
  grayscale = false,
  radius = 'var(--radius-image)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      position: 'relative',
      width: '100%',
      height: ratio === 'auto' ? '100%' : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: ratio === 'auto' ? undefined : ratio,
      height: ratio === 'auto' ? '100%' : undefined,
      overflow: 'hidden',
      borderRadius: radius,
      background: 'var(--surface-inset)',
      boxShadow: src ? 'none' : 'inset 0 0 0 1px var(--line-hairline)'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: grayscale ? 'grayscale(1) contrast(1.05)' : 'none'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      gap: 10,
      alignContent: 'center',
      color: 'var(--text-disabled)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "sparkles",
    size: 22,
    strokeWidth: 1
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--overline-size)',
      letterSpacing: 'var(--overline-track)',
      textTransform: 'uppercase'
    }
  }, label)), overlay && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  })), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 12,
      fontSize: 'var(--caption-size)',
      color: 'var(--text-muted)',
      letterSpacing: '0.02em'
    }
  }, caption));
}
Object.assign(__ds_scope, { PhotoFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/PhotoFrame.jsx", error: String((e && e.message) || e) }); }

// components/display/Rating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Rating({
  value = 5,
  count,
  size = 14,
  label,
  onLight = false,
  style,
  ...rest
}) {
  const full = Math.round(value);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 3
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: i < full ? 'var(--accent-400)' : onLight ? 'rgba(17,17,17,.18)' : 'var(--text-disabled)',
      fill: 'currentColor'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star",
    size: size,
    strokeWidth: i < full ? 1.2 : 1,
    style: i < full ? {
      fill: 'currentColor'
    } : undefined
  })))), (count || label) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--caption-size)',
      color: onLight ? 'var(--text-on-light-muted)' : 'var(--text-muted)',
      letterSpacing: '0.04em'
    }
  }, label || `${value.toFixed(1)} · ${count} reviews`));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Rating.jsx", error: String((e && e.message) || e) }); }

// components/display/ServiceRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A menu line: service name, dotted leader, price. Lifted straight from the salon's
 * printed pricing list — the leader dots are a brand signature, not decoration.
 */
function ServiceRow({
  name,
  price,
  note,
  from = false,
  onLight = false,
  dense = false,
  style,
  ...rest
}) {
  const ink = onLight ? 'var(--text-on-light)' : 'var(--text-primary)';
  const dim = onLight ? 'var(--text-on-light-muted)' : 'var(--text-muted)';
  const dot = onLight ? 'rgba(17,17,17,.28)' : 'rgba(250,248,245,.26)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      padding: dense ? '7px 0' : '11px 0',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-size)',
      fontWeight: 'var(--weight-medium)',
      color: ink,
      letterSpacing: '0.01em',
      whiteSpace: 'nowrap'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 1,
      minWidth: 24,
      height: '1em',
      borderBottom: `1px dotted ${dot}`,
      transform: 'translateY(-.28em)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--price-size)',
      fontWeight: 'var(--weight-semibold)',
      color: onLight ? 'var(--accent-700)' : 'var(--accent-300)',
      whiteSpace: 'nowrap',
      fontVariantNumeric: 'tabular-nums'
    }
  }, from && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: dim,
      marginRight: 6
    }
  }, "from"), price)), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--caption-size)',
      color: dim,
      letterSpacing: '0.01em'
    }
  }, note));
}
Object.assign(__ds_scope, { ServiceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ServiceRow.jsx", error: String((e && e.message) || e) }); }

// components/display/StylistCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Stylist highlight — portrait, name, specialty, handle. The Instagram "highlights" pattern. */
function StylistCard({
  name,
  role,
  specialties = [],
  handle,
  photo,
  years,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      transition: 'var(--transition-transform)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PhotoFrame, {
    src: photo,
    alt: name,
    ratio: "4 / 5",
    label: `${name || 'Stylist'} portrait`,
    style: {
      transform: hover && onClick ? 'scale(1.02)' : 'scale(1)',
      transition: 'var(--transition-transform)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--h3-size)',
      letterSpacing: '0.10em',
      textTransform: 'uppercase',
      color: hover && onClick ? 'var(--accent-200)' : 'var(--text-primary)',
      transition: 'var(--transition-color)'
    }
  }, name), role && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 'var(--caption-size)',
      letterSpacing: 'var(--overline-track)',
      textTransform: 'uppercase',
      color: 'var(--accent-400)'
    }
  }, role), specialties.length > 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      fontSize: 'var(--body-sm-size)',
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      fontWeight: 'var(--weight-light)'
    }
  }, specialties.join(' · ')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      marginTop: 16,
      alignItems: 'center'
    }
  }, handle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 'var(--caption-size)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "sparkles",
    size: 13,
    strokeWidth: 1.4
  }), handle), years && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--caption-size)',
      color: 'var(--text-muted)'
    }
  }, years))));
}
Object.assign(__ds_scope, { StylistCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StylistCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Testimonial({
  quote,
  author,
  meta,
  rating,
  onLight = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("blockquote", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      ...style
    }
  }, rest), rating != null && /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    onLight: onLight
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-light)',
      fontStyle: 'italic',
      fontSize: 'var(--h3-size)',
      lineHeight: 1.5,
      letterSpacing: '0.01em',
      textWrap: 'pretty',
      color: onLight ? 'var(--text-on-light)' : 'var(--text-primary)'
    }
  }, quote), /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 'var(--caption-size)',
      letterSpacing: 'var(--label-track)',
      textTransform: 'uppercase',
      color: onLight ? 'var(--text-on-light-muted)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 1,
      background: 'var(--accent-500)'
    }
  }), /*#__PURE__*/React.createElement("span", null, author), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.6
    }
  }, "\xB7 ", meta)));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/display/WorkTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** One square in the work grid — the Instagram feed pattern, credited to a stylist on hover. */
function WorkTile({
  photo,
  service,
  stylist,
  ratio = '1 / 1',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.PhotoFrame, {
    src: photo,
    ratio: ratio,
    label: service || 'Work',
    radius: "var(--radius-none)",
    style: {
      transform: hover ? 'scale(1.03)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out-soft)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 18,
      background: 'var(--scrim-bottom)',
      opacity: hover ? 1 : 0,
      transition: 'opacity var(--dur-base) var(--ease-standard)',
      pointerEvents: 'none'
    }
  }, service && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--bone-50)'
    }
  }, service), stylist && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 4,
      fontSize: 'var(--caption-size)',
      letterSpacing: '0.10em',
      textTransform: 'uppercase',
      color: 'var(--accent-300)'
    }
  }, stylist)));
}
Object.assign(__ds_scope, { WorkTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/WorkTile.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  description,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 'var(--z-modal)',
      display: 'grid',
      placeItems: 'center',
      padding: 24,
      background: 'var(--black-overlay)',
      backdropFilter: 'blur(6px)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-modal)',
      padding: 36,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--h2-size)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      fontSize: 'var(--body-sm-size)',
      lineHeight: 1.7,
      color: 'var(--text-secondary)'
    }
  }, description)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    onClick: onClose,
    size: "sm"
  })), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      gap: 12,
      justifyContent: 'flex-end'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EmptyState({
  icon = 'calendar',
  title,
  message,
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      placeItems: 'center',
      gap: 14,
      textAlign: 'center',
      padding: '64px 24px',
      border: '1px dashed var(--border-default)',
      borderRadius: 'var(--radius-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-disabled)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 26,
    strokeWidth: 1
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--h3-size)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, title), message && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 340,
      fontSize: 'var(--body-sm-size)',
      color: 'var(--text-muted)',
      lineHeight: 1.7
    }
  }, message), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  success: {
    icon: 'circle-check',
    color: 'var(--green-500)'
  },
  info: {
    icon: 'sparkles',
    color: 'var(--accent-400)'
  },
  error: {
    icon: 'x',
    color: 'var(--red-500)'
  }
};
function Toast({
  title,
  message,
  tone = 'success',
  onClose,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      minWidth: 320,
      maxWidth: 420,
      padding: '18px 18px 18px 20px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-lg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.color,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 18,
    strokeWidth: 1.5
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--body-sm-size)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.02em'
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 'var(--caption-size)',
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, message)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    size: "sm",
    onClick: onClose
  }));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked = false,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: '0 0 auto',
      marginTop: 2,
      display: 'grid',
      placeItems: 'center',
      border: `1px solid ${checked ? 'var(--accent-500)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--accent-500)' : 'transparent',
      color: 'var(--text-on-accent)',
      borderRadius: 'var(--radius-xs)',
      transition: 'var(--transition-color)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12,
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--body-sm-size)',
      color: 'var(--text-primary)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--caption-size)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  icon,
  type = 'text',
  value,
  onChange,
  placeholder,
  disabled = false,
  required = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  const borderColor = error ? 'var(--red-500)' : focus ? 'var(--accent-400)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontSize: 'var(--label-size)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--label-track)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-400)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      color: focus ? 'var(--accent-400)' : 'var(--text-muted)',
      transition: 'var(--transition-color)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      padding: icon ? '14px 16px 14px 42px' : '14px 16px',
      background: disabled ? 'var(--surface-inset)' : 'var(--black-void)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-input)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-size)',
      outline: 'none',
      transition: 'var(--transition-color)',
      opacity: disabled ? 0.5 : 1
    }
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--caption-size)',
      color: error ? 'var(--red-500)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Vertical radio list. Used for stylist choice and appointment time in the booking flow. */
function RadioGroup({
  label,
  name,
  options = [],
  value,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const gid = React.useId();
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    "aria-label": label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--label-size)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--label-track)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 2
    }
  }, label), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    const on = value === opt.value;
    return /*#__PURE__*/React.createElement("label", {
      key: opt.value,
      htmlFor: `${gid}-${opt.value}`,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '14px 16px',
        border: `1px solid ${on ? 'var(--accent-500)' : 'var(--border-default)'}`,
        background: on ? 'rgba(140,28,43,.09)' : 'transparent',
        borderRadius: 'var(--radius-xs)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'var(--transition-color)'
      }
    }, /*#__PURE__*/React.createElement("input", {
      id: `${gid}-${opt.value}`,
      type: "radio",
      name: name || gid,
      value: opt.value,
      checked: on,
      onChange: () => onChange && onChange(opt.value),
      disabled: disabled,
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 16,
        height: 16,
        borderRadius: '50%',
        flex: '0 0 auto',
        display: 'grid',
        placeItems: 'center',
        border: `1px solid ${on ? 'var(--accent-500)' : 'var(--border-strong)'}`
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: 'var(--accent-500)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 'var(--body-sm-size)',
        color: 'var(--text-primary)'
      }
    }, opt.label), opt.meta && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--caption-size)',
        color: 'var(--text-muted)'
      }
    }, opt.meta));
  }));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select…',
  disabled = false,
  error,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontSize: 'var(--label-size)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--label-track)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      padding: '14px 42px 14px 16px',
      appearance: 'none',
      background: disabled ? 'var(--surface-inset)' : 'var(--black-void)',
      border: `1px solid ${error ? 'var(--red-500)' : focus ? 'var(--accent-400)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-input)',
      color: value ? 'var(--text-primary)' : 'var(--text-muted)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-size)',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-color)'
    }
  }, rest), /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 22,
      padding: 3,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--accent-500)' : 'var(--surface-inset)',
      border: `1px solid ${checked ? 'var(--accent-500)' : 'var(--border-strong)'}`,
      display: 'flex',
      justifyContent: checked ? 'flex-end' : 'flex-start',
      transition: 'background-color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: checked ? 'var(--bone-50)' : 'var(--greige-400)',
      transition: 'var(--transition-transform)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--body-sm-size)',
      color: 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  value,
  onChange,
  placeholder,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontSize: 'var(--label-size)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--label-track)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: uid,
    rows: rows,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      padding: '14px 16px',
      resize: 'vertical',
      background: disabled ? 'var(--surface-inset)' : 'var(--black-void)',
      border: `1px solid ${error ? 'var(--red-500)' : focus ? 'var(--accent-400)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-input)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-size)',
      lineHeight: 1.6,
      outline: 'none',
      transition: 'var(--transition-color)'
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--caption-size)',
      color: error ? 'var(--red-500)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Footer({
  address,
  phone,
  instagram,
  hours = [],
  columns = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      position: 'relative',
      zIndex: 1,
      background: 'var(--black-void)',
      borderTop: '1px solid var(--border-default)',
      padding: '80px var(--gutter-desktop) 40px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "stacked",
    size: "md"
  }), address && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 0',
      fontSize: 'var(--body-sm-size)',
      lineHeight: 1.8,
      color: 'var(--text-muted)'
    }
  }, address), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      marginTop: 20
    }
  }, phone && /*#__PURE__*/React.createElement("a", {
    href: `tel:${phone.replace(/[^0-9]/g, '')}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--body-sm-size)',
      borderBottom: 'none',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 14
  }), phone)), instagram && /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 12,
      fontSize: 'var(--body-sm-size)',
      borderBottom: 'none',
      color: 'var(--accent-300)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "external-link",
    size: 14
  }), instagram)), hours.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 20px',
      fontSize: 'var(--overline-size)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--overline-track)',
      textTransform: 'uppercase',
      color: 'var(--text-primary)'
    }
  }, "Hours"), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      rowGap: 8,
      columnGap: 16,
      fontSize: 'var(--body-sm-size)'
    }
  }, hours.map(h => /*#__PURE__*/React.createElement(React.Fragment, {
    key: h.day
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      color: 'var(--text-muted)'
    }
  }, h.day), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      color: 'var(--text-secondary)',
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums'
    }
  }, h.time))))), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 20px',
      fontSize: 'var(--overline-size)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--overline-track)',
      textTransform: 'uppercase',
      color: 'var(--text-primary)'
    }
  }, c.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 'var(--body-sm-size)',
      color: 'var(--text-muted)',
      borderBottom: 'none'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '64px auto 0',
      paddingTop: 24,
      borderTop: '1px solid var(--line-faint)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--caption-size)',
      color: 'var(--text-disabled)',
      letterSpacing: '0.04em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " The Hair Studio"), /*#__PURE__*/React.createElement("span", null, "Fontana, California")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Fixed top bar. Transparent over a hero, solid black once scrolled — never a border until then. */
function NavBar({
  links = [],
  active,
  onNavigate,
  cta = 'Book now',
  onCta,
  scrolled = false,
  markSrc,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 'var(--z-header)',
      height: 'var(--header-height)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 var(--gutter-desktop)',
      gap: 40,
      background: scrolled ? 'rgba(11,11,11,.86)' : 'transparent',
      backdropFilter: scrolled ? 'var(--blur-glass)' : 'none',
      WebkitBackdropFilter: scrolled ? 'var(--blur-glass)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'var(--border-default)' : 'transparent'}`,
      transition: 'background-color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(links[0]?.id);
    },
    style: {
      borderBottom: 'none',
      display: 'flex',
      alignItems: 'center'
    }
  }, markSrc ? /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "The Hair Studio",
    style: {
      height: 40,
      width: 40
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "type",
    size: "sm"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 34,
      marginLeft: 'auto',
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement(NavLink, _extends({
    key: l.id
  }, l, {
    active: active === l.id,
    onClick: () => onNavigate && onNavigate(l.id)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "phone",
    label: "Call the salon",
    variant: "ghost",
    size: "sm"
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: scrolled ? 'primary' : 'light',
    onClick: onCta
  }, cta)));
}
function NavLink({
  label,
  active,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'none',
      border: 'none',
      padding: '4px 0',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: active ? 'var(--text-primary)' : hover ? 'var(--accent-300)' : 'var(--text-muted)',
      borderBottom: `1px solid ${active ? 'var(--accent-500)' : 'transparent'}`,
      transition: 'var(--transition-color)'
    }
  }, label);
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  align = 'left',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 32,
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      borderBottom: '1px solid var(--border-default)',
      ...style
    }
  }, rest), items.map(it => {
    const item = typeof it === 'string' ? {
      id: it,
      label: it
    } : it;
    const on = value === item.id;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(item.id),
      style: {
        background: 'none',
        border: 'none',
        padding: '0 0 16px',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: on ? 'var(--text-primary)' : 'var(--text-muted)',
        boxShadow: on ? 'inset 0 -1px 0 var(--accent-500)' : 'none',
        transition: 'var(--transition-color)'
      }
    }, item.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/Booking.jsx
try { (() => {
const {
  NavBar,
  Button,
  IconButton,
  Card,
  Input,
  Textarea,
  Checkbox,
  RadioGroup,
  SectionHeading,
  ServiceRow,
  Badge,
  Divider,
  Icon,
  Dialog,
  Toast,
  Tag,
  PhotoFrame,
  EmptyState
} = window.TheHairStudioDesignSystem_03d078;
const STEPS = ['Service', 'Stylist', 'Time', 'Details'];
const DAYS = [{
  id: 'thu',
  label: 'Thu 14',
  sub: 'Aug'
}, {
  id: 'fri',
  label: 'Fri 15',
  sub: 'Aug'
}, {
  id: 'sat',
  label: 'Sat 16',
  sub: 'Aug'
}, {
  id: 'mon',
  label: 'Mon 18',
  sub: 'Aug'
}, {
  id: 'tue',
  label: 'Tue 19',
  sub: 'Aug'
}];
const SLOTS = {
  thu: ['9:00', '10:30', '13:00', '15:30'],
  fri: ['9:30', '11:00', '14:00'],
  sat: ['8:00', '9:30', '11:00', '12:30', '14:00'],
  mon: [],
  tue: ['10:00', '13:30', '16:00']
};
function Stepper({
  step
}) {
  return /*#__PURE__*/React.createElement("ol", {
    style: {
      display: 'flex',
      gap: 0,
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, STEPS.map((s, i) => {
    const done = i < step,
      now = i === step;
    return /*#__PURE__*/React.createElement("li", {
      key: s,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        paddingRight: 20
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        display: 'grid',
        placeItems: 'center',
        flex: '0 0 auto',
        border: `1px solid ${done || now ? 'var(--accent-500)' : 'var(--border-default)'}`,
        background: done ? 'var(--accent-500)' : 'transparent',
        color: done ? 'var(--text-on-accent)' : now ? 'var(--accent-300)' : 'var(--text-disabled)',
        fontSize: 11,
        fontWeight: 600
      }
    }, done ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 12,
      strokeWidth: 2.5
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: now ? 'var(--text-primary)' : done ? 'var(--text-secondary)' : 'var(--text-disabled)'
      }
    }, s), i < STEPS.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 1,
        background: 'var(--line-hairline)',
        marginLeft: 8
      }
    }));
  }));
}
function Summary({
  service,
  stylist,
  day,
  slot
}) {
  const d = DAYS.find(x => x.id === day);
  const rows = [{
    label: 'Service',
    value: service ? `${service.name} · ${service.price}+` : '—'
  }, {
    label: 'Stylist',
    value: stylist ? stylist.label : '—'
  }, {
    label: 'When',
    value: d && slot ? `${d.label} ${d.sub} · ${slot}` : '—'
  }];
  return /*#__PURE__*/React.createElement(Card, {
    tone: "void",
    padding: 28,
    style: {
      position: 'sticky',
      top: 108
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--overline-size)',
      fontWeight: 600,
      letterSpacing: 'var(--overline-track)',
      textTransform: 'uppercase',
      color: 'var(--accent-400)'
    }
  }, "Your appointment"), /*#__PURE__*/React.createElement(Divider, {
    spacing: 20
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--label-size)',
      letterSpacing: 'var(--label-track)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 5
    }
  }, r.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--body-size)',
      color: r.value === '—' ? 'var(--text-disabled)' : 'var(--text-primary)'
    }
  }, r.value)))), /*#__PURE__*/React.createElement(Divider, {
    spacing: 20
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--caption-size)',
      lineHeight: 1.65,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-400)'
    }
  }, "*"), " Starting price for bra length or shorter. Length and thickness are extra \u2014 your stylist confirms in the chair."));
}
function BookingApp() {
  const [step, setStep] = React.useState(0);
  const [service, setService] = React.useState(null);
  const [group, setGroup] = React.useState('Color Services');
  const [stylist, setStylist] = React.useState(null);
  const [day, setDay] = React.useState('thu');
  const [slot, setSlot] = React.useState(null);
  const [done, setDone] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const menu = window.THS.menu;
  const stylistOptions = [{
    value: 'any',
    label: 'First available',
    meta: 'Soonest opening'
  }, ...window.THS.stylists.map(s => ({
    value: s.name.toLowerCase(),
    label: s.name,
    meta: s.role
  }))];
  const canNext = [Boolean(service), Boolean(stylist), Boolean(slot), true][step];
  const confirm = () => {
    setDone(true);
    setToast(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--black-ink)'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    links: window.THS.nav,
    active: "visit",
    cta: "Call instead",
    scrolled: true,
    onCta: () => {}
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '56px var(--gutter-desktop) 96px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Booking",
    title: "Reserve your chair"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 24,
      padding: '14px 18px',
      border: '1px solid var(--border-accent)',
      background: 'rgba(140,28,43,.10)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-300)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "external-link",
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--body-sm-size)',
      color: 'var(--text-secondary)'
    }
  }, "Design reference only. Live bookings are taken on ", /*#__PURE__*/React.createElement("a", {
    href: window.THS.studio.booking,
    target: "_blank",
    rel: "noopener"
  }, "Booker"), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      paddingBottom: 32,
      borderBottom: '1px solid var(--line-faint)'
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    step: step
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 340px',
      gap: 56,
      marginTop: 44,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, step === 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 28,
      flexWrap: 'wrap'
    }
  }, menu.map(g => /*#__PURE__*/React.createElement(Tag, {
    key: g.group,
    selected: group === g.group,
    onClick: () => setGroup(g.group)
  }, g.group))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, menu.find(g => g.group === group).items.map(it => {
    const on = service && service.name === it.name;
    return /*#__PURE__*/React.createElement("div", {
      key: it.name,
      onClick: () => setService(it),
      style: {
        padding: '4px 18px',
        cursor: 'pointer',
        border: `1px solid ${on ? 'var(--accent-500)' : 'transparent'}`,
        background: on ? 'rgba(140,28,43,.09)' : 'transparent',
        transition: 'var(--transition-color)'
      }
    }, /*#__PURE__*/React.createElement(ServiceRow, {
      name: it.name,
      price: it.price,
      from: true
    }));
  }))), step === 1 && /*#__PURE__*/React.createElement(RadioGroup, {
    style: {
      maxHeight: 520,
      overflowY: 'auto',
      paddingRight: 8
    },
    label: "Who is cutting?",
    value: stylist && stylist.value,
    onChange: v => setStylist(stylistOptions.find(o => o.value === v)),
    options: stylistOptions
  }), step === 2 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 32
    }
  }, DAYS.map(d => {
    const on = day === d.id;
    return /*#__PURE__*/React.createElement("button", {
      key: d.id,
      onClick: () => {
        setDay(d.id);
        setSlot(null);
      },
      style: {
        flex: 1,
        padding: '16px 8px',
        background: on ? 'var(--surface-card)' : 'transparent',
        border: `1px solid ${on ? 'var(--accent-500)' : 'var(--border-default)'}`,
        cursor: 'pointer',
        color: on ? 'var(--text-primary)' : 'var(--text-muted)',
        fontFamily: 'var(--font-sans)',
        transition: 'var(--transition-color)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 600,
        letterSpacing: '0.04em'
      }
    }, d.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        marginTop: 4,
        opacity: 0.6
      }
    }, d.sub));
  })), SLOTS[day].length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
    icon: "calendar",
    title: "Closed that day",
    message: "The studio is closed Mondays. Pick another date."
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 10
    }
  }, SLOTS[day].map(t => {
    const on = slot === t;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => setSlot(t),
      style: {
        padding: '16px 0',
        background: on ? 'var(--accent-500)' : 'transparent',
        border: `1px solid ${on ? 'var(--accent-500)' : 'var(--border-default)'}`,
        color: on ? 'var(--text-on-accent)' : 'var(--text-secondary)',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        fontWeight: 600,
        letterSpacing: '0.06em',
        fontVariantNumeric: 'tabular-nums',
        transition: 'var(--transition-color)'
      }
    }, t);
  }))), step === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 20,
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "First and last",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    icon: "phone",
    placeholder: "(909) 000-0000",
    required: true,
    hint: "We text a reminder the day before."
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    icon: "mail",
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Anything we should know?",
    rows: 3,
    placeholder: "Previous colour, allergies, inspiration photos\u2026"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Text me a reminder",
    description: "The day before, once.",
    checked: true,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I understand the 24-hour cancellation notice",
    checked: true,
    onChange: () => {}
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 44,
      alignItems: 'center'
    }
  }, step > 0 && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "arrow-left",
    iconPosition: "left",
    onClick: () => setStep(step - 1)
  }, "Back"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), step < 3 ? /*#__PURE__*/React.createElement(Button, {
    icon: "arrow-right",
    disabled: !canNext,
    onClick: () => setStep(step + 1)
  }, "Continue") : /*#__PURE__*/React.createElement(Button, {
    icon: "check",
    onClick: confirm
  }, "Confirm booking"))), /*#__PURE__*/React.createElement(Summary, {
    service: service,
    stylist: stylist,
    day: day,
    slot: slot
  }))), /*#__PURE__*/React.createElement(Dialog, {
    open: done,
    title: "You're booked",
    description: service && slot ? `${service.name} with ${stylist ? stylist.label : 'first available'} — ${(DAYS.find(d => d.id === day) || {}).label} August at ${slot}.` : '',
    onClose: () => setDone(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setDone(false)
    }, "Close"), /*#__PURE__*/React.createElement(Button, {
      icon: "calendar",
      iconPosition: "left"
    }, "Add to calendar"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14,
      padding: '20px 22px',
      background: 'var(--black-void)',
      border: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 15
  }), "16923 Sierra Lakes Pkwy, Unit 107, Fontana"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15
  }), "(909) 365-4443"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      fontSize: 13,
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 15
  }), "Starting price shown. Length and thickness are extra."))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 28,
      bottom: 28,
      zIndex: 500
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Appointment confirmed",
    message: "We texted the details to your phone.",
    onClose: () => setToast(false)
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(BookingApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/Booking.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/Posts.jsx
try { (() => {
const {
  Logo,
  ServiceRow,
  PhotoFrame,
  Divider,
  Badge,
  Icon,
  Rating
} = window.TheHairStudioDesignSystem_03d078;

/* 1080×1920 story and 1080×1080 feed posts, rendered at 0.28 / 0.34 scale for the grid. */

function Frame({
  w,
  h,
  scale,
  children,
  bg = 'var(--black-void)',
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12,
      justifyItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w * scale,
      height: h * scale,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--line-faint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: h,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: bg,
      position: 'relative'
    }
  }, children)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--text-disabled)'
    }
  }, label));
}
function StoryPricing() {
  const menu = window.THS.menu;
  return /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1920,
    scale: 0.28,
    label: "Story \xB7 1080\xD71920 \xB7 pricing"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--surface-inset)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(0,0,0,.86),rgba(0,0,0,.72))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: '120px 80px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 60,
      letterSpacing: '.34em',
      textIndent: '.34em',
      textTransform: 'uppercase',
      color: 'var(--bone-50)'
    }
  }, "The Hair"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 104,
      letterSpacing: '.2em',
      textIndent: '.2em',
      textTransform: 'uppercase',
      color: 'var(--bone-50)',
      marginTop: 8
    }
  }, "Studio"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34,
      fontSize: 30,
      fontWeight: 600,
      letterSpacing: '.3em',
      textTransform: 'uppercase',
      color: 'var(--accent-400)'
    }
  }, "Pricing list")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 70,
      background: 'var(--bone-100)',
      borderRadius: 26,
      padding: '54px 56px',
      flex: 1
    }
  }, menu.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: g.group,
    style: {
      marginTop: i ? 40 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 44,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: '#111',
      textAlign: 'center',
      marginBottom: 14
    }
  }, g.group), g.items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.name,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      padding: '9px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30,
      color: '#1a1a1a',
      whiteSpace: 'nowrap'
    }
  }, it.name), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      borderBottom: '2px dotted rgba(17,17,17,.32)',
      transform: 'translateY(-.3em)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30,
      fontWeight: 700,
      color: 'var(--accent-700)'
    }
  }, it.price))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      paddingTop: 22,
      borderTop: '1px solid rgba(17,17,17,.16)',
      fontSize: 23,
      lineHeight: 1.5,
      color: '#57503f',
      textAlign: 'center'
    }
  }, "*Starting prices are for bra length or shorter.", /*#__PURE__*/React.createElement("br", null), "Length and thickness are extra.")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 82,
      lineHeight: 1,
      color: 'var(--bone-50)'
    }
  }, "Book an appointment today"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      fontSize: 26,
      letterSpacing: '.1em',
      color: 'var(--accent-300)'
    }
  }, "16923 Sierra Lakes Pkwy Unit 107 \xB7 Fontana, CA"))));
}
function PostStylist() {
  const s = window.THS.stylists[0];
  return /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1080,
    scale: 0.34,
    label: "Feed \xB7 1080\xD71080 \xB7 stylist highlight"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inset)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--text-disabled)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18,
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 54,
    strokeWidth: 0.8
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      letterSpacing: '.22em',
      textTransform: 'uppercase'
    }
  }, "Stylist portrait"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '84px 66px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '.28em',
      textTransform: 'uppercase',
      color: 'var(--accent-400)'
    }
  }, "Stylist highlight"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 92,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--bone-50)',
      marginTop: 26
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 90,
      height: 2,
      background: 'var(--accent-500)',
      margin: '30px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      lineHeight: 1.6,
      fontWeight: 300,
      color: 'rgba(250,248,245,.72)'
    }
  }, s.role), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 46,
      fontSize: 24,
      letterSpacing: '.14em',
      color: 'var(--text-muted)'
    }
  }, s.handle))));
}
function PostQuote() {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1080,
    scale: 0.34,
    bg: "var(--bone-50)",
    label: "Feed \xB7 1080\xD71080 \xB7 mission"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: '110px 96px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 30,
      letterSpacing: '.34em',
      textIndent: '.34em',
      textTransform: 'uppercase',
      color: '#111'
    }
  }, "The Hair Studio"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontStyle: 'italic',
      fontSize: 58,
      lineHeight: 1.4,
      color: '#111'
    }
  }, window.THS.studio.mission), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      justifyContent: 'center',
      marginTop: 54
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 70,
      height: 1,
      background: 'var(--accent-500)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      background: 'var(--accent-500)',
      transform: 'rotate(45deg)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 70,
      height: 1,
      background: 'var(--accent-500)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: '#6E665C'
    }
  }, "11+ years \xB7 Fontana, California")));
}
function PostService() {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1080,
    scale: 0.34,
    label: "Feed \xB7 1080\xD71080 \xB7 service card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--surface-inset)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '0 76px 84px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '.28em',
      textTransform: 'uppercase',
      color: 'var(--accent-400)'
    }
  }, "Color services"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 104,
      letterSpacing: '.09em',
      textTransform: 'uppercase',
      color: 'var(--bone-50)',
      marginTop: 20
    }
  }, "Balayage"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 18,
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'rgba(250,248,245,.6)'
    }
  }, "From"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 56,
      fontWeight: 700,
      color: 'var(--accent-300)'
    }
  }, "$295")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      fontSize: 22,
      color: 'rgba(250,248,245,.5)'
    }
  }, "*Bra length or shorter. Length and thickness extra.")));
}
function Feed() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 3,
      width: 330
    }
  }, window.THS.work.slice(0, 9).map((w, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      aspectRatio: '1/1',
      background: 'var(--surface-inset)',
      boxShadow: 'inset 0 0 0 1px var(--line-faint)',
      display: 'grid',
      placeItems: 'center',
      padding: 8,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-disabled)'
    }
  }, w.service))));
}
function SocialKit() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 36,
      background: 'var(--black-ink)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 34,
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(StoryPricing, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(PostStylist, null), /*#__PURE__*/React.createElement(PostQuote, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(PostService, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Feed, null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--text-disabled)'
    }
  }, "Feed grid \xB7 3-up")))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(SocialKit, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/Posts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
const {
  NavBar,
  Footer,
  Button,
  SectionHeading,
  Divider,
  Logo
} = window.TheHairStudioDesignSystem_03d078;
function BookCta() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 1,
      background: 'var(--accent-500)',
      padding: '72px var(--gutter-desktop)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 52,
      lineHeight: 1,
      color: 'var(--text-on-accent)'
    }
  }, "Book an appointment today"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px auto 32px',
      maxWidth: 440,
      fontSize: 'var(--body-size)',
      lineHeight: 1.7,
      color: 'rgba(250,248,245,.72)'
    }
  }, window.THS.studio.phone, " \xB7 ", window.THS.studio.address.replace('\n', ', ')), /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    size: "lg",
    icon: "arrow-right",
    href: window.THS.studio.booking,
    target: "_blank",
    rel: "noopener"
  }, "Book on Booker"));
}
function PageHeader({
  overline,
  title,
  lede
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 1,
      background: 'var(--black-void)',
      padding: '140px var(--gutter-desktop) 72px',
      borderBottom: '1px solid var(--line-faint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: overline,
    title: title,
    lede: lede,
    level: 1
  })));
}
function App() {
  const [page, setPage] = React.useState('home');
  const [scrolled, setScrolled] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const ref = React.useRef(null);
  const go = id => {
    setPage(id);
    setProgress(0);
    if (ref.current) ref.current.scrollTop = 0;
  };
  const onScroll = e => {
    const y = e.target.scrollTop;
    setScrolled(y > 40);
    setProgress(Math.max(0, Math.min(1, y / (e.target.clientHeight * 0.72))));
  };
  const book = () => window.open(window.THS.studio.booking, '_blank');
  const pages = {
    home: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
      onBook: book,
      progress: progress
    }), /*#__PURE__*/React.createElement(MissionStrip, null), /*#__PURE__*/React.createElement(Menu, {
      onBook: book
    }), /*#__PURE__*/React.createElement(Stylists, {
      onBook: book,
      limit: 4,
      onViewAll: () => go('team')
    }), /*#__PURE__*/React.createElement(WorkGrid, null), /*#__PURE__*/React.createElement(Voices, null), /*#__PURE__*/React.createElement(BookCta, null)),
    services: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
      overline: "Pricing list",
      title: "Services",
      lede: "Starting prices for bra length or shorter."
    }), /*#__PURE__*/React.createElement(Menu, {
      onBook: book
    }), /*#__PURE__*/React.createElement(BookCta, null)),
    team: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
      overline: "Highlights",
      title: "Stylists",
      lede: "Eleven years of hands in the same room."
    }), /*#__PURE__*/React.createElement(Stylists, {
      onBook: book
    }), /*#__PURE__*/React.createElement(Voices, null)),
    work: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
      overline: "Recent work",
      title: "Work",
      lede: "Straight from the feed."
    }), /*#__PURE__*/React.createElement(WorkGrid, null), /*#__PURE__*/React.createElement(BookCta, null)),
    visit: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
      overline: "Visit",
      title: "Find us"
    }), /*#__PURE__*/React.createElement(VisitBlock, null), /*#__PURE__*/React.createElement(Menu, {
      compact: true,
      onBook: book
    }))
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onScroll: onScroll,
    style: {
      height: '100vh',
      overflowY: 'auto',
      background: 'var(--black-ink)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 200
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    links: window.THS.nav,
    active: page,
    onNavigate: go,
    onCta: book,
    scrolled: scrolled || page !== 'home'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'calc(var(--header-height) * -1)'
    }
  }, pages[page]), /*#__PURE__*/React.createElement(Footer, {
    address: window.THS.studio.address,
    phone: window.THS.studio.phone,
    instagram: window.THS.studio.instagram,
    hours: window.THS.hours,
    columns: [{
      title: 'Services',
      links: ['Haircuts & styling', 'Color services', 'Treatments & specials']
    }, {
      title: 'Studio',
      links: ['Our stylists', 'Recent work', 'Book online']
    }]
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DS = window.TheHairStudioDesignSystem_03d078;
const {
  SectionHeading,
  Button,
  Divider,
  PhotoFrame,
  Card,
  ServiceRow,
  StylistCard,
  WorkTile,
  Testimonial,
  Tag,
  Badge,
  Icon,
  Logo,
  Rating
} = DS;
const HaircutScene = DS.HaircutScene || (() => /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    inset: 0,
    background: 'var(--black-void)'
  }
}));
const HERO_SHADOW = '0 2px 30px rgba(0,0,0,.92), 0 1px 4px rgba(0,0,0,.9)';
const PAGE = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 var(--gutter-desktop)'
};
function Hero({
  onBook,
  progress = 0
}) {
  const s = window.THS.studio;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 760,
      display: 'grid',
      alignItems: 'center',
      background: 'var(--black-void)'
    }
  }, /*#__PURE__*/React.createElement(HaircutScene, {
    progress: progress,
    style: {
      position: 'fixed',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      width: '100%',
      padding: '104px var(--gutter-desktop) 56px',
      display: 'grid',
      justifyItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--overline-size)',
      fontWeight: 600,
      letterSpacing: 'var(--overline-track)',
      textTransform: 'uppercase',
      color: 'var(--accent-300)',
      textShadow: HERO_SHADOW
    }
  }, "Fontana, California \xB7 ", s.years, " in business"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '26px 0 0'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-white.png",
    alt: "The Hair Studio",
    style: {
      width: 250,
      height: 250,
      filter: 'drop-shadow(0 6px 40px rgba(0,0,0,.95)) drop-shadow(0 2px 6px rgba(0,0,0,.9))'
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      maxWidth: 560,
      fontSize: 'var(--body-lg-size)',
      lineHeight: 1.66,
      fontWeight: 300,
      color: 'var(--text-secondary)',
      textWrap: 'pretty',
      textShadow: HERO_SHADOW
    }
  }, "Our mission is to make everyone feel more beautiful and happier than when they walked in the door."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 34,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "light",
    icon: "arrow-right",
    onClick: onBook
  }, "Book an appointment"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    href: "#services"
  }, "See the menu"))));
}
function MissionStrip() {
  const s = window.THS.studio;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 1,
      background: 'var(--bone-100)',
      padding: 'var(--section-y) var(--gutter-desktop)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--overline-size)',
      fontWeight: 600,
      letterSpacing: 'var(--overline-track)',
      textTransform: 'uppercase',
      color: 'var(--accent-600)'
    }
  }, "Our mission"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '26px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontStyle: 'italic',
      fontSize: 34,
      lineHeight: 1.42,
      color: 'var(--text-on-light)',
      textWrap: 'pretty'
    }
  }, s.mission), /*#__PURE__*/React.createElement(Divider, {
    ornament: true,
    tone: "accent",
    spacing: 40,
    style: {
      maxWidth: 260,
      marginInline: 'auto'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--body-size)',
      lineHeight: 1.8,
      color: 'var(--text-on-light-muted)',
      maxWidth: 560,
      marginInline: 'auto'
    }
  }, "We have been colouring and cutting on Sierra Lakes Parkway for ", s.years, ". Same chairs, same hands, the same all-black room.")));
}
function Menu({
  compact = false,
  onBook
}) {
  const d = window.THS;
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      position: 'relative',
      zIndex: 1,
      background: 'var(--black-ink)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: PAGE
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Pricing list",
    title: "Services",
    lede: "Every price below is a starting price."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: compact ? '1fr' : 'repeat(3, 1fr)',
      gap: 56,
      marginTop: 56,
      alignItems: 'start'
    }
  }, d.menu.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.group
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 24,
      letterSpacing: '0.11em',
      textTransform: 'uppercase'
    }
  }, g.group), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--line-accent)',
      marginBottom: 10
    }
  }), g.items.map(it => /*#__PURE__*/React.createElement(ServiceRow, {
    key: it.name,
    name: it.name,
    price: it.price,
    from: true
  }))))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '56px 0 0',
      paddingTop: 24,
      borderTop: '1px solid var(--line-faint)',
      fontSize: 'var(--body-sm-size)',
      color: 'var(--text-muted)',
      letterSpacing: '0.02em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-400)'
    }
  }, "*"), " ", d.priceDisclaimer), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "arrow-right",
    onClick: onBook
  }, "Book a service"))));
}
function Stylists({
  onBook,
  limit,
  onViewAll
}) {
  const all = window.THS.stylists;
  const list = limit ? all.slice(0, limit) : all;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 1,
      background: 'var(--black-void)',
      padding: 'var(--section-y) 0',
      borderTop: '1px solid var(--line-faint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: PAGE
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Highlights",
    title: "The stylists",
    lede: `Thirteen chairs, each its own book. Pick the hands you want, or take the first available.`
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onBook
  }, "Book with a stylist")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 32,
      marginTop: 56
    }
  }, list.map(s => /*#__PURE__*/React.createElement(StylistCard, _extends({
    key: s.name
  }, s, {
    onClick: onBook
  })))), limit && all.length > limit && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "arrow-right",
    onClick: onViewAll
  }, "All ", all.length, " stylists"))));
}
function WorkGrid({
  filterable = true
}) {
  const [tab, setTab] = React.useState('All');
  const tags = ['All', 'Color', 'Cuts', 'Treatments'];
  const map = {
    Color: ['Balayage', 'Full highlights', 'Color correction', 'Root touch-up'],
    Cuts: ['Curtain bangs', 'Precision cut', 'Style / updo'],
    Treatments: ['Brazilian blowout']
  };
  const items = tab === 'All' ? window.THS.work : window.THS.work.filter(w => (map[tab] || []).includes(w.service));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 1,
      background: 'var(--black-ink)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: PAGE
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Recent work",
    title: "From the chair"
  }), filterable && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: tab === t,
    onClick: () => setTab(t)
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 2,
      marginTop: 48
    }
  }, items.map((w, i) => /*#__PURE__*/React.createElement(WorkTile, _extends({
    key: i
  }, w)))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 0',
      fontSize: 'var(--caption-size)',
      color: 'var(--text-disabled)'
    }
  }, "Grid mirrors the @_thehairstudio_ feed. Photography to be supplied by the salon.")));
}
function Voices() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 1,
      background: 'var(--bone-50)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAGE,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 72,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 48
    }
  }, window.THS.testimonials.map(t => /*#__PURE__*/React.createElement(Testimonial, _extends({
    key: t.author
  }, t, {
    onLight: true
  })))), /*#__PURE__*/React.createElement(PhotoFrame, {
    ratio: "4 / 5",
    label: "Client / detail shot"
  })));
}
function VisitBlock() {
  const s = window.THS.studio;
  const rows = [{
    icon: 'map-pin',
    label: 'Address',
    value: s.address
  }, {
    icon: 'phone',
    label: 'Phone',
    value: s.phone
  }, {
    icon: 'clock',
    label: 'Hours',
    value: window.THS.hours.map(h => `${h.day}  ${h.time}`).join('\n')
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 1,
      background: 'var(--black-void)',
      padding: 'var(--section-y) 0',
      borderTop: '1px solid var(--line-faint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAGE,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 72
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Visit",
    title: "Sierra Lakes Parkway",
    lede: "Free parking in the plaza. Walk-ins when the book allows \u2014 call first."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 28,
      marginTop: 48
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-400)',
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    size: 17,
    strokeWidth: 1.4
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--label-size)',
      fontWeight: 600,
      letterSpacing: 'var(--label-track)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 6
    }
  }, r.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--body-size)',
      lineHeight: 1.8,
      color: 'var(--text-secondary)',
      whiteSpace: 'pre-line'
    }
  }, r.value)))))), /*#__PURE__*/React.createElement(PhotoFrame, {
    ratio: "1 / 1",
    src: window.THS.photos.interior,
    alt: "Inside the studio"
  })));
}
Object.assign(window, {
  Hero,
  MissionStrip,
  Menu,
  Stylists,
  WorkGrid,
  Voices,
  VisitBlock,
  PAGE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* Content for the website kit.
   VERBATIM from the salon: pricing list, address, phone, hours, mission, years in business.
   Stylist names are the owner's own roster. Specialties are NOT yet supplied — do not invent them.
   Photography: only the salon interior has been supplied. Every other frame is a deliberate placeholder. */
window.THS = {
  nav: [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'services',
    label: 'Services'
  }, {
    id: 'team',
    label: 'Stylists'
  }, {
    id: 'work',
    label: 'Work'
  }, {
    id: 'visit',
    label: 'Visit'
  }],
  studio: {
    address: '16923 Sierra Lakes Pkwy, Unit 107\nFontana, CA 92336',
    phone: '(909) 365-4443',
    instagram: '@_thehairstudio_',
    booking: 'https://go.booker.com/location/TheHairStudio1/',
    years: '11+ years',
    mission: 'To make everyone feel beautiful and happier than when they walked in the door.'
  },
  hours: [{
    day: 'Monday',
    time: '9:00 – 4:00'
  }, {
    day: 'Tue – Fri',
    time: '9:00 – 5:30'
  }, {
    day: 'Saturday',
    time: '8:00 – 4:00'
  }, {
    day: 'Sunday',
    time: '9:00 – 4:00'
  }],
  menu: [{
    group: 'Haircuts & Styling',
    items: [{
      name: "Women's Haircut",
      price: '$75'
    }, {
      name: "Girls' Haircut",
      price: '$50'
    }, {
      name: "Men's Haircut",
      price: '$40'
    }, {
      name: 'Blowout',
      price: '$65'
    }, {
      name: 'Style / Updo',
      price: '$85'
    }]
  }, {
    group: 'Color Services',
    items: [{
      name: 'Root Touch-Up',
      price: '$110'
    }, {
      name: 'Full Highlights',
      price: '$285'
    }, {
      name: 'Full Hair Color',
      price: '$160'
    }, {
      name: 'Balayage',
      price: '$295'
    }]
  }, {
    group: 'Treatments & Specials',
    items: [{
      name: 'Deep Conditioning',
      price: '$30'
    }, {
      name: 'Brazilian Blowout',
      price: '$385'
    }, {
      name: 'Cut & Color Special',
      price: '$225'
    }]
  }],
  priceDisclaimer: 'Starting prices are for bra length or shorter. Length and thickness are extra. Hair length and density will be considered.',
  stylists: [{
    name: 'Angie',
    role: 'Owner'
  }, {
    name: 'Ashlynn',
    role: 'Stylist'
  }, {
    name: 'Ashley',
    role: 'Stylist'
  }, {
    name: 'Cindi',
    role: 'Stylist'
  }, {
    name: 'Melissa',
    role: 'Stylist'
  }, {
    name: 'Jade',
    role: 'Stylist'
  }, {
    name: 'Liliana',
    role: 'Stylist'
  }, {
    name: 'Stephanie',
    role: 'Stylist'
  }, {
    name: 'Malia',
    role: 'Stylist'
  }, {
    name: 'Crystal',
    role: 'Stylist'
  }, {
    name: 'Lorne',
    role: 'Stylist'
  }, {
    name: 'Jasmine',
    role: 'Stylist'
  }, {
    name: 'Anne',
    role: 'Stylist'
  }].map(s => ({
    ...s,
    handle: '@_thehairstudio_'
  })),
  work: [{
    service: 'Balayage'
  }, {
    service: 'Full highlights'
  }, {
    service: 'Curtain bangs'
  }, {
    service: 'Brazilian blowout'
  }, {
    service: 'Color correction'
  }, {
    service: 'Root touch-up'
  }, {
    service: 'Precision cut'
  }, {
    service: 'Style / updo'
  }],
  /* Verbatim client reviews. Replace with the salon's own picks. */
  testimonials: [{
    quote: 'Had a great experience here. Melissa was so sweet and made getting a new style feel super comfy and easy.',
    author: 'Catherine S.',
    meta: 'Yelp',
    rating: 5
  }],
  photos: {
    interior: '../../assets/photos/interior.jpg'
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.HaircutScene = __ds_scope.HaircutScene;

__ds_ns.PhotoFrame = __ds_scope.PhotoFrame;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.ServiceRow = __ds_scope.ServiceRow;

__ds_ns.StylistCard = __ds_scope.StylistCard;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.WorkTile = __ds_scope.WorkTile;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
