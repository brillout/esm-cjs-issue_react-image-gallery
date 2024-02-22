Fix: https://github.com/brillout/esm-cjs-issue_react-image-gallery/commit/2e370cbf58a2b0a02d0822a2b5cfd37d09aa9d62

`pnpm run dev`, go to http://localhost:3000/, then observe the following.

> Same error with Bun `1.0.28` (`$ bun dev).

```
Server running at http://localhost:3000
12:18:52 PM [vike][request(1)] HTTP request: /
Warning: React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object.

Check your code at +Page.tsx:26.
    at Page
    at div
    at div
    at Content (/home/romu/tmp/OliviaNolan/renderer/PageShell.tsx:112:20)
    at div
    at Layout (/home/romu/tmp/OliviaNolan/renderer/PageShell.tsx:66:19)
    at PageContextProvider (/home/romu/tmp/OliviaNolan/renderer/usePageContext.tsx:12:32)
    at PageShell (/home/romu/tmp/OliviaNolan/renderer/PageShell.tsx:19:22)
12:18:52 PM [vike][request(1)] Following error was thrown by the onRenderHtml() hook defined at /renderer/+onRenderHtml.tsx
Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.
    at renderElement (/home/romu/tmp/OliviaNolan/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js:6047:9)
    at renderNodeDestructiveImpl (/home/romu/tmp/OliviaNolan/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js:6108:11)
    at renderNodeDestructive (/home/romu/tmp/OliviaNolan/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js:6080:14)
    at renderNode (/home/romu/tmp/OliviaNolan/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js:6263:12)
    at renderChildrenArray (/home/romu/tmp/OliviaNolan/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js:6215:7)
    at renderNodeDestructiveImpl (/home/romu/tmp/OliviaNolan/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js:6145:7)
    at renderNodeDestructive (/home/romu/tmp/OliviaNolan/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js:6080:14)
    at renderElement (/home/romu/tmp/OliviaNolan/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js:5975:9)
    at renderNodeDestructiveImpl (/home/romu/tmp/OliviaNolan/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js:6108:11)
    at renderNodeDestructive (/home/romu/tmp/OliviaNolan/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js:6080:14)
┌────────────────────────────────────────────────────────────────────────────────────┐
│ To fix this error, see https://vike.dev/broken-npm-package#react-invalid-component │
└────────────────────────────────────────────────────────────────────────────────────┘
12:18:53 PM [vike][request(1)] HTTP response / 500
```
