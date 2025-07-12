// Wedding Configuration
const weddingConfig = {
    // Couple Information
    coupleNames: "Sachin & Anna",
    weddingDate: "December 23rd, 2025",
    venueName: "Alpha Horizon",
    venueLocation: "Vallarpadam, Kochi",
    
    // Event Details
    events: [
        {
            title: "Wedding Ceremony",
            time: "4:30 PM",
            description: "Join us as we exchange vows and begin our journey together as husband and wife in an intimate ceremony surrounded by our loved ones.",
            imageClass: "ceremony-image"
        },
        {
            title: "Reception",
            time: "6:30 PM",
            description: "Celebrate with us as we dance the night away! Join us for dinner, drinks, and dancing as we party into the evening.",
            imageClass: "reception-image"
        }
    ],
    
    // Venue Information
    venue: {
        name: "Alpha Horizon",
        description: "A breathtaking venue nestled in the heart of Kochi, where elegance meets natural beauty. This stunning location will provide the perfect backdrop for our celebration of love.",
        address: {
            venue: "Alpha Horizon",
            location: "Vallarpadam, Kochi",
            state: "Kerala, India"
        },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.3565409401936!2d76.2531678!3d9.987378399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812b947484953%3A0x765d0c12126e5ea9!2sAlfa%20Horizon!5e0!3m2!1sen!2sus!4v1752298702583!5m2!1sen!2sus"
    },
    
    // RSVP Configuration
    rsvp: {
        googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeoyKEbsOuw3uQsoRygp9T3BCHex57AZ4aIFJNqDSA8BCu3WQ/viewform?embedded=true",
        title: "We Hope You'll Join Us",
        subtitle: "Your presence would make our day even more special"
    },
    
    // Images
    images: {
        hero: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
        venue: "images/alpha-horizon1.jpeg",
        ceremony: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070&auto=format&fit=crop",
        reception: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
    }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = weddingConfig;
} 