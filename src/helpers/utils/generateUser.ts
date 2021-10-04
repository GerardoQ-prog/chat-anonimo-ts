
export const generateName = () => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let name= '';
    const charactersLength = characters.length;
    for ( let i = 0; i < 5; i++ ) {
        name += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return name
}

export const generateID = () => {
    const numberID = Math.floor(Math.random() * (9999 - 1111) + 1111)
    return numberID
}