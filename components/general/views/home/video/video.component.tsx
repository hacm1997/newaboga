import styles from './video.module.css';

export default function VideoComponent(props:any){
    const analytic = (event:string) =>{
        props.gaEventTracker(`Inicio: ${event} video`);
    }

    return(
        <>
            <div className={styles.content_video} title="Video">
                <a>
                    <video 
                        src='Video Web Aboga.webm'
                        autoPlay={false}
                        playsInline={true}
                        onPauseCapture={() => analytic('Pause')}
                        onPlayCapture={() => analytic('Play')}
                        controls
                    />
                </a>
            </div>
        </>
    );
}
