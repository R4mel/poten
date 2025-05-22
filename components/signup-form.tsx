"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignupForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    address: "",
    role: "user",
  });
  const [agree, setAgree] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) {
      setMessage("You must agree to the terms and conditions.");
      return;
    }
    setLoading(true);
    setMessage("");
    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setLoading(false);
    if (res.ok) {
      setMessage("Registration successful!");
      setForm({
        email: "",
        password: "",
        name: "",
        phone: "",
        address: "",
        role: "user",
      });
      setAgree(false);
    } else {
      setMessage(data.error || "Registration failed.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto p-6 bg-white rounded shadow"
    >
      <h2 className="text-xl font-bold mb-2">Sign Up</h2>
      <Input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <Input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <Input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        required
      />
      <Input
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
        required
      />
      <Input
        name="role"
        placeholder="Role (user/admin)"
        value={form.role}
        onChange={handleChange}
        required
      />
      <div className="flex items-center">
        <input
          type="checkbox"
          id="agree"
          checked={agree}
          onChange={() => setAgree((v) => !v)}
          className="mr-2"
        />
        <label htmlFor="agree" className="text-sm select-none">
          이용약관에 동의합니다.
        </label>
      </div>
      <Button type="submit" disabled={loading || !agree} className="w-full">
        {loading ? "Registering..." : "Sign Up"}
      </Button>
      {message && <div className="text-center mt-2 text-sm">{message}</div>}
    </form>
  );
}
