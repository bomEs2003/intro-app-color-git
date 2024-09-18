document.addEventListener('DOMContentLoaded', () => {
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    
    
    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');
    
    const redValue = document.getElementById('redValue');
    const greenValue = document.getElementById('greenValue');
    const blueValue = document.getElementById('blueValue');
    
    const colorDisplay = document.getElementById('colorDisplay');
    const hexValue = document.getElementById('hexValue');
    
    const colorPicker = document.getElementById('colorPicker');
    
    function updateColor() {
        const r = parseInt(redInput.value);
        const g = parseInt(greenInput.value);
        const b = parseInt(blueInput.value);
        
        redRange.value = r;
        greenRange.value = g;
        blueRange.value = b;
        
        redValue.textContent = r;
        greenValue.textContent = g;
        blueValue.textContent = b;
        
        const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        
        colorDisplay.style.backgroundColor = hex;
        hexValue.textContent = hex;
        colorPicker.value = hex;
    }
    
    function syncInputs() {
        redInput.addEventListener('input', updateColor);
        greenInput.addEventListener('input', updateColor);
        blueInput.addEventListener('input', updateColor);
    }
    
    function syncRanges() {
        redRange.addEventListener('input', () => {
            redInput.value = redRange.value;
            updateColor();
        });
        greenRange.addEventListener('input', () => {
            greenInput.value = greenRange.value;
            updateColor();
        });
        blueRange.addEventListener('input', () => {
            blueInput.value = blueRange.value;
            updateColor();
        });
    }
    
    function syncColorPicker() {
        colorPicker.addEventListener('input', () => {
            const hex = colorPicker.value;
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            
            redInput.value = r;
            greenInput.value = g;
            blueInput.value = b;
            
            redRange.value = r;
            greenRange.value = g;
            blueRange.value = b;
            
            redValue.textContent = r;
            greenValue.textContent = g;
            blueValue.textContent = b;
            
            colorDisplay.style.backgroundColor = hex;
            hexValue.textContent = hex;
        });
    }
    
    syncInputs();
    syncRanges();
    syncColorPicker();
    
    updateColor();  // Inicializa el color
});
