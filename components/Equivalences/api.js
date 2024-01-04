import API from '../scripts/apicall';
// import { crud } from '../scripts/apicall';

const myApi = () => {
    const api = API();

    // console.log(api)

    async function fetchAllUniversities() {
        console.log(`fetchAllUniversities runs`);
        try {
            const res = await api.crud("GET", '/equivalences/universities');
            console.log(res.json())
            return res.json();
        } catch (err) {
            console.error(err);
        }
    };

    async function fetchMappingDetails() {
        console.log(`fetchMappingDetails runs`);
        try {
            const res = await api.crud("GET", '/equivalences/equivalence-data');
            return res.data;
        } catch (err) {
            console.error(err);
        }
    };

    return {
        fetchAllUniversities,
        fetchMappingDetails
    }
}

export default myApi;

