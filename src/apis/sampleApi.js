const getData = async () => {
    try {
        const response = await axiosInterceptorInstance.get('/data'); // Replace with your API endpoint
        // Handle the response data here
        console.log(response.data);
    } catch (error) {
        // Handle the error here
        console.error(error);
    }
}