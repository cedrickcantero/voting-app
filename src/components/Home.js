import React, {useState, useContext, useEffect} from "react";
import Category from './Category';
import Popup from './Popup';
import categories from "./defaults";
import { v4 as uuidv4 } from 'uuid'
import '../assets/scss/Home.scss'
import { VoteContext } from "./ContextProvider/VoteContextProvider";


const Home = () => {
    
    const { 
        sessionId,
        setSessionId,
        selectedMaleVote,
        setSelectedMale,
        selectedFemaleVote,
        setSelectedFemale,
        hasSubmittedVote,
        setHasSubmitted, } = useContext(VoteContext);

    const [currentSessionId, setCurrentSessionId] = useState(sessionId);
    const [selectedNominees, setSelectedNominees] = useState({
        male:selectedMaleVote,
        female:selectedFemaleVote,
    });
    const [votesSubmitted, setVotesSubmitted] = useState(hasSubmittedVote);
    const [showModal, setShowModal] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const u_id = uuidv4()

    useEffect(() => {
        setSessionId(u_id)
    }, [currentSessionId])

      // Retrieve state from session storage on initial load
    useEffect(() => {
        const savedState = sessionStorage.getItem("voteState");
        if (savedState) {
        const { sessionId, selectedMaleVote, selectedFemaleVote, hasSubmittedVote } = JSON.parse(savedState);
        setSessionId(sessionId);
        setSelectedMale(selectedMaleVote);
        setSelectedFemale(selectedFemaleVote);
        setHasSubmitted(hasSubmittedVote);
        }
    }, []);


    const setSelectedNominee = (nominee,gender) => {
        if(nominee && gender === 'male') {
            setSelectedMale(nominee)
            setSelectedNominees((prevState => ({
                ...prevState,
                male: nominee
            })))
        }else if(nominee && gender === 'female'){
            setSelectedFemale(nominee)
            setSelectedNominees((prevState => ({
                ...prevState,
                female: nominee
            })))
        }
    }

    const handleSubmitVotes = () => {
        if (!selectedNominees.male.name || !selectedNominees.female.name || !selectedNominees ) {
            setPopupMessage('You have to pick one nominee for each category');
            setShowModal(true)
        } else {
            setVotesSubmitted(true);
            setHasSubmitted(true);
            setShowModal(true)
            sessionStorage.setItem("voteState", JSON.stringify({ sessionId, selectedMaleVote, selectedFemaleVote, hasSubmittedVote:true }));
            setPopupMessage('Thank you for your votes!');
        }
    };

    const handlePopupClose = (showPopup) => {
        setPopupMessage('');
        setShowModal(!showPopup)
    };

    return(
        <>
        {showModal && <Popup message={popupMessage} handlePopupClose={handlePopupClose} popup={showModal}/>}
        <div className="home-container">
            <div className="title-container">
                <span className="title-text">Online Votes</span>
            </div>
            <div className="categories-container">
                {categories && categories.map((category,index) => (
                    <Category 
                        category={category}
                        key={category.id}
                        selectedMaleNominee={selectedMaleVote}
                        selectedFemaleNominee={selectedFemaleVote}
                        setSelectedNominee={(nominee) =>
                            setSelectedNominee(nominee,category.gender)
                        }
                        disabled={hasSubmittedVote}
                     />
                ))}
                <div className="button-container">
                    <button className="button-submit" onClick={handleSubmitVotes} disabled={hasSubmittedVote}>Submit your Votes</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home