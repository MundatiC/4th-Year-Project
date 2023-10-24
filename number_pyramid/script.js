document.addEventListener('DOMContentLoaded', function() {
    let pyramidBlocks = document.querySelectorAll('.block');
    let target = document.querySelector('.target');
    let message = document.querySelector('.message');
    let moveUpButton = document.getElementById('moveUp');
    let moveDownButton = document.getElementById('moveDown');

    let currentBlock = 0;

    // Calculate the target number
    let targetNumber = 0;
    for (let i = 1; i <= pyramidBlocks.length; i++) {
        targetNumber += i;
    }

    // Update the target text
    target.textContent = 'Target: ' + targetNumber;

    moveUpButton.addEventListener('click', function() {
        if (currentBlock < pyramidBlocks.length - 1) {
            currentBlock++;
            updateSelection();
        }
    });

    moveDownButton.addEventListener('click', function() {
        if (currentBlock > 0) {
            currentBlock--;
            updateSelection();
        }
    });

    function updateSelection() {
        pyramidBlocks.forEach((block, index) => {
            if (index === currentBlock) {
                block.classList.add('selected');
            } else {
                block.classList.remove('selected');
            }
        });

        // Check if the current selection matches the target
        let sum = 0;
        for (let i = 0; i <= currentBlock; i++) {
            sum += currentBlock - i + 1;
        }

        if (sum === targetNumber) {
            message.textContent = 'Congratulations! You reached the target!';
        } else {
            message.textContent = '';
        }
    }
});
