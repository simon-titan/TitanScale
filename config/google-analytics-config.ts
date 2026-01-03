export const googleAnalyticsConfig = {
  /** Aktiviert Google Analytics Integration */
  enabled: process.env.NEXT_PUBLIC_GA_ENABLED === "true",
  
  /** Google Analytics Measurement ID (Format: G-XXXXXXXXXX oder UA-XXXXXXXXX-X) */
  measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  
  /** Google Analytics 4 Property ID (für GA4) */
  propertyId: process.env.NEXT_PUBLIC_GA_PROPERTY_ID || "",
  
  /** Debug Mode (zeigt GA Events in der Console) */
  debug: process.env.NODE_ENV === "development",
  
  /** Seiten, auf denen Google Analytics geladen werden soll */
  includePaths: [] as string[],
  
  /** Seiten, auf denen Google Analytics NICHT geladen werden soll */
  excludePaths: ["/app/*", "/api/*"] as string[],
  
  /** Cookie Consent Category (muss mit cookie-banner-config übereinstimmen) */
  cookieCategory: "analytics" as "analytics" | "marketing",
  
  /** Erweiterte Konfiguration */
  advanced: {
    /** Aktiviert anonymisierte IP-Adressen */
    anonymizeIp: true,
    
    /** Aktiviert Page View Tracking */
    pageViewTracking: true,
    
    /** Aktiviert Scroll Tracking */
    scrollTracking: false,
    
    /** Aktiviert Click Tracking */
    clickTracking: false,
    
    /** Aktiviert Outbound Link Tracking */
    outboundLinkTracking: true,
    
    /** Aktiviert Download Tracking */
    downloadTracking: true,
    
    /** Download Dateiendungen, die getrackt werden sollen */
    downloadExtensions: ["pdf", "zip", "doc", "docx", "xls", "xlsx"],
  },
};

