export const LOGO_URL = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const BG_IMG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"
export const USER_AVATAR = "https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABQlUEo3_xfqdLGOyo9Bt7E99ewnbAax5vqhPOZqhUe7ni3QZCkEte7syC-3PeGcVbKdj-ZqcURJAR6KatfoDs4OCqeAK2jY.png?r=822"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_PROCESS_TMD_API_OPTION}`
    }
};

export const OPEN_AI_KEY = process.env.REACT_APP_OPENAI_KEY
export const IMG_CON_URL = "https://image.tmdb.org/t/p/w500"


export const SUPPORTED_LANGUAGE = [
    {
        identifier: "english", name: "English"

    },
    {
        identifier: "hindi", name: "Hindi"

    },
    {
        identifier: "marathi", name: "Marathi"

    },
    {
        identifier: "spanish", name: "spanish"

    }
]