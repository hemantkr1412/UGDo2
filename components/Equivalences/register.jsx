"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const Register = () => {
    const router = useRouter();
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleSubmit = () => {
        if (userId !== "" && userPassword !== "") {
            const response = fetch("http://127.0.0.1:8000/api/V1/user/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: userId,
                    password: userPassword
                })
            })
                .then(res => {
                    res.json()
                    console.log(res)
                }
                )
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
                }}>Register</p>

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

                <input type="password" placeholder="Password" style={{
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
                        setUserPassword(e.target.value)
                    }
                    }
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
                >Register</button>

                <span style={{
                    marginTop: '1.5rem',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px'
                }}>
                    <span style={{ color: 'black' }}>Don't have an accout</span>
                    <button
                        style={{ color: 'var(--blue)', fontWeight: '600' }}
                        onClick={() => router.push(`/login`)}
                    >
                        Login</button>
                </span>
            </div>
        </div>
    )
}

export default Register;