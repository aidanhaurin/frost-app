export const setBackground = (code: number, isDay: boolean) => {
    let src = "";
    
    switch (code) {
            case 0:
            case 1:
                src = isDay ? "clear-sky-day.avif" : "clear-sky-night.avif";
                break;

            default:
                src = isDay ? "cloudy-sky-day.avif" : "cloudy-sky-night.avif";
                break;
    }//switch

    // Scroll back to top of page
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For everything else

    try {
        document.body.style.backgroundImage = `url(./src/assets/backgrounds/${src})`;
    } catch(err) {
        console.log("Image file not found: ", err);
    }//try-catch
}//const