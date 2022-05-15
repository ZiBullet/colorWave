let boxes = document.querySelectorAll('.box')

boxes.forEach(box => {
    box.onclick = () => {
        if (box.classList.contains('animation')) {
            box.classList.remove('animation')
        } else {
            box.classList.add('animation')
        }
    }
});