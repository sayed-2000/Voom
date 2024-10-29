import { useState } from 'react';
import styles from './data.module.css';
import "rc-slider/assets/index.css";

import Search from '../components/Search';
import Polygon from '../components/Polygon';
import Polygon2 from '../components/Polygon2';
import Polygon3 from '../components/Polygon3';
import Polygon4 from '../components/Polygon4';

function Data() {
    // حالة للتحكم في ظهور أو اختفاء العنصر 
    const [Polygon1Popup, setPolygon1Popup] = useState(false);
    const [Polygon2Popup, setPolygon2Popup] = useState(false);
    const [Polygon3Popup, setPolygon3Popup] = useState(false);
    const [Polygon4Popup, setPolygon4Popup] = useState(false);

    return (
        <div className={styles.box} dir="ltr">
            <div 
                className='itme1'
                onMouseEnter={() => setPolygon1Popup(true)} 
                onMouseLeave={() => setPolygon1Popup(false)} 
            >
            </div>
            <div 
                className='itme2'
                onMouseEnter={() => setPolygon2Popup(true)} 
                onMouseLeave={() => setPolygon2Popup(false)} 
            >
            </div>
            <div 
                className='itme3'
                onMouseEnter={() => setPolygon3Popup(true)} 
                onMouseLeave={() => setPolygon3Popup(false)} 
            >
            </div>

            <div 
                className='itme4'
                onMouseEnter={() => setPolygon4Popup(true)} 
                onMouseLeave={() => setPolygon4Popup(false)} 
            >
            </div>
            <Search />
            {Polygon1Popup && <Polygon />}
            {Polygon2Popup && <Polygon2/>}
            {Polygon3Popup && <Polygon3/>}
            {Polygon4Popup && <Polygon4/>}
        </div>
    );
}

export default Data;
