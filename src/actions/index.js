// action types
export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

// action creators
export const addFeature = feature => {
  return {
    type: ADD_FEATURE,
    payload: feature
  };
};

export const removeFeature = feature => {
  return {
    type: REMOVE_FEATURE,
    payload: feature
  };
};

/* 
Create action types; i.e. create variable with the name of the string, assign it the string we would have passed to an action and give action.type the variable as its value (lines 2 & 3)

An action creator is a function that creates an action (lines 6-11 & 13-18)
*/