
const initial = {
    lang: "en",
    loader:true,
};

export default function languageReducer (state = initial,action) {

    switch(action.type){
        case "SET_LANGUAGE":
            return{
                ...state,
                lang: action.payload,
            };

        case "SET_LOADER":
            return{
                ...state,
                loader: action.payload,
            }

            
        default:
            return state;
    }
}


