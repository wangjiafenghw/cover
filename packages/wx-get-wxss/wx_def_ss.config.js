module.exports = {
    "main":
    `
      .cv-head {
        display: none;
      }
      .cv-body {
        margin: 8px;
        line-height: 1.12;
      }
      .cv-button,
      .cv-textarea,
      .cv-input,
      .cv-object,
      .cv-select {
        display: inline-block;
      }
      .cv-ol,
      .cv-ul,
      .cv-dir,
      .cv-menu,
      .cv-dd {
        margin-left: 40px;
      }
      .cv-i,
      .cv-cite,
      .cv-em,
      .cv-var,
      .cv-address {
        font-style: italic;
      }
      .cv-html,
      .cv-body,
      .cv-div,
      .cv-ol,
      .cv-p,
      .cv-ul,
      .cv-h1,
      .cv-h2,
      .cv-h3,
      .cv-h4,
      .cv-h5,
      .cv-h6,
      .cv-address,
      .cv-blockquote,
      .cv-form,
      .cv-dd,
      .cv-dl,
      .cv-dt,
      .cv-fieldset,
      .cv-frame,
      .cv-frameset,
      .cv-noframes,
      .cv-center,
      .cv-dir,
      .cv-hr,
      .cv-menu,
      .cv-pre {
        display: block;
      }
      .cv-li {
        display: list-item;
      }
      .cv-ol {
        list-style-type: decimal;
      }
      .cv-ol ul,
      .cv-ul ol,
      .cv-ul ul,
      .cv-ol ol {
        margin-top: 0;
        margin-bottom: 0;
      }
      .cv-h1 {
        font-size: 2em;
        margin: 0.67em 0;
      }
      .cv-h2 {
        font-size: 1.5em;
        margin: 0.75em 0;
      }
      .cv-h3 {
        font-size: 1.17em;
        margin: 0.83em 0;
      }
      .cv-h4,
      .cv-p,
      .cv-blockquote,
      .cv-ul,
      .cv-fieldset,
      .cv-form,
      .cv-ol,
      .cv-dl,
      .cv-dir,
      .cv-menu {
        margin: 1.12em 0;
      }
      .cv-h5 {
        font-size: .83em;
        margin: 1.5em 0;
      }
      .cv-h6 {
        font-size: .75em;
        margin: 1.67em 0;
      }
      .cv-h1,
      .cv-h2,
      .cv-h3,
      .cv-h4,
      .cv-h5,
      .cv-h6,
      .cv-b,
      .cv-strong {
        font-weight: bolder;
      }
      .cv-:before,
      .cv-:after {
        white-space: pre-line;
      }
      .cv-:link,
      .cv-:visited {
        text-decoration: underline;
      }
      .cv-:focus {
        outline: thin dotted invert;
      }
      .cv-table {
        display: table;
      }
      .cv-tr {
        display: table-row;
      }
      .cv-thead {
        display: table-header-group;
      }
      .cv-tbody {
        display: table-row-group;
      }
      .cv-tfoot {
        display: table-footer-group;
      }
      .cv-col {
        display: table-column;
      }
      .cv-colgroup {
        display: table-column-group;
      }
      .cv-td,
      .cv-th {
        display: table-cell;
      }
      .cv-caption {
        display: table-caption;
      }
      .cv-th {
        font-weight: bolder;
        text-align: center;
      }
      .cv-caption {
        text-align: center;
      }
      .cv-table {
        border-spacing: 2px;
      }
      .cv-thead,
      .cv-tbody,
      .cv-tfoot {
        vertical-align: middle;
      }
      .cv-td,
      .cv-th {
        vertical-align: inherit;
      }
      .cv-blockquote {
        margin-left: 40px;
        margin-right: 40px;
      }
      .cv-pre,
      .cv-tt,
      .cv-code,
      .cv-kbd,
      .cv-samp {
        font-family: monospace;
      }
      .cv-pre {
        white-space: pre;
      }
      .cv-big {
        font-size: 1.17em;
      }
      .cv-small,
      .cv-sub,
      .cv-sup {
        font-size: 0.83em;
      }
      .cv-sub {
        vertical-align: sub;
      }
      .cv-sup {
        vertical-align: super;
      }
      .cv-s,
      .cv-strike,
      .cv-del {
        text-decoration: line-through;
      }
      .cv-hr {
        border: 1px inset;
      }
      .cv-u,
      .cv-ins {
        text-decoration: underline;
      }
      .cv-center {
        text-align: center;
      }
      .cv-abbr,
      .cv-acronym {
        font-variant: small-caps;
        letter-spacing: 0.1em;
      }
      .cv-BDO[DIR="ltr"] {
        direction: ltr;
        unicode-bidi: bidi-override;
      }
      .cv-BDO[DIR="rtl"] {
        direction: rtl;
        unicode-bidi: bidi-override;
      }
      .cv-*[DIR="ltr"] {
        direction: ltr;
        unicode-bidi: embed;
      }
      .cv-*[DIR="rtl"] {
        direction: rtl;
        unicode-bidi: embed;
      }
      @media print {
        .cv-h1 {
        page-break-before: always;
      }
      .cv-h1,
      .cv-h2,
      .cv-h3,
      .cv-h4,
      .cv-h5,
      .cv-h6 {
        page-break-after: avoid;
      }
      .cv-ul,
      .cv-ol,
      .cv-dl {
        page-break-before: avoid;
      }
      
      
  `
}