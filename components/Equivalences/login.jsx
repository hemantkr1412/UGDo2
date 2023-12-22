"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter();
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleSubmit = async () => {

        if (userId !== "" && userPassword !== "") {
            const response = await fetch("http://127.0.0.1:8000/api/V1/user/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: userId,
                    password: userPassword
                })
            })
            const responseData = await response.json()
            if (
                responseData["detail"] &&
                responseData["detail"] ===
                "No active account found with the given credentials"
            ) {
                return { error: "Invalid credentials." };
            } else {
                console.log(responseData)
                localStorage.setItem("jwtToken", responseData.access);
                localStorage.setItem("jwtRefresh", responseData.refresh);
                const currentTime = new Date().getTime();
                localStorage.setItem("lastRefresh", currentTime.toString());
                router.push("/equivalences/form");
            }
        } else {
            console.log("Please enter User Id and Password")
        }
    }

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#DEE4EA",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{
                marginTop: "-10rem",
                width: "100%",
                maxWidth: "600px",
                height: "auto",
                backgroundColor: "white",
                boxShadow: " 0 8px 8px 0 rgba(0,0,0,0.2)",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                position: "relative",
                color: "white",
                marginBottom: "4rem"

            }}>
                <p style={{
                    marginTop: "-4rem",
                    textAlign: "center",
                    fontSize: "3rem",
                    fontWeight: "500",
                    color: "black"
                }}>Log In</p>

                <input type="text" placeholder="User ID" style={{
                    width: "100%",
                    height: "50px",
                    padding: "10px",
                    border: "1px solid grey",
                    borderRadius: "5px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    color: "#1C3564",
                }}
                    onChange={(e) => {
                        setUserId(e.target.value)
                    }}
                />

                <input type="text" placeholder="Password" style={{
                    width: "100%",
                    height: "50px",
                    padding: "10px",
                    border: "1px solid grey",
                    borderRadius: "5px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    color: "#1C3564",
                }}
                    onChange={(e) => setUserPassword(e.target.value)}
                />

                <button style={{
                    alignItems: "center",
                    width: "100%",
                    height: "50px",
                    padding: "10px",
                    border: "1px solid grey",
                    borderRadius: "5px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    color: "black",
                }}
                    onClick={handleSubmit}
                >Login</button>

                <span style={{
                    marginTop: '1.5rem',
                    display: 'flex',
                    justifyContent:'center',
                    gap: '10px'
                }}>
                    <span style={{ color: 'black' }}>Don't have an accout</span>
                    <button
                        style={{ color: 'var(--blue)', fontWeight: '600' }}
                        onClick={() => router.push(`/register`)}
                    >
                        Register</button>
                </span>
            </div>
        </div >
    )
}

export default Login;