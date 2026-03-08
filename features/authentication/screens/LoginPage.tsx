"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import {
  resetPasswordWithFirebase,
  signinWithFirebase,
} from "@/features/firebase/authentication/Helpers";
import { LoginFormValues, loginSchema } from "../types/schema";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [resetSuccess, setResetSuccess] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async ({ email, password }: LoginFormValues) => {
    setSubmitError("");
    setSubmitSuccess("");
    setResetSuccess("");

    const result = await signinWithFirebase({ email, password });
    if ("errorCode" in result) {
      if (result.errorCode === "auth/invalid-credential") {
        setSubmitError("Invalid Credentails");
        return;
      }
      setSubmitError(result.errorMessage ?? "Unable to sign in.");
      return;
    }

    setSubmitSuccess("Signed in successfully.");
    router.push("/admin/dashboard");
  };

  const onForgotPassword = async () => {
    setSubmitError("");
    setSubmitSuccess("");
    setResetSuccess("");

    const email = getValues("email").trim();
    const emailValidation = loginSchema.shape.email.safeParse(email);

    if (!emailValidation.success) {
      setSubmitError("Enter a valid email address first.");
      return;
    }

    const result = await resetPasswordWithFirebase(email);

    if ("errorCode" in result) {
      setSubmitError(
        result.errorMessage ?? "Unable to send password reset email.",
      );
      return;
    }

    setResetSuccess("Password reset email sent.");
  };

  return (
    <section className="mx-auto my-10 w-full max-w-md px-4">
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-800"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-primary"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between gap-3">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-800"
            >
              Password
            </label>
          </div>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 outline-none focus:border-primary"
              {...register("password")}
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>
        <button
          type="button"
          onClick={onForgotPassword}
          className="text-sm font-medium text-primary hover:underline"
        >
          Forgot password?
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-primary px-4 py-2 font-medium text-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Signing in..." : "Login"}
        </button>

        <p className="text-sm text-gray-700">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-primary hover:underline"
          >
            Sign up
          </Link>
        </p>

        {submitError && <p className="text-sm text-red-600">{submitError}</p>}
        {submitSuccess && (
          <p className="text-sm text-green-700">{submitSuccess}</p>
        )}
        {resetSuccess && (
          <p className="text-sm text-green-700">{resetSuccess}</p>
        )}
      </form>
    </section>
  );
};

export default LoginPage;
