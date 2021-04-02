import styles from '../../styles/Header.module.css'
import React, { useState, useImperativeHandle,useEffect } from 'react'
import { useRouter } from 'next/router'
export default function Header({ cRef,handlerClick,active }) {

    const router = useRouter()
    const [navTitle, setNavTitle] = useState('')
    const [isShowSearchBox, setIsShowSearchBox] = useState(false)
    const [isShow_M_Search,setIsshow_M_Search] = useState(false)
    const [isShowMobileMenu, setIsShowMobileMenu] = useState(false)


   


    function subRowMouseOver(val) {
        setNavTitle(val)


    }
    function subRowMouseLeave(e) {
        if (e._targetInst.memoizedProps.children != navTitle) {
            setNavTitle('')
        }
    }
    function changeMenu(){
        setIsShowMobileMenu(!isShowMobileMenu)

    }
    function changeRouter(path) {
        setIsShowMobileMenu(false)
        router.push(path)
    }
    function changePageTop(){

        console.log(cRef)
    }


    useImperativeHandle(cRef, () => ({
        // 把整个对象放在这里面暴露给父组件;
        isShowSearchBox,
        changeSearchBox: (state) => {
            setIsShowSearchBox(state);
        }

    }))


    return (
        <>
            <div className={styles.header}>

                <div className={styles.warp}>
                    <img className={styles.logo} onClick={()=> {handlerClick("#home")}}  src={'./logo1.png'}></img>
                    <div onMouseLeave={(e) => { subRowMouseLeave(e) }} className={styles.nav}>
                        <div onMouseOver={() => { subRowMouseOver('Home') }} title="Home" className={styles.nav_item}>
                            <span onClick={()=> {handlerClick("home")}}>首页</span>
                            <div className={active=="home"?styles.active:styles.line}></div>
                        </div>
                        <div onMouseOver={() => { subRowMouseOver('Products') }} title="Products" className={styles.nav_item}>
                            <span onClick={()=> {handlerClick("products")}}>产品</span>
                            <div className={active=="products"?styles.active:styles.line}></div>
                        </div>
                        <div onMouseOver={() => { subRowMouseOver('Products') }} title="Products" className={styles.nav_item}>
                            <span onClick={()=> {handlerClick("Institutions_in")}}>机构入驻</span>
                            <div className={active=="Institutions_in"?styles.active:styles.line}></div>
                        </div>
                        <div onMouseOver={() => { subRowMouseOver('Download') }} title="Download" className={`${styles.nav_item} ${styles.nav_item_download}`}>
                            <span onClick={()=> {handlerClick("about_us")}}>关于我们</span>
                            <div className={active=="about_us"?styles.active:styles.line}></div>
                        
                        </div>
                        <div onMouseOver={() => { subRowMouseOver('Abuot Us') }} title="Abuot Us" className={`${styles.nav_item} ${styles.nav_item_aboutus}`}>
                            <span onClick={()=> {handlerClick("contact_us")}}>联系我们</span>
                            <div className={active=="contact_us"?styles.active:styles.line}></div>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* 移动端搜索框 */}
            <div className={isShow_M_Search?styles.mobile_search_box1:styles.mobile_search_box}>
                    <div onClick={() => {setIsshow_M_Search(false)}} className={styles.close_btn}></div>
                    <div className={styles.form}>
                        <input type="text" name="Keyword" placeholder="Search Our Catalog" ></input>
                        <div className={styles.submit}></div>
                    </div>
            </div>
            {/* 移动端头部 */}
            <div  className={styles.mobile_header}>
                <img className={styles.logo} onClick={() => handlerClick("home")} src={'./logo1.png'}></img>
                <div onClick={() => {changeMenu()}}  className={styles.menu_box}>
                    <img className={styles.icon} src={isShowMobileMenu?'./close.png':'./menu.png'}></img>
                </div>
            </div> 
            {/* 菜单 */}
            {isShowMobileMenu?(<div  onClick={() => {changeMenu()}} className={styles.mobile_menu}></div>):null}
            <div className={isShowMobileMenu?styles.nav_list1:styles.nav_list}>
                <div  className={active=="home"? styles.m_nav_item1:styles.m_nav_item} onClick={() => handlerClick("home")}>首页</div>
                <div className={active=="products"? styles.m_nav_item1:styles.m_nav_item} onClick={() => handlerClick("products")}>产品</div>
                <div className={active=="Institutions_in"? styles.m_nav_item1:styles.m_nav_item} onClick={() => handlerClick("Institutions_in")}>机构入驻</div>
                <div className={active=="about_us"? styles.m_nav_item1:styles.m_nav_item} onClick={() => handlerClick("about_us")}>关于我们</div>
                <div className={active=="contact_us"? styles.m_nav_item1:styles.m_nav_item} onClick={() => handlerClick("contact_us")}>联系我们</div>
            </div>
            
        </>
    )




}