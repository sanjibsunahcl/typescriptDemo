class ApiUtils {
  static get(route) {
    return this.apiService(route, null, 'GET');
  }
  static apiService(url) {
    return fetch(url)
      .then(resp => {
        let json = resp.json();
        if (resp.ok) {
          return json;
        }
      })
      .then(json => json);
  }
}

export default ApiUtils;
