"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; 
import { usePathname, useSearchParams } from 'next/navigation'
import "./navbar.css"
// import Accordian from "./accordian";
const navigation = [
  { name: 'Hogar', href: '/', current: true },
  { name: 'Verify', href: '#', current: false },
]

export default function Navbar() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  console.log(pathname)
  const [isScroll,setIsScroll] = useState(false);
  const [isToggled, setToggle] = useState(true);
  // useEffect(() => {
  //   const scrolling = () => {
  //     window.scrollY >= 2 ? setIsScroll(true) : setIsScroll(false);
  //   };

  //   window.addEventListener("scroll", scrolling);
  //   const getDocument = document.querySelector("#menu");
  //   if(isToggled){
  //     getDocument.style.display = "none";
  //   }else{
  //     getDocument.style.display = "flex";
  //   }

  //   return () => {
  //     window.removeEventListener("scroll", scrolling);
  //   };
  // }, [pathname,isToggled]);


  // const { y } = useSpring({
  //   y: isToggled ? 180 : 0
  // });

  // const menuAppear = useSpring({
  //   transform: isToggled ? "translate3D(0,0,0)" : "translate3D(0,-40px,0)",
  //   opacity: isToggled ? 1 : 0
  // });
  


  const linkStyle ={
    display:"flex",
    color:pathname !== "/" ? "#1C3564":(isScroll ? "#1C3564" : "white"),
    fontSize:"1rem",
    fontFamily:"Open Sans",
    fontWeight:"400",
    fontStyle:"normal",
    backgroundColor:"transparent",
    padding:"0px"
  }


  //Mobile version
  const handleClickMenu = () =>{
    setToggle(!isToggled);
    // const getDocument = document.querySelector("#menu");
    // if(isToggled){
    //   getDocument.style.display = "none";
    // }else{
    //   getDocument.style.display = "flex";
    // }
  }


  return (
   <>
   <div 
    className="navbar1"
    style={{
    // position: "fixed",
    // top: 0,
    // zIndex: 100,
    backgroundColor: pathname !== "/" ? "white" :(isScroll ? "white" : "rgba(0, 0, 0, 0.5)"),
    // color:"--primary-color",
    // width: "100vw",
    // height: "70px",
    // display: "flex",
    // justifyContent:"space-between",
    // padding:"1rem 2rem",
    // boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
   }} >

    <div >
      <Image src="/UGDLOGOCL.svg" height={200} width={200} alt="UGD"/>
    </div>


   <div style={{
    display:"flex",
    gap:"5rem",
   }}>
    <div style={{
      display:"flex",
      justifyContent:"space-between",
      gap:"5rem",
      alignItems:"center",
      color:"--primary-color",
      position: "relative"
    }}>
       
          <Link style={linkStyle} href={"/"} > Home </Link>
        


        <div className="navbutton" >
          <div className="dropdown1">
            <button className="dropbtn1" style={{
          color: pathname !== "/" ? "#1C3564":(isScroll ? "#1C3564" : "white")
        }}>información universitaria ▼</button>
              <div className="dropdown-content1">
                <div className="column" style={{
                  width:"100%",
                  height:"auto"
                }}>
                  <Link href={"/aboutus"}>Quienes somos</Link>
                  <Link href={"/authorities"}>Autoridades</Link>
                  <Link href={"/ugdvirtualModel"}>Modelo Virtual UGD </Link>
                  <Link href={"/equivalences/form"}>Equivalencies</Link>
                </div>
              </div>
          </div>
        </div>

        <div className="navbutton" >
          <div className="dropdown1">
            <button className="dropbtn1" style={{
              color:pathname !== "/" ? "#1C3564":(isScroll ? "#1C3564" : "white")
            }}>Comunidad académica ▼</button>
              <div className="dropdown-content1">
                <div className="column" style={{
                  width:"100%",
                  height:"auto",
                  minWidth: "180px",
                }}>
                  <Link href={"/student"}>Nuestros destinatarios</Link>
                  <Link href={"/teacher"}>Nuestros Docentes</Link>
                  <Link href={"/partnership"}>Amplia red de vínculos internacionales</Link>
                  <Link href={'/scholarshipsAndbenefits'}>Becas y Beneficios</Link>
                  <Link href={'/miami'}>Beca Latina</Link>
                </div>
              </div>
          </div>
        </div>



        <div className="dropdown"style={{
          padding:"0px",
          backgroundColor:"transparent",
        }}>
        <button class="dropbtn" style={{
          padding:"0px",
          backgroundColor:"transparent",
          color:pathname !== "/" ? "#1C3564":(isScroll ? "#1C3564" : "white")
        }}>Carreras ▼
        </button>
        <div class="dropdown-content">
          <div className="row">
            <div className="column">
              {/* <h3>Computing</h3> */}
              <Link href={`/courses/software`}>Tecnicatura en Desarrollo de Software</Link>
              <Link href={`/courses/java`}>Programador Java Full Stack</Link>
              <Link href={`/courses/recursos`}>Gestion de Recursos Tecnológicos</Link>
            </div>
            <div className="column">
              {/* <h3>Miami</h3> */}
              <Link href={"/courses/maestria"}>Maestría </Link>
              <Link href={"/courses/educativa"}>Licenciatura en Gestión Educativa</Link>
              <Link href={"/courses/marketing"}>Lic en Marketing</Link>
              <Link href={"/courses/administracion"}>Lic en Administración</Link>
              <Link href={"/courses/tecnologias"}>Especialización en gestión de TICs</Link>
            </div>
            <div className="column">
              <Link href={"/courses/doctorado"}>Doctorado</Link>
              <Link href={"/courses/profesionales"}>Ciclo de Profesorado Universitario</Link>
            </div>
          </div>
        </div>
      </div> 
      <Link style={linkStyle} href={"/verify"} > Verificar </Link>
        
    </div>
    
    



    {/* <div style={{
            display:"flex",
            justifyContent:"space-between",
            gap:"5rem",
            alignItems:"center",
            color:"--primary-color",
    }}>

      <div className="dropdown">
        <button class="dropbtn" >Courses ▼</button>
        <div class="dropdown-content">
          <div className="row">
              <div className="column">
                <h3>Argentina</h3>
                <Link href={"/courses"}>Computing (courses, diploma, degree)</Link>
                <a href="#">Business Management</a>
                <a href="#">Marketing</a>
                <a href="#">University Teaching Cycle</a>
                <a href="#">Degree Cycle in Educational Institutions Management</a>
              </div>
              <div className="column">
                <h3>Miami</h3>
                <a href="#">Computing (courses, diploma, degree)</a>
                <a href="#">Business Management</a>
                <a href="#">Marketing</a>
                <a href="#">University Teaching Cycle</a>
                <a href="#">Degree Cycle in Educational Institutions Management</a>
              </div>
              <div className="column">
                <h3>Category 3</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
          </div>
        </div>
      </div> 
    </div> */}
    </div>

   </div>


    {/* <div className="navmanu" style={{
      position: "fixed",
      top: 0,
      zIndex: 100,
      backgroundColor:  "white",
      width: "100vw",
      height: "70px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      color:"#6B6C6C"
    }}>
      <div style={{
        width:"100%",
        display:"flex",
        height:"100%",
        justifyContent:"space-between",
      }}>
          <div style={{
            padding:"1rem 0.4rem",
            width:"100%",
            height:"100%",
            display:"flex",
            justifyContent:"space-between",
          }}>
          <Image  src="/UGDLOGOCL.svg" height={150} width={150} alt="UGD"/>
          
          {!isToggled ?   <Image className="maunuicon" src="/close.svg" height={120} width={70} alt="UGD" onClick={handleClickMenu}/>
          :
          <Image  src="/hamburger.svg" height={120} width={70} alt="UGD" onClick={handleClickMenu}/>
          }
   
          </div>
        <div 
          id="menu"
          style={{
            marginTop:"4rem",
            width:"100%",
            position: "absolute",
            backgroundColor:"white",
            color:"#6B6C6C",
            display:"none",
            flexDirection:"column",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
          }}>
              <Link href={"/"} style={{
                	padding: "1.5rem 2rem",
                  borderBottom: "2px solid  var(--primary-90)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
              }}
              onClick={()=>{
                setToggle(!isToggled)
              }} 
              >Home</Link>
              <Accordian 
              heading={"información universitaria"}
              text={"University Info"}
              index={"1"}
              key={1}
              setToggle={setToggle}
              isToggled={isToggled}
              />
              <Accordian 
              heading={"Comunidad académica"}
              text={"Academic Community"}
              index={"1"}
              key={1}
              setToggle={setToggle}
              isToggled={isToggled}
              />
              <Accordian 
              heading={"Carreras"}
              text={"Courses"}
              index={"1"}
              setToggle={setToggle}
              isToggled={isToggled}
              key={1}
              />
              <Link href={"/verify"} style={{
                	padding: "1.5rem 2rem",
                  borderBottom: "2px solid  var(--primary-90)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
              }}
              onClick={()=>{
                setToggle(!isToggled)
              }} 
              >Verificar</Link>
          </div>
      
      </div>

    </div> */}


   </>
  )
}







