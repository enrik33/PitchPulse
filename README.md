# PitchPulse - La Liga Match Center

PitchPulse is a full-stack app for La Liga fixtures, live-ish status, results, and standings.

The MVP goal is a clean, reliable product with a strict scope:
- `Today` matches page
- Standings page
- Basic match detail page

No event timeline, advanced stats, odds, or extra APIs in MVP.

---

## MVP Scope (v1)

### Pages
- `/` (Today): today's La Liga matches (scheduled/live/finished), clickable cards
- `/standings`: current La Liga table with badges
- `/match/:matchId`: teams, badges, score, status, kickoff time, venue if available

### Backend Endpoints (MVP)
- `GET /api/health`
- `GET /api/laliga/matches/today`
- `GET /api/laliga/standings`
- `GET /api/matches/:matchId`

### Definition of Done (MVP)
- No crashes on missing API fields
- Loading skeletons and useful error states
- Empty state when no matches are available for today
- Mobile-friendly basic layout

---

## Post-MVP Roadmap

### Phase 2
- Date range calendar/results page
- Team page (recent matches + basic info)
- i18n (English/Spanish toggle with `react-i18next`)

### Phase 3
- Weather snapshot at kickoff (optional)
- Basic 1X2 odds (optional, show `Unavailable` fallback)

---

## Tech Stack

### Frontend
- React (Vite)
- React Router
- TanStack Query
- Tailwind CSS

### Backend
- Node.js + Express
- Axios
- node-cache
- express-rate-limit
- dotenv

### External Data
- football-data.org (`PD` competition code for La Liga)

---

## Architecture

Frontend never calls football-data.org directly.

Flow:
1. React frontend -> Express backend
2. Express backend -> football-data.org
3. Backend returns normalized JSON for frontend

Why:
- Protect API key
- Respect free-tier rate limits
- Centralize caching and data shaping

---

## Project Structure

```text
PitchPulse/
  apps/
    web/   # React frontend
    api/   # Express backend
  README.md
```

---

## Backend Design Notes

### Recommended API layering
- `routes/` -> `controllers/` -> `services/` -> `providers/` -> `mappers/`

This keeps external API calls, business logic, and response shaping separate.

### Response contracts (frontend-facing)

`MatchSummary`

```js
{
  id,
  utcDate,
  status,
  homeTeam: { id, name, crestUrl },
  awayTeam: { id, name, crestUrl },
  score: { home, away }
}
```

`StandingsRow`

```js
{
  position,
  team: { id, name, crestUrl },
  played,
  gd,
  points
}
```

Do not rely on extra fields from football-data.org.

### Error shape

```js
{
  error: {
    code: "UPSTREAM_ERROR",
    message: "Human-readable message",
    requestId: "..."
  }
}
```

---

## Caching Strategy

| Data Type | Cache Duration |
|---|---|
| Standings | 15 minutes |
| Today's matches | 1-3 minutes |
| Match detail (live) | 1-3 minutes |
| Match detail (finished) | 24 hours |

Also define "today" using `Europe/Madrid` timezone to avoid date mismatch bugs.

---

## Local Development Setup

## 1) Clone

```bash
git clone https://github.com/enrik33/PitchPulse.git
cd PitchPulse
```

## 2) Backend

```bash
cd apps/api
npm install
```

Create `apps/api/.env`:

```env
PORT=4000
X_AUTH_TOKEN=your_football_data_api_key
```

Start backend:

```bash
npm run dev
```

## 3) Frontend

```bash
cd apps/web
npm install
npm run dev
```

## 4) Vite Proxy

In `apps/web/vite.config.js`:

```js
server: {
  proxy: {
    "/api": {
      target: "http://localhost:4000",
      changeOrigin: true
    }
  }
}
```

---

## 10-Day Build Plan (Ticket Style)

Each day maps to a deliverable and acceptance criteria.

### Day 1 - Foundation
Ticket: `PP-001 Monorepo bootstrap + health check`
- Tasks:
  - Confirm `apps/web` and `apps/api` layout
  - Start both apps locally
  - Wire Vite proxy to backend
  - Implement `GET /api/health`
- Acceptance criteria:
  - Web and API run locally
  - Frontend can call `/api/health` successfully

### Day 2 - Backend Core
Ticket: `PP-002 Backend skeleton + middleware baseline`
- Tasks:
  - Add env loading, request logging, rate limit, cache utility
  - Add global error handler with stable error JSON shape
- Acceptance criteria:
  - Middleware stack is active
  - Invalid routes and upstream errors return normalized error payloads

### Day 3 - Upstream Integration
Ticket: `PP-003 football-data provider + mappers`
- Tasks:
  - Create Axios client for football-data.org
  - Add provider/service layer
  - Add mappers for `MatchSummary` and `StandingsRow`
- Acceptance criteria:
  - Internal service returns normalized data (not raw upstream payload)

### Day 4 - Standings Feature
Ticket: `PP-004 Standings API + UI`
- Tasks:
  - Implement `GET /api/laliga/standings` with 15m cache
  - Build `/standings` page + `StandingsTable`
- Acceptance criteria:
  - Standings render with team badges
  - Loading and error states exist

### Day 5 - Today Matches Feature
Ticket: `PP-005 Today matches API + home page`
- Tasks:
  - Implement `GET /api/laliga/matches/today` with `Europe/Madrid` day logic
  - Build home `MatchList` and `MatchCard` UI
- Acceptance criteria:
  - Home page shows today matches or empty state
  - Cards link to `/match/:matchId`

### Day 6 - Match Detail Feature
Ticket: `PP-006 Match details API + page`
- Tasks:
  - Implement `GET /api/matches/:matchId`
  - Add cache policy: live 1-3m, finished 24h
  - Build `MatchHeader` and detail layout
- Acceptance criteria:
  - Page renders status, kickoff, score, badges, and optional venue
  - Missing fields do not crash UI

### Day 7 - UX Hardening
Ticket: `PP-007 UX polish and resilience`
- Tasks:
  - Replace raw loading text with skeletons
  - Improve error copy and retry actions
  - Validate responsive behavior
- Acceptance criteria:
  - No raw "Loading..." placeholders
  - All three pages usable on mobile widths

### Day 8 - Tests
Ticket: `PP-008 Minimal test coverage for critical flows`
- Tasks:
  - Add backend tests for health + mapper correctness
  - Add frontend tests for page rendering states
- Acceptance criteria:
  - Test suite passes locally
  - Critical flows have baseline coverage

### Day 9 - Docs and DevEx
Ticket: `PP-009 README, .env.example, scripts`
- Tasks:
  - Add/refresh setup docs and run scripts
  - Add troubleshooting section (rate limit, token, API downtime)
- Acceptance criteria:
  - Fresh clone setup works from docs without guesswork

### Day 10 - MVP Freeze
Ticket: `PP-010 Stabilization and MVP release`
- Tasks:
  - Bug bash and final cleanup
  - Verify all MVP definitions of done
  - Optional deployment smoke test
- Acceptance criteria:
  - MVP checklist fully complete
  - Build is demo-ready

---

## Security and Environment

- Keep API token only in backend `.env`
- Never commit secrets
- Ensure `.env` is ignored by git
- Frontend communicates only with your backend

---

## Author

Enrik Cipa
