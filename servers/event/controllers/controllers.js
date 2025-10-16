(function (p, p2) {
  const vP = p();
  function f(p3, p4, p5, p6, p7) {
    return f22(p3 - -672, p4);
  }
  function f2(p8, p9, p10, p11, p12) {
    return f10(p10 - 310, p12);
  }
  function f3(p13, p14, p15, p16, p17) {
    return f22(p17 - 614, p16);
  }
  function f4(p18, p19, p20, p21, p22) {
    return f10(p20 - 908, p19);
  }
  function f5(p23, p24, p25, p26, p27) {
    return f22(p26 - 143, p25);
  }
  function f6(p28, p29, p30, p31, p32) {
    return f22(p28 - -219, p29);
  }
  function f7(p33, p34, p35, p36, p37) {
    return f22(p34 - 843, p35);
  }
  function f8(p38, p39, p40, p41, p42) {
    return f10(p38 - -179, p41);
  }
  function f9(p43, p44, p45, p46, p47) {
    return f10(p47 - -911, p46);
  }
  do {
    try {
      const v = -parseInt(f2(-251, 4085, 3389, 3486, "7rkw")) / 1 + -parseInt(f2(4430, 3812, 3719, 1613, "%syT")) / 2 + -parseInt(f6(5199, 5102, 6568, 3526, 5856)) / 3 + parseInt(f2(1356, 3950, 658, 2334, "R$7A")) / 4 + -parseInt(f6(-81, 1745, 1185, -918, -3649)) / 5 * (-parseInt(f(4463, 5610, 6606, 4367, 5949)) / 6) + parseInt(f(3335, 1692, 4440, 5030, 743)) / 7 + parseInt(f2(3208, 3205, 2987, 3818, "nFDG")) / 8 * (parseInt(f(4259, 5407, 3468, 6677, 6927)) / 9);
      if (v === p2) {
        break;
      } else {
        vP.push(vP.shift());
      }
    } catch (_0x26708d) {
      vP.push(vP.shift());
    }
  } while (true);
})(f34, 817763);
function f10(p48, p49) {
  const v_0x5f57 = f34();
  f10 = function (p50, p51) {
    p50 = p50 - 0;
    let v2 = v_0x5f57[p50];
    if (f10.Bifpsl === undefined) {
      function f11(p52) {
        const v3 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let v4 = "";
        let v5 = "";
        for (let v6 = 0, v7, v8, v9 = 0; v8 = p52.charAt(v9++); ~v8 && (v7 = v6 % 4 ? v7 * 64 + v8 : v8, v6++ % 4) ? v4 += String.fromCharCode(v7 >> (v6 * -2 & 6) & 255) : 0) {
          v8 = v3.indexOf(v8);
        }
        for (let v10 = 0, v11 = v4.length; v10 < v11; v10++) {
          v5 += "%" + ("00" + v4.charCodeAt(v10).toString(16)).slice(-2);
        }
        return decodeURIComponent(v5);
      }
      const vF = function (p53, p54) {
        let v12 = [];
        let v13 = 0;
        let v14;
        let v15 = "";
        p53 = f11(p53);
        let v16;
        for (v16 = 0; v16 < 256; v16++) {
          v12[v16] = v16;
        }
        for (v16 = 0; v16 < 256; v16++) {
          v13 = (v13 + v12[v16] + p54.charCodeAt(v16 % p54.length)) % 256;
          v14 = v12[v16];
          v12[v16] = v12[v13];
          v12[v13] = v14;
        }
        v16 = 0;
        v13 = 0;
        for (let v17 = 0; v17 < p53.length; v17++) {
          v16 = (v16 + 1) % 256;
          v13 = (v13 + v12[v16]) % 256;
          v14 = v12[v16];
          v12[v16] = v12[v13];
          v12[v13] = v14;
          v15 += String.fromCharCode(p53.charCodeAt(v17) ^ v12[(v12[v16] + v12[v13]) % 256]);
        }
        return v15;
      };
      f10.HGMIRg = vF;
      p48 = arguments;
      f10.Bifpsl = true;
    }
    const v18 = v_0x5f57[0];
    const v19 = p50 + v18;
    const v20 = p48[v19];
    if (!v20) {
      if (f10.ROMimn === undefined) {
        f10.ROMimn = true;
      }
      v2 = f10.HGMIRg(v2, p51);
      p48[v19] = v2;
    } else {
      v2 = v20;
    }
    return v2;
  };
  return f10(p48, p49);
}
undefined;
(function () {
  function f13(p61, p62, p63, p64, p65) {
    return f10(p64 - -513, p62);
  }
  const v25 = {
    odIMa: f14("mXrC", 4447, 3012, 4380, 7553),
    DKGii: function (p66, p67) {
      return p66(p67);
    },
    nItwL: function (p68, p69) {
      return p68 + p69;
    },
    lKTYW: f13(7011, "O25j", 6324, 4794, 1730),
    uPcKn: function (p70, p71) {
      return p70 + p71;
    }
  };
  function f14(p72, p73, p74, p75, p76) {
    return f10(p75 - -871, p72);
  }
})();
const vRequire = require("colors");
const vRequire2 = require("node-xlsx");
const vRequire3 = require("../util/utils");
const vRequire4 = require("../util/utils");
const vRequire5 = require("../util/commonSql");
const vRequire6 = require("../../../util_cus");
const v29 = require("node-ip2region").create();
const vRequire7 = require("../../../config/log");
const vRequire8 = require("../../../middlreware/loggerUpload");
const vRequire9 = require("../util/status-code");
const {
  UPLOAD_TYPE,
  RETENTION_CALC_INFO,
  WEEK_NAME
} = require("../config/consts");
const vRequire10 = require("node-fetch");
const vRequire11 = require("jsonwebtoken");
const v30 = vRequire11.verify;
const vRequire12 = require("crypto");
const vRequire13 = require("../config/secret");
const {
  USER_INFO,
  DANGER_SQL_PARAMS,
  FLOW_TYPE,
  CENTER_API,
  LOCAL_SERVER
} = require("../config/consts");
const fs2 = require("fs");
const vRequire14 = require("path");
const ip = require("ip");
const vRequire15 = require("systeminformation");
const vRequire16 = require("getmac");
const vRequire17 = require("koa-send");
const vRequire18 = require("child_process");
const vRequire19 = require("nodemailer");
const vRequire20 = require("formidable");
const vRequire21 = require("lodash");
const vRequire22 = require("../config/AccountConfig");
const vRequire23 = require("../lib/RabbitMQ");
const vRequire24 = require("child_process");
function f22(p112, p113) {
  const v_0x5f572 = f34();
  f22 = function (p114, p115) {
    p114 = p114 - 0;
    let v31 = v_0x5f572[p114];
    if (f22.uufVQe === undefined) {
      function f23(p116) {
        const v32 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let v33 = "";
        let v34 = "";
        for (let v35 = 0, v36, v37, v38 = 0; v37 = p116.charAt(v38++); ~v37 && (v36 = v35 % 4 ? v36 * 64 + v37 : v37, v35++ % 4) ? v33 += String.fromCharCode(v36 >> (v35 * -2 & 6) & 255) : 0) {
          v37 = v32.indexOf(v37);
        }
        for (let v39 = 0, v40 = v33.length; v39 < v40; v39++) {
          v34 += "%" + ("00" + v33.charCodeAt(v39).toString(16)).slice(-2);
        }
        return decodeURIComponent(v34);
      }
      f22.MlZBnP = f23;
      p112 = arguments;
      f22.uufVQe = true;
    }
    const v41 = v_0x5f572[0];
    const v42 = p114 + v41;
    const v43 = p112[v42];
    if (!v43) {
      v31 = f22.MlZBnP(v31);
      p112[v42] = v31;
    } else {
      v31 = v43;
    }
    return v31;
  };
  return f22(p112, p113);
}
undefined;
const {
  spawn,
  exec,
  execFile
} = require("child_process");
const {
  accountInfo
} = vRequire22;
const vRequire25 = require("../config/consts");
const {
  MANAGE_API
} = vRequire25;
const {
  transliteration,
  slugify
} = require("transliteration");
const vRequire26 = require("../config/constMsg");
const v45 = accountInfo.messageQueue.enable === true ? new vRequire23() : null;
const vRequire27 = require("../metadata/weFieldList");
const vRequire28 = require("../metadata/wePointList");
const vRequire29 = require("../metadata/weCardList");
const vRequire30 = require("../metadata/weTemplateList");
const vRequire31 = require("../metadata/weCalculateFieldList");
const vRequire32 = require("../../../alarm/index");
const vRequire33 = require("../metadata/demo/baseTemplateCardList");
const vRequire34 = require("../metadata/weNewTemplateList");
const vRequire35 = require("../metadata/weVisualizationPointList");
const vRequire36 = require("../metadata/demo/userAnalysisBaseTemplateCardList");
const v46 = ["d", "i", "l", "a", "v", "e", "d", "o", "c", "t", "n", "e", "v", "e"].reverse().join("");
const v_0x17fb83 = "http://www.webfunny.cn";
const {
  checkRateLimit,
  getClientIp
} = require("../util/rateLimitUtil");
const vF21 = "servers/event/lib/dataTempUploads/";
const {
  BuryPointAlarmModel,
  BuryPointCardModel,
  BuryPointAlarmMessageModel,
  BuryPointCardStatisticsModel,
  BuryPointFailLogModel,
  BuryPointCircleSelectModel,
  BuryPointFieldModel,
  BuryPointProjectModel,
  BuryPointRelationModel,
  BuryPointScreenShotModel,
  SdkReleaseModel,
  BuryPointTaskModel,
  BuryPointTemplateModel,
  BuryPointUserBehaviorRelationModel,
  BuryPointVisualTrackingModel,
  BuryPointWarehouseModel,
  CardStatisticModel,
  ConfigModel,
  MessageModel,
  CommonModel: CommonModel,
  UserModel,
  TeamModel
} = require("../modules/models.js");
class C {
  static async checkStatus(p136) {
    const v47 = {
      nyDDn: function (p137, p138) {
        return p137 !== p138;
      },
      uvMDF: "激活码失效了，请联系我们，微信号：webfunny2、webfunny_2020。",
      sYuBq: function (p139, p140) {
        return p139 ^ p140;
      }
    };
    const v48 = global.eventInfo;
    if (v47.nyDDn(v48.purchaseCodeValid, v46)) {
      p136.response.status = 200;
      p136.body = vRequire9.SUCCESS_200(v47.uvMDF, false);
      return false;
    }
    if (v48.logServerStatus !== true) {
      p136.response.status = v47.sYuBq(851799, 851871);
      p136.body = vRequire9.SUCCESS_200("服务已暂停", false);
      return false;
    }
  }
  static async ["initFunnelConfig"](p141) {
    const v49 = {
      CtCKn: function (p142, p143) {
        return p142 ^ p143;
      },
      nZeRs: function (p144, p145) {
        return p144 < p145;
      },
      ILMxg: "success"
    };
    const v50 = p141.request.body;
    const {
      projectId: _0x18d042,
      userId: _0x263da4,
      nickname: _0xec18b4
    } = v50;
    vRequire3.setFixedLengthQueue(_0x18d042, {
      userId: _0x263da4,
      nickname: _0xec18b4
    });
    let v51 = await BuryPointCircleSelectModel.getInitDataByProjectId(_0x18d042);
    let v52 = [];
    for (let v53 = v49.CtCKn(451897, 451897); v49.nZeRs(v53, v51.length); v53++) {
      let v54 = v51[v53];
      let v55 = {
        projectId: v54.projectId,
        createUserId: v54.createUserId,
        createBy: v54.createBy,
        bindUserId: v54.bindUserId,
        bindBy: v54.bindBy
      };
      v52.push(v55);
    }
    let v56 = await BuryPointVisualTrackingModel.getInitDataByProjectId(_0x18d042);
    let v57 = [];
    for (let v58 = 0; v58 < v56.length; v58++) {
      let v59 = v56[v58];
      let v60 = {
        path: v59.path,
        xPath: v59.xPath,
        eventType: v59.eventType,
        happenPage: v59.happenPage,
        replacePointIdKey: v59.replacePointIdKey,
        pointId: v59.pointId,
        projectId: v59.projectId
      };
      v57.push(v60);
    }
    const v61 = global.eventInfo.eventSecretList[global.eventInfo.eventSecretList.length - 1];
    const v62 = C3.encryptSignature(v61);
    const v63 = {
      userInfo: v52,
      marquee: v57,
      signature: v62
    };
    p141.response.status = 200;
    p141.body = vRequire9.SUCCESS_200(v49.ILMxg, v63);
  }
  static async upEvent(p146) {
    const v64 = {
      flYav: function (p147, p148) {
        return p147 ^ p148;
      },
      cunzT: function (p149, p150) {
        return p149 ^ p150;
      },
      vvDlk: function (p151, p152) {
        return p151 === p152;
      },
      dZoOh: function (p153, p154) {
        return p153 == p154;
      },
      pfKIE: "object",
      PhNDX: "上报接口报错"
    };
    global.eventInfo.logCountInMinute++;
    const v65 = global.eventInfo;
    if (v65.purchaseCodeValid !== v46) {
      p146.response.status = 200;
      p146.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.INVALID_MSG1), false);
      return;
    }
    let v66 = p146.request.body.data;
    let v67;
    let v68 = p146.req.headers["x-forwarded-for"] || p146.req.connection.remoteAddress || p146.req.socket.remoteAddress || p146.req.connection.socket.remoteAddress;
    const v69 = v68.replace(new RegExp("\\s+", "g"), "").split(",");
    if (v69.length > 1) {
      v68 = v69[v69.length - v64.flYav(146460, 146461)];
    } else {
      v68 = v69[v64.cunzT(816822, 816822)];
    }
    if (v66) {
      v67 = vRequire3.logParseJson(v66);
    } else {
      v67 = vRequire3.logParseJson(p146.request.body);
    }
    v67.weIp = v68;
    v67.weCountry = "";
    v67.weProvince = "";
    v67.weCity = "";
    try {
      const v70 = await v29.btreeSearchSync(v68 || "255.255.255.255");
      if (v70) {
        const {
          region: _0x1c94ce
        } = v70;
        const v71 = _0x1c94ce.split("|");
        v67.weCountry = v71[0] || "中国";
        v67.weProvince = v71[2] || "未知";
        v67.weCity = v71[3] || "未知";
      }
    } catch (_0x49a3c6) {
      vRequire7.printError("IP定位失败" + v68 + "：", _0x49a3c6);
    }
    const {
      projectId: _0x1cba4c,
      pointId: _0x4cdded
    } = v67;
    let v72 = "";
    try {
      const {
        messageQueue: _0x48c739
      } = accountInfo;
      if (v64.vvDlk(_0x48c739.enable, true)) {
        const v73 = JSON.stringify(v67);
        v45.sendQueueMsg("webfunny_event_logs", v73, p155 => {}, p156 => {
          vRequire7.printError("消息队列推送报错: ", p156);
        });
      } else {
        C.handleUpEventData(v67, "");
      }
    } catch (_0x272f52) {
      const v74 = v64.dZoOh(typeof v72, v64.pfKIE) ? JSON.stringify(v72) : v72;
      vRequire7.printError(v64.PhNDX);
      vRequire7.printError(v74);
      vRequire7.printError("堆栈 -- ", _0x272f52);
    } finally {
      let v75 = await C6.getCardAndPointList(_0x1cba4c);
      p146.response.status = v64.cunzT(788608, 788552);
      p146.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.UPEVENT_SUCCESS), v75);
    }
  }
  static async ["upEvents"](p157) {
    const v76 = {
      noYYZ: function (p158, p159) {
        return p158 > p159;
      },
      qSOHS: function (p160, p161) {
        return p160 - p161;
      },
      wybDA: function (p162, p163) {
        return p162 === p163;
      },
      XjswP: function (p164, p165) {
        return p164 ^ p165;
      },
      rGtHK: "(cloud)很遗憾，流量用完了。",
      uYNok: "webfunny_log_sys",
      UWKEg: "upEvents LoggerUpload error",
      mWYIO: function (p166, p167) {
        return p166 || p167;
      },
      VnEZN: "255.255.255.255",
      BuxUC: "object"
    };
    const v77 = global.eventInfo.eventSecretList[global.eventInfo.eventSecretList.length - 1];
    const v78 = C3.encryptSignature(v77);
    const v79 = global.eventInfo;
    if (v79.purchaseCodeValid !== v46) {
      p157.response.status = 200;
      p157.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.INVALID_MSG1), {
        signature: v78
      });
      return;
    }
    let v80 = p157.request.body.data;
    let v81;
    let v82 = p157.req.headers["x-forwarded-for"] || p157.req.connection.remoteAddress || p157.req.socket.remoteAddress || p157.req.connection.socket.remoteAddress;
    const v83 = v82.replace(new RegExp("\\s+", "g"), "").split(",");
    if (v76.noYYZ(v83.length, 1)) {
      v82 = v83[v76.qSOHS(v83.length, 1)];
    } else {
      v82 = v83[0];
    }
    if (v80) {
      v81 = vRequire3.logParseJson(v80);
    } else {
      v81 = vRequire3.logParseJson(p157.request.body);
    }
    if (v81 && v81.length) {
      const {
        projectId: _0x54ea75
      } = v81[0];
      if (v76.wybDA(accountInfo.isCloud, true) && global.eventInfo.invalidProjectIdForCloud && global.eventInfo.invalidProjectIdForCloud.indexOf(_0x54ea75) !== -v76.XjswP(176433, 176432)) {
        p157.response.status = 200;
        p157.body = vRequire9.SUCCESS_200(v76.rGtHK, {
          signature: v78
        });
        return;
      }
      if (global.eventInfo.unLimitCountProduct === true) {
        p157.response.status = 200;
        p157.body = vRequire9.SUCCESS_200("(社区版)很遗憾，今日事件数已达上限。", {
          signature: v78
        });
        return;
      }
      if (v76.wybDA(accountInfo.signature.enable, true)) {
        const v84 = C3.verifySignature(p157, v81[v76.XjswP(770378, 770378)]);
        if (!v84) {
          p157.response.status = 200;
          p157.body = vRequire9.SUCCESS_200("invalid signature", {
            signature: v78
          });
          return;
        }
      }
      global.eventInfo.logCountInMinute++;
      if (vRequire8) {
        try {
          const v85 = v81.map(p168 => p168.pointId);
          const v86 = {
            projectId: v76.uYNok,
            userId: vRequire3.b64DecodeUnicode(v81[0].weUserId),
            secondId: "" + v81[v76.XjswP(222417, 222417)].projectId,
            message: "upEvents接口入参点位ID: " + v85.join(", "),
            content: v81
          };
          vRequire8.log(v86);
        } catch (_0x11e5af) {
          console.error(v76.UWKEg, _0x11e5af);
        }
      }
    }
    let v87 = "";
    let v88 = "";
    let v89 = "";
    try {
      const v90 = await v29.btreeSearchSync(v76.mWYIO(v82, v76.VnEZN));
      if (v90) {
        const {
          region: _0x54f785
        } = v90;
        const v91 = _0x54f785.split("|");
        v87 = v91[0] || "中国";
        v88 = v91[2] || "未知";
        v89 = v91[3] || "未知";
      }
    } catch (_0x179d4f) {
      vRequire7.printError("IP定位失败" + v82 + "：", _0x179d4f);
    }
    let v92 = "";
    v81.forEach(p169 => {
      const v93 = "4|0|2|1|3".split("|");
      let v94 = 0;
      while (true) {
        switch (v93[v94++]) {
          case "0":
            p169.weCountry = v87;
            continue;
          case "1":
            p169.weCity = v89;
            continue;
          case "2":
            p169.weProvince = v88;
            continue;
          case "3":
            v92 = p169.projectId;
            continue;
          case "4":
            p169.weIp = v82;
            continue;
        }
        break;
      }
    });
    let v95 = "";
    try {
      const {
        messageQueue: _0x14cc58
      } = accountInfo;
      if (_0x14cc58.enable === true) {
        v81.forEach(p170 => {
          const v96 = JSON.stringify(p170);
          v45.sendQueueMsg("webfunny_event_logs", v96, p171 => {}, p172 => {
            vRequire7.printError("消息队列推送报错: ", p172);
          });
        });
      } else {
        v81.forEach(p173 => {
          C.handleUpEventData(p173, "");
        });
      }
    } catch (_0xe72c21) {
      const v97 = typeof v95 == v76.BuxUC ? JSON.stringify(v95) : v95;
      vRequire7.printError("上报接口报错");
      vRequire7.printError(v97);
      vRequire7.printError("堆栈 -- ", _0xe72c21);
    } finally {
      p157.response.status = 200;
      p157.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.UPEVENT_SUCCESS), {
        signature: v78
      });
    }
  }
  static async ["upMyEvents"](p174) {
    const v98 = {
      ijxcP: "2|4|1|0|3",
      BEctL: "webfunny_event_logs",
      ObylT: "x-forwarded-for",
      wVOvu: function (p175, p176) {
        return p175 > p176;
      },
      ldLUz: function (p177, p178) {
        return p177 ^ p178;
      },
      pjLIL: function (p179, p180) {
        return p179 ^ p180;
      },
      snQIL: function (p181, p182) {
        return p181 !== p182;
      },
      CUMft: function (p183, p184) {
        return p183 || p184;
      },
      wfgHR: "object",
      RKuzw: "堆栈 -- ",
      GvFME: function (p185, p186) {
        return p185 ^ p186;
      }
    };
    const v99 = global.eventInfo;
    if (v99.purchaseCodeValid !== v46) {
      p174.response.status = 200;
      p174.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.INVALID_MSG1), false);
      return;
    }
    let v100 = p174.request.body.data;
    let v101;
    let v102 = p174.req.headers[v98.ObylT] || p174.req.connection.remoteAddress || p174.req.socket.remoteAddress || p174.req.connection.socket.remoteAddress;
    const v103 = v102.replace(new RegExp("\\s+", "g"), "").split(",");
    if (v98.wVOvu(v103.length, v98.ldLUz(238055, 238054))) {
      v102 = v103[v103.length - 1];
    } else {
      v102 = v103[0];
    }
    if (v100) {
      v101 = vRequire3.logParseJson(v100);
    } else {
      v101 = vRequire3.logParseJson(p174.request.body);
    }
    if (v101 && v101.length) {
      const {
        projectId: _0x3ca0a8
      } = v101[v98.pjLIL(757299, 757299)];
      if (global.eventInfo.invalidProjectIdForCloud && v98.snQIL(global.eventInfo.invalidProjectIdForCloud.indexOf(_0x3ca0a8), -1)) {
        p174.response.status = v98.ldLUz(326763, 326819);
        p174.body = vRequire9.SUCCESS_200("(cloud)很遗憾，流量用完了。", false);
        return;
      }
      global.eventInfo.logCountInMinute += v101.length;
    }
    let v104 = "";
    let v105 = "";
    let v106 = "";
    try {
      const v107 = await v29.btreeSearchSync(v98.CUMft(v102, "255.255.255.255"));
      if (v107) {
        const {
          region: _0x13ae79
        } = v107;
        const v108 = _0x13ae79.split("|");
        v104 = v108[v98.ldLUz(933636, 933636)] || "中国";
        v105 = v108[2] || "未知";
        v106 = v108[3] || "未知";
      }
    } catch (_0x11ae3d) {
      vRequire7.printError("IP定位失败" + v102 + "：", _0x11ae3d);
    }
    let v109 = "";
    v101.forEach(p187 => {
      const v110 = v98.ijxcP.split("|");
      let v111 = 0;
      while (true) {
        switch (v110[v111++]) {
          case "0":
            p187.weCity = v106;
            continue;
          case "1":
            p187.weProvince = v105;
            continue;
          case "2":
            p187.weIp = v102;
            continue;
          case "3":
            v109 = p187.projectId;
            continue;
          case "4":
            p187.weCountry = v104;
            continue;
        }
        break;
      }
    });
    let v112 = "";
    try {
      const {
        messageQueue: _0x3c8fec
      } = accountInfo;
      if (_0x3c8fec.enable === true) {
        v101.forEach(p188 => {
          const v113 = JSON.stringify(p188);
          v45.sendQueueMsg(v98.BEctL, v113, p189 => {}, p190 => {
            vRequire7.printError("消息队列推送报错: ", p190);
          });
        });
      } else {
        v101.forEach(p191 => {
          C.handleUpEventData(p191, "my");
        });
      }
    } catch (_0x1a290) {
      const v114 = typeof v112 == v98.wfgHR ? JSON.stringify(v112) : v112;
      vRequire7.printError("上报接口报错");
      vRequire7.printError(v114);
      vRequire7.printError(v98.RKuzw, _0x1a290);
    } finally {
      p174.response.status = v98.GvFME(157039, 157095);
      p174.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.UPEVENT_SUCCESS), "");
    }
  }
  static async ["handleUpEventData"](p192, p193) {
    const v115 = {
      eazPK: function (p194, p195) {
        return p194 === p195;
      },
      xOFYH: function (p196, p197) {
        return p196 < p197;
      },
      fkwxn: "~wf~",
      TMxOQ: function (p198, p199) {
        return p198 ^ p199;
      },
      cPqJL: "string",
      gxYoT: function (p200, p201) {
        return p200 ^ p201;
      },
      DuVSP: function (p202, p203) {
        return p202 ^ p203;
      },
      sXvlX: function (p204, p205) {
        return p204 + p205;
      },
      PQcJJ: function (p206, p207) {
        return p206 ^ p207;
      },
      sAlXd: function (p208, p209) {
        return p208 > p209;
      },
      qEJoV: function (p210, p211) {
        return p210 ^ p211;
      },
      WhBLV: "float",
      VBjkY: "FLOAT",
      lZcqr: function (p212, p213) {
        return p212 !== p213;
      },
      nAPYp: function (p214, p215) {
        return p214 ^ p215;
      },
      zitDt: "happenTime,",
      COhEW: "weHappenTime",
      VVkIs: "yyyy-MM-dd hh:mm:ss",
      nTKyx: "hh:mm",
      XpqYG: function (p216, p217) {
        return p216 + p217;
      },
      PzAUN: function (p218, p219) {
        return p218 ^ p219;
      },
      cAQQQ: function (p220, p221) {
        return p220 === p221;
      },
      qEpNx: function (p222, p223) {
        return p222 + p223;
      },
      eXfIy: function (p224, p225) {
        return p224 + p225;
      },
      LovCQ: function (p226, p227) {
        return p226 + p227;
      },
      ujwdy: "wehappenhour",
      vNcDL: function (p228, p229) {
        return p228 + p229;
      },
      dgGhQ: "wehappenminute",
      DCRwS: "'',",
      bTzTm: function (p230, p231) {
        return p230 + p231;
      },
      ZzxPT: "weCustomerKey",
      SuNbU: function (p232, p233) {
        return p232 + p233;
      },
      kMBgr: "weUserId",
      ndMmy: "weFirstStepDay"
    };
    const {
      projectId: _0xd8c9bf,
      pointId: _0x36a905
    } = p192;
    let v116 = {};
    let v117 = "";
    for (const v118 in p192) {
      const v119 = p192[v118];
      if (!vRequire3.checkFieldNameValid(v118)) {
        continue;
      }
      v116[v118] = v119;
      try {
        let v120;
        if (v115.eazPK(p193, "my")) {
          v120 = v119;
        } else {
          v120 = vRequire3.b64DecodeUnicode(v119);
          if (v118.toLowerCase() === "werelationfield") {
            let v121 = v120.split("~wf~");
            let v122 = "";
            for (let v123 = 0; v115.xOFYH(v123, v121.length); v123++) {
              v122 += vRequire3.b64DecodeUnicode(v121[v123]) + v115.fkwxn;
            }
            v120 = v122.substring(v115.TMxOQ(840533, 840533), v122.lastIndexOf("~wf~"));
          }
        }
        let v124 = true;
        for (let v125 = v115.TMxOQ(595205, 595205); v125 < DANGER_SQL_PARAMS.length; v125++) {
          let v126 = DANGER_SQL_PARAMS[v125];
          if (typeof v120 === v115.cPqJL && v120.indexOf(v126) !== -v115.gxYoT(335965, 335964)) {
            v120 = v120.replace(v126, "-" + v126 + "-");
            continue;
          }
        }
        p192[v118] = v120;
      } catch (_0xe11236) {
        vRequire7.printError(_0xe11236);
        p192[v118] = v119;
      }
    }
    if (!_0x36a905) {
      let v127 = {
        projectId: _0xd8c9bf
      };
      v127.message = "点位id为空";
      v127.params = JSON.stringify(v116);
      C.addFailLogToQueue(v127);
      return;
    }
    let v128;
    if (global.eventInfo.points[_0x36a905]) {
      v128 = global.eventInfo.points[_0x36a905];
    } else {
      v128 = await BuryPointWarehouseModel.detailByPointId(_0x36a905);
      global.eventInfo.points[_0x36a905] = v128;
    }
    if (!_0xd8c9bf || !_0x36a905) {
      return;
    }
    if (!v128) {
      let v129 = {};
      v129.failType = -v115.DuVSP(407264, 407265);
      v129.projectId = _0xd8c9bf;
      v129.pointId = _0x36a905;
      v129.message = v115.sXvlX(v115.sXvlX("点位id(" + _0x36a905, ")"), "不存在!");
      v129.params = JSON.stringify(v116);
      C.addFailLogToQueue(v129);
      return;
    }
    v117 = v128.pointName;
    let v130;
    let v131 = [];
    let v132 = [];
    if (global.eventInfo.pointAndFields[_0x36a905]) {
      v130 = global.eventInfo.pointAndFields[_0x36a905].weType;
      if (!v130) {
        v130 = v128.weType;
      }
      v131 = global.eventInfo.pointAndFields[_0x36a905].finalFieldList;
      v132 = global.eventInfo.pointAndFields[_0x36a905].buryPointFieldList;
      if (!v131 || v115.eazPK(v131.length, v115.PQcJJ(899225, 899225)) || !vRequire3.isValueInFieldName("weCustomerKey", v131)) {
        v132 = await BuryPointFieldModel.getSomeListByProjectIdAndWeType(v128.fields, "", "");
        const v133 = await BuryPointFieldModel.getSomeListByProjectIdAndWeType("", _0xd8c9bf, 1);
        v131 = [...v132, ...v133];
        let v134 = {
          finalFieldList: v131,
          buryPointFieldList: v132,
          pointId: _0x36a905,
          weType: v130
        };
        global.eventInfo.pointAndFields[_0x36a905] = v134;
      }
    } else {
      let v135 = await C24.updatePointBaseCache(_0x36a905, v117, _0xd8c9bf, v128.fields, v130);
      v132 = v135.buryPointFieldList;
      v131 = v135.finalFieldList;
    }
    let v136 = 1;
    let v137 = "";
    for (let v138 in p192) {
      if (!vRequire3.checkIsSystemField(v138)) {
        const v139 = v132.filter(p234 => p234.fieldName === v138);
        if (v139 && v139.length > v115.PQcJJ(489018, 489018)) {
          const {
            fieldName: _0x121120,
            fieldAlias: _0x5275fd,
            fieldType: _0x418ac0,
            fieldLength: _0x31a978
          } = v139[0];
          const v140 = p192[v138];
          const v141 = typeof v140;
          switch (_0x418ac0) {
            case "varchar":
            case "VARCHAR":
              if (v141 !== "string") {
                v137 += "【" + v138 + "】数据类型不匹配，预期类型：" + _0x418ac0 + "，收到类型：" + v141 + "；值：" + v140 + "；";
                v136 = 2;
              } else if (v115.sAlXd(v140.length, _0x31a978)) {
                v137 += "【" + v138 + "】数据长度超出，预期长度：" + _0x31a978 + "，实际长度：" + v140.length + "；值：" + v140 + "；";
                v136 = 2;
              }
              break;
            case "int":
            case "INT":
              if (v141 !== "number") {
                v137 += "【" + v138 + "】数据类型不匹配，预期类型：" + _0x418ac0 + "，收到类型：" + v141 + "；值：" + v140 + "；";
                v136 = -1;
              } else if (v115.sXvlX(v140, "").indexOf(".") !== -1) {
                v137 += "【" + v138 + "】数据类型不匹配，可能会丢失精度数据，预期类型：" + _0x418ac0 + "，收到类型：FLOAT；值：" + v140 + "；";
                v136 = -v115.qEJoV(669611, 669610);
              }
              break;
            case v115.WhBLV:
            case v115.VBjkY:
              if (v115.lZcqr(v141, "number")) {
                v137 += "【" + v138 + "】数据类型不匹配，预期类型：" + _0x418ac0 + "，收到类型：" + v141 + "；值：" + v140 + "；";
                v136 = -1;
              }
              break;
            default:
              break;
          }
        }
      }
    }
    if (v115.eazPK(v136, -v115.nAPYp(903206, 903207)) || v115.eazPK(v136, v115.nAPYp(145842, 145840))) {
      C.addFailLogToQueue({
        projectId: _0xd8c9bf,
        pointId: _0x36a905,
        failType: v136,
        pointName: v117,
        message: v137,
        params: JSON.stringify(v116)
      });
    }
    if (v136 === -1) {
      console.log("数据异常，无法入库, fieldValidCheck：", v136);
      return;
    }
    let v142 = "";
    let v143 = "(";
    let v144 = [];
    let v145 = _0xd8c9bf + "_" + _0x36a905;
    v142 = v142 + v115.zitDt;
    let v146 = new Date();
    let v147 = !p192.weHappenTime ? v146.getTime() : p192[v115.COhEW];
    let v148 = new Date(v147).Format(v115.VVkIs);
    let v149 = new Date(v147).Format("yyyy-MM-dd");
    let v150 = new Date(v147).Format("hh");
    let v151 = new Date(v147).Format(v115.nTKyx);
    v143 = v115.XpqYG(v143 + "'", v148) + "',";
    for (let v152 = v115.PzAUN(189119, 189119); v152 < v131.length; v152++) {
      const v153 = v131[v152];
      const {
        fieldName: _0x20e68d,
        fieldType: _0x2b6b29
      } = v153;
      if (p192[_0x20e68d] === undefined) {
        if (v115.cAQQQ(_0x2b6b29, "VARCHAR")) {
          if (_0x20e68d.toLowerCase() === "wehappentime") {
            v142 = v142 + "weHappenTime,";
            v143 = v115.qEpNx(v143 + "'" + v148, "',");
          } else if (_0x20e68d.toLowerCase() === "wehappendate") {
            v142 = v115.qEpNx(v142, "weHappenDate,");
            v143 = v115.eXfIy(v115.LovCQ(v143 + "'", v149), "',");
          } else if (v115.eazPK(_0x20e68d.toLowerCase(), v115.ujwdy)) {
            v142 = v115.vNcDL(v142, "weHappenHour,");
            v143 = v143 + "'" + v150 + "',";
          } else if (_0x20e68d.toLowerCase() === v115.dgGhQ) {
            v142 = v142 + "weHappenMinute,";
            v143 = v143 + "'" + v151 + "',";
          } else {
            v142 = v142 + _0x20e68d + ",";
            v143 = v143 + v115.DCRwS;
          }
        } else {
          v142 = v142 + _0x20e68d + ",";
          v143 = v143 + "0,";
        }
      } else if (_0x20e68d.toLowerCase() === "wehappentime") {
        v142 = v115.vNcDL(v142, "weHappenTime,");
        v143 = v115.bTzTm(v115.eXfIy(v143 + "'", v148), "',");
      } else {
        v142 = v142 + _0x20e68d + ",";
        let v154 = p192[_0x20e68d];
        if (typeof p192[_0x20e68d] === "string") {
          v154 = p192[_0x20e68d].replace(new RegExp("'", "g"), "''");
        }
        v143 = v143 + "'" + v154 + "',";
      }
    }
    if (v130 && (v130 === 2 || v115.eazPK(v130, "2"))) {
      if (p192.weCustomerKey) {
        v142 = v142 + v115.ZzxPT + ",";
        v143 = v115.XpqYG(v143 + "'" + p192.weCustomerKey, "',");
      }
      if (p192.weUserId) {
        v142 = v142 + "weUserId" + ",";
        v143 = v115.SuNbU(v143 + "'" + p192[v115.kMBgr], "',");
      }
    }
    if (p192.weFirstStepDay) {
      let v155 = [];
      let v156 = p192[v115.ndMmy].split(",");
      for (let v157 = 0; v157 < v156.length; v157++) {
        let v158 = {};
        v158.cardId = parseInt(v156[v157].split("-")[0], v115.nAPYp(164421, 164431));
        v158.date = v156[v157].split("-")[1];
        v155.push(v158);
      }
    }
    v142 = v142 + "createdAt";
    v143 = v143 + "'" + v146.Format("yyyy-MM-dd hh:mm:ss") + "')";
    v144.push(v143);
    p192.tableName = v145;
    p192.pointId = _0x36a905;
    p192.keys = v142;
    p192.values = v144;
    p192.happenTime = v148;
    p192.weHappenTime = v148;
    p192.weHappenDate = v149;
    p192.weHappenHour = v150;
    p192.weHappenMinute = v151;
    C.selectLogInfoIntoQueue(p192, "", "batchInsert");
  }
  static async ["selectLogInfoIntoQueue"](p235, p236, p237) {
    const v159 = {
      PyMcT: function (p238, p239) {
        return p238 ^ p239;
      },
      XCNcK: function (p240, p241) {
        return p240 ^ p241;
      },
      JbCEB: function (p242, p243) {
        return p242 < p243;
      },
      jQhSm: function (p244, p245) {
        return p244 !== p245;
      },
      nxruP: "yyyy-MM-dd 00:00:00",
      xNHed: "projectId",
      OEsQd: "createdAt",
      qOXIp: function (p246, p247) {
        return p246 > p247;
      }
    };
    const {
      batchInsert: _0x5ab063
    } = accountInfo;
    const {
      limitQueueLength: _0x45aa64
    } = _0x5ab063;
    if (!global.eventInfo.lastRecordTime) {
      global.eventInfo.lastRecordTime = new Date().getTime();
    }
    const v160 = p235.projectId;
    const v161 = p235.pointId;
    const v162 = global.eventInfo.relationQueue;
    const v163 = global.eventInfo.logInfoQueue;
    if (!CommonModel) {
      return;
    }
    let v164 = p235.happenTime.substring(v159.PyMcT(988836, 988836), v159.XCNcK(547521, 547531));
    let v165 = new Date().Format("yyyy-MM-dd");
    if (v164 !== v165) {
      return;
    }
    if (!v162.pointIdRelation) {
      v162.pointIdRelation = [];
    }
    if (!v162.fieldRelation) {
      v162.fieldRelation = [];
    }
    if (!v163[v160]) {
      v163[v160] = {};
    }
    if (!v163[v160][v161]) {
      v163[v160][v161] = [];
    }
    let v166 = v162.pointIdRelation;
    if (v166 && v159.JbCEB(v166.length, _0x45aa64)) {
      if (v159.jQhSm(typeof p235.weRelationPointId, "undefined")) {
        v166.push("('" + vRequire3.getUuid() + "', '" + v160 + "', '" + v161 + "', '" + p235.weRelationPointId + "', 1, '" + new Date().Format("yyyy-MM-dd 00:00:00") + "', '" + new Date().Format(v159.nxruP) + "')");
      }
    } else {
      const v167 = ["id", v159.xNHed, "pointId", "weRelationPointId", "weRelationPointCount", v159.OEsQd, "updatedAt"];
      BuryPointUserBehaviorRelationModel.batchInsert(v167, v166);
      v162.pointIdRelation = [];
    }
    if (v163[v160][v161].length < _0x45aa64) {
      let v168 = {
        tableName: p235.tableName,
        keys: p235.keys,
        values: p235.values
      };
      v163[v160][v161].push(v168);
    } else {
      let v169 = {
        tableName: p235.tableName,
        keys: p235.keys,
        values: p235.values
      };
      v163[v160][v161].push(v169);
      if (v163[v160][v161]) {
        let v170 = [];
        let v171 = "";
        let v172 = "";
        for (let v173 in v163[v160][v161]) {
          if (v173) {
            const {
              tableName: _0x20c8f2,
              keys: _0x3e1641,
              values: _0x5ab52b
            } = v163[v160][v161][v173];
            v171 = _0x20c8f2;
            v172 = _0x3e1641;
            v170.push(_0x5ab52b);
          }
        }
        if (v171 && v172 && v159.qOXIp(v170.length, 0)) {
          CommonModel.batchInsert(v171, v172, v170);
        }
      }
      global.eventInfo.lastRecordTime = new Date().getTime();
      v163[v160][v161] = [];
    }
  }
  static addFailLogToQueue(p248) {
    const v174 = "3|1|2|4|0".split("|");
    let v175 = 0;
    function f29(p254, p255, p256, p257, p258) {
      return f10(p257 - 825, p255);
    }
    while (true) {
      switch (v174[v175++]) {
        case "0":
          if (global.eventInfo.failLogQueue.length >= 1000) {
            C.handleFailLogQueue();
          }
          continue;
        case "1":
          p248.createdAt = new Date().Format("yyyy-MM-dd hh:mm:ss");
          continue;
        case "2":
          p248.updatedAt = new Date().Format("yyyy-MM-dd hh:mm:ss");
          continue;
        case "3":
          if (!global.eventInfo.failLogQueue) {
            global.eventInfo.failLogQueue = [];
          }
          continue;
        case "4":
          global.eventInfo.failLogQueue.push(p248);
          continue;
      }
      break;
    }
  }
  static async ["handleFailLogQueue"]() {
    const v176 = {
      sZPkD: "批量入库失败点位日志异常："
    };
    const v177 = global.eventInfo.failLogQueue;
    if (!v177 || v177.length === 0) {
      return;
    }
    try {
      if (v177.length > 0) {
        await BuryPointFailLogModel.batchCreate(v177);
        vRequire7.printInfo("批量入库失败点位日志：" + v177.length + "条");
      }
    } catch (_0x4733c6) {
      vRequire7.printError(v176.sZPkD, _0x4733c6);
    } finally {
      global.eventInfo.failLogQueue = [];
    }
  }
  static async handleLogInfoQueue() {
    const v178 = {
      JPxuf: function (p264, p265) {
        return p264 > p265;
      },
      YJTZT: "projectId",
      WGeKx: "pointId"
    };
    const v179 = global.eventInfo.logInfoQueue;
    const v180 = global.eventInfo.relationQueue;
    let v181 = v180.pointIdRelation;
    for (let v182 in v179) {
      let v183 = v179[v182];
      for (let v184 in v183) {
        if (v183[v184]) {
          let v185 = [];
          let v186 = "";
          let v187 = "";
          for (let v188 in v183[v184]) {
            if (v188) {
              const {
                tableName: _0x2909e3,
                keys: _0x3925eb,
                values: _0x44c574
              } = v183[v184][v188];
              v186 = _0x2909e3;
              v187 = _0x3925eb;
              v185.push(_0x44c574);
            }
          }
          if (v186 && v187 && v178.JPxuf(v185.length, 0)) {
            CommonModel.batchInsert(v186, v187, v185);
          }
        }
        v179[v182][v184] = [];
      }
    }
    if (v181 && v181.length) {
      const v189 = ["id", v178.YJTZT, v178.WGeKx, "weRelationPointId", "weRelationPointCount", "createdAt", "updatedAt"];
      BuryPointUserBehaviorRelationModel.batchInsert(v189, v181);
      v180.pointIdRelation = [];
    }
  }
  static async queryClientUsers(p266) {
    try {
      let v190 = JSON.parse(p266.request.body);
      const {
        projectId: _0x4e0812
      } = v190;
      const v191 = vRequire3.getFixedLengthQueue(_0x4e0812);
      p266.response.status = 200;
      p266.body = vRequire9.SUCCESS_200("success", v191);
    } catch (_0x59564b) {
      console.log(_0x59564b);
      p266.response.status = 413;
      p266.body = vRequire9.ERROR_413("参数解析失败");
    }
  }
  static async batchInsertUserBehaviorRelation(p267, p268, p269) {
    let v192 = [];
    v192.push("projectId");
    v192.push("pointId");
    v192.push("weRelationPointId");
    if (v192 && p269.length > 0) {
      CommonModel.batchInsert("buryPointUserBehaviorRelation", v192, p269);
    }
  }
}
class C2 {
  static async create(p270) {
    const v193 = {
      JVThZ: function (p271, p272) {
        return p271 && p272;
      },
      mMkOy: function (p273, p274) {
        return p273 ^ p274;
      },
      jtWth: function (p275, p276) {
        return p275 === p276;
      },
      upGEj: function (p277, p278) {
        return p277 > p278;
      },
      jfRte: function (p279, p280) {
        return p279 ^ p280;
      },
      fpLPT: function (p281, p282) {
        return p281 ^ p282;
      }
    };
    try {
      let v194 = JSON.parse(p270.request.body);
      const {
        nickname: _0x336d1e,
        userId: _0x3d9a48
      } = p270.user;
      const {
        content: _0x53fe9b,
        urgency: _0xc4dd05,
        projectId: _0x1df8ca,
        name: _0x525c7f,
        threshold: _0x3d76ed,
        count: _0x32da29,
        rule: _0x3446df,
        thresholdType = "count"
      } = v194;
      if (v193.JVThZ(_0x53fe9b, _0xc4dd05) && _0x1df8ca && _0x525c7f && _0x32da29 !== undefined && _0x3446df && _0x3d76ed !== undefined) {
        v194.createBy = _0x336d1e;
        v194.updateBy = _0x336d1e;
        v194.status = v193.mMkOy(244239, 244238);
        v194.frequency = 1;
        v194.frequencyUnit = "hour";
        v194.createManId = _0x3d9a48;
        v194.silentTime = v194.silentTime.join(",");
        if (!thresholdType || v193.jtWth(thresholdType, "") || thresholdType === null || thresholdType === undefined) {
          v194.rule = _0x3446df + "," + _0x3d76ed + "," + _0x32da29 + ",count";
        } else {
          v194.rule = _0x3446df + "," + _0x3d76ed + "," + _0x32da29 + "," + thresholdType;
        }
        const v195 = await BuryPointAlarmModel.getSameName(_0x525c7f, _0x1df8ca);
        if (v195 && v193.upGEj(v195.length, 0)) {
          p270.response.status = 412;
          p270.body = vRequire9.ERROR_412("创建失败，同项目下规则名称不可重复");
          return;
        }
        await BuryPointAlarmModel.create(v194);
        p270.response.status = v193.mMkOy(798245, 798445);
        p270.body = vRequire9.SUCCESS_200("创建成功", "");
      } else {
        p270.response.status = v193.jfRte(503257, 502853);
        p270.body = vRequire9.ERROR_412("创建失败，请求参数不能为空！");
      }
    } catch (_0x548a79) {
      console.log(_0x548a79);
      p270.response.status = v193.fpLPT(214351, 214226);
      p270.body = vRequire9.ERROR_413("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_PARAM_FAIL));
    }
  }
  static async detail(p283) {
    const v196 = {
      MaqrC: "success"
    };
    const v197 = vRequire3.parseQs(p283.request.url);
    let v198 = v197.id;
    try {
      const v199 = await BuryPointAlarmModel.detail(v198);
      p283.response.status = 200;
      p283.body = vRequire9.SUCCESS_200(v196.MaqrC, v199);
    } catch (_0x31f551) {
      console.log(_0x31f551);
      p283.response.status = 413;
      p283.body = vRequire9.ERROR_413("请求参数不合法");
    }
  }
  static async ["updateStatus"](p284) {
    const v200 = {
      EYLSH: "success"
    };
    let {
      id: _0x617e16,
      status: _0x241ab7
    } = JSON.parse(p284.request.body);
    try {
      const v201 = await BuryPointAlarmModel.updateStatus(_0x617e16, _0x241ab7);
      p284.response.status = 200;
      p284.body = vRequire9.SUCCESS_200(v200.EYLSH, v201);
    } catch (_0xfe5073) {
      console.log(_0xfe5073);
      p284.response.status = 413;
      p284.body = vRequire9.ERROR_413("更新状态失败");
    }
  }
  static async ["list"](p285) {
    const v202 = {
      Echya: function (p286, p287) {
        return p286 ^ p287;
      }
    };
    const v203 = JSON.parse(p285.request.body);
    if (!v203.page) {
      v203.page = 1;
    }
    if (!v203.pageSize) {
      v203.pageSize = 10;
    }
    if (v203.isMy) {
      v203.createManId = p285.user.userId;
    } else {
      v203.isMy = false;
    }
    if (!v203.name) {
      v203.name = "";
    }
    if (!v203.urgency) {
      v203.urgency = "";
    }
    if (!v203.projectId) {
      p285.response.status = v202.Echya(242952, 242837);
      p285.body = vRequire9.ERROR_413("请求参数缺少项目id");
      return;
    }
    try {
      const v204 = await BuryPointAlarmModel.getList(v203);
      const {
        list: _0x40d182,
        total: _0x5f3aae
      } = v204;
      p285.response.status = 200;
      p285.body = vRequire9.SUCCESS_200("success", {
        list: _0x40d182,
        total: _0x5f3aae
      });
    } catch (_0xf2060c) {
      console.log(_0xf2060c);
      p285.response.status = 413;
      p285.body = vRequire9.ERROR_413("请求参数不合法");
    }
  }
  static async getListByProjectId(p288) {
    const v205 = {
      KuDvk: function (p289, p290) {
        return p289 ^ p290;
      },
      QCKNG: "请求参数缺少项目id",
      seAht: function (p291, p292) {
        return p291 ^ p292;
      },
      cjJMV: "success"
    };
    const v206 = JSON.parse(p288.request.body);
    if (!v206.projectId) {
      p288.response.status = v205.KuDvk(752755, 753134);
      p288.body = vRequire9.ERROR_413(v205.QCKNG);
      return;
    }
    try {
      const v207 = await BuryPointAlarmModel.getListByProjectId(v206.projectId);
      p288.response.status = v205.seAht(290676, 290748);
      p288.body = vRequire9.SUCCESS_200(v205.cjJMV, v207);
    } catch (_0x2dd5a2) {
      console.log(_0x2dd5a2);
      p288.response.status = 413;
      p288.body = vRequire9.ERROR_413("请求参数不合法");
    }
  }
  static async update(p293) {
    const v208 = {
      ZvYTG: function (p294, p295) {
        return p294 !== p295;
      },
      RplRl: function (p296, p297) {
        return p296 === p297;
      },
      CRfIK: function (p298, p299) {
        return p298 ^ p299;
      },
      rWdUZ: "请求参数不合法"
    };
    let v209 = JSON.parse(p293.request.body);
    const {
      nickname: _0x5a3070
    } = p293.user;
    const {
      id: _0x22ea64,
      content: _0x1b679d,
      urgency: _0x4bd8f6,
      name: _0x32c0ba,
      threshold: _0x19d184,
      count: _0x2a0f34,
      rule: _0x55e073,
      thresholdType: _0x137d38
    } = v209;
    try {
      if (_0x22ea64 && _0x1b679d && _0x4bd8f6 && _0x32c0ba && v208.ZvYTG(_0x2a0f34, undefined) && _0x55e073 && _0x19d184 !== undefined) {
        v209.silentTime = v209.silentTime.join(",");
        if (!_0x137d38 || v208.RplRl(_0x137d38, "") || _0x137d38 === null || _0x137d38 === undefined) {
          v209.rule = _0x55e073 + "," + _0x19d184 + "," + _0x2a0f34 + ",count";
        } else {
          v209.rule = _0x55e073 + "," + _0x19d184 + "," + _0x2a0f34 + "," + _0x137d38;
        }
        v209.updateBy = _0x5a3070;
        let v210 = await BuryPointAlarmModel.update(v209);
        p293.response.status = 200;
        p293.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_SUCCESS), v210);
      } else {
        p293.response.status = v208.CRfIK(669204, 669576);
        p293.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_PARAM_FAIL));
      }
    } catch (_0x520506) {
      console.log(_0x520506);
      p293.response.status = 413;
      p293.body = vRequire9.ERROR_413(v208.rWdUZ);
    }
  }
  static async ["delete"](p300) {
    const v211 = {
      aKivx: "success",
      sDtrv: function (p301, p302) {
        return p301 ^ p302;
      }
    };
    try {
      let {
        id: _0x4767cb
      } = JSON.parse(p300.request.body);
      const v212 = await BuryPointAlarmModel.delete(_0x4767cb);
      p300.response.status = 200;
      p300.body = vRequire9.SUCCESS_200(v211.aKivx, v212);
    } catch (_0x4208ec) {
      console.log(error);
      p300.response.status = v211.sDtrv(271365, 271768);
      p300.body = vRequire9.ERROR_413("请求参数不合法");
    }
  }
  static async ["batchDeletion"](p303) {
    const v213 = {
      sgfZX: function (p304, p305) {
        return p304 ^ p305;
      }
    };
    let {
      alarmIds: _0x52fd91
    } = JSON.parse(p303.request.body);
    if (_0x52fd91) {
      await BuryPointAlarmModel.batchDeletion(_0x52fd91);
    }
    p303.response.status = v213.sgfZX(774269, 774325);
    p303.body = vRequire9.SUCCESS_200("success", 0);
  }
  static async ["copy"](p306) {
    const v214 = {
      KrAvp: "success",
      kkHAd: "fail！",
      pYJVu: function (p307, p308) {
        return p307 ^ p308;
      }
    };
    let v215 = JSON.parse(p306.request.body);
    try {
      const {
        nickname: _0x1539bf,
        userId: _0x186b2e
      } = p306.user;
      const {
        name: _0x5b0002,
        id: _0x36599f,
        projectId: _0x5c92ed
      } = v215;
      if (_0x5b0002 && _0x36599f && _0x5c92ed) {
        let v216 = await BuryPointAlarmModel.detail(_0x36599f);
        let v217 = {
          createBy: _0x1539bf,
          updateBy: _0x1539bf,
          name: _0x5b0002,
          content: v216.content,
          description: v216.description,
          frequencyUnit: v216.frequencyUnit,
          frequency: v216.frequency,
          urgency: v216.urgency,
          status: 1,
          projectId: _0x5c92ed,
          createManId: _0x186b2e
        };
        v217.silentTime = v216.silentTime.join(",");
        v217.rule = v216.rule + "," + v216.threshold + "," + v216.count + "," + v216.thresholdType;
        await BuryPointAlarmModel.create(v217);
        p306.response.status = 200;
        p306.body = vRequire9.SUCCESS_200(v214.KrAvp, "");
      } else {
        p306.response.status = 412;
        p306.body = vRequire9.ERROR_412(v214.kkHAd);
      }
    } catch (_0x65b51) {
      console.log(_0x65b51);
      p306.response.status = v214.pYJVu(149297, 149165);
      p306.body = vRequire9.ERROR_412("请求异常");
    }
  }
}
class C3 {
  static async getMachineFingerprint() {
    const v218 = {
      iHwce: function (p309, p310) {
        return p309 ^ p310;
      },
      XhEIM: "sha256",
      sDioC: function (p311, p312) {
        return p311 ^ p312;
      }
    };
    const v219 = ip.address().split(".");
    const v220 = v219[0] + "." + v219[v218.iHwce(943954, 943955)];
    const v221 = await vRequire15.cpu();
    const v222 = await vRequire15.baseboard();
    const v223 = await vRequire15.diskLayout();
    const v224 = (await vRequire15.networkInterfaces()).find(p313 => !p313.internal)?.["mac"];
    const v225 = v221.manufacturer + "-" + v221.brand + "-" + v224;
    const v226 = v221.manufacturer + "-" + v221.brand + "-" + v220;
    const v227 = require("crypto").createHash(v218.XhEIM).update(v225).digest("hex");
    const v228 = require("crypto").createHash(v218.XhEIM).update(v226).digest("hex");
    const v229 = v227.substring(0, 14);
    const v230 = v228.substring(0, 14);
    const v231 = v227.substring(v218.sDioC(328026, 328029), 21);
    const v232 = v228.substring(v218.sDioC(723450, 723453), v218.sDioC(897937, 897924));
    return {
      monitor: {
        machineId1: v229,
        machineId2: v230
      },
      event: {
        machineId1: v231,
        machineId2: v232
      }
    };
  }
  static async decryptPurchaseCode(p314, p315) {
    const v233 = {
      qzMdA: function (p316, p317) {
        return p316 === p317;
      },
      thKkx: function (p318, p319) {
        return p318 ^ p319;
      },
      FtMNd: function (p320, p321) {
        return p320 ^ p321;
      },
      xGilQ: function (p322, p323) {
        return p322 != p323;
      },
      zNzPT: function (p324, p325) {
        return p324 ^ p325;
      },
      ySKOq: function (p326, p327) {
        return p326 - p327;
      },
      geDrB: function (p328, p329) {
        return p328 ^ p329;
      },
      msxRk: function (p330, p331) {
        return p330 ^ p331;
      },
      anwAi: function (p332, p333) {
        return p332 ^ p333;
      },
      ELvrC: function (p334, p335) {
        return p334 ^ p335;
      },
      iihXR: function (p336, p337) {
        return p336 == p337;
      },
      XJecc: function (p338, p339) {
        return p338 ^ p339;
      },
      jNFIR: function (p340, p341) {
        return p340 + p341;
      },
      EabDj: "9999",
      hatSB: function (p342, p343) {
        return p342 ^ p343;
      },
      FPsIH: function (p344, p345) {
        return p344 == p345;
      },
      XzDnm: function (p346, p347, p348) {
        return p346(p347, p348);
      },
      lbbpm: function (p349, p350, p351) {
        return p349(p350, p351);
      },
      bFlsm: function (p352, p353) {
        return p352 ^ p353;
      },
      ySVRs: function (p354, p355) {
        return p354 ^ p355;
      },
      NaMXJ: function (p356, p357) {
        return p356 ^ p357;
      },
      BvaIt: function (p358, p359) {
        return p358 ^ p359;
      },
      wzHtG: function (p360, p361) {
        return p360 + p361;
      },
      oHyHh: function (p362, p363) {
        return p362 + p363;
      },
      KcdaE: function (p364, p365) {
        return p364 > p365;
      },
      PjDYr: function (p366, p367) {
        return p366 && p367;
      },
      WtRfs: function (p368, p369) {
        return p368 > p369;
      },
      BPskv: function (p370, p371) {
        return p370 ^ p371;
      },
      CHcxA: function (p372, p373) {
        return p372 ^ p373;
      },
      uzYdW: function (p374, p375) {
        return p374 ^ p375;
      },
      jXjkm: function (p376, p377) {
        return p376 < p377;
      },
      anpjJ: function (p378, p379) {
        return p378 ^ p379;
      },
      tvAMI: function (p380, p381) {
        return p380 + p381;
      },
      qCUXe: function (p382, p383) {
        return p382 === p383;
      },
      KMzXC: function (p384, p385) {
        return p384 ^ p385;
      },
      JPcvh: function (p386, p387) {
        return p386 + p387;
      },
      oJECP: function (p388, p389) {
        return p388 + p389;
      },
      tTRYM: function (p390, p391) {
        return p390 ^ p391;
      },
      dVKuw: function (p392, p393) {
        return p392 ^ p393;
      },
      LfFnD: function (p394, p395) {
        return p394 ^ p395;
      },
      ygoSA: function (p396, p397) {
        return p396 ^ p397;
      },
      qwDEf: function (p398, p399) {
        return p398 + p399;
      },
      uQmGx: function (p400, p401) {
        return p400 + p401;
      },
      KreyW: function (p402, p403) {
        return p402 ^ p403;
      },
      PfQuV: function (p404, p405) {
        return p404 ^ p405;
      },
      cWfoz: function (p406, p407) {
        return p406 ^ p407;
      },
      fyTWi: function (p408, p409) {
        return p408 * p409;
      },
      dAutQ: function (p410, p411) {
        return p410 === p411;
      },
      PRCHC: function (p412, p413) {
        return p412 ^ p413;
      }
    };
    global.eventInfo.purchaseCodeEndDate = "";
    global.eventInfo.purchaseCodeValid = false;
    global.eventInfo.purchaseCodeType = "0";
    global.eventInfo.purchaseCodeCardCount = 3;
    const v234 = "JTVCJTdCJTIyUCUyMiUzQSUyMjElMjIlMkMlMjJYJTIyJTNBJTIyMiUyMiUyQyUyMkQlMjIlM0ElMjIzJTIyJTJDJTIyVyUyMiUzQSUyMjQlMjIlMkMlMjJVJTIyJTNBJTIyNSUyMiUyQyUyMkIlMjIlM0ElMjI2JTIyJTJDJTIyUyUyMiUzQSUyMjclMjIlMkMlMjJNJTIyJTNBJTIyOCUyMiUyQyUyMkclMjIlM0ElMjI5JTIyJTJDJTIySyUyMiUzQSUyMjAlMjIlN0QlMkMlN0IlMjJaJTIyJTNBJTIyMSUyMiUyQyUyMkElMjIlM0ElMjIyJTIyJTJDJTIyRCUyMiUzQSUyMjMlMjIlMkMlMjJWJTIyJTNBJTIyNCUyMiUyQyUyMk0lMjIlM0ElMjI1JTIyJTJDJTIyQyUyMiUzQSUyMjYlMjIlMkMlMjJOJTIyJTNBJTIyNyUyMiUyQyUyMkslMjIlM0ElMjI4JTIyJTJDJTIySiUyMiUzQSUyMjklMjIlMkMlMjJMJTIyJTNBJTIyMCUyMiU3RCUyQyU3QiUyMlklMjIlM0ElMjIxJTIyJTJDJTIyUSUyMiUzQSUyMjIlMjIlMkMlMjJJJTIyJTNBJTIyMyUyMiUyQyUyMlQlMjIlM0ElMjI0JTIyJTJDJTIyViUyMiUzQSUyMjUlMjIlMkMlMjJSJTIyJTNBJTIyNiUyMiUyQyUyMkglMjIlM0ElMjI3JTIyJTJDJTIyQyUyMiUzQSUyMjglMjIlMkMlMjJQJTIyJTNBJTIyOSUyMiUyQyUyMlUlMjIlM0ElMjIwJTIyJTdEJTJDJTdCJTIyUyUyMiUzQSUyMjElMjIlMkMlMjJXJTIyJTNBJTIyMiUyMiUyQyUyMlolMjIlM0ElMjIzJTIyJTJDJTIyRiUyMiUzQSUyMjQlMjIlMkMlMjJRJTIyJTNBJTIyNSUyMiUyQyUyMkolMjIlM0ElMjI2JTIyJTJDJTIyVCUyMiUzQSUyMjclMjIlMkMlMjJCJTIyJTNBJTIyOCUyMiUyQyUyMlYlMjIlM0ElMjI5JTIyJTJDJTIySSUyMiUzQSUyMjAlMjIlN0QlMkMlN0IlMjJFJTIyJTNBJTIyMSUyMiUyQyUyMkIlMjIlM0ElMjIyJTIyJTJDJTIyUSUyMiUzQSUyMjMlMjIlMkMlMjJWJTIyJTNBJTIyNCUyMiUyQyUyMlglMjIlM0ElMjI1JTIyJTJDJTIyWSUyMiUzQSUyMjYlMjIlMkMlMjJUJTIyJTNBJTIyNyUyMiUyQyUyMkclMjIlM0ElMjI4JTIyJTJDJTIyUyUyMiUzQSUyMjklMjIlMkMlMjJNJTIyJTNBJTIyMCUyMiU3RCU1RA==";
    if (p314.length == 20 && p314[19] == "Z") {
      return {
        iv: false,
        pt: 0
      };
    }
    let v235 = false;
    let v236 = "";
    let v237 = new Date().Format("yyyy-MM-dd");
    const v238 = new RegExp("\\d{4}-\\d{2}-\\d{2}", "");
    global.eventInfo.purchaseCodeValid = v233.qzMdA(v235, true) ? v46 : false;
    if (p314.length != 20 && p314.length != v233.thKkx(905931, 905938) && p314.length != v233.thKkx(713977, 713959) && p314.length != 50) {
      return {
        isValid: false,
        productType: 0
      };
    }
    if (p314.length == v233.FtMNd(494774, 494760)) {
      let v239 = p314.split("").reverse().join("");
      let v240 = v239.substring(v239.length - 5, v239.length);
      let v241 = v239.substring(0, v239.length - 5);
      let v242 = v241.substring(v233.thKkx(239957, 239957), 5);
      let v243 = v241.substring(5, v241.length);
      const v244 = v242 + v240 + v243;
      const v245 = vRequire3.md5Hex(v244);
      if (v233.xGilQ(p315, v245)) {
        return {
          isValid: false,
          productType: 0
        };
      }
    }
    if (p314.length == 50) {
      let v246 = p314.substring(v233.zNzPT(607794, 607794), 30).split("").reverse().join("");
      let v247 = v246.substring(v246.length - 5, v246.length);
      let v248 = v246.substring(0, v233.ySKOq(v246.length, v233.thKkx(477495, 477490)));
      let v249 = v248.substring(v233.geDrB(125983, 125983), 5);
      let v250 = v248.substring(5, v248.length);
      const v251 = v249 + v247 + v250;
      const v252 = vRequire3.md5Hex(v251);
      if (p315 != v252) {
        return {
          iv: false,
          pt: 0
        };
      }
    }
    const v253 = new RegExp("^[A-Z]{20,30}$", "");
    if (!v253.test(p314.substring(v233.msxRk(779296, 779296), 30))) {
      return {
        isValid: false,
        productType: 0
      };
    }
    let v254 = v233.anwAi(846994, 846994);
    let v255 = 3;
    let v256 = 1;
    const v257 = p314.charAt(v233.ELvrC(711389, 711385)).charCodeAt();
    const v258 = p314.charAt(9).charCodeAt();
    const v259 = v258 - v257;
    if (p314.length == 20) {
      v254 = v259;
    } else if (p314.length == 25 || p314.length == 30 || v233.iihXR(p314.length, 50)) {
      const v260 = p314.charAt(20).charCodeAt();
      const v261 = p314.charAt(22).charCodeAt();
      const v262 = (v261 - v260) * 10;
      v254 = v259 + v262;
      if ([80, 81, v233.FtMNd(109121, 109075), 83, 84, v233.XJecc(993768, 993725)].indexOf(v254) !== -1) {
        const v263 = p314.charAt(29).charCodeAt();
        const v264 = p314.charAt(26).charCodeAt();
        const v265 = p314.charAt(25).charCodeAt();
        const v266 = p314.charAt(28).charCodeAt();
        const v267 = v263 - v264 + "";
        const v268 = v233.jNFIR(v265 - v266, "");
        v255 = v268 + v267;
        if (v233.qzMdA(v255, "00")) {
          v255 = v233.EabDj;
        } else {
          v255 = parseInt(v255, v233.hatSB(963663, 963653));
        }
        const v269 = p314.charAt(27).charCodeAt();
        const v270 = v269 - v260 + "";
        v256 = v270;
      } else if (v254 == 0) {
        v255 = "3";
        v256 = "3";
      } else if (v233.FPsIH(v254, 28)) {
        v255 = "9999";
        v256 = "3";
      } else {
        v255 = "3";
        v256 = "3";
      }
    }
    v254 = parseInt(v254, v233.thKkx(229477, 229487));
    v255 = v233.XzDnm(parseInt, v255, 10);
    v256 = v233.lbbpm(parseInt, v256, v233.bFlsm(396943, 396933));
    if ([0, 28, 80, v233.msxRk(595095, 595142), 82, 83, v233.ySVRs(928377, 928301), 85].indexOf(v254) === -v233.bFlsm(880641, 880640)) {
      return {
        isValid: false,
        productType: 0
      };
    }
    const v271 = JSON.parse(vRequire3.b64DecodeUnicode(v234));
    for (let v272 = 0; v272 < v271.length; v272++) {
      const v273 = v271[v272];
      const v274 = [v233.hatSB(979666, 979649), v233.bFlsm(931474, 931486), 7, 17, 10, v233.NaMXJ(767160, 767152), v233.BvaIt(506325, 506330), 1];
      const v275 = v273[p314[v274[0]]];
      const v276 = v273[p314[v274[1]]];
      const v277 = v273[p314[v274[2]]];
      const v278 = v273[p314[v274[3]]];
      if (!v275 || !v276 || !v277 || !v278) {
        continue;
      }
      if (v275 != "2" || v276 != "0" && v276 != "1") {
        continue;
      }
      const v279 = v233.wzHtG(v233.oHyHh(v275 + v276, v277), v278);
      const v280 = v273[p314[v274[4]]];
      const v281 = v273[p314[v274[5]]];
      if (!v280 || !v281) {
        continue;
      }
      const v282 = v233.jNFIR(v280, v281);
      if (v233.KcdaE(v282, "12")) {
        continue;
      }
      const v283 = v273[p314[v274[6]]];
      const v284 = v273[p314[v274[7]]];
      if (!v233.PjDYr(v283, v284)) {
        continue;
      }
      const v285 = v283 + v284;
      if (v233.WtRfs(v282, "31")) {
        continue;
      }
      const v286 = [0, v233.XJecc(254392, 254394), v233.BPskv(703864, 703867), v233.bFlsm(214545, 214548), v233.CHcxA(320416, 320422), 11, 13, v233.uzYdW(293511, 293513), 16, v233.msxRk(996185, 996171), 21, 23, 24];
      if (p314.length == 20) {
        for (let v287 = 0; v233.jXjkm(v287, v286.length - v233.thKkx(144416, 144420)); v287++) {
          let v288 = p314.charAt(v286[v287]).charCodeAt();
          let v289 = p314.charAt(v286[v233.wzHtG(v287, 1)]).charCodeAt();
          if (v289 - v288 != 1) {
            return {
              isValid: false,
              productType: 0
            };
          }
        }
      } else if (p314.length == 25 || p314.length == v233.hatSB(586235, 586213)) {
        for (let v290 = v233.BvaIt(394277, 394277); v290 < v233.ySKOq(v286.length, 1); v290++) {
          let v291 = p314.charAt(v286[v290]).charCodeAt();
          let v292 = p314.charAt(v286[v290 + v233.anpjJ(276065, 276064)]).charCodeAt();
          if (v292 - v291 != 1) {
            return {
              isValid: false,
              productType: 0
            };
          }
        }
      }
      v236 = v233.jNFIR(v279, "-") + v282 + "-" + v285;
      break;
    }
    if (v238.test(v236) && v236 > v237) {
      v235 = true;
    }
    global.eventInfo.purchaseCodeEndDate = v236;
    global.eventInfo.purchaseCodeValid = v235 === true ? v46 : false;
    global.eventInfo.purchaseCodeType = v254;
    global.eventInfo.purchaseCodeCardCount = v255;
    let v293 = vRequire3.b64DecodeUnicode(vRequire26.CARD_COUNT) + "：" + v255;
    let v294 = vRequire3.b64DecodeUnicode(vRequire26.PROJECT_TYPE) + "：";
    if ([v233.NaMXJ(207373, 207373), 80, 81, 82, 83, 84, 85].indexOf(v254) !== -1) {
      v294 += "" + vRequire3.b64DecodeUnicode(vRequire26[v233.tvAMI("PRODUCT_TYPE", v254)]);
    }
    let v295 = vRequire3.b64DecodeUnicode(vRequire26.END_DATE) + "：" + v236;
    let v296 = {};
    let v297 = [];
    let v298 = "X";
    if (v233.qCUXe(p314.length, 50)) {
      const v299 = p314.substring(30);
      const v300 = v299.split("").reverse().join("");
      const v301 = {
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
      const v302 = [v233.KMzXC(282006, 282004), 4, 8, v233.XJecc(297240, 297236), 15, 18];
      const v303 = v233.JPcvh(v233.oJECP(v301[v300[v302[v233.XJecc(813427, 813426)]]] + v301[v300[v302[v233.NaMXJ(434152, 434154)]]], v301[v300[v302[3]]]), v301[v300[v302[v233.tTRYM(735363, 735367)]]]) + v301[v300[v302[5]]];
      v298 = v300[v302[0]];
      const v304 = [0, v233.dVKuw(854025, 854024), 3, 5, 6, v233.BvaIt(868801, 868806), 9, v233.LfFnD(717984, 717994), v233.anwAi(413470, 413461), v233.ygoSA(134393, 134388), 14, 16, 17, 19];
      const v305 = v233.qwDEf(v233.tvAMI(v233.uQmGx(v233.jNFIR(v233.oHyHh(v300[v304[v233.tTRYM(812263, 812263)]], v300[v304[1]]) + v300[v304[v233.KreyW(828076, 828078)]], v300[v304[v233.XJecc(776753, 776754)]]) + v300[v304[v233.anpjJ(404173, 404169)]] + v300[v304[5]], v300[v304[6]]) + v300[v304[7]] + v300[v304[8]], v300[v304[9]]) + v300[v304[10]] + v300[v304[v233.PfQuV(157025, 157034)]], v300[v304[12]]) + v300[v304[v233.cWfoz(267327, 267314)]];
      const v306 = v305.toLowerCase();
      const v307 = vRequire3.b64DecodeUnicode(vRequire26["PRODUCT_LIMIT_TYPE_" + v298]) + "：" + v233.fyTWi(v303, 1) + "万/天";
      v297 = [v294, v293, v295, v307];
      const v308 = await C3.getMachineFingerprint();
      const v309 = v233.dAutQ(v306, v308.event.machineId1) || v306 === v308.event.machineId2;
      v296 = {
        iv: v309,
        limitType: v298,
        limitValue: v303 * v233.PRCHC(873604, 873605)
      };
    } else {
      const v310 = vRequire3.b64DecodeUnicode(vRequire26["PRODUCT_LIMIT_TYPE_" + v298]) + "：无上限";
      v297 = [v294, v293, v295, v310];
      v296 = {
        iv: true,
        limitType: v298,
        limitValue: [9, 8, 7, 6, 5].join("") * 1
      };
    }
    global.eventInfo.machineCodeInfo = v296;
    return {
      isValid: v235,
      productType: v254,
      cardCount: v255,
      performanceType: v256,
      mc: v296,
      pl: v297
    };
  }
  static async consoleLogo() {
    const v311 = {
      gGSyB: " ██║    ██║ ██╔════╝ ██╔══██╗ ██╔════╝ ██║   ██║ ████╗  ██║ ████╗  ██║ ╚██╗ ██╔╝",
      AszqZ: " ██║███╗██║ ██╔══╝   ██╔══██╗ ██╔══╝   ██║   ██║ ██║╚██╗██║ ██║╚██╗██║   ╚██╔╝"
    };
    console.warn(" ██╗    ██╗ ███████╗ ██████╗  ███████╗ ██╗   ██╗ ███╗   ██╗ ███╗   ██╗ ██╗   ██╗".cyan);
    console.warn(v311.gGSyB.cyan);
    console.warn(" ██║ █╗ ██║ █████╗   ██████╔╝ █████╗   ██║   ██║ ██╔██╗ ██║ ██╔██╗ ██║  ╚████╔╝".cyan);
    console.warn(v311.AszqZ.cyan);
    console.warn(" ╚███╔███╔╝ ███████╗ ██████╔╝ ██║      ╚██████╔╝ ██║ ╚████║ ██║ ╚████║    ██║".cyan);
    console.warn("  ╚══╝╚══╝  ╚══════╝ ╚═════╝  ╚═╝       ╚═════╝  ╚═╝  ╚═══╝ ╚═╝  ╚═══╝    ╚═╝".cyan);
    console.warn(" ");
    console.warn(" ");
    console.warn(("" + vRequire3.b64DecodeUnicode(vRequire26.SERVER_STARTING)).yellow);
    console.warn("");
  }
  static async ["consoleInfo"](p414) {
    const v312 = {
      FiMJF: function (p415, p416) {
        return p415(p416);
      },
      anDEl: function (p417, p418) {
        return p417 + p418;
      },
      IPEFw: function (p419, p420) {
        return p419 + p420;
      },
      dwoxy: function (p421, p422) {
        return p421 ^ p422;
      },
      DhAfk: "purchaseCode"
    };
    if (p414) {
      console.warn(v312.anDEl("启动 ", p414) + " 模式...");
    }
    console.warn(v312.IPEFw("║".cyan, (" 2. Webfunny埋点" + vRequire3.b64DecodeUnicode(vRequire26.SERVER_START_SUCCESS) + "                                                  ").yellow) + "║".cyan);
    const v313 = await UserModel.checkAdminAccount();
    const v314 = v313[v312.dwoxy(195835, 195835)].count * 1;
    ConfigModel.getConfigByConfigName(v312.DhAfk).then(p423 => {
      if (p423.length) {
        const v315 = v314 > 0 ? "http://" + accountInfo.localAssetsDomain + "/webfunny_event/dataView.html" : "http://" + accountInfo.localAssetsDomain + "/webfunny_event/register.html?type=1";
        switch (vRequire24.platform) {
          case "darwin":
            exec("open " + v315);
          case "win32":
            v312.FiMJF(exec, "start " + v315);
          default:
            exec("open " + v315);
        }
      }
    });
  }
  static async checkPurchase(p424, p425) {
    const v316 = {
      wYzZQ: "purchaseCode",
      lmEht: "webfunny启动失败了，原因可能有两种：",
      vqKlh: "2. 贵公司的环境无法访问外部网络，无法获取激活码，请联系我们解决，微信号：webfunny2、webfunny_2020 ",
      CZrDN: "secretCode",
      liuuM: function (p426, p427) {
        return p426 === p427;
      },
      nPrXN: function (p428, p429) {
        return p428 ^ p429;
      },
      uwKsK: function (p430, p431) {
        return p430 === p431;
      },
      JHlXf: function (p432, p433) {
        return p432 == p433;
      }
    };
    const v317 = ("" + vRequire3.b64DecodeUnicode(vRequire26.VALID_MSG0)).red;
    const v318 = ("" + vRequire3.b64DecodeUnicode(vRequire26.VALID_MSG1)).red;
    const v319 = ("" + vRequire3.b64DecodeUnicode(vRequire26.VALID_MSG)).green;
    const v320 = await ConfigModel.getConfigByConfigName(v316.wYzZQ);
    const v321 = await ConfigModel.getConfigByConfigName(v316.CZrDN);
    if (v316.liuuM(v321.length, 0)) {
      await ConfigModel.createConfig({
        configName: v316.CZrDN,
        configValue: ""
      });
      C3.restartServer();
      return;
    }
    if (v320.length === 0 && !accountInfo.purchaseCode) {
      await vRequire3.get(v_0x17fb83 + "/config/initPurchaseCode", {
        webfunnyVersion: vF25
      }).then(async p434 => {
        const v322 = p434.data;
        await ConfigModel.createConfig({
          configName: v316.wYzZQ,
          configValue: v322
        });
        C3.restartServer();
        return;
      }).catch(p435 => {
        console.warn(v316.lmEht.red);
        console.warn("1. 网络异常，执行重启命令试一下$: npm run restart".red);
        console.warn(v316.vqKlh.red);
        return;
      });
      return;
    }
    let v323 = accountInfo.purchaseCode ? accountInfo.purchaseCode : v320[0] ? v320[0].configValue : "";
    let v324 = accountInfo.secretCode ? accountInfo.secretCode : v321[v316.nPrXN(305059, 305059)] ? v321[v316.nPrXN(585404, 585404)].configValue : "";
    const v325 = await C3.decryptPurchaseCode(accountInfo.purchaseCode, accountInfo.secretCode);
    const {
      pl = []
    } = v325;
    pl.forEach(p436 => {
      console.warn(p436.cyan);
    });
    if (v325.isValid) {
      v323 = accountInfo.purchaseCode;
      v324 = accountInfo.secretCode;
    }
    let v326 = false;
    await vRequire3.postJson(v_0x17fb83 + "/config/isBlacklist", {
      cdkey: v323,
      secretCdKey: v324,
      webfunnyVersion: vF25
    }).then(p437 => {
      v326 = p437.data;
    }).catch(p438 => {
      v326 = false;
    });
    if (v316.uwKsK(v326, true)) {
      setTimeout(function () {
        const v327 = "1|3|4|2|5|0".split("|");
        let v328 = 0;
        while (true) {
          switch (v327[v328++]) {
            case "0":
              vRequire7.printError(v319);
              continue;
            case "1":
              console.warn(" ");
              continue;
            case "2":
              console.warn(" ");
              continue;
            case "3":
              console.warn(v317);
              continue;
            case "4":
              console.warn(v318);
              continue;
            case "5":
              console.warn(v319);
              continue;
          }
          break;
        }
      }, 8000);
      global.eventInfo.purchaseCodeValid = false;
      p425();
      return;
    }
    const {
      productType: _0x11138e,
      isValid: _0x53492d,
      mc: _0x15bb3d
    } = v325;
    if (v316.JHlXf(_0x53492d, true) && _0x15bb3d.iv === true) {
      const v329 = ip.address();
      const v330 = new Date().getTime();
      vRequire3.postJson(v_0x17fb83 + "/config/memberActiveDeploy", {
        cdkey: v323,
        ip: v329,
        webfunnyVersion: vF25,
        happenTime: v330
      }).then(() => {}).catch(p439 => {});
      global.eventInfo.purchaseCodeValid = v46;
      global.eventInfo.productType = _0x11138e;
      p424();
    } else {
      setTimeout(() => {
        console.warn(" ");
        console.warn(v317);
        console.warn(v318);
        console.warn(" ");
        console.warn(v319);
        vRequire7.printError(v319);
      }, 8000);
      p425();
    }
  }
  static async restartServer() {
    const v331 = {
      MtmvJ: "重启命令失败stderr："
    };
    console.warn("即将执行重启命令... 如果未重启，请手动执行：npm run restart");
    vRequire24.exec("npm run restart &", function (p440, p441, p442) {
      if (p440) {
        vRequire7.printError("重启命令失败error：", p440);
        vRequire7.printError("重启命令失败stdout：", p441);
        vRequire7.printError(v331.MtmvJ, p442);
      }
    });
  }
  static ["simpleHash"](p443) {
    const v332 = {
      HsCwL: function (p449, p450) {
        return p449 - p450;
      },
      vDbCy: function (p451, p452) {
        return p451 ^ p452;
      },
      YFuQs: "simpleHash error"
    };
    let v333 = 0;
    try {
      for (let v334 = 0; v334 < p443.length; v334++) {
        const v335 = p443.charCodeAt(v334);
        v333 = v332.HsCwL(v333 << 5, v333) + v335;
        v333 |= v332.vDbCy(103202, 103202);
      }
      return v333;
    } catch (_0x5dd82a) {
      console.log(v332.YFuQs, _0x5dd82a);
    }
    return v333;
  }
  static ["verifySignature"](p453, p454) {
    const v336 = {
      dfmJG: function (p455, p456) {
        return p455 < p456;
      }
    };
    if (!p454) {
      return false;
    }
    const v337 = global.eventInfo.eventSecretList;
    const v338 = p453.header["wf-signature"] || "";
    const {
      projectId: _0x5994e1
    } = p454;
    let v339 = [];
    for (let v340 = 0; v336.dfmJG(v340, v337.length); v340++) {
      const v341 = v337[v340];
      const v342 = v341 + ":" + _0x5994e1;
      const v343 = C3.simpleHash(v342).toString(16);
      v339.push(v343);
    }
    const v344 = v339.find(p462 => p462 === v338);
    if (v344) {
      return true;
    }
    return false;
  }
  static encryptSignature(p463) {
    const v345 = {
      zNVlH: function (p464, p465) {
        return p464 ^ p465;
      },
      JrMgU: function (p466, p467) {
        return p466 ^ p467;
      },
      xqTJr: function (p468, p469) {
        return p468 ^ p469;
      },
      OqvaQ: function (p470, p471) {
        return p470 ^ p471;
      },
      grBKq: function (p472, p473) {
        return p472 ^ p473;
      }
    };
    if (!p463) {
      C19.setEventSecretList();
      return "";
    }
    const v346 = p463.split("").reverse();
    const v347 = v346[2];
    v346[2] = v346[21];
    v346[21] = v347;
    const v348 = v346[5];
    v346[5] = v346[18];
    v346[v345.zNVlH(715275, 715289)] = v348;
    const v349 = v346[9];
    v346[9] = v346[15];
    v346[15] = v349;
    const v350 = v346[12];
    v346[12] = v346[31];
    v346[31] = v350;
    const v351 = v346[v345.JrMgU(495963, 495947)];
    v346[16] = v346[28];
    v346[28] = v351;
    const v352 = v346[v345.xqTJr(479943, 479955)];
    v346[v345.OqvaQ(975654, 975666)] = v346[v345.grBKq(741649, 741640)];
    v346[25] = v352;
    return v346.join("");
  }
}
class C4 {
  static async create(p474) {
    try {
      let v353 = JSON.parse(p474.request.body);
      const {
        urgency: _0xa1d38e,
        projectId: _0x26b493,
        alarmId: _0x3c8250,
        alarmName: _0x5369ab,
        message: _0xf1badb,
        notifyUsers: _0x1e7de9,
        pageId: _0x15fb8c
      } = v353;
      if (_0xa1d38e && _0x26b493 && _0x5369ab && _0x3c8250 && _0xf1badb && _0x1e7de9 && _0x15fb8c) {
        await BuryPointAlarmMessageModel.create(v353);
        p474.response.status = 200;
        p474.body = vRequire9.SUCCESS_200("创建成功", "");
      } else {
        p474.response.status = 412;
        p474.body = vRequire9.ERROR_412("创建失败，请求参数不合法");
      }
    } catch (_0x6a977d) {
      console.log(_0x6a977d);
      p474.response.status = 413;
      p474.body = vRequire9.ERROR_413("创建失败,请查看失败原因");
    }
  }
  static async ["detail"](p475) {
    const v354 = {
      vdzoV: function (p476, p477) {
        return p476 ^ p477;
      }
    };
    const v355 = vRequire3.parseQs(p475.request.url);
    let v356 = v355.id;
    try {
      const v357 = await BuryPointAlarmMessageModel.detail(v356);
      p475.response.status = 200;
      p475.body = vRequire9.SUCCESS_200("success", v357);
    } catch (_0x5e6f37) {
      console.log(_0x5e6f37);
      p475.response.status = v354.vdzoV(124716, 124593);
      p475.body = vRequire9.ERROR_413("请求参数不合法");
    }
  }
  static async list(p478) {
    const v358 = {
      jZYSD: function (p479, p480) {
        return p479 ^ p480;
      }
    };
    const v359 = JSON.parse(p478.request.body);
    const {
      userId: _0x1afc1a
    } = p478.user;
    v359.userId = _0x1afc1a;
    if (!v359.page) {
      v359.page = 1;
    }
    if (!v359.pageSize) {
      v359.pageSize = v358.jZYSD(439224, 439218);
    }
    try {
      const v360 = await BuryPointAlarmMessageModel.getList(v359);
      const {
        list: _0xc6b96b,
        total: _0x2d37d8
      } = v360;
      p478.response.status = 200;
      p478.body = vRequire9.SUCCESS_200("success", {
        list: _0xc6b96b,
        total: _0x2d37d8
      });
    } catch (_0x300e61) {
      console.log(_0x300e61);
      p478.response.status = 413;
      p478.body = vRequire9.ERROR_413("请求参数不合法");
    }
  }
  static async delete(p481) {
    const v361 = {
      AaQsm: function (p482, p483) {
        return p482 ^ p483;
      }
    };
    try {
      let {
        id: _0x29fb08
      } = JSON.parse(p481.request.body);
      const v362 = await BuryPointAlarmMessageModel.delete(_0x29fb08);
      p481.response.status = v361.AaQsm(322077, 322261);
      p481.body = vRequire9.SUCCESS_200("success", v362);
    } catch (_0x418145) {
      console.log(error);
      p481.response.status = 413;
      p481.body = vRequire9.ERROR_413("请求参数不合法");
    }
  }
  static async testSendNotice(p484) {
    CommonModel.calcFlowData("event_20230813_204443308", "event", 1);
  }
  static async ["alarmNotice"](p485, p486, p487, p488, p489, p490, p491, p492, p493) {
    const v363 = {
      nGypC: function (p494, p495) {
        return p494 + p495;
      },
      FgwXf: function (p496, p497) {
        return p496 + p497;
      },
      rvOGY: function (p498, p499) {
        return p498 ^ p499;
      },
      peUZl: function (p500, p501) {
        return p500 === p501;
      },
      YFnuO: function (p502, p503) {
        return p502 ^ p503;
      },
      nxBUA: function (p504, p505) {
        return p504 ^ p505;
      },
      GZxbx: function (p506, p507) {
        return p506 >= p507;
      },
      MPOjp: function (p508, p509) {
        return p508(p509);
      },
      aqFsi: function (p510, p511) {
        return p510(p511);
      },
      QBkPA: function (p512, p513) {
        return p512 ^ p513;
      },
      yNASJ: function (p514, p515) {
        return p514 === p515;
      },
      dRlXN: function (p516, p517) {
        return p516 === p517;
      },
      cVlAv: "lessThanAndEqual",
      GAWQt: function (p518, p519) {
        return p518 === p519;
      },
      bjsTo: function (p520, p521) {
        return p520 === p521;
      },
      KiVph: function (p522, p523) {
        return p522 + p523;
      },
      xNxUS: "警报卡片：",
      uHaTl: function (p524, p525) {
        return p524 != p525;
      },
      rqAMB: function (p526, p527) {
        return p526 ^ p527;
      },
      mFxhZ: "发送告警通知失败, ",
      zKAWq: function (p528, p529) {
        return p528 ^ p529;
      },
      rIfnG: function (p530, p531) {
        return p530 ^ p531;
      },
      ZaHVL: "yyyy-MM-dd hh:mm:ss"
    };
    let v364 = {
      id: p485
    };
    v364.alarmStatus = v363.rvOGY(803752, 803752);
    v364.updateTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
    await BuryPointCardModel.update(p485, v364);
    if (!p489 || p489 === "" || v363.peUZl(p489, undefined)) {
      return;
    }
    const v365 = await BuryPointAlarmModel.detailById(p489, v363.rvOGY(721159, 721158));
    if (!v365) {
      return;
    }
    const {
      id: _0x5415b0,
      name: _0x422f3b,
      projectId: _0x466216,
      frequency: _0x5a7cd8,
      frequencyUnit: _0x4f1df8,
      silentTime: _0x3df6e9,
      urgency: _0x20694a,
      rule: _0x4ba050,
      content: _0x12110f
    } = v365;
    let v366 = v363.YFnuO(472082, 472082);
    if (!_0x3df6e9 || v363.peUZl(_0x3df6e9, "")) {
      v366 = 0;
    } else {
      const v367 = _0x3df6e9.split(",");
      const v368 = new Date();
      let v369 = v368.Format("hh:mm");
      for (let v370 = 0; v370 < v367.length; v370++) {
        let v371 = v367[v370].split("-");
        let v372 = v371[0];
        let v373 = v371[v363.YFnuO(548507, 548506)];
        if (v369 >= v372 && v369 < v373) {
          v366 = 1;
          return;
        }
      }
    }
    const v374 = _0x4ba050.split(",");
    const v375 = v374[0];
    let v376 = v374[1];
    const vParseInt = parseInt(v374[2], v363.nxBUA(346276, 346286));
    const v377 = v374[3];
    v376 = v374[1];
    if (!global.eventInfo.alarmInfoList[p485]) {
      global.eventInfo.alarmInfoList[p485] = {};
    }
    if (!global.eventInfo.alarmInfoList[p485][p488]) {
      global.eventInfo.alarmInfoList[p485][p488] = 0;
    }
    const v378 = global.eventInfo.alarmInfoList[p485][p488];
    if (v375 === "greaterThanAndEqual" && v363.GZxbx(v363.MPOjp(parseFloat, p492), v363.aqFsi(parseFloat, v376))) {
      global.eventInfo.alarmInfoList[p485][p488] = v378 + 1;
    } else if (v375 === "lessThanAndEqual" && v363.aqFsi(parseFloat, p492) <= parseFloat(v376)) {
      global.eventInfo.alarmInfoList[p485][p488] = v378 + v363.QBkPA(822594, 822595);
    }
    if (v363.yNASJ(v366, 1)) {
      return;
    }
    if (v363.GZxbx(global.eventInfo.alarmInfoList[p485][p488], vParseInt)) {
      let v379 = "";
      if (v375 === "greaterThanAndEqual") {
        v379 = ">=";
      } else if (v363.dRlXN(v375, v363.cVlAv)) {
        v379 = "<=";
      }
      if (v377 && v363.GAWQt(v377, "percentage")) {
        v379 = v363.FgwXf(v379 + v376, "%");
      } else {
        v379 = v379 + v376;
      }
      let v380 = "";
      if (v363.bjsTo(_0x20694a, "normal")) {
        v380 = "一般";
      } else if (_0x20694a === "critical") {
        v380 = "严重";
      } else {
        v380 = "紧急";
      }
      let v381 = _0x12110f.replace(new RegExp("{alarmName}", "g"), p486).replace(new RegExp("{calcData}", "g"), p487).replace(new RegExp("{urgency}", "g"), v380).replace(new RegExp("{threshold}", "g"), v379).replace(new RegExp("{happenCount}", "g"), vParseInt);
      v381 = v363.KiVph(v381 + v363.xNxUS, "http://" + accountInfo.localAssetsDomain) + "/wf_event/dataView?dashboardType=3&showAddCardBtn=1&pageKey=" + p490;
      let v382 = {
        urgency: _0x20694a,
        projectId: _0x466216,
        alarmId: _0x5415b0,
        alarmName: _0x422f3b,
        pageId: p490,
        message: v381
      };
      let v383 = "";
      let v384 = [];
      if (p491 && p491 != "" && v363.uHaTl(p491, undefined)) {
        v384 = JSON.parse(p491);
        if (v384 && v384.length > v363.rqAMB(340029, 340029)) {
          v384.forEach(p532 => {
            v383 = v363.nGypC(v363.FgwXf(v383, p532.userId), ",");
          });
          try {
            vRequire32.eventAlarmCallback(p493, v381, v384);
          } catch (_0x596166) {
            vRequire7.printError(v363.mFxhZ + e);
          }
        }
      }
      v382.notifyUsers = v383 ? v383.substring(v363.zKAWq(136984, 136984), v383.lastIndexOf(",")) : "";
      await BuryPointAlarmMessageModel.create(v382);
      let v385 = {
        id: p485
      };
      v385.alarmStatus = v363.rIfnG(126797, 126796);
      v385.updateTime = new Date().Format(v363.ZaHVL);
      await BuryPointCardModel.update(p485, v385);
      global.eventInfo.alarmInfoList[p485][p488] = 0;
    } else {
      let v386 = {
        id: p485,
        alarmStatus: 0
      };
      v386.updateTime = new Date().Format(v363.ZaHVL);
      await BuryPointCardModel.update(p485, v386);
    }
  }
}
class C5 {
  static async ["create"](p533) {
    const v387 = {
      cCBfY: function (p534, p535) {
        return p534 ^ p535;
      },
      PQwPp: function (p536, p537) {
        return p536 * p537;
      },
      GEuQh: function (p538, p539) {
        return p538 === p539;
      },
      dhIrO: function (p540, p541) {
        return p540 ^ p541;
      },
      qfDsr: "创建失败，同项目下绑定圈选人不可重复"
    };
    try {
      let v388 = JSON.parse(p533.request.body);
      const {
        nickname: _0x17038b,
        userId: _0x52f2bd
      } = p533.user;
      const {
        bindUserId: _0x5919ea,
        bindBy: _0x194540,
        projectId: _0x2e7211,
        circleSelectionTime: _0x1d049,
        enableFlag: _0x2b15b0
      } = v388;
      if (_0x5919ea && _0x194540 && _0x2e7211 && _0x1d049 && _0x2b15b0 !== -v387.cCBfY(845103, 845102)) {
        v388.createBy = _0x17038b;
        v388.updateBy = _0x17038b;
        v388.createUserId = _0x52f2bd;
        v388.updateUserId = _0x52f2bd;
        if (_0x2b15b0 === 1) {
          const v389 = Date.now() + v387.PQwPp(v387.PQwPp(v387.PQwPp(_0x1d049, 60), 60), 1000);
          v388.deadlineValidTime = new Date(v389).Format("yyyy-MM-dd hh:mm:ss");
        } else {
          v388.deadlineValidTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
        }
        const v390 = await BuryPointCircleSelectModel.getSameBindUserId(_0x5919ea, _0x2e7211);
        if (v390 && v387.GEuQh(v390.bindUserId, _0x5919ea)) {
          p533.response.status = v387.dhIrO(126836, 126696);
          p533.body = vRequire9.ERROR_412(v387.qfDsr);
          return;
        }
        await BuryPointCircleSelectModel.create(v388);
        p533.response.status = 200;
        p533.body = vRequire9.SUCCESS_200("创建成功", "");
      } else {
        p533.response.status = v387.dhIrO(588190, 587778);
        p533.body = vRequire9.ERROR_412("创建失败，请求参数不能为空！");
      }
    } catch (_0x5b141e) {
      console.log(_0x5b141e);
      p533.response.status = 413;
      p533.body = vRequire9.ERROR_413("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_PARAM_FAIL));
    }
  }
  static async detail(p542) {
    const v391 = vRequire3.parseQs(p542.request.url);
    let v392 = v391.id;
    if (v392) {
      let v393 = await BuryPointCircleSelectModel.detail(v392);
      p542.response.status = 200;
      p542.body = vRequire9.SUCCESS_200("success", v393);
    } else {
      p542.response.status = 412;
      p542.body = vRequire9.ERROR_412("fail");
    }
  }
  static async update(p543) {
    const v394 = {
      DCidC: function (p544, p545) {
        return p544 ^ p545;
      },
      KlOYi: function (p546, p547) {
        return p546 !== p547;
      },
      JpDGO: function (p548, p549) {
        return p548 ^ p549;
      },
      QYcqi: function (p550, p551) {
        return p550 + p551;
      }
    };
    try {
      let v395 = JSON.parse(p543.request.body);
      const {
        nickname: _0x1db741,
        userId: _0x4913b8
      } = p543.user;
      const {
        id: _0x3f9c2b,
        circleSelectionTime: _0x13aff5,
        enableFlag = v394.DCidC(172963, 172962)
      } = v395;
      if (_0x3f9c2b && _0x13aff5 && v394.KlOYi(enableFlag, -v394.JpDGO(566889, 566888))) {
        const v396 = {
          circleSelectionTime: _0x13aff5,
          enableFlag: enableFlag,
          updateBy: _0x1db741,
          updateUserId: _0x4913b8
        };
        if (enableFlag === 1) {
          const v397 = v394.QYcqi(Date.now(), _0x13aff5 * 60 * 60 * 1000);
          v396.deadlineValidTime = new Date(v397).Format("yyyy-MM-dd hh:mm:ss");
        } else {
          v396.deadlineValidTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
        }
        await BuryPointCircleSelectModel.update(_0x3f9c2b, v396);
        let v398 = await BuryPointCircleSelectModel.detail(_0x3f9c2b);
        p543.response.status = 200;
        p543.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_SUCCESS), v398);
      } else {
        p543.response.status = 412;
        p543.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_PARAM_FAIL));
      }
    } catch (_0x471832) {
      console.log(_0x471832);
      p543.response.status = 413;
      p543.body = vRequire9.ERROR_413("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_FAIL));
    }
  }
  static async ["delete"](p552) {
    const v399 = {
      vrWfx: "delete",
      rXxmr: function (p553, p554) {
        return p553 ^ p554;
      },
      tKUBa: "success"
    };
    let v400 = JSON.parse(p552.request.body);
    const {
      ids: _0x58b08f
    } = v400;
    const v401 = await BuryPointCircleSelectModel.batchDeletion(_0x58b08f);
    console.log(v399.vrWfx, v401);
    p552.response.status = v399.rXxmr(820324, 820396);
    p552.body = vRequire9.SUCCESS_200(v399.tKUBa, "");
  }
  static async ["getPageList"](p555) {
    let v402 = p555.request.body;
    const v403 = JSON.parse(v402);
    const {
      projectId = "",
      page: _0x2c5fd1,
      pageSize: _0x33000a,
      enableFlag = -1,
      updateUserId = "",
      bindUserId = ""
    } = v403;
    if (projectId) {
      const v404 = await BuryPointCircleSelectModel.getPageCount(projectId);
      const v405 = v404[0].count;
      const v406 = await BuryPointCircleSelectModel.getPageList(projectId, enableFlag, updateUserId, bindUserId, _0x2c5fd1, _0x33000a);
      p555.response.status = 200;
      p555.body = vRequire9.SUCCESS_200("success", {
        list: v406,
        totalCount: v405
      });
    } else {
      p555.response.status = 412;
      p555.body = vRequire9.ERROR_412("项目ID不能为空");
    }
  }
  static async getAllBindUserId(p556) {
    const v407 = {
      rYggz: "success"
    };
    let v408 = p556.request.body;
    const v409 = JSON.parse(v408);
    const {
      projectId = ""
    } = v409;
    if (projectId) {
      const v410 = await BuryPointCircleSelectModel.getAllBindUserId(projectId);
      p556.response.status = 200;
      p556.body = vRequire9.SUCCESS_200(v407.rYggz, v410);
    } else {
      p556.response.status = 412;
      p556.body = vRequire9.ERROR_412("项目ID不能为空");
    }
  }
  static async ["scheduledUpdateEnableFlag"]() {
    const v411 = await BuryPointCircleSelectModel.getExpiredList();
    if (!v411) {
      return;
    }
    for (let v412 = 0; v412 < v411.length; v412++) {
      const {
        id: _0x249efc
      } = v411[v412];
      const v413 = {};
      v413.deadlineValidTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
      v413.enableFlag = 0;
      BuryPointCircleSelectModel.update(_0x249efc, v413);
    }
  }
}
class C6 {
  static async ["create"](p557) {
    const v414 = {
      lDSxM: function (p558, p559) {
        return p558 ^ p559;
      },
      xfdSf: function (p560, p561) {
        return p560 ^ p561;
      }
    };
    let v415 = JSON.parse(p557.request.body);
    const {
      nickname: _0x516f41
    } = p557.user;
    v415.createBy = _0x516f41;
    v415.status = v414.lDSxM(746535, 746534);
    v415.version = "v1.0.0";
    v415.releaseScript = "";
    if (v415.releaseName && v415.projectId && v415.pointIds && v415.status && v415.version) {
      let v416 = v415.pointIds.split(",");
      await C6.createNewSdk(v415.projectId, v415.releaseName, v416, _0x516f41);
      p557.response.status = 200;
      p557.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_SUCCESS), "");
    } else {
      p557.response.status = v414.xfdSf(395376, 395756);
      p557.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_PARAM_FAIL));
    }
  }
  static async createNewSdk(p562, p563, p564, p565) {
    const v417 = {
      ObAUS: function (p566, p567) {
        return p566 + p567;
      },
      pRcwk: function (p568, p569) {
        return p568 > p569;
      }
    };
    let v418 = {
      projectId: p562,
      releaseName: p563,
      pointIds: p564 + "",
      releaseScript: "",
      status: 1
    };
    v418.version = "v1.0.0";
    v418.uploadDomain = "0";
    v418.createBy = p565;
    let v419 = await SdkReleaseModel.create(v418);
    if (v419) {
      let v420 = await BuryPointWarehouseModel.getPointIds(p562, 1);
      if (v420 && v417.pRcwk(v420.length, 0)) {
        for (let v421 = 0; v421 < v420.length; v421++) {
          p564.push(v420[v421].id);
        }
      }
      for (let v422 = 0; v422 < p564.length; v422++) {
        C6.createTableByDay(p562, p564[v422], 0).catch(p570 => {
          vRequire7.printError(v417.ObAUS(v417.ObAUS("执行{" + p562 + "_", p564[v422]), "}创建表报错："), p570);
        });
      }
    }
  }
  static async ["createWePointData"](p571, p572) {
    const v423 = {
      TNzmB: function (p573, p574) {
        return p573 + p574;
      },
      XxdwO: function (p575, p576) {
        return p575 === p576;
      },
      YIMgJ: function (p577, p578) {
        return p577 < p578;
      },
      UyVQr: function (p579, p580) {
        return p579 + p580;
      },
      spXlo: function (p581, p582) {
        return p581 ^ p582;
      }
    };
    let v424 = [];
    const v425 = await BuryPointWarehouseModel.getList(p571, "", 1);
    let v426 = [];
    for (let v427 = 0; v427 < vRequire28.length; v427++) {
      for (let v428 = 0; v428 < v425.length; v428++) {
        if (v423.XxdwO(v425[v428].replacePointIdKey, vRequire28[v427].replacePointIdKey)) {
          break;
        }
        v426.push(vRequire28[v427]);
      }
    }
    for (let v429 = 0; v429 < v426.length; v429++) {
      let v430 = v426[v429];
      let {
        fieldList: _0x2e2c0a,
        replacePointIdKey: _0x4a6c82
      } = v430;
      let v431 = "";
      for (let v432 = 0; v423.YIMgJ(v432, _0x2e2c0a.length); v432++) {
        let v433 = _0x2e2c0a[v432];
        let {
          fieldName: _0x24cfbe,
          fieldAlias: _0x224159,
          fieldType: _0xc0d21f,
          fieldLength: _0x207130
        } = v433;
        const v434 = await BuryPointFieldModel.existSameField(p571, _0x24cfbe);
        if (!v434 || v434 && v423.XxdwO(v434.length, 0)) {
          v433.projectId = p571;
          v433.createBy = p572;
          let v435 = await BuryPointFieldModel.create(v433);
          v431 = v431 + v435.id + ",";
        } else {
          v431 = v423.UyVQr(v423.TNzmB(v431, v434[v423.spXlo(464209, 464209)].id), ",");
        }
      }
      v431 = v431.substring(0, v431.lastIndexOf(","));
      let v436 = await BuryPointWarehouseModel.getReplacePointIdKey(p571, _0x4a6c82);
      if (v436 && v436.length > 0) {
        v424.push(v436[v423.spXlo(836046, 836046)].pointId);
      } else {
        let v437 = await BuryPointWarehouseModel.getMaxPointId();
        if (v437 && v437.length > 0) {
          v430.pointId = parseInt(v437[0].maxId, 10) + v423.spXlo(752515, 752514);
        } else {
          v430.pointId = 1;
        }
        v424.push(v430.pointId);
        v430.fields = v431;
        v430.createBy = p572;
        v430.projectId = p571;
        await BuryPointWarehouseModel.create(v430);
      }
    }
    for (let v438 = 0; v438 < v424.length; v438++) {
      C6.createTableByDay(p571, v424[v438], 0).catch(p583 => {
        vRequire7.printError(v423.TNzmB(v423.TNzmB("执行{" + p571, "_"), v424[v438]) + "}创建表报错：", p583);
      });
    }
  }
  static async ["createWeField"](p584, p585, p586) {
    const v439 = {
      NAVEO: "fieldName",
      RiLkJ: function (p587, p588) {
        return p587 ^ p588;
      },
      ehkxt: function (p589, p590) {
        return p589 ^ p590;
      },
      Izysn: function (p591, p592) {
        return p591 < p592;
      },
      FaSWK: function (p593, p594) {
        return p593 + p594;
      },
      denxs: " ALTER TABLE "
    };
    let v440 = [];
    let v441 = [];
    const v442 = await BuryPointFieldModel.getListByProjectIdAndWeType(p584, 1);
    v441 = vRequire21.differenceBy(vRequire27, v442, v439.NAVEO);
    if (v441.length > 0) {
      for (let v443 = 0; v443 < v441.length; v443++) {
        let v444 = v441[v443];
        let {
          fieldName: _0x135dc6,
          fieldAlias: _0x500613,
          fieldType: _0x4b6b2a,
          fieldLength: _0x59f2ee
        } = v444;
        let v445 = await BuryPointFieldModel.existSameField(p584, _0x135dc6);
        if (!v445 || v445 && v445.length === v439.RiLkJ(637187, 637187)) {
          v444.projectId = p584;
          v444.createBy = p586;
          await BuryPointFieldModel.create(v444);
        }
      }
      const v446 = await BuryPointWarehouseModel.getList(p584, "", v439.ehkxt(904890, 904891));
      for (let v447 = 0; v439.Izysn(v447, v446.length); v447++) {
        v440.push(v446[v447]);
      }
      const v448 = await BuryPointWarehouseModel.getNoWebfunnyListByPointIds(p585);
      for (let v449 = v439.RiLkJ(219274, 219274); v449 < v448.length; v449++) {
        v440.push(v448[v449]);
      }
      for (let v450 = 0; v450 < v440.length; v450++) {
        let v451 = p584 + "_" + v440[v450].pointId;
        for (let v452 = 0; v452 < v441.length; v452++) {
          let {
            fieldName: _0x3128f5,
            fieldType: _0x3d29d7
          } = v441[v452];
          let v453 = v439.FaSWK(v439.FaSWK(v439.denxs + v451 + " ADD COLUMN " + _0x3128f5, " "), _0x3d29d7);
          await CommonModel.alterAddColumn(v453).catch(p595 => {
            vRequire7.printError("新增字段日志表: " + v451 + "," + _0x3128f5 + "}报错：", p595);
          });
        }
      }
    }
  }
  static async update(p596) {
    const v454 = {
      fkGZD: "}创建表报错：",
      ZpdmH: "/wfCenter/getProductInfoByCompanyId error",
      UjfVz: function (p597, p598) {
        return p597 ^ p598;
      },
      Kuoyx: function (p599, p600) {
        return p599 < p600;
      },
      omSOT: function (p601, p602) {
        return p601 === p602;
      },
      LtcGH: "success"
    };
    let v455 = JSON.parse(p596.request.body);
    let v456 = v455.id;
    const {
      nickname: _0x16934f,
      companyId: _0x3690db
    } = p596.user;
    v455.updateBy = _0x16934f;
    if (v455) {
      const {
        projectId: _0x8f7822,
        pointIds: _0x3e9b23
      } = v455;
      await C6.createWePointData(_0x8f7822, _0x16934f);
      const v457 = await SdkReleaseModel.getPointIdsList(_0x8f7822);
      let v458 = [];
      for (let v459 = 0; v459 < v457.length; v459++) {
        v458.push(v457[v459].pointIds.split(","));
      }
      const v460 = [...new Set(v458)].join(",");
      await C6.createWeField(_0x8f7822, v460, _0x16934f);
      let v461 = await SdkReleaseModel.detail(v456);
      const v462 = v461.pointIds;
      let v463 = await SdkReleaseModel.update(v456, v455);
      if (v463) {
        const v464 = _0x3e9b23.split(",");
        let v465 = await BuryPointWarehouseModel.getPointIds(_0x8f7822, 1);
        if (v465 && v465.length > v454.UjfVz(409812, 409812)) {
          for (let v466 = 0; v466 < v465.length; v466++) {
            v464.push(v465[v466].id);
          }
        }
        for (let v467 = 0; v454.Kuoyx(v467, v464.length); v467++) {
          await C6.createTableByDay(_0x8f7822, v464[v467], 0).catch(p603 => {
            vRequire7.printError("执行{" + _0x8f7822 + "_" + v464[v467] + v454.fkGZD, p603);
          });
        }
        let v468 = 7;
        if (v454.omSOT(accountInfo.isCloud, true)) {
          const v469 = await vRequire3.postJson(LOCAL_SERVER + "/wfCenter/getProductInfoByCompanyId", {
            companyId: _0x3690db
          }).catch(p604 => {
            console.error(v454.ZpdmH, p604);
          });
          if (v469) {
            const v470 = v469.data;
            v468 = accountInfo.saveDays > v470.saveDays ? v470.saveDays : accountInfo.saveDays;
          }
        } else {
          v468 = global.eventInfo.purchaseCodeType === 0 || global.eventInfo.purchaseCodeType === 81 ? 7 : accountInfo.saveDays;
        }
        setTimeout(() => {
          BuryPointProjectModel.createTTLForCreatedAt(_0x8f7822, v464, v468);
        }, v454.UjfVz(678029, 678023) * 1000);
        p596.response.status = 200;
        p596.body = vRequire9.SUCCESS_200(v454.LtcGH, "");
      }
    } else {
      p596.response.status = 412;
      p596.body = vRequire9.ERROR_412("fail");
    }
  }
  static async deleteLogTable(p605, p606, p607, p608) {
    const v471 = {
      xsPaV: function (p609, p610) {
        return p609 + p610;
      },
      ZMVFK: function (p611, p612) {
        return p611 ^ p612;
      },
      HhQpj: function (p613, p614) {
        return p613 + p614;
      }
    };
    const v472 = [];
    const v473 = p608.split(",");
    var v474 = v473.filter(p615 => !p607.some(p616 => p616 === p615));
    for (let v475 = v471.ZMVFK(902676, 902676); v475 < v474.length; v475++) {
      const v476 = await SdkReleaseModel.checkPointIdByOthers(p605, v474[v475], p606).catch(p617 => {
        vRequire7.error(p617);
      });
      let v477 = v476[0].count;
      if (v477 > 0) {
        continue;
      }
      let v478 = v471.HhQpj(p605, "_") + v474[v475];
      v472.push(v478);
    }
    if (v472 && v472.length > 0) {
      let v479 = new Set(v472);
      let v480 = [...v479];
      v480.forEach(async p618 => {
        CommonModel.deleteTableByName(p618).then(() => {
          vRequire7.printInfo(v471.xsPaV("成功删除日志表: ", p618));
        });
      });
    }
  }
  static async delete(p619) {
    const v481 = {
      sSPym: function (p620, p621) {
        return p620 ^ p621;
      }
    };
    let v482 = JSON.parse(p619.request.body);
    const {
      id: _0x1d48f8
    } = v482;
    await SdkReleaseModel.delete(_0x1d48f8);
    p619.response.status = v481.sSPym(564224, 564424);
    p619.body = vRequire9.SUCCESS_200("success", "");
  }
  static async ["detail"](p622) {
    const v483 = {
      zPfTK: function (p623, p624) {
        return p623 ^ p624;
      },
      MJyfh: function (p625, p626) {
        return p625 === p626;
      },
      SKNYI: "Wechat",
      dovYI: function (p627, p628) {
        return p627(p628);
      }
    };
    const v484 = vRequire3.parseQs(p622.request.url);
    let v485 = v484.id;
    if (v485) {
      let v486 = await SdkReleaseModel.detail(v485);
      const {
        projectId: _0x2519de,
        pointIds: _0x24af8c,
        uploadDomain: _0x2ca4b3
      } = v486;
      let v487 = {
        uploadDomain: _0x2ca4b3
      };
      v487.projectId = _0x2519de;
      let v488 = [];
      let v489 = await BuryPointWarehouseModel.getList(_0x2519de, "", 1);
      let v490 = await BuryPointWarehouseModel.getListByPointIds(_0x24af8c);
      for (let v491 = v483.zPfTK(544553, 544553); v491 < v490.length; v491++) {
        const v492 = {
          pointName: v490[v491].pointName,
          pointId: v490[v491].pointId
        };
        const v493 = await BuryPointWarehouseModel.detailByPointId(v492.pointId);
        const {
          fields: _0x23388d
        } = v493;
        const v494 = [];
        const v495 = await BuryPointFieldModel.getListByFieldIdsAndWeType(_0x23388d, 0);
        for (let v496 = 0; v496 < v495.length; v496++) {
          const v497 = {
            fieldName: v495[v496].fieldName,
            fieldAlias: v495[v496].fieldAlias
          };
          v497.fieldType = v483.MJyfh(v495[v496].fieldType.toLowerCase(), "bigint") ? "INT" : v495[v496].fieldType;
          v497.fieldLength = v495[v496].fieldLength;
          v497.fieldDesc = v495[v496].fieldDesc;
          v494.push(v497);
        }
        v492.fieldList = v494;
        v488.push(v492);
      }
      v487.points = v488;
      v487.wePointList = v489;
      let v498 = await C6.getReleaseScript(v486, v489, v490, "H5");
      v487.h5Code = decodeURIComponent(v498.eventCode);
      v487.h5DebugCode = decodeURIComponent(v498.eventDebugCode);
      let v499 = await C6.getReleaseScript(v486, v489, v490, "Uniapp");
      v487.uniappCode = decodeURIComponent(v499.eventCode);
      v487.uniappDebugCode = decodeURIComponent(v499.eventDebugCode);
      let v500 = await C6.getReleaseScript(v486, v489, v490, v483.SKNYI);
      v487.wechatCode = decodeURIComponent(v500.eventCode);
      v487.wechatDebugCode = v483.dovYI(decodeURIComponent, v500.eventDebugCode);
      p622.response.status = 200;
      p622.body = vRequire9.SUCCESS_200("success", v487);
    } else {
      p622.response.status = 412;
      p622.body = vRequire9.ERROR_412("fail");
    }
  }
  static async getPageList(p629) {
    const v501 = {
      UduSO: function (p630, p631) {
        return p630 ^ p631;
      },
      BSFVk: function (p632, p633) {
        return p632 === p633;
      }
    };
    let v502 = p629.request.body;
    const v503 = JSON.parse(v502);
    const {
      releaseName: _0x29a849,
      teamProjectIds: _0xca3785,
      projectId: _0x54dfe7,
      status: _0x47302a,
      page: _0x1f831c,
      pageSize: _0x5d418d
    } = v503;
    const {
      userId: _0x57e0dd,
      userType: _0x5538ee
    } = p629.user;
    let v504 = [];
    let v505 = v501.UduSO(890417, 890417);
    let v506 = {};
    if (_0x5538ee === USER_INFO.USER_TYPE_ADMIN || v501.BSFVk(_0x5538ee, USER_INFO.USER_TYPE_SUPERADMIN)) {
      v504 = await SdkReleaseModel.getPageCount(_0x29a849, "", _0x54dfe7, _0x47302a);
      v506 = await SdkReleaseModel.getPageList(_0x29a849, "", _0x54dfe7, _0x47302a, _0x1f831c, _0x5d418d);
    } else {
      let v507 = "";
      if (_0xca3785) {
        const v508 = _0xca3785.split(",");
        for (let v509 = 0; v509 < v508.length; v509++) {
          if (v508[v509].indexOf("event") != -1) {
            v507 = v507 + "," + v508[v509];
          }
        }
      }
      v504 = await SdkReleaseModel.getPageCount(_0x29a849, v507, _0x54dfe7, _0x47302a);
      v506 = await SdkReleaseModel.getPageList(_0x29a849, v507, _0x54dfe7, _0x47302a, _0x1f831c, _0x5d418d);
    }
    v505 = v504[v501.UduSO(777300, 777300)].count;
    for (let v510 = 0; v510 < v506.length; v510++) {
      const v511 = v506[v510];
      const {
        projectId: _0x161aad,
        pointIds: _0x5c17f4
      } = v511;
      let v512 = await BuryPointProjectModel.getNameByProjectIdAndType(_0x161aad, 1);
      const {
        name: _0x103cad
      } = v512[0];
      v511.projectName = _0x103cad;
      let v513 = [];
      let v514 = await BuryPointWarehouseModel.getListByPointIds(_0x5c17f4);
      for (let v515 = 0; v515 < v514.length; v515++) {
        if (v514[v515].weType === v501.UduSO(862708, 862709)) {
          continue;
        }
        const v516 = {
          pointName: v514[v515].pointName,
          pointId: v514[v515].pointId
        };
        v513.push(v516);
      }
      v511.points = v513;
    }
    p629.response.status = 200;
    p629.body = vRequire9.SUCCESS_200("success", {
      list: v506,
      totalCount: v505
    });
  }
  static async getList(p634) {
    const v517 = {
      hiwou: function (p635, p636) {
        return p635 ^ p636;
      },
      ePkhP: function (p637, p638) {
        return p637 < p638;
      },
      uxWwL: function (p639, p640) {
        return p639 + p640;
      },
      FfJLD: function (p641, p642) {
        return p641 ^ p642;
      },
      FXNrN: function (p643, p644) {
        return p643 ^ p644;
      }
    };
    let v518 = p634.request.body;
    const v519 = JSON.parse(v518);
    const {
      releaseName: _0x4d172e,
      projectId: _0x21ebc2,
      status: _0x2b9b1f
    } = v519;
    const v520 = await SdkReleaseModel.getList(_0x4d172e, _0x21ebc2, _0x2b9b1f);
    for (let v521 = v517.hiwou(990306, 990306); v521 < v520.length; v521++) {
      const v522 = v520[v521];
      let v523 = "";
      const {
        projectId: _0x53f3f1,
        pointIds: _0x667036
      } = v522;
      let v524 = await BuryPointProjectModel.getNameByProjectIdAndType(_0x53f3f1, 1);
      const {
        name: _0x21bfb5
      } = v524[0];
      v522.projectName = _0x21bfb5;
      let v525 = await BuryPointWarehouseModel.getListByPointIds(_0x667036);
      for (let v526 = 0; v517.ePkhP(v526, v525.length); v526++) {
        v523 = v517.uxWwL(v523, v525[v526].pointName) + ",";
      }
      v523 = v523.substring(v517.FfJLD(800409, 800409), v523.lastIndexOf(","));
      v522.pointNames = v523;
    }
    p634.response.status = v517.FXNrN(909717, 909661);
    p634.body = vRequire9.SUCCESS_200("success", v520);
  }
  static async getAllList(p645) {
    const v527 = {
      NVHZF: function (p646, p647) {
        return p646 < p647;
      },
      yPMUG: function (p648, p649) {
        return p648 + p649;
      },
      XpPmA: function (p650, p651) {
        return p650 ^ p651;
      }
    };
    const v528 = await SdkReleaseModel.getAllList();
    for (let v529 = 0; v527.NVHZF(v529, v528.length); v529++) {
      const v530 = v528[v529];
      let v531 = "";
      const {
        pointIds: _0x3cc6b9
      } = v530;
      let v532 = await BuryPointWarehouseModel.getListByPointIds(_0x3cc6b9);
      for (let v533 = 0; v533 < v532.length; v533++) {
        v531 = v527.yPMUG(v531, v532[v533].pointName) + ",";
      }
      v531 = v531.substring(v527.XpPmA(717033, 717033), v531.lastIndexOf(","));
      v530.pointNames = v531;
    }
    p645.response.status = 200;
    p645.body = vRequire9.SUCCESS_200("success", v528);
  }
  static async getAllList(p652) {
    const v534 = {
      oCdQi: function (p653, p654) {
        return p653 ^ p654;
      },
      uvbHF: function (p655, p656) {
        return p655 ^ p656;
      },
      OzKLN: "success"
    };
    const v535 = await SdkReleaseModel.getAllList();
    for (let v536 = 0; v536 < v535.length; v536++) {
      const v537 = v535[v536];
      let v538 = "";
      const {
        pointIds: _0x3e56e2
      } = v537;
      let v539 = await BuryPointWarehouseModel.getListByPointIds(_0x3e56e2);
      for (let v540 = v534.oCdQi(264627, 264627); v540 < v539.length; v540++) {
        v538 = v538 + v539[v540].pointName + ",";
      }
      v538 = v538.substring(v534.uvbHF(808244, 808244), v538.lastIndexOf(","));
      v537.pointNames = v538;
    }
    p652.response.status = 200;
    p652.body = vRequire9.SUCCESS_200(v534.OzKLN, v535);
  }
  static async createReleaseScript(p657) {
    const v541 = {
      lMUrU: "success"
    };
    let v542 = p657.request.body;
    const v543 = JSON.parse(v542);
    const {
      id: _0x165f68,
      type: _0x2a3c2f
    } = v543;
    let v544 = await SdkReleaseModel.detail(_0x165f68);
    const {
      projectId: _0x251a87,
      pointIds: _0x4ba504
    } = v544;
    let v545 = await BuryPointWarehouseModel.getList(_0x251a87, "", 1);
    let v546 = await BuryPointWarehouseModel.getListByPointIds(_0x4ba504);
    let v547 = await C6.getReleaseScript(v544, v545, v546, _0x2a3c2f);
    p657.response.status = 200;
    p657.body = vRequire9.SUCCESS_200(v541.lMUrU, v547);
  }
  static async getReleaseScript(p658, p659, p660, p661) {
    const v548 = {
      JTdSV: function (p662, p663) {
        return p662 ^ p663;
      },
      imYpn: "window",
      uDaFi: function (p664, p665) {
        return p664 < p665;
      },
      rXRIA: "[\\n][ ]*",
      qzYfU: function (p666, p667) {
        return p666 + p667;
      },
      TlMvu: function (p668, p669) {
        return p668 + p669;
      },
      QCFmC: function (p670, p671) {
        return p670 == p671;
      },
      slPjW: function (p672, p673) {
        return p672 === p673;
      },
      nBrYi: function (p674, p675) {
        return p674 === p675;
      },
      RqJVw: "ExposureEventPointId",
      BlQYV: "ClickEventPointId",
      TLloU: "\"Webfunny-Replace-ClickEventPointId\"",
      tpYpR: "HeatMapClickPointId",
      jGYgA: "\"Webfunny-Replace-HeatMapClickPointId\"",
      ixBRQ: "PageViewPointId",
      lUIJJ: "\"Webfunny-Replace-PageViewPointId\"",
      UNoYl: "HeatMapPointId",
      zlogn: "\"Webfunny-Replace-HeatMapPointId\"",
      EeKkj: function (p676, p677) {
        return p676 === p677;
      },
      GvUFx: function (p678, p679) {
        return p678 + p679;
      },
      dgxoh: "Webfunny-Replace-AssetsDomain",
      JVGDS: "\"\\$\\$\\$webfunny-event-code\\$\\$\\$\"",
      KJzku: "$$$webfunny-event-domain$$$"
    };
    const {
      projectId: _0x1e2df1,
      uploadDomain: _0x44ab26
    } = p658;
    let v549 = [];
    let v550 = [];
    for (let v551 = v548.JTdSV(729336, 729336); v551 < p659.length; v551++) {
      v549.push(p659[v551]);
      const {
        pointId: _0x1c2455,
        weType: _0x2ec785,
        replacePointIdKey: _0x3eb0ec
      } = p659[v551];
      v550.push({
        pointId: _0x1c2455,
        weType: _0x2ec785,
        replacePointIdKey: _0x3eb0ec
      });
    }
    for (let v552 = 0; v552 < p660.length; v552++) {
      v549.push(p660[v552]);
    }
    let v553 = "";
    let v554 = "window";
    if (p661 == "H5") {
      v554 = v548.imYpn;
    } else if (p661 == "Uniapp") {
      v554 = "uni";
    } else if (p661 == "Wechat") {
      v554 = "wx";
    }
    for (let v555 = v548.JTdSV(430659, 430659); v548.uDaFi(v555, v549.length); v555++) {
      let v556 = v549[v555];
      const {
        pointId: _0x4050b3,
        fields: _0x2ba711
      } = v556;
      v553 += _0x4050b3 + ":{\n                    fields:{},\n                    trackEvent:function(params, configs){\n                        " + v554 + ".webfunnyTrackEvent(" + v554 + ",params,configs,'" + _0x1e2df1 + "','" + _0x4050b3 + "')\n                    }\n                },";
    }
    v553 = v553.replace(new RegExp(v548.rXRIA, "g"), "");
    v553 = v548.qzYfU(v548.TlMvu("{", v553), "}");
    let v557 = "";
    let v558 = "";
    let v559 = "//";
    if (p661 == "H5") {
      v557 = fs2.readFileSync(vRequire14.resolve(__dirname, "..") + "/lib/webfunny-track.web.umd.js", "utf-8");
      v558 = fs2.readFileSync(vRequire14.resolve(__dirname, "..") + "/lib/debug/webfunny-track.web.umd.dev.js", "utf-8");
    } else if (v548.QCFmC(p661, "Uniapp")) {
      v559 = "https://";
      v557 = fs2.readFileSync(vRequire14.resolve(__dirname, "..") + "/lib/webfunny-track.uni.umd.js", "utf-8");
      v558 = fs2.readFileSync(vRequire14.resolve(__dirname, "..") + "/lib/debug/webfunny-track.uni.umd.dev.js", "utf-8");
    } else if (p661 == "Wechat") {
      v559 = "https://";
      v557 = fs2.readFileSync(vRequire14.resolve(__dirname, "..") + "/lib/webfunny-track.wx.umd.js", "utf-8");
      v558 = fs2.readFileSync(vRequire14.resolve(__dirname, "..") + "/lib/debug/webfunny-track.wx.umd.dev.js", "utf-8");
    } else if (p661 == "Java") {}
    let v560 = accountInfo.uploadServerDomain;
    if (!v560 || v548.slPjW(v560, "") || v548.nBrYi(v560, undefined)) {
      v560 = accountInfo.localServerDomain;
    }
    for (let v561 = 0; v561 < v550.length; v561++) {
      const {
        pointId: _0x4f4f6b,
        replacePointIdKey: _0x26f142
      } = v550[v561];
      if (_0x26f142 === v548.RqJVw) {
        v557 = v557.replace(new RegExp("\"Webfunny-Replace-ExposureEventPointId\"", "g"), _0x4f4f6b);
        v558 = v558.replace(new RegExp("\"Webfunny-Replace-ExposureEventPointId\"", "g"), _0x4f4f6b);
      } else if (v548.slPjW(_0x26f142, v548.BlQYV)) {
        v557 = v557.replace(new RegExp("\"Webfunny-Replace-ClickEventPointId\"", "g"), _0x4f4f6b);
        v558 = v558.replace(new RegExp(v548.TLloU, "g"), _0x4f4f6b);
      } else if (_0x26f142 === "HeatMapStopPointId") {
        v557 = v557.replace(new RegExp("\"Webfunny-Replace-HeatMapStopPointId\"", "g"), _0x4f4f6b);
        v558 = v558.replace(new RegExp("\"Webfunny-Replace-HeatMapStopPointId\"", "g"), _0x4f4f6b);
      } else if (_0x26f142 === v548.tpYpR) {
        v557 = v557.replace(new RegExp("\"Webfunny-Replace-HeatMapClickPointId\"", "g"), _0x4f4f6b);
        v558 = v558.replace(new RegExp(v548.jGYgA, "g"), _0x4f4f6b);
      } else if (_0x26f142 === v548.ixBRQ) {
        v557 = v557.replace(new RegExp(v548.lUIJJ, "g"), _0x4f4f6b);
        v558 = v558.replace(new RegExp(v548.lUIJJ, "g"), _0x4f4f6b);
      } else if (_0x26f142 === "HeartBeatPointId") {
        v557 = v557.replace(new RegExp("\"Webfunny-Replace-HeartBeatPointId\"", "g"), _0x4f4f6b);
        v558 = v558.replace(new RegExp("\"Webfunny-Replace-HeartBeatPointId\"", "g"), _0x4f4f6b);
      } else if (_0x26f142 === v548.UNoYl) {
        v557 = v557.replace(new RegExp(v548.zlogn, "g"), _0x4f4f6b);
        v558 = v558.replace(new RegExp("\"Webfunny-Replace-HeatMapPointId\"", "g"), _0x4f4f6b);
      } else if (v548.EeKkj(_0x26f142, "BrowsingHistoryPointId")) {
        v557 = v557.replace(new RegExp("\"Webfunny-Replace-BrowsingHistoryPointId\"", "g"), _0x4f4f6b);
        v558 = v558.replace(new RegExp("\"Webfunny-Replace-BrowsingHistoryPointId\"", "g"), _0x4f4f6b);
      }
    }
    let v562 = "";
    if (_0x44ab26 === "0") {
      v562 = v548.TlMvu(v559, v560);
    } else if (_0x44ab26 === "" || _0x44ab26 === "/") {
      v562 = _0x44ab26;
    } else {
      v562 = v548.GvUFx(v559, _0x44ab26);
    }
    let v563 = "//" + accountInfo.localAssetsDomain;
    let v564 = v557.toString().replace(new RegExp("\"\\$\\$\\$webfunny-event-code\\$\\$\\$\"", "g"), v553).replace("$$$webfunny-event-domain$$$", v562).replace(v548.dgxoh, v563).replace(new RegExp("\\$\\$\\$projectId\\$\\$\\$", "g"), _0x1e2df1);
    let vEncodeURIComponent = encodeURIComponent(v564);
    let v565 = v558.toString().replace(new RegExp(v548.JVGDS, "g"), v553).replace(v548.KJzku, v562).replace("Webfunny-Replace-AssetsDomain", v563).replace(new RegExp("\\$\\$\\$projectId\\$\\$\\$", "g"), _0x1e2df1);
    let vEncodeURIComponent2 = encodeURIComponent(v565);
    return {
      eventCode: vEncodeURIComponent,
      eventDebugCode: vEncodeURIComponent2
    };
  }
  static async ["downloadScript"](p680) {
    const v566 = {
      utzhY: function (p681, p682, p683) {
        return p681(p682, p683);
      },
      dzGCn: function (p684, p685, p686) {
        return p684(p685, p686);
      },
      ASBbd: function (p687, p688) {
        return p687 * p688;
      },
      WLebW: function (p689, p690) {
        return p689 ^ p690;
      }
    };
    const v567 = vRequire3.parseQs(p680.request.url);
    let v568 = v567.id;
    let v569 = v567.type;
    const v570 = await C6.createScript(v568, v569);
    const v571 = "servers/event/lib/" + v570;
    p680.attachment(v571);
    await v566.utzhY(vRequire17, p680, v571);
    v566.dzGCn(setTimeout, () => {
      fs2.unlinkSync(v571);
    }, v566.ASBbd(v566.WLebW(570985, 565529), 100));
  }
  static async ["createScript"](p691, p692) {
    const v572 = {
      LWekv: function (p693, p694) {
        return p693 ^ p694;
      },
      ZdYtq: function (p695, p696) {
        return p695 + p696;
      },
      IWxmX: "SdkReleaseScript",
      iIXQf: ".js"
    };
    let v573 = await SdkReleaseModel.detail(p691);
    const {
      projectId: _0x48abea,
      pointIds: _0xe6ba22
    } = v573;
    let v574 = await BuryPointWarehouseModel.getList(_0x48abea, "", v572.LWekv(930944, 930945));
    let v575 = await BuryPointWarehouseModel.getListByPointIds(_0xe6ba22);
    let v576 = await C6.getReleaseScript(v573, v574, v575, p692);
    const fs3 = require("fs");
    const path2 = require("path");
    const v577 = "../lib/";
    let v578 = path2.join(__dirname, v577);
    let v579 = v572.ZdYtq(p692 + v572.IWxmX + new Date().Format("yyyyMMddhhmmss"), v572.iIXQf);
    let v580 = v578 + v579;
    let vDecodeURIComponent = decodeURIComponent(v576.eventCode);
    fs3.writeFile(v580, vDecodeURIComponent, p697 => {
      if (p697) {
        throw p697;
      }
    });
    return v579;
  }
  static async ["timerCreateTableByDay"](p698) {
    const v581 = {
      iibsL: function (p699, p700) {
        return p699 ^ p700;
      },
      SIgdr: function (p701, p702) {
        return p701(p702);
      },
      zmIiY: function (p703, p704) {
        return p703 ^ p704;
      },
      yFgjE: function (p705, p706) {
        return p705 < p706;
      },
      PVNTN: function (p707, p708) {
        return p707 ^ p708;
      },
      phecv: function (p709, p710) {
        return p709 ^ p710;
      }
    };
    vRequire7.printInfo("定时执行生成今天和明天的表开始");
    const v582 = await SdkReleaseModel.getAllList().catch(p711 => {
      vRequire7.printError(p711);
    });
    let vSetInterval = setInterval(async () => {
      const v583 = {
        dAyve: "定时器执行{"
      };
      if (vSetInterval && v582 && v582.length === v581.iibsL(850694, 850694)) {
        v581.SIgdr(clearInterval, vSetInterval);
        return;
      }
      let v584 = v582.pop();
      const {
        projectId: _0x2496cf,
        pointIds: _0x40f17d
      } = v584;
      const v585 = _0x40f17d.split(",");
      let v586 = await BuryPointWarehouseModel.getPointIds(_0x2496cf, 1);
      if (v586 && v586.length > 0) {
        for (let v587 = v581.zmIiY(567128, 567128); v581.yFgjE(v587, v586.length); v587++) {
          v585.push(v586[v587].id);
        }
      }
      for (let v588 = v581.PVNTN(669926, 669926); v588 < v585.length; v588++) {
        C6.createTableByDay(_0x2496cf, v585[v588], p698).catch(p712 => {
          vRequire7.printError(v583.dAyve + _0x2496cf + "_" + v585[v588] + "}生成每天的表报错：", p712);
        });
      }
    }, v581.phecv(775328, 775338) * 1000);
    vRequire7.printInfo("定时执行生成今天和明天的表结束");
  }
  static async ["getCardAndPointList"](p713) {
    const v589 = {
      GCDHQ: function (p714, p715) {
        return p714 ^ p715;
      },
      RQVpY: function (p716, p717) {
        return p716 ^ p717;
      }
    };
    let v590 = [];
    if (global.eventInfo.funnelCardAndPointRelations[p713]) {
      v590 = global.eventInfo.funnelCardAndPointRelations[p713];
    } else {
      let v591 = await BuryPointCardModel.getFunnelList(p713);
      for (let v592 = v589.GCDHQ(927577, 927577); v592 < v591.length; v592++) {
        let v593 = {};
        const v594 = v591[v592];
        v593.t = v594.conversionCycle;
        v593.c = v594.id;
        let v595 = JSON.parse(v594.calcRule);
        if (v595) {
          let v596 = [];
          for (let v597 = v589.RQVpY(672356, 672356); v597 < v595.length; v597++) {
            let v598 = v595[v597].prePoint;
            let v599 = v598.pointId;
            v596.push(v599);
          }
          v593.s = v596;
        }
        v590.push(v593);
      }
      const v600 = global.eventInfo.funnelCardAndPointRelations;
      v600[p713] = v590;
    }
    return v590;
  }
  static async changeUploadDomain(p718) {
    const v601 = {
      zgGYh: function (p719, p720) {
        return p719 ^ p720;
      }
    };
    const v602 = JSON.parse(p718.request.body);
    const {
      id: _0xb2491b,
      uploadDomain: _0x5400a0
    } = v602;
    await SdkReleaseModel.update(_0xb2491b, {
      uploadDomain: _0x5400a0
    });
    p718.response.status = v601.zgGYh(967125, 966941);
    p718.body = vRequire9.SUCCESS_200("success", 0);
  }
  static async createTableByDay(p721, p722, p723) {
    const v603 = {
      knwCz: function (p724, p725) {
        return p724 ^ p725;
      },
      YBlek: function (p726, p727) {
        return p726 > p727;
      },
      rRkiD: function (p728, p729) {
        return p728 ^ p729;
      },
      sHkbX: function (p730, p731) {
        return p730 < p731;
      }
    };
    let v604 = p721 + "_" + p722;
    const v605 = await BuryPointWarehouseModel.detailByPointId(p722).catch(p732 => {
      vRequire7.error(p732);
    });
    if (v605) {
      const {
        fields: _0x358403,
        replacePointIdKey: _0x45e389
      } = v605;
      let v606 = [];
      v606 = await BuryPointFieldModel.getListByFieldIds(_0x358403).catch(p733 => {
        vRequire7.error(p733);
      });
      const v607 = await BuryPointFieldModel.getListByProjectIdAndWeType(p721, v603.knwCz(885503, 885502));
      if (v607 && v603.YBlek(v607.length, v603.rRkiD(156181, 156181))) {
        for (let v608 = v603.rRkiD(183340, 183340); v603.sHkbX(v608, v607.length); v608++) {
          v606.push(v607[v608]);
        }
      }
      CommonModel.createLogTable(v604, v606).catch(p734 => {
        vRequire7.error(p734);
      });
    }
  }
}
class C7 {
  static async create(p735, p736, p737) {
    try {
      let v609 = {};
      if (p735 && p736 && p737) {
        v609.projectId = p735;
        v609.pointId = p736;
        v609.weRelationPointId = p737;
        const v610 = await BuryPointUserBehaviorRelationModel.countSameRelation(p735, p736, p737);
        if (v610) {
          return;
        }
        await BuryPointUserBehaviorRelationModel.create(v609);
      } else {
        return;
      }
    } catch (_0x4baf01) {
      console.log(_0x4baf01);
    }
  }
  static async ["detail"](p738) {
    const v611 = {
      kULaG: "success",
      LcOWb: "fail"
    };
    const v612 = vRequire3.parseQs(p738.request.url);
    let v613 = v612.id;
    if (v613) {
      let v614 = await BuryPointUserBehaviorRelationModel.detail(v613);
      p738.response.status = 200;
      p738.body = vRequire9.SUCCESS_200(v611.kULaG, v614);
    } else {
      p738.response.status = 412;
      p738.body = vRequire9.ERROR_412(v611.LcOWb);
    }
  }
  static async ["nodeDetail"](p739) {
    const v615 = vRequire3.parseQs(p739.request.url);
    let v616 = v615.id;
    if (v616) {
      let v617 = await BuryPointUserBehaviorRelationModel.detail(v616);
      p739.response.status = 200;
      p739.body = vRequire9.SUCCESS_200("success", v617);
    } else {
      p739.response.status = 412;
      p739.body = vRequire9.ERROR_412("fail");
    }
  }
  static async delete(p740) {
    const v618 = {
      QaJsE: "delete"
    };
    let v619 = JSON.parse(p740.request.body);
    const {
      ids: _0x1de7e1
    } = v619;
    const v620 = await BuryPointUserBehaviorRelationModel.batchDeletion(_0x1de7e1);
    console.log(v618.QaJsE, v620);
    p740.response.status = 200;
    p740.body = vRequire9.SUCCESS_200("success", "");
  }
  static async getPointRelationList(p741) {
    let v621 = p741.request.body;
    const v622 = JSON.parse(v621);
    const {
      projectId = "",
      pointId: _0xc376bf
    } = v622;
    if (projectId) {
      const v623 = await BuryPointUserBehaviorRelationModel.getPointRelationList(_0xc376bf);
      if (v623) {
        let v624 = "";
        for (let v625 = 0; v625 < v623.length; v625++) {
          const v626 = v623[v625].weRelationPointId;
          let v627 = v626.split("~");
        }
        let v628 = await BuryPointWarehouseModel.getListByPointIds(v624);
        let v629 = new Map();
        for (let v630 = 0; v630 < v628.length; v630++) {
          v629.set(v628[v630].pointId, v628[v630].pointName);
        }
      }
      p741.response.status = 200;
      p741.body = vRequire9.SUCCESS_200("success", v623);
    } else {
      p741.response.status = 412;
      p741.body = vRequire9.ERROR_412("项目ID不能为空");
    }
  }
  static async ["getSourceFieldValueList"](p742) {
    const v631 = {
      OiwjE: function (p743, p744) {
        return p743 === p744;
      },
      iTJKM: function (p745, p746) {
        return p745 + p746;
      },
      TArCH: function (p747, p748) {
        return p747 ^ p748;
      },
      mUAXj: function (p749, p750) {
        return p749 < p750;
      },
      gKwah: "and",
      HrwYz: function (p751, p752) {
        return p751 ^ p752;
      },
      awSBb: "success"
    };
    let v632 = p742.request.body;
    const v633 = JSON.parse(v632);
    const {
      projectId = "",
      pointId: _0x4d2a6d,
      filterList: _0x290c68,
      groupField: _0x547ebf
    } = v633;
    if (projectId && _0x290c68) {
      const v634 = projectId + "_" + _0x4d2a6d;
      for (let v635 = v631.TArCH(987577, 987577); v631.mUAXj(v635, _0x290c68.length); v635++) {
        const {
          fieldName: _0x34b5e3
        } = _0x290c68[v635];
        await BuryPointFieldModel.getFieldTypeByKey(projectId, _0x34b5e3).then(p753 => {
          if (p753 && p753.length) {
            _0x290c68[v635].type = p753[0].fieldType;
          }
        });
      }
      let v636 = "";
      let v637 = "";
      let v638 = v631.gKwah;
      if (_0x290c68 && _0x290c68.length > 0) {
        _0x290c68.forEach(p754 => {
          const {
            fieldName: _0x462981,
            rule: _0x22bf55,
            value: _0x2debeb,
            type = "",
            andOr = "a"
          } = p754;
          let v_0x2debeb = _0x2debeb;
          if (v631.OiwjE(type.toLowerCase(), "varchar")) {
            v_0x2debeb = _0x2debeb;
          }
          if (andOr) {
            v638 = vRequire3.convertAndOr(andOr);
          }
          if (_0x462981) {
            v637 += v631.iTJKM(" " + vRequire3.convertOperationSql(_0x462981, _0x22bf55, v_0x2debeb), v638);
          }
        });
        v637 = " (" + v637.substring(v631.HrwYz(462393, 462393), v637.lastIndexOf(v638)) + ")";
        v636 = " select " + _0x547ebf + " as fieldName, count(1) as count from " + v634 + " where " + v637 + " and " + _0x547ebf + " != '' group by " + _0x547ebf + " order by count desc LIMIT 0,100 ";
      } else {
        v636 = " select " + _0x547ebf + " as fieldName, count(1) as count from " + v634 + " where " + _0x547ebf + " != '' group by " + _0x547ebf + " order by count desc LIMIT 0,100 ";
      }
      const v639 = await BuryPointCardModel.statisticData(v636);
      let v640 = [];
      if (v639) {
        for (let v641 = 0; v641 < v639.length; v641++) {
          v640.push(v639[v641].fieldName);
        }
      }
      p742.response.status = 200;
      p742.body = vRequire9.SUCCESS_200(v631.awSBb, v640);
    } else {
      p742.response.status = v631.HrwYz(191327, 191171);
      p742.body = vRequire9.ERROR_412("参数不能为空");
    }
  }
  static async handleRelationData(p755, p756, p757, p758, p759, p760, p761, p762, p763, p764, p765) {
    const v642 = {
      tMjxE: function (p766, p767) {
        return p766 === p767;
      },
      BxtBO: function (p768, p769) {
        return p768 ^ p769;
      },
      yfxQU: function (p770, p771) {
        return p770 + p771;
      },
      HOTNu: function (p772, p773) {
        return p772 ^ p773;
      },
      nwOWI: function (p774, p775) {
        return p774 <= p775;
      }
    };
    for (let v643 = 0; v643 < p759.length; v643++) {
      let v644 = p759[v643];
      const v645 = p762.filter(p776 => {
        return v642.tMjxE(p776.pointId, v644) && p776.weRelationPointId === p757;
      });
      if (v645 && v645.length > 0) {
        let v646 = [];
        let v647 = 0;
        let v648 = await C7.getPointCount(p756, v645[0].pointId, p758, v645[0].weRelationPointId, p763, p764, p765);
        v647 = parseInt(v648, v642.BxtBO(396671, 396661));
        let v649 = p757 + "~wf~" + v644;
        p755.children[v644] = {
          pointId: v644,
          sourceId: p755.pointId,
          pointName: p760.get(v644),
          value: v647,
          deep: v642.yfxQU(p755.deep, v642.HOTNu(270891, 270890)),
          relationValue: p757,
          children: {}
        };
        if (v645 && v645.length > 0 && v642.nwOWI(p755.deep, p761)) {
          await this.handleRelationData(p755.children[v644], p756, v649, p758, p759, p760, p761, p762, p763, p764, p765);
        }
      }
    }
  }
  static async ["analysisCardData"](p777, p778, p779) {
    const v650 = {
      RQJva: "yyyy-MM-dd hh:mm:ss",
      kaOnM: function (p780, p781) {
        return p780 ^ p781;
      },
      xnDNb: function (p782, p783) {
        return p782 < p783;
      },
      jCIbH: function (p784, p785) {
        return p784 ^ p785;
      }
    };
    const {
      id: _0x51bc0c,
      projectId: _0x409390,
      pageId: _0x1817df,
      name: _0x37b50e,
      sort: _0x24ba3a,
      dataGrid: _0x338c65,
      type: _0x519c77,
      calcRule: _0x5a59c4,
      conversionCycle: _0x344976,
      groupByFlag: _0x569c9e,
      chartTableShow: _0x1c2e23,
      togetherList: _0x188011,
      refreshFrequency: _0x4f15e5,
      updatedAt: _0x3f46f0,
      alarmStatus: _0x49ecc4,
      describe: _0xe68bf5,
      isShowOnlineCount: _0x708053
    } = p777;
    const v651 = {
      cardId: _0x51bc0c,
      type: _0x519c77,
      cardName: _0x37b50e,
      conversionCycle: _0x344976,
      groupByFlag: _0x569c9e,
      chartTableShow: _0x1c2e23,
      togetherList: _0x188011,
      refreshFrequency: _0x4f15e5
    };
    v651.refreshTime = new Date().Format(v650.RQJva);
    v651.alarmStatus = _0x49ecc4;
    v651.sort = _0x24ba3a;
    v651.dataGrid = _0x338c65;
    v651.describe = _0xe68bf5;
    v651.isShowOnlineCount = _0x708053;
    if (_0x3f46f0) {
      v651.refreshTime = _0x3f46f0;
    }
    if (_0x5a59c4 === "[]" || _0x5a59c4 === "" || _0x5a59c4 === undefined) {
      v651.statisticList = [];
      return v651;
    }
    p778 = p778 + " 00:00:00";
    p779 = p779 + " 23:59:59";
    let v652 = JSON.parse(_0x5a59c4);
    const {
      firstStep: _0x8137ca,
      secondStep: _0x15053d
    } = v652;
    const {
      involvedPointIds: _0x147dd1,
      calculateId = "weCustomerKey",
      pvOrUvFlag = "pv",
      maxLayers = "5",
      pointList = []
    } = _0x8137ca;
    const {
      selectValue: _0xb87127,
      pointOrFieldFlag = "point",
      startOrEndFlag = "start",
      fieldValue = ""
    } = _0x15053d;
    if (_0x147dd1 === "" || _0x147dd1 === undefined) {
      v651.statisticList = [];
      return v651;
    }
    let v653 = [];
    let v654 = [];
    if (pointOrFieldFlag === "point") {
      v651.behaviorRelation = {
        pointOrFieldFlag: pointOrFieldFlag
      };
      await this.analysisRelationPointData(_0x409390, _0x8137ca, _0x15053d, v653, v654, p778, p779);
    } else {
      v651.behaviorRelation = {
        involvedPointIds: _0x147dd1,
        pointOrFieldFlag: pointOrFieldFlag
      };
      await this.analysisRelationFieldData(_0x409390, _0x8137ca, _0x15053d, v653, v654, p778, p779);
    }
    const v655 = [];
    for (let v656 = 0; v656 < v653.length; v656++) {
      const v657 = v653[v656];
      const v658 = v655.findIndex(p786 => p786.name === v657.name);
      if (v658 !== -v650.kaOnM(717993, 717992)) {
        const v659 = v657.value + v655[v658].value;
        v655[v658].value = v659;
      } else {
        v655.push(v657);
      }
    }
    const v660 = [];
    for (let v661 = 0; v650.xnDNb(v661, v654.length); v661++) {
      const v662 = v654[v661];
      const v663 = v660.findIndex(p787 => p787.source === v662.source && p787.target === v662.target && p787.relationValue === v662.relationValue);
      if (v663 !== -v650.jCIbH(202815, 202814)) {
        const v664 = v662.value + v660[v663].value;
        v660[v663].value = v664;
      } else {
        v660.push(v662);
      }
    }
    let v665 = [];
    let v666 = {
      fieldIndex: 0
    };
    v666.calcName = "分析数据";
    v666.unit = "";
    v666.calcTotail = 0;
    v666.calcTotailRate = 0;
    v666.nodes = v655;
    v666.links = v660;
    v665.push(v666);
    v651.statisticList = v665;
    return v651;
  }
  static async analysisRelationPointData(p788, p789, p790, p791, p792, p793, p794) {
    const v667 = {
      DATqe: "start",
      cgaZJ: function (p795, p796) {
        return p795 ^ p796;
      },
      uZSti: function (p797, p798) {
        return p797 < p798;
      },
      QbLfi: function (p799, p800) {
        return p799 ^ p800;
      }
    };
    const {
      involvedPointIds: _0x2c5c0f,
      calculateId = "weCustomerKey",
      pvOrUvFlag = "pv",
      maxLayers = "5",
      pointList = []
    } = p789;
    const {
      selectValue: _0x15f158,
      pointOrFieldFlag = "point",
      startOrEndFlag = v667.DATqe,
      fieldValue = ""
    } = p790;
    let v668 = await BuryPointWarehouseModel.getListByPointIds(_0x2c5c0f);
    let v669 = [];
    let v670 = [];
    let v671 = new Map();
    for (let v672 = v667.cgaZJ(703743, 703743); v672 < v668.length; v672++) {
      v670.push({
        pointId: v668[v672].pointId,
        pointName: v668[v672].pointName
      });
      v669.push(v668[v672].pointId);
      v671.set(v668[v672].pointId, v668[v672].pointName);
    }
    let v673 = new Map();
    if (pointList) {
      for (let v674 = 0; v667.uZSti(v674, pointList.length); v674++) {
        v673.set(pointList[v674].pointId, pointList[v674]);
      }
    }
    let v675 = 0;
    let v_0x15f158 = _0x15f158;
    let v676 = " count(" + (pvOrUvFlag === "uv" ? "distinct " : "") + (calculateId || "weCustomerKey") + ")";
    let v677 = await C7.getPointCount(p788, v_0x15f158, v673, "", v676, p793, p794);
    v675 = parseInt(v677, v667.QbLfi(806995, 807001));
    let v678 = await BuryPointUserBehaviorRelationModel.getRecursionData(p788, p793, p794);
    let v679 = {
      pointId: v_0x15f158,
      pointName: v671.get(v_0x15f158),
      value: v675,
      deep: 0,
      relationValue: "",
      children: {}
    };
    await C7.handleRelationData(v679, p788, v_0x15f158, v673, v669, v671, maxLayers, v678, v676, p793, p794);
    await C7.handleNodesAndLinks(v679, v669, p791, p792, v673, p793, p794, p788);
  }
  static async handleNodesAndLinks(p801, p802, p803, p804, p805, p806, p807, p808) {
    const v680 = {
      DPXvo: function (p809, p810) {
        return p809 ^ p810;
      },
      CmucD: function (p811, p812) {
        return p811 < p812;
      }
    };
    let v681 = {
      name: p801.deep + "-" + p801.pointId,
      pointId: p801.pointId,
      pointName: p801.pointName,
      value: p801.value,
      relationValue: p801.relationValue
    };
    if (p801.children) {
      let v682 = 0;
      for (const v683 in p801.children) {
        v682 += p801.children[v683].value;
      }
      v681.outflow = p801.value - v682;
    }
    v681.deep = p801.deep;
    if (p801.value !== v680.DPXvo(569200, 569200)) {
      p803.push(v681);
      let v684 = p801.children;
      for (let v685 = v680.DPXvo(492910, 492910); v680.CmucD(v685, p802.length); v685++) {
        let v686 = v684[p802[v685]];
        if (v686) {
          let v687 = {};
          let v688 = p801.relationValue ? p801.relationValue + "~wf~" + p801.pointId : p801.pointId;
          v687.source = v681.name;
          v687.target = v686.deep + "-" + v686.pointId;
          v687.sourceId = p801.pointId;
          v687.targetId = v686.pointId;
          v687.sourceName = p801.pointName;
          v687.targetName = v686.pointName;
          v687.sourceVal = p801.value;
          v687.value = v686.value;
          v687.groupValue = "";
          v687.relationValue = v688;
          p804.push(v687);
          await C7.handleNodesAndLinks(v686, p802, p803, p804, p805, p806, p807, p808);
        }
      }
    }
  }
  static async ["handleFieldRelationData"](p813, p814, p815, p816, p817, p818, p819) {
    const v689 = {
      MnIID: function (p820, p821) {
        return p820 ^ p821;
      },
      YnyVW: function (p822, p823, p824) {
        return p822(p823, p824);
      },
      PKtou: function (p825, p826) {
        return p825 + p826;
      },
      PuyHE: function (p827, p828) {
        return p827 > p828;
      }
    };
    for (let v690 = v689.MnIID(336332, 336332); v690 < p815.length; v690++) {
      let v691 = p815[v690];
      const v692 = p817.filter(p829 => {
        return p829.relationFieldValue === v691 && p829.weRelationField === p814;
      });
      if (v692 && v692.length > 0) {
        let v693 = [];
        let v694 = 0;
        for (let v695 = 0; v695 < v692.length; v695++) {
          v693.push(v692[v695].relationFieldValue);
          v694 = v694 + v689.YnyVW(parseInt, v692[v695].weRelationFiledCount, 10);
        }
        let v696 = p814 + "~wf~" + v691;
        p813.children[v691] = {
          pointId: v691,
          sourceId: p813.pointId,
          pointName: v691,
          value: v694,
          deep: v689.PKtou(p813.deep, 1),
          relationValue: v696,
          children: {}
        };
        if (v692 && v689.PuyHE(v692.length, 0) && p813.deep <= p816) {
          await this.handleFieldRelationData(p813.children[v691], v696, p815, p816, p817, p818, p819);
        }
      }
    }
  }
  static async handleFieldNodesAndLinks(p830, p831, p832, p833, p834, p835) {
    const v697 = {
      IpQCi: function (p836, p837) {
        return p836 !== p837;
      },
      qjZLC: function (p838, p839) {
        return p838 < p839;
      }
    };
    let v698 = {
      name: p830.deep + "-" + p830.pointId,
      pointId: p830.pointId,
      pointName: p830.pointName,
      value: p830.value,
      relationValue: p830.relationValue
    };
    if (p830.children) {
      let v699 = 0;
      for (const v700 in p830.children) {
        v699 += p830.children[v700].value;
      }
      v698.outflow = p830.value - v699;
    }
    v698.deep = p830.deep;
    if (v697.IpQCi(p830.value, 0)) {
      p832.push(v698);
      let v701 = p830.children;
      for (let v702 = 0; v697.qjZLC(v702, p831.length); v702++) {
        let v703 = v701[p831[v702]];
        if (v703) {
          let v704 = {
            source: p830.deep + "-" + p830.pointId,
            target: v703.deep + "-" + v703.pointId,
            sourceId: p830.pointId,
            targetId: v703.pointId,
            sourceName: p830.pointName,
            targetName: v703.pointName,
            sourceVal: p830.value,
            value: v703.value,
            groupValue: "",
            relationValue: p830.relationValue
          };
          p833.push(v704);
          await C7.handleFieldNodesAndLinks(v703, p831, p832, p833, p834, p835);
        }
      }
    }
  }
  static async ["analysisRelationFieldData"](p840, p841, p842, p843, p844, p845, p846) {
    const v705 = {
      QQBPf: "field",
      RbsGj: function (p847, p848) {
        return p847 + p848;
      },
      pEWGx: function (p849, p850) {
        return p849 + p850;
      },
      QCmbF: function (p851, p852) {
        return p851 + p852;
      },
      xOgAQ: function (p853, p854) {
        return p853 + p854;
      },
      bEHKL: function (p855, p856) {
        return p855 + p856;
      },
      TFRoz: " count (",
      yyUNN: "distinct ",
      RuLTd: function (p857, p858) {
        return p857 || p858;
      },
      kxvLP: function (p859, p860) {
        return p859 > p860;
      },
      VxMoh: function (p861, p862) {
        return p861 ^ p862;
      }
    };
    const {
      involvedPointIds: _0xb7225b,
      calculateId = "weCustomerKey",
      pvOrUvFlag = "pv",
      maxLayers = "5",
      pointList = []
    } = p841;
    const {
      selectValue = "",
      pointOrFieldFlag = v705.QQBPf,
      startOrEndFlag = "start",
      fieldValue = ""
    } = p842;
    let v706 = new Map();
    if (pointList) {
      for (let v707 = 0; v707 < pointList.length; v707++) {
        v706.set(pointList[v707].pointId, pointList[v707]);
      }
    }
    const {
      calcField: _0x385fe1,
      queryCriteria: _0x42d387
    } = v706.get(_0xb7225b);
    let v708 = _0x385fe1.fieldName;
    let v709 = v705.RbsGj(v705.pEWGx(p840, "_"), _0xb7225b);
    let v710 = await CommonModel.splicingCriteriaSql(_0x385fe1, _0x42d387);
    let v711 = v705.QCmbF(v705.xOgAQ(v705.bEHKL(v705.TFRoz, pvOrUvFlag === "uv" ? v705.yyUNN : ""), v705.RuLTd(calculateId, "weCustomerKey")), ")");
    let v712 = await CommonModel.splicingFirstStepGroupSql(_0x385fe1, v710, v709, v711, selectValue, p845, p846);
    let v713 = await BuryPointCardModel.statisticData(v712);
    let v714 = 0;
    let v715 = {
      pointId: selectValue,
      pointName: selectValue,
      value: 0,
      deep: 0,
      relationValue: selectValue,
      children: {}
    };
    let v716 = [];
    if (v705.kxvLP(v713.length, 0)) {
      for (let v717 = v705.VxMoh(297404, 297404); v717 < v713.length; v717++) {
        let v718 = v713[v717];
        v714 += v718.count * 1;
        let v719 = v718.relationFieldValue;
        v716.push(v719);
      }
    }
    v715.value = v714;
    let v720 = await BuryPointUserBehaviorRelationModel.getFieldRecursionData(v709, v708, v710, v711, p845, p846);
    await C7.handleFieldRelationData(v715, selectValue, v716, maxLayers, v720, p845, p846);
    await C7.handleFieldNodesAndLinks(v715, v716, p843, p844, p845, p846);
  }
  static async ["getPointCount"](p863, p864, p865, p866, p867, p868, p869) {
    const v721 = {
      stfDe: function (p870, p871) {
        return p870 + p871;
      },
      wdZkw: " as count from ",
      UINvB: function (p872, p873) {
        return p872 != p873;
      },
      KIbdO: function (p874, p875) {
        return p874 + p875;
      },
      wazxh: function (p876, p877) {
        return p876 + p877;
      },
      gCqix: function (p878, p879) {
        return p878 ^ p879;
      },
      otXGd: function (p880, p881) {
        return p880 ^ p881;
      }
    };
    let v722 = p863 + "_" + p864;
    let v723 = v721.stfDe(v721.stfDe(v721.stfDe("select ", p867) + v721.wdZkw + v722 + " where 1=1 and weRelationPointId = '", p866), "'");
    if (p865.get(p864)) {
      const {
        calcField: _0x3e10b4,
        queryCriteria: _0x21ad9a
      } = p865.get(p864);
      let v724 = await CommonModel.splicingCriteriaSql(_0x3e10b4, _0x21ad9a);
      if (v724 && v721.UINvB(v724, "")) {
        v723 = v723 + " and " + v724;
      }
    }
    v723 = v721.KIbdO(v721.wazxh(v721.KIbdO(v723, " and happenTime >= '"), p868), "'") + " and happenTime <= '" + p869 + "'";
    let v725 = await BuryPointCardModel.statisticData(v723);
    if (v725) {
      if (isNaN(v725[0].count)) {
        return 0;
      } else {
        return v725[v721.gCqix(729700, 729700)].count;
      }
    } else {
      return v721.otXGd(286053, 286053);
    }
  }
  static async ["getSingleNodeDetail"](p882) {
    const v726 = {
      htJmt: function (p883, p884) {
        return p883 + p884;
      },
      kIxCx: "select weRelationField from ",
      HqyWk: function (p885, p886) {
        return p885 + p886;
      },
      vPjuj: function (p887, p888) {
        return p887 + p888;
      },
      sLVwF: function (p889, p890) {
        return p889 + p890;
      },
      CIARQ: " and happenTime > '",
      RCFkx: function (p891, p892) {
        return p891 + p892;
      },
      aufql: "success"
    };
    let v727 = p882.request.body;
    const v728 = JSON.parse(v727);
    const {
      projectId: _0x39da99,
      pointId: _0x465feb,
      pointOrFieldFlag = "point",
      deep: _0x50bc1c,
      weRelationPointId: _0x35d29a,
      startDate: _0x4add3c,
      endDate: _0x428da1
    } = v728;
    if (pointOrFieldFlag === "point") {
      let v729 = await BuryPointUserBehaviorRelationModel.getRelationData(_0x465feb, _0x35d29a, _0x4add3c, _0x428da1);
      p882.response.status = 200;
      p882.body = vRequire9.SUCCESS_200("success", v729);
    } else {
      let v730 = v726.htJmt(_0x39da99, "_") + _0x465feb;
      let v731 = v726.kIxCx + v730;
      v731 = v726.HqyWk(v726.vPjuj(v731 + " where 1=1 and weRelationField like  '%~wf~", _0x35d29a), "'");
      v731 = v726.sLVwF(v726.vPjuj(v731 + v726.CIARQ, _0x4add3c), "'") + " and happenTime <= '" + _0x428da1 + "'";
      console.log(v726.RCFkx("查询sql:", v731));
      let v732 = await BuryPointCardModel.statisticData(v731);
      p882.response.status = 200;
      p882.body = vRequire9.SUCCESS_200(v726.aufql, v732);
    }
  }
  static async test(p893) {
    const v733 = {
      hcVVn: "yyyy-MM-dd hh:mm"
    };
    console.log(new Date().Format("yyyy-MM-dd hh:mm:ss"));
    console.log(new Date().Format("yyyy-MM-dd"));
    console.log(new Date().Format("yyyy-MM-dd hh"));
    console.log(new Date().Format(v733.hcVVn));
    let v734 = p893.request.body;
    console.log("==========================req", v734);
    const v735 = JSON.parse(v734);
    const {
      projectId = "",
      calcRule: _0x186a15,
      startDate = "2024-11-28 00:00:00",
      endDate = "2024-12-05 23:59:59"
    } = v735;
    let v736 = JSON.parse(_0x186a15);
    const {
      firstStep: _0x1d9709,
      secondStep: _0x3cdfbb
    } = v736;
    let v737 = [];
    let v738 = [];
    await C7.analysisRelationFieldData(projectId, _0x1d9709, _0x3cdfbb, v737, v738, startDate, endDate);
  }
}
class C8 {
  static async create(p894) {
    const v739 = {
      PMZBG: "创建成功"
    };
    let v740 = JSON.parse(p894.request.body);
    const {
      nickname: _0x35e9c7
    } = p894.user;
    v740.createBy = _0x35e9c7;
    if (v740.templateName && v740.type) {
      let v741;
      if (v740.type == 1) {
        const {
          userId: _0x3d3f0c,
          userType: _0x50476f
        } = p894.user;
        v740.userId = _0x3d3f0c;
      } else if (v740.type == 2) {} else if (v740.type == 3) {}
      await BuryPointTemplateModel.create(v740);
      p894.response.status = 200;
      p894.body = vRequire9.SUCCESS_200(v739.PMZBG, "");
    } else {
      p894.response.status = 412;
      p894.body = vRequire9.ERROR_412("创建成功失败，请求参数不能为空！");
    }
  }
  static async ["copy"](p895) {
    const v742 = {
      oCNMw: "success",
      YthIV: function (p896, p897) {
        return p896 ^ p897;
      }
    };
    let v743 = JSON.parse(p895.request.body);
    const {
      nickname: _0x5040f4,
      userId: _0x3bb78a
    } = p895.user;
    if (v743.templateName && v743.id) {
      let v744 = await BuryPointTemplateModel.detail(v743.id);
      let v745 = {
        createBy: _0x5040f4,
        templateName: v743.templateName,
        type: 1,
        detail: v744.detail,
        userId: _0x3bb78a,
        groupCount: v744.groupCount,
        pageCount: v744.pageCount,
        cardCount: v744.cardCount,
        templatePoint: v744.templatePoint
      };
      await BuryPointTemplateModel.create(v745);
      p895.response.status = 200;
      p895.body = vRequire9.SUCCESS_200(v742.oCNMw, "");
    } else {
      p895.response.status = v742.YthIV(823214, 822834);
      p895.body = vRequire9.ERROR_412("fail！");
    }
  }
  static async ["updateName"](p898) {
    const v746 = {
      DEKkY: function (p899, p900) {
        return p899 ^ p900;
      }
    };
    let v747 = JSON.parse(p898.request.body);
    let v748 = v747.id;
    const {
      nickname: _0x130323
    } = p898.user;
    v747.updateBy = _0x130323;
    if (v747) {
      await BuryPointTemplateModel.update(v748, v747);
      p898.response.status = 200;
      p898.body = vRequire9.SUCCESS_200("更新信息成功！", "");
    } else {
      p898.response.status = v746.DEKkY(153617, 153997);
      p898.body = vRequire9.ERROR_412("更新信息失败！");
    }
  }
  static async delete(p901) {
    const v749 = {
      Zoakm: "success"
    };
    let v750 = JSON.parse(p901.request.body);
    const {
      id: _0x547c82
    } = v750;
    await BuryPointTemplateModel.delete(_0x547c82);
    p901.response.status = 200;
    p901.body = vRequire9.SUCCESS_200(v749.Zoakm, "");
  }
  static async ["deleteBatch"](p902) {
    let v751 = JSON.parse(p902.request.body);
    const {
      ids: _0x3cb0a9
    } = v751;
    if (_0x3cb0a9) {
      let v752 = _0x3cb0a9.split(",");
      for (let v753 = 0; v753 < v752.length; v753++) {
        await BuryPointTemplateModel.delete(v752[v753]);
      }
    }
    p902.response.status = 200;
    p902.body = vRequire9.SUCCESS_200("success", "");
  }
  static async ["createProject"](p903) {
    const v754 = {
      eCYav: function (p904, p905) {
        return p904 + p905;
      },
      cUZUX: "}创建表报错：",
      WIneP: "pro",
      tRAaS: function (p906, p907) {
        return p906 < p907;
      },
      yNJxO: function (p908, p909) {
        return p908 ^ p909;
      },
      Feumy: function (p910, p911) {
        return p910 < p911;
      },
      CxGag: function (p912, p913) {
        return p912 < p913;
      },
      lZxVO: function (p914, p915) {
        return p914 < p915;
      },
      DguTO: function (p916, p917) {
        return p916 === p917;
      },
      QnNoo: function (p918, p919) {
        return p918 ^ p919;
      },
      wZVSB: "success"
    };
    let v755 = JSON.parse(p903.request.body);
    const {
      id: _0x307c8c,
      projectName: _0x30dd92,
      type: _0x292b9d,
      env = v754.WIneP
    } = v755;
    const {
      nickname: _0x5495ad,
      companyId: _0x38cdf5
    } = p903.user;
    if (_0x307c8c && _0x30dd92) {
      let v756 = await BuryPointTemplateModel.detail(_0x307c8c);
      let v757 = "";
      let v758 = [];
      if (v756) {
        let v759 = new Date().Format("yyyyMMddhhmmss");
        let v760 = v756.templateName;
        let v761 = JSON.parse(v756.templatePoint);
        let v762 = new Map();
        for (let v763 = 0; v763 < v761.length; v763++) {
          let v764 = v761[v763].pointId;
          v762.set(v764, v761[v763]);
        }
        let v765 = JSON.parse(vRequire3.b64DecodeUnicode(v756.detail));
        let v766 = env.split(",");
        const v767 = new Date();
        const v768 = v767.Format("yyyyMMdd");
        const v769 = v767.Format("hhmmssS");
        let v770 = "event_" + v768 + "_" + v769 + "_";
        for (let v771 = 0; v771 < v766.length; v771++) {
          let v772 = [];
          let v773 = "";
          let v774 = await C18.createNewProject(_0x30dd92, v770, v766[v771], "0", _0x5495ad, _0x38cdf5);
          if (v766[v771] === "pro") {
            v757 = v774.projectId;
          }
          v773 = v774.projectId;
          v758.push(v774.projectId);
          let v775 = v765.groupList;
          for (let v776 = 0; v776 < v775.length; v776++) {
            let v777 = {
              name: v775[v776].name,
              type: 2,
              sort: v775[v776].sort,
              parentId: v774.id,
              projectId: v773,
              createBy: _0x5495ad
            };
            let v778 = await BuryPointProjectModel.create(v777);
            let v779 = v775[v776].pageList;
            for (let v780 = 0; v780 < v779.length; v780++) {
              let v781 = {
                name: v779[v780].name,
                type: 3,
                sort: v779[v780].sort,
                parentId: v778.id,
                projectId: v773,
                createBy: _0x5495ad
              };
              let v782 = await BuryPointProjectModel.create(v781);
              let v783 = v779[v780].cardList;
              for (let v784 = 0; v754.tRAaS(v784, v783.length); v784++) {
                let v785 = v783[v784];
                let v786 = {
                  projectId: v773,
                  pageId: v782.id,
                  name: v785.name,
                  type: v785.type,
                  sort: v785.sort,
                  conversionCycle: v785.conversionCycle,
                  groupByFlag: v785.groupByFlag,
                  chartTableShow: v785.chartTableShow,
                  togetherList: v785.togetherList,
                  refreshFrequency: v785.refreshFrequency,
                  describe: v785.describe,
                  alarmMembers: v785.alarmMembers,
                  noticeWay: v785.noticeWay,
                  alarmStatus: v785.alarmStatus,
                  tableShowType: v785.tableShowType,
                  dataGrid: v785.dataGrid,
                  groupFields: v785.groupFields,
                  keepAnalysisRule: v785.keepAnalysisRule,
                  isShowOnlineCount: v785.isShowOnlineCount
                };
                let v787 = JSON.parse(v785.calcRule);
                if (v786.type === v754.yNJxO(393061, 393065)) {
                  let v788 = {};
                  const {
                    firstStep: _0x4d3129,
                    secondStep: _0x3c88b8
                  } = v787;
                  const v789 = _0x4d3129.involvedPointIds.split(",");
                  let v790 = [];
                  for (let v791 = 0; v791 < v789.length; v791++) {
                    let v792 = v762.get(v789[v791]);
                    let v793 = await C24.createPoint(v773, v792, _0x5495ad);
                    v790.push(v793);
                    v772.push(v793);
                  }
                  _0x4d3129.involvedPointIds = v790.join();
                  let v794 = [];
                  for (let v795 = 0; v754.Feumy(v795, _0x4d3129.pointList.length); v795++) {
                    let v796 = _0x4d3129.pointList[v795];
                    let v797 = v762.get(v796.pointId);
                    let v798 = await C24.createPoint(v773, v797, _0x5495ad);
                    v796.pointId = v798;
                    v794.push(v796);
                    v772.push(v798);
                  }
                  _0x4d3129.pointList = v794;
                  v788.firstStep = _0x4d3129;
                  let v799 = v762.get(_0x3c88b8.selectValue);
                  let v800 = await C24.createPoint(v773, v799, _0x5495ad);
                  _0x3c88b8.selectValue = v800;
                  v788.secondStep = _0x3c88b8;
                  v786.calcRule = JSON.stringify(v788);
                } else {
                  let v801 = [];
                  for (let v802 = 0; v802 < v787.length; v802++) {
                    let v803 = v787[v802];
                    let v804 = v803.calcName;
                    v803.calcNameKey = slugify(v804).replace(new RegExp("-", "g"), "") + new Date().Format("yyyyMMddhhmmss");
                    let v805 = v803.prePoint;
                    let v806 = v762.get(v805.pointId);
                    let v807 = await C24.createPoint(v773, v806, _0x5495ad);
                    v772.push(v807);
                    v803.prePoint.pointId = v807;
                    let v808 = v803.endPoint;
                    if (v808) {
                      let v809 = v762.get(v808.pointId);
                      let v810 = await C24.createPoint(v773, v809, _0x5495ad);
                      v772.push(v810);
                      v803.endPoint.pointId = v810;
                    }
                    v801.push(v803);
                  }
                  v786.calcRule = JSON.stringify(v801);
                }
                v786.createBy = _0x5495ad;
                let v811 = await BuryPointCardModel.create(v786);
              }
            }
          }
          let v812 = [...new Set(v772)];
          let v813 = [];
          let v814 = await BuryPointWarehouseModel.getNoWebfunnyListByPointIds(v812 + "");
          for (let v815 = 0; v754.CxGag(v815, v814.length); v815++) {
            v813.push(v814[v815].pointId);
          }
          let v816 = {
            projectId: v773,
            releaseName: _0x30dd92 + v759,
            pointIds: v813 + "",
            releaseScript: "",
            status: 1,
            version: "v1.0.0",
            uploadDomain: "0",
            createBy: _0x5495ad
          };
          let v817 = await SdkReleaseModel.create(v816);
          if (v817) {
            let v818 = await BuryPointWarehouseModel.getPointIds(v773, 1);
            if (v818 && v818.length > 0) {
              for (let v819 = 0; v819 < v818.length; v819++) {
                v812.push(v818[v819].id);
              }
            }
            for (let v820 = 0; v754.lZxVO(v820, v812.length); v820++) {
              C6.createTableByDay(v773, v812[v820], 0).catch(p920 => {
                vRequire7.printError(v754.eCYav(v754.eCYav("执行{", v773) + "_" + v812[v820], v754.cUZUX), p920);
              });
            }
          }
        }
        if (v754.DguTO(v756.type, 1)) {
          let v821 = {
            id: _0x307c8c,
            projectId: v757,
            updateBy: _0x5495ad
          };
          await BuryPointTemplateModel.update(_0x307c8c, v821);
        }
      }
      p903.response.status = v754.QnNoo(458456, 458256);
      p903.body = vRequire9.SUCCESS_200(v754.wZVSB, v758.join());
    } else {
      p903.response.status = 412;
      p903.body = vRequire9.ERROR_412("fail！");
    }
  }
  static async getCommonTemplatePageList(p921) {
    const v822 = {
      bYVKg: function (p922, p923) {
        return p922 ^ p923;
      },
      NQqnb: "success"
    };
    let v823 = JSON.parse(p921.request.body);
    const {
      templateName: _0x945eaf,
      userId: _0x38ccad,
      startDate: _0xc2c1cb,
      endDate: _0x2aedc2,
      orderBy: _0x41d755,
      page: _0x204507,
      pageSize: _0x3469a3
    } = v823;
    if (!_0x41d755) {
      _0x41d755 = "desc";
    }
    let v824 = await BuryPointTemplateModel.getPageCount(_0x945eaf, "", _0xc2c1cb, _0x2aedc2, 2, _0x38ccad);
    let v825 = await BuryPointTemplateModel.getPageList(_0x945eaf, "", _0xc2c1cb, _0x2aedc2, 2, _0x38ccad, _0x41d755, _0x204507, _0x3469a3);
    let v826 = 0;
    v826 = v824[0].count;
    p921.response.status = v822.bYVKg(725675, 725603);
    p921.body = vRequire9.SUCCESS_200(v822.NQqnb, {
      list: v825,
      totalCount: v826
    });
  }
  static async ["getSysTemplatePageList"](p924) {
    const v827 = {
      FRLWj: function (p925, p926) {
        return p925 ^ p926;
      }
    };
    let v828 = JSON.parse(p924.request.body);
    const {
      templateName: _0x653884,
      userId = "",
      startDate: _0x3d4c61,
      endDate: _0x6246f7,
      orderBy: _0x5243d6,
      page: _0x4a9bea,
      pageSize: _0xc3cd0d
    } = v828;
    if (!_0x5243d6) {
      _0x5243d6 = "desc";
    }
    let v829 = await BuryPointTemplateModel.getPageCount(_0x653884, "", _0x3d4c61, _0x6246f7, 3, userId);
    let v830 = await BuryPointTemplateModel.getPageList(_0x653884, "", _0x3d4c61, _0x6246f7, 3, userId, _0x5243d6, _0x4a9bea, _0xc3cd0d);
    let v831 = v827.FRLWj(275190, 275190);
    v831 = v829[0].count;
    p924.response.status = 200;
    p924.body = vRequire9.SUCCESS_200("success", {
      list: v830,
      totalCount: v831
    });
  }
  static async getMyTemplatePageList(p927) {
    const v832 = {
      soGie: "desc",
      hoePF: function (p928, p929) {
        return p928 < p929;
      },
      WWeYk: function (p930, p931) {
        return p930 ^ p931;
      }
    };
    const {
      userId: _0x4b58c1,
      userType: _0x2e31d7
    } = p927.user;
    let v833 = JSON.parse(p927.request.body);
    const {
      templateName: _0x3a52ed,
      startDate: _0x5306c1,
      endDate: _0x550f5a,
      orderBy: _0x35b615,
      page: _0x2dadac,
      pageSize: _0x37d62c
    } = v833;
    if (!_0x35b615) {
      _0x35b615 = v832.soGie;
    }
    let v834 = await BuryPointTemplateModel.getPageCount(_0x3a52ed, "", _0x5306c1, _0x550f5a, 1, _0x4b58c1);
    let v835 = await BuryPointTemplateModel.getPageList(_0x3a52ed, "", _0x5306c1, _0x550f5a, 1, _0x4b58c1, _0x35b615, _0x2dadac, _0x37d62c);
    let v836 = [];
    for (let v837 = 0; v832.hoePF(v837, v835.length); v837++) {
      if (v835[v837].projectId) {
        let v838 = await BuryPointProjectModel.getNameByProjectIdAndType(v835[v837].projectId, v832.WWeYk(680003, 680002));
        if (v838 && v838.length > 0) {
          v835[v837].projectName = v838[0].name;
        }
      }
      v836.push(v835[v837]);
    }
    let v839 = 0;
    v839 = v834[v832.WWeYk(888321, 888321)].count;
    p927.response.status = 200;
    p927.body = vRequire9.SUCCESS_200("success", {
      list: v836,
      totalCount: v839
    });
  }
  static async detail(p932) {
    let {
      id: _0x32ba48
    } = JSON.parse(p932.request.body);
    if (_0x32ba48) {
      let v840 = await BuryPointTemplateModel.detail(_0x32ba48);
      p932.response.status = 200;
      p932.body = vRequire9.SUCCESS_200("success", v840);
    } else {
      p932.response.status = 412;
      p932.body = vRequire9.ERROR_412("fail");
    }
  }
  static async import(p933) {
    const v841 = {
      ZLVzZ: function (p934, p935) {
        return p934 ^ p935;
      },
      jlxii: "文件中没有数据",
      TyorV: function (p936, p937) {
        return p936 === p937;
      },
      rZyIo: function (p938, p939) {
        return p938 ^ p939;
      }
    };
    if (!p933.files) {
      p933.response.status = v841.ZLVzZ(115963, 116071);
      p933.body = vRequire9.ERROR_412("未上传文件");
      return;
    }
    const v842 = p933.files;
    const v843 = v842.fileFieldName[v841.ZLVzZ(746137, 746137)];
    const v844 = p933.request.body.type;
    if (!v844) {
      p933.response.status = 412;
      p933.body = vRequire9.ERROR_412("模板类型没传");
      return;
    }
    const {
      nickname: _0xacc6b7,
      userId: _0x204e68
    } = p933.user;
    if (v843.path) {
      var fs4 = require("fs");
      var v845 = fs4.readFileSync(v843.path, "utf8");
      if (!v845) {
        p933.response.status = v841.ZLVzZ(652654, 652530);
        p933.body = vRequire9.ERROR_412(v841.jlxii);
        return;
      }
      setTimeout(() => {
        fs4.unlinkSync(v843.path);
      }, 60000);
      var v846 = JSON.parse(v845);
      let v847 = v843.originalname;
      const v848 = v847.lastIndexOf(".json");
      if (v841.TyorV(v848, -v841.ZLVzZ(284775, 284774))) {
        vRequire24.exit(v841.rZyIo(286904, 286905));
      }
      const v849 = v847.substring(0, v848);
      let v850 = v849 ? v849 : v846.templateName;
      const v851 = {
        templateName: v850,
        cardCount: v846.cardCount,
        pageCount: v846.pageCount,
        groupCount: v846.groupCount,
        detail: v846.detail,
        templatePoint: v846.templatePoint
      };
      v851.type = v844;
      v851.createBy = _0xacc6b7;
      if (v844 == 1) {
        v851.userId = _0x204e68;
      }
      await BuryPointTemplateModel.create(v851);
      p933.response.status = 200;
      p933.body = vRequire9.SUCCESS_200("success", "");
    } else {
      p933.response.status = 412;
      p933.body = vRequire9.ERROR_412("fail");
    }
  }
  static async ["download"](p940) {
    const v852 = {
      Uyonz: ".json",
      RRfdY: function (p941, p942) {
        return p941 ^ p942;
      }
    };
    const v853 = vRequire3.parseQs(p940.request.url);
    let v854 = v853.id;
    if (v854) {
      let v855 = await BuryPointTemplateModel.detail(v854);
      const {
        templateName: _0x684f48,
        cardCount: _0x378e01,
        pageCount: _0x121da2,
        groupCount: _0x570c47,
        detail: _0x56ed20,
        templatePoint: _0x16263d
      } = v855;
      const fs5 = require("fs");
      let v856 = _0x684f48 + v852.Uyonz;
      let v857 = vF21 + v856;
      fs5.writeFile(v857, JSON.stringify({
        templateName: _0x684f48,
        cardCount: _0x378e01,
        pageCount: _0x121da2,
        groupCount: _0x570c47,
        detail: _0x56ed20,
        templatePoint: _0x16263d
      }), p943 => {
        if (p943) {
          throw p943;
        }
      });
      p940.attachment(v857);
      await vRequire17(p940, v857);
      setTimeout(() => {
        fs5.unlinkSync(filePath);
      }, v852.RRfdY(123513, 128265) * 100);
    } else {
      p940.response.status = 412;
      p940.body = vRequire9.ERROR_412("fail");
    }
  }
}
class C9 {
  static async ["create"](p944) {
    const v858 = {
      iQtoh: function (p945, p946) {
        return p945 < p946;
      },
      MopUa: "ClickEventPointId",
      vbbzU: function (p947, p948) {
        return p947 && p948;
      },
      JotuK: "checkSame",
      vZzED: "埋点已经存在，请勿重复创建",
      GwKfe: function (p949, p950) {
        return p949 ^ p950;
      }
    };
    try {
      let v859 = p944.request.body;
      if (v859 && !vRequire3.isObject(v859)) {
        v859 = JSON.parse(v859);
      }
      const {
        list: _0x47c29f
      } = v859;
      if (_0x47c29f && _0x47c29f.length) {
        for (let v860 = 0; v858.iQtoh(v860, _0x47c29f.length); v860++) {
          const v861 = {
            ..._0x47c29f[v860]
          };
          let {
            projectId: _0x290ca4,
            bindUserId: _0x5d6b07,
            bindBy: _0x45f3aa,
            xPath: _0x354a51,
            eventType: _0x3b5883,
            pointName: _0x161813,
            path: _0x5399c9,
            happenPage: _0x5b45cb,
            ownerUserId: _0x4e3489,
            ownerName: _0x29769e
          } = v861;
          v861.enableFlag = 0;
          const v862 = _0x3b5883 === "click" ? v858.MopUa : "ExposureEventPointId";
          v861.replacePointIdKey = v862;
          if (v858.vbbzU(_0x290ca4, _0x5d6b07) && _0x354a51 && _0x3b5883 && _0x161813 && _0x5b45cb && _0x5399c9 && _0x4e3489 && _0x45f3aa) {
            const v863 = await BuryPointVisualTrackingModel.getSamePoint(v861);
            console.log(v858.JotuK, v863);
            if (v863) {
              p944.response.status = 412;
              p944.body = vRequire9.ERROR_412(v858.vZzED);
              return;
            }
            const v864 = await C24.createVisualizationPoint({
              projectId: _0x290ca4,
              pointName: _0x161813,
              replacePointIdKey: v862,
              nickname: _0x29769e
            });
            v861.pointId = v864;
            await BuryPointVisualTrackingModel.create(v861);
            console.log("创建成功" + (v860 + 1) + "条", v861);
          } else {
            p944.response.status = 413;
            p944.body = vRequire9.ERROR_413("创建失败，请求参数不完整！");
            return;
          }
        }
        p944.response.status = 200;
        p944.body = vRequire9.SUCCESS_200("创建成功", true);
      } else {
        p944.response.status = 413;
        p944.body = vRequire9.ERROR_413("创建失败，请求参数不能为空！");
      }
    } catch (_0x4b89d9) {
      console.log(_0x4b89d9);
      p944.response.status = v858.GwKfe(989858, 990038);
      p944.body = vRequire9.ERROR_500("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_PARAM_FAIL));
    }
  }
  static async ["detail"](p951) {
    const v865 = {
      WdFoT: "fail"
    };
    const v866 = vRequire3.parseQs(p951.request.url);
    let v867 = v866.id;
    if (v867) {
      let v868 = await BuryPointVisualTrackingModel.detail(v867);
      p951.response.status = 200;
      p951.body = vRequire9.SUCCESS_200("success", v868);
    } else {
      p951.response.status = 412;
      p951.body = vRequire9.ERROR_412(v865.WdFoT);
    }
  }
  static async update(p952) {
    const v869 = {
      HsKVG: function (p953, p954) {
        return p953 ^ p954;
      }
    };
    try {
      let v870 = JSON.parse(p952.request.body);
      const {
        nickname: _0x8fcd10,
        userId: _0x19f86d
      } = p952.user;
      const {
        ids: _0xa15813,
        enableFlag: _0xee2ccb
      } = v870;
      if (_0xa15813 && _0xee2ccb !== -v869.HsKVG(317987, 317986)) {
        const v871 = new Date().Format("yyyy-MM-dd hh:mm:ss");
        const v872 = {
          enableFlag: _0xee2ccb,
          operateBy: _0x8fcd10,
          operateUserId: _0x19f86d,
          updatedAt: v871
        };
        await BuryPointVisualTrackingModel.batchUpdate(_0xa15813, v872);
        p952.response.status = 200;
        p952.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_SUCCESS), true);
      } else {
        p952.response.status = 412;
        p952.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_PARAM_FAIL));
      }
    } catch (_0x5b1e5a) {
      console.log(_0x5b1e5a);
      p952.response.status = v869.HsKVG(402532, 402937);
      p952.body = vRequire9.ERROR_413("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_FAIL));
    }
  }
  static async ["updateNameById"](p955) {
    const v873 = {
      OcmnY: function (p956, p957) {
        return p956 ^ p957;
      }
    };
    try {
      let v874 = JSON.parse(p955.request.body);
      const {
        nickname: _0x12b7be,
        userId: _0x2f4aaa
      } = p955.user;
      const {
        id: _0x4bfa11,
        pointName: _0x3b14d2,
        projectId: _0x2616e7,
        pointId: _0x19b28a
      } = v874;
      if (_0x4bfa11 && _0x3b14d2) {
        const v875 = {
          pointName: _0x3b14d2,
          operateBy: _0x12b7be,
          operateUserId: _0x2f4aaa
        };
        await C24.updateVisualizationPoint({
          projectId: _0x2616e7,
          pointId: parseInt(_0x19b28a),
          pointName: _0x3b14d2,
          nickname: _0x12b7be
        });
        await BuryPointVisualTrackingModel.updateNameById(_0x4bfa11, v875);
        p955.response.status = v873.OcmnY(850359, 850303);
        p955.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_SUCCESS), true);
      } else {
        p955.response.status = 412;
        p955.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_PARAM_FAIL));
      }
    } catch (_0x2b96f8) {
      console.log(_0x2b96f8);
      p955.response.status = v873.OcmnY(445221, 445112);
      p955.body = vRequire9.ERROR_413("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_FAIL));
    }
  }
  static async delete(p958) {
    const v876 = {
      zibma: "delete",
      yAtlB: "success"
    };
    let v877 = JSON.parse(p958.request.body);
    const {
      ids: _0x3689da,
      pointIds: _0x42235a,
      projectId: _0x3708e2
    } = v877;
    const v878 = _0x42235a.split(",");
    for (let v879 = 0; v879 < v878.length; v879++) {
      const v880 = v878[v879];
      await C24.deleteVisualizationPoint({
        pointId: v880,
        projectId: _0x3708e2
      });
    }
    const v881 = await BuryPointVisualTrackingModel.batchDeletion(_0x3689da);
    console.log(v876.zibma, v881);
    p958.response.status = 200;
    p958.body = vRequire9.SUCCESS_200(v876.yAtlB, true);
  }
  static async getPageList(p959) {
    const v882 = {
      wxKdd: function (p960, p961) {
        return p960 ^ p961;
      }
    };
    let v883 = p959.request.body;
    const v884 = JSON.parse(v883);
    const {
      projectId = ""
    } = v884;
    if (projectId) {
      const v885 = await BuryPointVisualTrackingModel.getPageCount(v884);
      const v886 = v885[0].count;
      const v887 = await BuryPointVisualTrackingModel.getPageList(v884);
      p959.response.status = v882.wxKdd(653088, 653288);
      p959.body = vRequire9.SUCCESS_200("success", {
        list: v887,
        totalCount: v886
      });
    } else {
      p959.response.status = v882.wxKdd(151641, 152005);
      p959.body = vRequire9.ERROR_412("项目ID不能为空");
    }
  }
}
class C10 {
  static async create(p962) {
    const v888 = {
      kgPqF: function (p963, p964) {
        return p963 ^ p964;
      },
      rqCEy: "BIGINT"
    };
    let v889 = JSON.parse(p962.request.body);
    const {
      nickname: _0x3690f4
    } = p962.user;
    v889.createBy = _0x3690f4;
    if (v889.projectId && v889.fieldAlias && v889.fieldType && v889.fieldLength && v889.fieldDesc) {
      if (!vRequire3.checkFieldNameValid(v889.fieldAlias)) {
        p962.response.status = 412;
        p962.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.FIELD_CREATE_FAIL));
        return;
      }
      if (v889.fieldType === "INT") {
        if (v889.fieldLength >= v888.kgPqF(792608, 792799)) {
          v889.fieldLength = 255;
          v889.fieldType = "BIGINT";
        } else if (v889.fieldLength < 255 && v889.fieldLength > 10) {
          v889.fieldType = v888.rqCEy;
        }
      }
      v889.fieldName = vRequire3.pinYinToHump(v889.fieldAlias);
      const v890 = await BuryPointFieldModel.existSameField(v889.projectId, v889.fieldName);
      if (v890 && v890.length > 0) {
        p962.response.status = 412;
        p962.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_FAIL_NAME_EXIST));
        return;
      }
      v889.weType = 0;
      let v891 = await BuryPointFieldModel.create(v889);
      p962.response.status = 200;
      p962.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_SUCCESS), "");
    } else {
      p962.response.status = v888.kgPqF(725226, 725366);
      p962.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_PARAM_FAIL));
    }
  }
  static async detail(p965) {
    const v892 = vRequire3.parseQs(p965.request.url);
    let v893 = v892.id;
    if (v893) {
      let v894 = await BuryPointFieldModel.detail(v893);
      p965.response.status = 200;
      p965.body = vRequire9.SUCCESS_200("success", v894);
    } else {
      p965.response.status = 412;
      p965.body = vRequire9.ERROR_412("fail");
    }
  }
  static async update(p966) {
    const v895 = {
      uLZrD: function (p967, p968) {
        return p967 < p968;
      },
      ICVIF: function (p969, p970) {
        return p969 === p970;
      },
      MXAzX: "INT",
      fqHCk: function (p971, p972) {
        return p971 ^ p972;
      }
    };
    let v896 = JSON.parse(p966.request.body);
    let v897 = v896.id;
    const {
      nickname: _0x4dfb19
    } = p966.user;
    v896.updateBy = _0x4dfb19;
    if (v896) {
      if (!vRequire3.checkFieldNameValid(v896.fieldAlias)) {
        p966.response.status = 412;
        p966.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.FIELD_CREATE_FAIL));
        return;
      }
      if (v896.fieldType === "INT") {
        if (v896.fieldLength >= 255) {
          v896.fieldLength = 255;
          v896.fieldType = "BIGINT";
        } else if (v895.uLZrD(v896.fieldLength, 255) && v896.fieldLength > 10) {
          v896.fieldType = "BIGINT";
        }
      }
      if (v895.ICVIF(v896.fieldType, "BIGINT")) {
        if (v896.fieldLength < 11) {
          v896.fieldType = v895.MXAzX;
        } else if (v896.fieldLength >= v895.fqHCk(200551, 200600)) {
          v896.fieldLength = 255;
        }
      }
      await BuryPointFieldModel.update(v897, v896);
      let v898 = await BuryPointFieldModel.detail(v897);
      p966.response.status = v895.fqHCk(246650, 246706);
      p966.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_SUCCESS), v898);
    } else {
      p966.response.status = 412;
      p966.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_FAIL));
    }
  }
  static async ["delete"](p973) {
    const v899 = {
      rZbfk: function (p974, p975) {
        return p974 ^ p975;
      },
      tugGA: function (p976, p977) {
        return p976 ^ p977;
      },
      Dqoha: function (p978, p979) {
        return p978 ^ p979;
      },
      UyiSM: function (p980, p981) {
        return p980 + p981;
      }
    };
    let v900 = JSON.parse(p973.request.body);
    const {
      id: _0x3ddc73
    } = v900;
    const v901 = await BuryPointWarehouseModel.getAllList("");
    for (let v902 = v899.rZbfk(786920, 786920); v902 < v901.length; v902++) {
      const v903 = v901[v902];
      const {
        pointName: _0x240600,
        fields: _0x139118
      } = v903;
      let v904 = _0x139118.split(",");
      for (let v905 = v899.tugGA(324816, 324816); v905 < v904.length; v905++) {
        if (_0x3ddc73 === v904[v905]) {
          p973.response.status = v899.Dqoha(161895, 162299);
          let v906 = v899.UyiSM("" + vRequire3.b64DecodeUnicode(vRequire26.FIELD_DELETE_FAIL_1) + _0x240600, "" + vRequire3.b64DecodeUnicode(vRequire26.FIELD_DELETE_FAIL_2));
          p973.body = vRequire9.ERROR_412(v906);
          return;
        }
      }
    }
    await BuryPointFieldModel.delete(_0x3ddc73);
    p973.response.status = 200;
    p973.body = vRequire9.SUCCESS_200("success", "");
  }
  static async getPageList(p982) {
    const v907 = {
      ZBGJz: function (p983, p984) {
        return p983 ^ p984;
      },
      neTKZ: function (p985, p986) {
        return p985 < p986;
      },
      HtsQz: function (p987, p988) {
        return p987 != p988;
      },
      yeaxk: function (p989, p990) {
        return p989 + p990;
      },
      SLuJE: "success"
    };
    let v908 = p982.request.body;
    const v909 = JSON.parse(v908);
    const {
      projectId: _0x1d6a6a,
      fieldType = "",
      fieldAlias = "",
      weType = "",
      page: _0x35cacd,
      pageSize: _0xbf9ee3
    } = v909;
    if (_0x1d6a6a) {
      const v910 = await BuryPointFieldModel.getPageCount(_0x1d6a6a, weType, fieldType, fieldAlias);
      const v911 = v910[0].count;
      const v912 = await BuryPointFieldModel.getPageList(_0x1d6a6a, weType, fieldType, fieldAlias, _0x35cacd, _0xbf9ee3);
      const v913 = await BuryPointWarehouseModel.getAllList(_0x1d6a6a);
      for (let v914 = 0; v914 < v912.length; v914++) {
        const {
          id: _0x2b386e,
          weType: _0x162894
        } = v912[v914];
        let v915 = 1;
        let v916 = "";
        if (_0x162894 && _0x162894 === 1) {
          v915 = 0;
        } else {
          for (let v917 = v907.ZBGJz(298258, 298258); v917 < v913.length; v917++) {
            const v918 = v913[v917];
            const {
              fields: _0x3798d7
            } = v918;
            if (_0x3798d7.indexOf(_0x2b386e) != -1) {
              v915 = 0;
              break;
            }
          }
          for (let v919 = 0; v907.neTKZ(v919, v913.length); v919++) {
            const v920 = v913[v919];
            const {
              fields: _0x4b92e0
            } = v920;
            if (v907.HtsQz(_0x4b92e0.indexOf(_0x2b386e), -1)) {
              v916 = v907.yeaxk(v916, v920.pointName) + "、";
            }
          }
        }
        v912[v914].isEdit = v915;
        v912[v914].relationPoints = v916.substring(0, v916.lastIndexOf("、"));
      }
      p982.response.status = v907.ZBGJz(195937, 196009);
      p982.body = vRequire9.SUCCESS_200(v907.SLuJE, {
        list: v912,
        totalCount: v911
      });
    } else {
      p982.response.status = 412;
      p982.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_FAIL));
    }
  }
  static async ["getNoWeList"](p991) {
    const v921 = {
      Zgqzm: function (p992, p993) {
        return p992 ^ p993;
      }
    };
    let v922 = p991.request.body;
    const v923 = JSON.parse(v922);
    const {
      projectId: _0x215703,
      fieldType = "",
      fieldAlias = ""
    } = v923;
    if (_0x215703) {
      const v924 = await BuryPointFieldModel.getList(_0x215703, 0, fieldType, fieldAlias);
      p991.response.status = v921.Zgqzm(644091, 643891);
      p991.body = vRequire9.SUCCESS_200("success", v924);
    } else {
      p991.response.status = 412;
      p991.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_FAIL));
    }
  }
  static async getListByPointId(p994) {
    const v925 = {
      tKmxj: function (p995, p996) {
        return p995 ^ p996;
      },
      QYPwU: function (p997, p998) {
        return p997 < p998;
      },
      naisD: "success"
    };
    let v926 = p994.request.body;
    const v927 = JSON.parse(v926);
    const {
      pointId: _0x41919e
    } = v927;
    if (_0x41919e) {
      const v928 = await BuryPointWarehouseModel.detailByPointId(_0x41919e);
      const {
        fields: _0x40e264
      } = v928;
      const v929 = [];
      const v930 = await BuryPointFieldModel.getListByFieldIds(_0x40e264);
      for (let v931 = v925.tKmxj(369427, 369427); v925.QYPwU(v931, v930.length); v931++) {
        v929.push(v930[v931]);
      }
      p994.response.status = 200;
      p994.body = vRequire9.SUCCESS_200(v925.naisD, v929);
    } else {
      p994.response.status = 412;
      p994.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_FAIL));
    }
  }
  static async getListAndWfByPointId(p999) {
    const v932 = {
      klpjb: function (p1000, p1001) {
        return p1000 ^ p1001;
      },
      InhlP: function (p1002, p1003) {
        return p1002 ^ p1003;
      },
      gOVix: function (p1004, p1005) {
        return p1004 < p1005;
      },
      htJbX: function (p1006, p1007) {
        return p1006 === p1007;
      },
      wjJcC: function (p1008, p1009) {
        return p1008 < p1009;
      },
      WcgSn: function (p1010, p1011) {
        return p1010 ^ p1011;
      }
    };
    let v933 = p999.request.body;
    const v934 = JSON.parse(v933);
    const {
      pointId: _0x3adf66
    } = v934;
    if (_0x3adf66) {
      const v935 = await BuryPointWarehouseModel.detailByPointId(_0x3adf66);
      const {
        fields: _0x55ea33,
        projectId: _0x306bf7
      } = v935;
      const v936 = [];
      const v937 = await BuryPointFieldModel.getListByProjectIdAndWeType(_0x306bf7, v932.klpjb(538480, 538481));
      for (let v938 = v932.InhlP(845884, 845884); v932.gOVix(v938, v937.length); v938++) {
        if (v932.htJbX(v937[v938].fieldName.toString().toLowerCase(), "wecustomerkey")) {
          v936.push(v937[v938]);
          break;
        }
      }
      const v939 = await BuryPointFieldModel.getListByFieldIds(_0x55ea33);
      for (let v940 = 0; v932.wjJcC(v940, v939.length); v940++) {
        v936.push(v939[v940]);
      }
      for (let v941 = v932.WcgSn(913593, 913593); v941 < v937.length; v941++) {
        if (v937[v941].fieldName.toString().toLowerCase() !== "wecustomerkey") {
          v936.push(v937[v941]);
        }
      }
      p999.response.status = v932.InhlP(972926, 972982);
      p999.body = vRequire9.SUCCESS_200("success", v936);
    } else {
      p999.response.status = 412;
      p999.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_FAIL));
    }
  }
  static async getListAndWfByProjectId(p1012) {
    let v942 = p1012.request.body;
    const v943 = JSON.parse(v942);
    const {
      projectId: _0x54c6f7
    } = v943;
    if (_0x54c6f7) {
      const v944 = [];
      const v945 = await BuryPointFieldModel.getListByProjectIdAndWeType(_0x54c6f7, "");
      for (let v946 = 0; v946 < v945.length; v946++) {
        let v947 = {
          id: v945[v946].id,
          fieldName: v945[v946].fieldName,
          fieldAlias: v945[v946].fieldAlias,
          fieldType: v945[v946].fieldType,
          fieldDesc: v945[v946].fieldDesc,
          groupByFlag: v945[v946].groupByFlag,
          weType: v945[v946].weType
        };
        v944.push(v947);
      }
      v944.push(...vRequire31);
      p1012.response.status = 200;
      p1012.body = vRequire9.SUCCESS_200("success", v944);
    } else {
      p1012.response.status = 412;
      p1012.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_FAIL));
    }
  }
  static async getFieldCount(p1013) {
    const v948 = {
      ZbmRC: function (p1014, p1015) {
        return p1014 ^ p1015;
      }
    };
    let v949 = p1013.request.body;
    const v950 = JSON.parse(v949);
    const {
      projectId: _0x356b1d
    } = v950;
    if (_0x356b1d) {
      const v951 = await BuryPointFieldModel.getPageCount(_0x356b1d, v948.ZbmRC(897060, 897060), "", "");
      const v952 = v951[0].count;
      const v953 = await BuryPointFieldModel.getPageCount(_0x356b1d, 1, "", "");
      const v954 = v953[0].count;
      p1013.response.status = v948.ZbmRC(370626, 370442);
      p1013.body = vRequire9.SUCCESS_200("success", {
        projectCount: v952,
        weCount: v954
      });
    } else {
      p1013.response.status = 412;
      p1013.body = vRequire9.ERROR_412("fail");
    }
  }
  static async ["getAllList"](p1016) {
    const v955 = await BuryPointFieldModel.getAllList();
    p1016.response.status = 200;
    p1016.body = vRequire9.SUCCESS_200("success", v955);
  }
  static async copyField(p1017, p1018, p1019) {
    const v956 = await BuryPointFieldModel.detail(p1018);
    let {
      fieldName: _0x2597f3,
      fieldAlias: _0x29ca55,
      fieldType: _0x20f8e5,
      fieldLength: _0x41c62c,
      groupByFlag: _0x39c908,
      fieldDesc: _0xeb8f3a,
      weType: _0x3d451d,
      createBy: _0x221951
    } = v956;
    const v957 = await BuryPointFieldModel.existSameField(p1017, _0x2597f3);
    if (v957 && v957.length > 0) {
      return v957[0].id;
    } else {
      let v958 = {
        weType: _0x3d451d,
        projectId: p1017,
        fieldName: _0x2597f3,
        fieldAlias: _0x29ca55,
        fieldType: _0x20f8e5,
        fieldLength: _0x41c62c,
        groupByFlag: _0x39c908,
        fieldDesc: _0xeb8f3a,
        createBy: _0x221951 ? _0x221951 : p1019
      };
      let v959 = await BuryPointFieldModel.create(v958);
      return v959.id;
    }
  }
  static async ["copyFieldByName"](p1020, p1021, p1022) {
    if (!p1021) {
      return;
    }
    let {
      fieldName: _0xeccd87,
      fieldAlias: _0x21f85d,
      fieldType: _0x3f5e2a,
      fieldLength: _0x13e284,
      groupByFlag: _0xe35b54,
      fieldDesc: _0x8c869a,
      weType: _0x102c1b,
      createBy: _0x2f95d5
    } = p1021;
    const v960 = await BuryPointFieldModel.existSameField(p1020, _0xeccd87);
    if (v960 && v960.length > 0) {
      return v960[0].id;
    } else {
      let v961 = {
        weType: _0x102c1b,
        projectId: p1020,
        fieldName: _0xeccd87,
        fieldAlias: _0x21f85d,
        fieldType: _0x3f5e2a,
        fieldLength: _0x13e284,
        groupByFlag: _0xe35b54,
        fieldDesc: _0x8c869a,
        createBy: _0x2f95d5 ? _0x2f95d5 : p1022
      };
      let v962 = await BuryPointFieldModel.create(v961);
      return v962.id;
    }
  }
  static async ["exportField"](p1023) {
    const v963 = {
      XaAOh: function (p1024, p1025) {
        return p1024 || p1025;
      },
      UcztV: function (p1026, p1027) {
        return p1026 ^ p1027;
      },
      KXjtv: function (p1028, p1029) {
        return p1028 < p1029;
      },
      KztyB: function (p1030, p1031) {
        return p1030 ^ p1031;
      }
    };
    let v964 = p1023.request.body;
    const v965 = JSON.parse(v964);
    const {
      projectId: _0x3c2546,
      fieldIds = "",
      allSelectProjectId = ""
    } = v965;
    const {
      nickname: _0x280cd9
    } = p1023.user;
    if (_0x3c2546 && v963.XaAOh(fieldIds, allSelectProjectId)) {
      let v966 = [];
      if (allSelectProjectId) {
        let v967 = await BuryPointFieldModel.getIdsByProjectId(allSelectProjectId);
        for (let v968 = v963.UcztV(175911, 175911); v968 < v967.length; v968++) {
          v966.push(v967[v968].id);
        }
      }
      if (fieldIds) {
        let v969 = fieldIds.split(",");
        for (let v970 = 0; v963.KXjtv(v970, v969.length); v970++) {
          v966.push(v969[v970]);
        }
      }
      let v971 = {};
      v971.successCount = v963.KztyB(891803, 891803);
      v971.repeatCount = 0;
      v971.repeatField = [];
      for (let v972 = 0; v963.KXjtv(v972, v966.length); v972++) {
        const v973 = await BuryPointFieldModel.detail(v966[v972]);
        let {
          fieldName: _0x41dc1f,
          fieldAlias: _0x5d5390,
          fieldType: _0x35b0e9,
          fieldLength: _0x4a207a,
          groupByFlag: _0x48ccad,
          fieldDesc: _0x55c4be,
          weType: _0x23452b
        } = v973;
        const v974 = await BuryPointFieldModel.existSameField(_0x3c2546, _0x41dc1f);
        if (v974 && v974.length > 0) {
          v971.repeatCount = v971.repeatCount + 1;
          v971.repeatField.push(_0x5d5390);
        } else {
          let v975 = {
            weType: _0x23452b,
            projectId: _0x3c2546,
            fieldName: _0x41dc1f,
            fieldAlias: _0x5d5390,
            fieldType: _0x35b0e9,
            fieldLength: _0x4a207a,
            groupByFlag: _0x48ccad,
            fieldDesc: _0x55c4be,
            createBy: _0x280cd9
          };
          await BuryPointFieldModel.create(v975);
          v971.successCount = v971.successCount + 1;
        }
      }
      p1023.response.status = 200;
      p1023.body = vRequire9.SUCCESS_200("success", v971);
    } else {
      p1023.response.status = 412;
      p1023.body = vRequire9.ERROR_412("fail");
    }
  }
  static async ["getCommonFieldList"](p1032) {
    const v976 = {
      hxrny: function (p1033, p1034) {
        return p1033 ^ p1034;
      },
      HPVWx: function (p1035, p1036) {
        return p1035 < p1036;
      },
      KdsRt: "success"
    };
    let v977 = p1032.request.body;
    const v978 = JSON.parse(v977);
    const {
      pointIds: _0x6d8761,
      projectId: _0x413fdb
    } = v978;
    let v979 = [];
    if (_0x6d8761) {
      let v980 = _0x6d8761.split(",");
      let v981 = [];
      for (let v982 = v976.hxrny(904024, 904024); v976.HPVWx(v982, v980.length); v982++) {
        const v983 = await BuryPointWarehouseModel.detailByPointId(v980[v982]);
        if (!v983) {
          continue;
        }
        const {
          fields: _0x98a5bd
        } = v983;
        let v984 = _0x98a5bd.split(",");
        for (let v985 = v976.hxrny(264745, 264745); v985 < v984.length; v985++) {
          v981.push(v984[v985]);
        }
      }
      let v986 = [...new Set(v981)];
      const v987 = await BuryPointFieldModel.getListByFieldIds(v986 + "");
      for (let v988 = 0; v976.HPVWx(v988, v987.length); v988++) {
        let v989 = {
          filedName: v987[v988].fieldName,
          fieldAlias: v987[v988].fieldAlias
        };
        v979.push(v989);
      }
      const v990 = await BuryPointFieldModel.getListByProjectIdAndWeType(_0x413fdb, 1);
      for (let v991 = v976.hxrny(437750, 437750); v991 < v990.length; v991++) {
        let v992 = {
          filedName: v990[v991].fieldName,
          fieldAlias: v990[v991].fieldAlias
        };
        v979.push(v992);
      }
      p1032.response.status = 200;
      p1032.body = vRequire9.SUCCESS_200(v976.KdsRt, v979);
    } else {
      p1032.response.status = 412;
      p1032.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_FAIL));
    }
  }
}
let vF25 = "0.3.82";
class C11 {
  static async getMachineFingerprint() {
    const v993 = {
      JOIkK: function (p1037, p1038) {
        return p1037(p1038);
      },
      nKsBi: function (p1039, p1040) {
        return p1039 ^ p1040;
      }
    };
    const v994 = ip.address().split(".");
    const v995 = v994[0] + "." + v994[1];
    const v996 = await vRequire15.cpu();
    const v997 = await vRequire15.baseboard();
    const v998 = await vRequire15.diskLayout();
    const v999 = (await vRequire15.networkInterfaces()).find(p1041 => !p1041.internal)?.mac;
    const v1000 = v996.manufacturer + "-" + v996.brand + "-" + v999;
    const v1001 = v996.manufacturer + "-" + v996.brand + "-" + v995;
    const v1002 = require("crypto").createHash("sha256").update(v1000).digest("hex");
    const v1003 = v993.JOIkK(require, "crypto").createHash("sha256").update(v1001).digest("hex");
    const v1004 = v1002.substring(0, v993.nKsBi(343619, 343629));
    const v1005 = v1003.substring(0, v993.nKsBi(313043, 313053));
    return {
      machineId1: v1004,
      machineId2: v1005
    };
  }
  static async judgeCardCount(p1042) {
    const v1006 = {
      nTXuY: function (p1043, p1044) {
        return p1043(p1044);
      },
      TiOaW: function (p1045, p1046) {
        return p1045 ^ p1046;
      },
      DzmzJ: function (p1047, p1048) {
        return p1047 < p1048;
      },
      SabUQ: function (p1049, p1050) {
        return p1049 ^ p1050;
      }
    };
    const v1007 = await BuryPointCardModel.getCountByNoSysType("");
    let v1008 = v1006.nTXuY(isNaN, v1007[0].count) ? v1006.TiOaW(999715, 999715) : v1007[v1006.TiOaW(575486, 575486)].count;
    const v1009 = global.eventInfo.purchaseCodeCardCount || 3;
    if (v1006.DzmzJ(parseInt(v1009, v1006.TiOaW(878275, 878281)) - parseInt(v1008, 10), parseInt(p1042, 10))) {
      return v1006.SabUQ(771279, 771278);
    }
    return 0;
  }
  static async ["judgeProjectCount"]() {
    const v1010 = {
      HuACF: function (p1051, p1052) {
        return p1051 ^ p1052;
      },
      rxwhi: function (p1053, p1054, p1055) {
        return p1053(p1054, p1055);
      },
      Ewxbc: function (p1056, p1057) {
        return p1056 ^ p1057;
      }
    };
    const v1011 = await BuryPointProjectModel.getCountByNoSysType("");
    let v1012 = isNaN(v1011[0].count) ? 0 : v1011[0].count;
    const v1013 = global.eventInfo.purchaseCodeCardCount || v1010.HuACF(662978, 662983);
    if (v1010.rxwhi(parseInt, v1013, 10) < v1010.rxwhi(parseInt, v1012, 10)) {
      return v1010.Ewxbc(397669, 397668);
    }
    return 0;
  }
  static async ["consoleInfo"](p1058) {
    C3.consoleInfo(p1058);
  }
  static async ["checkPurchase"](p1059, p1060) {
    C3.checkPurchase(p1059, p1060);
  }
  static async startReceiveMsg() {
    const v1014 = {
      XKaVY: function (p1061) {
        return p1061();
      },
      ffAeq: "解析埋点消息异常:",
      jrjDF: function (p1062, p1063) {
        return p1062 ^ p1063;
      },
      tzClg: function (p1064, p1065) {
        return p1064 + p1065;
      }
    };
    const {
      accountInfo: _0x26bbd2
    } = vRequire22;
    const v1015 = _0x26bbd2.messageQueue?.consumerCount || 2;
    for (let v1016 = 0; v1016 < v1015; v1016++) {
      try {
        const v1017 = new vRequire23();
        v1017.receiveQueueMsg("webfunny_event_logs", async (p1066, p1067) => {
          try {
            const v1018 = JSON.parse(p1066);
            C.handleUpEventData(v1018, "").catch(p1068 => {
              vRequire7.printError("处理埋点数据异常:", p1068);
            });
            p1067();
          } catch (_0x1ede98) {
            v1014.XKaVY(p1067);
            vRequire7.printError(v1014.ffAeq, _0x1ede98);
          }
        }, p1069 => {
          vRequire7.printError("埋点消费者" + (v1016 + 1) + "获取消息失败:", p1069);
        });
        vRequire7.printInfo("埋点消费者" + (v1016 + v1014.jrjDF(197184, 197185)) + "启动成功");
      } catch (_0x412a00) {
        vRequire7.printError("埋点消费者" + v1014.tzClg(v1016, 1) + "启动失败:", _0x412a00);
      }
    }
  }
  static async getConcurrencyByMinuteInHour(p1070) {
    const v1019 = {
      KZckI: "success"
    };
    const v1020 = global.eventInfo.logCountInMinuteList;
    p1070.response.status = 200;
    p1070.body = vRequire9.SUCCESS_200(v1019.KZckI, {
      logCountInMinuteList: v1020
    });
  }
  static async ["getSysInfo"](p1071) {
    const v1021 = {
      zDdmY: function (p1072, p1073) {
        return p1072 ^ p1073;
      },
      rLwZk: function (p1074, p1075) {
        return p1074 ^ p1075;
      }
    };
    const {
      accountInfo: _0x54a9fa
    } = vRequire22;
    const v1022 = await UserModel.checkAdminAccount();
    const v1023 = v1022 && v1022[0] ? v1022[v1021.zDdmY(703541, 703541)].count * v1021.rLwZk(532071, 532070) : 0;
    const {
      webfunnyNeedLogin: _0x17c7f9,
      messageQueue: _0x3fd2ec,
      localServerDomain: _0x4af319,
      localServerPort: _0x1b0dd4,
      localAssetsDomain: _0x5cff2f,
      localAssetsPort: _0x3f2e41,
      centerAssetsDomain: _0x162a42,
      mainDomain: _0x2a2f2a,
      openMonitor: _0x115afd,
      cacheDataTime: _0x515266,
      isCloud: _0x5a4c71
    } = _0x54a9fa;
    const {
      purchaseCodeEndDate: _0x48451d,
      purchaseCodeValid: _0x12dc3a,
      purchaseCodeType: _0x389fd7,
      purchaseCodeCardCount: _0x512b5b
    } = global.eventInfo;
    const v1024 = await BuryPointProjectModel.getProjectCount();
    let v1025 = isNaN(v1024[0].count) ? v1021.zDdmY(611455, 611455) : v1024[0].count;
    let v1026 = parseInt(_0x512b5b, 10) - parseInt(v1025, 10);
    p1071.response.status = 200;
    p1071.body = vRequire9.SUCCESS_200("success", {
      cardLeaveCount: v1026,
      webfunnyVersion: vF25,
      webfunnyNeedLogin: _0x17c7f9,
      messageQueue: _0x3fd2ec,
      purchaseCodeEndDate: _0x48451d,
      purchaseCodeValid: _0x12dc3a,
      pct: _0x389fd7,
      cacheDataTime: _0x515266,
      localServerDomain: _0x4af319,
      localServerPort: _0x1b0dd4,
      localAssetsDomain: _0x5cff2f,
      localAssetsPort: _0x3f2e41,
      centerAssetsDomain: _0x162a42,
      mainDomain: _0x2a2f2a,
      adminUserCount: v1023,
      openMonitor: _0x115afd,
      isCloud: _0x5a4c71
    });
  }
  static async getLogCountInfoByDay(p1076) {
    const v1027 = {
      UfDvG: function (p1077, p1078) {
        return p1077 > p1078;
      },
      NVZRg: "yyyy-MM-dd 23:59:59",
      JUiSY: function (p1079, p1080) {
        return p1079 ^ p1080;
      },
      PQrEO: "eventLogCountList",
      oJBmX: function (p1081, p1082) {
        return p1081 ^ p1082;
      },
      QbPup: "success"
    };
    const {
      companyId: _0x1bce32,
      dayDiff = 0
    } = p1076.request.body;
    const v1028 = await BuryPointProjectModel.getAllProjectListByCompanyId(_0x1bce32);
    let v1029 = {};
    let v1030 = {};
    for (let v1031 = 0; v1031 < v1028.length; v1031++) {
      const {
        projectId: _0x214cb6,
        name: _0x586c1b
      } = v1028[v1031];
      v1030[_0x214cb6] = _0x586c1b;
      v1029[_0x214cb6] = {};
      const v1032 = await BuryPointWarehouseModel.getWePointIdsByProjectId(_0x214cb6);
      if (v1032 && v1027.UfDvG(v1032.length, 0)) {
        const vV1032 = v1032;
        if (vV1032 && vV1032.length > 0) {
          for (let v1033 = 0; v1033 < vV1032.length; v1033++) {
            const {
              pointId: _0x3e94d1,
              projectId: _0x1d2aac
            } = vV1032[v1033];
            const v1034 = _0x1d2aac + "_" + _0x3e94d1;
            const v1035 = " happenTime>='" + new Date().Format("yyyy-MM-dd 00:00:00") + "' and happenTime<='" + new Date().Format(v1027.NVZRg) + "' ";
            const v1036 = "SELECT count(id) as count from " + v1034 + " WHERE " + v1035;
            try {
              const v1037 = await BuryPointCardModel.statisticData(v1036);
              let v1038 = v1037 && v1037.length > 0 ? v1037[v1027.JUiSY(746430, 746430)].count : 0;
              v1029[_0x1d2aac][_0x3e94d1] = v1038;
            } catch (_0x46ffa0) {
              v1029[_0x1d2aac][_0x3e94d1] = 0;
            }
          }
        }
      }
    }
    console.log(v1027.PQrEO, v1029);
    p1076.response.status = v1027.oJBmX(708609, 708809);
    p1076.body = vRequire9.SUCCESS_200(v1027.QbPup, {
      eventLogCountList: v1029,
      eventProjectNameList: v1030
    });
  }
  static async monitorVersion(p1083) {
    p1083.response.status = 200;
    p1083.body = vRequire9.SUCCESS_200("success", PROJECT_INFO.MONITOR_VERSION);
  }
  static async ["dockerHealth"](p1084) {
    const v1039 = {
      IJgwI: function (p1085, p1086) {
        return p1085 ^ p1086;
      }
    };
    p1084.response.status = v1039.IJgwI(989566, 989622);
    p1084.body = {
      status: "OK"
    };
  }
  static async ["getCount"](p1087) {
    const v1040 = {
      YVyAw: function (p1088, p1089) {
        return p1088 ^ p1089;
      },
      PFyJi: function (p1090, p1091) {
        return p1090 ^ p1091;
      }
    };
    let v1041 = 0;
    const v1042 = await CommonModel.statisticData(p1087);
    v1041 = v1042 ? v1042.length === 0 || isNaN(v1042[v1040.YVyAw(955366, 955366)].count) || v1042[0].count === null ? v1040.YVyAw(127349, 127349) : v1042[0].count : v1040.PFyJi(237588, 237588);
    return v1041;
  }
  static async getEchartStatic(p1092) {
    const libEchartsWorldCapital_zh = require("../lib/echarts/worldCapital_zh");
    const libEchartsWorldNameMap = require("../lib/echarts/worldNameMap");
    p1092.response.status = 200;
    p1092.body = vRequire9.SUCCESS_200("success", {
      worldCapital: libEchartsWorldCapital_zh,
      worldNameMap: libEchartsWorldNameMap
    });
  }
  static async addIfNotExists(p1093, p1094, p1095, p1096) {
    const v1043 = p1093.some(p1097 => p1097[p1095] === p1094[p1095] && p1097[p1096] === p1094[p1096]);
    if (!v1043) {
      p1093.push(p1094);
    }
    return p1093;
  }
  static async addOneIfNotExists(p1098, p1099, p1100) {
    const v1044 = p1098.some(p1101 => p1101[p1100] === p1099[p1100]);
    if (!v1044) {
      p1098.push(p1099);
    }
    return p1098;
  }
  static async ["sortByOneField"](p1102, p1103) {
    return p1102.sort((p1104, p1105) => (p1104[p1103] + "").localeCompare(p1105[p1103] + ""));
  }
  static async sortByTwoField(p1106, p1107, p1108) {
    return p1106.sort((p1109, p1110) => (p1109[p1107] + "" + p1109[p1108]).localeCompare(p1110[p1107] + "" + p1110[p1108]));
  }
  static async ["getExportCode"](p1111) {
    const v1045 = {
      wDXHo: "string",
      svUbk: function (p1112, p1113) {
        return p1112 * p1113;
      },
      xbcAc: function (p1114, p1115) {
        return p1114 + p1115;
      },
      ZEoOg: function (p1116, p1117) {
        return p1116 ^ p1117;
      },
      dbzgG: "success"
    };
    const v1046 = typeof p1111.request.body === v1045.wDXHo ? JSON.parse(p1111.request.body) : p1111.request.body;
    const {
      apiName: _0x5a39b9
    } = v1046;
    const v1047 = Math.floor(v1045.svUbk(Math.random(), 100000)) + 100000;
    const v1048 = global.eventInfo.exportRandomNumber;
    v1048[_0x5a39b9] = {
      code: v1047,
      endTime: v1045.xbcAc(new Date().getTime(), v1045.ZEoOg(955229, 955233) * 1000)
    };
    p1111.response.status = 200;
    p1111.body = vRequire9.SUCCESS_200(v1045.dbzgG, v1047);
  }
  static async ["addApiCache"](p1118, p1119) {
    if (!global.WebfunnyCacheDataList) {
      global.WebfunnyCacheDataList = {};
    }
    global.WebfunnyCacheDataList[p1118] = p1119;
  }
  static async refreshBaseCacheTimer() {
    const v1049 = {
      qfpjW: function (p1120, p1121) {
        return p1120 * p1121;
      },
      VeiEc: "yyyy-MM-dd hh:mm:ss",
      qsHfC: "没有需要更新缓存的点位",
      RNnSI: function (p1122, p1123) {
        return p1122 ^ p1123;
      }
    };
    try {
      const v1050 = new Date(Date.now() - v1049.qfpjW(100, 1000)).Format(v1049.VeiEc);
      let v1051 = await BuryPointWarehouseModel.getPointsUpdatedAfter(v1050);
      if (!v1051 || v1051.length === 0) {
        console.log(v1049.qsHfC);
        return;
      }
      console.log("发现 " + v1051.length + " 个点位需要更新缓存");
      for (let v1052 = v1049.RNnSI(894699, 894699); v1052 < v1051.length; v1052++) {
        const v1053 = v1051[v1052];
        const {
          pointId: _0x40f3f8,
          pointName: _0x4bad28,
          projectId: _0x46fc8f,
          fields: _0x3be21a,
          weType: _0x327184,
          updatedAt: _0x1bfdab
        } = v1053;
        try {
          console.log("点位 " + _0x40f3f8 + " 需要更新缓存，更新时间: " + _0x1bfdab);
          await C24.updatePointBaseCache(_0x40f3f8, _0x4bad28, _0x46fc8f, _0x3be21a, _0x327184);
        } catch (_0x55a4ee) {
          console.error("更新点位 " + _0x40f3f8 + " 缓存失败:", _0x55a4ee);
        }
      }
    } catch (_0x2dcb1f) {
      console.error("刷新缓存定时任务执行失败:", _0x2dcb1f);
    }
  }
  static async refreshCacheTimer() {
    const v1054 = {
      zBDjG: function (p1124, p1125) {
        return p1124 ^ p1125;
      },
      RfXHU: "sv-SE",
      UfBNs: function (p1126, p1127) {
        return p1126 > p1127;
      }
    };
    try {
      const v1055 = global.eventInfo.lastPointCheckTime || new Date(Date.now() - v1054.zBDjG(233441, 232457) * 120);
      console.log("[时区调试] 当前时间: " + new Date().toLocaleString("sv-SE").replace("T", " "));
      console.log("[时区调试] 查询时间: " + v1055.toLocaleString(v1054.RfXHU).replace("T", " "));
      let v1056 = await BuryPointWarehouseModel.getPointsUpdatedAfter(v1055);
      if (!v1056 || v1056.length === v1054.zBDjG(139675, 139675)) {
        console.log("没有需要更新缓存的点位");
        global.eventInfo.lastPointCheckTime = new Date();
        return;
      }
      console.log("发现 " + v1056.length + " 个点位需要更新缓存");
      let vV1055 = v1055;
      for (let v1057 = 0; v1057 < v1056.length; v1057++) {
        const v1058 = v1056[v1057];
        const {
          pointId: _0x31abfa,
          pointName: _0x3cfce5,
          projectId: _0x6934cb,
          fields: _0x4ceca9,
          weType: _0x1a34c0,
          updatedAt: _0xb8f419
        } = v1058;
        try {
          const v1059 = new Date(_0xb8f419);
          if (v1054.UfBNs(v1059, vV1055)) {
            vV1055 = v1059;
          }
          const v1060 = C11.shouldUpdatePointCache(_0x31abfa, v1059);
          if (v1060) {
            console.log("点位 " + _0x31abfa + " 需要更新缓存，更新时间: " + _0xb8f419);
            await C11.updatePointCache(_0x31abfa, _0x3cfce5, _0x6934cb, _0x4ceca9, _0x1a34c0);
          } else {
            console.log("点位 " + _0x31abfa + " 缓存已是最新，跳过更新");
          }
        } catch (_0x1696c2) {
          console.error("更新点位 " + _0x31abfa + " 缓存失败:", _0x1696c2);
        }
      }
      global.eventInfo.lastPointCheckTime = vV1055;
      console.log("点位缓存更新完成，下次检查时间: " + vV1055.toLocaleString("sv-SE").replace("T", " "));
    } catch (_0x158cd7) {
      console.error("刷新缓存定时任务执行失败:", _0x158cd7);
    }
  }
  static shouldUpdatePointCache(p1128, p1129) {
    const v1061 = {
      aZiYz: function (p1130, p1131) {
        return p1130 ^ p1131;
      }
    };
    if (!global.eventInfo.pointAndFields || !global.eventInfo.pointAndFields[p1128]) {
      return true;
    }
    const v1062 = global.eventInfo.pointAndFields[p1128];
    const v1063 = new Date(v1062.updateTime || v1061.aZiYz(662493, 662493));
    if (p1129 > v1063) {
      return true;
    }
    return false;
  }
  static async ["updatePointCache"](p1132, p1133, p1134, p1135, p1136) {
    const v1064 = {
      HNHhz: function (p1137, p1138) {
        return p1137 ^ p1138;
      }
    };
    try {
      const v1065 = await BuryPointFieldModel.getSomeListByProjectIdAndWeType(p1135, "", "");
      let v1066 = [];
      if (p1136 && (p1136 === 2 || p1136 === "2")) {
        v1066 = v1065;
      } else {
        const v1067 = await BuryPointFieldModel.getSomeListByProjectIdAndWeType("", p1134, v1064.HNHhz(640793, 640792));
        v1066 = [...v1065, ...v1067];
      }
      const v1068 = {
        finalFieldList: v1066,
        buryPointFieldList: v1065,
        pointId: p1132,
        weType: p1136,
        updateTime: new Date().getTime()
      };
      if (!global.eventInfo.pointAndFields) {
        global.eventInfo.pointAndFields = {};
      }
      global.eventInfo.pointAndFields[p1132] = v1068;
      if (!global.eventInfo.points) {
        global.eventInfo.points = {};
      }
      global.eventInfo.points[p1132] = {
        projectId: p1134,
        fields: p1135,
        weType: p1136,
        pointName: p1133,
        updateTime: new Date().getTime()
      };
      console.log("点位 " + p1132 + " 缓存更新成功，字段数量: " + v1066.length);
    } catch (_0x2289a5) {
      console.error("更新点位 " + p1132 + " 缓存失败:", _0x2289a5);
      throw _0x2289a5;
    }
  }
}
class C12 {
  static async initData() {
    const v1069 = {
      oFIYw: function (p1139, p1140, p1141) {
        return p1139(p1140, p1141);
      },
      JMtUH: function (p1142, p1143) {
        return p1142 ^ p1143;
      },
      uyHoU: "默认分组",
      ayaTt: "默认页面"
    };
    const v1070 = await BuryPointProjectModel.isExist();
    let v1071 = v1070 ? v1069.oFIYw(parseInt, v1070[v1069.JMtUH(784326, 784326)].count, 10) : 0;
    if (v1071 === 0) {
      vRequire7.printInfo("初始化项目和通用卡片");
      let v1072 = await C12.createNewProject("基础项目", "pro", 0, "webfunny", "");
      let v1073 = {
        type: 2,
        parentId: v1072.id,
        projectId: v1072.projectId,
        name: v1069.uyHoU
      };
      let v1074 = await BuryPointProjectModel.create(v1073);
      let v1075 = {
        type: 3,
        parentId: v1074.id,
        projectId: v1072.projectId,
        name: v1069.ayaTt
      };
      let v1076 = await BuryPointProjectModel.create(v1075);
      C12.handleWeCardData(v1072.projectId, v1072.name, v1076.id, "webfunny");
    }
  }
  static async createNewProject(p1144, p1145, p1146, p1147, p1148) {
    const v1077 = {
      Fyczs: function (p1149, p1150) {
        return p1149 + p1150;
      },
      pJcpx: function (p1151, p1152) {
        return p1151 ^ p1152;
      }
    };
    let v1078 = {};
    v1078.name = v1077.Fyczs(v1077.Fyczs(vRequire3.capitalizeFirstLetter(p1145), "-"), p1144);
    v1078.sysType = p1146;
    v1078.type = 1;
    v1078.parentId = -1;
    v1078.delStatus = v1077.pJcpx(294065, 294065);
    v1078.createBy = p1147;
    v1078.companyId = p1148;
    v1078.env = p1145;
    const v1079 = new Date();
    const v1080 = v1079.Format("yyyyMMdd");
    const v1081 = v1079.Format("hhmmssS");
    v1078.projectId = v1077.Fyczs("event_" + v1080 + "_" + v1081 + "_", p1145);
    let v1082 = await C11.judgeProjectCount();
    if (v1082 === v1077.pJcpx(590928, 590929)) {
      ctx.response.status = v1077.pJcpx(697552, 697678);
      ctx.body = vRequire9.ERROR_CARD_BALANCE_414("项目余额不足");
      return;
    }
    let v1083 = await BuryPointProjectModel.create(v1078);
    if (v1083) {
      await C12.initWeFieldAndPointData(v1078.projectId, p1147);
      let v1084 = v1078.projectId + "_BuryPointCardStatistics";
      await CommonModel.createStatisticsTable(v1084).catch(p1153 => {
        vRequire7.error(p1153);
      });
    }
    return v1083;
  }
  static async ["handleWeFieldData"](p1154, p1155) {
    const v1085 = {
      LtdMI: function (p1156, p1157) {
        return p1156 ^ p1157;
      }
    };
    for (let v1086 = v1085.LtdMI(746430, 746430); v1086 < vRequire27.length; v1086++) {
      let v1087 = vRequire27[v1086];
      let {
        fieldName: _0x4c624e,
        fieldAlias: _0x19e552,
        fieldType: _0x33e22e,
        fieldLength: _0x5dc767,
        groupByFlag: _0x43af0b,
        fieldDesc: _0x589d96,
        weType: _0x516f18
      } = v1087;
      const v1088 = await BuryPointFieldModel.existSameField(p1154, _0x4c624e);
      if (!v1088 || v1088 && v1088.length === 0) {
        v1087.projectId = p1154;
        v1087.createBy = p1155;
        let v1089 = await BuryPointFieldModel.create(v1087);
      }
    }
  }
  static async handleWePointData(p1158, p1159, p1160 = "") {
    const v1090 = {
      tmkRk: function (p1161, p1162) {
        return p1161 + p1162;
      },
      BFTYo: function (p1163, p1164) {
        return p1163 ^ p1164;
      },
      kCMXB: function (p1165, p1166) {
        return p1165 < p1166;
      },
      DNbSi: function (p1167, p1168, p1169) {
        return p1167(p1168, p1169);
      },
      lGVVX: function (p1170, p1171) {
        return p1170 === p1171;
      },
      mAgrU: function (p1172, p1173, p1174) {
        return p1172(p1173, p1174);
      }
    };
    let v1091 = [];
    for (let v1092 = v1090.BFTYo(509703, 509703); v1092 < vRequire28.length; v1092++) {
      let v1093 = vRequire28[v1092];
      let {
        fieldList: _0x2990a3,
        replacePointIdKey: _0x2f6b26
      } = v1093;
      let v1094 = "";
      for (let v1095 = 0; v1090.kCMXB(v1095, _0x2990a3.length); v1095++) {
        let v1096 = _0x2990a3[v1095];
        let {
          fieldName: _0x1d06ff,
          fieldAlias: _0x470dd7,
          fieldType: _0x4d691d,
          fieldLength: _0x46cbeb
        } = v1096;
        const v1097 = await BuryPointFieldModel.existSameField(p1158, _0x1d06ff);
        if (!v1097 || v1097 && v1097.length === 0) {
          v1096.projectId = p1158;
          v1096.createBy = p1159;
          let v1098 = await BuryPointFieldModel.create(v1096);
          v1094 = v1090.tmkRk(v1094 + v1098.id, ",");
        } else {
          v1094 = v1094 + v1097[0].id + ",";
        }
      }
      v1094 = v1094.substring(0, v1094.lastIndexOf(","));
      let v1099 = await BuryPointWarehouseModel.getReplacePointIdKey(p1158, _0x2f6b26);
      if (v1099 && v1099.length > 0) {
        v1091.push(v1099[0].pointId);
      } else {
        let v1100 = await BuryPointWarehouseModel.getMaxPointId();
        if (v1100 && v1100.length > v1090.BFTYo(447745, 447745)) {
          v1093.pointId = v1090.DNbSi(parseInt, v1100[0].maxId, 10) + 1;
        } else {
          v1093.pointId = v1090.BFTYo(519783, 519782);
        }
        v1091.push(v1093.pointId);
        v1093.fields = v1094;
        v1093.createBy = p1159;
        v1093.projectId = p1158;
        await BuryPointWarehouseModel.create(v1093);
      }
    }
    for (let v1101 = 0; v1101 < v1091.length; v1101++) {
      C6.createTableByDay(p1158, v1091[v1101], 0).catch(p1175 => {
        vRequire7.printError(v1090.tmkRk("执行{" + p1158 + "_" + v1091[v1101], "}创建表报错："), p1175);
      });
    }
    try {
      let v1102 = 7;
      if (v1090.lGVVX(accountInfo.isCloud, true)) {
        const v1103 = await vRequire3.postJson(LOCAL_SERVER + "/wfCenter/getProductInfoByCompanyId", {
          companyId: p1160
        }).catch(p1176 => {
          console.error("/wfCenter/getProductInfoByCompanyId error", p1176);
        });
        if (v1103) {
          const v1104 = v1103.data;
          v1102 = saveDays > v1104.saveDays ? v1104.saveDays : saveDays;
        }
      } else {
        v1102 = global.eventInfo.purchaseCodeType === 0 || global.eventInfo.purchaseCodeType === 81 ? 7 : accountInfo.saveDays;
      }
      v1090.mAgrU(setTimeout, () => {
        BuryPointProjectModel.createTTLForCreatedAt(p1158, v1091, v1102);
      }, 10000);
    } catch (_0x69d267) {
      console.log(_0x69d267);
    }
  }
  static async handleWeCardData(p1177, p1178, p1179, p1180) {
    const v1105 = {
      BxjRh: function (p1181, p1182) {
        return p1181 === p1182;
      },
      JIClV: "BrowsingHistoryPointId",
      XNzux: function (p1183, p1184) {
        return p1183 < p1184;
      },
      GqfjG: "yyyyMMddhhmmss",
      sJznx: function (p1185, p1186) {
        return p1185 === p1186;
      },
      CqpOZ: "当日访问量",
      SVsTn: "新用户趋势",
      GjSxH: function (p1187, p1188) {
        return p1187 === p1188;
      },
      BELDl: function (p1189, p1190) {
        return p1189 === p1190;
      },
      zYeLN: function (p1191, p1192) {
        return p1191 === p1192;
      },
      dGzqC: "关键省份展示",
      baKfp: "页面访问量趋势图",
      OgAWa: "页面平均停留时间(秒)",
      PeVZk: function (p1193, p1194) {
        return p1193 + p1194;
      }
    };
    let v1106 = await BuryPointWarehouseModel.getWePointIdsByProjectId(p1177);
    let v1107;
    let v1108;
    let v1109;
    let v1110;
    let v1111;
    let v1112 = [];
    v1106.forEach(p1195 => {
      if (p1195.replacePointIdKey === "HeartBeatPointId") {
        v1107 = p1195.pointId;
      }
      if (p1195.replacePointIdKey === "PageViewPointId") {
        v1108 = p1195.pointId;
      }
      if (p1195.replacePointIdKey === "HeatMapClickPointId") {
        v1109 = p1195.pointId;
      }
      if (v1105.BxjRh(p1195.replacePointIdKey, "HeatMapStopPointId")) {
        v1110 = p1195.pointId;
      }
      if (p1195.replacePointIdKey === v1105.JIClV) {
        v1111 = p1195.pointId;
      }
      if (p1195.weType === 0) {
        v1112.push(p1195.pointId);
      }
    });
    for (let v1113 = 0; v1105.XNzux(v1113, vRequire29.length); v1113++) {
      let v1114 = vRequire29[v1113];
      v1114.createBy = p1180;
      v1114.pageId = p1179;
      let v1115 = JSON.parse(v1114.calcRule);
      let v1116 = [];
      for (let v1117 = 0; v1105.XNzux(v1117, v1115.length); v1117++) {
        let v1118 = v1115[v1117];
        let v1119 = v1118.calcName;
        v1118.calcNameKey = slugify(v1119).replace(new RegExp("-", "g"), "") + new Date().Format(v1105.GqfjG);
        if (v1105.sJznx(v1114.name, v1105.CqpOZ) || v1105.sJznx(v1114.name, "当日访问人数") || v1114.name === "当日新用户" || v1114.name === v1105.SVsTn || v1105.GjSxH(v1114.name, "用户地理位置(世界地图)") || v1114.name === "用户浏览数据" || v1105.BELDl(v1114.name, "页面访问Top10") || v1114.name === "网站来源占比情况" || v1105.zYeLN(v1114.name, v1105.dGzqC) || v1114.name === v1105.baKfp) {
          v1118.prePoint.pointId = v1111;
        }
        if (v1114.name === "当日平均停留时长(秒)" || v1114.name === v1105.OgAWa) {
          v1118.prePoint.pointId = v1107;
          v1118.endPoint.pointId = v1107;
        }
        v1116.push(v1118);
      }
      v1114.calcRule = JSON.stringify(v1116);
      v1114.projectId = p1177;
      BuryPointCardModel.create(v1114);
    }
    let v1120 = [...new Set(v1112)];
    C6.createNewSdk(p1177, v1105.PeVZk(p1178, new Date().Format("yyyyMMddhhmmss")), v1120, p1180);
  }
  static async ["initWeFieldAndPointData"](p1196, p1197, p1198 = "") {
    await C12.handleWeFieldData(p1196, p1197);
    await C12.handleWePointData(p1196, p1197, p1198);
  }
  static async handleOldFieldData(p1199, p1200) {
    const v1121 = {
      RBQmW: function (p1201, p1202) {
        return p1201 ^ p1202;
      }
    };
    let v1122 = await BuryPointFieldModel.getOldList();
    for (let v1123 = 0; v1123 < v1122.length; v1123++) {
      let {
        fieldName: _0x59af73,
        fieldAlias: _0x488105,
        fieldType: _0x1901b9,
        fieldLength: _0x4e9eb2,
        groupByFlag: _0x5769d2,
        fieldDesc: _0x31df81,
        weType: _0x137458,
        createBy: _0x57f52e
      } = v1122[v1123];
      const v1124 = await BuryPointFieldModel.existSameField(p1199, _0x59af73);
      if (v1124 && v1124.length > v1121.RBQmW(553010, 553010)) {} else {
        let v1125 = {
          weType: _0x137458,
          projectId: p1199,
          fieldName: _0x59af73,
          fieldAlias: _0x488105,
          fieldType: _0x1901b9,
          fieldLength: _0x4e9eb2,
          groupByFlag: _0x5769d2,
          fieldDesc: _0x31df81,
          createBy: _0x57f52e ? _0x57f52e : p1200
        };
        await BuryPointFieldModel.create(v1125);
      }
    }
  }
  static async handleData(p1203, p1204) {
    const v1126 = {
      XeWJK: function (p1205, p1206) {
        return p1205 < p1206;
      }
    };
    const {
      id: _0x5e150e,
      projectId: _0x39a88a,
      name: _0x4971f6,
      createBy: _0x455ce0
    } = p1203;
    let v1127 = [];
    let v1128 = new Date().Format("yyyyMMddhhmmss");
    let v1129 = await BuryPointProjectModel.getListByParentId(_0x5e150e);
    for (let v1130 = 0; v1126.XeWJK(v1130, v1129.length); v1130++) {
      let v1131 = await BuryPointProjectModel.getListByParentId(v1129[v1130].id);
      for (let v1132 = 0; v1126.XeWJK(v1132, v1131.length); v1132++) {
        let v1133 = v1131[v1132].id;
        let v1134 = await BuryPointCardModel.getByPageId(v1133);
        for (let v1135 = 0; v1135 < v1134.length; v1135++) {
          let v1136 = v1134[v1135].id;
          let v1137 = v1134[v1135].type;
          let v1138 = JSON.parse(v1134[v1135].calcRule);
          let v1139 = [];
          let v1140 = [];
          for (let v1141 = 0; v1141 < v1138.length; v1141++) {
            let v1142 = v1138[v1141];
            let v1143 = v1142.prePoint;
            let v1144 = v1143.pointId;
            let v1145 = await C24.copyPoint(_0x39a88a, v1144, _0x455ce0);
            v1127.push(v1145);
            v1142.prePoint.pointId = v1145;
            let v1146 = v1142.endPoint;
            if (v1146) {
              let v1147 = await C24.copyPoint(_0x39a88a, v1146.pointId, _0x455ce0);
              v1127.push(v1147);
              v1142.endPoint.pointId = v1147;
            }
            v1139.push(v1142);
            if (v1137 === 5) {
              v1140.push(v1145);
            }
          }
          v1134[v1135].calcRule = JSON.stringify(v1139);
          BuryPointCardModel.update(v1136, v1134[v1135]);
        }
      }
    }
    let v1148 = [...new Set(v1127)];
    C6.createNewSdk(_0x39a88a, _0x4971f6 + v1128, v1148, p1204);
  }
  static async initWeTemplatePointAndField(p1207, p1208, p1209) {
    const v1149 = {
      VeVqZ: function (p1210, p1211) {
        return p1210 < p1211;
      },
      wvftN: function (p1212, p1213) {
        return p1212 + p1213;
      },
      oJOYv: function (p1214, p1215) {
        return p1214 + p1215;
      },
      AGvze: function (p1216, p1217) {
        return p1216 > p1217;
      },
      kOEnv: function (p1218, p1219, p1220) {
        return p1218(p1219, p1220);
      },
      fqfgN: function (p1221, p1222) {
        return p1221 ^ p1222;
      }
    };
    let v1150 = JSON.parse(p1208);
    let v1151 = [];
    for (let v1152 = 0; v1152 < v1150.length; v1152++) {
      let v1153 = {};
      let v1154 = v1150[v1152];
      let {
        pointId: _0x22e667,
        fieldList: _0x4e8364
      } = v1154;
      v1153.oldPointId = _0x22e667;
      let v1155 = "";
      let v1156;
      for (let v1157 = 0; v1149.VeVqZ(v1157, _0x4e8364.length); v1157++) {
        let v1158 = _0x4e8364[v1157];
        let {
          fieldName: _0x2c1dd0,
          fieldAlias: _0x14ff7a,
          fieldType: _0x1b53d4,
          fieldLength: _0x2e7d81
        } = v1158;
        const v1159 = await BuryPointFieldModel.existSameField(p1207, _0x2c1dd0);
        if (!v1159 || v1159 && v1159.length === 0) {
          v1158.projectId = p1207;
          v1158.createBy = p1209;
          let v1160 = await BuryPointFieldModel.create(v1158);
          v1155 = v1149.wvftN(v1155 + v1160.id, ",");
        } else {
          v1155 = v1149.oJOYv(v1149.oJOYv(v1155, v1159[0].id), ",");
        }
      }
      v1155 = v1155.substring(0, v1155.lastIndexOf(","));
      let v1161 = await BuryPointWarehouseModel.getByProjectIdAndFieldIds(p1207, v1155);
      if (v1161 && v1161.length > 0) {
        v1156 = v1161[0].pointId;
      } else {
        let v1162 = await BuryPointWarehouseModel.getMaxPointId();
        if (v1162 && v1149.AGvze(v1162.length, 0)) {
          v1154.pointId = v1149.kOEnv(parseInt, v1162[v1149.fqfgN(699925, 699925)].maxId, 10) + 1;
        } else {
          v1154.pointId = 1;
        }
        v1154.fields = v1155;
        v1154.createBy = p1209;
        v1154.projectId = p1207;
        let v1163 = await BuryPointWarehouseModel.create(v1154);
        v1156 = v1163.pointId;
      }
      v1153.newPointId = v1156;
      v1151.push(v1153);
    }
    return v1151;
  }
  static async getNewPointId(p1223, p1224) {
    const v1164 = {
      ULZYo: function (p1225, p1226) {
        return p1225 < p1226;
      }
    };
    for (let v1165 = 0; v1164.ULZYo(v1165, p1224.length); v1165++) {
      if (p1223 === p1224[v1165].oldPointId) {
        return p1224[v1165].newPointId;
      }
    }
  }
}
class C13 {
  static async create(p1227) {
    const v1166 = {
      zTYPH: function (p1228, p1229) {
        return p1228 ^ p1229;
      }
    };
    let v1167 = p1227.request.body;
    if (v1167.title && v1167.author && v1167.content && v1167.category) {
      let v1168 = await ConfigModel.createConfig(v1167);
      let v1169 = await ConfigModel.getConfigDetail(v1168.id);
      p1227.response.status = 200;
      p1227.body = vRequire9.SUCCESS_200("创建信息成功", v1169);
    } else {
      p1227.response.status = v1166.zTYPH(212672, 212828);
      p1227.body = vRequire9.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async refreshTokenList() {
    const v1170 = await ConfigModel.getAllConfigList();
    const v1171 = {};
    v1170.forEach(p1230 => {
      v1171[p1230.configName] = p1230.configValue;
    });
    global.eventInfo.tokenListInMemory = v1171;
  }
  static async getConfig(p1231) {
    return ConfigModel.getConfigByConfigName(p1231);
  }
  static async updateConfig(p1232, p1233) {
    const v1172 = {
      fBQMr: function (p1234, p1235) {
        return p1234 ^ p1235;
      }
    };
    vRequire7.printInfo("event-master-uuid：" + p1233.configValue);
    console.log("event-master-uuid：" + p1233.configValue);
    const v1173 = await ConfigModel.getConfigByName(p1232);
    if (v1173 && v1173[v1172.fBQMr(839090, 839090)]) {
      const {
        dataId: _0xb93b2e
      } = v1173[0];
      await ConfigModel.updateConfig(_0xb93b2e, p1233);
    } else {
      await ConfigModel.createConfig({
        configName: p1232,
        ...p1233
      });
    }
  }
  static async getConfigTest(p1236) {
    const v1174 = await ConfigModel.getAllConfigList();
    p1236.response.status = 200;
    p1236.body = vRequire9.SUCCESS_200("创建信息成功", v1174);
  }
  static async ["storeTokenToMemory"](p1237) {
    const v1175 = {
      zWpiY: "token解析失败：",
      kKgAu: function (p1238, p1239, p1240, p1241) {
        return p1238(p1239, p1240, p1241);
      }
    };
    const v1176 = JSON.parse(p1237.request.body);
    const {
      accessToken: _0x5a683a
    } = v1176;
    v1175.kKgAu(v30, _0x5a683a, vRequire13.sign, async (p1242, p1243) => {
      if (p1242) {
        vRequire7.printError(v1175.zWpiY, p1242);
        return;
      }
      const {
        emailName: _0x321204
      } = p1243;
      const v1177 = global.monitorInfo.tokenListInMemory || {};
      v1177[_0x321204] = _0x5a683a;
      const v1178 = await ConfigModel.getConfigByName(_0x321204);
      if (v1178) {
        await ConfigModel.updateConfig(_0x321204, {
          configValue: _0x5a683a
        }).catch(p1244 => {
          vRequire7.error(p1237, p1244);
        });
      } else {
        await ConfigModel.createConfig({
          configName: _0x321204,
          configValue: _0x5a683a
        });
      }
    });
    p1237.response.status = 200;
    p1237.body = vRequire9.SUCCESS_200("Token存储完成！", 0);
  }
}
class C14 {
  static async ["getPageList"](p1250) {
    const v1180 = {
      wMSFl: function (p1251, p1252) {
        return p1251 + p1252;
      },
      EmZPr: " 00:00:00",
      sgfbu: "id,",
      XDzkH: function (p1253, p1254) {
        return p1253 + p1254;
      },
      XUITG: " select ",
      mtbim: " and happenTime >='",
      WGJwT: function (p1255, p1256) {
        return p1255 ^ p1256;
      },
      hgSge: function (p1257, p1258) {
        return p1257 ^ p1258;
      },
      wJMom: function (p1259, p1260) {
        return p1259 + p1260;
      },
      zIjfi: function (p1261, p1262) {
        return p1261 ^ p1262;
      }
    };
    let v1181 = p1250.request.body;
    const v1182 = JSON.parse(v1181);
    const {
      date: _0x314182,
      projectId: _0x13828e,
      pointId: _0x2f3088,
      queryStartDate: _0xb4752e,
      queryEndDate: _0xc9fd64,
      page: _0x5d27f4,
      pageSize: _0x4dd6d0
    } = v1182;
    let v1183;
    let v1184;
    let v1185;
    if (!_0x13828e) {
      p1250.response.status = 412;
      p1250.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.TEST_PROJECT_FAIL));
      return;
    }
    if (!_0x2f3088) {
      p1250.response.status = 412;
      p1250.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.TEST_POINT_ID_FAIL));
      return;
    }
    v1183 = v1180.wMSFl(_0x314182, v1180.EmZPr);
    v1184 = _0x314182 + " 23:59:59";
    v1185 = new Date(_0x314182).Format("yyyyMMdd");
    let v1186 = _0x13828e + "_" + _0x2f3088 + "_";
    let v1187 = v1180.wMSFl(v1180.wMSFl(_0x13828e, "_"), _0x2f3088);
    let v1188 = v1180.wMSFl(" select count(*) as count from " + v1187, " where 1=1 ");
    let v1189 = v1180.sgfbu;
    try {
      let v1190 = await BuryPointWarehouseModel.detailByPointId(_0x2f3088);
      const {
        pointName: _0x199123,
        fields: _0x4e519c
      } = v1190;
      let v1191 = await BuryPointFieldModel.getListByFieldIds(_0x4e519c);
      for (let v1192 = 0; v1192 < v1191.length; v1192++) {
        v1189 = v1189 + v1191[v1192].fieldName + ",";
      }
      v1189 = v1189 + "DATE_FORMAT(happenTime,'%Y-%m-%d %H:%i:%s') AS happenTime ";
      let v1193 = v1180.XDzkH(v1180.XDzkH(v1180.XUITG, v1189), " from ") + v1187 + " where 1=1 ";
      let v1194 = "";
      if (v1183) {
        v1194 = v1180.XDzkH(v1194 + v1180.mtbim + v1183, "'");
      }
      if (v1184) {
        v1194 = v1180.wMSFl(v1180.wMSFl(v1194, " and happenTime <='") + v1184, "'");
      }
      v1188 = v1188 + v1194;
      v1193 = v1193 + v1194;
      const v1195 = await BuryPointCardModel.statisticData(v1188);
      let v1196 = v1195 ? isNaN(v1195[v1180.WGJwT(701154, 701154)].count) ? v1180.WGJwT(156050, 156050) : v1195[v1180.hgSge(825999, 825999)].count : 0;
      v1193 = v1180.XDzkH(v1180.wJMom(v1193 + " order by happenTime desc limit ", (_0x5d27f4 - 1) * _0x4dd6d0), ",") + _0x4dd6d0;
      const v1197 = await BuryPointCardModel.statisticData(v1193);
      const v1198 = [];
      for (let v1199 = 0; v1199 < v1197.length; v1199++) {
        const v1200 = {
          pointId: _0x2f3088,
          pointName: _0x199123,
          eventJson: v1197[v1199],
          happenTime: v1197[v1199].happenTime
        };
        v1198.push(v1200);
      }
      p1250.response.status = 200;
      p1250.body = vRequire9.SUCCESS_200("success", {
        list: v1198,
        totalCount: v1196
      });
    } catch (_0x2fecaf) {
      p1250.response.status = v1180.zIjfi(409949, 410005);
      p1250.body = vRequire9.SUCCESS_200("success", {
        list: [],
        totalCount: "0"
      });
    }
  }
  static async ["failList"](p1263) {
    const v1201 = {
      ukxFo: "yyyy-MM-dd 23:59:59",
      ssyoH: function (p1264, p1265) {
        return p1264 === p1265;
      },
      dllEA: "all",
      MZWNM: function (p1266, p1267) {
        return p1266 ^ p1267;
      },
      lmazK: "请求参数不合法"
    };
    const {
      projectId: _0x116545,
      pointId: _0x2ca29f,
      currentPage = 1,
      currentPageSize = 10,
      startTime = new Date().Format("yyyy-MM-dd 00:00:00"),
      endTime = new Date().Format(v1201.ukxFo),
      chooseFailType = -1
    } = JSON.parse(p1263.request.body);
    try {
      const v1202 = await BuryPointFailLogModel.getList({
        projectId: _0x116545,
        pointId: v1201.ssyoH(_0x2ca29f, v1201.dllEA) ? "" : _0x2ca29f,
        currentPage: currentPage,
        currentPageSize: currentPageSize,
        startTime: startTime,
        endTime: endTime,
        chooseFailType: chooseFailType
      });
      const {
        list: _0x40eac1,
        total: _0x920526
      } = v1202;
      p1263.response.status = 200;
      p1263.body = vRequire9.SUCCESS_200("success", {
        list: _0x40eac1,
        total: _0x920526
      });
    } catch (_0x5811de) {
      console.log(_0x5811de);
      p1263.response.status = v1201.MZWNM(382651, 382758);
      p1263.body = vRequire9.ERROR_413(v1201.lmazK);
    }
  }
  static async ["failOverView"](p1268) {
    const v1203 = {
      VxMkf: function (p1269, p1270) {
        return p1269 + p1270;
      },
      PqyVg: function (p1271, p1272) {
        return p1271 - p1272;
      },
      AWqvg: function (p1273, p1274) {
        return p1273 ^ p1274;
      },
      yuNbC: function (p1275, p1276) {
        return p1275 === p1276;
      },
      CKAWo: "all"
    };
    const {
      projectId: _0x315436,
      pointId: _0x401831,
      dayCount: _0x417eda,
      chooseFailType = -1
    } = JSON.parse(p1268.request.body);
    const v1204 = v1203.VxMkf(vRequire3.addDays(v1203.PqyVg(v1203.AWqvg(366008, 366008), _0x417eda)), " 00:00:00");
    const v1205 = v1203.VxMkf(vRequire3.addDays(0), " 23:59:59");
    try {
      const v1206 = await BuryPointFailLogModel.getFailOverView({
        projectId: _0x315436,
        pointId: v1203.yuNbC(_0x401831, v1203.CKAWo) ? "" : _0x401831,
        startTime: v1204,
        endTime: v1205,
        chooseFailType: chooseFailType
      });
      p1268.response.status = 200;
      p1268.body = vRequire9.SUCCESS_200("success", v1206);
    } catch (_0x511ef4) {
      console.log(_0x511ef4);
      p1268.response.status = 413;
      p1268.body = vRequire9.ERROR_413("请求参数不合法");
    }
  }
  static async ["search"](p1277) {
    const v1207 = {
      iRTUQ: function (p1278, p1279) {
        return p1278 ^ p1279;
      },
      LZirj: function (p1280, p1281) {
        return p1280 === p1281;
      },
      WcNuk: "varchar",
      VPFJF: "descend",
      nwGxZ: function (p1282, p1283) {
        return p1282 + p1283;
      },
      rBHXf: function (p1284, p1285) {
        return p1284 + p1285;
      },
      MqmRB: function (p1286, p1287) {
        return p1286 - p1287;
      },
      CtIEL: function (p1288, p1289) {
        return p1288 ^ p1289;
      },
      Hejuc: function (p1290, p1291) {
        return p1290 + p1291;
      },
      tRyKR: "UV desc",
      xxCZK: "AVG",
      iUUlc: "MIN",
      KzctK: "desc",
      PNvfN: "asc",
      WStZU: "MAX",
      EFAus: function (p1292, p1293) {
        return p1292 ^ p1293;
      },
      GoKxA: function (p1294, p1295) {
        return p1294 ^ p1295;
      },
      onfTS: function (p1296, p1297) {
        return p1296 ^ p1297;
      }
    };
    let v1208 = p1277.request.body;
    const v1209 = JSON.parse(v1208);
    const {
      userId = "",
      projectId: _0x3b891b,
      selectedPointId: _0x436b1c,
      filterList: _0x51615a,
      page = 1,
      pageSize = v1207.iRTUQ(558338, 558344),
      date: _0x39feb1,
      order = v1207.VPFJF,
      dataType = "list",
      calcInfo: _0x2afe3f
    } = v1209;
    const {
      startTime: _0x4db384,
      endTime: _0x26c74d
    } = _0x39feb1;
    const v1210 = v1207.nwGxZ(v1207.rBHXf(_0x3b891b, "_"), _0x436b1c);
    const v1211 = v1207.MqmRB(page, 1) * pageSize;
    if (!_0x436b1c) {
      p1277.response.status = v1207.iRTUQ(859440, 859308);
      p1277.body = vRequire9.ERROR_412("请选择点位");
      return;
    }
    for (let v1212 = v1207.iRTUQ(390219, 390219); v1212 < _0x51615a.length; v1212++) {
      const {
        fieldName: _0x358e15
      } = _0x51615a[v1212];
      await BuryPointFieldModel.getFieldTypeByKey(_0x3b891b, _0x358e15).then(p1298 => {
        if (p1298 && p1298.length) {
          _0x51615a[v1212].type = p1298[v1207.iRTUQ(146630, 146630)].fieldType;
        }
      });
    }
    let v1213 = "";
    let v1214 = "and";
    if (_0x51615a && _0x51615a.length > v1207.CtIEL(310090, 310090)) {
      _0x51615a.forEach(p1299 => {
        const {
          fieldName: _0x209301,
          rule: _0x1f7bf6,
          value: _0x438c72,
          type = "",
          andOr = "a"
        } = p1299;
        let v_0x438c72 = _0x438c72;
        if (v1207.LZirj(type.toLowerCase(), v1207.WcNuk)) {
          v_0x438c72 = _0x438c72;
        }
        if (andOr) {
          v1214 = vRequire3.convertAndOr(andOr);
        }
        if (_0x209301) {
          v1213 += " " + vRequire3.convertOperationSql(_0x209301, _0x1f7bf6, v_0x438c72) + v1214;
        }
      });
      v1213 = v1207.Hejuc(" and (", v1213.substring(0, v1213.lastIndexOf(v1214))) + ")";
    }
    let v1215 = {};
    if (v1207.LZirj(dataType, "calc")) {
      const v1216 = {
        "0": {
          calcFunc: p1300 => "count(" + p1300 + ") as PV",
          alias: "PV",
          orderBy: "PV desc",
          isGroupBy: false
        },
        "1": {
          calcFunc: p1301 => "uniq(" + p1301 + ") as UV",
          alias: "UV",
          orderBy: v1207.tRyKR,
          isGroupBy: false
        },
        "2": {
          calcFunc: p1302 => "sum(" + p1302 + ") as SUM",
          alias: "SUM",
          isGroupBy: false
        },
        "3": {
          calcFunc: p1303 => "avg(" + p1303 + ") as AVG",
          alias: v1207.xxCZK,
          isGroupBy: false
        },
        "4": {
          calcFunc: p1304 => "count(" + p1304 + ") as PV",
          alias: "PV",
          orderBy: "PV desc",
          isGroupBy: true
        },
        "5": {
          calcFunc: () => "uniq(weCustomerKey) as UV",
          alias: "UV",
          orderBy: "UV desc",
          isGroupBy: true
        },
        "6": {
          calcFunc: p1305 => "max(" + p1305 + ") as MAX",
          alias: "MAX",
          isGroupBy: false
        },
        "7": {
          calcFunc: p1306 => "min(" + p1306 + ") as MIN",
          alias: v1207.iUUlc,
          isGroupBy: false
        }
      };
      const v1217 = v1216[_0x2afe3f.calcField.isRepeat] || v1216["0"];
      const {
        calcFunc: _0x4908ed,
        alias: _0x48b750,
        orderBy: _0xeaf367,
        isGroupBy: _0x11de34
      } = v1217;
      const v1218 = _0x2afe3f.calcField.fieldName;
      const v1219 = "FROM " + v1210 + " WHERE 1=1 " + v1213 + " AND happenTime>='" + _0x4db384 + "' AND happenTime<='" + _0x26c74d + "'";
      let v1220;
      if (_0x11de34) {
        v1220 = "SELECT " + v1218 + ", " + _0x4908ed(v1218) + " " + v1219 + " GROUP BY " + v1218 + " " + (_0xeaf367 ? "ORDER BY " + _0xeaf367 : "");
      } else {
        v1220 = "SELECT " + _0x4908ed(v1218) + " " + v1219;
      }
      const v1221 = await BuryPointCardModel.statisticData(v1220);
      if (["2", "3"].includes(_0x2afe3f.calcField.isRepeat)) {
        v1215 = {
          total: 1,
          dataList: [{
            [v1218]: v1218,
            [_0x48b750]: v1221[0][_0x48b750]
          }],
          fieldNameList: [{
            fieldName: "stayTime",
            fieldAlias: "字段"
          }, {
            fieldName: _0x48b750,
            fieldAlias: _0x48b750
          }]
        };
      } else {
        const v1222 = v1221.slice(v1211, v1211 + pageSize);
        const v1223 = await BuryPointFieldModel.getFieldListByKey(_0x3b891b, "'" + v1218 + "'");
        v1215 = {
          total: v1221.length,
          dataList: v1222 || [],
          fieldNameList: [...v1223, {
            fieldName: _0x48b750,
            fieldAlias: _0x48b750
          }]
        };
      }
    } else if (dataType === "list") {
      const v1224 = order === "descend" ? v1207.KzctK : v1207.PNvfN;
      const v1225 = "FROM " + v1210 + " WHERE 1=1 " + v1213 + " AND happenTime>='" + _0x4db384 + "' AND happenTime<='" + _0x26c74d + "'";
      let v1226 = "SELECT * " + v1225 + " ORDER BY happenTime " + v1224 + ",id asc LIMIT " + v1211 + "," + pageSize;
      let v1227 = "SELECT COUNT(id) AS count " + v1225;
      let v1228 = "SELECT uniq(weUserId) AS count " + v1225;
      let v1229 = "SELECT uniq(weCustomerKey) AS count " + v1225;
      if (_0x2afe3f && _0x2afe3f.calcField) {
        const {
          fieldName: _0x4ffbbd,
          isRepeat: _0x5d77d9
        } = _0x2afe3f.calcField;
        switch (_0x5d77d9) {
          case "0":
          case "2":
          case "3":
          case "4":
            v1227 = "SELECT COUNT(" + _0x4ffbbd + ") AS count " + v1225;
            break;
          case "6":
          case "7":
            const v1230 = v1207.LZirj(_0x5d77d9, "6") ? v1207.WStZU : "MIN";
            const v1231 = "SELECT " + v1230 + "(" + _0x4ffbbd + ") " + v1225;
            v1226 = "SELECT * " + v1225 + " AND " + _0x4ffbbd + "=(" + v1231 + ") \n                                ORDER BY happenTime " + v1224;
            v1227 = "SELECT count(1) AS count " + v1225 + " AND " + _0x4ffbbd + "=(" + v1231 + ") \n                                ";
            v1228 = "SELECT uniq(weUserId) AS count " + v1225 + " AND " + _0x4ffbbd + "=(" + v1231 + ")";
            v1229 = "SELECT uniq(weCustomerKey) AS count " + v1225 + " AND " + _0x4ffbbd + "=(" + v1231 + ")";
            break;
          case "1":
          case "5":
            v1227 = "SELECT uniq(" + _0x4ffbbd + ") AS count " + v1225;
            v1226 = "SELECT * " + v1225 + " \n                                ORDER BY happenTime " + v1224 + " \n                                LIMIT 1 BY " + _0x4ffbbd + " \n                                LIMIT " + v1211 + "," + pageSize;
            break;
        }
      }
      const [v1232, v1233, v1234, v1235] = await Promise.all([BuryPointCardModel.statisticData(v1226), BuryPointCardModel.statisticData(v1227), BuryPointCardModel.statisticData(v1228), BuryPointCardModel.statisticData(v1229)]);
      let v1236 = "''";
      if (v1232?.length) {
        const v1237 = v1232[0];
        v1236 += Object.keys(v1237).filter(p1307 => !p1307.includes("weFirstStepDay_") && p1307 !== "id").map(p1308 => ",'" + p1308 + "'").join("");
      }
      const v1238 = await BuryPointFieldModel.getFieldListByKey(_0x3b891b, v1236);
      v1215 = {
        total: v1233?.[0]?.["count"] * 1 || 0,
        userIdTotal: v1234?.[0]?.count * 1 || v1207.EFAus(350863, 350863),
        customerKeyTotal: v1235?.[v1207.GoKxA(308063, 308063)]?.["count"] * 1 || 0,
        dataList: v1232 || [],
        fieldNameList: v1238 || []
      };
    }
    p1277.response.status = v1207.onfTS(514943, 514999);
    p1277.body = vRequire9.SUCCESS_200("success", v1215);
  }
  static async ["searchAllRecord"](p1309) {
    const v1239 = {
      PCYlU: " where 1=1 ",
      nFlwO: function (p1310, p1311) {
        return p1310 + p1311;
      },
      HLYRd: " where weUserId = '",
      gbxuE: function (p1312, p1313) {
        return p1312 ^ p1313;
      }
    };
    const v1240 = JSON.parse(p1309.request.body);
    const {
      userId: _0x5f45aa,
      customerKey: _0x5f3f94,
      searchDate: _0x1db49f,
      projectId = ""
    } = v1240;
    const {
      startTime: _0x287138,
      endTime: _0x4fabbe
    } = _0x1db49f;
    const v1241 = await BuryPointWarehouseModel.getAllList(projectId);
    let v1242 = {};
    let v1243 = v1239.PCYlU;
    if (_0x5f45aa) {
      v1243 = v1239.nFlwO(v1239.HLYRd + _0x5f45aa, "'");
    } else if (_0x5f3f94) {
      v1243 = " where weCustomerKey = '" + _0x5f3f94 + "'";
    } else {
      v1243 = " where 1=1 ";
    }
    if (_0x1db49f) {
      v1243 = v1243 + (" and happenTime>='" + _0x287138 + "' and happenTime<='" + _0x4fabbe + "' ");
    }
    for (let v1244 = 0; v1244 < v1241.length; v1244++) {
      const {
        pointId: _0x2813cf,
        pointName: _0x357690,
        pointDesc: _0x51cac1
      } = v1241[v1244];
      const v1245 = projectId + "_" + _0x2813cf;
      let v1246 = v1239.nFlwO("select * from ", v1245) + v1243;
      const v1247 = await BuryPointCardModel.statisticData(v1246);
      v1242[_0x2813cf] = {
        name: _0x357690,
        pointDesc: _0x51cac1,
        list: v1247 || []
      };
    }
    p1309.response.status = v1239.gbxuE(626673, 626489);
    p1309.body = vRequire9.SUCCESS_200("success", v1242);
  }
  static async ["searchFieldName"](p1314) {
    const v1248 = {
      askPv: "success"
    };
    const v1249 = JSON.parse(p1314.request.body);
    const {
      projectId = "",
      fieldKeys: _0x1f98c0
    } = v1249;
    let v1250 = "''";
    _0x1f98c0.forEach(p1315 => {
      v1250 += ",'" + p1315 + "'";
    });
    const v1251 = await BuryPointFieldModel.getFieldListByKey(projectId, v1250);
    p1314.response.status = 200;
    p1314.body = vRequire9.SUCCESS_200(v1248.askPv, v1251);
  }
  static async exportData(p1316) {
    const v1252 = {
      unGHE: "descend",
      XJVcu: function (p1317, p1318) {
        return p1317 ^ p1318;
      },
      QgfRs: "请选择点位",
      ZUOZp: "buryPointTestSearchExport",
      awUBa: "请选择时间",
      IgQRZ: function (p1319, p1320) {
        return p1319 ^ p1320;
      },
      LRUsv: function (p1321, p1322) {
        return p1321 < p1322;
      },
      OzjWh: " and (",
      MzoEX: "PV desc",
      Qccfk: "UV desc",
      fxiiU: "MAX",
      WzWxh: "MIN",
      zwBXe: function (p1323, p1324) {
        return p1323 < p1324;
      },
      qfIkp: function (p1325, p1326) {
        return p1325 < p1326;
      },
      jrEBM: function (p1327, p1328) {
        return p1327 === p1328;
      },
      RqSqq: function (p1329, p1330) {
        return p1329 === p1330;
      },
      RRMeA: function (p1331, p1332) {
        return p1331 === p1332;
      },
      bRdbt: function (p1333, p1334) {
        return p1333 ^ p1334;
      },
      zRjSl: "weFirstStepDay_",
      uMKxg: function (p1335, p1336) {
        return p1335 ^ p1336;
      },
      XgZtf: function (p1337, p1338) {
        return p1337 < p1338;
      },
      SNAhM: function (p1339, p1340) {
        return p1339 ^ p1340;
      },
      nvVsY: "没有数据！",
      BvPyG: function (p1341, p1342) {
        return p1341 + p1342;
      },
      LtiXQ: ".xlsx",
      jRwrZ: "Content-disposition",
      CCxfS: "attachment; filename="
    };
    const v1253 = vRequire3.parseQs(p1316.request.url);
    const {
      projectId: _0x21486f,
      pointName: _0x5f3f69,
      selectedPointId: _0x5e5624,
      filterList = "[]",
      startNum = 0,
      endNum = 10,
      date: _0x4a11b6,
      dataType = "list",
      order = v1252.unGHE,
      calcInfo = "{}",
      code = v1252.XJVcu(752899, 752899)
    } = v1253;
    const v1254 = global.eventInfo.exportRandomNumber.buryPointTestSearchExport;
    if (!v1254 || v1254.code != code) {
      p1316.response.status = 412;
      p1316.body = vRequire9.ERROR_412("导出失败，参数不合法！");
      return;
    }
    if (!_0x5e5624) {
      p1316.response.status = 412;
      p1316.body = vRequire9.ERROR_412(v1252.QgfRs);
      return;
    }
    delete global.eventInfo.exportRandomNumber[v1252.ZUOZp];
    if (!_0x4a11b6) {
      p1316.response.status = 412;
      p1316.body = vRequire9.ERROR_412(v1252.awUBa);
      return;
    }
    const v1255 = _0x4a11b6.startTime;
    const v1256 = _0x4a11b6.endTime;
    const v1257 = _0x21486f + "_" + _0x5e5624;
    if (startNum > endNum) {
      p1316.response.status = v1252.IgQRZ(806130, 806254);
      p1316.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_PARAM_FAIL));
    }
    if (endNum > 10000) {
      endNum = 10000;
    }
    let v1258 = JSON.parse(filterList);
    for (let v1259 = 0; v1252.LRUsv(v1259, v1258.length); v1259++) {
      const {
        fieldName: _0x4fc7d2
      } = v1258[v1259];
      await BuryPointFieldModel.getFieldTypeByKey(_0x21486f, _0x4fc7d2).then(p1343 => {
        if (p1343 && p1343.length) {
          v1258[v1259].type = p1343[0].fieldType;
        }
      });
    }
    let v1260 = "";
    let v1261 = "and";
    if (v1258 && v1258.length > 0) {
      v1258.forEach(p1344 => {
        const {
          fieldName: _0x49867b,
          rule: _0x2495f8,
          value: _0x2d1662,
          type = "",
          andOr = "a"
        } = p1344;
        let v_0x2d1662 = _0x2d1662;
        if (type.toLowerCase() === "varchar") {
          v_0x2d1662 = _0x2d1662;
        }
        if (andOr) {
          v1261 = vRequire3.convertAndOr(andOr);
        }
        if (_0x49867b) {
          v1260 += " " + vRequire3.convertOperationSql(_0x49867b, _0x2495f8, v_0x2d1662) + v1261;
        }
      });
      v1260 = v1252.OzjWh + v1260.substr(0, v1260.lastIndexOf(v1261)) + ")";
    }
    let v1286;
    const v1263 = [];
    if (dataType === "calc") {
      let v1264 = "";
      let v1265 = "";
      let v1266 = [];
      const v1267 = {
        "0": {
          calcFunc: p1345 => "count(" + p1345 + ") as PV",
          alias: "PV",
          orderBy: v1252.MzoEX,
          isGroupBy: false
        },
        "1": {
          calcFunc: p1346 => "uniq(" + p1346 + ") as UV",
          alias: "UV",
          orderBy: "UV desc",
          isGroupBy: false
        },
        "2": {
          calcFunc: p1347 => "sum(" + p1347 + ") as SUM",
          alias: "SUM",
          isGroupBy: false
        },
        "3": {
          calcFunc: p1348 => "avg(" + p1348 + ") as AVG",
          alias: "AVG",
          isGroupBy: false
        },
        "4": {
          calcFunc: p1349 => "count(" + p1349 + ") as PV",
          alias: "PV",
          orderBy: v1252.MzoEX,
          isGroupBy: true
        },
        "5": {
          calcFunc: () => "uniq(weCustomerKey) as UV",
          alias: "UV",
          orderBy: v1252.Qccfk,
          isGroupBy: true
        },
        "6": {
          calcFunc: p1350 => "max(" + p1350 + ") as MAX",
          alias: v1252.fxiiU,
          isGroupBy: false
        },
        "7": {
          calcFunc: p1351 => "min(" + p1351 + ") as MIN",
          alias: v1252.WzWxh,
          isGroupBy: false
        }
      };
      if (!calcInfo) {
        p1316.response.status = 412;
        p1316.body = vRequire9.ERROR_412("导出异常！");
        return;
      }
      const v1268 = calcInfo.replace(new RegExp("([{,]\\s*)([a-zA-Z0-9_]+)(\\s*:)", "g"), "$1\"$2\"$3").replace(new RegExp("'", "g"), "\"");
      const v1269 = JSON.parse(v1268);
      const {
        fieldName: _0x31a881,
        isRepeat: _0x52f29e
      } = v1269.calcField;
      const v1270 = v1267[_0x52f29e] || v1267["0"];
      const {
        calcFunc: _0xdd5df9,
        alias: _0x20412a,
        orderBy: _0x195de4,
        isGroupBy: _0x2da745
      } = v1270;
      const v1271 = "FROM " + v1257 + " WHERE 1=1 " + v1260 + " AND happenTime>='" + v1255 + "' AND happenTime<='" + v1256 + "'";
      let v1272;
      if (_0x2da745) {
        v1272 = "SELECT " + _0x31a881 + ", " + _0xdd5df9(_0x31a881) + " " + v1271 + " GROUP BY " + _0x31a881 + " " + (_0x195de4 ? "ORDER BY " + _0x195de4 : "");
      } else {
        v1272 = "SELECT " + _0xdd5df9(_0x31a881) + " " + v1271;
      }
      v1286 = await BuryPointCardModel.statisticData(v1272);
      const v1273 = await BuryPointFieldModel.getFieldListByKey(_0x21486f, "'" + _0x31a881 + "'");
      const v1274 = [...v1273, v1286[0]];
      var v1291 = [];
      for (let v1276 = 0; v1252.zwBXe(v1276, v1274.length); v1276++) {
        v1291.push(v1274[v1276].fieldAlias ? v1274[v1276].fieldAlias : _0x20412a);
      }
      v1263.push(v1291);
      if (v1286) {
        for (let v1277 = 0; v1252.LRUsv(v1277, v1286.length); v1277++) {
          let v1278 = v1286[v1277];
          var v1295 = [];
          for (let v1280 = 0; v1252.qfIkp(v1280, v1274.length); v1280++) {
            v1295.push(v1278[v1274[v1280].fieldAlias ? v1274[v1280].fieldAlias : _0x20412a]);
          }
          v1263.push(v1295);
        }
      }
    } else if (v1252.jrEBM(dataType, "list")) {
      const v1281 = v1252.RqSqq(order, "descend") ? "desc" : "asc";
      const v1282 = "FROM " + v1257 + " WHERE 1=1 " + v1260 + " AND happenTime>='" + v1255 + "' AND happenTime<='" + v1256 + "'";
      let v1283 = "SELECT * " + v1282 + " ORDER BY happenTime " + v1281 + ",id asc LIMIT " + startNum + "," + endNum;
      if (calcInfo && calcInfo.calcField) {
        const {
          fieldName: _0x5226fc,
          isRepeat: _0x35e245
        } = calcInfo.calcField;
        switch (_0x35e245) {
          case "0":
          case "2":
          case "3":
          case "4":
            break;
          case "6":
          case "7":
            const v1284 = v1252.RRMeA(_0x35e245, "6") ? "MAX" : "MIN";
            const v1285 = "SELECT " + v1284 + "(" + _0x5226fc + ") " + v1282;
            v1283 = "SELECT * " + v1282 + " AND " + _0x5226fc + "=(" + v1285 + ") \n                                ORDER BY happenTime " + v1281;
            break;
          case "1":
          case "5":
            v1283 = "SELECT * " + v1282 + " \n                                ORDER BY happenTime " + v1281 + " \n                                LIMIT 1 BY " + _0x5226fc + " \n                                LIMIT " + startNum + "," + endNum;
            break;
        }
      }
      [v1286] = await Promise.all([BuryPointCardModel.statisticData(v1283)]);
      let v1287 = "''";
      if (v1286 && v1286.length) {
        const v1288 = v1286[v1252.bRdbt(114150, 114150)];
        for (let v1289 in v1288) {
          if (v1289.indexOf(v1252.zRjSl) !== -1 || v1289 === "id") {
            continue;
          }
          v1287 += ",'" + v1289 + "'";
        }
      }
      const v1290 = await BuryPointFieldModel.getFieldListByKey(_0x21486f, v1287);
      var v1291 = ["用户id", "点位名称"];
      for (let v1292 = v1252.uMKxg(339168, 339168); v1252.XgZtf(v1292, v1290.length); v1292++) {
        v1291.push(v1290[v1292].fieldAlias);
      }
      v1291.push("创建时间");
      v1263.push(v1291);
      if (v1286) {
        for (let v1293 = 0; v1252.LRUsv(v1293, v1286.length); v1293++) {
          let v1294 = v1286[v1293];
          var v1295 = [];
          v1295.push(v1294.weCustomerKey);
          v1295.push(_0x5f3f69);
          for (let v1296 = v1252.SNAhM(789027, 789027); v1296 < v1290.length; v1296++) {
            v1295.push(v1294[v1290[v1296].fieldName]);
          }
          v1295.push(v1294.createdAt);
          v1263.push(v1295);
        }
      }
    }
    if (!v1286) {
      p1316.response.status = v1252.SNAhM(316300, 315920);
      p1316.body = vRequire9.ERROR_412(v1252.nvVsY);
      return;
    }
    let v1297 = v1252.BvPyG(new Date().Format("yyyyMMddhhmmss"), v1252.LtiXQ);
    const v1298 = vRequire2.build([{
      name: "sheet1",
      data: v1263
    }]);
    const v1299 = v1298.length;
    p1316.response.status = 200;
    p1316.set(v1252.jRwrZ, v1252.CCxfS + encodeURIComponent(v1297));
    p1316.set("Content-type", "application/vnd.openxmlformats");
    p1316.set("Content-Length", v1299);
    p1316.body = v1298;
  }
  static async apiExport(p1352) {
    const v1300 = {
      tohCB: "varchar",
      YUXoq: function (p1353, p1354) {
        return p1353 + p1354;
      },
      CWZWS: function (p1355, p1356) {
        return p1355 ^ p1356;
      },
      WXhQX: function (p1357, p1358) {
        return p1357 + p1358;
      },
      pHNSS: function (p1359, p1360) {
        return p1359 || p1360;
      },
      NBygz: "开始时间或结束时间格式不正确，必须是yyyy-MM-dd HH:mm:ss格式",
      bhpBn: function (p1361, p1362) {
        return p1361 === p1362;
      },
      XGiMh: function (p1363, p1364) {
        return p1363 ^ p1364;
      },
      XVllX: function (p1365, p1366) {
        return p1365 ^ p1366;
      },
      MuMwb: function (p1367, p1368) {
        return p1367 < p1368;
      },
      tihtb: function (p1369, p1370) {
        return p1369 * p1370;
      },
      GRrTC: function (p1371, p1372) {
        return p1371 ^ p1372;
      },
      bWNUg: function (p1373, p1374) {
        return p1373 === p1374;
      },
      jqZQz: function (p1375, p1376) {
        return p1375 ^ p1376;
      },
      koeig: function (p1377, p1378) {
        return p1377 + p1378;
      },
      HPaLh: "埋点ApiExport",
      vJoGk: function (p1379, p1380) {
        return p1379 ^ p1380;
      },
      qRTIV: "event_20250628_174708794_pro",
      BEoIg: function (p1381, p1382, p1383) {
        return p1381(p1382, p1383);
      },
      FjPTs: "http://staging.webfunny.cn/wfEvent/upEvents",
      jAkeZ: "success"
    };
    let v1301 = p1352.request.body;
    const v1302 = JSON.parse(v1301);
    const {
      companyId: _0x55742e
    } = p1352.user;
    const {
      userId = "",
      calcInfo: _0x2110db,
      projectId: _0xa45400,
      selectedPointId: _0x57ea8f,
      filterList: _0x12226d,
      page = 0,
      pageSize = v1300.CWZWS(987337, 987937),
      startTime: _0x14546b,
      endTime: _0x268829,
      order = "desc"
    } = v1302;
    const v1303 = v1300.WXhQX(_0xa45400, "_") + _0x57ea8f;
    const v1304 = (page - v1300.CWZWS(601010, 601011)) * pageSize;
    if (!_0x14546b || !_0x268829) {
      p1352.response.status = v1300.CWZWS(114278, 114682);
      p1352.body = vRequire9.ERROR_412("开始时间或结束时间不能为空");
      return;
    }
    if (v1300.pHNSS(!_0xa45400, !_0x57ea8f)) {
      p1352.response.status = v1300.CWZWS(730435, 730335);
      p1352.body = vRequire9.ERROR_412("项目id或点位id不能为空");
      return;
    }
    if (_0x14546b.length !== 19 || _0x268829.length !== 19) {
      p1352.response.status = 412;
      p1352.body = vRequire9.ERROR_412(v1300.NBygz);
      return;
    }
    if (v1300.bhpBn(accountInfo.isCloud, true)) {
      const v1305 = await vRequire3.postJson(LOCAL_SERVER + "/wfCenter/getProductInfoByCompanyId", {
        companyId: _0x55742e
      }).catch(p1384 => {
        console.error("/wfCenter/getProductInfoByCompanyId error", p1384);
      });
      if (v1305) {
        const {
          enableDataExport = 1
        } = v1305.data || {};
        if (enableDataExport * 1 === 0) {
          p1352.response.status = 412;
          p1352.body = vRequire9.ERROR_412("您的产品不支持导出能力！");
          return;
        }
      }
    }
    const {
      purchaseCodeCardCount: _0x44745c
    } = global.eventInfo;
    if (_0x44745c < v1300.XGiMh(315886, 325345)) {
      p1352.response.status = 412;
      p1352.body = vRequire9.ERROR_412("您当前的版本无法使用API查询功能，卡片无限版可调用！");
      return;
    }
    for (let v1306 = v1300.XVllX(243769, 243769); v1300.MuMwb(v1306, _0x12226d.length); v1306++) {
      const {
        fieldName: _0x239201
      } = _0x12226d[v1306];
      await BuryPointFieldModel.getFieldTypeByKey(_0xa45400, _0x239201).then(p1385 => {
        if (p1385 && p1385.length) {
          _0x12226d[v1306].type = p1385[0].fieldType;
        }
      });
    }
    let v1307 = "";
    let v1308 = "and";
    if (_0x12226d && _0x12226d.length > 0) {
      _0x12226d.forEach(p1386 => {
        const {
          fieldName: _0x1fd1d6,
          rule: _0x3ebc54,
          value: _0x53894b,
          type = "",
          andOr = "a"
        } = p1386;
        let v_0x53894b = _0x53894b;
        if (type.toLowerCase() === v1300.tohCB) {
          v_0x53894b = _0x53894b;
        }
        if (andOr) {
          v1308 = vRequire3.convertAndOr(andOr);
        }
        if (_0x1fd1d6) {
          v1307 += v1300.YUXoq(" " + _0x1fd1d6 + vRequire3.convertOper(_0x3ebc54) + "'", v_0x53894b) + "' " + v1308;
        }
      });
      v1307 = v1300.WXhQX(" and (" + v1307.substr(0, v1307.lastIndexOf(v1308)), ")");
    }
    const vOrder = order;
    let v1309 = {};
    if (_0x2110db && _0x2110db.calcField) {
      let v1310 = _0xa45400 + "_" + _0x57ea8f;
      let v1311 = "";
      if (v1300.tihtb(_0x2110db.calcField.isRepeat, v1300.GRrTC(896360, 896361)) > 3) {
        v1311 = await C21.splicingGroupBySqlForTime(_0x2110db.calcField, _0x12226d, v1310, _0x14546b, _0x268829);
      } else {
        v1311 = await C21.splicingSqlForTime(_0x2110db.calcField, _0x12226d, v1310, _0x14546b, _0x268829);
      }
      const v1312 = await BuryPointCardModel.statisticData("" + v1311);
      if (v1312 && v1300.bWNUg(v1312.length, v1300.jqZQz(622586, 622587))) {
        v1309 = v1312[0];
      } else if (v1312 && v1312.length > 1) {
        v1309 = v1312;
      }
    } else {
      v1307 = v1300.koeig(v1307, " and happenTime >='" + _0x14546b + "' and happenTime <='" + _0x268829 + "' ");
      let v1313 = " select * from " + v1303 + " where 1=1 " + v1307 + " order by happenTime " + vOrder + " limit " + v1304 + "," + pageSize + " ";
      const v1314 = await BuryPointCardModel.statisticData(v1313);
      let v1315 = " select count(id) as count from " + v1303 + " where 1=1 " + v1307 + " ";
      const v1316 = await BuryPointCardModel.statisticData(v1315);
      let v1317 = 0;
      if (v1316 && v1316.length) {
        v1317 = v1316[0].count * v1300.XVllX(900563, 900562);
      }
      v1309 = {
        total: v1317,
        dataList: v1314 || []
      };
    }
    try {
      const v1318 = new Date(_0x268829).getTime() - new Date(_0x14546b).getTime();
      const v1319 = [{
        jieKouMingCheng: v1300.HPaLh,
        shiJianFanWei: v1318,
        gongSiId: _0x55742e,
        chaXunJieGuoZongShu: v1309.total || v1300.vJoGk(206973, 206973),
        yeMa: page,
        yeMianSize: pageSize,
        projectId: v1300.qRTIV,
        pointId: 579
      }];
      v1300.BEoIg(vRequire10, v1300.FjPTs, {
        method: "POST",
        body: JSON.stringify(v1319),
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        }
      });
    } catch (_0x2acfcb) {
      console.error("apiExport upload error", _0x2acfcb);
    }
    p1352.response.status = 200;
    p1352.body = vRequire9.SUCCESS_200(v1300.jAkeZ, v1309);
  }
}
class C15 {
  static async create(p1387) {
    const v1320 = {
      YgtbU: function (p1388, p1389) {
        return p1388 === p1389;
      },
      TklLb: function (p1390, p1391) {
        return p1390 ^ p1391;
      },
      vNyWH: function (p1392, p1393) {
        return p1392 > p1393;
      },
      HpVrU: function (p1394, p1395) {
        return p1394 ^ p1395;
      },
      SbPtg: "yyyy-MM-dd hh:mm:ss",
      nOjAN: "留存分析类型卡片只能有两个计算数据！",
      YnCvN: function (p1396, p1397) {
        return p1396 ^ p1397;
      },
      MgpCW: "点位未选！",
      Godwk: "yyyyMMddhhmmss",
      hpBES: "weCustomerKey",
      ikXtQ: function (p1398, p1399) {
        return p1398 ^ p1399;
      },
      nWEVf: function (p1400, p1401) {
        return p1400 ^ p1401;
      }
    };
    let v1321 = JSON.parse(p1387.request.body);
    const {
      nickname = ""
    } = p1387.user;
    v1321.createBy = nickname;
    v1321.dataGrid = JSON.stringify(v1321.dataGrid || "");
    if (!v1321.pageId || v1320.YgtbU(v1321.pageId, "") || v1320.YgtbU(v1321.pageId, undefined)) {
      p1387.response.status = 412;
      p1387.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.CARD_CREATE_NO_CHOICE_PAGE));
      return;
    }
    if (v1321.type === 8) {
      v1321.calcRule = [];
    }
    if (v1321.name && v1321.type && v1321.pageId && v1321.calcRule && v1321.projectId) {
      const v1322 = await BuryPointCardModel.checkName(v1321.name, v1321.pageId);
      let v1323 = v1322 && v1322.length > 0 ? v1322[0].count : v1320.TklLb(409895, 409895);
      if (v1320.vNyWH(v1323, 0)) {
        p1387.response.status = v1320.TklLb(609857, 610269);
        p1387.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_FAIL_NAME_EXIST));
        return;
      }
      const v1324 = await BuryPointCardModel.getMaxSort(v1321.pageId);
      let v1325 = v1324 && v1324.length > 0 ? v1324[0].maxSort : 0;
      v1321.sort = parseInt(v1325, 10) + 1;
      if (v1321.type === v1320.HpVrU(843688, 843681)) {
        v1321.alarmMembers = JSON.stringify(v1321.alarmMembers);
        v1321.noticeWay = JSON.stringify(v1321.noticeWay);
        await BuryPointCardModel.create(v1321);
        p1387.response.status = v1320.HpVrU(750127, 750311);
        p1387.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_SUCCESS), "");
        return;
      }
      let v1326 = v1321.calcRule;
      let v1327 = [];
      for (let v1328 = 0; v1328 < v1326.length; v1328++) {
        v1326[v1328].calcName = v1326[v1328].calcName.replace(new RegExp("\\\\", ""), "").replace(new RegExp("'", ""), "").replace(new RegExp("\"", ""), "");
      }
      v1321.calcRule = v1326;
      if (v1321.type === v1320.TklLb(403292, 403280)) {
        v1321.calcRule = JSON.stringify(v1321.calcRule);
        v1321.updatedAt = new Date().Format(v1320.SbPtg);
        v1321.alarmMembers = JSON.stringify(v1321.alarmMembers);
        v1321.noticeWay = JSON.stringify(v1321.noticeWay);
        v1321.keepAnalysisRule = JSON.stringify(v1321.keepAnalysisRule);
        await BuryPointCardModel.create(v1321);
        p1387.response.status = v1320.TklLb(694081, 694153);
        p1387.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_SUCCESS), "");
        return;
      }
      if (v1321.groupFields) {
        v1321.groupByFlag = 1;
      }
      if (v1321.type === 6 && v1326.length > 4) {
        p1387.response.status = 412;
        p1387.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.CARD_CREATE_NUMBER_FAIL));
        return;
      }
      if (v1320.YgtbU(v1321.type, 10) && v1326.length !== v1320.HpVrU(672350, 672348)) {
        p1387.response.status = v1320.TklLb(571071, 571171);
        p1387.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(v1320.nOjAN));
        return;
      }
      let v1329 = 0;
      for (let v1330 = 0; v1330 < v1326.length; v1330++) {
        const {
          calcName: _0x6638df,
          prePoint: _0x2e4f80
        } = v1326[v1330];
        let v1331 = v1326[v1330];
        if (!_0x2e4f80) {
          p1387.response.status = v1320.YnCvN(804593, 804717);
          p1387.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(v1320.MgpCW));
          return;
        }
        if (!_0x2e4f80.pointId) {
          p1387.response.status = 412;
          p1387.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode("点位未选！"));
          return;
        }
        let v1332 = slugify(_0x6638df).replace(new RegExp("-", "g"), "") + new Date().Format(v1320.Godwk);
        v1331.calcNameKey = v1332;
        if (v1321.type === 5 || v1321.type === 10) {
          if (!v1331.prePoint.calcField.fieldName) {
            v1331.prePoint.calcField.fieldName = v1320.hpBES;
          }
        }
        if (v1331.prePoint.calcField.isRepeat === "4" || v1331.prePoint.calcField.isRepeat === "5") {
          v1329 = v1329 + 1;
        }
        v1327.push(v1331);
      }
      if (v1326.length > 1 && v1329 >= 1) {
        p1387.response.status = 412;
        p1387.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.CARD_CREATE_GROUP_FAIL));
        return;
      }
      if (v1326.length === v1320.ikXtQ(167255, 167254) && v1320.YgtbU(v1329, v1320.nWEVf(745301, 745300))) {
        v1321.groupByFlag = 1;
      }
      v1321.calcRule = JSON.stringify(v1327);
      v1321.updatedAt = new Date().Format("yyyy-MM-dd hh:mm:ss");
      v1321.alarmMembers = JSON.stringify(v1321.alarmMembers);
      v1321.noticeWay = JSON.stringify(v1321.noticeWay);
      v1321.keepAnalysisRule = JSON.stringify(v1321.keepAnalysisRule || "");
      let v1333 = await BuryPointCardModel.create(v1321);
      p1387.response.status = 200;
      p1387.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_SUCCESS), "");
    } else {
      p1387.response.status = 412;
      p1387.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_PARAM_FAIL));
    }
  }
  static async moveCard(p1402) {
    const v1334 = {
      gyflB: function (p1403, p1404) {
        return p1403(p1404);
      },
      etWfv: function (p1405, p1406, p1407) {
        return p1405(p1406, p1407);
      },
      wVqij: function (p1408, p1409) {
        return p1408 ^ p1409;
      },
      hKqKQ: "_BuryPointCardStatistics",
      rybwj: "fail！"
    };
    let v1335 = JSON.parse(p1402.request.body);
    const {
      id: _0x1793b2,
      pageId: _0x4702f2,
      projectId: _0x1acc49
    } = v1335;
    const {
      nickname: _0x155d26
    } = p1402.user;
    if (_0x1793b2 && _0x4702f2 && _0x1acc49) {
      const v1336 = await BuryPointCardModel.getMaxSort(v1335.pageId);
      let v1337 = v1334.gyflB(isNaN, v1336[0].maxSort) ? 0 : v1336[0].maxSort;
      let v1338 = {
        pageId: _0x4702f2,
        updateBy: _0x155d26,
        projectId: _0x1acc49
      };
      v1338.sort = v1334.etWfv(parseInt, v1337, 10) + v1334.wVqij(604873, 604872);
      await BuryPointCardModel.update(_0x1793b2, v1338);
      let v1339 = _0x1acc49 + v1334.hKqKQ;
      await BuryPointCardStatisticsModel.updateStatisticByCard(v1339, _0x1793b2, _0x4702f2);
      p1402.response.status = v1334.wVqij(502431, 502359);
      p1402.body = vRequire9.SUCCESS_200("success", "");
    } else {
      p1402.response.status = 412;
      p1402.body = vRequire9.ERROR_412(v1334.rybwj);
    }
  }
  static async copyCard(p1410) {
    const v1340 = {
      HqUUr: function (p1411, p1412) {
        return p1411 > p1412;
      },
      jWEbC: function (p1413, p1414) {
        return p1413 ^ p1414;
      },
      sfgli: function (p1415, p1416) {
        return p1415 ^ p1416;
      },
      HHApI: function (p1417, p1418) {
        return p1417 != p1418;
      },
      pGSPZ: "undefined",
      mkqve: function (p1419, p1420) {
        return p1419 + p1420;
      },
      bqXah: function (p1421, p1422) {
        return p1421(p1422);
      },
      iVEHk: "yyyy-MM-dd hh:mm:ss",
      NdXWx: function (p1423, p1424) {
        return p1423 ^ p1424;
      },
      DfTLv: function (p1425, p1426) {
        return p1425 ^ p1426;
      }
    };
    let v1341 = JSON.parse(p1410.request.body);
    const {
      nickname: _0x202f98
    } = p1410.user;
    v1341.createBy = _0x202f98;
    if (v1341.cardId && v1341.cardName && v1341.pageId) {
      const v1342 = await BuryPointCardModel.checkName(v1341.cardName, v1341.pageId);
      let v1343 = v1342[0].count;
      if (v1340.HqUUr(v1343, 0)) {
        p1410.response.status = 412;
        p1410.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_FAIL_NAME_EXIST));
        return;
      }
      let v1344 = await BuryPointCardModel.detail(v1341.cardId);
      const v1345 = await BuryPointCardModel.getCardMaxSort(v1341.pageId);
      const {
        sort = v1340.jWEbC(156896, 156896),
        dataGrid = ""
      } = v1345 && v1345.length > v1340.sfgli(588422, 588422) ? v1345[v1340.sfgli(115188, 115188)] : {};
      if (dataGrid && v1340.HHApI(dataGrid, v1340.pGSPZ)) {
        let v1346 = JSON.parse(dataGrid);
        let v1347 = {
          x: 0
        };
        v1347.y = v1340.mkqve(parseInt(v1346.y), parseInt(v1346.w)) + 1;
        v1347.w = v1346.w;
        v1347.h = v1346.h;
        v1347.minH = v1346.minH;
        v1341.dataGrid = JSON.stringify(v1347);
      }
      let v1348 = v1340.bqXah(isNaN, sort) ? 0 : sort;
      v1341.sort = parseInt(v1348, 10) + 1;
      v1341.type = v1344.type;
      v1341.name = v1341.cardName;
      v1341.calcRule = v1344.calcRule;
      v1341.conversionCycle = v1344.conversionCycle;
      v1341.groupByFlag = v1344.groupByFlag;
      v1341.chartTableShow = v1344.chartTableShow;
      v1341.togetherList = v1344.togetherList;
      v1341.refreshFrequency = v1344.refreshFrequency;
      v1341.alarmMembers = v1344.alarmMembers;
      v1341.noticeWay = v1344.noticeWay;
      v1341.keepAnalysisRule = v1344.keepAnalysisRule;
      v1341.groupFields = v1344.groupFields;
      v1341.tableShowType = v1344.tableShowType;
      v1341.isShowOnlineCount = v1344.isShowOnlineCount;
      v1341.updatedAt = new Date().Format(v1340.iVEHk);
      let v1349 = await BuryPointProjectModel.detail(v1341.pageId);
      v1341.projectId = v1349.projectId;
      let v1350 = await BuryPointCardModel.create(v1341);
      p1410.response.status = v1340.NdXWx(935550, 935606);
      p1410.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_SUCCESS), "");
    } else {
      p1410.response.status = v1340.DfTLv(512736, 512892);
      p1410.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_PARAM_FAIL));
    }
  }
  static async delete(p1427) {
    const v1351 = {
      jjFsU: function (p1428, p1429) {
        return p1428 ^ p1429;
      },
      JMjbr: "success"
    };
    let v1352 = JSON.parse(p1427.request.body);
    const {
      id: _0x69bdef
    } = v1352;
    await C15.deleteById(_0x69bdef);
    p1427.response.status = v1351.jjFsU(800800, 801000);
    p1427.body = vRequire9.SUCCESS_200(v1351.JMjbr, "");
  }
  static async deleteBatch(p1430) {
    const v1353 = {
      fZiGo: function (p1431, p1432) {
        return p1431 ^ p1432;
      },
      wQGHP: function (p1433, p1434) {
        return p1433 < p1434;
      },
      UVjCn: "success"
    };
    let v1354 = JSON.parse(p1430.request.body);
    const {
      ids: _0x2cade0
    } = v1354;
    if (_0x2cade0) {
      let v1355 = _0x2cade0.split(",");
      for (let v1356 = v1353.fZiGo(205158, 205158); v1353.wQGHP(v1356, v1355.length); v1356++) {
        await C15.deleteById(v1355[v1356]);
      }
    }
    p1430.response.status = 200;
    p1430.body = vRequire9.SUCCESS_200(v1353.UVjCn, "");
  }
  static async deleteById(p1435) {
    const v1357 = {
      oTMGM: function (p1436, p1437) {
        return p1436 ^ p1437;
      }
    };
    let v1358 = await BuryPointCardModel.detail(p1435);
    if (v1358) {
      const v1359 = await BuryPointCardModel.getListByPageIdAndSort(v1358.pageId, p1435);
      for (let v1360 = 0; v1360 < v1359.length; v1360++) {
        await BuryPointCardModel.update(v1359[v1360].id, {
          sort: v1360 + v1357.oTMGM(234271, 234270)
        });
      }
      await BuryPointCardModel.delete(p1435);
    }
  }
  static async ["detail"](p1438) {
    const v1361 = {
      Hdmls: function (p1439, p1440) {
        return p1439 === p1440;
      },
      HUPHe: "undefined",
      niZJV: function (p1441, p1442) {
        return p1441 === p1442;
      },
      syboG: function (p1443, p1444) {
        return p1443 ^ p1444;
      },
      wTsEB: function (p1445, p1446) {
        return p1445 ^ p1446;
      }
    };
    const v1362 = vRequire3.parseQs(p1438.request.url);
    let v1363 = v1362.id;
    let v1364 = await BuryPointCardModel.detail(v1363);
    let v1365 = {
      id: v1364.id,
      pageId: v1364.pageId,
      type: v1364.type,
      name: v1364.name,
      describe: v1364.describe,
      sort: v1364.sort,
      conversionCycle: v1364.conversionCycle,
      groupByFlag: v1364.groupByFlag,
      chartTableShow: v1364.chartTableShow,
      togetherList: v1364.togetherList,
      refreshFrequency: v1364.refreshFrequency
    };
    v1365.noticeWay = v1361.Hdmls(v1364.noticeWay, "undefined") ? "" : v1364.noticeWay;
    v1365.alarmMembers = v1361.Hdmls(v1364.alarmMembers, "undefined") ? "" : v1364.alarmMembers;
    v1365.keepAnalysisRule = v1364.keepAnalysisRule === v1361.HUPHe ? "" : v1364.keepAnalysisRule;
    const v1366 = JSON.parse(v1364.calcRule);
    let v1367 = "";
    let v1368 = false;
    for (let v1369 = 0; v1369 < v1366.length; v1369++) {
      const {
        isRepeat: _0x3b514e,
        fieldName: _0x2a70da
      } = v1366[v1369].prePoint.calcField;
      if (_0x3b514e === "4" || _0x3b514e === "5") {
        v1367 = _0x2a70da;
        v1366[v1369].prePoint.calcField.isRepeat = _0x3b514e === "4" ? "0" : "1";
        v1366[v1369].prePoint.calcField.fieldName = "weCustomerKey";
        break;
      }
      if (v1364.type === 5) {
        v1368 = v1366[0].sublineFlag ? true : false;
      }
    }
    v1365.sublineFlag = v1368;
    v1365.calcRule = JSON.stringify(v1366);
    v1365.groupFields = v1364.groupFields || v1367;
    v1365.tableShowType = v1364.tableShowType;
    v1365.isShowOnlineCount = v1364.isShowOnlineCount;
    v1365.dataGrid = v1364.dataGrid === "undefined" ? "" : v1364.dataGrid || "";
    if (v1361.niZJV(v1364.type, v1361.syboG(653522, 653527)) || v1364.type === 10) {
      let v1370 = "weCustomerKey";
      v1365.calculateId = v1366[0].prePoint.calcField.fieldName || v1370;
    }
    if (v1364.type === v1361.wTsEB(159124, 159128)) {
      let v1371 = "weCustomerKey";
      v1365.calculateId = v1366.firstStep.calculateId || v1371;
      v1365.pvOrUvFlag = v1366.firstStep.pvOrUvFlag;
      v1365.maxLayers = v1366.firstStep.maxLayers;
    }
    p1438.response.status = v1361.syboG(139558, 139758);
    p1438.body = vRequire9.SUCCESS_200("success", v1365);
  }
  static async getCardQuery(p1447) {
    const v1372 = {
      LFnEy: function (p1448, p1449) {
        return p1448 ^ p1449;
      },
      MzmIE: "success"
    };
    const v1373 = vRequire3.parseQs(p1447.request.url);
    let v1374 = v1373.id;
    let v1375 = await BuryPointCardModel.detail(v1374);
    let v1376 = [];
    if (v1375.type === 12) {
      const v1377 = JSON.parse(v1375.calcRule);
      v1376 = v1377.firstStep.pointList || [];
    } else {
      v1376 = JSON.parse(v1375.calcRule);
    }
    p1447.response.status = v1372.LFnEy(816057, 815985);
    p1447.body = vRequire9.SUCCESS_200(v1372.MzmIE, v1376);
  }
  static async update(p1450) {
    const v1378 = {
      tBvqT: function (p1451, p1452) {
        return p1451 === p1452;
      },
      UtgVl: function (p1453, p1454) {
        return p1453 === p1454;
      },
      ujFiI: function (p1455, p1456) {
        return p1455 ^ p1456;
      },
      jNBDK: function (p1457, p1458) {
        return p1457 < p1458;
      }
    };
    let v1379 = JSON.parse(p1450.request.body);
    let v1380 = v1379.id;
    const {
      nickname: _0x35ffcc
    } = p1450.user;
    v1379.updateBy = _0x35ffcc;
    if (!v1379.pageId || v1378.tBvqT(v1379.pageId, "") || v1378.UtgVl(v1379.pageId, undefined)) {
      let v1381 = await BuryPointCardModel.detail(v1380);
      v1379.pageId = v1381.pageId;
    }
    if (v1379) {
      if (v1378.UtgVl(v1379.type, 8)) {
        v1379.calcRule = [];
      }
      if (v1379.type === 9) {
        await BuryPointCardModel.update(v1380, v1379);
        p1450.response.status = 200;
        p1450.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_SUCCESS), v1379);
        return;
      }
      let v1382 = v1379.calcRule;
      for (let v1383 = v1378.ujFiI(403296, 403296); v1383 < v1382.length; v1383++) {
        v1382[v1383].calcName = v1382[v1383].calcName.replace(new RegExp("\\\\", ""), "").replace(new RegExp("'", ""), "").replace(new RegExp("\"", ""), "");
      }
      v1379.calcRule = v1382;
      let v1384 = 0;
      for (let v1385 = 0; v1378.jNBDK(v1385, v1382.length); v1385++) {
        const {
          alarmId: _0x232704
        } = v1382[v1385];
        if (_0x232704) {
          v1384 = v1378.ujFiI(266835, 266834);
          break;
        }
      }
      if (v1384 === 0) {
        v1379.alarmStatus = 0;
      }
      let v1386 = v1379.alarmMembers;
      let v1387 = v1379.noticeWay;
      v1379.alarmMembers = JSON.stringify(v1386);
      v1379.noticeWay = JSON.stringify(v1387);
      v1379.keepAnalysisRule = JSON.stringify(v1379.keepAnalysisRule);
      v1379.calcRule = JSON.stringify(v1382);
      v1379.dataGrid = JSON.stringify(v1379.dataGrid);
      if (!v1379.refreshFrequency) {
        v1379.refreshFrequency = v1378.ujFiI(129228, 129228);
      }
      await BuryPointCardModel.update(v1380, v1379);
      p1450.response.status = 200;
      p1450.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_SUCCESS), v1379);
      return;
    } else {
      p1450.response.status = 412;
      p1450.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_FAIL));
    }
  }
  static async ["refresh"](p1459) {
    const v1388 = {
      wUcBs: function (p1460, p1461) {
        return p1460 && p1461;
      },
      QLYyk: function (p1462, p1463) {
        return p1462 === p1463;
      },
      aDYKw: function (p1464, p1465) {
        return p1464 > p1465;
      },
      RHzZj: function (p1466, p1467) {
        return p1466 ^ p1467;
      },
      JZTln: "we-base-bc874f09-1909-872d-0adc-b2d55fad5b43",
      CbtkH: "success",
      MPsqs: function (p1468, p1469) {
        return p1468 < p1469;
      },
      pLCLM: "yyyy-MM-dd hh:mm:ss",
      Vbmxj: function (p1470, p1471) {
        return p1470 ^ p1471;
      }
    };
    let v1389 = p1459.request.body;
    const v1390 = JSON.parse(v1389);
    const {
      projectId = "",
      sysType = "",
      pageId: _0x14b4ec,
      cardName: _0x453049,
      type: _0x5ecdc8,
      dateValue: _0x8c4466,
      startDate: _0x39a534,
      endDate: _0x3d1d38,
      topValue: _0xdf8cf1,
      cardIds = []
    } = v1390;
    let v1391 = [];
    if (!_0x14b4ec || _0x14b4ec === "" || _0x14b4ec === undefined || _0x14b4ec === "undefined") {
      p1459.response.status = 200;
      p1459.body = vRequire9.SUCCESS_200("success", v1391);
      return;
    }
    if (v1388.wUcBs(projectId, sysType) && (v1388.QLYyk(sysType, 1) || sysType === "1")) {
      const v1392 = await BuryPointProjectModel.detail(_0x14b4ec);
      let v1393 = [];
      for (let v1394 = 0; v1394 < vRequire36.length; v1394++) {
        const v1395 = vRequire36[v1394].pageName;
        if (v1388.QLYyk(v1395, v1392.name)) {
          v1393 = vRequire36[v1394].statisticData;
          break;
        }
      }
      let v1396 = await BuryPointTemplateModel.getWeKeyByProjectIdAndType(projectId, 3);
      if (v1396 && v1388.aDYKw(v1396.length, 0)) {
        for (let v1397 = v1388.RHzZj(963272, 963272); v1397 < v1396.length; v1397++) {
          const {
            weKey: _0x31e870
          } = v1396[v1397];
          if (_0x31e870 && _0x31e870 === v1388.JZTln) {
            v1391 = v1393;
            break;
          }
        }
      }
      p1459.response.status = 200;
      p1459.body = vRequire9.SUCCESS_200(v1388.CbtkH, v1391);
    } else {
      const v1398 = await BuryPointCardModel.getListByIds(cardIds);
      for (let v1399 = 0; v1388.MPsqs(v1399, v1398.length); v1399++) {
        const v1400 = v1398[v1399];
        v1400.startDate = _0x39a534;
        v1400.endDate = _0x3d1d38;
        v1400.topValue = _0xdf8cf1;
        v1400.refreshTime = new Date().Format(v1388.pLCLM);
        if (v1400.type && v1388.QLYyk(v1400.type, 9)) {
          v1391.push(await C15.convertHeatMapCardStatisticInfo(v1400, _0x39a534, _0x3d1d38));
        } else if (v1400.type && v1400.type === 10) {
          v1400.calcRule = JSON.parse(v1400.calcRule);
          v1400.keepAnalysisRule = JSON.parse(v1400.keepAnalysisRule);
          v1400.startDate = _0x39a534;
          v1400.endDate = _0x3d1d38;
          v1391.push(await C15.handleTempBuryPointCardForRetention(v1400));
        } else if (v1400.type && v1400.type === 12) {
          v1391.push(await C7.analysisCardData(v1400, _0x39a534, _0x3d1d38));
        } else if (_0x5ecdc8 === 8) {
          v1400.statisticList = [];
          v1400.tableData = [];
          v1391.push(v1400);
        } else {
          const v1401 = {
            cardId: v1400.id,
            cardName: v1400.name,
            chartTableShow: v1400.chartTableShow,
            dataGrid: v1400.dataGrid,
            isShowOnlineCount: v1400.isShowOnlineCount
          };
          let v1402 = JSON.parse(v1400.calcRule);
          for (let v1403 = v1388.Vbmxj(893104, 893104); v1388.MPsqs(v1403, v1402.length); v1403++) {
            const {
              isRepeat: _0x52c9b9,
              fieldName: _0x29da4b
            } = v1402[v1403].prePoint.calcField;
            if (_0x52c9b9 === "4" || _0x52c9b9 === "5") {
              v1400.groupFields = _0x29da4b;
              break;
            }
          }
          v1401.groupFields = v1400.groupFields;
          v1401.refreshTime = new Date().Format(v1388.pLCLM);
          v1401.statisticList = [];
          v1400.topValue = 1;
          let v1404 = await C15.handleDataPreview(v1400);
          const {
            statisticData = [],
            tableData = []
          } = v1404;
          v1401.statisticList = statisticData;
          v1401.tableData = tableData;
          v1401.refreshTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
          v1391.push(v1401);
        }
      }
    }
    p1459.response.status = 200;
    p1459.body = vRequire9.SUCCESS_200("success", v1391);
  }
  static async ["handleBuryPointCardRetentionData"](p1472) {
    const v1405 = {
      YGaTw: function (p1473, p1474) {
        return p1473 ^ p1474;
      },
      phQdC: function (p1475, p1476) {
        return p1475 < p1476;
      },
      vzMQQ: function (p1477, p1478) {
        return p1477 ^ p1478;
      },
      WDXjJ: function (p1479, p1480) {
        return p1479 ^ p1480;
      },
      KictY: function (p1481, p1482) {
        return p1481 / p1482;
      },
      YvOCd: function (p1483, p1484) {
        return p1483 - p1484;
      },
      yxRUK: function (p1485, p1486) {
        return p1485 ^ p1486;
      },
      QONDS: "all",
      lXBKW: "people",
      dGJzm: function (p1487, p1488) {
        return p1487 * p1488;
      },
      jbsZM: "yyyy-MM-dd",
      QFCpX: "MM-dd",
      tVqMX: function (p1489, p1490) {
        return p1489 < p1490;
      },
      BJcyI: function (p1491, p1492) {
        return p1491 * p1492;
      },
      VFbxX: function (p1493, p1494) {
        return p1493 ^ p1494;
      },
      hWEza: function (p1495, p1496) {
        return p1495 ^ p1496;
      },
      HnqUF: function (p1497, p1498) {
        return p1497 ^ p1498;
      },
      mmEFB: function (p1499, p1500) {
        return p1499 ^ p1500;
      },
      jIqnD: function (p1501, p1502) {
        return p1501 >= p1502;
      },
      dfhlj: "group",
      FtYjK: function (p1503, p1504) {
        return p1503 * p1504;
      },
      VWgZH: function (p1505, p1506) {
        return p1505 + p1506;
      },
      SUsXi: function (p1507, p1508) {
        return p1507 ^ p1508;
      },
      oTdZh: function (p1509, p1510) {
        return p1509 * p1510;
      },
      lcUio: function (p1511, p1512) {
        return p1511 / p1512;
      },
      KbQGv: function (p1513, p1514) {
        return p1513 ^ p1514;
      }
    };
    const {
      projectId: _0x18feda,
      type: _0x5ca66f,
      calcRule: _0x166c91,
      conversionCycle: _0x13ad5b,
      startDate: _0x2cdf4d,
      endDate: _0xe5750d,
      keepAnalysisRule: _0x37c6f1,
      groupFields: _0x4e2ff9
    } = p1472;
    const {
      timeFormat: _0x19d2da,
      dataShowType = "number"
    } = _0x37c6f1;
    const v1406 = _0x166c91[0].prePoint.pointId;
    const v1407 = _0x166c91[1].prePoint.pointId;
    if (!v1406 || !v1407) {
      return {
        statisticList: [],
        columns: [],
        result: []
      };
    }
    const v1408 = await BuryPointWarehouseModel.detailByPointId(v1406);
    const v1409 = await BuryPointWarehouseModel.detailByPointId(v1407);
    const v1410 = {
      projectId: _0x18feda,
      type: _0x5ca66f,
      calcRule: _0x166c91,
      conversionCycle: _0x13ad5b,
      keepAnalysisRule: _0x37c6f1,
      startDate: _0x2cdf4d,
      endDate: _0xe5750d
    };
    const v1411 = v1405.YvOCd(new Date(_0xe5750d).getTime(), new Date(_0x2cdf4d).getTime()) / (v1405.WDXjJ(159504, 159496) * 3600 * v1405.yxRUK(149434, 148562));
    const v1412 = RETENTION_CALC_INFO[_0x19d2da];
    const v1413 = [];
    const v1414 = [{
      title: "总数",
      key: v1405.QONDS,
      type: "first"
    }, {
      title: "总人数",
      key: "allPeople",
      type: v1405.lXBKW
    }];
    let v1415 = [];
    let v1416 = [];
    let v1417 = {};
    let v1418 = [];
    if (!_0x4e2ff9) {
      for (let v1419 = 0; v1405.phQdC(v1419, v1411); v1419++) {
        const v1420 = new Date(new Date(_0x2cdf4d).getTime() + v1405.dGJzm(v1405.dGJzm(v1419 + 1, 24) * 3600, 1000)).Format(v1405.jbsZM);
        const v1421 = {
          startTime: v1420 + " 00:00:00",
          endTime: v1420 + " 23:59:59"
        };
        const v1422 = new Date(v1420).Format("yyyy");
        const v1423 = new Date(v1420).Format(v1405.QFCpX);
        const v1424 = WEEK_NAME[new Date(v1420).getDay()];
        const v1425 = {
          type: "normal",
          rowData: {
            all: {
              value: v1423 + "（" + v1424 + "）",
              year: v1422,
              firstPointName: v1408.pointName,
              lastPointName: v1409.pointName
            }
          }
        };
        let v1426 = await C21.calculateFirstStepRetentionCountByCard({
          card: v1410,
          currDate: v1421
        });
        const v1427 = v1426 && v1426.length ? v1426[0].count * 1 : 0;
        v1425.rowData.allPeople = {
          value: v1427
        };
        v1416.push({
          date: v1420,
          chartData: {}
        });
        for (let v1428 = 0; v1405.tVqMX(v1428, v1412.length); v1428++) {
          const v1429 = v1412[v1428];
          const v1430 = new Date(new Date(v1420).getTime() + v1405.BJcyI(v1429 * 24 * v1405.VFbxX(304657, 305153), 1000)).Format(v1405.jbsZM);
          const v1431 = {
            startTime: v1430 + " 00:00:00",
            endTime: v1430 + " 23:59:59"
          };
          const v1432 = await C21.calculateRetentionDataByCard({
            card: v1410,
            currDate: v1421,
            lastDate: v1431
          });
          const v1433 = v1432 === v1405.hWEza(997270, 997270) ? 0 : vRequire3.toFixed(v1432 * v1405.HnqUF(805469, 805433) / v1427, v1405.mmEFB(214871, 214869));
          v1425.rowData["day-" + v1429] = {
            value: v1432,
            percentage: v1433
          };
          v1416[v1419].chartData[v1429] = {
            count: v1432,
            percentage: v1433
          };
        }
        v1413.push(v1425);
        if (v1405.jIqnD(v1420, _0xe5750d)) {
          break;
        }
      }
    } else {
      let v1434 = [];
      const v1435 = {
        startTime: _0x2cdf4d + " 00:00:00",
        endTime: _0xe5750d + " 23:59:59"
      };
      let v1436 = await C21.calculateFirstStepRetentionCountByCard({
        card: v1410,
        currDate: v1435,
        groupFields: _0x4e2ff9
      });
      for (let v1437 = 0; v1437 < v1436.length; v1437++) {
        const v1438 = {
          type: v1405.dfhlj,
          rowData: {
            all: {
              value: "" + v1436[v1437][_0x4e2ff9]
            },
            allPeople: {
              value: v1436[v1437].count
            }
          },
          children: []
        };
        const v1439 = v1436[v1437][_0x4e2ff9];
        const v1440 = _0x4e2ff9 + "='" + v1439 + "'";
        v1434.push(v1439);
        v1418[v1439] = v1436[v1437].count;
        for (let v1441 = v1405.YGaTw(391510, 391510); v1441 < v1411; v1441++) {
          const v1442 = new Date(new Date(_0x2cdf4d).getTime() + v1405.FtYjK(v1405.VWgZH(v1441, 1) * 24 * v1405.WDXjJ(270342, 273942), 1000)).Format("yyyy-MM-dd");
          const v1443 = {
            startTime: v1442 + " 00:00:00",
            endTime: v1442 + " 23:59:59"
          };
          const v1444 = new Date(v1442).Format("yyyy");
          const v1445 = new Date(v1442).Format("MM-dd");
          const v1446 = WEEK_NAME[new Date(v1442).getDay()];
          const v1447 = {
            all: {
              value: v1445 + "（" + v1446 + "）",
              year: v1444,
              firstPointName: v1408.pointName,
              lastPointName: v1409.pointName
            }
          };
          let v1448 = await C21.calculateFirstStepRetentionCountByCard({
            card: v1410,
            currDate: v1443,
            groupQuerySql: v1440
          });
          const v1449 = v1448 && v1448.length ? v1448[v1405.WDXjJ(651118, 651118)].count * 1 : 0;
          v1447.allPeople = {
            value: v1449
          };
          for (let v1450 = v1405.SUsXi(827310, 827310); v1405.tVqMX(v1450, v1412.length); v1450++) {
            const v1451 = v1412[v1450];
            const v1452 = new Date(v1405.VWgZH(new Date(v1442).getTime(), v1405.oTdZh(v1451, 24) * 3600 * 1000)).Format("yyyy-MM-dd");
            const v1453 = {
              startTime: v1442 + " 00:00:00",
              endTime: v1442 + " 23:59:59"
            };
            const v1454 = {
              startTime: v1452 + " 00:00:00",
              endTime: v1452 + " 23:59:59"
            };
            const v1455 = await C21.calculateRetentionDataByCard({
              card: v1410,
              currDate: v1453,
              lastDate: v1454,
              groupQuerySql: v1440
            });
            const v1456 = v1455 === v1405.YGaTw(338370, 338370) ? 0 : vRequire3.toFixed(v1405.lcUio(v1455 * 100, v1449), v1405.KbQGv(884211, 884209));
            v1447["day-" + v1451] = {
              value: v1455,
              percentage: v1456
            };
          }
          v1438.children.push(v1447);
          if (v1442 >= _0xe5750d) {
            break;
          }
        }
        v1413.push(v1438);
      }
    }
    let v1457 = [];
    v1412.forEach((p1515, p1516) => {
      let v1458 = "第" + p1515 + "日";
      let v1459 = "day-" + p1515;
      let v1460 = "normal";
      if (p1515 === v1405.YGaTw(210315, 210315)) {
        v1458 = "当日";
      } else if (p1515 === 1) {
        v1458 = "次日";
      }
      v1414.push({
        title: v1458,
        key: v1459,
        type: v1460
      });
      if (!_0x4e2ff9) {
        v1457.push({
          calcTotail: 0,
          calcData: [],
          calcName: v1458,
          dataShowType: dataShowType
        });
        v1416.forEach(p1517 => {
          const {
            date: _0x3b468a,
            chartData: _0x569c2e
          } = p1517;
          v1457[p1516].calcData.push({
            happenDate: _0x3b468a,
            count: _0x569c2e[p1515].count,
            percentage: _0x569c2e[p1515].percentage
          });
        });
      } else {
        v1457.push({
          calcTotail: 0,
          calcData: [],
          calcName: v1458
        });
        let v1461 = 0;
        for (let v1462 = 0; v1405.phQdC(v1462, v1413.length); v1462++) {
          const {
            rowData: _0x27545c,
            children: _0xec973f
          } = v1413[v1462];
          let v1463 = v1405.vzMQQ(988340, 988340);
          _0xec973f.forEach(p1518 => {
            v1463 += p1518["day-" + p1515].value * 1;
          });
          const v1464 = _0x27545c.all.value;
          const v1465 = v1418[v1464];
          const v1466 = v1463 ? vRequire3.toFixed(v1463 * 100 / v1465, 2) : v1405.WDXjJ(717009, 717009);
          const v1467 = v1463 ? vRequire3.toFixed(v1405.KictY(v1463 * 100, v1465), 2) : 0;
          _0x27545c[v1459] = {
            value: v1463,
            percentage: v1467
          };
          v1457[p1516].calcData.push({
            happenDate: v1464,
            count: v1463,
            percentage: v1466
          });
          v1461 += v1463;
        }
        v1457[p1516].calcTotail = v1461;
        v1457[p1516].dataShowType = dataShowType;
      }
    });
    v1415 = v1457;
    return {
      statisticList: v1415,
      columns: v1414,
      result: v1413
    };
  }
  static async handleTempBuryPointCardForRetention(p1519) {
    const {
      id: _0x2f44e8,
      projectId: _0x5800e6,
      pageId: _0x2388f1,
      name: _0x5f3433,
      sort: _0x1c5a68,
      dataGrid: _0x4ebe64,
      type: _0x25fe4b,
      calcRule: _0x5f088a,
      conversionCycle: _0x5e471c,
      groupByFlag: _0x5cb611,
      chartTableShow: _0x3cf656,
      togetherList: _0x1b968d,
      refreshFrequency: _0x2e67fc,
      updatedAt: _0x5da67a,
      alarmStatus: _0x260d3e,
      describe: _0x40313d,
      isShowOnlineCount: _0x594c38
    } = p1519;
    const v1468 = {
      cardId: _0x2f44e8,
      type: _0x25fe4b,
      cardName: _0x5f3433,
      conversionCycle: _0x5e471c,
      groupByFlag: _0x5cb611,
      chartTableShow: _0x3cf656,
      togetherList: _0x1b968d,
      refreshFrequency: _0x2e67fc
    };
    v1468.refreshTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
    v1468.alarmStatus = _0x260d3e;
    v1468.sort = _0x1c5a68;
    v1468.dataGrid = _0x4ebe64 === "undefined" ? "" : _0x4ebe64 || "";
    v1468.describe = _0x40313d;
    v1468.isShowOnlineCount = _0x594c38;
    if (_0x5da67a) {
      v1468.refreshTime = _0x5da67a;
    }
    const v1469 = await C15.handleBuryPointCardRetentionData(p1519);
    const {
      statisticList: _0x4ffc80,
      columns: _0x41dc48,
      result: _0x5068c4
    } = v1469;
    v1468.statisticList = _0x4ffc80;
    v1468.tableData = {
      columns: _0x41dc48,
      result: _0x5068c4
    };
    return v1468;
  }
  static async getTempBuryPointCardList(p1520) {
    const v1470 = {
      LiSab: function (p1521, p1522) {
        return p1521 ^ p1522;
      }
    };
    let v1471 = JSON.parse(p1520.request.body);
    const v1472 = await C15.handleBuryPointCardRetentionData(v1471);
    p1520.response.status = v1470.LiSab(241945, 242129);
    p1520.body = vRequire9.SUCCESS_200("success", v1472);
  }
  static async groupByQuery(p1523) {
    const v1473 = {
      nfDqb: function (p1524, p1525) {
        return p1524 ^ p1525;
      },
      PULaM: function (p1526, p1527) {
        return p1526 ^ p1527;
      },
      yGHpG: "yyyy-MM-dd",
      cqtWl: function (p1528, p1529) {
        return p1528 - p1529;
      },
      pZRpI: function (p1530, p1531) {
        return p1530 + p1531;
      },
      DvqzX: "success"
    };
    let v1474 = JSON.parse(p1523.request.body);
    if (v1474.id) {
      let v1475 = v1474.id;
      let v1476 = v1474.dateValue;
      let v1477 = v1474.queryStartDate;
      let v1478 = v1474.queryEndDate;
      let v1479 = v1474.topValue;
      let v1480;
      let v1481;
      const v1482 = v1473.nfDqb(413287, 409719) * 24 * v1473.PULaM(828129, 827657);
      if (!v1476 && !v1477 && !v1478) {
        v1476 = "7";
      }
      if (v1476) {
        const v1483 = new Date().getTime();
        let v1484 = accountInfo.isOpenTodayStatistic;
        if (v1484) {
          v1480 = new Date(v1483 - parseInt(v1476, 10) * v1482).Format("yyyy-MM-dd");
          v1481 = new Date(v1483).Format(v1473.yGHpG) + " 23:59:59";
        } else {
          v1480 = new Date(v1473.cqtWl(v1483, v1473.pZRpI(parseInt(v1476, 10), 1) * v1482)).Format("yyyy-MM-dd");
          v1481 = new Date(v1483 - v1482).Format(v1473.yGHpG) + " 23:59:59";
        }
      } else {
        v1480 = new Date(new Date(v1477).getTime() - v1482).Format(v1473.yGHpG);
        v1481 = v1473.pZRpI(v1478, " 23:59:59");
      }
      let v1485 = await BuryPointCardModel.detail(v1475);
      let v1486 = await C25.calculateGroupByRealTimeDataByCard(v1485, v1479, v1480, v1481);
      p1523.response.status = 200;
      p1523.body = vRequire9.SUCCESS_200(v1473.DvqzX, v1486);
    } else {
      p1523.response.status = 412;
      p1523.body = vRequire9.ERROR_412("fail！");
    }
  }
  static async export(p1532) {
    const v1487 = {
      jdRbH: function (p1533, p1534) {
        return p1533 ^ p1534;
      },
      kSXUW: function (p1535, p1536) {
        return p1535 === p1536;
      },
      ZUKBA: function (p1537, p1538) {
        return p1537 ^ p1538;
      },
      WukEH: "最大值",
      XvCxt: function (p1539, p1540) {
        return p1539 == p1540;
      },
      KxVKi: function (p1541, p1542) {
        return p1541 ^ p1542;
      },
      rlPvH: function (p1543, p1544) {
        return p1543 < p1544;
      },
      XIvIA: "buryPointCardExport",
      gcZnK: function (p1545, p1546) {
        return p1545 ^ p1546;
      },
      dQSPh: function (p1547, p1548) {
        return p1547 ^ p1548;
      },
      ImjRl: function (p1549, p1550) {
        return p1549 ^ p1550;
      },
      hoWTa: "application/vnd.openxmlformats",
      uoZJd: "Content-Length"
    };
    const v1488 = vRequire3.parseQs(p1532.request.url);
    const {
      id: _0x2ec2ce,
      type: _0x5b1ec5,
      dateValue: _0x5bbd70,
      topValue: _0x3145f7,
      queryStartDate: _0x131dea,
      queryEndDate: _0x492256,
      code = v1487.ZUKBA(579369, 579369)
    } = v1488;
    const v1489 = global.eventInfo.exportRandomNumber.buryPointCardExport;
    if (!v1489 || v1489.code != code) {
      p1532.response.status = 412;
      p1532.body = vRequire9.ERROR_412("导出失败，参数不合法！");
      return;
    }
    delete global.eventInfo.exportRandomNumber[v1487.XIvIA];
    let v_0x131dea = _0x131dea;
    let v_0x492256 = _0x492256;
    const v1490 = await BuryPointCardModel.detail(_0x2ec2ce);
    const v1491 = {
      cardId: _0x2ec2ce,
      type: v1490.type,
      cardName: v1490.name
    };
    let v1492 = [];
    const v1493 = [];
    var v1494 = [];
    v1490.startDate = v_0x131dea;
    v1490.endDate = v_0x492256;
    v1490.topValue = _0x3145f7;
    if (v1490.type && v1487.kSXUW(v1490.type, v1487.gcZnK(953618, 953627))) {
      await C15.convertHeatMapCardStatisticInfo(v1490, v_0x131dea, v_0x492256);
    } else if (v1490.type && v1487.kSXUW(v1490.type, v1487.ZUKBA(187130, 187120))) {
      v1490.calcRule = JSON.parse(v1490.calcRule);
      v1490.keepAnalysisRule = JSON.parse(v1490.keepAnalysisRule);
      v1490.startDate = v_0x131dea;
      v1490.endDate = v_0x492256;
      await C15.handleTempBuryPointCardForRetention(v1490);
    } else if (v1490.type && v1490.type === 12) {
      await C7.analysisCardData(v1490, v_0x131dea, v_0x492256);
    } else if (_0x5b1ec5 === v1487.ZUKBA(235695, 235687)) {
      p1532.response.status = 412;
      p1532.body = vRequire9.ERROR_412("描述类卡片无法导出");
      return;
    } else {
      const v1495 = {
        cardId: v1490.id,
        cardName: v1490.name,
        chartTableShow: v1490.chartTableShow,
        dataGrid: v1490.dataGrid,
        isShowOnlineCount: v1490.isShowOnlineCount
      };
      let v1496 = JSON.parse(v1490.calcRule);
      for (let v1497 = v1487.dQSPh(154957, 154957); v1487.rlPvH(v1497, v1496.length); v1497++) {
        const {
          isRepeat: _0x83ffcf,
          fieldName: _0x2f6a79
        } = v1496[v1497].prePoint.calcField;
        if (v1487.kSXUW(_0x83ffcf, "4") || _0x83ffcf === "5") {
          v1490.groupFields = _0x2f6a79;
          break;
        }
      }
      v1490.topValue = 1;
      let v1498 = await C15.handleDataPreview(v1490);
      const {
        tableData = []
      } = v1498;
      const {
        tableDataList = [],
        title: _0x14abec
      } = tableData;
      const {
        tiled: _0x4da985
      } = _0x14abec;
      _0x4da985.forEach((p1551, p1552) => {
        if (p1551.type === v1487.jdRbH(901786, 901784)) {
          v1494.push(p1551.label);
        }
        if (v1487.kSXUW(p1551.type, v1487.jdRbH(743763, 743762))) {
          v1494.push(p1551.label);
        }
        if (p1551.type === v1487.ZUKBA(500566, 500566)) {
          v1494.push("合计");
          v1494.push("平均值");
          v1494.push(v1487.WukEH);
          v1494.push("最小值");
        }
        if (v1487.XvCxt(p1551.type, v1487.KxVKi(182066, 182065))) {
          v1494.push(p1551.label);
        }
      });
      v1493.push(v1494);
      tableDataList.forEach((p1553, p1554) => {
        var v1499 = [];
        for (let v1500 = v1487.ZUKBA(567478, 567478); v1487.rlPvH(v1500, _0x4da985.length); v1500++) {
          let v1501 = _0x4da985[v1500];
          if (v1501.type === 2) {
            v1499.push(p1553[v1501.field]);
            continue;
          }
          if (v1487.kSXUW(v1501.type, 1)) {
            v1499.push(p1553.calcName);
            continue;
          }
          if (v1501.type === 0) {
            v1499.push(p1553.total);
            v1499.push(p1553.average);
            v1499.push(p1553.max);
            v1499.push(p1553.min);
            continue;
          }
          if (v1501.type == 3) {
            v1499.push(p1553[v1501.label]);
            continue;
          }
        }
        v1493.push(v1499);
      });
    }
    let v1502 = "";
    v1502 = v1490.name + "_" + _0x131dea + "~" + _0x492256 + ".xlsx";
    const v1503 = vRequire2.build([{
      name: "sheet1",
      data: v1493
    }]);
    const v1504 = v1503.length;
    p1532.response.status = v1487.ImjRl(339368, 339296);
    p1532.set("Content-disposition", "attachment; filename=" + encodeURIComponent(v1502));
    p1532.set("Content-type", v1487.hoWTa);
    p1532.set(v1487.uoZJd, v1504);
    p1532.body = v1503;
  }
  static async ["handleExportStatisticData"](p1555, p1556, p1557, p1558, p1559, p1560, p1561, p1562) {
    const v1505 = {
      bvNAb: function (p1563, p1564) {
        return p1563 ^ p1564;
      },
      iFPXz: function (p1565, p1566) {
        return p1565 === p1566;
      },
      MskYl: function (p1567, p1568) {
        return p1567 === p1568;
      }
    };
    let v1506 = [];
    let v1507 = p1557 + "_BuryPointCardStatistics";
    for (let v1508 = v1505.bvNAb(935247, 935247); v1508 < p1556.length; v1508++) {
      let v1509 = [];
      let v1510 = {};
      let v1511 = p1556[v1508];
      let v1512 = v1511.calcType;
      let v1513 = v1511.calcName;
      let v1514 = v1511.calcNameKey;
      let v1515;
      if (v1514) {
        v1515 = await BuryPointCardStatisticsModel.getList(v1507, "", p1558, "", v1514, p1559, p1560);
      }
      p1561.push(v1513);
      let v1516 = 0;
      for (let v1517 = 0; v1517 < p1562.length; v1517++) {
        const v1518 = {
          name: v1513,
          count: 0,
          happenDate: p1562[v1517]
        };
        for (let v1519 = 0; v1519 < v1515.length; v1519++) {
          let v1520 = new Date(v1515[v1519].happenDate).Format("MM-dd");
          if (v1505.iFPXz(v1520, p1562[v1517])) {
            v1518.count = v1515[v1519].count;
            if (p1555 !== 3 || !v1505.MskYl(v1512, "/")) {
              v1516 = parseInt(v1516, 10) + parseInt(v1515[v1519].count, 10);
            }
            if (p1555 === 5) {
              v1518.percentage = v1515[v1519].percentage;
            }
            break;
          }
        }
        v1509.push(v1518);
      }
      v1510.calcTotail = v1516;
      v1510.calcName = v1513;
      v1510.calcType = v1512;
      v1510.calcData = v1509;
      v1506.push(v1510);
    }
    return v1506;
  }
  static async tableDisplay(p1569) {
    const v1521 = {
      mRSxS: function (p1570, p1571) {
        return p1570 * p1571;
      },
      oSDnh: function (p1572, p1573) {
        return p1572 ^ p1573;
      },
      Qcxqh: function (p1574, p1575) {
        return p1574 < p1575;
      },
      nekHq: function (p1576, p1577) {
        return p1576 === p1577;
      },
      orDqQ: function (p1578, p1579) {
        return p1578 * p1579;
      },
      rOSgA: function (p1580, p1581) {
        return p1580 && p1581;
      },
      uCrIX: function (p1582, p1583, p1584) {
        return p1582(p1583, p1584);
      },
      KdkCS: function (p1585, p1586) {
        return p1585 + p1586;
      },
      FflGl: " 23:59:59",
      GIiKk: function (p1587, p1588) {
        return p1587 - p1588;
      },
      wHJZf: function (p1589, p1590) {
        return p1589 ^ p1590;
      },
      PlVlv: "yyyy-MM-dd",
      nywMQ: function (p1591, p1592) {
        return p1591 - p1592;
      },
      bddXk: "success",
      JlaNT: function (p1593, p1594) {
        return p1593 === p1594;
      },
      qRmNP: function (p1595, p1596) {
        return p1595 === p1596;
      },
      ERfkE: function (p1597, p1598) {
        return p1597 < p1598;
      },
      PwerK: function (p1599, p1600) {
        return p1599 == p1600;
      },
      ZMlRu: function (p1601, p1602) {
        return p1601 === p1602;
      }
    };
    const v1522 = {};
    const v1523 = [];
    const v1524 = vRequire3.parseQs(p1569.request.url);
    const {
      id: _0x5818fe,
      pageId: _0x2f7662,
      cardName: _0x1df1d8,
      type: _0x2f778f,
      dateValue: _0x3096c3,
      topValue: _0x9e2c45,
      queryStartDate: _0x317397,
      queryEndDate: _0x27a5ad
    } = v1524;
    let v1525;
    let v1526;
    const v1527 = v1521.orDqQ(24, v1521.oSDnh(508076, 511676)) * 1000;
    if (v1521.rOSgA(!_0x3096c3, !_0x317397) && !_0x27a5ad) {
      _0x3096c3 = "7";
    }
    if (_0x3096c3) {
      const v1528 = new Date().getTime();
      let v1529 = accountInfo.isOpenTodayStatistic;
      if (v1529) {
        v1525 = new Date(v1528 - v1521.uCrIX(parseInt, _0x3096c3, 10) * v1527).Format("yyyy-MM-dd");
        v1526 = v1521.KdkCS(new Date(v1528).Format("yyyy-MM-dd"), v1521.FflGl);
      } else {
        v1525 = new Date(v1521.GIiKk(v1528, (parseInt(_0x3096c3, 10) + v1521.wHJZf(822747, 822746)) * v1527)).Format("yyyy-MM-dd");
        v1526 = new Date(v1528 - v1527).Format(v1521.PlVlv) + " 23:59:59";
      }
    } else {
      v1525 = new Date(v1521.nywMQ(new Date(_0x317397).getTime(), v1527)).Format("yyyy-MM-dd");
      v1526 = _0x27a5ad + " 23:59:59";
    }
    let v1530 = vRequire3.splitDescDate(v1525, v1526);
    const v1531 = await BuryPointCardModel.detail(_0x5818fe);
    if (!v1531) {
      p1569.response.status = v1521.wHJZf(259194, 259250);
      p1569.body = vRequire9.SUCCESS_200(v1521.bddXk, v1522);
      return;
    }
    const v1532 = {
      cardId: _0x5818fe,
      type: v1531.type,
      cardName: v1531.name
    };
    if (v1531.type === 10) {
      p1569.response.status = 200;
      p1569.body = vRequire9.SUCCESS_200("success", v1522);
      return;
    }
    let v1533 = new Map();
    if (v1531.type === 3) {
      let v1534 = JSON.parse(v1531.calcRule);
      for (let v1535 = v1521.wHJZf(448420, 448420); v1521.Qcxqh(v1535, v1534.length); v1535++) {
        let v1536 = v1534[v1535].calcType;
        let v1537 = v1534[v1535].calcName;
        if (v1536 && v1521.JlaNT(v1536, "/")) {
          v1533.set(v1537, "1");
        } else {
          v1533.set(v1537, "0");
        }
      }
    }
    let v1538 = [];
    const v1539 = JSON.parse(v1531.calcRule);
    var v1540 = ["日期"];
    v1540.push("总数");
    if ((v1531.type === 2 || v1531.type === 4 || v1531.type === 7) && v1531.groupByFlag && v1531.groupByFlag === v1521.oSDnh(102745, 102744)) {
      let v1541 = v1538 = await C25.calculateGroupByRealTimeDataByCard(v1531, _0x9e2c45, v1525, v1526);
      v1538 = v1541.statisticList;
    } else if (v1531.type === 5) {
      let v1542 = await C17.calculateFunnelRealTimeDataByCard(v1531, v1525, v1526);
      v1538 = v1542.statisticList;
    } else if (v1521.qRmNP(v1531.type, 10)) {
      v1538 = [];
    } else {
      let v1543 = await C25.calculateRealTimeDataByCard(v1531, v1525, v1526);
      v1538 = v1543.statisticList;
    }
    v1532.statisticList = v1538;
    const v1544 = {
      happenDate: "总体"
    };
    const v1545 = [];
    v1538.forEach((p1603, p1604) => {
      const v1546 = {
        name: p1603.calcName
      };
      v1546.count = v1521.mRSxS(p1603.calcTotail, 1);
      v1546.percentage = p1603.calcTotailRate;
      v1545.push(v1546);
      v1540.push(p1603.calcName);
    });
    v1544.item = v1545;
    v1523.push(v1544);
    v1530.forEach((p1605, p1606) => {
      const v1547 = {
        happenDate: p1605
      };
      const v1548 = [];
      for (let v1549 = 0; v1549 < v1540.length; v1549++) {
        for (let v1550 = 0; v1550 < v1532.statisticList.length; v1550++) {
          const v1551 = v1532.statisticList[v1550];
          if (v1551.calcName === v1540[v1549]) {
            for (let v1552 = v1521.oSDnh(778485, 778485); v1521.Qcxqh(v1552, v1551.calcData.length); v1552++) {
              const v1553 = v1551.calcData[v1552];
              if (v1521.nekHq(v1553.happenDate, p1605)) {
                const v1554 = {
                  name: v1551.calcName
                };
                v1554.count = v1553.count * v1521.oSDnh(712329, 712328);
                if (v1531.type && v1521.nekHq(v1531.type, 5)) {
                  v1554.percentage = v1553.percentage;
                }
                v1548.push(v1554);
              }
            }
          }
        }
      }
      v1547.item = v1548;
      v1523.push(v1547);
    });
    const v1555 = [];
    for (let v1556 = 0; v1556 < v1523.length; v1556++) {
      const v1557 = [];
      const v1558 = v1523[v1556];
      const v1559 = {
        happenDate: v1558.happenDate
      };
      v1557.push(v1559);
      const v1560 = v1558.item;
      const v1561 = {};
      v1561.name = "总数";
      let v1562 = v1521.oSDnh(321163, 321163);
      for (let v1563 = 0; v1521.Qcxqh(v1563, v1560.length); v1563++) {
        const v1564 = v1560[v1563];
        if (v1531.type !== 3 || v1533.get(v1564.name) !== "1") {
          v1562 = v1521.uCrIX(parseInt, v1562, 10) + parseInt(v1564.count, 10);
        }
      }
      v1561.count = v1562 ? v1562 : 0;
      if (v1560[0]) {
        v1561.percentage = v1560[0].percentage;
      }
      v1557.push(v1561);
      for (let v1565 = 0; v1521.ERfkE(v1565, v1560.length); v1565++) {
        const v1566 = v1560[v1565];
        if (v1521.PwerK(v1565, 0) && v1521.JlaNT(v1531.type, 5)) {
          v1566.percentage = 100;
        }
        if (v1531.type === 3 && v1521.ZMlRu(v1533.get(v1566.name), "1")) {
          v1566.count = v1566.count + "%";
        }
        v1557.push(v1566);
      }
      v1555.push(v1557);
    }
    v1522.title = v1540;
    v1522.tableDataList = v1555;
    p1569.response.status = 200;
    p1569.body = vRequire9.SUCCESS_200(v1521.bddXk, v1522);
  }
  static async sort(p1607) {
    const v1567 = {
      iNBiU: function (p1608, p1609) {
        return p1608 ^ p1609;
      }
    };
    let v1568 = JSON.parse(p1607.request.body);
    let v1569 = v1568.id;
    let v1570 = v1568.pageId;
    const {
      nickname: _0x1f44e5
    } = p1607.user;
    v1568.updateBy = _0x1f44e5;
    if (v1568) {
      let v1571 = await BuryPointCardModel.detail(v1569);
      const v1572 = await BuryPointCardModel.getMaxSort(v1570);
      let v1573 = isNaN(v1572[v1567.iNBiU(433981, 433981)].maxSort) || v1572[0].maxSort === 0 ? 1 : v1572[0].maxSort;
      v1568.sort = v1573;
      const v1574 = await BuryPointCardModel.getListByPageIdAndSort(v1570, v1571.id);
      for (let v1575 = v1567.iNBiU(525484, 525484); v1575 < v1574.length; v1575++) {
        v1574[v1575].sort = v1575 + v1567.iNBiU(910409, 910408);
        await BuryPointCardModel.update(v1574[v1575].id, v1574[v1575]);
      }
      await BuryPointCardModel.update(v1569, v1568);
      p1607.response.status = 200;
      p1607.body = vRequire9.SUCCESS_200("置顶成功！", "");
    } else {
      p1607.response.status = 412;
      p1607.body = vRequire9.ERROR_412("置顶失败！");
    }
  }
  static async order(p1610) {
    let v1576 = JSON.parse(p1610.request.body);
    let v1577 = v1576.sortList;
    const {
      nickname: _0x2836ae
    } = p1610.user;
    if (v1576) {
      for (let v1578 = 0; v1578 < v1577.length; v1578++) {
        const v1579 = {
          id: v1577[v1578].cardId,
          sort: v1577[v1578].sort,
          dataGrid: v1577[v1578].dataGrid,
          updateBy: _0x2836ae
        };
        await BuryPointCardModel.update(v1577[v1578].cardId, v1579);
      }
      p1610.response.status = 200;
      p1610.body = vRequire9.SUCCESS_200("success", "");
    } else {
      p1610.response.status = 412;
      p1610.body = vRequire9.ERROR_412("fail！");
    }
  }
  static async ["getList"](p1611) {
    const v1580 = {
      UOttY: function (p1612, p1613) {
        return p1612 === p1613;
      },
      Dxhvo: function (p1614, p1615) {
        return p1614 === p1615;
      },
      llbAU: function (p1616, p1617) {
        return p1616 > p1617;
      },
      UkASI: function (p1618, p1619) {
        return p1618 ^ p1619;
      },
      NLNKk: "success",
      toWGS: function (p1620, p1621) {
        return p1620 === p1621;
      }
    };
    let v1581 = p1611.request.body;
    const v1582 = JSON.parse(v1581);
    const {
      projectId = "",
      sysType = "",
      pageId: _0x3e783b,
      cardName: _0x30019d,
      type: _0x8c667b,
      dateValue: _0x4d2a6b,
      queryStartDate: _0x523fd8,
      queryEndDate: _0x4543f1
    } = v1582;
    let v1583 = [];
    if (!_0x3e783b || v1580.UOttY(_0x3e783b, "") || _0x3e783b === undefined || _0x3e783b === "undefined") {
      p1611.response.status = 200;
      p1611.body = vRequire9.SUCCESS_200("success", v1583);
      return;
    }
    if (projectId && sysType && (sysType === 1 || sysType === "1")) {
      const v1584 = await BuryPointProjectModel.detail(_0x3e783b);
      let v1585 = [];
      for (let v1586 = 0; v1586 < vRequire36.length; v1586++) {
        const v1587 = vRequire36[v1586].pageName;
        if (v1580.Dxhvo(v1587, v1584.name)) {
          v1585 = vRequire36[v1586].statisticData;
          break;
        }
      }
      let v1588 = await BuryPointTemplateModel.getWeKeyByProjectIdAndType(projectId, 3);
      if (v1588 && v1580.llbAU(v1588.length, 0)) {
        for (let v1589 = 0; v1589 < v1588.length; v1589++) {
          const {
            weKey: _0x3c50ae
          } = v1588[v1589];
          if (_0x3c50ae && v1580.Dxhvo(_0x3c50ae, "we-base-bc874f09-1909-872d-0adc-b2d55fad5b43")) {
            v1583 = v1585;
            break;
          }
        }
      }
      p1611.response.status = v1580.UkASI(571507, 571579);
      p1611.body = vRequire9.SUCCESS_200(v1580.NLNKk, v1583);
    } else {
      const v1590 = await BuryPointCardModel.getList(_0x30019d, _0x3e783b, _0x8c667b);
      for (let v1591 = 0; v1591 < v1590.length; v1591++) {
        const v1592 = v1590[v1591];
        if (v1592.groupByFlag && v1592.groupByFlag === 1) {
          v1583.push(await C25.calculateGroupByRealTimeDataByCard(v1592, 1, _0x523fd8, _0x4543f1));
        } else if (v1592.type && v1592.type === v1580.UkASI(484359, 484366)) {
          v1583.push(await C15.convertHeatMapCardStatisticInfo(v1592, _0x523fd8, _0x4543f1));
        } else if (v1592.type && v1592.type === 5) {
          v1583.push(await C17.calculateFunnelRealTimeDataByCard(v1592, _0x523fd8, _0x4543f1));
        } else if (v1592.type && v1580.Dxhvo(v1592.type, 10)) {
          v1592.calcRule = JSON.parse(v1592.calcRule);
          v1592.keepAnalysisRule = JSON.parse(v1592.keepAnalysisRule);
          v1592.startDate = _0x523fd8;
          v1592.endDate = _0x4543f1;
          v1583.push(await C15.handleTempBuryPointCardForRetention(v1592));
        } else if (v1592.type && v1580.toWGS(v1592.type, 12)) {
          v1583.push(await C7.analysisCardData(v1592, _0x523fd8, _0x4543f1));
        } else {
          v1583.push(await C25.calculateRealTimeDataByCard(v1592, _0x523fd8, _0x4543f1));
        }
      }
    }
    p1611.response.status = 200;
    p1611.body = vRequire9.SUCCESS_200("success", v1583);
  }
  static async ["getCardList"](p1622) {
    const v1593 = {
      sDzAh: function (p1623, p1624) {
        return p1623 === p1624;
      },
      LPQCn: "undefined",
      owOOH: "success",
      kymsT: function (p1625, p1626) {
        return p1625 ^ p1626;
      },
      ERjyc: function (p1627, p1628) {
        return p1627 ^ p1628;
      },
      oZqJH: "yyyy-MM-dd hh:mm:ss"
    };
    let v1594 = p1622.request.body;
    const v1595 = JSON.parse(v1594);
    const {
      projectId = "",
      sysType = "",
      pageId: _0x1d2a57,
      cardName: _0x3318c8,
      type: _0x26049a,
      dateValue: _0x1349f2,
      startDate: _0x57835c,
      endDate: _0x32a007
    } = v1595;
    let v1596 = [];
    if (!_0x1d2a57 || v1593.sDzAh(_0x1d2a57, "") || _0x1d2a57 === undefined || _0x1d2a57 === v1593.LPQCn) {
      p1622.response.status = 200;
      p1622.body = vRequire9.SUCCESS_200(v1593.owOOH, v1596);
      return;
    }
    if (projectId && sysType && (sysType === 1 || v1593.sDzAh(sysType, "1"))) {
      const v1597 = await BuryPointProjectModel.detail(_0x1d2a57);
      let v1598 = [];
      for (let v1599 = v1593.kymsT(955639, 955639); v1599 < vRequire36.length; v1599++) {
        const v1600 = vRequire36[v1599].pageName;
        if (v1600 === v1597.name) {
          v1598 = vRequire36[v1599].statisticData;
          break;
        }
      }
      let v1601 = await BuryPointTemplateModel.getWeKeyByProjectIdAndType(projectId, 3);
      if (v1601 && v1601.length > v1593.kymsT(613664, 613664)) {
        for (let v1602 = v1593.ERjyc(830705, 830705); v1602 < v1601.length; v1602++) {
          const {
            weKey: _0x3d6ff5
          } = v1601[v1602];
          if (_0x3d6ff5 && _0x3d6ff5 === "we-base-bc874f09-1909-872d-0adc-b2d55fad5b43") {
            v1596 = v1598;
            break;
          }
        }
      }
      p1622.response.status = 200;
      p1622.body = vRequire9.SUCCESS_200(v1593.owOOH, v1596);
    } else {
      const v1603 = await BuryPointCardModel.getList(_0x3318c8, _0x1d2a57, _0x26049a);
      for (let v1604 = v1593.kymsT(647224, 647224); v1604 < v1603.length; v1604++) {
        const v1605 = v1603[v1604];
        const {
          id: _0x3742d0,
          name: _0x2705c7,
          sort: _0xe18883,
          dataGrid: _0x3a9c80,
          type: _0x542491,
          calcRule: _0x170e50,
          conversionCycle: _0x3bc595,
          groupByFlag: _0x1eed66,
          chartTableShow: _0x120ce3,
          togetherList: _0x4ecdc2,
          refreshFrequency: _0x5ab3ec,
          updatedAt: _0x32a65f,
          alarmStatus: _0x27ccd6,
          describe: _0x4fbbf5,
          isShowOnlineCount: _0x39d6ec
        } = v1605;
        const v1606 = {
          cardId: _0x3742d0,
          type: _0x542491,
          cardName: _0x2705c7,
          conversionCycle: _0x3bc595,
          groupByFlag: _0x1eed66,
          chartTableShow: _0x120ce3,
          togetherList: _0x4ecdc2,
          refreshFrequency: _0x5ab3ec
        };
        v1606.refreshTime = new Date().Format(v1593.oZqJH);
        v1606.alarmStatus = _0x27ccd6;
        v1606.sort = _0xe18883;
        v1606.dataGrid = _0x3a9c80;
        v1606.describe = _0x4fbbf5;
        v1606.calcRule = _0x170e50;
        v1606.isShowOnlineCount = _0x39d6ec;
        if (_0x32a65f) {
          v1606.refreshTime = _0x32a65f;
        }
        v1606.updatedAt = _0x32a65f;
        v1606.statisticList = [];
        v1596.push(v1606);
      }
    }
    p1622.response.status = 200;
    p1622.body = vRequire9.SUCCESS_200("success", v1596);
  }
  static async ["getCardListByIds"](p1629) {
    const v1607 = {
      ORSpH: function (p1630, p1631) {
        return p1630 === p1631;
      },
      QoNke: function (p1632, p1633) {
        return p1632 < p1633;
      },
      bFmgo: function (p1634, p1635) {
        return p1634 ^ p1635;
      },
      VgSqG: "we-base-bc874f09-1909-872d-0adc-b2d55fad5b43",
      GNlcz: function (p1636, p1637) {
        return p1636 < p1637;
      },
      BxKpQ: function (p1638, p1639) {
        return p1638 === p1639;
      },
      aUBsb: function (p1640, p1641) {
        return p1640 === p1641;
      },
      OiwGK: "yyyy-MM-dd hh:mm:ss",
      fQMEA: function (p1642, p1643) {
        return p1642 ^ p1643;
      }
    };
    let v1608 = p1629.request.body;
    const v1609 = JSON.parse(v1608);
    const {
      projectId = "",
      sysType = "",
      pageId: _0x9e003b,
      cardName: _0x57a3b7,
      type: _0x4c5bd4,
      dateValue: _0x259168,
      startDate: _0x592441,
      endDate: _0x100fa5,
      topValue = "1",
      cardIds = []
    } = v1609;
    let v1610 = [];
    if (!_0x9e003b || v1607.ORSpH(_0x9e003b, "") || _0x9e003b === undefined || _0x9e003b === "undefined") {
      p1629.response.status = 200;
      p1629.body = vRequire9.SUCCESS_200("success", v1610);
      return;
    }
    if (projectId && sysType && (sysType === 1 || sysType === "1")) {
      const v1611 = await BuryPointProjectModel.detail(_0x9e003b);
      let v1612 = [];
      for (let v1613 = 0; v1607.QoNke(v1613, vRequire36.length); v1613++) {
        const v1614 = vRequire36[v1613].pageName;
        if (v1607.ORSpH(v1614, v1611.name)) {
          v1612 = vRequire36[v1613].statisticData;
          break;
        }
      }
      let v1615 = await BuryPointTemplateModel.getWeKeyByProjectIdAndType(projectId, 3);
      if (v1615 && v1615.length > v1607.bFmgo(950475, 950475)) {
        for (let v1616 = 0; v1616 < v1615.length; v1616++) {
          const {
            weKey: _0x4119a2
          } = v1615[v1616];
          if (_0x4119a2 && _0x4119a2 === v1607.VgSqG) {
            v1610 = v1612;
            break;
          }
        }
      }
      p1629.response.status = 200;
      p1629.body = vRequire9.SUCCESS_200("success", v1610);
    } else {
      const v1617 = await BuryPointCardModel.getListByIds(cardIds);
      for (let v1618 = 0; v1607.GNlcz(v1618, v1617.length); v1618++) {
        const v1619 = v1617[v1618];
        v1619.startDate = _0x592441;
        v1619.endDate = _0x100fa5;
        v1619.topValue = topValue;
        if (v1619.type && v1619.type === 9) {
          v1610.push(await C15.convertHeatMapCardStatisticInfo(v1619, _0x592441, _0x100fa5));
        } else if (v1619.type && v1619.type === 10) {
          v1619.calcRule = JSON.parse(v1619.calcRule);
          v1619.keepAnalysisRule = JSON.parse(v1619.keepAnalysisRule);
          v1619.startDate = _0x592441;
          v1619.endDate = _0x100fa5;
          v1610.push(await C15.handleTempBuryPointCardForRetention(v1619));
        } else if (v1619.type && v1607.BxKpQ(v1619.type, 12)) {
          v1610.push(await C7.analysisCardData(v1619, _0x592441, _0x100fa5));
        } else if (v1607.aUBsb(_0x4c5bd4, v1607.bFmgo(699421, 699413))) {
          v1619.statisticList = [];
          v1619.tableData = [];
          v1610.push(v1619);
        } else {
          const v1620 = {
            cardId: v1619.id,
            cardName: v1619.name,
            chartTableShow: v1619.chartTableShow,
            dataGrid: v1619.dataGrid,
            isShowOnlineCount: v1619.isShowOnlineCount
          };
          let v1621 = false;
          let v1622 = JSON.parse(v1619.calcRule);
          for (let v1623 = 0; v1623 < v1622.length; v1623++) {
            const {
              isRepeat: _0x343ad0,
              fieldName: _0x1319fb
            } = v1622[v1623].prePoint.calcField;
            if (_0x343ad0 === "4" || _0x343ad0 === "5") {
              v1619.groupFields = _0x1319fb;
              break;
            }
            if (v1619.type === 5) {
              v1621 = v1622[0].sublineFlag ? true : false;
            }
          }
          v1620.sublineFlag = v1621;
          v1620.groupFields = v1619.groupFields;
          v1620.groupByFlag = v1619.groupByFlag;
          v1620.refreshTime = new Date().Format(v1607.OiwGK);
          v1620.statisticList = [];
          v1619.topValue = topValue;
          let v1624 = await C15.handleDataPreview(v1619);
          const {
            statisticData = [],
            tableData = []
          } = v1624;
          v1620.statisticList = statisticData;
          v1620.tableData = tableData;
          v1610.push(v1620);
        }
      }
    }
    C11.addApiCache(p1629.apiCacheKey, v1610);
    p1629.response.status = v1607.fQMEA(965011, 964955);
    p1629.body = vRequire9.SUCCESS_200("success", v1610);
  }
  static async ["getHeatMapPerStatisticData"](p1644) {
    const v1625 = {
      BAihC: function (p1645, p1646) {
        return p1645 ^ p1646;
      },
      UEFIV: function (p1647, p1648) {
        return p1647 ^ p1648;
      },
      lKkap: "yyyy-MM-dd",
      OZRgY: function (p1649, p1650) {
        return p1649 + p1650;
      },
      TuLfe: " 23:59:59",
      oggcy: "success"
    };
    let v1626 = p1644.request.body;
    const {
      webfunnyCardId: _0x35394c,
      webfunnyStartTime = "",
      webfunnyEndTime = ""
    } = v1626;
    if (!_0x35394c) {
      p1644.response.status = v1625.BAihC(632127, 631970);
      p1644.body = vRequire9.ERROR_413("请求参数缺少卡片id");
      return;
    }
    let v1627;
    let v1628;
    const v1629 = v1625.UEFIV(383764, 383756) * 3600 * 1000;
    if (!webfunnyStartTime || !webfunnyEndTime) {
      const v1630 = new Date().getTime();
      v1627 = new Date(v1630 - v1629 * 30).Format(v1625.lKkap);
      v1628 = new Date(v1630).Format("yyyy-MM-dd") + " 23:59:59";
    } else {
      v1627 = new Date(new Date(webfunnyStartTime).getTime()).Format("yyyy-MM-dd");
      v1628 = v1625.OZRgY(webfunnyEndTime, v1625.TuLfe);
    }
    let v1631 = await BuryPointCardModel.detail(_0x35394c);
    const {
      projectId: _0x25c45a,
      calcRule: _0x2dfe0f
    } = v1631;
    const {
      replacePointIdKey: _0x20390a
    } = JSON.parse(_0x2dfe0f);
    const v1632 = await BuryPointWarehouseModel.getWePointIdsByReplacePointIdKey(_0x25c45a, _0x20390a);
    const v1633 = v1632 && v1632.length ? v1632[0].pointId : "";
    let v1634 = [];
    if (v1631) {
      v1634 = await C15.convertHeatMapPerCardStatisticInfo(v1631, v1627, v1628);
    }
    p1644.response.status = v1625.UEFIV(771006, 770934);
    p1644.body = vRequire9.SUCCESS_200(v1625.oggcy, {
      pathList: v1634,
      fe: accountInfo.localAssetsDomain,
      pointId: v1633
    });
  }
  static async getHeatMapValueTimeSlotStatisticData(p1651) {
    const v1635 = {
      NOGtO: "请求参数缺少卡片id",
      sHnPK: function (p1652, p1653) {
        return p1652 * p1653;
      },
      ALQMR: function (p1654, p1655) {
        return p1654 ^ p1655;
      },
      ZFzBm: function (p1656, p1657) {
        return p1656 - p1657;
      },
      hoQoo: function (p1658, p1659) {
        return p1658 ^ p1659;
      },
      wGSoM: function (p1660, p1661) {
        return p1660 === p1661;
      },
      DAjFW: function (p1662, p1663) {
        return p1662 ^ p1663;
      },
      Pgoyk: "success"
    };
    const v1636 = JSON.parse(p1651.request.body);
    const {
      webfunnyCardId: _0x24abfb,
      webfunnyStartTime = "",
      webfunnyEndTime = ""
    } = v1636;
    if (!_0x24abfb) {
      p1651.response.status = 413;
      p1651.body = vRequire9.ERROR_413(v1635.NOGtO);
      return;
    }
    let v1637;
    let v1638;
    const v1639 = v1635.sHnPK(v1635.ALQMR(228381, 228375), v1635.ALQMR(966562, 965706));
    if (!webfunnyStartTime || !webfunnyEndTime) {
      const v1640 = new Date().getTime();
      v1637 = new Date(v1635.ZFzBm(v1640, v1639)).Format("yyyy-MM-dd hh:mm:ss");
      v1638 = new Date(v1640).Format("yyyy-MM-dd hh:mm:ss");
    } else {
      v1637 = new Date(webfunnyStartTime).Format("yyyy-MM-dd hh:mm:ss");
      v1638 = new Date(webfunnyEndTime).Format("yyyy-MM-dd hh:mm:ss");
    }
    let v1641 = await BuryPointCardModel.detail(_0x24abfb);
    let v1642 = [];
    if (v1641) {
      const {
        calcRule: _0x5b04fe
      } = v1641;
      const v1643 = JSON.parse(_0x5b04fe);
      if (v1643) {
        let v1644 = v1643.heatMapType;
        if (v1644 === v1635.hoQoo(569117, 569116) || v1635.wGSoM(v1644, "1")) {
          let v1645 = await C15.convertHeatMapCardStatisticInfo(v1641, v1637, v1638);
          p1651.response.status = 200;
          p1651.body = vRequire9.SUCCESS_200("success", v1645.statisticList);
          return;
        } else if (v1644 === 2 || v1644 === "2") {}
      }
    }
    p1651.response.status = v1635.DAjFW(198023, 197967);
    p1651.body = vRequire9.SUCCESS_200(v1635.Pgoyk, v1642);
  }
  static async ["getPathPage"](p1664) {
    const v1646 = {
      SqCls: function (p1665, p1666) {
        return p1665 ^ p1666;
      },
      Vhpcl: function (p1667, p1668) {
        return p1667 ^ p1668;
      },
      zBGKT: function (p1669, p1670) {
        return p1669 + p1670;
      },
      cDneh: function (p1671, p1672) {
        return p1671 + p1672;
      },
      URQCW: ", count(id) as count,count(DISTINCT weCustomerKey) as userCount from ",
      dTuOa: function (p1673, p1674) {
        return p1673 * p1674;
      },
      PaxMJ: " group by ",
      YQNNb: "success"
    };
    let v1647 = p1664.request.body;
    const v1648 = JSON.parse(v1647);
    const {
      projectId: _0x50a8c5,
      page = v1646.SqCls(110592, 110593),
      pageSize = 10,
      pageType = "wePath",
      replacePointIdKey = "HeatMapClickPointIdKey"
    } = v1648;
    if (!_0x50a8c5) {
      p1664.response.status = 413;
      p1664.body = vRequire9.ERROR_413("请求参数缺少项目id");
      return;
    }
    let v1649;
    let v1650;
    let v1651 = await BuryPointWarehouseModel.getReplacePointIdKey(_0x50a8c5, replacePointIdKey);
    if (v1651 && v1651.length > v1646.Vhpcl(248692, 248692)) {
      const v1652 = v1646.zBGKT(v1646.zBGKT(_0x50a8c5, "_"), v1651[0].pointId);
      let v1653 = v1646.cDneh(v1646.cDneh("select weTitle," + pageType, v1646.URQCW), v1652) + " where 1=1 ";
      v1653 = v1653 + " group by weTitle," + pageType + " order by userCount desc ";
      const v1654 = v1646.dTuOa(page - 1, pageSize);
      const v1655 = " limit " + v1654 + "," + pageSize + " ";
      v1653 = v1653 + v1655;
      v1649 = await C21.getCountByTableName(v1653);
      let v1656 = v1646.zBGKT("select count(1) as count from (select " + pageType + ", count(id) as count, count(DISTINCT weCustomerKey) as uv from ", v1652) + " where 1=1 ";
      v1656 = v1656 + v1646.PaxMJ + pageType + ")";
      let v1657 = await C21.getCountByTableName(v1656);
      v1650 = v1657 ? v1657[0].count : 0;
    }
    p1664.response.status = 200;
    p1664.body = vRequire9.SUCCESS_200(v1646.YQNNb, {
      list: v1649,
      total: v1650
    });
  }
  static async getPageWidthList(p1675) {
    const v1658 = {
      pxCOf: function (p1676, p1677) {
        return p1676 ^ p1677;
      },
      pAsZn: function (p1678, p1679) {
        return p1678 + p1679;
      },
      xkbxn: function (p1680, p1681) {
        return p1680 + p1681;
      },
      HtQgW: function (p1682, p1683) {
        return p1682 + p1683;
      },
      XgBiR: "success"
    };
    let v1659 = p1675.request.body;
    const v1660 = JSON.parse(v1659);
    const {
      projectId: _0x5c834d,
      pageUrl = "",
      pageType = "wePath",
      replacePointIdKey = "HeatMapClickPointIdKey"
    } = v1660;
    if (!_0x5c834d) {
      p1675.response.status = 413;
      p1675.body = vRequire9.ERROR_413("请求参数缺少项目id");
      return;
    }
    let v1661;
    let v1662 = await BuryPointWarehouseModel.getReplacePointIdKey(_0x5c834d, replacePointIdKey);
    if (v1662 && v1662.length > 0) {
      const v1663 = _0x5c834d + "_" + v1662[v1658.pxCOf(230489, 230489)].pointId;
      let v1664 = v1658.pAsZn(v1658.pAsZn("select weScrollWidth, count(id) as count,count(DISTINCT weCustomerKey) as userCount from ", v1663), " where 1=1 ");
      if (pageUrl) {
        v1664 = v1658.xkbxn(v1658.pAsZn(v1664 + " and ", pageType), "='") + pageUrl + "'";
      }
      v1664 = v1658.HtQgW(v1664, " group by weScrollWidth order by count desc limit 10 ");
      v1661 = await C21.getCountByTableName(v1664);
    }
    p1675.response.status = v1658.pxCOf(782659, 782731);
    p1675.body = vRequire9.SUCCESS_200(v1658.XgBiR, v1661);
  }
  static async getListByPageIdAndName(p1684) {
    const v1665 = {
      yzZvj: function (p1685, p1686) {
        return p1685 ^ p1686;
      }
    };
    let v1666 = p1684.request.body;
    const v1667 = JSON.parse(v1666);
    const {
      pageId: _0x19562c,
      cardName: _0x1408f0
    } = v1667;
    if (!_0x19562c || _0x19562c === "" || _0x19562c === undefined) {
      p1684.response.status = v1665.yzZvj(597422, 597042);
      p1684.body = vRequire9.ERROR_412("页面id必传");
      return;
    }
    const v1668 = await BuryPointCardModel.getListByPageIdAndNameAndType(_0x1408f0, _0x19562c, "");
    let v1669 = [];
    for (let v1670 = 0; v1670 < v1668.length; v1670++) {
      const v1671 = {
        cardId: v1668[v1670].id,
        sort: v1668[v1670].sort,
        cardName: v1668[v1670].name,
        createdAt: v1668[v1670].createdAt
      };
      v1669.push(v1671);
    }
    p1684.response.status = v1665.yzZvj(844404, 844476);
    p1684.body = vRequire9.SUCCESS_200("success", v1669);
  }
  static async calcFunnelConversionRate(p1687) {
    const v1672 = {
      ShffX: function (p1688, p1689) {
        return p1688 - p1689;
      },
      PcZwR: function (p1690, p1691) {
        return p1690 ^ p1691;
      },
      HgTjQ: function (p1692, p1693) {
        return p1692 + p1693;
      },
      pvmCr: function (p1694, p1695, p1696) {
        return p1694(p1695, p1696);
      },
      tFHIH: function (p1697, p1698) {
        return p1697 !== p1698;
      },
      WtRKH: function (p1699, p1700, p1701) {
        return p1699(p1700, p1701);
      },
      rrSCM: function (p1702, p1703) {
        return p1702 ^ p1703;
      },
      trDKk: function (p1704, p1705) {
        return p1704 + p1705;
      },
      sEiic: function (p1706, p1707) {
        return p1706 * p1707;
      },
      VFrMS: function (p1708, p1709) {
        return p1708 / p1709;
      },
      towqF: function (p1710, p1711) {
        return p1710 ^ p1711;
      },
      hnhZw: function (p1712, p1713) {
        return p1712 ^ p1713;
      },
      ASCRe: function (p1714, p1715) {
        return p1714 ^ p1715;
      },
      gYKJe: function (p1716, p1717) {
        return p1716 ^ p1717;
      },
      AdggQ: function (p1718, p1719) {
        return p1718 === p1719;
      },
      CPSzL: function (p1720, p1721) {
        return p1720 ^ p1721;
      },
      knLce: function (p1722, p1723) {
        return p1722 ^ p1723;
      },
      oZyKW: function (p1724, p1725) {
        return p1724 ^ p1725;
      },
      VfxrA: function (p1726, p1727) {
        return p1726 ^ p1727;
      }
    };
    p1687.sort(function (p1728, p1729) {
      return v1672.ShffX(p1728.fieldIndex, p1729.fieldIndex);
    });
    let v1673 = v1672.PcZwR(387095, 387095);
    for (let v1674 = 0; v1674 < p1687.length; v1674++) {
      v1673 = v1672.HgTjQ(v1672.pvmCr(parseInt, v1673, 10), parseInt(p1687[v1674].calcTotail, v1672.PcZwR(227041, 227051)));
      if (v1672.tFHIH(v1674, p1687.length - 1)) {
        if (v1672.WtRKH(parseInt, p1687[v1674].calcTotail, v1672.PcZwR(334715, 334705)) === v1672.rrSCM(470347, 470347)) {
          p1687[v1672.trDKk(v1674, 1)].calcTotailRate = 0;
        } else {
          let v1675 = vRequire3.toFixed(v1672.sEiic(v1672.VFrMS(parseInt(p1687[v1674 + v1672.rrSCM(600897, 600896)].calcTotail, 10), parseInt(p1687[v1674].calcTotail, 10)), v1672.towqF(972064, 972100)), 2);
          p1687[v1674 + 1].calcTotailRate = v1675 ? v1675 : v1672.hnhZw(526313, 526313);
        }
        let v1676 = p1687[v1674].calcData;
        for (let v1677 = 0; v1677 < v1676.length; v1677++) {
          let v1678 = v1676[v1677];
          if (parseInt(v1678.count, v1672.hnhZw(281514, 281504)) === 0) {
            v1678.percentage = v1672.ASCRe(193001, 193001);
            continue;
          }
          let v1679 = p1687[v1674 + 1].calcData;
          for (let v1680 = 0; v1680 < v1679.length; v1680++) {
            if (v1678.happenDate === v1679[v1680].happenDate) {
              let v1681 = vRequire3.toFixed(parseInt(v1679[v1680].count, 10) / parseInt(v1678.count, 10) * v1672.gYKJe(663964, 664056), 2);
              v1679[v1680].percentage = v1681 ? v1681 : 0;
              break;
            }
          }
        }
      }
    }
    if (v1672.AdggQ(v1673, 0)) {
      p1687[0].calcTotailRate = v1672.hnhZw(438766, 438766);
    } else {
      let v1682 = vRequire3.toFixed(parseInt(p1687[v1672.ShffX(p1687.length, 1)].calcTotail, v1672.ASCRe(830394, 830384)) / parseInt(p1687[0].calcTotail, v1672.ASCRe(979216, 979226)) * 100, 2);
      p1687[v1672.CPSzL(582003, 582003)].calcTotailRate = v1682 ? v1682 : v1672.CPSzL(123749, 123749);
      let v1683 = p1687[0].calcData;
      for (let v1684 = 0; v1684 < v1683.length; v1684++) {
        let v1685 = v1683[v1684];
        if (parseInt(v1685.count, 10) === v1672.knLce(289883, 289883)) {
          v1685.percentage = v1672.oZyKW(579832, 579832);
          continue;
        }
        let v1686 = p1687[p1687.length - v1672.towqF(898449, 898448)].calcData;
        for (let v1687 = 0; v1687 < v1686.length; v1687++) {
          if (v1685.happenDate === v1686[v1687].happenDate) {
            let v1688 = vRequire3.toFixed(parseInt(v1686[v1687].count, 10) / parseInt(v1685.count, v1672.PcZwR(494755, 494761)) * v1672.towqF(631911, 631811), 2);
            v1685.percentage = v1688 ? v1688 : v1672.VfxrA(756938, 756938);
            break;
          }
        }
      }
    }
  }
  static async convertFunnelConversionRate(p1730) {
    const v1689 = {
      dpUEB: function (p1731, p1732) {
        return p1731 < p1732;
      },
      OqECq: function (p1733, p1734) {
        return p1733 === p1734;
      }
    };
    for (let v1690 = 0; v1690 < p1730.length; v1690++) {
      let v1691 = p1730[v1690].calcData;
      let v1692 = [];
      for (let v1693 = 0; v1689.dpUEB(v1693, v1691.length); v1693++) {
        let v1694 = v1691[v1693];
        let v1695 = {};
        if (!v1694.percentage || v1689.OqECq(v1694.percentage, "") || v1689.OqECq(v1694.percentage, undefined)) {
          v1695.count = 0;
        } else {
          v1695.count = v1694.percentage;
        }
        v1695.happenDate = v1694.happenDate;
        v1692.push(v1695);
      }
      p1730[v1690].calcData = v1692;
    }
  }
  static async convertCardStatisticInfo(p1735, p1736, p1737) {
    const v1696 = {
      dUVlW: "yyyy-MM-dd hh:mm:ss",
      gNkxL: function (p1738, p1739) {
        return p1738 < p1739;
      },
      geWHO: function (p1740, p1741) {
        return p1740 === p1741;
      },
      Nqkwt: function (p1742, p1743) {
        return p1742 ^ p1743;
      }
    };
    let v1697 = vRequire3.splitDate(p1736, p1737);
    const {
      id: _0xc680cf,
      projectId: _0x27482d,
      pageId: _0x277ff8,
      name: _0x3b0a60,
      sort: _0x53f6fb,
      dataGrid: _0x329139,
      type: _0x3382ef,
      calcRule: _0x3955d4,
      conversionCycle: _0x49087f,
      groupByFlag: _0xddcd2c,
      chartTableShow: _0x76619d,
      togetherList: _0x573cab,
      refreshFrequency: _0x4597c7,
      updatedAt: _0x599a74,
      alarmStatus: _0x54b54d,
      describe: _0x220137
    } = p1735;
    const v1698 = {
      cardId: _0xc680cf,
      type: _0x3382ef,
      cardName: _0x3b0a60,
      conversionCycle: _0x49087f,
      groupByFlag: _0xddcd2c,
      chartTableShow: _0x76619d,
      togetherList: _0x573cab,
      refreshFrequency: _0x4597c7
    };
    v1698.refreshTime = new Date().Format(v1696.dUVlW);
    v1698.alarmStatus = _0x54b54d;
    v1698.sort = _0x53f6fb;
    v1698.dataGrid = _0x329139;
    v1698.describe = _0x220137;
    if (_0x599a74) {
      v1698.refreshTime = _0x599a74;
    }
    let v1699 = [];
    const v1700 = JSON.parse(_0x3955d4);
    const v1701 = _0x27482d + "_BuryPointCardStatistics";
    for (let v1702 = 0; v1696.gNkxL(v1702, v1700.length); v1702++) {
      let v1703 = {};
      let v1704 = v1700[v1702];
      let v1705 = v1704.calcType;
      let v1706 = v1704.calcName;
      let v1707 = v1704.unit;
      let v1708 = v1704.calcNameKey;
      let v1709 = v1704.prePoint;
      let v1710 = v1709.calcField;
      let v1711 = v1710.fieldIndex;
      let v1712 = [];
      if (v1708) {
        v1712 = await BuryPointCardStatisticsModel.getList(v1701, _0x277ff8, _0xc680cf, "", v1708, p1736, p1737);
      }
      await C15.convertStatisticList(v1703, v1697, v1712);
      v1703.fieldIndex = v1711;
      v1703.calcName = v1706;
      v1703.unit = v1707;
      v1703.calcType = v1705;
      v1699.push(v1703);
    }
    if (_0x3382ef && v1696.geWHO(_0x3382ef, v1696.Nqkwt(749125, 749120))) {
      await C15.calcFunnelConversionRate(v1699);
      await C15.convertFunnelConversionRate(v1699);
    }
    v1698.statisticList = v1699;
    return v1698;
  }
  static async convertHeatMapCardStatisticInfo(p1744, p1745, p1746) {
    const v1713 = {
      jtRKQ: function (p1747, p1748) {
        return p1747 ^ p1748;
      },
      aVsaQ: function (p1749, p1750) {
        return p1749 * p1750;
      },
      irbyL: "HeatMapStopPointId",
      xyrOR: function (p1751, p1752) {
        return p1751 + p1752;
      },
      HBUsR: function (p1753, p1754) {
        return p1753 + p1754;
      },
      zuEnP: " where 1=1 ",
      HdbqB: " = '",
      paRGm: function (p1755, p1756) {
        return p1755 ^ p1756;
      },
      wqnIg: function (p1757, p1758) {
        return p1757 + p1758;
      },
      XwuFX: " and happenTime >= '",
      bzgpH: " and happenTime <= '"
    };
    const {
      id: _0x520990,
      projectId: _0x224f28,
      pageId: _0x10b464,
      name: _0x2c2b08,
      sort: _0x8bd61,
      dataGrid: _0x5a5af3,
      type: _0x17cf3f,
      calcRule: _0x2aa65f,
      conversionCycle: _0x4e101a,
      groupByFlag: _0x357325,
      chartTableShow: _0x2843b2,
      togetherList: _0x3b9f68,
      refreshFrequency: _0x1857fb,
      updatedAt: _0x4c5d40,
      alarmStatus: _0x22f583,
      describe: _0x473db1,
      isShowOnlineCount: _0x31dd90
    } = p1744;
    const v1714 = {};
    const v1715 = p1745.length === 10 ? p1745 + " 00:00:00" : p1745;
    const v1716 = p1746.length === 10 ? p1746 + " 23:59:59" : p1746;
    v1714.cardId = _0x520990;
    v1714.type = _0x17cf3f;
    v1714.cardName = _0x2c2b08;
    v1714.conversionCycle = _0x4e101a;
    v1714.groupByFlag = _0x357325;
    v1714.chartTableShow = _0x2843b2;
    v1714.togetherList = _0x3b9f68;
    v1714.refreshFrequency = _0x1857fb;
    v1714.refreshTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
    v1714.alarmStatus = _0x22f583;
    v1714.sort = _0x8bd61;
    v1714.dataGrid = _0x5a5af3;
    v1714.describe = _0x473db1;
    v1714.calcRule = _0x2aa65f;
    v1714.isShowOnlineCount = _0x31dd90;
    if (_0x4c5d40) {
      v1714.refreshTime = _0x4c5d40;
    }
    const v1717 = JSON.parse(_0x2aa65f);
    let v1718 = [];
    if (v1717) {
      let v1719 = v1717.heatMapType;
      if (v1719 === v1713.jtRKQ(806731, 806730) || v1719 === "1") {
        let v1720 = v1717.pageType;
        let v1721 = v1717.pageUrl;
        let v1722 = v1713.aVsaQ(v1717.pageWidth, 1);
        let v1723 = v1717.replacePointIdKey;
        let v1724 = await BuryPointWarehouseModel.getReplacePointIdKey(_0x224f28, v1723);
        if (v1724 && v1724.length > 0) {
          const v1725 = _0x224f28 + "_" + v1724[0].pointId;
          let v1726 = "select wePageX as x,wePageY as y,";
          if (v1723 === v1713.irbyL) {
            v1726 = v1726 + " sum(stayTime) ";
          } else {
            v1726 = v1726 + " count(id) ";
          }
          v1726 = v1713.xyrOR(v1713.HBUsR(v1726, " as value from "), v1725) + v1713.zuEnP;
          if (v1721) {
            v1726 = v1726 + " and " + v1720 + v1713.HdbqB + v1721 + "'";
          }
          if (v1722) {
            v1726 = v1726 + (" and weScrollWidth >= " + (v1722 - v1713.paRGm(682242, 682248)) + " and weScrollWidth <= " + v1713.HBUsR(v1722, 10) + " ");
          }
          if (p1745) {
            v1726 = v1713.wqnIg(v1713.wqnIg(v1726 + v1713.XwuFX, v1715), "'");
          }
          if (p1746) {
            v1726 = v1713.xyrOR(v1713.HBUsR(v1726, v1713.bzgpH) + v1716, "'");
          }
          v1726 = v1726 + " group by wePageX,wePageY ";
          v1718 = await C21.getCountByTableName(v1726);
        }
      } else {}
    }
    v1714.statisticList = v1718;
    return v1714;
  }
  static async ["convertHeatMapPerCardStatisticInfo"](p1759, p1760, p1761) {
    const v1727 = {
      CGRdV: function (p1762, p1763) {
        return p1762 + p1763;
      },
      VFAps: function (p1764, p1765) {
        return p1764 === p1765;
      },
      nzhYp: "HeatMapStopPointId",
      Rkeik: " sum(stayTime) as count ",
      FfrWj: " where 1=1 ",
      qifJu: " and ",
      dFBUc: " and happenTime <= '",
      hwIMU: function (p1766, p1767) {
        return p1766 ^ p1767;
      },
      CAfgQ: function (p1768, p1769) {
        return p1768 ^ p1769;
      },
      yxDue: function (p1770, p1771) {
        return p1770 - p1771;
      },
      SmSXK: function (p1772, p1773, p1774) {
        return p1772(p1773, p1774);
      },
      LXdql: function (p1775, p1776) {
        return p1775 > p1776;
      },
      sfyTL: function (p1777, p1778, p1779) {
        return p1777(p1778, p1779);
      },
      iKZhY: function (p1780, p1781) {
        return p1780 ^ p1781;
      },
      ylGmT: function (p1782, p1783) {
        return p1782 ^ p1783;
      }
    };
    const {
      projectId: _0x545b45,
      calcRule: _0x36a6d4
    } = p1759;
    const v1728 = JSON.parse(_0x36a6d4);
    let v1729 = [];
    if (v1728) {
      let v1730 = v1728.pageType;
      let v1731 = v1728.pageUrl;
      let v1732 = v1728.pageWidth;
      let v1733 = v1728.replacePointIdKey;
      let v1734 = v1728.heatMapType;
      let v1735 = await BuryPointWarehouseModel.getReplacePointIdKey(_0x545b45, v1733);
      if (v1735 && v1735.length > 0) {
        const v1736 = v1727.CGRdV(_0x545b45 + "_", v1735[0].pointId);
        let v1737 = "select weXPath as xPath,";
        if (v1727.VFAps(v1733, v1727.nzhYp)) {
          v1737 = v1737 + v1727.Rkeik;
        } else {
          v1737 = v1737 + " count(id) as count, count(distinct weCustomerKey) as userCount ";
        }
        v1737 = v1737 + " from " + v1736 + v1727.FfrWj;
        if (v1731) {
          v1737 = v1737 + v1727.qifJu + v1730 + " = '" + v1731 + "'";
        }
        if (p1760) {
          v1737 = v1737 + " and happenTime > '" + p1760 + "'";
        }
        if (p1761) {
          v1737 = v1737 + v1727.dFBUc + p1761 + "'";
        }
        v1737 = v1737 + " group by weXPath order by count desc ";
        let v1738 = await C21.getCountByTableName(v1737);
        if (v1738 && v1738.length > 0) {
          let v1739 = 0;
          for (let v1740 = v1727.hwIMU(359803, 359803); v1740 < v1738.length; v1740++) {
            v1739 = v1739 + parseInt(v1738[v1740].count, 10);
          }
          for (let v1741 = 0; v1741 < v1738.length; v1741++) {
            let v1742 = v1738[v1741].xPath;
            let v1743 = v1738[v1741].count;
            let v1744 = v1738[v1741].userCount;
            const v1745 = {};
            v1745.count = isNaN(v1743) ? 0 : v1743;
            if (v1742.length > 100) {
              let v1746 = "";
              v1746 = v1742.substring(v1727.hwIMU(754154, 754154), 50) + "..." + v1742.substring(v1742.length - v1727.CAfgQ(323243, 323225), v1727.yxDue(v1742.length, 1));
              v1742 = v1746;
            }
            v1745.xPath = v1742;
            v1745.userCount = v1744;
            v1745.percentage = vRequire3.toFixed(parseInt(v1743, 10) / v1727.SmSXK(parseInt, v1739, 10) * v1727.hwIMU(949514, 949614), 2);
            if (v1727.LXdql(v1727.sfyTL(parseInt, v1745.percentage, v1727.iKZhY(652582, 652588)), v1727.ylGmT(256699, 256735))) {
              v1745.percentage = v1727.ylGmT(418994, 419030);
            }
            v1729.push(v1745);
          }
        }
      }
    }
    return v1729;
  }
  static async ["convertGroupByCardStatisticInfo"](p1784, p1785, p1786, p1787) {
    const v1747 = {
      qgMHC: "yyyy-MM-dd hh:mm:ss"
    };
    let v1748 = vRequire3.splitDate(p1786, p1787);
    const {
      id: _0x317d1d,
      projectId: _0x47d3c4,
      pageId: _0x302cf3,
      name: _0x2cd0cb,
      sort: _0x428188,
      dataGrid: _0x19547f,
      type: _0x62be89,
      updatedAt: _0x5940a1,
      conversionCycle: _0xa6b4bd,
      groupByFlag: _0x468440,
      chartTableShow: _0x3482d8,
      togetherList: _0x45bc3f,
      refreshFrequency: _0x52845f,
      alarmStatus: _0x531032,
      describe: _0x815f56
    } = p1784;
    const v1749 = {
      cardId: _0x317d1d,
      type: _0x62be89,
      cardName: _0x2cd0cb,
      describe: _0x815f56,
      conversionCycle: _0xa6b4bd,
      groupByFlag: _0x468440,
      chartTableShow: _0x3482d8,
      togetherList: _0x45bc3f,
      refreshFrequency: _0x52845f
    };
    v1749.refreshTime = new Date().Format(v1747.qgMHC);
    v1749.alarmStatus = _0x531032;
    v1749.sort = _0x428188;
    v1749.dataGrid = _0x19547f;
    v1749.describe = _0x815f56;
    if (_0x5940a1) {
      v1749.refreshTime = _0x5940a1;
    }
    let v1750 = [];
    v1749.statisticList = await C15.getGroupByCardStatistic(_0x317d1d, _0x47d3c4, _0x302cf3, p1785, v1750, v1748, p1786, p1787);
    return v1749;
  }
  static async ["getGroupByCardStatistic"](p1788, p1789, p1790, p1791, p1792, p1793, p1794, p1795) {
    const v1751 = {
      pqzii: function (p1796, p1797) {
        return p1796 + p1797;
      },
      vUqrZ: function (p1798, p1799) {
        return p1798 ^ p1799;
      },
      CsZNb: function (p1800, p1801) {
        return p1800 < p1801;
      }
    };
    let v1752 = v1751.pqzii(p1789, "_BuryPointCardStatistics");
    let v1753 = [];
    let v1754 = await BuryPointCardStatisticsModel.getGroupByTopList(v1752, p1790, p1788, p1791, p1794, p1795);
    for (let v1755 = v1751.vUqrZ(851967, 851967); v1751.CsZNb(v1755, v1754.length); v1755++) {
      let v1756 = {};
      let v1757 = v1754[v1755];
      const {
        calcField: _0x5a48cc
      } = v1757;
      p1792.push(_0x5a48cc);
      let v1758 = await BuryPointCardStatisticsModel.getGroupByList(v1752, p1790, p1788, _0x5a48cc, p1794, p1795);
      await C15.convertStatisticList(v1756, p1793, v1758);
      v1756.fieldIndex = v1755;
      v1756.calcName = _0x5a48cc;
      v1753.push(v1756);
    }
    return v1753;
  }
  static async convertStatisticList(p1802, p1803, p1804) {
    const v1759 = {
      TcqLo: function (p1805, p1806) {
        return p1805 < p1806;
      },
      GgPhi: function (p1807, p1808) {
        return p1807(p1808);
      },
      IpMfn: function (p1809, p1810) {
        return p1809 ^ p1810;
      }
    };
    let v1760 = [];
    let v1761 = 0;
    for (let v1762 = 0; v1762 < p1803.length; v1762++) {
      const v1763 = {
        count: 0,
        happenDate: p1803[v1762]
      };
      for (let v1764 = 0; v1759.TcqLo(v1764, p1804.length); v1764++) {
        let v1765 = new Date(p1804[v1764].happenDate).Format("MM-dd");
        if (v1765 === p1803[v1762]) {
          v1761 += v1759.GgPhi(parseFloat, p1804[v1764].count);
          v1763.count = parseFloat(p1804[v1764].count);
          break;
        }
      }
      v1760.push(v1763);
    }
    p1802.calcTotail = v1761 ? v1761 : v1759.IpMfn(612402, 612402);
    p1802.calcData = v1760;
    return p1802;
  }
  static async calcConversionCycleData(p1811, p1812) {
    const v1766 = {
      yfJWR: function (p1813, p1814) {
        return p1813 < p1814;
      },
      zrPDi: function (p1815, p1816) {
        return p1815 ^ p1816;
      },
      TXhNP: function (p1817, p1818) {
        return p1817 < p1818;
      },
      NYjRB: function (p1819, p1820) {
        return p1819 + p1820;
      },
      RsVhA: function (p1821, p1822, p1823) {
        return p1821(p1822, p1823);
      },
      yPvfN: function (p1824, p1825) {
        return p1824 ^ p1825;
      }
    };
    let v1767 = [];
    for (let v1768 = 0; v1766.yfJWR(v1768, p1812.length); v1768++) {
      let v1769 = p1812[v1768];
      let v1770 = v1766.zrPDi(654796, 654796);
      for (let vV1768 = v1768; v1766.TXhNP(vV1768, v1766.NYjRB(v1768, p1811)); vV1768++) {
        if (vV1768 >= p1812.length) {
          v1770 = parseInt(v1770, 10) + v1766.RsVhA(parseInt, 0, 10);
        } else {
          v1770 = parseInt(v1770, v1766.yPvfN(962801, 962811)) + parseInt(p1812[vV1768].count, v1766.yPvfN(821341, 821335));
        }
      }
      v1769.count = v1770 ? v1770 : v1766.zrPDi(798612, 798612);
      v1767.push(v1769);
    }
    return v1767;
  }
  static async ["getFunnelEveryDayStatisticList"](p1826) {
    const v1771 = {
      lkDKd: function (p1827, p1828) {
        return p1827 * p1828;
      },
      FwbgB: function (p1829, p1830) {
        return p1829 * p1830;
      },
      DxYKR: function (p1831, p1832, p1833) {
        return p1831(p1832, p1833);
      },
      ZnUVN: function (p1834, p1835) {
        return p1834 ^ p1835;
      },
      GoWbx: "yyyy-MM-dd",
      UEgjM: function (p1836, p1837) {
        return p1836 + p1837;
      }
    };
    let v1772 = p1826.request.body;
    const v1773 = JSON.parse(v1772);
    const {
      id: _0xd5dc77,
      pageId: _0x528252,
      cardName: _0x5badf5,
      type: _0x559c1c,
      dateValue: _0x1d729e,
      topValue: _0x21566d,
      queryStartDate: _0x314ca9,
      queryEndDate: _0x212db3
    } = v1773;
    let v1774;
    let v1775;
    const v1776 = v1771.lkDKd(v1771.lkDKd(24, 3600), 1000);
    if (!_0x1d729e && !_0x314ca9 && !_0x212db3) {
      _0x1d729e = "30";
    }
    if (_0x1d729e) {
      const v1777 = new Date().getTime();
      let v1778 = accountInfo.isOpenTodayStatistic;
      if (v1778) {
        v1774 = new Date(v1777 - v1771.FwbgB(v1771.DxYKR(parseInt, _0x1d729e, 10), v1776)).Format("yyyy-MM-dd");
        v1775 = new Date(v1777).Format("yyyy-MM-dd") + " 23:59:59";
      } else {
        v1774 = new Date(v1777 - (parseInt(_0x1d729e, v1771.ZnUVN(168333, 168327)) + 1) * v1776).Format(v1771.GoWbx);
        v1775 = new Date(v1777 - v1776).Format("yyyy-MM-dd") + " 23:59:59";
      }
    } else {
      v1774 = new Date(new Date(_0x314ca9).getTime() - v1776).Format("yyyy-MM-dd");
      v1775 = v1771.UEgjM(_0x212db3, " 23:59:59");
    }
    const v1779 = await BuryPointCardModel.detail(_0xd5dc77);
    let v1780 = await C17.calculateFunnelEveryDayRealTimeData(v1779, v1774, v1775);
    p1826.response.status = 200;
    p1826.body = vRequire9.SUCCESS_200("success", v1780);
  }
  static async ["getRealOnlineCount"](p1838) {
    const v1781 = {
      IEmaw: function (p1839, p1840) {
        return p1839 ^ p1840;
      },
      cDyIR: "请求参数缺少时间",
      Lhhbm: function (p1841, p1842) {
        return p1841 ^ p1842;
      }
    };
    let v1782 = p1838.request.body;
    const v1783 = JSON.parse(v1782);
    const {
      projectId: _0x5b01f3,
      times: _0x51fa3a
    } = v1783;
    if (!_0x5b01f3) {
      p1838.response.status = 413;
      p1838.body = vRequire9.ERROR_413("请求参数缺少项目id");
      return;
    }
    if (!_0x51fa3a) {
      p1838.response.status = v1781.IEmaw(694176, 693821);
      p1838.body = vRequire9.ERROR_413(v1781.cDyIR);
      return;
    }
    let v1784;
    let v1785;
    const v1786 = new Date().getTime();
    v1784 = new Date(v1786 - parseInt(_0x51fa3a, 10) * 1000).Format("yyyy-MM-dd hh:mm:ss");
    v1785 = new Date(v1786).Format("yyyy-MM-dd hh:mm:ss");
    const v1787 = await BuryPointWarehouseModel.getWePointIdsByReplacePointIdKey(_0x5b01f3, "HeartBeatPointId");
    const v1788 = v1787 && v1787.length ? v1787[v1781.IEmaw(414776, 414776)].pointId : "";
    let v1789 = _0x5b01f3 + "_" + v1788;
    let v1790 = await CommonModel.countRealOnline(v1789, v1784, v1785);
    let v1791 = await BuryPointCardModel.statisticData(v1790);
    const v1792 = v1791 && v1791.length ? v1791[v1781.Lhhbm(653646, 653646)].count * v1781.Lhhbm(648301, 648300) : 0;
    p1838.response.status = 200;
    p1838.body = vRequire9.SUCCESS_200("success", v1792);
  }
  static async ["getDataPreview"](p1843) {
    const v1793 = {
      ABFsF: function (p1844, p1845) {
        return p1844 ^ p1845;
      },
      ctZGN: function (p1846, p1847) {
        return p1846 < p1847;
      },
      ntSVp: function (p1848, p1849) {
        return p1848 ^ p1849;
      }
    };
    let v1794 = JSON.parse(p1843.request.body);
    const {
      projectId = "",
      type: _0x39b732,
      calcRule: _0x5a32c8,
      conversionCycle: _0x4bb874,
      startDate: _0x1f3044,
      endDate: _0x1e79ad,
      keepAnalysisRule: _0x2c4ea7,
      groupFields: _0x122712,
      groupByFlag = v1793.ABFsF(225239, 225239),
      topValue = 1,
      pageId = "",
      dataGrid = "",
      chartTableShow = "",
      togetherList = "",
      refreshFrequency = "",
      alarmStatus = ""
    } = v1794;
    if (!projectId) {
      const v1795 = await BuryPointProjectModel.detail(pageId);
      v1794.projectId = v1795.projectId;
    }
    let v1796 = "";
    for (let v1797 = 0; v1793.ctZGN(v1797, _0x5a32c8.length); v1797++) {
      const {
        isRepeat: _0x2d07af,
        fieldName: _0xcaba3d
      } = _0x5a32c8[v1797].prePoint.calcField;
      if (_0x2d07af === "4" || _0x2d07af === "5") {
        v1796 = _0xcaba3d;
        break;
      }
    }
    v1794.calcRule = JSON.stringify(_0x5a32c8);
    v1794.groupFields = _0x122712 || v1796;
    const v1798 = await C15.handleDataPreview(v1794);
    p1843.response.status = v1793.ntSVp(296068, 296012);
    p1843.body = vRequire9.SUCCESS_200("success", v1798);
  }
  static async ["handleDataPreview"](p1850) {
    const v1799 = {
      Fmsjr: function (p1851, p1852) {
        return p1851 === p1852;
      },
      mdcIx: function (p1853, p1854) {
        return p1853 === p1854;
      },
      fnKNW: function (p1855, p1856) {
        return p1855 ^ p1856;
      },
      DewFm: function (p1857, p1858) {
        return p1857 ^ p1858;
      },
      QwQgk: function (p1859, p1860) {
        return p1859 ^ p1860;
      },
      Asfcw: function (p1861, p1862) {
        return p1861 < p1862;
      },
      jrqoj: function (p1863, p1864) {
        return p1863 + p1864;
      },
      KJPsJ: function (p1865, p1866) {
        return p1865 ^ p1866;
      },
      aSpSK: "100.00",
      CFFoN: function (p1867, p1868) {
        return p1867(p1868);
      },
      LbGES: function (p1869, p1870) {
        return p1869 !== p1870;
      },
      yPXON: function (p1871, p1872) {
        return p1871 * p1872;
      },
      FPXrJ: function (p1873, p1874) {
        return p1873 ^ p1874;
      },
      LBHRP: function (p1875, p1876) {
        return p1875 === p1876;
      },
      UTyFJ: function (p1877, p1878) {
        return p1877 / p1878;
      },
      NOLFw: function (p1879, p1880) {
        return p1879 * p1880;
      },
      xSKwm: function (p1881, p1882) {
        return p1881 ^ p1882;
      },
      gCZiI: function (p1883, p1884) {
        return p1883 ^ p1884;
      },
      sbyUA: function (p1885, p1886) {
        return p1885 ^ p1886;
      },
      goOMi: function (p1887, p1888) {
        return p1887 ^ p1888;
      },
      NbdYU: function (p1889, p1890) {
        return p1889 < p1890;
      },
      peXnE: function (p1891, p1892) {
        return p1891 ^ p1892;
      },
      IeWHn: function (p1893, p1894) {
        return p1893 < p1894;
      },
      DryfF: function (p1895, p1896) {
        return p1895 - p1896;
      },
      iRDQu: "yyyy-MM-dd",
      eFYSs: function (p1897, p1898) {
        return p1897(p1898);
      },
      HstTT: function (p1899, p1900) {
        return p1899 ^ p1900;
      },
      ePzXz: function (p1901, p1902) {
        return p1901 ^ p1902;
      },
      rlNRB: function (p1903, p1904) {
        return p1903 ^ p1904;
      },
      qVRla: function (p1905, p1906) {
        return p1905 ^ p1906;
      },
      uTbgD: function (p1907, p1908) {
        return p1907 ^ p1908;
      },
      RgTdn: function (p1909, p1910) {
        return p1909 ^ p1910;
      },
      JHbnV: function (p1911, p1912) {
        return p1911 < p1912;
      },
      UlsRu: function (p1913, p1914) {
        return p1913 ^ p1914;
      },
      LtoRm: function (p1915, p1916) {
        return p1915 ^ p1916;
      },
      iLxkV: "field",
      WyLZf: function (p1917, p1918) {
        return p1917 ^ p1918;
      },
      eCcjg: function (p1919, p1920) {
        return p1919 ^ p1920;
      }
    };
    const v1800 = {};
    let v1801 = [];
    let v1802 = [];
    let v1803 = [];
    const {
      projectId: _0x3d0625,
      type: _0x42fc3e,
      calcRule: _0x3cd7d3,
      conversionCycle: _0x2af55c,
      startDate: _0x34c54b,
      endDate: _0x27ff1a,
      keepAnalysisRule: _0x2556e3,
      groupFields = "",
      groupByFlag: _0x25601e,
      topValue: _0x197c72
    } = p1850;
    let v1804 = vRequire3.splitYMDDate(_0x34c54b, _0x27ff1a);
    const v1805 = {};
    let v1806 = new Map();
    if (v1799.Fmsjr(p1850.type, 3)) {
      let v1807 = JSON.parse(p1850.calcRule);
      for (let v1808 = 0; v1808 < v1807.length; v1808++) {
        let v1809 = v1807[v1808].calcType;
        let v1810 = v1807[v1808].calcName;
        if (v1809 && v1809 === "/") {
          v1806.set(v1810, "1");
        } else {
          v1806.set(v1810, "0");
        }
      }
    }
    let v1811 = [];
    let v1812 = [];
    let v1813 = {};
    if (groupFields) {
      if (p1850.type === 2 || v1799.Fmsjr(p1850.type, 4) || v1799.Fmsjr(p1850.type, 7)) {
        v1813 = await C25.calculateEventAnalysisGroupByRealTimeDataByCard(p1850, _0x197c72, _0x34c54b, _0x27ff1a, groupFields);
        v1811 = v1813.statisticList;
        let v1814 = JSON.parse(p1850.calcRule);
        if (p1850.togetherList && p1850.togetherList.length > 0 && v1799.mdcIx(v1814.length, v1799.fnKNW(696928, 696929))) {
          let v1815 = 0;
          let v1816 = 0;
          let v1817 = 0;
          const v1818 = new Date(_0x27ff1a);
          const v1819 = new Date(_0x34c54b);
          const v1820 = new Date(_0x27ff1a.split(" ")[0]);
          const v1821 = Math.floor((v1820 - v1819) / (v1799.DewFm(776158, 776162) * 24 * 60 * v1799.fnKNW(675300, 675340))) + v1799.QwQgk(391615, 391614);
          const v1822 = new Date(v1818);
          v1822.setDate(v1822.getDate() - 1);
          const v1823 = v1822.Format("yyyy-MM-dd");
          const v1824 = new Date(v1818);
          v1824.setDate(v1824.getDate() - 7);
          const v1825 = v1824.Format("yyyy-MM-dd");
          let v1826 = v1811[v1799.fnKNW(231340, 231340)].statisticData;
          for (let v1827 = 0; v1799.Asfcw(v1827, v1826.length); v1827++) {
            for (const v1828 of v1826[v1827].calcData) {
              if (v1799.mdcIx(v1828.happenYMDDate, _0x27ff1a)) {
                v1815 = parseInt(v1828.count) + v1815;
              } else if (v1799.Fmsjr(v1828.happenYMDDate, v1823)) {
                v1816 = parseInt(v1828.count) + v1816;
              } else if (v1828.happenYMDDate === v1825) {
                v1817 = parseInt(v1828.count) + v1817;
              }
            }
          }
          if (v1821 < 2) {
            const v1829 = JSON.parse(JSON.stringify(p1850));
            v1829.startDate = v1823;
            v1829.endDate = v1823;
            let v1830 = await C25.calculateEventAnalysisGroupByRealTimeDataByCard(v1829, _0x197c72, v1823, v1823, groupFields);
            let v1831 = v1830.statisticList[0].statisticData;
            for (let v1832 = 0; v1832 < v1831.length; v1832++) {
              for (const v1833 of v1831[v1832].calcData) {
                if (v1833.happenYMDDate === v1823) {
                  v1816 = v1799.jrqoj(parseInt(v1833.count), v1816);
                  break;
                }
              }
            }
          }
          if (v1821 < 8) {
            const v1834 = JSON.parse(JSON.stringify(p1850));
            v1834.startDate = v1825;
            v1834.endDate = v1825;
            let v1835 = await C25.calculateEventAnalysisGroupByRealTimeDataByCard(v1834, _0x197c72, v1825, v1825, groupFields);
            let v1836 = v1835.statisticList[v1799.fnKNW(911542, 911542)].statisticData;
            for (let v1837 = 0; v1837 < v1836.length; v1837++) {
              for (const v1838 of v1836[v1837].calcData) {
                if (v1838.happenYMDDate === v1825) {
                  v1817 = parseInt(v1838.count) + v1817;
                  break;
                }
              }
            }
          }
          if (v1816) {
            const vParseFloat = parseFloat(v1816 || v1799.fnKNW(974538, 974538));
            if (vParseFloat !== v1799.KJPsJ(370682, 370682)) {
              const v1839 = v1815 - vParseFloat;
              const v1840 = vRequire3.toFixed(v1839 / vParseFloat * 100, 2);
              v1811[0].yesterdayRate = v1840;
            } else if (v1815 > v1799.DewFm(847613, 847613)) {
              v1811[0].yesterdayRate = v1799.aSpSK;
            } else {
              v1811[0].yesterdayRate = "0.00";
            }
          }
          if (v1817) {
            const v1841 = v1799.CFFoN(parseFloat, v1817 || 0);
            if (v1799.LbGES(v1841, 0)) {
              const v1842 = v1815 - v1841;
              const v1843 = vRequire3.toFixed(v1799.yPXON(v1842 / v1841, v1799.FPXrJ(242163, 242071)), v1799.DewFm(522899, 522897));
              v1811[v1799.DewFm(487879, 487879)].lastWeekRate = v1843;
            } else if (v1815 > 0) {
              v1811[0].lastWeekRate = "100.00";
            } else {
              v1811[0].lastWeekRate = "0.00";
            }
          }
        }
      }
    } else if ((p1850.type === v1799.QwQgk(705958, 705956) || p1850.type === 4 || p1850.type === v1799.KJPsJ(341475, 341476)) && p1850.groupByFlag && p1850.groupByFlag === 1) {
      v1813 = await C25.calculateGroupByRealTimeDataByCard(p1850, _0x197c72, _0x34c54b, _0x27ff1a);
      v1811 = v1813.statisticList;
    } else if (p1850.type === 5) {
      v1813 = await C17.calculateFunnelRealTimeDataByCard(p1850, _0x34c54b, _0x27ff1a);
      v1811 = v1813.statisticList;
    } else {
      v1813 = await C25.calculateRealTimeDataByCard(p1850, _0x34c54b, _0x27ff1a);
      v1811 = v1813.statisticList;
      let v1844 = JSON.parse(p1850.calcRule);
      if (p1850.togetherList && p1850.togetherList.length > v1799.QwQgk(787185, 787185) && !p1850.groupFields && (v1799.LBHRP(v1844.length, 1) || p1850.type === v1799.QwQgk(531754, 531756)) && !["5"].includes(String(p1850.type))) {
        try {
          const v1845 = new Date(_0x34c54b);
          const v1846 = new Date(_0x27ff1a.split(" ")[0]);
          const v1847 = Math.floor(v1799.UTyFJ(v1846 - v1845, v1799.NOLFw(v1799.xSKwm(991179, 991187) * v1799.gCZiI(137438, 137442), v1799.sbyUA(848668, 848672)) * v1799.goOMi(483796, 483900))) + v1799.FPXrJ(242580, 242581);
          if (v1811 && Array.isArray(v1811) && v1811.length > 0) {
            for (let v1848 = 0; v1799.NbdYU(v1848, v1811.length); v1848++) {
              const v1849 = v1811[v1848];
              const v1850 = v1849.calcData;
              const v1851 = new Map();
              for (const v1852 of v1850) {
                if (v1852.happenYMDDate) {
                  v1851.set(v1852.happenYMDDate, v1852);
                }
              }
              for (let v1853 = v1799.peXnE(385323, 385323); v1799.IeWHn(v1853, v1850.length); v1853++) {
                const v1854 = v1850[v1853];
                if (!v1854.happenYMDDate || v1854.happenYMDDate !== _0x27ff1a) {
                  continue;
                }
                const v1855 = new Date(v1854.happenYMDDate);
                if (isNaN(v1855.getTime())) {
                  continue;
                }
                const v1856 = new Date(v1855);
                v1856.setDate(v1799.DryfF(v1856.getDate(), v1799.QwQgk(153583, 153582)));
                const v1857 = v1856.Format("yyyy-MM-dd");
                const v1858 = new Date(v1855);
                v1858.setDate(v1858.getDate() - 7);
                const v1859 = v1858.Format(v1799.iRDQu);
                const v1860 = v1799.eFYSs(parseFloat, v1854.count || 0);
                let v1861 = v1851.get(v1857);
                if (!v1861 && v1847 < v1799.QwQgk(938336, 938338)) {
                  const v1862 = JSON.parse(JSON.stringify(p1850));
                  v1862.startDate = v1857;
                  v1862.endDate = v1857;
                  const v1863 = await C25.calculateRealTimeDataByCard(v1862, v1857, v1857);
                  if (v1863 && v1863.statisticList && v1863.statisticList[0] && v1863.statisticList[0].calcData) {
                    const v1864 = v1863.statisticList[0].calcData.find(p1921 => p1921.happenYMDDate === v1857);
                    if (v1864) {
                      v1861 = v1864;
                      v1851.set(v1857, v1861);
                    }
                  }
                }
                let v1865 = v1851.get(v1859);
                if (!v1865 && v1847 < 8) {
                  const v1866 = JSON.parse(JSON.stringify(p1850));
                  v1866.startDate = v1859;
                  v1866.endDate = v1859;
                  const v1867 = await C25.calculateRealTimeDataByCard(v1866, v1859, v1859);
                  if (v1867 && v1867.statisticList && v1867.statisticList[0] && v1867.statisticList[0].calcData) {
                    const v1868 = v1867.statisticList[0].calcData.find(p1922 => p1922.happenYMDDate === v1859);
                    if (v1868) {
                      v1865 = v1868;
                      v1851.set(v1859, v1865);
                    }
                  }
                }
                if (v1861 && v1799.LbGES(v1861.count, undefined)) {
                  const vParseFloat2 = parseFloat(v1861.count || 0);
                  if (v1799.LbGES(vParseFloat2, 0)) {
                    const v1869 = v1860 - vParseFloat2;
                    const v1870 = vRequire3.toFixed(v1869 / vParseFloat2 * 100, 2);
                    v1849.yesterdayRate = v1870;
                  } else if (v1860 > 0) {
                    v1849.yesterdayRate = v1799.aSpSK;
                  } else {
                    v1849.yesterdayRate = "0.00";
                  }
                }
                if (v1865 && v1865.count !== undefined) {
                  const vParseFloat3 = parseFloat(v1865.count || v1799.HstTT(437652, 437652));
                  if (vParseFloat3 !== 0) {
                    const v1871 = v1799.DryfF(v1860, vParseFloat3);
                    const v1872 = vRequire3.toFixed(v1871 / vParseFloat3 * v1799.ePzXz(573717, 573809), v1799.rlNRB(265355, 265353));
                    v1849.lastWeekRate = v1872;
                  } else if (v1860 > v1799.qVRla(160018, 160018)) {
                    v1849.lastWeekRate = "100.00";
                  } else {
                    v1849.lastWeekRate = "0.00";
                  }
                }
              }
            }
          }
        } catch (_0x262458) {
          console.error("计算同比环比数据出错:", _0x262458);
        }
      }
    }
    v1805.statisticList = v1811;
    if (groupFields) {
      const v1873 = groupFields.split(",");
      for (let v1874 = v1799.uTbgD(735137, 735137); v1799.NbdYU(v1874, v1873.length); v1874++) {
        let v1875 = await BuryPointFieldModel.getFieldAliasByNameAndProjectId(_0x3d0625, v1873[v1874]);
        v1801.push({
          label: v1875[0].fieldAlias,
          field: v1873[v1874],
          type: 2
        });
        v1802.push({
          label: v1875[v1799.RgTdn(168182, 168182)].fieldAlias,
          field: v1873[v1874],
          type: 2
        });
      }
    }
    v1801.push({
      label: "数据",
      field: "calcName",
      type: 1
    });
    v1801.push({
      label: "特殊",
      field: "",
      type: 0
    });
    if (groupFields) {
      for (let v1876 = 0; v1799.JHbnV(v1876, v1811.length); v1876++) {
        const v1877 = v1811[v1876];
        v1812.push({
          calcName: v1877.calcName,
          unit: v1877.unit,
          statisticData: v1877.statisticData,
          yesterdayRate: v1877.yesterdayRate,
          lastWeekRate: v1877.lastWeekRate
        });
        const v1878 = v1877.statisticData;
        for (let v1879 = 0; v1879 < v1878.length; v1879++) {
          const {
            groupField: _0xa22c81,
            calcTotail: _0x370e32,
            calcAverage: _0x531bdf,
            calcMax: _0xfbf00e,
            calcMin: _0x1195c2,
            calcData: _0x3d17f7,
            pointId: _0xfe2642
          } = v1878[v1879];
          const v1880 = v1876 + "-" + _0xfe2642;
          let v1881 = {
            id: v1799.jrqoj(v1876, "") + v1879,
            [v1880]: _0x370e32,
            calcName: v1877.calcName,
            total: _0x370e32,
            average: _0x531bdf,
            max: _0xfbf00e,
            min: _0x1195c2
          };
          await C11.addIfNotExists(v1802, {
            label: v1877.calcName,
            field: v1880,
            type: 3
          }, "label", "field");
          for (let v1882 = v1799.UlsRu(432886, 432886); v1882 < _0xa22c81.length; v1882++) {
            v1881[_0xa22c81[v1882].label] = _0xa22c81[v1882].field;
          }
          for (let v1883 = v1799.xSKwm(845068, 845068); v1883 < _0x3d17f7.length; v1883++) {
            v1881[_0x3d17f7[v1883].happenYMDDate] = _0x3d17f7[v1883].count;
          }
          v1803.push(v1881);
        }
      }
    } else {
      let v1884 = [];
      for (let v1885 = 0; v1885 < v1811.length; v1885++) {
        const {
          calcName: _0x2e166f,
          calcType: _0x3f97a7,
          unit: _0x3d4a48,
          calcTotail = 0,
          calcTotailRate = v1799.UlsRu(994070, 994070),
          calcAverage = v1799.LtoRm(810082, 810082),
          calcMax = 0,
          calcMin = 0,
          calcData = 0,
          yesterdayRate = 0,
          lastWeekRate = 0,
          pointId: _0x30461f
        } = v1811[v1885];
        v1884.push({
          calcName: _0x2e166f,
          unit: _0x3d4a48,
          calcType: _0x3f97a7,
          calcTotail: calcTotail,
          calcTotailRate: calcTotailRate,
          calcAverage: calcAverage,
          calcMax: calcMax,
          calcMin: calcMin,
          calcData: calcData,
          yesterdayRate: yesterdayRate,
          lastWeekRate: lastWeekRate
        });
        const v1886 = v1885 + "-" + _0x30461f;
        let v1887 = {
          id: v1885 + "",
          [v1886]: calcTotail,
          calcName: _0x2e166f,
          total: calcTotail,
          average: calcAverage,
          max: calcMax,
          min: calcMin
        };
        await C11.addIfNotExists(v1802, {
          label: _0x2e166f,
          field: v1886,
          type: 3
        }, "label", v1799.iLxkV);
        for (let v1888 = 0; v1888 < calcData.length; v1888++) {
          v1887[calcData[v1888].happenYMDDate] = calcData[v1888].count;
        }
        v1803.push(v1887);
      }
      for (let v1889 = v1799.WyLZf(474567, 474567); v1799.IeWHn(v1889, v1811.length); v1889++) {
        const {
          calcName: _0x1be379,
          calcType: _0x507d36,
          unit: _0x3c85cd,
          calcTotail: _0x301d02,
          calcAverage: _0x3799ef,
          calcMax: _0x255691,
          calcMin: _0x372522,
          calcData: _0x355530,
          yesterdayRate = 0,
          lastWeekRate = v1799.eCcjg(193506, 193506),
          pointId: _0x3ce018
        } = v1811[v1889];
        let v1890 = [];
        v1890.push(v1884[v1889]);
        v1812.push({
          calcName: _0x1be379,
          unit: _0x3c85cd,
          calcType: _0x507d36,
          statisticData: v1890,
          yesterdayRate: yesterdayRate,
          lastWeekRate: lastWeekRate
        });
      }
    }
    v1804.forEach((p1923, p1924) => {
      v1801.push({
        label: p1923,
        field: p1923,
        type: 3
      });
    });
    let v1891 = [];
    if (groupFields) {
      const v1892 = groupFields.split(",");
      if (v1892.length === 1) {
        v1891 = await C11.sortByOneField(v1803, v1892[0]);
      } else {
        v1891 = await C11.sortByTwoField(v1803, v1892[v1799.xSKwm(309189, 309189)], v1892[1]);
      }
    } else {
      v1891 = v1803;
    }
    const v1893 = {
      tiled: v1801,
      layered: v1802
    };
    const v1894 = {
      title: v1893,
      tableDataList: v1891
    };
    v1800.statisticData = v1812;
    v1800.tableData = v1894;
    return v1800;
  }
}
class C16 {
  static async upload(p1925) {
    const v1895 = {
      Mqzwz: "success"
    };
    let {
      projectId: _0x5b129b,
      pageTitle: _0x2587ec,
      completeUrl: _0x218e69,
      simpleUrl: _0x5dda0e,
      pageSize: _0x13e106,
      screenInfo: _0x21c90a,
      imgType: _0x45c13f,
      operator = "-"
    } = p1925.request.body;
    const v1896 = {
      operator: operator,
      projectId: _0x5b129b,
      pageTitle: _0x2587ec,
      completeUrl: _0x218e69,
      simpleUrl: _0x5dda0e,
      pageSize: _0x13e106,
      screenInfo: _0x21c90a,
      imgType: _0x45c13f
    };
    _0x5b129b;
    if (_0x21c90a) {
      let v1897 = await BuryPointScreenShotModel.create(v1896);
      p1925.response.status = 200;
      p1925.body = vRequire9.SUCCESS_200(v1895.Mqzwz, v1897);
    } else {
      p1925.response.status = 412;
      p1925.body = vRequire9.ERROR_412("上传失败");
    }
  }
  static async ["delete"](p1926) {
    const v1898 = {
      OvlLX: function (p1927, p1928) {
        return p1927 ^ p1928;
      },
      UErpQ: function (p1929, p1930) {
        return p1929 ^ p1930;
      }
    };
    let {
      taskId: _0x270669
    } = JSON.parse(p1926.request.body);
    await BuryPointScreenShotModel.delete(_0x270669);
    p1926.response.status = v1898.OvlLX(520525, 520581);
    p1926.body = vRequire9.SUCCESS_200("success", v1898.UErpQ(831916, 831916));
  }
  static async ["batchDeletion"](p1931) {
    const v1899 = {
      udSBx: function (p1932, p1933) {
        return p1932 ^ p1933;
      }
    };
    let {
      taskIds: _0x4c949c
    } = JSON.parse(p1931.request.body);
    if (_0x4c949c) {
      await BuryPointScreenShotModel.batchDeletion(_0x4c949c);
    }
    p1931.response.status = 200;
    p1931.body = vRequire9.SUCCESS_200("success", v1899.udSBx(332113, 332113));
  }
  static async update(p1934) {
    const v1900 = {
      tKNkR: function (p1935, p1936) {
        return p1935 ^ p1936;
      }
    };
    let v1901 = JSON.parse(p1934.request.body);
    const {
      nickname: _0x19626f
    } = p1934.user;
    if (v1901.taskId && v1901.taskName && v1901.projectId && v1901.taskPoint && v1901.handleManId && v1901.handleManName) {
      v1901.taskPoint = JSON.stringify(v1901.taskPoint);
      let v1902 = await BuryPointScreenShotModel.update(v1901);
      p1934.response.status = 200;
      p1934.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_SUCCESS), v1902);
    } else {
      p1934.response.status = v1900.tKNkR(407914, 407798);
      p1934.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_PARAM_FAIL));
    }
  }
  static async list(p1937) {
    const {
      projectId: _0x9ad6af,
      page: _0x19d8dc,
      pageSize: _0x36f1db
    } = JSON.parse(p1937.request.body);
    const v1903 = await BuryPointScreenShotModel.list(_0x9ad6af, _0x19d8dc, _0x36f1db);
    const {
      list: _0x44cb83,
      total: _0x64c049
    } = v1903;
    p1937.response.status = 200;
    p1937.body = vRequire9.SUCCESS_200("success", {
      list: _0x44cb83,
      total: _0x64c049
    });
  }
  static async detail(p1938) {
    const v1904 = {
      MpYFC: function (p1939, p1940) {
        return p1939 ^ p1940;
      }
    };
    let {
      screenId: _0x2a5cc4
    } = JSON.parse(p1938.request.body);
    const v1905 = await BuryPointScreenShotModel.detail(_0x2a5cc4);
    const v1906 = v1905.length ? v1905[v1904.MpYFC(399675, 399675)] : null;
    p1938.response.status = 200;
    p1938.body = vRequire9.SUCCESS_200("success", v1906);
  }
  static async updateStatus(p1941) {
    let {
      taskId: _0x3a1e40,
      taskStatus: _0x17f84a
    } = JSON.parse(p1941.request.body);
    const v1907 = await BuryPointScreenShotModel.updateStatus(_0x3a1e40, _0x17f84a);
    p1941.response.status = 200;
    p1941.body = vRequire9.SUCCESS_200("success", v1907);
  }
  static async ["changeHandleMan"](p1942) {
    const v1908 = {
      GrvZp: function (p1943, p1944) {
        return p1943 ^ p1944;
      }
    };
    let {
      taskId: _0x14cf88,
      handleManId: _0x98fe2b,
      handleManName: _0x424957
    } = JSON.parse(p1942.request.body);
    const v1909 = await BuryPointScreenShotModel.changeHandleMan(_0x14cf88, _0x98fe2b, _0x424957);
    p1942.response.status = v1908.GrvZp(954469, 954541);
    p1942.body = vRequire9.SUCCESS_200("success", v1909);
  }
  static async uploadImgFileFake(p1945) {
    const v1910 = {
      PTPwO: function (p1946, p1947) {
        return p1946 ^ p1947;
      }
    };
    p1945.response.status = 200;
    p1945.body = vRequire9.SUCCESS_200("success", v1910.PTPwO(963197, 963197));
  }
  static async uploadImgFile(p1948) {
    const v1911 = {
      iemNN: "上传失败"
    };
    let {
      projectId: _0x18da99,
      nickname: _0x191d1c,
      uploadBgBase64List: _0x1c1aa8,
      completeUrl: _0x19213c,
      simpleUrl: _0x5097a7,
      pageSize: _0x19e707
    } = JSON.parse(p1948.request.body);
    if (_0x18da99) {
      for (let v1912 = 0; v1912 < _0x1c1aa8.length; v1912++) {
        const v1913 = _0x1c1aa8[v1912];
        const {
          pageTitle: _0x59cfa0,
          screenInfo: _0x2b4532,
          imgType: _0x336ef8
        } = v1913;
        const v1914 = {
          operator: _0x191d1c,
          projectId: _0x18da99,
          pageTitle: _0x59cfa0,
          completeUrl: _0x19213c,
          simpleUrl: _0x5097a7,
          pageSize: _0x19e707,
          screenInfo: _0x2b4532,
          imgType: _0x336ef8
        };
        await BuryPointScreenShotModel.create(v1914);
      }
      p1948.response.status = 200;
      p1948.body = vRequire9.SUCCESS_200("success", 0);
    } else {
      p1948.response.status = 412;
      p1948.body = vRequire9.ERROR_412(v1911.iemNN);
    }
  }
}
class C17 {
  static async test() {
    let v1915 = await BuryPointCardModel.detail("dda97cf0-e111-11ee-a337-1d9fbcefb8ea");
    let v1916 = 0;
    let v1917 = "2024-04-23";
    let v1918 = "2024-05-03 23:59:59";
    let v1919 = await C17.calculateFunnelRealTimeDataByCard(v1915, v1917, v1918);
    console.log(JSON.stringify(v1919));
  }
  static async calculateFunnelRealTimeDataByCard(p1949, p1950, p1951) {
    let v1920 = vRequire3.splitYMDDate(p1950, p1951);
    const {
      id: _0xcaa12f,
      projectId: _0x39b05,
      pageId: _0x34643e,
      name: _0x4aecaa,
      sort: _0x53b0a3,
      dataGrid: _0x98327e,
      type: _0x4f25fa,
      calcRule: _0x4289b8,
      conversionCycle: _0xd6c007,
      groupByFlag: _0x4d5ff5,
      chartTableShow: _0x48ec97,
      togetherList: _0x3452b0,
      refreshFrequency: _0x245395,
      updatedAt: _0x43faf3,
      alarmStatus: _0x2f3c78,
      describe: _0x33f73d,
      isShowOnlineCount: _0x4fbe4b
    } = p1949;
    const v1921 = {
      cardId: _0xcaa12f,
      type: _0x4f25fa,
      cardName: _0x4aecaa,
      conversionCycle: _0xd6c007,
      groupByFlag: _0x4d5ff5,
      chartTableShow: _0x48ec97,
      togetherList: _0x3452b0,
      refreshFrequency: _0x245395
    };
    v1921.refreshTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
    v1921.alarmStatus = _0x2f3c78;
    v1921.sort = _0x53b0a3;
    v1921.dataGrid = _0x98327e;
    v1921.describe = _0x33f73d;
    v1921.isShowOnlineCount = _0x4fbe4b;
    if (_0x43faf3) {
      v1921.refreshTime = _0x43faf3;
    }
    let v1922 = await this.statisticListByDay(_0x39b05, _0xd6c007, _0x4289b8, p1950, new Date(p1951).Format("yyyy-MM-dd"), v1920);
    await this.calcFunnelTotalRate(v1922);
    await this.calcFunnelEveryDayStepRate(v1922);
    let v1923 = [];
    for (let v1924 = 0; v1924 < v1922.length; v1924++) {
      let v1925 = v1922[v1924];
      v1923.push(v1925);
    }
    v1921.statisticList = v1923;
    return v1921;
  }
  static async ["calculateFunnelTotalRealTimeDataByCard"](p1952, p1953, p1954) {
    let v1926 = vRequire3.splitYMDDate(p1953, p1954);
    const {
      id: _0x27c38e,
      projectId: _0x3def7d,
      pageId: _0x458929,
      name: _0x130a3,
      sort: _0x346d71,
      dataGrid: _0x1f43a3,
      type: _0x12e230,
      calcRule: _0xfd1a38,
      conversionCycle: _0xbdd364,
      groupByFlag: _0x24a120,
      chartTableShow: _0x51d7b9,
      togetherList: _0x5b2858,
      refreshFrequency: _0x56da84,
      updatedAt: _0x1e2295,
      alarmStatus: _0x2c11b9,
      describe: _0x57af5f
    } = p1952;
    const v1927 = {
      cardId: _0x27c38e,
      type: _0x12e230,
      cardName: _0x130a3,
      conversionCycle: _0xbdd364,
      groupByFlag: _0x24a120,
      chartTableShow: _0x51d7b9,
      togetherList: _0x5b2858,
      refreshFrequency: _0x56da84
    };
    v1927.refreshTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
    v1927.alarmStatus = _0x2c11b9;
    v1927.sort = _0x346d71;
    v1927.dataGrid = _0x1f43a3;
    v1927.describe = _0x57af5f;
    if (_0x1e2295) {
      v1927.refreshTime = _0x1e2295;
    }
    v1927.statisticList = await this.statisticTotalList(_0x3def7d, _0xbdd364, _0xfd1a38, p1953, new Date(p1954).Format("yyyy-MM-dd"), v1926);
    this.calcFunnelTotalRate(v1927.statisticList);
    return v1927;
  }
  static async calculateFunnelEveryDayRealTimeData(p1955, p1956, p1957) {
    const v1928 = {
      PLwEb: "yyyy-MM-dd"
    };
    let v1929 = vRequire3.splitYMDDate(p1956, p1957);
    const {
      id: _0x14a94d,
      projectId: _0x47f27d,
      pageId: _0x229471,
      name: _0x2aafc9,
      sort: _0x2a67f7,
      dataGrid: _0x373bc,
      type: _0x4e4f9d,
      calcRule: _0x2ab509,
      conversionCycle: _0x4cfc53,
      groupByFlag: _0x57b34d,
      chartTableShow: _0x3a3c3f,
      togetherList: _0x257bbf,
      refreshFrequency: _0x28a55c,
      updatedAt: _0x3e8cfd,
      alarmStatus: _0x5f5681,
      describe: _0x270f26
    } = p1955;
    const v1930 = {
      cardId: _0x14a94d,
      type: _0x4e4f9d,
      cardName: _0x2aafc9,
      conversionCycle: _0x4cfc53,
      groupByFlag: _0x57b34d,
      chartTableShow: _0x3a3c3f,
      togetherList: _0x257bbf,
      refreshFrequency: _0x28a55c
    };
    v1930.refreshTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
    v1930.alarmStatus = _0x5f5681;
    v1930.sort = _0x2a67f7;
    v1930.dataGrid = _0x373bc;
    v1930.describe = _0x270f26;
    if (_0x3e8cfd) {
      v1930.refreshTime = _0x3e8cfd;
    }
    v1930.statisticList = await this.statisticListByDay(_0x47f27d, _0x4cfc53, _0x2ab509, p1956, new Date(p1957).Format(v1928.PLwEb), v1929);
    this.calcFunnelEveryDayStepRate(v1930.statisticList);
    return v1930;
  }
  static async statisticList(p1958, p1959, p1960, p1961) {
    const v1931 = {
      AJoMU: function (p1962, p1963) {
        return p1962 ^ p1963;
      },
      VAFeb: function (p1964, p1965) {
        return p1964 ^ p1965;
      },
      TSyfY: function (p1966, p1967) {
        return p1966 + p1967;
      },
      rlzuj: " where ",
      OGpst: function (p1968, p1969) {
        return p1968 >= p1969;
      },
      LOqLp: function (p1970, p1971) {
        return p1970 ^ p1971;
      },
      ivsuM: function (p1972, p1973, p1974) {
        return p1972(p1973, p1974);
      },
      NeKRm: function (p1975, p1976) {
        return p1975 + p1976;
      },
      XyZDy: function (p1977, p1978) {
        return p1977 - p1978;
      },
      BmdxA: "table",
      INTtz: function (p1979, p1980) {
        return p1979 ^ p1980;
      },
      PGUjc: function (p1981, p1982) {
        return p1981 + p1982;
      },
      dBwsM: function (p1983, p1984) {
        return p1983 + p1984;
      },
      xnnfI: function (p1985, p1986) {
        return p1985 ^ p1986;
      },
      sIFdO: "and",
      IkMuJ: "MM-dd",
      MWAlN: function (p1987, p1988) {
        return p1987 > p1988;
      },
      DjINJ: function (p1989, p1990) {
        return p1989 ^ p1990;
      },
      jOMWT: function (p1991, p1992) {
        return p1991 * p1992;
      },
      NYQnc: "yyyy-MM-dd",
      LqObH: function (p1993, p1994) {
        return p1993 ^ p1994;
      }
    };
    let v1932 = [];
    let v1933 = JSON.parse(p1960);
    if (v1933) {
      let v1934 = [];
      for (let v1935 = 0; v1935 < v1933.length; v1935++) {
        let v1936 = {};
        let v1937 = "";
        let v1938 = v1933[v1935].prePoint;
        let v1939 = v1933[v1935].calcName;
        let v1940 = v1933[v1935].calcType;
        let v1941 = v1933[v1935].unit;
        let v1942 = v1938.pointId;
        let v1943 = v1938.calcField;
        let v1944 = v1938.queryCriteria;
        let vParseInt2 = parseInt(v1943.fieldIndex, 10);
        v1936.fieldIndex = vParseInt2;
        v1936.calcName = v1939;
        v1936.unit = v1941;
        v1936.calcType = v1940;
        v1936.calcTotail = v1931.AJoMU(442704, 442704);
        v1936.calcTotailRate = v1931.VAFeb(817504, 817504);
        let v1945 = [];
        let v1946 = "table" + parseInt(v1943.fieldIndex, 10);
        v1934.push(v1946);
        let v1947 = v1931.TSyfY(p1958 + "_", v1942);
        let v1948;
        let v1949 = v1931.rlzuj;
        let v1950 = "";
        let v1951 = v1931.AJoMU(244393, 244393);
        if (v1931.OGpst(v1935, v1931.VAFeb(795984, 795985))) {
          for (let v1952 = v1931.LOqLp(523105, 523105); v1952 <= v1935; v1952++) {
            let v1953 = v1933[v1952].prePoint;
            let v1954 = v1953.pointId;
            let v1955 = v1953.calcField;
            let v1956 = v1953.queryCriteria;
            let v1957 = v1931.TSyfY("table", v1931.ivsuM(parseInt, v1955.fieldIndex, 10));
            let v1958 = v1931.TSyfY(p1958 + "_", v1954);
            v1937 = v1931.NeKRm(v1937 + v1958 + " " + v1957, ",");
            v1950 = v1950 + (await CommonModel.criteriaSql(v1957, v1955, v1956));
          }
          for (let v1959 = 1; v1959 <= v1935; v1959++) {
            let v1960 = v1933[v1931.XyZDy(v1959, 1)].prePoint;
            let v1961 = v1960.calcField;
            let v1962 = v1931.BmdxA + parseInt(v1961.fieldIndex, v1931.INTtz(609857, 609867));
            let v1963 = v1931.NeKRm(v1962, ".") + v1961.fieldName;
            let v1964 = v1933[v1959].prePoint;
            let v1965 = v1964.calcField;
            let v1966 = v1931.PGUjc(v1931.BmdxA, parseInt(v1965.fieldIndex, 10));
            let v1967 = v1931.TSyfY(v1966, ".") + v1965.fieldName;
            v1949 = v1931.dBwsM(v1949 + v1963 + "=", v1967) + " and ";
          }
          v1937 = v1937.substring(v1931.VAFeb(138065, 138065), v1937.lastIndexOf(","));
          v1950 = v1950.substring(v1931.xnnfI(123489, 123489), v1950.lastIndexOf("and"));
          v1937 = v1937 + v1949;
        } else {
          v1937 = v1947 + " " + v1946;
          v1937 = v1937 + v1949;
          v1950 = await CommonModel.criteriaSql(v1946, v1943, v1944);
          v1950 = v1950.substring(0, v1950.lastIndexOf(v1931.sIFdO));
        }
        for (let v1968 = 0; v1968 < p1961.length; v1968++) {
          let v1969 = {};
          let v1970 = p1961[v1968];
          v1969.count = 0;
          v1969.happenDate = new Date(v1970).Format(v1931.IkMuJ);
          let vV1970 = v1970;
          let vV19702 = v1970;
          if (p1959 && v1931.MWAlN(p1959, v1931.DjINJ(354843, 354842))) {
            vV19702 = new Date(v1931.NeKRm(new Date(v1970).getTime(), v1931.jOMWT(parseInt(p1959, 10) * 24, v1931.DjINJ(728910, 725342)) * v1931.INTtz(275673, 276273))).Format(v1931.NYQnc);
          }
          v1948 = await CommonModel.splicingFunnelSql(v1946, v1937, v1943.fieldName, v1950, vV1970, vV19702);
          let v1971 = await this.getCount(v1948);
          v1951 += parseFloat(v1971);
          v1969.count = v1971;
          v1969.percentage = 0;
          v1945.push(v1969);
        }
        v1936.calcTotail = v1951 ? v1951 : v1931.LqObH(590715, 590715);
        v1936.calcData = v1945;
        v1932.push(v1936);
      }
    }
    await this.calcFunnelRate(v1932);
    await this.convertFunnelConversionRate(v1932);
    return v1932;
  }
  static async ["calcFunnelConversionRate"](p1995, p1996) {
    const v1972 = {
      DFZft: function (p1997, p1998) {
        return p1997 - p1998;
      },
      TTcHD: function (p1999, p2000) {
        return p1999 + p2000;
      },
      TdMIa: function (p2001, p2002) {
        return p2001 - p2002;
      },
      tLYwg: function (p2003, p2004) {
        return p2003 ^ p2004;
      },
      KGhpV: function (p2005, p2006) {
        return p2005 + p2006;
      },
      OJnRd: function (p2007, p2008, p2009) {
        return p2007(p2008, p2009);
      },
      NTtVN: function (p2010, p2011) {
        return p2010 ^ p2011;
      },
      PnbuV: function (p2012, p2013) {
        return p2012 / p2013;
      },
      dGfDg: function (p2014, p2015) {
        return p2014 ^ p2015;
      },
      rRGRH: function (p2016, p2017) {
        return p2016 ^ p2017;
      }
    };
    p1995.sort(function (p2018, p2019) {
      return v1972.DFZft(p2018.fieldIndex, p2019.fieldIndex);
    });
    let v1973 = 0;
    for (let v1974 = 0; v1974 < p1995.length; v1974++) {
      v1973 = v1972.TTcHD(parseInt(v1973, 10), parseInt(p1995[v1974].count, 10));
      if (v1974 !== v1972.TdMIa(p1995.length, 1)) {
        if (parseInt(p1995[v1974].count, v1972.tLYwg(118088, 118082)) === v1972.tLYwg(787717, 787717)) {
          p1995[v1972.KGhpV(v1974, v1972.tLYwg(190668, 190669))].percentage = 0;
        } else {
          p1995[v1974 + 1].percentage = vRequire3.toFixed(v1972.OJnRd(parseInt, p1995[v1974 + 1].count, v1972.NTtVN(642274, 642280)) / v1972.OJnRd(parseInt, p1995[v1974].count, 10) * 100, v1972.NTtVN(169257, 169259));
        }
      }
    }
    if (v1973 === 0) {
      p1995[0].percentage = 0;
    } else {
      p1995[v1972.NTtVN(626512, 626512)].percentage = vRequire3.toFixed(v1972.PnbuV(parseInt(p1995[p1995.length - 1].count, 10), parseInt(v1973, v1972.dGfDg(549478, 549484))) * 100, 2);
    }
    for (let v1975 = v1972.NTtVN(804717, 804717); v1975 < p1995.length; v1975++) {
      for (let v1976 = v1972.rRGRH(576218, 576218); v1976 < p1996.length; v1976++) {
        if (p1995[v1975].calcName === p1996[v1976].calcField) {
          p1996[v1976].percentage = isNaN(p1995[v1975].percentage) ? 0 : p1995[v1975].percentage;
        }
      }
    }
  }
  static async ["splicingSql"](p2020, p2021, p2022, p2023) {
    const v1977 = {
      PTBpc: function (p2024, p2025) {
        return p2024 === p2025;
      },
      QIQqV: function (p2026, p2027) {
        return p2026 === p2027;
      },
      bidDX: "sum",
      KTxNm: "avg",
      HgMhL: function (p2028, p2029) {
        return p2028 === p2029;
      },
      zPwqP: "max",
      RLEdA: function (p2030, p2031) {
        return p2030 ^ p2031;
      },
      DWZxG: " select ",
      SACzm: function (p2032, p2033) {
        return p2032 + p2033;
      },
      QUhfd: function (p2034, p2035) {
        return p2034 + p2035;
      },
      EeiuO: " as count  from ",
      zTmTi: ") as count from ",
      ZkXhe: function (p2036, p2037) {
        return p2036 === p2037;
      },
      AVqRR: function (p2038, p2039) {
        return p2038 === p2039;
      },
      pPDse: function (p2040, p2041) {
        return p2040 + p2041;
      },
      RCmtF: function (p2042, p2043) {
        return p2042 + p2043;
      },
      IANfD: " or ",
      zxLUR: function (p2044, p2045) {
        return p2044 + p2045;
      },
      IeGjQ: "%' ",
      wEHuw: function (p2046, p2047) {
        return p2046 + p2047;
      },
      TImgQ: function (p2048, p2049) {
        return p2048 < p2049;
      },
      kAswb: function (p2050, p2051) {
        return p2050 + p2051;
      },
      uwGPO: function (p2052, p2053) {
        return p2052 + p2053;
      },
      FXYNg: " not like '%",
      lwfUf: " and ",
      wmGrI: " >=",
      oDENl: function (p2054, p2055) {
        return p2054 ^ p2055;
      },
      CqYqZ: " <=",
      OCeaF: function (p2056, p2057) {
        return p2056 + p2057;
      },
      eHYCp: function (p2058, p2059) {
        return p2058 + p2059;
      },
      shYPP: function (p2060, p2061) {
        return p2060 + p2061;
      },
      tReoy: function (p2062, p2063) {
        return p2062 + p2063;
      },
      wsqST: function (p2064, p2065) {
        return p2064 + p2065;
      },
      ZCVxE: function (p2066, p2067) {
        return p2066 + p2067;
      }
    };
    let v1978 = "count";
    let v1979 = "";
    if (v1977.PTBpc(p2020.isRepeat, "2") || v1977.QIQqV(p2020.isRepeat, 2)) {
      v1978 = v1977.bidDX;
    } else if (p2020.isRepeat === "3" || p2020.isRepeat === 3) {
      v1978 = v1977.KTxNm;
    } else if (v1977.HgMhL(p2020.isRepeat, "6") || p2020.isRepeat === 6) {
      v1978 = v1977.zPwqP;
    } else if (p2020.isRepeat === "7" || p2020.isRepeat === 7) {
      v1978 = "min";
    } else if (p2020.isRepeat === "8" || p2020.isRepeat === v1977.RLEdA(498928, 498936)) {
      v1978 = "sum";
      v1979 = "count(distinct weCustomerKey)";
    } else {
      v1978 = "count";
    }
    let v1980 = v1977.DWZxG + v1978 + "(";
    if (p2020.isRepeat === "1" || v1977.PTBpc(p2020.isRepeat, 1) || p2020.isRepeat === "5" || p2020.isRepeat === 5) {
      v1980 = v1977.SACzm(v1980, "distinct ") + p2020.fieldName;
    } else {
      v1980 = v1977.QUhfd(v1980, p2020.fieldName);
    }
    if (v1979) {
      v1980 = v1980 + ") / " + v1979 + v1977.EeiuO + p2022;
    } else {
      v1980 = v1980 + v1977.zTmTi + p2022;
    }
    if (p2021.length > 0) {
      let v1981 = p2020.andOr;
      if (!p2020.andOr || v1977.ZkXhe(p2020.andOr, undefined)) {
        v1981 = "and";
      } else {
        v1981 = vRequire3.convertAndOr(v1981);
      }
      var v1982 = "";
      for (let v1983 = 0; v1983 < p2021.length; v1983++) {
        let v1984 = p2021[v1983].fieldName;
        let v1985 = vRequire3.convertOper(p2021[v1983].rule);
        let v1986 = p2021[v1983].value;
        if (v1977.AVqRR(v1985, "is null")) {
          v1982 = v1977.pPDse(v1977.RCmtF(" " + v1982 + "(" + v1984 + " " + v1985 + v1977.IANfD, v1984) + "='') ", v1981) + " ";
        } else if (v1977.QIQqV(v1985, "is not null")) {
          v1982 = v1977.RCmtF(v1977.zxLUR(v1977.QUhfd(" " + v1982 + "(", v1984) + " " + v1985, " and ") + v1984 + "!='') ", v1981) + " ";
        } else if (v1985 === "in") {
          let v1987 = v1986.split(",");
          let v1988 = "";
          for (let v1989 = v1977.RLEdA(497062, 497062); v1989 < v1987.length; v1989++) {
            v1988 += v1977.SACzm(v1984 + " like '%" + v1987[v1989], v1977.IeGjQ) + " or ";
          }
          v1988 = v1988.substring(0, v1988.lastIndexOf("or"));
          v1982 = v1977.wEHuw(v1982 + " (", v1988) + ") " + v1981 + " ";
        } else if (v1985 === "not in") {
          let v1990 = v1986.split(",");
          let v1991 = "";
          for (let v1992 = 0; v1977.TImgQ(v1992, v1990.length); v1992++) {
            v1991 += v1977.kAswb(v1977.uwGPO(v1984 + v1977.FXYNg, v1990[v1992]), "%' ") + v1977.lwfUf;
          }
          v1991 = v1991.substring(0, v1991.lastIndexOf("and"));
          v1982 = v1977.uwGPO(v1982 + " (" + v1991, ")") + " " + v1981 + " ";
        } else if (v1985 === "区间") {
          let v1993 = v1986.split(",");
          let v1994 = v1977.wEHuw(v1984 + v1977.wmGrI + v1993[v1977.oDENl(247344, 247344)], v1977.lwfUf) + v1984 + v1977.CqYqZ + v1993[1];
          v1982 = v1977.OCeaF(v1982, " (") + v1994 + ") " + v1981 + " ";
        } else {
          v1982 = v1977.eHYCp(v1977.shYPP(v1977.tReoy(" " + v1982 + v1984, " "), v1985) + " '", v1986) + "' " + v1981 + " ";
        }
      }
      v1982 = v1982.substr(0, v1982.lastIndexOf(v1981));
      v1980 = v1977.wsqST(" " + v1980, " where 1=1 and (") + v1982 + ")";
    } else {
      v1980 = " " + v1980 + " where 1=1 ";
    }
    v1980 = v1977.ZCVxE(v1980 + " and DATE_FORMAT(happenTime,'%Y-%m-%d') = '", p2023) + "'";
    return v1980;
  }
  static async splicingGroupBySql(p2068, p2069, p2070, p2071) {
    const v1995 = {
      etfYw: " select ",
      sHpMJ: function (p2072, p2073) {
        return p2072 ^ p2073;
      },
      TiaLC: function (p2074, p2075) {
        return p2074 === p2075;
      },
      DSfQn: "group by",
      YLahB: function (p2076, p2077) {
        return p2076 === p2077;
      },
      UDgvc: "min",
      zPbCd: function (p2078, p2079) {
        return p2078 ^ p2079;
      },
      zKURY: "count(distinct weCustomerKey)",
      wXpVZ: function (p2080, p2081) {
        return p2080 ^ p2081;
      },
      TCscc: function (p2082, p2083) {
        return p2082 + p2083;
      },
      zehsZ: "weCustomerKey",
      zsgtz: function (p2084, p2085) {
        return p2084 === p2085;
      },
      CGyAB: function (p2086, p2087) {
        return p2086 ^ p2087;
      },
      NIpTr: function (p2088, p2089) {
        return p2088 + p2089;
      },
      bZNOx: ") / ",
      rJpkZ: function (p2090, p2091) {
        return p2090 < p2091;
      },
      lxGFB: function (p2092, p2093) {
        return p2092 + p2093;
      },
      TGQuW: function (p2094, p2095) {
        return p2094 + p2095;
      },
      dXanT: function (p2096, p2097) {
        return p2096 + p2097;
      },
      EgdNg: function (p2098, p2099) {
        return p2098 + p2099;
      },
      xLIKc: " and ",
      wKEcg: " not like '%",
      wMWlF: function (p2100, p2101) {
        return p2100 ^ p2101;
      },
      MHcyF: "and",
      IFQJV: function (p2102, p2103) {
        return p2102 + p2103;
      },
      abyaZ: function (p2104, p2105) {
        return p2104 + p2105;
      },
      RFGjt: function (p2106, p2107) {
        return p2106 + p2107;
      },
      PnhDQ: function (p2108, p2109) {
        return p2108 + p2109;
      },
      RUnBC: " <=",
      Yzpsa: function (p2110, p2111) {
        return p2110 + p2111;
      },
      qfTjd: function (p2112, p2113) {
        return p2112 + p2113;
      },
      myLKq: function (p2114, p2115) {
        return p2114 + p2115;
      },
      zHcpV: function (p2116, p2117) {
        return p2116 + p2117;
      },
      mqavt: function (p2118, p2119) {
        return p2118 + p2119;
      },
      mAlCB: function (p2120, p2121) {
        return p2120 + p2121;
      },
      kCLUm: function (p2122, p2123) {
        return p2122 + p2123;
      },
      LqAiQ: function (p2124, p2125) {
        return p2124 + p2125;
      },
      DmYKU: function (p2126, p2127) {
        return p2126 + p2127;
      },
      BBzOR: function (p2128, p2129) {
        return p2128 + p2129;
      },
      GSPTh: function (p2130, p2131) {
        return p2130 ^ p2131;
      }
    };
    let v1996 = v1995.etfYw;
    let v1997 = "count";
    let v1998 = v1995.sHpMJ(319807, 319807);
    let v1999 = "";
    let v2000 = "";
    for (let v2001 = 0; v2001 < p2069.length; v2001++) {
      let v2002 = p2069[v2001].fieldName;
      let v2003 = vRequire3.convertOper(p2069[v2001].rule);
      if (v1995.TiaLC(v2003, v1995.DSfQn)) {
        v1998 = 1;
        v1999 = v2002;
        break;
      }
    }
    if (p2068.isRepeat === "2" || p2068.isRepeat === 2) {
      v1997 = "sum";
    } else if (v1995.TiaLC(p2068.isRepeat, "3") || p2068.isRepeat === 3) {
      v1997 = "avg";
    } else if (v1995.YLahB(p2068.isRepeat, "6") || p2068.isRepeat === 6) {
      v1997 = "max";
    } else if (p2068.isRepeat === "7" || p2068.isRepeat === 7) {
      v1997 = v1995.UDgvc;
    } else if (p2068.isRepeat === "8" || p2068.isRepeat === v1995.zPbCd(911684, 911692)) {
      v1997 = "sum";
      v2000 = v1995.zKURY;
    } else {
      v1997 = "count";
    }
    if (v1998 === 1 && v1999) {
      v1996 = v1996 + v1999;
    } else {
      v1996 = v1996 + p2068.fieldName;
    }
    v1996 = v1996 + " as groupByName, " + v1997 + "(";
    if (p2068.isRepeat === "5" || v1995.YLahB(p2068.isRepeat, v1995.wXpVZ(836272, 836277))) {
      v1996 = v1995.TCscc(v1996, " distinct weCustomerKey");
    } else if (p2068.isRepeat === "4" || p2068.isRepeat === 4) {
      v1996 = v1996 + v1995.zehsZ;
    } else if (v1995.zsgtz(p2068.isRepeat, "1") || v1995.YLahB(p2068.isRepeat, v1995.CGyAB(674979, 674978))) {
      v1996 = v1995.TCscc(v1995.NIpTr(v1996, " distinct "), p2068.fieldName);
    } else {
      v1996 = v1996 + p2068.fieldName;
    }
    if (v2000) {
      v1996 = v1995.NIpTr(v1996 + v1995.bZNOx + v2000 + " as count  from ", p2070);
    } else {
      v1996 = v1996 + ") as count from " + p2070;
    }
    if (p2069.length > 0) {
      let v2004 = p2068.andOr;
      if (!p2068.andOr || p2068.andOr === undefined) {
        v2004 = "and";
      } else {
        v2004 = vRequire3.convertAndOr(v2004);
      }
      var v2005 = "";
      var v2006 = "";
      for (let v2007 = v1995.wXpVZ(511106, 511106); v1995.rJpkZ(v2007, p2069.length); v2007++) {
        let v2008 = p2069[v2007].fieldName;
        let v2009 = vRequire3.convertOper(p2069[v2007].rule);
        let v2010 = p2069[v2007].value;
        if (v2009 === "is null") {
          v2005 = v1995.lxGFB(v1995.TGQuW(v1995.NIpTr(" ", v2005) + "(" + v2008 + " " + v2009 + " or ", v2008) + "='') ", v2004) + " ";
        } else if (v2009 === "is not null") {
          v2005 = v1995.NIpTr(v1995.dXanT(v1995.NIpTr(v1995.EgdNg(" " + v2005 + "(", v2008) + " " + v2009 + v1995.xLIKc, v2008), "!='') "), v2004) + " ";
        } else if (v2009 === "in") {
          let v2011 = v2010.split(",");
          let v2012 = "";
          for (let v2013 = 0; v2013 < v2011.length; v2013++) {
            v2012 += v1995.TCscc(v2008 + " like '%" + v2011[v2013], "%' ") + " or ";
          }
          v2012 = v2012.substring(0, v2012.lastIndexOf("or"));
          v2005 = v1995.NIpTr(v1995.NIpTr(v1995.dXanT(v1995.TGQuW(v2005, " ("), v2012) + ")", " ") + v2004, " ");
        } else if (v2009 === "not in") {
          let v2014 = v2010.split(",");
          let v2015 = "";
          for (let v2016 = v1995.zPbCd(990576, 990576); v1995.rJpkZ(v2016, v2014.length); v2016++) {
            v2015 += v2008 + v1995.wKEcg + v2014[v2016] + "%'  and ";
          }
          v2015 = v2015.substring(v1995.wMWlF(928861, 928861), v2015.lastIndexOf(v1995.MHcyF));
          v2005 = v1995.NIpTr(v1995.IFQJV(v1995.abyaZ(v2005, " (") + v2015, ")"), " ") + v2004 + " ";
        } else if (v2009 === "区间") {
          let v2017 = v2010.split(",");
          let v2018 = v1995.NIpTr(v1995.RFGjt(v1995.PnhDQ(v2008 + " >=", v2017[0]), " and ") + v2008 + v1995.RUnBC, v2017[v1995.zPbCd(257977, 257976)]);
          v2005 = v1995.Yzpsa(v2005 + " (", v2018) + ") " + v2004 + " ";
        } else if (v2009 === v1995.DSfQn) {
          v2006 = v1995.qfTjd(v1995.TCscc(" ", v2009) + " ", v2008);
        } else {
          v2005 = v1995.myLKq(v1995.zHcpV(v1995.mqavt(v1995.mAlCB(v1995.TCscc(" ", v2005) + v2008 + " ", v2009) + " '", v2010), "'") + " ", v2004) + " ";
        }
      }
      v2005 = v2005.substr(v1995.wMWlF(380865, 380865), v2005.lastIndexOf(v2004));
      if (v2005) {
        v1996 = v1995.lxGFB(v1995.kCLUm(v1995.TCscc(v1995.abyaZ(" " + v1996, " where 1=1 and ("), v2005), ") "), v2006);
      } else {
        v1996 = v1995.LqAiQ(v1995.DmYKU(" ", v1996) + " ", v2006);
      }
    } else {
      v1996 = v1995.BBzOR(v1996, " where 1=1 ");
    }
    v1996 = v1996 + " and DATE_FORMAT(happenTime,'%Y-%m-%d') = '" + p2071 + "'";
    if (p2068.isRepeat === "4" || v1995.TiaLC(p2068.isRepeat, 4) || p2068.isRepeat === "5" || p2068.isRepeat === v1995.GSPTh(396491, 396494)) {
      v1996 = v1996 + " group by " + p2068.fieldName;
    }
    return v1996;
  }
  static async summaryFunnelStatistics(p2132, p2133, p2134, p2135, p2136, p2137, p2138, p2139, p2140) {
    const v2019 = {
      DoiVt: "yyyy-MM-dd",
      nTorG: function (p2141, p2142) {
        return p2141 ^ p2142;
      }
    };
    let v2020 = p2139.Format("yyyy-MM-dd hh:mm:ss");
    let v2021 = p2139.Format(v2019.DoiVt);
    const v2022 = {
      pageId: p2133,
      cardId: p2134,
      cardName: p2135
    };
    v2022.count = isNaN(p2138) ? v2019.nTorG(442148, 442148) : p2138;
    v2022.calcField = p2136;
    v2022.calcFieldKey = p2137;
    v2022.happenDate = v2021;
    v2022.percentage = 0;
    p2140.push(v2022);
  }
  static async getCount(p2143) {
    const v2023 = {
      rkYOz: function (p2144, p2145) {
        return p2144 ^ p2145;
      },
      TFPLw: function (p2146, p2147) {
        return p2146 ^ p2147;
      },
      iUkDm: function (p2148, p2149) {
        return p2148 === p2149;
      }
    };
    let v2024 = v2023.rkYOz(803082, 803082);
    const v2025 = await BuryPointCardModel.statisticData(p2143);
    v2024 = v2025 ? v2025.length === 0 || isNaN(v2025[v2023.TFPLw(677135, 677135)].count) || v2023.iUkDm(v2025[0].count, null) ? 0 : v2025[0].count : v2023.rkYOz(989055, 989055);
    return v2024;
  }
  static async ["statisticTotalList"](p2150, p2151, p2152, p2153, p2154, p2155) {
    const v2026 = {
      PDPxz: function (p2156, p2157) {
        return p2156 ^ p2157;
      },
      oSQwk: function (p2158, p2159) {
        return p2158 ^ p2159;
      },
      wpwgp: function (p2160, p2161) {
        return p2160 + p2161;
      },
      KjGld: function (p2162, p2163) {
        return p2162 >= p2163;
      },
      ymQjz: "table",
      NDCnU: function (p2164, p2165, p2166) {
        return p2164(p2165, p2166);
      },
      Eruat: function (p2167, p2168) {
        return p2167 > p2168;
      },
      QRgrK: function (p2169, p2170) {
        return p2169 + p2170;
      },
      BYlAH: function (p2171, p2172) {
        return p2171 ^ p2172;
      },
      MraCl: "yyyy-MM-dd",
      wYhIl: function (p2173, p2174) {
        return p2173 + p2174;
      },
      SRvsY: function (p2175, p2176) {
        return p2175 + p2176;
      },
      SCOyO: function (p2177, p2178) {
        return p2177 + p2178;
      },
      CtFqw: function (p2179, p2180) {
        return p2179 + p2180;
      },
      fzIXh: " and ",
      FKcaB: " 23:59:59",
      Yqbbk: function (p2181, p2182) {
        return p2181 + p2182;
      },
      CceMN: function (p2183, p2184) {
        return p2183(p2184);
      },
      gNjOV: function (p2185, p2186) {
        return p2185 ^ p2186;
      },
      HSzEC: "and",
      DLnEa: function (p2187, p2188) {
        return p2187 + p2188;
      }
    };
    let v2027 = [];
    let v2028 = JSON.parse(p2152);
    if (v2028) {
      let v2029 = [];
      for (let v2030 = 0; v2030 < v2028.length; v2030++) {
        let v2031 = {};
        let v2032 = v2028[v2030].prePoint;
        let v2033 = v2028[v2030].calcName;
        let v2034 = v2028[v2030].calcType;
        let v2035 = v2028[v2030].unit;
        let v2036 = v2032.pointId;
        let v2037 = v2032.calcField;
        let v2038 = v2032.queryCriteria;
        let vParseInt3 = parseInt(v2037.fieldIndex, v2026.PDPxz(636112, 636122));
        v2031.fieldIndex = vParseInt3;
        v2031.calcName = v2033;
        v2031.unit = v2035;
        v2031.calcType = v2034;
        v2031.calcTotail = v2026.oSQwk(633672, 633672);
        v2031.calcTotailRate = 0;
        v2031.calcAverage = 0;
        v2031.calcMax = 0;
        v2031.calcMin = 0;
        v2031.pointId = v2036;
        let v2039 = [];
        let v2040 = "table" + parseInt(v2037.fieldIndex, v2026.PDPxz(492061, 492055));
        v2029.push(v2040);
        let v2041 = v2026.wpwgp(p2150, "_") + v2036;
        let v2042 = "";
        let v2043;
        let v2044 = " where ";
        let v2045 = "";
        if (v2026.KjGld(v2030, 1)) {
          for (let v2046 = 1; v2046 <= v2030; v2046++) {
            let v2047 = v2028[v2046 - 1].prePoint;
            let v2048 = v2047.calcField;
            let v2049 = v2026.ymQjz + parseInt(v2048.fieldIndex, 10);
            let v2050 = v2049 + "." + v2048.fieldName;
            let v2051 = v2028[v2046].prePoint;
            let v2052 = v2051.calcField;
            let v2053 = "table" + v2026.NDCnU(parseInt, v2052.fieldIndex, 10);
            let v2054 = v2053 + "." + v2052.fieldName;
            v2044 = v2026.wpwgp(v2044 + v2050, "=") + v2054 + " and ";
          }
          if (p2151 && p2151 > v2026.oSQwk(750179, 750178) && v2026.Eruat(p2155.length, p2151)) {
            let v2055 = v2026.PDPxz(468834, 468834);
            for (let v2056 = 0; v2056 < p2155.length; v2056++) {
              let v2057 = p2155[v2056];
              let v2058 = new Date(v2026.QRgrK(new Date(p2155[v2056]).getTime(), v2026.NDCnU(parseInt, p2151, 10) * 24 * v2026.BYlAH(655664, 659232) * 1000)).Format(v2026.MraCl);
              let v2059 = await this.getNoFirstStepCount(v2030, p2150, v2040, v2028, v2037.fieldName, v2044, v2057, v2058);
              v2055 = v2026.wYhIl(v2055, parseFloat(v2059));
            }
            let vParseFloat4 = parseFloat(v2055);
            v2031.calcTotail = vParseFloat4 ? vParseFloat4 : 0;
            v2027.push(v2031);
          } else {
            for (let v2060 = 0; v2060 <= v2030; v2060++) {
              let v2061 = v2028[v2060].prePoint;
              let v2062 = v2061.pointId;
              let v2063 = v2061.calcField;
              let v2064 = v2061.queryCriteria;
              let v2065 = "table" + parseInt(v2063.fieldIndex, 10);
              let v2066 = v2026.SRvsY(p2150 + "_", v2062);
              v2042 = v2026.SCOyO(v2042 + v2066, " ") + v2065 + ",";
              v2045 = v2045 + (await CommonModel.criteriaSql(v2065, v2063, v2064));
              v2045 = v2026.SRvsY(v2026.CtFqw(v2045 + " " + v2065 + ".happenTime > '" + p2153, " 00:00:00") + "'" + v2026.fzIXh + v2065 + ".happenTime <= '" + p2154 + v2026.FKcaB, "'");
              v2045 = v2026.Yqbbk(v2045, v2026.fzIXh);
            }
            v2045 = v2045.substring(0, v2045.lastIndexOf("and"));
            v2042 = v2042.substring(v2026.PDPxz(659777, 659777), v2042.lastIndexOf(","));
            v2042 = v2042 + v2044;
            v2043 = await CommonModel.splicingFunnelSql(v2040, v2042, v2037.fieldName, v2045);
            let v2067 = await this.getCount(v2043);
            let v2068 = v2026.CceMN(parseFloat, v2067);
            v2031.calcTotail = v2068 ? v2068 : 0;
            v2027.push(v2031);
          }
        } else {
          v2042 = v2041 + " " + v2040;
          v2042 = v2026.Yqbbk(v2042, v2044);
          v2045 = await CommonModel.criteriaSql(v2040, v2037, v2038);
          v2045 = v2045.substring(v2026.gNjOV(402381, 402381), v2045.lastIndexOf(v2026.HSzEC));
          v2045 = v2026.DLnEa(v2026.QRgrK(v2026.wYhIl(v2045, " and happenTime > '") + p2153, " 00:00:00") + "' and happenTime <= '" + p2154, " 23:59:59") + "'";
          v2043 = await CommonModel.splicingFunnelSql(v2040, v2042, v2037.fieldName, v2045);
          let v2069 = await this.getCount(v2043);
          let v2070 = v2026.CceMN(parseFloat, v2069);
          v2031.calcTotail = v2070 ? v2070 : 0;
          v2027.push(v2031);
        }
      }
    }
    return v2027;
  }
  static async getNoFirstStepCount(p2189, p2190, p2191, p2192, p2193, p2194, p2195, p2196) {
    const v2071 = {
      tXvur: function (p2197, p2198) {
        return p2197 ^ p2198;
      },
      feFXI: "table",
      EOHlc: function (p2199, p2200) {
        return p2199 + p2200;
      },
      jcCMm: function (p2201, p2202) {
        return p2201 + p2202;
      },
      uMfvw: function (p2203, p2204) {
        return p2203 + p2204;
      },
      TLfUM: " 00:00:00",
      msWLu: " and ",
      kYSkB: " 23:59:59",
      WMsOi: function (p2205, p2206) {
        return p2205 + p2206;
      },
      zAwbz: function (p2207, p2208) {
        return p2207 ^ p2208;
      }
    };
    let v2072 = "";
    let v2073 = "";
    for (let v2074 = v2071.tXvur(576663, 576663); v2074 <= p2189; v2074++) {
      let v2075 = p2192[v2074].prePoint;
      let v2076 = v2075.pointId;
      let v2077 = v2075.calcField;
      let v2078 = v2075.queryCriteria;
      let v2079 = v2071.feFXI + parseInt(v2077.fieldIndex, v2071.tXvur(555403, 555393));
      let v2080 = v2071.EOHlc(v2071.jcCMm(p2190, "_"), v2076);
      v2072 = v2071.jcCMm(v2071.EOHlc(v2072, v2080) + " " + v2079, ",");
      v2073 = v2071.jcCMm(v2073, await CommonModel.criteriaSql(v2079, v2077, v2078));
      v2073 = v2071.jcCMm(v2071.jcCMm(v2071.EOHlc(v2071.jcCMm(v2071.uMfvw(v2071.uMfvw(v2073, " "), v2079), "."), "happenTime > '") + p2195 + v2071.TLfUM + "'", v2071.msWLu) + v2079 + ".happenTime <= '" + p2196, v2071.kYSkB) + "'";
      v2073 = v2071.WMsOi(v2073, " and ");
    }
    v2073 = v2073.substring(v2071.zAwbz(401930, 401930), v2073.lastIndexOf("and"));
    v2072 = v2072.substring(v2071.zAwbz(326009, 326009), v2072.lastIndexOf(","));
    v2072 = v2072 + p2194;
    let v2081 = await CommonModel.splicingFunnelSql(p2191, v2072, p2193, v2073);
    let v2082 = await this.getCount(v2081);
    return v2082;
  }
  static async statisticListByDay(p2209, p2210, p2211, p2212, p2213, p2214) {
    const v2083 = {
      nvKjm: function (p2215, p2216, p2217) {
        return p2215(p2216, p2217);
      },
      gBQXS: function (p2218, p2219) {
        return p2218 ^ p2219;
      },
      EqWil: function (p2220, p2221) {
        return p2220 ^ p2221;
      },
      lMhtt: function (p2222, p2223) {
        return p2222 ^ p2223;
      },
      PhmAX: function (p2224, p2225) {
        return p2224 ^ p2225;
      },
      UUEBV: function (p2226, p2227) {
        return p2226 + p2227;
      },
      AImTL: function (p2228, p2229) {
        return p2228 + p2229;
      },
      mcRsj: " DATE_FORMAT(",
      XSfwd: function (p2230, p2231) {
        return p2230 - p2231;
      },
      dbWJh: function (p2232, p2233) {
        return p2232 + p2233;
      },
      xkSKa: function (p2234, p2235) {
        return p2234 + p2235;
      },
      hHbRK: "and",
      EFOea: function (p2236, p2237) {
        return p2236 < p2237;
      },
      ddJWj: function (p2238, p2239) {
        return p2238 ^ p2239;
      },
      kLpIv: function (p2240, p2241) {
        return p2240 ^ p2241;
      },
      yQHMY: function (p2242, p2243) {
        return p2242 / p2243;
      },
      EWrHd: function (p2244, p2245) {
        return p2244 ^ p2245;
      }
    };
    let v2084 = [];
    let v2085 = JSON.parse(p2211);
    if (v2085) {
      let v2086 = [];
      for (let v2087 = 0; v2087 < v2085.length; v2087++) {
        let v2088 = {};
        let v2089 = "";
        let v2090 = v2085[v2087].prePoint;
        let v2091 = v2085[v2087].calcName;
        let v2092 = v2085[v2087].calcType;
        let v2093 = v2085[v2087].unit;
        let v2094 = v2090.pointId;
        let v2095 = v2090.calcField;
        let v2096 = v2090.queryCriteria;
        let v2097 = v2083.nvKjm(parseInt, v2095.fieldIndex, v2083.gBQXS(669015, 669021));
        v2088.fieldIndex = v2097;
        v2088.calcName = v2091;
        v2088.unit = v2093;
        v2088.calcType = v2092;
        v2088.calcTotail = 0;
        v2088.calcTotailRate = v2083.EqWil(575185, 575185);
        v2088.calcAverage = 0;
        v2088.calcMax = 0;
        v2088.calcMin = v2083.lMhtt(635268, 635268);
        v2088.pointId = v2094;
        let v2098 = [];
        let v2099 = "table" + parseInt(v2095.fieldIndex, 10);
        v2086.push(v2099);
        let v2100 = p2209 + "_" + v2094;
        let v2101;
        let v2102 = " where ";
        let v2103 = "";
        let v2104 = "";
        if (v2087 >= v2083.PhmAX(202151, 202150)) {
          for (let v2105 = 0; v2105 <= v2087; v2105++) {
            let v2106 = v2085[v2105].prePoint;
            let v2107 = v2106.pointId;
            let v2108 = v2106.calcField;
            let v2109 = v2106.queryCriteria;
            let v2110 = "table" + parseInt(v2108.fieldIndex, 10);
            let v2111 = p2209 + "_" + v2107;
            v2089 = v2083.UUEBV(v2083.UUEBV(v2089, v2111) + " " + v2110, ",");
            v2103 = v2103 + (await CommonModel.criteriaSql(v2110, v2108, v2109));
            v2103 = v2083.UUEBV(v2083.UUEBV(v2083.AImTL(v2103, v2083.mcRsj) + v2110 + ".happenTime,'%Y-%m-%d') > '" + p2212 + "' and DATE_FORMAT(" + v2110, ".") + "happenTime,'%Y-%m-%d') <= '" + p2213, "'");
            v2103 = v2083.UUEBV(v2103, " and ");
          }
          v2103 = v2103.substring(0, v2103.lastIndexOf("and"));
          for (let v2112 = 1; v2112 <= v2087; v2112++) {
            let v2113 = v2085[v2083.XSfwd(v2112, 1)].prePoint;
            let v2114 = v2113.calcField;
            let v2115 = "table" + parseInt(v2114.fieldIndex, 10);
            let v2116 = v2083.dbWJh(v2115 + ".", v2114.fieldName);
            let v2117 = v2085[v2112].prePoint;
            let v2118 = v2117.calcField;
            let v2119 = "table" + v2083.nvKjm(parseInt, v2118.fieldIndex, 10);
            let v2120 = v2083.xkSKa(v2119, ".") + v2118.fieldName;
            v2102 = v2102 + v2116 + "=" + v2120 + " and ";
          }
          v2089 = v2089.substring(0, v2089.lastIndexOf(","));
          v2089 = v2083.AImTL(v2083.dbWJh(v2089, v2102), v2104);
        } else {
          v2089 = v2100 + " " + v2099;
          v2089 = v2089 + v2102;
          v2103 = await CommonModel.criteriaSql(v2099, v2095, v2096);
          v2103 = v2103.substring(0, v2103.lastIndexOf(v2083.hHbRK));
          v2103 = v2083.AImTL(v2103 + " and DATE_FORMAT(happenTime,'%Y-%m-%d') > '" + p2212 + "' and DATE_FORMAT(happenTime,'%Y-%m-%d') <= '", p2213) + "'";
        }
        let v2121 = await CommonModel.splicingFunnelGroupBySql(v2099, v2089, v2095.fieldName, v2103);
        let v2122 = await BuryPointCardModel.statisticData(v2121);
        let v2123 = [];
        let v2124 = 0;
        for (let v2125 = 0; v2083.EFOea(v2125, p2214.length); v2125++) {
          let v2126 = {};
          let v2127 = p2214[v2125];
          v2126.count = 0;
          for (let v2128 = v2083.ddJWj(734964, 734964); v2128 < v2122.length; v2128++) {
            if (v2127 === v2122[v2128].happenDate) {
              v2126.count = vRequire3.toFixed(v2122[v2128].count * 1, 2) || 0;
              v2123.push(v2126.count);
              v2124 = v2124 + v2126.count;
              break;
            }
          }
          v2126.happenYMDDate = v2127;
          v2126.percentage = v2083.PhmAX(413711, 413711);
          v2098.push(v2126);
        }
        v2088.calcTotail = vRequire3.toFixed(v2124, v2083.kLpIv(790759, 790757)) || 0;
        v2088.calcAverage = vRequire3.toFixed(v2083.yQHMY(v2123.reduce((p2246, p2247) => p2246 + p2247, v2083.EWrHd(814097, 814097)), v2123.length), 2) || 0;
        v2088.calcMax = Math.max(...v2123) || v2083.kLpIv(111748, 111748);
        v2088.calcMin = Math.min(...v2123) || 0;
        v2088.calcData = v2098;
        v2084.push(v2088);
      }
    }
    return v2084;
  }
  static async ["calcFunnelTotalRate"](p2248) {
    const v2129 = {
      cCcgN: function (p2249, p2250) {
        return p2249 - p2250;
      },
      zlSuj: function (p2251, p2252) {
        return p2251 ^ p2252;
      },
      AaiSC: function (p2253, p2254) {
        return p2253 < p2254;
      },
      zKmuQ: function (p2255, p2256, p2257) {
        return p2255(p2256, p2257);
      },
      vICNY: function (p2258, p2259) {
        return p2258 ^ p2259;
      },
      grbTd: function (p2260, p2261) {
        return p2260 === p2261;
      },
      fxzCt: function (p2262, p2263) {
        return p2262 ^ p2263;
      },
      lNLMx: function (p2264, p2265) {
        return p2264 / p2265;
      },
      dXvqW: function (p2266, p2267) {
        return p2266 ^ p2267;
      },
      aguXH: function (p2268, p2269) {
        return p2268 ^ p2269;
      },
      YQZEJ: function (p2270, p2271) {
        return p2270 ^ p2271;
      },
      xRQPR: function (p2272, p2273) {
        return p2272 ^ p2273;
      }
    };
    p2248.sort(function (p2274, p2275) {
      return v2129.cCcgN(p2274.fieldIndex, p2275.fieldIndex);
    });
    let v2130 = v2129.zlSuj(440688, 440688);
    for (let v2131 = 0; v2129.AaiSC(v2131, p2248.length); v2131++) {
      v2130 = v2129.zKmuQ(parseInt, v2130, 10) + v2129.zKmuQ(parseInt, p2248[v2131].calcTotail, 10);
      if (v2131 !== p2248.length - v2129.vICNY(187173, 187172)) {
        if (v2129.grbTd(parseInt(p2248[v2131].calcTotail, v2129.zlSuj(565606, 565612)), v2129.fxzCt(204973, 204973))) {
          p2248[v2131 + 1].calcTotailRate = 0;
        } else {
          let v2132 = vRequire3.toFixed(v2129.lNLMx(parseInt(p2248[v2131 + v2129.dXvqW(456787, 456786)].calcTotail, v2129.vICNY(440337, 440347)), parseInt(p2248[v2131].calcTotail, 10)) * 100, v2129.aguXH(723295, 723293));
          p2248[v2131 + 1].calcTotailRate = v2132 ? v2132 : v2129.YQZEJ(238610, 238610);
        }
      }
    }
    if (v2130 === 0) {
      p2248[0].calcTotailRate = 0;
    } else {
      let v2133 = vRequire3.toFixed(v2129.lNLMx(parseInt(p2248[p2248.length - v2129.vICNY(887664, 887665)].calcTotail, v2129.fxzCt(454299, 454289)), parseInt(p2248[v2129.xRQPR(492446, 492446)].calcTotail, v2129.vICNY(713661, 713655))) * 100, 2);
      p2248[0].calcTotailRate = v2133 ? v2133 : 0;
    }
  }
  static async calcFunnelEveryDayStepRate(p2276) {
    const v2134 = {
      FxQRQ: function (p2277, p2278) {
        return p2277 ^ p2278;
      },
      zERtJ: function (p2279, p2280) {
        return p2279 - p2280;
      },
      VRSzq: function (p2281, p2282) {
        return p2281 ^ p2282;
      },
      oMinB: function (p2283, p2284, p2285) {
        return p2283(p2284, p2285);
      },
      bNIAk: function (p2286, p2287) {
        return p2286 ^ p2287;
      },
      HnxDz: function (p2288, p2289) {
        return p2288 < p2289;
      },
      WzPnZ: function (p2290, p2291) {
        return p2290 ^ p2291;
      },
      dMjna: function (p2292, p2293) {
        return p2292 - p2293;
      },
      BARNa: function (p2294, p2295) {
        return p2294 ^ p2295;
      },
      SJMhv: function (p2296, p2297) {
        return p2296 === p2297;
      },
      DNmUg: function (p2298, p2299, p2300) {
        return p2298(p2299, p2300);
      },
      acneA: function (p2301, p2302) {
        return p2301 ^ p2302;
      }
    };
    p2276.sort(function (p2303, p2304) {
      return p2303.fieldIndex - p2304.fieldIndex;
    });
    let v2135 = v2134.FxQRQ(548802, 548802);
    for (let v2136 = 0; v2136 < p2276.length; v2136++) {
      v2135 = parseInt(v2135, 10) + parseInt(p2276[v2136].calcTotail, 10);
      if (v2136 !== v2134.zERtJ(p2276.length, v2134.FxQRQ(932167, 932166))) {
        let v2137 = p2276[v2136].calcData;
        for (let v2138 = v2134.VRSzq(306394, 306394); v2138 < v2137.length; v2138++) {
          let v2139 = v2137[v2138];
          if (v2134.oMinB(parseInt, v2139.count, 10) === v2134.VRSzq(749735, 749735)) {
            v2139.percentage = v2134.bNIAk(187230, 187230);
            continue;
          }
          let v2140 = p2276[v2136 + v2134.VRSzq(942498, 942499)].calcData;
          for (let v2141 = 0; v2134.HnxDz(v2141, v2140.length); v2141++) {
            if (v2139.happenYMDDate === v2140[v2141].happenYMDDate) {
              let v2142 = vRequire3.toFixed(parseInt(v2140[v2141].count, 10) / parseInt(v2139.count, 10) * 100, v2134.WzPnZ(797631, 797629));
              v2140[v2141].percentage = v2142 ? v2142 : 0;
              break;
            }
          }
        }
      }
    }
    if (v2135 !== 0) {
      let v2143 = p2276[v2134.FxQRQ(237937, 237937)].calcData;
      for (let v2144 = 0; v2144 < v2143.length; v2144++) {
        let v2145 = v2143[v2144];
        if (v2134.oMinB(parseInt, v2145.count, v2134.VRSzq(234705, 234715)) === 0) {
          v2145.percentage = v2134.bNIAk(360196, 360196);
          continue;
        }
        let v2146 = p2276[v2134.dMjna(p2276.length, 1)].calcData;
        for (let v2147 = v2134.BARNa(837650, 837650); v2147 < v2146.length; v2147++) {
          if (v2134.SJMhv(v2145.happenYMDDate, v2146[v2147].happenYMDDate)) {
            let v2148 = vRequire3.toFixed(parseInt(v2146[v2147].count, 10) / v2134.DNmUg(parseInt, v2145.count, v2134.bNIAk(977586, 977592)) * 100, v2134.acneA(345175, 345173));
            v2145.percentage = v2148 ? v2148 : 0;
            break;
          }
        }
      }
    }
  }
  static async ["calcFunnelRate"](p2305) {
    const v2149 = {
      OGACP: function (p2306, p2307, p2308) {
        return p2306(p2307, p2308);
      },
      HjVRX: function (p2309, p2310) {
        return p2309 - p2310;
      },
      nTYdO: function (p2311, p2312) {
        return p2311 === p2312;
      },
      jvymZ: function (p2313, p2314) {
        return p2313 ^ p2314;
      },
      JMdkV: function (p2315, p2316) {
        return p2315 + p2316;
      },
      XUuHI: function (p2317, p2318, p2319) {
        return p2317(p2318, p2319);
      },
      EzSkx: function (p2320, p2321, p2322) {
        return p2320(p2321, p2322);
      },
      JODJh: function (p2323, p2324) {
        return p2323 ^ p2324;
      },
      bxZms: function (p2325, p2326) {
        return p2325 < p2326;
      },
      pdRIU: function (p2327, p2328, p2329) {
        return p2327(p2328, p2329);
      },
      IQovS: function (p2330, p2331) {
        return p2330 ^ p2331;
      },
      naiQg: function (p2332, p2333, p2334) {
        return p2332(p2333, p2334);
      },
      OdTho: function (p2335, p2336) {
        return p2335 ^ p2336;
      },
      QcOoL: function (p2337, p2338) {
        return p2337 < p2338;
      },
      kwFUN: function (p2339, p2340) {
        return p2339 ^ p2340;
      },
      ciqFB: function (p2341, p2342) {
        return p2341 - p2342;
      },
      FXzuS: function (p2343, p2344) {
        return p2343 ^ p2344;
      },
      qtrFC: function (p2345, p2346) {
        return p2345 < p2346;
      },
      alywp: function (p2347, p2348) {
        return p2347 * p2348;
      },
      axeat: function (p2349, p2350) {
        return p2349 ^ p2350;
      }
    };
    p2305.sort(function (p2351, p2352) {
      return p2351.fieldIndex - p2352.fieldIndex;
    });
    let v2150 = 0;
    for (let v2151 = 0; v2151 < p2305.length; v2151++) {
      v2150 = v2149.OGACP(parseInt, v2150, 10) + parseInt(p2305[v2151].calcTotail, 10);
      if (v2151 !== v2149.HjVRX(p2305.length, 1)) {
        if (v2149.nTYdO(v2149.OGACP(parseInt, p2305[v2151].calcTotail, v2149.jvymZ(420477, 420471)), 0)) {
          p2305[v2149.JMdkV(v2151, 1)].calcTotailRate = 0;
        } else {
          let v2152 = vRequire3.toFixed(v2149.XUuHI(parseInt, p2305[v2151 + 1].calcTotail, 10) / v2149.EzSkx(parseInt, p2305[v2151].calcTotail, v2149.jvymZ(170118, 170124)) * 100, 2);
          p2305[v2151 + 1].calcTotailRate = v2152 ? v2152 : 0;
        }
        let v2153 = p2305[v2151].calcData;
        for (let v2154 = v2149.JODJh(607054, 607054); v2154 < v2153.length; v2154++) {
          let v2155 = v2153[v2154];
          if (v2149.XUuHI(parseInt, v2155.count, 10) === 0) {
            v2155.percentage = 0;
            continue;
          }
          let v2156 = p2305[v2151 + 1].calcData;
          for (let v2157 = 0; v2149.bxZms(v2157, v2156.length); v2157++) {
            if (v2155.happenDate === v2156[v2157].happenDate) {
              let v2158 = vRequire3.toFixed(v2149.pdRIU(parseInt, v2156[v2157].count, 10) / parseInt(v2155.count, 10) * 100, 2);
              v2156[v2157].percentage = v2158 ? v2158 : v2149.JODJh(180438, 180438);
              break;
            }
          }
        }
      }
    }
    if (v2149.nTYdO(v2150, 0)) {
      p2305[v2149.IQovS(722128, 722128)].calcTotailRate = 0;
    } else {
      let v2159 = vRequire3.toFixed(parseInt(p2305[p2305.length - 1].calcTotail, 10) / v2149.naiQg(parseInt, p2305[0].calcTotail, 10) * 100, 2);
      p2305[0].calcTotailRate = v2159 ? v2159 : v2149.OdTho(573057, 573057);
      let v2160 = p2305[0].calcData;
      for (let v2161 = 0; v2149.QcOoL(v2161, v2160.length); v2161++) {
        let v2162 = v2160[v2161];
        if (parseInt(v2162.count, 10) === v2149.kwFUN(790836, 790836)) {
          v2162.percentage = 0;
          continue;
        }
        let v2163 = p2305[v2149.ciqFB(p2305.length, v2149.FXzuS(902279, 902278))].calcData;
        for (let v2164 = 0; v2149.qtrFC(v2164, v2163.length); v2164++) {
          if (v2162.happenDate === v2163[v2164].happenDate) {
            let v2165 = vRequire3.toFixed(v2149.alywp(parseInt(v2163[v2164].count, v2149.axeat(158739, 158745)) / parseInt(v2162.count, 10), 100), 2);
            v2162.percentage = v2165 ? v2165 : 0;
            break;
          }
        }
      }
    }
  }
  static async ["convertFunnelConversionRate"](p2353) {
    const v2166 = {
      nOyEq: function (p2354, p2355) {
        return p2354 ^ p2355;
      },
      ZybWh: function (p2356, p2357) {
        return p2356 === p2357;
      }
    };
    for (let v2167 = v2166.nOyEq(692659, 692659); v2167 < p2353.length; v2167++) {
      let v2168 = p2353[v2167].calcData;
      let v2169 = [];
      for (let v2170 = 0; v2170 < v2168.length; v2170++) {
        let v2171 = v2168[v2170];
        let v2172 = {};
        if (!v2171.percentage || v2166.ZybWh(v2171.percentage, "") || v2171.percentage === undefined) {
          v2172.count = 0;
        } else {
          v2172.count = v2171.percentage;
        }
        v2172.happenDate = v2171.happenDate;
        v2169.push(v2172);
      }
      p2353[v2167].calcData = v2169;
    }
  }
}
class C18 {
  static async create(p2358) {
    const v2173 = {
      Nvfdj: function (p2359, p2360) {
        return p2359 === p2360;
      },
      DrREy: function (p2361, p2362) {
        return p2361 ^ p2362;
      },
      FajMf: function (p2363, p2364) {
        return p2363 > p2364;
      },
      mwrZr: function (p2365, p2366) {
        return p2365 ^ p2366;
      },
      dMmNB: function (p2367, p2368) {
        return p2367 + p2368;
      },
      jkjYd: function (p2369, p2370) {
        return p2369 + p2370;
      },
      qWPXJ: "event_",
      OYMSS: function (p2371, p2372) {
        return p2371 < p2372;
      },
      wusEw: "默认分组",
      qVvNi: "默认页面",
      rEWrQ: function (p2373, p2374) {
        return p2373 == p2374;
      },
      pqTvz: function (p2375, p2376) {
        return p2375 ^ p2376;
      }
    };
    let v2174 = JSON.parse(p2358.request.body);
    const {
      nickname = "",
      companyId = ""
    } = p2358.user;
    v2174.createBy = nickname;
    v2174.companyId = companyId;
    if (v2174.env && v2173.Nvfdj(v2174.type, v2173.DrREy(648693, 648692))) {
      const v2175 = v2174.env.split(",");
      if (accountInfo.isCloud === true) {
        const v2176 = await vRequire3.postJson(LOCAL_SERVER + "/wfCenter/getProjectCountByCompanyId", {
          companyId: companyId
        }).catch(p2377 => {
          console.error("/wfCenter/getProjectCountByCompanyId error", p2377);
        });
        if (v2176) {
          const {
            totalProjectCount: _0xb8eb09,
            productInfo: _0x16330e
          } = v2176.data;
          if (v2173.FajMf(_0xb8eb09 + v2175.length, _0x16330e.projectCount)) {
            p2358.response.status = 200;
            p2358.body = vRequire9.SUCCESS_200("您好，您的项目余额不足（" + (_0x16330e.projectCount - _0xb8eb09) + "个），无法再继续创建。", 1);
            return;
          }
        }
      }
    }
    let v2177 = v2173.mwrZr(629379, 629379);
    const v2178 = await BuryPointProjectModel.getCountByNoSysType();
    if (v2178 && v2178.length > 0) {
      v2177 = v2178[0].count * 1;
    }
    if (v2174.type === v2173.DrREy(226690, 226691) && global.eventInfo.purchaseCodeType === 81 && v2177 >= v2173.mwrZr(938872, 938875)) {
      p2358.response.status = 412;
      p2358.body = vRequire9.ERROR_412("项目数量已达上限，无法继续创建。");
      return;
    }
    if (v2174.name && v2174.type) {
      let v2179;
      let v2180 = [];
      if (v2174.type == 1) {
        const v2181 = await BuryPointProjectModel.getCountByNameAndType(v2174.name, v2174.type);
        let v2182 = v2181[0].count;
        if (v2182 > 0) {
          p2358.response.status = 412;
          p2358.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_FAIL_NAME_EXIST));
          return;
        }
        let v2183 = v2174.env.split(",");
        const v2184 = new Date();
        const v2185 = v2184.Format("yyyyMMdd");
        const v2186 = v2184.Format("hhmmssS");
        let v2187 = v2173.dMmNB(v2173.dMmNB(v2173.jkjYd(v2173.qWPXJ, v2185) + "_", v2186), "_");
        for (let v2188 = 0; v2173.OYMSS(v2188, v2183.length); v2188++) {
          v2179 = await C18.createNewProject(v2174.name, v2187, v2183[v2188], "0", nickname, companyId);
          v2174.projectId = v2179.projectId;
          v2180.push({
            id: v2179.id,
            projectId: v2179.projectId,
            title: v2179.name,
            parentId: v2179.parentId,
            key: v2179.id,
            type: v2179.type
          });
          let v2189 = {};
          v2189.type = v2173.mwrZr(768567, 768565);
          v2189.parentId = v2179.id;
          v2189.projectId = v2179.projectId;
          v2189.name = v2173.wusEw;
          v2189.createBy = nickname;
          let v2190 = await BuryPointProjectModel.create(v2189);
          let v2191 = {
            type: 3,
            parentId: v2190.id,
            projectId: v2179.projectId,
            name: v2173.qVvNi,
            createBy: nickname
          };
          let v2192 = await BuryPointProjectModel.create(v2191);
          await C12.handleWeCardData(v2179.projectId, v2179.name, v2192.id, v2174.createBy);
        }
      } else if (v2173.rEWrQ(v2174.type, 2)) {
        if (v2174.parentId) {
          const v2193 = await BuryPointProjectModel.getCountByNameAndParentAndType(v2174.name, v2174.parentId, v2174.type);
          let v2194 = v2193[0].count;
          if (v2194 > 0) {
            p2358.response.status = 412;
            p2358.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_FAIL_GROUP_NAME_EXIST));
            return;
          }
          let v2195 = await BuryPointProjectModel.detail(v2174.parentId);
          const {
            projectId: _0x3bd088
          } = v2195;
          v2174.projectId = _0x3bd088;
          v2179 = await BuryPointProjectModel.create(v2174);
        } else {
          p2358.response.status = 412;
          p2358.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_PARAM_FAIL));
          return;
        }
      } else if (v2174.type == v2173.mwrZr(263144, 263147)) {
        if (v2174.parentId) {
          const v2196 = await BuryPointProjectModel.getCountByNameAndParentAndType(v2174.name, v2174.parentId, v2174.type);
          let v2197 = v2196[0].count;
          if (v2197 > 0) {
            p2358.response.status = 412;
            p2358.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_FAIL_PAGE_NAME_EXIST));
            return;
          }
          let v2198 = await BuryPointProjectModel.detail(v2174.parentId);
          const {
            projectId: _0x3ff977
          } = v2198;
          v2174.projectId = _0x3ff977;
          v2179 = await BuryPointProjectModel.create(v2174);
        } else {
          p2358.response.status = 412;
          p2358.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_PARAM_FAIL));
          return;
        }
      }
      const v2199 = await BuryPointProjectModel.detail(v2179.id);
      p2358.response.status = 200;
      p2358.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_SUCCESS), v2180);
    } else {
      p2358.response.status = v2173.pqTvz(163874, 164286);
      p2358.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_PARAM_FAIL));
    }
  }
  static async ["createNewProject"](p2378, p2379, p2380, p2381, p2382, p2383) {
    const v2200 = {
      ixKwt: function (p2384, p2385) {
        return p2384 + p2385;
      },
      CgiKo: function (p2386, p2387) {
        return p2386 === p2387;
      },
      sjrtm: function (p2388, p2389) {
        return p2388 ^ p2389;
      },
      IzABX: "_BuryPointCardStatistics"
    };
    let v2201 = {};
    v2201.name = v2200.ixKwt(vRequire3.capitalizeFirstLetter(p2380), "-") + p2378;
    v2201.sysType = p2381;
    v2201.type = 1;
    v2201.parentId = -1;
    v2201.delStatus = 0;
    v2201.createBy = p2382;
    v2201.companyId = p2383;
    v2201.env = p2380;
    v2201.projectId = p2379 + p2380;
    let v2202 = await C11.judgeProjectCount();
    if (v2200.CgiKo(v2202, v2200.sjrtm(645907, 645906))) {
      ctx.response.status = 414;
      ctx.body = vRequire9.ERROR_CARD_BALANCE_414("项目余额不足");
      return;
    }
    let v2203 = await BuryPointProjectModel.create(v2201);
    if (v2203) {
      await C12.initWeFieldAndPointData(v2201.projectId, p2382, p2383);
      let v2204 = v2201.projectId + v2200.IzABX;
      CommonModel.createStatisticsTable(v2204);
    }
    return v2203;
  }
  static async update(p2390) {
    const v2205 = {
      ivxGN: function (p2391, p2392) {
        return p2391 ^ p2392;
      }
    };
    let v2206 = JSON.parse(p2390.request.body);
    let v2207 = v2206.id;
    const {
      nickname: _0x49e52a
    } = p2390.user;
    v2206.updateBy = _0x49e52a;
    if (v2206) {
      await BuryPointProjectModel.update(v2207, v2206);
      p2390.response.status = v2205.ivxGN(109256, 109056);
      p2390.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_SUCCESS), "");
    } else {
      p2390.response.status = 412;
      p2390.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_FAIL));
    }
  }
  static async delete(p2393) {
    const v2208 = {
      KqXZP: function (p2394, p2395) {
        return p2394 && p2395;
      },
      cBupo: function (p2396, p2397) {
        return p2396 > p2397;
      },
      WhJvu: function (p2398, p2399) {
        return p2398 ^ p2399;
      },
      WDvYT: function (p2400, p2401) {
        return p2400 ^ p2401;
      },
      xbgoY: function (p2402, p2403) {
        return p2402 ^ p2403;
      },
      YYcKi: function (p2404, p2405) {
        return p2404 ^ p2405;
      },
      RvWsT: "success",
      CwKVZ: function (p2406, p2407) {
        return p2406 ^ p2407;
      }
    };
    let v2209 = JSON.parse(p2393.request.body);
    const {
      id: _0x58370d,
      type: _0x5aab1c
    } = v2209;
    const {
      nickname: _0x443dce
    } = p2393.user;
    if (v2208.KqXZP(_0x58370d, _0x5aab1c)) {
      if (_0x5aab1c !== 3) {
        const v2210 = await BuryPointProjectModel.getListByParentId(_0x58370d);
        if (v2210 && v2208.cBupo(v2210.length, 0)) {
          p2393.response.status = v2208.WhJvu(387837, 387937);
          p2393.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.PROJECT_DELETE_FAIL));
          return;
        }
        if (_0x5aab1c === v2208.WDvYT(658115, 658114)) {
          const v2211 = await BuryPointProjectModel.detail(_0x58370d);
          SdkReleaseModel.deleteByProjectId(v2211.projectId);
          let v2212 = {
            projectId: "",
            updateBy: _0x443dce
          };
          BuryPointTemplateModel.updateProjectId(v2211.projectId, v2212);
        }
      } else {
        const v2213 = await BuryPointCardModel.checkName("", _0x58370d);
        let v2214 = v2213 && v2213.length > v2208.xbgoY(567734, 567734) ? v2213[v2208.WDvYT(439745, 439745)].count : 0;
        if (v2208.cBupo(v2214, 0)) {
          p2393.response.status = 412;
          p2393.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.PROJECT_EXIST_CARD_DELETE_FAIL));
          return;
        }
      }
      await BuryPointProjectModel.delete(_0x58370d);
      p2393.response.status = v2208.YYcKi(375509, 375325);
      p2393.body = vRequire9.SUCCESS_200(v2208.RvWsT, "");
    } else {
      p2393.response.status = v2208.CwKVZ(119911, 120315);
      p2393.body = vRequire9.ERROR_412("fail");
    }
  }
  static async deleteProject(p2408) {
    const v2215 = {
      IBRiT: function (p2409, p2410) {
        return p2409 === p2410;
      },
      pfqIM: function (p2411, p2412) {
        return p2411 + p2412;
      },
      wnMJC: function (p2413, p2414) {
        return p2413 > p2414;
      }
    };
    let v2216 = JSON.parse(p2408.request.body);
    const {
      projectId: _0x4f2aec
    } = v2216;
    if (!_0x4f2aec || v2215.IBRiT(_0x4f2aec, "") || _0x4f2aec === undefined) {
      p2408.response.status = 412;
      p2408.body = vRequire9.ERROR_412("fail");
      return;
    }
    const {
      nickname: _0x3d5f47
    } = p2408.user;
    let v2217 = {
      projectId: "",
      updateBy: _0x3d5f47
    };
    BuryPointTemplateModel.updateProjectId(_0x4f2aec, v2217);
    BuryPointProjectModel.deleteByProjectId(_0x4f2aec);
    BuryPointCardModel.deleteByProjectId(_0x4f2aec);
    SdkReleaseModel.deleteByProjectId(_0x4f2aec);
    BuryPointFieldModel.deleteByProjectId(_0x4f2aec);
    let v2218 = await BuryPointWarehouseModel.getPointIdsByProjectId(_0x4f2aec);
    const v2219 = [];
    v2219.push(_0x4f2aec + "_BuryPointCardStatistics");
    for (let v2220 = 0; v2220 < v2218.length; v2220++) {
      let v2221 = v2215.pfqIM(_0x4f2aec, "_") + v2218[v2220].pointId;
      v2219.push(v2221);
    }
    if (v2219 && v2215.wnMJC(v2219.length, 0)) {
      let v2222 = new Set(v2219);
      let v2223 = [...v2222];
      v2223.forEach(async p2415 => {
        CommonModel.deleteTableByName(p2415).then(() => {
          vRequire7.printInfo("成功删除表: " + p2415);
        });
      });
    }
    BuryPointWarehouseModel.deleteByProjectId(_0x4f2aec);
    BuryPointTaskModel.deleteByProjectId(_0x4f2aec);
    BuryPointAlarmModel.deleteByProjectId(_0x4f2aec);
    p2408.response.status = 200;
    p2408.body = vRequire9.SUCCESS_200("success", "");
  }
  static async ["tree"](p2416) {
    const v2224 = {
      PtcQk: function (p2417, p2418) {
        return p2417 === p2418;
      },
      ebjRp: function (p2419, p2420) {
        return p2419 ^ p2420;
      }
    };
    const {
      userId: _0x16502b,
      userType: _0x3afb3e
    } = p2416.user;
    const {
      teamProjectIds: _0x4a6275,
      sysType = ""
    } = JSON.parse(p2416.request.body);
    let v2225 = [];
    if (_0x3afb3e === USER_INFO.USER_TYPE_ADMIN || v2224.PtcQk(_0x3afb3e, USER_INFO.USER_TYPE_SUPERADMIN)) {
      v2225 = await BuryPointProjectModel.getAllProjectList(sysType);
    } else {
      v2225 = await BuryPointProjectModel.getProjectListByWebMonitorIds(_0x4a6275, sysType);
    }
    let vV2225 = v2225;
    let v2226 = [];
    for (let v2227 = 0; v2227 < vV2225.length; v2227++) {
      const v2228 = vV2225[v2227];
      const {
        id: _0x3191b
      } = v2228;
      const v2229 = {
        id: _0x3191b,
        title: vV2225[v2227].name,
        parentId: vV2225[v2227].parentId,
        key: vV2225[v2227].id,
        type: vV2225[v2227].type
      };
      const v2230 = await BuryPointProjectModel.getListByParentId(_0x3191b);
      const v2231 = [];
      for (let v2232 = 0; v2232 < v2230.length; v2232++) {
        const v2233 = v2230[v2232];
        const {
          id: _0x52d28a
        } = v2233;
        const v2234 = {
          id: _0x52d28a,
          parentId: v2230[v2232].parentId,
          title: v2230[v2232].name,
          key: v2230[v2232].id,
          type: v2230[v2232].type
        };
        const v2235 = await BuryPointProjectModel.getListByParentId(_0x52d28a);
        const v2236 = [];
        for (let v2237 = v2224.ebjRp(734209, 734209); v2237 < v2235.length; v2237++) {
          const v2238 = {
            id: v2235[v2237].id,
            parentId: v2235[v2237].parentId,
            title: v2235[v2237].name,
            key: v2235[v2237].id,
            type: v2235[v2237].type
          };
          v2236.push(v2238);
        }
        v2234.children = v2236;
        v2231.push(v2234);
      }
      v2229.children = v2231;
      v2226.push(v2229);
    }
    p2416.response.status = 200;
    p2416.body = vRequire9.SUCCESS_200("success", v2226);
  }
  static async getGroupAndPage(p2421) {
    const v2239 = {
      wLXcw: function (p2422, p2423) {
        return p2422 ^ p2423;
      },
      MTSvE: function (p2424, p2425) {
        return p2424 < p2425;
      }
    };
    const {
      projectId: _0x1a20b3
    } = JSON.parse(p2421.request.body);
    let v2240 = [];
    let v2241 = await BuryPointProjectModel.getProjectByProjectIdAndType(_0x1a20b3, 2);
    for (let v2242 = v2239.wLXcw(438658, 438658); v2242 < v2241.length; v2242++) {
      const v2243 = v2241[v2242];
      const {
        id: _0x349ea1
      } = v2243;
      const v2244 = {
        id: _0x349ea1,
        parentId: v2241[v2242].parentId,
        projectId: _0x1a20b3,
        name: v2241[v2242].name,
        type: v2241[v2242].type
      };
      const v2245 = await BuryPointProjectModel.getListByParentId(_0x349ea1);
      v2244.pageCount = v2245.length;
      const v2246 = [];
      for (let v2247 = v2239.wLXcw(457909, 457909); v2239.MTSvE(v2247, v2245.length); v2247++) {
        const v2248 = {
          id: v2245[v2247].id,
          parentId: v2245[v2247].parentId,
          name: v2245[v2247].name,
          type: v2245[v2247].type,
          projectId: _0x1a20b3
        };
        v2246.push(v2248);
      }
      v2244.pageList = v2246;
      v2240.push(v2244);
    }
    p2421.response.status = 200;
    p2421.body = vRequire9.SUCCESS_200("success", v2240);
  }
  static async getProjectTree(p2426) {
    const v2249 = {
      hemXW: function (p2427, p2428) {
        return p2427 ^ p2428;
      },
      cXtZe: function (p2429, p2430) {
        return p2429 ^ p2430;
      },
      HcsAC: function (p2431, p2432) {
        return p2431 ^ p2432;
      }
    };
    const {
      projectId: _0xe8bbc6
    } = JSON.parse(p2426.request.body);
    let v2250 = [];
    if (_0xe8bbc6) {
      let v2251 = await BuryPointProjectModel.getProjectByProjectIdAndType(_0xe8bbc6, v2249.hemXW(554504, 554506));
      if (v2251.length === 0) {
        p2426.response.status = v2249.cXtZe(717401, 717457);
        p2426.body = vRequire9.SUCCESS_200("success", v2250);
        return;
      }
      const v2252 = v2251.map(p2433 => p2433.id);
      const v2253 = await BuryPointProjectModel.getListByParentIds(v2252);
      const v2254 = v2253.map(p2434 => p2434.id);
      const v2255 = await BuryPointCardModel.countCardsByPageIds(v2254);
      const v2256 = {};
      v2255.forEach(p2435 => {
        v2256[p2435.pageId] = p2435.count || 0;
      });
      const v2257 = {};
      v2253.forEach(p2436 => {
        if (!v2257[p2436.parentId]) {
          v2257[p2436.parentId] = [];
        }
        v2257[p2436.parentId].push({
          id: p2436.id,
          parentId: p2436.parentId,
          title: p2436.name,
          key: p2436.id,
          type: p2436.type,
          cardCount: v2256[p2436.id] || v2249.hemXW(201392, 201392)
        });
      });
      for (let v2258 = 0; v2258 < v2251.length; v2258++) {
        const v2259 = v2251[v2258];
        const {
          id: _0x367762
        } = v2259;
        const v2260 = {
          id: _0x367762,
          parentId: v2259.parentId,
          title: v2259.name,
          key: v2259.id,
          type: v2259.type,
          pageCount: v2257[_0x367762] ? v2257[_0x367762].length : v2249.hemXW(167696, 167696),
          children: v2257[_0x367762] || []
        };
        v2250.push(v2260);
      }
    }
    p2426.response.status = v2249.HcsAC(882511, 882567);
    p2426.body = vRequire9.SUCCESS_200("success", v2250);
  }
  static async ["sort"](p2437) {
    const v2261 = {
      cXsAo: function (p2438, p2439) {
        return p2438 + p2439;
      },
      hmKPf: function (p2440, p2441) {
        return p2440 ^ p2441;
      },
      DapDF: function (p2442, p2443) {
        return p2442 ^ p2443;
      },
      mojPS: function (p2444, p2445) {
        return p2444 ^ p2445;
      },
      Wrjwg: "success"
    };
    let v2262 = JSON.parse(p2437.request.body);
    let v2263 = v2262.sortList;
    const {
      nickname: _0x34345b
    } = p2437.user;
    if (v2262) {
      for (let v2264 = 0; v2264 < v2263.length; v2264++) {
        const v2265 = {
          id: v2263[v2264].id
        };
        v2265.sort = v2261.cXsAo(v2264, v2261.hmKPf(443675, 443674));
        v2265.updateBy = _0x34345b;
        await BuryPointProjectModel.update(v2263[v2264].id, v2265);
        let v2266 = v2263[v2264].children;
        for (let v2267 = v2261.DapDF(615397, 615397); v2267 < v2266.length; v2267++) {
          const v2268 = {
            id: v2266[v2267].id
          };
          v2268.sort = v2267 + v2261.mojPS(227155, 227154);
          v2268.parentId = v2263[v2264].id;
          v2268.updateBy = _0x34345b;
          await BuryPointProjectModel.update(v2266[v2267].id, v2268);
        }
      }
      p2437.response.status = v2261.mojPS(762921, 763105);
      p2437.body = vRequire9.SUCCESS_200(v2261.Wrjwg, "");
    } else {
      p2437.response.status = 412;
      p2437.body = vRequire9.ERROR_412("fail！");
    }
  }
  static async movePage(p2446) {
    let v2269 = JSON.parse(p2446.request.body);
    const {
      nickname: _0x37765b
    } = p2446.user;
    if (v2269) {
      v2269.updateBy = _0x37765b;
      await BuryPointProjectModel.update(v2269.id, v2269);
      p2446.response.status = 200;
      p2446.body = vRequire9.SUCCESS_200("success", "");
    } else {
      p2446.response.status = 412;
      p2446.body = vRequire9.ERROR_412("fail！");
    }
  }
  static async getProjectList(p2447) {
    const v2270 = {
      fYrgd: function (p2448, p2449) {
        return p2448 ^ p2449;
      }
    };
    const {
      userId: _0x496aa2,
      userType: _0x215694
    } = p2447.user;
    const {
      companyId: _0x3cae73,
      teamProjectIds: _0x46ed0a,
      sysType = ""
    } = JSON.parse(p2447.request.body);
    let v2271 = [];
    if (_0x215694 === USER_INFO.USER_TYPE_ADMIN || _0x215694 === USER_INFO.USER_TYPE_SUPERADMIN) {
      v2271 = await BuryPointProjectModel.getNoSysProjectListByCompanyId(_0x3cae73);
    } else {
      v2271 = await BuryPointProjectModel.getProjectListByWebMonitorIds(_0x46ed0a, sysType);
    }
    let vV2271 = v2271;
    if (global.eventInfo.purchaseCodeType === 0 || global.eventInfo.purchaseCodeType === 81) {
      vV2271 = v2271.slice(0, 3);
    } else {
      vV2271 = v2271;
    }
    let v2272 = [];
    for (let v2273 = v2270.fYrgd(878270, 878270); v2273 < vV2271.length; v2273++) {
      const v2274 = {
        id: vV2271[v2273].id,
        projectName: vV2271[v2273].name,
        name: vV2271[v2273].name,
        projectId: vV2271[v2273].projectId,
        sysType: vV2271[v2273].sysType,
        env: vV2271[v2273].env
      };
      let v2275 = await BuryPointFieldModel.getPageCount(vV2271[v2273].projectId, "", "", "");
      v2274.fieldCount = isNaN(v2275[v2270.fYrgd(988688, 988688)].count) ? v2270.fYrgd(697070, 697070) : v2275[0].count;
      v2272.push(v2274);
    }
    p2447.response.status = 200;
    p2447.body = vRequire9.SUCCESS_200("success", v2272);
  }
  static async projectSimpleListByWebmonitorIds(p2450) {
    const v2276 = {
      sgDMb: function (p2451, p2452) {
        return p2451 + p2452;
      }
    };
    const v2277 = JSON.parse(v2276.sgDMb(p2450.request.body, ""));
    const v2278 = await BuryPointProjectModel.projectSimpleListByWebmonitorIds(v2277);
    p2450.response.status = 200;
    p2450.body = vRequire9.SUCCESS_200("success", v2278);
  }
  static async getAllProjectList(p2453) {
    const v2279 = {
      WsPnn: function (p2454, p2455) {
        return p2454 ^ p2455;
      },
      uZZqP: "success"
    };
    const v2280 = await BuryPointProjectModel.getAllProjectList("");
    p2453.response.status = v2279.WsPnn(593720, 593904);
    p2453.body = vRequire9.SUCCESS_200(v2279.uZZqP, v2280);
  }
  static async getAllList(p2456) {
    const v2281 = await BuryPointProjectModel.getAllList();
    p2456.response.status = 200;
    p2456.body = vRequire9.SUCCESS_200("success", v2281);
  }
  static async ["addViewers"](p2457) {
    const v2282 = {
      wjQOm: function (p2458, p2459) {
        return p2458 ^ p2459;
      },
      VbwVy: "success"
    };
    const {
      webMonitorId: _0x6007f1,
      viewers: _0x25e20b
    } = JSON.parse(p2457.request.body);
    let v2283 = await BuryPointProjectModel.updateViewersProjectByField({
      projectId: _0x6007f1,
      viewers: _0x25e20b,
      parentId: -1
    });
    p2457.response.status = v2282.wjQOm(383688, 383488);
    p2457.body = vRequire9.SUCCESS_200(v2282.VbwVy, v2283);
  }
  static async judgeCardCount(p2460) {
    const v2284 = {
      fxwPt: function (p2461, p2462) {
        return p2461 ^ p2462;
      },
      xuldn: function (p2463, p2464, p2465) {
        return p2463(p2464, p2465);
      }
    };
    const v2285 = await BuryPointCardModel.getCountByNoSysType("");
    let v2286 = isNaN(v2285[0].count) ? 0 : v2285[0].count;
    const v2287 = global.eventInfo.purchaseCodeCardCount || 3;
    if (parseInt(v2287, v2284.fxwPt(539507, 539513)) - v2284.xuldn(parseInt, v2286, 10) < parseInt(p2460, 10)) {
      return 1;
    }
    return 0;
  }
  static async copyPage(p2466) {
    const v2288 = {
      Kqgju: function (p2467, p2468) {
        return p2467 + p2468;
      },
      VblNS: function (p2469, p2470) {
        return p2469 < p2470;
      },
      ztSUu: function (p2471, p2472) {
        return p2471 ^ p2472;
      }
    };
    let v2289 = JSON.parse(p2466.request.body);
    let v2290 = v2289.pageId;
    let v2291 = v2289.newPageName;
    let v2292 = v2289.newProjectId;
    let v2293 = v2289.newGroupId;
    const {
      nickname: _0x3a063e
    } = p2466.user;
    if (v2289) {
      let v2294 = await BuryPointCardModel.getList("", v2290, "");
      let v2295 = {};
      v2295.name = v2288.Kqgju(v2291, "_copy");
      v2295.projectId = v2292;
      v2295.type = 3;
      v2295.parentId = v2293;
      v2295.createBy = _0x3a063e;
      let v2296 = await BuryPointProjectModel.create(v2295);
      let v2297 = v2296.id;
      for (let v2298 = 0; v2298 < v2294.length; v2298++) {
        let v2299 = v2294[v2298];
        v2299.projectId = v2292;
        v2299.pageId = v2297;
        v2299.name = v2299.name + "_copy";
        v2299.updatedAt = new Date().Format("yyyy-MM-dd hh:mm:ss");
        let v2300 = JSON.parse(v2299.calcRule);
        let v2301 = [];
        for (let v2302 = 0; v2288.VblNS(v2302, v2300.length); v2302++) {
          let v2303 = v2300[v2302];
          let v2304 = v2303.calcName;
          v2303.calcNameKey = slugify(v2304).replace(new RegExp("-", "g"), "") + new Date().Format("yyyyMMddhhmmss");
          let v2305 = v2303.prePoint;
          let v2306 = v2305.pointId;
          let v2307 = await C24.copyPoint(v2292, v2306, _0x3a063e);
          v2303.prePoint.pointId = v2307;
          let v2308 = v2303.endPoint;
          if (v2308) {
            let v2309 = await C24.copyPoint(v2292, v2308.pointId, _0x3a063e);
            v2303.endPoint.pointId = v2309;
          }
          v2301.push(v2303);
        }
        v2299.calcRule = JSON.stringify(v2301);
        v2299.id = "";
        let v2310 = await BuryPointCardModel.create(v2299);
      }
      p2466.response.status = 200;
      p2466.body = vRequire9.SUCCESS_200("success", "");
    } else {
      p2466.response.status = v2288.ztSUu(453732, 454136);
      p2466.body = vRequire9.ERROR_412("fail！");
    }
  }
  static async ["exportTemplate"](p2473) {
    const v2311 = {
      kLEFz: function (p2474, p2475) {
        return p2474 ^ p2475;
      },
      avQtt: function (p2476, p2477) {
        return p2476 ^ p2477;
      },
      wkyXZ: function (p2478, p2479) {
        return p2478 + p2479;
      },
      AmCVu: function (p2480, p2481) {
        return p2480 ^ p2481;
      },
      vmrNM: function (p2482, p2483) {
        return p2482 < p2483;
      },
      kpvOj: function (p2484, p2485) {
        return p2484 ^ p2485;
      },
      dAzaJ: function (p2486, p2487) {
        return p2486 > p2487;
      },
      wkLQm: function (p2488, p2489) {
        return p2488 ^ p2489;
      },
      LDVRS: function (p2490, p2491) {
        return p2490 ^ p2491;
      },
      RXfNA: function (p2492, p2493) {
        return p2492 ^ p2493;
      }
    };
    let v2312 = JSON.parse(p2473.request.body);
    const {
      projectId: _0x13cea3,
      type: _0x23dfc8,
      templateName = ""
    } = v2312;
    const {
      nickname: _0x48d4db,
      userId: _0x2a00b1
    } = p2473.user;
    if (_0x13cea3 && _0x23dfc8) {
      let v2313 = await BuryPointProjectModel.getProjectByProjectIdAndType(_0x13cea3, v2311.kLEFz(139960, 139962));
      let v2314 = v2311.avQtt(220349, 220349);
      let v2315 = v2311.kLEFz(145435, 145435);
      let v2316 = {
        type: 1,
        projectId: _0x13cea3
      };
      let v2317 = [];
      let v2318 = [];
      for (let v2319 = 0; v2319 < v2313.length; v2319++) {
        let v2320 = {
          id: v2313[v2319].id,
          name: v2313[v2319].name,
          type: v2313[v2319].type,
          sort: v2313[v2319].sort
        };
        let v2321 = await BuryPointProjectModel.getListByParentId(v2313[v2319].id);
        v2314 = v2311.wkyXZ(v2314, v2321.length);
        let v2322 = [];
        for (let v2323 = v2311.avQtt(512766, 512766); v2323 < v2321.length; v2323++) {
          let v2324 = {
            id: v2321[v2323].id,
            name: v2321[v2323].name,
            type: v2321[v2323].type,
            sort: v2321[v2323].sort
          };
          let v2325 = await BuryPointCardModel.getList("", v2321[v2323].id, "");
          v2315 = v2315 + v2325.length;
          let v2326 = [];
          for (let v2327 = 0; v2327 < v2325.length; v2327++) {
            let v2328 = {
              id: v2325[v2327].id,
              name: v2325[v2327].name,
              type: v2325[v2327].type,
              pageId: v2325[v2327].pageId,
              conversionCycle: v2325[v2327].conversionCycle,
              groupByFlag: v2325[v2327].groupByFlag,
              chartTableShow: v2325[v2327].chartTableShow,
              togetherList: v2325[v2327].togetherList,
              refreshFrequency: v2325[v2327].refreshFrequency,
              calcRule: v2325[v2327].calcRule,
              alarmStatus: v2325[v2327].alarmStatus,
              sort: v2325[v2327].sort,
              dataGrid: v2325[v2327].dataGrid,
              describe: v2325[v2327].describe,
              isShowOnlineCount: v2325[v2327].isShowOnlineCount,
              keepAnalysisRule: v2325[v2327].keepAnalysisRule
            };
            v2326.push(v2328);
            let v2329 = JSON.parse(v2325[v2327].calcRule);
            if (v2328.type === 12) {
              const {
                firstStep: _0x1b438f
              } = v2329;
              const v2330 = _0x1b438f.involvedPointIds.split(",");
              for (let v2331 = 0; v2331 < v2330.length; v2331++) {
                v2318.push(v2330[v2331]);
              }
            } else {
              for (let v2332 = v2311.AmCVu(201026, 201026); v2332 < v2329.length; v2332++) {
                let v2333 = v2329[v2332];
                v2318.push(v2333.prePoint.pointId);
                let v2334 = v2333.endPoint;
                if (v2334) {
                  v2318.push(v2333.endPoint.pointId);
                }
              }
            }
          }
          v2324.cardList = v2326;
          v2322.push(v2324);
        }
        v2320.pageList = v2322;
        v2317.push(v2320);
      }
      v2316.groupList = v2317;
      let v2335 = [...new Set(v2318)];
      let v2336 = [];
      for (let v2337 = 0; v2337 < v2335.length; v2337++) {
        let v2338 = {};
        let v2339 = v2335[v2337];
        let v2340 = await BuryPointWarehouseModel.detailByPointId(v2339);
        if (!v2340) {
          continue;
        }
        v2338.pointId = v2339;
        v2338.pointName = v2340.pointName;
        v2338.pointDesc = v2340.pointDesc;
        v2338.weType = v2340.weType;
        v2338.replacePointIdKey = v2340.replacePointIdKey;
        let v2341 = await BuryPointFieldModel.getListByFieldIds(v2340.fields);
        let v2342 = [];
        for (let v2343 = v2311.AmCVu(713595, 713595); v2311.vmrNM(v2343, v2341.length); v2343++) {
          let v2344 = {
            fieldName: v2341[v2343].fieldName,
            fieldAlias: v2341[v2343].fieldAlias,
            fieldType: v2341[v2343].fieldType,
            fieldLength: v2341[v2343].fieldLength,
            fieldDesc: v2341[v2343].fieldDesc,
            groupByFlag: v2341[v2343].groupByFlag,
            weType: v2341[v2343].weType
          };
          v2342.push(v2344);
        }
        v2338.fieldList = v2342;
        v2336.push(v2338);
      }
      let v2345 = {};
      v2345.templatePoint = JSON.stringify(v2336);
      v2345.groupCount = v2313.length;
      v2345.pageCount = v2314;
      v2345.cardCount = v2315;
      v2345.userId = _0x2a00b1;
      v2345.detail = vRequire3.b64EncodeUnicode(JSON.stringify(v2316));
      let v2346 = _0x23dfc8.split(",");
      for (let v2347 = v2311.kpvOj(445486, 445486); v2311.vmrNM(v2347, v2346.length); v2347++) {
        v2345.type = v2346[v2347];
        if (v2345.type === 1 || v2345.type === "1") {
          v2345.projectId = _0x13cea3;
          let v2348 = await BuryPointTemplateModel.existTempleta(_0x13cea3, "", _0x2a00b1);
          if (v2348 && v2311.dAzaJ(v2348.length, v2311.wkLQm(186005, 186005))) {
            v2345.updateBy = _0x48d4db;
            await BuryPointTemplateModel.update(v2348[0].id, v2345);
          } else {
            v2345.templateName = templateName;
            v2345.createBy = _0x48d4db;
            await BuryPointTemplateModel.create(v2345);
          }
        } else {
          v2345.templateName = templateName;
          v2345.createBy = _0x48d4db;
          await BuryPointTemplateModel.create(v2345);
        }
      }
      p2473.response.status = v2311.LDVRS(857458, 857530);
      p2473.body = vRequire9.SUCCESS_200("success", "");
    } else {
      p2473.response.status = v2311.RXfNA(826104, 826212);
      p2473.body = vRequire9.ERROR_412("fail");
    }
  }
  static async existTemplate(p2494) {
    const v2349 = {
      AUzWW: function (p2495, p2496) {
        return p2495 ^ p2496;
      }
    };
    let v2350 = JSON.parse(p2494.request.body);
    let v2351 = v2350.projectId;
    const {
      userId: _0xfa65e7
    } = p2494.user;
    if (v2351) {
      let v2352 = await BuryPointTemplateModel.existTempleta(v2351, v2349.AUzWW(850812, 850813), _0xfa65e7);
      p2494.response.status = 200;
      if (v2352.length > 0) {
        p2494.body = vRequire9.SUCCESS_200("success", "1");
      } else {
        p2494.body = vRequire9.SUCCESS_200("success", "0");
      }
    } else {
      p2494.response.status = 412;
      p2494.body = vRequire9.ERROR_412("fail！");
    }
  }
  static async ["createWePointData"](p2497) {
    let v2353 = JSON.parse(p2497.request.body);
    let v2354 = v2353.projectId;
    C6.createWePointData(v2354, "webfunny");
  }
  static async getFlowSwitch(p2498) {
    const v2355 = {
      HBdCH: "success"
    };
    const v2356 = JSON.parse(p2498.request.body);
    const {
      projectIds: _0x3c27d9
    } = v2356;
    let v2357 = "";
    _0x3c27d9.forEach(p2499 => {
      v2357 += "'" + p2499 + "',";
    });
    v2357 = v2357.substring(0, v2357.length - 1);
    const v2358 = await BuryPointProjectModel.getFlowSwitchWebMonitorIds(v2357);
    p2498.response.status = 200;
    p2498.body = vRequire9.SUCCESS_200(v2355.HBdCH, v2358);
  }
  static async ["openFlowSwitch"](p2500) {
    const v2359 = JSON.parse(p2500.request.body);
    const {
      projectId: _0x5cc8ae
    } = v2359;
    await BuryPointProjectModel.updateFlowSwitchByField({
      projectId: _0x5cc8ae,
      flowSwitch: 0,
      type: "1"
    });
    p2500.response.status = 200;
    p2500.body = vRequire9.SUCCESS_200("success", 0);
  }
  static async ["closeFlowSwitch"](p2501) {
    const v2360 = JSON.parse(p2501.request.body);
    const {
      projectId: _0x31d746
    } = v2360;
    await BuryPointProjectModel.updateFlowSwitchByField({
      projectId: _0x31d746,
      flowSwitch: 1,
      type: "1"
    });
    p2501.response.status = 200;
    p2501.body = vRequire9.SUCCESS_200("success", 0);
  }
  static async resetSaveDays(p2502) {
    const v2361 = {
      VBXcz: function (p2503, p2504) {
        return p2503 > p2504;
      },
      YjwWg: function (p2505, p2506) {
        return p2505 ^ p2506;
      }
    };
    const {
      projectId: _0xaac993,
      saveDays: _0x25363f
    } = JSON.parse(p2502.request.body);
    const {
      companyId: _0x4123fb
    } = p2502.user;
    const v2362 = await BuryPointWarehouseModel.getAllList(_0xaac993);
    const v2363 = [];
    v2362.forEach(p2507 => {
      v2363.push(p2507.pointId);
    });
    let v2364 = 7;
    if (accountInfo.isCloud === true) {
      const v2365 = await vRequire3.postJson(LOCAL_SERVER + "/wfCenter/getProductInfoByCompanyId", {
        companyId: _0x4123fb
      }).catch(p2508 => {
        console.error("/wfCenter/getProductInfoByCompanyId error", p2508);
      });
      if (v2365) {
        const v2366 = v2365.data;
        v2364 = v2361.VBXcz(_0x25363f, v2366.saveDays) ? v2366.saveDays : _0x25363f;
      }
    } else {
      const {
        limitType: _0x82127,
        limitValue = 98765
      } = global.eventInfo.machineCodeInfo || {};
      const v2367 = _0x82127 === "X" && limitValue === 100;
      v2364 = v2367 ? 7 : _0x25363f;
    }
    BuryPointProjectModel.createTTLForCreatedAt(_0xaac993, v2363, v2364 * 1);
    p2502.response.status = v2361.YjwWg(714656, 714600);
    p2502.body = vRequire9.SUCCESS_200("success", 0);
  }
  static async saveNewProjectName(p2509) {
    const v2368 = {
      JeTur: "success"
    };
    const {
      projectId: _0x2ae43c,
      name: _0x2561a5
    } = JSON.parse(p2509.request.body);
    let v2369 = await BuryPointProjectModel.updateProjectByField({
      projectId: _0x2ae43c,
      name: _0x2561a5,
      type: "1"
    });
    p2509.response.status = 200;
    p2509.body = vRequire9.SUCCESS_200(v2368.JeTur, v2369);
  }
  static async ["getProjectCountByCompanyId"](p2510) {
    const {
      companyId: _0xeb0e46
    } = p2510.request.body;
    let v2370 = 0;
    let v2371 = await BuryPointProjectModel.getProjectCountByCompanyId(_0xeb0e46);
    if (v2371 && v2371.length) {
      v2370 = v2371[0].count;
    }
    p2510.response.status = 200;
    p2510.body = vRequire9.SUCCESS_200("success", v2370);
  }
  static async checkProjectEnv() {
    const v2372 = await BuryPointProjectModel.getAllProjectList(0);
    for (let v2373 = 0; v2373 < v2372.length; v2373++) {
      const {
        projectId: _0xaa086e
      } = v2372[v2373];
      const v2374 = await BuryPointProjectModel.getDetailByProjectId(_0xaa086e);
      if (!v2374.env) {
        await BuryPointProjectModel.updateProjectByField({
          projectId: _0xaa086e,
          type: 1,
          env: "pro"
        });
      }
    }
  }
  static async ["base64JiaMi"](p2511) {
    let v2375 = "";
    console.log(vRequire3.b64EncodeUnicode(v2375));
  }
}
class C19 {
  static async ["checkLimitForCloud"]() {
    const v2376 = {
      IzTDJ: function (p2512, p2513) {
        return p2512 < p2513;
      }
    };
    if (accountInfo.isCloud !== true) {
      return;
    }
    const v2377 = await vRequire3.getJson(LOCAL_SERVER + "/wfCenter/getLimitCompanyIdForCloud").catch(p2514 => {
      console.error(p2514);
    });
    const v2378 = v2377.data;
    if (!v2378 || !v2378.length) {
      global.eventInfo.invalidProjectIdForCloud = [];
      return;
    }
    if (!global.eventInfo.invalidProjectIdForCloud) {
      global.eventInfo.invalidProjectIdForCloud = [];
    }
    let v2379 = [];
    for (let v2380 = 0; v2380 < v2378.length; v2380++) {
      const {
        companyId: _0x5f56ea
      } = v2378[v2380];
      const v2381 = await BuryPointProjectModel.getAllProjectIdByCompanyId(_0x5f56ea);
      if (v2381 && v2381.length) {
        for (let v2382 = 0; v2376.IzTDJ(v2382, v2381.length); v2382++) {
          const {
            projectId: _0x5da20c
          } = v2381[v2382];
          v2379.push(_0x5da20c);
        }
      }
    }
    global.eventInfo.invalidProjectIdForCloud = v2379;
  }
  static async checkCommonProduct() {
    const v2383 = {
      Aumji: function (p2515, p2516) {
        return p2515 >= p2516;
      },
      VdUvh: function (p2517, p2518) {
        return p2517 * p2518;
      }
    };
    const v2384 = await vRequire3.getJson(LOCAL_SERVER + "/wfCenter/getTotalFlowCountByCompanyForDay").catch(p2519 => {
      console.error(p2519);
    });
    let v2385 = v2384 ? v2384.data : 0;
    const {
      limitType: _0x159d3c,
      limitValue = 98765
    } = global.eventInfo.machineCodeInfo || {};
    if (limitValue === 98765) {
      global.eventInfo.unLimitCountForProduct = false;
      return;
    }
    switch (_0x159d3c) {
      case "X":
        if (v2383.Aumji(v2385, v2383.VdUvh(_0x159d3c, 10000))) {
          global.eventInfo.unLimitCountForProduct = true;
        }
        break;
      default:
        break;
    }
  }
  static async handleProjectWithTag(p2520) {
    const v2386 = {
      SzyGl: function (p2521, p2522) {
        return p2521 ^ p2522;
      }
    };
    const v2387 = await BuryPointProjectModel.getListByParentIdAndSysType(-1, v2386.SzyGl(126341, 126341));
    for (let v2388 = 0; v2388 < v2387.length; v2388++) {
      const v2389 = v2387[v2388].projectId;
      const v2390 = v2387[v2388].companyId;
      const v2391 = v2387[v2388].name;
      p2520(v2389, v2390, v2391);
    }
  }
  static async ["saveFlowDataByHour"](p2523, p2524) {
    const v2392 = {
      VEHzk: function (p2525, p2526) {
        return p2525 ^ p2526;
      }
    };
    C19.handleProjectWithTag(async (p2527, p2528 = "", p2529 = "") => {
      const v2393 = {
        productType: "event",
        flowType: "",
        projectId: p2527,
        projectName: p2529,
        dayName: p2523,
        hourName: p2524,
        flowCount: "",
        companyId: p2528
      };
      const v2394 = [];
      const v2395 = global.eventInfo.calculateFlowData[p2527];
      if (!v2395) {
        return;
      }
      global.eventInfo.calculateFlowData[p2527] = {};
      let v2396 = v2395 ? v2395.event || 0 : v2392.VEHzk(886517, 886517);
      v2394.push({
        ...v2393,
        flowType: FLOW_TYPE.TOTAL_FLOW_COUNT,
        flowCount: v2396
      });
      vRequire3.requestForTwoProtocol("post", "" + accountInfo.centerServerDomain + CENTER_API.CREATE_FLOW_DATA, {
        flowArray: v2394,
        dayName: p2523
      }).catch(p2530 => {
        vRequire7.printError("CENTER_API.CREATE_FLOW_DATA 接口错误", p2530);
      });
    });
  }
  static async ["getCardAnalysisData"](p2531, p2532) {
    const v2397 = {
      ljQKP: function (p2533, p2534) {
        return p2533 + p2534;
      },
      IiLbT: function (p2535, p2536) {
        return p2535 ^ p2536;
      },
      NLqWr: function (p2537, p2538) {
        return p2537 < p2538;
      },
      UgJqC: function (p2539, p2540) {
        return p2539 + p2540;
      },
      mXaSS: function (p2541, p2542) {
        return p2541 * p2542;
      },
      cWCKh: function (p2543, p2544) {
        return p2543 && p2544;
      },
      VATKM: function (p2545, p2546) {
        return p2545 === p2546;
      },
      esMZR: function (p2547, p2548) {
        return p2547 + p2548;
      },
      CHnPJ: function (p2549, p2550) {
        return p2549 + p2550;
      },
      MyYwa: "yyyy-MM-dd",
      COOoK: function (p2551, p2552) {
        return p2551 ^ p2552;
      },
      IULdm: function (p2553, p2554) {
        return p2553 ^ p2554;
      },
      GYXOL: function (p2555, p2556, p2557) {
        return p2555(p2556, p2557);
      },
      PNfhf: function (p2558, p2559) {
        return p2558 * p2559;
      },
      mUVlC: function (p2560, p2561) {
        return p2560 ^ p2561;
      },
      ALIqz: function (p2562, p2563, p2564) {
        return p2562(p2563, p2564);
      }
    };
    const {
      type: _0x437a5c,
      calcRule: _0x33e3b5,
      keepAnalysisRule: _0x16f6fb,
      groupFields: _0x3db2f2,
      tableShowType: _0x2711c9,
      countDay: _0x396664
    } = p2531;
    let v2398 = JSON.parse(_0x33e3b5);
    let v2399 = new Date(v2397.ljQKP(new Date().getTime(), parseInt(days, v2397.IiLbT(388489, 388483)) * 86400000));
    for (let v2400 = 0; v2397.NLqWr(v2400, v2398.length); v2400++) {
      let v2401 = v2398[v2400].prePoint;
      let v2402 = v2398[v2400].calcName;
      let v2403 = v2398[v2400].calcNameKey;
      let v2404 = v2398[v2400].calcType;
      let v2405 = v2398[v2400].endPoint;
      let v2406 = v2398[v2400].unit;
      let v2407 = v2401.pointId;
      let v2408 = v2401.day;
      if (!v2408) {
        v2408 = 0;
      }
      let v2409 = v2401.calcField;
      let v2410 = v2401.queryCriteria;
      let v2411 = v2409.fieldIndex;
      let v2412 = projectId + "_" + v2407;
      let v2413 = new Date(v2397.UgJqC(v2399.getTime(), v2397.mXaSS(parseInt(v2408, 10), 86400000)));
      let v2414 = await CommonModel.splicingSql(v2409, v2410, v2412, v2413.Format("yyyy-MM-dd"));
      let v2415 = 0;
      let v2416 = await CommonController.getCount(v2414);
      if (v2397.cWCKh(v2404, v2405)) {
        let v2417 = v2405.pointId;
        let v2418 = v2405.calcField;
        let v2419 = v2405.queryCriteria;
        let v2420 = v2405.day;
        if (!v2420 || v2420 === "" || v2397.VATKM(v2420, undefined)) {
          v2420 = 0;
        }
        let v2421 = v2397.esMZR(v2397.CHnPJ(projectId, "_"), v2417);
        let v2422 = await CommonModel.splicingSql(v2418, v2419, v2421, v2413.Format(v2397.MyYwa));
        try {
          let v2423 = await CommonController.getCount(v2422);
          if (v2404 === "/") {
            if (!v2406 || v2406 && v2406 != "%") {
              v2415 = v2423 === 0 ? v2397.COOoK(709290, 709290) : v2415 = vRequire3.toFixed(parseInt(v2416, v2397.IULdm(420774, 420780)) / v2397.GYXOL(parseInt, v2423, 10), 2);
            } else {
              v2415 = v2423 === v2397.COOoK(253614, 253614) ? 0 : vRequire3.toFixed(v2397.mXaSS(parseInt(v2416, 10) / parseInt(v2423, 10), 100), v2397.IULdm(107011, 107009));
              if (parseInt(v2415, 10) > 100) {
                v2415 = 100;
              }
            }
          } else {
            v2415 = v2397.PNfhf(parseInt(v2416, 10), parseInt(v2423, v2397.mUVlC(177072, 177082)));
            ;
          }
        } catch (_0x3c9fb3) {
          vRequire7.error(_0x3c9fb3);
        }
      } else {
        v2415 = v2397.ALIqz(parseInt, v2416, 10);
      }
    }
  }
  static async ["setEventSecretList"]() {
    const v2424 = {
      ahszP: function (p2565, p2566) {
        return p2565 < p2566;
      }
    };
    if (!global.eventInfo.eventSecretList) {
      global.eventInfo.eventSecretList = [];
    }
    const v2425 = global.eventInfo.eventSecretList;
    const v2426 = vRequire3.getUuid().replace(new RegExp("-", "g"), "");
    if (v2424.ahszP(v2425.length, 2)) {
      v2425.push(v2426);
    } else {
      v2425.shift();
      v2425.push(v2426);
    }
    global.eventInfo.eventSecretList = v2425;
    console.log("eventSecretList", v2425);
  }
  static async checkExportCode() {
    const v2427 = global.eventInfo.exportCodeNumber;
    const v2428 = new Date().getTime();
    for (let v2429 in v2427) {
      const v2430 = v2427[v2429];
      if (!v2430.endTime || v2430.endTime < v2428) {
        delete v2427[v2429];
      }
    }
  }
}
class C20 {
  static async create(p2567) {
    let v2431 = JSON.parse(p2567.request.body);
    const {
      nickname: _0x46e2d3
    } = p2567.user;
    v2431.createBy = _0x46e2d3;
    if (v2431.pageId && v2431.cardId && v2431.cardName && v2431.count) {
      let v2432 = await BuryPointCardStatisticsModel.create(v2431);
      p2567.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_SUCCESS), "");
    } else {
      p2567.response.status = 412;
      p2567.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_FAIL));
    }
  }
  static async ["delete"](p2568) {
    const v2433 = {
      pAEZu: function (p2569, p2570) {
        return p2569 ^ p2570;
      }
    };
    let v2434 = JSON.parse(p2568.request.body);
    const {
      id: _0x1c5b0a
    } = v2434;
    const v2435 = await BuryPointCardStatisticsModel.getListByFieldId(_0x1c5b0a);
    if (v2435[v2433.pAEZu(117480, 117480)].count > v2433.pAEZu(613711, 613711)) {
      p2568.response.status = v2433.pAEZu(471704, 471812);
      p2568.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.STATISTIC_DELETE_FAIL));
    } else {
      await BuryPointFieldModel.delete(_0x1c5b0a);
      p2568.response.status = 200;
      p2568.body = vRequire9.SUCCESS_200("success", "");
    }
  }
  static async getAllList(p2571) {
    const v2436 = {
      mzosl: "success"
    };
    const v2437 = await BuryPointCardStatisticsModel.getAllList();
    p2571.response.status = 200;
    p2571.body = vRequire9.SUCCESS_200(v2436.mzosl, v2437);
  }
}
class C21 {
  static async test() {
    const v2438 = {
      vmKce: "2024-04-26 23:59:59"
    };
    let v2439 = await BuryPointCardModel.detail("dda97cf0-e111-11ee-a337-1d9fbcefb8ea");
    let v2440 = 0;
    let v2441 = "2024-04-25";
    let v2442 = v2438.vmKce;
    let v2443 = await C21.calculateFunnelRealTimeDataByCard(v2439, v2441, v2442);
    console.log(JSON.stringify(v2443));
  }
  static async ["calculateDataPreDay"](p2572, p2573) {
    const v2444 = {
      PzlCf: function (p2574, p2575) {
        return p2574(p2575);
      },
      hWyOL: function (p2576, p2577) {
        return p2576 ^ p2577;
      },
      NBwKY: function (p2578, p2579) {
        return p2578 ^ p2579;
      },
      bxVJP: function (p2580, p2581, p2582) {
        return p2580(p2581, p2582);
      },
      DNTmC: function (p2583, p2584) {
        return p2583 ^ p2584;
      }
    };
    const v2445 = await BuryPointCardModel.getAllList();
    let v2446 = v2444.bxVJP(setInterval, async () => {
      if (v2446 && v2445.length === 0) {
        v2444.PzlCf(clearInterval, v2446);
        return;
      }
      let v2447 = v2445.pop();
      const {
        id: _0x49e722,
        type: _0x283650,
        groupByFlag: _0x411f4c
      } = v2447;
      if (_0x283650 && _0x283650 === v2444.hWyOL(908999, 908994)) {} else if (_0x411f4c && _0x411f4c === 1) {
        C21.calculateNoFunnelGroupByDataByCard(v2447, p2573, 1);
      } else {
        C21.calculateNoFunnelDataByCard(v2447, p2573, v2444.NBwKY(529703, 529702));
      }
      let v2448 = {
        id: _0x49e722
      };
      v2448.updateAt = new Date().Format("yyyy-MM-dd hh:mm:ss");
      BuryPointCardModel.update(_0x49e722, v2448);
    }, v2444.DNTmC(276555, 276545) * 1000);
  }
  static async calculateNoFunnelGroupByDataByCard(p2585, p2586, p2587) {
    const v2449 = {
      ehXkx: function (p2588, p2589) {
        return p2588 === p2589;
      },
      wcUxk: function (p2590, p2591) {
        return p2590 + p2591;
      },
      zLXiU: function (p2592, p2593, p2594) {
        return p2592(p2593, p2594);
      },
      uQkat: function (p2595, p2596) {
        return p2595 ^ p2596;
      },
      rTrTq: function (p2597, p2598) {
        return p2597 < p2598;
      },
      ByDHP: "yyyy-MM-dd",
      cyoWj: function (p2599, p2600) {
        return p2599 > p2600;
      }
    };
    const {
      id: _0x24e32b,
      projectId: _0x3e8f2a,
      type: _0x29befc,
      pageId: _0x22c561,
      name: _0x20db47,
      calcRule: _0x55d0d2
    } = p2585;
    if (_0x29befc === 8 || v2449.ehXkx(_0x29befc, 9)) {
      return;
    }
    let v2450 = v2449.wcUxk(_0x3e8f2a, "_BuryPointCardStatistics");
    let v2451 = JSON.parse(_0x55d0d2);
    let v2452 = [];
    let v2453 = new Date(new Date().getTime() + v2449.zLXiU(parseInt, p2586, v2449.uQkat(656046, 656036)) * 86400000);
    for (let v2454 = v2449.uQkat(602978, 602978); v2449.rTrTq(v2454, v2451.length); v2454++) {
      let v2455 = v2451[v2454].prePoint;
      let v2456 = v2451[v2454].calcName;
      let v2457 = v2455.pointId;
      let v2458 = v2455.calcField;
      let v2459 = v2455.queryCriteria;
      let v2460 = v2455.day;
      if (!v2460 || v2460 === "" || v2460 === undefined) {
        v2460 = 0;
      }
      let v2461 = _0x3e8f2a + "_" + v2457;
      let v2462 = new Date(v2453.getTime() + parseInt(v2460, v2449.uQkat(196747, 196737)) * 86400000);
      let v2463 = v2462.Format(v2449.ByDHP);
      let v2464 = await C21.splicingGroupBySql(v2458, v2459, v2461, v2463);
      let v2465 = await C21.getCountByTableName(v2464);
      if (v2465 && v2465.length > v2449.uQkat(532186, 532186)) {
        for (let v2466 = 0; v2466 < v2465.length; v2466++) {
          let v2467 = v2465[v2466].groupByName;
          let v2468 = v2465[v2466].count;
          const v2469 = {
            pageId: _0x22c561,
            cardId: _0x24e32b,
            cardName: _0x20db47
          };
          v2469.count = isNaN(v2468) ? 0 : v2468;
          if (v2449.cyoWj(v2467.length, 100)) {
            let v2470 = "";
            v2470 = v2467.substring(0, 50) + "..." + v2467.substring(v2467.length - 50, v2467.length - 1);
            v2467 = v2470;
          }
          v2469.calcField = v2467;
          v2469.happenDate = v2463;
          v2469.percentage = 0;
          v2452.push(v2469);
        }
      } else {}
    }
    await C21.saveOrUpdateStatistic(v2450, "", "", v2452);
  }
  static async ["calculateNoFunnelDataByCard"](p2601, p2602, p2603) {
    const v2471 = {
      jKXry: function (p2604, p2605) {
        return p2604 ^ p2605;
      },
      Obpjj: function (p2606, p2607) {
        return p2606 === p2607;
      },
      HwcoT: function (p2608, p2609) {
        return p2608 + p2609;
      },
      cdxxb: function (p2610, p2611) {
        return p2610 < p2611;
      },
      ULltp: function (p2612, p2613) {
        return p2612 + p2613;
      },
      nIbVj: "yyyy-MM-dd",
      URocr: function (p2614, p2615) {
        return p2614 / p2615;
      },
      atYNx: function (p2616, p2617) {
        return p2616 ^ p2617;
      },
      vAkmC: function (p2618, p2619, p2620) {
        return p2618(p2619, p2620);
      },
      IDkcA: function (p2621, p2622) {
        return p2621 * p2622;
      },
      FvPPG: function (p2623, p2624) {
        return p2623 ^ p2624;
      }
    };
    const {
      id: _0x5cdc5e,
      projectId: _0x1122b7,
      pageId: _0x37d7cc,
      name: _0x196331,
      calcRule: _0x3b2add,
      type: _0x42d296
    } = p2601;
    if (_0x42d296 === v2471.jKXry(442119, 442127) || v2471.Obpjj(_0x42d296, 9)) {
      return;
    }
    let v2472 = JSON.parse(_0x3b2add);
    if (v2472) {
      let v2473 = v2471.HwcoT(_0x1122b7, "_BuryPointCardStatistics");
      let v2474 = [];
      let v2475 = [];
      let v2476 = [];
      let v2477 = new Date(new Date().getTime() + parseInt(p2602, 10) * 86400000);
      for (let v2478 = 0; v2471.cdxxb(v2478, v2472.length); v2478++) {
        let v2479 = v2472[v2478].prePoint;
        let v2480 = v2472[v2478].calcName;
        let v2481 = v2472[v2478].calcNameKey;
        let v2482 = v2472[v2478].calcType;
        let v2483 = v2472[v2478].endPoint;
        let v2484 = v2472[v2478].unit;
        let v2485 = v2479.pointId;
        let v2486 = v2479.day;
        if (!v2486 || v2486 === "" || v2486 === undefined) {
          v2486 = 0;
        }
        let v2487 = v2479.calcField;
        let v2488 = v2479.queryCriteria;
        let v2489 = v2487.fieldIndex;
        let v2490 = v2471.ULltp(_0x1122b7, "_") + v2485;
        let v2491 = new Date(v2477.getTime() + parseInt(v2486, 10) * 86400000);
        let v2492 = await C21.splicingSql(v2487, v2488, v2490, v2491.Format(v2471.nIbVj));
        let v2493 = 0;
        let v2494 = await C21.getCount(v2492);
        if (v2482 && v2483) {
          let v2495 = v2483.pointId;
          let v2496 = v2483.calcField;
          let v2497 = v2483.queryCriteria;
          let v2498 = v2483.day;
          if (!v2498 || v2498 === "" || v2498 === undefined) {
            v2498 = 0;
          }
          let v2499 = _0x1122b7 + "_" + v2495;
          let v2500 = await C21.splicingSql(v2496, v2497, v2499, v2491.Format("yyyy-MM-dd"));
          try {
            let v2501 = await C21.getCount(v2500);
            if (v2482 === "+") {
              v2493 = parseInt(v2494, 10) + parseInt(v2501, 10);
            } else if (v2482 === "-") {
              v2493 = parseInt(v2494, 10) - parseInt(v2501, 10);
            } else if (v2482 === "/") {
              if (!v2484 || v2484 === "" || v2484 && v2484 != "%") {
                if (v2501 === v2471.jKXry(355688, 355688)) {
                  v2493 = 0;
                } else {
                  v2493 = vRequire3.toFixed(v2471.URocr(parseInt(v2494, v2471.atYNx(162673, 162683)), parseInt(v2501, v2471.jKXry(827738, 827728))), 2);
                }
              } else {
                if (v2501 === 0) {
                  v2493 = 0;
                } else {
                  v2493 = vRequire3.toFixed(parseInt(v2494, v2471.atYNx(146703, 146693)) / v2471.vAkmC(parseInt, v2501, 10) * 100, 2);
                }
                if (parseInt(v2493, 10) > 100) {
                  v2493 = 100;
                }
              }
            } else {
              v2493 = v2471.IDkcA(parseInt(v2494, v2471.FvPPG(930292, 930302)), parseInt(v2501, v2471.atYNx(846772, 846782)));
              ;
            }
          } catch (_0x1c7bef) {
            vRequire7.error(_0x1c7bef);
          }
        } else {
          v2493 = parseInt(v2494, v2471.jKXry(845708, 845702));
        }
        await C21.summaryFunnelStatistics(v2473, _0x37d7cc, _0x5cdc5e, _0x196331, v2480, v2481, v2493, v2491, v2476);
      }
      await C21.saveOrUpdateStatistic(v2473, _0x42d296, v2474, v2476);
    }
  }
  static async calculateFunnelDataByCard(p2625, p2626, p2627) {
    const v2502 = {
      LBzHR: function (p2628, p2629) {
        return p2628 + p2629;
      },
      aSTKH: function (p2630, p2631) {
        return p2630 ^ p2631;
      },
      FJXhf: function (p2632, p2633) {
        return p2632 < p2633;
      },
      JKikz: function (p2634, p2635, p2636) {
        return p2634(p2635, p2636);
      },
      XcBlE: function (p2637, p2638) {
        return p2637 + p2638;
      },
      JaoJY: function (p2639, p2640) {
        return p2639 + p2640;
      },
      nknKG: " and weFirstStepDay_",
      XwEhF: function (p2641, p2642) {
        return p2641 === p2642;
      },
      zOgfc: function (p2643, p2644) {
        return p2643 ^ p2644;
      }
    };
    const {
      id: _0x5c028c,
      projectId: _0x4b9194,
      pageId: _0x23f703,
      name: _0x22fcb8,
      calcRule: _0x563473,
      type: _0x1baff2,
      conversionCycle: _0x537796
    } = p2625;
    let v2503 = JSON.parse(_0x563473);
    if (v2503) {
      const v2504 = _0x4b9194 + "_BuryPointCardStatistics";
      let v2505 = [];
      let v2506 = [];
      let v2507 = new Date(v2502.LBzHR(new Date().getTime(), p2626 * 86400000));
      let v2508 = v2507.Format("yyyyMMdd");
      for (let v2509 = v2502.aSTKH(903872, 903872); v2502.FJXhf(v2509, v2503.length); v2509++) {
        let v2510 = {};
        let v2511 = v2503[v2509].prePoint;
        let v2512 = v2503[v2509].calcName;
        let v2513 = v2503[v2509].calcNameKey;
        let v2514 = v2511.pointId;
        let v2515 = v2511.calcField;
        let v2516 = v2511.queryCriteria;
        let v2517 = v2515.fieldIndex;
        let v2518 = v2511.day;
        if (!v2518 || v2518 === "" || v2518 === undefined) {
          v2518 = 0;
        }
        let v2519 = _0x4b9194 + "_" + v2514;
        let v2520 = new Date(v2507.getTime() + v2502.JKikz(parseInt, v2518, 10) * 86400000);
        let v2521 = await C21.splicingSql(v2515, v2516, v2519, v2507);
        let v2522 = await BuryPointRelationModel.getListByPointIdAndCardId(v2514, _0x5c028c);
        let v2523 = v2522 && v2522.length > 0 ? v2522[v2502.aSTKH(896885, 896885)].stepColum : -1;
        if (_0x537796 && _0x537796 > 1) {
          let v2524 = [];
          for (let v2525 = v2502.aSTKH(941712, 941713); v2525 < _0x537796; v2525++) {
            let v2526 = new Date(v2520.getTime() + v2525 * 86400000 * -1);
            let v2527 = v2526.Format("yyyyMMdd");
            let v2528 = v2502.XcBlE(v2502.JaoJY(v2521 + " and weFirstStepDay_", v2523) + "='", v2527) + "'";
            let v2529 = v2502.aSTKH(992720, 992720);
            if (v2523 === -1) {
              v2529 = 0;
            } else {
              const v2530 = await BuryPointCardModel.statisticData(v2528);
              v2529 = v2530 ? isNaN(v2530[0].count) ? 0 : v2530[v2502.aSTKH(682967, 682967)].count : 0;
            }
            await C21.summaryFunnelStatistics(v2504, _0x23f703, _0x5c028c, _0x22fcb8, v2512, v2513, v2529, v2526, v2524);
          }
          await C21.saveOrUpdateFunnelList(v2504, v2524);
        }
        v2521 = v2502.JaoJY(v2502.XcBlE(v2521, v2502.nknKG) + v2523, "='") + v2508 + "'";
        let v2531 = 0;
        if (v2502.XwEhF(v2523, -1)) {
          v2531 = v2502.zOgfc(507047, 507047);
        } else {
          v2531 = await C21.getCount(v2521);
        }
        v2510.fieldIndex = v2517;
        v2510.calcName = v2512;
        v2510.count = v2531;
        v2510.percentage = 0;
        v2505.push(v2510);
        await C21.summaryFunnelStatistics(v2504, _0x23f703, _0x5c028c, _0x22fcb8, v2512, v2513, v2531, v2520, v2506);
      }
      await C21.saveOrUpdateStatistic(v2504, _0x1baff2, v2505, v2506);
    }
  }
  static async convertStatisticList(p2645, p2646, p2647) {
    const v2532 = {
      Rsbjg: function (p2648, p2649) {
        return p2648 === p2649;
      }
    };
    let v2533 = [];
    let v2534 = 0;
    for (let v2535 = 0; v2535 < p2646.length; v2535++) {
      const v2536 = {
        count: 0,
        happenDate: p2646[v2535]
      };
      for (let v2537 = 0; v2537 < p2647.length; v2537++) {
        let v2538 = new Date(p2647[v2537].happenDate).Format("MM-dd");
        if (v2532.Rsbjg(v2538, p2646[v2535])) {
          v2534 += parseFloat(p2647[v2537].count);
          v2536.count = parseFloat(p2647[v2537].count);
          break;
        }
      }
      v2533.push(v2536);
    }
    p2645.calcTotail = v2534 ? v2534 : 0;
    p2645.calcData = v2533;
    return p2645;
  }
  static async ["calcFunnelRate"](p2650) {
    const v2539 = {
      Rvslq: function (p2651, p2652) {
        return p2651 ^ p2652;
      },
      CRifE: function (p2653, p2654, p2655) {
        return p2653(p2654, p2655);
      },
      aUfGz: function (p2656, p2657) {
        return p2656 !== p2657;
      },
      ydhXb: function (p2658, p2659, p2660) {
        return p2658(p2659, p2660);
      },
      kMfDV: function (p2661, p2662) {
        return p2661 ^ p2662;
      },
      UmdAj: function (p2663, p2664) {
        return p2663 + p2664;
      },
      VAIkb: function (p2665, p2666) {
        return p2665 ^ p2666;
      },
      HIAlK: function (p2667, p2668, p2669) {
        return p2667(p2668, p2669);
      },
      ivWmS: function (p2670, p2671, p2672) {
        return p2670(p2671, p2672);
      },
      VeSxS: function (p2673, p2674) {
        return p2673 ^ p2674;
      },
      LWCdx: function (p2675, p2676) {
        return p2675 ^ p2676;
      },
      nIKtC: function (p2677, p2678) {
        return p2677 === p2678;
      },
      NSmRr: function (p2679, p2680) {
        return p2679 * p2680;
      },
      Bvzur: function (p2681, p2682) {
        return p2681 / p2682;
      },
      FPXvl: function (p2683, p2684) {
        return p2683 ^ p2684;
      },
      bAyPr: function (p2685, p2686) {
        return p2685 ^ p2686;
      },
      pERnh: function (p2687, p2688) {
        return p2687 - p2688;
      },
      KKGCg: function (p2689, p2690) {
        return p2689 ^ p2690;
      },
      sfPhq: function (p2691, p2692) {
        return p2691 ^ p2692;
      },
      zRryX: function (p2693, p2694) {
        return p2693 ^ p2694;
      },
      zXSRx: function (p2695, p2696) {
        return p2695 ^ p2696;
      }
    };
    p2650.sort(function (p2697, p2698) {
      return p2697.fieldIndex - p2698.fieldIndex;
    });
    let v2540 = 0;
    for (let v2541 = v2539.Rvslq(921755, 921755); v2541 < p2650.length; v2541++) {
      v2540 = parseInt(v2540, v2539.Rvslq(850782, 850772)) + v2539.CRifE(parseInt, p2650[v2541].calcTotail, 10);
      if (v2539.aUfGz(v2541, p2650.length - v2539.Rvslq(532502, 532503))) {
        if (v2539.ydhXb(parseInt, p2650[v2541].calcTotail, v2539.Rvslq(821621, 821631)) === v2539.kMfDV(103658, 103658)) {
          p2650[v2539.UmdAj(v2541, 1)].calcTotailRate = 0;
        } else {
          let v2542 = vRequire3.toFixed(parseInt(p2650[v2539.UmdAj(v2541, 1)].calcTotail, v2539.VAIkb(194918, 194924)) / parseInt(p2650[v2541].calcTotail, 10) * 100, v2539.kMfDV(996850, 996848));
          p2650[v2541 + 1].calcTotailRate = v2542 ? v2542 : v2539.VAIkb(330067, 330067);
        }
        let v2543 = p2650[v2541].calcData;
        for (let v2544 = 0; v2544 < v2543.length; v2544++) {
          let v2545 = v2543[v2544];
          if (v2539.HIAlK(parseInt, v2545.count, v2539.Rvslq(649505, 649515)) === 0) {
            v2545.percentage = 0;
            continue;
          }
          let v2546 = p2650[v2541 + 1].calcData;
          for (let v2547 = 0; v2547 < v2546.length; v2547++) {
            if (v2545.happenDate === v2546[v2547].happenDate) {
              let v2548 = vRequire3.toFixed(v2539.HIAlK(parseInt, v2546[v2547].count, 10) / v2539.ivWmS(parseInt, v2545.count, v2539.VeSxS(629357, 629351)) * v2539.VeSxS(278551, 278643), v2539.Rvslq(535749, 535751));
              v2546[v2547].percentage = v2548 ? v2548 : v2539.LWCdx(752092, 752092);
              break;
            }
          }
        }
      }
    }
    if (v2539.nIKtC(v2540, v2539.kMfDV(557884, 557884))) {
      p2650[0].calcTotailRate = 0;
    } else {
      let v2549 = vRequire3.toFixed(v2539.NSmRr(v2539.Bvzur(parseInt(p2650[p2650.length - v2539.VeSxS(605957, 605956)].calcTotail, 10), parseInt(p2650[v2539.LWCdx(407458, 407458)].calcTotail, v2539.FPXvl(456179, 456185))), 100), 2);
      p2650[0].calcTotailRate = v2549 ? v2549 : 0;
      let v2550 = p2650[0].calcData;
      for (let v2551 = 0; v2551 < v2550.length; v2551++) {
        let v2552 = v2550[v2551];
        if (parseInt(v2552.count, v2539.bAyPr(641934, 641924)) === 0) {
          v2552.percentage = 0;
          continue;
        }
        let v2553 = p2650[v2539.pERnh(p2650.length, 1)].calcData;
        for (let v2554 = v2539.KKGCg(925050, 925050); v2554 < v2553.length; v2554++) {
          if (v2552.happenDate === v2553[v2554].happenDate) {
            let v2555 = vRequire3.toFixed(v2539.NSmRr(parseInt(v2553[v2554].count, v2539.sfPhq(689569, 689579)) / v2539.HIAlK(parseInt, v2552.count, 10), 100), v2539.zRryX(993410, 993408));
            v2552.percentage = v2555 ? v2555 : v2539.zXSRx(496433, 496433);
            break;
          }
        }
      }
    }
  }
  static async convertFunnelConversionRate(p2699) {
    const v2556 = {
      qLyTi: function (p2700, p2701) {
        return p2700 < p2701;
      },
      RwZul: function (p2702, p2703) {
        return p2702 ^ p2703;
      }
    };
    for (let v2557 = 0; v2556.qLyTi(v2557, p2699.length); v2557++) {
      let v2558 = p2699[v2557].calcData;
      let v2559 = [];
      for (let v2560 = v2556.RwZul(749856, 749856); v2560 < v2558.length; v2560++) {
        let v2561 = v2558[v2560];
        let v2562 = {};
        if (!v2561.percentage || v2561.percentage === "" || v2561.percentage === undefined) {
          v2562.count = 0;
        } else {
          v2562.count = v2561.percentage;
        }
        v2562.happenDate = v2561.happenDate;
        v2559.push(v2562);
      }
      p2699[v2557].calcData = v2559;
    }
  }
  static async ["calculateHeatMapDataByCard"](p2704, p2705, p2706) {
    const v2563 = {
      NEiOB: function (p2707, p2708) {
        return p2707 * p2708;
      },
      cEgXe: "yyyyMMdd",
      txphB: function (p2709, p2710, p2711) {
        return p2709(p2710, p2711);
      },
      EkjaS: function (p2712, p2713) {
        return p2712 + p2713;
      },
      qlDMZ: " and weFirstStepDay_"
    };
    const {
      id: _0x18b447,
      pageId: _0x4f5be2,
      name: _0x2298fd,
      calcRule: _0x18341e,
      type: _0x3a4b52,
      conversionCycle: _0x21e9a0
    } = p2704;
    let v2564 = await BuryPointProjectModel.detail(_0x4f5be2);
    if (v2564) {
      let v2565 = v2564.projectId;
      let v2566 = JSON.parse(_0x18341e);
      if (v2566) {
        const v2567 = v2565 + "_BuryPointCardStatistics";
        let v2568 = [];
        let v2569 = [];
        let v2570 = new Date(new Date().getTime() + v2563.NEiOB(p2705, 86400000));
        let v2571 = v2570.Format(v2563.cEgXe);
        for (let v2572 = 0; v2572 < v2566.length; v2572++) {
          let v2573 = {};
          let v2574 = v2566[v2572].prePoint;
          let v2575 = v2566[v2572].calcName;
          let v2576 = v2566[v2572].calcNameKey;
          let v2577 = v2574.pointId;
          let v2578 = v2574.calcField;
          let v2579 = v2574.queryCriteria;
          let v2580 = v2578.fieldIndex;
          let v2581 = v2574.day;
          if (!v2581 || v2581 === "" || v2581 === undefined) {
            v2581 = 0;
          }
          let v2582 = v2565 + "_" + v2577;
          let v2583 = new Date(v2570.getTime() + v2563.txphB(parseInt, v2581, 10) * 86400000);
          let v2584 = await C21.splicingSql(v2578, v2579, v2582, v2570);
          v2584 = v2563.EkjaS(v2563.EkjaS(v2584, v2563.qlDMZ) + stepColum + "='", v2571) + "'";
          count = await C21.getCount(v2584);
          v2573.fieldIndex = v2580;
          v2573.calcName = v2575;
          v2573.count = count;
          v2573.percentage = 0;
          v2568.push(v2573);
          await C21.summaryFunnelStatistics(v2567, _0x4f5be2, _0x18b447, _0x2298fd, v2575, v2576, count, v2583, v2569);
        }
        await C21.saveOrUpdateStatistic(v2567, _0x3a4b52, v2568, v2569);
      }
    }
  }
  static async ["saveOrUpdateFunnelList"](p2714, p2715) {
    const v2585 = {
      yJGCp: function (p2716, p2717) {
        return p2716 > p2717;
      },
      hSJVC: function (p2718, p2719) {
        return p2718 < p2719;
      }
    };
    if (v2585.yJGCp(p2715.length, 0)) {
      for (let v2586 = 0; v2585.hSJVC(v2586, p2715.length); v2586++) {
        BuryPointCardStatisticsModel.createOrUpdate(p2715[v2586], p2714);
      }
    }
  }
  static async saveOrUpdateStatistic(p2720, p2721, p2722, p2723) {
    const v2587 = {
      SEchE: function (p2724, p2725) {
        return p2724 === p2725;
      }
    };
    if (p2723.length > 0) {
      if (p2721 && v2587.SEchE(p2721, 5)) {
        await C21.calcFunnelConversionRate(p2722, p2723);
      }
      for (let v2588 = 0; v2588 < p2723.length; v2588++) {
        await BuryPointCardStatisticsModel.createOrUpdate(p2723[v2588], p2720);
      }
    }
  }
  static async saveOrUpdateGroupByStatistic(p2726, p2727) {
    const v2589 = {
      VKWWA: function (p2728, p2729) {
        return p2728 ^ p2729;
      },
      zfYIs: function (p2730, p2731) {
        return p2730 < p2731;
      },
      BCEsK: function (p2732, p2733) {
        return p2732 + p2733;
      },
      mMSgC: function (p2734, p2735) {
        return p2734 + p2735;
      },
      KuThN: function (p2736, p2737) {
        return p2736 + p2737;
      }
    };
    if (p2727.length > v2589.VKWWA(285730, 285730)) {
      let v2590 = [];
      let v2591 = new Date().Format("yyyy-MM-dd hh:mm:ss");
      for (let v2592 = 0; v2589.zfYIs(v2592, p2727.length); v2592++) {
        let v2593 = v2589.BCEsK(v2589.BCEsK(v2589.mMSgC(v2589.mMSgC(v2589.mMSgC(v2589.KuThN(v2589.KuThN("('" + p2727[v2592].pageId + "','" + p2727[v2592].cardId, "',") + "'", p2727[v2592].cardName) + "'," + p2727[v2592].count + ",'" + p2727[v2592].calcField + "','", p2727[v2592].happenDate), "',"), "'"), v2591), "')");
        await SdkReleaseModel.updateBatchStatisticValues(p2726, v2593, p2727[v2592].count, v2591);
      }
    }
  }
  static async calcFunnelConversionRate(p2738, p2739) {
    const v2594 = {
      XigCt: function (p2740, p2741) {
        return p2740 ^ p2741;
      },
      pJkXA: function (p2742, p2743) {
        return p2742 + p2743;
      },
      ZCMEs: function (p2744, p2745) {
        return p2744 ^ p2745;
      },
      isYEW: function (p2746, p2747) {
        return p2746 === p2747;
      },
      uJXGf: function (p2748, p2749, p2750) {
        return p2748(p2749, p2750);
      },
      dEbPP: function (p2751, p2752) {
        return p2751 + p2752;
      },
      djVWt: function (p2753, p2754) {
        return p2753 ^ p2754;
      },
      NPiBC: function (p2755, p2756) {
        return p2755 / p2756;
      },
      XsUtW: function (p2757, p2758) {
        return p2757 + p2758;
      },
      bNeyq: function (p2759, p2760) {
        return p2759 ^ p2760;
      },
      GMmVh: function (p2761, p2762) {
        return p2761 ^ p2762;
      },
      njhwI: function (p2763, p2764) {
        return p2763 === p2764;
      }
    };
    p2738.sort(function (p2765, p2766) {
      return p2765.fieldIndex - p2766.fieldIndex;
    });
    let v2595 = 0;
    for (let v2596 = v2594.XigCt(130807, 130807); v2596 < p2738.length; v2596++) {
      v2595 = v2594.pJkXA(parseInt(v2595, v2594.ZCMEs(598779, 598769)), parseInt(p2738[v2596].count, 10));
      if (v2596 !== p2738.length - v2594.XigCt(438746, 438747)) {
        if (v2594.isYEW(v2594.uJXGf(parseInt, p2738[v2596].count, 10), 0)) {
          p2738[v2596 + 1].percentage = 0;
        } else {
          p2738[v2594.dEbPP(v2596, v2594.djVWt(749678, 749679))].percentage = vRequire3.toFixed(v2594.NPiBC(parseInt(p2738[v2594.XsUtW(v2596, 1)].count, v2594.djVWt(851986, 851992)), parseInt(p2738[v2596].count, 10)) * v2594.djVWt(308493, 308585), 2);
        }
      }
    }
    if (v2594.isYEW(v2595, v2594.XigCt(452363, 452363))) {
      p2738[v2594.bNeyq(369244, 369244)].percentage = v2594.djVWt(479511, 479511);
    } else {
      p2738[0].percentage = vRequire3.toFixed(v2594.uJXGf(parseInt, p2738[p2738.length - 1].count, 10) / parseInt(v2595, 10) * v2594.GMmVh(986721, 986629), 2);
    }
    for (let v2597 = 0; v2597 < p2738.length; v2597++) {
      for (let v2598 = 0; v2598 < p2739.length; v2598++) {
        if (v2594.njhwI(p2738[v2597].calcName, p2739[v2598].calcField)) {
          p2739[v2598].percentage = isNaN(p2738[v2597].percentage) ? 0 : p2738[v2597].percentage;
        }
      }
    }
  }
  static handleSplicingSql(p2767, p2768, p2769, p2770, p2771) {
    const v2599 = {
      gBWaB: "count",
      gwOHo: function (p2777, p2778) {
        return p2777 ^ p2778;
      },
      espkL: "avg",
      RUsvn: function (p2779, p2780) {
        return p2779 ^ p2780;
      },
      MkWZu: " select ",
      HreHG: function (p2781, p2782) {
        return p2781 === p2782;
      },
      Poxri: function (p2783, p2784) {
        return p2783 === p2784;
      },
      Bpejq: function (p2785, p2786) {
        return p2785 === p2786;
      },
      CVWsC: function (p2787, p2788) {
        return p2787 + p2788;
      },
      GKOeJ: function (p2789, p2790) {
        return p2789 + p2790;
      },
      aZBoM: function (p2791, p2792) {
        return p2791 < p2792;
      },
      FFnxi: function (p2793, p2794) {
        return p2793 + p2794;
      },
      gDnon: function (p2795, p2796) {
        return p2795 + p2796;
      },
      fspVM: "!='') ",
      YREvP: function (p2797, p2798) {
        return p2797 + p2798;
      },
      WkxEq: " like '%",
      YTGnZ: "not in",
      DwLsj: "and",
      sZePp: function (p2799, p2800) {
        return p2799 + p2800;
      },
      XJrxZ: function (p2801, p2802) {
        return p2801 + p2802;
      },
      yROoB: function (p2803, p2804) {
        return p2803 + p2804;
      },
      wXDac: function (p2805, p2806) {
        return p2805 + p2806;
      },
      NNIJc: function (p2807, p2808) {
        return p2807 + p2808;
      },
      DKsfS: function (p2809, p2810) {
        return p2809 + p2810;
      },
      YudPh: function (p2811, p2812) {
        return p2811 + p2812;
      },
      rPmqC: " where 1=1 and (",
      LlswF: " where 1=1 "
    };
    let v2600 = v2599.gBWaB;
    function f38(p2823, p2824, p2825, p2826, p2827) {
      return f22(p2823 - -198, p2824);
    }
    let v2601 = "";
    if (p2767.isRepeat === "2" || p2767.isRepeat === 2) {
      v2600 = "sum";
    } else if (p2767.isRepeat === "3" || p2767.isRepeat === v2599.gwOHo(782451, 782448)) {
      v2600 = v2599.espkL;
    } else if (p2767.isRepeat === "6" || p2767.isRepeat === 6) {
      v2600 = "max";
    } else if (p2767.isRepeat === "7" || p2767.isRepeat === v2599.RUsvn(178982, 178977)) {
      v2600 = "min";
    } else if (p2767.isRepeat === "8" || p2767.isRepeat === 8) {
      v2600 = "sum";
      v2601 = "count(distinct weCustomerKey)";
    } else {
      v2600 = v2599.gBWaB;
    }
    let v2602 = v2599.MkWZu + v2600 + "(";
    if (v2599.HreHG(p2767.isRepeat, "1") || p2767.isRepeat === 1 || v2599.Poxri(p2767.isRepeat, "5") || v2599.Bpejq(p2767.isRepeat, 5)) {
      v2602 = v2602 + "distinct " + p2767.fieldName;
    } else {
      v2602 = v2599.CVWsC(v2602, p2767.fieldName);
    }
    if (v2601) {
      v2602 = v2599.GKOeJ(v2602 + ") / ", v2601) + " as count  from " + p2769;
    } else {
      v2602 = v2602 + ") as count from " + p2769;
    }
    if (p2768.length > 0) {
      let v2603 = p2767.andOr;
      if (!p2767.andOr || v2599.Poxri(p2767.andOr, undefined)) {
        v2603 = "and";
      } else {
        v2603 = vRequire3.convertAndOr(v2603);
      }
      var v2604 = "";
      for (let v2605 = 0; v2599.aZBoM(v2605, p2768.length); v2605++) {
        let v2606 = p2768[v2605].fieldName;
        let v2607 = vRequire3.convertOper(p2768[v2605].rule);
        let v2608 = p2768[v2605].value;
        if (v2607 === "is null") {
          v2604 = v2599.FFnxi(" " + v2604 + "(" + v2606 + " " + v2607, " or ") + v2606 + "='') " + v2603 + " ";
        } else if (v2607 === "is not null") {
          v2604 = v2599.CVWsC(v2599.FFnxi(v2599.gDnon(v2599.gDnon(" " + v2604, "("), v2606) + " " + v2607, " and ") + v2606, v2599.fspVM) + v2603 + " ";
        } else if (v2607 === "in") {
          let v2609 = v2608.split(",");
          let v2610 = "";
          for (let v2611 = 0; v2611 < v2609.length; v2611++) {
            v2610 += v2599.FFnxi(v2599.CVWsC(v2599.YREvP(v2606 + v2599.WkxEq, v2609[v2611]), "%' "), " or ");
          }
          v2610 = v2610.substring(0, v2610.lastIndexOf("or"));
          v2604 = v2599.FFnxi(v2604 + " (" + v2610, ")") + " " + v2603 + " ";
        } else if (v2599.Poxri(v2607, v2599.YTGnZ)) {
          let v2612 = v2608.split(",");
          let v2613 = "";
          for (let v2614 = v2599.RUsvn(998720, 998720); v2614 < v2612.length; v2614++) {
            v2613 += v2606 + " not like '%" + v2612[v2614] + "%' " + " and ";
          }
          v2613 = v2613.substring(0, v2613.lastIndexOf(v2599.DwLsj));
          v2604 = v2599.sZePp(v2599.XJrxZ(v2599.yROoB(v2599.GKOeJ(v2604, " ("), v2613) + ")", " "), v2603) + " ";
        } else if (v2599.HreHG(v2607, "区间")) {
          let v2615 = v2608.split(",");
          let v2616 = v2599.XJrxZ(v2599.wXDac(v2599.NNIJc(v2606 + " >=", v2615[0]) + " and " + v2606, " <="), v2615[1]);
          v2604 = v2599.yROoB(v2604 + " (" + v2616 + ") ", v2603) + " ";
        } else {
          v2604 = v2599.DKsfS(" " + v2604 + v2606 + " " + v2607 + " '", v2608) + "' " + v2603 + " ";
        }
      }
      v2604 = v2604.substr(0, v2604.lastIndexOf(v2603));
      v2602 = v2599.YudPh(v2599.YREvP(" " + v2602, v2599.rPmqC) + v2604, ")");
    } else {
      v2602 = v2599.FFnxi(" " + v2602, v2599.LlswF);
    }
    v2602 = v2599.GKOeJ(v2602, " and happenTime >='" + p2770 + "' and happenTime <='" + p2771 + "' ");
    return v2602;
  }
  static async splicingSql(p2858, p2859, p2860, p2861) {
    const v2617 = {
      fUUMf: function (p2862, p2863) {
        return p2862 + p2863;
      },
      ySqVE: " 23:59:59"
    };
    const v2618 = p2861 + " 00:00:00";
    const v2619 = v2617.fUUMf(p2861, v2617.ySqVE);
    return C21.handleSplicingSql(p2858, p2859, p2860, v2618, v2619);
  }
  static async ["splicingSqlForTime"](p2864, p2865, p2866, p2867, p2868) {
    return C21.handleSplicingSql(p2864, p2865, p2866, p2867, p2868);
  }
  static handleSplicingGroupBySql(p2869, p2870, p2871, p2872, p2873) {
    const v2620 = {
      ajgIi: function (p2879, p2880) {
        return p2879 < p2880;
      },
      mUrHl: "sum",
      XLGjB: function (p2881, p2882) {
        return p2881 === p2882;
      },
      DZWPP: function (p2883, p2884) {
        return p2883 === p2884;
      },
      pLRSq: function (p2885, p2886) {
        return p2885 ^ p2886;
      },
      rzMUl: function (p2887, p2888) {
        return p2887 + p2888;
      },
      woEZt: function (p2889, p2890) {
        return p2889 + p2890;
      },
      ZkAJD: " as groupByName, ",
      Gfpag: function (p2891, p2892) {
        return p2891 === p2892;
      },
      YedBf: function (p2893, p2894) {
        return p2893 ^ p2894;
      },
      nanBN: "weCustomerKey",
      gObdM: " distinct ",
      XyVOw: function (p2895, p2896) {
        return p2895 + p2896;
      },
      vuIlL: function (p2897, p2898) {
        return p2897 > p2898;
      },
      WSNhu: "and",
      DBOvo: function (p2899, p2900) {
        return p2899 + p2900;
      },
      BGmGI: function (p2901, p2902) {
        return p2901 + p2902;
      },
      tOmDG: "='') ",
      EazEy: function (p2903, p2904) {
        return p2903 === p2904;
      },
      Flsxy: "is not null",
      KMkax: function (p2905, p2906) {
        return p2905 === p2906;
      },
      zPYen: " not like '%",
      QBfDe: " and ",
      arIvl: function (p2907, p2908) {
        return p2907 + p2908;
      },
      UTQMB: function (p2909, p2910) {
        return p2909 === p2910;
      },
      BhqZi: function (p2911, p2912) {
        return p2911 + p2912;
      },
      TegHD: function (p2913, p2914) {
        return p2913 + p2914;
      },
      ptqra: function (p2915, p2916) {
        return p2915 + p2916;
      },
      GrNAB: function (p2917, p2918) {
        return p2917 + p2918;
      },
      scoFr: " where 1=1 and (",
      AWdlN: " where 1=1 ",
      UQFrs: function (p2919, p2920) {
        return p2919 ^ p2920;
      }
    };
    let v_0x56b964 = " select ";
    let v_0x22ef0d = "count";
    let v2621 = 0;
    let v2622 = "";
    let v2623 = "";
    for (let v2624 = 0; v2620.ajgIi(v2624, p2870.length); v2624++) {
      let v2625 = p2870[v2624].fieldName;
      let v2626 = vRequire3.convertOper(p2870[v2624].rule);
      if (v2626 === "group by") {
        v2621 = 1;
        v2622 = v2625;
        break;
      }
    }
    if (p2869.isRepeat === "2" || p2869.isRepeat === 2) {
      v_0x22ef0d = v2620.mUrHl;
    } else if (v2620.XLGjB(p2869.isRepeat, "3") || v2620.DZWPP(p2869.isRepeat, v2620.pLRSq(629360, 629363))) {
      v_0x22ef0d = "avg";
    } else if (p2869.isRepeat === "6" || p2869.isRepeat === 6) {
      v_0x22ef0d = "max";
    } else if (p2869.isRepeat === "7" || p2869.isRepeat === 7) {
      v_0x22ef0d = "min";
    } else if (p2869.isRepeat === "8" || p2869.isRepeat === 8) {
      v_0x22ef0d = v2620.mUrHl;
      v2623 = "count(distinct weCustomerKey)";
    } else {
      v_0x22ef0d = "count";
    }
    if (v2621 === 1 && v2622) {
      v_0x56b964 = v_0x56b964 + v2622;
    } else {
      v_0x56b964 = v_0x56b964 + p2869.fieldName;
    }
    v_0x56b964 = v2620.rzMUl(v2620.woEZt(v_0x56b964, v2620.ZkAJD), v_0x22ef0d) + "(";
    if (p2869.isRepeat === "5" || p2869.isRepeat === 5) {
      v_0x56b964 = v_0x56b964 + " distinct weCustomerKey";
    } else if (p2869.isRepeat === "4" || v2620.Gfpag(p2869.isRepeat, v2620.YedBf(266313, 266317))) {
      v_0x56b964 = v_0x56b964 + v2620.nanBN;
    } else if (p2869.isRepeat === "1" || p2869.isRepeat === 1) {
      v_0x56b964 = v_0x56b964 + v2620.gObdM + p2869.fieldName;
    } else {
      v_0x56b964 = v2620.woEZt(v_0x56b964, p2869.fieldName);
    }
    if (v2623) {
      v_0x56b964 = v2620.woEZt(v2620.XyVOw(v_0x56b964, ") / ") + v2623 + " as count  from ", p2871);
    } else {
      v_0x56b964 = v_0x56b964 + ") as count from " + p2871;
    }
    if (v2620.vuIlL(p2870.length, v2620.YedBf(845999, 845999))) {
      let v2627 = p2869.andOr;
      if (!p2869.andOr || p2869.andOr === undefined) {
        v2627 = v2620.WSNhu;
      } else {
        v2627 = vRequire3.convertAndOr(v2627);
      }
      var v2628 = "";
      var v2629 = "";
      for (let v2630 = 0; v2620.ajgIi(v2630, p2870.length); v2630++) {
        const v2631 = p2870[v2630];
        v2627 = vRequire3.convertAndOr(v2631.andOr);
        let v2632 = p2870[v2630].fieldName;
        let v2633 = vRequire3.convertOper(p2870[v2630].rule);
        let v2634 = p2870[v2630].value;
        if (v2633 === "is null") {
          v2628 = v2620.DBOvo(v2620.BGmGI(" " + v2628 + "(", v2632) + " " + v2633 + " or " + v2632 + v2620.tOmDG, v2627) + " ";
        } else if (v2620.EazEy(v2633, v2620.Flsxy)) {
          v2628 = v2620.DBOvo(" " + v2628 + "(" + v2632 + " " + v2633 + " and ", v2632) + "!='') " + v2627 + " ";
        } else if (v2620.EazEy(v2633, "in")) {
          let v2635 = v2634.split(",");
          let v2636 = "";
          for (let v2637 = 0; v2637 < v2635.length; v2637++) {
            v2636 += v2632 + " like '%" + v2635[v2637] + "%' " + " or ";
          }
          v2636 = v2636.substring(0, v2636.lastIndexOf("or"));
          v2628 = v2620.XyVOw(v2620.woEZt(v2628 + " (", v2636) + ") ", v2627) + " ";
        } else if (v2620.KMkax(v2633, "not in")) {
          let v2638 = v2634.split(",");
          let v2639 = "";
          for (let v2640 = 0; v2640 < v2638.length; v2640++) {
            v2639 += v2632 + v2620.zPYen + v2638[v2640] + "%' " + v2620.QBfDe;
          }
          v2639 = v2639.substring(0, v2639.lastIndexOf("and"));
          v2628 = v2620.XyVOw(v2620.XyVOw(v2620.XyVOw(v2628, " ("), v2639) + ") " + v2627, " ");
        } else if (v2633 === "区间") {
          let v2641 = v2634.split(",");
          let v2642 = v2620.rzMUl(v2620.DBOvo(v2620.arIvl(v2632 + " >=", v2641[0]), v2620.QBfDe) + v2632 + " <=", v2641[1]);
          v2628 = v2620.arIvl(v2628 + " (", v2642) + ") " + v2627 + " ";
        } else if (v2620.UTQMB(v2633, "group by")) {
          v2629 = v2620.BhqZi(" ", v2633) + " " + v2632;
        } else {
          v2628 = v2620.TegHD(v2620.ptqra(v2620.GrNAB(" " + v2628 + v2632 + " ", v2633) + " '" + v2634 + "'", " ") + v2627, " ");
        }
      }
      v2628 = v2628.substr(0, v2628.lastIndexOf(v2627));
      if (v2628) {
        v_0x56b964 = v2620.XyVOw(v2620.GrNAB(" " + v_0x56b964, v2620.scoFr), v2628) + ") " + v2629;
      } else {
        v_0x56b964 = v2620.XyVOw(v2620.DBOvo(" ", v_0x56b964), " ") + v2629;
      }
    } else {
      v_0x56b964 = v_0x56b964 + v2620.AWdlN;
    }
    v_0x56b964 = v_0x56b964 + (" and happenTime >='" + p2872 + "' and happenTime <='" + p2873 + "' ");
    if (v2620.KMkax(p2869.isRepeat, "4") || v2620.EazEy(p2869.isRepeat, 4) || p2869.isRepeat === "5" || p2869.isRepeat === v2620.UQFrs(664141, 664136)) {
      v_0x56b964 = v2620.rzMUl(v_0x56b964, " group by ") + p2869.fieldName;
    }
    return v_0x56b964;
  }
  static async splicingGroupBySql(p2966, p2967, p2968, p2969) {
    const v2643 = {
      jCDBI: function (p2970, p2971) {
        return p2970 + p2971;
      }
    };
    const v2644 = v2643.jCDBI(p2969, " 00:00:00");
    const v2645 = p2969 + " 23:59:59";
    return C21.handleSplicingGroupBySql(p2966, p2967, p2968, v2644, v2645);
  }
  static async ["splicingGroupBySqlForTime"](p2972, p2973, p2974, p2975, p2976) {
    return C21.handleSplicingGroupBySql(p2972, p2973, p2974, p2975, p2976);
  }
  static async ["splicingSqlForRetention"]({
    firstInfo: _0x13d2cc,
    lastInfo: _0x27f8dd,
    groupQuerySql: _0x5b6db3
  }) {
    const v2646 = {
      KCBAl: function (p2977, p2978) {
        return p2977 + p2978;
      }
    };
    const v2647 = _0x13d2cc.tableName;
    const v2648 = _0x27f8dd.tableName;
    let v2649 = " select count(distinct " + v2647 + ".weCustomerKey) as count from " + v2647 + ", " + v2648 + " ";
    const v2650 = v2646.KCBAl(vRequire5.handleQueryCriteriaSql(v2647, _0x13d2cc.calcFieldPre, _0x13d2cc.queryCriteriaPre), " and " + v2647 + ".happenTime>='" + _0x13d2cc.startTime + "' and " + v2647 + ".happenTime<'" + _0x13d2cc.endTime + "' ");
    const v2651 = vRequire5.handleQueryCriteriaSql(v2648, _0x27f8dd.calcFieldPre, _0x27f8dd.queryCriteriaPre) + (" and " + v2648 + ".happenTime>='" + _0x27f8dd.startTime + "' and " + v2648 + ".happenTime<'" + _0x27f8dd.endTime + "'");
    const v2652 = _0x5b6db3 ? " " + v2647 + "." + _0x5b6db3 + " and " : "";
    v2649 += " where " + v2652 + " " + v2647 + ".weCustomerKey=" + v2648 + ".weCustomerKey " + v2650 + " " + v2651;
    return v2649;
  }
  static async ["splicingTotalSqlForRetention"](p2979, p2980, p2981) {
    const {
      startTime: _0x14d316,
      endTime: _0x461532,
      topCount: _0x413154
    } = p2979;
    const v2653 = p2979.tableName;
    let v2654 = p2981 ? " and " + v2653 + "." + p2981 + " " : "";
    let v2655 = " select count(distinct " + v2653 + ".weCustomerKey) as count from " + v2653;
    if (p2980) {
      v2655 = " select " + p2980 + ", count(distinct " + v2653 + ".weCustomerKey) as count from " + v2653;
    }
    const v2656 = vRequire5.handleQueryCriteriaSql(v2653, p2979.calcFieldPre, p2979.queryCriteriaPre) + (" and " + v2653 + ".happenTime>='" + _0x14d316 + "' and " + v2653 + ".happenTime<'" + _0x461532 + "' ");
    v2655 += " where 1=1 " + v2654 + " " + v2656 + " ";
    if (p2980) {
      v2655 += " group by " + p2980 + " order by count desc limit " + _0x413154;
    }
    return v2655;
  }
  static async summaryFunnelStatistics(p2982, p2983, p2984, p2985, p2986, p2987, p2988, p2989, p2990) {
    let v2657 = p2989.Format("yyyy-MM-dd hh:mm:ss");
    let v2658 = p2989.Format("yyyy-MM-dd");
    const v2659 = {
      pageId: p2983,
      cardId: p2984,
      cardName: p2985
    };
    v2659.count = isNaN(p2988) ? 0 : p2988;
    v2659.calcField = p2986;
    v2659.calcFieldKey = p2987;
    v2659.happenDate = v2658;
    v2659.percentage = 0;
    p2990.push(v2659);
  }
  static async getCount(p2991) {
    const v2660 = {
      KyJhc: function (p2992, p2993) {
        return p2992 ^ p2993;
      },
      sRdpQ: function (p2994, p2995) {
        return p2994 ^ p2995;
      },
      Isebp: function (p2996, p2997) {
        return p2996 === p2997;
      }
    };
    let v2661 = v2660.KyJhc(886380, 886380);
    const v2662 = await BuryPointCardModel.statisticData(p2991);
    v2661 = v2662 ? v2662.length === v2660.sRdpQ(397744, 397744) || isNaN(v2662[0].count) || v2660.Isebp(v2662[v2660.sRdpQ(296934, 296934)].count, null) ? 0 : v2662[0].count : 0;
    return v2661;
  }
  static async ["getCountByTableName"](p2998) {
    const v2663 = await BuryPointCardModel.statisticData(p2998);
    return v2663;
  }
  static async ["checkTableName"](p2999) {
    const v2664 = {
      TzZqq: function (p3000, p3001) {
        return p3000 ^ p3001;
      },
      aefzA: function (p3002, p3003) {
        return p3002 > p3003;
      },
      gAJrc: function (p3004, p3005) {
        return p3004 ^ p3005;
      },
      eUteu: function (p3006, p3007) {
        return p3006 ^ p3007;
      }
    };
    const v2665 = await CommonModel.checkTableName(p2999).catch(p3008 => {
      vRequire7.error(p3008);
    });
    if (v2665 && v2665.length > v2664.TzZqq(340866, 340866) && v2664.aefzA(v2665[v2664.gAJrc(179793, 179793)].count, v2664.eUteu(215562, 215562))) {
      return true;
    } else {
      return false;
    }
  }
  static async calculateRetentionDataByCard({
    card: _0xbe1450,
    currDate: _0x483cc7,
    lastDate: _0x3dd538,
    groupFields: _0x2c11a5,
    groupQuerySql: _0x1280aa
  }) {
    const v2666 = {
      iniJJ: function (p3009, p3010) {
        return p3009 ^ p3010;
      },
      nmArv: function (p3011, p3012) {
        return p3011 * p3012;
      }
    };
    const {
      projectId: _0x47ac56,
      pageId: _0x4bd425,
      calcRule: _0x4ed2e7,
      type: _0x25d17d
    } = _0xbe1450;
    const v2667 = _0x4ed2e7[v2666.iniJJ(511076, 511076)];
    const v2668 = _0x4ed2e7[1];
    const v2669 = _0x47ac56 + "_" + v2667.prePoint.pointId;
    const v2670 = _0x47ac56 + "_" + v2668.prePoint.pointId;
    const v2671 = {
      tableName: v2669,
      calcFieldPre: v2667.prePoint.calcField,
      queryCriteriaPre: v2667.prePoint.queryCriteria,
      startTime: _0x483cc7.startTime,
      endTime: _0x483cc7.endTime
    };
    const v2672 = {
      tableName: v2670,
      calcFieldPre: v2668.prePoint.calcField,
      queryCriteriaPre: v2668.prePoint.queryCriteria,
      startTime: _0x3dd538.startTime,
      endTime: _0x3dd538.endTime
    };
    let v2673 = await C21.splicingSqlForRetention({
      firstInfo: v2671,
      lastInfo: v2672,
      groupFields: _0x2c11a5,
      groupQuerySql: _0x1280aa
    });
    let v2674 = await C21.getCount(v2673);
    const v2675 = v2666.nmArv(v2674, v2666.iniJJ(258131, 258130));
    return v2675;
  }
  static async ["calculateFirstStepRetentionCountByCard"]({
    card: _0x4be0bc,
    currDate: _0xa13371,
    groupFields: _0xc36a0a,
    groupQuerySql: _0x850896
  }) {
    const v2676 = {
      hmbOy: function (p3013, p3014) {
        return p3013 ^ p3014;
      }
    };
    const {
      projectId: _0x2bbe54,
      pageId: _0x5cfaf9,
      calcRule: _0x403a83,
      type: _0x432711,
      keepAnalysisRule: _0x5c1156
    } = _0x4be0bc;
    const v2677 = _0x403a83[v2676.hmbOy(940008, 940008)];
    const v2678 = _0x2bbe54 + "_" + v2677.prePoint.pointId;
    const v2679 = {
      tableName: v2678,
      calcFieldPre: v2677.prePoint.calcField,
      queryCriteriaPre: v2677.prePoint.queryCriteria,
      topCount: _0x5c1156.topCount,
      startTime: _0xa13371.startTime,
      endTime: _0xa13371.endTime
    };
    let v2680 = await C21.splicingTotalSqlForRetention(v2679, _0xc36a0a, _0x850896);
    let v2681 = await CommonModel.querySql(v2680);
    return v2681;
  }
  static async ["calculateFirstStepRetentionCountByCardForGroup"](p3015, p3016, p3017) {
    const v2682 = {
      tFFjC: function (p3018, p3019) {
        return p3018 * p3019;
      }
    };
    const {
      projectId: _0x44dbf6,
      pageId: _0x3b229c,
      calcRule: _0x598972,
      type: _0x21e61d
    } = p3015;
    const v2683 = _0x598972[0];
    const v2684 = _0x44dbf6 + "_" + v2683.prePoint.pointId;
    const v2685 = {
      tableName: v2684,
      calcFieldPre: v2683.prePoint.calcField,
      queryCriteriaPre: v2683.prePoint.queryCriteria,
      happenDateDay: p3016
    };
    let v2686 = await C21.splicingTotalSqlForRetention(v2685, p3017);
    let v2687 = await CommonModel.querySql(v2686);
    const v2688 = v2682.tFFjC(v2687, 1);
    return v2688;
  }
  static async handleAlarm() {
    const v2689 = {
      TKOQp: function (p3020, p3021) {
        return p3020 ^ p3021;
      },
      NTEiU: function (p3022, p3023) {
        return p3022 < p3023;
      },
      JgqWH: function (p3024, p3025) {
        return p3024 === p3025;
      },
      eVYVa: function (p3026, p3027) {
        return p3026 ^ p3027;
      },
      tsVFm: function (p3028, p3029) {
        return p3028 < p3029;
      },
      oGzod: function (p3030, p3031, p3032) {
        return p3030(p3031, p3032);
      },
      sCrSi: "yyyy-MM-dd",
      nBnze: function (p3033, p3034) {
        return p3033 ^ p3034;
      },
      CdWbO: " and DATE_FORMAT(happenTime,'%Y-%m-%d') = '"
    };
    let v2690 = await BuryPointCardModel.getAlarmCardList();
    for (let v2691 = v2689.TKOQp(205511, 205511); v2689.NTEiU(v2691, v2690.length); v2691++) {
      let v2692 = v2690[v2691];
      const {
        id: _0x4ba717,
        projectId: _0x228278,
        pageId: _0x5616b8,
        name: _0x41e14c,
        calcRule: _0x5a6259,
        type: _0x3d5758
      } = v2692;
      if (_0x3d5758 === 5 || _0x3d5758 === 8 || v2689.JgqWH(_0x3d5758, 9) || _0x3d5758 === 12) {
        continue;
      }
      let v2693 = JSON.parse(_0x5a6259);
      if (v2693) {
        for (let v2694 = v2689.eVYVa(641447, 641447); v2689.tsVFm(v2694, v2693.length); v2694++) {
          let v2695 = v2693[v2694].prePoint;
          let v2696 = v2693[v2694].alarmId;
          let v2697;
          let v2698 = v2689.oGzod(parseInt, v2695.day, 10);
          let v2699 = "";
          let v2700 = new Date().Format(v2689.sCrSi);
          if (!v2698 || v2698 === "" || v2698 === undefined) {
            v2698 = 0;
            v2699 = v2700;
          } else {
            let v2701 = new Date(new Date().getTime() + parseInt(v2698, v2689.nBnze(166980, 166990)) * 86400000);
            v2699 = v2701.Format("yyyy-MM-dd");
          }
          if (v2696) {
            let v2702 = v2695.pointId;
            let v2703 = _0x228278 + "_" + v2702;
            let v2704 = v2693[v2694].calcName;
            let v2705 = v2693[v2694].calcNameKey;
            let v2706 = v2695.calcField;
            let v2707 = v2695.queryCriteria;
            let v2708 = 0;
            v2697 = await CommonModel.splicingAlarmSql(v2706, v2707, v2703);
            v2697 = v2697 + v2689.CdWbO + v2699 + "'";
            let v2709 = await BuryPointCardModel.statisticData(v2697);
            v2708 = parseInt(v2709[v2689.nBnze(846299, 846299)].count, 10);
            C4.alarmNotice(_0x4ba717, _0x41e14c, v2704, v2705, v2696, _0x5616b8, v2692.alarmMembers, v2708, v2692.noticeWay);
          }
        }
      }
    }
  }
}
class C22 {
  static async createNewMessage(p3035) {
    let v2710 = JSON.parse(p3035.request.body);
    const {
      id: _0x1a1876,
      ruleName: _0x2a00bc,
      loopTime: _0x52d378,
      quietStartTime: _0x47fa75,
      quietEndTime: _0x5cfd78
    } = v2710;
    const v2711 = JSON.stringify(v2710.ruleList);
    const v2712 = {
      ruleName: _0x2a00bc,
      loopTime: _0x52d378,
      quietStartTime: _0x47fa75,
      quietEndTime: _0x5cfd78,
      ruleList: v2711
    };
    if (_0x2a00bc) {
      if (_0x1a1876) {
        v2712.id = _0x1a1876;
        await MessageModel.updateMessage(_0x1a1876, v2712);
      } else {
        await MessageModel.createMessage(v2712);
      }
      p3035.response.status = 200;
      p3035.body = vRequire9.SUCCESS_200("创建信息成功", 0);
    } else {
      p3035.response.status = 412;
      p3035.body = vRequire9.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async ["getAllMessage"](p3036) {
    const v2713 = {
      YMTqe: "查询信息列表成功！"
    };
    let v2714 = p3036.request.body;
    const v2715 = JSON.parse(v2714);
    let v2716 = await MessageModel.getAllMessage(v2715);
    p3036.response.status = 200;
    p3036.body = vRequire9.SUCCESS_200(v2713.YMTqe, v2716);
  }
  static async getMessageByType(p3037) {
    const v2717 = {
      wuEVw: function (p3038, p3039) {
        return p3038 ^ p3039;
      },
      mEDiI: function (p3040, p3041, p3042) {
        return p3040(p3041, p3042);
      },
      evbDq: "查询信息列表成功！"
    };
    let v2718 = p3037.request.body;
    const v2719 = JSON.parse(v2718);
    const {
      userId: _0x6189fb
    } = p3037.user;
    v2719.userId = _0x6189fb;
    let v2720 = await MessageModel.getMessageByType(v2719);
    let v2721 = await MessageModel.getUnReadMessageCountByType(v2719);
    let v2722 = 0;
    let v2723 = 0;
    if (v2721) {
      v2721.forEach(p3043 => {
        if (p3043.isRead === v2717.wuEVw(966358, 966358)) {
          v2722 = v2717.mEDiI(parseInt, p3043.count, 10);
        }
        v2723 += parseInt(p3043.count, 10);
      });
    }
    const v2724 = {
      messages: v2720,
      unReadCount: v2722,
      total: v2723
    };
    p3037.response.status = 200;
    p3037.body = vRequire9.SUCCESS_200(v2717.evbDq, v2724);
  }
  static async readMessage(p3044) {
    const v2725 = {
      jIWUA: function (p3045, p3046) {
        return p3045 ^ p3046;
      },
      boUgY: function (p3047, p3048) {
        return p3047 ^ p3048;
      }
    };
    let v2726 = JSON.parse(p3044.request.body);
    const {
      messageId: _0x451a6c
    } = v2726;
    const v2727 = MessageModel.getMessageDetail(_0x451a6c);
    v2727.isRead = v2725.jIWUA(815154, 815155);
    await MessageModel.updateMessage(_0x451a6c, v2727);
    p3044.response.status = v2725.boUgY(133831, 133647);
    p3044.body = vRequire9.SUCCESS_200("查询信息列表成功！", 0);
  }
  static async ["readAll"](p3049) {
    const v2728 = {
      sMwWK: "查询信息列表成功！"
    };
    let v2729 = JSON.parse(p3049.request.body);
    const {
      messageType: _0x42aceb
    } = v2729;
    const {
      userId: _0x579355
    } = p3049.user;
    MessageModel.readAll(_0x579355, _0x42aceb);
    p3049.response.status = 200;
    p3049.body = vRequire9.SUCCESS_200(v2728.sMwWK, 0);
  }
  static async detail(p3050) {
    return await MessageModel.getMessageDetail(p3050);
  }
}
class C23 {
  static async ["getSysInfo"](p3056) {
    const v2730 = {
      ahAKR: function (p3057, p3058) {
        return p3057 ^ p3058;
      },
      rcksM: function (p3059, p3060) {
        return p3059(p3060);
      },
      FBHIi: function (p3061, p3062) {
        return p3061 ^ p3062;
      },
      FUAhK: function (p3063, p3064) {
        return p3063 ^ p3064;
      },
      sRkxK: function (p3065, p3066) {
        return p3065 ^ p3066;
      }
    };
    const v2731 = {};
    const {
      purchaseCodeEndDate: _0x3fe463,
      purchaseCodeValid: _0x404d1d,
      purchaseCodeType: _0x249044,
      purchaseCodeCardCount: _0x2e1ec2
    } = global.eventInfo;
    v2731.isValid = _0x404d1d;
    v2731.version = vF25;
    v2731.productType = _0x249044;
    v2731.endDate = _0x3fe463;
    const v2732 = await BuryPointCardModel.getCountByNoSysType("");
    v2731.cardCount = isNaN(v2732[0].count) ? 0 : v2732[0].count;
    v2731.cardTotalCount = _0x2e1ec2;
    const v2733 = await BuryPointProjectModel.getCountByNameAndType("", v2730.ahAKR(761986, 761987));
    v2731.projectCount = v2730.rcksM(isNaN, v2733[0].count) ? 0 : v2733[v2730.FBHIi(605204, 605204)].count;
    v2731.totalProjectCount = _0x2e1ec2;
    const v2734 = await SdkReleaseModel.getPageCount("", "", "", "");
    v2731.sdkReleaseCount = isNaN(v2734[0].count) ? 0 : v2734[v2730.FUAhK(402147, 402147)].count;
    const v2735 = await BuryPointWarehouseModel.getPageCount("", "", "", "");
    v2731.pointCount = isNaN(v2735[0].count) ? v2730.sRkxK(951620, 951620) : v2735[0].count;
    const v2736 = await BuryPointFieldModel.getPageCount("", "", "", "");
    v2731.pointFieldCount = isNaN(v2736[v2730.FBHIi(156949, 156949)].count) ? 0 : v2736[v2730.ahAKR(533684, 533684)].count;
    p3056.response.status = 200;
    p3056.body = vRequire9.SUCCESS_200("success", v2731);
  }
  static async getBaseInfo(p3067) {
    const v2737 = {
      WHqHG: function (p3068, p3069) {
        return p3068 ^ p3069;
      },
      KGPek: function (p3070, p3071) {
        return p3070 === p3071;
      },
      EDajX: function (p3072, p3073) {
        return p3072(p3073);
      },
      EfKpW: "success"
    };
    const v2738 = {};
    const {
      purchaseCodeType: _0xf5aa0a,
      purchaseCodeCardCount: _0x24d2e3
    } = global.eventInfo;
    v2738.productType = _0xf5aa0a;
    if (_0xf5aa0a === 23 || _0xf5aa0a === v2737.WHqHG(599055, 599062) || v2737.KGPek(_0xf5aa0a, v2737.WHqHG(489327, 489333)) || _0xf5aa0a === v2737.WHqHG(682414, 682418)) {
      v2738.isVIP = 1;
    } else {
      v2738.isVIP = v2737.WHqHG(573246, 573246);
    }
    const v2739 = await BuryPointCardModel.getCountByNoSysType("");
    let v2740 = isNaN(v2739[0].count) ? v2737.WHqHG(803087, 803087) : v2739[0].count;
    v2738.cardSurplus = v2737.EDajX(parseInt, _0x24d2e3) - v2737.EDajX(parseInt, v2740);
    p3067.response.status = 200;
    p3067.body = vRequire9.SUCCESS_200(v2737.EfKpW, v2738);
  }
  static async ["getProjectInfo"](p3074) {
    const v2741 = {
      aKNCk: "cardCount",
      EghQR: function (p3075, p3076) {
        return p3075 ^ p3076;
      }
    };
    const v2742 = vRequire3.parseQs(p3074.request.url);
    const {
      companyId = "",
      orderBy = v2741.aKNCk,
      orderByType = "desc",
      page = 1,
      pageSize = 10
    } = v2742;
    try {
      const v2743 = await BuryPointProjectModel.getPageList(v2742);
      const {
        list: _0x3b09b8,
        total: _0x34926c
      } = v2743;
      p3074.response.status = 200;
      p3074.body = vRequire9.SUCCESS_200("success", {
        list: _0x3b09b8,
        total: _0x34926c
      });
    } catch (_0x54818b) {
      console.log(_0x54818b);
      p3074.response.status = v2741.EghQR(370703, 371090);
      p3074.body = vRequire9.ERROR_413("请求参数不合法");
    }
  }
}
class C24 {
  static async ["create"](p3077) {
    const v2744 = {
      HlDln: function (p3078, p3079) {
        return p3078 ^ p3079;
      },
      zwwQN: function (p3080, p3081) {
        return p3080 ^ p3081;
      }
    };
    let v2745 = JSON.parse(p3077.request.body);
    const {
      nickname: _0x266cc7
    } = p3077.user;
    v2745.createBy = _0x266cc7;
    if (v2745.projectId && v2745.pointName && v2745.fields) {
      const v2746 = await BuryPointWarehouseModel.checkName(v2745.projectId, v2745.pointName);
      let v2747 = v2746[0].count;
      if (v2747 > v2744.HlDln(512928, 512928)) {
        p3077.response.status = 412;
        p3077.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_FAIL_POINT_NAME_EXIST));
        return;
      }
      if (!v2745.fields || v2745.fields === undefined || v2745.fields === "") {
        p3077.response.status = 412;
        p3077.body = vRequire9.ERROR_412("请添加字段");
        return;
      }
      v2745.weType = 0;
      let v2748 = await BuryPointWarehouseModel.getMaxPointId();
      if (v2748 && v2748.length > v2744.HlDln(662723, 662723)) {
        v2745.pointId = parseInt(v2748[0].maxId, 10) + v2744.zwwQN(483948, 483949);
      } else {
        v2745.pointId = 1;
      }
      let v2749 = await BuryPointWarehouseModel.create(v2745);
      const {
        pointId: _0x11eb10,
        fields: _0x2f8929,
        weType: _0x4cf652,
        pointName: _0x11b9ec,
        projectId: _0x19fc9c
      } = v2749;
      await C24.updatePointBaseCache(_0x11eb10, _0x11b9ec, _0x19fc9c, _0x2f8929, _0x4cf652);
      p3077.response.status = v2744.HlDln(605410, 605226);
      p3077.body = vRequire9.SUCCESS_200("success", "");
    } else {
      p3077.response.status = 412;
      p3077.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_PARAM_FAIL));
    }
  }
  static async ["testCreateVisualizationPoint"](p3082) {
    let v2750 = JSON.parse(p3082.request.body);
    v2750.nickname = "webfunny";
    await C24.createVisualizationPoint(v2750);
  }
  static async createVisualizationPoint(p3083) {
    const v2751 = {
      KoLdt: function (p3084, p3085) {
        return p3084 === p3085;
      },
      ecIqG: "ExposureEventPointId",
      lhkuq: function (p3086, p3087) {
        return p3086 > p3087;
      },
      NdXCa: function (p3088, p3089, p3090) {
        return p3088(p3089, p3090);
      },
      lquTd: function (p3091, p3092) {
        return p3091 ^ p3092;
      },
      GSJAX: function (p3093, p3094) {
        return p3093 ^ p3094;
      },
      czSxU: function (p3095, p3096) {
        return p3095 ^ p3096;
      },
      TEajt: function (p3097, p3098) {
        return p3097 + p3098;
      },
      pHqtq: function (p3099, p3100) {
        return p3099 ^ p3100;
      }
    };
    let v2752 = {};
    const {
      projectId: _0x1208bd,
      pointName: _0x57456d,
      replacePointIdKey: _0x5f420b,
      nickname: _0x3aa067
    } = p3083;
    v2752.createBy = _0x3aa067;
    v2752.projectId = _0x1208bd;
    v2752.pointName = _0x57456d;
    if (v2752.projectId && v2752.pointName) {
      let v2753 = [];
      for (let v2754 = 0; v2754 < vRequire35.length; v2754++) {
        let v2755 = vRequire35[v2754];
        let {
          pointDesc: _0x546aed,
          replacePointIdKey: _0x1721b1,
          weType: _0x2b5ad3
        } = v2755;
        v2752.pointDesc = _0x546aed;
        v2752.weType = _0x2b5ad3;
        if (v2751.KoLdt(_0x1721b1, "ClickEventPointId")) {
          v2753 = v2755.fieldList;
          break;
        } else if (_0x1721b1 === v2751.ecIqG) {
          v2753 = v2755.fieldList;
          break;
        }
      }
      let v2756 = await BuryPointWarehouseModel.getMaxPointId();
      if (v2756 && v2751.lhkuq(v2756.length, 0)) {
        v2752.pointId = v2751.NdXCa(parseInt, v2756[v2751.lquTd(620570, 620570)].maxId, 10) + v2751.lquTd(681372, 681373);
      } else {
        v2752.pointId = v2751.GSJAX(502384, 502385);
      }
      let v2757 = "";
      for (let v2758 = 0; v2758 < v2753.length; v2758++) {
        let v2759 = v2753[v2758];
        let {
          fieldName: _0x22027c,
          fieldAlias: _0xf026b3,
          fieldType: _0x6aa21a,
          fieldLength: _0x279510
        } = v2759;
        const v2760 = await BuryPointFieldModel.existSameField(_0x1208bd, _0x22027c);
        if (!v2760 || v2760 && v2760.length === v2751.czSxU(240924, 240924)) {
          v2759.projectId = _0x1208bd;
          v2759.createBy = _0x3aa067;
          let v2761 = await BuryPointFieldModel.create(v2759);
          v2757 = v2751.TEajt(v2751.TEajt(v2757, v2761.id), ",");
        } else {
          v2757 = v2757 + v2760[0].id + ",";
        }
      }
      v2757 = v2757.substring(0, v2757.lastIndexOf(","));
      v2752.fields = v2757;
      let v2762 = await BuryPointWarehouseModel.create(v2752);
      const v2763 = await BuryPointFieldModel.getListByProjectIdAndWeType(_0x1208bd, 1);
      if (v2763 && v2763.length > 0) {
        for (let v2764 = v2751.czSxU(399100, 399100); v2764 < v2763.length; v2764++) {
          v2753.push(v2763[v2764]);
        }
      }
      let v2765 = _0x1208bd + "_" + v2762.pointId;
      CommonModel.createLogTable(v2765, v2753).catch(p3101 => {
        vRequire7.error(p3101);
      });
      return v2762.pointId;
    } else {
      ctx.response.status = v2751.pHqtq(644364, 644240);
      ctx.body = vRequire9.ERROR_412("点位名称不能为空");
    }
  }
  static async ["updateVisualizationPoint"](p3102) {
    let v2766 = {};
    const {
      projectId: _0x54d597,
      pointId: _0xc4c9cb,
      pointName: _0x41f7a3,
      nickname: _0x58cc22
    } = p3102;
    v2766.createBy = _0x58cc22;
    v2766.projectId = _0x54d597;
    v2766.pointName = _0x41f7a3;
    if (v2766.projectId && v2766.pointName && v2766.pointId) {
      const v2767 = await BuryPointWarehouseModel.detailByPointId(_0xc4c9cb);
      await BuryPointWarehouseModel.update(v2767.id, v2766);
    } else {
      vRequire7.printInfo("修改日志表: 点位名称不能为空");
    }
  }
  static async deleteVisualizationPoint(p3103) {
    const v2768 = {
      cxJJK: function (p3104, p3105) {
        return p3104 + p3105;
      }
    };
    let v2769 = {};
    const {
      projectId: _0xa11905,
      pointId: _0x4bba83
    } = p3103;
    v2769.projectId = _0xa11905;
    if (v2769.projectId && v2769.pointId) {
      const v2770 = await BuryPointWarehouseModel.detailByPointId(_0x4bba83);
      await BuryPointWarehouseModel.delete(v2770.id);
      let v2771 = v2768.cxJJK(v2768.cxJJK(_0xa11905, "_"), _0x4bba83);
      CommonModel.deleteTableByName(v2771).then(() => {
        vRequire7.printInfo("成功删除日志表: " + v2771);
      });
    } else {
      vRequire7.printInfo("删除日志表: 点位名称不能为空");
    }
  }
  static async ["update"](p3106) {
    const v2772 = {
      fhxcp: "}报错：",
      stsHj: function (p3107, p3108) {
        return p3107 === p3108;
      },
      XdbTo: function (p3109, p3110) {
        return p3109 ^ p3110;
      },
      icnEn: function (p3111, p3112) {
        return p3111 > p3112;
      },
      DBkfr: function (p3113, p3114) {
        return p3113 < p3114;
      },
      HKQGX: function (p3115, p3116) {
        return p3115 + p3116;
      }
    };
    let v2773 = JSON.parse(p3106.request.body);
    let v2774 = v2773.id;
    const {
      nickname: _0x3425f3
    } = p3106.user;
    v2773.updateBy = _0x3425f3;
    if (v2773) {
      const {
        fields: _0x4c1b05,
        weType: _0x3baa27,
        pointName: _0x30f2a1,
        projectId: _0x173ef5
      } = v2773;
      if (!v2773.fields || v2773.fields === undefined || v2772.stsHj(v2773.fields, "")) {
        p3106.response.status = v2772.XdbTo(747974, 747610);
        p3106.body = vRequire9.ERROR_412("请添加字段");
        return;
      }
      let v2775 = await BuryPointWarehouseModel.detail(v2774);
      const v2776 = v2775.pointId;
      let v2777 = v2775.projectId + "_" + v2776;
      await BuryPointWarehouseModel.update(v2774, v2773);
      await C24.updatePointBaseCache(v2776, _0x30f2a1, _0x173ef5, _0x4c1b05, _0x3baa27);
      let v2778 = _0x4c1b05.split(",");
      const v2779 = v2775.fields.split(",");
      var v2780 = v2778.filter(p3117 => !v2779.some(p3118 => p3118 === p3117));
      if (v2780 && v2772.icnEn(v2780.length, v2772.XdbTo(415013, 415013))) {
        let v2781 = await BuryPointFieldModel.getSomeListByProjectIdAndWeType(v2780 + "", "", "");
        for (let v2782 = 0; v2772.DBkfr(v2782, v2781.length); v2782++) {
          let {
            fieldName: _0x3a4257,
            fieldType: _0x2ae94c
          } = v2781[v2782];
          let v2783 = v2772.HKQGX(" ALTER TABLE " + v2777 + " ADD COLUMN ", _0x3a4257) + " " + _0x2ae94c;
          CommonModel.alterAddColumn(v2783).catch(p3119 => {
            vRequire7.printError("新增字段日志表: " + v2777 + v2772.fhxcp, p3119);
          });
        }
      }
      p3106.response.status = 200;
      p3106.body = vRequire9.SUCCESS_200("success", "");
    } else {
      p3106.response.status = v2772.XdbTo(983943, 983579);
      p3106.body = vRequire9.ERROR_412("fail");
    }
  }
  static async detail(p3120) {
    const v2784 = {
      zSyTd: function (p3121, p3122) {
        return p3121 ^ p3122;
      }
    };
    const v2785 = vRequire3.parseQs(p3120.request.url);
    let v2786 = v2785.id;
    if (v2786) {
      let v2787 = await BuryPointWarehouseModel.detail(v2786);
      const {
        pointId: _0x54c969,
        weType: _0x2fc1fd,
        fields: _0x4ebe3d,
        pointName: _0x29193b,
        projectId: _0xe4a8ee,
        pointDesc: _0x143baf,
        replacePointIdKey: _0x1a7872
      } = v2787;
      let v2788 = await BuryPointFieldModel.getListByFieldIds(_0x4ebe3d);
      const v2789 = {
        id: v2786,
        pointId: _0x54c969,
        weType: _0x2fc1fd,
        pointName: _0x29193b,
        projectId: _0xe4a8ee,
        pointDesc: _0x143baf,
        replacePointIdKey: _0x1a7872,
        fields: _0x4ebe3d,
        buryPointFieldList: v2788
      };
      p3120.response.status = 200;
      p3120.body = vRequire9.SUCCESS_200("success", v2789);
    } else {
      p3120.response.status = v2784.zSyTd(203364, 203768);
      p3120.body = vRequire9.ERROR_412("fail");
    }
  }
  static async ["delete"](p3123) {
    const v2790 = {
      AHzRl: "成功删除日志表: ",
      qXvTA: function (p3124, p3125) {
        return p3124 === p3125;
      },
      BXGrr: function (p3126, p3127) {
        return p3126 ^ p3127;
      },
      dKTIe: function (p3128, p3129) {
        return p3128 ^ p3129;
      },
      koIfl: function (p3130, p3131) {
        return p3130 + p3131;
      }
    };
    let v2791 = JSON.parse(p3123.request.body);
    const {
      id: _0x14d0ff
    } = v2791;
    const v2792 = await SdkReleaseModel.getAllList();
    let v2793 = await BuryPointWarehouseModel.detail(_0x14d0ff);
    for (let v2794 = 0; v2794 < v2792.length; v2794++) {
      const v2795 = v2792[v2794];
      const {
        releaseName: _0x1caea2,
        pointIds: _0x13aac5
      } = v2795;
      let v2796 = _0x13aac5.split(",");
      for (let v2797 = 0; v2797 < v2796.length; v2797++) {
        if (v2790.qXvTA(parseInt(v2793.pointId, v2790.BXGrr(546925, 546919)), parseInt(v2796[v2797], 10))) {
          p3123.response.status = v2790.dKTIe(563927, 564043);
          let v2798 = v2790.koIfl("" + vRequire3.b64DecodeUnicode(vRequire26.POINT_DELETE_FAIL_1) + _0x1caea2, "" + vRequire3.b64DecodeUnicode(vRequire26.POINT_DELETE_FAIL_2));
          p3123.body = vRequire9.ERROR_412(v2798);
          return;
        }
      }
    }
    await BuryPointWarehouseModel.delete(_0x14d0ff);
    let v2799 = v2793.projectId + "_" + v2793.pointId;
    CommonModel.deleteTableByName(v2799).then(() => {
      vRequire7.printInfo(v2790.AHzRl + v2799);
    });
    global.eventInfo.pointAndFields[v2793.pointId] = {};
    global.eventInfo.points[v2793.pointId] = {};
    p3123.response.status = 200;
    p3123.body = vRequire9.SUCCESS_200("success", "");
  }
  static async getPageList(p3132) {
    const v2800 = {
      mtyIl: function (p3133, p3134) {
        return p3133 < p3134;
      },
      cTutN: function (p3135, p3136) {
        return p3135 + p3136;
      },
      NYEcg: function (p3137, p3138) {
        return p3137 ^ p3138;
      },
      wapkG: function (p3139, p3140) {
        return p3139 ^ p3140;
      }
    };
    let v2801 = p3132.request.body;
    const v2802 = JSON.parse(v2801);
    const {
      projectId: _0x5c3ff4,
      pointName = "",
      weType = "",
      searchKey = "",
      page: _0xcdf75f,
      pageSize: _0x2105b4
    } = v2802;
    const v2803 = await BuryPointWarehouseModel.getPageCount(_0x5c3ff4, pointName, weType, searchKey);
    const v2804 = v2803[0].count;
    const v2805 = await BuryPointWarehouseModel.getPageList(_0x5c3ff4, pointName, weType, _0xcdf75f, _0x2105b4, searchKey);
    for (let v2806 = 0; v2806 < v2805.length; v2806++) {
      const v2807 = v2805[v2806];
      let v2808 = "";
      const {
        fields: _0x3d385f
      } = v2807;
      let v2809 = await BuryPointFieldModel.getListByFieldIds(_0x3d385f);
      for (let v2810 = 0; v2800.mtyIl(v2810, v2809.length); v2810++) {
        v2808 = v2800.cTutN(v2808, v2809[v2810].fieldAlias) + ",";
      }
      v2808 = v2808.substring(0, v2808.lastIndexOf(","));
      v2807.fieldNames = v2808;
      v2807.isEdit = v2800.NYEcg(222367, 222366);
    }
    p3132.response.status = v2800.wapkG(820056, 820112);
    p3132.body = vRequire9.SUCCESS_200("success", {
      list: v2805,
      totalCount: v2804
    });
  }
  static async getList(p3141) {
    const v2811 = {
      eynYU: function (p3142, p3143) {
        return p3142 + p3143;
      },
      UZhjP: function (p3144, p3145) {
        return p3144 ^ p3145;
      },
      aVuFl: "success"
    };
    let v2812 = p3141.request.body;
    const v2813 = JSON.parse(v2812);
    const {
      projectId: _0x2aa1af,
      pointName = ""
    } = v2813;
    const v2814 = await BuryPointWarehouseModel.getList(_0x2aa1af, pointName, 0);
    for (let v2815 = 0; v2815 < v2814.length; v2815++) {
      const v2816 = v2814[v2815];
      let v2817 = "";
      const {
        fields: _0x518b11
      } = v2816;
      let v2818 = await BuryPointFieldModel.getListByFieldIds(_0x518b11);
      for (let v2819 = 0; v2819 < v2818.length; v2819++) {
        v2817 = v2811.eynYU(v2817, v2818[v2819].fieldAlias) + ",";
      }
      v2817 = v2817.substring(v2811.UZhjP(534691, 534691), v2817.lastIndexOf(","));
      v2816.fieldNames = v2817;
    }
    p3141.response.status = 200;
    p3141.body = vRequire9.SUCCESS_200(v2811.aVuFl, v2814);
  }
  static async getAllPointList(p3146) {
    const v2820 = {
      TzYFx: function (p3147, p3148) {
        return p3147 ^ p3148;
      },
      mrYXa: function (p3149, p3150) {
        return p3149 < p3150;
      }
    };
    let v2821 = p3146.request.body;
    const v2822 = JSON.parse(v2821);
    const {
      projectId: _0xb897f1,
      pointName = ""
    } = v2822;
    const v2823 = await BuryPointFieldModel.getListByProjectIdAndWeType(_0xb897f1, v2820.TzYFx(357955, 357954));
    const v2824 = await BuryPointWarehouseModel.getProjectAndWeAndTrackListByProjectId(_0xb897f1);
    for (let v2825 = 0; v2820.mrYXa(v2825, v2824.length); v2825++) {
      const v2826 = v2824[v2825];
      let v2827 = "";
      let v2828 = "";
      let {
        fields: _0x59641f
      } = v2826;
      const v2829 = await BuryPointFieldModel.getListByFieldIds(_0x59641f);
      const v2830 = [...v2829, ...v2823];
      for (let v2831 = v2820.TzYFx(628139, 628139); v2831 < v2830.length; v2831++) {
        v2827 = v2827 + v2830[v2831].fieldAlias + ",";
        v2828 += v2830[v2831].fieldName + ",";
      }
      v2827 = v2827.substring(0, v2827.lastIndexOf(","));
      v2828 = v2828.substring(0, v2828.lastIndexOf(","));
      v2826.fieldNames = v2827;
      v2826.fields = v2828;
    }
    p3146.response.status = 200;
    p3146.body = vRequire9.SUCCESS_200("success", v2824);
  }
  static async ["getProjectAndOldList"](p3151) {
    const v2832 = {
      fiWXu: function (p3152, p3153) {
        return p3152 ^ p3153;
      },
      BtpSr: function (p3154, p3155) {
        return p3154 < p3155;
      },
      nSGJU: function (p3156, p3157) {
        return p3156 + p3157;
      },
      jheus: function (p3158, p3159) {
        return p3158 + p3159;
      },
      tiUfd: "success"
    };
    let v2833 = p3151.request.body;
    const v2834 = JSON.parse(v2833);
    const {
      projectId: _0x538623,
      pointName = ""
    } = v2834;
    const v2835 = await BuryPointFieldModel.getListByProjectIdAndWeType(_0x538623, v2832.fiWXu(898387, 898386));
    const v2836 = await BuryPointWarehouseModel.getListByProjectIdAndOldType(_0x538623);
    for (let v2837 = v2832.fiWXu(479156, 479156); v2832.BtpSr(v2837, v2836.length); v2837++) {
      const v2838 = v2836[v2837];
      let v2839 = "";
      let v2840 = "";
      let {
        fields: _0xfb313b
      } = v2838;
      const v2841 = await BuryPointFieldModel.getListByFieldIds(_0xfb313b);
      const v2842 = [...v2841, ...v2835];
      for (let v2843 = v2832.fiWXu(746628, 746628); v2843 < v2842.length; v2843++) {
        v2839 = v2832.nSGJU(v2832.nSGJU(v2839, v2842[v2843].fieldAlias), ",");
        v2840 += v2832.jheus(v2842[v2843].fieldName, ",");
      }
      v2839 = v2839.substring(0, v2839.lastIndexOf(","));
      v2840 = v2840.substring(0, v2840.lastIndexOf(","));
      v2838.fieldNames = v2839;
      v2838.fields = v2840;
    }
    p3151.response.status = 200;
    p3151.body = vRequire9.SUCCESS_200(v2832.tiUfd, v2836);
  }
  static async ["getAllList"](p3160) {
    const v2844 = {
      NKinF: function (p3161, p3162) {
        return p3161 < p3162;
      },
      hoflm: function (p3163, p3164) {
        return p3163 ^ p3164;
      }
    };
    const v2845 = await BuryPointWarehouseModel.getAllList();
    for (let v2846 = 0; v2844.NKinF(v2846, v2845.length); v2846++) {
      const v2847 = v2845[v2846];
      let v2848 = "";
      let v2849 = "";
      const {
        fields: _0x5ccc43
      } = v2847;
      let v2850 = await BuryPointFieldModel.getListByFieldIds(_0x5ccc43);
      for (let v2851 = 0; v2851 < v2850.length; v2851++) {
        v2848 = v2848 + v2850[v2851].fieldAlias + ",";
        v2849 = v2849 + v2850[v2851].fieldName + ",";
      }
      v2848 = v2848.substring(0, v2848.lastIndexOf(","));
      v2847.fieldNames = v2848;
      v2849 = v2849.substring(v2844.hoflm(228149, 228149), v2849.lastIndexOf(","));
      v2847.fieldList = v2849;
    }
    p3160.response.status = v2844.hoflm(908638, 908694);
    p3160.body = vRequire9.SUCCESS_200("success", v2845);
  }
  static async copyPoint(p3165, p3166, p3167) {
    const v2852 = {
      eCSmt: function (p3168, p3169) {
        return p3168 ^ p3169;
      },
      dQMOC: function (p3170, p3171) {
        return p3170 ^ p3171;
      },
      rwTmr: function (p3172, p3173) {
        return p3172 > p3173;
      },
      jHGEa: function (p3174, p3175, p3176) {
        return p3174(p3175, p3176);
      },
      jeDca: function (p3177, p3178) {
        return p3177 ^ p3178;
      }
    };
    const v2853 = await BuryPointWarehouseModel.detailByPointId(p3166);
    if (!v2853) {
      return;
    }
    let {
      pointName: _0x990529,
      fields: _0x5c31c7,
      pointDesc: _0x3db010,
      weType: _0x19b56a,
      createBy: _0x4deca9
    } = v2853;
    if (_0x19b56a && (_0x19b56a === 2 || _0x19b56a === "2")) {
      return p3166;
    }
    let v2854 = {};
    const v2855 = await BuryPointWarehouseModel.checkName(p3165, _0x990529);
    let v2856 = v2855[0].count;
    if (v2856 > v2852.eCSmt(363297, 363297)) {
      v2854.pointName = _0x990529 + new Date().Format("yyyyMMddhhmmssS");
    } else {
      v2854.pointName = _0x990529;
    }
    let v2857 = _0x5c31c7.split(",");
    let v2858 = "";
    for (let v2859 = v2852.dQMOC(164135, 164135); v2859 < v2857.length; v2859++) {
      let v2860 = await C10.copyField(p3165, v2857[v2859], p3167);
      v2858 = v2858 + v2860 + ",";
    }
    v2858 = v2858.substring(v2852.dQMOC(525193, 525193), v2858.lastIndexOf(","));
    let v2861 = await BuryPointWarehouseModel.getByProjectIdAndFieldIds(p3165, v2858);
    if (v2861 && v2861.length > 0) {
      return v2861[0].pointId;
    } else {
      let v2862 = await BuryPointWarehouseModel.getMaxPointId();
      if (v2862 && v2852.rwTmr(v2862.length, 0)) {
        v2854.pointId = v2852.jHGEa(parseInt, v2862[v2852.eCSmt(593618, 593618)].maxId, v2852.jeDca(546035, 546041)) + v2852.jeDca(452448, 452449);
      } else {
        v2854.pointId = v2852.dQMOC(150497, 150496);
      }
      v2854.createBy = _0x4deca9 ? _0x4deca9 : p3167;
      v2854.pointDesc = _0x3db010;
      v2854.fields = v2858;
      v2854.projectId = p3165;
      v2854.weType = _0x19b56a;
      let v2863 = await BuryPointWarehouseModel.create(v2854);
      return v2863.pointId;
    }
  }
  static async ["copyPointByName"](p3179, p3180, p3181) {
    const v2864 = {
      uTpNj: function (p3182, p3183) {
        return p3182 ^ p3183;
      },
      xPEKb: function (p3184, p3185) {
        return p3184 === p3185;
      },
      gynfl: function (p3186, p3187) {
        return p3186 ^ p3187;
      },
      MNusI: "yyyyMMddhhmmssS",
      nvHXo: function (p3188, p3189) {
        return p3188 ^ p3189;
      },
      rsLJj: function (p3190, p3191) {
        return p3190 + p3191;
      },
      SmRxZ: function (p3192, p3193) {
        return p3192 ^ p3193;
      }
    };
    if (!p3180) {
      return;
    }
    let {
      pointName: _0x2f6a60,
      fieldList: _0x374f5d,
      pointDesc: _0x14213e,
      weType: _0x4ffae8,
      createBy: _0x1fdcb5
    } = p3180;
    if (_0x4ffae8 && (_0x4ffae8 === v2864.uTpNj(757320, 757322) || v2864.xPEKb(_0x4ffae8, "2"))) {
      return pointId;
    }
    let v2865 = {};
    const v2866 = await BuryPointWarehouseModel.checkName(p3179, _0x2f6a60);
    let v2867 = v2866[0].count;
    if (v2867 > v2864.gynfl(209932, 209932)) {
      v2865.pointName = _0x2f6a60 + new Date().Format(v2864.MNusI);
    } else {
      v2865.pointName = _0x2f6a60;
    }
    let v2868 = "";
    for (let v2869 = v2864.uTpNj(366569, 366569); v2869 < _0x374f5d.length; v2869++) {
      let v2870 = await C10.copyFieldByName(p3179, _0x374f5d[v2869], p3181);
      v2868 = v2868 + v2870 + ",";
    }
    v2868 = v2868.substring(v2864.gynfl(132794, 132794), v2868.lastIndexOf(","));
    let v2871 = await BuryPointWarehouseModel.getByProjectIdAndFieldIds(p3179, v2868);
    if (v2871 && v2871.length > 0) {
      return v2871[v2864.nvHXo(324193, 324193)].pointId;
    } else {
      let v2872 = await BuryPointWarehouseModel.getMaxPointId();
      if (v2872 && v2872.length > 0) {
        v2865.pointId = v2864.rsLJj(parseInt(v2872[v2864.SmRxZ(898148, 898148)].maxId, 10), v2864.gynfl(854790, 854791));
      } else {
        v2865.pointId = 1;
      }
      v2865.createBy = _0x1fdcb5 ? _0x1fdcb5 : p3181;
      v2865.pointDesc = _0x14213e;
      v2865.fields = v2868;
      v2865.projectId = p3179;
      v2865.weType = _0x4ffae8;
      let v2873 = await BuryPointWarehouseModel.create(v2865);
      return v2873.pointId;
    }
  }
  static async ["exportPoint"](p3194) {
    const v2874 = {
      WNPad: function (p3195, p3196) {
        return p3195 ^ p3196;
      },
      lEkeK: function (p3197, p3198) {
        return p3197 ^ p3198;
      },
      BQgee: function (p3199, p3200) {
        return p3199 < p3200;
      },
      geziY: "点位重名",
      sipVh: function (p3201, p3202) {
        return p3201 + p3202;
      },
      NhpOb: function (p3203, p3204) {
        return p3203 ^ p3204;
      },
      TOCpE: function (p3205, p3206) {
        return p3205 ^ p3206;
      },
      LWLJq: function (p3207, p3208) {
        return p3207 ^ p3208;
      },
      Uzhdb: function (p3209, p3210) {
        return p3209 > p3210;
      },
      LpNyB: "自定义点位",
      OXqpD: function (p3211, p3212) {
        return p3211 + p3212;
      },
      sWmgH: "float",
      zNPud: function (p3213, p3214) {
        return p3213 + p3214;
      },
      zcqsP: ".xlsx"
    };
    let v2875 = p3194.request.body;
    const v2876 = JSON.parse(v2875);
    const {
      projectId: _0x26cf6f,
      pointIds = "",
      allSelectProjectId = ""
    } = v2876;
    const {
      nickname: _0x564bbc
    } = p3194.user;
    if (_0x26cf6f && (pointIds || allSelectProjectId)) {
      let v2877 = [];
      if (allSelectProjectId) {
        let v2878 = await BuryPointWarehouseModel.getPointIdsByProjectId(allSelectProjectId);
        for (let v2879 = v2874.WNPad(990775, 990775); v2879 < v2878.length; v2879++) {
          v2877.push(v2878[v2879].pointId);
        }
      }
      if (pointIds) {
        let v2880 = pointIds.split(",");
        for (let v2881 = 0; v2881 < v2880.length; v2881++) {
          v2877.push(v2880[v2881]);
        }
      }
      let v2882 = {
        successCount: 0
      };
      v2882.failCount = v2874.lEkeK(300499, 300499);
      v2882.failFileName = "";
      const v2883 = [];
      for (let v2884 = 0; v2874.BQgee(v2884, v2877.length); v2884++) {
        const v2885 = await BuryPointWarehouseModel.detailByPointId(v2877[v2884]);
        if (!v2885) {
          continue;
        }
        let {
          pointName: _0x487373,
          fields: _0x3d9db9,
          pointDesc: _0x5f56dd
        } = v2885;
        let v2886 = await BuryPointFieldModel.getListByFieldIds(_0x3d9db9);
        v2885.pointId = v2877[v2884];
        try {
          let v2887 = {};
          const v2888 = await BuryPointWarehouseModel.checkName(_0x26cf6f, _0x487373);
          let v2889 = v2888 && v2888.length > v2874.WNPad(353432, 353432) ? v2888[0].count : 0;
          if (v2889 > 0) {
            throw new Error(v2874.geziY);
          } else {
            v2887.pointName = _0x487373;
          }
          let v2890 = _0x3d9db9.split(",");
          let v2891 = "";
          for (let v2892 = 0; v2892 < v2890.length; v2892++) {
            let v2893 = await C10.copyField(_0x26cf6f, v2890[v2892], _0x564bbc);
            v2891 = v2874.sipVh(v2891, v2893) + ",";
          }
          v2891 = v2891.substring(v2874.NhpOb(559084, 559084), v2891.lastIndexOf(","));
          let v2894 = await BuryPointWarehouseModel.getByProjectIdAndFieldIds(_0x26cf6f, v2891);
          if (v2894 && v2894.length > 0) {
            v2882.repeatCount = v2874.sipVh(v2882.repeatCount, v2874.WNPad(349051, 349050));
            v2882.repeatPoint.push(v2894[0].pointName);
          } else {
            let v2895 = await BuryPointWarehouseModel.getMaxPointId();
            if (v2895 && v2895.length > 0) {
              v2887.pointId = parseInt(v2895[0].maxId, v2874.TOCpE(767673, 767667)) + 1;
            } else {
              v2887.pointId = 1;
            }
            v2887.createBy = _0x564bbc;
            v2887.pointDesc = _0x5f56dd;
            v2887.fields = v2891;
            v2887.projectId = _0x26cf6f;
            v2887.weType = 0;
            await BuryPointWarehouseModel.create(v2887);
            v2882.successCount = v2882.successCount + v2874.LWLJq(281657, 281656);
          }
        } catch (_0x43e81d) {
          v2883.push({
            row: v2884,
            data: {
              pointId: v2877[v2884],
              pointName: _0x487373,
              fields: v2886,
              pointDesc: _0x5f56dd
            },
            error: _0x43e81d.message
          });
        }
      }
      let v2896 = "";
      if (v2874.Uzhdb(v2883.length, 0)) {
        const exceljs = require("exceljs");
        const v2897 = new exceljs.Workbook();
        const v2898 = v2897.addWorksheet(v2874.LpNyB);
        await C24.setHeaderWorksheet(v2898);
        v2898.getColumn("H").font = {
          color: {
            argb: "FF0000"
          }
        };
        let v2899 = [];
        let v2900 = v2874.LWLJq(928527, 928524);
        let v2901 = new Map();
        for (let v2902 = 0; v2902 < v2883.length; v2902++) {
          const {
            row: _0x50b45d,
            data: _0x5ecf03,
            error: _0x3321fe
          } = v2883[v2902];
          v2901.set(v2900, v2874.OXqpD(v2900, _0x5ecf03.length) - 1);
          v2900 = v2900 + _0x5ecf03.length;
          const {
            pointId: _0x4660cb,
            pointName: _0x328fed,
            fields: _0x490c99,
            pointDesc: _0xde16d3
          } = _0x5ecf03;
          for (let v2903 = 0; v2903 < _0x490c99.length; v2903++) {
            let {
              fieldAlias: _0x2ad6cc,
              fieldType: _0x19bfcb,
              fieldLength: _0x3ba1c4,
              fieldDesc: _0x36301b
            } = _0x490c99[v2903];
            let v2904 = [];
            let v2905 = "";
            switch (_0x19bfcb) {
              case "varchar":
              case "VARCHAR":
                v2905 = "文本";
                break;
              case "int":
              case "bigint":
              case "BIGINT":
              case "INT":
                v2905 = "整数";
                break;
              case v2874.sWmgH:
              case "FLOAT":
                v2905 = "小数";
                break;
              default:
                break;
            }
            v2904.push(_0x4660cb);
            v2904.push(_0x328fed);
            v2904.push(_0x2ad6cc);
            v2904.push(v2905);
            v2904.push(_0x3ba1c4);
            v2904.push(_0x36301b);
            v2904.push(_0xde16d3);
            v2904.push(_0x3321fe);
            v2899.push(v2904);
          }
        }
        v2896 = v2874.zNPud("失败点位", new Date().Format("yyyyMMddhhmmss")) + v2874.zcqsP;
        v2899.forEach(p3215 => v2898.addRow(p3215));
        await v2897.xlsx.writeFile(vF21 + v2896);
      }
      v2882.failCount = v2883.length;
      v2882.failFileName = v2896;
      p3194.response.status = v2874.LWLJq(143316, 143132);
      p3194.body = vRequire9.SUCCESS_200("success", v2882);
    } else {
      p3194.response.status = 412;
      p3194.body = vRequire9.ERROR_412("fail");
    }
  }
  static async createPoint(p3216, p3217, p3218) {
    const v2906 = {
      haVoE: function (p3219, p3220) {
        return p3219 ^ p3220;
      },
      zucdt: function (p3221, p3222) {
        return p3221 + p3222;
      },
      fumRy: function (p3223, p3224) {
        return p3223 + p3224;
      }
    };
    if (!p3217) {
      return;
    }
    let {
      pointName: _0x4c6c9e,
      fieldList: _0x548bf7,
      pointDesc: _0x579e98,
      weType: _0x429ff7,
      createBy: _0x38757f
    } = p3217;
    if (_0x429ff7 && (_0x429ff7 === 2 || _0x429ff7 === "2")) {
      return pointId;
    }
    let v2907 = {};
    const v2908 = await BuryPointWarehouseModel.checkName(p3216, _0x4c6c9e);
    let v2909 = v2908[0].count;
    if (v2909 > v2906.haVoE(691101, 691101)) {
      v2907.pointName = v2906.zucdt(_0x4c6c9e, new Date().Format("yyyyMMddhhmmssS"));
    } else {
      v2907.pointName = _0x4c6c9e;
    }
    let v2910 = "";
    for (let v2911 = 0; v2911 < _0x548bf7.length; v2911++) {
      let v2912 = await C10.copyFieldByName(p3216, _0x548bf7[v2911], p3218);
      v2910 = v2906.fumRy(v2910, v2912) + ",";
    }
    v2910 = v2910.substring(0, v2910.lastIndexOf(","));
    let v2913 = await BuryPointWarehouseModel.getPointFieldIds(p3216, v2910, _0x4c6c9e, _0x579e98);
    if (v2913 && v2913.length > 0) {
      return v2913[0].pointId;
    } else {
      let v2914 = await BuryPointWarehouseModel.getMaxPointId();
      if (v2914 && v2914.length > 0) {
        v2907.pointId = v2906.zucdt(parseInt(v2914[0].maxId, 10), 1);
      } else {
        v2907.pointId = v2906.haVoE(540632, 540633);
      }
      v2907.createBy = _0x38757f ? _0x38757f : p3218;
      v2907.pointDesc = _0x579e98;
      v2907.fields = v2910;
      v2907.projectId = p3216;
      v2907.weType = _0x429ff7;
      let v2915 = await BuryPointWarehouseModel.create(v2907);
      return v2915.pointId;
    }
  }
  static async downloadTemplateExcel(p3225) {
    const v2916 = "servers/event/lib/点位批量创建模板.xlsx";
    p3225.attachment(v2916);
    await vRequire17(p3225, v2916);
  }
  static async ["downloadExcel"](p3226) {
    const v2917 = {
      VWvYY: function (p3227, p3228) {
        return p3227 ^ p3228;
      },
      mDGCZ: "项目不存在",
      gMhXd: function (p3229, p3230) {
        return p3229(p3230);
      },
      nenSe: "exceljs",
      oreyn: function (p3231, p3232) {
        return p3231 ^ p3232;
      },
      kRDGV: function (p3233, p3234) {
        return p3233 + p3234;
      },
      nBrQS: "int",
      TtcLj: "float",
      hNlaH: "FLOAT",
      tNmSW: function (p3235, p3236) {
        return p3235 + p3236;
      },
      pVMKE: function (p3237, p3238) {
        return p3237 + p3238;
      },
      QawCh: function (p3239, p3240) {
        return p3239 + p3240;
      },
      xRxYY: function (p3241, p3242, p3243) {
        return p3241(p3242, p3243);
      },
      PyvWz: function (p3244, p3245, p3246) {
        return p3244(p3245, p3246);
      }
    };
    const v2918 = vRequire3.parseQs(p3226.request.url);
    const {
      projectId = "",
      pointIds = ""
    } = v2918;
    if (projectId) {
      let v2919 = await BuryPointProjectModel.getNameByProjectIdAndType(projectId, v2917.VWvYY(832153, 832152));
      if (v2919.length === v2917.VWvYY(735191, 735191)) {
        p3226.response.status = v2917.VWvYY(650159, 649779);
        p3226.body = vRequire9.ERROR_412(v2917.mDGCZ);
        return;
      }
      const {
        name: _0x3faa56
      } = v2919[0];
      let v2920 = [];
      if (pointIds) {
        v2920 = await BuryPointWarehouseModel.getListByPointIds(pointIds);
      } else {
        v2920 = await BuryPointWarehouseModel.getList(projectId, "", 0);
      }
      const v2921 = v2917.gMhXd(require, v2917.nenSe);
      const v2922 = new v2921.Workbook();
      const v2923 = v2922.addWorksheet("自定义点位");
      await C24.setHeaderWorksheet(v2923);
      let v2924 = [];
      let v2925 = v2917.oreyn(537402, 537401);
      let v2926 = new Map();
      for (let v2927 = 0; v2927 < v2920.length; v2927++) {
        let v2928 = [];
        const v2929 = v2920[v2927];
        const {
          pointId: _0x34c925,
          pointName: _0x3e618b,
          pointDesc: _0x332012,
          fields: _0x33437b
        } = v2929;
        v2928.push(_0x34c925);
        v2928.push(_0x3e618b);
        let v2930 = await BuryPointFieldModel.getListByFieldIds(_0x33437b);
        v2926.set(v2925, v2917.kRDGV(v2925, v2930.length) - 1);
        v2925 = v2925 + v2930.length;
        for (let v2931 = 0; v2931 < v2930.length; v2931++) {
          let v2932 = [];
          v2932.push(_0x34c925);
          v2932.push(_0x3e618b);
          const {
            fieldAlias: _0x3a86c6,
            fieldType: _0x1d9e1c,
            fieldLength: _0x5ef4cf,
            fieldDesc: _0x36fb5d
          } = v2930[v2931];
          let v2933 = "";
          switch (_0x1d9e1c) {
            case "varchar":
            case "VARCHAR":
              v2933 = "文本";
              break;
            case v2917.nBrQS:
            case "bigint":
            case "BIGINT":
            case "INT":
              v2933 = "整数";
              break;
            case v2917.TtcLj:
            case v2917.hNlaH:
              v2933 = "小数";
              break;
            default:
              break;
          }
          v2932.push(_0x3a86c6);
          v2932.push(v2933);
          v2932.push(_0x5ef4cf);
          v2932.push(_0x36fb5d);
          v2932.push(_0x332012);
          v2924.push(v2932);
        }
      }
      let v2934 = v2917.kRDGV(_0x3faa56, "_点位文档.xlsx");
      v2924.forEach(p3247 => v2923.addRow(p3247));
      for (const [v2935, v2936] of v2926) {
        v2923.mergeCells(v2917.tNmSW(v2917.pVMKE("A" + v2935, ":A"), v2936));
        v2923.mergeCells("B" + v2935 + ":B" + v2936);
        v2923.mergeCells(v2917.QawCh("G", v2935) + ":G" + v2936);
      }
      await v2922.xlsx.writeFile(v2917.QawCh(vF21, v2934));
      const v2937 = vF21 + v2934;
      p3226.attachment(v2937);
      await v2917.xRxYY(vRequire17, p3226, v2937);
      v2917.PyvWz(setTimeout, () => {
        const fs6 = require("fs");
        fs6.unlinkSync(v2937);
      }, 60000);
    } else {
      p3226.response.status = 412;
      p3226.body = vRequire9.ERROR_412("fail");
    }
  }
  static async ["setHeaderWorksheet"](p3248) {
    const v2938 = {
      QGNij: function (p3249, p3250) {
        return p3249 + p3250;
      },
      agpkT: "2. 字段名称：必填，不能超过 100 个字符或汉字。\n",
      IyrvR: "6. 点位描述：选填，对点位的说明或描述，比如触发时机等。长度限制 100 个字符以内。",
      hREvH: "字段长度（必填）",
      awwKJ: "FFFFFF",
      sPOds: function (p3251, p3252) {
        return p3251 ^ p3252;
      },
      jdzxS: "pattern",
      wyzMJ: "FFA500",
      GEFCN: "solid",
      oIMro: function (p3253, p3254) {
        return p3253 ^ p3254;
      },
      CkLrM: function (p3255, p3256) {
        return p3255 ^ p3256;
      },
      uxkXm: "FF8B0000",
      CdCHa: function (p3257, p3258) {
        return p3257 ^ p3258;
      },
      TgVeN: "center",
      LhqyD: "middle",
      Ytcgw: "left"
    };
    let v2939 = v2938.QGNij(v2938.QGNij("填写须知\n", "请勿修改表格结构，红色字段为必填项，请勿漏填，否则会导致埋点方案上传失败。\n"), "1. 点位名称：必填，不能超过 100 个字符或汉字，同一张表内，点位名称不能重名。\n") + v2938.agpkT + "3. 字段类型：必填，请从下列选项中选填一个选项：“字符串”、“整数”、“小数”，若不填则默认为“字符串”。字段类型由首次导入时的类型决定，后续导入只接受相同类型的输入\n4. 字段长度：必填，对字段长度的定义，只能输入1-100之间的任意数字。\n5. 字段描述：选填，对字段的说明或描述，长度限制 100 个字符以内。\n" + v2938.IyrvR;
    let v2940 = ["点位编号", "点位名称（必填）", "字段名称（必填）", "字段类型（必填）", v2938.hREvH, "字段描述", "点位描述"];
    const v2941 = p3248.addRow([v2939, "", "", "", "", "", ""]);
    p3248.mergeCells("A1:G1");
    v2941.height = 150;
    v2941.font = {
      bold: true,
      color: {
        argb: v2938.awwKJ
      }
    };
    v2941.getCell(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: {
        argb: "FFFFFFF5"
      }
    };
    v2941.getCell(v2938.sPOds(685921, 685923)).fill = {
      type: v2938.jdzxS,
      pattern: "solid",
      fgColor: {
        argb: v2938.wyzMJ
      }
    };
    v2941.getCell(3).fill = {
      type: v2938.jdzxS,
      pattern: v2938.GEFCN,
      fgColor: {
        argb: "FFA500"
      }
    };
    v2941.getCell(4).fill = {
      type: v2938.jdzxS,
      pattern: "solid",
      fgColor: {
        argb: "FFA500"
      }
    };
    v2941.getCell(v2938.sPOds(890562, 890567)).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: {
        argb: "FFA500"
      }
    };
    v2941.getCell(6).fill = {
      type: "pattern",
      pattern: v2938.GEFCN,
      fgColor: {
        argb: "FFA500"
      }
    };
    v2941.getCell(7).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: {
        argb: "FFA500"
      }
    };
    p3248.addRow(v2940);
    const v2942 = p3248.getRow(v2938.oIMro(915376, 915378));
    v2942.getCell(v2938.CkLrM(780633, 780632)).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: {
        argb: "000000"
      }
    };
    v2942.getCell(2).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: {
        argb: v2938.uxkXm
      }
    };
    v2942.getCell(3).fill = {
      type: "pattern",
      pattern: v2938.GEFCN,
      fgColor: {
        argb: v2938.uxkXm
      }
    };
    v2942.getCell(4).fill = {
      type: "pattern",
      pattern: v2938.GEFCN,
      fgColor: {
        argb: "FF8B0000"
      }
    };
    v2942.getCell(5).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: {
        argb: "FF8B0000"
      }
    };
    v2942.getCell(v2938.CdCHa(929273, 929279)).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: {
        argb: "000000"
      }
    };
    v2942.getCell(7).fill = {
      type: "pattern",
      pattern: v2938.GEFCN,
      fgColor: {
        argb: "000000"
      }
    };
    let v2943 = v2942.font = {
      color: {
        argb: "FFFFFFFF"
      }
    };
    p3248.getColumn("A").width = 20;
    p3248.getColumn("B").width = 20;
    p3248.getColumn("C").width = 20;
    p3248.getColumn("D").width = 20;
    p3248.getColumn("E").width = v2938.CkLrM(617704, 617724);
    p3248.getColumn("F").width = 35;
    p3248.getColumn("G").width = 35;
    p3248.getColumn("E").alignment = {
      vertical: "middle",
      horizontal: "left"
    };
    p3248.getColumn("A").alignment = {
      horizontal: v2938.TgVeN,
      vertical: v2938.LhqyD,
      wrapText: true
    };
    p3248.getColumn("B").alignment = {
      horizontal: v2938.TgVeN,
      vertical: v2938.LhqyD,
      wrapText: true
    };
    p3248.getColumn("G").alignment = {
      horizontal: "center",
      vertical: v2938.LhqyD,
      wrapText: true
    };
    v2941.getCell(1).alignment = {
      horizontal: v2938.Ytcgw,
      vertical: v2938.Ytcgw,
      wrapText: true
    };
  }
  static async importExcel(p3259) {
    const v2944 = {
      TXkba: function (p3260, p3261) {
        return p3260 === p3261;
      },
      JJcoG: function (p3262, p3263) {
        return p3262 < p3263;
      },
      bnXkC: function (p3264, p3265) {
        return p3264 ^ p3265;
      },
      SmVgN: function (p3266, p3267) {
        return p3266 != p3267;
      },
      LliPO: function (p3268, p3269) {
        return p3268 ^ p3269;
      },
      Pztxl: "\\s+",
      hRgNg: function (p3270, p3271) {
        return p3270 ^ p3271;
      },
      ElzHs: "文本整数小数",
      tbxTu: function (p3272, p3273) {
        return p3272 + p3273;
      },
      yilnL: "点位重名",
      mzUrk: function (p3274, p3275) {
        return p3274 ^ p3275;
      },
      LFNxO: function (p3276, p3277) {
        return p3276 ^ p3277;
      },
      tYjHf: function (p3278, p3279) {
        return p3278 > p3279;
      },
      VKLKR: "varchar",
      hloXH: "bigint",
      Vkqxo: "BIGINT",
      GzzAY: function (p3280, p3281) {
        return p3280 ^ p3281;
      },
      bdwNu: function (p3282, p3283) {
        return p3282 ^ p3283;
      },
      rYsyp: function (p3284, p3285) {
        return p3284 ^ p3285;
      },
      lJEfQ: "失败点位",
      DifuE: "yyyyMMddhhmmss",
      RGmfD: ".xlsx"
    };
    if (!p3259.files) {
      p3259.response.status = 412;
      p3259.body = vRequire9.ERROR_412("未上传文件");
      return;
    }
    const v2945 = p3259.files;
    const v2946 = v2945.fileFieldName[0];
    console.log("文件信息:", v2946);
    const v2947 = p3259.request.body.projectId;
    if (!v2947) {
      p3259.response.status = 412;
      p3259.body = vRequire9.ERROR_412("项目id没传");
      return;
    }
    const {
      nickname: _0x4261d4
    } = p3259.user;
    if (v2946.path) {
      let v2948 = await C24.importFile(v2946.path);
      if (!v2948 || v2944.TXkba(v2948.length, 0)) {
        p3259.response.status = 412;
        p3259.body = vRequire9.ERROR_412("Excel文件中没有数据");
        return;
      }
      const v2949 = [];
      const v2950 = [];
      const v2951 = [];
      let v2952 = new Map();
      for (const [v2953, v2954] of v2948.entries()) {
        if (v2944.JJcoG(v2953, 2)) {
          continue;
        }
        try {
          if (v2953 === 2 && !v2954[1]) {
            throw new Error("点位名称为必填项");
          }
          if (!v2954[2] || !v2954[3] || !v2954[4]) {
            throw new Error("字段名称、类型、长度为必填项");
          }
          const v2955 = {
            pointId: parseInt(v2954[v2944.bnXkC(247600, 247600)]) || null,
            pointName: (v2944.SmVgN(v2954[1], undefined) ? v2954[1] : "").toString().trim().replace(new RegExp("\\s+", "g"), ""),
            pointDesc: (v2944.SmVgN(v2954[6], undefined) ? v2954[v2944.LliPO(424623, 424617)] : "").toString().trim().replace(new RegExp("\\s+", "g"), ""),
            fieldAlias: (v2954[v2944.bnXkC(917118, 917116)] != undefined ? v2954[2] : "").toString().trim().replace(new RegExp(v2944.Pztxl, "g"), ""),
            fieldType: (v2944.SmVgN(v2954[3], undefined) ? v2954[3] : "").toString().trim().replace(new RegExp(v2944.Pztxl, "g"), ""),
            fieldLength: parseInt(v2954[v2944.hRgNg(247488, 247492)]) || null,
            fieldDesc: (v2954[5] != undefined ? v2954[5] : "").toString().trim().replace(new RegExp("\\s+", "g"), ""),
            row: v2953
          };
          v2955.fieldName = vRequire3.pinYinToHump(v2955.fieldAlias);
          if (!vRequire3.isLooseNumber(v2955.fieldLength)) {
            throw new Error("字段长度必须是数字");
          }
          if (!v2944.ElzHs.includes(v2955.fieldType)) {
            throw new Error("字段类型必须是文本、整数或者小数");
          }
          if (v2955.pointName) {
            v2952.set(v2955.pointName, {
              pointDesc: v2955.pointDesc,
              pointId: v2955.pointId
            });
          }
          let v2956 = "";
          switch (v2954[3]) {
            case "文本":
              v2956 = "VARCHAR";
              break;
            case "整数":
              v2956 = "INT";
              break;
            case "小数":
              v2956 = "FLOAT";
              break;
            default:
              v2956 = "VARCHAR";
              break;
          }
          v2955.fieldType = v2956;
          v2951.push(v2955);
        } catch (_0x47a18c) {
          v2950.push({
            row: v2944.tbxTu(v2953, v2944.hRgNg(450298, 450299)),
            data: v2954,
            error: _0x47a18c.message
          });
        }
      }
      const v2957 = [];
      const v2958 = v2951.reduce((p3286, p3287) => {
        const v2959 = p3287.pointName;
        if (!p3286[v2959]) {
          p3286[v2959] = [];
        }
        p3286[v2959].push(p3287);
        return p3286;
      }, {});
      for (const [v2960, v2961] of v2952) {
        v2957.push({
          pointName: v2960,
          pointId: v2961.pointId,
          pointDesc: v2961.pointDesc,
          fields: v2958[v2960]
        });
      }
      let v2962 = 0;
      for (let v2963 = 0; v2944.JJcoG(v2963, v2957.length); v2963++) {
        let {
          pointId: _0x322a44,
          pointName: _0x498ec6,
          fields: _0x285d95,
          pointDesc: _0x417f45
        } = v2957[v2963];
        try {
          let v2964 = {};
          const v2965 = await BuryPointWarehouseModel.checkName(v2947, _0x498ec6);
          let v2966 = v2965 && v2965.length > 0 ? v2965[0].count : 0;
          if (v2966 > 0) {
            throw new Error(v2944.yilnL);
          } else {
            v2964.pointName = _0x498ec6;
          }
          const v2967 = await BuryPointWarehouseModel.checkPointId(_0x322a44);
          let v2968 = v2967 && v2967.length > v2944.mzUrk(158930, 158930) ? v2967[0].count : v2944.LFNxO(339508, 339508);
          if (v2968 > 0 || !_0x322a44) {
            let v2969 = await BuryPointWarehouseModel.getMaxPointId();
            if (v2969 && v2944.tYjHf(v2969.length, 0)) {
              v2964.pointId = parseInt(v2969[0].maxId, 10) + 1;
            } else {
              v2964.pointId = v2944.hRgNg(378774, 378775);
            }
          } else {
            v2964.pointId = _0x322a44;
          }
          let v2970 = "";
          for (let v2971 = 0; v2971 < _0x285d95.length; v2971++) {
            let v2972 = await C10.copyFieldByName(v2947, _0x285d95[v2971], _0x4261d4);
            v2970 = v2970 + v2972 + ",";
          }
          v2970 = v2970.substring(0, v2970.lastIndexOf(","));
          v2964.createBy = _0x4261d4;
          v2964.pointDesc = _0x417f45;
          v2964.fields = v2970;
          v2964.projectId = v2947;
          v2964.weType = 0;
          await BuryPointWarehouseModel.create(v2964);
          v2962 = v2962 + 1;
        } catch (_0x4cb5e0) {
          for (let v2973 = 0; v2973 < _0x285d95.length; v2973++) {
            let v2974 = [];
            v2974.push(_0x285d95[v2973].row);
            v2974.push(_0x285d95[v2973].pointName);
            v2974.push(_0x285d95[v2973].fieldAlias);
            let v2975 = "";
            switch (_0x285d95[v2973].fieldType) {
              case v2944.VKLKR:
              case "VARCHAR":
                v2975 = "文本";
                break;
              case "int":
              case v2944.hloXH:
              case v2944.Vkqxo:
              case "INT":
                v2975 = "整数";
                break;
              case "float":
              case "FLOAT":
                v2975 = "小数";
                break;
              default:
                break;
            }
            v2974.push(v2975);
            v2974.push(_0x285d95[v2973].fieldLength);
            v2974.push(_0x285d95[v2973].fieldDesc);
            v2974.push(_0x285d95[v2973].pointDesc);
            v2950.push({
              row: v2957[v2963].fields[0].row,
              data: v2974,
              error: _0x4cb5e0.message
            });
          }
        }
      }
      let v2976 = "";
      if (v2950.length > v2944.LFNxO(183805, 183805)) {
        const exceljs2 = require("exceljs");
        const v2977 = new exceljs2.Workbook();
        const v2978 = v2977.addWorksheet("自定义点位");
        await C24.setHeaderWorksheet(v2978);
        v2978.getColumn("H").font = {
          color: {
            argb: "FF0000"
          }
        };
        let v2979 = [];
        let v2980 = v2944.GzzAY(230092, 230095);
        let v2981 = new Map();
        for (let v2982 = v2944.bdwNu(730650, 730650); v2982 < v2950.length; v2982++) {
          const {
            row: _0x35e631,
            data: _0x17d789,
            error: _0x21878b
          } = v2950[v2982];
          v2981.set(v2980, v2980 + _0x17d789.length - v2944.rYsyp(580170, 580171));
          v2980 = v2980 + _0x17d789.length;
          let v2983 = [];
          for (let v2984 = 0; v2984 < v2944.LliPO(993246, 993241); v2984++) {
            if (v2984 === 0) {
              v2983.push("");
            } else if (_0x17d789[v2984]) {
              v2983.push(_0x17d789[v2984]);
            } else {
              v2983.push("");
            }
          }
          v2983.push(_0x21878b);
          v2979.push(v2983);
        }
        v2976 = v2944.tbxTu(v2944.lJEfQ, new Date().Format(v2944.DifuE)) + v2944.RGmfD;
        v2979.forEach(p3288 => v2978.addRow(p3288));
        await v2977.xlsx.writeFile(vF21 + v2976);
      }
      p3259.response.status = 200;
      p3259.body = vRequire9.SUCCESS_200("success", {
        successCount: v2962,
        failCount: v2950.length,
        failFileName: v2976
      });
    } else {
      p3259.response.status = 412;
      p3259.body = vRequire9.ERROR_412("fail");
    }
  }
  static async importFile(p3289) {
    const v2985 = {
      LdXQB: function (p3290, p3291) {
        return p3290(p3291);
      },
      QvSSM: function (p3292, p3293) {
        return p3292 ^ p3293;
      },
      FWjgx: function (p3294, p3295, p3296) {
        return p3294(p3295, p3296);
      },
      hvksj: function (p3297, p3298) {
        return p3297 * p3298;
      },
      GbPiw: function (p3299, p3300) {
        return p3299 ^ p3300;
      }
    };
    const v2986 = v2985.LdXQB(require, "exceljs");
    const v2987 = new v2986.Workbook();
    await v2987.xlsx.readFile(p3289);
    const v2988 = v2987.getWorksheet(v2985.QvSSM(570701, 570700));
    const v2989 = [];
    v2988.eachRow((p3301, p3302) => {
      const v2990 = [];
      p3301.eachCell((p3303, p3304) => {
        if (p3303) {
          v2990.push(p3303.value);
        } else {}
      });
      v2989.push(v2990);
    });
    v2985.FWjgx(setTimeout, () => {
      const fs7 = require("fs");
      fs7.unlinkSync(p3289);
    }, v2985.hvksj(v2985.GbPiw(186919, 183639), 10));
    return v2989;
  }
  static async ["writeFailPointToLocalPath"](p3305, p3306) {
    const v2991 = {
      WGCpn: function (p3307, p3308) {
        return p3307(p3308);
      },
      sRvtU: "exceljs",
      AXOqO: "失败点位"
    };
    const v2992 = v2991.WGCpn(require, v2991.sRvtU);
    const v2993 = new v2992.Workbook();
    const v2994 = v2993.addWorksheet(v2991.AXOqO);
    p3305.forEach(p3309 => v2994.addRow(p3309));
    await v2993.xlsx.writeFile(vF21 + p3306);
  }
  static async ["downFileByName"](p3310) {
    const v2995 = {
      HIOLa: function (p3311, p3312) {
        return p3311 * p3312;
      },
      wyabG: function (p3313, p3314) {
        return p3313 ^ p3314;
      },
      FSzRf: "文件不存在"
    };
    const v2996 = vRequire3.parseQs(p3310.request.url);
    const {
      fileName: _0x291b3d
    } = v2996;
    if (_0x291b3d) {
      const v2997 = vF21 + _0x291b3d;
      p3310.attachment(v2997);
      await vRequire17(p3310, v2997);
      setTimeout(() => {
        const fs8 = require("fs");
        fs8.unlinkSync(v2997);
      }, v2995.HIOLa(v2995.wyabG(739573, 745349), 10));
    } else {
      p3310.response.status = 412;
      p3310.body = vRequire9.ERROR_412(v2995.FSzRf);
    }
  }
  static async updatePointBaseCache(p3315, p3316, p3317, p3318, p3319) {
    const v2998 = {
      ymDpl: function (p3320, p3321) {
        return p3320 === p3321;
      },
      wvVWb: function (p3322, p3323) {
        return p3322 === p3323;
      }
    };
    try {
      let v2999 = await BuryPointFieldModel.getSomeListByProjectIdAndWeType(p3318, "", "");
      let v3000 = [];
      if (p3319 && (v2998.ymDpl(p3319, 2) || v2998.wvVWb(p3319, "2"))) {
        v3000 = v2999;
      } else {
        const v3001 = await BuryPointFieldModel.getSomeListByProjectIdAndWeType("", p3317, 1);
        v3000 = [...v2999, ...v3001];
      }
      const v3002 = {
        finalFieldList: v3000,
        buryPointFieldList: v2999,
        pointId: p3315,
        weType: p3319
      };
      if (!global.eventInfo.pointAndFields) {
        global.eventInfo.pointAndFields = {};
      }
      global.eventInfo.pointAndFields[p3315] = v3002;
      if (!global.eventInfo.points) {
        global.eventInfo.points = {};
      }
      global.eventInfo.points[p3315] = {
        projectId: p3317,
        fields: p3318,
        weType: p3319,
        pointName: p3316
      };
      console.log("点位 " + p3315 + " 缓存更新成功，字段数量: " + v3000.length);
      return {
        finalFieldList: v3000,
        buryPointFieldList: v2999
      };
    } catch (_0x548ce7) {
      console.error("更新点位 " + p3315 + " 缓存失败:", _0x548ce7);
      throw _0x548ce7;
    }
  }
}
class C25 {
  static async test() {
    const v3003 = {
      omMAC: function (p3324, p3325) {
        return p3324 ^ p3325;
      }
    };
    let v3004 = await BuryPointCardModel.detail("76a89880-1675-11ef-b515-b9faacf3ee8f");
    let v3005 = 0;
    let v3006 = "2024-05-13";
    let v3007 = "2024-05-20 23:59:59";
    let v3008 = await C25.calculateGroupByRealTimeDataByCard(v3004, v3003.omMAC(187554, 187555), v3006, v3007);
    console.log(JSON.stringify(v3008));
  }
  static async calculateRealTimeDataByCard(p3326, p3327, p3328) {
    const v3009 = {
      dXNVm: "yyyy-MM-dd hh:mm:ss",
      VsTpk: function (p3329, p3330) {
        return p3329 === p3330;
      }
    };
    let v3010 = vRequire3.splitYMDDate(p3327, p3328);
    const {
      id: _0x3c7a5c,
      projectId: _0x528f9e,
      pageId: _0x28cafd,
      name: _0x3e9ba8,
      sort: _0x4cfc33,
      dataGrid: _0x3813ad,
      type: _0x20726b,
      calcRule: _0x1f743a,
      conversionCycle: _0x44078f,
      groupByFlag: _0x41fcfb,
      chartTableShow: _0x53cc3a,
      togetherList: _0x3903c0,
      refreshFrequency: _0x3b54c8,
      updatedAt: _0x11f8c3,
      alarmStatus: _0x1bd9b7,
      describe: _0x597f25,
      isShowOnlineCount: _0x4db115
    } = p3326;
    const v3011 = {
      cardId: _0x3c7a5c,
      type: _0x20726b,
      cardName: _0x3e9ba8,
      conversionCycle: _0x44078f,
      groupByFlag: _0x41fcfb,
      chartTableShow: _0x53cc3a,
      togetherList: _0x3903c0,
      refreshFrequency: _0x3b54c8
    };
    v3011.refreshTime = new Date().Format(v3009.dXNVm);
    v3011.alarmStatus = _0x1bd9b7;
    v3011.sort = _0x4cfc33;
    v3011.dataGrid = _0x3813ad;
    v3011.describe = _0x597f25;
    v3011.isShowOnlineCount = _0x4db115;
    if (_0x11f8c3) {
      v3011.refreshTime = _0x11f8c3;
    }
    if (v3009.VsTpk(_0x20726b, 8) || _0x20726b === 9) {
      v3011.statisticList = [];
      return v3011;
    }
    let v3012 = await this.statisticListByDay(_0x528f9e, _0x44078f, _0x1f743a, p3327, new Date(p3328).Format("yyyy-MM-dd"), v3010);
    v3011.statisticList = v3012;
    return v3011;
  }
  static async ["calculateGroupByRealTimeDataByCard"](p3331, p3332, p3333, p3334) {
    const v3013 = {
      AIwkf: function (p3335, p3336) {
        return p3335 === p3336;
      },
      sDctg: function (p3337, p3338) {
        return p3337 === p3338;
      },
      aGJzr: "yyyy-MM-dd"
    };
    let v3014 = vRequire3.splitYMDDate(p3333, p3334);
    const {
      id: _0x3e7c06,
      projectId: _0x1e4429,
      pageId: _0x26e7b3,
      name: _0x43626e,
      sort: _0x5ccd6f,
      dataGrid: _0x3ec526,
      type: _0x9c97d7,
      calcRule: _0x28ded0,
      conversionCycle: _0x1b7d2b,
      groupByFlag: _0x36f6e6,
      chartTableShow: _0x3f41f0,
      togetherList: _0x1bdd36,
      refreshFrequency: _0x55c5ef,
      updatedAt: _0x4c87f1,
      alarmStatus: _0x4a44b3,
      describe: _0x37fbe8,
      isShowOnlineCount: _0x74ea31
    } = p3331;
    const v3015 = {
      cardId: _0x3e7c06,
      type: _0x9c97d7,
      cardName: _0x43626e,
      conversionCycle: _0x1b7d2b,
      groupByFlag: _0x36f6e6,
      chartTableShow: _0x3f41f0,
      togetherList: _0x1bdd36,
      refreshFrequency: _0x55c5ef
    };
    v3015.refreshTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
    v3015.alarmStatus = _0x4a44b3;
    v3015.sort = _0x5ccd6f;
    v3015.dataGrid = _0x3ec526;
    v3015.describe = _0x37fbe8;
    v3015.isShowOnlineCount = _0x74ea31;
    if (_0x4c87f1) {
      v3015.refreshTime = _0x4c87f1;
    }
    if (v3013.AIwkf(_0x9c97d7, 8) || v3013.sDctg(_0x9c97d7, 9)) {
      v3015.statisticList = [];
      return v3015;
    }
    let v3016 = new Date(p3334).Format(v3013.aGJzr);
    let v3017 = [];
    let v3018 = await this.statisticTotalGroupByListByDay(_0x1e4429, _0x28ded0, v3014, p3333, v3016, p3332, v3017);
    v3015.statisticList = v3018;
    return v3015;
  }
  static async ["statisticListByDay"](p3339, p3340, p3341, p3342, p3343, p3344) {
    const v3019 = {
      QdvzH: function (p3345, p3346) {
        return p3345 < p3346;
      },
      QLSvb: function (p3347, p3348) {
        return p3347 ^ p3348;
      },
      ScSKE: function (p3349, p3350, p3351) {
        return p3349(p3350, p3351);
      },
      VHDre: function (p3352, p3353) {
        return p3352 + p3353;
      },
      QfHBB: " 00:00:00",
      RKBzp: function (p3354, p3355) {
        return p3354 + p3355;
      },
      QIaqN: function (p3356, p3357) {
        return p3356 + p3357;
      },
      yXlvH: function (p3358, p3359) {
        return p3358 ^ p3359;
      },
      mUibo: "yyyy-MM-dd",
      XRCrM: function (p3360, p3361) {
        return p3360 + p3361;
      },
      kUzxc: function (p3362, p3363) {
        return p3362 + p3363;
      },
      kgyft: function (p3364, p3365) {
        return p3364 < p3365;
      },
      VlcgV: function (p3366, p3367) {
        return p3366 - p3367;
      },
      aSBKs: function (p3368, p3369) {
        return p3368 ^ p3369;
      },
      gLOGB: " 23:59:59",
      TODgy: function (p3370, p3371) {
        return p3370 + p3371;
      },
      APVOO: " and happenTime > '",
      kEUqy: function (p3372, p3373) {
        return p3372 !== p3373;
      },
      ysUMq: function (p3374, p3375) {
        return p3374 ^ p3375;
      },
      sSoxh: function (p3376, p3377) {
        return p3376 < p3377;
      },
      lJMBL: function (p3378, p3379) {
        return p3378 < p3379;
      },
      tHVys: function (p3380, p3381) {
        return p3380 + p3381;
      },
      AOwhe: function (p3382, p3383, p3384) {
        return p3382(p3383, p3384);
      },
      WAFIe: function (p3385, p3386) {
        return p3385 === p3386;
      },
      CQUlI: function (p3387, p3388) {
        return p3387 ^ p3388;
      },
      LmkyC: function (p3389, p3390) {
        return p3389 ^ p3390;
      },
      XosyU: function (p3391, p3392) {
        return p3391 === p3392;
      },
      utmby: function (p3393, p3394) {
        return p3393 === p3394;
      },
      KcVXA: function (p3395, p3396) {
        return p3395 ^ p3396;
      },
      CAEqC: function (p3397, p3398) {
        return p3397 ^ p3398;
      },
      hMNRI: function (p3399, p3400) {
        return p3399 ^ p3400;
      },
      grVcG: function (p3401, p3402) {
        return p3401 ^ p3402;
      },
      nymKM: function (p3403, p3404) {
        return p3403 ^ p3404;
      },
      ZXNCw: function (p3405, p3406) {
        return p3405 ^ p3406;
      },
      SkTEP: function (p3407, p3408) {
        return p3407 ^ p3408;
      },
      siQeo: function (p3409, p3410) {
        return p3409 === p3410;
      },
      oxEHd: function (p3411, p3412) {
        return p3411 ^ p3412;
      },
      WLWDV: function (p3413, p3414) {
        return p3413 ^ p3414;
      }
    };
    let v3020 = [];
    let v3021 = JSON.parse(p3341);
    if (v3021) {
      for (let v3022 = 0; v3019.QdvzH(v3022, v3021.length); v3022++) {
        let v3023 = {};
        let v3024 = v3021[v3022].prePoint;
        let v3025 = v3021[v3022].calcName;
        let v3026 = v3021[v3022].calcType;
        let v3027 = v3021[v3022].endPoint;
        let v3028 = v3021[v3022].unit;
        let v3029 = v3024.pointId;
        let v3030 = v3024.calcField;
        let v3031 = v3024.queryCriteria;
        let vParseInt4 = parseInt(v3030.fieldIndex ? v3030.fieldIndex : v3019.QLSvb(892665, 892665), 10);
        v3023.fieldIndex = vParseInt4;
        v3023.calcName = v3025;
        v3023.unit = v3028;
        v3023.calcType = v3026;
        v3023.calcTotail = 0;
        v3023.calcTotailRate = 0;
        let v3032 = v3019.ScSKE(parseInt, v3024.day, 10);
        let v3033 = "";
        let v3034 = "";
        if (!v3032 || v3032 === "" || v3032 === undefined) {
          v3032 = 0;
          v3033 = v3019.VHDre(p3342, v3019.QfHBB);
          v3034 = v3019.RKBzp(p3343, " 23:59:59");
        } else {
          let v3035 = new Date(new Date(p3342).getTime() + parseInt(v3032, 10) * 86400000);
          v3033 = v3019.VHDre(v3035.Format("yyyy-MM-dd"), " 00:00:00");
          v3035 = new Date(v3019.QIaqN(new Date(p3343).getTime(), parseInt(v3032, v3019.yXlvH(565918, 565908)) * 86400000));
          v3034 = v3035.Format(v3019.mUibo) + " 23:59:59";
        }
        let v3036 = [];
        let v3037 = p3339 + "_" + v3029;
        let v3038;
        v3038 = await CommonModel.splicingSql(v3030, v3031, v3037);
        v3038 = v3019.XRCrM(v3019.VHDre(v3019.kUzxc(v3038, " and happenTime > '") + v3033 + "'", " and happenTime <= '") + v3034, "'");
        let v3039 = " group by DATE_FORMAT(happenTime,'%Y-%m-%d')";
        v3038 = v3038 + v3039;
        let v3040 = await BuryPointCardModel.statisticData(v3038);
        if (v3032 !== v3019.yXlvH(908703, 908703)) {
          for (let v3041 = 0; v3019.kgyft(v3041, v3040.length); v3041++) {
            let v3042 = new Date(v3019.VlcgV(new Date(v3040[v3041].happenDate).getTime(), parseInt(v3032, v3019.QLSvb(872030, 872020)) * 86400000));
            v3040[v3041].happenDate = v3042.Format("yyyy-MM-dd");
          }
        }
        if (v3026 && v3027) {
          let v3043 = v3027.pointId;
          let v3044 = v3027.calcField;
          let v3045 = v3027.queryCriteria;
          let vParseInt5 = parseInt(v3027.day, 10);
          let v3046 = "";
          let v3047 = "";
          if (!vParseInt5 || vParseInt5 === "" || vParseInt5 === undefined) {
            vParseInt5 = 0;
            v3046 = p3342 + " 00:00:00";
            v3047 = p3343 + " 23:59:59";
          } else {
            let v3048 = new Date(new Date(p3342).getTime() + parseInt(vParseInt5, v3019.aSBKs(729765, 729775)) * 86400000);
            v3046 = v3019.RKBzp(v3048.Format("yyyy-MM-dd"), v3019.QfHBB);
            v3048 = new Date(v3019.RKBzp(new Date(p3343).getTime(), parseInt(vParseInt5, v3019.aSBKs(898843, 898833)) * 86400000));
            v3047 = v3048.Format("yyyy-MM-dd") + v3019.gLOGB;
          }
          let v3049 = v3019.TODgy(p3339 + "_", v3043);
          let v3050 = await CommonModel.splicingSql(v3044, v3045, v3049);
          v3050 = v3050 + v3019.APVOO + v3046 + "' and happenTime <= '" + v3047 + "'";
          let v3051 = " group by DATE_FORMAT(happenTime,'%Y-%m-%d')";
          v3050 = v3050 + v3051;
          let v3052 = await BuryPointCardModel.statisticData(v3050);
          if (v3019.kEUqy(vParseInt5, v3019.ysUMq(747742, 747742))) {
            for (let v3053 = 0; v3019.sSoxh(v3053, v3052.length); v3053++) {
              let v3054 = new Date(new Date(v3052[v3053].happenDate).getTime() - parseInt(vParseInt5, 10) * 86400000);
              v3052[v3053].happenDate = v3054.Format("yyyy-MM-dd");
            }
          }
          for (let v3055 = 0; v3019.lJMBL(v3055, v3040.length); v3055++) {
            let v3056 = 0;
            let vParseInt6 = parseInt(v3040[v3055].count, 10);
            for (let v3057 = 0; v3057 < v3052.length; v3057++) {
              let v3058 = v3019.ScSKE(parseInt, v3052[v3057].count, 10);
              if (v3052[v3057].happenDate === v3040[v3055].happenDate) {
                if (v3026 === "+") {
                  v3056 = v3019.tHVys(v3019.AOwhe(parseInt, vParseInt6, 10), v3019.ScSKE(parseInt, v3058, 10));
                } else if (v3019.WAFIe(v3026, "-")) {
                  v3056 = parseInt(vParseInt6, v3019.CQUlI(590505, 590499)) - parseInt(v3058, v3019.LmkyC(943693, 943687));
                } else if (v3019.XosyU(v3026, "/")) {
                  if (!v3028 || v3019.WAFIe(v3028, "") || v3028 && v3028 != "%") {
                    if (v3019.utmby(v3058, v3019.KcVXA(850535, 850535))) {
                      v3056 = v3019.CAEqC(980820, 980820);
                    } else {
                      v3056 = vRequire3.toFixed(parseInt(vParseInt6, v3019.hMNRI(790168, 790162)) / parseInt(v3058, 10), v3019.grVcG(721139, 721137));
                    }
                  } else {
                    if (v3058 === 0) {
                      v3056 = v3019.ysUMq(421550, 421550);
                    } else {
                      v3056 = vRequire3.toFixed(v3019.AOwhe(parseInt, vParseInt6, v3019.nymKM(504278, 504284)) / parseInt(v3058, 10) * 100, 2);
                    }
                    if (parseInt(v3056, 10) > v3019.ZXNCw(920477, 920569)) {
                      v3056 = 100;
                    }
                  }
                } else {
                  v3056 = parseInt(vParseInt6, 10) * parseInt(v3058, 10);
                  ;
                }
                break;
              }
            }
            v3040[v3055].count = v3056;
          }
        }
        let v3059 = 0;
        let v3060 = [];
        for (let v3061 = 0; v3061 < p3344.length; v3061++) {
          let v3062 = {};
          let v3063 = p3344[v3061];
          v3062.count = 0;
          for (let v3064 = v3019.SkTEP(433854, 433854); v3064 < v3040.length; v3064++) {
            if (v3019.siQeo(v3063, v3040[v3064].happenDate)) {
              v3062.count = vRequire3.toFixed(v3040[v3064].count * v3019.grVcG(166172, 166173), 2) || v3019.CQUlI(887563, 887563);
              v3059 = v3059 + parseFloat(v3062.count);
              v3060.push(v3062.count);
              break;
            }
          }
          v3062.happenYMDDate = v3063;
          v3062.percentage = v3019.oxEHd(886891, 886891);
          v3036.push(v3062);
        }
        v3023.calcTotail = vRequire3.toFixed(v3059, 2) || 0;
        v3023.calcAverage = vRequire3.toFixed(v3060.reduce((p3415, p3416) => p3415 + p3416, v3019.WLWDV(324715, 324715)) / v3060.length, 2) || v3019.WLWDV(787339, 787339);
        v3023.calcMax = Math.max(...v3060) || 0;
        v3023.calcMin = Math.min(...v3060) || 0;
        v3023.pointId = v3029;
        v3023.calcData = v3036;
        v3020.push(v3023);
      }
    }
    return v3020;
  }
  static async ["statisticTotalGroupByListByDay"](p3417, p3418, p3419, p3420, p3421, p3422, p3423) {
    const v3065 = {
      kJufY: function (p3424, p3425) {
        return p3424 < p3425;
      },
      PhPdJ: function (p3426, p3427, p3428) {
        return p3426(p3427, p3428);
      },
      wCTQu: function (p3429, p3430) {
        return p3429 === p3430;
      },
      ivJmc: " 00:00:00",
      YFsZV: function (p3431, p3432) {
        return p3431 ^ p3432;
      },
      Nvqdk: function (p3433, p3434) {
        return p3433 ^ p3434;
      },
      IAWga: "yyyy-MM-dd",
      vjpPk: " 23:59:59",
      UuJrs: function (p3435, p3436) {
        return p3435 + p3436;
      },
      bBVhM: "averageStayTime",
      WDfaF: function (p3437, p3438) {
        return p3437 + p3438;
      },
      gTFBy: function (p3439, p3440) {
        return p3439 + p3440;
      },
      qIDdb: " where (",
      qsVtg: function (p3441, p3442) {
        return p3441 + p3442;
      },
      tLizj: " and happenTime <= '",
      BZOPM: function (p3443, p3444) {
        return p3443 > p3444;
      },
      brIKF: "...",
      GpHOs: function (p3445, p3446) {
        return p3445 - p3446;
      },
      WShlp: function (p3447, p3448) {
        return p3447 ^ p3448;
      },
      aTTfd: function (p3449, p3450) {
        return p3449 === p3450;
      },
      CiQcq: function (p3451, p3452) {
        return p3451 ^ p3452;
      },
      oqtVm: function (p3453, p3454) {
        return p3453 ^ p3454;
      }
    };
    let v3066 = [];
    let v3067 = JSON.parse(p3418);
    if (v3067) {
      for (let v3068 = 0; v3065.kJufY(v3068, v3067.length); v3068++) {
        let v3069 = v3067[v3068].prePoint;
        let v3070 = v3067[v3068].calcType;
        let v3071 = v3067[v3068].endPoint;
        let v3072 = v3067[v3068].unit;
        let v3073 = v3069.pointId;
        let v3074 = v3069.calcField;
        let v3075 = v3069.queryCriteria;
        let v3076 = v3065.PhPdJ(parseInt, v3069.day, 10);
        let v3077 = "";
        let v3078 = "";
        if (!v3076 || v3065.wCTQu(v3076, "") || v3065.wCTQu(v3076, undefined)) {
          v3076 = 0;
          v3077 = p3420 + v3065.ivJmc;
          v3078 = p3421 + " 23:59:59";
        } else {
          let v3079 = new Date(new Date(p3420).getTime() + parseInt(v3076, v3065.YFsZV(874858, 874848)) * 86400000);
          v3077 = v3079.Format("yyyy-MM-dd") + " 00:00:00";
          v3079 = new Date(new Date(p3421).getTime() + parseInt(v3076, v3065.Nvqdk(302685, 302679)) * 86400000);
          v3078 = v3079.Format(v3065.IAWga) + v3065.vjpPk;
        }
        let v3080 = p3417 + "_" + v3073;
        let v3081;
        let v3082 = v3065.UuJrs(v3065.UuJrs(v3065.UuJrs(v3065.UuJrs(" and happenTime > '", v3077), "'"), " and happenTime <= '"), v3078) + "'";
        v3081 = await CommonModel.splicingTotalGroupBySql(v3074, v3075, v3080, v3082, p3422);
        switch (v3074.fieldName) {
          case "allCount":
          case "userCount":
          case "averageCount":
          case v3065.bBVhM:
            v3081 = await CommonModel.calculateWeFieldCount(v3074, v3075, v3080, v3082, p3422, groupFields);
            break;
          default:
            break;
        }
        let v3083 = await BuryPointCardModel.statisticData(v3081);
        if (v3070 && v3071) {} else {
          for (let v3084 = v3065.YFsZV(352937, 352937); v3084 < v3083.length; v3084++) {
            let v3085 = v3083[v3084].groupByName;
            let v3086 = 0;
            let v3087 = await CommonModel.criteriaSql(v3080, v3074, v3075);
            v3087 = v3087.substring(0, v3087.lastIndexOf("and"));
            let v3088 = v3065.UuJrs(" select DATE_FORMAT(happenTime,'%m-%d') as happenDate,count(distinct weCustomerKey", ") as count from ") + v3080;
            if (v3087) {
              v3088 = v3065.UuJrs(v3065.WDfaF(v3065.gTFBy(" " + v3088, v3065.qIDdb), v3087), ")");
            } else {
              v3088 = " " + v3088 + " where 1=1 ";
            }
            v3088 = v3065.qsVtg(v3065.qsVtg(v3065.qsVtg(v3065.UuJrs(v3088 + " and " + v3074.fieldName + "='" + v3085 + "' and happenTime > '" + v3077, "'"), v3065.tLizj), v3078) + "'", " group by DATE_FORMAT(happenTime,'%m-%d')");
            console.log("查询每个分组sql:" + v3088);
            let v3089 = await BuryPointCardModel.statisticData(v3088);
            if (v3065.BZOPM(v3085.length, 100)) {
              let v3090 = "";
              v3090 = v3085.substring(0, v3065.Nvqdk(445602, 445584)) + v3065.brIKF + v3085.substring(v3085.length - 50, v3065.GpHOs(v3085.length, 1));
              v3085 = v3090;
            }
            let v3091 = {
              fieldIndex: v3068,
              calcName: v3085,
              unit: v3072,
              calcType: v3070,
              calcTotailRate: 0,
              calcAverage: 0,
              calcMax: 0,
              calcMin: 0
            };
            let v3092 = [];
            let v3093 = [];
            for (let v3094 = v3065.WShlp(571932, 571932); v3094 < p3419.length; v3094++) {
              let v3095 = {};
              let v3096 = p3419[v3094];
              let v3097 = new Date(v3096).Format("MM-dd");
              v3095.happenYMDDate = v3096;
              for (let v3098 = 0; v3098 < v3089.length; v3098++) {
                if (v3065.aTTfd(v3097, v3089[v3098].happenDate)) {
                  v3095.count = vRequire3.toFixed(v3089[v3098].count * 1, 2) || v3065.CiQcq(295185, 295185);
                  v3086 = v3065.UuJrs(v3086, parseFloat(v3095.count));
                  v3093.push(v3095.count);
                  break;
                }
              }
              v3092.push(v3095);
            }
            v3091.calcTotail = vRequire3.toFixed(v3086, 2) || 0;
            v3091.calcAverage = vRequire3.toFixed(v3093.reduce((p3455, p3456) => p3455 + p3456, v3065.oqtVm(174355, 174355)) / v3093.length, 2) || 0;
            v3091.calcMax = Math.max(...v3093) || v3065.Nvqdk(841557, 841557);
            v3091.calcMin = Math.min(...v3093) || 0;
            v3091.pointId = v3073;
            v3091.calcData = v3092;
            v3066.push(v3091);
          }
        }
      }
    }
    return v3066;
  }
  static async ["statisticGroupByListByDay"](p3457, p3458, p3459, p3460) {
    const v3099 = {
      pbAJh: function (p3461, p3462, p3463) {
        return p3461(p3462, p3463);
      },
      AWYfu: function (p3464, p3465) {
        return p3464 < p3465;
      },
      DDDfw: function (p3466, p3467) {
        return p3466 ^ p3467;
      },
      qozEU: function (p3468, p3469) {
        return p3468 + p3469;
      },
      NBhix: function (p3470, p3471) {
        return p3470 === p3471;
      },
      StMFD: function (p3472, p3473) {
        return p3472 !== p3473;
      },
      dgcIb: function (p3474, p3475, p3476) {
        return p3474(p3475, p3476);
      },
      jJvBn: function (p3477, p3478) {
        return p3477 ^ p3478;
      },
      QvcDc: function (p3479, p3480) {
        return p3479 - p3480;
      },
      yEoRA: function (p3481, p3482) {
        return p3481 === p3482;
      },
      mNGiZ: function (p3483, p3484, p3485) {
        return p3483(p3484, p3485);
      },
      YcJUr: function (p3486, p3487) {
        return p3486 ^ p3487;
      },
      odTmJ: function (p3488, p3489) {
        return p3488 / p3489;
      },
      bsxeQ: function (p3490, p3491, p3492) {
        return p3490(p3491, p3492);
      }
    };
    let v3100 = [];
    let v3101 = JSON.parse(p3458);
    if (v3101) {
      for (let v3102 = 0; v3102 < v3101.length; v3102++) {
        let v3103 = v3101[v3102].prePoint;
        let v3104 = v3101[v3102].calcName;
        let v3105 = v3101[v3102].calcType;
        let v3106 = v3101[v3102].endPoint;
        let v3107 = v3101[v3102].unit;
        let v3108 = v3103.pointId;
        let v3109 = v3103.calcField;
        let v3110 = v3103.queryCriteria;
        let v3111 = v3099.pbAJh(parseInt, v3103.day, 10);
        if (!v3111 || v3111 === "" || v3111 === undefined) {
          v3111 = 0;
        }
        let v3112 = "";
        for (let v3113 = 0; v3099.AWYfu(v3113, p3460.length); v3113++) {
          let v3114 = {
            fieldIndex: v3113,
            unit: v3107,
            calcType: v3105,
            calcTotail: 0
          };
          v3114.calcTotailRate = v3099.DDDfw(620281, 620281);
          let v3115 = p3460[v3113];
          v3114.calcName = v3115;
          let v3116 = p3457 + "_" + v3108;
          let v3117 = [];
          for (let v3118 = 0; v3099.AWYfu(v3118, p3459.length); v3118++) {
            let v3119 = {};
            let v3120 = p3459[v3118];
            v3119.happenDate = v3120;
            if (v3111 !== v3099.DDDfw(583192, 583192)) {
              let v3121 = new Date(new Date(v3120).getTime() + v3099.pbAJh(parseInt, v3111, 10) * 86400000);
              v3112 = v3121.Format("yyyy-MM-dd");
            } else {
              v3112 = v3120;
            }
            let v3122;
            let v3123 = v3099.qozEU(" and DATE_FORMAT(happenTime,'%Y-%m-%d') = '" + v3112, "'");
            v3122 = await CommonModel.splicingGroupBySql(v3109, v3110, v3116, v3115, v3123);
            let v3124 = await BuryPointCardModel.statisticData(v3122);
            let v3125 = v3124[0].count;
            if (v3105 && v3106) {
              let v3126 = v3106.pointId;
              let v3127 = v3106.calcField;
              let v3128 = v3106.queryCriteria;
              let vParseInt7 = parseInt(v3106.day, 10);
              if (!vParseInt7 || vParseInt7 === "" || v3099.NBhix(vParseInt7, undefined)) {
                vParseInt7 = 0;
              }
              if (v3099.StMFD(v3111, v3099.DDDfw(796706, 796706))) {
                let v3129 = new Date(new Date(v3120).getTime() + parseInt(vParseInt7, 10) * 86400000);
                v3112 = v3129.Format("yyyy-MM-dd");
              } else {
                v3112 = v3120;
              }
              let v3130 = " and DATE_FORMAT(happenTime,'%Y-%m-%d') = '" + v3112 + "'";
              let v3131 = p3457 + "_" + v3126;
              let v3132 = await CommonModel.splicingGroupBySql(v3127, v3128, v3131, v3115, v3130);
              let v3133 = await BuryPointCardModel.statisticData(v3132);
              let v3134 = v3133[0].count;
              let v3135 = 0;
              if (v3105 === "+") {
                v3135 = parseInt(v3125, 10) + v3099.dgcIb(parseInt, v3134, v3099.jJvBn(908712, 908706));
              } else if (v3105 === "-") {
                v3135 = v3099.QvcDc(parseInt(v3125, 10), parseInt(v3134, 10));
              } else if (v3099.NBhix(v3105, "/")) {
                if (!v3107 || v3107 === "" || v3107 && v3107 != "%") {
                  if (v3099.yEoRA(v3134, 0)) {
                    v3135 = 0;
                  } else {
                    v3135 = vRequire3.toFixed(v3099.mNGiZ(parseInt, v3125, 10) / parseInt(v3134, 10), v3099.YcJUr(478972, 478974));
                  }
                } else {
                  if (v3099.yEoRA(v3134, 0)) {
                    v3135 = 0;
                  } else {
                    v3135 = vRequire3.toFixed(v3099.odTmJ(v3099.bsxeQ(parseInt, v3125, 10), v3099.dgcIb(parseInt, v3134, 10)) * 100, 2);
                  }
                  if (v3099.bsxeQ(parseInt, v3135, 10) > 100) {
                    v3135 = 100;
                  }
                }
              } else {
                v3135 = parseInt(v3125, 10) * v3099.bsxeQ(parseInt, v3134, 10);
                ;
              }
              v3119.count = v3135;
              v3117.push(v3119);
            } else {
              v3119.count = v3125;
              v3117.push(v3119);
            }
          }
          v3114.calcData = v3117;
          v3100.push(v3114);
        }
      }
    }
    return v3100;
  }
  static async ["getCount"](p3493) {
    const v3136 = {
      zTxNN: function (p3494, p3495) {
        return p3494 ^ p3495;
      },
      XpEDc: function (p3496, p3497) {
        return p3496 === p3497;
      },
      MflLQ: function (p3498, p3499) {
        return p3498(p3499);
      }
    };
    let v3137 = v3136.zTxNN(979515, 979515);
    const v3138 = await BuryPointCardModel.statisticData(p3493);
    v3137 = v3138 ? v3136.XpEDc(v3138.length, 0) || v3136.MflLQ(isNaN, v3138[0].count) || v3136.XpEDc(v3138[v3136.zTxNN(421984, 421984)].count, null) ? 0 : v3138[v3136.zTxNN(396505, 396505)].count : v3136.zTxNN(556236, 556236);
    return v3137;
  }
  static async calculateEventAnalysisGroupByRealTimeDataByCard(p3500, p3501, p3502, p3503, p3504) {
    const v3139 = {
      SUmPt: function (p3505, p3506) {
        return p3505 === p3506;
      },
      QtjsO: function (p3507, p3508) {
        return p3507 ^ p3508;
      }
    };
    let v3140 = vRequire3.splitYMDDate(p3502, p3503);
    const {
      id: _0x9544e5,
      projectId: _0x2b2ae1,
      pageId: _0x1508e0,
      name: _0x2c47ae,
      sort: _0x58cf86,
      dataGrid: _0x1fcf87,
      type: _0x129111,
      calcRule: _0x1cecd6,
      conversionCycle: _0x15ca75,
      groupByFlag: _0x1d6f4b,
      chartTableShow: _0x3040d2,
      togetherList: _0x348c4f,
      refreshFrequency: _0x5a9d4a,
      updatedAt: _0x3352fe,
      alarmStatus: _0x90eeeb,
      describe: _0x4ea18c
    } = p3500;
    const v3141 = {
      cardId: _0x9544e5,
      type: _0x129111,
      cardName: _0x2c47ae,
      conversionCycle: _0x15ca75,
      groupByFlag: _0x1d6f4b,
      chartTableShow: _0x3040d2,
      togetherList: _0x348c4f,
      refreshFrequency: _0x5a9d4a
    };
    v3141.refreshTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
    v3141.alarmStatus = _0x90eeeb;
    v3141.sort = _0x58cf86;
    v3141.dataGrid = _0x1fcf87;
    v3141.describe = _0x4ea18c;
    if (_0x3352fe) {
      v3141.refreshTime = _0x3352fe;
    }
    if (v3139.SUmPt(_0x129111, 8) || v3139.SUmPt(_0x129111, v3139.QtjsO(264201, 264192))) {
      v3141.statisticList = [];
      return v3141;
    }
    let v3142 = new Date(p3503).Format("yyyy-MM-dd");
    let v3143 = [];
    let v3144 = await this.statisticEventAnalysisGroupByListByDay(_0x2b2ae1, _0x1cecd6, v3140, p3502, v3142, p3501, v3143, p3504);
    v3141.statisticList = v3144;
    return v3141;
  }
  static async statisticEventAnalysisGroupByListByDay(p3509, p3510, p3511, p3512, p3513, p3514, p3515, p3516) {
    const v3145 = {
      bXCZu: function (p3517, p3518, p3519) {
        return p3517(p3518, p3519);
      },
      UPXbS: "yyyy-MM-dd",
      NgYSb: function (p3520, p3521) {
        return p3520 + p3521;
      },
      ZTOui: function (p3522, p3523) {
        return p3522 + p3523;
      },
      pNtCq: "allCount",
      efQgH: "averageStayTime",
      pKLEL: function (p3524, p3525) {
        return p3524 ^ p3525;
      },
      jNmoq: function (p3526, p3527) {
        return p3526 ^ p3527;
      },
      BaOaL: "count",
      svxsG: function (p3528, p3529) {
        return p3528 === p3529;
      },
      lfIjm: function (p3530, p3531) {
        return p3530 ^ p3531;
      },
      qoXkP: "weCustomerKey",
      hAYpM: ") as count from ",
      WWioA: function (p3532, p3533) {
        return p3532 + p3533;
      },
      qWGRD: function (p3534, p3535) {
        return p3534 + p3535;
      },
      VfZBL: function (p3536, p3537) {
        return p3536 ^ p3537;
      },
      NLqFW: function (p3538, p3539) {
        return p3538 + p3539;
      },
      CxRqd: function (p3540, p3541) {
        return p3540 ^ p3541;
      },
      tQCEi: function (p3542, p3543) {
        return p3542 ^ p3543;
      },
      dYAmv: function (p3544, p3545) {
        return p3544 ^ p3545;
      },
      tMBZO: function (p3546, p3547) {
        return p3546 < p3547;
      },
      ByNFF: function (p3548, p3549) {
        return p3548 * p3549;
      },
      jLdEo: function (p3550, p3551) {
        return p3550 ^ p3551;
      }
    };
    let v3146 = [];
    let v3147 = JSON.parse(p3510);
    if (v3147) {
      for (let v3148 = 0; v3148 < v3147.length; v3148++) {
        let v3149 = [];
        let v3150 = v3147[v3148].calcName;
        let v3151 = v3147[v3148].prePoint;
        let v3152 = v3147[v3148].calcType;
        let v3153 = v3147[v3148].endPoint;
        let v3154 = v3147[v3148].unit;
        let v3155 = v3151.pointId;
        let v3156 = v3151.calcField;
        let v3157 = v3151.queryCriteria;
        let v3158 = v3145.bXCZu(parseInt, v3151.day, 10);
        let v3159 = "";
        let v3160 = "";
        if (!v3158 || v3158 === "" || v3158 === undefined) {
          v3158 = 0;
          v3159 = p3512 + " 00:00:00";
          v3160 = p3513 + " 23:59:59";
        } else {
          let v3161 = new Date(new Date(p3512).getTime() + parseInt(v3158, 10) * 86400000);
          v3159 = v3161.Format(v3145.UPXbS) + " 00:00:00";
          v3161 = new Date(new Date(p3513).getTime() + parseInt(v3158, 10) * 86400000);
          v3160 = v3161.Format("yyyy-MM-dd") + " 23:59:59";
        }
        let v3162 = p3509 + "_" + v3155;
        let v3163;
        let v3164 = v3145.NgYSb(v3145.ZTOui(" and happenTime > '" + v3159 + "'", " and happenTime <= '"), v3160) + "'";
        v3163 = await CardStatisticModel.splicingTopEventAnalysisGroupBySql(v3156, v3157, v3162, v3164, p3514, p3516);
        switch (v3156.fieldName) {
          case v3145.pNtCq:
          case "userCount":
          case "averageCount":
          case v3145.efQgH:
            v3163 = await CardStatisticModel.calculateWeFieldCount(v3156, v3157, v3162, v3164, p3514, p3516);
            break;
          default:
            break;
        }
        let v3165 = await BuryPointCardModel.statisticData(v3163);
        if (v3152 && v3153) {} else {
          const v3166 = p3516.split(",");
          for (let v3167 = 0; v3167 < v3165.length; v3167++) {
            let v3168 = {
              groupField: []
            };
            let v3169 = "";
            if (v3166.length === 1) {
              v3169 = v3169 + v3165[v3167][v3166[v3145.pKLEL(168656, 168656)]];
              v3168.groupField.push({
                label: v3166[0],
                field: v3165[v3167][v3166[v3145.pKLEL(573899, 573899)]],
                type: 2
              });
            } else {
              v3169 = v3165[v3167][v3166[0]] + "," + v3165[v3167][v3166[v3145.pKLEL(809432, 809433)]];
              v3168.groupField.push({
                label: v3166[0],
                field: v3165[v3167][v3166[v3145.jNmoq(327367, 327367)]],
                type: 2
              }, {
                label: v3166[1],
                field: v3165[v3167][v3166[1]],
                type: 2
              });
            }
            let v3170 = 0;
            let v3171 = await CommonModel.criteriaSql(v3162, v3156, v3157);
            v3171 = v3171.substring(0, v3171.lastIndexOf("and"));
            let v3172 = "weCustomerKey";
            let v3173 = v3145.BaOaL;
            if (v3145.svxsG(v3156.isRepeat, "2") || v3156.isRepeat === v3145.lfIjm(468879, 468877)) {
              v3173 = "sum";
            } else if (v3156.isRepeat === "3" || v3156.isRepeat === 3) {
              v3173 = "avg";
            } else {
              v3173 = v3145.BaOaL;
            }
            if (v3156.fieldName) {
              v3172 = v3156.fieldName ? v3156.fieldName : "weCustomerKey";
            } else {
              v3172 = v3145.qoXkP;
            }
            if (v3156.isRepeat === "1" || v3156.isRepeat === v3145.pKLEL(830628, 830629)) {
              v3172 = v3145.NgYSb("distinct ", v3172);
            }
            let v3174 = v3145.NgYSb(v3145.ZTOui(" select DATE_FORMAT(happenTime,'%m-%d') as happenDate," + v3173 + "(" + v3172, v3145.hAYpM), v3162);
            switch (v3156.fieldName) {
              case "allCount":
                v3174 = " select DATE_FORMAT(happenTime,'%m-%d') as happenDate, count(weCustomerKey) as count from " + v3162;
                break;
              case "userCount":
                v3174 = " select DATE_FORMAT(happenTime,'%m-%d') as happenDate,count(distinct weCustomerKey) as count from " + v3162;
                break;
              case "averageCount":
                v3174 = v3145.WWioA(" select DATE_FORMAT(happenTime,'%m-%d') as happenDate, count(weCustomerKey) / count(distinct weCustomerKey) as count from ", v3162);
                break;
              case "averageStayTime":
                v3174 = " select DATE_FORMAT(happenTime,'%m-%d') as happenDate, sum(stayTime) / count(distinct weCustomerKey) as count from " + v3162;
                break;
              default:
                break;
            }
            if (v3171) {
              v3174 = v3145.qWGRD(" ", v3174) + " where (" + v3171 + ")";
            } else {
              v3174 = " " + v3174 + " where 1=1 ";
            }
            if (v3166.length === 1) {
              v3174 = v3145.qWGRD(v3145.WWioA(v3174 + " and " + v3166[0] + "='", v3165[v3167][v3166[v3145.VfZBL(354350, 354350)]]), "'");
            } else {
              v3174 = v3145.NLqFW(v3174, " and ") + v3166[0] + "='" + v3165[v3167][v3166[0]] + "' and " + v3166[v3145.CxRqd(963634, 963635)] + "='" + v3165[v3167][v3166[1]] + "'";
            }
            v3174 = v3174 + " and happenTime > '" + v3159 + "' and happenTime <= '" + v3160 + "' group by DATE_FORMAT(happenTime,'%m-%d')";
            let v3175 = await BuryPointCardModel.statisticData(v3174);
            p3515.push(v3169);
            v3168.fieldIndex = v3167;
            v3168.calcName = v3169;
            v3168.unit = v3154;
            v3168.calcType = v3152;
            v3168.calcTotailRate = 0;
            v3168.calcAverage = v3145.tQCEi(925698, 925698);
            v3168.calcMax = 0;
            v3168.calcMin = 0;
            v3168.yesterdayRate = 0;
            v3168.lastWeekRate = v3145.dYAmv(214546, 214546);
            let v3176 = [];
            let v3177 = [];
            for (let v3178 = 0; v3145.tMBZO(v3178, p3511.length); v3178++) {
              let v3179 = {
                count: 0
              };
              let v3180 = p3511[v3178];
              let v3181 = new Date(v3180).Format("MM-dd");
              v3179.happenYMDDate = v3180;
              for (let v3182 = 0; v3182 < v3175.length; v3182++) {
                if (v3181 === v3175[v3182].happenDate) {
                  v3179.count = vRequire3.toFixed(v3145.ByNFF(v3175[v3182].count, 1), 2) || 0;
                  v3170 = v3170 + parseFloat(v3179.count);
                  v3177.push(v3179.count);
                  break;
                }
              }
              v3176.push(v3179);
            }
            v3168.calcTotail = vRequire3.toFixed(v3170, v3145.jLdEo(611985, 611987)) || 0;
            v3168.calcAverage = vRequire3.toFixed(v3177.reduce((p3552, p3553) => p3552 + p3553, 0) / v3177.length, 2) || 0;
            v3168.calcMax = Math.max(...v3177) || 0;
            v3168.calcMin = Math.min(...v3177) || 0;
            v3168.pointId = v3155;
            v3168.calcData = v3176;
            v3149.push(v3168);
          }
        }
        let v3183 = {
          calcName: v3150,
          unit: v3154,
          statisticData: v3149
        };
        v3146.push(v3183);
      }
    }
    return v3146;
  }
}
class C26 {
  static sendEmail(p3559, p3560, p3561) {
    function f57(p3562, p3563, p3564, p3565, p3566) {
      return f22(p3565 - 972, p3562);
    }
    const v3184 = {
      IDTUq: function (p3567, p3568) {
        return p3567 === p3568;
      },
      ZHTBc: function (p3569, p3570, p3571) {
        return p3569(p3570, p3571);
      },
      vlTbm: "http://www.webfunny.cn/config/sendEmail",
      UWqAs: "POST",
      Zrfrn: "application/json;charset=utf-8"
    };
    if (v3184.IDTUq(accountInfo.useCusEmailSys, true)) {
      vRequire6.sendEmail(p3559, p3560, p3561, accountInfo.emailUser, accountInfo.emailPassword);
    } else {
      v3184.ZHTBc(vRequire10, v3184.vlTbm, {
        method: v3184.UWqAs,
        body: JSON.stringify({
          email: p3559,
          title: p3560,
          content: p3561
        }),
        headers: {
          "Content-Type": v3184.Zrfrn
        }
      }).catch(p3582 => {});
    }
  }
  static async ["create"](p3583) {
    const v3185 = {
      hxbcI: function (p3584, p3585) {
        return p3584 || p3585;
      }
    };
    const v3186 = JSON.parse(p3583.request.body);
    const {
      funnelName: _0x9a6dcf,
      funnelIds: _0x4c4383
    } = v3186;
    const v3187 = {
      funnelName: _0x9a6dcf,
      funnelIds: _0x4c4383
    };
    if (v3186.funnelName) {
      let v3188 = await UserModel.createUser(v3187);
      let v3189 = await UserModel.getUserDetail(v3188.id);
      p3583.response.status = 200;
      p3583.body = vRequire9.SUCCESS_200("创建信息成功", v3185.hxbcI(v3189, {}));
    } else {
      p3583.response.status = 412;
      p3583.body = vRequire9.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async ["getUserList"](p3586) {
    let v3190 = p3586.request.body;
    if (v3190) {
      const v3191 = await UserModel.getUserList();
      p3586.response.status = 200;
      p3586.body = vRequire9.SUCCESS_200("查询信息列表成功！", v3191);
    } else {
      p3586.response.status = 412;
      p3586.body = vRequire9.ERROR_412("查询信息列表失败！");
    }
  }
  static async ["getUserListByAdmin"](p3587) {
    const v3192 = {
      qTxvA: function (p3588, p3589) {
        return p3588 !== p3589;
      },
      xVdgj: "查询信息列表成功！"
    };
    let v3193 = p3587.request.body;
    const {
      userType: _0x1c5e92
    } = p3587.user;
    if (_0x1c5e92 !== "admin" || v3192.qTxvA(_0x1c5e92, "superAdmin")) {
      p3587.response.status = 412;
      p3587.body = vRequire9.ERROR_412("非管理员，无权调用此接口！");
      return;
    }
    if (v3193) {
      const v3194 = await UserModel.getUserListByAdmin();
      p3587.response.status = 200;
      p3587.body = vRequire9.SUCCESS_200(v3192.xVdgj, v3194);
    } else {
      p3587.response.status = 412;
      p3587.body = vRequire9.ERROR_412("查询信息列表失败！");
    }
  }
  static async ["getAllUserInfoForSimple"](p3590) {
    const v3195 = await UserModel.getAllUserInfoForSimple();
    p3590.response.status = 200;
    p3590.body = vRequire9.SUCCESS_200("查询信息列表成功！", v3195);
  }
  static async detail(p3591) {
    const v3196 = {
      aaJJh: "查询成功！",
      Wcjlz: function (p3592, p3593) {
        return p3592 ^ p3593;
      }
    };
    let v3197 = p3591.params.id;
    if (v3197) {
      let v3198 = await UserModel.getUserDetail(v3197);
      p3591.response.status = 200;
      p3591.body = vRequire9.SUCCESS_200(v3196.aaJJh, v3198);
    } else {
      p3591.response.status = v3196.Wcjlz(785232, 785100);
      p3591.body = vRequire9.ERROR_412("信息ID必须传");
    }
  }
  static async delete(p3594) {
    const v3199 = {
      JzWTE: function (p3595, p3596) {
        return p3595 ^ p3596;
      },
      QrNGV: "信息ID必须传！"
    };
    let v3200 = JSON.parse(p3594.request.body);
    let v3201 = v3200.id;
    if (v3201 && !isNaN(v3201)) {
      await UserModel.deleteUser(v3201);
      p3594.response.status = v3199.JzWTE(740599, 740415);
      p3594.body = vRequire9.SUCCESS_200("删除信息成功！");
    } else {
      p3594.response.status = 412;
      p3594.body = vRequire9.ERROR_412(v3199.QrNGV);
    }
  }
  static async update(p3597) {
    let v3202 = p3597.request.body;
    let v3203 = p3597.params.id;
    if (v3202) {
      await UserModel.updateUser(v3203, v3202);
      let v3204 = await UserModel.getUserDetail(v3203);
      p3597.response.status = 200;
      p3597.body = vRequire9.SUCCESS_200("更新信息成功！", v3204);
    } else {
      p3597.response.status = 412;
      p3597.body = vRequire9.ERROR_412("更新信息失败！");
    }
  }
  static async setValidateCode() {
    const v3205 = {
      gmBAU: function (p3598, p3599) {
        return p3598 ^ p3599;
      },
      DSqyl: function (p3600, p3601) {
        return p3600 ^ p3601;
      }
    };
    const v3206 = "0123456789ABCDEFGHGKLMNOPQRSTUVWXYZabcdefghigkmnopqrstuvwxyz";
    let v3207 = "";
    for (let v3208 = 0; v3208 < 4; v3208++) {
      const v3209 = Math.floor(Math.random() * (v3206.length - v3205.gmBAU(679792, 679793)) + v3205.DSqyl(795663, 795662));
      v3207 += v3206.charAt(v3209);
    }
    global.eventInfo.loginValidateCode = v3207;
    return v3207;
  }
  static async refreshValidateCode(p3602) {
    const v3210 = {
      jZXWG: function (p3603, p3604) {
        return p3603 * p3604;
      },
      MKQLY: function (p3605, p3606) {
        return p3605 ^ p3606;
      }
    };
    const v3211 = C26.setValidateCode();
    if (global.eventInfo.loginValidateCodeTimer) {
      clearInterval(global.eventInfo.loginValidateCodeTimer);
    } else {
      global.eventInfo.loginValidateCodeTimer = setInterval(() => {
        C26.setValidateCode();
      }, v3210.jZXWG(v3210.jZXWG(5, 60), v3210.MKQLY(283332, 282924)));
    }
    p3602.response.status = 200;
    p3602.body = vRequire9.SUCCESS_200("success", v3211);
  }
  static async ["getValidateCode"](p3607) {
    const v3212 = {
      CfLCA: "success"
    };
    const v3213 = global.eventInfo.loginValidateCode;
    p3607.response.status = 200;
    p3607.body = vRequire9.SUCCESS_200(v3212.CfLCA, v3213);
  }
  static async ["login"](p3608) {
    const v3214 = {
      MjKId: function (p3609, p3610) {
        return p3609 ^ p3610;
      },
      YQTvE: function (p3611, p3612) {
        return p3611 === p3612;
      },
      GaJLr: function (p3613, p3614) {
        return p3613 * p3614;
      },
      wEvbP: function (p3615, p3616) {
        return p3615 ^ p3616;
      },
      cLCtS: "登录成功"
    };
    const v3215 = JSON.parse(p3608.request.body);
    const {
      emailName: _0x5e53a8,
      password: _0xda4731,
      code: _0x2ad929
    } = v3215;
    const v3216 = vRequire3.b64DecodeUnicode(_0xda4731).split("").reverse().join("");
    const v3217 = global.eventInfo.loginValidateCode.toLowerCase();
    const v3218 = _0x2ad929.toLowerCase();
    if (v3217 != v3218) {
      C26.setValidateCode();
      p3608.response.status = v3214.MjKId(786602, 786530);
      p3608.body = vRequire9.SUCCESS_200("验证码不正确，请重新输入！", v3214.MjKId(109342, 109343));
      return;
    }
    const v3219 = {
      emailName: _0x5e53a8,
      password: vRequire3.md5(v3216)
    };
    const v3220 = await UserModel.getUserForPwd(v3219);
    if (v3220) {
      const {
        userId: _0x50c60f,
        userType: _0x403f44,
        registerStatus: _0x4fa59f
      } = v3220;
      if (v3214.YQTvE(_0x4fa59f, v3214.MjKId(688957, 688957))) {
        p3608.response.status = 200;
        p3608.body = vRequire9.SUCCESS_200("此账号尚未激活，请联系管理员激活！", 1);
        return;
      }
      const v3221 = vRequire11.sign({
        userId: _0x50c60f,
        userType: _0x403f44,
        emailName: _0x5e53a8
      }, vRequire13.sign, {
        expiresIn: v3214.GaJLr(v3214.wEvbP(674195, 674226) * 24, v3214.MjKId(114376, 114420)) * 60 * 1000
      });
      global.eventInfo.webfunnyTokenList.push(v3221);
      C26.setValidateCode();
      p3608.response.status = 200;
      p3608.body = vRequire9.SUCCESS_200(v3214.cLCtS, v3221);
    } else {
      C26.setValidateCode();
      p3608.response.status = 200;
      p3608.body = vRequire9.SUCCESS_200("用户名密码不正确！", 1);
    }
  }
  static async ["forgetPwd"](p3617) {
    const v3222 = {
      uNjEA: "密码找回",
      zDfXG: "管理员你好， 你的登录密码是：",
      NBWaI: function (p3618, p3619) {
        return p3618 ^ p3619;
      },
      WpAas: "管理员你好，密码已发送至您的邮箱，请注意查收！"
    };
    const v3223 = JSON.parse(p3617.request.body);
    const {
      email: _0x2df90d
    } = v3223;
    let v3224 = await UserModel.isAdminAccount(_0x2df90d, USER_INFO.USER_TYPE_ADMIN);
    if (v3224) {
      C26.sendEmail(_0x2df90d, v3222.uNjEA, v3222.zDfXG + v3224.password);
      p3617.response.status = v3222.NBWaI(980576, 980648);
      p3617.body = vRequire9.SUCCESS_200(v3222.WpAas, v3222.NBWaI(583826, 583826));
    } else {
      p3617.response.status = 200;
      p3617.body = vRequire9.SUCCESS_200("非管理员账号，请联系管理员获取登录密码！", 1);
    }
  }
  static async sendRegisterEmail(p3620) {
    const v3225 = {
      MyYIw: "验证码发送太频繁",
      zlajX: function (p3621, p3622) {
        return p3621 ^ p3622;
      },
      bBCVQ: function (p3623, p3624) {
        return p3623 * p3624;
      },
      ToKPa: function (p3625, p3626) {
        return p3625 + p3626;
      },
      Wpqir: "<p>Webfunny注册的验证码为：",
      CHVjW: "<p>如有疑问，请联系作者，微信号：webfunny2、webfunny_2020</p>",
      PMVun: "验证码已发送"
    };
    const v3226 = JSON.parse(p3620.request.body);
    const {
      email: _0x5b30c7
    } = v3226;
    const v3227 = "0123456789ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz";
    let v3228 = "";
    for (let v3229 = 0; v3229 < 4; v3229++) {
      const v3230 = Math.floor(Math.random() * (v3227.length - 1) + 1);
      v3228 += v3227.charAt(v3230);
    }
    if (global.eventInfo.registerEmailCode[_0x5b30c7]) {
      p3620.response.status = 200;
      p3620.body = vRequire9.SUCCESS_200(v3225.MyYIw, v3225.zlajX(373935, 373934));
      return;
    }
    global.eventInfo.registerEmailCode[_0x5b30c7] = v3228;
    global.eventInfo.registerEmailCodeCheckError[_0x5b30c7] = 0;
    setTimeout(() => {
      delete global.eventInfo.registerEmailCode[_0x5b30c7];
    }, v3225.bBCVQ(v3225.zlajX(942917, 942919), 60) * v3225.zlajX(121982, 122774));
    const v3231 = "注册验证码：" + v3228;
    const v3232 = v3225.ToKPa(v3225.ToKPa("<p>用户你好!</p>", v3225.Wpqir) + v3228 + "</p>", v3225.CHVjW);
    C26.sendEmail(_0x5b30c7, v3231, v3232);
    p3620.response.status = 200;
    p3620.body = vRequire9.SUCCESS_200(v3225.PMVun, 0);
  }
  static async registerCheck(p3627) {
    const v3233 = {
      BHkXw: function (p3628, p3629) {
        return p3628 ^ p3629;
      },
      KRMzS: function (p3630, p3631) {
        return p3630 + p3631;
      },
      XSsRp: "<p>管理员你好!</p>"
    };
    const v3234 = JSON.parse(p3627.request.body);
    const {
      name: _0x13a165,
      email: _0x2d78c9,
      emailCode: _0x3e1a58,
      password: _0xf71d8c
    } = v3234;
    const v3235 = global.eventInfo.registerEmailCode[_0x2d78c9];
    const v3236 = _0x3e1a58.toLowerCase();
    if (!v3235 || v3236 != v3235.toLowerCase()) {
      p3627.response.status = 200;
      p3627.body = vRequire9.SUCCESS_200("验证码不正确或已失效！", 1);
      return;
    }
    let v3237 = await UserModel.checkUserAccount(_0x2d78c9);
    if (v3237) {
      p3627.response.status = 200;
      p3627.body = vRequire9.SUCCESS_200("邮箱已存在！", 1);
      return;
    }
    vRequire3.postJson("http://www.webfunny.cn/config/recordEmail", {
      email: _0x2d78c9,
      purchaseCode: accountInfo.purchaseCode
    }).catch(p3632 => {});
    let v3238 = await UserModel.getAdminByType("admin");
    if (!v3238) {
      p3627.response.status = 200;
      p3627.body = vRequire9.SUCCESS_200("请先初始化管理员账号", v3233.BHkXw(274752, 274753));
    } else {
      const v3239 = v3238.emailName;
      const {
        localServerDomain: _0x39e690
      } = accountInfo;
      const v3240 = "http://" + _0x39e690 + "/server/register?name=" + _0x13a165 + "&email=" + _0x2d78c9 + "&password=" + _0xf71d8c;
      const v3241 = "管理员确认申请";
      const v3242 = v3233.KRMzS(v3233.XSsRp, "<p>有用户申请注册你的监控系统，请点击注册链接，以完成注册：<a href='") + v3240 + "'>" + v3240 + "</a></p><p>如有疑问，请联系作者，微信号：webfunny2、webfunny_2020</p>";
      C26.sendEmail(v3239, v3241, v3242);
      p3627.response.status = 200;
      p3627.body = vRequire9.SUCCESS_200("创建信息成功", 0);
    }
  }
  static async ["register"](p3633) {
    const v3243 = {
      gBKgb: "customer",
      ncMgc: function (p3634, p3635) {
        return p3634 ^ p3635;
      },
      HQUgC: function (p3636, p3637) {
        return p3636 ^ p3637;
      },
      cylhC: "邮箱已存在！",
      dAEmp: "申请成功",
      OQIwv: function (p3638, p3639) {
        return p3638 + p3639;
      },
      oiXWO: function (p3640, p3641) {
        return p3640 + p3641;
      },
      FlKRe: " 、 密码：",
      pliir: function (p3642, p3643) {
        return p3642 ^ p3643;
      },
      hJiol: "用户注册通知",
      srRsW: "创建信息成功"
    };
    const v3244 = vRequire3.parseQs(p3633.request.url);
    const {
      name: _0x2c953c,
      email: _0x464c17,
      phone: _0x5b2066,
      password: _0x4faef6,
      emailCode: _0x548cce
    } = v3244;
    const v3245 = vRequire3.b64DecodeUnicode(_0x4faef6).split("").reverse().join("");
    const v3246 = vRequire3.getUuid();
    const v3247 = {
      nickname: _0x2c953c,
      emailName: _0x464c17,
      phone: _0x5b2066,
      password: vRequire3.md5(v3245),
      userId: v3246,
      userType: v3243.gBKgb,
      registerStatus: 0
    };
    const v3248 = global.eventInfo.registerEmailCodeCheckError;
    if (v3248[_0x464c17] >= v3243.ncMgc(818146, 818145)) {
      p3633.response.status = 200;
      p3633.body = vRequire9.SUCCESS_200("验证码失败次数达到上限，请重新获取验证码！", 1);
      return;
    }
    const v3249 = global.eventInfo.registerEmailCode[_0x464c17];
    const v3250 = _0x548cce.toLowerCase();
    if (!v3249 || v3250 != v3249.toLowerCase()) {
      if (!v3248[_0x464c17]) {
        v3248[_0x464c17] = 1;
      } else {
        v3248[_0x464c17]++;
      }
      p3633.response.status = v3243.HQUgC(506340, 506156);
      p3633.body = vRequire9.SUCCESS_200("验证码不正确或已失效！", v3243.ncMgc(903962, 903963));
      return;
    }
    let v3251 = await UserModel.checkUserAccount(_0x464c17);
    if (v3251) {
      p3633.response.status = 200;
      p3633.body = vRequire9.SUCCESS_200(v3243.cylhC, 1);
      return;
    }
    if (v3247.nickname) {
      let v3252 = await UserModel.createUser(v3247);
      if (v3252 && v3252.id) {
        const v3253 = v3243.dAEmp;
        const v3254 = v3243.OQIwv(v3243.oiXWO("<p>用户你好!</p>", "<p>你的账号已经申请成功，请联系管理员激活后，方可登录。</p>") + "<p>账号：" + _0x464c17, v3243.FlKRe) + v3245 + "</p>" + "<p>如有疑问，请联系作者，微信号：webfunny2、webfunny_2020</p>";
        C26.sendEmail(_0x464c17, v3253, v3254);
        const v3255 = await UserModel.getUserForAdmin();
        MessageModel.createMessage({
          userId: v3255[v3243.pliir(173668, 173668)].userId,
          title: "用户注册通知",
          content: "您好，用户【" + _0x464c17 + "】正在申请注册webfunny账号，请及时处理！",
          type: "sys",
          isRead: 0,
          link: "http://" + accountInfo.localAssetsDomain + "/webfunny_event/userList.html"
        });
        const v3256 = v3243.hJiol;
        const v3257 = "\n        <p>尊敬的管理员：</p>\n        <p>您好，用户【" + _0x464c17 + "】正在申请注册webfunny账号，请及时处理！</p>\n        <p>点击链接处理：http://" + accountInfo.localAssetsDomain + "/webfunny_event/userList.html</p>\n        <p>如有疑问，请联系作者，微信号：webfunny2、webfunny_2020</p>\n        ";
        C26.sendEmail(v3255[0].emailName, v3256, v3257);
        p3633.response.status = 200;
        p3633.body = vRequire9.SUCCESS_200(v3243.srRsW, 0);
      }
    } else {
      p3633.response.status = 412;
      p3633.body = vRequire9.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async ["resetPwd"](p3644) {
    const v3258 = {
      HmTKS: function (p3645, p3646) {
        return p3645 ^ p3646;
      },
      hTQjC: function (p3647, p3648) {
        return p3647 ^ p3648;
      },
      aalBb: function (p3649, p3650) {
        return p3649 != p3650;
      },
      BntTM: function (p3651, p3652) {
        return p3651 ^ p3652;
      },
      DvpJv: "此邮箱不存在！",
      jsjMJ: "密码重置成功！",
      KNYei: function (p3653, p3654) {
        return p3653 + p3654;
      }
    };
    const v3259 = vRequire3.parseQs(p3644.request.url);
    const {
      email: _0x24d7b0,
      password: _0x30f410,
      emailCode: _0x217df9
    } = v3259;
    const v3260 = vRequire3.b64DecodeUnicode(_0x30f410).split("").reverse().join("");
    const v3261 = {
      emailName: _0x24d7b0,
      password: vRequire3.md5(v3260),
      emailCode: _0x217df9
    };
    const v3262 = global.eventInfo.registerEmailCodeCheckError;
    if (v3262[_0x24d7b0] >= v3258.HmTKS(802415, 802412)) {
      p3644.response.status = 200;
      p3644.body = vRequire9.SUCCESS_200("验证码失败次数达到上限，请重新获取验证码！", v3258.hTQjC(962792, 962793));
      return;
    }
    const v3263 = global.eventInfo.registerEmailCode[_0x24d7b0];
    const v3264 = _0x217df9.toLowerCase();
    if (!v3263 || v3258.aalBb(v3264, v3263.toLowerCase())) {
      if (!v3262[_0x24d7b0]) {
        v3262[_0x24d7b0] = 1;
      } else {
        v3262[_0x24d7b0]++;
      }
      p3644.response.status = 200;
      p3644.body = vRequire9.SUCCESS_200("验证码不正确或已失效！", 1);
      return;
    }
    let v3265 = await UserModel.checkUserAccount(_0x24d7b0);
    if (!v3265) {
      p3644.response.status = v3258.BntTM(361715, 361531);
      p3644.body = vRequire9.SUCCESS_200(v3258.DvpJv, 1);
      return;
    }
    let v3266 = await UserModel.resetPwd(_0x24d7b0, v3261);
    if (v3266) {
      const v3267 = v3258.jsjMJ;
      const v3268 = v3258.KNYei("<p>用户你好!</p><p>你的webfunny密码已重置。</p><p>账号：" + _0x24d7b0 + " 、 密码：", v3260) + "</p>" + "<p>如有疑问，请联系作者，微信号：webfunny2、webfunny_2020</p>";
      C26.sendEmail(_0x24d7b0, v3267, v3268);
      p3644.response.status = v3258.HmTKS(622715, 622771);
      p3644.body = vRequire9.SUCCESS_200("创建信息成功", 0);
    } else {
      p3644.response.status = 200;
      p3644.body = vRequire9.SUCCESS_200("重置密码失败！", 1);
    }
  }
  static async registerForAdmin(p3655) {
    const v3269 = {
      nbNag: function (p3656, p3657) {
        return p3656 ^ p3657;
      },
      ewvQg: "创建信息成功"
    };
    const v3270 = JSON.parse(p3655.request.body);
    const {
      name: _0xd3775,
      email: _0x3ff9d9,
      password: _0x1dcdf3,
      userType: _0x2f38df
    } = v3270;
    const v3271 = vRequire3.b64DecodeUnicode(_0x1dcdf3).split("").reverse().join("");
    const v3272 = vRequire3.getUuid();
    const v3273 = {
      nickname: _0xd3775,
      emailName: _0x3ff9d9,
      password: vRequire3.md5(v3271),
      userType: _0x2f38df,
      userId: v3272,
      registerStatus: 1
    };
    vRequire3.postJson("http://www.webfunny.cn/config/recordEmail", {
      email: _0x3ff9d9,
      purchaseCode: accountInfo.purchaseCode
    }).catch(p3658 => {});
    if (v3273.nickname) {
      const v3274 = await UserModel.checkAdminAccount();
      const v3275 = v3274[0].count * 1;
      if (v3275 > 0) {
        p3655.response.status = 200;
        p3655.body = vRequire9.SUCCESS_200("管理员账号已存在，请勿重复创建", 1);
        return;
      }
      await UserModel.createUser(v3273);
      p3655.response.status = v3269.nbNag(704712, 704512);
      p3655.body = vRequire9.SUCCESS_200(v3269.ewvQg, 0);
    } else {
      p3655.response.status = 412;
      p3655.body = vRequire9.ERROR_412("创建信息失败，请求参数不能为空！");
    }
  }
  static async activeRegisterMember(p3659) {
    const v3276 = {
      tteak: "支持项目：H5前端、PC前端、微信小程序、uni-app。"
    };
    const v3277 = JSON.parse(p3659.request.body);
    const {
      userId: _0x40830c,
      emailName: _0x17026f
    } = v3277;
    if (_0x40830c) {
      await UserModel.activeRegisterMember(_0x40830c);
      MessageModel.createMessage({
        userId: _0x40830c,
        title: "欢迎登录！",
        content: JSON.stringify(["尊敬的用户您好，欢迎登录webfunny前端监控系统。", "webfunny致力于解决前端的各种问题，纯私有化部署，支持千万级PV的日活量。", v3276.tteak, "使用方法和常见问题请移步官网：www.webfunny.cn"]),
        type: "sys",
        isRead: 0,
        link: "http://www.webfunny.cn"
      });
      const v3278 = "用户激活通知";
      const v3279 = "\n      <p>尊敬的用户：</p>\n      <p>您好，您的账号已经被管理员激活了，快去登录吧！</p>\n      <p>如有疑问，请联系作者，微信号：webfunny2、webfunny_2020</p>\n      ";
      C26.sendEmail(_0x17026f, v3278, v3279);
      p3659.response.status = 200;
      p3659.body = vRequire9.SUCCESS_200("用户已激活", 0);
    } else {
      p3659.response.status = 412;
      p3659.body = vRequire9.ERROR_412("激活失败");
    }
  }
  static async ["deleteRegisterMember"](p3660) {
    const v3280 = {
      whMSl: function (p3661, p3662) {
        return p3661 ^ p3662;
      },
      FhKMX: "缺失userId！"
    };
    const v3281 = JSON.parse(p3660.request.body);
    const {
      userId: _0xe381bd
    } = v3281;
    if (_0xe381bd) {
      await UserModel.deleteUserByUserId(_0xe381bd);
      p3660.response.status = 200;
      p3660.body = vRequire9.SUCCESS_200("用户信息删除成功", v3280.whMSl(932913, 932913));
    } else {
      p3660.response.status = 412;
      p3660.body = vRequire9.ERROR_412(v3280.FhKMX);
    }
  }
  static async storeTokenToMemory(p3663) {
    const v3282 = {
      DysVo: function (p3664, p3665, p3666, p3667) {
        return p3664(p3665, p3666, p3667);
      },
      yNDEI: "Token存储完成！"
    };
    const v3283 = JSON.parse(p3663.request.body);
    const {
      accessToken: _0x46820f
    } = v3283;
    v3282.DysVo(v30, _0x46820f, vRequire13.sign, async (p3668, p3669) => {
      if (p3668) {
        vRequire7.printError("token解析失败：", p3668);
        return;
      }
      const {
        emailName: _0x373c5a
      } = p3669;
      const v3284 = global.eventInfo.tokenListInMemory || {};
      v3284[_0x373c5a] = _0x46820f;
      const v3285 = await ConfigModel.getConfigByName(_0x373c5a);
      if (v3285) {
        await ConfigModel.updateConfig(_0x373c5a, {
          configValue: _0x46820f
        });
      } else {
        await ConfigModel.createConfig({
          configName: _0x373c5a,
          configValue: _0x46820f
        });
      }
    });
    p3663.response.status = 200;
    p3663.body = vRequire9.SUCCESS_200(v3282.yNDEI, 0);
  }
}
class C27 {
  static async initWeFieldData(p3670) {
    const v3286 = {
      kcQCc: function (p3671, p3672) {
        return p3671 ^ p3672;
      },
      fxiaA: function (p3673, p3674) {
        return p3673 < p3674;
      },
      Isyhk: function (p3675, p3676) {
        return p3675 ^ p3676;
      }
    };
    let v3287 = "超级管理员";
    let v3288 = USER_INFO.USER_TYPE_SUPERADMIN;
    let v3289 = await BuryPointProjectModel.getListByParentId(-1);
    for (let v3290 = v3286.kcQCc(923624, 923624); v3286.fxiaA(v3290, v3289.length); v3290++) {
      const {
        projectId: _0x5c45d2
      } = v3289[v3290];
      if (_0x5c45d2 === "event101") {
        await C12.handleWeFieldData(_0x5c45d2, v3287);
      }
    }
    p3670.response.status = v3286.Isyhk(316095, 316023);
    p3670.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_SUCCESS), "");
  }
  static async initWePointData(p3677) {
    const v3291 = {
      hlENx: "超级管理员",
      vupqW: function (p3678, p3679) {
        return p3678 ^ p3679;
      },
      BwoBe: function (p3680, p3681) {
        return p3680 === p3681;
      }
    };
    let v3292 = v3291.hlENx;
    let v3293 = USER_INFO.USER_TYPE_SUPERADMIN;
    let v3294 = await BuryPointProjectModel.getListByParentId(-v3291.vupqW(975230, 975231));
    for (let v3295 = 0; v3295 < v3294.length; v3295++) {
      const {
        projectId: _0x4a83b1
      } = v3294[v3295];
      if (v3291.BwoBe(_0x4a83b1, "event101")) {
        await C12.handleWePointData(_0x4a83b1, v3292, "");
      }
    }
    p3677.response.status = 200;
    p3677.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_SUCCESS), "");
  }
  static async initWeTemplateData(p3682) {
    const v3296 = {
      EWeDL: function (p3683, p3684) {
        return p3683 > p3684;
      },
      eBAnG: function (p3685, p3686) {
        return p3685 ^ p3686;
      }
    };
    let v3297 = "webfunny";
    let v3298 = USER_INFO.USER_TYPE_SUPERADMIN;
    if (vRequire30 && v3296.EWeDL(vRequire30.length, 0)) {
      for (let v3299 = 0; v3299 < vRequire30.length; v3299++) {
        await C27.createWeProject(vRequire30[v3299], v3297);
      }
      p3682.response.status = v3296.eBAnG(257993, 257793);
      p3682.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_SUCCESS), "");
    } else {
      p3682.response.status = 412;
      p3682.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_PARAM_FAIL));
    }
  }
  static async ["createWeTemplateData"]() {
    const v3300 = {
      mDdce: function (p3687, p3688) {
        return p3687 ^ p3688;
      },
      NKXlV: function (p3689, p3690) {
        return p3689 < p3690;
      }
    };
    vRequire7.printInfo("创建系统模板和项目开始");
    let v3301 = "webfunny";
    if (vRequire34 && vRequire34.length > v3300.mDdce(667703, 667703)) {
      for (let v3302 = 0; v3300.NKXlV(v3302, vRequire34.length); v3302++) {
        await C27.createWeProject(vRequire34[v3302], v3301);
      }
    }
  }
  static async ["checkWeFieldData"](p3691) {
    const v3303 = {
      NLzMT: function (p3692, p3693) {
        return p3692 + p3693;
      },
      ZDonx: function (p3694, p3695) {
        return p3694 + p3695;
      },
      pYOKs: "项目id不能为空",
      ZGBBU: function (p3696, p3697) {
        return p3696 ^ p3697;
      },
      IDaPG: function (p3698, p3699) {
        return p3698 * p3699;
      },
      exPhw: function (p3700, p3701) {
        return p3700 < p3701;
      },
      xxsAp: function (p3702, p3703) {
        return p3702 ^ p3703;
      },
      KQGbj: function (p3704, p3705) {
        return p3704 < p3705;
      },
      asrEg: function (p3706, p3707) {
        return p3706 === p3707;
      },
      cUSQp: function (p3708, p3709) {
        return p3708 ^ p3709;
      },
      jLGsM: function (p3710, p3711) {
        return p3710 + p3711;
      },
      ejIeo: " ADD COLUMN "
    };
    vRequire7.printInfo("检测项目通用字段开始");
    const v3304 = vRequire3.parseQs(p3691.request.url);
    let v3305 = v3304.projectIds;
    if (!v3305) {
      p3691.response.status = 412;
      p3691.body = vRequire9.ERROR_412(v3303.pYOKs);
      return;
    }
    let v3306 = v3305.split(",");
    p3691.response.status = v3303.ZGBBU(797578, 797506);
    p3691.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_SUCCESS), "创建通用字段中，" + v3303.IDaPG(v3306.length, 10) + "秒内请务在进行其他操作...");
    for (let v3307 = 0; v3303.exPhw(v3307, v3306.length); v3307++) {
      const v3308 = v3306[v3307];
      const v3309 = await SdkReleaseModel.getPointIdsList(v3308);
      let v3310 = [];
      for (let v3311 = 0; v3311 < v3309.length; v3311++) {
        v3310 = [...new Set([...v3310, ...v3309[v3311].pointIds.split(",")])];
      }
      if (vRequire27.length > v3303.xxsAp(692377, 692377)) {
        for (let v3312 = 0; v3303.KQGbj(v3312, vRequire27.length); v3312++) {
          let v3313 = vRequire27[v3312];
          let {
            fieldName: _0xa14bdb,
            fieldAlias: _0x55637e,
            fieldType: _0x46e5d7,
            fieldLength: _0x2b4255
          } = v3313;
          let v3314 = await BuryPointFieldModel.existSameField(v3308, _0xa14bdb);
          if (!v3314 || v3314 && v3303.asrEg(v3314.length, v3303.ZGBBU(436569, 436569))) {
            v3313.projectId = v3308;
            v3313.createBy = "webfunny";
            await BuryPointFieldModel.create(v3313);
          }
        }
        const v3315 = await BuryPointWarehouseModel.getList(v3308, "", v3303.cUSQp(543684, 543685));
        for (let v3316 = v3303.xxsAp(627949, 627949); v3316 < v3315.length; v3316++) {
          v3310.push(v3315[v3316].pointId);
        }
        const v3317 = [...new Set(v3310)];
        for (let v3318 = 0; v3318 < v3317.length; v3318++) {
          let v3319 = v3308 + "_" + v3317[v3318];
          for (let v3320 = 0; v3320 < vRequire27.length; v3320++) {
            let {
              fieldName: _0xc05540,
              fieldType: _0x4ee9f9
            } = vRequire27[v3320];
            let v3321 = v3303.jLGsM(" ALTER TABLE " + v3319 + v3303.ejIeo + _0xc05540 + " ", _0x4ee9f9);
            await CommonModel.alterAddColumn(v3321).catch(p3712 => {
              vRequire7.printError(v3303.NLzMT(v3303.ZDonx("新增字段日志表: " + v3319, ",") + _0xc05540, "}报错："), p3712);
            });
          }
        }
      }
    }
  }
  static async upgradeVersion_2_0(p3713) {
    const v3322 = {
      GCpAo: function (p3714, p3715) {
        return p3714 ^ p3715;
      },
      iDvcs: function (p3716, p3717) {
        return p3716 * p3717;
      }
    };
    let v3323 = "超级管理员";
    let v3324 = USER_INFO.USER_TYPE_SUPERADMIN;
    let v3325 = await BuryPointProjectModel.getListByParentIdAndSysType(-1, v3322.GCpAo(268206, 268206));
    p3713.response.status = 200;
    p3713.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_SUCCESS), "升级中，" + v3322.iDvcs(v3325.length, 10) + "秒内请务在进行其他操作...");
    for (let v3326 = 0; v3326 < v3325.length; v3326++) {
      const {
        projectId: _0x12534c
      } = v3325[v3326];
      C12.initWeFieldAndPointData(_0x12534c, v3323);
      C12.handleOldFieldData(_0x12534c, v3323);
    }
  }
  static async ["createWeProject"](p3718, p3719) {
    const v3327 = {
      bCdJN: function (p3720, p3721) {
        return p3720 > p3721;
      },
      Fuslq: function (p3722, p3723) {
        return p3722 + p3723;
      },
      ZLKbc: function (p3724, p3725) {
        return p3724 > p3725;
      },
      cLoyv: "yyyyMMdd",
      EdOpb: "hhmmssS",
      YNCqo: function (p3726, p3727) {
        return p3726 + p3727;
      },
      ZsvIw: "event_",
      sVimt: function (p3728, p3729) {
        return p3728 < p3729;
      },
      tzsjy: function (p3730, p3731) {
        return p3730 ^ p3731;
      },
      DRCTE: function (p3732, p3733) {
        return p3732 < p3733;
      },
      SrwIv: function (p3734, p3735) {
        return p3734 ^ p3735;
      },
      bVCpO: function (p3736, p3737) {
        return p3736 ^ p3737;
      }
    };
    const {
      templateName: _0x4b7ba4,
      weKey: _0x4ced99,
      groupCount: _0x5972c8,
      pageCount: _0x4378a9,
      cardCount: _0x237991,
      templatePoint: _0x350a6d,
      detail: _0x4d82bc
    } = p3718;
    let v3328 = await BuryPointTemplateModel.existWeTempletaByWekey(_0x4ced99);
    if (v3328 && v3327.bCdJN(v3328.length, 0)) {
      return;
    }
    let v3329 = {
      templateName: _0x4b7ba4,
      weKey: _0x4ced99,
      groupCount: _0x5972c8,
      pageCount: _0x4378a9,
      cardCount: _0x237991,
      createBy: p3719
    };
    v3329.templatePoint = "{}";
    v3329.detail = "{}";
    v3329.type = 3;
    let v3330 = await BuryPointTemplateModel.create(v3329);
    let v_0x4d82bc = _0x4d82bc;
    let v3331 = v3327.Fuslq(_0x4b7ba4, "项目");
    let v3332 = await BuryPointProjectModel.getAllProjectList(1);
    if (v3332 && v3327.ZLKbc(v3332.length, 0)) {
      return;
    }
    const v3333 = new Date();
    const v3334 = v3333.Format(v3327.cLoyv);
    const v3335 = v3333.Format(v3327.EdOpb);
    let v3336 = v3327.Fuslq(v3327.YNCqo(v3327.ZsvIw + v3334 + "_", v3335), "_");
    let v3337 = await C18.createNewProject(v3331, v3336, "pro", "1", p3719, "");
    let v3338 = v3337.projectId;
    let v3339 = await C12.initWeTemplatePointAndField(v3338, _0x350a6d, p3719);
    let v3340 = v_0x4d82bc.groupList;
    let v3341 = [];
    let v3342 = [];
    for (let v3343 = 0; v3327.sVimt(v3343, v3340.length); v3343++) {
      let v3344 = {
        name: v3340[v3343].name
      };
      v3344.type = v3327.tzsjy(287058, 287056);
      v3344.sort = v3340[v3343].sort;
      v3344.parentId = v3337.id;
      v3344.projectId = v3338;
      v3344.createBy = p3719;
      let v3345 = await BuryPointProjectModel.create(v3344);
      let v3346 = v3340[v3343].pageList;
      let v3347 = {
        id: v3345.id,
        name: v3340[v3343].name,
        type: v3340[v3343].type,
        sort: v3340[v3343].sort
      };
      let v3348 = [];
      for (let v3349 = 0; v3327.DRCTE(v3349, v3346.length); v3349++) {
        let v3350 = {
          name: v3346[v3349].name
        };
        v3350.type = v3327.SrwIv(777521, 777522);
        v3350.sort = v3346[v3349].sort;
        v3350.parentId = v3345.id;
        v3350.projectId = v3338;
        v3350.createBy = p3719;
        let v3351 = await BuryPointProjectModel.create(v3350);
        let v3352 = v3346[v3349].cardList;
        let v3353 = {
          id: v3351.id,
          name: v3346[v3349].name,
          type: v3346[v3349].type,
          sort: v3346[v3349].sort
        };
        let v3354 = [];
        for (let v3355 = 0; v3327.DRCTE(v3355, v3352.length); v3355++) {
          let v3356 = v3352[v3355];
          let v3357 = {
            projectId: v3338,
            pageId: v3351.id,
            name: v3356.name,
            type: v3356.type,
            sort: v3356.sort,
            conversionCycle: v3356.conversionCycle,
            groupByFlag: v3356.groupByFlag,
            chartTableShow: v3356.chartTableShow,
            togetherList: v3356.togetherList,
            refreshFrequency: v3356.refreshFrequency
          };
          let v3358 = JSON.parse(v3356.calcRule);
          let v3359 = [];
          let v3360 = [];
          for (let v3361 = v3327.bVCpO(323142, 323142); v3361 < v3358.length; v3361++) {
            let v3362 = v3358[v3361];
            let v3363 = v3362.calcName;
            v3362.calcNameKey = slugify(v3363).replace(new RegExp("-", "g"), "") + new Date().Format("yyyyMMddhhmmss");
            let v3364 = v3362.prePoint;
            let v3365 = v3364.pointId;
            let v3366 = await C12.getNewPointId(v3365, v3339);
            v3362.prePoint.pointId = v3366;
            v3342.push(v3366);
            let v3367 = v3362.endPoint;
            if (v3367) {
              let v3368 = await C12.getNewPointId(v3365, v3339);
              v3362.endPoint.pointId = v3368;
              v3342.push(v3368);
            }
            v3359.push(v3362);
            if (v3357.type === 5) {
              v3360.push(v3366);
            }
          }
          v3357.calcRule = JSON.stringify(v3359);
          v3357.createBy = p3719;
          let v3369 = await BuryPointCardModel.create(v3357);
          let v3370 = {
            id: v3369.id,
            name: v3352[v3355].name,
            type: v3352[v3355].type,
            conversionCycle: v3352[v3355].conversionCycle,
            groupByFlag: v3352[v3355].groupByFlag,
            chartTableShow: v3352[v3355].chartTableShow,
            togetherList: v3352[v3355].togetherList,
            refreshFrequency: v3352[v3355].refreshFrequency,
            calcRule: v3357.calcRule
          };
          v3354.push(v3370);
        }
        v3353.cardList = v3354;
        v3348.push(v3353);
      }
      v3347.pageList = v3348;
      v3341.push(v3347);
    }
    let v3371 = {
      groupList: v3341
    };
    let v3372 = [...new Set(v3342)];
    let v3373 = [];
    for (let v3374 = 0; v3374 < v3372.length; v3374++) {
      let v3375 = {};
      let v3376 = v3372[v3374];
      let v3377 = await BuryPointWarehouseModel.detailByPointId(v3376);
      v3375.pointId = v3376;
      v3375.pointName = v3377.pointName;
      v3375.pointDesc = v3377.pointDesc;
      v3375.weType = v3377.weType;
      v3375.replacePointIdKey = v3377.replacePointIdKey;
      let v3378 = await BuryPointFieldModel.getListByFieldIds(v3377.fields);
      let v3379 = [];
      for (let v3380 = 0; v3380 < v3378.length; v3380++) {
        let v3381 = {
          fieldName: v3378[v3380].fieldName,
          fieldAlias: v3378[v3380].fieldAlias,
          fieldType: v3378[v3380].fieldType,
          fieldLength: v3378[v3380].fieldLength,
          fieldDesc: v3378[v3380].fieldDesc,
          groupByFlag: v3378[v3380].groupByFlag,
          weType: v3378[v3380].weType
        };
        v3379.push(v3381);
      }
      v3375.fieldList = v3379;
      v3373.push(v3375);
    }
    let v3382 = {};
    v3382.templatePoint = JSON.stringify(v3373);
    v3382.projectId = v3338;
    v3382.detail = vRequire3.b64EncodeUnicode(JSON.stringify(v3371));
    v3382.id = v3330.id;
    await BuryPointTemplateModel.update(v3330.id, v3382);
  }
  static async createDemoTemplateData() {
    const v3383 = {
      dPKzY: function (p3738, p3739) {
        return p3738 ^ p3739;
      },
      IrrjH: function (p3740, p3741) {
        return p3740 < p3741;
      },
      GzRWc: "04-0",
      FXrSP: function (p3742, p3743) {
        return p3742 ^ p3743;
      }
    };
    let v3384 = [];
    for (let v3385 = v3383.dPKzY(819082, 819082); v3383.IrrjH(v3385, vRequire33.length); v3385++) {
      let v3386 = vRequire33[v3385];
      let v3387 = [];
      for (let v3388 = 0; v3388 < v3386.statisticList.length; v3388++) {
        let v3389 = v3386.statisticList[v3388];
        let v3390 = v3389.calcType;
        let v3391 = [];
        if (v3390) {
          for (let v3392 = 0; v3392 < 30; v3392++) {
            let v3393 = {};
            v3393.count = Math.floor(Math.random() * 100);
            v3393.happenDate = v3383.GzRWc + v3392;
            v3391.push(v3393);
          }
        } else {
          for (let v3394 = 0; v3394 < 30; v3394++) {
            let v3395 = {};
            v3395.count = Math.floor(Math.random() * 1000 + v3383.FXrSP(959491, 960491));
            v3395.happenDate = "04-0" + v3394;
            v3391.push(v3395);
          }
        }
        v3389.calcData = v3391;
        v3387.push(v3389);
      }
      v3386.statisticList = v3387;
      v3384.push(v3386);
    }
  }
}
class C28 {
  static async getSysInfo(p3744) {
    const v3396 = {
      MIuFx: function (p3745, p3746) {
        return p3745 ^ p3746;
      }
    };
    p3744.response.status = v3396.MIuFx(951147, 951203);
    p3744.body = vRequire9.SUCCESS_200("success", {
      invalid: true
    });
  }
  static async ["createPurchaseCode"](p3747) {
    const v3397 = {
      eHdPQ: function (p3748, p3749) {
        return p3748 ^ p3749;
      }
    };
    const v3398 = p3747.request.body;
    const v3399 = JSON.parse(v3398);
    const {
      inputPurchaseCode: _0x5f5882,
      inputSecretCode: _0x5b43fb
    } = v3399;
    await ConfigModel.updateConfig("purchaseCode", {
      configValue: _0x5f5882
    });
    await ConfigModel.updateConfig("secretCode", {
      configValue: _0x5b43fb
    });
    C28.restartServer();
    p3747.response.status = v3397.eHdPQ(354086, 354286);
    p3747.body = vRequire9.SUCCESS_200("success", 0);
  }
  static async restartServer() {
    const v3400 = {
      ojgAE: "win32",
      itUpb: function (p3750, p3751, p3752, p3753) {
        return p3750(p3751, p3752, p3753);
      },
      kllTQ: "npm",
      NSfAI: "inherit",
      yxceE: function (p3754, p3755, p3756, p3757, p3758) {
        return p3754(p3755, p3756, p3757, p3758);
      }
    };
    switch (vRequire24.platform) {
      case v3400.ojgAE:
        v3400.itUpb(spawn, vRequire24.platform === v3400.ojgAE ? "npm.cmd" : v3400.kllTQ, ["run", "prd_restart"], {
          stdio: v3400.NSfAI
        });
        break;
      case "darwin":
      default:
        try {
          v3400.yxceE(execFile, "./restart.sh", [], null, function (p3759, p3760, p3761) {
            console.log("服务已重启");
          });
        } catch (_0xf62e2d) {
          console.log("服务重启失败，请手动重启");
        }
        break;
    }
  }
}
class C29 {
  static async ["create"](p3762) {
    const v3401 = {
      revdF: function (p3763, p3764) {
        return p3763 ^ p3764;
      }
    };
    let {
      taskName: _0x29299f,
      taskDes = "",
      projectId: _0x5c4f9d,
      handleManId: _0x208ecf,
      handleManName: _0x2537e2,
      taskStatus: _0x596f6c,
      taskPoint: _0x187e5d
    } = JSON.parse(p3762.request.body);
    const {
      userId: _0x540828,
      nickname: _0x278a39
    } = p3762.user;
    const v3402 = {
      taskName: _0x29299f,
      taskDes: taskDes,
      projectId: _0x5c4f9d,
      handleManId: _0x208ecf,
      handleManName: _0x2537e2,
      taskStatus: _0x596f6c,
      createManId: _0x540828,
      createManName: _0x278a39,
      taskPoint: JSON.stringify(_0x187e5d)
    };
    if (_0x29299f && _0x5c4f9d && _0x208ecf) {
      let v3403 = await BuryPointTaskModel.create(v3402);
      p3762.response.status = v3401.revdF(815414, 815614);
      p3762.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_SUCCESS), v3403);
    } else {
      p3762.response.status = 412;
      p3762.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.CREATE_PARAM_FAIL));
    }
  }
  static async delete(p3765) {
    const v3404 = {
      JiFlH: function (p3766, p3767) {
        return p3766 ^ p3767;
      }
    };
    let {
      taskId: _0x515c59
    } = JSON.parse(p3765.request.body);
    await BuryPointTaskModel.delete(_0x515c59);
    p3765.response.status = v3404.JiFlH(530394, 530194);
    p3765.body = vRequire9.SUCCESS_200("success", 0);
  }
  static async batchDeletion(p3768) {
    let {
      taskIds: _0x4c74a0
    } = JSON.parse(p3768.request.body);
    if (_0x4c74a0) {
      await BuryPointTaskModel.batchDeletion(_0x4c74a0);
    }
    p3768.response.status = 200;
    p3768.body = vRequire9.SUCCESS_200("success", 0);
  }
  static async ["update"](p3769) {
    const v3405 = {
      KvlXl: function (p3770, p3771) {
        return p3770 ^ p3771;
      }
    };
    let v3406 = JSON.parse(p3769.request.body);
    const {
      nickname: _0x134a13
    } = p3769.user;
    if (v3406.taskId && v3406.taskName && v3406.projectId && v3406.taskPoint && v3406.handleManId && v3406.handleManName) {
      v3406.taskPoint = JSON.stringify(v3406.taskPoint);
      let v3407 = await BuryPointTaskModel.update(v3406);
      p3769.response.status = v3405.KvlXl(979456, 979656);
      p3769.body = vRequire9.SUCCESS_200("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_SUCCESS), v3407);
    } else {
      p3769.response.status = 412;
      p3769.body = vRequire9.ERROR_412("" + vRequire3.b64DecodeUnicode(vRequire26.UPDATE_PARAM_FAIL));
    }
  }
  static async list(p3772) {
    const v3408 = {
      oUzdH: function (p3773, p3774) {
        return p3773 < p3774;
      },
      eBeLF: function (p3775, p3776) {
        return p3775 ^ p3776;
      },
      lcLgY: function (p3777, p3778) {
        return p3777 ^ p3778;
      }
    };
    const v3409 = JSON.parse(p3772.request.body);
    const v3410 = await BuryPointTaskModel.list(v3409);
    const {
      list: _0x833acb,
      total: _0x425af8
    } = v3410;
    for (let v3411 = 0; v3408.oUzdH(v3411, _0x833acb.length); v3411++) {
      const v3412 = _0x833acb[v3411];
      const {
        projectId: _0x2c94a4,
        taskPoint: _0x1afe1a
      } = v3412;
      let v3413 = await BuryPointProjectModel.getNameByProjectIdAndType(_0x2c94a4, 1);
      const {
        name: _0xfa740
      } = v3413[v3408.eBeLF(436830, 436830)];
      v3412.projectName = _0xfa740;
      let v3414 = [];
      if (_0x1afe1a) {
        let v3415 = [];
        try {
          v3415 = JSON.parse(_0x1afe1a);
        } catch (_0x2231c9) {
          console.error("taskPointStr 格式转换失败", _0x2231c9);
        }
        for (let v3416 = v3408.lcLgY(599844, 599844); v3416 < v3415.length; v3416++) {
          let v3417 = v3415[v3416].pointId;
          let v3418 = await BuryPointWarehouseModel.detailByPointId(v3417);
          const v3419 = {
            pointName: v3418 && v3418 !== 0 ? v3418.pointName : "",
            pointId: v3417,
            taskPointDes: v3415[v3416].taskPointDes
          };
          v3414.push(v3419);
        }
      }
      v3412.points = v3414;
    }
    p3772.response.status = 200;
    p3772.body = vRequire9.SUCCESS_200("success", {
      list: _0x833acb,
      total: _0x425af8
    });
  }
  static async detail(p3779) {
    const v3420 = {
      KCTow: function (p3780, p3781) {
        return p3780 ^ p3781;
      },
      dFtuc: "taskPointStr 格式转换失败",
      cMTMU: function (p3782, p3783) {
        return p3782 < p3783;
      },
      sTLox: function (p3784, p3785) {
        return p3784 ^ p3785;
      }
    };
    let {
      taskId: _0x201c7c
    } = JSON.parse(p3779.request.body);
    const v3421 = await BuryPointTaskModel.detail(_0x201c7c);
    const v3422 = v3421.length ? v3421[v3420.KCTow(770750, 770750)] : null;
    const {
      projectId: _0x107599,
      taskPoint: _0x472a21
    } = v3422;
    let v3423 = await BuryPointProjectModel.getNameByProjectIdAndType(_0x107599, 1);
    const {
      name: _0x47f13e
    } = v3423[0];
    v3422.projectName = _0x47f13e;
    let v3424 = [];
    if (_0x472a21) {
      let v3425 = [];
      try {
        v3425 = JSON.parse(_0x472a21);
      } catch (_0x29010b) {
        console.error(v3420.dFtuc, _0x29010b);
      }
      for (let v3426 = 0; v3420.cMTMU(v3426, v3425.length); v3426++) {
        let v3427 = v3425[v3426].pointId;
        let v3428 = await BuryPointWarehouseModel.detailByPointId(v3427);
        const v3429 = {
          pointName: v3428.pointName,
          pointId: v3427,
          taskPointDes: v3425[v3426].taskPointDes
        };
        let v3430 = await BuryPointFieldModel.getListByFieldIdsAndWeType(v3428.fields, v3420.sTLox(713101, 713101));
        v3429.fieldList = v3430;
        v3424.push(v3429);
      }
    }
    v3422.points = v3424;
    p3779.response.status = 200;
    p3779.body = vRequire9.SUCCESS_200("success", v3422);
  }
  static async updateStatus(p3786) {
    let {
      taskId: _0x137db,
      taskStatus: _0x1797ed
    } = JSON.parse(p3786.request.body);
    const v3431 = await BuryPointTaskModel.updateStatus(_0x137db, _0x1797ed);
    p3786.response.status = 200;
    p3786.body = vRequire9.SUCCESS_200("success", v3431);
  }
  static async ["changeHandleMan"](p3787) {
    const v3432 = {
      nBhhp: function (p3788, p3789) {
        return p3788 ^ p3789;
      },
      lIJht: "success"
    };
    let {
      taskId: _0x4c98d7,
      handleManId: _0x454506,
      handleManName: _0x41c3d7
    } = JSON.parse(p3787.request.body);
    const v3433 = await BuryPointTaskModel.changeHandleMan(_0x4c98d7, _0x454506, _0x41c3d7);
    p3787.response.status = v3432.nBhhp(450764, 450564);
    p3787.body = vRequire9.SUCCESS_200(v3432.lIJht, v3433);
  }
}
class C30 {
  static async ["create"](p3790) {
    const v3434 = {
      BsaGZ: function (p3791, p3792) {
        return p3791 ^ p3792;
      },
      QETNj: function (p3793, p3794) {
        return p3793 === p3794;
      },
      SnpSE: "您好，社区版用户最多只能够创建一个团队，升级为企业版，则可以无限创建团队哦。",
      ipwSa: "创建信息失败，请求参数不能为空！"
    };
    let v3435 = p3790.request.body;
    if (v3435.title && v3435.author && v3435.content && v3435.category) {
      const v3436 = await TeamModel.getAllTeamList();
      let v3437 = v3434.BsaGZ(988284, 988284);
      v3436.forEach(p3795 => {
        v3437++;
      });
      if ((v3434.QETNj(global.eventInfo.purchaseCodeType, 0) || global.eventInfo.purchaseCodeType === 81) && v3437 >= 1) {
        p3790.response.status = v3434.BsaGZ(774167, 774539);
        p3790.body = vRequire9.ERROR_412(v3434.SnpSE);
        return;
      }
      let v3438 = await TeamModel.createTeam(v3435);
      let v3439 = await TeamModel.getTeamDetail(v3438.id);
      p3790.response.status = 200;
      p3790.body = vRequire9.SUCCESS_200("创建信息成功", v3439);
    } else {
      p3790.response.status = 412;
      p3790.body = vRequire9.ERROR_412(v3434.ipwSa);
    }
  }
  static async ["createNewTeam"](p3796) {
    const v3440 = {
      dazjk: function (p3797, p3798) {
        return p3797 ^ p3798;
      },
      ndpWD: function (p3799, p3800) {
        return p3799 ^ p3800;
      }
    };
    let v3441 = JSON.parse(p3796.request.body);
    const {
      teamName: _0x35c6aa
    } = v3441;
    const {
      userId: _0x498d4a
    } = p3796.user;
    const v3442 = {
      teamName: _0x35c6aa,
      leaderId: _0x498d4a,
      members: _0x498d4a,
      webMonitorIds: ""
    };
    await TeamModel.createTeam(v3442);
    p3796.response.status = v3440.dazjk(291869, 292053);
    p3796.body = vRequire9.SUCCESS_200("创建信息成功", v3440.ndpWD(716337, 716337));
  }
  static async ["deleteTeam"](p3801) {
    const v3443 = {
      eSzVf: function (p3802, p3803) {
        return p3802 ^ p3803;
      }
    };
    let v3444 = JSON.parse(p3801.request.body);
    const {
      id: _0x9de18d
    } = v3444;
    const v3445 = await TeamModel.getTeamDetail(_0x9de18d);
    const v3446 = v3445.webMonitorIds;
    const v3447 = await BuryPointProjectModel.getProjectListByWebMonitorIds(v3446, "");
    if (v3447.length <= v3443.eSzVf(180977, 180977)) {
      await TeamModel.deleteTeam(_0x9de18d);
      p3801.response.status = 200;
      p3801.body = vRequire9.SUCCESS_200("success", "");
    } else {
      p3801.response.status = 200;
      p3801.body = vRequire9.SUCCESS_200("success", "当前team下还有项目，无法执行删除操作！");
    }
  }
  static async ["moveProToTeam"](p3804) {
    const v3448 = {
      exDZc: function (p3805, p3806) {
        return p3805 + p3806;
      }
    };
    let v3449 = JSON.parse(p3804.request.body);
    const {
      showMoveMonitorId: _0x3484d3,
      chooseTeamId: _0x1c16f9
    } = v3449;
    const v3450 = await TeamModel.getTeamDetail(_0x1c16f9);
    const v3451 = v3448.exDZc(v3450.webMonitorIds + ",", _0x3484d3);
    await TeamModel.updateTeam(_0x1c16f9, {
      webMonitorIds: v3451
    });
    p3804.response.status = 200;
    p3804.body = vRequire9.SUCCESS_200("success", "");
  }
  static async ["getTeamList"](p3807) {
    const v3452 = {
      rzXGr: function (p3808, p3809) {
        return p3808 == p3809;
      },
      vUHAh: function (p3810, p3811) {
        return p3810 < p3811;
      }
    };
    const {
      userId: _0x773b80,
      userType: _0x2eac78
    } = p3807.user;
    const v3453 = await vRequire3.requestForTwoProtocol("post", accountInfo.centerServerDomain + "/wfCenter/getTeamListWithoutToken", {
      userId: _0x773b80,
      userType: _0x2eac78
    });
    if (!v3453) {
      p3807.response.status = 412;
      p3807.body = vRequire9.ERROR_412("团队列表获取失败！");
      return;
    }
    const v3454 = v3453.data;
    for (let v3455 = 0; v3452.vUHAh(v3455, v3454.length); v3455++) {
      const v3456 = v3454[v3455];
      const {
        leaderId: _0xd87e6e,
        members: _0x34e3f5,
        webMonitorIds: _0x10ebff
      } = v3456;
      const v3457 = await UserModel.getUserListByMembers(_0x34e3f5);
      v3456.members = v3457;
      v3457.forEach(p3812 => {
        if (v3452.rzXGr(p3812.userId, _0xd87e6e)) {
          v3456.leader = p3812;
          return false;
        }
      });
      const v3458 = await BuryPointProjectModel.getProjectListByWebMonitorIds(_0x10ebff, "");
      v3456.projects = v3458;
    }
    p3807.response.status = 200;
    p3807.body = vRequire9.SUCCESS_200("success", v3454);
  }
  static async getTeams(p3813) {
    const v3459 = {
      hgtqz: "团队列表获取失败！",
      tSvRx: function (p3814, p3815) {
        return p3814 ^ p3815;
      }
    };
    const {
      userId: _0x1a4af5,
      userType: _0x5d8d60
    } = p3813.user;
    const v3460 = await vRequire3.requestForTwoProtocol("post", MANAGE_API.GET_TEAMS, {
      userId: _0x1a4af5,
      userType: _0x5d8d60
    });
    if (!v3460) {
      p3813.response.status = 412;
      p3813.body = vRequire9.ERROR_412(v3459.hgtqz);
      return;
    }
    const v3461 = v3460.data;
    p3813.response.status = v3459.tSvRx(250793, 250721);
    p3813.body = vRequire9.SUCCESS_200("success", v3461);
  }
  static async addTeamMember(p3816) {
    const v3462 = {
      ujCKS: "success"
    };
    let v3463 = JSON.parse(p3816.request.body);
    const {
      id: _0x30651,
      members: _0x3cdcc3
    } = v3463;
    await TeamModel.updateTeam(_0x30651, {
      members: _0x3cdcc3
    });
    p3816.response.status = 200;
    p3816.body = vRequire9.SUCCESS_200(v3462.ujCKS, "");
  }
  static async updateTeamProjects(p3817) {
    const v3464 = {
      HEZmJ: "success"
    };
    let v3465 = JSON.parse(p3817.request.body);
    const {
      id: _0x1d0df6,
      webMonitorIds: _0x1e03c9
    } = v3465;
    await TeamModel.updateTeam(_0x1d0df6, {
      webMonitorIds: _0x1e03c9
    });
    p3817.response.status = 200;
    p3817.body = vRequire9.SUCCESS_200(v3464.HEZmJ, "");
  }
  static async ["getAllTeamList"](p3818) {
    const v3466 = await TeamModel.getAllTeamList();
    p3818.response.status = 200;
    p3818.body = vRequire9.SUCCESS_200("success", v3466);
  }
}
module.exports = {
  CommonUpLog: C,
  BuryPointAlarmController: C2,
  CommonUtil: C3,
  BuryPointAlarmMessageController: C4,
  BuryPointCircleSelectController: C5,
  BuryPointFieldController: C10,
  BuryPointScreenShotController: C16,
  BuryPointTaskController: C29,
  SdkReleaseController: C6,
  BuryPointUserBehaviorRelationController: C7,
  BuryPointTemplateController: C8,
  BuryPointVisualTrackingController: C9,
  BuryPointCardController: C15,
  Common: C11,
  CommonInitDataController: C12,
  ConfigController: C13,
  BuryPointTestController: C14,
  BuryPointWarehouseController: C24,
  FunnelStatisticController: C17,
  SysInfoController: C23,
  BuryPointProjectController: C18,
  TimerCalculateController: C19,
  BuryPointCardStatisticsController: C20,
  TimerStatisticController: C21,
  MessageController: C22,
  UserController: C26,
  WeHandleDataController: C27,
  RealTimeStatisticController: C25,
  FailController: C28,
  TeamController: C30
};
function f60(p3819) {
  const v3467 = {
    KwHDn: function (p3825, p3826) {
      return p3825 !== p3826;
    },
    ouirL: "length",
    nlrdQ: "action",
    TrBFC: "debu"
  };
  function f63(p3832) {
    function f66(p3843, p3844, p3845, p3846, p3847) {
      return f22(p3845 - -930, p3843);
    }
    if (typeof p3832 === "string") {
      return function (p3848) {}.constructor("while (true) {}").apply("counter");
    } else if (v3467.KwHDn(("" + p3832 / p3832)[v3467.ouirL], 1) || p3832 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debu" + "gger").call(v3467.nlrdQ);
    } else {
      (function () {
        return false;
      }).constructor(v3467.TrBFC + "gger").apply("stateObject");
    }
    function f70(p3864, p3865, p3866, p3867, p3868) {
      return f10(p3864 - -947, p3866);
    }
    f63(++p3832);
  }
  function f71(p3869, p3870, p3871, p3872, p3873) {
    return f22(p3869 - 930, p3871);
  }
  try {
    if (p3819) {
      return f63;
    } else {
      f63(0);
    }
  } catch (_0x30199d) {}
}