"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type User = {
    name: string;
    email: string;
    picture: string;
};

export default function DashboardPage() {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    // check user validation
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            router.push("/login");
        } else {
            setUser(JSON.parse(storedUser));
        }
    }, [router]);

    // log out function
    const logout = () => {
        localStorage.removeItem("user");
        router.push("/login");
    };


    if (!user) return null;

    return (
        <div className="w-full max-w-sm mx-auto p-6 bg-white rounded-2xl shadow text-center">
            <img
                src={user.picture}
                alt={user.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h1 className="text-xl font-bold mb-2">
                خوش آمدی {user.name}

            </h1>
            <p className="text-gray-600 mb-4">
                {user.email}
            </p>
            <Button
                onClick={logout}
                className="w-full">
                خروج
            </Button>
        </div>
    );
}