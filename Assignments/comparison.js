const energy_comparison = [
    {type: "Hydro", pros: ["Renewable source of energy", "Low greenhouse gas emissions", "Reliable and consistent power generation"], cons: ["Environmental impact on aquatic ecosystems", "High initial costs for dam construction", "Limited suitable locations for hydroelectric plants"]},
    {type: "Geothermal", pros: ["Renewable and sustainable energy source", "Low emissions of greenhouse gases", "Provides a stable and reliable power supply"], cons: ["Limited to specific geographic locations", "High upfront costs for drilling and infrastructure", "Potential for induced seismic activity"]},
    {type: "Nuclear", pros: ["High energy density and efficiency", "Low greenhouse gas emissions during operation", "Provides a stable and reliable power supply"], cons: ["Radioactive waste disposal challenges", "High initial costs for construction and decommissioning", "Risk of nuclear accidents and safety concerns"]},
    {type: "Solar", pros: ["Renewable and abundant energy source", "Low operating costs after installation", "Reduces dependence on fossil fuels"], cons: ["Intermittent energy production (depends on sunlight)", "High initial costs for installation", "Requires significant space for large-scale installations"]},
    {type: "Wind", pros: ["Renewable and clean energy source", "Low operating costs after installation", "Reduces greenhouse gas emissions"], cons: ["Intermittent energy production (depends on wind)", "Noise and visual impact on local communities", "Potential harm to wildlife, especially birds and bats"]},
    {type: "Oil", pros: ["High energy density and portability", "Established infrastructure for extraction and distribution", "Reliable source of energy for transportation"], cons: ["Non-renewable resource with finite supply", "Significant contributor to greenhouse gas emissions", "Environmental risks from spills and leaks"]},
    {type: "Gas", pros: ["Cleaner burning than coal and oil", "Flexible and efficient for power generation", "Abundant supply in many regions"], cons: ["Non-renewable resource with finite supply", "Methane leaks contribute to greenhouse gas emissions", "Infrastructure vulnerabilities (pipelines, storage)"]},
    {type: "Biomass", pros: ["Renewable energy source", "Utilizes waste materials", "Can reduce greenhouse gas emissions"], cons: ["Land use competition with food production", "Emissions from combustion can be significant", "Efficiency varies based on feedstock quality"]},
    {type: "Coal", pros: ["Abundant and widely available resource", "Established infrastructure for extraction and use", "Provides stable and reliable power generation"], cons: ["High greenhouse gas emissions", "Significant air pollution and health impacts", "Environmental degradation from mining activities"]}
]
//left comparison code
document.addEventListener('DOMContentLoaded', () => {
    const leftCompareSelect = document.getElementById('left-compare');
    const displayLeftComparison = document.getElementById('left-compare-info');

    if (!leftCompareSelect || !displayLeftComparison) {
        console.error('Required elements not found:');
        console.error('left-compare:', leftCompareSelect);
        console.error('left-compare-info:', displayLeftComparison);
        return;
    }

    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Energy Type';
    leftCompareSelect.appendChild(defaultOption);

    // Populate select options
    energy_comparison.forEach(comparison => {
        const option = document.createElement('option');
        option.value = comparison.type;
        option.textContent = comparison.type;
        leftCompareSelect.appendChild(option);
    });

    leftCompareSelect.addEventListener('change', (e) => {
        const selectedType = e.target.value;
        const selectedEnergy = energy_comparison.find(energy => energy.type === selectedType);
        
        if (selectedEnergy) {
            let prosConsHTML = '<div class="comparison-content">';
            
            prosConsHTML += '<h4>Pros:</h4><ul>';
            selectedEnergy.pros.forEach(pro => {
                prosConsHTML += `<li>${pro}</li>`;
            });
            prosConsHTML += '</ul>';
            
            prosConsHTML += '<h4>Cons:</h4><ul>';
            selectedEnergy.cons.forEach(con => {
                prosConsHTML += `<li>${con}</li>`;
            });
            prosConsHTML += '</ul></div>';

            displayLeftComparison.innerHTML = `
                <h3>${selectedEnergy.type} Energy</h3>
                ${prosConsHTML}
            `;
        }
    });
});

// Right comparison code
document.addEventListener('DOMContentLoaded', () => {
    const rightCompareSelect = document.getElementById('right-compare');
    const displayRightComparison = document.getElementById('right-compare-info');

    if (!rightCompareSelect || !displayRightComparison) {
        console.error('Required elements not found:');
        console.error('right-compare:', rightCompareSelect);
        console.error('right-compare-info:', displayRightComparison);
        return;
    }

    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Energy Type';
    rightCompareSelect.appendChild(defaultOption);

    // Populate select options
    energy_comparison.forEach(comparison => {
        const option = document.createElement('option');
        option.value = comparison.type;
        option.textContent = comparison.type;
        rightCompareSelect.appendChild(option);
    });

    rightCompareSelect.addEventListener('change', (e) => {
        const selectedType = e.target.value;
        const selectedEnergy = energy_comparison.find(energy => energy.type === selectedType);
        
        if (selectedEnergy) {
            let prosConsHTML = '<div class="comparison-content">';
            
            prosConsHTML += '<h4>Pros:</h4><ul>';
            selectedEnergy.pros.forEach(pro => {
                prosConsHTML += `<li>${pro}</li>`;
            });
            prosConsHTML += '</ul>';
            
            prosConsHTML += '<h4>Cons:</h4><ul>';
            selectedEnergy.cons.forEach(con => {
                prosConsHTML += `<li>${con}</li>`;
            });
            prosConsHTML += '</ul></div>';

            displayRightComparison.innerHTML = `
                <h3>${selectedEnergy.type} Energy</h3>
                ${prosConsHTML}
            `;
        }
    });
});


//text to speak code
function speakText(id="") {
    const element = document.getElementById(id);
    if (!element) {
        console.error('Element not found:', id);
        return;
    }

    // Get content based on the actual HTML structure
    const titleText = element.querySelector('h3')?.textContent || '';
    
    // Get all list items within the comparison-content div
    const lists = element.querySelectorAll('.comparison-content ul');
    const prosList = lists[0]?.querySelectorAll('li');
    const consList = lists[1]?.querySelectorAll('li');
    
    // Convert NodeLists to text
    const prosText = prosList ? Array.from(prosList).map(li => li.textContent).join('. ') : '';
    const consText = consList ? Array.from(consList).map(li => li.textContent).join('. ') : '';
    
    const textToSpeak = `${titleText}. Pros: ${prosText}. Cons: ${consText}`;
    console.log('Speaking:', textToSpeak); // Debug log to see what's being read

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'en-US';
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;
    speechSynthesis.speak(utterance);
}

function stopSpeaking() {
    speechSynthesis.cancel();
}