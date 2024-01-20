const fetchApi = async() =>{
    try {
        //const url = 'https://api.gael.cloud/general/public/sismos'
        const url = 'https://valorant-api.com/v1/agents'
        const response = await axios.get(url)
        console.log(response.data)
    } catch (error) {
        console.log('error en el codigo', error)
    }
}

fetchApi();