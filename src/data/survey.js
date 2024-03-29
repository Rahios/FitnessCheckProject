// DEFAULT DATA TO SEED FIREBASE DATABASE
// This variable is used to store the current question to initialize the firestore database if it is empty.
export const questionDataPartA = [
    {
        questionId: "AQst01",
        questionText: "Est-ce que vous avez une activité physique régulière ? ",
        choices: ["Oui", "Non"],
    },
    {
        questionId: "AQst02",
        questionText: "Diriez-vous que vous êtes actif/-ve au moins 30 minutes chaque jour (au moins 5 jours par semaine) ?",
        choices: ["Oui", "Non"],
    },
    {
        questionId: "AQst03",
        questionText: "Est-ce qu’il vous arrive parfois/régulièrement de transpirer ou d’être essoufflé/-e durant cette activité ?",
        choices: ["Oui", "Non"],
    },
    {
        questionId: "AQst04",
        questionText: "Est-ce que vous auriez envie de reprendre une activité physique plus importante dans les prochains mois ?",
        choices: ["Oui", "Non"],
    },
    {
        questionId: "AQst05",
        questionText: "Est-ce que vous connaisez les avantages que l'activité physique peut apporter pour la santé ?",
        choices: ["Oui", "Non"],
    },
    {
        questionId: "AQst06",
        questionText: "Est-ce que vous connaisez les risques de l'inactivité ?",
        choices: ["Oui", "Non"],
    },
];

export const messageDataPartA = [
    {
        messageId: "AMsg01",
        messageTitle: "BOX: Précontemplation 1 (indétermination)",
        messageText: "Vous n'envisagez pas de reprendre une activité physique et n'êtes pas conscient des risques de l'inactivité ou des benefices de l'activité physique.",
        advices: ["Brochure: Encourager à envisager de reprendre de l’activité", "Informer sur les bénéfices potentiels pour sa santé et son indépendance"],
    },
    {
        messageId: "AMsg02",
        messageTitle: "BOX: Précontemplation 2 (indétermination)",
        messageText: "Vous n’envisagez pas de reprendre une activité physique mais connaissez les avantages de l'activité physique. ",
        advices: ["Brochure: Encourager à envisager de reprendre de l’activité"],
    },
    {
        messageId: "AMsg03",
        messageTitle: "Contemplation (intention)",
        messageText: "Vous êtes intéressé ou réfléchissez à modifier votre activité",
        advices: ["Entretien motivationnel", "Pouvoir répondre aux éventuelles objections", "Référer à une association de seniors ou proposant de l’activité physique adaptée et supervisée (par ex. Pro Senectute, programme «pas de retraite pour ma santé»)"],
    },
    {
        messageId: "AMsg04",
        messageTitle: "Préparation 1",
        messageText: "Vous êtes actif mais moins de 30 minutes/j, 5 j/semaine ou avec une intensité trop basse",
    },
    {
        messageId: "AMsg05",
        messageTitle: "Préparation 2",
        messageText: "Vous êtes actif au moins 30 minutes/j, 5 j/semaine, mais avec une intensité trop basse",
        advices: ["Brochures sur l'activité physique"],
    },
    {
        messageId: "AMsg06",
        messageTitle: "Action et maintien",
        messageText: "Vous êtes actif au moins 30 minutes/j, 5 j/semaine",
        messageSecondaryText: ["Brochures sur l'activité physique", "Traiter les problèmes de santé qui pourraient provoquer un manque d’activité physique", "Développer des stratégies pour gérer des nouvelles barrières qui se présentent", "ENCOURAGER!"],
    },
];
export const questionDataPartB = [
                     {
                         questionId: "BQst01",
                         questionText: "Quels dispositifs d'aide à la marche utilisez vous ? ",
                         choices: ["aucune", "une canne", "deux cannes", "déambulateur", "cadre de marche", "j'ai besoin de l'aide d'une tierce personne"],
                         points:[5,4,3,2,2,1],
                         multipleChoice: false
                     },
                     {
                         questionId: "BQst02",
                         questionText: "Par rapport à la vitesse de marche moyenne (celle de vos proches, de vos amis et des gens de votre âge), pensez-vous marcher habituellement… (cocher une seule case)",
                         choices: ["Nettement moins vite", "Un peu moins vite", "A la même vitesse", "Un peu plus vite", "Nettement plus vite"],
                         points: [1, 2, 3, 4, 5],
                         multipleChoice: false
                     },
                     {
                         questionId: "BQst03",
                         questionText: "Entourez le temps maximal que vous pouvez pensez pouvoir tenir aux différentes allures suivantes facilement, sur terrain plat et sans vous arrêter pour vous reposer:",
                         questionSecondaryText: "Marcher lentement (une vitesse plus lente que celle de vos proches, de vos amis ou des gens de votre âge)",
                         choices: ["impossible", "1 minute", "5 minutes", "15 minutes", "30 minutes", "1 heure", "2 heures", "3 heures & plus"],
                         points: [0, 1, 4, 7, 10, 13, 16, 19],
                         multipleChoice: false
                     },
                     {
                         questionId: "BQst04",
                         questionText: "Entourez le temps maximal que vous pouvez pensez pouvoir tenir aux différentes allures suivantes facilement, sur terrain plat et sans vous arrêter pour vous reposer:",
                         questionSecondaryText: "Marcher à vitesse moyenne (la même vitesse que celle de vos proches, de vos amis ou des gens de votre âge)",
                         choices: ["impossible", "1 minute", "5 minutes", "15 minutes", "30 minutes", "1 heure", "2 heures", "3 heures & plus"],
                         points: [0, 2, 5, 8, 11, 14, 17, 20],
                         multipleChoice: false
                     },
                     {
                         questionId: "BQst05",
                         questionText: "Entourez le temps maximal que vous pouvez pensez pouvoir tenir aux différentes allures suivantes facilement, sur terrain plat et sans vous arrêter pour vous reposer:",
                         questionSecondaryText: "Marcher rapidement (une vitesse plus rapide que celle de vos proches, de vos amis ou des gens de votre âge)",
                         choices: ["impossible", "1 minute", "5 minutes", "15 minutes", "30 minutes", "1 heure", "2 heures", "3 heures & plus"],
                         points: [0, 3, 6, 9, 12, 15, 18, 21],
                         multipleChoice: false
                     },
                     {
                         questionId: "BQst06",
                         questionText: "Montée d'escaliers : Reportez le degré de difficulté physique qui décrit le mieux la difficulté que vous avez eu à monter des escaliers, sans vous arrêter pour vous reposer, au cours de la dernière semaine.:",
                         questionSecondaryText: "Monter 1 étage ? Degré de difficulté",
                         choices: ["Aucun", "Leger", "Moyen", "Important", "Infaisable"],
                         points: [4, 3, 2, 1, 0],
                         multipleChoice: false
                     },
                     {
                         questionId: "BQst07",
                         questionText: "Montée d'escaliers : Reportez le degré de difficulté physique qui décrit le mieux la difficulté que vous avez eu à monter des escaliers, sans vous arrêter pour vous reposer, au cours de la dernière semaine.:",
                         questionSecondaryText: "Monter 3 étage ? Degré de difficulté",
                         choices: ["Aucun", "Leger", "Moyen", "Important", "Infaisable"],
                         points: [9, 8, 7, 6, 5],
                         multipleChoice: false
                     },
                     {
                         questionId: "BQst08",
                         questionText: "Montée d'escaliers : Reportez le degré de difficulté physique qui décrit le mieux la difficulté que vous avez eu à monter des escaliers, sans vous arrêter pour vous reposer, au cours de la dernière semaine.:",
                         questionSecondaryText: "Monter 5 étages ? Degré de difficulté",
                         choices: ["Aucun", "Leger", "Moyen", "Important", "Infaisable"],
                         points: [14, 13, 12, 11, 10],
                         multipleChoice: false
                     },
                     {
                         questionId: "BQst09",
                         questionText: "Avez-vous peur de l'altitude (Peur du vide) ? ",
                         questionSecondaryText: "Explication: La peur du vide est une vraie phobie (phobie = peur) et n'est pas à confondre avec le vertige, qui est un phénomène physiologique). La peur du vide peut se déclencher à la simple pensée de se retrouver en hauteur.",
                         choices: ["Oui", "Non"],
                         points: [1, 0],
                         multipleChoice: false
                     },
                     {
                         questionId: "BQst10",
                         questionText: "Avez-vous des douleurs?",
                         choices: ["Douleurs dans la hanche", "Douleurs des genoux", "Douleurs aux pieds", "Douleurs de dos", "Douleurs ailleurs", "Pas de douleurs"],
                         points: [1, 1, 1, 1, 1, 0],
                         multipleChoice: true
                     },
                     {
                        questionId: "BQst11",
                        questionText: "Avez-vous des problèmes de mobilité dans une ou plusieurs des articulations suivantes ? ",
                        choices: ["Oui j'ai une mobilité réduite dans la cheville","Oui mon genou a une mobilité réduite","Oui ma hanche a une mobilité réduite","Non pas de problème"],
                        points: [1, 1, 1, 0],
                        multipleChoice: true
                     },
                     {
                         questionId: "BQst12",
                         questionText: "Est-ce que vous avez peur de chuter?",
                         choices: ["Oui, j'ai peur de chuter", "Non je n'ai pas peur de chuter"],
                         points: [1, 0],
                         multipleChoice: false
                     },
                     {
                         questionId: "BQst13",
                         questionText: "Avez-vous chuté lors des 12 derniers mois?",
                         choices: ["Non", "Une fois", "Deux fois", "Plusieurs fois"],
                         points: [0, 1, 2, 3],
                         multipleChoice: false
                     },
                     {
                         questionId: "BQst14",
                         questionText: "Avez-vous parfois des vertiges?",
                         choices: ["Oui", "Non"],
                         points: [1, 0],
                         multipleChoice: false
                     },
                     {
                         questionId: "BQst15",
                         questionText: "Est-ce que vous vous sentez sûre de vous lorsque vous vous tenez debout sur une seule jambe sans vous tenir à quelque chose?",
                         choices: ["Non je ne me sens pas sûr-e", "Oui je me sens sûr-e", "Impossible de faire sans me tenir"],
                         points: [1, 2, 0],
                         multipleChoice: false
                     }
                 ];
