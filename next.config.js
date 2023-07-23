/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.unsplash.com","plus.unsplash.com"],
        remotePatterns: [
            { hostname: "images.unsplash.com"},
            { hostname: "lh3.googleusercontent.com"},
        ],
    },
    experimental:{
        serverActions:true
    }
}

module.exports = nextConfig
