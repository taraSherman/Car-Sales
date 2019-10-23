// action types
export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

// action creators
export function addFeature() {
  return {
    type: ADD_FEATURE
  };
};

export function removeFeature() {
  return {
    TYPE: REMOVE_FEATURE
  };
};