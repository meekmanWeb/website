import Image from "next/image";

const CompanyLogo = () => {
  return (
    <div className="size-[50] rounded-full bg-white justify-center items-center flex">
      <Image
        src="/images/ss2.png"
        alt="Meekman Publishers"
        width={50}
        height={40}
      />
    </div>
  );
};

export default CompanyLogo;
