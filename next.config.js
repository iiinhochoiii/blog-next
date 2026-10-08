/** @type {import('next').NextConfig} */
module.exports = {
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      fileName: true,
      pure: true,
    },
  },
};
