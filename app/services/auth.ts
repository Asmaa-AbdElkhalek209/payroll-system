import { supabase } from "@/lib/supabase";
import { asyncWrapProviders } from "async_hooks";

export const signUp = async (email: string, password: string) => {
  return await supabase.auth.signUp({ email, password });
};

export const signIn = async (email: string, password: string) => {
  return await supabase.auth.signInWithPassword({ email, password });
};

export const signOut = async () => {
  return await supabase.auth.signOut();
};

export const x = async (e: string, p: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: e,
    password: p,
  });
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
};
