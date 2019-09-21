const nuxtHeaderInfo = (param) => {
    let str = ``
    if (param.ptype === 'nuxt') {
        str =
            `head () {
                return {
                    title: '首页-${param.name}',
                    meta: [
                        {hid: 'description', name: 'description', content: '首页-${param.decs}'}
                    ]
                }
            }
            `
    }
    return str
}
export default (param) =>
`<!-- 首页 -->
<template>
    <div>
        <b>welcome  ${param.author || ''}</b>
        <br>
        this is a new project for ${param.ptype}
    </div>
</template>

<script>
export default {
    nuxtHeaderInfo(param)
}
</script>

<style scoped lang="scss"></style>
`
