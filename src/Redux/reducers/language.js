import words from "../../words.json"

export const selectLanguage = (state = words.POLAND, action) => {
    switch (action.type) {
        case 'POLAND':
            return state = words.POLAND
        case 'ENGLISH':
            return state = words.ENGLISH
        default:
            return state
    }
}