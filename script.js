document.addEventListener('DOMContentLoaded', () => {
     const canvas = document.getElementById('drawing-canvas');
     const context = canvas.getContext('2d');
     let isDrawing = false;
     canvas.width = canvas.offsetWidth;
     canvas.height = canvas.offsetHeight;
     

     // Handle pointer events
     canvas.addEventListener('pointerdown', (e) => {
          if (e.pointerType !== 'pen') {
               return;
          }
          e.preventDefault();
          const rect = canvas.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          context.beginPath();
          context.moveTo(x, y);
          isDrawing = true;
     });

     canvas.addEventListener('pointermove', (e) => {
          if (e.pointerType !== 'pen' || !isDrawing) {
               return;
          }
          const rect = canvas.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          context.strokeStyle = '#600039';
          context.lineWidth = 3;
          context.lineCap = 'round';
          context.lineJoin = 'round';
          context.lineTo(x, y);
          context.stroke();
     });

     canvas.addEventListener('pointerup', () => {
          isDrawing = false;
     });

     canvas.addEventListener('pointerleave', () => {
          isDrawing = false;
     });
     canvas.addEventListener('pointercancel', () => {
          isDrawing = false;
     });
});
