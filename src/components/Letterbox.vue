<template>
    <div class="vc-letterbox">
        <div v-if="loaded" class="flex space-x-2 letters">
            <div v-for="(item,index) in letters" :class="{'w-8 text-center uppercase bg-white': true, invisible: !show[item]}" :key="index" >
                {{ item}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loaded: true
        }
    },
    computed: {
        letters: function(){
            return this.$store.state.hangman.result.split('');
        },
        show: function(){
            return this.$store.state.hangman.letters;
        }
    }

}
</script>
<style lang="less">
.letters{
    .letter{

    }
}    
</style>