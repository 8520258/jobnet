const TAX_CONFIG_2026 = {
  version: "2026.2",
  lastUpdated: "2026-03-31",
  creditPointMonthly: 242,
  btlLowThreshold: 7522,
  btlMaxCeiling: 50140,
  brackets: [
    { max: 7010, rate: 0.10 },
    { max: 10060, rate: 0.14 },
    { max: 19000, rate: 0.20 },
    { max: 25100, rate: 0.31 },
    { max: 46690, rate: 0.35 },
    { max: 60130, rate: 0.47 },
    { max: Infinity, rate: 0.50 }
  ]
};
