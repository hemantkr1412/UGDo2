const Navbar = () => {

    return(
        <div style={{
            display:"flex",
            backgroundColor:"white",
            width:"100%",
            height:"70px",
            alignItems:"center",
            justifyContent:"center",
        }}>
            <div style={{
                display:"flex",
                width:"60%",
                justifyContent:"space-between",
            }}>
            <div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                marginLeft:"50px"
            }}>
                {/* <img src="https://www.ugdo.ng/wp-content/uploads/2020/04/ugdo-logo-1.png" alt="logo" style={{
                    width:"50px",
                    height:"50px",
                    marginRight:"10px"
                }}/> */}
                <p style={{
                    fontWeight:"500",
                    fontSize:"1.5rem"
                }}>UGDO</p>
            </div>
            <div style={{
                width:"50%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                marginRight:"50px",
                justifyContent:"space-between",
                color:"black"
            }}>
                <p style={{
                    // fontWeight:"500",
                    // fontSize:"1.2rem",
                    // marginRight:"20px"
                }}>Home</p>
                <p style={{
                    // fontWeight:"500",
                    // fontSize:"1.2rem",
                    // marginRight:"20px"
                }}>Courses</p>
                <p style={{
                    // fontWeight:"500",
                    // fontSize:"1.2rem",
                    // marginRight:"20px"
                }}>About</p>
                <p style={{
                    // fontWeight:"500",
                    // fontSize:"1.2rem",
                    // marginRight:"20px"
                }}>Contact</p>
                {/* <button style={{
                    width:"100px",
                    height:"50px",
                    backgroundColor:"#1C3564",
                    color:"white",
                    border:"none",
                    borderRadius:"5px",
                    fontWeight:"500",
                    fontSize:"1.2rem"
                }}>Login</button> */}
            </div>
            </div>


        </div>
    )

}

export default Navbar;