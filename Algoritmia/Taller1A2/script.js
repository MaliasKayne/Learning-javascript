const birthDateInput = document.getElementById('birthYear');
const calculateButton = document.getElementById('calculateBtn');
const spanResultado = document.getElementById('result');
const spanMajorityStatus = document.getElementById('majorityStatus');

/**
 * Calcula la edad de una persona basándose en su fecha de nacimiento.
 * @param {Date} birthDate - El objeto Date de la fecha de nacimiento.
 * @returns {number} La edad calculada.
 */
function calculateAge(birthDate) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();

    let age = currentYear - birthYear;

    // Comprobar si el cumpleaños de este año ya pasó.
    // Si el mes actual es menor que el mes de nacimiento, o si es el mismo mes
    // pero el día actual es menor que el día de nacimiento, entonces resta 1 a la edad.
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }

    return age;
}

/**
 * Muestra si la persona es mayor de edad (>= 18).
 * @param {number} age - La edad de la persona.
 */
function checkMajority(age) {
    spanMajorityStatus.innerHTML = age >= 18 ? "Sí" : "No";
}

calculateButton.addEventListener('click', () => {
    const birthDateValue = birthDateInput.value;
    if (!birthDateValue) return; // No hacer nada si no se ha seleccionado fecha
    const birthDate = new Date(birthDateValue);
    const age = calculateAge(birthDate);
    spanResultado.innerHTML = age;
    checkMajority(age);
});
