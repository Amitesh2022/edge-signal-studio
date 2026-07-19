# Edge Signal Studio

A composable edge-observability interface demonstrating how standards-native Web Components can deliver portable operational experiences.

[Watch the running product demo](docs/demo.webm)

## Why this product matters

Large organizations often need operational widgets that work across several frontend stacks. Edge Signal Studio packages telemetry presentation and actions as framework-independent custom elements.

## Intended users

- Platform and edge-infrastructure teams
- Design-system and frontend-platform engineers
- Operations teams embedding status views in multiple products

## Core workflows

- Monitor regional signal pressure and platform pulse
- Compare node state across regions
- Optimize a pressured region interactively
- Observe reactive metrics update through component boundaries

## Current capabilities

- Reactive regional telemetry
- Reusable status-card custom elements
- Interactive optimization actions
- Encapsulated responsive component styling
- Live pulse controller

## Lit technical highlights

- Lit 3 and standards-native custom elements
- Shadow DOM style encapsulation
- Reactive controller for lifecycle-aware telemetry
- repeat directive for keyed rendering
- Typed component APIs and Vitest coverage

## Architecture and data flow

The command-center element owns regional domain state, while a reactive controller provides lifecycle-aware pulse updates. Reusable status-card elements receive explicit properties and remain independently portable.

## Accessibility and responsive behavior

The interface uses semantic headings, labelled regions, native interactive controls, visible status text in addition to color, keyboard-operable actions, and layouts that adapt to narrower screens. Automated tests cover the central state behavior; a production release should add continuous WCAG audits with assistive-technology review.

## Project structure

- src/my-element.ts — command-center custom element
- src/status-card.ts — reusable metric element
- src/pulse-controller.ts — reactive lifecycle controller
- src/status-card.test.ts — component verification
- docs/demo.webm — browser-recorded interaction

## Run locally

```bash
npm ci
npm test
npm run build
npm run dev
```

For Angular projects, `npm start` is also available for the development server.

## Verification

- Strict TypeScript compilation
- Automated component or state tests
- Production build
- Real-browser interaction check
- Demo-video playback and frame inspection

## Tradeoffs

Telemetry is simulated for a deterministic demonstration. Production adoption would define versioned element contracts, real streaming adapters, authentication boundaries, observability semantics, and cross-framework integration tests.

## Roadmap

- Streaming telemetry adapter
- Configurable thresholds and alert events
- Framework integration examples
- Versioned design tokens and component API documentation
