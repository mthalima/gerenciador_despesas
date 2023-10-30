import { createContext, useReducer } from "react";

export const ContextDespesa = createContext({
  arrDespesas: [],
  addDespesa: ({ descricao, quantidade, data }) => {},
  updateDespesa: ({ id }, { descricao, quantidade, data }) => {},
  deletaDespesa: ({ id }) => {},
});

function reducerDespesa(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
    case "DELETE":
    default:
      return state;
  }
}

function provedorContextoDespesa({ children }) {
  const [estadoDespesa, dispatch] = useReducer(reducerDespesa);

  function addDespesa(dadoDespesa) {
    dispatch({ type: "ADD", payload: dadoDespesa });
  }

  function addDespesa(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function addDespesa(id, dadoDespesa) {
    dispatch({ type: "UPDATE", payload: { id: id, dado: dadoDespesa } });
  }

  return <ContextDespesa.Provider>{children}</ContextDespesa.Provider>;
}

export default provedorContextoDespesa;
