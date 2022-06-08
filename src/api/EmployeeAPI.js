import axiosClient from "./AxiosClient";

const EmployeeAPI = {
    async getPhotos(deboundTerm) {
        return await axiosClient.get('/search/photos', {
            params: {
                query: deboundTerm
            }
        });
    },
    async getEmployeeMetaInfo(startMonth, endMonth) {
        return await axiosClient.post('/employee', {
                levels: [
                    "1.1",
                    "1.2"
                ],
                startMonth: startMonth,
                endMonth: endMonth,
                projectCodes: [
                    "543123-101",
                    "19513-101"
                ]
            }
        );
    },
    async getEmployeeRole() {
        return await axiosClient.get('/role');
    },

    async getTeamCapacity() {
        return await axiosClient.get('/capacity');
    },

    async getEmployeeMonthVertex() {
        return await axiosClient.get('/vertec');
    },


}

export default EmployeeAPI;