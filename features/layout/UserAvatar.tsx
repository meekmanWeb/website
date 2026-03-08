"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarProps {
  name: string; // Full name for fallback initials
  imageUrl?: string; // Optional profile image URL
  size?: number; // Width & height in px
  href?: string; // Link to profile page
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  name,
  imageUrl,
  size = 40,
  href = "/dashboard/profile",
  className,
}) => {
  // Compute initials from name
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const avatar = (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-gray-300 text-white font-semibold overflow-hidden",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          width={size}
          height={size}
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );

  return href ? <Link href={href}>{avatar}</Link> : avatar;
};

export default Avatar;
