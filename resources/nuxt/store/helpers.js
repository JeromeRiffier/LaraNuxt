import { make } from 'vuex-pathify'

const state = () => {
    return {}
}

const getters = {
    ...make.getters(state),

}

const actions = {
    ...make.actions(state),
    logout() {
        this.$auth.logout()
    }
}

const mutations = {
    ...make.mutations(state)
}

export default {
    state,
    mutations,
    actions,
    getters
}
