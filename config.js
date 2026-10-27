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
  FORM_TEMPLATE_URL: "PASTE_PREFILLED_FORMS_LINK_HERE",

  // Placeholders used in the pre-filled link above (do not change unless you used other words)
  TOKENS: { area: "XAREAX", action: "XACTIONX", staff: "XSTAFFX" },

  // Warn if the same QR is scanned again within this many seconds (prevents accidental double scans)
  REPEAT_WARNING_SECONDS: 120,

  // Pause on the confirmation screen before opening the form (milliseconds)
  REDIRECT_DELAY_MS: 800
};
