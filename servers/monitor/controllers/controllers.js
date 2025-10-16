(function (p, p2) {
  const vP = p();
  function f(p3, p4, p5, p6, p7) {
    return f15(p4 - -824, p5);
  }
  function f2(p8, p9, p10, p11, p12) {
    return f19(p8 - -561, p9);
  }
  function f3(p13, p14, p15, p16, p17) {
    return f15(p16 - -924, p13);
  }
  function f4(p18, p19, p20, p21, p22) {
    return f19(p20 - 315, p21);
  }
  function f5(p23, p24, p25, p26, p27) {
    return f15(p24 - 592, p26);
  }
  function f6(p28, p29, p30, p31, p32) {
    return f15(p28 - -388, p29);
  }
  function f7(p33, p34, p35, p36, p37) {
    return f19(p34 - -151, p35);
  }
  function f8(p38, p39, p40, p41, p42) {
    return f15(p42 - 764, p40);
  }
  do {
    try {
      const v = parseInt(f7(3479, 4812, 4516, 7632, 4841)) / 1 * (-parseInt(f(1221, 168, "R)DB", 1489, 1993)) / 2) + -parseInt(f(2231, 1047, "ET9T", -839, 2910)) / 3 + parseInt(f2(1416, 1029, 3735, 1592, -295)) / 4 + -parseInt(f3("1K(u", 661, -226, 427, 2278)) / 5 + parseInt(f8(7512, 4292, "1K(u", 4462, 4812)) / 6 + -parseInt(f5(4627, 3158, 1154, "ijw5", 1241)) / 7 * (-parseInt(f6(4469, "IP)r", 2557, 4814, 3751)) / 8) + -parseInt(f4(3551, 1062, 3180, 652, 3584)) / 9;
      if (v === p2) {
        break;
      } else {
        vP.push(vP.shift());
      }
    } catch (_0x549e8c) {
      vP.push(vP.shift());
    }
  } while (true);
})(f31, 113499);
(function () {
  function f9(p45, p46, p47, p48, p49) {
    return f15(p46 - 606, p45);
  }
  const v5 = {
    BOmVs: function (p50, p51) {
      return p50 + p51;
    },
    XuYqT: f9("z)Ux", 3279, 2434, 2991, 3731),
    tEAdD: function (p52) {
      return p52();
    }
  };
})();
const vRequire = require("../config/db");
const v8 = vRequire.sequelize;
const vRequire2 = require("colors");
const vRequire3 = require("../../../interceptor/config/jsError");
const vRequire4 = require("../../../interceptor/config/consoleError");
const vRequire5 = require("../../../interceptor/config/httpError");
const vRequire6 = require("../../../interceptor/config/resourceError");
function f15(p78, p79) {
  const v_0x46cb = f31();
  f15 = function (p80, p81) {
    p80 = p80 - 0;
    let v9 = v_0x46cb[p80];
    if (f15.CCZqsY === undefined) {
      function f16(p82) {
        const v10 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let v11 = "";
        let v12 = "";
        for (let v13 = 0, v14, v15, v16 = 0; v15 = p82.charAt(v16++); ~v15 && (v14 = v13 % 4 ? v14 * 64 + v15 : v15, v13++ % 4) ? v11 += String.fromCharCode(v14 >> (v13 * -2 & 6) & 255) : 0) {
          v15 = v10.indexOf(v15);
        }
        for (let v17 = 0, v18 = v11.length; v17 < v18; v17++) {
          v12 += "%" + ("00" + v11.charCodeAt(v17).toString(16)).slice(-2);
        }
        return decodeURIComponent(v12);
      }
      const vF2 = function (p83, p84) {
        let v19 = [];
        let v20 = 0;
        let v21;
        let v22 = "";
        p83 = f16(p83);
        let v23;
        for (v23 = 0; v23 < 256; v23++) {
          v19[v23] = v23;
        }
        for (v23 = 0; v23 < 256; v23++) {
          v20 = (v20 + v19[v23] + p84.charCodeAt(v23 % p84.length)) % 256;
          v21 = v19[v23];
          v19[v23] = v19[v20];
          v19[v20] = v21;
        }
        v23 = 0;
        v20 = 0;
        for (let v24 = 0; v24 < p83.length; v24++) {
          v23 = (v23 + 1) % 256;
          v20 = (v20 + v19[v23]) % 256;
          v21 = v19[v23];
          v19[v23] = v19[v20];
          v19[v20] = v21;
          v22 += String.fromCharCode(p83.charCodeAt(v24) ^ v19[(v19[v23] + v19[v20]) % 256]);
        }
        return v22;
      };
      f15.ofeGst = vF2;
      p78 = arguments;
      f15.CCZqsY = true;
    }
    const v25 = v_0x46cb[0];
    const v26 = p80 + v25;
    const v27 = p78[v26];
    if (!v27) {
      if (f15.iQzVtN === undefined) {
        f15.iQzVtN = true;
      }
      v9 = f15.ofeGst(v9, p81);
      p78[v26] = v9;
    } else {
      v9 = v27;
    }
    return v9;
  };
  return f15(p78, p79);
}
undefined;
const vRequire7 = require("../util/utils");
const vRequire8 = require("../util/utils");
const vRequire9 = require("../../../util_cus");
const vRequire10 = require("../../../alarm/index");
const vRequire11 = require("../../../alarm/alarmName");
const vRequire12 = require("lz-string");
const v29 = require("node-ip2region").create();
const vRequire13 = require("../../../config/log");
function f19(p94, p95) {
  const v_0x46cb2 = f31();
  f19 = function (p96, p97) {
    p96 = p96 - 0;
    let v30 = v_0x46cb2[p96];
    if (f19.ZiRzvN === undefined) {
      function f20(p98) {
        const v31 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let v32 = "";
        let v33 = "";
        for (let v34 = 0, v35, v36, v37 = 0; v36 = p98.charAt(v37++); ~v36 && (v35 = v34 % 4 ? v35 * 64 + v36 : v36, v34++ % 4) ? v32 += String.fromCharCode(v35 >> (v34 * -2 & 6) & 255) : 0) {
          v36 = v31.indexOf(v36);
        }
        for (let v38 = 0, v39 = v32.length; v38 < v39; v38++) {
          v33 += "%" + ("00" + v32.charCodeAt(v38).toString(16)).slice(-2);
        }
        return decodeURIComponent(v33);
      }
      f19.VruSMg = f20;
      p94 = arguments;
      f19.ZiRzvN = true;
    }
    const v40 = v_0x46cb2[0];
    const v41 = p96 + v40;
    const v42 = p94[v41];
    if (!v42) {
      v30 = f19.VruSMg(v30);
      p94[v41] = v30;
    } else {
      v30 = v42;
    }
    return v30;
  };
  return f19(p94, p95);
}
undefined;
const vRequire14 = require("../util/status-code");
const {
  handleResultWhenJavascriptError,
  handleResultWhenHttpRequest,
  handleResultWhenResourceError
} = require("../../../interceptor");
const vRequire15 = require("node-fetch");
const vRequire16 = require("jsonwebtoken");
const v44 = vRequire16.verify;
const vRequire17 = require("../config/secret");
const {
  USER_INFO,
  UPLOAD_TYPE,
  PERF_KEYS,
  FLOW_TYPE,
  UP_LOG_TYPE,
  CENTER_API,
  PROJECT_CONFIG,
  PROJECT_INFO,
  LOCAL_SERVER,
  LOCAL_MONITOR_ASSETS
} = require("../config/consts");
const vRequire18 = require("node-xlsx");
const fs2 = require("fs");
const vRequire19 = require("path");
const ip = require("ip");
const vRequire20 = require("systeminformation");
const vRequire21 = require("../config/city");
const vRequire22 = require("../config/province");
const vRequire23 = require("nodemailer");
const vRequire24 = require("formidable");
const vRequire25 = require("../config/AccountConfig");
const vRequire26 = require("../config/monitorKeys");
const vRequire27 = require("../lib/RabbitMQ");
const vRequire28 = require("child_process");
const vRequire29 = require("getmac");
const {
  spawn,
  exec,
  execFile
} = require("child_process");
const {
  accountInfo
} = vRequire25;
const vRequire30 = require("../config/constMsg");
const v45 = accountInfo.messageQueue.enable === true ? new vRequire27() : null;
const v46 = ["d", "i", "l", "a", "v", "e", "d", "o", "c", "r", "o", "t", "i", "n", "o", "m"].reverse().join("");
const vF14 = "http://www.webfunny.cn";
const {
  HttpLogInfoModel,
  CustomerStayTimeModel,
  HttpErrorHandleListModel,
  CustomerStatusModel,
  CustomerPvLeaveModel,
  HttpLogReqInfoModel,
  HttpErrorInfoModel,
  CustomerPVModel,
  CommonTableModel,
  BehaviorInfoModel,
  DeviceInfoCountByDayModel,
  CommonModel,
  ExtendBehaviorInfoModel,
  ConfigModel,
  IgnoreErrorModel,
  DeviceInfoCountByHourModel,
  AlarmRuleModel,
  JavascriptErrorInfoModel,
  JsErrorHandleListModel,
  LoadTimeInfoByHourModel,
  LoadPageInfoModel,
  InfoCountByDayModel,
  InfoCountByHourModel,
  PageLoadInfoModel,
  LocalLogModel,
  PageLoadInfoByDayAndHourModel,
  PageLoadInfoByMinuteModel,
  PerfInfoByDayModel,
  MessageModel,
  ScreenShotInfoModel,
  ProjectModel,
  TeamModel,
  UserModel,
  ResourceLoadInfoModel,
  VideoLogModel,
  VideosModel
} = require("../modules/models.js");
class C {
  static async ["getTableList"](p128) {
    const v47 = {
      KLcgc: function (p129, p130) {
        return p129 !== p130;
      },
      oGtWT: "superAdmin",
      GOPXq: "admin",
      Rxscq: "您没有权限获取数据库列表！",
      rdRaA: function (p131, p132) {
        return p131 - p132;
      },
      nZJgK: "success"
    };
    const {
      timeType: _0x470af6
    } = JSON.parse(p128.request.body);
    const {
      userType: _0x896065
    } = p128.user;
    if (v47.KLcgc(_0x896065, v47.oGtWT) && _0x896065 !== v47.GOPXq) {
      p128.response.status = 412;
      p128.body = vRequire14.ERROR_412(v47.Rxscq);
      return;
    }
    const v48 = vRequire7.addDays(v47.rdRaA(0, _0x470af6)).replace(new RegExp("-", "g"), "");
    const v49 = await CommonTableModel.getTableList(accountInfo.mysqlConfig.write.dataBaseName, v48);
    p128.response.status = 200;
    p128.body = vRequire14.SUCCESS_200(v47.nZJgK, v49);
  }
  static async ["dropTable"](p133) {
    const v50 = {
      hLVyj: "success"
    };
    const {
      tableNames: _0x27075c
    } = JSON.parse(p133.request.body);
    _0x27075c.forEach(p134 => {
      CommonTableModel.dropTable(p134);
    });
    p133.response.status = 200;
    p133.body = vRequire14.SUCCESS_200(v50.hLVyj, 0);
  }
  static async rebuildAllTables(p135) {
    const v51 = {
      kyZZY: function (p136, p137) {
        return p136 ^ p137;
      }
    };
    const v52 = await ProjectModel.getWebMonitorIdList();
    const v53 = vRequire7.addDays(p135).replace(new RegExp("-", "g"), "");
    v52.forEach((p138, p139) => {
      if (p138.webMonitorId) {
        setTimeout(() => {
          CommonTableModel.createLogTable(p138.webMonitorId, "");
        }, p139 * v51.kyZZY(788535, 793535));
      }
    });
    CommonTableModel.createInfoTable(v53);
  }
  static async createTableByWebMonitorId(p140, p141) {
    const v54 = vRequire7.addDays(p141).replace(new RegExp("-", "g"), "");
    CommonTableModel.createLogTable(p140, "");
    CommonTableModel.createInfoTable(v54);
  }
  static async createLogTable(p142) {
    const v55 = {
      jGdzA: function (p143, p144, p145) {
        return p143(p144, p145);
      },
      NxjiZ: function (p146, p147) {
        return p146 * p147;
      },
      cCaPi: function (p148, p149) {
        return p148 ^ p149;
      }
    };
    C.rebuildAllTables(0);
    v55.jGdzA(setTimeout, () => {
      C.rebuildAllTables(1);
    }, v55.NxjiZ(v55.cCaPi(374847, 374787), 1000));
    p142.response.status = 200;
    p142.body = vRequire14.SUCCESS_200("success", v55.cCaPi(819119, 819119));
  }
  static async updateTableBySql(p150) {
    const v56 = {
      zPehp: function (p151, p152) {
        return p151 ^ p152;
      }
    };
    const {
      upgradeOrder: _0x48de4a,
      tableNameList: _0x4a14ee
    } = JSON.parse(p150.request.body);
    const v57 = vRequire7.b64DecodeUnicode(_0x48de4a).split("-");
    _0x4a14ee.forEach(p153 => {
      const v58 = "alter table " + p153 + " add column " + v57[1] + " " + v57[2] + " default " + v57[v56.zPehp(675140, 675143)] + " comment '" + v57[4] + "'";
      CommonTableModel.updateTableBySql(v58);
    });
    p150.response.status = 200;
    p150.body = vRequire14.SUCCESS_200("success", 0);
  }
  static async updateFieldBySql(p154) {
    const v59 = {
      Mnxgg: function (p155, p156) {
        return p155 < p156;
      },
      ugCgo: function (p157, p158) {
        return p157 * p158;
      },
      wzjaw: function (p159, p160) {
        return p159 ^ p160;
      }
    };
    const {
      sqlList: _0x13666e
    } = JSON.parse(p154.request.body);
    for (let v60 = 0; v59.Mnxgg(v60, _0x13666e.length); v60++) {
      setTimeout(() => {
        CommonTableModel.updateTableBySql(vRequire7.b64DecodeUnicode(_0x13666e[v60]));
      }, v59.ugCgo(v59.wzjaw(559648, 560624), v60));
    }
    p154.response.status = 200;
    p154.body = vRequire14.SUCCESS_200("success", 0);
  }
}
class C2 {
  static async ["getMachineFingerprint"]() {
    const v61 = {
      UXNlY: function (p161, p162) {
        return p161 + p162;
      },
      OBDwZ: "crypto",
      RQfnM: "hex",
      KqWfV: function (p163, p164) {
        return p163 ^ p164;
      },
      YEwCM: function (p165, p166) {
        return p165 ^ p166;
      },
      iELoe: function (p167, p168) {
        return p167 ^ p168;
      }
    };
    const v62 = ip.address().split(".");
    const v63 = v61.UXNlY(v62[0] + ".", v62[1]);
    const v64 = await vRequire20.cpu();
    const v65 = await vRequire20.baseboard();
    const v66 = await vRequire20.diskLayout();
    const v67 = (await vRequire20.networkInterfaces()).find(p169 => !p169.internal)?.["mac"];
    const v68 = v64.manufacturer + "-" + v64.brand + "-" + v67;
    const v69 = v64.manufacturer + "-" + v64.brand + "-" + v63;
    const v70 = require(v61.OBDwZ).createHash("sha256").update(v68).digest("hex");
    const v71 = require(v61.OBDwZ).createHash("sha256").update(v69).digest(v61.RQfnM);
    const v72 = v70.substring(v61.KqWfV(428001, 428001), v61.YEwCM(211436, 211426));
    const v73 = v71.substring(0, 14);
    const v74 = v70.substring(v61.iELoe(534248, 534255), 21);
    const v75 = v71.substring(7, 21);
    return {
      monitor: {
        machineId1: v72,
        machineId2: v73
      },
      event: {
        machineId1: v74,
        eventMachineId2: v75
      }
    };
  }
  static async ["decryptPurchaseCode"](p170, p171) {
    const v76 = {
      nWOTz: "JTVCJTdCJTIyUCUyMiUzQSUyMjElMjIlMkMlMjJYJTIyJTNBJTIyMiUyMiUyQyUyMkQlMjIlM0ElMjIzJTIyJTJDJTIyVyUyMiUzQSUyMjQlMjIlMkMlMjJVJTIyJTNBJTIyNSUyMiUyQyUyMkIlMjIlM0ElMjI2JTIyJTJDJTIyUyUyMiUzQSUyMjclMjIlMkMlMjJNJTIyJTNBJTIyOCUyMiUyQyUyMkclMjIlM0ElMjI5JTIyJTJDJTIySyUyMiUzQSUyMjAlMjIlN0QlMkMlN0IlMjJaJTIyJTNBJTIyMSUyMiUyQyUyMkElMjIlM0ElMjIyJTIyJTJDJTIyRCUyMiUzQSUyMjMlMjIlMkMlMjJWJTIyJTNBJTIyNCUyMiUyQyUyMk0lMjIlM0ElMjI1JTIyJTJDJTIyQyUyMiUzQSUyMjYlMjIlMkMlMjJOJTIyJTNBJTIyNyUyMiUyQyUyMkslMjIlM0ElMjI4JTIyJTJDJTIySiUyMiUzQSUyMjklMjIlMkMlMjJMJTIyJTNBJTIyMCUyMiU3RCUyQyU3QiUyMlklMjIlM0ElMjIxJTIyJTJDJTIyUSUyMiUzQSUyMjIlMjIlMkMlMjJJJTIyJTNBJTIyMyUyMiUyQyUyMlQlMjIlM0ElMjI0JTIyJTJDJTIyViUyMiUzQSUyMjUlMjIlMkMlMjJSJTIyJTNBJTIyNiUyMiUyQyUyMkglMjIlM0ElMjI3JTIyJTJDJTIyQyUyMiUzQSUyMjglMjIlMkMlMjJQJTIyJTNBJTIyOSUyMiUyQyUyMlUlMjIlM0ElMjIwJTIyJTdEJTJDJTdCJTIyUyUyMiUzQSUyMjElMjIlMkMlMjJXJTIyJTNBJTIyMiUyMiUyQyUyMlolMjIlM0ElMjIzJTIyJTJDJTIyRiUyMiUzQSUyMjQlMjIlMkMlMjJRJTIyJTNBJTIyNSUyMiUyQyUyMkolMjIlM0ElMjI2JTIyJTJDJTIyVCUyMiUzQSUyMjclMjIlMkMlMjJCJTIyJTNBJTIyOCUyMiUyQyUyMlYlMjIlM0ElMjI5JTIyJTJDJTIySSUyMiUzQSUyMjAlMjIlN0QlMkMlN0IlMjJFJTIyJTNBJTIyMSUyMiUyQyUyMkIlMjIlM0ElMjIyJTIyJTJDJTIyUSUyMiUzQSUyMjMlMjIlMkMlMjJWJTIyJTNBJTIyNCUyMiUyQyUyMlglMjIlM0ElMjI1JTIyJTJDJTIyWSUyMiUzQSUyMjYlMjIlMkMlMjJUJTIyJTNBJTIyNyUyMiUyQyUyMkclMjIlM0ElMjI4JTIyJTJDJTIyUyUyMiUzQSUyMjklMjIlMkMlMjJNJTIyJTNBJTIyMCUyMiU3RCU1RA==",
      SZRII: function (p172, p173) {
        return p172 === p173;
      },
      udatb: "\\d{4}-\\d{2}-\\d{2}",
      myShH: function (p174, p175) {
        return p174 - p175;
      },
      vWdoo: function (p176, p177) {
        return p176 ^ p177;
      },
      brxLl: function (p178, p179) {
        return p178 != p179;
      },
      HlDHO: function (p180, p181) {
        return p180 ^ p181;
      },
      heOTs: function (p182, p183) {
        return p182 ^ p183;
      },
      wgNYd: function (p184, p185) {
        return p184 ^ p185;
      },
      wNzJz: function (p186, p187) {
        return p186 == p187;
      },
      VnlGm: function (p188, p189) {
        return p188 === p189;
      },
      JiyZr: function (p190, p191) {
        return p190 * p191;
      },
      bRbQw: function (p192, p193) {
        return p192 + p193;
      },
      gzhqw: function (p194, p195) {
        return p194 ^ p195;
      },
      OtnYk: function (p196, p197) {
        return p196 - p197;
      },
      VDtqG: function (p198, p199) {
        return p198 ^ p199;
      },
      QIIgK: function (p200, p201, p202) {
        return p200(p201, p202);
      },
      LcrFm: function (p203, p204) {
        return p203 ^ p204;
      },
      LVxkp: function (p205, p206) {
        return p205 !== p206;
      },
      FsPEa: function (p207, p208) {
        return p207 ^ p208;
      },
      FdtKY: function (p209, p210) {
        return p209 ^ p210;
      },
      agdBh: function (p211, p212) {
        return p211 ^ p212;
      },
      hviAx: function (p213, p214) {
        return p213 ^ p214;
      },
      BkSCx: function (p215, p216) {
        return p215 == p216;
      },
      NYgui: function (p217, p218) {
        return p217 == p218;
      },
      YuzSY: function (p219, p220) {
        return p219 > p220;
      },
      zBbiH: function (p221, p222) {
        return p221 ^ p222;
      },
      YeikD: function (p223, p224) {
        return p223 ^ p224;
      },
      aVBQj: function (p225, p226) {
        return p225 ^ p226;
      },
      onLyT: function (p227, p228) {
        return p227 ^ p228;
      },
      Skxta: function (p229, p230) {
        return p229 ^ p230;
      },
      FxkqI: function (p231, p232) {
        return p231 ^ p232;
      },
      cCXvj: "PRODUCT_TYPE",
      IWZDm: function (p233, p234) {
        return p233 ^ p234;
      },
      hyIJh: function (p235, p236) {
        return p235 ^ p236;
      },
      eeFvv: function (p237, p238) {
        return p237 + p238;
      },
      qfhnH: function (p239, p240) {
        return p239 + p240;
      },
      IYgWk: function (p241, p242) {
        return p241 + p242;
      },
      NDdQn: function (p243, p244) {
        return p243 + p244;
      },
      Evkcx: function (p245, p246) {
        return p245 ^ p246;
      },
      xlHNQ: function (p247, p248) {
        return p247 ^ p248;
      }
    };
    global.monitorInfo.purchaseCodeEndDate = "";
    global.monitorInfo.purchaseCodeValid = false;
    global.monitorInfo.purchaseCodeType = 0;
    global.monitorInfo.purchaseCodeProjectCount = 3;
    const v77 = v76.nWOTz;
    const v78 = ["RUhGR1RISVFRVlVKVUtMVU1DTlE="];
    for (let v79 = 0; v79 < v78.length; v79++) {
      const v80 = vRequire7.b64DecodeUnicode(v78[v79]);
      if (v76.SZRII(p170, v80)) {
        return {
          iv: false,
          pt: 0,
          pc: 3,
          ft: 2,
          mc: {},
          pl: []
        };
      }
    }
    let v81 = false;
    let v82 = "";
    let v83 = new Date().Format("yyyy-MM-dd");
    const v84 = new RegExp(v76.udatb, "");
    global.monitorInfo.purchaseCodeValid = v81 === true ? v46 : false;
    if (p170.length != 20 && p170.length != 25 && p170.length != 30 && p170.length != 50) {
      return {
        iv: false,
        pt: 0,
        pc: 3,
        ft: 2,
        mc: {},
        pl: []
      };
    }
    if (p170.length == 30) {
      let v85 = p170.split("").reverse().join("");
      let v86 = v85.substring(v76.myShH(v85.length, 5), v85.length);
      let v87 = v85.substring(0, v85.length - 5);
      let v88 = v87.substring(v76.vWdoo(626621, 626621), 5);
      let v89 = v87.substring(5, v87.length);
      const v90 = v88 + v86 + v89;
      const v91 = vRequire7.md5Hex(v90);
      if (v76.brxLl(p171, v91)) {
        return {
          iv: false,
          pt: 0,
          pc: 3,
          ft: 2,
          mc: {},
          pl: []
        };
      }
    }
    if (p170.length == v76.vWdoo(133540, 133526)) {
      let v92 = p170.substring(0, v76.vWdoo(352108, 352114)).split("").reverse().join("");
      let v93 = v92.substring(v92.length - 5, v92.length);
      let v94 = v92.substring(v76.vWdoo(718275, 718275), v76.myShH(v92.length, v76.vWdoo(599085, 599080)));
      let v95 = v94.substring(0, 5);
      let v96 = v94.substring(v76.HlDHO(925006, 925003), v94.length);
      const v97 = v95 + v93 + v96;
      const v98 = vRequire7.md5Hex(v97);
      if (v76.brxLl(p171, v98)) {
        return {
          iv: false,
          pt: 0,
          pc: 3,
          ft: 2,
          mc: {},
          pl: []
        };
      }
    }
    const v99 = new RegExp("^[A-Z]{20,30}$", "");
    if (!v99.test(p170.substring(0, v76.heOTs(201963, 201973)))) {
      return {
        iv: false,
        pt: 0,
        pc: 3,
        ft: 2,
        mc: {},
        pl: []
      };
    }
    let v100 = v76.wgNYd(345344, 345344);
    let v101 = v76.heOTs(382638, 382637);
    let v102 = 1;
    const v103 = p170.charAt(4).charCodeAt();
    const v104 = p170.charAt(9).charCodeAt();
    const v105 = v104 - v103;
    if (v76.wNzJz(p170.length, 20)) {
      v100 = v105;
      if (v76.VnlGm(v100, v76.heOTs(287586, 287586))) {
        v101 = "9999";
      }
    } else if (v76.wNzJz(p170.length, 25) || p170.length == 30 || p170.length == 50) {
      const v106 = p170.charAt(v76.vWdoo(700929, 700949)).charCodeAt();
      const v107 = p170.charAt(22).charCodeAt();
      const v108 = v76.JiyZr(v107 - v106, 10);
      v100 = v76.bRbQw(v105, v108);
      if ([70, 71, 72, v76.heOTs(489290, 489219), v76.gzhqw(920045, 919975), 75].indexOf(v100) !== -1) {
        const v109 = p170.charAt(29).charCodeAt();
        const v110 = p170.charAt(26).charCodeAt();
        const v111 = p170.charAt(25).charCodeAt();
        const v112 = p170.charAt(28).charCodeAt();
        const v113 = v76.bRbQw(v76.myShH(v109, v110), "");
        const v114 = v76.bRbQw(v76.OtnYk(v111, v112), "");
        v101 = v114 + v113;
        if (v76.SZRII(v101, "00")) {
          v101 = "9999";
        }
        const v115 = p170.charAt(v76.VDtqG(525370, 525345)).charCodeAt();
        const v116 = v76.OtnYk(v115, v106) + "";
        v102 = v116;
      } else if (v100 == 0) {
        v101 = "3";
        v102 = "1";
      } else if (v76.wNzJz(v100, 28)) {
        v101 = "9999";
        v102 = "3";
      } else {
        v101 = "3";
        v102 = "1";
      }
    }
    v100 = parseInt(v100, v76.gzhqw(950467, 950473));
    v101 = v76.QIIgK(parseInt, v101, 10);
    v102 = parseInt(v102, v76.LcrFm(236792, 236786));
    if (!v76.LVxkp([v76.FsPEa(906689, 906689), 28, 70, v76.FdtKY(657642, 657581), 72, v76.heOTs(629309, 629364), 74, v76.agdBh(418558, 418485)].indexOf(v100), -v76.hviAx(563605, 563604))) {
      return {
        iv: false,
        pt: 0,
        pc: 3,
        ft: 2,
        mc: {},
        pl: []
      };
    }
    const v117 = JSON.parse(vRequire7.b64DecodeUnicode(v77));
    for (let v118 = 0; v118 < v117.length; v118++) {
      const v119 = v117[v118];
      const v120 = [19, 12, 7, 17, 10, v76.vWdoo(246414, 246406), v76.FsPEa(953980, 953971), v76.LcrFm(949008, 949009)];
      const v121 = v119[p170[v120[0]]];
      const v122 = v119[p170[v120[1]]];
      const v123 = v119[p170[v120[2]]];
      const v124 = v119[p170[v120[3]]];
      if (!v121 || !v122 || !v123 || !v124) {
        continue;
      }
      if (!v76.BkSCx(v121, "2") || !v76.NYgui(v122, "0") && v122 != "1") {
        continue;
      }
      const v125 = v76.bRbQw(v121 + v122 + v123, v124);
      const v126 = v119[p170[v120[4]]];
      const v127 = v119[p170[v120[v76.vWdoo(542340, 542337)]]];
      if (!v126 || !v127) {
        continue;
      }
      const v128 = v76.bRbQw(v126, v127);
      if (v76.YuzSY(v128, "12")) {
        continue;
      }
      const v129 = v119[p170[v120[v76.zBbiH(729082, 729084)]]];
      const v130 = v119[p170[v120[7]]];
      if (!v129 || !v130) {
        continue;
      }
      const v131 = v129 + v130;
      if (v128 > "31") {
        continue;
      }
      const v132 = [0, v76.YeikD(767250, 767248), 3, 5, 6, 11, 13, 14, 16, v76.gzhqw(818032, 818018), 21, 23, 24];
      if (p170.length == v76.aVBQj(874775, 874766) || p170.length == 30) {
        for (let v133 = 0; v133 < v132.length - v76.onLyT(298891, 298890); v133++) {
          let v134 = p170.charAt(v132[v133]).charCodeAt();
          let v135 = p170.charAt(v132[v133 + v76.Skxta(757867, 757866)]).charCodeAt();
          if (v135 - v134 != 1) {
            return {
              iv: false,
              pt: 0,
              pc: 3,
              ft: 2,
              mc: {},
              pl: []
            };
          }
        }
      }
      v82 = v76.bRbQw(v125, "-") + v128 + "-" + v131;
      break;
    }
    if (v84.test(v82) && v82 > v83) {
      v81 = true;
    }
    global.monitorInfo.purchaseCodeEndDate = v82;
    global.monitorInfo.purchaseCodeValid = v81 === true ? v46 : false;
    global.monitorInfo.purchaseCodeType = v100;
    global.monitorInfo.purchaseCodeProjectCount = v101 || v76.FxkqI(810583, 810580);
    let v136 = vRequire7.b64DecodeUnicode(vRequire30.PROJECT_COUNT) + "：" + v101;
    let v137 = vRequire7.b64DecodeUnicode(vRequire30.PROJECT_TYPE) + "：";
    if ([0, 28, v76.vWdoo(986924, 986986), 71, 72, v76.FsPEa(174370, 174443), 74, 75].indexOf(v100) !== -1) {
      v137 += "" + vRequire7.b64DecodeUnicode(vRequire30[v76.cCXvj + v100]);
    }
    let v138 = vRequire7.b64DecodeUnicode(vRequire30.END_DATE) + "：" + v82;
    let v139 = {};
    let v140 = [];
    let v141 = "X";
    if (v76.VnlGm(p170.length, 50)) {
      const v142 = p170.substring(30);
      const v143 = v142.split("").reverse().join("");
      const v144 = {
        B: "1",
        X: "2",
        L: "3",
        O: "4",
        M: "5",
        D: "6",
        U: "7",
        R: "8",
        Z: "9",
        P: "0"
      };
      const v145 = [2, 4, v76.IWZDm(971971, 971979), 12, 15, 18];
      const v146 = v76.bRbQw(v144[v143[v145[v76.FxkqI(713091, 713090)]]] + v144[v143[v145[2]]], v144[v143[v145[3]]]) + v144[v143[v145[4]]] + v144[v143[v145[5]]];
      v141 = v143[v145[0]];
      const v147 = [0, 1, 3, v76.vWdoo(693728, 693733), 6, 7, 9, 10, v76.hyIJh(679411, 679416), v76.hviAx(895420, 895409), 14, 16, v76.hviAx(757087, 757070), 19];
      const v148 = v76.eeFvv(v76.eeFvv(v76.qfhnH(v76.IYgWk(v76.NDdQn(v143[v147[0]] + v143[v147[1]], v143[v147[2]]), v143[v147[3]]), v143[v147[4]]) + v143[v147[5]] + v143[v147[6]] + v143[v147[7]] + v143[v147[8]], v143[v147[9]]) + v143[v147[10]], v143[v147[v76.wgNYd(583231, 583220)]]) + v143[v147[12]] + v143[v147[13]];
      const v149 = v148.toLowerCase();
      let v150 = v76.JiyZr([9, 8, 7, 6, v76.Evkcx(921104, 921109)].join(""), 1);
      let v151 = v146 === v150 ? "无上限" : v146 * v76.onLyT(451681, 451680) + "万/天";
      const v152 = vRequire7.b64DecodeUnicode(vRequire30["PRODUCT_LIMIT_TYPE_" + v141]) + "：" + v151;
      v140 = [v137, v136, v138, v152];
      const v153 = await C2.getMachineFingerprint();
      const v154 = v149 === v153.monitor.machineId1 || v149 === v153.monitor.machineId2;
      v139 = {
        iv: v154,
        limitType: v141,
        limitValue: v146 * 1
      };
    } else {
      const v155 = vRequire7.b64DecodeUnicode(vRequire30["PRODUCT_LIMIT_TYPE_" + v141]) + "：无上限";
      v140 = [v137, v136, v138, v155];
      v139 = {
        iv: true,
        limitType: v141,
        limitValue: [9, v76.xlHNQ(145639, 145647), 7, 6, 5].join("") * 1
      };
    }
    global.monitorInfo.machineCodeInfo = v139;
    return {
      iv: v81,
      pt: v100,
      pc: v101,
      ft: v102,
      mc: v139,
      pl: v140
    };
  }
  static async consoleLogo() {
    const v156 = {
      ULVBR: " ╚███╔███╔╝ ███████╗ ██████╔╝ ██║      ╚██████╔╝ ██║ ╚████║ ██║ ╚████║    ██║"
    };
    console.warn(" ██╗    ██╗ ███████╗ ██████╗  ███████╗ ██╗   ██╗ ███╗   ██╗ ███╗   ██╗ ██╗   ██╗".cyan);
    console.warn(" ██║    ██║ ██╔════╝ ██╔══██╗ ██╔════╝ ██║   ██║ ████╗  ██║ ████╗  ██║ ╚██╗ ██╔╝".cyan);
    console.warn(" ██║ █╗ ██║ █████╗   ██████╔╝ █████╗   ██║   ██║ ██╔██╗ ██║ ██╔██╗ ██║  ╚████╔╝".cyan);
    console.warn(" ██║███╗██║ ██╔══╝   ██╔══██╗ ██╔══╝   ██║   ██║ ██║╚██╗██║ ██║╚██╗██║   ╚██╔╝".cyan);
    console.warn(v156.ULVBR.cyan);
    console.warn("  ╚══╝╚══╝  ╚══════╝ ╚═════╝  ╚═╝       ╚═════╝  ╚═╝  ╚═══╝ ╚═╝  ╚═══╝    ╚═╝".cyan);
    console.warn(" ");
    console.warn(" ");
    console.warn(("" + vRequire7.b64DecodeUnicode(vRequire30.SERVER_STARTING)).yellow);
    console.warn("");
  }
  static async consoleInfo(p249) {
    const v157 = {
      mOQto: function (p250, p251) {
        return p250 + p251;
      },
      jStrd: "npm run restart",
      OrRmN: "                                                             ║",
      gRDaT: function (p252, p253) {
        return p252 + p253;
      },
      yMIbF: function (p254, p255) {
        return p254 + p255;
      },
      TmpLh: "                            ║",
      azhZy: function (p256, p257) {
        return p256 + p257;
      },
      gDleW: function (p258, p259) {
        return p258 + p259;
      },
      KYvpe: "                                                          ║",
      OExgI: function (p260, p261) {
        return p260 + p261;
      }
    };
    const v158 = "6|11|5|13|2|9|7|14|0|10|4|15|3|1|8|12".split("|");
    let v159 = 0;
    while (true) {
      switch (v158[v159++]) {
        case "0":
          console.warn("║".cyan + (" " + vRequire7.b64DecodeUnicode(vRequire30.STARTING_MSG5)), v157.mOQto(v157.jStrd.cyan, "                                                      ║".cyan));
          continue;
        case "1":
          console.warn("║                                                                                 ║".cyan);
          continue;
        case "2":
          console.warn("║                                                                                 ║".cyan);
          continue;
        case "3":
          console.warn("║".cyan + (" " + vRequire7.b64DecodeUnicode(vRequire30.STARTING_MSG8)), "pm2 list".cyan + v157.OrRmN.cyan);
          continue;
        case "4":
          console.warn("║                                                                                 ║".cyan);
          continue;
        case "5":
          console.warn("║                                                                                 ║".cyan);
          continue;
        case "6":
          if (p249) {
            console.warn("启动 " + p249 + " 模式...");
          }
          continue;
        case "7":
          console.warn("║                                                                                 ║".cyan);
          continue;
        case "8":
          console.warn("╚═════════════════════════════════════════════════════════════════════════════════╝".cyan);
          continue;
        case "9":
          console.warn(v157.gRDaT("║".cyan, " " + vRequire7.b64DecodeUnicode(vRequire30.STARTING_MSG1)), v157.gRDaT((v157.yMIbF("http://", accountInfo.centerAssetsDomain) + "/wf_center/main ").blue.underline, v157.TmpLh.cyan));
          continue;
        case "10":
          console.warn("║".cyan + (" " + vRequire7.b64DecodeUnicode(vRequire30.STARTING_MSG6)), "pm2 stop webfunny | pm2 delete webfunny".cyan + "                        ║".cyan);
          continue;
        case "11":
          console.warn(v157.azhZy("║".cyan, (" 3. Webfunny监控" + vRequire7.b64DecodeUnicode(vRequire30.SERVER_START_SUCCESS) + "                                                  ").yellow) + "║".cyan);
          continue;
        case "12":
          console.warn(" ");
          continue;
        case "13":
          console.warn(v157.gDleW("║".cyan, (" " + vRequire7.b64DecodeUnicode(vRequire30.SERVER_WECHAT)).white) + "                                                          ║".cyan);
          continue;
        case "14":
          console.warn("║".cyan + (" " + vRequire7.b64DecodeUnicode(vRequire30.STARTING_MSG4)), "npm run prd".cyan + v157.KYvpe.cyan);
          continue;
        case "15":
          console.warn(v157.OExgI("║".cyan + (" " + vRequire7.b64DecodeUnicode(vRequire30.STARTING_MSG7)).cyan, "                                        ║".cyan));
          continue;
      }
      break;
    }
  }
  static async ["checkPurchase"](p262, p263) {
    const v160 = {
      sodgB: function (p264, p265) {
        return p264 ^ p265;
      },
      Itvub: "not get",
      kBCLH: function (p266) {
        return p266();
      }
    };
    const v161 = ("" + vRequire7.b64DecodeUnicode(vRequire30.VALID_MSG0)).red;
    const v162 = ("" + vRequire7.b64DecodeUnicode(vRequire30.VALID_MSG1)).red;
    const v163 = ("" + vRequire7.b64DecodeUnicode(vRequire30.VALID_MSG)).green;
    const v164 = [];
    const v165 = [];
    let v166 = accountInfo.purchaseCode ? accountInfo.purchaseCode : v164[0] ? v164[0].configValue : "";
    let v167 = accountInfo.secretCode ? accountInfo.secretCode : v165[0] ? v165[v160.sodgB(545072, 545072)].configValue : "";
    const v168 = await C2.decryptPurchaseCode(accountInfo.purchaseCode, accountInfo.secretCode);
    const {
      pl: _0x31267c
    } = v168;
    _0x31267c.forEach(p267 => {
      console.warn(p267.cyan);
    });
    if (v168.iv) {
      v166 = accountInfo.purchaseCode;
      v167 = accountInfo.secretCode;
    }
    let v169 = false;
    await vRequire7.postJson(vF14 + "/config/isBlacklist", {
      cdkey: v166,
      secretCdKey: v167,
      webfunnyVersion: vF25
    }).then(p268 => {
      v169 = p268.data;
    }).catch(p269 => {
      v169 = false;
    });
    if (v169 === true) {
      setTimeout(function () {
        console.warn(" ");
        console.warn(v161);
        console.warn(v162);
        console.warn(" ");
        console.warn(v163);
        vRequire13.printError(v163);
      }, 8000);
      vRequire7.postPoint("http://monitor.webfunny.cn/tracker/upEvent", {
        data: JSON.stringify({
          pointId: "10",
          projectId: "event1029",
          yong_hu_id: vRequire29.default() || "not get",
          shouQuanMaId: vRequire7.md5(v166),
          shouQuanMaLeiXing: "0",
          shiFouDaoQi: 1,
          shiFouYouXiao: 2,
          shiFouHeiMingDan: 2
        })
      }).then(p270 => {}).catch(p271 => {});
      global.monitorInfo.purchaseCodeValid = false;
      p263();
      return;
    }
    const {
      pt: _0x3efb73,
      iv: _0x2a981e,
      mc: _0x944dba
    } = v168;
    if (_0x2a981e == true && _0x944dba.iv == true) {
      vRequire7.postPoint("http://monitor.webfunny.cn/tracker/upEvent", {
        data: JSON.stringify({
          pointId: "10",
          projectId: "event1029",
          yong_hu_id: vRequire29.default() || v160.Itvub,
          shouQuanMaId: vRequire7.md5(v166),
          shouQuanMaLeiXing: _0x3efb73 + "",
          shiFouDaoQi: 1,
          shiFouYouXiao: 1,
          shiFouHeiMingDan: 1
        })
      }).then(() => {}).catch(() => {});
      const v170 = ip.address();
      const v171 = new Date().getTime();
      vRequire7.postJson(vF14 + "/config/memberActiveDeploy", {
        cdkey: v166,
        ip: v170,
        webfunnyVersion: vF25,
        happenTime: v171
      }).then(() => {}).catch(() => {});
      global.monitorInfo.purchaseCodeValid = v46;
      global.monitorInfo.productType = _0x3efb73;
      v160.kBCLH(p262);
    } else {
      setTimeout(() => {
        console.warn(" ");
        console.warn(v161);
        console.warn(v162);
        console.warn(" ");
        console.warn(v163);
        vRequire13.printError(v163);
      }, 8000);
      v160.kBCLH(p263);
      vRequire7.postPoint("http://monitor.webfunny.cn/tracker/upEvent", {
        data: JSON.stringify({
          pointId: "10",
          projectId: "event1029",
          yong_hu_id: vRequire29.default() || "not get",
          shouQuanMaId: vRequire7.md5(v166),
          shouQuanMaLeiXing: _0x3efb73 + "",
          shiFouDaoQi: 2,
          shiFouYouXiao: 2,
          shiFouHeiMingDan: 1
        })
      }).then(p272 => {}).catch(p273 => {});
    }
  }
  static async restartServer() {
    const v172 = {
      NvWFU: "npm run restart &"
    };
    console.warn("即将执行重启命令... 如果15s后未重启，请手动执行：npm run restart");
    vRequire28.exec(v172.NvWFU, function (p274, p275, p276) {
      if (p274) {
        vRequire13.printError("重启命令失败error：", p274);
        vRequire13.printError("重启命令失败stdout：", p275);
        vRequire13.printError("重启命令失败stderr：", p276);
      }
    });
  }
  static async ["saveLogCountInMemory"](p277, p278) {
    global.monitorInfo.logCountInMinute += p278;
    if (!global.monitorInfo.projectLogCountList) {
      global.monitorInfo.projectLogCountList = {};
    }
    const v173 = global.monitorInfo.projectLogCountList && global.monitorInfo.projectLogCountList[p277] ? global.monitorInfo.projectLogCountList[p277] : 0;
    global.monitorInfo.projectLogCountList[p277] = v173 + p278;
  }
  static simpleHash(p279) {
    const v174 = {
      whatp: function (p280, p281) {
        return p280 ^ p281;
      }
    };
    let v175 = 0;
    try {
      for (let v176 = 0; v176 < p279.length; v176++) {
        const v177 = p279.charCodeAt(v176);
        v175 = (v175 << v174.whatp(944715, 944718)) - v175 + v177;
        v175 |= 0;
      }
      return v175;
    } catch (_0x5a1c3f) {
      console.log(f27(4097, "rnhn", 5550, 5929, 3813), _0x5a1c3f);
    }
    function f27(p282, p283, p284, p285, p286) {
      return f15(p286 - -254, p283);
    }
    return v175;
  }
  static ["verifySignature"](p287, p288) {
    if (!p288) {
      return false;
    }
    const v178 = global.monitorInfo.monitorSecretList;
    const v179 = p287.header["wf-signature"] || "";
    const {
      webMonitorId: _0x5e434a
    } = p288;
    let v180 = [];
    for (let v181 = 0; v181 < v178.length; v181++) {
      const v182 = v178[v181];
      const v183 = v182 + ":" + _0x5e434a;
      const v184 = C2.simpleHash(v183).toString(16);
      v180.push(v184);
    }
    const v185 = v180.find(p289 => p289 === v179);
    if (v185) {
      return true;
    }
    return false;
  }
  static encryptSignature(p295) {
    const v186 = {
      jMMIf: function (p296, p297) {
        return p296 ^ p297;
      },
      wohaJ: function (p298, p299) {
        return p298 ^ p299;
      },
      GTSQf: function (p300, p301) {
        return p300 ^ p301;
      }
    };
    if (!p295) {
      C32.setMonitorSecretList();
      return "";
    }
    const v187 = p295.split("").reverse();
    const v188 = v187[2];
    v187[2] = v187[v186.jMMIf(342931, 342918)];
    v187[21] = v188;
    const v189 = v187[5];
    v187[5] = v187[v186.wohaJ(467205, 467223)];
    v187[v186.jMMIf(835392, 835410)] = v189;
    const v190 = v187[v186.jMMIf(123739, 123730)];
    v187[9] = v187[15];
    v187[15] = v190;
    const v191 = v187[12];
    v187[v186.GTSQf(241169, 241181)] = v187[31];
    v187[31] = v191;
    const v192 = v187[16];
    v187[16] = v187[28];
    v187[28] = v192;
    const v193 = v187[20];
    v187[20] = v187[25];
    v187[25] = v193;
    return v187.join("");
  }
}
class C3 {
  static async ["create"](p302) {
    const v194 = {
      bmbPw: function (p303, p304) {
        return p303 ^ p304;
      }
    };
    const v195 = p302.request.body;
    const v196 = JSON.parse(v195.data);
    if (req.happenTime) {
      let v197 = await HttpErrorInfoModel.createHttpErrorInfo(v196);
      let v198 = await HttpErrorInfoModel.getHttpErrorInfoDetail(v197.id);
      p302.response.status = v194.bmbPw(893998, 894182);
      p302.body = vRequire14.SUCCESS_200("创建信息成功", v198);
    } else {
      p302.response.status = 412;
      p302.body = vRequire14.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async getHttpErrorInfoList(p305) {
    const v199 = {
      HCGvR: function (p306, p307) {
        return p306 ^ p307;
      },
      lMKBt: "查询信息列表成功！"
    };
    let v200 = p305.request.body;
    if (v200) {
      const v201 = await HttpErrorInfoModel.getHttpErrorInfoList();
      p305.response.status = v199.HCGvR(184642, 184714);
      p305.body = vRequire14.SUCCESS_200(v199.lMKBt, v201);
    } else {
      p305.response.status = 412;
      p305.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
  static async ["detail"](p308) {
    const v202 = {
      igtZw: "查询成功！",
      mpwuy: function (p309, p310) {
        return p309 ^ p310;
      }
    };
    let v203 = p308.params.id;
    if (v203) {
      let v204 = await HttpErrorInfoModel.getHttpErrorInfoDetail(v203);
      p308.response.status = 200;
      p308.body = vRequire14.SUCCESS_200(v202.igtZw, v204);
    } else {
      p308.response.status = v202.mpwuy(749336, 749188);
      p308.body = vRequire14.ERROR_412("信息ID必须传");
    }
  }
  static async ["delete"](p311) {
    const v205 = {
      RVOyo: function (p312, p313) {
        return p312(p313);
      },
      SmDBy: "删除信息成功！"
    };
    let v206 = p311.params.id;
    if (v206 && !v205.RVOyo(isNaN, v206)) {
      await HttpErrorInfoModel.deleteHttpErrorInfo(v206);
      p311.response.status = 200;
      p311.body = vRequire14.SUCCESS_200(v205.SmDBy);
    } else {
      p311.response.status = 412;
      p311.body = vRequire14.ERROR_412("信息ID必须传！");
    }
  }
  static async ["update"](p314) {
    const v207 = {
      yPIsx: function (p315, p316) {
        return p315 ^ p316;
      }
    };
    let v208 = p314.request.body;
    let v209 = p314.params.id;
    if (v208) {
      await HttpErrorInfoModel.updateHttpErrorInfo(v209, v208);
      let v210 = await HttpErrorInfoModel.getHttpErrorInfoDetail(v209);
      p314.response.status = 200;
      p314.body = vRequire14.SUCCESS_200("更新信息成功！", v210);
    } else {
      p314.response.status = v207.yPIsx(613717, 613577);
      p314.body = vRequire14.ERROR_412("更新信息失败！");
    }
  }
  static async ["getHttpErrorInfoListByHour"](p317) {
    const v211 = {
      HEKCv: function (p318, p319) {
        return p318 ^ p319;
      }
    };
    const v212 = vRequire7.parseQs(p317.request.url);
    v212.infoType = UPLOAD_TYPE.HTTP_ERROR;
    let v213 = [];
    await HttpErrorInfoModel.getHttpErrorInfoListByHour(v212).then(p320 => {
      v213 = p320;
      v213.forEach(p321 => {
        p321.hour = p321.hour.substring(5);
      });
    });
    let v214 = [];
    await HttpErrorInfoModel.getHttpErrorInfoListSevenDayAgoByHour(v212).then(p322 => {
      v214 = p322;
      v214.forEach(p323 => {
        p323.hour = p323.hour.substring(5);
      });
    });
    p317.response.status = v211.HEKCv(178308, 178252);
    p317.body = vRequire14.SUCCESS_200("查询信息列表成功！", {
      today: v213,
      seven: v214
    });
  }
  static async ["getHttpErrorCountByDay"](p324) {
    const v215 = {
      kyqMb: function (p325, p326) {
        return p325 ^ p326;
      },
      XkRgg: function (p327, p328) {
        return p327 * p328;
      },
      HALqk: function (p329, p330) {
        return p329 ^ p330;
      }
    };
    const v216 = vRequire7.parseQs(p324.request.url);
    v216.infoType = UPLOAD_TYPE.HTTP_ERROR;
    const {
      scope: _0x462eb0,
      endDate: _0x301b9b,
      webMonitorId: _0x4f1e0a,
      startDate: _0x3f2567
    } = v216;
    const v217 = vRequire7.addDays(0);
    const v218 = {
      data: [],
      perData: []
    };
    const v219 = await CustomerPVModel.uvCountForMonthByStatus(_0x4f1e0a, _0x3f2567, "");
    const v220 = await HttpErrorInfoModel.getHttpErrorCountByDay(v216);
    const v221 = [];
    v219.forEach(p331 => {
      const {
        day: _0x4a6521,
        count: _0x1e84ef
      } = p331;
      const v222 = v220.filter(p332 => p332.day === _0x4a6521);
      if (v222 && v222.length) {
        v221.push({
          day: v222[v215.kyqMb(463317, 463317)].day,
          count: v222[0].uvCount * 1 === v215.kyqMb(215934, 215934) ? 0 : vRequire7.toFixed(v215.XkRgg(v222[v215.kyqMb(284635, 284635)].uvCount / _0x1e84ef, v215.HALqk(999533, 999433)), 2)
        });
      }
    });
    v218.data = vRequire7.handleDateResult(v220, _0x462eb0);
    v218.perData = vRequire7.handleDateResult(v221, _0x462eb0);
    p324.response.status = 200;
    p324.body = vRequire14.SUCCESS_200("查询信息列表成功！", v218);
  }
  static async getHttpErrorListByDay(p333) {
    const v223 = {
      ODlwi: function (p334, p335) {
        return p334 ^ p335;
      },
      moryn: function (p336, p337) {
        return p336 ^ p337;
      },
      UuKEk: function (p338, p339) {
        return p338 === p339;
      },
      feEyr: "查询信息列表成功！"
    };
    const v224 = JSON.parse(p333.request.body);
    let v225 = null;
    await HttpErrorInfoModel.getHttpErrorInfoListByDay(v224).then(p340 => {
      v225 = p340;
    });
    for (let v226 = 0; v226 < v225.length; v226++) {
      if (v223.UuKEk(v225[v226].count, 0)) {
        continue;
      }
      await HttpErrorInfoModel.getHttpErrorLatestTime(v225[v226].simpleHttpUrl, v224).then(p341 => {
        if (!p341[0]) {
          return;
        }
        v225[v226].createdAt = p341[v223.ODlwi(331193, 331193)].createdAt;
        v225[v226].happenTime = p341[v223.moryn(337386, 337386)].happenTime;
      });
      await HttpErrorInfoModel.getStatusCountBySimpleHttpUrl(v225[v226].simpleHttpUrl, v224).then(p342 => {
        if (!p342) {
          return;
        }
        v225[v226].statusArray = p342;
      });
      await HttpErrorInfoModel.getCustomerCountForHttpUrl(v225[v226].simpleHttpUrl, v224).then(p343 => {
        if (!p343[0]) {
          return;
        }
        v225[v226].customerCount = p343[0].count;
      });
    }
    p333.response.status = 200;
    p333.body = vRequire14.SUCCESS_200(v223.feEyr, v225);
  }
  static async ["getHttpErrorListByUrl"](p344) {
    const v227 = {
      naRNy: "查询信息列表成功！"
    };
    const v228 = JSON.parse(p344.request.body);
    let v229 = [];
    await HttpErrorInfoModel.getHttpErrorListByUrl(v228).then(p345 => {
      v229 = p345;
    });
    p344.response.status = 200;
    p344.body = vRequire14.SUCCESS_200(v227.naRNy, v229);
  }
  static async ["getStatusListGroupByErrorCode"](p346) {
    const v230 = JSON.parse(p346.request.body);
    let v231 = [];
    await HttpErrorInfoModel.getStatusListGroupByErrorCode(v230).then(p347 => {
      v231 = p347;
    });
    p346.response.status = 200;
    p346.body = vRequire14.SUCCESS_200("查询信息列表成功！", v231);
  }
  static async ["getHttpErrorSort"](p348) {
    const v232 = {
      GNJqL: function (p349, p350) {
        return p349 === p350;
      }
    };
    const v233 = JSON.parse(p348.request.body);
    const {
      userId: _0x2c473a,
      webMonitorId: _0x2fb0b3
    } = v233;
    const v234 = [];
    if (_0x2c473a) {
      const v235 = await HttpErrorHandleListModel.getHttpErrorHandleListListByUserId(_0x2c473a, _0x2fb0b3);
      v235.forEach(p351 => {
        v234.push(p351.simpleHttpUrl);
      });
      if (v232.GNJqL(v235.length, 0)) {
        p348.response.status = 200;
        p348.body = vRequire14.SUCCESS_200("查询信息列表成功！", []);
        return;
      }
    }
    v233.simpleHttpUrlArray = v234;
    let v236 = [];
    await HttpErrorInfoModel.getHttpErrorSort(v233).then(p352 => {
      v236 = p352;
    });
    p348.response.status = 200;
    p348.body = vRequire14.SUCCESS_200("查询信息列表成功！", v236);
  }
  static async ["getHttpErrorSortInfo"](p353) {
    const v237 = {
      deaBW: function (p354, p355) {
        return p354 ^ p355;
      }
    };
    const v238 = JSON.parse(p353.request.body);
    const {
      simpleHttpUrl: _0x542a6a,
      recentMinute: _0x1f2e20
    } = v238;
    const v239 = {};
    await HttpErrorInfoModel.getHttpErrorFirstTime(v238).then(p356 => {
      v239.firstHappenTime = p356[0] ? p356[0].happenTime : "";
    });
    await HttpErrorInfoModel.getHttpErrorLatestTime(v238).then(p357 => {
      v239.lastHappenTime = p357[0] ? p357[v237.deaBW(981713, 981713)].happenTime : "";
    });
    await HttpErrorInfoModel.getHttpErrorAffectCount(v238).then(p358 => {
      v239.customerCount = p358[0].count;
    });
    await HttpErrorHandleListModel.getHttpErrorHandleListBySimpleHttpUrl(_0x542a6a, v238.webMonitorId).then(p359 => {
      v239.handleInfo = p359[0] || {};
    });
    await HttpErrorInfoModel.getHttpErrorCountByStatus(v238).then(p360 => {
      v239.statusInfo = p360;
    });
    if (!_0x1f2e20) {
      await HttpErrorInfoModel.getHttpErrorCountByRecentMinute({
        minuteCount: 30,
        ...v238
      }).then(p361 => {
        v239.trendData = p361;
      });
    }
    p353.response.status = 200;
    p353.body = vRequire14.SUCCESS_200("查询信息列表成功！", v239);
  }
  static async getHttpErrorCountByVersion(p362) {
    const v240 = {
      wNTXg: "查询信息列表成功！"
    };
    const v241 = JSON.parse(p362.request.body);
    await HttpErrorInfoModel.getHttpErrorCountByVersion(v241).then(p363 => {
      p362.response.status = 200;
      p362.body = vRequire14.SUCCESS_200(v240.wNTXg, p363);
    });
  }
  static async getHttpErrorVersionSortInfo(p364) {
    const v242 = {
      YfpVf: function (p365, p366) {
        return p365 ^ p366;
      },
      iLxnD: "desc",
      yFWJh: "查询信息列表成功！"
    };
    const v243 = JSON.parse(p364.request.body);
    const v244 = {};
    await HttpErrorInfoModel.getHttpErrorVersionByTime(v243, "asc").then(p367 => {
      v244.firstHappenTime = p367[0] ? p367[0].happenTime : "";
    });
    await HttpErrorInfoModel.getHttpErrorVersionByTime(v243, v242.iLxnD).then(p368 => {
      v244.lastHappenTime = p368[0] ? p368[v242.YfpVf(129496, 129496)].happenTime : "";
    });
    p364.response.status = 200;
    p364.body = vRequire14.SUCCESS_200(v242.yFWJh, v244);
  }
  static async getErrorCodeForGroup(p369) {
    const {
      webMonitorId: _0x5093f1,
      timeSize: _0x46ec31
    } = JSON.parse(p369.request.body);
    const v245 = await HttpErrorInfoModel.getErrorCodeForGroup(_0x5093f1, 0 - _0x46ec31);
    p369.response.status = 200;
    p369.body = vRequire14.SUCCESS_200("success", v245);
  }
}
class C4 {
  static async create(p370) {
    const v246 = {
      huKpt: "yyyy-MM-dd hh:mm:ss",
      bpnzn: function (p371, p372) {
        return p371 ^ p372;
      },
      oPJEn: function (p373, p374) {
        return p373 ^ p374;
      },
      wtoJN: function (p375, p376) {
        return p375 ^ p376;
      },
      gteOY: "错误分配通知"
    };
    const v247 = p370.request.body;
    let v248 = JSON.parse(v247);
    v248.handleStartDate = new Date().Format(v246.huKpt);
    const v249 = await HttpErrorHandleListModel.getHttpErrorHandleListBySimpleHttpUrl(v248.simpleHttpUrl, v248.webMonitorId);
    if (v249.length) {
      const v250 = v249[0];
      const v251 = Object.assign(v250, v248);
      await HttpErrorHandleListModel.updateHttpErrorHandleList(v250.dataId, v251);
      p370.response.status = v246.bpnzn(971239, 971055);
      p370.body = vRequire14.SUCCESS_200("创建信息成功", v249);
    } else if (v248.simpleHttpUrl && v248.webMonitorId) {
      v248.errorStatus = 0;
      let v252 = await HttpErrorHandleListModel.createHttpErrorHandleList(v248);
      let v253 = await HttpErrorHandleListModel.getHttpErrorHandleListDetail(v252.id);
      p370.response.status = v246.oPJEn(552097, 552041);
      p370.body = vRequire14.SUCCESS_200("创建信息成功", v253);
    } else {
      p370.response.status = 412;
      p370.body = vRequire14.ERROR_412("创建信息失败，请求参数不能为空！");
    }
    const v254 = await ProjectModel.getProjectSimpleDetail(v248.webMonitorId);
    if (v254 && v254.length) {
      const {
        projectName: _0x2b8b5e
      } = v254[v246.wtoJN(738576, 738576)];
      const v255 = JSON.stringify(["您好，刚刚收到了一条来自【官网 " + _0x2b8b5e + "】的错误信息，请及时处理！"]);
      MessageModel.createMessage({
        userId: v248.handleMan,
        title: v246.gteOY,
        content: v255,
        type: "sys",
        isRead: 0,
        link: "http://" + accountInfo.localAssetsDomain + "/webfunny/jsError.html?activeTab=4"
      });
    }
  }
  static async getHttpErrorHandleListList(p377) {
    const v256 = JSON.parse(p377.request.body);
    const {
      webMonitorId: _0x2ff506
    } = v256;
    if (req) {
      const v257 = await HttpErrorHandleListModel.getHttpErrorHandleListList(_0x2ff506);
      p377.response.status = 200;
      p377.body = vRequire14.SUCCESS_200("查询信息列表成功！", v257);
    } else {
      p377.response.status = 412;
      p377.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
  static async ignoreErrorByApplication(p378) {
    const v258 = {
      pdraI: function (p379, p380) {
        return p379 ^ p380;
      }
    };
    const v259 = vRequire8.parseQs(p378.request.url);
    if (v259) {
      const v260 = await HttpErrorHandleListModel.ignoreErrorByApplication(v259);
      p378.response.status = 200;
      p378.body = vRequire14.SUCCESS_200("查询信息列表成功！", v260);
    } else {
      p378.response.status = v258.pdraI(395806, 396162);
      p378.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
  static async ["delete"](p381) {
    const v261 = {
      IBuaL: function (p382, p383) {
        return p382 ^ p383;
      },
      alMaI: "信息ID必须传！"
    };
    let v262 = p381.params.id;
    if (v262 && !isNaN(v262)) {
      await HttpErrorHandleListModel.deleteHttpErrorHandleList(v262);
      p381.response.status = v261.IBuaL(213793, 213993);
      p381.body = vRequire14.SUCCESS_200("删除信息成功！");
    } else {
      p381.response.status = v261.IBuaL(604781, 605169);
      p381.body = vRequire14.ERROR_412(v261.alMaI);
    }
  }
  static async update(p384) {
    let v263 = p384.request.body;
    let v264 = p384.params.id;
    if (v263) {
      await HttpErrorHandleListModel.updateHttpErrorHandleList(v264, v263);
      let v265 = await HttpErrorHandleListModel.getHttpErrorHandleListDetail(v264);
      p384.response.status = 200;
      p384.body = vRequire14.SUCCESS_200("更新信息成功！", v265);
    } else {
      p384.response.status = 412;
      p384.body = vRequire14.ERROR_412("更新信息失败！");
    }
  }
  static async ["resolveHttpErrorInHandleList"](p385) {
    const v266 = {
      jYLri: function (p386, p387) {
        return p386 ^ p387;
      }
    };
    const v267 = p385.request.body;
    let v268 = JSON.parse(v267);
    const {
      simpleHttpUrlArray: _0x4539aa,
      webMonitorId: _0x9831fb,
      errorStatus: _0x5b9664
    } = v268;
    _0x4539aa.forEach(async p388 => {
      let v269 = await HttpErrorHandleListModel.getHttpErrorHandleListBySimpleHttpUrl(p388, _0x9831fb);
      if (v269 && v269.length) {
        const v270 = v269[0];
        const v271 = Object.assign(v270, {
          simpleHttpUrl: p388,
          errorStatus: _0x5b9664,
          webMonitorId: _0x9831fb
        });
        HttpErrorHandleListModel.updateHttpErrorHandleList(v270.dataId, v271);
      } else {
        HttpErrorHandleListModel.resolveHttpErrorInHandleList(p388, _0x9831fb, _0x5b9664);
      }
    });
    p385.response.status = v266.jYLri(261171, 261371);
    p385.body = vRequire14.SUCCESS_200("操作成功", 0);
  }
  static async getSolveStatusBySimpleHttpUrl(p389) {
    const v272 = JSON.parse(p389.request.body);
    const {
      simpleHttpUrl: _0x36c07b,
      webMonitorId: _0x45f591
    } = v272;
    const v273 = await HttpErrorHandleListModel.getSolveStatusBySimpleHttpUrl(_0x36c07b, _0x45f591);
    p389.response.status = 200;
    p389.body = vRequire14.SUCCESS_200("操作成功", v273.errorStatus);
  }
}
class C5 {
  static async ["create"](p390) {
    const v274 = {
      Qhceb: function (p391, p392) {
        return p391 ^ p392;
      }
    };
    const v275 = p390.request.body;
    const v276 = JSON.parse(v275.data);
    if (req.happenTime) {
      let v277 = await HttpLogInfoModel.createHttpLogInfo(v276);
      let v278 = await HttpLogInfoModel.getHttpLogInfoDetail(v277.id);
      p390.response.status = 200;
      p390.body = vRequire14.SUCCESS_200("创建信息成功", v278);
    } else {
      p390.response.status = v274.Qhceb(998014, 998370);
      p390.body = vRequire14.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async getHttpLogInfoList(p393) {
    const v279 = {
      DDHoP: "查询信息列表成功！",
      FeESC: function (p394, p395) {
        return p394 ^ p395;
      }
    };
    let v280 = p393.request.body;
    if (v280) {
      const v281 = await HttpLogInfoModel.getHttpLogInfoList();
      p393.response.status = 200;
      p393.body = vRequire14.SUCCESS_200(v279.DDHoP, v281);
    } else {
      p393.response.status = v279.FeESC(877836, 877712);
      p393.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
}
class C6 {
  static async create(p396) {
    const v282 = {
      nuBoa: "创建信息成功",
      gOhDg: function (p397, p398) {
        return p397 ^ p398;
      }
    };
    const v283 = p396.request.body;
    const v284 = JSON.parse(v283.data);
    if (req.happenTime) {
      let v285 = await HttpLogInfoModel.createHttpLogInfo(v284);
      let v286 = await HttpLogInfoModel.getHttpLogInfoDetail(v285.id);
      p396.response.status = 200;
      p396.body = vRequire14.SUCCESS_200(v282.nuBoa, v286);
    } else {
      p396.response.status = v282.gOhDg(910456, 910820);
      p396.body = vRequire14.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async ["getHttpLogInfoList"](p399) {
    let v287 = p399.request.body;
    if (v287) {
      const v288 = await HttpLogInfoModel.getHttpLogInfoList();
      p399.response.status = 200;
      p399.body = vRequire14.SUCCESS_200("查询信息列表成功！", v288);
    } else {
      p399.response.status = 412;
      p399.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
  static async detail(p400) {
    let v289 = p400.params.id;
    if (v289) {
      let v290 = await HttpLogInfoModel.getHttpLogInfoDetail(v289);
      p400.response.status = 200;
      p400.body = vRequire14.SUCCESS_200("查询成功！", v290);
    } else {
      p400.response.status = 412;
      p400.body = vRequire14.ERROR_412("信息ID必须传");
    }
  }
  static async ["delete"](p401) {
    let v291 = p401.params.id;
    if (v291 && !isNaN(v291)) {
      await HttpLogInfoModel.deleteHttpLogInfo(v291);
      p401.response.status = 200;
      p401.body = vRequire14.SUCCESS_200("删除信息成功！");
    } else {
      p401.response.status = 412;
      p401.body = vRequire14.ERROR_412("信息ID必须传！");
    }
  }
  static async update(p402) {
    const v292 = {
      RgnrU: function (p403, p404) {
        return p403 ^ p404;
      },
      OwXdM: "更新信息成功！",
      eIXpc: "更新信息失败！"
    };
    let v293 = p402.request.body;
    let v294 = p402.params.id;
    if (v293) {
      await HttpLogInfoModel.updateHttpLogInfo(v294, v293);
      let v295 = await HttpLogInfoModel.getHttpLogInfoDetail(v294);
      p402.response.status = v292.RgnrU(822093, 822149);
      p402.body = vRequire14.SUCCESS_200(v292.OwXdM, v295);
    } else {
      p402.response.status = 412;
      p402.body = vRequire14.ERROR_412(v292.eIXpc);
    }
  }
  static async ["getHttpErrorInfoListByHour"](p405) {
    const v296 = {
      OFoDP: "查询信息列表成功！"
    };
    const v297 = vRequire7.parseQs(p405.request.url);
    let v298 = [];
    await HttpLogInfoModel.getHttpErrorInfoListByHour(v297).then(p406 => {
      v298 = p406;
    });
    let v299 = [];
    await HttpLogInfoModel.getHttpErrorInfoListSevenDayAgoByHour(v297).then(p407 => {
      v299 = p407;
    });
    p405.response.status = 200;
    p405.body = vRequire14.SUCCESS_200(v296.OFoDP, {
      today: v298,
      seven: v299
    });
  }
  static async getHttpErrorCountByDay(p408) {
    const v300 = {
      WWdFL: function (p409, p410) {
        return p409 ^ p410;
      },
      bPSkw: "查询信息列表失败！"
    };
    const v301 = vRequire7.parseQs(p408.request.url);
    await HttpLogInfoModel.getHttpErrorCountByDay(v301).then(p411 => {
      if (p411) {
        p408.response.status = v300.WWdFL(232673, 232489);
        p408.body = vRequire14.SUCCESS_200("查询信息列表成功！", p411);
      } else {
        p408.response.status = 412;
        p408.body = vRequire14.ERROR_412(v300.bPSkw);
      }
    });
  }
  static async getHttpErrorListByDay(p412) {
    const v302 = {
      ALzaf: function (p413, p414) {
        return p413 < p414;
      },
      GSuPO: "查询信息列表成功！"
    };
    const v303 = JSON.parse(p412.request.body);
    let v304 = null;
    await HttpLogInfoModel.getResourceLoadInfoListByDay(v303).then(p415 => {
      v304 = p415;
    });
    for (let v305 = 0; v302.ALzaf(v305, v304.length); v305++) {
      await HttpLogInfoModel.getResourceErrorLatestTime(v304[v305].sourceUrl, v303).then(p416 => {
        v304[v305].createdAt = p416[0].createdAt;
        v304[v305].happenTime = p416[0].happenTime;
      });
      await HttpLogInfoModel.getPageCountByResourceError(v304[v305].sourceUrl, v303).then(p417 => {
        v304[v305].pageCount = p417[0].pageCount;
      });
    }
    p412.response.status = 200;
    p412.body = vRequire14.SUCCESS_200(v302.GSuPO, v304);
  }
  static async getHttpCountByMinute(p418) {
    const v306 = {
      fARSl: function (p419, p420) {
        return p419 ^ p420;
      }
    };
    let v307 = p418.request.body;
    const v308 = JSON.parse(v307);
    let v309 = [];
    await HttpLogInfoModel.getHttpCountByMinute(v308).then(p421 => {
      v309 = p421;
    });
    p418.response.status = v306.fARSl(679255, 679327);
    p418.body = vRequire14.SUCCESS_200("查询信息列表成功！", {
      http: v309
    });
  }
  static async getHttpCountForLoadTimeGroupByDay(p422) {
    const v310 = {
      QkCrh: function (p423, p424) {
        return p423 ^ p424;
      }
    };
    let v311 = p422.request.body;
    const v312 = JSON.parse(v311);
    v312.uploadType = UPLOAD_TYPE.HTTP_COUNT_A;
    const v313 = await HttpLogInfoModel.getHttpCountForLoadTimeGroupByDay(v312);
    v312.uploadType = UPLOAD_TYPE.HTTP_COUNT_B;
    const v314 = await HttpLogInfoModel.getHttpCountForLoadTimeGroupByDay(v312);
    v312.uploadType = UPLOAD_TYPE.HTTP_COUNT_C;
    const v315 = await HttpLogInfoModel.getHttpCountForLoadTimeGroupByDay(v312);
    v312.uploadType = UPLOAD_TYPE.HTTP_COUNT_D;
    const v316 = await HttpLogInfoModel.getHttpCountForLoadTimeGroupByDay(v312);
    v312.uploadType = UPLOAD_TYPE.HTTP_COUNT_E;
    const v317 = await HttpLogInfoModel.getHttpCountForLoadTimeGroupByDay(v312);
    const v318 = {
      a: vRequire7.handleDateResult(v313),
      b: vRequire7.handleDateResult(v314),
      c: vRequire7.handleDateResult(v315),
      d: vRequire7.handleDateResult(v316),
      e: vRequire7.handleDateResult(v317)
    };
    p422.response.status = v310.QkCrh(974369, 974569);
    p422.body = vRequire14.SUCCESS_200("查询信息列表成功！", v318);
  }
  static async getHttpUrlListForLoadTime(p425) {
    const v319 = {
      gLIiF: function (p426, p427) {
        return p426 ^ p427;
      }
    };
    let v320 = p425.request.body;
    const v321 = JSON.parse(v320);
    const v322 = await HttpLogInfoModel.getHttpUrlListForLoadTime(v321);
    p425.response.status = v319.gLIiF(271488, 271432);
    p425.body = vRequire14.SUCCESS_200("查询信息列表成功！", v322);
  }
  static async ["getHttpUrlUserCount"](p428) {
    const v323 = {
      AUPUb: function (p429, p430) {
        return p429 ^ p430;
      },
      NzZRS: function (p431, p432) {
        return p431 ^ p432;
      }
    };
    let v324 = p428.request.body;
    const v325 = JSON.parse(v324);
    const v326 = await HttpLogInfoModel.getHttpUrlUserCountForLoadTime(v325);
    const v327 = v326.length ? v326[0].count : v323.AUPUb(786479, 786479);
    p428.response.status = v323.NzZRS(510901, 510845);
    p428.body = vRequire14.SUCCESS_200("查询信息列表成功！", v327);
  }
  static async getPagesByHttpUrl(p433) {
    let v328 = p433.request.body;
    const v329 = JSON.parse(v328);
    const v330 = await HttpLogInfoModel.getPagesByHttpUrlForLoadTime(v329);
    p433.response.status = 200;
    p433.body = vRequire14.SUCCESS_200("查询信息列表成功！", v330);
  }
  static async getHttpUrlCountListByHour(p434) {
    const v331 = {
      wpRox: function (p435, p436) {
        return p435 ^ p436;
      },
      HSbkY: "查询信息列表成功！"
    };
    const v332 = vRequire7.parseQs(p434.request.url);
    await HttpLogInfoModel.getHttpUrlCountListByHour(v332).then(p437 => {
      if (p437) {
        p434.response.status = v331.wpRox(290835, 291035);
        p434.body = vRequire14.SUCCESS_200(v331.HSbkY, p437);
      } else {
        p434.response.status = 412;
        p434.body = vRequire14.ERROR_412("查询信息列表失败！");
      }
    });
  }
  static async ["getHttpUrlCountForHourByMinutes"](p438) {
    let v333 = p438.request.body;
    const v334 = JSON.parse(v333);
    let v335 = [];
    await HttpLogInfoModel.getHttpUrlCountForHourByMinutes(v334).then(p439 => {
      v335 = p439;
    });
    p438.response.status = 200;
    p438.body = vRequire14.SUCCESS_200("success！", v335);
  }
  static async getHttpLoadTimeForAll(p440) {
    const v336 = {
      wwcfP: function (p441, p442, p443) {
        return p441(p442, p443);
      },
      mjTJg: function (p444, p445) {
        return p444 ^ p445;
      },
      griUu: function (p446, p447) {
        return p446 ^ p447;
      },
      YhQfO: function (p448, p449) {
        return p448 - p449;
      },
      wAetm: function (p450, p451) {
        return p450 ^ p451;
      },
      HmMEh: "success！"
    };
    let v337 = p440.request.body;
    const v338 = JSON.parse(v337);
    const {
      webMonitorId: _0x168bfa,
      timeSize: _0xf36cd9
    } = v338;
    let v339 = {
      httpErrorCount: 0,
      httpLogCount: 0
    };
    const v340 = vRequire7.addDays(v336.YhQfO(0, _0xf36cd9));
    await HttpErrorInfoModel.calculateHttpErrorCountByDay(_0x168bfa, 0 - _0xf36cd9).then(p452 => {
      v339.httpErrorCount = v336.wwcfP(parseInt, p452[0].count || v336.mjTJg(267544, 267544), v336.mjTJg(560716, 560710));
    });
    await HttpLogInfoModel.getHttpLogCountByDay(_0x168bfa, 0 - _0xf36cd9).then(p453 => {
      v339.httpLogCount = parseInt(p453[v336.mjTJg(377632, 377632)].count || v336.griUu(785378, 785378), 10);
    });
    await HttpLogInfoModel.getAvgLoadTimeByDay(_0x168bfa, v336.wAetm(863540, 863540) - _0xf36cd9).then(p454 => {
      v339.httpLogLoadTime = parseInt(p454[0].loadTime || v336.griUu(359605, 359605), 10);
    });
    p440.response.status = 200;
    p440.body = vRequire14.SUCCESS_200(v336.HmMEh, v339);
  }
  static async ["getHttpLoadTimePercent"](p455) {
    let v341 = p455.request.body;
    const v342 = JSON.parse(v341);
    v342.uploadTypes = "('" + UPLOAD_TYPE.HTTP_COUNT_A + "','" + UPLOAD_TYPE.HTTP_COUNT_B + "','" + UPLOAD_TYPE.HTTP_COUNT_C + "','" + UPLOAD_TYPE.HTTP_COUNT_D + "','" + UPLOAD_TYPE.HTTP_COUNT_E + "')";
    let v343 = {};
    await HttpLogInfoModel.getHttpLoadTimePercent(v342).then(p456 => {
      v343 = p456;
    });
    p455.response.status = 200;
    p455.body = vRequire14.SUCCESS_200("success！", v343);
  }
  static async ["getHttpLoadTimePercentSimple"](p457) {
    let v344 = p457.request.body;
    const v345 = JSON.parse(v344);
    const {
      webMonitorId: _0x4ee8e,
      timeSize: _0x1ab879
    } = v345;
    let v346 = [];
    await HttpLogInfoModel.getHttpLoadTimePercentSimple(_0x4ee8e, 0 - _0x1ab879).then(p458 => {
      v346 = p458;
    });
    v346.forEach(p459 => {
      p459.uploadType += "s";
    });
    p457.response.status = 200;
    p457.body = vRequire14.SUCCESS_200("success！", v346);
  }
  static async getHttpLoadTimeListByUrl(p460) {
    let v347 = p460.request.body;
    const v348 = JSON.parse(v347);
    const {
      webMonitorId: _0x450f8c,
      timeSize: _0x565ba1
    } = v348;
    const v349 = await HttpLogInfoModel.getLoadTimeListByUrl(_0x450f8c, 0 - _0x565ba1);
    p460.response.status = 200;
    p460.body = vRequire14.SUCCESS_200("success！", v349);
  }
  static async getHttpInfoInRealTimeByMinute(p461) {
    const v350 = {
      pPYGu: "yyyy-MM-dd hh:mm",
      efaWg: ":00",
      kOdId: function (p462, p463) {
        return p462 !== p463;
      },
      iktnC: function (p464, p465) {
        return p464 ^ p465;
      },
      nieGL: function (p466, p467) {
        return p466 ^ p467;
      },
      zDLdl: function (p468, p469, p470) {
        return p468(p469, p470);
      },
      IYxYR: function (p471, p472) {
        return p471 > p472;
      },
      GBdxl: function (p473, p474) {
        return p473 / p474;
      },
      JqhRV: function (p475, p476) {
        return p475 * p476;
      },
      AHODX: "查询信息列表成功！"
    };
    let v351 = p461.request.body;
    const v352 = JSON.parse(v351);
    const {
      webMonitorId: _0xdcee34
    } = v352;
    const v353 = new Date().getTime();
    const v354 = new Date(v353 - 60000).Format(v350.pPYGu) + ":00";
    const v355 = new Date(v353).Format("yyyy-MM-dd hh:mm") + v350.efaWg;
    if (v351) {
      const v356 = await HttpLogInfoModel.getHttpCountInRealTimeByMinute(_0xdcee34, v354, v355);
      const v357 = await HttpErrorInfoModel.getHttpErrorCountInRealTimeByMinute(_0xdcee34, v354, v355);
      const v358 = v350.kOdId(v356[v350.iktnC(392524, 392524)].httpCount, null) ? v356[0].httpCount : 0;
      const v359 = v357[v350.nieGL(873867, 873867)].httpCount !== null ? v357[0].httpCount : v350.nieGL(532446, 532446);
      let v360 = v350.nieGL(993240, 993212);
      const v361 = parseInt(v358, 10) + v350.zDLdl(parseInt, v359, 10);
      if (v350.IYxYR(v361, 0)) {
        if (v358 === 0) {
          v360 = 0;
        } else {
          v360 = vRequire7.toFixed(v350.GBdxl(v350.JqhRV(v358, v350.iktnC(555070, 555098)), v361), 2);
        }
      }
      const v362 = await HttpLogInfoModel.getHttpLoadTimeInRealTimeByMinute(_0xdcee34, v354, v355);
      v362[0].loadTime = vRequire7.toFixed(parseInt(v362[0].loadTime, 10) / 1000, 1);
      const v363 = {
        httpCount: v358,
        httpErrorCount: v359,
        httpSuccessPer: v360,
        ...v362[0]
      };
      p461.response.status = 200;
      p461.body = vRequire14.SUCCESS_200(v350.AHODX, v363);
    } else {
      p461.response.status = 412;
      p461.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
  static async getHttpLoadOverview(p477) {
    const v364 = {
      Galkq: function (p478, p479) {
        return p478 ^ p479;
      },
      dnnWQ: function (p480, p481) {
        return p480 - p481;
      },
      SQbcc: function (p482, p483) {
        return p482 * p483;
      },
      YStTl: function (p484, p485) {
        return p484 ^ p485;
      },
      mxFvP: function (p486, p487) {
        return p486 ^ p487;
      },
      Evcct: function (p488, p489) {
        return p488 ^ p489;
      },
      TisHE: function (p490, p491) {
        return p490 ^ p491;
      },
      mzkEW: function (p492, p493) {
        return p492 ^ p493;
      },
      CXzpY: function (p494, p495) {
        return p494 ^ p495;
      }
    };
    let v365 = p477.request.body;
    const v366 = JSON.parse(v365);
    const {
      webMonitorId: _0x5bda7c,
      timeSize: _0x507d90
    } = v366;
    const v367 = await HttpLogInfoModel.getTotalCountAndHttpLoadTime(_0x5bda7c, v364.Galkq(833633, 833633) - _0x507d90);
    const {
      count = 0,
      loadTime = 0
    } = v367[0] || {};
    const v368 = await HttpLogInfoModel.getTotalCountInSeconds(_0x5bda7c, v364.dnnWQ(0, _0x507d90), 2000);
    const v369 = v368.length ? v364.SQbcc(v368[0].count, 1) : v364.YStTl(320438, 320438);
    const v370 = await HttpErrorInfoModel.calculateHttpErrorCountByDay(_0x5bda7c, v364.Galkq(198466, 198466) - _0x507d90);
    const v371 = v370.length ? v370[0].count * v364.mxFvP(338848, 338849) : v364.Evcct(448276, 448276);
    const v372 = v364.SQbcc(count, v364.TisHE(771686, 771687)) + v371 * 1;
    const v373 = count * 1 !== v364.mzkEW(314507, 314507) ? vRequire7.toFixed(v364.SQbcc(count, 100) / v372, v364.CXzpY(195758, 195756)) : 0;
    const v374 = v369 !== 0 ? vRequire7.toFixed(v369 * 100 / count, 2) : 0;
    const v375 = {
      requestCount: v372,
      succeedPer: v373,
      avgLoadTime: loadTime === null ? 0 : loadTime,
      openPerInOneSecond: v374
    };
    p477.response.status = 200;
    p477.body = vRequire14.SUCCESS_200("success！", v375);
  }
  static async getHttpLogDataForMinute(p496) {
    const v376 = {
      OtNbh: function (p497, p498) {
        return p497 ^ p498;
      },
      NRyaa: function (p499, p500) {
        return p499 === p500;
      },
      vdxwf: "dayName",
      PozVL: function (p501, p502) {
        return p501 * p502;
      },
      YvUdB: function (p503, p504) {
        return p503 === p504;
      },
      AjYFN: "minute",
      TKBnd: " 00:00:00",
      HEBhd: "day",
      sSjQU: "dayCount",
      rBWpi: "请求数",
      dhxyu: "创建信息成功"
    };
    const v377 = JSON.parse(p496.request.body);
    const {
      webMonitorId: _0xaaaeaf,
      startDate: _0x1bbc70,
      endDate: _0x1c0645,
      timeType: _0x31eea9,
      timeSize: _0x886516
    } = v377;
    let v378 = [];
    let v379 = [];
    let v380 = [];
    if (_0x31eea9 === "minute") {
      v380 = await HttpLogInfoModel.getHttpLogOverviewByTimeType(_0xaaaeaf, _0x1bbc70, _0x1c0645, "happenMinute");
    } else if (_0x31eea9 === "hour") {
      v380 = await HttpLogInfoModel.getHttpLogOverviewByTimeType(_0xaaaeaf, _0x1bbc70, _0x1c0645, "happenHour");
    } else if (v376.YvUdB(_0x31eea9, "day")) {
      v380 = await HttpLogInfoModel.getHttpLogOverviewByTimeTypeForDay(_0xaaaeaf, _0x1bbc70, _0x1c0645);
    }
    let v381 = [];
    let v382 = "";
    let v383 = "";
    if (_0x31eea9 === v376.AjYFN) {
      v381 = vRequire7.getAllMinutesForDay(vRequire7.addDays(0));
      v382 = "happenMinute";
      v383 = "minuteValue";
    } else if (_0x31eea9 === "hour") {
      const v384 = new Date(_0x1bbc70 + v376.TKBnd).getTime();
      const v385 = new Date(_0x1c0645 + " 23:59:59").getTime();
      v381 = vRequire7.getAllHoursForDay(v384, v385);
      v382 = "happenHour";
      v383 = "hourValue";
    } else if (_0x31eea9 === v376.HEBhd) {
      v381 = vRequire7.getAllDayForScope(_0x1bbc70, _0x1c0645);
      v382 = v376.vdxwf;
      v383 = v376.sSjQU;
    }
    v381.forEach(p505 => {
      const v386 = v380.filter(p506 => {
        if (v382 === "happenMinute") {
          let v387 = p506[v382] ? p506[v382].substring(v376.OtNbh(396759, 396764)) : "";
          return v387 === p505;
        } else if (v382 === "happenHour") {
          return p506[v382] === p505;
        } else if (v376.NRyaa(v382, v376.vdxwf)) {
          return v376.NRyaa(p506[v382], p505);
        }
        return false;
      });
      if (v386.length) {
        v378.push(vRequire7.toFixed(v376.PozVL(v386[0].requestCount, v376.OtNbh(944884, 944885)), 2));
        v379.push(vRequire7.toFixed(v386[0].loadTimeAvg * v376.OtNbh(884757, 884756), 2));
      } else {
        v378.push(0);
        v379.push(0);
      }
    });
    const v388 = [{
      name: v376.rBWpi,
      type: "bar",
      axisData: v381 || [],
      data: v378 || []
    }, {
      name: "请求平均耗时",
      type: "line",
      axisData: v381 || [],
      data: v379 || []
    }];
    p496.response.status = 200;
    p496.body = vRequire14.SUCCESS_200(v376.dhxyu, v388);
  }
  static async getHttpLogDataForUrlByDay(p507) {
    const v389 = {
      QCRFK: function (p508, p509) {
        return p508 ^ p509;
      },
      RPmut: function (p510, p511) {
        return p510 / p511;
      },
      UwFav: function (p512, p513) {
        return p512 * p513;
      },
      WvAJR: function (p514, p515) {
        return p514 ^ p515;
      },
      RcaQd: function (p516, p517) {
        return p516 - p517;
      },
      lLdtn: function (p518, p519) {
        return p518 ^ p519;
      },
      druMr: function (p520, p521) {
        return p520 - p521;
      },
      PnVCR: "更新信息成功！"
    };
    let v390 = JSON.parse(p507.request.body);
    const {
      webMonitorId: _0xb99a2,
      timeSize: _0x50e026
    } = v390;
    let v391 = await HttpLogInfoModel.getHttpLogDataForUrlByDay(_0xb99a2, v389.RcaQd(0, _0x50e026) - v389.lLdtn(413130, 413131));
    let v392 = await HttpLogInfoModel.getHttpLogDataForUrlByDay(_0xb99a2, 0 - _0x50e026);
    const v393 = await HttpLogInfoModel.getTotalCountInSecondsForUrl(_0xb99a2, 0 - _0x50e026, 2000);
    const v394 = await HttpErrorInfoModel.calculateHttpErrorCountForUrlByDay(_0xb99a2, v389.druMr(0, _0x50e026));
    let v395 = [];
    v392.forEach(p522 => {
      const v396 = {
        openPerInOneSecond: 100,
        succeedPer: 100,
        avgLoadTimeChange: 0
      };
      const {
        simpleHttpUrl: _0x4289e5,
        count = 0,
        loadTime = 0
      } = p522 || {};
      v396.simpleHttpUrl = _0x4289e5;
      v396.requestCount = count;
      v396.avgLoadTime = loadTime;
      const v397 = v393.filter(p523 => p523.simpleHttpUrl === _0x4289e5);
      if (v397 && v397.length) {
        const v398 = v397[v389.QCRFK(778237, 778237)];
        v396.openPerInOneSecond = v398.count !== 0 ? vRequire7.toFixed(v389.RPmut(v398.count * 100, count), v389.QCRFK(829884, 829886)) : 0;
      }
      const v399 = v394.filter(p524 => p524.simpleHttpUrl === _0x4289e5);
      if (v399 && v399.length) {
        const v400 = v399[v389.QCRFK(655418, 655418)];
        v396.succeedPer = count * 1 !== 0 ? vRequire7.toFixed(count * 100 / (count * 1 + v389.UwFav(v400.count, 1)), 2) : v389.WvAJR(736940, 736940);
      }
      const v401 = v391.filter(p525 => p525.simpleHttpUrl === _0x4289e5);
      if (v401 && v401.length) {
        const v402 = v401[v389.QCRFK(397032, 397032)];
        v396.avgLoadTimeChange = vRequire7.toFixed(v389.UwFav(v389.RcaQd(loadTime, v402.loadTime) / v402.loadTime, v389.QCRFK(235587, 235559)), 2);
      }
      v395.push(v396);
    });
    p507.response.status = 200;
    p507.body = vRequire14.SUCCESS_200(v389.PnVCR, v395);
  }
  static async ["getHttpPerfDataForMap"](p526) {
    const v403 = {
      nUgpB: function (p527, p528) {
        return p527 - p528;
      }
    };
    const {
      webMonitorId: _0x149b6b,
      timeSize: _0x480130
    } = JSON.parse(p526.request.body);
    const v404 = await HttpLogInfoModel.getHttpPerfDataForMap(_0x149b6b, 0 - _0x480130, "province");
    const v405 = await HttpLogInfoModel.getHttpPerfDataForMap(_0x149b6b, v403.nUgpB(0, _0x480130), "country");
    p526.response.status = 200;
    p526.body = vRequire14.SUCCESS_200("success", {
      provinceData: v404,
      countryData: v405
    });
  }
  static async ["getHttpLoadTimeForGroup"](p529) {
    const {
      webMonitorId: _0x180ca9,
      timeSize: _0x1505c2
    } = JSON.parse(p529.request.body);
    const v406 = await HttpLogInfoModel.getHttpLoadTimeForGroup(_0x180ca9, 0 - _0x1505c2);
    p529.response.status = 200;
    p529.body = vRequire14.SUCCESS_200("success", v406);
  }
  static async ["getOperatorForGroup"](p530) {
    const v407 = {
      bqxCY: function (p531, p532) {
        return p531 ^ p532;
      },
      FQgbv: "success"
    };
    const {
      webMonitorId: _0x3b7770,
      timeSize: _0x3a29af
    } = JSON.parse(p530.request.body);
    const v408 = await HttpLogInfoModel.getOperatorForGroup(_0x3b7770, 0 - _0x3a29af);
    p530.response.status = v407.bqxCY(967590, 967534);
    p530.body = vRequire14.SUCCESS_200(v407.FQgbv, v408);
  }
  static async getMethodForGroup(p533) {
    const {
      webMonitorId: _0x33ff29,
      timeSize: _0x3c50b6
    } = JSON.parse(p533.request.body);
    const v409 = await HttpLogInfoModel.getMethodForGroup(_0x33ff29, 0 - _0x3c50b6);
    p533.response.status = 200;
    p533.body = vRequire14.SUCCESS_200("success", v409);
  }
}
class C7 {
  static async createNewAlarmRule(p539) {
    const v410 = {
      UIALJ: function (p540, p541) {
        return p540 ^ p541;
      },
      tqxte: function (p542, p543) {
        return p542 ^ p543;
      },
      XQGvO: "创建信息失败，请求参数不能为空！"
    };
    let v411 = JSON.parse(p539.request.body);
    const {
      dataId: _0x3fa7b1,
      ruleName: _0x4448a0,
      loopTime: _0x40779c,
      quietStartTime: _0xe52881,
      quietEndTime: _0x3f5829
    } = v411;
    const v412 = JSON.stringify(v411.ruleList);
    const v413 = {
      ruleName: _0x4448a0,
      loopTime: _0x40779c,
      quietStartTime: _0xe52881,
      quietEndTime: _0x3f5829,
      ruleList: v412
    };
    if (_0x4448a0) {
      if (_0x3fa7b1) {
        await AlarmRuleModel.updateAlarmRule(_0x3fa7b1, v413);
      } else {
        await AlarmRuleModel.createAlarmRule(v413);
      }
      p539.response.status = 200;
      p539.body = vRequire14.SUCCESS_200("创建信息成功", v410.UIALJ(635940, 635940));
    } else {
      p539.response.status = v410.tqxte(761990, 762138);
      p539.body = vRequire14.ERROR_412(v410.XQGvO);
    }
  }
  static async ["getAllAlarmRule"](p544) {
    let v414 = p544.request.body;
    const v415 = JSON.parse(v414);
    let v416 = await AlarmRuleModel.getAllAlarmRule(v415);
    p544.response.status = 200;
    p544.body = vRequire14.SUCCESS_200("查询信息列表成功！", v416);
  }
  static async detail(p545) {
    return await AlarmRuleModel.getAlarmRuleDetail(p545);
  }
  static async deleteAlarmRule(p546) {
    const v417 = {
      aNTiP: "success",
      XxqSv: function (p547, p548) {
        return p547 ^ p548;
      }
    };
    let v418 = JSON.parse(p546.request.body);
    const {
      ruleId: _0xf24ffe
    } = v418;
    const v419 = await ProjectModel.getProjectByAlarmRuleId(_0xf24ffe);
    if (v419.length <= 0) {
      await AlarmRuleModel.deleteAlarmRule(_0xf24ffe);
      p546.response.status = 200;
      p546.body = vRequire14.SUCCESS_200(v417.aNTiP, v417.XxqSv(142092, 142092));
    } else {
      p546.response.status = 200;
      p546.body = vRequire14.SUCCESS_200("当前警报规则还有项目在使用，无法执行删除操作！", 1);
    }
  }
}
class C8 {
  static async getCheckTime(p549) {}
  static async changeCheckTime(p550) {
    const v420 = {
      bZXMi: function (p551, p552) {
        return p551 + p552;
      }
    };
    let v421 = p550.request.body;
    const v422 = JSON.parse(v421);
    const {
      waitCheckTime: _0x21dad1
    } = v422;
    const v423 = "/**\n        * 检查频率配置\n        */\n        module.exports = {\n            waitCheckTime: " + _0x21dad1 + "      // 单位：分钟\n        }";
    await fs2.writeFile("./interceptor/config/checkTime.js", v423, p553 => {
      if (p553) {
        throw p553;
      }
      console.log(v420.bZXMi("警报检查频率修改成功，当前检查频率为：次/" + _0x21dad1, "分钟"));
      console.log("即将重启服务以生效...");
      C13.restartServer();
    });
    p550.response.status = 200;
    p550.body = vRequire14.SUCCESS_200("success", 0);
  }
  static async getJsErrorConfig(p554) {
    const v424 = {
      uEcOg: "success"
    };
    p554.response.status = 200;
    p554.body = vRequire14.SUCCESS_200(v424.uEcOg, {
      jsErrorCount: vRequire3.errorCount,
      jsErrorPercent: vRequire3.errorPercent
    });
  }
  static async changeJsErrorConfig(p555) {
    let v425 = p555.request.body;
    const v426 = JSON.parse(v425);
    const {
      jsErrorCount: _0x4fb2c4,
      jsErrorPercent: _0x2c8954
    } = v426;
    const v427 = "/**\n        * JS异常报警配置\n        */\n        module.exports = {\n            errorCount: " + _0x4fb2c4 + ",\n            errorPercent: " + _0x2c8954 + "  // 这里是百分比\n        }";
    await fs2.writeFile("./interceptor/config/jsError.js", v427, p556 => {
      if (p556) {
        throw p556;
      }
      console.log("js错误配置成功，重启服务以生效...");
    });
    p555.response.status = 200;
    p555.body = vRequire14.SUCCESS_200("success", 0);
  }
  static async getConsoleErrorConfig(p557) {
    p557.response.status = 200;
    p557.body = vRequire14.SUCCESS_200("success", {
      consoleErrorCount: vRequire4.errorCount,
      consoleErrorPercent: vRequire4.errorPercent
    });
  }
  static async ["changeConsoleErrorConfig"](p558) {
    let v428 = p558.request.body;
    const v429 = JSON.parse(v428);
    const {
      consoleErrorCount: _0x1916e0,
      consoleErrorPercent: _0xc5b7fe
    } = v429;
    const v430 = "/**\n        * consoleError异常报警配置\n        */\n        module.exports = {\n            errorCount: " + _0x1916e0 + ",\n            errorPercent: " + _0xc5b7fe + "  // 这里是百分比\n        }";
    await fs2.writeFile("./interceptor/config/consoleError.js", v430, p559 => {
      if (p559) {
        throw p559;
      }
      console.log("consoleError错误配置成功，重启服务以生效...");
    });
    p558.response.status = 200;
    p558.body = vRequire14.SUCCESS_200("success", 0);
  }
  static async getHttpErrorConfig(p560) {
    p560.response.status = 200;
    p560.body = vRequire14.SUCCESS_200("success", {
      httpErrorCount: vRequire5.errorCount,
      httpErrorPercent: vRequire5.errorPercent
    });
  }
  static async ["changeHttpErrorConfig"](p561) {
    const v431 = {
      amgiw: "./interceptor/config/httpError.js"
    };
    let v432 = p561.request.body;
    const v433 = JSON.parse(v432);
    const {
      httpErrorCount: _0x161567,
      httpErrorPercent: _0x1ed6c6
    } = v433;
    const v434 = "/**\n        * consoleError异常报警配置\n        */\n        module.exports = {\n            errorCount: " + _0x161567 + ",\n            errorPercent: " + _0x1ed6c6 + "  // 这里是百分比\n        }";
    await fs2.writeFile(v431.amgiw, v434, p562 => {
      if (p562) {
        throw p562;
      }
      console.log("httpError错误配置成功，重启服务以生效...");
    });
    p561.response.status = 200;
    p561.body = vRequire14.SUCCESS_200("success", 0);
  }
  static async getResourceErrorConfig(p563) {
    const v435 = {
      yOwWD: "success"
    };
    p563.response.status = 200;
    p563.body = vRequire14.SUCCESS_200(v435.yOwWD, {
      resourceErrorCount: vRequire6.errorCount,
      resourceErrorPercent: vRequire6.errorPercent
    });
  }
  static async changeResourceErrorConfig(p564) {
    const v436 = {
      VttGB: "./interceptor/config/resourceError.js",
      pOAEr: function (p565, p566) {
        return p565 ^ p566;
      }
    };
    let v437 = p564.request.body;
    const v438 = JSON.parse(v437);
    const {
      resourceErrorCount: _0x4dea1e,
      resourceErrorPercent: _0x2d911d
    } = v438;
    const v439 = "/**\n        * consoleError异常报警配置\n        */\n        module.exports = {\n            errorCount: " + _0x4dea1e + ",\n            errorPercent: " + _0x2d911d + "  // 这里是百分比\n        }";
    await fs2.writeFile(v436.VttGB, v439, p567 => {
      if (p567) {
        throw p567;
      }
      console.log("resourceError错误配置成功，重启服务以生效...");
    });
    p564.response.status = 200;
    p564.body = vRequire14.SUCCESS_200("success", v436.pOAEr(669970, 669970));
  }
  static async handleAlarmResult(p568, p569, p570) {
    const v440 = {
      pmhyT: function (p571, p572) {
        return p571 + p572;
      },
      vavEV: function (p573, p574) {
        return p573 + p574;
      },
      eiAZl: "】发出警报：",
      zSfsk: " 已经发生",
      UfkWJ: "ConsoleError",
      vtFRH: function (p575, p576) {
        return p575 ^ p576;
      },
      QOxqk: function (p577, p578) {
        return p577 === p578;
      },
      iTHUf: function (p579, p580) {
        return p579 >= p580;
      },
      wvzhw: function (p581, p582) {
        return p581 ^ p582;
      }
    };
    const {
      webMonitorId: _0x17969d,
      projectType: _0xef39ba,
      projectName: _0x55df94
    } = p568;
    const {
      type: _0x379dc8,
      compareType: _0x29fadc
    } = p569;
    const v441 = _0x29fadc === "up" ? ">=" : "<";
    const vParseInt = parseInt(p569.limitValue, 10);
    const vParseInt2 = parseInt(p569.happenCount, v440.vtFRH(233508, 233518));
    if (!global.monitorInfo.alarmInfoList[_0x17969d]) {
      global.monitorInfo.alarmInfoList[_0x17969d] = {};
    }
    if (!global.monitorInfo.alarmInfoList[_0x17969d][_0x379dc8]) {
      global.monitorInfo.alarmInfoList[_0x17969d][_0x379dc8] = 0;
    }
    const v442 = global.monitorInfo.alarmInfoList[_0x17969d][_0x379dc8];
    if (v440.QOxqk(_0x29fadc, "up") && v440.iTHUf(p570, vParseInt)) {
      global.monitorInfo.alarmInfoList[_0x17969d][_0x379dc8] = v442 + 1;
    } else if (_0x29fadc === "down" && p570 < vParseInt) {
      global.monitorInfo.alarmInfoList[_0x17969d][_0x379dc8] = v442 + v440.wvzhw(956110, 956111);
    }
    if (global.monitorInfo.alarmInfoList[_0x17969d][_0x379dc8] >= vParseInt2) {
      const v443 = JSON.parse(p568.alarmMembers);
      const v444 = v443.join(",");
      const v445 = await vRequire7.requestForTwoProtocol("post", LOCAL_SERVER + "/wfCenter/getTeamMembersByWebMonitorId", {
        webMonitorId: _0x17969d
      });
      const v446 = v445 ? v445.data : [];
      vRequire10.alarmCallback(p568, p569, v446);
      v446.forEach(p583 => {
        const v447 = vRequire11[_0x379dc8] + "警报！";
        const v448 = v440.pmhyT(v440.pmhyT(v440.vavEV("您的" + _0xef39ba + "项目【" + _0x55df94 + v440.eiAZl + _0x379dc8, "数量 ") + v441 + " ", vParseInt) + v440.zSfsk + vParseInt2, "次了，请及时处理。");
        let v449 = "./wf_monitor/home.html";
        switch (_0x379dc8) {
          case "PV":
          case "UV":
            v449 = "./wf_monitor/home.html";
            break;
          case "JsError":
          case v440.UfkWJ:
            v449 = "./wf_monitor/javascriptError.html";
            break;
          case "http":
            v449 = "./wf_monitor/httpError.html";
            break;
          case "httpError":
            v449 = "./wf_monitor/httpError.html";
            break;
          case "resourceError":
            v449 = "./wf_monitor/resourceError.html";
            break;
          default:
            break;
        }
        let v450 = JSON.stringify([v448]);
        MessageModel.createMessage({
          userId: p583.userId,
          title: v447,
          content: v450,
          type: "alarm",
          isRead: 0,
          link: v449
        });
      });
      global.monitorInfo.alarmInfoList[_0x17969d][_0x379dc8] = 0;
    }
  }
  static async ["handleAlarmInfo"](p584, p585, p586) {
    const v451 = {
      NrVTY: function (p587, p588) {
        return p587 * p588;
      },
      yGvHg: "yyyy-MM-dd hh:mm",
      KAKWO: function (p589, p590) {
        return p589 + p590;
      },
      scIzE: "JsError",
      UMroB: function (p591, p592) {
        return p591 ^ p592;
      },
      kxXLl: "ConsoleError",
      bmSZs: function (p593, p594) {
        return p593 ^ p594;
      },
      tiSwx: function (p595, p596) {
        return p595 ^ p596;
      }
    };
    const v452 = new Date().getTime();
    const v453 = new Date(v452 - v451.NrVTY(60000, p584)).Format(v451.yGvHg) + ":00";
    const v454 = v451.KAKWO(new Date(v452).Format("yyyy-MM-dd hh:mm"), ":00");
    for (let v455 = 0; v455 < p586.length; v455++) {
      const v456 = p586[v455];
      const {
        status: _0x4b8107,
        type: _0x34067b
      } = v456;
      if (_0x4b8107 === true) {
        switch (_0x34067b) {
          case "PV":
            const v457 = await CustomerPVModel.getPvUvInRealTimeByEveryMinute(p585.webMonitorId, v453, v454);
            let v458 = 0;
            if (v457.length) {
              v458 = parseInt(v457[0].pvCount, 10);
            }
            C8.handleAlarmResult(p585, v456, v458);
            break;
          case "UV":
            const v459 = await CustomerPVModel.getPvUvInRealTimeByEveryMinute(p585.webMonitorId, v453, v454);
            let v460 = 0;
            if (v459.length) {
              v460 = parseInt(v459[0].uvCount, 10);
            }
            C8.handleAlarmResult(p585, v456, v460);
            break;
          case v451.scIzE:
            const v461 = await JavascriptErrorInfoModel.getJsOnErrorCountInRealTimeByEveryMinute(p585.webMonitorId, v453, v454);
            let v462 = v451.UMroB(910395, 910395);
            if (v461.length) {
              v462 = parseInt(v461[v451.UMroB(453112, 453112)].on_error, 10);
            }
            C8.handleAlarmResult(p585, v456, v462);
            break;
          case v451.kxXLl:
            const v463 = await JavascriptErrorInfoModel.getJsConsoleErrorCountInRealTimeByEveryMinute(p585.webMonitorId, v453, v454);
            let v464 = v451.bmSZs(716361, 716361);
            if (v463.length) {
              v464 = parseInt(v463[0].console_error, 10);
            }
            C8.handleAlarmResult(p585, v456, v464);
            break;
          case "http":
            const v465 = await HttpLogInfoModel.getHttpCountInRealTimeByEveryMinute(p585.webMonitorId, v453, v454);
            let v466 = v451.bmSZs(991160, 991160);
            if (v465.length) {
              v466 = parseInt(v465[0].httpCount, 10);
            }
            C8.handleAlarmResult(p585, v456, v466);
            break;
          case "httpError":
            const v467 = await HttpErrorInfoModel.getHttpErrorCountInRealTimeByEveryMinute(p585.webMonitorId, v453, v454);
            let v468 = 0;
            if (v467.length) {
              v468 = parseInt(v467[0].httpCount, 10);
            }
            C8.handleAlarmResult(p585, v456, v468);
            break;
          case "resourceError":
            const v469 = await ResourceLoadInfoModel.getResourceErrorCountInRealTimeByEveryMinute(p585.webMonitorId, v453, v454);
            let v470 = 0;
            if (v469.length) {
              v470 = parseInt(v469[v451.tiSwx(565325, 565325)].resourceErrorCount, 10);
            }
            C8.handleAlarmResult(p585, v456, v470);
            break;
          default:
            break;
        }
      }
    }
  }
  static async checkAlarm(p597, p598) {
    const v471 = {
      ixOqK: function (p599, p600) {
        return p599 ^ p600;
      },
      PdOFM: function (p601, p602) {
        return p601 < p602;
      },
      AMAho: function (p603, p604) {
        return p603 === p604;
      },
      IzhXp: function (p605, p606) {
        return p605 ^ p606;
      },
      TLcNv: function (p607, p608) {
        return p607 < p608;
      },
      jUPvh: function (p609, p610) {
        return p609 === p610;
      },
      hIvez: function (p611, p612) {
        return p611 === p612;
      }
    };
    const v472 = p597.substring(0, 5);
    const v473 = p598.substring(3);
    if (v473 !== "00") {
      return;
    }
    let vParseInt3 = parseInt(p598.substring(0, v471.ixOqK(493412, 493414)), v471.ixOqK(595818, 595808));
    const v474 = await C28.getAllProjectListWithAlarm();
    for (let v475 = 0; v471.PdOFM(v475, v474.length); v475++) {
      const v476 = v474[v475];
      const {
        alarmRuleId = "",
        alarmMembers: _0x3dbf50,
        webMonitorId: _0x458520
      } = v476;
      if (alarmRuleId && v471.AMAho(alarmRuleId.length, v471.IzhXp(153042, 153078)) && _0x3dbf50) {
        const v477 = await C7.detail(alarmRuleId);
        const {
          ruleName: _0x659f39,
          loopTime: _0x58b9a6,
          quietStartTime: _0xb7d941,
          quietEndTime: _0x247aba,
          ruleList: _0x2af92f
        } = v477;
        if (v472 >= _0xb7d941 && v471.TLcNv(v472, _0x247aba)) {
          return;
        }
        if (v471.jUPvh(p598, "00:00")) {
          vParseInt3 = 60;
        }
        switch (_0x58b9a6) {
          case 1:
            if (v471.hIvez(v473, "00")) {
              C8.handleAlarmInfo(_0x58b9a6, v476, JSON.parse(_0x2af92f));
            }
            break;
          case 5:
            if (vParseInt3 % v471.ixOqK(759169, 759172) === 0) {
              C8.handleAlarmInfo(_0x58b9a6, v476, JSON.parse(_0x2af92f));
            }
            break;
          case 10:
            if (v471.jUPvh(vParseInt3 % 10, 0)) {
              C8.handleAlarmInfo(_0x58b9a6, v476, JSON.parse(_0x2af92f));
            }
            break;
          case 30:
            if (vParseInt3 % 30 === v471.ixOqK(893319, 893319)) {
              C8.handleAlarmInfo(_0x58b9a6, v476, JSON.parse(_0x2af92f));
            }
            break;
          default:
            break;
        }
      }
    }
  }
}
class C9 {
  static async checkStatus(p613) {
    const v478 = global.monitorInfo;
    if (v478.purchaseCodeValid !== v46) {
      p613.response.status = 200;
      p613.body = vRequire14.SUCCESS_200("" + vRequire7.b64DecodeUnicode(vRequire30.INVALID_MSG1), false);
      return false;
    }
    if (v478.logServerStatus !== true) {
      p613.response.status = 200;
      p613.body = vRequire14.SUCCESS_200("" + vRequire7.b64DecodeUnicode(vRequire30.SERVER_STOP), false);
      return false;
    }
  }
  static async ["upLogGet"](p614) {
    const v479 = {
      MAKyK: "\": Script error\\.",
      pjESs: function (p615, p616) {
        return p615 ^ p616;
      },
      oPguZ: function (p617, p618) {
        return p617 === p618;
      },
      LMnjG: function (p619, p620) {
        return p619 ^ p620;
      },
      xTeUg: function (p621, p622) {
        return p621 === p622;
      }
    };
    const v480 = p614.request.url.replace("/server/upLog?logInfo=", "").replace(new RegExp(v479.MAKyK, "g"), "script error").replace(new RegExp("undefined\\{", "g"), "{");
    const v481 = global.monitorInfo;
    if (v481.purchaseCodeValid !== v46) {
      p614.response.status = v479.pjESs(593433, 593617);
      p614.body = vRequire14.SUCCESS_200("" + vRequire7.b64DecodeUnicode(vRequire30.INVALID_MSG1), false);
      return;
    }
    if (v481.logServerStatus !== true) {
      p614.response.status = 200;
      p614.body = vRequire14.SUCCESS_200("" + vRequire7.b64DecodeUnicode(vRequire30.SERVER_STOP), false);
      return;
    }
    var v482 = p614.req;
    const v483 = v482.headers["x-forwarded-for"] || v482.connection.remoteAddress || v482.socket.remoteAddress || v482.connection.socket.remoteAddress;
    let v484 = p614.req.headers["user-agent"];
    let v485 = "";
    let v486 = p614.request.body;
    try {
      const v487 = vRequire7.logParseImgData(v480);
      if (v479.oPguZ(v487.length, 0)) {
        p614.response.status = v479.LMnjG(744812, 744868);
        p614.body = vRequire14.SUCCESS_200("", {
          d: "d"
        });
        return;
      }
      const v488 = JSON.parse(v487[0]);
      const v489 = vRequire7.md5Encrypt(v488.c);
      const v490 = v488.a;
      const v491 = global.monitorInfo.userIdArray;
      let v492 = "";
      if (v491.indexOf(v489) != -v479.pjESs(531467, 531466)) {
        v492 = "c";
      } else {
        v492 = "d";
      }
      p614.response.status = 200;
      p614.body = vRequire14.SUCCESS_200("", {
        d: v492,
        c: global.monitorInfo.projectConfigs[v490]
      });
      for (var v493 = v479.LMnjG(458639, 458639); v493 < v487.length; v493++) {
        if (!v487[v493]) {
          continue;
        }
        const v494 = JSON.parse(v487[v493]);
        for (let v495 in v494) {
          if (vRequire26[v495]) {
            v494[vRequire26[v495]] = v494[v495];
            delete v494[v495];
          }
        }
        v494.monitorIp = v494.monitorIp ? v494.monitorIp : v483;
        v494.userId = vRequire7.md5Encrypt(v494.userId || "");
        v494.completeUrl = vRequire7.b64DecodeUnicode(v494.completeUrl);
        v485 = v494.uploadType;
        const {
          accountInfo: _0x54cd18
        } = vRequire25;
        const {
          messageQueue: _0x4c2d7a
        } = _0x54cd18;
        const {
          webMonitorId: _0x36cbff
        } = v494;
        if (global.monitorInfo.cacheWebMonitorIdList && global.monitorInfo.cacheWebMonitorIdList.indexOf(_0x36cbff) === -v479.pjESs(233704, 233705)) {
          return;
        }
        if (v479.xTeUg(_0x4c2d7a.enable, true)) {
          if (v485 === "CUSTOMER_PV") {
            v494.browserInfo = v484;
          }
          const v496 = JSON.stringify(v494);
          v45.sendQueueMsg("webfunny_monitor_logs", v496, p623 => {}, p624 => {
            vRequire13.printError("消息队列推送报错: " + v494.uploadType, p624);
          });
        } else {
          C9.handleLogInfo(v494, v484);
        }
      }
    } catch (_0x1fa284) {
      p614.response.status = 200;
      p614.body = vRequire14.SUCCESS_200("", "");
      const v497 = typeof v486 == "object" ? JSON.stringify(v486) : v486;
      vRequire13.printError("上报接口报错 -- " + v485);
      vRequire13.printError(v497);
      vRequire13.printError("堆栈 -- ", _0x1fa284);
    }
  }
  static async ["upLog"](p625) {
    const v498 = {
      faQpS: "x-forwarded-for",
      NozEY: function (p626, p627) {
        return p626 ^ p627;
      },
      rNAzo: function (p628, p629) {
        return p628 ^ p629;
      },
      JSufq: function (p630, p631) {
        return p630 ^ p631;
      }
    };
    const v499 = global.monitorInfo;
    if (v499.purchaseCodeValid !== v46) {
      p625.response.status = 200;
      p625.body = vRequire14.SUCCESS_200("" + vRequire7.b64DecodeUnicode(vRequire30.INVALID_MSG1), false);
      return;
    }
    if (v499.logServerStatus !== true) {
      p625.response.status = 200;
      p625.body = vRequire14.SUCCESS_200("" + vRequire7.b64DecodeUnicode(vRequire30.SERVER_STOP), false);
      return;
    }
    var v500 = p625.req;
    let v501 = v500.headers[v498.faQpS] || v500.connection.remoteAddress || v500.socket.remoteAddress || v500?.["connection"]?.socket?.["remoteAddress"];
    let v502 = p625.req.headers["user-agent"];
    let v503 = "";
    let v504 = p625.request.body;
    if (typeof v504 === "string" && v504.indexOf("STAY_TIME") != -1) {
      var v505 = JSON.parse(v504);
      for (let v506 in v505) {
        if (vRequire26[v506]) {
          v505[vRequire26[v506]] = v505[v506];
          delete v505[v506];
        }
      }
      p625.response.status = v498.NozEY(226431, 226487);
      p625.body = vRequire14.SUCCESS_200("", "");
      C9.handleLogInfo(v505);
    } else {
      try {
        const v507 = p625.request.body;
        if (v507.length === v498.rNAzo(503294, 503294)) {
          p625.response.status = 200;
          p625.body = vRequire14.SUCCESS_200("", {
            d: "d"
          });
          return;
        }
        const v508 = v507[0];
        const v509 = vRequire7.md5Encrypt(v508.c);
        const v510 = v508.a;
        const v511 = global.monitorInfo.userIdArray;
        let v512 = "";
        if (v511.indexOf(v509) != -v498.JSufq(670205, 670204)) {
          v512 = "c";
        } else {
          v512 = "d";
        }
        p625.response.status = 200;
        p625.body = vRequire14.SUCCESS_200("", {
          d: v512,
          c: global.monitorInfo.projectConfigs[v510]
        });
        for (var v513 = 0; v513 < v507.length; v513++) {
          if (!v507[v513]) {
            continue;
          }
          const v514 = v507[v513];
          for (let v515 in v514) {
            if (vRequire26[v515]) {
              v514[vRequire26[v515]] = v514[v515];
              delete v514[v515];
            }
          }
          const v516 = v514.monitorIp && v514.monitorIp.indexOf("127.0.0.1") === -1;
          v514.monitorIp = v516 ? v514.monitorIp : v501;
          v514.userId = vRequire7.md5Encrypt(v514.userId || "");
          v514.completeUrl = vRequire7.b64DecodeUnicode(v514.completeUrl);
          v503 = v514.uploadType;
          const {
            accountInfo: _0x3672c1
          } = vRequire25;
          const {
            messageQueue: _0xd9fa6b
          } = _0x3672c1;
          const {
            webMonitorId: _0x4d947e
          } = v514;
          if (global.monitorInfo.cacheWebMonitorIdList && global.monitorInfo.cacheWebMonitorIdList.indexOf(_0x4d947e) === -1) {
            return;
          }
          if (_0xd9fa6b.enable === true) {
            if (v503 === "CUSTOMER_PV") {
              v514.browserInfo = v502;
            }
            const v517 = JSON.stringify(v514);
            v45.sendQueueMsg("webfunny_monitor_logs", v517, p632 => {}, p633 => {
              vRequire13.printError("消息队列推送报错: " + v514.uploadType, p633);
            });
          } else {
            C9.handleLogInfo(v514, v502);
          }
        }
      } catch (_0x481b3d) {
        p625.response.status = 200;
        p625.body = vRequire14.SUCCESS_200("", "");
        const v518 = typeof v504 == "object" ? JSON.stringify(v504) : v504;
        vRequire13.printError("上报接口报错 -- " + v503);
        vRequire13.printError(v518);
        vRequire13.printError("堆栈 -- ", _0x481b3d);
      }
    }
  }
  static async initCf(p634) {
    const v519 = {
      Bhtit: function (p635, p636) {
        return p635 ^ p636;
      },
      snHlc: function (p637, p638) {
        return p637 !== p638;
      },
      Lmgna: function (p639, p640) {
        return p639 ^ p640;
      },
      EMcXR: "success"
    };
    const {
      webMonitorId: _0x26a967,
      userId: _0x46ca2e
    } = p634.request.body;
    let v520 = "off";
    let v521 = "off";
    const {
      connect: _0x11f4a4,
      vconsole: _0x4b1f5f,
      videos: _0x39dd1b
    } = global.monitorInfo.debugOnlineForUserIdArray;
    console.log("initCf", global.monitorInfo.debugOnlineForUserIdArray);
    if (_0x11f4a4.indexOf(_0x46ca2e) !== -v519.Bhtit(994203, 994202)) {
      v520 = "on";
    } else {
      v520 = "off";
    }
    if (v519.snHlc(_0x4b1f5f.indexOf(_0x46ca2e), -v519.Lmgna(915164, 915165))) {
      v521 = "on";
    } else {
      v521 = "off";
    }
    const v522 = _0x39dd1b.find(p641 => p641.userId === _0x46ca2e);
    const v523 = global.monitorInfo.monitorSecretList[global.monitorInfo.monitorSecretList.length - 1];
    const v524 = C2.encryptSignature(v523);
    const v525 = {
      connect: v520,
      vconsole: v521,
      videos: v522,
      c: global.monitorInfo.projectConfigs[_0x26a967],
      signature: v524
    };
    p634.response.status = 200;
    p634.body = vRequire14.SUCCESS_200(v519.EMcXR, v525);
  }
  static async ["upLogs"](p642) {
    const v526 = {
      SOZFC: function (p643, p644) {
        return p643 + p644;
      },
      mscPq: function (p645, p646) {
        return p645 ^ p646;
      },
      DnbBf: function (p647, p648) {
        return p647 !== p648;
      },
      GpKhG: "string",
      FTRfn: function (p649, p650) {
        return p649 < p650;
      },
      vHbGF: function (p651, p652) {
        return p651 ^ p652;
      },
      pWSEP: "无日志内容",
      QqoCx: function (p653, p654) {
        return p653 ^ p654;
      },
      XvzXv: "invalid signature",
      nBzrJ: "off",
      UCWDm: "success",
      smnFw: function (p655, p656) {
        return p655 ^ p656;
      },
      jdTrJ: function (p657, p658) {
        return p657 === p658;
      },
      ujgqw: "CUSTOMER_PV",
      PTqdv: "上报接口异常："
    };
    const v527 = global.monitorInfo;
    const v528 = v527.monitorSecretList[v527.monitorSecretList.length - v526.mscPq(856057, 856056)];
    const v529 = C2.encryptSignature(v528);
    if (v527.purchaseCodeValid !== v46) {
      console.log("" + vRequire7.b64DecodeUnicode(vRequire30.INVALID_MSG1));
      p642.response.status = v526.mscPq(128236, 128036);
      p642.body = vRequire14.SUCCESS_200("" + vRequire7.b64DecodeUnicode(vRequire30.INVALID_MSG1), {
        signature: v529
      });
      return;
    }
    if (v526.DnbBf(v527.logServerStatus, true)) {
      console.log("" + vRequire7.b64DecodeUnicode(vRequire30.SERVER_STOP));
      p642.response.status = 200;
      p642.body = vRequire14.SUCCESS_200("" + vRequire7.b64DecodeUnicode(vRequire30.SERVER_STOP), {
        signature: v529
      });
      return;
    }
    var v530 = p642.req;
    let v531 = v530.headers["x-forwarded-for"] || v530.connection.remoteAddress || v530.socket.remoteAddress || v530?.["connection"]?.["socket"]?.remoteAddress;
    if (!v531) {
      console.log("IP地址为空：" + v531, p642.request.body);
    }
    let v532 = p642.req.headers["user-agent"];
    let v533 = "";
    let v534 = p642.request.body;
    if (typeof v534 === v526.GpKhG) {
      const v535 = JSON.parse(v534);
      for (let v536 = 0; v526.FTRfn(v536, v535.length); v536++) {
        var v537 = vRequire7.base64DecodeForLog(v535[v536]);
        C9.handleLogInfo(v537);
      }
      p642.response.status = 200;
      p642.body = vRequire14.SUCCESS_200("success", {
        signature: v529
      });
    } else {
      try {
        const v538 = p642.request.body;
        if (v538.length === 0) {
          p642.response.status = v526.vHbGF(321955, 321899);
          p642.body = vRequire14.SUCCESS_200("日志为空", {
            d: "d",
            signature: v529
          });
          console.log(v526.pWSEP, v538);
          return;
        }
        const v539 = vRequire7.base64DecodeForLog(v538[v538.length - 1]);
        const v540 = v539.userId;
        const v541 = v539.webMonitorId;
        if (accountInfo.signature.enable === true) {
          const v542 = C2.verifySignature(p642, v539);
          if (!v542) {
            p642.response.status = v526.QqoCx(160404, 160348);
            p642.body = vRequire14.SUCCESS_200(v526.XvzXv, {
              signature: v529
            });
            return;
          }
        }
        if (accountInfo.isCloud === true && global.monitorInfo.invalidProjectIdForCloud && global.monitorInfo.invalidProjectIdForCloud.indexOf(v541) !== -1) {
          console.log("(cloud)很遗憾，流量用完了。", v541);
          p642.response.status = 200;
          p642.body = vRequire14.SUCCESS_200("(cloud)很遗憾，流量用完了。", {
            signature: v529
          });
          return;
        }
        if (global.monitorInfo.unLimitCountForProduct === true) {
          p642.response.status = 200;
          p642.body = vRequire14.SUCCESS_200("很遗憾，今日事件数已达上限。", {
            signature: v529
          });
          return;
        }
        let v543 = "off";
        let v544 = v526.nBzrJ;
        const {
          connect: _0x4432e5,
          vconsole: _0x5ea2e9,
          videos: _0x296982
        } = global.monitorInfo.debugOnlineForUserIdArray;
        if (_0x4432e5.indexOf(v540) !== -1) {
          v543 = "on";
        } else {
          v543 = "off";
        }
        if (_0x5ea2e9.indexOf(v540) !== -1) {
          v544 = "on";
        } else {
          v544 = v526.nBzrJ;
        }
        const v545 = _0x296982.find(p659 => p659.userId === v540);
        p642.response.status = 200;
        p642.body = vRequire14.SUCCESS_200(v526.UCWDm, {
          signature: v529,
          connect: v543,
          vconsole: v544,
          videos: v545,
          c: global.monitorInfo.projectConfigs[v541]
        });
        for (var v546 = v526.smnFw(415166, 415166); v546 < v538.length; v546++) {
          if (!v538[v546]) {
            continue;
          }
          const v547 = vRequire7.base64DecodeForLog(v538[v546]);
          const v548 = v547.monitorIp && v547.monitorIp.indexOf("127.0.0.1") === -v526.mscPq(519415, 519414);
          v547.monitorIp = v548 ? v547.monitorIp : v531;
          v547.userId = v547.userId || "";
          v533 = v547.uploadType;
          const {
            accountInfo: _0x28b801
          } = vRequire25;
          const {
            messageQueue: _0x286055
          } = _0x28b801;
          const {
            webMonitorId: _0x5babb9
          } = v547;
          if (global.monitorInfo.cacheWebMonitorIdList && global.monitorInfo.cacheWebMonitorIdList.indexOf(_0x5babb9) === -1) {
            console.log(_0x5babb9 + " 项目不存在，或者处于关闭状态，日志被过滤；缓存Id列表为：" + global.monitorInfo.cacheWebMonitorIdList.toString());
            return;
          }
          global.monitorInfo.logCountInMinute++;
          if (_0x286055.enable === true) {
            if (v526.jdTrJ(v533, v526.ujgqw)) {
              v547.browserInfo = v532;
            }
            const v549 = JSON.stringify(v547);
            v45.sendQueueMsg("webfunny_monitor_logs", v549, p660 => {}, p661 => {
              vRequire13.printError(v526.SOZFC("消息队列推送报错: ", v547.uploadType), p661);
            });
          } else {
            C9.handleLogInfo(v547, v532);
          }
        }
      } catch (_0x730c2e) {
        console.log(v526.PTqdv, _0x730c2e);
        p642.response.status = 200;
        p642.body = vRequire14.SUCCESS_200("fail", {
          signature: v529
        });
      }
    }
  }
  static async ["trace"](p662) {
    const v550 = {
      mtNTx: "接口进入",
      SwVja: "wf-user-info",
      wjPaE: "==请求参数==",
      UAjPg: "==请求头=="
    };
    console.log(v550.mtNTx);
    console.log(p662.header);
    console.log(p662.request[v550.SwVja]);
    console.log(p662.request.body);
    vRequire13.printInfo(v550.wjPaE + JSON.stringify(p662.request.body));
    vRequire13.printInfo(v550.UAjPg + JSON.stringify(p662.header));
    p662.response.status = 200;
    p662.body = vRequire14.SUCCESS_200("success", 0);
  }
  static async upMyLog(p663) {
    const v551 = {
      JKmkP: function (p664, p665) {
        return p664 ^ p665;
      },
      hUenc: function (p666, p667) {
        return p666 ^ p667;
      },
      mDVfi: "number",
      oRmGw: function (p668, p669) {
        return p668 + p669;
      },
      nQudI: function (p670, p671) {
        return p670 ^ p671;
      },
      taIhq: function (p672, p673) {
        return p672 ^ p673;
      },
      gzGKm: "CUSTOMER_PV",
      GVNys: "\\d{2}",
      QjYum: function (p674, p675) {
        return p674 + p675;
      },
      ouzWe: function (p676, p677) {
        return p676 ^ p677;
      },
      oZqCe: function (p678, p679) {
        return p678(p679);
      },
      rugit: "request",
      Swucj: "CUSTOMIZE_BEHAVIOR"
    };
    const v552 = p663.req;
    const v553 = global.monitorInfo;
    if (v553.purchaseCodeValid !== v46) {
      p663.response.status = v551.JKmkP(569337, 569137);
      p663.body = vRequire14.SUCCESS_200("" + vRequire7.b64DecodeUnicode(vRequire30.INVALID_MSG1), false);
      return;
    }
    if (v553.logServerStatus !== true) {
      p663.response.status = 200;
      p663.body = vRequire14.SUCCESS_200("" + vRequire7.b64DecodeUnicode(vRequire30.SERVER_STOP), false);
      return;
    }
    p663.response.status = v551.JKmkP(376326, 376526);
    p663.body = vRequire14.SUCCESS_200("", "");
    const v554 = v552.headers["x-forwarded-for"] || v552.connection.remoteAddress || v552.socket.remoteAddress || v552.connection.socket.remoteAddress;
    const v555 = p663.request.body.logs;
    if (!v555 && v555.length <= v551.hUenc(805307, 805307)) {
      return;
    }
    for (let v556 = 0; v556 < v555.length; v556++) {
      let v557 = v555[v556];
      const {
        uploadType: _0x14a913,
        happenTime: _0x90c87f,
        completeUrl: _0x125ab2,
        monitorIp: _0x591490
      } = v557;
      v557.happenTime = typeof _0x90c87f === v551.mDVfi ? _0x90c87f : parseInt(_0x90c87f, 10);
      const v558 = v551.oRmGw(new Date().getTimezoneOffset(), v551.nQudI(648580, 648292));
      v557.happenDate = new Date(v551.oRmGw(v557.happenTime, v558 * 60 * 1000)).Format("yyyy-MM-dd hh:mm:ss");
      v557.happenHour = v557.happenDate.substring(v551.JKmkP(610633, 610633), 13);
      v557.happenMinute = v557.happenDate.substring(v551.taIhq(842852, 842852), v551.JKmkP(444536, 444520));
      v557.simpleUrl = _0x125ab2;
      v557.monitorIp = _0x591490 ? _0x591490 : v554;
      v557.userId = vRequire7.md5Encrypt(v557.userId || "");
      const {
        webMonitorId: _0x215e65
      } = v557;
      if (global.monitorInfo.cacheWebMonitorIdList.indexOf(_0x215e65) === -1) {
        const v559 = Math.floor(Math.random() * v551.taIhq(275102, 275092));
        if (v559 === 5) {
          vRequire13.printError(_0x215e65 + " 项目不存在，或者处于关闭状态，日志被过滤");
        }
        return;
      }
      switch (_0x14a913) {
        case v551.gzGKm:
          const v560 = v552.headers["user-agent"] || "";
          const {
            country: _0x41f679,
            province: _0x41490b,
            city: _0x5c40e6,
            operators: _0x5ecdb4
          } = await vRequire7.analysisIp(_0x591490);
          v557.country = _0x41f679;
          v557.province = _0x41490b;
          v557.city = _0x5c40e6;
          v557.operators = _0x5ecdb4;
          if (v560) {
            v557.browserInfo = v560;
          }
          const v561 = v557.customerKey ? v557.customerKey.split("-") : [];
          if (v561 && v561.length > 0) {
            const v562 = v561[v561.length - v551.hUenc(143426, 143427)].match(new RegExp(v551.GVNys, "g"));
            const v563 = v551.oRmGw(v551.QjYum(v562[0], v562[v551.ouzWe(996815, 996814)]) + "-" + v562[2] + "-", v562[3]);
            v557.customerKeyCreatedDate = v563;
          }
          await CustomerPVModel.createCustomerPV(v557);
          break;
        case "JS_ERROR":
          v551.oZqCe(handleResultWhenJavascriptError, v557);
          await JavascriptErrorInfoModel.createJavascriptErrorInfo(v557);
          break;
        case "HTTP_LOG":
          v551.oZqCe(handleResultWhenHttpRequest, v557);
          const vParseInt4 = parseInt(v557.status || 0);
          try {
            let v564 = vRequire7.b64DecodeUnicode(v557.httpUrl);
            const v565 = v564.split("?")[0];
            v557.simpleHttpUrl = v565;
          } catch (_0x4224b2) {
            console.error(_0x4224b2);
          }
          if (vParseInt4 > 299) {
            await HttpErrorInfoModel.createHttpErrorInfo(v557);
          } else if (v557.statusResult === v551.rugit) {
            await HttpLogReqInfoModel.createHttpLogReqInfo(v557);
          } else {
            await HttpLogInfoModel.createHttpLogInfo(v557);
          }
          break;
        case v551.Swucj:
        default:
          await ExtendBehaviorInfoModel.createExtendBehaviorInfo(v557);
          break;
      }
    }
  }
  static async ["upMog"](p680) {
    const v566 = {
      SwtZu: function (p681, p682) {
        return p681 != p682;
      },
      qQpvW: function (p683, p684) {
        return p683 ^ p684;
      },
      gGmdS: "startList",
      KAGVR: function (p685, p686) {
        return p685 + p686;
      },
      FOHPF: "上报接口报错 -- "
    };
    const v567 = global.monitorInfo;
    if (v567.purchaseCodeValid !== v46) {
      p680.response.status = 200;
      p680.body = vRequire14.SUCCESS_200("" + vRequire7.b64DecodeUnicode(vRequire30.INVALID_MSG2), false);
      return;
    }
    if (v567.logServerStatus !== true) {
      p680.response.status = 200;
      p680.body = vRequire14.SUCCESS_200("" + vRequire7.b64DecodeUnicode(vRequire30.SERVER_STOP), false);
      return;
    }
    var v568 = p680.req;
    const v569 = v568.headers["x-forwarded-for"] || v568.connection.remoteAddress || v568.socket.remoteAddress || v568.connection.socket.remoteAddress;
    let v570 = p680.req.headers["user-agent"];
    let v571 = "";
    let v572 = p680.request.body;
    if (typeof v572 === "string" && v566.SwtZu(v572.indexOf("STAY_TIME"), -v566.qQpvW(430820, 430821))) {
      var v573 = JSON.parse(v572);
      for (let v574 in v573) {
        if (vRequire26[v574]) {
          v573[vRequire26[v574]] = v573[v574];
          delete v573[v574];
        }
      }
      C9.handleLogInfo(v573);
    } else {
      try {
        const v575 = p680.request.body;
        const v576 = v575[0] || {};
        const v577 = vRequire7.md5Encrypt(v576.userId);
        const v578 = v576.webMonitorId;
        const v579 = global.monitorInfo.userIdArray;
        let v580 = "";
        if (v579.indexOf(v577) != -1) {
          v580 = "c";
        } else {
          v580 = "d";
        }
        let v581 = global.monitorInfo[v578 + v566.gGmdS];
        if (!v581 || !(v581.length > 0)) {
          v581 = "012345";
        }
        let v582 = global.monitorInfo.waitCounts;
        p680.response.status = v566.qQpvW(754369, 754185);
        p680.body = vRequire14.SUCCESS_200("", {
          d: v580,
          c: global.monitorInfo.projectConfigs[v578]
        });
        for (var v583 = 0; v583 < v575.length; v583++) {
          if (!v575[v583]) {
            continue;
          }
          const v584 = v575[v583];
          v584.monitorIp = v584.monitorIp ? v584.monitorIp : v569;
          v584.userId = vRequire7.md5Encrypt(v584.userId || "");
          v584.completeUrl = vRequire7.b64DecodeUnicode(v584.completeUrl);
          v571 = v584.uploadType;
          const {
            accountInfo: _0x733a8b
          } = vRequire25;
          const {
            messageQueue: _0x35fc3b
          } = _0x733a8b;
          if (_0x35fc3b.enable === true) {
            const v585 = JSON.stringify(v584);
            v45.sendQueueMsg("webfunny_upload_mog", v585, p687 => {}, p688 => {
              vRequire13.printError("消息队列推送报错: " + v584.uploadType, p688);
            });
          } else {
            C9.handleLogInfo(v584, v570);
          }
        }
      } catch (_0x2376d8) {
        p680.response.status = 200;
        p680.body = vRequire14.SUCCESS_200("", "");
        const v586 = typeof v572 == "object" ? JSON.stringify(v572) : v572;
        vRequire13.printError(v566.KAGVR(v566.FOHPF, v571));
        vRequire13.printError(v586);
        vRequire13.printError("堆栈 -- ", _0x2376d8);
      }
    }
  }
  static async handleLogInfo(p689, p690) {
    const v587 = {
      PXskK: function (p691, p692) {
        return p691 ^ p692;
      },
      bPMFp: "处理url中的特殊字符异常：",
      otYlJ: function (p693, p694) {
        return p693 ^ p694;
      },
      OOkAj: "HTTP_LOG",
      PhrCw: function (p695, p696) {
        return p695(p696);
      },
      pAFdj: function (p697, p698) {
        return p697 > p698;
      },
      dlBOk: function (p699, p700) {
        return p699 === p700;
      },
      IzRLZ: "createHttpErrorInfo",
      MKkOw: "createHttpLogReqInfo",
      UeyId: function (p701, p702) {
        return p701 ^ p702;
      },
      Ugwyb: "createHttpLogInfos",
      fxXjH: function (p703, p704) {
        return p703 ^ p704;
      },
      bZspf: function (p705, p706) {
        return p705 - p706;
      },
      jSWNp: function (p707, p708) {
        return p707 ^ p708;
      },
      OwAai: function (p709, p710) {
        return p709 ^ p710;
      },
      cuLPo: function (p711, p712) {
        return p711 ^ p712;
      },
      KFxvy: function (p713, p714) {
        return p713 ^ p714;
      },
      ngkrF: function (p715, p716) {
        return p715 * p716;
      },
      MDLDC: "n_uv",
      ULuCx: "createCustomerPVs",
      IUnCu: "CUS_LEAVE",
      gtOhN: "createVideoLog",
      zINck: "PAGE_LOAD",
      wPLRR: function (p717, p718) {
        return p717(p718);
      },
      IYEHc: "CUSTOMIZE_BEHAVIOR"
    };
    const {
      webMonitorId: _0x3699ec
    } = p689;
    C2.saveLogCountInMemory(_0x3699ec, v587.PXskK(340553, 340552));
    const v588 = new RegExp("((2(5[0-5]|[0-4]\\d))|[0-1]?\\d{1,2})(\\.((2(5[0-5]|[0-4]\\d))|[0-1]?\\d{1,2})){3}", "g");
    let v589 = [];
    try {
      v589 = p689.monitorIp ? p689.monitorIp.match(v588) : [];
      p689.monitorIp = v589 && v589.length > 0 ? v589[0] : p689.monitorIp;
    } catch (_0x1f937b) {
      console.log("IP转换异常：", p689.monitorIp);
    }
    try {
      p689.completeUrl = (p689.completeUrl || p689.simpleUrl || "").replace(new RegExp("'", "g"), "");
      p689.simpleUrl = (p689.simpleUrl || p689.completeUrl || "").replace(new RegExp("'", "g"), "");
    } catch (_0x2d6621) {
      console.log(v587.bPMFp, _0x2d6621);
    }
    if (p689.customerKey && p689.customerKey.length > 55) {
      p689.customerKey = p689.customerKey.substring(v587.PXskK(271420, 271420), v587.PXskK(466967, 466977));
    }
    if (p689.pageKey && p689.pageKey.length > v587.PXskK(669329, 669365)) {
      p689.pageKey = p689.pageKey.substring(0, 35);
    }
    const v590 = new Date().getTimezoneOffset() + 480;
    const v591 = parseInt(p689.happenTime, v587.PXskK(816105, 816099)) + v590 * 60 * 1000;
    p689.happenDate = new Date(v591).Format("yyyy-MM-dd hh:mm:ss");
    p689.happenHour = p689.happenDate.substring(v587.PXskK(913770, 913770), v587.otYlJ(330153, 330148));
    p689.happenMinute = p689.happenDate.substring(0, v587.PXskK(530139, 530123));
    p689.country = "未知";
    p689.province = "未知";
    p689.city = "未知";
    const v592 = p689.monitorIp;
    CommonModel.calcFlowData(_0x3699ec, p689.uploadType, 1);
    switch (p689.uploadType) {
      case "ELE_BEHAVIOR":
        C9.selectLogInfoIntoQueue(p689, "createBehaviorInfo", "createBehaviorInfos");
        break;
      case "JS_ERROR":
        handleResultWhenJavascriptError(p689);
        p689.errorMessage = p689.errorMessage.replace(new RegExp("'", "g"), "''");
        if (!p689.simpleErrorMessage) {
          p689.simpleErrorMessage = p689.errorMessage || "";
        }
        if (!p689.errorStack) {
          p689.errorStack = p689.errorMessage || "";
        }
        p689.simpleErrorMessage = p689.simpleErrorMessage.replace(new RegExp("'", "g"), "''");
        p689.errorStack = p689.errorStack.replace(new RegExp("'", "g"), "''");
        C9.selectLogInfoIntoQueue(p689, "createJavascriptErrorInfo", "createJavascriptErrorInfos");
        break;
      case v587.OOkAj:
        const v593 = await vRequire7.analysisIp(v592);
        p689.country = v593.country;
        p689.province = v593.province;
        p689.city = v593.city;
        p689.operators = v593.operators;
        handleResultWhenHttpRequest(p689);
        const v594 = v587.PhrCw(parseInt, p689.status || v587.PXskK(127106, 127106));
        try {
          let v595 = vRequire7.b64DecodeUnicode(p689.httpUrl);
          const v596 = v595.split("?")[0];
          p689.simpleHttpUrl = v596;
        } catch (_0x36c596) {
          console.error(_0x36c596);
        }
        if (v587.pAFdj(v594, 299) || v587.dlBOk(v594 * 1, 0)) {
          p689.uploadType = "HTTP_ERROR";
          C9.selectLogInfoIntoQueue(p689, v587.IzRLZ, "createHttpErrorInfos");
        } else if (p689.statusResult === "request") {
          p689.uploadType = "HTTP_LOG_REQ";
          C9.selectLogInfoIntoQueue(p689, v587.MKkOw, "createHttpLogReqInfos");
        } else {
          const v597 = p689.loadTime || 0;
          p689.loadTimeForSecond = Math.ceil(v597 * 1 / 1000);
          p689.loadTimeForSecond = v587.pAFdj(p689.loadTimeForSecond, 30) ? v587.UeyId(102206, 102177) : p689.loadTimeForSecond;
          C9.selectLogInfoIntoQueue(p689, "createHttpLogInfo", v587.Ugwyb);
          C9.addSegmentToQueue(p689.segment);
        }
        break;
      case "SCREEN_SHOT":
        await ScreenShotInfoModel.createScreenShotInfo(p689);
        break;
      case "CUSTOMER_PV":
        CustomerPVModel.storeAliveCountIn5Minutes(p689);
        const {
          country: _0x9b938,
          province: _0x12885f,
          city: _0x49a170,
          operators: _0x16356c
        } = await vRequire7.analysisIp(v592);
        p689.country = _0x9b938;
        p689.province = _0x12885f;
        p689.city = _0x49a170;
        p689.operators = _0x16356c;
        try {
          p689.referrer = vRequire7.b64DecodeUnicode(p689.referrer || "");
        } catch (_0x537c7e) {}
        if (p690) {
          p689.browserInfo = p690;
        }
        const v598 = p689.customerKey ? p689.customerKey.split("-") : [];
        if (v598 && v587.pAFdj(v598.length, v587.fxXjH(377903, 377903))) {
          const v599 = v598[v587.bZspf(v598.length, 1)].match(new RegExp("\\d{2}", "g"));
          const v600 = v599[v587.jSWNp(367114, 367114)] + v599[v587.OwAai(852354, 852355)] + "-" + v599[2] + "-" + v599[3];
          const v601 = "" + v599[v587.cuLPo(594425, 594425)] + v599[1] + "-" + v599[2] + "-" + v599[3] + " " + v599[v587.KFxvy(434539, 434543)] + ":" + v599[5] + ":" + v599[6];
          const v602 = new Date(v601).getTime();
          const v603 = new Date().getTime();
          if (v603 - v602 < v587.ngkrF(10, 1000)) {
            p689.newStatus = v587.MDLDC;
          }
          p689.customerKeyCreatedDate = v600;
        }
        if (p689.monitorIp && p689.browserInfo) {
          C9.selectLogInfoIntoQueue(p689, "createCustomerPV", v587.ULuCx);
        }
        break;
      case v587.IUnCu:
        C9.selectLogInfoIntoQueue(p689, "createCustomerPvLeave", "createCustomerPvLeaves");
        break;
      case "STAY_TIME":
        await CustomerStayTimeModel.createCustomerStayTime(p689);
        break;
      case "VIDEOS_EVENT":
        C9.selectLogInfoIntoQueue(p689, v587.gtOhN, "createVideoLogs");
        break;
      case "LOAD_PAGE":
        await LoadPageInfoModel.createLoadPageInfo(p689);
        break;
      case v587.zINck:
        const v604 = await vRequire7.analysisIp(v592);
        p689.country = v604.country;
        p689.province = v604.province;
        p689.city = v604.city;
        p689.operators = v604.operators;
        await PageLoadInfoModel.createPageLoadInfo(p689);
        break;
      case "RESOURCE_LOAD":
        if (p689.sourceUrl) {
          v587.wPLRR(handleResultWhenResourceError, p689);
          C9.selectLogInfoIntoQueue(p689, "createResourceLoadInfo", "createResourceLoadInfos");
        }
        break;
      case "CONSOLE_LOG":
      case "CONSOLE_WARN":
        C9.selectLogInfoIntoQueue(p689, "createLocalLog", "createLocalLogs");
        break;
      case v587.IYEHc:
      default:
        await ExtendBehaviorInfoModel.createExtendBehaviorInfo(p689);
        break;
    }
    const v605 = p689.userId;
    const v606 = global.monitorInfo.debugOnlineForUserIdArray.connect;
    const v607 = global.monitorInfo.debugInfoArray;
    if (v606.indexOf(v605) != -1) {
      if (!v607[v605]) {
        v607[v605] = [];
      }
      if (v607[v605].length > 3000) {
        v607[v605].splice(0, 1);
      }
      v607[v605].push(p689);
    }
  }
  static async ["addSegmentToQueue"](p719 = "") {
    const v608 = {
      scNvC: function (p720, p721) {
        return p720 > p721;
      }
    };
    if (!p719) {
      return;
    }
    if (!global.monitorInfo.segmentQueue) {
      global.monitorInfo.segmentQueue = [];
    }
    let v609 = global.monitorInfo.segmentQueue;
    if (v608.scNvC(v609.length, 100)) {
      C9.uploadSegments();
    } else {
      v609.push(p719);
    }
  }
  static async ["uploadSegments"]() {
    const v610 = {
      pQgYY: "application/json"
    };
    if (!global.monitorInfo.segmentQueue) {
      global.monitorInfo.segmentQueue = [];
    }
    if (!global.monitorInfo.segmentQueue.length) {
      return;
    }
    let v611 = global.monitorInfo.segmentQueue;
    if (!accountInfo.segmentUrl) {
      global.monitorInfo.segmentQueue = [];
      return;
    }
    vRequire15(accountInfo.segmentUrl, {
      method: "POST",
      body: JSON.stringify(v611),
      headers: {
        "Content-Type": v610.pQgYY
      }
    }).catch(p722 => {
      console.log("segment上报异常", p722);
      console.log(accountInfo.segmentUrl);
    });
    global.monitorInfo.segmentQueue = [];
  }
  static async ["selectLogInfoIntoQueue"](p723, p724, p725) {
    const v612 = {
      rfwIn: "ELE_BEHAVIOR",
      DNUhM: "HTTP_ERROR",
      PhaFr: "RESOURCE_LOAD",
      TFxHf: "日志并非今天的数据，拦截丢弃 happenDateStr：",
      vfoup: function (p726, p727) {
        return p726 === p727;
      },
      HyIPp: function (p728, p729) {
        return p728 ^ p729;
      },
      YUdBe: function (p730, p731) {
        return p730 < p731;
      },
      ScfWn: function (p732, p733) {
        return p732 - p733;
      },
      sWJrs: "实时日志批量插入异常：",
      ACctv: function (p734, p735) {
        return p734 <= p735;
      },
      pXBah: "批量插入异常："
    };
    const {
      batchInsert: _0xa6e43
    } = accountInfo;
    const {
      limitQueueLength: _0x1d58c0
    } = _0xa6e43;
    if (!global.monitorInfo.lastRecordTime) {
      global.monitorInfo.lastRecordTime = new Date().getTime();
    }
    const v613 = p723.uploadType;
    const v614 = global.monitorInfo.logInfoQueue;
    const v615 = global.monitorInfo.realTimeLogQueue;
    let v616 = null;
    switch (p723.uploadType) {
      case "CUSTOMER_PV":
        v616 = CustomerPVModel;
        break;
      case v612.rfwIn:
        v616 = BehaviorInfoModel;
        break;
      case "JS_ERROR":
        v616 = JavascriptErrorInfoModel;
        break;
      case "HTTP_LOG":
        v616 = HttpLogInfoModel;
        break;
      case "HTTP_LOG_REQ":
        v616 = HttpLogReqInfoModel;
        break;
      case v612.DNUhM:
        v616 = HttpErrorInfoModel;
        break;
      case "CUS_LEAVE":
        v616 = CustomerPvLeaveModel;
        break;
      case v612.PhaFr:
        v616 = ResourceLoadInfoModel;
        break;
      case "VIDEOS_EVENT":
        v616 = VideoLogModel;
        break;
      case "CONSOLE_LOG":
      case "CONSOLE_WARN":
        v616 = LocalLogModel;
        break;
      default:
        break;
    }
    if (!v616) {
      return;
    }
    let v617 = p723.happenDate.substring(0, 10);
    let v618 = new Date().Format("yyyy-MM-dd");
    if (v617 !== v618) {
      console.log(v612.TFxHf, v617);
      return;
    }
    if (!v614[p723.webMonitorId]) {
      v614[p723.webMonitorId] = {};
    }
    if (!v614[p723.webMonitorId][v613]) {
      v614[p723.webMonitorId][v613] = [];
    }
    if (!v615[p723.webMonitorId]) {
      v615[p723.webMonitorId] = {};
    }
    if (!v615[p723.webMonitorId][v613]) {
      v615[p723.webMonitorId][v613] = [];
    }
    if (p723.recordVideoStatus === "on") {
      if (v615[p723.webMonitorId][v613].length <= _0x1d58c0) {
        if (v613 === "CUSTOMER_PV") {
          const v619 = v615[p723.webMonitorId][v613];
          if (v612.vfoup(v619.length, 0)) {
            v615[p723.webMonitorId][v613].push(p723);
          } else {
            const v620 = v619[v619.length - 1];
            const v621 = v620.happenTime * v612.HyIPp(397373, 397372);
            const v622 = p723.happenTime * 1;
            if (!v612.YUdBe(v612.ScfWn(v622, v621), 1000) || !v612.vfoup(v620.completeUrl, p723.completeUrl)) {
              v615[p723.webMonitorId][v613].push(p723);
            } else {}
          }
        } else {
          v615[p723.webMonitorId][v613].push(p723);
        }
      } else {
        try {
          console.log("实时日志已达到数量上限，立即上报;");
          let v623 = v615[p723.webMonitorId][v613];
          v616[p725](v623);
          global.monitorInfo.lastRecordTime = new Date().getTime();
          v615[p723.webMonitorId][v613] = [];
        } catch (_0xe4699e) {
          vRequire13.printError(v612.sWJrs, _0xe4699e);
        }
      }
    } else if (v612.ACctv(v614[p723.webMonitorId][v613].length, _0x1d58c0)) {
      v614[p723.webMonitorId][v613].push(p723);
    } else {
      try {
        console.log("日志已达到数量上限，立即上报;");
        let v624 = v614[p723.webMonitorId][v613];
        v616[p725](v624);
        global.monitorInfo.lastRecordTime = new Date().getTime();
        v614[p723.webMonitorId][v613] = [];
      } catch (_0x3a7f9a) {
        vRequire13.printError(v612.pXBah, _0x3a7f9a);
      }
    }
  }
  static async ["handleLogInfoQueue"]() {
    const v625 = {
      mAtag: "CUSTOMER_PV",
      WJaOV: "HTTP_LOG",
      rFUZJ: "HTTP_LOG_REQ",
      OqJoD: "HTTP_ERROR",
      fuiHt: "ELE_BEHAVIOR",
      SrtVQ: "RESOURCE_LOAD",
      TgWgZ: "CUS_LEAVE",
      jgiWE: "VIDEOS_EVENT",
      njYsD: "CONSOLE_LOG",
      FdfMD: "CONSOLE_WARN"
    };
    const v626 = global.monitorInfo.logInfoQueue;
    for (let v627 in v626) {
      let v628 = v626[v627];
      if (v628.CUSTOMER_PV) {
        CustomerPVModel.createCustomerPVs(v628[v625.mAtag]);
        v628[v625.mAtag] = [];
      }
      if (v628[v625.WJaOV]) {
        HttpLogInfoModel.createHttpLogInfos(v628[v625.WJaOV]);
        v628.HTTP_LOG = [];
      }
      if (v628[v625.rFUZJ]) {
        HttpLogReqInfoModel.createHttpLogReqInfos(v628.HTTP_LOG_REQ);
        v628[v625.rFUZJ] = [];
      }
      if (v628[v625.OqJoD]) {
        HttpErrorInfoModel.createHttpErrorInfos(v628[v625.OqJoD]);
        v628.HTTP_ERROR = [];
      }
      if (v628[v625.fuiHt]) {
        BehaviorInfoModel.createBehaviorInfos(v628.ELE_BEHAVIOR);
        v628.ELE_BEHAVIOR = [];
      }
      if (v628.JS_ERROR) {
        JavascriptErrorInfoModel.createJavascriptErrorInfos(v628.JS_ERROR);
        v628.JS_ERROR = [];
      }
      if (v628.RESOURCE_LOAD) {
        ResourceLoadInfoModel.createResourceLoadInfos(v628[v625.SrtVQ]);
        v628.RESOURCE_LOAD = [];
      }
      if (v628[v625.TgWgZ]) {
        CustomerPvLeaveModel.createCustomerPvLeaves(v628.CUS_LEAVE);
        v628[v625.TgWgZ] = [];
      }
      if (v628[v625.jgiWE]) {
        VideoLogModel.createVideoLogs(v628.VIDEOS_EVENT);
        v628[v625.jgiWE] = [];
      }
      if (v628[v625.njYsD]) {
        LocalLogModel.createLocalLogs(v628.CONSOLE_LOG);
        v628.CONSOLE_LOG = [];
      }
      if (v628.CONSOLE_WARN) {
        LocalLogModel.createLocalLogs(v628[v625.FdfMD]);
        v628.CONSOLE_WARN = [];
      }
    }
  }
  static async ["handleRealTimeLogInfoQueue"]() {
    const v629 = {
      mtjLu: "CUSTOMER_PV",
      QHdMQ: "HTTP_LOG",
      GyIRn: "HTTP_LOG_REQ",
      ZUBMt: "HTTP_ERROR",
      EQRfq: "ELE_BEHAVIOR",
      ceDyF: "CONSOLE_WARN"
    };
    const v630 = global.monitorInfo.realTimeLogQueue;
    for (let v631 in v630) {
      let v632 = v630[v631];
      if (v632.CUSTOMER_PV) {
        CustomerPVModel.createCustomerPVs(v632[v629.mtjLu]);
        v632[v629.mtjLu] = [];
      }
      if (v632.HTTP_LOG) {
        HttpLogInfoModel.createHttpLogInfos(v632[v629.QHdMQ]);
        v632.HTTP_LOG = [];
      }
      if (v632.HTTP_LOG_REQ) {
        HttpLogReqInfoModel.createHttpLogReqInfos(v632.HTTP_LOG_REQ);
        v632[v629.GyIRn] = [];
      }
      if (v632.HTTP_ERROR) {
        HttpErrorInfoModel.createHttpErrorInfos(v632[v629.ZUBMt]);
        v632.HTTP_ERROR = [];
      }
      if (v632[v629.EQRfq]) {
        BehaviorInfoModel.createBehaviorInfos(v632.ELE_BEHAVIOR);
        v632.ELE_BEHAVIOR = [];
      }
      if (v632.JS_ERROR) {
        JavascriptErrorInfoModel.createJavascriptErrorInfos(v632.JS_ERROR);
        v632.JS_ERROR = [];
      }
      if (v632.RESOURCE_LOAD) {
        ResourceLoadInfoModel.createResourceLoadInfos(v632.RESOURCE_LOAD);
        v632.RESOURCE_LOAD = [];
      }
      if (v632.CUS_LEAVE) {
        CustomerPvLeaveModel.createCustomerPvLeaves(v632.CUS_LEAVE);
        v632.CUS_LEAVE = [];
      }
      if (v632.VIDEOS_EVENT) {
        VideoLogModel.createVideoLogs(v632.VIDEOS_EVENT);
        v632.VIDEOS_EVENT = [];
      }
      if (v632.CONSOLE_LOG) {
        LocalLogModel.createLocalLogs(v632.CONSOLE_LOG);
        v632.CONSOLE_LOG = [];
      }
      if (v632.CONSOLE_WARN) {
        LocalLogModel.createLocalLogs(v632[v629.ceDyF]);
        v632[v629.ceDyF] = [];
      }
    }
  }
  static async upDLog(p736) {
    const v633 = {
      XaGyn: function (p737, p738) {
        return p737 ^ p738;
      },
      ADWaS: "Debug信息上报失败："
    };
    let v634 = "";
    try {
      const v635 = p736.request.body;
      const {
        localInfo: _0x4e705c,
        sessionInfo: _0x510da0,
        cookieInfo: _0x2d0444,
        consoleInfo: _0x210370,
        warnInfo: _0x574d28,
        videosInfo: _0x40f44f,
        userId: _0xe17b5
      } = v635;
      const v636 = global.monitorInfo.debugClearLocalInfo;
      const v637 = v636.indexOf(_0xe17b5);
      let v638 = 0;
      if (v637 !== -v633.XaGyn(669291, 669290)) {
        v638 = 1;
        v636.splice(v637, 1);
      }
      p736.response.status = 200;
      p736.body = vRequire14.SUCCESS_200("", {
        clear: v638
      });
      let v639 = global.monitorInfo.debugInfo;
      if (_0x4e705c) {
        const v640 = vRequire7.b64DecodeUnicode(_0x4e705c);
        const v641 = JSON.parse(v640);
        if (!v639[_0xe17b5]) {
          v639[_0xe17b5] = {};
        }
        v639[_0xe17b5].localInfo = v641;
      } else {
        if (!v639[_0xe17b5]) {
          v639[_0xe17b5] = {};
        }
        v639[_0xe17b5].localInfo = {};
      }
      if (_0x510da0) {
        const v642 = vRequire7.b64DecodeUnicode(_0x510da0);
        const v643 = JSON.parse(v642);
        if (!v639[_0xe17b5]) {
          v639[_0xe17b5] = {};
        }
        v639[_0xe17b5].sessionInfo = v643;
      } else {
        v639[_0xe17b5].sessionInfo = {};
      }
      if (_0x2d0444) {
        const v644 = vRequire7.b64DecodeUnicode(_0x2d0444);
        const v645 = vRequire7.parseCookies(v644);
        if (!v639[_0xe17b5]) {
          v639[_0xe17b5] = {};
        }
        v639[_0xe17b5].cookieInfo = v645;
      } else {
        v639[_0xe17b5].cookieInfo = {};
      }
      if (_0x210370 || _0x574d28) {
        let v646 = "log";
        let v647 = null;
        if (_0x210370) {
          v646 = "log";
          v647 = _0x210370;
        } else if (_0x574d28) {
          v646 = "warn";
          v647 = _0x574d28;
        }
        if (!v647) {
          return;
        }
        const v648 = vRequire7.b64DecodeUnicode(v647);
        const v649 = JSON.parse(v648);
        v649.type = v646;
        const v650 = v649.userId;
        if (!v639[v650]) {
          v639[v650] = {};
        }
        if (!v639[v650].consoleInfo) {
          v639[v650].consoleInfo = {
            log: []
          };
        }
        const v651 = v639[v650].consoleInfo.log;
        v651.push(v649);
        if (v651.length > 100) {
          v651.splice(v651.length - 100, v651.length);
        }
      }
    } catch (_0x504e0b) {
      p736.response.status = 200;
      p736.body = vRequire14.SUCCESS_200("fail", 1);
      vRequire13.printError(v633.ADWaS);
      vRequire13.printError(v634, _0x504e0b);
    }
  }
}
class C10 {
  static async getStayTimeForEveryDay(p739) {
    const v652 = {
      YxIEm: "day7"
    };
    let v653 = p739.request.body;
    const v654 = JSON.parse(v653);
    let v655 = null;
    try {
      v655 = await CustomerStayTimeModel.getStayTimeForEveryDay(v654);
    } catch (_0x46dd79) {
      vRequire13.printError("停留时间查询失败：", _0x46dd79);
      v655 = [{
        date: "day1",
        count: "0"
      }, {
        date: "day2",
        count: "0"
      }, {
        date: "day3",
        count: "0"
      }, {
        date: "day4",
        count: "0"
      }, {
        date: "day5",
        count: "0"
      }, {
        date: "day6",
        count: "0"
      }, {
        date: v652.YxIEm,
        count: "0"
      }];
    }
    p739.response.status = 200;
    p739.body = vRequire14.SUCCESS_200("查询信息列表成功！", v655);
  }
  static async getStayTimeForHour(p740) {
    const v656 = {
      tDZKo: function (p741, p742) {
        return p741 ^ p742;
      }
    };
    let v657 = p740.request.body;
    const v658 = JSON.parse(v657);
    let v659 = [];
    await CustomerStayTimeModel.getStayTimeForHour(v658).then(p743 => {
      p743.forEach(p744 => {
        p744.count = vRequire8.toFixed(p744.count / 60, 2);
      });
      v659 = p743;
    });
    let v660 = [];
    await CustomerStayTimeModel.getStayTimeForHourSevenDaysAgo(v658).then(p745 => {
      p745.forEach(p746 => {
        p746.count = vRequire8.toFixed(p746.count / 60, 2);
      });
      v660 = p745;
    });
    p740.response.status = v656.tDZKo(809122, 809066);
    p740.body = vRequire14.SUCCESS_200("查询信息列表成功！", {
      today: v659,
      seven: v660
    });
  }
  static async getAvgStayTimeForDay(p747) {
    const v661 = {
      oyQKn: function (p748, p749) {
        return p748 ^ p749;
      },
      vbnJn: function (p750, p751) {
        return p750 - p751;
      }
    };
    let v662 = p747.request.body;
    const v663 = JSON.parse(v662);
    const {
      webMonitorId: _0x2ee228,
      timeSize = v661.oyQKn(463927, 463913)
    } = v663;
    const v664 = vRequire8.addDays(v661.vbnJn(0, timeSize));
    let v665 = await CustomerStayTimeModel.getStayTimeForMonth(_0x2ee228, UPLOAD_TYPE.STAY_TIME_FOR_DAY, v664);
    let v666 = await CustomerStayTimeModel.getStayTimeForMonth(_0x2ee228, UPLOAD_TYPE.ACTIVE_TIME_FOR_DAY, v664);
    v665 = vRequire8.handleDateResult(v665, timeSize);
    v666 = vRequire8.handleDateResult(v666, timeSize);
    p747.response.status = 200;
    p747.body = vRequire14.SUCCESS_200("查询信息列表成功！", {
      stayTimeData: v665,
      activeTimeData: v666
    });
  }
  static async getStayTimeScopeForDay(p752) {
    const v667 = {
      RFcws: function (p753, p754) {
        return p753 ^ p754;
      },
      NVKbM: "查询信息列表成功！"
    };
    let v668 = p752.request.body;
    const v669 = JSON.parse(v668);
    const {
      webMonitorId: _0x4f5908,
      timeSize = v667.RFcws(145419, 145419)
    } = v669;
    let v670 = await CustomerStayTimeModel.getStayTimeScopeForDay(_0x4f5908, timeSize);
    let v671 = await CustomerStayTimeModel.getActiveTimeScopeForDay(_0x4f5908, timeSize);
    p752.response.status = 200;
    p752.body = vRequire14.SUCCESS_200(v667.NVKbM, {
      stayScopeData: v670,
      activeScopeData: v671
    });
  }
  static async ["getPageListOrderByStayTime"](p755) {
    const v672 = {
      ixFcV: "stayTime",
      UTzRA: "查询信息列表成功！"
    };
    let v673 = p755.request.body;
    const v674 = JSON.parse(v673);
    const {
      webMonitorId: _0x2bda2c,
      timeSize = 0
    } = v674;
    let v675 = await CustomerStayTimeModel.getPageListOrderByStayTime(_0x2bda2c, timeSize, v672.ixFcV);
    let v676 = await CustomerStayTimeModel.getPageListOrderByStayTime(_0x2bda2c, timeSize, "activeTime");
    p755.response.status = 200;
    p755.body = vRequire14.SUCCESS_200(v672.UTzRA, {
      stayTimeOrderList: v675,
      activeTimeOrderList: v676
    });
  }
  static async getStayTimeForDayByPerson(p756) {
    const v677 = {
      qmCuw: function (p757, p758) {
        return p757 - p758;
      },
      FSrnF: "stayTime",
      lTOOr: "activeTime",
      dNqxz: function (p759, p760) {
        return p759 ^ p760;
      },
      VYHSz: function (p761, p762) {
        return p761 ^ p762;
      },
      DnkxK: "查询信息列表成功！"
    };
    let v678 = p756.request.body;
    const v679 = JSON.parse(v678);
    const {
      webMonitorId: _0x29f58f,
      timeSize = 30,
      userId: _0x3391f3
    } = v679;
    const v680 = [];
    const v681 = [];
    for (let v682 = 0; v682 < timeSize; v682++) {
      let v683 = vRequire8.addDays(v677.qmCuw(0, v682));
      let v684 = null;
      let v685 = null;
      await CustomerStayTimeModel.getStayTimeForDayByPerson(_0x29f58f, v682, _0x3391f3, v677.FSrnF).then(p763 => {
        v684 = p763;
      }).catch(() => {
        v684 = [{
          count: 0
        }];
      });
      await CustomerStayTimeModel.getStayTimeForDayByPerson(_0x29f58f, v682, _0x3391f3, v677.lTOOr).then(p764 => {
        v685 = p764;
      }).catch(() => {
        v685 = [{
          count: 0
        }];
      });
      let v686 = v684[0].count ? vRequire8.toFixed(v684[0].count / 1000, v677.dNqxz(452274, 452272)) : v677.VYHSz(999043, 999043);
      let v687 = v685[0].count ? vRequire8.toFixed(v685[0].count / 1000, 2) : 0;
      v680.push({
        time: v683,
        count: v686
      });
      v681.push({
        time: v683,
        count: v687
      });
    }
    p756.response.status = 200;
    p756.body = vRequire14.SUCCESS_200(v677.DnkxK, {
      stayTimeList: v680.reverse(),
      activeTimeList: v681.reverse()
    });
  }
  static async getStayTimeForBehaviorByPerson(p765) {
    let v688 = p765.request.body;
    const v689 = JSON.parse(v688);
    const {
      webMonitorId: _0x198bca,
      timeIndex = 0,
      userId: _0x432963
    } = v689;
    let v690 = null;
    let v691 = null;
    await CustomerStayTimeModel.getStayTimeForBehaviorByPerson(_0x198bca, timeIndex, _0x432963).then(p766 => {
      v690 = p766;
    }).catch(() => {
      v690 = [];
    });
    await CustomerStayTimeModel.getStayTimeForBehaviorWaterfallByPerson(_0x198bca, timeIndex, _0x432963).then(p767 => {
      v691 = p767;
    }).catch(() => {
      v691 = [];
    });
    p765.response.status = 200;
    p765.body = vRequire14.SUCCESS_200("查询信息列表成功！", {
      behavior: v690,
      waterfall: v691
    });
  }
}
class C11 {
  static async getStayTimeForEveryDay(p768) {
    const v692 = {
      Lxdvy: "停留时间查询失败：",
      vPZeM: "day2",
      ObpyO: "day5",
      OMIgu: "day7"
    };
    let v693 = p768.request.body;
    const v694 = JSON.parse(v693);
    let v695 = null;
    try {
      v695 = await CustomerPvLeaveModel.getStayTimeForEveryDay(v694);
    } catch (_0x5ee140) {
      vRequire13.printError(v692.Lxdvy, _0x5ee140);
      v695 = [{
        date: "day1",
        count: "0"
      }, {
        date: v692.vPZeM,
        count: "0"
      }, {
        date: "day3",
        count: "0"
      }, {
        date: "day4",
        count: "0"
      }, {
        date: v692.ObpyO,
        count: "0"
      }, {
        date: "day6",
        count: "0"
      }, {
        date: v692.OMIgu,
        count: "0"
      }];
    }
    p768.response.status = 200;
    p768.body = vRequire14.SUCCESS_200("查询信息列表成功！", v695);
  }
  static async getCusLeavePercentByHour(p769) {
    let v696 = p769.request.body;
    const v697 = JSON.parse(v696);
    const {
      timeSize: _0x4a6b37,
      webMonitorId: _0xe26d32,
      scope: _0x2dcccf
    } = v697;
    let v698 = [];
    await CustomerPvLeaveModel.getCusLeavePercentByTime({
      timeSize: _0x4a6b37,
      webMonitorId: _0xe26d32,
      scope: 0
    }).then(p770 => {
      v698 = p770;
      v698.forEach(p771 => {
        p771.hour = p771.hour.substring(5);
      });
    });
    let v699 = [];
    await CustomerPvLeaveModel.getCusLeavePercentByTime({
      timeSize: _0x4a6b37,
      webMonitorId: _0xe26d32,
      scope: 7
    }).then(p772 => {
      v699 = p772;
      v699.forEach(p773 => {
        p773.hour = p773.hour.substring(5);
      });
    });
    p769.response.status = 200;
    p769.body = vRequire14.SUCCESS_200("查询信息列表成功！", {
      today: v698,
      seven: v699
    });
  }
}
class C12 {}
let vF25 = "0.2.73";
const v700 = 30000000;
class C13 {
  static async consoleLogo() {
    C2.consoleLogo();
  }
  static async consoleInfo(p779) {
    C2.consoleInfo(p779);
  }
  static async checkPurchase(p780, p781) {
    C2.checkPurchase(p780, p781);
  }
  static async ["initCf"](p782) {
    C9.initCf(p782);
  }
  static async upLog(p783) {
    C9.upLog(p783);
  }
  static async ["upLogs"](p784) {
    C9.upLogs(p784);
  }
  static async trace(p785) {
    C9.trace(p785);
  }
  static async ["upLogGet"](p786) {
    const v701 = vRequire7.parseQs(p786.request.url);
    p786.request.body = [v701];
    C9.upLogs(p786);
  }
  static async upMyLog(p787) {
    C9.upMyLog(p787);
  }
  static async upMog(p788) {
    C9.upMog(p788);
  }
  static async ["handleLogInfoQueue"]() {
    C9.handleLogInfoQueue();
    C9.uploadSegments();
  }
  static async ["handleRealTimeLogInfoQueue"]() {
    C9.handleRealTimeLogInfoQueue();
  }
  static async ["setProjectConfigList"]() {
    const v702 = {
      NvcvW: function (p789, p790) {
        return p789 ^ p790;
      },
      xcFMF: function (p791, p792) {
        return p791 === p792;
      },
      JSFkP: "../../../"
    };
    const v703 = await ProjectModel.getAllProjectList();
    let v704 = [];
    let v705 = {};
    v703.forEach(p793 => {
      v704.push(p793.webMonitorId);
      const {
        recordConfig: _0x3962ad,
        samplingRate = v702.NvcvW(697652, 697680),
        samplingCircle = 3
      } = p793;
      let v706 = v702.xcFMF(_0x3962ad, "") ? PROJECT_CONFIG : _0x3962ad;
      const v707 = JSON.parse(v706) || {};
      v707.sc = {
        r: samplingRate || 100,
        c: samplingCircle || 3
      };
      v705[p793.webMonitorId] = JSON.stringify(v707);
      const v708 = vRequire19.resolve(__dirname, v702.JSFkP);
      const v709 = "/views/wf_source_map/" + p793.webMonitorId;
      fs2.mkdir("" + v708 + v709, function (p794) {
        if (p794) {
          console.log("= 文件夹 " + v709 + " 已经存在");
        } else {
          console.log("= 创建文件夹 " + v709);
        }
      });
    });
    global.monitorInfo.cacheWebMonitorIdList = v704;
    global.monitorInfo.webMonitorIdList = v704;
    global.monitorInfo.projectConfigs = v705;
  }
  static async ["startReceiveMsg"]() {
    const v710 = {
      JWLFX: function (p795, p796) {
        return p795 ^ p796;
      },
      vcpPA: function (p797, p798) {
        return p797 < p798;
      }
    };
    const v711 = accountInfo?.["messageQueue"]?.consumerCount || 2;
    for (let v712 = v710.JWLFX(211496, 211496); v710.vcpPA(v712, v711); v712++) {
      try {
        const v713 = new vRequire27();
        v713.receiveQueueMsg("webfunny_monitor_logs", async (p799, p800) => {
          try {
            const v714 = JSON.parse(p799);
            C9.handleLogInfo(v714).catch(p801 => {
              vRequire13.printError("处理日志信息异常:", p801);
            });
            p800();
          } catch (_0x36b3f9) {
            p800();
            vRequire13.printError("解析消息异常:", _0x36b3f9);
          }
        }, p802 => {
          vRequire13.printError("消费者" + (v712 + 1) + "获取消息失败:", p802);
        });
        vRequire13.printInfo("消费者" + (v712 + 1) + "启动成功");
      } catch (_0x3fa24a) {
        vRequire13.printError("消费者" + (v712 + 1) + "启动失败:", _0x3fa24a);
      }
    }
  }
  static async ["startReceiveMsgForMog"]() {
    const v715 = {
      HMzhL: function (p803, p804) {
        return p803 + p804;
      },
      QHyTm: function (p805, p806) {
        return p805 + p806;
      }
    };
    const v716 = accountInfo?.["messageQueue"]?.mogConsumerCount || 2;
    for (let v717 = 0; v717 < v716; v717++) {
      try {
        const v718 = new vRequire27();
        v718.receiveQueueMsg("webfunny_upload_mog", async (p807, p808) => {
          const v719 = {
            cztXk: "处理小程序日志异常:"
          };
          try {
            const v720 = JSON.parse(p807);
            C9.handleLogInfo(v720).catch(p809 => {
              vRequire13.printError(v719.cztXk, p809);
            });
            p808();
          } catch (_0x488bce) {
            p808();
            vRequire13.printError("解析小程序消息异常:", _0x488bce);
          }
        }, p810 => {
          vRequire13.printError("小程序消费者" + v715.HMzhL(v717, 1) + "获取消息失败:", p810);
        });
        vRequire13.printInfo("小程序消费者" + v715.QHyTm(v717, 1) + "启动成功");
      } catch (_0x125ffb) {
        vRequire13.printError("小程序消费者" + v715.QHyTm(v717, 1) + "启动失败:", _0x125ffb);
      }
    }
  }
  static async getConsumerStatus(p811) {
    const v721 = {
      sftvw: function (p812, p813) {
        return p812 + p813;
      },
      OYSzt: "_realtime"
    };
    const v722 = global.monitorInfo.logInfoQueue;
    const v723 = global.monitorInfo.realTimeLogQueue;
    let v724 = 0;
    let v725 = {};
    for (let v726 in v722) {
      if (!v725[v726]) {
        v725[v726] = {};
      }
      for (let v727 in v722[v726]) {
        const v728 = v722[v726][v727].length;
        v725[v726][v727] = v728;
        v724 += v728;
      }
    }
    for (let v729 in v723) {
      if (!v725[v729]) {
        v725[v729] = {};
      }
      for (let v730 in v723[v729]) {
        const v731 = v723[v729][v730].length;
        const v732 = v721.sftvw(v730, v721.OYSzt);
        v725[v729][v732] = v731;
        v724 += v731;
      }
    }
    p811.response.status = 200;
    p811.body = vRequire14.SUCCESS_200("success", {
      totalQueueSize: v724,
      queueDetails: v725,
      timestamp: new Date().toISOString()
    });
  }
  static async upDLog(p814) {
    C9.upDLog(p814);
  }
  static async uploadExtendLog(p815) {
    const v733 = {
      uIwpM: function (p816, p817) {
        return p816 !== p817;
      }
    };
    let v734 = {};
    if (v733.uIwpM(typeof p815.request.body, "object")) {
      v734 = JSON.parse(p815.request.body);
    } else {
      v734 = p815.request.body;
    }
    ExtendBehaviorInfoModel.createExtendBehaviorInfo(v734);
    p815.response.status = 200;
    p815.body = vRequire14.SUCCESS_200("创建信息成功");
  }
  static async ["upgradeSystem"](p818) {
    const v735 = {
      ooZgv: function (p819, p820) {
        return p819(p820);
      },
      QCIHH: function (p821, p822) {
        return p821 - p822;
      },
      qANFG: function (p823, p824) {
        return p823 ^ p824;
      }
    };
    let v736 = JSON.parse(p818.request.body);
    const {
      stableSql: _0x388d01,
      dynamicSql: _0x2945bd
    } = v736;
    const vDecodeURIComponent = decodeURIComponent(_0x388d01);
    const v737 = v735.ooZgv(decodeURIComponent, _0x2945bd);
    const v738 = await ProjectModel.getWebMonitorIdList();
    const v739 = vDecodeURIComponent.split("\n");
    CommonModel.updateTableFields(v739);
    const v740 = [];
    const v741 = v737.split("\n");
    v741.forEach(p825 => {
      v740.push(p825.split("-")[0]);
    });
    const v742 = [];
    const v743 = vRequire7.addDays(1).replace(new RegExp("-", "g"), "");
    v738.forEach(p826 => {
      v740.forEach(p827 => {
        v742.push(p826.webMonitorId + p827 + v743);
      });
    });
    v742.forEach(async p828 => {
      if (p828) {
        await CommonModel.deleteTableByName(p828);
      }
    });
    await C13.createTable(1);
    const v744 = v735.QCIHH(new Date(vRequire7.addDays(v735.qANFG(164210, 164211)) + " 00:00:00").getTime(), new Date().getTime()) - 20000;
    setTimeout(() => {
      C13.restartServer();
    }, v744);
    p818.response.status = v735.qANFG(676870, 677070);
    p818.body = vRequire14.SUCCESS_200("创建信息成功");
  }
  static async searchBehaviorsRecord(p829) {
    const v745 = {
      zltWn: function (p830, p831) {
        return p830 ^ p831;
      },
      friNt: function (p832, p833) {
        return p832 * p833;
      },
      LGLTH: function (p834, p835) {
        return p834 + p835;
      },
      IVxbn: function (p836, p837) {
        return p836 + p837;
      },
      RbrBA: function (p838, p839) {
        return p838 + p839;
      },
      iMwYf: "byTime",
      tIrtC: function (p840, p841) {
        return p840 + p841;
      },
      ihvco: function (p842, p843) {
        return p842 + p843;
      },
      wZuCZ: " happenDate>='",
      BPTdB: function (p844, p845) {
        return p844 + p845;
      },
      NCLYF: " userId='",
      ibPhQ: function (p846, p847) {
        return p846 + p847;
      },
      fqEQr: "CUSTOMER_PV",
      ljaTc: "HTTP_LOG",
      HlWiA: "all",
      iWQjJ: function (p848, p849) {
        return p848 / p849;
      },
      UuLcv: function (p850, p851) {
        return p850 ^ p851;
      },
      pales: function (p852, p853) {
        return p852 ^ p853;
      },
      KULBi: function (p854, p855) {
        return p854 ^ p855;
      },
      CxpHa: function (p856, p857) {
        return p856 ^ p857;
      },
      yTpKx: "页面加载",
      KAkZp: "发起请求",
      FLWjA: "资源错误",
      gNUOY: function (p858, p859) {
        return p858 === p859;
      }
    };
    const v746 = JSON.parse(p829.request.body);
    const {
      startDate: _0x35dc0e,
      endDate: _0x105a34,
      searchDate: _0x1d6a1e,
      searchHour = -1,
      userId: _0x198bb6,
      page: _0x39a0c7,
      pageSize: _0x30630c,
      uploadType = "all",
      sortType = "asc"
    } = v746;
    const {
      searchType: _0x5aed30,
      startTime: _0x4e7bb5,
      endTime: _0x187964
    } = v746;
    const v747 = v746.customerKey;
    const v748 = searchHour * 1 >= 0 && v745.friNt(searchHour, 1) < 10 ? v745.LGLTH("0", searchHour * 1) : searchHour;
    let v749 = v748 + ":00:00";
    let v750 = v745.LGLTH(v748, ":59:59");
    if (searchHour === -1) {
      v749 = "00:00:00";
      v750 = "23:59:00";
    }
    let v751 = "";
    let v752 = "";
    if (_0x1d6a1e) {
      v751 = v745.IVxbn(_0x1d6a1e + " ", v749);
      v752 = v745.RbrBA(_0x1d6a1e, " ") + v750;
    } else {
      v751 = _0x35dc0e;
      v752 = _0x105a34;
    }
    v746.happenDateScope = v751;
    v746.happenDateScopeEnd = v752;
    if (_0x5aed30 === v745.iMwYf) {
      v746.happenDateScope = _0x4e7bb5;
      v746.happenDateScopeEnd = _0x187964;
    }
    let v753 = [];
    let v754 = [];
    let v755 = [];
    let v756 = [];
    let v757 = [];
    let v758 = [];
    let v759 = [];
    let v760 = [];
    let v761 = [];
    let v762 = [];
    let v763 = [];
    let v764 = [];
    let v765 = [];
    let v766 = [];
    let v767 = v745.tIrtC(v745.ihvco(v745.wZuCZ + v746.happenDateScope, "' and happenDate<='") + v746.happenDateScopeEnd, "' ");
    let v768 = v745.RbrBA(v745.BPTdB(v745.NCLYF, _0x198bb6), "' ");
    let v769 = v745.ibPhQ(v745.ibPhQ(" userId='", _0x198bb6), "' ");
    const v770 = await C13.getCustomerKeySql(v746);
    await BehaviorInfoModel.getBehaviorsByUser(v770, v767, v746).then(p860 => {
      v754 = p860;
    });
    await CustomerPVModel.getBehaviorsByUser(v770, v767, v746).then(p861 => {
      v755 = p861;
    });
    await JavascriptErrorInfoModel.getBehaviorsByUser(v770, v767, v746).then(p862 => {
      v756 = p862;
    });
    await ScreenShotInfoModel.getBehaviorsByUser(v770, v767, v746).then(p863 => {
      v757 = p863;
    });
    await HttpLogInfoModel.getHttpLogsByUser(v770, v767, v746).then(p864 => {
      v758 = p864;
    });
    if (_0x198bb6) {
      await ExtendBehaviorInfoModel.getExtendBehaviorInfoByUserId(v767, v768, v746).then(p865 => {
        v759 = p865;
      });
    }
    await ResourceLoadInfoModel.getResourceLoadInfoByUserId(v770, v767, v746).then(p866 => {
      v760 = p866;
    });
    await HttpErrorInfoModel.getHttpErrorsByUser(v770, v767, v746).then(p867 => {
      v761 = p867;
    });
    await HttpLogReqInfoModel.getHttpReqLogsByUser(v770, v767, v746).then(p868 => {
      v762 = p868;
    });
    await PageLoadInfoModel.getPerfInfoByUser(v770, v767, v746).then(p869 => {
      v763 = p869;
    });
    await LocalLogModel.getLocalLogByUser(v770, v767, " uploadType = 'CONSOLE_LOG' ", v746).then(p870 => {
      v764 = p870;
      v764.forEach(p871 => {
        p871.content = vRequire7.b64DecodeUnicode(p871.content);
      });
    });
    await LocalLogModel.getLocalLogByUser(v770, v767, " uploadType = 'CONSOLE_WARN' ", v746).then(p872 => {
      v765 = p872;
      v765.forEach(p873 => {
        p873.content = vRequire7.b64DecodeUnicode(p873.content);
      });
    });
    switch (uploadType) {
      case "ELE_BEHAVIOR":
        v766 = [...v754];
        break;
      case v745.fqEQr:
        v766 = [...v755];
        break;
      case "JS_ERROR":
        v766 = [...v756];
        break;
      case "SCREEN_SHOT":
        v766 = [...v757];
        break;
      case v745.ljaTc:
        v766 = [...v758];
        break;
      case "HTTP_LOG_REQ":
        v766 = [...v762];
        break;
      case "CUSTOMIZE_BEHAVIOR":
        v766 = [...v759];
        break;
      case "RESOURCE_LOAD":
        v766 = [...v760];
        break;
      case "HTTP_ERROR":
        v766 = [...v761];
        break;
      case "PAGE_LOAD":
        v766 = [...v763];
        break;
      case "CONSOLE_LOG":
        v766 = [...v764];
        break;
      case "CONSOLE_WARN":
        v766 = [...v765];
        break;
      case v745.HlWiA:
      default:
        v766 = [...v754, ...v755, ...v756, ...v757, ...v758, ...v759, ...v760, ...v761, ...v762, ...v763, ...v764, ...v765];
        break;
    }
    let v771 = 0;
    let v772 = 0;
    if (v763 && v763.length) {
      v763.forEach(p874 => {
        v771 += p874.pageCompleteLoaded * 1;
      });
      v772 = vRequire7.toFixed(v745.iWQjJ(v771 / v763.length, v745.UuLcv(827028, 826748)), v745.pales(997400, 997402));
    }
    let v773 = 0;
    let v774 = v745.zltWn(263465, 263465);
    if (v758 && v758.length) {
      v758.forEach(p875 => {
        v773 += p875.loadTime * v745.zltWn(271926, 271927);
      });
      v774 = vRequire7.toFixed(v773 / v758.length / 1000, v745.KULBi(672694, 672692));
    }
    const v775 = sortType === "asc" ? v766.sort((p876, p877) => p876.happenTime - p877.happenTime) : v766.sort((p878, p879) => p879.happenTime - p878.happenTime);
    const v776 = (_0x39a0c7 - v745.CxpHa(750539, 750538)) * _0x30630c;
    const v777 = v775.slice(v776, v745.tIrtC(v776, _0x30630c));
    const v778 = {
      JS_ERROR: 0,
      RESOURCE_LOAD: 0,
      HTTP_ERROR: 0,
      CUSTOMER_PV: 0,
      SCREEN_SHOT: 0,
      HTTP_LOG_REQ: 0,
      ELE_BEHAVIOR: 0,
      CUSTOMIZE_BEHAVIOR: 0,
      HTTP_LOG: 0,
      PAGE_LOAD: 0,
      CONSOLE_LOG: 0,
      CONSOLE_WARN: 0
    };
    const v779 = {
      CUSTOMER_PV: "页面浏览",
      PAGE_LOAD: v745.yTpKx,
      HTTP_LOG_REQ: v745.KAkZp,
      HTTP_LOG: "请求返回",
      HTTP_ERROR: "请求错误",
      JS_ERROR: "代码错误",
      SCREEN_SHOT: "截屏",
      ELE_BEHAVIOR: "点击",
      RESOURCE_LOAD: v745.FLWjA,
      CUSTOMIZE_BEHAVIOR: "自定义",
      CONSOLE_LOG: "本地打印",
      CONSOLE_WARN: "本地警告"
    };
    const v780 = [];
    if (v745.gNUOY(uploadType, "all")) {
      v775.forEach(p880 => {
        const v781 = p880.uploadType;
        v778[v781] += 1;
      });
      for (let v782 in v778) {
        v780.push({
          name: v779[v782],
          value: v778[v782],
          per: v775.length ? vRequire7.toFixed(v745.friNt(v778[v782], 1) / v775.length, 2) : 0,
          type: v782
        });
      }
    }
    p829.response.status = 200;
    p829.body = vRequire14.SUCCESS_200("创建信息成功", {
      behaviorList: v777,
      total: v775.length,
      behaviorCountData: v780,
      avgPageLoad: v772,
      avgHttpTime: v774
    });
  }
  static async ["getCustomerKeySql"]({
    webMonitorId: _0xb118,
    userId: _0x5c6d6f,
    customerKey: _0x7454dc
  }) {
    const v783 = {
      fxFyV: function (p881, p882) {
        return p881 > p882;
      },
      DRQEO: function (p883, p884) {
        return p883 - p884;
      }
    };
    const v784 = [];
    let v785 = "";
    if (_0x5c6d6f) {
      v785 = " customerKey in (";
      const v786 = await CustomerPVModel.getCustomerKeyByUserId({
        webMonitorId: _0xb118,
        userId: _0x5c6d6f
      });
      v786.forEach(p885 => {
        if (p885.customerKey && v783.fxFyV(p885.customerKey.length, 10)) {
          v784.push(p885.customerKey);
        }
      });
      v784.forEach((p886, p887) => {
        if (p887 === v783.DRQEO(v784.length, 1)) {
          v785 += "'" + p886 + "')";
        } else {
          v785 += "'" + p886 + "',";
        }
      });
    } else {
      v785 += " customerKey='" + _0x7454dc + "' ";
    }
    return v785;
  }
  static async ["searchCustomerRecords"](p888) {
    const v787 = {
      MnUBZ: function (p889, p890) {
        return p889 - p890;
      },
      RAcyl: function (p891, p892) {
        return p891 + p892;
      },
      Trnsi: "' or ",
      HTwOB: "all",
      XmHVJ: function (p893, p894) {
        return p893 * p894;
      },
      bmcrk: function (p895, p896) {
        return p895 ^ p896;
      },
      UYhOq: function (p897, p898) {
        return p897 * p898;
      },
      CPWke: function (p899, p900) {
        return p899 + p900;
      },
      BZckz: function (p901, p902) {
        return p901 ^ p902;
      },
      ABJbi: "23:59:00",
      PYoiz: function (p903, p904) {
        return p903 + p904;
      },
      LqSrR: " happenDate>='",
      pqnvy: "' and happenDate<='",
      PQurJ: " userId='",
      XXRDJ: function (p905, p906) {
        return p905 + p906;
      },
      luCzq: "JS_ERROR",
      IdsOB: "HTTP_LOG",
      LNnWn: "asc",
      PJJtO: function (p907, p908) {
        return p907 * p908;
      }
    };
    const v788 = p888.request.body;
    const {
      startDate: _0x2cac2f,
      endDate: _0x247f78,
      searchDate: _0x224696,
      searchHour = -1,
      userId: _0x16b3bc,
      page: _0x9abff8,
      pageSize: _0x5b88b9,
      uploadType = v787.HTwOB,
      sortType = "asc"
    } = v788;
    const v789 = v788.customerKey;
    const v790 = searchHour * 1 >= 0 && v787.XmHVJ(searchHour, v787.bmcrk(699399, 699398)) < 10 ? "0" + v787.UYhOq(searchHour, 1) : searchHour;
    let v791 = v790 + ":00:00";
    let v792 = v787.CPWke(v790, ":59:59");
    if (searchHour === -v787.BZckz(373849, 373848)) {
      v791 = "00:00:00";
      v792 = v787.ABJbi;
    }
    let v793 = "";
    let v794 = "";
    if (_0x224696) {
      v793 = _0x224696 + " " + v791;
      v794 = v787.PYoiz(_0x224696, " ") + v792;
    } else {
      v793 = _0x2cac2f;
      v794 = _0x247f78;
    }
    v788.happenDateScope = v793;
    v788.happenDateScopeEnd = v794;
    let v795 = [];
    let v796 = [];
    let v797 = [];
    let v798 = [];
    let v799 = [];
    let v800 = [];
    let v801 = [];
    let v802 = [];
    let v803 = [];
    let v804 = [];
    let v805 = [];
    let v806 = new Date().getTime();
    if (v788.userId) {
      await CustomerPVModel.getCustomerKeyByUserId(v788).then(p909 => {
        p909.forEach(p910 => {
          if (p910.customerKey && p910.customerKey.length > 10) {
            v795.push(p910.customerKey);
          }
        });
        let v807 = new Date().getTime();
        v806 = v807;
      });
    }
    let v808 = "";
    let v809 = v787.LqSrR + v788.happenDateScope + v787.pqnvy + v788.happenDateScopeEnd + "' ";
    let v810 = v787.RAcyl(" userId='", _0x16b3bc) + "' ";
    let v811 = v787.PQurJ + _0x16b3bc + "' ";
    if (v795.length) {
      v795.forEach((p911, p912) => {
        if (p912 === v787.MnUBZ(v795.length, 1)) {
          v808 += v787.RAcyl(" customerKey='", p911) + "' ";
        } else {
          v808 += " customerKey='" + p911 + v787.Trnsi;
        }
      });
      v808 = v787.CPWke(" (", v808) + ") ";
    } else {
      v808 += v787.XXRDJ(v787.RAcyl(" customerKey='", v789), "' ");
    }
    await BehaviorInfoModel.getBehaviorsByUser(v808, v809, v788).then(p913 => {
      v796 = p913;
    });
    await CustomerPVModel.getBehaviorsByUser(v808, v809, v788).then(p914 => {
      v797 = p914;
    });
    await JavascriptErrorInfoModel.getBehaviorsByUser(v808, v809, v788).then(p915 => {
      v798 = p915;
    });
    await ScreenShotInfoModel.getBehaviorsByUser(v809, v811, v788).then(p916 => {
      v799 = p916;
    });
    await HttpLogInfoModel.getHttpLogsByUser(v808, v809, v788).then(p917 => {
      v800 = p917;
    });
    await ExtendBehaviorInfoModel.getExtendBehaviorInfoByUserId(v809, v810, v788).then(p918 => {
      v801 = p918;
    });
    await ResourceLoadInfoModel.getResourceLoadInfoByUserId(v808, v809, v788).then(p919 => {
      v802 = p919;
    });
    await HttpErrorInfoModel.getHttpErrorsByUser(v808, v809, v788).then(p920 => {
      v803 = p920;
    });
    await HttpLogReqInfoModel.getHttpReqLogsByUser(v808, v809, v788).then(p921 => {
      v804 = p921;
    });
    switch (uploadType) {
      case "ELE_BEHAVIOR":
        v805 = [...v796];
        break;
      case "CUSTOMER_PV":
        v805 = [...v797];
        break;
      case v787.luCzq:
        v805 = [...v798];
        break;
      case "HTTP_LOG_REQ":
        v805 = [...v804];
        break;
      case v787.IdsOB:
        v805 = [...v800];
        break;
      case "HTTP_ERROR":
        v805 = [...v803];
        break;
      case "RESOURCE_LOAD":
        v805 = [...v802];
        break;
      case "all":
      default:
        v805 = [...v796, ...v797, ...v798, ...v800, ...v801, ...v802, ...v803, ...v804];
        break;
    }
    const v812 = sortType === v787.LNnWn ? v805.sort((p922, p923) => p922.happenTime - p923.happenTime) : v805.sort((p924, p925) => p925.happenTime - p924.happenTime);
    const v813 = v787.PJJtO(_0x9abff8 - 1, _0x5b88b9);
    const v814 = v812.slice(v813, v813 + _0x5b88b9);
    p888.response.status = 200;
    p888.body = vRequire14.SUCCESS_200("创建信息成功", {
      behaviorList: v814,
      total: v812.length
    });
  }
  static async getCustomerBaseInfo(p926) {
    const v815 = {
      TjZAw: function (p927, p928) {
        return p927 === p928;
      },
      OWENb: function (p929, p930) {
        return p929 + p930;
      },
      zxtQK: function (p931, p932) {
        return p931 ^ p932;
      },
      AvTgT: function (p933, p934) {
        return p933 + p934;
      },
      adxgu: function (p935, p936) {
        return p935 ^ p936;
      },
      BRkHN: function (p937, p938) {
        return p937 ^ p938;
      },
      qLBjr: "创建信息成功"
    };
    let v816 = {};
    if (v815.TjZAw(typeof p926.request.body, "string")) {
      v816 = JSON.parse(p926.request.body);
    } else {
      v816 = p926.request.body;
    }
    const {
      webMonitorId: _0x2adb2c,
      customerKey: _0x180e0f,
      currentDate = new Date().Format("yyyy-MM-dd"),
      times = ["00:00:00", "23:59:59"]
    } = v816;
    const v817 = v815.OWENb(currentDate, " ") + times[v815.zxtQK(529386, 529386)];
    const v818 = v815.AvTgT(currentDate + " ", times[v815.adxgu(390124, 390125)]);
    const v819 = await C13.getCustomerKeySql(v816);
    const v820 = await PageLoadInfoModel.getPerfInfoByCustomerKey(v819, _0x2adb2c, v817, v818);
    const v821 = v820 && v820.length ? v820[v815.adxgu(983070, 983070)] : {};
    const v822 = await CustomerPVModel.getPvInfoByCustomerKey(v819, 0, _0x2adb2c, v817, v818);
    const v823 = v822 && v822.length ? v822[0] : {};
    const {
      effectiveType: _0x29dbe9
    } = v821;
    const {
      deviceName: _0x5bf467,
      os: _0x308b55,
      deviceSize: _0x847c49,
      browserName: _0x2ad049,
      operators: _0x152b19,
      country: _0x570c0f,
      province: _0x1ad467,
      city: _0x2caa63,
      projectVersion: _0x54cbf4,
      userId: _0x2e56d1,
      browserInfo: _0x429f6e,
      monitorIp: _0x171bf2,
      firstUserParam: _0xa44d43
    } = v823;
    const v824 = {
      device: _0x5bf467,
      os: _0x308b55,
      deviceSize: _0x847c49,
      client: _0x2ad049,
      network: _0x29dbe9,
      operator: _0x152b19,
      location: _0x570c0f + " " + _0x1ad467 + " " + _0x2caa63,
      version: _0x54cbf4,
      sdkVersion: "探针版本",
      userId: _0x2e56d1,
      userTag: _0xa44d43,
      ua: _0x429f6e,
      ip: _0x171bf2
    };
    p926.response.status = v815.BRkHN(735478, 735294);
    p926.body = vRequire14.SUCCESS_200(v815.qLBjr, v824);
  }
  static async ["searchCustomerInfo"](p939) {
    const v825 = {
      IMkww: function (p940, p941) {
        return p940 - p941;
      },
      VcjlE: function (p942, p943) {
        return p942 ^ p943;
      },
      fkSrX: function (p944, p945) {
        return p944 + p945;
      },
      dlCEe: function (p946, p947) {
        return p946 + p947;
      },
      PUaGg: function (p948, p949) {
        return p948 + p949;
      },
      fBVaR: " customerKey='",
      Cjnsr: "创建信息成功"
    };
    const v826 = JSON.parse(p939.request.body);
    const {
      searchDate: _0x3d74ec,
      searchHour: _0x807fac,
      userId: _0x3fd3c2
    } = v826;
    v826.happenDateScope = v825.fkSrX(v825.dlCEe(_0x3d74ec, " "), _0x807fac) + ":00:00";
    v826.happenDateScopeEnd = v825.PUaGg(_0x3d74ec + " ", _0x807fac) + ":59:59";
    let v827 = [];
    let v828 = null;
    let v829 = null;
    let v830 = null;
    let v831 = "";
    let v832 = null;
    let v833 = new Date().getTime();
    let v834 = "";
    await CustomerPVModel.getCustomerKeyByUserId(v826).then(p950 => {
      p950.forEach(p951 => {
        if (p951.customerKey && p951.customerKey.length > 10) {
          v827.push(p951.customerKey);
        }
      });
    });
    let v835 = "";
    let v836 = _0x807fac === -1 ? " 1=1 " : " happenDate>='" + v826.happenDateScope + "' and happenDate<='" + v826.happenDateScopeEnd + "' ";
    if (v827.length) {
      v827.forEach((p952, p953) => {
        if (p953 === v825.IMkww(v827.length, v825.VcjlE(720314, 720315))) {
          v835 += " customerKey='" + p952 + "' ";
        } else {
          v835 += " customerKey='" + p952 + "' or ";
        }
      });
      v835 = " (" + v835 + ") ";
    } else {
      v835 += v825.fBVaR + _0x3fd3c2 + "' ";
    }
    await CustomerPVModel.getCustomerPVDetailByCustomerKey(v835, v836, v826).then(p954 => {
      v832 = p954[v825.VcjlE(992878, 992878)] || {};
    });
    await CustomerPVModel.getPVsByCustomerKey(v835, v836, v826).then(p955 => {
      v828 = p955;
    });
    await PageLoadInfoModel.getPageLoadTimeByCustomerKey(v835, v836, v826).then(async p956 => {
      v830 = p956;
    });
    p939.response.status = 200;
    p939.body = vRequire14.SUCCESS_200(v825.Cjnsr, {
      pvCountList: v828,
      loadPageTimeList: v830,
      cusDetail: v832,
      pvChartList: v829
    });
  }
  static async searchCustomerPerfInfo(p957) {
    const v837 = {
      oFvOU: function (p958, p959) {
        return p958 + p959;
      }
    };
    const v838 = JSON.parse(p957.request.body);
    const {
      webMonitorId: _0x557129,
      customerKey: _0x33a7c9,
      currentDate: _0x42e0cd,
      times: _0x3274be
    } = v838;
    v838.happenDateScope = v837.oFvOU(_0x42e0cd + " ", _0x3274be[0]);
    v838.happenDateScopeEnd = _0x42e0cd + " " + _0x3274be[1];
    let v839 = null;
    let v840 = null;
    const v841 = await C13.getCustomerKeySql(v838);
    const v842 = " happenDate>='" + v838.happenDateScope + "' and happenDate<='" + v838.happenDateScopeEnd + "' ";
    await PageLoadInfoModel.getPageLoadTimeByCustomerKey(v841, v842, v838).then(async p960 => {
      v839 = p960;
    });
    await HttpLogInfoModel.getHttpLoadTimeForGroupByTime(_0x557129, v841, v842).then(async p961 => {
      v840 = p961;
    });
    p957.response.status = 200;
    p957.body = vRequire14.SUCCESS_200("创建信息成功", {
      loadPageTimeList: v839,
      httpLoadTimeList: v840
    });
  }
  static async ["calculateCountByDayForRealTime"](p962, p963) {
    const v843 = {
      GvxBg: function (p964, p965) {
        return p964 ^ p965;
      }
    };
    const v844 = vRequire7.addDays(v843.GvxBg(519871, 519871) - p962);
    const v845 = {
      uploadType: "",
      webMonitorId: "",
      dayCount: ""
    };
    v845.webMonitorId = p963;
    await C13.handleCalculateCountByDayForTenMinutes(p963, v845, p962);
  }
  static async calculateCountByDayForTenMinutes(p966) {
    const v846 = vRequire7.addDays(0 - p966);
    const v847 = {
      uploadType: "",
      webMonitorId: "",
      dayCount: ""
    };
    const v848 = await ProjectModel.getAllProjectList();
    for (let v849 = 0; v849 < v848.length; v849++) {
      const v850 = v848[v849].webMonitorId;
      v847.webMonitorId = v850;
      C13.handleCalculateCountByDayForTenMinutes(v850, v847, p966);
    }
  }
  static async handleCalculateCountByDayForTenMinutes(p967, p968, p969) {
    const v851 = {
      BlVri: function (p970, p971) {
        return p970 - p971;
      },
      MMVRY: function (p972, p973) {
        return p972 ^ p973;
      }
    };
    const v852 = vRequire7.addDays(v851.BlVri(0, p969));
    const v853 = await CustomerPVModel.getUVCountForDay(p967, p969, UPLOAD_TYPE.UV_COUNT_HOUR);
    p968.uploadType = UPLOAD_TYPE.UV_COUNT_DAY;
    p968.dayCount = v853[0].count;
    const v854 = await InfoCountByDayModel.getInfoCountByDayDetailByDayName(v852, p967, UPLOAD_TYPE.UV_COUNT_DAY);
    if (v854.length <= 0) {
      await InfoCountByDayModel.createInfoCountByDay({
        ...p968,
        dayName: v852
      });
    } else {
      const v855 = v854[0].dataId;
      await InfoCountByDayModel.updateInfoCountByDay(v855, p968);
    }
    const v856 = await CustomerPVModel.getPVCountForDay(p967, p969, UPLOAD_TYPE.PV_COUNT_HOUR);
    p968.uploadType = UPLOAD_TYPE.PV_COUNT_DAY;
    p968.dayCount = v856[0].count;
    const v857 = await InfoCountByDayModel.getInfoCountByDayDetailByDayName(v852, p967, UPLOAD_TYPE.PV_COUNT_DAY);
    if (v857.length <= v851.MMVRY(620780, 620780)) {
      await InfoCountByDayModel.createInfoCountByDay({
        ...p968,
        dayName: v852
      });
    } else {
      const v858 = v857[v851.MMVRY(108079, 108079)].dataId;
      await InfoCountByDayModel.updateInfoCountByDay(v858, p968);
    }
    const v859 = await CustomerPVModel.getNewCountForDay(p967, p969, UPLOAD_TYPE.NEW_COUNT_HOUR);
    p968.uploadType = UPLOAD_TYPE.NEW_COUNT_DAY;
    p968.dayCount = v859[0].count;
    const v860 = await InfoCountByDayModel.getInfoCountByDayDetailByDayName(v852, p967, UPLOAD_TYPE.NEW_COUNT_DAY);
    if (v860.length <= 0) {
      await InfoCountByDayModel.createInfoCountByDay({
        ...p968,
        dayName: v852
      });
    } else {
      const v861 = v860[0].dataId;
      await InfoCountByDayModel.updateInfoCountByDay(v861, p968);
    }
    const v862 = await CustomerPVModel.getIpCountForDay(p967, p969, UPLOAD_TYPE.IP_COUNT_HOUR);
    p968.uploadType = UPLOAD_TYPE.IP_COUNT_DAY;
    p968.dayCount = v862[0].count;
    const v863 = await InfoCountByDayModel.getInfoCountByDayDetailByDayName(v852, p967, UPLOAD_TYPE.IP_COUNT_DAY);
    if (v863.length <= 0) {
      await InfoCountByDayModel.createInfoCountByDay({
        ...p968,
        dayName: v852
      });
    } else {
      const v864 = v863[0].dataId;
      await InfoCountByDayModel.updateInfoCountByDay(v864, p968);
    }
  }
  static async getErrorInfo(p974) {
    const v865 = {
      AfzwK: function (p975, p976) {
        return p975 - p976;
      },
      FmDHZ: function (p977, p978) {
        return p977 ^ p978;
      },
      IehZV: function (p979, p980) {
        return p979 - p980;
      },
      mkSgF: function (p981, p982) {
        return p981 ^ p982;
      },
      HVvrp: function (p983, p984) {
        return p983 * p984;
      },
      CjwaV: function (p985, p986) {
        return p985 - p986;
      },
      NQwOu: function (p987, p988) {
        return p987 !== p988;
      },
      spVEp: function (p989, p990) {
        return p989 - p990;
      },
      eqgPT: function (p991, p992) {
        return p991 ^ p992;
      },
      OJFjU: function (p993, p994) {
        return p993 ^ p994;
      }
    };
    let v866 = p974.request.body;
    const v867 = JSON.parse(v866);
    const {
      webMonitorId: _0x429850,
      timeSize: _0x4f8d7e
    } = v867;
    const v868 = await CustomerPVModel.getUVCountForDay(_0x429850, 0 - _0x4f8d7e);
    const v869 = await JavascriptErrorInfoModel.getJsErrorUserCountToday(_0x429850, v865.AfzwK(v865.FmDHZ(546883, 546883), _0x4f8d7e));
    const v870 = await JavascriptErrorInfoModel.getConsoleErrorUserCountToday(_0x429850, 0 - _0x4f8d7e);
    const v871 = await ResourceLoadInfoModel.getResourceErrorUserCountToday(_0x429850, v865.IehZV(0, _0x4f8d7e));
    const v872 = await HttpErrorInfoModel.getHttpErrorUserCountToday(_0x429850, 0 - _0x4f8d7e);
    const v873 = await PageLoadInfoModel.getPageLoadOverviewSimple(_0x429850, v865.mkSgF(971538, 971538) - _0x4f8d7e);
    const v874 = await PageLoadInfoModel.getCountForOpenOneSecond(_0x429850, v865.AfzwK(0, _0x4f8d7e));
    let v875 = v873[0].samplingPv;
    let v876 = v874 ? v874[0].count : v865.FmDHZ(327939, 327939);
    let v877 = 0;
    if (v876) {
      v877 = vRequire7.toFixed(v865.HVvrp(v876 / v875, v865.FmDHZ(265654, 265682)), 2);
    }
    const v878 = await HttpLogInfoModel.getTotalCountAndHttpLoadTime(_0x429850, v865.CjwaV(0, _0x4f8d7e));
    const {
      count = 0
    } = v878[0] || {};
    const v879 = await HttpLogInfoModel.getTotalCountInSeconds(_0x429850, v865.AfzwK(0, _0x4f8d7e), 1000);
    const v880 = v879.length ? v879[v865.FmDHZ(132059, 132059)].count * 1 : v865.mkSgF(642750, 642750);
    let v881 = 0;
    if (v880) {
      v881 = v865.NQwOu(v880, v865.mkSgF(775674, 775674)) ? vRequire7.toFixed(v880 * 100 / count, 2) : 0;
    }
    const v882 = await CustomerPvLeaveModel.calculateCusLeavePercentByDay(_0x429850, v865.spVEp(0, _0x4f8d7e));
    const v883 = {
      todayUvCount: v868[0].count,
      jsErrorTotalCount: v869[v865.eqgPT(170145, 170145)].count,
      jsConsoleErrorTotalCount: v870[0].count,
      resourceErrorTotalCount: v871[0].count,
      httpErrorTotalCount: v872[0].count,
      pageSecondOpenRate: v877,
      httpSecondOpenRate: v881,
      customerLeaveRate: v882
    };
    p974.response.status = v865.OJFjU(827730, 827802);
    p974.body = vRequire14.SUCCESS_200("success", v883);
  }
  static async ["getWarningMsg"](p995) {
    let v884 = p995.request.body;
    const v885 = JSON.parse(v884);
    const v886 = v885.webMonitorId + "warningMsg";
    const v887 = global.monitorInfo[v886];
    p995.response.status = 200;
    p995.body = vRequire14.SUCCESS_200("success", v887);
  }
  static async getWarningList(p996) {
    const v888 = {
      kDxSe: "getAlarmTriggerListBySize error"
    };
    let v889 = JSON.parse(p996.request.body);
    const {
      webMonitorId: _0xe74956
    } = v889;
    let v890 = [];
    await vRequire7.postJson(LOCAL_SERVER + "/wfCenter/alarm/getAlarmTriggerListBySize", {
      webMonitorId: _0xe74956
    }).then(p997 => {
      v890 = p997.data;
    }).catch(p998 => {
      console.error(v888.kDxSe, p998);
    });
    p996.response.status = 200;
    p996.body = vRequire14.SUCCESS_200("success", v890);
  }
  static async ["checkMysqlConnectErrors"]() {
    const v891 = {
      nNTSV: function (p999, p1000) {
        return p999 >= p1000;
      },
      ZSmSq: function (p1001, p1002) {
        return p1001 + p1002;
      },
      PQwmN: function (p1003, p1004) {
        return p1003 * p1004;
      },
      jnjkW: function (p1005, p1006) {
        return p1005 ^ p1006;
      }
    };
    setInterval(async () => {
      const v892 = await CommonModel.checkMysqlConnectErrors();
      const v893 = v892[0].count;
      if (v891.nNTSV(v893, 50)) {
        cusSendEmail("", "Mysql错误连接数报警", v891.ZSmSq("Mysql错误连接数：", v893));
      }
    }, v891.PQwmN(600, v891.jnjkW(484260, 483404)));
  }
  static async ["checkMysqlStatus"](p1007) {
    const v894 = await CommonModel.checkMysqlConnectErrors();
    const v895 = await CommonModel.checkMysqlConnects();
    p1007.response.status = 200;
    p1007.body = vRequire14.SUCCESS_200("success", {
      errorListData: v894,
      connectionData: v895
    });
  }
  static async ["liBangData"](p1008) {
    p1008.response.status = 200;
    p1008.body = vRequire14.SUCCESS_200("success", 1);
  }
  static async startDelete() {
    const v896 = {
      cjKIM: function (p1009, p1010) {
        return p1009 ^ p1010;
      },
      piZtT: function (p1011, p1012) {
        return p1011 - p1012;
      },
      SpiJX: function (p1013, p1014) {
        return p1013 < p1014;
      },
      HaTZK: function (p1015, p1016) {
        return p1015 === p1016;
      },
      pypDP: function (p1017, p1018) {
        return p1017 + p1018;
      },
      Cpeip: function (p1019, p1020) {
        return p1019 ^ p1020;
      },
      hTtsH: function (p1021, p1022) {
        return p1021 + p1022;
      },
      LFrII: "webfunny"
    };
    let v897 = v896.pypDP(parseInt(accountInfo.saveDays, v896.Cpeip(416609, 416619)), 1);
    vRequire13.printInfo("【即将开始表删除程序...");
    const v898 = vRequire7.addDays(0 - v897).replace(new RegExp("-", "g"), "");
    vRequire13.printInfo(v896.hTtsH("日志存储周期为：" + accountInfo.saveDays, "天"));
    vRequire13.printInfo("即将删除日期为：" + v898);
    const v899 = new RegExp("^\\d{8}$", "");
    const v900 = [];
    const v901 = await CommonModel.getAllTableList(accountInfo.mysqlConfig.write.dataBaseName, "PageLoadInfo");
    const v902 = await CommonModel.getAllTableList(accountInfo.mysqlConfig.write.dataBaseName, v896.LFrII);
    v902.forEach(p1023 => {
      const v903 = p1023.tableName.substr(p1023.tableName.length - v896.cjKIM(223879, 223887), p1023.tableName.length);
      if (v899.test(v903) && v903 < v898) {
        v900.push(p1023.tableName);
      }
    });
    v901.forEach(p1024 => {
      const v904 = p1024.tableName.substr(v896.piZtT(p1024.tableName.length, 8), p1024.tableName.length);
      if (v899.test(v904) && v896.SpiJX(v904, v898)) {
        v900.push(p1024.tableName);
      }
    });
    let v905 = "";
    v900.forEach(async (p1025, p1026) => {
      if (v896.HaTZK(p1026, v900.length - 1)) {
        v905 += p1025;
      } else {
        v905 += p1025 + ", ";
      }
    });
    await CommonModel.dropAllTableNames(v905);
    await InfoCountByHourModel.deleteOneMonthAgo().catch(p1027 => {
      vRequire13.printError("删除PV分析表表操作报错", p1027);
    });
    await LoadTimeInfoByHourModel.deleteOneMonthAgo().catch(p1028 => {
      vRequire13.printError("删除加载时间表操作报错", p1028);
    });
    await DeviceInfoCountByHourModel.deleteOneMonthAgo().catch(p1029 => {
      vRequire13.printError("删除设备信息表操作报错", p1029);
    });
    vRequire13.printInfo("表删除程序结束】");
  }
  static async deleteTableByWebMonitorId(p1030, p1031) {
    const v906 = {
      LZFXj: "成功删除数据库表 ",
      blVYU: function (p1032, p1033) {
        return p1032 + p1033;
      },
      Ugzbz: "CustomerPV",
      HXSEt: "ExtendBehaviorInfo",
      aQbbr: "VideosInfo",
      avcoa: "CustomerStayTime",
      aKbKE: "表删除程序结束】"
    };
    vRequire13.printInfo("【根据webMonitorId，即将开始表删除程序...");
    const v907 = vRequire7.addDays(0 - p1031).replace(new RegExp("-", "g"), "");
    const v908 = ["BehaviorInfo", v906.Ugzbz, v906.HXSEt, "HttpErrorInfo", "HttpLogInfo", "JavascriptErrorInfo", "LoadPageInfo", "ResourceLoadInfo", "ScreenShotInfo", v906.aQbbr, "CustomerPvLeave", v906.avcoa];
    try {
      v908.forEach(async p1034 => {
        let v909 = v906.blVYU(p1030, p1034) + v907;
        vRequire13.printInfo(v906.blVYU("开始删除数据库表 " + v909, "..."));
        await v8.dropSchema(v909).then(() => {
          vRequire13.printInfo(v906.LZFXj + v909);
        });
      });
    } catch (_0x59d91f) {
      vRequire13.printError("删除表操作报错", _0x59d91f);
    }
    vRequire13.printInfo(v906.aKbKE);
  }
  static async startClearInvalidTable() {
    const v910 = {
      PPeta: function (p1035, p1036) {
        return p1035 === p1036;
      },
      EZBSW: function (p1037, p1038) {
        return p1037 ^ p1038;
      }
    };
    const v911 = [];
    const v912 = await ProjectModel.getWebMonitorIdList();
    v912.forEach(p1039 => {
      v911.push(p1039.webMonitorId);
    });
    const v913 = [];
    const v914 = await C13.getAllTableList();
    const v915 = new RegExp("webfunny_\\d{8}_\\d{6}", "");
    v914.forEach(p1040 => {
      const v916 = p1040.table_name.match(v915);
      if (v916 && v916.length) {
        let v917 = v916[0];
        if (v910.PPeta(v911.indexOf(v917), -v910.EZBSW(439498, 439499))) {
          v913.push(p1040.table_name);
        }
      }
    });
    vRequire13.printInfo("【根据webMonitorId，即将开始表删除程序...");
    v913.forEach(async p1041 => {
      const v918 = {
        gqcIp: function (p1042, p1043) {
          return p1042 + p1043;
        }
      };
      await v8.dropSchema(p1041).then(() => {
        vRequire13.printInfo(v918.gqcIp("成功清理无效数据库表: ", p1041));
      });
    });
  }
  static async ["startClearInvalidTable"]() {
    const v919 = {
      VdNmG: function (p1044, p1045) {
        return p1044 ^ p1045;
      },
      diWHB: function (p1046, p1047) {
        return p1046 === p1047;
      },
      uHjMI: function (p1048, p1049) {
        return p1048 + p1049;
      }
    };
    const v920 = [];
    const v921 = await ProjectModel.getWebMonitorIdList();
    v921.forEach(p1050 => {
      v920.push(p1050.webMonitorId);
    });
    const v922 = [];
    const v923 = await C13.getAllTableList();
    const v924 = new RegExp("webfunny_\\d{8}_\\d{6}", "");
    v923.forEach(p1051 => {
      const v925 = p1051.table_name.match(v924);
      if (v925 && v925.length) {
        let v926 = v925[v919.VdNmG(384038, 384038)];
        if (v919.diWHB(v920.indexOf(v926), -1)) {
          v922.push(p1051.table_name);
        }
      }
    });
    vRequire13.printInfo("【根据webMonitorId，即将开始表删除程序...");
    v922.forEach(async p1052 => {
      await v8.dropSchema(p1052).then(() => {
        vRequire13.printInfo(v919.uHjMI("成功删除数据库表: ", p1052));
      });
    });
  }
  static async ["pm2Flush"]() {
    vRequire28.exec("pm2 flush &", function (p1053, p1054, p1055) {
      if (p1053) {
        vRequire13.printError("pm2 flush error：", p1053);
      }
    });
  }
  static async createTable(p1056 = 0) {
    C.rebuildAllTables(p1056);
  }
  static async connectUser(p1057) {
    const v927 = vRequire7.parseQs(p1057.request.url);
    const {
      userId: _0x4d03e9,
      connecting: _0x147233,
      webMonitorId: _0x1e175d
    } = v927;
    let v928 = "";
    if (!_0x147233) {
      v928 = "connected";
    } else {
      v928 = "disconnect";
    }
    await CustomerStatusModel.updateCustomerStatus(_0x1e175d, _0x4d03e9, {
      connectStatus: "on"
    });
    await C32.updateCustomerStatusIntoMemory();
    p1057.response.status = 200;
    p1057.body = vRequire14.SUCCESS_200("success", v928);
  }
  static async disconnectUser(p1058) {
    const v929 = vRequire7.parseQs(p1058.request.url);
    const {
      userId: _0x13edd1,
      webMonitorId: _0x321c50
    } = v929;
    await CustomerStatusModel.updateCustomerStatus(_0x321c50, _0x13edd1, {
      connectStatus: "off"
    });
    await C32.updateCustomerStatusIntoMemory();
    global.monitorInfo.debugOnlineForUserIdArray.connect = global.monitorInfo.debugOnlineForUserIdArray.connect.filter(p1059 => p1059 !== _0x13edd1);
    global.monitorInfo.debugInfoArray[_0x13edd1] = [];
    global.monitorInfo.tempDebugInfoArray[_0x13edd1] = [];
    p1058.response.status = 200;
    p1058.body = vRequire14.SUCCESS_200("success", 0);
  }
  static async ["getHistoryDebugInfos"](p1060) {
    const v930 = {
      daKXF: "success"
    };
    const v931 = vRequire7.parseQs(p1060.request.url);
    const {
      userId: _0x144e80
    } = v931;
    const v932 = global.monitorInfo.debugInfoArray[_0x144e80] || [];
    const v933 = global.monitorInfo.tempDebugInfoArray[_0x144e80] || [];
    const v934 = v932.concat(v933);
    const v935 = v934.length;
    p1060.response.status = 200;
    p1060.body = vRequire14.SUCCESS_200(v930.daKXF, {
      result: v934,
      total: v935
    });
  }
  static async getDebugInfos(p1061) {
    const v936 = {
      qphwa: function (p1062, p1063) {
        return p1062 <= p1063;
      },
      VMTOj: function (p1064, p1065) {
        return p1064 ^ p1065;
      }
    };
    const v937 = vRequire7.parseQs(p1061.request.url);
    const {
      userId: _0x509dcb
    } = v937;
    const v938 = global.monitorInfo.debugInfo;
    let v939 = [];
    if (v938[_0x509dcb] && v938[_0x509dcb].consoleInfo && v938[_0x509dcb].consoleInfo.log) {
      const v940 = v938[_0x509dcb].consoleInfo.log.length;
      if (v936.qphwa(v940, v936.VMTOj(947627, 947663))) {
        v939 = v938[_0x509dcb].consoleInfo.log;
      } else {
        v939 = v938[_0x509dcb].consoleInfo.log.slice(v940 - 100, v940);
      }
    }
    const v941 = global.monitorInfo.debugInfo[_0x509dcb];
    p1061.response.status = 200;
    p1061.body = vRequire14.SUCCESS_200("success", {
      console: v939,
      localDebugInfo: v941
    });
  }
  static async getDebugInfosForPage(p1066) {
    const v942 = vRequire7.parseQs(p1066.request.url);
    const {
      userId: _0x1278b7
    } = v942;
    const v943 = v942.page * 1;
    const v944 = v942.pageSize * 1;
    let v945 = global.monitorInfo.debugInfoArray[_0x1278b7] || [];
    v945 = v945.sort((p1067, p1068) => p1068.happenTime * 1 - p1067.happenTime * 1);
    const v946 = v945.length;
    let v947 = v945.slice((v943 - 1) * v944, v943 * v944);
    p1066.response.status = 200;
    p1066.body = vRequire14.SUCCESS_200("success", {
      result: v947,
      total: v946
    });
  }
  static async ["getDebugInfoForLocalInfo"](p1069) {
    const v948 = vRequire7.parseQs(p1069.request.url);
    const {
      userId: _0x1be86e
    } = v948;
    const v949 = global.monitorInfo.debugInfo[_0x1be86e];
    p1069.response.status = 200;
    p1069.body = vRequire14.SUCCESS_200("success", v949);
  }
  static async ["clearLocalInfo"](p1070) {
    const v950 = {
      oSIzJ: function (p1071, p1072) {
        return p1071 ^ p1072;
      }
    };
    const v951 = vRequire7.parseQs(p1070.request.url);
    const {
      userId: _0x23a7f0
    } = v951;
    global.monitorInfo.debugClearLocalInfo.push(_0x23a7f0);
    p1070.response.status = 200;
    p1070.body = vRequire14.SUCCESS_200("success", v950.oSIzJ(998905, 998905));
  }
  static async getDebugInfoForVideo(p1073) {
    const v952 = {
      EUgjQ: function (p1074, p1075) {
        return p1074 ^ p1075;
      },
      ucNRm: "success"
    };
    const v953 = vRequire7.parseQs(p1073.request.url);
    const {
      userId: _0x1662b8
    } = v953;
    const v954 = global.monitorInfo.debugInfo[_0x1662b8].videosInfo;
    p1073.response.status = v952.EUgjQ(679070, 678998);
    p1073.body = vRequire14.SUCCESS_200(v952.ucNRm, v954);
  }
  static async ["getDebugInfoFromConnectUser"](p1076) {
    const v955 = {
      uUoaN: function (p1077, p1078) {
        return p1077 > p1078;
      },
      fqptn: "happenTime",
      fCjyA: function (p1079, p1080) {
        return p1079 ^ p1080;
      }
    };
    const v956 = global.monitorInfo.debugInfoArray;
    if (v955.uUoaN(v956.length, 0)) {
      vRequire7.quickSortForObject(v956, v955.fqptn, 0, v956.length - 1);
      const v957 = v956[0];
      v956.splice(v955.fCjyA(148817, 148817), 1);
      return v957;
    }
    return null;
  }
  static async getConsoleInfoFromConnectUser(p1081) {
    const v958 = {
      PxjUG: function (p1082, p1083) {
        return p1082 ^ p1083;
      }
    };
    const {
      userId: _0x399703
    } = p1081;
    const v959 = global.monitorInfo.debugInfo;
    if (v959[_0x399703] && v959[_0x399703].consoleInfo && v959[_0x399703].consoleInfo.log) {
      const v960 = v959[_0x399703].consoleInfo.log[0];
      v959[_0x399703].consoleInfo.log.splice(v958.PxjUG(411999, 411999), 1);
      return v960;
    }
    return null;
  }
  static async ["getVideosInfoFromConnectUser"](p1084) {
    const v961 = {
      AvFwN: function (p1085, p1086) {
        return p1085 ^ p1086;
      }
    };
    const {
      userId: _0x58782b
    } = p1084;
    const v962 = global.monitorInfo.debugInfo;
    if (v962[_0x58782b] && v962[_0x58782b].videosInfo) {
      const v963 = v962[_0x58782b].videosInfo;
      v962[_0x58782b].videosInfo.splice(v961.AvFwN(562969, 562969), 1);
      return v963;
    }
    return null;
  }
  static async pushInfo(p1087) {
    const v964 = {
      lwnzx: function (p1088, p1089) {
        return p1088 ^ p1089;
      }
    };
    await vRequire7.get("http://www.webfunny.cn/config/pushInfo", {}).then(p1090 => {
      const v965 = p1090.data;
      p1087.response.status = 200;
      p1087.body = vRequire14.SUCCESS_200("success", v965);
    }).catch(() => {
      p1087.response.status = v964.lwnzx(474176, 474248);
      p1087.body = vRequire14.SUCCESS_200("success", null);
    });
  }
  static async ["updateInfo"](p1091) {
    const v966 = {
      KDKQE: "success",
      NZVBR: "http://www.webfunny.cn/config/updateInfo"
    };
    await vRequire7.get(v966.NZVBR, {}).then(p1092 => {
      const v967 = p1092.data;
      p1091.response.status = 200;
      p1091.body = vRequire14.SUCCESS_200("success", v967);
    }).catch(() => {
      p1091.response.status = 200;
      p1091.body = vRequire14.SUCCESS_200(v966.KDKQE, null);
    });
  }
  static async ["projectVersion"](p1093) {
    p1093.response.status = 200;
    p1093.body = vRequire14.SUCCESS_200("success", PROJECT_INFO.PROJECT_VERSION);
  }
  static async projectConfig(p1094) {
    const v968 = {
      dLnOP: function (p1095, p1096) {
        return p1095 + p1096;
      },
      SYlfB: function (p1097, p1098) {
        return p1097 > p1098;
      },
      DqwUp: function (p1099, p1100) {
        return p1099 ^ p1100;
      },
      bJmVI: "012345",
      gHFsC: function (p1101, p1102) {
        return p1101 ^ p1102;
      },
      mIRRN: "success"
    };
    try {
      const v969 = vRequire7.parseQs(p1094.request.url);
      let {
        userId: _0x2a204f,
        webMonitorId: _0x2f16d1
      } = v969;
      const v970 = global.monitorInfo.userIdArray;
      let v971 = "";
      if (v970.indexOf(_0x2a204f) != -1) {
        v971 = "connected";
      } else {
        v971 = "disconnect";
      }
      let v972 = global.monitorInfo[v968.dLnOP(_0x2f16d1, "startList")];
      if (v972 && v968.SYlfB(v972.length, 0)) {
        console.log("全局变量中：", v972);
      } else {
        let v973 = await ProjectModel.getStartListByWebMonitorId(_0x2f16d1);
        v972 = v973 && v973[v968.DqwUp(402171, 402171)] && v973[v968.DqwUp(433128, 433128)].startList || v968.bJmVI;
        global.monitorInfo[_0x2f16d1 + "startList"] = v972;
      }
      p1094.response.status = v968.gHFsC(289753, 289553);
      p1094.body = vRequire14.SUCCESS_200(v968.mIRRN, {
        d: v971,
        s: v972
      });
    } catch (_0x5970a6) {
      vRequire13.printError("projectConfig接口报错", _0x5970a6);
      p1094.response.status = 200;
      p1094.body = vRequire14.SUCCESS_200(v968.mIRRN, {
        d: "disconnect",
        s: "012345"
      });
    }
  }
  static async ["changeLogServerStatus"](p1103) {
    const v974 = JSON.parse(p1103.request.body);
    const {
      status: _0x327cde
    } = v974;
    global.monitorInfo.logServerStatus = _0x327cde;
    p1103.response.status = 200;
    p1103.body = vRequire14.SUCCESS_200("success", 1);
  }
  static async changeWaitCounts(p1104) {
    const v975 = {
      geGiS: function (p1105, p1106) {
        return p1105 ^ p1106;
      }
    };
    const v976 = JSON.parse(p1104.request.body);
    const {
      waitCounts: _0x248e69
    } = v976;
    global.monitorInfo.waitCounts = _0x248e69;
    p1104.response.status = 200;
    p1104.body = vRequire14.SUCCESS_200("success", v975.geGiS(343855, 343854));
  }
  static async ["changeSaveDays"](p1107) {
    const v977 = {
      dgimT: function (p1108, p1109) {
        return p1108 + p1109;
      },
      swlSm: function (p1110, p1111) {
        return p1110 ^ p1111;
      },
      qxvdx: function (p1112, p1113) {
        return p1112 ^ p1113;
      }
    };
    const v978 = p1107.request.body;
    const v979 = JSON.parse(v978);
    const {
      saveDays: _0x2701ec
    } = v979;
    const v980 = "module.exports = {\n      saveDays: " + _0x2701ec + ",\n    }";
    await fs2.writeFile("./bin/saveDays.js", v980, p1114 => {
      if (p1114) {
        throw p1114;
      }
      console.log(v977.dgimT("存储周期修改成功，当前存储周期为", _0x2701ec) + "天...");
      console.log("即将重启服务以生效...");
      C2.restartServer();
    });
    p1107.response.status = v977.swlSm(258442, 258370);
    p1107.body = vRequire14.SUCCESS_200("success", v977.qxvdx(813035, 813035));
  }
  static async ["changeMonitorStatus"](p1115) {
    const v981 = {
      wUXjc: "./bin/sysMonitor.js",
      neRbT: function (p1116, p1117) {
        return p1116 ^ p1117;
      }
    };
    const v982 = p1115.request.body;
    const v983 = JSON.parse(v982);
    const {
      openMonitor: _0xd8537a
    } = v983;
    const v984 = "module.exports = {\n      openMonitor: " + _0xd8537a + "  // 企业版可关闭此选项\n    }";
    await fs2.writeFile(v981.wUXjc, v984, p1118 => {
      if (p1118) {
        throw p1118;
      }
      C2.restartServer();
    });
    p1115.response.status = 200;
    p1115.body = vRequire14.SUCCESS_200("success", v981.neRbT(406459, 406459));
  }
  static async saveMysqlConfigs(p1119) {
    const v985 = {
      itaij: "即将重启服务以生效...",
      QVNzX: "./bin/mysqlConfig.js"
    };
    const v986 = p1119.request.body;
    const v987 = JSON.parse(v986);
    const {
      mysqlIp: _0x4e6755,
      mysqlDatabase: _0x4108cf,
      mysqlUsername: _0xf69925,
      mysqlPassword: _0x20cb5c
    } = v987;
    const v988 = "module.exports = {\n      ip: '" + _0x4e6755 + "',                 // mysql数据库所在云服务器的ip地址\n      dataBaseName: '" + _0x4108cf + "',       // 数据库名称（如：webfunny_db）\n      userName: '" + _0xf69925 + "',           // mysql的登录名\n      password: '" + _0x20cb5c + "'            // mysql的登录密码\n    }";
    await fs2.writeFile(v985.QVNzX, v988, p1120 => {
      if (p1120) {
        throw p1120;
      }
      console.log("mysql连接配置完成。");
      console.log(v985.itaij);
      C2.restartServer();
    });
    p1119.response.status = 200;
    p1119.body = vRequire14.SUCCESS_200("success", 0);
  }
  static async getLogServerStatus(p1121) {
    const v989 = {
      DtQWn: function (p1122, p1123) {
        return p1122 ^ p1123;
      },
      BaXQo: "success"
    };
    const v990 = global.monitorInfo.logServerStatus;
    const v991 = global.monitorInfo.waitCounts;
    p1121.response.status = v989.DtQWn(703679, 703607);
    p1121.body = vRequire14.SUCCESS_200(v989.BaXQo, {
      logServerStatus: v990,
      waitCounts: v991,
      saveDays: accountInfo.saveDays,
      openMonitor: accountInfo.openMonitor
    });
  }
  static async getConcurrencyByMinuteInHour(p1124) {
    const v992 = global.monitorInfo.logCountInMinuteList;
    p1124.response.status = 200;
    p1124.body = vRequire14.SUCCESS_200("success", {
      logCountInMinuteList: v992
    });
  }
  static async checkAnalysisData(p1125) {
    const v993 = {
      zHOVV: function (p1126, p1127) {
        return p1126 < p1127;
      },
      BwvtM: function (p1128, p1129) {
        return p1128 ^ p1129;
      },
      aSdBW: function (p1130, p1131, p1132) {
        return p1130(p1131, p1132);
      },
      qhXMl: function (p1133, p1134) {
        return p1133 / p1134;
      },
      HQWCi: function (p1135, p1136) {
        return p1135 > p1136;
      },
      OsBXo: function (p1137, p1138) {
        return p1137 ^ p1138;
      },
      NyekF: function (p1139, p1140) {
        return p1139 + p1140;
      },
      yMeEp: function (p1141, p1142) {
        return p1141 * p1142;
      },
      ixNWv: function (p1143, p1144) {
        return p1143 * p1144;
      }
    };
    const v994 = [];
    const v995 = await ProjectModel.getAllProjectList();
    for (let v996 = 0; v993.zHOVV(v996, v995.length); v996++) {
      const v997 = v995[v996].webMonitorId;
      const v998 = await CustomerPVModel.getUVCountForDay(v997, 0, UPLOAD_TYPE.UV_COUNT_HOUR);
      const v999 = await JavascriptErrorInfoModel.getJsErrorUserCountToday(v997, 0);
      const v1000 = await JavascriptErrorInfoModel.getConsoleErrorUserCountToday(v997, v993.BwvtM(591383, 591383));
      const v1001 = await ResourceLoadInfoModel.getResourceErrorUserCountToday(v997, v993.BwvtM(161885, 161885));
      const v1002 = await HttpErrorInfoModel.getHttpErrorUserCountToday(v997, 0);
      let v1003 = v998[v993.BwvtM(437823, 437823)].count;
      const v1004 = v999[0].count;
      const v1005 = v1000[0].count;
      const v1006 = v1001[0].count;
      const v1007 = v1002[0].count;
      v1003 = v993.aSdBW(parseInt, v1003, 10);
      let v1008 = v1003 > 0 ? v993.qhXMl(v1004, v1003) : 0;
      let v1009 = v993.HQWCi(v1003, 0) ? v1005 / v1003 : v993.BwvtM(475955, 475955);
      let v1010 = v993.HQWCi(v1003, 0) ? v1006 / v1003 : 0;
      let v1011 = v1003 > v993.BwvtM(505780, 505780) ? v1007 / v1003 : v993.OsBXo(412766, 412766);
      let v1012 = v993.NyekF(v1008 * 20 + v993.OsBXo(453648, 453636) * v1009 + v993.yMeEp(30, v1010), v1011 * 30);
      v1012 = v993.ixNWv(vRequire7.toFixed((100 - v1012) / v993.OsBXo(547854, 547946), 2), v993.BwvtM(318170, 318142));
      v1008 = vRequire7.toFixed(v993.yMeEp(v1008, 100), v993.BwvtM(312471, 312469));
      v1009 = vRequire7.toFixed(v1009 * 100, 2);
      v1010 = vRequire7.toFixed(v1010 * 100, 2);
      v1011 = vRequire7.toFixed(v1011 * 100, 2);
      v994.push({
        webMonitorId: v997,
        score: v1012,
        jsErrorPercent: v1008,
        consoleErrorPercent: v1009,
        resourceErrorPercent: v1010,
        httpErrorPercent: v1011
      });
    }
    p1125({
      healthPercentList: v994
    });
  }
  static async ["restartServer"]() {
    C2.restartServer();
  }
  static async getSysInfo(p1145) {
    const {
      accountInfo: _0x1df4d6
    } = vRequire25;
    const {
      webfunnyNeedLogin: _0xa17715,
      messageQueue: _0x1b7166,
      localServerDomain: _0x422123,
      localServerPort: _0x3434fe,
      localAssetsDomain: _0x21f403,
      centerAssetsDomain: _0x5675e6,
      localAssetsPort: _0x29f993,
      mainDomain: _0x37b755,
      openMonitor: _0x4f82a7
    } = _0x1df4d6;
    const {
      purchaseCodeEndDate: _0xc1b78d,
      purchaseCodeType: _0x13aa8a,
      cacheWebMonitorIdList: _0x3d0e0d
    } = global.monitorInfo;
    p1145.response.status = 200;
    p1145.body = vRequire14.SUCCESS_200("success", {
      webfunnyVersion: vF25,
      webfunnyNeedLogin: _0xa17715,
      messageQueue: _0x1b7166,
      purchaseCodeEndDate: _0xc1b78d,
      purchaseCodeValid: true,
      pct: _0x13aa8a,
      localServerDomain: _0x422123,
      localServerPort: _0x3434fe,
      localAssetsDomain: _0x21f403,
      localAssetsPort: _0x29f993,
      centerAssetsDomain: _0x5675e6,
      mainDomain: _0x37b755,
      openMonitor: _0x4f82a7
    });
  }
  static async getAllTableList() {
    const v1013 = await CommonModel.getAllTableList(accountInfo.mysqlConfig.write.dataBaseName);
    return v1013;
  }
  static async monitorVersion(p1146) {
    const v1014 = {
      GDDdp: "success"
    };
    p1146.response.status = 200;
    p1146.body = vRequire14.SUCCESS_200(v1014.GDDdp, PROJECT_INFO.MONITOR_VERSION);
  }
  static async ["dockerHealth"](p1147) {
    p1147.response.status = 200;
    p1147.body = {
      status: "OK"
    };
  }
  static async test(p1148) {
    p1148.response.status = 200;
    p1148.body = vRequire14.SUCCESS_200("success", {
      Success: true,
      IsSensitive: false,
      SensitiveFields: [],
      SensitiveLevel: "cell"
    });
  }
  static async ["monitorBaseInfo"](p1149) {
    const v1015 = {
      wGCHD: function (p1150, p1151) {
        return p1150 ^ p1151;
      },
      mqxZA: function (p1152, p1153) {
        return p1152 ^ p1153;
      }
    };
    const v1016 = global.monitorInfo.purchaseCodeEndDate;
    const v1017 = global.monitorInfo.purchaseCodeValid;
    const v1018 = global.monitorInfo.purchaseCodeType;
    const v1019 = global.monitorInfo.purchaseCodeProjectCount;
    const v1020 = await ProjectModel.getProjectCountByType();
    let v1021 = v1015.wGCHD(286151, 286151);
    let v1022 = {};
    if (v1020) {
      v1020.forEach(p1154 => {
        v1021 += p1154.count * 1;
        v1022[p1154.projectType] = p1154.count;
      });
    }
    const v1023 = await ProjectModel.getProjectCountByForbidden();
    v1022.forbidden = v1023 && v1023.length ? v1023[0].count * v1015.mqxZA(449631, 449630) : 0;
    v1021 += v1022.forbidden;
    p1149.response.status = 200;
    p1149.body = vRequire14.SUCCESS_200("success", {
      endDate: v1016,
      isValid: v1017,
      productType: v1018,
      totalProjectCount: v1019,
      useProjectCount: v1021,
      projectCountObj: v1022,
      webfunnyVersion: vF25
    });
  }
  static async getLogCountInfoByDay(p1155) {
    const v1024 = {
      HHTfU: function (p1156, p1157) {
        return p1156 ^ p1157;
      },
      ABqXO: function (p1158, p1159) {
        return p1158 + p1159;
      },
      ZxebL: function (p1160, p1161) {
        return p1160 ^ p1161;
      },
      dXodr: "success"
    };
    const {
      companyId: _0x1a0d7e,
      dayDiff = 0
    } = p1155.request.body;
    const v1025 = await ProjectModel.getAllProjectListForCompany(_0x1a0d7e);
    let v1026 = {};
    let v1027 = {};
    for (let v1028 = v1024.HHTfU(164720, 164720); v1028 < v1025.length; v1028++) {
      const {
        webMonitorId: _0x17cb7b,
        projectName: _0x21aca9
      } = v1025[v1028];
      v1027[_0x17cb7b] = _0x21aca9;
      const v1029 = await CustomerPVModel.getLogCountForDay(_0x17cb7b, dayDiff);
      const v1030 = await BehaviorInfoModel.getLogCountForDay(_0x17cb7b, dayDiff);
      const v1031 = await HttpErrorInfoModel.getLogCountForDay(_0x17cb7b, dayDiff);
      const v1032 = await HttpLogInfoModel.getLogCountForDay(_0x17cb7b, dayDiff);
      const v1033 = await HttpLogReqInfoModel.getLogCountForDay(_0x17cb7b, dayDiff);
      const v1034 = await JavascriptErrorInfoModel.getLogCountForDay(_0x17cb7b, dayDiff);
      const v1035 = await PageLoadInfoModel.getLogCountForDay(_0x17cb7b, dayDiff);
      const v1036 = await ResourceLoadInfoModel.getLogCountForDay(_0x17cb7b, dayDiff);
      let v1037 = v1024.ABqXO(v1032 && v1032.length ? v1032[0].count * v1024.HHTfU(849315, 849314) : 0, v1033 && v1033.length ? v1033[0].count * 1 : 0) + (v1031 && v1031.length ? v1031[0].count * 1 : 0);
      v1026[_0x17cb7b] = {
        pvCount: v1029 && v1029.length ? v1029[0].count : 0,
        behaviorCount: v1030 && v1030.length ? v1030[v1024.HHTfU(899828, 899828)].count : 0,
        httpCount: v1037,
        errorCount: v1034 && v1034.length ? v1034[v1024.HHTfU(983048, 983048)].count : 0,
        perfCount: v1035 && v1035.length ? v1035[v1024.ZxebL(130738, 130738)].count : 0,
        otherCount: v1036 && v1036.length ? v1036[0].count : 0
      };
    }
    p1155.response.status = 200;
    p1155.body = vRequire14.SUCCESS_200(v1024.dXodr, {
      logCountList: v1026,
      projectNameList: v1027
    });
  }
  static async getResolveIdea(p1162) {}
  static async getEchartStatic(p1163) {
    const v1038 = {
      vzNaZ: "../lib/echarts/worldCapital_zh",
      VFeVs: "../lib/echarts/worldNameMap"
    };
    const vRequire31 = require(v1038.vzNaZ);
    const vRequire32 = require(v1038.VFeVs);
    p1163.response.status = 200;
    p1163.body = vRequire14.SUCCESS_200("success", {
      worldCapital: vRequire31,
      worldNameMap: vRequire32
    });
  }
  static async checkAlarmResult(p1164) {
    const v1039 = {
      nodwI: function (p1165, p1166) {
        return p1165 ^ p1166;
      },
      AcVXR: "yyyy-MM-dd hh:mm 00",
      ikYaw: "yyyy-MM-dd hh:mm:00",
      KpilN: function (p1167, p1168) {
        return p1167 ^ p1168;
      },
      zBXnf: "healthScore",
      xcmwH: function (p1169, p1170) {
        return p1169 > p1170;
      },
      vZpNi: function (p1171, p1172) {
        return p1171 * p1172;
      },
      mNlyr: function (p1173, p1174) {
        return p1173 > p1174;
      },
      omruM: function (p1175, p1176) {
        return p1175 ^ p1176;
      },
      OgJRF: function (p1177, p1178) {
        return p1177 * p1178;
      },
      lYAcH: function (p1179, p1180) {
        return p1179 / p1180;
      },
      HuoAM: function (p1181, p1182) {
        return p1181 * p1182;
      },
      UNpRa: function (p1183, p1184) {
        return p1183 * p1184;
      },
      vaTTp: function (p1185, p1186) {
        return p1185 ^ p1186;
      },
      QRakg: function (p1187, p1188) {
        return p1187 / p1188;
      },
      sqPyD: function (p1189, p1190) {
        return p1189 ^ p1190;
      },
      ExGFP: "consoleErrorCount",
      VXKSU: function (p1191, p1192) {
        return p1191 ^ p1192;
      },
      ponkV: "resourceErrorPer",
      jBixP: function (p1193, p1194) {
        return p1193 ^ p1194;
      },
      fTwCG: function (p1195, p1196) {
        return p1195 / p1196;
      },
      yuCld: "success"
    };
    let v1040 = 0;
    const {
      alarmRule: _0x5ebfb9,
      webMonitorId: _0x4fb1b8,
      type: _0x18dd86
    } = p1164.request.body;
    const {
      statCycle: _0x414b9b
    } = _0x5ebfb9;
    const v1041 = new Date().getTime();
    const v1042 = new Date(v1041 - _0x414b9b * v1039.nodwI(785685, 785705) * 1000).Format(v1039.AcVXR);
    const v1043 = new Date(v1041).Format(v1039.ikYaw);
    const v1044 = await CustomerPVModel.getPvUvInRealTimeByMinute(_0x4fb1b8, v1042, v1043);
    const v1045 = v1044 && v1044.length ? v1044[v1039.KpilN(610473, 610473)] : {};
    const {
      pvCount = v1039.nodwI(327863, 327863),
      uvCount = 0
    } = v1045;
    const vUvCount = uvCount;
    let v1046 = [];
    let v1047 = 0;
    let v1048 = [];
    let v1049 = [];
    let v1050 = [];
    let v1051 = [];
    let v1052 = v1039.KpilN(158550, 158550);
    let v1053 = 0;
    let v1054 = 0;
    let v1055 = 0;
    switch (_0x18dd86) {
      case "pvCount":
      case "uvCount":
        v1040 = _0x18dd86 === "pvCount" ? pvCount : uvCount;
        break;
      case v1039.zBXnf:
        v1048 = await JavascriptErrorInfoModel.getJsErrorUserCountByMinute(_0x4fb1b8, _0x414b9b);
        v1049 = await JavascriptErrorInfoModel.getConsoleErrorUserCountByMinute(_0x4fb1b8, _0x414b9b);
        v1050 = await ResourceLoadInfoModel.getResourceErrorUserCountByMinute(_0x4fb1b8, _0x414b9b);
        v1051 = await HttpErrorInfoModel.getHttpErrorUserCountToday(_0x4fb1b8, _0x414b9b);
        const v1056 = v1048[0].count;
        const v1057 = v1049[0].count;
        const v1058 = v1050[0].count;
        const v1059 = v1051[0].count;
        v1052 = v1039.xcmwH(vUvCount, v1039.nodwI(749058, 749058)) ? v1039.vZpNi(v1056 / vUvCount, 100) : 0;
        v1052 = v1052 > 100 ? 100 : v1052;
        v1053 = v1039.xcmwH(vUvCount, 0) ? v1039.vZpNi(v1057 / vUvCount, 100) : 0;
        v1053 = v1039.mNlyr(v1053, 100) ? v1039.omruM(471899, 471871) : v1053;
        v1054 = vUvCount > 0 ? v1039.OgJRF(v1039.lYAcH(v1058, vUvCount), 100) : 0;
        v1054 = v1054 > 100 ? 100 : v1054;
        v1055 = vUvCount > 0 ? v1059 / vUvCount : 0;
        v1055 = v1055 > v1039.nodwI(256721, 256693) ? 100 : v1055;
        let v1060 = v1039.HuoAM(20, v1052) / v1039.omruM(713654, 713682) + v1039.UNpRa(v1039.nodwI(922318, 922330), v1053) / v1039.vaTTp(352649, 352749) + v1039.lYAcH(v1039.omruM(859641, 859623) * v1054, 100) + v1039.QRakg(v1055 * 30, 100);
        v1060 = parseInt(vRequire7.toFixed((100 - v1060) / 100, v1039.vaTTp(586167, 586165)) * 100);
        v1040 = v1060;
        break;
      case "jsErrorCount":
        v1046 = await JavascriptErrorInfoModel.getJsErrorUserCountByMinute(_0x4fb1b8, _0x414b9b);
        v1040 = v1046[0].count;
        break;
      case "jsErrorPer":
        v1046 = await JavascriptErrorInfoModel.getJsErrorUserCountByMinute(_0x4fb1b8, _0x414b9b);
        v1047 = vUvCount > v1039.sqPyD(646908, 646908) ? v1039.lYAcH(v1046[v1039.omruM(355014, 355014)].count, vUvCount) * 100 : 0;
        v1047 = v1052 > 100 ? 100 : v1052;
        v1040 = vRequire7.toFixed(v1047, 2);
        break;
      case v1039.ExGFP:
        v1046 = await JavascriptErrorInfoModel.getConsoleErrorUserCountByMinute(_0x4fb1b8, _0x414b9b);
        v1040 = v1046[0].count;
        break;
      case "consoleErrorPer":
        v1046 = await JavascriptErrorInfoModel.getConsoleErrorUserCountByMinute(_0x4fb1b8, _0x414b9b);
        v1047 = vUvCount > 0 ? v1039.lYAcH(v1046[0].count, vUvCount) * 100 : v1039.VXKSU(289067, 289067);
        v1047 = v1052 > 100 ? 100 : v1052;
        v1040 = vRequire7.toFixed(v1047, v1039.nodwI(372010, 372008));
        break;
      case "resourceErrorCount":
        v1046 = await ResourceLoadInfoModel.getResourceErrorUserCountByMinute(_0x4fb1b8, _0x414b9b);
        v1040 = v1046[0].count;
        break;
      case v1039.ponkV:
        v1046 = await ResourceLoadInfoModel.getResourceErrorUserCountByMinute(_0x4fb1b8, _0x414b9b);
        v1047 = v1039.xcmwH(vUvCount, 0) ? v1046[v1039.jBixP(491149, 491149)].count / vUvCount * 100 : 0;
        v1047 = v1039.mNlyr(v1052, 100) ? 100 : v1052;
        v1040 = vRequire7.toFixed(v1047, v1039.vaTTp(690035, 690033));
        break;
      case "httpErrorCount":
        v1046 = await HttpErrorInfoModel.getHttpErrorUserCountToday(_0x4fb1b8, _0x414b9b);
        v1040 = v1046[v1039.vaTTp(497782, 497782)].count;
        break;
      case "httpErrorPer":
        v1046 = await HttpErrorInfoModel.getHttpErrorUserCountToday(_0x4fb1b8, _0x414b9b);
        v1047 = vUvCount > 0 ? v1039.fTwCG(v1046[0].count, vUvCount) * 100 : 0;
        v1047 = v1052 > v1039.KpilN(597344, 597252) ? 100 : v1052;
        v1040 = vRequire7.toFixed(v1047, 2);
        break;
      default:
        break;
    }
    p1164.response.status = 200;
    p1164.body = vRequire14.SUCCESS_200(v1039.yuCld, v1040);
  }
  static async getApplicationInfo(p1197) {
    const v1061 = {
      sDsTQ: function (p1198, p1199) {
        return p1198 ^ p1199;
      },
      qybtv: function (p1200, p1201) {
        return p1200 ^ p1201;
      },
      srmCf: "alarm"
    };
    const v1062 = await ProjectModel.getAllProjectList();
    const v1063 = await ProjectModel.getProjectHealthByScore();
    const v1064 = v1062 ? v1062.length : v1061.sDsTQ(626520, 626520);
    const v1065 = v1063 ? v1063.length : 0;
    let v1066 = v1061.qybtv(463580, 463580);
    const v1067 = await MessageModel.getTotalCountForType(v1061.srmCf);
    const v1068 = v1067 && v1067.length ? v1067[0].count : 0;
    for (let v1069 = 0; v1069 < v1062.length; v1069++) {
      const {
        webMonitorId: _0x10a49a
      } = v1062[v1069];
      const v1070 = new Date().Format("yyyy-MM");
      const v1071 = await InfoCountByDayModel.getTotalCountForMonth(_0x10a49a, v1070, "uv_count_day");
      if (v1071 && v1071.length) {
        v1066 += v1071[v1061.sDsTQ(723734, 723734)].count * v1061.sDsTQ(984137, 984136);
      }
    }
    p1197.response.status = 200;
    p1197.body = vRequire14.SUCCESS_200("success", {
      runTimesForMonth: v1066,
      limitRunTimesForMonth: v700,
      applicationCount: v1064,
      unhealthyApplicationCount: v1065,
      alarmCount: v1068
    });
  }
  static async ["getExportCode"](p1202) {
    const v1072 = {
      bzsWH: function (p1203, p1204) {
        return p1203 + p1204;
      },
      LirYu: function (p1205, p1206) {
        return p1205 ^ p1206;
      },
      lbaoZ: "success"
    };
    const v1073 = typeof p1202.request.body === "string" ? JSON.parse(p1202.request.body) : p1202.request.body;
    const {
      apiName: _0x946f6f
    } = v1073;
    const v1074 = v1072.bzsWH(Math.floor(Math.random() * 100000), 100000);
    const v1075 = global.monitorInfo.exportRandomNumber;
    v1075[_0x946f6f] = {
      code: v1074,
      endTime: new Date().getTime() + 60000
    };
    p1202.response.status = v1072.LirYu(510938, 510738);
    p1202.body = vRequire14.SUCCESS_200(v1072.lbaoZ, v1074);
  }
}
class C14 {
  static async ["create"](p1207) {
    const v1076 = {
      XWmQU: "创建信息成功"
    };
    let v1077 = p1207.request.body;
    if (v1077.title && v1077.author && v1077.content && v1077.category) {
      let v1078 = await ConfigModel.createConfig(v1077);
      let v1079 = await ConfigModel.getConfigDetail(v1078.id);
      p1207.response.status = 200;
      p1207.body = vRequire14.SUCCESS_200(v1076.XWmQU, v1079);
    } else {
      p1207.response.status = 412;
      p1207.body = vRequire14.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async refreshTokenList() {
    const v1080 = await ConfigModel.getAllConfigList();
    const v1081 = {};
    v1080.forEach(p1208 => {
      v1081[p1208.configName] = p1208.configValue;
    });
    global.monitorInfo.tokenListInMemory = v1081;
  }
  static async getConfig(p1209) {
    return ConfigModel.getConfigByConfigName(p1209);
  }
  static async ["updateConfig"](p1210, p1211) {
    vRequire13.printInfo("monitor-master-uuid：" + p1211.configValue);
    console.log("monitor-master-uuid：" + p1211.configValue);
    const v1082 = await ConfigModel.getConfigByName(p1210);
    if (v1082 && v1082[0]) {
      const {
        dataId: _0x4c748a
      } = v1082[0];
      await ConfigModel.update(_0x4c748a, p1211);
    } else {
      await ConfigModel.createConfig({
        configName: p1210,
        ...p1211
      });
    }
  }
  static async ["getConfigTest"](p1212) {
    const v1083 = {
      cRdmT: function (p1213, p1214) {
        return p1213 ^ p1214;
      }
    };
    const v1084 = await ConfigModel.getAllConfigList();
    p1212.response.status = v1083.cRdmT(108153, 108209);
    p1212.body = vRequire14.SUCCESS_200("创建信息成功", v1084);
  }
  static async storeTokenToMemory(p1215) {
    const v1085 = {
      kBJJg: "token解析失败：",
      LikjP: function (p1216, p1217, p1218, p1219) {
        return p1216(p1217, p1218, p1219);
      }
    };
    const v1086 = JSON.parse(p1215.request.body);
    const {
      accessToken: _0xd0b5ec
    } = v1086;
    v1085.LikjP(v44, _0xd0b5ec, vRequire17.sign, async (p1220, p1221) => {
      if (p1220) {
        vRequire13.printError(v1085.kBJJg, p1220);
        return;
      }
      const {
        emailName: _0xf83e73
      } = p1221;
      const v1087 = global.monitorInfo.tokenListInMemory || {};
      v1087[_0xf83e73] = _0xd0b5ec;
      const v1088 = await ConfigModel.getConfigByName(_0xf83e73);
      if (v1088) {
        await ConfigModel.updateConfig(_0xf83e73, {
          configValue: _0xd0b5ec
        }).catch(p1222 => {
          vRequire13.error(p1215, p1222);
        });
      } else {
        await ConfigModel.createConfig({
          configName: _0xf83e73,
          configValue: _0xd0b5ec
        });
      }
    });
    p1215.response.status = 200;
    p1215.body = vRequire14.SUCCESS_200("Token存储完成！", 0);
  }
}
class C15 {
  static async getConnectStatusList(p1223) {
    const v1089 = vRequire7.parseQs(p1223.request.url);
    const {
      webMonitorId: _0x2e8159
    } = v1089;
    const v1090 = await CustomerStatusModel.getTodayList(_0x2e8159);
    p1223.response.status = 200;
    p1223.body = vRequire14.SUCCESS_200("success", v1090);
  }
  static async addConnectStatus(p1224) {
    const v1091 = {
      iQOkN: "off"
    };
    const v1092 = vRequire7.parseQs(p1224.request.url);
    const {
      userId: _0x7e78d4,
      webMonitorId: _0x2116fa
    } = v1092;
    const v1093 = await CustomerStatusModel.getCustomerStatusByWebMonitorIdAndUserId(_0x2116fa, _0x7e78d4);
    if (v1093.length > 0) {
      await CustomerStatusModel.updateCustomerStatus(_0x2116fa, _0x7e78d4, {
        connectStatus: "on"
      });
    } else {
      await CustomerStatusModel.createCustomerStatus({
        userId: _0x7e78d4,
        webMonitorId: _0x2116fa,
        connectStatus: "on",
        vconsoleStatus: v1091.iQOkN,
        videosStatus: "off"
      });
    }
    await C32.updateCustomerStatusIntoMemory();
    p1224.response.status = 200;
    p1224.body = vRequire14.SUCCESS_200("success", 0);
  }
  static async addVconsoleStatus(p1225) {
    const v1094 = {
      SVeAW: function (p1226, p1227) {
        return p1226 ^ p1227;
      }
    };
    const v1095 = vRequire7.parseQs(p1225.request.url);
    const {
      userId: _0x1f0bb9,
      webMonitorId: _0x4bb670
    } = v1095;
    const v1096 = await CustomerStatusModel.getCustomerStatusByWebMonitorIdAndUserId(_0x4bb670, _0x1f0bb9);
    if (v1096.length > v1094.SVeAW(682813, 682813)) {
      await CustomerStatusModel.updateCustomerStatus(_0x4bb670, _0x1f0bb9, {
        vconsoleStatus: "on"
      });
    } else {
      await CustomerStatusModel.createCustomerStatus({
        userId: _0x1f0bb9,
        webMonitorId: _0x4bb670,
        connectStatus: "off",
        vconsoleStatus: "on",
        videosStatus: "off"
      });
    }
    setTimeout(() => {
      C32.updateCustomerStatusIntoMemory();
    }, 1000);
    p1225.response.status = 200;
    p1225.body = vRequire14.SUCCESS_200("success", 0);
  }
  static async closeOperation(p1228) {
    const v1097 = {
      hVGNo: "videos",
      NDsMA: "success",
      nIFOI: function (p1229, p1230) {
        return p1229 ^ p1230;
      }
    };
    const v1098 = JSON.parse(p1228.request.body);
    const {
      userId: _0x6c52b4,
      type: _0x165c3f,
      webMonitorId: _0x1bcd4e
    } = v1098;
    switch (_0x165c3f) {
      case "connect":
        await CustomerStatusModel.updateCustomerStatus(_0x1bcd4e, _0x6c52b4, {
          connectStatus: "off"
        });
        break;
      case "vconsole":
        await CustomerStatusModel.updateCustomerStatus(_0x1bcd4e, _0x6c52b4, {
          vconsoleStatus: "off"
        });
        break;
      case v1097.hVGNo:
        await CustomerStatusModel.updateCustomerStatus(_0x1bcd4e, _0x6c52b4, {
          videosStatus: "off"
        });
        break;
    }
    await C32.updateCustomerStatusIntoMemory();
    p1228.response.status = 200;
    p1228.body = vRequire14.SUCCESS_200(v1097.NDsMA, v1097.nIFOI(679931, 679931));
  }
  static async ["openOperation"](p1231) {
    const v1099 = {
      dzWno: "connect",
      sSAJD: function (p1232, p1233) {
        return p1232 ^ p1233;
      }
    };
    const v1100 = JSON.parse(p1231.request.body);
    const {
      userId: _0x48dcbd,
      type: _0x1c6aab,
      webMonitorId: _0x96f767
    } = v1100;
    switch (_0x1c6aab) {
      case v1099.dzWno:
        await CustomerStatusModel.updateCustomerStatus(_0x96f767, _0x48dcbd, {
          connectStatus: "on"
        });
        break;
      case "vconsole":
        await CustomerStatusModel.updateCustomerStatus(_0x96f767, _0x48dcbd, {
          vconsoleStatus: "on"
        });
        break;
      case "videos":
        await CustomerStatusModel.updateCustomerStatus(_0x96f767, _0x48dcbd, {
          videosStatus: "on"
        });
        break;
    }
    await C32.updateCustomerStatusIntoMemory();
    p1231.response.status = v1099.sSAJD(888966, 888910);
    p1231.body = vRequire14.SUCCESS_200("success", 0);
  }
}
class C16 {
  static async create(p1234) {
    const v1101 = {
      KHdqa: function (p1235, p1236) {
        return p1235 ^ p1236;
      }
    };
    const v1102 = JSON.parse(p1234.request.body);
    const {
      funnelName: _0x26ab29,
      funnelIds: _0x4d5730
    } = v1102;
    const v1103 = {
      funnelName: _0x26ab29,
      funnelIds: _0x4d5730
    };
    if (v1102.funnelName) {
      let v1104 = await FunnelModel.createFunnel(v1103);
      let v1105 = await FunnelModel.getFunnelDetail(v1104.id);
      p1234.response.status = v1101.KHdqa(899134, 899318);
      p1234.body = vRequire14.SUCCESS_200("创建信息成功", v1105 || {});
    } else {
      p1234.response.status = 412;
      p1234.body = vRequire14.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async getFunnelList(p1237) {
    const v1106 = {
      aLoLe: function (p1238, p1239) {
        return p1238 ^ p1239;
      }
    };
    let v1107 = p1237.request.body;
    if (v1107) {
      const v1108 = await FunnelModel.getFunnelList();
      p1237.response.status = v1106.aLoLe(441460, 441532);
      p1237.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1108);
    } else {
      p1237.response.status = 412;
      p1237.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
  static async ["detail"](p1240) {
    const v1109 = {
      FLwkA: function (p1241, p1242) {
        return p1241 ^ p1242;
      },
      gOJFq: "查询成功！"
    };
    let v1110 = p1240.params.id;
    if (v1110) {
      let v1111 = await FunnelModel.getFunnelDetail(v1110);
      p1240.response.status = v1109.FLwkA(370440, 370624);
      p1240.body = vRequire14.SUCCESS_200(v1109.gOJFq, v1111);
    } else {
      p1240.response.status = 412;
      p1240.body = vRequire14.ERROR_412("信息ID必须传");
    }
  }
  static async ["delete"](p1243) {
    const v1112 = {
      gqNpc: function (p1244, p1245) {
        return p1244 ^ p1245;
      },
      AmhBQ: function (p1246, p1247) {
        return p1246 ^ p1247;
      },
      oZFxy: "信息ID必须传！"
    };
    let v1113 = JSON.parse(p1243.request.body);
    let v1114 = v1113.id;
    if (v1114 && !isNaN(v1114)) {
      await FunnelModel.deleteFunnel(v1114);
      p1243.response.status = v1112.gqNpc(501042, 501242);
      p1243.body = vRequire14.SUCCESS_200("删除信息成功！");
    } else {
      p1243.response.status = v1112.AmhBQ(701237, 701097);
      p1243.body = vRequire14.ERROR_412(v1112.oZFxy);
    }
  }
  static async ["update"](p1248) {
    const v1115 = {
      zPTOl: function (p1249, p1250) {
        return p1249 ^ p1250;
      },
      XOESB: function (p1251, p1252) {
        return p1251 ^ p1252;
      }
    };
    let v1116 = p1248.request.body;
    let v1117 = p1248.params.id;
    if (v1116) {
      await FunnelModel.updateFunnel(v1117, v1116);
      let v1118 = await FunnelModel.getFunnelDetail(v1117);
      p1248.response.status = v1115.zPTOl(686057, 685857);
      p1248.body = vRequire14.SUCCESS_200("更新信息成功！", v1118);
    } else {
      p1248.response.status = v1115.XOESB(809620, 809736);
      p1248.body = vRequire14.ERROR_412("更新信息失败！");
    }
  }
}
class C17 {
  static async create(p1253) {
    const v1119 = {
      NRWWw: function (p1254, p1255) {
        return p1254 ^ p1255;
      },
      mSsEm: "创建信息失败，请求参数不能为空！"
    };
    const v1120 = p1253.request.body;
    const v1121 = JSON.parse(v1120.data);
    if (req.happenTime) {
      let v1122 = await InfoCountByHourModel.createInfoCountByHour(v1121);
      let v1123 = await InfoCountByHourModel.getInfoCountByHourDetail(v1122.id);
      p1253.response.status = 200;
      p1253.body = vRequire14.SUCCESS_200("创建信息成功", v1123);
    } else {
      p1253.response.status = v1119.NRWWw(325021, 324609);
      p1253.body = vRequire14.ERROR_412(v1119.mSsEm);
    }
  }
  static async ["getInfoCountByHourList"](p1256) {
    let v1124 = p1256.request.body;
    if (v1124) {
      const v1125 = await InfoCountByHourModel.getInfoCountByHourList();
      p1256.response.status = 200;
      p1256.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1125);
    } else {
      p1256.response.status = 412;
      p1256.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
  static async detail(p1257) {
    const v1126 = {
      ULdxB: "信息ID必须传"
    };
    let v1127 = p1257.params.id;
    if (v1127) {
      let v1128 = await InfoCountByHourModel.getInfoCountByHourDetail(v1127);
      p1257.response.status = 200;
      p1257.body = vRequire14.SUCCESS_200("查询成功！", v1128);
    } else {
      p1257.response.status = 412;
      p1257.body = vRequire14.ERROR_412(v1126.ULdxB);
    }
  }
  static async ["delete"](p1258) {
    let v1129 = p1258.params.id;
    if (v1129 && !isNaN(v1129)) {
      await InfoCountByHourModel.deleteInfoCountByHour(v1129);
      p1258.response.status = 200;
      p1258.body = vRequire14.SUCCESS_200("删除信息成功！");
    } else {
      p1258.response.status = 412;
      p1258.body = vRequire14.ERROR_412("信息ID必须传！");
    }
  }
  static async update(p1259) {
    const v1130 = {
      zlFEx: "更新信息成功！"
    };
    let v1131 = p1259.request.body;
    let v1132 = p1259.params.id;
    if (v1131) {
      await InfoCountByHourModel.updateInfoCountByHour(v1132, v1131);
      let v1133 = await InfoCountByHourModel.getInfoCountByHourDetail(v1132);
      p1259.response.status = 200;
      p1259.body = vRequire14.SUCCESS_200(v1130.zlFEx, v1133);
    } else {
      p1259.response.status = 412;
      p1259.body = vRequire14.ERROR_412("更新信息失败！");
    }
  }
}
class C18 {
  static async getSysInfo(p1260) {
    const v1134 = {
      OkBPk: function (p1261, p1262) {
        return p1261 ^ p1262;
      }
    };
    p1260.response.status = v1134.OkBPk(727379, 727451);
    p1260.body = vRequire14.SUCCESS_200("success", {
      invalid: true
    });
  }
  static async ["createPurchaseCode"](p1263) {
    const v1135 = {
      fShCu: "purchaseCode",
      NYtgM: "success"
    };
    const v1136 = p1263.request.body;
    const v1137 = JSON.parse(v1136);
    const {
      inputPurchaseCode: _0x1e2a5e,
      inputSecretCode: _0x2a05d1
    } = v1137;
    await ConfigModel.updateConfig(v1135.fShCu, {
      configValue: _0x1e2a5e
    });
    await ConfigModel.updateConfig("secretCode", {
      configValue: _0x2a05d1
    });
    C18.restartServer();
    p1263.response.status = 200;
    p1263.body = vRequire14.SUCCESS_200(v1135.NYtgM, 0);
  }
  static async ["restartServer"]() {
    const v1138 = {
      ZLoYJ: "npm",
      GtnkD: "run"
    };
    switch (vRequire28.platform) {
      case "win32":
        spawn(vRequire28.platform === "win32" ? "npm.cmd" : v1138.ZLoYJ, [v1138.GtnkD, "prd_restart"], {
          stdio: "inherit"
        });
        break;
      case "darwin":
      default:
        try {
          execFile("./restart.sh", [], null, function (p1264, p1265, p1266) {
            console.log("服务已重启");
          });
        } catch (_0x14d7a2) {
          console.log("服务重启失败，请手动重启");
        }
        break;
    }
  }
}
class C19 {
  static async create(p1267) {
    const v1140 = {
      iZCaB: function (p1268, p1269) {
        return p1268 ^ p1269;
      },
      ZBeby: "创建信息失败，请求参数不能为空！"
    };
    const v1141 = p1267.request.body;
    const v1142 = JSON.parse(v1141.data);
    if (v1142.happenTime) {
      let v1143 = await JavascriptErrorInfoModel.createJavascriptErrorInfo(v1142);
      let v1144 = await JavascriptErrorInfoModel.getJavascriptErrorInfoDetail(v1143.id);
      p1267.response.status = v1140.iZCaB(704683, 704611);
      p1267.body = vRequire14.SUCCESS_200("创建信息成功", v1144);
    } else {
      p1267.response.status = 412;
      p1267.body = vRequire14.ERROR_412(v1140.ZBeby);
    }
  }
  static async getJavascriptErrorInfoList(p1270) {
    const v1145 = {
      TrTLk: function (p1271, p1272) {
        return p1271 ^ p1272;
      }
    };
    let v1146 = p1270.request.body;
    if (v1146) {
      const v1147 = await JavascriptErrorInfoModel.getJavascriptErrorInfoList();
      p1270.response.status = v1145.TrTLk(271419, 271603);
      p1270.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1147);
    } else {
      p1270.response.status = 412;
      p1270.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
  static async ["getJavascriptErrorCountByMinute"](p1273) {
    let v1148 = p1273.request.body;
    const v1149 = JSON.parse(v1148);
    let v1150 = [];
    await JavascriptErrorInfoModel.getJavascriptErrorCountByMinute(v1149).then(p1274 => {
      v1150 = p1274;
    });
    p1273.response.status = 200;
    p1273.body = vRequire14.SUCCESS_200("success！", {
      jsError: v1150
    });
  }
  static async getJsErrorTypeCountByMinute(p1275) {
    let v1151 = p1275.request.body;
    const v1152 = JSON.parse(v1151);
    const {
      timeHour: _0x2c6767
    } = v1152;
    const v1153 = new Date(parseInt(_0x2c6767, 10)).Format("yyyy-MM-dd hh");
    const v1154 = await JavascriptErrorInfoModel.getJsErrorTypeCountByMinute({
      ...v1152,
      infoType: "on_error"
    });
    const v1155 = await JavascriptErrorInfoModel.getJsErrorTypeCountByMinute({
      ...v1152,
      infoType: "console_error"
    });
    const v1156 = {
      onError: vRequire8.handleMinuteResult(v1154, v1153),
      consoleError: vRequire8.handleMinuteResult(v1155, v1153)
    };
    p1275.response.status = 200;
    p1275.body = vRequire14.SUCCESS_200("success！", v1156);
  }
  static async getJavascriptErrorInfoListByDay(p1276) {
    const v1157 = {
      sVxoB: function (p1277, p1278) {
        return p1277 ^ p1278;
      },
      AQqse: function (p1279, p1280) {
        return p1279 === p1280;
      },
      tctmw: function (p1281, p1282) {
        return p1281 ^ p1282;
      },
      pDpQH: function (p1283, p1284) {
        return p1283 * p1284;
      },
      lSxIg: function (p1285, p1286) {
        return p1285 / p1286;
      },
      fyuUq: function (p1287, p1288) {
        return p1287 ^ p1288;
      },
      FiVeW: "查询信息列表成功！"
    };
    const v1158 = vRequire8.parseQs(p1276.request.url);
    const {
      scope: _0x27ec00,
      startDate: _0x2ab5fb,
      endDate: _0x2b74ea,
      webMonitorId: _0x2afb3e
    } = v1158;
    const v1159 = vRequire8.addDays(0);
    const v1160 = await CustomerPVModel.uvCountForMonthByStatus(_0x2afb3e, _0x2ab5fb, "");
    const v1161 = await JavascriptErrorInfoModel.getJavascriptErrorInfoListByDay({
      ...v1158,
      infoType: "on_error"
    });
    const v1162 = await JavascriptErrorInfoModel.getJavascriptErrorInfoListByDay({
      ...v1158,
      infoType: "console_error"
    });
    const v1163 = [];
    const v1164 = [];
    v1160.forEach(p1289 => {
      const {
        day: _0x1f290b,
        count: _0x576ac4
      } = p1289;
      const v1165 = v1161.filter(p1290 => p1290.day === _0x1f290b);
      const v1166 = v1162.filter(p1291 => p1291.day === _0x1f290b);
      if (v1165 && v1165.length) {
        v1163.push({
          day: v1165[v1157.sVxoB(901729, 901729)].day,
          count: v1157.AQqse(v1165[v1157.tctmw(444445, 444445)].uvCount * v1157.sVxoB(494774, 494775), v1157.sVxoB(779843, 779843)) ? 0 : vRequire8.toFixed(v1157.pDpQH(v1157.lSxIg(v1165[0].uvCount, _0x576ac4), 100), 2)
        });
      }
      if (v1166 && v1166.length) {
        v1164.push({
          day: v1166[0].day,
          count: v1157.pDpQH(v1166[0].uvCount, 1) === v1157.fyuUq(575030, 575030) ? 0 : vRequire8.toFixed(v1166[0].uvCount / _0x576ac4 * 100, v1157.tctmw(446976, 446978))
        });
      }
    });
    const v1167 = _0x2b74ea + " 00:00:00";
    const v1168 = {
      onError: vRequire8.handleDateResult(v1161, _0x27ec00, v1167),
      onErrorPer: vRequire8.handleDateResult(v1163, _0x27ec00, v1167),
      consoleError: vRequire8.handleDateResult(v1162, _0x27ec00, v1167),
      consoleErrorPer: vRequire8.handleDateResult(v1164, _0x27ec00, v1167)
    };
    p1276.response.status = 200;
    p1276.body = vRequire14.SUCCESS_200(v1157.FiVeW, v1168);
  }
  static async ["getConsoleErrorInfoListByDay"](p1292) {
    const v1169 = {
      HwLWd: function (p1293, p1294) {
        return p1293 ^ p1294;
      },
      nrcYN: "查询信息列表失败！"
    };
    const v1170 = vRequire8.parseQs(p1292.request.url);
    v1170.infoType = UPLOAD_TYPE.CONSOLE_ERROR;
    await JavascriptErrorInfoModel.getConsoleErrorInfoListByDay(v1170).then(p1295 => {
      if (p1295) {
        p1292.response.status = 200;
        p1292.body = vRequire14.SUCCESS_200("查询信息列表成功！", vRequire8.handleDateResult(p1295));
      } else {
        p1292.response.status = v1169.HwLWd(301381, 301273);
        p1292.body = vRequire14.ERROR_412(v1169.nrcYN);
      }
    });
  }
  static async getJavascriptErrorInfoListByHour(p1296) {
    const v1171 = {
      pVCRm: "查询信息列表成功！"
    };
    const v1172 = vRequire8.parseQs(p1296.request.url);
    v1172.infoType = UPLOAD_TYPE.ON_ERROR;
    let v1173 = [];
    await JavascriptErrorInfoModel.getErrorCountByHour(v1172).then(p1297 => {
      v1173 = p1297;
    });
    let v1174 = [];
    await JavascriptErrorInfoModel.getErrorCountSevenDayAgoByHour(v1172).then(p1298 => {
      v1174 = p1298;
    });
    p1296.response.status = 200;
    p1296.body = vRequire14.SUCCESS_200(v1171.pVCRm, {
      today: v1173,
      seven: v1174
    });
  }
  static async ["getJavascriptErrorCountListByHour"](p1299) {
    const v1175 = JSON.parse(p1299.request.body);
    await JavascriptErrorInfoModel.getJavascriptErrorCountListByHour(v1175).then(p1300 => {
      p1300.forEach(p1301 => {
        p1301.hour = p1301.hour.substring(5);
      });
      if (p1300) {
        p1299.response.status = 200;
        p1299.body = vRequire14.SUCCESS_200("查询信息列表成功！", p1300);
      } else {
        p1299.response.status = 412;
        p1299.body = vRequire14.ERROR_412("查询信息列表失败！");
      }
    });
  }
  static async getJsErrorCountListByHour(p1302) {
    const v1176 = {
      Screa: function (p1303, p1304) {
        return p1303 - p1304;
      },
      nnoEM: "on_error",
      yDRmP: function (p1305, p1306) {
        return p1305 - p1306;
      },
      WQlop: function (p1307, p1308) {
        return p1307 ^ p1308;
      }
    };
    const v1177 = JSON.parse(p1302.request.body);
    const {
      webMonitorId: _0x3bd7f9,
      timeType: _0x5dd54a
    } = v1177;
    const v1178 = await JavascriptErrorInfoModel.getJsErrorCountListByHour(_0x3bd7f9, v1176.Screa(0, _0x5dd54a), v1176.nnoEM);
    v1178.forEach(p1309 => {
      p1309.hour = p1309.hour.substring(5);
    });
    const v1179 = await JavascriptErrorInfoModel.getJsErrorCountListByHour(_0x3bd7f9, v1176.yDRmP(0, _0x5dd54a), "console_error");
    v1179.forEach(p1310 => {
      p1310.hour = p1310.hour.substring(5);
    });
    const v1180 = {
      onError: vRequire8.handleHourResult(v1178, _0x5dd54a),
      consoleError: vRequire8.handleHourResult(v1179, _0x5dd54a)
    };
    p1302.response.status = v1176.WQlop(239912, 240096);
    p1302.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1180);
  }
  static async getJsErrorCountByHour(p1311) {
    const v1181 = {
      djjQJ: function (p1312, p1313) {
        return p1312 ^ p1313;
      },
      TVOYK: "查询信息列表成功！"
    };
    const v1182 = vRequire8.parseQs(p1311.request.url);
    v1182.infoType = UPLOAD_TYPE.ON_ERROR;
    const {
      timeSize: _0x27c7af
    } = v1182;
    v1182.timeSize = _0x27c7af ? _0x27c7af : "0";
    let v1183 = [];
    await JavascriptErrorInfoModel.getErrorCountByHour(v1182).then(p1314 => {
      v1183 = p1314;
      v1183.forEach(p1315 => {
        p1315.hour = p1315.hour.substring(5);
      });
    });
    let v1184 = [];
    await JavascriptErrorInfoModel.getErrorCountSevenDayAgoByHour(v1182).then(p1316 => {
      v1184 = p1316;
      v1184.forEach(p1317 => {
        p1317.hour = p1317.hour.substring(5);
      });
    });
    p1311.response.status = v1181.djjQJ(780261, 780077);
    p1311.body = vRequire14.SUCCESS_200(v1181.TVOYK, {
      today: v1183,
      seven: v1184
    });
  }
  static async getJavascriptConsoleErrorInfoListByHour(p1318) {
    const v1185 = {
      SQLjV: function (p1319, p1320) {
        return p1319 ^ p1320;
      },
      tbZqX: function (p1321, p1322) {
        return p1321 ^ p1322;
      }
    };
    const v1186 = vRequire8.parseQs(p1318.request.url);
    v1186.infoType = UPLOAD_TYPE.CONSOLE_ERROR;
    const {
      timeSize = v1185.SQLjV(710295, 710295),
      webMonitorId: _0x2a0aa2,
      infoType: _0x41d6a2
    } = v1186;
    let v1187 = [];
    await JavascriptErrorInfoModel.getErrorCountByHour({
      timeSize: timeSize,
      webMonitorId: _0x2a0aa2,
      infoType: _0x41d6a2
    }).then(p1323 => {
      v1187 = p1323;
      v1187.forEach(p1324 => {
        p1324.hour = p1324.hour.substring(5);
      });
    });
    let v1188 = [];
    await JavascriptErrorInfoModel.getErrorCountSevenDayAgoByHour(v1186).then(p1325 => {
      const v1189 = {
        dSxBE: function (p1326, p1327) {
          return p1326 ^ p1327;
        }
      };
      v1188 = p1325;
      v1188.forEach(p1328 => {
        p1328.hour = p1328.hour.substring(v1189.dSxBE(526307, 526310));
      });
    });
    p1318.response.status = v1185.tbZqX(725836, 725892);
    p1318.body = vRequire14.SUCCESS_200("查询信息列表成功！", {
      today: v1187,
      seven: v1188
    });
  }
  static async ["getJavascriptErrorSort"](p1329) {
    const v1190 = {
      sHqEB: function (p1330, p1331) {
        return p1330 ^ p1331;
      }
    };
    const v1191 = JSON.parse(p1329.request.body);
    let v1192 = [];
    await JavascriptErrorInfoModel.getJavascriptErrorSort(v1191).then(p1332 => {
      v1192 = p1332;
    });
    p1329.response.status = v1190.sHqEB(945125, 944941);
    p1329.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1192);
  }
  static async getJsErrorSort(p1333) {
    const v1193 = {
      yrMiy: function (p1334, p1335) {
        return p1334 === p1335;
      },
      KRxIv: function (p1336, p1337) {
        return p1336 ^ p1337;
      }
    };
    const v1194 = JSON.parse(p1333.request.body);
    const {
      userId: _0xa6d216,
      timeType: _0x36388f,
      webMonitorId: _0x53d2df
    } = v1194;
    const v1195 = [];
    if (_0xa6d216) {
      const v1196 = await JsErrorHandleListModel.getJsErrorHandleListListByUserId(_0x53d2df, _0xa6d216);
      v1196.forEach(p1338 => {
        v1195.push(p1338.errorMessage);
      });
      if (v1193.yrMiy(v1196.length, v1193.KRxIv(588239, 588239))) {
        p1333.response.status = 200;
        p1333.body = vRequire14.SUCCESS_200("查询信息列表成功！", []);
        return;
      }
    }
    v1194.errorMessageArray = v1195;
    let v1197 = [];
    await JavascriptErrorInfoModel.getJsErrorSort(v1194).then(p1339 => {
      v1197 = p1339;
    });
    p1333.response.status = 200;
    p1333.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1197);
  }
  static async ["getJavascriptErrorSortInfo"](p1340) {
    const v1198 = {
      jeXaT: function (p1341, p1342) {
        return p1341 ^ p1342;
      }
    };
    const v1199 = JSON.parse(p1340.request.body);
    const {
      errorMessage: _0x53877d
    } = v1199;
    const v1200 = {};
    await JavascriptErrorInfoModel.getJavascriptErrorLatestTime(_0x53877d, v1199).then(p1343 => {
      v1200.createdAt = p1343[0].createdAt;
      v1200.happenTime = p1343[v1198.jeXaT(991188, 991188)].happenTime;
    });
    await JavascriptErrorInfoModel.getJavascriptErrorAffectCount(_0x53877d, v1199).then(p1344 => {
      v1200.customerCount = p1344[0].count;
    });
    await JavascriptErrorInfoModel.getPerJavascriptErrorCountByOs(_0x53877d, v1199).then(p1345 => {
      v1200.osInfo = p1345;
    });
    p1340.response.status = 200;
    p1340.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1200);
  }
  static async ["getJsErrorSortInfo"](p1346) {
    const v1201 = {
      DPCnn: function (p1347, p1348) {
        return p1347 ^ p1348;
      }
    };
    const v1202 = JSON.parse(p1346.request.body);
    const {
      errorMessage: _0x34fe1b,
      recentMinute: _0x2f008b
    } = v1202;
    const v1203 = {};
    await JavascriptErrorInfoModel.getJavascriptErrorFirstTime(_0x34fe1b, v1202).then(p1349 => {
      v1203.firstHappenTime = p1349 && p1349.length ? p1349[0].happenTime : "";
    });
    await JavascriptErrorInfoModel.getJavascriptErrorLatestTime(_0x34fe1b, v1202).then(p1350 => {
      v1203.lastHappenTime = p1350 && p1350.length ? p1350[0].happenTime : "";
    });
    await JavascriptErrorInfoModel.getJavascriptErrorAffectCount(_0x34fe1b, v1202).then(p1351 => {
      v1203.customerCount = p1351 && p1351.length ? p1351[0].count : v1201.DPCnn(278319, 278319);
    });
    await JsErrorHandleListModel.getJsErrorHandleListByErrorMessage(_0x34fe1b, v1202.webMonitorId).then(p1352 => {
      v1203.handleInfo = p1352 && p1352.length ? p1352[0] : {};
    });
    await JavascriptErrorInfoModel.getPerJavascriptErrorCountByOs(_0x34fe1b, v1202).then(p1353 => {
      v1203.osInfo = p1353;
    });
    if (!_0x2f008b) {
      await JavascriptErrorInfoModel.getJsErrorCountByRecentMinute({
        minuteCount: 30,
        ...v1202
      }).then(p1354 => {
        v1203.trendData = p1354;
      });
    }
    p1346.response.status = 200;
    p1346.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1203);
  }
  static async getConsoleErrorSort(p1355) {
    const v1204 = {
      WLwrx: "查询信息列表成功！"
    };
    const v1205 = JSON.parse(p1355.request.body);
    let v1206 = [];
    await JavascriptErrorInfoModel.getConsoleErrorSort(v1205).then(p1356 => {
      v1206 = p1356;
    });
    p1355.response.status = 200;
    p1355.body = vRequire14.SUCCESS_200(v1204.WLwrx, v1206);
  }
  static async ["getJavascriptErrorCountByHour"](p1357) {
    const v1207 = {
      sTxsY: function (p1358, p1359) {
        return p1358 ^ p1359;
      }
    };
    const v1208 = vRequire8.parseQs(p1357.request.url);
    await JavascriptErrorInfoModel.getJavascriptErrorCountByHour(v1208).then(p1360 => {
      if (p1360) {
        p1357.response.status = v1207.sTxsY(265248, 265448);
        p1357.body = vRequire14.SUCCESS_200("查询信息列表成功！", vRequire8.handleDateResult(p1360));
      } else {
        p1357.response.status = 412;
        p1357.body = vRequire14.ERROR_412("查询信息列表失败！");
      }
    });
  }
  static async getJavascriptErrorCountByOs(p1361) {
    const v1209 = {
      qpbBE: function (p1362, p1363) {
        return p1362 ^ p1363;
      },
      dOplB: " 00:00:00"
    };
    const v1210 = vRequire8.parseQs(p1361.request.url);
    const v1211 = {};
    const {
      day: _0xe48451
    } = v1210;
    v1210.day = vRequire8.addDays(v1209.qpbBE(913002, 913002) - _0xe48451) + v1209.dOplB;
    await JavascriptErrorInfoModel.getJavascriptErrorPcCount(v1210).then(p1364 => {
      v1211.pcError = p1364.length ? p1364[0] : 0;
    });
    await JavascriptErrorInfoModel.getJavascriptErrorIosCount(v1210).then(p1365 => {
      v1211.iosError = p1365.length ? p1365[0] : 0;
    });
    await JavascriptErrorInfoModel.getJavascriptErrorAndroidCount(v1210).then(p1366 => {
      v1211.androidError = p1366.length ? p1366[0] : v1209.qpbBE(865957, 865957);
    });
    await CustomerPVModel.getCustomerPvPcCount(v1210).then(p1367 => {
      v1211.pcPv = p1367.length ? p1367[0] : 0;
    });
    await CustomerPVModel.getCustomerPvIosCount(v1210).then(p1368 => {
      v1211.iosPv = p1368.length ? p1368[0] : 0;
    });
    await CustomerPVModel.getCustomerPvAndroidCount(v1210).then(p1369 => {
      v1211.androidPv = p1369.length ? p1369[v1209.qpbBE(136462, 136462)] : 0;
      p1361.response.status = 200;
      p1361.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1211);
    });
  }
  static async getJavascriptErrorCountByType(p1370) {
    const v1212 = {
      kZrRZ: function (p1371, p1372) {
        return p1371 - p1372;
      }
    };
    const v1213 = vRequire8.parseQs(p1370.request.url);
    const {
      day: _0x381403
    } = v1213;
    v1213.day = vRequire8.addDays(v1212.kZrRZ(0, _0x381403)) + " 00:00:00";
    await JavascriptErrorInfoModel.getJavascriptErrorCountByType(v1213).then(p1373 => {
      p1370.response.status = 200;
      p1370.body = vRequire14.SUCCESS_200("查询信息成功！", p1373);
    });
  }
  static async getJavascriptErrorListByMsg(p1374) {
    const v1214 = {
      wWAjk: function (p1375, p1376) {
        return p1375(p1376);
      }
    };
    const v1215 = p1374.request.body;
    const v1216 = JSON.parse(v1215);
    await JavascriptErrorInfoModel.getJavascriptErrorListByMsg(v1214.wWAjk(decodeURIComponent, v1216.errorMsg), v1216).then(p1377 => {
      p1374.response.status = 200;
      p1374.body = vRequire14.SUCCESS_200("查询信息列表成功！", p1377);
    });
  }
  static async getJavascriptErrorAboutInfo(p1378) {
    const v1217 = {
      ZmNYo: function (p1379, p1380) {
        return p1379(p1380);
      },
      duFol: function (p1381, p1382) {
        return p1381(p1382);
      }
    };
    const v1218 = p1378.request.body;
    const v1219 = JSON.parse(v1218);
    const v1220 = {};
    await JavascriptErrorInfoModel.getJavascriptErrorAffectCount(v1217.ZmNYo(decodeURIComponent, v1219.errorMsg), v1219).then(p1383 => {
      v1220.customerCount = p1383[0].count;
    });
    await JavascriptErrorInfoModel.getJavascriptErrorOccurCountByCustomerKey(decodeURIComponent(v1219.errorMsg), v1219).then(p1384 => {
      v1220.occurCount = p1384[0].count;
    });
    await JavascriptErrorInfoModel.getAllJavascriptErrorCountByOs(v1217.duFol(decodeURIComponent, v1219.errorMsg), v1219).then(p1385 => {
      v1220.osInfo = {};
      p1385.forEach(p1386 => {
        v1220.osInfo[p1386.os] = p1386.count;
      });
      p1378.response.status = 200;
      p1378.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1220);
    });
  }
  static async getJsErrorAboutInfo(p1387) {
    const v1221 = {
      mHKsT: function (p1388, p1389) {
        return p1388 * p1389;
      }
    };
    const v1222 = JSON.parse(p1387.request.body);
    const {
      errorMessage: _0x5266d,
      webMonitorId: _0x3ba5aa,
      customerKey: _0x1661c6,
      timeType: _0x5dd0a2
    } = v1222;
    const v1223 = await JsErrorHandleListModel.getSolveStatusByErrorMsg(_0x5266d, _0x3ba5aa);
    const v1224 = vRequire8.addDays(0 - v1221.mHKsT(_0x5dd0a2, 1));
    const v1225 = v1224 + " 00:00:00";
    const v1226 = v1224 + " 23:59:59";
    const v1227 = " customerKey='" + _0x1661c6 + "' ";
    const v1228 = await CustomerPVModel.getPvInfoByCustomerKey(v1227, _0x5dd0a2, _0x3ba5aa, v1225, v1226);
    const v1229 = v1228 && v1228.length ? v1228[0] : {};
    const v1230 = {
      errorStatus: v1223 ? v1223.errorStatus : "-1",
      ...v1229
    };
    p1387.response.status = 200;
    p1387.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1230);
  }
  static async getJavascriptErrorListByPage(p1390) {
    const v1231 = {
      IErQd: function (p1391, p1392) {
        return p1391 ^ p1392;
      }
    };
    const v1232 = vRequire8.parseQs(p1390.request.url);
    await JavascriptErrorInfoModel.getJavascriptErrorListByPage(v1232).then(p1393 => {
      p1390.response.status = v1231.IErQd(711116, 710916);
      p1390.body = vRequire14.SUCCESS_200("查询信息列表成功！", p1393);
    });
  }
  static async getJsErrorCountByVersion(p1394) {
    const v1233 = {
      OgcXd: function (p1395, p1396) {
        return p1395 ^ p1396;
      }
    };
    const v1234 = JSON.parse(p1394.request.body);
    await JavascriptErrorInfoModel.getJsErrorCountByVersion(v1234).then(p1397 => {
      p1394.response.status = v1233.OgcXd(580676, 580748);
      p1394.body = vRequire14.SUCCESS_200("查询信息列表成功！", p1397);
    });
  }
  static async ["getJsErrorVersionSortInfo"](p1398) {
    const v1235 = {
      idPXG: function (p1399, p1400) {
        return p1399 ^ p1400;
      },
      mLlxV: function (p1401, p1402) {
        return p1401 ^ p1402;
      },
      PXzBE: function (p1403, p1404) {
        return p1403 ^ p1404;
      },
      VSJCc: "查询信息列表成功！"
    };
    const v1236 = JSON.parse(p1398.request.body);
    const v1237 = {};
    await JavascriptErrorInfoModel.getJsErrorVersionByTime(v1236, "asc").then(p1405 => {
      v1237.firstHappenTime = p1405[v1235.idPXG(992264, 992264)] ? p1405[v1235.idPXG(899528, 899528)].happenTime : "";
    });
    await JavascriptErrorInfoModel.getJsErrorVersionByTime(v1236, "desc").then(p1406 => {
      v1237.lastHappenTime = p1406[v1235.mLlxV(827459, 827459)] ? p1406[0].happenTime : "";
    });
    p1398.response.status = v1235.PXzBE(210243, 210315);
    p1398.body = vRequire14.SUCCESS_200(v1235.VSJCc, v1237);
  }
  static async getJavascriptErrorStackCode(p1407) {
    const v1238 = p1407.request.body;
    const v1239 = JSON.parse(v1238);
    await JavascriptErrorInfoModel.getJavascriptErrorStackCode(v1239.stackList).then(p1408 => {
      p1407.response.status = 200;
      p1407.body = vRequire14.SUCCESS_200("查询信息列表成功！", p1408);
    });
  }
  static async getJavascriptErrorStackCodeForSource(p1409) {
    const v1240 = {
      FzZzZ: function (p1410, p1411) {
        return p1410 ^ p1411;
      }
    };
    const v1241 = JSON.parse(p1409.request.body);
    const {
      locationX: _0x5052f6,
      locationY: _0x2d7b8f
    } = v1241;
    const v1242 = await JavascriptErrorInfoModel.getJavascriptErrorStackCodeForSource(_0x5052f6, _0x2d7b8f);
    p1409.response.status = v1240.FzZzZ(814034, 813850);
    p1409.body = vRequire14.SUCCESS_200("查询信息成功！", v1242);
  }
  static async getJavascriptErrorStackCodeForUrl(p1412) {
    const v1243 = JSON.parse(p1412.request.body);
    const {
      locationX: _0x32aa4d,
      locationY: _0x185889,
      sourceCodeUrl: _0x3f6cd3
    } = v1243;
    const v1244 = await JavascriptErrorInfoModel.getJavascriptErrorStackCodeForUrl(_0x32aa4d, _0x185889, _0x3f6cd3);
    p1412.response.status = 200;
    p1412.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1244);
  }
  static async javascriptErrorCountByUrl(p1413) {
    const v1245 = {
      cNoYn: function (p1414, p1415) {
        return p1414 ^ p1415;
      },
      Fiqmv: function (p1416, p1417) {
        return p1416 ^ p1417;
      }
    };
    const {
      timeType: _0x38c406,
      webMonitorId: _0xeeecdd
    } = JSON.parse(p1413.request.body);
    const v1246 = await JavascriptErrorInfoModel.javascriptErrorTotalCount(_0xeeecdd, _0x38c406);
    const v1247 = v1246 && v1246.length ? v1246[v1245.cNoYn(400266, 400266)].count : v1245.Fiqmv(179291, 179291);
    const v1248 = await JavascriptErrorInfoModel.javascriptErrorCountByUrl(_0xeeecdd, _0x38c406);
    const vV1248 = v1248;
    p1413.response.status = 200;
    p1413.body = vRequire14.SUCCESS_200("查询信息列表成功！", {
      total: v1247,
      errorUrlList: vV1248
    });
  }
  static async startAnalysisSourceCode(p1418) {
    const v1249 = {
      pPNBC: "upload",
      Tskjm: function (p1419, p1420) {
        return p1419 ^ p1420;
      },
      gJDxc: ".map"
    };
    const v1250 = JSON.parse(p1418.request.body);
    const {
      locationX: _0x130d62,
      locationY: _0x2d08e1,
      jsPath: _0x1a3863,
      webMonitorId: _0x2be790,
      uploadType: _0x34a71c
    } = v1250;
    let v1251 = "";
    if (_0x34a71c === v1249.pPNBC) {
      const v1252 = _0x1a3863.split("/");
      const v1253 = v1252[v1252.length - v1249.Tskjm(655759, 655758)] + ".map";
      v1251 = LOCAL_MONITOR_ASSETS + "/wf_source_map/" + _0x2be790 + "/" + v1253;
    } else {
      v1251 = _0x1a3863 + v1249.gJDxc;
    }
    const v1254 = await JavascriptErrorInfoModel.startAnalysisSourceCode(_0x130d62, _0x2d08e1, v1251);
    p1418.response.status = 200;
    p1418.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1254);
  }
  static async uploadMapFile(p1421) {
    const v1255 = {
      Yhnve: " 上传失败"
    };
    const v1256 = p1421.req;
    var v1257 = new vRequire24.IncomingForm();
    v1257.keepExtensions = true;
    v1257.multiples = true;
    v1257.uploadDir = vRequire19.resolve(__dirname, "..") + "/lib";
    v1257.parse(v1256, async (p1422, p1423, p1424) => {
      if (p1422) {
        console.log(p1424.files.path + v1255.Yhnve);
      }
      await fs2.renameSync(p1424.files.path, vRequire19.resolve(__dirname, "..") + "/lib/temp.min.js.map", function (p1425) {
        if (p1425) {
          console.log(p1424.files.path + " 重命名失败");
        }
      });
    });
    p1421.response.status = 200;
    p1421.body = vRequire14.SUCCESS_200("success", 0);
  }
  static async uploadSourceMap(p1426) {
    const v1258 = {
      ALDkK: " 上传失败",
      Tkwoh: "fields, files: ",
      uXmDA: function (p1427, p1428) {
        return p1427 ^ p1428;
      },
      oAUkX: function (p1429, p1430) {
        return p1429 ^ p1430;
      }
    };
    const v1259 = vRequire8.parseQs(p1426.request.url);
    const {
      webMonitorId: _0x4d2853,
      fileName: _0x4d1ca7
    } = v1259;
    console.log(v1259);
    if (!_0x4d2853) {
      p1426.response.status = v1258.uXmDA(774691, 775103);
      p1426.body = vRequire14.ERROR_412("请在请求地址中携带 webMonitorId, fileName 参数");
      return;
    }
    const v1260 = vRequire19.resolve(__dirname, "../../../") + "/views/wf_source_map/" + _0x4d2853 + "/";
    let v1261 = fs2.readdirSync(v1260);
    v1261.forEach(function (p1431) {
      const v1262 = {
        zcGOA: function (p1432, p1433) {
          return p1432 + p1433;
        }
      };
      fs2.unlink(v1260 + p1431, () => {
        console.log(v1262.zcGOA("成功删除 ", p1431));
      });
    });
    const v1263 = p1426.req;
    var v1264 = new vRequire24.IncomingForm();
    v1264.keepExtensions = true;
    v1264.multiples = true;
    v1264.uploadDir = v1260;
    await new Promise((p1434, p1435) => {
      v1264.parse(v1263, async (p1436, p1437, p1438) => {
        if (p1436) {
          console.log(p1438.file.path + v1258.ALDkK);
          p1435(p1436);
        }
        await fs2.renameSync(p1438.file.path, v1260 + "/" + _0x4d1ca7, function (p1439) {
          if (p1439) {
            console.log(p1438.file.path + " 重命名失败");
          }
          p1434("success");
        });
        console.log(v1258.Tkwoh, p1437, p1438);
      });
    });
    p1426.response.status = v1258.oAUkX(853584, 853656);
    p1426.body = vRequire14.SUCCESS_200("上传成功！", 0);
  }
  static async ["detail"](p1440) {
    const v1265 = {
      DafrL: function (p1441, p1442) {
        return p1441 ^ p1442;
      },
      EpGEW: function (p1443, p1444) {
        return p1443 ^ p1444;
      }
    };
    let v1266 = p1440.params.id;
    if (v1266) {
      let v1267 = await JavascriptErrorInfoModel.getJavascriptErrorInfoDetail(v1266);
      p1440.response.status = v1265.DafrL(451409, 451481);
      p1440.body = vRequire14.SUCCESS_200("查询成功！", v1267);
    } else {
      p1440.response.status = v1265.EpGEW(233083, 233447);
      p1440.body = vRequire14.ERROR_412("信息ID必须传");
    }
  }
  static async delete(p1445) {
    const v1268 = {
      vXKRG: "删除信息成功！"
    };
    let v1269 = p1445.params.id;
    if (v1269 && !isNaN(v1269)) {
      await JavascriptErrorInfoModel.deleteJavascriptErrorInfo(v1269);
      p1445.response.status = 200;
      p1445.body = vRequire14.SUCCESS_200(v1268.vXKRG);
    } else {
      p1445.response.status = 412;
      p1445.body = vRequire14.ERROR_412("信息ID必须传！");
    }
  }
  static async ["update"](p1446) {
    const v1270 = {
      ZuDXX: function (p1447, p1448) {
        return p1447 ^ p1448;
      }
    };
    let v1271 = p1446.request.body;
    let v1272 = p1446.params.id;
    if (v1271) {
      await JavascriptErrorInfoModel.updateJavascriptErrorInfo(v1272, v1271);
      let v1273 = await JavascriptErrorInfoModel.getJavascriptErrorInfoDetail(v1272);
      p1446.response.status = v1270.ZuDXX(136953, 136753);
      p1446.body = vRequire14.SUCCESS_200("更新信息成功！", v1273);
    } else {
      p1446.response.status = 412;
      p1446.body = vRequire14.ERROR_412("更新信息失败！");
    }
  }
  static async getErrorInfoInRealTimeByMinute(p1449) {
    const v1274 = {
      VWlzD: function (p1450, p1451) {
        return p1450 + p1451;
      },
      DQDzn: "yyyy-MM-dd hh:mm",
      eWXzD: function (p1452, p1453) {
        return p1452 ^ p1453;
      },
      TbqQU: function (p1454, p1455) {
        return p1454 > p1455;
      },
      vVHJT: function (p1456, p1457) {
        return p1456 ^ p1457;
      },
      MIXNm: function (p1458, p1459) {
        return p1458 / p1459;
      }
    };
    let v1275 = p1449.request.body;
    const v1276 = JSON.parse(v1275);
    const {
      webMonitorId: _0x57f890
    } = v1276;
    const v1277 = new Date().getTime();
    const v1278 = v1274.VWlzD(new Date(v1277 - 60000).Format(v1274.DQDzn), ":00");
    const v1279 = new Date(v1277).Format("yyyy-MM-dd hh:mm") + ":00";
    if (v1275) {
      const v1280 = {};
      const v1281 = await JavascriptErrorInfoModel.getJsErrorCountInRealTimeByMinute(_0x57f890, v1278, v1279);
      v1280[UPLOAD_TYPE.CONSOLE_ERROR] = v1274.eWXzD(955582, 955582);
      v1280[UPLOAD_TYPE.ON_ERROR] = 0;
      v1281.forEach(p1460 => {
        v1280[p1460.infoType] = p1460.count;
      });
      const v1282 = await ResourceLoadInfoModel.getResourceErrorCountInRealTimeByMinute(_0x57f890, v1278, v1279);
      const v1283 = JavascriptErrorInfoModel.getJsErrorUVCountInRealTimeByMinute(_0x57f890, v1278, v1279);
      const v1284 = JavascriptErrorInfoModel.getJsUVCountInRealTimeByMinute(_0x57f890, v1278, v1279);
      let v1285 = 0;
      if (v1274.TbqQU(v1284, v1274.vVHJT(534188, 534188))) {
        v1285 = vRequire8.toFixed(v1274.MIXNm(v1283 * v1274.vVHJT(431240, 431340), v1284), 2);
      }
      const v1286 = {
        ...v1280,
        jsErrorRate: v1285,
        ...v1282[v1274.eWXzD(695619, 695619)]
      };
      p1449.response.status = 200;
      p1449.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1286);
    } else {
      p1449.response.status = v1274.vVHJT(544724, 544328);
      p1449.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
}
class C20 {
  static async ["create"](p1461) {
    const v1287 = {
      wXmBn: function (p1462, p1463) {
        return p1462 ^ p1463;
      },
      JTaNz: function (p1464, p1465) {
        return p1464 ^ p1465;
      }
    };
    const v1288 = p1461.request.body;
    let v1289 = JSON.parse(v1288);
    v1289.handleStartDate = new Date().Format("yyyy-MM-dd hh:mm:ss");
    const v1290 = await JsErrorHandleListModel.getJsErrorHandleListByErrorMessage(v1289.errorMessage, v1289.webMonitorId);
    if (v1290.length) {
      const v1291 = v1290[0];
      const v1292 = Object.assign(v1291, v1289);
      await JsErrorHandleListModel.updateJsErrorHandleList(v1291.dataId, v1292);
      p1461.response.status = 200;
      p1461.body = vRequire14.SUCCESS_200("创建信息成功", v1290);
    } else if (v1289.errorMessage && v1289.webMonitorId) {
      v1289.errorStatus = v1287.wXmBn(955120, 955120);
      let v1293 = await JsErrorHandleListModel.createJsErrorHandleList(v1289);
      let v1294 = await JsErrorHandleListModel.getJsErrorHandleListDetail(v1293.id);
      p1461.response.status = 200;
      p1461.body = vRequire14.SUCCESS_200("创建信息成功", v1294);
    } else {
      p1461.response.status = 412;
      p1461.body = vRequire14.ERROR_412("创建信息失败，请求参数不能为空！");
    }
    const v1295 = await ProjectModel.getProjectSimpleDetail(v1289.webMonitorId);
    if (v1295 && v1295.length) {
      const {
        projectName: _0x4d9442
      } = v1295[v1287.JTaNz(784398, 784398)];
      const v1296 = JSON.stringify(["您好，刚刚收到了一条来自【官网 " + _0x4d9442 + "】的错误信息，请及时处理！"]);
      MessageModel.createMessage({
        userId: v1289.handleMan,
        title: "错误分配通知",
        content: v1296,
        type: "sys",
        isRead: 0,
        link: "http://" + accountInfo.localAssetsDomain + "/webfunny/jsError.html?activeTab=4"
      });
    }
  }
  static async getJsErrorHandleListList(p1466) {
    const v1297 = {
      bAeVy: function (p1467, p1468) {
        return p1467 ^ p1468;
      },
      zLpib: function (p1469, p1470) {
        return p1469 ^ p1470;
      }
    };
    const v1298 = JSON.parse(p1466.request.body);
    const {
      webMonitorId: _0x3d9f61
    } = v1298;
    if (req) {
      const v1299 = await JsErrorHandleListModel.getJsErrorHandleListList(_0x3d9f61);
      p1466.response.status = v1297.bAeVy(465769, 465825);
      p1466.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1299);
    } else {
      p1466.response.status = v1297.zLpib(550576, 550700);
      p1466.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
  static async ignoreErrorByApplication(p1471) {
    const v1300 = vRequire7.parseQs(p1471.request.url);
    if (v1300) {
      const v1301 = await JsErrorHandleListModel.ignoreErrorByApplication(v1300);
      p1471.response.status = 200;
      p1471.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1301);
    } else {
      p1471.response.status = 412;
      p1471.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
  static async delete(p1472) {
    const v1302 = {
      YbeLG: function (p1473, p1474) {
        return p1473 ^ p1474;
      },
      zeWrX: "信息ID必须传！"
    };
    let v1303 = p1472.params.id;
    if (v1303 && !isNaN(v1303)) {
      await JsErrorHandleListModel.deleteJsErrorHandleList(v1303);
      p1472.response.status = v1302.YbeLG(613503, 613559);
      p1472.body = vRequire14.SUCCESS_200("删除信息成功！");
    } else {
      p1472.response.status = v1302.YbeLG(422924, 423312);
      p1472.body = vRequire14.ERROR_412(v1302.zeWrX);
    }
  }
  static async update(p1475) {
    let v1304 = p1475.request.body;
    let v1305 = p1475.params.id;
    if (v1304) {
      await JsErrorHandleListModel.updateJsErrorHandleList(v1305, v1304);
      let v1306 = await JsErrorHandleListModel.getJsErrorHandleListDetail(v1305);
      p1475.response.status = 200;
      p1475.body = vRequire14.SUCCESS_200("更新信息成功！", v1306);
    } else {
      p1475.response.status = 412;
      p1475.body = vRequire14.ERROR_412("更新信息失败！");
    }
  }
  static async resolveJsErrorInHandleList(p1476) {
    const v1307 = {
      BVJRW: function (p1477, p1478) {
        return p1477 ^ p1478;
      }
    };
    const v1308 = p1476.request.body;
    let v1309 = JSON.parse(v1308);
    const {
      errorMessageArray: _0x4d579f,
      webMonitorId: _0x20aaa5,
      errorStatus: _0xa8509a
    } = v1309;
    _0x4d579f.forEach(async p1479 => {
      let v1310 = await JsErrorHandleListModel.getJsErrorHandleListByErrorMessage(p1479, _0x20aaa5);
      if (v1310 && v1310.length) {
        const v1311 = v1310[0];
        const v1312 = new Date().Format("yyyy-MM-dd hh:mm:ss");
        const v1313 = Object.assign(v1311, {
          errorMessage: p1479,
          errorStatus: _0xa8509a,
          handleStartDate: v1312,
          webMonitorId: _0x20aaa5
        });
        JsErrorHandleListModel.updateJsErrorHandleList(v1311.dataId, v1313);
      } else {
        const v1314 = new Date().Format("yyyy-MM-dd hh:mm:ss");
        JsErrorHandleListModel.resolveJsErrorInHandleList(p1479, _0x20aaa5, _0xa8509a, v1314);
      }
    });
    p1476.response.status = v1307.BVJRW(140617, 140673);
    p1476.body = vRequire14.SUCCESS_200("操作成功", v1307.BVJRW(106867, 106867));
  }
  static async ["getSolveStatusByErrorMsg"](p1480) {
    const v1315 = JSON.parse(p1480.request.body);
    const {
      errorMessage: _0x1ababd,
      webMonitorId: _0x268eba
    } = v1315;
    const v1316 = await JsErrorHandleListModel.getSolveStatusByErrorMsg(_0x1ababd, _0x268eba);
    p1480.response.status = 200;
    p1480.body = vRequire14.SUCCESS_200("操作成功", v1316.errorStatus);
  }
  static async getSolveChartByErrorMsg(p1481) {
    const v1317 = {
      DsPur: "未解决",
      kvKiI: function (p1482, p1483) {
        return p1482 ^ p1483;
      },
      RwyxE: function (p1484, p1485) {
        return p1484 ^ p1485;
      },
      xnEFO: function (p1486, p1487) {
        return p1486 < p1487;
      }
    };
    const v1318 = JSON.parse(p1481.request.body);
    const {
      webMonitorId: _0x3abf68,
      startDate: _0x42a735,
      endDate: _0xb61af,
      timeRange: _0x2a2336
    } = v1318;
    const v1319 = await JsErrorHandleListModel.getSolveChartByErrorMsg(_0x3abf68, _0x42a735, _0xb61af);
    let v1320 = [];
    let v1321 = ["状态", v1317.DsPur, "已解决", "已忽略"];
    for (let v1322 = v1317.kvKiI(397337, 397337); v1322 < _0x2a2336; v1322++) {
      const v1323 = vRequire7.addDays(v1317.kvKiI(187794, 187794) - v1322);
      let v1324 = [];
      let v1325 = 0;
      let v1326 = v1317.kvKiI(559542, 559542);
      let v1327 = 0;
      for (let v1328 = v1317.RwyxE(867532, 867532); v1317.xnEFO(v1328, v1319.length); v1328++) {
        let v1329 = v1319[v1328].day;
        let v1330 = v1319[v1328].errorStatus;
        let v1331 = v1319[v1328].count * 1;
        if (v1323 === v1329) {
          switch (v1330) {
            case "0":
              v1325 = v1331;
              break;
            case "1":
              v1326 = v1331;
              break;
            case "2":
              v1327 = v1331;
              break;
            default:
              break;
          }
        }
      }
      v1324.push(v1323);
      v1324.push(v1325);
      v1324.push(v1326);
      v1324.push(v1327);
      v1320.push(v1324);
    }
    v1320.reverse();
    let v1332 = [v1321, ...v1320];
    p1481.response.status = 200;
    p1481.body = vRequire14.SUCCESS_200("操作成功", v1332);
  }
}
class C21 {
  static async create(p1488) {
    const v1333 = {
      nISdQ: function (p1489, p1490) {
        return p1489 ^ p1490;
      },
      yrevn: "创建信息失败，请求参数不能为空！"
    };
    const v1334 = p1488.request.body;
    const v1335 = JSON.parse(v1334.data);
    if (req.happenTime) {
      let v1336 = await LoadPageInfoModel.createLoadPageInfo(v1335);
      let v1337 = await LoadPageInfoModel.getLoadPageInfoDetail(v1336.id);
      p1488.response.status = v1333.nISdQ(697069, 696869);
      p1488.body = vRequire14.SUCCESS_200("创建信息成功", v1337);
    } else {
      p1488.response.status = 412;
      p1488.body = vRequire14.ERROR_412(v1333.yrevn);
    }
  }
  static async ["getLoadPageInfoList"](p1491) {
    const v1338 = {
      CBkxp: function (p1492, p1493) {
        return p1492 ^ p1493;
      },
      BOAxs: function (p1494, p1495) {
        return p1494 ^ p1495;
      },
      Uyrxr: "查询信息列表失败！"
    };
    let v1339 = p1491.request.body;
    if (v1339) {
      const v1340 = await LoadPageInfoModel.getLoadPageInfoList();
      p1491.response.status = v1338.CBkxp(630213, 630029);
      p1491.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1340);
    } else {
      p1491.response.status = v1338.BOAxs(541904, 542028);
      p1491.body = vRequire14.ERROR_412(v1338.Uyrxr);
    }
  }
  static async detail(p1496) {
    let v1341 = p1496.params.id;
    if (v1341) {
      let v1342 = await LoadPageInfoModel.getLoadPageInfoDetail(v1341);
      p1496.response.status = 200;
      p1496.body = vRequire14.SUCCESS_200("查询成功！", v1342);
    } else {
      p1496.response.status = 412;
      p1496.body = vRequire14.ERROR_412("信息ID必须传");
    }
  }
  static async ["delete"](p1497) {
    const v1343 = {
      OKMKn: function (p1498, p1499) {
        return p1498(p1499);
      }
    };
    let v1344 = p1497.params.id;
    if (v1344 && !v1343.OKMKn(isNaN, v1344)) {
      await LoadPageInfoModel.deleteLoadPageInfo(v1344);
      p1497.response.status = 200;
      p1497.body = vRequire14.SUCCESS_200("删除信息成功！");
    } else {
      p1497.response.status = 412;
      p1497.body = vRequire14.ERROR_412("信息ID必须传！");
    }
  }
  static async ["update"](p1500) {
    let v1345 = p1500.request.body;
    let v1346 = p1500.params.id;
    if (v1345) {
      await LoadPageInfoModel.updateLoadPageInfo(v1346, v1345);
      let v1347 = await LoadPageInfoModel.getLoadPageInfoDetail(v1346);
      p1500.response.status = 200;
      p1500.body = vRequire14.SUCCESS_200("更新信息成功！", v1347);
    } else {
      p1500.response.status = 412;
      p1500.body = vRequire14.ERROR_412("更新信息失败！");
    }
  }
  static async getPageLoadTimeByDate(p1501) {
    const v1348 = {
      xqpGE: function (p1502, p1503) {
        return p1502 ^ p1503;
      }
    };
    let v1349 = p1501.request.body;
    const v1350 = JSON.parse(v1349);
    if (v1349) {
      const v1351 = await LoadPageInfoModel.getPageLoadTimeByDate(v1350);
      p1501.response.status = 200;
      p1501.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1351);
    } else {
      p1501.response.status = v1348.xqpGE(579165, 579521);
      p1501.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
  static async getPageCountForLoadTimeGroupByDay(p1504) {
    const v1352 = {
      SHFYE: function (p1505, p1506) {
        return p1505 ^ p1506;
      }
    };
    let v1353 = p1504.request.body;
    const v1354 = JSON.parse(v1353);
    v1354.uploadType = UPLOAD_TYPE.PAGE_COUNT_A;
    const v1355 = await LoadPageInfoModel.getPageCountForLoadTimeGroupByDay(v1354);
    v1354.uploadType = UPLOAD_TYPE.PAGE_COUNT_B;
    const v1356 = await LoadPageInfoModel.getPageCountForLoadTimeGroupByDay(v1354);
    v1354.uploadType = UPLOAD_TYPE.PAGE_COUNT_C;
    const v1357 = await LoadPageInfoModel.getPageCountForLoadTimeGroupByDay(v1354);
    v1354.uploadType = UPLOAD_TYPE.PAGE_COUNT_D;
    const v1358 = await LoadPageInfoModel.getPageCountForLoadTimeGroupByDay(v1354);
    v1354.uploadType = UPLOAD_TYPE.PAGE_COUNT_E;
    const v1359 = await LoadPageInfoModel.getPageCountForLoadTimeGroupByDay(v1354);
    const v1360 = {
      a: vRequire7.handleDateResult(v1355),
      b: vRequire7.handleDateResult(v1356),
      c: vRequire7.handleDateResult(v1357),
      d: vRequire7.handleDateResult(v1358),
      e: vRequire7.handleDateResult(v1359)
    };
    p1504.response.status = v1352.SHFYE(747365, 747437);
    p1504.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1360);
  }
  static async ["getPageCountForLoadTimeByDay"](p1507) {
    const v1361 = {
      EykRx: function (p1508, p1509) {
        return p1508 ^ p1509;
      },
      GjoZi: function (p1510, p1511) {
        return p1510 ^ p1511;
      },
      srFIw: "查询信息列表成功！"
    };
    let v1362 = p1507.request.body;
    const v1363 = JSON.parse(v1362);
    v1363.uploadType = UPLOAD_TYPE.PAGE_COUNT_A;
    const v1364 = await LoadPageInfoModel.getPageCountForLoadTimeByDay(v1363);
    v1363.uploadType = UPLOAD_TYPE.PAGE_COUNT_B;
    const v1365 = await LoadPageInfoModel.getPageCountForLoadTimeByDay(v1363);
    v1363.uploadType = UPLOAD_TYPE.PAGE_COUNT_C;
    const v1366 = await LoadPageInfoModel.getPageCountForLoadTimeByDay(v1363);
    v1363.uploadType = UPLOAD_TYPE.PAGE_COUNT_D;
    const v1367 = await LoadPageInfoModel.getPageCountForLoadTimeByDay(v1363);
    v1363.uploadType = UPLOAD_TYPE.PAGE_COUNT_E;
    const v1368 = await LoadPageInfoModel.getPageCountForLoadTimeByDay(v1363);
    const v1369 = {
      a: v1364.length ? v1364[0] : {},
      b: v1365.length ? v1365[0] : {},
      c: v1366.length ? v1366[0] : {},
      d: v1367.length ? v1367[v1361.EykRx(297212, 297212)] : {},
      e: v1368.length ? v1368[0] : {}
    };
    p1507.response.status = v1361.GjoZi(982263, 982079);
    p1507.body = vRequire14.SUCCESS_200(v1361.srFIw, v1369);
  }
  static async getPageUrlListForLoadTime(p1512) {
    let v1370 = p1512.request.body;
    const v1371 = JSON.parse(v1370);
    const v1372 = await LoadPageInfoModel.getPageUrlListForLoadTime(v1371);
    p1512.response.status = 200;
    p1512.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1372);
  }
  static async getPageUrlUserCount(p1513) {
    const v1373 = {
      PZwlk: function (p1514, p1515) {
        return p1514 ^ p1515;
      }
    };
    let v1374 = p1513.request.body;
    const v1375 = JSON.parse(v1374);
    const v1376 = await LoadPageInfoModel.getPageUrlUserCountForLoadTime(v1375);
    const v1377 = v1376.length ? v1376[0].count : v1373.PZwlk(939847, 939847);
    p1513.response.status = 200;
    p1513.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1377);
  }
  static async getDifferentKindAvgLoadTimeListByHour(p1516) {
    const v1378 = {
      QqvGk: "查询信息列表成功！"
    };
    let v1379 = p1516.request.body;
    const v1380 = JSON.parse(v1379);
    const v1381 = await LoadPageInfoModel.getDifferentKindAvgLoadTimeListByHour(v1380);
    p1516.response.status = 200;
    p1516.body = vRequire14.SUCCESS_200(v1378.QqvGk, v1381);
  }
  static async getDifferentKindAvgLoadTimeByHourForPageUrl(p1517) {
    const v1382 = {
      jzkxP: function (p1518, p1519) {
        return p1518 ^ p1519;
      }
    };
    let v1383 = p1517.request.body;
    const v1384 = JSON.parse(v1383);
    const v1385 = await LoadPageInfoModel.getDifferentKindAvgLoadTimeByHourForPageUrl(v1384);
    p1517.response.status = v1382.jzkxP(351551, 351735);
    p1517.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1385);
  }
  static async ["getPageUrlCountListByHour"](p1520) {
    const v1386 = {
      uDkDT: function (p1521, p1522) {
        return p1521 ^ p1522;
      },
      yRHjJ: "查询信息列表失败！"
    };
    const v1387 = vRequire7.parseQs(p1520.request.url);
    await LoadPageInfoModel.getPageUrlCountListByHour(v1387).then(p1523 => {
      if (p1523) {
        p1520.response.status = v1386.uDkDT(748942, 748870);
        p1520.body = vRequire14.SUCCESS_200("查询信息列表成功！", p1523);
      } else {
        p1520.response.status = 412;
        p1520.body = vRequire14.ERROR_412(v1386.yRHjJ);
      }
    });
  }
  static async getPageUrlCountForHourByMinutes(p1524) {
    const v1388 = {
      vPCAM: "success！"
    };
    let v1389 = p1524.request.body;
    const v1390 = JSON.parse(v1389);
    let v1391 = [];
    await LoadPageInfoModel.getPageUrlCountForHourByMinutes(v1390).then(p1525 => {
      v1391 = p1525;
    });
    p1524.response.status = 200;
    p1524.body = vRequire14.SUCCESS_200(v1388.vPCAM, v1391);
  }
  static async getPageLoadTimeForAll(p1526) {
    const v1392 = {
      JILSD: function (p1527, p1528) {
        return p1527 == p1528;
      },
      CnAAK: "ttfb_hour_time",
      oUDYz: function (p1529, p1530) {
        return p1529 == p1530;
      },
      GNHFm: "dom_analysis_hour_time",
      HkHcq: "loadpage_hour_time",
      Ancpv: function (p1531, p1532) {
        return p1531 ^ p1532;
      },
      UghsA: function (p1533, p1534) {
        return p1533 + p1534;
      }
    };
    let v1393 = p1526.request.body;
    const v1394 = JSON.parse(v1393);
    const {
      webMonitorId: _0x54ec30,
      timeSize: _0x44d0ca
    } = v1394;
    let v1395 = {};
    const v1396 = vRequire7.addDays(0 - _0x44d0ca).substring(5, v1392.Ancpv(946712, 946706)) + " 00";
    const v1397 = v1392.UghsA(vRequire7.addDays(0 - _0x44d0ca).substring(5, 10), " 23");
    await InfoCountByHourModel.getPageLoadTimeForAll(_0x54ec30, v1396, v1397).then(p1535 => {
      p1535.forEach(p1536 => {
        if (p1536.uploadType == "dns_hour_time" || v1392.JILSD(p1536.uploadType, "tcp_hour_time") || p1536.uploadType == v1392.CnAAK || v1392.oUDYz(p1536.uploadType, "resource_hour_time") || p1536.uploadType == v1392.GNHFm || v1392.JILSD(p1536.uploadType, v1392.HkHcq) || v1392.oUDYz(p1536.uploadType, "http_hour_time")) {
          v1395[p1536.uploadType] = p1536.count;
        }
      });
    });
    p1526.response.status = 200;
    p1526.body = vRequire14.SUCCESS_200("success！", v1395);
  }
  static async ["getAvgLoadTimeForAllByHour"](p1537) {
    const v1398 = {
      esYin: function (p1538, p1539) {
        return p1538 ^ p1539;
      },
      GOTbM: " 00",
      bluai: function (p1540, p1541) {
        return p1540 + p1541;
      },
      wIKQq: function (p1542, p1543) {
        return p1542 ^ p1543;
      },
      wJESW: "dns_hour_time",
      ijxxz: "tcp_hour_time",
      UEPrs: "resource_hour_time",
      hmZdN: function (p1544, p1545) {
        return p1544 < p1545;
      }
    };
    let v1399 = p1537.request.body;
    const v1400 = JSON.parse(v1399);
    const {
      webMonitorId: _0x3074e9,
      timeSize: _0x48de54
    } = v1400;
    let v1401 = {};
    const v1402 = vRequire7.addDays(v1398.esYin(856776, 856776) - _0x48de54).substring(5, 10) + v1398.GOTbM;
    const v1403 = v1398.bluai(vRequire7.addDays(0 - _0x48de54).substring(v1398.wIKQq(964436, 964433), 10), " 23");
    const v1404 = [v1398.wJESW, v1398.ijxxz, "ttfb_hour_time", v1398.UEPrs, "dom_analysis_hour_time", "loadpage_hour_time"];
    for (let v1405 = 0; v1398.hmZdN(v1405, v1404.length); v1405++) {
      await InfoCountByHourModel.getAvgLoadTimeForAllByHour(_0x3074e9, v1404[v1405], v1402, v1403).then(p1546 => {
        v1401[v1404[v1405]] = p1546;
      });
    }
    p1537.response.status = 200;
    p1537.body = vRequire14.SUCCESS_200("success！", v1401);
  }
  static async ["getPageLoadTimeByType"](p1547) {
    const v1406 = {
      DIvMW: function (p1548, p1549) {
        return p1548 + p1549;
      },
      NeIDq: function (p1550, p1551) {
        return p1550 - p1551;
      },
      KAhgu: " 00",
      pKElX: function (p1552, p1553) {
        return p1552 ^ p1553;
      },
      NPTRX: "success！"
    };
    let v1407 = p1547.request.body;
    const v1408 = JSON.parse(v1407);
    const {
      webMonitorId: _0x4713ce,
      timeSize: _0x387842,
      type: _0x2586af
    } = v1408;
    let v1409 = {};
    const v1410 = v1406.DIvMW(vRequire7.addDays(v1406.NeIDq(0, _0x387842)).substring(5, 10), v1406.KAhgu);
    const v1411 = v1406.DIvMW(vRequire7.addDays(0 - _0x387842).substring(5, v1406.pKElX(140295, 140301)), " 23");
    await InfoCountByHourModel.getPageLoadTimeForAllByHour(_0x4713ce, v1410, v1411).then(p1554 => {
      const v1412 = {
        ANrtZ: "loadpage_hour_time"
      };
      p1554.forEach(p1555 => {
        if (p1555.uploadType == "dns_hour_time" || p1555.uploadType == "tcp_hour_time" || p1555.uploadType == "ttfb_hour_time" || p1555.uploadType == "resource_hour_time" || p1555.uploadType == "dom_analysis_hour_time" || p1555.uploadType == v1412.ANrtZ || p1555.uploadType == "http_hour_time") {
          v1409[p1555.uploadType] = p1555.count;
        }
      });
    });
    p1547.response.status = v1406.pKElX(215533, 215333);
    p1547.body = vRequire14.SUCCESS_200(v1406.NPTRX, v1409);
  }
  static async ["getPageLoadTimePercent"](p1556) {
    const v1413 = {
      oPiDV: function (p1557, p1558) {
        return p1557 ^ p1558;
      }
    };
    let v1414 = p1556.request.body;
    const v1415 = JSON.parse(v1414);
    v1415.uploadTypes = "('" + UPLOAD_TYPE.PAGE_COUNT_A + "','" + UPLOAD_TYPE.PAGE_COUNT_B + "','" + UPLOAD_TYPE.PAGE_COUNT_C + "','" + UPLOAD_TYPE.PAGE_COUNT_D + "','" + UPLOAD_TYPE.PAGE_COUNT_E + "')";
    let v1416 = {};
    await LoadPageInfoModel.getPageLoadTimePercent(v1415).then(p1559 => {
      v1416 = p1559;
    });
    p1556.response.status = v1413.oPiDV(480964, 480780);
    p1556.body = vRequire14.SUCCESS_200("success！", v1416);
  }
  static async ["getPageLoadTimeListByUrl"](p1560) {
    const v1417 = {
      yCbay: function (p1561, p1562) {
        return p1561 ^ p1562;
      },
      YSXXb: function (p1563, p1564) {
        return p1563 + p1564;
      }
    };
    let v1418 = p1560.request.body;
    const v1419 = JSON.parse(v1418);
    const {
      webMonitorId: _0x3d3c4e,
      timeSize: _0x57b6fd
    } = v1419;
    let v1420 = [];
    const v1421 = vRequire7.addDays(0 - _0x57b6fd).substring(v1417.yCbay(587283, 587286), 10) + " 00";
    const v1422 = v1417.YSXXb(vRequire7.addDays(v1417.yCbay(407862, 407862) - _0x57b6fd).substring(v1417.yCbay(827279, 827274), 10), " 23");
    await LoadTimeInfoByHourModel.getLoadTimeListByUrl(_0x3d3c4e, v1421, v1422, UPLOAD_TYPE.PAGE_HOUR_COUNT_LOADTIME).then(p1565 => {
      p1565.forEach(p1566 => {
        let v1423 = {
          simpleUrl: p1566.showName,
          count: p1566.count,
          loadPage: p1566.loadTime
        };
        v1420.push(v1423);
      });
    });
    p1560.response.status = 200;
    p1560.body = vRequire14.SUCCESS_200("success！", v1420);
  }
}
class C22 {
  static async create(p1567) {
    const v1424 = p1567.request.body;
    const v1425 = JSON.parse(v1424.data);
    if (req.happenTime) {
      let v1426 = await PageLoadInfoModel.createPageLoadInfo(v1425);
      p1567.response.status = 200;
      p1567.body = vRequire14.SUCCESS_200("创建信息成功", 0);
    } else {
      p1567.response.status = 412;
      p1567.body = vRequire14.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async getPageLoadOverview(p1568) {
    const v1427 = {
      gMgEj: function (p1569, p1570) {
        return p1569 - p1570;
      },
      kzZPu: function (p1571, p1572) {
        return p1571 ^ p1572;
      },
      vREVG: function (p1573, p1574) {
        return p1573 ^ p1574;
      },
      CjnJs: function (p1575, p1576) {
        return p1575 / p1576;
      },
      qelvk: function (p1577, p1578) {
        return p1577 ^ p1578;
      },
      gqBWB: function (p1579, p1580) {
        return p1579 ^ p1580;
      },
      zbjxb: function (p1581, p1582) {
        return p1581 ^ p1582;
      },
      ErjIy: function (p1583, p1584) {
        return p1583 * p1584;
      }
    };
    const v1428 = JSON.parse(p1568.request.body);
    const {
      webMonitorId: _0x2ee5a3,
      day: _0x58f929
    } = v1428;
    const v1429 = await PageLoadInfoModel.getPageLoadOverviewSimple(_0x2ee5a3, v1427.gMgEj(0, _0x58f929));
    const v1430 = await PageLoadInfoModel.getCountForOpenOneSecond(_0x2ee5a3, v1427.kzZPu(358575, 358575) - _0x58f929, 2000);
    let v1431 = v1429[0].firstByteAvg;
    let v1432 = v1429[0].domReadyAvg;
    let v1433 = v1429[0].pageCompleteLoadedAvg;
    let v1434 = v1429[0].samplingPv;
    let v1435 = v1430 ? v1430[0].count : v1427.vREVG(135709, 135709);
    let v1436 = 0;
    if (v1435) {
      v1436 = vRequire7.toFixed(v1427.CjnJs(v1435, v1434) * 100, v1427.qelvk(513681, 513683));
    }
    const v1437 = await PageLoadInfoModel.getPageLoadOverviewSimple(_0x2ee5a3, v1427.gqBWB(262125, 262125) - _0x58f929 - v1427.vREVG(434956, 434957));
    const v1438 = await PageLoadInfoModel.getCountForOpenOneSecond(_0x2ee5a3, v1427.gMgEj(0, _0x58f929), v1427.qelvk(824719, 823903));
    let v1439 = v1437[0].firstByteAvg;
    let v1440 = v1437[v1427.gqBWB(806579, 806579)].domReadyAvg;
    let v1441 = v1437[0].pageCompleteLoadedAvg;
    let v1442 = v1437[0].samplingPv;
    let v1443 = v1438 ? v1438[v1427.zbjxb(983075, 983075)].count : 0;
    let v1444 = v1427.zbjxb(335116, 335116);
    if (v1443) {
      v1444 = vRequire7.toFixed(v1427.ErjIy(v1443 / v1442, 100), 2);
    }
    const v1445 = {
      prev: {
        firstByteAvg2: v1439,
        domReadyAvg2: v1440,
        pageCompleteLoadedAvg2: v1441,
        samplingPv2: v1442,
        secondOpenRate2: v1444
      },
      curr: {
        firstByteAvg: v1431,
        domReadyAvg: v1432,
        pageCompleteLoadedAvg: v1433,
        samplingPv: v1434,
        secondOpenRate: v1436
      }
    };
    p1568.response.status = 200;
    p1568.body = vRequire14.SUCCESS_200("创建信息成功", v1445);
  }
  static async getPageLoadOverviewSimple(p1585) {
    const v1446 = {
      zwqmJ: function (p1586, p1587) {
        return p1586 ^ p1587;
      }
    };
    const v1447 = JSON.parse(p1585.request.body);
    const {
      webMonitorId: _0x359aaa,
      day: _0x5c3c29
    } = v1447;
    const v1448 = await PageLoadInfoModel.getPageLoadOverviewSimple(_0x359aaa, 0 - _0x5c3c29);
    p1585.response.status = v1446.zwqmJ(800471, 800287);
    p1585.body = vRequire14.SUCCESS_200("创建信息成功", {
      curr: v1448[0]
    });
  }
  static async getPerformanceDataForMinute(p1588) {
    const v1449 = {
      QxoYC: function (p1589, p1590) {
        return p1589 === p1590;
      },
      Pzfbc: function (p1591, p1592) {
        return p1591 ^ p1592;
      },
      zJjQt: "firstByteAvg",
      wIKsB: function (p1593, p1594) {
        return p1593 ^ p1594;
      },
      VyUDl: function (p1595, p1596) {
        return p1595 * p1596;
      },
      ONkhC: function (p1597, p1598) {
        return p1597 ^ p1598;
      },
      qnGUs: "domReadyAvg",
      VrhQr: function (p1599, p1600) {
        return p1599 ^ p1600;
      },
      CuBhn: "dnsAvg",
      RIuoI: function (p1601, p1602) {
        return p1601 ^ p1602;
      },
      ymlKh: function (p1603, p1604) {
        return p1603 ^ p1604;
      },
      VWaIj: function (p1605, p1606) {
        return p1605 * p1606;
      },
      vcjwi: "responseAvg",
      HeNwV: "1|7|9|4|3|5|6|0|8|2",
      hUbwt: function (p1607, p1608) {
        return p1607 ^ p1608;
      },
      UHguw: function (p1609, p1610) {
        return p1609 ^ p1610;
      },
      frsbC: function (p1611, p1612) {
        return p1611 ^ p1612;
      },
      itjRx: "happenHour",
      ilKoK: function (p1613, p1614) {
        return p1613 === p1614;
      },
      osmsl: "happenMinute",
      YhyDW: "minuteValue",
      naCPn: function (p1615, p1616) {
        return p1615 === p1616;
      },
      ZJNoj: function (p1617, p1618) {
        return p1617 + p1618;
      },
      IBSsY: function (p1619, p1620) {
        return p1619 + p1620;
      },
      nshJE: "day",
      XBsui: "采样PV",
      qEiMN: "line",
      eRvVN: "首次绘制",
      ffOLm: "bar",
      eJWmP: "首字节",
      ndsWT: "DOM Ready",
      wSKJL: "DNS查询",
      qTwyN: "请求响应",
      reLkV: "内容传输",
      gODQh: "资源加载",
      hHsiJ: function (p1621, p1622) {
        return p1621 ^ p1622;
      }
    };
    const v1450 = JSON.parse(p1588.request.body);
    const {
      webMonitorId: _0x114346,
      startDate: _0xd7be29,
      endDate: _0x44edcd,
      timeType: _0x4174a7,
      timeSize: _0x3ceb89,
      filterUrl: _0xb1557f
    } = v1450;
    const v1451 = await ProjectModel.getProjectDetailForWebMonitorId(_0x114346);
    let v1452 = [];
    let v1453 = [];
    let v1454 = [];
    let v1455 = [];
    let v1456 = [];
    let v1457 = [];
    let v1458 = [];
    let v1459 = [];
    let v1460 = [];
    let v1461 = [];
    let v1462 = [];
    let v1463 = vRequire7.b64EncodeUnicode(_0xb1557f);
    if (_0x4174a7 === "minute") {
      v1462 = await PageLoadInfoModel.getPageLoadOverviewByTimeType(_0x114346, _0xd7be29, _0x44edcd, "happenMinute", v1463);
    } else if (_0x4174a7 === "hour") {
      v1462 = await PageLoadInfoModel.getPageLoadOverviewByTimeType(_0x114346, _0xd7be29, _0x44edcd, v1449.itjRx, v1463);
    } else if (v1449.QxoYC(_0x4174a7, "day")) {
      const v1464 = vRequire7.addDays(0);
      let v1465 = await PageLoadInfoModel.getPageLoadOverviewByDay(_0x114346, _0xd7be29, _0x44edcd, v1463);
      if (v1465.length) {
        v1462 = v1465;
      }
    }
    let v1466 = [];
    let v1467 = "";
    let v1468 = "";
    if (v1449.ilKoK(_0x4174a7, "minute")) {
      v1466 = vRequire7.getAllMinutesForDay(vRequire7.addDays(0));
      v1467 = v1449.osmsl;
      v1468 = v1449.YhyDW;
    } else if (v1449.naCPn(_0x4174a7, "hour")) {
      const v1469 = new Date(v1449.ZJNoj(_0xd7be29, " 00:00:00")).getTime();
      const v1470 = new Date(v1449.IBSsY(_0x44edcd, " 23:59:59")).getTime();
      v1466 = vRequire7.getAllHoursForDay(v1469, v1470);
      v1467 = v1449.itjRx;
      v1468 = "hourValue";
    } else if (v1449.QxoYC(_0x4174a7, v1449.nshJE)) {
      v1466 = vRequire7.getAllDayForScope(_0xd7be29, _0x44edcd);
      v1467 = "dayName";
      v1468 = "dayCount";
    }
    v1466.forEach(p1623 => {
      const v1471 = {
        MHXFY: function (p1624, p1625) {
          return p1624 ^ p1625;
        },
        WcGrI: function (p1626, p1627) {
          return p1626 === p1627;
        },
        WhiUE: "dayName",
        HWxWs: function (p1628, p1629) {
          return v1449.QxoYC(p1628, p1629);
        }
      };
      const v1472 = v1462.filter(p1630 => {
        if (v1467 === "happenMinute") {
          let v1473 = p1630[v1467] ? p1630[v1467].substring(v1471.MHXFY(619772, 619767)) : "";
          return v1473 === p1623;
        } else if (v1467 === "happenHour") {
          return v1471.WcGrI(p1630[v1467], p1623);
        } else if (v1467 === v1471.WhiUE) {
          return v1471.HWxWs(p1630[v1467], p1623);
        }
        return false;
      });
      if (v1472.length) {
        v1452.push(vRequire7.toFixed(v1472[0].samplingPv * 1, 2));
        v1453.push(vRequire7.toFixed(v1472[v1449.Pzfbc(303474, 303474)][v1449.zJjQt] * v1449.wIKsB(258597, 258596), 2));
        v1454.push(vRequire7.toFixed(v1449.VyUDl(v1472[v1449.ONkhC(312461, 312461)][v1449.qnGUs], 1), 2));
        v1455.push(vRequire7.toFixed(v1449.VyUDl(v1472[0].pageCompleteLoadedAvg, 1), v1449.VrhQr(705424, 705426)));
        v1456.push(vRequire7.toFixed(v1472[0][v1449.CuBhn] * v1449.RIuoI(545312, 545313), v1449.ymlKh(373322, 373320)));
        v1457.push(vRequire7.toFixed(v1449.VWaIj(v1472[0].tcpAvg, 1), 2));
        v1458.push(vRequire7.toFixed(v1449.VWaIj(v1472[0][v1449.vcjwi], 1), 2));
        v1459.push(vRequire7.toFixed(v1472[0].conTransAvg * 1, v1449.RIuoI(973873, 973875)));
        v1460.push(vRequire7.toFixed(v1449.VWaIj(v1472[0].domAnalysisAvg, 1), 2));
        v1461.push(vRequire7.toFixed(v1472[v1449.ONkhC(712570, 712570)].resourceLoadedAvg * 1, 2));
      } else {
        const v1474 = v1449.HeNwV.split("|");
        let v1475 = 0;
        while (true) {
          switch (v1474[v1475++]) {
            case "0":
              v1459.push(0);
              continue;
            case "1":
              v1452.push(v1449.hUbwt(307377, 307377));
              continue;
            case "2":
              v1461.push(0);
              continue;
            case "3":
              v1456.push(0);
              continue;
            case "4":
              v1455.push(0);
              continue;
            case "5":
              v1457.push(0);
              continue;
            case "6":
              v1458.push(v1449.UHguw(417676, 417676));
              continue;
            case "7":
              v1453.push(v1449.frsbC(618124, 618124));
              continue;
            case "8":
              v1460.push(0);
              continue;
            case "9":
              v1454.push(0);
              continue;
          }
          break;
        }
      }
    });
    const {
      projectType: _0x2146f0
    } = v1451 && v1451.length ? v1451[0] : "h5";
    let v1476 = [];
    if (_0x2146f0 === "taro") {
      v1476 = [{
        name: v1449.XBsui,
        type: "bar",
        axisData: v1466 || [],
        data: v1452 || []
      }, {
        name: "网络耗时",
        type: v1449.qEiMN,
        axisData: v1466 || [],
        data: v1457 || []
      }, {
        name: "代码包下载",
        type: "line",
        axisData: v1466 || [],
        data: v1459 || []
      }, {
        name: "脚本注入",
        type: v1449.qEiMN,
        axisData: v1466 || [],
        data: v1460 || []
      }, {
        name: "路由切换",
        type: "line",
        axisData: v1466 || [],
        data: v1456 || []
      }, {
        name: v1449.eRvVN,
        type: "line",
        axisData: v1466 || [],
        data: v1453 || []
      }, {
        name: "启动耗时",
        type: v1449.qEiMN,
        axisData: v1466 || [],
        data: v1454 || []
      }, {
        name: "资源加载",
        type: "line",
        axisData: v1466 || [],
        data: v1461 || []
      }];
    } else {
      v1476 = [{
        name: "采样PV",
        type: v1449.ffOLm,
        axisData: v1466 || [],
        data: v1452 || []
      }, {
        name: v1449.eJWmP,
        type: "line",
        axisData: v1466 || [],
        data: v1453 || []
      }, {
        name: v1449.ndsWT,
        type: "line",
        axisData: v1466 || [],
        data: v1454 || []
      }, {
        name: "页面完全加载",
        type: "line",
        axisData: v1466 || [],
        data: v1455 || []
      }, {
        name: v1449.wSKJL,
        type: "line",
        axisData: v1466 || [],
        data: v1456 || []
      }, {
        name: "TCP连接",
        type: "line",
        axisData: v1466 || [],
        data: v1457 || []
      }, {
        name: v1449.qTwyN,
        type: v1449.qEiMN,
        axisData: v1466 || [],
        data: v1458 || []
      }, {
        name: v1449.reLkV,
        type: v1449.qEiMN,
        axisData: v1466 || [],
        data: v1459 || []
      }, {
        name: "DOM解析",
        type: v1449.qEiMN,
        axisData: v1466 || [],
        data: v1460 || []
      }, {
        name: v1449.gODQh,
        type: "line",
        axisData: v1466 || [],
        data: v1461 || []
      }];
    }
    p1588.response.status = v1449.hHsiJ(846468, 846412);
    p1588.body = vRequire14.SUCCESS_200("创建信息成功", v1476);
  }
  static async getFastSlowDataForMinute(p1631) {
    const v1477 = {
      PcTDv: function (p1632, p1633) {
        return p1632 ^ p1633;
      },
      xcgBp: function (p1634, p1635) {
        return p1634 * p1635;
      },
      DpNtM: function (p1636, p1637) {
        return p1636 ^ p1637;
      },
      ejUjH: function (p1638, p1639) {
        return p1638 === p1639;
      },
      yGLiP: function (p1640, p1641) {
        return p1640 ^ p1641;
      },
      bgKZb: function (p1642, p1643) {
        return p1642 ^ p1643;
      },
      wJDTj: "hour",
      lfvVr: function (p1644, p1645) {
        return p1644 === p1645;
      },
      dmXjs: "minuteValue",
      dzhCw: function (p1646, p1647) {
        return p1646 === p1647;
      },
      wmoyj: " 00:00:00",
      kkjqU: function (p1648, p1649) {
        return p1648 + p1649;
      },
      yWfLm: " 23:59:59",
      mYAjW: "dayName",
      fkJRc: "3s快开比",
      bKZuo: "line"
    };
    const v1478 = JSON.parse(p1631.request.body);
    const {
      webMonitorId: _0x4dd08c,
      startDate: _0x3ff1d7,
      endDate: _0x5be6f7,
      timeType: _0x40ed3e
    } = v1478;
    let v1479 = v1477.bgKZb(464228, 464228);
    let v1480 = [];
    let v1481 = [];
    let v1482 = [];
    let v1483 = [];
    let v1484 = [];
    let v1485 = [];
    let v1486 = [];
    let v1487 = [];
    if (_0x40ed3e === "minute") {
      v1484 = await PageLoadInfoByMinuteModel.getOpenSpeedDataForMinute(_0x4dd08c, "samplingPv");
      v1485 = await PageLoadInfoByMinuteModel.getOpenSpeedDataForMinute(_0x4dd08c, "open1");
      v1486 = await PageLoadInfoByMinuteModel.getOpenSpeedDataForMinute(_0x4dd08c, "open2");
      v1487 = await PageLoadInfoByMinuteModel.getOpenSpeedDataForMinute(_0x4dd08c, "open3");
    } else if (_0x40ed3e === v1477.wJDTj) {} else if (_0x40ed3e === "day") {}
    let v1488 = [];
    let v1489 = "";
    let v1490 = "";
    if (v1477.lfvVr(_0x40ed3e, "minute")) {
      v1488 = vRequire7.getAllMinutesForDay(vRequire7.addDays(0));
      v1489 = "minuteName";
      v1490 = v1477.dmXjs;
    } else if (v1477.dzhCw(_0x40ed3e, "hour")) {
      const v1491 = new Date(_0x3ff1d7 + v1477.wmoyj).getTime();
      const v1492 = new Date(v1477.kkjqU(_0x5be6f7, v1477.yWfLm)).getTime();
      v1488 = vRequire7.getAllHoursForDay(v1491, v1492);
      v1489 = "hourName";
      v1490 = "hourValue";
    } else if (_0x40ed3e === "day") {
      v1488 = vRequire7.getAllDayForScope(_0x3ff1d7, _0x5be6f7);
      v1489 = v1477.mYAjW;
      v1490 = "dayCount";
    }
    v1488.forEach(p1650 => {
      let v1493 = 0;
      let v1494 = v1484.filter(p1651 => p1651[v1489] === p1650);
      if (v1494.length) {
        v1493 = v1494[0][v1490];
        v1480.push(v1493);
      } else {
        v1480.push(0);
      }
      let v1495 = v1485.filter(p1652 => p1652[v1489] === p1650);
      if (v1495.length) {
        let v1496 = v1495[0][v1490];
        v1496 = v1493 === 0 ? 0 : vRequire7.toFixed(v1496 / v1493 * 100, 2);
        v1481.push(v1496);
      } else {
        v1481.push(0);
      }
      let v1497 = v1486.filter(p1653 => p1653[v1489] === p1650);
      if (v1497.length) {
        let v1498 = v1497[0][v1490];
        v1498 = v1493 === 0 ? v1477.PcTDv(773645, 773645) : vRequire7.toFixed(v1477.xcgBp(v1498 / v1493, v1477.DpNtM(210549, 210449)), 2);
        v1482.push(v1498);
      } else {
        v1482.push(v1477.DpNtM(619192, 619192));
      }
      let v1499 = v1487.filter(p1654 => p1654[v1489] === p1650);
      if (v1499.length) {
        let v1500 = v1499[0][v1490];
        v1500 = v1477.ejUjH(v1493, 0) ? v1477.yGLiP(254427, 254427) : vRequire7.toFixed(v1477.xcgBp(v1500 / v1493, 100), v1477.yGLiP(245602, 245600));
        v1483.push(v1500);
      } else {
        v1483.push(0);
      }
    });
    const v1501 = [{
      name: "1s快开比",
      type: "line",
      axisData: v1488 || [],
      data: v1481 || []
    }, {
      name: "2s快开比",
      type: "line",
      axisData: v1488 || [],
      data: v1482 || []
    }, {
      name: v1477.fkJRc,
      type: v1477.bKZuo,
      axisData: v1488 || [],
      data: v1483 || []
    }];
    p1631.response.status = 200;
    p1631.body = vRequire14.SUCCESS_200("创建信息成功", v1501);
  }
  static async getPerfDataForUrlByDay(p1655) {
    const v1502 = {
      aOpto: function (p1656, p1657) {
        return p1656 * p1657;
      },
      nquJv: function (p1658, p1659) {
        return p1658 ^ p1659;
      },
      djYMD: "更新信息成功！"
    };
    let v1503 = JSON.parse(p1655.request.body);
    const {
      webMonitorId: _0x3249d9,
      timeSize: _0x142a91
    } = v1503;
    const v1504 = vRequire7.addDays(0 - _0x142a91 - 1);
    let v1505 = await PageLoadInfoModel.getPerfDataForUrlByDay(_0x3249d9, _0x142a91);
    let v1506 = await PageLoadInfoModel.getPerfDataForUrlByDay(_0x3249d9, _0x142a91 + v1502.nquJv(746694, 746695));
    v1505.forEach(p1660 => {
      const {
        simpleUrl: _0x3bf6fc,
        firstByte: _0x414409,
        domReady: _0x32184d,
        pageCompleteLoaded: _0x186f87
      } = p1660;
      const v1507 = v1506.filter(p1661 => p1661.simpleUrl === _0x3bf6fc);
      let v1508 = 0;
      let v1509 = 0;
      if (v1507 && v1507.length > 0) {
        const v1510 = v1507[0];
        v1508 = vRequire7.toFixed((_0x32184d - v1510.domReady) / _0x32184d * 100, 2);
        v1509 = vRequire7.toFixed(v1502.aOpto((_0x186f87 - v1510.pageCompleteLoaded) / _0x186f87, 100), v1502.nquJv(413244, 413246));
      }
      p1660.firstByte = vRequire7.toFixed(_0x414409, v1502.nquJv(242673, 242675));
      p1660.domReady = vRequire7.toFixed(_0x32184d, 2);
      p1660.pageCompleteLoaded = vRequire7.toFixed(_0x186f87, 2);
      p1660.domReadyChange = v1508;
      p1660.pageCompleteLoadedChange = v1509;
      p1660.simpleUrl = vRequire7.b64DecodeUnicode(_0x3bf6fc);
    });
    p1655.response.status = v1502.nquJv(802200, 802128);
    p1655.body = vRequire14.SUCCESS_200(v1502.djYMD, v1505);
  }
  static async getPerfDataForUrlByDaySimple(p1662) {
    const v1511 = {
      yxxQG: function (p1663, p1664) {
        return p1663 ^ p1664;
      }
    };
    let v1512 = JSON.parse(p1662.request.body);
    const {
      webMonitorId: _0x1c9171,
      timeSize: _0x53c1a5
    } = v1512;
    let v1513 = await PageLoadInfoModel.getPerfDataForUrlByDay(_0x1c9171, 0 - _0x53c1a5);
    v1513.forEach(p1665 => {
      p1665.simpleUrl = vRequire7.b64DecodeUnicode(p1665.simpleUrl);
    });
    p1662.response.status = v1511.yxxQG(883125, 883069);
    p1662.body = vRequire14.SUCCESS_200("更新信息成功！", v1513);
  }
  static async ["getPerfDataForWaterfall"](p1666) {
    const v1514 = {
      imzqP: function (p1667, p1668) {
        return p1667 ^ p1668;
      },
      qRAms: "创建信息成功"
    };
    const v1515 = JSON.parse(p1666.request.body);
    const {
      webMonitorId: _0x54989c,
      day: _0x549cea
    } = v1515;
    const v1516 = await PageLoadInfoModel.getPerfDataForWaterfall(_0x54989c, v1514.imzqP(162298, 162298) - _0x549cea);
    const v1517 = v1516[v1514.imzqP(768637, 768637)];
    let v1518 = v1517.dns;
    let v1519 = v1517.tcp;
    let v1520 = v1517.sl;
    let v1521 = v1517.response;
    let v1522 = v1517.conTrans;
    let v1523 = v1517.domAnalysis;
    let v1524 = v1517.firstByte;
    let v1525 = v1517.resourceLoaded;
    const v1526 = {
      dnsAvg: v1518,
      tcpAvg: v1519,
      sslAvg: v1520,
      responseAvg: v1521,
      conTransAvg: v1522,
      domAnalysisAvg: v1523,
      firstByteAvg: v1524,
      resourceLoadedAvg: v1525
    };
    p1666.response.status = v1514.imzqP(772745, 772673);
    p1666.body = vRequire14.SUCCESS_200(v1514.qRAms, v1526);
  }
  static async ["getPerfDataForUrlDetail"](p1669) {
    const {
      webMonitorId: _0x513be2,
      simpleUrl: _0x177ca3,
      timeSize: _0x492977
    } = JSON.parse(p1669.request.body);
    let v1527 = await PageLoadInfoModel.getPerfDataForUrlByVersion(_0x513be2, _0x177ca3, _0x492977);
    p1669.response.status = 200;
    p1669.body = vRequire14.SUCCESS_200("success", v1527);
  }
  static async getPerfDataForMap(p1670) {
    const v1528 = {
      ccALe: "country"
    };
    const {
      webMonitorId: _0x4bfaa1,
      timeSize: _0x4a51a4
    } = JSON.parse(p1670.request.body);
    const v1529 = await PageLoadInfoModel.getPerfDataForMap(_0x4bfaa1, _0x4a51a4, "province");
    const v1530 = await PageLoadInfoModel.getPerfDataForMap(_0x4bfaa1, _0x4a51a4, v1528.ccALe);
    p1670.response.status = 200;
    p1670.body = vRequire14.SUCCESS_200("success", {
      provinceData: v1529,
      countryData: v1530
    });
  }
  static async ["getPerfInfoByVersion"](p1671) {
    const {
      webMonitorId: _0x364f20,
      timeSize: _0x367ad7
    } = JSON.parse(p1671.request.body);
    const v1531 = await PageLoadInfoModel.getPerfInfoByVersion(_0x364f20, _0x367ad7);
    p1671.response.status = 200;
    p1671.body = vRequire14.SUCCESS_200("success", v1531);
  }
  static async getPerfInfoByNetWork(p1672) {
    const {
      webMonitorId: _0x2deb96,
      timeSize: _0xb77cb8
    } = JSON.parse(p1672.request.body);
    const v1532 = await PageLoadInfoModel.getPerfInfoByNetWork(_0x2deb96, _0xb77cb8);
    p1672.response.status = 200;
    p1672.body = vRequire14.SUCCESS_200("success", v1532);
  }
  static async ["getPerfInfoByOs"](p1673) {
    const {
      webMonitorId: _0x5b21b1,
      timeSize: _0x26e883
    } = JSON.parse(p1673.request.body);
    const v1533 = await PageLoadInfoModel.getPerfInfoByOs(_0x5b21b1, _0x26e883);
    p1673.response.status = 200;
    p1673.body = vRequire14.SUCCESS_200("success", v1533);
  }
  static async ["getPageCompleteLoadedDataForHour"](p1674) {
    const v1534 = {
      zekVh: "happenHour"
    };
    const v1535 = JSON.parse(p1674.request.body);
    const {
      webMonitorId: _0x40e2d5
    } = v1535;
    const v1536 = vRequire7.addDays(0);
    const v1537 = await PageLoadInfoModel.getPageLoadOverviewByTimeType(_0x40e2d5, v1536, v1536, v1534.zekVh);
    let v1538 = [];
    v1537.forEach(p1675 => {
      v1538.push({
        hour: p1675.happenHour.substring(11, p1675.happenHour.length),
        count: p1675.pageCompleteLoadedAvg
      });
    });
    p1674.response.status = 200;
    p1674.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1538);
  }
}
class C23 {
  static async ["create"](p1676) {
    const v1539 = {
      NebCE: "创建信息成功",
      IQgAX: function (p1677, p1678) {
        return p1677 ^ p1678;
      }
    };
    const v1540 = p1676.request.body;
    const v1541 = JSON.parse(v1540.data);
    if (req.happenTime) {
      let v1542 = await ResourceLoadInfoModel.createResourceLoadInfo(v1541);
      let v1543 = await ResourceLoadInfoModel.getResourceLoadInfoDetail(v1542.id);
      p1676.response.status = 200;
      p1676.body = vRequire14.SUCCESS_200(v1539.NebCE, v1543);
    } else {
      p1676.response.status = v1539.IQgAX(804988, 805344);
      p1676.body = vRequire14.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async getResourceLoadInfoList(p1679) {
    let v1544 = p1679.request.body;
    if (v1544) {
      const v1545 = await ResourceLoadInfoModel.getResourceLoadInfoList();
      p1679.response.status = 200;
      p1679.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1545);
    } else {
      p1679.response.status = 412;
      p1679.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
  static async detail(p1680) {
    const v1546 = {
      ccxbN: "查询成功！"
    };
    let v1547 = p1680.params.id;
    if (v1547) {
      let v1548 = await ResourceLoadInfoModel.getResourceLoadInfoDetail(v1547);
      p1680.response.status = 200;
      p1680.body = vRequire14.SUCCESS_200(v1546.ccxbN, v1548);
    } else {
      p1680.response.status = 412;
      p1680.body = vRequire14.ERROR_412("信息ID必须传");
    }
  }
  static async ["delete"](p1681) {
    const v1549 = {
      gyKrC: function (p1682, p1683) {
        return p1682(p1683);
      },
      gguEZ: function (p1684, p1685) {
        return p1684 ^ p1685;
      },
      lagIE: "信息ID必须传！"
    };
    let v1550 = p1681.params.id;
    if (v1550 && !v1549.gyKrC(isNaN, v1550)) {
      await ResourceLoadInfoModel.deleteResourceLoadInfo(v1550);
      p1681.response.status = v1549.gguEZ(333051, 332851);
      p1681.body = vRequire14.SUCCESS_200("删除信息成功！");
    } else {
      p1681.response.status = v1549.gguEZ(504660, 504520);
      p1681.body = vRequire14.ERROR_412(v1549.lagIE);
    }
  }
  static async ["update"](p1686) {
    const v1551 = {
      ZEBuF: function (p1687, p1688) {
        return p1687 ^ p1688;
      },
      oLTcc: "更新信息成功！"
    };
    let v1552 = p1686.request.body;
    let v1553 = p1686.params.id;
    if (v1552) {
      await ResourceLoadInfoModel.updateResourceLoadInfo(v1553, v1552);
      let v1554 = await ResourceLoadInfoModel.getResourceLoadInfoDetail(v1553);
      p1686.response.status = v1551.ZEBuF(967271, 967343);
      p1686.body = vRequire14.SUCCESS_200(v1551.oLTcc, v1554);
    } else {
      p1686.response.status = 412;
      p1686.body = vRequire14.ERROR_412("更新信息失败！");
    }
  }
  static async getResourceLoadInfoListByDay(p1689) {
    const v1555 = {
      DOylJ: function (p1690, p1691) {
        return p1690 ^ p1691;
      },
      tnkrL: "查询信息列表成功！"
    };
    const v1556 = JSON.parse(p1689.request.body);
    let v1557 = null;
    await ResourceLoadInfoModel.getResourceLoadInfoListByDay(v1556).then(p1692 => {
      v1557 = p1692;
    });
    for (let v1558 = 0; v1558 < v1557.length; v1558++) {
      await ResourceLoadInfoModel.getResourceErrorLatestTime(v1557[v1558].sourceUrl, v1556).then(p1693 => {
        if (p1693 && p1693.length) {
          v1557[v1558].createdAt = p1693[0].createdAt;
          v1557[v1558].happenTime = p1693[0].happenTime;
        }
      });
      await ResourceLoadInfoModel.getPageCountByResourceError(v1557[v1558].sourceUrl, v1556).then(p1694 => {
        if (p1694 && p1694.length) {
          v1557[v1558].pageCount = p1694[0].pageCount;
        }
      });
      await ResourceLoadInfoModel.getCustomerCountByResourceError(v1557[v1558].sourceUrl, v1556).then(p1695 => {
        if (p1695 && p1695.length) {
          v1557[v1558].customerCount = p1695[0].customerCount;
        }
      });
    }
    p1689.response.status = v1555.DOylJ(363047, 363247);
    p1689.body = vRequire14.SUCCESS_200(v1555.tnkrL, v1557);
  }
  static async getResourceErrorCountByDay(p1696) {
    const v1559 = {
      TDimd: function (p1697, p1698) {
        return p1697 ^ p1698;
      },
      wcjlp: "yyyy-MM-dd",
      Szghd: function (p1699, p1700) {
        return p1699 ^ p1700;
      },
      gCjdd: "查询信息列表失败！"
    };
    const v1560 = vRequire8.parseQs(p1696.request.url);
    const {
      webMonitorId: _0x482c77
    } = v1560;
    const v1561 = new Date().getTime();
    const v1562 = new Date(v1561 - v1559.TDimd(925557, 921957) * 720 * 1000).Format("yyyy-MM-dd");
    const v1563 = new Date(v1561).Format(v1559.wcjlp);
    const v1564 = vRequire8.addDays(0);
    const v1565 = await ResourceLoadInfoModel.getResourceErrorCountByDay(_0x482c77, v1562, v1563, UPLOAD_TYPE.RESOURCE_ERROR);
    const v1566 = await ResourceLoadInfoModel.getResourceErrorCountForDay(_0x482c77, v1559.TDimd(398348, 398348));
    const v1567 = v1566.length ? v1566[v1559.TDimd(697318, 697318)].count : 0;
    v1565.push({
      day: v1564,
      count: v1567
    });
    if (v1565) {
      p1696.response.status = 200;
      p1696.body = vRequire14.SUCCESS_200("查询信息列表成功！", vRequire8.handleDateResult(v1565));
    } else {
      p1696.response.status = v1559.Szghd(707105, 707517);
      p1696.body = vRequire14.ERROR_412(v1559.gCjdd);
    }
  }
  static async ["getResourceErrorCountByHour"](p1701) {
    const v1568 = {
      ijmLH: function (p1702, p1703) {
        return p1702 ^ p1703;
      }
    };
    const v1569 = vRequire8.parseQs(p1701.request.url);
    v1569.infoType = UPLOAD_TYPE.RESOURCE_ERROR;
    let v1570 = [];
    await ResourceLoadInfoModel.getResourceLoadErrorInfoListByHour(v1569).then(p1704 => {
      v1570 = p1704;
      v1570.forEach(p1705 => {
        p1705.hour = p1705.hour.substring(5);
      });
    });
    let v1571 = [];
    await ResourceLoadInfoModel.getResourceLoadErrorInfoListSevenDayAgoByHour(v1569).then(p1706 => {
      const v1572 = {
        XHvvy: function (p1707, p1708) {
          return v1568.ijmLH(p1707, p1708);
        }
      };
      v1571 = p1706;
      v1571.forEach(p1709 => {
        p1709.hour = p1709.hour.substring(v1572.XHvvy(931538, 931543));
      });
    });
    p1701.response.status = 200;
    p1701.body = vRequire14.SUCCESS_200("查询信息列表成功！", {
      today: v1570,
      seven: v1571
    });
  }
}
class C24 {
  static async ["getTodayFlowDataByTenMin"](p1710) {
    const v1573 = {
      CHMJX: function (p1711, p1712) {
        return p1711 - p1712;
      },
      EDYzQ: function (p1713, p1714) {
        return p1713 - p1714;
      },
      OXmne: function (p1715, p1716) {
        return p1715 ^ p1716;
      },
      eZEtQ: function (p1717, p1718) {
        return p1717 ^ p1718;
      },
      BQRGn: function (p1719, p1720) {
        return p1719 ^ p1720;
      },
      epMZm: function (p1721, p1722) {
        return p1721 - p1722;
      },
      TvvuU: function (p1723, p1724) {
        return p1723 ^ p1724;
      },
      vKxex: function (p1725, p1726) {
        return p1725 ^ p1726;
      },
      oFMGL: function (p1727, p1728) {
        return p1727 ^ p1728;
      },
      aLgTT: function (p1729, p1730) {
        return p1729 - p1730;
      },
      uFiEX: function (p1731, p1732) {
        return p1731 ^ p1732;
      },
      hlYEC: "success"
    };
    let v1574 = p1710.request.body;
    const v1575 = JSON.parse(v1574);
    const {
      timeSize: _0x2e87bf,
      webMonitorId: _0x199a96,
      chooseUserTag: _0x494e4a
    } = v1575;
    const v1576 = vRequire8.addDays(0 - _0x2e87bf);
    const v1577 = await ProjectModel.getProjectDetailForWebMonitorId(_0x199a96);
    if (!v1577) {
      p1710.response.status = 200;
      p1710.body = vRequire14.SUCCESS_200("success", {
        todayPvData: [],
        todayUvData: [],
        todayNewData: [],
        todayIpData: [],
        todayCusLeavePercentData: []
      });
      return;
    }
    const v1578 = vRequire8.addDays(v1573.CHMJX(0, _0x2e87bf));
    const v1579 = vRequire8.addDays(v1573.EDYzQ(v1573.OXmne(156506, 156506) - _0x2e87bf, v1573.OXmne(716175, 716174)));
    const v1580 = await CustomerPVModel.getPVCountForDay(_0x199a96, v1573.EDYzQ(0, _0x2e87bf));
    const v1581 = await CustomerPVModel.getPVCountForDay(_0x199a96, 0 - _0x2e87bf - v1573.OXmne(326819, 326818));
    const v1582 = [{
      dayName: v1578,
      dayCount: v1580.length ? v1580[0].count : 0
    }, {
      dayName: v1579,
      dayCount: v1581.length ? v1581[0].count : v1573.eZEtQ(285881, 285881)
    }];
    const v1583 = await CustomerPVModel.getUVCountForDay(_0x199a96, 0 - _0x2e87bf);
    const v1584 = await CustomerPVModel.getUVCountForDay(_0x199a96, 0 - _0x2e87bf - 1);
    const v1585 = [{
      dayName: v1578,
      dayCount: v1583.length ? v1583[0].count : v1573.BQRGn(828558, 828558)
    }, {
      dayName: v1579,
      dayCount: v1584.length ? v1584[v1573.OXmne(853424, 853424)].count : 0
    }];
    const v1586 = await CustomerPVModel.getNewCountForDay(_0x199a96, 0 - _0x2e87bf);
    const v1587 = await CustomerPVModel.getNewCountForDay(_0x199a96, v1573.epMZm(0 - _0x2e87bf, 1));
    const v1588 = [{
      dayName: v1578,
      dayCount: v1586.length ? v1586[0].count : 0
    }, {
      dayName: v1579,
      dayCount: v1587.length ? v1587[0].count : v1573.TvvuU(681280, 681280)
    }];
    const v1589 = await CustomerPVModel.getIpCountForDay(_0x199a96, 0 - _0x2e87bf);
    const v1590 = await CustomerPVModel.getIpCountForDay(_0x199a96, v1573.vKxex(294756, 294756) - _0x2e87bf - 1);
    const v1591 = [{
      dayName: v1578,
      dayCount: v1589.length ? v1589[v1573.oFMGL(442851, 442851)].count : 0
    }, {
      dayName: v1579,
      dayCount: v1590.length ? v1590[0].count : 0
    }];
    const v1592 = await CustomerPvLeaveModel.getCusLeavePercentForDay(_0x199a96, v1573.BQRGn(643973, 643973) - _0x2e87bf);
    const v1593 = await CustomerPvLeaveModel.getCusLeavePercentForDay(_0x199a96, v1573.aLgTT(v1573.epMZm(0, _0x2e87bf), 1));
    const v1594 = [{
      dayName: v1578,
      dayCount: v1592 || 0
    }, {
      dayName: v1579,
      dayCount: v1593 || v1573.uFiEX(793004, 793004)
    }];
    p1710.response.status = 200;
    p1710.body = vRequire14.SUCCESS_200(v1573.hlYEC, {
      todayPvData: v1582,
      todayUvData: v1585,
      todayNewData: v1588,
      todayIpData: v1591,
      todayCusLeavePercentData: v1594
    });
  }
  static async uvCountForMonth(p1733) {
    const v1595 = {
      GVfwe: function (p1734, p1735) {
        return p1734 ^ p1735;
      }
    };
    let v1596 = p1733.request.body;
    const v1597 = JSON.parse(v1596);
    const {
      webMonitorId: _0x2289e5,
      timeSize = 30
    } = v1597;
    const v1598 = vRequire8.addDays(0 - timeSize);
    const v1599 = vRequire8.addDays(0);
    let v1600 = await CustomerPVModel.uvCountForMonth(_0x2289e5, UPLOAD_TYPE.UV_COUNT_DAY, v1598);
    let v1601 = await CustomerPVModel.getUVCountForDay(_0x2289e5, 0);
    v1600.push({
      day: v1599,
      count: v1601.length ? v1601[0].count : v1595.GVfwe(723438, 723438)
    });
    let v1602 = await CustomerPVModel.uvCountForMonth(_0x2289e5, UPLOAD_TYPE.NEW_COUNT_DAY, v1598);
    let v1603 = await CustomerPVModel.getNewCountForDay(_0x2289e5, 0);
    v1602.push({
      day: v1599,
      count: v1603.length ? v1603[0].count : 0
    });
    v1600 = vRequire8.handleDateResult(v1600, timeSize);
    v1602 = vRequire8.handleDateResult(v1602, timeSize);
    p1733.response.status = 200;
    p1733.body = vRequire14.SUCCESS_200("success", {
      uvData: v1600,
      newUvData: v1602
    });
  }
  static async exportUvCountForMonth(p1736) {
    const v1604 = {
      bboQR: function (p1737, p1738) {
        return p1737 ^ p1738;
      },
      nYUlo: function (p1739, p1740) {
        return p1739 != p1740;
      },
      dJjeP: function (p1741, p1742) {
        return p1741 ^ p1742;
      }
    };
    const v1605 = vRequire8.parseQs(p1736.request.url);
    const {
      webMonitorId: _0x2dfbc6,
      chooseUserTag = "",
      timeSize = 30,
      code = v1604.bboQR(774992, 774992)
    } = v1605;
    const v1606 = global.monitorInfo.exportRandomNumber.exportUvCountForMonth;
    if (!v1606 || v1604.nYUlo(v1606.code, code)) {
      p1736.response.status = 412;
      p1736.body = vRequire14.ERROR_412("导出失败，参数不合法！");
      return;
    }
    delete global.monitorInfo.exportRandomNumber.exportUvCountForMonth;
    const v1607 = vRequire8.addDays(0 - timeSize);
    let v1608 = await CustomerPVModel.uvCountForMonth(_0x2dfbc6, UPLOAD_TYPE.UV_COUNT_DAY + chooseUserTag, v1607);
    let v1609 = await CustomerPVModel.uvCountForMonth(_0x2dfbc6, UPLOAD_TYPE.NEW_COUNT_DAY + chooseUserTag, v1607);
    let v1610 = await CustomerPVModel.uvCountForMonth(_0x2dfbc6, UPLOAD_TYPE.PV_COUNT_DAY + chooseUserTag, v1607);
    v1608 = vRequire8.handleDateResult(v1608, timeSize);
    v1609 = vRequire8.handleDateResult(v1609, timeSize);
    v1610 = vRequire8.handleDateResult(v1610, timeSize);
    const v1611 = [];
    var v1612 = ["日期", "PV总数", "UV总数", "老用户数量", "新用户数量"];
    v1611.push(v1612);
    v1608.forEach((p1743, p1744) => {
      const v1613 = v1610[p1744].count;
      const v1614 = p1743.count;
      const v1615 = v1609[p1744].count;
      const v1616 = p1743.count - v1615;
      var v1617 = [];
      v1617.push(p1743.date);
      v1617.push(v1613);
      v1617.push(v1614);
      v1617.push(v1616);
      v1617.push(v1615);
      v1611.push(v1617);
    });
    const v1618 = vRequire18.build([{
      name: "sheet1",
      data: v1611
    }]);
    const v1619 = v1618.length;
    const v1620 = "uv_data.xlsx";
    p1736.response.status = v1604.dJjeP(425545, 425601);
    p1736.set("Content-disposition", "attachment; filename=" + v1620);
    p1736.set("Content-type", "application/vnd.openxmlformats");
    p1736.set("Content-Length", v1619);
    p1736.body = v1618;
  }
  static async ["getTodayFlowData"](p1745) {
    const v1621 = {
      tMBhj: function (p1746, p1747) {
        return p1746 ^ p1747;
      },
      LtnZH: function (p1748, p1749) {
        return p1748 ^ p1749;
      },
      pDHsb: function (p1750, p1751) {
        return p1750 > p1751;
      },
      YvtPW: function (p1752, p1753) {
        return p1752 !== p1753;
      },
      dQUYq: function (p1754, p1755) {
        return p1754 ^ p1755;
      },
      ixXkS: function (p1756, p1757) {
        return p1756 / p1757;
      },
      sExWJ: function (p1758, p1759) {
        return p1758 ^ p1759;
      }
    };
    await C13.calculateCountByDayForTenMinutes(0);
    let v1622 = p1745.request.body;
    const v1623 = JSON.parse(v1622);
    const {
      webMonitorId: _0x27612d,
      chooseUserTag: _0x2bbad8
    } = v1623;
    const v1624 = vRequire8.addDays(0);
    const v1625 = await CustomerPVModel.getPVFlowDataForDay(_0x27612d, v1624, _0x2bbad8);
    const v1626 = await CustomerPVModel.getUVFlowDataForDay(_0x27612d, v1624, _0x2bbad8);
    const v1627 = await CustomerPVModel.getNewFlowDataForDay(_0x27612d, v1624, _0x2bbad8);
    const v1628 = await CustomerPVModel.getIpFlowDataForDay(_0x27612d, v1624, _0x2bbad8);
    const v1629 = v1625.length > 0 ? v1625[v1621.tMBhj(247288, 247288)].dayCount : v1621.LtnZH(539966, 539966);
    const v1630 = v1626.length > 0 ? v1626[0].dayCount : 0;
    const v1631 = v1627.length > v1621.LtnZH(242147, 242147) ? v1627[0].dayCount : 0;
    const v1632 = v1621.pDHsb(v1628.length, 0) ? v1628[0].dayCount : 0;
    const v1633 = {
      pv: v1629,
      uv: v1630,
      newCus: v1631,
      ip: v1632,
      per: v1621.YvtPW(v1629, v1621.dQUYq(754371, 754371)) ? v1621.ixXkS(v1625[0].dayCount, v1626[0].dayCount).toFixed(2) : v1621.sExWJ(283691, 283691)
    };
    p1745.response.status = 200;
    p1745.body = vRequire14.SUCCESS_200("更新信息成功！", v1633);
  }
  static async getAvgPvInSevenDay(p1760) {
    p1760.response.status = 200;
    p1760.body = vRequire14.SUCCESS_200("更新信息成功！", {});
  }
  static async ["getUvCountForDay"](p1761) {
    const v1634 = {
      PuVZC: function (p1762, p1763) {
        return p1762 * p1763;
      },
      leWLf: function (p1764, p1765) {
        return p1764 ^ p1765;
      },
      wTdUs: "获取信息成功！"
    };
    let v1635 = p1761.request.body;
    const {
      webMonitorId: _0x38abac,
      dayIndex: _0x41fc80
    } = v1635;
    const v1636 = await CustomerPVModel.getUVCountForDay(_0x38abac, v1634.PuVZC(_0x41fc80, 1), UPLOAD_TYPE.UV_COUNT_HOUR);
    const v1637 = v1636[v1634.leWLf(663828, 663828)].count * 1;
    p1761.response.status = 200;
    p1761.body = vRequire14.SUCCESS_200(v1634.wTdUs, v1637);
  }
  static async ["getCustomerCountByTime"](p1766) {
    const v1638 = {
      mZrGk: function (p1767, p1768) {
        return p1767 ^ p1768;
      }
    };
    let v1639 = p1766.request.body;
    const v1640 = JSON.parse(v1639);
    if (v1639) {
      const v1641 = await CustomerPVModel.getCustomerCountByTime(v1640);
      p1766.response.status = v1638.mZrGk(208880, 208696);
      p1766.body = vRequire14.SUCCESS_200("查询信息列表成功！", vRequire8.handleDateResult(v1641, v1640.timeScope));
    } else {
      p1766.response.status = 412;
      p1766.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
  static async getUserCountByHour(p1769) {
    const v1642 = {
      tBGJb: function (p1770, p1771) {
        return p1770 ^ p1771;
      }
    };
    let v1643 = p1769.request.body;
    const v1644 = JSON.parse(v1643);
    let v1645 = [];
    await CustomerPVModel.getUserCountByHour(v1644).then(p1772 => {
      v1645 = p1772;
    });
    let v1646 = [];
    await CustomerPVModel.getUserCountSevenDayAgoByHour(v1644).then(p1773 => {
      v1646 = p1773;
    });
    p1769.response.status = v1642.tBGJb(834388, 834460);
    p1769.body = vRequire14.SUCCESS_200("查询信息列表成功！", {
      today: v1645,
      seven: v1646
    });
  }
  static async getUvCountByHour(p1774) {
    const v1647 = {
      hsgIN: "查询信息列表成功！"
    };
    let v1648 = p1774.request.body;
    const v1649 = JSON.parse(v1648);
    let v1650 = [];
    await CustomerPVModel.getUvCountByHour(v1649).then(p1775 => {
      const v1651 = {
        KLJkU: function (p1776, p1777) {
          return p1776 ^ p1777;
        }
      };
      v1650 = p1775;
      v1650.forEach(p1778 => {
        p1778.hour = p1778.hour.substring(v1651.KLJkU(981767, 981762));
      });
    });
    let v1652 = [];
    await CustomerPVModel.getUvCountSevenDayAgoByHour(v1649).then(p1779 => {
      v1652 = p1779;
      v1652.forEach(p1780 => {
        p1780.hour = p1780.hour.substring(5);
      });
    });
    p1774.response.status = 200;
    p1774.body = vRequire14.SUCCESS_200(v1647.hsgIN, {
      today: v1650,
      seven: v1652
    });
  }
  static async getPvCountByHour(p1781) {
    const v1653 = {
      cyRlh: function (p1782, p1783) {
        return p1782 ^ p1783;
      },
      xWElx: function (p1784, p1785) {
        return p1784 ^ p1785;
      }
    };
    let v1654 = p1781.request.body;
    const v1655 = JSON.parse(v1654);
    let v1656 = [];
    await CustomerPVModel.getPvCountByTime(v1655).then(p1786 => {
      const v1657 = {
        tyzqW: function (p1787, p1788) {
          return v1653.cyRlh(p1787, p1788);
        }
      };
      v1656 = p1786;
      v1656.forEach(p1789 => {
        p1789.hour = p1789.hour.substring(v1657.tyzqW(303992, 303997));
      });
    });
    let v1658 = [];
    await CustomerPVModel.getPvCountSevenDayAgoByHour(v1655).then(p1790 => {
      v1658 = p1790;
      v1658.forEach(p1791 => {
        p1791.hour = p1791.hour.substring(v1653.xWElx(904981, 904976));
      });
    });
    p1781.response.status = v1653.xWElx(227527, 227343);
    p1781.body = vRequire14.SUCCESS_200("查询信息列表成功！", {
      today: v1656,
      seven: v1658
    });
  }
  static async getNewCustomerCountByHour(p1792) {
    const v1659 = {
      qXJOh: function (p1793, p1794) {
        return p1793 ^ p1794;
      }
    };
    let v1660 = p1792.request.body;
    const v1661 = JSON.parse(v1660);
    let v1662 = [];
    await CustomerPVModel.getNewCustomerCountByTime(v1661).then(p1795 => {
      const v1663 = {
        opGBN: function (p1796, p1797) {
          return p1796 ^ p1797;
        }
      };
      v1662 = p1795;
      v1662.forEach(p1798 => {
        p1798.hour = p1798.hour.substring(v1663.opGBN(731033, 731036));
      });
    });
    let v1664 = [];
    await CustomerPVModel.getNewCustomerCountSevenDayAgoByHour(v1661).then(p1799 => {
      const v1665 = {
        qiQij: function (p1800, p1801) {
          return p1800 ^ p1801;
        }
      };
      v1664 = p1799;
      v1664.forEach(p1802 => {
        p1802.hour = p1802.hour.substring(v1665.qiQij(693457, 693460));
      });
    });
    p1792.response.status = v1659.qXJOh(320162, 320106);
    p1792.body = vRequire14.SUCCESS_200("查询信息列表成功！", {
      today: v1662,
      seven: v1664
    });
  }
  static async getInstallCountByHour(p1803) {
    const v1666 = {
      yhyMo: "查询信息列表成功！"
    };
    let v1667 = p1803.request.body;
    const v1668 = JSON.parse(v1667);
    let v1669 = [];
    await CustomerPVModel.getInstallCountByTime(v1668).then(p1804 => {
      v1669 = p1804;
    });
    let v1670 = [];
    await CustomerPVModel.getInstallCountSevenDayAgoByHour(v1668).then(p1805 => {
      v1670 = p1805;
    });
    p1803.response.status = 200;
    p1803.body = vRequire14.SUCCESS_200(v1666.yhyMo, {
      today: v1669,
      seven: v1670
    });
  }
  static async getPvUvCountBySecond(p1806) {
    const v1671 = {
      kMWex: "查询信息列表成功！"
    };
    let v1672 = p1806.request.body;
    const v1673 = JSON.parse(v1672);
    let v1674 = [];
    await CustomerPVModel.getPvCountBySecond(v1673).then(p1807 => {
      v1674 = p1807;
    });
    let v1675 = [];
    await CustomerPVModel.getUvCountBySecond(v1673).then(p1808 => {
      v1675 = p1808;
    });
    p1806.response.status = 200;
    p1806.body = vRequire14.SUCCESS_200(v1671.kMWex, {
      pv: v1674,
      uv: v1675
    });
  }
  static async ["getPvCountByMinute"](p1809) {
    const v1676 = {
      lBYNB: function (p1810, p1811) {
        return p1810 ^ p1811;
      },
      zPcma: "查询信息列表成功！"
    };
    let v1677 = p1809.request.body;
    const v1678 = JSON.parse(v1677);
    let v1679 = [];
    await CustomerPVModel.getPvCountByMinute(v1678).then(p1812 => {
      v1679 = p1812;
    });
    p1809.response.status = v1676.lBYNB(423460, 423660);
    p1809.body = vRequire14.SUCCESS_200(v1676.zPcma, {
      uv: v1679
    });
  }
  static async ["getProvinceCountBySeconds"](p1813) {
    const v1680 = {
      hMwFr: function (p1814, p1815) {
        return p1814 ^ p1815;
      },
      snWUl: "查询信息列表成功！"
    };
    let v1681 = p1813.request.body;
    const v1682 = JSON.parse(v1681);
    const v1683 = await CustomerPVModel.getPvsInfoByTenSeconds(v1682);
    const v1684 = await CustomerPVModel.getNewCusInfoBySeconds(v1682);
    const v1685 = await CustomerPVModel.getProvinceCountBySeconds(v1682);
    const v1686 = v1684 && v1684[0] ? v1684[0].count : v1680.hMwFr(622361, 622361);
    p1813.response.status = 200;
    p1813.body = vRequire14.SUCCESS_200(v1680.snWUl, {
      pvList: v1683,
      provinceData: v1685,
      newCusCount: v1686
    });
  }
  static async ["getLocationDataForMap"](p1816) {
    const v1687 = {
      BOrFi: function (p1817, p1818) {
        return p1817 - p1818;
      },
      RSUzM: function (p1819, p1820) {
        return p1819 ^ p1820;
      }
    };
    let v1688 = p1816.request.body;
    const v1689 = JSON.parse(v1688);
    const {
      webMonitorId: _0x1e4296,
      timeSize: _0x35d542
    } = v1689;
    const v1690 = await CustomerPVModel.getProvinceCountByDay(_0x1e4296, v1687.BOrFi(0, _0x35d542));
    const v1691 = await CustomerPVModel.getCountryCountByDay(_0x1e4296, v1687.RSUzM(626322, 626322) - _0x35d542);
    p1816.response.status = 200;
    p1816.body = vRequire14.SUCCESS_200("查询信息列表成功！", {
      provinceData: v1690,
      countryData: v1691
    });
  }
  static async getTagsPercent(p1821) {
    let v1692 = p1821.request.body;
    const v1693 = JSON.parse(v1692);
    const v1694 = await CustomerPVModel.getTagsPercent(v1693);
    p1821.response.status = 200;
    p1821.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1694);
  }
  static async getAliveCusInRealTime(p1822) {
    let v1695 = p1822.request.body;
    const {
      webMonitorIdList: _0x462b7e
    } = JSON.parse(v1695);
    const v1696 = [];
    for (let v1697 = 0; v1697 < _0x462b7e.length; v1697++) {
      let v1698 = await CustomerPVModel.getAliveCusInRealTime(_0x462b7e[v1697]);
      let v1699 = v1698[0].count;
      let v1700 = {
        webMonitorId: _0x462b7e[v1697],
        count: v1699
      };
      v1696.push(v1700);
    }
    p1822.response.status = 200;
    p1822.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1696);
  }
  static async ["getVersionCountOrderByCount"](p1823) {
    const v1701 = {
      JosKN: "projectVersion",
      frThY: "查询信息列表成功！"
    };
    let v1702 = p1823.request.body;
    const v1703 = JSON.parse(v1702);
    const v1704 = await CustomerPVModel.getComprehensiveDataCountOrderByCount(v1703, v1701.JosKN, UPLOAD_TYPE.VERSION_COUNT_DAY);
    v1704.forEach((p1824, p1825) => {
      if (p1824.showName) {
        v1704[p1825].showName = vRequire8.b64DecodeUnicode(p1824.showName);
      } else if (p1824.showName === "") {
        p1824.showName = "未知";
      }
    });
    p1823.response.status = 200;
    p1823.body = vRequire14.SUCCESS_200(v1701.frThY, v1704);
  }
  static async getCityCountOrderByCount(p1826) {
    let v1705 = p1826.request.body;
    const v1706 = JSON.parse(v1705);
    const v1707 = await CustomerPVModel.getComprehensiveDataCountOrderByCount(v1706, "city", UPLOAD_TYPE.CITY_COUNT_DAY);
    for (let v1708 = 0; v1708 < v1707.length; v1708++) {
      let v1709 = v1707[v1708].showName.replace("'", "");
      v1707[v1708].showName = v1707[v1708].showName === "0" ? "未知" : vRequire21[v1709] || v1709;
    }
    p1826.response.status = 200;
    p1826.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1707);
  }
  static async ["getCityCountOrderByCountTop20"](p1827) {
    let v1710 = p1827.request.body;
    const v1711 = JSON.parse(v1710);
    const v1712 = await CustomerPVModel.getCityCountOrderByCountTop20(v1711);
    for (let v1713 = 0; v1713 < v1712.length; v1713++) {
      let v1714 = v1712[v1713].showName.replace("'", "");
      v1712[v1713].showName = vRequire21[v1714] || v1714;
    }
    p1827.response.status = 200;
    p1827.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1712);
  }
  static async getDeviceCountOrderByCount(p1828) {
    const v1715 = {
      PKcPV: "deviceName",
      EXwxi: "查询信息列表成功！"
    };
    let v1716 = p1828.request.body;
    const v1717 = JSON.parse(v1716);
    const v1718 = await CustomerPVModel.getComprehensiveDataCountOrderByCount(v1717, v1715.PKcPV, UPLOAD_TYPE.DEVICE_COUNT_DAY);
    p1828.response.status = 200;
    p1828.body = vRequire14.SUCCESS_200(v1715.EXwxi, v1718);
  }
  static async getBrowserNameCountOrderByCount(p1829) {
    const v1719 = {
      qqcVB: "browserName",
      WhrVC: "查询信息列表成功！"
    };
    let v1720 = p1829.request.body;
    const v1721 = JSON.parse(v1720);
    const v1722 = await CustomerPVModel.getComprehensiveDataCountOrderByCount(v1721, v1719.qqcVB, UPLOAD_TYPE.BROWSER_COUNT_DAY);
    v1722.forEach(p1830 => {
      if (p1830.showName === "") {
        p1830.showName = "未知";
      }
    });
    p1829.response.status = 200;
    p1829.body = vRequire14.SUCCESS_200(v1719.WhrVC, v1722);
  }
  static async ["getDeviceSizeCountOrderByCount"](p1831) {
    let v1723 = p1831.request.body;
    const v1724 = JSON.parse(v1723);
    const v1725 = await CustomerPVModel.getComprehensiveDataCountOrderByCount(v1724, "deviceSize", UPLOAD_TYPE.SCREEN_COUNT_DAY);
    p1831.response.status = 200;
    p1831.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1725);
  }
  static async ["getOsCountOrderByCount"](p1832) {
    let v1726 = p1832.request.body;
    const v1727 = JSON.parse(v1726);
    const v1728 = await CustomerPVModel.getComprehensiveDataCountOrderByCount(v1727, "os", UPLOAD_TYPE.SYSTEM_COUNT_DAY);
    p1832.response.status = 200;
    p1832.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1728);
  }
  static async getReferrerCountOrderByCount(p1833) {
    const v1729 = {
      gvYYO: "查询信息列表成功！"
    };
    let v1730 = p1833.request.body;
    const v1731 = JSON.parse(v1730);
    const v1732 = await CustomerPVModel.getComprehensiveDataCountOrderByCount(v1731, "referrer", UPLOAD_TYPE.REFERRER_COUNT_DAY);
    v1732.forEach(p1834 => {
      if (p1834.showName === "") {
        p1834.showName = "直接访问";
      } else {
        p1834.showName = vRequire8.b64DecodeUnicode(p1834.showName);
      }
    });
    p1833.response.status = 200;
    p1833.body = vRequire14.SUCCESS_200(v1729.gvYYO, v1732);
  }
  static async getSimpleUrlCountOrderByCount(p1835) {
    let v1733 = p1835.request.body;
    const v1734 = JSON.parse(v1733);
    const v1735 = await CustomerPVModel.getComprehensiveDataCountOrderByCount(v1734, "simpleUrl", UPLOAD_TYPE.SIMPLE_URL_COUNT_DAY);
    v1735.forEach(p1836 => {
      if (p1836.showName === "") {
        p1836.showName = "直接访问";
      } else {
        p1836.showName = vRequire8.b64DecodeUnicode(p1836.showName);
      }
    });
    p1835.response.status = 200;
    p1835.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1735);
  }
  static async getPvListByPage(p1837) {
    const v1736 = {
      zYtsW: function (p1838, p1839) {
        return p1838 === p1839;
      },
      ZQrtJ: function (p1840, p1841) {
        return p1840 ^ p1841;
      }
    };
    let v1737 = p1837.request.body;
    const v1738 = v1736.zYtsW(typeof v1737, "string") ? JSON.parse(v1737) : v1737;
    const {
      res: _0x39f10f,
      totalRes: _0x1df0df
    } = await CustomerPVModel.getPvListByPage(v1738);
    const v1739 = _0x1df0df && _0x1df0df.length ? _0x1df0df[v1736.ZQrtJ(768949, 768949)].count : 0;
    const v_0x39f10f = _0x39f10f;
    p1837.response.status = 200;
    p1837.body = vRequire14.SUCCESS_200("查询信息列表成功！", {
      list: v_0x39f10f,
      totalCount: v1739
    });
  }
  static async getSimplePvList(p1842) {
    const v1740 = {
      ZKdKe: function (p1843, p1844) {
        return p1843 ^ p1844;
      },
      jdyBA: "success"
    };
    let v1741 = JSON.parse(p1842.request.body);
    const {
      webMonitorId: _0x389d4a,
      userId: _0x310869
    } = v1741;
    const v1742 = await CustomerPVModel.getSimplePvList(v1741);
    const v1743 = await VideosModel.getOpenStatusVideoList(_0x389d4a);
    v1742.forEach(p1845 => {
      if (v1743.some(p1846 => p1846.userId === p1845.userId)) {
        p1845.videoStatus = "on";
        p1845.videoId = v1743.find(p1847 => p1847.userId === p1845.userId).videoId;
      } else {
        p1845.videoStatus = "off";
        p1845.videoId = "";
      }
    });
    p1842.response.status = v1740.ZKdKe(955061, 955005);
    p1842.body = vRequire14.SUCCESS_200(v1740.jdyBA, v1742);
  }
  static async ["getSevenDaysLeftCount"](p1848) {
    const v1744 = {
      tovQG: function (p1849, p1850) {
        return p1849 ^ p1850;
      },
      gOfrT: function (p1851, p1852) {
        return p1851 - p1852;
      },
      odclF: function (p1853, p1854) {
        return p1853 ^ p1854;
      },
      qpzCG: function (p1855, p1856) {
        return p1855 - p1856;
      }
    };
    let v1745 = p1848.request.body;
    const v1746 = JSON.parse(v1745);
    const v1747 = "sevenDayLeftArray" + v1746.webMonitorId + new Date().Format("yyyyMMdd");
    let v1748 = null;
    if (global.monitorInfo[v1747]) {
      v1748 = global.monitorInfo[v1747];
    } else {
      const vParseInt5 = parseInt(v1746.day, v1744.tovQG(664342, 664348));
      const v1749 = [];
      for (let v1750 = v1744.gOfrT(vParseInt5, v1744.odclF(876919, 876918)); v1750 > 0; v1750--) {
        const v1751 = vRequire8.addDays(v1744.qpzCG(0, v1750));
        try {
          const v1752 = await CustomerPVModel.getSevenDaysLeftCount(v1746, v1751);
          let v1753 = {
            date: v1751,
            count: v1752[v1744.tovQG(397034, 397034)].count
          };
          v1749.push(v1753);
        } catch (_0x403d2a) {
          let v1754 = {
            date: v1751,
            count: "0"
          };
          v1749.push(v1754);
          vRequire13.printError(v1751 + "留存数据查询失败：", _0x403d2a);
        }
      }
      v1748 = v1749;
      global.monitorInfo[v1747] = v1749;
    }
    p1848.response.status = 200;
    p1848.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1748);
  }
  static async getYesterdayLeftPercent(p1857) {
    const v1755 = {
      NpLQV: "次日留存率计算：",
      snCWS: "day6"
    };
    let v1756 = p1857.request.body;
    const v1757 = JSON.parse(v1756);
    let v1758 = null;
    try {
      v1758 = await CustomerPVModel.getYesterdayLeftPercent(v1757);
    } catch (_0x314a3c) {
      vRequire13.printError(v1755.NpLQV, _0x314a3c);
      v1758 = [{
        date: "day1",
        count: "0"
      }, {
        date: "day2",
        count: "0"
      }, {
        date: "day3",
        count: "0"
      }, {
        date: "day4",
        count: "0"
      }, {
        date: "day5",
        count: "0"
      }, {
        date: v1755.snCWS,
        count: "0"
      }, {
        date: "day7",
        count: "0"
      }];
    }
    p1857.response.status = 200;
    p1857.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1758);
  }
  static async getOsAnalysis(p1858) {
    const v1759 = {
      rffib: function (p1859, p1860) {
        return p1859 ^ p1860;
      },
      YmGyA: "查询信息列表成功！"
    };
    let v1760 = p1858.request.body;
    const v1761 = JSON.parse(v1760);
    if (v1760) {
      const v1762 = await CustomerPVModel.getCustomerCountByTime(v1761);
      p1858.response.status = v1759.rffib(479257, 479441);
      p1858.body = vRequire14.SUCCESS_200(v1759.YmGyA, vRequire8.handleDateResult(v1762, v1761.timeScope));
    } else {
      p1858.response.status = v1759.rffib(434594, 434238);
      p1858.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
  static async getOsAnalysis(p1861) {
    const v1763 = {
      KSDtK: function (p1862, p1863) {
        return p1862 ^ p1863;
      }
    };
    let v1764 = p1861.request.body;
    const v1765 = JSON.parse(v1764);
    if (v1764) {
      const v1766 = await CustomerPVModel.getCustomerCountByTime(v1765);
      p1861.response.status = 200;
      p1861.body = vRequire14.SUCCESS_200("查询信息列表成功！", vRequire8.handleDateResult(v1766, v1765.timeScope));
    } else {
      p1861.response.status = v1763.KSDtK(689615, 689235);
      p1861.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
  static async getAccessCalendar(p1864) {
    const v1767 = {
      ruOnt: function (p1865, p1866) {
        return p1865 + p1866;
      },
      CPUPN: " 23:59:59",
      LHXaN: function (p1867, p1868) {
        return p1867 * p1868;
      },
      poLnP: function (p1869, p1870) {
        return p1869 ^ p1870;
      },
      TbXWt: "yyyy-MM-dd"
    };
    let {
      startDate: _0x412ad9,
      endDate: _0x437fae,
      webMonitorId: _0xb93e10,
      userId: _0x7e24fd
    } = p1864.request.body;
    const v1768 = v1767.ruOnt(_0x412ad9, " 00:00:00");
    const v1769 = _0x437fae + v1767.CPUPN;
    const v1770 = await CustomerPVModel.getAccessCalendar({
      startDate: v1768,
      endDate: v1769,
      webMonitorId: _0xb93e10,
      userId: _0x7e24fd
    });
    let v_0x412ad9 = _0x412ad9;
    let v1771 = [];
    let v1772 = [];
    while (v_0x412ad9 < _0x437fae) {
      const v1773 = new Date(new Date(v_0x412ad9).getTime() + v1767.LHXaN(v1767.poLnP(816196, 816220), v1767.poLnP(160826, 162346)) * 1000).Format(v1767.TbXWt);
      const v1774 = v1770.filter(p1871 => p1871.date === v1773);
      v1772.push(v1773);
      if (v1774 && v1774.length) {
        v1771.push(v1774[0].count);
      } else {
        v1771.push(0);
      }
      v_0x412ad9 = v1773;
    }
    p1864.response.status = 200;
    p1864.body = vRequire14.SUCCESS_200("查询信息列表成功！", {
      values: v1771,
      timestamps: v1772
    });
  }
  static async getFootPrints(p1872) {
    const v1775 = {
      SVQgi: function (p1873, p1874) {
        return p1873 > p1874;
      },
      PQlgi: function (p1875, p1876) {
        return p1875 ^ p1876;
      },
      hZTtE: function (p1877, p1878) {
        return p1877 === p1878;
      },
      jAjpw: " 23:59:59",
      cUCiU: function (p1879, p1880) {
        return p1879 < p1880;
      },
      ZJbpG: function (p1881, p1882) {
        return p1881 + p1882;
      },
      pQsgr: "yyyy-MM-dd",
      IUCiL: function (p1883, p1884) {
        return p1883 ^ p1884;
      }
    };
    let {
      startDate: _0x1d61bf,
      endDate: _0x2ad9fb,
      webMonitorId: _0x16d50d,
      userId: _0x21af2a,
      customerKey: _0x9567c
    } = JSON.parse(p1872.request.body);
    const v1776 = _0x1d61bf + " 00:00:00";
    const v1777 = _0x2ad9fb + v1775.jAjpw;
    const v1778 = [];
    if (_0x21af2a) {
      await CustomerPVModel.getCustomerKeyByUserIdInTime({
        webMonitorId: _0x16d50d,
        startTime: v1776,
        endTime: v1777,
        userId: _0x21af2a
      }).then(p1885 => {
        p1885.forEach(p1886 => {
          if (p1886.customerKey && v1775.SVQgi(p1886.customerKey.length, v1775.PQlgi(427568, 427578))) {
            v1778.push(p1886.customerKey);
          }
        });
      });
    } else {
      v1778.push(_0x9567c);
    }
    let v1779 = " and customerKey in (";
    v1778.forEach((p1887, p1888) => {
      v1779 += v1775.hZTtE(v1778.length - v1775.PQlgi(320078, 320079), p1888) ? "'" + p1887 + "'" : "'" + p1887 + "',";
    });
    v1779 += ")";
    const v1780 = await CustomerPVModel.getAccessCalendar({
      startDate: v1776,
      endDate: v1777,
      webMonitorId: _0x16d50d,
      customerKeySql: v1779
    });
    let v_0x1d61bf = _0x1d61bf;
    let v1781 = [];
    let v1782 = [];
    while (v1775.cUCiU(v_0x1d61bf, _0x2ad9fb)) {
      const v1783 = new Date(v1775.ZJbpG(new Date(v_0x1d61bf).getTime(), v1775.PQlgi(498505, 496985) * 24 * 1000)).Format(v1775.pQsgr);
      const v1784 = v1780.filter(p1889 => p1889.date === v1783);
      v1782.push(v1783);
      if (v1784 && v1784.length) {
        v1781.push(v1784[v1775.PQlgi(724465, 724465)].count);
      } else {
        v1781.push(0);
      }
      v_0x1d61bf = v1783;
    }
    p1872.response.status = v1775.IUCiL(818238, 818422);
    p1872.body = vRequire14.SUCCESS_200("查询信息列表成功！", {
      values: v1781,
      timestamps: v1782
    });
  }
  static async getProjectCountInfoInRealTime(p1890) {
    const v1785 = {
      KbbqZ: function (p1891, p1892) {
        return p1891 ^ p1892;
      },
      Htzhc: function (p1893, p1894) {
        return p1893 ^ p1894;
      },
      uSZLD: function (p1895, p1896) {
        return p1895 - p1896;
      },
      PevyK: function (p1897, p1898) {
        return p1897 ^ p1898;
      },
      IHdcL: function (p1899, p1900) {
        return p1899 ^ p1900;
      },
      lUdRh: function (p1901, p1902) {
        return p1901 ^ p1902;
      },
      cfqVv: function (p1903, p1904) {
        return p1903 ^ p1904;
      }
    };
    const {
      webMonitorId: _0x25454c
    } = p1890.request.body;
    const v1786 = [];
    const v1787 = await CustomerPVModel.getUvCountByMinute({
      webMonitorId: _0x25454c,
      minuteSize: 30
    });
    for (let v1788 = v1785.KbbqZ(163531, 163530); v1788 < v1785.Htzhc(416669, 416642); v1788++) {
      const v1789 = new Date(v1785.uSZLD(new Date().getTime(), v1788 * 60 * 1000)).Format("yyyy-MM-dd hh:mm:00");
      const v1790 = v1787.filter(p1905 => p1905.minute === v1789);
      if (v1790.length) {
        v1786.push(v1790[0]);
      } else {
        v1786.push({
          minute: v1789,
          count: 0
        });
      }
    }
    const v1791 = vRequire8.addDays(0);
    const v1792 = await CustomerPVModel.getAliveCusInRealTime(_0x25454c);
    const v1793 = await InfoCountByDayModel.getInfoCountByDayDetailByDayName(v1791, _0x25454c, UPLOAD_TYPE.HEALTH_SCORE_DAY);
    const v1794 = await InfoCountByDayModel.getInfoCountByDayName(v1791, _0x25454c, UPLOAD_TYPE.UV_COUNT_DAY);
    const v1795 = await InfoCountByDayModel.getInfoCountByDayName(v1791, _0x25454c, UPLOAD_TYPE.ON_ERROR_PER);
    const v1796 = await InfoCountByDayModel.getInfoCountByDayName(v1791, _0x25454c, UPLOAD_TYPE.CONSOLE_ERROR_PER);
    const v1797 = await InfoCountByDayModel.getInfoCountByDayName(v1791, _0x25454c, UPLOAD_TYPE.HTTP_ERROR_PER);
    const v1798 = await InfoCountByDayModel.getInfoCountByDayName(v1791, _0x25454c, UPLOAD_TYPE.RESOURCE_ERROR_PER);
    const v1799 = v1792 && v1792[0] ? v1792[v1785.PevyK(110099, 110099)].count : 100;
    const v1800 = v1793 && v1793[0] ? v1793[0].dayCount : v1785.IHdcL(753592, 753628);
    const v1801 = v1794 && v1794[0] ? v1794[0].dayCount : 0;
    const v1802 = v1795 && v1795[v1785.PevyK(488029, 488029)] ? v1795[0].dayCount : v1785.Htzhc(563578, 563578);
    const v1803 = v1796 && v1796[0] ? v1796[0].dayCount : 0;
    const v1804 = v1797 && v1797[v1785.lUdRh(327443, 327443)] ? v1797[v1785.cfqVv(339912, 339912)].dayCount : 0;
    const v1805 = v1798 && v1798[0] ? v1798[v1785.cfqVv(539941, 539941)].dayCount : 0;
    p1890.response.status = 200;
    p1890.body = vRequire14.SUCCESS_200("查询信息列表成功！", {
      aliveCountArray: v1786,
      healthScore: v1800,
      aliveCount: v1799,
      uvCount: v1801,
      jsErrorPercent: v1802,
      consoleErrorPercent: v1803,
      httpErrorPercent: v1804,
      resourceErrorPercent: v1805
    });
  }
  static async ["getPvUvInRealTimeByMinute"](p1906) {
    const v1806 = {
      jXbcL: function (p1907, p1908) {
        return p1907 - p1908;
      },
      ydiMx: function (p1909, p1910) {
        return p1909 + p1910;
      },
      aopWp: ":00",
      DaMUu: function (p1911, p1912) {
        return p1911 ^ p1912;
      }
    };
    let v1807 = p1906.request.body;
    const v1808 = JSON.parse(v1807);
    const {
      webMonitorId: _0x1b6f82
    } = v1808;
    const v1809 = new Date().getTime();
    const v1810 = new Date(v1806.jXbcL(v1809, 60000)).Format("yyyy-MM-dd hh:mm") + ":00";
    const v1811 = v1806.ydiMx(new Date(v1809).Format("yyyy-MM-dd hh:mm"), v1806.aopWp);
    if (v1807) {
      const v1812 = await CustomerPVModel.getPvUvInRealTimeByMinute(_0x1b6f82, v1810, v1811);
      const v1813 = await CustomerPVModel.getNewUvInRealTimeByMinute(_0x1b6f82, v1810, v1811);
      const v1814 = await BehaviorInfoModel.getClickCountInRealTimeByMinute(_0x1b6f82, v1810, v1811);
      const v1815 = {
        ...v1812[0],
        ...v1813[0],
        ...v1814[0]
      };
      p1906.response.status = v1806.DaMUu(972057, 972241);
      p1906.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1815);
    } else {
      p1906.response.status = 412;
      p1906.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
  static async ["getInitErrorInfoInRealTimeByTimeSize"](p1913) {
    const v1816 = {
      xdsHw: function (p1914, p1915) {
        return p1914 + p1915;
      },
      XSTqV: ":00",
      sDiWB: function (p1916, p1917) {
        return p1916 - p1917;
      },
      ISRUn: function (p1918, p1919) {
        return p1918 < p1919;
      },
      pticz: function (p1920, p1921) {
        return p1920 == p1921;
      },
      JiftQ: function (p1922, p1923) {
        return p1922 < p1923;
      },
      ZJvDP: "pvCount",
      FwUph: function (p1924, p1925) {
        return p1924 ^ p1925;
      },
      EIqGu: function (p1926, p1927) {
        return p1926 < p1927;
      },
      EqLZi: function (p1928, p1929) {
        return p1928 === p1929;
      },
      XLTyG: "clickCount",
      McUVm: "httpCount",
      kQFbg: function (p1930, p1931) {
        return p1930 < p1931;
      },
      fEFhF: function (p1932, p1933) {
        return p1932 === p1933;
      },
      rpkHX: function (p1934, p1935, p1936) {
        return p1934(p1935, p1936);
      },
      LLOCo: function (p1937, p1938) {
        return p1937 ^ p1938;
      },
      QfkkC: function (p1939, p1940) {
        return p1939 === p1940;
      },
      GiGMT: "on_error",
      XYwbr: function (p1941, p1942) {
        return p1941 ^ p1942;
      },
      aChyF: function (p1943, p1944) {
        return p1943 === p1944;
      },
      smPCT: function (p1945, p1946) {
        return p1945 ^ p1946;
      },
      kUySG: "jsErrorRate",
      WCozo: "查询信息列表成功！"
    };
    let v1817 = p1913.request.body;
    const v1818 = JSON.parse(v1817);
    const {
      webMonitorId: _0x5a45c7,
      timeSize: _0x50bcc1
    } = v1818;
    const v1819 = new Date().getTime();
    const v1820 = v1816.xdsHw(new Date(v1819 - (_0x50bcc1 + 2) * 6000).Format("yyyy-MM-dd hh:mm"), v1816.XSTqV);
    const v1821 = new Date(v1816.sDiWB(v1819, 60000)).Format("yyyy-MM-dd hh:mm") + ":00";
    const v1822 = vRequire8.splitTime(v1820, v1821, _0x50bcc1);
    const v1823 = new Map();
    if (v1817) {
      const v1824 = await CustomerPVModel.getPvUvInRealTimeByEveryMinute(_0x5a45c7, v1820, v1821);
      for (let v1825 = 0; v1816.ISRUn(v1825, v1822.length); v1825++) {
        v1823.set(v1822[v1825], {
          time: v1822[v1825],
          pvCount: "0",
          uvCount: "0",
          newUvCount: "0",
          clickCount: "0",
          httpCount: "0",
          httpErrorCount: "0",
          httpTotalCount: "0",
          loadTime: "0",
          console_error: "0",
          on_error: "0",
          resourceErrorCount: "0",
          httpSuccessPer: 100,
          jsErrorRate: "0"
        });
      }
      const v1826 = await CustomerPVModel.getNewUvInRealTimeByEveryMinute(_0x5a45c7, v1820, v1821);
      const v1827 = await BehaviorInfoModel.getClickCountInRealTimeByEveryMinute(_0x5a45c7, v1820, v1821);
      const v1828 = await HttpLogInfoModel.getHttpCountInRealTimeByEveryMinute(_0x5a45c7, v1820, v1821);
      const v1829 = await HttpErrorInfoModel.getHttpErrorCountInRealTimeByEveryMinute(_0x5a45c7, v1820, v1821);
      const v1830 = await HttpLogInfoModel.getHttpLoadTimeInRealTimeByEveryMinute(_0x5a45c7, v1820, v1821);
      const v1831 = await JavascriptErrorInfoModel.getJsConsoleErrorCountInRealTimeByEveryMinute(_0x5a45c7, v1820, v1821);
      const v1832 = await JavascriptErrorInfoModel.getJsOnErrorCountInRealTimeByEveryMinute(_0x5a45c7, v1820, v1821);
      const v1833 = await ResourceLoadInfoModel.getResourceErrorCountInRealTimeByEveryMinute(_0x5a45c7, v1820, v1821);
      const v1834 = JavascriptErrorInfoModel.getJsErrorUVCountInRealTimeByEveryMinute(_0x5a45c7, v1820, v1821);
      for (let v1835 = 0; v1835 < v1834.length; v1835++) {
        for (let [v1836, v1837] of v1823) {
          if (v1816.pticz(v1836, v1834[v1835].time)) {
            v1837.jsOnErrorUvCount = v1834[v1835].jsOnErrorUvCount;
          } else {
            v1837.jsOnErrorUvCount = "0";
          }
          v1823.set(v1836, v1837);
        }
      }
      const v1838 = JavascriptErrorInfoModel.getJsUVCountInRealTimeByEveryMinute(_0x5a45c7, v1820, v1821);
      for (let v1839 = 0; v1816.JiftQ(v1839, v1838.length); v1839++) {
        for (let [v1840, v1841] of v1823) {
          if (v1840 == v1838[v1839].time) {
            v1841.jsUvCount = v1838[v1839].jsUvCount;
          } else {
            v1841.jsUvCount = "0";
          }
          v1823.set(v1840, v1841);
        }
      }
      for (let [v1842, v1843] of v1823) {
        for (let v1844 = 0; v1816.ISRUn(v1844, v1824.length); v1844++) {
          if (v1842 === v1824[v1844].time) {
            v1843[v1816.ZJvDP] = v1824[v1844].pvCount + "";
            v1843.uvCount = v1824[v1844].uvCount + "";
          }
        }
        for (let v1845 = v1816.FwUph(597672, 597672); v1816.EIqGu(v1845, v1826.length); v1845++) {
          if (v1816.EqLZi(v1842, v1826[v1845].time)) {
            v1843.newUvCount = v1826[v1845].newUvCount;
          }
        }
        for (let v1846 = 0; v1846 < v1827.length; v1846++) {
          if (v1816.EqLZi(v1842, v1827[v1846].time)) {
            v1843[v1816.XLTyG] = v1827[v1846].clickCount;
          }
        }
        for (let v1847 = 0; v1847 < v1828.length; v1847++) {
          if (v1842 === v1828[v1847].time) {
            v1843[v1816.McUVm] = v1828[v1847].httpCount;
          }
        }
        for (let v1848 = 0; v1848 < v1829.length; v1848++) {
          if (v1842 === v1829[v1848].time) {
            v1843.httpErrorCount = v1829[v1848].httpErrorCount;
          }
        }
        for (let v1849 = 0; v1816.kQFbg(v1849, v1830.length); v1849++) {
          if (v1816.fEFhF(v1842, v1830[v1849].time)) {
            const v1850 = v1816.rpkHX(parseInt, v1830[v1849].loadedTime, 10);
            v1843.loadTime = vRequire8.toFixed(v1850 / v1816.LLOCo(314296, 313424), 1);
          }
        }
        for (let v1851 = 0; v1851 < v1831.length; v1851++) {
          if (v1842 === v1831[v1851].time) {
            v1843.console_error = v1831[v1851].console_error;
          }
        }
        for (let v1852 = 0; v1852 < v1832.length; v1852++) {
          if (v1816.QfkkC(v1842, v1832[v1852].time)) {
            v1843[v1816.GiGMT] = v1832[v1852].on_error;
          }
        }
        for (let v1853 = 0; v1853 < v1833.length; v1853++) {
          if (v1842 === v1833[v1853].time) {
            v1843.resourceErrorCount = v1833[v1853].resourceErrorCount;
          }
        }
        v1823.set(v1842, v1843);
      }
      for (let [v1854, v1855] of v1823) {
        let v1856 = 100;
        const v1857 = parseInt(v1855.httpCount, v1816.LLOCo(433546, 433536)) + parseInt(v1855.httpErrorCount, v1816.XYwbr(138478, 138468));
        if (v1857 > v1816.LLOCo(928799, 928799)) {
          if (v1816.aChyF(v1855.httpCount, 0)) {
            v1856 = 0;
          } else {
            v1856 = vRequire8.toFixed(v1855.httpCount * v1816.LLOCo(906694, 906658) / v1857, 2);
          }
          v1855.httpSuccessPer = v1856;
        }
        let v1858 = 0;
        if (v1855.jsUvCount > 0) {
          v1858 = vRequire8.toFixed(v1855.jsOnErrorUvCount / v1855.jsUvCount, v1816.smPCT(965978, 965976));
          v1855[v1816.kUySG] = v1858 * 100;
        }
        v1823.set(v1854, v1855);
      }
      p1913.response.status = 200;
      let v1859 = [];
      for (let v1860 of v1823.keys()) {
        v1859.push(v1823.get(v1860));
      }
      p1913.body = vRequire14.SUCCESS_200(v1816.WCozo, v1859);
    } else {
      p1913.response.status = 412;
      p1913.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
}
class C25 {
  static async create(p1947) {
    const v1861 = p1947.request.body;
    const v1862 = JSON.parse(v1861);
    if (v1862.ignoreErrorMessage && v1862.webMonitorId) {
      let v1863 = await IgnoreErrorModel.createIgnoreError(v1862);
      let v1864 = await IgnoreErrorModel.getIgnoreErrorDetail(v1863.id);
      p1947.response.status = 200;
      p1947.body = vRequire14.SUCCESS_200("创建信息成功", v1864);
    } else {
      p1947.response.status = 412;
      p1947.body = vRequire14.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async ["getIgnoreErrorList"](p1948) {
    const v1865 = {
      Dvlyp: function (p1949, p1950) {
        return p1949 ^ p1950;
      }
    };
    let v1866 = p1948.request.body;
    if (v1866) {
      const v1867 = await IgnoreErrorModel.getIgnoreErrorList();
      p1948.response.status = v1865.Dvlyp(112142, 112326);
      p1948.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1867);
    } else {
      p1948.response.status = 412;
      p1948.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
  static async ignoreErrorByApplication(p1951) {
    const v1868 = vRequire8.parseQs(p1951.request.url);
    if (v1868) {
      const v1869 = await IgnoreErrorModel.ignoreErrorByApplication(v1868);
      p1951.response.status = 200;
      p1951.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1869);
    } else {
      p1951.response.status = 412;
      p1951.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
  static async detail(p1952) {
    const v1870 = {
      hTNFw: "查询成功！"
    };
    let v1871 = p1952.params.id;
    if (v1871) {
      let v1872 = await IgnoreErrorModel.getIgnoreErrorDetail(v1871);
      p1952.response.status = 200;
      p1952.body = vRequire14.SUCCESS_200(v1870.hTNFw, v1872);
    } else {
      p1952.response.status = 412;
      p1952.body = vRequire14.ERROR_412("信息ID必须传");
    }
  }
  static async delete(p1953) {
    const v1873 = {
      crqXM: function (p1954, p1955) {
        return p1954(p1955);
      }
    };
    let v1874 = p1953.params.id;
    if (v1874 && !v1873.crqXM(isNaN, v1874)) {
      await IgnoreErrorModel.deleteIgnoreError(v1874);
      p1953.response.status = 200;
      p1953.body = vRequire14.SUCCESS_200("删除信息成功！");
    } else {
      p1953.response.status = 412;
      p1953.body = vRequire14.ERROR_412("信息ID必须传！");
    }
  }
  static async update(p1956) {
    const v1875 = {
      geSRG: function (p1957, p1958) {
        return p1957 ^ p1958;
      },
      RLooF: "更新信息失败！"
    };
    let v1876 = p1956.request.body;
    let v1877 = p1956.params.id;
    if (v1876) {
      await IgnoreErrorModel.updateIgnoreError(v1877, v1876);
      let v1878 = await IgnoreErrorModel.getIgnoreErrorDetail(v1877);
      p1956.response.status = v1875.geSRG(464361, 464161);
      p1956.body = vRequire14.SUCCESS_200("更新信息成功！", v1878);
    } else {
      p1956.response.status = 412;
      p1956.body = vRequire14.ERROR_412(v1875.RLooF);
    }
  }
}
class C26 {
  static async ["create"](p1964) {
    const v1879 = {
      lwCor: function (p1965, p1966) {
        return p1965 ^ p1966;
      }
    };
    const v1880 = p1964.request.body;
    const v1881 = JSON.parse(v1880.data);
    if (req.userId) {
      let v1882 = await ExtendBehaviorInfoModel.createExtendBehaviorInfo(v1881);
      let v1883 = await ExtendBehaviorInfoModel.getExtendBehaviorInfoDetail(v1882.id);
      p1964.response.status = v1879.lwCor(106319, 106375);
      p1964.body = vRequire14.SUCCESS_200("创建信息成功", v1883);
    } else {
      p1964.response.status = 412;
      p1964.body = vRequire14.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async getExtendBehaviorInfoList(p1967) {
    let v1884 = p1967.request.body;
    if (v1884) {
      const v1885 = await ExtendBehaviorInfoModel.getExtendBehaviorInfoList();
      p1967.response.status = 200;
      p1967.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1885);
    } else {
      p1967.response.status = 412;
      p1967.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
  static async detail(p1968) {
    const v1886 = {
      tTvoZ: "信息ID必须传"
    };
    let v1887 = p1968.params.id;
    if (v1887) {
      let v1888 = await ExtendBehaviorInfoModel.getExtendBehaviorInfoDetail(v1887);
      p1968.response.status = 200;
      p1968.body = vRequire14.SUCCESS_200("查询成功！", v1888);
    } else {
      p1968.response.status = 412;
      p1968.body = vRequire14.ERROR_412(v1886.tTvoZ);
    }
  }
  static async ["delete"](p1969) {
    const v1889 = {
      cMZcR: function (p1970, p1971) {
        return p1970(p1971);
      },
      drYRL: "删除信息成功！"
    };
    let v1890 = p1969.params.id;
    if (v1890 && !v1889.cMZcR(isNaN, v1890)) {
      await ExtendBehaviorInfoModel.deleteExtendBehaviorInfo(v1890);
      p1969.response.status = 200;
      p1969.body = vRequire14.SUCCESS_200(v1889.drYRL);
    } else {
      p1969.response.status = 412;
      p1969.body = vRequire14.ERROR_412("信息ID必须传！");
    }
  }
  static async ["update"](p1972) {
    const v1891 = {
      eObgO: function (p1973, p1974) {
        return p1973 ^ p1974;
      }
    };
    let v1892 = p1972.request.body;
    let v1893 = p1972.params.id;
    if (v1892) {
      await ExtendBehaviorInfoModel.updateExtendBehaviorInfo(v1893, v1892);
      let v1894 = await ExtendBehaviorInfoModel.getExtendBehaviorInfoDetail(v1893);
      p1972.response.status = 200;
      p1972.body = vRequire14.SUCCESS_200("更新信息成功！", v1894);
    } else {
      p1972.response.status = v1891.eObgO(177998, 177874);
      p1972.body = vRequire14.ERROR_412("更新信息失败！");
    }
  }
}
class C27 {
  static async getLocalLog(p1975) {
    const v1895 = vRequire7.parseQs(p1975.request.url);
    const {
      webMonitorId: _0x4ebb0f
    } = v1895;
    const v1896 = await LocalLogModel.createLocalLog(v1895);
    p1975.response.status = 200;
    p1975.body = vRequire14.SUCCESS_200("success", v1896);
  }
  static async getLocalLogListForOneHour(p1976) {
    const v1897 = {
      YrKQh: "success"
    };
    const v1898 = vRequire7.parseQs(p1976.request.url);
    const {
      webMonitorId: _0x51d641,
      userId: _0x539a1f
    } = v1898;
    const v1899 = await LocalLogModel.getLocalLogListForOneHour(_0x51d641, _0x539a1f);
    v1899.forEach(p1977 => {
      p1977.content = vRequire7.b64DecodeUnicode(p1977.content);
    });
    p1976.response.status = 200;
    p1976.body = vRequire14.SUCCESS_200(v1897.YrKQh, v1899);
  }
  static async ["getLocalLogList"](p1978) {
    const v1900 = {
      pFNzw: function (p1979, p1980) {
        return p1979 ^ p1980;
      }
    };
    const v1901 = vRequire7.parseQs(p1978.request.url);
    const {
      logId: _0x1c8cd4,
      day: _0x330023,
      webMonitorId: _0x5b0803
    } = v1901;
    const v1902 = await LocalLogModel.getLocalLogList(_0x5b0803, _0x1c8cd4, _0x330023);
    p1978.response.status = v1900.pFNzw(807533, 807589);
    p1978.body = vRequire14.SUCCESS_200("success", v1902);
  }
}
let vF252 = "0.2.73";
class C28 {
  static async create(p1981) {
    const v1903 = {
      IZBwm: function (p1982, p1983) {
        return p1982 ^ p1983;
      }
    };
    let v1904 = p1981.request.body;
    if (v1904.title && v1904.author && v1904.content && v1904.category) {
      let v1905 = await ProjectModel.createProject(v1904);
      let v1906 = await ProjectModel.getProjectDetail(v1905.id);
      p1981.response.status = v1903.IZBwm(360377, 360305);
      p1981.body = vRequire14.SUCCESS_200("创建信息成功", v1906);
    } else {
      p1981.response.status = 412;
      p1981.body = vRequire14.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async getProjectList(p1984) {
    const v1907 = {
      sphgq: function (p1985, p1986) {
        return p1985 + p1986;
      },
      KdxgW: "aliveCount",
      nijno: "post",
      Sitqc: "superAdmin",
      ejbWm: function (p1987, p1988) {
        return p1987 ^ p1988;
      },
      CeAJI: "查询信息列表成功！"
    };
    const v1908 = vRequire7.parseQs(p1984.request.url);
    const {
      companyId: _0x8d0ee2,
      projectName: _0x22cb0b,
      sortType = "desc",
      sortKey = v1907.KdxgW
    } = v1908;
    const {
      userId: _0x372581,
      userType: _0x496b34
    } = p1984.user;
    const v1909 = await vRequire7.requestForTwoProtocol(v1907.nijno, LOCAL_SERVER + "/wfCenter/getTeamListWithoutToken", {
      userId: _0x372581,
      userType: _0x496b34,
      companyId: _0x8d0ee2
    });
    let v1910 = v1909.data;
    let v1911 = "";
    v1910.forEach(p1989 => {
      v1911 += v1907.sphgq(",", p1989.webMonitorIds);
    });
    const v1912 = v1911.split(",");
    let v1913 = "'webfunny'";
    v1912.forEach(p1990 => {
      v1913 += ",'" + p1990 + "'";
    });
    v1908.webMonitorIds = v1913;
    let v1914 = [];
    let v1915 = [];
    if (_0x496b34 == "admin" || _0x496b34 == v1907.Sitqc) {
      v1914 = await ProjectModel.getAllProjectListForCompany(_0x8d0ee2);
    } else {
      v1914 = await ProjectModel.getProjectList(v1908);
      v1915 = await ProjectModel.getProjectListByViewer(_0x372581);
    }
    v1914 = v1914.concat(v1915);
    const v1916 = _0x22cb0b ? v1914.filter(p1991 => p1991.projectName.indexOf(_0x22cb0b) !== -1) : v1914;
    if (sortKey) {
      if (sortType === "desc") {
        v1916.sort((p1992, p1993) => p1993[sortKey] - p1992[sortKey]);
      } else {
        v1916.sort((p1994, p1995) => p1994[sortKey] - p1995[sortKey]);
      }
    }
    let v1917 = [];
    if (global.monitorInfo.purchaseCodeValid && global.monitorInfo.purchaseCodeValid === v46) {
      v1917 = v1916;
    } else if (v1916.length > 0) {
      v1917.push(v1916[0]);
    }
    p1984.response.status = v1907.ejbWm(465832, 465760);
    p1984.body = vRequire14.SUCCESS_200(v1907.CeAJI, v1917);
  }
  static async getWebMonitorIdList(p1996) {
    const v1918 = {
      tmxAQ: function (p1997, p1998) {
        return p1997 ^ p1998;
      }
    };
    const v1919 = await ProjectModel.getWebMonitorIdList();
    let v1920 = [];
    v1919.forEach(p1999 => {
      v1920.push(p1999.webMonitorId);
    });
    p1996.response.status = v1918.tmxAQ(748908, 748964);
    p1996.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1920);
  }
  static async getProjectDetail(p2000) {
    const v1921 = {
      YehlU: function (p2001, p2002) {
        return p2001 ^ p2002;
      },
      VIlVY: function (p2003, p2004) {
        return p2003 !== p2004;
      },
      GGgWA: function (p2005, p2006) {
        return p2005 === p2006;
      },
      fpliD: "utf-8",
      Ohfyy: "jeffery_webmonitor",
      llgHV: "&&&webmonitor_name&&&",
      AyEbN: function (p2007, p2008) {
        return p2007 + p2008;
      }
    };
    const v1922 = vRequire7.parseQs(p2000.request.url);
    const {
      webMonitorId: _0x5aca03
    } = v1922;
    const v1923 = await ProjectModel.getProjectDetailForWebMonitorId(_0x5aca03);
    const v1924 = v1923.length ? v1923[v1921.YehlU(955151, 955151)] : null;
    const {
      recordConfig: _0x3783ff
    } = v1924;
    let v1925 = "";
    if (_0x3783ff && v1921.VIlVY(_0x3783ff, null)) {
      v1925 = JSON.parse(_0x3783ff);
    } else {
      v1925 = JSON.parse(PROJECT_CONFIG);
    }
    if (v1923.length) {
      const {
        projectType: _0x221b7e,
        projectName: _0xe9d545,
        hasTrace = 0
      } = v1924;
      const {
        uploadServerDomain: _0x2c30b9,
        localServerDomain: _0x166db9,
        mainDomain: _0x267d1c,
        localAssetsDomain: _0x5770a1,
        assetsDomain: _0x17a682
      } = accountInfo;
      const v1926 = _0x2c30b9 ? _0x2c30b9 : _0x166db9;
      let v1927 = "";
      let v1928 = "";
      let v1929 = "";
      let v1930 = "";
      let v1931 = "";
      let v1932 = "";
      if (_0x221b7e === "h5") {
        v1930 = fs2.readFileSync(vRequire19.resolve(__dirname, "..") + "/lib/webfunny.min.js", "utf-8");
        v1931 = fs2.readFileSync(vRequire19.resolve(__dirname, "..") + "/lib/debug/webfunny.debug.min.js", "utf-8");
        v1932 = fs2.readFileSync(vRequire19.resolve(__dirname, "..") + "/lib/ie/webfunny.ie.min.js", "utf-8");
      } else if (v1921.GGgWA(_0x221b7e, "mp")) {
        v1930 = fs2.readFileSync(vRequire19.resolve(__dirname, "..") + "/lib/webfunny.mp.min.js", v1921.fpliD);
      } else if (_0x221b7e === "uni") {
        v1930 = fs2.readFileSync(vRequire19.resolve(__dirname, "..") + "/lib/webfunny.uni.min.js", "utf-8");
      } else if (_0x221b7e === "my") {
        v1930 = fs2.readFileSync(vRequire19.resolve(__dirname, "..") + "/lib/webfunny.my.min.js", "utf-8");
      } else if (_0x221b7e === "taro") {
        v1930 = fs2.readFileSync(vRequire19.resolve(__dirname, "..") + "/lib/webfunny.taro.min.js", v1921.fpliD);
      }
      let v1933 = [[new RegExp(v1921.Ohfyy, "g"), _0x5aca03], [new RegExp(v1921.llgHV, "g"), _0xe9d545], [new RegExp("&&&hasTrace&&&", "g"), hasTrace * 1], [new RegExp("webfunnyVersionFlag", "g"), vF252], [new RegExp("&&&www.webfunny.cn&&&", "g"), v1926], [new RegExp("&&&webfunny_assets_domain&&&", "g"), _0x5770a1], [new RegExp("&&&webfunny.cn&&&", "g"), _0x267d1c], [new RegExp("\"webfunny-pageview-switch\"", "g"), v1925.pv.s], [new RegExp("\"webfunny-jserror-switch\"", "g"), v1925.je.s], [new RegExp("\"webfunny-http-switch\"", "g"), v1925.hl.s], [new RegExp("\"webfunny-resource-switch\"", "g"), v1925.rl.s], [new RegExp("\"webfunny-behavior-switch\"", "g"), v1925.bl.s], [new RegExp("\"webfunny-location-switch\"", "g"), v1925.lc.s], [new RegExp("\"webfunny-white-screen-switch\"", "g"), JSON.stringify(v1925.whiteS)]];
      v1927 = encodeURIComponent(C28.monitorCodeReplace(v1930.toString(), v1933));
      v1924.monitorCode = v1927;
      v1928 = encodeURIComponent(C28.monitorCodeReplace(v1931.toString(), v1933));
      v1924.monitorFetchCode = v1928;
      v1929 = encodeURIComponent(C28.monitorCodeReplace(v1932.toString(), v1933));
      v1924.monitorCodeForIe = v1929;
      const v1934 = fs2.readFileSync(vRequire19.resolve(__dirname, "..") + "/lib/insertCode.js", "utf-8");
      v1924.fetchCode = encodeURIComponent(v1934.toString().replace(new RegExp(v1921.Ohfyy, "g"), _0x5aca03).replace(new RegExp("monitorJsPath", "g"), v1921.AyEbN("//", _0x17a682) + "/webfunny/w.js"));
    }
    v1924.saveDays = accountInfo.saveDays;
    p2000.response.status = 200;
    p2000.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1924);
  }
  static async ["getProjectSimpleDetail"](p2009) {
    const v1935 = vRequire7.parseQs(p2009.request.url);
    const {
      webMonitorId: _0x4b1d83
    } = v1935;
    const v1936 = await ProjectModel.getProjectSimpleDetail(_0x4b1d83);
    p2009.response.status = 200;
    p2009.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1936);
  }
  static async updateStartList(p2010) {
    const v1937 = {
      teodQ: "startList",
      Ftabl: function (p2011, p2012) {
        return p2011 ^ p2012;
      },
      IGYzF: "查询信息列表成功！"
    };
    let v1938 = p2010.request.body;
    const v1939 = JSON.parse(v1938);
    const {
      webMonitorId: _0x546c71,
      startList: _0x574983
    } = param;
    let v1940 = await ProjectModel.updateProjectForWebMonitorId(_0x546c71, {
      startList: _0x574983
    });
    global.monitorInfo[_0x546c71 + v1937.teodQ] = _0x574983;
    p2010.response.status = v1937.Ftabl(285039, 285095);
    p2010.body = vRequire14.SUCCESS_200(v1937.IGYzF, v1940);
  }
  static async ["getAllProjectList"](p2013) {
    let v1941 = p2013.request.body;
    const v1942 = vRequire7.parseQs(p2013.request.url);
    if (v1941) {
      const v1943 = await ProjectModel.getAllProjectList(v1942);
      p2013.response.status = 200;
      p2013.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1943);
    } else {
      p2013.response.status = 412;
      p2013.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
  static async getAllProjectWithCompanyId(p2014) {
    const v1944 = {
      wDTnR: "查询信息列表成功！"
    };
    let v1945 = p2014.request.body;
    const {
      companyId = "1"
    } = vRequire7.parseQs(p2014.request.url);
    if (v1945) {
      const v1946 = await ProjectModel.getAllProjectListForCompany(companyId);
      p2014.response.status = 200;
      p2014.body = vRequire14.SUCCESS_200(v1944.wDTnR, v1946);
    } else {
      p2014.response.status = 412;
      p2014.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
  static async getAllProjectListByCompanyId(p2015) {
    const v1947 = {
      oWiyV: "healthScore",
      NHUdB: function (p2016, p2017) {
        return p2016 ^ p2017;
      },
      sPPiK: function (p2018, p2019) {
        return p2018 ^ p2019;
      },
      WOaHN: function (p2020, p2021) {
        return p2020 < p2021;
      }
    };
    const v1948 = vRequire7.parseQs(p2015.request.url);
    const {
      companyId = "1",
      orderBy = v1947.oWiyV,
      orderByType = "desc",
      page = v1947.NHUdB(279689, 279688),
      pageSize = v1947.sPPiK(933364, 933374)
    } = v1948;
    const v1949 = await ProjectModel.getProjectCountByCompanyId(companyId);
    const v1950 = await ProjectModel.getAllProjectListByCompanyId(companyId, orderBy, orderByType, page, pageSize);
    const v1951 = "'" + UPLOAD_TYPE.ON_ERROR + "','" + UPLOAD_TYPE.CONSOLE_ERROR + "','" + UPLOAD_TYPE.HTTP_ERROR + "','" + UPLOAD_TYPE.RESOURCE_ERROR + "'";
    for (let v1952 = 0; v1947.WOaHN(v1952, v1950.length); v1952++) {
      const v1953 = v1950[v1952];
      const {
        webMonitorId: _0x3a112c
      } = v1953;
      const v1954 = await InfoCountByDayModel.getInfoCountByUploadTypes(vRequire7.addDays(0), _0x3a112c, v1951);
      if (v1954) {
        v1954.forEach(p2022 => {
          v1953[p2022.uploadType] = p2022.dayCount;
        });
      }
    }
    const v1955 = v1949 && v1949.length ? v1949[0].count : 0;
    const v1956 = v1950 || [];
    p2015.response.status = 200;
    p2015.body = vRequire14.SUCCESS_200("查询信息列表成功！", {
      total: v1955,
      list: v1956
    });
  }
  static async ["getAllProjectListWithAlarm"]() {
    return ProjectModel.getAllProjectListWithAlarm();
  }
  static async ["getProjectDetailList"](p2023) {
    const v1957 = vRequire7.parseQs(p2023.request.url);
    const v1958 = await ProjectModel.getProjectDetailList(v1957);
    p2023.response.status = 200;
    p2023.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1958);
  }
  static async projectSimpleListByWebmonitorIds(p2024) {
    let v1959 = {};
    if (typeof p2024.request.body === "string") {
      v1959 = JSON.parse(p2024.request.body);
    } else {
      v1959 = p2024.request.body;
    }
    const v1960 = await ProjectModel.projectSimpleListByWebmonitorIds(v1959);
    p2024.response.status = 200;
    p2024.body = vRequire14.SUCCESS_200("success！", v1960);
  }
  static async getProjectInfoInRealTime(p2025) {
    const v1961 = {
      RysqM: function (p2026, p2027) {
        return p2026 ^ p2027;
      },
      Dlbjj: function (p2028, p2029) {
        return p2028 ^ p2029;
      },
      vaPmJ: function (p2030, p2031) {
        return p2030 < p2031;
      },
      vyXDX: function (p2032, p2033) {
        return p2032 ^ p2033;
      },
      PLZjw: "查询信息列表成功！"
    };
    const v1962 = vRequire7.parseQs(p2025.request.url);
    const {
      webMonitorId: _0x2155f8
    } = v1962;
    const v1963 = await CustomerPVModel.getUVCountForDay(_0x2155f8, v1961.RysqM(206243, 206243), UPLOAD_TYPE.UV_COUNT_HOUR);
    const v1964 = await CustomerPVModel.getNewCountForDay(_0x2155f8, v1961.Dlbjj(688574, 688574), UPLOAD_TYPE.NEW_COUNT_HOUR);
    const v1965 = v1964[0].count;
    const v1966 = v1961.vaPmJ(v1963[0].count, v1965) ? v1965 : v1963[0].count;
    p2025.response.status = v1961.vyXDX(199582, 199510);
    p2025.body = vRequire14.SUCCESS_200(v1961.PLZjw, {
      uv: v1966,
      newCus: v1965
    });
  }
  static async getProjectInfoListInRealTime(p2034) {
    const v1967 = {
      zSBIe: function (p2035, p2036) {
        return p2035 + p2036;
      },
      mTgTc: function (p2037, p2038) {
        return p2037 !== p2038;
      },
      EdiLB: function (p2039, p2040) {
        return p2039 ^ p2040;
      },
      ZYSpV: function (p2041, p2042) {
        return p2041 === p2042;
      },
      jJAYI: function (p2043, p2044) {
        return p2043 !== p2044;
      },
      wQECq: "post",
      loEVs: function (p2045, p2046) {
        return p2045 ^ p2046;
      },
      PwHfq: function (p2047, p2048) {
        return p2047 < p2048;
      },
      WKeEw: function (p2049, p2050) {
        return p2049 ^ p2050;
      }
    };
    let v1968 = JSON.parse(p2034.request.body);
    const {
      sortType = "desc",
      sortKey = "uvCount",
      teamId: _0x3422d2,
      appType: _0x1b7a36,
      appStatus: _0x6cf5f3,
      searchName: _0x43a06f,
      env: _0x2313f3
    } = v1968;
    const {
      userId: _0x2752fe,
      userType: _0x44602f,
      companyId: _0x394b99
    } = p2034.user;
    const v1969 = await ProjectModel.getProjectDetailListBySearch({
      companyId: _0x394b99,
      userId: _0x2752fe,
      appType: _0x1b7a36,
      appStatus: _0x6cf5f3,
      searchName: _0x43a06f,
      env: _0x2313f3
    });
    let v1970 = [];
    v1969.forEach(p2051 => {
      v1970.push(p2051.webMonitorId);
    });
    const v1971 = [];
    let vV1970 = v1970;
    if (_0x44602f !== "superAdmin" && _0x44602f !== "admin") {
      const v1972 = {
        userId: _0x2752fe,
        userType: _0x44602f,
        companyId: _0x394b99
      };
      if (_0x3422d2 !== "all") {
        v1972.teamId = _0x3422d2;
      }
      const v1973 = await vRequire7.requestForTwoProtocol("post", LOCAL_SERVER + "/wfCenter/getTeamListWithoutToken", v1972);
      let v1974 = v1973.data;
      let v1975 = "";
      v1974.forEach(p2052 => {
        v1975 += "," + p2052.webMonitorIds;
      });
      vV1970 = v1975.split(",");
    } else {
      let v1976 = [];
      const v1977 = {
        userId: _0x2752fe,
        userType: _0x44602f,
        companyId: _0x394b99
      };
      if (v1967.jJAYI(_0x3422d2, "all")) {
        v1977.teamId = _0x3422d2;
      }
      const v1978 = await vRequire7.requestForTwoProtocol(v1967.wQECq, LOCAL_SERVER + "/wfCenter/getTeamListWithoutToken", v1977).catch(p2053 => {
        vRequire13.printError("getTeamListWithoutToken报错", p2053);
      });
      v1976 = v1978.data;
      let v1979 = "";
      v1976.forEach(p2054 => {
        v1979 += v1967.zSBIe(",", p2054.webMonitorIds);
      });
      vV1970 = v1979.split(",");
    }
    let v1980 = [];
    vV1970.forEach(p2055 => {
      const v1981 = v1970.indexOf(p2055);
      if (v1967.mTgTc(v1981, -v1967.EdiLB(181291, 181290))) {
        v1980.push(v1969[v1981]);
      }
    });
    const v1982 = await ProjectModel.getProjectListByViewer(_0x2752fe).catch(p2056 => {
      vRequire13.error(p2034, p2056);
    });
    v1982.forEach(p2057 => {
      if (v1967.ZYSpV(vV1970.indexOf(p2057.webMonitorId), -1)) {
        v1980.push(p2057);
      }
    });
    for (let v1983 = v1967.loEVs(424363, 424363); v1967.PwHfq(v1983, v1980.length); v1983++) {
      let v1984 = v1980[v1983].webMonitorId;
      if (v1984) {
        v1971.push({
          webMonitorId: v1984,
          projectName: v1980[v1983].projectName,
          projectType: v1980[v1983].projectType,
          appStatus: v1980[v1983].recording,
          aliveCount: v1980[v1983].aliveCount,
          healthScore: v1980[v1983].healthScore,
          perfScore: v1980[v1983].perfScore,
          uvCount: v1980[v1983].uvCountForDay
        });
      }
    }
    switch (sortKey) {
      case "uvCount":
      case "aliveCount":
        v1971.sort((p2058, p2059) => p2059[sortKey] - p2058[sortKey]);
        break;
      case "healthScore":
      case "perfScore":
        v1971.sort((p2060, p2061) => p2060[sortKey] - p2061[sortKey]);
        break;
      default:
        break;
    }
    p2034.response.status = v1967.WKeEw(520883, 520827);
    p2034.body = vRequire14.SUCCESS_200("查询信息列表成功！", v1971);
    C32.calculateAliveDateByDay(v1980);
  }
  static async ["detail"](p2062) {
    const v1985 = {
      xlYfe: "信息ID必须传"
    };
    let v1986 = p2062.params.id;
    if (v1986) {
      let v1987 = await ProjectModel.getProjectDetail(v1986);
      p2062.response.status = 200;
      p2062.body = vRequire14.SUCCESS_200("查询成功！", v1987);
    } else {
      p2062.response.status = 412;
      p2062.body = vRequire14.ERROR_412(v1985.xlYfe);
    }
  }
  static async delete(p2063) {
    const v1988 = {
      DGjCh: function (p2064, p2065) {
        return p2064 ^ p2065;
      },
      AQmYW: "信息ID必须传！"
    };
    const v1989 = JSON.parse(p2063.request.body);
    const {
      id: _0x2f84ec,
      webMonitorId: _0x13ce0c
    } = v1989;
    if (_0x13ce0c) {
      await ProjectModel.deleteProjectByWebmonitorId(_0x13ce0c);
      const v1990 = await CommonModel.getAllTableList(accountInfo.mysqlConfig.write.dataBaseName, _0x13ce0c);
      let v1991 = "";
      const v1992 = [];
      v1990.forEach(p2066 => {
        v1992.push(p2066.tableName);
      });
      v1992.forEach(async (p2067, p2068) => {
        console.warn("删除日志表：" + p2067);
        CommonModel.deleteTableByName(p2067);
      });
      p2063.response.status = 200;
      p2063.body = vRequire14.SUCCESS_200("删除信息成功！");
    } else {
      p2063.response.status = v1988.DGjCh(250016, 250172);
      p2063.body = vRequire14.ERROR_412(v1988.AQmYW);
    }
  }
  static async forbiddenProject(p2069) {
    const v1993 = {
      fGPYp: function (p2070, p2071) {
        return p2070 ^ p2071;
      }
    };
    const v1994 = JSON.parse(p2069.request.body);
    const {
      id: _0x2874d5
    } = v1994;
    const v1995 = _0x2874d5.split("-")[1];
    if (v1995) {
      await ProjectModel.updateProject(v1995, {
        delStatus: 1,
        forbiddenTime: new Date().getTime()
      });
      p2069.response.status = v1993.fGPYp(173825, 174025);
      p2069.body = vRequire14.SUCCESS_200("删除信息成功！");
    } else {
      p2069.response.status = v1993.fGPYp(991511, 991371);
      p2069.body = vRequire14.ERROR_412("信息ID必须传！");
    }
  }
  static async update(p2072) {
    let v1996 = p2072.request.body;
    let v1997 = p2072.params.id;
    if (v1996) {
      await ProjectModel.updateProject(v1997, v1996);
      let v1998 = await ProjectModel.getProjectDetail(v1997);
      p2072.response.status = 200;
      p2072.body = vRequire14.SUCCESS_200("更新信息成功！", v1998);
    } else {
      p2072.response.status = 412;
      p2072.body = vRequire14.ERROR_412("更新信息失败！");
    }
  }
  static ["monitorCodeReplace"](p2073, p2074) {
    let vP2073 = p2073;
    p2074.forEach(p2075 => {
      let v1999 = p2075[0];
      let v2000 = p2075[1];
      vP2073 = vP2073.replace(v1999, v2000);
    });
    return vP2073;
  }
  static async createNewProjectHandle(p2076, p2077, p2078) {
    const v2001 = {
      iPgxF: "创建项目报错",
      snFmP: function (p2079, p2080) {
        return p2079 === p2080;
      },
      RpZPC: function (p2081, p2082) {
        return p2081 ^ p2082;
      },
      MlDXB: "webfunny.fetch.min.js",
      YEYAv: "uni",
      cHgRG: "&&&hasTrace&&&",
      LfJzs: "&&&www.webfunny.cn&&&",
      kinfp: "true",
      ykoTK: "\"webfunny-resource-switch\"",
      uUgze: "\"webfunny-behavior-switch\"",
      WVFzI: function (p2083, p2084) {
        return p2083(p2084);
      }
    };
    const {
      webMonitorId: _0x187570,
      projectName: _0x25c11f,
      hasTrace = 0
    } = p2076;
    const {
      uploadServerDomain: _0x495255,
      localServerDomain: _0x8c9e81,
      mainDomain: _0x184e5c,
      localAssetsDomain: _0x41c1f0
    } = accountInfo;
    const v2002 = _0x495255 ? _0x495255 : _0x8c9e81;
    let v2003 = "";
    let v2004 = "";
    let v2005 = "";
    let v2006 = "";
    if (v2001.snFmP(p2076.projectType, "h5")) {
      v2005 = "webfunny.min.js";
      v2006 = v2001.MlDXB;
    } else if (v2001.snFmP(p2076.projectType, "mp")) {
      v2005 = "webfunny.mp.min.js";
    } else if (p2076.projectType === v2001.YEYAv) {
      v2005 = "webfunny.uni.min.js";
    } else if (p2076.projectType === "my") {
      v2005 = "webfunny.my.min.js";
    } else if (p2076.projectType === "taro") {
      v2005 = "webfunny.taro.min.js";
    }
    const v2007 = {
      s: false,
      sureW: 10,
      possW: 20,
      scale: 0.3
    };
    let v2008 = [[new RegExp("jeffery_webmonitor", "g"), _0x187570], [new RegExp("&&&webmonitor_name&&&", "g"), _0x25c11f], [new RegExp(v2001.cHgRG, "g"), hasTrace * 1], [new RegExp("webfunnyVersionFlag", "g"), vF252], [new RegExp(v2001.LfJzs, "g"), v2002], [new RegExp("&&&webfunny_assets_domain&&&", "g"), _0x41c1f0], [new RegExp("&&&webfunny.cn&&&", "g"), _0x184e5c], [new RegExp("\"webfunny-pageview-switch\"", "g"), v2001.kinfp], [new RegExp("\"webfunny-jserror-switch\"", "g"), v2001.kinfp], [new RegExp("\"webfunny-http-switch\"", "g"), v2001.kinfp], [new RegExp(v2001.ykoTK, "g"), "true"], [new RegExp(v2001.uUgze, "g"), "true"], [new RegExp("\"webfunny-location-switch\"", "g"), "true"], [new RegExp("\"webfunny-white-screen-switch\"", "g"), JSON.stringify(v2007)]];
    v2003 = v2001.WVFzI(encodeURIComponent, C28.monitorCodeReplace(v2005.toString(), v2008));
    p2076.monitorCode = v2003;
    v2004 = encodeURIComponent(C28.monitorCodeReplace(v2006.toString(), v2008));
    p2076.monitorFetchCode = v2004;
    p2076.fetchCode = "insertCode.js";
    p2076.userId = p2077;
    p2076.userTag = "";
    p2076.recording = "1";
    p2076.delStatus = 0;
    p2076.pageAggregation = 1;
    p2076.httpAggregation = v2001.RpZPC(365552, 365553);
    await ProjectModel.createProject(p2076).catch(p2085 => {
      vRequire13.printError(v2001.iPgxF, p2085);
    });
    C.createTableByWebMonitorId(_0x187570, 0);
    setTimeout(() => {
      const v2009 = v2001.snFmP(global.monitorInfo.purchaseCodeType, 0) || global.monitorInfo.purchaseCodeType === 71 ? v2001.RpZPC(518976, 518991) : accountInfo.saveDays;
      if (v2009 * 1 > 0) {
        CommonTableModel.createTTLForCreatedAt(_0x187570, v2009);
      }
    }, 30000);
  }
  static async createNewProjectForApi(p2086) {
    const v2010 = {
      RcizQ: function (p2087, p2088) {
        return p2087 ^ p2088;
      },
      uIyKf: "授权码已过期，无法再继续创建。",
      bvmIg: function (p2089, p2090) {
        return p2089 > p2090;
      },
      kxoue: function (p2091, p2092) {
        return p2091 ^ p2092;
      },
      hnEdk: function (p2093, p2094) {
        return p2093 < p2094;
      },
      zprwm: function (p2095, p2096) {
        return p2095 + p2096;
      },
      HbJUp: function (p2097, p2098) {
        return p2097(p2098);
      },
      CODjA: function (p2099, p2100) {
        return p2099 ^ p2100;
      },
      kHyXk: function (p2101, p2102) {
        return p2101 ^ p2102;
      },
      ttnEH: function (p2103, p2104) {
        return p2103 ^ p2104;
      },
      gUaPK: "项目创建成功",
      HEMcX: function (p2105, p2106) {
        return p2105 ^ p2106;
      }
    };
    const {
      chooseEnvs: _0x29abfd,
      userId: _0x6f463a,
      projectName: _0x2b8ff9,
      webMonitorId: _0x477eb8
    } = p2086.request.body;
    const v2011 = accountInfo.localAssetsDomain;
    const v2012 = "//" + v2011 + "/webfunny/w.js";
    if (accountInfo.isCloud === true) {
      const v2013 = await vRequire7.postJson(LOCAL_SERVER + "/wfCenter/getProjectCountByCompanyId", {
        companyId: companyId
      }).catch(p2107 => {
        console.error("/wfCenter/getProjectCountByCompanyId error", p2107);
      });
      if (v2013) {
        const {
          totalProjectCount: _0x27f299,
          productInfo: _0x3d9e4b
        } = v2013.data;
        if (_0x27f299 + _0x29abfd.length > _0x3d9e4b.projectCount) {
          p2086.response.status = 200;
          p2086.body = vRequire14.SUCCESS_200("您好，您的项目余额不足（" + (_0x3d9e4b.projectCount - _0x27f299) + "个），无法再继续创建。", v2010.RcizQ(499114, 499115));
          return;
        }
      }
    }
    const v2014 = await ProjectModel.getAllProjectList();
    const v2015 = v2014.length;
    if (global.monitorInfo.purchaseCodeValid !== v46 && v2014.length > 0) {
      p2086.response.status = 200;
      p2086.body = vRequire14.SUCCESS_200(v2010.uIyKf, 1);
      return;
    }
    const v2016 = global.monitorInfo.purchaseCodeProjectCount || 3;
    if (v2010.bvmIg(v2015 + _0x29abfd.length, v2016)) {
      p2086.response.status = v2010.kxoue(629023, 629207);
      p2086.body = vRequire14.SUCCESS_200("您好，您的项目个数即将超过上限（" + global.monitorInfo.purchaseCodeProjectCount + "个），无法再继续创建。", 1);
      return;
    }
    let v2017 = false;
    for (let v2018 = 0; v2010.hnEdk(v2018, _0x29abfd.length); v2018++) {
      const v2019 = _0x29abfd[v2018];
      const v2020 = v2019[0].toUpperCase();
      const v2021 = v2019.substring(1, v2019.length);
      const v2022 = v2010.zprwm(v2020, v2021);
      const v2023 = v2022 + "-" + _0x2b8ff9;
      const v2024 = _0x477eb8 + "_" + v2019;
      let v2025 = await ProjectModel.checkProjectName(v2023);
      const v2026 = v2010.HbJUp(parseInt, v2025[0].count);
      if (v2026 > 0) {
        v2017 = true;
        break;
      }
      const v2027 = Object.assign({}, {
        ...data
      }, {
        projectName: v2023,
        webMonitorId: v2024,
        env: v2019
      });
      setTimeout(() => {
        C28.createNewProjectHandle(v2027, _0x6f463a, v2012);
      }, v2018 * 10 * v2010.CODjA(672512, 671976));
    }
    if (v2017 === true) {
      p2086.response.status = v2010.kHyXk(326788, 326732);
      p2086.body = vRequire14.SUCCESS_200("项目名有重复，创建项目失败", 1);
    } else {
      p2086.response.status = v2010.ttnEH(257043, 257243);
      p2086.body = vRequire14.SUCCESS_200(v2010.gUaPK, v2010.HEMcX(786437, 786437));
    }
  }
  static async ["createNewProject"](p2108) {
    const v2028 = {
      grRbh: "/wfCenter/getProjectCountByCompanyId error",
      vrQmR: function (p2109, p2110) {
        return p2109 ^ p2110;
      },
      BqXIl: function (p2111, p2112) {
        return p2111 ^ p2112;
      },
      ElNQB: function (p2113, p2114) {
        return p2113 ^ p2114;
      },
      PLAwD: function (p2115, p2116) {
        return p2115 ^ p2116;
      },
      Urcsy: function (p2117, p2118) {
        return p2117 ^ p2118;
      },
      GBYbe: function (p2119, p2120) {
        return p2119 > p2120;
      },
      yjDeX: function (p2121, p2122) {
        return p2121 * p2122;
      },
      LmAVt: "项目创建成功",
      cKcoq: "创建信息失败，请求参数不能为空！"
    };
    const v2029 = JSON.parse(p2108.request.body);
    const {
      chooseEnvs: _0x543a5e
    } = v2029;
    const {
      userId: _0x39993e,
      companyId: _0x303aa5
    } = p2108.user;
    const v2030 = accountInfo.localAssetsDomain;
    const v2031 = "//" + v2030 + "/webfunny/w.js";
    if (accountInfo.isCloud === true) {
      const v2032 = await vRequire7.postJson(LOCAL_SERVER + "/wfCenter/getProjectCountByCompanyId", {
        companyId: _0x303aa5
      }).catch(p2123 => {
        console.error(v2028.grRbh, p2123);
      });
      if (v2032) {
        const {
          totalProjectCount: _0x1529aa,
          productInfo: _0x1d4569
        } = v2032.data;
        if (_0x1529aa >= _0x1d4569.projectCount) {
          p2108.response.status = v2028.vrQmR(861217, 861417);
          p2108.body = vRequire14.SUCCESS_200("您好，您的项目个数已达上限（" + _0x1d4569.projectCount + "个），无法再继续创建。", 1);
          return;
        }
      }
    }
    const v2033 = await ProjectModel.getAllProjectList();
    let v2034 = v2028.vrQmR(664139, 664139);
    let v2035 = 0;
    let v2036 = 0;
    v2033.forEach(p2124 => {
      if (p2124.projectType == "h5") {
        v2034++;
      } else if (p2124.projectType == "mp" || p2124.projectType == "uni") {
        v2035++;
      }
      v2036++;
    });
    if (global.monitorInfo.purchaseCodeValid !== v46 && v2033.length > v2028.vrQmR(671573, 671573)) {
      p2108.response.status = v2028.BqXIl(319306, 319362);
      p2108.body = vRequire14.SUCCESS_200("授权码已过期，无法再继续创建。", v2028.BqXIl(575914, 575915));
      return;
    }
    if (v2029) {
      const v2037 = global.monitorInfo.purchaseCodeProjectCount || v2028.ElNQB(119320, 119323);
      if (v2036 + _0x543a5e.length > v2037) {
        p2108.response.status = v2028.PLAwD(916224, 916424);
        p2108.body = vRequire14.SUCCESS_200("您好，您的项目个数已达上限（" + global.monitorInfo.purchaseCodeProjectCount + "个），无法再继续创建。", 1);
        return;
      }
      let v2038 = false;
      for (let v2039 = v2028.BqXIl(876259, 876259); v2039 < _0x543a5e.length; v2039++) {
        const v2040 = _0x543a5e[v2039];
        const v2041 = v2040[0].toUpperCase();
        const v2042 = v2040.substring(1, v2040.length);
        const v2043 = v2041 + v2042;
        const v2044 = v2043 + "-" + v2029.projectName;
        const v2045 = v2029.webMonitorId + "_" + v2040;
        let v2046 = await ProjectModel.checkProjectName(v2044);
        const v2047 = v2046 && v2046.length ? parseInt(v2046[v2028.Urcsy(922284, 922284)].count) : 0;
        if (v2028.GBYbe(v2047, 0)) {
          v2038 = true;
          break;
        }
        const v2048 = Object.assign({}, {
          ...v2029
        }, {
          projectName: v2044,
          webMonitorId: v2045,
          env: v2040,
          flowSwitch: 0
        });
        setTimeout(() => {
          C28.createNewProjectHandle(v2048, _0x39993e, v2031);
        }, v2028.yjDeX(v2039, 10) * 1000);
      }
      if (v2038 === true) {
        p2108.response.status = 200;
        p2108.body = vRequire14.SUCCESS_200("项目名有重复，创建项目失败", 1);
      } else {
        p2108.response.status = 200;
        p2108.body = vRequire14.SUCCESS_200(v2028.LmAVt, 0);
      }
    } else {
      p2108.response.status = 412;
      p2108.body = vRequire14.ERROR_412(v2028.cKcoq);
    }
  }
  static async createTTLForProjectId(p2125) {
    const v2049 = {
      purqN: function (p2126, p2127) {
        return p2126 ^ p2127;
      },
      NASHW: function (p2128, p2129) {
        return p2128 ^ p2129;
      }
    };
    let {
      webMonitorId: _0x4b1184
    } = JSON.parse(p2125.request.body);
    p2125.response.status = v2049.purqN(422307, 422251);
    p2125.body = vRequire14.SUCCESS_200("执行成功！", v2049.NASHW(560314, 560314));
  }
  static async ["updateMonitorCode"](p2130) {
    const v2050 = {
      lMqiV: function (p2131, p2132) {
        return p2131 ^ p2132;
      },
      MzZko: "\"webfunny-http-switch\"",
      SnlOZ: "\"webfunny-behavior-switch\"",
      GTqgo: "webfunny.fetch.min.js",
      QMNLY: function (p2133, p2134) {
        return p2133 === p2134;
      },
      irkup: function (p2135, p2136) {
        return p2135 === p2136;
      }
    };
    const v2051 = vRequire7.parseQs(p2130.request.url);
    const {
      webMonitorId: _0x4a006f,
      projectType: _0x13c096,
      uploadDomain: _0x3ab1d6,
      projectName: _0x72d47a,
      hasTrace = v2050.lMqiV(495927, 495927)
    } = v2051;
    const {
      uploadServerDomain: _0x2d15b1,
      localServerDomain: _0x7118c9,
      mainDomain: _0xf48102,
      localAssetsDomain: _0x11b9ae
    } = accountInfo;
    const v2052 = _0x2d15b1 ? _0x2d15b1 : _0x7118c9;
    const v2053 = _0x3ab1d6 ? _0x3ab1d6 : v2052;
    const v2054 = await ProjectModel.getProjectByWebMonitorId(_0x4a006f);
    const v2055 = v2054[0].recordConfig;
    let v2056 = null;
    if (v2055) {
      v2056 = JSON.parse(v2055);
    }
    const v2057 = JSON.parse(PROJECT_CONFIG).whiteS;
    let v2058 = v2056 ? [[new RegExp("\"webfunny-pageview-switch\"", "g"), v2056.pv.s.toString()], [new RegExp("\"webfunny-jserror-switch\"", "g"), v2056.je.s.toString()], [new RegExp(v2050.MzZko, "g"), v2056.hl.s.toString()], [new RegExp("\"webfunny-resource-switch\"", "g"), v2056.rl.s.toString()], [new RegExp(v2050.SnlOZ, "g"), v2056.bl.s.toString()], [new RegExp("\"webfunny-location-switch\"", "g"), v2056.lc ? v2056.lc.s.toString() : "true"], [new RegExp("\"webfunny-white-screen-switch\"", "g"), v2056.whiteS ? JSON.stringify(v2056.whiteS) : JSON.stringify(v2057)]] : [];
    let v2059 = "";
    let v2060 = "";
    if (_0x13c096 === "h5") {
      v2059 = "webfunny.min.js";
      v2060 = v2050.GTqgo;
    } else if (v2050.QMNLY(_0x13c096, "mp")) {
      v2059 = "webfunny.mp.min.js";
    } else if (_0x13c096 === "uni") {
      v2059 = "webfunny.uni.min.js";
    } else if (v2050.irkup(_0x13c096, "my")) {
      v2059 = "webfunny.my.min.js";
    } else if (_0x13c096 === "taro") {
      v2059 = "webfunny.taro.min.js";
    }
    let v2061 = [[new RegExp("jeffery_webmonitor", "g"), _0x4a006f], [new RegExp("&&&webmonitor_name&&&", "g"), _0x72d47a], [new RegExp("&&&hasTrace&&&", "g"), hasTrace * 1], [new RegExp("webfunnyVersionFlag", "g"), vF252], [new RegExp("&&&www.webfunny.cn&&&", "g"), v2053], [new RegExp("&&&webfunny_assets_domain&&&", "g"), _0x11b9ae], [new RegExp("&&&webfunny.cn&&&", "g"), _0xf48102], ...v2058];
    v2051.monitorCode = encodeURIComponent(C28.monitorCodeReplace(v2059.toString(), v2061));
    v2051.monitorFetchCode = encodeURIComponent(C28.monitorCodeReplace(v2060.toString(), v2061));
    v2051.uploadDomain = v2053;
    let v2062 = await ProjectModel.updateMonitorCodeByWebMonitorId(v2051);
    p2130.response.status = 200;
    p2130.body = vRequire14.SUCCESS_200("成功更新探针代码！", v2062);
  }
  static async checkProjectCount(p2137) {
    const v2063 = {
      rbtyp: function (p2138, p2139) {
        return p2138 ^ p2139;
      }
    };
    let v2064 = p2137.request.body;
    const v2065 = vRequire7.parseQs(p2137.request.url);
    if (v2064) {
      const v2066 = await ProjectModel.checkProjectCount(v2065);
      p2137.response.status = v2063.rbtyp(931814, 931630);
      p2137.body = vRequire14.SUCCESS_200("查询信息列表成功！", v2066);
    } else {
      p2137.response.status = v2063.rbtyp(792347, 792199);
      p2137.body = vRequire14.ERROR_412("查询信息列表失败！");
    }
  }
  static async ["getProjectCountByCompanyId"](p2140) {
    const v2067 = {
      PqxDx: "success"
    };
    let v2068 = p2140.request.body;
    const {
      companyId: _0x8ecff0
    } = v2068;
    let v2069 = 0;
    const v2070 = await ProjectModel.getProjectCountByCompanyId(_0x8ecff0);
    if (v2070 && v2070.length) {
      v2069 = v2070[0].count;
    }
    p2140.response.status = 200;
    p2140.body = vRequire14.SUCCESS_200(v2067.PqxDx, v2069);
  }
  static async getUserTags(p2141) {
    const v2071 = {
      gQsFR: function (p2142, p2143) {
        return p2142 ^ p2143;
      }
    };
    const v2072 = JSON.parse(p2141.request.body);
    const {
      webMonitorId: _0xc710d6
    } = v2072;
    const v2073 = await ProjectModel.getUserTags(_0xc710d6);
    const v2074 = v2073.length ? v2073[0] : "";
    p2141.response.status = v2071.gQsFR(466214, 466414);
    p2141.body = vRequire14.SUCCESS_200("success", v2074);
  }
  static async saveUserTags(p2144) {
    const v2075 = {
      GMtpl: "success"
    };
    const v2076 = JSON.parse(p2144.request.body);
    const {
      webMonitorId: _0x2d5633,
      userTag: _0x1432f1,
      userIdType: _0x4a73b7,
      hasTrace: _0x171548
    } = v2076;
    let v2077 = await ProjectModel.updateProjectByField({
      webMonitorId: _0x2d5633,
      userTag: _0x1432f1,
      userIdType: _0x4a73b7,
      hasTrace: _0x171548
    });
    p2144.response.status = 200;
    p2144.body = vRequire14.SUCCESS_200(v2075.GMtpl, v2077);
  }
  static async getProjectConfig(p2145) {
    const v2078 = {
      dUFMN: function (p2146, p2147) {
        return p2146 ^ p2147;
      },
      ogmnE: function (p2148, p2149) {
        return p2148 ^ p2149;
      },
      mADQm: "success"
    };
    const v2079 = JSON.parse(p2145.request.body);
    const {
      webMonitorId: _0x31433f
    } = v2079;
    const v2080 = await ProjectModel.getProjectConfig(_0x31433f);
    const v2081 = v2080.length ? v2080[v2078.dUFMN(138117, 138117)] : "";
    p2145.response.status = v2078.ogmnE(277085, 277141);
    p2145.body = vRequire14.SUCCESS_200(v2078.mADQm, v2081);
  }
  static async getProjectHealthByScore(p2150) {
    const v2082 = {
      OjhwL: function (p2151, p2152) {
        return p2151 ^ p2152;
      },
      biTYm: function (p2153, p2154) {
        return p2153 ^ p2154;
      },
      LTXTc: function (p2155, p2156) {
        return p2155 ^ p2156;
      },
      MlcOk: "success"
    };
    const v2083 = await ProjectModel.getProjectHealthByScore(v2082.OjhwL(215368, 215320), 100);
    const v2084 = await ProjectModel.getProjectHealthByScore(60, 79);
    const v2085 = await ProjectModel.getProjectHealthByScore(0, 59);
    const v2086 = v2083 && v2083.length ? v2083[0].count : 0;
    const v2087 = v2084 && v2084.length ? v2084[0].count : v2082.biTYm(176308, 176308);
    const v2088 = v2085 && v2085.length ? v2085[0].count : 0;
    p2150.response.status = v2082.LTXTc(229976, 230032);
    p2150.body = vRequire14.SUCCESS_200(v2082.MlcOk, {
      bestCount: v2086,
      goodCount: v2087,
      badCount: v2088
    });
  }
  static async saveProjectConfig(p2157) {
    const v2089 = {
      oUipz: function (p2158, p2159) {
        return p2158 ^ p2159;
      },
      tzWVN: "success"
    };
    const v2090 = JSON.parse(p2157.request.body);
    const {
      webMonitorId: _0x461ded,
      pageAggregation: _0x11b08b,
      httpAggregation: _0x1fed97,
      samplingCircle: _0x12203b,
      samplingRate: _0x162b8d
    } = v2090;
    let v2091 = await ProjectModel.updateProjectByField({
      webMonitorId: _0x461ded,
      pageAggregation: _0x11b08b,
      httpAggregation: _0x1fed97,
      samplingCircle: _0x12203b,
      samplingRate: _0x162b8d
    });
    C13.setProjectConfigList();
    p2157.response.status = v2089.oUipz(897864, 897920);
    p2157.body = vRequire14.SUCCESS_200(v2089.tzWVN, v2091);
  }
  static async saveProjectSdkConfig(p2160) {
    const v2092 = {
      bvWei: function (p2161, p2162) {
        return p2161 ^ p2162;
      }
    };
    const v2093 = JSON.parse(p2160.request.body);
    const {
      webMonitorId: _0x5f5c1e,
      recordConfig: _0x30690f
    } = v2093;
    let v2094 = await ProjectModel.updateProjectByField({
      webMonitorId: _0x5f5c1e,
      recordConfig: _0x30690f
    });
    C13.setProjectConfigList();
    p2160.response.status = v2092.bvWei(520053, 520125);
    p2160.body = vRequire14.SUCCESS_200("success", v2094);
  }
  static async getFlowSwitch(p2163) {
    const v2095 = {
      dLOSq: "success"
    };
    const v2096 = JSON.parse(p2163.request.body);
    const {
      webMonitorIds: _0x159d24
    } = v2096;
    let v2097 = "";
    _0x159d24.forEach(p2164 => {
      v2097 += "'" + p2164 + "',";
    });
    v2097 = v2097.substring(0, v2097.length - 1);
    const v2098 = await ProjectModel.getFlowSwitchWebMonitorIds(v2097);
    p2163.response.status = 200;
    p2163.body = vRequire14.SUCCESS_200(v2095.dLOSq, v2098);
  }
  static async ["openFlowSwitch"](p2165) {
    const v2099 = {
      DHpcZ: "success"
    };
    const v2100 = JSON.parse(p2165.request.body);
    const {
      webMonitorId: _0x15715d
    } = v2100;
    await ProjectModel.updateProjectByField({
      webMonitorId: _0x15715d,
      flowSwitch: 0
    });
    p2165.response.status = 200;
    p2165.body = vRequire14.SUCCESS_200(v2099.DHpcZ, 0);
  }
  static async closeFlowSwitch(p2166) {
    const v2101 = JSON.parse(p2166.request.body);
    const {
      webMonitorId: _0xc26e5
    } = v2101;
    await ProjectModel.updateProjectByField({
      webMonitorId: _0xc26e5,
      flowSwitch: 1
    });
    p2166.response.status = 200;
    p2166.body = vRequire14.SUCCESS_200("success", 0);
  }
  static async openProject(p2167) {
    const v2102 = JSON.parse(p2167.request.body);
    const {
      webMonitorId: _0x323adb
    } = v2102;
    const v2103 = await ProjectModel.getProjectDetailForWebMonitorId(_0x323adb);
    if (!v2103.recordConfig) {
      return;
    }
    const v2104 = JSON.parse(v2103.recordConfig);
    v2104.s = true;
    const v2105 = JSON.stringify(v2104);
    const v2106 = "1";
    const v2107 = 0;
    let v2108 = await ProjectModel.updateProjectByField({
      webMonitorId: _0x323adb,
      recording: v2106,
      delStatus: v2107,
      recordConfig: v2105
    });
    C13.setProjectConfigList();
    p2167.response.status = 200;
    p2167.body = vRequire14.SUCCESS_200("success", v2108);
  }
  static async closeProject(p2168) {
    const v2109 = {
      ycphb: function (p2169, p2170) {
        return p2169 ^ p2170;
      },
      bwdWp: "监控配置尚未初始化，无法关闭。请先进入项目设置页执行一次保存操作。",
      GKGlc: function (p2171, p2172) {
        return p2171 ^ p2172;
      },
      wbLVr: "success"
    };
    const v2110 = JSON.parse(p2168.request.body);
    const {
      webMonitorId: _0x5e82b1
    } = v2110;
    const v2111 = await ProjectModel.getProjectDetailForWebMonitorId(_0x5e82b1);
    if (!v2111.recordConfig) {
      p2168.response.status = v2109.ycphb(218472, 218268);
      p2168.body = vRequire14.ERROR_500(v2109.bwdWp, "");
      return;
    }
    const v2112 = JSON.parse(v2111.recordConfig);
    v2112.s = false;
    const v2113 = JSON.stringify(v2112);
    const v2114 = "2";
    const v2115 = 2;
    let v2116 = await ProjectModel.updateProjectByField({
      webMonitorId: _0x5e82b1,
      recording: v2114,
      delStatus: v2115,
      recordConfig: v2113
    });
    C13.setProjectConfigList();
    p2168.response.status = v2109.GKGlc(876514, 876330);
    p2168.body = vRequire14.SUCCESS_200(v2109.wbLVr, v2116);
  }
  static async ["cacheWebMonitorId"]() {
    const v2117 = await ProjectModel.getAllProjectList();
    const v2118 = [];
    v2117.map(p2173 => {
      const {
        webMonitorId: _0x421a90,
        recordConfig: _0x2fa1b8
      } = p2173;
      if (!_0x2fa1b8) {
        v2118.push(_0x421a90);
      } else {
        const v2119 = JSON.parse(_0x2fa1b8);
        if (v2119.s === true) {
          v2118.push(_0x421a90);
        }
      }
    });
    global.monitorInfo.cacheWebMonitorIdList = v2118;
  }
  static async saveAlarmInfo(p2174) {
    const v2120 = JSON.parse(p2174.request.body);
    const {
      webMonitorId: _0x12992c,
      alarmMembers: _0x51e093,
      alarmRuleId: _0x1de288
    } = v2120;
    let v2121 = await ProjectModel.updateProjectByField({
      webMonitorId: _0x12992c,
      alarmMembers: JSON.stringify(_0x51e093),
      alarmRuleId: _0x1de288
    });
    p2174.response.status = 200;
    p2174.body = vRequire14.SUCCESS_200("success", v2121);
  }
  static async ["setWebHook"](p2175) {
    const v2122 = JSON.parse(p2175.request.body);
    const {
      webMonitorId: _0x5e5caf,
      chooseHook: _0x77d31c
    } = v2122;
    let v2123 = await ProjectModel.updateProjectByField({
      webMonitorId: _0x5e5caf,
      chooseHook: JSON.stringify(_0x77d31c)
    });
    p2175.response.status = 200;
    p2175.body = vRequire14.SUCCESS_200("success", v2123);
  }
  static async addViewers(p2176) {
    const {
      webMonitorId: _0x1dc812,
      viewers: _0x3e0ecf
    } = JSON.parse(p2176.request.body);
    let v2124 = await ProjectModel.updateProjectByField({
      webMonitorId: _0x1dc812,
      viewers: _0x3e0ecf
    });
    p2176.response.status = 200;
    p2176.body = vRequire14.SUCCESS_200("success", v2124);
  }
  static async saveNewProjectName(p2177) {
    const {
      webMonitorId: _0x28365f,
      projectName: _0x4bc8eb
    } = JSON.parse(p2177.request.body);
    let v2125 = await ProjectModel.updateProjectByField({
      webMonitorId: _0x28365f,
      projectName: _0x4bc8eb
    });
    p2177.response.status = 200;
    p2177.body = vRequire14.SUCCESS_200("success", v2125);
  }
  static async ["resetSaveDays"](p2178) {
    const v2126 = {
      HeZaZ: "/wfCenter/getProductInfoByCompanyId error",
      HKUBr: function (p2179, p2180) {
        return p2179 === p2180;
      },
      royav: function (p2181, p2182) {
        return p2181 ^ p2182;
      },
      sEvRf: function (p2183, p2184) {
        return p2183 ^ p2184;
      },
      ihWJg: "success"
    };
    const {
      webMonitorId: _0x2f9306,
      saveDays: _0x4db073
    } = JSON.parse(p2178.request.body);
    const {
      companyId: _0x560d77
    } = p2178.user;
    let v2127 = 7;
    if (accountInfo.isCloud === true) {
      const v2128 = await vRequire7.postJson(LOCAL_SERVER + "/wfCenter/getProductInfoByCompanyId", {
        companyId: _0x560d77
      }).catch(p2185 => {
        console.error(v2126.HeZaZ, p2185);
      });
      if (v2128) {
        const v2129 = v2128.data;
        v2127 = _0x4db073 > v2129.saveDays ? v2129.saveDays : _0x4db073;
      }
    } else {
      const {
        limitType: _0x4bee18,
        limitValue = 98765
      } = global.monitorInfo.machineCodeInfo || {};
      const v2130 = _0x4bee18 === "X" && v2126.HKUBr(limitValue, v2126.royav(972296, 972396));
      v2127 = v2130 ? 7 : _0x4db073;
    }
    CommonTableModel.createTTLForCreatedAt(_0x2f9306, v2127 * v2126.sEvRf(110476, 110477));
    p2178.response.status = v2126.sEvRf(429941, 430013);
    p2178.body = vRequire14.SUCCESS_200(v2126.ihWJg, 0);
  }
  static async getProjectBaseCountInfo(p2186) {
    const v2131 = {
      DZsAa: function (p2187, p2188) {
        return p2187 + p2188;
      },
      aHEPQ: "post",
      dqggb: function (p2189, p2190) {
        return p2189 == p2190;
      },
      FZkRV: function (p2191, p2192) {
        return p2191 ^ p2192;
      }
    };
    const {
      userId: _0x5c3536,
      userType: _0x5e5226,
      companyId = "1"
    } = p2186.user;
    let v2132 = {
      companyId: companyId
    };
    const v2133 = await vRequire7.requestForTwoProtocol(v2131.aHEPQ, LOCAL_SERVER + "/wfCenter/getTeamListWithoutToken", {
      userId: _0x5c3536,
      userType: _0x5e5226,
      companyId: companyId
    });
    let v2134 = v2133.data;
    let v2135 = "";
    v2134.forEach(p2193 => {
      v2135 += v2131.DZsAa(",", p2193.webMonitorIds);
    });
    const v2136 = v2135.split(",");
    let v2137 = "'webfunny'";
    v2136.forEach(p2194 => {
      v2137 += ",'" + p2194 + "'";
    });
    v2132.webMonitorIds = v2137;
    let v2138 = [];
    let v2139 = [];
    if (_0x5e5226 == "admin" || v2131.dqggb(_0x5e5226, "superAdmin")) {
      v2138 = await ProjectModel.getAllProjectListForCompany(companyId);
    } else {
      v2138 = await ProjectModel.getProjectList(v2132);
      v2139 = await ProjectModel.getProjectListByViewer(_0x5c3536);
    }
    v2138 = v2138.concat(v2139);
    const v2140 = {
      yesterday: [],
      today: []
    };
    for (let v2141 = v2131.FZkRV(431920, 431920); v2141 < v2138.length; v2141++) {
      const {
        webMonitorId: _0x2b11d7
      } = v2138[v2141];
      const v2142 = await InfoCountByDayModel.getInfoCountByDayName(vRequire7.addDays(0), _0x2b11d7, UPLOAD_TYPE.HEALTH_SCORE_DAY);
      const v2143 = await InfoCountByDayModel.getInfoCountByDayName(vRequire7.addDays(v2131.FZkRV(131399, 131399)), _0x2b11d7, UPLOAD_TYPE.PV_COUNT_DAY);
      const v2144 = await InfoCountByDayModel.getInfoCountByDayName(vRequire7.addDays(-1), _0x2b11d7, UPLOAD_TYPE.HEALTH_SCORE_DAY);
      const v2145 = await InfoCountByDayModel.getInfoCountByDayName(vRequire7.addDays(-1), _0x2b11d7, UPLOAD_TYPE.PV_COUNT_DAY);
      const v2146 = {
        webMonitorId: _0x2b11d7
      };
      v2146.healthScore = v2142.length ? v2142[0].dayCount : 100;
      v2146.pvCount = v2143.length ? v2143[v2131.FZkRV(416559, 416559)].dayCount : 0;
      const v2147 = {
        webMonitorId: _0x2b11d7
      };
      v2147.healthScore = v2144.length ? v2144[0].dayCount : 100;
      v2147.pvCount = v2145.length ? v2145[0].dayCount : 0;
      v2140.today.push(v2146);
      v2140.yesterday.push(v2147);
    }
    p2186.response.status = 200;
    p2186.body = vRequire14.SUCCESS_200("success", v2140);
  }
}
class C29 {
  static async getVideoLog(p2195) {
    const v2148 = vRequire7.parseQs(p2195.request.url);
    const {
      webMonitorId: _0x1123d1
    } = v2148;
    const v2149 = await VideoLogModel.createVideoLog(v2148);
    p2195.response.status = 200;
    p2195.body = vRequire14.SUCCESS_200("success", v2149);
  }
  static async getVideoLogList(p2196) {
    const v2150 = {
      pLIAJ: function (p2197, p2198) {
        return p2197 ^ p2198;
      }
    };
    const v2151 = vRequire7.parseQs(p2196.request.url);
    const {
      videoId: _0x4eb3b5,
      day: _0x3efa62,
      webMonitorId: _0x2d497e
    } = v2151;
    const v2152 = await VideoLogModel.getVideoLogList(_0x2d497e, _0x4eb3b5, _0x3efa62);
    p2196.response.status = v2150.pLIAJ(332661, 332733);
    p2196.body = vRequire14.SUCCESS_200("success", v2152);
  }
  static async getLatestVideoLog(p2199) {
    const v2153 = {
      YHdZy: function (p2200, p2201) {
        return p2200 > p2201;
      },
      YZFtT: function (p2202, p2203) {
        return p2202 ^ p2203;
      }
    };
    const v2154 = vRequire7.parseQs(p2199.request.url);
    const {
      videoId: _0x3e086d,
      webMonitorId: _0x123804
    } = v2154;
    const v2155 = await VideoLogModel.getLatestVideoLog(_0x123804, _0x3e086d);
    const v2156 = v2155 && v2153.YHdZy(v2155.length, 0) ? v2155[v2153.YZFtT(298573, 298573)] : {};
    p2199.response.status = 200;
    p2199.body = vRequire14.SUCCESS_200("success", v2156);
  }
}
class C30 {
  static async createNewMessage(p2204) {
    const v2157 = {
      AZtLr: function (p2205, p2206) {
        return p2205 ^ p2206;
      },
      UlGmg: "创建信息成功"
    };
    let v2158 = JSON.parse(p2204.request.body);
    const {
      id: _0x152b86,
      ruleName: _0x517248,
      loopTime: _0x795715,
      quietStartTime: _0x23112a,
      quietEndTime: _0x277ae8
    } = v2158;
    const v2159 = JSON.stringify(v2158.ruleList);
    const v2160 = {
      ruleName: _0x517248,
      loopTime: _0x795715,
      quietStartTime: _0x23112a,
      quietEndTime: _0x277ae8,
      ruleList: v2159
    };
    if (_0x517248) {
      if (_0x152b86) {
        v2160.id = _0x152b86;
        await MessageModel.updateMessage(_0x152b86, v2160);
      } else {
        await MessageModel.createMessage(v2160);
      }
      p2204.response.status = v2157.AZtLr(679202, 679402);
      p2204.body = vRequire14.SUCCESS_200(v2157.UlGmg, 0);
    } else {
      p2204.response.status = 412;
      p2204.body = vRequire14.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async ["getAllMessage"](p2207) {
    const v2161 = {
      bmMcA: function (p2208, p2209) {
        return p2208 ^ p2209;
      }
    };
    let v2162 = p2207.request.body;
    const v2163 = JSON.parse(v2162);
    let v2164 = await MessageModel.getAllMessage(v2163);
    p2207.response.status = v2161.bmMcA(561156, 561356);
    p2207.body = vRequire14.SUCCESS_200("查询信息列表成功！", v2164);
  }
  static async getMessageByType(p2210) {
    const v2165 = {
      LcUwx: function (p2211, p2212) {
        return p2211 ^ p2212;
      },
      cOvrE: function (p2213, p2214, p2215) {
        return p2213(p2214, p2215);
      },
      fjOKA: function (p2216, p2217) {
        return p2216 ^ p2217;
      },
      cTLff: function (p2218, p2219) {
        return p2218 ^ p2219;
      }
    };
    let v2166 = p2210.request.body;
    const v2167 = JSON.parse(v2166);
    const {
      userId: _0x5ddb9f
    } = p2210.user;
    v2167.userId = _0x5ddb9f;
    let v2168 = await MessageModel.getMessageByType(v2167);
    let v2169 = await MessageModel.getUnReadMessageCountByType(v2167);
    let v2170 = 0;
    let v2171 = v2165.LcUwx(532523, 532523);
    if (v2169) {
      v2169.forEach(p2220 => {
        if (p2220.isRead === v2165.LcUwx(801999, 801999)) {
          v2170 = v2165.cOvrE(parseInt, p2220.count, v2165.fjOKA(511297, 511307));
        }
        v2171 += parseInt(p2220.count, v2165.cTLff(856436, 856446));
      });
    }
    const v2172 = {
      messages: v2168,
      unReadCount: v2170,
      total: v2171
    };
    p2210.response.status = 200;
    p2210.body = vRequire14.SUCCESS_200("查询信息列表成功！", v2172);
  }
  static async ["readMessage"](p2221) {
    const v2173 = {
      uImvb: function (p2222, p2223) {
        return p2222 ^ p2223;
      },
      bSowB: function (p2224, p2225) {
        return p2224 ^ p2225;
      }
    };
    let v2174 = JSON.parse(p2221.request.body);
    const {
      messageId: _0x2b8da4
    } = v2174;
    const v2175 = MessageModel.getMessageDetail(_0x2b8da4);
    v2175.isRead = v2173.uImvb(733755, 733754);
    await MessageModel.updateMessage(_0x2b8da4, v2175);
    p2221.response.status = 200;
    p2221.body = vRequire14.SUCCESS_200("查询信息列表成功！", v2173.bSowB(203657, 203657));
  }
  static async readAll(p2226) {
    const v2176 = {
      ZJWfD: function (p2227, p2228) {
        return p2227 ^ p2228;
      }
    };
    let v2177 = JSON.parse(p2226.request.body);
    const {
      messageType: _0x455fd3
    } = v2177;
    const {
      userId: _0x4bebb2
    } = p2226.user;
    MessageModel.readAll(_0x4bebb2, _0x455fd3);
    p2226.response.status = v2176.ZJWfD(321561, 321745);
    p2226.body = vRequire14.SUCCESS_200("查询信息列表成功！", v2176.ZJWfD(254465, 254465));
  }
  static async detail(p2229) {
    return await MessageModel.getMessageDetail(p2229);
  }
  static async deleteMessage(p2230) {
    const v2178 = {
      dENaH: function (p2231, p2232) {
        return p2231 ^ p2232;
      },
      vVZhD: function (p2233, p2234) {
        return p2233 ^ p2234;
      }
    };
    let v2179 = JSON.parse(p2230.request.body);
    const {
      id: _0x1dc387
    } = v2179;
    const v2180 = await ProjectModel.getProjectByMessageId(_0x1dc387);
    if (v2180.length <= 0) {
      await MessageModel.deleteMessage(_0x1dc387);
      p2230.response.status = 200;
      p2230.body = vRequire14.SUCCESS_200("success", v2178.dENaH(652334, 652334));
    } else {
      p2230.response.status = v2178.dENaH(517355, 517155);
      p2230.body = vRequire14.SUCCESS_200("当前警报规则还有项目在使用，无法执行删除操作！", v2178.vVZhD(926901, 926900));
    }
  }
  static async saveLastVersionInfo() {
    const v2181 = {
      ONTRI: "http://www.webfunny.cn/config/lastVersionInfo"
    };
    await vRequire7.get(v2181.ONTRI, {}).then(async p2235 => {
      const v2182 = p2235.data;
      const {
        updateDate: _0x529c2f,
        version: _0x5304ae,
        updateContent: _0x74ce9a,
        upgradeGuide: _0x1de314,
        updateDatabase: _0x3c45fc
      } = v2182;
      const v2183 = new Date().Format("yyyy-MM-dd");
      if (_0x529c2f === v2183) {
        const v2184 = await UserModel.getAllUserInfoForSimple();
        v2184.map(async p2236 => {
          const {
            userId: _0x462dd7
          } = p2236;
          await MessageModel.createMessage({
            userId: _0x462dd7,
            title: "版本号：" + _0x5304ae,
            content: JSON.stringify([_0x74ce9a, _0x1de314, _0x3c45fc]),
            type: "update",
            isRead: 0,
            link: "https://www.webfunny.cn/update.html"
          });
        });
      }
    }).catch(p2237 => {
      console.error(p2237);
    });
  }
}
class C31 {
  static async handleVideoStatus(p2238) {
    const v2185 = {
      IlsQr: function (p2239, p2240) {
        return p2239 + p2240;
      },
      tHcqZ: "MMdd",
      boTrn: "success"
    };
    const {
      webMonitorId: _0x36ab41,
      userId: _0x38c718,
      status: _0x4d72a5,
      videoId: _0x42c82a
    } = JSON.parse(p2238.request.body);
    const v2186 = v2185.IlsQr(new Date().Format(v2185.tHcqZ), new Date().getTime().toString().slice(-6));
    switch (_0x4d72a5) {
      case "on":
        await VideosModel.createVideos({
          webMonitorId: _0x36ab41,
          userId: _0x38c718,
          videoId: v2186,
          recordStatus: "on"
        });
        break;
      case "off":
        await VideosModel.updateVideos(_0x42c82a, {
          recordStatus: "off"
        });
        break;
    }
    const v2187 = await VideosModel.findLatestOne(_0x36ab41, _0x38c718, "on");
    setTimeout(() => {
      C32.updateCustomerStatusIntoMemory();
    }, 2000);
    p2238.response.status = 200;
    p2238.body = vRequire14.SUCCESS_200(v2185.boTrn, v2187);
  }
  static async getHistoryVideoList(p2241) {
    const {
      webMonitorId: _0x3f5ddf,
      day: _0x20436c
    } = p2241.query;
    const v2188 = await VideosModel.getHistoryVideoList(_0x3f5ddf, _0x20436c);
    const v2189 = await VideoLogModel.getLogCountByVideoId(_0x3f5ddf, _0x20436c);
    v2188.forEach(p2242 => {
      const v2190 = v2189.find(p2243 => p2243.videoId === p2242.videoId);
      p2242.logCount = v2190 ? v2190.logCount : 0;
    });
    p2241.response.status = 200;
    p2241.body = vRequire14.SUCCESS_200("success", v2188);
  }
}
class C32 {
  static async ["checkLimitForCloud"]() {
    if (accountInfo.isCloud !== true) {
      return;
    }
    const v2191 = await vRequire7.getJson(LOCAL_SERVER + "/wfCenter/getLimitCompanyIdForCloud").catch(p2244 => {
      console.error(p2244);
    });
    const v2192 = v2191.data;
    if (!v2192 || !v2192.length) {
      global.monitorInfo.invalidProjectIdForCloud = [];
      return;
    }
    if (!global.monitorInfo.invalidProjectIdForCloud) {
      global.monitorInfo.invalidProjectIdForCloud = [];
    }
    let v2193 = [];
    for (let v2194 = 0; v2194 < v2192.length; v2194++) {
      const {
        companyId: _0x209d5b
      } = v2192[v2194];
      const v2195 = await ProjectModel.getAllWebmonitorIdByCompanyId(_0x209d5b);
      if (v2195 && v2195.length) {
        for (let v2196 = 0; v2196 < v2195.length; v2196++) {
          const {
            webMonitorId: _0x12b035
          } = v2195[v2196];
          v2193.push(_0x12b035);
        }
      }
    }
    global.monitorInfo.invalidProjectIdForCloud = v2193;
  }
  static async checkCommonProduct() {
    const v2197 = {
      KPVmG: function (p2245, p2246) {
        return p2245 ^ p2246;
      },
      IKriL: function (p2247, p2248) {
        return p2247 >= p2248;
      }
    };
    const v2198 = await vRequire7.getJson(LOCAL_SERVER + "/wfCenter/getTotalFlowCountByCompanyForDay").catch(p2249 => {
      console.error(p2249);
    });
    let v2199 = v2198 ? v2198.data : v2197.KPVmG(853882, 853882);
    const {
      limitType: _0x54c688,
      limitValue = 98765
    } = global.monitorInfo.machineCodeInfo || {};
    if (limitValue === 98765) {
      global.monitorInfo.unLimitCountForProduct = false;
      return;
    }
    switch (_0x54c688) {
      case "X":
        if (v2197.IKriL(v2199, _0x54c688 * 10000)) {
          global.monitorInfo.unLimitCountForProduct = true;
        }
        break;
      default:
        break;
    }
  }
  static async ["checkExportCode"]() {
    const v2200 = global.monitorInfo.exportCodeNumber;
    const v2201 = new Date().getTime();
    for (let v2202 in v2200) {
      const v2203 = v2200[v2202];
      if (!v2203.endTime || v2203.endTime < v2201) {
        delete v2200[v2202];
      }
    }
  }
  static async ["fixData"](p2250) {
    const v2204 = {
      JcAex: function (p2251, p2252) {
        return p2251 ^ p2252;
      },
      mvYwq: " 点的数据",
      nsJur: function (p2253, p2254) {
        return p2253 == p2254;
      },
      ikIlq: function (p2255, p2256) {
        return p2255(p2256);
      },
      Hygel: "07:10",
      TnEQH: "09:10",
      UTlhX: "10:15",
      sqgfH: "00:59",
      RHrMl: "02:59",
      exGBQ: "03:59",
      nqDgo: "04:59",
      iZpjv: "05:59",
      BVKhb: function (p2257, p2258) {
        return p2257 ^ p2258;
      },
      wQqGf: function (p2259, p2260) {
        return p2259 ^ p2260;
      }
    };
    let v2205 = ["06:10", v2204.Hygel, "08:10", v2204.TnEQH, v2204.UTlhX, "11:10"];
    let v2206 = [v2204.sqgfH, "01:59", v2204.RHrMl, v2204.exGBQ, v2204.nqDgo, v2204.iZpjv];
    let v2207 = null;
    let vParseInt6 = parseInt(new Date().Format("hh"), 10);
    let vVParseInt6 = vParseInt6;
    if (vParseInt6 == 0) {
      return;
    }
    v2207 = setInterval(() => {
      console.log("正在修复 " + (vVParseInt6 - vParseInt6) + v2204.mvYwq);
      if (v2204.nsJur(vParseInt6, 0) && v2207) {
        v2205.forEach(p2261 => {
          C32.calculateCountByDay(p2261, v2204.JcAex(908236, 908236));
        });
        v2204.ikIlq(clearInterval, v2207);
      } else {
        v2206.forEach(p2262 => {
          C32.calculateCountByHour(p2262, 0);
        });
      }
      vParseInt6--;
    }, 10000);
    p2250.response.status = v2204.BVKhb(446869, 446813);
    p2250.body = vRequire14.SUCCESS_200("修复请求已成功，修复时间大概需要5分钟。", v2204.wQqGf(979454, 979454));
  }
  static async ["calculateUvCountByDay"]() {
    const v2208 = {
      GaOvs: function (p2263, p2264) {
        return p2263 ^ p2264;
      },
      ESvkp: function (p2265, p2266) {
        return p2265 < p2266;
      },
      fFMsn: function (p2267, p2268) {
        return p2267 * p2268;
      },
      GYGDp: function (p2269, p2270) {
        return p2269 > p2270;
      }
    };
    const v2209 = await ProjectModel.getAllAliveProjectList();
    for (let v2210 = v2208.GaOvs(169239, 169239); v2208.ESvkp(v2210, v2209.length); v2210++) {
      const v2211 = v2209[v2210].webMonitorId;
      const v2212 = await CustomerPVModel.getUVCountForDay(v2211, 0);
      const v2213 = v2212 && v2212.length ? v2208.fFMsn(v2212[0].count, 1) : v2208.GaOvs(808372, 808372);
      if (v2208.GYGDp(v2213, 0)) {
        await ProjectModel.updateProject(v2211, {
          uvCountForDay: v2213
        });
      }
    }
  }
  static async calculateAliveDateByDay(p2271) {
    const v2214 = {
      VJxoa: function (p2272, p2273) {
        return p2272 ^ p2273;
      },
      dyVfV: function (p2274, p2275) {
        return p2274 < p2275;
      },
      fyNjZ: function (p2276, p2277) {
        return p2276 ^ p2277;
      },
      KmwVH: function (p2278, p2279) {
        return p2278 <= p2279;
      },
      NlpzG: function (p2280, p2281) {
        return p2280 ^ p2281;
      },
      HaCxF: function (p2282, p2283) {
        return p2282 ^ p2283;
      },
      Cgtay: function (p2284, p2285) {
        return p2284 ^ p2285;
      },
      esTZv: function (p2286, p2287) {
        return p2286 * p2287;
      },
      XceUG: function (p2288, p2289) {
        return p2288 ^ p2289;
      },
      jUiLO: function (p2290, p2291) {
        return p2290 ^ p2291;
      },
      chpvB: function (p2292, p2293) {
        return p2292 ^ p2293;
      },
      GYepw: function (p2294, p2295) {
        return p2294 > p2295;
      },
      fhUQd: function (p2296, p2297) {
        return p2296 > p2297;
      },
      RLwJf: function (p2298, p2299) {
        return p2298 + p2299;
      },
      kFRfN: function (p2300, p2301) {
        return p2300 / p2301;
      },
      jWxhH: function (p2302, p2303) {
        return p2302 ^ p2303;
      },
      gBCzD: function (p2304, p2305) {
        return p2304(p2305);
      },
      cvqVo: function (p2306, p2307) {
        return p2306 * p2307;
      },
      FeriD: function (p2308, p2309) {
        return p2308 ^ p2309;
      },
      dRWzD: function (p2310, p2311) {
        return p2310 ^ p2311;
      }
    };
    for (let v2215 = v2214.VJxoa(930265, 930265); v2214.dyVfV(v2215, p2271.length); v2215++) {
      const v2216 = p2271[v2215].webMonitorId;
      const v2217 = await CustomerPVModel.getAliveCusInRealTime(v2216);
      const v2218 = v2217 && v2217.length ? v2217[0].count : 0;
      const v2219 = await CustomerPVModel.getUVCountForDay(v2216, 0);
      const v2220 = v2219 && v2219.length ? v2219[0].count * v2214.fyNjZ(386219, 386218) : 0;
      if (v2214.KmwVH(v2220, 0)) {
        await ProjectModel.updateProject(v2216, {
          healthScore: 100,
          perfScore: 100
        });
        continue;
      }
      const v2221 = await JavascriptErrorInfoModel.getJsErrorUserCountToday(v2216, 0);
      const v2222 = await JavascriptErrorInfoModel.getConsoleErrorUserCountToday(v2216, 0);
      const v2223 = await ResourceLoadInfoModel.getResourceErrorUserCountToday(v2216, 0);
      const v2224 = await HttpErrorInfoModel.getHttpErrorUserCountToday(v2216, 0);
      const v2225 = await PageLoadInfoModel.getPageLoadOverviewSimple(v2216, v2214.VJxoa(589846, 589846));
      const v2226 = await PageLoadInfoModel.getCountForOpenOneSecond(v2216, 0);
      let v2227 = v2225[0].samplingPv;
      let v2228 = v2226 ? v2226[0].count : v2214.NlpzG(854639, 854639);
      let v2229 = 0;
      if (v2228) {
        v2229 = vRequire7.toFixed(v2228 / v2227 * 100, 2);
      }
      const v2230 = await HttpLogInfoModel.getTotalCountAndHttpLoadTime(v2216, 0);
      const {
        count = v2214.HaCxF(316594, 316594)
      } = v2230[0] || {};
      const v2231 = await HttpLogInfoModel.getTotalCountInSeconds(v2216, 0, v2214.Cgtay(324712, 325504));
      const v2232 = v2231.length ? v2231[0].count * 1 : 0;
      let v2233 = v2214.NlpzG(167556, 167556);
      if (v2232) {
        v2233 = v2232 !== v2214.VJxoa(259723, 259723) ? vRequire7.toFixed(v2214.esTZv(v2232, v2214.fyNjZ(958707, 958615)) / count, 2) : v2214.XceUG(134421, 134421);
      }
      const v2234 = await CustomerPvLeaveModel.calculateCusLeavePercentByDay(v2216, 0);
      const vV2220 = v2220;
      const v2235 = v2221[v2214.jUiLO(457357, 457357)].count;
      const v2236 = v2222[0].count;
      const v2237 = v2223[0].count;
      const v2238 = v2224[0].count;
      const vV2234 = v2234;
      let v2239 = vV2220 > v2214.chpvB(970371, 970371) ? v2235 / vV2220 * 100 : 0;
      v2239 = v2239 > 100 ? 100 : v2239;
      let v2240 = vV2220 > 0 ? v2236 / vV2220 * 100 : 0;
      v2240 = v2214.GYepw(v2240, 100) ? 100 : v2240;
      let v2241 = vV2220 > 0 ? v2237 / vV2220 * 100 : 0;
      v2241 = v2241 > 100 ? 100 : v2241;
      let v2242 = vV2220 > v2214.jUiLO(747680, 747680) ? v2238 / vV2220 : v2214.Cgtay(724828, 724828);
      v2242 = v2214.fhUQd(v2242, v2214.XceUG(991571, 991543)) ? 100 : v2242;
      let v2243 = v2214.RLwJf(v2214.kFRfN(v2214.fyNjZ(748413, 748393) * v2239, 100) + v2240 * 20 / v2214.jWxhH(817425, 817525) + v2214.kFRfN(v2241 * 30, v2214.jUiLO(568265, 568237)), v2214.esTZv(30, v2242) / 100);
      v2243 = v2214.gBCzD(parseInt, v2214.esTZv(vRequire7.toFixed((v2214.Cgtay(576508, 576408) - v2243) / 100, 2), 100));
      v2239 = vRequire7.toFixed(v2239, v2214.fyNjZ(207597, 207599));
      v2240 = vRequire7.toFixed(v2240, 2);
      v2241 = vRequire7.toFixed(v2241, 2);
      v2242 = vRequire7.toFixed(v2242, 2);
      let v2244 = v2214.RLwJf(v2214.esTZv(50, v2229) / v2214.XceUG(183907, 183815) + v2233 * 30 / 100, v2214.cvqVo(20, 100 - vV2234) / 100);
      v2244 = parseInt(vRequire7.toFixed(v2244 / v2214.FeriD(949776, 949876), v2214.dRWzD(470750, 470748)) * v2214.NlpzG(181002, 181102));
      ProjectModel.updateProject(v2216, {
        uvCountForDay: v2220,
        aliveCount: v2218,
        healthScore: v2243,
        perfScore: v2244
      });
    }
  }
  static async ["calculateCountByDay"](p2312, p2313) {
    const v2245 = {
      PqDHl: function (p2314, p2315) {
        return p2314 == p2315;
      }
    };
    C32.calculateCountByDayForDays(p2312, p2313);
    if (v2245.PqDHl(p2312, "06:10")) {
      C2.checkPurchase(() => {}, () => {});
    }
  }
  static async calculateCountByDayForDays(p2316, p2317) {
    const v2246 = {
      SjmGa: function (p2318, p2319) {
        return p2318 ^ p2319;
      },
      Bodkp: function (p2320, p2321) {
        return p2320 < p2321;
      },
      TcfLg: function (p2322, p2323) {
        return p2322 <= p2323;
      },
      KlIkz: function (p2324, p2325) {
        return p2324 * p2325;
      },
      Prjxn: function (p2326, p2327) {
        return p2326 ^ p2327;
      },
      wVxQk: function (p2328, p2329) {
        return p2328 ^ p2329;
      },
      uEaco: function (p2330, p2331) {
        return p2330 + p2331;
      },
      SSoHW: function (p2332, p2333) {
        return p2332 ^ p2333;
      },
      gOpnn: function (p2334, p2335) {
        return p2334 / p2335;
      },
      dObqB: function (p2336, p2337) {
        return p2336 * p2337;
      },
      dSljq: function (p2338, p2339) {
        return p2338 ^ p2339;
      },
      QFRxk: function (p2340, p2341) {
        return p2340 * p2341;
      },
      HYTUi: "dns",
      aYrMt: "resourceLoaded",
      uMKHi: function (p2342, p2343) {
        return p2342 ^ p2343;
      },
      OZYJb: function (p2344, p2345) {
        return p2344 < p2345;
      },
      IbXaQ: "firstByte",
      ttlxs: function (p2346, p2347) {
        return p2346 < p2347;
      },
      LdNXF: function (p2348, p2349) {
        return p2348 === p2349;
      },
      EnnnI: "deviceName",
      kuBxy: function (p2350, p2351) {
        return p2350 === p2351;
      },
      OQlPN: function (p2352, p2353) {
        return p2352 * p2353;
      },
      mXWrh: "simpleUrl",
      VWwzs: function (p2354, p2355) {
        return p2354 <= p2355;
      },
      isyAc: function (p2356, p2357) {
        return p2356 < p2357;
      },
      oTXLw: function (p2358, p2359) {
        return p2358 ^ p2359;
      },
      yvmqo: function (p2360, p2361) {
        return p2360 ^ p2361;
      },
      JrYwJ: function (p2362, p2363) {
        return p2362 ^ p2363;
      },
      MQcxx: function (p2364, p2365) {
        return p2364 ^ p2365;
      },
      jOYRT: function (p2366, p2367) {
        return p2366 ^ p2367;
      },
      qzvfo: function (p2368, p2369) {
        return p2368 / p2369;
      },
      uouhK: function (p2370, p2371) {
        return p2370 ^ p2371;
      },
      hOYAJ: function (p2372, p2373) {
        return p2372 - p2373;
      },
      HAJTZ: function (p2374, p2375) {
        return p2374 ^ p2375;
      },
      IvNmQ: "10:15"
    };
    const v2247 = vRequire7.addDays(p2317);
    switch (p2316) {
      case "06:10":
        C32.handleProjectWithTag(async (p2376, p2377) => {
          const v2248 = {
            uploadType: "",
            webMonitorId: p2376,
            dayCount: ""
          };
          const v2249 = [{
            uploadTypeForDay: UPLOAD_TYPE.UV_COUNT_DAY,
            uploadTypeForHour: UPLOAD_TYPE.UV_COUNT_HOUR
          }, {
            uploadTypeForDay: UPLOAD_TYPE.PV_COUNT_DAY,
            uploadTypeForHour: UPLOAD_TYPE.PV_COUNT_HOUR
          }, {
            uploadTypeForDay: UPLOAD_TYPE.NEW_COUNT_DAY,
            uploadTypeForHour: UPLOAD_TYPE.NEW_COUNT_HOUR
          }, {
            uploadTypeForDay: UPLOAD_TYPE.IP_COUNT_DAY,
            uploadTypeForHour: UPLOAD_TYPE.IP_COUNT_HOUR
          }];
          for (let v2250 = v2246.SjmGa(693103, 693103); v2246.Bodkp(v2250, v2249.length); v2250++) {
            const v2251 = v2249[v2250];
            const v2252 = await CustomerPVModel.getCusInfoCountForDay(p2376, p2317, v2251.uploadTypeForDay);
            const v2253 = v2251.uploadTypeForDay;
            v2248.uploadType = v2253;
            v2248.dayCount = v2252[0].count || v2246.SjmGa(586164, 586164);
            const v2254 = await InfoCountByDayModel.getInfoCountByDayDetailByDayName(v2247, p2376, v2253);
            if (v2246.TcfLg(v2254.length, 0)) {
              await InfoCountByDayModel.createInfoCountByDay({
                ...v2248,
                dayName: v2247
              });
            } else {
              const v2255 = v2254[0].dataId;
              await InfoCountByDayModel.updateInfoCountByDay(v2255, v2248);
            }
          }
        });
        break;
      case "07:10":
        return;
        C32.handleProject(async p2378 => {
          const v2256 = {
            HlyTI: function (p2379, p2380) {
              return v2246.SjmGa(p2379, p2380);
            },
            IkMHg: function (p2381, p2382) {
              return p2381 ^ p2382;
            },
            BOShb: function (p2383, p2384) {
              return p2383 * p2384;
            },
            njwEU: function (p2385, p2386) {
              return p2385 / p2386;
            },
            zygJb: function (p2387, p2388) {
              return p2387 ^ p2388;
            },
            UWwvW: function (p2389, p2390) {
              return p2389 ^ p2390;
            },
            bXRTN: function (p2391, p2392) {
              return p2391 ^ p2392;
            },
            lBpAd: function (p2393, p2394) {
              return p2393 / p2394;
            },
            zAKYK: function (p2395, p2396) {
              return p2395 <= p2396;
            },
            ZWzZF: function (p2397, p2398) {
              return p2397 === p2398;
            },
            myWhJ: function (p2399, p2400) {
              return p2399 <= p2400;
            }
          };
          const {
            webMonitorId: _0x36ca02
          } = p2378;
          const v2257 = {
            uploadType: "",
            webMonitorId: _0x36ca02,
            dayCount: ""
          };
          const v2258 = await CustomerPvLeaveModel.getCusLeavePercentForDay(_0x36ca02, p2317);
          const v2259 = UPLOAD_TYPE.CUS_LEAVE_FOR_DAY;
          v2257.uploadType = v2259;
          v2257.dayCount = v2258 || v2246.SjmGa(787201, 787201);
          const v2260 = await InfoCountByDayModel.getInfoCountByDayDetailByDayName(v2247, _0x36ca02, v2259);
          if (v2260.length <= 0) {
            await InfoCountByDayModel.createInfoCountByDay({
              ...v2257,
              dayName: v2247
            });
          } else {
            const v2261 = v2260[0].dataId;
            await InfoCountByDayModel.updateInfoCountByDay(v2261, v2257);
          }
          const v2262 = await CustomerPVModel.getUVCountForDay(_0x36ca02, p2317);
          const v2263 = v2262[0].count;
          await JavascriptErrorInfoModel.calculateJsErrorCountByDay(_0x36ca02, p2317).then(async p2401 => {
            const v2264 = UPLOAD_TYPE.ON_ERROR;
            v2257.uploadType = v2264;
            v2257.dayCount = p2401[0].count || 0;
            const v2265 = await InfoCountByDayModel.getInfoCountByDayDetailByDayName(v2247, _0x36ca02, v2264);
            if (v2265.length <= 0) {
              await InfoCountByDayModel.createInfoCountByDay({
                ...v2257,
                dayName: v2247
              });
            } else {
              const v2266 = v2265[v2256.HlyTI(535315, 535315)].dataId;
              await InfoCountByDayModel.updateInfoCountByDay(v2266, v2257);
            }
          });
          await JavascriptErrorInfoModel.getJsErrorUserCountToday(_0x36ca02, p2317).then(async p2402 => {
            v2257.uploadType = UPLOAD_TYPE.ON_ERROR_PER;
            const v2267 = p2402[0].count;
            const v2268 = v2263 === v2256.HlyTI(683463, 683463) ? v2256.IkMHg(591262, 591262) : vRequire7.toFixed(v2256.BOShb(v2256.njwEU(v2267, v2263), v2256.zygJb(365507, 365479)), v2256.zygJb(476513, 476515));
            v2257.dayCount = v2268;
            const v2269 = await InfoCountByDayModel.getInfoCountByDayDetailByDayName(v2247, _0x36ca02, UPLOAD_TYPE.ON_ERROR_PER);
            if (v2269.length <= v2256.IkMHg(300714, 300714)) {
              await InfoCountByDayModel.createInfoCountByDay({
                ...v2257,
                dayName: v2247
              });
            } else {
              const v2270 = v2269[0].dataId;
              await InfoCountByDayModel.updateInfoCountByDay(v2270, v2257);
            }
          });
          await JavascriptErrorInfoModel.calculateConsoleErrorCountByDay(_0x36ca02, p2317).then(async p2403 => {
            const v2271 = UPLOAD_TYPE.CONSOLE_ERROR;
            v2257.uploadType = v2271;
            v2257.dayCount = p2403[0].count || 0;
            const v2272 = await InfoCountByDayModel.getInfoCountByDayDetailByDayName(v2247, _0x36ca02, v2271);
            if (v2272.length <= 0) {
              await InfoCountByDayModel.createInfoCountByDay({
                ...v2257,
                dayName: v2247
              });
            } else {
              const v2273 = v2272[0].dataId;
              await InfoCountByDayModel.updateInfoCountByDay(v2273, v2257);
            }
          });
          await JavascriptErrorInfoModel.getConsoleErrorUserCountToday(_0x36ca02, p2317).then(async p2404 => {
            v2257.uploadType = UPLOAD_TYPE.CONSOLE_ERROR_PER;
            const v2274 = p2404[v2256.UWwvW(323777, 323777)].count;
            const v2275 = v2263 === 0 ? v2256.bXRTN(377487, 377487) : vRequire7.toFixed(v2256.lBpAd(v2274, v2263) * 100, v2256.HlyTI(572160, 572162));
            v2257.dayCount = v2275;
            const v2276 = await InfoCountByDayModel.getInfoCountByDayDetailByDayName(v2247, _0x36ca02, UPLOAD_TYPE.CONSOLE_ERROR_PER);
            if (v2256.zAKYK(v2276.length, 0)) {
              await InfoCountByDayModel.createInfoCountByDay({
                ...v2257,
                dayName: v2247
              });
            } else {
              const v2277 = v2276[0].dataId;
              await InfoCountByDayModel.updateInfoCountByDay(v2277, v2257);
            }
          });
          await HttpErrorInfoModel.calculateHttpErrorCountByDay(_0x36ca02, p2317).then(async p2405 => {
            const v2278 = UPLOAD_TYPE.HTTP_ERROR;
            v2257.uploadType = v2278;
            v2257.dayCount = p2405[0].count || v2246.SjmGa(561324, 561324);
            const v2279 = await InfoCountByDayModel.getInfoCountByDayDetailByDayName(v2247, _0x36ca02, v2278);
            if (v2279.length <= 0) {
              await InfoCountByDayModel.createInfoCountByDay({
                ...v2257,
                dayName: v2247
              });
            } else {
              const v2280 = v2279[0].dataId;
              await InfoCountByDayModel.updateInfoCountByDay(v2280, v2257);
            }
          });
          await HttpErrorInfoModel.getHttpErrorUserCountToday(_0x36ca02, p2317).then(async p2406 => {
            v2257.uploadType = UPLOAD_TYPE.HTTP_ERROR_PER;
            const v2281 = p2406[v2256.UWwvW(284588, 284588)].count;
            const v2282 = v2256.ZWzZF(v2263, 0) ? v2256.zygJb(931428, 931428) : vRequire7.toFixed(v2281 / v2263 * v2256.bXRTN(984356, 984384), 2);
            v2257.dayCount = v2282;
            const v2283 = await InfoCountByDayModel.getInfoCountByDayDetailByDayName(v2247, _0x36ca02, UPLOAD_TYPE.HTTP_ERROR_PER);
            if (v2256.myWhJ(v2283.length, 0)) {
              await InfoCountByDayModel.createInfoCountByDay({
                ...v2257,
                dayName: v2247
              });
            } else {
              const v2284 = v2283[v2256.IkMHg(734844, 734844)].dataId;
              await InfoCountByDayModel.updateInfoCountByDay(v2284, v2257);
            }
          });
          await ResourceLoadInfoModel.calculateResourceErrorCountByDay(_0x36ca02, p2317).then(async p2407 => {
            const v2285 = UPLOAD_TYPE.RESOURCE_ERROR;
            v2257.uploadType = v2285;
            v2257.dayCount = p2407[0].count || 0;
            const v2286 = await InfoCountByDayModel.getInfoCountByDayDetailByDayName(v2247, _0x36ca02, v2285);
            if (v2286.length <= 0) {
              await InfoCountByDayModel.createInfoCountByDay({
                ...v2257,
                dayName: v2247
              });
            } else {
              const v2287 = v2286[v2256.IkMHg(767216, 767216)].dataId;
              await InfoCountByDayModel.updateInfoCountByDay(v2287, v2257);
            }
          });
          await ResourceLoadInfoModel.getResourceErrorUserCountToday(_0x36ca02, p2317).then(async p2408 => {
            v2257.uploadType = UPLOAD_TYPE.RESOURCE_ERROR_PER;
            const v2288 = p2408[0].count;
            const v2289 = v2263 === 0 ? 0 : vRequire7.toFixed(v2246.KlIkz(v2288 / v2263, 100), 2);
            v2257.dayCount = v2289;
            const v2290 = await InfoCountByDayModel.getInfoCountByDayDetailByDayName(v2247, _0x36ca02, UPLOAD_TYPE.RESOURCE_ERROR_PER);
            if (v2290.length <= 0) {
              await InfoCountByDayModel.createInfoCountByDay({
                ...v2257,
                dayName: v2247
              });
            } else {
              const v2291 = v2290[0].dataId;
              await InfoCountByDayModel.updateInfoCountByDay(v2291, v2257);
            }
          });
        });
        break;
      case "08:10":
        return;
        C32.handleProjectWithTag(async (p2409, p2410) => {
          const v2292 = {
            uploadType: "",
            webMonitorId: p2409,
            dayCount: ""
          };
          const v2293 = await InfoCountByDayModel.getInfoCountByDayName(v2247, p2409, UPLOAD_TYPE.ON_ERROR_PER);
          const v2294 = await InfoCountByDayModel.getInfoCountByDayName(v2247, p2409, UPLOAD_TYPE.CONSOLE_ERROR_PER);
          const v2295 = await InfoCountByDayModel.getInfoCountByDayName(v2247, p2409, UPLOAD_TYPE.HTTP_ERROR_PER);
          const v2296 = await InfoCountByDayModel.getInfoCountByDayName(v2247, p2409, UPLOAD_TYPE.RESOURCE_ERROR_PER);
          const v2297 = v2293 && v2293[v2246.Prjxn(415779, 415779)] ? v2293[0].dayCount : v2246.wVxQk(999412, 999412);
          const v2298 = v2294 && v2294[0] ? v2294[v2246.Prjxn(758583, 758583)].dayCount : 0;
          const v2299 = v2295 && v2295[0] ? v2295[0].dayCount : v2246.wVxQk(250056, 250056);
          const v2300 = v2296 && v2296[0] ? v2296[0].dayCount : v2246.SjmGa(395126, 395126);
          let v2301 = v2246.uEaco(v2246.KlIkz(20, v2297) / v2246.SSoHW(402032, 401940) + v2246.gOpnn(v2246.dObqB(20, v2298), 100), v2300 * 30 / v2246.dSljq(467552, 467460)) + v2246.dObqB(30, v2299) / 100;
          v2301 = v2246.QFRxk(vRequire7.toFixed((100 - v2301) / 100, 2), 100);
          ProjectModel.updateProject(p2409, {
            healthScore: v2301
          });
          const v2302 = await InfoCountByDayModel.getInfoCountByDayDetailByDayName(v2247, p2409, UPLOAD_TYPE.HEALTH_SCORE_DAY);
          v2292.uploadType = UPLOAD_TYPE.HEALTH_SCORE_DAY;
          v2292.dayCount = v2301;
          if (v2302 && v2246.TcfLg(v2302.length, 0)) {
            await InfoCountByDayModel.createInfoCountByDay({
              ...v2292,
              dayName: v2247
            });
          } else {
            const v2303 = v2302[0].dataId;
            await InfoCountByDayModel.updateInfoCountByDay(v2303, v2292);
          }
        });
        break;
      case "09:10":
        return;
        C32.handleProject(async p2411 => {
          const {
            webMonitorId: _0x191e94
          } = p2411;
          const v2304 = {
            uploadType: "",
            webMonitorId: _0x191e94,
            dayCount: ""
          };
          const v2305 = await PageLoadInfoModel.calculateValueByDay(_0x191e94, p2317);
          const v2306 = ["samplingPv", "firstByte", "domReady", "pageCompleteLoaded", v2246.HYTUi, "tcp", "sl", "response", "conTrans", "domAnalysis", v2246.aYrMt];
          if (v2305.length > 0) {
            const v2307 = v2305[0];
            for (let v2308 = 0; v2308 < v2306.length; v2308++) {
              const v2309 = v2306[v2308];
              v2304.uploadType = v2309;
              v2304.dayCount = v2307[v2309] || v2246.uMKHi(391957, 391957);
              const v2310 = await InfoCountByDayModel.getInfoCountByDayDetailByDayName(v2247, _0x191e94, v2309);
              if (v2310.length <= 0) {
                await InfoCountByDayModel.createInfoCountByDay({
                  ...v2304,
                  dayName: v2247
                });
              } else {
                const v2311 = v2310[0].dataId;
                await InfoCountByDayModel.updateInfoCountByDay(v2311, v2304);
              }
            }
          }
          const vV2247 = v2247;
          const v2312 = await PageLoadInfoModel.calculateValueForUrlByDay(_0x191e94, p2317);
          for (let v2313 = 0; v2246.OZYJb(v2313, v2312.length); v2313++) {
            let v2314 = v2312[v2313];
            const {
              simpleUrl: _0x252b90,
              firstByte: _0xf16175,
              domReady: _0x33bfe5,
              pageCompleteLoaded: _0xb4f340
            } = v2314;
            const v2315 = {
              webMonitorId: _0x191e94,
              infoType: v2246.IbXaQ,
              showName: _0x252b90,
              dayName: vV2247,
              dayCount: _0xf16175
            };
            const v2316 = {
              webMonitorId: _0x191e94,
              infoType: "domReady",
              showName: _0x252b90,
              dayName: vV2247,
              dayCount: _0x33bfe5
            };
            const v2317 = {
              webMonitorId: _0x191e94,
              infoType: "pageCompleteLoaded",
              showName: _0x252b90,
              dayName: vV2247,
              dayCount: _0xb4f340
            };
            PerfInfoByDayModel.createPerfInfoByDay(v2315);
            PerfInfoByDayModel.createPerfInfoByDay(v2316);
            PerfInfoByDayModel.createPerfInfoByDay(v2317);
          }
        });
        break;
      case v2246.IvNmQ:
        return;
        C32.handleProject(async p2412 => {
          const v2318 = {
            Lfxbp: function (p2413, p2414) {
              return v2246.ttlxs(p2413, p2414);
            },
            GPSYm: function (p2415, p2416) {
              return v2246.LdNXF(p2415, p2416);
            },
            LdYeB: "直接访问",
            YhcKr: function (p2417, p2418) {
              return p2417 ^ p2418;
            }
          };
          const {
            webMonitorId: _0x546651,
            pageAggregation: _0x45fe40
          } = p2412;
          const v2319 = {
            uploadType: "",
            webMonitorId: _0x546651,
            dayCount: ""
          };
          const v2320 = {
            uploadType: "",
            webMonitorId: _0x546651,
            dayCount: "",
            showName: ""
          };
          const v2321 = [{
            key: v2246.EnnnI,
            uploadType: UPLOAD_TYPE.DEVICE_COUNT_HOUR
          }, {
            key: "city",
            uploadType: UPLOAD_TYPE.CITY_COUNT_HOUR
          }, {
            key: "province",
            uploadType: UPLOAD_TYPE.PROVINCE_COUNT_HOUR
          }, {
            key: "country",
            uploadType: UPLOAD_TYPE.COUNTRY_COUNT_HOUR
          }, {
            key: "os",
            uploadType: UPLOAD_TYPE.SYSTEM_COUNT_HOUR
          }, {
            key: "projectVersion",
            uploadType: UPLOAD_TYPE.VERSION_COUNT_HOUR
          }, {
            key: "deviceSize",
            uploadType: UPLOAD_TYPE.SCREEN_COUNT_HOUR
          }, {
            key: "browserName",
            uploadType: UPLOAD_TYPE.BROWSER_COUNT_HOUR
          }, {
            key: "referrer",
            uploadType: UPLOAD_TYPE.REFERRER_COUNT_HOUR
          }];
          if (v2246.kuBxy(v2246.OQlPN(_0x45fe40, 1), v2246.uMKHi(283012, 283013))) {
            v2321.push({
              key: v2246.mXWrh,
              uploadType: UPLOAD_TYPE.SIMPLE_URL_COUNT_HOUR
            });
          }
          for (let v2322 = 0; v2322 < v2321.length; v2322++) {
            let v2323 = v2321[v2322];
            await CustomerPVModel.getDeviceCountByHour(_0x546651, p2317, v2323.key).then(async p2419 => {
              for (let v2324 = 0; v2318.Lfxbp(v2324, p2419.length); v2324++) {
                let v2325 = p2419[v2324];
                v2320.uploadType = v2323.uploadTypeForDay;
                v2320.dayCount = v2325.count;
                v2320.showName = v2325.showName || (v2318.GPSYm(v2323.uploadTypeForDay, UPLOAD_TYPE.REFERRER_COUNT_DAY) ? v2318.LdYeB : "未知");
                const v2326 = await DeviceInfoCountByDayModel.getDeviceInfoCountByDayDetailByDayName(v2247, _0x546651, v2323.uploadTypeForDay, v2320.showName);
                if (v2326.length <= 0) {
                  await DeviceInfoCountByDayModel.createDeviceInfoCountByDay({
                    ...v2320,
                    dayName: v2247
                  });
                } else {
                  const v2327 = v2326[v2318.YhcKr(823821, 823821)].dataId;
                  await DeviceInfoCountByDayModel.updateDeviceInfoCountByDay(v2327, v2320);
                }
              }
            });
          }
        });
        break;
      case "11:10":
        return;
        C32.handleProject(async p2420 => {
          const {
            webMonitorId: _0x3b5357
          } = p2420;
          const v2328 = {
            uploadType: "",
            webMonitorId: _0x3b5357,
            dayCount: ""
          };
          const v2329 = [{
            start: 0,
            end: 1,
            uploadTypeForDay: UPLOAD_TYPE.HTTP_COUNT_A,
            uploadTypeForHour: UPLOAD_TYPE.HTTP_HOUR_COUNT_A
          }, {
            start: 1,
            end: 5,
            uploadTypeForDay: UPLOAD_TYPE.HTTP_COUNT_B,
            uploadTypeForHour: UPLOAD_TYPE.HTTP_HOUR_COUNT_B
          }, {
            start: 5,
            end: 10,
            uploadTypeForDay: UPLOAD_TYPE.HTTP_COUNT_C,
            uploadTypeForHour: UPLOAD_TYPE.HTTP_HOUR_COUNT_C
          }, {
            start: 10,
            end: 30,
            uploadTypeForDay: UPLOAD_TYPE.HTTP_COUNT_D,
            uploadTypeForHour: UPLOAD_TYPE.HTTP_HOUR_COUNT_D
          }, {
            start: 30,
            end: 1000,
            uploadTypeForDay: UPLOAD_TYPE.HTTP_COUNT_E,
            uploadTypeForHour: UPLOAD_TYPE.HTTP_HOUR_COUNT_E
          }];
          for (let v2330 = 0; v2246.isyAc(v2330, v2329.length); v2330++) {
            let v2331 = v2329[v2330];
            await HttpLogInfoModel.calculateHttpLogCountForSecByDay(_0x3b5357, p2317, v2331).then(async p2421 => {
              v2328.uploadType = v2331.uploadTypeForDay;
              v2328.dayCount = p2421 && p2421.length ? p2421[0].count || 0 : 0;
              const v2332 = await InfoCountByDayModel.getInfoCountByDayDetailByDayName(v2247, _0x3b5357, v2331.uploadTypeForDay);
              if (v2246.VWwzs(v2332.length, v2246.Prjxn(300356, 300356))) {
                await InfoCountByDayModel.createInfoCountByDay({
                  ...v2328,
                  dayName: v2247
                });
              } else {
                const v2333 = v2332[0].dataId;
                await InfoCountByDayModel.updateInfoCountByDay(v2333, v2328);
              }
            });
          }
        });
        break;
      case "12:10":
        return;
        C32.handleProject(async p2422 => {
          const {
            webMonitorId: _0x50df4a
          } = p2422;
          const v2334 = await InfoCountByDayModel.getInfoCountByDayName(v2247, _0x50df4a, UPLOAD_TYPE.ON_ERROR_PER);
          const v2335 = await InfoCountByDayModel.getInfoCountByDayName(v2247, _0x50df4a, UPLOAD_TYPE.CONSOLE_ERROR_PER);
          const v2336 = await InfoCountByDayModel.getInfoCountByDayName(v2247, _0x50df4a, UPLOAD_TYPE.HTTP_ERROR_PER);
          const v2337 = await InfoCountByDayModel.getInfoCountByDayName(v2247, _0x50df4a, UPLOAD_TYPE.RESOURCE_ERROR_PER);
          const v2338 = v2334 && v2334[0] ? v2334[v2246.oTXLw(214705, 214705)].dayCount : v2246.yvmqo(776980, 776980);
          const v2339 = v2335 && v2335[0] ? v2335[0].dayCount : v2246.JrYwJ(769619, 769619);
          const v2340 = v2336 && v2336[v2246.wVxQk(192870, 192870)] ? v2336[v2246.MQcxx(126014, 126014)].dayCount : v2246.jOYRT(960100, 960100);
          const v2341 = v2337 && v2337[v2246.dSljq(638433, 638433)] ? v2337[0].dayCount : 0;
          let v2342 = v2246.uEaco(v2246.gOpnn(v2246.SjmGa(672146, 672134) * v2338, 100) + v2246.qzvfo(v2246.OQlPN(20, v2339), v2246.uouhK(845202, 845302)) + v2246.dObqB(30, v2341) / 100, v2340 * 30 / 100);
          v2342 = vRequire7.toFixed(v2246.hOYAJ(v2246.Prjxn(293919, 294011), v2342) / 100, v2246.HAJTZ(811132, 811134));
          await ProjectModel.updateProjectForWebMonitorId(_0x50df4a, {
            healthScore: v2342 * 100
          });
        });
        break;
      default:
        break;
    }
  }
  static async ["calculateCountByHour"](p2423, p2424, p2425) {
    try {
      C32.calculateCountByHourForDetailHour(p2423, p2424, p2425);
    } catch (_0x45ef36) {
      console.log(_0x45ef36);
    }
  }
  static async calculateCountByHourForDetailHour(p2426, p2427, p2428) {
    const v2343 = {
      sKVpl: function (p2429, p2430) {
        return p2429 + p2430;
      },
      CMDua: function (p2431, p2432) {
        return p2431 ^ p2432;
      },
      mdPqF: function (p2433, p2434) {
        return p2433 ^ p2434;
      },
      alDQd: function (p2435, p2436) {
        return p2435 * p2436;
      },
      CRtkN: function (p2437, p2438) {
        return p2437 ^ p2438;
      },
      EheCC: function (p2439, p2440) {
        return p2439 + p2440;
      },
      NSnKf: function (p2441, p2442) {
        return p2441 ^ p2442;
      },
      oVOwr: function (p2443, p2444) {
        return p2443 ^ p2444;
      },
      BMXFE: function (p2445, p2446) {
        return p2445 ^ p2446;
      },
      pnrth: function (p2447, p2448) {
        return p2447 > p2448;
      },
      ufupQ: function (p2449, p2450) {
        return p2449 ^ p2450;
      },
      butSK: "dns",
      YBzWD: "tcp",
      wfqSn: "conTrans",
      sjmQh: "resourceLoaded",
      BdMVT: function (p2451, p2452) {
        return p2451 === p2452;
      },
      UDSgd: "city",
      kWrkr: "province",
      BIsBt: "simpleUrl",
      IDkYW: function (p2453, p2454) {
        return p2453 ^ p2454;
      },
      xQjpH: function (p2455, p2456) {
        return p2455 < p2456;
      },
      TAQxB: "country",
      dwgtg: "browserName",
      hdEma: "yyyy-MM-dd",
      SFopn: function (p2457, p2458) {
        return p2457 ^ p2458;
      },
      lUEMw: "yyyy-MM-dd hh",
      JIIfu: "00:30",
      pmSuY: "01:00",
      PTUhk: "即将执行错误分析",
      cJjYZ: "01:30",
      guKAl: "即将执行页面加载分析",
      azbaL: "02:30",
      pxVCX: "03:00",
      RADRQ: "03:30"
    };
    const v2344 = new Date().getTime() - v2343.alDQd(p2427, 3600) * 1000;
    const v2345 = new Date(v2344).Format(v2343.hdEma);
    const v2346 = new Date(v2344).Format("yyyy-MM-dd hh");
    const v2347 = v2343.EheCC(v2346, ":00:00");
    const v2348 = new Date(v2344).Format("hh");
    const v2349 = v2343.sKVpl(new Date(v2343.EheCC(v2344, v2343.SFopn(838956, 836412) * 1000)).Format(v2343.lUEMw), ":00:00");
    const v2350 = v2347.substring(5, 13);
    const v2351 = [];
    let v2352 = {};
    switch (p2426) {
      case v2343.JIIfu:
        console.log("即将执行PV分析");
        C32.handleProjectWithTag(async (p2459, p2460) => {
          const v2353 = {
            uploadType: "",
            webMonitorId: p2459,
            hourCount: ""
          };
          await CustomerPVModel.calculateUvCountByHour(p2459, p2460, v2347, v2349).then(async p2461 => {
            const v2354 = UPLOAD_TYPE.UV + p2460;
            v2353.uploadType = v2354;
            v2353.hourCount = p2461[0].count;
            await InfoCountByHourModel.createInfoCountByHour({
              ...v2353,
              hourName: v2350
            });
          });
          await CustomerPVModel.calculateTotalUvCountByHour(p2459, p2460, v2347, v2349).then(async p2462 => {
            const v2355 = UPLOAD_TYPE.UV_COUNT_HOUR + p2460;
            v2353.uploadType = v2355;
            v2353.hourCount = p2462[0].count * 1;
            await InfoCountByHourModel.createInfoCountByHour({
              ...v2353,
              hourName: v2350
            });
          });
          await CustomerPVModel.calculatePvCountByHour(p2459, p2460, v2347, v2349).then(async p2463 => {
            const v2356 = UPLOAD_TYPE.PV_COUNT_HOUR + p2460;
            v2353.uploadType = v2356;
            v2353.hourCount = p2463[0].count;
            await InfoCountByHourModel.createInfoCountByHour({
              ...v2353,
              hourName: v2350
            });
          });
          await CustomerPVModel.calculateNewCustomerCountByHour(p2459, p2460, v2347, v2349).then(async p2464 => {
            const v2357 = v2343.sKVpl(UPLOAD_TYPE.NEW_CUSTOMER, p2460);
            v2353.uploadType = v2357;
            v2353.hourCount = p2464[0].count;
            await InfoCountByHourModel.createInfoCountByHour({
              ...v2353,
              hourName: v2350
            });
          });
          await CustomerPVModel.calculateTotalNewCustomerCountByHour(p2459, p2460, v2347, v2349).then(async p2465 => {
            const v2358 = UPLOAD_TYPE.NEW_COUNT_HOUR + p2460;
            v2353.uploadType = v2358;
            v2353.hourCount = p2465[v2343.CMDua(758272, 758272)].count;
            await InfoCountByHourModel.createInfoCountByHour({
              ...v2353,
              hourName: v2350
            });
          });
          await CustomerPVModel.calculateTotalIPCountByHour(p2459, p2460, v2347, v2349).then(async p2466 => {
            const v2359 = UPLOAD_TYPE.IP_COUNT_HOUR + p2460;
            v2353.uploadType = v2359;
            v2353.hourCount = p2466[0].count;
            await InfoCountByHourModel.createInfoCountByHour({
              ...v2353,
              hourName: v2350
            });
          });
        });
        break;
      case v2343.pmSuY:
        console.log(v2343.PTUhk);
        C32.handleProject(async p2467 => {
          const v2360 = {
            emEmk: function (p2468, p2469) {
              return v2343.EheCC(p2468, p2469);
            },
            hZKhu: function (p2470, p2471) {
              return p2470 ^ p2471;
            }
          };
          const {
            webMonitorId: _0x5d0444,
            userTag: _0x44fd93,
            p: _0x808ff1,
            projectList: _0x76f5f4
          } = p2467;
          const v2361 = {
            uploadType: "",
            webMonitorId: _0x5d0444,
            hourCount: ""
          };
          const v2362 = await CustomerPVModel.calculateTotalUvCountByHour(_0x5d0444, _0x44fd93, v2347, v2349);
          const v2363 = v2362[0].count * v2343.NSnKf(265479, 265478);
          await JavascriptErrorInfoModel.calculateJsErrorCountByHour(_0x5d0444, _0x44fd93, v2347, v2349).then(async p2472 => {
            const v2364 = v2360.emEmk(UPLOAD_TYPE.ON_ERROR, _0x44fd93);
            v2361.uploadType = v2364;
            v2361.hourCount = p2472[0].count;
            await InfoCountByHourModel.createInfoCountByHour({
              ...v2361,
              hourName: v2350
            });
          });
          await JavascriptErrorInfoModel.calculateConsoleErrorCountByHour(_0x5d0444, _0x44fd93, v2347, v2349).then(async p2473 => {
            const v2365 = UPLOAD_TYPE.CONSOLE_ERROR + _0x44fd93;
            v2361.uploadType = v2365;
            v2361.hourCount = p2473[0].count;
            await InfoCountByHourModel.createInfoCountByHour({
              ...v2361,
              hourName: v2350
            });
          });
          await ResourceLoadInfoModel.calculateResourceErrorCountByHour(_0x5d0444, _0x44fd93, v2347, v2349).then(async p2474 => {
            const v2366 = UPLOAD_TYPE.RESOURCE_ERROR + _0x44fd93;
            v2361.uploadType = v2366;
            v2361.hourCount = p2474[0].count;
            await InfoCountByHourModel.createInfoCountByHour({
              ...v2361,
              hourName: v2350
            });
          });
          await HttpErrorInfoModel.calculateHttpErrorCountByHour(_0x5d0444, _0x44fd93, v2347, v2349).then(async p2475 => {
            const v2367 = UPLOAD_TYPE.HTTP_ERROR + _0x44fd93;
            v2361.uploadType = v2367;
            v2361.hourCount = p2475[v2360.hZKhu(997229, 997229)].count;
            await InfoCountByHourModel.createInfoCountByHour({
              ...v2361,
              hourName: v2350
            });
          });
          await HttpErrorInfoModel.calculateHttpErrorUvCountByHour(_0x5d0444, _0x44fd93, v2347, v2349).then(async p2476 => {
            const v2368 = UPLOAD_TYPE.HTTP_ERROR_PER + _0x44fd93;
            const v2369 = p2476[v2343.mdPqF(392043, 392043)].count;
            const v2370 = v2363 === 0 ? 0 : vRequire7.toFixed(v2343.alDQd(v2369 / v2363, v2343.CRtkN(565650, 565750)), 2);
            v2361.uploadType = v2368;
            v2361.hourCount = v2370;
            await InfoCountByHourModel.createInfoCountByHour({
              ...v2361,
              hourName: v2350
            });
          });
          await CustomerPvLeaveModel.calculateCusLeavePercentByHour(_0x5d0444, v2347, v2349).then(async p2477 => {
            const v2371 = UPLOAD_TYPE.CUS_LEAVE_FOR_HOUR;
            v2361.uploadType = v2371;
            v2361.hourCount = p2477;
            await InfoCountByHourModel.createInfoCountByHour({
              ...v2361,
              hourName: v2350
            });
          });
          const v2372 = await JavascriptErrorInfoModel.getJsErrorUserCountByHour(_0x5d0444, v2347, v2349);
          const v2373 = await JavascriptErrorInfoModel.getConsoleErrorUserCountByHour(_0x5d0444, v2347, v2349);
          const v2374 = await ResourceLoadInfoModel.getResourceErrorUserCountByHour(_0x5d0444, v2347, v2349);
          const v2375 = await HttpErrorInfoModel.getHttpErrorUserCountByHour(_0x5d0444, v2347, v2349);
          const v2376 = {
            webMonitorId: _0x5d0444,
            jsErrorCount: v2372[0].count,
            consoleErrorCount: v2373[v2343.NSnKf(221359, 221359)].count,
            resourceErrorCount: v2374[v2343.oVOwr(146156, 146156)].count,
            httpErrorCount: v2375[v2343.CRtkN(347322, 347322)].count,
            jsErrorUvCount: v2372[0].uvCount,
            consoleErrorUvCount: v2373[0].uvCount,
            resourceErrorUvCount: v2374[v2343.CRtkN(354765, 354765)].uvCount,
            httpErrorUvCount: v2375[0].uvCount,
            hour: v2347
          };
          v2351.push(v2376);
          if (typeof p2428 === "function" && _0x808ff1 === _0x76f5f4.length - 1) {
            p2428(v2351);
          }
        });
        break;
      case v2343.cJjYZ:
        console.log("即将执行接口分析");
        C32.handleProject(async p2478 => {
          const {
            webMonitorId: _0x2dd138
          } = p2478;
          const v2377 = {
            uploadType: "",
            webMonitorId: _0x2dd138,
            hourCount: ""
          };
          const v2378 = {
            uploadType: "",
            webMonitorId: _0x2dd138,
            hourName: v2350,
            hourCount: "",
            hourLoadTime: ""
          };
          await HttpLogInfoModel.calculateHttpLoadTimeByHour(_0x2dd138, v2347, v2349).then(async p2479 => {
            v2377.uploadType = UPLOAD_TYPE.HTTP_HOUR_TIME;
            v2377.hourCount = p2479[0].loadTime || v2343.BMXFE(105026, 105026);
            await InfoCountByHourModel.createInfoCountByHour({
              ...v2377,
              hourName: v2350
            });
          });
          await HttpLogInfoModel.calculateHttpTotalCountByHour(_0x2dd138, v2347, v2349).then(async p2480 => {
            v2377.uploadType = UPLOAD_TYPE.HTTP_HOUR_TOTAL_COUNT;
            v2377.hourCount = p2480[0].count;
            await InfoCountByHourModel.createInfoCountByHour({
              ...v2377,
              hourName: v2350
            });
          });
          await HttpLogInfoModel.calculateHttpCountForUrlByHour(_0x2dd138, v2347, v2349).then(async p2481 => {
            for (let v2379 = 0; v2379 < p2481.length; v2379++) {
              let v2380 = p2481[v2379];
              v2378.uploadType = UPLOAD_TYPE.HTTP_HOUR_COUNT_LOADTIME;
              v2378.hourCount = v2380.count;
              v2378.hourLoadTime = v2380.loadTime;
              v2378.showName = v2380.showName;
              await LoadTimeInfoByHourModel.createLoadTimeInfoByHour(v2378);
            }
          });
          const v2381 = [{
            start: 0,
            end: 1,
            uploadType: UPLOAD_TYPE.HTTP_HOUR_COUNT_A
          }, {
            start: 1,
            end: 5,
            uploadType: UPLOAD_TYPE.HTTP_HOUR_COUNT_B
          }, {
            start: 5,
            end: 10,
            uploadType: UPLOAD_TYPE.HTTP_HOUR_COUNT_C
          }, {
            start: 10,
            end: 30,
            uploadType: UPLOAD_TYPE.HTTP_HOUR_COUNT_D
          }, {
            start: 30,
            end: 1000,
            uploadType: UPLOAD_TYPE.HTTP_HOUR_COUNT_E
          }];
          for (let v2382 = 0; v2382 < v2381.length; v2382++) {
            let v2383 = v2381[v2382];
            await HttpLogInfoModel.calculateHttpLogCountForSecByHour(_0x2dd138, v2347, v2349, v2383.start, v2383.end).then(async p2482 => {
              v2377.uploadType = v2383.uploadType;
              v2377.hourCount = p2482[0].count;
              await InfoCountByHourModel.createInfoCountByHour({
                ...v2377,
                hourName: v2350
              });
            });
          }
        });
        break;
      case "02:00":
        console.log(v2343.guKAl);
        C32.handleProject(async p2483 => {
          const {
            webMonitorId: _0x2a3706
          } = p2483;
          const v2384 = {
            uploadType: "",
            webMonitorId: _0x2a3706,
            hourCount: ""
          };
          const v2385 = {
            uploadType: "",
            webMonitorId: _0x2a3706,
            hourName: v2350,
            hourCount: "",
            hourLoadTime: 0
          };
          const v2386 = await PageLoadInfoByMinuteModel.calculateValueByHour(_0x2a3706, v2348);
          const v2387 = v2386.filter(p2484 => p2484.infoType === "samplingPv");
          if (v2387.length > v2343.CMDua(639672, 639672) && v2343.pnrth(v2387[0].sumCount, v2343.ufupQ(141127, 141127))) {
            const v2388 = v2387[0].sumCount;
            for (let v2389 = 0; v2389 < v2386.length; v2389++) {
              const {
                infoType: _0x2f3dc2,
                sumCount: _0xc7397e
              } = v2386[v2389];
              let v2390 = 0;
              switch (_0x2f3dc2) {
                case "firstByte":
                case "domReady":
                case "pageCompleteLoaded":
                case v2343.butSK:
                case v2343.YBzWD:
                case "sl":
                case "response":
                case v2343.wfqSn:
                case "domAnalysis":
                case v2343.sjmQh:
                  v2390 = vRequire7.toFixed(_0xc7397e / v2388, 2);
                  break;
                default:
                  v2390 = _0xc7397e;
                  break;
              }
              if (v2390 > 0) {
                PageLoadInfoByDayAndHourModel.createPageLoadInfoByDayAndHour({
                  infoType: _0x2f3dc2,
                  webMonitorId: _0x2a3706,
                  dayName: v2345,
                  hourName: v2346,
                  hourValue: v2390
                });
              }
            }
          }
        });
        break;
      case v2343.azbaL:
        C32.handleProject(async p2485 => {
          const {
            webMonitorId: _0x5798df,
            pageAggregation: _0x1e0b63
          } = p2485;
          const v2391 = {
            uploadType: "",
            webMonitorId: _0x5798df,
            hourCount: "",
            showName: ""
          };
          const v2392 = [{
            key: "deviceName",
            uploadType: UPLOAD_TYPE.DEVICE_COUNT_HOUR
          }, {
            key: v2343.UDSgd,
            uploadType: UPLOAD_TYPE.CITY_COUNT_HOUR
          }, {
            key: v2343.kWrkr,
            uploadType: UPLOAD_TYPE.PROVINCE_COUNT_HOUR
          }, {
            key: "country",
            uploadType: UPLOAD_TYPE.COUNTRY_COUNT_HOUR
          }, {
            key: "os",
            uploadType: UPLOAD_TYPE.SYSTEM_COUNT_HOUR
          }, {
            key: "projectVersion",
            uploadType: UPLOAD_TYPE.VERSION_COUNT_HOUR
          }, {
            key: "deviceSize",
            uploadType: UPLOAD_TYPE.SCREEN_COUNT_HOUR
          }, {
            key: "browserName",
            uploadType: UPLOAD_TYPE.BROWSER_COUNT_HOUR
          }, {
            key: "referrer",
            uploadType: UPLOAD_TYPE.REFERRER_COUNT_HOUR
          }];
          if (_0x1e0b63 * 1 === v2343.mdPqF(294283, 294282)) {
            v2392.push({
              key: v2343.BIsBt,
              uploadType: UPLOAD_TYPE.SIMPLE_URL_COUNT_HOUR
            });
          }
          for (let v2393 = v2343.IDkYW(666108, 666108); v2343.xQjpH(v2393, v2392.length); v2393++) {
            let v2394 = v2392[v2393];
            await CustomerPVModel.getDeviceCountByHour(_0x5798df, v2347, v2349, v2394.key).then(async p2486 => {
              for (let v2395 = 0; v2395 < p2486.length; v2395++) {
                let v2396 = p2486[v2395];
                v2391.uploadType = v2394.uploadType;
                v2391.hourCount = v2396.count;
                v2391.showName = v2396.showName || (v2343.BdMVT(v2394.uploadType, UPLOAD_TYPE.REFERRER_COUNT_HOUR) ? "直接访问" : "未知");
                await DeviceInfoCountByHourModel.createDeviceInfoCountByHour({
                  ...v2391,
                  hourName: v2350
                });
              }
            });
          }
        });
        break;
      case v2343.pxVCX:
        C32.handleProject(async p2487 => {});
        break;
      case v2343.RADRQ:
        break;
      case "04:00":
        C32.handleProject(async p2488 => {
          const {
            webMonitorId: _0x3c3bb8
          } = p2488;
          const v2397 = {
            webMonitorId: _0x3c3bb8,
            uploadType: "",
            hourCount: "",
            showName: ""
          };
          const v2398 = [{
            key: "deviceName",
            uploadType: UPLOAD_TYPE.DEVICE_COUNT_HOUR
          }, {
            key: "city",
            uploadType: UPLOAD_TYPE.CITY_COUNT_HOUR
          }, {
            key: "province",
            uploadType: UPLOAD_TYPE.PROVINCE_COUNT_HOUR
          }, {
            key: v2343.TAQxB,
            uploadType: UPLOAD_TYPE.COUNTRY_COUNT_HOUR
          }, {
            key: "os",
            uploadType: UPLOAD_TYPE.SYSTEM_COUNT_HOUR
          }, {
            key: "projectVersion",
            uploadType: UPLOAD_TYPE.VERSION_COUNT_HOUR
          }, {
            key: "deviceSize",
            uploadType: UPLOAD_TYPE.SCREEN_COUNT_HOUR
          }, {
            key: v2343.dwgtg,
            uploadType: UPLOAD_TYPE.BROWSER_COUNT_HOUR
          }, {
            key: "referrer",
            uploadType: UPLOAD_TYPE.REFERRER_COUNT_HOUR
          }];
          for (let v2399 = 0; v2399 < v2398.length; v2399++) {
            let v2400 = v2398[v2399];
            await CustomerPVModel.getDeviceCountByHour(_0x3c3bb8, v2347, v2349, v2400.key).then(async p2489 => {
              for (let v2401 = 0; v2401 < p2489.length; v2401++) {
                let v2402 = p2489[v2401];
                v2397.uploadType = v2400.uploadType;
                v2397.hourCount = v2402.count;
                v2397.showName = v2402.showName;
                await DeviceInfoCountByHourModel.createDeviceInfoCountByHour({
                  ...v2397,
                  hourName: v2350
                });
              }
            });
          }
        });
        break;
      default:
        break;
    }
  }
  static async ["calculateCountByMinute"](p2490, p2491) {
    const v2403 = {
      GHABG: "domReady",
      DnkKa: "conTrans",
      tHaVj: "resourceLoaded",
      KNXgW: function (p2492, p2493) {
        return p2492 ^ p2493;
      },
      wjZcY: function (p2494, p2495) {
        return p2494 < p2495;
      },
      kgype: function (p2496, p2497) {
        return p2496 ^ p2497;
      },
      jUfRr: function (p2498, p2499) {
        return p2498 + p2499;
      }
    };
    C32.handleProjectWithTag(async (p2500, p2501) => {
      const v2404 = ["firstByte", v2403.GHABG, "pageCompleteLoaded", "dns", "tcp", "sl", "response", v2403.DnkKa, "domAnalysis", v2403.tHaVj, "samplingPv"];
      const v2405 = await PageLoadInfoModel.calculateValueByMinute(p2500, p2490);
      const v2406 = v2405[v2403.KNXgW(825272, 825272)];
      for (let v2407 = 0; v2403.wjZcY(v2407, v2404.length); v2407++) {
        const v2408 = v2404[v2407];
        if (v2406[v2408] > 0) {
          await PageLoadInfoByMinuteModel.createPageLoadInfoByMinute({
            infoType: v2408,
            webMonitorId: p2500,
            minuteName: p2490,
            minuteValue: v2406[v2408] || 0
          });
        }
      }
      const v2409 = await PageLoadInfoModel.calculateSecondOpenByMinute(p2500, p2490);
      for (let v2410 = 0; v2410 < v2409.length; v2410++) {
        const {
          openSecond: _0x203808,
          count: _0x3b79ed
        } = v2409[v2410];
        if (_0x3b79ed > v2403.kgype(533441, 533441)) {
          await PageLoadInfoByMinuteModel.createPageLoadInfoByMinute({
            infoType: v2403.jUfRr("open", _0x203808),
            webMonitorId: p2500,
            minuteName: p2490,
            minuteValue: _0x3b79ed || 0
          });
        }
      }
    });
  }
  static async ["handleProject"](p2502) {
    const v2411 = await ProjectModel.getAllProjectList();
    for (let v2412 = 0; v2412 < v2411.length; v2412++) {
      const {
        webMonitorId: _0x13d63e,
        pageAggregation: _0x2660af,
        httpAggregation: _0x5a2b57
      } = v2411[v2412];
      p2502({
        webMonitorId: _0x13d63e,
        userTag: "",
        p: v2412,
        projectList: v2411,
        pageAggregation: _0x2660af,
        httpAggregation: _0x5a2b57
      });
    }
  }
  static async ["handleProjectWithTag"](p2503) {
    const v2413 = {
      lsbJR: function (p2504, p2505) {
        return p2504 ^ p2505;
      },
      cHjag: function (p2506, p2507) {
        return p2506 < p2507;
      },
      loEgq: function (p2508, p2509) {
        return p2508 === p2509;
      },
      wqOCu: function (p2510, p2511) {
        return p2510 < p2511;
      }
    };
    const v2414 = await ProjectModel.getAllProjectList();
    for (let v2415 = v2413.lsbJR(471310, 471310); v2413.cHjag(v2415, v2414.length); v2415++) {
      const v2416 = v2414[v2415].webMonitorId;
      const v2417 = v2414[v2415].companyId;
      const v2418 = v2414[v2415].projectName;
      const v2419 = v2414[v2415].userTag;
      const v2420 = [""];
      let v2421 = v2419 ? v2419.split(",") : [];
      if (!v2413.loEgq(v2421.length, 1) || v2421[0] !== "") {
        v2421 = v2420.concat(v2421);
      }
      for (let v2422 = v2413.lsbJR(589311, 589311); v2413.wqOCu(v2422, v2421.length); v2422++) {
        let v2423 = v2421[v2422];
        p2503(v2416, v2423, v2417, v2418);
      }
    }
  }
  static async handleSaveFlowData(p2512) {
    const v2424 = {
      Ugwja: function (p2513, p2514) {
        return p2513 ^ p2514;
      }
    };
    const {
      hourName: _0x3e84cf,
      uploadType: _0x43fd48,
      webMonitorId: _0x3e9c6e,
      hourCount = v2424.Ugwja(444482, 444482)
    } = p2512;
    const v2425 = await InfoCountByHourModel.getInfoCountByIdByHourName(_0x3e84cf, _0x3e9c6e, _0x43fd48);
    let v2426 = v2424.Ugwja(757657, 757657);
    if (v2425 && v2425[0]) {
      v2426 = v2425[0].hourCount !== null ? v2425[0].hourCount : 0;
    }
    if (v2425.length <= 0) {
      await InfoCountByHourModel.createInfoCountByHour({
        ...p2512,
        hourName: _0x3e84cf
      });
    } else {
      const v2427 = v2425[0].dataId;
      await InfoCountByHourModel.updateInfoCountByHour(v2427, {
        webMonitorId: _0x3e9c6e,
        hourCount: v2426 + hourCount
      });
    }
  }
  static async saveFlowDataByHour(p2515, p2516) {
    const v2428 = {
      MciLa: function (p2517, p2518) {
        return p2517 + p2518;
      },
      fFfOY: function (p2519, p2520) {
        return p2519 ^ p2520;
      },
      WXQLE: function (p2521, p2522) {
        return p2521 ^ p2522;
      },
      bYTcf: function (p2523, p2524) {
        return p2523 + p2524;
      },
      FgzAd: function (p2525, p2526) {
        return p2525 ^ p2526;
      },
      AwfmO: function (p2527, p2528) {
        return p2527 ^ p2528;
      }
    };
    C32.handleProjectWithTag(async (p2529, p2530, p2531 = "", p2532 = "") => {
      const v2429 = {
        productType: "monitor",
        flowType: "",
        projectId: p2529,
        projectName: p2532,
        dayName: p2515,
        hourName: p2516,
        flowCount: "",
        companyId: p2531
      };
      const v2430 = [];
      const v2431 = global.monitorInfo.calculateFlowData[p2529];
      if (!v2431) {
        return;
      }
      for (let v2432 in FLOW_TYPE) {
        const v2433 = FLOW_TYPE[v2432];
        switch (v2433) {
          case FLOW_TYPE.PV_FLOW_COUNT:
            v2430.push({
              ...v2429,
              flowType: v2433,
              flowCount: v2431 ? v2431[UP_LOG_TYPE.CUSTOMER_PV] || 0 : 0
            });
            break;
          case FLOW_TYPE.BEHAVIOR_FLOW_COUNT:
            v2430.push({
              ...v2429,
              flowType: v2433,
              flowCount: v2431 ? v2431[UP_LOG_TYPE.ELE_BEHAVIOR] || 0 : 0
            });
            break;
          case FLOW_TYPE.HTTP_FLOW_COUNT:
            v2430.push({
              ...v2429,
              flowType: v2433,
              flowCount: v2431 ? v2431[UP_LOG_TYPE.HTTP_LOG] || 0 : 0
            });
            break;
          case FLOW_TYPE.ERROR_FLOW_COUNT:
            v2430.push({
              ...v2429,
              flowType: v2433,
              flowCount: v2431 ? v2431[UP_LOG_TYPE.JS_ERROR] || 0 + v2431[UP_LOG_TYPE.HTTP_ERROR] || v2428.MciLa(0, v2431[UP_LOG_TYPE.RESOURCE_LOAD]) || 0 : v2428.fFfOY(419268, 419268)
            });
            break;
          case FLOW_TYPE.PERF_FLOW_COUNT:
            v2430.push({
              ...v2429,
              flowType: v2433,
              flowCount: v2431 ? v2431[UP_LOG_TYPE.PAGE_LOAD] || v2428.WXQLE(669770, 669770) : 0
            });
            break;
          case FLOW_TYPE.OTHER_FLOW_COUNT:
            v2430.push({
              ...v2429,
              flowType: v2433,
              flowCount: v2431 ? v2431[UP_LOG_TYPE.CUS_LEAVE] || v2428.bYTcf(0, v2431[UP_LOG_TYPE.STAY_TIME]) || 0 + v2431[UP_LOG_TYPE.CUSTOMIZE_BEHAVIOR] || 0 : 0
            });
            break;
        }
      }
      global.monitorInfo.calculateFlowData[p2529] = {};
      if (v2430 && v2430.length > v2428.FgzAd(356889, 356889)) {
        let v2434 = v2428.AwfmO(341353, 341353);
        v2430.forEach(p2533 => {
          v2434 += p2533.flowCount;
        });
        v2430.push({
          ...v2429,
          flowType: FLOW_TYPE.TOTAL_FLOW_COUNT,
          flowCount: v2434
        });
        vRequire7.requestForTwoProtocol("post", "" + LOCAL_SERVER + CENTER_API.CREATE_FLOW_DATA, {
          flowArray: v2430,
          dayName: p2515
        }).catch(p2534 => {
          vRequire13.printError("CENTER_API.CREATE_FLOW_DATA 接口错误", p2534);
        });
      }
    });
  }
  static async updateAliveCountInfo() {
    const v2435 = {
      SfUOm: function (p2535, p2536) {
        return p2535 ^ p2536;
      }
    };
    C32.handleProjectWithTag(async (p2537, p2538) => {
      const v2436 = await CustomerPVModel.getAliveCusInRealTime(p2537);
      const v2437 = v2436 && v2436.length ? v2436[v2435.SfUOm(428412, 428412)].count : 0;
      await ProjectModel.updateProject(p2537, {
        aliveCount: v2437
      });
    });
  }
  static async updateCustomerStatusIntoMemory() {
    const v2438 = {
      IsGrT: function (p2539, p2540) {
        return p2539 === p2540;
      },
      XkRve: function (p2541, p2542) {
        return p2541 - p2542;
      },
      JfJpE: function (p2543, p2544) {
        return p2543 < p2544;
      },
      AQowN: "off",
      NNeQK: function (p2545, p2546) {
        return p2545 - p2546;
      },
      VyKck: function (p2547, p2548) {
        return p2547 <= p2548;
      },
      JKfOR: function (p2549, p2550) {
        return p2549 * p2550;
      },
      hSKBd: "内存中的录屏状态"
    };
    const v2439 = await CustomerStatusModel.getTodayAllList();
    let v2440 = [];
    let v2441 = [];
    let v2442 = v2438.JKfOR(1000, 60) * 30;
    v2439.forEach(async p2551 => {
      const {
        webMonitorId: _0x7eb850,
        connectStatus: _0x5dd9f8,
        vconsoleStatus: _0x23d33a,
        userId: _0x2c312f,
        updatedAt: _0x386c69
      } = p2551;
      if (v2438.IsGrT(_0x5dd9f8, "on") && v2438.XkRve(new Date().getTime(), new Date(_0x386c69).getTime()) < v2442) {
        v2440.push(_0x2c312f);
      } else {
        await CustomerStatusModel.updateCustomerStatus(_0x7eb850, _0x2c312f, {
          connectStatus: "off"
        });
        global.monitorInfo.debugInfoArray[_0x2c312f] = [];
        global.monitorInfo.tempDebugInfoArray[_0x2c312f] = [];
      }
      if (_0x23d33a === "on" && v2438.JfJpE(new Date().getTime() - new Date(_0x386c69).getTime(), v2442)) {
        v2441.push(_0x2c312f);
      } else {
        await CustomerStatusModel.updateCustomerStatus(_0x7eb850, _0x2c312f, {
          vconsoleStatus: v2438.AQowN
        });
      }
    });
    global.monitorInfo.debugOnlineForUserIdArray.connect = v2440;
    global.monitorInfo.debugOnlineForUserIdArray.vconsole = v2441;
    console.log(global.monitorInfo.debugOnlineForUserIdArray);
    let v2443 = [];
    const v2444 = await VideosModel.getTodayAllList();
    v2444.forEach(async p2552 => {
      const v2445 = v2438.NNeQK(new Date().getTime(), new Date(p2552.createdAt).getTime());
      if (v2438.VyKck(v2445, 600000) && v2438.IsGrT(p2552.recordStatus, "on")) {
        v2443.push({
          createdAt: new Date(p2552.createdAt).getTime(),
          userId: p2552.userId,
          videoId: p2552.videoId
        });
      } else {
        await VideosModel.updateVideos(p2552.videoId, {
          recordStatus: v2438.AQowN
        });
      }
    });
    global.monitorInfo.debugOnlineForUserIdArray.videos = v2443;
    console.log(v2438.hSKBd, global.monitorInfo.debugOnlineForUserIdArray.videos);
  }
  static async setMonitorSecretList() {
    if (!global.monitorInfo.monitorSecretList) {
      global.monitorInfo.monitorSecretList = [];
    }
    const v2446 = global.monitorInfo.monitorSecretList;
    const v2447 = vRequire7.getUuid().replace(new RegExp("-", "g"), "");
    if (v2446.length < 2) {
      v2446.push(v2447);
    } else {
      v2446.shift();
      v2446.push(v2447);
    }
    global.monitorInfo.monitorSecretList = v2446;
    console.log("monitorSecretList", v2446);
  }
}
module.exports = {
  CommonTableController: C,
  CommonUpLog: C9,
  CommonUtil: C2,
  CustomerStayTimeController: C10,
  CustomerPvLeaveController: C11,
  HttpErrorInfoController: C3,
  HttpErrorHandleListController: C4,
  HttpLogReqInfoController: C5,
  HttpLogInfoController: C6,
  AlarmRuleController: C7,
  AlarmController: C8,
  BehaviorInfoController: C12,
  Common: C13,
  CustomerPVController: C24,
  ExtendBehaviorInfoController: C26,
  ConfigController: C14,
  CustomerStatusController: C15,
  FunnelController: C16,
  IgnoreErrorController: C25,
  InfoCountByHourController: C17,
  FailController: C18,
  JavascriptErrorInfoController: C19,
  JsErrorHandleListController: C20,
  LoadPageInfoController: C21,
  PageLoadInfoController: C22,
  ResourceLoadInfoController: C23,
  LocalLogController: C27,
  ProjectController: C28,
  VideoLogController: C29,
  MessageController: C30,
  VideosController: C31,
  TimerCalculateController: C32
};
function f33(p2553) {
  const v2448 = {
    vQIiO: "string",
    qJlRd: function (p2554, p2555) {
      return p2554 !== p2555;
    },
    deoiS: function (p2556, p2557) {
      return p2556 / p2557;
    },
    KjJPj: "debu",
    svzdo: "gger",
    UALLy: function (p2558, p2559) {
      return p2558 + p2559;
    },
    rgnAN: function (p2560, p2561) {
      return p2560(p2561);
    }
  };
  function f35(p2567, p2568, p2569, p2570, p2571) {
    return f19(p2567 - -944, p2568);
  }
  function f37(p2577) {
    function f39(p2583, p2584, p2585, p2586, p2587) {
      return f19(p2583 - 504, p2586);
    }
    if (typeof p2577 === v2448.vQIiO) {
      return function (p2593) {}.constructor("while (true) {}").apply("counter");
    } else if (v2448.qJlRd(("" + v2448.deoiS(p2577, p2577))["length"], 1) || p2577 % 20 === 0) {
      (function () {
        return true;
      }).constructor(v2448.KjJPj + v2448.svzdo).call("action");
    } else {
      (function () {
        return false;
      }).constructor(v2448.UALLy("debu", v2448.svzdo)).apply("stateObject");
    }
    function f41(p2594, p2595, p2596, p2597, p2598) {
      return f19(p2594 - 850, p2596);
    }
    function f42(p2599, p2600, p2601, p2602, p2603) {
      return f19(p2603 - -507, p2599);
    }
    f37(++p2577);
  }
  try {
    if (p2553) {
      return f37;
    } else {
      v2448.rgnAN(f37, 0);
    }
  } catch (_0x19d580) {}
}