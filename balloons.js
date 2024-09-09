document.addEventListener("DOMContentLoaded", function() {
  const animations = [
    "animate__bounce", "animate__flash", "animate__pulse", "animate__rubberBand",
    "animate__shakeX", "animate__shakeY", "animate__swing", "animate__tada",
    "animate__wobble", "animate__jello", "animate__heartBeat"
  ];
  
  // Randomize animation on the greeting element
  const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
  const greetingElement = document.querySelector('.greeting');
  greetingElement.classList.add('animate__animated', randomAnimation);

  // Uncheck all boxes by default
  document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);

  // Check/Uncheck All functionality
  const checkAllButton = document.getElementById('check-all');
  checkAllButton.addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('.form-check-input');
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
    checkboxes.forEach(checkbox => checkbox.checked = !allChecked);
    checkboxes.forEach(checkbox => {
      const img = document.getElementById(checkbox.id + 'Img');
      if (checkbox.checked) {
        img.style.visibility = 'visible';
        img.classList.add('animate__animated', 'animate__bounceInDown');
        img.classList.remove('animate__bounceOutUp');
      } else {
        img.style.visibility = 'hidden';
      }
    });
  });

  // Balloon hover effect (change h1 color)
  const balloonLabels = document.querySelectorAll('.form-check-label');
  balloonLabels.forEach(label => {
    label.addEventListener('mouseenter', function() {
      const color = label.textContent.split(' ')[0].toLowerCase();
      greetingElement.style.color = color;
    });
    label.addEventListener('mouseleave', function() {
      greetingElement.style.color = 'slategray';
    });
  });

  // Check/Uncheck individual balloons
  document.getElementById('checkbox-card').addEventListener('change', function(e){
    if (e.target.classList.contains('form-check-input')) {
      const elem = document.getElementById(e.target.id + 'Img');
      elem.style.visibility = "visible";
      elem.classList.remove("animate__bounceInDown", "animate__bounceOutUp");
      e.target.checked ?
        elem.classList.add("animate__bounceInDown") :
        elem.classList.add("animate__bounceOutUp");
    }
  });
});