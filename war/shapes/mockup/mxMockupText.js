/**
 * $Id: mxMockupText.js,v 1.2 2013-02-18 07:42:25 mate Exp $
 * Copyright (c) 2006-2010, JGraph Ltd
 */

//**********************************************************************************************************************************************************
//Link
//**********************************************************************************************************************************************************
/**
 * Extends mxShape.
 */
function mxShapeMockupLink(bounds, fill, stroke, strokewidth)
{
	mxShape.call(this);
	this.bounds = bounds;
	this.fill = fill;
	this.stroke = stroke;
	this.strokewidth = (strokewidth != null) ? strokewidth : 1;
};

/**
 * Extends mxShape.
 */
mxUtils.extend(mxShapeMockupLink, mxShape);

mxShapeMockupLink.prototype.cst = {
		LINK_TEXT : 'linkText',
		TEXT_SIZE : 'textSize',
		TEXT_COLOR : 'textColor',
		SHAPE_LINK : 'mxgraph.mockup.text.link'
};

/**
 * Function: paintVertexShape
 * 
 * Paints the vertex shape.
 */
mxShapeMockupLink.prototype.paintVertexShape = function(c, x, y, w, h)
{
	var linkText = mxUtils.getValue(this.style, mxShapeMockupLink.prototype.cst.LINK_TEXT, 'Link');
	var textSize = mxUtils.getValue(this.style, mxShapeMockupLink.prototype.cst.TEXT_SIZE, '17');
	var textColor = mxUtils.getValue(this.style, mxShapeMockupLink.prototype.cst.TEXT_COLOR, '#0000ff');

	c.translate(x, y);
	var width = mxUtils.getSizeForString(linkText, textSize, mxConstants.DEFAULT_FONTFAMILY).width;
	c.setStrokeColor(textColor);
	c.setFontSize(textSize);
	c.setFontColor(textColor);

	c.text(w * 0.5, h * 0.5, 0, 0, linkText, mxConstants.ALIGN_CENTER, mxConstants.ALIGN_MIDDLE, 0, null, 0, 0, 0);

	c.begin();
	c.moveTo(w * 0.5 - width * 0.5, (h + parseInt(textSize, 10)) * 0.5);
	c.lineTo(w * 0.5 + width * 0.5, (h + parseInt(textSize, 10)) * 0.5);
	c.stroke();
};

mxCellRenderer.prototype.defaultShapes[mxShapeMockupLink.prototype.cst.SHAPE_LINK] = mxShapeMockupLink;

//**********************************************************************************************************************************************************
//Link Bar
//**********************************************************************************************************************************************************
/**
 * Extends mxShape.
 */
function mxShapeMockupLinkBar(bounds, fill, stroke, strokewidth)
{
	mxShape.call(this);
	this.bounds = bounds;
	this.fill = fill;
	this.stroke = stroke;
	this.strokewidth = (strokewidth != null) ? strokewidth : 1;
};

/**
 * Extends mxShape.
 */
mxUtils.extend(mxShapeMockupLinkBar, mxShape);

mxShapeMockupLinkBar.prototype.cst = {
		MAIN_TEXT : 'mainText',
		SHAPE_LINK_BAR : 'mxgraph.mockup.text.linkBar',
		TEXT_COLOR : 'textColor',
		TEXT_COLOR2 : 'textColor2',
		STROKE_COLOR2 : 'strokeColor2',
		FILL_COLOR2 : 'fillColor2',
		SELECTED : '+',			//must be 1 char
		TEXT_SIZE : 'textSize'
};

/**
 * Function: paintVertexShape
 * 
 * Paints the vertex shape.
 */
mxShapeMockupLinkBar.prototype.paintVertexShape = function(c, x, y, w, h)
{
	var textStrings = mxUtils.getValue(this.style, mxShapeMockupLinkBar.prototype.cst.MAIN_TEXT, '+Button 1, Button 2, Button 3').toString().split(',');
	var fontColor = mxUtils.getValue(this.style, mxShapeMockupLinkBar.prototype.cst.TEXT_COLOR, '#666666');
	var selectedFontColor = mxUtils.getValue(this.style, mxShapeMockupLinkBar.prototype.cst.TEXT_COLOR2, '#ffffff');
	var fontSize = mxUtils.getValue(this.style, mxShapeMockupLinkBar.prototype.cst.TEXT_SIZE, '17').toString();
	var frameColor = mxUtils.getValue(this.style, mxConstants.STYLE_STROKECOLOR, '#666666');
	var separatorColor = mxUtils.getValue(this.style, mxShapeMockupLinkBar.prototype.cst.STROKE_COLOR2, '#c4c4c4');
	var bgColor = mxUtils.getValue(this.style, mxConstants.STYLE_FILLCOLOR, '#ffffff');
	var selectedFillColor = mxUtils.getValue(this.style, mxShapeMockupLinkBar.prototype.cst.FILL_COLOR2, '#008cff');
	var buttonNum = textStrings.length;
	var buttonWidths = new Array(buttonNum);
	var buttonTotalWidth = 0;
	var selectedButton = -1;
	var rSize = 10; //rounding size
	var labelOffset = 5;

	for (var i = 0; i < buttonNum; i++)
	{
		var buttonText = textStrings[i];

		if(buttonText.charAt(0) === mxShapeMockupLinkBar.prototype.cst.SELECTED)
		{
			buttonText = textStrings[i].substring(1);
			selectedButton = i;
		}

		buttonWidths[i] = mxUtils.getSizeForString(buttonText, fontSize, mxConstants.DEFAULT_FONTFAMILY).width;

		buttonTotalWidth += buttonWidths[i];
	}

	var trueH = Math.max(h, fontSize * 1.5, 20);
	var minW = 2 * labelOffset * buttonNum + buttonTotalWidth;
	var trueW = Math.max(w, minW);

	c.translate(x, y);
	this.background(c, trueW, trueH, rSize, buttonNum, buttonWidths, labelOffset, minW, frameColor, separatorColor, bgColor, selectedFillColor, selectedButton);
	c.setShadow(false);

	var currWidth = 0;

	for (var i = 0; i < buttonNum; i++)
	{
		if (i === selectedButton)
		{
			c.setFontColor(selectedFontColor);
			c.setStrokeColor(selectedFontColor);
		}
		else
		{
			c.setFontColor(fontColor);
			c.setStrokeColor(fontColor);
		}

		currWidth = currWidth + labelOffset;
		this.buttonText(c, currWidth, trueH, textStrings[i], buttonWidths[i], fontSize, minW, trueW);
		currWidth = currWidth + buttonWidths[i] + labelOffset;
	}
};

mxShapeMockupLinkBar.prototype.background = function(c, w, h, rSize, buttonNum, buttonWidths, labelOffset, minW, frameColor, separatorColor, bgColor, selectedFillColor, selectedButton)
{
	c.begin();

	//draw the frame
	c.setStrokeColor(frameColor);
	c.setFillColor(bgColor);
	c.rect(0, 0, w, h);
	c.fillAndStroke();

	//draw the button separators
	c.setStrokeColor(separatorColor);
	c.begin();
	for (var i = 1; i < buttonNum; i++)
	{
		if (i !== selectedButton && i !== (selectedButton + 1))
		{
			var currWidth = 0;

			for (var j = 0; j < i; j++)
			{
				currWidth += buttonWidths[j] + 2 * labelOffset;
			}

			currWidth = currWidth * w / minW;
			c.moveTo(currWidth, 0);
			c.lineTo(currWidth, h);
		}
	}

	c.stroke();

	//draw the selected button
	var buttonLeft = 0;
	c.setFillColor(selectedFillColor);

	for (var i = 0; i < selectedButton; i++)
	{
		buttonLeft += buttonWidths[i] + 2 * labelOffset;
	}

	buttonLeft = buttonLeft * w / minW;
	var buttonRight = (buttonWidths[selectedButton] + 2 * labelOffset) * w / minW;
	buttonRight += buttonLeft;

	if (selectedButton === 0)
	{
		c.rect(0, 0, buttonRight, h);
		c.fill();
	}
	else if (selectedButton === buttonNum - 1)
	{
		c.rect(buttonLeft, 0, buttonRight - buttonLeft, h);
		c.fill();
	}
	else if (selectedButton !== -1)
	{
		c.rect(buttonLeft, 0, buttonRight - buttonLeft, h);
		c.fill();
	}

	//draw the frame again, to achieve a nicer effect
	c.setStrokeColor(frameColor);
	c.setFillColor(bgColor);
	c.rect(0, 0, w, h);
	c.stroke();
};

mxShapeMockupLinkBar.prototype.buttonText = function(c, w, h, textString, buttonWidth, fontSize, minW, trueW)
{
	if(textString.charAt(0) === mxShapeMockupLinkBar.prototype.cst.SELECTED)
	{
		textString = textString.substring(1);
	}

	c.begin();
	c.setFontSize(fontSize);
	c.text((w + buttonWidth * 0.5) * trueW / minW, h * 0.5, 0, 0, textString, mxConstants.ALIGN_CENTER, mxConstants.ALIGN_MIDDLE, 0, null, 0, 0, 0);

	var textW = mxUtils.getSizeForString(textString, fontSize, mxConstants.DEFAULT_FONTFAMILY).width * 0.5;

	c.begin();
	c.moveTo((w + buttonWidth * 0.5) * trueW / minW - textW, h * 0.5 + fontSize * 0.5);
	c.lineTo((w + buttonWidth * 0.5) * trueW / minW + textW, h * 0.5 + fontSize * 0.5);
	c.stroke();
};

mxCellRenderer.prototype.defaultShapes[mxShapeMockupLinkBar.prototype.cst.SHAPE_LINK_BAR] = mxShapeMockupLinkBar;

//**********************************************************************************************************************************************************
//Callout
//**********************************************************************************************************************************************************
/**
 * Extends mxShape.
 */
function mxShapeMockupCallout(bounds, fill, stroke, strokewidth)
{
	mxShape.call(this);
	this.bounds = bounds;
	this.fill = fill;
	this.stroke = stroke;
	this.strokewidth = (strokewidth != null) ? strokewidth : 1;
};

/**
 * Extends mxShape.
 */
mxUtils.extend(mxShapeMockupCallout, mxShape);

mxShapeMockupCallout.prototype.cst = {
		CALLOUT_TEXT : 'linkText',
		CALLOUT_DIR : 'callDir',
		CALLOUT_STYLE : 'callStyle',
		STYLE_LINE : 'line',
		STYLE_RECT : 'rect',
		STYLE_ROUNDRECT : 'roundRect',
		DIR_NW : 'NW',
		DIR_NE : 'NE',
		DIR_SE : 'SE',
		DIR_SW : 'SW',
		TEXT_SIZE : 'textSize',
		TEXT_COLOR : 'textColor',
		SHAPE_CALLOUT : 'mxgraph.mockup.text.callout'
};

/**
 * Function: paintVertexShape
 * 
 * Paints the vertex shape.
 */
mxShapeMockupCallout.prototype.paintVertexShape = function(c, x, y, w, h)
{
	var calloutText = mxUtils.getValue(this.style, mxShapeMockupCallout.prototype.cst.CALLOUT_TEXT, 'Callout');
	var textSize = mxUtils.getValue(this.style, mxShapeMockupCallout.prototype.cst.TEXT_SIZE, '17');
	var textColor = mxUtils.getValue(this.style, mxShapeMockupCallout.prototype.cst.TEXT_COLOR, '#666666');
	var callStyle = mxUtils.getValue(this.style, mxShapeMockupCallout.prototype.cst.CALLOUT_STYLE, mxShapeMockupCallout.prototype.cst.STYLE_LINE);
	var callDir = mxUtils.getValue(this.style, mxShapeMockupCallout.prototype.cst.CALLOUT_DIR, mxShapeMockupCallout.prototype.cst.DIR_NW);
	var textWidth = mxUtils.getSizeForString(calloutText, textSize, mxConstants.DEFAULT_FONTFAMILY).width;
	textWidth = textWidth * 1.2;
	c.translate(x, y);
	c.setFontSize(textSize);
	c.setFontColor(textColor);
	var callH = textSize * 1.5; 

	if (callDir === mxShapeMockupCallout.prototype.cst.DIR_NW)
	{
		if (callStyle === mxShapeMockupCallout.prototype.cst.STYLE_LINE)
		{
			c.begin();
			c.moveTo(0, callH);
			c.lineTo(textWidth, callH);
			c.lineTo(w, h);
			c.stroke();
		}
		else if (callStyle === mxShapeMockupCallout.prototype.cst.STYLE_RECT)
		{
			c.rect(0,0, textWidth, callH);
			c.fillAndStroke();
			c.begin();
			c.moveTo(textWidth * 0.5, callH);
			c.lineTo(w, h);
			c.stroke();
		}
		else if (callStyle === mxShapeMockupCallout.prototype.cst.STYLE_ROUNDRECT)
		{
			c.roundrect(0, 0, textWidth, callH, callH * 0.25, callH * 0.25);
			c.fillAndStroke();
			c.begin();
			c.moveTo(textWidth * 0.5, callH);
			c.lineTo(w, h);
			c.stroke();
		}
		
		c.text(textWidth * 0.5, callH * 0.5, 0, 0, calloutText, mxConstants.ALIGN_CENTER, mxConstants.ALIGN_MIDDLE, 0, null, 0, 0, 0);
	}
	else if (callDir === mxShapeMockupCallout.prototype.cst.DIR_NE)
	{
		if (callStyle === mxShapeMockupCallout.prototype.cst.STYLE_LINE)
		{
			c.begin();
			c.moveTo(w, callH);
			c.lineTo(w - textWidth, callH);
			c.lineTo(0, h);
			c.stroke();
		}
		else if (callStyle === mxShapeMockupCallout.prototype.cst.STYLE_RECT)
		{
			c.rect(w - textWidth,0, textWidth, callH);
			c.fillAndStroke();
			c.begin();
			c.moveTo(w - textWidth * 0.5, callH);
			c.lineTo(0, h);
			c.stroke();
		}
		else if (callStyle === mxShapeMockupCallout.prototype.cst.STYLE_ROUNDRECT)
		{
			c.roundrect(w - textWidth,0, textWidth, callH, callH * 0.25, callH * 0.25);
			c.fillAndStroke();
			c.begin();
			c.moveTo(w - textWidth * 0.5, callH);
			c.lineTo(0, h);
			c.stroke();
		}
		
		c.text(w - textWidth * 0.5, callH * 0.5, 0, 0, calloutText, mxConstants.ALIGN_CENTER, mxConstants.ALIGN_MIDDLE, 0, null, 0, 0, 0);
	}
	else if (callDir === mxShapeMockupCallout.prototype.cst.DIR_SE)
	{
		if (callStyle === mxShapeMockupCallout.prototype.cst.STYLE_LINE)
		{
			c.begin();
			c.moveTo(w, h);
			c.lineTo(w - textWidth, h);
			c.lineTo(0, 0);
			c.stroke();
		}
		else if (callStyle === mxShapeMockupCallout.prototype.cst.STYLE_RECT)
		{
			c.rect(w - textWidth, h - callH, textWidth, callH);
			c.fillAndStroke();
			c.begin();
			c.moveTo(w - textWidth * 0.5, h - callH);
			c.lineTo(0, 0);
			c.stroke();
		}
		else if (callStyle === mxShapeMockupCallout.prototype.cst.STYLE_ROUNDRECT)
		{
			c.roundrect(w - textWidth,h - callH, textWidth, callH, callH * 0.25, callH * 0.25);
			c.fillAndStroke();
			c.begin();
			c.moveTo(w - textWidth * 0.5, h - callH);
			c.lineTo(0, 0);
			c.stroke();
		}
		
		c.text(w - textWidth * 0.5, h - callH * 0.5, 0, 0, calloutText, mxConstants.ALIGN_CENTER, mxConstants.ALIGN_MIDDLE, 0, null, 0, 0, 0);
	}
	else if (callDir === mxShapeMockupCallout.prototype.cst.DIR_SW)
	{
		if (callStyle === mxShapeMockupCallout.prototype.cst.STYLE_LINE)
		{
			c.begin();
			c.moveTo(0, h);
			c.lineTo(textWidth, h);
			c.lineTo(w, 0);
			c.stroke();
		}
		else if (callStyle === mxShapeMockupCallout.prototype.cst.STYLE_RECT)
		{
			c.rect(0, h - callH, textWidth, callH);
			c.fillAndStroke();
			c.begin();
			c.moveTo(textWidth * 0.5, h - callH);
			c.lineTo(w, 0);
			c.stroke();
		}
		else if (callStyle === mxShapeMockupCallout.prototype.cst.STYLE_ROUNDRECT)
		{
			c.roundrect(0, h - callH, textWidth, callH, callH * 0.25, callH * 0.25);
			c.fillAndStroke();
			c.begin();
			c.moveTo(textWidth * 0.5, h - callH);
			c.lineTo(w, 0);
			c.stroke();
		}
		
		c.text(textWidth * 0.5, h - callH * 0.5, 0, 0, calloutText, mxConstants.ALIGN_CENTER, mxConstants.ALIGN_MIDDLE, 0, null, 0, 0, 0);
	}

};

mxCellRenderer.prototype.defaultShapes[mxShapeMockupCallout.prototype.cst.SHAPE_CALLOUT] = mxShapeMockupCallout;
