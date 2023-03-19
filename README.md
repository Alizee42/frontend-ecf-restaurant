
###  Frontend-ecf-restaurant

- [x] HTML5 
- [x] CSS3 
- [x] Bootstrap
- [x] JavaScript (Angular Version 15.1.4)
- [x] Netlify

# Netlify Webapp

https://main--subtle-alpaca-8698c9.netlify.app/

![Quai Antique Webapp](https://raw.githubusercontent.com/Alizee42/frontend-ecf-restaurant/main/src/assets/images/logo/logo3.jpg)


#### Installation En local

###### Etape 1: Cloner le projet front-end
[Download](https://github.com/Alizee42/frontend-ecf-restaurant)
```
git clone https://github.com/Alizee42/frontend-ecf-restaurant.git
```

###### Etape 2: Installer les dependences
Ouvrir le terminal dans le projet frontend-ecf-restaurant
Ensuite lancer la commande
```
yarn
```


###### Etape 3: Configuration et connection au back-end
Modifier le BASE_URL en insérant le port de démarrage du back-end
dans les fichiers de services
``` 
Se rendre dans le dossier "src/app/core/service/
Ensuite modifier l'url de connection au back-end dans les ficheirs de service
private baseUrl = 'https://localhost:<port_back_end>/api/rest/v1';
``` 

###### Etape 6: Demarrer le projet
Saisir la commande
``` 
ng serve

Naviguer sur le lien `http://localhost:4200/`
``` 


###### Etape 7: Accès de connexion à l'espace administrateur
Saisir
``` 
Email: quaiantique@admin.com
Mot de passe: 12345
``` 



