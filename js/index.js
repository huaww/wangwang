$(function(){
		//$(".tabs").tabs( );
		// $(".ulbtn li").on("click",function(){
		// 	$(".ulbtn li").css({
		// 		background:"#398CA0",
		// 		width:"30%"
		// 	});
		// 	$(this).css({
		// 		// border:"1px solid #58DCDF",
		// 		background:"#58DCDF",
		// 		width:"70%",
		// 		transition:"all .3s ease-out"
		// 	});
			
		// });
	//_____________swiper
	
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'progress'
    });
    

	// _________________map
	$('#document').ready(function(){
		 getEcharts();
	 });


	function getEcharts(){
    // Step:3 conifg ECharts's path, link to echarts.js from current page.
    // Step:3 为模块加载器配置echarts的路径，从当前页面链接到echarts.js，定义所需图表路径
    require.config({
        paths: {
            echarts: './js'
        }
    });
    
    // Step:4 require echarts and use it in the callback.
    // Step:4 动态加载echarts然后在回调函数中开始使用，注意保持按需加载结构定义图表路径
    require(
        [
            'echarts',
            'echarts/chart/map'
        ],
        function (ec) {
            // --- 地图 ---
            var myChart2 = ec.init(document.getElementById('mainMap'));
            myChart2.setOption({
				dataRange: {
					min : 6,
					max : 10,
					padding:'1px',
					// calculable : false,
					//color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
					color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
					textStyle:{
						color:'#ccc'
					}
				},
				series : [
					{
						name: '全国',
						type: 'map',
						roam: false,
						hoverable: false,
						mapType: 'china',
						itemStyle:{
							normal:{
								borderColor:'rgba(0,204,204,.5)',
								borderWidth:1,
								areaStyle:{
									color: '#153157 '
								}
							}
						},
						data:[],
						markLine : {
							smooth:true,
							symbol: ['none', 'circle'],  
							symbolSize : 1,
							itemStyle : {
								normal: {
									color:'#fff',
									borderWidth:1,
									borderColor:'rgba(30,144,255,0.5)'
								}
							},
							data : [
							],
						},
						geoCoord: {
							'上海': [121.4648,31.2891],
							'东莞': [113.8953,22.901],
							'东营': [118.7073,37.5513],
							'中山': [113.4229,22.478],
							'临汾': [111.4783,36.1615],
							'临沂': [118.3118,35.2936],
							'丹东': [124.541,40.4242],
							'丽水': [119.5642,28.1854],
							'乌鲁木齐': [87.9236,43.5883],
							'佛山': [112.8955,23.1097],
							'保定': [115.0488,39.0948],
							'兰州': [103.5901,36.3043],
							'包头': [103.3467,40.8899],
							'北京': [116.4551,40.2539],
							'北海': [109.314,21.6211],
							'南京': [118.8062,33.9208],
							'南宁': [108.479,24.1152],
							'南昌': [116.0046,28.6633],
							'南通': [121.1023,32.1625],
							'厦门': [118.1689,24.6478],
							'台州': [121.1353,28.6688],
							'合肥': [116.89,33.0581],
							'呼和浩特': [111.4124,40.4901],
							'咸阳': [108.4131,34.8706],
							'哈尔滨': [128.9688,47.368],
							'唐山': [118.4766,39.6826],
							'嘉兴': [120.9155,30.6354],
							'大同': [113.7854,39.8035],
							'大连': [122.2229,39.4409],
							'天津': [117.4219,39.4189],
							'太原': [112.5352,38.9413],
							'威海': [121.9482,37.1393],
							'宁波': [121.5967,29.6466],
							'宝鸡': [107.1826,34.3433],
							'宿迁': [118.5535,33.7775],
							'常州': [119.4543,31.5582],
							'广州': [113.5107,24.2196],
							'廊坊': [116.521,39.0509],
							'延安': [109.1052,36.4252],
							'张家口': [115.1477,40.8527],
							'徐州': [117.5208,34.3268],
							'德州': [116.6858,37.2107],
							'惠州': [114.6204,23.1647],
							'成都': [101.9526,30.7617],
							'扬州': [119.4653,32.8162],
							'承德': [117.5757,41.4075],
							'拉萨': [91.1865,30.1465],
							'无锡': [120.3442,31.5527],
							'日照': [119.2786,35.5023],
							'昆明': [102.9199,25.4663],
							'杭州': [119.3313,28.9773],
							'枣庄': [117.323,34.8926],
							'柳州': [109.3799,24.9774],
							'株洲': [113.5327,27.0319],
							'武汉': [111.3896,31.4628],
							'汕头': [117.1692,23.3405],
							'江门': [112.6318,22.1484],
							'沈阳': [123.8238,42.1216],
							'沧州': [116.8286,38.2104],
							'河源': [114.917,23.9722],
							'泉州': [118.3228,26.1147],
							'泰安': [117.0264,36.0516],
							'泰州': [120.0586,32.5525],
							'济南': [118.3582,36.8701],
							'济宁': [116.8286,35.3375],
							'海口': [110.3893,19.8516],
							'淄博': [118.0371,36.6064],
							'淮安': [118.927,33.4039],
							'深圳': [114.5435,22.5439],
							'清远': [112.9175,24.3292],
							'温州': [120.498,27.8119],
							'渭南': [109.7864,35.0299],
							'湖州': [119.8608,30.7782],
							'湘潭': [112.5439,27.7075],
							'滨州': [117.8174,37.4963],
							'潍坊': [119.0918,36.524],
							'烟台': [120.7397,37.5128],
							'玉溪': [101.9312,23.8898],
							'珠海': [113.7305,22.1155],
							'盐城': [120.2234,33.5577],
							'盘锦': [121.9482,41.0449],
							'石家庄': [115.2995,38.8006],
							'福州': [119.4543,25.9222],
							'秦皇岛': [119.2126,40.0232],
							'绍兴': [120.564,29.7565],
							'聊城': [115.9167,36.4032],
							'肇庆': [112.1265,23.5822],
							'舟山': [122.2559,30.2234],
							'苏州': [120.6519,31.3989],
							'莱芜': [117.6526,36.2714],
							'菏泽': [115.6201,35.2057],
							'营口': [122.4316,40.4297],
							'葫芦岛': [120.1575,40.578],
							'衡水': [115.8838,37.7161],
							'衢州': [118.6853,28.8666],
							'西宁': [95.4038,36.8207],
							'西安': [109.1162,34.5004],
							'贵阳': [106.6992,26.7682],
							'连云港': [119.1248,34.552],
							'邢台': [114.8071,37.2821],
							'邯郸': [114.4775,36.535],
							'郑州': [113.6668,34.9234],
							'鄂尔多斯': [108.9734,39.2487],
							'重庆': [107.7539,30.1904],
							'金华': [120.0037,29.1028],
							'铜川': [109.0393,35.1947],
							'银川': [106.3586,37.1775],
							'镇江': [119.4763,31.9702],
							'长春': [125.8154,44.2584],
							'长沙': [112.0823,28.6568],
							'长治': [112.8625,36.4746],
							'阳泉': [113.4778,38.0951],
							'青岛': [120.4651,36.3373],
							
							'韶关': [113.7964,24.7028],
							'新疆': [82.6864,40.7728],
							'台北': [120.9864,23.7728],
						},
						markPoint : {
							symbol:'emptyCircle',
							symbolSize : function (v){
								return 5 + v/10
							},
							effect : {
								show: true,
								shadowBlur : 0
							},
							itemStyle:{
								normal:{
									label:{show:false}
								},
								emphasis: {
									label:{position:'top'}
								}
							},
							data : [
								{name:'上海',value:9},
								// {name:'没的',value:100},
								{name:'新疆',value:9},
								{name:'成都',value:8},
								{name:'西宁',value:7},
								{name:'银川',value:6},
								{name:'南宁',value:4},
								{name:'广州',value:3},
								{name:'台北',value:2},
								{name:'泉州',value:5},
								{name:'包头',value:7},
								{name:'哈尔滨',value:2},
								{name:'长春',value:1},
								{name:'沈阳',value:7},
								{name:'石家庄',value:3},
								{name:'太原',value:8},
								{name:'西安',value:7},
								{name:'武汉',value:5},
								{name:'长沙',value:7},
								{name:'南昌',value:5},
								{name:'杭州',value:4},
								{name:'合肥',value:3},
								{name:'南京',value:8},
								{name:'济南',value:5},
								{name:'郑州',value:7},

							// 24

							]
						}
					},
					{
						name: '北京 Top10',
						type: 'map',
						mapType: 'china',
						data:[],
						markLine : {
							smooth:true,
							effect : {
								show: true,
								scaleSize: 1,
								period: 50,
								color: '#fff',
								shadowBlur: 10
							},
							itemStyle : {
								normal: {
									label:{show:false},
									borderWidth:1,
									lineStyle: {
										type: 'solid',
										shadowBlur: 1
									}
								}
							},
							data : [
								[{name:'上海'}, {name:'上海',value: 9}],
								// [{name:'没的'}, {name:'上海',value:100}],
								[{name:'新疆'}, {name:'上海',value:9}],
								[{name:'成都'}, {name:'上海',value:8}],
								[{name:'西宁'}, {name:'上海',value:7}],
								[{name:'银川'}, {name:'上海',value:6}],
								[{name:'南宁'}, {name:'上海',value:4}],
								[{name:'广州'}, {name:'上海',value:3}],
								[{name:'台北'}, {name:'上海',value:2}],
								[{name:'泉州'}, {name:'上海',value:1}],
								[{name:'包头'}, {name:'上海',value:1}],
								[{name:'哈尔滨'}, {name:'上海',value:1}],
								[{name:'长春'}, {name:'上海',value:1}],
								[{name:'沈阳'}, {name:'上海',value:1}],
								[{name:'石家庄'}, {name:'上海',value:1}],
								[{name:'太原'}, {name:'上海',value:1}],
								[{name:'西安'}, {name:'上海',value:1}],
								[{name:'武汉'}, {name:'上海',value:1}],
								[{name:'长沙'}, {name:'上海',value:1}],
								[{name:'南昌'}, {name:'上海',value:1}],
								[{name:'杭州'}, {name:'上海',value:1}],
								[{name:'合肥'}, {name:'上海',value:1}],
								[{name:'南京'}, {name:'上海',value:1}],
								[{name:'济南'}, {name:'上海',value:1}],
								[{name:'郑州'}, {name:'上海',value:1}],



								
							]
						},
						markPoint : {
							symbol:'emptyCircle',
							symbolSize : function (v){
								return 0.1
							},
							effect : {
								show: false,
								shadowBlur : 0
							},
							itemStyle:{
								normal:{
									label:{show:true,
										  position:'top',
										  textStyle: {
													fontSize: 14
												}
										  }
								},
								emphasis: {
									label:{show:false}
								}
							},
							data : [
								//{name:'上海',value: 9 },
								// {name:'广州',value:90},
								// {name:'大连',value:80},
								// {name:'南宁',value:70},
								// {name:'南昌',value:60},
								// // {name:'拉萨',value:100},
								// {name:'长春',value:40},
								// {name:'包头',value:30},
								// {name:'重庆',value:20},
								// {name:'常州',value:10}
							]
						}
					}
				]
        });
	});
};





	//__________________map
})
