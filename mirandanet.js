// JavaScript Document
// General routines for MirandaNet

// This function keeps the selected menu item in the 'down state'
// It requires a <body onLoad="return show('menuIdName')">

function show(menu) {
if (document.getElementById) {
	var item = document.getElementById(menu);
	if (item.className == "normal") {
		item.className = "selected";
		} else {
		item.className = "normal";
		} 
		return false;
		} else {
		return true;
	}
}

// This function opens the correct branch of the menu
// It requires a <body onLoad="return reveal('menulinkID')">

  	function reveal(menu) {
		if (document.getElementById) {
			var item = document.getElementById(menu).style;
			if (item.display == "block") {
				item.display = "none";
				} else {
				item.display = "block"
				} 
			return false
			} else {
			return true
		}

if (document.getElementById) {
	var item = document.getElementById(menu);
	if (item.className == "normal") {
		item.className = "selected";
		} else {
		item.className = "normal";
		} 
		return false;
		} else {
		return true;
	}


	}

// This function assembles email addresses from broken parts
// If there is no 'realname' it displays the email address
// If there is no 'domainname' it uses mirandanet.org.uk
// If there is no subject it uses 'Contact MirandaNet'

function display(realname,name,domainname,subject) {
var sb_displayname = realname;
var sb_domain = domainname;
if (sb_domain === "") {
	sb_domain = "mirandanet.org.uk";}
var sb_user = name;
var sb_subject = subject; 
if (sb_subject === "") {
	sb_subject = "Contact MirandaNet";}
var sb_recipient = sb_user + "@" + sb_domain;
var sb_url = "mailto:" + sb_recipient + "?subject=" + sb_subject;
if (sb_displayname === "") {
	document.write(sb_recipient.link(sb_url));
	} else {
	document.write(sb_displayname.link(sb_url));
	}
}

// This function is an attempt at a redirect for the log on/log off link
function redirect() {
var log_url = "http://www.mirandanet.org.uk/membership/index.php";
var redirect_url = window.location;
    log_url = log_url + '?return=' + redirect_url;
	document.write('<a title="Members Log on/off" id="logon" class="normal" href="' + log_url + '">Members Log on/off</a>');
	}

document.write('<style>.noscript { display:none }</style>');