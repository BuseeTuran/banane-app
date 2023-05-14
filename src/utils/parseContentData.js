export default function(data) {
    return Object.keys(data).map(key => {   //Keyleri array formatında döner..
        return {
            id: key,
            ...data[key],
        }
    })   
    .sort(function (a, b) {
        return a.date > b.date ? -1 : a.date > b.date ? 1 : 0 ;
    })             
}