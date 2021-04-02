import Head from 'next/head'
import styles from '../styles/Index.module.css'
import Header from '../pages/components/Header'
import Footer from '../pages/components/Footer'
import React,{useState,useRef} from 'react'
import { useRouter } from 'next/router'
import $ from 'jquery'
import { submit } from 'dom7';
var num = 0;


export default function Home() {
  
  const router = useRouter()
  const [run,setRun] = useState(true)
  const childRef = useRef();
  const [b_index,setB_index] = useState(0);
  const [active,setActive] = useState("home");


  const [username,setUsername] = useState("");
  const [organizationName,setOrganizationName] = useState("");
  const [phone,setPhone] = useState("");
 
  
  function agency(evevt){
    let isShowSearchBox = childRef.current.isShowSearchBox
    if(isShowSearchBox){
      childRef.current.changeSearchBox(false);
    }
  }

  function changeRouter(path){
    router.push(path)
  }
  // 判断返回顶部按钮显示
  function handleTouch(e){
    setTimeout(() => {
      var topp = $(document).scrollTop();
      let h = $(window).height();
      if(topp>h){
        $("#topicon").css({"display":"block"})
      }else{
        $("#topicon").css({"display":"none"})
      }

    },1000)
  }
  // 鼠标滚轮事件
  function handleOnWheel(event){
    let scrollTop = $('html, body').scrollTop()+50;
    if(scrollTop > $("#home").offset().top&& scrollTop<$("#products").offset().top){
      $("#topicon").css({"display":"none"})
      setActive("home")
    }else if(scrollTop > $("#products").offset().top&& scrollTop<$("#Institutions_in").offset().top){
      $("#topicon").css({"display":"block"})
      setActive("products")
    }else if(scrollTop > $("#Institutions_in").offset().top&& scrollTop<$("#about_us").offset().top){
      setActive("Institutions_in")
    }else if(scrollTop > $("#about_us").offset().top&& scrollTop<$("#contact_us").offset().top){
      setActive("about_us")
    }else if(scrollTop > $("#contact_us").offset().top){
      setActive("contact_us")
    }

  }
  function parantHandler(id) {
    // 子组件调用的父组件方法
    $('html, body').animate({scrollTop: $("#"+id).offset().top-50}, 500)
    setActive(id)
    handleTouch()
  }
  // 提交信息
  function submit (){
    let reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    if(username == ""){
      alert("请填写联系人姓名")
      return false;
    }else if (!reg.test(phone)) {
      alert("请填写正确的手机号")
      return false;
    }else if(organizationName == ""){
      alert("请填写机构地址")
      return false;
    }
    $.ajax({
      method: "POST",
      url: "https://api.yihui.wang/yihui/app/student/saveWaitOrganization",
      contentType: 'application/json',
      data:JSON.stringify({
        "name": name,
        "organizationName": organizationName,
        "phone":phone
      }),
      success: function( res ) {
        if(res.code == 0){
          setUsername("");
          setOrganizationName("");
          setPhone("");
          alert("提交成功 稍后工作人员会与您对接~!");
        }
     }
  });


  }

  return (
    <div  
      id="container"
      onWheel={(event) => { handleOnWheel(event)}}
      onClick={(evevt) => { agency(evevt)}} 
      onTouchMove={(e) => { handleTouch(e)}}
    >
      
      <Head>
        <title>蚁慧网络</title>
        <link rel="icon" href="https://shaoxingyihui.oss-cn-hangzhou.aliyuncs.com/web/c_wx/tx.png" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no"></meta>
      </Head>
      <img onClick={() => {parantHandler("home");  $('#topicon').fadeOut("slow").delay(1000) }} id="topicon" className={styles.topicon} src="./topicon.png"></img>
      <Header handlerClick={parantHandler} active={active}  cRef={childRef} ></Header>
     
      <div className={styles.main}>
        <div id="home" className={styles.home_box}>
          <div className={styles.warp}>
            <div className={styles.left}>
              <div className={styles.line}></div>
              <div className={styles.title}>让孩子们都可以有意义地利用时间</div>
              <div className={styles.subTitle}>
                
              {`我们相信孩子的时间是宝贵的，虽然教育的形式多种多样，参与孩子教育过程的角色也很多，但不管怎么样，主体只`+
              `有一个，就是孩子本身是否乐于接受。我们立下一个心愿，从2020年开始，用60年时间，愿同所有培训机构一起，同所有`+
              `老师一起，同所有家庭一起，为孩子创造一个有意义利用时间的环境，希望这里成为他们的“童话王国”！`}
              </div>
              <div onClick={() => {parantHandler("Institutions_in")}} className={styles.experience_btn}>加入我们</div>
            </div>
            <div className={styles.center}>
              <img  src="/bg2.png"></img>
            </div>
          </div>
        </div>
        {/* 产品介绍 */}
        <div id="products" className={styles.products}>
          <div  className={styles.head_box}>
            <img src="/l_line.png" className={styles.left_line}></img>
            <span>产品介绍</span>
            <img src="/r_line.png" className={styles.left_line}></img>
          </div>
          <div className={styles.products_list}>
            <div className={styles.products_item}>
              <img className={styles.product_pic} src="/p01_bg.png"></img>
            </div>
            <div className={styles.products_item}>
              <img className={styles.product_pic} src="/p02_bg.png"></img>
            </div>
            <div className={styles.products_item}>
              <img className={styles.product_pic} src="/p03_bg.png"></img>
            </div>
          </div>
        </div>
        {/* 机构入驻 */}
        <div id="Institutions_in" className={styles.Institutions_in}>
          <div className={styles.head_box}>
            <img src="/l_line.png" className={styles.left_line}></img>
            <span>机构入驻</span>
            <img src="/r_line.png" className={styles.left_line}></img>
          </div>

          <div className={styles.form_box}>
            <div className={styles.form}></div>
            <div className={styles.circle}></div>
            <img src="/bg3.png" className={styles.formbg}></img>
            <div className={styles.content}>
              <div className={styles.top}>
                <img src="/tx.png" className={styles.tx}></img>
                <div className={styles.input_list}>
                  <input  onChange={(event) => {setUsername(event.target.value)}}   type="text"  value={username}  placeholder="联系人姓名"   />
                  <input  onChange={(event) => {setPhone(event.target.value)}}    type="number"   value={phone} placeholder="手机号码"   />
                  <input  onChange={(event) => {setOrganizationName(event.target.value)}}  type="text"  value={organizationName}  placeholder="机构地址"   />
                </div>
                <style jsx>{` input::-webkit-input-placeholder { color: #A3DCAD; } `}</style>
              </div>
              <button  onClick={()=>{submit()}}>提交</button>
            </div>
          </div>
        </div>
        {/* 关于我们 */}
        <div id="about_us" className={styles.about_us}>
          <div className={styles.head_box}>
            <img src="/l_line.png" className={styles.left_line}></img>
            <span>关于我们</span>
            <img src="/r_line.png" className={styles.left_line}></img>
          </div>
          <div className={styles.ablout_us_content}>
            <div className={styles.t_box}>
              <img src="/icon4.png"></img>
             {` 蚁，是最低微的物种之一，但蚁群通过网络却能构成一个强大的新物种；慧，是人类最高意识形态之一，但庄子说“道在蝼蚁、在稊`+
             `稗、在瓦甓、在屎溺”，智慧不在无处，却也无处不在。蚁慧就是这样一种矛盾且统一，蚁慧团队的每一个人，也是这样。为我们的使命，`+
             `努力创造自己的独特价值，努力为孩子们的“童话王国”用心画上每一笔色彩！`}
            </div>
            <div className={styles.culture_title}> 
              <div>企业文化</div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.culture_list}>
              <div className={styles.culture_item_box}>
                <div className={styles.culture_item} >
                    <div className={styles.point}> </div>
                    <div className={styles.title}>使命</div>
                    <img className={styles.icon} src="/icon1.png"></img>
                </div>
                <div className={styles.title2}>让孩子们都可以有意义 <br/>地利用时间</div>
              </div>
              <div className={styles.culture_item_box}>
                <div className={styles.culture_item} >
                    <div className={styles.point2}> </div>
                    <div className={styles.title}>价值观</div>
                    <img className={styles.icon} src="/icon2.png"></img>
                </div>
                <div className={styles.title2}>会员第一<br/>真 • 诚<br/>平常心</div>
              </div>
              <div className={styles.culture_item_box}>
                <div className={styles.culture_item} >
                    <div className={styles.point3}> </div>
                    <div className={styles.title}>愿景</div>
                    <img className={styles.icon} src="/icon3.png"></img>
                </div>
                <div className={styles.title2}>做一家60年的公司，3年实现服务<br/>20万教育机构，500万老师，<br/>1亿家庭，1.5亿孩子！</div>
              </div>
            </div>
            <div className={styles.culture_title}> 
              <div>公司和团队简介</div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.t_box1}>
            {`2017年6月1号我们开了第一家乐高店，3个月时间孩子爆满，从此我们确认了我们的使命，2020年6月18号成立蚁慧网络，`+
            `得到绍兴市政府高度支持，作为未来教育数字化的重点项目，并同时入住绍兴上虞e游小镇。我们核心团队的背景或许不是`+
            `最强大的，但市面上的大厂背景还是有的，最重要的是，我们全体联合创始人都是资深爸爸或者妈妈，天下父母心是一致的`+
            `为了孩子，我们可以付出任何代价。我们希望和我们一样价值观的家长们，如果认同我们的使命，真诚地希望您联系我们，`+
            `因为我们需要各类人才，求贤若渴！`}
            </div>


          </div>
          
          
        </div>
        {/* 联系我们 */}
        <div id="contact_us" className={styles.contact_us}>
          <div className={styles.head_box}>
            <img src="/l_line.png" className={styles.left_line}></img>
            <span>联系我们</span>
            <img src="/r_line.png" className={styles.left_line}></img>
          </div>
          <div className={styles.sub_title}>让我们更好的服务您</div>
          <div className={styles.con_box}>
              <div onClick={() =>{window.location.href = 'tel://' + "13185567662";}} className={styles.item}>
                <span className={styles.name}>联系电话：</span>
                <img src="./m_icon.png"></img>
                <span>131-8556-7662</span>

              </div>
              <div className={styles.item}>
                <span className={styles.name}>合作咨询：</span>
                <img src="./e_icon.png"></img>
                <span>marketing@yihui.wang</span>
              </div>
          </div>
          
          <div className={styles.foot_nav}>
            <span onClick={() => {parantHandler("home")}}>主页</span>
            <span onClick={() => {parantHandler("products")}}>产品</span>
            <span onClick={() => {parantHandler("Institutions_in")}}>入驻机构</span>
            <span onClick={() => {parantHandler("about_us")}}>关于我们</span>
            <span onClick={() => {parantHandler("contact_us")}}>联系我们</span>
          </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}
