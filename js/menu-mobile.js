//////////open menu mobile
$(function() {
	$('#menu').mmenu({
		extensions: ['pagedim-black', 'position-right'],
		counters: true,
		language: ['en', 'vi'],
		searchfield: {
			add: true,
			search: false,
		},
		iconbar: {
			add: true,
			top: ["<a href='/'><i class='fa fa-home'></i></a>"],
			bottom: [
				`<ul class="lang">
					<li><a href="#">vi</a></li>
					<li><a href="#">en</a></li>
				</ul>`,
			],
		},
		navbars: [
			{
				position: 'top',
				content: ['searchfield'],
			},
			{
				position: 'bottom',
				content: [
					`<div class="copyright">
                        <p>@2019 Thaco - Trường Hải Auto</p>
                    </div>`,
				],
			},
		],
	});
});
