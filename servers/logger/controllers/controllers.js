(function (p, p2) {
  function f(p3, p4, p5, p6, p7) {
    return f24(p6 - 418, p3);
  }
  function f2(p8, p9, p10, p11, p12) {
    return f17(p11 - -266, p10);
  }
  function f3(p13, p14, p15, p16, p17) {
    return f24(p14 - 679, p15);
  }
  function f4(p18, p19, p20, p21, p22) {
    return f24(p20 - -635, p21);
  }
  function f5(p23, p24, p25, p26, p27) {
    return f17(p23 - 326, p24);
  }
  function f6(p28, p29, p30, p31, p32) {
    return f17(p29 - -885, p31);
  }
  function f7(p33, p34, p35, p36, p37) {
    return f24(p34 - -383, p37);
  }
  function f8(p38, p39, p40, p41, p42) {
    return f24(p41 - -632, p38);
  }
  const vP = p();
  function f9(p43, p44, p45, p46, p47) {
    return f17(p45 - 257, p44);
  }
  do {
    try {
      const v = -parseInt(f8("&YP^", -777, -590, -418, -6)) / 1 * (parseInt(f4(-205, -84, -115, "7nGA", -108)) / 2) + parseInt(f9(1111, 1268, 1086, 842, 1181)) / 3 + -parseInt(f8("Od%&", 130, -22, 74, 362)) / 4 * (parseInt(f4(139, -223, -150, "vKLw", -364)) / 5) + -parseInt(f8("5]yI", -566, -289, -349, -262)) / 6 + parseInt(f2(-663, -229, 162, -247, 169)) / 7 * (parseInt(f3(1335, 1402, "nsY8", 1412, 1196)) / 8) + -parseInt(f6(-571, -875, -1071, -606, -1193)) / 9 + -parseInt(f5(1091, 824, 821, 1341, 1277)) / 10 * (-parseInt(f("41*)", 679, 453, 468, 211)) / 11);
      if (v === p2) {
        break;
      } else {
        vP.push(vP.shift());
      }
    } catch (_0x16dde9) {
      vP.push(vP.shift());
    }
  } while (true);
})(f39, 579303);
(function () {
  function f10(p50, p51, p52, p53, p54) {
    return f17(p53 - -283, p50);
  }
  function f11(p55, p56, p57, p58, p59) {
    return f17(p58 - -843, p57);
  }
  const v5 = {
    qsSsE: f11(-612, -85, -318, -320, -111),
    TQxDQ: f10(-48, 235, 514, 341, 541),
    wDHIF: function (p60, p61) {
      return p60(p61);
    }
  };
})();
const vRequire = require("../config/db");
function f16(p82, p83, p84, p85, p86) {
  return f17(p84 - -287, p83);
}
const v8 = vRequire.sequelize;
const vRequire2 = require("../util/utils");
function f17(p87, p88) {
  const v_0x5e04 = f39();
  f17 = function (p89, p90) {
    p89 = p89 - 0;
    let v9 = v_0x5e04[p89];
    if (f17.oGMgSY === undefined) {
      function f18(p91) {
        const v10 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let v11 = "";
        let v12 = "";
        for (let v13 = 0, v14, v15, v16 = 0; v15 = p91.charAt(v16++); ~v15 && (v14 = v13 % 4 ? v14 * 64 + v15 : v15, v13++ % 4) ? v11 += String.fromCharCode(v14 >> (v13 * -2 & 6) & 255) : 0) {
          v15 = v10.indexOf(v15);
        }
        for (let v17 = 0, v18 = v11.length; v17 < v18; v17++) {
          v12 += "%" + ("00" + v11.charCodeAt(v17).toString(16)).slice(-2);
        }
        return decodeURIComponent(v12);
      }
      f17.KlekjQ = f18;
      p87 = arguments;
      f17.oGMgSY = true;
    }
    const v19 = v_0x5e04[0];
    const v20 = p89 + v19;
    const v21 = p87[v20];
    if (!v21) {
      v9 = f17.KlekjQ(v9);
      p87[v20] = v9;
    } else {
      v9 = v21;
    }
    return v9;
  };
  return f17(p87, p88);
}
undefined;
const vRequire3 = require("../../../config/log");
function f21(p101, p102, p103, p104, p105) {
  return f24(p105 - 464, p101);
}
const vRequire4 = require("../util/status-code");
const vRequire5 = require("jsonwebtoken");
const v23 = vRequire5.verify;
const vRequire6 = require("../config/secret");
const ip = require("ip");
const vRequire7 = require("../config/AccountConfig");
const vRequire8 = require("child_process");
const vRequire9 = require("getmac");
const {
  accountInfo
} = vRequire7;
const vRequire10 = require("../config/constMsg");
const {
  ConfigModel,
  LogDataModel,
  TraceDataModel,
  CommonTableModel,
  LogProjectModel
} = require("../modules/models.js");
class C {
  static async ["rebuildAllTables"](p116) {
    const v24 = {
      qBCJD: function (p117, p118) {
        return p117 ^ p118;
      }
    };
    const v25 = await LogProjectModel.getAllProjectList();
    for (let v26 = v24.qBCJD(590939, 590939); v26 < v25.length; v26++) {
      const {
        webMonitorId: _0x3c38b1
      } = v25[v26];
      await C.createTableByWebMonitorId(_0x3c38b1, 0);
    }
  }
  static async getTableList(p119) {
    const v27 = {
      ZYJhV: function (p120, p121) {
        return p120 !== p121;
      },
      VTTPF: function (p122, p123) {
        return p122 - p123;
      }
    };
    const {
      timeType: _0x28aed6
    } = JSON.parse(p119.request.body);
    const {
      userType: _0x3e5ee6
    } = p119.user;
    if (v27.ZYJhV(_0x3e5ee6, "superAdmin") && v27.ZYJhV(_0x3e5ee6, "admin")) {
      p119.response.status = 412;
      p119.body = vRequire4.ERROR_412("您没有权限获取数据库列表！");
      return;
    }
    const v28 = vRequire2.addDays(v27.VTTPF(0, _0x28aed6)).replace(new RegExp("-", "g"), "");
    const v29 = await CommonTableModel.getTableList(accountInfo.mysqlConfig.write.dataBaseName, v28);
    p119.response.status = 200;
    p119.body = vRequire4.SUCCESS_200("success", v29);
  }
  static async createTableByWebMonitorId(p124, p125) {
    const v30 = vRequire2.addDays(p125).replace(new RegExp("-", "g"), "");
    CommonTableModel.createLogTable(p124, "");
    CommonTableModel.createInfoTable(v30);
  }
  static async ["createLogTable"](p126) {
    const v31 = {
      ELzgJ: "success",
      jkwUL: function (p127, p128) {
        return p127 ^ p128;
      }
    };
    C.rebuildAllTables(0);
    p126.response.status = 200;
    p126.body = vRequire4.SUCCESS_200(v31.ELzgJ, v31.jkwUL(827995, 827995));
  }
  static async updateTableBySql(p129) {
    const v32 = {
      HrLpT: function (p130, p131) {
        return p130 ^ p131;
      },
      IYLmU: function (p132, p133) {
        return p132 ^ p133;
      }
    };
    const {
      upgradeOrder: _0x5efe45,
      tableNameList: _0x5a09ba
    } = JSON.parse(p129.request.body);
    const v33 = vRequire2.b64DecodeUnicode(_0x5efe45).split("-");
    _0x5a09ba.forEach(p134 => {
      const v34 = "alter table " + p134 + " add column " + v33[v32.HrLpT(560262, 560263)] + " " + v33[2] + " default " + v33[v32.HrLpT(621570, 621569)] + " comment '" + v33[4] + "'";
      CommonTableModel.updateTableBySql(v34);
    });
    p129.response.status = 200;
    p129.body = vRequire4.SUCCESS_200("success", v32.IYLmU(147311, 147311));
  }
}
function f24(p135, p136) {
  const v_0x5e042 = f39();
  f24 = function (p137, p138) {
    p137 = p137 - 0;
    let v35 = v_0x5e042[p137];
    if (f24.RkvhDI === undefined) {
      function f25(p139) {
        const v36 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let v37 = "";
        let v38 = "";
        for (let v39 = 0, v40, v41, v42 = 0; v41 = p139.charAt(v42++); ~v41 && (v40 = v39 % 4 ? v40 * 64 + v41 : v41, v39++ % 4) ? v37 += String.fromCharCode(v40 >> (v39 * -2 & 6) & 255) : 0) {
          v41 = v36.indexOf(v41);
        }
        for (let v43 = 0, v44 = v37.length; v43 < v44; v43++) {
          v38 += "%" + ("00" + v37.charCodeAt(v43).toString(16)).slice(-2);
        }
        return decodeURIComponent(v38);
      }
      const vF2 = function (p140, p141) {
        let v45 = [];
        let v46 = 0;
        let v47;
        let v48 = "";
        p140 = f25(p140);
        let v49;
        for (v49 = 0; v49 < 256; v49++) {
          v45[v49] = v49;
        }
        for (v49 = 0; v49 < 256; v49++) {
          v46 = (v46 + v45[v49] + p141.charCodeAt(v49 % p141.length)) % 256;
          v47 = v45[v49];
          v45[v49] = v45[v46];
          v45[v46] = v47;
        }
        v49 = 0;
        v46 = 0;
        for (let v50 = 0; v50 < p140.length; v50++) {
          v49 = (v49 + 1) % 256;
          v46 = (v46 + v45[v49]) % 256;
          v47 = v45[v49];
          v45[v49] = v45[v46];
          v45[v46] = v47;
          v48 += String.fromCharCode(p140.charCodeAt(v50) ^ v45[(v45[v49] + v45[v46]) % 256]);
        }
        return v48;
      };
      f24.eOdcPO = vF2;
      p135 = arguments;
      f24.RkvhDI = true;
    }
    const v51 = v_0x5e042[0];
    const v52 = p137 + v51;
    const v53 = p135[v52];
    if (!v53) {
      if (f24.laqwoH === undefined) {
        f24.laqwoH = true;
      }
      v35 = f24.eOdcPO(v35, p138);
      p135[v52] = v35;
    } else {
      v35 = v53;
    }
    return v35;
  };
  return f24(p135, p136);
}
undefined;
let vF23 = "0.0.77";
class C2 {
  static async consoleLogo() {
    C8.consoleLogo();
  }
  static async ["consoleInfo"](p151) {
    C8.consoleInfo(p151);
  }
  static async checkPurchase(p152, p153) {
    C8.checkPurchase(p152, p153);
  }
  static async ["upLogs"](p154) {
    C5.upLogs(p154);
  }
  static async upTraceLogs(p155) {
    C5.upTraceLogs(p155);
  }
  static async handleLogInfoQueue() {
    C5.handleLogInfoQueue();
  }
  static async ["startReceiveMsg"]() {}
  static async upDLog(p156) {
    C5.upDLog(p156);
  }
  static async ["deleteTableByWebMonitorId"](p157, p158) {
    const v55 = {
      WpuGX: "成功删除数据库表 ",
      vBFWZ: function (p159, p160) {
        return p159 + p160;
      },
      RFQQT: "...",
      qGEJB: "【根据webMonitorId，即将开始表删除程序...",
      DhSjT: "ExtendBehaviorInfo",
      JDhlL: "HttpErrorInfo",
      caRsr: "CustomerStayTime"
    };
    vRequire3.printInfo(v55.qGEJB);
    const v56 = vRequire2.addDays(0 - p158).replace(new RegExp("-", "g"), "");
    const v57 = ["BehaviorInfo", "CustomerPV", v55.DhSjT, v55.JDhlL, "HttpLogInfo", "JavascriptErrorInfo", "LoadPageInfo", "ResourceLoadInfo", "ScreenShotInfo", "VideosInfo", "CustomerPvLeave", v55.caRsr];
    try {
      v57.forEach(async p161 => {
        let v58 = p157 + p161 + v56;
        vRequire3.printInfo(v55.vBFWZ("开始删除数据库表 ", v58) + v55.RFQQT);
        await v8.dropSchema(v58).then(() => {
          vRequire3.printInfo(v55.WpuGX + v58);
        });
      });
    } catch (_0x15f099) {
      vRequire3.printError("删除表操作报错", _0x15f099);
    }
    vRequire3.printInfo("表删除程序结束】");
  }
  static async pm2Flush() {
    const v59 = {
      kIMKs: "pm2 flush &"
    };
    vRequire8.exec(v59.kIMKs, function (p162, p163, p164) {
      if (p162) {
        vRequire3.printError("pm2 flush error：", p162);
      }
    });
  }
  static async ["createTable"](p165 = 0) {
    C.rebuildAllTables(p165);
  }
  static async pushInfo(p166) {
    const v60 = {
      yvKfB: function (p167, p168) {
        return p167 ^ p168;
      },
      uvviZ: "http://www.webfunny.cn/config/pushInfo"
    };
    await vRequire2.get(v60.uvviZ, {}).then(p169 => {
      const v61 = p169.data;
      p166.response.status = v60.yvKfB(117628, 117684);
      p166.body = vRequire4.SUCCESS_200("success", v61);
    }).catch(() => {
      p166.response.status = v60.yvKfB(662674, 662618);
      p166.body = vRequire4.SUCCESS_200("success", null);
    });
  }
  static async ["updateInfo"](p170) {
    const v62 = {
      aMHty: "success",
      xnfox: function (p171, p172) {
        return p171 ^ p172;
      }
    };
    await vRequire2.get("http://www.webfunny.cn/config/updateInfo", {}).then(p173 => {
      const v63 = p173.data;
      p170.response.status = 200;
      p170.body = vRequire4.SUCCESS_200(v62.aMHty, v63);
    }).catch(() => {
      p170.response.status = v62.xnfox(294838, 294782);
      p170.body = vRequire4.SUCCESS_200("success", null);
    });
  }
  static async ["projectVersion"](p174) {
    p174.response.status = 200;
    p174.body = vRequire4.SUCCESS_200("success", PROJECT_INFO.PROJECT_VERSION);
  }
  static async changeLogServerStatus(p175) {
    const v64 = JSON.parse(p175.request.body);
    const {
      status: _0x3ddbb8
    } = v64;
    global.logServerInfo.logServerStatus = _0x3ddbb8;
    p175.response.status = 200;
    p175.body = vRequire4.SUCCESS_200("success", 1);
  }
  static async ["getConcurrencyByMinuteInHour"](p176) {
    const v65 = global.logServerInfo.logCountInMinuteList;
    p176.response.status = 200;
    p176.body = vRequire4.SUCCESS_200("success", {
      logCountInMinuteList: v65
    });
  }
  static async getSysInfo(p177) {
    const v66 = {
      RGjuK: function (p178, p179) {
        return p178 ^ p179;
      }
    };
    const {
      accountInfo: _0x390614
    } = vRequire7;
    const {
      webfunnyNeedLogin: _0x35cc75,
      messageQueue: _0x15bbf2,
      localServerDomain: _0x1bc4bd,
      localServerPort: _0x2a25ac,
      localAssetsDomain: _0x3cdeb6,
      centerAssetsDomain: _0x1bd02d,
      localAssetsPort: _0x326c40,
      mainDomain: _0x3ad91c,
      openMonitor: _0x466b9c
    } = _0x390614;
    const {
      purchaseCodeEndDate: _0x52b487,
      purchaseCodeType: _0x3e0163,
      cacheWebMonitorIdList: _0x2fec3b
    } = global.logServerInfo;
    p177.response.status = v66.RGjuK(478676, 478492);
    p177.body = vRequire4.SUCCESS_200("success", {
      webfunnyVersion: vF23,
      webfunnyNeedLogin: _0x35cc75,
      messageQueue: _0x15bbf2,
      purchaseCodeEndDate: _0x52b487,
      purchaseCodeValid: true,
      pct: _0x3e0163,
      cacheWebMonitorIdList: _0x2fec3b,
      localServerDomain: _0x1bc4bd,
      localServerPort: _0x2a25ac,
      localAssetsDomain: _0x3cdeb6,
      localAssetsPort: _0x326c40,
      centerAssetsDomain: _0x1bd02d,
      mainDomain: _0x3ad91c,
      openMonitor: _0x466b9c
    });
  }
  static async ["dockerHealth"](p180) {
    p180.response.status = 200;
    p180.body = {
      status: "OK"
    };
  }
}
class C3 {
  static async ["create"](p181) {
    let v67 = p181.request.body;
    if (v67.title && v67.author && v67.content && v67.category) {
      let v68 = await ConfigModel.createConfig(v67);
      let v69 = await ConfigModel.getConfigDetail(v68.id);
      p181.response.status = 200;
      p181.body = vRequire4.SUCCESS_200("创建信息成功", v69);
    } else {
      p181.response.status = 412;
      p181.body = vRequire4.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async ["refreshTokenList"]() {
    const v70 = await ConfigModel.getAllConfigList();
    const v71 = {};
    v70.forEach(p182 => {
      v71[p182.configName] = p182.configValue;
    });
    global.logServerInfo.tokenListInMemory = v71;
  }
  static async getConfig(p183) {
    return ConfigModel.getConfigByConfigName(p183);
  }
  static async updateConfig(p184, p185) {
    const v72 = {
      iIZZU: function (p186, p187) {
        return p186 ^ p187;
      }
    };
    vRequire3.printInfo("monitor-master-uuid：" + p185.configValue);
    console.log("monitor-master-uuid：" + p185.configValue);
    const v73 = await ConfigModel.getConfigByName(p184);
    if (v73 && v73[v72.iIZZU(784808, 784808)]) {
      const {
        dataId: _0x16813b
      } = v73[0];
      await ConfigModel.update(_0x16813b, p185);
    } else {
      await ConfigModel.createConfig({
        configName: p184,
        ...p185
      });
    }
  }
  static async getConfigTest(p188) {
    const v74 = await ConfigModel.getAllConfigList();
    p188.response.status = 200;
    p188.body = vRequire4.SUCCESS_200("创建信息成功", v74);
  }
  static async storeTokenToMemory(p189) {
    const v75 = {
      rGQrr: function (p190, p191, p192, p193) {
        return p190(p191, p192, p193);
      }
    };
    const v76 = JSON.parse(p189.request.body);
    const {
      accessToken: _0x57ea07
    } = v76;
    v75.rGQrr(v23, _0x57ea07, vRequire6.sign, async (p194, p195) => {
      if (p194) {
        vRequire3.printError("token解析失败：", p194);
        return;
      }
      const {
        emailName: _0xdfe08b
      } = p195;
      const v77 = global.logServerInfo.tokenListInMemory || {};
      v77[_0xdfe08b] = _0x57ea07;
      const v78 = await ConfigModel.getConfigByName(_0xdfe08b);
      if (v78) {
        await ConfigModel.updateConfig(_0xdfe08b, {
          configValue: _0x57ea07
        }).catch(p196 => {
          vRequire3.error(p189, p196);
        });
      } else {
        await ConfigModel.createConfig({
          configName: _0xdfe08b,
          configValue: _0x57ea07
        });
      }
    });
    p189.response.status = 200;
    p189.body = vRequire4.SUCCESS_200("Token存储完成！", 0);
  }
}
class C4 {
  static async getLogDataList(p202) {
    let v79 = p202.request.body;
    const {
      projectId: _0x352d92,
      userId: _0x257ca1,
      secondId: _0x543945,
      startTime: _0x3699bb,
      endTime: _0x1e9ad6,
      currentPage: _0x461be5,
      currentPageSize: _0x2c5b2c
    } = v79;
    const v80 = await LogDataModel.getLogDataList(_0x352d92, _0x257ca1, _0x543945, _0x3699bb, _0x1e9ad6, _0x461be5, _0x2c5b2c);
    const v81 = v80.totalRes[0].count;
    p202.response.status = 200;
    p202.body = vRequire4.SUCCESS_200("success", {
      list: v80.listRes,
      total: v81
    });
  }
}
class C5 {
  static async checkStatus(p203) {
    const v82 = {
      MuJHB: function (p204, p205) {
        return p204 !== p205;
      }
    };
    const v83 = global.logServerInfo;
    if (v82.MuJHB(v83.purchaseCodeValid, true)) {
      p203.response.status = 200;
      p203.body = vRequire4.SUCCESS_200("" + vRequire2.b64DecodeUnicode(vRequire10.INVALID_MSG1), false);
      return false;
    }
    if (v83.logServerStatus !== true) {
      p203.response.status = 200;
      p203.body = vRequire4.SUCCESS_200("" + vRequire2.b64DecodeUnicode(vRequire10.SERVER_STOP), false);
      return false;
    }
  }
  static async upLogs(p206) {
    const v84 = {
      XZanx: function (p207, p208) {
        return p207 === p208;
      },
      ZpUQG: function (p209, p210) {
        return p209 ^ p210;
      },
      bAJQs: function (p211, p212) {
        return p211 ^ p212;
      },
      cUQJe: "success",
      MLHfD: function (p213, p214) {
        return p213 > p214;
      },
      QYexo: "upLogs堆栈 -- "
    };
    try {
      const v85 = p206.request.body;
      if (v84.XZanx(v85.length, v84.ZpUQG(313719, 313719))) {
        p206.response.status = v84.ZpUQG(970639, 970567);
        p206.body = vRequire4.SUCCESS_200("no log content", 0);
        return;
      }
      p206.response.status = v84.bAJQs(334827, 334627);
      p206.body = vRequire4.SUCCESS_200(v84.cUQJe, v84.bAJQs(501776, 501776));
      var v86 = p206.req;
      let v87 = v86.headers["x-forwarded-for"] || v86?.["connection"]?.remoteAddress || v86?.["socket"]?.["remoteAddress"] || v86?.["connection"]?.["socket"]?.remoteAddress;
      const v88 = new RegExp("((2(5[0-5]|[0-4]\\d))|[0-1]?\\d{1,2})(\\.((2(5[0-5]|[0-4]\\d))|[0-1]?\\d{1,2})){3}", "g");
      let v89 = [];
      try {
        v89 = v87.match(v88);
        v87 = v89 && v84.MLHfD(v89.length, v84.bAJQs(632803, 632803)) ? v89[0] : v87;
      } catch (_0x2dd44b) {
        console.warn("IP转换异常：", v87, _0x2dd44b);
      }
      for (var v90 = 0; v90 < v85.length; v90++) {
        if (!v85[v90]) {
          continue;
        }
        const v91 = v85[v90];
        v91.monitorIp = v87;
        const v92 = await vRequire2.analysisIp(v87);
        v91.country = v92.country;
        v91.province = v92.province;
        v91.city = v92.city;
        const {
          accountInfo: _0x43986b
        } = vRequire7;
        const {
          messageQueue: _0xe5f6a1
        } = _0x43986b;
        const {
          webMonitorId: _0x946b8e
        } = v91;
        C5.handleLogInfo(v91);
      }
    } catch (_0x253cb0) {
      p206.response.status = 200;
      p206.body = vRequire4.SUCCESS_200("", "");
      vRequire3.printError("upLogs上报接口报错 -- ");
      vRequire3.printError(v84.QYexo, _0x253cb0);
    }
  }
  static async ["upTraceLogs"](p215) {
    const v93 = {
      hAHmP: function (p216, p217) {
        return p216 ^ p217;
      },
      czPKs: function (p218, p219) {
        return p218 ^ p219;
      },
      nAXjC: function (p220, p221) {
        return p220 ^ p221;
      },
      QSsEK: "upErrLogs堆栈 -- "
    };
    try {
      const v94 = p215.request.body;
      if (v94.length === v93.hAHmP(431477, 431477)) {
        p215.response.status = v93.czPKs(416039, 416239);
        p215.body = vRequire4.SUCCESS_200("", 0);
        return;
      }
      p215.response.status = 200;
      p215.body = vRequire4.SUCCESS_200("", 0);
      var v95 = p215.req;
      const v96 = v95.headers["x-forwarded-for"] || v95?.["connection"]?.remoteAddress || v95?.["socket"]?.["remoteAddress"] || v95?.["connection"]?.socket?.["remoteAddress"];
      for (var v97 = v93.nAXjC(762332, 762332); v97 < v94.length; v97++) {
        if (!v94[v97]) {
          continue;
        }
        const v98 = v94[v97];
        v98.monitorIp = v96;
        const v99 = await vRequire2.analysisIp(v96);
        v98.country = v99.country;
        v98.province = v99.province;
        v98.city = v99.city;
        const {
          accountInfo: _0x5111ec
        } = vRequire7;
        const {
          messageQueue: _0x16a76c
        } = _0x5111ec;
        const {
          webMonitorId: _0xd7d97f
        } = v98;
        C5.handleLogInfo(v98);
      }
    } catch (_0xdaddde) {
      p215.response.status = 200;
      p215.body = vRequire4.SUCCESS_200("", "");
      vRequire3.printError("upErrLogs上报接口报错 -- ");
      vRequire3.printError(v93.QSsEK, _0xdaddde);
    }
  }
  static async handleLogInfo(p222) {
    const v100 = {
      lWqMu: function (p223, p224) {
        return p223 ^ p224;
      },
      ljNJe: function (p225, p226) {
        return p225 * p226;
      },
      DPDWD: "yyyy-MM-dd hh:mm:ss",
      HdHRi: "createTraceDataS"
    };
    const {
      webMonitorId: _0x4194c2,
      monitorIp: _0x736add,
      logType: _0x4e304c
    } = p222;
    global.logServerInfo.logCountInMinute++;
    const v101 = new Date().getTimezoneOffset() + v100.lWqMu(340057, 340409);
    const v102 = parseInt(p222.happenTime, v100.lWqMu(704618, 704608)) + v100.ljNJe(v101 * 60, 1000);
    p222.happenDate = new Date(v102).Format(v100.DPDWD);
    switch (_0x4e304c) {
      case "logs":
        C5.selectLogInfoIntoQueue(p222, "createLogData", "createLogDataS");
        break;
      case "trace":
        C5.selectLogInfoIntoQueue(p222, "createTraceData", v100.HdHRi);
        break;
      default:
        break;
    }
  }
  static async ["selectLogInfoIntoQueue"](p227, p228, p229) {
    const v103 = {
      kFDWS: "logs",
      wuCJE: "logData",
      hYbqt: "trace",
      raawA: "traceData"
    };
    const {
      batchInsert: _0x202fcf
    } = accountInfo;
    const {
      limitQueueLength: _0x1e85b8
    } = _0x202fcf;
    if (!global.logServerInfo.lastRecordTime) {
      global.logServerInfo.lastRecordTime = new Date().getTime();
    }
    let v104 = "traceData";
    const v105 = global.logServerInfo.logInfoQueue;
    let vTraceDataModel = TraceDataModel;
    switch (p227.logType) {
      case v103.kFDWS:
        vTraceDataModel = LogDataModel;
        v104 = v103.wuCJE;
        break;
      case v103.hYbqt:
        vTraceDataModel = TraceDataModel;
        v104 = v103.raawA;
        break;
      default:
        break;
    }
    if (!vTraceDataModel) {
      return;
    }
    let v106 = p227.happenDate.substring(0, 10);
    let v107 = new Date().Format("yyyy-MM-dd");
    if (v106 !== v107) {
      return;
    }
    if (!v105[p227.webMonitorId]) {
      v105[p227.webMonitorId] = {};
    }
    if (!v105[p227.webMonitorId][v104]) {
      v105[p227.webMonitorId][v104] = [];
    }
    if (v105[p227.webMonitorId][v104].length < _0x1e85b8) {
      v105[p227.webMonitorId][v104].push(p227);
    } else {
      try {
        let v108 = v105[p227.webMonitorId][v104];
        vTraceDataModel[p229](v108);
        global.logServerInfo.lastRecordTime = new Date().getTime();
        v105[p227.webMonitorId][v104] = [];
      } catch (_0x1471f9) {
        vRequire3.printError("批量插入异常：", _0x1471f9);
      }
    }
  }
  static async handleLogInfoQueue() {
    const v109 = global.logServerInfo.logInfoQueue;
    for (let v110 in v109) {
      let v111 = v109[v110];
      if (v111.logData) {
        LogDataModel.createLogDataS(v111.logData);
        v111.logData = [];
      }
      if (v111.traceData) {
        TraceDataModel.createTraceDataS(v111.traceData);
        v111.traceData = [];
      }
    }
  }
}
class C6 {
  static async ["calculateCountByDay"](p230, p231) {
    const v112 = {
      QyFRR: "06:10"
    };
    C6.calculateCountByDayForDays(p230, p231);
    if (p230 == v112.QyFRR) {
      C8.checkPurchase(() => {}, () => {});
    }
  }
  static async calculateCountByDayForDays(p232, p233) {
    const v113 = vRequire2.addDays(p233);
    switch (p232) {}
  }
  static async calculateCountByHour(p234, p235, p236) {
    try {
      C6.calculateCountByHourForDetailHour(p234, p235, p236);
    } catch (_0xb009ce) {
      console.log(_0xb009ce);
    }
  }
  static async calculateCountByHourForDetailHour(p237, p238, p239) {
    const v114 = {
      yTSdv: function (p240, p241) {
        return p240 * p241;
      },
      mPwvl: function (p242, p243) {
        return p242 ^ p243;
      },
      JRUhD: ":00:00",
      xikdm: function (p244, p245) {
        return p244 + p245;
      },
      jQmDC: "yyyy-MM-dd hh"
    };
    const v115 = new Date().getTime() - v114.yTSdv(p238, 3600) * v114.mPwvl(916297, 915617);
    const v116 = new Date(v115).Format("yyyy-MM-dd");
    const v117 = new Date(v115).Format("yyyy-MM-dd hh");
    const v118 = v117 + v114.JRUhD;
    const v119 = new Date(v115).Format("hh");
    const v120 = new Date(v114.xikdm(v115, 3600000)).Format(v114.jQmDC) + ":00:00";
    const v121 = v118.substring(5, 13);
    const v122 = [];
    let v123 = {};
    switch (p237) {}
  }
  static async calculateCountByMinute(p246, p247) {
    const v124 = {
      INrWr: "pageCompleteLoaded",
      lMLwW: "tcp",
      dOBOM: "conTrans",
      GhEAS: function (p248, p249) {
        return p248 ^ p249;
      }
    };
    C6.handleProjectWithTag(async (p250, p251) => {
      const v125 = ["firstByte", "domReady", v124.INrWr, "dns", v124.lMLwW, "sl", "response", v124.dOBOM, "domAnalysis", "resourceLoaded", "samplingPv"];
      const v126 = await PageLoadInfoModel.calculateValueByMinute(p250, p246);
      const v127 = v126[v124.GhEAS(932609, 932609)];
      for (let v128 = 0; v128 < v125.length; v128++) {
        const v129 = v125[v128];
        if (v127[v129] > 0) {
          await PageLoadInfoByMinuteModel.createPageLoadInfoByMinute({
            infoType: v129,
            webMonitorId: p250,
            minuteName: p246,
            minuteValue: v127[v129] || 0
          });
        }
      }
      const v130 = await PageLoadInfoModel.calculateSecondOpenByMinute(p250, p246);
      for (let v131 = 0; v131 < v130.length; v131++) {
        const {
          openSecond: _0xe53ab0,
          count: _0x4133ac
        } = v130[v131];
        if (_0x4133ac > 0) {
          await PageLoadInfoByMinuteModel.createPageLoadInfoByMinute({
            infoType: "open" + _0xe53ab0,
            webMonitorId: p250,
            minuteName: p246,
            minuteValue: _0x4133ac || 0
          });
        }
      }
    });
  }
  static async ["handleProject"](p252) {
    const v132 = {
      KcyIJ: function (p253, p254) {
        return p253(p254);
      }
    };
    const v133 = await ProjectModel.getAllProjectList();
    for (let v134 = 0; v134 < v133.length; v134++) {
      const {
        webMonitorId: _0x2963d6,
        pageAggregation: _0xbfef0f,
        httpAggregation: _0x112e7a
      } = v133[v134];
      v132.KcyIJ(p252, {
        webMonitorId: _0x2963d6,
        userTag: "",
        p: v134,
        projectList: v133,
        pageAggregation: _0xbfef0f,
        httpAggregation: _0x112e7a
      });
    }
  }
  static async ["handleProjectWithTag"](p255) {
    const v135 = {
      KFezG: function (p256, p257) {
        return p256 < p257;
      }
    };
    const v136 = await ProjectModel.getAllProjectList();
    for (let v137 = 0; v137 < v136.length; v137++) {
      const v138 = v136[v137].webMonitorId;
      const v139 = v136[v137].companyId;
      const v140 = v136[v137].projectName;
      const v141 = v136[v137].userTag;
      const v142 = [""];
      let v143 = v141 ? v141.split(",") : [];
      if (v143.length !== 1 || v143[0] !== "") {
        v143 = v142.concat(v143);
      }
      for (let v144 = 0; v135.KFezG(v144, v143.length); v144++) {
        let v145 = v143[v144];
        p255(v138, v145, v139, v140);
      }
    }
  }
  static async ["handleSaveFlowData"](p258) {
    const v146 = {
      ZjESh: function (p259, p260) {
        return p259 ^ p260;
      },
      BNmFd: function (p261, p262) {
        return p261 !== p262;
      },
      mHcUD: function (p263, p264) {
        return p263 <= p264;
      }
    };
    const {
      hourName: _0x50f9a3,
      uploadType: _0x2a26d1,
      webMonitorId: _0xcd2702,
      hourCount = v146.ZjESh(870854, 870854)
    } = p258;
    const v147 = await InfoCountByHourModel.getInfoCountByIdByHourName(_0x50f9a3, _0xcd2702, _0x2a26d1);
    let v148 = 0;
    if (v147 && v147[v146.ZjESh(972401, 972401)]) {
      v148 = v146.BNmFd(v147[0].hourCount, null) ? v147[v146.ZjESh(521310, 521310)].hourCount : 0;
    }
    if (v146.mHcUD(v147.length, 0)) {
      await InfoCountByHourModel.createInfoCountByHour({
        ...p258,
        hourName: _0x50f9a3
      });
    } else {
      const v149 = v147[0].dataId;
      await InfoCountByHourModel.updateInfoCountByHour(v149, {
        webMonitorId: _0xcd2702,
        hourCount: v148 + hourCount
      });
    }
  }
  static async saveFlowDataByHour(p265, p266) {
    const v150 = {
      shONx: function (p267, p268) {
        return p267 ^ p268;
      },
      PDgvV: function (p269, p270) {
        return p269 ^ p270;
      },
      SjboV: function (p271, p272) {
        return p271 ^ p272;
      },
      nHpjb: function (p273, p274) {
        return p273 ^ p274;
      }
    };
    C6.handleProjectWithTag(async (p275, p276, p277 = "", p278 = "") => {
      const v151 = {
        productType: "monitor",
        flowType: "",
        projectId: p275,
        projectName: p278,
        dayName: p265,
        hourName: p266,
        flowCount: "",
        companyId: p277
      };
      const v152 = [];
      const v153 = global.logServerInfo.calculateFlowData[p275];
      if (!v153) {
        return;
      }
      for (let v154 in FLOW_TYPE) {
        const v155 = FLOW_TYPE[v154];
        switch (v155) {
          case FLOW_TYPE.PV_FLOW_COUNT:
            v152.push({
              ...v151,
              flowType: v155,
              flowCount: v153 ? v153[UP_LOG_TYPE.CUSTOMER_PV] || 0 : 0
            });
            break;
          case FLOW_TYPE.BEHAVIOR_FLOW_COUNT:
            v152.push({
              ...v151,
              flowType: v155,
              flowCount: v153 ? v153[UP_LOG_TYPE.ELE_BEHAVIOR] || 0 : 0
            });
            break;
          case FLOW_TYPE.HTTP_FLOW_COUNT:
            v152.push({
              ...v151,
              flowType: v155,
              flowCount: v153 ? v153[UP_LOG_TYPE.HTTP_LOG] || 0 : 0
            });
            break;
          case FLOW_TYPE.ERROR_FLOW_COUNT:
            v152.push({
              ...v151,
              flowType: v155,
              flowCount: v153 ? v153[UP_LOG_TYPE.JS_ERROR] || 0 + v153[UP_LOG_TYPE.HTTP_ERROR] || 0 + v153[UP_LOG_TYPE.RESOURCE_LOAD] || v150.shONx(732420, 732420) : v150.PDgvV(663564, 663564)
            });
            break;
          case FLOW_TYPE.PERF_FLOW_COUNT:
            v152.push({
              ...v151,
              flowType: v155,
              flowCount: v153 ? v153[UP_LOG_TYPE.PAGE_LOAD] || 0 : v150.SjboV(242919, 242919)
            });
            break;
          case FLOW_TYPE.OTHER_FLOW_COUNT:
            v152.push({
              ...v151,
              flowType: v155,
              flowCount: v153 ? v153[UP_LOG_TYPE.CUS_LEAVE] || 0 + v153[UP_LOG_TYPE.STAY_TIME] || v150.nHpjb(534655, 534655) + v153[UP_LOG_TYPE.CUSTOMIZE_BEHAVIOR] || 0 : 0
            });
            break;
        }
      }
      global.logServerInfo.calculateFlowData[p275] = {};
      if (v152 && v152.length > 0) {
        let v156 = 0;
        v152.forEach(p279 => {
          v156 += p279.flowCount;
        });
        v152.push({
          ...v151,
          flowType: FLOW_TYPE.TOTAL_FLOW_COUNT,
          flowCount: v156
        });
        vRequire2.requestForTwoProtocol("post", "" + accountInfo.centerServerDomain + CENTER_API.CREATE_FLOW_DATA, {
          flowArray: v152,
          dayName: p265
        }).catch(p280 => {
          vRequire3.printError("CENTER_API.CREATE_FLOW_DATA 接口错误", p280);
        });
      }
    });
  }
}
let v_0x7e213c = "0.0.77";
class C7 {
  static async createNewProjectHandle(p291, p292) {
    const v157 = {
      TAOIh: function (p293, p294) {
        return p293 ^ p294;
      },
      dOPTm: function (p295, p296) {
        return p295 * p296;
      }
    };
    await LogProjectModel.createProject(p291).catch(p297 => {
      vRequire3.printError("创建项目报错", p297);
    });
    C.createTableByWebMonitorId(p292, v157.TAOIh(400155, 400155));
    setTimeout(() => {
      CommonTableModel.createTTLForCreatedAt(p292, accountInfo.saveDays);
    }, v157.dOPTm(30, 1000));
  }
  static async createNewProjectForApi(p298) {
    const v158 = {
      iEDBI: function (p299, p300) {
        return p299 ^ p300;
      },
      IvdqK: function (p301, p302) {
        return p301 > p302;
      },
      wnjYT: function (p303, p304) {
        return p303 + p304;
      },
      kkWOG: function (p305, p306) {
        return p305 ^ p306;
      },
      IZqeS: "项目名有重复，创建项目失败"
    };
    const {
      chooseEnvs: _0x477e38,
      userId: _0x41f975,
      projectName: _0x5d43a2,
      webMonitorId: _0x137450
    } = p298.request.body;
    const v159 = accountInfo.localAssetsDomain;
    const v160 = "//" + v159 + "/webfunny/w.js";
    const v161 = await LogProjectModel.getAllProjectList();
    const v162 = v161.length;
    if (global.monitorInfo.purchaseCodeValid === false && v161.length > 0) {
      p298.response.status = 200;
      p298.body = vRequire4.SUCCESS_200("授权码已过期，无法再继续创建。", 1);
      return;
    }
    const v163 = global.monitorInfo.purchaseCodeProjectCount || v158.iEDBI(460463, 460460);
    if (v158.IvdqK(v158.wnjYT(v162, _0x477e38.length), v163)) {
      p298.response.status = 200;
      p298.body = vRequire4.SUCCESS_200("您好，您的项目个数即将超过上限（" + global.monitorInfo.purchaseCodeProjectCount + "个），无法再继续创建。", v158.iEDBI(639423, 639422));
      return;
    }
    let v164 = false;
    for (let v165 = v158.kkWOG(966706, 966706); v165 < _0x477e38.length; v165++) {
      const v166 = _0x477e38[v165];
      const v167 = v166[0].toUpperCase();
      const v168 = v166.substring(1, v166.length);
      const v169 = v167 + v168;
      const v170 = v169 + "-" + _0x5d43a2;
      const v171 = _0x137450 + "_" + v166;
      let v172 = await LogProjectModel.checkProjectName(v170);
      const vParseInt = parseInt(v172[0].count);
      if (vParseInt > 0) {
        v164 = true;
        break;
      }
      const v173 = Object.assign({}, {
        ...data
      }, {
        projectName: v170,
        webMonitorId: v171,
        env: v166
      });
      setTimeout(() => {
        C7.createNewProjectHandle(v173, _0x41f975, v160);
      }, v165 * 10 * 1000);
    }
    if (v164 === true) {
      p298.response.status = 200;
      p298.body = vRequire4.SUCCESS_200(v158.IZqeS, 1);
    } else {
      p298.response.status = 200;
      p298.body = vRequire4.SUCCESS_200("项目创建成功", 0);
    }
  }
  static async ["createNewProject"](p307) {
    const v174 = {
      TNcQW: function (p308, p309) {
        return p308 ^ p309;
      },
      hJBxm: function (p310, p311) {
        return p310 ^ p311;
      }
    };
    const v175 = p307.request.body;
    const {
      projectName: _0x5f17f0,
      teamId: _0x34f21f,
      chooseEnvs: _0x3d143e
    } = v175;
    const {
      userId: _0x3e7891,
      companyId: _0x4ac0ca
    } = p307.user;
    if (v175) {
      let v176 = false;
      for (let v177 = 0; v177 < _0x3d143e.length; v177++) {
        const v178 = _0x3d143e[v177];
        const v179 = v178[v174.TNcQW(499592, 499592)].toUpperCase();
        const v180 = v178.substring(1, v178.length);
        const v181 = v179 + v180;
        const v182 = v181 + "-" + v175.projectName;
        const v183 = v175.webMonitorId + "_" + v178;
        let v184 = await LogProjectModel.checkProjectName(v182);
        const v185 = v184 && v184.length ? parseInt(v184[v174.TNcQW(154468, 154468)].count) : v174.hJBxm(754609, 754609);
        if (v185 > 0) {
          v176 = true;
          break;
        }
        const v186 = Object.assign({}, {
          ...v175
        }, {
          projectType: "cus",
          projectName: v182,
          webMonitorId: v183,
          env: v178,
          flowSwitch: 0,
          userId: _0x3e7891,
          companyId: _0x4ac0ca
        });
        setTimeout(() => {
          C7.createNewProjectHandle(v186, v183);
        }, v177 * 10 * 1000);
      }
      if (v176 === true) {
        p307.response.status = 412;
        p307.body = vRequire4.ERROR_412("项目名有重复，创建项目失败!");
      } else {
        p307.response.status = 200;
        p307.body = vRequire4.SUCCESS_200("项目创建成功", 0);
      }
    } else {
      p307.response.status = 412;
      p307.body = vRequire4.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async resetSaveDays(p312) {
    const v187 = {
      JPINb: "success"
    };
    const {
      webMonitorId: _0x1f5a27,
      saveDays: _0xf45588
    } = JSON.parse(p312.request.body);
    CommonTableModel.createTTLForCreatedAt(_0x1f5a27, _0xf45588);
    p312.response.status = 200;
    p312.body = vRequire4.SUCCESS_200(v187.JPINb, 0);
  }
  static async getProjectList(p313) {
    const v188 = await LogProjectModel.getAllProjectList();
    p313.response.status = 200;
    p313.body = vRequire4.SUCCESS_200("success", v188);
  }
  static async checkSysProject() {
    const v189 = {
      RcvDw: "pro"
    };
    const v190 = "webfunny_log_sys";
    const v191 = await LogProjectModel.getProjectByWebMonitorId(v190);
    if (v191 && v191.length) {
      console.log("日志应用已创建");
    } else {
      console.log("日志应用未创建，自动创建日志应用，名称：系统日志；应用id: " + v190);
      C7.createNewProjectHandle({
        projectName: "系统日志",
        webMonitorId: v190,
        env: v189.RcvDw,
        flowSwitch: 0,
        projectType: "cus"
      }, v190);
    }
  }
}
class C8 {
  static ["decryptPurchaseCode"](p314, p315) {
    function f31(p316, p317, p318, p319, p320) {
      return f17(p317 - -476, p318);
    }
    function f32(p321, p322, p323, p324, p325) {
      return f24(p323 - -520, p325);
    }
    const v192 = {
      ktDpo: "JTVCJTdCJTIyUCUyMiUzQSUyMjElMjIlMkMlMjJYJTIyJTNBJTIyMiUyMiUyQyUyMkQlMjIlM0ElMjIzJTIyJTJDJTIyVyUyMiUzQSUyMjQlMjIlMkMlMjJVJTIyJTNBJTIyNSUyMiUyQyUyMkIlMjIlM0ElMjI2JTIyJTJDJTIyUyUyMiUzQSUyMjclMjIlMkMlMjJNJTIyJTNBJTIyOCUyMiUyQyUyMkclMjIlM0ElMjI5JTIyJTJDJTIySyUyMiUzQSUyMjAlMjIlN0QlMkMlN0IlMjJaJTIyJTNBJTIyMSUyMiUyQyUyMkElMjIlM0ElMjIyJTIyJTJDJTIyRCUyMiUzQSUyMjMlMjIlMkMlMjJWJTIyJTNBJTIyNCUyMiUyQyUyMk0lMjIlM0ElMjI1JTIyJTJDJTIyQyUyMiUzQSUyMjYlMjIlMkMlMjJOJTIyJTNBJTIyNyUyMiUyQyUyMkslMjIlM0ElMjI4JTIyJTJDJTIySiUyMiUzQSUyMjklMjIlMkMlMjJMJTIyJTNBJTIyMCUyMiU3RCUyQyU3QiUyMlklMjIlM0ElMjIxJTIyJTJDJTIyUSUyMiUzQSUyMjIlMjIlMkMlMjJJJTIyJTNBJTIyMyUyMiUyQyUyMlQlMjIlM0ElMjI0JTIyJTJDJTIyViUyMiUzQSUyMjUlMjIlMkMlMjJSJTIyJTNBJTIyNiUyMiUyQyUyMkglMjIlM0ElMjI3JTIyJTJDJTIyQyUyMiUzQSUyMjglMjIlMkMlMjJQJTIyJTNBJTIyOSUyMiUyQyUyMlUlMjIlM0ElMjIwJTIyJTdEJTJDJTdCJTIyUyUyMiUzQSUyMjElMjIlMkMlMjJXJTIyJTNBJTIyMiUyMiUyQyUyMlolMjIlM0ElMjIzJTIyJTJDJTIyRiUyMiUzQSUyMjQlMjIlMkMlMjJRJTIyJTNBJTIyNSUyMiUyQyUyMkolMjIlM0ElMjI2JTIyJTJDJTIyVCUyMiUzQSUyMjclMjIlMkMlMjJCJTIyJTNBJTIyOCUyMiUyQyUyMlYlMjIlM0ElMjI5JTIyJTJDJTIySSUyMiUzQSUyMjAlMjIlN0QlMkMlN0IlMjJFJTIyJTNBJTIyMSUyMiUyQyUyMkIlMjIlM0ElMjIyJTIyJTJDJTIyUSUyMiUzQSUyMjMlMjIlMkMlMjJWJTIyJTNBJTIyNCUyMiUyQyUyMlglMjIlM0ElMjI1JTIyJTJDJTIyWSUyMiUzQSUyMjYlMjIlMkMlMjJUJTIyJTNBJTIyNyUyMiUyQyUyMkclMjIlM0ElMjI4JTIyJTJDJTIyUyUyMiUzQSUyMjklMjIlMkMlMjJNJTIyJTNBJTIyMCUyMiU3RCU1RA==",
      LIqEm: function (p326, p327) {
        return p326 == p327;
      },
      Kniqk: function (p328, p329) {
        return p328 ^ p329;
      },
      nWtfx: function (p330, p331) {
        return p330 ^ p331;
      },
      RHKeu: function (p332, p333) {
        return p332 ^ p333;
      },
      irGwy: function (p334, p335) {
        return p334 ^ p335;
      },
      pAHkl: function (p336, p337) {
        return p336 + p337;
      },
      viaTM: function (p338, p339) {
        return p338 + p339;
      },
      OyQrT: "yyyy-MM-dd",
      yjcal: function (p340, p341) {
        return p340 - p341;
      },
      caESi: function (p342, p343) {
        return p342 ^ p343;
      },
      lmvvf: function (p344, p345) {
        return p344 + p345;
      },
      wNCIL: "^[A-Z]{20,30}$",
      IdYrt: function (p346, p347) {
        return p346 == p347;
      },
      fHVpX: function (p348, p349) {
        return p348 ^ p349;
      },
      TOkLn: function (p350, p351) {
        return p350 + p351;
      },
      bOpUs: function (p352, p353) {
        return p352 - p353;
      },
      NiWUS: function (p354, p355) {
        return p354 + p355;
      },
      iJHYg: function (p356, p357) {
        return p356 - p357;
      },
      PjaGf: function (p358, p359) {
        return p358 ^ p359;
      },
      eHwoN: function (p360, p361) {
        return p360 ^ p361;
      },
      gpomj: function (p362, p363) {
        return p362 ^ p363;
      },
      KVYJm: function (p364, p365) {
        return p364 ^ p365;
      },
      IUTJF: function (p366, p367) {
        return p366 ^ p367;
      },
      oePqB: function (p368, p369) {
        return p368 && p369;
      },
      WqsAL: function (p370, p371) {
        return p370 ^ p371;
      },
      PcjDd: function (p372, p373) {
        return p372 ^ p373;
      },
      sgOKJ: function (p374, p375) {
        return p374 > p375;
      },
      IRFiY: function (p376, p377) {
        return p376 ^ p377;
      },
      ivdud: function (p378, p379) {
        return p378 == p379;
      },
      ObgrR: function (p380, p381) {
        return p380 ^ p381;
      },
      wEBlE: function (p382, p383) {
        return p382 + p383;
      },
      TAkrR: function (p384, p385) {
        return p384 - p385;
      },
      eaBJQ: function (p386, p387) {
        return p386 ^ p387;
      },
      FKHWD: function (p388, p389) {
        return p388 + p389;
      },
      ffxAP: function (p390, p391) {
        return p390 ^ p391;
      },
      EdKTV: function (p392, p393) {
        return p392 === p393;
      }
    };
    return {
      iv: true,
      pt: 12,
      pc: 30,
      ft: 2
    };
    const v193 = v192.ktDpo;
    const v194 = ["RUhGR1RISVFRVlVKVUtMVU1DTlE="];
    for (let v195 = 0; v195 < v194.length; v195++) {
      const v196 = vRequire2.b64DecodeUnicode(v194[v195]);
      if (p314 === v196) {
        return {
          iv: false,
          pt: 0
        };
      }
    }
    if (v192.LIqEm(p314.length, 20) && p314[19] == "Z") {
      let v197 = false;
      const v198 = p314.charAt(v192.Kniqk(727408, 727412)).charCodeAt();
      const v199 = p314.charAt(9).charCodeAt();
      let v200 = v199 - v198;
      const v201 = {
        P: "1",
        Z: "2",
        D: "3",
        W: "4",
        U: "5",
        B: "6",
        S: "7",
        M: "8",
        G: "9",
        K: "0"
      };
      const v202 = [19, v192.nWtfx(610515, 610527), v192.RHKeu(517971, 517972), 17, 10, 8, v192.RHKeu(129404, 129395), 1];
      const v203 = v201[p314[v202[v192.RHKeu(308521, 308521)]]] + v201[p314[v202[1]]] + v201[p314[v202[v192.irGwy(295362, 295360)]]] + v201[p314[v202[v192.RHKeu(699702, 699701)]]];
      const v204 = v192.pAHkl(v201[p314[v202[4]]], v201[p314[v202[5]]]);
      const v205 = v201[p314[v202[6]]] + v201[p314[v202[7]]];
      const v206 = v192.viaTM(v192.pAHkl(v203 + "-" + v204, "-"), v205);
      const v207 = new Date().Format(v192.OyQrT);
      const v208 = new RegExp("\\d{4}-\\d{2}-\\d{2}", "");
      if (v198 >= 48 && v198 <= 57) {
        v197 = false;
      } else if (v208.test(v206) && v206 > v207) {
        v197 = true;
      } else {
        v197 = false;
      }
      global.logServerInfo.purchaseCodeEndDate = v206;
      global.logServerInfo.purchaseCodeValid = v197;
      global.logServerInfo.purchaseCodeType = v200;
      return {
        iv: v197,
        pt: v200
      };
    } else {
      let v209 = false;
      let v210 = "";
      let v211 = new Date().Format("yyyy-MM-dd");
      const v212 = new RegExp("\\d{4}-\\d{2}-\\d{2}", "");
      global.logServerInfo.purchaseCodeValid = v209;
      if (p314.length != 20 && p314.length != 25 && p314.length != v192.Kniqk(298341, 298363)) {
        return {
          iv: false,
          pt: 0
        };
      }
      if (p314.length == 30) {
        let v213 = p314.split("").reverse().join("");
        let v214 = v213.substring(v213.length - 5, v213.length);
        let v215 = v213.substring(0, v192.yjcal(v213.length, 5));
        let v216 = v215.substring(0, v192.caESi(506950, 506947));
        let v217 = v215.substring(5, v215.length);
        const v218 = v192.pAHkl(v192.lmvvf(v216, v214), v217);
        const v219 = vRequire2.md5Hex(v218);
        if (p315 != v219) {
          return {
            iv: false,
            pt: 0
          };
        }
      }
      const v220 = new RegExp(v192.wNCIL, "");
      if (!v220.test(p314)) {
        return {
          iv: false,
          pt: 0
        };
      }
      let v221 = v192.RHKeu(198789, 198789);
      let v222 = 5;
      let v223 = 1;
      const v224 = p314.charAt(4).charCodeAt();
      const v225 = p314.charAt(9).charCodeAt();
      const v226 = v225 - v224;
      if (v192.IdYrt(p314.length, 20)) {
        v221 = v226;
      } else if (p314.length == 25 || p314.length == 30) {
        const v227 = p314.charAt(20).charCodeAt();
        const v228 = p314.charAt(22).charCodeAt();
        const v229 = (v228 - v227) * v192.RHKeu(492482, 492488);
        v221 = v226 + v229;
        if (v221 === v192.nWtfx(722347, 722307) || v221 === v192.caESi(855097, 855056)) {
          const v230 = p314.charAt(29).charCodeAt();
          const v231 = p314.charAt(v192.fHVpX(308472, 308450)).charCodeAt();
          const v232 = p314.charAt(25).charCodeAt();
          const v233 = p314.charAt(28).charCodeAt();
          const v234 = v192.TOkLn(v192.bOpUs(v230, v231), "");
          const v235 = v232 - v233 + "";
          v222 = v235 + v234;
          if (v222 === "00") {
            v222 = "9999";
          }
          const v236 = p314.charAt(27).charCodeAt();
          const v237 = v192.NiWUS(v192.iJHYg(v236, v227), "");
          v223 = v237;
        } else if (v221 == 0) {
          v222 = "10";
          v223 = "1";
        } else if (v221 <= 3) {
          v222 = "6";
          v223 = "1";
        } else {
          v222 = "9999";
          v223 = "1";
        }
      }
      v221 = parseInt(v221, v192.PjaGf(191957, 191967));
      v222 = parseInt(v222, 10);
      v223 = parseInt(v223, 10);
      if (v221 > 41) {
        return {
          iv: false,
          pt: 0
        };
      }
      const v238 = JSON.parse(vRequire2.b64DecodeUnicode(v193));
      for (let v239 = 0; v239 < v238.length; v239++) {
        const v240 = v238[v239];
        const v241 = [19, 12, v192.eHwoN(560371, 560372), v192.gpomj(379945, 379960), 10, v192.KVYJm(156978, 156986), 15, 1];
        const v242 = v240[p314[v241[0]]];
        const v243 = v240[p314[v241[1]]];
        const v244 = v240[p314[v241[2]]];
        const v245 = v240[p314[v241[v192.IUTJF(978726, 978725)]]];
        if (!v192.oePqB(v242, v243) || !v244 || !v245) {
          continue;
        }
        if (v242 != "2" || v243 != "0" && !v192.IdYrt(v243, "1")) {
          continue;
        }
        const v246 = v242 + v243 + v244 + v245;
        const v247 = v240[p314[v241[v192.WqsAL(717240, 717244)]]];
        const v248 = v240[p314[v241[5]]];
        if (!v247 || !v248) {
          continue;
        }
        const v249 = v247 + v248;
        if (v249 > "12") {
          continue;
        }
        const v250 = v240[p314[v241[6]]];
        const v251 = v240[p314[v241[v192.PcjDd(933562, 933565)]]];
        if (!v250 || !v251) {
          continue;
        }
        const v252 = v250 + v251;
        if (v192.sgOKJ(v249, "31")) {
          continue;
        }
        const v253 = [v192.PcjDd(312700, 312700), v192.IRFiY(658264, 658266), 3, 5, 6, 11, v192.caESi(945917, 945904), 14, v192.eHwoN(390221, 390237), 18, 21, v192.KVYJm(382743, 382720), 24];
        if (v192.ivdud(p314.length, v192.ObgrR(964165, 964177))) {
          for (let v254 = 0; v254 < v192.bOpUs(v253.length, v192.caESi(964754, 964758)); v254++) {
            let v255 = p314.charAt(v253[v254]).charCodeAt();
            let v256 = p314.charAt(v253[v192.wEBlE(v254, v192.caESi(768460, 768461))]).charCodeAt();
            if (v256 - v255 != 1) {
              return {
                iv: false,
                pt: 0
              };
            }
          }
        } else if (p314.length == 25 || p314.length == v192.ObgrR(695963, 695941)) {
          for (let v257 = 0; v257 < v192.TAkrR(v253.length, v192.eaBJQ(924613, 924612)); v257++) {
            let v258 = p314.charAt(v253[v257]).charCodeAt();
            let v259 = p314.charAt(v253[v257 + 1]).charCodeAt();
            if (v259 - v258 != 1) {
              return {
                iv: false,
                pt: 0
              };
            }
          }
        }
        v210 = v192.FKHWD(v246 + "-" + v249 + "-", v252);
        break;
      }
      if (v212.test(v210) && v210 > v211) {
        v209 = true;
      }
      global.logServerInfo.purchaseCodeEndDate = v210;
      global.logServerInfo.purchaseCodeValid = v209;
      global.logServerInfo.purchaseCodeType = v221;
      global.logServerInfo.purchaseCodeProjectCount = v222 || 3;
      let v260 = vRequire2.b64DecodeUnicode(vRequire10.PROJECT_COUNT) + "：" + v222;
      let v261 = vRequire2.b64DecodeUnicode(vRequire10.PROJECT_TYPE) + "：";
      if (v221 === v192.ffxAP(540950, 540990)) {
        v261 += "" + vRequire2.b64DecodeUnicode(vRequire10.PRODUCT_TYPE1);
      } else if (v192.EdKTV(v221, v192.WqsAL(300159, 300118))) {
        v261 += "" + vRequire2.b64DecodeUnicode(vRequire10.PRODUCT_TYPE2);
      }
      let v262 = vRequire2.b64DecodeUnicode(vRequire10.END_DATE) + "：" + v210;
      console.log(v261.cyan);
      console.log(v260.cyan);
      console.log(v262.cyan);
      return {
        iv: v209,
        pt: v221,
        pc: v222,
        ft: v223
      };
    }
  }
  static async consoleLogo() {
    const v263 = {
      cMqxL: " ██║ █╗ ██║ █████╗   ██████╔╝ █████╗   ██║   ██║ ██╔██╗ ██║ ██╔██╗ ██║  ╚████╔╝",
      bIlYq: " ██║    ██║ ██╔════╝ ██╔══██╗ ██╔════╝ ██║   ██║ ████╗  ██║ ████╗  ██║ ╚██╗ ██╔╝",
      XQBCC: "  ╚══╝╚══╝  ╚══════╝ ╚═════╝  ╚═╝       ╚═════╝  ╚═╝  ╚═══╝ ╚═╝  ╚═══╝    ╚═╝"
    };
    const v264 = "9|4|3|6|7|5|8|2|1|0".split("|");
    let v265 = 0;
    while (true) {
      switch (v264[v265++]) {
        case "0":
          console.log("");
          continue;
        case "1":
          console.log(("" + vRequire2.b64DecodeUnicode(vRequire10.SERVER_STARTING)).yellow);
          continue;
        case "2":
          console.log(" ");
          continue;
        case "3":
          console.log(v263.cMqxL.cyan);
          continue;
        case "4":
          console.log(v263.bIlYq.cyan);
          continue;
        case "5":
          console.log(v263.XQBCC.cyan);
          continue;
        case "6":
          console.log(" ██║███╗██║ ██╔══╝   ██╔══██╗ ██╔══╝   ██║   ██║ ██║╚██╗██║ ██║╚██╗██║   ╚██╔╝".cyan);
          continue;
        case "7":
          console.log(" ╚███╔███╔╝ ███████╗ ██████╔╝ ██║      ╚██████╔╝ ██║ ╚████║ ██║ ╚████║    ██║".cyan);
          continue;
        case "8":
          console.log(" ");
          continue;
        case "9":
          console.log(" ██╗    ██╗ ███████╗ ██████╗  ███████╗ ██╗   ██╗ ███╗   ██╗ ███╗   ██╗ ██╗   ██╗".cyan);
          continue;
      }
      break;
    }
  }
  static async ["consoleInfo"](p424) {
    const v266 = {
      eNaNF: function (p425, p426) {
        return p425 + p426;
      },
      ATjST: "启动 ",
      Brick: function (p427, p428) {
        return p427 + p428;
      },
      ygQBp: "pm2 stop webfunny | pm2 delete webfunny"
    };
    if (p424) {
      console.log(v266.eNaNF(v266.ATjST, p424) + " 模式...");
    }
    console.log(("" + vRequire2.b64DecodeUnicode(vRequire10.SERVER_START_SUCCESS)).yellow);
    console.log("");
    console.log(("" + vRequire2.b64DecodeUnicode(vRequire10.SERVER_AUTHOR)).white);
    console.log(("" + vRequire2.b64DecodeUnicode(vRequire10.SERVER_WECHAT)).white);
    console.log(" ");
    console.log("" + vRequire2.b64DecodeUnicode(vRequire10.STARTING_MSG1), (v266.Brick("http://", accountInfo.centerAssetsDomain) + "/wf_center/main.html ").blue.underline);
    console.log("" + vRequire2.b64DecodeUnicode(vRequire10.STARTING_MSG3), "https://www.webfunny.com/desMonitor".blue.underline);
    console.log(" ");
    console.log("" + vRequire2.b64DecodeUnicode(vRequire10.STARTING_MSG4), "npm run prd".cyan);
    console.log("" + vRequire2.b64DecodeUnicode(vRequire10.STARTING_MSG5), "npm run restart".cyan);
    console.log("" + vRequire2.b64DecodeUnicode(vRequire10.STARTING_MSG6), v266.ygQBp.cyan);
    console.log(" ");
    console.log(("" + vRequire2.b64DecodeUnicode(vRequire10.STARTING_MSG7)).cyan);
    console.log("" + vRequire2.b64DecodeUnicode(vRequire10.STARTING_MSG8), "pm2 list".cyan);
    console.log(" ");
    console.log(("" + vRequire2.b64DecodeUnicode(vRequire10.STARTING_MSG9)).green, "https://github.com/a597873885/webfunny_monitor".cyan.underline);
    console.log(" ");
  }
  static async ["checkPurchase"](p429, p430) {
    const v267 = {
      MxkKH: "secretCode",
      iCCJD: function (p431, p432) {
        return p431 === p432;
      },
      dmNuK: function (p433, p434) {
        return p433 ^ p434;
      },
      xamAl: function (p435, p436) {
        return p435 === p436;
      },
      gXoEw: function (p437) {
        return p437();
      },
      INRkF: function (p438, p439) {
        return p438 == p439;
      },
      RgQRs: function (p440) {
        return p440();
      }
    };
    const v268 = ("" + vRequire2.b64DecodeUnicode(vRequire10.VALID_MSG0)).red;
    const v269 = ("" + vRequire2.b64DecodeUnicode(vRequire10.VALID_MSG1)).red;
    const v270 = ("" + vRequire2.b64DecodeUnicode(vRequire10.VALID_MSG)).green;
    const v271 = await ConfigModel.getConfigByConfigName("purchaseCode");
    const v272 = await ConfigModel.getConfigByConfigName(v267.MxkKH);
    if (v267.iCCJD(v272.length, 0)) {
      await ConfigModel.createConfig({
        configName: "secretCode",
        configValue: ""
      });
      C8.restartServer();
      return;
    }
    let v273 = accountInfo.purchaseCode ? accountInfo.purchaseCode : v271[v267.dmNuK(400919, 400919)] ? v271[0].configValue : "";
    let v274 = accountInfo.secretCode ? accountInfo.secretCode : v272[0] ? v272[0].configValue : "";
    const v275 = C8.decryptPurchaseCode(accountInfo.purchaseCode, accountInfo.secretCode);
    if (v275.iv) {
      v273 = accountInfo.purchaseCode;
      v274 = accountInfo.secretCode;
    }
    let v276 = false;
    await vRequire2.postJson("http://www.webfunny.cn/config/isBlacklist", {
      cdkey: v273,
      secretCdKey: v274,
      webfunnyVersion: vF23
    }).then(p441 => {
      v276 = p441.data;
    }).catch(p442 => {
      v276 = false;
    });
    if (v267.xamAl(v276, true)) {
      setTimeout(function () {
        console.log(" ");
        console.log(v268);
        console.log(v269);
        console.log(" ");
        console.log(v270);
        vRequire3.printError(v270);
      }, 8000);
      global.logServerInfo.purchaseCodeValid = false;
      v267.gXoEw(p430);
      return;
    }
    const {
      pt: _0x4c82ca,
      iv: _0x3e5fab
    } = C8.decryptPurchaseCode(v273, v274);
    if (v267.INRkF(_0x3e5fab, true)) {
      const v277 = ip.address();
      const v278 = new Date().getTime();
      vRequire2.postJson("http://www.webfunny.cn/config/memberActiveDeploy", {
        cdkey: v273,
        ip: v277,
        webfunnyVersion: vF23,
        happenTime: v278
      }).then(() => {}).catch(() => {});
      global.logServerInfo.purchaseCodeValid = true;
      global.logServerInfo.productType = _0x4c82ca;
      v267.RgQRs(p429);
    } else {
      setTimeout(() => {
        const v279 = "2|1|0|4|5|3".split("|");
        let v280 = 0;
        while (true) {
          switch (v279[v280++]) {
            case "0":
              console.log(v269);
              continue;
            case "1":
              console.log(v268);
              continue;
            case "2":
              console.log(" ");
              continue;
            case "3":
              vRequire3.printError(v270);
              continue;
            case "4":
              console.log(" ");
              continue;
            case "5":
              console.log(v270);
              continue;
          }
          break;
        }
      }, 8000);
      p430();
    }
  }
  static async restartServer() {
    const v281 = {
      qoTOJ: "重启命令失败error：",
      loKaa: "重启命令失败stderr：",
      RzTra: "即将执行重启命令... 如果15s后未重启，请手动执行：npm run restart"
    };
    console.log(v281.RzTra);
    vRequire8.exec("npm run restart &", function (p443, p444, p445) {
      if (p443) {
        vRequire3.printError(v281.qoTOJ, p443);
        vRequire3.printError("重启命令失败stdout：", p444);
        vRequire3.printError(v281.loKaa, p445);
      }
    });
  }
}
class C9 {
  static async getLogCountByDay(p446) {
    let v282 = p446.request.body;
    const {
      level = "error",
      webMonitorId: _0x3cc17b
    } = v282;
    let v283 = await TraceDataModel.getLogCountByDay(_0x3cc17b, level);
    v283 = vRequire2.handleDateResult(v283, 90);
    p446.response.status = 200;
    p446.body = vRequire4.SUCCESS_200("success", v283);
  }
  static async getLogListGroupByMsg(p447) {
    const v284 = {
      TiLSF: "success"
    };
    let v285 = p447.request.body;
    const {
      webMonitorId: _0x31fa96,
      day: _0xdf0311
    } = v285;
    const v286 = await TraceDataModel.getLogListGroupByMsg(_0x31fa96, _0xdf0311);
    p447.response.status = 200;
    p447.body = vRequire4.SUCCESS_200(v284.TiLSF, v286);
  }
  static async getTraceDataList(p448) {
    const v287 = {
      XYJUl: "success"
    };
    let v288 = p448.request.body;
    const {
      webMonitorId: _0x36e711,
      message: _0x5c6d9d,
      day: _0x2b074e
    } = v288;
    const v289 = await TraceDataModel.getTraceDataList(_0x36e711, _0x5c6d9d, _0x2b074e);
    p448.response.status = 200;
    p448.body = vRequire4.SUCCESS_200(v287.XYJUl, v289);
  }
  static async ["getTraceDataBySearch"](p449) {
    const v290 = {
      GNgfV: "success"
    };
    let v291 = p449.request.body;
    const {
      searchType: _0xf44dde,
      searchValue: _0x2cd5cb,
      projectId: _0x1901fd
    } = v291;
    const v292 = await TraceDataModel.getTraceDataBySearch(_0x1901fd, _0xf44dde, _0x2cd5cb);
    p449.response.status = 200;
    p449.body = vRequire4.SUCCESS_200(v290.GNgfV, v292);
  }
}
module.exports = {
  CommonTableController: C,
  Common: C2,
  ConfigController: C3,
  LogDataController: C4,
  CommonUpLog: C5,
  TimerCalculateController: C6,
  LogProjectController: C7,
  CommonUtil: C8,
  TraceDataController: C9
};
function f40(p450) {
  const v294 = {
    TZgVc: function (p451, p452) {
      return p451 + p452;
    },
    xMKya: function (p453, p454) {
      return p453 / p454;
    },
    LvMNi: function (p455, p456) {
      return p455 === p456;
    },
    mvvdJ: "gger",
    DmcMX: function (p457, p458) {
      return p457 + p458;
    },
    jlmVr: function (p459, p460) {
      return p459(p460);
    }
  };
  function f41(p461) {
    function f42(p462, p463, p464, p465, p466) {
      return f24(p466 - 947, p464);
    }
    if (typeof p461 === "string") {
      return function (p472) {}.constructor("while (true) {}").apply("counter");
    } else if (v294.TZgVc("", v294.xMKya(p461, p461))["length"] !== 1 || v294.LvMNi(p461 % 20, 0)) {
      (function () {
        return true;
      }).constructor("debu" + v294.mvvdJ).call("action");
    } else {
      (function () {
        return false;
      }).constructor(v294.DmcMX("debu", "gger")).apply("stateObject");
    }
    function f45(p478, p479, p480, p481, p482) {
      return f17(p480 - -300, p478);
    }
    function f46(p483, p484, p485, p486, p487) {
      return f24(p487 - -845, p486);
    }
    function f47(p488, p489, p490, p491, p492) {
      return f17(p490 - -921, p489);
    }
    function f49(p498, p499, p500, p501, p502) {
      return f24(p502 - 557, p500);
    }
    f41(++p461);
  }
  try {
    if (p450) {
      return f41;
    } else {
      v294.jlmVr(f41, 0);
    }
  } catch (_0x2f9415) {}
}