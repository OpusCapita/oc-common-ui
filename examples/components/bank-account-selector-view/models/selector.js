export default class Selector {

  static setMarked = (markedData, path, value) => {
    let markedCopy = Object.assign({}, markedData);
    let setValue = value;
    if (value === undefined) { // Clear existing selections if selecting all
      setValue = 'all';
      if (Selector.hasPath(markedCopy, path)) {
        markedCopy = Selector.unmark(markedData, path.slice(), value);
      }
    }
    let data = markedCopy;
    path.forEach((index, i) => {
      if (!(index in data)) {
        data[index] = {};
      }
      if (i === path.length - 1) {
        if (Object.keys(data[index]).length === 0
            && data[index].constructor === Object) {
          data[index] = [setValue];
        } else {
          data[index].push(setValue);
        }
      }
      data = data[index];
    });
    return markedCopy;
  }

  static hasPath = (markedData, path) => {
    let pathExists = true;
    let data = Object.assign({}, markedData);
    path.forEach((index) => {
      if (index in data) {
        data = data[index];
      } else {
        pathExists = false;
      }
    });
    return pathExists;
  }

  static getMarked = (markedData, path) => {
    let data = Object.assign({}, markedData);
    path.forEach((index) => {
      if (data[index] && data[index].constructor === Array) {
        data = Object.assign([], data[index]);
      } else {
        data = Object.assign({}, data[index]);
      }
    });
    if (data.constructor === Array) {
      return data;
    }
    if (data.constructor !== Array) {
      const result = Object.keys(data).reduce((a, b) => {
        a.push(parseInt(b, 10));
        return a;
      }, []);
      return result;
    }
    return [];
  }

  static getMarkedDataForIds = (sourceData, selectedIds) => {
    const selectedPaths = [];
    Selector.getPathsFromIds(sourceData, selectedIds, selectedPaths, []);
    let markedData = {};
    selectedPaths.forEach((path) => {
      const value = path.splice(-1, 1)[0];
      markedData = Selector.setMarked(markedData, path, value);
    });
    return markedData;
  }

  static getPathsFromIds = (sourceData, selected, paths, path) => {
    sourceData.forEach((item, index) => {
      const currentPath = path.slice();
      if (selected.indexOf(item.id) > -1) {
        currentPath.push(index);
        if (item.data.length > 0) {
          currentPath.push('all');
        }
        paths.push(currentPath.slice());
        currentPath.splice(-1, 1);
      } else {
        currentPath.push(index);
        Selector.getPathsFromIds(item.data, selected, paths, currentPath);
      }
    });
  }

  static unmark = (markedData, path, value) => {
    const markedCopy = Object.assign({}, markedData);
    let data = markedCopy;
    let willBeEmpty = false;
    path.forEach((index, i) => {
      if (i === path.length - 1) {
        if (value === undefined) {
          data[index] = [];
          willBeEmpty = true;
        } else {
          const removeIndex = data[index].indexOf(value);
          if (removeIndex > -1) {
            if (data[index].length === 1) {
              willBeEmpty = true;
            }
            data[index].splice(removeIndex, 1);
          }
        }
      }
      data = data[index];
    });
    if (willBeEmpty) {
      Selector.clearPath(path, markedCopy);
    }
    return markedCopy;
  };

  static clearPath = (path, markedCopy) => {
    let data = markedCopy;
    path.forEach((index, i) => {
      if (i === path.length - 1) {
        delete data[index];
        if (Object.keys(data).length === 0) {
          path.splice(-1, 1);
          Selector.clearPath(path, markedCopy);
        }
      } else {
        data = data[index];
      }
    });
  };

}
