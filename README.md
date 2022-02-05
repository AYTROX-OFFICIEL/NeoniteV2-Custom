<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->

<p align="center">
	<img align="center" src="https://cdn.discordapp.com/attachments/838613584970776608/839187334515130408/neonitev2.png" alt="Logo" width="216" height="127">
</p>
<p align="center">A Fortnite private server/lobby emulator allowing you to design your dream Fortnite experience.</p>
<p align="center">Use code Neonite in the item shop! #EpicPartner</p>
<p align="center">
	<a href="https://github.com/AYTROX-OFFICIEL/NeoniteV2-Custom/archive/refs/heads/main.zip">Downloads</a> | 
	<a href="https://github.com/AYTROX-OFFICIEL/NeoniteV2-Custom/issues">Report a Bug</a> |
	<a href="https://dsc.gg/AYTROX">Discord Server</a> | 
	<a href="https://www.neonitedev.live">Website</a>
</p>



<!-- Home -->
## Home

<ol>
    <li><a href="#a-propos-neonite-v2-custom">A Propos Neonite V2 Custom</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#config">Config</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#credits">Credits</a></li>
    <li><a href="#license">License</a></li>
</ol>

<!-- A Propos NEONITEV2 Custom-->
## A Propos Neonite V2 Custom

Neonite V2 est un serveur privé populaire écrit en Node.js, visant à fournir un programme amusant mais facile à utiliser pour les personnes souhaitant personnaliser leur expérience Fortnite. Ce projet a été conçu pour le plaisir et ne vise en aucun cas à nuire au jeu original. Si vous êtes un employé d'Epic Games et que vous rencontrez des problèmes avec ce projet, n'hésitez pas à nous contacter via votre adresse e-mail professionnelle officielle.
Avec l'accord d'Epic Games Inc.

<!-- INSTALL -->
## Installation

- Installer la dernière version de **[Node.js](https://nodejs.org/en/download/current/)**. 
- (Téléchrager la dernière version de **[.NET Runtime](https://dotnet.microsoft.com/download)** Si Neonite V2 Custom ne fonctionne pas.)
- Télécharger **[Neonite V2 Custom](https://github.com/AYTROX-OFFICIEL/NeoniteV2-Custom/releases)**.
- Extraire le fichier.
- Ouvrir `install.bat` et attendre la fin de l'installation. (Uniquement requis pour la première utilisation!)	
- Ouvrir `run.exe`, et attendre qui s'affiche `[Neonite]: v2 est connecté sur le port: 5595!` (Ne pas fermer sinon Neonite V2 Custom ne fonctionnera pas!)
- Ouvrir le launcher `NeoniteLauncher.exe`.
- Entré votre Pseudo (Ne pas utilisé de charactères spécieaux!)	
- Cliqué sur launch et amusé-vous!
- si vous voulez avoir touts les skins attendre que le message s'affiche `[Générateur] les cosmétiques ont bien été changé dans ./aytrox > profile_athena.json`
- aller dans le fichier _**aytrox**_ ouvrir le fichier profile_athena.json et entré votre pseudo sur la ligne "_id" et "accountId"<br>

ex:
```json
{
 >>>"_id": "",
 "Update": "profile by AYTROX & ARWENT",
 "created": "",
 "updated": "",
 "rvn": 24,
 "wipeNumber": 1,
 >>>"accountId": "",
 "profileId": "athena",
 "version": "neonite_2",
 "items": {
  "b4391aee-719c-4a32-a448-862f53b86687": {
   "templateId": "Quest:quest_c3_discover_landmarks",
   "attributes": {
    "creation_time": "2021-12-05T12:08:18.975Z",
    "completion_visit_location_ch3_lm_beachcarpark": 1,
    "completion_visit_location_ch3_lm_windmillfarm": 1,
    "completion_visit_location_ch3_lm_smallmine": 1,
    "completion_visit_location_ch3_lm_lighthouse": 1,
    "completion_visit_location_ch3_lm_crazycactus": 1,
    "xp_reward_scalar": 1,
    "quest_pool": "",
```
- Ensuite copier le fichier `profile_athena.json`, Ensuite aller dans le Fichier Config>Votre pseudo>profiles> et remplacer l'ancien par le nouveau avec un coller.

<!-- Config -->
## Config

Pour les configuration Tous se passe dans le fichier `config.json`
```json
{
    "option": "1",
    "new": "2"
}
```
- C'est extraiment simple si vous voulez avoir les nouveau skins effacer le 1 dans "option" puis entrer "2", si vous voulez tout les skins entrer "1"
- les "new" ses la même chose vous entrer "1" si vous voulez avoir l'actualité du  jour le fond de la saison. Et entrer "2" si vous voulez un Fortnite Custom.

<!-- CONTACT -->
## Contact

Email: <a href="mailto:contact@neonite.dev">contact@neonite.dev</a>

Discord Server: [Neo](https://discord.gg/vM8p3mpWBS)

Discord si beugs de language "Fr": [AYTROX](https://dsc.gg/AYTROX)


<!-- CREDITS -->
## Credits

### Used APIs
<img src="https://fortnite-api.com/assets/img/logo.png" width="15" title="Fortnite-API"> [Fortnite-API](https://fortnite-api.com/) developed by [Officer](https://github.com/NotOfficer) <br>
<img src="https://api.nitestats.com/v1/static/ns-logo.png" width="15" title="NiteStats-API"> [NiteStats API](https://nitestats.com/) developed by [VastBlast](https://github.com/VastBlast)

### Contributors

| Contributor | Helped with |
| ----------- | ----------- |
| [Kemo](https://github.com/kem0o)  | Original creator and maintainer |
| [Beat-YT](https://github.com/Beat-YT)   | Current maintainer |
| [Amrsatrio](https://github.com/Amrsatrio)  | Write-up of profile.js and API-reversing |
| [Kyiro](https://github.com/Kyiro)   | Pull requests |
| [iDrDoge](https://github.com/iDrDoge)   | Pull requests |
| [Tim](https://github.com/timjans01)   | Improving this awesome page |
| [Ayal](https://github.com/AyalX)   | Management |
| [Jacobb](https://github.com/Jacobb626)   | Pull requests |
| [AYTROX](https://aytrox.com) | Custom |
| [ARWENT](https://github.com/jokarwent) | Custom |



<!-- LICENSE -->
## License

Ce projet et lisensié par [Neo License](https://github.com/NeoniteDev/NeoniteV2/blob/main/LICENSE)
