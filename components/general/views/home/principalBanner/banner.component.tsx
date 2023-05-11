import styles from './banner.module.css';

export default function BannerComponent(props:any){

    return(
        <>
            <div className={"bg-[url('/images/home/background-home.png')] -mt-32 bg-no-repeat bg-right "+styles.content}>
                <div className={"flex items-center gap-10 pt-40 w-full "+ styles.general}>
                    <div className={"w-3/4 "+styles.texts}>
                        <h1 className={"pl-32 w-4/4 sm:pl-18 "+styles.title}>
                            {props.translate('home:title_banner')}
                        </h1>
                        <p className={"pl-32 w-4/4 pt-4 sm:pl-18 "+styles.description}>
                            {props.translate('home:description')}
                        </p>
                        <div className={"pl-32 w-4/4 pt-4 sm:pl-18 "+ styles.button}>
                            <button >
                                {props.translate('home:button')}
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <img className="float-right" src="/images/home/banner-home.png"/>
                    </div>
                </div>
            </div>
        </>
    );
}
