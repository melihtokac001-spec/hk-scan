// ============================================================
//  Housekeeping IN/OUT scan - configuration
//  This is the ONLY file you need to edit after setup.
// ============================================================
window.HK_CONFIG = {
  // Paste the Microsoft Forms "pre-filled link" here.
  // When creating it, type these exact placeholder answers:
  //   Area ID   -> XAREAX
  //   Action    -> XACTIONX
  //   Staff     -> XSTAFFX
  FORM_TEMPLATE_URL: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=LO84UjkKKkGT_a_uh4OM4t5axwJPm_BLpkV8mFKoVzBUNEZRMENTVTE5MzVIUUZGVFJFRkNOUVdENy4u&r4dcaa49ffd164e2c954bba5d71ff4cec=XAREAX&r212e970499994389be756f3f09217a2c=XACTIONX&rf92553fe19d14418975d9086c406549c=XSTAFFX",

  // Placeholders used in the pre-filled link above (do not change unless you used other words)
  TOKENS: { area: "XAREAX", action: "XACTIONX", staff: "XSTAFFX" },

  // Warn if the same QR is scanned again within this many seconds (prevents accidental double scans)
  REPEAT_WARNING_SECONDS: 120,

  // Pause on the confirmation screen before opening the form (milliseconds)
  REDIRECT_DELAY_MS: 800
};
