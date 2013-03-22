(function()
{
	//Adds custom shape library
	var SidebarInit = Sidebar.prototype.init;
	Sidebar.prototype.init = function()
	{
		SidebarInit.apply(this, arguments);

		mxResources.parse('mockupMarkup=Mockup / Markup');
		mxResources.parse(mxShapeMockupCurlyBrace.prototype.cst.SHAPE_CURLY_BRACE + '=Curly Brace');
		mxResources.parse(mxShapeMockupLine.prototype.cst.SHAPE_LINE + '=Line');
		mxResources.parse(mxShapeMockupScratchOut.prototype.cst.SHAPE_SCRATCH_OUT + '=Scratch Out');
		mxResources.parse(mxShapeMockupRedX.prototype.cst.SHAPE_RED_X + '=Red X');
			
		this.addPalette('mockupMarkup', 'Mockup Markup (Test)', false, mxUtils.bind(this, function(content)
		{
			var s = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=1;';

			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupCurlyBrace.prototype.cst.SHAPE_CURLY_BRACE + ';' + mxConstants.STYLE_STROKECOLOR + '=#999999;', 100, 20, '', 'Horizontal Curly Brace', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupCurlyBrace.prototype.cst.SHAPE_CURLY_BRACE + ';' + mxConstants.STYLE_STROKECOLOR + '=#999999;' + mxConstants.STYLE_DIRECTION + '=' + mxConstants.DIRECTION_NORTH + ';', 20, 100, '', 'Vertical Curly Brace', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupLine.prototype.cst.SHAPE_LINE + ';' + mxConstants.STYLE_STROKECOLOR + '=#999999;', 100, 20, '', 'Horizontal Line', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupLine.prototype.cst.SHAPE_LINE + ';' + mxConstants.STYLE_STROKECOLOR + '=#999999;' + mxConstants.STYLE_DIRECTION + '=' + mxConstants.DIRECTION_NORTH + ';', 20, 100, '', 'Vertical Line', false));
			content.appendChild(this.createVertexTemplate(mxConstants.STYLE_SHAPE + '=' + mxShapeMockupScratchOut.prototype.cst.SHAPE_SCRATCH_OUT + ';' + mxConstants.STYLE_STROKECOLOR + '=#999999;' + mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=4;', 200, 100, '', 'Scratch Out', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupRedX.prototype.cst.SHAPE_RED_X + ';' + mxConstants.STYLE_FILLCOLOR + '=#ff0000;' + mxConstants.STYLE_STROKECOLOR + '=none;', 200, 100, '', 'Red X', false));
		}));
	};
})();
