const readCSV = require('./csvReader');
const parseQuery = require('./queryParser');

async function executeSELECTQuery(query) {
    try {
        const { fields, table } = parseQuery(query);
        const result = await readCSV(`${table}.csv`)
        
        if (fields[0] !== '*') {
            return result.map((item) => {
                const obj = {};
                fields.forEach(field => {
                    obj[field] = item[field]
                })
                return obj;
            })
        }
        return result;s
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

module.exports = executeSELECTQuery;
