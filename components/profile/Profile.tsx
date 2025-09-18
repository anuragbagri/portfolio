"use client"
import ProfileCard from './ProfileCard';

export default function Profile(){
    return (
          
<ProfileCard
  name="Anurag Bagri"
  title="Full stack web2 abd web3 Developer"
  handle="noob_anurag"
  status="Online"
  contactText="Contact Me"
  avatarUrl="./profile-photo.jpg"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
  onContactClick={() => console.log('Contact clicked')}
/>
    )
}