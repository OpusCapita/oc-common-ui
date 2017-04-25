export default class Search {

  static getMatches = (sourceData, searchString, match, path, data, results) => {
    Object.keys(sourceData).forEach((thisKey) => {
      let matchFound = false;
      if (sourceData[thisKey].name.indexOf(searchString) > -1) {
        matchFound = true;
      }
      data.push(sourceData[thisKey].name);
      path.push(parseInt(thisKey, 10));

      if (matchFound || match) {
        results.push({
          id: sourceData[thisKey].id,
          path: path.slice(),
          data: data.slice(),
        });
      }
      if (sourceData[thisKey].data.length !== 0) {
        Search.getMatches(sourceData[thisKey].data, searchString,
          matchFound || match, path.slice(), data.slice(), results);
      }
      data.splice(-1, 1);
      path.splice(-1, 1);
    });
  }

  static getHierarchicalMatches = (sourceData, searchString, match, path, data,
    results) => {
    Object.keys(sourceData).forEach((thisKey) => {
      let matchFound = false;
      if (sourceData[thisKey].name.indexOf(searchString) > -1) {
        matchFound = true;
      }
      const groupName = data.slice(0, data.length).toString()
        .replace(',', ' / ');
      const resultKey = data.toString().toLowerCase().replace(',', '')
        .replace(' ', '');
      data.push(sourceData[thisKey].name);
      path.push(parseInt(thisKey, 10));

      if (sourceData[thisKey].data.length === 0 && (matchFound || match)) {
        const item = {
          name: data.slice(-1)[0],
          id: sourceData[thisKey].id,
          path: path.slice(),
        };
        if (resultKey in results) {
          results[resultKey].accounts.push(item);
        } else {
          results[resultKey] = {
            name: groupName,
            accounts: [item],
          };
        }
      }
      if (sourceData[thisKey].data.length !== 0) {
        Search.getHierarchicalMatches(sourceData[thisKey].data, searchString,
          matchFound || match, path.slice(), data.slice(), results);
      }
      data.splice(-1, 1);
      path.splice(-1, 1);
    });
  }
}
