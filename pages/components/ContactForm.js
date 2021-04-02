import styles from '../../styles/ContactForm.module.css';
import React ,{useState, useImperativeHandle} from 'react'

export default function ContactForm ({cRef}) {


    
    return (
        <div>
            <div className={styles.msgbox}>
            <div className={styles.title}>Message</div>
            <div className={styles.line}></div>
            <div className={styles.subtitle}>If you have any suggestions or question for us.Please contact us.</div>
        </div>
        <div className={styles.formBox}>
            <div className={styles.inputbox}>
                <input placeholder="Company"   />
                <span>*</span>
            </div>
            <div className={styles.inputbox}>
                <input placeholder="Phone"   />
                <span>*</span>
            </div>
            <div className={styles.inputbox}>
                <input placeholder="Email"   />
                <span>*</span>
            </div>
            <div className={styles.inputbox}>
                <input placeholder="Subject"   />
                <span>*</span>
            </div>
            <div className={styles.textarea}>
                <textarea placeholder="if you have any suggestion or question for us.Please contact us."   />
                <span>*</span>
            </div>
            <div className={`${styles.inputbox} ${styles.vcbox}`}>
                <input className={styles.vcode} placeholder="mmmmm"   />
                <span>*</span>
                <img className={styles.verification_code} src="https://t230.web.ueeshop.com/inc/class/v_code.class.php?name=feedback&length=4&charset=en"></img>
            </div>
            <div className={`${styles.inputbox} ${styles.submitbtnbox}`}>
                <input className={styles.submitbtn} name="Submit"  type="submit" value="Submit"  />
            </div>
        </div>
        </div>
    )




}

