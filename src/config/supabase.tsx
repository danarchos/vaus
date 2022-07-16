import { createClient, SupabaseClient } from "@supabase/supabase-js";
import React from "react";
import { SupabaseContextProvider } from "use-supabase";

export const supabase: SupabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  process.env.NEXT_PUBLIC_SUPABASE_KEY ?? ""
);

export const SupabaseWrapper = ({ children }: any) => (
  <SupabaseContextProvider client={supabase}>
    {children}
  </SupabaseContextProvider>
);
