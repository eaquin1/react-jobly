import axios from "axios";

class JoblyApi {
    static async request(endpoint, paramsOrData = {}, verb = "get") {
        paramsOrData._token = localStorage.getItem("token");

        console.debug("API Call:", endpoint, paramsOrData, verb);

        try {
            return (
                await axios({
                    method: verb,
                    url: `http://localhost:3001/${endpoint}`,
                    [verb === "get" ? "params" : "data"]: paramsOrData,
                })
            ).data;
        } catch (e) {
            console.error("API error:", e.response);
            let message = e.response.data.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async getCompany(handle) {
        let res = await this.request(`companies/${handle}`);
        return res.company;
    }

    static async getCompanies(search) {
        let res = await this.request(`companies`, { search });
        return res.companies;
    }

    static async getJob(id) {
        let res = await this.request(`jobs/${id}`);
        return res.job;
    }

    static async getJobs(search) {
        let res = await this.request(`jobs`, { search });
        return res.jobs;
    }

    static async applyToJob(id) {
        let res = await this.request(`${id}/apply`, "post");
        return res.message;
    }

    static async login(data) {
        let res = await this.request(`login`, data, "post");
        localStorage.setItem("token", res.token);
        console.log(res.token);
        return res.token;
    }

    static async register(data) {
        let res = await this.request(`users`, data, "post");
        localStorage.setItem("token", res.token);
        console.log(res.token);
        return res.token;
    }
    static async getUser(username) {
        let res = await this.request(`users/${username}`);
        return res.user;
    }

    static async updateUser(username, data) {
        let res = await this.request(`users/${username}`, data, "patch");
        return res.user;
    }
}

export default JoblyApi;
