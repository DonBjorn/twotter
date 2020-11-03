<template>
    <h1>@{{ state.user.username}}</h1>
    <h2>{{ userId }}</h2>
    <div v-if="state.user.isAdmin">
        <i style="color: red">Admin</i>
        <br>
    </div>
    <TwootItem v-for="twoot in state.user.twoots" :key="twoot.id" :twoot="twoot"
    ></TwootItem>
    <CreateTwootPanel></CreateTwootPanel>
</template>

<script>
    import {reactive, computed} from 'vue'; // Composition API
    import {useRoute} from 'vue-router'; // Objeto ruta para referenciar
    import { users } from "../assets/users";
    import TwootItem from "../components/TwootItem";
    import CreateTwootPanel from "../components/CreateTwootPanel";

    export default {
        name: 'UserProfile',
        components: {TwootItem, CreateTwootPanel},
        setup(props, context) {
            const route = useRoute();
            const userId = computed(() => route.params.userId);

            // Busca el usuario en la lista.
            const state = reactive({ // Data
                followers: 0,
                user: users[userId.value - 1] || users[1]
            });

            const newTwootCharactedCount = computed(() => state.newTwootContent.length); // Computed

            function createNewTwoot() { // Methods
                if (state.newTwootContent && state.selectedTwootType !== 'draft') {
                    context.emit('add-twoot', state.newTwootContent);
                    state.newTwootContent = '';
                }
            }

            return {
                state,
                newTwootCharactedCount,
                createNewTwoot,
                userId
            };
        },
    }
</script>

<style lang="scss" scoped>
    .user-profile__create-twoot {
        display: flex;
        border: 1px solid black;
        padding-top: 20px;
        flex-direction: column;
    }
</style>