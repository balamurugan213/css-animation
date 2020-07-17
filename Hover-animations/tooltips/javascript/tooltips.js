var anchors = document.querySelectorAll('.anchor-tooltips')

anchors.forEach(function(anchor){
	var tooltipText = anchor.getAttribute('title'),
		tooltip = document.createElement('span')
	tooltip.className = 'title-tooltip'
	tooltip.innerHTML = tooltipText
	anchor.appendChild(tooltip)
})
