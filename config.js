/*		Trimps
		Copyright (C) 2016 Zach Hood

		This program is free software: you can redistribute it and/or modify
		it under the terms of the GNU General Public License as published by
		the Free Software Foundation, either version 3 of the License, or
		(at your option) any later version.

		This program is distributed in the hope that it will be useful,
		but WITHOUT ANY WARRANTY; without even the implied warranty of
		MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
		GNU General Public License for more details.

		You should have received a copy of the GNU General Public License
		along with this program (if you are reading this on the original
		author's website, you can find a copy at
		<trimps.github.io/license.txt>). If not, see
		<http://www.gnu.org/licenses/>. */
		 
//Spoilers ahead, proceed with caution
function newGame () {
var toReturn = {
	global: {
		version: 4.0,
		isBeta: false,
		killSavesBelow: 0.13,
		playerGathering: "",
		playerModifier: 1,
		buildingsQueue: [],
		timeLeftOnCraft: 0,
		crafting: "",
		timeLeftOnTrap: -1,
		world: 1,
		gridArray: [],
		mapGridArray: [],
		mapsOwnedArray: [],
		currentMapId: "",
		lastClearedCell: -1,
		lastClearedMapCell: -1,
		pauseFight: true,
		soldierHealth: 0,
		soldierHealthMax: 0,
		soldierHealthRemaining: 0,
		soldierCurrentAttack: 0,
		soldierCurrentBlock: 0,
		radioStacks: 0,
		fighting: false,
		health: 50,
		attack: 6,
		block: 0,
		autoBattle: false,
		autoCraftModifier: 0,
		start: new Date().getTime(),
		time: 0,
		portalTime: new Date().getTime(),
		lastFightUpdate: "",
		battleCounter: 0,
		firing: false,
		mapsActive: false,
		preMapsActive: false,
		switchToMaps: false,
		switchToWorld: false,
		lookingAtMap: "",
		mapsOwned: 0,
		totalMapsEarned: 0,
		freshFight: false,
		tab: "All",
		repeatMap: false,
		buyAmt: 1,
		numTab: 1,
		spreadsheetMode: false,
		lockTooltip: false,	
		portalActive: false,
		mapsUnlocked: false,
		lastOnline: 0,
		buyTab: "all",
		nextQueueId: 0,
		kongBonusMode: false,
		canRespecPerks: true,
		respecActive: false,
		heliumLeftover: 0,
		viewingUpgrades: false,
		totalPortals: 0,
		lastCustomAmt: 1,
		trapBuildAllowed: false,
		trapBuildToggled: false,
		lastSkeletimp: 0,
		pp: [],
		highestLevelCleared: 0,
		b: 0,
		challengeActive: "",
		selectedChallenge: "",
		lastOfflineProgress: "",
		sLevel: 0,
		totalGifts: 0,
		brokenPlanet: false,
		formation: 0,
		bestHelium: 0,
		tempHighHelium: 0,
		totalHeliumEarned: 0,
		removingPerks: false,
		lastBreedTime: 0,
		antiStacks: 0,
		prisonClear: 0,
		frugalDone: false,
		lastUnlock: 0,
		lowestGen: -1,
		breedBack: -1,
		titimpLeft: 0,
		mapBonus: 0,
		slowDone: false,
		turkimpTimer: 0,
		statsMode: "current",
		achievementBonus: 0,
		lastLowGen: 0,
		presimptStore: "food",
		lastWarp: 0,
		zoneStarted: new Date().getTime(),
		mapStarted: new Date().getTime(),
		bionicOwned: 0,
		roboTrimpLevel: 0,
		roboTrimpCooldown: 0,
		useShriek: false,
		usingShriek: false,
		autoUpgrades: false,
		autoUpgradesAvailable: false,
		autoPrestiges: 0,
		autoStorage: false,
		autoStorageAvailable: false,
		totalVoidMaps: 0,
		voidMapsToggled: false,
		voidBuff: "",
		lastVoidMap: 0,
		voidSeed: Math.floor(Math.random() * 1000000),
		heirloomSeed: Math.floor(Math.random() * 1000000),
		heirloomBoneSeed: Math.floor(Math.random() * 1000000),
		eggSeed: Math.floor(Math.random() * 1000000),
		mutationSeed: Math.floor(Math.random() * 1000000),
		heirloomsExtra: [],
		heirloomsCarried: [],
		StaffEquipped: {},
		ShieldEquipped: {},
		nullifium: 0,
		maxCarriedHeirlooms: 1,
		selectedHeirloom: [],
		lastPortal: -1,
		addonUser: false,
		eggLoc: -1,
		researched: false,
		bonePortalThisRun: false,
		maxSplit: 1,
		maxSoldiersAtStart: -1,
		playFabLoginType: -1,
		lastCustomExact: 1,
		voidMaxLevel: -1,
		rememberInfo: false,
		spireActive: false,
		spireDeaths: 0,
		Geneticistassist: false,
		GeneticistassistSetting: -1,
		GeneticistassistSteps: [-1, 1, 10, 30],
		spireRows: 0,
		goldenUpgrades: 0,
		voidDeaths: 0,
		essence: 0,
		spentEssence: 0,
		skeleSeed: Math.floor(Math.random() * 1000000),
		decayDone: false,
		dailyChallenge: {},
		recentDailies: [],
		dailyHelium: 0,
		breedTime: 1,
		magmite: 0,
		magmaFuel: 0,
		generatorMode: 1, //0 passive, 1 active, 2 hybrid
		timeSinceLastGeneratorTick: -1,
		canMagma: true,
		sessionMapValues: {
			loot: 0,
			difficulty: 0,
			size: 0,
			biome: "Random"
		},
		lootAvgs: {
			food: [0],
			foodTotal: 0,
			wood: [0],
			woodTotal: 0,
			metal: [0],
			metalTotal: 0,
			gems: [0],
			gemsTotal: 0,
			fragments: [0],
			fragmentsTotal: 0
		},
		menu: {
			buildings: true,
			jobs: false,
			upgrades: false
		},
		messages: {
			Story: {
				enabled: true
			},
			Loot: {
				enabled: true,
				primary: true,
				secondary: true,
				exotic: true,
				helium: true,
				essence: true,
				magma: true,
				events: true
			},
			Unlocks: {
				enabled: true,
				repeated: true,
				unique: true
			},
			Combat: {
				enabled: true,
				trimp: true,
				enemy: true
			},
			Notices: {
				enabled: true
			}
		},
		prestige: {
			attack: 13,
			health: 14,
			cost: 57,
			block: 10
		},
		difs: {
			attack: 0,
			health: 0,
			block: 0,
			trainers: 0
		},
		getEnemyAttack: function (level, name, ignoreImpStat) {
			var world = getCurrentMapObject();
			var amt = 0;
			world = (game.global.mapsActive) ? world.level : game.global.world;
			var adjWorld = ((world - 1) * 100) + level;
			amt += 50 * Math.sqrt(world) * Math.pow(3.27, world / 2);
			amt -= 10;
			if (world == 1){
				amt *= 0.35;
				amt = (amt * 0.20) + ((amt * 0.75) * (level / 100));
			}
			else if (world == 2){
				amt *= 0.5;
				amt = (amt * 0.32) + ((amt * 0.68) * (level / 100));
			}
			else if (world < 60)
				amt = (amt * 0.375) + ((amt * 0.7) * (level / 100));
			else{ 
				amt = (amt * 0.4) + ((amt * 0.9) * (level / 100));
				amt *= Math.pow(1.15, world - 59);
			}	
			if (world < 60) amt *= 0.85;
			if (world > 6 && game.global.mapsActive) amt *= 1.1;
			if (!ignoreImpStat)
				amt *= game.badGuys[name].attack;
			return Math.floor(amt);
		},
		getEnemyHealth: function (level, name, ignoreImpStat) {
			var world = getCurrentMapObject();
			world = (game.global.mapsActive) ? world.level : game.global.world;
			var amt = 0;
			amt += 130 * Math.sqrt(world) * Math.pow(3.265, world / 2);
			amt -= 110;
			if (world == 1 || world == 2 && level < 10){
				amt *= 0.6;
			amt = (amt * 0.25) + ((amt * 0.72) * (level / 100));
			}
			else if (world < 60)
				amt = (amt * 0.4) + ((amt * 0.4) * (level / 110));
			else{
				amt = (amt * 0.5) + ((amt * 0.8) * (level / 100));
				amt *= Math.pow(1.1, world - 59);
			}
			if (world < 60) amt *= 0.75;		
			if (world > 5 && game.global.mapsActive) amt *= 1.1;
			if (!ignoreImpStat)
				amt *= game.badGuys[name].health;
			return Math.floor(amt);
		}
	},
	options: {
		displayed: false,
		menu: {
			autoSave: {
				enabled: 1,
				extraTags: "popular general",
				description: "每分钟自动保存游戏一次",
				titles: ["手动保存", "自动保存"],
				onToggle: function () {
					var elem = document.getElementById("saveIndicator");
					if (this.enabled) elem.innerHTML = "<span class='autosaving'>(自动保存)</span>";
					else elem.innerHTML = "<span class='notAutosaving'>(不自动保存)</span>";
				}
			},
			usePlayFab: {
				enabled: 0,
				extraTags: "popular general cloud",
				description: "当游戏保存时，每30分钟也使用PlayFab在线备份。 使用此设置时，如果您的计算机上的版本超过您的在线保存，系统会询问您是否要下载该在线保存。 您还可以通过导入菜单从PlayFab手动导入保存。",
				titles: ["不保存在云端", "保存在PlayFab"],
				onToggle: function () {
					var indicatorElem = document.getElementById("playFabIndicator");
					if (this.enabled == 1) indicatorElem.className = "icomoon icon-wifi iconStateGood";
					else indicatorElem.className = "";
				},
				//lockUnless: function (){return false}
			},
			standardNotation: {
				enabled: 1,
				extraTags: "layout",
				description: "在标准格式（12.7M，540B），工程符号（12.7e6,540e9）或科学记数法（1.27e7,5.40e11）之间切换。",
				titles: ["科学计数法", "标准格式", "工程符号"],
			},
			tooltips: {
				enabled: 1,
				extraTags: "alerts",
				description: "按住Shift显示按钮工具提示",
				titles: ["按住Shift显示", "始终显示"]
			},
			tooltipPosition: {
				enabled: 0,
				extraTags: "alerts",
				description: "切换工具提示的位置在右上，中下或居中。",
				titles: ["右上", "中下", "居中"]
			},
			queueAnimation: {
				enabled: 1,
				extraTags: "layout animation performance",
				description: "打开或关闭建筑队列蓝色动画。",
				titles: ["关闭队列动画", "打开队列动画"]
			},
			barOutlines: {
				enabled: 1,
				extraTags: "layout",
				description: "在所有进度条的末尾打开或关闭黑条。 可以帮助确定进度条的结束位置。",
				titles: ["关闭黑条", "打开黑条"],
				onToggle: function () {
					var outlineStyle = (this.enabled) ? "2px solid black" : "none";
					var bars = document.getElementsByClassName("progress-bar");
					for (var x = 0; x < bars.length; x++){
						bars[x].style.borderRight = outlineStyle;
					}
				}
			},
			menuFormatting: {
				enabled: 1,
				extraTags: "layout",
				description: "为左侧菜单上的作业和建筑物打开或关闭大数字格式。这会将1,000,000转换为1M。",
				titles: ["关闭大数字转换", "打开大数字转换"]
			},
			progressBars: {
				enabled: 1,
				extraTags: "other layout",
				description: "将进度栏切换为打开，关闭或性能。性能和关闭将减少CPU使用。",
				titles: ["关闭进度栏", "打开进度栏", "性能进度栏"],
				onToggle: function () {
				var bars = document.getElementsByClassName("progress-bar");
					for (var x = 0; x < bars.length; x++){
						if (this.enabled == 2) bars[x].className += " noTransition";
						else {
							bars[x].className = bars[x].className.replace(" noTransition", "");
							if (this.enabled == 0) bars[x].style.width = "0%";
						}
					}
				}
			},
			confirmhole: {
				enabled: 1,
				extraTags: "alerts",
				description: "打开或关闭可疑购买（如Wormholes）的确认弹出窗口。",
				titles: ["购买时不确认", "购买时确认"],
			},
			lockOnUnlock: {
				enabled: 0,
				extraTags: "qol",
				description: "启用/禁用锁定建筑物，作业，升级和设备1秒钟后解锁新的东西。可以防止意外购买。",
				titles: ["禁用锁定", "启用锁定"],
			},
			achievementPopups: {
				enabled: 1,
				extraTags: "alerts",
				description: "Decide whether or not you want popups on completing an achievement.",
				titles: ["No Achieve Popup", "Popup Achievements"]
			},
			mapLoot: {
				enabled: 0,
				extraTags: "qol",
				description: "<p>Choose which upgrades you want first if it has been a while since you last ran maps.</p><p><b>Tier first</b> will cause maps to drop all items for the lowest tier before moving to the next. (Greatsword II -> Breastplate II -> Shield III)</p><p><b>Equip first</b> will start from Shield and drop all available Shield prestiges before continuing to Dagger and so on. (Shield III -> Shield IV -> Dagger III)</p>",
				titles: ["Tier First", "Equip First"],
				secondLocation: "togglemapLoot2",
			},
			repeatUntil: {
				enabled: 0,
				description: "<b>Repeat Forever</b> will cause the map to continually repeat if Repeat Maps is enabled. <b>Repeat to 10</b> will exit the map after 10 stacks, if the map's level is high enough. <b>Repeat for Items</b> will exit the map once there are no more special items left for that level of map. <br/><br/><b>This setting only matters if Repeat is on. Toggling Repeat off will still leave the map when it is finished no matter what.</b>",
				titles: ["Repeat Forever", "Repeat to 10", "Repeat for Items"],
				locked: true
			},
			exitTo: {
				enabled: 0,
				description: "Choose whether to go to the Maps Screen or World after completing a map.",
				titles: ["Exit to Maps", "Exit to World"],
				locked: true
			},
			repeatVoids: {
				enabled: 0,
				description: "Decide if you want to continue running the rest of your Void Maps after finishing one.",
				titles: ["One Void Map", "Finish All Voids"],
				locked: true
			},
			boneAlerts: {
				enabled: 1,
				extraTags: "alerts",
				description: "Hide popup confirmation messages when in the Bone Trader or Heirlooms menus.",
				titles: ["Not Confirming Bones", "Confirming Bones"]
			},
			showAlerts: {
				enabled: 1,
				extraTags: "alerts",
				description: "Toggle on or off the display of yellow alert icons when unlocking something new.",
				titles: ["Not Alerting", "Alerting"]
			},
			showFullBreed: {
				enabled: 0,
				extraTags: "popular general",
				description: "Display time to breed a full group of soldiers next to the current breed timer.",
				titles: ["Less Breed Timer", "More Breed Timer"]
			},
			darkTheme: {
				extraTags: "general",
				enabled: 1,
				description: "Toggle between the default Trimps theme, a custom dark theme made by u/Grabarz19, and the default theme with a black background.",
				titles: ["Black Background", "Default Theme", "Dark Theme"],
				onToggle: function () {
					var link;
					if (this.enabled == 2){
						link = document.createElement('link');
						link.type = 'text/css';
						link.rel = 'stylesheet';
						link.href = 'css/dark.css';
						link.id = 'darkTheme';
						document.head.appendChild(link);
						return;
					}
					if (this.enabled == 0) {
						document.getElementById("innerWrapper").style.backgroundColor = "black";	
						link = document.getElementById("darkTheme");
						if (!link) return;
						link.disabled = true;
						document.head.removeChild(link);
						return;
					}
					document.getElementById("innerWrapper").style.backgroundColor = "initial";	
				},
				restore: function () {
					document.getElementById("innerWrapper").style.backgroundColor = "initial";	
					link = document.getElementById("darkTheme");
					if (!link) return;
					link.disabled = true;
					document.head.removeChild(link);
				}
			},
			fadeIns: {
				enabled: 1,
				extraTags: "layout performance animation",
				description: "Toggle on or off the fade in effect on elements.",
				titles: ["Not Fading", "Fading"]
			},
			extraStats: {
				enabled: 0,
				extraTags: "layout",
				description: "Toggle on or off adding extra information to map items.",
				titles: ["Standard Maps", "Extra Info"],
				onToggle: function () {
					refreshMaps();
				}
			},
			useAverages: {
				extraTags: "popular general",
				enabled: 0,
				description: "切换是否将从地图和世界掉落的战利品计入战利品分解和工具提示。 计算最后两分钟的战利品的平均值。 如果要清除最后2分钟，请尝试关闭并再次打开。",
				titles: ["不计算平均", "计算平均"],
				onToggle: function () {
					for (var item in game.global.lootAvgs){
						if (Array.isArray(game.global.lootAvgs[item])) game.global.lootAvgs[item] = [0];
						else game.global.lootAvgs[item] = 0;
					}
				}
			},
			voidPopups: {
				extraTags: "alerts",
				enabled: 1,
				description: "Decide whether or not you want popups on looting an Heirloom.",
				titles: ["No Heirloom Pop", "Popping Heirlooms"]
			},
			detailedPerks: {
				extraTags: "qol",
				enabled: 0,
				description: "Decide whether or not to show extra information on Perk buttons",
				titles: ["Minimal Perk Info", "Extra Perk Info"]
			},
			alwaysAbandon: {
				extraTags: "general",
				enabled: 0,
				description: "Decide whether or not to wait for soldiers to die on switching between maps and world. Toggling this on will automatically abandon your soldiers.",
				titles: ["Wait to Travel", "Auto Abandon"]
			},
			extraMapBtns: {
				extraTags: "layout",
				enabled: 0,
				description: "Toggle the button menu to the right of the map grid",
				titles: ["Less Map Buttons", "Extra Map Buttons"],
				onToggle: function () {
					if (!game.global.mapsActive) return;
					var setTo = (this.enabled) ? ["8", "2"] : ["10", "off"];
					swapClass("col-xs", "col-xs-" + setTo[0], document.getElementById("gridContainer"));
					swapClass("col-xs", "col-xs-" + setTo[1], document.getElementById("extraMapBtns"));				
				},
				lockUnless: function () {
					return (game.global.totalPortals > 0)
				},
			},
			GeneticistassistTarget: {
				enabled: 0,
				disableOnUnlock: false,
				extraTags: "popular general",
				description: "Customize your three available Geneticistassist targets, and decide whether or not Geneticistassist should start automatically when unlocked each run.",
				titles: ["Geneticistassist Settings"],
				lockUnless: function () {
					return (game.global.Geneticistassist);
				}
			},
			overkillColor: {
				enabled: 1,
				extraTags: "layout",
				description: "Choose if you would like to see a different cell color for cells that you overkilled. Toggle between off, showing both cells involved in the overkill, or just showing the 1 cell that was skipped.",
				titles: ["No Overcolors", "1 Overkill Cell", "2 Overkill Cells"],
				lockUnless: function () {
					return (!game.portal.Overkill.locked)
				},
			},
			forceQueue: {
				enabled: 0,
				extraTags: "qol",
				description: "Choose whether or not to force instant-craft buildings to use the queue. Currently applies only to Warpstation. May be useful for double checking prices before building!",
				titles: ["Not Forcing Queue", "Forcing Queue"],
				lockUnless: function () {
					return (game.global.sLevel >= 4);
				}
			},
			mapsOnSpire: {
				enabled: 1,
				extraTags: "other",
				description: "Choose whether you would like the game to pause combat by sending you to maps when you reach the spire.",
				titles: ["Keep Fighting", "Map at Spire"],
				lockUnless: function () {
					return (game.global.highestLevelCleared >= 199);
				}				
			},
			siphonologyMapLevel: {
				enabled: 0,
				extraTags: "qol",
				description: "当进入地图屏幕时，默认情况下，级别选择器以您当前的世界号开始。  打开此设置将强制此数字默认为您的最小Siphonology水平。",
				titles: ["使用当前世界编号", "使用Siphonology级别"],
				lockUnless: function () {
					return (!game.portal.Siphonology.locked)
				}
			},
			timestamps: {
				enabled: 0,
				extraTags: "qol",
				description: "选择是否在消息日志中显示时间戳。<b>Local Timestamps</b> will log the current time according to your computer, <b>Run Timestamps</b> will log how long it has been since your run started. Note that toggling this setting will not add or remove timestamps from previous messages, but will add or remove them to or from any new ones.",
				titles: ["No Timestamps", "Local Timestamps", "Run Timestamps"]
			},
			tinyButtons: {
				enabled: 0,
				extraTags: "layout",
				description: "收缩购买建筑物，升级，工作和设备的菜单中的按钮。 <b>Large Buttons</b> is default and fits 4 buttons per row. <b>Small Buttons</b> shrinks the size to fit 5 per row, and <b>Tiny Buttons</b> fits 6 per row. Small and Tiny may not be readable on small screens.",
				titles: ["Large Buttons", "Small Buttons", "Tiny Buttons"],
				onToggle: function () {
					var classNames = ["buttonSizeLarge", "buttonSizeSmall", "buttonSizeTiny"];
					swapClass("buttonSize", classNames[this.enabled], document.getElementById('buyHere'));
				}
			},
			masteryTab: {
				enabled: 1,
				extraTags: "alerts",
				description: "选择你想在你的精通选项卡上看到什么！ <b>无精通信息</b>将使选项卡保持干净和静态。<b>通知精通信息</b>将在新的精通变得可购买时立即在选项卡上显示提醒。 <b>显示精华</b>将永远显示在选项卡上的未用精华的总量。",
				titles: ["无精通信息", "通知精通信息", "显示精华"],
				lockUnless: function () {
					return (game.global.highestLevelCleared >= 180)
				},
				onToggle: function () {
					updateTalentNumbers();
				}
			},
			generatorStart: {
				enabled: 0,
				extraTags: "general",
				description: "选择维度生成器应该在每次运行时启动什么模式。<b>默认生成器</b>将继续使用您在上次运行结束时使用的任何设置。<b>所有其他设置<b>均以在每次运行开始时将被设置为活动的模式命名。",
				get titles () {
					var arr = ["默认生成器", "Gain Fuel", "Gain Mi"];
					if (game.permanentGeneratorUpgrades.Hybridization.owned) arr.push("Hybrid");
					return arr;
				},
				lockUnless: function () {
					return (game.global.highestLevelCleared >= 229);
				}
			},
			pauseGame: {
				enabled: 0,
				extraTags: "other",
				description: "暂停您的游戏。 这将暂停所有资源收集，离线进度和计时器。",
				titles: ["不暂停", "暂停"],
				timeAtPause: 0,
				onToggle: function () {
					if (this.enabled) {
						this.timeAtPause = new Date().getTime();
						if (game.options.menu.autoSave.enabled == 1) save(false, true);
						swapClass("timer", "timerPaused", document.getElementById("portalTimer"));
					}
					else if (this.timeAtPause) {
						var now = new Date().getTime();
						var dif = now - this.timeAtPause;
						game.global.portalTime += dif;
						game.global.lastSkeletimp += dif;
						game.global.zoneStarted += dif;
						game.global.mapStarted += dif;
						game.global.lastGeneratorTick += dif;
						this.timeAtPause = 0;
						game.global.time = 0;
						game.global.lastOnline = now;
						game.global.start = now;
						setTimeout(gameTimeout, (100));
						setTimeout(updatePortalTimer, 1000);
						swapClass("timer", "timerNotPaused", document.getElementById("portalTimer"));
					}
				},
				locked: true
			},
			disablePause: {
				enabled: 1,
				extraTags: "other",
				description: "您可以通过单击屏幕右下角的运行计时器来暂停游戏。 此设置允许您删除该功能！",
				titles: ["禁用暂停", "启用暂停"]
			},
			deleteSave: {
				enabled: 0,
				extraTags: "reset hard wipe clear other",
				description: "删除您的保存并重新开始。",
				titles: ["删除存档"],
				onToggle: function () {
					cancelTooltip();
					tooltip('Reset', null, 'update');
					game.global.lockTooltip = true;
					tooltipUpdateFunction = "";
					this.enabled = 0;
				}
			}
		}
	},
	talents: {
		bionic: {
			description: "当你通过该区域时，自动拾取每个级别的仿生仙境，只要你在经过该区域之前已经使用。",
			name: "Bionic Magnet",//仿生磁铁
			tier: 1,
			purchased: false,
			icon: "magnet"
		},
		portal: {
			description: "完成Z20后立即解锁传送门。",
			name: "Portal Generator",//传送门生成器
			tier: 1,
			purchased: false,
			icon: "eye-open",
		},
		bounty: {
			description: "完成Z15后立即解锁赏金。",
			name: "Bounty Hunter",//赏金猎人
			tier: 1,
			purchased: false,
			icon: "th-large",
		},
		housing: {
			description: "当经过豪宅，酒店和度假村掉落区域时自动解锁它们",
			name: "Home Detector I",//房屋探测器I
			tier: 1,
			purchased: false,
			icon: "home",
		},
		turkimp: {
			description: "将每个脆皮的奖励时间提高5分钟，并将时间上限提高10分钟。",
			name: "Turkimp Tamer I",//脆皮训练师I
			tier: 1,
			purchased: false,
			icon: "*spoon-knife"
		},
		voidPower: {
			description: "你的脆皮在Void地图中额外获得15%的攻击力和生命。",
			name: "Void Power I",
			tier: 2,
			purchased: false,
			icon: "*heart5"
		},
		foreman: {
			description: "召唤50000名工头帮助建造。",
			name: "Foremany",
			tier: 2,
			purchased: false,
			onPurchase: function () {
				game.global.autoCraftModifier += 12500;
				updateForemenCount();
			},
			onRespec: function () {
				game.global.autoCraftModifier -= 12500;
				updateForemenCount();
			},
			icon: "user",
		},
		headstart: {
			description: "Corruption提前5级开始，开始于z176。",
			name: "Headstart I",
			tier: 2,
			purchased: false,
			icon: "road"
		},
		housing2: {
			description: "当经过出入口，虫洞和收集器掉落区域时自动解锁它们。",
			name: "Home Detector II",
			tier: 2,
			purchased: false,
			icon: "home",
			requires: "housing"
		},
		turkimp2: {
			description: "找到脆皮的机会提高33%。",
			name: "Turkimp Tamer II",
			tier: 2,
			purchased: false,
			requires: "turkimp",
			icon: "*spoon-knife"
		},
		voidPower2: {
			description: "你的脆皮在Void地图中获得额外20%的攻击力和生命。",
			name: "Void Power II",
			tier: 3,
			purchased: false,
			icon: "*heart5",
			requires: "voidPower"
		},
		doubleBuild: {
			description: "建筑队列中的项目将一次建造两个。",
			name: "Double Build",
			tier: 3,
			purchased: false,
			icon: "*hammer"
		},
		headstart2: {
			description: "Corruption提前10级开始，开始于z166。",
			name: "Headstart II",
			tier: 3,
			purchased: false,
			icon: "road",
			requires: "headstart"
		},
		skeletimp: {
			description: "双倍的机会出现Megaskeletimp，而不是Skeletimp。",
			name: "King of Bones I",
			tier: 3,
			purchased: false,
			icon: "italic",
		},
		mapLoot: {
			description: "将低地图级别点击惩罚的起点减少1级。 这允许你通过在当前世界数字上或当前世界数字减1得到地图来赚取相同数量的战利品。",
			name: "Map Reducer",
			tier: 3,
			purchased: false,
			icon: "*gift2"
		},
		hyperspeed: {
			description: "减少战斗和攻击的间隔时间100ms。",
			name: "Hyperspeed I",
			tier: 4,
			purchased: false,
			icon: "fast-forward"
		},
		blacksmith: {
			get description () {
				return "Z" + Math.floor((game.global.highestLevelCleared + 1) / 2) + "（达到的最高区域的一半）之后的每个完成区域将获得从地图中删除所有可用的设备权限。";
			},
			name: "Blacksmithery I",
			tier: 4,
			purchased: false,
			icon: "*hammer2"
		},
		headstart3: {
			description: "Corruption提前15级开始，开始于z151。",
			name: "Headstart III",
			tier: 4,
			purchased: false,
			icon: "road",
			requires: "headstart2"
		},
		pierce: {
			description: "减少敌人可以穿透我方防御的伤害25%。",
			name: "Metallic Coat",
			tier: 4,
			purchased: false,
			icon: "tint"
		},
		turkimp3: {
			description: "当Well Fed时提高额外资源奖励25%，即从50%提高到75%。",
			name: "Turkimp Tamer III",
			tier: 4,
			purchased: false,
			requires: "turkimp2",
			icon: "*spoon-knife"
		},
		hyperspeed2: {
			get description(){
				return "在Z" + Math.floor((game.global.highestLevelCleared + 1) * 0.5) + "（达到你的最高区域的50％）之后额外减少战斗和攻击的间隔时间100ms";
			},
			name: "Hyperspeed II",
			tier: 5,
			purchased: false,
			icon: "fast-forward"
		},
		blacksmith2: {
			get description () {
				return "Z" + Math.floor((game.global.highestLevelCleared + 1) * 0.75) + "（达到的最高区域的75%）之后的每个完成区域将获得从地图中删除所有可用的设备权限。";
			},
			name: "Blacksmithery II",
			tier: 5,
			purchased: false,
			icon: "*hammer2"
		},
		magmaFlow: {
			description: "导致两个额外的岩浆房间出现在任何已经有岩浆的区域上。",
			name: "Magma Flow",
			tier: 5,
			purchased: false,
			icon: "*fire",
		},
		skeletimp2: {
			description: "额外减少Skeletimp最小生成间隔10分钟",
			name: "King of Bones II",
			tier: 5,
			purchased: false,
			icon: "italic",
			requires: "skeletimp"
		},
		quickGen: {
			description: "提高每个有维度发生器Dimensional Generator 的区域50%速度。",
			name: "Quick Gen",
			tier: 5,
			purchased: false,
			icon: "*diamonds"
		}
		
		

	},
	//portal
	portal: {//need nameCN
		Looting_II: {
			level: 0,
			locked: true,
			priceBase: 100000,
			heliumSpent: 0,
			tooltip: "Apply your skills at salvaging things from the Spire to increase all loot gained by 0.25% per level. The price for this perk increases additively, and each level will cost exactly 10000 more than the previous level.",
			additive: true,
			additiveInc: 10000,
			modifier: 0.0025
		},
		Carpentry_II: {
			level: 0,
			locked: true,
			priceBase: 100000,
			heliumSpent: 0,
			tooltip: "You've learned to look more objectively at the no longer mysterious building designs, allowing you to increase housing space by 0.25% per level. This multiplies on top of Carpentry I, but the bonus stacks additively. The price for this perk also increases additively, and each level will cost exactly 10000 more than the previous level.",
			additive: true,
			additiveInc: 10000,
			modifier: 0.0025
		},
		Motivation_II: {
			level: 0,
			locked: true,
			priceBase: 50000,
			heliumSpent: 0,
			tooltip: "Corruption and impending doom are great motivators to work a bit harder! Increases Trimp gather speed by 1% per level. The price for this perk increases additively, and each level will cost exactly 1000 more than the previous level.",
			additive: true,
			additiveInc: 1000,
			modifier: 0.01
		},
		Power_II: {
			level: 0,
			locked: true,
			priceBase: 20000,
			heliumSpent: 0,
			tooltip: "You find strength in the desire to some day return home. Anger your Trimps by making them listen to you talk about it all the time, increasing their damage by 1% per level. The price for this perk increases additively, and each level will cost exactly 500 more than the previous level.",
			additive: true,
			additiveInc: 500,
			modifier: 0.01
		},		
		Toughness_II: {
			level: 0,
			locked: true,
			priceBase: 20000,
			heliumSpent: 0,
			tooltip: "You feel more grounded as you remember where you came from. Spread your toughness to your Trimps, increasing health by 1% per level. The price for this perk increases additively, and each level will cost exactly 500 more than the previous level.",
			additive: true,
			additiveInc: 500,
			modifier: 0.01
		},
		Overkill: {
			level: 0,
			locked: true,
			priceBase: 1000000,
			heliumSpent: 0,
			tooltip: "You have overcome the otherworldly objective of obtaining Overkill, outstanding! Each level of this perk will allow 0.5% of your overkill damage to harm the next enemy. If this damage kills the next enemy, you will lose no time moving through that cell. Maximum of 30 levels.",
			max: 30
		},
		Resourceful: {
			level: 0,
			locked: true,
			modifier: 0.05,
			priceBase: 50000,
			heliumSpent: 0,
			tooltip: "Spending time with limited maps has taught you how to be more resourceful. Each level will allow you to spend 5% fewer resources <b>than the current cost</b> per level on all structures."
		},
		Coordinated: {
			level: 0,
			locked: true,
			priceBase: 150000,
			modifier: 0.98,
			heliumSpent: 0,
			currentSend: 1,
			onChange: function (overrideLevel) {
				var newValue = 1;
				var level = (overrideLevel) ? this.level + this.levelTemp : this.level;
				var currentMod = 0.25 * Math.pow(this.modifier, level);
				currentMod += 1;
				for (var x = 0; x < game.upgrades.Coordination.done; x++){
					newValue = Math.ceil(newValue * currentMod);
				}
				if (overrideLevel) return newValue;
				this.currentSend = newValue;
			},
			tooltip: "Use knowledge gained while studying Coordinated Bad Guys to reduce the amount of Trimps required per level of Coordination by 2% <b>of current amount (compounding)</b>, while keeping the stat bonus the same."
		},
		Siphonology: {
			level: 0,
			locked: true,
			max: 3,
			priceBase: 100000,
			heliumSpent: 0,
			tooltip: "Use strategies discovered in alternate dimensions to siphon Map Bonus Damage stacks from lower level maps. For each level of Siphonology, you will earn stacks from maps one level lower than your current world. Maximum of 3 levels.",
		},
		Anticipation: {
			level: 0,
			locked: true,
			max: 10,
			modifier: 0.02,
			priceBase: 1000,
			heliumSpent: 0,
			onChange: function () {
				if (this.level <= 0) {
					game.global.antiStacks = 0;
					updateAntiStacks();
				}
			},
			tooltip: "Use your experiences in understanding the attention span of Trimps to increase the damage dealt by all soldiers based on how long it took to get an army together. Increases damage by 2% per level per second up to 30 seconds. Maximum of 10 levels."
		},
		Resilience: {
			level: 0,
			locked: true,
			modifier: 0.1,
			priceBase: 100,
			heliumSpent: 0,
			tooltip: "Use your acquired skills in Trimp strengthening to gain a 10% <b>compounding</b> increase to total Trimp health."
		},
		Meditation: {
			level: 0,
			locked: true,
			modifier: 1,
			priceBase: 75,
			heliumSpent: 0,
			max: 7,
			tooltip: "Your experiences in the Dimension of Strong Things have taught you the value of taking your time. Every level of Meditation will increase your Trimps' gather speed by 1% for every 10 minutes spent on the same zone, up to 1 hour, even when offline. This bonus is reset after clearing the current zone. Maximum of 7 levels.",
			getBonusPercent: function (justStacks) {
				var timeOnZone = new Date().getTime() - game.global.zoneStarted;
				timeOnZone = Math.floor(timeOnZone / 600000);
				if (timeOnZone > 6) timeOnZone = 6;
				else if (timeOnZone <= 0) return 0;
				if (justStacks) return timeOnZone;				
				return (timeOnZone * this.modifier * this.level);
			}
		},
		Relentlessness:{
			level: 0,
			locked: true,
			modifier: 0.05,
			otherModifier: 0.3,
			priceBase: 75,
			heliumSpent: 0,
			tooltip: "You've seen too many Trimps fall, it's time for more aggressive training. Bringing back these memories will cause your Trimps to gain a 5% chance to critically strike for +130% damage at level 1, and they will gain an additional 5% crit chance and 30% crit damage per level. Maximum of 10 levels.",
			max: 10
		},
		Carpentry: {
			level: 0,
			locked: true,
			modifier: 0.1,
			priceBase: 25,
			heliumSpent: 0,
			tooltip: "You've built quite a few houses and you're getting pretty good at it. Bringing your expertise in construction back through the portal will allow you to house 10% more Trimps per level <b>than the current amount (compounds)</b>."
		},
		Artisanistry: {
			level: 0,
			locked: true,
			modifier: 0.05,
			priceBase: 15,
			heliumSpent: 0,
			tooltip: "You're beginning to notice ways to make equally powerful equipment with considerably fewer resources. Bringing back these new ideas will allow you to spend 5% fewer resources <b>than the current cost</b> per level on all equipment."
		},
		Range: {
			level: 0,
			locked: true,
			modifier: 2,
			max: 10,
			priceBase: 1,
			heliumSpent: 0,
			tooltip: "Use your new-found leadership skills in order to increase the minimum damage your Trimps deal by 2% per level. Stacks up to 10 times, doesn't affect max damage. At 10 levels, you will get a minimum of 100% benefit from all attack damage per strike.",
		},
		Agility: {
			level: 0, 
			modifier: 0.05,
			priceBase: 4,
			heliumSpent: 0,
			tooltip: "Crank your portal into overdrive, requiring extra helium but increasing the clock speed of the Universe. Each level reduces the time between Trimp and Bad Guy attacks by 5% <b>of the current time (compounds)</b>. Maximum of 20 levels.",
			max: 20
		},
		Bait: {
			level: 0,
			modifier: 1,
			priceBase: 4,
			heliumSpent: 0,
			tooltip: "A few of these in your traps are sure to bring in extra Trimps. Each level allows traps to catch $modifier$ extra Trimp."
		},
		Trumps: {
		//fiveTrimpMax worldUnlock
			locked: 0,
			level: 0,
			modifier: 1,
			priceBase: 3,
			heliumSpent: 0,
			tooltip: "Practicing aggressive strategizing allows you to earn $modifier$ extra max population from each battle territory bonus."
		},
		//breed main
		Pheromones: {
			level: 0,
			modifier: 0.1,
			priceBase: 3,
			heliumSpent: 0,
			tooltip: "Bring some pheromones with you to ensure that your Trimps will permanently breed 10% faster."
		},
		//trapThings main
		Packrat: {
			modifier: 0.2,
			heliumSpent: 0,
			tooltip: "Study the ancient, secret Trimp methods of hoarding. Each level increases the amount of stuff you can shove in each Barn, Shed, and Forge by 20%.",
			priceBase: 3,
			level: 0
		},
		//updatePs updates
		//gather main
		Motivation: {
			modifier: 0.05,
			heliumSpent: 0,
			tooltip: "Practice public speaking with your trimps. Each level increases the amount of resources that workers produce by 5%.",
			priceBase: 2,
			level: 0
		},
		//startFight main
		Power: {
			level: 0,
			modifier: 0.05,
			priceBase: 1,
			heliumSpent: 0,
			tooltip: "Trimps learn through example. Spending some time bench pressing dead Elephimps should inspire any future Trimps to become stronger too. Adds 5% attack permanently to your Trimps."
		},
		//startFight main
		Toughness: {
			modifier: 0.05,
			priceBase: 1,
			heliumSpent: 0,
			tooltip: "Pay your Trimps to knock you around a little bit. By learning to not be such a wuss, your Trimps will be less wussy as well. Adds 5% health permanently to your Trimps.",
			level: 0
		},
		//rewardResources main
		Looting: {
			modifier: 0.05,
			priceBase: 1,
			heliumSpent: 0,
			tooltip: "Walk back through the empty zones, learning how to milk them for every last drop. Each level permanently increases the amount of resources gained from battle by 5%.",
			level: 0
		},

	},

	challenges: {//need nameCN
		Daily: {
			get description(){
				return (isSaving) ? "" : getDailyChallenge(0);
			},
			filter: function () {
				return (game.global.highestLevelCleared >= 99);
			},
			start: function () {
				startDaily();
			},
			abandon: function () {
				abandonDaily();
			},
			fireAbandon: true,
			unlockString: "到达区域100",
			nameCN: "日常"
		},
		Discipline: {
			description: "Tweak the portal to bring you back to a universe where Trimps are less disciplined, in order to teach you how to be a better Trimp trainer. Your Trimps' minimum damage will be drastically lower, but their high end damage will be considerably higher. Completing The Dimension Of Anger will cause Trimp damage to return to normal.",
			filter: function () {
				return (game.resources.helium.owned >= 30 || game.global.totalHeliumEarned >= 30);
			},
			unlocks: "Range",
			unlockString: "拥有30氦气",
			nameCN: "纪律"
		},
		Metal: {
			description: "Tweak the portal to bring you to alternate reality, where the concept of Miners does not exist, to force yourself to become frugal with equipment crafting strategies. If you complete The Dimension Of Anger without disabling the challenge, miners will re-unlock.",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 24);
			},
			abandon: function () {
				game.worldUnlocks.Miner.fire();
				for (var x = 0; x < game.challenges.Metal.heldBooks; x++){
					unlockUpgrade("Speedminer");
				}
			},
			fireAbandon: false,
			heldBooks: 0,
			unlocks: "Artisanistry",
			unlockString: "到达区域25"
		},
		Size: {
			description: "Tweak the portal to bring you to an alternate reality, where Trimps are bigger and stronger, to force yourself to figure out a way to build larger housing. Your Trimps will gather 50% more resources, but your housing will fit 50% fewer Trimps. If you complete The Dimension of Anger without disabling the challenge, your stats will return to normal.",
			completed: false,
			filter: function () {
				return (game.global.world >= 35 || game.global.highestLevelCleared >= 34);
			},
			abandon: function () {
				game.jobs.Farmer.modifier *= (2/3);
				game.jobs.Lumberjack.modifier *= (2/3);
				game.jobs.Miner.modifier *= (2/3);
				game.resources.trimps.maxMod = 1;
			},
			start: function () {
				game.jobs.Farmer.modifier *= 1.5;
				game.jobs.Lumberjack.modifier *= 1.5;
				game.jobs.Miner.modifier *= 1.5;
				game.resources.trimps.maxMod = 0.5;
			},
			fireAbandon: true,
			unlocks: "Carpentry",
			unlockString: "到达区域35"
		},
		Balance: { 
			description: "Your scientists have discovered a chaotic dimension filled with helium. All enemies have 100% more health, enemies in world deal 17% more damage, and enemies in maps deal 135% more damage. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of 'Unbalance'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your health by 1%, but increases your Trimps' gathering speed by 1%. Unbalance can only stack to 250. Completing <b>Zone 40</b> with this challenge active will grant an additional 100% of all helium earned up to that point. This challenge is repeatable!",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 39);
			},
			balanceStacks: 0,
			addStack: function () {
				this.balanceStacks++;
				if (this.balanceStacks > 250) this.balanceStacks = 250;
				else {
					game.global.soldierHealthMax *= 0.99;
					if (game.global.soldierHealth > game.global.soldierHealthMax) game.global.soldierHealth = game.global.soldierHealthMax;
				}
			},
			removeStack: function () {
				this.balanceStacks--;
				if (this.balanceStacks < 0) this.balanceStacks = 0;
				else {
					game.global.soldierHealthMax *= 1.01;
				}
			},
			abandon: function () {
				this.balanceStacks = 0;
				updateBalanceStacks();
			},
			getHealthMult: function (formatText) {
				var num = Math.pow(0.99, this.balanceStacks);
				if (formatText) return Math.floor((1 - num) * 100) + "%";
				return num;
			},
			getGatherMult: function (formatText) {
				if (formatText) return this.balanceStacks + "%";
				return ((this.balanceStacks * 0.01) + 1);
			},
			fireAbandon: true,
			heldHelium: 0,
			heliumThrough: 40,
			unlockString: "到达区域40"
		},
		Scientist: {
			get description (){ 
				var is5 = (game.global.highestLevelCleared >= 124 && game.global.sLevel >= 4);
				return "Attempt modifying the portal to " + ((is5) ? "retain positive qualities from previous dimensions" : "harvest resources when travelling") + ". Until you perfect the technique, you will start with <b>_</b> science but will be unable to research or hire scientists" + ((is5) ? " and <b style='color: maroon'>all enemy damage will be 10X higher</b>" : "") + ". Choose your upgrades wisely! Clearing <b>'The Block' (11)</b> with this challenge active will cause you to * each time you use your portal."
			},
			completed: false,
			heldBooks: 0,
			filter: function (fromCheck) {
				if (game.global.sLevel == 0) return (game.global.highestLevelCleared >= 39);
				else if (game.global.sLevel == 1) return (game.global.highestLevelCleared >= 49);
				else if (game.global.sLevel == 2) {
					if (game.global.highestLevelCleared > 69 && game.global.prisonClear) return (game.global.highestLevelCleared >= 89);
					else return true;
				}
				else if (game.global.sLevel == 3){
					 return (game.global.highestLevelCleared >= 109);
				}
				else if (game.global.sLevel >= 4){
					return (game.global.highestLevelCleared >= 129);
				}
			},
			abandon: function () {
				game.worldUnlocks.Scientist.fire();
				document.getElementById("scienceCollectBtn").style.display = "block";
				for (var x = 0; x < this.heldBooks; x++){
					unlockUpgrade("Speedscience");
				}
				message("You can research science again!", "Notices");
				if (game.global.sLevel >= 4) {
					if (game.buildings.Warpstation.craftTime > 0){
						game.buildings.Warpstation.craftTime = 0;
						addNewSetting('forceQueue');
					}
					if (game.global.autoUpgrades) document.getElementById("autoPrestigeBtn").style.display = "block";
				}
			},
			start: function () {
				document.getElementById("scienceCollectBtn").style.display = "none";
				game.resources.science.owned = getScientistInfo(getScientistLevel());
				game.global.autoUpgrades = false;
				toggleAutoUpgrades(true);
			},
			onLoad: function () {
				document.getElementById("scienceCollectBtn").style.display = "none";
			},
			fireAbandon: false,
			unlockString: function () {
				if (game.global.sLevel == 0) return "到达区域40";
				else if (game.global.sLevel == 1) return "到达区域50";
				else if (game.global.sLevel == 2) return "到达区域90";
				else if (game.global.sLevel == 3) return "到达区域110";
				else if (game.global.sLevel >= 4) return "到达区域130";
			}
		},
		Meditate: {
			description: "Visit a dimension where everything is stronger, in an attempt to learn how to better train your Trimps. All enemies will have +100% health and +50% attack, and your trimps will gather 25% faster. Completing <b>'Trimple of Doom' (33)</b> will return the world to normal.",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 44);
			},
			unlocks: "Meditation",
			unlockString: "到达区域45"
		},
		Decay: {
			description: "Tweak the portal to bring you to an alternate reality, where added chaos will help you learn to create a peaceful place. You will gain 10x loot (excluding helium), 10x gathering, and 5x Trimp attack, but a stack of Decay will accumulate every second. Each stack of Decay reduces loot, gathering, and Trimp attack by 0.5% of the current amount. These stacks reset each time a Blimp is killed and cap at 999. Completing <b>Zone 55</b> with this challenge active will allow you to select the Gardens biome when creating maps, and all future Gardens maps created will gain +25% loot.",
			completed: false,
			abandon: function () {
				updateDecayStacks();
			},
			fireAbandon: true,
			stacks: 0,
			filter: function () {
				return (game.global.highestLevelCleared >= 54);
			},
			unlockString: "到达区域55",
		},
		Trimp: {
			description: "Tweak the portal to bring you to a dimension where Trimps explode if more than 1 fights at a time. You will not be able to learn Coordination, but completing <b>'The Block' (11)</b> will teach you how to keep your Trimps alive for much longer.",
			completed: false,
			heldBooks: 0,
			fireAbandon: true,
			unlocks: "Resilience",
			filter: function () {
				return (game.global.world >= 60 || game.global.highestLevelCleared >= 59);
			},
			abandon: function () {
				for (var x = 0; x < game.challenges.Trimp.heldBooks; x++){
					unlockUpgrade("Coordination");
				}
			},
			unlockString: "到达区域60"
		},
		Trapper: {
			description: "Travel to a dimension where Trimps refuse to breed in captivity, teaching yourself new ways to take advantage of situations where breed rate is low. Clearing <b>'Trimple Of Doom' (33)</b> with this challenge active will return your breeding rate to normal.",
			completed: false,
			heldBooks: 0,
			fireAbandon: true,
			unlocks: "Anticipation",
			filter: function () {
				return (game.global.highestLevelCleared >= 69);
			},
			abandon: function () {
				for (var x = 0; x < game.challenges.Trapper.heldBooks; x++){
					unlockUpgrade("Potency");
				}
			},
			unlockString: "到达区域70"
		},
		Electricity: {
			description: "Use the keys you found in the Prison to bring your portal to an extremely dangerous dimension. In this dimension enemies will electrocute your Trimps, stacking a debuff with each attack that damages Trimps for 10% of total health per turn per stack, and reduces Trimp attack by 10% per stack. Clearing <b>'The Prison' (80)</b> will reward you with an additional 150% of all helium earned up to but not including Zone 80. This is repeatable!",
			completed: false,
			hasKey: false,
			filter: function () {
				return (game.global.prisonClear > 0);
			},
			fireAbandon: true,
			abandon: function () {
				game.global.radioStacks = 0;
				updateRadioStacks();
			},
			heldHelium: 0,
			heliumThrough: 79,
			unlockString: "clear 'The Prison' at Zone 80"
		},
		Frugal: {
			description: "Bring yourself to a dimension where Equipment is cheap but unable to be prestiged, in order to teach yourself better resource and equipment management. Completing <b>'Dimension of Anger' (20)</b> with this challenge active will return missing books to maps, and your new skills in Frugality will permanently cause MegaBooks to increase gather speed by 60% instead of 50%.",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 99);
			},
			start: function (reset) {
				var mod = (reset) ? 1.2 : 1.1;
				for (var item in game.equipment){
					var cost = (item == "Shield") ? "wood" : "metal";
					game.equipment[item].cost[cost][1] = mod;
				}
			},
			onLoad: function () {
				this.start();
			},
			fireAbandon: true,
			abandon: function () {
				this.start(true);
			},
			unlockString: "到达区域100"
		},
		Mapocalypse: {
			description: "Experience a slightly distorted version of the 'Electricity' dimension, to help understand the relationship between maps and the world. Everything will work exactly the same as Electricity, but all maps will have an extra 300% difficulty. Clearing <b>'The Prison' (80)</b> will cause the world to return to normal. You <b>will</b> receive the Helium reward from Electricity.",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 114);
			},
			fireAbandon: true,
			abandon: function () {
				for (var x = 0; x < game.global.mapsOwnedArray.length; x++){
					game.global.mapsOwnedArray[x].difficulty = parseFloat(game.global.mapsOwnedArray[x].difficulty) - this.difficultyIncrease;
				}
			},
			unlocks: "Siphonology",
			unlockString: "到达区域115",
			difficultyIncrease: 3
		},
		Coordinate: {
			description: "Visit a dimension where Bad Guys are Coordinated but never fast, to allow you to study naturally evolved Coordination. Completing <b>'Dimension of Anger' (20)</b> with this challenge active will cause all enemies to lose their Coordination.",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 119);
			},
			unlocks: "Coordinated",
			unlockString: "到达区域120"
		},
		Crushed: {
			description: "进入一个氦气丰富的维度，但坏蛋有50%的几率爆击造成 400%的伤害，除非你的格挡与你现在的生命一样高。 完成<b>仿生仙境(Z125)</b>会奖励你额外100%的氦气获得，但不包括Z125。 这个挑战是可重复的。",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 124);
			},
			critsTaken: 0,
			fireAbandon: true,
			abandon: function () {
				document.getElementById("badCrit").innerHTML = "";
				document.getElementById("badCanCrit").style.display = "none";
			},
			heldHelium: 0,
			heliumThrough: 124,
			unlockString: "到达区域125"
		},
		Slow: {
			description: "Legends tell of a dimension inhabited by incredibly fast bad guys, where blueprints exist for a powerful yet long forgotten weapon and piece of armor. All bad guys will attack first in this dimension, but clearing <b>Zone 120</b> with this challenge active will forever-after allow you to create these new pieces of equipment.",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 129);
			},
			unlockString: "到达区域130"
		},
		Nom: {
			description: "Travel to a dimension where bad guys enjoy the taste of Trimp. Whenever a group of Trimps dies, the bad guy will eat them, gaining 25% (compounding) more attack damage and healing for 5% of their maximum health. The methane-rich atmosphere causes your Trimps to lose 5% of their total health after each attack, but the bad guys are too big and slow to attack first. Clearing <b>Zone 145</b> will reward you with an additional 200% of all helium earned up to that point. This is repeatable!",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 144);
			},
			heldHelium: 0,
			heliumThrough: 145,
			unlockString: "到达区域145"
		},
		Mapology: {
			description: "Travel to a dimension where maps are scarce, in an attempt to learn to be more resourceful. You will earn one map Credit for each World Zone you clear, and it costs 1 credit to run 1 map. Completing <b>Zone 100</b> with this challenge active will return you to your original dimension. Double prestige from Scientist IV will not work during this challenge.",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 149);
			},
			fireAbandon: true,
			abandon: function (){
				document.getElementById("mapCreditsLeft").innerHTML = "";
			},
			onLoad: function () {
				updateMapCredits();
			},
			unlocks: "Resourceful",
			credits: 0,
			unlockString: "到达区域150"
		},
		Toxicity: {
			description: "Travel to a dimension rich in helium, but also rich in toxic bad guys. All bad guys have 5x attack and 2x health. Each time you attack a bad guy, your Trimps lose 5% of their health, and toxins are released into the air which reduce the breeding speed of your Trimps by 0.3% (of the current amount), but also increase all loot found by 0.15%, stacking up to 1500 times. These stacks will reset when you clear a zone. Completing <b>Zone 165</b> with this challenge active will reward you with an additional 200% of all helium earned up to that point. This is repeatable!",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 164);
			},
			highestStacks: 0,
			heldHelium: 0,
			heliumThrough: 165,
			stacks: 0,
			maxStacks: 1500, //Changing this breaks the feat spaghetti
			stackMult: 0.997,
			lootMult: 0.15,
			unlockString: "到达区域165"
		},
		Devastation: {
			description: "Travel to a harsh dimension where Trimps are penalized for the mistakes of previous generations. If your army is killed at any point, any overkill damage will be applied 750% to the next group of Trimps to fight. Completing <b>Imploding Star (Zone 170)</b> will return the world to normal.",
			completed: false,
			filter: function () {
				return (game.global.highestLevelCleared >= 169);
			},
			lastOverkill: -1,
			unlocks: "Overkill",
			unlockString: "到达区域170"
		},
		Watch: {
			description: "Travel to a strange dimension where life is easier but harder at the same time. At the end of each World Zone any available equipment upgrades will drop, and any unassigned Trimps will be split evenly amongst Farmer, Lumberjack, and Miner. However, resource production and drops from all sources will be halved, and all enemies will deal 25% more damage. Completing <b>Zone 180</b> with this challenge active will reward you with an additional 150% of all helium earned up to that point.",
			filter: function () {
				return (game.global.highestLevelCleared >= 179);
			},
			heliumMultiplier: 1.5,
			heldHelium: 0,
			heliumThrough: 180,
			unlockString: "到达区域180",
			enteredMap: false
		},
		Lead: {
			description: "Travel to a dimension where life is easier or harder depending on the time. Odd numbered zones will cause double resources to be earned from all sources, and will give your Trimps 50% extra attack. Starting an even numbered zone will cause all enemies to gain 200 stacks of <b>Momentum</b>. Clearing a World cell will cause 1 stack to be lost, and each stack will increase the enemy's damage and health by 4%, and block pierce by 0.1%. If your Trimps attack without killing their target, they will lose 0.03% of their health per enemy stack. Completing <b>Zone 180</b> with this challenge active will reward you with an additional 250% of all helium earned up to that point.",
			filter: function () {
				return (game.global.highestLevelCleared >= 179);
			},
			heliumMultiplier: 2.5,
			stacks: 0,
			heldHelium: 0,
			heliumThrough: 180,
			unlockString: "到达区域180",
			fireAbandon: true,
			abandon: function () {
				if (document.getElementById('determinedBuff')) document.getElementById('determinedBuff').style.display = "none";
			}
		},
		Corrupted: {
			get description(){ return "Travel to a dimension where enemies have 3X attack and Corruption runs rampant, beginning at Z60. The Corruption in this dimension grants helium, but 50% less than normal. Improbabilities and Void Maps will still not gain strength or double reward until Z" + mutations.Corruption.start(true) + ". Completing <b>Zone 190</b> with this challenge active will reward you with an extra 100% helium earned from any source up to that point, and will instantly transport you back to your normal dimension."},
			filter: function () {
				return (game.global.highestLevelCleared >= 189);
			},
			heliumMultiplier: 1,
			heldHelium: 0,
			heliumThrough: 190,
			hiredGenes: false,
			unlockString: "到达区域190"
		}
	},
	stats:{
		trimpsKilled: {
			title: "脆皮死亡",
			value: 0,
			valueTotal: 0
		},
		battlesWon: {
			title: "战斗胜利",
			value: 0,
			valueTotal: 0
		},
		mapsCleared: {
			title: "地图完成",
			value: 0,
			valueTotal: 0
		},
		zonesCleared: {
			title: "区域完成",
			value: 0,
			valueTotal: 0
		},
		gemsCollected: {
			title: "收集宝石", 
			value: 0, 
			valueTotal: 0,
			display: function () {
				return ((this.value + this.valueTotal) > 0)
			}
		},
		trimpsFired: {
			title: "解雇脆皮",
			value: 0,
			valueTotal: 0,
			//This stat was added in 3.6 and the numbers will look bad for a few months.
			//Open maybe 10/21/16ish
			display: function () {return false;}
		},
		highestLevel: {
			title: "最高到达区域",
			valueTotal: function () {
				return game.global.highestLevelCleared + 1;
			}
		},
		totalPortals: {
			title: "使用传送门",
			display: function () {
				return (game.global.totalPortals > 0);
			},
			valueTotal: function () {
				return game.global.totalPortals;
			}
		},
		totalHelium: {
			title: "获得氦气",
			display: function () {
				return (game.global.totalHeliumEarned > 0);
			},
			valueTotal: function () {
				return game.global.totalHeliumEarned;
			}
		},
		spentOnWorms: {
			title: "Wormholed Helium",
			display: function () {
				return ((this.value + this.valueTotal) > 0)
			},
			value: 0,
			valueTotal: 0
		},
		heliumHour: {
			title: "He/Hour this Run",
			display: function () {
				return (game.resources.helium.owned > 0);
			},
			value: function (useTemp) {
				var timeThisPortal = new Date().getTime() - game.global.portalTime;
				timeThisPortal /= 3600000;
				var resToUse = (useTemp) ? game.global.tempHighHelium : game.resources.helium.owned;
				return Math.floor(resToUse / timeThisPortal);
			}
		},
		bestHeliumHourThisRun: {
			title: "Best He/Hr this Run",
			display: function () {
				return (this.storedValue > 0);
			},
			storedValue: 0,
			atZone: 0,
			value: function () {
				return prettify(game.stats.bestHeliumHourThisRun.storedValue) + ", Z:" + game.stats.bestHeliumHourThisRun.atZone;
			},
			evaluate: function () { //called from portalTime
				var heHr = game.stats.heliumHour.value();
				if (heHr > this.storedValue){
					this.storedValue = heHr;
					this.atZone = game.global.world;
				}
			},
			onPortal: function () {
				this.storedValue = 0;
				this.atZone = 0;
			},
			noFormat: true
		},
		bestHeliumHour: {
			title: "Best He/Hour all Runs",
			display: function () {
				return (this.valueTotal > 0);
			},
			valueTotal: 0
		},
		planetsBroken: {
			title: "Planets Broken",
			display: function () {
				return (this.valueTotal > 0);
			},
			valueTotal: 0
		},
		highestVoidMap: {
			title: "Highest Void Map Clear",
			display: function () {
				return (this.value > 0 || this.valueTotal > 0);
			},
			value: 0,
			valueTotal: 0,
			noAdd: true,
			evaluate: function() { //called on completion of void map
				if (game.global.world > this.value) this.value = game.global.world;
				if (game.global.world > this.valueTotal) this.valueTotal = game.global.world;
			}
		},
		goldenUpgrades: {
			title: "Golden Upgrades",
			display: function () {
				return (this.value > 0 || this.valueTotal > 0);
			},
			value: 0,
			valueTotal: 0
		},
		totalHeirlooms: { //added from createHeirloom to value
			title: "Heirlooms Found",
			display: function () {
				return (this.value > 0 || this.valueTotal > 0);
			},
			value: 0,
			valueTotal: 0
		},
		dailyBonusHelium: {
			title: "Daily Challenge Helium",
			display: function () {
				return (this.value >0 || this.valueTotal > 0);
			},
			value: 0,
			valueTotal: 0
		},
		cellsOverkilled: {
			title: "World Cells Overkilled",
			display: function () {
				return (this.value > 0 || this.valueTotal > 0);
			},
			value: 0,
			valueTotal: 0
		},
		trimpsGenerated: {
			title: "Trimps from Generator",
			display: function() {
				return (this.value > 0 || this.valueTotal > 0);
			},
			value: 0,
			valueTotal: 0
		}
		
	},
	generatorUpgrades: {
		Efficiency: {
			base: 5e8,
			baseCost: 8,
			upgrades: 0,
			modifier: 1,
			tickAtFuel: function(fuel){
				return Math.floor(Math.sqrt(fuel) * ((this.base * 0.1 * this.upgrades) + this.base));
			},
			cost: function(){
				return this.baseCost + (8 * this.upgrades);
			},
			description: function(){
				var burnRate = getFuelBurnRate();
				return "Your Generator currently grants " + prettify(scaleNumberForBonusHousing(this.tickAtFuel(burnRate))) + " Max Trimps per tick at " + burnRate + " fuel (the amount of fuel needed to tick). Purchase this to increase the Generator's efficiency by 10% (additive)";
			}
		},
		Capacity: {
			base: 3,
			baseCost: 32,
			upgrades: 0,
			modifier: 3,
			baseIncrease: 0.4,
			cost: function(){
				return this.baseCost + (32 * this.upgrades);
			},
			nextModifier: function(){
				return this.baseIncrease + this.modifier;
			},
			description: function(){
				return "Your Generator can currently store " + prettify(this.modifier) + " fuel. Purchase this to increase the fuel capacity by " + prettify(this.baseIncrease) + ". The more fuel you have in storage, the more housing you'll create per tick!";
			}
		},
		Supply: {
			base: 0.2,
			baseCost: 64,
			baseIncrease: 0.02,
			upgrades: 0,
			modifier: 0.2,
			cost: function(){
				return this.baseCost + (64 * this.upgrades);
			},
			nextModifier: function(){
				return this.baseIncrease + this.modifier;
			},
			description: function(){
				var currentAmt = this.modifier;
				var maxZone = ((currentAmt - 0.2) / 0.01) + mutations.Magma.start();
				return "The Magma at Zone " + mutations.Magma.start() + " contains 0.2 fuel per cell, and each zone after that can drop 0.01 more. Your generator can currently only harvest a max of " + prettify(this.modifier) + " per cell, meaning some fuel after Z" + prettify(maxZone) + " will be unharvestable. Purchase this upgrade to increase the amount you can harvest per cell by <b>0.02</b>, taking advantage of <b>2 extra zones</b>.";
			}
		},
	},
	permanentGeneratorUpgrades: {
		Hybridization: {
			description: "解锁将Dimensional Generator切换到混合模式的功能。 当燃料低于最大值时，混合模式将自动切换到Gain Fuel，当燃料充满时，混合模式将自动切换到Gain Mi。",
			cost: 400,
			owned: false
		},
		Storage: {
			description: "解锁额外的燃料储存。This storage will always be equal to your normal fuel cap and will only store extra fuel above your normal cap. Fuel in this extra storage does not increase generator Trimps/tick, but acts as nice padding to help prevent wasted fuel. Hybrid mode will attempt to fill your extra storage halfway.",
			cost: 800,
			owned: false
		},
		Shielding: {
			description: "Reduce the amount of Magmite that decays after each portal by 10% (additive)",
			cost: 1400,
			owned: false
		},	
		Slowburn: {
			description: "Reduce the rate of fuel consumption per tick by 0.1, from 0.5 to 0.4",
			cost: 2500,
			owned: false
		}
	},
	//Total 1635.2% after adding Z230-Z300 zone progress
	tierValues: [0, 0.3, 1, 2.5, 5, 10, 20, 40],
	colorsList: ["white", "#155515", "#151565", "#551555", "#954515", "#651515", "#951545", "#35a5a5"], //handwritten hex colors make the best hex colors
	achievements: {//title description progress need trasnlate
		zones: {
			finished: 0,
			title: "区域进展",
			description: function (number) {
				return "完成 区域 " + this.breakpoints[number];
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return game.global.highestLevelCleared + " / " + this.breakpoints[this.finished];
				return game.global.highestLevelCleared + " total";
			},
			evaluate: function () { return game.global.highestLevelCleared},
			breakpoints: [2, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300],
			tiers: [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7],
			names: ["这很容易", "Blimp Slayer", "Groundbreaker", "The Beginning", "Determined", "Professor", "Trimp Aficionado", "Slayer of Planets", "Motivated", "Electric", "Stronk", "Endurance", "Unwavering", "Coordinated", "Resolved", "Steadfast", "Grit", "Perseverance", "Persistence", "Tenacity", "The Instigator", "The Destroyer", "The Eradicator", "The Exterminator", "Heat Maker", "Heat Hater", "Heat Breaker", "Heat Slayer", "Heat Expert", "Heat Bender", "Volcanic", "Magma Master"],
			icon: "icomoon icon-compass2",
			newStuff: []
		},
		damage: {
			finished: 0,
			title: "Trimp Damage",
			description: function (number) {
				return "达到 " + prettify(this.breakpoints[number]) + " 面板伤害";
			},
			progress: function () {				
				if (this.breakpoints.length > this.finished) return prettify(this.highest) + " / " + prettify(this.breakpoints[this.finished]);
				return "Highest is " + prettify(this.highest);
			},
			highest: 0,
			breakpoints: [100, 100000, 1e+11, 1e+17, 1e+23, 1e+29, 1e+35, 1e+41, 1e+47, 1e+53, 1e+60, 1e+67],
			tiers: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
			names: ["Lead Trimps", "Silver Trimps", "Golden Trimps", "Copper Trimps", "Platinum Trimps", "Iron Trimps", "Steel Trimps", "Obsidian Trimps", "Cobalt Trimps", "Topaz Trimps", "Diamond Trimps", "Transcendental Trimps"],
			icon: "icomoon icon-bomb",
			newStuff: []
		},
		trimps: {
			finished: 0,
			highest: 0,
			title: "Trimps Owned",
			description: function (number) {
				return "总共拥有  " + prettify(this.breakpoints[number]) + " 脆皮";
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return prettify(Math.floor(this.highest)) + " / " + prettify(this.breakpoints[this.finished]);
				return "Highest is " + prettify(Math.floor(this.highest));
			},
			breakpoints: [50, 150, 300, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000],
			tiers: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
			names: ["Too Many Trimps", "Overcrowding", "This Is Trimp", "It Takes a Tribe", "It Takes a Town", "It Takes a City", "A Milli Trimpi", "Trimpsponential Growth", "MMMEGATRIMPS", "It Takes a Nation", "It Takes a Planet", "It Takes a Universe"],
			icon: "icomoon icon-group",
			newStuff: []
		},
		housing: {
			finished: 0,
			title: "Real Estate",
			description: function (number) {
				return "建造你的第一个" + this.breakpointsCN[number];
			},
			breakpoints: ["Hut", "House", "Mansion", "Hotel", "Resort", "Gateway", "Wormhole", "Collector", "Warpstation"],
			breakpointsCN: ["小屋", "房子", "豪宅", "酒店", "度假村", "Gateway", "虫洞", "Collector", "Warpstation"],
			tiers: [1, 1, 1, 1, 2, 2, 2, 2, 3],
			names: ["Tiny Homes", "Residential Development", "Taste for Luxury", "Fancy", "The Skyline", "Dimensional Drift", "Too Cool For Helium", "Space From Stars", "To Infinity and Beyond"],
			icon: "icomoon icon-building-o",
			newStuff: []
		},
		portals: {
			finished: 0,
			title: "Total Portals",
			description: function (number) {
				var s = (number > 0) ? "s" : "";
				return "使用传送门达到 " + prettify(this.breakpoints[number]) + " 次";
			},
			display: function () {
				return (game.global.totalPortals > 0);
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return this.evaluate() + " / " + this.breakpoints[this.finished];
				return this.evaluate() + " total";
			},
			evaluate: function () { return game.global.totalPortals},
			breakpoints: [1, 3, 10, 20, 50, 100, 200, 500],
			tiers: [1, 2, 2, 2, 3, 3, 4, 4],
			names: ["A Trimp Through Time", "When The Wild Things Are", "A Time Like No Other", "Venti Timeachino", "Time of Your Life", "Centennial Trimper", "Amnesia", "Dedicated Traveller"],
			icon: "icomoon icon-history",
			newStuff: []
		},
		totalZones: {
			finished: 0,
			title: "Total Zone Clears",
			description: function (number) {
				return "总共完成  " + prettify(this.breakpoints[number]) + " 区域";
			},
			evaluate: function () {
				return game.stats.zonesCleared.value + game.stats.zonesCleared.valueTotal;
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return this.evaluate() + " / " + this.breakpoints[this.finished];
				return this.evaluate() + " total";
			},
			breakpoints: [30, 70, 130, 200, 400, 777, 1000, 1500],//total zones according to stats
			tiers: [2, 2, 3, 3, 3, 4, 4, 5],
			names: ["Pathfinder", "Bushwhacker", "Pioneer", "Seeker", "Adventurer", "Lucky Resolve", "GigaClearer", "Globetrotter"],
			icon: "icomoon icon-globe3",
			newStuff: []
		},
		totalMaps: {
			finished: 0,
			title: "Total Map Clears",
			description: function (number) {
				return "总共完成  " + prettify(this.breakpoints[number]) + " 地图";
			},
			display: function () {
				return (this.evaluate() > 0);
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return prettify(this.evaluate()) + " / " + prettify(this.breakpoints[this.finished]);
				return prettify(this.evaluate()) + " total";
			},
			evaluate: function () {
				return game.stats.mapsCleared.value + game.stats.mapsCleared.valueTotal;
			},
			breakpoints: [50, 100, 2000, 5000, 10000, 20000, 50000, 100000],//total maps according to stats
			tiers: [1, 2, 2, 3, 3, 4, 4, 5],
			names: ["Map Maker", "Map Runner", "Map Destroyer", "Map Annihilator", "Map Slaughterer", "Map Commander", "Maptain", "Cartographer"],
			icon: "icomoon icon-map4",
			newStuff: []
		},
		totalHelium: {
			finished: 0,
			title: "Helium Collection",
			description: function (number) {
				return "总共收集 " + prettify(this.breakpoints[number]) + " 氦气";
			},
			progress: function (){
				if (this.breakpoints.length > this.finished) return prettify(this.evaluate()) + " / " + prettify(this.breakpoints[this.finished]);
				return prettify(this.evaluate()) + " total";
			},
			evaluate: function () {
				return game.global.totalHeliumEarned;
			},
			display: function () {
				return (game.global.totalHeliumEarned > 0);
			},
			breakpoints: [100, 10e2, 10e3, 10e4, 10e5, 10e6, 10e7, 10e8],
			tiers: [1, 2, 3, 4, 5, 6, 6, 7],
			names: ["Cool", "Crisp", "Chilly", "Frosty", "Frigid", "Frozen", "Gelid", "Glacial"],
			icon: "glyphicon glyphicon-oil",
			newStuff: []
		},
		totalHeirlooms: {
			finished: 0,
			title: "Heirloom Collection",
			description: function (number) {
				var number = this.breakpoints[number];
				var s = (number > 1) ? "s" : "";
				return "收集 " + prettify(number) + " Heirloom" + s;
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return prettify(this.evaluate()) + " / " + prettify(this.breakpoints[this.finished]);
				return prettify(this.evaluate()) + " total";
			},
			evaluate: function () {
				return game.stats.totalHeirlooms.value + game.stats.totalHeirlooms.valueTotal;
			},
			display: function () {
				return (game.global.totalPortals >= 5);
			},
			breakpoints: [1, 10, 40, 100, 500, 1111, 2000],
			tiers: [2, 2, 3, 3, 4, 5, 6],
			names: ["Finder", "Gatherer", "Accumulator", "Fancier", "Aficionado", "Devotee", "Connoisseur"],
			icon: "icomoon icon-archive",
			newStuff: []
		},
		totalGems: {
			finished: 0,
			title: "Gem Collection",
			description: function (number) {
				var number = this.breakpoints[number];
				var s = (number > 1) ? "s" : "";
				return "收集  " + prettify(number) + " 宝石";
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return prettify(this.evaluate()) + " / " + prettify(this.breakpoints[this.finished]);
				return prettify(this.evaluate()) + " total";
			},
			evaluate: function () {
				return game.stats.gemsCollected.value + game.stats.gemsCollected.valueTotal;
			},
			breakpoints: [1, 1e+9, 1e+21, 1e+30, 1e+39, 1e+48],//total gems according to statistics
			tiers: [1, 2, 3, 4, 5, 6],
			names: ["What's This For?", "Collector of Shinies", "Dragimp Lover", "Expert of Shinies", "Jeweller", "Gemaster"],
			icon: "icomoon icon-diamond",
			newStuff: []
		},
		dailyHelium: {
			finished: 0,
			title: "Daily Bonus",
			description: function (number) {
				var number = this.breakpoints[number];
				return "从每日挑战获得 " + prettify(number) + " 氦气";
			},
			evaluate: function () {
				return game.stats.dailyBonusHelium.value + game.stats.dailyBonusHelium.valueTotal;
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return prettify(this.evaluate()) + " / " + prettify(this.breakpoints[this.finished]);
				return prettify(this.evaluate()) + " total";
			},
			breakpoints: [5e5, 1e6, 5e6, 2.5e7, 2e9],
			display: function () {
				return (game.global.highestLevelCleared >= 99);
			},
			tiers: [3, 4, 5, 6, 7],
			names: ["Daytermined", "Daydicated", "Daystiny", "Daylighted", "Daystroyer"],
			icon: "icomoon icon-sun",
			newStuff: []
		},
		blockTimed: {
			finished: 0,
			title: "Speed: The Block",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "在 " + number + " 内完成The Block";
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩 " + formatMinutesForDescriptions(this.highest);
			},
			display: function () {
				return (game.global.totalPortals >= 1 || this.finished >= 1);
			},
			highest: 0,
			reverse: true,
			showAll: true,
			breakpoints: [480, 240, 120, 60],//In minutes
			tiers: [1, 1, 2, 2],
			names: ["Block Hobbyist", "Block Apprentice", "Block Professional", "Block Rockstar"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		wallTimed: {
			finished: 0,
			title: "Speed: The Wall",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "在 " + number + " 内完成The Wall";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 10 && (game.global.totalPortals >= 1 || this.finished >= 1));
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩 " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			showAll: true,
			breakpoints: [480, 240, 120, 60],//In minutes
			tiers: [2, 2, 2, 3],
			names: ["Wall Novice", "Wall Student", "Wall Contender", "Wall Scaler"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		angerTimed: {
			finished: 0,
			title: "Speed: Anger",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "在 " + number + " 内完成DoA";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 14 && (game.global.totalPortals >= 1 || this.finished >= 1));
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩 " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			showAll: true,
			breakpoints: [480, 240, 120, 60],//In minutes
			tiers: [2, 2, 3, 3],
			names: ["Angry Jogger", "Angry Runner", "Angry Sprinter", "Angry Racer"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		doomTimed: {
			finished: 0,
			title: "Speed: Doom",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "在 " + number + " 内完成ToD";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 19 && (game.global.totalPortals >= 1 || this.finished >= 1));
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩 " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			showAll: true,
			breakpoints: [480, 240, 120, 60],//In minutes
			tiers: [2, 3, 3, 4],
			names: ["Walk to Doom", "Trot to Doom", "Canter to Doom", "Gallop to Doom"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		prisonTimed: {
			finished: 0,
			title: "Speed: The Prison",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "在 " + number + " 内完成Prison";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 32 && (game.global.totalPortals >= 1 || this.finished >= 1));
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩 " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			showAll: true,
			breakpoints: [480, 360, 240, 180, 150, 120, 105, 90], //In minutes
			tiers: [3, 4, 4, 5, 5, 5, 6, 6],
			names: ["Prison Odyssey", "Prison Expedition", "Prison Adventure", "Prison Trek", "Prison Tour", "Prison Road Trip", "Prison Hike", "Quick Prison Visit"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		bionicTimed: {
			finished: 0,
			title: "Speed: Bionic",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>在 " + number + " 内完成仿生仙境</span>";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 79);
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩 " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			showAll: true,
			breakpoints: [1440, 1200, 720, 480, 210, 150], //In minutes
			tiers: [4, 4, 5, 5, 6, 6],
			names: ["Lover of Bots", "Friend of Bots", "Acquaintance of Bots", "Bot Disliker", "Bot Hater", "Bot Slayer"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},		
		starTimed: {
			finished: 0,
			title: "Speed: Star",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>在 " + number + " 内完成Imploding Star</span>";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 124);
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩 " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			showAll: true,
			breakpoints: [1680, 1080, 390, 180, 150], //In minutes
			tiers: [5, 5, 5, 6, 6],
			names: ["Cosmic Curiosity", "Star Struck", "Space Speeder", "Intense Inertia", "Stellar Striker"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		spireTimed: {
			finished: 0,
			title: "Speed: Spire",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>在 " + number + " 内完成The Spire</span>";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 169);
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩 " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			showAll: true,
			breakpoints: [1300, 900, 500, 200, 175],
			tiers: [6, 6, 6, 7, 7],
			names: ["Spire Trialer", "Spire Rider", "Spire Strider", "Spire Glider", "Spire Flier"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		oneOffs: {
			//Turns out this method of handling the feats does NOT scale well... adding stuff to the middle is a nightmare
			finished: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
			title: "Feats",
			descriptions: ["Reach Z30 with no respec and 60 or less He spent", "Have over 1M traps at once", "Die 50 times to a single Voidsnimp", "Reach Zone 10 with 5 or fewer dead Trimps", "Reach exactly 1337 he/hr", "Equip a magnificent or better Staff and Shield", "Reach Z60 with 1000 or fewer dead Trimps", "Reach Z120 without using manual research", "Reach Z75 without buying any housing", "Find an uncommon heirloom at Z146 or higher", "Spend over 250k total He on Wormholes", "Reach Z60 with rank III or lower equipment", "Kill an Improbability in one hit", "Beat a Lv 60+ Destructive Void Map with no deaths", "Beat Crushed without being crit past Z5", "Kill an enemy with 100 stacks of Nom", "Reach Z60 without hiring a single Trimp", "Beat Toxicity, never having more than 400 stacks", "Own 100 of all housing buildings", "Overkill every possible world cell before Z60", "Complete Watch without entering any maps", "Complete Lead with 1 or fewer Gigastations", "Complete Corrupted without Geneticists", "Complete The Spire with 0 deaths"],
			tiers: [3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7],
			description: function (number) {
				return this.descriptions[number];
			},
			filters: [29, 29, -1, 59, -1, 124, 59, 119, 74, -1, -1, 59, 59, 59, 124, 144, 59, 164, 59, -1, 179, 179, 189, 199],
			icon: "icomoon icon-flag",
			names: ["Underachiever", "Hoarder", "Needs Block", "Peacekeeper", "Elite Feat", "Swag", "Workplace Safety", "No Time for That", "Tent City", "Consolation Prize", "Holey", "Shaggy", "One-Hit Wonder", "Survivor", "Thick Skinned", "Great Host", "Unemployment", "Trimp is Poison", "Realtor", "Gotta Go Fast", "Grindless", "Unsatisfied Customer", "Organic Trimps", "Invincible"],
			newStuff: []
		}
	},
	
	heirlooms: { //Basic layout for modifiers. Steps can be set specifically for each modifier, or else default steps will be used
		//NOTE: currentBonus is the only thing that will persist!
		values: [10, 20, 30, 50, 150, 300, 800],
		defaultSteps: [[1, 2, 1], [2, 3, 1], [3, 6, 1], [6, 12, 1], [16, 40, 2], [32, 80, 4], [64, 160, 8]],
		rarityNames: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Magnificent', 'Ethereal'],
		rarities:[[7500,2500,-1,-1,-1,-1,-1],[2000,6500,1500,-1,-1,-1,-1],[500,4500,5000,-1,-1,-1,-1],[-1,3200,4300,2500,-1,-1,-1],[-1,1600,3300,5000,100,-1,-1],[-1,820,2400,6500,200,80,-1],[-1,410,1500,7500,400,160,30],[-1,200,600,8000,800,320,80],[-1,-1,-1,7600,1600,640,160], [-1,-1,-1,3500,5000,1200, 300]],
		rarityBreakpoints: [41, 60, 80, 100, 125, 146, 166, 181, 201],
		Staff: {
			metalDrop: {
				name: "Metal Drop Rate",
				currentBonus: 0,
			},
			foodDrop: {
				name: "Food Drop Rate",
				currentBonus: 0,
			},
			woodDrop: {
				name: "Wood Drop Rate",
				currentBonus: 0,
			},
			gemsDrop: {
				name: "Gem Drop Rate",
				currentBonus: 0,
			},
			fragmentsDrop: {
				name: "Fragment Drop Rate",
				currentBonus: 0,
			},
			FarmerSpeed: {
				name: "Farmer Efficiency",
				currentBonus: 0,
			},
			LumberjackSpeed: {
				name: "Lumberjack Efficiency",
				currentBonus: 0,
			},
			MinerSpeed: {
				name: "Miner Efficiency",
				currentBonus: 0,
			},
			DragimpSpeed: {
				name: "Dragimp Efficiency",
				currentBonus: 0,
			},
			ExplorerSpeed: {
				name: "Explorer Efficiency",
				currentBonus: 0,
			},
			ScientistSpeed: {
				name: "Scientist Efficiency",
				currentBonus: 0,
			},
			empty: {
				name: "Empty",
				currentBonus: 0,
			}
		},
		Shield: {
			playerEfficiency: {
				name: "Player Efficiency",
				currentBonus: 0,
				steps: [[2,4,1],[4,8,1],[8,16,1],[16,32,2],[32,64,4],[64,128,8],[128,256,16]]
			},
			trainerEfficiency: {
				name: "Trainer Efficiency",
				currentBonus: 0,
				steps: [[1,5,1],[5,10,1],[10,20,1],[20,40,2],[40,60,2],[60,80,2],[80,100,2]]
			},
			storageSize: {
				name: "Storage Size",
				currentBonus: 0,
				steps: [[8,16,4],[16,32,4],[32,64,4],[64,128,4],[128,256,8],[256,512,16],[512,768,16]]
			},
			breedSpeed: {
				name: "Breed Speed",
				currentBonus: 0,
				steps: [[1,2,1],[2,5,1],[5,10,1],[10,20,1],[70,100,3],[100,130,3],[130,160,3]]
			},
			trimpHealth: {
				name: "Trimp Health",
				currentBonus: 0,
				steps: [[1,2,1],[2,6,1],[6,20,2],[20,40,2],[50,100,5],[100,150,5],[150,200,5]]
			},
			trimpAttack: {
				name: "Trimp Attack",
				currentBonus: 0,
				steps: [[1,2,1],[2,6,1],[6,20,2],[20,40,2],[50,100,5],[100,150,5],[150,200,5]]
			},
			trimpBlock: {
				name: "Trimp Block",
				currentBonus: 0,
				steps: [[1,2,1],[2,4,1],[4,7,1],[7,10,1],[28,40,1],[48,60,1],[68,80,1]]
			},
			critDamage: {
				name: "Crit Damage, additive",
				currentBonus: 0,
				steps: [[10,20,5],[20,40,5],[40,60,5],[60,100,5],[100,200,10],[200,300,10],[300,400,10]],
				filter: function () {
					return (!game.portal.Relentlessness.locked);
				}
			},
			critChance: {
				name: "Crit Chance, additive",
				currentBonus: 0,
				steps: [[0.2,0.6,0.2],[0.6,1.4,0.2],[1.4,2.6,0.2],[2.6,5,0.2],[5,7.4,0.2],[7.4,9.8,0.2],[9.8,12.2,0.2]],
				filter: function () {
					return (!game.portal.Relentlessness.locked);
				}
			},
			voidMaps: {
				name: "Void Map Drop Chance",
				currentBonus: 0,
				steps: [[0.5,1.5,0.5],[2.5,4,0.5],[5,7,0.5],[8,11,0.5],[12,16,0.5],[17,22,0.5],[24,30,0.5]]
			},
			empty: {
				name: "Empty",
				currentBonus: 0,
				rarity: 1
			}
		}
	
	},
	
	
	worldText: {
		w2: "你的脆皮杀了很多坏人并回来了。 看来你得到这个区域。 然而，世界是很大的，还有很多的区域等待着你的探索。",
		w3: "根据你的命令，你的科学家已经开始尝试找出这个星球是多么大。",
		w4: "你命令你的脆皮搜索整个区域为你的船寻找钥匙，但没有找到任何东西。真倒霉。",
		w5: "你在这个区域的尽头看到了什么吗？ 它超大！ 这太可怕了！ 你从来没有见过任何类似的东西，但你知道这是一个Blimp。 你怎么知道的？停止探索，去杀死它。",
		w6: "你越过了Blimp的尸体，你的一个脆皮笑着发出的声音。 你们都穿越硫磺河到下一个区，可以感受到古代知识的存在。 好好地探索。",
		w7: "缓慢而稳定可以赢得比赛。除非你是在和一个真正尝试的人赛跑。",
		w8: "你的定居点越来越拥挤，街道上有脆皮，你觉得很热。 你突然有一个强烈的愿望，创建一个地图，虽然你不知道这有什么帮助。",
		w9: "你觉得你似乎来过这个地方。Déjà-vu?",
		w10: "前面看上去像是另一个Blimp。太远了，看不清，但它似乎不只有一个头？",
		w11: "只要没有什么阻止你，你是不可阻挡的。 不幸的是，似乎有些东西真的想阻止你。",
		w12: "你看到那个闪烁的绿灯吗？ 真奇怪。 好吧。",
		w13: "你的科学家终于完成了他们关于世界大小分析的报告。 根据报告，他们很确定它是无限大，但你很确定他们只是对检查感到无聊。",
		w14: "你试图带回脆皮在最后一个区域的地面上留下的一些设备，你得到了一个碎片。 这个星球变得危险起来，保持警觉。",		
		w15: "另一天，另一个Blimp在区域的尽头",
		w16: "真的吗？ 这么快就有另一个Blimp？",
		w17: "你爬上一个大悬崖，看着新的区域。 红色的污垢，烧焦并破损的地面。 那个飞来飞去的是Dragimp么？",
		w18: "似乎有一个奇怪的力量，敦促你继续前进。 气氛变得...愤怒。 你的一部分想转身走回去，但你的大多数想要继续前进。",
		w19: "你向后看，看到你的王国。 你有宝石，殖民地和领土。 你想知道足够的Trimps是否已经沉迷于战斗。 沉思之后，当你开始向前移动时，一个词从你的嘴里掉下来。 'Nah'",
		w20: "你可以感觉到你接近你的目标。",
		w22: "奇怪的是，天空似乎越来越暗。 你问一个脆皮时间，但它不知道时钟是什么。",
		w25: "你是一个背叛者。宇宙指引你进入那个传送门，但你不断向前进。你感觉……你以前没来过这里。",
		w27: "It seems like the further you press on, the less you know. You still feel an urge to use the portal, though the urge has begun to dwindle.",
		w29: "Your Trimps came up with a pretty catchy battle song that got stuck in your head. None of them survived the next fight though, and you can't remember most of it. Life's tough.",
		w33: "You climb over a large hill that was separating this zone from the last. The sky is pitch black and lightning crackles in the distance. This is a site of heavy corruption.",
		w35: "You start to wonder how long you've been doing the same thing over and over. There must be something you can do to start to break the cycle. Perhaps you could alter the portal...",
		w40: "You can't help but notice that the Trimps seem to be the only creatures on this planet not immediately hostile towards outsiders. You ask a nearby Trimp soldier what he thinks you are, and he drools a bit.",
		w42: "The world seems so barren out this far. You feel like you're finally starting to get ahead of the curve, but you know by now not to get comfortable.",
		w44: "Each day and night seems to grow longer than the one before. Is time slowing down? Argh! You fall to your knees with a splitting headache and a strong desire to use the portal. After a few minutes, it passes and you forget what happened. What are we talking about?",
		w46: "All traces of hills and mountains have long since been trudged past. The world is flat and hostile. You wish your Trimps were better conversationalists.",
		w48: "As your Trimps scavenge every last bit of helium from that Blimp, one of them begins freaking out. He runs around waving his little arms and making funny noises for a while, eats some dirt, then takes a little nap. You wonder if that's normal. Yeah... probably fine.",
		w50: "It's been a long time since you've found any blueprints in the maps. You start to wonder where those things even come from.",
		w51: "Your scientists have detected an anomaly at the end of Zone 59. They recommend that you stop doing whatever it is that you're doing.",
		w53: "As you get closer to the anomaly, you start to notice more and more strange behaviour from your Trimps. Holes in your memory are starting to become noticeable as multiple existences blend in to one. Trippy.",
		w54: "As you get closer to the anomaly, you start to notice more and more strange behaviour from your Trimps. Holes in your memory are starting to become noticeable as multiple existences blend in to one. Trippy.",
		w56: "A loud boom echoes in the distance, and one of your Trimps runs up to you with outstretched arms, looking quite frightened. He probably just wants some armor and weapons! You hand him some gear, and he accepts it with excitement.",
		w58: "A huge storm has formed and daylight has become a luxury you have mostly forgotten about. Your Trimps seem to want to go back home, but you're pretty sure you're supposed to keep going this way, so you do. You're very close to the anomaly.",
		w59: "There it is. The anomaly is at the end of the zone. You can see it but you don't know what you're seeing. Where did that... thing... come from?! This is highly Improbable.",
		w60: "The ground instantly cracks and large plumes of green gas escape from the planet's core to the atmosphere. The planet feels different. Everything feels different. This Universe has grown unstable, the planet has broken. What have you done?",
		w61: "Other than all the dead Trimps, that wasn't so bad.",
		w65: "You feel more powerful than ever. The universe seems to be constantly adjusting itself to get rid of you, yet you rise against and persist. Something as tiny as you taking on an entire universe!",
		w68: "You figure some entertainment wouldn't be awful, and decide to teach your Trimps how to play soccer. A few hours and zero progress later, you really regret that decision.",
		w70: "The Improbabilities haven't seemed to slow down. You know you need to figure out a plan, but you don't know what to plan for.",
		w72: "You slash through another Improbability with relative ease, but something isn't right. A sour smell hits your nose and in disgust, you whip around in search of the source. Oh, wait, it's just the Trimps.",
		w80: "When's the last time you made a map? You have a feeling you should probably do that.",
		w82: "Whew, that was an exhilarating kill. You decide to reward your Trimps with some Improbability stew. It's pretty tasty.",
		w83: "That stew was probably a bad idea. Anyone else feeling sick?",
		w85: "An ancient and fuzzy memory just crept back in to your head. You're not quite sure where it came from, but you know the memory is yours. You remember being on a ship, and seeing this planet from orbit. There was someone with you!",
		w87: "Bits and pieces of memories continue trickling back in as you continue to put distance between yourself and the source of Anger. You can almost see in your mind who you came here with. Where could they be...",
		w90: "You decide to ask your scientists to come up with an extravagant machine that can scan your brain for old memories to see if there's anything helpful up there. They seem excited about a new project and quickly get to work.",
		w92: "You hear a huge explosion from the science lab and realize that the brain scan machine will probably never be finished.",
		w95: "Need some motivation? You can do it! Maybe.",
		w100: "You stop dead in your tracks. You remember who you came here with, and you remember that you are not happy with Captain Druopitee for bringing you here. You know he landed with you. You know the ship is still here. He's here.",
		w105: "You call a meeting with all of your Trimps to explain the situation. After giving an extremely long, epic, and motivational speech but hearing no reaction from the crowd, you remember that your Trimps cannot understand you. Will you ever learn?",
		w106: "How long have you been trapped on this planet? Months? Decades? Travelling through time sure screws up your chronological perception.",
		w109: "Though you have no idea which direction your home planet is, you still believe the ship's GPS could get you home. Maybe Druopitee has the keys. You really want to find him.",
		w115: "You just remembered what a taco was. You could really use a taco right now.",
		w120: "Your stamina is quickly dwindling. Trying to keep up with so many more extra Trimps each zone is beginning to wear you down. You'll need to practice fighting with stronger, smaller groups to succeed.",
		w123: "Woah, you have a lot of Trimps right now. You hadn't really stopped to think about just how many individual Trimps you have directly under your control in a while. Neat!",
		w125: "You smell metal and gears, and suddenly feel like you should run a map.",
		w130: "You decide to sit down and take a breather, when suddenly a Trimp comes waddle-galloping towards you holding a piece of paper. Hurriedly scrawled on the paper is a drawing of a strange weapon and piece of armor, along with numbers that seem to be dimensional coordinates. You would ask where he found it, but you know better by now.",
		w132: "You can't stop thinking about where that Trimp found the coordinates for the Slow dimension. Why can't whatever is helping you just come out and help you?",
		w135: "Ugh, your back is getting sore. It seems like travelling back in time does not reverse the ageing process for the traveller. Bummer.",
		w136: "One of your scientists has informed you that his team was able to successfully create a cure for a non-existent disease. He explains that it's best to be prepared. You sigh heavily.",
		w137: "One of your scientists has informed you that an outbreak of a new disease was detected in the laboratory. You go to check on your scientists, and it's quite obvious that they're faking it for attention. You sigh heavily.",
		w138: "You spot another scientist running full speed towards you. He hurriedly informs you that they discovered a new dimension near Zone 35 that is occupied by gigantic Trimps. You sigh heavily.",
		w139: "Another scientist is coming. You sigh heavily. He says something dumb. You decide to ignore the scientists for a little bit.",
		w140: "It sure is calm and peaceful now. You watch a Falcimp turn a few circles in the sky. You wouldn't mind having wings, but overall you're pretty happy with your species.",
		w143: "There's a scientist jumping around trying to get your attention. There's nothing interesting in the sky so you pretend to be fascinated with a rock. The scientist can see you're busy and waits patiently.",
		w145: "Your Scientists are not making it easy to ignore them. You not-so-calmly ask what they want. One of them explains that they discovered a new dimension with lots of extra helium. You'll probably check it out, but you won't tell them that.",
		w150: "Wow. These structures are getting expensive. There's probably a dimension for that...",
		w153: "You remember a person from your past. From your old life. There's someone you need to get back to. You'll make it back.",
		w156: "You watch in amazement as a Trimp grabs on to one of those weird tree things and swings around by its arms. These things are getting pretty strong.",
		w157: "You watch in less amazement as a Trimp tries to take a bite out of a very large rock. These things are not getting much smarter.",
		w159: "That's quite a sunset. You know once you finally make it out of here, you'll definitely never forget the sights. Unless, of course, you do.",
		w160: "A small horde of Trimps comes running up towards you, making excited sounding noises. One of them walks to the front of the loud congregation and proudly holds up a boot, slightly larger but the same style as your own. It must be Druopitee's, confirmation that you're heading the right direction. You reward the Trimp who found it with some food and a few pats on the head, then send the boot to the lab to look for any further clues. You wonder why he took his boot off.",
		w163: "Your scientists have informed you that half of the boot is now lost in another dimension, thanks to an 'important' test. The results were inconclusive. You ask them to please leave the remaining half in our current dimension, and they look disappointed.",
		w165: "What's this now?! You found a little green piece of metal. Your scientists tell you that it came from a toxic dimension, but that it is also from a dimension rich in helium. They let you know that they can tune your portal to travel to the dimension it originated from, should you want to check it out.",
		w166: "That last Improbability seemed like a nice guy.",
		w168: "Hopefully spaceships don't rust.",
		w170: "You reach the top of an incredibly large mountain. You can see at least 50 zones sprawled out before you. About 30 zones away, you can see a gigantic spire. It looks like architecture from your home world. You hope it's not a mirage...",
		w172: "Something smells purple. That's probably not good.",
		w174: "Strange smells continue to swell around you. Judging by changes in wind direction, the smells are coming from the spire. You still can't describe it other than purple.",
		w175: "Your Trimps seem happy. They're not used to having a purpose, and having one seems to positively affect them! You call a Trimp over and ask him how he's doing, then you remember that he can't talk.",
		w178: "You're still not quite sure what that smell is. You feel slightly more powerful, and you fear that your enemies may feel the same way.",
		w180: "After clearing out the previous zone, you decide to take a day hike to the top of another gigantic mountain to try to find more info about the smell. As you reach the top, your jaw drops. Clear as day, a healthy amount of purple goo is pouring into the atmosphere from the top of the spire. You can see the zones in front of you beginning to change. This really can't be good.",
		w182: "Well, there's not really much doubt about it anymore. Some sort of intelligence is intentionally making life more difficult for you and your Trimps. You take this as a sign that you're pretty important, why else would something risk destroying an entire planet to stop you? Your parents would be so proud.",
		get w184 () { 
				return "The corruption seems to be more pronounced the closer you get to the Spire. Looks like there's " + mutations.Corruption.cellCount() + " of em now."
			},
		w185: "You have trouble putting in to words exactly what the Corruption does to the creatures on this planet. They seem to be stripped of all natural abilities and given powers that you didn't know could exist in the primary dimension.",
		w187: "None of these corrupted enemies seem to have eyes, so you decide to see if you can get away with flipping one off. As it reacts by roaring and stomping around in a rage, you realize that these things are powerful enough not to need eyes to observe the world. What <i>are</i> these?!",
		w190: "You awaken from your sleep in a cold sweat to a frantic and terrified noise from the back of the cave where you were sleeping. With urgency, you run to the source of the noise to make sure your Trimps are okay. As you reach the back, you see a handful of Trimps trying to use a small and very angry Snimp as a musical instrument. You put some sand in your ears and go back to sleep.",
		w193: "The corruption continues to thicken as you near the Spire. You're beginning to grow accustomed to the smell of corruption, and really don't mind it anymore. It reminds you of blueberries. Evil blueberries.",
		w198: "You're so close to the source of corruption that you can taste it, and it doesn't taste good.",
		get w205 () {
			if (game.global.spireRows < 10)
				return "You look back at The Spire and feel kinda bad that there's still a ton of Corruption coming out of it, but you'll get him some time.";
			return "You don't miss Druopitee too much. You don't remember all that much to miss, but the point stands.";
		},
		get w210 () {
			if (game.global.spireRows < 10)
				return "It smells extra corrupt. That Spire can't be healthy for the environment.";
			return "There's still Corruption, but it feels less threatening. You feel more at peace with the planet and feel like you're on track to repairing it. Surely nothing else terrible will happen any time soon.";
		},
		get w220 () {
			if (game.global.spireRows < 10)
				return "Your Trimps seem content. They kinda wish that spire wasn't still pumping purple stuff in to their world, but they don't mind too much.";
			return "Your Trimps seem content. You taught some basic puppetry to them and they've been putting on some great shows with defeated Snimps.";
		},
		w225: "You wake up in a sweat after a good night's sleep in a cool, dark cave. You dreamt that you were overheating, though that's never really been a problem before. Oh well, strange dreams and memories haven't really indicated anything important before, it's probably nothing.",
		w231: "It's pretty hot.",
		w235: "The heat intensifies as you move further and further through the zones. Instinct says to turn away from the heat, but that wouldn't be any fun.",
		get w245 () {
			if (game.jobs.Magmamancer.owned > 0)
				return "Your Magmamancers have figured out how to make little fountains in the Magma around the base. You like the effect.";
			return "You remember Magmamancers as being pretty cool.";
		},
		w251: "You asked that Omnipotrimp nicely not to explode after you killed it, but it exploded anyways. Pretty rude.",
		w255: "Your Trimps continue to lose strength as you press through the zones, but they seem to be adapting well in spirits. It seems like each generation likes the heat more and more.",
		w265: "You're determined to repair the planet, though you feel like it's not yet possible. Either way, you know you're gaining strength and that your Trimps would follow you anywhere."
	},
	
	trimpDeathTexts: ["不在人世了", "化为灰尘了", "上了天堂", "死去了", "翘辫子了", "人间蒸发了", "被杀掉了", "爆炸了", "融化了", "摔死了", "横渡冥河了", "见了阎王", "死亡了", "被压扁了", "不会跟着你再次战斗", "死掉了"],
	badGuyDeathTexts: ["诛戮了", "杀死了", "摧毁了", "消灭了", "铲除了", "杀害了", "终结了", "毁灭了", "毁掉了", "除去了"],
	
	settings: {
		speed: 10,
		speedTemp: 0,
		slowdown: false,
	},
	
	resources: {
		food: {
			owned: 0,
			max: 500,
			nameCN: "食物"
		},
		wood: {
			owned: 0,
			max: 500,
			nameCN: "木头"
		},
		metal: {
			owned: 0,
			max: 500,
			nameCN: "金属"
		},
		trimps: {
			owned: 0,
			max: 10,
			maxMod: 1,
			realMax: function () {
				var num = this.max;
				num *= this.maxMod;
				if (game.portal.Carpentry.level > 0) num = Math.floor(num * (Math.pow(1 + game.portal.Carpentry.modifier, game.portal.Carpentry.level)));
				if (game.portal.Carpentry_II.level > 0) num = Math.floor(num * (1 + (game.portal.Carpentry_II.modifier * game.portal.Carpentry_II.level)));
				return num;
			},
			working: 0,
			speed: 5,
			employed: 0,
			soldiers: 0,
			maxSoldiers: 1,
			potency: 0.0085,
			nameCN: "脆皮"
		},
		science: {
			owned: 0,
			max: -1,
			nameCN: "科学"
		},
		gems: {
			owned: 0,
			max: -1,
			nameCN: "宝石"
		},
		fragments: {
			owned: 0,
			max: -1,
			nameCN: "碎片"
		},
		helium: {
			owned: 0,
			max: -1,
			nameCN: "氦气"
		} 
	},
	
	magma: {
		buffs: {
			attack: 0,
			crit: 0,
			health: 0,
			potency: 0,
			nameCN: "buffs"
		}
	},
	
	equipment: {
		Shield: {
			locked: 1,
			tooltip: "一个大的木质的盾牌。每级为每位士兵增加 $healthCalculated$ 点生命",
			blocktip: "一个大的木质的盾牌。每级为每位士兵增加 $blockCalculated$ 点格挡",
			modifier: 1,
			level: 0,
			cost: {
				wood: [40, 1.2]
			},
			oc: 40,
			health: 4,
			healthCalculated: 4,
			blockNow: false,
			block: 1.5,
			blockCalculated: 1.5,
			prestige: 1,
			nameCN: "盾牌"
		},
		Dagger: {
			locked: 1,
			tooltip: "聊胜于无。 每级为每位士兵增加 $attackCalculated$ 点攻击",
			modifier: 1,
			level: 0,
			cost: {
				metal: [40, 1.2]
			},
			oc: 40,
			attack: 2,
			attackCalculated: 2,
			prestige: 1,
			nameCN: "匕首"
		},
		Boots: {
			locked: 1,
			tooltip: "至少他们的脚是安全的。 每级为每位士兵增加 $healthCalculated$ 点生命",
			modifier: 1,
			level: 0,
			cost: {
				metal: [55, 1.2]
			},
			oc: 55,
			health: 6,
			healthCalculated: 6,
			prestige: 1,
			nameCN: "靴子"
		},
		//2
		Mace: {
			locked: 1,
			tooltip: "它对你的脆皮来说很重，但他们应付得了。 每级为每位士兵增加 $attackCalculated$ 点攻击",
			modifier: 1,
			level: 0,
			cost: {
				metal: [80, 1.2]
			},
			oc: 80,
			attack: 3,
			attackCalculated: 3,
			prestige: 1,
			nameCN: "锤"
		},
		Helmet: {
			locked: 1,
			tooltip: "为脆皮的头部提供适当的保护， 每级为每位士兵增加 $healthCalculated$ 点生命",
			modifier: 1,
			level: 0,
			cost: {
				metal: [100, 1.2]
			},
			oc: 100,
			health: 10,
			healthCalculated: 10,
			prestige: 1,
			nameCN: "头盔"
		},
		//3
		Polearm: {
			locked: 1,
			tooltip: "这东西又大又尖。 每级为每位士兵增加 $attackCalculated$ 点攻击",
			modifier: 1,
			level: 0,
			cost: {
				metal: [140, 1.2]
			},
			oc: 140,
			attack: 4,
			attackCalculated: 4,
			prestige: 1,
			nameCN: "长柄武器"
		},
		Pants: {
			locked: 1,
			tooltip: "裤子是专为小脆皮设计的！ 每级为每位士兵增加 $healthCalculated$ 点生命",
			modifier: 1,
			level: 0,
			cost: {
				metal: [160, 1.2]
			},
			oc: 160,
			health: 14,
			healthCalculated: 14,
			prestige: 1,
			nameCN: "裤子"
		},
		//4
		Battleaxe: {
			locked: 1,
			tooltip: "这个武器是相当吓人，但你的脆皮认为他们可以处理它。 每级为每位士兵增加 $attackCalculated$ 点攻击",
			modifier: 1,
			level: 0,
			cost: {
				metal: [230, 1.2]
			},
			oc: 230,
			attack: 7,
			attackCalculated: 7,
			prestige: 1,
			nameCN: "战斧"
		},
		Shoulderguards: {
			locked: 1,
			tooltip: "这些护肩将帮助保持你的脆皮的脖子和肩膀安全，他们看起来很酷。 每级为每位士兵增加 $healthCalculated$ 点生命",
			modifier: 1,
			level: 0,
			cost: {
				metal: [275, 1.2]
			},
			oc: 275,
			health: 23,
			healthCalculated: 23,
			prestige: 1,
			nameCN: "护肩"
		},
		//5
		Greatsword: {
			locked: 1,
			tooltip: "这剑看起来很甜。 说真的，如果你能看到它，你也会觉得它看起来很甜。 相信我。 每级为每位士兵增加 $attackCalculated$ 点攻击",
			modifier: 1,
			level: 0,
			cost: {
				metal: [375, 1.2]
			},
			oc: 375,
			attack: 9,
			attackCalculated: 9,
			prestige: 1,
			nameCN: "大剑"
		},
		Breastplate: {
			locked: 1,
			tooltip: "一些真正的，重型装甲。 每个人看起来都像是穿着重型装甲的坏蛋。 每级为每位士兵增加 $healthCalculated$ 点生命",
			modifier: 1,
			level: 0,
			cost: {
				metal: [415, 1.2]
			},
			oc: 415,
			health: 35,
			healthCalculated: 35,
			prestige: 1,
			nameCN: "胸甲"
		},
		Arbalest: {
			locked: 1,
			tooltip: "强大的远程武器。 你的脆皮可以用这个家伙造成一些伤害。 每级为每位士兵增加 $attackCalculated$ 点攻击",
			modifier: 1,
			level: 0,
			cost: {
				metal: [450, 1.2]
			},
			oc: 450,
			attack: 15,
			attackCalculated: 15,
			prestige: 1,
			nameCN: "劲弩"
		},
		Gambeson: {
			locked: 1,
			tooltip: "一个舒适和厚厚的填充夹克，在胸甲下面。 你的脆皮认为他们是伟大的！ 每级为每位士兵增加 $healthCalculated$ 点生命",
			modifier: 1,
			level: 0,
			cost: {
				metal: [500, 1.2]
			},
			oc: 500,
			health: 60,
			healthCalculated: 60,
			prestige: 1,
			nameCN: "软铠甲"
		}
	},

	badGuys: {
		Presimpt: {
			location: "World",
			locked: 1,
			attack: 1.1,
			health: 1.5,
			fast: false,
			loot: function () {
				//Happy Politically Correct Holidays, everyone!
				givePresimptLoot();
			}
		},
		Turkimp: {
			location: "World",
			locked: 1,
			attack: 1,
			health: 1.6,
			fast: false,
			loot: function () {
				//Happy Thanksgiving and stuff.
				//Also, happy post thanksgiving and stuff.
				//Also, happy normal days now I guess
				activateTurkimpPowers();
			}
		},
		Pumpkimp: {
			location: "None",
			attack: 0.9,
			health: 1.5,
			fast: false,
			loot: function () {
				//Happy Halloween and stuff.
				givePumpkimpLoot();
			}
		},
		Squimp: {
			location: "All",
			attack: 0.8,
			health: 0.7,
			fast: true
		},
		Elephimp: {
			location: "All",
			attack: 0.9,
			health: 1.3,
			fast: false
		},
		Turtlimp: {
			location: "All",
			attack: 0.9,
			health: 1.3,
			fast: false
		},
		Chimp: {
			location: "All",
			attack: 1,
			health: 1,
			fast: false
		},
		Penguimp: {
			location: "All",
			attack: 1.1,
			health: 0.7,
			fast: false
		},
		Snimp: {
			location: "All",
			attack: 1.05,
			health: 0.8,
			fast: true
		},
		Gorillimp: {
			location: "All",
			attack: 0.9,
			health: 1.1,
			fast: true
		},
		Shrimp: {
			location: "Sea",
			attack: 0.8,
			health: 0.9,
			fast: true
		},
		Mountimp: {
			location: "Mountain",
			attack: 0.5,
			health: 2,
			fast: false
		},
		Frimp: {
			location: "Forest",
			attack: 0.75,
			health: 1.2,
			fast: true
		},
		Chickimp: {
			location: "Sea",
			attack: 0.8,
			health: 1.1,
			fast: true,
			loot: function (level) {
				var amt = rewardResource("food", 0.5, level, true);
				message("这只Chickimp掉落了 " + prettify(amt) + " 食物！", "Loot", "apple", null, 'primary');
			}
		},
		Hippopotamimp: {
		   location: "Sea",
		   attack: 1.4,
		   health: 1.1,
		   fast: false
		},
		Onoudidimp: {
			location: "Mountain",
			attack: 0.8,
			health: 1.4,
			fast: false
		},
		Grimp: {
			location: "Forest",
			attack: 1.1,
			health: 1.5,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("wood", 0.5, level, true);
				message("这只Grimp掉落了 " + prettify(amt) + " 木头！", "Loot", "tree-deciduous", null, 'primary');
			}
		},
		Seirimp: {
			location: "Mountain",
			attack: 1.15,
			health: 1.4,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", 0.5, level, true);
				message("这只Seirimp掉落了 " + prettify(amt) + " 金属！ Neat-O.", "Loot", "*cubes", null, 'primary');
			}
		},
		Slagimp: {
			location: "Depths",
			attack: 0.9,
			health: 1,
			fast: true,
			loot: function (level) {
				var amt = rewardResource("gems", 0.3, level, true);
				message("这只Slagimp倒下了，掉落了 " + prettify(amt) + " 宝石！怎么样！", "Loot", "*diamond", null, 'secondary'); 
			}
		},
		Moltimp: {
			location: "Depths",
			attack: 1.2,
			health: 0.7,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", 0.2, level, true);
				message("Moltimp感谢与你的战斗，并交给你 " + prettify(amt) + " 金属！ 然后它死了。", "Loot", "*cubes", null, 'primary');
			}
		},
		Golimp: {
			location: "Depths",
			attack: 1.2,
			health: 1.4,
			fast: false,
			loot: function (level) {
				var random = Math.floor(Math.random() * 5);
				var amt;
				var res;
				var icon;
				var tag;
				if (random === 0) {
					amt = rewardResource("fragments", 1, level, true);
					res = "碎片";
					icon = "th";
					tag = "secondary";
				}
				else {
					amt = rewardResource("metal", 0.3, level, true);
					res = "金属";
					icon = "*cubes";
					tag = "primary";
				}
				message("Golimp跌倒了！在它们聚合在一起之前你抓住了 " + prettify(amt) + " " + res , "Loot", icon, null, tag);
			}
		},
		Lavimp: {
			location: "Depths",
			attack: 1,
			health: 0.8,
			fast: true
		},
		Flowimp: {
			location: "Plentiful",
			attack: 1.3,
			health: 0.95,
			fast: false
		},
		Kangarimp: {
			location: "Plentiful",
			attack: 0.95,
			health: 0.95,
			fast: true
		},
		Gnomimp: {
			location: "Plentiful",
			attack: 0.8,
			health: 1,
			fast: false
		},
		Slosnimp: {
			location: "Plentiful",
			attack: 1.05,
			health: 0.8,
			fast: false
		},
		Entimp: {
			location: "Plentiful",
			attack: 0.6,
			health: 1.3,
			fast: true,
			loot: function (level) {
				var amt = rewardResource("wood", 0.35, level, true);
				message("没有更多的Entimp。你设法从他的躯干里取了 " + prettify(amt) + " 木头！", "Loot", "tree-deciduous", null, 'primary');
			}
		},
		Squirrimp: {
			location: "Plentiful",
			attack: 1,
			health: 1.1,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("food", 0.35, level, true);
				message("来做饭吧！你从那个Squirrimp那里得到了 " + prettify(amt) + " 食物！", "Loot", "apple", null, 'primary');
			}			
		},
		Gravelimp: {
			location: "Plentiful",
			attack: 0.8,
			health: 1.4,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", 0.35, level, true);
				message("你过滤了Gravelimp，找到 " + prettify(amt) + " 金属！是个好消息！", "Loot", "*cubes", null, 'primary');
			}
		},
		Blimp: {
			location: "World",
			last: true,
			world: 5,
			attack: 1.2,
			health: 2,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("food", 2, level);
				rewardResource("wood", 2, level);
				rewardResource("metal", 2, level);
				message("那个Blimp掉落了 " + prettify(amt) + " 食物，木头和金属！ 这很有用！", "Loot", "piggy-bank", null, 'primary');
				if (game.global.world >= 21 && (game.global.totalPortals >= 1 || game.global.portalActive)){
					if (game.resources.helium.owned == 0) fadeIn("helium", 10);
					amt = rewardResource("helium", 1, level);
					message("你能够从那个Blimp中提取 " + prettify(amt) + " 氦气！", "Loot", "oil", "helium", "helium");
					if (game.global.world >= 40 && game.global.challengeActive == "Balance") {
						var reward = game.challenges.Balance.heldHelium;
						message("你已经完成了挑战“平衡”！ 作为奖励，你获得了 " + prettify(reward) + " 氦气，你可以重复这个挑战。", "Notices");
						game.challenges.Balance.abandon();
						game.global.challengeActive = "";
						addHelium(reward);
					}
				}
			}
		},
		Cthulimp: {
			location: "Void",
			last: true,
			world: 6,
			attack: 2,
			health: 5,
			fast: true,
			loot: function (level) {
				if (game.resources.helium.owned == 0) fadeIn("helium", 10);
				var amt = (game.global.world >= 60) ? 10 : 2;
				if (mutations.Magma.active()) amt *= 3;
				var percentage = 1;
				if (game.global.world >= mutations.Corruption.start(true)){ 
					percentage = (game.global.challengeActive == "Corrupted") ? 0.075 : 0.15;
					percentage *= mutations.Corruption.cellCount() * 2;
					percentage += 2;
				}
				amt = rewardResource("helium", amt, level, false, percentage);
				var msg = "Cthulimp和他所在的地图崩坏了。 你发现自己被传送到";
				if (game.options.menu.repeatVoids.enabled && game.global.totalVoidMaps > 1){
					msg += "下一张虚空地图中";
				}
				else {
					msg += ((game.options.menu.exitTo.enabled) ? "世界地图" : "你的地图室");
				}
				message(msg + "，并获得了 " + prettify(amt) + " 氦气！", "Loot", "oil", "helium", "helium");
				game.stats.highestVoidMap.evaluate();
			}
		},
		Shadimp: {
			location: "Void",
			world: 6,
			attack: 1.2,
			health: 1.3,
			fast: true
		},
		Voidsnimp: {
			location: "Void",
			world: 6,
			attack: 2.1,
			health: 0.5,
			fast: true
		},
		Megablimp: {
			location: "Hell",
			last: true,
			world: 20,
			attack: 1.1,
			health: 4,
			fast: false,
			loot: function (level) {
				checkAchieve("angerTimed")
			}
		},
		Dragimp: {
			location: "World",
			world: 17,
			attack: 1,
			health: 1.5,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("gems", 0.35, level, false);
				message("这只Dragimp掉落了 " + prettify(amt) + " 宝石！", "Loot", "*diamond", null, 'secondary');
			}
		},
		Mitschimp: {
			location: "Block",
			last: true,
			world: 10,
			attack: 1.2,
			health: 2.5,
			fast: false,
			loot: function (level) {
				checkAchieve("blockTimed");
				var amt = rewardResource("wood", 2, level, true);
				message("Mitschimp掉落了 " + prettify(amt) + " 木头！", "Loot", "tree-deciduous", null, 'primary');
			}
		},
		Brickimp: {
			location: "Wall",
			last: true,
			world: 15,
			attack: 1.2,
			health: 2.5,
			fast: false,
			loot: function (level) {
				checkAchieve("wallTimed")
			}
		},
		Indianimp: {
			location: "Doom",
			last: true,
			world: 33,
			attack: 1.07,
			health: 0.9,
			fast: true,
			loot: function (level) {
				checkAchieve("doomTimed");
				var amt = rewardResource("metal", 2, level, true);
				message("Indianimp掉落了 " + prettify(amt) + " 金属！", "Loot", "*cubes", null, 'primary');
				if (game.global.challengeActive == "Trapper"){
					game.global.challengeActive = "";
					game.challenges.Trapper.abandon();
					game.portal.Anticipation.locked = false;
					message("你完成了挑战“Trapper”！ 你的脆皮现在知道了如何繁殖，你解锁了一个新的perk！", "Notices");
				}
				if (game.global.challengeActive == "Meditate"){
					game.global.challengeActive = "";
					game.portal.Meditation.locked = false;
					message("你完成了挑战“Meditate”！ 维度已恢复正常，您已解锁一个新的perk！", "Notices");
				}
			}
		},
		Warden: {
			location: "Prison",
			last: true,
			world: 80,
			attack: 2,
			health: 3,
			fast: false,
			loot: function (level) {
				checkAchieve("prisonTimed");
				if (game.global.challengeActive == "Electricity" || game.global.challengeActive == "Mapocalypse") {
					var reward = Math.floor(game.challenges.Electricity.heldHelium * 1.5);
					if (game.global.challengeActive == "Electricity") message("你完成了挑战“Electricity”！ 作为奖励，你获得了 " + prettify(reward) + " 氦气，你可以重复这个挑战。", "Notices");
					else if (game.global.challengeActive == "Mapocalypse") {
						message("你完成了挑战“Mapocalypse ”！ 你解锁了Perk“Siphonology”， 作为奖励，你获得了 " + prettify(game.challenges.Electricity.heldHelium) + " 氦气。", "Notices");
						if (game.portal.Siphonology.locked) addNewSetting('siphonologyMapLevel');
						game.portal.Siphonology.locked = false;
						game.challenges.Mapocalypse.abandon();
					}
					game.challenges.Electricity.heldHelium = 0;
					game.global.challengeActive = "";
					addHelium(reward);
					game.global.radioStacks = 0;
					updateRadioStacks();
				}
			}
		},
		//Putting Bionic Wonderland stuff right.... here cause why not
		Robotrimp: {
			location: "Bionic",
			last: true,
			world: 125,
			attack: 2.1,
			health: 2.9,
			fast: false,
			loot: function (level) {
				checkAchieve("bionicTimed");
				var amt1 = rewardResource("wood", 1, level, true);
				var amt2 = rewardResource("food", 1, level, true);
				message("Robotrimp discombobulated. Loot inspection reveals: " + prettify(amt1) + " wood and " + prettify(amt2) + " food. Splendiferous.", "Loot", "*cogs", null, 'primary');
				if (game.global.challengeActive == "Crushed") {
					var heliumAdded = game.challenges.Crushed.heldHelium;
					message("You have completed the Crushed challenge! You have been rewarded with " + prettify(heliumAdded) + " Helium.", "Notices");
					game.challenges.Crushed.heldHelium = 0;
					game.global.challengeActive = "";
					addHelium(heliumAdded);
					if (game.challenges.Crushed.critsTaken == 0) giveSingleAchieve(14);
					game.challenges.Crushed.abandon();
				}
			}
		},
		Mechimp: {
			location: "Bionic",
			world: 125,
			attack: 1,
			health: 1.5,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", .25, level, true);
				message("Mechimp disengaged. Reward encountered: " + prettify(amt) + " bars of metal. Huzzah.", "Loot", "*cubes", null, 'primary');
			}
		},
		Destructimp: {
			location: "Bionic",
			world: 125,
			attack: 1.4,
			health: 0.8,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", .25, level, true);
				message("Destructimp shorted out. Salvage results: " + prettify(amt) + " bars of metal. Acceptable.", "Loot", "*cubes", null, 'primary');				
			}
		},
		Terminatimp: {
			location: "Bionic",
			world: 125,
			attack: 1.2,
			health: 1.2,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", .25, level, true);
				message("Terminatimp Terminated. Findings: " + prettify(amt) + " bars of metal. Hasta la Vista.", "Loot", "*cubes", null, 'primary');				
			}
		},
		Autoimp: {
			location: "Bionic",
			world: 125,
			attack: 1.4,
			health: 1.3,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", .5, level, true);
				message("Autoimp force quit. Memory dump provides " + prettify(amt) + " bars of metal and no clues. It's a feature!", "Loot", "*cubes", null, 'primary');
			}
		},
		Artimp: {
			location: "Bionic",
			world: 125,
			attack: 1.3,
			health: 1.5,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", 0.3, level, true);
				message("The Artimp wordlessly sputters, whirrs, beeps, then drops " + prettify(amt) + " perfect cubes of metal on the ground. Cubist art is your favorite!", "Loot", "*cubes", null, 'primary');
			}
		},
		//End Bionic Wonderland stuff
		//Start Imploding Star stuff
		Neutrimp: {
			location: "Star",
			last: true,
			world: 170,
			attack: 1.3,
			health: 2.5,
			fast: true,
			loot: function (level) {
				checkAchieve("starTimed");
				var amt1 = rewardResource("wood", 1.5, level, true);
				var amt2 = rewardResource("metal", 1.5, level, true);
				message("The Neutrimp gasps, shimmers, squeaks, then poofs into a quickly dispersing purple cloud. You spend a few moments trying to make sense of what you've just seen, but look around and find " + prettify(amt1) + " wood and " + prettify(amt2) + " metal instead!", "Loot", "*cogs", null, 'primary');
				if (game.global.challengeActive == "Devastation") {
					message("You have completed the Devastation challenge! Your world has been returned to normal, and you have unlocked the Overkill perk!", "Notices");
					game.global.challengeActive = "";
					game.portal.Overkill.locked = false;
					addNewSetting('overkillColor');
				}
			}
		},
		Fusimp: {
			location: "Star",
			world: 170,
			attack: 1.4,
			health: 1.8,
			fast: true,
			loot: function (level) {
				var amt = rewardResource("metal", .5, level, true);
				message("The Fusimp explodes, leaving behind " + prettify(amt) + " bars of metal and a nice dose of radiation.", "Loot", "*cubes", null, 'primary');				
			}
		},
		Hydrogimp: {
			location: "Star",
			world: 170,
			attack: 1.8,
			health: 2.2,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("food", 1, level, true);
				message("Before you can blink, the Hydrogimp vaporizes. That's fine though, it left " + prettify(amt) + " food for you!", "Loot", "apple", null, 'primary');				
			}			
		},
		Carbimp: {
			location: "Star",
			world: 170,
			attack: 1,
			health: 4,
			fast: true,
			loot: function (level) {
				var amt = rewardResource("wood", 1, level, true);
				message("The Carbimp begins to crackle and shrink. Within a few seconds, all that's left is " + prettify(amt) + " wood.", "Loot", "tree-deciduous", null, 'primary');				
			}		
		},
		//End Imploding Star stuff
		Improbability: {
			locked: 1,
			location: "World",
			last: true,
			world: 59,
			attack: 1.2,
			health: 6,
			fast: true,
			loot: function (level) {
				if (game.global.spireActive) return;
				if (!game.global.brokenPlanet) planetBreaker();
				var amt = (game.global.world >= mutations.Corruption.start(true)) ? 10 : 5;
				amt = rewardResource("helium", amt, level);
				message("You managed to steal " + prettify(amt) + " Helium canisters from that Improbability. That'll teach it.", "Loot", "oil", 'helium', 'helium');				
				if (game.global.challengeActive == "Slow" && game.global.world == 120){
					message("You have completed the Slow challenge! You have found the patterns for the Gambeson and the Arbalest!", "Notices");
					game.global.challengeActive = "";
					if (!game.global.slowDone){
						unlockEquipment("Arbalest");
						unlockEquipment("Gambeson");
					}
					game.global.slowDone = true;
				}
				else if ((game.global.challengeActive == "Nom" && game.global.world == 145) || (game.global.challengeActive == "Toxicity" && game.global.world == 165) || ((game.global.challengeActive == "Watch" || game.global.challengeActive == "Lead") && game.global.world >= 180) || (game.global.challengeActive == "Corrupted" && game.global.world >= 190)){
					var challenge = game.global.challengeActive;
					if (game.global.challengeActive == "Watch" && !game.challenges.Watch.enteredMap) giveSingleAchieve(20);
					if (game.global.challengeActive == "Lead" && game.upgrades.Gigastation.done <= 1) giveSingleAchieve(21);
					if (game.global.challengeActive == "Corrupted" && !game.challenges.Corrupted.hiredGenes && game.jobs.Geneticist.owned == 0) giveSingleAchieve(22);
					if (game.global.challengeActive == "Toxicity" && game.challenges.Toxicity.highestStacks <= 400) giveSingleAchieve(17);
					var reward = (game.challenges[challenge].heliumMultiplier) ? game.challenges[challenge].heliumMultiplier : 2;
					reward = game.challenges[challenge].heldHelium * reward;
					message("You have completed the " + challenge + " challenge! You have been rewarded with " + prettify(reward) + " Helium, and you may repeat the challenge.", "Notices");
					game.challenges[challenge].heldHelium = 0;
					game.global.challengeActive = "";
					addHelium(reward);
				}
				else if (game.global.challengeActive == "Mapology" && game.global.world == 100){
					message("You have completed the Mapology challenge! You have unlocked the 'Resourceful' Perk! Cheaper stuff!", "Notices");
					game.global.challengeActive = "";
					game.portal.Resourceful.locked = false;
					game.challenges.Mapology.abandon();
				}
			}
		},
		Omnipotrimp: {
			locked: 1,
			location: "World",
			last: true,
			world: 59,
			attack: 1.2,
			health: 6,
			fast: true,
			loot: function (level) {
				amt = rewardResource("helium", 30, level);
				message("You managed to steal " + prettify(amt) + " Helium canisters from that Omnipotrimp. That'll teach it.", "Loot", "oil", 'helium', 'helium');
				if (game.global.world % 5 == 0){
					message("The Omnipotrimp explodes, killing all of your soldiers!", "Combat", null, null, 'trimp');
					game.global.soldierHealth = 0;
					game.global.fighting = false;
					game.resources.trimps.soldiers = 0;
					updateGoodBar();
				}
			}
		},
		//Exotics
		Goblimp: {
			location: "Maps",
			locked: 1,
			world: 6,
			attack: 1,
			health: 1,
			dropDesc: "Drops 6x Gems",
			fast: false,
			loot: function (level) {
				var amt = rewardResource("gems", 3, level, true);
				message("That Goblimp dropped " + prettify(amt) + " gems! What a bro!", "Loot", "*diamond", "exotic", 'exotic');
				game.unlocks.impCount.Goblimp++;
			}
		},
		Feyimp: {
			location: "World",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			dropDesc: "Drops 15x Gems",
			fast: false,
			loot: function (level) {
				if (game.resources.gems.owned == 0) 	fadeIn("gems", 10);
				var amt = rewardResource("gems", 7.5, level);
				message("That Feyimp gave you " + prettify(amt) + " gems! Thanks Feyimp!", "Loot", "*diamond", "exotic", "exotic");
				game.unlocks.impCount.Feyimp++;
			}
		},
		Flutimp: {
			location: "Maps",
			locked: 1,
			world: 6,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "Drops Fragments",
			loot: function (level) {
				var amt = rewardResource("fragments", 1, level, true);
				message("You stole " + prettify(amt) + " fragments from that Flutimp! It really didn't look like she needed them though, don't feel bad.", "Loot", "th", "exotic", "exotic");
				game.unlocks.impCount.Flutimp++;
			}
		},
		Tauntimp: {
			location: "World",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "Grants an extra 0.3% of current Trimps",
			loot: function () {
				var amt = Math.ceil(game.resources.trimps.max * 0.003);
				game.resources.trimps.max += amt;
				game.unlocks.impCount.Tauntimp++;
				game.unlocks.impCount.TauntimpAdded += amt;
				if (game.portal.Carpentry.level) amt *= Math.pow((1 + game.portal.Carpentry.modifier), game.portal.Carpentry.level);
				if (game.portal.Carpentry_II.level > 0) amt *= (1 + (game.portal.Carpentry_II.modifier * game.portal.Carpentry_II.level));
				message("It's nice, warm, and roomy in that dead Tauntimp. It's big enough for " + prettify(amt) + " Trimps to live inside!", "Loot", "gift", "exotic", "exotic");
				
			}
		},
		Whipimp: {
			location: "World",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "Grants 0.3% Trimp resource production speed",
			loot: function () {
				game.unlocks.impCount.Whipimp++;
				game.jobs.Farmer.modifier *= 1.003;
				game.jobs.Lumberjack.modifier *= 1.003;
				game.jobs.Miner.modifier *= 1.003;
				game.jobs.Scientist.modifier *= 1.003;
				game.jobs.Dragimp.modifier *= 1.003;
				game.jobs.Explorer.modifier *= 1.003;
				var amt = Math.pow(1.003, game.unlocks.impCount.Whipimp);
				amt = (amt - 1) * 100;
				message("Seeing the Whipimps fall is causing all of your Trimps to work " + amt.toFixed(2) + "% harder!", "Loot", "star", "exotic", "exotic");			
			}
		},
		Venimp: {
			location: "World",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "Grants 0.3% Trimp breed speed",
			loot: function () {
				game.unlocks.impCount.Venimp++;
				var amt = Math.pow(1.003, game.unlocks.impCount.Venimp);
				amt = (amt - 1) * 100;
				message("The ground up Venimp now increases your Trimps' breed speed by " + amt.toFixed(2) + "%!", "Loot", "glass", "exotic", "exotic");			
			}
		},
		Jestimp: {
			location: "Maps",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "45 seconds of production for 1 random resource",
			loot: function () {
				var elligible = ["food", "wood", "metal", "science"];
				if (game.jobs.Dragimp.owned > 0) elligible.push("gems");
				if (game.jobs.Explorer.locked == 0) elligible.push("fragments");
				var roll = Math.floor(Math.random() * elligible.length);
				var item = elligible[roll];
				var amt = simpleSeconds(item, 45);
				amt = scaleToCurrentMap(amt);
				addResCheckMax(item, amt);
				message("That Jestimp gave you " + prettify(amt) + " " + item + "!", "Loot", "*dice", "exotic", "exotic");
				game.unlocks.impCount.Jestimp++;
			}
		},
		Titimp: {
			location: "Maps",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "+100% damage for 30 seconds in maps",
			loot: function () {
				var timeRemaining = parseInt(game.global.titimpLeft);
				if (timeRemaining > 0) {
					timeRemaining += 30;
					if (timeRemaining > 45) timeRemaining = 45;
				}
				else timeRemaining = 30;
				game.global.titimpLeft = timeRemaining;
				message("That Titimp made your Trimps super strong!", "Loot", "*hammer", "exotic", "exotic");
			}		
		},
		Chronoimp: {
			location: "Maps",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "5 seconds of production for all basic resources",
			loot: function () {
				var elligible = ["food", "wood", "metal", "science"];
				if (game.jobs.Dragimp.owned > 0) elligible.push("gems");
				if (game.jobs.Explorer.locked == 0) elligible.push("fragments");
				var cMessage = "That Chronoimp dropped ";
				for (var x = 0; x < elligible.length; x++){
					var item = elligible[x];
					var amt = simpleSeconds(item, 5);
					amt = scaleToCurrentMap(amt);
					addResCheckMax(item, amt, null, null, true);
					cMessage += prettify(amt) + " " + item;
					if (x == (elligible.length - 1)) cMessage += "!";
					else if (x == (elligible.length - 2)) cMessage += ", and ";
					else cMessage += ", ";
				}
				message(cMessage, "Loot", "hourglass", "exotic", "exotic");
				game.unlocks.impCount.Chronoimp++;				
			}		
		},
		Magnimp: {
			location: "World",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "0.3% extra loot from maps and zones (Not Helium)",
			loot: function () {
				game.unlocks.impCount.Magnimp++;
				var amt = Math.pow(1.003, game.unlocks.impCount.Magnimp);
				amt = (amt - 1) * 100;
				message("You killed a Magnimp! The strong magnetic forces now increase your loot by " + amt.toFixed(2) + "%!", "Loot", "magnet", "exotic", "exotic");
			}		
		},
		Skeletimp: {
			location: "World",
			locked: 1,
			world: 1,
			attack: 0.77,
			health: 2,
			fast: false,
			loot: function () {
				message("你的脆皮设法从这个Skeletimp中取出1个完美保存的骨头！", "Loot", "italic", null, "secondary");
				game.global.b++;
				game.global.lastSkeletimp = new Date().getTime();
				updateSkeleBtn();
			}
		},
		Megaskeletimp: {
			location: "World",
			locked: 1,
			world: 1,
			attack: 0.99,
			health: 2.5,
			fast: false,
			loot: function () {
				message("That was a pretty big Skeletimp. Your Trimps scavenged the remains and found 2 perfectly preserved bones!", "Loot", "italic", null, "secondary");
				game.global.b += 2;
				game.global.lastSkeletimp  = new Date().getTime();
				updateSkeleBtn();
			}
		}
		
	},
	
	mapConfig: {
		names: {
			prefix: ["低语的", "沙土的", "较小的", "较大的", "腐坏的", "厌倦的", "谈笑风生的", "哭泣的", "多风的", "可怕的", "令人不愉快的", "肮脏的", 
			"染红了的", "染黑了的", "鸟语花香的", "火热的", "岩石的", "闹鬼的", "被遗忘的", "悲惨的", "被诅咒的", "腐坏的", "神圣的", "不容亵渎的", 
			"被遗弃的", "自然的", "令人销魂的", "不可思议的", "安静的", "崎岖的", "狂暴的", "无人的", "秘密的", "被禁止的", "蛊惑的", 
			"黑暗的", "明亮的", "壮丽的", "邪恶的", "圣洁的", "不可侵犯的", "亵渎的", "寂静的", "不朽的", "隐蔽的", "温和的", "寒冷的", 
			"泥泞的", "阴冷的", "蒸汽的", "潮湿的", "干燥的", "剧毒的", "邪恶的", "危险的", "毁坏的", "破损的", "水晶的", "冰封的", "天真的", "永恒的"],
			suffix: ["小河.Sea", "海岸.Sea", "沼泽.Sea", "森林.Forest", "山脉.Mountain", "海滨.Sea", "小山.Mountain", "小丘.Mountain", 
			"山脉.Mountain", "平顶山.Mountain", "山谷.Depths", "山峰.Mountain", "峡谷.Depths", "高原.Mountain", "悬崖.Depths", 
			"火山口.Depths", "橡木林.Forest",  "火山.Mountain", "冰河.Sea",  "小溪.Sea", "洞穴.Depths",  "海洋.Sea", "大洋.Sea", 
			"湖泊.Sea", "丛林.Forest", "岛屿.Sea", "废墟.Depths", "神殿.Depths", "泥沼.Sea", "小树林.Forest", "丛林.Forest", 
			"灌木丛.Forest", "树林.Forest", "绿洲.Forest", "矿井.Depths", "隧道.Depths", "深渊.Depths", "山洞.Depths", 
			"花园.Plentiful", "花园.Plentiful", "花园.Plentiful", "花园.Plentiful", "花园.Plentiful", "花园.Plentiful", 
			"花园.Plentiful", "花园.Plentiful", "花园.Plentiful", "花园.Plentiful"]
		},
		locations: {
		//Add new resources to function getMapIcon in updates.js to get icons on maps
			Sea: {
				resourceType: "Food",
				resourceTypeCN: "食物"
			},
			Mountain: {
				resourceType: "Metal",
				resourceTypeCN: "金属"
			},
			Forest: {
				resourceType: "Wood",
				resourceTypeCN: "木头"
			},
			Depths: {
				resourceType: "Gems",
				resourceTypeCN: "宝石"
			},
			Plentiful: {
				resourceType: "Any",
				resourceTypeCN: "任意"
			},
			Hell: {
				resourceType: "Metal",
				resourceTypeCN: "金属",
				upgrade: "Portal"//Portal
			},
			Block: {
				resourceType: "Wood",
				resourceTypeCN: "木头",
				upgrade: "Shieldblock"
			},
			Wall: {
				resourceType: "Food",
				resourceTypeCN: "食物",
				upgrade: "Bounty"
			},
			Doom: {
				resourceType: "Metal",
				resourceTypeCN: "金属",
				upgrade: "Relentlessness"
			},
			Prison: {
				resourceType: "Food",
				resourceTypeCN: "食物",
				upgrade: "Keys"
			},
			Bionic: {
				resourceType: "Any",
				resourceTypeCN: "任意",
				upgrade: ["roboTrimp", "Geneticistassist"]
			},
			Void: {
				resourceType: "Any",
				resourceTypeCN: "任意",
				upgrade: ["AutoStorage", "Heirloom"]
			},
			Star: {
				resourceType: "Metal",
				resourceTypeCN: "金属"
			},
			All: {
				resourceType: "Metal",
				resourceTypeCN: "金属"
			}
		},
		sizeBase: 50,
		sizeRange: 25,
		difficultyBase: 1.2,
		difficultyRange: 0.45,
		lootBase: 1.3,
		lootRange: 0.3
	},
	
	mapUnlocks: {
		roboTrimp: {
			world: 125,
			level: "last",
			icon: "*chain",
			title: "RoboTrimp",
			canRunWhenever: true,
			filterUpgrade: true,
			specialFilter: function (world) {
				var tier = Math.floor((world - 125) / 15);
				return ((game.global.bionicOwned == tier + 1) || (game.global.roboTrimpLevel == tier));
			},
			getShriekValue: function () {
				var level = game.global.roboTrimpLevel;
				if (level == 0) return 1;
				if (level == 1) return 0.85;
				return (0.85 * Math.pow(0.90, level - 1));
			},
			createMap: function(tier) {
				game.global.bionicOwned++;
				if (game.global.bionicOwned == 1) 
					message("你找到了一张仿生仙境的地图。 听起来很有趣！", "Story");
				else
					message("你找到了一张更加高级的仿生仙境的地图！ 看起来可怕...", "Story");
				var roman = romanNumeral(tier + 1);
				createMap(((tier * 15) + 125), "仿生仙境 " + roman, "Bionic", 3, 100, 2.6, true);
			},
			fire: function (fromTalent) {
				var level = game.global.mapsOwnedArray[getMapIndex(game.global.currentMapId)].level;
				var bionicTier = parseInt(((level - 125) / 15)) + 1;
				if (bionicTier == game.global.bionicOwned) {
					this.createMap(bionicTier);
				}
				if (fromTalent === true) return;
				if (bionicTier - 1 == game.global.roboTrimpLevel) {
					if (game.global.roboTrimpLevel == 0){
						cancelTooltip();
						var text = "似乎有一个小RoboTrimp，似乎是孤儿。 你决定带他和你在一起，因为你很擅长训练的东西。 它为你造成额外的 <b>20%</b> 伤害，并有特殊能力。 你可以通过你的士兵悬停在新<span class='icomoon icon-chain'></span>图标上了解更多关于特殊能力。<br/><br/>你还找到了一张更加高级的仿生仙境的地图。你打赌会有另一个RoboTrimp在那里需要“抢救”。";
						if (game.options.menu.tooltips.enabled == 0) text += '<br/><br/><b>抬一下头</b>：你禁用了提示，所以你需要在鼠标经过<span class="icomoon icon-chain"></span>时按住Shift来阅读详细内容。';
						tooltip('confirm', null, 'update', text, null, 'RoboTrimp');
						game.global.roboTrimpLevel = 1;
						document.getElementById("chainHolder").style.visibility = 'visible';
					}
					else {
						game.global.roboTrimpLevel++;
						var values = game.global.roboTrimpLevel;
						values = [(values) * 20, ((1 - this.getShriekValue()) * 100).toFixed(1)];
						message("<span class='icomoon icon-chain'></span> 嘿看，另一个小RoboTrimp！ 你决定将他添加到你的收藏中。你现在可以造成 " + Math.floor(values[0]) + "% 的额外伤害 and MagnetoShriek now removes " + Math.floor(values[1]) + "% of an Improbability's attack", "Notices");					
					}
				}
			}
		},
		Geneticistassist: {
			world: 170,
			level: 79,
			icon: "*clipboard",
			title: "Geneticistassist",
			canRunOnce: true,
			filterUpgrade: true,
			specialFilter: function (){
				return (!game.global.Geneticistassist);
			},
			fire: function () {
				tooltip('The Geneticistassist', null, 'update');
				game.global.Geneticistassist = true;
				unlockJob("Geneticist");
				addNewSetting("GeneticistassistTarget");
			}
		},
		AutoStorage: {
			world: 75,
			level: "last",
			icon: "*eye4",
			title: "Auspicious Presence",
			canRunOnce: true,
			filterUpgrade: true,
			specialFilter: function(world) {
				return !game.global.autoStorageAvailable;
			},
			fire: function(){
				var text = "From the void, an auspicious presence reaches out and fills your mind. You feel at peace with the world. It asks you what you desire most, and without a second thought you reply that you wish your Trimps were smart enough to manage storage structures on their own. The presence lets you know that it is done, then dissipates. You instantly regret not asking to go home.";
				tooltip('confirm', null, 'update', text, null, 'Auspicious Presence');
				game.global.autoStorageAvailable = true;
				document.getElementById("autoStorageBtn").style.display = "block";
				createHeirloom();
				message("You found an Heirloom!", "Loot", "*archive", null, "secondary");
			}	
		},
		Heirloom: {
			world: 6,
			level: "last",
			icon: "*archive",
			title: "Heirloom",
			filterUpgrade: true,
			canRunWhenever: true,
			fire: function () {
				createHeirloom();
				if (game.global.world >= 60 && game.global.voidDeaths == 0 && game.global.voidBuff == "bleed") giveSingleAchieve(13);
				message("你发现了 Heirloom!", "Loot", "*archive", null, "secondary");
			}
		},
		Keys: {
			world: 80,
			level: "last",
			icon: "*key4",
			title: "The Warden's Keys",
			filterUpgrade: true,
			canRunOnce: true,
			specialFilter: function () {
				return (game.global.prisonClear == 0);
			},
			fire: function () {
				message("You have slain the Warden and taken his keys. How weird would it be if they fit in that key hole on the portal?", "Story");
				game.challenges.Electricity.hasKey = true;
				game.global.prisonClear++;
			}
		},
		Relentlessness: {
			world: 33,
			level: "last",
			icon: "compressed",
			title: "Unleash the Crit",
			filterUpgrade: true,
			canRunOnce: true,
			specialFilter: function () {
				return game.portal.Relentlessness.locked;
			},
			fire: function () {
				message("You've never been here before. Like, ever. This entire place felt cold and unfamiliar. Where are you? Why have so many Trimps had to fall to get here? You're suddenly angry, it's time to take a stand.", "Story");
				message("You have permanantly unlocked a new Perk, Relentlessness, which will remain unlocked through portals.", "Notices");
				game.portal.Relentlessness.locked = false;
			}
		},
		Portal: {
			world: 20,
			level: "last",
			icon: "repeat",
			title: "Portal",
			filterUpgrade: true,
			canRunOnce: true,
			fire: function () {
				if (!this.canRunOnce) return;
				message("你杀掉了Megablimp。当他化为虚无时，你注意到地上有一个闪着绿光的盒子。 盒子上有一行小字，“时间传送门  此面向上”", "Story");
				game.global.portalActive = true;
				fadeIn("helium", 10);
				addHelium(45);
				message("<span class='glyphicon glyphicon-oil'></span> 你从那个Blimp中提取了45氦气！ 现在你知道了如何从正常的Blimps提取氦气。", "Story"); 
				fadeIn("portalBtn", 10);
				if (game.global.challengeActive == "Metal"){
					game.global.challengeActive = "";
					game.challenges.Metal.abandon();
					game.portal.Artisanistry.locked = false;
					game.challenges.Metal.completed = true;
					message("You have completed the <b>Metal Challenge!</b> You have unlocked a new perk, and Miners have returned to your game.", "Notices");
				}
				if (game.global.challengeActive == "Size"){
					game.global.challengeActive = "";
					game.challenges.Size.abandon();
					game.challenges.Size.completed = true;
					game.portal.Carpentry.locked = false;
					message("You have completed the <b>Size Challenge!</b> You have unlocked a new perk, and your Trimps have been reduced down to their normal size.", "Notices");
				}
				if (game.global.challengeActive == "Discipline"){
					game.global.challengeActive = "";
					game.challenges.Discipline.completed = true;
					game.portal.Range.locked = false;
					message("You have completed the <b>Discipline Challenge!</b> You have unlocked a new perk, and your Trimps have regained their Discipline.", "Notices");
				}
				if (game.global.challengeActive == "Frugal"){
					game.global.challengeActive = "";
					game.global.frugalDone = true;
					game.challenges.Frugal.abandon();
					message("You have completed the 'Frugal' challenge! You can once again find equipment upgrades in maps, and Megabooks now increase gather rates by an extra 10%!", "Notices");
				}
				if (game.global.challengeActive == "Coordinate"){
					game.global.challengeActive = "";
					game.portal.Coordinated.locked = false;
					message("You have completed the 'Coordinate' challenge! The Bad Guys on this world no longer fight together, and have regained their speed. You have unlocked the 'Coordinated' perk!", "Notices");
				}
			}
		},
		Shieldblock: {
			world: 10,
			message: "That thing dropped a book. Doesn't look like an ordinary book. Looks... blockier...",
			level: "last",
			icon: "book",
			title: "Shieldblock",
			filterUpgrade: true,
			canRunOnce: true,
			fire: function () {
				if (game.global.challengeActive == "Scientist"){
					game.global.challengeActive = "";
					game.global.sLevel = getScientistLevel();
					game.challenges.Scientist.abandon();					
					message("You have completed the <b>Scientist Challenge!</b> From now on, you'll " + getScientistInfo(game.global.sLevel, true) + " every time you portal. You've unlocked Scientists, and <b>Don't forget that you can click Research on your Science again!</b>", "Notices");
				}
				if (game.global.challengeActive == "Trimp"){
					game.global.challengeActive = "";
					game.challenges.Trimp.abandon();
					game.portal.Resilience.locked = false;
					message("You have completed the <b>Trimp Challenge!</b> You have unlocked the 'Resilience' perk, and your Trimps can fight together again.", "Notices");
				}
				unlockUpgrade("Shieldblock");
			}
		},
		Bounty: {
			world: 15,
			message: "It's all shiny and stuff. You're pretty sure you've never seen a book this shiny.",
			level: "last",
			icon: "book",
			title: "Bounty",
			filterUpgrade: true,
			canRunOnce: true,
			fire: function () {
				if (!this.canRunOnce) return;
				unlockUpgrade("Bounty");
			}
		},
		Supershield: {
			world: -1,
			message: "你找到一本书，会教你如何升级你的盾牌！",
			level: "last",
			icon: "book",
			title: "Supershield",
			prestige: true,
			last: 1,
			fire: function () {
				unlockUpgrade("Supershield");
			}
		},
		Dagadder: {
			world: -1,
			message: "你找到一本书，会教你如何升级你的匕首！",
			level: "last",
			icon: "book",
			title: "Dagadder",
			prestige: true,
			last: 1,
			fire: function () {
				unlockUpgrade("Dagadder");
			}
		},
		Bootboost: {
			world: -1,
			message: "你找到一本书，会教你如何升级你的靴子！",
			level: "last",
			icon: "book",
			title: "Bootboost",
			prestige: true,
			last: 1,
			fire: function () {
				unlockUpgrade("Bootboost");
			}
		},
		Megamace: {
			world: -1,
			message: "你找到一本书，会教你如何升级你的锤！",
			level: "last",
			icon: "book",
			title: "Megamace",
			prestige: true,
			last: 2,
			fire: function () {
				unlockUpgrade("Megamace");
			}
		},
		Hellishmet: {
			world: -1,
			message: "你找到一本书，会教你如何升级你的头盔！",
			level: "last",
			icon: "book",
			title: "Hellishmet",
			prestige: true,
			last: 2,
			fire: function () {
				unlockUpgrade("Hellishmet");
			}
		},		
		Polierarm: {
			world: -1,
			message: "你找到一本书，会教你如何升级你的长柄武器！",
			level: "last",
			icon: "book",
			title: "Polierarm",
			prestige: true,
			last: 3,
			fire: function () {
				unlockUpgrade("Polierarm");
			}
		},
		Pantastic: {
			world: -1,
			message: "你找到一本书，会教你如何升级你的裤子！",
			level: "last",
			icon: "book",
			title: "Pantastic",
			prestige: true,
			last: 3,
			fire: function () {
				unlockUpgrade("Pantastic");
			}
		},
		Axeidic: {
			world: -1,
			message: "你找到一本书，会教你如何升级你的战斧！",
			level: "last",
			icon: "book",
			title: "Axeidic",
			prestige: true,
			last: 4,
			fire: function () {
				unlockUpgrade("Axeidic");
			}
		},
		Smoldershoulder: {
			world: -1,
			message: "你找到一本书，会教你如何升级你的护肩！",
			level: "last",
			icon: "book",
			title: "Smoldershoulder",
			prestige: true,
			last: 4,
			fire: function () {
				unlockUpgrade("Smoldershoulder");
			}
		},
		Greatersword: {
			world: -1,
			message: "你找到一本书，会教你如何升级你的大剑！",
			level: "last",
			icon: "book",
			title: "Greatersword",
			prestige: true,
			last: 5,
			fire: function () {
				unlockUpgrade("Greatersword");
			}
		},
		Bestplate: {
			world: -1,
			message: "你找到一本书，会教你如何升级你的胸甲！",
			title: "Bestplate",
			level: "last",
			icon: "book",
			prestige: true,
			last: 5,
			fire: function () {
				unlockUpgrade("Bestplate");
			}
		},
		Harmbalest: {
			world: -1,
			message: "你找到一本书，会教你如何升级你的Arbalest！",
			title: "Harmbalest",
			level: "last",
			specialFilter: function () {
				return (game.equipment.Arbalest.locked == 0);
			},
			icon: "book",
			prestige: true,
			last: 5,
			fire: function () {
				unlockUpgrade("Harmbalest");
			}
		},
		GambesOP: {
			world: -1,
			message: "你找到一本书，会教你如何升级你的Gambeson！",
			title: "GambesOP",
			level: "last",
			specialFilter: function () {
				return (game.equipment.Gambeson.locked == 0);
			},
			icon: "book",
			prestige: true,
			last: 5,
			fire: function () {
				unlockUpgrade("GambesOP");
			}
		},
		TheBlock: {
			world: -1,
			message: "神圣的cowimp！一个独特的地图！",
			level: [10, 20],
			icon: "th-large",
			title: "The Block",
			startAt: 11,
			canRunOnce: true,
			fire: function () {
				message("你找到了一个指向The Block的地图！", "Story");
				createMap(11, "The Block", "Block", 2, 100, 1.3, true, true); 
			}
		},
		TheWall: {
			world: -1,
			message: "哦！又一个独特的地图！",
			level: [10, 20],
			icon: "th-large",
			title: "The Wall",
			startAt: 15,
			canRunOnce: true,
			fire: function () {
				message("你找到了一个指向The Wall的地图！", "Story");
				createMap(15, "The Wall", "Wall", 2, 100, 1.5, true, true); 
			}
		},
		ThePrison: {
			startAt: 80,
			level: [1, 10],
			icon: "th-large",
			canRunOnce: true,
			title: "The Prison",
			fire: function () {
				game.global.mapsUnlocked = true;
				unlockMapStuff();
				createMap(80, "The Prison", "Prison", 2.6, 100, 2.6, true);
				message("You found The Prison! You have a bad feeling about going in...", "Story");
			}
		},
		BionicWonderland: {
			startAt: 125,
			level: [1, 15],
			icon: "th-large",
			canRunOnce: true,
			title: "仿生仙境",
			fire: function () {
				message("你找到了一个指向仿生仙境的地图。听起来很有趣！", "Story");
				game.global.bionicOwned++;
				createMap(125, "仿生仙境", "Bionic", 3, 100, 2.6, true);
			}
		},
		ImplodingStar: {
			startAt: 170,
			level: [1, 15],
			icon: 'th-large',
			canRunOnce: true,
			title: '爆炸之星',
			fire: function () {
				message("你在这么冷的维度里发现了一个指向爆炸之星的地图。那里的温度是完美的！", "Story");
				createMap(170, "爆炸之星", "Star", 3, 100, 3.2, true);
			}
		},
		Mansion: {
			world: -1,
			startAt: 8,
			message: "你发现了一个豪宅的图纸！ 你的Trimps会很兴奋",
			level: [10, 20],
			icon: "*home4",
			title: "豪宅",
			canRunOnce: true,
			fire: function () {
				if (!this.canRunOnce) return;
				unlockBuilding("Mansion");
			}
		},
		Hotel: {
			world: -1,
			startAt: 14,
			message: "你找到了一家酒店的图纸！（一个像样的酒店）",
			level: [10, 20],
			icon: "*office",
			title: "脆皮酒店建设指南",
			canRunOnce: true,
			fire: function () {
				if (!this.canRunOnce) return;
				unlockBuilding("Hotel");
			}
		},
		UberHut: {
			world: -1,
			startAt: 18,
			message: "这本非常有技术的书将教会会说大话的人如何做更大的小屋。",
			level: [10, 20],
			icon: "book",
			title: "Hut hut hut",
			canRunOnce: true,
			fire: function () {
				unlockUpgrade("UberHut");
			}
		},
		UberHouse: {
			world: -1, 
			startAt: 29,
			message: "这本书谈到在你的家增加一个二楼！ 心灵... ...",
			level: [10, 20],
			icon: "book",
			title: "两个故事的故事",
			canRunOnce: true,
			fire: function () {
				unlockUpgrade("UberHouse");
			}
		},
		UberMansion: {
			world: -1, 
			startAt: 34,
			message: "这本书将教你如何让你的脆皮分享他们的豪宅！",
			level: [10, 20],
			icon: "book",
			title: "分享就是爱心",
			canRunOnce: true,
			fire: function () {
				unlockUpgrade("UberMansion");
			}
		},
		UberHotel: {
			world: -1,
			startAt: 40,
			message: "这本书将教你如何建立小型酒店房间！",
			level: [5, 10],
			icon: "book",
			title: "小型酒店的艺术",
			canRunOnce: true,
			fire: function () {
				unlockUpgrade("UberHotel");
			}
		},
		UberResort: {
			world: -1,
			startAt: 47,
			level: [5, 10],
			message: "哇！ 这本书！ 这是度假圣地！",
			icon: "book",
			title: "更好的度假时间",
			canRunOnce: true,
			fire: function () {
				unlockUpgrade("UberResort");
			}
		},
		Resort: {
			world: -1,
			startAt: 25,
			message: "你发现了一个巨大的度假村的蓝图！",
			level: [10, 20],
			icon: "*building",
			title: "度假时间",
			canRunOnce: true,
			fire: function () {
				if (!this.canRunOnce) return;
				unlockBuilding("Resort");
			}
		},
		Gateway: {
			world: -1,
			startAt: 30,
			message: "你找到了Dimension ZZZ的钥匙！",
			level: [10, 20],
			icon: "cog",
			title: "Transgalactic Gateway",
			canRunOnce: true,
			fire: function () {
				if (!this.canRunOnce) return;
				unlockBuilding("Gateway");
			}
		},
		Wormhole: {
			world: -1,
			startAt: 37,
			message: "你发现了一个足以创造虫洞的水晶！",
			level: [10, 20],
			icon: "link",
			title: "三维空间的打孔器",
			canRunOnce: true,
			fire: function () {
				if (!this.canRunOnce) return;
				unlockBuilding("Wormhole");
			}
		},
		Collector: {
			world: -1,
			startAt: 50,
			message: "你发现了一些过于复杂的太阳能电池板的蓝图。",
			level: [3, 19],
			icon: "dashboard",
			title: "收集器",
			canRunOnce: true,
			fire: function () {
				if (!this.canRunOnce) return;
				unlockBuilding("Collector");
			}
		},
		Trapstorm: {
			world: -1,
			startAt: 10,
			message: "一本教你的工头一种新技能的书。铆接。",
			level: [5, 15],
			icon: "book",
			title: "陷阱风暴",
			canRunOnce: true,
			fire: function () {
				unlockUpgrade("Trapstorm");
			}	
		},
		
		Nursery: {
			world: -1,
			startAt: 23,
			message: "你发现了一些幼儿园的蓝图，可以从宝石里获得更多力量。",
			level: [5, 20],
			icon: "home",
			title: "幼儿园",
			canRunOnce: true,
			fire: function () {
				unlockBuilding("Nursery");
			}
		},
		//This one is for all maps
		gems: {
			world: -1,
			level: [0, 7],
			icon: "*diamond",
			title: "宝石",
			repeat: 5,
			fire: function (level) {
				var amt = rewardResource("gems", 0.5, level, true);
				message("你发现了 " + prettify(amt) + " 宝石！ 好极了！", "Loot", "*diamond", null, "secondary");
			}
		},
		//This one is for depths maps
		Gems: {
			world: -1,
			level: [0, 4],
			repeat: 3,
			icon: "*diamond",
			title: "宝石",
			filter: true,
			fire: function (level) {
				var amt = rewardResource("gems", 0.5, level, true);
				message("你发现了 " + prettify(amt) + " 宝石！ 好极了！", "Loot", "*diamond", null, "secondary");
			}
		},
		Any: {
			world: -1,
			level: [0, 2],
			icon: "*leaf2",
			title: "食物/木头/金属",
			repeat: 2,
			filter: true,
			fire: function (level) {
				var rand = Math.floor(Math.random() * 3);
				switch(rand) {
					case 0: 
						game.mapUnlocks.Food.fire(level);
						break;
					case 1:
						game.mapUnlocks.Wood.fire(level);
						break;
					case 2:
						game.mapUnlocks.Metal.fire(level);
						break;
				}
			}
		},
		Metal: {
			world: -1,
			level: [0, 2],
			icon: "*cubes",
			title: "金属",
			repeat: 2,
			filter: true,
			fire: function (level) {
				var amt = rewardResource("metal", 0.5, level, true);
				message("你刚刚发现了 " + prettify(amt) + " 块金属！ 好棒！", "Loot", "*cubes", null, "primary");
			}
		},
		Food: {
			world: -1,
			level: [0, 2],
			icon: "apple",
			title: "食物",
			repeat: 2,
			filter: true,
			fire: function (level) {
				var amt = rewardResource("food", 0.5, level, true);
				message("那家伙刚刚留下了 " + prettify(amt) + " 个食物！ Sweet!", "Loot", "apple", null, "primary");
			}
		},
		Wood: {
			world: -1,
			level: [0, 2],
			icon: "tree-deciduous",
			title: "木头",
			repeat: 2,
			filter: true,
			fire: function (level) {
				var amt = rewardResource("wood", 0.5, level, true);
				message("你刚刚发现了 " + prettify(amt) + " 个木头！ 很好！", "Loot", "tree-deciduous", null, "primary");
			}
		}
	},

	//if you put a function in here as fire, you won't have anything unlocked, the name is just for funsies
	//-1 is all worlds, -2 is even world numbers, -3 is odd world numbers, -5 is every 5th world
	//min is inclusive, max is exclusive. too lazy to fix
	//More important stuff should be towards the top in case of bailouts
	worldUnlocks: {
		Shield: {
			message: "你发现了木盾的图纸！ 它甚至告诉你如何升级它，只要你有足够的木材。 这帮坏蛋真好。",
			world: 1,
			title: "新盔甲",
			level: 4,
			icon: "question-sign"		
		},
		Boots: {
			message: "你找到了靴子的图纸！ 好极了！",
			world: 1,
			level: 49,
			title: "新盔甲",
			icon: "question-sign"
		},
		Dagger: {
			message: "你发现了匕首的图纸！ 真棒！",
			world: 1,
			level: 19,
			title: "新武器",
			icon: "question-sign"
		},
		Mace: {
			message: "你发现了锤的图纸！",
			world: 2,
			level: 19,
			title: "新武器",
			icon: "question-sign"
		},
		Helmet: {
			message: "你发现了头盔的图纸！",
			world: 2,
			level: 49,
			title: "新盔甲",
			icon: "question-sign"
		},
		Polearm: {
			message: "你发现了长柄武器的图纸！",
			world: 3,
			level: 19,
			title: "新武器",
			icon: "question-sign"
		},
		Pants: {
			message: "你发现了裤子的图纸！",
			world: 3,
			level: 49,
			title: "新盔甲",
			icon: "question-sign"
		},
		Battleaxe: {
			message: "你发现了战斧的图纸！",
			world: 4,
			level: 19,
			title: "新武器",
			icon: "question-sign"
		},
		Shoulderguards: {
			message: "你发现了护肩的图纸！",
			world: 4,
			level: 49,
			title: "新盔甲",
			icon: "question-sign"
		},
		Greatsword: {
			message: "你发现了大剑的图纸！",
			world: 5,
			level: 19,
			title: "新武器",
			icon: "question-sign"
		},
		Breastplate: {
			message: "你发现了胸甲的图纸！",
			world: 5,
			level: 49,
			title: "新盔甲",
			icon: "question-sign"
		},
		//Non Equipment
		Bloodlust: {
			message: "你找到了一本名为“嗜血”的书。 你应该看看它或别的什么。",
			world: 1,
			level: 9,
			icon: "book",
			title: "嗜血",
			fire: function() {
				unlockUpgrade("Bloodlust");
			}
		},
		Efficiency: {
			message: "嘿，这本书可能是给你的！",
			world: -2,
			level: 9,
			icon: "book",
			title: "效率",
			fire: function() {
				unlockUpgrade("Efficiency");
			}
		},
		Gym: {
			message: "嘿看，一个新的健身房的图纸！",
			world: 2,
			level: 4,
			icon: "home",
			title: "新建筑",
			fire: function() {
				unlockBuilding("Gym");
				document.getElementById("blockDiv").style.visibility = "visible";
			}
		},
		TrainTacular: {
			message: "这本书是给你的！",
			world: -5,
			level: 9,
			icon: "book",
			title: "训练特辑",
			fire: function () {
				unlockUpgrade("TrainTacular");
			}
		},
		Warpstation: {
			message: "宇宙殖民时代。",
			world: 60,
			level: 19,
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			title: "宇宙将是你的海洋",
			icon: "*rocket4",
			fire: function () {
				unlockBuilding("Warpstation");
			}
		},
		Gymystic: {
			world: -5,
			startAt: 25,
			lastAt: 55,
			level: 44,
			icon: "book",
			message: "脆皮的岩画预测了一本书的存在，就像这个，你不确定它是否实际存在。 它闻起来尘土飞扬。",
			title: "一些旧的、满是灰尘的书",
			fire: function () {
				unlockUpgrade("Gymystic");
			}
		},
		Gymystic2: {
			world: -25,
			startAt: 75,
			lastAt: 150,
			level: 54,
			icon: "book",
			message: "脆皮的岩画预测了一本书的存在，就像这个，你不确定它是否实际存在。 它闻起来尘土飞扬。",
			title: "一些旧的、满是灰尘的书",
			fire: function () {
				unlockUpgrade("Gymystic");
			}
		},
		Dominance: {
			world: 70,
			level: 44,
			icon: "book",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			title: "Formation",
			fire: function () {
				unlockUpgrade("Dominance");
			}
		},
		Barrier: {
			world: 80,
			level: 44,
			icon: "book",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			title: "Formation",
			fire: function () {
				unlockUpgrade("Barrier");
			}
		},
		Potency: {
			message: "这本书将帮助你的脆皮变成更多的脆皮！",
			world: -5,
			level: 29,
			icon: "book",
			title: "脆皮经",
			fire: function () {
				if (game.global.challengeActive == "Trapper"){
					message("你的科学家告诉你，你的脆皮看不懂这本书，但他们会为你保存着。 它们多好啊！", "Notices");
					game.challenges.Trapper.heldBooks++;
					return;
				}
				unlockUpgrade("Potency");
			}
		},
		//19 is for Armor
		Miner: {
			message: "你发现了一本关于采矿的古书。 随着一些研究，你应该能够教你的脆皮！",
			world: 1,
			level: 29,
			icon: "book",
			title: "钢铁是怎样炼成的",
			fire: function () {
				if (game.global.challengeActive == "Metal"){
					message("你的脆皮根本不明白这本书在说什么。 这 对他们的头脑来说是个灾难。 什么是“矿工”？", "Notices");
					game.challenges.Metal.fireAbandon = true;
					return;
				}
				unlockUpgrade("Miners");
			}
		},
		Trainer: {
			message: "你找到一本关于适当的身体训练的书！",
			world: 3,
			level: 3, 
			icon: "book",
			title: "加快你的游戏！",
			fire: function () {
				unlockUpgrade("Trainers");
			}		
		},
		Scientist: {
			message: "你找到一本关于Einstrimp的书！",
			world: 1,
			level: 39,
			icon: "book",
			title: "科学时间",
			fire: function () {
				if (game.global.challengeActive == "Scientist"){
					message("你的脆皮认为他们的科学太好了，不想阅读你这本愚蠢的书。 他们已经在使用传送门技术了！", "Notices");
					game.challenges.Scientist.fireAbandon = true;
					return;
				}
				unlockUpgrade("Scientists");
			}
		},
		Explorer: {
			message: "你发现了一本书，详细描述了独奏探索的复杂性！",
			world: 15,
			level: 39,
			icon: "book",
			title: "探险者",
			fire: function () {
				if (game.upgrades.Explorers.allowed === 0) unlockUpgrade("Explorers");
			}
		},		
		Speedscience: {
			message: "你找到一本书叫Speedscience！ 你认为它可能做什么？",
			brokenPlanet: -1,
			world: -2,
			level: 39,
			icon: "book",
			title: "速度的科学",
			fire: function () {
			if (game.global.challengeActive == "Scientist"){
				message("你找到一本名为Speedscience的书，但你还没有找到任何人能阅读它。 这样的耻辱。。", "Notices");
				game.challenges.Scientist.heldBooks++;
				return;
			}
				unlockUpgrade("Speedscience");
			}
		},
		Megascience: {
			message: "你找到一本名叫Megascience的书！ 它似乎淡入淡出现实。",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -2,
			level: 39,
			icon: "book",
			title: "巨大的科学",
			fire: function () {
				unlockUpgrade("Megascience");
			}
		},
		Gigastation: {
			message: "你发现了详细说明如何升级你的Warpstation的蓝图。 啊呀！",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -1,
			startAt: 61,
			lastAt: 69,
			level: 19,
			icon: "*make-group",
			title: "Gigastation",
			fire: function () {
				unlockUpgrade("Gigastation");
			}
		},
		Gigastation2: {
			message: "你发现了详细说明如何升级你的Warpstation的蓝图。 啊呀！",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -2,
			startAt: 70,
			lastAt: 78,
			level: 19,
			icon: "*make-group",
			title: "Gigastation",
			fire: function () {
				unlockUpgrade("Gigastation");
			}
		},
		Gigastation3: {
			message: "你发现了详细说明如何升级你的Warpstation的蓝图。 啊呀！",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -33,
			startAt: 81,
			lastAt: 90,
			level: 19,
			icon: "*make-group",
			title: "Gigastation",
			fire: function () {
				unlockUpgrade("Gigastation");
			}
		},
		Gigastation4: {
			message: "你发现了详细说明如何升级你的Warpstation的蓝图。 啊呀！",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -5,
			startAt: 95,
			lastAt: 170,
			level: 19,
			icon: "*make-group",
			title: "Gigastation",
			fire: function () {
				unlockUpgrade("Gigastation");
			}
		},
		Gigastation5: {
			message: "你发现了详细说明如何升级你的Warpstation的蓝图。 啊呀！",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -10,
			startAt: 180,
			lastAt: 229,
			level: 19,
			icon: "*make-group",
			title: "Gigastation",
			fire: function () {
				unlockUpgrade("Gigastation");
			}
		},
		Magmamancer: {
			message: "你发现一本冒着烟的书，看起来像是被从这个星球的核心推出来的。 里面是脆皮用宝石和岩浆执行仪式的图纸。 这玩意摸起来非常热，但你把它带走了，因为你现在没有新的阅读材料。",
			world: 230,
			level: 90,
			icon: "book",
			title: "Magmamancers",
			fire: function () {
				unlockUpgrade("Magmamancers");
			}
		},
		//49 is for weapon
		Speedfarming:{
			message: "你找到一本书叫Speedfarming！ 看起来很好吃！",
			brokenPlanet: -1,
			world: -1,
			level: 79,
			icon: "book",
			title: "机械化种植",
			fire: function () {
				unlockUpgrade("Speedfarming");
			}
		},
		Megafarming:{
			message: "你找到一本叫Megafarming的书！ 它告诉你你应该经常为你的作物浇水。 真是英明！",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -1,
			level: 79,
			icon: "book",
			title: "伟大的农业",
			fire: function () {
				unlockUpgrade("Megafarming");
			}
		},

		Speedlumber: {
			message: "你找到一本书叫做Speedlumber！ 看起来很长。",
			brokenPlanet: -1,
			world: -1,
			level: 69,
			icon: "book",
			title: "机械化的好处",
			fire: function () {
				unlockUpgrade("Speedlumber");
			}
		},
		Megalumber: {
			message: "你找到一本叫Megalumber的书！ 书封上写着 'How much wood could a Wood Trimp chop if a Wood Trimp could chop wood?'",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -1,
			level: 69,
			icon: "book",
			title: "伟大的伐木工",
			fire: function () {
				unlockUpgrade("Megalumber");
			}
		},
		Speedminer: {
			message: "你找到一本叫Speedminer的书！",
			brokenPlanet: -1,
			world: -1,
			level: 59,
			icon: "book",
			title: "机械化挖矿",
			fire: function() {
				if (game.global.challengeActive == "Metal"){
					message("你的科学家凝视着你一会儿，然后慢慢地安静地把新书放在书架上。", "Notices");
					game.challenges.Metal.heldBooks++;
					return;
				}
				unlockUpgrade("Speedminer");
			}
		},
		Megaminer: {
			message: "你找到一本叫Megaminer的书！ 前面真的有光泽，有一个脆皮在上面。 令人毛骨悚然，似乎跟着你的眼睛。",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -1,
			level: 59,
			icon: "book",
			title: "伟大的矿工",
			fire: function() {
				unlockUpgrade("Megaminer");
			}
		},
		Geneticist: {
			message: "你的脆皮报告在地板上一个奇怪的青铜物体，你决定来看看它。 它看起来很怪异，所以你请你的一个脆皮先拾起它。 他立刻开始搔痒他的脸，咿咿呀呀了一堆科学的东西，所以你让另一个脆皮触摸它，他也这样做。 这似乎使你的脆皮比科学家更聪明，但可能会导致副作用。",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: 70,
			level: 49,
			title: "脆皮的大钟",
			icon: "bell",
			fire: function () {
				unlockJob("Geneticist");
			}
		},
		Foreman: {
			message: "你找到了一个工匠工头！ 他将为你自动建造建筑物！",
			world: -1,
			level: 89,
			icon: "user",
			title: "工头",
			fire: function () {
				game.global.autoCraftModifier += 0.25;
				updateForemenCount();
			}
		},
		Anger: {
			world: 20,
			level: 99,
			icon: "eye-open",
			title: "路的尽头",
			fire: function () {
				message(	"你向下看，看到一个绿色的宝石，似乎正盯着你。 你拿起来，感觉肾上腺素在你的身体涌动。 可能最好把它带回实验室进行一些研究。", "Story");
				unlockUpgrade("Anger");
			}
		},
		Coordination: {
			message: "你找到一本名为“协作”的书。 令人兴奋。",
			world: -1,
			level: 99,
			get icon (){
				return (game.global.world == mutations.Magma.start() - 1) ?  "*archive2" : "book";
			},
			title: "协作",
			fire: function() {
				if (game.global.challengeActive == "Trimp"){
					message("你的科学家认为，尝试这本书中的任何建议都不是一个聪明的主意。", "Notices");
					game.challenges.Trimp.heldBooks ++;
					return;
				}
				unlockUpgrade("Coordination");
			}
		},
		Blockmaster: {
			message: "你发现一本讨论更好的格挡战术的书！",
			world: 4,
			level: 29,
			icon: "book",
			title: "格挡大师",
			fire: function () {
				unlockUpgrade("Blockmaster");
			}
		},
		Egg: {
			message: "这个鸡蛋看起来很疯狂。 认真的，伙计们，来看看这个疯狂的蛋！",
			world: 17,
			level: 55,
			icon: "record",
			title: "蛋",
			fire: function () {
				if (game.upgrades.Egg.allowed === 0) unlockUpgrade("Egg");
			}
		},
		Doom: {
			world: 33,
			level: [15, 50],
			icon: "th-large",
			title: "太暗了，我看不见",
			fire: function () {
				createMap(33, "Trimple Of Doom", "Doom", 3, 100, 1.8, true); 
				message("这个地图有些奇怪。 它似乎没有反映任何光，只有纯粹的黑暗。", "Story");
			}
		},
		FirstMap: {
			world: 6,
			level: [1, 5],
			icon: "th-large",
			title: "棘手的天堂",
			fire: function () {
				game.global.mapsUnlocked = true;
				unlockMapStuff();
				createMap(6, "棘手的天堂", "Plentiful", 1.2, 45, 0.85);
				message("你找到了你的第一张地图！ 到你的地图室查看它。", "Story");
			}
		},
		easterEgg: {
			world: -1,
			locked: true,
			level: [0, 99],
			title: "上了色的鸡蛋",
			icon: "*droplet",
			addClass: function () {
				return "easterEgg easterEgg" + getRandomIntSeeded(game.global.eggSeed + 1, 0, 4);//复活节彩蛋
			},
			chance: 0.15,
			fire: function (){}
		},
		//Multiples
		Map: {
			world: -1,
			startAt: 6,
			level: [0, 20],
			repeat: 10,
			icon: "th",
			title: "地图碎片",
			fire: function() {
				var amt = rewardResource("fragments");
				message("你找到了 " + prettify(amt) + " 个地图碎片！", "Loot", "th", null, "secondary");
			}
		},
		//portal Trumps
		fiveTrimpMax: {
			world: -1,
			level: [10, 20],
			icon: "gift",
			title: "战斗地区奖金！",
			repeat: 45,
			fire: function () {
				var amt = 5 + (game.portal.Trumps.modifier * game.portal.Trumps.level);
				game.resources.trimps.max += amt;
				game.global.totalGifts += amt;
				if (game.portal.Carpentry.level) amt *= Math.pow((1 + game.portal.Carpentry.modifier), game.portal.Carpentry.level);
				if (game.portal.Carpentry_II.level > 0) amt *= (1 + (game.portal.Carpentry_II.modifier * game.portal.Carpentry_II.level));
				message("你已经清理了足够的土地来支持 " + prettify(amt) + " 个脆皮！", "Loot", "gift", null, "secondary");
			}
		},
		fruit: {
			world: -1,
			level: [0, 4],
			icon: "apple",
			title: "食物",
			repeat: 9,
			fire: function (level) {
				var amt = rewardResource("food", 0.5, level);
				message("那家伙刚刚留下了 " + prettify(amt) + " 个食物！ Sweet!", "Loot", "apple", null, 'primary');
			}
		},
		groundLumber: {
			world: -1,
			level: [0, 2],
			icon: "tree-deciduous",
			title: "木头",
			repeat: 8,
			fire: function (level) {
				var amt = rewardResource("wood", 0.5, level);
				message("你刚刚发现了 " + prettify(amt) + " 个木头！ 很好！", "Loot", "tree-deciduous", null, 'primary');
			}
		},
		freeMetals: {
			world: -1,
			level: [3, 5],
			title: "金属",
			icon: "*cubes",
			repeat: 6,
			fire: function (level) {
				var amt = rewardResource("metal", 0.5, level);
				message("你刚刚发现了 " + prettify(amt) + " 块金属！ 好棒！", "Loot", "*cubes", null, 'primary');
			}
		},
		spireMetals: {
			world: 200,
			level: [1,4],
			repeat: 4,
			fire: function (level) {
				if (!game.global.spireActive) return;
				var amt = rewardResource("metal", 25, level);
				message("肯定有很多金属只是被抛在这个尖塔！ 你刚才找到了 " + prettify(amt) + " 个!", "Loot", "*safe", "spireMetalsMsg", "primary");
			},
			title: "金属尖塔",
			icon: "*safe",
			addClass: "spireMetals"
		}
	},
	//buildings with percent = true cannot have multiple purchases at a time
	buildings: {
		Trap: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 5,
			tooltip: function () {
				var catchAmt = (game.portal.Bait.level + 1);
				var s = (catchAmt > 1) ? "s" : "";
				return "每个陷阱你可以捕获 " + prettify(catchAmt) + " 只猎物。";
			},
			cost: {
				food: 10,
				wood: 10
			},
			first: function () {
				if (document.getElementById("trimps").style.visibility == "hidden") fadeIn("trimps", 10);
			},
			nameCN: "陷阱"
		},
		Barn: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 10,
			tooltip: "将食物上限提高100%。",
			percent: true,
			cost: {
				food: function () {
					return calculatePercentageBuildingCost("Barn", "food", 0.25);
				}
			},
			increase: {
				what: "food.max.mult",
				by: 2
			},
			nameCN: "谷仓"
		},
		Shed: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 10,
			percent: true,
			tooltip: "将木材上限提高100%。",
			cost: {
				wood: function () {
					return calculatePercentageBuildingCost("Shed", "wood", 0.25);
				}
			},
			increase: {
				what: "wood.max.mult",
				by: 2
			},
			nameCN: "木仓"
		},
		Forge: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 10,
			percent: true,
			tooltip: "将金属上限提高100%",
			cost: {
				metal: function () {
					return calculatePercentageBuildingCost("Forge", "metal", 0.25);
				}
			},
			increase: {
				what: "metal.max.mult",
				by: 2
			},
			nameCN: "矿仓"
		},
		Hut: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 10,
			tooltip: "可以容纳 $incby$ 只可爱的脆皮，和一半的工作空间。",
			cost: {
				food: [125, 1.24],
				wood: [75, 1.24]
			},
			increase: {
				what: "trimps.max",
				by: 3
			},
			nameCN: "小屋"
		},
		House: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 20,
			tooltip: "为你的脆皮建一个更好的房子。 每个房子可以容纳 $incby$ 只脆皮。",
			cost: {
				food: [1500, 1.22],
				wood: [750, 1.22],
				metal: [150, 1.22]
			},
			increase: {
				what: "trimps.max",
				by: 5
			},
			nameCN: "房子"
		},
		Mansion: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 60,
			tooltip: "为你的脆皮建一栋美丽的豪宅。 每个豪宅可以容纳 $incby$ 只脆皮。",
			cost: {
				gems: [100, 1.2],
				food: [3000, 1.2],
				wood: [2000, 1.2],
				metal: [500, 1.2]
				
			},
			increase: {
				what: "trimps.max",
				by: 10
			},
			nameCN: "豪宅"
		},
		Hotel: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 120,
			tooltip: "一个花哨的酒店，许多脆皮住在这里。 拥有完整的客房服务和迷你酒吧。 可以容纳 $incby$ 只脆皮。",
			cost: {
				gems: [2000, 1.18],
				food: [10000, 1.18],
				wood: [12000, 1.18],
				metal: [5000, 1.18]
				
			},
			increase: {
				what: "trimps.max",
				by: 20
			},
			nameCN: "酒店"
		},
		Resort: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 240,
			tooltip: "一个巨大的度假村，让您的脆皮住在这里。吸引那些仍然住在小屋的人。 可以容纳 $incby$ 只脆皮。",
			cost: {
				gems: [20000, 1.16],
				food: [100000, 1.16],
				wood: [120000, 1.16],
				metal: [50000, 1.16]
				
			},
			increase: {
				what: "trimps.max",
				by: 40
			},
			nameCN: "度假村"
		},
		Gateway: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 480,
			tooltip: "一个出入口链接到另一个维度，在哪里您的脆皮可以正常睡觉和工作。 可以容纳 $incby$ 只脆皮。",
			cost: {
				fragments: [3000, 1.14],
				gems: [20000, 1.14],
				metal: [75000, 1.14]
			},
			increase: {
				what: "trimps.max",
				by: 100
			},
			nameCN: "出入口"
		},
		Wormhole: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 600,
			tooltip: "使用你那疯狂的氦气冷却的易于瞄准的虫洞发电机创建易于旅行的链接到其他殖民地行星，在哪里您的脆皮可以正常睡觉和工作。 可以容纳 $incby$ 只脆皮。 <b>这个建筑需要用氦气建造。</b>",
			cost: {
				helium: [10, 1.075],
				metal: [100000, 1.1]
			},
			increase:{
				what: "trimps.max",
				by: 1500
			},
			nameCN: "虫洞"
		},
		Collector: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 1200,
			tooltip: "每个收集器允许你收获更多的力量提供给你的母星，让你的脆皮殖民星系中更快的殖民。 可以容纳 $incby$ 只脆皮。",
			cost: {
				gems: [500000000000, 1.12]
			},
			increase: {
				what: "trimps.max",
				by: 5000
			},
			nameCN: "收集器"
		},
		Warpstation: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 1200,
			origTime: 1200,
			tooltip: "建造一个巨大的Warpstation，能够容纳大量的脆皮，并能在需要的时候立即将它们送回母星。 可以容纳 $incby$ 只脆皮。",
			cost: {
				gems: [100000000000000, 1.4],
				metal: [1000000000000000, 1.4]
			},
			increase: {
				what: "trimps.max", 
				by: 10000
			},
			nameCN: "Warpstation"
		
		},
		Gym: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 20,
			tooltip: "你的脆皮可以在这里锻炼。 每个健身房使每个脆皮可以阻挡$incby$的伤害量~",
			cost: {
				wood: [400, 1.185]
			},
			increase: {
			what: "global.block",
			by: 4
			},
			fire: function () {
				if (game.upgrades.Gymystic.done === 0) return;
				var oldBlock = game.buildings.Gym.increase.by;
				game.buildings.Gym.increase.by *= (game.upgrades.Gymystic.modifier + (0.01 * (game.upgrades.Gymystic.done - 1)));
				game.global.block += ((game.buildings.Gym.increase.by - oldBlock) * (game.buildings.Gym.owned));		
			},
			nameCN: "健身房"
		},
		Tribute: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 120,
			tooltip: "向你的Dragimp捐赠食物，增加他的胃口和他的速度。 他会收集宝石5％更快（叠加）。",
			cost: {
				food: [10000, 1.05]
			},
			increase: {
				what: "Dragimp.modifier.mult",
				by: 1.05
			},
			nameCN: "捐赠食物"
		},
		Nursery: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 120,
			get tooltip () {
				if (mutations.Magma.active())
					return "<p>对幼儿园来说，岩浆不是一个好环境。 每个幼儿园依然会增加1%的繁殖率（叠加）， 但随着岩浆的靠近，会有10%的幼儿园被关闭。 安全第一！</p><p>你已经购买了" + prettify(this.purchased) + "幼儿园。</p>";
				return "建造一个宝石动力的幼儿园，幼小的脆皮在这里可以长得更快。 增加1%的繁殖率（叠加）。";
				
			},
			cost: {
				gems: [400000, 1.06],
				wood: [1000000, 1.06],
				metal: [500000, 1.06]
			},
			nameCN: "幼儿园"
		},
	},
//jobs
	jobs: {
		Farmer: {
			locked: 1,
			owned: 0,
			tooltip: "让你的脆皮接受古老的农业艺术的熏陶。每个 农夫每秒提供 $modifier$ 食物。",
			cost: {
				food: 5
			},
			increase: "food",
			modifier: 0.5,
			nameCN: "农夫"
		},
		Lumberjack: {
			locked: 1,
			owned: 0,
			tooltip: "向你的脆皮演示如何砍伐那些奇怪的树木。 每个伐木工每秒提供 $modifier$ 木头。",
			cost: {
				food: 5
			},
			increase: "wood",
			modifier: 0.5,
			nameCN: "伐木工"
		},
		Miner: {
			locked: 1,
			owned: 0,
			tooltip: "将行为不端的脆皮送到矿场进行劳改。 每个矿工每秒提供 $modifier$ 金属。",
			cost: {
				food: 20
			},
			increase: "metal",
			modifier: 0.5,
			nameCN: "矿工"
		},
		Scientist: {
			locked: 1,
			owned: 0,
			tooltip: "你可以教你的脆皮为你做一些研究，但这需要耐心。 每个科学家每秒提供 $modifier$ 科学。",
			cost: {
				food: 100
			},
			increase: "science",
			modifier: 0.5,
			nameCN: "科学家"
		},
		Trainer: {
			locked: 1,
			owned: 0,
			tooltip: function () {
				var text = "每个教练将增加你的士兵的基础格挡 ";
				var heirloomBonus = game.heirlooms.Shield.trainerEfficiency.currentBonus;
				var modifier = game.jobs.Trainer.modifier;
				if (heirloomBonus > 0){
					modifier = calcHeirloomBonus("Shield", "trainerEfficiency", modifier).toFixed(1);
					return text + modifier + "%。 (" + game.jobs.Trainer.modifier + "% increased by " + heirloomBonus + "% thanks to " + game.global.ShieldEquipped.name + ")";
				}
				return text + modifier + "%。";
			},
			cost: {
				food: [750, 1.1]
			},
			increase: "custom",
			modifier: 20,
			nameCN: "教练"
		},
		Explorer: {
			locked: 1,
			owned: 0,
			tooltip: "每个探险家每秒可以找到 $modifier$ 碎片。",
			cost: {
				food: [15000, 1.1]
			},
			increase: "fragments",
			modifier: 0.1,
			nameCN: "探险家"
		},
		Dragimp: {
			locked: 1,
			owned: 0,
			increase: "gems",
			modifier: 0.5,
			nameCN: "Dragimp"
		},
		Geneticist: {
			locked: 1,
			owned: 0,
			tooltip: "每个遗传学家会提高脆皮的生命1%（叠加），但会减慢小脆皮的生长速度2%（叠加）。",
			cost: {
				food: [1000000000000000, 1.03],
			},
			increase: "custom",
			modifier: 1,
			nameCN: "遗传学家"
		},
		Magmamancer: {
			locked: 1,
			owned: 0,
			get tooltip(){
				var timeOnZone = Math.floor((new Date().getTime() - game.global.zoneStarted) / 60000);
				var bonus = (this.getBonusPercent() - 1) * 100;
				var timeStr;
				if (timeOnZone >= 120)
					timeStr = "over 120 minutes (Max)";
				else{
					var remaining = 10 - (timeOnZone % 10);
					var nextBonus = ((this.getBonusPercent(false, Math.floor(timeOnZone / 10) + 1) - 1) * 100);
					timeStr = prettify(timeOnZone) + " minute" + ((timeOnZone == 1) ? "" : "s") + ". In " + prettify(remaining) + " minute" + ((remaining == 1) ? "" : "s") + ", this bonus will increase to " + prettify(nextBonus) + "%";
					if (timeOnZone < 10) bonus = 0;
				}
				var currentMag = (((1 - Math.pow(0.9999, this.owned)) * 3));
				var nextMag = (((1 - Math.pow(0.9999, this.owned + 1)) * 3));
				var nextBonus = (1 - (currentMag / nextMag)) * 100;
				var textString = "<p>Train a Magmamancer to craft pickaxe heads infused with Gems and Magma, custom for the unique rocks in each zone. 你有越多的Magmamancers，在一个区域花费的时间越长，你的脆皮收集的金属就越多！</p><p>For each 10 minutes you spend in a zone with Magmamancers up to 2 hours, your Magmamancer bonus will increase by 20% (compounding). Your current bonus is <b>" + prettify(bonus) + "%</b>, and you've been on this zone for " + timeStr + ".</p>";
				if (this.owned > 0) textString += "<p>Your next Magmamancer will increase the total bonus by " + prettify(nextBonus) + "% (compounding, hold Ctrl to see formula)</p>";
				else textString += "<p>After training your first Magmamancer, your bonus metal will be " + prettify((nextMag * (Math.pow(1.2, this.getBonusPercent(true)) - 1)) * 100) + "%. (Hold Ctrl to see formula)</p>";
				if (ctrlPressed) textString += "<b><p>M = Magmamancer count. T = Time on zone in minutes, divided by 10, rounded down.</p><p>Metal/Sec *= 1 + (((1 - (0.9999 ^ M)) * 3) * ((1.2 ^ T) - 1))</p><b>";
				return textString;
			},
			cost: {
				gems: [1e60, 1.01]
			},
			increase: "custom",
			modifier: 1,
			getBonusPercent: function (justStacks, forceTime) {
				var boostMult = 0.9999;
				var boostMax = 3;
				var expInc = 1.2;
				var timeOnZone;
				if (typeof forceTime === 'undefined'){
					var timeOnZone = new Date().getTime() - game.global.zoneStarted;
					timeOnZone = Math.floor(timeOnZone / 600000);
					if (timeOnZone > 12) timeOnZone = 12;
					else if (timeOnZone <= 0) return 1;
				}
				else timeOnZone = forceTime;
				if (justStacks) return timeOnZone;
				return 1 + ((((1 - Math.pow(boostMult, this.owned)) * boostMax)) * (Math.pow(expInc, timeOnZone) - 1));
			},
			nameCN: "Magmamancer"		
		}
	},
	
	goldenUpgrades: {
		Helium: {
			tooltip: function() {
				return "氦气增益提高 " + prettify(game.goldenUpgrades.Helium.nextAmt() * 100) + "%。";
			},
			nextAmt: function() {
				return 0.01 * (game.global.goldenUpgrades + 1);
			},
			currentBonus: 0,
			purchasedAt: []
		},
		Battle: {
			tooltip: function() {
				return "提高脆皮的攻击和生命 " + prettify(game.goldenUpgrades.Battle.nextAmt() * 100) + "%。";
			},
			nextAmt: function() {
				return 0.03 * (game.global.goldenUpgrades + 1);
			},
			currentBonus: 0,
			purchasedAt: []
		},
		Void: {
			tooltip: function() {
				return "减少Void地图最小敌人数量"+ prettify(game.goldenUpgrades.Void.nextAmt() * 100) + "%。Decrease the minimum amount of enemies between Void Map drops by " + prettify(game.goldenUpgrades.Void.nextAmt() * 100) + "%.";
			},
			nextAmt: function() {
				return 0.02 * (game.global.goldenUpgrades + 1);
			},
			currentBonus: 0,
			purchasedAt: []
		}
	},
	
	upgrades: {
	//Important Upgrades
		Coordination: {
			locked: 1,
			tooltip: "这本书将教你的士兵如何协作。 战斗所需要的脆皮提高了 <coord>%（向上取整），但每一个新的脆皮的攻击和生命将会增长。",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: [250, 1.3],
					food: [600, 1.3],
					wood: [600, 1.3],
					metal: [300, 1.3]
				}
			},
			fire: function () {
				game.resources.trimps.maxSoldiers = Math.ceil(1.25 * game.resources.trimps.maxSoldiers);
				if (game.portal.Coordinated.level) game.portal.Coordinated.currentSend = Math.ceil(game.portal.Coordinated.currentSend * ((0.25 * Math.pow(game.portal.Coordinated.modifier, game.portal.Coordinated.level)) + 1));
			},
			nameCN: "协作"
		},
		Gigastation: {
			locked: 1,
			allowed: 0,
			tooltip: "尊重你的Warpstation，将它可以容纳的脆皮的数量增加20％，基本成本增加75％。 不能回头，学习这些蓝图将使你以前的Warpstation模型过时，但功能和你的脆皮会保留。 学习这将构建一个新的Warpstation。 <b>按住Ctrl will cause as many Warpstations as you currently own to be purchased immediately after Gigastation, if you can afford them.</b>",
			done: 0,
			cost: {
				resources: {
					gems: [100000000000000, 1.75],
					metal: [1000000000000000, 1.75],
					science: [100000000000, 1.4]
				}
			},
			fire: function (heldCtrl) {
				if (game.buildings.Warpstation.purchased > game.buildings.Warpstation.owned){
					clearQueue('Warpstation');
				}
				var oldAmt = game.buildings.Warpstation.owned;
				game.global.lastWarp = game.buildings.Warpstation.owned;
				game.buildings.Warpstation.increase.by *= 1.20;
				game.buildings.Warpstation.cost.gems[0] *= 1.75;
				game.buildings.Warpstation.cost.metal[0] *= 1.75;
				game.buildings.Warpstation.purchased = 1;
				game.buildings.Warpstation.owned = 1;
				game.resources.trimps.max += game.buildings.Warpstation.increase.by;
				if ((ctrlPressed || heldCtrl) && oldAmt > 1) buyBuilding("Warpstation", false, false, oldAmt - 1);
			}
		},
		
	//One Time Use Upgrades, in order of common unlock order
		Battle: { //0
			locked: 1,
			tooltip: "弄清楚如何教这些脆皮杀死一些坏人。",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: 10
				}
			},
			fire: function () {
				fadeIn("equipmentTitleDiv", 10);
				fadeIn("equipmentTab", 10);
				fadeIn("battleContainer", 10);
				buildGrid();
				drawGrid();
				game.global.BattleClock = -1;
				fadeIn("metal", 10);
				if (game.global.slowDone) {
					unlockEquipment("Gambeson");
					unlockEquipment("Arbalest");
				}
			},
			nameCN: "战斗"
		},
		Bloodlust: { //1
			locked: 1,
			tooltip: "这本书将教你的脆皮自己战斗。",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: 60,
					food: 150
				}
			},
			fire: function () {
				game.global.autoBattle = true;
				fadeIn("pauseFight", 1);
			},
			nameCN: "嗜血"
		},
		Blockmaster: { //4
			locked: 1,
			allowed: 0,
			tooltip: "这本书将会提高从健身房获得的格挡50%。",
			done: 0,
			cost: {
				resources: {
					science: [750, 1.17],
					food: [2000, 1.17],
					metal: [1000, 1.17]
				}
			},
			fire: function () {
				game.global.block = Math.ceil(1.5 * game.global.block);
				game.buildings.Gym.increase.by = Math.ceil(1.5 * game.buildings.Gym.increase.by);
			},
			nameCN: "格挡大师"
		},
		Trapstorm: { //10
			locked: 1,
			allowed: 0,
			tooltip: "这本书详细介绍了教你的工头实际做东西，而不是只是坐在周围的艺术。 如果队列是空的，你的工头将开始建造一个新的陷阱。",
			done: 0,
			cost: {
				resources: {
					science: 10000,
					food: 100000,
					wood: 100000
					
				}
			},
			fire: function () {
				game.global.trapBuildAllowed = true;
				fadeIn("autoTrapBtn", 10);
				toggleAutoTrap(true);
			},
			nameCN: "陷阱风暴"
		},
		Shieldblock: { //11
			locked: 1,
			allowed: 0,
			tooltip: "这本书解释了使用盾牌来实际阻挡伤害的方法。 当前的盾需要被完全破坏和重建，但它会给予格挡而不是生命。 <b>这是不可逆的</b>。 $你的盾牌必须是“盾牌 III”或更高$",
			done: 0,
			specialFilter: function () {
				return (game.equipment.Shield.prestige >= 3) ? true : false;
			},
			cost: {
				resources: {
					science: 3000,
					wood: 10000
				}
			},
			fire: function () {
			var equipment = game.equipment.Shield;
				prestigeEquipment("Shield", false, true);
				equipment.blockNow = true;
				equipment.tooltip = game.equipment.Shield.blocktip;
				equipment.blockCalculated = Math.round(equipment.block * Math.pow(1.19, ((equipment.prestige - 1) * game.global.prestige.block) + 1));
				levelEquipment("Shield", 1);
			},
			nameCN: "盾牌格挡"
		},
		Bounty: { //15
			locked: 1,
			tooltip: "这本书将使你的农夫，伐木工，矿工，科学家和探险家的生产力翻倍。",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: [40000, 2],
					food: [100000, 2],
					wood: [100000, 2],
					metal: [100000, 2]
				}
			},
			fire: function () {
				game.jobs.Farmer.modifier *= 2;
				game.jobs.Lumberjack.modifier *= 2;
				game.jobs.Miner.modifier *= 2;
				game.jobs.Scientist.modifier *= 2;
				game.jobs.Explorer.modifier *= 2;
				
			},
			nameCN: "加倍"
		},
		Egg: { //17
			locked: 1,
			allowed: 0,
			tooltip: "你的顶尖科学家很确定这是一个Dragimp蛋。 他们知道Dragimps喜欢闪亮的东西，也许它会出来一些宝石。",
			done: 0,
			cost: {
				resources: {
					gems: 10000
				}
			},
			fire: function () {
				game.jobs.Dragimp.owned = 1;
				fadeIn("gemsPs", 10);
				unlockBuilding("Tribute");
			},
			nameCN: "蛋蛋"
		},
		Anger: { //20
			locked: 1,
			allowed: 0,
			tooltip: "你的科学家很生气。 不是因为你做了什么，但这个宝石似乎使他们疯了。 它需要一些研究，但你认为你可以创建一个地图寻找宝石的起源。",
			done: 0,
			cost: {
				resources: {
					science: 100000,
					fragments: 15
				}
			},
			fire: function () {
				message("你刚刚做了一张地图到Dimension of Anger！ 应该很有趣！", "Notices");
				createMap(20, "Dimension of Anger", "Hell", 3, 100, 2.5, true, true); 
			},
			nameCN: "愤怒"
		},		
		Gymystic: { //25
			locked: 1,
			allowed: 0,
			tooltip: "这本书会使你购买的每个健身房增加所有健身房提供的格挡5%。 此升级的后续级别将额外提供1%的格挡。 <b>额外的格挡加成到健身房。</b>",
			done: 0,
			cost: {
				resources: {
					wood: 1000000000,
					science: 5000000
				}
			},
			modifier: 1.05,
			fire: function () {
				var oldBlock = game.buildings.Gym.increase.by;
				game.buildings.Gym.increase.by = 6 * Math.pow(game.upgrades.Gymystic.modifier + (0.01 * (game.upgrades.Gymystic.done)), game.buildings.Gym.owned);
				game.global.block += ((game.buildings.Gym.increase.by - oldBlock) * game.buildings.Gym.owned);
			},
			nameCN: "健身学"
		},	
	//Formations
		Formations: {
			locked: 1,
			allowed: 0,
			tooltip: "空气可能充满污染物，但你的脆皮似乎变得更聪明，战斗技术从只能是过去的生活爬进你的记忆。 这可能是一个很好的机会教你的脆皮。 一旦研究，你将能够进入“Heap Formation”。 这可以切换，以提高你的脆皮4倍生命，但减少一半的格挡和攻击。",
			done: 0,
			cost: {
				resources: {
					science: 10000000000,
					food: 100000000000
				}
			},
			fire: function () {
				unlockFormation("start");
			}
		},
		Dominance: {
			locked: 1,
			allowed: 0,
			tooltip: "另一种形式已经回到你的记忆。 这些来自哪里？ 你是谁？ 谁在乎，这将允许你的脆皮造成4倍的伤害，代价是生命和格挡减半。",
			done: 0,
			cost: {
				resources: {
					science: 20000000000,
					food: 200000000000
				}			
			},
			fire: function () {
				unlockFormation(2);
			}
		},
		Barrier: {
			locked: 1,
			allowed: 0,
			tooltip: "哇，你只是想起所有脆皮在同一个方向举起他们的盾牌可以产生一个很好的保护墙。 你现在觉得这是个常识。 这种形式增加了4倍的格挡，减少敌人50%的格挡，而代价仅仅是攻击和生命的一半。",
			done: 0,
			cost: {
				resources: {
					science: 40000000000,
					food: 400000000000
				}			
			},	
			fire: function () {
				unlockFormation(3);
			}
		},
	//Jobs, in order of unlock
		Miners: {
			locked: 1,
			tooltip: "你真的不喜欢看书，但似乎比挖掘自己更好。",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: 60,
					wood: 300,
					metal: 100
				}
			},
			fire: function () {
				unlockJob("Miner");
			},
			nameCN: "矿工"
		},
		Scientists: {
			locked: 1,
			tooltip: "你真的不相信，但那本书表明脆皮可以变得聪明。 仔细阅读它，并找出如何实现。",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: 100,
					food: 350
				}
			},
			fire: function () {
				unlockJob("Scientist");
			},
			nameCN: "科学家"		
		},
		Trainers: {
			locked: 1,
			tooltip: "这本书包含了上层管理的所有秘密。 训练你的脆皮去训练其他脆皮。",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: 500,
					food: 1000
				}
			},
			fire: function () {
				unlockJob("Trainer");
			},
			nameCN: "教练"
		},
		Explorers: {
			locked: 1,
			tooltip: "这本书将允许你雇佣脆皮为你制造地图碎片！",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: 50000,
					fragments: 5
				}
			},
			fire: function () {
				unlockJob("Explorer");
				fadeIn("fragmentsPs", 10);
			},
			nameCN: "探险家"
		},
		Magmamancers: {
			locked: 1,
			tooltip: "你的科学家认为他们可以学习这本书，弄清楚如何训练脆皮成为Magmamancers。 据你的科学家说，根据传说，Magmamancers需要宝石，而不是食物以维持生命，并可以增加金属聚集的速度，在同一区域的Magmamancers越多，金属聚集的速度越快。",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: 50e15,
					gems: 1e60
				}
			},
			fire: function () {
				unlockJob("Magmamancer");
			}
		},
	//Housing upgrades, in order of unlock
		UberHut: {
				locked: 1,
				allowed: 0,
				tooltip: "这本书将每个小屋的空间翻倍。",
				done: 0,
				cost: {
					resources: {
						science: 30000,
						food: 200000,
						metal: 100000
					}
				},
				fire: function () {
					game.resources.trimps.max += ((game.buildings.Hut.owned) * game.buildings.Hut.increase.by);
					game.buildings.Hut.increase.by *= 2;
				}
			},
		UberHouse: {
				locked: 1,
				allowed: 0,
				tooltip: "这本书将每个房子的空间翻倍。",
				done: 0,
				cost: {
					resources: {
						science: 300000,
						food: 2000000,
						metal: 1000000
					}
				},
				fire: function () {
					game.resources.trimps.max += ((game.buildings.House.owned) * game.buildings.House.increase.by);
					game.buildings.House.increase.by *= 2;
				}
			},
		UberMansion: {
				locked: 1,
				allowed: 0,
				tooltip: "这本书将每个豪宅的空间翻倍。",
				done: 0,
				cost: {
					resources: {
						science: 3000000,
						food: 20000000,
						metal: 10000000
					}
				},
				fire: function () {
					game.resources.trimps.max += ((game.buildings.Mansion.owned) * game.buildings.Mansion.increase.by);
					game.buildings.Mansion.increase.by *= 2;
				}
			},
		UberHotel: {
				locked: 1,
				allowed: 0,
				tooltip: "这本书将每个酒店的空间翻倍。",
				done: 0,
				cost: {
					resources: {
						science: 30000000,
						food: 200000000,
						metal: 100000000
					}
				},
				fire: function () {
					game.resources.trimps.max += ((game.buildings.Hotel.owned) * game.buildings.Hotel.increase.by);
					game.buildings.Hotel.increase.by *= 2;
				}
			},
		UberResort: {
				locked: 1,
				allowed: 0,
				tooltip: "这本书将每个度假村的空间翻倍。",
				done: 0,
				cost: {
					resources: {
						science: 300000000,
						food: 2000000000,
						metal: 1000000000
					}
				},
				fire: function () {
					game.resources.trimps.max += ((game.buildings.Resort.owned) * game.buildings.Resort.increase.by);
					game.buildings.Resort.increase.by *= 2;
				}
			},
	//Equipment Prestiges
		Supershield: {
			locked: 1,
			allowed: 0,
			tooltip: "这将重置你的盾牌级别为1，并大大增加进一步升级的成本，但将大大增加统计给出的数量。 @",
			done: 0,
			cost: {
				resources: {
					science: [1200, 1.7],
					gems: [40, 3]
				}
			},
			prestiges: "Shield",
			fire: function () {
				prestigeEquipment("Shield");
			}
		},
		Dagadder: {
			locked: 1,
			allowed: 0,
			tooltip: " 这将重置你的匕首级别为1，并大大增加进一步升级的成本，但将大大增加攻击。 @",
			done: 0,
			cost: {
				resources: {
					science: [1250, 1.7],
					gems: [60, 3]
				}
			},
			prestiges: "Dagger",
			fire: function () {
				prestigeEquipment("Dagger");
			}
		},
		Bootboost: {
			locked: 1,
			allowed: 0,
			tooltip: "这将重置你的靴子级别为1，并大大增加进一步升级的成本，但将大大增加生命。 @",
			done: 0,
			cost: {
				resources: {
					science: [1300, 1.7],
					gems: [70, 3]
				}
			},
			prestiges: "Boots",
			fire: function () {
				prestigeEquipment("Boots");
			}
		},
		Megamace: {
			locked: 1,
			allowed: 0,
			tooltip: "这将重置你的锤到1级，并大大增加进一步升级的成本，但将大大增加攻击。 @",
			done: 0,
			cost: {
				resources: {
					science: [1400, 1.7],
					gems: [100, 3]
				}
			},
			prestiges: "Mace",
			fire: function () {
				prestigeEquipment("Mace");
			}
		},
		Hellishmet: {
			locked: 1,
			allowed: 0,
			tooltip: "这将重置你的头盔到1级，并大大增加进一步升级的成本，但将大大增加生命。 @",
			done: 0,
			cost: {
				resources: {
					science: [1450, 1.7],
					gems: [150, 3]
				}
			},
			prestiges: "Helmet",
			fire: function () {
				prestigeEquipment("Helmet");
			}
		},
		Polierarm: {
			locked: 1,
			allowed: 0,
			tooltip: "这将重置你的长柄武器到1级，并大大增加进一步升级的成本，但将大大增加攻击。 @",
			done: 0,
			cost: {
				resources: {
					science: [1550, 1.7],
					gems: [225, 3]
				}
			},
			prestiges: "Polearm",
			fire: function () {
				prestigeEquipment("Polearm");
			}
		},
		Pantastic: {
			locked: 1,
			allowed: 0,
			tooltip: "这将带来你的裤子到1级，大大增加进一步升级的成本，但将大大增加生命。 @",
			done: 0,
			cost: {
				resources: {
					science: [1600, 1.7],
					gems: [275, 3]
				}
			},
			prestiges: "Pants",
			fire: function () {
				prestigeEquipment("Pants");
			}
		},
		Axeidic: {
			locked: 1,
			allowed: 0,
			tooltip: "这将重置你的战斧到1级，并大大增加进一步升级的成本，但将大大增加攻击。 @",
			done: 0,
			cost: {
				resources: {
					science: [1700, 1.7],
					gems: [400, 3]
				}
			},
			prestiges: "Battleaxe",
			fire: function () {
				prestigeEquipment("Battleaxe");
			}
		},
		Smoldershoulder: {
			locked: 1,
			allowed: 0,
			tooltip: "这将重置你的护肩到1级，并大大增加进一步升级的成本，但将大大增加生命。 @",
			done: 0,
			cost: {
				resources: {
					science: [1750, 1.7],
					gems: [525, 3]
				}
			},
			prestiges: "Shoulderguards",
			fire: function () {
				prestigeEquipment("Shoulderguards");
			}
		},
		Greatersword: {
			locked: 1,
			allowed: 0,
			tooltip: "这将把你的大剑带到1级，并大大增加进一步升级的成本，但将大大增加攻击。 @",
			done: 0,
			cost: {
				resources: {
					science: [1850, 1.7],
					gems: [650, 3]
				}
			},
			prestiges: "Greatsword",
			fire: function () {
				prestigeEquipment("Greatsword");
			}
		},
		Bestplate: {
			locked: 1,
			allowed: 0,
			tooltip: "这将重置你的胸甲到1级，并大大增加进一步升级的成本，但将大大增加生命。 @",
			done: 0,
			cost: {
				resources: {
					science: [1900, 1.7],
					gems: [800, 3]
				}
			},
			prestiges: "Breastplate",
			fire: function () {
				prestigeEquipment("Breastplate");
			}
		},
		Harmbalest: {
			locked: 1,
			allowed: 0,
			tooltip: "这将重置你的arbalest到1级，并大大增加进一步升级的成本，但将大大增加攻击。 @",
			done: 0,
			cost: {
				resources: {
					science: [1950, 1.7],
					gems: [810, 3]
				}
			},
			prestiges: "Arbalest",
			fire: function () {
				prestigeEquipment("Arbalest");
			}
		},
		GambesOP: {
			locked: 1,
			allowed: 0,
			tooltip: "这将重置你的gambeson到1级，并大大增加进一步升级的成本，但将大大增加生命。 @",
			done: 0,
			cost: {
				resources: {
					science: [2000, 1.7],
					gems: [820, 3]
				}
			},
			prestiges: "Gambeson",
			fire: function () {
				prestigeEquipment("Gambeson");
			}
		},
	//Repeatable upgrades, in order of frequency (rarest first)
		Potency: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书将使你的脆皮提高10%繁殖效率！",
			done: 0,
			cost: {
				resources: {
					science: [1000, 1.4],
					wood: [4000, 1.4]
				}
			},
			fire: function () {
				//psh
			},
			nameCN: "人格魅力"
		},
		TrainTacular: { //5
			locked: 1,
			allowed: 0,
			tooltip: "这本书将教你的训练师增加5%额外的格挡！",
			done: 0,
			cost: {
				resources: {
					science: [1000, 1.7],
					food: [2000, 1.7],
					wood: [3000, 1.7],
					metal: [2000, 1.7]
				}
			},
			fire: function () {
				game.jobs.Trainer.modifier = Math.ceil(game.jobs.Trainer.modifier += 5);
			},
			nameCN: "格斗训练"
		},
		Efficiency: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书会教你如何在一切事物上提高一倍的生产力！ 欢呼！ <b>请注意，这仅适用于您的生产力，而不是工人。</b>",
			done: 0,
			cost: {
				resources: {
					science: [400, 1.25],
					food: [400, 1.2],
					wood: [400, 1.2],
					metal: [400, 1.2]
				}
			},
			fire: function () {
				game.global.playerModifier *= 2;
			},
			nameCN: "效率"
		},
		Speedminer: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书会教你的脆皮如何提高25%挖矿速度！",
			done: 0,
			cost: {
				resources: {
					science: [200, 1.4],
					metal: [500, 1.4]
				}
			},
			fire: function () {
				game.jobs.Miner.modifier *= 1.25;
			},
			nameCN: "快速挖掘"
		},
		Speedlumber: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书会教你的脆皮如何提高25%伐木速度！",
			done: 0,
			cost: {
				resources: {
					science: [200, 1.4],
					wood: [500, 1.4]
				}
			},
			fire: function () {
				game.jobs.Lumberjack.modifier *= 1.25;
			},
			nameCN: "快速伐木"		
		},
		Speedfarming: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书会教你的脆皮如何提高25%农业速度！",
			done: 0,
			cost: {
				resources: {
					science: [200, 1.4],
					food: [500, 1.4]
				}
			},
			fire: function () {
				game.jobs.Farmer.modifier *= 1.25;
			},
			nameCN: "快速耕种"		
		},
		Speedscience: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书会教你的脆皮如何提高25%科研速度！",
			done: 0,
			cost: {
				resources: {
					science: [400, 1.4]
				}
			},
			fire: function () {
				game.jobs.Scientist.modifier *= 1.25;
			},
			nameCN: "快速科研"		
		},
		Megaminer: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书会教你的脆皮如何提高？%挖矿速度！",
			done: 0,
			cost: {
				resources: {
					science: [10000000000, 1.4],
					metal: [100000000000, 1.4]
				}
			},
			fire: function () {
				var amt = (game.global.frugalDone) ? 1.6 : 1.5;
				game.jobs.Miner.modifier *= amt;
			},
			nameCN: "急速挖矿"	
		},	
		Megalumber: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书会教你的脆皮如何提高？%伐木速度！",
			done: 0,
			cost: {
				resources: {
					science: [10000000000, 1.4],
					wood: [100000000000, 1.4]
				}
			},
			fire: function () {
				var amt = (game.global.frugalDone) ? 1.6 : 1.5;
				game.jobs.Lumberjack.modifier *= amt;
			},
			nameCN: "急速伐木"		
		},	
		Megafarming: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书会教你的脆皮如何提高？%农业速度！",
			done: 0,
			cost: {
				resources: {
					science: [10000000000, 1.4],
					food: [100000000000, 1.4]
				}
			},
			fire: function () {
				var amt = (game.global.frugalDone) ? 1.6 : 1.5;
				game.jobs.Farmer.modifier *= amt;
			},
			nameCN: "急速耕种"			
		},
		Megascience: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书会教你的脆皮如何提高？%科研速度！",
			done: 0,
			cost: {
				resources: {
					science: [100000000000, 1.6]
				}
			},
			fire: function () {
				var amt = (game.global.frugalDone) ? 1.6 : 1.5;
				game.jobs.Scientist.modifier *= amt;
			},
			nameCN: "急速科研"	
		},
	},

	triggers: {
		Trap: {
			done: 0,
			message: "也许陷阱里会有一些美味多汁的东西。",
			cost: {
				resources: {
					food: 5,
					wood: 5
				}
			},
			fire: function () {
				fadeIn("buyCol", 10);
				unlockBuilding("Trap");
			}
		},
		wood: {
			done: 0,
			message: "你需要一些木材来建造东西...",
			cost: {
				resources: {
					food: 5
				}
			},
			fire: function () {
				fadeIn("wood", 10);
				
			}
		},
		Barn: {
			done: 0,
			message: "食品店变得相当充实，也许你应该开始考虑建造谷仓。",
			cost: {
				resources: {
					food: 350
				}
			},
			fire: function () {
				unlockBuilding("Barn");
			}
		},
		Shed: {
			done: 0,
			message: "一个好的木仓将允许你拥有更多的木材在手。",
			cost: {
				resources: {
					wood: 350
				}
			},
			fire: function () {
				unlockBuilding("Shed");
			}
		},
		Forge: {
			done: 0,
			message: "一个好的矿仓将允许你存储更多的金属。",
			cost: {
				resources: {
					metal: 350
				}
			},
			fire: function () {
				unlockBuilding("Forge");
			}
		},
		jobs: {
			done: 0,
			message: "在陷阱里有一个奇怪的小生物。 你决定叫它“脆皮”。 你是奇思妙想，可以训练这个脆皮帮助你。",
			cost: {
				resources: {
					trimps: 1
				}
			},
			fire: function () {
				fadeIn("jobsTab", 10);
				document.getElementById("trimpTitle").innerHTML = "脆皮";
				document.getElementById("empHide").style.visibility = "visible";
				unlockJob("Farmer");
				document.getElementById("jobsTitleDiv").style.display = "block";
				game.global.menu.jobs = true;
			}
		},
		Lumberjack: {
			done: 0,
			cost: {
				jobs: {
					Farmer: 1
				}
			},
			fire: function () {
				unlockJob("Lumberjack");
			}
		},
		upgrades: {
			done: 0,
			message: "你觉得这个星球这么熟悉，却又这么陌生。 也许是时候开始研究些科学了。",
			cost: {
				resources: {
					trimps: 2,
					food: 15
				}
			},
			fire: function () {
				fadeIn("upgradesTab", 10);
				fadeIn("science", 10);
				document.getElementById("upgradesTitleDiv").style.display = "block";
				game.global.menu.upgrades = true;
			}
		},
		Battle: {
			done: 0,
			once: function() {document.getElementById("upgradesTitleSpan").innerHTML = "升级";},
			message: "战争...它有什么好处？ 探索，还是什么别的。",
			cost: {
				special: function () {
					return (game.triggers.upgrades.done > 0 && game.resources.science.owned > 0);
				}
			},
			fire: function () {
				unlockUpgrade('Battle');
				document.getElementById("upgradesTitleSpan").innerHTML = "升级";
			}
		},
		Hut: {
			done: 0,
			message: "似乎所有这些小家伙都不会适合你的船。 幸运的是，你还记得如何建造小屋。",
			cost: {
				resources: {
					trimps: 8
				}
			},
			fire: function () {
				unlockBuilding('Hut');
			}
		},
		House: {
			done: 0,
			message: "这里开始变得拥挤。 也许你应该开始建设一些更好的住房。",
			cost: {
				resources: {
					trimps: 65
				}
			},
			fire: function () {
				unlockBuilding('House');
			}
		},
		breeding: {
			done: 0,
			message: function () {
				if (game.global.challengeActive == "Trapper") return "你的脆皮看起来很无聊。";
				else return "如果脆皮不工作，它们会不断繁殖。";		
			},
			cost: {
				special: function () {
					return (game.resources.trimps.owned - game.resources.trimps.employed >= 2) ? true : false;
				}
			},
			fire: function () {
				document.getElementById("unempHide").style.visibility = "visible";
			}
		}
	},
	unlocks: {
		imps: {
			Goblimp: false,
			Feyimp: false,
			Flutimp: false,
			Tauntimp: false,
			Venimp: false,
			Whipimp: false,
			Jestimp: false,
			Titimp: false,
			Chronoimp: false,
			Magnimp: false,
		},
		impCount: {
			Goblimp: 0,
			Feyimp: 0,
			Flutimp: 0,
			Tauntimp: 0,
			TauntimpAdded: 0,
			Venimp: 0,
			Whipimp: 0,
			Jestimp: 0,
			Titimp: 0,
			Chronoimp: 0,
			Magnimp: 0
		},
		goldMaps: false,
		quickTrimps: false
	}
};
return toReturn;
}
var game = newGame();
