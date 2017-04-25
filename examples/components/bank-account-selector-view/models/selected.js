export default class Selected {

  static getPaths = (markedData, key, paths) => {
    Object.keys(markedData).forEach((thisKey) => {
      const newKey = key.slice();
      newKey.push(parseInt(thisKey, 10));
      if (markedData[thisKey].constructor === Array) {
        paths.push([...newKey, markedData[thisKey]]);
      } else {
        Selected.getPaths(markedData[thisKey], newKey, paths);
      }
    });
  }

  static getAllAccounts = (sourceData, accounts) => {
    const data = Object.assign([], sourceData);

    data.forEach((item, i) => {
      if (item.data.length === 0) {
        accounts.push({
          id: item.id,
          name: item.name,
          index: i,
        });
      } else {
        Selected.getAllAccounts(item.data, accounts);
      }
    });
  }

  static getPathString = (sourceData, path, name, fullPath) => {
    const index = path.shift();

    if (path.length > 1) {
      let newName = '';
      if (name === '') {
        newName = `${sourceData[index].name}`;
      } else {
        newName = `${name} / ${sourceData[index].name}`;
      }
      return Selected.getPathString(sourceData[index].data, path, newName,
        fullPath);
    }
    const accounts = [];
    if (path[0][0] !== 'all') {
      path[0].forEach((i) => {
        accounts.push({
          id: sourceData[index].data[i].id,
          name: sourceData[index].data[i].name,
          index: i,
        });
      });
    } else {
      Selected.getAllAccounts(sourceData[index].data, accounts);
    }
    fullPath.splice(-1);
    const numAccounts = accounts.length > 0
      ? accounts.length
      : sourceData[index].data.length;
    let groupName = sourceData[index].name;
    if (name !== '') {
      groupName = `${name} / ${sourceData[index].name}`;
    }
    return {
      id: sourceData[index].id,
      all: path[0][0] === 'all',
      path: fullPath,
      numAccounts,
      name: groupName,
      accounts,
    };
  }

  static getSelected = (sourceData, markedData) => {
    const selected = [];
    const paths = [];
    Selected.getPaths(markedData, [], paths);
    paths.forEach((path) => {
      const fullPath = path.slice();
      selected.push(Selected.getPathString(sourceData, path, '', fullPath));
    });
    return selected;
  }

  static getSelectionIds = (selections) => {
    const ids = [];
    selections.forEach((selection) => {
      if (selection.all) {
        ids.push({
          id: selection.id,
          all: selection.all,
          parent: true,
        });
      }
      selection.accounts.forEach((account) => {
        ids.push({
          id: account.id,
          all: selection.all,
          parent: false,
        });
      });
    });
    return ids;
  }
}
