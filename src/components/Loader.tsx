import Preloader from '@/assets/img/logo/preloader-icon1.png'
import Image from 'next/image'

const Loader = () => {
    return (
        <>
            <div className="preloader">
                <div className="loading-container">
                    <div className="loading"/>
                    <div id="loading-icon">
                        <Image className="main-load" src={Preloader} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loader
