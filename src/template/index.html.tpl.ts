export default (param) =>
`<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>${param.name || 'VUE TEMPLATE'}</title>
    <meta name="description" content="${param.desc || 'THIS IS VUE TEMPLATE PROJECT'}"/>
    <meta name="keywords" content="${param.name || ''}"/>
</head>
<body>
    <div id="app"></div>
</body>
</html>
`
