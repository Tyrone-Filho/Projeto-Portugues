document.addEventListener('DOMContentLoaded', () => {
     const canvas = document.getElementById('drawing-canvas');
     const context = canvas.getContext('2d');
     let isDrawing = false;

     // Initialize canvas size
     function initializeCanvas() {
          canvas.width = canvas.offsetWidth;
          canvas.height = canvas.offsetHeight;
     }

     // Initialize on load and resize
     initializeCanvas();

     // Handle pointer events
     canvas.addEventListener('pointerdown', (e) => {
          if (e.pointerType === 'touch') {
               canvas.style.touchAction = "auto";
               return;
          }
          canvas.style.touchAction = "none";
          const rect = canvas.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          context.beginPath();
          context.moveTo(x, y);
          isDrawing = true;
     });

     canvas.addEventListener('pointermove', (e) => {
          if (!isDrawing) {
               return;
          }
          if (e.pointerType === 'touch'){
               canvas.style.touchAction = "auto";
               return;
          }
          canvas.style.touchAction = "none";
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
});
