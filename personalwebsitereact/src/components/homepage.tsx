import React from 'react';
import Header from './Header';
import Footer from './Footer1';

const Homepage = () => {
    return (
        <div>
            <Header />
            <main>
                <section className="hero">
                    <h1>Welcome to My Personal Website</h1>
                    <p>This is the hero section where you can introduce yourself or your website.</p>
                </section>
                {/* Add more sections as needed */}
            </main>
            <Footer />
        </div>
    );
};

export default Homepage;
