$(function() {
	
	var filter = {
			type: 0, //层选项
			word: '', //关键字
			page: 1
		}
	var words=GetQueryString('word');
	filter.word=words;
		$('.main-box input').val(words);
		if(words!=""&&words!=null){		
			$('.main-box .search-div i').css({'display':'none'});
		}else{
			$('.main-box .search-div i').css({'display':'block'});
		}
		//切换层
	$('#nav li').on('tap', function() {
		//设置筛选条件
		var typeid = $(this).attr('type');
		filter = {
			type: typeid
		};
		$('#nav ul li').removeClass('active-nav')
		$(this).addClass('active-nav');
		$('.mui-table-view').html('');
		//回到页面顶部
		mui('.box').pullRefresh().scrollTo(0, 0, 150);
		mui('.box').pullRefresh().pulldownLoading();
	});
	//回到顶部
	$('.suspend .gotop').on('tap', function() {
		mui('.box').pullRefresh().scrollTo(0, 0, 500);
	});
	
	//点击搜索
	$('.search').on('tap',function(){
		//层滑动回去
		$('.search-box').css({"-webkit-transform":"translateX(100%)"});
		$('.main-box').css({"-webkit-transform":"translateX(0)"});
		words=$('.search-box input').val().trim();
		filter.word=words;
		$('.main-box input').val(words);
		if(words!=""&&words!=null){		
			$('.main-box .search-div i').css({'display':'none'});
		}else{
			$('.main-box .search-div i').css({'display':'block'});
		}
		mui('.box').pullRefresh().pulldownLoading();
	});

	var metro = new metroRedux();
	metro.pullrefresh(function() {
		//下拉刷新
		//通过fiter去ajax请求数据
		//以下为模拟数据
		var html;
		if(filter.type == 0) {
			html = '<div class="question-box"><div class="head-box flex-box"><div class="headpic"><img src="img/headpic.png" width="100%" /></div><div class="head-text"><div class="nickname">nickname</div><div class="status"><span>已解决</span><span class="reward color-7f">悬赏<span class="score">0</span>分</span></div></div><div class="report"><a href="report.html">举报</a></div></div><div class="brief"><a href="questiondetail.html">这是问题描述，点击进入问题详情页</a></div><div class="bottom-box clearfix"><div class="time">2017年03月02日</div><div class="subject over-circle">建设工程经济</div><div class="color-7f answercount"><a href="questiondetail.html">10条回答</a></div></div></div>';
		} else if(filter.type == 1) {
			html = '<div class="question-box"><div class="head-box flex-box"><div class="headpic"><img src="img/headpic.png" width="100%" /></div><div class="head-text"><div class="nickname">nickname</div><div class="status"><span>未解决</span><span class="reward color-7f">悬赏<span class="score">0</span>分</span></div></div><div class="report">举报</div></div><div class="brief">这是问题描述，点击进入问题详情页</div><div class="bottom-box clearfix"><div class="time">2017年03月02日</div><div class="subject over-circle">建设工程经济</div><div class="color-7f answercount">10条回答</div></div></div>';
		} else {
			html = '<div class="question-box"><div class="head-box flex-box"><div class="headpic"><img src="img/headpic.png" width="100%" /></div><div class="head-text"><div class="nickname">nickname</div><div class="status"><span>已解决</span><span class="reward color-7f">悬赏<span class="score">10</span>分</span></div></div><div class="report">举报</div></div><div class="brief">这是问题描述，点击进入问题详情页</div><div class="bottom-box clearfix"><div class="time">2017年03月02日</div><div class="subject over-circle">建设工程经济</div><div class="color-7f answercount">10条回答</div></div></div>';
		}
		$('.mui-table-view').html(html + html + html + html + html + html + html + html);
		//注意，加载完新数据后，必须执行如下代码，注意：若为ajax请求，则需将如下代码放置在处理完ajax响应数据之后		
		mui(".box").pullRefresh().endPulldownToRefresh();

	}, function() {
		//上拉加载
		//通过fiter去ajax请求数据
		//以下为模拟数据
		$('.mui-table-view').append('<div class="question-box"><div class="head-box flex-box"><div class="headpic"><img src="img/headpic.png" width="100%" /></div><div class="head-text"><div class="nickname">nickname</div><div class="status"><span>已解决</span><span class="reward color-7f">悬赏<span class="score">20</span>分</span></div></div><div class="report">举报</div></div><div class="brief">这是问题描述，点击进入问题详情页</div><div class="bottom-box clearfix"><div class="time">2017年03月02日</div><div class="subject over-circle">建设工程经济</div><div class="color-7f answercount">10条回答</div></div></div>');
		//注意：
		//1、加载完新数据后，必须执行如下代码，true表示没有更多数据了：
		//2、若为ajax请求，则需将如下代码放置在处理完ajax响应数据之后
		mui('.box').pullRefresh().endPullupToRefresh(false);
	});

});
