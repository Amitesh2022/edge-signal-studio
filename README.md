# Edge Signal Studio

A composable edge observability system built from standards-native reactive web components.

## Product capabilities

- Decision-focused operational dashboard with responsive, accessible interaction patterns
- Derived portfolio metrics and explicit risk/status visualization
- Deterministic local data flows suitable for demos and testing
- Production TypeScript build with component/state tests

## Architecture

The application separates presentation, domain state, and derived operational metrics. It uses Lit reactive controllers, standards-native custom elements, and Shadow DOM encapsulation for a scalable frontend foundation.

## Run locally

```bash
npm ci
npm test
npm run build
npm run dev
```

## Demo

[Watch the running application](docs/demo.webm)

## Tradeoffs

The portfolio uses deterministic local scenarios so reviewers can explore every state without external credentials. A production deployment would connect the domain adapters to authenticated APIs and persist audit history.
