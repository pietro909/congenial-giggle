# Arkade Monorepo

TypeScript packages for the Arkade Bitcoin wallet ecosystem — on-chain/off-chain wallets via the Ark protocol and Lightning/chain swaps via Boltz.

## Packages

| Package | Description |
|---------|-------------|
| [`@arkade-os/sdk`](packages/ts-sdk/) | Bitcoin wallet SDK with Taproot and Ark protocol support |
| [`@arkade-os/boltz-swap`](packages/boltz-swap/) | Lightning and chain swaps using Boltz |
| [Regtest stack](apps/regtest/) | Docker Compose stack for integration testing |

## Prerequisites

- Node.js >=22.12.0 <23
- pnpm >=10.25.0

```bash
corepack enable
pnpm install
```

## Commands

```bash
pnpm run build          # Build all packages
pnpm test               # Run unit tests
pnpm run lint           # Check formatting (prettier)
```

### Integration tests

Integration tests require [nigiri](https://github.com/vulpemventures/nigiri) and the regtest Docker stack:

```bash
nigiri start --ln
pnpm run regtest:up      # Start arkd, boltz, LND, nbxplorer, etc.
pnpm run regtest:test    # Run e2e tests for all packages
pnpm run regtest:down    # Stop the stack
pnpm run regtest:reset   # Stop and remove volumes
```

### Release

```bash
pnpm run release              # Release all (ts-sdk first, then boltz-swap)
pnpm run release:ts-sdk       # Release SDK only
pnpm run release:boltz-swap   # Release boltz-swap only
```
