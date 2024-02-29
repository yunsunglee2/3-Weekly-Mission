import Image from "next/image";

function AccountImage({ name, src ='' }) {
  return (
    <div className="accountImage">
      <Image
        src={src}
        width={20}
        height={20}
        alt={name}
      />
    </div>
  );
}
export default AccountImage;
