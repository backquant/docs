# BackQuant API

Crypto options analytics: dealer gamma positioning, implied volatility surfaces,
options flow, the trade tape, market data and spot ETF flows, aggregated across
eight venues for BTC, ETH, SOL and HYPE.

**[docs.backquant.com](https://docs.backquant.com)** is the full documentation.

## Get a key

Plans and access: **[backquant.com/api-access](https://backquant.com/api-access)**

## REST

```bash
curl -H "X-API-Key: bq_live_your_key_here" \
  "https://api.backquant.com/v2/gex/levels?symbol=BTCUSDT"
```

Every response uses the same envelope:

```json
{ "success": true, "data": { }, "meta": { } }
```

## MCP

The same data, available to Claude and other AI clients.

```
https://mcp.backquant.com/mcp
Authorization: Bearer bq_live_your_key_here
```

Setup and worked examples: [docs.backquant.com/mcp-server](https://docs.backquant.com/mcp-server)

## This repository

The source for the documentation site. Corrections and issues are welcome.
