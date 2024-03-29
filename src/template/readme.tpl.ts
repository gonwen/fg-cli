export default (param) =>
`# ${param.name || 'gw-nuxt-template'}

> ${param.desc || 'TEMPLATE FOR GW'}

## Build Setup

\`\`\` bash
# install dependencies
npm install

# serve with hot reload at localhost:${param.port || (param.ptype === 'nuxt' ? 3080 : 8090)}
npm run dev

# build for production with minification
npm run build

# build for test with minification
npm run testbuild

\`\`\`
`
