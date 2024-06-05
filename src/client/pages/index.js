import React from "react";
import Link from "next/link";

const Home = () => {
    return (
        <div>
            <h1>Welcome to Discord Clone</h1>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
        </div>
    );
};

export default Home;
