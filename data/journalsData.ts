export interface Journal {
  number: number;
  name?: string;
  zone: string;
  location: string;
}

export const journalsData: Journal[] = [
  // Journaux numérotés de 34 à 84
  { number: 34, zone: "Corbeaux", location: "S'obtient à Corbeaux, le petit niveau au pied de L'Aspirante." },
  { number: 35, zone: "Feuilles ambrées", location: "S'obtient à Feuilles ambrées, devant les Ballerines Chromatiques." },
  { number: 36, zone: "Arbre blanc", location: "S'obtient à Arbre blanc." },
  { number: 37, zone: "Plage des Gestrals", location: "S'obtient dans la Plage des Gestrals située au sud-est de l'île de Sirène, accessible uniquement en volant durant l'Acte 3." },
  { number: 38, zone: "Moisson dorée", location: "S'obtient à Moisson dorée, en montant la rampe après le point de sauvegarde 'Creux des moissonneurs'." },
  { number: 39, zone: "Visages", location: "S'obtient à Visages, dans la zone de tristesse (chemin bleu). Collez et montez la pente à droite de l'arène de fin de la zone." },
  { number: 40, zone: "Carte du monde", location: "S'obtient sur la carte du monde, via un Marchand sur la petite île juste au sud-ouest du Monolithe, à droite du niveau 'Le Tableau'." },
  { number: 41, zone: "Terres oubliées", location: "S'obtient aux Terres oubliées. Au premier croisement avec la Femme gommée, allez vers la droite où se trouve un monstre chromatique et le journal." },
  { number: 42, zone: "Vieille Lumière", location: "S'obtient à Vieille Lumière. Depuis le point de sauvegarde 'Jardins du Manoir', passez devant les jardins et allez vers une nouvelle petite zone. Le journal est au pied d'une épée dorée." },
  { number: 43, zone: "Carte du monde", location: "Se trouve sur la carte du monde, à côté du Faucheur cultiste Chromatique." },
  { number: 44, zone: "Moisson dorée", location: "S'obtient à Moisson dorée. Après le point 'Creux des moissonneurs', prenez le chemin à droite de la statue au milieu de l'eau jusqu'au journal, au pied d'un cadavre de Névron." },
  { number: 45, zone: "Caverne écrasante", location: "S'obtient à la Caverne écrasante. Après avoir battu l'Arbuscule géant, montez la corde derrière lui et allez sur la gauche." },
  { number: 46, zone: "Dunes de Sirène", location: "S'obtient aux Dunes de Sirène. Après avoir parlé à Lune au camp dans l'Acte 3 et monté son niveau de relation à 5." },
  { number: 47, zone: "Carte du monde", location: "Se trouve sur la carte du monde, près d'un Bourgeon." },
  { number: 48, zone: "Carrière", location: "Se trouve à Carrière, au sud-est de la Gare de Monoco, près du Névron blanc." },
  { number: 49, zone: "Feuilles ambrées", location: "Se trouve à Feuilles ambrées. Parlez à la silhouette du Jeune garçon devant le premier point de sauvegarde, puis suivez la quête qui vous mène au journal." },
  { number: 50, zone: "Falaises de Rochevague", location: "S'obtient aux Falaises de Rochevague. À partir du point 'Temple de la Peintresse', allez tout droit, passez devant le bateau et allez à gauche au premier croisement." },
  { number: 51, zone: "Glacier ardent", location: "S'obtient à Glacier ardent. Après le point 'Gare prise dans la glace', prenez le chemin à droite du train et montez la pente jusqu'à la grande porte noire." },
  { number: 52, zone: "Village des Gestrals", location: "S'obtient au Village des Gestrals. Face à l'arène, allez vers la droite et faufilez-vous dans le petit chemin avant l'endroit où se trouve le docteur." },
  { number: 53, zone: "Petit Bourgeon", location: "S'obtient à Petit Bourgeon, tout au bout de ce petit niveau." },
  { number: 54, zone: "Grotte de Rochevague", location: "S'obtient dans la Grotte de Rochevague, dans l'arène où se trouve le Hexga Chromatique." },
  { number: 55, zone: "Sirène", location: "S'obtient à Sirène. Après le point 'Cours de Danse', montez les marches et le journal se trouve sur votre droite." },
  { number: 56, zone: "Falaises de Rochevague", location: "S'obtient aux Falaises de Rochevague. Après le premier point de sauvegarde, avancez, utilisez votre grappin et trouvez le journal au pied d'une petite statue sur votre gauche." },
  { number: 57, zone: "Terres oubliées", location: "S'obtient aux Terres oubliées, dans la zone truffée d'herbe verte en suivant le chemin derrière la silhouette de Femme gommée." },
  { number: 58, zone: "Vieille Lumière", location: "S'obtient automatiquement en complétant Vieille Lumière." },
  { number: 59, zone: "Moisson dorée", location: "S'obtient à Moisson dorée. Au dernier point 'Épaves de stalagmites jaunes', au lieu de monter vers l'arène finale, allez sur la gauche vers le chemin rouge." },
  { number: 60, zone: "Lumière", location: "S'obtient à Lumière (Acte 3). Rendez-vous à l'Opéra, dos à l'entrée allez à gauche, interagissez avec le vide. Demandez à Esquie de ramasser le journal dans l'eau." },
  { number: 61, zone: "L'Aspirante", location: "Se trouve à L'Aspirante, au pied de l'une des montgolfières que vous empruntez pour avancer dans le niveau." },
  { number: 62, zone: "Carte du monde", location: "Se trouve en extérieur dans la carte du monde, au nord du Village des Gestrals." },
  { number: 63, zone: "Sanctuaire ancien", location: "Se trouve à Sanctuaire ancien. Sur le chemin principal, devant un toit de bâtiment rond, prenez le chemin vers la gauche." },
  { number: 64, zone: "Carte du monde", location: "Se trouve en extérieur sur la carte du monde au sud-est de la première région du jeu." },
  { number: 65, zone: "Gare de Monoco", location: "S'obtient à la Gare de Monoco. Au hub principal où se trouvent les Grandies, dirigez-vous vers la sortie, traversez les rails et tournez à gauche." },
  { number: 66, zone: "Nid d'Esquie", location: "Se trouve au Nid d'Esquie. Après avoir donné sa pierre à Esquie, suivez le chemin qu'il a fabriqué. Le journal est juste après sur la droite." },
  { number: 67, zone: "Sirène", location: "Se trouve à Sirène, au pied des escaliers devant le long couloir vers le boss final." },
  { number: 68, zone: "Océan suspendu", location: "S'obtient sur le chemin principal de l'Océan suspendu." },
  { number: 69, zone: "Visages", location: "Se trouve à Visages. Dans la zone de Joie (chemin vert), devant à gauche derrière un groupe de Névrons." },
  { number: 70, zone: "Monolithe de la Peintresse", location: "S'obtient au Monolithe de la Peintresse, dans la reproduction de Lumière. Dans le marché aux fleurs, il y a un petit couloir au fond à droite menant à un chemin à coups de grappins." },
  { number: 78, zone: "Falaises de Rochevague", location: "Se trouve aux Falaises de Rochevague. Au début du niveau, au lieu de descendre vers le boss Rocher, montez la pente à droite et montez la corde." },
  { number: 81, zone: "Vallons fleuris", location: "S'obtient automatiquement aux Vallons fleuris." },
  { number: 84, zone: "Fontaine", location: "S'obtient à Fontaine, au bout du niveau." },
  
  // Journaux spéciaux
  { number: 0, name: 'Verso', zone: "Carte du monde", location: "S'obtient en extérieur sur la carte du monde, au nord-ouest des Terres oubliées derrière un groupe de Névrons." },
  { number: 0, name: 'Julie', zone: "Carte du monde", location: "S'obtient dans les restes d'un camp à quelques pas au-dessus du journal 'Verso'." },
  { number: 0, name: 'Aline', zone: "Monolithe de la Peintresse", location: "S'obtient via la porte de Manoir qui se trouve au niveau de la tombe de Gustave, dans le Monolithe de la Peintresse." },
  { number: 0, name: 'Renoir', zone: "Vieille Lumière", location: "S'obtient via la porte de Manoir qui se trouve dans les jardins du manoir à Vieille Lumière. Insérez-vous dans le trou dans le mur sur le côté gauche des jardins." },
  { number: 0, name: 'Inconnu', zone: "Divers", location: "Plusieurs journaux 'Inconnu' disponibles : à Visages (partie Colère via porte de Manoir), à L'Aspirante (en contrebas du point 'Salle des échelles'), et via le Tableau de la famille Dessendre." },
  { number: 0, name: 'Survivant', zone: "Vieille Lumière", location: "Se trouve à Vieille Lumière. Nécessite la Vieille clé récupérée dans le Prologue auprès de Colette. Dans les rues, tombez dans un cylindre vers le vide avec un trou." },
  { number: 0, name: 'Simon', zone: "L'Abîme", location: "Le dernier journal à obtenir dans le jeu, en battant Simon, le superboss du jeu, dans L'Abîme, le niveau secret caché au bout des Esquisses de Renoir." },
];
