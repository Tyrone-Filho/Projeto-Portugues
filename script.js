document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('drawing-canvas');
    const context = canvas.getContext('2d');
    let isDrawing = false;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // ✅ Detecta o tipo ANTES de tocar, ao apenas passar por cima
    canvas.addEventListener('pointerover', (e) => {
        if (e.pointerType === 'pen') {
            canvas.style.touchAction = 'none';
        } else {
            canvas.style.touchAction = 'auto';
        }
    });

    canvas.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'pen') {
            e.preventDefault();
            canvas.setPointerCapture(e.pointerId);
            const rect = canvas.getBoundingClientRect();
            context.beginPath();
            context.moveTo(e.clientX - rect.left, e.clientY - rect.top);
            isDrawing = true;
        }else{
            canvas.style.touchAction = 'auto';
        }
    });

    canvas.addEventListener('pointermove', (e) => {
        if (e.pointerType === 'pen' && isDrawing) {
            e.preventDefault();
            const rect = canvas.getBoundingClientRect();
            context.strokeStyle = '#600039';
            context.lineWidth = 3;
            context.lineCap = 'round';
            context.lineJoin = 'round';
            context.lineTo(e.clientX - rect.left, e.clientY - rect.top);
            context.stroke();
        }
    });

    const stopDrawing = (e) => {
        if (e.pointerType === 'pen') {
            isDrawing = false;
        }
    };

    canvas.addEventListener('pointerup', stopDrawing);
    canvas.addEventListener('pointerleave', stopDrawing);
    canvas.addEventListener('pointercancel', stopDrawing);
});