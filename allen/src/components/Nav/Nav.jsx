import logo from './../../assets/logo.svg'
import phoneLogo from './../../assets/phoneLogo.svg'

export default function Nav(props) {
    return <div style={{position:"sticky", zIndex:"101",top:"0px", backgroundColor:"white"}}>
        {(props.isVisible) ? <InnerDiv></InnerDiv> : null}
        {(props.isBannerVisible) ? <Banner></Banner> : null}
    </div>
}

function InnerDiv() {
    return <div style={{ padding: "2px" }}>
        <div style={{ display: "flex", marginLeft: "16px", marginRight: "16px", alignItems: "center" ,marginBottom:"8px"}}>
            <div style={{ display: "flex", alignItems: "center" }}><img src={logo} alt="" /></div>
            <div>
                <ul style={{ display: "flex", listStyle: "none", gap: "4vw" ,whiteSpace: "nowrap"}}>
                    <li><div>Courses</div></li>
                    <li><div>Test Series</div></li>
                    <li><div>Classroom</div></li>
                    <li><div>Results</div></li>
                    <li><div>Scholorship</div></li>
                    <li><div>Allen E-Store</div></li>
                    <li><div>More</div></li>
                </ul>
            </div>
            <span style={{ width: "28vw" }}></span>
            <div style={{ display: "flex", gap: "1vw" }}>
                <button className="phoneLogo" style={{ border: "none", backgroundColor: "#0266da", width: "32px", height: "32px", borderRadius: "16px", display: "flex", justifyContent: "center", alignItems: "center" }}><img style={{ filter: "invert(1)" }} src={phoneLogo} alt="" /></button>
                <button className='login' style={{ border: "2px solid #0266da", backgroundColor: "white", width: "60px", height: "36px", borderRadius: "24px" }}>Login</button>
            </div>
        </div>
    </div>
}

function Banner() {
    return <div style={{ backgroundColor: "#019370", width: "100vw", height: "40px", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>Aloo Lelo Bhindi Lelo 10 Rupee Kilo</div>
}