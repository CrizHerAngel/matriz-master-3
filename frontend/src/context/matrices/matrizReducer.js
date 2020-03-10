import {
  GET_MATRICES,
  ADD_MATRIZ,
  VALIDATE_FORM_MATRIZ,
  DELETE_MATRIZ,
  MATRIZ_ACTUAL,
  UPDATE_MATRIZ,
  RESET_MATRIZ,
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case GET_MATRICES:
      return {
        ...state,
        matrices: action.payload,
      };

    case ADD_MATRIZ:
      return {
        ...state,
        matrices: [...state.matrices, action.payload],
        errormatriz: false,
      };
    case VALIDATE_FORM_MATRIZ:
      return {
        ...state,
        errormatriz: true,
      };
    case DELETE_MATRIZ:
      return {
        ...state,
        matrices: state.matrices.filter(
          (matriz) => matriz.id !== action.payload
        ),
      };
    case MATRIZ_ACTUAL:
      return {
        ...state,
        matrizseleccionada: action.payload,
      };
    case UPDATE_MATRIZ:
      return {
        ...state,
        matrices: state.matrices.map(
          (matriz) =>
            matriz.id_matrix === action.payload.id_matrix
              ? action.payload
              : matriz
        ),
      };
    case RESET_MATRIZ:
      return {
        ...state,
        matrizseleccionada: null,
      };

    default:
      return state;
  }
};
