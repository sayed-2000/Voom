import styles from '../data/data.module.css';
import { useState } from 'react';
import "rc-slider/assets/index.css";


function Polygon4() {

    const [popup, setPopup] = useState(true);

  return (
    <div>
        

        <div className={styles.search} onClick={() => setPopup(true)}>
                search
            </div>

            {popup && (
                <>
                    {/* <div className="over-flow"></div> */}
                    <div className=" box_popup-2">
                        <div className='itme_popup'>
                            <span >Unit 78</span>
                            <span className='status2'> sold</span>
                        </div>
                        <div className='itme_popup'>
                            <span>Unit Type</span>
                            <span>Commercial</span>
                        </div>
                        <div className='itme_popup'>
                            <span>Unit Area</span>
                            <span>35 M</span>
                        </div>
                        <div className='itme_popup'>
                            <span>Price</span>
                            <span>330.00 EGP</span>
                        </div>
                        <button className='main-button'>Callback</button>
                    </div>
                </>
            )}
    </div>
  )
}

export default Polygon4