export const supabaseConfig = {
  /** Aktiviert Supabase Integration */
  enabled: process.env.NEXT_PUBLIC_SUPABASE_ENABLED === "true",
  
  /** Supabase Project URL (findest du in deinem Supabase Dashboard unter Settings > API) */
  url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  
  /** Supabase Anon/Public Key (findest du in deinem Supabase Dashboard unter Settings > API) */
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
  
  /** Supabase Service Role Key (NUR für Server-Side, niemals im Client exponieren!) */
  serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || "",
  
  /** Supabase JWT Secret (für Token-Verifikation) */
  jwtSecret: process.env.SUPABASE_JWT_SECRET || "",
  
  /** Database Schema Name (Standard: 'public') */
  schema: process.env.NEXT_PUBLIC_SUPABASE_SCHEMA || "public",
  
  /** Storage Bucket Name (optional, für File Uploads) */
  storageBucket: process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET || "",
  
  /** Realtime Configuration */
  realtime: {
    /** Aktiviert Supabase Realtime */
    enabled: process.env.NEXT_PUBLIC_SUPABASE_REALTIME_ENABLED === "true",
    /** Realtime Channels (z.B. ['public:messages', 'public:notifications']) */
    channels: [] as string[],
  },
  
  /** Auth Configuration */
  auth: {
    /** Redirect URL nach erfolgreichem Login */
    redirectTo: 
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_SITE_URL || ""
        : "http://localhost:3000",
    
    /** Cookie Name für Auth Token */
    cookieName: "sb-access-token",
    
    /** Cookie Lifetime in Tagen */
    cookieLifetime: 7,
  },
};

