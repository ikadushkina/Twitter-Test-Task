import React, { useMemo } from 'react';
import styles from './TwitCard.module.css';
import twitter from 'twitter-text';

const TweetCard = ({ tweet }) => {
    if (!tweet) return null;

    const content = useMemo(() => {
        const tweetContent = twitter.autoLink(tweet.description, {urlEntities: JSON.parse(tweet.entities)});
        return <div dangerouslySetInnerHTML={{__html: tweetContent}}/>
    }, [tweet]);

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <a className={styles.avatar} href={tweet.user_url} style={{backgroundImage: `url(${tweet.profile_image_url})`}} />
                <div className={styles.nameLine}>
                    <span>{tweet.name}</span>
                    <a className={styles.screenName} href={tweet.user_url}>@{tweet.screen_name}</a>
                </div>
            </div>
            <div className={styles.content}>{content}</div>
            {
                tweet.location &&
                <div className={styles.footer}>
                    <span className={styles.location}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 12 16"
                             focusable="false" className={styles.svg} height="1em" width="1em"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z">
                            </path>
                        </svg>
                        {tweet.location}
                    </span>
                    {
                        !!tweet.url &&
                        <a href={tweet.url} className={styles.link}>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16"
                                 focusable="false" className={styles.svg} height="1em" width="1em"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">
                                </path>
                            </svg>
                            <span className={styles.linkUrl}>{tweet.url}</span>
                        </a>
                    }
                </div>
            }
        </div>
    )
}

export default TweetCard;
