import { Sparkles, Stars, Shadow, ContactShadows } from '@react-three/drei'

export default function Particles(){

    return(
        <Stars radius={10} depth={50} count={2000} factor={5} saturation={0} fade speed={2} />
    )
}
