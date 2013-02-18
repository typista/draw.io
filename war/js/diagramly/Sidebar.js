(function()
{
	/**
	 * Overrides gear image URL.
	 */
	Sidebar.prototype.gearImage = GRAPH_IMAGE_PATH + '/clipart/Gear_128x128.png';
	
	/**
	 * Specifies special libraries that are loaded via dynamic JS.
	 */
	mxStencilRegistry.libraries['bpmn'] = [SHAPES_PATH + '/bpmn/mxBpmnShape2.js', STENCIL_PATH + '/bpmn.xml'];
	mxStencilRegistry.libraries['er'] = [SHAPES_PATH + '/er/mxER.js'];
	mxStencilRegistry.libraries['ios'] = [SHAPES_PATH + '/mockup/mxMockupiOS.js'];

	/**
	 * Toggle palette.
	 */
	Sidebar.prototype.togglePalettes = function(prefix, ids)
	{
		for (var i = 0; i < ids.length; i++)
		{
			this.togglePalette(prefix + ids[i]);
		}
	};

	/**
	 * Toggle palette.
	 */
	Sidebar.prototype.togglePalette = function(id)
	{
		var elts = this.palettes[id];
		
		if (elts != null)
		{
			var vis = (elts[0].style.display == 'none') ? 'block' : 'none';
			
			for (var i = 0; i < elts.length; i++)
			{
				elts[i].style.display = vis;
			}
		}
	};

	// Replaces the sidebar
	Sidebar.prototype.init = function()
	{
		var imgDir = GRAPH_IMAGE_PATH;
		var dir = STENCIL_PATH;
		var signs = this.signs;
		var mockups = this.mockups;
		var ee = this.ee;
		var pids = this.pids;
		var cisco = this.cisco;

		this.addGeneralPalette(true);
		this.addIconfinder();
		this.addUmlPalette(false);
		this.addErPalette();
		this.addIosPalette();
		this.addBpmnPalette(dir, false);
		this.addStencilPalette('flowchart', 'Flowchart', dir + '/flowchart.xml',
			';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');
		this.addStencilPalette('basic', mxResources.get('basic'), dir + '/basic.xml',
			';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');
		this.addStencilPalette('arrows', mxResources.get('arrows'), dir + '/arrows.xml',
			';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');
		this.addImagePalette('computer', 'Clipart / Computer', imgDir
				+ '/lib/clip_art/computers/', '_128x128.png', [ 'Antivirus',
				'Data_Filtering', 'Database', 'Database_Add', 'Database_Minus',
				'Database_Move_Stack', 'Database_Remove', 'Fujitsu_Tablet',
				'Harddrive', 'IBM_Tablet', 'iMac', 'iPad', 'Laptop', 'MacBook',
				'Mainframe', 'Monitor', 'Monitor_Tower',
				'Monitor_Tower_Behind', 'Netbook', 'Network', 'Network_2',
				'Printer', 'Printer_Commercial', 'Secure_System', 'Server',
				'Server_Rack', 'Server_Rack_Empty', 'Server_Rack_Partial',
				'Server_Tower', 'Software', 'Stylus', 'Touch', 'USB_Hub',
				'Virtual_Application', 'Virtual_Machine', 'Virus',
				'Workstation' ], [ 'Antivirus', 'Data Filtering', 'Database',
	            'Database Add', 'Database Minus', 'Database Move Stack',
	            'Database Remove', 'Fujitsu Tablet', 'Harddrive', 'IBMTablet',
	            'iMac', 'iPad', 'Laptop', 'MacBook', 'Mainframe', 'Monitor',
	            'Monitor Tower', 'Monitor Tower Behind', 'Netbook', 'Network',
	            'Network 2', 'Printer', 'Printer Commercial', 'Secure System',
	            'Server', 'Server Rack', 'Server Rack Empty', 'Server Rack Partial',
	            'Server Tower', 'Software', 'Stylus', 'Touch', 'USB Hub',
	            'Virtual Application', 'Virtual Machine', 'Virus', 'Workstation' ]);
		this.addImagePalette('finance', 'Clipart / Finance', imgDir
				+ '/lib/clip_art/finance/', '_128x128.png', [ 'Arrow_Down',
				'Arrow_Up', 'Coins', 'Credit_Card', 'Dollar', 'Graph',
				'Pie_Chart', 'Piggy_Bank', 'Safe', 'Shopping_Cart',
				'Stock_Down', 'Stock_Up' ], [ 'Arrow_Down', 'Arrow Up',
	            'Coins', 'Credit Card', 'Dollar', 'Graph', 'Pie Chart',
	            'Piggy Bank', 'Safe', 'Shopping Basket', 'Stock Down', 'Stock Up' ]);
		this.addImagePalette('clipart', 'Clipart / Various', imgDir
				+ '/lib/clip_art/general/', '_128x128.png', [ 'Battery_0',
				'Battery_100', 'Battery_50', 'Battery_75', 'Battery_allstates',
				'Bluetooth', 'Earth_globe', 'Empty_Folder', 'Full_Folder',
				'Gear', 'Keys', 'Lock', 'Mouse_Pointer', 'Plug', 'Ships_Wheel',
				'Star', 'Tire' ], [ 'Battery 0%', 'Battery 100%', 'Battery 50%',
	            'Battery 75%', 'Battery', 'Bluetooth', 'Globe',
	            'Empty Folder', 'Full Folder', 'Gear', 'Keys', 'Lock', 'Mousepointer',
	            'Plug', 'Ships Wheel', 'Star', 'Tire' ] );
		this.addImagePalette('networking', 'Clipart / Networking', imgDir
				+ '/lib/clip_art/networking/', '_128x128.png', [ 'Bridge',
				'Certificate', 'Certificate_Off', 'Cloud', 'Cloud_Computer',
				'Cloud_Computer_Private', 'Cloud_Rack', 'Cloud_Rack_Private',
				'Cloud_Server', 'Cloud_Server_Private', 'Cloud_Storage',
				'Concentrator', 'Email', 'Firewall_02', 'Firewall',
				'Firewall-page1', 'Ip_Camera', 'Modem',
				'power_distribution_unit', 'Print_Server',
				'Print_Server_Wireless', 'Repeater', 'Router', 'Router_Icon',
				'Switch', 'UPS', 'Wireless_Router', 'Wireless_Router_N' ],
				[ 'Bridge', 'Certificate', 'Certificate Off', 'Cloud', 'Cloud Computer',
				'Cloud Computer Private', 'Cloud Rack', 'Cloud Rack Private',
				'Cloud Server', 'Cloud Server Private', 'Cloud Storage',
				'Concentrator', 'Email', 'Firewall 1', 'Firewall 2',
				'Firewall', 'Camera', 'Modem',
				'Power Distribution Unit', 'Print Server',
				'Print Server Wireless', 'Repeater', 'Router', 'Router Icon',
				'Switch', 'UPS', 'Wireless Router', 'Wireless Router N' ]);
		this.addImagePalette('people', 'Clipart / People', imgDir
				+ '/lib/clip_art/people/', '_128x128.png', [ 'Suit_Man',
				'Suit_Man_Black', 'Suit_Man_Blue', 'Suit_Man_Green',
				'Suit_Man_Green_Black', 'Suit_Woman', 'Suit_Woman_Black',
				'Suit_Woman_Blue', 'Suit_Woman_Green',
				'Suit_Woman_Green_Black', 'Construction_Worker_Man',
				'Construction_Worker_Man_Black', 'Construction_Worker_Woman',
				'Construction_Worker_Woman_Black', 'Doctor_Man',
				'Doctor_Man_Black', 'Doctor_Woman', 'Doctor_Woman_Black',
				'Farmer_Man', 'Farmer_Man_Black', 'Farmer_Woman',
				'Farmer_Woman_Black', 'Nurse_Man', 'Nurse_Man_Black',
				'Nurse_Man_Green', 'Nurse_Man_Red', 'Nurse_Woman',
				'Nurse_Woman_Black', 'Nurse_Woman_Green', 'Nurse_Woman_Red',
				'Military_Officer', 'Military_Officer_Black',
				'Military_Officer_Woman', 'Military_Officer_Woman_Black',
				'Pilot_Man', 'Pilot_Man_Black', 'Pilot_Woman',
				'Pilot_Woman_Black', 'Scientist_Man', 'Scientist_Man_Black',
				'Scientist_Woman', 'Scientist_Woman_Black', 'Security_Man',
				'Security_Man_Black', 'Security_Woman', 'Security_Woman_Black',
				'Soldier', 'Soldier_Black', 'Tech_Man', 'Tech_Man_Black',
				'Telesales_Man', 'Telesales_Man_Black', 'Telesales_Woman',
				'Telesales_Woman_Black', 'Waiter', 'Waiter_Black',
				'Waiter_Woman', 'Waiter_Woman_Black', 'Worker_Black',
				'Worker_Man', 'Worker_Woman', 'Worker_Woman_Black' ]);
		this.addImagePalette('telco', 'Clipart / Telecommunication', imgDir
				+ '/lib/clip_art/telecommunication/', '_128x128.png', [
				'BlackBerry', 'Cellphone', 'HTC_smartphone', 'iPhone',
				'Palm_Treo', 'Signal_tower_off', 'Signal_tower_on' ],
				[ 'BlackBerry', 'Cellphone', 'HTC smartphone', 'iPhone',
				  'Palm Treo', 'Signaltower off', 'Signaltower on' ]);

		for (var i = 0; i < signs.length; i++)
		{
			this.addStencilPalette('signs' + signs[i], 'Signs / ' + signs[i],
				dir + '/signs/' + signs[i].toLowerCase() + '.xml',
				';fillColor=#000000;strokeColor=none');
		}
		
		for (var i = 0; i < mockups.length; i++)
		{
			this.addStencilPalette('ui' + mockups[i], 'Mockup / ' + mockups[i],
				dir + '/mockup/' + mockups[i].toLowerCase().replace(/ /g, '_') + '.xml');
		}
		
		for (var i = 0; i < ee.length; i++)
		{
			this.addStencilPalette('electrical' + ee[i], 'Electrical / ' + ee[i],
				dir + '/electrical/' + ee[i].toLowerCase().replace(/ /g, '_') + '.xml',
				';fillColor=white;strokeColor=black');
		}

		// Adds AWS stencils
		this.addStencilPalette('awsCompute', 'AWS / Compute', dir + '/aws/compute.xml', ';fillColor=#FF9800;strokeColor=none');
		this.addStencilPalette('awsContentDelivery', 'AWS / Content Delivery', dir + '/aws/content_delivery.xml', ';fillColor=#1EA4DD;strokeColor=none');
		this.addStencilPalette('awsDatabase', 'AWS / Database', dir + '/aws/database.xml', ';fillColor=#6F2D6E;strokeColor=none');
		this.addStencilPalette('awsDeploymentManagement', 'AWS / Deployment Management', dir + '/aws/deployment_management.xml', ';fillColor=#296934;strokeColor=none');
		this.addStencilPalette('awsGroups', 'AWS / Groups', dir + '/aws/groups.xml');
		this.addStencilPalette('awsMessaging', 'AWS / Messaging', dir + '/aws/messaging.xml', ';fillColor=#B8B58A;strokeColor=none');
		this.addStencilPalette('awsMisc', 'AWS / Misc', dir + '/aws/misc.xml', ';fillColor=#F7981F;strokeColor=none');
		this.addStencilPalette('awsNetworking', 'AWS / Networking', dir + '/aws/networking.xml', ';fillColor=#262261;strokeColor=none');
		this.addStencilPalette('awsNonServiceSpecific', 'AWS / Non Service Specific', dir + '/aws/non_service_specific.xml', ';fillColor=#C5C7C9;strokeColor=none');
		this.addStencilPalette('awsOnDemandWorkforce', 'AWS / On Demand Workforce', dir + '/aws/on_demand_workforce.xml', ';fillColor=#C5C7C9;strokeColor=none');
		this.addStencilPalette('awsStorage', 'AWS / Storage', dir + '/aws/storage.xml', ';fillColor=#146EB4;strokeColor=none');

		for (var i = 0; i < pids.length; i++)
		{
			this.addStencilPalette('pid' + pids[i], 'P&ID / ' + pids[i],
				dir + '/pid/' + pids[i].toLowerCase().replace(' ', '_') + '.xml',
				';fillColor=#ffffff;strokeColor=#000000');
		}
		
		this.addStencilPalette('leanMapping', 'Lean Mapping', dir + '/lean_mapping.xml',
			';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');
			
		for (var i = 0; i < cisco.length; i++)
		{
			this.addStencilPalette('cisco' + cisco[i], 'Cisco / ' + cisco[i],
				dir + '/cisco/' + cisco[i].toLowerCase().replace(/ /g, '_') + '.xml',
				';fillColor=#036897;strokeColor=#ffffff;strokeWidth=2', null, null, 1.6);
		}

		this.addMoreShapes();
	};
	
	// Adds the more shapes entry
	Sidebar.prototype.addMoreShapes = function()
	{
		var elt = this.createTitle(mxResources.get('moreShapes') + '...');
		this.container.appendChild(elt);
		
		// Block handling as link in IE
		mxEvent.addListener(elt, 'click', function(evt)
		{
			mxEvent.consume(evt);
		});
		
		this.moreShapes = elt;
 	};
 	
	// Adds the iconfinder library
	Sidebar.prototype.addIconfinder = function()
	{
		// TODO: Fix delayed typing, occasional error in library creation in
		// quirks mode
		var elt = this.createTitle(mxResources.get('images'));
		this.container.appendChild(elt);
		
		var div = document.createElement('div');
		div.className = 'geSidebar';
	    div.style.display = 'none';
		div.style.overflow = 'hidden';
		div.style.width = '100%';
		div.style.padding = '0px';
		
		var inner = document.createElement('div');
		inner.className = 'geTitle';
		inner.style.backgroundColor = 'transparent';
		inner.style.borderColor = 'transparent';
		inner.style.padding = '4px';
		inner.style.textOverflow = 'clip';
		inner.style.cursor = 'default';
		
		if (!mxClient.IS_VML)
		{
			inner.style.paddingRight = '20px';
		}

		var searchResource = mxResources.get('search');
		
		var input = document.createElement('input');
		input.setAttribute('type', 'text');
		input.value = searchResource;
		input.style.border = 'solid 1px #d5d5d5';
		input.style.width = '100%';
		input.style.backgroundImage = 'url(' + IMAGE_PATH + '/clear.gif)';
		input.style.backgroundRepeat = 'no-repeat';
		input.style.backgroundPosition = '100% 50%';
		input.style.paddingRight = '14px';
		inner.appendChild(input);

		var cross = document.createElement('div');
		cross.setAttribute('title', mxResources.get('reset'));
		cross.style.position = 'relative';
		cross.style.left = '-16px';
		cross.style.width = '12px';
		cross.style.height = '14px';
		cross.style.cursor = 'pointer';

		// Workaround for inline-block not supported in IE
		cross.style.display = (mxClient.IS_VML) ? 'inline' : 'inline-block';
		cross.style.top = ((mxClient.IS_VML) ? 0 : 3) + 'px';
		
		// Needed to block event transparency in IE
		cross.style.background = 'url(' + IMAGE_PATH + '/transparent.gif)';
		
		var find;

		mxEvent.addListener(cross, 'click', function()
		{
			input.value = '';
			find();
			input.focus();
		});
		
		inner.appendChild(cross);
		div.appendChild(inner);

		var center = document.createElement('center');
		var button = mxUtils.button(searchResource, function()
		{
			find();
		});
		button.setAttribute('disabled', 'true');
		// Workaround for inherited line-height in quirks mode
		button.style.lineHeight = 'normal';
		center.style.paddingTop = '4px';
		center.style.marginBottom = '12px';
		
		center.appendChild(button);
		div.appendChild(center);
		
		var searchTerm = '';
		var modified = false;
		var active = false;
		var complete = false;
		var page = 0;
		var count = 25;
		
		function clearDiv()
		{
			var child = div.firstChild;
			
			while (child != null)
			{
				var next = child.nextSibling;
				
				if (child != inner && child != center)
				{
					child.parentNode.removeChild(child);
				}
				
				child = next;
			}
		};
		
		find = mxUtils.bind(this, function(callback)
		{
			if (input.value != '' || (!modified && input.value == searchResource))
			{
				if (button.getAttribute('disabled') != 'true')
				{
					if (center.parentNode != null)
					{
						if (searchTerm != input.value)
						{
							clearDiv();
							searchTerm = input.value;
							complete = false;
							page = 0;
						}
						
						if (!active)
						{
							button.style.cursor = 'wait';
							button.innerHTML = mxResources.get('loading') + '...';
							active = true;
							mxUtils.get(ICONFINDER_PATH + '?q=' + encodeURIComponent(searchTerm) + '&c=' + count +
									'&p=' + page, mxUtils.bind(this, function(req)
							{
								active = false;
								page++;
								center.parentNode.removeChild(center);
								var icons = req.getXml().getElementsByTagName('icon');
								
								for (var i = 0; i < icons.length; i++)
								{
									var size = null;
									var url = null;
									var child = icons[i].firstChild;
									
									while (child != null && (size == null || url == null))
									{
										if (child.nodeName == 'size')
										{
											size = parseInt(mxUtils.getTextContent(child));
										}
										else if (child.nodeName == 'image')
										{
											url = mxUtils.getTextContent(child);
										}
		
										child = child.nextSibling;
									}
									
									if (size != null && url != null)
									{
										div.appendChild(this.createVertexTemplate('shape=image;image=' + url, size, size, ''));
									}
								}
								
								if (icons.length < count)
								{
									button.setAttribute('disabled', 'true');
									button.innerHTML = mxResources.get('noMoreResults');
									complete = true;
								}
								else
								{
									button.innerHTML = mxResources.get('moreResults');
								}
								
								button.style.cursor = '';
								
								if (icons.length == 0 && page == 1)
								{
									var err = document.createElement('div');
									err.className = 'geTitle';
									err.style.backgroundColor = 'transparent';
									err.style.borderColor = 'transparent';
									err.style.padding = '4px';
									err.style.textAlign = 'center';
									err.style.cursor = 'default';
									
									mxUtils.write(err, mxResources.get('noResultsFor', [searchTerm]));
									div.appendChild(err);
								}
								
								div.appendChild(center);
							},
							function()
							{
								button.style.cursor = '';
							}));
						}
					}
				}
			}
			else
			{
				clearDiv();
				searchTerm = '';
				button.innerHTML = searchResource;
				button.setAttribute('disabled', 'true');
			}
		});
		
		mxEvent.addListener(input, 'keydown', mxUtils.bind(this, function(evt)
		{
			if (evt.keyCode == 13 /* Enter */)
			{
				find();
			}
		}));
		
		mxEvent.addListener(input, 'keyup', mxUtils.bind(this, function(evt)
		{
			modified = true;
			
			if (input.value == '' || (!modified && input.value == searchResource))
			{
				button.setAttribute('disabled', 'true');
			}
			else if (input.value != searchTerm)
			{
				button.removeAttribute('disabled');
				button.innerHTML = searchResource;
			}
			else if (!active)
			{
				if (complete)
				{
					button.setAttribute('disabled', 'true');
					button.innerHTML = mxResources.get('noMoreResults');
				}
				else
				{
					button.removeAttribute('disabled');
					button.innerHTML = mxResources.get('moreResults');
				}
			}
		}));
		
		mxEvent.addListener(input, 'focus', mxUtils.bind(this, function(evt)
		{
			if (input.value == searchResource && !modified)
			{
				input.value = '';
			}
		}));
		
		mxEvent.addListener(input, 'blur', mxUtils.bind(this, function(evt)
		{
			if (input.value == '')
			{
				input.value = searchResource;
				modified = false;
			}
		}));
	    
	    // Workaround for blocked text selection in Editor
	    mxEvent.addListener(input, 'mousedown', function(evt)
	    {
	    	if (evt.stopPropagation)
	    	{
	    		evt.stopPropagation();
	    	}
	    	
	    	evt.cancelBubble = true;
	    });
	    
	    // Workaround for blocked text selection in Editor
	    mxEvent.addListener(input, 'selectstart', function(evt)
	    {
	    	if (evt.stopPropagation)
	    	{
	    		evt.stopPropagation();
	    	}
	    	
	    	evt.cancelBubble = true;
	    });
	    
		this.addFoldingHandler(elt, div, function()
		{
			// not lazy
		}, false);
	    
		var outer = document.createElement('div');
	    outer.appendChild(div);
	    this.container.appendChild(outer);
		
	    // Keeps references to the DOM nodes
    	this.palettes['images'] = [elt, outer];
 	};
 	
	// Adds BPMN shapes
	var sidebarAddBpmnPalette = Sidebar.prototype.addBpmnPalette;
	
	Sidebar.prototype.addBpmnPalette = function(dir, expand)
	{
		sidebarAddBpmnPalette.apply(this, arguments);

		var w = 50;
		var h = 50;

		this.addPalette('bpmnGateways', 'BPMN Gateways', false, mxUtils.bind(this, function(content)
		{
			var s = 'shape=mxgraph.bpmn.shape;verticalLabelPosition=bottom;verticalAlign=top;perimeter=rhombusPerimeter;background=gateway;';
			
			content.appendChild(this.createVertexTemplate(s + 'outline=none;symbol=exclusiveGw;', w, h, '', 'Exclusive Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=none;symbol=parallelGw;', w, h, '', 'Parallel Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=general;', w, h, '', 'Inclusive Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=none;symbol=complexGw;', w, h, '', 'Complex Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=general;', w, h, '', 'General Start Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=general;', w, h, '', 'General Intermediate Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=general;', w, h, '', 'General End Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=message;', w, h, '', 'Message Standard Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=message;', w, h, '', 'Message Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=message;', w, h, '', 'Message Non-Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=message;', w, h, '', 'Message Catching Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=message;', w, h, '', 'Message Boundary Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=message;', w, h, '', 'Message Boundary Non-Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=message;', w, h, '', 'Message Throwing Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=message;', w, h, '', 'Message End Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=timer;', w, h, '', 'Timer Standard Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=timer;', w, h, '', 'Timer Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=timer;', w, h, '', 'Timer Non-Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=timer;', w, h, '', 'Timer Catching Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=timer;', w, h, '', 'Timer Boundary Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=timer;', w, h, '', 'Timer Boundary Non-Interrupting Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=escalation;', w, h, '', 'Escalation Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=escalation;', w, h, '', 'Escalation Non-Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=escalation;', w, h, '', 'Escalation Boundary Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=escalation;', w, h, '', 'Escalation Boundary Non-Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=escalation;', w, h, '', 'Escalation Throwing Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=escalation;', w, h, '', 'Escalation End Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=conditional;', w, h, '', 'Conditional Standard Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=conditional;', w, h, '', 'Conditional Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=conditional;', w, h, '', 'Conditional Non-Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=conditional;', w, h, '', 'Conditional Catching Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=conditional;', w, h, '', 'Conditional Boundary Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=conditional;', w, h, '', 'Conditional Boundary Non-Interrupting Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=link;', w, h, '', 'Link Catching Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=link;', w, h, '', 'Link Throwing Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=error;', w, h, '', 'Error Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=error;', w, h, '', 'Error Boundary Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=error;', w, h, '', 'Error End Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=cancel;', w, h, '', 'Cancel Boundary Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=cancel;', w, h, '', 'Cancel End Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=compensation;', w, h, '', 'Compensation Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=compensation;', w, h, '', 'Compensation Boundary Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=compensation;', w, h, '', 'Compensation Throwing Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=compensation;', w, h, '', 'Compensation End Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=signal;', w, h, '', 'Signal Standard Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=signal;', w, h, '', 'Signal Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=signal;', w, h, '', 'Signal Non-Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=signal;', w, h, '', 'Signal Catching Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=signal;', w, h, '', 'Signal Boundary Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=signal;', w, h, '', 'Signal Boundary Non-Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=signal;', w, h, '', 'Signal Throwing Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=signal;', w, h, '', 'Signal End Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=multiple;', w, h, '', 'Multiple Standard Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=multiple;', w, h, '', 'Multiple Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=multiple;', w, h, '', 'Multiple Non-Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=multiple;', w, h, '', 'Multiple Catching Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=multiple;', w, h, '', 'Multiple Boundary Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=multiple;', w, h, '', 'Multiple Boundary Non-Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=multiple;', w, h, '', 'Multiple Throwing Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=multiple;', w, h, '', 'Multiple End Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Standard Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Non-Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Catching Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Boundary Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Boundary Non-Interrupting Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=terminate;', w, h, '', 'Terminate Gateway', false));
		}));
		
		this.addPalette('bpmnEvents', 'BPMN Events', false, mxUtils.bind(this, function(content)
		{
			var s = 'shape=mxgraph.bpmn.shape;verticalLabelPosition=bottom;verticalAlign=top;perimeter=ellipsePerimeter;';

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=general;', w, h, '', 'General Start', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=general;', w, h, '', 'General Intermediate', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=general;', w, h, '', 'General End', false));
			
			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=message;', w, h, '', 'Message Standard', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=message;', w, h, '', 'Message Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=message;', w, h, '', 'Message Non-Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=message;', w, h, '', 'Message Catching', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=message;', w, h, '', 'Message Boundary Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=message;', w, h, '', 'Message Boundary Non-Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=message;', w, h, '', 'Message Throwing', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=message;', w, h, '', 'Message End', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=timer;', w, h, '', 'Timer Standard', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=timer;', w, h, '', 'Timer Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=timer;', w, h, '', 'Timer Non-Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=timer;', w, h, '', 'Timer Catching', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=timer;', w, h, '', 'Timer Boundary Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=timer;', w, h, '', 'Timer Boundary Non-Interrupting', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=escalation;', w, h, '', 'Escalation Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=escalation;', w, h, '', 'Escalation Non-Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=escalation;', w, h, '', 'Escalation Boundary Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=escalation;', w, h, '', 'Escalation Boundary Non-Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=escalation;', w, h, '', 'Escalation Throwing', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=escalation;', w, h, '', 'Escalation End', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=conditional;', w, h, '', 'Conditional Standard', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=conditional;', w, h, '', 'Conditional Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=conditional;', w, h, '', 'Conditional Non-Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=conditional;', w, h, '', 'Conditional Catching', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=conditional;', w, h, '', 'Conditional Boundary Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=conditional;', w, h, '', 'Conditional Boundary Non-Interrupting', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=link;', w, h, '', 'Link Catching', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=link;', w, h, '', 'Link Throwing', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=error;', w, h, '', 'Error Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=error;', w, h, '', 'Error Boundary Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=error;', w, h, '', 'Error End', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=cancel;', w, h, '', 'Cancel Boundary Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=cancel;', w, h, '', 'Cancel End', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=compensation;', w, h, '', 'Compensation Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=compensation;', w, h, '', 'Compensation Boundary Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=compensation;', w, h, '', 'Compensation Throwing', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=compensation;', w, h, '', 'Compensation End', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=signal;', w, h, '', 'Signal Standard', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=signal;', w, h, '', 'Signal Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=signal;', w, h, '', 'Signal Non-Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=signal;', w, h, '', 'Signal Catching', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=signal;', w, h, '', 'Signal Boundary Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=signal;', w, h, '', 'Signal Boundary Non-Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=signal;', w, h, '', 'Signal Throwing', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=signal;', w, h, '', 'Signal End', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=multiple;', w, h, '', 'Multiple Standard', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=multiple;', w, h, '', 'Multiple Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=multiple;', w, h, '', 'Multiple Non-Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=multiple;', w, h, '', 'Multiple Catching', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=multiple;', w, h, '', 'Multiple Boundary Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=multiple;', w, h, '', 'Multiple Boundary Non-Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=multiple;', w, h, '', 'Multiple Throwing', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=multiple;', w, h, '', 'Multiple End', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Standard', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Non-Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Catching', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Boundary Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Boundary Non-Interrupting', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=terminate;', w, h, '', 'Terminate', false));
		}));
	};
	
	// Adds ER shapes
	Sidebar.prototype.addErPalette = function()
	{
		var w = 100;
		var h = 100;

		this.addPalette('er', mxResources.get('entityRelation'), false, mxUtils.bind(this, function(content)
		{
			var s = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=2;';
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.attribute;buttonText=Attribute;textColor=#000000;fontSize=17;buttonStyle=dblFrame;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;', w, h, '', 'Attribute', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.bachmans;textColor=#000000;' + mxConstants.STYLE_FONTSIZE + '=17;', w * 3, h * 2, '', 'ERD Bachman\'s Notation', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.chens;textColor=#000000;' + mxConstants.STYLE_FONTSIZE + '=17;', w * 3, h, '', 'ERD Chen\'s Notation', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.cloud;buttonText=Cloud;textColor=#000000;' + mxConstants.STYLE_FONTSIZE + '=17;', w, h, '', 'Cloud', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.entity;buttonStyle=round;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;buttonText=Entity1;', w, h, '', 'Entity', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.entity;buttonStyle=rect;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;buttonText=Entity1;', w, h, '', 'Entity', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.entity;buttonStyle=dblFrame;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;buttonText=Entity1;', w, h, '', 'Entity', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.entityExt;buttonText=Entity;' + mxConstants.STYLE_FILLCOLOR + '=#008cff;fillColor2=#ffffff;' + mxConstants.STYLE_FONTSIZE + '=17;subText=+ attribute 1,+ attribute 2,+ attribute 3;', w, h, '', 'Entity Extended', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.ie;textColor=#000000;' + mxConstants.STYLE_FONTSIZE + '=17;', w * 3.5, h * 1.2, '', 'ERD Information Engineering Notation', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.has;buttonText=Has;textColor=#000000;' + mxConstants.STYLE_FONTSIZE + '=17;buttonStyle=rhombus;', w, h, '', 'Has', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.hierarchy;buttonText=main;subText=sub;textColor=#000000;' + mxConstants.STYLE_FONTSIZE + '=17;buttonStyle=round;', w, h, '', 'Hierarchy', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.note;buttonText=Note;textColor=#000000;' + mxConstants.STYLE_FONTSIZE + '=17;fillColor2=#ffffff;', w, h, '', 'Note', false));

			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_ENDARROW + '=ERzeroToMany;endFill=1;', w, h, '', '0 to many optional', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_ENDARROW + '=ERoneToMany;', w, h, '', '1 to many', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_ENDARROW + '=ERmandOne;', w, h, '', '1 mandatory', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_STARTARROW + '=ERmandOne;' + mxConstants.STYLE_ENDARROW + '=ERmandOne;', w, h, '', '1 to 1', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_ENDARROW + '=ERone;endFill=1;', w, h, '', '1', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_ENDARROW + '=ERzeroToOne;endFill=1;', w, h, '', '0 to 1', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_ENDARROW + '=ERmany;endFill=1;', w, h, '', 'Many', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_STARTARROW + '=ERmany;' + mxConstants.STYLE_ENDARROW + '=ERmany;', w, h, '', 'Many to many', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_STARTARROW + '=ERzeroToOne;' + mxConstants.STYLE_ENDARROW + '=ERzeroToMany;', w, h, '', '1 optional to many optional', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_STARTARROW + '=ERmandOne;' + mxConstants.STYLE_ENDARROW + '=ERzeroToMany;', w, h, '', '1 mandatory to many optional', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_STARTARROW + '=ERmandOne;' + mxConstants.STYLE_ENDARROW + '=ERoneToMany;', w, h, '', '1 mandatory to many mandatory', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_STARTARROW + '=ERzeroToOne;' + mxConstants.STYLE_ENDARROW + '=ERoneToMany;', w, h, '', '1 optional to many mandatory', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_STARTARROW + '=ERoneToMany;' + mxConstants.STYLE_ENDARROW + '=ERoneToMany;', w, h, '', 'Many mandatory to many mandatory', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_STARTARROW + '=ERzeroToMany;' + mxConstants.STYLE_ENDARROW + '=ERoneToMany;', w, h, '', 'Many optional to many mandatory', false));
		}));
	};
	
	// Adds iOS shapes
	Sidebar.prototype.addIosPalette = function()
	{
		mxResources.parse('ios=iOS');
		mxResources.parse('mxgraph.ios.iAddIcon=Add Icon');
		mxResources.parse('mxgraph.ios.iAlertBox=Alert Box');
		mxResources.parse('mxgraph.ios.iAlphaList=Alpha List');
		mxResources.parse('mxgraph.ios.iAppBar=App Bar');
		mxResources.parse('mxgraph.ios.iArrowIcon=Arrow Icon');
		mxResources.parse('mxgraph.ios.iBgFlat=Flat Colored Background');
		mxResources.parse('mxgraph.ios.iBgMap=Map Background');
		mxResources.parse('mxgraph.ios.iBgStriped=Striped Background');
		mxResources.parse('mxgraph.ios.iButton=Button');
		mxResources.parse('mxgraph.ios.iButtonBack=Back Button');
		mxResources.parse('mxgraph.ios.iButtonFw=Forward Button');
		mxResources.parse('mxgraph.ios.iButtonBar=Button Bar');
		mxResources.parse('mxgraph.ios.iCallButtons=Call Buttons');
		mxResources.parse('mxgraph.ios.iCallDialog=Call Dialog');
		mxResources.parse('mxgraph.ios.iCheckboxGroup=Checkbox Group');
		mxResources.parse('mxgraph.ios.iCheckIcon=Check Icon');
		mxResources.parse('mxgraph.ios.iCloudProgressBar=Cloud Progress Bar');
		mxResources.parse('mxgraph.ios.iComboBox=Combo Box');
		mxResources.parse('mxgraph.ios.iCopy=Copy');
		mxResources.parse('mxgraph.ios.iCopyArea=Copy Area');
		mxResources.parse('mxgraph.ios.iIconGrid=Icon Grid');
		mxResources.parse('mxgraph.ios.iDeleteApp=Delete App');
		mxResources.parse('mxgraph.ios.iDeleteIcon=Delete Icon');
		mxResources.parse('mxgraph.ios.iDownloadBar=Download Bar');
		mxResources.parse('mxgraph.ios.iDialogBox=Dialog Box');
		mxResources.parse('mxgraph.ios.iDir=Direction');
		mxResources.parse('mxgraph.ios.iHomePageControl=Home Page Control');
		mxResources.parse('mxgraph.ios.iKeybLett=Keyboard (letters)');
		mxResources.parse('mxgraph.ios.iKeybNumb=Keyboard (numbers)');
		mxResources.parse('mxgraph.ios.iKeybSymb=Keyboard (symbols)');
		mxResources.parse('mxgraph.ios.iLocBar=Location Bar');
		mxResources.parse('mxgraph.ios.iLockButton=Lock Button');
		mxResources.parse('mxgraph.ios.iHorButtonBar=Horizontal Button Bar');
		mxResources.parse('mxgraph.ios.iInfoIcon=Info Icon');
		mxResources.parse('mxgraph.ios.iOnOffButton=On/Off Button');
		mxResources.parse('mxgraph.ios.iOption=Option');
		mxResources.parse('mxgraph.ios.iPageControl=Page Control');
		mxResources.parse('mxgraph.ios.iPad=iPad');
		mxResources.parse('mxgraph.ios.iPhone=iPhone');
		mxResources.parse('mxgraph.ios.iPin=Pin');
		mxResources.parse('mxgraph.ios.iPrevNext=Prev/Next');
		mxResources.parse('mxgraph.ios.iProgressBar=Progress Bar');
		mxResources.parse('mxgraph.ios.iRadioGroup=Radio Group');
		mxResources.parse('mxgraph.ios.iSlider=Slider');
		mxResources.parse('mxgraph.ios.iSortFindIcon=Sort/Find Icon');
		mxResources.parse('mxgraph.ios.iTextInput=Text Input');
		mxResources.parse('mxgraph.ios.iTopBar=Top Bar');
		mxResources.parse('mxgraph.ios.iTopBarLocked=Top Bar Locked');
		mxResources.parse('mxgraph.ios.iURLBar=URL Bar');
		mxResources.parse('mxgraph.ios.iVideoControls=Video Controls');
			
		this.addPalette('ios', 'iOS', false, mxUtils.bind(this, function(content)
		{
			var sizeX = 200; //reference size for iPhone and all other iOS shapes
			
			var sizeY = 2 * sizeX; //change only sizeX, to avoid changing aspect ratio
			
			var s = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=1;';

			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iPhone;bgStyle=bgGreen;' + mxConstants.STYLE_FILLCOLOR + '=#aaaaaa;', sizeX, sizeY, '', 'iPhone (portrait)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iPhone;' + mxConstants.STYLE_DIRECTION + '=' + mxConstants.DIRECTION_NORTH + ';bgStyle=bgGreen;' + mxConstants.STYLE_FILLCOLOR + '=#aaaaaa;', sizeY, sizeX, '', 'iPhone (landscape)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iPad;bgStyle=bgGreen;' + mxConstants.STYLE_FILLCOLOR + '=#aaaaaa;', sizeX * 2.425, sizeY * 1.5625, '', 'iPad (portrait)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iPad;' + mxConstants.STYLE_DIRECTION + '=' + mxConstants.DIRECTION_NORTH + ';bgStyle=bgGreen;' + mxConstants.STYLE_FILLCOLOR + '=#aaaaaa;', sizeY * 1.5625, sizeX * 2.425, '', 'iPad (landscape)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iBgFlat;' + mxConstants.STYLE_STROKECOLOR + '=#18211b;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff', sizeX * 0.875, sizeY * 0.7, '', 'iPad background (white)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iBgFlat;' + mxConstants.STYLE_STROKECOLOR + '=#18211b;' + mxConstants.STYLE_FILLCOLOR + '=#1f2923', sizeX * 0.875, sizeY * 0.7, '', 'iPad background (green)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iBgFlat;' + mxConstants.STYLE_STROKECOLOR + '=#18211b;' + mxConstants.STYLE_FILLCOLOR + '=#dddddd', sizeX * 0.875, sizeY * 0.7, '', 'iPad background (gray)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iBgStriped;' + mxConstants.STYLE_STROKECOLOR + '=#18211b;' + mxConstants.STYLE_FILLCOLOR + '=#5D7585;strokeColor2=#657E8F;', sizeX * 0.875, sizeY * 0.7, '', 'iPad background (striped)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iBgMap;' + mxConstants.STYLE_STROKECOLOR + '=#18211b;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;strokeColor2=#008cff;fillColor2=#96D1FF;', sizeX * 0.875, sizeY * 0.7, '', 'iPad background (map)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iButtonBar;' + mxConstants.STYLE_STROKECOLOR + '=#444444;strokeColor2=#c4c4c4;' + mxConstants.STYLE_FONTCOLOR + '=#666666;fillColor2=#ffffff;buttonText=+Item 1,+Item 2,Item 3,Item 4;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.825, sizeY * 0.125, '', 'Button bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iAppBar;', sizeX * 0.87, sizeY * 0.0375, '', 'App bar (portrait)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iAppBar;', sizeX * 1.395, sizeY * 0.0375, '', 'App bar (landscape)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iTopBar;', sizeX * 0.87, sizeY * 0.0375, '', 'Top bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iTopBarLocked;', sizeX * 0.87, sizeY * 0.0375, '', 'Top bar locked', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iButton;' + mxConstants.STYLE_STROKECOLOR + '=#444444;textColor2=#ffffff;buttonText=Button;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#dddddd;fillColor2=#3D5565;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.2175, sizeY * 0.0375, '', 'Button', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iButtonBack;' + mxConstants.STYLE_STROKECOLOR + '=#444444;textColor2=#ffffff;buttonText=Button;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#dddddd;fillColor2=#3D5565;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.2175, sizeY * 0.0375, '', 'Back button', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iButtonFw;' + mxConstants.STYLE_STROKECOLOR + '=#444444;textColor2=#ffffff;buttonText=Button;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#dddddd;fillColor2=#3D5565;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.2175, sizeY * 0.0375, '', 'Forward button', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iPrevNext;' + mxConstants.STYLE_STROKECOLOR + '=#444444;' + mxConstants.STYLE_FILLCOLOR + '=#dddddd;fillColor2=#3D5565;fillColor3=#ffffff;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.2175, sizeY * 0.0375, '', 'Prev/next button', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iTextInput;' + mxConstants.STYLE_STROKECOLOR + '=#444444;textColor2=#000000;buttonText=Default text;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.2175, sizeY * 0.0375, '', 'Text input', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iRadioGroup;' + mxConstants.STYLE_STROKECOLOR + '=#666666;textColor2=#666666;buttonText=Option 1,Option 2,+Option 3,Option 4;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.825, sizeY * 0.125, '', 'Radiobuttons', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iCheckboxGroup;' + mxConstants.STYLE_STROKECOLOR + '=#666666;textColor2=#666666;buttonText=Setting 1,Setting 2,+Setting 3,Setting 4;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.825, sizeY * 0.125, '', 'Checkboxes', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iComboBox;' + mxConstants.STYLE_STROKECOLOR + '=#444444;textColor2=#666666;buttonText=Option 1;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#dddddd;fillColor2=#3D5565;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.29, sizeY * 0.0375, '', 'Combobox', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iOnOffButton;' + mxConstants.STYLE_STROKECOLOR + '=#444444;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;buttonState=on', sizeX * 0.2175, sizeY * 0.0375, '', 'On-off button', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iTextInput;' + mxConstants.STYLE_STROKECOLOR + '=#444444;textColor2=#000000;buttonText=********;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.2175, sizeY * 0.0375, '', 'Password field', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iAlertBox;buttonText=Something happened,Button text,Alert description text,description text second line;', sizeX * 0.75, sizeY * 0.25, '', 'Alert box', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iDialogBox;buttonText=Something happened,Cancel,OK,Alert description text,description text second line;', sizeX * 0.75, sizeY * 0.25, '', 'Dialog box', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iLockButton;', sizeX * 0.87, sizeY * 0.125, '', 'Lock button', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iArrowIcon;' + mxConstants.STYLE_FILLCOLOR + '=#8BbEff;fillColor2=#135Ec8;' + mxConstants.STYLE_STROKECOLOR + '=#ffffff;', sizeX * 0.075, sizeY * 0.0375, '', 'Arrow', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iDeleteIcon;' + mxConstants.STYLE_FILLCOLOR + '=#e8878E;fillColor2=#BD1421;' + mxConstants.STYLE_STROKECOLOR + '=#ffffff;', sizeX * 0.075, sizeY * 0.0375, '', 'Delete', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iAddIcon;' + mxConstants.STYLE_FILLCOLOR + '=#7AdF78;fillColor2=#1A9917;' + mxConstants.STYLE_STROKECOLOR + '=#ffffff;', sizeX * 0.075, sizeY * 0.0375, '', 'Add', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iInfoIcon;' + mxConstants.STYLE_FILLCOLOR + '=#8BbEff;fillColor2=#135Ec8;' + mxConstants.STYLE_STROKECOLOR + '=#ffffff;', sizeX * 0.075, sizeY * 0.0375, '', 'Info', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iSortFindIcon;' + mxConstants.STYLE_FILLCOLOR + '=#8BbEff;fillColor2=#135Ec8;' + mxConstants.STYLE_STROKECOLOR + '=#ffffff;', sizeX * 0.075, sizeY * 0.0375, '', 'Sort/find', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iCheckIcon;' + mxConstants.STYLE_FILLCOLOR + '=#e8878E;fillColor2=#BD1421;' + mxConstants.STYLE_STROKECOLOR + '=#ffffff;', sizeX * 0.075, sizeY * 0.0375, '', 'Check', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iKeybLett;', sizeX * 0.87, sizeY * 0.25, '', 'Keyboard (letters)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iKeybNumb;', sizeX * 0.87, sizeY * 0.25, '', 'Keyboard (numbers)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iKeybSymb;', sizeX * 0.87, sizeY * 0.25, '', 'Keyboard (symbols)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iDeleteApp;' + mxConstants.STYLE_FILLCOLOR + '=#cccccc;fillColor2=#000000;' + mxConstants.STYLE_STROKECOLOR + '=#ffffff;', sizeX * 0.075, sizeY * 0.0375, '', 'Delete app', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iDir;', sizeX * 0.5, sizeY * 0.25, '', 'Direction', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iLocBar;barPos=80;pointerPos=bottom;buttonText=' + '5th Street Music Store', sizeX * 0.775, sizeY * 0.08125, '', 'Location bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iCallDialog;', sizeX * 0.75, sizeY * 0.3125, '', 'Call Dialog', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iCallButtons;', sizeX * 0.87, sizeY * 0.575, '', 'Call buttons', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iOption;barPos=80;pointerPos=bottom;buttonText=' + 'Option', sizeX * 0.375, sizeY * 0.06875, '', 'Option', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iAlphaList;' + mxConstants.STYLE_FONTSIZE + '=7.5;'+ mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.075, sizeY * 0.5625, '', 'Alphabet list', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iHorButtonBar;' + mxConstants.STYLE_STROKECOLOR + '=#444444;strokeColor2=#c4c4c4;' + mxConstants.STYLE_FONTCOLOR + '=#666666;fillColor2=#ffffff;buttonText=+Item 1,+Item 2,Item 3,Item 4;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;fillColor2=#008cff', sizeX * 0.825, sizeY * 0.03125, '', 'Horizontal button bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iPin;fillColor2=#00dd00;fillColor3=#004400;' + mxConstants.STYLE_STROKECOLOR + '=#006600;', sizeX * 0.05, sizeY * 0.0625, '', 'Pin', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iPin;fillColor2=#dd0000;fillColor3=#440000;' + mxConstants.STYLE_STROKECOLOR + '=#660000;', sizeX * 0.05, sizeY * 0.0625, '', 'Pin', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iPin;fillColor2=#ccccff;fillColor3=#0000ff;' + mxConstants.STYLE_STROKECOLOR + '=#000066;', sizeX * 0.05, sizeY * 0.0625, '', 'Pin', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iPin;fillColor2=#ffff00;fillColor3=#888800;' + mxConstants.STYLE_STROKECOLOR + '=#999900;', sizeX * 0.05, sizeY * 0.0625, '', 'Pin', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iPin;fillColor2=#ffa500;fillColor3=#885000;' + mxConstants.STYLE_STROKECOLOR + '=#997000;', sizeX * 0.05, sizeY * 0.0625, '', 'Pin', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iVideoControls;barPos=10;', sizeX * 0.87, sizeY * 0.125, '', 'Video controls', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iURLBar;buttonText=Page title,http://www.draw.io,Cancel;', sizeX * 0.87, sizeY * 0.075, '', 'URL bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iSlider;barPos=20;', sizeX * 0.75, sizeY * 0.025, '', 'Slider', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iProgressBar;barPos=40;', sizeX * 0.75, sizeY * 0.025, '', 'Progress bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iCloudProgressBar;barPos=20;', sizeX * 0.75, sizeY * 0.025, '', 'Cloud progress bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iDownloadBar;buttonText=Downloading 4 of 6' + ';barPos=30;', sizeX * 0.87, sizeY * 0.075, '', 'Download bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iScreenNameBar;fillColor2=#000000;fillColor3=#ffffff;buttonText=Screen Name;textColor=#ffffff', sizeX * 0.87, sizeY * 0.0625, '', 'Screen name bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iIconGrid;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxConstants.STYLE_STROKECOLOR + '=#000000;gridSize=3,3;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.75, sizeY * 0.375, '', 'Icon grid', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iCopy;' + mxConstants.STYLE_FILLCOLOR + '=#000000;' + mxConstants.STYLE_STROKECOLOR + '=#000000;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;buttonText=Copy;textColor=#ffffff;fillColor2=#000000;fillColor3=#ffffff;', sizeX * 0.2, sizeY * 0.06875, '', 'Copy', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iCopyArea;' + mxConstants.STYLE_STROKECOLOR + '=#000000;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;buttonText=Copy;textColor=#ffffff;fillColor2=#000000;fillColor3=#ffffff;', sizeX * 0.3, sizeY * 0.2, '', 'Copy area', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iHomePageControl;' + mxConstants.STYLE_FILLCOLOR + '=#666666;' + mxConstants.STYLE_STROKECOLOR + '=#cccccc;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.25, sizeY * 0.0125, '', 'Home page control', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iPageControl;' + mxConstants.STYLE_FILLCOLOR + '=#666666;' + mxConstants.STYLE_STROKECOLOR + '=#cccccc;', sizeX * 0.25, sizeY * 0.0125, '', 'Page control', false));
		}));
	};
})();