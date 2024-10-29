import styles from '../data/data.module.css';
import { useState } from 'react';
import "rc-slider/assets/index.css";
import { Range } from "react-range";
import Top from '../components/Top';
import BoxType from '../components/BoxType';
import data from '../assets/data.json'


function Search() {


    const [popup, setPopup] = useState(false);
    const [values1, setValues1] = useState<number[]>([50]); 
    const [values2, setValues2] = useState<number[]>([100]); 

    const [filteredData, setFilteredData] = useState(data); 

    const printCurrentValue1 = (newValues: number[]) => {
        setValues1(newValues);
    };

    const printCurrentValue2 = (newValues: number[]) => {
        setValues2(newValues);
        const filtered = data.filter(item => 
            item.price >= (newValues[0] - 10) 
        );
        setFilteredData(filtered);
    };



    


  return (
    <div>
        

        <div className={styles.search} onClick={() => setPopup(true)}>
                search
            </div>

            {popup && (
                <>
                    <div className="over-flow" onClick={() => setPopup(false)}>
                        <div className='result'>
                            <span>Result :  </span>
                            <span> {filteredData.length}</span>
                        </div>
                    </div>
                    <div className="box_popup">
                        <Top/>
                        <BoxType/>
                        <div className={styles.parent_range}>
                            <div className={styles.label}>
                               <span >Area </span>
                               <span > {values1[0]} sq.m</span>
                            </div>
                            <Range
                                step={0.1}
                                min={0}
                                max={300}
                                values={values1}
                                onChange={printCurrentValue1} 
                                renderTrack={({ props, children }) => (
                                    <div
                                        {...props}
                                        style={{
                                            ...props.style,
                                            height: "6px",
                                            width: "100%",
                                            backgroundColor: "#ccc",
                                        }}
                                    >
                                        {children}
                                    </div>
                                )}
                                renderThumb={({ props }) => (
                                    <div
                                        {...props}
                                        key={props.key}
                                        style={{
                                            ...props.style,
                                            height: "20px",
                                            width: "20px",
                                            backgroundColor: "#fff",
                                            borderRadius: "50%",
                                            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                                            transition: "background-color 0.3s ease",
                                            outline: "none",
                                        }}
                                    />
                                )}
                            />
                        </div>

                        <div className={styles.parent_range}>
                            <div className={styles.label}>
                               <span >Price </span>
                               <span > {values2[0]} LE</span>
                            </div>
                            <Range
                                step={0.1}
                                min={0}
                                max={88115}
                                values={values2}
                                onChange={printCurrentValue2} 
                                renderTrack={({ props, children }) => (
                                    <div
                                        {...props}
                                        style={{
                                            ...props.style,
                                            height: "6px",
                                            width: "100%",
                                            backgroundColor: "#ccc",
                                        }}
                                    >
                                        {children}
                                    </div>
                                )}
                                renderThumb={({ props }) => (
                                    <div
                                        {...props}
                                        key={props.key}
                                        style={{
                                            ...props.style,
                                            height: "20px",
                                            width: "20px",
                                            backgroundColor: "#fff",
                                            borderRadius: "50%",
                                            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                                            transition: "background-color 0.3s ease",
                                            outline: "none",
                                        }}
                                    />
                                )}
                            />
                        </div>
                    </div>
                </>
            )}
    </div>
  )
}

export default Search
