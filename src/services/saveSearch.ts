import type Suggestion from "../interfaces/InterfaceSuggestion";

//save a place to localStorage
export const saveSearch = (place: Suggestion, prevState: Suggestion[]) => {
    const updatedSearches = [place].concat(prevState.filter((p) => p.name !== place.name)).slice(0,5);
    localStorage.setItem('pastSearches', JSON.stringify(updatedSearches));
    return updatedSearches;
}//const