"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const LearnMoreButton = () => {
  const router = useRouter();

  return (
    <Button
      className="w-full max-w-[180px] mt-2 text-white text-lg md:text-xl p-6 bg-primary"
      onClick={() => router.push("/about")}
      data-aos="flip-up"
    >
      Learn more
    </Button>
  );
};

export default LearnMoreButton;
