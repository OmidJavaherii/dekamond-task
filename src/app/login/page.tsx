"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { validateIranianMobile } from "@/lib/validatePhone";

export default function LoginPage() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();


    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    const handleLogin = async () => {
        if (!inputRef.current) {
            return
        }
        const phone = inputRef.current.value
        if (!validateIranianMobile(phone)) {
            setError("شماره موبایل معتبر نیست");
            return;
        }
        setError("");
        setLoading(true);


        try {
            const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
            const data = await res.json();
            const user = data.results[0];


            const userData = {
                name: `${user.name.first} ${user.name.last}`,
                email: user.email,
                picture: user.picture.medium,
            };


            localStorage.setItem("user", JSON.stringify(userData));
            router.push("/dashboard");
        } catch (err) {
            setError(err!.toString() || "مشکلی رخ داد. دوباره تلاش کنید.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <form
            className="w-full max-w-sm mx-auto p-6 bg-white rounded-2xl shadow"
            onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
            }}
        >
            <h1 className="text-xl font-bold mb-4 text-center">ورود</h1>
            <label className="block mb-2 text-sm font-medium text-right">شماره موبایل</label>
            <Input
                type="text"
                ref={inputRef}
                name="phone-number"
                placeholder="09xxxxxxxxx"
                aria-invalid={!!error}
            />
            {error && <p className="text-red-500 text-sm text-right mt-1">{error}</p>}
            <Button
                type="submit"
                className="w-full mt-4"
                disabled={loading}
            >
                {loading ? "در حال ورود..." : "ورود"}
            </Button>
        </form >
    );
}