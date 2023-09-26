$(function () {
									$('.toggle-menu').click(function () {
										$('.exo-menu').toggleClass('display');

									});

								});

								jQuery(document).ready(function () {
									if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {

										var listingFooter = jQuery('<!--AboveMedia Footer Content Starts --> <!-- Back to top--> <style> .button-row2 a { padding: 0.9em; background-color: rgba(18, 42, 63, 0.95); color: #fff; text-decoration: none; border-radius: 26px; border: 1px solid #275c6f; } #toTop { padding: 5px 3px; color: #fff; position: fixed; bottom: 50px; right: calc(50% - 60px); display: none; } @media only screen and (min-width: 1444px) { #toTop { display: none !important; } } </style> <div id="toTop" class="button-row2 align-center"><a href="#Top">Back to Top</a> </div> <div class="secondaryBackground"> <div class="mainBackground"> <div id="mid-footer"> <div class="footer-flexContainer"> <div class="footer-flex footer-left"> <p class="h2like">Go Punta Cana Real Estate</p> <br /> <p><strong><a href="tel:+18095520177">+1 809 552 0177</a></strong> Office</p> <p>Av. Alemania, Esq. El Dorado</p> <p>Plaza Coral Village #207</p> <p>Los Corales, Bavaro, Punta Cana</p> <p>Dominican Republic</p> <div class="footer-social"> <h3>Follow Us:</h3> <a href="https://www.facebook.com/gopuntacanarealestate2007" target="_blank"><i class="fab fa-facebook-f socials"></i></a> <a href="https://www.youtube.com/channel/UC6JU7EophqeFckXlaUgGJPQ" target="_blank"><i class="fab fa-youtube socials"></i></a> <a href="https://www.instagram.com/gopuntacanarealestate/" target="_blank"><i class="fab fa-instagram socials"></i></a> </div> </div> <div class="footer-flex no-mobile"> <img src="https://mediavault.point2.com/p2a/htmltext/725d/0ab8/4050/d3a501469c5bdee8aa59/original.png" alt=""> <p><img class="realtor" alt="AMPI - Realtor" src="https://mediavault.point2.com/p2a/htmltext/1441/6aae/9784/e0ac607edb5e4232d4a9/original.png" initialwidth="220"></p> <p>Copyright © 2022 GoPuntaCana Real Estate. All Rights Reserved.</p> </div> <div class="footer-flex footer-right"> <h2 class="title">Useful Links</h2> <ul> <li><a href="/">Home</a></li> <li><a href="/Rental_&_Management/page_2711180.html">Rental & Management</a></li> <li><a href="/Discover_Punta_Cana/page_2711175.html">Discover Punta Cana</a></li> <li><a href="/About_Dominican_Republic/page_2142628.html">About Dominican Republic</a></li> <li><a href="/Buyer_Info/page_2711177.html">Buyer Info</a></li> <li><a href="/About_Us/page_2711179.html">About US</a></li> <!--<li><a href="https://blog.realestate-punta-cana.com/">Blog</a></li>--> <li><a href="/Contac_Us/page_2142944.html">Contact Us</a></li> </ul> </div> <div class="footer-flex only-mobile"> <img src="https://mediavault.point2.com/p2a/htmltext/725d/0ab8/4050/d3a501469c5bdee8aa59/original.png" alt=""> <p><img class="realtor" alt="AMPI - Realtor" src="https://mediavault.point2.com/p2a/htmltext/1441/6aae/9784/e0ac607edb5e4232d4a9/original.png" initialwidth="220"></p> <p>Copyright © 2022 GoPuntaCana Real Estate. All Rights Reserved.</p> </div> </div> </div> </div> <div id="final-footer" class="secondaryBackground"> <a href="https://abovemedia.ca" title="Real Estate Marketing" target="_blank" rel="nofollow">Real Estate Marketing</a> by AboveMedia Canada. </div> <!--AboveMedia Footer Content Ends -->');

										jQuery('body').append(listingFooter);
									}
									jQuery(".row-fluid").last().addClass("footerBG");
								});

								function addCustomClasses() {
									if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {
										var headerDiv = document.getElementsByClassName('maindiv')[0];
									}
									else {
										var headerDiv = document.getElementsByClassName('row-fluid')[1];
									}
									headerDiv.classList.add('headerBG');
								}
								document.ready = addCustomClasses;

								// When the user scrolls the page, execute myFunction 
								window.onscroll = function () { myFunction() };
								// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
								function myFunction() {
									// Get the header depending on whether we're on a listing page or not
									if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {
										var header = document.getElementsByClassName('maindiv')[0];
										//console.log('AM');
									}
									else {
										var header = document.getElementsByClassName('headerBG')[0];
									}
									//Get the offset position of the navbar
									var sticky = header.offsetTop;
									if (window.pageYOffset > sticky) {
										header.classList.add("sticky");
									} else {
										header.classList.remove("sticky");
									}
								}

								// Make Nav Transparent on Home
								$(document).ready(function () {
									var url = location.href;
									var headerDiv = document.getElementsByClassName('row-fluid')[1];

									if (url == "https://www.gopuntacanarealestate.com/" || url == "https://www.gopuntacanarealestate.com/#" || url == "https://www.gopuntacanarealestate.com/#Top" || url == "https://gopuntacanarealestate.com/" || url == "https://gopuntacanarealestate.com/#" || url == "https://gopuntacanarealestate.com/#Top" || (window.location.href.indexOf('https://www.gopuntacanarealestate.com/homes.aspx?__ts=') == 0)) {
										headerDiv.classList.add('fullwidth');
										headerDiv.classList.add('transparent');
									}

								});

								// Make home fill width
								$(document).ready(function () {
									var url = location.href;
									var headerDiv = document.getElementsByClassName('row-fluid')[2];
									
									if (url == "https://www.gopuntacanarealestate.com/" || url == "https://www.gopuntacanarealestate.com/#" || url == "https://www.gopuntacanarealestate.com/#Top" || url == "https://gopuntacanarealestate.com/" || url == "https://gopuntacanarealestate.com/#" || url == "https://gopuntacanarealestate.com/#Top" || (window.location.href.indexOf('https://www.gopuntacanarealestate.com/homes.aspx?__ts=') == 0)) {
										headerDiv.classList.add('fullwidth');
									}

								});

								$(window).scroll(function () {
									if ($(this).scrollTop()) {
										$('#toTop').fadeIn();
									} else {
										$('#toTop').fadeOut();
									}
								});
