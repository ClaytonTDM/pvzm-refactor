oS.Init({
	PicArr: (function () {
		a = "images/interface/";
		return [
			ShadowPNG,
			a + "TA.png",
			a + "TAUI1.png",
			a + "TAUIPLAY.png",
			a + "TA10.png",
			a + "TA20.png",
			a + "TA30.png",
			a + "TA40.png",
			a + "TA50.png",
			a + "TA60.png",
			a + "TA70.png",
			a + "TA80.png",
			a + "TA90.png",
			a + "TA100.png",
			a + "TAWIN.png",
			a + "TA101.png",
		];
	})(),
	LevelName: "魔塔界面",
	LevelEName: 150,
	ShowScroll: 1,
	LoadMusic: "plantsgarden",
	StartGameMusic: "plantsgarden",
	AudioArr: ["plantsgarden", "pvzs"],
	backgroundImage: "images/interface/TA.png",
	LoadAccess(a) {
		NewImg(
			"imgSF",
			"images/interface/TAUI1.png",
			"left:740px;top:360px",
			EDAll,
			{
				onclick() {
					SelectModal(0);
					SetBlock($("dSurface"), $("iSurfaceBackground"));
				},
			}
		);
		NewImg(
			"imgSF",
			"images/interface/TAUIPLAY.png",
			"left:380px;top:330px",
			EDAll,
			{
				onclick() {
					SelectModal(151);
				},
			}
		);
		NewImg(
			"imgSF",
			"images/interface/TA10.png",
			"left:700px;top:130px",
			EDAll,
			{
				onclick() {
					SelectModal(160);
				},
			}
		);
		NewImg(
			"imgSF",
			"images/interface/TA20.png",
			"left:700px;top:160px",
			EDAll,
			{
				onclick() {
					SelectModal(170);
				},
			}
		);
		NewImg(
			"imgSF",
			"images/interface/TA30.png",
			"left:700px;top:190px",
			EDAll,
			{
				onclick() {
					SelectModal(180);
				},
			}
		);
		NewImg(
			"imgSF",
			"images/interface/TA40.png",
			"left:700px;top:220px",
			EDAll,
			{
				onclick() {
					SelectModal(190);
				},
			}
		);
		NewImg(
			"imgSF",
			"images/interface/TA50.png",
			"left:700px;top:250px",
			EDAll,
			{
				onclick() {
					SelectModal(200);
				},
			}
		);
		NewImg(
			"imgSF",
			"images/interface/TA60.png",
			"left:700px;top:280px",
			EDAll,
			{
				onclick() {
					SelectModal(210);
				},
			}
		);
		NewImg(
			"imgSF",
			"images/interface/TA70.png",
			"left:700px;top:310px",
			EDAll,
			{
				onclick() {
					SelectModal(220);
				},
			}
		);
		NewImg(
			"imgSF",
			"images/interface/TA80.png",
			"left:700px;top:340px",
			EDAll,
			{
				onclick() {
					SelectModal(230);
				},
			}
		);
		NewImg(
			"imgSF",
			"images/interface/TA90.png",
			"left:700px;top:370px",
			EDAll,
			{
				onclick() {
					SelectModal(240);
				},
			}
		);
		NewImg(
			"imgSF",
			"images/interface/TA100.png",
			"left:700px;top:400px",
			EDAll,
			{
				onclick() {
					SelectModal(250);
				},
			}
		);
		NewImg(
			"imgSF",
			"images/interface/TA101.png",
			"left:790px;top:20px",
			EDAll,
			{
				onclick() {
					SelectModal(252);
				},
			}
		);
	},
});
