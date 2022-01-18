

export default function changeLanguage (data){

    return{
        type:"SET_LANGUAGE",
        payload:data,
    };
}


export function changeLoader(data) {
    return{
        type: "SET_LOADER",
        payload:data,
    }
}