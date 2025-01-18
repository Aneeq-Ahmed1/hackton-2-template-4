// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;







/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.sanity.io'],
    },
  };
  
  export default nextConfig;






// import path from 'path';

// // Get the directory name from the current module's URL
// const __dirname = path.dirname(new URL(import.meta.url).pathname);

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cdn.sanity.io',
//       },
//     ],
//   },
//   webpack(config) {
//     config.resolve.alias['@'] = path.join(__dirname, 'src'); // Resolve '@' to 'src'
//     return config;
//   },
// };

// export default nextConfig;
