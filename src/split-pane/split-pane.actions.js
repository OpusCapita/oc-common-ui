export const TYPES = {
  PLATFORM_SPLITPANE_RESIZE: 'PLATFORM_SPLITPANE_RESIZE',
};

export const resize = (id, size) =>
  (dispatch) => {
    sessionStorage[`splitpane_${id}_size`] = size;
    return dispatch({
      type: TYPES.PLATFORM_SPLITPANE_RESIZE,
      id,
      size,
    });
  };
