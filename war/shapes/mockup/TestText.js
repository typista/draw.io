(function()
{
	//Adds custom shape library
	var SidebarInit = Sidebar.prototype.init;
	Sidebar.prototype.init = function()
	{
		SidebarInit.apply(this, arguments);

		mxResources.parse('text=Text');
		mxResources.parse(mxShapeMockupLink.prototype.cst.SHAPE_LINK + '=Link');
		mxResources.parse(mxShapeMockupLinkBar.prototype.cst.SHAPE_LINK_BAR + '=Link Bar');
		mxResources.parse(mxShapeMockupCallout.prototype.cst.SHAPE_CALLOUT + '=Callout');
			
		this.addPalette('text', 'Mockup Text (Test)', false, mxUtils.bind(this, function(content)
		{
			var s = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=1;';

			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupLink.prototype.cst.SHAPE_LINK + ';' + mxShapeMockupLink.prototype.cst.LINK_TEXT + '=Link;' + mxShapeMockupLink.prototype.cst.TEXT_SIZE + '=17;' + mxShapeMockupLink.prototype.cst.TEXT_COLOR + '=#0000ff;', 150, 30, '', 'Link', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupLinkBar.prototype.cst.SHAPE_LINK_BAR + ';' + mxConstants.STYLE_STROKECOLOR + '=#666666;' + mxShapeMockupLinkBar.prototype.cst.STROKE_COLOR2 + '=#c4c4c4;' + mxShapeMockupLinkBar.prototype.cst.TEXT_COLOR + '=#0000ff;' + mxShapeMockupLinkBar.prototype.cst.TEXT_COLOR2 + '=#ffffff;' + mxShapeMockupLinkBar.prototype.cst.MAIN_TEXT + '=+Button 1,Button 2,Button 3,Button 4;' + mxShapeMockupLinkBar.prototype.cst.TEXT_SIZE + '=17;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxShapeMockupLinkBar.prototype.cst.FILL_COLOR2 + '=#008cff', 500, 25, '', 'Link Bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupCallout.prototype.cst.SHAPE_CALLOUT + ';' + mxShapeMockupCallout.prototype.cst.CALLOUT_TEXT + '=Callout;' + mxShapeMockupCallout.prototype.cst.TEXT_SIZE + '=17;' + mxShapeMockupCallout.prototype.cst.TEXT_COLOR + '=#666666;' + mxShapeMockupCallout.prototype.cst.CALLOUT_DIR + '=' + mxShapeMockupCallout.prototype.cst.DIR_NW + ';' + mxShapeMockupCallout.prototype.cst.CALLOUT_STYLE + '=' + mxShapeMockupCallout.prototype.cst.STYLE_LINE + ';' + mxConstants.STYLE_STROKECOLOR + '=#666666;', 200, 100, '', 'Callout', false));
		}));
	};
})();
