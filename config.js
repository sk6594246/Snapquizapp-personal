// SnapQuiz — external link configuration
// Change these two values any time the target URLs need to move; nothing else in the app needs editing.
const APP_LINKS = {
  // Direct deep-link into Google AI Studio's "Create API key" screen — fewest clicks for a parent to get a Gemini key.
  geminiApiKeyUrl: 'https://aistudio.google.com/apikey',

  // Short walkthrough video on generating a Gemini API key in Google AI Studio.
  geminiApiKeyVideoUrl: 'https://www.youtube.com/watch?v=VPOSSQI-aJ4'
};

// Google AdSense configuration
// Everything below is a PLACEHOLDER until your AdSense account is approved for this domain.
// The app checks for the literal 'XXXX' in these values and simply won't load/render ads until
// you replace them with your real IDs — so it's safe to ship as-is with no console errors or blank ad boxes.
const ADSENSE_CONFIG = {
  // From AdSense > Account > Account information.
  publisherId: 'ca-pub-xxxxxxxxxxxxxxxx',

  // One ad slot ID per placement, from AdSense > Ads > By ad unit. Ads only show on Parent Hub
  // screens (Overview, History) — never on the child-facing quiz screens.
  adSlots: {
    overview: 'XXXXXXXXXX', // TODO: paste real ad slot ID for the Overview tab
    history: 'XXXXXXXXXX'   // TODO: paste real ad slot ID for the History tab
  }
};
