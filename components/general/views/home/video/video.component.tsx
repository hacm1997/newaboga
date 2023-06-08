import styles from './video.module.css';

export default function VideoComponent(){

    return(
        <>
            <div className={styles.content_video} title="Video">
                <video 
                    src='Video Web Aboga.webm'
                    autoPlay={true}
                    playsInline={true}
                    controls
                />
            </div>
        </>
    );
}
