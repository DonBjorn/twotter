<template>
    <div class="twoot-item" @click="favouriteTwoot(twoot.id)">
        {{ twoot.content }}
    </div>

</template>

<script>
    export default {
        name: "TwootItem",
        props: {
            twoot: {
                type: Object,
                required: true,
            }
        },
        methods: {
            favouriteTwoot(id){
                this.$emit('favourite', id);
            }
        }
    }
</script>

<style scoped>
    .twoot-item {
        padding: 10px;
        cursor: pointer;
        transition: all 0.25s ease;
    }

    .twoot-item:hover {
        transform: scale(1.1, 1.1);
    }
</style>