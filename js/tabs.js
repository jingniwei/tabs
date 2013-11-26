$(document).ready(function() {
	$('.sos-tab-content-container').find('.active').show();
	$('.sos-nav-tab li').click(function(){
		var selectedContentTab = $(this);
		var selectedContentTabId = selectedContentTab.data('targetName');
		var navBar = $(this).parent();
		var activeTab = navBar.find('.active');
		var activeTabId = activeTab.data('targetName');
		if(selectedContentTabId !== activeTabId){
			activeTab.removeClass('active');
			selectedContentTab.addClass('active');
			$('.sos-tab-content-container').find('.active').hide();
		    $('.sos-tab-content-container').find('.active').removeClass('active');
		    console.log('change active tab ' + activeTabId +' to ' +selectedContentTabId );
		    var selectedContent = $('.sos-tab-content-container').find('[data-target='+selectedContentTabId+']');
		    console.log(selectedContent);
		    selectedContent.addClass('active');
		    selectedContent.show();
		}
	});
});