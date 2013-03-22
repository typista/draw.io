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
		mxResources.parse(mxShapeMockupCoverFlow.prototype.cst.SHAPE_COVER_FLOW + '=Cover Flow');
		mxResources.parse(mxShapeMockupScrollBar.prototype.cst.SHAPE_SCROLL_BAR + '=Scroll Bar');
		mxResources.parse(mxShapeMockupPagination.prototype.cst.SHAPE_PAGINATION + '=Pagination');
		mxResources.parse(mxShapeMockupPageControl.prototype.cst.SHAPE_PAGE_CONTROL + '=Page Control');
		mxResources.parse(mxShapeMockupMapNavigator.prototype.cst.SHAPE_MAP_NAVIGATOR + '=Map Navigator');
			
		this.addPalette('mockupNavigation', 'Mockup Navigation (Test)', false, mxUtils.bind(this, function(content)
		{
			var s = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;';

			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupBreadcrumb.prototype.cst.SHAPE_BREADCRUMB + ';' + mxConstants.STYLE_STROKECOLOR + '=#c4c4c4;' + mxShapeMockupBreadcrumb.prototype.cst.TEXT_COLOR + '=#666666;' + mxShapeMockupBreadcrumb.prototype.cst.TEXT_COLOR2 + '=#008cff;' + mxShapeMockupBreadcrumb.prototype.cst.MAIN_TEXT + '=Layer 1,L2,Layer 3,Layer 4;' + mxShapeMockupBreadcrumb.prototype.cst.TEXT_SIZE + '=17;' + mxConstants.STYLE_STROKEWIDTH + '=4;', 300, 30, '', 'Breadcrumb', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupStepBar.prototype.cst.SHAPE_STEP_BAR + ';' + mxConstants.STYLE_STROKECOLOR + '=#c4c4c4;' + mxShapeMockupStepBar.prototype.cst.TEXT_COLOR + '=#666666;' + mxShapeMockupStepBar.prototype.cst.TEXT_COLOR2 + '=#008cff;' + mxShapeMockupStepBar.prototype.cst.MAIN_TEXT + '=Step 1,Step 2,+Step 3,Step 4;' + mxShapeMockupStepBar.prototype.cst.TEXT_SIZE + '=17;' + mxConstants.STYLE_FILLCOLOR + '=#666666;', 300, 50, '', 'Step Bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupCoverFlow.prototype.cst.SHAPE_COVER_FLOW + ';' + mxConstants.STYLE_STROKECOLOR + '=#999999', 400, 200, '', 'Cover Flow', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupScrollBar.prototype.cst.SHAPE_SCROLL_BAR + ';' + mxConstants.STYLE_STROKECOLOR + '=#999999;' + mxShapeMockupScrollBar.prototype.cst.BAR_POS + '=20;' + mxShapeMockupScrollBar.prototype.cst.FILL_COLOR2 + '=#99ddff;' + mxShapeMockupScrollBar.prototype.cst.STROKE_COLOR2 + '=none;', 200, 20, '', 'Horizontal Scroll Bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupScrollBar.prototype.cst.SHAPE_SCROLL_BAR + ';' + mxConstants.STYLE_STROKECOLOR + '=#999999;' + mxShapeMockupScrollBar.prototype.cst.BAR_POS + '=20;' + mxShapeMockupScrollBar.prototype.cst.FILL_COLOR2 + '=#99ddff;' + mxShapeMockupScrollBar.prototype.cst.STROKE_COLOR2 + '=none;' + mxConstants.STYLE_DIRECTION + '=' + mxConstants.DIRECTION_NORTH + ';', 20, 200, '', 'Vertical Scroll Bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupPagination.prototype.cst.SHAPE_PAGINATION + ';' + mxShapeMockupPagination.prototype.cst.MAIN_TEXT + '=<< Prev 1 2 3 4 5 6 7 8 9 10 Next >>;', 350, 30, '', 'Pagination', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupPageControl.prototype.cst.SHAPE_PAGE_CONTROL + ';' + mxConstants.STYLE_FILLCOLOR + '=#999999;' + mxConstants.STYLE_STROKECOLOR + '=#ddeeff;', 100, 30, '', 'Page Control', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupMapNavigator.prototype.cst.SHAPE_MAP_NAVIGATOR + ';' + mxShapeMockupMapNavigator.prototype.cst.FILL_COLOR2 + '=#99ddff;' + mxShapeMockupMapNavigator.prototype.cst.STROKE_COLOR2 + '=none;' + mxShapeMockupMapNavigator.prototype.cst.STROKE_COLOR3 + '=#ffffff;' + mxConstants.STYLE_STROKECOLOR + '=#999999;', 60, 100, '', 'Map Navigator', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.mockup.misc.loading_circle_1;', 90, 90, '', 'Wheel Throbber 1', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.mockup.misc.loading_circle_2;', 90, 90, '', 'Wheel Throbber 2', false));
		}));
	};
})();
