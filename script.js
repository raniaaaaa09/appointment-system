document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formid');
    const appointmentBody = document.getElementById('appointmentBody');

    // CHARGEMENT : On récupère ce qui est stocké
    let savedData = localStorage.getItem('myAppointments');
    let appointments = savedData ? JSON.parse(savedData) : [];
    
    // Affichage immédiat au chargement de la page
    renderTable();

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        let genderValue = "";
        document.querySelectorAll('input[name="sexe"]').forEach(radio => {
            if (radio.checked) genderValue = radio.value;
        });

    

    // 3. CRÉATION (Seulement si on a passé l'étape précédente)
    const appointment = {
        name: document.getElementById('nom').value,
        age: document.getElementById('age').value,
        gender: document.querySelectorAll('input[name="sexe"]').genderValue,
        department: document.getElementById('service').value,
        date: document.getElementById('date').value
    };

        appointments.push(appointment);

        // SAUVEGARDE : On enregistre la liste mise à jour
        localStorage.setItem('myAppointments', JSON.stringify(appointments));

        renderTable();
        form.reset();
    });

    function renderTable() {
        appointmentBody.innerHTML = ""; 
        appointments.forEach(app => {
            appointmentBody.innerHTML += `
                <tr>
                    <td>${app.name}</td>
                    <td>${app.age}</td>
                    <td>${app.gender}</td>
                    <td>${app.department}</td>
                    <td>${app.date}</td>
                   
                </tr>`;
        });
    }
});