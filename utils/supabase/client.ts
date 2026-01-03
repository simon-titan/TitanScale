import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { projectConfig } from "@/config";

let supabaseClientInstance: SupabaseClient | null = null;

/**
 * Erstellt oder gibt den Supabase Client zurück
 * Wirft einen Fehler, wenn Supabase nicht korrekt konfiguriert ist
 */
export function getSupabaseClient(): SupabaseClient {
  if (!projectConfig.supabase.enabled) {
    throw new Error(
      "Supabase is not enabled. Set NEXT_PUBLIC_SUPABASE_ENABLED=true in your .env file."
    );
  }

  if (!projectConfig.supabase.url || !projectConfig.supabase.anonKey) {
    throw new Error(
      "Missing Supabase environment variables. Please check your .env file."
    );
  }

  if (!supabaseClientInstance) {
    supabaseClientInstance = createClient(
      projectConfig.supabase.url,
      projectConfig.supabase.anonKey,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
          storage: typeof window !== "undefined" ? window.localStorage : undefined,
        },
        realtime: projectConfig.supabase.realtime.enabled
          ? {
              params: {
                eventsPerSecond: 10,
              },
            }
          : undefined,
      }
    );
  }

  return supabaseClientInstance;
}

