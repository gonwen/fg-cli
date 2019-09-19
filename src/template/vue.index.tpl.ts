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
    head () {
        return {
            title: '首页-${param.name}',
            meta: [
                {hid: 'description', name: 'description', content: '首页-${param.decs}'}
            ]
        }
    }
}
</script>

<style scoped lang="scss"></style>
`
