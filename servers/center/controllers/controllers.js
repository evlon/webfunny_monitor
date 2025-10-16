(function (p, p2) {
  function f(p3, p4, p5, p6, p7) {
    return f26(p6 - -674, p7);
  }
  function f2(p8, p9, p10, p11, p12) {
    return f18(p12 - -454, p9);
  }
  function f3(p13, p14, p15, p16, p17) {
    return f18(p14 - -513, p15);
  }
  function f4(p18, p19, p20, p21, p22) {
    return f18(p18 - -644, p21);
  }
  const vP = p();
  function f5(p23, p24, p25, p26, p27) {
    return f26(p27 - 529, p26);
  }
  function f6(p28, p29, p30, p31, p32) {
    return f26(p32 - 828, p31);
  }
  function f7(p33, p34, p35, p36, p37) {
    return f18(p37 - -478, p35);
  }
  function f8(p38, p39, p40, p41, p42) {
    return f26(p42 - -610, p39);
  }
  function f9(p43, p44, p45, p46, p47) {
    return f26(p45 - -622, p46);
  }
  function f10(p48, p49, p50, p51, p52) {
    return f18(p49 - 330, p50);
  }
  do {
    try {
      const v = parseInt(f4(234, 911, 1081, -971, 836)) / 1 + -parseInt(f8(1650, "@kGa", 782, 2352, 1398)) / 2 * (-parseInt(f7(401, -911, -518, -678, 176)) / 3) + parseInt(f8(431, "J@h)", 1205, 620, 160)) / 4 * (-parseInt(f4(1692, 1400, 1675, 1350, 2638)) / 5) + parseInt(f8(-1125, "fphQ", 152, -1168, -74)) / 6 * (parseInt(f3(245, 490, 336, 1157, -222)) / 7) + -parseInt(f6(3553, 2920, 2529, "oZn7", 2422)) / 8 + parseInt(f6(2987, 2234, 2546, "C)yZ", 1814)) / 9 * (parseInt(f(2669, 1239, 907, 1747, "#&cg")) / 10) + parseInt(f7(-47, 1048, 606, 312, -198)) / 11 * (-parseInt(f8(65, "BoaE", 380, 541, 409)) / 12);
      if (v === p2) {
        break;
      } else {
        vP.push(vP.shift());
      }
    } catch (_0x4173f2) {
      vP.push(vP.shift());
    }
  } while (true);
})(f31, 669017);
(function () {
  function f13(p65, p66, p67, p68, p69) {
    return f26(p67 - 138, p65);
  }
  const v5 = {
    OstJt: f13("K$bK", 1302, 180, 907, 1208),
    KgDOC: function (p70, p71) {
      return p70 + p71;
    }
  };
})();
const vRequire = require("../config/db");
function f18(p92, p93) {
  const v_0x3b28 = f31();
  f18 = function (p94, p95) {
    p94 = p94 - 0;
    let v8 = v_0x3b28[p94];
    if (f18.RYCoJt === undefined) {
      function f19(p96) {
        const v9 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let v10 = "";
        let v11 = "";
        for (let v12 = 0, v13, v14, v15 = 0; v14 = p96.charAt(v15++); ~v14 && (v13 = v12 % 4 ? v13 * 64 + v14 : v14, v12++ % 4) ? v10 += String.fromCharCode(v13 >> (v12 * -2 & 6) & 255) : 0) {
          v14 = v9.indexOf(v14);
        }
        for (let v16 = 0, v17 = v10.length; v16 < v17; v16++) {
          v11 += "%" + ("00" + v10.charCodeAt(v16).toString(16)).slice(-2);
        }
        return decodeURIComponent(v11);
      }
      f18.Uwatmv = f19;
      p92 = arguments;
      f18.RYCoJt = true;
    }
    const v18 = v_0x3b28[0];
    const v19 = p94 + v18;
    const v20 = p92[v19];
    if (!v20) {
      v8 = f18.Uwatmv(v8);
      p92[v19] = v8;
    } else {
      v8 = v20;
    }
    return v8;
  };
  return f18(p92, p93);
}
undefined;
const vRequire2 = require("moment");
const v22 = vRequire.sequelize;
const vRequire3 = require("colors");
const vRequire4 = require("../util/utils");
const vRequire5 = require("../util/utils");
const vRequire6 = require("../../../util_cus");
const vRequire7 = require("../../../config/log");
const vRequire8 = require("../util/status-code");
const {
  UPLOAD_TYPE,
  FLOW_TYPE,
  PROJECT_INFO,
  USER_INFO,
  WEBFUNNY_CONFIG_URI,
  PRODUCT_INFO_URI,
  MONITOR_LOCAL_SERVER,
  EVENT_LOCAL_SERVER
} = require("../config/consts");
const vRequire9 = require("node-fetch");
const vRequire10 = require("jsonwebtoken");
const vRequire11 = require("../config/secret");
const vRequire12 = require("node-xlsx");
const fs2 = require("fs");
const vRequire13 = require("nodemailer");
const vRequire14 = require("formidable");
const vRequire15 = require("../config/AccountConfig");
const vRequire16 = require("child_process");
const vRequire17 = require("getmac");
const ip = require("ip");
const vRequire18 = require("systeminformation");
const {
  spawn,
  exec,
  execFile
} = require("child_process");
const {
  accountInfo
} = vRequire15;
const {
  feiShuConfig,
  idsConfig
} = require("../../../sso");
const vRequire19 = require("../config/consts");
const {
  PROJECT_API,
  LOCAL_SERVER,
  ALARM_INDEX_ENUM
} = vRequire19;
const v23 = {
  monitor: "监控",
  event: "埋点"
};
const vRequire20 = require("../../../alarm/dingding");
const vRequire21 = require("../../../alarm/feishu");
const vRequire22 = require("../../../alarm/weixin");
const {
  UserTokenModel,
  AlarmItemModel,
  AlarmRuleModel,
  ApplicationConfigModel,
  CommonTableModel,
  AlarmTriggerModel,
  CompanyModel,
  ConfigModel,
  FlowDataInfoByDayModel,
  FlowDataInfoByHourModel,
  MenuPermissionsModel,
  MessageModel,
  NoticeTemplateModel,
  NoticeSettingModel,
  OrderInfoModel,
  ProductModel,
  TeamModel,
  TriggerConditionModel,
  UserModel
} = require("../modules/models.js");
function f26(p126, p127) {
  const v_0x3b282 = f31();
  f26 = function (p128, p129) {
    p128 = p128 - 0;
    let v24 = v_0x3b282[p128];
    if (f26.VePTDI === undefined) {
      function f27(p130) {
        const v25 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let v26 = "";
        let v27 = "";
        for (let v28 = 0, v29, v30, v31 = 0; v30 = p130.charAt(v31++); ~v30 && (v29 = v28 % 4 ? v29 * 64 + v30 : v30, v28++ % 4) ? v26 += String.fromCharCode(v29 >> (v28 * -2 & 6) & 255) : 0) {
          v30 = v25.indexOf(v30);
        }
        for (let v32 = 0, v33 = v26.length; v32 < v33; v32++) {
          v27 += "%" + ("00" + v26.charCodeAt(v32).toString(16)).slice(-2);
        }
        return decodeURIComponent(v27);
      }
      const vF2 = function (p131, p132) {
        let v34 = [];
        let v35 = 0;
        let v36;
        let v37 = "";
        p131 = f27(p131);
        let v38;
        for (v38 = 0; v38 < 256; v38++) {
          v34[v38] = v38;
        }
        for (v38 = 0; v38 < 256; v38++) {
          v35 = (v35 + v34[v38] + p132.charCodeAt(v38 % p132.length)) % 256;
          v36 = v34[v38];
          v34[v38] = v34[v35];
          v34[v35] = v36;
        }
        v38 = 0;
        v35 = 0;
        for (let v39 = 0; v39 < p131.length; v39++) {
          v38 = (v38 + 1) % 256;
          v35 = (v35 + v34[v38]) % 256;
          v36 = v34[v38];
          v34[v38] = v34[v35];
          v34[v35] = v36;
          v37 += String.fromCharCode(p131.charCodeAt(v39) ^ v34[(v34[v38] + v34[v35]) % 256]);
        }
        return v37;
      };
      f26.fkhFZW = vF2;
      p126 = arguments;
      f26.VePTDI = true;
    }
    const v40 = v_0x3b282[0];
    const v41 = p128 + v40;
    const v42 = p126[v41];
    if (!v42) {
      if (f26.XldlMP === undefined) {
        f26.XldlMP = true;
      }
      v24 = f26.fkhFZW(v24, p129);
      p126[v41] = v24;
    } else {
      v24 = v42;
    }
    return v24;
  };
  return f26(p126, p127);
}
undefined;
class C {
  static async create(p137) {
    let v44 = p137.request.body;
    if (v44.title && v44.author && v44.content && v44.category) {
      let v45 = await UserTokenModel.createUserToken(v44);
      let v46 = await UserTokenModel.getUserTokenDetail(v45.id);
      p137.response.status = 200;
      p137.body = vRequire8.SUCCESS_200("创建信息成功", v46);
    } else {
      p137.response.status = 412;
      p137.body = vRequire8.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async getAllTokens() {
    const v47 = await UserTokenModel.getAllTokens();
    return v47;
  }
  static async getUserTokenDetailByToken(p138) {
    const v48 = await UserTokenModel.getUserTokenDetailByToken(p138);
    return v48;
  }
  static async ["getUserTokenFromNetworkByToken"](p139) {
    const v49 = {
      MzZiH: "创建信息成功"
    };
    let v50 = p139.request.body;
    const v51 = await UserTokenModel.getUserTokenDetailByToken(v50.token);
    p139.response.status = 200;
    p139.body = vRequire8.SUCCESS_200(v49.MzZiH, v51);
  }
  static async checkToken(p140) {
    const v52 = {
      cZFsZ: function (p141, p142) {
        return p141 ^ p142;
      },
      wmIlh: function (p143, p144) {
        return p143 ^ p144;
      }
    };
    p140.response.status = v52.cZFsZ(197153, 197353);
    p140.body = vRequire8.SUCCESS_200("Token验证通过！", v52.wmIlh(963480, 963480));
  }
}
class C2 {
  static async getAlarmCountOverview(p150) {
    const v53 = {
      XgRDk: "count()",
      RuOOz: function (p151, p152) {
        return p151(p152);
      }
    };
    const {
      companyId: _0x2f1e90
    } = p150.user;
    const v54 = await AlarmTriggerModel.getTotalHighCount(_0x2f1e90);
    const v55 = await AlarmTriggerModel.getTotalMediumCount(_0x2f1e90);
    const v56 = await AlarmTriggerModel.getTotalLowCount(_0x2f1e90);
    const vNumber = Number(v54[0][v53.XgRDk]);
    const v57 = v53.RuOOz(Number, v55[0]["count()"]);
    const vNumber2 = Number(v56[0][v53.XgRDk]);
    const v58 = vNumber + v57 + vNumber2;
    p150.response.status = 200;
    p150.body = vRequire8.SUCCESS_200("查询成功", {
      highCount: vNumber,
      mediumCount: v57,
      lowCount: vNumber2,
      total: v58
    });
  }
  static async getOverviewTrend(p153) {
    const v59 = {
      Gsmke: function (p154, p155) {
        return p154(p155);
      },
      MpkGS: "YYYY-MM-DD",
      bwGus: function (p156, p157) {
        return p156 ^ p157;
      },
      hEmjM: function (p158, p159) {
        return p158 ^ p159;
      }
    };
    const {
      startTime: _0x577593,
      endTime: _0xd1c4e5
    } = JSON.parse(p153.request.body);
    const {
      companyId: _0x3ca45a
    } = p153.user;
    const v60 = vRequire2(_0xd1c4e5).diff(v59.Gsmke(vRequire2, _0x577593), "days");
    const v61 = new Map();
    const v62 = {
      highTrend: [[], []],
      mediumTrend: [[], []],
      lowTrend: [[], []]
    };
    const v63 = await AlarmTriggerModel.getAlarmTrendByDay(_0x577593, _0xd1c4e5, _0x3ca45a);
    for (let vV60 = v60; vV60 >= 0; vV60--) {
      const v64 = v59.Gsmke(vRequire2, _0xd1c4e5).subtract(vV60, "days").format(v59.MpkGS);
      v62.lowTrend[0].push(v64);
      v62.mediumTrend[0].push(v64);
      v62.highTrend[0].push(v64);
      const v65 = v63.filter(p160 => p160.day === v64 && p160.ruleLevel === 1);
      const v66 = v63.filter(p161 => p161.day === v64 && p161.ruleLevel === 2);
      const v67 = v63.filter(p162 => p162.day === v64 && p162.ruleLevel === 3);
      if (v65 && v65.length) {
        v62.lowTrend[1].push(v65[0].count);
      } else {
        v62.lowTrend[v59.bwGus(564940, 564941)].push(0);
      }
      if (v66 && v66.length) {
        v62.mediumTrend[1].push(v66[0].count);
      } else {
        v62.mediumTrend[v59.hEmjM(594071, 594070)].push(0);
      }
      if (v67 && v67.length) {
        v62.highTrend[1].push(v67[0].count);
      } else {
        v62.highTrend[1].push(0);
      }
    }
    p153.response.status = 200;
    p153.body = vRequire8.SUCCESS_200("查询成功", v62);
  }
  static async ["getAlarmLatestTop10"](p163) {
    const v68 = {
      CLIgW: "查询成功"
    };
    const {
      companyId: _0x32c7c0
    } = p163.user;
    const v69 = await AlarmTriggerModel.getLatest10AlarmTrigger(_0x32c7c0);
    const v70 = [];
    for (const v71 of v69) {
      const {
        alarmContent: _0x4b80e7,
        triggerTime: _0x405816,
        dataId: _0x31c42b,
        ruleLevel: _0x5aee60,
        application: _0x41142b
      } = v71;
      const v72 = {
        content: _0x4b80e7,
        application: _0x41142b,
        level: _0x5aee60,
        happenTime: _0x405816,
        id: _0x31c42b
      };
      v70.push(v72);
    }
    p163.response.status = 200;
    p163.body = vRequire8.SUCCESS_200(v68.CLIgW, v70);
  }
  static async getAlarmApplicationTop10(p164) {
    const v73 = {
      ApCfS: function (p165, p166) {
        return p165 ^ p166;
      },
      ieYiT: function (p167, p168) {
        return p167 ^ p168;
      },
      HRCTz: function (p169, p170) {
        return p169 ^ p170;
      },
      UqVwA: function (p171, p172) {
        return p171 ^ p172;
      },
      ofDSU: function (p173, p174) {
        return p173 + p174;
      },
      tgOuD: "mediumCount",
      ccPmx: function (p175, p176) {
        return p175 ^ p176;
      },
      ucxDY: "total",
      zrfDU: "查询成功"
    };
    const {
      companyId: _0x3b1ff0
    } = p164.user;
    const v74 = await AlarmTriggerModel.getAlarmTriggerRuleAndApplication(_0x3b1ff0);
    const v75 = new Map();
    for (const v76 of v74) {
      const {
        application: _0x2edade,
        ruleLevel: _0x636119
      } = v76;
      const v77 = v75.get(_0x2edade);
      switch (_0x636119) {
        case 1:
          {
            if (!v77) {
              v75.set(_0x2edade, {
                lowCount: 1
              });
            } else {
              const {
                lowCount: _0x59cd04
              } = v77;
              v75.set(_0x2edade, {
                ...v77,
                lowCount: _0x59cd04 ? _0x59cd04 + v73.ApCfS(118660, 118661) : v73.ieYiT(397597, 397596)
              });
            }
            break;
          }
        case 2:
          {
            if (!v77) {
              v75.set(_0x2edade, {
                mediumCount: 1
              });
            } else {
              const {
                mediumCount: _0x4e2490
              } = v77;
              v75.set(_0x2edade, {
                ...v77,
                mediumCount: _0x4e2490 ? _0x4e2490 + 1 : 1
              });
            }
            break;
          }
        case 3:
          {
            if (!v77) {
              v75.set(_0x2edade, {
                highCount: 1
              });
            } else {
              const {
                highCount: _0x1d3eae
              } = v77;
              v75.set(_0x2edade, {
                ...v77,
                highCount: _0x1d3eae ? _0x1d3eae + v73.HRCTz(589344, 589345) : 1
              });
            }
          }
      }
    }
    for (const v78 of v75.entries()) {
      const v79 = v78[1];
      let {
        lowCount: _0x1b804c,
        mediumCount: _0x2ab1eb,
        highCount: _0x5c303a
      } = v79;
      _0x1b804c = _0x1b804c ? _0x1b804c : 0;
      _0x2ab1eb = _0x2ab1eb ? _0x2ab1eb : v73.UqVwA(488155, 488155);
      _0x5c303a = _0x5c303a ? _0x5c303a : 0;
      const v80 = v73.ofDSU(_0x1b804c, _0x2ab1eb) + _0x5c303a;
      v79.total = v80;
      v75.set(v78[0], v79);
    }
    const v81 = [];
    for (const v82 of v75.entries()) {
      const v83 = {
        application: v82[0],
        highCount: v82[1].highCount,
        mediumCount: v82[1][v73.tgOuD],
        lowCount: v82[v73.ccPmx(211560, 211561)].lowCount,
        total: v82[v73.ccPmx(382703, 382702)][v73.ucxDY]
      };
      v81.push(v83);
    }
    p164.response.status = 200;
    p164.body = vRequire8.SUCCESS_200(v73.zrfDU, v81);
  }
}
class C3 {
  static ["alarmCycleCountMap"] = new Map();
  static ["AlarmIndexEnum"] = {
    pvCount: "\u8BBF\u95EE\u91CF",
    uvCount: "\u8BBF\u95EE\u4EBA\u6570",
    healthScore: "\u5065\u5EB7\u5206",
    jsErrorCount: "\u4EE3\u7801\u9519\u8BEF\u91CF",
    jsErrorPer: "\u4EE3\u7801\u9519\u8BEF\u7387",
    consoleErrorCount: "\u81EA\u5B9A\u4E49\u9519\u8BEF\u91CF",
    consoleErrorPer: "\u81EA\u5B9A\u4E49\u9519\u8BEF\u7387",
    resourceErrorCount: "\u9759\u6001\u8D44\u6E90\u9519\u8BEF\u91CF",
    resourceErrorPer: "\u9759\u6001\u8D44\u6E90\u9519\u8BEF\u7387",
    httpErrorCount: "\u63A5\u53E3\u9519\u8BEF\u91CF",
    httpErrorPer: "\u63A5\u53E3\u9519\u8BEF\u7387"
  };
  static async getAlarmList(p177) {
    const v84 = {
      qhmTq: function (p178, p179) {
        return p178 < p179;
      },
      oxFmd: function (p180, p181) {
        return p180 - p181;
      },
      szpga: function (p182, p183) {
        return p182 * p183;
      },
      zxZpc: function (p184, p185) {
        return p184 ^ p185;
      },
      MLTIP: function (p186, p187) {
        return p186 ^ p187;
      }
    };
    let v85 = vRequire4.parseQs(p177.request.url);
    const {
      page = 1,
      pageSize = 10,
      applicationId: _0xe784c8,
      level: _0x2ad8c5,
      keyword: _0x52dc3a,
      status: _0x34f72a
    } = v85;
    const {
      userId: _0x2d460c,
      userType: _0x52fac6,
      companyId: _0x31bdd0
    } = p177.user;
    const v86 = await AlarmItemModel.getAlarmItemDetails(_0x31bdd0, _0x2ad8c5, _0x52dc3a, page, pageSize);
    const v87 = await UserModel.getUserList();
    const v88 = await TeamModel.getTeamList(_0x2d460c, _0x52fac6, _0x31bdd0);
    const v89 = await vRequire4.ajaxInside("get", "" + MONITOR_LOCAL_SERVER + PROJECT_API.GET_PROJECT_LIST_ALL);
    const v90 = v89.data;
    for (let v91 = 0; v84.qhmTq(v91, v86.length); v91++) {
      const v92 = v86[v91];
      const v93 = v90.filter(p188 => p188.webMonitorId === v92.applicationId);
      if (v93 && v93.length) {
        v92.application = v93[0].projectName;
      } else {
        v92.application = "unknown";
      }
      const v94 = await TriggerConditionModel.getTriggerConditionsById(v92.ruleId);
      v92.triggerConditions = v94;
      const v95 = await AlarmTriggerModel.getAlarmItemTrendForMinutes(20, v92.id);
      const v96 = [];
      for (let v97 = 0; v97 < 20; v97++) {
        const v98 = new Date(v84.oxFmd(new Date().getTime(), v84.szpga(v97 * 60, 1000))).Format("yyyy-MM-dd hh:mm");
        const v99 = v95.filter(p189 => p189.minutes === v98);
        if (v99 && v99.length) {
          v96.push(v99[0].count);
        } else {
          v96.push(0);
        }
      }
      v92.trendArray = v96.reverse();
      const v100 = await AlarmTriggerModel.getNewestAlarmItem(v92.applicationId, v92.ruleId);
      if (v100 && v100.length) {
        const v101 = v100[v84.zxZpc(215606, 215606)];
        v92.happenTime = v101.triggerTime;
      }
      const v102 = await NoticeSettingModel.getNoticeSettingsById(v92.noticeId);
      for (const v103 of v102) {
        const {
          noticePeopleId: _0x506a50,
          noticeTeamId: _0x37c547
        } = v103;
        const v104 = v87.find(p190 => p190.userId === _0x506a50)?.nickname;
        const v105 = v88.find(p191 => p191.companyId === _0x37c547)?.teamName;
        v103.noticePeopleName = v104;
        v103.noticeTeamName = v105;
      }
      v92.notice = v102;
      if (v92.ruleStatus === 0) {
        v92.status = -1;
      }
    }
    const v106 = await AlarmItemModel.countAlarmItem(_0x31bdd0);
    const v107 = v106 && v106.length ? v106[v84.zxZpc(846112, 846112)].count * v84.MLTIP(916632, 916633) : 0;
    p177.response.status = 200;
    p177.body = vRequire8.SUCCESS_200("查询成功", {
      alarmListResults: v86,
      total: v107
    });
  }
  static async getAlarmHistory(p192) {
    const v108 = {
      GBNcl: "查询成功"
    };
    const {
      startTime: _0x38843f,
      endTime: _0x4f8cd6,
      id: _0x597b0f
    } = JSON.parse(p192.request.body);
    const v109 = await AlarmTriggerModel.getAlarmItemTrendByDay(_0x38843f, _0x4f8cd6, _0x597b0f);
    const v110 = vRequire4.handleDateResult(v109, 30);
    p192.response.status = 200;
    p192.body = vRequire8.SUCCESS_200(v108.GBNcl, v110);
  }
  static async getAlarmTriggerListBySize(p193) {
    const v111 = {
      hgqeM: "查询成功"
    };
    const {
      webMonitorId: _0x15fb4f,
      size = 3
    } = p193.request.body;
    const v112 = await AlarmTriggerModel.getAlarmTriggerListBySize(_0x15fb4f, size);
    p193.response.status = 200;
    p193.body = vRequire8.SUCCESS_200(v111.hgqeM, v112);
  }
  static async convergenceAlarm({
    alarmContent: _0x36a5e7,
    ruleId: _0x6b7651,
    weekDay: _0x12f03b,
    curTime: _0x19d92c,
    projectName: _0x15e245,
    projectId: _0x372163,
    alarmTriggerId: _0x46d17a
  }) {
    const v113 = {
      gCQie: function (p194, p195) {
        return p194 ^ p195;
      },
      oWQQP: function (p196, p197) {
        return p196 ^ p197;
      },
      zrOYl: "alarmCount",
      xDNEk: "seriousCount",
      jJrbP: "warningCount",
      OABvP: "triggerConditions",
      EHdDc: "infoCount",
      YqoAg: function (p198, p199) {
        return p198 ^ p199;
      }
    };
    const v114 = _0x372163 + "-" + _0x6b7651;
    const v115 = C3.alarmCycleCountMap.get(v114);
    if (v115.continuityCount === v113.gCQie(731855, 731854) && v115.alarmCount === v113.oWQQP(546500, 546500)) {
      await C3.sendAlarm(_0x36a5e7, _0x6b7651, _0x12f03b, _0x19d92c, _0x15e245, _0x372163);
      await AlarmTriggerModel.updateAlarmTrigger(_0x46d17a, {
        pushStatus: 1
      });
      v115.alarmCount += 1;
    } else if (v115.continuityCount === Math.pow(2, v115[v113.zrOYl])) {
      await C3.sendAlarm(_0x36a5e7, _0x6b7651, _0x12f03b, _0x19d92c, _0x15e245, _0x372163);
      await AlarmTriggerModel.updateAlarmTrigger(_0x46d17a, {
        pushStatus: 1
      });
      v115[v113.zrOYl] += 1;
    }
    for (let v116 = 0; v116 < v115.triggerConditions.length; ++v116) {
      v115.triggerConditions[v116][v113.xDNEk] = 0;
      v115.triggerConditions[v116][v113.jJrbP] = 0;
      v115[v113.OABvP][v116][v113.EHdDc] = 0;
    }
    if (_0x19d92c === "00:00:01") {
      v115.continuityCount = 0;
      v115.alarmCount = v113.YqoAg(895361, 895361);
    }
    C3.alarmCycleCountMap.set(v114, v115);
  }
  static async ["calculateAlarm"](p200, p201, p202) {
    const v117 = {
      TIMnC: function (p203, p204) {
        return p203 ^ p204;
      },
      Zbfqp: function (p205, p206) {
        return p205 < p206;
      },
      mWIpR: function (p207, p208) {
        return p207 ^ p208;
      },
      WtSgM: function (p209, p210) {
        return p209 ^ p210;
      },
      xdABI: "continuityCount",
      PgloT: function (p211, p212) {
        return p211 === p212;
      },
      TPYNL: function (p213, p214) {
        return p213 ^ p214;
      },
      WdyxO: function (p215, p216) {
        return p215 ^ p216;
      },
      PCJoY: function (p217, p218) {
        return p217 * p218;
      },
      cKvhN: "alarmCount",
      PkKyD: "triggerConditions",
      uGTxq: function (p219, p220) {
        return p219 > p220;
      },
      ldZap: function (p221, p222) {
        return p221 > p222;
      },
      DYSyR: function (p223, p224) {
        return p223 >= p224;
      },
      poSzv: function (p225, p226) {
        return p225 ^ p226;
      },
      XOAdv: function (p227, p228) {
        return p227 + p228;
      },
      fYuAy: function (p229, p230) {
        return p229 * p230;
      },
      CCyiL: function (p231, p232) {
        return p231 ^ p232;
      },
      mOzaY: "tempConditionRes2",
      KxhJq: function (p233, p234) {
        return p233 ^ p234;
      }
    };
    const v118 = await AlarmItemModel.getAlarmItem();
    for (let v119 = v117.TIMnC(390971, 390971); v117.Zbfqp(v119, v118.length); v119++) {
      const v120 = v118[v119];
      const {
        applicationId: _0x499c48,
        ruleId: _0x4baba7,
        alarmStatus: _0x1e58f7,
        latestHappen: _0xd31aae,
        id: _0x14784e,
        companyId: _0x48b66d
      } = v120;
      const v121 = await vRequire4.ajaxInside("post", "" + MONITOR_LOCAL_SERVER + PROJECT_API.MONITOR_PROJECT_SIMPLE_LIST_BY_WEBMONITOR_IDS, {
        webMonitorIds: _0x499c48
      });
      const v122 = v121.data;
      if (v122 && v122.length === 0) {
        continue;
      }
      const v123 = v122[v117.mWIpR(701680, 701680)];
      const {
        projectName: _0x291f59
      } = v123;
      const v124 = await AlarmRuleModel.getAlarmRuleByRuleId(_0x4baba7);
      const v125 = await NoticeTemplateModel.getNoticeTemplateById(v124.relatedNoticeId);
      const v126 = v125 && v125.length ? v125[v117.WtSgM(481083, 481083)] : {};
      const {
        alarmLevel: _0x5091ab,
        alarmContent: _0x315577,
        status: _0x1e1a0d
      } = v124;
      if (!_0x1e1a0d) {
        const v127 = C3.alarmCycleCountMap.get(_0x499c48 + "-" + _0x4baba7);
        if (v127 && v127[v117.xdABI]) {
          v127.continuityCount = 0;
        }
        if (v127 && v127.alarmCount) {
          v127.alarmCount = 0;
        }
        continue;
      }
      const v128 = await TriggerConditionModel.getTriggerConditionsById(_0x4baba7);
      const {
        conditionMeetWay: _0x2a48e9,
        timeInterval: _0x1476f5,
        statCycle: _0x597696
      } = v128[0];
      const v129 = p202.substring(3, 5) * 1;
      if (!v117.PgloT(v129 % _0x597696, 0)) {
        console.log("时间不符合计算周期，跳过", v129, _0x597696);
        continue;
      }
      const v130 = vRequire4.getUuid();
      if (_0x2a48e9 === v117.WtSgM(398519, 398518)) {
        const v131 = v128.length;
        let v132 = 0;
        for (let v133 = 0; v133 < v131; ++v133) {
          const v134 = await C3.checkIfTriggerCondition(v128, v133, p200, _0x499c48, _0x4baba7);
          console.log("tempConditionRes", v134);
          const {
            resultFlag: _0x190528,
            durationComplete: _0x56c820
          } = v134;
          if (_0x56c820 === false) {
            console.log("未满计算周期，跳过");
            break;
          }
          if (_0x190528) {
            v132++;
          }
        }
        const v135 = C3.alarmCycleCountMap.get(_0x499c48 + "-" + _0x4baba7);
        if (!v135.continuityCount) {
          v135.continuityCount = 0;
        }
        if (!v135.alarmCount) {
          v135.alarmCount = v117.TPYNL(978750, 978750);
        }
        console.log("触发条件判断：", v132, v131, v132 !== v131, _0x1e58f7);
        if (v132 !== v131) {
          if (v117.PgloT(_0x1e58f7 * v117.WdyxO(387637, 387636), 2)) {
            continue;
          }
          if (v126.noticeType.indexOf("2") !== -1) {
            await C3.sendAlarm("【告警已恢复】" + _0x315577 + ("已连续告警 " + v117.PCJoY(v135.alarmCount, v117.TIMnC(174476, 174477)) + " 次;"), _0x4baba7, p201, p202, _0x291f59, _0x499c48);
          }
          await AlarmItemModel.updateAlarmItem(_0x14784e, {
            alarmStatus: 2
          });
          v135[v117.xdABI] = 0;
          v135[v117.cKvhN] = 0;
          continue;
        }
        if (v132 === v131) {
          const v136 = v135[v117.xdABI];
          v135.continuityCount = v136 + v117.mWIpR(170120, 170121);
          await AlarmItemModel.updateAlarmItem(_0x14784e, {
            alarmStatus: 1
          });
        }
        const v137 = vRequire2().format("YYYY-MM-DD HH:mm:ss");
        let v138 = v117.TIMnC(476191, 476186);
        for (let v139 = 0; v117.Zbfqp(v139, v135.triggerConditions.length); ++v139) {
          const {
            seriousCount: _0x33ae16,
            warningCount: _0x2fa072,
            infoCount: _0x6ab5fd
          } = v135[v117.PkKyD][v139];
          if (_0x33ae16 > 0) {
            v138 = 1;
          } else if (v117.uGTxq(_0x2fa072, 0) && v138 >= 2) {
            v138 = 2;
          } else if (v117.ldZap(_0x6ab5fd, 0) && v117.DYSyR(v138, v117.poSzv(258366, 258365))) {
            v138 = 3;
          } else if (v138 >= 4) {
            v138 = 4;
          }
        }
        console.log("存储告警记录");
        await AlarmTriggerModel.createAlarmTrigger({
          dataId: v130,
          companyId: _0x48b66d,
          alarmContent: _0x315577,
          pushStatus: 2,
          seriousLevel: v138,
          triggerTime: v137,
          ruleId: _0x4baba7,
          alarmItemId: _0x14784e,
          ruleLevel: _0x5091ab,
          applicationId: _0x499c48,
          application: _0x291f59
        });
        C3.convergenceAlarm({
          alarmContent: v117.XOAdv(_0x315577, "已连续告警 " + (v117.fYuAy(v135.alarmCount, 1) + v117.CCyiL(599253, 599252)) + " 次;"),
          ruleId: _0x4baba7,
          weekDay: p201,
          curTime: p202,
          projectName: _0x291f59,
          projectId: _0x499c48,
          alarmTriggerId: v130
        });
      } else {
        let v140 = false;
        let v141 = -v117.poSzv(494976, 494977);
        for (let v142 = 0; v142 < v128.length; ++v142) {
          const v143 = await C3.checkIfTriggerCondition(v128, v142, p200, _0x499c48, _0x4baba7);
          console.log(v117.mOzaY, v143);
          const {
            resultFlag: _0x3f98b5,
            durationComplete: _0x48899d
          } = v143;
          if (_0x48899d === false) {
            console.log("未满计算周期，跳过2");
            continue;
          }
          if (_0x3f98b5) {
            v140 = true;
            break;
          }
        }
        const v144 = C3.alarmCycleCountMap.get(_0x499c48 + "-" + _0x4baba7);
        if (!v144.continuityCount) {
          v144.continuityCount = v117.WdyxO(905121, 905121);
        }
        if (!v144[v117.cKvhN]) {
          v144.alarmCount = 0;
        }
        if (!v140) {
          if (v126.noticeType.indexOf("2") !== -1 && v144[v117.cKvhN] > 0) {
            await C3.sendAlarm("【告警已恢复】" + _0x315577 + ("已连续告警 " + v144.alarmCount + " 次;"), _0x4baba7, p201, p202, _0x291f59, _0x499c48);
          }
          await AlarmItemModel.updateAlarmItem(_0x14784e, {
            alarmStatus: 2
          });
          v144[v117.xdABI] = 0;
          v144.alarmCount = 0;
          continue;
        }
        const v145 = v144.continuityCount;
        v144.continuityCount = v145 + 1;
        await AlarmItemModel.updateAlarmItem(_0x14784e, {
          alarmStatus: 1
        });
        const v146 = vRequire2().format("YYYY-MM-DD HH:mm:ss");
        let v147 = v117.KxhJq(278091, 278094);
        await AlarmTriggerModel.createAlarmTrigger({
          dataId: v130,
          companyId: _0x48b66d,
          alarmItemId: _0x14784e,
          alarmContent: _0x315577,
          pushStatus: 2,
          seriousLevel: v147,
          triggerTime: v146,
          ruleId: _0x4baba7,
          applicationId: _0x499c48,
          application: _0x291f59,
          ruleLevel: _0x5091ab
        });
        C3.convergenceAlarm({
          alarmContent: _0x315577 + ("已连续告警 " + (v144.alarmCount * 1 + 1) + " 次;"),
          ruleId: _0x4baba7,
          weekDay: p201,
          curTime: p202,
          projectName: _0x291f59,
          projectId: _0x499c48,
          alarmTriggerId: v130
        });
      }
    }
  }
  static async ["checkIfTriggerCondition"](p235, p236, p237, p238, p239) {
    const v148 = {
      SrtiC: function (p240, p241) {
        return p240 !== p241;
      },
      lJpzC: function (p242, p243) {
        return p242 === p243;
      },
      QPsJX: function (p244, p245) {
        return p244 * p245;
      },
      KsXXE: function (p246, p247) {
        return p246 < p247;
      },
      vNjzF: function (p248, p249) {
        return p248 * p249;
      },
      sBcFi: function (p250, p251) {
        return p250 ^ p251;
      },
      IzPwi: function (p252, p253) {
        return p252 === p253;
      },
      wgyFa: function (p254, p255) {
        return p254 >= p255;
      },
      mpBjv: function (p256, p257) {
        return p256 >= p257;
      },
      zcGgN: function (p258, p259) {
        return p258 >= p259;
      },
      DQsAz: function (p260, p261) {
        return p260 < p261;
      },
      eAfuU: "triggerConditions",
      GHmra: "seriousCount",
      fjQxf: function (p262, p263) {
        return p262 ^ p263;
      },
      VbHeo: "warningCount",
      OlkOF: "infoCount",
      eBwQN: function (p264, p265) {
        return p264 + p265;
      },
      tMkgC: function (p266, p267) {
        return p266 + p267;
      },
      RUycI: "effectCount"
    };
    let v149 = false;
    let v150 = false;
    const {
      statCycle: _0x2df06f,
      commonData: _0x52d57e,
      duration: _0x690387,
      timeInterval: _0x443452,
      alarmIndex: _0x5654d4,
      calculateType: _0xae1589,
      conditionSymbol: _0x341a72,
      seriousData: _0xdffd6a,
      warningData: _0x59e6d5,
      infoData: _0x30de69
    } = p235[p236];
    const v151 = "avg";
    const v152 = await vRequire4.ajaxInside("postJson", "" + MONITOR_LOCAL_SERVER + PROJECT_API.CHECK_ALARM_RESULT, {
      webMonitorId: p238,
      alarmRule: {
        type: v151,
        statCycle: _0x2df06f
      },
      type: _0x5654d4
    });
    const {
      data: _0x146a31
    } = v152;
    let v153 = 0;
    const v154 = C3.alarmCycleCountMap.get(p238 + "-" + p239);
    if (v148.SrtiC(_0x52d57e, undefined) && v148.SrtiC(_0x52d57e, null)) {
      if (v148.lJpzC(_0x341a72, "大于等于") && _0x146a31 * 1 >= v148.QPsJX(_0x52d57e, 1) || _0x341a72 === "小于" && v148.KsXXE(v148.vNjzF(_0x146a31, v148.sBcFi(644072, 644073)), v148.vNjzF(_0x52d57e, 1))) {
        console.log("满足条件，开始记录！");
        if (!v154) {
          v153 = 1;
          if (v148.IzPwi(_0x690387 * 1, 1)) {
            v149 = true;
            v150 = true;
            v153 = 0;
          }
        } else {
          let {
            effectCount: _0x122a7f
          } = v154.triggerConditions[p236];
          if (!_0x122a7f) {
            _0x122a7f = 1;
          } else {
            _0x122a7f++;
          }
          if (v148.wgyFa(_0x122a7f, _0x690387 * 1)) {
            v149 = true;
            v150 = true;
            console.log("满足触发周期，发起告警！连续性记录归零");
            v153 = v148.sBcFi(453391, 453391);
          } else {
            v153 = _0x122a7f;
          }
        }
      } else {
        v153 = 0;
        v149 = false;
        v150 = true;
      }
    } else {
      let v155 = v148.sBcFi(356007, 356007);
      let v156 = 0;
      let v157 = 0;
      if (_0x341a72 === "大于等于") {
        if (v148.mpBjv(_0x146a31, _0xdffd6a)) {
          v155++;
        } else if (v148.wgyFa(_0x146a31, _0x59e6d5)) {
          v156++;
        } else if (v148.zcGgN(_0x146a31, _0x30de69)) {
          v157++;
        }
      } else if (_0x341a72 === "小于") {
        if (_0x146a31 < _0xdffd6a) {
          v155++;
        } else if (v148.DQsAz(_0x146a31, _0x59e6d5)) {
          v156++;
        } else if (_0x146a31 < _0x30de69) {
          v157++;
        }
      }
      if (v155 || v156 || v157) {
        if (!v154) {
          v153 = 1;
        } else {
          let {
            effectCount: _0x1e1448
          } = v154[v148.eAfuU][p236];
          if (!_0x1e1448) {
            _0x1e1448 = 1;
          } else {
            _0x1e1448++;
          }
          if (_0x1e1448 >= _0x690387) {
            v149 = true;
            v150 = true;
            console.log("分级数据满足触发周期，发起告警！连续性记录归零");
            v153 = 0;
          } else {
            v153 = _0x1e1448;
          }
        }
      } else {
        v153 = 0;
      }
      const v158 = v154?.triggerConditions?.[p236]?.[v148.GHmra] ? v154?.["triggerConditions"]?.[p236]?.["seriousCount"] : v148.fjQxf(543174, 543174);
      const v159 = v154?.triggerConditions?.[p236]?.warningCount ? v154?.[v148.eAfuU]?.[p236]?.[v148.VbHeo] : v148.fjQxf(141006, 141006);
      const v160 = v154?.triggerConditions?.[p236]?.[v148.OlkOF] ? v154?.["triggerConditions"]?.[p236]?.infoCount : 0;
      p235[p236].seriousCount = v158 + v155;
      p235[p236][v148.VbHeo] = v148.eBwQN(v159, v156);
      p235[p236].infoCount = v148.tMkgC(v160, v157);
    }
    if (!v154) {
      p235[p236][v148.RUycI] = v153;
      C3.alarmCycleCountMap.set(p238 + "-" + p239, {
        triggerConditions: p235
      });
    } else {
      const v161 = "4|2|3|1|0".split("|");
      let v162 = 0;
      while (true) {
        switch (v161[v162++]) {
          case "0":
            C3.alarmCycleCountMap.set(p238 + "-" + p239, {
              triggerConditions: p235,
              ...v154
            });
            continue;
          case "1":
            v154.triggerConditions[p236][v148.OlkOF] = p235[p236][v148.OlkOF];
            continue;
          case "2":
            v154.triggerConditions[p236].seriousCount = p235[p236][v148.GHmra];
            continue;
          case "3":
            v154.triggerConditions[p236].warningCount = p235[p236].warningCount;
            continue;
          case "4":
            v154[v148.eAfuU][p236][v148.RUycI] = v153;
            continue;
        }
        break;
      }
    }
    return {
      resultFlag: v149,
      durationComplete: v150
    };
  }
  static async sendAlarm(p268, p269, p270, p271, p272, p273, p274) {
    const v163 = {
      exHgj: function (p275, p276) {
        return p275 === p276;
      },
      spvoK: function (p277, p278) {
        return p277 === p278;
      },
      oyjKe: function (p279, p280) {
        return p279 ^ p280;
      },
      KdGUv: function (p281, p282) {
        return p281 > p282;
      },
      gGpia: function (p283, p284) {
        return p283 > p284;
      },
      mDPwR: "alarmIndex",
      lJRvC: function (p285, p286) {
        return p285 > p286;
      },
      DvvcH: function (p287, p288) {
        return p287 > p288;
      },
      egioq: "email",
      YGZOl: function (p289, p290) {
        return p289 + p290;
      },
      DLGao: "feishu",
      aDxto: "weixin"
    };
    const v164 = await AlarmRuleModel.getAlarmRuleByRuleId(p269);
    const {
      relatedNoticeId: _0x5383eb,
      ruleName: _0x4453ca
    } = v164;
    const v165 = await NoticeSettingModel.getNoticeSettingsById(_0x5383eb);
    let vP268 = p268;
    let v166 = "";
    const v167 = C3.alarmCycleCountMap.get(p273 + "-" + p269);
    if (!p274) {
      for (let v168 = v163.oyjKe(829162, 829162); v168 < v167.triggerConditions.length; ++v168) {
        const v169 = v167.triggerConditions[v168];
        let {
          seriousCount: _0x3d6ea4,
          warningCount: _0x5cfd92,
          infoCount: _0x3a63b1,
          seriousData: _0x1323a0,
          warningData: _0x15063d,
          infoData: _0x28ab84,
          statCycle: _0x468f33,
          calculateType: _0x25b305,
          conditionSymbol: _0x3cb363,
          alarmIndex: _0x26d967,
          commonData: _0x93b6e4
        } = v169;
        const v170 = C3.AlarmIndexEnum[_0x26d967];
        if (_0x93b6e4) {
          vP268 = vP268.replace(new RegExp("\\{alarmName\\}", ""), _0x4453ca).replace(new RegExp("\\{urgency\\}", ""), v170).replace(new RegExp("\\{threshold\\}", ""), _0x93b6e4).replace(new RegExp("\\{happenCount\\}", ""), _0x468f33);
        } else {
          while (v163.KdGUv(_0x3d6ea4--, 0)) {
            v166 += v170 + "在统计周期" + _0x468f33 + "分钟内" + _0x25b305 + _0x3cb363 + _0x1323a0 + "，达到严重级别\n";
          }
          while (_0x5cfd92-- > 0) {
            v166 += v170 + "在统计周期" + _0x468f33 + "分钟内" + _0x25b305 + _0x3cb363 + _0x15063d + "，达到警告级别\n";
          }
          while (v163.gGpia(_0x3a63b1--, 0)) {
            v166 += v170 + "在统计周期" + _0x468f33 + "分钟内" + _0x25b305 + _0x3cb363 + _0x28ab84 + "，达到提示级别\n";
          }
          if (v166) {
            vP268 = v166;
          }
        }
      }
    } else {
      let {
        seriousCount: _0x564b2e,
        warningCount: _0x30238b,
        infoCount: _0x5060f3,
        seriousData: _0x104088,
        warningData: _0x291277,
        infoData: _0x1a0198,
        statCycle: _0x2b9463,
        calculateType: _0x14cdeb,
        conditionSymbol: _0x5ce581,
        alarmIndex: _0x1560a0,
        commonData: _0x38d97b
      } = p274;
      const v171 = C3.AlarmIndexEnum[_0x1560a0];
      if (_0x38d97b) {
        vP268 = vP268.replace(v163.mDPwR, _0x4453ca);
      } else {
        while (_0x564b2e-- > 0) {
          v166 += vP268`${v171}在统计周期${_0x2b9463}分钟内${_0x14cdeb}${_0x5ce581}${_0x104088}，达到严重级别\n`;
        }
        while (v163.lJRvC(_0x30238b--, 0)) {
          v166 += v171 + "在统计周期" + _0x2b9463 + "分钟内" + _0x14cdeb + _0x5ce581 + _0x291277 + "，达到警告级别\n";
        }
        while (v163.DvvcH(_0x5060f3--, 0)) {
          v166 += v171 + "在统计周期" + _0x2b9463 + "分钟内" + _0x14cdeb + _0x5ce581 + _0x1a0198 + "，达到提示级别\n";
        }
        vP268 = v166;
      }
    }
    for (const v172 of v165) {
      const {
        noticePeopleId: _0xf55d96,
        noticeTeamId: _0x5327a5,
        channel: _0x434a5b,
        cycle: _0x508507,
        slienceTime: _0x565d33
      } = v172;
      let v173 = [];
      let v174 = [];
      if (_0x5327a5 && _0x5327a5 !== null) {
        const v175 = await TeamModel.getTeamMemberIds(_0x5327a5);
        const {
          members: _0x42e55d
        } = v175;
        for (const v176 of _0x42e55d.split(",")) {
          const v177 = await UserModel.getUserInfo(v176);
          v173.push(v177);
        }
      }
      const v178 = await UserModel.getUserListByMembers(_0xf55d96);
      if (v178 && v178.length) {
        v173 = [...v173, ...v178];
        v178.forEach(p291 => {
          const v179 = v173.filter(p292 => p292.userId === p291.userId);
          if (!v179 || !v179.length) {
            v173.push(p291);
          }
        });
        v174 = [...v178];
      }
      if (_0x565d33) {
        const v180 = _0x565d33.split(",");
        const v181 = [];
        for (const v182 of v180) {
          v181.push(v182.split("-"));
        }
        const v183 = v181.some(p293 => vRequire2(p271, "HH:mm:ss").isAfter(vRequire2(p293[0], "HH:mm:ss")) && vRequire2(p271, "HH:mm:ss").isBefore(vRequire2(p293[1], "HH:mm:ss")));
        if (v183) {
          continue;
        }
      }
      const v184 = _0x508507.split(",");
      const v185 = v184.includes("" + p270);
      if (!v185) {
        continue;
      }
      const v186 = JSON.parse(_0x434a5b);
      const {
        normal: _0x10a803,
        WebHook: _0x4cddba
      } = v186;
      if (_0x10a803.indexOf(v163.egioq) !== -1) {
        v173.forEach(p294 => {
          if (p294.emailName) {
            vRequire6.sendEmail(p294.emailName, _0x4453ca + " 告警！", vP268);
          }
        });
      }
      if (_0x4cddba && _0x4cddba.way) {
        const {
          way: _0x376b40,
          callback: _0x2a7a23
        } = _0x4cddba;
        v174.forEach(p295 => {
          if (p295.phone && v163.exHgj(p295.phone.length, 11) && v163.spvoK(vRequire20.config.at.atMobiles.indexOf(p295.phone), -1)) {
            vRequire20.config.at.atMobiles.push(p295.phone);
            vRequire22.config.text.mentioned_mobile_list.push(p295.phone);
          }
        });
        switch (_0x376b40) {
          case "dingding":
            vRequire20.config.text.content = v163.YGZOl("【" + p272 + "】", vP268);
            await vRequire4.postJson(_0x2a7a23, vRequire20.config);
            break;
          case v163.DLGao:
            vRequire21.config.content.text = "【" + p272 + "】" + vP268;
            await vRequire4.postJson(_0x2a7a23, vRequire21.config);
            break;
          case v163.aDxto:
            vRequire22.config.text.content = "【" + p272 + "】" + vP268;
            await vRequire4.postJson(_0x2a7a23, vRequire22.config);
            break;
          default:
            break;
        }
      }
    }
  }
  static changeMap(p296) {
    C3.alarmCycleCountMap.set("count", p296);
  }
  static async getAlarmTriggerByAlarmId(p302) {
    const v187 = {
      yjcSg: function (p303, p304) {
        return p303 ^ p304;
      },
      JmCkv: function (p305, p306) {
        return p305 * p306;
      },
      SnqqC: function (p307, p308) {
        return p307(p308);
      },
      cKewR: function (p309, p310) {
        return p309(p310);
      }
    };
    let v188 = JSON.parse(p302.request.body);
    const {
      page = 1,
      pageSize = v187.yjcSg(470282, 470272),
      id: _0x25fad0,
      curDate: _0x4a59f2,
      filters: _0x41e19
    } = v188;
    let v189 = v187.JmCkv(v187.SnqqC(Number, page) - 1, Number(pageSize));
    let v190 = v187.cKewR(Number, pageSize);
    const {
      status: _0x58bd83,
      level: _0x569001
    } = _0x41e19;
    let v191;
    if (!_0x4a59f2) {
      v191 = await AlarmTriggerModel.pageAlarmTrigger(v189, v190, _0x25fad0, _0x58bd83);
    } else {
      v191 = await AlarmTriggerModel.pageAlarmTriggerWithCurDate(v189, v190, _0x25fad0, _0x4a59f2);
    }
    const v192 = await AlarmTriggerModel.countAlarmTrigger(_0x25fad0, _0x58bd83);
    p302.response.status = 200;
    p302.body = vRequire8.SUCCESS_200("查询触发告警成功", {
      alarmTriggers: v191,
      total: v192.length
    });
  }
  static async getAlarmDetailById(p311) {
    const v193 = p311.request.body;
    const {
      id: _0x7eba4
    } = v193;
  }
}
class C4 {
  static async ["getAlarmRule"](p312) {
    const v194 = {
      uRRYD: function (p313, p314) {
        return p313 === p314;
      },
      IvTFU: function (p315, p316) {
        return p315 ^ p316;
      },
      LsMPv: function (p317, p318) {
        return p317 === p318;
      },
      BOENL: function (p319, p320) {
        return p319 * p320;
      },
      GwibK: function (p321, p322) {
        return p321 ^ p322;
      },
      jpVZk: "triggerConditions",
      NSKTy: "canNotDelete"
    };
    let v195 = vRequire4.parseQs(p312.request.url);
    const {
      page = 1,
      pageSize = 10,
      level: _0x4e5690,
      keyword: _0x5c3c2b
    } = v195;
    let v196;
    let v197;
    if (v194.uRRYD(page, -v194.IvTFU(352354, 352355)) || v194.LsMPv(pageSize, -v194.IvTFU(738682, 738683))) {
      v196 = 0;
      v197 = 100000;
    } else {
      v196 = (Number(page) - 1) * Number(pageSize);
      v197 = Number(pageSize);
    }
    const {
      userId: _0x415ba2,
      userType: _0x33f72b,
      companyId: _0x38518a
    } = p312.user;
    const v198 = await AlarmRuleModel.pageAlarmRule(v196, v197, _0x38518a);
    const v199 = await AlarmRuleModel.countAlarmRule(_0x38518a);
    const v200 = v199 && v199.length ? v194.BOENL(v199[0].count, v194.GwibK(864842, 864843)) : 0;
    const v201 = await UserModel.getUserList();
    const v202 = await TeamModel.getTeamList(_0x415ba2, _0x33f72b, _0x38518a);
    const v203 = [];
    for (const v204 of v198) {
      const {
        relatedNoticeId: _0x37ee4e,
        ruleId: _0x539714,
        processorId: _0x301910,
        alarmLevel: _0x334219,
        ruleName: _0x4dc8d4
      } = v204;
      if (_0x4e5690 && _0x334219 != _0x4e5690 || _0x5c3c2b && !_0x4dc8d4.includes(_0x5c3c2b)) {
        continue;
      }
      const v205 = await TriggerConditionModel.getTriggerConditionsById(_0x539714);
      v204[v194.jpVZk] = v205;
      const v206 = await NoticeSettingModel.getNoticeSettingsById(_0x37ee4e);
      for (const v207 of v206) {
        const {
          noticePeopleId: _0x4c3bc5,
          noticeTeamId: _0x346374
        } = v207;
        const v208 = v201.find(p323 => p323.userId === _0x4c3bc5)?.nickname;
        const v209 = v202.find(p324 => p324.companyId === _0x346374)?.teamName;
        v207.noticePeopleName = v208;
        v207.noticeTeamName = v209;
      }
      v204.notice = v206;
      const v210 = v201.find(p325 => p325.userId === _0x301910);
      const v211 = v210 ? v210.nickname : "unknown";
      v204.processorName = v211;
      const v212 = await NoticeTemplateModel.getNoticeTemplateById(_0x37ee4e);
      const v213 = v212[0];
      const {
        templateName: _0x5d6c2b
      } = v213;
      v204.templateName = _0x5d6c2b;
      const v214 = await AlarmItemModel.getAlarmItemByRuleId(_0x539714);
      if (v214.length > 0) {
        v204[v194.NSKTy] = true;
      }
      v203.push(v204);
    }
    p312.response.status = 200;
    p312.body = vRequire8.SUCCESS_200("查询成功", {
      alarmRules: v203,
      total: v200
    });
  }
  static async createAlarmRule(p326) {
    const v215 = {
      CUljh: "规则名称不能重复！",
      IKxcw: function (p327) {
        return p327();
      },
      QGhXK: "YYYY-MM-DD HH:mm:ss",
      kNmBt: function (p328, p329) {
        return p328 ^ p329;
      }
    };
    const {
      ruleName: _0x23e7f1,
      ruleDesc: _0xabe910,
      alarmLevel: _0x57861b,
      noticeTemplateId: _0x210177,
      suggestion: _0x2dc3ba,
      status: _0x550628,
      triggers: _0x50977c,
      visibleRange: _0x1a0f72,
      processorId: _0x244bad
    } = JSON.parse(p326.request.body);
    const {
      companyId: _0x554df3,
      userId: _0x8bbb0a
    } = p326.user;
    const v216 = await AlarmRuleModel.getAlarmRuleByRuleName(_0x23e7f1);
    if (v216 && v216.length > 0) {
      p326.response.status = 412;
      p326.body = vRequire8.ERROR_412(v215.CUljh, 0);
      return;
    }
    let v217 = "";
    _0x50977c.forEach(p330 => {
      v217 += ALARM_INDEX_ENUM[p330.alarmIndex] + "在" + p330.statCycle + "分钟内，" + p330.calculateType + p330.conditionSymbol + p330.commonData + "已经达到阈值，并且连续持续了" + p330.statCycle + "个周期；";
    });
    let v218 = "【" + _0x23e7f1 + "】告警；\n" + v217 + "\n请相关人员及时处理！\n";
    const v219 = vRequire4.getUuid();
    await AlarmRuleModel.createAlarmRule({
      companyId: _0x554df3,
      createUser: _0x8bbb0a,
      ruleId: v219,
      ruleName: _0x23e7f1,
      ruleDesc: _0xabe910,
      alarmLevel: _0x57861b,
      suggestion: _0x2dc3ba,
      alarmContent: v218,
      relatedNoticeId: _0x210177,
      status: _0x550628,
      lastModified: v215.IKxcw(vRequire2).format(v215.QGhXK),
      processorId: _0x244bad,
      visibleRange: _0x1a0f72
    });
    for (const v220 of _0x50977c) {
      const {
        alarmIndex: _0xc8a609,
        statCycle: _0x59a756,
        calculateType: _0x123ac6,
        conditionSymbol: _0x39dd82,
        seriousData: _0x59ea93,
        warningData: _0x431761,
        infoData: _0x584bb6,
        commonData: _0x5a41bc,
        duration: _0x5062b1,
        interval: _0x1bfecf,
        conditionMeetWay: _0x4bc815
      } = v220;
      TriggerConditionModel.createTriggerCondition({
        ruleId: v219,
        alarmIndex: _0xc8a609,
        statCycle: _0x59a756,
        calculateType: _0x123ac6,
        conditionSymbol: _0x39dd82,
        seriousData: _0x59ea93,
        warningData: _0x431761,
        infoData: _0x584bb6,
        commonData: _0x5a41bc,
        duration: _0x5062b1,
        timeInterval: _0x1bfecf,
        conditionMeetWay: _0x4bc815
      });
    }
    p326.response.status = v215.kNmBt(689811, 689755);
    p326.body = vRequire8.SUCCESS_200("创建规则成功", 0);
  }
  static async ["getAlarmRuleById"](p331) {
    let v221 = vRequire4.parseQs(p331.request.url);
    const {
      id: _0x2aec57
    } = v221;
    const v222 = await AlarmRuleModel.getAlarmRuleById(_0x2aec57);
    const {
      ruleId: _0x1f9413,
      ruleName: _0x53b254,
      ruleDesc: _0x49bf79,
      suggestion: _0x533c07,
      alarmContent: _0x54e816,
      visibleRange: _0x586f2c,
      alarmLevel: _0x104b51,
      relatedNoticeId: _0x227db9,
      status: _0x44fd47
    } = v222;
    const v223 = await TriggerConditionModel.getTriggerConditionsById(_0x1f9413);
    const v224 = {
      ruleName: _0x53b254,
      ruleDesc: _0x49bf79,
      id: _0x2aec57,
      suggestion: _0x533c07,
      alarmContent: _0x54e816,
      visibleRange: _0x586f2c,
      alarmLevel: _0x104b51,
      noticeTemplateId: _0x227db9,
      status: _0x44fd47,
      triggers: v223
    };
    p331.response.status = 200;
    p331.body = vRequire8.SUCCESS_200("根据ID查询成功", v224);
  }
  static async ["deleteAlarmRule"](p332) {
    const v225 = {
      MOaYp: "删除成功"
    };
    const {
      ruleId: _0xc48d4a
    } = JSON.parse(p332.request.body);
    await AlarmRuleModel.deleteAlarmRule(_0xc48d4a);
    await TriggerConditionModel.deleteTriggerCondition(_0xc48d4a);
    p332.response.status = 200;
    p332.body = vRequire8.SUCCESS_200(v225.MOaYp, 0);
  }
  static async ["updateAlarmRuleStatus"](p333) {
    const v226 = {
      OGTFU: function (p334, p335) {
        return p334 ^ p335;
      },
      pYNAM: "更新成功",
      AWopx: function (p336, p337) {
        return p336 ^ p337;
      }
    };
    const {
      status: _0x195cc7,
      id: _0x2d0173
    } = JSON.parse(p333.request.body);
    await AlarmRuleModel.updateAlarmRule(_0x2d0173, {
      status: _0x195cc7
    });
    p333.response.status = v226.OGTFU(275276, 275332);
    p333.body = vRequire8.SUCCESS_200(v226.pYNAM, v226.AWopx(411881, 411881));
  }
  static async ["updateAlarmRule"](p338) {
    const v227 = {
      iNdeM: function (p339) {
        return p339();
      }
    };
    const {
      ruleName: _0x21e21e,
      ruleDesc: _0x3fd2bb,
      visibleRange: _0x996047,
      alarmLevel: _0x31cf39,
      triggers: _0x2ae3bf,
      processorId: _0x19e0f2,
      status: _0x2806af,
      id: _0x1d8eb5,
      noticeTemplateId: _0x1def23,
      suggestion: _0x5d8d8b,
      ruleId: _0x519df6
    } = JSON.parse(p338.request.body);
    let v228 = "";
    _0x2ae3bf.forEach(p340 => {
      v228 += ALARM_INDEX_ENUM[p340.alarmIndex] + "在" + p340.statCycle + "分钟内，" + p340.calculateType + p340.conditionSymbol + p340.commonData + "已经达到阈值，并且连续持续了" + p340.duration + "个周期；";
    });
    let v229 = "【" + _0x21e21e + "】告警；\n" + v228 + "\n请相关人员及时处理！\n";
    await AlarmRuleModel.updateAlarmRule(_0x1d8eb5, {
      ruleName: _0x21e21e,
      ruleDesc: _0x3fd2bb,
      visibleRange: _0x996047,
      alarmLevel: _0x31cf39,
      processorId: _0x19e0f2,
      status: _0x2806af,
      relatedNoticeId: _0x1def23,
      alarmContent: v229,
      suggestion: _0x5d8d8b,
      lastModified: v227.iNdeM(vRequire2).format("YYYY-MM-DD HH:mm:ss")
    });
    await TriggerConditionModel.deleteTriggerCondition(_0x519df6);
    for (const v230 of _0x2ae3bf) {
      const {
        alarmIndex: _0x30336d,
        statCycle: _0x8c40e7,
        calculateType: _0x4887c7,
        conditionSymbol: _0x275728,
        seriouData: _0x10c78c,
        warningData: _0x344b1d,
        infoData: _0x4f34d1,
        commonData: _0x2e6d26,
        duration: _0x4e2bd5,
        interval: _0x347bc6,
        conditionMeetWay: _0x4c6ec9
      } = v230;
      TriggerConditionModel.createTriggerCondition({
        ruleId: _0x519df6,
        alarmIndex: _0x30336d,
        statCycle: _0x8c40e7,
        calculateType: _0x4887c7,
        conditionSymbol: _0x275728,
        seriouData: _0x10c78c,
        warningData: _0x344b1d,
        infoData: _0x4f34d1,
        commonData: _0x2e6d26,
        duration: _0x4e2bd5,
        timeInterval: _0x347bc6,
        conditionMeetWay: _0x4c6ec9
      });
    }
    p338.response.status = 200;
    p338.body = vRequire8.SUCCESS_200("更新成功", 0);
  }
  static async ["addRuleForApplication"](p341) {
    const v231 = {
      XmAeL: function (p342) {
        return p342();
      },
      IEJuV: "绑定规则成功"
    };
    let v232 = {};
    if (typeof p341.request.body === "object") {
      v232 = p341.request.body;
    } else {
      v232 = JSON.parse(p341.request.body);
    }
    const {
      companyId: _0x535431
    } = p341.user;
    const {
      applicationId: _0x4973cb,
      ruleIds: _0x4ed514
    } = v232;
    const v233 = _0x4ed514.split(",");
    const v234 = await AlarmItemModel.getRuleIds(_0x4973cb);
    const v235 = v234.map(p343 => p343.ruleId);
    for (const v236 of v235) {
      if (!v233.includes(v236)) {
        await AlarmItemModel.deleteAlarmItem(_0x4973cb, v236);
      }
    }
    for (const v237 of v233) {
      if (!v235.includes(v237) && v237) {
        await AlarmItemModel.createAlarmItem({
          companyId: _0x535431,
          applicationId: _0x4973cb,
          ruleId: v237,
          alarmStatus: 1,
          latestHappen: v231.XmAeL(vRequire2).format("YYYY-MM-DD HH:mm:ss")
        });
      }
    }
    p341.response.status = 200;
    p341.body = vRequire8.SUCCESS_200(v231.IEJuV, 0);
  }
  static async ["getRulesOfApplication"](p344) {
    const {
      applicationId: _0x39b831
    } = JSON.parse(p344.request.body);
    const v238 = await AlarmItemModel.getRuleIds(_0x39b831);
    const v239 = v238.map(p345 => p345.ruleId);
    const v240 = [];
    for (const v241 of v239) {
      const v242 = await AlarmRuleModel.getAlarmRuleByRuleId(v241);
      const {
        ruleName: _0x34c649
      } = v242;
      v240.push(_0x34c649);
    }
    const v243 = v239.map((p346, p347) => ({
      ruleId: p346,
      ruleName: v240[p347]
    }));
    p344.response.status = 200;
    p344.body = vRequire8.SUCCESS_200("获取规则成功", v243);
  }
}
class C5 {
  static async ["createTable"](p348 = 0) {
    const v244 = vRequire4.addDays(p348);
    const v245 = v244.substring(0, 4);
    CommonTableModel.createInfoTableByYear(v245);
  }
  static async ["checkFreeLicense"]() {
    let v246 = false;
    const v247 = await vRequire4.postJson("" + MONITOR_LOCAL_SERVER + PROJECT_API.MONITOR_BASE_INFO, {}).catch(p349 => {
      console.error(p349);
    });
    const v248 = await vRequire4.getJson("" + EVENT_LOCAL_SERVER + PROJECT_API.GET_EVENT_SYS_INFO, {}).catch(p350 => {
      console.error(p350);
    });
    const v249 = v247.data;
    const v250 = v248.data;
    if (v249.totalProjectCount <= 3 && v250.totalProjectCount <= 3) {
      v246 = true;
    }
    return v246;
  }
}
class C6 {
  static async ["getAlarmTrigger"](p351) {
    const v252 = {
      eoMHr: function (p352, p353) {
        return p352 ^ p353;
      },
      CRqPw: function (p354, p355) {
        return p354 * p355;
      }
    };
    let v253 = vRequire4.parseQs(p351.request.url);
    const {
      page = v252.eoMHr(728823, 728822),
      pageSize = 10,
      noticeType: _0x53b90e,
      keywork: _0x5a34cc
    } = v253;
    let v254 = v252.CRqPw(Number(page) - 1, Number(pageSize));
    let vNumber3 = Number(pageSize);
    const v255 = await AlarmTriggerModel.pageAlarmRule(v254, vNumber3);
    p351.response.status = 200;
    p351.body = vRequire8.SUCCESS_200("查询触发告警成功", v255);
  }
}
class C7 {
  static async create(p356) {
    const v256 = {
      vshUK: function (p357, p358) {
        return p357 ^ p358;
      },
      zVyzx: "创建信息失败，请求参数不能为空！"
    };
    let v257 = p356.request.body;
    if (v257.title && v257.author && v257.content && v257.category) {
      let v258 = await ApplicationConfigModel.createApplicationConfig(v257);
      let v259 = await ApplicationConfigModel.getApplicationConfigDetail(v258.id);
      p356.response.status = 200;
      p356.body = vRequire8.SUCCESS_200("创建信息成功", v259);
    } else {
      p356.response.status = v256.vshUK(830803, 830671);
      p356.body = vRequire8.ERROR_412(v256.zVyzx);
    }
  }
  static async updateSysConfigInfo(p359) {
    let v260 = JSON.parse(p359.request.body);
    const {
      serverDomain: _0x177fff,
      adminDomain: _0x44a1c4,
      editType: _0x5099f3
    } = v260;
    const v261 = await ApplicationConfigModel.getApplicationConfigByConfigName(_0x5099f3);
    if (v261 && v261.length) {
      await ApplicationConfigModel.updateApplicationConfig(_0x5099f3, {
        configValue: JSON.stringify({
          serverDomain: _0x177fff,
          adminDomain: _0x44a1c4
        })
      });
    } else {
      await ApplicationConfigModel.createApplicationConfig({
        systemName: _0x5099f3,
        configValue: JSON.stringify({
          serverDomain: _0x177fff,
          adminDomain: _0x44a1c4
        })
      });
    }
    p359.response.status = 200;
    p359.body = vRequire8.SUCCESS_200("创建信息成功", 0);
  }
  static async setInitSysConfigInfo(p360, p361, p362) {
    const v262 = {
      gteAV: function (p363, p364) {
        return p363 === p364;
      }
    };
    const v263 = await ApplicationConfigModel.getApplicationConfigByConfigName(p362);
    if (v263 && v262.gteAV(v263.length, 0)) {
      await ApplicationConfigModel.createApplicationConfig({
        systemName: p362,
        configValue: JSON.stringify({
          serverDomain: p360,
          adminDomain: p361
        })
      });
    }
  }
  static async getSysConfigInfo(p365) {
    const v264 = {
      llHrV: "创建信息成功"
    };
    const {
      monitorServerDomain: _0x483917,
      monitorAssetsDomain: _0x395c8f,
      eventServerDomain: _0x3f774e,
      eventAssetsDomain: _0x47245f,
      emailNeeded: _0x56c32d,
      phoneNeeded: _0x46604e,
      activationRequired: _0x32fa8b,
      showEndTime: _0x2cf135
    } = accountInfo;
    const v265 = {
      monitor: {
        serverDomain: _0x483917,
        adminDomain: _0x395c8f
      },
      event: {
        serverDomain: _0x3f774e,
        adminDomain: _0x47245f
      },
      emailNeeded: _0x56c32d,
      phoneNeeded: _0x46604e,
      activationRequired: _0x32fa8b,
      showEndTime: _0x2cf135
    };
    p365.response.status = 200;
    p365.body = vRequire8.SUCCESS_200(v264.llHrV, v265);
  }
  static async handleAllApplicationConfig() {
    const v266 = await ApplicationConfigModel.getAllApplicationConfig();
    let v267 = {};
    let v268 = {};
    v266.forEach(p366 => {
      const v269 = JSON.parse(p366.configValue);
      switch (p366.systemName) {
        case "monitor":
          v267 = v269;
          break;
        case "event":
          v268 = v269;
          break;
        default:
          break;
      }
    });
    return {
      monitor: v267,
      event: v268
    };
  }
  static async monitorBaseInfo(p367) {
    const v270 = await C7.handleAllApplicationConfig();
    const {
      monitor: _0xf70b81
    } = v270;
    const v271 = await vRequire4.ajaxInside("post", "" + LOCAL_SERVER + PROJECT_API.MONITOR_BASE_INFO, {});
    if (!v271) {
      p367.response.status = 412;
      p367.body = vRequire8.ERROR_412("监控系统基本信息获取失败!");
    } else {
      p367.response.status = 200;
      p367.body = vRequire8.SUCCESS_200("success", v271.data);
    }
  }
  static async ["eventBaseInfo"](p368) {
    const v272 = {
      UYooi: "监控系统基本信息获取失败!",
      uMXOQ: "success"
    };
    const v273 = await C7.handleAllApplicationConfig();
    const {
      event: _0xc02e81
    } = v273;
    const v274 = await vRequire4.ajaxInside("post", "" + LOCAL_SERVER + PROJECT_API.EVENT_BASE_INFO, {});
    if (!v274) {
      p368.response.status = 412;
      p368.body = vRequire8.ERROR_412(v272.UYooi);
    } else {
      p368.response.status = 200;
      p368.body = vRequire8.SUCCESS_200(v272.uMXOQ, v274.data);
    }
  }
  static async getOtherAccessTokenWithCode(p369) {
    const v275 = {
      jjzBl: function (p370, p371) {
        return p370 ^ p371;
      },
      YzxqM: function (p372, p373) {
        return p372 ^ p373;
      },
      yDkrt: function (p374, p375) {
        return p374 ^ p375;
      },
      jeYJa: "no name",
      DREPV: function (p376, p377) {
        return p376 || p377;
      },
      yLWCD: function (p378, p379) {
        return p378 ^ p379;
      },
      vFkJi: function (p380, p381) {
        return p380 ^ p381;
      }
    };
    const {
      code: _0x5d5ae3
    } = JSON.parse(p369.request.body);
    const {
      getTenantTokenConfig: _0x3de763,
      getUserInfoConfig: _0x390909
    } = feiShuConfig;
    const v276 = {
      grant_type: "authorization_code",
      client_id: feiShuConfig.appId,
      client_secret: feiShuConfig.appSecret,
      redirect_uri: feiShuConfig.redirectUri,
      code: _0x5d5ae3
    };
    const v277 = await vRequire4.postForm(_0x3de763.url, v276).catch(p382 => {
      p369.response.status = 412;
      p369.body = vRequire8.ERROR_412(p382.msg, v275.jjzBl(910827, 910827));
    });
    console.log(v277);
    if (v277 && v277.code === 200) {
      const {
        access_token: _0xe05d81
      } = v277.data;
      const v278 = await vRequire4.postForm(_0x390909.url, {
        access_token: _0xe05d81
      }).catch(p383 => {
        p369.response.status = 412;
        p369.body = vRequire8.ERROR_412(p383.msg, v275.jjzBl(555854, 555854));
      });
      console.log(v278);
      if (v278 && v278.code === 200) {
        const {
          username = "",
          mobile = "",
          email = ""
        } = v278.data;
        if (!mobile && !email) {
          p369.response.status = v275.YzxqM(654825, 654453);
          p369.body = vRequire8.ERROR_412("登录失败，手机号和邮箱都为空！", v275.yDkrt(558694, 558694));
          return;
        }
        const v279 = await UserModel.checkUserByPhoneOrEmail(mobile, email);
        if (!v279 || !v279.length) {
          const v280 = {
            companyId: "1",
            nickname: username || v275.jeYJa,
            emailName: email || mobile,
            phone: v275.DREPV(mobile, email),
            password: vRequire4.md5(vRequire4.getUuid()),
            userId: vRequire4.getUuid(),
            userType: "customer",
            registerStatus: 1,
            avatar: Math.floor(Math.random() * v275.yLWCD(112355, 112357))
          };
          let v281 = await UserModel.createUser(v280);
          if (v281 && v281.id) {
            const v282 = await C19.createSsoToken(mobile, email);
            if (v282) {
              p369.response.status = 200;
              p369.body = vRequire8.SUCCESS_200("success", {
                accessToken: v282
              });
            } else {
              p369.response.status = v275.vFkJi(663343, 663219);
              p369.body = vRequire8.ERROR_412("登录失败，账号无效或不存在！", 0);
            }
          }
        }
      } else {
        console.log(v278);
        vRequire7.printError("获取第三方用户信息失败（" + _0x390909.url + "）", v278);
        p369.response.status = 412;
        p369.body = vRequire8.ERROR_412(v277.msg, v277.msg);
      }
    } else {
      console.log(v277);
      vRequire7.printError("获取第三方token失败（" + _0x3de763.url + "）", v277);
      p369.response.status = 412;
      p369.body = vRequire8.ERROR_412(v277.msg, v277.msg);
    }
  }
  static async getSignatureForFeiShu(p384) {
    const v283 = {
      NvXjX: " 接口报错 ：",
      pOPob: function (p385, p386) {
        return p385 ^ p386;
      },
      fHmts: function (p387, p388) {
        return p387 ^ p388;
      },
      SPwMq: "飞书配置项：",
      vVqjh: function (p389, p390) {
        return p389 < p390;
      },
      LvrHd: function (p391, p392) {
        return p391 + p392;
      },
      rmTcH: function (p393, p394) {
        return p393 ^ p394;
      },
      djpTJ: function (p395, p396) {
        return p395 + p396;
      },
      lIzsM: function (p397, p398) {
        return p397 ^ p398;
      },
      BlmlS: "success"
    };
    const {
      getAppTokenConfig: _0x479ef0,
      getJsTicketConfig: _0xf6378e,
      redirectUri: _0x41a598
    } = feiShuConfig;
    vRequire7.printInfo(v283.SPwMq, JSON.stringify(feiShuConfig));
    const v284 = {
      app_id: feiShuConfig.appId,
      app_secret: feiShuConfig.appSecret
    };
    const v285 = global.centerInfo.ssoForFeiShu.appToken;
    let v286 = false;
    if (v285 && v285.value) {
      if (v283.vVqjh(new Date().getTime(), v285.endTime)) {
        v286 = true;
      }
    }
    let v287 = "";
    if (!v286) {
      vRequire7.printInfo(_0x479ef0.url + " 接口参数：", JSON.stringify(v284));
      const v288 = await vRequire4.postJson(_0x479ef0.url, v284).catch(p399 => {
        vRequire7.printInfo(_0x479ef0.url + v283.NvXjX, p399);
        p384.response.status = v283.pOPob(461112, 460964);
        p384.body = vRequire8.ERROR_412(p399.msg, v283.pOPob(184738, 184738));
      });
      vRequire7.printInfo(_0x479ef0.url + " 接口结果：", JSON.stringify(v288));
      if (v288) {
        const {
          app_access_token: _0xf42205,
          expire: _0x1aedf5
        } = v288;
        v287 = _0xf42205;
        global.centerInfo.ssoForFeiShu.appToken = {
          value: v287,
          endTime: v283.LvrHd(new Date().getTime(), _0x1aedf5 * 1000)
        };
      }
    } else {
      v287 = global.centerInfo.ssoForFeiShu.appToken.value;
    }
    if (!v287) {
      p384.response.status = 412;
      p384.body = vRequire8.ERROR_412("token无效", v283.rmTcH(281996, 281996));
      return;
    }
    const v289 = {
      Authorization: "Bearer " + v287,
      "Content-Type": "application/json"
    };
    const v290 = global.centerInfo.ssoForFeiShu.ticket;
    let v291 = false;
    if (v290 && v290.value) {
      if (new Date().getTime() < v290.endTime) {
        v291 = true;
      }
    }
    let v292 = "";
    if (!v291) {
      vRequire7.printInfo(_0xf6378e.url + " 接口参数（header）：", JSON.stringify(v289));
      const v293 = await vRequire4.get(_0xf6378e.url, {}, {
        customHead: v289
      }).catch(p400 => {
        vRequire7.printInfo(_0xf6378e.url + " 接口报错 ：", p400);
        p384.response.status = 412;
        p384.body = vRequire8.ERROR_412(p400.msg, v283.fHmts(302161, 302161));
      });
      vRequire7.printInfo(_0xf6378e.url + " 接口结果：", JSON.stringify(v293));
      if (v293) {
        const {
          ticket: _0x34a847,
          expire_in: _0x2d9079
        } = v293.data;
        v292 = _0x34a847;
        global.centerInfo.ssoForFeiShu.ticket = {
          value: v292,
          endTime: v283.djpTJ(new Date().getTime(), _0x2d9079 * 1000)
        };
      }
    } else {
      v292 = global.centerInfo.ssoForFeiShu.ticket.value;
    }
    if (!v292) {
      p384.response.status = 412;
      p384.body = vRequire8.ERROR_412("ticket无效", v283.lIzsM(387971, 387971));
      return;
    }
    const v294 = vRequire4.getUuid().replace(new RegExp("-", "g"), "");
    const v295 = new Date().getTime();
    const v_0x41a598 = _0x41a598;
    const v296 = "jsapi_ticket=" + v292 + "&noncestr=" + v294 + "&timestamp=" + v295 + "&url=" + v_0x41a598;
    const v297 = vRequire4.sha1(v296);
    p384.response.status = 200;
    p384.body = vRequire8.SUCCESS_200(v283.BlmlS, {
      appId: feiShuConfig.appId,
      timestamp: v295,
      nonceStr: v294,
      signature: v297
    });
  }
  static async getAccessTokenByCodeForFeiShu(p401) {
    const v298 = {
      Fyttb: function (p402, p403) {
        return p402 ^ p403;
      },
      lJLcN: " 接口报错 ：",
      cDtBp: function (p404, p405) {
        return p404 ^ p405;
      },
      qLVXU: function (p406, p407) {
        return p406 + p407;
      },
      KuuAZ: " 接口参数（header）：",
      svGSH: function (p408, p409) {
        return p408 ^ p409;
      },
      iObYX: "123456",
      EPpqD: "用户不存在，即将创建：",
      XLycV: "登录失败，账号无效或不存在1！",
      nlyDF: function (p410, p411) {
        return p410 || p411;
      },
      EwQdl: "登录失败，账号不存在或匹配到多条信息！",
      dewFT: function (p412, p413) {
        return p412 ^ p413;
      }
    };
    const {
      code: _0xa04b3b,
      grant_type: _0x56aae9
    } = vRequire4.parseQs(p401.request.url);
    const {
      getUserTokenConfig: _0x352bb2,
      getUserInfoConfig: _0x328901
    } = feiShuConfig;
    let v299 = "";
    const v300 = {
      Authorization: "Bearer " + global.centerInfo.ssoForFeiShu.appToken.value,
      "Content-Type": "application/json"
    };
    vRequire7.printInfo(v298.qLVXU(_0x352bb2.url, v298.KuuAZ), JSON.stringify(v300));
    const v301 = await vRequire4.postJson(_0x352bb2.url, {
      code: _0xa04b3b,
      grant_type: _0x56aae9
    }, {
      customHead: v300
    }).catch(p414 => {
      vRequire7.printInfo(_0x352bb2.url + " 接口报错 ：", p414);
      p401.response.status = 412;
      p401.body = vRequire8.ERROR_412(p414.msg, v298.Fyttb(931196, 931196));
    });
    vRequire7.printInfo(_0x352bb2.url + " 接口结果：", JSON.stringify(v301));
    if (v301) {
      const {
        access_token: _0x1ef89b
      } = v301.data;
      v299 = _0x1ef89b;
    }
    if (!v299) {
      p401.response.status = v298.svGSH(342385, 342253);
      p401.body = vRequire8.ERROR_412("token无效", 0);
      return;
    }
    const v302 = {
      Authorization: "Bearer " + v299
    };
    vRequire7.printInfo(_0x328901.url + " 接口参数（header）：", JSON.stringify(v302));
    const v303 = await vRequire4.get(_0x328901.url, {}, {
      customHead: v302
    }).catch(p415 => {
      vRequire7.printInfo(_0x328901.url + v298.lJLcN, p415);
      p401.response.status = 412;
      p401.body = vRequire8.ERROR_412(p415.msg, v298.cDtBp(999168, 999168));
    });
    vRequire7.printInfo(_0x328901.url + " 接口结果：", JSON.stringify(v303));
    const {
      email = "",
      mobile = "",
      name = ""
    } = v303.data;
    const v304 = mobile.replace(new RegExp("\\+86", "g"), "");
    if (email || v304) {
      const v305 = await UserModel.checkUserByPhoneOrEmail(v304, email);
      if (!v305 || !v305.length) {
        const v306 = name || "no name";
        const v307 = email || v304;
        const v308 = v304 || email;
        const v309 = {
          companyId: accountInfo.defaultCompanyId,
          nickname: v306,
          emailName: v307,
          phone: v308,
          password: vRequire4.md5(v298.iObYX),
          userId: vRequire4.getUuid(),
          userType: "customer",
          registerStatus: 1,
          avatar: Math.floor(Math.random() * 6)
        };
        vRequire7.printInfo(v298.EPpqD, JSON.stringify(v309));
        let v310 = await UserModel.createUser(v309);
        if (v310 && v310.id) {
          const v311 = await C19.createSsoToken(v308, v307);
          if (v311) {
            p401.response.status = 200;
            p401.body = vRequire8.SUCCESS_200("success", {
              accessToken: v311
            });
            vRequire7.printInfo("生成token：", JSON.stringify(v311));
          } else {
            vRequire7.printInfo("生成token失败：", JSON.stringify(v311));
            p401.response.status = 412;
            p401.body = vRequire8.ERROR_412(v298.XLycV, 0);
          }
        }
      } else {
        const v312 = email || v304;
        const v313 = v298.nlyDF(v304, email);
        vRequire7.printInfo("用户已存在，用户信息：", JSON.stringify({
          phone: v313,
          emailName: v312
        }));
        const v314 = await C19.createSsoToken(v313, v312);
        if (v314) {
          p401.response.status = 200;
          p401.body = vRequire8.SUCCESS_200("success", {
            accessToken: v314
          });
          vRequire7.printInfo("生成token：", JSON.stringify(v314));
        } else {
          vRequire7.printInfo("生成token失败：", JSON.stringify(v314));
          p401.response.status = 412;
          p401.body = vRequire8.ERROR_412(v298.EwQdl, v298.Fyttb(289436, 289436));
        }
      }
    } else {
      p401.response.status = v298.dewFT(570304, 569948);
      p401.body = vRequire8.ERROR_412("未获取到手机号或邮箱", v298.cDtBp(597817, 597817));
    }
  }
  static async getAccessTokenByCodeForIds(p416) {
    const v315 = {
      auBTM: "userRes:",
      yQKkB: "accessToken接口报错：:",
      sKOvC: "token参数:",
      QAOIE: "POST"
    };
    const {
      code: _0x4278a5,
      grant_type: _0x1c46f8
    } = vRequire4.parseQs(p416.request.url);
    const {
      getAccessTokenConfig: _0x46d3ea,
      clientId: _0x587261,
      clientSecret: _0x3cbcdb,
      redirectUri: _0x420482
    } = idsConfig;
    const v316 = {
      client_id: _0x587261,
      client_secret: _0x3cbcdb,
      redirect_uri: _0x420482,
      code: _0x4278a5,
      grant_type: _0x1c46f8
    };
    const v317 = vRequire4.qs(v316).replace(new RegExp("\\?", "g"), "");
    console.log(v315.sKOvC, v317);
    await vRequire9(_0x46d3ea.url + "?idsServiceType=federatedAuth&method=accessToken", {
      method: v315.QAOIE,
      body: v317,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      }
    }).then(async p417 => {
      const v318 = {
        rXDtt: v315.auBTM,
        ONSbJ: function (p418, p419, p420) {
          return p418(p419, p420);
        },
        QFURt: "POST"
      };
      await p417.json().then(async p421 => {
        const v319 = {
          IecSJ: v318.rXDtt,
          NdUtV: function (p422, p423) {
            return p422 === p423;
          },
          RKNgS: "userId:",
          KIuRZ: function (p424, p425) {
            return p424 ^ p425;
          }
        };
        const {
          access_token: _0xd1c29f,
          token_type: _0x582a98,
          expires_in: _0x5b9659
        } = p421;
        const v320 = {
          client_id: _0x587261,
          client_secret: _0x3cbcdb,
          access_token: _0xd1c29f,
          token_type: "bearer"
        };
        const v321 = vRequire4.qs(v320).replace(new RegExp("\\?", "g"), "");
        console.log("user参数:", v321);
        await v318.ONSbJ(vRequire9, _0x46d3ea.url + "?idsServiceType=federatedAuth&method=getUser", {
          method: v318.QFURt,
          body: v321,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
          }
        }).then(async p426 => {
          await p426.json().then(async p427 => {
            console.log(v319.IecSJ, p427);
            const {
              nickName = "",
              email = "",
              userId = "",
              userName: _0x2e6710
            } = v319.NdUtV(typeof p427, "string") ? JSON.parse(p427) : p427;
            console.log("nickName:", nickName, "email:", email, v319.RKNgS, userId, "userName:", _0x2e6710);
            if (email) {
              const v322 = await UserModel.checkUserByPhoneOrEmail("", email);
              console.log("用户是否存在:", v322);
              if (!v322 || !v322.length) {
                const vEmail = email;
                const v323 = "";
                const v324 = {
                  companyId: accountInfo.defaultCompanyId,
                  nickname: nickName || _0x2e6710,
                  emailName: vEmail,
                  phone: v323,
                  password: vRequire4.md5("123456"),
                  userId: userId || vRequire4.getUuid(),
                  userType: "customer",
                  registerStatus: 1,
                  avatar: Math.floor(Math.random() * v319.KIuRZ(799258, 799260))
                };
                console.log("用户不存在，即将创建：", JSON.stringify(v324));
                let v325 = await UserModel.createUser(v324);
                if (v325 && v325.id) {
                  const v326 = await C19.createSsoToken(v323, vEmail);
                  if (v326) {
                    p416.response.status = v319.KIuRZ(570235, 570291);
                    p416.body = vRequire8.SUCCESS_200("success", {
                      accessToken: v326
                    });
                    console.log("生成token：", JSON.stringify(v326));
                  } else {
                    console.log("生成token失败：", JSON.stringify(v326));
                    p416.response.status = 412;
                    p416.body = vRequire8.ERROR_412("登录失败，账号无效或不存在1！", 0);
                  }
                }
              } else {
                const vEmail2 = email;
                const v327 = "";
                console.log("用户已存在，用户信息：", JSON.stringify({
                  phone: v327,
                  emailName: vEmail2
                }));
                const v328 = await C19.createSsoToken(v327, vEmail2);
                console.log("获取登录token:", v328);
                if (v328) {
                  p416.response.status = v319.KIuRZ(181754, 181554);
                  p416.body = vRequire8.SUCCESS_200("success", {
                    accessToken: v328
                  });
                  console.log("生成token：", JSON.stringify(v328));
                } else {
                  console.log("生成token失败：", JSON.stringify(v328));
                  p416.response.status = 412;
                  p416.body = vRequire8.ERROR_412("登录失败，账号不存在或匹配到多条信息！", 0);
                }
              }
            } else {
              p416.response.status = 412;
              p416.body = vRequire8.ERROR_412("未获取到邮箱", 0);
            }
          });
        }).catch(p428 => {
          console.log("getUser接口报错:", p428);
        });
      });
    }).catch(p429 => {
      console.log(v315.yQKkB, p429);
    });
  }
  static async apiIdsNotice(p430) {
    const v329 = p430.request.body;
    console.log("apiIdsNotice params", v329);
  }
  static async getMachineFingerprint() {
    const v330 = {
      dskqL: function (p431, p432) {
        return p431 ^ p432;
      },
      gccAS: "crypto",
      Eiqth: "hex"
    };
    const v331 = ip.address().split(".");
    const v332 = v331[0] + "." + v331[v330.dskqL(807977, 807976)];
    const v333 = await vRequire18.cpu();
    const v334 = await vRequire18.baseboard();
    const v335 = await vRequire18.diskLayout();
    const v336 = (await vRequire18.networkInterfaces()).find(p433 => !p433.internal)?.mac;
    const v337 = v333.manufacturer + "-" + v333.brand + "-" + v336;
    const v338 = v333.manufacturer + "-" + v333.brand + "-" + v332;
    const v339 = require(v330.gccAS).createHash("sha256").update(v337).digest("hex");
    const v340 = require("crypto").createHash("sha256").update(v338).digest(v330.Eiqth);
    const v341 = v339.substring(0, v330.dskqL(733427, 733437));
    const v342 = v340.substring(0, v330.dskqL(157592, 157590));
    const v343 = v339.substring(v330.dskqL(614782, 614777), 21);
    const v344 = v340.substring(7, 21);
    const v345 = "\n╔═══════════════════════机器码信息══════════════════════╗\n║                                                       ║\n║ 【提示】请复制机器码，并联系客服生成授权码            ║\n║                                                       ║                                                     ║\n║ 【监控机器码】" + v341 + "-" + v342 + "           ║\n║ 【埋点机器码】" + v343 + "-" + v344 + "           ║\n║                                                       ║\n║ 【提示】请复制机器码，并联系客服生成授权码            ║\n║                                                       ║\n╚═══════════════════════════════════════════════════════╝\n";
    console.warn(v345.yellow);
    return {
      machineId: v341,
      machineId2: v342
    };
  }
}
class C8 {
  static async updateCompany(p434) {
    const v346 = {
      zHXqG: function (p435, p436) {
        return p435 && p436;
      }
    };
    const {
      userId: _0x3ff6a1,
      companyName: _0x4f104d,
      companyTax: _0x3f1994,
      bankName: _0x206ce9,
      bankNumber: _0x18cf40,
      companyAddress: _0x3f9f63,
      companyPhone: _0x4283f2
    } = JSON.parse(p434.request.body);
    const {
      companyId: _0x1803f2
    } = p434.user;
    let v347 = 0;
    if (v346.zHXqG(_0x4f104d, _0x3f1994)) {
      v347 = 1;
    }
    await CompanyModel.updateCompany(_0x1803f2, {
      ownerId: _0x3ff6a1,
      companyName: _0x4f104d,
      companyTax: _0x3f1994,
      companyAddress: _0x3f9f63,
      companyPhone: _0x4283f2,
      bankName: _0x206ce9,
      bankNumber: _0x18cf40,
      isComplete: v347
    });
    p434.response.status = 200;
    p434.body = vRequire8.SUCCESS_200("创建信息成功", 0);
  }
  static async ["getCompanyInfo"](p437) {
    const {
      companyId: _0x2c35c6
    } = JSON.parse(p437.request.body);
    const v348 = await CompanyModel.getCompanyInfo(_0x2c35c6);
    p437.response.status = 200;
    p437.body = vRequire8.SUCCESS_200("查询成功", v348);
  }
  static async ["getCompanyList"](p438) {
    const v349 = {
      TiENc: function (p439, p440) {
        return p439 ^ p440;
      }
    };
    const v350 = await CompanyModel.getCompanyList();
    p438.response.status = v349.TiENc(110368, 110568);
    p438.body = vRequire8.SUCCESS_200("查询成功", v350);
  }
  static async ["getProjectCountByCompanyId"](p441) {
    const v351 = {
      qqEdt: function (p442, p443) {
        return p442 ^ p443;
      },
      bYuSI: function (p444, p445) {
        return p444 ^ p445;
      },
      rEEFi: function (p446, p447) {
        return p446 * p447;
      }
    };
    const {
      companyId: _0x18373c
    } = p441.request.body;
    let v352 = 0;
    let v353 = v351.qqEdt(821545, 821545);
    const v354 = await vRequire4.postJson("" + MONITOR_LOCAL_SERVER + PROJECT_API.GET_MONITOR_PROJECT_COUNT_BY_COMPANY_ID, {
      companyId: _0x18373c
    }).catch(p448 => {
      console.error(p448);
    });
    if (v354) {
      v352 = v354.data * v351.bYuSI(312121, 312120);
    }
    const v355 = await vRequire4.postJson("" + EVENT_LOCAL_SERVER + PROJECT_API.GET_EVENT_PROJECT_COUNT_BY_COMPANY_ID, {
      companyId: _0x18373c
    }).catch(p449 => {
      console.error(p449);
    });
    if (v355) {
      v353 = v351.rEEFi(v355.data, 1);
    }
    const v356 = v352 + v353;
    const v357 = await ProductModel.getProductDetailByCompanyId(_0x18373c);
    p441.response.status = v351.bYuSI(721186, 721386);
    p441.body = vRequire8.SUCCESS_200("查询成功", {
      totalProjectCount: v356,
      productInfo: v357
    });
  }
  static async ["getProductInfoByCompanyId"](p450) {
    const v358 = {
      hXNTc: function (p451, p452) {
        return p451 ^ p452;
      },
      pUaFt: "查询成功"
    };
    const {
      companyId: _0x2ad76c
    } = p450.request.body;
    const v359 = await ProductModel.getProductDetailByCompanyId(_0x2ad76c);
    p450.response.status = v358.hXNTc(374137, 374193);
    p450.body = vRequire8.SUCCESS_200(v358.pUaFt, v359);
  }
}
class C9 {
  static async createFlowDataInfoByHour(p453) {
    const v360 = {
      Pajma: function (p454, p455) {
        return p454 < p455;
      },
      kGlzS: function (p456, p457) {
        return p456 ^ p457;
      }
    };
    const v361 = p453.request.body;
    const {
      flowArray: _0x50d37c,
      dayName = ""
    } = v361;
    let v362 = "";
    for (let v363 = 0; v360.Pajma(v363, _0x50d37c.length); v363++) {
      const {
        flowCount: _0x52a959
      } = _0x50d37c[v363];
      if (_0x52a959 === 0) {
        continue;
      }
      v362 += C9.handleFlowArray(_0x50d37c[v363]);
    }
    v362 = v362.substring(0, v362.length - 1);
    const v364 = dayName.replace(new RegExp("-", "g"), "");
    const v365 = "FlowDataInfoByHour" + v364;
    let v366 = "";
    if (v362) {
      v366 = "INSERT INTO " + v365 + " (companyId, projectId, projectName, flowOrigin, productType, flowType, hourName, flowCount, createdAt, updatedAt)\n      VALUES\n      " + v362 + "\n      ";
    }
    if (v366) {
      FlowDataInfoByHourModel.createFlowDataInfosByHour(v366);
    }
    p453.response.status = 200;
    p453.body = vRequire8.SUCCESS_200("创建信息成功", v360.kGlzS(514040, 514040));
  }
  static handleFlowArray(p458) {
    const v367 = new Date().Format("yyyy-MM-dd hh:mm:ss");
    const vV367 = v367;
    function f36(p479, p480, p481, p482, p483) {
      return f18(p482 - -31, p480);
    }
    const {
      companyId: _0x37bb34,
      projectId: _0x5ac354,
      projectName: _0x12ea2c,
      productType: _0x23bdfb,
      flowType: _0x1a9f69,
      hourName: _0x5e868f,
      flowCount: _0x13a6b0
    } = p458;
    function f41(p504, p505, p506, p507, p508) {
      return f18(p508 - -683, p505);
    }
    const vF38 = "subscribe";
    let v368 = "('" + _0x37bb34 + "', '" + _0x5ac354 + "', '" + _0x12ea2c + "', '" + vF38 + "', '" + _0x23bdfb + "', '" + _0x1a9f69 + "', '" + _0x5e868f + "', " + _0x13a6b0 + ", '" + v367 + "', '" + vV367 + "'),";
    return v368;
  }
  static async getHourFlowTrendData(p509) {
    const v369 = {
      yXXra: "hourName",
      bUjzJ: "monitor",
      POIZt: "查询信息列表成功！"
    };
    const {
      companyId: _0x2067a1,
      projectIds = "",
      productType = v369.bUjzJ
    } = p509.wfParam;
    const v370 = await FlowDataInfoByHourModel.getHourFlowTrendDataForCompanyId(_0x2067a1, productType, projectIds);
    const v371 = projectIds.split(",");
    let v372 = {};
    if (v370 && v370.length) {
      v371.forEach(p510 => {
        let vInitCurDayTrendData = initCurDayTrendData({
          count: 0,
          productType: productType,
          projectId: p510
        }, v369.yXXra);
        v372[p510] = vInitCurDayTrendData.map(p511 => {
          let v373 = {
            ...p511
          };
          const {
            projectId: _0x4624b0,
            hourName: _0x33c2b4
          } = p511;
          const v374 = v370.find(p512 => p512.projectId === _0x4624b0 && _0x33c2b4 === p512.hourName) || null;
          if (v374) {
            v373.count = v374.count;
          }
          return v373;
        });
      });
    }
    p509.response.status = 200;
    p509.body = vRequire8.SUCCESS_200(v369.POIZt, v372);
  }
}
class C10 {
  static async ["createFlowDataInfoByDay"](p513) {
    const v375 = {
      NflrE: function (p514, p515) {
        return p514 ^ p515;
      },
      QoMlU: function (p516, p517) {
        return p516 ^ p517;
      },
      kPqzS: function (p518, p519) {
        return p518 ^ p519;
      },
      baukS: function (p520, p521) {
        return p520 ^ p521;
      },
      TodbS: function (p522, p523) {
        return p522 ^ p523;
      },
      tPZqo: "创建信息成功"
    };
    const v376 = p513.request.body;
    const {
      flowArray: _0xdf877b,
      dayName = ""
    } = v376;
    let v377 = "";
    for (let v378 = 0; v378 < _0xdf877b.length; v378++) {
      const {
        flowCount: _0x327770
      } = _0xdf877b[v378];
      if (_0x327770 === v375.NflrE(584172, 584172)) {
        continue;
      }
      v377 += C10.handleFlowArray(_0xdf877b[v378]);
    }
    v377 = v377.substring(v375.QoMlU(617205, 617205), v377.length - v375.QoMlU(731446, 731447));
    const v379 = dayName.substring(v375.kPqzS(572781, 572781), v375.baukS(463761, 463765));
    const v380 = "FlowDataInfoByDay" + v379;
    let v381 = "";
    if (v377) {
      v381 = "INSERT INTO " + v380 + " (companyId, projectId, projectName, productType, flowType, monthName, dayName, flowCount, createdAt, updatedAt) \n      VALUES\n      " + v377 + "\n      ";
    }
    if (v381) {
      FlowDataInfoByDayModel.createFlowDataInfosByHour(v381);
    }
    p513.response.status = v375.TodbS(113357, 113157);
    p513.body = vRequire8.SUCCESS_200(v375.tPZqo, 0);
  }
  static async ["getTotalFlowData"](p524) {
    const v382 = {
      cePSl: function (p525, p526) {
        return p525 + p526;
      },
      cyOzk: function (p527, p528) {
        return p527 < p528;
      },
      fGUEy: function (p529, p530) {
        return p529 + p530;
      },
      yXSdh: "yyyy-MM-dd",
      weOvQ: function (p531, p532) {
        return p531(p532);
      },
      JwKUd: function (p533, p534) {
        return p533 ^ p534;
      },
      WIGTZ: function (p535, p536) {
        return p535 === p536;
      }
    };
    const {
      companyId: _0x21d2f4
    } = p524.wfParam;
    const v383 = new Date();
    let v384 = v382.cePSl(v383.getMonth(), 1);
    v384 = v382.cyOzk(v384, 10) ? "0" + v384 : v384;
    let v385 = v383.getDate();
    v385 = v385 < 10 ? v382.fGUEy("0", v385) : v385;
    const v386 = v383.Format(v382.yXSdh);
    const v387 = await FlowDataInfoByDayModel.getTotalFlowCountByCompany(_0x21d2f4);
    const v388 = v387 && v387.length ? v382.weOvQ(parseInt, v387[v382.JwKUd(727467, 727467)].count) : 0;
    const v389 = await FlowDataInfoByDayModel.getTotalFlowCountByCompanyForDay(_0x21d2f4, v386);
    const v390 = v389 && v389.length ? parseInt(v382.WIGTZ(v389[v382.JwKUd(510806, 510806)].count, null) ? 0 : v389[0].count) : 0;
    const v391 = await ProductModel.getProductDetailByCompanyId(_0x21d2f4);
    const v392 = v391 ? v391.maxFlowCount * 1 : 0;
    p524.response.status = 200;
    p524.body = vRequire8.SUCCESS_200("查询信息列表成功！", {
      todayFlow: v390,
      maxFlowCount: v392,
      totalFlow: v388
    });
  }
  static async getFlowTrendData(p537) {
    const v393 = {
      zngRQ: "查询信息列表成功！"
    };
    const {
      companyId: _0x8497f,
      startDate = "",
      endDate = ""
    } = p537.wfParam;
    const v394 = await FlowDataInfoByDayModel.getFlowTrendDataForCompanyIdByDate(_0x8497f, startDate, endDate);
    const v395 = await FlowDataInfoByDayModel.getFlowDistributeDataForCompanyIdByDate(_0x8497f, startDate, endDate);
    const v396 = [];
    if (v395 && v395.length) {
      v395.forEach(p538 => {
        const {
          productType: _0x3a22bf,
          count: _0x5ef669
        } = p538;
        if (v23[_0x3a22bf]) {
          v396.push({
            productType: _0x3a22bf,
            value: _0x5ef669,
            name: v23[_0x3a22bf]
          });
        }
      });
    }
    p537.response.status = 200;
    p537.body = vRequire8.SUCCESS_200(v393.zngRQ, {
      flowTrend: v394,
      flowDistribute: v396
    });
  }
  static async getFlowTableListData(p539) {
    const v397 = {
      XBJiM: function (p540, p541) {
        return p540(p541);
      },
      ZeutB: function (p542, p543) {
        return p542 ^ p543;
      }
    };
    const {
      companyId: _0x459f23,
      productType = "monitor",
      projectName = "",
      page = 1,
      pageSize = 10
    } = p539.wfParam;
    let v398 = 0;
    const v399 = await FlowDataInfoByDayModel.getFlowTotalCountForCompanyId(_0x459f23, productType, projectName);
    if (v399 && v399.length) {
      v399.forEach(p544 => {
        v398 += v397.XBJiM(Number, p544.count);
      });
    }
    const v400 = await FlowDataInfoByDayModel.getFlowTableListDataForCompanyId({
      companyId: _0x459f23,
      productType: productType,
      projectName: projectName,
      page: page,
      pageSize: pageSize
    });
    let v401 = v400 && v400.length ? v400 : [];
    p539.response.status = v397.ZeutB(123312, 123256);
    p539.body = vRequire8.SUCCESS_200("查询信息列表成功！", {
      list: v401,
      total: v398
    });
  }
  static async getFlowListByCompanyIdAndProjectIds(p545) {
    const v402 = {
      bipTD: function (p546, p547) {
        return p546 ^ p547;
      }
    };
    const {
      companyId: _0x17bf6a,
      projectIds = "",
      startDate = "",
      endDate = "",
      productType: _0x114eba
    } = p545.wfParam;
    const v403 = await FlowDataInfoByDayModel.getFlowListByCompanyIdAndProjectIds(_0x17bf6a, projectIds, startDate, endDate, _0x114eba);
    const v404 = projectIds.split(",");
    const v405 = v403 && v403.length ? v403 : [];
    p545.response.status = v402.bipTD(835331, 835531);
    p545.body = vRequire8.SUCCESS_200("查询信息列表成功！", v405);
  }
  static async getLimitCompanyIdForCloud(p548) {
    const v406 = {
      kHUgB: "查询信息列表成功！"
    };
    const v407 = await FlowDataInfoByDayModel.getLimitCompanyIdForCloud();
    p548.response.status = 200;
    p548.body = vRequire8.SUCCESS_200(v406.kHUgB, v407);
  }
  static async getTotalFlowCountByCompanyForDay(p549) {
    const v408 = {
      MnSZD: function (p550, p551) {
        return p550 ^ p551;
      },
      NtVbU: function (p552, p553) {
        return p552 ^ p553;
      }
    };
    let v409 = "1";
    const v410 = await CompanyModel.getFirstCompany();
    if (v410 && v410.length) {
      v409 = v410[0].companyId;
    }
    const v411 = new Date().Format("yyyy-MM-dd");
    const v412 = await FlowDataInfoByDayModel.getTotalFlowCountByCompanyForDay(v409, v411);
    let v413 = 0;
    if (v412 && v412.length) {
      v413 = v412[v408.MnSZD(257851, 257851)].count * v408.NtVbU(661933, 661932);
    }
    p549.response.status = 200;
    p549.body = vRequire8.SUCCESS_200("success", v413);
  }
}
class C11 {
  static async createOrder(p554) {
    const v414 = {
      Kzvvg: function (p555, p556) {
        return p555 ^ p556;
      }
    };
    const {
      orderId: _0x1ffd42,
      productType: _0x526ae4,
      maxFlowCount: _0x1b2c84,
      projectCount: _0x480c00,
      price: _0x1059b1,
      phone: _0x2b8100,
      year: _0x6849b,
      enableDataExport: _0x47b33c,
      saveDays: _0x1f81e7
    } = JSON.parse(p554.request.body);
    const {
      userId: _0x5de080,
      companyId: _0x38c228,
      emailName: _0x51b1e0
    } = p554.user;
    const v415 = await OrderInfoModel.createOrderInfo({
      companyId: _0x38c228,
      userId: _0x5de080,
      orderId: _0x1ffd42,
      productType: _0x526ae4,
      maxFlowCount: _0x1b2c84,
      projectCount: _0x480c00,
      phone: _0x2b8100,
      email: _0x51b1e0,
      price: _0x1059b1,
      year: _0x6849b,
      isPay: 0,
      invoice: 0,
      enableDataExport: _0x47b33c,
      saveDays: _0x1f81e7
    });
    p554.response.status = v414.Kzvvg(378457, 378513);
    p554.body = vRequire8.SUCCESS_200("查询成功", v415);
  }
  static async ["getOrderInfoList"](p557) {
    const v416 = {
      PrJVy: function (p558, p559) {
        return p558 < p559;
      },
      SHDEj: function (p560, p561) {
        return p560 < p561;
      },
      mekcR: function (p562, p563) {
        return p562 * p563;
      },
      qBVkp: function (p564, p565) {
        return p564 ^ p565;
      },
      hajOi: "查询成功"
    };
    const {
      userId: _0x19ff33,
      companyId: _0x170fd1
    } = p557.user;
    const v417 = await OrderInfoModel.getOrderInfoListByUserId(_0x19ff33);
    const v418 = [];
    for (let v419 = 0; v416.PrJVy(v419, v417.length); v419++) {
      if (v417[v419].isPay === 0) {
        v418.push(v417[v419]);
      }
    }
    for (let v420 = 0; v416.SHDEj(v420, v418.length); v420++) {
      const {
        orderId: _0x1f1aea,
        productType: _0x15f7b,
        maxFlowCount: _0xf92586,
        projectCount: _0x45e97f,
        year: _0x196244,
        enableDataExport = false,
        saveDays = 30
      } = v418[v420];
      const v421 = new Date(new Date().getTime() + v416.mekcR(_0x196244 * 366 * v416.qBVkp(946280, 946288), 3600) * 1000).Format("yyyy-MM-dd 00:00:00");
      const v422 = await vRequire4.postJson("http://www.webfunny.cn/config/paiPaymentCheck", {
        orderNum: _0x1f1aea
      }).catch(p566 => {
        console.error(p566);
      });
      if (v422 && v422.data === true) {
        await OrderInfoModel.updateByOrderId(_0x1f1aea, {
          isPay: 1,
          payTime: new Date().Format("yyyy-MM-dd hh:mm:ss"),
          endDate: v421
        });
        await ProductModel.updateProductByCompanyId(_0x170fd1, {
          isValid: 0
        });
        await ProductModel.createProduct({
          companyId: _0x170fd1,
          orderId: _0x1f1aea,
          productType: _0x15f7b,
          usedFlowCount: 0,
          maxFlowCount: _0xf92586 * 10000,
          projectCount: _0x45e97f,
          endDate: v421,
          isValid: 1,
          enableDataExport: enableDataExport,
          saveDays: saveDays
        });
      }
    }
    const v423 = await OrderInfoModel.getOrderInfoListByUserId(_0x19ff33);
    p557.response.status = 200;
    p557.body = vRequire8.SUCCESS_200(v416.hajOi, v423);
  }
  static async ["checkSameOrder"](p567) {
    const v424 = {
      ibjKA: function (p568, p569) {
        return p568 > p569;
      }
    };
    const {
      productType: _0x24ead8,
      maxFlowCount: _0x25b9dd,
      price: _0x4f2614
    } = JSON.parse(p567.request.body);
    const {
      userId: _0x5599cc
    } = p567.user;
    const v425 = await OrderInfoModel.checkSameOrder(_0x5599cc, _0x24ead8, _0x25b9dd, _0x4f2614);
    const v426 = v425 && v424.ibjKA(v425.length, 0);
    p567.response.status = 200;
    p567.body = vRequire8.SUCCESS_200("查询成功", v426);
  }
  static async applyInvoice(p570) {
    const v427 = {
      GOilM: function (p571, p572) {
        return p571 * p572;
      },
      sIdOz: function (p573, p574) {
        return p573 ^ p574;
      },
      ASWtb: "请完善公司信息后，再开票！【点击头像 - 公司名称】",
      UWOsV: function (p575, p576) {
        return p575 - p576;
      },
      yvfYc: function (p577, p578) {
        return p577 < p578;
      },
      RFCmh: "success"
    };
    const {
      orderId: _0x281cbd,
      invoiceType: _0x1a1dc4
    } = JSON.parse(p570.request.body);
    const {
      companyId: _0x78ab08
    } = p570.user;
    const v428 = await CompanyModel.getCompanyInfo(_0x78ab08);
    if (v427.GOilM(v428.isComplete, v427.sIdOz(862808, 862809)) === v427.sIdOz(615886, 615886)) {
      p570.response.status = 412;
      p570.body = vRequire8.ERROR_412(v427.ASWtb);
      return;
    }
    const v429 = await OrderInfoModel.getOrderDetail(_0x281cbd);
    const v430 = v427.UWOsV(new Date().getTime(), new Date(v429.latestInvoiceTime).getTime());
    if (v427.yvfYc(v430, 86400000)) {
      p570.response.status = v427.sIdOz(418764, 418384);
      p570.body = vRequire8.ERROR_412("开票请求已发起，请勿频繁操作哦！");
      return;
    }
    await OrderInfoModel.updateByOrderId(_0x281cbd, {
      latestInvoiceTime: new Date().getTime()
    });
    vRequire20.config.text.content = "客户发票申请！\n开票金额：" + v429.price + "元\n开票类型：" + _0x1a1dc4 + "\n开票内容：技术服务费\n\n公司名称：" + v428.companyName + "\n公司税号：" + v428.companyTax + "\n开户银行：" + v428.bankName + "\n银行账号：" + v428.bankNumber + "\n注册地址：" + v428.companyAddress + "\n注册电话：" + v428.companyPhone + "\n\n联系电话：" + v429.phone + "\n联系邮箱：" + v429.email + "\n        ";
    await vRequire4.postJson(accountInfo.invoiceHookForDingding, vRequire20.config);
    p570.response.status = 200;
    p570.body = vRequire8.SUCCESS_200(v427.RFCmh, {});
  }
}
class C12 {
  static async create(p589) {
    let v431 = p589.request.body;
    await MenuPermissionsModel.createMenuPermissions(v431);
  }
  static async updateMenuPermission(p590) {
    const v432 = {
      ysOCf: "permissionRes",
      UcYTU: function (p591, p592) {
        return p591 ^ p592;
      }
    };
    const {
      teamId: _0x3f10ee,
      targetUserId: _0x13ea95,
      chooseMonitorMenus: _0x528184,
      chooseEventMenus: _0xf96a6a
    } = JSON.parse(p590.request.body);
    console.log(_0x3f10ee, _0x13ea95, _0x528184, _0xf96a6a);
    const v433 = _0x528184.join(",");
    const v434 = _0xf96a6a.join(",");
    const v435 = await MenuPermissionsModel.getMenuPermissionsFromTeam(_0x3f10ee, _0x13ea95);
    console.log(v432.ysOCf, v435);
    if (v435) {
      await MenuPermissionsModel.updateMenuPermissions(v435.id, {
        teamId: _0x3f10ee,
        userId: _0x13ea95,
        monitorMenu: v433,
        eventMenu: v434
      });
    } else {
      await MenuPermissionsModel.createMenuPermissions({
        teamId: _0x3f10ee,
        userId: _0x13ea95,
        monitorMenu: v433,
        eventMenu: v434
      });
    }
    p590.response.status = v432.UcYTU(277448, 277248);
    p590.body = vRequire8.SUCCESS_200("success", v432.UcYTU(429146, 429146));
  }
  static async getMenuPermissionsByProject(p593) {
    const v436 = {
      YfdGx: function (p594, p595) {
        return p594 === p595;
      },
      oxiDj: "success"
    };
    const {
      projectId: _0xde77f
    } = JSON.parse(p593.request.body);
    const {
      userId: _0x1524cd,
      userType: _0x446a0d
    } = p593.user;
    let v437 = "";
    let v438 = "";
    if (!v436.YfdGx(_0x446a0d, "superAdmin") && _0x446a0d !== "admin") {
      const v439 = await TeamModel.getTeamByProjectId(_0xde77f);
      if (v439 && v439.length) {
        const {
          id: _0x31077f
        } = v439[0];
        const v440 = await MenuPermissionsModel.getMenuPermissionsFromTeam(_0x31077f, _0x1524cd);
        if (v440) {
          v437 = v440.monitorMenu;
          v438 = v440.eventMenu;
        }
      }
    }
    p593.response.status = 200;
    p593.body = vRequire8.SUCCESS_200(v436.oxiDj, {
      monitorMenuPermissions: v437,
      eventMenuPermissions: v438
    });
  }
}
class C13 {
  static async ["create"](p596) {
    let v441 = p596.request.body;
    const v442 = await ProductModel.createProduct(v441);
    p596.response.status = 200;
    p596.body = vRequire8.SUCCESS_200("创建信息成功", v442);
  }
  static async getProjectByCompanyIdForMonth(p597) {
    const v443 = {
      kEAVy: "创建信息成功"
    };
    const {
      companyId: _0x3967fc
    } = p597.wfParam;
    const v444 = new Date().Format("yyyy-MM");
    const v445 = await ProductModel.getProjectByCompanyIdForMonth(_0x3967fc, v444);
    p597.response.status = 200;
    p597.body = vRequire8.SUCCESS_200(v443.kEAVy, v445);
  }
  static async ["createNewProduct"](p598) {
    let v446 = p598.request.body;
    const v447 = await ProductModel.createProduct(v446);
    p598.response.status = 200;
    p598.body = vRequire8.SUCCESS_200("创建信息成功", v447);
  }
  static async ["batchCreateOrUpdateProduct"](p599) {
    const v448 = {
      ZOUBr: "批量创建或者批量更新流量套餐产品成功！！！"
    };
    const v449 = WEBFUNNY_CONFIG_URI + "/config/getProductList";
    const v450 = await vRequire4.postJson(v449);
    const {
      data = {}
    } = v450;
    let v451 = [];
    let v452 = [];
    let v453 = [];
    const v454 = data.newProductList || [];
    const v455 = data.expireOrderIds || [];
    if (v454.length) {
      v451 = v454.map(p600 => {
        const {
          productType: _0x52e349,
          companyId: _0x29ae0c,
          endDate: _0x2a0a11,
          flowCount: _0x34811f,
          orderId: _0x1792a5,
          month: _0x4a2c7c
        } = p600;
        v452.push(_0x1792a5);
        return {
          companyId: _0x29ae0c,
          endDate: _0x2a0a11,
          orderId: _0x1792a5,
          month: _0x4a2c7c,
          productType: _0x52e349,
          maxFlowCount: _0x34811f,
          usedFlowCount: 0,
          isValid: 1
        };
      });
    }
    if (v455.length) {
      v453 = data.expireOrderIds;
      v452 = [...v452, ...v453];
    }
    if (v452.length) {
      const v456 = await ProductModel.batchQueryProductByOrderId(v452);
      const v457 = new Date().Format("yyyy-MM");
      v451 = v451.filter(p601 => {
        const {
          orderId: _0x59733c,
          month: _0x28ede7,
          companyId: _0x3ead2b
        } = p601;
        if (v456.length) {
          return !v456.find(p602 => p602.orderId === _0x59733c && p602.companyId === _0x3ead2b && p602.month === _0x28ede7);
        } else {
          return true;
        }
      });
      if (v455.length) {
        const v458 = v456.filter(p603 => p603.month === v457 && v455.includes(p603.orderId));
        v451 = v451.map(p604 => {
          const {
            month: _0x30155a,
            companyId: _0x28e747
          } = p604;
          let v459 = {
            ...p604
          };
          const v460 = v458.find(p605 => p605.month === _0x30155a && p605.companyId === _0x28e747) || null;
          if (v460) {
            v459.usedFlowCount += v460.usedFlowCount || 0;
            v459.maxFlowCount += v460.maxFlowCount || 0;
          }
          return v459;
        });
      }
      if (v453.length) {
        await ProductModel.batchUpdateProductByOrderId(v453, {
          isValid: 0
        });
      }
      if (v451.length) {
        await ProductModel.batchCreateProduct(v451);
      }
      console.log(v448.ZOUBr);
    }
  }
  static async ["batchCreateProduct"](p606) {
    const v461 = {
      HvbcO: function (p607, p608) {
        return p607 ^ p608;
      },
      aVqWV: "批量创建信息成功"
    };
    let v462 = p606.request.body;
    const v463 = await ProductModel.batchCreateProduct(v462);
    p606.response.status = v461.HvbcO(432483, 432555);
    p606.body = vRequire8.SUCCESS_200(v461.aVqWV, v463);
  }
  static async batchUpdateProduct(p609) {
    const v464 = {
      xaZon: "批量更新信息成功"
    };
    const {
      ids: _0x377bbd
    } = p609.wfParam;
    const v465 = await ProductModel.batchUpdateProductByOrderId(_0x377bbd, {
      isValid: 1
    });
    p609.response.status = 200;
    p609.body = vRequire8.SUCCESS_200(v464.xaZon, v465);
  }
  static async ["getValidProduct"](p610) {
    const v466 = {
      mgkDD: function (p611, p612) {
        return p611 ^ p612;
      },
      DgrVm: "success"
    };
    const {
      companyId: _0x2e4da8
    } = p610.user;
    const v467 = await ProductModel.getValidProduct(_0x2e4da8);
    const v468 = v467 && v467.length ? v467[0] : {};
    const v469 = new Date().Format("yyyy-MM-dd");
    const v470 = await FlowDataInfoByDayModel.getFlowCountForCompanyIdByDayName(_0x2e4da8, v469);
    const v471 = v470 && v470.length ? v470[v466.mgkDD(896271, 896271)].count : 0;
    v468.usedFlowCount = v471;
    p610.response.status = 200;
    p610.body = vRequire8.SUCCESS_200(v466.DgrVm, v468);
  }
}
class C14 {
  static async create(p613) {
    let v472 = p613.request.body;
    if (v472.title && v472.author && v472.content && v472.category) {
      let v473 = await TeamModel.createTeam(v472);
      let v474 = await TeamModel.getTeamDetail(v473.id);
      p613.response.status = 200;
      p613.body = vRequire8.SUCCESS_200("创建信息成功", v474);
    } else {
      p613.response.status = 412;
      p613.body = vRequire8.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async createNewTeam(p614) {
    const v475 = {
      apRcD: function (p615, p616) {
        return p615 ^ p616;
      },
      NfUMp: function (p617, p618) {
        return p617 ^ p618;
      }
    };
    let v476 = 0;
    const v477 = await TeamModel.getTeamCount();
    if (v477 && v477.length) {
      v476 = v477[v475.apRcD(176493, 176493)].count * 1;
    }
    const v478 = await C5.checkFreeLicense();
    if (v478 === true && v476 >= v475.NfUMp(114869, 114868)) {
      p614.response.status = 412;
      p614.body = vRequire8.ERROR_412("社区版团队数量已达上限，无法继续创建！");
      return;
    }
    let v479 = JSON.parse(p614.request.body);
    const {
      teamName: _0x175090
    } = v479;
    const {
      userId: _0xd64540,
      companyId: _0x4625c6
    } = p614.user;
    const v480 = {
      teamName: _0x175090,
      leaderId: _0xd64540,
      members: _0xd64540,
      webMonitorIds: "",
      companyId: _0x4625c6
    };
    const v481 = await TeamModel.createTeam(v480);
    p614.response.status = 200;
    p614.body = vRequire8.SUCCESS_200("创建信息成功", v481);
  }
  static async ["createNewTeamForApi"](p619) {
    const v482 = {
      kuMdY: function (p620, p621) {
        return p620 ^ p621;
      },
      WmlKF: "团队名称重复！"
    };
    const {
      teamName: _0x55e61f,
      userId: _0x499674
    } = p619.request.body;
    const v483 = {
      teamName: _0x55e61f,
      leaderId: _0x499674,
      members: _0x499674,
      webMonitorIds: ""
    };
    const v484 = await TeamModel.getTeamDetailByName(_0x55e61f);
    if (v484) {
      p619.response.status = v482.kuMdY(474455, 474315);
      p619.body = vRequire8.ERROR_412(v482.WmlKF);
      return;
    }
    const v485 = await TeamModel.createTeam(v483);
    p619.response.status = 200;
    p619.body = vRequire8.SUCCESS_200("团队创建成功", v485);
  }
  static async ["deleteTeam"](p622) {
    const v486 = {
      hAWRZ: function (p623, p624) {
        return p623 ^ p624;
      },
      TSJwL: "团队删除成功"
    };
    let v487 = JSON.parse(p622.request.body);
    const {
      id: _0x3d1cc6
    } = v487;
    const v488 = await TeamModel.deleteTeam(_0x3d1cc6);
    if (v488) {
      p622.response.status = v486.hAWRZ(266005, 266205);
      p622.body = vRequire8.SUCCESS_200(v486.TSJwL, 0);
    } else {
      p622.response.status = v486.hAWRZ(760051, 760175);
      p622.body = vRequire8.ERROR_412("团队删除失败！");
    }
  }
  static async moveProToTeam(p625) {
    let v489 = JSON.parse(p625.request.body);
    const {
      showMoveMonitorId: _0x4f8ae0,
      chooseTeamId: _0x55bc38
    } = v489;
    const v490 = await TeamModel.getTeamDetail(_0x55bc38);
    const v491 = v490.webMonitorIds + "," + _0x4f8ae0;
    await TeamModel.updateTeam(_0x55bc38, {
      webMonitorIds: v491
    });
    p625.response.status = 200;
    p625.body = vRequire8.SUCCESS_200("success", "");
  }
  static async ["handleAllApplicationConfig"]() {
    const v492 = {
      FNapL: "monitor",
      IVWoU: "event"
    };
    const v493 = await ApplicationConfigModel.getAllApplicationConfig();
    let v494 = {};
    let v495 = {};
    v493.forEach(p626 => {
      const v496 = JSON.parse(p626.configValue);
      switch (p626.systemName) {
        case v492.FNapL:
          v494 = v496;
          break;
        case v492.IVWoU:
          v495 = v496;
          break;
        default:
          break;
      }
    });
    return {
      monitor: v494,
      event: v495
    };
  }
  static async handleTeamList(p627, p628, p629, p630) {
    const v497 = {
      LunDJ: "post",
      Calqi: function (p631, p632) {
        return p631 ^ p632;
      },
      teveS: "event",
      HOztg: function (p633, p634) {
        return p633 + p634;
      }
    };
    const v498 = await C14.handleAllApplicationConfig();
    const {
      monitor: _0x34782d,
      event: _0x40087f
    } = v498;
    let v499 = [];
    if (p630) {
      v499 = await TeamModel.getTeamListWithTeamId(p627, p628, p629, p630);
    } else {
      v499 = await TeamModel.getTeamList(p627, p628, p629);
    }
    for (let v500 = 0; v500 < v499.length; v500++) {
      const v501 = v499[v500];
      const {
        leaderId: _0x186665,
        members: _0x583e26,
        webMonitorIds: _0x455876
      } = v501;
      const v502 = await UserModel.getUserListByMembers(_0x583e26);
      v501.members = v502;
      v502.forEach(p635 => {
        if (p635.userId == _0x186665) {
          v501.leader = p635;
          return false;
        }
      });
      const v503 = await vRequire4.ajaxInside(v497.LunDJ, "" + LOCAL_SERVER + PROJECT_API.MONITOR_PROJECT_SIMPLE_LIST_BY_WEBMONITOR_IDS, {
        webMonitorIds: _0x455876
      });
      const v504 = v503 ? v503.data : [];
      for (let v505 = v497.Calqi(321550, 321550); v505 < v504.length; v505++) {
        let v506 = v504[v505];
        const {
          viewers: _0x319ce0
        } = v506;
        v506.id = "m-" + v506.id;
        v506.sysType = "monitor";
        const v507 = await UserModel.getUserListByViewers(_0x319ce0);
        v506.viewerList = v507;
      }
      const v508 = await vRequire4.ajaxInside("post", "" + LOCAL_SERVER + PROJECT_API.EVENT_PROJECT_SIMPLE_LIST_BY_WEBMONITOR_IDS, {
        webMonitorIds: _0x455876
      });
      const v509 = v508 ? v508.data : [];
      for (let v510 = 0; v510 < v509.length; v510++) {
        let v511 = v509[v510];
        const {
          viewers: _0x1f82fb
        } = v511;
        v511.projectType = v497.teveS;
        v511.sysType = "event";
        v511.id = v497.HOztg("e-", v511.id);
        const v512 = await UserModel.getUserListByViewers(_0x1f82fb);
        v511.viewerList = v512;
      }
      v501.projects = [...v504, ...v509];
    }
    return v499;
  }
  static async getTeamList(p636) {
    const v513 = {
      dgUou: "success"
    };
    let v514 = "";
    let v515 = "";
    let v516 = "";
    if (p636.user) {
      v514 = p636.user.userId;
      v515 = p636.user.userType;
      v516 = p636.user.companyId;
    } else {
      const v517 = p636.request.body;
      v514 = v517.userId;
      v515 = v517.userType;
      v516 = v517.companyId;
    }
    if (!v516) {
      p636.response.status = 401;
      p636.body = vRequire8.ERROR_401("没有公司ID，请重新登录");
      return;
    }
    const v518 = await C14.handleTeamList(v514, v515, v516);
    p636.response.status = 200;
    p636.body = vRequire8.SUCCESS_200(v513.dgUou, v518);
  }
  static async getSimpleTeamList(p637) {
    const v519 = {
      NZSrB: function (p638, p639) {
        return p638 ^ p639;
      }
    };
    let v520 = "";
    let v521 = "";
    let v522 = "";
    if (p637.user) {
      v520 = p637.user.userId;
      v521 = p637.user.userType;
      v522 = p637.user.companyId;
    } else {
      const v523 = p637.request.body;
      v520 = v523.userId;
      v521 = v523.userType;
      v522 = v523.companyId;
    }
    if (!v522) {
      p637.response.status = 401;
      p637.body = vRequire8.ERROR_401("没有公司ID，请重新登录");
      return;
    }
    const v524 = await TeamModel.getTeamList(v520, v521, v522);
    p637.response.status = v519.NZSrB(773458, 773530);
    p637.body = vRequire8.SUCCESS_200("success", v524);
  }
  static async getTeamMemberByUser(p640) {
    const v525 = {
      irneO: function (p641, p642) {
        return p641 ^ p642;
      },
      JFElC: function (p643, p644) {
        return p643 ^ p644;
      }
    };
    const {
      members: _0x5aadce,
      teamId = ""
    } = JSON.parse(p640.request.body);
    const v526 = await UserModel.getUserListByMembers(_0x5aadce);
    if (teamId) {
      for (let v527 = v525.irneO(966380, 966380); v527 < v526.length; v527++) {
        const {
          userId: _0x2ef054
        } = v526[v527];
        const v528 = await MenuPermissionsModel.getMenuPermissionsFromTeam(teamId, _0x2ef054);
        if (v528) {
          v526[v527].monitorMenu = v528.monitorMenu;
          v526[v527].eventMenu = v528.eventMenu;
        } else {
          v526[v527].monitorMenu = "";
          v526[v527].eventMenu = "";
        }
      }
    }
    p640.response.status = v525.JFElC(574311, 574383);
    p640.body = vRequire8.SUCCESS_200("success", v526);
  }
  static async ["getTeamListWithoutToken"](p645) {
    const v529 = p645.request.body;
    const {
      userId: _0x216a8d,
      userType: _0xe28a94,
      companyId: _0x599b52,
      teamId: _0x4b1db1
    } = v529;
    if (!_0x599b52) {
      p645.response.status = 401;
      p645.body = vRequire8.ERROR_401("没有公司ID，请重新登录");
      return;
    }
    const v530 = await C14.handleTeamList(_0x216a8d, _0xe28a94, _0x599b52, _0x4b1db1);
    p645.response.status = 200;
    p645.body = vRequire8.SUCCESS_200("success", v530);
  }
  static async getTeams(p646) {
    let v531 = "";
    let v532 = "";
    let v533 = "";
    if (p646.user) {
      v531 = p646.user.userId;
      v532 = p646.user.userType;
      v533 = p646.user.companyId;
    } else {
      const v534 = p646.request.body;
      v531 = v534.userId;
      v532 = v534.userType;
      v533 = v534.companyId;
    }
    const v535 = await TeamModel.getTeamList(v531, v532, v533);
    p646.response.status = 200;
    p646.body = vRequire8.SUCCESS_200("success", v535);
  }
  static async addTeamMember(p647) {
    const v536 = {
      jnADP: function (p648, p649) {
        return p648 ^ p649;
      }
    };
    let v537 = JSON.parse(p647.request.body);
    const {
      id: _0x1d5218,
      members: _0x13afb4
    } = v537;
    await TeamModel.updateTeam(_0x1d5218, {
      members: _0x13afb4
    });
    p647.response.status = v536.jnADP(697596, 697396);
    p647.body = vRequire8.SUCCESS_200("success", "");
  }
  static async updateTeamProjects(p650) {
    const v538 = {
      evjkh: function (p651, p652) {
        return p651 ^ p652;
      }
    };
    let v539 = JSON.parse(p650.request.body);
    const {
      id: _0x6c82b9,
      webMonitorIds: _0x449b18
    } = v539;
    const v540 = await TeamModel.getTeamDetail(_0x6c82b9);
    const v541 = v540 ? v540.webMonitorIds.split(",") : "";
    const v542 = [];
    v541.forEach(p653 => {
      if (_0x449b18 !== p653) {
        v542.push(p653);
      }
    });
    await TeamModel.updateTeam(_0x6c82b9, {
      webMonitorIds: v542.toString()
    });
    p650.response.status = v538.evjkh(720621, 720421);
    p650.body = vRequire8.SUCCESS_200("success", "");
  }
  static async ["getAllTeamList"](p654) {
    const v543 = await TeamModel.getAllTeamList();
    p654.response.status = 200;
    p654.body = vRequire8.SUCCESS_200("success", v543);
  }
  static async getTeamMembersByWebMonitorId(p655) {
    const v544 = {
      WSiJl: "success"
    };
    let v545 = {};
    try {
      v545 = JSON.parse(p655.request.body);
    } catch (_0x1bc38c) {
      v545 = p655.request.body;
    }
    const {
      webMonitorId: _0x396707
    } = v545;
    const v546 = await TeamModel.getTeamMembersByWebMonitorId(_0x396707);
    const v547 = v546 && v546.length > 0 ? v546[0].members.split(",") : [];
    const v548 = await UserModel.getUsersByUserIds(v547);
    p655.response.status = 200;
    p655.body = vRequire8.SUCCESS_200(v544.WSiJl, v548);
  }
  static async resetTeamLeader(p656) {
    const v549 = {
      zKPtU: function (p657, p658) {
        return p657 !== p658;
      },
      VxlCk: function (p659, p660) {
        return p659 !== p660;
      },
      NlfNq: "您不是团长，没有权限操作！",
      EweTJ: "success"
    };
    let v550 = JSON.parse(p656.request.body);
    const v551 = v550.userId;
    const v552 = v550.teamId;
    const {
      userId: _0x42d4e1,
      userType: _0x118d48
    } = p656.user;
    if (v549.zKPtU(_0x118d48, "admin") && v549.VxlCk(_0x118d48, "superAdmin")) {
      const v553 = await TeamModel.checkTeamLeader(v552, _0x42d4e1);
      if (!v553 || !v553.length) {
        p656.response.status = 412;
        p656.body = vRequire8.ERROR_412(v549.NlfNq);
        return;
      }
    }
    const v554 = await TeamModel.checkTeamMember(v552, v551);
    if (!v554 || !v554.length) {
      p656.response.status = 412;
      p656.body = vRequire8.ERROR_412("目标不是团队成员，无法执行此操作！");
      return;
    }
    await TeamModel.updateTeam(v552, {
      leaderId: v551
    });
    p656.response.status = 200;
    p656.body = vRequire8.SUCCESS_200(v549.EweTJ, "");
  }
  static async findTeamListByLeaderId(p661) {
    const v555 = {
      EiQLf: "success"
    };
    let v556 = p661.request.body;
    const {
      userId: _0x58e651
    } = v556;
    const v557 = await TeamModel.findTeamListByLeaderId(_0x58e651);
    p661.response.status = 200;
    p661.body = vRequire8.SUCCESS_200(v555.EiQLf, v557);
  }
  static async getTeamDetail(p662) {
    const v558 = {
      dsTKF: "success"
    };
    let v559 = JSON.parse(p662.request.body);
    const {
      chooseTeamId: _0x5de9ba
    } = v559;
    const v560 = await TeamModel.getTeamDetail(_0x5de9ba);
    p662.response.status = 200;
    p662.body = vRequire8.SUCCESS_200(v558.dsTKF, v560);
  }
  static async updateTeam(p663) {
    const v561 = {
      eRzgY: function (p664, p665) {
        return p664 + p665;
      }
    };
    let v562 = JSON.parse(p663.request.body);
    const {
      id: _0x31ee5f,
      webMonitorIds: _0x70140b
    } = v562;
    const v563 = await TeamModel.getTeamDetail(_0x31ee5f);
    const v564 = v561.eRzgY(v563.webMonitorIds + ",", _0x70140b);
    await TeamModel.updateTeam(_0x31ee5f, {
      webMonitorIds: v564
    });
    p663.response.status = 200;
    p663.body = vRequire8.SUCCESS_200("success", 0);
  }
  static async addViewers(p666) {
    const v565 = {
      YgjCJ: "success",
      NRUVA: function (p667, p668) {
        return p667 ^ p668;
      }
    };
    const v566 = await C14.handleAllApplicationConfig();
    const {
      monitor: _0x4ab4b7,
      event: _0x3f33ed
    } = v566;
    const {
      webMonitorId: _0x1d12e4,
      viewerList: _0x42f2d7,
      sysType: _0x1c24a0
    } = JSON.parse(p666.request.body);
    const v567 = _0x42f2d7.toString();
    if (_0x1c24a0 === "monitor") {
      const v568 = await vRequire4.ajaxInside("post", "" + LOCAL_SERVER + PROJECT_API.MONITOR_ADD_VIEWERS, {
        webMonitorId: _0x1d12e4,
        viewers: v567
      });
      if (!v568) {
        p666.response.status = 412;
        p666.body = vRequire8.ERROR_412("观察者添加失败!");
      } else {
        p666.response.status = 200;
        p666.body = vRequire8.SUCCESS_200(v565.YgjCJ, v565.NRUVA(194515, 194515));
      }
    } else if (_0x1c24a0 === "event") {
      const v569 = await vRequire4.ajaxInside("post", "" + LOCAL_SERVER + PROJECT_API.EVENT_ADD_VIEWERS, {
        webMonitorId: _0x1d12e4,
        viewers: v567
      });
      if (!v569) {
        p666.response.status = 412;
        p666.body = vRequire8.ERROR_412("观察者添加失败!");
      } else {
        p666.response.status = 200;
        p666.body = vRequire8.SUCCESS_200(v565.YgjCJ, 0);
      }
    }
  }
  static async ["forbiddenRightCheck"](p669) {
    const v570 = {
      ZBvji: function (p670, p671) {
        return p670 === p671;
      },
      fLJmp: "superAdmin",
      xltYC: function (p672, p673) {
        return p672 === p673;
      },
      oALUX: "admin",
      gllxD: function (p674, p675) {
        return p674 ^ p675;
      },
      zYcVX: "success"
    };
    let v571 = JSON.parse(p669.request.body);
    const {
      id: _0x35560a,
      webMonitorId: _0x3cd45b,
      sysType: _0x59c39b
    } = v571;
    const {
      userId: _0x1e9c3f,
      userType: _0x6c3895
    } = p669.user;
    let v572 = "";
    const v573 = await TeamModel.getTeamMembersByWebMonitorId(_0x3cd45b);
    if (v573 && v573.length) {
      v572 = v573[0].leaderId;
    }
    if (!v570.ZBvji(_0x6c3895, v570.fLJmp) && !v570.xltYC(_0x6c3895, v570.oALUX) && v572 !== _0x1e9c3f) {
      p669.response.status = 403;
      p669.body = vRequire8.ERROR_403("你没有权限执行此操作！");
      return;
    }
    p669.response.status = v570.gllxD(611500, 611428);
    p669.body = vRequire8.SUCCESS_200(v570.zYcVX, 0);
  }
  static async forbiddenProject(p676) {
    const v574 = {
      CkQjX: function (p677, p678) {
        return p677 === p678;
      },
      HDGxQ: "admin",
      jFTkC: "你没有权限执行此操作！",
      EDMUT: function (p679, p680) {
        return p679 ^ p680;
      },
      IiPfK: "post",
      LvvSo: "禁用失败!",
      vARrz: "event"
    };
    let v575 = JSON.parse(p676.request.body);
    const {
      id: _0x27294a,
      webMonitorId: _0x1974ae,
      sysType: _0x41471d
    } = v575;
    const {
      userId: _0x1912a7,
      userType: _0x159e65
    } = p676.user;
    let v576 = "";
    const v577 = await TeamModel.getTeamMembersByWebMonitorId(_0x1974ae);
    if (v577 && v577.length) {
      v576 = v577[0].leaderId;
    }
    if (!v574.CkQjX(_0x159e65, "superAdmin") && _0x159e65 !== v574.HDGxQ && !v574.CkQjX(v576, _0x1912a7)) {
      p676.response.status = 403;
      p676.body = vRequire8.ERROR_403(v574.jFTkC);
      return;
    }
    const v578 = await C14.handleAllApplicationConfig();
    const {
      monitor: _0xe55eca,
      event: _0x5b4a2a
    } = v578;
    if (_0x41471d === "monitor") {
      const v579 = _0x27294a.split("-")[v574.EDMUT(390010, 390011)];
      const v580 = await vRequire4.ajaxInside(v574.IiPfK, "" + LOCAL_SERVER + PROJECT_API.FORBIDDEN_PROJECT, {
        id: v579
      });
      if (!v580) {
        p676.response.status = v574.EDMUT(441016, 441124);
        p676.body = vRequire8.ERROR_412(v574.LvvSo);
      } else {
        p676.response.status = 200;
        p676.body = vRequire8.SUCCESS_200("success", v574.EDMUT(638041, 638041));
      }
    } else if (_0x41471d === v574.vARrz) {}
  }
  static async deleteProjectRightCheck(p681) {
    const v581 = {
      adnly: function (p682, p683) {
        return p682 ^ p683;
      },
      Rkzrq: "success"
    };
    let v582 = JSON.parse(p681.request.body);
    const {
      id: _0x35b922,
      webMonitorId: _0x11d3e2,
      sysType: _0x592e8e
    } = v582;
    const {
      userId: _0x1b4dfb,
      userType: _0x2ca0a5
    } = p681.user;
    let v583 = "";
    const v584 = await TeamModel.getTeamMembersByWebMonitorId(_0x11d3e2);
    if (v584 && v584.length) {
      v583 = v584[v581.adnly(245742, 245742)].leaderId;
    }
    if (_0x2ca0a5 !== "superAdmin" && _0x2ca0a5 !== "admin" && v583 !== _0x1b4dfb) {
      p681.response.status = 403;
      p681.body = vRequire8.ERROR_403("你没有权限执行此操作！");
      return;
    }
    p681.response.status = 200;
    p681.body = vRequire8.SUCCESS_200(v581.Rkzrq, v581.adnly(280098, 280098));
  }
  static async ["deleteProject"](p684) {
    const v585 = {
      AaBPo: "admin",
      AMgfL: function (p685, p686) {
        return p685 ^ p686;
      },
      LHFzG: function (p687, p688) {
        return p687 ^ p688;
      },
      xmftP: "success"
    };
    let v586 = JSON.parse(p684.request.body);
    const {
      id: _0xb6ea5e,
      webMonitorId: _0x1a57e8,
      sysType: _0x13e523
    } = v586;
    const {
      userId: _0x3991fe,
      userType: _0x2ae634
    } = p684.user;
    let v587 = "";
    const v588 = await TeamModel.getTeamMembersByWebMonitorId(_0x1a57e8);
    if (v588 && v588.length) {
      v587 = v588[0].leaderId;
    }
    if (_0x2ae634 !== "superAdmin" && _0x2ae634 !== v585.AaBPo && v587 !== _0x3991fe) {
      p684.response.status = v585.AMgfL(289360, 289731);
      p684.body = vRequire8.ERROR_403("你没有权限执行此操作！");
      return;
    }
    const v589 = await C14.handleAllApplicationConfig();
    const {
      monitor: _0x32e883,
      event: _0x3a7b06
    } = v589;
    if (_0x13e523 === "monitor") {
      const v590 = _0xb6ea5e.split("-")[1];
      const v591 = await vRequire4.ajaxInside("post", "" + LOCAL_SERVER + PROJECT_API.DELETE_PROJECT, {
        id: v590
      });
      if (!v591) {
        p684.response.status = 412;
        p684.body = vRequire8.ERROR_412("删除失败!");
      } else {
        p684.response.status = v585.LHFzG(752014, 751942);
        p684.body = vRequire8.SUCCESS_200(v585.xmftP, 0);
      }
    } else if (_0x13e523 === "event") {}
    p684.response.status = 200;
    p684.body = vRequire8.SUCCESS_200("success", 0);
  }
}
class C15 {
  static ["delay"](p689) {
    return new Promise(p690 => setTimeout(p690, p689));
  }
  static async ["updateCompanyDataGeneric"](p691) {
    const v592 = {
      nDHBZ: "yyyy-MM",
      JaPMW: function (p692, p693) {
        return p692 * p693;
      },
      Coskg: function (p694, p695) {
        return p694 ^ p695;
      },
      BEfRh: function (p696, p697) {
        return p696 ^ p697;
      }
    };
    const {
      serverUrl: _0x3719aa,
      apiPath: _0x4f023e,
      productType: _0x2f064f,
      logPrefix: _0x342c72,
      dataListKey: _0x2079e7,
      nameListKey: _0x2f7b38
    } = p691;
    let v593 = [];
    if (accountInfo.isCloud === true) {
      v593 = await CompanyModel.getAllActiveCompanyList();
    } else {
      v593 = await CompanyModel.getAllCompanyList();
    }
    const v594 = new Date().Format("yyyy-MM-dd");
    const v595 = new Date().Format(v592.nDHBZ);
    console.warn("开始串行获取所有公司的" + _0x2f064f + "数据...");
    const v596 = [];
    for (let v597 = 0; v597 < v593.length; v597++) {
      const v598 = v593[v597];
      const {
        companyId: _0x526280,
        companyName: _0x17d082
      } = v598;
      console.warn("获取公司数据: " + _0x17d082 + " (" + (v597 + 1) + "/" + v593.length + ")");
      try {
        const v599 = await vRequire4.postJson("" + _0x3719aa + _0x4f023e, {
          companyId: _0x526280
        }).catch(p698 => {
          console.error("获取公司 " + _0x17d082 + " " + _0x2f064f + "数据失败:", p698);
          return null;
        });
        const v600 = v599 ? v599.data : {};
        const v601 = v600[_0x2079e7] || {};
        const v602 = v600[_0x2f7b38] || {};
        const v603 = [];
        if (v601 && v602) {
          for (let v604 in v601) {
            const v605 = v601[v604];
            for (let v606 in v605) {
              const v607 = v592.JaPMW(v605[v606], 1);
              if (v607 > v592.Coskg(591174, 591174)) {
                v603.push({
                  companyId: _0x526280,
                  projectId: v604,
                  projectName: v602[v604],
                  flowType: v606,
                  flowCount: v607,
                  productType: _0x2f064f,
                  flowOrigin: "subscribe",
                  monthName: v595,
                  dayName: v594
                });
              }
            }
          }
        }
        const v608 = {
          companyId: _0x526280,
          companyName: _0x17d082,
          dataList: v601,
          flowDataItems: v603,
          hasData: v603.length > v592.Coskg(714290, 714290)
        };
        v596.push(v608);
        if (v597 < v593.length - 1) {
          console.warn("公司 " + _0x17d082 + " 数据获取完成，延迟10秒后处理下一个公司...");
          await this.delay(v592.Coskg(738536, 746488));
        }
      } catch (_0x437cf9) {
        console.error("处理公司 " + _0x17d082 + " " + _0x2f064f + "数据时发生错误:", _0x437cf9);
        v596.push({
          companyId: _0x526280,
          companyName: _0x17d082,
          dataList: {},
          flowDataItems: [],
          hasData: false
        });
        if (v597 < v593.length - 1) {
          console.warn("公司 " + _0x17d082 + " 处理出错，延迟10秒后处理下一个公司...");
          await this.delay(10000);
        }
      }
    }
    console.warn("所有公司" + _0x2f064f + "数据获取完成");
    console.warn("开始批量处理" + _0x2f064f + "数据库操作...");
    const v609 = [];
    const v610 = new Map();
    v596.forEach(p699 => {
      p699.flowDataItems.forEach(p700 => {
        const v611 = p700.projectId + "_" + p700.flowType;
        v609.push({
          projectId: p700.projectId,
          flowType: p700.flowType,
          dayName: v594
        });
        v610.set(v611, p700);
      });
    });
    const v612 = new Map();
    if (v609.length > v592.BEfRh(811371, 811371)) {
      try {
        const v613 = v609.map(async p701 => {
          const v614 = p701.projectId + "_" + p701.flowType;
          try {
            const v615 = await FlowDataInfoByDayModel.findByProjectIdAndDayName(p701.projectId, p701.dayName, p701.flowType);
            return {
              key: v614,
              result: v615
            };
          } catch (_0x282760) {
            console.error("查询" + _0x2f064f + "数据 " + v614 + " 失败:", _0x282760);
            return {
              key: v614,
              result: null
            };
          }
        });
        const v616 = await Promise.all(v613);
        v616.forEach(({
          key: _0x2cb7f5,
          result: _0x3b9185
        }) => {
          v612.set(_0x2cb7f5, _0x3b9185);
        });
      } catch (_0x2446f0) {
        console.error("批量查询现有" + _0x2f064f + "记录失败:", _0x2446f0);
      }
    }
    const v617 = [];
    const v618 = [];
    v610.forEach((p702, p703) => {
      const v619 = v612.get(p703);
      if (v619 && v619.length > 0) {
        v617.push(FlowDataInfoByDayModel.updateFlowCount(v619[0].id, {
          flowCount: p702.flowCount
        }, p702.dayName).catch(p704 => {
          console.error("更新" + _0x2f064f + "数据 " + p703 + " 失败:", p704);
        }));
      } else {
        v618.push(FlowDataInfoByDayModel.createFlowDataInfoByDay(p702).catch(p705 => {
          console.error("创建" + _0x2f064f + "数据 " + p703 + " 失败:", p705);
        }));
      }
    });
    if (v617.length > 0) {
      console.warn("并行执行 " + v617.length + " 个" + _0x2f064f + "数据更新操作...");
      await Promise.all(v617);
    }
    if (v618.length > 0) {
      console.warn("并行执行 " + v618.length + " 个" + _0x2f064f + "数据创建操作...");
      await Promise.all(v618);
    }
    for (let v620 = 0; v620 < v596.length; v620++) {
      const v621 = v596[v620];
      console.warn(_0x342c72 + "公司 " + v621.companyName + " 流量信息:", v621.dataList);
    }
    console.warn(_0x342c72 + "所有公司" + _0x2f064f + "数据更新完成");
  }
  static async updateCompanyDataForMonitor() {
    const v622 = {
      qorwz: "【监控】"
    };
    await this.updateCompanyDataGeneric({
      serverUrl: MONITOR_LOCAL_SERVER,
      apiPath: PROJECT_API.GET_LOG_COUNT_INFO_BY_DAY,
      productType: "monitor",
      logPrefix: v622.qorwz,
      dataListKey: "logCountList",
      nameListKey: "projectNameList"
    });
  }
  static async ["updateCompanyDataForEvent"]() {
    const v623 = {
      lDSCZ: "eventLogCountList"
    };
    await this.updateCompanyDataGeneric({
      serverUrl: EVENT_LOCAL_SERVER,
      apiPath: PROJECT_API.GET_EVENT_LOG_COUNT_INFO_BY_DAY,
      productType: "event",
      logPrefix: "【埋点】",
      dataListKey: v623.lDSCZ,
      nameListKey: "eventProjectNameList"
    });
  }
  static async ["calculateCountByDay"](p706) {}
  static async ["handleProject"](p707) {
    const v624 = {
      GkvuE: function (p708, p709) {
        return p708 ^ p709;
      }
    };
    const v625 = await ProjectModel.getAllProjectList();
    for (let v626 = v624.GkvuE(547989, 547989); v626 < v625.length; v626++) {
      const {
        webMonitorId: _0x4d7a6e,
        pageAggregation: _0x2b8c8b,
        httpAggregation: _0x675865
      } = v625[v626];
      p707({
        webMonitorId: _0x4d7a6e,
        userTag: "",
        p: v626,
        projectList: v625,
        pageAggregation: _0x2b8c8b,
        httpAggregation: _0x675865
      });
    }
  }
  static async ["handleProjectWithTag"](p710) {
    const v627 = {
      glrWd: function (p711, p712) {
        return p711 ^ p712;
      },
      IUxUV: function (p713, p714) {
        return p713 === p714;
      }
    };
    const v628 = await ProjectModel.getAllProjectList();
    for (let v629 = 0; v629 < v628.length; v629++) {
      const v630 = v628[v629].webMonitorId;
      const v631 = v628[v629].userTag;
      const v632 = [""];
      let v633 = v631 ? v631.split(",") : [];
      if (v633.length !== v627.glrWd(308162, 308163) || !v627.IUxUV(v633[0], "")) {
        v633 = v632.concat(v633);
      }
      for (let v634 = 0; v634 < v633.length; v634++) {
        let v635 = v633[v634];
        p710(v630, v635);
      }
    }
  }
  static async checkFreeLicense() {
    let v636 = false;
    const v637 = await vRequire4.postJson("" + MONITOR_LOCAL_SERVER + PROJECT_API.MONITOR_BASE_INFO, {}).catch(p715 => {
      console.error(p715);
    });
    const v638 = await vRequire4.getJson("" + EVENT_LOCAL_SERVER + PROJECT_API.GET_EVENT_SYS_INFO, {}).catch(p716 => {
      console.error(p716);
    });
    const v639 = v637.data;
    const v640 = v638.data;
    if (v639.totalProjectCount <= 3 && v640.totalProjectCount <= 3) {
      v636 = true;
    }
    return v636;
  }
}
class C16 {
  static async create(p717) {
    const v641 = {
      YVpeZ: function (p718, p719) {
        return p718 ^ p719;
      },
      xIVRN: "创建信息失败，请求参数不能为空！"
    };
    let v642 = p717.request.body;
    if (v642.title && v642.author && v642.content && v642.category) {
      let v643 = await ConfigModel.createConfig(v642);
      let v644 = await ConfigModel.getConfigDetail(v643.id);
      p717.response.status = 200;
      p717.body = vRequire8.SUCCESS_200("创建信息成功", v644);
    } else {
      p717.response.status = v641.YVpeZ(171999, 171587);
      p717.body = vRequire8.ERROR_412(v641.xIVRN);
    }
  }
}
class C17 {
  static async createNewMessage(p720) {
    const v645 = {
      nOZMz: "创建信息成功",
      kOWNd: function (p721, p722) {
        return p721 ^ p722;
      }
    };
    let v646 = JSON.parse(p720.request.body);
    const {
      id: _0x4fe606,
      ruleName: _0x276225,
      loopTime: _0x10c91d,
      quietStartTime: _0x5f5492,
      quietEndTime: _0x275d29
    } = v646;
    const v647 = JSON.stringify(v646.ruleList);
    const v648 = {
      ruleName: _0x276225,
      loopTime: _0x10c91d,
      quietStartTime: _0x5f5492,
      quietEndTime: _0x275d29,
      ruleList: v647
    };
    if (_0x276225) {
      if (_0x4fe606) {
        v648.id = _0x4fe606;
        await MessageModel.updateMessage(_0x4fe606, v648);
      } else {
        await MessageModel.createMessage(v648);
      }
      p720.response.status = 200;
      p720.body = vRequire8.SUCCESS_200(v645.nOZMz, 0);
    } else {
      p720.response.status = v645.kOWNd(723017, 723413);
      p720.body = vRequire8.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async ["getAllMessage"](p723) {
    let v649 = p723.request.body;
    const v650 = JSON.parse(v649);
    let v651 = await MessageModel.getAllMessage(v650);
    p723.response.status = 200;
    p723.body = vRequire8.SUCCESS_200("查询信息列表成功！", v651);
  }
  static async ["getMessageByType"](p724) {
    const v652 = {
      czqws: function (p725, p726) {
        return p725 ^ p726;
      },
      AnKom: function (p727, p728) {
        return p727 ^ p728;
      },
      kPGzP: "查询信息列表成功！"
    };
    let v653 = p724.request.body;
    const v654 = JSON.parse(v653);
    const {
      userId: _0x207d49
    } = p724.user;
    v654.userId = _0x207d49;
    let v655 = await MessageModel.getMessageByType(v654);
    let v656 = await MessageModel.getUnReadMessageCountByType(v654);
    let v657 = 0;
    let v658 = v652.czqws(658565, 658565);
    if (v656) {
      v656.forEach(p729 => {
        if (p729.isRead === 0) {
          v657 = parseInt(p729.count, 10);
        }
        v658 += parseInt(p729.count, 10);
      });
    }
    const v659 = {
      messages: v655,
      unReadCount: v657,
      total: v658
    };
    p724.response.status = v652.AnKom(710343, 710159);
    p724.body = vRequire8.SUCCESS_200(v652.kPGzP, v659);
  }
  static async readMessage(p730) {
    let v660 = JSON.parse(p730.request.body);
    const {
      messageId: _0xf06b1d
    } = v660;
    const v661 = MessageModel.getMessageDetail(_0xf06b1d);
    v661.isRead = 1;
    await MessageModel.updateMessage(_0xf06b1d, v661);
    p730.response.status = 200;
    p730.body = vRequire8.SUCCESS_200("查询信息列表成功！", 0);
  }
  static async readAll(p731) {
    const v662 = {
      rJnNA: function (p732, p733) {
        return p732 ^ p733;
      }
    };
    let v663 = JSON.parse(p731.request.body);
    const {
      messageType: _0x3faf3b
    } = v663;
    const {
      userId: _0x26f104
    } = p731.user;
    MessageModel.readAll(_0x26f104, _0x3faf3b);
    p731.response.status = v662.rJnNA(984702, 984758);
    p731.body = vRequire8.SUCCESS_200("查询信息列表成功！", 0);
  }
  static async detail(p734) {
    return await MessageModel.getMessageDetail(p734);
  }
  static async deleteMessage(p735) {
    const v664 = {
      kiVRG: "success",
      lJKSz: function (p736, p737) {
        return p736 ^ p737;
      }
    };
    let v665 = JSON.parse(p735.request.body);
    const {
      id: _0x3b8a60
    } = v665;
    await MessageModel.deleteMessage(_0x3b8a60);
    p735.response.status = 200;
    p735.body = vRequire8.SUCCESS_200(v664.kiVRG, v664.lJKSz(764813, 764813));
  }
  static async saveLastVersionInfo() {
    const v666 = {
      sfCYl: "https://www.webfunny.cn/update.html"
    };
    await vRequire4.get("http://www.webfunny.cn/config/lastVersionInfo", {}).then(async p738 => {
      const v667 = p738.data;
      const {
        updateDate: _0x40acc6,
        version: _0x13aa8d,
        updateContent: _0x220345,
        upgradeGuide: _0x10e4da,
        updateDatabase: _0x31b7f5
      } = v667;
      const v668 = new Date().Format("yyyy-MM-dd");
      if (_0x40acc6 === v668) {
        const v669 = await UserModel.getAllUserInfoForSimple();
        v669.map(async p739 => {
          const {
            userId: _0x1308c0
          } = p739;
          await MessageModel.createMessage({
            userId: _0x1308c0,
            title: "版本号：" + _0x13aa8d,
            content: JSON.stringify([_0x220345, _0x10e4da, _0x31b7f5]),
            type: "update",
            isRead: 0,
            link: v666.sfCYl
          });
        });
      }
    }).catch(p740 => {
      console.error(p740);
    });
  }
}
class C18 {
  static async getAllNoticeTemplate(p741) {
    const v670 = {
      zveau: "查询成功"
    };
    const v671 = await NoticeTemplateModel.getAllNoticeTemplate();
    p741.response.status = 200;
    p741.body = vRequire8.SUCCESS_200(v670.zveau, v671);
  }
  static async ["getNoticeTemplate"](p742) {
    const v672 = {
      neyzu: "noticePeopleName",
      OFDHg: function (p743, p744) {
        return p743 ^ p744;
      },
      bMHEJ: function (p745, p746) {
        return p745 * p746;
      },
      pjLzB: function (p747, p748) {
        return p747(p748);
      },
      nTeoH: "noticeSetting"
    };
    let v673 = vRequire4.parseQs(p742.request.url);
    const {
      userId: _0x4b2617,
      userType: _0x5ec1cb,
      companyId: _0x2a4287
    } = p742.user;
    const {
      page = v672.OFDHg(160328, 160329),
      pageSize = 10,
      noticeType: _0x126155,
      keyword: _0x258f69
    } = v673;
    const v674 = v672.bMHEJ(Number(page) - 1, v672.pjLzB(Number, pageSize));
    const vNumber4 = Number(pageSize);
    const v675 = await NoticeTemplateModel.pageNoticeTemplate(v674, vNumber4, _0x2a4287);
    const v676 = await UserModel.getUserList();
    v675.forEach((p749, p750, p751) => {
      const {
        modifyPeopleId: _0x255997
      } = p749;
      const v677 = v676.find(p752 => p752.userId === _0x255997)?.["nickname"];
      p751[p750].modifyPeopleName = v677;
    });
    const v678 = await TeamModel.getTeamList(_0x4b2617, _0x5ec1cb, _0x2a4287);
    const v679 = await NoticeTemplateModel.countNoticeTemplate();
    const v680 = [];
    for (const v681 of v675) {
      const {
        noticeTemplateId: _0x2f2b9e,
        noticeType: _0x4658c0,
        templateName: _0x182cc2
      } = v681;
      const v682 = await NoticeSettingModel.getNoticeSettingsById(_0x2f2b9e);
      const v683 = !!_0x126155 && !_0x4658c0.split(",").some(p753 => p753 == _0x126155);
      const v684 = !!_0x258f69 && !_0x182cc2.includes(_0x258f69);
      if (v683 || v684) {
        continue;
      }
      v682.forEach((p754, p755, p756) => {
        const {
          noticePeopleId: _0x3a5e03,
          noticeTeamId: _0x3663d7
        } = p754;
        if (_0x3a5e03) {
          const v685 = v676.find(p757 => p757.userId === _0x3a5e03)?.nickname;
          p756[p755][v672.neyzu] = v685;
        }
        if (_0x3663d7) {
          const v686 = v678.find(p758 => p758.companyId === _0x3663d7)?.["teamName"];
          p756[p755].noticeTeamName = v686;
        }
      });
      v681[v672.nTeoH] = v682;
      v680.push(v681);
    }
    p742.response.status = 200;
    p742.body = vRequire8.SUCCESS_200("查询成功", {
      total: v679,
      noticeTemplates: v680
    });
  }
  static async createNoticeTemplate(p759) {
    const v687 = {
      lORWy: function (p760, p761) {
        return p760 ^ p761;
      },
      LkoYB: "创建通知模板成功"
    };
    const {
      templateName: _0x746194,
      noticeType: _0x43c2c8,
      noticeSetting: _0x3ee4c4,
      modifyPeopleId: _0x4d3364
    } = JSON.parse(p759.request.body);
    const {
      companyId: _0x379238
    } = p759.user;
    const v688 = vRequire4.getUuid();
    await NoticeTemplateModel.createNoticeTemplate({
      companyId: _0x379238,
      noticeTemplateId: v688,
      templateName: _0x746194,
      noticeType: _0x43c2c8,
      modifyPeopleId: _0x4d3364,
      lastModified: vRequire2().format("YYYY-MM-DD HH:mm:ss")
    });
    for (const v689 of _0x3ee4c4) {
      const {
        noticePeopleId: _0x2e3de0,
        noticeTeamId: _0x5917cd,
        channel: _0x40d910,
        cycle: _0x4a2579,
        slienceTime: _0x5efece
      } = v689;
      const v690 = vRequire4.getUuid();
      await NoticeSettingModel.createNoticeSetting({
        noticeSettingId: v690,
        noticePeopleId: _0x2e3de0,
        noticeTeamId: _0x5917cd,
        channel: _0x40d910,
        cycle: _0x4a2579,
        noticeTemplateId: v688,
        slienceTime: _0x5efece
      });
    }
    p759.response.status = v687.lORWy(143580, 143380);
    p759.body = vRequire8.SUCCESS_200(v687.LkoYB, v687.lORWy(945831, 945831));
  }
  static async getNoticeTemplateById(p762) {
    let v691 = vRequire4.parseQs(p762.request.url);
    const {
      noticeTemplateId: _0x511a05
    } = v691;
    const v692 = await NoticeTemplateModel.getNoticeTemplateById(_0x511a05);
    const v693 = v692[0];
    const v694 = await NoticeSettingModel.getNoticeSettingsById(_0x511a05);
    v693.noticeSetting = v694;
    p762.response.status = 200;
    p762.body = vRequire8.SUCCESS_200("根据ID查询成功", v693);
  }
  static async ["deleteNoticeTemplate"](p763) {
    const v695 = {
      hmmaD: function (p764, p765) {
        return p764 ^ p765;
      },
      WCfGi: "删除成功"
    };
    let v696 = vRequire4.parseQs(p763.request.url);
    const {
      noticeTemplateId: _0x1e4bc6
    } = v696;
    const v697 = await AlarmRuleModel.getAlarmRuleByRelatedNoticeId(_0x1e4bc6);
    let v698 = "";
    if (v697 && v697.length) {
      v697.forEach(p766 => {
        v698 += "[" + p766.ruleName + "] ";
      });
      p763.response.status = 412;
      p763.body = vRequire8.ERROR_412("通知模板被" + v698 + "绑定，无法删除", 0);
      return;
    }
    await NoticeTemplateModel.deleteNoticeTemplate(_0x1e4bc6);
    await NoticeSettingModel.deleteNoticeSetting(_0x1e4bc6);
    p763.response.status = v695.hmmaD(766275, 766347);
    p763.body = vRequire8.SUCCESS_200(v695.WCfGi, 0);
  }
  static async updateNoticeTemplate(p767) {
    const v699 = {
      aaUcJ: function (p768, p769) {
        return p768 ^ p769;
      }
    };
    const {
      templateName: _0xe7a81d,
      noticeType: _0x9fc5d7,
      modifyPeopleId: _0x32222a,
      noticeSetting: _0x326165,
      id: _0x11e1c5,
      noticeTemplateId: _0x17ff3f
    } = JSON.parse(p767.request.body);
    await NoticeTemplateModel.updateNoticeTemplate(_0x11e1c5, {
      templateName: _0xe7a81d,
      noticeType: _0x9fc5d7,
      modifyPeopleId: _0x32222a,
      lastModified: vRequire2().format("YYYY-MM-DD HH:mm:ss")
    });
    await NoticeSettingModel.deleteNoticeSetting(_0x17ff3f);
    for (const v700 of _0x326165) {
      const {
        noticePeopleId: _0x3af71e,
        noticeTeamId: _0x9b9935,
        channel: _0x4040e2,
        cycle: _0x1aa776,
        slienceTime: _0x26826e
      } = v700;
      const v701 = vRequire4.getUuid();
      await NoticeSettingModel.createNoticeSetting({
        noticeSettingId: v701,
        noticePeopleId: _0x3af71e,
        noticeTeamId: _0x9b9935,
        channel: _0x4040e2,
        cycle: _0x1aa776,
        noticeTemplateId: _0x17ff3f,
        slienceTime: _0x26826e
      });
    }
    p767.response.status = 200;
    p767.body = vRequire8.SUCCESS_200("更新成功", v699.aaUcJ(802578, 802578));
  }
}
class C19 {
  static ["sendEmail"](p770, p771, p772) {
    const v702 = {
      EGRGW: function (p783, p784, p785) {
        return p783(p784, p785);
      }
    };
    if (accountInfo.useCusEmailSys === true) {
      vRequire6.sendEmail(p770, p771, p772, accountInfo.emailUser, accountInfo.emailPassword);
    } else {
      v702.EGRGW(vRequire9, "http://www.webfunny.cn/config/sendEmail", {
        method: "POST",
        body: JSON.stringify({
          email: p770,
          title: p771,
          content: p772
        }),
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        }
      }).catch(p791 => {
        console.log(p791);
      });
    }
  }
  static async ["create"](p792) {
    const v703 = {
      PPPke: function (p793, p794) {
        return p793 || p794;
      }
    };
    const v704 = JSON.parse(p792.request.body);
    const {
      funnelName: _0x436ae5,
      funnelIds: _0x3d5a89
    } = v704;
    const v705 = {
      funnelName: _0x436ae5,
      funnelIds: _0x3d5a89
    };
    if (v704.funnelName) {
      let v706 = await UserModel.createUser(v705);
      let v707 = await UserModel.getUserDetail(v706.id);
      p792.response.status = 200;
      p792.body = vRequire8.SUCCESS_200("创建信息成功", v703.PPPke(v707, {}));
    } else {
      p792.response.status = 412;
      p792.body = vRequire8.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async getUserList(p795) {
    const v708 = {
      YXRjY: "查询信息列表失败！"
    };
    let v709 = p795.request.body;
    if (v709) {
      const v710 = await UserModel.getUserList();
      p795.response.status = 200;
      p795.body = vRequire8.SUCCESS_200("查询信息列表成功！", v710);
    } else {
      p795.response.status = 412;
      p795.body = vRequire8.ERROR_412(v708.YXRjY);
    }
  }
  static async getUserListForTeam(p796) {
    const v711 = {
      aZtDY: "查询信息列表成功！",
      BiWAi: function (p797, p798) {
        return p797 ^ p798;
      }
    };
    const {
      projectId: _0x27fe8a
    } = JSON.parse(p796.request.body);
    const v712 = await TeamModel.getTeamMembersByWebMonitorId(_0x27fe8a);
    if (!v712 || !v712.length) {
      p796.response.status = 200;
      p796.body = vRequire8.SUCCESS_200(v711.aZtDY, []);
      return;
    }
    const {
      members: _0x452fd8
    } = v712[0];
    const v713 = await UserModel.getUserListByMembers(_0x452fd8);
    p796.response.status = v711.BiWAi(481449, 481377);
    p796.body = vRequire8.SUCCESS_200("查询信息列表成功！", v713);
  }
  static async hasSuperAdminAccount(p799) {
    const v714 = {
      mhHFV: function (p800, p801) {
        return p800 * p801;
      }
    };
    const v715 = await UserModel.checkAdminAccount();
    const v716 = v714.mhHFV(v715[0].count, 1);
    const {
      registerEntry: _0x1eb63d,
      resetPwdEntry: _0x3dbd61,
      thirdLoginConfig: _0x5c0f7b
    } = accountInfo;
    p799.response.status = 200;
    p799.body = vRequire8.SUCCESS_200("查询信息列表成功！", {
      adminUserCount: v716,
      registerEntry: _0x1eb63d,
      resetPwdEntry: _0x3dbd61,
      thirdLoginConfig: _0x5c0f7b
    });
  }
  static async checkTokenExist(p802) {
    const v717 = await UserModel.checkTokenExist();
    p802.response.status = 200;
    p802.body = vRequire8.SUCCESS_200("查询信息列表成功！", adminUserCount);
  }
  static async getUserInfo(p803) {
    const v718 = {
      gXtOX: "你没有权限执行此操作！",
      TUBcg: function (p804, p805) {
        return p804 ^ p805;
      },
      sLikL: "查询信息列表成功！"
    };
    let v719 = p803.user;
    let v720 = {};
    if (typeof p803.request.body === "string") {
      v720 = JSON.parse(p803.request.body);
    } else {
      v720 = p803.request.body;
    }
    const {
      userId: _0xb428f9,
      projectId = ""
    } = v720;
    if (v719.userType !== "superAdmin" && v719.userType !== "admin" && v719.userId !== _0xb428f9) {
      p803.response.status = 412;
      p803.body = vRequire8.ERROR_412(v718.gXtOX);
      return;
    }
    const v721 = await UserModel.getUserInfo(_0xb428f9);
    if (!v721 || !v721[0]) {
      p803.response.status = v718.TUBcg(984947, 985019);
      p803.body = vRequire8.SUCCESS_200("查询信息列表成功！", {});
      return;
    }
    const {
      companyId: _0x5b25f9
    } = v721[0];
    let v722 = "";
    if (projectId) {
      const v723 = await TeamModel.getTeamMembersByWebMonitorId(projectId);
      if (v723 && v723.length) {
        v722 = v723[0].leaderId;
      }
    }
    const v724 = await CompanyModel.getCompanyInfo(_0x5b25f9);
    const v725 = {
      ...v721[0],
      isTeamLeader: v722 === _0xb428f9,
      company: v724
    };
    p803.response.status = 200;
    p803.body = vRequire8.SUCCESS_200(v718.sLikL, v725);
  }
  static async getUserListByAdmin(p806) {
    const v726 = {
      WJdeM: function (p807, p808) {
        return p807 !== p808;
      },
      iCfbd: "非管理员，无权调用此接口！",
      EUBiB: "没有公司ID，请重新登录",
      tdbdK: function (p809, p810) {
        return p809 ^ p810;
      }
    };
    let v727 = p806.request.body;
    const {
      status: _0x2b5386
    } = v727;
    const {
      userType: _0x5b13b9,
      companyId = ""
    } = p806.user;
    if (_0x5b13b9 !== "admin" && v726.WJdeM(_0x5b13b9, "superAdmin")) {
      p806.response.status = 412;
      p806.body = vRequire8.ERROR_412(v726.iCfbd);
      return;
    }
    if (!companyId) {
      p806.response.status = 401;
      p806.body = vRequire8.ERROR_401(v726.EUBiB);
      return;
    }
    if (v727) {
      const v728 = await UserModel.getUserListByAdmin(_0x2b5386, companyId);
      p806.response.status = 200;
      p806.body = vRequire8.SUCCESS_200("查询信息列表成功！", v728);
    } else {
      p806.response.status = v726.tdbdK(346470, 346362);
      p806.body = vRequire8.ERROR_412("查询信息列表失败！");
    }
  }
  static async ["getAllUserInfoForSimple"](p811) {
    const {
      companyId: _0x4570d4
    } = p811.user;
    const v729 = await UserModel.getAllUserInfoForSimple(_0x4570d4);
    p811.response.status = 200;
    p811.body = vRequire8.SUCCESS_200("查询信息列表成功！", v729);
  }
  static async detail(p812) {
    const v730 = {
      ejaPZ: function (p813, p814) {
        return p813 ^ p814;
      },
      ijNNE: "信息ID必须传"
    };
    let v731 = p812.params.id;
    if (v731) {
      let v732 = await UserModel.getUserDetail(v731);
      p812.response.status = 200;
      p812.body = vRequire8.SUCCESS_200("查询成功！", v732);
    } else {
      p812.response.status = v730.ejaPZ(984444, 984288);
      p812.body = vRequire8.ERROR_412(v730.ijNNE);
    }
  }
  static async delete(p815) {
    const v733 = {
      BrVRB: function (p816, p817) {
        return p816(p817);
      },
      oYsmD: function (p818, p819) {
        return p818 ^ p819;
      },
      FvEFs: "删除信息成功！",
      aXtTJ: "信息ID必须传！"
    };
    let v734 = JSON.parse(p815.request.body);
    let v735 = v734.id;
    if (v735 && !v733.BrVRB(isNaN, v735)) {
      await UserModel.deleteUser(v735);
      p815.response.status = v733.oYsmD(938785, 938985);
      p815.body = vRequire8.SUCCESS_200(v733.FvEFs);
    } else {
      p815.response.status = 412;
      p815.body = vRequire8.ERROR_412(v733.aXtTJ);
    }
  }
  static async ["update"](p820) {
    const v736 = {
      vGVVy: function (p821, p822) {
        return p821 ^ p822;
      }
    };
    let v737 = p820.request.body;
    let v738 = p820.params.id;
    if (v737) {
      await UserModel.updateUser(v738, v737);
      let v739 = await UserModel.getUserDetail(v738);
      p820.response.status = v736.vGVVy(124236, 124292);
      p820.body = vRequire8.SUCCESS_200("更新信息成功！", v739);
    } else {
      p820.response.status = 412;
      p820.body = vRequire8.ERROR_412("更新信息失败！");
    }
  }
  static async getUserByPhone(p823) {
    const v740 = {
      dHLDR: function (p824, p825) {
        return p824 ^ p825;
      }
    };
    const {
      phone: _0x2d987e
    } = p823.request.body;
    const v741 = await UserModel.getUserByPhone(_0x2d987e);
    p823.response.status = v740.dHLDR(614571, 614499);
    p823.body = vRequire8.SUCCESS_200("更新信息成功！", v741);
  }
  static async ["setValidateCode"]() {
    const v742 = {
      rPNUn: "0123456789ABCDEFGHGKLMNOPQRSTUVWXYZabcdefghigkmnopqrstuvwxyz",
      MnhiB: function (p826, p827) {
        return p826 * p827;
      }
    };
    const v743 = {
      "0": "M",
      "1": "N",
      "2": "O",
      "3": "P",
      "4": "Q",
      "5": "R",
      "6": "S",
      "7": "T",
      "8": "U"
    };
    const v744 = v742.rPNUn;
    let v745 = "";
    for (let v746 = 0; v746 < 32; v746++) {
      const v747 = Math.floor(v742.MnhiB(Math.random(), v744.length - 1) + 1);
      const v748 = v743[v744.charAt(v747)];
      if (v748) {
        v745 += v748;
      } else {
        v745 += v744.charAt(v747);
      }
    }
    const v749 = vRequire4.b64EncodeUnicode(v745);
    const v750 = await ConfigModel.getConfigByConfigName("loginValidateCode");
    if (v750 && v750.length > 0) {
      await ConfigModel.updateConfig("loginValidateCode", {
        configValue: v749
      });
    } else {
      await ConfigModel.createConfig({
        configName: "loginValidateCode",
        configValue: v749
      });
    }
    return v745;
  }
  static async ["refreshValidateCode"](p828) {
    const v751 = {
      YiUwu: function (p829, p830) {
        return p829 * p830;
      },
      QVvJi: function (p831, p832) {
        return p831 ^ p832;
      }
    };
    const v752 = await C19.setValidateCode();
    if (global.centerInfo.loginValidateCodeTimer) {
      clearInterval(global.centerInfo.loginValidateCodeTimer);
    } else {
      global.centerInfo.loginValidateCodeTimer = setInterval(() => {
        C19.setValidateCode();
      }, v751.YiUwu(v751.QVvJi(474630, 474627), 60) * 1000);
    }
    p828.response.status = 200;
    p828.body = vRequire8.SUCCESS_200("success", v752);
  }
  static async getValidateCode(p833) {
    const v753 = {
      HdEAU: function (p834, p835) {
        return p834 ^ p835;
      },
      ffbja: "success"
    };
    const v754 = await ConfigModel.getConfigByConfigName("loginValidateCode");
    if (v754 && v754.length) {
      const v755 = v754[0].configValue;
      p833.response.status = 200;
      p833.body = vRequire8.SUCCESS_200("success", v755);
    } else {
      p833.response.status = v753.HdEAU(784773, 784717);
      p833.body = vRequire8.SUCCESS_200(v753.ffbja, code);
    }
  }
  static async ["login"](p836) {
    const v756 = {
      jLHsY: function (p837, p838) {
        return p837 ^ p838;
      },
      wqdBP: function (p839, p840) {
        return p839 ^ p840;
      },
      higDu: function (p841, p842) {
        return p841 ^ p842;
      },
      IpjMd: "验证码不正确，请重新输入！",
      wubjC: "^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\\d{8}$",
      AGUvH: function (p843, p844) {
        return p843 === p844;
      },
      wUfQD: function (p845, p846) {
        return p845 ^ p846;
      },
      GZUkw: "此账号尚未激活，请联系管理员，在「用户管理」中激活此账号！",
      iuZyQ: function (p847, p848) {
        return p847 * p848;
      }
    };
    const v757 = JSON.parse(p836.request.body);
    const {
      emailName: _0x4819a7,
      password: _0x146e62,
      code: _0xdcf78b,
      webfunnyToken: _0x5d29f5
    } = v757;
    const v758 = vRequire4.b64DecodeUnicode(_0x146e62).split("").reverse().join("");
    const v759 = await ConfigModel.getConfigByConfigName("loginValidateCode");
    const v760 = vRequire4.b64DecodeUnicode(v759[v756.jLHsY(223134, 223134)].configValue);
    const v761 = v760.substring(5, v756.jLHsY(284912, 284918));
    const v762 = v760.substring(v756.wqdBP(466658, 466665), 12);
    const v763 = v760.substring(23, v756.higDu(174320, 174312));
    const v764 = v760.substring(27, 28);
    const v765 = ("" + v761 + v762 + v763 + v764).toLowerCase();
    const v766 = _0xdcf78b.toLowerCase();
    if (v765 != v766) {
      C19.setValidateCode();
      p836.response.status = 412;
      p836.body = vRequire8.ERROR_412(v756.IpjMd);
      return;
    }
    const v767 = {
      password: vRequire4.md5(v758)
    };
    const v768 = new RegExp(v756.wubjC, "");
    if (v768.test(_0x4819a7)) {
      v767.phone = _0x4819a7;
    } else {
      v767.emailName = _0x4819a7;
    }
    const v769 = await UserModel.getUserForPwd(v767);
    if (v769) {
      const {
        userId: _0x163b27,
        companyId: _0x40c112,
        userType: _0x4a3527,
        registerStatus: _0x4924d3,
        nickname: _0x4e3b0e
      } = v769;
      if (v756.AGUvH(_0x4924d3, v756.wUfQD(154322, 154322))) {
        p836.response.status = 412;
        p836.body = vRequire8.ERROR_412(v756.GZUkw);
        return;
      }
      const v770 = vRequire10.sign({
        userId: _0x163b27,
        companyId: _0x40c112,
        userType: _0x4a3527,
        emailName: _0x4819a7,
        nickname: _0x4e3b0e
      }, vRequire11.sign, {
        expiresIn: v756.iuZyQ(47520, v756.higDu(177270, 177226)) * v756.wqdBP(495852, 496388)
      });
      C19.setValidateCode();
      const v771 = await UserTokenModel.getUserTokenDetail(_0x163b27);
      if (v771) {
        await UserTokenModel.updateUserToken(_0x163b27, {
          ...v771,
          accessToken: v770
        });
      } else {
        await UserTokenModel.createUserToken({
          userId: _0x163b27,
          accessToken: v770
        });
      }
      p836.response.status = 200;
      p836.body = vRequire8.SUCCESS_200("登录成功", v770);
    } else {
      C19.setValidateCode();
      p836.response.status = 412;
      p836.body = vRequire8.ERROR_412("用户名或密码不正确！");
    }
  }
  static async logout(p849) {
    const v772 = {
      rINbf: function (p850, p851) {
        return p850 ^ p851;
      },
      DUWzr: "登出成功"
    };
    const v773 = JSON.parse(p849.request.body);
    const {
      userId: _0x2c9733
    } = v773;
    const v774 = await UserTokenModel.getUserTokenDetail(_0x2c9733);
    if (v774) {
      await UserTokenModel.updateUserToken(_0x2c9733, {
        ...v774,
        accessToken: ""
      });
    }
    p849.response.status = v772.rINbf(808303, 808359);
    p849.body = vRequire8.SUCCESS_200(v772.DUWzr, 0);
  }
  static async loginForApi(p852) {
    const v775 = {
      RApna: function (p853, p854) {
        return p853 ^ p854;
      },
      sKIHg: "此账号尚未激活，请联系管理员激活！",
      Gfdfq: function (p855, p856) {
        return p855 ^ p856;
      }
    };
    const v776 = p852.request.body;
    const {
      emailName: _0x3a7c93,
      password: _0x4c19b2
    } = v776;
    const v_0x4c19b2 = _0x4c19b2;
    const v777 = {
      emailName: _0x3a7c93,
      password: vRequire4.md5(v_0x4c19b2)
    };
    const v778 = await UserModel.getUserForPwd(v777);
    if (v778) {
      const {
        userId: _0x1d607b,
        userType: _0x564d9e,
        registerStatus: _0x6682ec,
        nickname: _0x1f6c8a
      } = v778;
      if (_0x6682ec === v775.RApna(760461, 760461)) {
        p852.response.status = 200;
        p852.body = vRequire8.SUCCESS_200(v775.sKIHg, 1);
        return;
      }
      const v779 = vRequire10.sign({
        userId: _0x1d607b,
        userType: _0x564d9e,
        emailName: _0x3a7c93,
        nickname: _0x1f6c8a
      }, vRequire11.sign, {
        expiresIn: v775.RApna(662651, 662618) * v775.RApna(978036, 978028) * 60 * 60 * 1000
      });
      C19.setValidateCode();
      const v780 = await UserTokenModel.getUserTokenDetail(_0x1d607b);
      if (v780) {
        await UserTokenModel.updateUserToken(_0x1d607b, {
          ...v780,
          accessToken: v779
        });
      } else {
        await UserTokenModel.createUserToken({
          userId: _0x1d607b,
          accessToken: v779
        });
      }
      p852.response.status = v775.RApna(446972, 446772);
      p852.body = vRequire8.SUCCESS_200("登录成功", v779);
    } else {
      C19.setValidateCode();
      p852.response.status = v775.Gfdfq(124851, 124795);
      p852.body = vRequire8.SUCCESS_200("用户名密码不正确！", 1);
    }
  }
  static async forgetPwd(p857) {
    const v781 = {
      pSJLL: function (p858, p859) {
        return p858 ^ p859;
      },
      XHEZU: "非管理员账号，请联系管理员获取登录密码！",
      rSFRl: function (p860, p861) {
        return p860 ^ p861;
      }
    };
    const v782 = JSON.parse(p857.request.body);
    const {
      email: _0x425544
    } = v782;
    let v783 = await UserModel.isAdminAccount(_0x425544, USER_INFO.USER_TYPE_ADMIN);
    if (v783) {
      C19.sendEmail(_0x425544, "密码找回", "管理员你好， 你的登录密码是：" + v783.password);
      p857.response.status = 200;
      p857.body = vRequire8.SUCCESS_200("管理员你好，密码已发送至您的邮箱，请注意查收！", 0);
    } else {
      p857.response.status = v781.pSJLL(672653, 672581);
      p857.body = vRequire8.SUCCESS_200(v781.XHEZU, v781.rSFRl(304687, 304686));
    }
  }
  static async sendRegisterEmail(p862) {
    const v784 = {
      uUsRo: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
      LHEqD: function (p863, p864) {
        return p863 ^ p864;
      },
      kBmGn: function (p865, p866) {
        return p865 ^ p866;
      },
      IMmWB: function (p867, p868) {
        return p867 + p868;
      },
      zVMwm: "注册验证码：",
      Uejly: "<p>用户你好!</p>",
      HyIXc: "Webfunny",
      hgrLA: function (p869, p870) {
        return p869 ^ p870;
      }
    };
    const v785 = JSON.parse(p862.request.body);
    const v786 = new RegExp(v784.uUsRo, "");
    const v787 = v785.email.match(v786)[0];
    const v788 = "0123456789ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz";
    let v789 = "";
    for (let v790 = 0; v790 < v784.LHEqD(674744, 674748); v790++) {
      const v791 = Math.floor(Math.random() * (v788.length - 1) + v784.kBmGn(239994, 239995));
      v789 += v788.charAt(v791);
    }
    if (global.centerInfo.registerEmailCode[v787]) {
      p862.response.status = v784.LHEqD(470459, 470387);
      p862.body = vRequire8.SUCCESS_200("验证码发送太频繁", 1);
      return;
    }
    global.centerInfo.registerEmailCode[v787] = v789;
    global.centerInfo.registerEmailCodeCheckError[v787] = 0;
    setTimeout(() => {
      delete global.centerInfo.registerEmailCode[v787];
    }, 120000);
    console.warn("【注册验证码】" + v787 + "：" + v789);
    const v792 = v784.IMmWB(v784.zVMwm, v789);
    const v793 = v784.IMmWB(v784.Uejly, "<p>" + (accountInfo.productTitle || v784.HyIXc) + "注册的验证码为：") + v789 + "</p><p>如有疑问，请联系我们！</p>";
    C19.sendEmail(v787, v792, v793);
    p862.response.status = 200;
    p862.body = vRequire8.SUCCESS_200("验证码已发送", v784.hgrLA(354977, 354977));
  }
  static async getRegisterEmailForSupperAdmin(p871) {
    const v794 = {
      dPnIU: function (p872, p873) {
        return p872 ^ p873;
      }
    };
    const {
      userType: _0x102dd6
    } = p871.user;
    if (_0x102dd6 !== "superAdmin" && _0x102dd6 !== "admin") {
      p871.response.status = 403;
      p871.body = vRequire8.ERROR_403("您没有权限执行此操作！");
      return;
    }
    p871.response.status = v794.dPnIU(847990, 848062);
    p871.body = vRequire8.SUCCESS_200("success", global.centerInfo.registerEmailCode);
  }
  static async registerCheck(p874) {
    const v795 = {
      dRBmg: function (p875, p876) {
        return p875 ^ p876;
      },
      jhTuN: function (p877, p878) {
        return p877 ^ p878;
      },
      TZgSd: function (p879, p880) {
        return p879 ^ p880;
      },
      dejBc: "请先初始化管理员账号",
      wZVVy: function (p881, p882) {
        return p881 + p882;
      },
      znoni: function (p883, p884) {
        return p883 + p884;
      }
    };
    const v796 = JSON.parse(p874.request.body);
    const {
      name: _0x1a92e1,
      email: _0x4284e8,
      emailCode: _0x4bba8a,
      password: _0x138047
    } = v796;
    const v797 = global.centerInfo.registerEmailCode[_0x4284e8];
    const v798 = _0x4bba8a.toLowerCase();
    if (!v797 || v798 != v797.toLowerCase()) {
      p874.response.status = v795.dRBmg(919173, 919117);
      p874.body = vRequire8.SUCCESS_200("验证码不正确或已失效！", v795.jhTuN(709235, 709234));
      return;
    }
    let v799 = await UserModel.checkUserAccount(_0x4284e8);
    if (v799) {
      p874.response.status = 200;
      p874.body = vRequire8.SUCCESS_200("邮箱已存在！", v795.TZgSd(823668, 823669));
      return;
    }
    let v800 = await UserModel.getAdminByType("admin");
    if (!v800) {
      p874.response.status = 200;
      p874.body = vRequire8.SUCCESS_200(v795.dejBc, 1);
    } else {
      const v801 = v800.emailName;
      const {
        localServerDomain: _0xa28541
      } = accountInfo;
      const v802 = "http://" + _0xa28541 + "/server/register?name=" + _0x1a92e1 + "&email=" + _0x4284e8 + "&password=" + _0x138047;
      const v803 = "管理员确认申请";
      const v804 = v795.wZVVy(v795.wZVVy(v795.znoni("<p>管理员你好!</p><p>有用户申请注册你的监控系统，请点击注册链接，以完成注册：<a href='", v802), "'>") + v802 + "</a></p>", "<p>如有疑问，请联系我们！</p>");
      C19.sendEmail(v801, v803, v804);
      p874.response.status = v795.dRBmg(670044, 670100);
      p874.body = vRequire8.SUCCESS_200("创建信息成功", v795.jhTuN(462986, 462986));
    }
  }
  static async ["register"](p885) {
    const v805 = {
      zVecv: function (p886, p887) {
        return p886 * p887;
      },
      uUnYO: "center-register",
      DuHxx: function (p888, p889) {
        return p888 >= p889;
      },
      NeFQb: "验证码不正确或已失效！",
      qPeuG: function (p890, p891) {
        return p890 ^ p891;
      },
      BtywN: "申请成功",
      rmYJE: function (p892, p893) {
        return p892 + p893;
      },
      YtQem: "</p>",
      VGTLV: "用户注册通知",
      AcosK: "创建信息成功",
      ESdQf: function (p894, p895) {
        return p894 ^ p895;
      }
    };
    const v806 = vRequire4.parseQs(p885.request.url);
    const {
      name: _0xc0932,
      email = "",
      phone = "",
      password: _0x3b6170,
      emailCode: _0x16ca86
    } = v806;
    const v807 = vRequire4.b64DecodeUnicode(_0x3b6170).split("").reverse().join("");
    const v808 = vRequire4.getUuid();
    const v809 = Math.floor(v805.zVecv(Math.random(), 10));
    const v810 = accountInfo.activationRequired === true ? 0 : 1;
    const v811 = {
      nickname: _0xc0932,
      emailName: email,
      phone: phone,
      password: vRequire4.md5(v807),
      userId: v808,
      userType: "customer",
      registerStatus: v810,
      avatar: v809
    };
    vRequire4.postJson("http://www.webfunny.cn/config/recordEmail", {
      phone: phone,
      email: email,
      purchaseCode: accountInfo.purchaseCode,
      source: v805.uUnYO
    }).catch(p896 => {});
    const v812 = global.centerInfo.registerEmailCodeCheckError;
    if (v805.DuHxx(v812[email], 3)) {
      p885.response.status = 200;
      p885.body = vRequire8.SUCCESS_200("验证码失败次数达到上限，请重新获取验证码！", 1);
      return;
    }
    const v813 = global.centerInfo.registerEmailCode[email];
    const v814 = _0x16ca86.toLowerCase();
    if (!v813 || v814 != v813.toLowerCase()) {
      if (!v812[email]) {
        v812[email] = 1;
      } else {
        v812[email]++;
      }
      p885.response.status = 200;
      p885.body = vRequire8.SUCCESS_200(v805.NeFQb, v805.qPeuG(774582, 774583));
      return;
    }
    let v815 = await UserModel.checkUserAccount(email);
    if (v815) {
      p885.response.status = 200;
      p885.body = vRequire8.SUCCESS_200("邮箱已存在！", 1);
      return;
    }
    if (v811.nickname) {
      let v816 = await UserModel.createUser(v811);
      if (v816 && v816.id) {
        const v817 = v805.BtywN;
        const v818 = v805.rmYJE("<p>用户你好!</p><p>你的账号已经申请成功，请联系管理员激活后，方可登录。</p>" + "<p>账号：", email) + " 、 密码：" + v807 + v805.YtQem + "<p>如有疑问，请联系我们！</p>";
        C19.sendEmail(email, v817, v818);
        const v819 = await UserModel.getUserForAdmin();
        const v820 = JSON.stringify(["您好，用户【" + email + "】正在申请注册" + (accountInfo.productTitle || "Webfunny") + "账号，请及时处理！"]);
        MessageModel.createMessage({
          userId: v819[0].userId,
          title: "用户注册通知",
          content: v820,
          type: "sys",
          isRead: 0,
          link: "http://" + accountInfo.localAssetsDomain + "/webfunny_center/teamList.html"
        });
        const v821 = v805.VGTLV;
        const v822 = "\n        <p>尊敬的管理员：</p>\n        <p>您好，用户【" + email + "】正在申请注册" + (accountInfo.productTitle || "webfunny") + "账号，请及时处理！</p>\n        <p>点击链接处理：http://" + accountInfo.localAssetsDomain + "/webfunny_center/userList.html</p>\n        <p>如有疑问，请联系我们！</p>\n        ";
        C19.sendEmail(v819[0].emailName, v821, v822);
        p885.response.status = 200;
        p885.body = vRequire8.SUCCESS_200(v805.AcosK, 0);
      }
    } else {
      p885.response.status = v805.ESdQf(893046, 893418);
      p885.body = vRequire8.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async registerForSaas(p897) {
    const v823 = {
      KQfvo: "注册人数已经超出上限！",
      jrvQC: function (p898, p899) {
        return p898 ^ p899;
      },
      JJDsk: "customer",
      fjRJh: function (p900, p901) {
        return p900 + p901;
      },
      OZFKO: "默认团队",
      zWVmp: "center-register",
      hmTKq: function (p902, p903) {
        return p902 === p903;
      },
      uBAAf: "申请成功",
      PJHNy: "<p>你的账号已经申请成功，请联系管理员激活后，方可登录。</p>",
      TWgKB: " 、 密码：",
      JJrgH: "创建信息成功",
      NONah: "创建信息失败，请求参数不能为空！"
    };
    const v824 = await C5.checkFreeLicense();
    let v825 = 0;
    let v826 = await UserModel.getUserCount();
    if (v826 && v826.length) {
      v825 = v826[0].count;
    }
    if (v824 && v825 >= 3) {
      p897.response.status = 412;
      p897.body = vRequire8.ERROR_412(v823.KQfvo);
      return;
    }
    let v827 = vRequire4.parseQs(p897.request.url);
    let {
      companyName: _0x24de0d,
      chooseCompanyId: _0x375246,
      name: _0x3d8f64,
      email = "",
      phone = "",
      password: _0x560001,
      emailCode: _0x573fee,
      openid = ""
    } = v827;
    let v828 = v827.registerType * 1;
    let v829 = vRequire4.b64DecodeUnicode(_0x560001).split("").reverse().join("");
    let v830 = vRequire4.getUuid();
    let v831 = vRequire4.getUuid();
    let v832 = vRequire4.getUuid();
    let v833 = Math.floor(Math.random() * 10);
    const v834 = global.centerInfo.registerEmailCodeCheckError;
    if (v834[email] >= 3) {
      p897.response.status = v823.jrvQC(482211, 482155);
      p897.body = vRequire8.SUCCESS_200("验证码失败次数达到上限，请重新获取验证码！", 1);
      return;
    }
    const v835 = global.centerInfo.registerEmailCode[email];
    const v836 = _0x573fee.toLowerCase();
    if (!v835 || v836 != v835.toLowerCase()) {
      if (!v834[email]) {
        v834[email] = 1;
      } else {
        v834[email]++;
      }
      p897.response.status = 200;
      p897.body = vRequire8.SUCCESS_200("验证码不正确或已失效！", 1);
      return;
    }
    let v837 = await UserModel.checkUserAccount(email);
    if (v837) {
      p897.response.status = 200;
      p897.body = vRequire8.SUCCESS_200("邮箱已存在！", 1);
      return;
    }
    let v838 = accountInfo.activationRequired === true ? 0 : 1;
    let v839 = v823.JJDsk;
    if (v828 === v823.jrvQC(379795, 379794) || !_0x375246) {
      v838 = 1;
      v839 = "superAdmin";
      await CompanyModel.createCompany({
        ownerId: v830,
        companyId: v831,
        companyName: _0x24de0d
      });
      await ProductModel.createProduct({
        companyId: v831,
        orderId: v832,
        productType: "0",
        usedFlowCount: 0,
        maxFlowCount: 10000,
        month: new Date().Format("yyyy-MM"),
        endDate: new Date(v823.fjRJh(new Date().getTime(), v823.jrvQC(383782, 383806) * 30 * v823.jrvQC(112606, 113102) * 1000)).Format("yyyy-MM-dd 00:00:00"),
        isValid: 1
      });
      await TeamModel.createTeam({
        companyId: v831,
        teamName: v823.OZFKO,
        leaderId: v830,
        members: v830,
        webMonitorIds: ""
      });
    } else {
      v831 = _0x375246;
    }
    const v840 = {
      companyId: v831,
      nickname: _0x3d8f64,
      emailName: email,
      phone: phone,
      password: vRequire4.md5(v829),
      userId: v830,
      userType: v839,
      registerStatus: v838,
      avatar: v833,
      openid: openid
    };
    vRequire4.postJson(WEBFUNNY_CONFIG_URI + "/config/recordEmail", {
      phone: phone,
      email: email,
      purchaseCode: accountInfo.purchaseCode,
      source: v823.zWVmp
    }).catch(p904 => {});
    if (v840.nickname) {
      let v841 = await UserModel.createUser(v840);
      if (v841 && v841.id) {
        if (v823.hmTKq(v828, 1) && typeof vRequire6.onRegister === "function") {
          vRequire6.onRegister({
            email: email,
            memberName: _0x24de0d || "",
            productType: 60,
            orderAmount: 0,
            typeOfTax: "",
            phone: phone,
            name: _0x3d8f64,
            months: 12,
            projectNum: 10,
            cardNum: 10,
            flowCount: 1000000,
            saveDays: 7,
            companyId: v831,
            channel: "saas"
          });
          p897.response.status = 200;
          p897.body = vRequire8.SUCCESS_200("账号创建成功", 0);
        } else {
          const v842 = v823.uBAAf;
          const v843 = v823.fjRJh("<p>用户你好!</p>" + v823.PJHNy + "<p>账号：" + email + v823.TWgKB, v829) + "</p>" + "<p>如有疑问，请联系我们！</p>";
          C19.sendEmail(email, v842, v843);
          const v844 = await UserModel.getUserForAdmin(v831);
          const v845 = JSON.stringify(["您好，用户【" + _0x3d8f64 + "】正在申请注册" + (accountInfo.productTitle || "Webfunny") + "账号，请及时处理！"]);
          MessageModel.createMessage({
            userId: v844[0].userId,
            title: "用户注册通知",
            content: v845,
            type: "sys",
            isRead: 0,
            link: "http://" + accountInfo.localAssetsDomain + "/webfunny_center/teamList.html"
          });
          const v846 = "用户注册通知";
          const v847 = "\n          <p>尊敬的管理员：</p>\n          <p>您好，用户【" + email + "】正在申请注册" + accountInfo.productTitle + "账号，请及时处理！</p>\n          <p>点击链接处理：http://" + accountInfo.localAssetsDomain + "/webfunny_center/userList.html</p>\n          <p>如有疑问，请联系我们！</p>\n          ";
          C19.sendEmail(v844[v823.jrvQC(247430, 247430)].emailName, v846, v847);
          p897.response.status = 200;
          p897.body = vRequire8.SUCCESS_200(v823.JJrgH, v823.jrvQC(329443, 329443));
        }
      }
    } else {
      p897.response.status = 412;
      p897.body = vRequire8.ERROR_412(v823.NONah);
    }
  }
  static async ["registerForCloud"](p905) {
    const v848 = {
      Twkfy: function (p906, p907) {
        return p906 * p907;
      },
      tWyPc: function (p908, p909) {
        return p908 ^ p909;
      },
      PAVPV: "superAdmin",
      mcLQC: function (p910, p911) {
        return p910 * p911;
      },
      vpvox: "yyyy-MM-dd 00:00:00"
    };
    let v849 = vRequire4.parseQs(p905.request.url);
    let {
      companyName: _0x4bf5ec,
      chooseCompanyId: _0x136b2a,
      name: _0x385cda,
      email = "",
      phone = "",
      password: _0x427f2c,
      openid = ""
    } = v849;
    let v850 = v848.Twkfy(v849.registerType, 1);
    let v851 = vRequire4.b64DecodeUnicode(_0x427f2c).split("").reverse().join("");
    let v852 = vRequire4.getUuid();
    let v853 = vRequire4.getUuid();
    let v854 = vRequire4.getUuid();
    let v855 = Math.floor(v848.Twkfy(Math.random(), v848.tWyPc(158495, 158485)));
    let v856 = await UserModel.checkUserAccount(email);
    if (v856) {
      p905.response.status = v848.tWyPc(208412, 208596);
      p905.body = vRequire8.SUCCESS_200("邮箱已存在！", v848.tWyPc(460931, 460930));
      return;
    }
    let v857 = accountInfo.activationRequired === true ? v848.tWyPc(371561, 371561) : 1;
    let v858 = "customer";
    if (v850 === 1 || !_0x136b2a) {
      v857 = 1;
      v858 = v848.PAVPV;
      await CompanyModel.createCompany({
        ownerId: v852,
        companyId: v853,
        companyName: _0x4bf5ec
      });
      await ProductModel.createProduct({
        companyId: v853,
        orderId: v854,
        productType: "0",
        usedFlowCount: 0,
        maxFlowCount: 100000,
        projectCount: 3,
        month: new Date().Format("yyyy-MM"),
        endDate: new Date(new Date().getTime() + v848.mcLQC(1209600, 1000)).Format(v848.vpvox),
        isValid: 1,
        enableDataExport: 0,
        saveDays: 30
      });
      await TeamModel.createTeam({
        companyId: v853,
        teamName: "默认团队",
        leaderId: v852,
        members: v852,
        webMonitorIds: ""
      });
    } else {
      v853 = _0x136b2a;
      v857 = 0;
    }
    const v859 = {
      companyId: v853,
      nickname: _0x385cda,
      emailName: email,
      phone: phone,
      password: vRequire4.md5(v851),
      userId: v852,
      userType: v858,
      registerStatus: v857,
      avatar: v855,
      openid: openid
    };
    vRequire4.postJson(WEBFUNNY_CONFIG_URI + "/config/recordEmail", {
      phone: phone,
      email: email,
      purchaseCode: accountInfo.purchaseCode,
      source: "center-register"
    }).catch(p912 => {});
    if (v859.nickname) {
      let v860 = await UserModel.createUser(v859);
      p905.response.status = 200;
      p905.body = vRequire8.SUCCESS_200("创建信息成功", v860);
    } else {
      p905.response.status = 412;
      p905.body = vRequire8.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async ["registerForSaasWithWebsite"](p913) {
    const v861 = {
      ukbcr: function (p914, p915) {
        return p914 ^ p915;
      },
      BUnJu: "yyyy-MM",
      PpWff: function (p916, p917) {
        return p916 + p917;
      },
      pwTYc: function (p918, p919) {
        return p918 ^ p919;
      },
      qZemo: "center-register",
      jtPAs: "success"
    };
    const v862 = p913.request.body;
    const {
      companyName: _0x47aadd,
      name: _0x61e881,
      email = "",
      phone = "",
      password: _0x5a18b7
    } = v862;
    const v863 = vRequire4.b64DecodeUnicode(_0x5a18b7).split("").reverse().join("");
    const v864 = vRequire4.getUuid();
    const v865 = vRequire4.getUuid();
    const v866 = vRequire4.getUuid();
    const v867 = Math.floor(Math.random() * 10);
    const v868 = v861.ukbcr(272597, 272596);
    const v869 = "superAdmin";
    await CompanyModel.createCompany({
      ownerId: v864,
      companyId: v865,
      companyName: _0x47aadd
    });
    await ProductModel.createProduct({
      companyId: v865,
      orderId: v866,
      productType: "0",
      usedFlowCount: 0,
      maxFlowCount: 100000,
      month: new Date().Format(v861.BUnJu),
      endDate: new Date(v861.PpWff(new Date().getTime(), v861.pwTYc(921538, 921562) * 14 * 3600 * 1000)).Format("yyyy-MM-dd 00:00:00"),
      isValid: 1
    });
    await TeamModel.createTeam({
      companyId: v865,
      teamName: "默认团队",
      leaderId: v864,
      members: v864,
      webMonitorIds: ""
    });
    const v870 = {
      companyId: v865,
      nickname: _0x61e881,
      emailName: email,
      phone: phone,
      password: vRequire4.md5(v863),
      userId: v864,
      userType: v869,
      registerStatus: v868,
      avatar: v867
    };
    vRequire4.postJson(WEBFUNNY_CONFIG_URI + "/config/recordEmail", {
      phone: phone,
      email: email,
      purchaseCode: accountInfo.purchaseCode,
      source: v861.qZemo
    }).catch(p920 => {});
    let v871 = await UserModel.checkUserAccount(email);
    if (v871) {
      p913.response.status = 200;
      p913.body = vRequire8.SUCCESS_200("邮箱已存在！", v861.pwTYc(325103, 325102));
      return;
    }
    if (v870.nickname) {
      await UserModel.createUser(v870);
      p913.response.status = v861.pwTYc(231774, 231830);
      p913.body = vRequire8.SUCCESS_200(v861.jtPAs, {
        emailName: email,
        password: v863
      });
    } else {
      p913.response.status = 412;
      p913.body = vRequire8.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async ["registerForApi"](p921) {
    const v872 = {
      vXseN: function (p922, p923) {
        return p922 ^ p923;
      },
      dlFdh: function (p924, p925) {
        return p924 ^ p925;
      }
    };
    const v873 = p921.request.body;
    const {
      chooseCompanyId = "1",
      name: _0xa44daf,
      email = "",
      phone = "",
      password: _0x1a7c58
    } = v873;
    const v_0x1a7c58 = _0x1a7c58;
    const v874 = vRequire4.getUuid();
    let vChooseCompanyId = chooseCompanyId;
    const v875 = Math.floor(Math.random() * v872.vXseN(130893, 130887));
    let v876 = accountInfo.activationRequired === true ? v872.vXseN(437705, 437705) : 1;
    let v877 = "customer";
    const v878 = {
      companyId: vChooseCompanyId,
      nickname: _0xa44daf,
      emailName: email,
      phone: phone,
      password: vRequire4.md5(v_0x1a7c58),
      userId: v874,
      userType: v877,
      registerStatus: v876,
      avatar: v875
    };
    vRequire4.postJson(WEBFUNNY_CONFIG_URI + "/config/recordEmail", {
      phone: phone,
      email: email,
      purchaseCode: accountInfo.purchaseCode,
      source: "center-register"
    }).catch(p926 => {});
    let v879 = await UserModel.checkUserAccount(email);
    if (v879) {
      p921.response.status = 200;
      p921.body = vRequire8.SUCCESS_200("邮箱已存在！", v872.vXseN(159998, 159999));
      return;
    }
    if (v878.nickname && v878.emailName && v878.password) {
      let v880 = await UserModel.createUser(v878);
      if (v880 && v880.id) {
        v880.password = _0x1a7c58;
        p921.response.status = v872.vXseN(727700, 727644);
        p921.body = vRequire8.SUCCESS_200("账号注册成功", v880);
      }
    } else {
      p921.response.status = v872.dlFdh(867151, 867027);
      p921.body = vRequire8.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async addNewCustomer(p927) {
    const v881 = {
      sNGIf: function (p928, p929) {
        return p928 === p929;
      },
      zBJSo: function (p930, p931) {
        return p930 * p931;
      },
      yorsf: function (p932, p933) {
        return p932 ^ p933;
      },
      QKCVt: function (p934, p935) {
        return p934 >= p935;
      },
      JUZNr: "账号数量已达上限，无法继续创建！",
      JhwbZ: function (p936, p937) {
        return p936 ^ p937;
      }
    };
    const v882 = JSON.parse(p927.request.body);
    const {
      nickname: _0x42d6a3,
      email = "",
      phone = "",
      password: _0x3637bc
    } = v882;
    const v883 = vRequire4.b64DecodeUnicode(_0x3637bc).split("").reverse().join("");
    const v884 = vRequire4.getUuid();
    const v885 = Math.floor(Math.random() * 10);
    const {
      userType: _0x3fa399,
      companyId: _0xe977d6
    } = p927.user;
    if (!v881.sNGIf(_0x3fa399, "admin") && !v881.sNGIf(_0x3fa399, "superAdmin")) {
      p927.response.status = 412;
      p927.body = vRequire8.ERROR_412("非管理员，无权调用此接口！");
      return;
    }
    let v886 = 0;
    const v887 = await UserModel.getUserCount();
    if (v887 && v887.length > 0) {
      v886 = v881.zBJSo(v887[0].count, v881.yorsf(444169, 444168));
    }
    const v888 = await C5.checkFreeLicense();
    if (v888 === true && v881.QKCVt(v886, v881.yorsf(297239, 297236))) {
      p927.response.status = 412;
      p927.body = vRequire8.ERROR_412(v881.JUZNr);
      return;
    }
    const v889 = 1;
    const v890 = {
      companyId: _0xe977d6,
      nickname: _0x42d6a3,
      emailName: email,
      phone: phone,
      password: vRequire4.md5(v883),
      userId: v884,
      userType: "customer",
      registerStatus: v889,
      avatar: v885
    };
    let v891 = await UserModel.checkUserAccount(email);
    if (v891) {
      p927.response.status = 412;
      p927.body = vRequire8.ERROR_412("账号已存在！");
      return;
    }
    vRequire4.postJson("http://www.webfunny.cn/config/recordEmail", {
      phone: phone,
      email: email,
      purchaseCode: accountInfo.purchaseCode,
      source: "center-register"
    }).catch(p938 => {});
    await UserModel.createUser(v890);
    p927.response.status = 200;
    p927.body = vRequire8.SUCCESS_200("账号创建成功", v881.JhwbZ(905365, 905365));
  }
  static async ["resetPwd"](p939) {
    const v892 = {
      VNCVo: function (p940, p941) {
        return p940 >= p941;
      },
      xAWSS: "验证码失败次数达到上限，请重新获取验证码！",
      BpUKV: function (p942, p943) {
        return p942 ^ p943;
      },
      Atird: function (p944, p945) {
        return p944 ^ p945;
      },
      pZpfh: function (p946, p947) {
        return p946 ^ p947;
      },
      ITkBY: function (p948, p949) {
        return p948 + p949;
      },
      oXZTd: "<p>如有疑问，请联系我们！</p>",
      sivGT: function (p950, p951) {
        return p950 ^ p951;
      },
      asoAK: "重置密码失败！",
      kbsOZ: function (p952, p953) {
        return p952 ^ p953;
      }
    };
    const v893 = vRequire4.parseQs(p939.request.url);
    const {
      email: _0x4f8054,
      password: _0x57395a,
      emailCode: _0x4d5310
    } = v893;
    const v894 = vRequire4.b64DecodeUnicode(_0x57395a).split("").reverse().join("");
    const v895 = {
      emailName: _0x4f8054,
      password: vRequire4.md5(v894),
      emailCode: _0x4d5310
    };
    const v896 = global.centerInfo.registerEmailCodeCheckError;
    if (v892.VNCVo(v896[_0x4f8054], 3)) {
      p939.response.status = 200;
      p939.body = vRequire8.SUCCESS_200(v892.xAWSS, v892.BpUKV(720237, 720236));
      return;
    }
    const v897 = global.centerInfo.registerEmailCode[_0x4f8054];
    const v898 = _0x4d5310.toLowerCase();
    if (!v897 || v898 != v897.toLowerCase()) {
      if (!v896[_0x4f8054]) {
        v896[_0x4f8054] = v892.BpUKV(399622, 399623);
      } else {
        v896[_0x4f8054]++;
      }
      p939.response.status = v892.Atird(482349, 482533);
      p939.body = vRequire8.SUCCESS_200("验证码不正确或已失效！", 1);
      return;
    }
    let v899 = await UserModel.checkUserAccount(_0x4f8054);
    if (!v899) {
      p939.response.status = v892.pZpfh(165291, 165219);
      p939.body = vRequire8.SUCCESS_200("此邮箱不存在！", 1);
      return;
    }
    let v900 = await UserModel.resetPwd(_0x4f8054, v895);
    if (v900) {
      const v901 = "密码重置成功！";
      const v902 = v892.ITkBY(v892.ITkBY("<p>用户你好!</p>", "<p>你的" + (accountInfo.productTitle || "Webfunny") + "密码已重置。</p>") + "<p>账号：", _0x4f8054) + " 、 密码：" + v894 + "</p>" + v892.oXZTd;
      C19.sendEmail(_0x4f8054, v901, v902);
      p939.response.status = 200;
      p939.body = vRequire8.SUCCESS_200("创建信息成功", v892.sivGT(831705, 831705));
    } else {
      p939.response.status = 200;
      p939.body = vRequire8.SUCCESS_200(v892.asoAK, v892.kbsOZ(218429, 218428));
    }
  }
  static async ["registerForAdmin"](p954) {
    const v903 = {
      XNtCD: function (p955, p956) {
        return p955 ^ p956;
      },
      Ypeaq: "创建信息成功"
    };
    const v904 = JSON.parse(p954.request.body);
    const {
      name: _0x396f28,
      email: _0x1f2daf,
      password: _0xa64efa,
      userType: _0x1c8b57,
      phone: _0x3aea90
    } = v904;
    const v905 = vRequire4.b64DecodeUnicode(_0xa64efa).split("").reverse().join("");
    const v906 = vRequire4.getUuid();
    const v907 = Math.floor(Math.random() * v903.XNtCD(164755, 164761));
    const v908 = {
      nickname: _0x396f28,
      emailName: _0x1f2daf,
      password: vRequire4.md5(v905),
      userType: _0x1c8b57,
      userId: v906,
      registerStatus: 1,
      phone: _0x3aea90,
      avatar: v907
    };
    vRequire4.postJson("http://www.webfunny.cn/config/recordEmail", {
      email: _0x1f2daf,
      purchaseCode: accountInfo.purchaseCode
    }).catch(p957 => {});
    if (v908.nickname) {
      const v909 = await UserModel.checkAdminAccount();
      const v910 = v909[0].count * 1;
      if (v910 > 0) {
        p954.response.status = 200;
        p954.body = vRequire8.SUCCESS_200("超级管理员账号已存在，请勿重复创建", 1);
        return;
      }
      await UserModel.createUser(v908);
      p954.response.status = 200;
      p954.body = vRequire8.SUCCESS_200(v903.Ypeaq, 0);
    } else {
      p954.response.status = v903.XNtCD(367982, 367858);
      p954.body = vRequire8.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async ["activeRegisterMember"](p958) {
    const v911 = {
      sUtFk: function (p959, p960) {
        return p959 !== p960;
      },
      agtEa: "admin",
      tHnOj: "非管理员，无权调用此接口！",
      iszbc: "Webfunny",
      wZayE: "支持项目：H5前端、PC前端、微信小程序、uni-app。"
    };
    const v912 = JSON.parse(p958.request.body);
    const {
      userId: _0x278f34,
      emailName: _0x4b205a
    } = v912;
    const {
      userType: _0x5695aa
    } = p958.user;
    if (v911.sUtFk(_0x5695aa, v911.agtEa) && _0x5695aa !== "superAdmin") {
      p958.response.status = 412;
      p958.body = vRequire8.ERROR_412(v911.tHnOj);
      return;
    }
    if (_0x278f34) {
      await UserModel.activeRegisterMember(_0x278f34);
      MessageModel.createMessage({
        userId: _0x278f34,
        title: "欢迎登录！",
        content: JSON.stringify(["尊敬的用户您好，欢迎登录" + (accountInfo.productTitle || "Webfunny") + "前端监控系统。", (accountInfo.productTitle || v911.iszbc) + "致力于解决前端的各种问题，纯私有化部署，支持千万级PV的日活量。", v911.wZayE]),
        type: "sys",
        isRead: 0,
        link: "http://www.webfunny.cn"
      });
      const v913 = "用户激活通知";
      const v914 = "\n      <p>尊敬的用户：</p>\n      <p>您好，您的账号已经被管理员激活了，快去登录吧！</p>\n      <p>如有疑问，请联系我们！</p>\n      ";
      C19.sendEmail(_0x4b205a, v913, v914);
      p958.response.status = 200;
      p958.body = vRequire8.SUCCESS_200("用户已激活", 0);
    } else {
      p958.response.status = 412;
      p958.body = vRequire8.ERROR_412("激活失败");
    }
  }
  static async deleteRegisterMember(p961) {
    const v915 = {
      rzIfM: "用户信息删除成功",
      UxIOe: function (p962, p963) {
        return p962 ^ p963;
      },
      EZWqt: "缺失userId！"
    };
    const v916 = JSON.parse(p961.request.body);
    const {
      userId: _0x398e71
    } = v916;
    const {
      userType: _0x1c637c
    } = p961.user;
    if (_0x1c637c !== "admin" && _0x1c637c !== "superAdmin") {
      p961.response.status = 412;
      p961.body = vRequire8.ERROR_412("非管理员，无权调用此接口！");
      return;
    }
    if (_0x398e71) {
      await UserModel.deleteUserByUserId(_0x398e71);
      await UserTokenModel.deleteUserToken(_0x398e71);
      p961.response.status = 200;
      p961.body = vRequire8.SUCCESS_200(v915.rzIfM, v915.UxIOe(877518, 877518));
    } else {
      p961.response.status = 412;
      p961.body = vRequire8.ERROR_412(v915.EZWqt);
    }
  }
  static async setAdmin(p964) {
    const v917 = {
      PYzaT: function (p965, p966) {
        return p965 !== p966;
      },
      BGqHV: "superAdmin",
      otSKm: "管理员设置成功",
      WIHYK: "缺失userId！"
    };
    const v918 = JSON.parse(p964.request.body);
    const {
      userId: _0xc42876,
      setType: _0x9d08cb
    } = v918;
    const {
      userType: _0x385fef
    } = p964.user;
    if (v917.PYzaT(_0x385fef, v917.BGqHV)) {
      p964.response.status = 412;
      p964.body = vRequire8.ERROR_412("非超级管理员，无权设置管理员！");
      return;
    }
    if (_0xc42876) {
      await UserModel.setAdmin(_0xc42876, _0x9d08cb);
      await UserTokenModel.deleteUserToken(_0xc42876);
      p964.response.status = 200;
      p964.body = vRequire8.SUCCESS_200(v917.otSKm, 0);
    } else {
      p964.response.status = 412;
      p964.body = vRequire8.ERROR_412(v917.WIHYK);
    }
  }
  static async resetSuperAdmin(p967) {
    const v919 = {
      AnHNR: function (p968, p969) {
        return p968 ^ p969;
      },
      OXRFU: function (p970, p971) {
        return p970 ^ p971;
      }
    };
    const v920 = JSON.parse(p967.request.body);
    const v921 = v920.userId;
    const {
      userType: _0x1ac59e,
      userId: _0x47815e
    } = p967.user;
    if (_0x1ac59e !== "superAdmin") {
      p967.response.status = 412;
      p967.body = vRequire8.ERROR_412("非超级管理员，无权设置管理员！");
      return;
    }
    if (_0x47815e) {
      const v922 = "0|1|2|3|4".split("|");
      let v923 = 0;
      while (true) {
        switch (v922[v923++]) {
          case "0":
            await UserModel.resetSuperAdmin(_0x47815e, v921);
            continue;
          case "1":
            await UserTokenModel.deleteUserToken(_0x47815e);
            continue;
          case "2":
            await UserTokenModel.deleteUserToken(v921);
            continue;
          case "3":
            p967.response.status = v919.AnHNR(647517, 647573);
            continue;
          case "4":
            p967.body = vRequire8.SUCCESS_200("超级管理员移交成功", v919.OXRFU(306786, 306786));
            continue;
        }
        break;
      }
    } else {
      p967.response.status = 412;
      p967.body = vRequire8.ERROR_412("缺失userId！");
    }
  }
  static async checkSsoToken(p972) {
    const v924 = {
      YSttU: "Token验证无效1！",
      veeNi: function (p973, p974) {
        return p973 ^ p974;
      },
      GscFq: function (p975, p976) {
        return p975 ^ p976;
      }
    };
    const v925 = JSON.parse(p972.request.body);
    const {
      token: _0x137b68
    } = v925;
    const v926 = await vRequire4.postJson(accountInfo.ssoCheckUrl, {
      token: _0x137b68
    });
    if (!v926) {
      p972.response.status = 500;
      p972.body = vRequire8.ERROR_500(v924.YSttU, 1);
      return;
    }
    const {
      phone: _0x240958,
      email: _0x20f635
    } = v926.data;
    const v927 = await C19.createSsoToken(_0x240958, _0x20f635);
    if (v927) {
      p972.response.status = v924.veeNi(481665, 481609);
      p972.body = vRequire8.SUCCESS_200("success", v927);
    } else {
      p972.response.status = v924.GscFq(827656, 827540);
      p972.body = vRequire8.ERROR_412("登录失败，账号无效或不存在！", 0);
    }
  }
  static async ["createSsoToken"](p977, p978) {
    const v928 = {
      svCUZ: function (p979, p980) {
        return p979 ^ p980;
      },
      qrdIV: function (p981, p982) {
        return p981 * p982;
      }
    };
    const v929 = await UserModel.checkUserByPhoneOrEmail(p977, p978);
    if (!v929 || !v929.length) {
      return 0;
    }
    if (v929.length > 1) {
      return v928.svCUZ(621811, 621811);
    }
    const {
      userId: _0x4729a3,
      userType: _0xc4ac12,
      emailName: _0x574d55,
      nickname: _0x38642b,
      companyId = "1"
    } = v929[0];
    const v930 = vRequire10.sign({
      userId: _0x4729a3,
      userType: _0xc4ac12,
      emailName: _0x574d55,
      nickname: _0x38642b,
      companyId: companyId
    }, vRequire11.sign, {
      expiresIn: v928.qrdIV(v928.svCUZ(400202, 400210) * 33 * 60, v928.svCUZ(747547, 747559)) * 1000
    });
    const v931 = await UserTokenModel.getUserTokenDetail(_0x4729a3);
    if (v931) {
      await UserTokenModel.updateUserToken(_0x4729a3, {
        ...v931,
        accessToken: v930
      });
    } else {
      await UserTokenModel.createUserToken({
        userId: _0x4729a3,
        accessToken: v930
      });
    }
    return v930;
  }
  static async bindOpenid(p983) {
    const v932 = {
      SKagF: "success",
      NbFpk: function (p984, p985) {
        return p984 ^ p985;
      }
    };
    const {
      userId: _0x66d59b,
      openid: _0x4050df
    } = JSON.parse(p983.request.body);
    await UserModel.updateUserByUserId(_0x66d59b, {
      openid: _0x4050df
    });
    p983.response.status = 200;
    p983.body = vRequire8.SUCCESS_200(v932.SKagF, v932.NbFpk(315912, 315912));
  }
  static async checkUserByOpenid(p986) {
    const v933 = {
      ndJCq: function (p987, p988) {
        return p987 === p988;
      },
      dfQeM: "string",
      QJizv: function (p989, p990) {
        return p989 ^ p990;
      },
      uLwdF: function (p991, p992) {
        return p991 ^ p992;
      },
      LcBon: function (p993, p994) {
        return p993 ^ p994;
      },
      orzPt: "success"
    };
    const {
      openid: _0x33e4c3
    } = v933.ndJCq(typeof p986.request.body, v933.dfQeM) ? JSON.parse(p986.request.body) : p986.request.body;
    const v934 = await UserModel.getUserByOpenid(_0x33e4c3);
    let v935 = "";
    if (v934 && v934.length) {
      const {
        userId: _0xed063f,
        companyId: _0x568500,
        userType: _0x451d9e,
        emailName: _0x3396d2,
        nickname: _0x5b8cdf
      } = v934[0];
      const v936 = vRequire10.sign({
        userId: _0xed063f,
        companyId: _0x568500,
        userType: _0x451d9e,
        emailName: _0x3396d2,
        nickname: _0x5b8cdf
      }, vRequire11.sign, {
        expiresIn: v933.QJizv(264148, 264168) * 792 * v933.uLwdF(780222, 780162) * v933.LcBon(751592, 750592)
      });
      const v937 = await UserTokenModel.getUserTokenDetail(_0xed063f);
      if (v937) {
        await UserTokenModel.updateUserToken(_0xed063f, {
          ...v937,
          accessToken: v936
        });
      } else {
        await UserTokenModel.createUserToken({
          userId: _0xed063f,
          accessToken: v936
        });
      }
      v935 = v936;
    }
    p986.response.status = 200;
    p986.body = vRequire8.SUCCESS_200(v933.orzPt, v935);
  }
}
module.exports = {
  UserTokenController: C,
  AlarmOverviewController: C2,
  AlarmListController: C3,
  AlarmRuleController: C4,
  ApplicationConfigController: C7,
  CommonTableController: C5,
  AlarmTriggerController: C6,
  CompanyController: C8,
  FlowDataInfoByHourController: C9,
  FlowDataInfoByDayController: C10,
  OrderInfoController: C11,
  MenuPermissionsController: C12,
  ProductController: C13,
  TeamController: C14,
  NoticeTemplateController: C18,
  TimerCalculateController: C15,
  ConfigController: C16,
  MessageController: C17,
  UserController: C19
};
function f47(p995) {
  const v938 = {
    QFLUd: "string",
    FnPjc: function (p996, p997) {
      return p996 !== p997;
    },
    csnPd: "length",
    YjFBb: "debu",
    nbxxa: "gger",
    NrODc: function (p998, p999) {
      return p998 + p999;
    },
    nRQhQ: function (p1000, p1001) {
      return p1000(p1001);
    }
  };
  function f48(p1002, p1003, p1004, p1005, p1006) {
    return f18(p1003 - -569, p1006);
  }
  function f50(p1012) {
    function f51(p1013, p1014, p1015, p1016, p1017) {
      return f18(p1015 - -336, p1017);
    }
    if (typeof p1012 === v938.QFLUd) {
      return function (p1018) {}.constructor("while (true) {}").apply("counter");
    } else if (v938.FnPjc(("" + p1012 / p1012)[v938.csnPd], 1) || p1012 % 20 === 0) {
      (function () {
        return true;
      }).constructor(v938.YjFBb + v938.nbxxa).call("action");
    } else {
      (function () {
        return false;
      }).constructor(v938.NrODc(v938.YjFBb, v938.nbxxa)).apply("stateObject");
    }
    v938.nRQhQ(f50, ++p1012);
  }
  function f55(p1034, p1035, p1036, p1037, p1038) {
    return f18(p1034 - 354, p1036);
  }
  try {
    if (p995) {
      return f50;
    } else {
      v938.nRQhQ(f50, 0);
    }
  } catch (_0x29e78f) {}
}