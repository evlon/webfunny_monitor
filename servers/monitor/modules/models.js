
const vRequire = require("../config/db");
const vRequire2 = require("../config/node_clickhouse");
const vRequire3 = require("../util/utils");
const vRequire4 = require("../util/utils");
const vRequire5 = require("geoip-lite");
const vRequire6 = require("../../../config/log");
const vRequire7 = require("../util/commonSql");
const {
  UPLOAD_TYPE,
  PERF_KEYS
} = require("../config/consts");
const vRequire8 = require("../schema/schemaLogList");
const vRequire9 = require("../config/AccountConfig");
const {
  accountInfo
} = vRequire9;
const vRequire10 = require("source-map");
const fs2 = require("fs");
const vRequire11 = require("path");
const vRequire12 = require("node-fetch");
const v22 = new vRequire2("../schema/HttpLogInfo");
class C {
  static async createHttpLogInfo(p96) {
    const v23 = {
      rmNGF: function (p97, p98) {
        return p97 == p98;
      },
      xKEij: function (p99, p100) {
        return p99 + p100;
      },
      SURkE: function (p101, p102) {
        return p101 + p102;
      },
      ElIjP: "`, ",
      kLokx: "createdAt",
      XxAiX: "updatedAt",
      BtVoo: "yyyy-MM-dd hh:mm:ss",
      TWGEy: function (p103, p104) {
        return p103 ^ p104;
      },
      FlEOg: "happenMinute",
      oDoVX: function (p105, p106) {
        return p105 != p106;
      }
    };
    let v24 = "";
    let v25 = "";
    const v26 = ["uploadType", "happenTime", "happenDate", "happenHour", "happenMinute", "webMonitorId", "customerKey", "sessionId", "simpleUrl", "completeUrl", "userId", "firstUserParam", "secondUserParam", "createdAt", "updatedAt", "id", "method", "httpUrl", "simpleHttpUrl", "status", "statusText", "statusResult", "loadTime", "headerText", "requestText", "responseText"];
    v26.forEach((p107, p108) => {
      if (v23.rmNGF(p108, v26.length - 1)) {
        v24 += v23.xKEij(v23.SURkE("`", p107), "`");
        let v27 = p96[p107];
        if (v27 != undefined) {
          v25 += "'" + v27 + "'";
        } else {
          v25 += "DEFAULT";
        }
      } else {
        v24 += "`" + p107 + v23.ElIjP;
        let v28 = p96[p107];
        switch (p107) {
          case "id":
            v28 = new Date().getTime() + vRequire3.getUuid();
            break;
          case v23.kLokx:
          case v23.XxAiX:
            v28 = new Date().Format(v23.BtVoo);
            break;
          case "happenHour":
            v28 = p96.happenDate ? p96.happenDate.substring(v23.TWGEy(529203, 529208), 13) : new Date().Format("hh");
            break;
          case v23.FlEOg:
            v28 = p96.happenDate ? p96.happenDate.substring(14, 16) : new Date().Format("mm");
            break;
          default:
            break;
        }
        if (v23.oDoVX(v28, undefined)) {
          v25 += "'" + v28 + "', ";
        } else {
          v25 += "DEFAULT, ";
        }
      }
    });
    const v29 = p96.webMonitorId + "HttpLogInfo";
    return await v22.create(p96, v29);
  }
  static async createHttpLogInfos(p109) {
    const v30 = {
      WhaCy: function (p110, p111) {
        return p110 === p111;
      },
      xYRyK: function (p112, p113) {
        return p112 + p113;
      },
      dyPKI: "HttpLogInfo",
      vzyFg: function (p114, p115) {
        return p114 + p115;
      },
      VwzPa: ") VALUES "
    };
    if (v30.WhaCy(p109.length, 0)) {
      return;
    }
    const v31 = p109[0];
    const v32 = v31.webMonitorId;
    const v33 = v30.xYRyK(v32, v30.dyPKI);
    const {
      keys: _0x17d5a5,
      valueSql: _0x5a90d9
    } = vRequire7.handleStructureSql(v22.schema.Columns.structure, p109);
    let v34 = v30.vzyFg("INSERT INTO " + v33 + " (" + _0x17d5a5, v30.VwzPa) + _0x5a90d9;
    return await v22.execSql(v34);
  }
  static async getHttpLogsByUser(p116, p117, p118) {
    const v35 = {
      kqCBN: "select * from ",
      MrbDY: " and "
    };
    const {
      timeScope: _0x5b3f4f,
      webMonitorId: _0x3c60cf
    } = p118;
    let v36 = v35.kqCBN + vRequire7.setTableName("HttpLogInfo", _0x5b3f4f, _0x3c60cf) + " where " + p116 + v35.MrbDY + p117;
    return await v22.query(v36, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async getHttpLogCountByDay(p119, p120) {
    const v37 = {
      BJyZD: " 00:00:00"
    };
    const v38 = vRequire3.addDays(p120);
    const v39 = v38 + v37.BJyZD;
    const v40 = v38 + " 23:59:59";
    const v41 = p119 + "HttpLogInfo";
    let v42 = "select count(dataId) as count from " + v41 + " where happenDate>='" + v39 + "' and happenDate<='" + v40 + "' ";
    let v43 = await v22.query(v42, {
      type: v22.QueryTypes.SELECT
    });
    return v43;
  }
  static async getAvgLoadTimeByDay(p121, p122) {
    const v44 = {
      vSeAM: " 00:00:00",
      HSSuv: function (p123, p124) {
        return p123 + p124;
      }
    };
    const v45 = vRequire3.addDays(p122);
    const v46 = v45 + v44.vSeAM;
    const v47 = v45 + " 23:59:59";
    const v48 = v44.HSSuv(p121, "HttpLogInfo");
    let v49 = "select avg(loadTime) as loadTime from " + v48 + " where happenDate>='" + v46 + "' and happenDate<='" + v47 + "' ";
    let v50 = await v22.query(v49, {
      type: v22.QueryTypes.SELECT
    });
    return v50;
  }
  static async deleteHttpLogInfoFifteenDaysAgo(p125) {
    const v51 = vRequire3.addDays(0 - p125) + " 00:00:00";
    var v52 = "delete from HttpLogInfo where createdAt<'" + v51 + "'";
    return await v22.query(v52, {
      type: v22.QueryTypes.DELETE
    });
  }
  static async ["getHttpCountByMinute"](p126) {
    const v53 = {
      QJiTa: "WHERE DATE_FORMAT(NOW() - INTERVAL 30 MINUTE, '%Y-%m-%d %T') <= createdAt GROUP BY minutes"
    };
    let v54 = "SELECT DATE_FORMAT(createdAt,'%Y-%m-%d %H:%i') AS minutes, count(dataId) AS count FROM HttpLogInfo " + v53.QJiTa;
    return await v22.query(v54, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async calculateHttpLogCountForSecByDay(p127, p128, p129) {
    const v55 = {
      qkwFv: function (p130, p131) {
        return p130 * p131;
      },
      fdxjH: function (p132, p133) {
        return p132 ^ p133;
      },
      wuUWT: " 23:59:59"
    };
    const {
      min: _0x2957c1,
      max: _0x44cecf
    } = p129;
    const v56 = _0x2957c1 * 1000;
    const v57 = v55.qkwFv(_0x44cecf, v55.fdxjH(271341, 270341));
    const v58 = vRequire3.addDays(p128);
    const v59 = v58 + " 00:00:00";
    const v60 = v58 + v55.wuUWT;
    let v61 = vRequire7.setTableName("HttpLogInfo", p128, p127);
    let v62 = "select count(dataId) as count from " + v61 + " WHERE happenDate>='" + v59 + "' and happenDate<='" + v60 + "' and loadTime<" + v57 + " and loadTime>=" + v56;
    return await v22.query(v62, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async calculateHttpLogCountForSecByHour(p134, p135, p136, p137, p138) {
    const v63 = {
      kAiof: "HttpLogInfo",
      NHmTK: " 23:00:00",
      lIajc: function (p139, p140) {
        return p139 + p140;
      },
      RekKL: function (p141, p142) {
        return p141 + p142;
      },
      NpVcl: " WHERE happenHour='"
    };
    const v64 = p137 * 1000;
    const v65 = p138 * 1000;
    const v66 = vRequire3.addDays(-1);
    let v67 = vRequire7.setTableName(v63.kAiof, 0, p134);
    if (p135 === v66 + v63.NHmTK) {
      v67 = vRequire7.setTableName("HttpLogInfo", 1, p134);
    }
    const v68 = p135.substring(0, 13);
    let v69 = v63.lIajc(v63.RekKL("select count(dataId) as count from " + v67 + v63.NpVcl, v68) + "' and loadTime<" + v65 + " and loadTime>=", v64);
    return await v22.query(v69, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async ["calculateHttpLoadTimeByHour"](p143, p144, p145) {
    const v70 = {
      Cgjto: " 23:00:00",
      xgOhV: "HttpLogInfo",
      HnKTr: function (p146, p147) {
        return p146 ^ p147;
      }
    };
    const v71 = vRequire3.addDays(-1);
    let v72 = vRequire7.setTableName("HttpLogInfo", 0, p143);
    if (p144 === v71 + v70.Cgjto) {
      v72 = vRequire7.setTableName(v70.xgOhV, v70.HnKTr(721965, 721964), p143);
    }
    const v73 = p144.substring(0, 13);
    let v74 = "select avg(loadTime) as loadedTime from " + v72 + " WHERE happenHour='" + v73 + "' and loadTime>0";
    return await v22.query(v74, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async ["calculateHttpTotalCountByHour"](p148, p149, p150) {
    const v75 = {
      PtNKP: function (p151, p152) {
        return p151 ^ p152;
      },
      SOKPc: function (p153, p154) {
        return p153 + p154;
      }
    };
    const v76 = vRequire3.addDays(-v75.PtNKP(716782, 716783));
    let v77 = vRequire7.setTableName("HttpLogInfo", 0, p148);
    if (p149 === v75.SOKPc(v76, " 23:00:00")) {
      v77 = vRequire7.setTableName("HttpLogInfo", 1, p148);
    }
    const v78 = p149.substring(0, 13);
    let v79 = v75.SOKPc("select count(dataId) as count from " + v77 + " WHERE happenHour='", v78) + "' ";
    return await v22.query(v79, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async calculateHttpCountForUrlByHour(p155, p156, p157) {
    const v80 = {
      kxNnP: function (p158, p159) {
        return p158 ^ p159;
      },
      ummcq: function (p160, p161) {
        return p160 + p161;
      },
      MzMXe: function (p162, p163) {
        return p162 + p163;
      },
      UYMIj: function (p164, p165) {
        return p164 + p165;
      }
    };
    const v81 = vRequire3.addDays(-1);
    let v82 = vRequire7.setTableName("HttpLogInfo", 0, p155);
    if (p156 === v81 + " 23:00:00") {
      v82 = vRequire7.setTableName("HttpLogInfo", v80.kxNnP(791012, 791013), p155);
    }
    const v83 = p156.substring(v80.kxNnP(167818, 167818), 13);
    let v84 = v80.ummcq(v80.MzMXe(v80.UYMIj("select simpleHttpUrl as showName, count(simpleHttpUrl) as count, avg(loadTime) as loadedTime from ", v82) + " WHERE happenHour='", v83), "' group by simpleHttpUrl order by count desc limit 20");
    return await v22.query(v84, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async getHttpCountForLoadTimeGroupByDay(p166) {
    const v85 = {
      sCBYg: function (p167, p168) {
        return p167 + p168;
      },
      GpDzN: " where uploadType='"
    };
    const v86 = p166.webMonitorId + "InfoCountByDay";
    let v87 = v85.sCBYg("SELECT dayName as day, dayCount as count from " + v86 + v85.GpDzN + p166.uploadType, "' ORDER BY day");
    return await v22.query(v87, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async getHttpUrlListForLoadTime(p169) {
    const v88 = {
      oSsaC: function (p170, p171) {
        return p170 + p171;
      },
      WfoNz: function (p172, p173) {
        return p172 - p173;
      },
      IsNeG: function (p174, p175) {
        return p174 ^ p175;
      },
      ZOgLW: function (p176, p177) {
        return p176 - p177;
      },
      kVhMT: function (p178, p179) {
        return p178 ^ p179;
      },
      AYjpn: ":59:59",
      CsSCB: " loadTime>=5000 and loadTime<10000 ",
      zKLhR: " loadTime>=0 and loadTime<1000 ",
      ACmbL: function (p180, p181) {
        return p180 + p181;
      },
      VdouH: function (p182, p183) {
        return p182 + p183;
      },
      ajCKJ: function (p184, p185) {
        return p184 + p185;
      },
      hHlcb: "HttpLogInfo"
    };
    const {
      searchType: _0x20d6bc,
      day: _0x4c7b10,
      webMonitorId: _0x5fc706,
      timeHour: _0x40291f
    } = p169;
    const v89 = _0x40291f.split(":")[0];
    const v90 = _0x40291f.split(":")[1];
    const v91 = v88.oSsaC(vRequire3.addDays(v88.WfoNz(v88.IsNeG(509577, 509577), _0x4c7b10)) + " " + v89 + ":" + v90, ":00");
    const v92 = vRequire3.addDays(v88.ZOgLW(v88.kVhMT(480390, 480390), _0x4c7b10)) + " " + v89 + v88.AYjpn;
    let v93 = "";
    switch (_0x20d6bc) {
      case "e":
        v93 = " loadTime>=30000 and loadTime<1000000 ";
        break;
      case "d":
        v93 = " loadTime>=10000 and loadTime<30000 ";
        break;
      case "c":
        v93 = v88.CsSCB;
        break;
      case "b":
        v93 = " loadTime>=1000 and loadTime<5000 ";
        break;
      case "a":
        v93 = v88.zKLhR;
        break;
    }
    v93 = v88.ACmbL(v88.VdouH(v88.ajCKJ(" happenDate>='", v91), "' and happenDate<= '") + v92, "' and ") + v93;
    const v94 = vRequire7.setTableName(v88.hHlcb, _0x4c7b10, _0x5fc706);
    let v95 = "SELECT CAST(simpleHttpUrl AS char) as simpleHttpUrl, count(simpleHttpUrl) as count, avg(loadTime) as loadedTime from " + v94 + " where " + v93 + " GROUP BY simpleHttpUrl order by count desc limit 20";
    return await v22.query(v95, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async ["getHttpUrlUserCountForLoadTime"](p186) {
    const v96 = {
      jnBZr: function (p187, p188) {
        return p187 ^ p188;
      },
      KioZp: function (p189, p190) {
        return p189 + p190;
      },
      eRoid: function (p191, p192) {
        return p191 + p192;
      },
      nfYiK: function (p193, p194) {
        return p193 - p194;
      },
      CNuzp: " loadTime>=10000 and loadTime<30000 ",
      MrXuI: " loadTime>=5000 and loadTime<10000 ",
      ksdQn: function (p195, p196) {
        return p195 + p196;
      },
      HmDCN: " and happenDate>='",
      uSZdN: "' and happenDate<= '",
      OqGWV: function (p197, p198) {
        return p197 + p198;
      },
      OFKMq: function (p199, p200) {
        return p199 + p200;
      },
      uiubM: function (p201, p202) {
        return p201 + p202;
      },
      cDcuP: ") as count from ",
      ogVhr: " where simpleHttpUrl='"
    };
    const {
      searchType: _0x5289a6,
      day: _0x5bbe9f,
      webMonitorId: _0x1096f4,
      simpleHttpUrl: _0xd574af,
      timeHour: _0x485b29
    } = p186;
    const v97 = await C9.getUserIdType(_0x1096f4);
    const v98 = _0x485b29.split(":")[v96.jnBZr(671535, 671535)];
    const v99 = _0x485b29.split(":")[1];
    const v100 = v96.KioZp(v96.KioZp(v96.eRoid(vRequire3.addDays(v96.nfYiK(0, _0x5bbe9f)), " ") + v98 + ":", v99), ":00");
    const v101 = vRequire3.addDays(0 - _0x5bbe9f) + " " + v98 + ":59:59";
    let v102 = "";
    switch (_0x5289a6) {
      case "e":
        v102 = " loadTime>=30000 and loadTime<1000000 ";
        break;
      case "d":
        v102 = v96.CNuzp;
        break;
      case "c":
        v102 = v96.MrXuI;
        break;
      case "b":
        v102 = " loadTime>=1000 and loadTime<5000 ";
        break;
      case "a":
        v102 = " loadTime>=0 and loadTime<1000 ";
        break;
    }
    v102 = v96.ksdQn(v96.HmDCN + v100 + v96.uSZdN + v101, "' and ") + v102;
    const v103 = vRequire7.setTableName("HttpLogInfo", _0x5bbe9f, _0x1096f4);
    let v104 = v96.OqGWV(v96.OFKMq(v96.uiubM("SELECT count(distinct " + v97 + v96.cDcuP, v103) + v96.ogVhr, _0xd574af) + "' ", v102);
    return await v22.query(v104, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async ["getPagesByHttpUrlForLoadTime"](p203) {
    const v105 = {
      ydXkl: function (p204, p205) {
        return p204 ^ p205;
      },
      sGFuv: function (p206, p207) {
        return p206 + p207;
      },
      HhoSY: function (p208, p209) {
        return p208 + p209;
      },
      DxysN: function (p210, p211) {
        return p210 - p211;
      },
      tItOL: function (p212, p213) {
        return p212 + p213;
      },
      xyVRo: ":59:59",
      Przxf: " loadTime>=30000 and loadTime<1000000 ",
      NkejV: " loadTime>=10000 and loadTime<30000 ",
      tSfDw: " where simpleHttpUrl='",
      uaRBj: " group by simpleUrl"
    };
    const {
      searchType: _0x128c3e,
      day: _0x63fcb5,
      webMonitorId: _0x1b0733,
      simpleHttpUrl: _0x4e9bd7,
      timeHour: _0x394779
    } = p203;
    const v106 = _0x394779.split(":")[0];
    const v107 = _0x394779.split(":")[v105.ydXkl(126423, 126422)];
    const v108 = v105.sGFuv(v105.HhoSY(vRequire3.addDays(v105.DxysN(0, _0x63fcb5)) + " ", v106), ":") + v107 + ":00";
    const v109 = v105.tItOL(v105.sGFuv(vRequire3.addDays(v105.ydXkl(853596, 853596) - _0x63fcb5), " ") + v106, v105.xyVRo);
    let v110 = "";
    switch (_0x128c3e) {
      case "e":
        v110 = v105.Przxf;
        break;
      case "d":
        v110 = v105.NkejV;
        break;
      case "c":
        v110 = " loadTime>=5000 and loadTime<10000 ";
        break;
      case "b":
        v110 = " loadTime>=1000 and loadTime<5000 ";
        break;
      case "a":
        v110 = " loadTime>=0 and loadTime<1000 ";
        break;
    }
    v110 = v105.tItOL(v105.sGFuv(" and happenDate>='" + v108, "' and happenDate<= '") + v109 + "' and ", v110);
    const v111 = vRequire7.setTableName("HttpLogInfo", _0x63fcb5, _0x1b0733);
    let v112 = v105.HhoSY(v105.tItOL("SELECT simpleUrl, count(simpleUrl) as count from " + v111 + v105.tSfDw + _0x4e9bd7 + "' ", v110), v105.uaRBj);
    return await v22.query(v112, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async getHttpUrlCountListByHour(p214) {
    const v113 = {
      gGMQs: function (p215, p216) {
        return p215 + p216;
      },
      TwRlg: function (p217, p218) {
        return p217 ^ p218;
      },
      FRmdi: function (p219, p220) {
        return p219 + p220;
      },
      hRNVN: function (p221, p222) {
        return p221 + p222;
      },
      JVdsW: function (p223, p224) {
        return p223 + p224;
      },
      SQjMp: "InfoCountByHour",
      hHeNX: " WHERE hourName>='"
    };
    const {
      searchType: _0x2f8e67,
      day = 0,
      webMonitorId: _0x1df685,
      simpleHttpUrl: _0x3cd1f2
    } = p214;
    let v114 = "";
    const v115 = vRequire3.addDays(0 - day);
    const v116 = v115.substring(5) + " 00";
    const v117 = v113.gGMQs(v115.substring(v113.TwRlg(491479, 491474)), " 23");
    switch (_0x2f8e67) {
      case "e":
        v114 = " and uploadType='" + UPLOAD_TYPE.HTTP_HOUR_COUNT_E + "' ";
        break;
      case "d":
        v114 = v113.FRmdi(" and uploadType='" + UPLOAD_TYPE.HTTP_HOUR_COUNT_D, "' ");
        break;
      case "c":
        v114 = " and uploadType='" + UPLOAD_TYPE.HTTP_HOUR_COUNT_C + "' ";
        break;
      case "b":
        v114 = v113.hRNVN(" and uploadType='" + UPLOAD_TYPE.HTTP_HOUR_COUNT_B, "' ");
        break;
      case "a":
        v114 = " and uploadType='" + UPLOAD_TYPE.HTTP_HOUR_COUNT_A + "' ";
        break;
    }
    const v118 = v113.JVdsW(_0x1df685, v113.SQjMp);
    const v119 = v113.gGMQs("SELECT hourName as hour, hourCount as count from ", v118) + v113.hHeNX + v116 + "' and hourName<='" + v117 + "' " + v114;
    return await v22.query(v119, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async getHttpUrlCountForHourByMinutes(p225) {
    const v120 = {
      BlIAt: function (p226, p227) {
        return p226 ^ p227;
      },
      hafdp: function (p228, p229, p230) {
        return p228(p229, p230);
      },
      ZbSxf: "hh:59:59",
      DtvSa: " and loadTime>=10000 and loadTime<30000 ",
      dMkCj: " and loadTime>=0 and loadTime<1000 ",
      tYilM: function (p231, p232) {
        return p231 + p232;
      },
      iaUXJ: "FROM ",
      uVGVS: "WHERE happenDate>='",
      zDccl: " and DATE_FORMAT('"
    };
    const {
      searchType: _0x489c79,
      day = v120.BlIAt(437750, 437750),
      webMonitorId: _0x4bb69b,
      timeHour: _0x348543
    } = p225;
    const v121 = vRequire3.addDays(v120.BlIAt(537161, 537161) - day);
    const v122 = v121 + " " + new Date(v120.hafdp(parseInt, _0x348543, 10)).Format("hh:00:00");
    const v123 = v121 + " " + new Date(parseInt(_0x348543, 10)).Format(v120.ZbSxf);
    const v124 = vRequire7.setTableName("HttpLogInfo", day, _0x4bb69b);
    let v125 = "";
    switch (_0x489c79) {
      case "e":
        v125 = " and loadTime>=30000 and loadTime<1000000 ";
        break;
      case "d":
        v125 = v120.DtvSa;
        break;
      case "c":
        v125 = " and loadTime>=5000 and loadTime<10000 ";
        break;
      case "b":
        v125 = " and loadTime>=1000 and loadTime<5000 ";
        break;
      case "a":
        v125 = v120.dMkCj;
        break;
    }
    const v126 = v120.tYilM(v120.tYilM(v120.tYilM(v120.tYilM("SELECT DATE_FORMAT(happenDate,'%Y-%m-%d %H:%i') AS minutes, count(dataId) AS count " + v120.iaUXJ, v124), " ") + v120.uVGVS + v122, "' and happenDate<='") + v123 + "' " + v125 + v120.zDccl + v123, "' - INTERVAL 60 MINUTE, '%Y-%m-%d %T') <= happenDate ") + "GROUP BY minutes";
    return await v22.query(v126, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async getHttpLoadTimePercent(p233) {
    const v127 = {
      vYMki: function (p234, p235) {
        return p234 - p235;
      },
      lUDVH: function (p236, p237) {
        return p236 ^ p237;
      },
      ZBKBB: " and dayName='"
    };
    const v128 = vRequire3.addDays(v127.vYMki(v127.lUDVH(911460, 911460), p233.timeSize));
    const v129 = p233.webMonitorId + "InfoCountByDay";
    let v130 = "SELECT uploadType, dayCount from " + v129 + " where uploadType in " + p233.uploadTypes + v127.ZBKBB + v128 + "'";
    return await v22.query(v130, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async getHttpLoadTimePercentSimple(p238, p239) {
    const v131 = {
      KAiZO: "HttpLogInfo"
    };
    const v132 = vRequire3.addDays(p239);
    const v133 = v132 + " 00:00:00";
    const v134 = v132 + " 23:59:59";
    const v135 = p238 + v131.KAiZO;
    let v136 = "select loadTimeForSecond as uploadType, count(dataId) as dayCount from " + v135 + " WHERE happenDate>='" + v133 + "' AND happenDate<'" + v134 + "' group by loadTimeForSecond ";
    return await v22.query(v136, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async getLoadTimeListByUrl(p240, p241) {
    const v137 = vRequire3.addDays(p241);
    const v138 = v137 + " 00:00:00";
    const v139 = v137 + " 23:59:59";
    const v140 = p240 + "HttpLogInfo";
    let v141 = "select simpleHttpUrl, count(dataId) as count, avg(loadTime) as loadTime from " + v140 + " WHERE happenDate>='" + v138 + "' AND happenDate<'" + v139 + "' group by simpleHttpUrl order by loadTime desc limit 10";
    return await v22.query(v141, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async getHttpLoadTimeListByUrl(p242) {
    const v142 = {
      QGsQd: "select simpleHttpUrl, count(simpleHttpUrl) as count, avg(loadTime) as loadedTime from ",
      zufMJ: " where statusResult='response' GROUP BY simpleUrl ORDER BY count desc limit 10"
    };
    const {
      webMonitorId: _0x3e1127,
      timeSize: _0x3005d8
    } = p242;
    let v143 = v142.QGsQd + vRequire7.setTableName("HttpLogInfo", _0x3005d8, _0x3e1127) + v142.zufMJ;
    return await v22.query(v143, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async getHttpCountInRealTimeByMinute(p243, p244, p245) {
    const v144 = {
      HzrIY: function (p246, p247) {
        return p246 + p247;
      },
      jmgOP: function (p248, p249) {
        return p248 + p249;
      },
      xYnmA: "select count(dataId) as httpCount from "
    };
    let v145 = v144.HzrIY(v144.HzrIY(v144.HzrIY(v144.HzrIY(v144.jmgOP(v144.xYnmA + vRequire7.setTableName("HttpLogInfo", 0, p243), " WHERE happenDate>='"), p244), "' AND happenDate<'"), p245), "' and statusResult='response'");
    return await v22.query(v145, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async getHttpCountInRealTimeByEveryMinute(p250, p251, p252) {
    const v146 = {
      pVbTe: function (p253, p254) {
        return p253 + p254;
      },
      ssWHK: "' AND happenDate<'",
      yVNmY: "' and statusResult='response' group by time"
    };
    let v147 = v146.pVbTe(v146.pVbTe("select DATE_FORMAT(happenDate, '%H:%i') AS time, count(dataId) as httpCount from " + vRequire7.setTableName("HttpLogInfo", 0, p250) + " WHERE happenDate>='" + p251 + v146.ssWHK, p252), v146.yVNmY);
    return await v22.query(v147, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async ["getHttpLoadTimeInRealTimeByMinute"](p255, p256, p257) {
    const v148 = {
      nDMWY: function (p258, p259) {
        return p258 ^ p259;
      },
      IIKYS: "' AND happenDate<'"
    };
    let v149 = "select IFNULL(avg(loadTime),0) as loadedTime from " + vRequire7.setTableName("HttpLogInfo", v148.nDMWY(172863, 172863), p255) + " WHERE happenDate>='" + p256 + v148.IIKYS + p257 + "' and statusResult='response'";
    return await v22.query(v149, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async getHttpLoadTimeInRealTimeByEveryMinute(p260, p261, p262) {
    const v150 = {
      kHUQL: function (p263, p264) {
        return p263 + p264;
      }
    };
    let v151 = v150.kHUQL(v150.kHUQL(v150.kHUQL("select DATE_FORMAT(happenDate, '%H:%i') AS time, avg(loadTime) as loadedTime from ", vRequire7.setTableName("HttpLogInfo", 0, p260)) + " WHERE happenDate>='", p261), "' AND happenDate<'") + p262 + "' and statusResult='response' group by time";
    return await v22.query(v151, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async getTotalCountAndHttpLoadTime(p265, p266) {
    const v152 = {
      rKUad: " 00:00:00",
      XVXmK: function (p267, p268) {
        return p267 + p268;
      }
    };
    const v153 = vRequire3.addDays(p266);
    const v154 = v153 + v152.rKUad;
    const v155 = v152.XVXmK(v153, " 23:59:59");
    const v156 = p265 + "HttpLogInfo";
    let v157 = "select COUNT(dataId) as count, AVG(loadTime) as loadTime from " + v156 + " as h where happenDate>='" + v154 + "' AND happenDate<'" + v155 + "' and h.loadTime<=30000 ";
    return await v22.query(v157, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async ["getTotalCountInSeconds"](p269, p270, p271) {
    const v158 = {
      meBhO: function (p272, p273) {
        return p272 + p273;
      },
      xYvKy: " 00:00:00"
    };
    const v159 = vRequire3.addDays(p270);
    const v160 = v158.meBhO(v159, v158.xYvKy);
    const v161 = v158.meBhO(v159, " 23:59:59");
    const v162 = p269 + "HttpLogInfo";
    let v163 = "select COUNT(dataId) as count from " + v162 + " where happenDate>='" + v160 + "' AND happenDate<'" + v161 + "' and loadTime<=" + p271;
    return await v22.query(v163, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async getHttpLogOverviewByTimeType(p274, p275, p276, p277) {
    const v164 = p275 + " 00:00:00";
    const v165 = p276 + " 23:59:59";
    const v166 = p274 + "HttpLogInfo";
    let v167 = "select \n    " + p277 + ",\n    avg(loadTime) as loadTimeAvg,\n    count(dataId) as requestCount \n    from " + v166 + " where happenDate>='" + v164 + "' and happenDate<='" + v165 + "' group by " + p277;
    return await v22.query(v167, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async getHttpLogOverviewByTimeTypeForDay(p278, p279, p280) {
    const v168 = p279 + " 00:00:00";
    const v169 = p280 + " 23:59:59";
    const v170 = p278 + "HttpLogInfo";
    let v171 = "select \n    formatDateTime(happenDate , '%Y-%m-%d') as dayName,\n    avg(loadTime) as loadTimeAvg,\n    count(dataId) as requestCount \n    from " + v170 + " where happenDate>='" + v168 + "' and happenDate<='" + v169 + "' group by dayName";
    return await v22.query(v171, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async getHttpLogDataForUrlByDay(p281, p282) {
    const v172 = {
      gcAWu: function (p283, p284) {
        return p283 + p284;
      }
    };
    const v173 = vRequire3.addDays(p282);
    const v174 = v173 + " 00:00:00";
    const v175 = v172.gcAWu(v173, " 23:59:59");
    const v176 = p281 + "HttpLogInfo";
    let v177 = "select \n    simpleHttpUrl,\n    avg(loadTime) as loadTime,\n    count(dataId) as count \n    from " + v176 + " as h where happenDate>='" + v174 + "' and happenDate<='" + v175 + "' and h.loadTime<=30000 group by simpleHttpUrl limit 1000";
    return await v22.query(v177, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async ["getTotalCountInSecondsForUrl"](p285, p286, p287) {
    const v178 = {
      PuQWi: " 00:00:00",
      XFIoz: " 23:59:59",
      peOGw: "HttpLogInfo"
    };
    const v179 = vRequire3.addDays(p286);
    const v180 = v179 + v178.PuQWi;
    const v181 = v179 + v178.XFIoz;
    const v182 = p285 + v178.peOGw;
    let v183 = "select \n    simpleHttpUrl,\n    count(dataId) as count \n    from " + v182 + " where happenDate>='" + v180 + "' and happenDate<='" + v181 + "' and loadTime<=" + p287 + " group by simpleHttpUrl limit 1000";
    return await v22.query(v183, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async getHttpPerfDataForMap(p288, p289, p290) {
    const v184 = {
      AVhYf: function (p291, p292) {
        return p291 + p292;
      },
      lNIIj: " 23:59:59"
    };
    const v185 = vRequire3.addDays(p289);
    const v186 = v184.AVhYf(v185, " 00:00:00");
    const v187 = v185 + v184.lNIIj;
    let v188 = p288 + "HttpLogInfo";
    let v189 = "select " + p290 + " as name, avg(loadTime) as value, count(dataId) as samplingPv from " + v188 + " where happenDate>='" + v186 + "' and happenDate<='" + v187 + "' GROUP BY " + p290;
    return await v22.query(v189, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async ["getHttpLoadTimeForGroup"](p293, p294) {
    const v190 = {
      EFkaO: function (p295, p296) {
        return p295 + p296;
      }
    };
    const v191 = vRequire3.addDays(p294);
    const v192 = v191 + " 00:00:00";
    const v193 = v191 + " 23:59:59";
    let v194 = v190.EFkaO(p293, "HttpLogInfo");
    let v195 = "select loadTimeForSecond, count(dataId) as count from " + v194 + " where happenDate>='" + v192 + "' and happenDate<='" + v193 + "' GROUP BY loadTimeForSecond";
    return await v22.query(v195, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async getHttpLoadTimeForGroupByTime(p297, p298, p299) {
    const v196 = {
      mbpWp: "HttpLogInfo"
    };
    let v197 = p297 + v196.mbpWp;
    let v198 = "select loadTimeForSecond, count(dataId) as count from " + v197 + " where " + p299 + " and " + p298 + " GROUP BY loadTimeForSecond";
    return await v22.query(v198, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async ["getOperatorForGroup"](p300, p301) {
    const v199 = {
      rVxgA: "HttpLogInfo"
    };
    const v200 = vRequire3.addDays(p301);
    const v201 = v200 + " 00:00:00";
    const v202 = v200 + " 23:59:59";
    let v203 = p300 + v199.rVxgA;
    let v204 = "select operators, count(dataId) as count, avg(loadTime) as loadTime from " + v203 + " where happenDate>='" + v201 + "' and happenDate<='" + v202 + "' GROUP BY operators";
    return await v22.query(v204, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async getMethodForGroup(p302, p303) {
    const v205 = vRequire3.addDays(p303);
    const v206 = v205 + " 00:00:00";
    const v207 = v205 + " 23:59:59";
    let v208 = p302 + "HttpLogInfo";
    let v209 = "select method, count(dataId) as count, avg(loadTime) as loadTime from " + v208 + " where happenDate>='" + v206 + "' and happenDate<='" + v207 + "' GROUP BY method";
    return await v22.query(v209, {
      type: v22.QueryTypes.SELECT
    });
  }
  static async getLogCountForDay(p304, p305) {
    const v210 = {
      GOVnx: " 23:59:59",
      XrPFu: "HttpLogInfo"
    };
    const v211 = vRequire3.addDays(p305);
    const v212 = v211 + " 00:00:00";
    const v213 = v211 + v210.GOVnx;
    const v214 = vRequire7.setTableName(v210.XrPFu, p305, p304);
    let v215 = "select count(dataId) as count from " + v214 + " where happenDate>='" + v212 + "' and happenDate<='" + v213 + "'";
    return await v22.query(v215, {
      type: v22.QueryTypes.SELECT
    });
  }
}
const v216 = new vRequire2("../schema/customerPvLeave");
class C2 {
  static async ["createCustomerPvLeave"](p306) {
    const v217 = {
      TKFbw: function (p307, p308) {
        return p307 ^ p308;
      },
      fVhZY: function (p309, p310) {
        return p309 != p310;
      },
      AVUMk: "DEFAULT",
      qTKvT: "updatedAt",
      XEsvw: "happenHour",
      mdeBs: function (p311, p312) {
        return p311 ^ p312;
      },
      Scjlo: function (p313, p314) {
        return p313 ^ p314;
      },
      ayaDg: "happenMinute",
      Ecxfx: "CustomerPvLeave"
    };
    let v218 = "";
    let v219 = "";
    const v220 = ["leaveType", "uploadType", "happenDate", "happenHour", v217.ayaDg, "webMonitorId", "sessionId", "customerKey", "simpleUrl", "id", "createdAt", "updatedAt"];
    v220.forEach((p315, p316) => {
      if (p316 == v220.length - v217.TKFbw(856074, 856075)) {
        v218 += "`" + p315 + "`";
        let v221 = p306[p315];
        if (v217.fVhZY(v221, undefined)) {
          v219 += "'" + v221 + "'";
        } else {
          v219 += v217.AVUMk;
        }
      } else {
        v218 += "`" + p315 + "`, ";
        let v222 = p306[p315];
        switch (p315) {
          case "id":
            v222 = new Date().getTime() + vRequire3.getUuid();
            break;
          case "createdAt":
          case v217.qTKvT:
            v222 = new Date().Format("yyyy-MM-dd hh:mm:ss");
            break;
          case v217.XEsvw:
            v222 = p306.happenDate ? p306.happenDate.substring(11, v217.mdeBs(589371, 589366)) : new Date().Format("hh");
            break;
          case "happenMinute":
            v222 = p306.happenDate ? p306.happenDate.substring(14, v217.Scjlo(892832, 892848)) : new Date().Format("mm");
            break;
          default:
            break;
        }
        if (v222 != undefined) {
          v219 += "'" + v222 + "', ";
        } else {
          v219 += "DEFAULT, ";
        }
      }
    });
    const v223 = p306.webMonitorId + v217.Ecxfx;
    return await v216.create(p306, v223);
  }
  static async createCustomerPvLeaves(p317) {
    const v224 = {
      VDneY: "CustomerPvLeave",
      oalWZ: function (p318, p319) {
        return p318 + p319;
      },
      PgEaV: function (p320, p321) {
        return p320 + p321;
      },
      FKSPU: function (p322, p323) {
        return p322 + p323;
      }
    };
    if (p317.length === 0) {
      return;
    }
    const v225 = p317[0];
    const v226 = v225.webMonitorId;
    const v227 = v226 + v224.VDneY;
    const {
      keys: _0x538036,
      valueSql: _0x52f3ee
    } = vRequire7.handleStructureSql(v216.schema.Columns.structure, p317);
    let v228 = v224.oalWZ(v224.PgEaV(v224.FKSPU("INSERT INTO " + v227, " ("), _0x538036) + ") VALUES ", _0x52f3ee);
    return await v216.execSql(v228);
  }
  static async calculateCusLeavePercentByHour(p324, p325, p326) {
    const v229 = {
      vPbrO: function (p327, p328) {
        return p327 === p328;
      },
      lNShP: " 23:00:00",
      DsMUs: "CustomerPvLeave",
      YELcl: function (p329, p330) {
        return p329 + p330;
      },
      XunAo: function (p331, p332) {
        return p331 + p332;
      },
      CtrXR: function (p333, p334) {
        return p333 + p334;
      },
      RpAsn: "' AND happenDate<'",
      PqDou: function (p335, p336) {
        return p335 ^ p336;
      },
      MFiBr: function (p337, p338) {
        return p337 / p338;
      },
      XPqGl: function (p339, p340) {
        return p339 * p340;
      }
    };
    const v230 = vRequire3.addDays(-1);
    let v231 = vRequire7.setTableName("CustomerPvLeave", 0, p324);
    if (v229.vPbrO(p325, v230 + v229.lNShP)) {
      v231 = vRequire7.setTableName(v229.DsMUs, 1, p324);
    }
    let v232 = v229.YELcl(v229.XunAo("select count(dataId) as count from " + v231, " where  happenDate>='") + p325 + "' AND happenDate<'" + p326, "' and leaveType=2");
    let v233 = await v216.query(v232, {
      type: v216.QueryTypes.SELECT
    });
    let v234 = v229.CtrXR("select count(dataId) as count from " + v231 + " where  happenDate>='" + p325 + v229.RpAsn, p326) + "'";
    let v235 = await v216.query(v234, {
      type: v216.QueryTypes.SELECT
    });
    const v236 = v233 ? parseInt(v233[v229.PqDou(971146, 971146)].count, 10) : 0;
    const vParseInt = parseInt(v235[0].count, 10);
    const v237 = vParseInt ? v229.MFiBr(vParseInt - v236, vParseInt) : v229.PqDou(416801, 416801);
    return vRequire3.toFixed(v229.XPqGl(v237, 100), 2);
  }
  static async calculateCusLeavePercentByDay(p341, p342) {
    const v238 = {
      IggkH: " 23:59:59",
      nKpvY: "CustomerPvLeave",
      HjymD: function (p343, p344) {
        return p343 ^ p344;
      },
      wXPXf: function (p345, p346) {
        return p345 * p346;
      }
    };
    const v239 = vRequire3.addDays(p342);
    const v240 = v239 + " 00:00:00";
    const v241 = v239 + v238.IggkH;
    const v242 = p341 + v238.nKpvY;
    let v243 = "select count(*) as count from " + v242 + " where happenDate>='" + v240 + "' and happenDate<='" + v241 + "' and leaveType=1";
    let v244 = await v216.query(v243, {
      type: v216.QueryTypes.SELECT
    });
    let v245 = "select count(*) as count from " + v242 + " where happenDate>='" + v240 + "' and happenDate<='" + v241 + "'";
    let v246 = await v216.query(v245, {
      type: v216.QueryTypes.SELECT
    });
    const v247 = v244 ? parseInt(v244[0].count, v238.HjymD(974058, 974048)) : v238.HjymD(788950, 788950);
    const vParseInt2 = parseInt(v246[0].count, 10);
    const v248 = vParseInt2 ? v247 / vParseInt2 : 0;
    return vRequire3.toFixed(v238.wXPXf(v248, 100), 2);
  }
  static async getCusLeavePercentByTime(p347) {
    const v249 = {
      xSvmw: function (p348, p349, p350) {
        return p348(p349, p350);
      },
      eZZoD: function (p351, p352) {
        return p351 * p352;
      }
    };
    const {
      timeSize: _0x43ef05,
      webMonitorId: _0x18fd19,
      scope: _0x4e2ede
    } = p347;
    const v250 = vRequire3.handleTimeScopeSql(0 - _0x43ef05, _0x4e2ede);
    let v251 = vRequire7.setTableName("CustomerPvLeave", _0x43ef05, _0x18fd19);
    let v252 = "select happenHour as hour, count(dataId) as count from " + v251 + " where " + v250 + " and leaveType=1 group by happenHour";
    let v253 = await v216.query(v252, {
      type: v216.QueryTypes.SELECT
    });
    let v254 = "select happenHour as hour, count(dataId) as count from " + v251 + " where " + v250 + " group by happenHour";
    let v255 = await v216.query(v254, {
      type: v216.QueryTypes.SELECT
    });
    let v256 = [];
    v255.forEach(p353 => {
      const v257 = v253.find(function (p354, p355) {
        return p353.hour === p354.hour;
      });
      if (v257) {
        const v258 = v249.xSvmw(parseInt, v257.count, 10);
        const v259 = v249.xSvmw(parseInt, p353.count, 10);
        const v260 = v259 ? v258 / v259 : 0;
        v256.push({
          hour: p353.hour,
          count: vRequire3.toFixed(v249.eZZoD(v260, 100), 2)
        });
      }
    });
    return v256;
  }
  static async getCusLeavePercentSevenDayAgoByHour(p356) {
    const v261 = {
      JnZVw: function (p357, p358) {
        return p357 + p358;
      },
      MpHoR: "InfoCountByHour",
      cFfMc: function (p359, p360) {
        return p359 + p360;
      },
      IQdhm: function (p361, p362) {
        return p361 + p362;
      },
      HNzHv: " where uploadType='",
      FEqDw: " order by hourName"
    };
    const v262 = vRequire3.handleTimeSqlByTimeSizeSeven(p356);
    const v263 = v261.JnZVw(p356.webMonitorId, v261.MpHoR);
    let v264 = v261.cFfMc(v261.cFfMc(v261.IQdhm(v261.cFfMc("SELECT distinct hourName as hour, hourCount as count from ", v263), v261.HNzHv), UPLOAD_TYPE.CUS_LEAVE_FOR_HOUR), "' ") + v262 + v261.FEqDw;
    return await v216.query(v264, {
      type: v216.QueryTypes.SELECT
    });
  }
  static async ["getCusLeavePercentForDay"](p363, p364) {
    const v265 = {
      VugBC: function (p365, p366) {
        return p365 + p366;
      },
      rwlsn: function (p367, p368) {
        return p367 + p368;
      },
      WgIDa: " where  happenDate>='",
      RuArf: "' and leaveType=2",
      eJkWa: function (p369, p370) {
        return p369 + p370;
      },
      UlfGd: function (p371, p372) {
        return p371 ^ p372;
      },
      aNaKn: function (p373, p374) {
        return p373 ^ p374;
      },
      UREzO: function (p375, p376) {
        return p375 - p376;
      },
      KrxTg: function (p377, p378) {
        return p377 * p378;
      }
    };
    const v266 = vRequire3.addDays(p364);
    const v267 = v266 + " 00:00:00";
    const v268 = v266 + " 23:59:59";
    let v269 = vRequire7.setTableName("CustomerPvLeave", p364, p363);
    let v270 = v265.VugBC(v265.rwlsn(v265.VugBC("select count(dataId) as count from ", v269) + v265.WgIDa, v267), "' AND happenDate<='") + v268 + v265.RuArf;
    let v271 = await v216.query(v270, {
      type: v216.QueryTypes.SELECT
    });
    let v272 = v265.eJkWa("select count(dataId) as count from " + v269 + " where  happenDate>='" + v267 + "' AND happenDate<'" + v268, "' and leaveType=1");
    let v273 = await v216.query(v272, {
      type: v216.QueryTypes.SELECT
    });
    const v274 = v271 && v271.length ? parseInt(v271[0].count, v265.UlfGd(536268, 536262)) : 0;
    const vParseInt3 = parseInt(v273[v265.aNaKn(413153, 413153)].count, 10);
    const v275 = vParseInt3 ? v265.UREzO(vParseInt3, v274) / vParseInt3 : v265.aNaKn(267566, 267566);
    const v276 = vRequire3.toFixed(v265.KrxTg(v275, v265.aNaKn(824635, 824671)), 2);
    return v276;
  }
  static async getCusLeavePercentDataForDay(p379, p380, p381) {
    const v277 = {
      olYDj: function (p382, p383) {
        return p382 + p383;
      },
      LBvGQ: "' order by dayName desc"
    };
    const v278 = " and dayName >= '" + p380 + "' and dayName <= '" + p381 + "' ";
    const v279 = v277.olYDj(p379, "InfoCountByDay");
    let v280 = "select dayName, dayCount from " + v279 + " where 1=1 " + v278 + " and uploadType='" + UPLOAD_TYPE.CUS_LEAVE_FOR_DAY + v277.LBvGQ;
    return await v216.query(v280, {
      type: v216.QueryTypes.SELECT
    });
  }
}
const v281 = new vRequire2("../schema/HttpLogReqInfo");
class C3 {
  static async createHttpLogReqInfo(p389) {
    const v282 = {
      rKLMP: function (p390, p391) {
        return p390 ^ p391;
      },
      ejevK: function (p392, p393) {
        return p392 + p393;
      },
      UJbnY: function (p394, p395) {
        return p394 + p395;
      },
      shQfx: function (p396, p397) {
        return p396 ^ p397;
      },
      vjoSx: function (p398, p399) {
        return p398 != p399;
      },
      MgrvV: "sessionId"
    };
    let v283 = "";
    let v284 = "";
    const v285 = ["uploadType", "happenTime", "happenDate", "happenHour", "happenMinute", "webMonitorId", v282.MgrvV, "customerKey", "simpleUrl", "completeUrl", "userId", "firstUserParam", "secondUserParam", "createdAt", "updatedAt", "id", "method", "httpUrl", "simpleHttpUrl", "status", "statusText", "statusResult", "loadTime", "requestText", "responseText"];
    v285.forEach((p400, p401) => {
      if (p401 == v285.length - v282.rKLMP(349681, 349680)) {
        v283 += v282.ejevK("`", p400) + "`";
        let v286 = p389[p400];
        if (v286 != undefined) {
          v284 += "'" + v286 + "'";
        } else {
          v284 += "DEFAULT";
        }
      } else {
        v283 += v282.UJbnY("`" + p400, "`, ");
        let v287 = p389[p400];
        switch (p400) {
          case "id":
            v287 = new Date().getTime() + vRequire3.getUuid();
            break;
          case "createdAt":
          case "updatedAt":
            v287 = new Date().Format("yyyy-MM-dd hh:mm:ss");
            break;
          case "happenHour":
            v287 = p389.happenDate ? p389.happenDate.substring(11, 13) : new Date().Format("hh");
            break;
          case "happenMinute":
            v287 = p389.happenDate ? p389.happenDate.substring(14, v282.shQfx(882053, 882069)) : new Date().Format("mm");
            break;
          default:
            break;
        }
        if (v282.vjoSx(v287, undefined)) {
          v284 += "'" + v287 + "', ";
        } else {
          v284 += "DEFAULT, ";
        }
      }
    });
    const v288 = v282.UJbnY(p389.webMonitorId, "HttpLogReqInfo");
    return await v281.create(p389, v288);
  }
  static async createHttpLogReqInfos(p402) {
    const v289 = {
      gMiRc: function (p403, p404) {
        return p403 === p404;
      },
      QJooF: "HttpLogReqInfo"
    };
    if (v289.gMiRc(p402.length, 0)) {
      return;
    }
    const v290 = p402[0];
    const v291 = v290.webMonitorId;
    const v292 = v291 + v289.QJooF;
    const {
      keys: _0x1040d0,
      valueSql: _0x3911b8
    } = vRequire7.handleStructureSql(v281.schema.Columns.structure, p402);
    let v293 = "INSERT INTO " + v292 + " (" + _0x1040d0 + ") VALUES " + _0x3911b8;
    return await v281.execSql(v293);
  }
  static async getHttpReqLogsByUser(p405, p406, p407) {
    const v294 = {
      vEfHo: function (p408, p409) {
        return p408 + p409;
      },
      xDTal: " where "
    };
    const {
      timeScope: _0x595287,
      webMonitorId: _0x3adec8
    } = p407;
    let v295 = v294.vEfHo("select * from " + vRequire7.setTableName("HttpLogReqInfo", _0x595287, _0x3adec8) + v294.xDTal + p405, " and ") + p406;
    return await v281.query(v295, {
      type: v281.QueryTypes.SELECT
    });
  }
  static async getLogCountForDay(p410, p411) {
    const v296 = vRequire3.addDays(p411);
    const v297 = v296 + " 00:00:00";
    const v298 = v296 + " 23:59:59";
    const v299 = vRequire7.setTableName("HttpLogReqInfo", p411, p410);
    let v300 = "select count(dataId) as count from " + v299 + " where happenDate>='" + v297 + "' and happenDate<='" + v298 + "'";
    return await v281.query(v300, {
      type: v281.QueryTypes.SELECT
    });
  }
}
const v301 = new vRequire2("../schema/customerStatus.js");
v301.createTable();
class C4 {
  static async createCustomerStatus(p417) {
    return await v301.create(p417);
  }
  static async updateCustomerStatus(p418, p419, p420) {
    delete p420.webMonitorId;
    delete p420.userId;
    await v301.update({
      ...p420
    }, {
      where: {
        webMonitorId: p418,
        userId: p419
      },
      fields: Object.keys(p420)
    });
    return true;
  }
  static async deleteCustomerStatus(p421) {
    await v301.destroy({
      where: {
        userId: p421
      }
    });
    return true;
  }
  static async getCustomerStatusByWebMonitorIdAndUserId(p422, p423) {
    const v302 = new Date().Format("yyyy-MM-dd 00:00:00");
    const v303 = "select dataId from CustomerStatus where webMonitorId='" + p422 + "' and userId='" + p423 + "' and updatedAt>='" + v302 + "'";
    return await v301.query(v303, {
      type: v301.QueryTypes.SELECT
    });
  }
  static async getTodayList(p424) {
    const v304 = new Date().Format("yyyy-MM-dd 00:00:00");
    const v305 = "select * from CustomerStatus where webMonitorId='" + p424 + "' and updatedAt>='" + v304 + "' order by updatedAt desc";
    return await v301.query(v305, {
      type: v301.QueryTypes.SELECT
    });
  }
  static async ["getTodayAllList"]() {
    const v306 = new Date().Format("yyyy-MM-dd 00:00:00");
    const v307 = "select * from CustomerStatus where updatedAt>='" + v306 + "' order by updatedAt desc";
    return await v301.query(v307, {
      type: v301.QueryTypes.SELECT
    });
  }
  static async ["getOpenStatusUserList"](p425, p426) {
    const v308 = "select distinct(userId) as userId from CustomerStatus where webMonitorId='" + p425 + "' and " + p426 + "='on'";
    return await v301.query(v308, {
      type: v301.QueryTypes.SELECT
    });
  }
}
const v309 = new vRequire2("../schema/customerStayTime");
class C5 {
  static async createCustomerStayTime(p427) {
    const v310 = {
      uEqku: function (p428, p429) {
        return p428 ^ p429;
      },
      ThIbR: "10s",
      zKAGx: "30-60s",
      ASpBO: "15-20h",
      vXWBH: function (p430, p431) {
        return p430 > p431;
      },
      vADVu: function (p432, p433) {
        return p432 ^ p433;
      },
      ysjdq: function (p434, p435) {
        return p434 - p435;
      },
      JMrkQ: function (p436, p437) {
        return p436 * p437;
      },
      cDLpA: "yyyy-MM-dd hh",
      QWHFO: function (p438, p439) {
        return p438 === p439;
      },
      vqmRU: function (p440, p441) {
        return p440 ^ p441;
      },
      vKZJU: function (p442, p443) {
        return p442 ^ p443;
      },
      BLGZw: "CustomerStayTime"
    };
    const vF2 = (p444 = 0) => {
      let v311 = "";
      let v312 = p444 * 1 / 1000;
      let v313 = [1, 2, 3, 4, 5, 6, 7, 8, v310.uEqku(220939, 220930), 10, 30, v310.uEqku(914369, 914429), 300, v310.uEqku(283870, 284294), v310.uEqku(226464, 226216), 3600, 10800, 18000, 36000, 54000, 72000, 86400];
      let v314 = ["1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", v310.ThIbR, "10-30s", v310.zKAGx, "1-5m", "5-10m", "10-30m", "30-60m", "1-3h", "3-5h", "5-10h", "10-15h", v310.ASpBO, "20-24h"];
      for (let v315 = 0; v315 < v313.length; v315++) {
        if (v312 <= v313[v315]) {
          v311 = v314[v315];
          break;
        }
      }
      return v311;
    };
    const v316 = ["userId", "stayTime", "stayScope", "activeTime", "activeScope", "uploadType", "happenDate", "happenHour", "happenMinute", "webMonitorId", "sessionId", "customerKey", "simpleUrl", "currentHour", "dataId", "createdAt", "updatedAt"];
    v316.forEach(p445 => {
      let v317 = p427[p445];
      switch (p445) {
        case "currentHour":
          if (!p427.currentHour) {
            if (v310.vXWBH(p427.stayTime * 1, 3600000)) {
              v317 = v310.vADVu(180051, 180051);
            } else {
              let v318 = v310.ysjdq(new Date(p427.happenDate).getTime(), v310.JMrkQ(p427.stayTime, 1));
              let v319 = new Date(v318).Format(v310.cDLpA);
              if (v310.QWHFO(v319, p427.happenHour)) {
                v317 = v310.vqmRU(496863, 496862);
              } else {
                v317 = 0;
              }
            }
          }
          break;
        case "createdAt":
        case "updatedAt":
          v317 = new Date().Format("yyyy-MM-dd hh:mm:ss");
          break;
        case "happenHour":
          v317 = p427.happenDate ? p427.happenDate.substring(11, 13) : new Date().Format("hh");
          break;
        case "happenMinute":
          v317 = p427.happenDate ? p427.happenDate.substring(14, v310.vKZJU(383293, 383277)) : new Date().Format("mm");
          break;
        case "stayScope":
          v317 = p427.stayTime ? vF2(p427.stayTime) : v310.vADVu(969276, 969276);
          break;
        case "activeScope":
          v317 = p427.activeTime ? vF2(p427.activeTime) : 0;
          break;
        default:
          break;
      }
      p427[p445] = v317;
    });
    const v320 = p427.webMonitorId;
    const v321 = v320 + v310.BLGZw;
    return await v309.create(p427, v321);
  }
  static async calculateStayTimeByHour(p446, p447, p448) {
    const v322 = {
      NtNRp: function (p449, p450) {
        return p449 ^ p450;
      },
      Dcbrx: function (p451, p452) {
        return p451 === p452;
      },
      heWwD: "AVG",
      ABAnR: function (p453, p454) {
        return p453 ^ p454;
      },
      SxkfO: function (p455, p456) {
        return p455 && p456;
      },
      PoGvQ: function (p457, p458) {
        return p457 === p458;
      }
    };
    const v323 = await C9.getUserIdType(p446);
    const {
      type: _0x3bcd2c,
      key: _0x1ab4ba
    } = p448;
    let v324 = vRequire7.setTableName("CustomerStayTime", 0, p446);
    if (p447 === "23") {
      v324 = vRequire7.setTableName("CustomerStayTime", v322.NtNRp(793884, 793885), p446);
    }
    let v325 = "";
    if (v322.Dcbrx(_0x3bcd2c, v322.heWwD)) {
      v325 = " and currentHour='1' ";
    }
    let v326 = "select SUM(" + _0x1ab4ba + ") as count from " + v324 + " where  happenHour='" + p447 + "' " + v325 + " ";
    let v327 = await v309.query(v326, {
      type: v309.QueryTypes.SELECT
    });
    const v328 = v327 ? parseInt(v327[0].count / 1000, v322.ABAnR(970620, 970614)) : 0;
    if (_0x3bcd2c === "AVG") {
      let v329 = "select count(distinct " + v323 + ") as count from " + v324 + " where  happenHour='" + p447 + "' ";
      let v330 = await v309.query(v329, {
        type: v309.QueryTypes.SELECT
      });
      const vParseInt4 = parseInt(v330[v322.NtNRp(577467, 577467)].count, 10);
      const v331 = v322.SxkfO(v328, vParseInt4) ? vRequire3.toFixed(v328 / vParseInt4, 2) : 0;
      return v331;
    } else if (v322.PoGvQ(_0x3bcd2c, "SUM")) {
      return v328;
    }
  }
  static async ["getStayTimeForDay"](p459, p460, p461, p462) {
    const v332 = {
      lUNZp: " 00",
      SEXkS: function (p463, p464) {
        return p463 ^ p464;
      },
      zgQYP: function (p465, p466) {
        return p465 + p466;
      },
      bedGj: function (p467, p468) {
        return p467 + p468;
      },
      YmyTr: "SELECT SUM(hourCount) as count from ",
      XTfCU: ") as count from ",
      nqIIQ: function (p469, p470, p471) {
        return p469(p470, p471);
      },
      Vrayf: function (p472, p473) {
        return p472 / p473;
      }
    };
    const v333 = await C9.getUserIdType(p459);
    const v334 = p460.substring(5) + v332.lUNZp;
    const v335 = p460.substring(v332.SEXkS(104996, 104993)) + " 23";
    const v336 = p460.replace(new RegExp("-", "g"), "");
    const v337 = v332.zgQYP(p459, "CustomerStayTime");
    let v338 = 0;
    let v339 = "";
    switch (p461) {
      case UPLOAD_TYPE.STAY_TIME_FOR_DAY:
        v339 = UPLOAD_TYPE.TOTAL_STAY_TIME_FOR_HOUR;
        break;
      case UPLOAD_TYPE.ACTIVE_TIME_FOR_DAY:
        v339 = UPLOAD_TYPE.TOTAL_ACTIVE_TIME_FOR_HOUR;
        break;
      default:
        break;
    }
    let v340 = v332.bedGj(v332.bedGj(v332.zgQYP(v332.bedGj(v332.YmyTr + p459 + "InfoCountByHour where hourName>='" + v334, "' and hourName<='"), v335) + "' and uploadType='", v339), "'");
    let v341 = await v309.query(v340, {
      type: v309.QueryTypes.SELECT
    });
    const v342 = v341 ? parseInt(v341[0].count, 10) : v332.SEXkS(595975, 595975);
    let v343 = "select count(distinct " + v333 + v332.XTfCU + v337;
    let v344 = await v309.query(v343, {
      type: v309.QueryTypes.SELECT
    });
    const v345 = v332.nqIIQ(parseInt, v344[v332.SEXkS(606072, 606072)].count, 10);
    v338 = v342 && v345 ? vRequire3.toFixed(v332.Vrayf(v342, v345), 2) : 0;
    return v338;
  }
  static async getStayTimeForEveryDay(p474) {
    const v346 = {
      YHhJC: function (p475, p476) {
        return p475 ^ p476;
      },
      gCvrf: function (p477, p478) {
        return p477 + p478;
      },
      YKoKc: function (p479, p480) {
        return p479 + p480;
      }
    };
    const {
      webMonitorId: _0x1af372,
      day: _0x1bfaa0
    } = p474;
    const v347 = vRequire3.addDays(v346.YHhJC(873193, 873193) - _0x1bfaa0);
    const v348 = _0x1af372 + "InfoCountByDay";
    const v349 = v346.gCvrf(v346.gCvrf(v346.YKoKc("SELECT dayName, dayCount from " + v348, " WHERE createdAt>='"), v347), "' and uploadType='") + UPLOAD_TYPE.STAY_TIME_FOR_DAY + "' order by dayName";
    return await v309.query(v349, {
      type: v309.QueryTypes.SELECT
    });
  }
  static async ["getStayTimeForHour"](p481) {
    const v350 = {
      AJEce: "SELECT distinct hourName as hour, hourCount as count from ",
      hLBUc: " where uploadType='"
    };
    const v351 = vRequire3.handleTimeSqlByTimeSize(p481);
    const v352 = UPLOAD_TYPE.STAY_TIME_FOR_HOUR + p481.chooseUserTag;
    const v353 = p481.webMonitorId + "InfoCountByHour";
    let v354 = v350.AJEce + v353 + v350.hLBUc + v352 + "' " + v351 + " order by hourName";
    return await v309.query(v354, {
      type: v309.QueryTypes.SELECT
    });
  }
  static async getStayTimeForHourSevenDaysAgo(p482) {
    const v355 = {
      XJgpT: function (p483, p484) {
        return p483 + p484;
      },
      GZMWQ: " where uploadType='"
    };
    const v356 = vRequire3.handleTimeSqlByTimeSizeSeven(p482);
    const v357 = UPLOAD_TYPE.STAY_TIME_FOR_HOUR + p482.chooseUserTag;
    const v358 = v355.XJgpT(p482.webMonitorId, "InfoCountByHour");
    let v359 = "SELECT distinct hourName as hour, hourCount as count from " + v358 + v355.GZMWQ + v357 + "' " + v356 + " order by hourName";
    return await v309.query(v359, {
      type: v309.QueryTypes.SELECT
    });
  }
  static async getStayTimeForMonth(p485, p486, p487) {
    const v360 = {
      KWNmC: function (p488, p489) {
        return p488 + p489;
      },
      DqShK: function (p490, p491) {
        return p490 + p491;
      },
      uGeoR: " where dayName>='"
    };
    const v361 = p485 + "InfoCountByDay";
    let v362 = v360.KWNmC(v360.KWNmC(v360.DqShK("select dayName as day, dayCount as count from ", v361) + v360.uGeoR + p487 + "' and uploadType='", p486), "' order by dayName");
    return await v309.query(v362, {
      type: v309.QueryTypes.SELECT
    });
  }
  static async getStayTimeScopeForDay(p492, p493) {
    let v363 = vRequire7.setTableName("CustomerStayTime", p493, p492);
    let v364 = "SELECT stayScope as scope, count(stayScope) as count from " + v363 + " group by stayScope";
    return await v309.query(v364, {
      type: v309.QueryTypes.SELECT
    });
  }
  static async getActiveTimeScopeForDay(p494, p495) {
    let v365 = vRequire7.setTableName("CustomerStayTime", p495, p494);
    let v366 = "SELECT activeScope as scope, count(activeScope) as count from " + v365 + " group by activeScope";
    return await v309.query(v366, {
      type: v309.QueryTypes.SELECT
    });
  }
  static async getPageListOrderByStayTime(p496, p497, p498) {
    let v367 = vRequire7.setTableName("CustomerStayTime", p497, p496);
    let v368 = "SELECT simpleUrl, count(dataId) as count, avg(" + p498 + ") as time from " + v367 + " group by simpleUrl ORDER BY count desc limit 10";
    return await v309.query(v368, {
      type: v309.QueryTypes.SELECT
    });
  }
  static async getStayTimeForDayByPerson(p499, p500, p501, p502) {
    let v369 = vRequire7.setTableName("CustomerStayTime", p500, p499);
    let v370 = p501 ? " where userId='" + p501 + "' " : "";
    let v371 = "SELECT sum(" + p502 + ") as count from " + v369 + " " + v370 + " ";
    return await v309.query(v371, {
      type: v309.QueryTypes.SELECT
    });
  }
  static async ["getStayTimeForBehaviorByPerson"](p503, p504, p505) {
    let v372 = vRequire7.setTableName("CustomerStayTime", p504, p503);
    let v373 = p505 ? " where userId='" + p505 + "' " : "";
    let v374 = "SELECT * from " + v372 + " " + v373 + " ";
    return await v309.query(v374, {
      type: v309.QueryTypes.SELECT
    });
  }
  static async getStayTimeForBehaviorWaterfallByPerson(p506, p507, p508) {
    let v375 = vRequire7.setTableName("CustomerStayTime", p507, p506);
    let v376 = p508 ? " where userId='" + p508 + "' " : "";
    let v377 = "SELECT happenHour, sum(stayTime) as time from " + v375 + " " + v376 + " group by happenHour";
    return await v309.query(v377, {
      type: v309.QueryTypes.SELECT
    });
  }
}
const v378 = new vRequire2("../schema/httpErrorHandleList");
class C6 {
  static async ["createHttpErrorHandleList"](p509) {
    const v379 = {
      xZpmV: function (p510, p511) {
        return p510 + p511;
      },
      XBrIL: "HttpErrorHandleList"
    };
    const {
      webMonitorId: _0x2c70f4
    } = p509;
    return await v378.create({
      ...p509
    }, v379.xZpmV(_0x2c70f4, v379.XBrIL));
  }
  static async ["updateHttpErrorHandleList"](p512, p513) {
    const {
      handleMan: _0x4cf6ba,
      errorStatus: _0x2ff70a,
      webMonitorId: _0x4bcc1e
    } = p513;
    await v955.update({
      handleMan: _0x4cf6ba,
      errorStatus: _0x2ff70a
    }, {
      where: {
        dataId: p512
      },
      fields: ["handleMan", "errorStatus"]
    }, _0x4bcc1e + "HttpErrorHandleList");
  }
  static async getHttpErrorHandleListBySimpleHttpUrl(p514, p515) {
    const v380 = p515 + "HttpErrorHandleList";
    const v381 = "SELECT dataId, handleMan, errorStatus, handleStartDate from " + v380 + " where simpleHttpUrl='" + p514 + "'";
    return await v378.query(v381, {
      type: v378.QueryTypes.SELECT
    });
  }
  static async getHttpErrorHandleListList(p516) {
    const v382 = p516 + "HttpErrorHandleList";
    const v383 = "SELECT * from " + v382;
    return await v378.query(v383, {
      type: v378.QueryTypes.SELECT
    });
  }
  static async getHttpErrorHandleListListByUserId(p517, p518 = "") {
    const v384 = {
      lBLwL: function (p519, p520) {
        return p519 + p520;
      },
      takgO: "HttpErrorHandleList"
    };
    const v385 = v384.lBLwL(p518, v384.takgO);
    const v386 = "SELECT * from " + v385 + " where handleMan='" + p517 + "'";
    return await v378.query(v386, {
      type: v378.QueryTypes.SELECT
    });
  }
  static async getHttpErrorHandleListDetail(p521) {
    return await v378.findOne({
      where: {
        dataId: p521
      }
    });
  }
  static async deleteHttpErrorHandleList(p522) {
    await v378.destroy({
      where: {
        dataId: p522
      }
    });
    return true;
  }
  static async ["resolveHttpErrorInHandleList"](p523, p524, p525) {
    const v387 = {
      NKjua: function (p526, p527) {
        return p526 + p527;
      }
    };
    const v388 = {
      errorStatus: p525,
      simpleHttpUrl: p523,
      webMonitorId: p524
    };
    return await v378.create({
      ...v388
    }, v387.NKjua(p524, "HttpErrorHandleList"));
  }
  static async getSolveStatusBySimpleHttpUrl(p528, p529) {
    const v389 = {
      JwYCy: "HttpErrorHandleList"
    };
    return await v378.findOne({
      where: {
        simpleHttpUrl: p528,
        webMonitorId: p529
      }
    }, p529 + v389.JwYCy);
  }
}
const v390 = new vRequire2("../schema/HttpErrorInfo");
class C7 {
  static async ["createHttpErrorInfo"](p530) {
    const v391 = {
      Iffeo: function (p531, p532) {
        return p531 + p532;
      },
      wsIle: "DEFAULT",
      UptmA: "createdAt",
      boLjK: function (p533, p534) {
        return p533 ^ p534;
      },
      bGNal: "DEFAULT, ",
      LdoZs: "sessionId"
    };
    let v392 = "";
    let v393 = "";
    const v394 = ["uploadType", "happenTime", "happenDate", "happenHour", "happenMinute", "projectVersion", "customerKey", v391.LdoZs, "simpleUrl", "completeUrl", "userId", "firstUserParam", "secondUserParam", "createdAt", "updatedAt", "id", "method", "httpUrl", "simpleHttpUrl", "status", "statusText", "statusResult", "loadTime", "headerText", "requestText", "responseText"];
    v394.forEach((p535, p536) => {
      if (p536 == v394.length - 1) {
        v392 += v391.Iffeo(v391.Iffeo("`", p535), "`");
        let v395 = p530[p535];
        if (v395 != undefined) {
          v393 += "'" + v395 + "'";
        } else {
          v393 += v391.wsIle;
        }
      } else {
        v392 += "`" + p535 + "`, ";
        let v396 = p530[p535];
        switch (p535) {
          case v391.UptmA:
          case "updatedAt":
            v396 = new Date().Format("yyyy-MM-dd hh:mm:ss");
            break;
          case "happenHour":
            v396 = p530.happenDate ? p530.happenDate.substring(v391.boLjK(143176, 143171), 13) : new Date().Format("hh");
            break;
          case "happenMinute":
            v396 = p530.happenDate ? p530.happenDate.substring(v391.boLjK(519946, 519940), 16) : new Date().Format("mm");
            break;
          default:
            break;
        }
        if (v396 != undefined) {
          v393 += "'" + v396 + "', ";
        } else {
          v393 += v391.bGNal;
        }
      }
    });
    const v397 = p530.webMonitorId + "HttpErrorInfo";
    return await v390.create(p530, v397);
  }
  static async createHttpErrorInfos(p537) {
    const v398 = {
      nEPAs: "INSERT INTO ",
      aghll: ") VALUES "
    };
    if (p537.length === 0) {
      return;
    }
    const v399 = p537[0];
    const v400 = v399.webMonitorId;
    const v401 = v400 + "HttpErrorInfo";
    const {
      keys: _0x451142,
      valueSql: _0x76d513
    } = vRequire7.handleStructureSql(v390.schema.Columns.structure, p537);
    let v402 = v398.nEPAs + v401 + " (" + _0x451142 + v398.aghll + _0x76d513;
    return await v390.execSql(v402);
  }
  static async getHttpErrorsByUser(p538, p539, p540) {
    const v403 = {
      UYcoP: function (p541, p542) {
        return p541 + p542;
      },
      qKpyn: "HttpErrorInfo",
      uPpgW: " where "
    };
    const {
      timeScope: _0x396615,
      webMonitorId: _0x366c80
    } = p540;
    let v404 = v403.UYcoP("select * from " + vRequire7.setTableName(v403.qKpyn, _0x396615, _0x366c80) + v403.uPpgW + p538 + " and ", p539);
    return await v390.query(v404, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async getHttpErrorInfoListByHour(p543) {
    const {
      timeSize: _0x4abd90,
      webMonitorId: _0xc93115
    } = p543;
    let v405 = vRequire7.setTableName("HttpErrorInfo", _0x4abd90, _0xc93115);
    const v406 = vRequire3.handleTimeScopeSql(0 - _0x4abd90, 0);
    const v407 = "SELECT happenHour as hour, count(dataId) as count from " + v405 + " WHERE " + v406 + " GROUP BY happenHour";
    return await v390.query(v407, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async ["getHttpErrorInfoListSevenDayAgoByHour"](p544) {
    const v408 = {
      IlnTw: function (p545, p546) {
        return p545 ^ p546;
      }
    };
    const {
      timeSize: _0x15d7a2,
      scope = v408.IlnTw(653897, 653896),
      webMonitorId: _0x5eb54d
    } = p544;
    const v409 = vRequire3.handleTimeScopeSql(0 - _0x15d7a2, scope);
    let v410 = vRequire7.setTableName("HttpErrorInfo", _0x15d7a2, _0x5eb54d);
    const v411 = "SELECT happenHour as hour, count(dataId) as count from " + v410 + " WHERE " + v409 + " GROUP BY happenHour";
    return await v390.query(v411, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async ["getHttpErrorCountByDay"](p547) {
    const v412 = {
      hwAoI: function (p548, p549) {
        return p548 + p549;
      }
    };
    const {
      startDate: _0x559ae5,
      endDate: _0x54473
    } = p547;
    const v413 = _0x559ae5 + " 00:00:00";
    const v414 = v412.hwAoI(_0x54473, " 23:59:59");
    const v415 = " happenDate>='" + v413 + "' and happenDate<='" + v414 + "' ";
    const v416 = p547.webMonitorId + "HttpErrorInfo";
    const v417 = "SELECT DATE_FORMAT(happenDate,'%Y-%m-%d') as day, count(dataId) as count, count(DISTINCT customerKey) as uvCount from " + v416 + " where " + v415 + " group by day";
    return await v390.query(v417, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async getHttpErrorUvCountForDay(p550, p551) {
    const v418 = vRequire3.addDays(p551);
    const v419 = v418 + " 00:00:00";
    const v420 = v418 + " 23:59:59";
    let v421 = p550 + "HttpErrorInfo";
    let v422 = "select count(distinct customerKey) as count from " + v421 + " WHERE happenDate>='" + v419 + "' and happenDate<='" + v420 + "'";
    return await v390.query(v422, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async getHttpErrorInfoListByDay(p552) {
    const v423 = {
      xditT: "HttpErrorInfo",
      LKvRu: function (p553, p554) {
        return p553 + p554;
      }
    };
    const {
      timeType: _0x427c1d
    } = p552;
    const v424 = vRequire7.setTableName(v423.xditT, _0x427c1d, p552.webMonitorId);
    const v425 = v423.LKvRu("select simpleHttpUrl, COUNT(simpleHttpUrl) as count from ", v424) + " GROUP BY simpleHttpUrl order by count desc limit 20";
    return await v390.query(v425, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async ["getHttpErrorLatestTime"](p555, p556) {
    const v426 = {
      IkHWt: function (p557, p558) {
        return p557 + p558;
      }
    };
    const {
      timeType: _0xb3ad6b
    } = p556;
    const v427 = vRequire7.setTableName("HttpErrorInfo", _0xb3ad6b, p556.webMonitorId);
    return await v390.query(v426.IkHWt("select createdAt, happenTime from ", v427) + " where simpleHttpUrl= '" + p555 + "' ORDER BY happenTime desc limit 1", {
      type: v390.QueryTypes.SELECT
    });
  }
  static async getStatusCountBySimpleHttpUrl(p559, p560) {
    const v428 = {
      DvIIF: function (p561, p562) {
        return p561 + p562;
      },
      Yymnm: " where simpleHttpUrl= '"
    };
    const {
      timeType: _0xf34e32
    } = p560;
    const v429 = vRequire7.setTableName("HttpErrorInfo", _0xf34e32, p560.webMonitorId);
    const v430 = v428.DvIIF("select `status`, count(`status`) as count from " + v429, v428.Yymnm) + p559 + "' GROUP BY `status`";
    return await v390.query(v430, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async getCustomerCountForHttpUrl(p563, p564) {
    const v431 = {
      ibOSE: function (p565, p566) {
        return p565 + p566;
      },
      meKkv: function (p567, p568) {
        return p567 + p568;
      },
      uCJGj: function (p569, p570) {
        return p569 + p570;
      },
      Bouot: " where simpleHttpUrl= '",
      BnsAv: "' GROUP BY `status`"
    };
    const v432 = await C9.getUserIdType(p564.webMonitorId);
    const {
      timeType: _0x2c2c12
    } = p564;
    const v433 = vRequire7.setTableName("HttpErrorInfo", _0x2c2c12, p564.webMonitorId);
    const v434 = v431.ibOSE(v431.ibOSE(v431.meKkv(v431.uCJGj("select count(distinct ", v432), ") as count from "), v433) + v431.Bouot, p563) + v431.BnsAv;
    return await v390.query(v434, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async ["getHttpErrorListByMsg"](p571, p572) {
    const v435 = {
      JkqYz: "HttpErrorInfo",
      GVYoh: function (p573, p574) {
        return p573 + p574;
      },
      oVtBM: " and  simpleHttpUrl= '",
      kYZpl: "' GROUP BY `status`"
    };
    const v436 = await C9.getUserIdType(p572.webMonitorId);
    const {
      timeType: _0x58be62
    } = p572;
    const v437 = vRequire7.createTimeScopeSql(_0x58be62);
    const v438 = p572.webMonitorId + v435.JkqYz;
    const v439 = v435.GVYoh("select count(distinct " + v436, ") as count from ") + v438 + " where 1=1 " + v437 + v435.oVtBM + p571 + v435.kYZpl;
    return await v390.query(v439, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async ["getHttpErrorListByUrl"](p575) {
    const v440 = {
      TXYHq: "HttpErrorInfo",
      ZjVtW: function (p576, p577) {
        return p576 + p577;
      },
      QRanB: function (p578, p579) {
        return p578 + p579;
      }
    };
    const {
      simpleHttpUrl: _0x17ff4a,
      timeType: _0x575578
    } = p575;
    const v441 = vRequire7.setTableName(v440.TXYHq, _0x575578, p575.webMonitorId);
    const v442 = v440.ZjVtW(v440.QRanB("select * from ", v441) + " where simpleHttpUrl='" + _0x17ff4a, "' limit 200");
    return await v390.query(v442, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async calculateHttpErrorCountByHour(p580, p581, p582, p583) {
    const v443 = {
      NzReu: function (p584, p585) {
        return p584 ^ p585;
      },
      oJFSE: function (p586, p587) {
        return p586 === p587;
      },
      kFInr: " 23:00:00"
    };
    const v444 = vRequire3.addDays(-v443.NzReu(164004, 164005));
    let v445 = vRequire7.setTableName("HttpErrorInfo", 0, p580);
    if (v443.oJFSE(p582, v444 + v443.kFInr)) {
      v445 = vRequire7.setTableName("HttpErrorInfo", 1, p580);
    }
    let v446 = "select count(dataId) as count from " + v445 + " WHERE happenDate>='" + p582 + "' AND happenDate<'" + p583 + "'";
    return await v390.query(v446, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async ["calculateHttpErrorUvCountByHour"](p588, p589, p590, p591) {
    const v447 = {
      uUmve: "HttpErrorInfo",
      Ufdhw: " 23:00:00",
      jqxBY: function (p592, p593) {
        return p592 + p593;
      },
      ymkMV: "select count(distinct ",
      FaODT: ") as count from ",
      BOnUY: " WHERE happenDate>='"
    };
    const v448 = await C9.getUserIdType(p588);
    const v449 = vRequire3.addDays(-1);
    let v450 = vRequire7.setTableName(v447.uUmve, 0, p588);
    if (p590 === v449 + v447.Ufdhw) {
      v450 = vRequire7.setTableName("HttpErrorInfo", 1, p588);
    }
    let v451 = v447.jqxBY(v447.jqxBY(v447.jqxBY(v447.jqxBY(v447.ymkMV, v448), v447.FaODT) + v450, v447.BOnUY) + p590 + "' AND happenDate<'", p591) + "'";
    return await v390.query(v451, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async calculateHttpErrorCountByDay(p594, p595) {
    const v452 = {
      ecBar: "HttpErrorInfo"
    };
    const v453 = vRequire3.addDays(p595);
    const v454 = v453 + " 00:00:00";
    const v455 = v453 + " 23:59:59";
    let v456 = p594 + v452.ecBar;
    let v457 = "select count(dataId) as count from " + v456 + " where happenDate>='" + v454 + "' and happenDate<='" + v455 + "'";
    return await v390.query(v457, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async calculateHttpErrorCountForUrlByDay(p596, p597) {
    const v458 = {
      jAbPY: function (p598, p599) {
        return p598 + p599;
      },
      mRWRY: "HttpErrorInfo"
    };
    const v459 = vRequire3.addDays(p597);
    const v460 = v459 + " 00:00:00";
    const v461 = v458.jAbPY(v459, " 23:59:59");
    let v462 = v458.jAbPY(p596, v458.mRWRY);
    let v463 = "select simpleHttpUrl, count(dataId) as count from " + v462 + " where happenDate>='" + v460 + "' and happenDate<='" + v461 + "' group by simpleHttpUrl  limit 1000";
    return await v390.query(v463, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async getHttpErrorUserCountToday(p600, p601) {
    const v464 = {
      kdntl: " 00:00:00",
      rVpoG: " 23:59:59",
      VgrQL: function (p602, p603) {
        return p602 ^ p603;
      }
    };
    const v465 = await C9.getUserIdType(p600);
    const v466 = vRequire3.addDays(p601);
    const v467 = v466 + v464.kdntl;
    const v468 = v466 + v464.rVpoG;
    const v469 = vRequire7.setTableName("HttpErrorInfo", v464.VgrQL(558698, 558698), p600);
    let v470 = "select count(distinct " + v465 + ") as count from " + v469 + " where happenDate>='" + v467 + "' and happenDate<='" + v468 + "'";
    return await v390.query(v470, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async ["getHttpErrorUserCountByMinute"](p604, p605) {
    const v471 = {
      tFJhq: function (p606, p607) {
        return p606 * p607;
      },
      VuDwz: function (p608, p609) {
        return p608 ^ p609;
      },
      sRqAW: "HttpErrorInfo"
    };
    const v472 = new Date().getTime();
    const v473 = new Date(v472 - v471.tFJhq(p605 * v471.VuDwz(120169, 120149), 1000)).Format("yyyy-MM-dd hh:mm 00");
    const v474 = new Date(v472).Format("yyyy-MM-dd hh:mm:00");
    const v475 = await C9.getUserIdType(p604);
    const vV473 = v473;
    const vV474 = v474;
    const v476 = vRequire7.setTableName(v471.sRqAW, index, p604);
    let v477 = "select count(distinct " + v475 + ") as count from " + v476 + " where happenDate>='" + vV473 + "' and happenDate<='" + vV474 + "'";
    return await v390.query(v477, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async getHttpErrorUserCountByHour(p610, p611, p612) {
    const v478 = {
      myUjh: "HttpErrorInfo",
      fjOyP: function (p613, p614) {
        return p613 ^ p614;
      },
      ZfgAD: " 23:00:00",
      bsWFe: function (p615, p616) {
        return p615 + p616;
      },
      QfeMM: function (p617, p618) {
        return p617 + p618;
      },
      cscpv: "' AND happenDate<'"
    };
    const v479 = await C9.getUserIdType(p610);
    const v480 = vRequire3.addDays(-1);
    let v481 = vRequire7.setTableName(v478.myUjh, v478.fjOyP(870350, 870350), p610);
    if (p611 === v480 + v478.ZfgAD) {
      v481 = vRequire7.setTableName("HttpErrorInfo", 1, p610);
    }
    let v482 = v478.bsWFe(v478.QfeMM("select count(customerKey) as count, count(distinct " + v479, ") as uvCount  from "), v481) + " WHERE happenDate>='" + p611 + v478.cscpv + p612 + "'";
    return await v390.query(v482, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async getHttpErrorCountInRealTimeByMinute(p619, p620, p621) {
    const v483 = {
      sElqo: function (p622, p623) {
        return p622 + p623;
      },
      TNeRc: function (p624, p625) {
        return p624 + p625;
      },
      lrllZ: " WHERE happenDate>='"
    };
    let v484 = v483.sElqo(v483.TNeRc("select count(dataId) as httpCount from ", vRequire7.setTableName("HttpErrorInfo", 0, p619)) + v483.lrllZ + p620 + "' AND happenDate<'" + p621, "'");
    return await v390.query(v484, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async getHttpErrorCountInRealTimeByEveryMinute(p626, p627, p628) {
    const v485 = {
      qjPGX: function (p629, p630) {
        return p629 + p630;
      }
    };
    let v486 = v485.qjPGX("select formatDateTime(toDateTime(happenDate), '%H:%M:') AS time, count(dataId) as httpErrorCount from " + vRequire7.setTableName("HttpErrorInfo", 0, p626) + " WHERE happenDate>='" + p627 + "' AND happenDate<'", p628) + "' group by time";
    return await v390.query(v486, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async ["getStatusListGroupByErrorCode"](p631) {
    const v487 = {
      CvbOD: function (p632, p633) {
        return p632 + p633;
      },
      yUJAW: function (p634, p635) {
        return p634 + p635;
      }
    };
    const {
      timeType: _0x46feaf,
      webMonitorId: _0x48010b
    } = p631;
    const v488 = vRequire3.addDays(0 - _0x46feaf);
    const v489 = v487.CvbOD(v488, " 00:00:00");
    const v490 = v487.yUJAW(v488, " 23:59:59");
    const v491 = vRequire7.setTableName("HttpErrorInfo", _0x46feaf, _0x48010b);
    let v492 = "SELECT status, count(status) as count from " + v491 + " where happenDate>='" + v489 + "' and happenDate<='" + v490 + "' GROUP BY `status`";
    return await v390.query(v492, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async getHttpErrorSort(p636) {
    const v493 = {
      ksebn: "all",
      VqrkJ: function (p637, p638) {
        return p637 ^ p638;
      },
      NMANd: " 00:00:00",
      vzAIQ: "HttpErrorInfo",
      CmzsO: function (p639, p640) {
        return p639 ^ p640;
      },
      KpApe: function (p641, p642) {
        return p641 + p642;
      },
      GqrSa: "select simpleHttpUrl, count(simpleHttpUrl) as count, count(distinct ",
      jSiXD: ") as person from ",
      PMjqK: " GROUP BY simpleHttpUrl order by count desc limit 5",
      iHePu: function (p643, p644) {
        return p643 === p644;
      },
      Mcsoz: "count",
      hjxMC: "select simpleHttpUrl, count(simpleHttpUrl) as count from ",
      XwpkN: function (p645, p646) {
        return p645 + p646;
      },
      udEyK: function (p647, p648) {
        return p647 + p648;
      },
      TnIoq: "select simpleHttpUrl, count(distinct ",
      GCmBF: " GROUP BY simpleHttpUrl "
    };
    const {
      errorType = v493.ksebn,
      sortType = "count",
      errorStatus: _0xc61048,
      timeType = v493.VqrkJ(985760, 985760),
      page: _0x3ac6f1,
      pageSize: _0x5ea30d,
      webMonitorId: _0x367754,
      recentMinute: _0x5ee4dc,
      simpleHttpUrlArray: _0x303711
    } = p636;
    const v494 = vRequire3.addDays(0 - timeType);
    const v495 = v494 + v493.NMANd;
    const v496 = v494 + " 23:59:59";
    const v497 = await C9.getUserIdType(_0x367754);
    const v498 = vRequire7.setTableName(v493.vzAIQ, timeType, _0x367754);
    let v499 = "";
    let v500 = "";
    if (_0x5ee4dc) {
      const v501 = new Date(new Date().getTime() - _0x5ee4dc * v493.VqrkJ(518712, 518660) * v493.CmzsO(560942, 560326)).Format("yyyy-MM-dd hh:mm:00");
      v500 = " where happenDate>'" + v501 + "' ";
      v499 = v493.KpApe(v493.GqrSa, v497) + v493.jSiXD + v498 + v500 + v493.PMjqK;
      return await v390.query(v499, {
        type: v390.QueryTypes.SELECT
      });
    }
    let v502 = "";
    if (_0x303711.length) {
      let v503 = "'webfunny'";
      _0x303711.forEach(p649 => {
        v503 += ",'" + p649 + "'";
      });
      v502 = " AND simpleHttpUrl in (" + v503 + ") ";
    }
    const v504 = " limit " + _0x3ac6f1 * _0x5ea30d + "," + _0x5ea30d + " ";
    const v505 = errorType === v493.ksebn ? "" : " and status like '" + errorType + "%' ";
    const v506 = " order by " + sortType + " desc ";
    if (v493.iHePu(sortType, v493.Mcsoz)) {
      v499 = v493.KpApe(v493.KpApe(v493.KpApe(v493.hjxMC + v498 + (" where happenDate>='" + v495 + "' and happenDate<='" + v496 + "' ") + v505, v502) + " GROUP BY simpleHttpUrl ", v506), v504);
    } else if (sortType === "person") {
      v499 = v493.XwpkN(v493.udEyK(v493.udEyK(v493.udEyK(v493.TnIoq, v497), ") as person from ") + v498 + (" where happenDate>='" + v495 + "' and happenDate<='" + v496 + "' ") + v505, v502) + v493.GCmBF + v506, v504);
    }
    return await v390.query(v499, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async ["getHttpErrorFirstTime"](p650) {
    const v507 = {
      OyqVY: function (p651, p652) {
        return p651 + p652;
      }
    };
    const {
      simpleHttpUrl: _0xad7ec1,
      timeType: _0x49f73b,
      webMonitorId: _0x39607c
    } = p650;
    const v508 = vRequire3.addDays(0 - _0x49f73b);
    const v509 = v508 + " 00:00:00";
    const v510 = v508 + " 23:59:59";
    const v511 = vRequire7.setTableName("HttpErrorInfo", _0x49f73b, _0x39607c);
    let v512 = v507.OyqVY("select createdAt, happenTime from " + v511 + (" where happenDate>='" + v509 + "' and happenDate<='" + v510 + "' and simpleHttpUrl = '") + _0xad7ec1 + "' ", " ORDER BY happenDate limit 1");
    return await v390.query(v512, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async ["getHttpErrorLatestTime"](p653) {
    const v513 = {
      fbDkH: function (p654, p655) {
        return p654 * p655;
      },
      LgPOr: "HttpErrorInfo",
      vtVkT: function (p656, p657) {
        return p656 + p657;
      },
      XwdjP: function (p658, p659) {
        return p658 + p659;
      },
      SknsJ: " ORDER BY happenDate desc limit 1"
    };
    const {
      simpleHttpUrl: _0x3b2e25,
      timeType: _0x45841f,
      webMonitorId: _0x14d440,
      recentMinute: _0x15e614
    } = p653;
    const v514 = vRequire3.addDays(0 - _0x45841f);
    const v515 = v514 + " 00:00:00";
    const v516 = v514 + " 23:59:59";
    let v517 = "";
    if (_0x15e614) {
      const v518 = new Date(new Date().getTime() - v513.fbDkH(_0x15e614, 60) * 1000).Format("yyyy-MM-dd hh:mm:00");
      v517 = " and happenDate>'" + v518 + "' ";
    }
    const v519 = vRequire7.setTableName(v513.LgPOr, _0x45841f, _0x14d440);
    let v520 = v513.vtVkT(v513.XwdjP("select createdAt, happenTime from ", v519) + (" where happenDate>='" + v515 + "' and happenDate<='" + v516 + "' and simpleHttpUrl = '") + _0x3b2e25 + "' ", v517) + v513.SknsJ;
    return await v390.query(v520, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async ["getHttpErrorAffectCount"](p660) {
    const v521 = {
      wVeRu: function (p661, p662) {
        return p661 - p662;
      },
      AyETs: function (p663, p664) {
        return p663 + p664;
      },
      zfJvC: function (p665, p666) {
        return p665 + p666;
      }
    };
    const {
      simpleHttpUrl: _0x50dd71,
      timeType: _0x5d1384,
      webMonitorId: _0x2e4a62,
      recentMinute: _0x3f4ada
    } = p660;
    const v522 = vRequire3.addDays(v521.wVeRu(0, _0x5d1384));
    const v523 = v522 + " 00:00:00";
    const v524 = v521.AyETs(v522, " 23:59:59");
    let v525 = "";
    if (_0x3f4ada) {
      const v526 = new Date(v521.wVeRu(new Date().getTime(), _0x3f4ada * 60 * 1000)).Format("yyyy-MM-dd hh:mm:00");
      v525 = " happenDate>'" + v526 + "' and ";
    }
    const v527 = vRequire7.setTableName("HttpErrorInfo", _0x5d1384, _0x2e4a62);
    let v528 = v521.AyETs(v521.zfJvC("select count(DISTINCT customerKey) as count from " + v527, " where happenDate>='" + v523 + "' and happenDate<='" + v524 + "' and "), v525) + " simpleHttpUrl = '" + _0x50dd71 + "'";
    return await v390.query(v528, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async ["getHttpErrorCountByStatus"](p667) {
    const v529 = {
      remXY: function (p668, p669) {
        return p668 * p669;
      },
      qEfdu: function (p670, p671) {
        return p670 ^ p671;
      },
      uSxRC: function (p672, p673) {
        return p672 + p673;
      },
      SsbxU: "select status, count(status) as count from ",
      bmiVv: " where "
    };
    const {
      simpleHttpUrl: _0xc90a66,
      timeType: _0x16e3c0,
      webMonitorId: _0x2d15dd,
      recentMinute: _0x42cc37
    } = p667;
    let v530 = "";
    if (_0x42cc37) {
      const v531 = new Date(new Date().getTime() - v529.remXY(_0x42cc37 * v529.qEfdu(974099, 974127), 1000)).Format("yyyy-MM-dd hh:mm:00");
      v530 = " happenDate>'" + v531 + "' and ";
    }
    const v532 = vRequire7.setTableName("HttpErrorInfo", _0x16e3c0, _0x2d15dd);
    let v533 = v529.uSxRC(v529.SsbxU + v532 + v529.bmiVv, v530) + " simpleHttpUrl = '" + _0xc90a66 + "' group by `status`";
    return await v390.query(v533, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async getHttpErrorCountByRecentMinute(p674) {
    const v534 = {
      UQBJZ: function (p675, p676) {
        return p675 ^ p676;
      },
      CnHqM: function (p677, p678) {
        return p677 - p678;
      }
    };
    const {
      simpleHttpUrl: _0x933e09,
      minuteCount: _0x294825,
      webMonitorId: _0x20e0c0
    } = p674;
    const v535 = vRequire7.setTableName("HttpErrorInfo", v534.UQBJZ(202242, 202242), _0x20e0c0);
    const v536 = new Date().getTime();
    const v537 = new Date(v534.CnHqM(v536, v534.UQBJZ(133856, 132336) * 1000)).Format("yyyy-MM-dd hh:mm:00");
    let v538 = "SELECT happenMinute AS minutes, COUNT(dataId) AS count FROM " + v535 + " " + ("WHERE simpleHttpUrl = '" + _0x933e09 + "' and happenDate>='" + v537 + "' GROUP BY minutes");
    return await v390.query(v538, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async getHttpErrorCountByVersion(p679) {
    const {
      timeType: _0x5c0481,
      webMonitorId: _0x365cb3
    } = p679;
    const v539 = vRequire7.setTableName("HttpErrorInfo", _0x5c0481, _0x365cb3);
    const v540 = vRequire3.addDays(0 - _0x5c0481);
    const v541 = v540 + " 00:00:00";
    const v542 = v540 + " 23:59:59";
    const v543 = "SELECT projectVersion, count(dataId) as count from " + v539 + " where happenDate>='" + v541 + "' and happenDate<='" + v542 + "' GROUP BY projectVersion";
    return await v390.query(v543, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async getHttpErrorVersionByTime(p680, p681) {
    const v544 = {
      FtpmD: function (p682, p683) {
        return p682 + p683;
      },
      NOAlH: " 00:00:00"
    };
    const {
      timeSize: _0x3840d7,
      projectVersion: _0x29b9c8,
      webMonitorId: _0x14a2c6
    } = p680;
    const v545 = vRequire7.setTableName("HttpErrorInfo", _0x3840d7, _0x14a2c6);
    const v546 = vRequire3.addDays(0 - _0x3840d7);
    const v547 = v544.FtpmD(v546, v544.NOAlH);
    const v548 = v546 + " 23:59:59";
    const v549 = " happenDate>='" + v547 + "' and happenDate<='" + v548 + "' ";
    const v550 = " ORDER BY happenDate " + p681 + " ";
    let v551 = "select createdAt, happenTime from " + v545 + " where " + v549 + " and projectVersion='" + _0x29b9c8 + "' " + v550 + " limit 1";
    return await v390.query(v551, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async getErrorCodeForGroup(p684, p685) {
    const v552 = {
      PwOZI: " 23:59:59"
    };
    const v553 = vRequire3.addDays(p685);
    const v554 = v553 + " 00:00:00";
    const v555 = v553 + v552.PwOZI;
    let v556 = p684 + "HttpErrorInfo";
    let v557 = "select `status`, count(dataId) as count from " + v556 + " where happenDate>='" + v554 + "' and happenDate<='" + v555 + "' GROUP BY `status`";
    return await v390.query(v557, {
      type: v390.QueryTypes.SELECT
    });
  }
  static async getLogCountForDay(p686, p687) {
    const v558 = {
      EcwsJ: " 23:59:59",
      gUXNz: "HttpErrorInfo"
    };
    const v559 = vRequire3.addDays(p687);
    const v560 = v559 + " 00:00:00";
    const v561 = v559 + v558.EcwsJ;
    const v562 = vRequire7.setTableName(v558.gUXNz, p687, p686);
    let v563 = "select count(dataId) as count from " + v562 + " where happenDate>='" + v560 + "' and happenDate<='" + v561 + "'";
    return await v390.query(v563, {
      type: v390.QueryTypes.SELECT
    });
  }
}
const v564 = new vRequire2("../schema/behaviorInfo");
class C8 {
  static async createBehaviorInfo(p688) {
    const v565 = {
      MtkOP: function (p689, p690) {
        return p689 ^ p690;
      },
      OsNrq: function (p691, p692) {
        return p691 != p692;
      },
      bxleT: function (p693, p694) {
        return p693 + p694;
      },
      hHkGx: "updatedAt",
      hZXsJ: function (p695, p696) {
        return p695 ^ p696;
      },
      hidzZ: "', ",
      IvHXb: "DEFAULT, ",
      UqvEB: function (p697, p698) {
        return p697 ^ p698;
      },
      fnnsi: "happenTime",
      ordqY: "happenDate",
      EpdqC: "sessionId",
      jupFr: "className",
      oUZFg: "tagName"
    };
    if (p688.inputValue && p688.inputValue.length > 500) {
      p688.inputValue = p688.inputValue.substring(0, 490);
    }
    if (p688.innerText && p688.innerText.length > 500) {
      p688.innerText = p688.innerText.substring(0, 490);
    }
    if (p688.placeholder && p688.placeholder.length > 200) {
      p688.placeholder = p688.placeholder.substring(0, v565.UqvEB(527579, 527461));
    }
    let v566 = "";
    let v567 = "";
    const v568 = ["uploadType", v565.fnnsi, v565.ordqY, "happenHour", "happenMinute", "webMonitorId", v565.EpdqC, "customerKey", "simpleUrl", "completeUrl", "userId", "firstUserParam", "secondUserParam", "createdAt", "updatedAt", "id", "behaviorType", v565.jupFr, "placeholder", "inputValue", v565.oUZFg, "innerText"];
    v568.forEach((p699, p700) => {
      if (p700 == v568.length - v565.MtkOP(680144, 680145)) {
        v566 += "`" + p699 + "`";
        let v569 = p688[p699];
        if (v565.OsNrq(v569, undefined)) {
          v567 += v565.bxleT("'", v569) + "'";
        } else {
          v567 += "DEFAULT";
        }
      } else {
        v566 += "`" + p699 + "`, ";
        let v570 = p688[p699];
        switch (p699) {
          case "id":
            v570 = new Date().getTime() + vRequire3.getUuid();
            break;
          case "createdAt":
          case v565.hHkGx:
            v570 = new Date().Format("yyyy-MM-dd hh:mm:ss");
            break;
          case "happenHour":
            v570 = p688.happenDate ? p688.happenDate.substring(11, 13) : new Date().Format("hh");
            break;
          case "happenMinute":
            v570 = p688.happenDate ? p688.happenDate.substring(v565.MtkOP(783797, 783803), v565.hZXsJ(208656, 208640)) : new Date().Format("mm");
            break;
          default:
            break;
        }
        if (v570 != undefined) {
          v567 += "'" + v570 + v565.hidzZ;
        } else {
          v567 += v565.IvHXb;
        }
      }
    });
    const v571 = p688.webMonitorId + "BehaviorInfo";
    return await v564.create(p688, v571);
  }
  static async createBehaviorInfos(p701) {
    const v572 = {
      EMola: "BehaviorInfo",
      lhgvx: ") VALUES "
    };
    if (p701.length === 0) {
      return;
    }
    const v573 = p701[0];
    const v574 = v573.webMonitorId;
    const v575 = v574 + v572.EMola;
    const {
      keys: _0x563de5,
      valueSql: _0x6d879
    } = vRequire7.handleStructureSql(v564.schema.Columns.structure, p701);
    let v576 = "INSERT INTO " + v575 + " (" + _0x563de5 + v572.lhgvx + _0x6d879;
    return await v564.execSql(v576);
  }
  static async ["deleteBehaviorInfoFifteenDaysAgo"](p702) {
    const v577 = {
      XGQGX: " 00:00:00",
      GiCvA: function (p703, p704) {
        return p703 + p704;
      },
      rXfFh: "delete from ",
      JmiSU: "BehaviorInfo"
    };
    const v578 = vRequire3.addDays(0 - p702) + v577.XGQGX;
    var v579 = v577.GiCvA(v577.rXfFh + vRequire3.setTableName(v577.JmiSU) + " where createdAt<'", v578) + "'";
    return await v564.query(v579, {
      type: v564.QueryTypes.DELETE
    });
  }
  static async getBehaviorsByUser(p705, p706, p707) {
    const v580 = {
      OwUwB: "BehaviorInfo"
    };
    const {
      timeScope: _0x42b1a1,
      webMonitorId: _0x5defff
    } = p707;
    let v581 = "select * from " + vRequire7.setTableName(v580.OwUwB, _0x42b1a1, _0x5defff) + " where " + p706 + " and " + p705;
    return await v564.query(v581, {
      type: v564.QueryTypes.SELECT
    });
  }
  static async ["getClickCountInRealTimeByMinute"](p708, p709, p710) {
    const v582 = {
      vIeNX: function (p711, p712) {
        return p711 + p712;
      },
      stGcc: function (p713, p714) {
        return p713 + p714;
      },
      KhAwI: "select count(dataId) as clickCount from ",
      pXkHo: "BehaviorInfo"
    };
    let v583 = v582.vIeNX(v582.vIeNX(v582.stGcc(v582.KhAwI, vRequire7.setTableName(v582.pXkHo, 0, p708)) + " WHERE happenDate>='", p709) + "' AND happenDate<'" + p710, "' and behaviorType='click'");
    return await v564.query(v583, {
      type: v564.QueryTypes.SELECT
    });
  }
  static async getClickCountInRealTimeByEveryMinute(p715, p716, p717) {
    const v584 = {
      Itjvu: function (p718, p719) {
        return p718 + p719;
      },
      xBAqm: function (p720, p721) {
        return p720 ^ p721;
      }
    };
    let v585 = v584.Itjvu(v584.Itjvu("select formatDateTime(toDateTime(happenDate), '%Y-%m-%d %H:%M') AS time, count(dataId) as clickCount from " + vRequire7.setTableName("BehaviorInfo", v584.xBAqm(652372, 652372), p715) + " WHERE happenDate>='", p716) + "' AND happenDate<'", p717) + "' and behaviorType='click' group by time";
    return await v564.query(v585, {
      type: v564.QueryTypes.SELECT
    });
  }
  static async getLogCountForDay(p722, p723) {
    const v586 = {
      PeRKA: function (p724, p725) {
        return p724 + p725;
      },
      mNPWZ: " 00:00:00",
      kPRPk: "BehaviorInfo"
    };
    const v587 = vRequire3.addDays(p723);
    const v588 = v586.PeRKA(v587, v586.mNPWZ);
    const v589 = v587 + " 23:59:59";
    const v590 = vRequire7.setTableName(v586.kPRPk, p723, p722);
    let v591 = "select count(dataId) as count from " + v590 + " where happenDate>='" + v588 + "' and happenDate<='" + v589 + "'";
    return await v564.query(v591, {
      type: v564.QueryTypes.SELECT
    });
  }
}
const v592 = new vRequire2();
class C9 {
  static calcFlowData(p726, p727, p728 = 0) {
    if (!global.monitorInfo.calculateFlowData[p726]) {
      global.monitorInfo.calculateFlowData[p726] = {};
    }
    if (!global.monitorInfo.calculateFlowData[p726][p727]) {
      global.monitorInfo.calculateFlowData[p726][p727] = 1;
    } else {
      global.monitorInfo.calculateFlowData[p726][p727] += p728;
    }
  }
  static async ["getAllTableList"](p729, p730) {
    let v593 = "\n    SELECT \n      table_name as tableName\n    FROM\n      information_schema.tables \n    WHERE table_schema = '" + p729 + "' \n      AND table_name like '" + p730 + "%' \n    ";
    return await v592.query(v593, {
      type: v592.QueryTypes.SELECT
    });
  }
  static async dropAllTableNames(p731) {
    let v594 = "\n    DROP TABLE \n    " + p731 + " \n    ";
    return await v592.query(v594, {
      type: v592.QueryTypes.SELECT
    });
  }
  static async checkMysqlConnectErrors() {
    const v595 = {
      PxRJg: "select ip, SUM_CONNECT_ERRORS as count from performance_schema.host_cache"
    };
    let v596 = v595.PxRJg;
    return await v592.query(v596, {
      type: v592.QueryTypes.SELECT
    });
  }
  static async checkMysqlConnects() {
    const v597 = {
      AnvJC: "SELECT * from information_schema.GLOBAL_STATUS WHERE VARIABLE_NAME='MAX_USED_CONNECTIONS'"
    };
    let v598 = v597.AnvJC;
    return await v592.query(v598, {
      type: v592.QueryTypes.SELECT
    });
  }
  static async ["deleteTableByName"](p732) {
    let v599 = "drop table " + p732;
    await v592.query(v599, {
      type: v592.QueryTypes.SELECT
    });
  }
  static async ["updateTableFields"](p733) {
    for (let v600 = 0; v600 < p733.length; v600++) {
      if (p733[v600]) {
        await v592.query(p733[v600], {
          type: v592.QueryTypes.SELECT
        });
      }
    }
  }
  static async ["getUserIdType"](p734) {
    const v601 = {
      yfATT: function (p735, p736) {
        return p735 ^ p736;
      },
      vOPtR: function (p737, p738) {
        return p737(p738);
      }
    };
    let v602 = "select userIdType from Project where webMonitorId='" + p734 + "'";
    return new Promise(async (p739, p740) => {
      try {
        const v603 = await v592.query(v602, {
          type: v592.QueryTypes.SELECT
        });
        let v604 = "";
        if (v603 && v603.length > 0) {
          v604 = v603[v601.yfATT(512282, 512282)].userIdType || "customerKey";
        } else {
          v604 = "customerKey";
        }
        p739(v604);
      } catch (_0x1711ea) {
        v601.vOPtR(p740, _0x1711ea);
      }
    });
  }
  static async getTableFields(p741) {
    let v605 = "select * from information_schema.columns where table_name = '" + p741 + "'";
    return await v592.query(v605, {
      type: v592.QueryTypes.SELECT
    });
  }
}
const v606 = new vRequire2("../schema/extendBehaviorInfo");
class C10 {
  static async ["createExtendBehaviorInfo"](p747) {
    const v607 = {
      TEvDm: function (p748, p749) {
        return p748 + p749;
      },
      wPoFg: function (p750, p751) {
        return p750 != p751;
      },
      eXyZK: function (p752, p753) {
        return p752 + p753;
      },
      wUfaF: "createdAt",
      uHqBI: "yyyy-MM-dd hh:mm:ss",
      GrNcx: "happenMinute",
      ODslX: function (p754, p755) {
        return p754 + p755;
      },
      mBbcJ: "', ",
      bnwSw: "behaviorResult"
    };
    let v608 = "";
    let v609 = "";
    const v610 = ["id", "userId", "behaviorType", v607.bnwSw, "uploadType", "description", v607.wUfaF, "updatedAt", "happenTime", "happenDate", "happenHour", v607.GrNcx];
    v610.forEach((p756, p757) => {
      if (p757 == v610.length - 1) {
        v608 += v607.TEvDm("`" + p756, "`");
        let v611 = p747[p756];
        if (v607.wPoFg(v611, undefined)) {
          v609 += v607.eXyZK(v607.eXyZK("'", v611), "'");
        } else {
          v609 += "DEFAULT";
        }
      } else {
        v608 += "`" + p756 + "`, ";
        let v612 = p747[p756];
        switch (p756) {
          case "id":
            v612 = new Date().getTime() + vRequire3.getUuid();
            break;
          case v607.wUfaF:
          case "updatedAt":
            v612 = new Date().Format(v607.uHqBI);
            break;
          case "happenHour":
            v612 = p747.happenDate ? p747.happenDate.substring(11, 13) : new Date().Format("hh");
            break;
          case v607.GrNcx:
            v612 = p747.happenDate ? p747.happenDate.substring(14, 16) : new Date().Format("mm");
            break;
          default:
            break;
        }
        if (v612 != undefined) {
          v609 += v607.ODslX("'", v612) + v607.mBbcJ;
        } else {
          v609 += "DEFAULT, ";
        }
      }
    });
    const v613 = v607.TEvDm(p747.webMonitorId, "ExtendBehaviorInfo");
    return await v606.create(p747, v613);
  }
  static async ["getExtendBehaviorInfoByUserId"](p758, p759, p760) {
    const v614 = {
      lnogl: function (p761, p762) {
        return p761 + p762;
      },
      FvPGG: "select * from "
    };
    const {
      timeScope: _0x2f7583,
      webMonitorId: _0x565f13
    } = p760;
    let v615 = v614.lnogl(v614.lnogl(v614.FvPGG, vRequire7.setTableName("ExtendBehaviorInfo", _0x2f7583, _0x565f13)) + " where ", p758) + "and" + p759;
    return await v606.query(v615, {
      type: v606.QueryTypes.SELECT
    });
  }
}
const v616 = new vRequire2("../schema/config");
v616.createTable();
class C11 {
  static async createConfig(p768) {
    return await v616.create(p768);
  }
  static async getConfigDetail(p769) {
    return await v616.findOne({
      where: {
        dataId: p769
      }
    });
  }
  static async getConfigByName(p770) {
    const v617 = {
      xvkIJ: function (p771, p772) {
        return p771 + p772;
      }
    };
    let v618 = v617.xvkIJ("select * from Config where configName='" + p770, "' limit 1");
    return await v616.query(v618);
  }
  static async ["update"](p773, p774) {
    await v616.update({
      ...p774
    }, {
      where: {
        dataId: p773
      },
      fields: Object.keys(p774)
    });
    return true;
  }
  static async updateConfig(p775, p776) {
    await v616.update({
      ...p776
    }, {
      where: {
        configName: p775
      },
      fields: Object.keys(p776)
    });
    return true;
  }
  static async updateWithInsert(p777, p778) {
    await v616.updateWithInsert({
      ...p778
    }, {
      where: {
        configName: p777
      },
      fields: Object.keys(p778)
    });
    return true;
  }
  static async ["getConfigByConfigName"](p779) {
    const v619 = {
      RkGLw: function (p780, p781) {
        return p780 + p781;
      },
      dRBMD: "select * from Config where configName='"
    };
    let v620 = v619.RkGLw(v619.dRBMD, p779) + "'";
    return await v616.query(v620);
  }
  static async ["getAllConfigList"]() {
    let v621 = "select * from Config";
    return await v616.query(v621);
  }
}
const v622 = new vRequire2("../schema/ignoreError");
v622.createTable();
class C12 {
  static async createIgnoreError(p782) {
    return await v622.create({
      ...p782
    });
  }
  static async ["updateIgnoreError"](p783, p784) {
    await v622.update({
      ...p784
    }, {
      where: {
        dataId: p783
      },
      fields: Object.keys(p784)
    });
    return true;
  }
  static async getIgnoreErrorList() {
    return await v622.findAndCountAll();
  }
  static async ignoreErrorByApplication(p785) {
    return await v622.query("select * from IgnoreError WHERE webMonitorId='" + p785.webMonitorId + "'", {
      type: v622.QueryTypes.SELECT
    });
  }
  static async getIgnoreErrorDetail(p786) {
    return await v622.findOne({
      where: {
        dataId: p786
      }
    });
  }
  static async ["getIgnoreErrorByMsg"](p787) {
    return await v622.query("select count(dataId) as count from IgnoreError WHERE webMonitorId='" + p787.webMonitorId + "' and ignoreErrorMessage='" + p787.errorMessage + "'", {
      type: v622.QueryTypes.SELECT
    });
  }
  static async deleteIgnoreError(p788) {
    await v622.destroy({
      where: {
        dataId: p788
      }
    });
    return true;
  }
}
const v623 = new vRequire2("../schema/deviceInfoCountByHour");
class C13 {
  static async createDeviceInfoCountByHour(p789) {
    const {
      webMonitorId: _0x359943
    } = p789;
    return await v623.create({
      ...p789
    }, _0x359943 + "DeviceInfoCountByHour");
  }
  static async updateDeviceInfoCountByHour(p790, p791) {
    const v624 = {
      uoluw: function (p792, p793) {
        return p792 + p793;
      },
      LsVFk: "DeviceInfoCountByHour"
    };
    const {
      webMonitorId: _0x379a4b
    } = p791;
    await v623.update({
      ...p791
    }, {
      where: {
        dataId: p790
      },
      fields: Object.keys(p791)
    }, v624.uoluw(_0x379a4b, v624.LsVFk));
    return true;
  }
  static async getDeviceInfoCountByHourList() {
    return await v623.findAndCountAll();
  }
  static async getDeviceInfoCountByHourDetail(p794) {
    return await v623.findOne({
      where: {
        dataId: p794
      }
    });
  }
  static async ["getDeviceInfoCountByIdByHourName"](p795, p796, p797, p798) {
    const v625 = {
      TSmJk: function (p799, p800) {
        return p799 + p800;
      },
      dZVnZ: function (p801, p802) {
        return p801 + p802;
      }
    };
    const v626 = p796 + "DeviceInfoCountByHour";
    let v627 = v625.TSmJk(v625.dZVnZ(v625.dZVnZ(v625.dZVnZ("select dataId from ", v626), " WHERE hourName='"), p795) + "' and uploadType='" + p797, "' and showName='") + p798 + "'";
    return await v623.query(v627, {
      type: v623.QueryTypes.SELECT
    });
  }
  static async getDeviceInfoCountByHourDetailByHourName(p803, p804, p805) {
    const v628 = {
      pTYmd: "DeviceInfoCountByHour",
      dWKoW: function (p806, p807) {
        return p806 + p807;
      },
      dGACh: function (p808, p809) {
        return p808 + p809;
      }
    };
    const v629 = p804 + v628.pTYmd;
    let v630 = v628.dWKoW(v628.dGACh("select * from " + v629, " WHERE hourName='") + p803 + "' and uploadType='" + p805, "'");
    return await v623.query(v630, {
      type: v623.QueryTypes.SELECT
    });
  }
  static async deleteDeviceInfoCountByHour(p810) {
    await v623.destroy({
      where: {
        dataId: p810
      }
    });
    return true;
  }
  static async ["deleteOneYearAgo"]() {
    const v631 = {
      QZbGi: function (p811, p812) {
        return p811 - p812;
      },
      sVnvm: function (p813, p814) {
        return p813 * p814;
      },
      RQkEd: function (p815, p816) {
        return p815 ^ p816;
      },
      bvHLl: "yyyy-MM-dd 00:00:00"
    };
    const v632 = v631.QZbGi(new Date().getTime(), v631.sVnvm(v631.sVnvm(v631.RQkEd(902525, 902501) * 366, 3600), 1000));
    const v633 = webMonitorId + "DeviceInfoCountByHour";
    let v634 = "delete from " + v633 + " where createdAt<'" + new Date(v632).Format(v631.bvHLl) + "'";
    return v623.query(v634, {
      type: v623.QueryTypes.SELECT
    });
  }
  static async deleteOneMonthAgo() {
    const v635 = {
      lNIzi: function (p817, p818) {
        return p817 - p818;
      },
      kHdcB: function (p819, p820) {
        return p819 * p820;
      }
    };
    const v636 = v635.lNIzi(new Date().getTime(), v635.kHdcB(v635.kHdcB(31, 24), 3600) * 1000);
    const v637 = webMonitorId + "DeviceInfoCountByHour";
    let v638 = "delete from " + v637 + " where createdAt<'" + new Date(v636).Format("yyyy-MM-dd 00:00:00") + "'";
    return v623.query(v638, {
      type: v623.QueryTypes.SELECT
    });
  }
}
const v639 = new vRequire2("../schema/alarmRule");
v639.createTable();
class C14 {
  static async createAlarmRule(p821) {
    return await v639.create({
      ...p821
    });
  }
  static async deleteAlarmRule(p822) {
    await v639.destroy({
      where: {
        dataId: p822
      }
    });
    return true;
  }
  static async getAllAlarmRule() {
    const v640 = {
      TiPAn: "select * from AlarmRule"
    };
    let v641 = v640.TiPAn;
    return await v639.query(v641, {
      type: v639.QueryTypes.SELECT
    });
  }
  static async ["getAlarmRuleDetail"](p823 = "") {
    return await v639.findOne({
      where: {
        dataId: p823
      }
    });
  }
  static async updateAlarmRule(p824, p825) {
    delete p825.dataId;
    await v639.update({
      ...p825
    }, {
      where: {
        dataId: p824
      },
      fields: Object.keys(p825)
    });
    return true;
  }
}
const v642 = new vRequire2("../schema/javascriptErrorInfo");
function f24(p826) {
  const v643 = {
    uQeam: "\\.[\\.\\/]+"
  };
  return p826.replace(new RegExp(v643.uQeam, "g"), "");
}
class C15 {
  static async createJavascriptErrorInfo(p837) {
    const v644 = {
      NecWc: function (p838, p839) {
        return p838 ^ p839;
      },
      pcaPq: "simpleErrorMessage",
      KzMZx: function (p840, p841) {
        return p840 >= p841;
      },
      XsQkF: function (p842, p843) {
        return p842 ^ p843;
      },
      upfJi: function (p844, p845) {
        return p844 ^ p845;
      },
      QmoEk: "happenHour",
      Wrspp: function (p846, p847) {
        return p846 ^ p847;
      },
      TcLaO: function (p848, p849) {
        return p848 + p849;
      },
      jeriQ: "', ",
      uhybw: "DEFAULT, ",
      lbjqW: "JavascriptErrorInfo"
    };
    p837.province = "";
    p837.city = "";
    let v645 = "";
    let v646 = "";
    const v647 = ["uploadType", "happenTime", "happenDate", "happenHour", "happenMinute", "webMonitorId", "projectVersion", "customerKey", "sessionId", "simpleUrl", "completeUrl", "userId", "firstUserParam", "secondUserParam", "createdAt", "updatedAt", "pageKey", "deviceName", "os", "browserName", "browserVersion", "monitorIp", "country", "province", "city", "infoType", "simpleErrorMessage", "errorMessage", "errorStack", "browserInfo"];
    v647.forEach((p850, p851) => {
      if (p851 == v647.length - v644.NecWc(880492, 880493)) {
        v645 += "`" + p850 + "`";
        let v648 = p837[p850];
        if (v648 != undefined) {
          v646 += "'" + v648 + "'";
        } else {
          v646 += "DEFAULT";
        }
      } else {
        v645 += "`" + p850 + "`, ";
        let v649 = p837[p850];
        switch (p850) {
          case v644.pcaPq:
            if (p837.simpleErrorMessage) {
              let v650 = p837.simpleErrorMessage.length;
              if (v644.KzMZx(v650, v644.XsQkF(746024, 746199))) {
                let v651 = vRequire3.b64DecodeUnicode(p837.simpleErrorMessage || "");
                v649 = vRequire3.b64EncodeUnicode(v651.substring(0, 34));
              } else {
                v649 = p837.simpleErrorMessage;
              }
            } else {
              let v652 = vRequire3.b64DecodeUnicode(p837.errorMessage || "");
              if (p837.errorMessage.length >= v644.upfJi(140123, 140196)) {
                v649 = vRequire3.b64EncodeUnicode(v652.substring(v644.XsQkF(142630, 142630), v644.upfJi(818139, 818169)));
              } else {
                v649 = p837.errorMessage;
              }
            }
            break;
          case "createdAt":
          case "updatedAt":
            v649 = new Date().Format("yyyy-MM-dd hh:mm:ss");
            break;
          case v644.QmoEk:
            v649 = p837.happenDate ? p837.happenDate.substring(11, 13) : new Date().Format("hh");
            break;
          case "happenMinute":
            v649 = p837.happenDate ? p837.happenDate.substring(v644.Wrspp(461259, 461253), 16) : new Date().Format("mm");
            break;
          default:
            break;
        }
        if (v649 != undefined) {
          v646 += v644.TcLaO("'" + v649, v644.jeriQ);
        } else {
          v646 += v644.uhybw;
        }
      }
    });
    const v653 = p837.webMonitorId + v644.lbjqW;
    return await v642.create(p837, v653);
  }
  static async createJavascriptErrorInfos(p852) {
    const v654 = {
      Gpmcg: function (p853, p854) {
        return p853 === p854;
      },
      DoxZb: function (p855, p856) {
        return p855 + p856;
      },
      IgQTN: function (p857, p858) {
        return p857 + p858;
      },
      uvjRZ: "INSERT INTO "
    };
    if (v654.Gpmcg(p852.length, 0)) {
      return;
    }
    const v655 = p852[0];
    const v656 = v655.webMonitorId;
    const v657 = v656 + "JavascriptErrorInfo";
    const {
      keys: _0x1d2853,
      valueSql: _0x1b33ad
    } = vRequire7.handleStructureSql(v642.schema.Columns.structure, p852);
    let v658 = v654.DoxZb(v654.IgQTN(v654.uvjRZ, v657) + " (" + _0x1d2853, ") VALUES ") + _0x1b33ad;
    return await v642.execSql(v658);
  }
  static async ["deleteJavascriptErrorInfosFifteenDaysAgo"](p859) {
    const v659 = {
      lmnlF: function (p860, p861) {
        return p860 - p861;
      },
      qVdDD: function (p862, p863) {
        return p862 ^ p863;
      }
    };
    const v660 = vRequire4.addDays(v659.lmnlF(v659.qVdDD(724613, 724613), p859)) + " 00:00:00";
    var v661 = "delete from JavascriptErrorInfo where createdAt<'" + v660 + "'";
    return await v642.query(v661, {
      type: v642.QueryTypes.DELETE
    });
  }
  static async getJavascriptErrorInfoListByDay(p864) {
    const v662 = {
      oLbSU: function (p865, p866) {
        return p865 + p866;
      }
    };
    const {
      startDate: _0x499e16,
      endDate: _0x484449,
      infoType: _0x3cfe14
    } = p864;
    const v663 = v662.oLbSU(_0x499e16, " 00:00:00");
    const v664 = v662.oLbSU(_0x484449, " 23:59:59");
    const v665 = " happenDate>='" + v663 + "' and happenDate<='" + v664 + "' ";
    const v666 = " and infoType='" + _0x3cfe14 + "' ";
    const v667 = p864.webMonitorId + "JavascriptErrorInfo";
    const v668 = "SELECT DATE_FORMAT(happenDate,'%Y-%m-%d') as day, count(dataId) as count, count(DISTINCT customerKey) as uvCount from " + v667 + " where " + v665 + " " + v666 + " group by day";
    return await v642.query(v668, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async getConsoleErrorInfoListByDay(p867) {
    const v669 = {
      EHLsk: function (p868, p869) {
        return p868 + p869;
      },
      lvZhM: "SELECT dayName as day, dayCount as count from "
    };
    const v670 = p867.webMonitorId + "InfoCountByDay";
    let v671 = v669.EHLsk(v669.EHLsk(v669.lvZhM + v670 + " where uploadType='", p867.infoType), "'");
    return await v642.query(v671, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["getJavascriptErrorCountByMinute"](p870) {
    const v672 = {
      ogSRz: function (p871, p872) {
        return p871 ^ p872;
      },
      PKtCC: function (p873, p874) {
        return p873 * p874;
      },
      HKYGj: "JavascriptErrorInfo",
      qLnpm: function (p875, p876) {
        return p875 + p876;
      },
      mnvWH: function (p877, p878) {
        return p877 + p878;
      },
      hxggU: function (p879, p880) {
        return p879 + p880;
      },
      qOlsZ: function (p881, p882) {
        return p881 + p882;
      },
      DjgVp: "' and happenDate<'"
    };
    let {
      timeHour: _0x3da389,
      timeType: _0x2c8278,
      simpleUrl = ""
    } = p870;
    const v673 = new Date(parseInt(_0x3da389, 10)).Format("yyyy-MM-dd hh:00:00");
    const v674 = new Date(parseInt(_0x3da389, v672.ogSRz(924623, 924613)) + v672.PKtCC(v672.ogSRz(230937, 230949) * 60, v672.ogSRz(526161, 525497))).Format("yyyy-MM-dd hh:00:00");
    const v675 = vRequire7.setTableName(v672.HKYGj, _0x2c8278, p870.webMonitorId);
    const v676 = simpleUrl ? " and simpleUrl='" + simpleUrl + "' " : " ";
    let v677 = v672.qLnpm(v672.mnvWH(v672.hxggU(v672.qOlsZ("SELECT happenMinute AS minutes, COUNT(dataId) AS count FROM ", v675) + " WHERE happenDate>'", v673), v672.DjgVp) + v674 + "' and simpleErrorMessage = '" + p870.errorMessage + "' ", v676) + " GROUP BY minutes";
    return await v642.query(v677, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["getJsErrorTypeCountByMinute"](p883) {
    const v678 = {
      ugVta: function (p884, p885, p886) {
        return p884(p885, p886);
      },
      cLCcy: function (p887, p888) {
        return p887 + p888;
      },
      tYSXn: function (p889, p890) {
        return p889 * p890;
      },
      Jpnbp: function (p891, p892) {
        return p891 ^ p892;
      },
      rQxlJ: "yyyy-MM-dd hh:00:00",
      fBDJR: function (p893, p894) {
        return p893 + p894;
      },
      gmPgm: "SELECT formatDateTime(toDateTime(happenDate), '%Y-%m-%d %H:%M') AS minutes, COUNT(dataId) AS count FROM ",
      BuEjY: "WHERE happenDate>'"
    };
    let {
      timeHour: _0xac9d26,
      timeType: _0x3e22e4,
      infoType: _0x1f1fe5
    } = p883;
    const v679 = new Date(v678.ugVta(parseInt, _0xac9d26, 10)).Format("yyyy-MM-dd hh:00:00");
    const v680 = new Date(v678.cLCcy(parseInt(_0xac9d26, 10), v678.tYSXn(60, v678.Jpnbp(544855, 544875)) * v678.Jpnbp(891301, 891469))).Format(v678.rQxlJ);
    const v681 = vRequire7.setTableName("JavascriptErrorInfo", _0x3e22e4, p883.webMonitorId);
    const v682 = _0x1f1fe5 ? v678.cLCcy(" and infoType = '", _0x1f1fe5) + "' " : "";
    let v683 = v678.cLCcy(v678.fBDJR(v678.fBDJR(v678.gmPgm + v681 + " " + v678.BuEjY, v679) + "' and happenDate<'", v680) + "' ", v682) + " and formatDateTime(timestamp_sub(MINUTE, 60, toDateTime('" + v680 + "')), '%Y-%m-%d %H:%M:%S') <= happenDate GROUP BY minutes";
    return await v642.query(v683, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["getJsErrorCountByRecentMinute"](p895) {
    const v684 = {
      Isalp: "JavascriptErrorInfo",
      OUaju: "yyyy-MM-dd hh:mm:ss"
    };
    const {
      minuteCount: _0x519d6e,
      webMonitorId: _0x29f491,
      simpleUrl: _0x231d95
    } = p895;
    const v685 = vRequire7.setTableName(v684.Isalp, 0, _0x29f491);
    const v686 = new Date().getTime();
    const v687 = new Date(v686 - _0x519d6e * 60 * 1000).Format(v684.OUaju);
    const v688 = new Date(v686).Format("yyyy-MM-dd hh:mm:ss");
    const v689 = _0x231d95 ? " and simpleUrl='" + _0x231d95 + "' " : " ";
    let v690 = "\n      SELECT happenMinute AS minutes, COUNT(dataId) AS count FROM " + v685 + "\n      WHERE happenDate>'" + v687 + "' and happenDate<'" + v688 + "' and \n      simpleErrorMessage = '" + p895.errorMessage + "' " + v689 + "\n      GROUP BY minutes\n    ";
    return await v642.query(v690, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async getJavascriptErrorCountListByHour(p896) {
    const v691 = {
      GJjiT: function (p897, p898) {
        return p897 - p898;
      },
      uSQSb: " 23:59:59",
      UtQJb: function (p899, p900) {
        return p899 + p900;
      },
      gpGdy: function (p901, p902) {
        return p901 + p902;
      }
    };
    const {
      timeType: _0x254c86,
      infoType: _0x1ec7d7,
      errorMessage: _0x5e4279,
      webMonitorId: _0x20d216,
      simpleUrl = ""
    } = p896;
    const v692 = vRequire3.addDays(v691.GJjiT(0, _0x254c86));
    const v693 = v692 + " 00:00:00";
    const v694 = v692 + v691.uSQSb;
    let v695 = _0x5e4279 ? " and simpleErrorMessage = '" + _0x5e4279 + "' " : "";
    let v696 = _0x1ec7d7 ? v691.UtQJb(" and infoType = '" + _0x1ec7d7, "' ") : "";
    const v697 = simpleUrl ? " and simpleUrl='" + simpleUrl + "' " : " ";
    const v698 = vRequire7.setTableName("JavascriptErrorInfo", _0x254c86, _0x20d216);
    const v699 = v691.UtQJb(v691.UtQJb(v691.gpGdy(v691.UtQJb("SELECT formatDateTime(toDateTime(happenDate), '%Y-%m-%d %H') AS hour, COUNT(dataId) AS count ", "FROM "), v698) + (" where happenDate>='" + v693 + "' and happenDate<='" + v694 + "' ") + v695, v696), v697) + "GROUP BY hour";
    return await v642.query(v699, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["getJsErrorCountListByHour"](p903, p904, p905 = "on_error") {
    const v700 = {
      akRfA: " 23:59:59"
    };
    const v701 = vRequire3.addDays(p904);
    const v702 = v701 + " 00:00:00";
    const v703 = v701 + v700.akRfA;
    let v704 = p903 + "JavascriptErrorInfo";
    let v705 = "select happenHour as hour, count(dataId) as count from " + v704 + " WHERE happenDate>='" + v702 + "' and happenDate<='" + v703 + "' and infoType='" + p905 + "' group by happenHour";
    return await v642.query(v705, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async getJavascriptErrorInfoListSevenDayAgoByHour(p906) {
    const v706 = {
      GwXMA: function (p907, p908) {
        return p907 === p908;
      },
      TOHpw: " 00:00:00",
      KRHJB: function (p909, p910) {
        return p909 ^ p910;
      },
      cEpVq: function (p911, p912) {
        return p911 + p912;
      },
      gaTiO: "WHERE infoType='"
    };
    const v707 = new Date().getHours();
    let vV707 = v707;
    let v708 = "";
    if (v706.GwXMA(v707, 23)) {
      v708 = vRequire4.addDays(-6) + v706.TOHpw;
    } else {
      vV707 = vV707 + v706.KRHJB(375711, 375710);
      v708 = vRequire4.addDays(-7) + " " + vV707 + ":00:00";
    }
    const v709 = v706.cEpVq(v706.cEpVq("SELECT DATE_FORMAT(createdAt,'%m-%d %H') AS hour, COUNT(dataId) AS count FROM JavascriptErrorInfo " + v706.gaTiO + p906.infoType, "' and createdAt<'"), v708) + "' and DATE_FORMAT(DATE_SUB(NOW(),INTERVAL 7 DAY) - INTERVAL 23 HOUR, '%Y-%m-%d %H') <= createdAt GROUP BY HOUR";
    return await v642.query(v709, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async getJavascriptErrorCountByDay(p913, p914, p915) {
    const v710 = {
      RFDrb: function (p916, p917) {
        return p916 + p917;
      }
    };
    return await v642.query(v710.RFDrb("SELECT count(dataId) as count from JavascriptErrorInfo where createdAt > '" + p913 + "' and createdAt < '", p914) + "'", {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["getJavascriptErrorSort"](p918) {
    const v711 = {
      XESBp: "JavascriptErrorInfo",
      QgRxq: " and simpleUrl='",
      eCqXv: "all",
      RVjWt: function (p919, p920) {
        return p919 + p920;
      }
    };
    const {
      simpleUrl: _0x32871f,
      timeType: _0x4e5233,
      webMonitorId: _0x35ea52,
      showType: _0x937ed1
    } = p918;
    const v712 = vRequire7.setTableName(v711.XESBp, _0x4e5233, _0x35ea52);
    const v713 = _0x32871f ? v711.QgRxq + _0x32871f + "' " : " ";
    const v714 = _0x937ed1 === v711.eCqXv ? "" : " limit 20";
    const v715 = v711.RVjWt("select errorMessage, count(errorMessage) as count from " + v712, " where infoType='on_error' ") + v713 + " GROUP BY errorMessage order by count desc " + v714;
    return await v642.query(v715, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["getJsErrorSort"](p921) {
    const v716 = {
      QeaEN: function (p922, p923) {
        return p922 + p923;
      },
      YIVRu: function (p924, p925) {
        return p924 + p925;
      },
      MHAsk: "select simpleErrorMessage as errorMessage, count(simpleErrorMessage) as count, count(distinct ",
      Rcmep: function (p926, p927) {
        return p926 + p927;
      },
      ucRBk: "select simpleErrorMessage as errorMessage, count(simpleErrorMessage) as count from ",
      MYpjP: function (p928, p929) {
        return p928 + p929;
      },
      UTWpD: "select simpleErrorMessage as errorMessage, count(distinct "
    };
    const {
      chooseUrl = "",
      errorType = "all",
      sortType = "count",
      errorStatus: _0x406f6f,
      timeType = 0,
      page: _0x59ce55,
      pageSize: _0x2e0c84,
      webMonitorId: _0x31087c,
      recentMinute: _0x54e4f0,
      errorMessageArray: _0x41cb55
    } = p921;
    const v717 = await C9.getUserIdType(_0x31087c);
    const v718 = vRequire7.setTableName("JavascriptErrorInfo", timeType, _0x31087c);
    let v719 = "";
    const v720 = errorType === "all" ? "" : " and infoType='" + errorType + "' ";
    let v721 = "";
    if (_0x54e4f0) {
      const v722 = new Date(new Date().getTime() - _0x54e4f0 * 60 * 1000).Format("yyyy-MM-dd hh:mm:00");
      v721 = " where happenDate>'" + v722 + "' ";
      v719 = v716.QeaEN(v716.YIVRu(v716.MHAsk, v717), ") as person from ") + v718 + v721 + v720 + " GROUP BY simpleErrorMessage order by count desc limit 5";
      return await v642.query(v719, {
        type: v642.QueryTypes.SELECT
      });
    }
    let v723 = "";
    if (_0x41cb55.length) {
      let v724 = "'webfunny'";
      _0x41cb55.forEach(p930 => {
        v724 += ",'" + p930 + "'";
      });
      v723 = " AND errorMessage in (" + v724 + ") ";
    }
    const v725 = chooseUrl ? " and simpleUrl='" + chooseUrl + "' " : "";
    const v726 = " limit " + _0x59ce55 * _0x2e0c84 + "," + _0x2e0c84 + " ";
    const v727 = " order by " + sortType + " desc ";
    const v728 = vRequire3.handleWholeDaySql(0 - timeType);
    if (sortType === "count") {
      v719 = v716.QeaEN(v716.Rcmep(v716.Rcmep(v716.ucRBk + v718 + " where " + v728 + v720 + v723, v725), " GROUP BY simpleErrorMessage "), v727) + v726;
    } else if (sortType === "person") {
      v719 = v716.QeaEN(v716.Rcmep(v716.MYpjP(v716.YIVRu(v716.UTWpD + v717 + ") as person from " + v718, " where ") + v728 + v720 + v723 + v725, " GROUP BY simpleErrorMessage "), v727), v726);
    }
    return await v642.query(v719, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["getConsoleErrorSort"](p931) {
    const v729 = {
      OZyeY: "JavascriptErrorInfo",
      SuvXj: function (p932, p933) {
        return p932 + p933;
      },
      ImuwU: "select errorMessage, count(errorMessage) as count from ",
      QzHMQ: " where infoType='console_error' "
    };
    const {
      simpleUrl: _0x1645ce,
      timeType: _0x168b81,
      webMonitorId: _0x344fe9,
      showType: _0x54959a
    } = p931;
    const v730 = vRequire7.setTableName(v729.OZyeY, _0x168b81, _0x344fe9);
    const v731 = _0x1645ce ? v729.SuvXj(" and simpleUrl='", _0x1645ce) + "' " : " ";
    const v732 = _0x54959a === "all" ? "" : " limit 20";
    const v733 = v729.SuvXj(v729.ImuwU + v730 + v729.QzHMQ, v731) + " GROUP BY errorMessage order by count desc " + v732;
    return await v642.query(v733, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async getPerJavascriptConsoleErrorCount(p934, p935) {
    const v734 = {
      Kfboa: function (p936, p937) {
        return p936 + p937;
      },
      qTsfp: function (p938, p939) {
        return p938 + p939;
      }
    };
    const {
      simpleUrl: _0x181991,
      timeType: _0x374d0f,
      webMonitorId: _0x278bf2
    } = p935;
    const v735 = vRequire7.setTableName("JavascriptErrorInfo", _0x374d0f, _0x278bf2);
    const v736 = _0x181991 ? v734.Kfboa(" and simpleUrl='" + _0x181991, "' ") : " ";
    const v737 = v736 + vRequire7.createTimeScopeSql(_0x374d0f);
    const v738 = p934.replace(new RegExp("'", "g"), "\\'");
    return await v642.query(v734.Kfboa(v734.Kfboa(v734.qTsfp("SELECT count(dataId) as count from " + v735, " where infoType='console_error' "), v737) + " and errorMessage = '", v738) + "' order by count desc", {
      type: v642.QueryTypes.SELECT
    });
  }
  static async getPerJavascriptErrorCountByOs(p940, p941) {
    const v739 = {
      ghiXG: function (p942, p943) {
        return p942 - p943;
      },
      IBdTT: function (p944, p945) {
        return p944 * p945;
      },
      plMdF: function (p946, p947) {
        return p946 ^ p947;
      },
      OPbdj: function (p948, p949) {
        return p948 ^ p949;
      },
      PlaHK: "yyyy-MM-dd 23:59:59",
      DpWUq: " infoType='",
      UeRyA: function (p950, p951) {
        return p950 + p951;
      },
      XdUNJ: function (p952, p953) {
        return p952 + p953;
      },
      GIYUc: function (p954, p955) {
        return p954 + p955;
      },
      jnFtM: "SELECT tab.os as os, count(tab.os) as count from (select SUBSTRING(os,1,3) as os from ",
      KGsrw: " simpleErrorMessage = '",
      KZucE: "') as tab GROUP BY os order by count desc"
    };
    const {
      simpleUrl: _0x21b1b5,
      timeType: _0x3789ef,
      infoType: _0x3539dc,
      webMonitorId: _0x4e5de9,
      recentMinute: _0x4446d5
    } = p941;
    let v740 = "";
    if (_0x4446d5) {
      const v741 = new Date(v739.ghiXG(new Date().getTime(), _0x4446d5 * 60 * 1000)).Format("yyyy-MM-dd hh:mm:00");
      v740 = " happenDate>'" + v741 + "' and ";
    } else {
      const v742 = new Date().getTime() - v739.IBdTT(_0x3789ef, v739.plMdF(639862, 639854)) * v739.OPbdj(106687, 110255) * 1000;
      const v743 = new Date(v742).Format("yyyy-MM-dd 00:00:00");
      const v744 = new Date(v742).Format(v739.PlaHK);
      v740 = " happenDate>='" + v743 + "' and happenDate<='" + v744 + "' and ";
    }
    const v745 = _0x3539dc ? v739.DpWUq + _0x3539dc + "' and " : " ";
    const v746 = vRequire7.setTableName("JavascriptErrorInfo", _0x3789ef, _0x4e5de9);
    const v747 = _0x21b1b5 ? " simpleUrl='" + _0x21b1b5 + "' and " : " ";
    const v748 = p940.replace(new RegExp("'", "g"), "\\'");
    let v749 = v739.UeRyA(v739.XdUNJ(v739.GIYUc(v739.jnFtM + v746 + " where " + v740 + v745, " ") + v747, v739.KGsrw) + v748, v739.KZucE);
    return await v642.query(v749, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["getAllJavascriptErrorCountByOs"](p956, p957) {
    const v750 = {
      XfIiB: " and simpleUrl='",
      GiwHg: function (p958, p959) {
        return p958 + p959;
      },
      GMKkX: function (p960, p961) {
        return p960 + p961;
      }
    };
    const {
      simpleUrl: _0x130ae6,
      timeType: _0x234d12,
      webMonitorId: _0x5bb059
    } = p957;
    const v751 = _0x130ae6 ? v750.XfIiB + _0x130ae6 + "' " : " ";
    const vV751 = v751;
    const v752 = p956.replace(new RegExp("'", "g"), "\\'");
    const v753 = vRequire7.setTableName("JavascriptErrorInfo", _0x234d12, _0x5bb059);
    return await v642.query(v750.GiwHg(v750.GiwHg(v750.GMKkX("SELECT tab.os as os, count(tab.os) as count from (select SUBSTRING(os,1,3) as os from " + v753 + " where infoType='on_error'" + vV751, " and errorMessage like '%"), v752), "%') as tab GROUP BY os order by count desc"), {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["getJavascriptErrorCountByType"](p962) {
    const v754 = {
      KZVJI: function (p963, p964) {
        return p963 + p964;
      }
    };
    const {
      timeType: _0xf90a25,
      webMonitorId: _0x32e32f
    } = p962;
    const v755 = vRequire7.setTableName("JavascriptErrorInfo", _0xf90a25, _0x32e32f);
    const v756 = v754.KZVJI("select infoType, count(infoType) as count from " + v755 + " ", " GROUP BY infoType");
    return await v642.query(v756, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async getJavascriptErrorFirstTime(p965, p966) {
    const v757 = {
      DzqTX: function (p967, p968) {
        return p967 ^ p968;
      },
      rwjxR: "JavascriptErrorInfo",
      dxLJJ: function (p969, p970) {
        return p969 + p970;
      },
      JNUAE: function (p971, p972) {
        return p971 + p972;
      },
      otvkX: "select createdAt, happenTime from ",
      uSMFO: " and simpleErrorMessage = '"
    };
    const {
      simpleUrl: _0xe15945,
      timeType: _0x4fde29,
      infoType: _0x1f4bdf,
      webMonitorId: _0x1d1df0
    } = p966;
    const v758 = vRequire3.addDays(v757.DzqTX(484394, 484394) - _0x4fde29);
    const v759 = v758 + " 00:00:00";
    const v760 = v758 + " 23:59:59";
    const v761 = vRequire7.setTableName(v757.rwjxR, _0x4fde29, _0x1d1df0);
    const v762 = _0xe15945 ? " and simpleUrl='" + _0xe15945 + "' " : " ";
    const v763 = _0x1f4bdf ? v757.dxLJJ(" and infoType='" + _0x1f4bdf, "'") : " ";
    const v764 = p965.replace(new RegExp("'", "g"), "\\'");
    let v765 = v757.dxLJJ(v757.JNUAE(v757.otvkX + v761 + (" where happenDate>='" + v759 + "' and happenDate<='" + v760 + "' ") + v762 + v757.uSMFO + v764 + "' ", v763), " ORDER BY happenDate limit 1");
    return await v642.query(v765, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async getJavascriptErrorLatestTime(p973, p974) {
    const v766 = {
      IGnHw: function (p975, p976) {
        return p975 * p976;
      },
      OuetX: function (p977, p978) {
        return p977 * p978;
      },
      QndGZ: function (p979, p980) {
        return p979 ^ p980;
      },
      InBpB: function (p981, p982) {
        return p981 + p982;
      },
      QcvSX: " ORDER BY happenDate desc limit 1"
    };
    const {
      simpleUrl: _0x12bd51,
      timeType: _0x5834cb,
      infoType: _0xa721f7,
      webMonitorId: _0x975f1,
      recentMinute: _0x1aa969
    } = p974;
    let v767 = "";
    if (_0x1aa969) {
      const v768 = new Date(new Date().getTime() - v766.IGnHw(v766.OuetX(_0x1aa969, 60), v766.QndGZ(987937, 987337))).Format("yyyy-MM-dd hh:mm:00");
      v767 = " and happenDate>'" + v768 + "' ";
    }
    const v769 = vRequire7.setTableName("JavascriptErrorInfo", _0x5834cb, _0x975f1);
    const v770 = _0x12bd51 ? " simpleUrl='" + _0x12bd51 + "' and " : " ";
    const v771 = _0xa721f7 ? " and infoType='" + _0xa721f7 + "'" : " ";
    const v772 = p973.replace(new RegExp("'", "g"), "\\'");
    let v773 = v766.InBpB(v766.InBpB(v766.InBpB("select createdAt, happenTime from " + v769 + " where " + v770 + " simpleErrorMessage = '" + v772, "' ") + v771, v767), v766.QcvSX);
    return await v642.query(v773, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async getJsErrorVersionByTime(p983, p984) {
    const {
      timeSize: _0x1a107c,
      projectVersion: _0x5e8366,
      webMonitorId: _0x481b68
    } = p983;
    const v774 = vRequire7.setTableName("JavascriptErrorInfo", _0x1a107c, _0x481b68);
    const v775 = " ORDER BY happenDate " + p984 + " ";
    let v776 = "select createdAt, happenTime from " + v774 + " where projectVersion='" + _0x5e8366 + "' " + v775 + " limit 1";
    return await v642.query(v776, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async getJavascriptErrorListByMsg(p985, p986) {
    const v777 = {
      IiOJt: "JavascriptErrorInfo",
      bIowK: function (p987, p988) {
        return p987 - p988;
      },
      pCXPE: function (p989, p990) {
        return p989 ^ p990;
      },
      mpsEw: " 23:59:59"
    };
    const v778 = p985.replace(new RegExp("'", "g"), "\\'");
    const {
      timeType: _0x4cb9f0,
      webMonitorId: _0x31741f,
      simpleUrl = ""
    } = p986;
    const v779 = vRequire7.setTableName(v777.IiOJt, _0x4cb9f0, _0x31741f);
    const v780 = vRequire4.addDays(v777.bIowK(v777.pCXPE(418795, 418795), _0x4cb9f0 * 1));
    const v781 = v780 + " 00:00:00";
    const v782 = v780 + v777.mpsEw;
    const v783 = simpleUrl ? " and simpleUrl='" + simpleUrl + "' " : " ";
    let v784 = "select * from " + v779 + " where happenDate>='" + v781 + "' and happenDate<='" + v782 + "' and simpleErrorMessage = '" + v778 + "' " + v783 + " order by happenDate desc limit 100";
    return await v642.query(v784, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["getJavascriptErrorAffectCount"](p991, p992) {
    const v785 = {
      IwVTV: function (p993, p994) {
        return p993 ^ p994;
      },
      hlybh: "yyyy-MM-dd 00:00:00",
      fTpru: function (p995, p996) {
        return p995 + p996;
      }
    };
    const {
      timeType: _0x5090e0,
      infoType: _0x4508e5,
      webMonitorId: _0x2380a1,
      recentMinute: _0x33fadb,
      simpleUrl: _0x38a109
    } = p992;
    let v786 = "";
    if (_0x33fadb) {
      const v787 = new Date(new Date().getTime() - _0x33fadb * v785.IwVTV(999201, 999197) * 1000).Format("yyyy-MM-dd hh:mm:00");
      v786 = " happenDate>'" + v787 + "' and ";
    } else {
      const v788 = new Date().getTime() - _0x5090e0 * v785.IwVTV(802055, 802079) * 3600 * v785.IwVTV(463407, 463303);
      const v789 = new Date(v788).Format(v785.hlybh);
      const v790 = new Date(v788).Format("yyyy-MM-dd 23:59:59");
      v786 = " happenDate>='" + v789 + "' and happenDate<='" + v790 + "' and ";
    }
    const v791 = _0x38a109 ? " and simpleUrl='" + _0x38a109 + "' " : " ";
    const v792 = _0x4508e5 ? v785.fTpru(" infoType='", _0x4508e5) + "' and " : " ";
    const v793 = vRequire7.setTableName("JavascriptErrorInfo", _0x5090e0, _0x2380a1);
    const v794 = p991.replace(new RegExp("'", "g"), "\\'");
    let v795 = v785.fTpru(v785.fTpru(v785.fTpru(v785.fTpru("select count(DISTINCT customerKey) as count from " + v793 + " where " + v786, v792) + " simpleErrorMessage = '", v794), "'"), " " + v791 + " ");
    return await v642.query(v795, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["getJavascriptErrorOccurCountByCustomerKey"](p997, p998) {
    const v796 = {
      smHvh: "JavascriptErrorInfo",
      ZBCBH: "select count(dataId) as count from "
    };
    const {
      webMonitorId: _0xe7290,
      customerKey: _0x5922ef,
      timeType: _0x36761d
    } = p998;
    const v797 = vRequire7.setTableName(v796.smHvh, _0x36761d, _0xe7290);
    const v798 = p997.replace(new RegExp("'", "g"), "\\'");
    return await v642.query(v796.ZBCBH + v797 + " where errorMessage like '%" + v798 + "%' and customerKey='" + _0x5922ef + "'", {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["getJavascriptErrorListByPage"](p999) {
    const v799 = {
      zPLcA: function (p1000, p1001) {
        return p1000 + p1001;
      },
      yIxlv: function (p1002, p1003) {
        return p1002 + p1003;
      },
      CjLvu: " GROUP BY simpleUrl ORDER BY count desc limit 20"
    };
    const {
      timeType: _0x4b0411
    } = p999;
    const v800 = vRequire7.setTableName("JavascriptErrorInfo", _0x4b0411);
    const v801 = " where infoType='on_error' ";
    return await v642.query(v799.zPLcA(v799.zPLcA(v799.yIxlv("select simpleUrl, COUNT(simpleUrl) as count from ", v800), " ") + v801, v799.CjLvu), {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["getJsErrorCountByVersion"](p1004) {
    const v802 = {
      lTpEz: function (p1005, p1006) {
        return p1005 ^ p1006;
      },
      ZQzJE: function (p1007, p1008) {
        return p1007 * p1008;
      },
      wsjUz: function (p1009, p1010) {
        return p1009 ^ p1010;
      },
      dupBl: "yyyy-MM-dd 23:59:59"
    };
    const {
      timeType: _0x2caaa6,
      webMonitorId: _0x3c6dbc
    } = p1004;
    const v803 = vRequire7.setTableName("JavascriptErrorInfo", _0x2caaa6, _0x3c6dbc);
    const v804 = new Date(new Date().getTime() - _0x2caaa6 * v802.lTpEz(842118, 842142) * v802.lTpEz(454125, 451581) * 1000).Format("yyyy-MM-dd 00:00:00");
    const v805 = new Date(new Date().getTime() - v802.ZQzJE(_0x2caaa6, 24) * 3600 * v802.wsjUz(114327, 114047)).Format(v802.dupBl);
    const v806 = " happenDate>='" + v804 + "' and happenDate<='" + v805 + "' ";
    const v807 = "SELECT projectVersion, count(dataId) as count from " + v803 + " where " + v806 + " GROUP BY projectVersion";
    return await v642.query(v807, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async getJavascriptErrorStackCode(p1011) {
    const v808 = {
      iSVgt: function (p1012, p1013) {
        return p1012(p1013);
      },
      HDUnV: function (p1014, p1015) {
        return p1014 ^ p1015;
      },
      quoeo: function (p1016, p1017) {
        return p1016 - p1017;
      },
      BTtFZ: function (p1018, p1019) {
        return p1018(p1019);
      },
      yFSTB: function (p1020, p1021) {
        return p1020 === p1021;
      },
      eTqAi: function (p1022, p1023) {
        return p1022 + p1023;
      },
      yIKyY: " 抱歉，未能获取到静态资源，无法定位代码位置 ：）"
    };
    const vF3 = async (p1024, p1025, p1026, p1027, p1028, p1029) => {
      let v809 = "";
      let v810 = [];
      if (p1024 && p1024.length) {
        let v811 = p1024.split("\n");
        let v812 = v811[p1028 - 1];
        const v813 = v808.iSVgt(parseInt, p1029) < 100 ? v808.HDUnV(311221, 311221) : v808.quoeo(parseInt(p1029), 100);
        const v814 = v808.BTtFZ(parseInt, p1029) + 100;
        const vEncodeURIComponent = encodeURIComponent(v812.substring(v813, p1029 - v808.HDUnV(751232, 751233)));
        const vEncodeURIComponent2 = encodeURIComponent(v812.substring(p1029 - 1, v814));
        if (vEncodeURIComponent.length === 0 && v808.yFSTB(vEncodeURIComponent2.length, 0)) {
          v809 = " 抱歉，未能获取到静态资源，无法定位代码位置 ：）";
        } else {
          v809 = v808.eTqAi(v808.eTqAi(vEncodeURIComponent, "【错误位置】"), vEncodeURIComponent2);
        }
      } else {
        v809 = " 抱歉，未能获取到静态资源，无法定位代码位置 ：）";
      }
      p1025.push({
        jsPathStr: p1026,
        jsPath: p1027,
        locationX: p1028,
        locationY: p1029,
        code: v809,
        sourceCode: v810
      });
    };
    let v815 = "";
    let v816 = "";
    let v817 = [];
    const v818 = [];
    const v819 = {};
    for (var v820 = 0; v820 < p1011.length; v820++) {
      const {
        jsPathStr: _0x302bac,
        jsPath: _0x8f84e2,
        locationX: _0x3058c0,
        locationY: _0x1fd432
      } = p1011[v820];
      if (!v819[_0x8f84e2]) {
        await vRequire12(_0x8f84e2).then(p1030 => p1030.text()).then(async p1031 => {
          v819[_0x8f84e2] = p1031;
          vF3(p1031, v818, _0x302bac, _0x8f84e2, _0x3058c0, _0x1fd432);
        }).catch(p1032 => {
          console.log(p1032);
          v818.push({
            jsPathStr: _0x302bac,
            jsPath: _0x8f84e2,
            locationX: _0x3058c0,
            locationY: _0x1fd432,
            code: v808.yIKyY,
            sourceCode: []
          });
        });
      } else {
        vF3(v819[_0x8f84e2], v818, _0x302bac, _0x8f84e2, _0x3058c0, _0x1fd432);
      }
    }
    return v818;
  }
  static async getJavascriptErrorStackCodeForSource(p1033, p1034) {
    var v821 = [];
    var v822 = await fs2.readFileSync(vRequire11.resolve(__dirname, "..") + "/lib/temp.min.js.map").toString();
    v821 = C15.handleSourceMap(v822, parseInt(p1033), parseInt(p1034));
    return v821;
  }
  static async getJavascriptErrorStackCodeForUrl(p1035, p1036, p1037) {
    const v823 = {
      EhtUf: function (p1038, p1039) {
        return p1038(p1039);
      }
    };
    var v824 = [];
    const vP1037 = p1037;
    await vRequire12(vP1037).then(p1040 => {
      const v825 = p1040.text();
      return v825;
    }).then(async p1041 => {
      v824 = C15.handleSourceMap(p1041, v823.EhtUf(parseInt, p1035), parseInt(p1036));
    }).catch(p1042 => {
      console.log(p1042);
    });
    return v824;
  }
  static async startAnalysisSourceCode(p1043, p1044, p1045) {
    var v826 = {};
    const vP1045 = p1045;
    await vRequire12(vP1045).then(p1046 => p1046.text()).then(async p1047 => {
      var vP1047 = p1047;
      v826 = C15.handleSourceMap(vP1047, p1043, p1044);
    }).catch(p1048 => {
      console.log(p1048);
    });
    return v826;
  }
  static async handleSourceMap(p1049, p1050, p1051) {
    const v827 = {
      NBIzS: function (p1052, p1053) {
        return p1052 - p1053;
      },
      pgIqI: function (p1054, p1055) {
        return p1054 - p1055;
      },
      WDcYN: function (p1056, p1057) {
        return p1056 ^ p1057;
      },
      rHgBk: function (p1058, p1059) {
        return p1058 - p1059;
      },
      uImNm: function (p1060, p1061) {
        return p1060 + p1061;
      },
      Owyhj: function (p1062, p1063) {
        return p1062 ^ p1063;
      }
    };
    var v828 = [];
    try {
      var v829 = await new vRequire10.SourceMapConsumer(p1049);
      var v830 = v829.originalPositionFor({
        line: parseInt(p1050),
        column: parseInt(p1051)
      });
      if (!v829.sourcesContent || !(v829.sourcesContent.length > 0)) {
        return v830;
      } else {
        var v831 = v829.sources;
        var v832 = v831.indexOf(v830.source);
        var v833 = v829.sourcesContent[v832];
        const v834 = v833.split(new RegExp("\\r?\\n", "g"));
        v828.push({
          line: v830.line - 5,
          code: v834[v830.line - 5]
        });
        v828.push({
          line: v827.NBIzS(v830.line, 4),
          code: v834[v830.line - 4]
        });
        v828.push({
          line: v827.pgIqI(v830.line, v827.WDcYN(570275, 570272)),
          code: v834[v830.line - 3]
        });
        v828.push({
          line: v830.line - 2,
          code: v834[v827.NBIzS(v830.line, v827.WDcYN(565599, 565597))]
        });
        v828.push({
          line: v827.pgIqI(v830.line, v827.WDcYN(456872, 456873)),
          code: v834[v830.line - 1]
        });
        v828.push({
          line: v827.rHgBk(v830.line, 0),
          code: v834[v830.line - 0]
        });
        v828.push({
          line: v827.uImNm(v830.line, v827.WDcYN(245736, 245737)),
          code: v834[v830.line + 1]
        });
        v828.push({
          line: v830.line + 2,
          code: v834[v827.uImNm(v830.line, 2)]
        });
        v828.push({
          line: v830.line + v827.Owyhj(142450, 142449),
          code: v834[v830.line + v827.Owyhj(213414, 213413)]
        });
      }
    } catch (_0x1e46f6) {
      v828 = {};
    }
    return v828;
  }
  static async getJavascriptErrorPcCount(p1064) {
    return await v642.query("SELECT COUNT(DISTINCT pageKey) as count FROM JavascriptErrorInfo WHERE createdAt > '" + p1064.day + "' and os LIKE 'web%'", {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["getJavascriptErrorIosCount"](p1065) {
    const v835 = {
      CvcAK: function (p1066, p1067) {
        return p1066 + p1067;
      },
      lCURJ: "' and os LIKE 'ios%'"
    };
    return await v642.query(v835.CvcAK("SELECT COUNT(DISTINCT pageKey) as count FROM JavascriptErrorInfo WHERE createdAt > '" + p1065.day, v835.lCURJ), {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["getJavascriptErrorAndroidCount"](p1068) {
    const v836 = {
      UqYyr: function (p1069, p1070) {
        return p1069 + p1070;
      },
      uIIRD: function (p1071, p1072) {
        return p1071 + p1072;
      }
    };
    return await v642.query(v836.UqYyr(v836.uIIRD("SELECT COUNT(DISTINCT pageKey) as count FROM JavascriptErrorInfo WHERE createdAt > '", p1068.day), "' and os LIKE 'android%'"), {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["getBehaviorsByUser"](p1073, p1074, p1075) {
    const v837 = {
      hDjsT: function (p1076, p1077) {
        return p1076 + p1077;
      },
      VcgQK: "select * from ",
      lcShK: "JavascriptErrorInfo",
      cLjYC: " where "
    };
    const {
      timeScope: _0x2339fb,
      webMonitorId: _0x1c010c
    } = p1075;
    let v838 = v837.hDjsT(v837.hDjsT(v837.VcgQK + vRequire7.setTableName(v837.lcShK, _0x2339fb, _0x1c010c), v837.cLjYC), p1073) + " and " + p1074;
    return await v642.query(v838, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["getErrorCountByHour"](p1078) {
    const v839 = {
      dvpEZ: "JavascriptErrorInfo",
      EdgPS: function (p1079, p1080) {
        return p1079 ^ p1080;
      }
    };
    const {
      timeSize: _0x2fbe29,
      webMonitorId: _0x5c1606,
      infoType: _0x516086
    } = p1078;
    let v840 = vRequire7.setTableName(v839.dvpEZ, _0x2fbe29, _0x5c1606);
    const v841 = vRequire3.handleTimeScopeSql(v839.EdgPS(918058, 918058) - _0x2fbe29, 0);
    const v842 = "SELECT happenHour as hour, count(dataId) as count from " + v840 + " WHERE infoType='" + _0x516086 + "' and " + v841 + " GROUP BY happenHour";
    return await v642.query(v842, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async getErrorCountSevenDayAgoByHour(p1081) {
    const v843 = {
      wRyPR: function (p1082, p1083) {
        return p1082 ^ p1083;
      }
    };
    const {
      timeSize: _0x21f8ed,
      scope = 1,
      webMonitorId: _0x4e41ca,
      infoType: _0x3dd02c
    } = p1081;
    const v844 = vRequire3.handleTimeScopeSql(v843.wRyPR(277836, 277836) - _0x21f8ed, scope);
    let v845 = vRequire7.setTableName("JavascriptErrorInfo", _0x21f8ed, _0x4e41ca);
    const v846 = "SELECT happenHour as hour, count(dataId) as count from " + v845 + " WHERE infoType='" + _0x3dd02c + "' and " + v844 + " GROUP BY happenHour";
    return await v642.query(v846, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["calculateJsErrorCountByHour"](p1084, p1085, p1086, p1087) {
    const v847 = {
      UjKlm: function (p1088, p1089) {
        return p1088 ^ p1089;
      },
      nEqfa: "JavascriptErrorInfo",
      BiAmy: function (p1090, p1091) {
        return p1090 + p1091;
      },
      hHIbj: " and firstUserParam='",
      tOzbJ: function (p1092, p1093) {
        return p1092 + p1093;
      },
      WQlXS: function (p1094, p1095) {
        return p1094 + p1095;
      }
    };
    const v848 = vRequire3.addDays(-v847.UjKlm(568503, 568502));
    let v849 = vRequire7.setTableName("JavascriptErrorInfo", 0, p1084);
    if (p1086 === v848 + " 23:00:00") {
      v849 = vRequire7.setTableName(v847.nEqfa, 1, p1084);
    }
    const v850 = p1085 ? v847.BiAmy(v847.hHIbj, p1085) + "' " : "";
    const v851 = p1086.substring(0, 13);
    let v852 = v847.tOzbJ(v847.WQlXS("select count(dataId) as count from " + v849, " WHERE happenHour='") + v851 + "' AND infoType='on_error'", v850);
    return await v642.query(v852, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async calculateErrorUvCountByHour(p1096, p1097, p1098, p1099, p1100) {
    const v853 = {
      hSXzw: "JavascriptErrorInfo",
      BTiOV: function (p1101, p1102) {
        return p1101 ^ p1102;
      },
      sMqTL: function (p1103, p1104) {
        return p1103 + p1104;
      },
      IuWki: " 23:00:00",
      eQoYK: function (p1105, p1106) {
        return p1105 + p1106;
      },
      aleWQ: ") as count from "
    };
    const v854 = await C9.getUserIdType(p1096);
    const v855 = vRequire3.addDays(-1);
    let v856 = vRequire7.setTableName(v853.hSXzw, v853.BTiOV(179845, 179845), p1096);
    if (p1098 === v853.sMqTL(v855, v853.IuWki)) {
      v856 = vRequire7.setTableName("JavascriptErrorInfo", 1, p1096);
    }
    const v857 = p1097 ? " and firstUserParam='" + p1097 + "' " : "";
    const v858 = p1100 ? " and infoType='" + p1100 + "' " : "";
    const v859 = p1098.substring(v853.BTiOV(828512, 828512), v853.BTiOV(252088, 252085));
    let v860 = v853.eQoYK(v853.eQoYK("select count(distinct " + v854 + v853.aleWQ + v856, " WHERE happenHour='") + v859, "' ") + v858 + v857;
    return await v642.query(v860, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async calculateConsoleErrorCountByHour(p1107, p1108, p1109, p1110) {
    const v861 = {
      JPdDJ: "JavascriptErrorInfo",
      LAHtf: function (p1111, p1112) {
        return p1111 ^ p1112;
      }
    };
    const v862 = vRequire3.addDays(-1);
    let v863 = vRequire7.setTableName("JavascriptErrorInfo", 0, p1107);
    if (p1109 === v862 + " 23:00:00") {
      v863 = vRequire7.setTableName(v861.JPdDJ, 1, p1107);
    }
    const v864 = p1108 ? " and firstUserParam='" + p1108 + "' " : "";
    const v865 = p1109.substring(v861.LAHtf(924870, 924870), 13);
    let v866 = "select count(dataId) as count from " + v863 + " WHERE happenHour='" + v865 + "' AND infoType='console_error'" + v864;
    return await v642.query(v866, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async calculateJsErrorCountByDay(p1113, p1114) {
    const v867 = {
      TQaTZ: function (p1115, p1116) {
        return p1115 + p1116;
      }
    };
    const v868 = vRequire3.addDays(p1114);
    const v869 = v868 + " 00:00:00";
    const v870 = v867.TQaTZ(v868, " 23:59:59");
    let v871 = v867.TQaTZ(p1113, "JavascriptErrorInfo");
    let v872 = "select count(dataId) as count from " + v871 + " WHERE infoType='on_error' and happenDate>='" + v869 + "' and happenDate<='" + v870 + "'";
    return await v642.query(v872, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["calculateConsoleErrorCountByDay"](p1117, p1118) {
    const v873 = {
      KKges: " 23:59:59"
    };
    const v874 = vRequire3.addDays(p1118);
    const v875 = v874 + " 00:00:00";
    const v876 = v874 + v873.KKges;
    let v877 = p1117 + "JavascriptErrorInfo";
    let v878 = "select count(dataId) as count from " + v877 + " WHERE infoType='console_error' and happenDate>='" + v875 + "' and happenDate<='" + v876 + "'";
    return await v642.query(v878, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["getJsErrorUserCountToday"](p1119, p1120) {
    const v879 = {
      HeEQS: function (p1121, p1122) {
        return p1121 + p1122;
      },
      MjCpB: "JavascriptErrorInfo"
    };
    const v880 = await C9.getUserIdType(p1119);
    const v881 = vRequire3.addDays(p1120);
    const v882 = v881 + " 00:00:00";
    const v883 = v879.HeEQS(v881, " 23:59:59");
    const v884 = vRequire7.setTableName(v879.MjCpB, p1120, p1119);
    let v885 = "select count(distinct " + v880 + ") as count from " + v884 + " WHERE infoType='on_error' and happenDate>='" + v882 + "' and happenDate<='" + v883 + "' ";
    return await v642.query(v885, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async getJsErrorUserCountByMinute(p1123, p1124) {
    const v886 = {
      RsFdW: function (p1125, p1126) {
        return p1125 - p1126;
      },
      MCRmc: function (p1127, p1128) {
        return p1127 ^ p1128;
      },
      HEIku: "yyyy-MM-dd hh:mm:00",
      doise: "JavascriptErrorInfo"
    };
    const v887 = new Date().getTime();
    const v888 = new Date(v886.RsFdW(v887, p1124 * v886.MCRmc(459309, 459281) * 1000)).Format("yyyy-MM-dd hh:mm 00");
    const v889 = new Date(v887).Format(v886.HEIku);
    const v890 = await C9.getUserIdType(p1123);
    const vV888 = v888;
    const vV889 = v889;
    const v891 = vRequire7.setTableName(v886.doise, 0, p1123);
    let v892 = "select count(distinct " + v890 + ") as count from " + v891 + " WHERE infoType='on_error' and happenDate>='" + vV888 + "' and happenDate<='" + vV889 + "' ";
    return await v642.query(v892, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async getJsErrorUserCountByHour(p1129, p1130, p1131) {
    const v893 = {
      lAKPN: function (p1132, p1133) {
        return p1132 ^ p1133;
      },
      tpgBH: "JavascriptErrorInfo",
      DXSzp: function (p1134, p1135) {
        return p1134 + p1135;
      },
      ZIFxz: " 23:00:00",
      Qpaeh: function (p1136, p1137) {
        return p1136 + p1137;
      },
      jhsZw: "select count(customerKey) as count, count(distinct "
    };
    const v894 = await C9.getUserIdType(p1129);
    const v895 = vRequire3.addDays(-v893.lAKPN(165346, 165347));
    let v896 = vRequire7.setTableName(v893.tpgBH, v893.lAKPN(763011, 763011), p1129);
    if (p1130 === v893.DXSzp(v895, v893.ZIFxz)) {
      v896 = vRequire7.setTableName(v893.tpgBH, 1, p1129);
    }
    const v897 = p1130.substring(0, v893.lAKPN(804101, 804104));
    let v898 = v893.Qpaeh(v893.jhsZw + v894 + ") as uvCount from ", v896) + " WHERE happenHour='" + v897 + "' AND infoType='on_error'";
    return await v642.query(v898, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async getConsoleErrorUserCountToday(p1138, p1139) {
    const v899 = {
      eKKVz: " 23:59:59"
    };
    const v900 = await C9.getUserIdType(p1138);
    const v901 = vRequire3.addDays(p1139);
    const v902 = v901 + " 00:00:00";
    const v903 = v901 + v899.eKKVz;
    const v904 = vRequire7.setTableName("JavascriptErrorInfo", p1139, p1138);
    let v905 = "select count(distinct " + v900 + ") as count from " + v904 + " WHERE infoType='console_error' and happenDate>='" + v902 + "' and happenDate<='" + v903 + "'";
    return await v642.query(v905, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async getConsoleErrorUserCountByMinute(p1140, p1141) {
    const v906 = {
      hpqNo: function (p1142, p1143) {
        return p1142 - p1143;
      },
      FQqla: function (p1144, p1145) {
        return p1144 ^ p1145;
      },
      XNfOd: "yyyy-MM-dd hh:mm 00"
    };
    const v907 = new Date().getTime();
    const v908 = new Date(v906.hpqNo(v907, p1141 * v906.FQqla(761306, 761318) * 1000)).Format(v906.XNfOd);
    const v909 = new Date(v907).Format("yyyy-MM-dd hh:mm:00");
    const v910 = await C9.getUserIdType(p1140);
    const vV908 = v908;
    const vV909 = v909;
    const v911 = vRequire7.setTableName("JavascriptErrorInfo", 0, p1140);
    let v912 = "select count(distinct " + v910 + ") as count from " + v911 + " WHERE infoType='console_error' and happenDate>='" + vV908 + "' and happenDate<='" + vV909 + "'";
    return await v642.query(v912, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async getConsoleErrorUserCountByHour(p1146, p1147, p1148) {
    const v913 = {
      nBhFX: "JavascriptErrorInfo",
      JWObN: function (p1149, p1150) {
        return p1149 === p1150;
      },
      CBpEY: " 23:00:00",
      WTIka: function (p1151, p1152) {
        return p1151 ^ p1152;
      },
      ZDsXH: function (p1153, p1154) {
        return p1153 ^ p1154;
      },
      RNkdp: function (p1155, p1156) {
        return p1155 + p1156;
      },
      PAYcE: function (p1157, p1158) {
        return p1157 + p1158;
      },
      EezHT: function (p1159, p1160) {
        return p1159 + p1160;
      },
      dmrgR: "select count(",
      vVKDo: ") as count, count(distinct ",
      wbUgy: " WHERE happenHour='"
    };
    const v914 = await C9.getUserIdType(p1146);
    const v915 = vRequire3.addDays(-1);
    let v916 = vRequire7.setTableName(v913.nBhFX, 0, p1146);
    if (v913.JWObN(p1147, v915 + v913.CBpEY)) {
      v916 = vRequire7.setTableName("JavascriptErrorInfo", 1, p1146);
    }
    const v917 = p1147.substring(v913.WTIka(262712, 262712), v913.ZDsXH(770379, 770374));
    let v918 = v913.RNkdp(v913.PAYcE(v913.EezHT(v913.dmrgR + v914, v913.vVKDo) + v914, ") as uvCount  from ") + v916 + v913.wbUgy, v917) + "' AND infoType='console_error'";
    return await v642.query(v918, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["getJsErrorCountInRealTimeByMinute"](p1161, p1162, p1163) {
    const v919 = {
      Qxznd: "' AND happenDate<'"
    };
    let v920 = "select infoType, count(dataId) as count from " + vRequire7.setTableName("JavascriptErrorInfo", 0, p1161) + " WHERE happenDate>='" + p1162 + v919.Qxznd + p1163 + "' group by infoType";
    return await v642.query(v920, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async getJsConsoleErrorCountInRealTimeByEveryMinute(p1164, p1165, p1166) {
    const v921 = {
      vSAco: function (p1167, p1168) {
        return p1167 + p1168;
      },
      AsyaO: "' AND infoType='console_error' group by time"
    };
    let v922 = v921.vSAco("select DATE_FORMAT(happenDate, '%H:%i') AS time, count(dataId) as console_error from " + vRequire7.setTableName("JavascriptErrorInfo", 0, p1164), " WHERE happenDate>='") + p1165 + "' AND happenDate<'" + p1166 + v921.AsyaO;
    return await v642.query(v922, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["getJsOnErrorCountInRealTimeByEveryMinute"](p1169, p1170, p1171) {
    const v923 = {
      CRCQw: function (p1172, p1173) {
        return p1172 + p1173;
      },
      bCVWd: "' AND infoType='on_error' group by time"
    };
    let v924 = v923.CRCQw("select DATE_FORMAT(happenDate, '%H:%i') AS time, count(dataId) as on_error from " + vRequire7.setTableName("JavascriptErrorInfo", 0, p1169) + " WHERE happenDate>='", p1170) + "' AND happenDate<'" + p1171 + v923.bCVWd;
    return await v642.query(v924, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async getJsErrorUVCountInRealTimeByMinute(p1174, p1175, p1176) {
    const v925 = {
      Qhcnp: function (p1177, p1178) {
        return p1177 + p1178;
      },
      DsfeH: function (p1179, p1180) {
        return p1179 + p1180;
      },
      NdlYp: function (p1181, p1182) {
        return p1181 + p1182;
      },
      JzhKJ: "select count(distinct ",
      swwQV: "' AND infoType='on_error'"
    };
    const v926 = await C9.getUserIdType(p1174);
    let v927 = v925.Qhcnp(v925.DsfeH(v925.NdlYp(v925.JzhKJ + v926 + ") as uvCount from " + vRequire7.setTableName("JavascriptErrorInfo", 0, p1174) + " WHERE happenDate>='", p1175), "' AND happenDate<'") + p1176, v925.swwQV);
    return await v642.query(v927, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["getJsErrorUVCountInRealTimeByEveryMinute"](p1183, p1184, p1185) {
    const v928 = {
      nZVEs: function (p1186, p1187) {
        return p1186 + p1187;
      },
      aSFAL: "JavascriptErrorInfo",
      UPhmV: "' AND infoType='on_error' group by time"
    };
    const v929 = await C9.getUserIdType(p1183);
    let v930 = v928.nZVEs(v928.nZVEs("select DATE_FORMAT(happenDate, '%H:%i') AS time,count(distinct " + v929 + ") as jsOnErrorUvCount from ", vRequire7.setTableName(v928.aSFAL, 0, p1183)) + " WHERE happenDate>='" + p1184, "' AND happenDate<'") + p1185 + v928.UPhmV;
    return await v642.query(v930, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async getJsUVCountInRealTimeByMinute(p1188, p1189, p1190) {
    const v931 = {
      lQRXT: function (p1191, p1192) {
        return p1191 + p1192;
      },
      Xsmaq: function (p1193, p1194) {
        return p1193 + p1194;
      }
    };
    const v932 = await C9.getUserIdType(p1188);
    let v933 = v931.lQRXT(v931.Xsmaq("select count(distinct " + v932 + ") as uvCount from ", vRequire7.setTableName("JavascriptErrorInfo", 0, p1188)) + " WHERE happenDate>='" + p1189, "' AND happenDate<'") + p1190 + "'";
    return await v642.query(v933, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async ["getJsUVCountInRealTimeByEveryMinute"](p1195, p1196, p1197) {
    const v934 = {
      kmebg: function (p1198, p1199) {
        return p1198 + p1199;
      },
      tjFFS: "' group by time"
    };
    const v935 = await C9.getUserIdType(p1195);
    let v936 = v934.kmebg(v934.kmebg("select DATE_FORMAT(happenDate, '%H:%i') AS time,count(distinct " + v935 + ") as jsUvCount from ", vRequire7.setTableName("JavascriptErrorInfo", 0, p1195)) + " WHERE happenDate>='" + p1196 + "' AND happenDate<'", p1197) + v934.tjFFS;
    return await v642.query(v936, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async getLogCountForDay(p1200, p1201) {
    const v937 = {
      jcAdF: "JavascriptErrorInfo"
    };
    const v938 = vRequire3.addDays(p1201);
    const v939 = v938 + " 00:00:00";
    const v940 = v938 + " 23:59:59";
    const v941 = vRequire7.setTableName(v937.jcAdF, p1201, p1200);
    let v942 = "select count(dataId) as count from " + v941 + " where happenDate>='" + v939 + "' and happenDate<='" + v940 + "'";
    return await v642.query(v942, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async javascriptErrorTotalCount(p1202, p1203) {
    const v943 = {
      IDbHL: function (p1204, p1205) {
        return p1204 - p1205;
      },
      Yifls: function (p1206, p1207) {
        return p1206 * p1207;
      },
      SKkRZ: " 00:00:00"
    };
    const v944 = vRequire3.addDays(v943.IDbHL(0, v943.Yifls(p1203, 1)));
    const v945 = v944 + v943.SKkRZ;
    const v946 = v944 + " 23:59:59";
    const v947 = vRequire7.setTableName("JavascriptErrorInfo", p1203, p1202);
    let v948 = "select count(dataId) as count from " + v947 + " where happenDate>='" + v945 + "' and happenDate<='" + v946 + "'";
    return await v642.query(v948, {
      type: v642.QueryTypes.SELECT
    });
  }
  static async javascriptErrorCountByUrl(p1208, p1209) {
    const v949 = {
      ZKhMS: function (p1210, p1211) {
        return p1210 ^ p1211;
      },
      BUrOA: function (p1212, p1213) {
        return p1212 + p1213;
      },
      MEwMo: "JavascriptErrorInfo"
    };
    const v950 = vRequire3.addDays(v949.ZKhMS(917671, 917671) - p1209 * 1);
    const v951 = v949.BUrOA(v950, " 00:00:00");
    const v952 = v950 + " 23:59:59";
    const v953 = vRequire7.setTableName(v949.MEwMo, p1209, p1208);
    let v954 = "select simpleUrl, count(dataId) as count from " + v953 + " where happenDate>='" + v951 + "' and happenDate<='" + v952 + "' group by simpleUrl order by count desc limit 20";
    return await v642.query(v954, {
      type: v642.QueryTypes.SELECT
    });
  }
}
const v955 = new vRequire2("../schema/jsErrorHandleList");
class C16 {
  static async createJsErrorHandleList(p1214) {
    const v956 = {
      HDifz: "JsErrorHandleList"
    };
    const {
      webMonitorId: _0x211b41
    } = p1214;
    return await v955.create({
      ...p1214
    }, _0x211b41 + v956.HDifz);
  }
  static async ["updateJsErrorHandleList"](p1215, p1216) {
    const v957 = {
      zEXXL: "errorStatus",
      nvRFD: "JsErrorHandleList"
    };
    const {
      handleMan: _0x2a698f,
      errorStatus: _0x3dd397,
      webMonitorId: _0x3861cc
    } = p1216;
    await v955.update({
      handleMan: _0x2a698f,
      errorStatus: _0x3dd397
    }, {
      where: {
        dataId: p1215
      },
      fields: ["handleMan", v957.zEXXL]
    }, _0x3861cc + v957.nvRFD);
    return true;
  }
  static async ["getJsErrorHandleListByErrorMessage"](p1217, p1218) {
    const v958 = p1218 + "JsErrorHandleList";
    const v959 = "SELECT dataId, handleMan, errorStatus, handleStartDate from " + v958 + " where errorMessage='" + p1217 + "'";
    return await v955.query(v959, {
      type: v955.QueryTypes.SELECT
    });
  }
  static async ["getJsErrorHandleListList"](p1219) {
    const v960 = {
      BBEyZ: "JsErrorHandleList"
    };
    const v961 = p1219 + v960.BBEyZ;
    const v962 = "SELECT * from " + v961 + " ";
    return await v955.query(v962, {
      type: v955.QueryTypes.SELECT
    });
  }
  static async getJsErrorHandleListListByUserId(p1220, p1221) {
    const v963 = {
      QCKeF: function (p1222, p1223) {
        return p1222 + p1223;
      }
    };
    const v964 = v963.QCKeF(p1220, "JsErrorHandleList");
    const v965 = "SELECT * from " + v964 + " where handleMan='" + p1221 + "'";
    return await v955.query(v965, {
      type: v955.QueryTypes.SELECT
    });
  }
  static async ["getJsErrorHandleListDetail"](p1224) {
    return await v955.findOne({
      where: {
        dataId: p1224
      }
    });
  }
  static async deleteJsErrorHandleList(p1225) {
    await v955.destroy({
      where: {
        dataId: p1225
      }
    });
    return true;
  }
  static async ["resolveJsErrorInHandleList"](p1226, p1227, p1228) {
    const v966 = {
      errorStatus: p1228,
      errorMessage: p1226,
      webMonitorId: p1227
    };
    return await v955.create({
      ...v966
    });
  }
  static async getSolveStatusByErrorMsg(p1229, p1230) {
    return await v955.findOne({
      where: {
        errorMessage: p1229
      }
    }, p1230 + "JsErrorHandleList");
  }
  static async getSolveChartByErrorMsg(p1231, p1232, p1233) {
    const v967 = p1231 + "JsErrorHandleList";
    const v968 = "select DATE_FORMAT(handleStartDate,'%Y-%m-%d') as day, errorStatus, count(dataId) as count from " + v967 + " where createdAt>='" + p1232 + " 00:00:00' and createdAt<='" + p1233 + " 23:59:59' group by DATE_FORMAT(handleStartDate,'%Y-%m-%d'),errorStatus";
    return await v955.query(v968, {
      type: v955.QueryTypes.SELECT
    });
  }
}
const v969 = new vRequire2("../schema/loadTimeInfoByHour");
class C17 {
  static async createLoadTimeInfoByHour(p1234) {
    const v970 = {
      AyNtw: function (p1235, p1236) {
        return p1235 + p1236;
      }
    };
    const {
      webMonitorId: _0x58ff21
    } = p1234;
    return await v969.create({
      ...p1234
    }, v970.AyNtw(_0x58ff21, "LoadTimeInfoByHour"));
  }
  static async updateLoadTimeInfoByHour(p1237, p1238) {
    const {
      webMonitorId: _0x3f0ce1
    } = p1238;
    await v969.update({
      ...p1238
    }, {
      where: {
        dataId: p1237
      },
      fields: Object.keys(p1238)
    }, _0x3f0ce1 + "LoadTimeInfoByHour");
    return true;
  }
  static async ["getLoadTimeInfoByHourList"]() {
    return await v969.findAndCountAll();
  }
  static async getLoadTimeInfoByHourDetail(p1239) {
    return await v969.findOne({
      where: {
        dataId: p1239
      }
    });
  }
  static async getLoadTimeInfoByIdByHourName(p1240, p1241, p1242, p1243) {
    const v971 = {
      tVpOS: function (p1244, p1245) {
        return p1244 + p1245;
      },
      wHlSe: function (p1246, p1247) {
        return p1246 + p1247;
      }
    };
    const v972 = p1241 + "LoadTimeInfoByHour";
    let v973 = v971.tVpOS(v971.tVpOS(v971.wHlSe(v971.tVpOS("select dataId from ", v972) + " WHERE hourName='", p1240), "' and uploadType='"), p1242) + "' and showName='" + p1243 + "'";
    return await v969.query(v973, {
      type: v969.QueryTypes.SELECT
    });
  }
  static async getLoadTimeInfoByHourDetailByHourName(p1248, p1249, p1250) {
    const v974 = {
      mEUcG: function (p1251, p1252) {
        return p1251 + p1252;
      },
      xsMIO: function (p1253, p1254) {
        return p1253 + p1254;
      },
      xnVQt: function (p1255, p1256) {
        return p1255 + p1256;
      }
    };
    const v975 = v974.mEUcG(p1249, "LoadTimeInfoByHour");
    let v976 = v974.xsMIO(v974.xnVQt("select * from " + v975 + " WHERE hourName='", p1248) + "' and uploadType='", p1250) + "'";
    return await v969.query(v976, {
      type: v969.QueryTypes.SELECT
    });
  }
  static async ["getLoadTimeListByUrl"](p1257, p1258, p1259, p1260) {
    const v977 = {
      KnFFt: function (p1261, p1262) {
        return p1261 + p1262;
      },
      dvnDG: "LoadTimeInfoByHour",
      PKWJD: function (p1263, p1264) {
        return p1263 + p1264;
      },
      kQAUo: "SELECT showName, sum(hourCount) as count, avg(hourLoadTime) as loadTime from ",
      bNZDH: "' and hourName<='"
    };
    const v978 = v977.KnFFt(p1257, v977.dvnDG);
    let v979 = v977.PKWJD(v977.kQAUo + v978 + " where hourName>='" + p1258, v977.bNZDH) + p1259 + "' and uploadType='" + p1260 + "' GROUP BY showName order by count desc limit 10";
    return await v969.query(v979, {
      type: v969.QueryTypes.SELECT
    });
  }
  static async deleteLoadTimeInfoByHour(p1265) {
    await v969.destroy({
      where: {
        dataId: p1265
      }
    });
    return true;
  }
  static async deleteOneYearAgo() {
    const v980 = {
      qdeFc: function (p1266, p1267) {
        return p1266 - p1267;
      },
      UAoQO: "yyyy-MM-dd 00:00:00"
    };
    const v981 = v980.qdeFc(new Date().getTime(), 31622400000);
    let v982 = "delete from LoadTimeInfoByHour where createdAt<'" + new Date(v981).Format(v980.UAoQO) + "'";
    return v969.query(v982, {
      type: v969.QueryTypes.SELECT
    });
  }
  static async deleteOneMonthAgo() {
    const v983 = {
      CWVKp: function (p1268, p1269) {
        return p1268 * p1269;
      },
      aLhZM: function (p1270, p1271) {
        return p1270 ^ p1271;
      },
      bOzVr: function (p1272, p1273) {
        return p1272 ^ p1273;
      },
      IWVMt: function (p1274, p1275) {
        return p1274 ^ p1275;
      },
      oEuGh: "yyyy-MM-dd 00:00:00"
    };
    const v984 = new Date().getTime() - v983.CWVKp(v983.aLhZM(111817, 111830) * v983.bOzVr(131534, 131542) * 3600, v983.IWVMt(446736, 447224));
    let v985 = "delete from LoadTimeInfoByHour where createdAt<'" + new Date(v984).Format(v983.oEuGh) + "'";
    return v969.query(v985, {
      type: v969.QueryTypes.SELECT
    });
  }
}
const v986 = new vRequire2("");
class C18 {
  static async ["createLoadPageInfo"](p1276) {
    const v987 = {
      qrDZi: function (p1277, p1278) {
        return p1277 ^ p1278;
      },
      CdglR: "updatedAt",
      RduUJ: "yyyy-MM-dd hh:mm:ss",
      NSboA: "request",
      ueWEX: function (p1279, p1280) {
        return p1279 * p1280;
      },
      SaIBE: "happenHour",
      ETvyv: function (p1281, p1282) {
        return p1281 ^ p1282;
      },
      NEUDH: function (p1283, p1284) {
        return p1283 != p1284;
      },
      JPvzG: function (p1285, p1286) {
        return p1285 + p1286;
      },
      Uovgf: function (p1287, p1288) {
        return p1287 + p1288;
      },
      UQXjK: ") VALUES ("
    };
    let v988 = "";
    let v989 = "";
    const v990 = ["uploadType", "happenTime", "happenDate", "happenHour", "happenMinute", "webMonitorId", "customerKey", "simpleUrl", "completeUrl", "userId", "firstUserParam", "secondUserParam", "createdAt", "updatedAt", "id", "loadPage", "domReady", "redirect", "lookupDomain", "ttfb", "request", "loadEvent", "appcache", "unloadEvent", "connect", "loadType"];
    v990.forEach((p1289, p1290) => {
      if (p1290 == v990.length - v987.qrDZi(503240, 503241)) {
        v988 += "`" + p1289 + "`";
        let v991 = p1276[p1289];
        if (v991 != undefined) {
          v989 += "'" + v991 + "'";
        } else {
          v989 += "DEFAULT";
        }
      } else {
        v988 += "`" + p1289 + "`, ";
        let v992 = p1276[p1289];
        switch (p1289) {
          case "id":
            v992 = new Date().getTime() + vRequire3.getUuid();
            break;
          case "createdAt":
          case v987.CdglR:
            v992 = new Date().Format(v987.RduUJ);
            break;
          case "loadPage":
          case "domReady":
          case "redirect":
          case "lookupDomain":
          case "ttfb":
          case v987.NSboA:
          case "loadEvent":
          case "appcache":
          case "unloadEvent":
            v992 = v992 < 0 || v992 > v987.ueWEX(60, v987.qrDZi(744655, 744691)) * 1000 ? 0 : v992;
            break;
          case v987.SaIBE:
            v992 = p1276.happenDate ? p1276.happenDate.substring(11, v987.ETvyv(830354, 830367)) : new Date().Format("hh");
            break;
          case "happenMinute":
            v992 = p1276.happenDate ? p1276.happenDate.substring(v987.ETvyv(399227, 399221), 16) : new Date().Format("mm");
            break;
          default:
            break;
        }
        if (v987.NEUDH(v992, undefined)) {
          v989 += v987.JPvzG("'" + v992, "', ");
        } else {
          v989 += "DEFAULT, ";
        }
      }
    });
    const v993 = p1276.webMonitorId;
    const v994 = new Date(p1276.happenTime).Format("yyyyMMdd");
    const v995 = v987.Uovgf(v993, "LoadPageInfo") + v994;
    let v996 = v987.JPvzG("INSERT INTO " + v995, " (") + v988 + v987.UQXjK + v989 + ")";
    return await v986.query(v996, {
      type: v986.QueryTypes.INSERT
    });
  }
  static async ["getPageLoadTimeByCustomerKey"](p1291, p1292, p1293) {
    const {
      timeScope: _0x477a2e,
      webMonitorId: _0x483994
    } = p1293;
    let v997 = "SELECT CAST(simpleUrl AS char) as simpleUrl, COUNT(simpleUrl) as urlCount, AVG(loadPage) as loadPage, AVG(domReady) as domReady, AVG(request) as resource, AVG(lookupDomain) as DNS from " + vRequire7.setTableName("LoadPageInfo", _0x477a2e, _0x483994) + " where loadPage>0 and loadPage<30000 and " + p1292 + "and" + p1291 + " GROUP BY simpleUrl ORDER BY loadPage";
    return await v986.query(v997, {
      type: v986.QueryTypes.SELECT
    });
  }
  static async getLoadPageInfoByCustomerKey(p1294, p1295) {
    const v998 = {
      Sbotp: "SELECT * from "
    };
    const {
      timeScope: _0x1b652e,
      webMonitorId: _0x51fb63
    } = p1295;
    let v999 = v998.Sbotp + vRequire7.setTableName("LoadPageInfo", _0x1b652e, _0x51fb63) + " where " + p1294;
    return await v986.query(v999, {
      type: v986.QueryTypes.SELECT
    });
  }
  static async getPageLoadTimeByDate(p1296) {
    const v1000 = vRequire3.addDays(0 - p1296.timeScope);
    const v1001 = "SELECT CAST(simpleUrl AS char) as simpleUrl, COUNT(simpleUrl) as urlCount, AVG(loadPage) as loadPage, AVG(domReady) as domReady, AVG(request) as resource, AVG(lookupDomain) as DNS from LoadPageInfo where createdAt>'" + v1000 + "' and loadPage>1 and loadPage<15000 GROUP BY simpleUrl having urlCount>50 ORDER BY loadPage desc limit 15";
    return await v986.query(v1001, {
      type: v986.QueryTypes.SELECT
    });
  }
  static async ["calculatePageCountForSecByDay"](p1297, p1298, p1299) {
    const v1002 = {
      xOLbJ: " 00",
      sVGOV: function (p1300, p1301) {
        return p1300 + p1301;
      },
      dhahS: function (p1302, p1303) {
        return p1302 ^ p1303;
      },
      JvGDJ: " 23",
      gwCpT: "InfoCountByHour"
    };
    const v1003 = p1298.substring(5) + v1002.xOLbJ;
    const v1004 = v1002.sVGOV(p1298.substring(v1002.dhahS(635734, 635731)), v1002.JvGDJ);
    const v1005 = p1297 + v1002.gwCpT;
    let v1006 = v1002.sVGOV("SELECT SUM(hourCount) as count from " + v1005 + " where hourName>='" + v1003, "' and hourName<='") + v1004 + "' and uploadType='" + p1299 + "'";
    return await v986.query(v1006, {
      type: v986.QueryTypes.SELECT
    });
  }
  static async calculateLoadPageInfoForUrlByHour(p1304, p1305, p1306) {
    const v1007 = {
      fPtWt: "LoadPageInfo",
      cZWnO: function (p1307, p1308) {
        return p1307 + p1308;
      },
      ZtAAG: function (p1309, p1310) {
        return p1309 + p1310;
      }
    };
    const v1008 = vRequire3.addDays(-1);
    let v1009 = vRequire7.setTableName(v1007.fPtWt, 0, p1304);
    if (p1305 === v1008 + " 23:00:00") {
      v1009 = vRequire7.setTableName("LoadPageInfo", 1, p1304);
    }
    let v1010 = v1007.cZWnO(v1007.ZtAAG(v1007.ZtAAG("select simpleUrl as showName, count(simpleUrl) as count, avg(loadPage) as loadTime from " + v1009, " WHERE happenDate>='") + p1305, "' AND happenDate<'") + p1306, "' group by simpleUrl order by count desc limit 20");
    return await v986.query(v1010, {
      type: v986.QueryTypes.SELECT
    });
  }
  static async ["calculatePageCountForSecByHour"](p1311, p1312, p1313, p1314, p1315) {
    const v1011 = {
      oBEft: "LoadPageInfo",
      LwaLH: function (p1316, p1317) {
        return p1316 + p1317;
      },
      hGmVO: function (p1318, p1319) {
        return p1318 ^ p1319;
      },
      GWPQS: function (p1320, p1321) {
        return p1320 + p1321;
      },
      NKgWz: "' and loadPage<"
    };
    const v1012 = p1314 * 1000;
    const v1013 = p1315 * 1000;
    const v1014 = vRequire3.addDays(-1);
    let v1015 = vRequire7.setTableName(v1011.oBEft, 0, p1311);
    if (p1312 === v1011.LwaLH(v1014, " 23:00:00")) {
      v1015 = vRequire7.setTableName(v1011.oBEft, v1011.hGmVO(256636, 256637), p1311);
    }
    let v1016 = v1011.GWPQS("SELECT count(dataId) as count from " + v1015 + " WHERE happenDate>='", p1312) + "' AND happenDate<'" + p1313 + v1011.NKgWz + v1013 + " and loadPage>=" + v1012;
    return await v986.query(v1016, {
      type: v986.QueryTypes.SELECT
    });
  }
  static async ["getPageCountForLoadTimeGroupByDay"](p1322) {
    const v1017 = {
      ZMVhQ: function (p1323, p1324) {
        return p1323 + p1324;
      }
    };
    const v1018 = p1322.webMonitorId + "InfoCountByDay";
    let v1019 = v1017.ZMVhQ(v1017.ZMVhQ("SELECT dayName as day, dayCount as count from ", v1018) + " where uploadType='" + p1322.uploadType, "' ORDER BY day");
    return await v986.query(v1019, {
      type: v986.QueryTypes.SELECT
    });
  }
  static async ["getPageCountForLoadTimeByDay"](p1325) {
    const v1020 = {
      weTiH: "InfoCountByDay",
      tznUs: function (p1326, p1327) {
        return p1326 + p1327;
      },
      xUFTS: "SELECT dayName as day, dayCount as count from "
    };
    const v1021 = p1325.webMonitorId + v1020.weTiH;
    let v1022 = v1020.tznUs(v1020.tznUs(v1020.xUFTS + v1021 + " where uploadType='", p1325.uploadType), "' and dayName='") + p1325.dayName + "'";
    return await v986.query(v1022, {
      type: v986.QueryTypes.SELECT
    });
  }
  static async getPageUrlListForLoadTime(p1328) {
    const v1023 = {
      JXchV: function (p1329, p1330) {
        return p1329 ^ p1330;
      },
      DEtBP: function (p1331, p1332) {
        return p1331 + p1332;
      },
      tgOSO: function (p1333, p1334) {
        return p1333 + p1334;
      },
      xAWVD: function (p1335, p1336) {
        return p1335 + p1336;
      },
      xogYn: function (p1337, p1338) {
        return p1337 ^ p1338;
      },
      vPowg: " loadPage>=10000 and loadPage<30000 ",
      rdSgJ: " loadPage>=5000 and loadPage<10000 ",
      lmJeY: " loadPage>=1000 and loadPage<5000 ",
      ljIMu: function (p1339, p1340) {
        return p1339 + p1340;
      },
      zrOcm: function (p1341, p1342) {
        return p1341 + p1342;
      },
      RsWgN: " happenDate>='",
      iWtfo: "LoadPageInfo",
      DPJDm: function (p1343, p1344) {
        return p1343 + p1344;
      },
      qWEgg: " where "
    };
    const {
      searchType: _0x2d9973,
      day: _0x5932a1,
      webMonitorId: _0x3f707c,
      timeHour: _0x3a7215
    } = p1328;
    const v1024 = _0x3a7215.split(":")[0];
    const v1025 = _0x3a7215.split(":")[v1023.JXchV(350734, 350735)];
    const v1026 = v1023.DEtBP(v1023.DEtBP(v1023.tgOSO(v1023.xAWVD(v1023.tgOSO(vRequire3.addDays(v1023.xogYn(530798, 530798) - _0x5932a1), " "), v1024), ":"), v1025), ":00");
    const v1027 = vRequire3.addDays(0 - _0x5932a1) + " " + v1024 + ":59:59";
    let v1028 = "";
    switch (_0x2d9973) {
      case "e":
        v1028 = " loadPage>=30000 and loadPage<1000000 ";
        break;
      case "d":
        v1028 = v1023.vPowg;
        break;
      case "c":
        v1028 = v1023.rdSgJ;
        break;
      case "b":
        v1028 = v1023.lmJeY;
        break;
      case "a":
        v1028 = " loadPage>0 and loadPage<1000 ";
        break;
    }
    v1028 = v1023.ljIMu(v1023.zrOcm(v1023.RsWgN, v1026) + "' and happenDate<= '" + v1027, "' and ") + v1028;
    const v1029 = vRequire7.setTableName(v1023.iWtfo, _0x5932a1, _0x3f707c);
    let v1030 = v1023.DPJDm(v1023.ljIMu("SELECT simpleUrl, count(simpleUrl) as count, avg(loadPage) as loadTime from ", v1029) + v1023.qWEgg + v1028, " GROUP BY simpleUrl ORDER BY count desc limit 20");
    return await v986.query(v1030, {
      type: v986.QueryTypes.SELECT
    });
  }
  static async ["getPageUrlUserCountForLoadTime"](p1345) {
    const v1031 = {
      XklQN: function (p1346, p1347) {
        return p1346 ^ p1347;
      },
      aTqqv: function (p1348, p1349) {
        return p1348 + p1349;
      },
      fHXVY: function (p1350, p1351) {
        return p1350 + p1351;
      },
      AwWGM: function (p1352, p1353) {
        return p1352 + p1353;
      },
      mWgxV: " loadPage>=10000 and loadPage<30000 ",
      jaIKA: function (p1354, p1355) {
        return p1354 + p1355;
      },
      XNXhf: "' and happenDate<= '",
      ZTanM: "' and "
    };
    const {
      searchType: _0x37e864,
      day: _0x132216,
      webMonitorId: _0x46b361,
      simpleUrl: _0xe747b5,
      timeHour: _0x46e4e9
    } = p1345;
    const v1032 = await C9.getUserIdType(_0x46b361);
    const v1033 = _0x46e4e9.split(":")[0];
    const v1034 = _0x46e4e9.split(":")[v1031.XklQN(997983, 997982)];
    const v1035 = v1031.aTqqv(v1031.aTqqv(vRequire3.addDays(0 - _0x132216) + " ", v1033) + ":", v1034) + ":00";
    const v1036 = v1031.fHXVY(v1031.AwWGM(vRequire3.addDays(0 - _0x132216), " "), v1033) + ":59:59";
    let v1037 = "";
    switch (_0x37e864) {
      case "e":
        v1037 = " loadPage>=30000 and loadPage<1000000 ";
        break;
      case "d":
        v1037 = v1031.mWgxV;
        break;
      case "c":
        v1037 = " loadPage>=5000 and loadPage<10000 ";
        break;
      case "b":
        v1037 = " loadPage>=1000 and loadPage<5000 ";
        break;
      case "a":
        v1037 = " loadPage>0 and loadPage<1000 ";
        break;
    }
    v1037 = v1031.jaIKA(v1031.jaIKA(" and happenDate>='", v1035) + v1031.XNXhf + v1036, v1031.ZTanM) + v1037;
    const v1038 = vRequire7.setTableName("LoadPageInfo", _0x132216, _0x46b361);
    let v1039 = v1031.aTqqv("SELECT count(distinct " + v1032 + ") as count from " + v1038, " where simpleUrl='") + _0xe747b5 + "' " + v1037;
    return await v986.query(v1039, {
      type: v986.QueryTypes.SELECT
    });
  }
  static async getDifferentKindAvgLoadTimeListByHour(p1356) {
    const v1040 = {
      aNTXP: function (p1357, p1358) {
        return p1357 ^ p1358;
      },
      EQzsF: " and loadPage>=30000 and loadPage<1000000 ",
      VfCcq: " and loadPage>=5000 and loadPage<10000 ",
      mJHGf: function (p1359, p1360) {
        return p1359 + p1360;
      },
      nikTy: function (p1361, p1362) {
        return p1361 + p1362;
      },
      qcqiL: " DATE_SUB(NOW(),INTERVAL ",
      cRzlX: " DAY) ",
      MhZOk: function (p1363, p1364) {
        return p1363 + p1364;
      },
      HFdYZ: function (p1365, p1366) {
        return p1365 + p1366;
      },
      ZrLiZ: function (p1367, p1368) {
        return p1367 + p1368;
      },
      jhLUm: "FROM ",
      jeLSe: " - INTERVAL 23 HOUR, '%Y-%m-%d %H') <= happenDate ",
      lvpQG: "GROUP BY HOUR"
    };
    const {
      searchType: _0x3477a1,
      day = v1040.aNTXP(560594, 560594),
      webMonitorId: _0x167736,
      simpleUrl: _0x1d02ff
    } = p1356;
    let v1041 = "";
    switch (_0x3477a1) {
      case "e":
        v1041 = v1040.EQzsF;
        break;
      case "d":
        v1041 = " and loadPage>=10000 and loadPage<30000 ";
        break;
      case "c":
        v1041 = v1040.VfCcq;
        break;
      case "b":
        v1041 = " and loadPage>=1000 and loadPage<5000 ";
        break;
      case "a":
        v1041 = " and loadPage>0 and loadPage<1000 ";
        break;
    }
    const v1042 = !day ? " NOW() " : v1040.mJHGf(v1040.nikTy(v1040.qcqiL, day), v1040.cRzlX);
    const v1043 = vRequire7.setTableName("LoadPageInfo", day, _0x167736);
    const v1044 = v1040.MhZOk(v1040.MhZOk(v1040.HFdYZ(v1040.ZrLiZ("SELECT DATE_FORMAT(happenDate,'%H:00') AS hour, AVG(connect) as connect, AVG(lookupDomain) as DNS, AVG(request) as request, AVG(ttfb) as response, AVG(domReady) as domReady, AVG(loadPage) as loadPage " + v1040.jhLUm, v1043) + " ", "WHERE simpleUrl='") + _0x1d02ff + "' " + v1041 + " and DATE_FORMAT(" + v1042, v1040.jeLSe), v1040.lvpQG);
    return await v986.query(v1044, {
      type: v986.QueryTypes.SELECT
    });
  }
  static async getDifferentKindAvgLoadTimeByHourForPageUrl(p1369) {
    const v1045 = {
      HDdEy: function (p1370, p1371) {
        return p1370 + p1371;
      },
      MLckY: function (p1372, p1373) {
        return p1372 - p1373;
      },
      AxrPO: function (p1374, p1375) {
        return p1374 + p1375;
      },
      LhBdp: function (p1376, p1377) {
        return p1376 - p1377;
      },
      lBTcZ: " loadPage>=30000 and loadPage<1000000 ",
      DIucK: "' and happenDate<= '",
      DFPcA: function (p1378, p1379) {
        return p1378 + p1379;
      },
      wstIF: "SELECT AVG(connect) as TCP连接, AVG(lookupDomain) as DNS解析, AVG(request) as 发起请求, AVG(ttfb) as 请求响应, AVG(domReady) as DOM解析, AVG(loadPage) as 页面加载 "
    };
    const {
      searchType: _0x4fe80e,
      day = 0,
      webMonitorId: _0x53d233,
      simpleUrl: _0x46adc3,
      timeHour: _0x4dd181
    } = p1369;
    const v1046 = _0x4dd181.split(":")[0];
    const v1047 = _0x4dd181.split(":")[1];
    const v1048 = v1045.HDdEy(v1045.HDdEy(vRequire3.addDays(v1045.MLckY(0, day)) + " ", v1046) + ":", v1047) + ":00";
    const v1049 = v1045.AxrPO(v1045.HDdEy(vRequire3.addDays(v1045.LhBdp(0, day)), " "), v1046) + ":59:59";
    let v1050 = "";
    switch (_0x4fe80e) {
      case "e":
        v1050 = v1045.lBTcZ;
        break;
      case "d":
        v1050 = " loadPage>=10000 and loadPage<30000 ";
        break;
      case "c":
        v1050 = " loadPage>=5000 and loadPage<10000 ";
        break;
      case "b":
        v1050 = " loadPage>=1000 and loadPage<5000 ";
        break;
      case "a":
        v1050 = " loadPage>0 and loadPage<1000 ";
        break;
    }
    v1050 = v1045.AxrPO(v1045.HDdEy(" and happenDate>='" + v1048, v1045.DIucK), v1049) + "' and " + v1050;
    const v1051 = vRequire7.setTableName("LoadPageInfo", day, _0x53d233);
    const v1052 = v1045.AxrPO(v1045.DFPcA(v1045.wstIF + "FROM " + v1051, " ") + "WHERE simpleUrl='", _0x46adc3) + "' " + v1050;
    return await v986.query(v1052, {
      type: v986.QueryTypes.SELECT
    });
  }
  static async ["getPageUrlCountListByHour"](p1380) {
    const v1053 = {
      pSAaV: function (p1381, p1382) {
        return p1381 + p1382;
      },
      LdLge: function (p1383, p1384) {
        return p1383 ^ p1384;
      },
      JcaXl: " and uploadType='",
      eiUHa: function (p1385, p1386) {
        return p1385 + p1386;
      },
      KfTuj: "InfoCountByHour",
      yWQwj: " WHERE hourName>='",
      mZWiT: "' and hourName<='"
    };
    const {
      searchType: _0x16f1b0,
      day = 0,
      webMonitorId: _0x5183e9
    } = p1380;
    let v1054 = "";
    const v1055 = vRequire3.addDays(0 - day);
    const v1056 = v1055.substring(5) + " 00";
    const v1057 = v1053.pSAaV(v1055.substring(v1053.LdLge(264870, 264867)), " 23");
    switch (_0x16f1b0) {
      case "e":
        v1054 = v1053.JcaXl + UPLOAD_TYPE.PAGE_HOUR_COUNT_E + "' ";
        break;
      case "d":
        v1054 = v1053.JcaXl + UPLOAD_TYPE.PAGE_HOUR_COUNT_D + "' ";
        break;
      case "c":
        v1054 = " and uploadType='" + UPLOAD_TYPE.PAGE_HOUR_COUNT_C + "' ";
        break;
      case "b":
        v1054 = " and uploadType='" + UPLOAD_TYPE.PAGE_HOUR_COUNT_B + "' ";
        break;
      case "a":
        v1054 = v1053.pSAaV(v1053.pSAaV(v1053.JcaXl, UPLOAD_TYPE.PAGE_HOUR_COUNT_A), "' ");
        break;
    }
    const v1058 = v1053.eiUHa(p1380.webMonitorId, v1053.KfTuj);
    const v1059 = v1053.pSAaV("SELECT hourName as hour, hourCount as count from " + v1058 + v1053.yWQwj + v1056 + v1053.mZWiT, v1057) + "' " + v1054;
    return await v986.query(v1059, {
      type: v986.QueryTypes.SELECT
    });
  }
  static async ["getPageUrlCountForHourByMinutes"](p1387) {
    const v1060 = {
      YheyN: function (p1388, p1389) {
        return p1388 ^ p1389;
      },
      VMoSf: function (p1390, p1391) {
        return p1390 ^ p1391;
      },
      sWoJR: "yyyy-MM-dd hh:00:00",
      kydwm: "LoadPageInfo",
      sgJkp: " and loadPage>=30000 and loadPage<1000000 ",
      VAOVP: " and loadPage>=1000 and loadPage<5000 ",
      mhvfP: function (p1392, p1393) {
        return p1392 + p1393;
      },
      WICEn: function (p1394, p1395) {
        return p1394 + p1395;
      },
      sStYI: "' - INTERVAL 60 MINUTE, '%Y-%m-%d %T') <= happenDate ",
      ufHcq: "GROUP BY minutes"
    };
    const {
      searchType: _0x25f497,
      day = 0,
      webMonitorId: _0x51cdb6,
      timeHour: _0x38d3a7
    } = p1387;
    const v1061 = new Date(parseInt(_0x38d3a7, 10)).Format("yyyy-MM-dd hh:00:00");
    const v1062 = new Date(parseInt(_0x38d3a7, 10) + v1060.YheyN(844118, 844138) * v1060.VMoSf(660406, 660362) * v1060.VMoSf(821058, 820394)).Format(v1060.sWoJR);
    const v1063 = vRequire7.setTableName(v1060.kydwm, day, _0x51cdb6);
    let v1064 = "";
    switch (_0x25f497) {
      case "e":
        v1064 = v1060.sgJkp;
        break;
      case "d":
        v1064 = " and loadPage>=10000 and loadPage<30000 ";
        break;
      case "c":
        v1064 = " and loadPage>=5000 and loadPage<10000 ";
        break;
      case "b":
        v1064 = v1060.VAOVP;
        break;
      case "a":
        v1064 = " and loadPage>=0 and loadPage<1000 ";
        break;
    }
    const v1065 = v1060.mhvfP(v1060.WICEn("SELECT DATE_FORMAT(happenDate,'%Y-%m-%d %H:%i') AS minutes, count(dataId) AS count FROM " + v1063 + " ", "WHERE happenDate>'") + v1061 + "' and happenDate<'" + v1062 + "' " + v1064 + " and DATE_FORMAT('", v1062) + v1060.sStYI + v1060.ufHcq;
    return await v986.query(v1065, {
      type: v986.QueryTypes.SELECT
    });
  }
  static async ["getPagePerformanceByHour"](p1396, p1397, p1398) {
    const v1066 = {
      MyamO: function (p1399, p1400) {
        return p1399 ^ p1400;
      },
      trVpZ: function (p1401, p1402) {
        return p1401 === p1402;
      },
      kzpFC: " 23:00:00",
      vBFBG: function (p1403, p1404) {
        return p1403 + p1404;
      },
      RyYSA: "SELECT count(dataId) as firstLoadCount, avg(loadPage) as loadPage, avg(lookupDomain) as dns, avg(connect) as tcp, avg(ttfb) as ttfb, avg(request) as resource, avg(domReady) as domAnalysis  from ",
      SuNQG: "' GROUP BY loadType"
    };
    const v1067 = vRequire3.addDays(-v1066.MyamO(601961, 601960));
    let v1068 = vRequire7.setTableName("LoadPageInfo", 0, p1396);
    if (v1066.trVpZ(p1397, v1067 + v1066.kzpFC)) {
      v1068 = vRequire7.setTableName("LoadPageInfo", v1066.MyamO(493042, 493043), p1396);
    }
    const v1069 = v1066.vBFBG(v1066.vBFBG(v1066.RyYSA, v1068) + " WHERE happenDate>='", p1397) + "' AND happenDate<'" + p1398 + v1066.SuNQG;
    return await v986.query(v1069, {
      type: v986.QueryTypes.SELECT
    });
  }
  static async ["getPageLoadTimeListByUrl"](p1405) {
    const v1070 = {
      wSHuD: function (p1406, p1407) {
        return p1406 + p1407;
      },
      plTaV: function (p1408, p1409) {
        return p1408 + p1409;
      },
      PXnBj: " GROUP BY simpleUrl ORDER BY count desc limit 10"
    };
    const {
      webMonitorId: _0x4613dc,
      timeSize: _0x230551
    } = p1405;
    let v1071 = v1070.wSHuD(v1070.plTaV("select simpleUrl, count(simpleUrl) as count, avg(loadPage) as loadPage from ", vRequire7.setTableName("LoadPageInfo", _0x230551, _0x4613dc)), v1070.PXnBj);
    return await v986.query(v1071, {
      type: v986.QueryTypes.SELECT
    });
  }
  static async ["getPageLoadTimePercent"](p1410) {
    const v1072 = {
      Kboha: function (p1411, p1412) {
        return p1411 - p1412;
      },
      ehQZF: function (p1413, p1414) {
        return p1413 + p1414;
      },
      oLhMm: " where uploadType in ",
      frXyX: " and dayName='"
    };
    const v1073 = vRequire3.addDays(v1072.Kboha(0, p1410.timeSize));
    const v1074 = p1410.webMonitorId + "InfoCountByDay";
    let v1075 = v1072.ehQZF("SELECT uploadType, dayCount from " + v1074 + v1072.oLhMm + p1410.uploadTypes + v1072.frXyX, v1073) + "'";
    return await v986.query(v1075, {
      type: v986.QueryTypes.SELECT
    });
  }
}
const v1076 = new vRequire2("../schema/infoCountByDay");
class C19 {
  static async ["createInfoCountByDay"](p1415) {
    const v1078 = {
      UKQaG: "InfoCountByDay"
    };
    const {
      webMonitorId: _0x469e2f
    } = p1415;
    return await v1076.create({
      ...p1415
    }, _0x469e2f + v1078.UKQaG);
  }
  static async ["updateInfoCountByDay"](p1416, p1417) {
    const {
      webMonitorId: _0x23fd2c
    } = p1417;
    await v1076.update({
      ...p1417
    }, {
      where: {
        dataId: p1416
      },
      fields: Object.keys(p1417)
    }, _0x23fd2c + "InfoCountByDay");
    return true;
  }
  static async getInfoCountByDayList() {
    return await v1076.findAndCountAll();
  }
  static async getInfoCountByDayDetail(p1418) {
    return await v1076.findOne({
      where: {
        dataId: p1418
      }
    });
  }
  static async getInfoCountByDayDetailByDayName(p1419, p1420, p1421) {
    const v1079 = {
      AePYX: function (p1422, p1423) {
        return p1422 + p1423;
      }
    };
    const v1080 = v1079.AePYX(p1420, "InfoCountByDay");
    let v1081 = "select dataId, dayName, dayCount from " + v1080 + " WHERE dayName='" + p1419 + "' and uploadType='" + p1421 + "'";
    return await v1076.query(v1081, {
      type: v1076.QueryTypes.SELECT
    });
  }
  static async getInfoCountByUploadTypes(p1424, p1425, p1426) {
    const v1082 = {
      pocRk: function (p1427, p1428) {
        return p1427 + p1428;
      }
    };
    const v1083 = v1082.pocRk(p1425, "InfoCountByDay");
    let v1084 = "select uploadType, dayCount from " + v1083 + " WHERE dayName='" + p1424 + "' and uploadType in (" + p1426 + ")";
    return await v1076.query(v1084, {
      type: v1076.QueryTypes.SELECT
    });
  }
  static async ["getInfoCountByDayName"](p1429, p1430, p1431) {
    const v1085 = {
      dmrZB: function (p1432, p1433) {
        return p1432 + p1433;
      },
      vSgux: function (p1434, p1435) {
        return p1434 + p1435;
      },
      lHmiV: " WHERE dayName='",
      qVIeb: "' and uploadType='"
    };
    const v1086 = v1085.dmrZB(p1430, "InfoCountByDay");
    let v1087 = v1085.dmrZB(v1085.dmrZB(v1085.vSgux("select dayCount from " + v1086, v1085.lHmiV), p1429) + v1085.qVIeb + p1431, "'");
    return await v1076.query(v1087, {
      type: v1076.QueryTypes.SELECT
    });
  }
  static async ["getInfoCountByDayNameForTimeScope"](p1436, p1437, p1438) {
    const v1088 = {
      SckHl: function (p1439, p1440) {
        return p1439 + p1440;
      }
    };
    const v1089 = v1088.SckHl(p1436, "InfoCountByDay");
    let v1090 = "\n    SELECT dayName,\n    SUM(IF(`uploadType`='samplingPv',dayCount,0)) as samplingPv,\n    SUM(IF(`uploadType`='firstByte',dayCount,0)) as firstByteAvg,\n    SUM(IF(`uploadType`='domReady',dayCount,0)) as domReadyAvg,\n    SUM(IF(`uploadType`='pageCompleteLoaded',dayCount,0)) as pageCompleteLoadedAvg,\n    SUM(IF(`uploadType`='dns',dayCount,0)) as dnsAvg,\n    SUM(IF(`uploadType`='tcp',dayCount,0)) as tcpAvg,\n    SUM(IF(`uploadType`='response',dayCount,0)) as responseAvg,\n    SUM(IF(`uploadType`='conTrans',dayCount,0)) as conTransAvg,\n    SUM(IF(`uploadType`='domAnalysis',dayCount,0)) as domAnalysisAvg,\n    SUM(IF(`uploadType`='resourceLoaded',dayCount,0)) as resourceLoadedAvg\n    from " + v1089 + "\n    WHERE dayName>='" + p1437 + "' AND dayName<='" + p1438 + "' and uploadType in ('samplingPv','firstByte','domReady','pageCompleteLoaded','dns','tcp','response','conTrans','domAnalysis','resourceLoaded')\n    GROUP BY dayName\n    ";
    return await v1076.query(v1090, {
      type: v1076.QueryTypes.SELECT
    });
  }
  static async getInfoCountByDayDetailForLocationPointByDayName(p1441, p1442) {
    const v1091 = {
      hyvhL: function (p1443, p1444) {
        return p1443 + p1444;
      },
      hyBqV: function (p1445, p1446) {
        return p1445 + p1446;
      },
      VijQx: function (p1447, p1448) {
        return p1447 + p1448;
      }
    };
    const v1092 = webMonitorId + "InfoCountByDay";
    let v1093 = v1091.hyvhL(v1091.hyBqV(v1091.VijQx("select dataId from " + v1092, " WHERE dayName='") + p1441, "' and uploadType='") + p1442, "'");
    return await v1076.query(v1093, {
      type: v1076.QueryTypes.SELECT
    });
  }
  static async ["deleteInfoCountByDay"](p1449) {
    await v1076.destroy({
      where: {
        dataId: p1449
      }
    });
    return true;
  }
  static async getTotalCountForMonth(p1450, p1451, p1452) {
    const v1094 = p1450 + "InfoCountByDay";
    let v1095 = "SELECT sum(dayCount) as count FROM " + v1094 + " WHERE dayName like '" + p1451 + "-%' and uploadType = '" + p1452 + "'";
    return await v1076.query(v1095, {
      type: v1076.QueryTypes.SELECT
    });
  }
}
const v1096 = new vRequire2("../schema/infoCountByHour");
class C20 {
  static async ["createInfoCountByHour"](p1453) {
    const v1097 = {
      dFgsh: function (p1454, p1455) {
        return p1454 + p1455;
      }
    };
    const {
      webMonitorId: _0x306f08
    } = p1453;
    return await v1096.create({
      ...p1453
    }, v1097.dFgsh(_0x306f08, "InfoCountByHour"));
  }
  static async ["updateInfoCountByHour"](p1456, p1457) {
    const {
      webMonitorId: _0x135f75,
      hourCount = 0
    } = p1457;
    console.log("数据更新：", p1457);
    await v1096.update({
      hourCount: hourCount
    }, {
      where: {
        dataId: p1456
      },
      fields: Object.keys(p1457)
    }, _0x135f75 + "InfoCountByHour");
    return true;
  }
  static async ["getInfoCountByHourList"]() {
    return await v1096.findAndCountAll();
  }
  static async ["getInfoCountByHourDetail"](p1458) {
    return await v1096.findOne({
      where: {
        dataId: p1458
      }
    });
  }
  static async getInfoCountByIdByHourName(p1459, p1460, p1461) {
    const v1098 = {
      nsNDw: "InfoCountByHour",
      IhLtN: function (p1462, p1463) {
        return p1462 + p1463;
      },
      LBzrA: "select dataId, hourCount from ",
      BpmiH: "' and uploadType='"
    };
    const v1099 = p1460 + v1098.nsNDw;
    let v1100 = v1098.IhLtN(v1098.IhLtN(v1098.IhLtN(v1098.LBzrA + v1099, " WHERE hourName='") + p1459, v1098.BpmiH), p1461) + "'";
    return await v1096.query(v1100, {
      type: v1096.QueryTypes.SELECT
    });
  }
  static async getLocationPointCountByIdByHourName(p1464, p1465) {
    const v1101 = {
      izgNp: function (p1466, p1467) {
        return p1466 + p1467;
      }
    };
    const v1102 = v1101.izgNp(webMonitorId, "InfoCountByHour");
    let v1103 = v1101.izgNp("select dataId from " + v1102 + " WHERE hourName='" + p1464 + "' AND uploadType='" + p1465, "'");
    return await v1096.query(v1103, {
      type: v1096.QueryTypes.SELECT
    });
  }
  static async ["getInfoCountByHourDetailByHourName"](p1468, p1469, p1470) {
    const v1104 = {
      GOwlz: "InfoCountByHour",
      sZTtg: function (p1471, p1472) {
        return p1471 + p1472;
      },
      wFHvA: "select * from "
    };
    const v1105 = p1469 + v1104.GOwlz;
    let v1106 = v1104.sZTtg(v1104.sZTtg(v1104.wFHvA, v1105) + " WHERE hourName='" + p1468 + "' and uploadType='" + p1470, "'");
    return await v1096.query(v1106, {
      type: v1096.QueryTypes.SELECT
    });
  }
  static async ["getPageLoadTimeForAll"](p1473, p1474, p1475) {
    const v1107 = {
      RkLtb: function (p1476, p1477) {
        return p1476 + p1477;
      },
      mdpzw: function (p1478, p1479) {
        return p1478 + p1479;
      }
    };
    const v1108 = v1107.RkLtb(p1473, "InfoCountByHour");
    let v1109 = v1107.mdpzw(v1107.mdpzw("SELECT uploadType, avg(hourCount) as count from " + v1108 + " where hourName>='" + p1474, "' and hourName<='") + p1475, "' GROUP BY uploadType");
    return await v1096.query(v1109, {
      type: v1096.QueryTypes.SELECT
    });
  }
  static async ["getAvgLoadTimeForAllByHour"](p1480, p1481, p1482, p1483) {
    const v1110 = {
      sHTrl: function (p1484, p1485) {
        return p1484 + p1485;
      },
      xcLQo: function (p1486, p1487) {
        return p1486 + p1487;
      },
      zWNBb: function (p1488, p1489) {
        return p1488 + p1489;
      },
      RdydD: "' and hourName<='"
    };
    const v1111 = p1480 + "InfoCountByHour";
    let v1112 = v1110.sHTrl(v1110.sHTrl(v1110.xcLQo(v1110.zWNBb("SELECT hourName, hourCount from " + v1111, " where uploadType='") + p1481 + "' and hourName>='", p1482), v1110.RdydD), p1483) + "'";
    return await v1096.query(v1112, {
      type: v1096.QueryTypes.SELECT
    });
  }
  static async getHttpLoadTimeForAll(p1490) {
    const v1113 = {
      WTcpd: function (p1491, p1492) {
        return p1491 + p1492;
      }
    };
    const v1114 = p1490 + "InfoCountByHour";
    let v1115 = v1113.WTcpd("SELECT uploadType, avg(hourCount) as count from ", v1114) + " GROUP BY uploadType";
    return await v1096.query(v1115, {
      type: v1096.QueryTypes.SELECT
    });
  }
  static async ["deleteInfoCountByHour"](p1493) {
    await v1096.destroy({
      where: {
        dataId: p1493
      }
    });
    return true;
  }
  static async deleteOneYearAgo(p1494) {
    const v1116 = {
      MCDsp: function (p1495, p1496) {
        return p1495 * p1496;
      },
      vhnkE: function (p1497, p1498) {
        return p1497 ^ p1498;
      },
      QcwRD: "InfoCountByHour"
    };
    if (!p1494) {
      return;
    }
    const v1117 = new Date().getTime() - v1116.MCDsp(v1116.vhnkE(145482, 145698) * 24 * v1116.vhnkE(120584, 121112), 1000);
    const v1118 = p1494 + v1116.QcwRD;
    let v1119 = "delete from " + v1118 + " where createdAt<'" + new Date(v1117).Format("yyyy-MM-dd 00:00:00") + "'";
    return v1096.query(v1119, {
      type: v1096.QueryTypes.SELECT
    });
  }
  static async ["deleteOneMonthAgo"](p1499) {
    const v1120 = {
      uiEnK: function (p1500, p1501) {
        return p1500 * p1501;
      },
      LnujI: function (p1502, p1503) {
        return p1502 ^ p1503;
      },
      YkbaJ: function (p1504, p1505) {
        return p1504 ^ p1505;
      },
      NidEr: "yyyy-MM-dd 00:00:00"
    };
    if (!p1499) {
      return;
    }
    const v1121 = new Date().getTime() - v1120.uiEnK(v1120.LnujI(953204, 953196) * 31, 3600) * v1120.YkbaJ(251498, 251266);
    const v1122 = p1499 + "InfoCountByHour";
    let v1123 = "delete from " + v1122 + " where createdAt<'" + new Date(v1121).Format(v1120.NidEr) + "'";
    return v1096.query(v1123, {
      type: v1096.QueryTypes.SELECT
    });
  }
}
const v1124 = new vRequire2("../schema/pageLoadInfo");
exports.PageLoadInfo = v1124;
class C21 {
  static async createPageLoadInfo(p1506) {
    const v1125 = {
      kfJMw: function (p1507, p1508) {
        return p1507 != p1508;
      },
      MOBOe: function (p1509, p1510) {
        return p1509 + p1510;
      },
      MPrOU: function (p1511, p1512) {
        return p1511 + p1512;
      },
      mAHAo: "createdAt",
      Nasnc: "domReady",
      aVVqu: "tcp",
      TQYqC: "response",
      aRcYE: "conTrans",
      kminL: function (p1513, p1514) {
        return p1513 < p1514;
      },
      odtFm: function (p1515, p1516) {
        return p1515 ^ p1516;
      },
      TzmNQ: function (p1517, p1518) {
        return p1517 ^ p1518;
      },
      WKXMB: "DEFAULT, ",
      cBirv: "sessionId"
    };
    const v1126 = {
      ...p1506,
      openSecond: Math.ceil(p1506.pageCompleteLoaded / 1000)
    };
    let v1127 = true;
    let v1128 = "";
    let v1129 = "";
    const v1130 = ["uploadType", "happenTime", "happenDate", "happenHour", "happenMinute", "webMonitorId", "customerKey", v1125.cBirv, "simpleUrl", "completeUrl", "userId", "firstUserParam", "secondUserParam", "createdAt", "updatedAt", "id", "loadType", "firstByte", "domReady", "pageCompleteLoaded", "dns", "tcp", "ssl", "response", "conTrans", "domAnalysis", "resourceLoaded", "openSecond", "effectiveType", "country", "province", "city", "projectVersion", "os"];
    v1130.forEach((p1519, p1520) => {
      if (p1520 == v1130.length - 1) {
        v1128 += "`" + p1519 + "`";
        let v1131 = v1126[p1519];
        if (v1125.kfJMw(v1131, undefined)) {
          v1129 += v1125.MOBOe(v1125.MPrOU("'", v1131), "'");
        } else {
          v1129 += "DEFAULT";
        }
      } else {
        v1128 += "`" + p1519 + "`, ";
        let v1132 = v1126[p1519];
        switch (p1519) {
          case "id":
            v1132 = new Date().getTime() + vRequire3.getUuid();
            break;
          case v1125.mAHAo:
          case "updatedAt":
            v1132 = new Date().Format("yyyy-MM-dd hh:mm:ss");
            break;
          case "loadType":
          case "firstByte":
          case v1125.Nasnc:
          case "pageCompleteLoaded":
          case "dns":
          case v1125.aVVqu:
          case "ssl":
          case v1125.TQYqC:
          case v1125.aRcYE:
          case "domAnalysis":
          case "resourceLoaded":
          case "openSecond":
            if (v1125.kminL(v1132, 0) || v1132 > v1125.odtFm(291813, 290829) * 30) {
              v1127 = false;
            }
            break;
          case "happenHour":
            v1132 = v1126.happenDate ? v1126.happenDate.substring(v1125.TzmNQ(696718, 696709), 13) : new Date().Format("hh");
            break;
          case "happenMinute":
            v1132 = v1126.happenDate ? v1126.happenDate.substring(14, 16) : new Date().Format("mm");
            break;
          default:
            break;
        }
        if (v1132 != undefined) {
          v1129 += "'" + v1132 + "', ";
        } else {
          v1129 += v1125.WKXMB;
        }
      }
    });
    const v1133 = v1126.webMonitorId + "PageLoadInfo";
    if (v1127 === true) {
      return await v1124.create(v1126, v1133);
    } else {
      return null;
    }
  }
  static async ["calculateValueByDay"](p1521, p1522) {
    const v1134 = {
      UlMBf: " 00:00:00",
      aBQVn: function (p1523, p1524) {
        return p1523 + p1524;
      },
      WPAvG: " avg(dns) as dns, avg(tcp) as tcp, avg(`ssl`) as sl, avg(response) as response, avg(conTrans) as conTrans, avg(domAnalysis) as domAnalysis, avg(resourceLoaded) as resourceLoaded "
    };
    const v1135 = vRequire3.addDays(p1522);
    const v1136 = v1135 + v1134.UlMBf;
    const v1137 = v1134.aBQVn(v1135, " 23:59:59");
    const v1138 = p1521 + "PageLoadInfo";
    let v1139 = " select count(dataId) as samplingPv, avg(firstByte) as firstByte, avg(domReady) as domReady, avg(pageCompleteLoaded) as pageCompleteLoaded," + v1134.WPAvG + (" from " + v1138 + " as p where happenDate>='" + v1136 + "' and happenDate<='" + v1137 + "' ");
    return await v1124.query(v1139, {
      type: v1124.QueryTypes.SELECT
    });
  }
  static async ["calculateValueByMinute"](p1525, p1526) {
    const v1140 = {
      YEPEf: function (p1527, p1528) {
        return p1527 ^ p1528;
      },
      LVeNL: function (p1529, p1530) {
        return p1529 === p1530;
      },
      WJKVN: "00:00",
      ZEmDn: " select count(dataId) as samplingPv, avg(firstByte) as firstByte, avg(domReady) as domReady, avg(pageCompleteLoaded) as pageCompleteLoaded,"
    };
    const v1141 = p1526.split(":");
    let v1142 = v1141[v1140.YEPEf(133157, 133157)];
    let v1143 = v1141[v1140.YEPEf(466150, 466151)];
    let v1144 = vRequire7.setTableName("PageLoadInfo", 0, p1525);
    if (v1140.LVeNL(p1526, v1140.WJKVN)) {
      v1144 = vRequire7.setTableName("PageLoadInfo", 1, p1525);
      v1142 = "23";
      v1143 = "59";
    }
    const v1145 = v1140.ZEmDn + " avg(dns) as dns, avg(tcp) as tcp, avg(`ssl`) as sl, avg(response) as response, avg(conTrans) as conTrans, avg(domAnalysis) as domAnalysis, avg(resourceLoaded) as resourceLoaded " + (" from " + v1144 + " as p where happenHour='" + v1142 + "' and happenMinute='" + v1143 + "' ");
    return await v1124.query(v1145, {
      type: v1124.QueryTypes.SELECT
    });
  }
  static async ["calculateSecondOpenByMinute"](p1531, p1532) {
    const v1146 = {
      YRPUo: "00:00"
    };
    const v1147 = p1532.split(":");
    let v1148 = v1147[0];
    let v1149 = v1147[1];
    let v1150 = vRequire7.setTableName("PageLoadInfo", 0, p1531);
    if (p1532 === v1146.YRPUo) {
      v1150 = vRequire7.setTableName("PageLoadInfo", 1, p1531);
      v1148 = "23";
      v1149 = "59";
    }
    const v1151 = "select openSecond, count(openSecond) as count from " + v1150 + " as p where happenHour='" + v1148 + "' and happenMinute='" + v1149 + "' group by openSecond";
    return await v1124.query(v1151, {
      type: v1124.QueryTypes.SELECT
    });
  }
  static async getPageLoadOverviewSimple(p1533, p1534) {
    const v1152 = {
      zfSim: " 00:00:00"
    };
    const v1153 = vRequire3.addDays(p1534);
    const v1154 = v1153 + v1152.zfSim;
    const v1155 = v1153 + " 23:59:59";
    const v1156 = p1533 + "PageLoadInfo";
    let v1157 = "select avg(firstByte) as firstByteAvg, avg(tcp + conTrans + domAnalysis + dns + firstByte + resourceLoaded) as pageCompleteLoadedAvg, avg(tcp + conTrans + domAnalysis + dns + firstByte) as domReadyAvg, count(dataId) as samplingPv from " + v1156 + " as p where happenDate>='" + v1154 + "' and happenDate<='" + v1155 + "' ";
    return await v1124.query(v1157, {
      type: v1124.QueryTypes.SELECT
    });
  }
  static async ["getPageLoadOverviewByTimeType"](p1535, p1536, p1537, p1538, p1539) {
    const v1158 = {
      pkTnW: function (p1540, p1541) {
        return p1540 + p1541;
      },
      IIJzf: function (p1542, p1543) {
        return p1542 + p1543;
      }
    };
    const v1159 = v1158.pkTnW(p1536, " 00:00:00");
    const v1160 = v1158.pkTnW(p1537, " 23:59:59");
    const v1161 = v1158.IIJzf(p1535, "PageLoadInfo");
    const v1162 = p1539 ? " and simpleUrl='" + p1539 + "' " : "";
    let v1163 = "select \n      " + p1538 + ",\n      avg(firstByte) as firstByteAvg, \n      avg(tcp + conTrans + domAnalysis + dns + firstByte + resourceLoaded) as pageCompleteLoadedAvg, \n      avg(tcp + conTrans + domAnalysis + dns + firstByte) as domReadyAvg,\n      avg(dns) as dnsAvg, \n      avg(tcp) as tcpAvg, \n      avg(response) as responseAvg, \n      avg(conTrans) as conTransAvg, \n      avg(domAnalysis) as domAnalysisAvg, \n      avg(resourceLoaded) as resourceLoadedAvg, \n      count(dataId) as samplingPv\n      from " + v1161 + " as p where happenDate>='" + v1159 + "' and happenDate<='" + v1160 + "' " + v1162 + " group by " + p1538;
    return await v1124.query(v1163, {
      type: v1124.QueryTypes.SELECT
    });
  }
  static async ["getPageLoadOverviewByDay"](p1544, p1545, p1546, p1547) {
    const v1164 = {
      DmYzS: function (p1548, p1549) {
        return p1548 + p1549;
      },
      nuAOt: " 00:00:00",
      PSeLI: " 23:59:59"
    };
    const v1165 = v1164.DmYzS(p1545, v1164.nuAOt);
    const v1166 = p1546 + v1164.PSeLI;
    const v1167 = p1544 + "PageLoadInfo";
    const v1168 = p1547 ? " and simpleUrl='" + p1547 + "' " : "";
    let v1169 = "select \n    DATE_FORMAT(happenDate,'%Y-%m-%d') as dayName,\n    avg(firstByte) as firstByteAvg, \n    avg(tcp + conTrans + domAnalysis + dns + firstByte + resourceLoaded) as pageCompleteLoadedAvg, \n    avg(tcp + conTrans + domAnalysis + dns + firstByte) as domReadyAvg,\n    avg(dns) as dnsAvg, \n    avg(tcp) as tcpAvg, \n    avg(response) as responseAvg, \n    avg(conTrans) as conTransAvg, \n    avg(domAnalysis) as domAnalysisAvg, \n    avg(resourceLoaded) as resourceLoadedAvg, \n    count(dataId) as samplingPv \n    from " + v1167 + " as p where happenDate>='" + v1165 + "' and happenDate<='" + v1166 + "' " + v1168 + " group by dayName ";
    return await v1124.query(v1169, {
      type: v1124.QueryTypes.SELECT
    });
  }
  static async getCountForOpenOneSecond(p1550, p1551, p1552 = 2000) {
    const v1170 = {
      gzyzv: " 00:00:00",
      mAASV: function (p1553, p1554) {
        return p1553 + p1554;
      }
    };
    const v1171 = vRequire3.addDays(p1551);
    const v1172 = v1171 + v1170.gzyzv;
    const v1173 = v1171 + " 23:59:59";
    const v1174 = v1170.mAASV(p1550, "PageLoadInfo");
    let v1175 = "select count(dataId) as count from " + v1174 + " as p where happenDate>='" + v1172 + "' and happenDate<='" + v1173 + "' and pageCompleteLoaded<=" + p1552 + " ";
    return await v1124.query(v1175, {
      type: v1124.QueryTypes.SELECT
    });
  }
  static async calculateValueForUrlByDay(p1555, p1556) {
    const v1176 = {
      BpfeP: " 00:00:00"
    };
    const v1177 = vRequire3.addDays(p1556);
    const v1178 = v1177 + v1176.BpfeP;
    const v1179 = v1177 + " 23:59:59";
    const v1180 = p1555 + "PageLoadInfo";
    let v1181 = "select simpleUrl, avg(firstByte) as firstByte, avg(domReady) as domReady, avg(pageCompleteLoaded) as pageCompleteLoaded from " + v1180 + " as p where happenDate>='" + v1178 + "' and happenDate<='" + v1179 + "' GROUP BY simpleUrl";
    return await v1124.query(v1181, {
      type: v1124.QueryTypes.SELECT
    });
  }
  static async getPerfDataForUrlByDay(p1557, p1558) {
    const v1182 = {
      vmMKo: "PageLoadInfo",
      RKAom: function (p1559, p1560) {
        return p1559 + p1560;
      },
      ivMyi: " 00:00:00"
    };
    let v1183 = vRequire7.setTableName(v1182.vmMKo, p1558, p1557);
    const v1184 = vRequire3.addDays(0 - p1558);
    const v1185 = v1182.RKAom(v1184, v1182.ivMyi);
    const v1186 = v1184 + " 23:59:59";
    let v1187 = "select simpleUrl, avg(dns) as dns, avg(tcp) as tcp, avg(`ssl`) as sl, avg(response) as response, avg(conTrans) as conTrans, avg(domAnalysis) as domAnalysis, avg(resourceLoaded) as resourceLoaded, avg(firstByte) as firstByte, (tcp + conTrans + domAnalysis + dns + firstByte + resourceLoaded) as pageCompleteLoaded, (tcp + conTrans + domAnalysis + dns + firstByte) as domReady, count(simpleUrl) as samplingPv from " + v1183 + " as p where happenDate>='" + v1185 + "' and happenDate<='" + v1186 + "' GROUP BY simpleUrl order by pageCompleteLoaded desc limit 1000";
    return await v1124.query(v1187, {
      type: v1124.QueryTypes.SELECT
    });
  }
  static async getPerfDataForWaterfall(p1561, p1562) {
    const v1188 = {
      XXNup: function (p1563, p1564) {
        return p1563 + p1564;
      }
    };
    let v1189 = p1561 + "PageLoadInfo";
    const v1190 = vRequire3.addDays(p1562);
    const v1191 = v1190 + " 00:00:00";
    const v1192 = v1188.XXNup(v1190, " 23:59:59");
    let v1193 = "select avg(dns) as dns, avg(tcp) as tcp, avg(`ssl`) as sl, avg(response) as response, avg(conTrans) as conTrans, avg(domAnalysis) as domAnalysis, avg(resourceLoaded) as resourceLoaded, avg(firstByte) as firstByte, avg(domReady) as domReady, avg(pageCompleteLoaded) as pageCompleteLoaded, count(simpleUrl) as samplingPv from " + v1189 + " as p where happenDate>='" + v1191 + "' and happenDate<='" + v1192 + "' ";
    return await v1124.query(v1193, {
      type: v1124.QueryTypes.SELECT
    });
  }
  static async getPerfDataForUrlByVersion(p1565, p1566, p1567) {
    const v1194 = {
      Qkopa: function (p1568, p1569) {
        return p1568 ^ p1569;
      },
      dOrPR: " 00:00:00"
    };
    let v1195 = vRequire7.setTableName("PageLoadInfo", p1567, p1565);
    const v1196 = vRequire3.addDays(v1194.Qkopa(371475, 371475) - p1567);
    const v1197 = v1196 + v1194.dOrPR;
    const v1198 = v1196 + " 23:59:59";
    const v1199 = " and happenDate>='" + v1197 + "' and happenDate<='" + v1198 + "' ";
    let v1200 = "select projectVersion, count(dataId) as samplingPv, count(distinct customerKey) as samplingUv, avg(pageCompleteLoaded) as pageCompleteLoaded from " + v1195 + " as p where simpleUrl='" + vRequire3.b64EncodeUnicode(p1566) + "' " + v1199 + " GROUP BY projectVersion";
    return await v1124.query(v1200, {
      type: v1124.QueryTypes.SELECT
    });
  }
  static async getPerfDataForMap(p1570, p1571, p1572) {
    const v1201 = {
      VjVyD: function (p1573, p1574) {
        return p1573 ^ p1574;
      },
      ypWBQ: " 23:59:59"
    };
    let v1202 = vRequire7.setTableName("PageLoadInfo", p1571, p1570);
    const v1203 = vRequire3.addDays(v1201.VjVyD(328048, 328048) - p1571);
    const v1204 = v1203 + " 00:00:00";
    const v1205 = v1203 + v1201.ypWBQ;
    const v1206 = " and happenDate>='" + v1204 + "' and happenDate<='" + v1205 + "' ";
    let v1207 = "select " + p1572 + " as name, avg(tcp + conTrans + domAnalysis + dns + firstByte + resourceLoaded) as value, count(dataId) as samplingPv from " + v1202 + " where 1=1 " + v1206 + " GROUP BY " + p1572;
    return await v1124.query(v1207, {
      type: v1124.QueryTypes.SELECT
    });
  }
  static async getPerfInfoByVersion(p1575, p1576) {
    const v1208 = {
      JJFWu: "PageLoadInfo",
      fiOFb: function (p1577, p1578) {
        return p1577 ^ p1578;
      },
      uVabY: function (p1579, p1580) {
        return p1579 + p1580;
      },
      auobm: function (p1581, p1582) {
        return p1581 + p1582;
      },
      XFYaW: function (p1583, p1584) {
        return p1583 + p1584;
      },
      ShLPl: " GROUP BY projectVersion order by samplingPv desc limit 10"
    };
    let v1209 = vRequire7.setTableName(v1208.JJFWu, p1576, p1575);
    const v1210 = vRequire3.addDays(v1208.fiOFb(754623, 754623) - p1576);
    const v1211 = v1210 + " 00:00:00";
    const v1212 = v1208.uVabY(v1210, " 23:59:59");
    const v1213 = " and happenDate>='" + v1211 + "' and happenDate<='" + v1212 + "' ";
    let v1214 = v1208.auobm(v1208.XFYaW("select projectVersion, avg(dns) as dns, avg(tcp) as tcp, avg(`ssl`) as sl, avg(response) as response, avg(conTrans) as conTrans, avg(domAnalysis) as domAnalysis, avg(resourceLoaded) as resourceLoaded, avg(firstByte) as firstByte, avg(domReady) as domReady, avg(pageCompleteLoaded) as pageCompleteLoaded, count(simpleUrl) as samplingPv from ", v1209) + (" where 1=1 " + v1213 + " "), v1208.ShLPl);
    return await v1124.query(v1214, {
      type: v1124.QueryTypes.SELECT
    });
  }
  static async ["getPerfInfoByNetWork"](p1585, p1586) {
    const v1215 = {
      pZdxo: "PageLoadInfo",
      viTjW: function (p1587, p1588) {
        return p1587 + p1588;
      },
      kOMHE: " 00:00:00"
    };
    let v1216 = vRequire7.setTableName(v1215.pZdxo, p1586, p1585);
    const v1217 = vRequire3.addDays(0 - p1586);
    const v1218 = v1215.viTjW(v1217, v1215.kOMHE);
    const v1219 = v1215.viTjW(v1217, " 23:59:59");
    const v1220 = " and happenDate>='" + v1218 + "' and happenDate<='" + v1219 + "' ";
    let v1221 = "select effectiveType, avg(dns) as dns, avg(tcp) as tcp, avg(`ssl`) as sl, avg(response) as response, avg(conTrans) as conTrans, avg(domAnalysis) as domAnalysis, avg(resourceLoaded) as resourceLoaded, avg(firstByte) as firstByte, avg(domReady) as domReady, avg(pageCompleteLoaded) as pageCompleteLoaded, count(simpleUrl) as samplingPv from " + v1216 + " as p where 1=1 " + v1220 + " GROUP BY effectiveType order by samplingPv desc limit 10";
    return await v1124.query(v1221, {
      type: v1124.QueryTypes.SELECT
    });
  }
  static async ["getPerfInfoByOs"](p1589, p1590) {
    const v1222 = {
      aNSDZ: function (p1591, p1592) {
        return p1591 - p1592;
      },
      gAvEa: function (p1593, p1594) {
        return p1593 ^ p1594;
      },
      rfzWM: function (p1595, p1596) {
        return p1595 + p1596;
      },
      HuJYn: " 23:59:59"
    };
    let v1223 = vRequire7.setTableName("PageLoadInfo", p1590, p1589);
    const v1224 = vRequire3.addDays(v1222.aNSDZ(v1222.gAvEa(122462, 122462), p1590));
    const v1225 = v1222.rfzWM(v1224, " 00:00:00");
    const v1226 = v1222.rfzWM(v1224, v1222.HuJYn);
    const v1227 = " and happenDate>='" + v1225 + "' and happenDate<='" + v1226 + "' ";
    let v1228 = "select os, avg(dns) as dns, avg(tcp) as tcp, avg(`ssl`) as sl, avg(response) as response, avg(conTrans) as conTrans, avg(domAnalysis) as domAnalysis, avg(resourceLoaded) as resourceLoaded, avg(firstByte) as firstByte, avg(domReady) as domReady, avg(pageCompleteLoaded) as pageCompleteLoaded, count(simpleUrl) as samplingPv from " + v1223 + " as p where 1=1 " + v1227 + " GROUP BY os order by samplingPv desc limit 10";
    return await v1124.query(v1228, {
      type: v1124.QueryTypes.SELECT
    });
  }
  static async getPageLoadTimeByCustomerKey(p1597, p1598, p1599) {
    const v1229 = {
      gNsbY: "PageLoadInfo",
      rhQdG: function (p1600, p1601) {
        return p1600 ^ p1601;
      }
    };
    const {
      webMonitorId: _0x55d3af,
      timeScope: _0x55a275
    } = p1599;
    let v1230 = vRequire7.setTableName(v1229.gNsbY, v1229.rhQdG(963869, 963869), _0x55d3af);
    let v1231 = "select CAST(simpleUrl AS char) as simpleUrl, avg(pageCompleteLoaded) as loadPage, count(simpleUrl) as urlCount from " + v1230 + " as p where " + p1598 + " and " + p1597 + " GROUP BY simpleUrl ORDER BY loadPage desc limit 10";
    return await v1124.query(v1231, {
      type: v1124.QueryTypes.SELECT
    });
  }
  static async getPerfInfoByCustomerKey(p1602, p1603) {
    const v1232 = {
      mFNSc: function (p1604, p1605) {
        return p1604 ^ p1605;
      }
    };
    let v1233 = vRequire7.setTableName("PageLoadInfo", v1232.mFNSc(463887, 463887), p1603);
    let v1234 = "select * from " + v1233 + " where " + p1602 + " order by happenDate desc limit 1";
    return await v1124.query(v1234, {
      type: v1124.QueryTypes.SELECT
    });
  }
  static async getLogCountForDay(p1606, p1607) {
    const v1235 = {
      MjDCn: "PageLoadInfo"
    };
    const v1236 = vRequire3.addDays(p1607);
    const v1237 = v1236 + " 00:00:00";
    const v1238 = v1236 + " 23:59:59";
    const v1239 = vRequire7.setTableName(v1235.MjDCn, p1607, p1606);
    let v1240 = "select count(dataId) as count from " + v1239 + " where happenDate>='" + v1237 + "' and happenDate<='" + v1238 + "'";
    return await v1124.query(v1240, {
      type: v1124.QueryTypes.SELECT
    });
  }
  static async getPerfInfoByUser(p1608, p1609, p1610) {
    const v1241 = {
      KvAFh: function (p1611, p1612) {
        return p1611 + p1612;
      },
      Hlksi: "and"
    };
    const {
      webMonitorId: _0x5f5ba7
    } = p1610;
    let v1242 = vRequire7.setTableName("PageLoadInfo", 0, _0x5f5ba7);
    let v1243 = v1241.KvAFh(v1241.KvAFh("select * from " + v1242 + " where ", p1609) + v1241.Hlksi, p1608);
    return await v1124.query(v1243, {
      type: v1124.QueryTypes.SELECT
    });
  }
}
function f28(p1613, p1614) {
  const vF27 = f27();
  f28 = function (p1615, p1616) {
    p1615 = p1615 - 0;
    let v1244 = vF27[p1615];
    if (f28.yoPRiC === undefined) {
      function f29(p1617) {
        const v1245 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let v1246 = "";
        let v1247 = "";
        for (let v1248 = 0, v1249, v1250, v1251 = 0; v1250 = p1617.charAt(v1251++); ~v1250 && (v1249 = v1248 % 4 ? v1249 * 64 + v1250 : v1250, v1248++ % 4) ? v1246 += String.fromCharCode(v1249 >> (v1248 * -2 & 6) & 255) : 0) {
          v1250 = v1245.indexOf(v1250);
        }
        for (let v1252 = 0, v1253 = v1246.length; v1252 < v1253; v1252++) {
          v1247 += "%" + ("00" + v1246.charCodeAt(v1252).toString(16)).slice(-2);
        }
        return decodeURIComponent(v1247);
      }
      const vF4 = function (p1618, p1619) {
        let v1254 = [];
        let v1255 = 0;
        let v1256;
        let v1257 = "";
        p1618 = f29(p1618);
        let v1258;
        for (v1258 = 0; v1258 < 256; v1258++) {
          v1254[v1258] = v1258;
        }
        for (v1258 = 0; v1258 < 256; v1258++) {
          v1255 = (v1255 + v1254[v1258] + p1619.charCodeAt(v1258 % p1619.length)) % 256;
          v1256 = v1254[v1258];
          v1254[v1258] = v1254[v1255];
          v1254[v1255] = v1256;
        }
        v1258 = 0;
        v1255 = 0;
        for (let v1259 = 0; v1259 < p1618.length; v1259++) {
          v1258 = (v1258 + 1) % 256;
          v1255 = (v1255 + v1254[v1258]) % 256;
          v1256 = v1254[v1258];
          v1254[v1258] = v1254[v1255];
          v1254[v1255] = v1256;
          v1257 += String.fromCharCode(p1618.charCodeAt(v1259) ^ v1254[(v1254[v1258] + v1254[v1255]) % 256]);
        }
        return v1257;
      };
      f28.pQkTKA = vF4;
      p1613 = arguments;
      f28.yoPRiC = true;
    }
    const v1260 = vF27[0];
    const v1261 = p1615 + v1260;
    const v1262 = p1613[v1261];
    if (!v1262) {
      if (f28.Sqrnoo === undefined) {
        f28.Sqrnoo = true;
      }
      v1244 = f28.pQkTKA(v1244, p1616);
      p1613[v1261] = v1244;
    } else {
      v1244 = v1262;
    }
    return v1244;
  };
  return f28(p1613, p1614);
}
undefined;
const v1264 = new vRequire2("../schema/localLog");
v1264.createTable();
class C22 {
  static async createLocalLog(p1629) {
    return await v1264.create(p1629);
  }
  static async ["createLocalLogs"](p1630) {
    const v1265 = {
      itymv: function (p1631, p1632) {
        return p1631 === p1632;
      },
      fNtrC: function (p1633, p1634) {
        return p1633 + p1634;
      },
      EmnHa: function (p1635, p1636) {
        return p1635 + p1636;
      },
      jKbRT: "INSERT INTO ",
      yUPBe: ") VALUES "
    };
    if (v1265.itymv(p1630.length, 0)) {
      return;
    }
    const v1266 = "LocalLog";
    const {
      keys: _0x27be2d,
      valueSql: _0x498cd6
    } = vRequire7.handleStructureSql(v1264.schema.Columns.structure, p1630);
    let v1267 = v1265.fNtrC(v1265.EmnHa(v1265.jKbRT, v1266) + " (" + _0x27be2d + v1265.yUPBe, _0x498cd6);
    return await v1264.execSql(v1267);
  }
  static async updateLocalLog(p1637, p1638, p1639) {
    delete p1639.webMonitorId;
    delete p1639.userId;
    await v1264.update({
      ...p1639
    }, {
      where: {
        webMonitorId: p1637,
        userId: p1638
      },
      fields: Object.keys(p1639)
    });
    return true;
  }
  static async deleteLocalLog(p1640) {
    await v1264.destroy({
      where: {
        userId: p1640
      }
    });
    return true;
  }
  static async ["getLocalLog"](p1641, p1642) {
    return await v1264.findAll({
      where: {
        webMonitorId: p1641,
        userId: p1642
      }
    });
  }
  static async getLocalLogByUser(p1643, p1644, p1645, p1646) {
    const v1268 = {
      QZxDU: "LocalLog"
    };
    const {
      webMonitorId: _0x53134b
    } = p1646;
    let v1269 = v1268.QZxDU;
    let v1270 = " select * from " + v1269 + " where webMonitorId = '" + _0x53134b + "' and " + p1644 + " and " + p1643 + " and " + p1645 + " ";
    return await v1264.query(v1270, {
      type: v1264.QueryTypes.SELECT
    });
  }
  static async getLocalLogListForOneHour(p1647, p1648) {
    const v1271 = {
      QvJKa: function (p1649, p1650) {
        return p1649 - p1650;
      },
      nyvHm: function (p1651, p1652) {
        return p1651 ^ p1652;
      },
      ThUxV: "yyyy-MM-dd hh:mm:ss"
    };
    const v1272 = "LocalLog";
    const v1273 = new Date(v1271.QvJKa(new Date().getTime(), v1271.nyvHm(658483, 658447) * 1000 * 60)).Format(v1271.ThUxV);
    const v1274 = " select * from " + v1272 + " where webMonitorId = '" + p1647 + "' and userId = '" + p1648 + "' and happenDate > '" + v1273 + "' ";
    return await v1264.query(v1274, {
      type: v1264.QueryTypes.SELECT
    });
  }
}
const v1275 = new vRequire2("../schema/deviceInfoCountByDay");
class C23 {
  static async ["createDeviceInfoCountByDay"](p1653) {
    const {
      webMonitorId: _0x225627
    } = p1653;
    return await v1275.create({
      ...p1653
    }, _0x225627 + "DeviceInfoCountByDay");
  }
  static async ["updateDeviceInfoCountByDay"](p1654, p1655) {
    const {
      webMonitorId: _0x4e7fcc
    } = p1655;
    await v1275.update({
      ...p1655
    }, {
      where: {
        dataId: p1654
      },
      fields: Object.keys(p1655)
    }, _0x4e7fcc + "DeviceInfoCountByDay");
    return true;
  }
  static async getDeviceInfoCountByDayList() {
    return await v1275.findAndCountAll();
  }
  static async ["getDeviceInfoCountByDayDetail"](p1656) {
    return await v1275.findOne({
      where: {
        dataId: p1656
      }
    });
  }
  static async getDeviceCountByDay(p1657, p1658, p1659) {
    const v1276 = {
      PBFrd: " 00:00:00"
    };
    const v1277 = vRequire3.addDays(p1658);
    const v1278 = v1277 + v1276.PBFrd;
    const v1279 = v1277 + " 23:59:59";
    const v1280 = p1657 + "DeviceInfoCountByHour";
    let v1281 = "SELECT showName, SUM(hourCount) as count from " + v1280 + " where happenDate>='" + v1278 + "' and happenDate<='" + v1279 + "' and uploadType='" + p1659 + "' group by showName";
    return await v1275.query(v1281, {
      type: v1275.QueryTypes.SELECT
    });
  }
  static async getDeviceInfoCountByDayDetailByDayName(p1660, p1661, p1662, p1663) {
    const v1282 = {
      NOoyX: "DeviceInfoCountByDay",
      XGaCH: function (p1664, p1665) {
        return p1664 + p1665;
      },
      hmYdn: function (p1666, p1667) {
        return p1666 + p1667;
      },
      qqARi: "select dataId from ",
      MsmGV: "' and uploadType='"
    };
    const v1283 = p1661 + v1282.NOoyX;
    let v1284 = v1282.XGaCH(v1282.XGaCH(v1282.XGaCH(v1282.hmYdn(v1282.qqARi + v1283 + " WHERE dayName='", p1660), v1282.MsmGV) + p1662, "' and showName='") + p1663, "'");
    return await v1275.query(v1284, {
      type: v1275.QueryTypes.SELECT
    });
  }
  static async getDeviceInfoCountByDayDetailForLocationPointByDayName(p1668, p1669) {
    const v1285 = {
      SwcPz: function (p1670, p1671) {
        return p1670 + p1671;
      },
      cyckz: "select dataId from ",
      UqGZU: "' and uploadType='"
    };
    const v1286 = webMonitorId + "DeviceInfoCountByDay";
    let v1287 = v1285.SwcPz(v1285.cyckz + v1286 + " WHERE dayName='" + p1668, v1285.UqGZU) + p1669 + "'";
    return await v1275.query(v1287, {
      type: v1275.QueryTypes.SELECT
    });
  }
  static async deleteDeviceInfoCountByDay(p1672) {
    await v1275.destroy({
      where: {
        dataId: p1672
      }
    });
    return true;
  }
}
const v1288 = new vRequire2("../schema/pageLoadInfoByMinute");
class C24 {
  static async createPageLoadInfoByMinute(p1673) {
    const v1289 = {
      xpsXA: function (p1674, p1675) {
        return p1674 == p1675;
      },
      ycYvD: function (p1676, p1677) {
        return p1676 + p1677;
      },
      iXara: function (p1678, p1679) {
        return p1678 != p1679;
      },
      CvKLy: function (p1680, p1681) {
        return p1680 + p1681;
      },
      YgfOg: function (p1682, p1683) {
        return p1682 + p1683;
      },
      ROznV: "', "
    };
    let v1290 = "";
    let v1291 = "";
    const v1292 = ["id", "createdAt", "updatedAt", "infoType", "webMonitorId", "projectVersion", "minuteName", "minuteValue"];
    v1292.forEach((p1684, p1685) => {
      if (v1289.xpsXA(p1685, v1292.length - 1)) {
        v1290 += v1289.ycYvD("`" + p1684, "`");
        let v1293 = p1673[p1684];
        if (v1289.iXara(v1293, undefined)) {
          v1291 += v1289.ycYvD("'" + v1293, "'");
        } else {
          v1291 += "DEFAULT";
        }
      } else {
        v1290 += v1289.CvKLy("`" + p1684, "`, ");
        let v1294 = p1673[p1684];
        switch (p1684) {
          case "id":
            v1294 = v1289.YgfOg(new Date().getTime(), vRequire3.getUuid());
            break;
          case "createdAt":
          case "updatedAt":
            v1294 = new Date().Format("yyyy-MM-dd hh:mm:ss");
            break;
          default:
            break;
        }
        if (v1294 != undefined) {
          v1291 += "'" + v1294 + v1289.ROznV;
        } else {
          v1291 += "DEFAULT, ";
        }
      }
    });
    const v1295 = p1673.webMonitorId + "PageLoadInfoByMinute";
    return await v1288.create(p1673, v1295);
  }
  static async getPageLoadOverview(p1686, p1687) {
    const v1296 = {
      fMthB: "PageLoadInfoByMinute"
    };
    const v1297 = p1686 + v1296.fMthB;
    let v1298 = "select infoType, avg(minuteValue) as count, sum(minuteValue) as sumCount from " + v1297 + " where minuteValue>0 group by infoType";
    return await v1288.query(v1298, {
      type: v1288.QueryTypes.SELECT
    });
  }
  static async getPerformanceDataForMinute(p1688, p1689, p1690) {
    const v1299 = {
      uqJVp: function (p1691, p1692) {
        return p1691 + p1692;
      }
    };
    const v1300 = v1299.uqJVp(p1688, "PageLoadInfoByMinute");
    let v1301 = "select minuteName, minuteValue from " + v1300 + " where infoType='" + p1689 + "'";
    return await v1288.query(v1301, {
      type: v1288.QueryTypes.SELECT
    });
  }
  static async getOpenSpeedDataForMinute(p1693, p1694) {
    const v1302 = p1693 + "PageLoadInfoByMinute";
    let v1303 = "select minuteName, minuteValue from " + v1302 + " where and infoType='" + p1694 + "'";
    return await v1288.query(v1303, {
      type: v1288.QueryTypes.SELECT
    });
  }
  static async ["calculateValueByHour"](p1695, p1696) {
    const v1304 = {
      pwksV: "PageLoadInfoByMinute"
    };
    const v1305 = p1695 + v1304.pwksV;
    let v1306 = "select infoType, sum(minuteValue) as sumCount from " + v1305 + " where greaterOrEquals(minuteName,'" + p1696 + ":00') and lessOrEquals(minuteName, '" + p1696 + ":59') group by infoType";
    return await v1288.query(v1306, {
      type: v1288.QueryTypes.SELECT
    });
  }
  static async ["calculateValueByDay"](p1697, p1698) {
    const v1307 = {
      jFjqg: function (p1699, p1700) {
        return p1699 + p1700;
      }
    };
    const v1308 = vRequire3.addDays(p1698);
    const v1309 = v1307.jFjqg(v1308, " 00:00:00");
    const v1310 = v1308 + " 23:59:59";
    const v1311 = p1697 + "PageLoadInfoByMinute";
    let v1312 = "select infoType, sum(minuteValue) as sumCount from " + v1311 + " where happenDate>='" + v1309 + "' and happenDate<='" + v1310 + "' group by infoType";
    return await v1288.query(v1312, {
      type: v1288.QueryTypes.SELECT
    });
  }
}
const v1313 = new vRequire2("../schema/perfInfoByDay");
v1313.createTable();
class C25 {
  static async createPerfInfoByDay(p1701) {
    return await v1313.create({
      ...p1701
    });
  }
  static async ["updatePerfInfoByDay"](p1702, p1703) {
    await v1313.update({
      ...p1703
    }, {
      where: {
        dataId: p1702
      },
      fields: Object.keys(p1703)
    });
    return true;
  }
  static async getPerfInfoByDayList() {
    return await v1313.findAndCountAll();
  }
  static async getPerfInfoByDayDetail(p1704) {
    return await v1313.findOne({
      where: {
        dataId: p1704
      }
    });
  }
  static async getPerfInfoCountByDay(p1705, p1706, p1707) {
    const v1314 = {
      SGBqW: "' and infoType='"
    };
    let v1315 = "SELECT showName, dayCount as count from PerfInfoByDay where dayName='" + p1706 + "' and webMonitorId='" + p1705 + v1314.SGBqW + p1707 + "'";
    return await v1313.query(v1315, {
      type: v1313.QueryTypes.SELECT
    });
  }
}
const v1316 = new vRequire2("../schema/message");
v1316.createTable();
class C26 {
  static async createMessage(p1713) {
    return await v1316.create({
      ...p1713
    });
  }
  static async ["deleteMessage"](p1714) {
    await v1316.destroy({
      where: {
        dataId: p1714
      }
    });
    return true;
  }
  static async ["getAllMessage"]() {
    let v1317 = "select * from Message";
    return await v1316.query(v1317, {
      type: v1316.QueryTypes.SELECT
    });
  }
  static async getTotalCountForType(p1715) {
    let v1318 = "select count(dataId) as count from Message where type='" + p1715 + "'";
    return await v1316.query(v1318, {
      type: v1316.QueryTypes.SELECT
    });
  }
  static async ["getMessageByType"](p1716) {
    const v1319 = {
      ouOdA: function (p1717, p1718) {
        return p1717 * p1718;
      }
    };
    const {
      messageType: _0x11c481,
      page: _0x339e6f,
      pageSize: _0x51c619,
      userId: _0x29e133
    } = p1716;
    const v1320 = v1319.ouOdA(_0x339e6f, _0x51c619);
    const v1321 = _0x29e133 ? " and userId='" + _0x29e133 + "' " : "";
    let v1322 = "select * from Message where type='" + _0x11c481 + "' " + v1321 + " order by createdAt desc limit " + v1320 + "," + _0x51c619;
    return await v1316.query(v1322, {
      type: v1316.QueryTypes.SELECT
    });
  }
  static async getUnReadMessageCountByType(p1719) {
    const {
      userId: _0xf79ad2,
      messageType: _0x50ff77
    } = p1719;
    let v1323 = "select isRead, count(isRead) as count from Message where  type='" + _0x50ff77 + "' and userId='" + _0xf79ad2 + "' GROUP BY isRead";
    return await v1316.query(v1323, {
      type: v1316.QueryTypes.SELECT
    });
  }
  static async readAll(p1720, p1721) {
    const v1324 = {
      isRead: 1
    };
    await v1316.update({
      ...v1324
    }, {
      where: {
        userId: p1720,
        type: p1721
      },
      fields: Object.keys(v1324)
    });
    return true;
  }
  static async ["getMessageDetail"](p1722) {
    return await v1316.findOne({
      where: {
        dataId: p1722
      }
    });
  }
  static async updateMessage(p1723, p1724) {
    await v1316.update({
      ...p1724
    }, {
      where: {
        dataId: p1723
      },
      fields: Object.keys(p1724)
    });
    return true;
  }
}
const v1325 = new vRequire2();
class C27 {
  static async getTableList(p1725, p1726) {
    let v1326 = "\n    SELECT \n      table_name as tableName\n    FROM\n      information_schema.tables \n    WHERE table_schema = '" + p1725 + "' \n      AND table_name like 'webfunny%' \n      AND table_name like '%" + p1726 + "'\n    ";
    return await v1325.query(v1326, {
      type: v1325.QueryTypes.SELECT
    });
  }
  static async dropTable(p1727) {
    let v1327 = "drop table " + p1727;
    return await v1325.query(v1327, {
      type: v1325.QueryTypes.SELECT
    });
  }
  static async createLogTable(p1728, p1729) {
    vRequire8.forEach(p1730 => {
      const v1328 = new vRequire2(p1730);
      v1328.createTable({
        tableName: "" + p1728 + v1328.schema.Columns.tableName + p1729
      }).catch(p1731 => {
        vRequire6.printError("日志表创建报错（" + p1730 + "）：", p1731);
      });
    });
  }
  static async createTTLForCreatedAt(p1732, p1733 = 8) {
    const v1329 = {
      ogCMM: function (p1734, p1735) {
        return p1734 === p1735;
      },
      nZwYY: function (p1736, p1737) {
        return p1736 ^ p1737;
      },
      TOMmH: function (p1738, p1739) {
        return p1738 !== p1739;
      }
    };
    const v1330 = ["../schema/jsErrorHandleList", "../schema/httpErrorHandleList"];
    if (v1329.TOMmH(typeof p1733, "number") || p1733 < 0) {
      return;
    }
    if (p1733 === 0) {
      vRequire8.forEach(p1740 => {
        if (v1329.ogCMM(v1330.indexOf(p1740), -v1329.nZwYY(797228, 797229))) {
          const v1331 = new vRequire2(p1740);
          const v1332 = "" + p1732 + v1331.schema.Columns.tableName;
          const v1333 = "ALTER TABLE " + v1332 + " REMOVE TTL;";
          v1331.execSql(v1333);
        }
      });
    } else {
      vRequire8.forEach(p1741 => {
        if (v1330.indexOf(p1741) === -1) {
          const v1334 = new vRequire2(p1741);
          const v1335 = "" + p1732 + v1334.schema.Columns.tableName;
          const v1336 = "alter table " + v1335 + " modify TTL createdAt + INTERVAL " + p1733 + " day;";
          v1334.execSql(v1336);
        }
      });
    }
  }
  static async createInfoTable(p1742) {}
  static async getTableFields(p1743) {
    let v1337 = "select * from information_schema.columns where table_name = '" + p1743 + "'";
    return await v1325.query(v1337, {
      type: v1325.QueryTypes.SELECT
    });
  }
  static async updateTableBySql(p1744) {
    return await v1325.execSql(p1744, {
      type: v1325.QueryTypes.SELECT
    });
  }
}
const v1338 = new vRequire2("../schema/customerPV");
class C28 {
  static async createCustomerPV(p1745) {
    const v1339 = {
      bvCEi: function (p1746, p1747) {
        return p1746 == p1747;
      },
      aiVMp: "DEFAULT",
      kdkbi: function (p1748, p1749) {
        return p1748 + p1749;
      },
      BnRSL: "createdAt",
      vfAaJ: "yyyy-MM-dd hh:mm:ss",
      MLLYn: function (p1750, p1751) {
        return p1750 ^ p1751;
      },
      kVqfw: "https?:\\/\\/(\\w+[.])+\\w+\\/",
      VSVvV: function (p1752, p1753) {
        return p1752 === p1753;
      }
    };
    const v1340 = p1745.referrer;
    if (v1340) {
      const v1341 = new RegExp(v1339.kVqfw, "");
      const v1342 = v1340.match(v1341);
      if (v1342 && v1342.length) {
        const v1343 = v1342[0].replace(new RegExp("http:\\/\\/", "g"), "").replace(new RegExp("https:\\/\\/", "g"), "").replace(new RegExp("\\/", "g"), "");
        p1745.referrer = v1343;
      }
    }
    const v1344 = p1745.city;
    if (!v1344 || v1339.VSVvV(v1344, "0")) {
      p1745.city = p1745.province || p1745.country;
    }
    let v1345 = "";
    let v1346 = "";
    const v1347 = ["uploadType", "happenTime", "happenDate", "happenHour", "happenMinute", "webMonitorId", "sessionId", "customerKey", "simpleUrl", "completeUrl", "userId", "firstUserParam", "secondUserParam", "createdAt", "updatedAt", "id", "projectVersion", "pageKey", "deviceName", "deviceSize", "os", "browserName", "browserVersion", "browserInfo", "monitorIp", "country", "province", "city", "loadType", "loadTime", "newStatus", "referrer", "customerKeyCreatedDate"];
    v1347.forEach((p1754, p1755) => {
      if (v1339.bvCEi(p1755, v1347.length - 1)) {
        v1345 += "`" + p1754 + "`";
        let v1348 = p1745[p1754];
        if (v1348 != undefined) {
          v1346 += "'" + v1348 + "'";
        } else {
          v1346 += v1339.aiVMp;
        }
      } else {
        v1345 += "`" + p1754 + "`, ";
        let v1349 = p1745[p1754];
        switch (p1754) {
          case "id":
            v1349 = v1339.kdkbi(new Date().getTime(), vRequire3.getUuid());
            break;
          case v1339.BnRSL:
          case "updatedAt":
            v1349 = new Date().Format(v1339.vfAaJ);
            break;
          case "happenHour":
            v1349 = p1745.happenDate ? p1745.happenDate.substring(v1339.MLLYn(542520, 542515), 13) : new Date().Format("hh");
            break;
          case "happenMinute":
            v1349 = p1745.happenDate ? p1745.happenDate.substring(14, 16) : new Date().Format("mm");
            break;
          default:
            break;
        }
        if (v1349 != undefined) {
          v1346 += v1339.kdkbi("'", v1349) + "', ";
        } else {
          v1346 += "DEFAULT, ";
        }
      }
    });
    const v1350 = p1745.webMonitorId + "CustomerPV";
    return await v1338.create(p1745, v1350);
  }
  static async createCustomerPVs(p1756) {
    const v1351 = {
      kYEdW: function (p1757, p1758) {
        return p1757 === p1758;
      },
      VBGwo: function (p1759, p1760) {
        return p1759 + p1760;
      },
      kDurp: function (p1761, p1762) {
        return p1761 + p1762;
      }
    };
    if (v1351.kYEdW(p1756.length, 0)) {
      return;
    }
    const v1352 = p1756[0];
    const v1353 = v1352.webMonitorId;
    const v1354 = v1351.VBGwo(v1353, "CustomerPV");
    const {
      keys: _0x521093,
      valueSql: _0x294e84
    } = vRequire7.handleStructureSql(v1338.schema.Columns.structure, p1756);
    let v1355 = v1351.kDurp(v1351.kDurp("INSERT INTO " + v1354 + " (", _0x521093), ") VALUES ") + _0x294e84;
    return await v1338.execSql(v1355);
  }
  static async ["getPvInfoByCustomerKey"](p1763, p1764, p1765, p1766, p1767) {
    const v1356 = "SELECT * FROM " + vRequire7.setTableName("CustomerPV", p1764, p1765) + " WHERE happenDate>='" + p1766 + "' and happenDate<='" + p1767 + "' and " + p1763 + "  and monitorIp!='' limit 1";
    return await v1338.query(v1356, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getPVFlowDataForDay(p1768, p1769, p1770, p1771) {
    const v1357 = {
      anyFV: "InfoCountByDay",
      UACkV: function (p1772, p1773) {
        return p1772 + p1773;
      },
      TYYTJ: function (p1774, p1775) {
        return p1774 + p1775;
      },
      FrhpQ: "select dayName, dayCount from "
    };
    const v1358 = " and dayName >= '" + p1769 + "' and dayName <= '" + p1770 + "' ";
    const v1359 = p1768 + v1357.anyFV;
    let v1360 = v1357.UACkV(v1357.TYYTJ(v1357.UACkV(v1357.FrhpQ, v1359) + " where 1=1 " + v1358 + " and uploadType='", UPLOAD_TYPE.PV_COUNT_DAY), p1771) + "' order by dayName desc";
    return await v1338.query(v1360, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getUVFlowDataForDay(p1776, p1777, p1778, p1779) {
    const v1361 = {
      ipwAm: function (p1780, p1781) {
        return p1780 + p1781;
      },
      GXDdk: "InfoCountByDay",
      jKidl: "select dayName, dayCount from ",
      RXuFn: " and uploadType='",
      jSKZA: "' order by dayName desc"
    };
    const v1362 = " and dayName >= '" + p1777 + "' and dayName <= '" + p1778 + "' ";
    const v1363 = v1361.ipwAm(p1776, v1361.GXDdk);
    let v1364 = v1361.ipwAm(v1361.jKidl + v1363 + " where 1=1 " + v1362 + v1361.RXuFn + UPLOAD_TYPE.UV_COUNT_DAY, p1779) + v1361.jSKZA;
    return await v1338.query(v1364, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async uvCountForMonth(p1782, p1783, p1784) {
    const v1365 = {
      LzfLm: function (p1785, p1786) {
        return p1785 + p1786;
      },
      awVWA: function (p1787, p1788) {
        return p1787 + p1788;
      },
      vSPeQ: "select dayName as day, dayCount as count from "
    };
    const v1366 = p1782 + "InfoCountByDay";
    let v1367 = v1365.LzfLm(v1365.awVWA(v1365.vSPeQ, v1366) + " where 1=1  and dayName>='" + p1784 + "' and uploadType='", p1783) + "' order by dayName";
    return await v1338.query(v1367, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async ["uvCountForMonthByStatus"](p1789, p1790, p1791) {
    const v1368 = {
      fUYFa: function (p1792, p1793) {
        return p1792 + p1793;
      },
      vamDs: " 00:00:00"
    };
    const v1369 = await C9.getUserIdType(p1789);
    const v1370 = p1789 + "CustomerPV";
    const v1371 = v1368.fUYFa(p1790, v1368.vamDs);
    const v1372 = p1791 ? " and " + p1791 + " " : "";
    const v1373 = " SELECT DATE_FORMAT(happenDate,'%Y-%m-%d') as day, count(DISTINCT " + v1369 + ") as count from " + v1370 + " where happenDate>='" + v1371 + "' " + v1372 + " group by day ";
    return await v1338.query(v1373, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getNewFlowDataForDay(p1794, p1795, p1796, p1797) {
    const v1374 = {
      FFAei: "InfoCountByDay",
      jVUHG: function (p1798, p1799) {
        return p1798 + p1799;
      },
      uqWGA: " and uploadType='"
    };
    const v1375 = " and dayName >= '" + p1795 + "' and dayName <= '" + p1796 + "' ";
    const v1376 = p1794 + v1374.FFAei;
    let v1377 = v1374.jVUHG("select dayName, dayCount from " + v1376 + " where 1=1 " + v1375 + v1374.uqWGA + UPLOAD_TYPE.NEW_COUNT_DAY + p1797, "' order by dayName desc");
    return await v1338.query(v1377, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async ["getIpFlowDataForDay"](p1800, p1801, p1802, p1803) {
    const v1378 = {
      hATeR: function (p1804, p1805) {
        return p1804 + p1805;
      },
      HoMqa: " and uploadType='",
      Eqwii: "' order by dayName desc"
    };
    const v1379 = " and dayName >= '" + p1801 + "' and dayName <= '" + p1802 + "' ";
    const v1380 = p1800 + "InfoCountByDay";
    let v1381 = v1378.hATeR("select dayName, dayCount from ", v1380) + " where 1=1 " + v1379 + v1378.HoMqa + UPLOAD_TYPE.IP_COUNT_DAY + p1803 + v1378.Eqwii;
    return await v1338.query(v1381, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getCusInfoCountForDay(p1806, p1807, p1808) {
    const v1382 = {
      QSNCg: function (p1809, p1810) {
        return p1809 + p1810;
      },
      ZCtjY: " 00:00:00",
      PXhuC: function (p1811, p1812) {
        return p1811 + p1812;
      }
    };
    const v1383 = await C9.getUserIdType(p1806);
    const v1384 = vRequire3.addDays(p1807);
    const v1385 = v1382.QSNCg(v1384, v1382.ZCtjY);
    const v1386 = v1384 + " 23:59:59";
    const v1387 = v1382.PXhuC(p1806, "CustomerPV");
    let v1388 = "";
    switch (p1808) {
      case UPLOAD_TYPE.UV_COUNT_DAY:
        v1388 = "select count(distinct " + v1383 + ") as count from " + v1387 + " where happenDate>='" + v1385 + "' and happenDate<='" + v1386 + "'";
        break;
      case UPLOAD_TYPE.PV_COUNT_DAY:
        v1388 = "select count(dataId) as count from " + v1387 + " where happenDate>='" + v1385 + "' and happenDate<='" + v1386 + "'";
        break;
      case UPLOAD_TYPE.NEW_COUNT_DAY:
        v1388 = "select count(distinct " + v1383 + ") as count from " + v1387 + " where happenDate>='" + v1385 + "' and happenDate<='" + v1386 + "' and newStatus='n_uv'";
        break;
      case UPLOAD_TYPE.IP_COUNT_DAY:
        v1388 = "select count(distinct monitorIp) as count from " + v1387 + " where happenDate>='" + v1385 + "' and happenDate<='" + v1386 + "'";
        break;
    }
    return await v1338.query(v1388, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getPVCountForDay(p1813, p1814) {
    const v1389 = {
      xUbVg: function (p1815, p1816, p1817) {
        return p1815(p1816, p1817);
      },
      vzLhZ: function (p1818, p1819) {
        return p1818 ^ p1819;
      }
    };
    const v1390 = vRequire3.addDays(p1814);
    const v1391 = v1390 + " 00:00:00";
    const v1392 = v1390 + " 23:59:59";
    let v1393 = "select count(dataId) as count from " + vRequire7.setTableName("CustomerPV", p1814, p1813) + " where happenDate>='" + v1391 + "' and happenDate<='" + v1392 + "'";
    let v1394 = await v1338.query(v1393, {
      type: v1338.QueryTypes.SELECT
    });
    const v1395 = v1394[0] && v1394[0].count ? v1389.xUbVg(parseInt, v1394[0].count, v1389.vzLhZ(900540, 900534)) : 0;
    return [{
      count: v1395
    }];
  }
  static async getUVCountForDay(p1820, p1821) {
    const v1396 = {
      FjUrm: " 00:00:00",
      qqgMR: function (p1822, p1823) {
        return p1822 ^ p1823;
      },
      LRilj: function (p1824, p1825, p1826) {
        return p1824(p1825, p1826);
      }
    };
    const v1397 = await C9.getUserIdType(p1820);
    const v1398 = vRequire3.addDays(p1821);
    const v1399 = v1398 + v1396.FjUrm;
    const v1400 = v1398 + " 23:59:59";
    let v1401 = "select count(distinct " + v1397 + ") as count from " + vRequire7.setTableName("CustomerPV", p1821, p1820) + " where happenDate>='" + v1399 + "' and happenDate<='" + v1400 + "'";
    let v1402 = await v1338.query(v1401, {
      type: v1338.QueryTypes.SELECT
    });
    const v1403 = v1402[0] && v1402[v1396.qqgMR(921174, 921174)].count ? v1396.LRilj(parseInt, v1402[v1396.qqgMR(378869, 378869)].count, 10) : 0;
    return [{
      count: v1403
    }];
  }
  static async getNewCountForDay(p1827, p1828) {
    const v1404 = {
      FxpzN: function (p1829, p1830) {
        return p1829 + p1830;
      },
      SCGHj: " 23:59:59",
      nBalU: function (p1831, p1832) {
        return p1831 ^ p1832;
      }
    };
    const v1405 = await C9.getUserIdType(p1827);
    const v1406 = vRequire3.addDays(p1828);
    const v1407 = v1404.FxpzN(v1406, " 00:00:00");
    const v1408 = v1404.FxpzN(v1406, v1404.SCGHj);
    let v1409 = "select count(distinct " + v1405 + ") as count from " + vRequire7.setTableName("CustomerPV", p1828, p1827) + " where happenDate>='" + v1407 + "' and happenDate<='" + v1408 + "' and newStatus='n_uv'";
    let v1410 = await v1338.query(v1409, {
      type: v1338.QueryTypes.SELECT
    });
    const v1411 = v1410[0] && v1410[v1404.nBalU(367678, 367678)].count ? parseInt(v1410[v1404.nBalU(869641, 869641)].count, 10) : 0;
    return [{
      count: v1411
    }];
  }
  static async getIpCountForDay(p1833, p1834) {
    const v1412 = {
      EtQWN: function (p1835, p1836) {
        return p1835 + p1836;
      },
      BFtix: function (p1837, p1838, p1839) {
        return p1837(p1838, p1839);
      },
      PHAOd: function (p1840, p1841) {
        return p1840 ^ p1841;
      },
      DnYOS: function (p1842, p1843) {
        return p1842 ^ p1843;
      }
    };
    const v1413 = vRequire3.addDays(p1834);
    const v1414 = v1412.EtQWN(v1413, " 00:00:00");
    const v1415 = v1413 + " 23:59:59";
    let v1416 = "select count(distinct monitorIp) as count from " + vRequire7.setTableName("CustomerPV", p1834, p1833) + " where happenDate>='" + v1414 + "' and happenDate<='" + v1415 + "'";
    let v1417 = await v1338.query(v1416, {
      type: v1338.QueryTypes.SELECT
    });
    const v1418 = v1417[0] && v1417[0].count ? v1412.BFtix(parseInt, v1417[v1412.PHAOd(686862, 686862)].count, v1412.DnYOS(564473, 564467)) : v1412.DnYOS(417104, 417104);
    return [{
      count: v1418
    }];
  }
  static async getCustomerPvPcCount(p1844) {
    const v1419 = {
      SwVJC: function (p1845, p1846) {
        return p1845 + p1846;
      },
      aHgDT: function (p1847, p1848) {
        return p1847 + p1848;
      },
      obvwX: "SELECT COUNT(DISTINCT pageKey) as count FROM ",
      kGSyu: "CustomerPV",
      HyKNK: function (p1849, p1850) {
        return p1849 ^ p1850;
      },
      LcqTB: " WHERE happenDate > '"
    };
    return await v1338.query(v1419.SwVJC(v1419.aHgDT(v1419.obvwX + vRequire7.setTableName(v1419.kGSyu, v1419.HyKNK(293261, 293261), p1844.webMonitorId), v1419.LcqTB), p1844.day) + "' and os LIKE 'web%'", {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async ["getCustomerPvIosCount"](p1851) {
    const v1420 = {
      vOAhj: function (p1852, p1853) {
        return p1852 + p1853;
      }
    };
    return await v1338.query(v1420.vOAhj("SELECT COUNT(DISTINCT pageKey) as count FROM " + vRequire7.setTableName("CustomerPV", 0, p1851.webMonitorId), " WHERE happenDate > '") + p1851.day + "' and os LIKE 'ios%'", {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getCustomerPvAndroidCount(p1854) {
    const v1421 = {
      sONUV: function (p1855, p1856) {
        return p1855 + p1856;
      },
      UmvEk: function (p1857, p1858) {
        return p1857 + p1858;
      },
      sQYya: "CustomerPV",
      fjIBJ: function (p1859, p1860) {
        return p1859 ^ p1860;
      },
      gmSGB: " WHERE happenDate > '",
      noXUJ: "' and os LIKE 'android%'"
    };
    return await v1338.query(v1421.sONUV(v1421.UmvEk("SELECT COUNT(DISTINCT pageKey) as count FROM " + vRequire7.setTableName(v1421.sQYya, v1421.fjIBJ(167144, 167144), p1854.webMonitorId), v1421.gmSGB) + p1854.day, v1421.noXUJ), {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getBehaviorsByUser(p1861, p1862, p1863) {
    const v1422 = {
      FoIQY: " and "
    };
    const {
      timeScope: _0x186ef5,
      webMonitorId: _0x38dfb0
    } = p1863;
    let v1423 = "select * from " + vRequire7.setTableName("CustomerPV", _0x186ef5, _0x38dfb0) + " where " + p1862 + v1422.FoIQY + p1861;
    return await v1338.query(v1423, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getCustomerKeyByUserId(p1864) {
    const v1424 = {
      zfPbM: function (p1865, p1866) {
        return p1865 + p1866;
      },
      aacYQ: "select DISTINCT(customerKey) from ",
      DsdOW: " where userId='"
    };
    const {
      webMonitorId: _0xf8d01,
      userId: _0x3c804a
    } = p1864;
    let v1425 = vRequire7.setTableName("CustomerPV", 0, _0xf8d01);
    let v1426 = v1424.zfPbM(v1424.zfPbM(v1424.zfPbM(v1424.aacYQ, v1425), v1424.DsdOW), _0x3c804a) + "'";
    let v1427 = await v1338.query(v1426, {
      type: v1338.QueryTypes.SELECT
    });
    return v1427;
  }
  static async ["getCustomerKeyByUserIdInTime"]({
    webMonitorId: _0xbb96a4,
    userId: _0x436162,
    startTime: _0x44294c,
    endTime: _0x59ad15
  }) {
    const v1428 = {
      AswOk: function (p1867, p1868) {
        return p1867 ^ p1868;
      }
    };
    let v1429 = vRequire7.setTableName("CustomerPV", v1428.AswOk(689933, 689933), _0xbb96a4);
    let v1430 = "select DISTINCT(customerKey) from " + v1429 + " where userId='" + _0x436162 + "' and happenDate>='" + _0x44294c + "' and happenDate<'" + _0x59ad15 + "'";
    let v1431 = await v1338.query(v1430, {
      type: v1338.QueryTypes.SELECT
    });
    return v1431;
  }
  static async getCustomerPVDetailByCustomerKey(p1869, p1870, p1871) {
    const v1432 = {
      vfujm: function (p1872, p1873) {
        return p1872 + p1873;
      },
      ZIkum: "CustomerPV",
      rIBGF: "and",
      LrAZq: " limit 1"
    };
    const {
      timeScope: _0x13a465,
      webMonitorId: _0x404800
    } = p1871;
    let v1433 = v1432.vfujm("select * from " + vRequire7.setTableName(v1432.ZIkum, _0x13a465, _0x404800) + " where ", p1870) + v1432.rIBGF + p1869 + v1432.LrAZq;
    return await v1338.query(v1433, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getPVsByCustomerKey(p1874, p1875, p1876) {
    const v1434 = {
      brvYB: function (p1877, p1878) {
        return p1877 + p1878;
      },
      qtFYq: function (p1879, p1880) {
        return p1879 + p1880;
      },
      qjecq: " GROUP BY simpleUrl "
    };
    const {
      timeScope: _0x551d72,
      webMonitorId: _0x4382d9
    } = p1876;
    let v1435 = v1434.brvYB(v1434.qtFYq("select CAST(simpleUrl AS char) as simpleUrl, count(simpleUrl) from " + vRequire7.setTableName("CustomerPV", _0x551d72, _0x4382d9), " where ") + p1875 + "and" + p1874, v1434.qjecq);
    return await v1338.query(v1435, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async ["getProvinceCountBySeconds"](p1881) {
    const v1436 = {
      orUYW: function (p1882, p1883) {
        return p1882 * p1883;
      },
      uCfLk: function (p1884, p1885) {
        return p1884 ^ p1885;
      },
      ZfGut: function (p1886, p1887) {
        return p1886 + p1887;
      },
      twwWL: "' GROUP BY province"
    };
    const v1437 = await C9.getUserIdType(p1881.webMonitorId);
    const v1438 = new Date().getTime();
    const v1439 = new Date(v1438 - v1436.orUYW(300, 1000)).Format("yyyy-MM-dd hh:mm:ss");
    const v1440 = vRequire7.setTableName("CustomerPV", v1436.uCfLk(821625, 821625), p1881.webMonitorId);
    let v1441 = v1436.ZfGut("SELECT province as name, count(distinct " + v1437 + ") as value from " + v1440 + " where happenDate>'", v1439) + v1436.twwWL;
    return await v1338.query(v1441, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getProvinceCountByDay(p1888, p1889) {
    const v1442 = {
      DRVGw: " 00:00:00",
      AygDW: " 23:59:59"
    };
    const v1443 = vRequire3.addDays(p1889);
    const v1444 = v1443 + v1442.DRVGw;
    const v1445 = v1443 + v1442.AygDW;
    const v1446 = p1888 + "CustomerPV";
    let v1447 = "select province as name, count(distinct customerKey) as value from " + v1446 + " WHERE happenDate>='" + v1444 + "' AND happenDate<'" + v1445 + "' group by province";
    return await v1338.query(v1447, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getCountryCountByDay(p1890, p1891) {
    const v1448 = vRequire3.addDays(p1891);
    const v1449 = v1448 + " 00:00:00";
    const v1450 = v1448 + " 23:59:59";
    const v1451 = p1890 + "CustomerPV";
    let v1452 = "select country as name, count(distinct customerKey) as value from " + v1451 + " WHERE happenDate>='" + v1449 + "' AND happenDate<'" + v1450 + "' group by country";
    return await v1338.query(v1452, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getTagsPercent(p1892) {
    const v1453 = {
      HoIsO: function (p1893, p1894) {
        return p1893 + p1894;
      },
      ptfCG: "SELECT uploadType as name, dayCount as value from ",
      ziByG: " where dayName='"
    };
    const {
      webMonitorId: _0x4a837a,
      timeSize: _0x49ce69
    } = p1892;
    const v1454 = UPLOAD_TYPE.UV_COUNT_DAY;
    let v1455 = vRequire3.addDays(0 - _0x49ce69);
    const v1456 = v1453.HoIsO(_0x4a837a, "InfoCountByDay");
    let v1457 = v1453.HoIsO(v1453.HoIsO(v1453.HoIsO(v1453.ptfCG + v1456 + v1453.ziByG + v1455 + "' and uploadType like '", v1454) + "%' and uploadType!='", v1454), "' order by value desc");
    return await v1338.query(v1457, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getAliveCusInRealTime(p1895) {
    const v1458 = {
      HfOqT: function (p1896, p1897) {
        return p1896 - p1897;
      },
      rANwi: function (p1898, p1899) {
        return p1898 ^ p1899;
      },
      ZshKj: "yyyy-MM-dd hh:mm:ss",
      pJjoz: function (p1900, p1901) {
        return p1900 + p1901;
      },
      EVZcz: "SELECT count(distinct ",
      gBjfH: " where happenDate>'"
    };
    const v1459 = await C9.getUserIdType(p1895);
    const v1460 = new Date().getTime();
    const v1461 = new Date(v1458.HfOqT(v1460, v1458.rANwi(996134, 995850) * 1000)).Format(v1458.ZshKj);
    let v1462 = v1458.pJjoz(v1458.pJjoz(v1458.EVZcz + v1459 + ") as count from ", vRequire7.setTableName("CustomerPV", 0, p1895)) + v1458.gBjfH + v1461, "'");
    return await v1338.query(v1462, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async ["getAliveUvCountForSecond"](p1902) {
    const v1463 = {
      CFnBL: "CustomerPV"
    };
    let v1464 = "SELECT DATE_FORMAT(createdAt,'%Y-%m-%d %H:%i:%s') AS seconds, COUNT(pageKey) AS count FROM " + vRequire3.setTableName(v1463.CFnBL) + " WHERE DATE_FORMAT(NOW() - INTERVAL 3600 SECOND, '%Y-%m-%d %T') <= createdAt GROUP BY seconds";
    return await v1338.query(v1464, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getPvsInfoByTenSeconds(p1903) {
    const v1465 = {
      VTQbR: function (p1904, p1905) {
        return p1904 ^ p1905;
      },
      VkUCA: "CustomerPV",
      tmjji: function (p1906, p1907) {
        return p1906 + p1907;
      },
      AluZM: " where happenDate>'"
    };
    const v1466 = new Date().getTime();
    const v1467 = new Date(v1466 - v1465.VTQbR(467726, 467716) * 1000).Format("yyyy-MM-dd hh:mm:ss");
    const v1468 = vRequire7.setTableName(v1465.VkUCA, 0, p1903.webMonitorId);
    let v1469 = v1465.tmjji("SELECT * from " + v1468 + v1465.AluZM + v1467, "'");
    return await v1338.query(v1469, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getNewCusInfoBySeconds(p1908) {
    const v1470 = {
      yPRnA: "yyyy-MM-dd hh:mm:ss",
      GaBWk: function (p1909, p1910) {
        return p1909 ^ p1910;
      },
      CLcDZ: function (p1911, p1912) {
        return p1911 + p1912;
      },
      PYfMg: " where happenDate>'"
    };
    const v1471 = await C9.getUserIdType(p1908.webMonitorId);
    const v1472 = new Date().getTime();
    const v1473 = new Date(v1472 - 300000).Format(v1470.yPRnA);
    const v1474 = vRequire7.setTableName("CustomerPV", v1470.GaBWk(179083, 179083), p1908.webMonitorId);
    let v1475 = v1470.CLcDZ("SELECT count(distinct " + v1471 + ") as count from " + v1474, v1470.PYfMg) + v1473 + "' and  (newStatus='n' or newStatus='n_uv' ) ";
    return await v1338.query(v1475, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async ["getPvCountBySecond"](p1913) {
    const v1476 = {
      tDciB: function (p1914, p1915) {
        return p1914 + p1915;
      }
    };
    let v1477 = v1476.tDciB("SELECT DATE_FORMAT(createdAt,'%Y-%m-%d %H:%i:%s') AS seconds, COUNT(pageKey) AS count FROM " + vRequire3.setTableName("CustomerPV") + " ", "WHERE DATE_FORMAT(NOW() - INTERVAL 30 SECOND, '%Y-%m-%d %T') <= createdAt GROUP BY seconds");
    return await v1338.query(v1477, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getUvCountBySecond(p1916) {
    const v1478 = {
      DrVPX: function (p1917, p1918) {
        return p1917 + p1918;
      },
      MtYEs: "SELECT DATE_FORMAT(createdAt,'%Y-%m-%d %H:%i:%s') AS seconds, COUNT(DISTINCT customerKey) AS count FROM "
    };
    let v1479 = v1478.DrVPX(v1478.MtYEs + vRequire3.setTableName("CustomerPV") + " ", "WHERE DATE_FORMAT(NOW() - INTERVAL 30 SECOND, '%Y-%m-%d %T') <= createdAt GROUP BY seconds");
    return await v1338.query(v1479, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getPvCountByMinute(p1919) {
    const v1480 = {
      NkRru: function (p1920, p1921) {
        return p1920 + p1921;
      },
      TFkNM: "WHERE DATE_FORMAT(NOW() - INTERVAL "
    };
    const v1481 = vRequire7.setTableName("CustomerPV", 0, p1919.webMonitorId);
    let v1482 = v1480.NkRru("SELECT DATE_FORMAT(happenDate,'%Y-%m-%d %H:%i') AS minutes, COUNT(pageKey) AS count FROM " + v1481 + " " + v1480.TFkNM, p1919.minuteSize) + " MINUTE, '%Y-%m-%d %T') <= happenDate GROUP BY minutes";
    return await v1338.query(v1482, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async ["getUvCountByMinute"](p1922) {
    const v1483 = vRequire7.setTableName("CustomerPV", 0, p1922.webMonitorId);
    let v1484 = "SELECT \n    toStartOfMinute(happenDate) as minute, \n    count(DISTINCT customerKey) as count\nFROM " + v1483 + " wpcp \nWHERE happenDate >= now() - interval " + p1922.minuteSize + " minute\nGROUP BY minute";
    return await v1338.query(v1484, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async ["getUserCountByHour"](p1923) {
    const v1485 = {
      BlNhN: function (p1924, p1925) {
        return p1924 + p1925;
      },
      vRuuo: "SELECT DATE_FORMAT(createdAt,'%m-%d %H') AS hour, COUNT(DISTINCT userId) AS count ",
      kQvoJ: " WHERE "
    };
    let v1486 = v1485.BlNhN(v1485.vRuuo, "FROM ") + vRequire3.setTableName("CustomerPV") + v1485.kQvoJ + " DATE_FORMAT(NOW() - INTERVAL 23 HOUR, '%Y-%m-%d %H') <= createdAt GROUP BY HOUR";
    return await v1338.query(v1486, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async ["getUserCountSevenDayAgoByHour"](p1926) {
    const v1487 = {
      fharn: function (p1927, p1928) {
        return p1927 === p1928;
      },
      gRJIU: function (p1929, p1930) {
        return p1929 + p1930;
      },
      cZQNp: function (p1931, p1932) {
        return p1931 + p1932;
      },
      mfaZd: ":00:00",
      gkWHm: function (p1933, p1934) {
        return p1933 + p1934;
      },
      IkFCM: "CustomerPV"
    };
    const v1488 = new Date().getHours();
    let vV1488 = v1488;
    let v1489 = "";
    if (v1487.fharn(v1488, 23)) {
      v1489 = vRequire3.addDays(-6) + " 00:00:00";
    } else {
      vV1488 = vV1488 + 1;
      v1489 = v1487.gRJIU(v1487.cZQNp(vRequire3.addDays(-7) + " ", vV1488), v1487.mfaZd);
    }
    const v1490 = v1487.gkWHm(v1487.cZQNp("SELECT DATE_FORMAT(createdAt,'%m-%d %H') AS hour, COUNT(DISTINCT userId) AS count ", "FROM ") + vRequire3.setTableName(v1487.IkFCM), " ") + "WHERE createdAt<'" + v1489 + "' and DATE_FORMAT(DATE_SUB(NOW(),INTERVAL 7 DAY) - INTERVAL 23 HOUR, '%Y-%m-%d %H') <= createdAt GROUP BY HOUR";
    return await v1338.query(v1490, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async ["getUvCountByHour"](p1935) {
    const v1491 = {
      yDrdp: "CustomerPV",
      fYuQS: function (p1936, p1937) {
        return p1936 ^ p1937;
      }
    };
    const {
      timeSize: _0x2eea76,
      webMonitorId: _0xa58032
    } = p1935;
    let v1492 = vRequire7.setTableName(v1491.yDrdp, _0x2eea76, _0xa58032);
    let v1493 = "";
    if (_0x2eea76 === 0) {
      v1493 = vRequire3.handleTimeScopeSql(0 - _0x2eea76, 0);
    } else {
      const v1494 = vRequire3.addDays(v1491.fYuQS(399823, 399823) - _0x2eea76) + " 00:00:00";
      const v1495 = vRequire3.addDays(0 - _0x2eea76) + " 23:59:59";
      v1493 = " happenDate>='" + v1494 + "' and happenDate<='" + v1495 + "' ";
    }
    const v1496 = "SELECT happenHour as hour, count(distinct customerKey) as count from " + v1492 + " where " + v1493 + " GROUP BY happenHour";
    return await v1338.query(v1496, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getUvCountSevenDayAgoByHour(p1938) {
    const v1497 = {
      jrsvb: function (p1939, p1940) {
        return p1939 ^ p1940;
      },
      dcpGG: function (p1941, p1942) {
        return p1941 + p1942;
      },
      CXJkE: " 00:00:00",
      iYUdW: function (p1943, p1944) {
        return p1943 - p1944;
      },
      OSJWb: " 23:59:59"
    };
    const {
      timeSize: _0x4bd1d3,
      scope: _0xe0c469,
      webMonitorId: _0x2726fb
    } = p1938;
    let v1498 = vRequire7.setTableName("CustomerPV", _0x4bd1d3, _0x2726fb);
    let v1499 = "";
    if (_0x4bd1d3 === v1497.jrsvb(204949, 204949)) {
      v1499 = vRequire3.handleTimeScopeSql(0 - _0x4bd1d3, _0xe0c469);
    } else {
      const v1500 = v1497.dcpGG(vRequire3.addDays(0 - _0x4bd1d3 - _0xe0c469), v1497.CXJkE);
      const v1501 = vRequire3.addDays(v1497.iYUdW(0, _0x4bd1d3) - _0xe0c469) + v1497.OSJWb;
      v1499 = " happenDate>='" + v1500 + "' and happenDate<='" + v1501 + "' ";
    }
    const v1502 = "SELECT happenHour as hour, count(distinct customerKey) as count from " + v1498 + " WHERE " + v1499 + " GROUP BY happenHour";
    return await v1338.query(v1502, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getCustomerCountByTime(p1945) {
    const v1503 = {
      ZxqVS: function (p1946, p1947) {
        return p1946 + p1947;
      },
      JpIia: "SELECT DATE_FORMAT(createdAt,'%m-%d %H') AS hour, COUNT(pageKey) AS count ",
      FvzXH: " DATE_FORMAT(NOW() - INTERVAL 23 HOUR, '%Y-%m-%d %H') <= createdAt GROUP BY HOUR"
    };
    let v1504 = v1503.ZxqVS(v1503.JpIia + "FROM " + vRequire3.setTableName("CustomerPV"), " WHERE ") + v1503.FvzXH;
    return await v1338.query(v1504, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async ["getPvCountByTime"](p1948) {
    const v1505 = {
      DjnBv: function (p1949, p1950) {
        return p1949 ^ p1950;
      },
      vEfdb: function (p1951, p1952) {
        return p1951 + p1952;
      },
      dHTKL: " 23:59:59"
    };
    const {
      timeSize: _0x363fa1,
      webMonitorId: _0x1ab47e
    } = p1948;
    let v1506 = vRequire7.setTableName("CustomerPV", _0x363fa1, _0x1ab47e);
    let v1507 = "";
    if (_0x363fa1 === 0) {
      v1507 = vRequire3.handleTimeScopeSql(v1505.DjnBv(177377, 177377) - _0x363fa1, 0);
    } else {
      const v1508 = v1505.vEfdb(vRequire3.addDays(0 - _0x363fa1), " 00:00:00");
      const v1509 = vRequire3.addDays(0 - _0x363fa1) + v1505.dHTKL;
      v1507 = " happenDate>='" + v1508 + "' and happenDate<='" + v1509 + "' ";
    }
    const v1510 = "SELECT happenHour as hour, count(dataId) as count from " + v1506 + " WHERE " + v1507 + " GROUP BY happenHour";
    return await v1338.query(v1510, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getPvCountSevenDayAgoByHour(p1953) {
    const v1511 = {
      iJBBs: function (p1954, p1955) {
        return p1954 - p1955;
      },
      DioCO: function (p1956, p1957) {
        return p1956 ^ p1957;
      },
      CDLoQ: function (p1958, p1959) {
        return p1958 + p1959;
      },
      YZFSG: function (p1960, p1961) {
        return p1960 - p1961;
      },
      BaWkV: function (p1962, p1963) {
        return p1962 ^ p1963;
      },
      EhTJz: " 23:59:59"
    };
    const {
      timeSize: _0x2e8a5a,
      scope: _0x2be3b2,
      webMonitorId: _0x1a2bee
    } = p1953;
    let v1512 = vRequire7.setTableName("CustomerPV", _0x2e8a5a, _0x1a2bee);
    let v1513 = "";
    if (_0x2e8a5a === 0) {
      v1513 = vRequire3.handleTimeScopeSql(v1511.iJBBs(v1511.DioCO(405196, 405196), _0x2e8a5a), _0x2be3b2);
    } else {
      const v1514 = vRequire3.addDays(0 - _0x2e8a5a - _0x2be3b2) + " 00:00:00";
      const v1515 = v1511.CDLoQ(vRequire3.addDays(v1511.YZFSG(v1511.BaWkV(206013, 206013), _0x2e8a5a) - _0x2be3b2), v1511.EhTJz);
      v1513 = " happenDate>='" + v1514 + "' and happenDate<='" + v1515 + "' ";
    }
    const v1516 = "SELECT happenHour as hour, count(dataId) as count from " + v1512 + " WHERE " + v1513 + " GROUP BY happenHour";
    return await v1338.query(v1516, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async ["getNewCustomerCountByToday"](p1964) {
    const v1517 = await C9.getUserIdType(p1964.webMonitorId);
    const v1518 = vRequire7.setTableName("CustomerPV", 0, p1964.webMonitorId);
    let v1519 = "SELECT  count(distinct " + v1517 + ") as count from " + v1518 + " where newStatus='n' or newStatus='n_uv'";
    return await v1338.query(v1519, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getNewCustomerCountByTime(p1965) {
    const v1520 = {
      fHkLb: function (p1966, p1967) {
        return p1966 === p1967;
      },
      HBrER: function (p1968, p1969) {
        return p1968 - p1969;
      },
      uDixT: function (p1970, p1971) {
        return p1970 ^ p1971;
      },
      QVHyz: function (p1972, p1973) {
        return p1972 + p1973;
      },
      ANMly: function (p1974, p1975) {
        return p1974 - p1975;
      }
    };
    const v1521 = await C9.getUserIdType(p1965.webMonitorId);
    const {
      timeSize: _0x26ab98,
      webMonitorId: _0x29b8c6
    } = p1965;
    let v1522 = vRequire7.setTableName("CustomerPV", _0x26ab98, _0x29b8c6);
    let v1523 = "";
    if (v1520.fHkLb(_0x26ab98, 0)) {
      v1523 = vRequire3.handleTimeScopeSql(v1520.HBrER(v1520.uDixT(326690, 326690), _0x26ab98), v1520.uDixT(637787, 637787));
    } else {
      const v1524 = vRequire3.addDays(v1520.HBrER(0, _0x26ab98)) + " 00:00:00";
      const v1525 = v1520.QVHyz(vRequire3.addDays(v1520.ANMly(0, _0x26ab98)), " 23:59:59");
      v1523 = " happenDate>='" + v1524 + "' and happenDate<='" + v1525 + "' ";
    }
    const v1526 = "SELECT happenHour as hour, count(distinct " + v1521 + ") as count from " + v1522 + " WHERE " + v1523 + " and (newStatus='n' or newStatus='n_uv') GROUP BY happenHour";
    return await v1338.query(v1526, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getNewCustomerCountSevenDayAgoByHour(p1976) {
    const v1527 = {
      qtORU: function (p1977, p1978) {
        return p1977 + p1978;
      },
      euHSs: function (p1979, p1980) {
        return p1979 - p1980;
      }
    };
    const {
      timeSize: _0x2feba4,
      scope: _0x29a61f,
      webMonitorId: _0x52b54b
    } = p1976;
    let v1528 = vRequire7.setTableName("CustomerPV", _0x2feba4, _0x52b54b);
    let v1529 = "";
    if (_0x2feba4 === 0) {
      v1529 = vRequire3.handleTimeScopeSql(0 - _0x2feba4, _0x29a61f);
    } else {
      const v1530 = v1527.qtORU(vRequire3.addDays(0 - _0x2feba4 - _0x29a61f), " 00:00:00");
      const v1531 = vRequire3.addDays(v1527.euHSs(0, _0x2feba4) - _0x29a61f) + " 23:59:59";
      v1529 = " happenDate>='" + v1530 + "' and happenDate<='" + v1531 + "' ";
    }
    const v1532 = "SELECT happenHour as hour, count(distinct customerKey) as count from " + v1528 + " WHERE " + v1529 + " and (newStatus='n' or newStatus='n_uv') GROUP BY happenHour";
    return await v1338.query(v1532, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getInstallCountByTime(p1981) {
    const v1533 = {
      HGweX: function (p1982, p1983) {
        return p1982 ^ p1983;
      },
      oOwhj: function (p1984, p1985) {
        return p1984 - p1985;
      },
      SweZC: function (p1986, p1987) {
        return p1986 * p1987;
      },
      rBjLq: function (p1988, p1989) {
        return p1988 * p1989;
      },
      mztgn: function (p1990, p1991) {
        return p1990 + p1991;
      },
      ZfnIR: function (p1992, p1993) {
        return p1992 + p1993;
      },
      vxged: "' order by hourName"
    };
    const v1534 = p1981.timeSize * v1533.HGweX(133488, 133489);
    const v1535 = new Date().getTime();
    const v1536 = v1533.oOwhj(v1535 - v1533.SweZC(82800, 1000), v1533.rBjLq(v1534 * 24, 3600) * 1000);
    const vV1535 = v1535;
    const v1537 = new Date(v1536).Format("MM-dd hh");
    const v1538 = new Date(vV1535).Format("MM-dd hh");
    const v1539 = p1981.webMonitorId + "InfoCountByHour";
    let v1540 = v1533.mztgn(v1533.ZfnIR("SELECT distinct hourName as hour, hourCount as count from " + v1539 + " where uploadType='", UPLOAD_TYPE.INSTALL_COUNT) + "' and hourName>='" + v1537, "' and hourName<='") + v1538 + v1533.vxged;
    return await v1338.query(v1540, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async ["getInstallCountSevenDayAgoByHour"](p1994) {
    const v1541 = {
      tKVwK: function (p1995, p1996) {
        return p1995 * p1996;
      },
      BegkP: function (p1997, p1998) {
        return p1997 - p1998;
      },
      GnChD: function (p1999, p2000) {
        return p1999 ^ p2000;
      },
      xODZh: function (p2001, p2002) {
        return p2001 ^ p2002;
      },
      ustep: function (p2003, p2004) {
        return p2003 ^ p2004;
      },
      IxODv: function (p2005, p2006) {
        return p2005 + p2006;
      },
      BGqIO: "InfoCountByHour",
      zbygb: "SELECT distinct hourName as hour, hourCount as count from ",
      GqxNX: "' and hourName<='"
    };
    const v1542 = v1541.tKVwK(p1994.timeSize, 1);
    const v1543 = new Date().getTime();
    const v1544 = v1541.BegkP(v1543 - v1541.GnChD(494039, 493511) * 192 * v1541.GnChD(687108, 688108) + v1541.xODZh(237162, 233594) * 1000, v1542 * 24 * 3600 * v1541.ustep(823961, 823665));
    const v1545 = v1541.IxODv(v1544, (v1542 + v1541.ustep(782764, 782765)) * 24 * 3600 * 1000);
    const v1546 = new Date(v1544).Format("MM-dd hh");
    const v1547 = new Date(v1545).Format("MM-dd hh");
    const v1548 = v1541.IxODv(p1994.webMonitorId, v1541.BGqIO);
    let v1549 = v1541.IxODv(v1541.IxODv(v1541.zbygb, v1548) + " where uploadType='" + UPLOAD_TYPE.INSTALL_COUNT + "' and hourName>='", v1546) + v1541.GqxNX + v1547 + "' order by hourName";
    return await v1338.query(v1549, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async ["getVersionCountOrderByCount"](p2007) {
    const v1550 = {
      VyBeY: function (p2008, p2009) {
        return p2008 - p2009;
      },
      BBSxD: function (p2010, p2011) {
        return p2010 ^ p2011;
      },
      WOYch: function (p2012, p2013) {
        return p2012 * p2013;
      },
      zTkbu: function (p2014, p2015) {
        return p2014 ^ p2015;
      },
      vXdCw: function (p2016, p2017) {
        return p2016 + p2017;
      },
      jcRIn: function (p2018, p2019) {
        return p2018 + p2019;
      },
      qcEcS: function (p2020, p2021) {
        return p2020 + p2021;
      },
      wEOWS: "' and uploadType='",
      nTyiO: " where dayName>'"
    };
    const {
      webMonitorId: _0x1aa7a1,
      timeSize: _0x822c32,
      topCount: _0x235719,
      topDays: _0x7dc7e7
    } = p2007;
    const v1551 = UPLOAD_TYPE.VERSION_COUNT_DAY;
    let v1552 = vRequire3.addDays(v1550.VyBeY(v1550.BBSxD(813925, 813925), _0x822c32));
    let v1553 = vRequire3.addDays(v1550.VyBeY(0, v1550.WOYch(_0x7dc7e7, v1550.zTkbu(208167, 208166))));
    let v1554 = "";
    const v1555 = v1550.vXdCw(_0x1aa7a1, "DeviceInfoCountByDay");
    if (_0x7dc7e7 * 1 === v1550.zTkbu(276215, 276214)) {
      v1554 = v1550.jcRIn(v1550.qcEcS("SELECT showName, dayCount as count from ", v1555) + " where dayName='" + v1552 + v1550.wEOWS + v1551 + "' order by count desc limit ", _0x235719);
    } else {
      v1554 = v1550.jcRIn(v1550.jcRIn(v1550.qcEcS("SELECT showName, sum(dayCount) as count from " + v1555 + v1550.nTyiO + v1553, "' and uploadType='") + v1551, "' group by showName order by count desc limit "), _0x235719);
    }
    return await v1338.query(v1554, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getCityCountOrderByCount(p2022) {
    const v1556 = {
      Wlwml: function (p2023, p2024) {
        return p2023 ^ p2024;
      },
      HFemj: function (p2025, p2026) {
        return p2025 + p2026;
      },
      dfoHH: function (p2027, p2028) {
        return p2027 + p2028;
      },
      eaveY: "SELECT showName, dayCount as count from ",
      jiJlV: "' and uploadType='",
      mSkgg: "SELECT showName, sum(dayCount) as count from "
    };
    const {
      webMonitorId: _0xfa688c,
      timeSize: _0xe8ddb3,
      topCount: _0x543748,
      topDays: _0x17c498
    } = p2022;
    const v1557 = UPLOAD_TYPE.CITY_COUNT_DAY;
    let v1558 = vRequire3.addDays(v1556.Wlwml(569292, 569292) - _0xe8ddb3);
    let v1559 = vRequire3.addDays(0 - _0x17c498 * 1);
    let v1560 = "";
    const v1561 = v1556.HFemj(_0xfa688c, "DeviceInfoCountByDay");
    if (_0x17c498 * 1 === 1) {
      v1560 = v1556.dfoHH(v1556.eaveY + v1561 + " where dayName='", v1558) + v1556.jiJlV + v1557 + "' order by count desc limit " + _0x543748;
    } else {
      v1560 = v1556.dfoHH(v1556.mSkgg + v1561 + " where dayName>'" + v1559 + "' and uploadType='", v1557) + "' group by showName order by count desc limit " + _0x543748;
    }
    return await v1338.query(v1560, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getCityCountOrderByCountTop20(p2029) {
    const v1562 = {
      EceuR: function (p2030, p2031) {
        return p2030 ^ p2031;
      }
    };
    const {
      webMonitorId: _0x2f8f3e
    } = p2029;
    const v1563 = UPLOAD_TYPE.CITY_COUNT_DAY;
    const v1564 = v1562.EceuR(486470, 486470);
    let v1565 = vRequire3.addDays(v1564);
    const v1566 = _0x2f8f3e + "CustomerPV";
    let v1567 = " select province as showName, count(distinct customerKey) as count from " + v1566 + " group by province order by count desc limit 20 ";
    return await v1338.query(v1567, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getDeviceCountOrderByCount(p2032) {
    const v1568 = {
      GElvC: function (p2033, p2034) {
        return p2033 ^ p2034;
      },
      CElWG: "DeviceInfoCountByDay",
      aKEDK: function (p2035, p2036) {
        return p2035 + p2036;
      },
      hFbpD: function (p2037, p2038) {
        return p2037 + p2038;
      },
      nXiLj: "SELECT showName, dayCount as count from ",
      LxoVK: " where dayName='",
      RNYdQ: "' and uploadType='",
      pLZmT: function (p2039, p2040) {
        return p2039 + p2040;
      },
      YTobE: " where dayName>'"
    };
    const {
      webMonitorId: _0x5f29f0,
      timeSize: _0x142142,
      topCount: _0x4c8de8,
      topDays: _0x1a1507
    } = p2032;
    const v1569 = UPLOAD_TYPE.DEVICE_COUNT_DAY;
    let v1570 = vRequire3.addDays(0 - _0x142142);
    let v1571 = vRequire3.addDays(v1568.GElvC(316284, 316284) - _0x1a1507 * v1568.GElvC(328939, 328938));
    let v1572 = "";
    const v1573 = _0x5f29f0 + v1568.CElWG;
    if (_0x1a1507 * 1 === 1) {
      v1572 = v1568.aKEDK(v1568.hFbpD(v1568.hFbpD(v1568.nXiLj + v1573, v1568.LxoVK) + v1570, v1568.RNYdQ), v1569) + "' order by count desc limit " + _0x4c8de8;
    } else {
      v1572 = v1568.pLZmT(v1568.hFbpD(v1568.pLZmT("SELECT showName, sum(dayCount) as count from ", v1573) + v1568.YTobE, v1571), "' and uploadType='") + v1569 + "' group by showName order by count desc limit " + _0x4c8de8;
    }
    return await v1338.query(v1572, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getBrowserNameCountOrderByCount(p2041) {
    const v1574 = {
      eDJbQ: function (p2042, p2043) {
        return p2042 - p2043;
      },
      gwnnH: function (p2044, p2045) {
        return p2044 ^ p2045;
      },
      Gnggc: function (p2046, p2047) {
        return p2046 + p2047;
      },
      jbZnU: " where dayName='",
      ksEPa: "' order by count desc limit ",
      EWpPy: "' and uploadType='"
    };
    const {
      webMonitorId: _0x456c34,
      timeSize: _0x62c90,
      topCount: _0x2dbfb9,
      topDays: _0x55023c
    } = p2041;
    const v1575 = UPLOAD_TYPE.BROWSER_COUNT_DAY;
    let v1576 = vRequire3.addDays(0 - _0x62c90);
    let v1577 = vRequire3.addDays(v1574.eDJbQ(0, _0x55023c * v1574.gwnnH(650407, 650406)));
    let v1578 = "";
    const v1579 = v1574.Gnggc(_0x456c34, "DeviceInfoCountByDay");
    if (_0x55023c * 1 === 1) {
      v1578 = v1574.Gnggc("SELECT showName, dayCount as count from " + v1579 + v1574.jbZnU + v1576 + "' and uploadType='" + v1575 + v1574.ksEPa, _0x2dbfb9);
    } else {
      v1578 = v1574.Gnggc("SELECT showName, sum(dayCount) as count from ", v1579) + " where dayName>'" + v1577 + v1574.EWpPy + v1575 + "' group by showName order by count desc limit " + _0x2dbfb9;
    }
    return await v1338.query(v1578, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async ["getDeviceSizeCountOrderByCount"](p2048) {
    const v1580 = {
      fZHGy: function (p2049, p2050) {
        return p2049 ^ p2050;
      },
      KTupR: function (p2051, p2052) {
        return p2051 * p2052;
      },
      HmRfv: function (p2053, p2054) {
        return p2053 + p2054;
      },
      tpQfG: "SELECT showName, dayCount as count from ",
      XFpZz: " where dayName>'"
    };
    const {
      webMonitorId: _0x2a6096,
      timeSize: _0x21ba8d,
      topCount: _0x351ed8,
      topDays: _0x3be98b
    } = p2048;
    const v1581 = UPLOAD_TYPE.SCREEN_COUNT_DAY;
    let v1582 = vRequire3.addDays(v1580.fZHGy(766799, 766799) - _0x21ba8d);
    let v1583 = vRequire3.addDays(0 - v1580.KTupR(_0x3be98b, 1));
    let v1584 = "";
    const v1585 = v1580.HmRfv(_0x2a6096, "DeviceInfoCountByDay");
    if (_0x3be98b * 1 === 1) {
      v1584 = v1580.tpQfG + v1585 + " where dayName='" + v1582 + "' and uploadType='" + v1581 + "' order by count desc limit " + _0x351ed8;
    } else {
      v1584 = "SELECT showName, sum(dayCount) as count from " + v1585 + v1580.XFpZz + v1583 + "' and uploadType='" + v1581 + "' group by showName order by count desc limit " + _0x351ed8;
    }
    return await v1338.query(v1584, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getDeviceCountByHour(p2055, p2056, p2057) {
    const v1586 = {
      QinGP: "count(DISTINCT customerKey)",
      wVVSI: "count(dataId)"
    };
    let v1587 = vRequire7.setTableName("CustomerPV", p2056, p2055);
    let v1588 = v1586.QinGP;
    let v1589 = " and ( newStatus='o_uv' or newStatus='n_uv' ) ";
    if (p2057 === "simpleUrl") {
      v1588 = v1586.wVVSI;
      v1589 = "";
    }
    const v1590 = vRequire3.addDays(p2056);
    const v1591 = v1590 + " 00:00:00";
    const v1592 = v1590 + " 23:59:59";
    const v1593 = "SELECT " + p2057 + " as showName, " + v1588 + " as count from " + v1587 + " WHERE happenDate>='" + v1591 + "' and happenDate<='" + v1592 + "' " + v1589 + " GROUP BY " + p2057;
    return await v1338.query(v1593, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getCityCountByHour(p2058, p2059, p2060) {
    const v1594 = {
      UhUTC: " WHERE happenDate>='",
      SJDzL: "' AND happenDate<'"
    };
    const v1595 = vRequire7.setTableName("CustomerPV", 0, p2058);
    const v1596 = "SELECT city, count(DISTINCT customerKey) as count from " + v1595 + v1594.UhUTC + p2059 + v1594.SJDzL + p2060 + "' and ( newStatus='o_uv' or new Status='n_uv' ) GROUP BY city";
    return await v1338.query(v1596, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getSystemCountByHour(p2061, p2062, p2063) {
    const v1597 = {
      awdTs: function (p2064, p2065) {
        return p2064 + p2065;
      },
      OiqiX: "SELECT os, count(DISTINCT customerKey) as count from ",
      FVYuo: "' AND happenDate<'",
      bThQT: "' and ( newStatus='o_uv' or new Status='n_uv' ) GROUP BY os"
    };
    const v1598 = vRequire7.setTableName("CustomerPV", 0, p2061);
    const v1599 = v1597.awdTs(v1597.OiqiX + v1598 + " WHERE happenDate>='" + p2062 + v1597.FVYuo, p2063) + v1597.bThQT;
    return await v1338.query(v1599, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async ["getProjectVersionCountByHour"](p2066, p2067, p2068) {
    const v1600 = {
      hGtVs: function (p2069, p2070) {
        return p2069 + p2070;
      },
      SFGSR: function (p2071, p2072) {
        return p2071 + p2072;
      },
      bWWHi: function (p2073, p2074) {
        return p2073 + p2074;
      }
    };
    const v1601 = vRequire7.setTableName("CustomerPV", 0, p2066);
    const v1602 = v1600.hGtVs(v1600.SFGSR(v1600.SFGSR(v1600.bWWHi("SELECT projectVersion, count(DISTINCT customerKey) as count from ", v1601), " WHERE happenDate>='"), p2067), "' AND happenDate<'") + p2068 + "' and ( newStatus='o_uv' or new Status='n_uv' ) GROUP BY projectVersion";
    return await v1338.query(v1602, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getComprehensiveDataCountOrderByCount(p2075, p2076, p2077) {
    const v1603 = {
      KmxGc: function (p2078, p2079) {
        return p2078 ^ p2079;
      },
      BaQie: function (p2080, p2081) {
        return p2080 - p2081;
      },
      rAEWf: function (p2082, p2083) {
        return p2082 * p2083;
      },
      CtDAo: function (p2084, p2085) {
        return p2084 + p2085;
      },
      JvXVK: "CustomerPV"
    };
    const {
      webMonitorId: _0x597963,
      timeSize: _0x3111f8,
      topCount: _0x3cb7c7,
      topDays: _0x50e9ff
    } = p2075;
    const v1604 = vRequire3.addDays(v1603.KmxGc(235992, 235992) - v1603.BaQie(_0x3111f8 + v1603.rAEWf(_0x50e9ff, 1), 1)) + " 00:00:00";
    const v1605 = v1603.CtDAo(vRequire3.addDays(v1603.BaQie(0, _0x3111f8)), " 23:59:59");
    const v1606 = " happenDate>='" + v1604 + "' and happenDate<='" + v1605 + "' ";
    let v1607 = [];
    let v1608 = vRequire7.setTableName(v1603.JvXVK, _0x3111f8, _0x597963);
    const v1609 = "SELECT " + p2076 + " as showName, count(" + p2076 + ") as count from " + v1608 + " where " + v1606 + " GROUP BY showName order by count desc limit " + _0x3cb7c7;
    v1607 = await v1338.query(v1609, {
      type: v1338.QueryTypes.SELECT
    });
    return v1607;
  }
  static async getOsCountOrderByCount(p2086) {
    const v1610 = {
      oXDKJ: function (p2087, p2088) {
        return p2087 ^ p2088;
      },
      Jdsdn: function (p2089, p2090) {
        return p2089 * p2090;
      },
      rmbPv: function (p2091, p2092) {
        return p2091 + p2092;
      },
      GAeIL: function (p2093, p2094) {
        return p2093 + p2094;
      },
      hoOCa: function (p2095, p2096) {
        return p2095 + p2096;
      },
      UGQNO: " where dayName>'"
    };
    const {
      webMonitorId: _0xff2e1a,
      timeSize: _0x52a641,
      topCount: _0xee9fe8,
      topDays: _0x4f20b7
    } = p2086;
    const v1611 = UPLOAD_TYPE.SYSTEM_COUNT_DAY;
    let v1612 = vRequire3.addDays(v1610.oXDKJ(332349, 332349) - _0x52a641);
    let v1613 = vRequire3.addDays(v1610.oXDKJ(637509, 637509) - v1610.Jdsdn(_0x4f20b7, 1));
    let v1614 = "";
    const v1615 = v1610.rmbPv(_0xff2e1a, "DeviceInfoCountByDay");
    if (_0x4f20b7 * 1 === 1) {
      v1614 = v1610.rmbPv("SELECT showName, dayCount as count from " + v1615 + " where dayName='", v1612) + "' and uploadType='" + v1611 + "' order by count desc limit " + _0xee9fe8;
    } else {
      v1614 = v1610.GAeIL(v1610.rmbPv(v1610.hoOCa("SELECT showName, sum(dayCount) as count from " + v1615 + v1610.UGQNO, v1613) + "' and uploadType='" + v1611, "' group by showName order by count desc limit "), _0xee9fe8);
    }
    return await v1338.query(v1614, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getReferrerCountOrderByCount(p2097) {
    const v1616 = {
      nqgUy: function (p2098, p2099) {
        return p2098 ^ p2099;
      },
      HhxNr: function (p2100, p2101) {
        return p2100 - p2101;
      },
      oYSHK: function (p2102, p2103) {
        return p2102 * p2103;
      },
      QZzaK: function (p2104, p2105) {
        return p2104 * p2105;
      },
      zrJcG: function (p2106, p2107) {
        return p2106 + p2107;
      },
      zFfzO: function (p2108, p2109) {
        return p2108 + p2109;
      },
      HRkeP: "SELECT showName, dayCount as count from ",
      VrDid: " where dayName='",
      gngyj: function (p2110, p2111) {
        return p2110 + p2111;
      }
    };
    const {
      webMonitorId: _0x26f4a6,
      timeSize: _0x5bdd1e,
      topCount: _0x1ef911,
      topDays: _0x2e16a3
    } = p2097;
    const v1617 = UPLOAD_TYPE.REFERRER_COUNT_DAY;
    let v1618 = vRequire3.addDays(v1616.nqgUy(493993, 493993) - _0x5bdd1e);
    let v1619 = vRequire3.addDays(v1616.HhxNr(0, v1616.oYSHK(_0x2e16a3, 1)));
    let v1620 = "";
    const v1621 = _0x26f4a6 + "DeviceInfoCountByDay";
    if (v1616.QZzaK(_0x2e16a3, 1) === 1) {
      v1620 = v1616.zrJcG(v1616.zFfzO(v1616.HRkeP + v1621 + v1616.VrDid + v1618, "' and uploadType='"), v1617) + "' order by count desc limit " + _0x1ef911;
    } else {
      v1620 = v1616.zrJcG(v1616.zFfzO(v1616.gngyj(v1616.zrJcG("SELECT showName, sum(dayCount) as count from " + v1621 + " where dayName>'", v1619), "' and uploadType='"), v1617), "' group by showName order by count desc limit ") + _0x1ef911;
    }
    return await v1338.query(v1620, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getSimpleUrlCountOrderByCount(p2112) {
    const v1622 = {
      aFeQO: function (p2113, p2114) {
        return p2113 - p2114;
      },
      jbPgX: function (p2115, p2116) {
        return p2115 * p2116;
      },
      HxUeJ: function (p2117, p2118) {
        return p2117 + p2118;
      },
      eziRW: "SELECT showName, sum(dayCount) as count from ",
      Cfkfo: "' group by showName order by count desc limit ",
      DJMMK: function (p2119, p2120) {
        return p2119 ^ p2120;
      }
    };
    const {
      webMonitorId: _0x56c773,
      timeSize: _0x409b33,
      topCount: _0x5b11ce,
      topDays: _0x55bc20
    } = p2112;
    const v1623 = UPLOAD_TYPE.SIMPLE_URL_COUNT_DAY;
    let v1624 = vRequire3.addDays(v1622.aFeQO(0, _0x55bc20 * 1));
    let v1625 = [];
    let v1626 = vRequire7.setTableName("CustomerPV", _0x409b33, _0x56c773);
    const v1627 = vRequire3.handleWholeDaySql(0 - _0x409b33);
    const v1628 = "SELECT simpleUrl as showName, count(simpleUrl) as count from " + v1626 + " where " + v1627 + " GROUP BY showName order by count desc limit " + _0x5b11ce;
    v1625 = await v1338.query(v1628, {
      type: v1338.QueryTypes.SELECT
    });
    let v1629 = [];
    if (v1622.jbPgX(_0x55bc20, 1) > 1) {
      const v1630 = _0x56c773 + "DeviceInfoCountByDay";
      const v1631 = v1622.HxUeJ(v1622.HxUeJ(v1622.HxUeJ(v1622.HxUeJ(v1622.HxUeJ(v1622.eziRW + v1630, " where dayName>'"), v1624), "' and uploadType='") + v1623, v1622.Cfkfo), _0x5b11ce);
      v1629 = await v1338.query(v1631, {
        type: v1338.QueryTypes.SELECT
      });
    }
    if (_0x55bc20 * v1622.DJMMK(316990, 316991) === v1622.DJMMK(372013, 372012)) {
      return v1625;
    } else {
      v1625.forEach(p2121 => {
        const v1632 = v1629.find(function (p2122) {
          return p2121.showName === p2122.showName;
        });
        if (v1632) {
          v1632.count += p2121.count;
        } else {
          v1629.push(p2121);
        }
      });
    }
    return v1629;
  }
  static async getPvListTotalCountByTime(p2123) {
    const v1633 = {
      lESNS: function (p2124, p2125) {
        return p2124 + p2125;
      },
      NLmJH: ":59:59",
      pERJE: function (p2126, p2127) {
        return p2126 === p2127;
      },
      JJRsN: " 1=1 ",
      wNsxy: function (p2128, p2129) {
        return p2128 + p2129;
      },
      HtmmJ: function (p2130, p2131) {
        return p2130 + p2131;
      }
    };
    let {
      searchDate: _0xb8327a,
      searchHour: _0x4468fe,
      webMonitorId: _0xfb823f,
      ip: _0x20c5cf
    } = p2123;
    const v1634 = _0xb8327a + " " + _0x4468fe + ":00:00";
    const v1635 = v1633.lESNS(_0xb8327a + " " + _0x4468fe, v1633.NLmJH);
    const v1636 = v1633.pERJE(_0x4468fe, -1) ? v1633.JJRsN : v1633.wNsxy(" happenDate>='", v1634) + "' and happenDate<='" + v1635 + "' ";
    const v1637 = _0x20c5cf ? v1633.HtmmJ(" and monitorIp='", _0x20c5cf) + "' " : "";
    const v1638 = v1633.wNsxy(_0xfb823f, "CustomerPV");
    const v1639 = "select count(dataId) as count from " + v1638 + " where " + v1636 + " " + v1637 + " ";
    return await v1338.query(v1639, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getPvListByPage(p2132) {
    const v1640 = {
      oSNcL: function (p2133, p2134) {
        return p2133 + p2134;
      },
      Eotfe: "' and happenDate<='",
      uyhPa: " and userId='",
      jeGvj: "select * ",
      VdAMa: "select count(dataId) as count",
      rHqwh: "o_uv"
    };
    let {
      startDate: _0x188f2c,
      endDate: _0x43da9e,
      startTime: _0x5ec011,
      endTime: _0x2a1e48,
      webMonitorId: _0xe4c0a1,
      page: _0x584c4b,
      pageSize: _0xa36b02,
      ip: _0x4ceb81,
      pagePath: _0x3159ca,
      distinct: _0x45f624,
      userId = "",
      customerKey = ""
    } = p2132;
    let v1641 = "";
    let v1642 = "";
    if (_0x5ec011 && _0x2a1e48) {
      v1641 = _0x5ec011;
      v1642 = _0x2a1e48;
    } else {
      v1641 = _0x188f2c;
      v1642 = _0x43da9e;
    }
    const v1643 = v1640.oSNcL(" happenDate>='" + v1641 + v1640.Eotfe, v1642) + "' ";
    const v1644 = userId ? v1640.uyhPa + userId + "' " : "";
    const v1645 = customerKey ? " and customerKey='" + customerKey + "' " : "";
    const v1646 = _0x4ceb81 ? " and monitorIp='" + _0x4ceb81 + "' " : "";
    const v1647 = _0x3159ca ? v1640.oSNcL(" and simpleUrl like '%" + vRequire3.b64EncodeUnicode(_0x3159ca), "%' ") : "";
    const v1648 = _0xe4c0a1 + "CustomerPV";
    let v1649 = v1640.jeGvj;
    let v1650 = v1640.VdAMa;
    let v1651 = "";
    switch (_0x45f624) {
      case "distinct":
        v1651 = " and newStatus in ('n_uv', 'o_uv') ";
        v1650 = "select count(customerKey) as count";
        break;
      case "n_uv":
      case v1640.rHqwh:
        v1651 = " and newStatus='" + _0x45f624 + "' ";
        break;
      case "all":
      default:
        v1649 = v1640.jeGvj;
        v1650 = v1640.VdAMa;
        break;
    }
    const v1652 = v1649 + " from " + v1648 + " where " + v1643 + " " + v1644 + " " + v1645 + " " + v1646 + " " + v1647 + " " + v1651 + " order by happenDate desc limit " + (_0x584c4b - 1) * _0xa36b02 + "," + _0xa36b02;
    const v1653 = v1650 + " from " + v1648 + " where " + v1643 + " " + v1646 + " " + v1647 + " " + v1651;
    const v1654 = await v1338.query(v1652, {
      type: v1338.QueryTypes.SELECT
    });
    const v1655 = await v1338.query(v1653, {
      type: v1338.QueryTypes.SELECT
    });
    return {
      res: v1654,
      totalRes: v1655
    };
  }
  static async getSimplePvList(p2135) {
    const v1656 = {
      ANuFM: "yyyy-MM-dd 00:00:00",
      ZjqPI: " and happenDate>='",
      hsFKZ: function (p2136, p2137) {
        return p2136 * p2137;
      },
      tDuVF: function (p2138, p2139) {
        return p2138 - p2139;
      }
    };
    const {
      webMonitorId: _0x4f488a,
      userId: _0x39dcb5,
      page: _0x466de2,
      pageSize: _0xe0ac9
    } = p2135;
    const v1657 = _0x4f488a + "CustomerPV";
    const v1658 = _0x39dcb5 ? " and userId like '%" + _0x39dcb5 + "%' " : "";
    const v1659 = new Date().Format(v1656.ANuFM);
    const v1660 = v1656.ZjqPI + v1659 + "'";
    const v1661 = "select distinct(userId) as userId, happenDate, city, deviceName, os, browserName from " + v1657 + " where userId is not null " + v1658 + " " + v1660 + " order by happenDate desc limit " + v1656.hsFKZ(v1656.tDuVF(_0x466de2, 1), _0xe0ac9) + "," + _0xe0ac9;
    return await v1338.query(v1661, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getSevenDaysLeftCount(p2140, p2141) {
    const v1662 = {
      JDQKh: function (p2142, p2143) {
        return p2142 + p2143;
      },
      CfiaA: "select count(DISTINCT customerKey) as count from "
    };
    const vParseInt5 = parseInt(p2140.day, 10);
    const v1663 = vRequire3.addDays(1 - vParseInt5);
    const v1664 = p2141.replace(new RegExp("-", "g"), "");
    const v1665 = p2140.webMonitorId + "CustomerPV" + v1664;
    const v1666 = v1662.JDQKh(v1662.CfiaA, v1665) + " WHERE customerKeyCreatedDate='" + v1663 + "' ";
    return await v1338.query(v1666, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getYesterdayLeftPercent(p2144) {
    const v1667 = {
      bBubw: function (p2145, p2146) {
        return p2145 + p2146;
      }
    };
    const {
      webMonitorId: _0x563627,
      day: _0x426c76
    } = p2144;
    const v1668 = vRequire3.addDays(0 - _0x426c76);
    const v1669 = _0x563627 + "InfoCountByDay";
    const v1670 = v1667.bBubw("SELECT dayName, dayCount from " + v1669 + " WHERE createdAt>='" + v1668, "' and uploadType='") + UPLOAD_TYPE.UV_YESTERDAY_PER + "' order by dayName";
    return await v1338.query(v1670, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getYesterdayLeftCount(p2147, p2148) {
    const v1671 = {
      QOnCA: function (p2149, p2150) {
        return p2149 ^ p2150;
      },
      YBlBj: function (p2151, p2152) {
        return p2151 + p2152;
      },
      WbaxZ: function (p2153, p2154) {
        return p2153 + p2154;
      },
      GRSQU: function (p2155, p2156) {
        return p2155 + p2156;
      },
      uPtuG: " WHERE customerKeyCreatedDate='"
    };
    const v1672 = p2148 - 1;
    const v1673 = vRequire3.addDays(v1672);
    const v1674 = vRequire3.addDays(v1672);
    const v1675 = v1674.replace(new RegExp("-", "g"), "");
    const v1676 = p2147 + "CustomerPV" + v1675;
    const v1677 = vRequire3.addDays(v1672 + v1671.QOnCA(789851, 789850));
    const v1678 = v1677.replace(new RegExp("-", "g"), "");
    const v1679 = v1671.YBlBj(p2147, "CustomerPV") + v1678;
    let v1680 = v1671.WbaxZ(v1671.GRSQU(v1671.YBlBj("select count(DISTINCT customerKey) as count from ", v1676) + v1671.uPtuG, v1673) + "'  UNION select count(DISTINCT customerKey) as count from " + v1679, " WHERE customerKeyCreatedDate='") + v1673 + "' ";
    return await v1338.query(v1680, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getYesterdayLeftCountForDay(p2157, p2158) {
    const v1681 = {
      lkffL: function (p2159, p2160) {
        return p2159 + p2160;
      },
      VfodQ: function (p2161, p2162) {
        return p2161 + p2162;
      }
    };
    const v1682 = vRequire3.addDays(p2158);
    const v1683 = vRequire3.addDays(p2158);
    const v1684 = v1683.replace(new RegExp("-", "g"), "");
    const v1685 = v1681.lkffL(p2157, "CustomerPV") + v1684;
    let v1686 = v1681.VfodQ("select count(DISTINCT customerKey) as count from ", v1685) + " WHERE customerKeyCreatedDate='" + v1682 + "' ";
    return await v1338.query(v1686, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getOsAnalysis(p2163) {
    const v1687 = {
      HEneR: function (p2164, p2165) {
        return p2164 - p2165;
      },
      XgXyc: function (p2166, p2167) {
        return p2166 + p2167;
      },
      evILf: "' GROUP BY os"
    };
    const v1688 = vRequire3.addDays(v1687.HEneR(0, p2163.timeScope));
    let v1689 = v1687.XgXyc("SELECT os, count(os) from " + vRequire3.setTableName("CustomerPV") + " where createdAt>'" + v1688 + "' AND webMonitorId = '", p2163.webMonitorId) + v1687.evILf;
    return await v1338.query(v1689, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getCustomerCountByDayTime(p2168, p2169, p2170) {
    const v1690 = {
      GqAvv: function (p2171, p2172) {
        return p2171 + p2172;
      },
      dJYeS: "select count(DISTINCT(customerKey)) as count from ",
      qJZXB: "CustomerPV",
      ivMBg: " WHERE createdAt>'"
    };
    let v1691 = v1690.GqAvv(v1690.GqAvv(v1690.dJYeS + vRequire3.setTableName(v1690.qJZXB) + v1690.ivMBg + p2169, "' AND createdAt>'") + p2170 + "'  AND webMonitorId = '" + p2168, "'");
    return await v1338.query(v1691, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async calculatePvCountByHour(p2173, p2174, p2175, p2176) {
    const v1692 = {
      XAGaz: function (p2177, p2178) {
        return p2177 ^ p2178;
      },
      gKILG: function (p2179, p2180) {
        return p2179 === p2180;
      },
      BtakK: "CustomerPV"
    };
    const v1693 = vRequire3.addDays(-v1692.XAGaz(975664, 975665));
    let v1694 = vRequire7.setTableName("CustomerPV", 0, p2173);
    if (v1692.gKILG(p2175, v1693 + " 23:00:00")) {
      v1694 = vRequire7.setTableName(v1692.BtakK, v1692.XAGaz(393946, 393947), p2173);
    }
    const v1695 = p2174 ? " and firstUserParam='" + p2174 + "' " : "";
    const v1696 = p2175.substring(0, 13);
    let v1697 = "select count(dataId) as count from " + v1694 + " WHERE happenHour='" + v1696 + "' " + v1695;
    return await v1338.query(v1697, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async calculateNewCustomerCountByHour(p2181, p2182, p2183, p2184) {
    const v1698 = {
      DnVfl: function (p2185, p2186) {
        return p2185 === p2186;
      },
      MpADJ: " 23:00:00",
      jAbhH: function (p2187, p2188) {
        return p2187 + p2188;
      },
      JpKOR: function (p2189, p2190) {
        return p2189 + p2190;
      },
      BJGqd: function (p2191, p2192) {
        return p2191 + p2192;
      }
    };
    const v1699 = await C9.getUserIdType(p2181);
    const v1700 = vRequire3.addDays(-1);
    let v1701 = vRequire7.setTableName("CustomerPV", 0, p2181);
    if (v1698.DnVfl(p2183, v1700 + v1698.MpADJ)) {
      v1701 = vRequire7.setTableName("CustomerPV", 1, p2181);
    }
    const v1702 = p2182 ? " and firstUserParam='" + p2182 + "' " : "";
    const v1703 = p2183.substring(0, 13);
    let v1704 = v1698.jAbhH(v1698.JpKOR(v1698.BJGqd("select count(distinct ", v1699), ") as count from "), v1701) + " WHERE happenHour='" + v1703 + "' and (newStatus='n' or newStatus='n_uv' ) " + v1702;
    return await v1338.query(v1704, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async ["calculateTotalIPCountByHour"](p2193, p2194, p2195, p2196) {
    const v1705 = {
      ChsyP: "CustomerPV",
      DMwHM: function (p2197, p2198) {
        return p2197 ^ p2198;
      },
      MPKgy: function (p2199, p2200) {
        return p2199 + p2200;
      },
      zpQQD: function (p2201, p2202) {
        return p2201 + p2202;
      },
      JNhbI: function (p2203, p2204) {
        return p2203 + p2204;
      },
      JVXhz: " WHERE happenHour='"
    };
    const v1706 = vRequire3.addDays(-1);
    let v1707 = vRequire7.setTableName(v1705.ChsyP, v1705.DMwHM(786425, 786425), p2193);
    if (p2195 === v1705.MPKgy(v1706, " 23:00:00")) {
      v1707 = vRequire7.setTableName("CustomerPV", 1, p2193);
    }
    const v1708 = p2194 ? " and firstUserParam='" + p2194 + "' " : "";
    const v1709 = p2195.substring(0, 13);
    let v1710 = v1705.zpQQD(v1705.JNhbI(v1705.zpQQD("select count(distinct monitorIp) as count from ", v1707) + v1705.JVXhz, v1709) + "' and (newStatus='o_uv' or newStatus='n_uv' ) ", v1708);
    return await v1338.query(v1710, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async ["calculateTotalNewCustomerCountByHour"](p2205, p2206, p2207, p2208) {
    const v1711 = {
      AjTRO: function (p2209, p2210) {
        return p2209 ^ p2210;
      },
      KPTNz: " 23:00:00",
      UVwMl: function (p2211, p2212) {
        return p2211 + p2212;
      },
      AlCFm: function (p2213, p2214) {
        return p2213 + p2214;
      },
      JKVgm: ") as count from "
    };
    const v1712 = await C9.getUserIdType(p2205);
    const v1713 = vRequire3.addDays(-v1711.AjTRO(527978, 527979));
    let v1714 = vRequire7.setTableName("CustomerPV", 0, p2205);
    if (p2207 === v1713 + v1711.KPTNz) {
      v1714 = vRequire7.setTableName("CustomerPV", 1, p2205);
    }
    const v1715 = p2206 ? " and firstUserParam='" + p2206 + "' " : "";
    const v1716 = p2207.substring(0, 13);
    let v1717 = v1711.UVwMl(v1711.AlCFm("select count(distinct ", v1712) + v1711.JKVgm + v1714 + " WHERE happenHour='" + v1716 + "' and newStatus='n_uv'", v1715);
    return await v1338.query(v1717, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async calculateInstallCountByHour(p2215, p2216, p2217) {
    const v1718 = {
      fRzoa: " 23:00:00",
      UptWG: "CustomerPV",
      cLhAJ: function (p2218, p2219) {
        return p2218 + p2219;
      },
      vHFAt: ") as count from ",
      Livik: function (p2220, p2221) {
        return p2220 + p2221;
      },
      PaQOt: " WHERE happenHour='",
      CFcPc: function (p2222, p2223) {
        return p2222 > p2223;
      },
      XFuvy: function (p2224, p2225) {
        return p2224 ^ p2225;
      },
      kurER: function (p2226, p2227) {
        return p2226 ^ p2227;
      },
      zgukl: function (p2228, p2229) {
        return p2228 > p2229;
      },
      rTpor: function (p2230, p2231) {
        return p2230 ^ p2231;
      }
    };
    const v1719 = await C9.getUserIdType(p2215);
    const v1720 = vRequire3.addDays(-1);
    let v1721 = vRequire7.setTableName("CustomerPV", 0, p2215);
    if (p2216 === v1720 + v1718.fRzoa) {
      v1721 = vRequire7.setTableName(v1718.UptWG, 1, p2215);
    }
    const v1722 = p2216.substring(11, 13);
    let v1723 = v1718.cLhAJ(v1718.cLhAJ("select count(distinct " + v1719 + v1718.vHFAt, v1721) + " WHERE happenHour='" + v1722, "' ");
    const v1724 = await v1338.query(v1723, {
      type: v1338.QueryTypes.SELECT
    });
    let v1725 = v1718.cLhAJ(v1718.Livik("select count(distinct userId) as count from ", v1721), v1718.PaQOt) + v1722 + "' ";
    const v1726 = await v1338.query(v1725, {
      type: v1338.QueryTypes.SELECT
    });
    const v1727 = v1718.CFcPc(v1724.length, v1718.XFuvy(975707, 975707)) ? v1724[0].count : v1718.kurER(130167, 130167);
    const v1728 = v1718.zgukl(v1726.length, v1718.XFuvy(718380, 718380)) ? v1726[0].count : v1718.kurER(815671, 815671);
    let v1729 = 0;
    if (v1728 == 0) {
      v1729 = 0;
    } else {
      v1729 = (v1727 / v1728).toFixed(v1718.rTpor(899283, 899281));
    }
    return v1729;
  }
  static async ["calculateUvCountByHour"](p2232, p2233, p2234, p2235) {
    const v1730 = {
      WfIQX: function (p2236, p2237) {
        return p2236 ^ p2237;
      },
      nRQEu: function (p2238, p2239) {
        return p2238 ^ p2239;
      },
      JENee: function (p2240, p2241) {
        return p2240 + p2241;
      },
      gqOcS: function (p2242, p2243) {
        return p2242 ^ p2243;
      },
      hkrno: function (p2244, p2245) {
        return p2244 + p2245;
      },
      dIWGc: function (p2246, p2247) {
        return p2246 + p2247;
      },
      eNZBK: " WHERE happenHour='"
    };
    const v1731 = vRequire3.addDays(-v1730.WfIQX(683513, 683512));
    let v1732 = vRequire7.setTableName("CustomerPV", v1730.nRQEu(185194, 185194), p2232);
    if (p2234 === v1730.JENee(v1731, " 23:00:00")) {
      v1732 = vRequire7.setTableName("CustomerPV", 1, p2232);
    }
    const v1733 = p2233 ? " and firstUserParam='" + p2233 + "' " : "";
    const v1734 = p2234.substring(v1730.gqOcS(875545, 875545), 13);
    let v1735 = v1730.hkrno(v1730.dIWGc("select count(DISTINCT customerKey ) as count from ", v1732) + v1730.eNZBK + v1734 + "' ", v1733);
    return await v1338.query(v1735, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async calculateTotalUvCountByHour(p2248, p2249, p2250, p2251) {
    const v1736 = {
      uknqW: function (p2252, p2253) {
        return p2252 + p2253;
      },
      gyGIb: " WHERE happenHour='"
    };
    const v1737 = vRequire3.addDays(-1);
    let v1738 = vRequire7.setTableName("CustomerPV", 0, p2248);
    if (p2250 === v1737 + " 23:00:00") {
      v1738 = vRequire7.setTableName("CustomerPV", 1, p2248);
    }
    const v1739 = p2249 ? v1736.uknqW(" and firstUserParam='", p2249) + "' " : "";
    const v1740 = p2250.substring(0, 13);
    let v1741 = v1736.uknqW("select count(DISTINCT(customerKey)) as count from " + v1738, v1736.gyGIb) + v1740 + "' and ( newStatus='o_uv' or newStatus='n_uv' ) " + v1739;
    return await v1338.query(v1741, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async calculatePvCountByCustomerKeyForMonth(p2254) {
    const v1742 = {
      IbCjs: function (p2255, p2256) {
        return p2255 ^ p2256;
      },
      FwKan: function (p2257, p2258) {
        return p2257 ^ p2258;
      },
      RgYYm: " where ",
      aQFkU: function (p2259, p2260) {
        return p2259 ^ p2260;
      }
    };
    const v1743 = [];
    for (let v1744 = 0; v1744 < v1742.IbCjs(225982, 225969); v1744++) {
      let v1745 = vRequire3.addDays(v1742.FwKan(778833, 778833) - v1744);
      let v1746 = vRequire7.setTableName("CustomerPV", v1744);
      let v1747 = "select count(dataId) as count from " + v1746 + v1742.RgYYm + p2254;
      try {
        let v1748 = await v1338.query(v1747, {
          type: v1338.QueryTypes.SELECT
        });
        let v1749 = {
          day: v1745,
          count: parseInt(v1748[0].count, v1742.aQFkU(201095, 201101))
        };
        v1743.push(v1749);
      } catch (_0x19322a) {
        console.warn("[33m%s[0m", "运行时间不足15天，" + v1746 + " 这个表可能不存在，并不影响查询结果！");
      }
    }
    return v1743;
  }
  static async ["storeAliveCountIn5Minutes"](p2261) {
    const v1750 = {
      WnbjY: function (p2262, p2263) {
        return p2262 ^ p2263;
      },
      JQPyK: function (p2264, p2265) {
        return p2264 === p2265;
      }
    };
    const v1751 = new Date().Format("mm");
    const {
      webMonitorId: _0x58a6da,
      customerKey: _0x830d1c
    } = p2261;
    const v1752 = global.monitorInfo.aliveCountForProjectIn5Minutes;
    for (let v1753 = v1750.WnbjY(496666, 496666); v1753 < v1752.length; v1753++) {
      const v1754 = v1752[v1753];
      if (v1754.minute === v1751) {
        const v1755 = v1754.projectCountInfo[_0x58a6da];
        if (!v1755) {
          v1754.projectCountInfo[_0x58a6da] = [_0x830d1c];
        } else if (v1750.JQPyK(v1755.indexOf(_0x830d1c), -1)) {
          v1754.projectCountInfo[_0x58a6da].push(_0x830d1c);
        }
      }
    }
  }
  static async getPvUvInRealTimeByMinute(p2266, p2267, p2268) {
    const v1756 = {
      wEgZv: function (p2269, p2270) {
        return p2269 + p2270;
      },
      lXDlS: "select count(dataId) as pvCount, count(DISTINCT(customerKey)) as uvCount from ",
      ZSRlr: function (p2271, p2272) {
        return p2271 ^ p2272;
      }
    };
    let v1757 = v1756.wEgZv(v1756.wEgZv(v1756.wEgZv(v1756.lXDlS, vRequire7.setTableName("CustomerPV", v1756.ZSRlr(843351, 843351), p2266)) + " WHERE happenDate>='" + p2267 + "' AND happenDate<'", p2268), "'");
    return await v1338.query(v1757, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getNewUvInRealTimeByMinute(p2273, p2274, p2275) {
    const v1758 = {
      vXWPc: function (p2276, p2277) {
        return p2276 + p2277;
      },
      mLSdR: function (p2278, p2279) {
        return p2278 + p2279;
      },
      BWePO: "select count(DISTINCT(customerKey)) as newUvCount from ",
      rqrGS: " WHERE happenDate>='"
    };
    let v1759 = v1758.vXWPc(v1758.vXWPc(v1758.mLSdR(v1758.BWePO + vRequire7.setTableName("CustomerPV", 0, p2273), v1758.rqrGS) + p2274, "' AND happenDate<'"), p2275) + "' and newStatus='n_uv'";
    return await v1338.query(v1759, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getPvUvInRealTimeByEveryMinute(p2280, p2281, p2282) {
    const v1760 = {
      SvkHb: function (p2283, p2284) {
        return p2283 + p2284;
      }
    };
    let v1761 = v1760.SvkHb("select DATE_FORMAT(happenDate, '%H:%i') AS time,count(dataId) as pvCount, count(DISTINCT(customerKey)) as uvCount from ", vRequire7.setTableName("CustomerPV", 0, p2280)) + " WHERE happenDate>='" + p2281 + "' AND happenDate<'" + p2282 + "' group by time";
    return await v1338.query(v1761, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async getNewUvInRealTimeByEveryMinute(p2285, p2286, p2287) {
    const v1762 = {
      uTmnW: function (p2288, p2289) {
        return p2288 + p2289;
      },
      QBxDL: "CustomerPV",
      jdcdb: function (p2290, p2291) {
        return p2290 ^ p2291;
      }
    };
    let v1763 = v1762.uTmnW("select DATE_FORMAT(happenDate, '%H:%i') AS time, count(DISTINCT(customerKey)) as newUvCount from " + vRequire7.setTableName(v1762.QBxDL, v1762.jdcdb(177887, 177887), p2285) + " WHERE happenDate>='" + p2286 + "' AND happenDate<'" + p2287, "' and newStatus='n_uv' group by time");
    return await v1338.query(v1763, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async ["getAccessCalendar"]({
    startDate: _0x12b320,
    endDate: _0x793435,
    webMonitorId: _0x556d37,
    customerKeySql: _0x31b239
  }) {
    const v1764 = vRequire7.setTableName("CustomerPV", 0, _0x556d37);
    let v1765 = "\n      SELECT \n      toDate(happenDate) as date,\n      count(dataId) as count\n      FROM " + v1764 + "\n      WHERE happenDate>='" + _0x12b320 + "' and happenDate<='" + _0x793435 + "' " + _0x31b239 + "\n      GROUP BY date\n      ORDER BY date;\n    ";
    return await v1338.query(v1765, {
      type: v1338.QueryTypes.SELECT
    });
  }
  static async ["getLogCountForDay"](p2292, p2293) {
    const v1766 = {
      ufTTK: function (p2294, p2295) {
        return p2294 + p2295;
      },
      uEnTf: " 00:00:00"
    };
    const v1767 = vRequire3.addDays(p2293);
    const v1768 = v1766.ufTTK(v1767, v1766.uEnTf);
    const v1769 = v1766.ufTTK(v1767, " 23:59:59");
    const v1770 = vRequire7.setTableName("CustomerPV", p2293, p2292);
    let v1771 = "select count(dataId) as count from " + v1770 + " where happenDate>='" + v1768 + "' and happenDate<='" + v1769 + "'";
    return await v1338.query(v1771, {
      type: v1338.QueryTypes.SELECT
    });
  }
}
const v1772 = new vRequire2("../schema/pageLoadInfoByDayAndHour");
v1772.createTable();
class C29 {
  static async createPageLoadInfoByDayAndHour(p2296) {
    const v1773 = {
      XetuM: "`, ",
      xfYmM: function (p2297, p2298) {
        return p2297 + p2298;
      },
      kYXiY: "createdAt",
      eCDOg: "PageLoadInfoByDayAndHour"
    };
    let v1774 = "";
    let v1775 = "";
    const v1776 = ["id", "createdAt", "updatedAt", "infoType", "webMonitorId", "projectVersion", "dayName", "hourName", "hourValue"];
    v1776.forEach((p2299, p2300) => {
      if (p2300 == v1776.length - 1) {
        v1774 += "`" + p2299 + "`";
        let v1777 = p2296[p2299];
        if (v1777 != undefined) {
          v1775 += "'" + v1777 + "'";
        } else {
          v1775 += "DEFAULT";
        }
      } else {
        v1774 += "`" + p2299 + v1773.XetuM;
        let v1778 = p2296[p2299];
        switch (p2299) {
          case "id":
            v1778 = v1773.xfYmM(new Date().getTime(), vRequire3.getUuid());
            break;
          case v1773.kYXiY:
          case "updatedAt":
            v1778 = new Date().Format("yyyy-MM-dd hh:mm:ss");
            break;
          default:
            break;
        }
        if (v1778 != undefined) {
          v1775 += "'" + v1778 + "', ";
        } else {
          v1775 += "DEFAULT, ";
        }
      }
    });
    const v1779 = v1773.eCDOg;
    return await v1772.create(p2296, v1779);
  }
  static async ["getPerformanceDataForHour"](p2301, p2302, p2303, p2304) {
    const v1780 = {
      XTDHT: function (p2305, p2306) {
        return p2305 + p2306;
      },
      eISrV: " 00"
    };
    const v1781 = v1780.XTDHT(p2303, v1780.eISrV);
    const v1782 = p2304 + " 23";
    const v1783 = "PageLoadInfoByDayAndHour";
    let v1784 = "select hourName, hourValue from " + v1783 + " where webMonitorId='" + p2301 + "' and infoType='" + p2302 + "' and hourName>='" + v1781 + "' and hourName<='" + v1782 + "'";
    return await v1772.query(v1784, {
      type: v1772.QueryTypes.SELECT
    });
  }
  static async getPerformanceDataForDay(p2307, p2308) {
    const v1785 = "PageLoadInfoByDayAndHour";
    let v1786 = "select dayName, sum(hourValue) as dayValue from " + v1785 + " where webMonitorId='" + p2307 + "' and infoType='" + p2308 + "' group by dayName";
    return await v1772.query(v1786, {
      type: v1772.QueryTypes.SELECT
    });
  }
  static async getPageCompleteLoadedDataForHour(p2309, p2310, p2311, p2312) {
    const v1787 = "PageLoadInfoByDayAndHour";
    let v1788 = "select hourName, hourValue from " + v1787 + " where webMonitorId='" + p2309 + "' and infoType='" + p2310 + "' and hourName>='" + p2311 + "' and hourName<='" + p2312 + "'";
    return await v1772.query(v1788, {
      type: v1772.QueryTypes.SELECT
    });
  }
}
const v1789 = new vRequire2("../schema/screenShotInfo");
class C30 {
  static async createScreenShotInfo(p2313) {
    const v1790 = {
      xSrMo: function (p2314, p2315) {
        return p2314 == p2315;
      },
      nHNpu: function (p2316, p2317) {
        return p2316 + p2317;
      },
      voKiz: function (p2318, p2319) {
        return p2318 != p2319;
      },
      wfBWI: "`, ",
      jhixA: "updatedAt",
      PdEbh: function (p2320, p2321) {
        return p2320 ^ p2321;
      },
      pmiit: "DEFAULT, ",
      SFPmX: "sessionId"
    };
    const v1791 = {
      ...p2313
    };
    let v1792 = "";
    let v1793 = "";
    const v1794 = ["uploadType", "happenTime", "happenDate", "happenHour", "happenMinute", "webMonitorId", "customerKey", v1790.SFPmX, "simpleUrl", "completeUrl", "userId", "firstUserParam", "secondUserParam", "createdAt", "updatedAt", "id", "description", "screenInfo", "imgType"];
    v1794.forEach((p2322, p2323) => {
      if (v1790.xSrMo(p2323, v1794.length - 1)) {
        v1792 += v1790.nHNpu("`" + p2322, "`");
        let v1795 = v1791[p2322];
        if (v1790.voKiz(v1795, undefined)) {
          v1793 += "'" + v1795 + "'";
        } else {
          v1793 += "DEFAULT";
        }
      } else {
        v1792 += v1790.nHNpu("`" + p2322, v1790.wfBWI);
        let v1796 = v1791[p2322];
        switch (p2322) {
          case "id":
            v1796 = new Date().getTime() + vRequire3.getUuid();
            break;
          case "createdAt":
          case v1790.jhixA:
            v1796 = new Date().Format("yyyy-MM-dd hh:mm:ss");
            break;
          case "happenHour":
            v1796 = v1791.happenDate ? v1791.happenDate.substring(11, v1790.PdEbh(753591, 753594)) : new Date().Format("hh");
            break;
          case "happenMinute":
            v1796 = v1791.happenDate ? v1791.happenDate.substring(14, v1790.PdEbh(206264, 206248)) : new Date().Format("mm");
            break;
          default:
            break;
        }
        if (v1796 != undefined) {
          v1793 += v1790.nHNpu("'" + v1796, "', ");
        } else {
          v1793 += v1790.pmiit;
        }
      }
    });
    const v1797 = v1790.nHNpu(v1791.webMonitorId, "ScreenShotInfo");
    return await v1789.create(v1791, v1797);
  }
  static async ["getBehaviorsByUser"](p2324, p2325, p2326) {
    const v1798 = {
      unzTO: function (p2327, p2328) {
        return p2327 + p2328;
      },
      Elrji: "select * from ",
      dUCLT: " where ",
      QEQZk: " and "
    };
    const {
      timeScope: _0x5f45fe,
      webMonitorId: _0x3b1b6e
    } = p2326;
    let v1799 = v1798.unzTO(v1798.unzTO(v1798.Elrji + vRequire7.setTableName("ScreenShotInfo", _0x5f45fe, _0x3b1b6e) + v1798.dUCLT, p2324) + v1798.QEQZk, p2325);
    return await v1789.query(v1799, {
      type: v1789.QueryTypes.SELECT
    });
  }
}
const v1800 = new vRequire2("../schema/project");
v1800.createTable();
class C31 {
  static async createProject(p2329) {
    return await v1800.create(p2329);
  }
  static async updateProject(p2330, p2331) {
    await v1800.update({
      ...p2331
    }, {
      where: {
        webMonitorId: p2330
      },
      fields: Object.keys(p2331)
    });
    return true;
  }
  static async updateProjectForWebMonitorId(p2332, p2333) {
    await v1800.update({
      ...p2333
    }, {
      where: {
        webMonitorId: p2332
      },
      fields: Object.keys(p2333)
    });
    return true;
  }
  static async ["updateMonitorCodeByWebMonitorId"](p2334) {
    const {
      webMonitorId: _0x3fae83
    } = p2334;
    delete p2334.webMonitorId;
    await v1800.update({
      ...p2334
    }, {
      where: {
        webMonitorId: _0x3fae83
      },
      fields: Object.keys(p2334)
    });
    return true;
  }
  static async updateProjectByField(p2335) {
    const {
      webMonitorId: _0x555200
    } = p2335;
    delete p2335.webMonitorId;
    await v1800.update({
      ...p2335
    }, {
      where: {
        webMonitorId: _0x555200
      },
      fields: Object.keys(p2335)
    });
    return true;
  }
  static async getProjectList(p2336) {
    const {
      companyId: _0x22493d,
      webMonitorIds: _0x46d3b4
    } = p2336;
    let v1801 = " limit " + global.monitorInfo.purchaseCodeProjectCount;
    let v1802 = "select webMonitorId, projectName, env, healthScore, aliveCount, projectType, viewers, samplingRate, healthScore, createdAt from Project where companyId='" + _0x22493d + "' and webMonitorId in (" + _0x46d3b4 + ") and delStatus=0 " + v1801;
    return await v1800.query(v1802, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async getProjectListForStatus(p2337) {
    const v1803 = {
      qdaNG: function (p2338, p2339) {
        return p2338 + p2339;
      }
    };
    let v1804 = " limit " + global.monitorInfo.purchaseCodeProjectCount;
    let v1805 = v1803.qdaNG(v1803.qdaNG("select webMonitorId, projectName, projectType, viewers, delStatus, forbiddenTime, createdAt from Project where FIND_IN_SET(webMonitorId, '" + p2337.webMonitorIds, "') "), v1804);
    return await v1800.query(v1805, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async ["projectSimpleListByWebmonitorIds"](p2340) {
    const v1806 = {
      DBTCc: function (p2341, p2342) {
        return p2341 + p2342;
      }
    };
    const {
      webMonitorIds = ""
    } = p2340;
    if (!webMonitorIds) {
      return [];
    }
    let v1807 = "''";
    const v1808 = webMonitorIds.split(",");
    v1808.forEach(p2343 => {
      v1807 += ",'" + p2343 + "'";
    });
    let v1809 = " limit " + global.monitorInfo.purchaseCodeProjectCount;
    let v1810 = v1806.DBTCc("select webMonitorId, projectName, projectType, viewers, delStatus, forbiddenTime, createdAt from Project where webMonitorId in (" + v1807 + ") ", v1809);
    return await v1800.query(v1810, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async ["getProjectListByViewer"](p2344) {
    const v1811 = {
      dxYMD: function (p2345, p2346) {
        return p2345 + p2346;
      }
    };
    let v1812 = v1811.dxYMD(" limit ", global.monitorInfo.purchaseCodeProjectCount);
    let v1813 = "select webMonitorId, projectName, env, healthScore, aliveCount, healthScore, perfScore, uvCountForDay, projectType, viewers, samplingRate, healthScore, createdAt from Project where viewers like '%" + p2344 + "%' and delStatus=0 " + v1812;
    return await v1800.query(v1813, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async ["getProjectListByWebMonitorIds"](p2347) {
    const v1814 = {
      uIDeZ: " limit ",
      hMLAG: function (p2348, p2349) {
        return p2348 + p2349;
      },
      SVEWP: "') delStatus=0 "
    };
    let v1815 = v1814.uIDeZ + global.monitorInfo.purchaseCodeProjectCount;
    let v1816 = v1814.hMLAG("select * from Project where FIND_IN_SET(webMonitorId, '", p2347) + v1814.SVEWP + v1815;
    return await v1800.query(v1816, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async ["getWebMonitorIdList"]() {
    let v1817 = " limit " + global.monitorInfo.purchaseCodeProjectCount;
    let v1818 = "select webMonitorId from Project where delStatus=0 " + v1817;
    return await v1800.query(v1818, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async getAllProjectList() {
    const v1819 = {
      lawdi: function (p2350, p2351) {
        return p2350 + p2351;
      }
    };
    let v1820 = v1819.lawdi(" limit ", global.monitorInfo.purchaseCodeProjectCount);
    const v1821 = " where delStatus=0 " + v1820;
    let v1822 = v1819.lawdi("select companyId, webMonitorId, userTag, projectName, projectType, recordConfig, pageAggregation, httpAggregation, samplingRate, createdAt from Project ", v1821);
    return await v1800.query(v1822, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async getAllAliveProjectList() {
    const v1823 = {
      opHEJ: " limit ",
      QiZRb: " where delStatus=0 and isAliveCount=1 ",
      VxbgG: function (p2352, p2353) {
        return p2352 + p2353;
      }
    };
    let v1824 = v1823.opHEJ + global.monitorInfo.purchaseCodeProjectCount;
    const v1825 = v1823.QiZRb + v1824;
    let v1826 = v1823.VxbgG("select companyId, webMonitorId, userTag, projectName, projectType, recordConfig, pageAggregation, httpAggregation, samplingRate, createdAt from Project ", v1825);
    return await v1800.query(v1826, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async getAllProjectListForCompany(p2354) {
    const v1827 = {
      rICFj: " limit ",
      vINdo: function (p2355, p2356) {
        return p2355 + p2356;
      },
      xSMrg: "' and delStatus=0 ",
      ngPdH: "select companyId, webMonitorId, userTag, projectName, env, healthScore, projectType, aliveCount, recordConfig, pageAggregation, httpAggregation, samplingRate, createdAt from Project "
    };
    let v1828 = v1827.rICFj + global.monitorInfo.purchaseCodeProjectCount;
    const v1829 = v1827.vINdo(" where companyId='" + p2354, v1827.xSMrg) + v1828;
    let v1830 = v1827.ngPdH + v1829;
    return await v1800.query(v1830, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async ["getProjectCountByCompanyId"](p2357) {
    let v1831 = "select count(dataId) as count from Project where companyId='" + p2357 + "'";
    return await v1800.query(v1831, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async getAllProjectListByCompanyId(p2358, p2359, p2360, p2361, p2362) {
    const v1832 = {
      SbapI: function (p2363, p2364) {
        return p2363 * p2364;
      },
      lQlbq: function (p2365, p2366) {
        return p2365 ^ p2366;
      },
      WMWPS: function (p2367, p2368) {
        return p2367 + p2368;
      }
    };
    const v1833 = " where companyId='" + p2358 + "' order by " + p2359 + " " + p2360 + " ";
    const v1834 = " limit " + v1832.SbapI(p2361 - v1832.lQlbq(571766, 571767), p2362) + "," + p2362 + " ";
    let v1835 = v1832.WMWPS("select companyId, webMonitorId, healthScore, projectName, projectType, createdAt from Project " + v1833, v1834);
    return await v1800.query(v1835, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async getAllWebmonitorIdByCompanyId(p2369) {
    let v1836 = "select webMonitorId from Project where companyId='" + p2369 + "'";
    return await v1800.query(v1836, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async getAllProjectListWithAlarm() {
    let v1837 = " limit " + global.monitorInfo.purchaseCodeProjectCount;
    let v1838 = "select webMonitorId, projectName, projectType, alarmRuleId, alarmMembers, chooseHook from Project where delStatus=0 " + v1837;
    return await v1800.query(v1838, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async ["getProjectCount"]() {
    const v1839 = {
      cjJKp: function (p2370, p2371) {
        return p2370 + p2371;
      },
      tUoIf: " limit "
    };
    let v1840 = v1839.cjJKp(v1839.tUoIf, global.monitorInfo.purchaseCodeProjectCount);
    let v1841 = "select count(webMonitorId) as count from Project where delStatus=0 " + v1840;
    return await v1800.query(v1841, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async getProjectDetailList(p2372) {
    const v1842 = {
      qLNgr: function (p2373, p2374) {
        return p2373 + p2374;
      },
      EuAfN: "select * from Project where userId='"
    };
    let v1843 = " limit " + global.monitorInfo.purchaseCodeProjectCount;
    const {
      userId: _0x328a03
    } = p2372;
    let v1844 = v1842.qLNgr(v1842.EuAfN + _0x328a03 + "' and delStatus=0 ", v1843);
    return await v1800.query(v1844, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async getProjectDetailListBySearch(p2375) {
    const v1845 = {
      snPXd: " limit ",
      tSepI: function (p2376, p2377) {
        return p2376 === p2377;
      },
      qnzcM: function (p2378, p2379) {
        return p2378 + p2379;
      }
    };
    let v1846 = v1845.snPXd + global.monitorInfo.purchaseCodeProjectCount;
    const {
      companyId: _0x46cbcf,
      appStatus: _0x3a8755,
      appType: _0xa22b8a,
      searchName: _0x36d4e6,
      env: _0x16533a
    } = p2375;
    let v1847 = "";
    if (_0x3a8755 === "0") {
      v1847 = "";
    } else {
      v1847 = " and recording='" + _0x3a8755 + "'";
    }
    const v1848 = _0xa22b8a === "all" ? "" : " and projectType='" + _0xa22b8a + "'";
    const v1849 = v1845.tSepI(_0x36d4e6, "") ? "" : " and projectName like '%" + _0x36d4e6 + "%'";
    const v1850 = _0x16533a === "all" ? "" : " and env = '" + _0x16533a + "'";
    let v1851 = v1845.qnzcM(v1845.qnzcM("select webMonitorId, projectName, projectType, recordConfig, recording, healthScore, perfScore, aliveCount, uvCountForDay, createdAt from Project where companyId='" + _0x46cbcf + "' and delStatus=0 " + v1847, v1848) + v1849 + v1850, v1846);
    return await v1800.query(v1851, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async getProjectByUserAndPName(p2380, p2381) {
    let v1852 = "select webMonitorId from Project where userId='" + p2380 + "' and webMonitorId='" + p2381 + "'";
    return await v1800.query(v1852, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async ["getProjectDetail"](p2382) {
    return await v1800.findOne({
      where: {
        webMonitorId: p2382
      }
    });
  }
  static async ["getProjectDetailForWebMonitorId"](p2383) {
    let v1853 = "select * from Project where webMonitorId='" + p2383 + "'";
    return await v1800.query(v1853, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async getFlowSwitchWebMonitorIds(p2384) {
    let v1854 = "select webMonitorId, flowSwitch from Project where webMonitorId in (" + p2384 + ")";
    return await v1800.query(v1854, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async ["openFlowSwitch"](p2385) {
    let v1855 = "select webMonitorId, flowSwitch from Project where webMonitorId in (" + webMonitorIdsSql + ")";
    return await v1800.query(v1855, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async ["getProjectSimpleDetail"](p2386) {
    let v1856 = "select webMonitorId, projectName from Project where webMonitorId='" + p2386 + "'";
    return await v1800.query(v1856, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async getProjectByAlarmRuleId(p2387) {
    const v1857 = {
      ckyoS: function (p2388, p2389) {
        return p2388 + p2389;
      }
    };
    let v1858 = v1857.ckyoS("select from Project where alarmRuleId='", p2387) + "'";
    return await v1800.query(v1858, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async ["getUserTags"](p2390) {
    let v1859 = "select userTag from Project where webMonitorId='" + p2390 + "'";
    return await v1800.query(v1859, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async ["getProjectConfig"](p2391) {
    let v1860 = "select recordConfig, pageAggregation, httpAggregation from Project where webMonitorId='" + p2391 + "'";
    return await v1800.query(v1860, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async ["getProjectHealthByScore"](p2392, p2393) {
    let v1861 = "select count(webMonitorId) as count from Project where delStatus != 1 and healthScore>=" + p2392 + " and healthScore<=" + p2393;
    return await v1800.query(v1861, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async ["deleteProject"](p2394) {
    await v1800.destroy({
      where: {
        webMonitorId: p2394
      }
    });
    return true;
  }
  static async ["deleteProjectByWebmonitorId"](p2395) {
    await v1800.destroy({
      where: {
        webMonitorId: p2395
      }
    });
    return true;
  }
  static async ["getProjectByWebMonitorId"](p2396) {
    const v1862 = {
      FQmSN: function (p2397, p2398) {
        return p2397 + p2398;
      }
    };
    let v1863 = v1862.FQmSN("select * from Project where webMonitorId='", p2396) + "'";
    return await v1800.query(v1863, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async getProjectByWebMonitorIds(p2399) {
    const v1864 = {
      XevpI: function (p2400, p2401) {
        return p2400 ^ p2401;
      },
      uBifr: "select * from Project where webMonitorId in (",
      mXbQO: ") and delStatus=0"
    };
    const v1865 = p2399.split(",");
    let v1866 = "";
    v1865.forEach((p2402, p2403) => {
      if (p2403 === v1865.length - v1864.XevpI(963871, 963870)) {
        v1866 += "'" + p2402 + "'";
      } else {
        v1866 += "'" + p2402 + "',";
      }
    });
    let v1867 = v1864.uBifr + v1866 + v1864.mXbQO;
    return await v1800.query(v1867, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async getStartListByWebMonitorId(p2404) {
    const v1868 = {
      NDjjF: function (p2405, p2406) {
        return p2405 + p2406;
      }
    };
    let v1869 = v1868.NDjjF("select startList from Project where webMonitorId='", p2404) + "'";
    return await v1800.query(v1869, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async checkProjectName(p2407) {
    const v1870 = {
      hynBB: function (p2408, p2409) {
        return p2408 + p2409;
      }
    };
    let v1871 = v1870.hynBB("select count(dataId) as count from Project where projectName='" + p2407, "'");
    return await v1800.query(v1871, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async checkProjectCount(p2410) {
    const v1872 = {
      lAVor: function (p2411, p2412) {
        return p2411 ^ p2412;
      },
      GbIeG: function (p2413, p2414) {
        return p2413 < p2414;
      },
      fRLzA: function (p2415, p2416) {
        return p2415 ^ p2416;
      },
      HXDsx: "CustomerPV",
      AmQkk: function (p2417, p2418) {
        return p2417 + p2418;
      }
    };
    let v1873 = "";
    for (let v1874 = 0; v1874 < v1872.lAVor(222929, 222934); v1874++) {
      if (v1872.GbIeG(v1874, v1872.fRLzA(491625, 491631))) {
        v1873 += "select count(dataId) as count from " + vRequire7.setTableName(v1872.HXDsx, v1874) + " where GROUP BY webMonitorId UNION ";
      } else {
        v1873 += v1872.AmQkk("select count(dataId) as count from ", vRequire7.setTableName(v1872.HXDsx, v1874)) + " where GROUP BY webMonitorId";
      }
    }
    return await v1800.query(v1873, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async ["getProjectCountByType"]() {
    let v1875 = "select projectType, count(dataId) as count from Project where delStatus != 1 GROUP BY projectType";
    return await v1800.query(v1875, {
      type: v1800.QueryTypes.SELECT
    });
  }
  static async getProjectCountByForbidden() {
    let v1876 = "select count(webMonitorId) as count from Project where delStatus = 1";
    return await v1800.query(v1876, {
      type: v1800.QueryTypes.SELECT
    });
  }
}
const v1877 = new vRequire2("../schema/team");
v1877.createTable();
class C32 {
  static async createTeam(p2419) {
    return await v1877.create({
      ...p2419
    });
  }
  static async ["deleteTeam"](p2420) {
    await v1877.destroy({
      where: {
        dataId: p2420
      }
    });
    return true;
  }
  static async ["getTeamDetail"](p2421) {
    return await v1877.findOne({
      where: {
        dataId: p2421
      }
    });
  }
  static async ["getTeamDetailByName"](p2422) {
    return await v1877.findOne({
      where: {
        teamName: p2422
      }
    });
  }
  static async ["updateTeam"](p2423, p2424) {
    await v1877.update({
      ...p2424
    }, {
      where: {
        dataId: p2423
      },
      fields: Object.keys(p2424)
    });
    return true;
  }
  static async getTeamList(p2425, p2426) {
    const v1878 = {
      RHEMp: function (p2427, p2428) {
        return p2427 === p2428;
      },
      zCEmh: "select * from Team where members like '%"
    };
    let v1879 = "";
    if (v1878.RHEMp(p2426, "admin") || p2426 === "superAdmin") {
      v1879 = "select * from Team";
    } else {
      v1879 = v1878.zCEmh + p2425 + "%'";
    }
    return await v1877.query(v1879, {
      type: v1877.QueryTypes.SELECT
    });
  }
  static async getAllTeamList() {
    let v1880 = "select * from Team";
    return await v1877.query(v1880, {
      type: v1877.QueryTypes.SELECT
    });
  }
  static async getTeamMembersByWebMonitorId(p2429) {
    let v1881 = "select leaderId, members from Team where FIND_IN_SET('" + p2429 + "', webMonitorIds)";
    return await v1877.query(v1881, {
      type: v1877.QueryTypes.SELECT
    });
  }
  static async findTeamListByTeamId(p2430) {
    const v1882 = {
      upbaL: function (p2431, p2432) {
        return p2431 + p2432;
      }
    };
    let v1883 = v1882.upbaL("select * from Team where dataId='" + p2430, "'");
    return await v1877.query(v1883, {
      type: v1877.QueryTypes.SELECT
    });
  }
  static async ["findTeamListByLeaderId"](p2433) {
    const v1884 = {
      FDluV: function (p2434, p2435) {
        return p2434 + p2435;
      },
      cwHHD: "select * from Team where FIND_IN_SET('",
      VaRmv: "', members)"
    };
    let v1885 = v1884.FDluV(v1884.cwHHD + p2433, v1884.VaRmv);
    return await v1877.query(v1885, {
      type: v1877.QueryTypes.SELECT
    });
  }
  static async ["checkTeamLeader"](p2436, p2437) {
    let v1886 = "select * from Team where dataId='" + p2436 + "' and leaderId='" + p2437 + "'";
    return await v1877.query(v1886, {
      type: v1877.QueryTypes.SELECT
    });
  }
  static async checkTeamMember(p2438, p2439) {
    let v1887 = "select * from Team where dataId='" + p2438 + "' and  FIND_IN_SET('" + p2439 + "', members)";
    return await v1877.query(v1887, {
      type: v1877.QueryTypes.SELECT
    });
  }
}
const v1888 = new vRequire2("../schema/resourceLoadInfo");
class C33 {
  static async ["createResourceLoadInfo"](p2440) {
    const v1889 = {
      vrrpN: function (p2441, p2442) {
        return p2441 ^ p2442;
      },
      UpfCZ: function (p2443, p2444) {
        return p2443 + p2444;
      },
      UuEUv: function (p2445, p2446) {
        return p2445 != p2446;
      },
      ueEra: "createdAt",
      OAZOy: "happenMinute",
      ykGSR: "DEFAULT, "
    };
    let v1890 = "";
    let v1891 = "";
    const v1892 = ["uploadType", "happenTime", "happenDate", "happenHour", "happenMinute", "webMonitorId", "sessionId", "projectVersion", "customerKey", "simpleUrl", "completeUrl", "userId", "firstUserParam", "secondUserParam", "createdAt", "updatedAt", "id", "sourceUrl", "elementType", "status"];
    v1892.forEach((p2447, p2448) => {
      if (p2448 == v1892.length - v1889.vrrpN(832650, 832651)) {
        v1890 += v1889.UpfCZ("`" + p2447, "`");
        let v1893 = p2440[p2447];
        if (v1889.UuEUv(v1893, undefined)) {
          v1891 += "'" + v1893 + "'";
        } else {
          v1891 += "DEFAULT";
        }
      } else {
        v1890 += v1889.UpfCZ("`", p2447) + "`, ";
        let v1894 = p2440[p2447];
        switch (p2447) {
          case "id":
            v1894 = new Date().getTime() + vRequire3.getUuid();
            break;
          case v1889.ueEra:
          case "updatedAt":
            v1894 = new Date().Format("yyyy-MM-dd hh:mm:ss");
            break;
          case "happenHour":
            v1894 = p2440.happenDate ? p2440.happenDate.substring(11, v1889.vrrpN(358196, 358201)) : new Date().Format("hh");
            break;
          case v1889.OAZOy:
            v1894 = p2440.happenDate ? p2440.happenDate.substring(14, 16) : new Date().Format("mm");
            break;
          default:
            break;
        }
        if (v1889.UuEUv(v1894, undefined)) {
          v1891 += v1889.UpfCZ("'", v1894) + "', ";
        } else {
          v1891 += v1889.ykGSR;
        }
      }
    });
    const v1895 = p2440.webMonitorId + "ResourceLoadInfo";
    return await v1888.create(p2440, v1895);
  }
  static async createResourceLoadInfos(p2449) {
    const v1896 = {
      aICoX: "ResourceLoadInfo",
      SDXov: function (p2450, p2451) {
        return p2450 + p2451;
      }
    };
    if (p2449.length === 0) {
      return;
    }
    const v1897 = p2449[0];
    const v1898 = v1897.webMonitorId;
    const v1899 = v1898 + v1896.aICoX;
    const {
      keys: _0x4f9cfb,
      valueSql: _0x367670
    } = vRequire7.handleStructureSql(v1888.schema.Columns.structure, p2449);
    let v1900 = v1896.SDXov("INSERT INTO " + v1899 + " (", _0x4f9cfb) + ") VALUES " + _0x367670;
    return await v1888.execSql(v1900);
  }
  static async getResourceLoadInfoByUserId(p2452, p2453, p2454) {
    const v1901 = {
      fMWFy: function (p2455, p2456) {
        return p2455 + p2456;
      },
      bIKvp: function (p2457, p2458) {
        return p2457 + p2458;
      },
      oClGX: "ResourceLoadInfo",
      ParzQ: "and"
    };
    const {
      timeScope: _0x4e2981,
      webMonitorId: _0x3bc216
    } = p2454;
    let v1902 = v1901.fMWFy(v1901.bIKvp("select * from ", vRequire7.setTableName(v1901.oClGX, _0x4e2981, _0x3bc216)) + " where " + p2453 + v1901.ParzQ, p2452);
    return await v1888.query(v1902, {
      type: v1888.QueryTypes.SELECT
    });
  }
  static async getResourceLoadInfoListByDay(p2459) {
    const v1903 = {
      qHSXc: function (p2460, p2461) {
        return p2460 + p2461;
      },
      dZwiT: " 23:59:59",
      coMKa: "ResourceLoadInfo",
      ImzIY: function (p2462, p2463) {
        return p2462 + p2463;
      }
    };
    const {
      simpleUrl: _0x2c1de8,
      timeType: _0x312d56
    } = p2459;
    const v1904 = vRequire3.addDays(0 - _0x312d56);
    const v1905 = v1903.qHSXc(v1904, " 00:00:00");
    const v1906 = v1904 + v1903.dZwiT;
    const v1907 = " where happenDate>='" + v1905 + "' and happenDate<='" + v1906 + "' ";
    const v1908 = vRequire7.setTableName(v1903.coMKa, _0x312d56, p2459.webMonitorId);
    const v1909 = v1903.ImzIY("select sourceUrl, COUNT(sourceUrl) as count from " + v1908 + "  ", v1907) + " GROUP BY sourceUrl order by count desc limit 20";
    return await v1888.query(v1909, {
      type: v1888.QueryTypes.SELECT
    });
  }
  static async ["getResourceErrorLatestTime"](p2464, p2465) {
    const v1910 = {
      FyKiV: function (p2466, p2467) {
        return p2466 + p2467;
      },
      RhgRx: "select createdAt, happenTime from ",
      uEAnS: " where ",
      cmqCf: " and sourceUrl= '"
    };
    const {
      simpleUrl: _0x20face,
      timeType: _0x1b9fdd
    } = p2465;
    const v1911 = vRequire7.setTableName("ResourceLoadInfo", _0x1b9fdd, p2465.webMonitorId);
    const v1912 = vRequire3.addDays(0 - _0x1b9fdd);
    const v1913 = v1912 + " 00:00:00";
    const v1914 = v1912 + " 23:59:59";
    const v1915 = " happenDate>='" + v1913 + "' and happenDate<='" + v1914 + "' ";
    const v1916 = v1910.FyKiV(v1910.FyKiV(v1910.FyKiV(v1910.RhgRx, v1911), v1910.uEAnS), v1915) + v1910.cmqCf + p2464 + "' ORDER BY happenTime desc limit 1";
    return await v1888.query(v1916, {
      type: v1888.QueryTypes.SELECT
    });
  }
  static async ["getPageCountByResourceError"](p2468, p2469) {
    const v1917 = {
      hnQTF: function (p2470, p2471) {
        return p2470 - p2471;
      },
      RzoZY: function (p2472, p2473) {
        return p2472 ^ p2473;
      },
      HKGfR: function (p2474, p2475) {
        return p2474 + p2475;
      },
      XXeng: " 00:00:00"
    };
    const {
      simpleUrl: _0x4777a5,
      timeType: _0x2727a8
    } = p2469;
    const v1918 = vRequire7.setTableName("ResourceLoadInfo", _0x2727a8, p2469.webMonitorId);
    const v1919 = vRequire3.addDays(v1917.hnQTF(v1917.RzoZY(462011, 462011), _0x2727a8));
    const v1920 = v1917.HKGfR(v1919, v1917.XXeng);
    const v1921 = v1919 + " 23:59:59";
    const v1922 = " happenDate>='" + v1920 + "' and happenDate<='" + v1921 + "' ";
    return await v1888.query(v1917.HKGfR(v1917.HKGfR(v1917.HKGfR("SELECT count(DISTINCT simpleUrl) as pageCount from " + v1918, " where "), v1922) + " and sourceUrl='" + p2468, "'"), {
      type: v1888.QueryTypes.SELECT
    });
  }
  static async getCustomerCountByResourceError(p2476, p2477) {
    const v1923 = {
      OaaMn: function (p2478, p2479) {
        return p2478 + p2479;
      },
      yVMvb: " and sourceUrl='"
    };
    const {
      simpleUrl: _0x2b1d69,
      timeType: _0x3d1d02
    } = p2477;
    const v1924 = vRequire7.setTableName("ResourceLoadInfo", _0x3d1d02, p2477.webMonitorId);
    const v1925 = vRequire3.addDays(0 - _0x3d1d02);
    const v1926 = v1923.OaaMn(v1925, " 00:00:00");
    const v1927 = v1925 + " 23:59:59";
    const v1928 = " happenDate>='" + v1926 + "' and happenDate<='" + v1927 + "' ";
    return await v1888.query("SELECT count(DISTINCT (customerKey)) as customerCount from " + v1924 + " where " + v1928 + v1923.yVMvb + p2476 + "'", {
      type: v1888.QueryTypes.SELECT
    });
  }
  static async ["getResourceErrorCountByDay"](p2480, p2481, p2482) {
    const v1929 = {
      VkiZU: "ResourceLoadInfo"
    };
    const v1930 = p2481 + " 00:00:00";
    const v1931 = p2482 + " 23:59:59";
    const v1932 = " happenDate>='" + v1930 + "' and happenDate<='" + v1931 + "' ";
    const v1933 = p2480 + v1929.VkiZU;
    const v1934 = "SELECT DATE_FORMAT(happenDate,'%Y-%m-%d') as day, count(dataId) as count, count(DISTINCT customerKey) as uvCount from " + v1933 + " where " + v1932 + " group by day";
    return await v1888.query(v1934, {
      type: v1888.QueryTypes.SELECT
    });
  }
  static async ["getResourceErrorCountForDay"](p2483, p2484) {
    const v1935 = {
      Inntv: function (p2485, p2486) {
        return p2485 + p2486;
      }
    };
    const v1936 = vRequire3.addDays(p2484);
    const v1937 = v1935.Inntv(v1936, " 00:00:00");
    const v1938 = v1936 + " 23:59:59";
    let v1939 = p2483 + "ResourceLoadInfo";
    let v1940 = "select count(dataId) as count from " + v1939 + " WHERE happenDate>='" + v1937 + "' and happenDate<='" + v1938 + "'";
    return await v1888.query(v1940, {
      type: v1888.QueryTypes.SELECT
    });
  }
  static async ["getResourceErrorInfoListByHour"](p2487, p2488, p2489) {
    const v1941 = {
      QRXJA: function (p2490, p2491) {
        return p2490 + p2491;
      },
      xCwju: "SELECT count(dataId) as count from ResourceLoadInfo where createdAt > '"
    };
    return await v1888.query(v1941.QRXJA(v1941.xCwju + p2487 + "' and createdAt < '", p2488) + "'", {
      type: v1888.QueryTypes.SELECT
    });
  }
  static async ["getResourceLoadErrorInfoListByHour"](p2492) {
    const {
      timeSize: _0x3b50ed,
      webMonitorId: _0x4215d6
    } = p2492;
    let v1942 = vRequire7.setTableName("ResourceLoadInfo", _0x3b50ed, _0x4215d6);
    const v1943 = vRequire3.handleTimeScopeSql(0 - _0x3b50ed, 0);
    const v1944 = "SELECT happenHour as hour, count(dataId) as count from " + v1942 + " WHERE " + v1943 + " GROUP BY happenHour";
    return await v1888.query(v1944, {
      type: v1888.QueryTypes.SELECT
    });
  }
  static async getResourceLoadErrorInfoListSevenDayAgoByHour(p2493) {
    const {
      timeSize: _0x4bf671,
      scope = 1,
      webMonitorId: _0x4ca9e8
    } = p2493;
    const v1945 = vRequire3.handleTimeScopeSql(0 - _0x4bf671, scope);
    let v1946 = vRequire7.setTableName("ResourceLoadInfo", _0x4bf671, _0x4ca9e8);
    const v1947 = "SELECT happenHour as hour, count(dataId) as count from " + v1946 + " WHERE " + v1945 + " GROUP BY happenHour";
    return await v1888.query(v1947, {
      type: v1888.QueryTypes.SELECT
    });
  }
  static async ["calculateResourceErrorCountByHour"](p2494, p2495, p2496, p2497) {
    const v1948 = {
      PyBai: function (p2498, p2499) {
        return p2498 ^ p2499;
      },
      kVfqN: " 23:00:00",
      GFXag: function (p2500, p2501) {
        return p2500 + p2501;
      }
    };
    const v1949 = vRequire3.addDays(-1);
    let v1950 = vRequire7.setTableName("ResourceLoadInfo", v1948.PyBai(965890, 965890), p2494);
    if (p2496 === v1949 + v1948.kVfqN) {
      v1950 = vRequire7.setTableName("ResourceLoadInfo", 1, p2494);
    }
    let v1951 = v1948.GFXag(v1948.GFXag("select count(dataId) as count from " + v1950, " WHERE happenDate>='"), p2496) + "' AND happenDate<'" + p2497 + "'";
    return await v1888.query(v1951, {
      type: v1888.QueryTypes.SELECT
    });
  }
  static async ["calculateResourceErrorUvCountByHour"](p2502, p2503, p2504, p2505) {
    const v1952 = {
      IKmYo: function (p2506, p2507) {
        return p2506 ^ p2507;
      },
      HvKhE: " 23:00:00",
      yjXXT: ") as count from "
    };
    const v1953 = await C9.getUserIdType(p2502);
    const v1954 = vRequire3.addDays(-1);
    let v1955 = vRequire7.setTableName("ResourceLoadInfo", v1952.IKmYo(379075, 379075), p2502);
    if (p2504 === v1954 + v1952.HvKhE) {
      v1955 = vRequire7.setTableName("ResourceLoadInfo", 1, p2502);
    }
    let v1956 = "select count(distinct " + v1953 + v1952.yjXXT + v1955 + " WHERE happenDate>='" + p2504 + "' AND happenDate<'" + p2505 + "'";
    return await v1888.query(v1956, {
      type: v1888.QueryTypes.SELECT
    });
  }
  static async calculateResourceErrorCountByDay(p2508, p2509) {
    const v1957 = {
      CrlYC: " 00:00:00",
      TwrdQ: " 23:59:59"
    };
    let v1958 = p2508 + "ResourceLoadInfo";
    const v1959 = vRequire3.addDays(p2509);
    const v1960 = v1959 + v1957.CrlYC;
    const v1961 = v1959 + v1957.TwrdQ;
    let v1962 = "select count(dataId) as count from " + v1958 + " where happenDate>='" + v1960 + "' and happenDate<='" + v1961 + "'";
    return await v1888.query(v1962, {
      type: v1888.QueryTypes.SELECT
    });
  }
  static async getResourceErrorUserCountToday(p2510, p2511) {
    const v1963 = {
      xhJlr: " 00:00:00",
      hbyuP: " 23:59:59",
      gmlNN: "ResourceLoadInfo"
    };
    const v1964 = await C9.getUserIdType(p2510);
    const v1965 = vRequire3.addDays(p2511);
    const v1966 = v1965 + v1963.xhJlr;
    const v1967 = v1965 + v1963.hbyuP;
    const v1968 = vRequire7.setTableName(v1963.gmlNN, p2511, p2510);
    let v1969 = "select count(distinct " + v1964 + ") as count from " + v1968 + " WHERE happenDate>='" + v1966 + "' and happenDate<='" + v1967 + "'";
    return await v1888.query(v1969, {
      type: v1888.QueryTypes.SELECT
    });
  }
  static async ["getResourceErrorUserCountByMinute"](p2512, p2513) {
    const v1970 = {
      ZDKfA: function (p2514, p2515) {
        return p2514 * p2515;
      },
      oVXKq: function (p2516, p2517) {
        return p2516 ^ p2517;
      }
    };
    const v1971 = new Date().getTime();
    const v1972 = new Date(v1971 - v1970.ZDKfA(p2513, v1970.oVXKq(986033, 985997)) * 1000).Format("yyyy-MM-dd hh:mm 00");
    const v1973 = new Date(v1971).Format("yyyy-MM-dd hh:mm:00");
    const v1974 = await C9.getUserIdType(p2512);
    const vV1972 = v1972;
    const vV1973 = v1973;
    const v1975 = vRequire7.setTableName("ResourceLoadInfo", 0, p2512);
    let v1976 = "select count(distinct " + v1974 + ") as count from " + v1975 + " WHERE happenDate>='" + vV1972 + "' and happenDate<='" + vV1973 + "'";
    return await v1888.query(v1976, {
      type: v1888.QueryTypes.SELECT
    });
  }
  static async getResourceErrorUserCountByHour(p2518, p2519, p2520) {
    const v1977 = {
      YBeQA: function (p2521, p2522) {
        return p2521 + p2522;
      },
      kzoxu: "select count("
    };
    const v1978 = await C9.getUserIdType(p2518);
    const v1979 = vRequire3.addDays(-1);
    let v1980 = vRequire7.setTableName("ResourceLoadInfo", 0, p2518);
    if (p2519 === v1979 + " 23:00:00") {
      v1980 = vRequire7.setTableName("ResourceLoadInfo", 1, p2518);
    }
    let v1981 = v1977.YBeQA(v1977.YBeQA(v1977.YBeQA(v1977.kzoxu + v1978, ") as count, count(distinct "), v1978) + ") as uvCount  from " + v1980 + " WHERE happenDate>='" + p2519 + "' AND happenDate<'", p2520) + "'";
    return await v1888.query(v1981, {
      type: v1888.QueryTypes.SELECT
    });
  }
  static async ["getResourceErrorCountInRealTimeByMinute"](p2523, p2524, p2525) {
    const v1982 = {
      QvulC: function (p2526, p2527) {
        return p2526 + p2527;
      },
      mLihB: function (p2528, p2529) {
        return p2528 + p2529;
      },
      qCxzu: "select count(dataId) as resourceErrorCount from "
    };
    let v1983 = v1982.QvulC(v1982.mLihB(v1982.qCxzu + vRequire7.setTableName("ResourceLoadInfo", 0, p2523), " WHERE happenDate>='") + p2524 + "' AND happenDate<'", p2525) + "'";
    return await v1888.query(v1983, {
      type: v1888.QueryTypes.SELECT
    });
  }
  static async ["getResourceErrorCountInRealTimeByEveryMinute"](p2530, p2531, p2532) {
    const v1984 = {
      xDLbX: function (p2533, p2534) {
        return p2533 + p2534;
      },
      HoKmD: function (p2535, p2536) {
        return p2535 + p2536;
      },
      ZTNnX: "select DATE_FORMAT(happenDate, '%H:%i') AS time, count(dataId) as resourceErrorCount from ",
      mKwaH: " WHERE happenDate>='"
    };
    let v1985 = v1984.xDLbX(v1984.HoKmD(v1984.HoKmD(v1984.ZTNnX + vRequire7.setTableName("ResourceLoadInfo", 0, p2530), v1984.mKwaH) + p2531, "' AND happenDate<'") + p2532, "' group by time");
    return await v1888.query(v1985, {
      type: v1888.QueryTypes.SELECT
    });
  }
  static async getLogCountForDay(p2537, p2538) {
    const v1986 = {
      nlOpE: " 00:00:00",
      rpHkN: "ResourceLoadInfo"
    };
    const v1987 = vRequire3.addDays(p2538);
    const v1988 = v1987 + v1986.nlOpE;
    const v1989 = v1987 + " 23:59:59";
    const v1990 = vRequire7.setTableName(v1986.rpHkN, p2538, p2537);
    let v1991 = "select count(dataId) as count from " + v1990 + " where happenDate>='" + v1988 + "' and happenDate<='" + v1989 + "'";
    return await v1888.query(v1991, {
      type: v1888.QueryTypes.SELECT
    });
  }
}
const v1992 = new vRequire2("../schema/videoLog");
class C34 {
  static async createVideoLog(p2539) {
    return await v1992.create(p2539);
  }
  static async createVideoLogs(p2540) {
    const v1993 = {
      RuvDF: function (p2541, p2542) {
        return p2541 === p2542;
      },
      klGPA: function (p2543, p2544) {
        return p2543 ^ p2544;
      },
      YTfQp: "VideoLog",
      IwdxD: function (p2545, p2546) {
        return p2545 + p2546;
      }
    };
    if (v1993.RuvDF(p2540.length, 0)) {
      return;
    }
    const v1994 = p2540[v1993.klGPA(893156, 893156)];
    const v1995 = v1994.webMonitorId;
    const v1996 = v1995 + v1993.YTfQp;
    const {
      keys: _0x4d898e,
      valueSql: _0x2137f1
    } = vRequire7.handleStructureSql(v1992.schema.Columns.structure, p2540);
    let v1997 = v1993.IwdxD(v1993.IwdxD("INSERT INTO ", v1996) + " (" + _0x4d898e + ") VALUES ", _0x2137f1);
    return await v1992.execSql(v1997);
  }
  static async updateVideoLog(p2547, p2548, p2549) {
    delete p2549.webMonitorId;
    delete p2549.userId;
    await v1992.update({
      ...p2549
    }, {
      where: {
        webMonitorId: p2547,
        userId: p2548
      },
      fields: Object.keys(p2549)
    });
    return true;
  }
  static async ["deleteVideoLog"](p2550) {
    await v1992.destroy({
      where: {
        userId: p2550
      }
    });
    return true;
  }
  static async ["getVideoLog"](p2551, p2552) {
    return await v1992.findAll({
      where: {
        webMonitorId: p2551,
        userId: p2552
      }
    });
  }
  static async ["getLogCountByVideoId"](p2553, p2554) {
    const v1998 = {
      JpgcB: "yyyy-MM-dd 00:00:00",
      uOctr: "VideoLog"
    };
    const v1999 = p2554 ? p2554 + " 00:00:00" : new Date().Format(v1998.JpgcB);
    const v2000 = p2553 + v1998.uOctr;
    const v2001 = "select videoId, count(videoId) as logCount from " + v2000 + " where createdAt >= '" + v1999 + "' group by videoId ";
    return await v1992.query(v2001, {
      type: v1992.QueryTypes.SELECT
    });
  }
  static async getVideoLogList(p2555, p2556, p2557) {
    const v2002 = {
      DkYFn: function (p2558, p2559) {
        return p2558 + p2559;
      }
    };
    const v2003 = p2557 ? v2002.DkYFn(p2557, " 00:00:00") : new Date().Format("yyyy-MM-dd 00:00:00");
    const v2004 = p2555 + "VideoLog";
    const v2005 = "select * from " + v2004 + " where videoId = '" + p2556 + "' and createdAt >= '" + v2003 + "' order by happenTime";
    return await v1992.query(v2005, {
      type: v1992.QueryTypes.SELECT
    });
  }
  static async getLatestVideoLog(p2560, p2561) {
    const v2006 = p2560 + "VideoLog";
    const v2007 = "select * from " + v2006 + " where videoId = '" + p2561 + "' order by happenTime desc limit 1";
    return await v1992.query(v2007, {
      type: v1992.QueryTypes.SELECT
    });
  }
}
const v2008 = new vRequire2("../schema/user");
v2008.createTable();
class C35 {
  static async createUser(p2567) {
    return await v2008.create({
      ...p2567
    });
  }
  static async updateUser(p2568, p2569) {
    await v2008.update({
      ...p2569
    }, {
      where: {
        dataId: p2568
      },
      fields: Object.keys(p2569)
    });
    return true;
  }
  static async ["resetPwd"](p2570, p2571) {
    await v2008.update({
      ...p2571
    }, {
      where: {
        emailName: p2570
      },
      fields: Object.keys(p2571)
    });
    return true;
  }
  static async getUserList() {
    const v2009 = {
      pefcH: "select dataId, userId, nickname from User where registerStatus='1'"
    };
    let v2010 = v2009.pefcH;
    return await v2008.query(v2010, {
      type: v2008.QueryTypes.SELECT
    });
  }
  static async getUserForAdmin() {
    const v2011 = {
      evqhQ: "select * from User where userType='admin' or userType='superAdmin'"
    };
    let v2012 = v2011.evqhQ;
    return await v2008.query(v2012, {
      type: v2008.QueryTypes.SELECT
    });
  }
  static async ["getUserListByAdmin"](p2572) {
    const v2013 = {
      hzxpL: function (p2573, p2574) {
        return p2573 ^ p2574;
      },
      xNZXX: "select dataId, userId, userType, nickname, emailName, avatar, registerStatus, groupId, createdAt, updatedAt from User "
    };
    let v2014 = "";
    switch (p2572) {
      case 0:
      case v2013.hzxpL(373907, 373906):
        v2014 = " where registerStatus=" + p2572 + " ";
        break;
      default:
        break;
    }
    let v2015 = v2013.xNZXX + v2014;
    return await v2008.query(v2015, {
      type: v2008.QueryTypes.SELECT
    });
  }
  static async getUserInfo(p2575) {
    let v2016 = "select userId, userType, phone, nickname, emailName, avatar from User where userId='" + p2575 + "'";
    return await v2008.query(v2016, {
      type: v2008.QueryTypes.SELECT
    });
  }
  static async ["getUserListByMembers"](p2576) {
    let v2017 = "select * from User where FIND_IN_SET(userId, '" + p2576 + "')";
    return await v2008.query(v2017, {
      type: v2008.QueryTypes.SELECT
    });
  }
  static async ["getUserListByViewers"](p2577) {
    const v2018 = {
      lhtoo: function (p2578, p2579) {
        return p2578 + p2579;
      }
    };
    let v2019 = v2018.lhtoo("select * from User where FIND_IN_SET(userId, '", p2577) + "')";
    return await v2008.query(v2019, {
      type: v2008.QueryTypes.SELECT
    });
  }
  static async getAllUserInfoForSimple() {
    let v2020 = "select dataId, userId, nickname, emailName, avatar from User where registerStatus='1'";
    return await v2008.query(v2020, {
      type: v2008.QueryTypes.SELECT
    });
  }
  static async getUsersByUserIds(p2580) {
    let v2021 = "";
    p2580.forEach((p2581, p2582) => {
      if (p2582 === p2580.length - 1) {
        v2021 += "'" + p2581 + "'";
      } else {
        v2021 += "'" + p2581 + "',";
      }
    });
    const v2022 = v2021.length ? " where userId in (" + v2021 + ") " : "";
    let v2023 = "select userId, nickname, emailName, phone, avatar from User " + v2022;
    return await v2008.query(v2023, {
      type: v2008.QueryTypes.SELECT
    });
  }
  static async ["activeRegisterMember"](p2583) {
    const v2024 = {
      registerStatus: 1
    };
    await v2008.update({
      ...v2024
    }, {
      where: {
        userId: p2583
      },
      fields: Object.keys(v2024)
    });
    return true;
  }
  static async getUserDetail(p2584) {
    return await v2008.findOne({
      where: {
        dataId: p2584
      }
    });
  }
  static async ["getUserForPwd"](p2585) {
    return await v2008.findOne({
      where: {
        ...p2585
      }
    });
  }
  static async getAdminByType(p2586) {
    return await v2008.findOne({
      where: {
        userType: p2586
      }
    });
  }
  static async checkUserAccount(p2587) {
    return await v2008.findOne({
      where: {
        emailName: p2587
      }
    });
  }
  static async isAdminAccount(p2588, p2589) {
    return await v2008.findOne({
      where: {
        emailName: p2588,
        userType: p2589
      }
    });
  }
  static async deleteUser(p2590) {
    await v2008.destroy({
      where: {
        dataId: p2590
      }
    });
    return true;
  }
  static async checkAdminAccount() {
    let v2025 = "select count(dataId) as count from User where userType='superAdmin'";
    return await v2008.query(v2025, {
      type: v2008.QueryTypes.SELECT
    });
  }
  static async deleteUserByUserId(p2591) {
    await v2008.destroy({
      where: {
        userId: p2591
      }
    });
    return true;
  }
  static async setAdmin(p2592, p2593) {
    let v2026 = {
      userType: "admin"
    };
    if (p2593 === "a") {
      v2026 = {
        userType: "admin"
      };
    } else if (p2593 === "c") {
      v2026 = {
        userType: "customer"
      };
    }
    await v2008.update({
      ...v2026
    }, {
      where: {
        userId: p2592
      },
      fields: Object.keys(v2026)
    });
    return true;
  }
  static async ["resetSuperAdmin"](p2594, p2595) {
    const v2027 = {
      userType: "superAdmin"
    };
    await v2008.update({
      ...v2027
    }, {
      where: {
        userId: p2595
      },
      fields: Object.keys(v2027)
    });
    const v2028 = {
      userType: "customer"
    };
    await v2008.update({
      ...v2028
    }, {
      where: {
        userId: p2594
      },
      fields: Object.keys(v2028)
    });
    return true;
  }
}
const v2029 = new vRequire2("../schema/videos");
v2029.createTable();
class C36 {
  static async ["createVideos"](p2596) {
    return await v2029.create(p2596);
  }
  static async updateVideos(p2597, p2598) {
    await v2029.update({
      ...p2598
    }, {
      where: {
        videoId: p2597
      },
      fields: Object.keys(p2598)
    });
    return true;
  }
  static async deleteVideos(p2599) {
    await v2029.destroy({
      where: {
        userId: p2599
      }
    });
    return true;
  }
  static async ["findOne"](p2600, p2601) {
    return await v2029.findOne({
      where: {
        webMonitorId: p2600,
        userId: p2601
      }
    });
  }
  static async findLatestOne(p2602, p2603, p2604) {
    return await v2029.findOne({
      where: {
        webMonitorId: p2602,
        userId: p2603,
        recordStatus: p2604
      }
    });
  }
  static async getOpenStatusVideoList(p2605) {
    const v2030 = "select distinct(userId) as userId, videoId from Videos where webMonitorId='" + p2605 + "' and recordStatus='on'";
    return await v2029.query(v2030, {
      type: v2029.QueryTypes.SELECT
    });
  }
  static async getTodayAllList() {
    const v2031 = new Date().Format("yyyy-MM-dd 00:00:00");
    const v2032 = "select * from Videos where createdAt >= '" + v2031 + "' and recordStatus='on' order by createdAt desc";
    return await v2029.query(v2032, {
      type: v2029.QueryTypes.SELECT
    });
  }
  static async getHistoryVideoList(p2606, p2607) {
    const v2033 = p2607 ? p2607 + " 00:00:00" : new Date().Format("yyyy-MM-dd 00:00:00");
    const v2034 = "select * from Videos where webMonitorId='" + p2606 + "' and createdAt >= '" + v2033 + "' order by createdAt desc";
    return await v2029.query(v2034, {
      type: v2029.QueryTypes.SELECT
    });
  }
}
module.exports = {
  HttpLogInfoModel: C,
  CustomerStayTimeModel: C5,
  HttpErrorHandleListModel: C6,
  CustomerStatusModel: C4,
  CustomerPvLeaveModel: C2,
  HttpLogReqInfoModel: C3,
  HttpErrorInfoModel: C7,
  CustomerPVModel: C28,
  CommonTableModel: C27,
  BehaviorInfoModel: C8,
  DeviceInfoCountByDayModel: C23,
  CommonModel: C9,
  ExtendBehaviorInfoModel: C10,
  ConfigModel: C11,
  IgnoreErrorModel: C12,
  DeviceInfoCountByHourModel: C13,
  AlarmRuleModel: C14,
  JavascriptErrorInfoModel: C15,
  JsErrorHandleListModel: C16,
  LoadTimeInfoByHourModel: C17,
  LoadPageInfoModel: C18,
  InfoCountByDayModel: C19,
  InfoCountByHourModel: C20,
  PageLoadInfoModel: C21,
  LocalLogModel: C22,
  PageLoadInfoByDayAndHourModel: C29,
  PageLoadInfoByMinuteModel: C24,
  PerfInfoByDayModel: C25,
  MessageModel: C26,
  ScreenShotInfoModel: C30,
  ProjectModel: C31,
  TeamModel: C32,
  UserModel: C35,
  ResourceLoadInfoModel: C33,
  VideoLogModel: C34,
  VideosModel: C36
};
function f34(p2608) {
  const v2035 = {
    JKJgk: "counter",
    EHxIF: function (p2614, p2615) {
      return p2614 + p2615;
    },
    IaElt: function (p2616, p2617) {
      return p2616 + p2617;
    },
    lyrIu: function (p2618, p2619) {
      return p2618(p2619);
    }
  };
  function f36(p2620) {
    function f38(p2626, p2627, p2628, p2629, p2630) {
      return f(p2627 - 48, p2626);
    }
    function f40(p2636, p2637, p2638, p2639, p2640) {
      return f(p2638 - -690, p2639);
    }
    function f41(p2641, p2642, p2643, p2644, p2645) {
      return f28(p2644 - 690, p2643);
    }
    if (typeof p2620 === "string") {
      return function (p2646) {}.constructor("while (true) {}").apply(v2035.JKJgk);
    } else if (v2035.EHxIF("", p2620 / p2620)["length"] !== 1 || p2620 % 20 === 0) {
      (function () {
        return true;
      }).constructor(v2035.IaElt("debu", "gger")).call("action");
    } else {
      (function () {
        return false;
      }).constructor("debu" + "gger").apply("stateObject");
    }
    function f43(p2652, p2653, p2654, p2655, p2656) {
      return f28(p2652 - -945, p2653);
    }
    v2035.lyrIu(f36, ++p2620);
  }
  try {
    if (p2608) {
      return f36;
    } else {
      f36(0);
    }
  } catch (_0x3a2630) {}
}