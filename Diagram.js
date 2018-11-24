
function draw(id, stepIndex, options)
{
    var proposers = options.proposers;
    var acceptors = options.acceptors;
    var learners = options.learners;
    var step = options.steps[stepIndex];

    var containerDiv = document.getElementById(id);
    containerDiv.getElementsByClassName("previous")[0].disabled = (stepIndex == 0);
    containerDiv.getElementsByClassName("next")[0].disabled = (stepIndex == options.steps.length -1);

    var idSelector = "#" + id;

    d3.selectAll(idSelector + " > svg > *").remove();

    var svg = d3.select(idSelector + " > svg")
        .attr("width", options.width)
        .attr("height", options.height);

    var diagram = [proposers, acceptors, learners];

    var geographicalInfo = {};
    for (var ri = 0; ri < diagram.length; ri++)
    {
        var nodes = diagram[ri];

        for (var ci = 0; ci < nodes.length; ci++)
        {
            var node = nodes[ci];

            geographicalInfo[node] =
            {
                "cx": nodeCx(ri, ci, options),
                "cy": nodeCy(ri, ci, options),
                "color": options.rowColors[ri],
                "label": node
            };
        }
    }

    // Draw nodes
    for (var ri = 0; ri < diagram.length; ri++)
    {
        var nodes = diagram[ri];

        for (var ci = 0; ci < nodes.length; ci++)
        {
            var node = nodes[ci];
            var info = geographicalInfo[node];
            var whiteFillColor = "#f7f7f7";

            var circleColor = options.colors.hasOwnProperty(node) ? options.colors[node] : whiteFillColor;
            circleColor = step.colors.hasOwnProperty(node) ? step.colors[node] : circleColor;

            var downNodes = step.hasOwnProperty("downNodes") ? step.downNodes : [];
            var isNodeDown = downNodes.indexOf(node) != -1;
            var nodeLabel = info.label;

            var circle = svg.append("circle");
            circle.attr("cx", info.cx);
            circle.attr("cy", info.cy);
            circle.attr("r", options.radius);
            circle.style("fill", circleColor);
            circle.style("stroke", "black");
            circle.attr("class", isNodeDown ? "node-down" : "")

            svg.append("text")
                .attr("x", nodeCx(ri, ci, options) - 7)
                .attr("y", nodeCy(ri, ci, options) + 5)
                .style("fill", circleColor == whiteFillColor ? "black" : "white")
                .text(function(d) { return nodeLabel; });
        }
    }

    // Draw message arrows
    var messages = step.messages;
    for (var i = 0; i < messages.length; i++)
    {
        var message = messages[i];

        var sourceInfo = geographicalInfo[message.source];
        var targetInfo = geographicalInfo[message.target];

        if (message.source == message.target)
        {
            var orientation = message.orientation || "left";

            var startAngle = orientation == "left" ? 220 : 320;
            var endAngle = orientation == "left" ? 130 : 50;
            var curve = orientation == "left" ? -40 : 40;

            var startAngleInRad = toRadians(startAngle);
            var endAngleInRad = toRadians(endAngle);

            var startX=sourceInfo.cx + options.radius * Math.cos(startAngleInRad);
            var startY=sourceInfo.cy + options.radius * Math.sin(startAngleInRad);

            var endX=sourceInfo.cx + options.radius * Math.cos(endAngleInRad);
            var endY=sourceInfo.cy + options.radius * Math.sin(endAngleInRad);

            dStr =
                "M" +
                startX + "," + startY + " " +
                "C" +
                (startX + curve) + "," + startY + " " +
                (endX + curve) + "," + endY + " " +
                endX + "," + endY;

            svg
                .append("path")
                .attr("d", dStr)
                .attr("fill", "none")
                .attr("stroke", "black")
                .attr("marker-end", "url(#arrow)");

            var labelOffset = message.labelOffset || 0;

            svg
                .append("text")
                .attr("x", startX + labelOffset)
                .attr("y", startY + ((endY - startY)/2))
                .style("fill", "gray")
                .text(function(d) { return message.label; });
        }
        else
        {
            var point = pointOnEdgeOfCircleTowards(sourceInfo.cx, sourceInfo.cy, options.radius, targetInfo.cx, targetInfo.cy);
            var startX = point.x;
            var startY = point.y;

            var point2 = pointOnEdgeOfCircleTowards(targetInfo.cx, targetInfo.cy, options.radius, sourceInfo.cx, sourceInfo.cy);
            var endX = message.length == "half" ? (startX + ((point2.x - startX) / 2.2)) : point2.x;
            var endY = message.length == "half" ? (startY + ((point2.y - startY) / 2.2)) : point2.y;

            svg
                .append("line")
                .attr("x1", startX)
                .attr("y1", startY)
                .attr("x2", endX)
                .attr("y2", endY)
                .attr("marker-end", "url(#arrow)")
                .style("stroke", "black");

            var labelPlacement = message.hasOwnProperty("labelPlacement") ? message.labelPlacement : 0.5;

            svg
                .append("text")
                .attr("x", startX + ((endX - startX) * labelPlacement))
                .attr("y", startY + ((endY - startY) * labelPlacement))
                .style("fill", "gray")
                .text(function(d) { return message.label; });
        }
    }

    // Display text
    var text = step.hasOwnProperty("text") ? step.text : "";
    svg
        .append("text")
        .attr("x", options.textStartX)
        .attr("y", (diagram.length * options.verticalSpacing) + options.textTopMargin)
        .style("fill", "black")
        .text(function(d) { return text; });

    // Display state information
    var state = step.state;
    svg
        .append("text")
        .attr("x", options.stateStartX)
        .attr("y", options.stateStartY )
        .style("fill", "black")
        .text(function(d) { return "State"; });

    var elementIndex = 1;
    for (var ri = 0; ri < diagram.length; ri++)
    {
        var nodes = diagram[ri];

        for (var ci = 0; ci < nodes.length; ci++)
        {
            var node = nodes[ci];

            var stateText = state.hasOwnProperty(node) ? state[node] : "";

            svg
                .append("text")
                .attr("x", options.stateStartX)
                .attr("y", options.stateStartY + ((elementIndex++) * options.stateVerticalSpacing))
                .style("fill", "black")
                .attr("width", "10")
                .text(function(d) { return node + ": " + stateText; });

        }
    }
}

function pointOnEdgeOfCircleTowards(
    circleX,
    circleY,
    radius,
    targetX,
    targetY)
{
    var directionX = targetX - circleX;
    var directionY = targetY - circleY;

    var sqrtOfDxAndDySquared = Math.sqrt(Math.pow(directionX, 2) + Math.pow(directionY, 2));

    return {
        x: circleX + directionX * (radius/sqrtOfDxAndDySquared),
        y: circleY + directionY * (radius/sqrtOfDxAndDySquared)
    };
}

function nodeCx(ri, ci, options)
{
    return options.startXs[ri] + (ci * options.interNodeSpacing);
}

function nodeCy(ri, ci, options)
{
    return options.startY + (ri * options.verticalSpacing);
}

function toRadians(degrees)
{
    return degrees * (Math.PI / 180);
}


var defaultOptions = {
    width: 700,
    height: 500,

    verticalSpacing: 150,
    interNodeSpacing: 200,
    radius: 25,

    startY: 100,

    stateStartX: 450,
    stateStartY: 100,
    stateVerticalSpacing: 40,

    textStartX: 100,
    textTopMargin: 20
};

function showScenario(id, options)
{
    var finalOptions = {};
    MergeFieldsInto(finalOptions, defaultOptions);
    MergeFieldsInto(finalOptions, options);

    var stepIndex = 0;
    var totalSteps = finalOptions.steps.length;

    var element = document.getElementById(id);
    var svgNode = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var divNode = document.createElement("div");

    var buttonContainerDiv = document.createElement("div");

    {
        var previousButton = document.createElement("input");
        previousButton.type = "button";
        previousButton.value = "<<";
        previousButton.className = "previous";
        previousButton.onclick = function() { draw(id, --stepIndex % totalSteps, finalOptions) };

        var nextButton = document.createElement("input");
        nextButton.type = "button";
        nextButton.className = "next";
        nextButton.value = ">>";
        nextButton.onclick = function() { draw(id, ++stepIndex % totalSteps, finalOptions) };

        buttonContainerDiv.className = "button-container";
        buttonContainerDiv.appendChild(previousButton);
        buttonContainerDiv.appendChild(nextButton);
    }

    element.appendChild(svgNode);
    element.appendChild(divNode);
    element.appendChild(buttonContainerDiv);

    draw(id, stepIndex, finalOptions);
}

function MergeFieldsInto(target, source)
{
    Object.keys(source).forEach(function (k)
    {
        target[k] = source[k];
    });
}
