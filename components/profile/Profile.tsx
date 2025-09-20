import TiltedCard from './TiltedCard';
export default function Profile(){
return (
<TiltedCard
  imageSrc="https://media.licdn.com/dms/image/v2/D5603AQFirspE0c7wlg/profile-displayphoto-shrink_200_200/B56ZQUEqioG8AY-/0/1735503555490?e=2147483647&v=beta&t=QHcqkdZRg_OMq0vYBaNFQ9bugr9W9gSHm0VXGyTS3dM"
  altText="Anurag - wassaup "
  captionText="Anurag"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
<p className="tilted-card-demo-text text-xl text-shadow-white">
    </p>
  }
/>
)
}