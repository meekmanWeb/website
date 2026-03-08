import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Spinner } from "../ui/spinner";

type AppVariant = "primary" | "secondary";

type AppButtonProps = React.ComponentProps<typeof Button> & {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  appVariant?: AppVariant;
};

export default function AppButton({
  className,
  isLoading,
  leftIcon,
  rightIcon,
  appVariant = "primary",
  children,
  disabled,
  ...props
}: AppButtonProps) {
  return (
    <Button
      className={cn(
        "flex items-center gap-2 w-full h-11 px-6 p-3 rounded-lg font-semibold",
        appVariant === "primary" && "bg-pink-500 text-white hover:bg-pink-600",
        appVariant === "secondary" &&
          "border border-pink-500  text-pink-400 hover:bg-pink-50",
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {leftIcon && <span>{leftIcon}</span>}
          <span className="block">{children}</span>
          {rightIcon && <span>{rightIcon}</span>}
        </>
      )}
    </Button>
  );
}
