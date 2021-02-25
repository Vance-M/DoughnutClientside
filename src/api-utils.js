import request from 'superagent';

const URL = 'https://immense-caverns-62116.herokuapp.com';

export async function getDoughnuts() {
    const response = await request.get(`${URL}/doughnuts`);
    return response.body;
}

export async function getDoughnut(id) {
    const response = await request.get(`${URL}/doughnuts/${id}`)
    return response.body
}

export async function getBakers() {
    const { body } = await request.get(`${URL}/bakers`)
    return body;
}

export async function makeDoughnut(newDonut) {
    const response = await request.post(`${URL}/doughnuts/`)
        .send(newDonut);
        return response.body;
}

export async function updateDoughnut(id, newDonut) {
    const response = await request.put(`${URL}/doughnuts/${id}`)
    .send(newDonut);
    return response.body;
}

export async function deleteDoughnuts(id) {
    const response = await request.delete(`${URL}/doughnuts/${id}`)
    return response.body
}

export const getBakerId = (doughnut, bakers) => bakers.find(baker => doughnut.baker === baker.baked_by).id;