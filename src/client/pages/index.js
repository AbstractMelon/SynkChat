import React from "react";
import Link from "next/link";

const Home = () => {
    return (
        <div className="landing-container">
            <header className="landing-header">
                <h1 className="landing-logo">ENXT</h1>
                <nav className="landing-nav">
                    <Link href="/login"><p className="landing-nav-link">Login</p></Link>
                    <Link href="/register"><p className="landing-nav-link">Register</p></Link>
                    <Link href="/chat"><p className="landing-nav-link">Chat</p></Link>
                </nav>
            </header>
            <main className="landing-hero">
                <h2 className="landing-hero-title">Welcome to ENXT!</h2>
                <p className="landing-hero-subtitle">I was bored and now this exsists!</p>
                <div className="landing-button-container">
                    <Link href="/login"><p className="landing-button">Login</p></Link>
                    <Link href="/register"><p className="landing-button">Register</p></Link>
                </div>
            </main>
            {/*
            <footer className="landing-footer">
                &copy; 2024 ENXT. All rights reserved.
            </footer>
            */}
        </div>
    );
};

export default Home;
