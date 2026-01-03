import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { projectConfig } from "@/config";

/**
 * Erstellt einen Supabase Client für Server-Side Verwendung
 * Verwendet den Service Role Key für Admin-Zugriff
 */
export function createServerClient(): SupabaseClient {
  if (!projectConfig.supabase.enabled) {
    throw new Error(
      "Supabase is not enabled. Set NEXT_PUBLIC_SUPABASE_ENABLED=true in your .env file."
    );
  }

  if (!projectConfig.supabase.url || !projectConfig.supabase.serviceRoleKey) {
    throw new Error(
      "Missing Supabase environment variables. Please check your .env file."
    );
  }

  return createClient(
    projectConfig.supabase.url,
    projectConfig.supabase.serviceRoleKey,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    }
  );
}

/**
 * Erstellt einen Supabase Client für Server-Side Verwendung mit User-Session
 * Verwendet Cookies für die Authentifizierung
 */
export async function createServerClientWithAuth(): Promise<SupabaseClient> {
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

  const cookieStore = await cookies();
  const accessToken = cookieStore.get(
    projectConfig.supabase.auth.cookieName
  )?.value;

  const client = createClient(
    projectConfig.supabase.url,
    projectConfig.supabase.anonKey,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
      global: {
        headers: accessToken
          ? {
              Authorization: `Bearer ${accessToken}`,
            }
          : {},
      },
    }
  );

  return client;
}

