(function()
{
	//Adds custom shape library
	var SidebarInit = Sidebar.prototype.init;
	Sidebar.prototype.init = function()
	{
		SidebarInit.apply(this, arguments);

		mxResources.parse('mockupMarkup=Mockup / Markup');
		mxResources.parse(mxShapeMockupCurlyBrace.prototype.cst.SHAPE_CURLY_BRACE + '=Curly Brace');
			
		this.addPalette('mockupMarkup', 'Mockup Markup (Test)', false, mxUtils.bind(this, function(content)
		{
			var s = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=1;';

			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupCurlyBrace.prototype.cst.SHAPE_CURLY_BRACE + ';' + mxConstants.STYLE_STROKECOLOR + '=#666666;', 100, 20, '', 'Horizontal Curly Brace', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupCurlyBrace.prototype.cst.SHAPE_CURLY_BRACE + ';' + mxConstants.STYLE_STROKECOLOR + '=#666666;' + mxConstants.STYLE_DIRECTION + '=' + mxConstants.DIRECTION_NORTH + ';', 20, 100, '', 'Vertical Curly Brace', false));
		}));
	};
})();
