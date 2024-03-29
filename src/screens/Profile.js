import React, {useEffect, useState} from "react";
import {auth, db} from "../initFirebase";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {Link} from "react-router-dom";
import {AppHeader} from "./AppHeader";


/**
 * This component is used to display the user profile.
 * It fetches the user data from the database and displays it.
 * There are 2 modes : READONLY & EDITABLE
 * In READONLY mode, the user can only see his profile and edit it.
 *      He can also access the group management page if he is a group leader.
 *      He can also access the admin page if he is an admin.
 * In EDITABLE mode, the user can edit his profile and save it.
 * @returns {JSX.Element} : the profile page with the user data
 * @constructor
 */
export default function Profile() {
    
    const [isEditable,  setIsEditable]  = useState(false);
    const [userDatas,        setUserDatas]  = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {

        // Récupérer les données de l'utilisateur dans la base de données ou l'API
        const fetchUserDataFromDB = async () => {
            const docRef = doc(db, 'users', auth.currentUser.email );
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                setUserDatas(data);
            } else {
                console.error('No such document!');
            }
        };
        
        // Call the function to fetch the data, use the .then() method to wait for the promise to resolve and then set the state with the result
        //fetchUserDataFromDB()
        try
        {
            setIsLoading(true);
            fetchUserDataFromDB().then(r => console.log("Fetch done !"));
        }
        catch (e) {
            console.error(e);
        }
        finally
        {
            setIsLoading(false);
        }
        
    }, [isEditable]);
    
    // BTN EDIT PROFILE
    function handleEdit() {
        setIsEditable(true);
    }
    
    // BTN SAVE PROFILE
    function BACK() {
        // Va changer l'affichage du composant & fetch les données de l'utilisateur depuis la DB
        setIsEditable(false);
    }
    
    const selectProfilePictureURL = () => {
        if(auth.currentUser.photoURL === null) {
            console.log("DEFAULT PICTURE !");
            return require('../assets/images/user.png');
        }
        else {
            console.log("userDatas.photoURL : " , userDatas.photoURL);
            return (userDatas.photoURL);
        }
    }
    
    return (
        <>
            {isLoading ?
                (<h1>Chargement...</h1>)
                :
                (
                    <div className="card profile-card">
                        <h1>Profil</h1>
                        <img className="profileIcon" src={selectProfilePictureURL()}/>
                        {/* Condition vérifiant si le profil est éditable ou non*/}
                        {/* Si on est pas en mode EDIT, on peut y passer */}
                        {!isEditable && (
                            <div className="buttons">
                                <ProfileReadOnly {...userDatas} />
                                <button className="primary-button" onClick={handleEdit}>Modifier</button>
                                {userDatas.isGroupLeader && (
                                    <Link to="/groupe">
                                        <button className="primary-button">Gestion du groupe</button>
                                    </Link>)}
                                {userDatas.isAdmin && (
                                    <Link to="/admin">
                                        <button className="primary-button">Administrateur</button>
                                    </Link>)}
                            </div>
                        )}
                        {/* EDITING MODE */}
                        {isEditable && (
                            <>
                                <ProfileEditable {...userDatas} />
                                <button className="primary-button" onClick={BACK}>Retour</button>
                            </>
                        )}
                    </div>
                )
            }
        </>
        
    );
}


/**
 * This component is used to display the user profile in EDITABLE mode.
 * It takes the user data as props and displays it in a form.
 * @param props : user data (firstName, lastName, birthDate, isGroupLeader)
 * @returns {JSX.Element} : the form to edit the user profile
 * @constructor
 */
function ProfileEditable(props) {

    const [editedData, setEditedData] = useState(
        {
                    firstName:     props.firstName,
                    lastName:      props.lastName,
                    birthDate:     props.birthDate,
                    isGroupLeader: props.isGroupLeader
                 });
 
    function handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;
        
        setEditedData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }
    
    
    async function handleSubmit(event)
    {
        event.preventDefault();

        await updateUserProfile(auth.currentUser.email, editedData).then(()=>{alert("Profil mis à jour !")});
    }
    
    // UPDATE USER PROFILE
    // This function is used to update the user profile in Firestore.
    // It takes the userId and newUserData as parameters and updates the user profile in Firestore.
    const updateUserProfile = async (userId, newUserData) =>
    {
        const userRef = doc(db, "users", userId);
        const docSnap = await getDoc(userRef);
        
        if (docSnap.exists()) {
            await setDoc(userRef, newUserData, {merge: true}); // merge does not overwrite the existing data (if the document already exists) but updates it with the new data
        }
        
    }
    
    return (
        <form onSubmit={handleSubmit} className="login-form profile-form">
            <div className="form-fields">
                <label htmlFor="first-name-input">Prénom :</label>
                <input
                    type="text"
                    id="first-name-input"
                    name="firstName"
                    value={editedData.firstName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-fields">
                <label htmlFor="last-name-input">Nom :</label>
                <input
                    type="text"
                    id="last-name-input"
                    name="lastName"
                    value={editedData.lastName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-fields">
                <label htmlFor="birth-date-input">Date de naissance :</label>
                <input
                    type="date"
                    id="birth-date-input"
                    name="birthDate"
                    value={editedData.birthDate}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-fields inline-field">
                <input
                  type="checkbox"
                  id="is-group-leader-input"
                  name="isGroupLeader"
                  checked={editedData.isGroupLeader}
                  onChange={handleInputChange}
                />
                <label htmlFor="is-group-leader-input">Est chef de groupe</label>
            </div>
            <button className="primary-button" type="submit">Enregistrer</button>
        </form>
    );
}

/**
 * This component is used to display the user profile in READ-ONLY mode.
 * It takes the user data as props and displays it.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function ProfileReadOnly(props) {
    const { firstName, lastName, birthDate, email, isAdmin, isGroupLeader } = props;

    return (
        <div>
            <p><strong>Prénom :</strong>            {firstName }</p>
            <p><strong>Nom :</strong>               {lastName }</p>
            <p><strong>Date de naissance :</strong> {birthDate}</p>
            <p><strong>E-mail :</strong>            {email}</p>
            <p><strong>Est chef de groupe :</strong>{isGroupLeader ? "Oui" : "Non"}</p>
            <p><strong>Est admin :</strong>         {isAdmin ? "Oui" : "Non"}</p>
        </div>
    );
}

