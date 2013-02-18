(function()
{
	//Adds custom shape library
	var SidebarInit = Sidebar.prototype.init;
	Sidebar.prototype.init = function()
	{
		SidebarInit.apply(this, arguments);

		mxResources.parse('misc=Misc');
//		mxResources.parse(mxMockupC.SHAPE_BREADCRUMB + '=Breadcrumb');
			
		this.addPalette('misc', 'Mockup Misc (Test)', false, mxUtils.bind(this, function(content)
		{
			var s = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=1;';

//			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_BREADCRUMB + ';' + mxConstants.STYLE_STROKECOLOR + '=#c4c4c4;' + mxConstants.STYLE_FONTCOLOR + '=#666666;' + mxMockupC.STYLE_FONTCOLOR2 + '=#008cff;' + mxMockupC.BUTTON_TEXT + '=Layer 1,L2,Layer 3,Layer 4;' + mxConstants.STYLE_FONTSIZE + '=17;' + mxConstants.STYLE_STROKEWIDTH + '=4;', 300, 30, '', 'Breadcrumb', false));
		}));
	};
})();
