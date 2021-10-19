import React, { useState } from 'react';
import styles from './CampsPage.module.css';
import { examples, mock } from '../../helper/constants';
import TweetCard from '../../components/TwitCard';

const CampsPage = () => {
    const [data, setData] = useState('');
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    const loadData = () => {
        setData([]);
        setLoading(true)
        setTimeout(() => {
            setData(mock);
            setLoading(false);
        }, 1000);
    }

    const getData = () => {
        if (!search) return;
        loadData();
    }

    const clickOnExample = (text) => {
        setSearch(text);
        loadData();
    }

    const enterClick = e => {
        if (e.keyCode === 13) {
            getData();
        }
    }

    return (
        <div className={styles.root}>
            <span className={styles.title}>Twitter champions 🦸🏻‍♂️</span>
            <span className={styles.subtitle}>Find the best people to follow on any topic. Based on value, not followers.</span>
            <span className={styles.description}>
                We use GPT-3 and a custom scoring algorithm to do so. 
                <a className={styles.link}>
                    Learn more here.
                </a>
            </span>
            <div className={styles.examplesContainer}>
                {
                    examples.map((item, idx) =>
                        <div key={idx} className={styles.example} onClick={() => clickOnExample(item)}>
                            {item}
                        </div>
                    )
                }
            </div>
            <div className={styles.searchContainer}>
                <input
                    type='text'
                    value={search}
                    className={styles.input}
                    onChange={e => setSearch(e.target.value)}
                    placeholder='Input topic e.g. startup'
                    onKeyDown={enterClick}
                />
                <button className={styles.button} onClick={getData}> {loading ? 'Load...' : 'Search'}</button>
            </div>
            {!!data.length &&
            <a className={styles.share}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" aria-hidden="true"
                     focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                </svg>
                Share the list on twitter
            </a>
            }
            <div>
                {
                    !!data.length &&
                    data.map(item => <TweetCard key={item.id} tweet={item}/>)
                }
            </div>
        </div>
    )
}

export default CampsPage;
