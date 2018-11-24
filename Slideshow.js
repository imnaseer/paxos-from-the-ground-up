
var currentSlideDiv = null;

var sectionIndex = 0;
var sectionSlideIndex = 0;

var sectionTitles = [];
var sectionSlidesList = [];

var sectionTitle = null;
var progressBar = null;
var progressText = null;

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

window.onload = function()
{
    sectionDivs = document.getElementsByClassName("slide-section");
	for (var i = 0; i < sectionDivs.length; i++)
	{
		var sectionDiv = sectionDivs[i];
		sectionTitles.push(sectionDiv.getAttribute("title"));
		var sectionSlides = sectionDiv.getElementsByClassName("slide");
		sectionSlidesList.push(sectionSlides);
	}

	sectionTitle = document.getElementById("section-title-container");
	progressBar = document.getElementById("progress-bar");
	progressText = document.getElementById("progress-text");

	var sectionParam = getParameterByName("section");
	var slideParam = getParameterByName("slide");
	if (sectionParam != null && slideParam != null)
	{
		sectionIndex = parseInt(sectionParam, 10) - 1;
		sectionSlideIndex = parseInt(slideParam, 10) - 1;
	}

	showSlide();
};

document.onkeydown = function (e)
{
    if (e.key == "ArrowLeft")
	{
		previousSlide();
	}

	if (e.key == "ArrowRight")
	{
		nextSlide();
	}

	return true;
};

function showSlide()
{
    if (currentSlideDiv != null)
	{
		currentSlideDiv.style.display = "none";
	}

	currentSlideDiv = sectionSlidesList[sectionIndex][sectionSlideIndex];
	currentSlideDiv.style.display = "inline-block";

	progressBar.setAttribute("max", sectionSlidesList[sectionIndex].length);
	progressBar.setAttribute("value", sectionSlideIndex + 1);
	progressText.innerText = (sectionSlideIndex + 1) + " of " + sectionSlidesList[sectionIndex].length;

	sectionTitle.innerText = sectionTitles[sectionIndex];

	history.replaceState({}, "", window.location.pathname + "?section=" + (sectionIndex+1) + "&slide=" + (sectionSlideIndex+1));
}

function nextSlide()
{
	var sectionSlides = sectionSlidesList[sectionIndex];
	if (sectionSlideIndex < sectionSlides.length - 1)
	{
		sectionSlideIndex++;
	}
	else if (sectionIndex < sectionSlidesList.length - 1)
	{
		sectionIndex++;
		sectionSlideIndex = 0;
	}

	showSlide();
}

function previousSlide()
{
	var sectionSlides = sectionSlidesList[sectionIndex];
	if (sectionSlideIndex == 0)
	{
		if (sectionIndex > 0)
		{
			sectionIndex--;
			sectionSlideIndex = sectionSlidesList[sectionIndex].length - 1;
		}
	}
	else
	{
		sectionSlideIndex--;
	}

	showSlide();
}
