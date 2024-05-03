
function parseQuery(query){
    const exp = /SELECT (.+) FROM (.+)/i
    const match = query.match(exp);
    if(match){
       const [, fields, table_name] = match
       return {
         fields: fields.split(",").map((field) => field.trim()),
         table: table_name.trim()
       }
    }
    throw new Error("Invalid query format");
}

module.exports = parseQuery
    
