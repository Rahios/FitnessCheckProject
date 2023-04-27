import React, {useEffect, useState} from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import {
    GetMarcherSansAidesPourcentage,
    GetVitesseMarchePourcentage,
    GetPasPeurVidePourcentage,
    GetEquilibrePourcentage,
    GetInsecuriteMarchePourcentage,
    GetCapaciteMonterPourcentage,
    GetMarcheTempsPourcentage,
    GetMobilitePourcentage,
    GetSansDouleursPourcentage,
    GetActivitePhysique,
    GetResults
} from './GetResults';
import {ManagesResults,GetResultsFromQuestionnaire} from "./GetResults";
import {Link} from "react-router-dom";

export default function DisplayResults() {

    const [data, setData] = useState([]);
    const [questionnaires,setQuestionnaires] = useState([]);
    const [selectedQuestionnaire, setSelectedQuestionnaire] = useState(null);
    const [results,setResults] = useState([]);
    const [email, setEmail] = useState('');

    useEffect(() => {
        async function fetchQuestionnaires(){
            const listeQuestionnaires = await ManagesResults();
            setQuestionnaires(listeQuestionnaires);
        }
        fetchQuestionnaires();
    },[]);

    useEffect(() =>{
        async function fetchResults(){
            if(selectedQuestionnaire){
                const myResults = await GetResultsFromQuestionnaire(selectedQuestionnaire);
                setResults(myResults);
            }
        }
        fetchResults();
    },[selectedQuestionnaire]);

    useEffect(() => {
        if (results.length > 0) {
            const newScores = [
                {
                    category: 'Activité physique',
                    score: GetActivitePhysique(results).valueOf(),
                },
                {
                    category: 'Marcher sans aides',
                    score: GetMarcherSansAidesPourcentage(results).valueOf(),
                },
                {
                    category: 'Vitesse marche',
                    score: GetVitesseMarchePourcentage(results).valueOf(),
                },
                {
                    category: 'Marche temps',
                    score: GetMarcheTempsPourcentage(results).valueOf(),
                },
                {
                    category: 'Capacité monter',
                    score: GetCapaciteMonterPourcentage(results).valueOf(),
                },
                {
                    category: 'Insécurité marche',
                    score: GetInsecuriteMarchePourcentage(results).valueOf(),
                },
                {
                    category: 'Pas peur du vide',
                    score: GetPasPeurVidePourcentage(results).valueOf(),
                },
                {
                    category: 'Equilibre',
                    score: GetEquilibrePourcentage(results).valueOf(),
                },
                {
                    category: 'Sans douleurs',
                    score: GetSansDouleursPourcentage(results).valueOf(),
                },
                {
                    category: 'Mobilité',
                    score: GetMobilitePourcentage(results).valueOf(),
                },
            ];
            setData(newScores);
        }
    }, [results]);

    const sendEmail = () => {
        const body = "Bonjour, \n\n"+"Voici vos résultats du questionnaire :\n\n" + "Activité physique: " + GetActivitePhysique(results) + "%"+ "\n"
            + "Marcher sans aides: " + GetMarcherSansAidesPourcentage(results) + "%"+ "\n"
            + "Vitesse marche: " + GetVitesseMarchePourcentage(results) + "%"+ "\n"
            + "Marche temps: " + GetMarcheTempsPourcentage(results) + "%"+ "\n"
            + "Capacité monter: " + GetCapaciteMonterPourcentage(results) + "%"+ "\n"
            + "Insécurité marche: " + GetInsecuriteMarchePourcentage(results) + "%"+ "\n"
            + "Pas peur du vide: " + GetPasPeurVidePourcentage(results) + "%"+ "\n"
            + "Equilibre: " + GetEquilibrePourcentage(results) + "%"+ "\n"
            + "Sans douleurs: " + GetSansDouleursPourcentage(results) + "%"+ "\n"
            + "Mobilité: " + GetMobilitePourcentage(results) + "%"+ "\n\n"
            + "Merci de nous avoir fait confiance.\n\n"
            + "Votre team FitnessCheck"
        ;
        const subject = "Résultats du questionnaire";
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    }

    const downloadResults = () => {
        const data = JSON.stringify(results, null, 2); // Convertit les résultats en chaîne JSON formatée
        const blob = new Blob([data], { type: "text/plain;charset=utf-8" }); // Crée un blob avec les données
        const url = URL.createObjectURL(blob); // Génère un objet URL pour le blob
        const link = document.createElement("a"); // Crée un lien pour le téléchargement
        link.href = url;
        link.download = selectedQuestionnaire+".txt"; // Nom du fichier à télécharger
        document.body.appendChild(link);
        link.click(); // Déclenche le téléchargement
        document.body.removeChild(link); // Supprime le lien après le téléchargement
    }

    return (
        <div className="results">
            <div className="card card-title">
                <h1>Résultats et recommandations</h1>
            </div>
            {questionnaires.length > 0 ? (
              <div className="card card-advice info-card">
                  <div className="selectResult">
                      <span>Sélectionner un questionnaire : </span>
                      <select value={selectedQuestionnaire} onChange={(e) => setSelectedQuestionnaire(e.target.value)}>
                          <option disabled={selectedQuestionnaire !== null} value={null}>
                              Sélectionner un questionnaire
                          </option>
                          {questionnaires.map((questionnaire, index) => (
                            <option key={index}>{questionnaire.date}</option>
                          ))}
                      </select>
                  </div>
                    {selectedQuestionnaire !== null && (
                        <>
                            <div style={{ height: '400px' }}>
                                <ResponsiveRadar
                                    data={data}
                                    keys={['score']}
                                    indexBy="category"
                                    maxValue={100}
                                    valueFormat=">-.2f"
                                    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                                    borderColor={{ from: 'color', modifiers: [] }}
                                    gridLabelOffset={20}
                                    dotSize={9}
                                    dotColor={{ theme: 'background' }}
                                    dotBorderWidth={2}
                                    colors={{ scheme: 'paired' }}
                                    fillOpacity={0.9}
                                    blendMode="multiply"
                                    motionConfig="wobbly"
                                />
                            </div>
                            <GetResults />
                            <div className="buttons card card-result">
                                <h2>Partager mes résultats</h2>
                                <label htmlFor="email">Entrez votre adresse mail : </label>
                                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <button className="primary-button" onClick={sendEmail}>Envoyer par email</button>
                                <button className="primary-button" onClick={downloadResults}>
                                    Télécharger les résultats
                                </button>
                            </div>
                        </>
                    )}
                </div>
            ) : (
                <div className="card info-card">
                    <p>Aucun résultat n'est disponible pour le moment.</p>
                    <Link to="/questionnaire">
                        <button className="primary-button">Faire le quiz</button>
                    </Link>
                </div>
            )}
        </div>
    );
}


