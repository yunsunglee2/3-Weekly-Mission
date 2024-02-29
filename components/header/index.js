import { useState, useEffect } from 'react';
import defaultProfile from '@/public/Avatar.svg'
import User from "@/components/header/User/User";
import AddInput from '@/components/header/AddInput/AddInput.js';
import { getOwner } from '@/components/api/Api.js';
import styles from './Header.module.css';

function Header({serachIsLoading}) {
  const getInfo = async () => {
      const { folder } = await getOwner();
      setProfile(folder.owner.profileImageSource)
      setOwner(folder.owner.name)
      setName(folder.name)
    }

    const [profile, setProfile] = useState(defaultProfile);
    const [owner, setOwner] = useState('@코드잇');
    const [name, setName] = useState('');

    useEffect(()=>{
      getInfo();
    },[])

  return (
    <div className={styles.Header}>
        {serachIsLoading ?  
        <AddInput/>
        :
        <div className={styles.box02}><User profileImage={profile} folderOwner={owner} folderName={name} /></div>
        }
        
    </div>
  )
}

export default Header;