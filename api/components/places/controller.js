const SearchPlacesService = require('./service');
const DEFAULT_TYPE = 'restaurant';


async function searchPlaces(city, type) {
    if(!city) {
        return Promise.reject('Invalid Data');
    }

    const searchtype = type || DEFAULT_TYPE;
    const service = new SearchPlacesService();
    await service.nearBySearch(city, searchtype)
        .then(data => {
            Promise.resolve(data);
        })
        .catch(err => {
            Promise.reject(err);
        });
}

module.exports = {
    searchPlaces,
}