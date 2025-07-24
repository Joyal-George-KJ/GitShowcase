import { FetchFuncPropType } from '@/types/ProjectTypes';

export default function fetchData({ url, path, method, options }: FetchFuncPropType) {
    const data = (async function () {
        try {
            const res = await fetch(url + path, { method: method, ...options });
            if (!res.ok) throw new Error('Failed to Fetch document');
            const json = await res.json();
            return json.data;
        } catch (err) {
            console.error(err);
        }
    })();

    console.log(data);
    

    if (data) return data;
}
