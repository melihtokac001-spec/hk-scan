// ============================================================
//  Housekeeping IN/OUT scan - configuration
//  This is the ONLY file you need to edit after setup.
// ============================================================
window.HK_CONFIG = {
  // Power Automate flow "HK - Cleaning Scan to Log":
  // trigger "When a Teams webhook request is received" (Who can trigger: Anyone) -> HTTP URL
  SCAN_URL: "https://default5238ef2c0a39412a93fdafee87838c.e2.environment.api.powerplatform.com:443/powerautomate/automations/direct/cu/08/workflows/3ce3bce727b9433ab2b52816aa9bc02b/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=AJnXbK54naPaBx7jblVdzq9epIlaJQ97nqlBYgvbazM",

  // Warn if the same QR is scanned again within this many seconds (prevents accidental double scans)
  REPEAT_WARNING_SECONDS: 120
};
