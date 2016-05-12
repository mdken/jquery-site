$(document).ready(function() {
	$("#content").addClass("content-background1");
	$("#content").append("<p>Whether your goals are to drive sales promotions, reward customer loyalty or employee behavior, our restaurant is the right solution for you.</p>");
	$("#content").append("<p>Professional chefs made menu of diversity of traditional and modern type of meals with the full flavor dishes.	The offer include traditional soups, great selection of vegetarian dishes and dishes with different types  of meat.	</p>")
	$("p").addClass("njesra");

	
	$("ul li:nth-child(1)").click(function() {
		$("#content").empty();
		$("#content").removeClass();
		$("#content").addClass("content-background1");
		$("#content").append("<p>Whether your goals are to drive sales promotions, reward customer loyalty or employee behavior, our restaurant is the right solution for you.</p>");
		$("#content").append("<p>Professional chefs made menu of diversity of traditional and modern type of meals with the full flavor dishes.	The offer include traditional soups, great selection of vegetarian dishes and dishes with different types  of meat.	</p>")
		$("p").addClass("njesra");
	});

	$("ul li:nth-child(2)").click(function() {
		$("#content").empty();
		$("#content").removeClass();
		$("#content").addClass("content-background2");
		$("#content").append("<ul>");
		$("#content ul").addClass("menu");
		$(".menu").append("<li>Smoked Shellfish, Bacon Sage Oil</li>");
		$(".menu").append("<li>Sweet Gem, Beetroot Crumbs, Vegetables Raw and Cooked</li>");
		$(".menu").append("<li>Sweet and Sour Eggplant, Celery</li>");
		$(".menu").append("<li>Blackberry Jelly, Pickled Plum, Brioche</li>");
		$(".menu").append("<li>Bell Pepper Chow Chow</li>");
		$(".menu").append("<li>Escargot, Pork Belly, Watercress Garlic Emulsion</li>");
		$(".menu").append("<li>East and West Dungeness Crab Meat, Mustard Fruit Relish</li>");
		$(".menu").append("<li>Potato Bar, Spinach and Kale Soubise, View Signature Steak Sauce</li>");
	});

	$("ul li:nth-child(3)").click(function() {
		$("#content").empty();
		$("#content").removeClass();
		$("#content").addClass("content-background3");
		$("#content").append('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6220.566207451885!2d-27.150189449999964!3d38.780143850000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0b45d821c477055d%3A0xa9b073137fd8fc64!2s9760+Vila+Nova%2C+Portugal!5e0!3m2!1sen!2srs!4v1427876618206" width="450" height="400" frameborder="0" style="border:0"></iframe>')
	});

});