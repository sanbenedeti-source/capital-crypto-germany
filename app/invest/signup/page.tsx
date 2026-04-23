"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) alert(error.message);
    else alert("Check your email!");
  };

  return (
    <main className="p-10">
      <h1 className="text-3xl mb-6">Sign Up</h1>

      <input
        placeholder="Email"
        className="border p-2 block mb-4"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        className="border p-2 block mb-4"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleSignup}
        className="bg-black text-white px-6 py-2"
      >
        Register
      </button>
    </main>
  );
}