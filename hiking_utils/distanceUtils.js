export function kmToMeters(numberKm){
    if (numberKm > 0){
        return numberKm * 1000;
    } else {
        throw new Error("dg")
    }
};