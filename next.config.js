/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [{
            source: '/mintme',
            destination: '/html/mintme.html',
        }, ]
    }
}

module.exports = nextConfig