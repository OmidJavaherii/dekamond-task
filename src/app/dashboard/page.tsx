"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type User = {
    name: string;
    email: string;
    picture: string;
};

export default function DashboardPage() {
    const [user, setUser] = useState<User | null>(null);
    const [imgError, setImgError] = useState(false);
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
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow text-center">
            <Image
                src={imgError ? "/default-avatar.png" : user.picture}
                width={80}
                height={80}
                alt={user.name}
                className="rounded-full mx-auto mb-4"
                onError={() => setImgError(true)}
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