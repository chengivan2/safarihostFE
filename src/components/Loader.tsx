import Image from 'next/image'

const Loader = () => {
    return (
        <>
            <div className="preloader">
                <div className="loading-container">
                    <div className="loading"/>
                    <div id="loading-icon">
                        <Image className="main-load" src="/safarihostlogonobg.png" width={100} height={100} alt="SafariHost logo"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loader
