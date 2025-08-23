import type Suggestion from "../interfaces/InterfaceSuggestion";

export const openMeteosGeolocate = (): Promise<Suggestion | null> => {
    return new Promise((resolve) => {
        // Geolocation is denied/disabled
        if(!navigator.geolocation){
            alert("This browser does not support geolocation.");
            resolve(null);
            return;
        }//if

        // Get coordinates
        navigator.geolocation.getCurrentPosition(
            async(position) => {
                try{
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;

                    // Get city name from coords using Nominatim API
                    const geoURL = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
                    const geoRes = await fetch(geoURL);
                    const geoData = await geoRes.json();

                    // Empty/missing array, end search here
                    if (geoData === '{}' || Object.keys(geoData).length === 0) {
                        alert("Locational data could not be obtained.");
                        resolve(null);
                        return;
                    }//if

                    // Return object literal of location + name
                    const place: Suggestion = {
                        latitude: lat,
                        longitude: lon,
                        name: geoData.address.city,
                        admin1: geoData.address.state,
                        country: geoData.address.country,
                    }//const

                    resolve(place);
                }catch(error){
                    console.error("Error during geolocation reverse lookup:", error);
                    alert("Could not retrieve your location.");
                    resolve(null);
                }//try-catch
            }//async func
        );//async func
    })
};//const func