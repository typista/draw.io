(function()
{
	//Adds custom shape library
	var SidebarInit = Sidebar.prototype.init;
	Sidebar.prototype.init = function()
	{
		SidebarInit.apply(this, arguments);

		mxResources.parse('mockupNavigation=Mockup / Navigation');
		mxResources.parse(mxShapeMockupBreadcrumb.prototype.cst.SHAPE_BREADCRUMB + '=Breadcrumb');
		mxResources.parse(mxShapeMockupStepBar.prototype.cst.SHAPE_STEP_BAR + '=Step Bar');
			
		this.addPalette('mockupNavigation', 'Mockup Navigation (Test)', false, mxUtils.bind(this, function(content)
		{
			var s = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;';

			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupBreadcrumb.prototype.cst.SHAPE_BREADCRUMB + ';' + mxConstants.STYLE_STROKECOLOR + '=#c4c4c4;' + mxShapeMockupBreadcrumb.prototype.cst.TEXT_COLOR + '=#666666;' + mxShapeMockupBreadcrumb.prototype.cst.TEXT_COLOR2 + '=#008cff;' + mxShapeMockupBreadcrumb.prototype.cst.MAIN_TEXT + '=Layer 1,L2,Layer 3,Layer 4;' + mxShapeMockupBreadcrumb.prototype.cst.TEXT_SIZE + '=17;' + mxConstants.STYLE_STROKEWIDTH + '=4;', 300, 30, '', 'Breadcrumb', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupStepBar.prototype.cst.SHAPE_STEP_BAR + ';' + mxConstants.STYLE_STROKECOLOR + '=#c4c4c4;' + mxShapeMockupStepBar.prototype.cst.TEXT_COLOR + '=#666666;' + mxShapeMockupStepBar.prototype.cst.TEXT_COLOR2 + '=#008cff;' + mxShapeMockupStepBar.prototype.cst.MAIN_TEXT + '=Step 1,Step 2,+Step 3,Step 4;' + mxShapeMockupStepBar.prototype.cst.TEXT_SIZE + '=17;' + mxConstants.STYLE_FILLCOLOR + '=#666666;', 300, 50, '', 'Step Bar', false));
		}));
	};
})();
