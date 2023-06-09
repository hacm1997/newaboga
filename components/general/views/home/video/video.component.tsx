import styles from './video.module.css';

export default function VideoComponent(props:any){
    const analytic = (event:string) =>{
        props.gaEventTracker(`Inicio: ${event} video`);
    }

    return(
        <>
            <div className={styles.content_video} title="Video" data-aos="fade-up">
                <a>
                    <video 
                        src='Video Web Aboga.webm'
                        autoPlay={false}
                        playsInline={true}
                        poster='/images/home/video/video.png'
                        onPauseCapture={() => analytic('Pause')}
                        onPlayCapture={() => analytic('Play')}
                        controls
                    />
                </a>
            </div>
        </>
    );
}
