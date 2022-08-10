import { make } from 'vuex-pathify'

const state = () => {
    return {
        username: '',
        password: ''
    }
}

const getters = {
    ...make.getters(state)
}

const actions = {
    ...make.actions(state),
    login({ state, dispatch }) {
        this.$auth
            .loginWith('passport', {
                data: {
                    username: state.username,
                    password: state.password
                }
            })
            .then(() => {
                dispatch('setPassword', '')
                console.log('logged')
            })
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
