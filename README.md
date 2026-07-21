# Edge Signal Studio

Edge Signal Studio helps teams watch devices and services that run in many locations.

[Watch the product demo](docs/demo.webm)

## Business problem and users

Edge Signal Studio helps teams watch devices and services that run in many locations. It is useful for operations teams, service managers, and people responsible for connected devices.

## Key workflows

- See whether locations are online.
- Find devices with problems.
- Review recent warnings.
- Compare performance between locations.
- Follow a problem until it is solved.

## Lit and Web Components highlights

The product is made from small, reusable Web Components. Each part keeps its own design and can also work inside React, Vue, Angular, or a normal web page. Automated checks cover the most important actions.

## Architecture and state flow

The main workspace brings smaller page parts together. A shared controller keeps the current information and updates the screen after an action. The smaller parts receive information and send simple events back to the workspace.

## Accessibility and responsive behaviour

Buttons, forms, and links can be used with a keyboard. Labels explain what each field does, and important information is shown with words, not only colours. The layout also adjusts for tablets and phones.

## Run and verify

These commands install the project, check it, and start it on a computer:

```bash
npm ci
npm test
npm run build
npm run dev
```

## Structure

- `src/` — the product pages, actions, and design.
- `docs/demo.webm` — a short video showing the product.
- `package.json` — the commands and packages needed to run it.
- `README.md` — this simple product guide.

## Tradeoffs and roadmap

This project uses sample information and does not connect to a real company system. A future version could connect to real devices, add alerts, location maps, and longer performance history.
