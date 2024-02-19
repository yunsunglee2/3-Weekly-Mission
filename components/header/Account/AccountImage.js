import Image from "next/image";

function AccountImage({ value }) {
  return (
    <div className="accountImage">
      <Image src={value} alt={value} />
    </div>
  );
}
export default AccountImage;
