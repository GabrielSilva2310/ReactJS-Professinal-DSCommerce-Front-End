import { BASE_URL } from "../utils/system";


export function findAll() {
    return `${BASE_URL}/products?size=12`;
}

export function findById(id: number) {
    return `${BASE_URL}/products/${id}`;
}

