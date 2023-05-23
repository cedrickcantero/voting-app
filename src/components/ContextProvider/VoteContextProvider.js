import React, {createContext, useContext, useReducer} from "react";

const initialVoteState = {
  sessionId: '',
  selectedMaleVote: {
    id:'',
    image:'',
    name:''
  },
  selectedFemaleVote: {
    id:'',
    image:'',
    name:''
  },
  hasSubmittedVote: false
}

const VoteContext = createContext();

const SET_SESSION = "SET_SESSION";
const SET_MALE_VOTE = "SET_MALE_VOTE";
const SET_FEMALE_VOTE = "SET_FEMALE_VOTE";
const SET_VOTE_SUBMIT = "SET_VOTE_SUBMIT";

const voteReducer = (state,action) => {
  switch (action.type) {
    case SET_SESSION:
      return {...state, sessionId: action.payload};
    case SET_MALE_VOTE:
      return {...state, selectedMaleVote: action.payload};
    case SET_FEMALE_VOTE:
      return {...state, selectedFemaleVote: action.payload};
    case SET_VOTE_SUBMIT:
      return {...state, hasSubmittedVote: action.payload};
    default:
      return state
  }
 
}

const VoteProvider = ({children}) => {
  const [state, dispatch] = useReducer(voteReducer, initialVoteState);

  const { sessionId, selectedMaleVote, selectedFemaleVote, hasSubmittedVote } = state;

  const setSessionId = (sessionId) => {
    dispatch({ type: SET_SESSION, payload: sessionId });
  };

  const setSelectedMale = (male) => {
    dispatch({ type: SET_MALE_VOTE, payload: male });
  };

  const setSelectedFemale = (female) => {
    dispatch({ type: SET_FEMALE_VOTE, payload: female });
  };

  const setHasSubmitted = (submitted) => {
    dispatch({ type: SET_VOTE_SUBMIT, payload: submitted });
  };

  return(
    <VoteContext.Provider 
      value={{
        sessionId,
        setSessionId,
        selectedMaleVote,
        setSelectedMale,
        selectedFemaleVote,
        setSelectedFemale,
        hasSubmittedVote,
        setHasSubmitted,
      }}
    >
        {children}
    </VoteContext.Provider>
  )
}

export { VoteProvider, VoteContext };

