# PitchPulse

PitchPulse is a full-stack LaLiga match center with:
- Today matches (`/`)
- Standings (`/standings`)
- Match detail (`/match/:matchId`)

## Stack
- Frontend: React + Vite + React Router + TanStack Query + Tailwind
- Backend: Node.js + Express + Axios + node-cache + express-rate-limit
- Upstream data: football-data.org (`PD`)

## Project Structure
```text
apps/
  api/  # Express backend
  web/  # React frontend
```

## Environment Variables

### API (`apps/api/.env`)
Required:
```env
PORT=4000
X_AUTH_TOKEN=your_football_data_api_key
```

Template file exists at `apps/api/.env.example`.

### Web (`apps/web/.env`)
Recommended default:
```env
VITE_API_BASE_URL=/api
```

Template file exists at `apps/web/.env.example`.

## Quick Start (Fresh Clone)

1. Install dependencies:
```bash
npm install
npm install --prefix apps/api
npm install --prefix apps/web
```

2. Create env files:
```bash
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env
```
On Windows PowerShell:
```powershell
Copy-Item apps/api/.env.example apps/api/.env
Copy-Item apps/web/.env.example apps/web/.env
```

3. Add your football-data token to `apps/api/.env` (`X_AUTH_TOKEN=...`).

4. Start both apps:
```bash
npm run dev
```

5. Open:
- Web: `http://localhost:5173`
- API health: `http://localhost:4000/api/health`

## Scripts

### Root
- `npm run dev` -> start API + Web together
- `npm run dev:api` -> API only
- `npm run dev:web` -> Web only
- `npm run build:web` -> production web build
- `npm run test` -> run API tests then Web tests
- `npm run test:api` -> API tests only
- `npm run test:web` -> Web tests only
- `npm run test:watch:api` -> API tests in watch mode
- `npm run test:watch:web` -> Web tests in watch mode

### API (`apps/api`)
- `npm run dev`
- `npm run start`
- `npm run test`
- `npm run test:watch`

### Web (`apps/web`)
- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run test`
- `npm run test:watch`

## API Endpoints
- `GET /api/health`
- `GET /api/laliga/matches/today`
- `GET /api/laliga/standings`
- `GET /api/matches/:matchId`

## Caching
- Today matches: 1-3 minutes (current: 120s)
- Standings: 15 minutes (900s)
- Match detail:
  - live/non-finished: 1-3 minutes (120s)
  - finished/postponed/suspended/cancelled: 24h (86400s)

Today date logic is calculated in `Europe/Madrid`.

## Troubleshooting

### 1) Token/config problems
Symptoms:
- API returns `500` with config/upstream message
- Web shows "Unable to load ...", often with upstream error text

Checks:
- `apps/api/.env` exists
- `X_AUTH_TOKEN` is set and valid
- API restarted after `.env` changes

Quick validation:
```bash
curl http://localhost:4000/api/health
curl http://localhost:4000/api/laliga/matches/today
```

### 2) Upstream rate limit or subscription restrictions
Symptoms:
- Errors from football-data.org such as permission/restricted/rate-limit messages

Notes:
- Some match IDs may be restricted by your plan.
- Try a match ID from `/api/laliga/matches/today`.
- Caching is already enabled to reduce upstream pressure.

### 3) API outage / upstream unavailable
Symptoms:
- `UPSTREAM_UNAVAILABLE` or timeout errors

What to do:
- Confirm network connectivity
- Retry after a short delay
- Verify upstream status and token quota

### 4) Web cannot reach API
Symptoms:
- Browser/network errors or consistent API failures from web app

Checks:
- API running on `:4000`
- Web running on `:5173`
- `apps/web/vite.config.js` proxy targets `http://localhost:4000`
- `VITE_API_BASE_URL=/api` in `apps/web/.env`

### 5) Ports already in use
Symptoms:
- Dev server fails to start with port-in-use errors

What to do:
- Stop stale `node` processes
- Restart `npm run dev`

## Testing
- API coverage includes:
  - `GET /api/health`
  - mapper correctness
- Web coverage includes:
  - loading/error/empty/basic render states for core pages

Run all tests:
```bash
npm run test
```
