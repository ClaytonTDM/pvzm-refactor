oS.Init(
	{
		PName: [oRepeater, oFumeShroom],
		ZName: [oZombie, oPoleVaultingZombie],
		PicArr: [
			"images/interface/background2.jpg",
			"images/interface/trophy.png",
		],
		backgroundImage: "images/interface/background2.jpg",
		CanSelectCard: 0,
		DKind: 0,
		LevelName: "Triple Threat Defense",
		LvlEName: "TripleThreatDefense",
		LargeWaveFlag: { 10: $("imgFlag1") },
		StaticCard: 0,
		InitLawnMower() {},
		StartGameMusic: "LoonSkirmish",
		StartGame() {
			NewEle(
				0,
				"div",
				"width:22px;height:502px;margin:75px 0 0 485px;position:absolute;z-index:1;background:url(images/interface/Stripe.png)",
				0,
				$("tGround")
			);
			StopMusic();
			PlayMusic((oS.LoadMusic = oS.StartGameMusic));
			SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
			SetHidden($("dSunNum"));
			oS.InitLawnMower();
			PrepareGrowPlants(() => {
				oP.Monitor({
					f() {
						(function () {
							var a = ArCard.length;
							if (a < 10) {
								var c = oS.PName;
								var b = Math.floor(Math.random() * c.length);
								var e = c[b];
								var d = e.prototype;
								var f = "dCard" + Math.random();
								ArCard[a] = { DID: f, PName: e, PixelTop: 600 };
								NewImg(
									f,
									d.PicArr[d.CardGif],
									"top:600px;width:100px;height:120px;cursor:url(images/interface/Pointer.cur),pointer;clip:rect(auto,auto,60px,auto)",
									$("dCardList"),
									{
										onmouseover(g) {
											ViewPlantTitle(GetChoseCard(f), g);
										},
										onmouseout() {
											SetHidden($("dTitle"));
										},
										onclick(g) {
											ChosePlant(g, oS.ChoseCard, f);
										},
									}
								);
							}
							oSym.addTask(600, arguments.callee, []);
						})();
						(function () {
							var b = ArCard.length;
							var a;
							var c;
							while (b--) {
								(c = (a = ArCard[b]).PixelTop) > 60 * b &&
									($(a.DID).style.top =
										(a.PixelTop = c - 1) + "px");
							}
							oSym.addTask(5, arguments.callee, []);
						})();
					},
					ar: [],
				});
				oP.AddZombiesFlag();
				SetVisible($("dFlagMeterContent"));
			});
		},
	},
	{
		AZ: [
			[oZombie, 1, 1],
			[oPoleVaultingZombie, 2, 1],
		],
		FlagNum: 10,
		FlagToSumNum: {
			a1: [3, 5, 9, 10, 13, 15, 19, 20, 23, 25, 29],
			a2: [3, 6, 12, 20, 18, 24, 30, 40, 36, 42, 48, 60],
		},
		FlagToMonitor: { 9: [ShowLargeWave, 0] },
		FlagToEnd() {
			NewImg(
				"imgSF",
				"images/interface/trophy.png",
				"left:667px;top:220px",
				EDAll,
				{
					onclick() {
						SelectModal(0);
					},
				}
			);
			NewImg(
				"PointerUD",
				"images/interface/PointerDown.gif",
				"top:185px;left:676px",
				EDAll
			);
		},
	},
	{
		GetChoseCard(b) {
			if (oS.Chose) {
				return;
			}
			var a = ArCard.length;
			while (a--) {
				ArCard[a].DID == b && ((oS.ChoseCard = a), (a = 0));
			}
			return oS.ChoseCard;
		},
		ChosePlant(a, b) {
			PlayAudio("seedlift");
			a = window.event || a;
			var f = ArCard[oS.ChoseCard];
			var e = a.clientX + EBody.scrollLeft || EElement.scrollLeft;
			var d = a.clientY + EBody.scrollTop || EElement.scrollTop;
			var c = f.PName.prototype;
			oS.Chose = 1;
			EditImg(
				NewImg(
					"MovePlant",
					c.PicArr[c.StaticGif],
					"left:" +
						e -
						0.5 * (c.beAttackedPointL + c.beAttackedPointR) +
						"px;top:" +
						d +
						20 -
						c.height +
						"px;z-index:254",
					EDAll
				).cloneNode(false),
				"MovePlantAlpha",
				"",
				{
					visibility: "hidden",
					filter: "alpha(opacity=40)",
					opacity: 0.4,
					zIndex: 30,
				},
				EDAll
			);
			SetAlpha($(f.DID), 50, 0.5);
			SetHidden($("dTitle"));
			GroundOnmousemove = GroundOnmousemove1;
		},
		CancelPlant() {
			ClearChild($("MovePlant"), $("MovePlantAlpha"));
			oS.Chose = 0;
			SetAlpha($(ArCard[oS.ChoseCard].DID), 100, 1);
			oS.ChoseCard = "";
			GroundOnmousemove = function () {};
		},
		GrowPlant(l, c, b, f, a) {
			var j = $("DivTeachBar");
			j && j.parentNode.removeChild(j);
			if (c > 347) {
				innerText(
					NewEle("DivTeachBar", "div", "line-height:40px", 0, EDAll),
					"Place your plant to the left of the line"
				);
				return false;
			}
			var i = oS.ChoseCard;
			var g = ArCard[i];
			var h = g.PName;
			var k = h.prototype;
			var d = g.DID;
			var e;
			new h().Birth(c, b, f, a, l);
			ClearChild($("MovePlant"), $("MovePlantAlpha"));
			$("dCardList").removeChild((e = $(d)));
			e = null;
			ArCard.splice(i, 1);
			oS.ChoseCard = "";
			oS.Chose = 0;
			GroundOnmousemove = function () {};
		},
		ViewPlantTitle(a) {},
	}
);
