class API {

  static init () {
    this.baseUrl = 'http://localhost:3005'
    this.studentsUrl = this.baseUrl + '/students'
    this.projectsUrl = this.baseUrl + '/projects'
  }

  static request (url, options) {
    return fetch(url, options).then(resp => resp.json())
  }

  static get (url) {
    return this.request(url)
  }

  static post (url, data) {
    this.request(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  }

  static getAllStudents () {
    return this.get(this.studentsUrl)
  }

  static getStudent (slug) {
    return this.get(this.studentsUrl + `/${slug}`)
  }

  static getAllProjects () {
    return this.get(this.projectsUrl)
  }

  static getProject (slug) {
    return this.get(this.projectsUrl + `/${slug}`)
  }
}

API.init()

window.API = API

export default API
