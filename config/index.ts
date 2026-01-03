import { generalConfig } from "./general-config";
import { themeConfig } from "./theme-config";
import { cookieBannerConfig } from "./cookie-banner-config";
import { seoConfig } from "./seo-config";
import { socialConfig } from "./social-config";
import { outsetaConfig } from "./outseta-config";
import { authConfig } from "./auth-config";
import { supabaseConfig } from "./supabase-config";
import { googleAnalyticsConfig } from "./google-analytics-config";
import { metaAdsConfig } from "./meta-ads-config";

export const projectConfig = {
  general: generalConfig,
  theme: themeConfig,
  cookieBannerOptions: cookieBannerConfig,
  seo: seoConfig,
  links: socialConfig,
  outsetaOptions: outsetaConfig,
  auth: authConfig,
  supabase: supabaseConfig,
  googleAnalytics: googleAnalyticsConfig,
  metaAds: metaAdsConfig,
  outsetaExtraOptions: {
    showChatOn: "false",
  },
};
