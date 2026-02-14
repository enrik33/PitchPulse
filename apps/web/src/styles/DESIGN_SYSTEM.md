# PitchPulse Design Foundation

## Brand Direction
- Primary identity: green + neutral grayscale
- Tone: modern sports product, clean and fast to scan
- Contrast rule: primary text on neutral surfaces, brand green for emphasis/actions/status

## Token Groups
- Color tokens: `--pp-brand-*`, `--pp-neutral-*`
- Type scale: `--pp-text-*`
- Spacing tokens: `--pp-space-*`
- Radius tokens: `--pp-radius-*`
- Shadow tokens: `--pp-shadow-*`

Defined in `apps/web/src/styles/index.css` under `:root`.

## Shared Semantic Classes
- Layout: `pp-app-shell`, `pp-page-container`
- Navigation: `pp-nav`, `pp-nav-link`, `pp-nav-link-active`
- Surfaces: `pp-surface`, `pp-table-wrap`, `pp-table-head`
- States: `pp-state-error`, `pp-state-empty`, `pp-skeleton`
- Content: `pp-page`, `pp-page-title`, `pp-muted`, `pp-status-chip`
- Match cards: `pp-match-card`

## Consistency Rules
1. Prefer semantic `pp-*` classes before adding one-off utility combinations.
2. New colors should come from existing token palette.
3. New card/table blocks should use `pp-surface` or `pp-table-wrap`.
4. Keep page titles on `pp-page-title` to preserve hierarchy.
5. Loading/error/empty UI must use shared state classes.
