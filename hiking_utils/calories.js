export function caloriesBurned(weightInKg, distanceInKm){
    if ((typeof weightInKg === "number") && (typeof distanceInKm === "number")){
        if ((weightInKg > 0) && (distanceInKm > 0)){
            const calories = weightInKg * distanceInKm * 1.036;
            return calories;
        } else {
            throw new Error("the number is not bigger then zero")
        }
    } else {
        throw new Error("the type is not number")
    }
}