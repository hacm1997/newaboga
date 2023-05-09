import styles from './form.module.css';
import {useEffect, useState} from "react";
import config from "../../../../../services/config";

export default function FormComponent(props:any){
    const [valuesForm, setValuesForm] = useState<any>({email:config.EMAIL_ABOGA as string});

    const handleForm = async (e: any) => {
        const value = e.target.value;
        setValuesForm({...valuesForm, [e.target.name]: e.target.value});
    }

    const dptoSelect = props.dpto.map((item:any, index:any) => (
        <option key={index} value={item}>{item}</option>
    ));
    const citySelect = props.city.map((item:any, index:any) => (
        <option key={index} value={item}>{item}</option>
    ));

    useEffect(()=>{
        props.setSelectDpto(valuesForm.dpto);
    }, [valuesForm.dpto]);

    return(
        <>
            <div className={"h-[auto] block p-5 md:flex md:p-0 place-content-around items-center bg-[url('/images/home/form/background-form.png')] bg-contain bg-no-repeat "+ styles.content_general}>
                <div className={styles.title}>
                    <h4>
                        {props.translate('form.title')}<br/>
                        <span>{props.translate('form.title2')}</span>
                    </h4>
                </div>
                <div className={styles.form}>
                    <form>
                        <div>
                            <select className="w-full mt-5" name="dpto" onChange={handleForm} required>
                                <option value="">{props.translate('form.inputs.dpto')}</option>
                                {dptoSelect}
                            </select>
                        </div>
                        <div>
                            <select className="w-full mt-5" name="city" onChange={handleForm} required>
                                <option value="">{props.translate('form.inputs.city')}</option>
                                {citySelect}
                            </select>
                        </div>
                        <div>
                            <input className="w-full mt-5" name="address" type="text" placeholder={props.translate('form.inputs.address')} onChange={handleForm} required/>
                        </div>
                        <div>
                            <input className="w-full mt-5" name="name" type="text" placeholder={props.translate('form.inputs.fullname')} onChange={handleForm} required/>
                        </div>
                        <div>
                            <input className="w-full mt-5" name="phone" type="number" placeholder={props.translate('form.inputs.phone')} onChange={handleForm} required/>
                        </div>
                        <div>
                            <input className="w-full mt-5" name="useremail" type="email" placeholder={props.translate('form.inputs.email')} onChange={handleForm} required/>
                        </div>
                        <div>
                            <select className="w-full mt-5" name="type_service" onChange={handleForm} required>
                                <option value="">{props.translate('form.inputs.type_service')}</option>

                            </select>
                        </div>
                        <div>
                            <select className="w-full mt-5" name="service" onChange={handleForm} required>
                                <option value="">{props.translate('form.inputs.service')}</option>

                            </select>
                        </div>
                        <div className={styles.button}>
                            <button className="w-full mt-5">Contactar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
