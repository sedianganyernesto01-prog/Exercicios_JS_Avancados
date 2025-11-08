let progress = 0;
    const progressBar = document.getElementById('progressBar');
    const status = document.getElementById('status');

    const interval = setInterval(() => {
      if (progress >= 100) {
        clearInterval(interval);
        status.textContent = 'Download completo';
      } else {
        progress++;
        progressBar.style.width = progress + '%';
        status.textContent = progress + '%';
      }
    }, 50); 