"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validations/auth.schema"; // Reusing existing schema
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

type LoginFormValues = z.infer<typeof loginSchema>;

export default function AdminLoginPage() {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormValues) => {
        setError(null);
        const result = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password,
        });

        if (result?.error) {
            setError("Invalid admin credentials");
        } else {
            router.push("/admin/dashboard");
        }
    };

    return (
        <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center">
            <div className="w-full max-w-lg border border-black/15 bg-[#f6f3ec] p-7 shadow-[0_24px_80px_rgba(17,18,16,.12)] sm:p-10">
                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#9a4529]">Protected workspace</p>
                <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-.05em]">Welcome back.</h2>
                <p className="mb-8 mt-3 text-sm leading-6 text-stone-600">Sign in to manage projects, construction articles and the public portfolio.</p>

                {error && (
                    <div className="mb-5 border-l-2 border-rose-600 bg-rose-50 p-3 text-sm text-rose-700">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            {...register("email")}
                            type="email"
                            className="w-full border border-black/20 bg-white px-3 py-3 focus:border-[#9a4529] focus:outline-none focus:ring-1 focus:ring-[#9a4529]"
                        />
                        {errors.email && (
                            <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            {...register("password")}
                            type="password"
                            className="w-full border border-black/20 bg-white px-3 py-3 focus:border-[#9a4529] focus:outline-none focus:ring-1 focus:ring-[#9a4529]"
                        />
                        {errors.password && (
                            <p className="text-destructive text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-3 w-full bg-[#111210] py-3 text-sm font-bold uppercase tracking-[.1em] text-white transition hover:bg-[#9a4529] disabled:opacity-50"
                    >
                        {isSubmitting ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}
