const TournApiUrl = "https://60fe0c171fa9e90017c70fd5.mockapi.io/tournament";

class TournApi {
    getTournaments = async () => {
        try{
            const resp = await fetch(TournApiUrl);
            const json = await resp.json();
            return json;
        } catch (e) {
            console.log('Error fetching tournaments: ', e);
        }
    }

    getTournament = async (tournId) => {
        try {
            const resp = await fetch(`${TournApiUrl}/${tournId}`);
            const json = await resp.json();
            return json;
        } catch (e) {
            console.log(`Error fetching tournament with id ${tournId}: `, e);
        }
    }

    putTournament = async (tourn) => {
        try {
            const resp = await fetch(`${TournApiUrl}/${tourn._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tourn)
            });
            
            return await resp.json();

        } catch(e) {
            console.log(`Error updating tournament with id ${tourn._id}`, e);
        }
    }

    postTournament = async (tourn) => {
        try {
            const resp = await fetch(TournApiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tourn)
            });
            return await resp.json();            
        } catch(e) {
            console.log('Error adding new tourn', e);
        }
    }

    deleteTournament = async (tournId) => {
        console.log(`Time to delete ${tournId}!`);
        try {
            const resp = await fetch(`${TournApiUrl}/${tournId}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            });
        } catch(e) {
            console.log(`Error deleting tourn with id ${tournId}`, e);
        }
    }

    getTournMatches = async (tournId) => {
        try {
            const resp = await fetch(`${tournId}/match`);
            const json = await resp.json();
            return json;
        } catch (e) {
            console.log(`Error getting matches from tournament ${tournId}: `, e);
        }
    }
}

export const tournApi = new TournApi();