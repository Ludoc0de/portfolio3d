
export default function Objects(){
    
    return (
        <>
            <mesh position-x={3} scale={2}>
                <boxGeometry />
                <meshBasicMaterial color="red"/>
            </mesh>
            <mesh>
                <sphereGeometry />
                <meshBasicMaterial color="orange"/>
            </mesh>
        </>
    )
}