export const metaAdsConfig = {
  /** Aktiviert Meta Pixel/Werbemanager Integration */
  enabled: process.env.NEXT_PUBLIC_META_ADS_ENABLED === "true",
  
  /** Meta Pixel ID (findest du in deinem Meta Events Manager) */
  pixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  
  /** Seiten, auf denen Meta Pixel geladen werden soll */
  includePaths: [] as string[],
  
  /** Seiten, auf denen Meta Pixel NICHT geladen werden soll */
  excludePaths: ["/app/*", "/api/*"] as string[],
  
  /** Cookie Consent Category (muss mit cookie-banner-config übereinstimmen) */
  cookieCategory: "marketing" as "analytics" | "marketing",
  
  /** Standard Events, die automatisch getrackt werden sollen */
  autoTrackEvents: {
    /** Trackt PageView automatisch */
    pageView: true,
    
    /** Trackt ViewContent automatisch */
    viewContent: false,
    
    /** Trackt AddToCart automatisch */
    addToCart: false,
    
    /** Trackt InitiateCheckout automatisch */
    initiateCheckout: false,
    
    /** Trackt Purchase automatisch */
    purchase: false,
    
    /** Trackt Lead automatisch */
    lead: false,
    
    /** Trackt CompleteRegistration automatisch */
    completeRegistration: true,
  },
  
  /** Erweiterte Konfiguration */
  advanced: {
    /** Aktiviert Advanced Matching (für besseres Tracking) */
    advancedMatching: true,
    
    /** Aktiviert Automatic Configuration */
    automaticConfiguration: true,
    
    /** Aktiviert Lazy Loading */
    lazyLoading: false,
  },
};

