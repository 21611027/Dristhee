document.getElementById('advisor-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const budget = document.getElementById('budget').value;
    const goal = document.getElementById('goal').value;
    const result = document.getElementById('result');
  
    let advice = '';
  
    if (!budget || !goal) {
      advice = 'Please select both your budget and business goal.';
    } else if (budget === 'low' && goal === 'growth') {
      advice = 'Consider low-cost digital marketing and lean operations to grow sustainably.';
    } else if (budget === 'medium' && goal === 'growth') {
      advice = 'Explore strategic partnerships and moderate ad spend to scale up.';
    } else if (budget === 'high' && goal === 'growth') {
      advice = 'Invest in staff, tech upgrades, and a full-scale marketing campaign.';
    } else if (goal === 'stability') {
      advice = 'Focus on improving customer retention and operational efficiency.';
    } else if (goal === 'marketing') {
      advice = 'Create a strong online presence and consider paid ads tailored to your audience.';
    } else {
      advice = 'Try combining different strategies depending on your market.';
    }
  
    result.textContent = advice;
  });
  