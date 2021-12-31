<template>
    <div class="vc-hangman">
        Errors: {{errors}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
        errors: function(){
            return this.$store.state.hangman.errors;
        }
    }
}
</script>