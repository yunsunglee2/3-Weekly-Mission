import Image from "next/image";

function FooterSns({ value }) {
  return (
    <div className="FooterSns">
      <Image src={value} alt={value} />
    </div>
  );
}

export default FooterSns;
