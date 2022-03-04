const formulaire = document.getElementById('formulaire');
    
formulaire.onsubmit = submit;

// lister ensemble des taches saisies

    function submit(event) {
        event.preventDefault();
            
        const nomTache = document.getElementById('nomTache');
        const categorie = document.getElementById('categorie');
        const date = document.getElementById('date');
    
        let tacheFaire = document.getElementById('tacheFaire');
        
        //var chose = tacheFaire.insertBefore(document.createElement("div" ),tacheFaire.firstChild);
        //chosei.innerHTML += '<button onClick="supr'+i+'()"> <ul><li>' + nomTache.value + ' ' + categorie.value + ' ' + date.value + '</li></ul></button>'; 
    
        tacheFaire.innerHTML += '<button onClick="supr()"> <ul><li>' + nomTache.value + ' ' + categorie.value + ' ' + date.value + '</li></ul></button>'; 
    
    }; 

// bouton pour réinitialiser liste tache (pb : apres plus possible de reecrire des taches)

function supprimer() {
    tacheFaire.remove();
} 




    





    