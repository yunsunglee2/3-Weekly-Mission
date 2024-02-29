import Image from 'next/image'
import Link from "next/link";

function Logo({value}) {
  const src = value
  return (
    <div className="Logo">
      <Link href='/'><Image src={src} alt={value} /></Link>
    </div>
  )
}

export default Logo;