import https from "https";

let dataAmiibo = [];
const typeSet = new Set();
const charactersSet = new Set();
const amiiboSeriesSet = new Set();
const gameSeriesSet = new Set();

class ES6 {
  formatJson = (amiiboArray) => {
    let formatedJson = { amiibo: [] };

    amiiboArray.forEach((element) => {
      formatedJson.amiibo.push({ name: element });
    });

    return formatedJson;
  };

  getDataAmiibo() {
    return { amiibo: dataAmiibo };
  }

  getTypeSet() {
    return this.formatJson(typeSet);
  }

  getCharactersSet() {
    return this.formatJson(charactersSet);
  }

  getAmiiboSeriesSet() {
    return this.formatJson(amiiboSeriesSet);
  }

  getGameSeriesSet() {
    return this.formatJson(gameSeriesSet);
  }

  request(url, successCallback, errorCallback) {
    https.get(url, (res) => {
      console.log(res.statusCode);
      if (res.statusCode === 308) {
        this.request(res.headers.location, successCallback, errorCallback);
        return;
      }

      res.setEncoding("utf8");

      let str = "";

      res.on("data", (data) => {
        str += data;
      });

      res.on("end", () => {
        const parseData = JSON.parse(str);

        parseData.amiibo.forEach((amiibo) => {
          dataAmiibo.push(amiibo);
          typeSet.add(amiibo.type);
          charactersSet.add(amiibo.character);
          amiiboSeriesSet.add(amiibo.amiiboSeries);
          gameSeriesSet.add(amiibo.gameSeries);
        });

        console.log(this.getTypeSet());
      });
    });
  }

  load(successCallback, errorCallback) {
    this.request("https://www.amiiboapi.com/api/amiibo");
  }
}

const dataImportES6 = new ES6();
export default dataImportES6;
