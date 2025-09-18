import Orb from './Orb';

export default function BackGround() {
    return (
<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Orb
    hoverIntensity={2.5}
    rotateOnHover={true}
    hue={327}
    forceHoverState={false}
  />
</div>
    )
}