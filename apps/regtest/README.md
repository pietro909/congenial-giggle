# Regtest Stack

This mirrors the original working stack from `packages/boltz-swap/test.docker-compose.yml`, but runs from `apps/regtest`.

## Usage
- Start: `pnpm regtest:up`
- Stop: `pnpm regtest:down`
- Reset volumes: `pnpm regtest:reset`
- Integration tests: `pnpm regtest:test` (ts-sdk then boltz-swap)

## Notes
- Uses external `nigiri` network (bitcoind/chopsticks) exactly like the original.
- Container names/ports are unchanged; stop any previously running stack with `docker compose -f packages/boltz-swap/test.docker-compose.yml down -v` before starting here if you hit conflicts.
- `cors` build context points back to `packages/boltz-swap` so it builds the same image as before.
