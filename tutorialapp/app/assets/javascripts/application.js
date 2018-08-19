// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
$(document).ready(function(){
	$('[data-js-hide-link').click(function(event){
	console.log('You clicked the Hide link');
    debugger
    $(this).parents('li').hide();
	event.preventDefault();
	});
  });
$('[data-js-search]').change(function(event) {
    search_term = $(this).val();
    alert('You are searching for ' + search_term);
  });
