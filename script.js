document.addEventListener('DOMContentLoaded', () => {
     const canvas = document.getElementById('drawing-canvas');
     const context = canvas.getContext('2d');
     let isDrawing = false;
     canvas.width = canvas.offsetWidth;
     canvas.height = canvas.offsetHeight;


     // Handle pointer events - apenas PEN desenha
     canvas.addEventListener('pointerdown', (e) => {
          if (e.pointerType === 'pen') {
               e.preventDefault();
               const rect = canvas.getBoundingClientRect();
               const x = e.clientX - rect.left;
               const y = e.clientY - rect.top;

               context.beginPath();
               context.moveTo(x, y);
               isDrawing = true;
          }
          // Touch passa direto sem preventDefault, permitindo scroll
     });

     canvas.addEventListener('pointermove', (e) => {
          if (e.pointerType === 'pen' && isDrawing) {
               const rect = canvas.getBoundingClientRect();
               const x = e.clientX - rect.left;
               const y = e.clientY - rect.top;

               context.strokeStyle = '#600039';
               context.lineWidth = 3;
               context.lineCap = 'round';
               context.lineJoin = 'round';
               context.lineTo(x, y);
               context.stroke();
          }
     });

     canvas.addEventListener('pointerup', (e) => {
          if (e.pointerType === 'pen') {
               isDrawing = false;
          }
     });

     canvas.addEventListener('pointerleave', (e) => {
          if (e.pointerType === 'pen') {
               isDrawing = false;
          }
     });

     canvas.addEventListener('pointercancel', (e) => {
          if (e.pointerType === 'pen') {
               isDrawing = false;
          }
     });
});
