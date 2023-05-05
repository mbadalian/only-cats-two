import { ICats, IBreed, IBreeds } from '../models';

const CATS_API = process.env.CATS_API as string;
const BASE_URL = `https://api.thecatapi.com/v1`;

// const headers: HeadersInit = {
//     'x-api-key': CATS_API
// }
// const options: RequestInit = {
//     headers: headers
// }

export async function getCats<TResponse>(
        amount: number,
        breed?: IBreed
    ): Promise<TResponse> {
        const config: RequestInit = { headers: { 'x-api-key': CATS_API } }
    if (typeof breed === 'undefined') {
        const url: string = `${BASE_URL}/images/search?limit=${amount}`;
        return fetch(url, config)
            .then((response) => response.json())
            .then((data) => data as TResponse);
    }
    const url: string = `${BASE_URL}/images/search?limit=${amount}&breed_ids=${breed.id}`;
    return fetch(url, config)
            .then((response) => response.json())
            .then((data) => data as TResponse);
}

// export function getCats(amount: number, breed?: IBreed): Promise<ICats> {
//     if (typeof breed === 'undefined') {
//         return fetch(`${BASE_URL}/images/search?limit=${amount}`, options)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(response.statusText)
//                 }
//                 return response.json() as Promise<ICats>
//             })
//     }
//     return fetch(`${BASE_URL}/images/search?limit=${amount}&breed_ids=${breed.id}`, options)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.statusText)
//             }
//             return response.json() as Promise<ICats>
//     })
// }

// export function getBreeds(): Promise<IBreeds> {
//     return fetch(`${BASE_URL}/breeds`, options)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.statusText)
//             }
//             return response.json() as Promise<IBreeds>
//         })
// }
