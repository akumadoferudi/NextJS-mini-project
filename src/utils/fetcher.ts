/** eslint-disable */

type Fetcher = (...args: [string, number]) => Promise<any>;  

const fetcher: Fetcher = async (url: string, id: number) => {  
    const response = await fetch(`${url}/${id}`);  
    return response.json();  
};

export default fetcher;