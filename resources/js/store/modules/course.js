import axios from 'axios'

const state = {
    courses: [],
}
const getters = {}
const actions = {
    async addCourse({commit}, payload) {
        try {
            const response = await axios.post(

            )
        } catch (error) {

        }
    }
}
const mutations = {}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}



