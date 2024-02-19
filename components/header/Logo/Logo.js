import Image from 'next/image'

function Logo({value}) {
  const src = value
  const handleClick = () => {
    window.location.href = '/'
  }
  return (
    <div className="Logo">
      <Image src={src} alt={value} onClick={handleClick}/>
    </div>
  )
}

export default Logo;