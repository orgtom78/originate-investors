exports.id=179,exports.ids=[179],exports.modules={1227:(e,t,r)=>{Promise.resolve().then(r.bind(r,9671)),Promise.resolve().then(r.bind(r,5283)),Promise.resolve().then(r.bind(r,4253)),Promise.resolve().then(r.bind(r,6035)),Promise.resolve().then(r.bind(r,3670)),Promise.resolve().then(r.bind(r,8811)),Promise.resolve().then(r.bind(r,7560)),Promise.resolve().then(r.bind(r,1726)),Promise.resolve().then(r.bind(r,4045)),Promise.resolve().then(r.bind(r,4678)),Promise.resolve().then(r.bind(r,544)),Promise.resolve().then(r.bind(r,4671)),Promise.resolve().then(r.bind(r,2028)),Promise.resolve().then(r.bind(r,8726)),Promise.resolve().then(r.bind(r,9784)),Promise.resolve().then(r.bind(r,8959)),Promise.resolve().then(r.bind(r,927)),Promise.resolve().then(r.bind(r,7172)),Promise.resolve().then(r.bind(r,6650))},4038:()=>{},5283:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var n=r(4748),a=r(8166),i=r(5831),o=r(2969);let s=(0,i.ZP)("div")(({theme:e})=>({zIndex:"var(--mui-zIndex-fab)",position:"fixed",insetInlineEnd:e.spacing(10),insetBlockEnd:e.spacing(14)})),l=e=>{let{children:t,className:r}=e,i=(0,o.Z)({threshold:400,disableHysteresis:!0});return n.jsx(a.Z,{in:i,children:n.jsx(s,{className:r,onClick:()=>{let e=document.querySelector("body");e&&e.scrollIntoView({behavior:"smooth"})},role:"presentation",children:t})})}},2008:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(3095);let a=(e,t)=>{let{isCollapsed:r,collapsedWidth:a,isHovered:i,isPopoutWhenCollapsed:o,transitionDuration:s}=e,l=o&&r,d=o&&!r,c=r&&!i;return{root:({level:e})=>({...!o||d||l&&0===e?{marginBlockStart:t.spacing(1)}:{marginBlockStart:0},[`&.${n.Kp.subMenuRoot}.${n.Kp.open} > .${n.Kp.button}, &.${n.Kp.subMenuRoot} > .${n.Kp.button}.${n.Kp.active}`]:{backgroundColor:"var(--mui-palette-action-selected) !important"},[`&.${n.Kp.disabled} > .${n.Kp.button}`]:{color:"var(--mui-palette-text-disabled)"},[`&:not(.${n.Kp.subMenuRoot}) > .${n.Kp.button}.${n.Kp.active}`]:{...l&&e>0?{backgroundColor:"var(--mui-palette-primary-lightOpacity)",color:"var(--mui-palette-primary-main)",[`& .${n.Kp.icon}`]:{color:"var(--mui-palette-primary-main)"}}:{color:"var(--mui-palette-primary-contrastText)",backgroundColor:"var(--mui-palette-primary-main)",boxShadow:"var(--mui-customShadows-xs)",[`& .${n.Kp.icon}`]:{color:"inherit"}}}}),button:({level:e,active:n})=>({paddingBlock:"8px",...!(r&&!i)&&{"&:has(.MuiChip-root)":{paddingBlock:t.spacing(1.75)}},...(!o||d||l&&0===e)&&{borderRadius:"var(--mui-shape-customBorderRadius-lg)",transition:`padding-inline-start ${s}ms ease-in-out`,paddingInlineStart:t.spacing(c?(a-47)/8:3),paddingInlineEnd:t.spacing(c?(a-47)/8:3)},...!n&&{"&:hover, &:focus-visible":{backgroundColor:"var(--mui-palette-action-hover)"},'&[aria-expanded="true"]':{backgroundColor:"var(--mui-palette-action-selected)"}}}),icon:({level:e})=>({transition:`margin-inline-end ${s}ms ease-in-out`,...0===e&&{fontSize:"1.375rem",marginInlineEnd:t.spacing(2)},...e>0&&{fontSize:"0.5rem",color:"var(--mui-palette-text-disabled)",marginInlineEnd:t.spacing(4)},...1===e&&!l&&{marginInlineStart:t.spacing(1.5)},...e>1&&{marginInlineStart:t.spacing((l?0:1.5)+2.5*(e-1))},...c&&{marginInlineEnd:0},...l&&e>0&&{marginInlineEnd:t.spacing(2)},"& > i, & > svg":{fontSize:"inherit"}}),prefix:{marginInlineEnd:t.spacing(2)},label:({level:e})=>({...(!o||d||l&&0===e)&&{transition:`opacity ${s}ms ease-in-out`,...c&&{opacity:0}}}),suffix:{marginInlineStart:t.spacing(2)},subMenuExpandIcon:{fontSize:"1.375rem",marginInlineStart:t.spacing(2),"& i, & svg":{fontSize:"inherit"}},subMenuContent:({level:e})=>({zIndex:"calc(var(--drawer-z-index) + 1)",backgroundColor:l?"var(--mui-palette-background-paper)":"transparent",...l&&0===e&&{paddingBlock:t.spacing(2),borderRadius:"var(--mui-shape-borderRadius)",boxShadow:"var(--mui-customShadows-lg)",'[data-skin="bordered"] ~ [data-floating-ui-portal] &':{boxShadow:"none",border:"1px solid var(--mui-palette-divider)"},[`& .${n.Kp.button}`]:{paddingInline:t.spacing(4)}}})}}},8359:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(3095);let a=(e,t)=>{let{isCollapsed:r,isHovered:a,collapsedWidth:i,transitionDuration:o}=e,s=r&&a;return{color:"var(--mui-palette-text-primary)",zIndex:"var(--drawer-z-index) !important",[`& .${n.xY.header}`]:{paddingBlock:t.spacing(5),paddingInline:t.spacing(5.5,4),...r&&!a&&{paddingInline:t.spacing((i-42)/8),"& a":{transform:`translateX(-${22-(i-42)/2}px)`}},"& a":{transition:`transform ${o}ms ease`}},[`& .${n.xY.container}`]:{transition:t.transitions.create(["inline-size","inset-inline-start","box-shadow"],{duration:o,easing:"ease-in-out"}),borderColor:"transparent",...s&&{boxShadow:"var(--mui-customShadows-lg)"},[`& .${n.xY.toggled}`]:{boxShadow:"var(--mui-customShadows-lg)"},'[data-skin="bordered"] &':{borderColor:"var(--mui-palette-divider)"}},[`& .${n.xY.header} > span svg`]:{transition:`transform ${o}ms ease-in-out`,transform:`rotate(${s?"180deg":"0deg"})`,'[dir="rtl"] &':{transform:`rotate(${s?"0deg":"180deg"})`}},[`& .${n.Kp.menuSectionContent}`]:{color:"var(--mui-palette-text-disabled)"},[`& .${n.Kp.root}`]:{paddingBlock:t.spacing(1),paddingInline:t.spacing(3)},[`& .${n.xY.backdrop}`]:{backgroundColor:"var(--backdrop-color)"}}}},4045:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var n=r(4748),a=r(7506),i=r(716);let o=e=>{let{systemMode:t,verticalLayout:r,horizontalLayout:o}=e,{settings:s}=(0,a.r)();return(0,i.Z)(t),n.jsx("div",{className:"flex flex-col flex-auto","data-skin":s.skin,children:"horizontal"===s.layout?o:r})}},6035:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var n=r(4748),a=r(591),i=r(8113),o=r.n(i),s=r(4682),l=r(7506),d=r(6782),c=r(4707);let p=c.Z.footer`
  &.${d.WG.footerFixed} {
    position: sticky;
    inset-block-end: 0;
    z-index: var(--footer-z-index);
    background-color: var(--mui-palette-background-paper);
    box-shadow: 0 -4px 8px -4px rgb(var(--mui-mainColorChannels-shadow) / 0.42);

    [data-skin='bordered'] & {
      box-shadow: none;
      border-block-start: 1px solid var(--border-color);
    }
  }

  &.${d.WG.footerContentCompact} .${d.WG.footerContentWrapper} {
    margin-inline: auto;
    max-inline-size: ${s.Z.compactContentWidth}px;
  }

  .${d.WG.footerContentWrapper} {
    padding-block: 16px;
    padding-inline: ${s.Z.layoutPadding}px;
  }

  ${({overrideStyles:e})=>e}
`,u=e=>{let{children:t,overrideStyles:r}=e,{settings:i}=(0,l.r)(),c=(0,a.Z)(),{footerContentWidth:u}=i,x="static"===s.Z.footer.type,m="fixed"===s.Z.footer.type;return n.jsx(p,{theme:c,overrideStyles:r,className:o()(d.WG.footer,{[d.WG.footerStatic]:x,[d.WG.footerFixed]:m,[d.WG.footerContentCompact]:"compact"===u,[d.WG.footerContentWide]:"wide"===u}),children:n.jsx("div",{className:d.WG.footerContentWrapper,children:t})})}},3670:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var n=r(4748),a=r(8113),i=r.n(a),o=r(4682),s=r(7506),l=r(6782),d=r(7112);let c=({children:e})=>{let{settings:t}=(0,s.r)(),r="compact"===t.contentWidth,a="wide"===t.contentWidth;return n.jsx(d.Z,{isContentCompact:r,className:i()(l.WG.content,"flex-auto",{[`${l.WG.contentCompact} is-full`]:r,[l.WG.contentWide]:a}),style:{padding:o.Z.layoutPadding},children:e})}},8811:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var n=r(4748),a=r(591),i=r(8113),o=r.n(i),s=r(4682),l=r(7506),d=r(6782),c=r(4707);let p=c.Z.footer`
  &.${d.jU.footerContentCompact} {
    &.${d.jU.footerDetached} {
      margin-inline: auto;
      max-inline-size: ${s.Z.compactContentWidth}px;
    }

    &.${d.jU.footerAttached} .${d.jU.footerContentWrapper} {
      margin-inline: auto;
      max-inline-size: ${s.Z.compactContentWidth}px;
    }
  }

  &.${d.jU.footerFixed} {
    position: sticky;
    inset-block-end: 0;
    z-index: var(--footer-z-index);

    &.${d.jU.footerAttached},
      &.${d.jU.footerDetached}
      .${d.jU.footerContentWrapper} {
      background-color: var(--mui-palette-background-paper);
    }

    &.${d.jU.footerDetached} {
      pointer-events: none;
      padding-inline: ${s.Z.layoutPadding}px;

      & .${d.jU.footerContentWrapper} {
        pointer-events: auto;
        box-shadow: 0 -4px 8px -4px rgb(var(--mui-mainColorChannels-shadow) / 0.42);
        border-start-start-radius: var(--border-radius);
        border-start-end-radius: var(--border-radius);

        [data-skin='bordered'] & {
          box-shadow: none;
          border-inline: 1px solid var(--border-color);
          border-block-start: 1px solid var(--border-color);
        }
      }
    }

    &.${d.jU.footerAttached} {
      box-shadow: 0 -4px 8px -4px rgb(var(--mui-mainColorChannels-shadow) / 0.42);

      [data-skin='bordered'] & {
        box-shadow: none;
        border-block-start: 1px solid var(--border-color);
      }
    }
  }

  & .${d.jU.footerContentWrapper} {
    padding-block: 16px;
    padding-inline: ${s.Z.layoutPadding}px;
  }

  ${({overrideStyles:e})=>e}
`,u=e=>{let{children:t,overrideStyles:r}=e,{settings:i}=(0,l.r)(),c=(0,a.Z)(),{footerContentWidth:u}=i,x=!0===s.Z.footer.detached,m=!1===s.Z.footer.detached,h="static"===s.Z.footer.type,f="fixed"===s.Z.footer.type;return n.jsx(p,{theme:c,overrideStyles:r,className:o()(d.jU.footer,"is-full",{[d.jU.footerDetached]:x,[d.jU.footerAttached]:m,[d.jU.footerStatic]:h,[d.jU.footerFixed]:f,[d.jU.footerContentCompact]:"compact"===u,[d.jU.footerContentWide]:"wide"===u}),children:n.jsx("div",{className:d.jU.footerContentWrapper,children:t})})}},7560:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var n=r(4748),a=r(8113),i=r.n(a),o=r(7506),s=r(6782),l=r(7112);let d=({children:e})=>{let{settings:t}=(0,o.r)(),r="compact"===t.contentWidth,a="wide"===t.contentWidth;return n.jsx(l.Z,{isContentCompact:r,className:i()(s.jU.content,"flex-auto",{[`${s.jU.contentCompact} is-full`]:r,[s.jU.contentWide]:a}),children:e})}},1726:(e,t,r)=>{"use strict";r.d(t,{default:()=>x});var n=r(4748),a=r(591),i=r(2969),o=r(8113),s=r.n(o),l=r(4682),d=r(7506),c=r(6782),p=r(4707);let u=p.Z.header`
  display: flex;
  align-items: center;
  justify-content: center;
  inline-size: 100%;
  flex-shrink: 0;
  min-block-size: var(--header-height);

  &.${c.jU.headerContentCompact} {
    &.${c.jU.headerFloating}
      .${c.jU.navbar},
      &.${c.jU.headerDetached}
      .${c.jU.navbar},
      &.${c.jU.headerAttached}
      .${c.jU.navbar} {
      margin-inline: auto;
    }

    &.${c.jU.headerFloating}
      .${c.jU.navbar},
      &.${c.jU.headerFixed}.${c.jU.headerDetached}
      .${c.jU.navbar} {
      max-inline-size: calc(${l.Z.compactContentWidth}px - ${2*l.Z.layoutPadding}px);
    }

    .${c.jU.navbar} {
      max-inline-size: ${l.Z.compactContentWidth}px;
    }
  }

  &.${c.jU.headerFixed} {
    position: sticky;
    inset-block-start: 0;
    z-index: var(--header-z-index);

    &:not(.${c.jU.headerBlur}).scrolled.${c.jU.headerAttached},
      &:not(.${c.jU.headerBlur}).scrolled.${c.jU.headerDetached}
      .${c.jU.navbar} {
      background-color: var(--mui-palette-background-paper);
    }

    &.${c.jU.headerDetached}.scrolled .${c.jU.navbar} {
      box-shadow: 0 4px 8px -4px rgb(var(--mui-mainColorChannels-shadow) / 0.42);

      [data-skin='bordered'] & {
        box-shadow: none;
        border-inline: 1px solid var(--border-color);
        border-block-end: 1px solid var(--border-color);
      }
    }

    &.${c.jU.headerDetached} .${c.jU.navbar} {
      border-end-start-radius: var(--border-radius);
      border-end-end-radius: var(--border-radius);
    }

    &.${c.jU.headerDetached}, &.${c.jU.headerFloating} {
      pointer-events: none;

      & .${c.jU.navbar} {
        pointer-events: auto;
      }
    }

    &.${c.jU.headerBlur} {
      &.scrolled.${c.jU.headerAttached},
        &.scrolled.${c.jU.headerDetached}
        .${c.jU.navbar},
        &.${c.jU.headerFloating}
        .${c.jU.navbar} {
        backdrop-filter: blur(9px);
        background-color: rgb(var(--background-color-rgb) / 0.85);
      }

      &.${c.jU.headerFloating} {
        &:before {
          content: '';
          position: absolute;
          z-index: -1;
          inset-block-start: 0;
          inset-inline: 0;
          block-size: 100%;
          background: linear-gradient(
            180deg,
            rgb(var(--mui-palette-background-defaultChannel) / 0.7) 44%,
            rgb(var(--mui-palette-background-defaultChannel) / 0.43) 73%,
            rgb(var(--mui-palette-background-defaultChannel) / 0)
          );
          backdrop-filter: blur(10px);
          mask: linear-gradient(
            var(--mui-palette-background-default),
            var(--mui-palette-background-default) 18%,
            transparent 100%
          );
        }
      }
    }

    &.${c.jU.headerAttached}.scrolled {
      box-shadow: 0 4px 8px -4px rgb(var(--mui-mainColorChannels-shadow) / 0.42);

      [data-skin='bordered'] & {
        box-shadow: none;
        border-block-end: 1px solid var(--border-color);
      }
    }
  }

  &.${c.jU.headerFloating}
    .${c.jU.navbar},
    &:not(.${c.jU.headerFloating}).${c.jU.headerAttached},
    &:not(.${c.jU.headerFloating}).${c.jU.headerDetached}
    .${c.jU.navbar} {
    ${({theme:e})=>`transition: ${e.transitions.create(["box-shadow","border-width","padding-inline","backdrop-filter"])}`};
  }
  &:not(.${c.jU.headerFloating}).${c.jU.headerAttached}
    .${c.jU.navbar},
    &:not(.${c.jU.headerFloating}).${c.jU.headerDetached}.scrolled
    .${c.jU.navbar} {
    padding-inline: ${l.Z.layoutPadding}px;
  }

  &.${c.jU.headerFloating} {
    padding-block-start: 16px;

    .${c.jU.navbar} {
      background-color: var(--mui-palette-background-paper);
      border-radius: var(--border-radius);
      padding-inline: ${l.Z.layoutPadding}px;
      box-shadow: 0 4px 8px -4px rgb(var(--mui-mainColorChannels-shadow) / 0.42);

      [data-skin='bordered'] & {
        box-shadow: none;
        border: 1px solid var(--border-color);
      }
    }
  }
  &.${c.jU.headerFloating}
    .${c.jU.navbar},
    &.${c.jU.headerFixed}.${c.jU.headerDetached}
    .${c.jU.navbar} {
    inline-size: calc(100% - ${2*l.Z.layoutPadding}px);
  }

  &:not(.${c.jU.headerFloating}).${c.jU.headerStatic}
    .${c.jU.navbar} {
    padding-inline: ${l.Z.layoutPadding}px;
  }

  .${c.jU.navbar} {
    position: relative;
    padding-block: 12px;
    inline-size: 100%;
  }

  ${({overrideStyles:e})=>e}
`,x=e=>{let{children:t,overrideStyles:r}=e,{settings:o}=(0,d.r)(),p=(0,a.Z)(),x=(0,i.Z)({threshold:0,disableHysteresis:!0}),{navbarContentWidth:m}=o,h="fixed"===l.Z.navbar.type,f="static"===l.Z.navbar.type,v=!0===l.Z.navbar.floating,g=!0===l.Z.navbar.detached,b=!1===l.Z.navbar.detached,j=!0===l.Z.navbar.blur;return n.jsx(u,{theme:p,overrideStyles:r,className:s()(c.jU.header,{[c.jU.headerFixed]:h,[c.jU.headerStatic]:f,[c.jU.headerFloating]:v,[c.jU.headerDetached]:!v&&g,[c.jU.headerAttached]:!v&&b,[c.jU.headerBlur]:j,[c.jU.headerContentCompact]:"compact"===m,[c.jU.headerContentWide]:"wide"===m,scrolled:x}),children:n.jsx("div",{className:s()(c.jU.navbar,"flex bs-full"),children:t})})}},4678:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var n=r(4707),a=r(6782);let i=n.Z.div`
  &:has(.${a.WG.content}>.${a.kV.contentHeightFixed}) {
    max-block-size: 100dvh;
  }
`},7112:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(4707),a=r(4682),i=r(6782);let o=n.Z.main`
  padding: ${a.Z.layoutPadding}px;
  ${({isContentCompact:e})=>e&&`
    margin-inline: auto;
    max-inline-size: ${a.Z.compactContentWidth}px;
  `}

  &:has(.${i.kV.contentHeightFixed}) {
    display: flex;
    overflow: hidden;
  }
`},544:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var n=r(4707),a=r(6782);let i=n.Z.div`
  &:has(.${a.jU.content}>.${a.kV.contentHeightFixed}) {
    max-block-size: 100dvh;
  }
`},4920:(e,t,r)=>{"use strict";r.d(t,{r:()=>o});var n=r(4748),a=r(1062),i=r(1622);let o=(0,a.forwardRef)((e,t)=>{let{href:r,className:a,...o}=e;return n.jsx(i.default,{ref:t,href:r,className:a,...o,children:e.children})})},1351:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(4748),a=r(5276);let i=e=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fontSize:"1.5rem",viewBox:"0 0 24 24",...e,children:n.jsx("path",{fill:"currentColor",d:"m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"})}),o=e=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fontSize:"1.5rem",viewBox:"0 0 24 24",...e,children:n.jsx("path",{fill:"currentColor",d:"M5 12c0 3.859 3.14 7 7 7 3.859 0 7-3.141 7-7s-3.141-7-7-7c-3.86 0-7 3.141-7 7zm12 0c0 2.757-2.243 5-5 5s-5-2.243-5-5 2.243-5 5-5 5 2.243 5 5z"})}),s=e=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fontSize:"1.5rem",viewBox:"0 0 24 24",...e,children:[n.jsx("path",{fill:"currentColor",d:"M12 5c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"}),n.jsx("path",{fill:"currentColor",d:"M12 9c-1.627 0-3 1.373-3 3s1.373 3 3 3 3-1.373 3-3-1.373-3-3-3z"})]}),l=e=>{let{closeIcon:t,lockedIcon:r,unlockedIcon:l,onClick:d,onClose:c,...p}=e,{isCollapsed:u,collapseVerticalNav:x,isBreakpointReached:m,toggleVerticalNav:h}=(0,a.Z)(),f=e=>{x("lock"!==e),d&&d()};return n.jsx(n.Fragment,{children:m?n.jsx("span",{role:"button",tabIndex:0,style:{display:"flex",cursor:"pointer"},onClick:()=>{h(!1),c&&c()},...p,children:t??n.jsx(i,{})}):u?n.jsx("span",{role:"button",tabIndex:0,style:{display:"flex",cursor:"pointer"},onClick:()=>f("lock"),...p,children:l??n.jsx(o,{})}):n.jsx("span",{role:"button",tabIndex:0,style:{display:"flex",cursor:"pointer"},onClick:()=>f("unlock"),...p,children:r??n.jsx(s,{})})})}},6403:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(4748),a=r(4707),i=r(5276),o=r(3095);let s=a.Z.div`
  padding: 15px;
  padding-inline-start: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: ${({transitionDuration:e})=>`padding-inline ${e}ms ease-in-out`};

  ${({isHovered:e,isCollapsed:t,collapsedWidth:r})=>t&&!e&&`padding-inline: calc((${r}px - 1px - 22px) / 2);`}
`,l=({children:e})=>{let{isHovered:t,isCollapsed:r,collapsedWidth:a,transitionDuration:l}=(0,i.Z)();return n.jsx(s,{className:o.xY.header,isHovered:t,isCollapsed:r,collapsedWidth:a,transitionDuration:l,children:e})}},4671:(e,t,r)=>{"use strict";r.d(t,{HorizontalNavProvider:()=>o,Z:()=>s});var n=r(4748),a=r(1062);let i=(0,a.createContext)({}),o=({children:e})=>{let[t,r]=(0,a.useState)(!1),o=e=>{r(e)},s=(0,a.useMemo)(()=>({isBreakpointReached:t,updateIsBreakpointReached:o}),[t]);return n.jsx(i.Provider,{value:s,children:e})},s=i},5925:(e,t,r)=>{"use strict";r.d(t,{Nn:()=>i,R1:()=>n,rd:()=>a,sh:()=>o});let n={xs:"480px",sm:"600px",md:"900px",lg:"1200px",xl:"1536px",xxl:"1920px",always:"always"},a=300,i=300,o=200},2148:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(1062),a=r(4671);let i=()=>{let e=(0,n.useContext)(a.Z);if(void 0===e)throw Error("HorizontalNav Component is required!");return e}},7549:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(1062);let a=e=>{let[t,r]=(0,n.useState)("always"===e);return(0,n.useEffect)(()=>{if(e&&"always"!==e){let n=window.matchMedia(`(max-width: ${e})`);n.matches!==t&&r(n.matches);let a=()=>r(n.matches);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)}},[t,e]),t}},5276:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(1062),a=r(2028);let i=()=>{let e=(0,n.useContext)(a.Z);if(void 0===e)throw Error("VerticalNav Component is required!");return e}},9215:(e,t,r)=>{"use strict";r.d(t,{v2:()=>h,sN:()=>L,Wd:()=>R,ZP:()=>T});var n=r(4748),a=r(1062),i=r(8113),o=r.n(i),s=r(9002),l=r(3095),d=r(4707);let c=d.Z.nav`
  &.${l.Kp.root} {
    ${({rootStyles:e})=>e}
  }
`;var p=r(4411),u=r.n(p),x=r(5925);let m=(0,a.createContext)({}),h=(0,a.forwardRef)((e,t)=>{let{children:r,className:i,rootStyles:d,menuItemStyles:p,triggerPopout:h="hover",browserScroll:f=!1,transitionDuration:v=x.sh,renderExpandIcon:g,renderExpandedMenuItemIcon:b,popoutMenuOffset:j={mainAxis:0},textTruncate:y=!0,verticalMenuProps:$,...C}=e,k=(0,a.useMemo)(()=>({triggerPopout:h,browserScroll:f,menuItemStyles:p,renderExpandIcon:g,renderExpandedMenuItemIcon:b,transitionDuration:v,popoutMenuOffset:j,textTruncate:y,verticalMenuProps:$}),[h,f,p,g,b,v,j,y,$]);return n.jsx(m.Provider,{value:k,children:n.jsx(s.RB,{children:n.jsx(c,{ref:t,className:o()(l.Kp.root,i),rootStyles:d,...C,children:n.jsx("ul",{className:u().root,children:r})})})})});var f=r(76),v=r(4803),g=r(8306),b=r(4415),j=r.n(b);let y=d.Z.div`
  inline-size: 260px;
  border-radius: 4px;
  box-shadow: 0 9px 28px 8px #00000011;
  outline: none;
  box-sizing: border-box;
  background-color: white;
  overflow: hidden;

  ${({browserScroll:e,top:t})=>e&&`overflow-y: auto; max-block-size: calc((var(--vh, 1vh) * 100) - ${t}px);`}
  ${({rootStyles:e})=>e};
`;var $=r(8286),C=r.n($);let k=(0,a.forwardRef)((e,t)=>{let{children:r,open:a,firstLevel:i,top:o,browserScroll:s,...l}=e;return n.jsx(y,{ref:t,firstLevel:i,open:a,top:o,browserScroll:s,...l,children:s?n.jsx("ul",{className:C().ul,children:r}):n.jsx(j(),{options:{wheelPropagation:!1,suppressScrollX:!0},style:{maxBlockSize:`calc((var(--vh, 1vh) * 100) - ${o}px)`},children:n.jsx("ul",{className:C().ul,children:r})})})}),S=()=>{let e=(0,a.useContext)(m);if(void 0===e)throw Error("Menu Component is required!");return e};var w=r(5405),Z=r(5104),z=r(4920);let N=e=>{let{level:t,disabled:r,children:n}=e;return(0,Z.iv)({display:"flex",alignItems:"center",minBlockSize:"30px",textDecoration:"none",color:"inherit",boxSizing:"border-box",cursor:"pointer",paddingInline:"20px","&:hover":{backgroundColor:"#f3f3f3"},"&:focus-visible":{outline:"none",backgroundColor:"#f3f3f3"},...r&&{pointerEvents:"none",cursor:"default",color:"#adadad"},[`&.${l.Kp.active}`]:{...0===t?{color:"white",backgroundColor:"#765feb"}:{...n?{backgroundColor:"#f3f3f3"}:{color:"#765feb",backgroundColor:"#765feb1f"}}}})},U=(0,a.forwardRef)(({className:e,component:t,children:r,...i},s)=>{if(t){if("string"==typeof t)return(0,a.createElement)(t,{className:o()(e),...i,ref:s},r);{let{className:n,...l}=t.props;return(0,a.cloneElement)(t,{className:o()(e,n),...i,...l,ref:s},r)}}return i.href?n.jsx(z.r,{ref:s,className:e,href:i.href,...i,children:r}):n.jsx("a",{ref:s,className:e,...i,children:r})});var P=r(2528),M=r(6366),K=r(8672),W=r(7508);let I=d.Z.div`
  z-index: 10;

  ${({rootStyles:e})=>e};
`;var E=r(9785);let O=d.Z.li`
  ${({level:e})=>0===e&&{borderRadius:"6px",overflow:"hidden"}}

  &.${l.Kp.open} > .${l.Kp.button} {
    background-color: #f3f3f3;
  }

  ${({menuItemStyles:e})=>e};
  ${({rootStyles:e})=>e};

  > .${l.Kp.button} {
    ${({level:e,disabled:t,children:r})=>N({level:e,disabled:t,children:r})};
    ${({buttonStyles:e})=>e};
  }
`,D=(0,a.createContext)({getItemProps:()=>({})}),R=(0,a.forwardRef)((e,t)=>{let{children:r,className:i,contentClassName:d,label:c,icon:p,title:x,prefix:m,suffix:h,level:b=0,disabled:j=!1,rootStyles:y,component:$,onClick:C,onKeyUp:Z,onOpenChange:z,...N}=e,[R,_]=(0,a.useState)(!1),[F,A]=(0,a.useState)(!1),L=(0,a.useRef)("ltr"),B=(0,a.useRef)([]),V=(0,f.usePathname)(),Y=(0,s.ay)(),G=(0,s.jV)(),H=(0,s.Zm)(),{triggerPopout:T,renderExpandIcon:q,menuItemStyles:X,browserScroll:J,transitionDuration:Q,renderExpandedMenuItemIcon:ee,popoutMenuOffset:et,textTruncate:er}=S(),en=a.Children.toArray(r).filter(Boolean),ea=et&&et.mainAxis&&("function"==typeof et.mainAxis?et.mainAxis({level:b}):et.mainAxis),ei=et&&et.alignmentAxis&&("function"==typeof et.alignmentAxis?et.alignmentAxis({level:b}):et.alignmentAxis);(0,a.useEffect)(()=>{L.current=window.getComputedStyle(document.documentElement).getPropertyValue("direction")},[]);let{y:eo,refs:es,floatingStyles:el,context:ed}=(0,s.YF)({open:R,nodeId:G,onOpenChange:_,placement:b>0?"rtl"!==L.current?"right-start":"left-start":"bottom-start",middleware:[(0,v.cv)({mainAxis:ea,alignmentAxis:ei}),(0,v.RR)({crossAxis:!1}),(0,v.uY)()],whileElementsMounted:g.Me}),{isMounted:ec,styles:ep}=(0,s.Y_)(ed,{duration:Q,initial:{opacity:0,transform:"translateY(10px)"},open:{opacity:1,transform:"translateY(0px)"},close:{opacity:0,transform:"translateY(10px)"}}),eu=(0,s.XI)(ed,{handleClose:(0,s.xp)({blockPointerEvents:!0}),restMs:25,enabled:"hover"===T,delay:{open:75}}),ex=(0,s.eS)(ed,{enabled:"click"===T,toggle:!1}),em=(0,s.bQ)(ed),eh=(0,s.qs)(ed,{role:"menu"}),{getReferenceProps:ef,getFloatingProps:ev,getItemProps:eg}=(0,s.NI)([eu,ex,em,eh]),eb=e=>{if(X){let t=X[e];if(t)return"function"==typeof t?t({level:b,disabled:j,active:F,isSubmenu:!0,open:R}):t}};(0,a.useEffect)(()=>{let e=()=>{_(!1)},t=e=>{e.nodeId!==G&&e.parentId===H&&_(!1)};return Y?.events.on("click",e),Y?.events.on("menuopen",t),()=>{Y?.events.off("click",e),Y?.events.off("menuopen",t)}},[Y,G,H]),(0,a.useEffect)(()=>{R&&Y?.events.emit("menuopen",{parentId:H,nodeId:G})},[Y,R,G,H]),(0,a.useEffect)(()=>{(0,w.ql)(r,V)?A(!0):A(!1)},[V]),(0,a.useEffect)(()=>{z?.(R)},[R]);let ej=(0,s.qq)([es.setReference,t]);return n.jsx(s.mN,{id:G,children:(0,n.jsxs)(O,{...!j&&{ref:ej,...ef()},className:o()({[l.Kp.subMenuRoot]:0===b},{[l.Kp.active]:F},{[l.Kp.disabled]:j},{[l.Kp.open]:R},u().li,i),menuItemStyles:eb("root"),level:b,disabled:j,active:F,buttonStyles:eb("button"),rootStyles:y,children:[(0,n.jsxs)(U,{title:x,className:o()(l.Kp.button,{[l.Kp.active]:F}),component:$,onClick:e=>{C?.(e),"click"===T&&_(!R)},onKeyUp:e=>{Z?.(e),"Enter"===e.key&&_(!R)},...N,children:[(0,w.E4)({icon:p,level:b,active:F,disabled:j,renderExpandedMenuItemIcon:ee,styles:eb("icon")}),m&&n.jsx(M.Z,{firstLevel:0===b,className:l.Kp.prefix,rootStyles:eb("prefix"),children:m}),n.jsx(P.Z,{className:l.Kp.label,rootStyles:eb("label"),textTruncate:er,children:c}),h&&n.jsx(K.Z,{firstLevel:0===b,className:l.Kp.suffix,rootStyles:eb("suffix"),children:h}),n.jsx(W.X,{className:l.Kp.subMenuExpandIcon,rootStyles:eb("subMenuExpandIcon"),children:q?q({level:b,disabled:j,active:F,open:R}):n.jsx(W.Z,{level:b,children:n.jsx(E.Z,{fontSize:"1rem"})})})]}),n.jsx(D.Provider,{value:{getItemProps:eg},children:n.jsx(s.ll,{children:ec&&n.jsx(I,{ref:es.setFloating,...ev(),style:el,rootStyles:eb("subMenuStyles"),children:n.jsx(k,{open:R,top:eo?eo-window.scrollY:0,firstLevel:0===b,browserScroll:J,className:o()(l.Kp.subMenuContent,d),rootStyles:eb("subMenuContent"),style:{...ep},children:en.map((e,t)=>(0,a.cloneElement)(e,{...eg({ref(e){B.current[t]=e},onClick(t){e.props.children&&!Array.isArray(e.props.children)&&(e.props.onClick?.(t),Y?.events.emit("click"))}}),level:b+1}))})})})})]})})});var _=r(8765),F=r(5276);let A=d.Z.li`
  position: relative;
  ${({level:e})=>0===e&&{borderRadius:"6px",overflow:"hidden"}}
  ${({menuItemStyles:e})=>e};
  ${({rootStyles:e})=>e};

  > .${l.Kp.button} {
    ${({level:e,disabled:t})=>N({level:e,disabled:t})};
    ${({buttonStyles:e})=>e};
  }
`,L=(0,a.forwardRef)((e,t)=>{let{children:r,icon:i,className:d,prefix:c,suffix:p,level:x=0,disabled:m=!1,exactMatch:h=!0,activeUrl:v,component:g,onActiveChange:b,rootStyles:j,...y}=e,[$,C]=(0,a.useState)(!1),k=(0,s.ay)(),Z=(0,f.usePathname)(),{toggleVerticalNav:z,isToggled:N}=(0,F.Z)(),{getItemProps:W}=(0,a.useContext)(D),{menuItemStyles:I,renderExpandedMenuItemIcon:E,textTruncate:O}=S(),R=e=>{if(I){let t=I[e];if(t)return"function"==typeof t?t({level:x,disabled:m,active:$,isSubmenu:!1}):t}};return(0,a.useEffect)(()=>{let e=y.href||g&&"string"!=typeof g&&g.props.href;e&&((h?Z===e:v&&Z.includes(v))?C(!0):C(!1))},[Z]),(0,_.Z)(()=>{b?.($)},[$]),n.jsx(A,{ref:t,className:o()({[l.Kp.menuItemRoot]:0===x},{[l.Kp.active]:$},{[l.Kp.disabled]:m},u().li,d),level:x,disabled:m,buttonStyles:R("button"),menuItemStyles:R("root"),rootStyles:j,children:(0,n.jsxs)(U,{className:o()(l.Kp.button,{[l.Kp.active]:$}),component:g,tabIndex:m?-1:0,onClick:()=>{N&&z()},...W({onClick(t){e.onClick?.(t),k?.events.emit("click")}}),...y,children:[(0,w.E4)({icon:i,level:x,active:$,disabled:m,renderExpandedMenuItemIcon:E,styles:R("icon")}),c&&n.jsx(M.Z,{firstLevel:0===x,className:l.Kp.prefix,rootStyles:R("prefix"),children:c}),n.jsx(P.Z,{className:l.Kp.label,rootStyles:R("label"),textTruncate:O,children:r}),p&&n.jsx(K.Z,{firstLevel:0===x,className:l.Kp.suffix,rootStyles:R("suffix"),children:p})]})})});var B=r(6156);let V=e=>{let{children:t,className:r,breakpoint:a,customBreakpoint:i,verticalNavProps:o}=e;return n.jsx(B.ZP,{...o,className:r,breakpoint:a,customBreakpoint:i,children:t})};var Y=r(7549),G=r(2148);let H=d.Z.div`
  inline-size: 100%;
  overflow: hidden;
  position: relative;
  ${({customStyles:e})=>e}
`,T=e=>{let{switchToVertical:t=!1,hideMenu:r=!1,breakpoint:i="lg",customBreakpoint:s,breakpoints:d,customStyles:c,className:p,children:u,verticalNavProps:m,verticalNavContent:h}=e,f={...x.R1,...d},v=o()(l.uF.root,p),g=(0,a.useRef)(!1),{updateIsBreakpointReached:b}=(0,G.Z)(),j=(0,Y.Z)(s??(i?f[i]:i));return((0,a.useEffect)(()=>{g.current!==j&&(b(j),g.current=j)},[j]),t&&j)?n.jsx(V,{breakpoint:i,className:v,customBreakpoint:s,verticalNavProps:m,children:h&&n.jsx(h,{children:u})}):r&&j?null:n.jsx(H,{customStyles:c,className:v,children:u})}},7445:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(4707);let a=n.Z.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline-end: 10px;
  ${({rootStyles:e})=>e};
`},2528:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(4707);let a=n.Z.span`
  flex-grow: 1;
  ${({textTruncate:e})=>e&&`
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    `};
  ${({rootStyles:e})=>e};
`},6366:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(4707);let a=n.Z.span`
  margin-inline-end: 5px;
  display: ${({firstLevel:e,isCollapsed:t,isHovered:r})=>e&&t&&!r?"none":"flex"};
  ${({rootStyles:e})=>e};
`},8672:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(4707);let a=n.Z.span`
  margin-inline-start: 5px;
  display: ${({firstLevel:e,isCollapsed:t,isHovered:r})=>e&&t&&!r?"none":"flex"};
  ${({rootStyles:e})=>e};
`},7508:(e,t,r)=>{"use strict";r.d(t,{X:()=>a,Z:()=>i});var n=r(4707);let a=n.Z.span`
  display: flex;
  margin-inline-start: 5px;
  ${({rootStyles:e})=>e};
`,i=n.Z.span`
  display: flex;

  ${({level:e})=>0===e&&`
    & > i,
    & > svg {
      transform: rotate(90deg);
    }
  `}

  ${({level:e})=>e&&e>0&&`
    [dir='rtl'] & > i,
    [dir='rtl'] & > svg {
      transform: rotate(180deg);
    }
  `}
`},6766:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i,g:()=>a});var n=r(4707);let a=n.Z.span`
  display: flex;
  margin-inline-start: 5px;
  ${({rootStyles:e})=>e};
`,i=n.Z.span`
  display: flex;

  & > i,
  & > svg {
    transition: ${({transitionDuration:e})=>`transform ${e}ms ease-in-out`};
    ${({open:e})=>e&&"transform: rotate(90deg);"}

    [dir='rtl'] & {
      transform: rotate(180deg);
      ${({open:e})=>e&&"transform: rotate(90deg);"}
    }
  }
`},9785:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(4748);let a=e=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fontSize:"1.5rem",viewBox:"0 0 24 24",...e,children:n.jsx("path",{fill:"currentColor",d:"M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"})})},3095:(e,t,r)=>{"use strict";r.d(t,{Kp:()=>n,uF:()=>i,xY:()=>a});let n={root:"ts-menu-root",menuSectionRoot:"ts-menusection-root",menuItemRoot:"ts-menuitem-root",subMenuRoot:"ts-submenu-root",button:"ts-menu-button",prefix:"ts-menu-prefix",suffix:"ts-menu-suffix",label:"ts-menu-label",icon:"ts-menu-icon",menuSectionWrapper:"ts-menu-section-wrapper",menuSectionContent:"ts-menu-section-content",menuSectionLabel:"ts-menu-section-label",subMenuContent:"ts-submenu-content",subMenuExpandIcon:"ts-submenu-expand-icon",disabled:"ts-disabled",active:"ts-active",open:"ts-open"},a={root:"ts-vertical-nav-root",container:"ts-vertical-nav-container",bgColorContainer:"ts-vertical-nav-bg-color-container",header:"ts-vertical-nav-header",image:"ts-vertical-nav-image",backdrop:"ts-vertical-nav-backdrop",collapsed:"ts-collapsed",toggled:"ts-toggled",hovered:"ts-hovered",scrollWithContent:"ts-scroll-with-content",breakpointReached:"ts-breakpoint-reached",collapsing:"ts-collapsing",expanding:"ts-expanding"},i={root:"ts-horizontal-nav-root",scrollWithContent:"ts-scroll-with-content",breakpointReached:"ts-breakpoint-reached"}},5405:(e,t,r)=>{"use strict";r.d(t,{ql:()=>p,fF:()=>x,E4:()=>m});var n=r(4748),a=r(1062),i=r(9215),o=r(6156),s=r(7918);let l=({menuData:e})=>{let t=e=>e.map((e,r)=>{if(e.isSection){let{children:a,isSection:i,...s}=e;return n.jsx(o.xw,{...s,children:a&&t(a)},r)}if(e.children){let{children:a,icon:i,prefix:l,suffix:d,...c}=e,p=i?n.jsx("i",{className:i}):null,u=l&&l.label?n.jsx(s.Z,{size:"small",...l}):l,x=d&&d.label?n.jsx(s.Z,{size:"small",...d}):d;return n.jsx(o.Wd,{prefix:u,suffix:x,...c,...p&&{icon:p},children:a&&t(a)},r)}let{label:a,icon:i,prefix:l,suffix:d,...c}=e,p=c.href,u=i?n.jsx("i",{className:i}):null,x=l&&l.label?n.jsx(s.Z,{size:"small",...l}):l,m=d&&d.label?n.jsx(s.Z,{size:"small",...d}):d;return n.jsx(o.sN,{prefix:x,suffix:m,...c,href:p,...u&&{icon:u},children:a},r)});return n.jsx(n.Fragment,{children:t(e)})};var d=r(3095),c=r(7445);let p=(e,t)=>{if(!e)return!1;if(Array.isArray(e))return e.some(e=>p(e,t));if((0,a.isValidElement)(e)){let{component:r,href:n,exactMatch:a,activeUrl:i,children:o}=e.props;if(r&&r.props.href)return!0===a||void 0===a?r.props.href===t:i&&t.includes(i);if(n)return!0===a||void 0===a?n===t:i&&t.includes(i);if(o)return p(o,t)}return!1},u=(e,t)=>a.Children.map(e,e=>(0,a.isValidElement)(e)?e.props?.menuData?n.jsx(l,{menuData:e.props.menuData}):t(e):e),x=e=>a.Children.map(e,e=>{if(!(0,a.isValidElement)(e))return null;let{children:t,verticalMenuProps:r,...s}=e.props;switch(e.type){case i.sN:return n.jsx(o.sN,{...s,children:t});case i.Wd:return n.jsx(o.Wd,{...s,children:x(t)});case i.v2:let l=u(t,x);return n.jsx(o.v2,{...r,children:l});default:return e}}),m=e=>{let{icon:t,level:r,active:a,disabled:i,styles:o,renderExpandedMenuItemIcon:s,isBreakpointReached:l}=e;if(t&&(0===r||!l&&r&&r>0))return n.jsx(c.Z,{className:d.Kp.icon,rootStyles:o,children:t});if(r&&0!==r&&s&&null!==s.icon&&(!s.level||s.level>=r)){let e="function"==typeof s.icon?s.icon({level:r,active:a,disabled:i}):s.icon;if(e)return n.jsx(c.Z,{className:d.Kp.icon,rootStyles:o,children:e})}return null}},6156:(e,t,r)=>{"use strict";r.d(t,{v2:()=>v,sN:()=>R,xw:()=>Q,Ye:()=>ee.Z,$T:()=>_.Z,Wd:()=>E,ZP:()=>et});var n=r(4748),a=r(1062),i=r(76),o=r(8113),s=r.n(o),l=r(9002),d=r(5276),c=r(3095),p=r(4707);let u=p.Z.nav`
  & > ul > :first-of-type {
    margin-block-start: 0;
  }
  &.${c.Kp.root} {
    ${({rootStyles:e})=>e}
  }
`;var x=r(8286),m=r.n(x),h=r(5925);let f=(0,a.createContext)({}),v=(0,a.forwardRef)((e,t)=>{let{children:r,className:o,rootStyles:p,menuItemStyles:x,renderExpandIcon:v,renderExpandedMenuItemIcon:g,menuSectionStyles:b,browserScroll:j=!1,triggerPopout:y="hover",popoutWhenCollapsed:$=!1,subMenuOpenBehavior:C="accordion",transitionDuration:k=h.Nn,collapsedMenuSectionLabel:S="-",popoutMenuOffset:w={mainAxis:0},textTruncate:Z=!0,...z}=e,[N,U]=(0,a.useState)([]),P=(0,a.useRef)([]),M=(0,i.usePathname)(),{updateVerticalNavState:K}=(0,d.Z)(),W=(0,a.useCallback)((...e)=>{if(!e.length)return;let t=[...N];e.forEach(({level:e,label:r,active:n=!1,id:a})=>{let i=t.findIndex(e=>e.id===a),o=i>=0,s="accordion"===C,l=t.findIndex(e=>!e.active&&0===e.level);o&&t.splice(i,1),s?o||(l>=0&&!n&&0===e?t.splice(l,1,{level:e,label:r,active:n,id:a}):t.push({level:e,label:r,active:n,id:a})):o||t.push({level:e,label:r,active:n,id:a})}),U(t)},[N,C]);(0,a.useEffect)(()=>{U([...P.current]),P.current=[]},[M]),(0,a.useEffect)(()=>{K({isPopoutWhenCollapsed:$})},[$,K]);let I=(0,a.useMemo)(()=>({browserScroll:j,triggerPopout:y,transitionDuration:k,menuItemStyles:x,menuSectionStyles:b,renderExpandIcon:v,renderExpandedMenuItemIcon:g,openSubmenu:N,openSubmenusRef:P,toggleOpenSubmenu:W,subMenuOpenBehavior:C,collapsedMenuSectionLabel:S,popoutMenuOffset:w,textTruncate:Z}),[j,y,k,x,b,v,g,N,P,W,C,S,w,Z]);return n.jsx(f.Provider,{value:I,children:n.jsx(l.RB,{children:n.jsx(u,{ref:t,className:s()(c.Kp.root,o),rootStyles:p,...z,children:n.jsx("ul",{className:m().ul,children:r})})})})});var g=r(4803),b=r(8306),j=r(4415),y=r.n(j);let $=p.Z.div`
  display: none;
  overflow: hidden;
  z-index: 999;
  transition: ${({transitionDuration:e})=>`block-size ${e}ms ease-in-out`};
  box-sizing: border-box;

  ${({isCollapsed:e,level:t,isPopoutWhenCollapsed:r,isHovered:n})=>e&&0===t&&!r&&!n&&`
      block-size: 0 !important;
    `}

  ${({isCollapsed:e,level:t,isPopoutWhenCollapsed:r})=>e&&0===t&&r?`
      display: block;
      padding-inline-start: 0px;
      inline-size: 260px;
      border-radius: 4px;
      block-size: auto !important;
      transition: none !important;
      background-color: white;
      box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
     `:`
      position: static !important;
      transform: none !important;
      `}

  ${({browserScroll:e})=>e&&"overflow-y: auto; max-block-size: calc((var(--vh, 1vh) * 100));"}


  ${({rootStyles:e})=>e};
`,C=(0,a.forwardRef)((e,t)=>{let{children:r,open:i,level:o,isCollapsed:s,isHovered:l,transitionDuration:d,isPopoutWhenCollapsed:c,openWhenCollapsed:p,browserScroll:u,...x}=e,[h,f]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(h){if(i||i&&l){let e=t?.current;if(e){e.style.display="block",e.style.overflow="hidden",e.style.blockSize="auto";let t=e.offsetHeight;e.style.blockSize="0px",e.offsetHeight,e.style.blockSize=`${t}px`,setTimeout(()=>{e.style.overflow="auto",e.style.blockSize="auto"},d)}}else{let e=t?.current;e&&(e.style.overflow="hidden",e.style.blockSize=`${e.offsetHeight}px`,e.offsetHeight,e.style.blockSize="0px",setTimeout(()=>{e.style.overflow="auto",e.style.display="none"},d))}}},[i,h,t]),(0,a.useEffect)(()=>{f(!0)},[l]),n.jsx($,{ref:t,level:o,isCollapsed:s,isHovered:l,open:i,openWhenCollapsed:p,isPopoutWhenCollapsed:c,transitionDuration:d,browserScroll:u,...x,children:!u&&0===o&&c&&s?n.jsx(y(),{options:{wheelPropagation:!1,suppressScrollX:!0},style:{maxBlockSize:"calc((var(--vh, 1vh) * 100))"},children:n.jsx("ul",{className:m().ul,children:r})}):n.jsx("ul",{className:m().ul,children:r})})});var k=r(5104),S=r(4920);let w=e=>{let{level:t,disabled:r,children:n,isCollapsed:a,isPopoutWhenCollapsed:i}=e;return(0,k.iv)({display:"flex",alignItems:"center",minBlockSize:"30px",textDecoration:"none",color:"inherit",boxSizing:"border-box",cursor:"pointer",paddingInlineEnd:"20px",paddingInlineStart:`${0===t?20:(i&&a?t:t+1)*20}px`,'&:hover, &[aria-expanded="true"]':{backgroundColor:"#f3f3f3"},"&:focus-visible":{outline:"none",backgroundColor:"#f3f3f3"},...r&&{pointerEvents:"none",cursor:"default",color:"#adadad"},[`&.${c.Kp.active}`]:{...!n&&{color:"white"},backgroundColor:n?"#f3f3f3":"#765feb"}})},Z=(0,a.forwardRef)(({className:e,component:t,children:r,...i},o)=>{if(t){if("string"==typeof t)return(0,a.createElement)(t,{className:s()(e),...i,ref:o},r);{let{className:n,...l}=t.props;return(0,a.cloneElement)(t,{className:s()(e,n),...i,...l,ref:o},r)}}return i.href?n.jsx(S.r,{ref:o,className:e,href:i.href,...i,children:r}):n.jsx("a",{ref:o,className:e,...i,children:r})});var z=r(9785);let N=()=>{let e=(0,a.useContext)(f);if(void 0===e)throw Error("Menu Component is required!");return e};var U=r(5405),P=r(2528),M=r(6366),K=r(8672),W=r(6766);let I=p.Z.li`
  position: relative;
  inline-size: 100%;
  margin-block-start: 4px;

  &.${c.Kp.open} > .${c.Kp.button} {
    background-color: #f3f3f3;
  }

  ${({menuItemStyles:e})=>e};
  ${({rootStyles:e})=>e};

  > .${c.Kp.button} {
    ${({level:e,disabled:t,active:r,children:n,isCollapsed:a,isPopoutWhenCollapsed:i})=>w({level:e,active:r,disabled:t,children:n,isCollapsed:a,isPopoutWhenCollapsed:i})};
    ${({buttonStyles:e})=>e};
  }
`,E=(0,a.forwardRef)((e,t)=>{let{children:r,className:o,contentClassName:p,label:u,icon:x,title:m,prefix:h,suffix:f,defaultOpen:v,level:j=0,disabled:y=!1,rootStyles:$,component:k,onOpenChange:S,onClick:w,onKeyUp:E,...O}=e,[D,R]=(0,a.useState)(!1),[_,F]=(0,a.useState)(!1),A=(0,a.useRef)(null),L=(0,a.useId)(),B=(0,i.usePathname)(),{isCollapsed:V,isPopoutWhenCollapsed:Y,isHovered:G,isBreakpointReached:H}=(0,d.Z)(),T=(0,l.ay)(),{browserScroll:q,triggerPopout:X,renderExpandIcon:J,renderExpandedMenuItemIcon:Q,menuItemStyles:ee,openSubmenu:et,toggleOpenSubmenu:er,transitionDuration:en,openSubmenusRef:ea,popoutMenuOffset:ei,textTruncate:eo}=N(),es=a.Children.toArray(r).filter(Boolean),el=ei&&ei.mainAxis&&("function"==typeof ei.mainAxis?ei.mainAxis({level:j}):ei.mainAxis),ed=ei&&ei.alignmentAxis&&("function"==typeof ei.alignmentAxis?ei.alignmentAxis({level:j}):ei.alignmentAxis),{refs:ec,floatingStyles:ep,context:eu}=(0,l.YF)({strategy:"fixed",open:D,onOpenChange:R,placement:"right-start",middleware:[(0,g.cv)({mainAxis:el,alignmentAxis:ed}),(0,g.RR)({crossAxis:!1}),(0,g.uY)(),(0,g.Cp)()],whileElementsMounted:b.Me}),ex=(0,l.XI)(eu,{handleClose:(0,l.xp)({blockPointerEvents:!0}),restMs:25,enabled:"hover"===X,delay:{open:75}}),em=(0,l.eS)(eu,{enabled:"click"===X}),eh=(0,l.bQ)(eu),ef=(0,l.qs)(eu,{role:"menu"}),{getReferenceProps:ev,getFloatingProps:eg,getItemProps:eb}=(0,l.NI)([ex,em,eh,ef]),ej=et?.some(e=>e.id===L)??!1,ey=()=>{(0!==j||!V||G)&&(er?.({level:j,label:u,active:_,id:L}),S?.(!ej),ea?.current&&ea?.current.length>0&&(ea.current=[]))},e$=e=>{if(ee){let t=ee[e];if(t)return"function"==typeof t?t({level:j,disabled:y,active:_,isSubmenu:!0,open:ej}):t}};(0,a.useEffect)(()=>{let e=()=>{R(!1)};return T?.events.on("click",e),()=>{T?.events.off("click",e)}},[T]),(0,a.useLayoutEffect)(()=>{V&&0===j&&R(!1)},[V,j,_]),(0,a.useEffect)(()=>{(0,U.ql)(r,B)?ea?.current.push({level:j,label:u,active:!0,id:L}):v&&ea?.current.push({level:j,label:u,active:!1,id:L})},[]),(0,a.useEffect)(()=>{(0,U.ql)(r,B)?(F(!0),ea?.current.findIndex(e=>e.id===L)===-1&&ea?.current.push({level:j,label:u,active:!0,id:L})):F(!1)},[B]);let eC=n.jsx(C,{ref:V&&0===j&&Y?ec.setFloating:A,...V&&0===j&&Y&&eg(),browserScroll:q,openWhenCollapsed:D,isPopoutWhenCollapsed:Y,transitionDuration:en,open:ej,level:j,isCollapsed:V,isHovered:G,className:s()(c.Kp.subMenuContent,p),rootStyles:{...V&&0===j&&Y&&ep,...e$("subMenuContent")},children:es.map(e=>(0,a.cloneElement)(e,{...eb({onClick(t){e.props.children&&!Array.isArray(e.props.children)&&(e.props.onClick?.(t),T?.events.emit("click"))}}),level:j+1}))});return(0,n.jsxs)(I,{ref:t,className:s()(c.Kp.subMenuRoot,{[c.Kp.active]:_},{[c.Kp.disabled]:y},{[c.Kp.open]:ej},o),menuItemStyles:e$("root"),level:j,isPopoutWhenCollapsed:Y,disabled:y,active:_,isCollapsed:V,buttonStyles:e$("button"),rootStyles:$,children:[(0,n.jsxs)(Z,{ref:V&&0===j&&Y&&!y?ec.setReference:null,onClick:e=>{w?.(e),ey()},...V&&0===j&&Y&&!y&&ev(),onKeyUp:e=>{E?.(e),"Enter"===e.key&&ey()},title:m,className:s()(c.Kp.button,{[c.Kp.active]:_}),component:k,tabIndex:y?-1:0,...O,children:[(0,U.E4)({icon:x,level:j,active:_,disabled:y,renderExpandedMenuItemIcon:Q,styles:e$("icon"),isBreakpointReached:H}),h&&n.jsx(M.Z,{isHovered:G,isCollapsed:V,firstLevel:0===j,className:c.Kp.prefix,rootStyles:e$("prefix"),children:h}),n.jsx(P.Z,{className:c.Kp.label,rootStyles:e$("label"),textTruncate:eo,children:u}),f&&n.jsx(K.Z,{isHovered:G,isCollapsed:V,firstLevel:0===j,className:c.Kp.suffix,rootStyles:e$("suffix"),children:f}),V&&!G&&0===j?null:n.jsx(W.g,{className:c.Kp.subMenuExpandIcon,rootStyles:e$("subMenuExpandIcon"),children:J?J({level:j,disabled:y,active:_,open:ej}):n.jsx(W.Z,{open:ej,transitionDuration:en,children:n.jsx(z.Z,{fontSize:"1rem"})})})]}),V&&0===j&&Y?n.jsx(l.ll,{children:D&&eC}):eC]})});var O=r(8765);let D=p.Z.li`
  position: relative;
  margin-block-start: 4px;
  ${({menuItemStyles:e})=>e};
  ${({rootStyles:e})=>e};

  > .${c.Kp.button} {
    ${({level:e,disabled:t,isCollapsed:r,isPopoutWhenCollapsed:n})=>w({level:e,disabled:t,isCollapsed:r,isPopoutWhenCollapsed:n})};
    ${({buttonStyles:e})=>e};
  }
`,R=(0,a.forwardRef)((e,t)=>{let{children:r,icon:o,className:l,prefix:p,suffix:u,level:x=0,disabled:m=!1,exactMatch:h=!0,activeUrl:f,component:v,onActiveChange:g,rootStyles:b,...j}=e,[y,$]=(0,a.useState)(!1),C=(0,i.usePathname)(),{menuItemStyles:k,renderExpandedMenuItemIcon:S,textTruncate:w}=N(),{isCollapsed:z,isHovered:W,isPopoutWhenCollapsed:I,toggleVerticalNav:E,isToggled:R,isBreakpointReached:_}=(0,d.Z)(),F=e=>{if(k){let t=k[e];if(t)return"function"==typeof t?t({level:x,disabled:m,active:y,isSubmenu:!1}):t}},A=()=>{R&&E()};return(0,a.useEffect)(()=>{let e=j.href||v&&"string"!=typeof v&&v.props.href;e&&((h?C===e:f&&C.includes(f))?$(!0):$(!1))},[C]),(0,O.Z)(()=>{g?.(y)},[y]),n.jsx(D,{ref:t,className:s()(c.Kp.menuItemRoot,{[c.Kp.disabled]:m},{[c.Kp.active]:y},l),level:x,isCollapsed:z,isPopoutWhenCollapsed:I,disabled:m,buttonStyles:F("button"),menuItemStyles:F("root"),rootStyles:b,children:(0,n.jsxs)(Z,{className:s()(c.Kp.button,{[c.Kp.active]:y}),component:v,tabIndex:m?-1:0,...j,onClick:e=>{A(),j.onClick&&j.onClick(e)},children:[(0,U.E4)({icon:o,level:x,active:y,disabled:m,renderExpandedMenuItemIcon:S,styles:F("icon"),isBreakpointReached:_}),p&&n.jsx(M.Z,{isHovered:W,isCollapsed:z,firstLevel:0===x,className:c.Kp.prefix,rootStyles:F("prefix"),children:p}),n.jsx(P.Z,{className:c.Kp.label,rootStyles:F("label"),textTruncate:w,children:r}),u&&n.jsx(K.Z,{isHovered:W,isCollapsed:z,firstLevel:0===x,className:c.Kp.suffix,rootStyles:F("suffix"),children:u})]})})});var _=r(6403),F=r(7549);let A=p.Z.div`
  position: fixed;
  inset-inline-start: 0;
  inset-block-start: 0;
  inset-inline-end: 0;
  inset-block-end: 0;
  z-index: 1;
  background-color: ${({backdropColor:e})=>e||"rgba(0, 0, 0, 0.3)"};
  touch-action: none;
`,L=p.Z.aside`
  ${({scrollWithContent:e})=>!e&&`
    position: sticky;
    inset-block-start: 0;
    block-size: 100dvh;
  `}
  z-index: 9;

  /* Transition */
  transition-property: inline-size, min-inline-size, margin-inline-start, inset-inline-start;
  transition-duration: ${({transitionDuration:e})=>`${e}ms`};
  transition-timing-function: ease-in-out;

  /* Width & Min Width & Margin */
  inline-size: ${({width:e})=>`${e}px`};
  min-inline-size: ${({width:e})=>`${e}px`};
  &.${c.xY.collapsed} {
    inline-size: ${({collapsedWidth:e})=>`${e}px`};
    min-inline-size: ${({collapsedWidth:e})=>`${e}px`};
  }

  &.${c.xY.collapsing}, &.${c.xY.expanding} {
    pointer-events: none;
  }

  /* Collapsed & Toggled */
  &.${c.xY.breakpointReached} {
    position: fixed;
    block-size: 100%;
    inset-block-start: 0;
    inset-inline-start: ${({width:e})=>`-${e}px`};
    z-index: 100;
    margin: 0;
    &.${c.xY.collapsed} {
      inset-inline-start: -${({collapsedWidth:e})=>`${e}px`};
    }
    &.${c.xY.toggled} {
      inset-inline-start: 0;
    }
  }

  ${({width:e,isBreakpointReached:t})=>!t&&`
    &.${c.xY.toggled} {
      margin-inline-start: -${e}px;
    }
  `}

  &.${c.uF.root} .${c.Kp.root} > ul {
    flex-direction: column;
    align-items: stretch;
  }

  /* User Styles */
  ${({customStyles:e})=>e}
`,B=p.Z.div`
  position: relative;
  block-size: 100%;
  inline-size: 100%;
  border-inline-end: 1px solid #efefef;
  .${c.xY.hovered} &,
  .${c.xY.expanding} & {
    inline-size: ${({width:e})=>`${e}px`};
  }

  /* Transition */
  transition-property: inline-size, inset-inline-start;
  transition-duration: ${({transitionDuration:e})=>`${e}ms`};
  transition-timing-function: ease-in-out;
`,V=p.Z.div`
  position: relative;
  block-size: 100%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  ${({backgroundColor:e})=>e&&`background-color:${e};`}
`;var Y=r(9229),G=r.n(Y),H=r(7445);let T=p.Z.span`
  ${({textTruncate:e})=>e&&`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `};
  ${({isCollapsed:e,isHovered:t})=>!e||e&&t?`
flex-grow: 1;
`:""}
  ${({rootStyles:e})=>e};
`,q=p.Z.li`
  display: flex;
  inline-size: 100%;
  position: relative;
  overflow: hidden;
  margin-block-start: 15px;

  & .${c.Kp.menuSectionContent} {
    font-size: 14px;
    color: #aaaaaa;
  }

  ${({menuSectionStyles:e})=>e};
  ${({rootStyles:e})=>e};
`,X={display:"inline-block",inlineSize:"100%",position:"relative",listStyle:"none",padding:0,overflow:"hidden"},J={display:"flex",alignItems:"center",inlineSize:"100%",position:"relative",paddingBlock:"0.75rem",paddingInline:"1.25rem",overflow:"hidden"},Q=(0,a.forwardRef)((e,t)=>{let{children:r,icon:a,className:i,prefix:o,suffix:l,label:p,rootStyles:u,...x}=e,{isCollapsed:m,isHovered:h}=(0,d.Z)(),{menuSectionStyles:f,collapsedMenuSectionLabel:v,textTruncate:g}=N(),b=e=>{if(f)return f[e]};return n.jsx(q,{ref:t,rootStyles:u,menuSectionStyles:b("root"),className:s()(c.Kp.menuSectionRoot,i),children:(0,n.jsxs)("ul",{className:c.Kp.menuSectionWrapper,...x,style:X,children:[(0,n.jsxs)("li",{className:c.Kp.menuSectionContent,style:J,children:[a&&n.jsx(H.Z,{className:c.Kp.icon,rootStyles:b("icon"),children:a}),o&&n.jsx(M.Z,{isCollapsed:m,className:c.Kp.prefix,rootStyles:b("prefix"),children:o}),v&&m&&!h?n.jsx(T,{isCollapsed:m,isHovered:h,className:c.Kp.menuSectionLabel,rootStyles:b("label"),textTruncate:g,children:v}):p&&n.jsx(T,{isCollapsed:m,isHovered:h,className:c.Kp.menuSectionLabel,rootStyles:b("label"),textTruncate:g,children:p}),l&&n.jsx(K.Z,{isCollapsed:m,className:c.Kp.suffix,rootStyles:b("suffix"),children:l})]}),r]})})});var ee=r(1351);let et=e=>{let{width:t=260,collapsedWidth:r=80,defaultCollapsed:i=!1,backgroundColor:o="white",backgroundImage:l,breakpoint:p="lg",customBreakpoint:u,breakpoints:x,transitionDuration:m=h.rd,backdropColor:f,scrollWithContent:v=!1,className:g,customStyles:b,children:j,...y}=e,$={...h.R1,...x},C=(0,a.useRef)(!1),{updateVerticalNavState:k,isCollapsed:S,width:w,isBreakpointReached:Z,isToggled:z,isHovered:N,collapsing:U,expanding:P,isScrollWithContent:M,transitionDuration:K,isPopoutWhenCollapsed:W}=(0,d.Z)(),I=(0,F.Z)(u??(p?$[p]:p));(0,a.useEffect)(()=>{k({width:t,collapsedWidth:r,transitionDuration:m,isScrollWithContent:v,isBreakpointReached:I}),I?(S&&!C.current&&(C.current=!0),S&&k({isCollapsed:!1}),N&&k({isHovered:!1})):(k({isToggled:!1}),C.current&&k({isCollapsed:!0}))},[t,r,v,I,k]),(0,a.useEffect)(()=>{i&&k({isCollapsed:i,isToggled:!1})},[i]),(0,a.useEffect)(()=>{setTimeout(()=>{k({expanding:!1,collapsing:!1})},m),S||I||!C.current||(C.current=!1)},[S]);let E=()=>{k({isToggled:!1})};return(0,n.jsxs)(L,{width:i&&!w?r:t,isBreakpointReached:Z,collapsedWidth:r,collapsing:U,expanding:P,customStyles:b,scrollWithContent:M,transitionDuration:K,className:s()(c.xY.root,{[c.xY.collapsed]:S,[c.xY.toggled]:z,[c.xY.hovered]:N,[c.xY.breakpointReached]:Z,[c.xY.scrollWithContent]:M,[c.xY.collapsing]:U,[c.xY.expanding]:P},g),...y,children:[(0,n.jsxs)(B,{width:w,className:c.xY.container,transitionDuration:K,...!W&&S&&!I&&{onMouseEnter:()=>{S&&!N&&k({isHovered:!0})},onMouseLeave:()=>{S&&N&&k({isHovered:!1})}},children:[n.jsx(V,{className:c.xY.bgColorContainer,backgroundColor:o,children:j}),l&&n.jsx("img",{className:s()(c.xY.image,G().root),src:l,alt:"verticalNav background"})]}),z&&I&&n.jsx(A,{role:"button",tabIndex:0,"aria-label":"backdrop",onClick:E,onKeyPress:E,className:c.xY.backdrop,backdropColor:f})]})}},8726:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var n=r(4748),a=r(1622),i=r(8113),o=r.n(i),s=r(2148),l=r(6782);let d=()=>{let{isBreakpointReached:e}=(0,s.Z)();return(0,n.jsxs)("div",{className:o()(l.WG.footerContent,"flex items-center justify-between flex-wrap gap-4"),children:[(0,n.jsxs)("p",{children:[n.jsx("span",{className:"text-textSecondary",children:`\xa9 ${new Date().getFullYear()}, Made with `}),n.jsx("span",{children:`❤️`}),n.jsx("span",{className:"text-textSecondary",children:" by "}),n.jsx(a.default,{href:"https://pixinvent.com/",target:"_blank",className:"text-primary uppercase",children:"Pixinvent"})]}),!e&&(0,n.jsxs)("div",{className:"flex items-center gap-4",children:[n.jsx(a.default,{href:"https://themeforest.net/licenses/standard",target:"_blank",className:"text-primary",children:"License"}),n.jsx(a.default,{href:"https://themeforest.net/user/pixinvent/portfolio",target:"_blank",className:"text-primary",children:"More Themes"}),n.jsx(a.default,{href:"https://demos.pixinvent.com/materialize-nextjs-admin-template/documentation",target:"_blank",className:"text-primary",children:"Documentation"}),n.jsx(a.default,{href:"https://pixinvent.ticksy.com",target:"_blank",className:"text-primary",children:"Support"})]})]})}},9784:(e,t,r)=>{"use strict";r.d(t,{default:()=>B});var n=r(4748),a=r(4707),i=r(8113),o=r.n(i),s=r(591),l=r(9215),d=r(1062),c=r(1622),p=r(5831),u=r(4415),x=r.n(u),m=r(6403),h=r(4456),f=r(1351),v=r(2148),g=r(5405);let b=(0,p.ZP)("div")(({theme:e})=>({top:60,left:-8,zIndex:2,opacity:0,position:"absolute",pointerEvents:"none",width:"calc(100% + 15px)",height:e.mixins.toolbar.minHeight,transition:"opacity .15s ease-in-out",background:`linear-gradient(var(--mui-palette-background-default) ${"rtl"===e.direction?"95%":"5%"}, rgb(var(--mui-palette-background-defaultChannel) / 0.85) 30%, rgb(var(--mui-palette-background-defaultChannel) / 0.5) 65%, rgb(var(--mui-palette-background-defaultChannel) / 0.3) 75%, transparent)`,"&.scrolled":{opacity:1}})),j=({children:e})=>{let{isBreakpointReached:t}=(0,v.Z)(),r=(0,d.useRef)(null),a=t?"div":x(),i=(e,n)=>{e=t||!n?e.target:e,r&&e.scrollTop>0?r.current.classList.contains("scrolled")||r.current.classList.add("scrolled"):r.current.classList.remove("scrolled")};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(m.Z,{children:[n.jsx(c.default,{href:"/",children:n.jsx(h.Z,{})}),n.jsx(f.Z,{})]}),n.jsx(b,{ref:r}),n.jsx(a,{...t?{className:"bs-full overflow-y-auto overflow-x-hidden",onScroll:e=>i(e,!1)}:{options:{wheelPropagation:!1,suppressScrollX:!0},onScrollY:e=>i(e,!0)},children:(0,g.fF)(e)})]})};var y=r(5276),$=r(7508),C=r(6766),k=r(3095);let S=(e,t)=>({root:({level:t})=>({padding:e.spacing(2),margin:e.spacing(-2),...0===t&&{[`& .${k.Kp.button}`]:{borderRadius:"var(--mui-shape-customBorderRadius-lg)"}},[`&.${k.Kp.open} > .${k.Kp.button}`]:{backgroundColor:"var(--mui-palette-action-selected) !important"},...0===t?{[`& .${k.Kp.button}.${k.Kp.active}`]:{color:"var(--mui-palette-primary-contrastText) !important",backgroundColor:"var(--mui-palette-primary-main) !important",boxShadow:"var(--mui-customShadows-xs)"}}:{[`&:not([aria-expanded]) > .${k.Kp.button}.${k.Kp.active}`]:{backgroundColor:"var(--mui-palette-primary-lightOpacity)",color:"var(--mui-palette-primary-main)"},[`&[aria-expanded] > .${k.Kp.button}.${k.Kp.active}`]:{backgroundColor:"var(--mui-palette-action-selected) !important"}},[`&.${k.Kp.disabled} > .${k.Kp.button}`]:{color:"var(--mui-palette-text-disabled)","& *":{color:"inherit"}}}),button:{paddingInline:e.spacing(4),"&:not(:has(.MuiChip-root))":{paddingBlock:e.spacing(2)},"&:has(.MuiChip-root)":{paddingBlock:e.spacing(1.75)},[`&:not(.${k.Kp.active}):hover, &:not(.${k.Kp.active}):focus-visible, &:not(.${k.Kp.active})[aria-expanded="true"]`]:{backgroundColor:"var(--mui-palette-action-hover)"}},icon:({level:r})=>({marginInlineEnd:e.spacing(2),...r<2?{fontSize:"1.375rem"}:{fontSize:"0.5rem",color:"var(--mui-palette-text-secondary)"},"& > i, & > svg":{fontSize:"inherit"},[`& .${t}`]:{fontSize:"0.5rem",color:"var(--mui-palette-text-disabled)",...1===r&&{marginInline:e.spacing(1.75)},[`.${k.Kp.active}:not([aria-expanded]) > .${k.Kp.active} &`]:{color:"var(--mui-palette-primary-main)"}}}),prefix:{marginInlineEnd:e.spacing(2)},suffix:{marginInlineStart:e.spacing(2)},subMenuStyles:{zIndex:"calc(var(--header-z-index) + 1)"},subMenuExpandIcon:{fontSize:"1.375rem",marginInlineStart:e.spacing(2),"& i, & svg":{fontSize:"inherit"}},subMenuContent:{backgroundColor:"var(--mui-palette-background-paper)",borderRadius:"var(--mui-shape-borderRadius)",boxShadow:"var(--mui-customShadows-lg)",'[data-skin="bordered"] ~ [data-floating-ui-portal] &':{boxShadow:"none",border:"1px solid var(--mui-palette-divider)"},"& > ul, & > div > ul":{paddingBlock:e.spacing(2)}}}),w=e=>({[`.${k.uF.root}:has(&)`]:{padding:e.spacing(2),margin:e.spacing(-2)},"& > ul":{padding:e.spacing(2),margin:e.spacing(-2),"& > li:not(:last-of-type)":{marginInlineEnd:e.spacing(1)}}});var Z=r(2008),z=r(8359);let N=({level:e})=>n.jsx($.Z,{level:e,children:n.jsx("i",{className:"ri-arrow-right-s-line"})}),U=({open:e,transitionDuration:t})=>n.jsx(C.Z,{open:e,transitionDuration:t,children:n.jsx("i",{className:"ri-arrow-right-s-line"})}),P=()=>{let e=(0,y.Z)(),t=(0,s.Z)(),{transitionDuration:r}=e;return n.jsx(l.ZP,{switchToVertical:!0,verticalNavContent:j,verticalNavProps:{customStyles:(0,z.Z)(e,t),backgroundColor:"var(--mui-palette-background-default)"},children:(0,n.jsxs)(l.v2,{rootStyles:w(t),renderExpandIcon:({level:e})=>n.jsx(N,{level:e}),renderExpandedMenuItemIcon:{icon:n.jsx("i",{className:"ri-circle-fill"})},menuItemStyles:S(t,"ri-circle-fill"),popoutMenuOffset:{mainAxis:({level:e})=>e&&e>0?4:14,alignmentAxis:0},verticalMenuProps:{menuItemStyles:(0,Z.Z)(e,t),renderExpandIcon:({open:e})=>n.jsx(U,{open:e,transitionDuration:r}),renderExpandedMenuItemIcon:{icon:n.jsx("i",{className:"ri-circle-fill"})}},children:[n.jsx(l.sN,{href:"/",icon:n.jsx("i",{className:"ri-home-smile-line"}),children:"Home"}),n.jsx(l.sN,{href:"/about",icon:n.jsx("i",{className:"ri-information-line"}),children:"About"})]})})};var M=r(4682),K=r(7506),W=r(6782);let I=a.Z.div`
  ${({isContentCompact:e,isBreakpointReached:t})=>!t&&`
    padding: ${M.Z.layoutPadding}px;

    ${e&&`
      margin-inline: auto;
      max-inline-size: ${M.Z.compactContentWidth}px;
    `}
  `}
`,E=()=>{let{settings:e}=(0,K.r)(),{isBreakpointReached:t}=(0,v.Z)(),r="compact"===e.navbarContentWidth;return n.jsx("div",{...!t&&{className:o()(W.WG.navigation,"relative flex border-bs")},children:n.jsx(I,{isContentCompact:r,isBreakpointReached:t,...!t&&{className:o()(W.WG.navigationContentWrapper,"flex items-center is-full plb-2")},children:n.jsx(P,{})})})},O=()=>{let{toggleVerticalNav:e}=(0,y.Z)(),{isBreakpointReached:t}=(0,v.Z)();return n.jsx(n.Fragment,{children:t&&n.jsx("i",{className:"ri-menu-line text-xl cursor-pointer",onClick:()=>{e()}})})};var D=r(4813),R=r(7148);let _=()=>{let{isBreakpointReached:e}=(0,v.Z)();return(0,n.jsxs)("div",{className:o()(W.WG.navbarContent,"flex items-center justify-between gap-4 is-full"),children:[(0,n.jsxs)("div",{className:"flex items-center gap-4",children:[n.jsx(O,{}),!e&&n.jsx(h.Z,{})]}),(0,n.jsxs)("div",{className:"flex items-center",children:[n.jsx(D.Z,{}),n.jsx(R.Z,{})]})]})},F=({children:e})=>n.jsx("div",{className:o()(W.WG.navbar,"flex items-center justify-between is-full"),children:e}),A=a.Z.header`
  box-shadow: var(--mui-customShadows-xs);

  [data-skin='bordered'] & {
    box-shadow: none;
    border-block-end: 1px solid var(--border-color);
  }

  &:not(.${W.WG.headerBlur}) {
    background-color: var(--mui-palette-background-paper);
  }

  &.${W.WG.headerBlur} {
    backdrop-filter: blur(6px);
    background-color: rgb(var(--background-color-rgb) / 0.88);
  }

  &.${W.WG.headerFixed} {
    position: sticky;
    inset-block-start: 0;
    z-index: var(--header-z-index);
  }

  &.${W.WG.headerContentCompact} .${W.WG.navbar} {
    margin-inline: auto;
    max-inline-size: ${M.Z.compactContentWidth}px;
  }

  .${W.WG.navbar} {
    position: relative;
    min-block-size: var(--header-height);
    padding-block: 8px;
    padding-inline: ${M.Z.layoutPadding}px;
  }

  ${({overrideStyles:e})=>e}
`,L=e=>{let{children:t,overrideStyles:r}=e,{settings:a}=(0,K.r)(),{navbarContentWidth:i}=a,s="fixed"===M.Z.navbar.type,l="static"===M.Z.navbar.type,d=!0===M.Z.navbar.blur;return n.jsx(A,{overrideStyles:r,className:o()(W.WG.header,{[W.WG.headerFixed]:s,[W.WG.headerStatic]:l,[W.WG.headerBlur]:d,[W.WG.headerContentCompact]:"compact"===i,[W.WG.headerContentWide]:"wide"===i}),children:t})},B=()=>{let{isBreakpointReached:e}=(0,v.Z)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(L,{children:[n.jsx(F,{children:n.jsx(_,{})}),!e&&n.jsx(E,{})]}),e&&n.jsx(E,{})]})}},4456:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(4748),a=r(1062),i=r(4707);let o=e=>(0,n.jsxs)("svg",{width:"40",height:"22",viewBox:"0 0 40 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[n.jsx("rect",{width:"7.37565",height:"21.1131",rx:"3.68783",transform:"matrix(-0.865206 0.501417 0.498585 0.866841 28.4115 0)",fill:"var(--mui-palette-primary-main)"}),n.jsx("rect",{width:"7.37565",height:"21.1131",rx:"3.68783",transform:"matrix(-0.865206 0.501417 0.498585 0.866841 28.4869 0)",fill:"url(#paint0_linear_448_114254)",fillOpacity:"0.4"}),n.jsx("rect",{width:"7.37565",height:"21.1131",rx:"3.68783",transform:"matrix(0.865206 0.501417 -0.498585 0.866841 25.6563 0)",fill:"var(--mui-palette-primary-main)"}),n.jsx("rect",{width:"7.37565",height:"21.1131",rx:"3.68783",transform:"matrix(-0.865206 0.501417 0.498585 0.866841 14.3293 0)",fill:"var(--mui-palette-primary-main)"}),n.jsx("rect",{width:"7.37565",height:"21.1131",rx:"3.68783",transform:"matrix(-0.865206 0.501417 0.498585 0.866841 14.3293 0)",fill:"url(#paint1_linear_448_114254)",fillOpacity:"0.4"}),n.jsx("rect",{width:"7.37565",height:"21.1131",rx:"3.68783",transform:"matrix(0.865206 0.501417 -0.498585 0.866841 11.5132 0)",fill:"var(--mui-palette-primary-main)"}),(0,n.jsxs)("defs",{children:[(0,n.jsxs)("linearGradient",{id:"paint0_linear_448_114254",x1:"3.68783",y1:"0",x2:"3.68783",y2:"21.1131",gradientUnits:"userSpaceOnUse",children:[n.jsx("stop",{}),n.jsx("stop",{offset:"1",stopOpacity:"0"})]}),(0,n.jsxs)("linearGradient",{id:"paint1_linear_448_114254",x1:"3.68783",y1:"0",x2:"3.68783",y2:"21.1131",gradientUnits:"userSpaceOnUse",children:[n.jsx("stop",{}),n.jsx("stop",{offset:"1",stopOpacity:"0"})]})]})]});var s=r(4682),l=r(5276),d=r(7506);let c=i.Z.span`
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: 0.15px;
  text-transform: capitalize;
  color: var(--mui-palette-text-primary);
  color: ${({color:e})=>e??"var(--mui-palette-text-primary)"};
  transition: ${({transitionDuration:e})=>`margin-inline-start ${e}ms ease-in-out, opacity ${e}ms ease-in-out`};

  ${({isHovered:e,isCollapsed:t,isBreakpointReached:r})=>r||!t||e?"opacity: 1; margin-inline-start: 8px;":"opacity: 0; margin-inline-start: 0;"}
`,p=({color:e})=>{let t=(0,a.useRef)(null),{isHovered:r,transitionDuration:i,isBreakpointReached:p}=(0,l.Z)(),{settings:u}=(0,d.r)(),{layout:x}=u;return(0,a.useEffect)(()=>{"collapsed"===x&&t&&t.current&&(p||"collapsed"!==x||r?t.current.classList.remove("hidden"):t.current?.classList.add("hidden"))},[r,x,p]),(0,n.jsxs)("div",{className:"flex items-center min-bs-[24px]",children:[n.jsx(o,{}),n.jsx(c,{color:e,ref:t,isHovered:r,isCollapsed:"collapsed"===x,transitionDuration:i,isBreakpointReached:p,children:s.Z.templateName})]})}},4813:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(4748),a=r(1062),i=r(787),o=r(8458),s=r(4272),l=r(5339),d=r(67),c=r(8234),p=r(5221),u=r(7554),x=r(7506);let m=()=>{let[e,t]=(0,a.useState)(!1),[r,m]=(0,a.useState)(!1),h=(0,a.useRef)(null),{settings:f,updateSettings:v}=(0,x.r)(),g=()=>{t(!1),m(!1)},b=e=>{g(),f.mode!==e&&v({mode:e})};return(0,n.jsxs)(n.Fragment,{children:[n.jsx(i.Z,{title:f.mode+" Mode",onOpen:()=>m(!0),onClose:()=>m(!1),open:!e&&!!r,PopperProps:{className:"capitalize"},children:n.jsx(o.Z,{ref:h,onClick:()=>{t(e=>!e)},className:"text-textPrimary",children:n.jsx("i",{className:"system"===f.mode?"ri-macbook-line":"dark"===f.mode?"ri-moon-clear-line":"ri-sun-line"})})}),n.jsx(s.Z,{open:e,transition:!0,disablePortal:!0,placement:"bottom-start",anchorEl:h.current,className:"min-is-[160px] !mbs-4 z-[1]",children:({TransitionProps:e,placement:t})=>n.jsx(l.Z,{...e,style:{transformOrigin:"bottom-start"===t?"left top":"right top"},children:n.jsx(d.Z,{className:"bordered"===f.skin?"border shadow-none":"shadow-lg",children:n.jsx(c.d,{onClickAway:g,children:(0,n.jsxs)(p.Z,{onKeyDown:g,children:[(0,n.jsxs)(u.Z,{className:"gap-3 pli-4",onClick:()=>b("light"),selected:"light"===f.mode,children:[n.jsx("i",{className:"ri-sun-line"}),"Light"]}),(0,n.jsxs)(u.Z,{className:"gap-3 pli-4",onClick:()=>b("dark"),selected:"dark"===f.mode,children:[n.jsx("i",{className:"ri-moon-clear-line"}),"Dark"]}),(0,n.jsxs)(u.Z,{className:"gap-3 pli-4",onClick:()=>b("system"),selected:"system"===f.mode,children:[n.jsx("i",{className:"ri-computer-line"}),"System"]})]})})})})})]})}},7148:(e,t,r)=>{"use strict";r.d(t,{Z:()=>j});var n=r(4748),a=r(1062),i=r(76),o=r(5831),s=r(3098),l=r(5230),d=r(4272),c=r(5339),p=r(67),u=r(8234),x=r(5221),m=r(3852),h=r(2192),f=r(7554),v=r(6313),g=r(7506);let b=(0,o.ZP)("span")({width:8,height:8,borderRadius:"50%",cursor:"pointer",backgroundColor:"var(--mui-palette-success-main)",boxShadow:"0 0 0 2px var(--mui-palette-background-paper)"}),j=()=>{let[e,t]=(0,a.useState)(!1),r=(0,a.useRef)(null),o=(0,i.useRouter)(),{settings:j}=(0,g.r)(),y=()=>{e?t(!1):t(!0)},$=(e,n)=>{n&&o.push(n),r.current&&r.current.contains(e?.target)||t(!1)},C=async()=>{o.push("/login")};return(0,n.jsxs)(n.Fragment,{children:[n.jsx(s.Z,{ref:r,overlap:"circular",badgeContent:n.jsx(b,{onClick:y}),anchorOrigin:{vertical:"bottom",horizontal:"right"},className:"mis-2",children:n.jsx(l.Z,{ref:r,alt:"John Doe",src:"/images/avatars/1.png",onClick:y,className:"cursor-pointer bs-[38px] is-[38px]"})}),n.jsx(d.Z,{open:e,transition:!0,disablePortal:!0,placement:"bottom-end",anchorEl:r.current,className:"min-is-[240px] !mbs-4 z-[1]",children:({TransitionProps:e,placement:t})=>n.jsx(c.Z,{...e,style:{transformOrigin:"bottom-end"===t?"right top":"left top"},children:n.jsx(p.Z,{elevation:"bordered"===j.skin?0:8,..."bordered"===j.skin&&{className:"border"},children:n.jsx(u.d,{onClickAway:e=>$(e),children:(0,n.jsxs)(x.Z,{children:[(0,n.jsxs)("div",{className:"flex items-center plb-2 pli-4 gap-2",tabIndex:-1,children:[n.jsx(l.Z,{alt:"John Doe",src:"/images/avatars/1.png"}),(0,n.jsxs)("div",{className:"flex items-start flex-col",children:[n.jsx(m.Z,{variant:"body2",className:"font-medium",color:"text.primary",children:"John Doe"}),n.jsx(m.Z,{variant:"caption",children:"admin@materialize.com"})]})]}),n.jsx(h.Z,{className:"mlb-1"}),(0,n.jsxs)(f.Z,{className:"gap-3 pli-4",onClick:e=>$(e),children:[n.jsx("i",{className:"ri-user-3-line"}),n.jsx(m.Z,{color:"text.primary",children:"My Profile"})]}),(0,n.jsxs)(f.Z,{className:"gap-3 pli-4",onClick:e=>$(e),children:[n.jsx("i",{className:"ri-settings-4-line"}),n.jsx(m.Z,{color:"text.primary",children:"Settings"})]}),(0,n.jsxs)(f.Z,{className:"gap-3 pli-4",onClick:e=>$(e),children:[n.jsx("i",{className:"ri-money-dollar-circle-line"}),n.jsx(m.Z,{color:"text.primary",children:"Pricing"})]}),(0,n.jsxs)(f.Z,{className:"gap-3 pli-4",onClick:e=>$(e),children:[n.jsx("i",{className:"ri-question-line"}),n.jsx(m.Z,{color:"text.primary",children:"FAQ"})]}),n.jsx("div",{className:"flex items-center plb-1.5 pli-4",children:n.jsx(v.Z,{fullWidth:!0,variant:"contained",color:"error",size:"small",endIcon:n.jsx("i",{className:"ri-logout-box-r-line"}),onClick:C,children:"Logout"})})]})})})})})]})}},8959:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var n=r(4748),a=r(1622),i=r(8113),o=r.n(i),s=r(5276),l=r(6782);let d=()=>{let{isBreakpointReached:e}=(0,s.Z)();return(0,n.jsxs)("div",{className:o()(l.jU.footerContent,"flex items-center justify-between flex-wrap gap-4"),children:[(0,n.jsxs)("p",{children:[n.jsx("span",{className:"text-textSecondary",children:`\xa9 ${new Date().getFullYear()}, Made with `}),n.jsx("span",{children:`❤️`}),n.jsx("span",{className:"text-textSecondary",children:" by "}),n.jsx(a.default,{href:"https://pixinvent.com",target:"_blank",className:"text-primary capitalize",children:"Pixinvent"})]}),!e&&(0,n.jsxs)("div",{className:"flex items-center gap-4",children:[n.jsx(a.default,{href:"https://themeforest.net/licenses/standard",target:"_blank",className:"text-primary",children:"License"}),n.jsx(a.default,{href:"https://themeforest.net/user/pixinvent/portfolio",target:"_blank",className:"text-primary",children:"More Themes"}),n.jsx(a.default,{href:"https://demos.pixinvent.com/materialize-nextjs-admin-template/documentation",target:"_blank",className:"text-primary",children:"Documentation"}),n.jsx(a.default,{href:"https://pixinvent.ticksy.com",target:"_blank",className:"text-primary",children:"Support"})]})]})}},927:(e,t,r)=>{"use strict";r.d(t,{default:()=>p});var n=r(4748),a=r(8113),i=r.n(a),o=r(5276);let s=()=>{let{toggleVerticalNav:e,isBreakpointReached:t}=(0,o.Z)();return n.jsx(n.Fragment,{children:t&&n.jsx("i",{className:"ri-menu-line text-xl cursor-pointer",onClick:()=>{e()}})})};var l=r(4813),d=r(7148),c=r(6782);let p=()=>(0,n.jsxs)("div",{className:i()(c.jU.navbarContent,"flex items-center justify-between gap-4 is-full"),children:[(0,n.jsxs)("div",{className:"flex items-center gap-4",children:[n.jsx(s,{}),n.jsx(l.Z,{})]}),n.jsx("div",{className:"flex items-center",children:n.jsx(d.Z,{})})]})},7172:(e,t,r)=>{"use strict";r.d(t,{default:()=>k});var n=r(4748),a=r(1062),i=r(1622),o=r(5831),s=r(8982),l=r(591),d=r(6156),c=r(4415),p=r.n(c),u=r(5276),x=r(6766),m=r(2008),h=r(3095);let f=(e,t)=>{let{isCollapsed:r,isHovered:n,collapsedWidth:a}=e,i=r&&!n;return{root:{marginBlockStart:t.spacing(6.75),[`& .${h.Kp.menuSectionContent}`]:{color:"var(--mui-palette-text-disabled)",paddingInline:"0 !important",paddingBlock:`${t.spacing(i?3.825:1.75)} !important`,marginBlockEnd:t.spacing(2),gap:t.spacing(2.5),...i&&{paddingInlineStart:`${t.spacing(i?(a-47)/8:3)} !important`,paddingInlineEnd:`${t.spacing(i?(a-47)/8:3)} !important`},"&:before":{content:'""',blockSize:1,inlineSize:i?"1.375rem":"0.875rem",backgroundColor:"var(--mui-palette-divider)"},...i&&{paddingInline:"12px !important"},...!i&&{"&:after":{content:'""',blockSize:1,flexGrow:1,backgroundColor:"var(--mui-palette-divider)"}},[`& .${h.Kp.menuSectionLabel}`]:{flexGrow:0,textTransform:"uppercase",fontSize:"13px",lineHeight:1.38462,letterSpacing:"0.4px",...i&&{display:"none"}}}}}},v=({open:e,transitionDuration:t})=>n.jsx(x.Z,{open:e,transitionDuration:t,children:n.jsx("i",{className:"ri-arrow-right-s-line"})}),g=({scrollMenu:e})=>{let t=(0,l.Z)(),r=(0,u.Z)(),{isBreakpointReached:a,transitionDuration:i}=r,o=a?"div":p();return n.jsx(o,{...a?{className:"bs-full overflow-y-auto overflow-x-hidden",onScroll:t=>e(t,!1)}:{options:{wheelPropagation:!1,suppressScrollX:!0},onScrollY:t=>e(t,!0)},children:(0,n.jsxs)(d.v2,{popoutMenuOffset:{mainAxis:17},menuItemStyles:(0,m.Z)(r,t),renderExpandIcon:({open:e})=>n.jsx(v,{open:e,transitionDuration:i}),renderExpandedMenuItemIcon:{icon:n.jsx("i",{className:"ri-circle-fill"})},menuSectionStyles:f(r,t),children:[n.jsx(d.sN,{href:"/home",icon:n.jsx("i",{className:"ri-home-smile-line"}),children:"Home"}),n.jsx(d.sN,{href:"/about",icon:n.jsx("i",{className:"ri-information-line"}),children:"About"})]})})};var b=r(4456),j=r(7506),y=r(8359);let $=(0,o.ZP)("div")(({theme:e})=>({top:60,left:-8,zIndex:2,opacity:0,position:"absolute",pointerEvents:"none",width:"calc(100% + 15px)",height:e.mixins.toolbar.minHeight,transition:"opacity .15s ease-in-out",background:`linear-gradient(var(--mui-palette-background-default) ${"rtl"===e.direction?"95%":"5%"}, rgb(var(--mui-palette-background-defaultChannel) / 0.85) 30%, rgb(var(--mui-palette-background-defaultChannel) / 0.5) 65%, rgb(var(--mui-palette-background-defaultChannel) / 0.3) 75%, transparent)`,"&.scrolled":{opacity:1}})),C=n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsxs)("g",{id:"remix-icons/line/system/2arrow-left-s-line",children:[n.jsx("path",{id:"Vector",d:"M8.47365 11.7183C8.11707 12.0749 8.11707 12.6531 8.47365 13.0097L12.071 16.607C12.4615 16.9975 12.4615 17.6305 12.071 18.021C11.6805 18.4115 11.0475 18.4115 10.657 18.021L5.83009 13.1941C5.37164 12.7356 5.37164 11.9924 5.83009 11.5339L10.657 6.707C11.0475 6.31653 11.6805 6.31653 12.071 6.707C12.4615 7.09747 12.4615 7.73053 12.071 8.121L8.47365 11.7183Z",fill:"var(--mui-palette-text-primary)"}),n.jsx("path",{id:"Vector_2",d:"M14.3584 11.8336C14.0654 12.1266 14.0654 12.6014 14.3584 12.8944L18.071 16.607C18.4615 16.9975 18.4615 17.6305 18.071 18.021C17.6805 18.4115 17.0475 18.4115 16.657 18.021L11.6819 13.0459C11.3053 12.6693 11.3053 12.0587 11.6819 11.6821L16.657 6.707C17.0475 6.31653 17.6805 6.31653 18.071 6.707C18.4615 7.09747 18.4615 7.73053 18.071 8.121L14.3584 11.8336Z",fill:"var(--mui-palette-text-disabled)"})]})}),k=e=>{let t;let{mode:r,systemMode:o}=e,c=(0,u.Z)(),{updateSettings:p,settings:x}=(0,j.r)(),{mode:m,systemMode:h}=(0,s.tv)(),f=(0,l.Z)(),v=(0,a.useRef)(null),{isCollapsed:k,isHovered:S,collapseVerticalNav:w,isBreakpointReached:Z}=c,z=x.semiDark;return t="system"===r?"dark"===o:"dark"===r,(0,a.useEffect)(()=>{"collapsed"===x.layout?w(!0):w(!1)},[x.layout]),(0,n.jsxs)(d.ZP,{customStyles:(0,y.Z)(c,f),collapsedWidth:71,backgroundColor:"var(--mui-palette-background-default)",...z&&!t&&{"data-mui-color-scheme":"dark"},children:[(0,n.jsxs)(d.$T,{children:[n.jsx(i.default,{href:"/",children:n.jsx(b.Z,{})}),!(k&&!S)&&n.jsx(d.Ye,{lockedIcon:C,unlockedIcon:C,closeIcon:n.jsx("i",{className:"ri-close-line text-xl"}),className:"text-textSecondary",onClick:()=>p({layout:k?"vertical":"collapsed"})})]}),n.jsx($,{ref:v}),n.jsx(g,{scrollMenu:(e,t)=>{e=Z||!t?e.target:e,v&&e.scrollTop>0?v.current.classList.contains("scrolled")||v.current.classList.add("scrolled"):v.current.classList.remove("scrolled")}})]})}},4411:e=>{e.exports={root:"horizontalUl_root__8LnCF",li:"horizontalUl_li__v84V1"}},8286:e=>{e.exports={ul:"styles_ul__8V1vZ"}},9229:e=>{e.exports={root:"verticalNavBgImage_root__FLJiy"}},426:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ek});var n=r(522),a=r(9001),i=r.n(a),o=r(4264);let s=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/@layouts/LayoutWrapper.tsx`),{__esModule:l,$$typeof:d}=s;s.default;let c=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/@layouts/LayoutWrapper.tsx#default`);var p=r(1074),u=r.n(p);let x=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/@layouts/components/vertical/LayoutContent.tsx`),{__esModule:m,$$typeof:h}=x;x.default;let f=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/@layouts/components/vertical/LayoutContent.tsx#default`),v={root:"ts-vertical-layout",contentWrapper:"ts-vertical-layout-content-wrapper"},g={root:"ts-horizontal-layout",contentWrapper:"ts-horizontal-layout-content-wrapper"},b=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/@layouts/styles/vertical/StyledContentWrapper.tsx`),{__esModule:j,$$typeof:y}=b;b.default;let $=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/@layouts/styles/vertical/StyledContentWrapper.tsx#default`),C=e=>{let{navbar:t,footer:r,navigation:a,children:i}=e;return(0,n.jsxs)("div",{className:u()(v.root,"flex flex-auto"),children:[a||null,(0,n.jsxs)($,{className:u()(v.contentWrapper,"flex flex-col min-is-0 is-full"),children:[t||null,n.jsx(f,{children:i}),r||null]})]})},k=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/@menu/contexts/horizontalNavContext.tsx`),{__esModule:S,$$typeof:w}=k;k.default;let Z=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/@menu/contexts/horizontalNavContext.tsx#HorizontalNavProvider`);(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/@menu/contexts/horizontalNavContext.tsx#default`);let z=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/@layouts/components/horizontal/LayoutContent.tsx`),{__esModule:N,$$typeof:U}=z;z.default;let P=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/@layouts/components/horizontal/LayoutContent.tsx#default`),M=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/@layouts/styles/horizontal/StyledContentWrapper.tsx`),{__esModule:K,$$typeof:W}=M;M.default;let I=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/@layouts/styles/horizontal/StyledContentWrapper.tsx#default`),E=e=>{let{header:t,footer:r,children:a}=e;return n.jsx("div",{className:u()(g.root,"flex flex-auto"),children:n.jsx(Z,{children:(0,n.jsxs)(I,{className:u()(g.contentWrapper,"flex flex-col is-full"),children:[t||null,n.jsx(P,{children:a}),r||null]})})})};var O=r(4233);let D=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/components/layout/vertical/Navigation.tsx`),{__esModule:R,$$typeof:_}=D;D.default;let F=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/components/layout/vertical/Navigation.tsx#default`),A=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/components/layout/horizontal/Header.tsx`),{__esModule:L,$$typeof:B}=A;A.default;let V=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/components/layout/horizontal/Header.tsx#default`),Y=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/@layouts/components/vertical/Navbar.tsx`),{__esModule:G,$$typeof:H}=Y;Y.default;let T=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/@layouts/components/vertical/Navbar.tsx#default`),q=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/components/layout/vertical/NavbarContent.tsx`),{__esModule:X,$$typeof:J}=q;q.default;let Q=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/components/layout/vertical/NavbarContent.tsx#default`),ee=()=>n.jsx(T,{children:n.jsx(Q,{})}),et=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/@layouts/components/vertical/Footer.tsx`),{__esModule:er,$$typeof:en}=et;et.default;let ea=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/@layouts/components/vertical/Footer.tsx#default`),ei=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/components/layout/vertical/FooterContent.tsx`),{__esModule:eo,$$typeof:es}=ei;ei.default;let el=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/components/layout/vertical/FooterContent.tsx#default`),ed=()=>n.jsx(ea,{children:n.jsx(el,{})}),ec=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/@layouts/components/horizontal/Footer.tsx`),{__esModule:ep,$$typeof:eu}=ec;ec.default;let ex=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/@layouts/components/horizontal/Footer.tsx#default`),em=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/components/layout/horizontal/FooterContent.tsx`),{__esModule:eh,$$typeof:ef}=em;em.default;let ev=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/components/layout/horizontal/FooterContent.tsx#default`),eg=()=>n.jsx(ex,{children:n.jsx(ev,{})}),eb=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/@core/components/scroll-to-top/index.tsx`),{__esModule:ej,$$typeof:ey}=eb;eb.default;let e$=(0,o.createProxy)(String.raw`/Users/tobiaspfuetze/Documents/VSCode/Originate/OC2/Materialize/src/@core/components/scroll-to-top/index.tsx#default`);var eC=r(5552);let ek=async({children:e})=>{let t=(0,eC.iJ)(),r=(0,eC.Cu)();return(0,n.jsxs)(O.Z,{direction:"ltr",children:[n.jsx(c,{systemMode:r,verticalLayout:n.jsx(C,{navigation:n.jsx(F,{mode:t,systemMode:r}),navbar:n.jsx(ee,{}),footer:n.jsx(ed,{}),children:e}),horizontalLayout:n.jsx(E,{header:n.jsx(V,{}),footer:n.jsx(eg,{}),children:e})}),n.jsx(e$,{className:"mui-fixed",children:n.jsx(i(),{variant:"contained",className:"is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center",children:n.jsx("i",{className:"ri-arrow-up-line"})})})]})}}};