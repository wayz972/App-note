import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = {
    selectednote: {
        title: "",
        subtitle: "",
        body: "",
        id: "",
        toggle: false
    }
}

export default function selectedReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "VISUALISERNOTE":
            return {
                //je faisune copie de l'objet et je toggle a true
                selectednote: { ...action.payload, toggle: true }
            }
        case "RESETNOTE":
            return {
                selectednote: {
                    title: "",
                    subtitle: "",
                    body: "",
                    id: "",
                    toggle: false
                }

            }

    }
    return state;
}