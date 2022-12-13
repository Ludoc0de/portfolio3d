
export default function Main(){ 
    return (
        <div className="main">
            <section 
                style={{
                    position: 'absolute',
                    top: '45vh',
                    // left: '5vw',
                    // transform: 'translateX(-50%)',
                    // color: 'green',
                    marginLeft: '1em',
                }}
            >
                <h1>Ludo code !</h1>
            </section>
            <section
                style={{
                    position: 'absolute',
                    top: '140vh',
                    // left: '50vw',
                    transform: 'translateX(100%)',
                    // color: '#f4b677',
                    margin: 0,
                    marginLeft: '1em',
                }}
            >
                <h1>My Portfolio</h1>
            </section>
            <section 
                style={{
                    position: 'absolute',
                    top: '250vh',
                    // left: '50vw',
                    // transform: 'translateX(-50%)',
                    // color: '#673ab7',
                    margin: 0,
                    marginLeft: '1em',
                }}
            >
                <h1>Contact me</h1>
            </section>
        </div>
    )
}