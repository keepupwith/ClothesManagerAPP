<template>
    <div id="nav-bar-top">
        <div id="title" v-text="title" />
        <div @click="rightButtonClicked" id="right-button">按钮</div>
    </div>
</template>

<script>
export default {
    name: "NavBarTop",
    props: ["rightButtonClickHandle", "title"],
    data() {
        return {};
    },
    methods: {
        rightButtonClicked(...args) {
            this.rightButtonClickHandle(...args);
        },
    },
};
</script>

<style lang="scss" scoped>
#nav-bar-top {
    position: fixed;
    width: 100vw;
    height: 6vh;
    text-align: center;
    line-height: 6vh;
    box-shadow: 0 0 10px 1px rgb(207, 207, 207);
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
    backdrop-filter: blur(35px);
    #title {
        display: inline-block;
        font-size: large;
    }
    #right-button {
        display: inline-block;
        position: absolute;
        right: 2vh;
        color: rgb(11, 135, 236);
    }
}
</style>