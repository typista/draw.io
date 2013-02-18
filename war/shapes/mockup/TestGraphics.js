(function()
{
	//Adds custom shape library
	var SidebarInit = Sidebar.prototype.init;
	Sidebar.prototype.init = function()
	{
		SidebarInit.apply(this, arguments);

		mxResources.parse('graphics=Graphics');
		mxResources.parse(mxShapeMockupBarChart.prototype.cst.SHAPE_BAR_CHART + '=Bar Chart');
		mxResources.parse(mxShapeMockupColumnChart.prototype.cst.SHAPE_COLUMN_CHART + '=Column Chart');
		mxResources.parse(mxShapeMockupLineChart.prototype.cst.SHAPE_LINE_CHART + '=Line Chart');
		mxResources.parse(mxShapeMockupPieChart.prototype.cst.SHAPE_PIE_CHART + '=Pie Chart');
		mxResources.parse(mxShapeMockupIconGrid.prototype.cst.SHAPE_ICON_GRID + '=Icon Grid');
		mxResources.parse(mxShapeMockupBubbleChart.prototype.cst.SHAPE_BUBBLE_CHART + '=Bubble Chart');
		mxResources.parse(mxShapeMockupGauge.prototype.cst.SHAPE_GAUGE + '=Gauge');
		mxResources.parse(mxShapeMockupPlotChart.prototype.cst.SHAPE_PLOT_CHART + '=Plot Chart');
		mxResources.parse(mxShapeMockupGanttChart.prototype.cst.SHAPE_GANTT_CHART + '=Plot Chart');
			
		this.addPalette('graphics', 'Mockup Graphics (Test)', false, mxUtils.bind(this, function(content)
		{
			var s = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;';

			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupBarChart.prototype.cst.SHAPE_BAR_CHART + ';' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' +  mxConstants.STYLE_STROKECOLOR + '=none;' + mxShapeMockupBarChart.prototype.cst.STROKE_COLOR2 + '=none;' + mxShapeMockupBarChart.prototype.cst.STROKE_COLOR3 + '=#666666;' + mxShapeMockupBarChart.prototype.cst.FILL_COLOR2 + '=#008cff;' + mxShapeMockupBarChart.prototype.cst.FILL_COLOR3 + '=#dddddd;', 400, 200, '', 'Bar Chart', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupColumnChart.prototype.cst.SHAPE_COLUMN_CHART + ';' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' +  mxConstants.STYLE_STROKECOLOR + '=none;' + mxShapeMockupColumnChart.prototype.cst.STROKE_COLOR2 + '=none;' + mxShapeMockupColumnChart.prototype.cst.STROKE_COLOR3 + '=#666666;' + mxShapeMockupColumnChart.prototype.cst.FILL_COLOR2 + '=#008cff;' + mxShapeMockupColumnChart.prototype.cst.FILL_COLOR3 + '=#dddddd;', 400, 200, '', 'Column Chart', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupLineChart.prototype.cst.SHAPE_LINE_CHART + ';' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' +  mxConstants.STYLE_STROKECOLOR + '=none;' + mxShapeMockupLineChart.prototype.cst.STROKE_COLOR2 + '=#666666;' + mxShapeMockupLineChart.prototype.cst.STROKE_COLOR3 + '=#008cff;' + mxShapeMockupLineChart.prototype.cst.STROKE_COLOR4 + '=#dddddd;', 400, 200, '', 'Line Chart', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupPieChart.prototype.cst.SHAPE_PIE_CHART + ';' +  mxConstants.STYLE_STROKECOLOR + '=#008cff;' + mxShapeMockupPieChart.prototype.cst.PARTS + '=10,20,35;' + mxShapeMockupPieChart.prototype.cst.PART_COLORS + '=#e0e0e0,#d0d0d0,#c0c0c0,#b0b0b0,#a0a0a0;'+ mxConstants.STYLE_STROKEWIDTH + '=2;', 200, 200, '', 'Pie Chart', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupIconGrid.prototype.cst.SHAPE_ICON_GRID + ';' +  mxConstants.STYLE_STROKECOLOR + '=#999999;' + mxShapeMockupIconGrid.prototype.cst.GRID_SIZE + '=1,1;', 50, 50, '', 'Icon Placeholder', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupIconGrid.prototype.cst.SHAPE_ICON_GRID + ';' +  mxConstants.STYLE_STROKECOLOR + '=#999999;' + mxShapeMockupIconGrid.prototype.cst.GRID_SIZE + '=3,3;', 200, 200, '', 'Icon Grid', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupBubbleChart.prototype.cst.SHAPE_BUBBLE_CHART + ';' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' +  mxConstants.STYLE_STROKECOLOR + '=none;' + mxShapeMockupBubbleChart.prototype.cst.STROKE_COLOR2 + '=none;' + mxShapeMockupBubbleChart.prototype.cst.STROKE_COLOR3 + '=#666666;' + mxShapeMockupBubbleChart.prototype.cst.FILL_COLOR2 + '=#008cff;' + mxShapeMockupBubbleChart.prototype.cst.FILL_COLOR3 + '=#dddddd;', 400, 200, '', 'Bubble Chart', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupGauge.prototype.cst.SHAPE_GAUGE + ';' + mxConstants.STYLE_STROKECOLOR + '=#999999;' + mxShapeMockupGauge.prototype.cst.GAUGE_POS + '=25;' + mxShapeMockupGauge.prototype.cst.SCALE_COLORS + '=#bbddff,#ddeeff,#99ccff;' + mxShapeMockupGauge.prototype.cst.GAUGE_LABELS + '=CPU[%],0,100;' + mxShapeMockupGauge.prototype.cst.NEEDLE_COLOR + '=#008cff;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxShapeMockupGauge.prototype.cst.TEXT_COLOR + '=#666666;' + mxShapeMockupGauge.prototype.cst.TEXT_SIZE + '=12;', 100, 100, '', 'Gauge', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupPlotChart.prototype.cst.SHAPE_PLOT_CHART + ';' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' +  mxConstants.STYLE_STROKECOLOR + '=#none;' + mxShapeMockupPlotChart.prototype.cst.STROKE_COLOR2 + '=#aaaaaa;' + mxShapeMockupPlotChart.prototype.cst.STROKE_COLOR3 + '=#666666;' + mxShapeMockupPlotChart.prototype.cst.SHAPES_COLORS + '=#99aaff,#0022ff,#008cff;', 400, 200, '', 'Plot Chart', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupGanttChart.prototype.cst.SHAPE_GANTT_CHART + ';' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' +  mxConstants.STYLE_STROKECOLOR + '=#999999;' + mxShapeMockupGanttChart.prototype.cst.TEXT_COLOR + '=#666666;' + mxShapeMockupGanttChart.prototype.cst.TEXT_SIZE + '=12;' + mxShapeMockupGanttChart.prototype.cst.SHAPES_COLORS + '=#99ccff,#dddddd;', 600, 300, '', 'Gantt Chart', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.mockup.misc.map;', 250, 250, '', 'Map', false));
		}));
	};
})();
