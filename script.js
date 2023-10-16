function toggleCircuit(circuitId) {
    const circuitStatus = document.getElementById(circuitId + '-status');
    if (circuitStatus.textContent === 'Ligado') {
        circuitStatus.textContent = 'Desligado';
    } else {
        circuitStatus.textContent = 'Ligado';
    }
}