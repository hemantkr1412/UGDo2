"use client";
const { useState } = require("react");
import Image from "next/image";
import data from "@/data/data";
import Link from "next/link";
const Accordian = ({ heading, text, index,setToggle,isToggled }) => {
	const [isActive, setIsActive] = useState(false);

	const universityinfo = [
		{
			name: "Quienes somos",
			href: "/aboutus",
		},
		{
			name:"Autoridades",
			href: "/authorities",
		},
		{
			name:"Modelo Virtual UGD",
			href: "/ugdvirtualModel",
		},
		{
			name:"Equivalencies",
			href: "/equivalencies",
		}
	]

	const academicCommunity = [
		{
			name:"Nuestros destinatarios",
			href: "/student",
		},
		{
			name:"Nuestros Docentes",
			href: "/teacher",
		},
		{
			name:"Amplia red de vínculos internacionales",
			href: "/partnership",
		},
		{
			name:"Becas y Beneficios",
			href: "/scholarshipsAndbenefits",
		},
		{
			name:"Beca Latina",
			href: "/miami",
		}
	]


	return (
		<div key={index}>
			<div
				onClick={() => setIsActive((prev) => !prev)}
				style={{
					padding: "1.5rem 2rem",
					borderBottom: "0.2px solid #e8e8e8",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					cursor: "pointer",
				}}>
				{heading}
				<span
					style={{
						transform: isActive ? "rotate(180deg)" : "none",
						transition: "all 0.3s",
					}}>
					{text[0]!== "" && "▼"}
				</span>
			</div>
			{/* <div
				style={{
					padding: isActive ? "1.5rem 2rem" : "0em 2rem",
					backgroundColor: "var(--primary-90)",
					maxHeight: isActive ? "15em" : "0em",
					fontSize: "0.875rem",
					lineHeight: "2",
					overflow: "hidden",
					transition: "all 0.3s",
				}}> */}
				<div className={isActive ? "customDiv" : ""}>
				{ text == "Courses" &&
				// text.map((link)=>{
                //     return(
                //         <div
                //         style={{
                //             padding: isActive ? "1.5rem 2rem" : "0em 2rem",
                //             backgroundColor: "#e8e8e8",
                //             maxHeight: isActive ? "15em" : "0em",
                //             fontSize: "0.875rem",
                //             lineHeight: "2",
                //             overflow: "hidden",
                //             transition: "all 0.3s",
                //         }}>
                //         {link}
                //         </div>
                //     )
                // }):
					data.map((course)=>{
						return(
						<div
                        style={{
                            padding: isActive ? "1.5rem 2rem" : "0em 2rem",
                            backgroundColor: "#e8e8e8",
                            maxHeight: isActive ? "15em" : "0em",
                            fontSize: "0.875rem",
                            lineHeight: "2",
                            overflow: "hidden",
                            transition: "all 0.3s"
                        }}
						// onClick={()=>{
						// 	setToggle(!isToggled)
						// 	console.log(isToggled,"toglrfom ###### togllleee")
						// }}
						>
                        	<Link onClick={()=>{
							setToggle(!isToggled)
						
						}} href={`/courses/${course.path}`}> {course.course}</Link>
                        </div>
						)
					})
				}
				{
					text == "University Info" &&
					universityinfo.map((link)=>{
						return(
							<div
							style={{
								padding: isActive ? "1.5rem 2rem" : "0em 2rem",
								backgroundColor: "#e8e8e8",
								maxHeight: isActive ? "15em" : "0em",
								fontSize: "0.875rem",
								lineHeight: "2",
								overflow: "hidden",
								transition: "all 0.3s",
							}}>
							<Link onClick={()=>{
							setToggle(!isToggled)
						
						}} href={link.href}>{link.name}</Link>
							</div>
						)
					})
				}
				{
					text == "Academic Community" &&
					academicCommunity.map((link)=>{
						return(
							<div
							style={{
								padding: isActive ? "1.5rem 2rem" : "0em 2rem",
								backgroundColor: "#e8e8e8",
								maxHeight: isActive ? "15em" : "0em",
								fontSize: "0.875rem",
								lineHeight: "2",
								overflow: "hidden",
								transition: "all 0.3s",
							}}>
							<Link onClick={()=>{
							setToggle(!isToggled)
						
						}} href={link.href}>{link.name}</Link>
							</div>
						)
					})
				}
				{
					text !== "Courses" && text !== "University Info" && text !== "Academic Community" &&
					text.map((link)=>{
						return(
							<div
							style={{
								padding: isActive ? "1.5rem 2rem" : "0em 2rem",
								backgroundColor: "#e8e8e8",
								maxHeight: isActive ? "15em" : "0em",
								fontSize: "0.875rem",
								lineHeight: "2",
								overflow: "hidden",
								transition: "all 0.3s",
							}}>
							{link}
							</div>
						)
					})
				}
				</div>
			{/* </div> */}
		</div>
	);
};
export default Accordian;
