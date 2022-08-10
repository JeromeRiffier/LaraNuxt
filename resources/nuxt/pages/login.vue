<template>
    <v-card class="ma-auto" width="500">
        <v-card-title>
            <h1>Login</h1>
        </v-card-title>
        <form @submit.prevent="login">
            <v-card-text>
                <v-text-field
                    v-model="username"
                    solo
                    label="Identifiant"
                    prepend-inner-icon="mdi-account"
                    hide-details="auto"
                    class="mb-4"
                />
                <v-text-field
                    v-model="password"
                    solo
                    label="Mot de passe"
                    prepend-inner-icon="mdi-lock"
                    type="password"
                    hide-details="auto"
                    class="my-4"
                />
            </v-card-text>
            <v-card-actions class="pt-0 px-4">
                <v-row>
                    <v-col cols="6">
                        <v-btn
                            text
                            color="primary"
                            class="text-none font-weight-medium mr-2"
                            href="/admin/password/reset"
                        >
                            Mot de passe oublié ?
                        </v-btn>
                    </v-col>
                    <v-col cols="6">
                        <v-btn
                            color="primary"
                            type="submit"
                            block
                        >
                            Connexion
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-actions>

        </form>
    </v-card>
</template>

<script>
import { call, sync } from 'vuex-pathify'
export default {
    auth: 'guest',
    layout: 'empty',
    middleware: ['auth'],
    computed: {
        ...sync('pages/login/', ['username', 'password'])
    },
    methods: {
        ...call('pages/login/', ['login'])
    }
}
</script>

<style scoped>

</style>
