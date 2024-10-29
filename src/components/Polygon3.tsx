import styles from '../data/data.module.css';
import { useState } from 'react';
import "rc-slider/assets/index.css";


function Polygon3() {

    const [popup, setPopup] = useState(true);

  return (
    <div>
        

        <div className={styles.search} onClick={() => setPopup(true)}>
                search
            </div>

            {popup && (
                <>
                    <div className=" box_popup-3">
                        <div className='itme_popup'>
                            <span >Unit 113 </span>
                            <span className='status'>Available</span>
                        </div>
                        <div className='itme_popup'>
                            <span>Unit Type</span>
                            <span>Clinical</span>
                        </div>
                        <div className='itme_popup'>
                            <span>Unit Area</span>
                            <span>35 M</span>
                        </div>
                        <div className='itme_popup'>
                            <span>Price</span>
                            <span>98000,0 EGP</span>
                        </div>
                        <button className='main-button'>Callback</button>
                    </div>
                </>
            )}
    </div>
  )
}

export default Polygon3
